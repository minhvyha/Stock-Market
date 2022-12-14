import React from 'react';
import './Nav.css';
import Logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';

function Nav() {
	function handleNavigation() {
		let input = document.getElementById('check');
		if (input) {
			input.checked = false;
		}
	}
	return (
		<nav className="navBar">
			<div className="nav-container">
				<input type="checkbox" id="check" />
				<img className="logo" src={Logo} alt="" />
				<label htmlFor="check" className="checkbtn">
					<i className="fas fa-bars menu-symbol"></i>
				</label>
				<ul>
					<li onClick={handleNavigation}>
						<Link to="/">Home</Link>
					</li>
					<li onClick={handleNavigation}>
						<Link to="/portfolio">Porfolio</Link>
					</li>
					<li onClick={handleNavigation}>
						<Link to="/buy">Buy</Link>
					</li>
					<li onClick={handleNavigation}>
						<Link to="/sell">Sell</Link>
					</li>
					<li onClick={handleNavigation}>
						<Link to="/account">Account</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
