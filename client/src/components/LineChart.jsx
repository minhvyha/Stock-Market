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

function LineChart({ options, data }) {
  return <Line options={options} data={data} />;
}

export default LineChart;
