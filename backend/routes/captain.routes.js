import express from "express";
import {
  captainLogin,
  captainLogout,
  captainProfile,
  captainRegister,
} from "../controlers/captain.controller.js";
import {
  captainLog,
  captainReg,
} from "../utils/expressValidator/expressValidatorSchema.js";
import { captainMiddleware } from "../middlewares/catain.middelware.js";
const captainRouter = express.Router();

captainRouter.post("/login", captainLog, captainLogin);

captainRouter.post("/register", captainReg, captainRegister);
captainRouter.post("/logout", captainLogout);
captainRouter.get("/profile", captainMiddleware, captainProfile);

export default captainRouter;
