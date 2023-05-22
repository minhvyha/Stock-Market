import React, { useContext, useEffect, useState } from 'react';
import './Buy.css';
import BuyImage from '../../assets/images/BuyImage.png';
import { MainPageContext } from '../../App';
import { nanoid } from 'nanoid';

function Buy() {
  const { user } = useContext(MainPageContext);
  const [quote, setQuote] = useState('');
  const [selected, setSelected] = useState(false);
  const [searchList, setSearchList] = useState();
  const [isDropDown, setIsDropDown] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (quote !== '') {
        const searchApi = await fetch(
          `https://financialmodelingprep.com/api/v3/search?query=${quote}&exchange=NASDAQ&exchange=CRYPTO&exchange=NSYE&limit=40&apikey=${process.env.REACT_APP_STOCK_SEARCH}`
        );

        const stockValue = await searchApi.json();
        let optionList = stockValue.map((data) => {
          return (
            <div
              key={nanoid()}
              className="option"
              onClick={() => {
                setIsDropDown((value) => !value);
              }}
            >
              <input
                type="radio"
                className="radio hidden"
                id={`${data.symbol}`}
                name="category"
              />
              <label
                htmlFor={`${data.symbol}`}
              >{`${data.symbol} - ${data.name}`}</label>
            </div>
          );
        });
        setSearchList(optionList);
        console.log(searchList)
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [quote]);

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
          <div className="trade-type-info">Buy</div>
        </div>
        <div className="flex flex-row relative">
          <div className="bg-white text-black p-2.5 rounded-sm flex align-center">
            Quote
          </div>

          <input
            type="text"
            placeholder="Stock | Crypto"
            onChange={(e) => {
              setQuote(e.target.value);
              
            }}
            className="bg-black focus:border-buy-outline border-2 focus:outline-none placeholder:text-sm border-solid placeholder:text-gray-400	border-buy-border border-l-0 flex-1 text-white p-2"
            value={quote}
          />
          <div className='flex flex-col absolute z-50 bg-tertiary w-full mt-12'>
            {searchList}
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
