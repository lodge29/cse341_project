// express web server
const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');

app.get('/', lesson1Controller.dustinRoute);
app.get('/lodge', lesson1Controller.lodgeRoute);

// original code - bulky
/*
app.get('/', (req, res) => {
  res.send("dustin");
});
 

app.get('/lodge', (req, res) => {
    res.send("lodge");
  });
*/
const port = 3000;

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});