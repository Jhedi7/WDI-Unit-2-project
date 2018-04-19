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
  .get(dogController.getAll, viewsController.showStuff, sendError)


// housesRouter.route('/:id')
//   .get(housesController.getOne, housesController.getStudentsHouse, housesViewController.sendStudentHouse)


module.exports = dogRouter;
