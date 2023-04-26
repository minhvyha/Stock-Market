import React, { useContext } from 'react';
import { MainPageContext } from '../../App';
import './Home.css';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';
import Selection from '../../components/Selection';

function Home() {
  const { stock } = useContext(MainPageContext);
  return (
    <div className="main-container">
      <div id="home-chart-container">
        <AdvancedRealTimeChart
				autosize={true}
				allow_symbol_change={false}
          symbol={stock}
          copyrightStyles={{
            parent: {
              fontSize: '0px',
              display: 'none',
            },
          }}
          theme="dark"
        />
      </div>
      <div className="side-container">
        <Selection />
        <div className="action-container">
          <div className="action-buy">Buy</div>
          <div className="action-sell">Sell</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
