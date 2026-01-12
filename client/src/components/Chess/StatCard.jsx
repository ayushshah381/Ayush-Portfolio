import React from "react";

const StatCard = ({ title, icon, rating, best, type, record }) => {
  return (
    <div className={`stat-card ${type}`}>
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <div className="rating">{rating || "Unrated"}</div>
      <div className="best-rating">Peak: {best || "N/A"}</div>

      {record && (
        <div className="record">
          <span className="win">W: {record.win}</span>
          <span className="loss">L: {record.loss}</span>
          <span className="draw">D: {record.draw}</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
