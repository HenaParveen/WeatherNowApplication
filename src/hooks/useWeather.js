import { useState } from "react";
import {
  getWeatherByCity,
  getForecastByCity,
  getHourlyForecast,
  getUVIndex,
  getAirQuality,
  getWeatherAlerts,
} from "../api/weatherApi";

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [hourly, setHourly] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [uvIndex, setUvIndex] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const [locations, setLocations] = useState(
    JSON.parse(localStorage.getItem("savedLocations")) || []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [units, setUnits] = useState("metric");

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      const data = await getWeatherByCity(city, units);
      const forecastData = await getForecastByCity(city, units);
      const hourlyData = await getHourlyForecast(
        data.coord.lat,
        data.coord.lon,
        units
      );
      const uv = await getUVIndex(data.coord.lat, data.coord.lon);
      const air = await getAirQuality(data.coord.lat, data.coord.lon);
      const weatherAlerts = await getWeatherAlerts(
        data.coord.lat,
        data.coord.lon
      );

      setWeather(data);
      setForecast(forecastData.list.slice(0, 7));
      setHourly(hourlyData.slice(0, 12));
      setUvIndex(uv.value);
      setAirQuality(air.list[0]);
      setAlerts(weatherAlerts);
      setError(null);
    } catch (err) {
      setError("City not found");
    } finally {
      setLoading(false);
    }
  };

  const saveLocation = (city) => {
    const updated = [...new Set([...locations, city])];
    setLocations(updated);
    localStorage.setItem("savedLocations", JSON.stringify(updated));
  };

  const removeLocation = (city) => {
    const updated = locations.filter((loc) => loc !== city);
    setLocations(updated);
    localStorage.setItem("savedLocations", JSON.stringify(updated));
  };

  return {
    weather,
    forecast,
    hourly,
    alerts,
    uvIndex,
    airQuality,
    locations,
    saveLocation,
    removeLocation,
    fetchWeather,
    loading,
    error,
    units,
    setUnits,
  };
};
