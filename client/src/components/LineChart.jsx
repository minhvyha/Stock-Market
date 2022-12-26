import { ResponsiveLine } from '@nivo/line';

const LineChart = ({ data }) => {
	return (
		<ResponsiveLine
			data={data}
			margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
			xScale={{
				type: 'time',
				format: '%Y-%m-%d',
				useUTC: false,
				precision: 'day',
			}}
			xFormat="time:%Y-%m-%d"
			yScale={{
				type: 'linear',
				min: 'auto',
				max: 'auto',
				stacked: true,
				reverse: false,
			}}
			yFormat={(value) =>
				`${Number(value).toLocaleString('ru-RU', {
					minimumFractionDigits: 2,
				})} $`
			}
			sliceTooltip={({ slice }) => {
				return (
					<div
						style={{
							background: 'white',
							padding: '9px 12px',
							border: '1px solid #ccc',
						}}
					>
						<div>x: {slice.id}</div>
						{slice.points.map((point) => (
							<div
								key={point.id}
								style={{
									color: point.serieColor,
									padding: '3px 0',
								}}
							>
								<strong>{point.serieId}</strong>
								{point.data.yFormatted}
							</div>
						))}
					</div>
				);
			}}
			axisTop={null}
			axisRight={null}
			axisBottom={{
				format: '%b %d',
				tickValues: 'every 9 days',
				orient: 'bottom',
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: 'Date',
				legendOffset: 36,
				legendPosition: 'middle',
			}}
			axisLeft={{
				orient: 'left',
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: 'Price',
				legendOffset: -40,
				legendPosition: 'middle',
			}}
			enablePoints={false}
			pointSize={10}
			pointColor={{ theme: 'background' }}
			pointBorderWidth={2}
			pointBorderColor={{ from: 'serieColor' }}
			pointLabelYOffset={-12}
			enableSlices={'x'}
			// useMesh={true}
		/>
	);
};

export default LineChart;
