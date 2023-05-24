import React from 'react'
import { MarketData } from "react-ts-tradingview-widgets";

function StockMarket() {
  const styles = {
    parent: {
      fontSize: "0px",
      display: 'none'
    },
  };
  return <MarketData colorTheme="dark" width="100%" height={400} copyrightStyles={styles}></MarketData>

}

export default StockMarket