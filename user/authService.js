//bcrypt will be used to hash the plain text password (register phase) and compare password_digest (login phase)
const bcrypt = require('bcrypt');

//import User model functions, allowing us to crete User database and retrieve user from database
const UserDb = require("../models/userModel");

function login(req, res, next) {
    let user;
    const loginAttempt = {
        uname: req.body.uname,
        email: req.body.email,
        password: req.body.password
      }
  UserDb.findUser(loginAttempt.uname)
    .then(userInfo => {
      user = userInfo
      return bcrypt.compareSync(loginAttempt.password, userInfo.password_digest)
    })
    .then(isValidPass => {
        if (!isValidPass) {
            throw {
            message: 'Wrong log-in information'
            }
        }
        // console.log(user)
        req.session.user = user;
        next();
    })
    .catch(err => {
      next(err);
    })
}

function logout(req, res, next) {
  // destroy session
  // next will be called with either an error or undefined.
  // (negative or positive path)
  req.session.destroy(err => next(err));
}

function register(req, res, next) {
  const salt = parseInt(process.env.SALT)
  const hash = bcrypt.hashSync(req.body.password, salt)
  const user = {
    uname: req.body.uname,
    email: req.body.email,
    password_digest: hash
  }

  UserDb.createUser(user)
    .then(user => {
      if (!user) {
        throw {
          message: 'Incorrect password'
        }
      }

      req.session.user = user;
      next();
    })
    .catch(err => {
      next(err);
    })
}



module.exports = {
  login,
  logout,
  register,
  loginRequired: [
    /* this is either going to resolve to next(false) or next(null) */
    (req, res, next) => next(!req.session.user || null),
    (err, req, res, next) => res.sendStatus(401),
  ]
}




// const bcrypt = require('bcrypt');
// const User   = require('../models/userModel');

// module.exports = {
//   /**
//    * @func login
//    * @desc compares the cleartext password with the hashed version in the DB
//    */
//   async login(req, res, next) {
//     // 1. retrieve the username and password from the POSTED body
//     try {
//       const { username, password } = req.body;

//       const user = await User.findOne(username);
//       // bcrypt, for some reason, doesn't reject
//       // we have to manually throw an error which will reject the promise
//       const isValidPass = await bcrypt.compare(password, user.password_digest);

//       if (!isValidPass) {
//         throw { message: 'Incorrect Password' };
//       }

//       req.session.user = user;
//       next();
//     } catch (err) {
//       next(err);
//     }




//     // // 2. Go to the DB find a user with THIS username
//     // User.findOne(username)
//     //   .then(async (user) => {
//     // //     2a. [user found] compare the plaintext pass to the password_digest
//     //     const isValidPass = await bcrypt.compare(password, user.password_digest);
//     // //.    2b. [password matches] save the user in req.session.user
//     //     if(!isValidPass) {
//     //       throw { message: 'Incorrect Password' };
//     //     }
//     //      req.session.user = user;
//     //      next();
//     //   })
//     //   .catch((err) => {
//     //     next(err);
//     //   })
//     // // 3.  ELSE/CATCH next(err)
//   },

//   /**
//    * @func logout
//    * @description destroys a user's session; logs a user out;
//    */
//   logout(req, res, next) {
//     // destroy session
//     // next will be called with either an error or undefined.
//     // (negative or positive path)
//     req.session.destroy(err => next(err));

//   },

//   /**
//    * @hint: this is an array of middleware functions
//    */
//   loginRequired: [
//     /* this is either going to resolve to next(false) or next(null) */
//     (req, res, next) => next(!req.session.user || null),
//     (err, req, res, next) => res.sendStatus(401),
//   ],
// };
