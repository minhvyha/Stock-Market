import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import Wallet from '../assets/images/Wallet.png';
import Card from '../assets/images/Card.png';
import Down from '../assets/images/Down.png';
import Account from '../assets/images/Account.png';

function Footer() {
  return (
    <footer>
      <NavLink to="/home" exact="true" activeclassname="active">
        <div className="footer-item-container">
          <img src={Logo} alt="" />
          <label>Home</label>
        </div>
      </NavLink>
      <NavLink to="/portfolio" exact="true" activeclassname="active">
        <div className="footer-item-container">
          <img src={Wallet} alt="" />

          <label>Portfolio</label>
        </div>
      </NavLink>
      <NavLink
        to="/buy"
        className={({ isActive }) => (isActive ? 'active-footer' : '')}
      >
        <div className="footer-item-container">
          <img src={Card} alt="" />

          <label>Buy</label>
        </div>
      </NavLink>
      <NavLink
        to="/sell"
        className={({ isActive }) => (isActive ? 'active-footer' : '')}
      >
        <div className="footer-item-container">
          <img src={Down} alt="" />

          <label>Sell</label>
        </div>
      </NavLink>
      <NavLink
        to="/account"
        className={({ isActive }) => (isActive ? 'active-footer' : '')}
      >
        <div className="footer-item-container">
          <img src={Account} alt="" />
          <label>Account</label>
        </div>
      </NavLink>
    </footer>
  );
}

export default Footer;
