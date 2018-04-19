const dogDb = require('../models/dogModels');


function showStuff(req, res){
  console.log('showin ya the stuff!')
  res.render('dogs', {
      dogs: res.locals.dogs

  })
  console.log(res.locals.dogs)
}

module.exports = {
  showStuff: showStuff
}
