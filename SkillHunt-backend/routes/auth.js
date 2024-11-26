const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Adjust path to your User model

// Signup
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);

  try {
    // Check for missing fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists!" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User signed up successfully!",
      userId: user._id, // Send the MongoDB `_id` in the response
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// Signin
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  console.log("Signin request:", email, password);

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1h" });

    res.status(200).json({
      message: "Login successful!",
      token,
      user: { name: user.name, email: user.email },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// Test Route
router.get("/test", (req, res) => {
  res.status(200).json({
    message: "success",
  });
});

// Login (Placeholder logic - replace with actual database logic)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Login request:", email, password);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1h" });
    res.status(200).json({ success: true, token, message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// Export the router
module.exports = router;
