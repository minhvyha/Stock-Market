import React from "react";
import "./Assets.css";
import NavIntro from "../../components/NavIntro";
import CryptoMarket from "../../components/CryptoMarket";

function Assets() {
  return (
    <div>
      <NavIntro activePage={'assets'} />
      <div className="assets-crypto-container">
        <div className="crypto-market-container">
        <CryptoMarket/>
        </div>
      </div>
      <div className="assets-stock-container">
      </div>
    </div>
  );
}

export default Assets;
