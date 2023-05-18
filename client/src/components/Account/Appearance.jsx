import { nanoid } from 'nanoid';
import React, { useState } from 'react';

function Appearance() {
  const [isDropDown, setIsDropDown] = useState(false);
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
          document.querySelector('.selected').innerHTML = `${value}`;
          setIsDropDown((value) => !value);
          handleFontChange(value)
        }}
      >
        <input
          type="radio"
          className="radio"
          id={`font-size-${value}`}
          name="category"
        />
        <label for="automobiles">{value}</label>
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
              isDropDown
                ? 'options-container font-size-selector active'
                : 'options-container font-size-selector'
            }
          >
            {optionList}
          </div>

          <div
            className="selected"
            onClick={() => {
              setIsDropDown((value) => !value);
            }}
          >
            Select Font Size
          </div>
        </div>
        
      </div>
      <div className="eye-disability-support-container setting-row">
        <div className='setting-row-title'>Theme: </div>
        <div className="select-box setting-select-box">
          <div
            className={
              isDropDown
                ? 'options-container font-size-selector active'
                : 'options-container font-size-selector'
            }
          >
            {optionList}
          </div>

          <div
            className="selected"
            onClick={() => {
              setIsDropDown((value) => !value);
            }}
          >
            Select Font Size
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Appearance;
