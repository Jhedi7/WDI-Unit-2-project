const dogRouter = require('express').Router();
const dogController = require('../controllers/dogController');
const viewsController = require('../controllers/viewsController');

const dogDb = require('../models/dogModels')

function sendError(err, req, res, next) {
  console.log('I send errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}

dogRouter.route('/')
  .get(dogController.getAll, viewsController.sendDogs, sendError)
  .post(dogController.createDogProfiles, viewsController.sendCreateProfile)


dogRouter.route('/:id')
  .get(dogController.getOne, viewsController.sendOneDog)
  .put(dogController.update)
  .delete(dogController.destroy, viewsController.deleteDog)


module.exports = dogRouter;
