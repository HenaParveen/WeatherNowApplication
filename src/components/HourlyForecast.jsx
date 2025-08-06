import React from "react";
import "../styles/HourlyForecast.css";

const HourlyForecast = ({ hourly, units }) => {
  if (!hourly.length) return null;

  return (
    <div className="hourly-forecast">
      {hourly.map((hour, idx) => (
        <div className="hour-card" key={idx}>
          <p>{new Date(hour.dt_txt).getHours()}:00</p>
          <img
            src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
            alt="Hourly Icon"
          />
          <p>
            {Math.round(hour.main.temp)}°{units === "metric" ? "C" : "F"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;
