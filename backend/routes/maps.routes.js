import express from "express";
import { authMiddleware } from "../middlewares/auth.middelware.js";
import { getCoordinates } from "../controlers/maps.controler.js";
import { query } from "express-validator";
import { validationResult } from "express-validator";

const mapsRoutes = express.Router();

mapsRoutes.get(
  "/get-coordinates",
  query("address")
    .isString()
    .trim()
    .isLength({ min: 1 })
    .withMessage("Address is required")
    .escape(),
  authMiddleware,
  getCoordinates
);

export default mapsRoutes;
