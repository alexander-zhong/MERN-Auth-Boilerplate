import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUser,
  updateUser,
} from "../controllers/userController.js";

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(getUser).put(updateUser);

export default router;
