import User from "../Models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

//Register new user
export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //Check user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({username, email, password: hashedPassword,});

    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in user registration",
      error: error.message,
    });
  }
};


// Login user
export const loginUser = async (req, res) => {
  try {
    //Get email & password
    const { email, password } = req.body;

    //Check user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //Compare password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // JWT generate
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
};


// Get user profile 
export const getUserProfile = async (req, res) => {
  try {
    res.status(200).json({
      message: "Protected route accessed successfully",
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error accessing profile",
    });
  }
};
