const Sequelize = require('sequelize');

const db = require('../db');
const Post = require('./Post');


// Definition
const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Relationships
User.hasMany(Post);

module.exports = User;
