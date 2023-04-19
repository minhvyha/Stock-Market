import React from 'react';
import './Demo.css';
import NavIntro from '../../components/NavIntro';
import { Link } from 'react-router-dom';

function Demo() {
  return (
    <div className='demo-wrapper'>
      <NavIntro activePage={'demo'} />
      <div className="demo-signup-container">
        <div className="demo-title">Futuris Demo Trading</div>
        <div className='demo-subtitle'>Demo feature allows you to trade stock and crypto with <br />real-time market data and risk free.</div>
        <Link to="/signup">
						<button className="intro-signup-btn intro-main-btn">
							Get started
						</button>
					</Link>
      </div>
      <div className="demo-instruction-container">
        <div className="demo-title">How to Use Demo Mode</div>
      </div>
    </div>
  );
}

export default Demo;
