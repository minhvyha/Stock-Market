import React from 'react';
import './PortfolioData.css';

function PortfolioData({ name, amount }) {
  return (
    <div className="portfolio-data-container">
      <div className="portfolio-data"><strong>{name}</strong> - {amount}%</div>
      
    </div>
  );
}

export default PortfolioData;
