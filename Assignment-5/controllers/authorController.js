// controllers/authorController.js
const Author = require('../models/Author');

exports.createAuthor = async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).send(author);
  } catch (err) {
    res.status(400).send(err);
  }
};
