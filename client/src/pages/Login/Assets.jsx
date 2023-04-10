import React from "react";
import "./Assets.css";
import CryptoMarket from "../../components/CryptoMarket";
import NavIntro from "../../components/NavIntro";


function Assets() {
  return (
    <div>
      <NavIntro activePage={'assets'} />
      <CryptoMarket/>
    </div>
  );
}

export default Assets;
