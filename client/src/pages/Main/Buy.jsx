import React, { useContext, useEffect, useState } from 'react';
import './Buy.css';
import { MainPageContext } from '../../App';
import { nanoid } from 'nanoid';
import Loading from '../../components/Loading';

function Buy() {
  const { user } = useContext(MainPageContext);
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(false);
  const [price, setPrice] = useState(0)
  const [searchList, setSearchList] = useState();
  const [isDropDown, setIsDropDown] = useState(false);
  useEffect(() => {
    if (selected) {
      return;
    }
    const timeoutId = setTimeout(async () => {
      if (quote !== '') {
        const searchApi = await fetch(
          `https://financialmodelingprep.com/api/v3/search?query=${quote}&exchange=NASDAQ&exchange=CRYPTO&exchange=NSYE&limit=5&apikey=${process.env.REACT_APP_STOCK_SEARCH}`
        );

        const stockValue = await searchApi.json();
        let optionList = stockValue.map((data) => {
          return (
            <div
              key={nanoid()}
              className="option"
              onClick={async () => {
                setIsDropDown((value) => !value);
                setQuote(data.symbol);
                setSelected(true);
                setLoading(true);
                let priceApi = await fetch(
                  `https://financialmodelingprep.com/api/v3/quote-short/${data.symbol}?apikey=${process.env.REACT_APP_STOCK_SEARCH}`
                );
                let result = await priceApi.json();
                setPrice(result[0].price)
                document.getElementById(
                  'price-input'
                ).value = `${result[0].price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })} - estimated`;
                setLoading(false);
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
        setIsDropDown(true);
        console.log(searchList);
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

  async function handleBuy(){
    if (!selected){
      return
    }
    let priceApi = await fetch(
      `https://financialmodelingprep.com/api/v3/quote-short/${quote}?apikey=${process.env.REACT_APP_STOCK_SEARCH}`
    );
    let result = await priceApi.json();
    let price = result[0].price
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
              setSelected(false);
            }}
            className="bg-black focus:border-buy-outline border-2 focus:outline-none placeholder:text-sm border-solid placeholder:text-gray-400	border-buy-border border-l-0 flex-1 text-white p-2"
            value={quote}
          />
          {isDropDown && (
            <div className="flex flex-col absolute z-50 bg-tertiary w-full mt-12 gap-2 py-2">
              {searchList}
            </div>
          )}
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
              onChange={(e) =>{
                document.getElementById('value-input').value = (e.target.value) * Number(price)
              }}
            />
            <input
              type="number"
              placeholder="Value (optional)"
              className="quanity-input"
              disabled={true}
              id="value-input"
              onChange={(e) =>{
                document.getElementById('quanity-input').value = e.target.value / Number(price)
              }}
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
              type="text"
              placeholder="Price"
              className="price-input focus:outline-none"
              id="price-input"
            />
          </div>
        </div>
        <button
          onClick={handleBuy}
          className="bg-main-color py-3 px-8 rounded-md outline-none w-fit text-white font-bold shadow-md shadow-primary"
        >
          Place order
        </button>
      </div>
      {loading && <Loading />}
    </div>
  );
}

export default Buy;
