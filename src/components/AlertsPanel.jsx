import React from "react";
import "../styles/AlertsPanel.css";

const AlertsPanel = ({ alerts }) => {
  if (!alerts.length) return null;

  return (
    <div className="alerts-panel">
      <h3>⚠️ Weather Alerts</h3>
      {alerts.map((alert, idx) => (
        <div key={idx} className="alert-item">
          <strong>{alert.event}</strong>
          <p>{alert.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AlertsPanel;
