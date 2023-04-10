import React from 'react';

function CryptoMarket() {
  return (
    <div className="widget-wizard-screener-settings__preview">
      <div
        className="tv-external-tools__widget-iframe-wrap js-widget-wizard__example"
        style={{widows: 1200, height: 800, overflow:'hidden'}}
      >
        <div
          className="tradingview-widget-container"
          style={{width: '100%', height: '100%'}} 
        >
          <iframe
            allowtransparency="true"
            frameborder="0"
            src="https://www.tradingview-widget.com/embed-widget/crypto-mkt-screener/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22defaultColumn%22%3A%22overview%22%2C%22screener_type%22%3A%22crypto_mkt%22%2C%22displayCurrency%22%3A%22USD%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Afalse%2C%22market%22%3A%22crypto%22%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22www.tradingview.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22cryptomktscreener%22%7D"
            style={{boxSizing: 'border-box', display: 'block', height: 'calc(100% - 32px)', width : '100%'}} 
          ></iframe>
          <div className="tradingview-widget-copyright">
            <a
              href="https://www.tradingview.com/markets/cryptocurrencies/prices-all/"
              rel="noopener"
              target="_blank"
            >
              <span className="blue-text">Crypto markets</span>
            </a>{' '}
            by TradingView
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoMarket;
