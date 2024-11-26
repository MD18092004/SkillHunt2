const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Ensure the path points to your User model

// POST: Create a new user
router.post("/", async (req, res) => {
  try {
    // Validate input fields
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Create the user in the database
    const user = await User.create(req.body);

    res.status(201).json({
      message: "User created successfully.",
      user, // Respond with the created user object
    });
  } catch (error) {
    console.error("Error while creating user:", error.message); // Log error for debugging
    res.status(400).json({ message: error.message });
  }
});

// GET: Fetch all users
router.get("/", async (req, res) => {
  try {
    // Retrieve all users from the database
    const users = await User.find();

    res.status(200).json({
      message: "Users fetched successfully.",
      users, // Respond with the list of users
    });
  } catch (error) {
    console.error("Error while fetching users:", error.message); // Log error for debugging
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
