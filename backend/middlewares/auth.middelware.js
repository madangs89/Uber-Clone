import jwt from "jsonwebtoken";
import Blacklist from "../models/block.model.js";
export const authMiddleware = async (req, res, next) => {
  try {
    const token =
      req?.cookies?.token ||
      (req.headers.authorization && req.headers.authorization.split(" ")[1]);
    if (!token) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }
    const isBlackListed = await Blacklist.findOne({ token });
    if (isBlackListed) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};
