const User = require('../models/User');
const Post = require('../models/Post');


exports.getPosts = async (req, res) => {
  /* Get a list of all Posts */
  const { user } = req;
  const posts = await user.getPosts();
  res.status(200).json(posts);
};


exports.getPostById = async (req, res, next) => {
  /* Get specific <Post> by id */
  try {
    const { postId } = req.params;
    const post = await Post.findByPk(postId);
    if (!post) {
      const err = new Error({ message: 'Post not found!' });
      err.statusCode = 404;
      throw err;
    } else {
      res.status(200).json({ post });
    }
  } catch (err) { next(err); }
};


exports.postPost = async (req, res) => {
  /* Create a new <Post> and save it to the DB */
  const {
    userID,
    title,
    content,
    imageUrl,
  } = req.body;

  const user = await User.findByPk(userID);
  if (!user) {
    res.status(400).json({
      msg: 'No such user exists',
    });
  }
  try {
    const post = await user.createPost({ title, content, imageUrl });
    res.status(201).json(post);
  } catch (err) {
    res.status(402).json({ msg: 'Something went wrong' });
  }
};
