// routes/blogPostRoutes.js
const express = require('express');
const router = express.Router();
const blogPostController = require('../controllers/blogPostController');

router.post('/', blogPostController.createBlogPost);
router.get('/', blogPostController.getAllBlogPosts);
router.get('/:id', blogPostController.getBlogPostById);
router.delete('/:id', blogPostController.deleteBlogPost);

module.exports = router;
