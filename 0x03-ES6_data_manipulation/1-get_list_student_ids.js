// eslint-disable-next-line space-before-blocks
function getListStudentsIds(objs){
  // eslint-disable-next-line space-before-blocks
  if (!Array.isArray(objs)){
    return [];
  }

  const newArray = objs.map((obj) => obj.id);

  return newArray;
}

export default getListStudentsIds;
