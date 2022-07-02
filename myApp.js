require('dotenv').config();
let express = require('express');
let app = express();
console.log('Hello World');

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


app.get('/json', (req, res) => {
  const mySecret = process.env.MESSAGE_STYLE;
  console.log(mySecret);
  const message = mySecret === 'uppercase'
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
  });

































module.exports = app;
