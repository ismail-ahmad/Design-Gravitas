const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, ).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB error:', err));

// Schema
const FormData = mongoose.model('FormData', new mongoose.Schema({
  name: String,
  email: String
}));

// Route to handle form submissions
app.post('/submit', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newEntry = new FormData({ name, email });
    await newEntry.save();
    res.status(200).send('Form submitted successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
