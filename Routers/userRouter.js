import express from "express";
import { registerUser, loginUser,getUserProfile } from "../Controllers/userController.js";
import authMiddleware from "../Middleware/authMiddleware.js";

const router = express.Router();

// routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getUserProfile);


export default router;
