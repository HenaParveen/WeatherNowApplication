import axios from "axios";

const API_KEY = "83f2dc9c3a9549e21e7fc790b0823d28";
const BASE_URL = "https://api.openweathermap.org/data/3.0";

export const getWeatherByCity = async (city, units = "metric") => {
  const { data } = await axios.get(`${BASE_URL}/weather`, {
    params: { q: city, appid: API_KEY, units },
  });
  return data;
};

export const getForecastByCity = async (city, units = "metric") => {
  const { data } = await axios.get(`${BASE_URL}/forecast`, {
    params: { q: city, appid: API_KEY, units },
  });
  return data;
};

export const getHourlyForecast = async (lat, lon, units = "metric") => {
  const { data } = await axios.get(`${BASE_URL}/forecast`, {
    params: { lat, lon, appid: API_KEY, units },
  });
  return data.list;
};

export const getUVIndex = async (lat, lon) => {
  const { data } = await axios.get(`${BASE_URL}/uvi`, {
    params: { appid: API_KEY, lat, lon },
  });
  return data;
};

export const getAirQuality = async (lat, lon) => {
  const { data } = await axios.get(`${BASE_URL}/air_pollution`, {
    params: { lat, lon, appid: API_KEY },
  });
  return data;
};

export const getWeatherAlerts = async (lat, lon) => {
  const { data } = await axios.get(`${BASE_URL}/onecall`, {
    params: { lat, lon, appid: API_KEY },
  });
  return data.alerts || [];
};
