const dogDb = require('../models/dogModels');




// function getAll(req, res, next) {
//   console.log('bout to look for some dogs!');
//   dogDb.getAllDogs()
//     .then(data => {
//       console.log('looked for some dogs and got ' + data.length + ' results');
//       res.locals.dogs = data;
//       next ();
//     })
//     .catch(err => {
//       next(err);
//     });
// }

function createDogProfiles(req, res, next) {
  console.log('bout to crate a profile!');
  dogDb.createDogProfile(req.body)
    .then(data => {
      console.log('tried to')
      res.locals.dogs = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
}

module.exports = {

  createDogProfiles
}
