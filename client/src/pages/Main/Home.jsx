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
			<div className='choose-input-container'>
			<label htmlFor="symbolList">Choose a symbol</label>
			<input
				type="text"
				name="symbolList"
				id="symbolList"
				list="symbolData"
				className="symbol-list-box"
				value={stock}
				onChange={(e) => setStock(e.target.value)}
			/>
			</div>
			<datalist id="symbolData">{dataOption}</datalist>
			<button onClick={handleChoose}>See Price</button>
		</div>
	);
}

export default Home;
