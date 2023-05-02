import React, { useContext } from 'react';
import './Nav.css';
import LogoTextLight from '../assets/images/LogoTextLight.png';
import LogoTextDark from '../assets/images/LogoTextDark.png';
import { Link } from 'react-router-dom';
import { MainPageContext } from '../App';

function Nav() {
  const { activePage, setActivePage } = useContext(MainPageContext);
  function handleNavigation(page) {
    setActivePage(page);
    console.log(page);
    let input = document.getElementById('check');
    if (input) {
      input.checked = false;
    }
  }
  return (
    <nav className="navBar intro-nav">
      <div className="nav-container">
        <input type="checkbox" id="intro-check" />
        <div className="nav-subcontainer">
          <Link className="logo-link" to="/">
            <img id="intro-image" className="logo" src={LogoTextDark} alt="" />
            <img
              id="intro-image-light"
              className="logo"
              src={LogoTextLight}
              alt=""
            />
          </Link>
          <label htmlFor="intro-check" className="checkbtn">
            <i className="fas fa-bars menu-symbol"></i>
          </label>
        </div>

        <ul>
          <li
            className={activePage === 'home' ? 'active' : ''}
            onClick={() => handleNavigation('home')}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={activePage === 'portfolio' ? 'active' : ''}
            onClick={() => handleNavigation('portfolio')}
          >
            <Link to="/portfolio">Porfolio</Link>
          </li>
          <li
            className={activePage === 'buy' ? 'active' : ''}
            onClick={() => handleNavigation('buy')}
          >
            <Link to="/buy">Buy</Link>
          </li>
          <li
            className={activePage === 'sell' ? 'active' : ''}
            onClick={() => handleNavigation('sell')}
          >
            <Link to="/sell">Sell</Link>
          </li>
          <li
            id="account"
            className={activePage === 'account' ? 'active' : ''}
            onClick={() => handleNavigation('account')}
          >
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
