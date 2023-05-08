import React, { useContext, useEffect } from 'react';
import './Portfolio';
import PieChart from '../../components/PieChart';
import { MainPageContext } from '../../App';
import PortfolioData from '../../components/PortfolioData';
import { nanoid } from 'nanoid';

function Portfolio() {
  const { user } = useContext(MainPageContext);
  let newData = [];
  newData.push({
    id: 'Cash',
    value: user.cash,
  });
  for (const [key, value] of Object.entries(user.assets)) {
    newData.push({
      id: key,
      value: value,
    });
  }
  newData.sort((a, b) => b.value - a.value);
  let portfolioData = newData.map((data) =>{
    return (
      <PortfolioData key={nanoid()} name={data.id} amount={data.value} />
    )
  })

  return (
    <div className="main-container">
      <h1>Portfolio</h1>
      <div className="portfolio-title"></div>
      <div className="portfolio-content-container">
        <div className="portfolio-content">{portfolioData}</div>
        <div style={{ height: 500 }}>
          <PieChart data={newData} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
