import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import Wallet from '../assets/images/wallet.png'

function Footer() {
	return (
		<footer>
			<NavLink to="/home" exact="true" activeclassname="active">
				<div className="footer-item-container">
					<span className="material-symbols-outlined">home</span>
					<label>Home</label>
				</div>
			</NavLink>
			<NavLink to="/portfolio" exact="true" activeclassname="active">
				<div className="footer-item-container">
					<span className="material-symbols-outlined">
						account_balance_wallet
					</span>
					<label>Portfolio</label>
				</div>
			</NavLink>
			<NavLink
				to="/buy"
				className={({ isActive }) => (isActive ? 'active-footer' : '')}
			>
				<div className="footer-item-container">
					<span className="material-symbols-outlined">paid</span>
					<label>Buy</label>
				</div>
			</NavLink>
			<NavLink
				to="/sell"
				className={({ isActive }) => (isActive ? 'active-footer' : '')}
			>
				<div className="footer-item-container">
					<span className="material-symbols-outlined">trending_down</span>
					<label>Sell</label>
				</div>
			</NavLink>
			<NavLink
				to="/account"
				className={({ isActive }) => (isActive ? 'active-footer' : '')}
			>
				<div className="footer-item-container">
					<span className="material-symbols-outlined">person</span>
					<label>Account</label>
				</div>
			</NavLink>
		</footer>
	);
}

export default Footer;
