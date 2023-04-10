import React from 'react';
import './Assets.css';
import NavIntro from '../../components/NavIntro';
import CryptoMarket from '../../components/CryptoMarket';
import StockMarket from '../../components/StockMarket';

function Assets() {
  return (
    <div>
      <NavIntro activePage={'assets'} />
      <div className="assets-container">
        <div className="assets-subcontainer">
          <div className="assets-title">Crypto Market Overview</div>
          <div className="crypto-container">
            <CryptoMarket />
          </div>
        </div>
        <div className="assets-subcontainer">
          <div className="assets-title">Stock Market Overview</div>
          <div className="stock-container">
            <StockMarket />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assets;
