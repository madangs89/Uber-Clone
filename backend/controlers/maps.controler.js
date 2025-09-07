import { matchedData, validationResult } from "express-validator";
import { getAddressCoordinates } from "../services/maps.services.js";
export const getCoordinates = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    const data = matchedData(req);
    const address = data.address;
    const coordinates = await getAddressCoordinates(address);
    return res.status(200).json({ coordinates });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
