import React, { useContext, useEffect } from 'react';
import LineChart from '../../components/LineChart';
import { MainPageContext } from '../../App';

function Home() {
	const {
		data,
		stock,
		options,
		setStock,
		dataOption,
		handleChoose,
		fetchData,
	} = useContext(MainPageContext);
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div className="main-container">
			<div className="chart-container">
				<LineChart
					className="main-line-chart"
					data={data}
					options={options}
				/>
			</div>
			<div className="choose-input-container">
				<input
					type="text"
					name="symbolList"
					id="symbolList"
					list="symbolData"
					className="symbol-list-box"
					value={stock}
					onChange={(e) => setStock(e.target.value)}
					placeholder="Symbol"
				/>
				<button className="btn check-btn" onClick={handleChoose}>
					See Price
				</button>
			</div>
			<datalist id="symbolData">{dataOption}</datalist>
			<div className="action-container">
				<div className="action-buy">Buy</div>
				<div className="action-sell">Sell</div>
			</div>
		</div>
	);
}

export default Home;
