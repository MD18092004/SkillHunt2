const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming there's a User model
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now, // When the experience was added
  },
  skillsUsed: {
    type: [String], // List of skills related to this experience
    default: [],
  },
  type: {
    type: String,
    enum: ['Hackathon', 'Project', 'Job', 'Internship', 'Other'], // Experience categories
    required: true,
  },
  link: {
    type: String, // Optional link to a project or portfolio
  },
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
