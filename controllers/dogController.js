const dogDb = require('../models/dogModels');




function getAll(req, res, next) {
  console.log('bout to look for some dogs!');
  dogDb.getAllDogs()
    .then(data => {
      console.log('looked for some dogs and got ' + data.length + ' results');
      res.locals.dogs = data;
      next ();
    })
    .catch(err => {
      next(err);
    });
}

module.exports = {
  getAll: getAll
}
