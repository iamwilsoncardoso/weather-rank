/**
 * Represents daily weather forecast
 * @interface IDailyWeather - declared but no used, to be discussed during interview.
 */
export interface IDailyWeather {
  /** Array of maximum daily temperatures at 2 meters above ground (in °C) */
  temperature_2m_max: number[];
  /** Array of daily snowfall sums (in cm) */
  snowfall_sum: number[];
  /** Array of daily precipitation sums (in mm) */
  precipitation_sum: number[];
  /** Array of mean daily cloud cover percentages */
  cloud_cover_mean: number[];
}
