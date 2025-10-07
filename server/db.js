let mongoose = require("mongoose");
let dotenv = require("dotenv");
dotenv.config();

const backendUrl = process.env.DBURL;

console.log("DBURL:", backendUrl);
const connectDB = async () => {
  try {
    await mongoose.connect(backendUrl, {
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
