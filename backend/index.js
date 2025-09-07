import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./utils/db/connectDb.js";
import userRoutes from "./routes/user.routes.js";
import captainRouter from "./routes/captain.routes.js";
import mapsRoutes from "./routes/maps.routes.js";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "Set-Cookie", "Cookie"],
  })
);
app.get("/", async (req, res) => {
  res.json({ message: "Hello World" });
});

app.use("/api/users", userRoutes);
app.use("/api/captain", captainRouter);
app.use("/maps", mapsRoutes);
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port http://localhost:${PORT}`);
});
