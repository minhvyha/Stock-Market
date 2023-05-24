import React from 'react';
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";

function CryptoMarket() {
  const styles = {
    parent: {
      fontSize: "0px",
      display: 'none'
    },
  };
  return (
    <CryptoCurrencyMarket colorTheme="dark" width="100%" height={400} copyrightStyles={styles}></CryptoCurrencyMarket>

  );
}

export default CryptoMarket;
