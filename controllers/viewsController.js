const dogDb = require('../models/dogModels');


function showStuff(req, res){
  console.log('showin ya the stuff!')
  res.render('dogs', {
      dogs: res.locals.dogs

  })
  console.log(res.locals.dogs)
}

function showHome(req, res){
  console.log('showin ya home!')
  res.render('home', {
      home: res.locals.home

  })
  console.log(res.locals.home)
}

module.exports = {
  showLoginForm(req, res) {
    console.log('got here');
    res.render('auth/login');
  },

  showRegisterForm(req, res) {
    res.render('auth/register');
  },

  handleCreateUser(req, res) {
    res.redirect('/myHome');
  },
  handleLogout(req, res) {
    res.redirect('/');
  },
  handleDelete(req, res) {
    res.redirect('/quotes');
  },
};





module.exports = {
  showStuff,
  showHome
}
