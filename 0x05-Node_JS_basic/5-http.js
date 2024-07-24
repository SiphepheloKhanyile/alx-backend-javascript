const fs = require('fs');
const http = require('http');
const url = require('url');

const app = http.createServer((req, res) => {
  const { path } = url.parse(req.url);
  res.writeHead(200, { 'Content-type': 'text/plain' });

  if (path === '/') {
    res.end('Hello Holberton School!');
  }

  if (path === '/students') {
    if (!process.argv[2]) {
      res.end('This is the list of our students');
    }

    const databaseName = process.argv[2];
    console.log(databaseName);

    try {
      fs.readFile(databaseName, (err, data = '') => {
        if (err) {
          throw new Error('Cannot load the database');
        }
        const dataArray = data.toString().split('\n');
        const sweStudents = [];
        let numberOfSweStudents = 0;
        let numberOfCsStudents = 0;
        let numberOfStudents = 0;
        const csStudents = [];

        dataArray.forEach((element) => {
          if (element !== '') {
            numberOfStudents += 1;
          }
          const student = element.split(',');
          if (student[student.length - 1] === 'SWE') {
            sweStudents.push(student[0]);
            numberOfSweStudents += 1;
          }

          if (student[student.length - 1] === 'CS') {
            csStudents.push(student[0]);
            numberOfCsStudents += 1;
          }
        });

        res.write('This is the list of our students\n');
        res.write(`Number of students: ${numberOfStudents - 1}\n`);
        res.write(`Number of students in CS: ${numberOfCsStudents}. List: ${csStudents.join(', ').trimEnd()}\n`);
        return res.end(`Number of students in SWE: ${numberOfSweStudents}. List: ${sweStudents.join(', ').trimEnd()}`);
      });
    } catch (error) {
      throw new Error('Cannot load the database');
    }
  }
});

app.listen(1245);
module.exports = app;
