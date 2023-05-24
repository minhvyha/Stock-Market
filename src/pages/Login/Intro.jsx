import React from 'react';
import { Link } from 'react-router-dom';
import IntroTrade from '../../assets/images/IntroTrade.png';
import IntroPortfolio from '../../assets/images/IntroPortfolio.png';
import IntroSecurity from '../../assets/images/IntroSecurity.png';
import IntroMainImage from '../../assets/images/IntroMainImage.png';
import FiveStar from '../../components/FiveStar';
import NavIntro from '../../components/NavIntro';
import './Intro.css';

function Intro() {
	return (
		<div className="intro-container">
			<NavIntro activePage={'home'} />
			<div className="intro-content-container">
				<div className="intro-form-container">
					<FiveStar />
					<h1 className="intro-title">
						Most Advanced Stock and Crypto Exchange {process.env.REACT_APP_NEWS_API}
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
			<div className="intro-feature-container">
				<div className="intro-feature-title">
					What you will get with Futuris
				</div>
				<div className="intro-feature">
					<div className="feature-container">
						<div className="feature">
							<img className="feature-image" src={IntroTrade} />
							<div className="feature-description">
								AUD & USD Trading
							</div>
						</div>
						<div className="feature">
							<img className="feature-image" src={IntroPortfolio} />
							<div className="feature-description">
								Portfolio Tracking
							</div>
						</div>
					</div>
					<div className="feature">
						<img className="feature-image" src={IntroSecurity} />
						<div className="feature-description">Robust Encryption</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Intro;
