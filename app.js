const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');


// init app
const app = express();

// add middleware
app.use(bodyParser.json());

// enable cors
app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methodss', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

// register routes
app.use('/feed', feedRoutes);

// start app
app.listen(5000);
