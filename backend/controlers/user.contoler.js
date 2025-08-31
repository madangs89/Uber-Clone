import { validationResult, matchedData } from "express-validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";

export const registerUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(), success: false });
    }
    const data = matchedData(req);

    const { fullName, email, password } = data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });
    if (!user) {
      return res
        .status(500)
        .json({ message: "Failed to register user", success: false });
    }
    const token = jwt.sign(
      { _id: user._id, fullName, email },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    return res
      .status(201)
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      })
      .json({
        message: "User registered successfully",
        data: { fullName, token, email },
        success: true,
      });
  } catch (error) {
    console.log("Error occurred while registering user:", error);

    return res
      .status(500)
      .json({ error: "Internal server error While Registering User" });
  }
};
export const loginUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(), success: false });
    }
    const data = matchedData(req);
    const { email, password } = data;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const token = jwt.sign(
      { _id: user._id, fullName: user.fullName, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    return res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      })
      .json({
        message: "User logged in successfully",
        data: { fullName: user.fullName, token, email: user.email },
        success: true,
      });
  } catch (error) {
    console.log("Error occurred while logging in user:", error);
    return res
      .status(500)
      .json({ error: "Internal server error While Logging In User" });
  }
};
export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.log("Error occurred while logging out user:", error);
    return res
      .status(500)
      .json({ error: "Internal server error While Logging Out User" });
  }
};
