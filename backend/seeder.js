const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const products = require("./data/products");

dotenv.config();

//connect to mongodb
mongoose.connect(process.env.MONGO_URI);

const seedData = async () => {
  try {
    //clear exising data
    await Product.deleteMany();
    await User.deleteMany();

    //create a default admin user
    const createdUser = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "123456",
      role: "admin",
    });

    //assign the default user id to each product
    const userID = createdUser._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: userID };
    });

    //insert sample products into the database
    await Product.insertMany(sampleProducts);
    console.log("Data seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1); // exit the process with failure
  }
};
seedData();
