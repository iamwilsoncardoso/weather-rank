import { gql } from "@apollo/client";

export const GET_WEATHER_DATA = gql`
  query GetWeatherData($city: String!) {
    getWeatherData(city: $city) {
      temperature_2m_max
      snowfall_sum
      precipitation_sum
      cloud_cover_mean
    }
  }
`;
