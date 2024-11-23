const express = require("express");
const router = express.Router();
const Team = require("../models/Team");

// POST route to create a team
router.post("/create", async (req, res) => {
  try {
    const { name, description, leader, members, event_id } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Team name is required!" });
    }

    // Create a new team document
    const team = await Team.create({
      id: Date.now().toString(), // Generating a unique ID (can be replaced by a better logic)
      name,
      description,
      leader,
      members,
      event_id,
    });

    res.status(201).json({ message: "Team created successfully!", team });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET route to fetch all teams
router.get("/", async (req, res) => {
  try {
    // Fetch all teams and populate leader and members fields
    const teams = await Team.find()
      .populate("leader", "name email") // Populate leader with specific fields
      .populate("members.user", "name email"); // Populate members with specific fields

    res.json(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
