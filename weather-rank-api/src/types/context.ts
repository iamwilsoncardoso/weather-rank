import { WeatherService } from "../api/services/WeatherService ";

/**
 * Defines the GraphQL context interface containing service dependencies
 * @module types/context
 * @interface Context
 */
export interface Context {
  /**
   * Weather service instance for fetching weather data
   * @type {WeatherService}
   * @memberof Context
   */
  weatherService: WeatherService;
}
