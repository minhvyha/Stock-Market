import React from 'react';
import './Nav.css';
import './NavIntro.css';
import LogoTextLight from '../assets/images/LogoTextLight.png';
import LogoTextDark from '../assets/images/LogoTextDark.png';
import { Link } from 'react-router-dom';

function NavIntro() {
	return (
		<nav className="navBar intro-nav">
			<div className="nav-container">
				<Link to="/">
					<img
						id="intro-image"
						className="logo"
						src={LogoTextDark}
						alt=""
					/>
               <img
						id="intro-image-light"
						className="logo"
						src={LogoTextLight}
						alt=""
					/>
				</Link>

				<label htmlFor="check" className="checkbtn">
					<i className="fas fa-bars menu-symbol"></i>
				</label>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/assets">Assets</Link>
					</li>
					<li>
						<Link to="/learn">Learn</Link>
					</li>
					<li>
						<Link to="/features">Features</Link>
					</li>
					<li>
						<Link to="/demo">Demo</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavIntro;
