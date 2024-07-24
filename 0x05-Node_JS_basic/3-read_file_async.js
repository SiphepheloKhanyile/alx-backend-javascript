const fs = require('fs').promises; // Use promises API

async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8'); // Read file asynchronously
    const dataArray = data.split('\n');

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

    console.log(`Number of students: ${numberOfStudents - 1}`);
    console.log(`Number of students in CS: ${numberOfCsStudents}. List: ${csStudents.join(', ').trimEnd()}`);
    console.log(`Number of students in SWE: ${numberOfSweStudents}. List: ${sweStudents.join(', ').trimEnd()}`);
    return data;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
