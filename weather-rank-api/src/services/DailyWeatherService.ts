import { IWeatherApi } from "../api/integrations/IWeatherApi";
import { IDailyWeather } from "../api/interfaces/IDailyWeather";

/**
 * Service class for handling daily weather-related business logic.
 * This acts as the business layer, orchestrating data retrieval from external APIs
 * and potentially integrating with a database for persistence or caching.
 *
 * @class DailyWeatherService
 */
export class DailyWeatherService {
  //DI
  private weatherApi: IWeatherApi;

  /**
   * Constructs a new instance of DailyWeatherService.
   * @param {IWeatherApi} weatherApi - The weather API integration instance (e.g., WeatherApi).
   * @constructor
   */
  constructor(weatherApi: IWeatherApi) {
    this.weatherApi = weatherApi;
  }

  /**
   * Retrieves daily weather data for a specified city.
   * This method delegates to the injected weather API but could be extended
   * to include business logic (e.g., caching, validation, or DB integration).
   *
   * @param {string} city - The city name to fetch weather data for.
   * @returns {Promise<IDailyWeather>} Promise resolving to the daily weather data.
   * @throws {Error} If the weather data cannot be retrieved.
   * @async
   * @method getDailyWeather
   */
  async getDailyWeather(city: string): Promise<IDailyWeather> {
    try {
      return await this.weatherApi.getWeatherData(city);
    } catch (error) {
      console.error(`Failed to fetch weather for ${city}:`, error);
      throw new Error(
        `Weather data unavailable for ${city}. Please try later.`
      );
    }
  }
}
