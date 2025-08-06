import React, { useState } from "react";
import "./App.css";
import { useWeather } from "./hooks/useWeather";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";
import HourlyForecast from "./components/HourlyForecast";
import LocationManager from "./components/LocationManager";
import AlertsPanel from "./components/AlertsPanel";
import HealthInfo from "./components/HealthInfo";
import RadarMap from "./components/RadarMap";

const App = () => {
  const [city, setCity] = useState("");
  const {
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
  } = useWeather();

  return (
    <div className="app-container">
      <h1>🌦️ Advanced Weather App</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={() => fetchWeather(city)}>Search</button>
        <select value={units} onChange={(e) => setUnits(e.target.value)}>
          <option value="metric">°C</option>
          <option value="imperial">°F</option>
        </select>
      </div>

      <LocationManager
        locations={locations}
        onSelect={fetchWeather}
        onRemove={removeLocation}
      />

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      <WeatherCard
        weather={weather}
        units={units}
        onSave={saveLocation}
        onRemove={removeLocation}
        isSaved={locations.includes(weather?.name)}
      />

      <ForecastCard forecast={forecast} units={units} />
      <HourlyForecast hourly={hourly} units={units} />
      <AlertsPanel alerts={alerts} />
      <HealthInfo uvIndex={uvIndex} airQuality={airQuality} />
      <RadarMap />
    </div>
  );
};

export default App;
