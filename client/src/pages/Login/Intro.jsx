import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import NavIntro from '../../components/NavIntro';
import './Intro.css';

function Intro() {
	return (
		<div className="intro-container">
			<NavIntro />
			<div className="intro-content-container">
				<img className="intro-image" src={Logo} alt="" />
				<div className="intro-form-container">
					<h1 className="intro-title">
						Welcome to <span className="company-name">S&C</span>
					</h1>
					<p className="intro-subtitle">
						Exchange, trade, monitor<br></br>stocks and cryptos.
					</p>
					<Link to="/login">
						<button className="intro-login-btn">Log In</button>
					</Link>
					<Link to="/signup">
						<button className="intro-signup-btn">Sign Up</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Intro;
