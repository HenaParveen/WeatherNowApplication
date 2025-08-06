import React from "react";
import "../styles/ForecastCard.css";

const ForecastCard = ({ forecast, units }) => {
  if (!forecast.length) return null;

  return (
    <div className="forecast-container">
      {forecast.map((day, idx) => (
        <div className="forecast-card" key={idx}>
          <p>
            {new Date(day.dt_txt).toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </p>
          <img
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
            alt="Forecast Icon"
          />
          <p>
            {Math.round(day.main.temp)}°{units === "metric" ? "C" : "F"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ForecastCard;
