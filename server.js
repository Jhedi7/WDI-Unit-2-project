const express    = require('express');
const logger     = require('morgan');
const bodyParser = require('body-parser');
const PORT       = process.env.PORT || 3000;
const app        = express();
const path       = require('path');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.get('/', (req, res) => {
  res.send('READY!');
});
// app.get('/', (req, res) => {
//   res.send('READY FOR WIZARDRY!');

//   res.render(`./home/index`);
// });

app.listen(PORT, () => {
  console.log(`Ready for project two! ${PORT}!`)
});
