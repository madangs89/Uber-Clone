import dotenv from "dotenv";
dotenv.config();
import axios from "axios";

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API; // Replace with your actual API key

export const getAddressCoordinates = async (address) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${GOOGLE_MAPS_API_KEY}`;
    const response = await axios.get(url);

    const results = response.data.results;
    if (results.length === 0) {
      throw new Error("No results found for the given address.");
    }

    const { lat, lng } = results[0].geometry.location;
    return { lat, lng };

    return response.data;
  } catch (error) {
    throw new Error("Failed to get coordinates: " + error.message);
  }
};

export const getDistanceTime = async (origin, destination) => {
  try {
    if (!origin || !destination)
      throw new Error("Origin and destination are required");
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${GOOGLE_MAPS_API_KEY}`; // Replace with your actual API key
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      if (response.data.rows[0].elements[0].status === "ZERO_RESULTS") {
        throw new Error("No results found for the given address.");
      }
      return response.data.rows[0].elements[0];
    } else {
      throw new Error("No results found for the given address.");
    }
  } catch (error) {
    throw new Error("Failed to get distance and time: " + error.message);
  }
};

export const suggestionsOfAddress = async (address) => {
  try {
    if (!address) throw new Error("Address is required");
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${address}&key=${GOOGLE_MAPS_API_KEY}`; // Replace with your actual API key
    const response = await axios.get(url);
    if (response.data.status === "OK") {
      return response.data.predictions;
    } else {
      throw new Error("No results found for the given address.");
    }
  } catch (error) {
    throw new Error("Failed to get suggestions: " + error.message);
  }
};
