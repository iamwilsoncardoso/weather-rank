import { Context } from "../types/context";

/**
 * GraphQL resolvers for weather-related queries
 * @namespace resolvers
 */
const resolvers = {
  Query: {
    /**
     * Resolver for the getDailyWeather query
     * @async
     * @param {unknown} _parent - The parent resolver
     * @param {{ city: string }} args - Query arguments
     * @param {Context} context - GraphQL context containing services
     * @returns {Promise<IDailyWeather>} Promise resolving to weather data
     * @throws {Error} When weather data cannot be fetched
     * @memberof resolvers.Query
     */
    getDailyWeather: async (
      _parent: unknown,
      { city }: { city: string },
      { dailyService }: Context
    ) => {
      try {
        const data = await dailyService.getDailyWeather(city);
        return {
          temperature_2m_max: data.temperature_2m_max,
          snowfall_sum: data.snowfall_sum,
          precipitation_sum: data.precipitation_sum,
          cloud_cover_mean: data.cloud_cover_mean,
        };
      } catch (error) {
        console.error("Error in getDailyWeather resolver:", error);
        throw new Error("Failed to fetch weather data");
      }
    },
  },
};

export default resolvers;
