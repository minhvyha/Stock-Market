import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import IntroMainImage from '../../assets/images/IntroMainImage.png';

import NavIntro from '../../components/NavIntro';
import './Intro.css';

function Intro() {
	return (
		<div className="intro-container">
			<NavIntro />
			<div className="intro-content-container">
				<div className="intro-form-container">
					<h1 className="intro-title">
						Welcome to <span className="company-name">S&C</span>
					</h1>
					<p className="intro-subtitle">
						Exchange, trade, monitor<br></br>stocks and cryptos.
					</p>
					<Link to="/login">
						<button className="intro-login-btn intro-main-btn">Log In</button>
					</Link>
					<Link to="/signup">
						<button className="intro-signup-btn intro-main-btn">Sign Up</button>
					</Link>
				</div>
				<img className="intro-image" src={IntroMainImage} alt="" />
			</div>
		</div>
	);
}

export default Intro;
