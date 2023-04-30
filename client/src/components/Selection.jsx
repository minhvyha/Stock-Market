import React, { useContext, useState } from 'react';
import { Symbol } from '../SP500';
import {Cryptocurrencies} from '../Crypto.js'
import { MainPageContext } from '../App';
import { nanoid } from 'nanoid';
import './Selection.css';

function Selection({ handleChoose }) {
  const [isDropDown, setIsDropDown] = useState(false);
  const { setStock, setTitle, setSector } = useContext(MainPageContext);

  function selectBoxClick() {
    const optionsContainer = document.querySelector('.options-container');
    const searchBox = document.querySelector('.search-box input');
    setIsDropDown((value) => !value);
    searchBox.value = '';
    filterList('');

    if (!optionsContainer.classList.contains('active')) {
      searchBox.focus();
    }
  }

  let cryptoOptionList = Cryptocurrencies.map((crypto) =>{
    return (
      <div
        key={nanoid()}
        className="option"
        onClick={() => {
          setStock(`${crypto.id}/USD`);
          setTitle(crypto.name);
          setSector(crypto.details.type);

          document.querySelector('.selected').innerHTML = `${crypto.id}`;
          setIsDropDown((value) => !value);
          handleChoose();
        }}
      >
        <input
          type="radio"
          className="radio"
          id={`${crypto.id}`}
          name="category"
        />
        <label
          htmlFor={`${crypto.id}`}
        >{`${crypto.name} - ${crypto.id}`}</label>
      </div>
    ); 
  })

  let optionList = Symbol.map((company) => {
    return (
      <div
        key={nanoid()}
        className="option"
        onClick={() => {
          setStock(company.Symbol);
          setTitle(company.Name);
          setSector(company.Sector);

          document.querySelector('.selected').innerHTML = `${company.Symbol}`;
          setIsDropDown((value) => !value);
          handleChoose();
        }}
      >
        <input
          type="radio"
          className="radio"
          id={`${company.Symbol}`}
          name="category"
        />
        <label
          htmlFor={`${company.Symbol}`}
        >{`${company.Name} - ${company.Symbol}`}</label>
      </div>
    );
  });

  const filterList = (searchTerm) => {
    const optionsList = document.querySelectorAll('.option');
    searchTerm = searchTerm.toLowerCase();
    optionsList.forEach((option) => {
      let label =
        option.firstElementChild.nextElementSibling.innerText.toLowerCase();
      if (label.indexOf(searchTerm) !== -1) {
        option.style.display = 'block';
      } else {
        option.style.display = 'none';
      }
    });
  };

  return (
    <div className="choose-input-container">
      <div className="select-box">
        <div
          className={
            isDropDown ? 'options-container active' : 'options-container'
          }
        >
          {optionList}
          {cryptoOptionList}
        </div>

        <div className="selected" onClick={selectBoxClick}>
          Select Symbol
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Start Typing..."
            onKeyUp={function (e) {
              filterList(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Selection;
