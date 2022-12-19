import React from 'react';
import './Buy.css';
import BuyImage from '../../assets/images/BuyImage.png';

function Buy() {
	return (
		<div className="main-container">
			<div>
				<div className="buy-title">Choose a stock symbol to buy.</div>
				<img className="buy-image" src={BuyImage} alt="buy image" />
			</div>
			<div className="buy-action-container">
				<div className="buy-search-container">
					<div className='buy-search-title'>Find the right stock for you</div>
					<div className='buy-search-subtitle'>Receive accurate live pricing based on your buy preference.</div>
					<span class="material-symbols-outlined">search</span>
				</div>
			</div>
		</div>
	);
}

export default Buy;
