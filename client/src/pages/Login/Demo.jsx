import React from 'react';
import './Demo.css';
import NavIntro from '../../components/NavIntro';

function Demo() {
  return (
    <div>
      <NavIntro activePage={'demo'} />
      <div className="demo-signup-container">
        <div className="demo-title">Futuris Demo Trading</div>
      </div>
      <div className="demo-instruction-container">
        <div className="demo-title">How to Use Demo Mode</div>
      </div>
    </div>
  );
}

export default Demo;
