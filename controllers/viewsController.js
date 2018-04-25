const dogDb = require('../models/dogModels');

function sendDogs(req, res){
  console.log('showin ya the stuff!')

  res.render('dogs/dogs', {
     dogs: res.locals.dogs
  })
}

function sendOneDog(req, res) {
  console.log('sending one dog', res.locals.dog)
  res.render('./new', {
    dog: res.locals.dog

   })

  console.log('foreach IS a function!', res.locals.dog)
}




function handleMed(req, res) {
    res.redirect('/index');
  }

  function sendCreateProfile(req, res) {
  profile = res.locals.newProfile,
  res.redirect(`new/${profile.id}`);
  console.log('this should be the crated profile function')
}

  function showLoginForm(req, res) {
    console.log('got here');
    res.render('auth/login');
  }

  function showRegisterForm(req, res) {
    res.render('auth/register');
  }

 function handleCreateUser(req, res) {
    res.redirect('/index');
  }

  function handleLogout(req, res) {
    res.redirect('/');
  }

  function handleDelete(req, res) {
    res.redirect('/quotes');
  }

  function showProfilePage(req, res){
    res.render('users/profile')
  }

  function deleteDog(req, res) {
  res.redirect(`dogs/dogs`);
}

function sendUpdateDog(req, res) {
  res.render('users/profile', {
    dog: res.locals.dog
  });
  console.log('i updated!')
}



module.exports = {
  sendDogs,
  sendCreateProfile,
  showLoginForm,
  showRegisterForm,
  handleCreateUser,
  handleLogout,
  handleDelete,
  showProfilePage,
  sendOneDog,
  deleteDog,
  sendUpdateDog
}
