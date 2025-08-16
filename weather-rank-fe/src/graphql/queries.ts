import { gql } from "@apollo/client";

export const GET_DAILY_WEATHER_DATA = gql`
  query GetDailyWeatherData($city: String!) {
    getDailyWeather(city: $city) {
      temperature_2m_max
      snowfall_sum
      precipitation_sum
      cloud_cover_mean
    }
  }
`;
