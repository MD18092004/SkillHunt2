const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());


mongoose
  .connect("mongodb://127.0.0.1:27017/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Database connection error:', err));


// Simulated project data
const projects = [
  { id: 1, title: "AI Project", description: "Description of AI Project" },
  { id: 2, title: "Web Dev Project", description: "Description of Web Dev Project" },
];

// API route to fetch projects
app.get("/api/project", (req, res) => {
  res.status(200).json(projects);
});

const authRouter = require("./routes/auth")
app.use("/api/auth", authRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
