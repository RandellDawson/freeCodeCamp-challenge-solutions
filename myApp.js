require('dotenv').config();
const bodyParser = require('body-parser');
let express = require('express');
let app = express();
console.log('Hello World');

app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
  const messageStyle = process.env.MESSAGE_STYLE;
  const message = messageStyle === 'uppercase'
    ? 'HELLO JSON'
    : 'Hello json';
  res.json({ message });
});

app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({ time: req.time });
});

app.get('/:word/echo', (req, res) => {
  const { echo, word } = req.params;
  res.json({ echo: word });
})

app.route('/name')
  .get((req, res) => {
    const { first, last } = req.query;
    res.json({ name: `${first} ${last}`});
  })
  .post((req, res) => {
    const { first, last } = req.body;
    res.json({ name: `${first} ${last}`});
  });

































module.exports = app;
