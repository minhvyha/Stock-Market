import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/textLogo.png';

function Intro() {
    return (
        <div className="intro-container">
            <img src={Logo} alt="" />
        </div>
    );
}

export default Intro;
