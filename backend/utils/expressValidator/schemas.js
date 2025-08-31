import { checkSchema } from "express-validator";

export const registerSchema = checkSchema({
  fullName: {
    firstName: {
      in: ["body"],
      isString: true,
      isLength: {
        options: { min: 3 },
      },
      errorMessage: "First name must be at least 3 characters long",
    },
    lastName: {
      in: ["body"],
      isString: true,
      isLength: {
        options: { min: 3 },
      },
      errorMessage: "Last name must be at least 3 characters long",
    },
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
