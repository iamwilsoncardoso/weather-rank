import { IWeatherService } from "./IWeatherService";
import { geocodingApi, weatherApi } from "../api";
import { ICoordinates } from "../interfaces/ICoordinates";

/**
 * Service implementation for fetching weather-related data
 * @class WeatherService
 * @implements {IWeatherService}
 */
export class WeatherService implements IWeatherService {
  /**
   * Retrieves geographic coordinates for a specified city
   * @param {string} city - The city name to lookup
   * @returns {Promise<ICoordinates>} Promise resolving to coordinate data
   * @throws {Error} When city is empty or not found
   * @throws {Error} When API request fails
   * @memberof WeatherService
   */
  async getCoordinates(city: string): Promise<ICoordinates> {
    if (city === undefined || city === "") throw new Error("City is empty");
    try {
      const response = await geocodingApi.get("/search", {
        params: {
          name: city,
          count: 1,
          language: "en",
          format: "json",
        },
      });
      if (!response.data.results || response.data.results.length === 0) {
        throw new Error("Location not found");
      }
      return response.data.results[0];
    } catch (error) {
      console.error("Geocoding error:", error);
      throw new Error("Failed to fetch coordinates");
    }
  }

  /**
   * Retrieves comprehensive weather data for a specified city
   * @param {string} city - The city name to get weather for
   * @returns {Promise<any>} Promise resolving to weather data object
   * @throws {Error} When weather data cannot be fetched
   * @memberof WeatherService
   */
  async getWeatherData(city: string): Promise<any> {//return any in purpose.
    const { latitude, longitude } = await this.getCoordinates(city);

    const params = {
      latitude,
      longitude,
      daily: [
        "temperature_2m_max",
        "temperature_2m_min",
        "precipitation_sum",
        "snowfall_sum",
        "cloud_cover_mean",
      ],
      hourly: ["temperature_2m", "precipitation", "rain", "snowfall"],
      timezone: "auto",
      forecast_days: 7,
    };

    try {
      const response = await weatherApi.get("/forecast", { params });

      return response.data.daily; //I have considered returning IDailyWeather, however transformation of data can be done by graphQL types.
    } catch (error) {
      console.error("Weather data error:", error);
      throw new Error("Failed to fetch weather data");
    }
  }
}
