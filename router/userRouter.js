const userRouter = require('express').Router();
const AuthService = require('../user/authService');
const userViewController = require('../controllers/userController');


userRouter.get('/profile', AuthService.loginRequired, (req, res) => {
    res.json(req.session);
  });



  module.exports = userRouter
