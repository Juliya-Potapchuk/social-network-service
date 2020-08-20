export const getFirstObjValue = (obj) => {
  const idObjSettings = Object.keys(obj)[0];
  return { ...obj[idObjSettings], uid: idObjSettings };
};
