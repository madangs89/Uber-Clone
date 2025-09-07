import express from "express";
import { authMiddleware } from "../middlewares/auth.middelware.js";
import {
  getAutoSuggestions,
  getCoordinates,
  getDistanceTimeForOriginAndDestination,
} from "../controlers/maps.controler.js";
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

mapsRoutes.get(
  "/distance-time",
  query("origin")
    .isString()
    .trim()
    .isLength({ min: 1 })
    .withMessage("Origin is required")
    .escape(),
  query("destination")
    .isString()
    .trim()
    .isLength({ min: 1 })
    .withMessage("Destination is required")
    .escape(),
  authMiddleware,
  getDistanceTimeForOriginAndDestination
);

mapsRoutes.get(
  "/suggestions",
  query("address")
    .isString()
    .trim()
    .isLength({ min: 1 })
    .withMessage("Address is required")
    .escape(),
  authMiddleware,
  getAutoSuggestions
);
export default mapsRoutes;
