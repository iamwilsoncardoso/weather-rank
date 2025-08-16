import { ICoordinates } from "../interfaces/ICoordinates";

/**
 * Interface defining the contract for weather service operations
 * @interface IWeatherService
 */
export interface IWeatherService {
  /**
   * Retrieves geographic coordinates for a given city
   * @param {string} city - The city name to lookup
   * @returns {Promise<ICoordinates>} Promise resolving to coordinate data
   * @throws {Error} When city is not found or API request fails
   */
  getCoordinates(city: string): Promise<ICoordinates>;

  /**
   * Retrieves weather data for a given city
   * @param {string} city - The city name to get weather for
   * @returns {Promise<any>} Promise resolving to weather data
   * @throws {Error} When weather data cannot be fetched
   */
  getWeatherData(city: string): Promise<any>;
}
