import React, { useContext, useEffect, useState } from 'react';
import { MainPageContext } from '../App';
import { nanoid } from 'nanoid';
import './Selection.css';

function Selection() {
  const [isDropDown, setIsDropDown] = useState(false);
  const [searchValue, setSearchValue] = useState('')
  const [searchList, setSearchList] = useState()
  const { setAssets, setTitle, setSector } = useContext(MainPageContext);

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



  useEffect(() =>{

    const timeoutId = setTimeout( async ()=>{

      if(searchValue !== ''){
        const searchApi = await fetch(
          `https://financialmodelingprep.com/api/v3/search?query=${searchValue}&exchange=NASDAQ&exchange=CRYPTO&exchange=NSYE&limit=40&apikey=${process.env.REACT_APP_STOCK_SEARCH}`
        );
  
        const stockValue = await searchApi.json()
        let optionList = stockValue.map((data) => {
          return (
            <div
              key={nanoid()}
              className="option"
              onClick={() => {
                setAssets(data.symbol);
                setTitle(data.name);
                setSector(data.exchangeShortName);
      
                document.querySelector('.selected').innerHTML = `${data.symbol}`;
                setIsDropDown(false);
      
              }}
            >
              <input
                type="radio"
                className="radio"
                id={`${data.symbol}`}
                name="category"
              />
              <label
                htmlFor={`${data.symbol}`}
              >{`${data.symbol} - ${data.name}`}</label>
            </div>
          );
        });
        setSearchList(optionList)
      }
    }, 1000)
    return () => clearTimeout(timeoutId)
  }, [searchValue])

  function handleSearch (event){
    setSearchValue(event.target.value)
  }

  const filterList = (searchTerm) => {
    const optionsList = document.querySelectorAll('.option');
    let customSelection = document.getElementById('custom-selection')
    if (customSelection !== null){
      customSelection.remove()
    }
    if (searchTerm !== ''){
      let customOption = document.createElement('div');
      customOption.classList.add('option');
      customOption.id = ('custom-selection')
      customOption.addEventListener('click', () => {
        setAssets(searchTerm);
        setTitle(searchTerm);
        setSector('Custom Selection');
  
        document.querySelector('.selected').innerHTML = searchTerm;
        setIsDropDown(false);
      });
      customOption.innerHTML = `
      <input
      type="radio"
      className="radio"
      id="${searchTerm}-custom-selection"
      name="category"
      style="display: none"
    />
    <label
      htmlFor="${searchTerm}-custom-selection"
    >${searchTerm} - Custom Selection</label>
      `;
      document.getElementById('options-container').appendChild(customOption)
    }

    
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
        id='options-container'
          className={
            isDropDown ? 'options-container active' : 'options-container'
          }
        >
          {searchList}
        </div>

        <div className="selected" onClick={selectBoxClick}>
          Select Symbol
        </div>

        <div className="search-box">
          <input
            type="text"
            className='text-black'
            placeholder="Start Typing..."
            onKeyUp={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}

export default Selection;
