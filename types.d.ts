export interface WxData {
  daily: Daily;
  daily_units: DailyUnits;
  elevation: number;
  generationtime_ms: number;
  hourly: Hourly;
  hourly_units: HourlyUnits;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}

export interface Daily {
  apparent_temperature_max: number[];
  apparent_temperature_min: number[];
  sunrise: string[];
  sunset: string[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  time: string[];
  uv_index_clear_sky_max: number[];
  uv_index_max: number[];
  weathercode: number[];
  winddirection_10m_dominant: number[];
  windspeed_10m_max: number[];
}

export interface DailyUnits {
  apparent_temperature_max: string;
  apparent_temperature_min: string;
  sunrise: string;
  sunset: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  time: string;
  uv_index_clear_sky_max: string;
  uv_index_max: string;
  weathercode: string;
  winddirection_10m_dominant: string;
  windspeed_10m_max: string;
}

export interface Hourly {
  apparent_temperature: number[];
  dewpoint_2m: number[];
  precipitation: number[];
  precipitation_probability: number[];
  rain: number[];
  relativehumidity_2m: number[];
  showers: number[];
  temperature_2m: number[];
  time: string[];
  weathercode: number[];
}

export interface HourlyUnits {
  apparent_temperature: string;
  dewpoint_2m: string;
  precipitation: string;
  precipitation_probability: string;
  rain: string;
  relativehumidity_2m: string;
  showers: string;
  temperature_2m: string;
  time: string;
  weathercode: string;
}
