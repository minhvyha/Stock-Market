import React from 'react';
import './Demo.css';
import NavIntro from '../../components/NavIntro';
import { Link } from 'react-router-dom';

function Demo() {
  return (
    <div className="demo-wrapper">
      <NavIntro activePage={'demo'} />
      <div className="demo-signup-wrapper">
        <div className="demo-signup-container">
          <div className="demo-title">Futuris Demo Trading</div>
          <div className="demo-subtitle">
            Demo feature allows you to trade stock and crypto with <br />
            real-time market data and risk free.
          </div>
          <Link to="/signup">
            <button className="intro-signup-btn intro-main-btn">
              Get started
            </button>
          </Link>
        </div>
      </div>
      <div className="demo-instruction-container">
        <div className="demo-title">How to Use Demo Mode</div>
        <div className="demo-card-container">
          <div className="demo-card">
            <i class="fa-solid fa-address-card"></i>
            <div className="demo-card-title">Register a Futuris account</div>
            <div className="demo-card-description">
              Sign up now to enjoy personalized features and seamless access to
              our demo account.
            </div>
          </div>
          <div className="demo-card">
            <i class="fa-solid fa-toggle-on"></i>
            <div className="demo-card-title">Turn on demo mode</div>
            <div className="demo-card-description">
              Turn on demo mode to explore our features, get a feel for our
              platform, and see if it's the right fit for you.
            </div>
          </div>
          <div className="demo-card">
            <i class="fa-solid fa-chart-line"></i>
            <div className="demo-card-title">
              Start trading stock and crypto
            </div>
            <div className="demo-card-description">
              Enter the exciting world of trading: Buy and sell stocks and
              cryptocurrencies with ease.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
