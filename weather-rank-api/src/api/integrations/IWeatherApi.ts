/**
 * Interface defining the contract for weather integration operations
 * @interface IWeatherApi
 */
export interface IWeatherApi {
  /**
   * Retrieves weather data for a given city
   * @param {string} city - The city name to get weather for
   * @returns {Promise<any>} Promise resolving to weather data
   * @throws {Error} When weather data cannot be fetched
   */
  getWeatherData(city: string): Promise<any>;
}
