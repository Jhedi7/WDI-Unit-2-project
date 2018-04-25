const userRouter = require('express').Router();
const AuthService = require('../user/authService');
const userViewController = require('../controllers/userController');


userRouter.get('/profile', AuthService.loginRequired, (req, res) => {
    // res.json(req.session);
    res.render('users/profile');
    console.log('from the user router')
  });



  module.exports = userRouter
