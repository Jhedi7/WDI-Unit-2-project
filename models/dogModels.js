const db = require('../config/connection')


function getAllDogs() {
  const queryPromise = db.manyOrNone(`
    SELECT * FROM dogs`);
  return queryPromise;
}

function getOneDog(id) {
  const queryPromise = db.one(`
    SELECT * FROM dogs
    WHERE id = $1`, id);
  return queryPromise;
}
function createDogProfile(dog) {
  const queryPromise = db.one(`
    INSERT INTO dogs (dog_name, medication, vet, weight)
    VALUES ($/dog_name/, $/medication/, $/vet/, $/weight/)
    RETURNING *
    `, dog
  );
  return queryPromise;
}
function updateDog(dog) {
  const queryPromise = db.one(`
    UPDATE dogs
    SET dog_name = $/dog_name/, medication = $/medication/, vet = $/vet/, weight = $/weight/
    user_id = $/user_id/
    WHERE id = $/id/
    RETURNING *`,
    dog );
  return queryPromise;
}

function deleteDog(id) {
  const queryPromise = db.none(`
    DELETE FROM dogs
    WHERE id = $1`, id);
  return queryPromise;
}





module.exports = {
  getAllDogs,
  createDogProfile,
  getOneDog,
  updateDog,
  deleteDog
}
