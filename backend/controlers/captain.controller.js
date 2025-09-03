import { matchedData, validationResult } from "express-validator";
import CaptainModel from "../models/captain.model.js";
import bcrypt from "bcrypt";
import Blacklist from "../models/block.model.js";
import jwt from "jsonwebtoken";
export const captainRegister = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    const data = matchedData(req);

    const isAlreadyCaptainExists = await CaptainModel.findOne({
      email: data.email,
    });
    if (isAlreadyCaptainExists) {
      return res
        .status(400)
        .json({ message: "Captain already exists", success: false });
    }
    const { fullName, email, password, vehicle } = data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const captain = await CaptainModel.create({
      fullName,
      email,
      password: hashedPassword,
      vehicle,
    });
    const token = jwt.sign(
      { email, _id: captain._id, fullName: captain.fullName },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.status(201).cookie("token", token).json({
      message: "Captain registered successfully",
      success: true,
      token,
      captain,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};

export const captainLogin = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    const data = matchedData(req);

    const captain = await CaptainModel.findOne({ email: data.email }).select(
      "+password"
    );
    if (!captain) {
      return res
        .status(404)
        .json({ message: "Captain not found", success: false });
    }

    const isMatch = await bcrypt.compare(data.password, captain.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: "Invalid credentials", success: false });
    }
    const token = jwt.sign(
      { email: captain.email, _id: captain._id, fullName: captain.fullName },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    return res.status(200).cookie("token", token).json({
      message: "Captain logged in successfully",
      success: true,
      token,
      captain,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};

export const captainLogout = async (req, res) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    res.clearCookie("token");
    await Blacklist.create({ token });
    return res
      .status(200)
      .json({ message: "Captain logged out successfully", success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};

export const captainProfile = async (req, res) => {
  try {
    const user = req.captain;
    const data = await CaptainModel.findById(user._id);
    if (!data) {
      return res
        .status(404)
        .json({ message: "Captain not found", success: false });
    }
    return res
      .status(200)
      .json({ message: "Captain profile fetched", success: true, data });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};
