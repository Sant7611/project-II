const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database connected success");
  } catch (err) {
    console.error("Mongodb error", err);
    process.exit(1);
  }
};

module.exports = connectDB;
