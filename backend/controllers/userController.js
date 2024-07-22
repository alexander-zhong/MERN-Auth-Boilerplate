import asyncHandler from "express-async-handler";

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
