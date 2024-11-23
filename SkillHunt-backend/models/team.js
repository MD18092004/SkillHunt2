const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Unique identifier for the team
  name: { type: String, required: true, trim: true }, // Team name
  description: { type: String, trim: true }, // Optional team description
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true, 
  }, // The user who created the team
  leader: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true, 
  }, // Team leader
  members: [
    {
      user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true, 
      }, // Team member
      role: { 
        type: String, 
        default: "Member", // Role of the member (default: Member)
      },
    },
  ],
  event_id: { 
    type: String, 
    required: true 
  }, // Event associated with the team
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project", // Links to associated projects
    },
  ], // Projects the team is working on
  createdAt: { 
    type: Date, 
    default: Date.now, 
  }, // Timestamp when the team was created
  isActive: { 
    type: Boolean, 
    default: true, 
  }, // Whether the team is active
});

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;
