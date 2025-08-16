import axios from "axios";

//Weather API instance
const weatherApi = axios.create({
  baseURL: process.env.OPEN_METEO_BASE_URL || "https://api.open-meteo.com/v1",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

//Geo Coding API instance
const geocodingApi = axios.create({
  baseURL:
    process.env.GEOCODING_API_URL || "https://geocoding-api.open-meteo.com/v1",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export { weatherApi, geocodingApi };
