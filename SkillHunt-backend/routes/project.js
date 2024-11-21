const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("email pass", email, password);
  
  // Implement login logic
  if (email === "admin@gmail.com" && password === "1234") {
    res.json({ success: true, token: "fake-token" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

module.exports = router;


//This module can now be directly used in your Express application.

