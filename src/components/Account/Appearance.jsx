import { nanoid } from 'nanoid';
import React, { useContext, useState } from 'react';
import { MainPageContext } from '../../App';

function Appearance() {
  const {fontSize, setFontSize, isDarkMode, setIsDarkMode} = useContext(MainPageContext)
  const [isFontDropDown, setIsFontDropDown] = useState(false);
  const [isThemeDropDown, setIsThemeDropDown] = useState(false);

  function handleFontChange(size){
    const allElement = document.getElementsByTagName('*')[0];
    allElement.style.fontSize = size.toLowerCase();
  }
  let optionList = ['Small', 'Medium', 'Large'].map((value) => {
    return (
      <div
      key={nanoid()}
        className="option"
        onClick={() => {
          setIsFontDropDown((value) => !value);
          setFontSize(value)
          handleFontChange(value)
        }}
      >
        <input
          type="radio"
          className="radio"
          id={`font-size-${value}`}
          name="font-size-radio"
        />
        <label htmlFor="font-size-radio">{value}</label>
      </div>
    );
  });

  let themeList = ['Light', 'Dark'].map((value) => {
    return (
      <div
      key={nanoid()}
        className="option"
        onClick={() => {
          setIsThemeDropDown((value) => !value);
          setIsDarkMode(value === 'Dark' ? true : false)
        }}
      >
        <input
          type="radio"
          className="radio"
          id={`theme-${value}`}
          name="theme-radio"
        />
        <label htmlFor="theme-radio">{value}</label>
      </div>
    );
  });

  return (
    <div className='appearance-col'>
      <div className="eye-disability-support-container setting-row">
        <div className='setting-row-title'>Font Size: </div>
        <div className="select-box setting-select-box">
          <div
            className={
              isFontDropDown
                ? 'options-container font-size-selector active'
                : 'options-container font-size-selector'
            }
          >
            {optionList}
          </div>

          <div
            className="selected"
            onClick={() => {
              setIsFontDropDown((value) => !value);
            }}
          >
            {fontSize}
          </div>
        </div>
        
      </div>
      <div className="eye-disability-support-container setting-row">
        <div className='setting-row-title'>Theme: </div>
        <div className="select-box setting-select-box">
          <div
            className={
              isThemeDropDown
                ? 'options-container font-size-selector active'
                : 'options-container font-size-selector'
            }
          >
            {themeList}
          </div>

          <div
            className="selected"
            onClick={() => {
              setIsThemeDropDown((value) => !value);
            }}
          >
            {isDarkMode? 'Dark' : 'Light'}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Appearance;
