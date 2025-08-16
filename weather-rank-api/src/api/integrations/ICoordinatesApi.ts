import { ICoordinates } from "../interfaces/ICoordinates";

/**
 * Interface defining the contract for coordinates integration operations
 * @interface ICoordinatesApi
 */
export interface ICoordinatesApi {
  /**
   * Retrieves geographic coordinates for a given city
   * @param {string} city - The city name to lookup
   * @returns {Promise<ICoordinates>} Promise resolving to coordinate data
   * @throws {Error} When city is not found or API request fails
   */
  getCoordinates(city: string): Promise<ICoordinates>;
}
