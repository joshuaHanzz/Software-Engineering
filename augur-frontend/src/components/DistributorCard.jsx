import React from 'react';
import './DistributorCard.css';

const DistributorCard = ({ name, lastMonth, forecasted, ytdAverage }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p><strong>Last Month:</strong> {lastMonth}</p>
      <p><strong>Forecasted:</strong> {forecasted}</p>
      <p><strong>YTD Avg:</strong> {ytdAverage}</p>
    </div>
  );
};

export default DistributorCard;
