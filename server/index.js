let express = require("express");
let dotenv = require("dotenv");
let connectDB = require("./db.js");
let userRoutes = require("./App/routes/userRoutes");
let cors = require("cors"); // ✅ add this
let transicationRoutes = require('./App/routes/transication');
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());



connectDB();
app.use('/user1' , transicationRoutes);
app.use('/user' , userRoutes);
app.get("/", (req, res) => {
  res.send("API is running...");
});




const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`✅ Backend is running on port ${PORT}`));
