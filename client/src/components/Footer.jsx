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
         <Link to='/portfolio'>
			<div className="footer-item-container">
				<span class="material-symbols-outlined">
					account_balance_wallet
				</span>
			</div>
         </Link>
         <Link to='/buy'>
			<div className="footer-item-container">
				<span class="material-symbols-outlined">paid</span>
			</div>
         </Link>
         <Link to='/sell'>
			<div className="footer-item-container">
				<span class="material-symbols-outlined">trending_down</span>
			</div>
         </Link>
         <Link to='/account'>
			<div className="footer-item-container">
				<span class="material-symbols-outlined">person</span>
			</div>
         </Link>
		</footer>
	);
}

export default Footer;
