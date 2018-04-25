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

function createDogProfiles(req, res, next) {
  console.log('bout to crate a profile!');
  dogDb.createDogProfile(req.body)
    .then(data => {
      console.log('created a profile')
      res.locals.newProfile = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
}
function createMed(req, res, next) {
  console.log('bout to crate an rx!');
  dogDb.createDogProfile(req.body)
    .then(data => {
      console.log('tried to')
      res.locals.medicqtion = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
}

function getOne(req, res, next) {
  dogDb.getOneDog(req.params.id)
    .then(data=> {
      res.locals.dog = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
}

function update(req, res, next) {
  req.body.id = req.params.id;
  dogDb.updateDog(req.body)
    .then(data => {
      res.redirect(`/profile/${req.body.id}`)
      console.log('trying to update!')
    })
    .catch(err=> {
      err:err
    })
}

function destroy(req, res) {
  dogDb.deleteDog(req.params.id)
    .then(() => {
      res.redirect('/dogs');
    })
    .catch(err => {
      res.status(500).json({
        message:err.message
      })
    })
}
module.exports = {

  createDogProfiles,
  getAll,
  getOne,
  update,
  destroy,
  createMed
}
