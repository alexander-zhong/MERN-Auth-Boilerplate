import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUser,
  updateUser,
} from "../controllers/userController.js";
import { protectedRoute } from "../middleware/authMiddleware.js";

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router
  .route("/profile")
  .get(protectedRoute, getUser)
  .put(protectedRoute, updateUser);

export default router;
