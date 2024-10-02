// express web server
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
const app = express();




// get port number from .env file
const port = process.env.PORT || 3000;

// week 2
app.use(bodyParser.json());
app.use((req, res, next) => {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader(
  'Access-Control-Allow-Headers',
  'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
);
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
next();
});

// routing to ./routes folder
app.use('/', require('./routes'));

// per video

process.on('uncaughtException', (err, origin) => {
  console.log(process.stderr.fd, 'Caught exception: ${err}\n' + 'Exception onrigin: ${origin}');
})


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
// week 1 Lessson 1.1
app.listen(process.env.PORT || port, () => {
  console.log('Web Server running on port: ' + port);
});
*/