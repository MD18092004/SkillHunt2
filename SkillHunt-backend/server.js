const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database (Using `connectDB` function for connection logic)
connectDB();

// Simulated project data (kept for reference if required)
const projects = [
  { id: 1, title: "AI Project", description: "Description of AI Project" },
  { id: 2, title: "Web Dev Project", description: "Description of Web Dev Project" },
];

// API route to fetch projects
app.get("/api/project", (req, res) => {
  res.status(200).json(projects);
});

// Define Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/teams", require("./routes/teamRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/auth", require("./routes/auth")); // Auth route integration

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
