// controllers/blogPostController.js
const BlogPost = require('../models/BlogPost.');
const Author = require('../models/Author');

exports.createBlogPost = async (req, res) => {
  try {
    const { title, content, authorId } = req.body;
    const author = await Author.findById(authorId);
    if (!author) return res.status(404).send('Author not found');

    const blogPost = new BlogPost({ title, content, author: authorId });
    await blogPost.save();
    res.status(201).send(blogPost);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getAllBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find().populate('author', 'name email');
    res.status(200).send(blogPosts);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getBlogPostById = async (req, res) => {
  try {
    const blogPost = await BlogPost.findById(req.params.id).populate('author', 'name email');
    if (!blogPost) return res.status(404).send('Blog post not found');
    res.status(200).send(blogPost);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteBlogPost = async (req, res) => {
  try {
    const blogPost = await BlogPost.findByIdAndDelete(req.params.id);
    if (!blogPost) return res.status(404).send('Blog post not found');
    res.status(200).send('Blog post deleted');
  } catch (err) {
    res.status(500).send(err);
  }
};
