let mongoose = require("mongoose");
let dotenv = require("dotenv")
const backendUrl = process.env.DBURL;

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mern", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ Connected successfully`);
  } catch (error) {
    console.log("❌ MongoDB connection error:", error.message);
    process.exit(1); // stop the server if DB connection fails
  }
};

module.exports = connectDB;
