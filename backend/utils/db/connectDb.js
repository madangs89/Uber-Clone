import mongoose from "mongoose";

export const connectDB = () => {
  try {
    mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => console.log("Connected to MongoDB"))
      .catch((error) => console.error("Error connecting to MongoDB:", error));
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
