import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import React from 'react';
ChartJS.register(ArcElement, Tooltip, Legend, Title);
ChartJS.overrides['doughnut'].plugins.legend.labels = {
  color: 'white',
  generateLabels(chart) {
    const data = chart.data;
    if (data.labels.length && data.datasets.length) {
      const {
        labels: { pointStyle },
      } = chart.legend.options;
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
          index: i,
        };
      });
    }
    return [];
  },
};
function Pie({ labels, data }) {
  return (
    <Doughnut
      redraw={true}
      data={{
        labels: labels,
        datasets: [
          {
            label: 'My First Dataset',
            data: data,
            backgroundColor: [
              '#ae5404',
              '#c85f04',
              '#e16b05',
              '#fa7705',
              '#fa851e',
              '#fb9237',
              '#fba050',
              '#fcae69',
              '#fcbb82',
              '#fdc99b',
              '#fdd6b4',
              '#fee4cd',
              '#fef1e6',
              '#ffffff',
            ],
            hoverOffset: 4,
          },
        ],
      }}
    />
  );
}

export default Pie;
