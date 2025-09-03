import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
    getProfile,
} from "../controlers/user.contoler.js";
import { body, validationResult, matchedData } from "express-validator";
import {
  loginSchema,
  registerSchema,

} from "../utils/expressValidator/expressValidatorSchema.js";
import { authMiddleware } from "../middlewares/auth.middelware.js";

const userRoutes = express.Router();

userRoutes.post("/register", registerSchema, registerUser);

userRoutes.post("/login", loginSchema, loginUser);
userRoutes.get("/profile", authMiddleware, getProfile);

userRoutes.post("/logout", logoutUser);

export default userRoutes;
