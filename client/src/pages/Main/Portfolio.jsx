import React, { useContext, useEffect } from 'react';
import './Portfolio.css';
import { MainPageContext } from '../../App';
import PortfolioData from '../../components/PortfolioData';
import { nanoid } from 'nanoid';
import Pie from '../../components/Pie';

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
  let labels = []
  let dataSet = []
  let portfolioData = newData.map((data) =>{
    labels.push(data.id)
    dataSet.push(`${data.value}`)
    return (
      <PortfolioData key={nanoid()} name={data.id} amount={data.value * 100 / user.totalAssets} />
    )
  })
  console.log(labels)
  console.log(dataSet)

  return (
    <div className="main-container portfolio-section">
      <div className="portfolio-title">Portfolio Overview</div>
      <div className="portfolio-content-container">
        <div className="portfolio-content">{portfolioData}</div>
        <div className='portfolio-pie-chart' >
<Pie labels={labels} data={dataSet} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
