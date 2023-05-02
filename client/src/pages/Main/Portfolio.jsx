import React, { useContext, useEffect } from 'react';
import './Portfolio';
import PieChart from '../../components/PieChart';
import { MainPageContext } from '../../App';

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
  
  console.log(newData.sort((a, b) => b.value - a.value));

  return (
    <div className="main-container">
      <h1>Portfolio</h1>
      <div style={{ height: 500 }}>
        <PieChart data={newData} />
      </div>
    </div>
  );
}

export default Portfolio;
