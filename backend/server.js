const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes")
const connectDB = require("./config/db");

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 3000;

//connect ot mongodb

if(connectDB()){
  console.log("Database connected successfully");
}

app.get("/", (req, res) => {
  res.send("welcome ");
});

//API routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
