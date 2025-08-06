import React from "react";
import "../styles/RadarMap.css";

const RadarMap = () => {
  return (
    <div className="radar-map">
      <iframe
        title="Weather Radar"
        src="https://embed.windy.com/embed2.html?lat=20&lon=78&detailLat=20&detailLon=78&width=650&height=450&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
        width="100%"
        height="450"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default RadarMap;
