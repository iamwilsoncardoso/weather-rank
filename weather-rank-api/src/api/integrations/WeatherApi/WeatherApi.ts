import { weatherApi } from "../../api";
import { IDailyWeather } from "../../interfaces/IDailyWeather";
import { ICoordinatesApi } from "../CoordinatesApi/ICoordinatesApi";
import { IWeatherApi } from "./IWeatherApi";

/**
 * Integration implementation for fetching weather-related data
 * @class WeatherApi
 * @implements {IWeatherApi}
 */
export class WeatherApi implements IWeatherApi {
  //DI
  private coordinatesApi: ICoordinatesApi;

  /**
   * Constructs a new instance of WeatherApi.
   * @param {ICoordinatesApi} coordinatesApi - The coordinates API integration instance (e.g., ICoordinatesApi).
   * @constructor
   */
  constructor(coordinatesApi: ICoordinatesApi) {
    this.coordinatesApi = coordinatesApi;
  }
  /**
   * Retrieves comprehensive weather data for a specified city
   * @param {string} city - The city name to get weather for
   * @returns {Promise<IDailyWeather>} Promise resolving to weather data object
   * @throws {Error} When weather data cannot be fetched
   * @memberof WeatherApi
   */
  async getWeatherData(city: string): Promise<IDailyWeather> {
    //return any in purpose.
    const { latitude, longitude } = await this.coordinatesApi.getCoordinates(
      city
    );

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

      return {
        temperature_2m_max: response.data.daily.temperature_2m_max,
        snowfall_sum: response.data.daily.snowfall_sum,
        precipitation_sum: response.data.daily.precipitation_sum,
        cloud_cover_mean: response.data.daily.cloud_cover_mean,
      };
      return response.data.daily;
    } catch (error) {
      console.error("Weather data error:", error);
      throw new Error("Failed to fetch weather data");
    }
  }
}
