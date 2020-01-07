const Sequelize = require('sequelize');

const db = require('../db');


const Post = db.define('post', {
  /* A blog post created by a <User> */
  id: {
    // unique id
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    // title of the post
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    // url to hosted img
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Post;
