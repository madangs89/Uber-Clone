import mongoose from "mongoose";

const blacklistSchema = new mongoose.Schema(
  {
    token: { type: String, required: true },
    expired: { type: Date, default: Date.now, expires: 60 * 60 * 25 },
  },
  { timestamps: false }
);

const Blacklist = mongoose.model("Blacklist", blacklistSchema);
export default Blacklist;
