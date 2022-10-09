import React from 'react';
import './Nav.css';
import Logo from '../assets/images/textLogo.png';

function Nav() {
    return (
        <nav className="navBar">
            <div className="nav-container">
                <input type="checkbox" id="check" />
                <img className="logo" src={Logo} alt="" />
                <label for="check" className="checkbtn">
                    <i className="fas fa-bars menu-symbol"></i>
                </label>
                <ul>
                    <li>
                        <a href="#">Home</a>
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
            </div>
        </nav>
    );
}

export default Nav;
