import mongoose from "mongoose";

const captainModel = new mongoose.Schema({
  fullName: {
    firstName: {
      required: true,
      type: String,
      minLength: 2,
    },
    lastName: {
      type: String,
    },
  },
  email: {
    required: true,
    unique: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
    minLength: 4,
    select: false,
  },
  socketId: {
    type: String,
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minLength: 2,
    },
    plate: {
      type: String,
      required: true,
      minLength: 3,
    },
    capacity: {
      type: Number,
      required: true,
      minLength: 1,
      default: 1,
    },
    type: {
      type: String,
      required: true,
      enum: ["auto", "bike", "car"],
    },
  },
  location: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
});

const CaptainModel = mongoose.model("Captain", captainModel);
export default CaptainModel;
