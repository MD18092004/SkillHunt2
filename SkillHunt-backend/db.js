const mongoose = require("mongoose");

process.env.MONGO_URI = "mongodb+srv://manishdyavani:TtLSHRi29ckC7yKh@cluster0.dkd8w.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  console.log("Connecting to MongoDB...");
  try {
    console.log("MongoDB URI:", process.env.MONGO_URI); // Log the URI for debugging

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      ssl: true,               // Enable SSL for secure connections
      useNewUrlParser: true,   // Parsing MongoDB connection string (optional in latest Mongoose)
      useUnifiedTopology: true, // Ensures the new connection management engine (optional in latest Mongoose)
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`); // Log the connected host
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err.message}`); // Log connection error
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
