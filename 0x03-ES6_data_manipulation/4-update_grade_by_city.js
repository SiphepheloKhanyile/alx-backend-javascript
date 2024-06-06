// eslint-disable-next-line padded-blocks, space-before-blocks
function updateStudentGradeByCity(studentList, city, newGrades){

  const studentByCity = studentList.filter((student) => student.location === city);

  // eslint-disable-next-line padded-blocks
  const updatedStudents = studentByCity.map((student) => {

    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);

    const updatedGrade = gradeObject ? gradeObject.grade : 'N/A';

    return {
      ...student,
      grade: updatedGrade,
    };
  });
  return updatedStudents;
}

export default updateStudentGradeByCity;
