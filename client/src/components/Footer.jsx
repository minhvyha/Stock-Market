import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import Wallet from '../assets/images/Wallet.png';
import Card from '../assets/images/Card.png';
import Down from '../assets/images/Down.png';
import Account from '../assets/images/Account.png';
import { useContext } from 'react';
import { MainPageContext } from '../App';

function Footer() {
  let { activePage, setActivePage } = useContext(MainPageContext);
  function handleFooter(page) {
    setActivePage(page);
    console.log(page);
  }
  return (
    <footer>
      <NavLink to="/home">
        <div
          className="footer-item-container"
          onClick={function () {
            handleFooter('home');
          }}
        >
          <img src={Logo} alt="" />
          <label>Home</label>
        </div>
      </NavLink>
      <NavLink to="/portfolio">
        <div
          className="footer-item-container"
          onClick={function () {
            handleFooter('portfolio');
          }}
        >
          <img src={Wallet} alt="" />

          <label>Portfolio</label>
        </div>
      </NavLink>
      <NavLink to="/buy">
        <div
          className="footer-item-container"
          onClick={function () {
            handleFooter('buy');
          }}
        >
          <img src={Card} alt="" />

          <label>Buy</label>
        </div>
      </NavLink>
      <NavLink to="/sell">
        <div
          className="footer-item-container"
          onClick={function () {
            handleFooter('sell');
          }}
        >
          <img src={Down} alt="" />

          <label>Sell</label>
        </div>
      </NavLink>
      <NavLink to="/account">
        <div
          className="footer-item-container"
          onClick={function () {
            handleFooter('account');
          }}
        >
          <img src={Account} alt="" />
          <label>Account</label>
        </div>
      </NavLink>
    </footer>
  );
}

export default Footer;
