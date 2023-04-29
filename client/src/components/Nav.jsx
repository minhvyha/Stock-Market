import React from 'react';
import './Nav.css';
import LogoTextLight from '../assets/images/LogoTextLight.png';
import LogoTextDark from '../assets/images/LogoTextDark.png';
import { Link } from 'react-router-dom';

function Nav() {
	function handleNavigation() {
		let input = document.getElementById('check');
		if (input) {
			input.checked = false;
		}
	}
	return (
		<nav className="navBar intro-nav">
			<div className="nav-container">
				<input type="checkbox" id="intro-check" />
				<div className="nav-subcontainer">
					<Link className='logo-link' to="/">
						<img id="intro-image" className="logo" src={LogoTextDark} alt="" />
						<img
							id="intro-image-light"
							className="logo"
							src={LogoTextLight}
							alt=""
						/>
					</Link>
					<label htmlFor="intro-check" className="checkbtn">
						<i className="fas fa-bars menu-symbol"></i>
					</label>
				</div>

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
