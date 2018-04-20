// const authRouter     = require('express').Router();
// const AuthService    = require('./authService');
// const ViewController = require('../controllers/viewsController');
// const UserController = require('../models/userModel');

// /* public routes */

// authRouter.route('/login')
//   /* deliver the login form */
//   .get(ViewController.showLoginForm)
//    receive the login form / creds
//   .post(AuthService.login, ViewController.handleCreateUser);

// //authRouter.route('/register')


// authRouter.get('/logout', AuthService.logout, ViewController.handleLogout);

// /* Error handler */
// authRouter.use((err, req, res, next) => {
//   console.error(err);
//   res.json({ error: err });
// });

// module.exports = authRouter;

const authRouter = require('express').Router();
const AuthServices = require('./authService');
const userController  = require("../controllers/userController");


authRouter.get('/login', userController.showLoginForm)
authRouter.post('/login', AuthServices.login, userController.handleUserProfile)

authRouter.get('/register', userController.showRegisterForm)
authRouter.post('/register',AuthServices.register, userController.handleUserProfile)

/* Error handler */
authRouter.use((err, req, res, next) => {
    console.error(err);
    res.json({ error: err });
  });

  module.exports = authRouter

