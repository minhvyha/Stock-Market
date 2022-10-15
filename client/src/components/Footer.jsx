import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<footer>
			<div className="footer-item-container">
				<span class="material-symbols-outlined">home</span>
			</div>
			<div className="footer-item-container">
				<span class="material-symbols-outlined">
					account_balance_wallet
				</span>
			</div>
			<div className="footer-item-container">
				<span class="material-symbols-outlined">paid</span>
			</div>
			<div className="footer-item-container">
				<span class="material-symbols-outlined">trending_down</span>
			</div>
			<div className="footer-item-container">
				<span class="material-symbols-outlined">person</span>
			</div>
		</footer>
	);
}

export default Footer;
