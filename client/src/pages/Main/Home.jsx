import React, { useContext } from 'react';
import { MainPageContext } from '../../App';
import './Home.css';
import TradingViewWidget from '../../components/TradingView';
import Selection from '../../components/Selection';

function Home() {
	const { stock } = useContext(MainPageContext);
	return (
		<div className="main-container">
			<div id="home-chart-container">
				<TradingViewWidget symbol={stock} />
			</div>
			<div className="side-container">
				<Selection />
				<div className="action-container">
					<div className="action-buy">Buy</div>
					<div className="action-sell">Sell</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
