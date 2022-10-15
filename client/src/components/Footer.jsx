import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'

function Footer() {
	return (
		<footer>
         <Link to='/'>
			<div className="footer-item-container">
				<span class="material-symbols-outlined">home</span>
			</div>
         </Link>
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
