const { Router } = require('express');

const feedController = require('../controllers/feed');


const router = Router();

router.get('/posts', feedController.getPosts);
router.get('/posts/:postId', feedController.getPostById);
router.post('/posts', feedController.postPost);

module.exports = router;
