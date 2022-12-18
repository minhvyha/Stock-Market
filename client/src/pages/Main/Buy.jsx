import React from 'react';
import './Buy.css'
import BuyImage from '../../assets/images/StackPaper.png'

function Buy() {
	return <div className="main-container">
		<div>
			<img className='buy-image' src={BuyImage} alt="buy image" />
		</div>
	</div>;
}

export default Buy;
