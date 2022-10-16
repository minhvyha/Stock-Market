import React from 'react';
import './Nav.css';
import Logo from '../assets/images/textLogo.png';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<nav className="navBar">
			<div className="nav-container">
				<input type="checkbox" id="check" />
				<img className="logo" src={Logo} alt="" />
				<label for="check" className="checkbtn">
					<i className="fas fa-bars menu-symbol"></i>
				</label>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/portfolio">Porfolio</Link>
					</li>
					<li>
						<Link to='/buy'>Buy</Link>
					</li>
					<li>
						<Link to='/sell'>Sell</Link>
					</li>
					<li>
						<Link to="/account">Account</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
