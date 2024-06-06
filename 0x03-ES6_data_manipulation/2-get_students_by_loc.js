// eslint-disable-next-line space-before-blocks
function getStudentsByLocation(students, city){
  const newList = students.filter((obj) => {
    // eslint-disable-next-line space-before-blocks
    if (obj.location === city){
      return true;
    }

    return false;
  });

  return newList;
}

export default getStudentsByLocation;
