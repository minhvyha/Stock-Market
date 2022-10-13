import React, { useContext } from 'react';
import { MainPageContext } from '../App';
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

function LineChart({ data }) {
	const { stock } = useContext(MainPageContext);
	const options = {
		elements: {},
		maintainAspectRatio: false,
		tension: 0.2,
		// responsive: true,
		plugins: {
			tooltip: {
				yAlign: 'bottom',
				displayColors: false,
				bodyAlign: 'center',
				bodyColor: 'black',
				titleColor: 'black',
				borderColor: '#284799',
				borderWidth: 1,
				backgroundColor: 'white',
				titleAlign: 'center',
				interaction: {
					mode: 'index',
					axis: 'x',
				},
				intersect: false,
				callbacks: {
					beforeTitle: function (context) {
						return stock;
					},
				},
			},
			legend: {
				display: false,
			},
			title: {
				display: true,
				text: stock,
			},
		},
	};
	Chart.defaults.font.size = 9;
	Chart.defaults.elements.point.radius = 0;
	Chart.defaults.maintainAspectRatio = false;

	return <Line options={options} data={data} />;
}

export default LineChart;
