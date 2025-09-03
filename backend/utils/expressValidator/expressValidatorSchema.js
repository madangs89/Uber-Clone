import { checkSchema } from "express-validator";

export const loginSchema = checkSchema({
  email: {
    in: ["body"],
    isEmail: true,
    errorMessage: "Invalid email address",
  },
  password: {
    in: ["body"],
    isString: true,
    isLength: {
      options: { min: 4 },
    },
    errorMessage: "Password must be at least 4 characters long",
  },
});

export const registerSchema = checkSchema({
  "fullName.firstName": {
    in: ["body"],
    isString: true,
    isLength: {
      options: { min: 3 },
    },
    errorMessage: "First name must be at least 3 characters long",
  },
  "fullName.lastName": {
    in: ["body"],
    isString: true,
    errorMessage: "Last name must be at least 3 characters long",
  },
  email: {
    in: ["body"],
    isEmail: true,
    errorMessage: "Invalid email address",
  },
  password: {
    in: ["body"],
    isString: true,
    isLength: {
      options: { min: 4 },
    },
    errorMessage: "Password must be at least 4 characters long",
  },
});

export const captainLog = checkSchema({
  email: {
    isEmail: true,
    in: ["body"],
    errorMessage: "Invalid email",
  },
  password: {
    isString: true,
    isLength: {
      options: { min: 4 },
    },
    in: ["body"],
    errorMessage: "Invalid password",
  },
});

export const captainReg = checkSchema({
  email: {
    isEmail: true,
    in: ["body"],
    errorMessage: "Invalid email",
  },
  password: {
    isString: true,
    isLength: {
      options: { min: 4 },
    },
    in: ["body"],
    errorMessage: "Invalid password",
  },
  "fullName.firstName": {
    isString: true,
    isLength: {
      options: { min: 3 },
    },
    in: ["body"],
    errorMessage: "Invalid first name",
  },
  "fullName.lastName": {
    isString: true,
    in: ["body"],
    errorMessage: "Invalid last name",
  },
  "vehicle.color": {
    isString: true,
    in: ["body"],
    isLength: {
      options: { min: 2 },
    },
    errorMessage: "Invalid vehicle type",
  },
  "vehicle.plate": {
    isString: true,
    in: ["body"],
    isLength: {
      options: { min: 2 },
    },
    errorMessage: "Invalid vehicle number plate",
  },
  "vehicle.type": {
    isString: true,
    in: ["body"],
    isLength: {
      options: { min: 2 },
    },
    errorMessage: "Invalid vehicle model",
  },
  "vehicle.capacity": {
    isInt: true,
    in: ["body"],
    errorMessage: "Invalid vehicle capacity",
  },
});
