import { gql } from "@apollo/client";

export const fetchWeatherQuery = gql`
  query myQuery(
    $apparent_temperature: String
    $apparent_temperature_max: String
    $apparent_temperature_min: String
    $daily: String
    $dewpoint_2m: String
    $hourly: String
    $latitude: String
    $longitude: String
    $precipitation_probability: String
    $rain: String
    $relativehumidity_2m: String
    $showers: String
    $sunrise: String
    $sunset: String
    $temperature_2m_max: String
    $temperature_2m_min: String
    $timezone: String
    $uv_index_clear_sky_max: String
    $uv_index_max: String
  ) {
    myQuery(
      apparent_temperature_max: $apparent_temperature_max
      apparent_temperature_min: $apparent_temperature_min
      daily: $daily
      dewpoint_2m: $dewpoint_2m
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      precipitation_probability: $precipitation_probability
      rain: $rain
      relativehumidity_2m: $relativehumidity_2m
      showers: $showers
      sunset: $sunset
      temperature_2m_max: $temperature_2m_max
      temperature_2m_min: $temperature_2m_min
      timezone: $timezone
      uv_index_clear_sky_max: $uv_index_clear_sky_max
      uv_index_max: $uv_index_max
      sunrise: $sunrise
      apparent_temperature: $apparent_temperature
    ) {
      daily {
        time
        weathercode
      }
      daily_units {
        time
        weathercode
      }
      elevation
      generationtime_ms
      hourly {
        temperature_2m
        time
      }
      hourly_units {
        temperature_2m
        time
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }
`;
