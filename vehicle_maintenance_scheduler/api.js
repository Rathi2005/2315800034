import axios from "axios";
import { Log } from "../logging_middleware/logger.js";

const BASE_URL = "http://4.224.186.213/evaluation-service";

export const getDepots = async () => {
  await Log("backend", "info", "service", "Fetching depots");

  const response = await axios.get(`${BASE_URL}/depots`, {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  });

  return response.data.depots;
};

export const getVehicles = async () => {
  await Log("backend", "info", "service", "Fetching vehicles");

  const response = await axios.get(`${BASE_URL}/vehicles`, {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  });

  return response.data.vehicles;
};
