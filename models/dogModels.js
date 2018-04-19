const db = require('../config/connection')



function getAllDogs(){
  const queryPromise = db.manyOrNone(`
    SELECT * FROM dogs`);
  return queryPromise;
}














module.exports = {
  getAllDogs: getAllDogs
}
