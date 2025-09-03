import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controlers/user.contoler.js";
import { body, validationResult, matchedData } from "express-validator";
import {
  loginSchema,
  registerSchema,
} from "../utils/expressValidator/expressValidatorSchema.js";

const userRoutes = express.Router();

userRoutes.post("/register", registerSchema, registerUser);

userRoutes.post("/login", loginSchema, loginUser);

userRoutes.post("/logout", logoutUser);

export default userRoutes;
