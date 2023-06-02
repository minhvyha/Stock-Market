import React, { useContext } from 'react';
import './Portfolio.css';
import { MainPageContext } from '../../App';
import PortfolioData from '../../components/PortfolioData';
import { nanoid } from 'nanoid';
import Pie from '../../components/Pie';

function Portfolio() {
  const { user } = useContext(MainPageContext);
  let newData = [];
  let totalAssets = user.cash
  newData.push({
    id: 'Cash',
    value: user.cash,
  });
  if (user.assets !== undefined){
    for (const key in user.assets) {
      totalAssets += user.assets[key].value
      newData.push({
        id: key,
        value: user.assets[key].value,
      });
    }
  }
  newData.sort((a, b) => b.value - a.value);
  let labels = [];
  let dataSet = [];
  let newPortfolioData = [];

  let otherAmount = totalAssets;
  console.log(otherAmount)
  for (let i = 0; i < newData.length && i < 6; i++) {
    let data = newData[i];
    labels.push(data.id);
    dataSet.push(`${data.value}`);
    console.log(data.value)
    otherAmount -= data.value;
    newPortfolioData.push(
      <PortfolioData
        key={nanoid()}
        name={data.id}
        amount={((data.value * 100) / totalAssets).toFixed(2)}
      />
    );
  }
  if (otherAmount > 0) {
    labels.push('other');
    dataSet.push(otherAmount);
    newPortfolioData.push(
      <PortfolioData
        key={nanoid()}
        name={'Other'}
        amount={((otherAmount * 100) / user.totalAssets).toFixed(2)}
      />
    );
  }

  return (
    <div className="main-container portfolio-section">
      <div className="portfolio-title">Portfolio Overview</div>
      <div className="portfolio-content-container">
        <div className="portfolio-content bg-gray-400 dark:bg-dark-button">{newPortfolioData}</div>
        <div className="portfolio-pie-chart bg-gray-400 dark:bg-transparent">
          <Pie labels={labels} data={dataSet} />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
