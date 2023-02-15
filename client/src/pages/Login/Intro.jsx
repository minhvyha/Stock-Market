import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import IntroMainImage from '../../assets/images/IntroMainImage.png';
import FiveStar from '../../components/FiveStar';
import NavIntro from '../../components/NavIntro';
import './Intro.css';

function Intro() {
	return (
		<div className="intro-container">
			<NavIntro />
			
			<div className="intro-content-container">
				<div className="intro-form-container">
					<FiveStar />
					<h1 className="intro-title">
						Most Advanced Stock and Crypto Exchange
					</h1>
					<p className="intro-subtitle">
					Trade stocks and cryptocurrencies on our secure, fast and feature-packed exchange platform.
					</p>
					<Link to="/signup">
						<button className="intro-signup-btn intro-main-btn">Get started</button>
					</Link>
				</div>
				<img className="intro-image" src={IntroMainImage} alt="" />
			</div>
		</div>
	);
}

export default Intro;
