import React from 'react';
import './Features.css';
import NavIntro from '../../components/NavIntro';

function Features() {
  return (
    <div className="feature-container">
      <NavIntro activePage={'features'} />
      <div className="feature-title">
        All the features you need for
        <br /> succeeding with your investment.
      </div>
      <div className="feature-content">
        <div className="feature">
          <i class="fa-solid fa-chart-line"></i>
          <div className="content-title">Real-time Chart</div>
          <div className="content-description">
            Futuris use "TradingView" to create a real-time chart of a feature's
            price changes, helping investors make informed decisions based on
            the latest market trends.
          </div>
        </div>
        <div className="feature">
          <i class="fa-solid fa-arrows-rotate"></i>
          <div className="content-title">Recurring Order</div>
          <div className="content-description">
            Auto invest is a website that sets up recurring orders for your
            favorite products, ensuring you never run out of essentials.
          </div>
        </div>
        <div className="feature">
          <i class="fa-solid fa-money-bills"></i>
          <div className="content-title">Demo Trading</div>
          <div className="content-description">
            Futuris offers a demo trading feature that lets you practice without
            risking real money. Test your strategies in real-time market
            conditions and hone your skills.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
