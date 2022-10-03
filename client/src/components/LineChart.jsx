import React from 'react';
import {
  Chart,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

function LineChart({ options, data, fontSize }) {
  Chart.defaults.font.size = fontSize
  Chart.defaults.elements.point.radius = 0
  return <Line options={options} data={data} />;
}

export default LineChart;
