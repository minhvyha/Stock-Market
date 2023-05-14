import React, { useContext, useState } from 'react';
import { MainPageContext } from '../../App';
import './Account.css';
import Personal from '../../components/Account/Personal';
import Appearance from '../../components/Account/Appearance';
import Password from '../../components/Account/Password';
import Help from '../../components/Account/Help';
import Contact from '../../components/Account/Contact';
import Trade from '../../components/Account/Trade';
import { nanoid } from 'nanoid';

function Account() {
  let {
    handleSignOut,
    user,
    activeSetting,
    isDropDown,
    setActiveSetting,
    setIsDropDown,
  } = useContext(MainPageContext);

  let settingList = [
    { name: 'my details', component: Personal },
    {name : 'trade', component: Trade, external: true},
    { name: 'security and password', component: Password },
    { name: 'appearance', component: Appearance },
    { name: 'help', component: Help },
    {name : 'contact us', component: Contact},
  ];

  let settings = settingList.map((setting) => {
    return (
      <div
        key={nanoid()}
        id={`account-${setting.name}`}
        className="account-setting-list"
        onClick={() => {
          setActiveSetting(setting.name);
          document.getElementById('account-nav').classList.add('disable');
          document
            .getElementById('account-main-content')
            .classList.add('account-active');
          console.log(activeSetting)
        }}
      >
        {capitalize(setting.name)}
        {setting.external ? <i className="fa-solid fa-arrow-up-right-from-square"></i>: <i className="fa-solid fa-chevron-right"></i>}
      </div>
    );
  });

  let fontSize = ['Small', 'Medium', 'Large'];
  let optionList = fontSize.map((value) => {
    return (
      <div
        className="option"
        onClick={() => {
          document.querySelector('.selected').innerHTML = `${value}`;
          setIsDropDown((value) => !value);
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

  function handlePopUp() {
    document.getElementById('sign-out-form').style.display = 'grid';
  }

  function handleCancel() {
    document.getElementById('sign-out-form').style.display = 'none';
  }

  function selectBoxClick() {
    setIsDropDown((value) => !value);
  }

  function changeFontSizeRoot(fontSize) {
    const root = document.querySelector(':root');
    root.style.setProperty('--my-color', 'blue');
  }

  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

  function changeFontSize(value) {
    switch (value) {
      case 'Small':
      case 'Medium':
      case 'Large':
    }
  }

  return (
    <div className="main-container">
      <div id="account-nav" className="account-navigation-bar">
        {settings}
      </div>
      <div id="account-main-content" className="account-main-content">
        {activeSetting === 'my details' ? <Personal /> : null}
        {activeSetting === 'security and password' ? <Password /> : null}
        {activeSetting === 'appearance' ? <Appearance /> : null}
        {activeSetting === 'help' ? <Help /> : null}
      </div>
      {/* <div className="sign-out-container">
				<h2 className="sign-out-name">{user.name}</h2>
				<div className="eye-disability-support-container">
					<div>Font Size: </div>
					<div className="select-box">
						<div
							className={
								isDropDown
									? 'options-container font-size-selector active'
									: 'options-container font-size-selector'
							}
						>
							{optionList}
						</div>

						<div className="selected" onClick={selectBoxClick}>
							Select Font Size
						</div>
					</div>
				</div>
				<button className="btn-sign-out" onClick={handlePopUp}>
					Sign Out
				</button>
				<div id="sign-out-form">
					<div className="sign-out-inner">
						<h4>Are you sure you want to sign out?</h4>
						<div className="sign-out-action-container">
							<button className="cancel-btn" onClick={handleCancel}>
								CANCEL
							</button>
							<button
								className="real-btn-sign-out"
								onClick={handleSignOut}
							>
								<Link to="/intro">SIGN OUT</Link>
							</button>
						</div>
					</div>
				</div>
			</div> */}
    </div>
  );
}

export default Account;
