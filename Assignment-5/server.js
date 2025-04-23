// server.js
const express = require('express');
const mongoose = require('mongoose');
const authorRoutes = require('./routes/authorRoutes');
const blogPostRoutes = require('./routes/blogPostRoutes');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/authors', authorRoutes);
app.use('/blogposts', blogPostRoutes);

// Error handling middleware
app.use(errorHandler);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
