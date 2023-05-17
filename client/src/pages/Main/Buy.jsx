import React, { useContext } from 'react';
import './Buy.css';
import BuyImage from '../../assets/images/BuyImage.png';
import { MainPageContext } from '../../App';

function Buy() {
  const { user } = useContext(MainPageContext);
  function handleQuanitySelection(id) {
    let input = document.getElementsByClassName('quanity-input');
    for (let i = 0; i < input.length; i++) {
      input[i].disabled = true;
      input[i].classList.remove('buy-input-active');
    }
    document.getElementById(id).disabled = false;
    document.getElementById(id).classList.add('buy-input-active');
  }
  return (
    <div className="main-container">
      <div className="trade-main-container">
        <div className="trade-information">
          <div className="buy-title">Place Order:</div>
          <div className="available-credit">
            {user.cash.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
            <div className="available-credit-description">Available</div>
          </div>
        </div>
        <div className="trade-row">
          <div className="trade-instruction">Order Type:</div>
          <div className="trade-type-info">
            Buy
            <div className="available-credit">
              {user.cash.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </div>
          </div>
        </div>
        <div className="trade-col quanity-wrapper">
          <div className="quanity-selection-container">
            <input
              type="radio"
              id="quanity-btn"
              name="quanity-btn"
              onChange={() => handleQuanitySelection('quanity-input')}
              defaultChecked={true}
            />
            <label htmlFor="quanity-btn">Quanity</label>
            <input
              type="radio"
              id="value-btn"
              onChange={() => handleQuanitySelection('value-input')}
              name="quanity-btn"
            />
            <label htmlFor="value-btn">Value (USD)</label>
          </div>
          <div className="quanity-input-container">
            <input
              type="number"
              placeholder="Quanity"
              className="quanity-input buy-input-active"
              id="quanity-input"
            />
            <input
              type="number"
              placeholder="Value (optional)"
              className="quanity-input"
              disabled={true}
              id="value-input"
            />
          </div>
        </div>
        <div className="trade-col instruction-wrapper">
          <div className="price-selection-container">
            <input
              type="radio"
              id="market-btn"
              name="instruction-btn"
              defaultChecked={true}
            />
            <label htmlFor="market-btn">Market</label>
            <input
              type="radio"
              id="limit-btn"
              name="instruction-btn"
              disabled={true}
            />
            <label htmlFor="limit-btn">Limit</label>
            <input
              type="radio"
              id="stop-btn"
              disabled={true}
              name="instruction-btn"
            />
            <label htmlFor="stop-btn">Stop</label>
          </div>
          <div className="price-input-container">
            <input
              type="number"
              placeholder="Price"
              className="price-input"
              id="price-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buy;
