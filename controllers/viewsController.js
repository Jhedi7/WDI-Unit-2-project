const dogDb = require('../models/dogModels');


// function sendStudents(req, res) {
//   console.log('I send successful responses');
//   res.render('students/index', {
//     students: res.locals.students
//   })
// }


function sendDogs(req, res){
  console.log('showin ya the stuff!')

  res.render('dogs/dogs', {
     dogs: res.locals.dogs
  })
}

function sendOneDog(req, res) {
  res.render('dogs/show', {
    dog: res.locals.dog
  })
}

  function sendCreateProfile(req, res) {
  profile = res.locals.newProfile,
  res.redirect(`dogs/${profile.id}`);
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
  deleteDog
}
