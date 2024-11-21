const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming projects are created by users
    required: true,
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team', // Reference to a team, if applicable
  },
  skillsRequired: {
    type: [String], // List of skills needed for the project
    default: [],
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // References to user profiles involved in the project
    },
  ],
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  resources: [
    {
      type: String, // URLs or file paths for project resources
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
