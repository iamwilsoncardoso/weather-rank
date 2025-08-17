import { IDailyWeather } from "../api/interfaces/IDailyWeather";

/**
 * Interface defining the contract for daily weather service operations.
 * This acts as the business layer abstraction for weather-related operations,
 * allowing different implementations (e.g., API-based, cached, or mock services).
 *
 * @interface IDailyWeatherService
 */
export interface IDailyWeatherService {
  /**
   * Retrieves daily weather data for a specified city.
   * Implementations should handle business logic such as caching, validation,
   * or fallback mechanisms when the primary data source is unavailable.
   *
   * @param {string} city - The city name to fetch weather data for
   * @returns {Promise<IDailyWeather>} Promise resolving to the daily weather data
   * @throws {Error} When weather data cannot be retrieved
   * @async
   */
  getDailyWeather(city: string): Promise<IDailyWeather>;
}
