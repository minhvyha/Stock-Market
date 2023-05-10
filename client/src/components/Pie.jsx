import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title,  } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import React from 'react';

ChartJS.register(ArcElement, Tooltip, Legend, Title, );
console.log(ChartJS.defaults.layout);
ChartJS.overrides['doughnut'].aspectRatio = 1.1
ChartJS.defaults.layout.padding = 10
ChartJS.overrides['doughnut'].plugins.tooltip.callbacks.label = function (
  context
) {
  console.log(context);
  let label = ' ' + context.label + ': ' + `${context.formattedValue}$`;

  return label;
};

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
            label: 'Assets Allocation',
            data: data,
            backgroundColor: [
              '#ce5404',
              '#e16b05',
              '#fa851e',
              '#fba050',
              '#fcbb82',
              '#fdd6b4',
            ],
            hoverOffset: 5,
          },
        ],
      }}
    />
  );
}

export default Pie;
