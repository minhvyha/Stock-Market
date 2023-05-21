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
import { useNavigate } from 'react-router-dom';

function Account() {
  let { handleSignOut, user, activeSetting, setActiveSetting } =
    useContext(MainPageContext);

  let navigate = useNavigate();
  let settingList = [
    { name: 'my details', component: Personal },
    { name: 'trade', link: '/buy', external: true },
    { name: 'futuris news', link: '/news', external: true },
    { name: 'security and password', component: Password },
    { name: 'appearance', component: Appearance },
    { name: 'help', component: Help },
    { name: 'contact us', component: Contact },
  ];

  function back(){
    setActiveSetting('');
            document
              .getElementsByClassName('account-wrapper')[0]
              .classList.remove('disable');
            document
              .getElementById('account-main-content')
              .classList.remove('account-active');
  }

  let settings = settingList.map((setting) => {
    return (
      <div
        key={nanoid()}
        id={`account-${setting.name}`}
        className="account-setting-list"
        onClick={() => {
          if (setting.external) {
            setActiveSetting('');
            navigate(setting.link);
          } else {
            setActiveSetting(setting.name);
            document
              .getElementsByClassName('account-wrapper')[0]
              .classList.add('disable');
            document
              .getElementById('account-main-content')
              .classList.add('account-active');
          }
        }}
      >
        {capitalize(setting.name)}
        {setting.external ? (
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        ) : (
          <i className="fa-solid fa-chevron-right"></i>
        )}
      </div>
    );
  });

  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }

  return (
    <div className="main-container">
      <div className="account-wrapper">
        <div id="account-nav" className="account-navigation-bar">
          {settings}
        </div>
        <div className="accout-logout-btn rounded-sm" onClick={handleSignOut}>
          Log out
        </div>
      </div>
      <div id="account-main-content" className="account-main-content">
        <div id='setting-back-button' onClick={back} >
          <i className="fa-solid fa-arrow-left-long" ></i>
          Back
        </div>
        {activeSetting === 'my details' ? <Personal /> : null}
        {activeSetting === 'security and password' ? <Password /> : null}
        {activeSetting === 'appearance' ? <Appearance /> : null}
        {activeSetting === 'help' ? <Help /> : null}
        {activeSetting === 'contact us' ? <Contact /> : null}
      </div>
    </div>
  );
}

export default Account;
