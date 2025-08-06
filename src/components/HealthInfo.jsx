import React from "react";
import "../styles/HealthInfo.css";

const HealthInfo = ({ uvIndex, airQuality }) => {
  return (
    <div className="health-info">
      <h3>🌱 Health Info</h3>
      <p>UV Index: {uvIndex}</p>
      {airQuality && <p>Air Quality (PM2.5): {airQuality.components.pm2_5}</p>}
      <p>Pollen Count: Coming soon</p>
    </div>
  );
};

export default HealthInfo;
