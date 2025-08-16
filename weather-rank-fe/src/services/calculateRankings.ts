import { IActivityRanking } from "interfaces/IActivityRanking";
import { IDailyWeather } from "interfaces/IDailyWeather";

export const calculateRankings = (
  weatherData: IDailyWeather
): IActivityRanking | null => {
  if (!weatherData) return null;

  try {
    // Calculate averages for each parameter over 7 days
    const avgSnowfall = weatherData.snowfall_sum.reduce((a, b) => a + b, 0) / 7;
    const avgPrecipitation =
      weatherData.precipitation_sum.reduce((a, b) => a + b, 0) / 7;
    const avgCloudCover =
      weatherData.cloud_cover_mean.reduce((a, b) => a + b, 0) / 7;

    // Activity scoring (0-1, where 1 = best conditions)
    const skiingScore = Math.min(avgSnowfall / 50, 1); // More snow = better
    const surfingScore = 1 - Math.min(avgPrecipitation / 10, 1); // Less rain = better
    const outdoorSightseeingScore =
      1 - (avgPrecipitation / 20 + avgCloudCover / 100) / 2;
    const indoorSightseeingScore =
      (avgPrecipitation / 20 + avgCloudCover / 100) / 2;

    return {
      skiing: parseFloat(skiingScore.toFixed(2)), //0 Very bad (no snow)
      surfing: parseFloat(surfingScore.toFixed(2)), //1 Excellent (no rain)
      outdoorSightseeing: parseFloat(outdoorSightseeingScore.toFixed(2)), //0.79 Good (some clouds)
      indoorSightseeing: parseFloat(indoorSightseeingScore.toFixed(2)), // 0.21 Poor (not many bad weather days)
    };
  } catch (error) {
    console.error("Calculation error:", error);
    return null;
  }
};
