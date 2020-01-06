const { validationResult } = require('express-validator');


const getPosts = (req, res) => {
  res.status(200).json([
    {
      id: 1,
      title: 'New Post',
      content: 'the content of the post',
      imageUrl: 'img/duck.jpg',
      creator: 'Max',
    },
  ]);
};

const postPosts = (req, res) => {
  const errors = validationResult(req);
  const { title, content } = req.body;
  if (!errors.isEmpty()) {
    res.status(422).json({
      msg: 'Validation Failed',
      errors: errors.array(),
    });
  }

  const payload = {
    msg: 'Post created successfully!',
    post: {
      id: new Date().toISOString(),
      title,
      content,
    },
  };

  res.status(201).json(payload);
};

exports.getPosts = getPosts;
exports.postPosts = postPosts;
