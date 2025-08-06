import React from "react";
import "../styles/WeatherCard.css";

const WeatherCard = ({ weather, units, onSave, onRemove, isSaved }) => {
  if (!weather) return null;

  return (
    <div className="weather-card">
      <div className="location">
        {weather.name}, {weather.sys.country}
      </div>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt="Weather Icon"
      />
      <div className="temp">
        {Math.round(weather.main.temp)}°{units === "metric" ? "C" : "F"}
      </div>
      <div className="desc">{weather.weather[0].description}</div>
      <div className="info">
        <span>Humidity: {weather.main.humidity}%</span>
        <span>
          Wind: {weather.wind.speed} {units === "metric" ? "m/s" : "mph"}
        </span>
        <span>Feels Like: {Math.round(weather.main.feels_like)}°</span>
      </div>
      <div className="actions">
        {!isSaved ? (
          <button onClick={() => onSave(weather.name)}>Save</button>
        ) : (
          <button className="remove" onClick={() => onRemove(weather.name)}>
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
