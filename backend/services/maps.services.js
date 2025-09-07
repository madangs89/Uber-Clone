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
