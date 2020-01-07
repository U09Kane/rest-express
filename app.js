const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');
const db = require('./db');
const User = require('./models/User');


// init app
const app = express();

// add middleware
app.use(bodyParser.json());

// Add user to request obj
app.use(async (req, _, next) => {
  req.user = await User.findByPk(1);
  next();
});

// enable cors
app.use((_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methodss', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

// register routes
app.use('/feed', feedRoutes);

// error handling
app.use((error, _, res) => {
  const { status = 500, message = 'Interal server error' } = error;
  res.status(status).json({ message });
});

// start app
db.sync({ force: false })
  .then(async () => {
    // Initialize a User
    const user = await User.findByPk(1);
    if (!user) User.create({ name: 'Me' });
  })
  .then(() => { app.listen(3000); })
  .catch((err) => { console.error(err); });
