import { geocodingApi } from "../api";
import { ICoordinates } from "../interfaces/ICoordinates";
import { ICoordinatesApi } from "./ICoordinatesApi";

/**
 * Integration implementation for fetching lat & log coordinates for a city
 * @class CoordinatesApi
 * @implements {ICoordinatesApi}
 */
export class CoordinatesApi implements ICoordinatesApi {
  /**
   * Retrieves geographic coordinates for a specified city
   * @param {string} city - The city name to lookup
   * @returns {Promise<ICoordinates>} Promise resolving to coordinate data
   * @throws {Error} When city is empty or not found
   * @throws {Error} When API request fails
   * @memberof CoordinatesApi
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
}
