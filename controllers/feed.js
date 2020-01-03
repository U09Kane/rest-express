const getPosts = (req, res) => {
  res.status(200).json({ hello: 'world' });
};

const postPosts = (req, res) => {
  const { title, content } = req.body;

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
