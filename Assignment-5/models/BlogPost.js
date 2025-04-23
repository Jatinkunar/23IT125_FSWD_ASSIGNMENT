// models/BlogPost.js
const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Title is required'] },
  content: { type: String, required: [true, 'Content is required'] },
  createdAt: { type: Date, default: Date.now },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: [true, 'Author is required'] },
});

module.exports = mongoose.model('BlogPost', blogPostSchema);
