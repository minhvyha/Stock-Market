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
						Trade stocks and cryptocurrencies on our secure, fast and
						feature-packed exchange platform.
					</p>
					<Link to="/signup">
						<button className="intro-signup-btn intro-main-btn">
							Get started
						</button>
					</Link>
				</div>
				<img className="intro-image" src={IntroMainImage} alt="" />
			</div>
			<div className="intro-stat-container">
				<div className="intro-stat">
				<i className="fa-solid fa-chart-simple"></i>
					<div className="intro-stat-content">
						<div className="intro-stat-header">Real-time Market</div>
						<div className="intro-stat-description">
							Up-to-the-minute charts
						</div>
					</div>
				</div>
				<div className="intro-stat">
				<i className="fa-solid fa-shield-halved"></i>
					<div className="intro-stat-content">
						<div className="intro-stat-header">Advanced security</div>
						<div className="intro-stat-description">
							Robust account protection features.
						</div>
					</div>
				</div>
				<div className="intro-stat">
				<i className="fa-solid fa-user-check"></i>
					<div className="intro-stat-content">
						<div className="intro-stat-header">
							User-friendly interface
						</div>
						<div className="intro-stat-description">
							Intuitive, easy-to-use platform.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Intro;
