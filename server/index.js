let express = require("express");
let dotenv = require("dotenv");
let connectDB = require("./db.js");
let userRoutes = require("./App/routes/userRoutes");
let cors = require("cors"); // ✅ add this

dotenv.config();
const app = express();

app.use(express.json());

// ✅ Enable CORS for all requests (development friendly)
app.use(cors());

// OR enable for a specific origin only (more secure)
// app.use(cors({ origin: "http://localhost:3000" }));

connectDB();
app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`✅ Backend is running on port ${PORT}`));
