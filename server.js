const express    = require('express');
const logger     = require('morgan');
const bodyParser = require('body-parser');
const PORT       = process.env.PORT || 3000;
const app        = express();
const path       = require('path');
const dogRouter  = require('./router/dogRouter')

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// app.get('/', (req, res) => {
//   res.send('mm hello')
//   console.log('hello')
// });

app.get('/', (req, res) => {
  // res.send("hi");
  res.render('dogs');
});


app.use('/dogs', dogRouter);

app.listen(PORT, () => {
  console.log(`Ready for project two! ${PORT}!`)
});
