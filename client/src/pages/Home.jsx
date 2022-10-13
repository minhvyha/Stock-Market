import React, { useContext, useEffect } from 'react';
import LineChart from '../components/LineChart';
import { MainPageContext } from '../App';
import { Link } from 'react-router-dom';

function Home() {
	const {
		data,
		stock,
		setStock,
		dataOption,
		handleChoose,
		handleSignOut,
		fetchData,
	} = useContext(MainPageContext);
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div className="main-container">
			<div className="chart-container">
				<LineChart className="main-line-chart" data={data} />
			</div>
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
			<datalist id="symbolData">{dataOption}</datalist>
			<button onClick={handleChoose}>See Price</button>
			<Link to="/login">
				<button className="btn-sign-out" onClick={handleSignOut}>
					Sign Out
				</button>
			</Link>
		</div>
	);
}

export default Home;
