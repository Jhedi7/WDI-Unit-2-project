require('dotenv').config();
const express        = require('express');
const logger         = require('morgan');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const PORT           = process.env.PORT || 3000;
const app            = express();
const path           = require('path');
const dogRouter      = require('./router/dogRouter');
const session        = require('express-session');
const authService    = require('./user/authService');
const authRouter     = require('./user/authRouter');
const userRouter     = require('./router/userRouter')

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('superSecret', process.env.SECRET);

app.use(session({
  secret:            app.get('superSecret'),
  resave:            false,
  saveUninitialized: false,
}));

app.use(methodOverride('_method'));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.get('/', (req, res) => {
    res.render('index');
})

app.use('/dogs', dogRouter);
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/profile', dogRouter)



app.listen(PORT, () => {
  console.log(`Ready for project two! ${PORT}!`)
});

app.use("*", (req, res, err) => {
    res.status(400).json({
      error: err,
      message: err.message
    })
})

//render json object for server errors
app.use((req, res, err) => {
    console.log(err)
    res.status(500).json({
      error: err,
      message: err.message
    })
  })
