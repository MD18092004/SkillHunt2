const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // Ensures no duplicate skill names
    trim: true,
  },
  category: {
    type: String,
    enum: ['Programming', 'Design', 'Management', 'Marketing', 'Other'], // Optional categorization
    default: 'Other',
  },
  popularity: {
    type: Number,
    default: 0, // Used for ranking or trending skills
  },
  description: {
    type: String,
    trim: true, // Optional description of the skill
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
