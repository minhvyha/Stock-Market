import React from 'react';
import './Nav.css';
import Logo from '../assets/images/textLogo.png';
import {Link} from 'react-router-dom'

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
						<Link to="/">
							<a href="#">Home</a>
						</Link>
					</li>
					<li>
						<Link to="/portfolio">
							<a href="">Portfolio</a>
						</Link>
					</li>
					<li>
						<a href="/account">Account</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
