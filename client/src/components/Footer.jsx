import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';

function Footer() {
	return (
		<footer>
			<NavLink to="/home" exact activeClassName="active">
				<div className="footer-item-container">
					<span class="material-symbols-outlined">home</span>
				</div>
			</NavLink>
			<NavLink to="/portfolio" exact activeClassName="active">
				<div className="footer-item-container">
					<span class="material-symbols-outlined">
						account_balance_wallet
					</span>
				</div>
			</NavLink>
			<NavLink
				to="/buy"
				className={({ isActive }) => (isActive ? 'active-footer' : '')}
			>
				<div className="footer-item-container">
					<span class="material-symbols-outlined">paid</span>
				</div>
			</NavLink>
			<NavLink
				to="/sell"
				className={({ isActive }) => (isActive ? 'active-footer' : '')}
			>
				<div className="footer-item-container">
					<span class="material-symbols-outlined">trending_down</span>
				</div>
			</NavLink>
			<NavLink
				to="/account"
				className={({ isActive }) => (isActive ? 'active-footer' : '')}
			>
				<div className="footer-item-container">
					<span class="material-symbols-outlined">person</span>
				</div>
			</NavLink>
		</footer>
	);
}

export default Footer;
