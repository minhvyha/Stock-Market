import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <nav id='navBar'>
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo">StockX</label>
      <ul>
        <li>
          <a href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Feedback</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
