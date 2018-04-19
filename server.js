require('dotenv').config();
const express      = require('express');
const logger       = require('morgan');
const bodyParser   = require('body-parser');
const PORT         = process.env.PORT || 3000;
const app          = express();
const path         = require('path');
const dogRouter    = require('./router/dogRouter');
const session      = require('express-session');
const authService  = require('./user/auth/AuthService');
const authRouter   = require('./user/auth/AuthRouter');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
  secret:            app.get('superSecret'),
  resave:            false,
  saveUninitialized: false,
}));



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('superSecret', process.env.SERVER_SECRET);




app.get('/', (req, res) => {
  // res.send("hi");
  res.render('dogs');
});

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/myHome', AuthService.loginRequired, (req, res) => {
  res.json(req.session);
});
app.get('/', (req, res) => {
  res.render('home', { message: 'Welcome! This is a public page.' });
});


app.use('/dogs', dogRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Ready for project two! ${PORT}!`)
});
