import React from "react";
import "../styles/LocationManager.css";

const LocationManager = ({ locations, onSelect, onRemove }) => {
  if (!locations.length) return null;

  return (
    <div className="location-manager">
      {locations.map((loc, idx) => (
        <div className="location-item" key={idx}>
          <span onClick={() => onSelect(loc)}>{loc}</span>
          <button onClick={() => onRemove(loc)}>✖</button>
        </div>
      ))}
    </div>
  );
};

export default LocationManager;
