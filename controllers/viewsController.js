const dogDb = require('../models/dogModels');


function showStuff(req, res){
  console.log('showin ya the stuff!')
  res.render('dogs', {
     dogs: res.locals.dogs

  })
}

function sendCreateProfile(req, res) {
  dogs = res.locals.dogs
  //res.redirect('users/profile');
}
// res.render('users/profile');
// res.redirect(`students/${student.id}`);

module.exports = {
  showLoginForm(req, res) {
    console.log('got here');
    res.render('auth/login');
  },

  showRegisterForm(req, res) {
    res.render('auth/register');
  },

  handleCreateUser(req, res) {
    res.redirect('/index');
  },
  handleLogout(req, res) {
    res.redirect('/');
  },
  handleDelete(req, res) {
    res.redirect('/quotes');
  },
  // showProfilePage(req, res){
  //   res.render('users/profile')
  // }
};





module.exports = {
  showStuff,
  sendCreateProfile
}
