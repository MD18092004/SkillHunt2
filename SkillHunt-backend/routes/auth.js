const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const User = require("../models/user")
// Example POST route for user signup
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  console.log("name, email", name, email, password);

  // Simulate database save (replace with actual DB logic)
  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  const newUser = {name, email, password};

  const user = await User.create({
    name, email, password
  })

  res.status(201).json({
    message: "User signed up successfully!",
    user: { name, email },
  });
});
router.get("/test", (req, res) => {
  res.status(200).json({
    message: "success"
  })
})

// POST route for user login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("email pass ", email, password);
  // Implement login logic
  const user = User.findOne(email);
  if(!user) {
    res.status(404).json({ success: false, message: "user not found" })
  }
  if (email === "admin@gmail.com" && password === "1234" ) {
    res.json({ success: true, token: "fake-token", message:"Login Successfull" });
  }
  else if (email === "admin@gmail.com" && password === "1234" ) {
    res.json({ success: true, token: "fake-token", message:"Login Successfull" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

module.exports = router;
