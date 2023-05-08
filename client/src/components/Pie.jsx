import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import React from 'react';
ChartJS.register(ArcElement, Tooltip, Legend, Title);
ChartJS.overrides['doughnut'].plugins.legend.labels ={
  color: 'white',
  generateLabels(chart) {
    const data = chart.data;
    if (data.labels.length && data.datasets.length) {
      const {labels: {pointStyle}} = chart.legend.options;
      return data.labels.map((label, i) => {
        const meta = chart.getDatasetMeta(0);
        const style = meta.controller.getStyle(i);
        return {
          text: label,
          fillStyle: style.backgroundColor,
          strokeStyle: style.borderColor,
          lineWidth: style.borderWidth,
          pointStyle: pointStyle,
          hidden: !chart.getDataVisibility(i),
          index: i
        };
      });
    }
    return [];
  }
}

ChartJS.overrides['doughnut'].plugins.title = {
  color: 'white',
  display: true,
};
function Pie() {
  return (
    <Doughnut
      redraw={true}
      data={{
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
            hoverOffset: 4,
          },
        ],
      }}
    />
  );
}

export default Pie;
