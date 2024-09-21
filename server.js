// express web server
// test
const express = require('express');
const app = express();

// mongodb
const mongodb = require('./data/database');

// port
const port = process.env.PORT || 3000;

// routing
app.use('/', require('./routes'));

// err if Mongodb doesn't listen
mongodb.initDb((err) => {
  if(err) {
    console.log(err);
  }
  else {
    app.listen(port, () => {console.log('DATABASE MONGO is listening and NODE running on PORT ' + port)});
  }
});

/*
app.listen(process.env.PORT || port, () => {
  console.log('Web Server running on port: ' + port);
});
*/