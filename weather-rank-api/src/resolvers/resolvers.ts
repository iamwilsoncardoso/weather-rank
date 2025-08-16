import { Context } from "../types/context";

/**
 * GraphQL resolvers for weather-related queries
 * @namespace resolvers
 */
const resolvers = {
  Query: {
    /**
     * Resolver for the getWeatherData query
     * @async
     * @param {unknown} _parent - The parent resolver
     * @param {{ city: string }} args - Query arguments
     * @param {Context} context - GraphQL context containing services
     * @returns {Promise<Object>} Promise resolving to weather data
     * @throws {Error} When weather data cannot be fetched
     * @memberof resolvers.Query
     */
    getWeatherData: async (
      _parent: unknown,
      { city }: { city: string },
      { weatherService }: Context
    ) => {
      try {
        const data = await weatherService.getWeatherData(city);
        return {
          temperature_2m_max: data.temperature_2m_max,
          snowfall_sum: data.snowfall_sum,
          precipitation_sum: data.precipitation_sum,
          cloud_cover_mean: data.cloud_cover_mean,
        };
      } catch (error) {
        console.error("Error in getWeatherData resolver:", error);
        throw new Error("Failed to fetch weather data");
      }
    },
  },
};

export default resolvers;
