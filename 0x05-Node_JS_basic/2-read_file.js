const fs = require('fs');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath);
    const dataArray = data.toString().split('\n');
    console.log(`Number of students: ${dataArray.length - 1}`);

    const sweStudents = [];
    let numberOfSweStudents = 0;
    let numberOfCsStudents = 0;
    const csStudents = [];

    dataArray.forEach((element) => {
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

    console.log(`Number of students in CS: ${numberOfCsStudents}. List: ${csStudents.join(', ').trimEnd()}`);
    console.log(`Number of students in SWE: ${numberOfSweStudents}. List: ${sweStudents.join(', ').trimEnd()}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
