import React from 'react';
import './Portfolio';
import PieChart from '../../components/PieChart';
import { ResponsiveLine } from '@nivo/line'
import data from '../../MockData';

function Portfolio() {
  return (
    <div className="main-container">
      <h1>Portfolio</h1>
			<div style={{height: 500}}>
      <PieChart
        data={data}
      />
			</div>
    </div>
  );
}

export default Portfolio;
