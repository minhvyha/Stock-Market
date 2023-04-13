import React from 'react';
import './Nav.css';
import './NavIntro.css';
import LogoTextLight from '../assets/images/LogoTextLight.png';
import LogoTextDark from '../assets/images/LogoTextDark.png';
import { Link } from 'react-router-dom';

function NavIntro({ activePage }) {
	return (
		<nav className="navBar intro-nav">
			<div className="nav-container">
				<input type="checkbox" id="intro-check" />
				<div className="nav-subcontainer">
					<Link to="/">
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
					<li className={activePage === 'home' ? 'active' : ''}>
						<Link to="/">Home</Link>
					</li>
					<li className={activePage === 'assets' ? 'active' : ''}>
						<Link to="/assets">Assets</Link>
					</li>
					<li className={activePage === 'news' ? 'active' : ''}>
						<Link to="/news">News</Link>
					</li>
					<li className={activePage === 'features' ? 'active' : ''}>
						<Link to="/features">Features</Link>
					</li>
					<li className={activePage === 'demo' ? 'active' : ''}>
						<Link to="/demo">Demo</Link>
					</li>
					<li className={activePage === 'login' ? 'active' : ''}>
						<Link className="login-button" to="/login">
							Login
						</Link>
					</li>
					<li className={activePage === 'signup' ? 'active' : ''}>
						<Link className="signup-button" to="/signup">
							Signup
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default NavIntro;
