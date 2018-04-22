const db = require('../config/connection')



function getAllDogs(){
  const queryPromise = db.manyOrNone(`
    SELECT * FROM dogs`);
  return queryPromise;
}

createDogProfile = (dog) => {
    const queryPromise = db.one(`
    INSERT INTO dogs (dog_name, medication, vet, weight)
    VALUES ($/dog_name/, $/medication/, $/vet/, $/weight/)
    RETURNING *
    `, dog
  );
  return queryPromise;
};

// function createDogProfile (dogs) {
//     const queryPromise = db.one(`
//     INSERT INTO dogs (dog_name, medication, vet, weight)
//     VALUES ($/dog_name/, $/medication/, $/vet/, $/weight/)
//     RETURNING *
//     `, dogs
//   );
//   return queryPromise;
// };



module.exports = {
  getAllDogs,
  createDogProfile
}
