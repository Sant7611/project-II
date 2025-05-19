const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const {protect} = require("../middleware/authMiddleware")

const router = express.Router();

//@route POST /api/users/register
//@desc Register a new user
// @access Public

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    //Registration logic
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "users already exists" });
    user = new User({ name, email, password });
    await user.save();

    //Create JWT Payload
    const payload = { user: { id: user._id, role: user.role } };

    //Sign and return the token along with the user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "12h" },
      (err, token) => {
        if (err) throw err;

        //send the user and token in response
        res.status(201).json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  } 
});

//@route POST/api/usrs/LargestContentfulPaint
//@desc authenticate user
// @access public

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    //find user by email
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "invalid credentials" });
    const isMatch = await user.matchPassword(password);

    if (!isMatch)
      return res.status(400).json({ message: "invalid credentials" });
    //Create JWT Payload
    const payload = { user: { id: user._id, role: user.role } };

    //Sign and return the token along with the user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "12h" },
      (err, token) => {
        if (err) throw err;

        //send the user and token in response
        res.json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// @route get/api/users/profile
//@desc get loggged-in user's profile (Protected Route)
// @access Private

router.get("/profile", protect, async (req, res) => {
  res.json(req.user);
});

module.exports = router;