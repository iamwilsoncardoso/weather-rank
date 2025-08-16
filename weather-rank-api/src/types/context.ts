import { DailyWeatherService } from "../services/DailyWeatherService";

/**
 * Defines the GraphQL context interface containing service dependencies
 * @module types/context
 * @interface Context
 */
export interface Context {
  /**
   * Daily Weather service instance for fetching weather data
   * @type {DailyWeatherService}
   * @memberof Context
   */
  dailyService: DailyWeatherService;
}
