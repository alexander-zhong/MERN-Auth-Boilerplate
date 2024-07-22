import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc Auth User/set Token
// POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
});

// @desc Register User
// POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists with this email");
  }

  const user = await User.create({ name, email, password });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }

  res.status(200).json({ message: "Register user" });
});

// @desc Logout User
// POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout user" });
});

// @desc Get User's profile
// GET /api/users/profile
// @access Private (requiring JWT)
const getUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get User's Profile" });
});

// @desc Update User's profile
// PUT /api/users/profile
// @access Private (requiring JWT)
const updateUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User's Profile" });
});

export { authUser, registerUser, logoutUser, getUser, updateUser };
