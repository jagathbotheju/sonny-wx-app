import { WxData } from "@/types";

const cleanData = (data: WxData, city: string) => {
  const { timezone, hourly, hourly_units, timezone_abbreviation, daily } = data;

  const {
    temperature_2m_max,
    temperature_2m_min,
    winddirection_10m_dominant,
    windspeed_10m_max,
    time,
    weathercode,
    uv_index_max,
  } = daily;
  const {
    temperature_2m,
    rain,
    relativehumidity_2m,
    precipitation_probability,
  } = hourly;

  return {
    current_weather: {
      temperatureMax: temperature_2m_max[0],
      temperatureMin: temperature_2m_min[0],
      windSpeed: windspeed_10m_max,
      windDirection: winddirection_10m_dominant,
      time,
      weatherCode: weathercode[0],
      uvIndex: uv_index_max,
      hourly: {
        temperature_2m: temperature_2m.slice(0, 24),
        rain: rain.slice(0, 24),
        relativehumidity_2m: relativehumidity_2m.slice(0, 24),
        precipitation_probability: precipitation_probability.slice(0, 24),
      },
      timezone,
      timezone_abbreviation,
      hourly_units,
      city,
    },
  };
};

export default cleanData;
