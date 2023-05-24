import React, { useContext } from 'react';
import { MainPageContext } from '../../App';
import './Home.css';
import { TechnicalAnalysis } from 'react-ts-tradingview-widgets';
import { FundamentalData } from 'react-ts-tradingview-widgets';
import { CompanyProfile } from 'react-ts-tradingview-widgets';
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';
import Selection from '../../components/Selection';
import { useNavigate } from 'react-router-dom';

function Home() {
  const { assets, title, sector } = useContext(MainPageContext);
  let navigate = useNavigate()
  return (
    <div className="main-container">
      <div className="main-wrapper">
        <div className="home-chart-wrapper">
          <div className="home-chart-description">
            {title} (
            {sector === 'crypto' ? `${assets.split('USD')[0]}/USD` : assets}) -{' '}
            {sector}
          </div>
          <div id="home-chart-container">
            <AdvancedRealTimeChart
              hide_side_toolbar={true}
              autosize={true}
              allow_symbol_change={false}
              symbol={assets}
              copyrightStyles={{
                parent: {
                  fontSize: '0px',
                  display: 'none',
                },
              }}
              theme="dark"
            />
          </div>
        </div>
        <div className="side-container">
          <Selection />
          <div className="action-container">
            <div className="action-buy cursor-pointer" onClick={e => navigate('/buy')} >Buy</div>
            <div className="action-sell cursor-pointer" onClick={e => navigate('/sell')}>Sell</div>
          </div>
        </div>
      </div>
      <div className="symbol-info-wrapper">
        <div className="symbol-info-title">Symbol Profile</div>
        <CompanyProfile
          symbol={assets}
          colorTheme="dark"
          copyrightStyles={{
            parent: {
              fontSize: '0px',
              display: 'none',
            },
          }}
          height={350}
          width="100%"
        ></CompanyProfile>
        <div className="technical-wrapper">
          <FundamentalData
            colorTheme="dark"
            symbol={assets}
            copyrightStyles={{
              parent: {
                fontSize: '0px',
                display: 'none',
              },
            }}
            width="100%"
            height={350}
          />
          <TechnicalAnalysis
            colorTheme="dark"
            symbol={assets}
            copyrightStyles={{
              parent: {
                fontSize: '0px',
                display: 'none',
              },
            }}
            height={350}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
