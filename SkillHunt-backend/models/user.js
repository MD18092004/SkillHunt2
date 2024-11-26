const mongoose = require("mongoose");

// Define the User Schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  /*id: { type: String, required: true, unique: true }, // Unique ID for each user
  name: { type: String, required: true }, // Full name of the user
  email: { type: String, required: true, unique: true }, // User email (should be unique)
  password: { type: String, required: true }, // Password for authentication
  university: { type: String, required: true }, // University/college name
  skills: { type: [String], required: false }, // Array of skills
  experiences: { type: String, required: false }, // Experience details (optional)
  projects: { type: String, required: false }, // Project details (optional)
  resume: { type: String, required: false }, // Link to the resume (optional)
  age: { type: Number, required: true }, // User's age
  gender: { type: String, required: false }, // Gender of the user (optional)
  username: { type: String, required: true, unique: true }, // Unique username*/
});

// Check if the model exists, if not, define it
const User = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = User;
