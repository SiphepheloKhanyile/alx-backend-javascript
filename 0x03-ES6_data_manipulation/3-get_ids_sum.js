// eslint-disable-next-line space-before-blocks
function getStudentIdsSum(objects){
  const total = objects.reduce((total, obj) => total + obj.id, 0);

  return total;
}

export default getStudentIdsSum;
