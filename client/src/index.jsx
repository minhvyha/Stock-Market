import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

document.window.scroll(function() {
    if (document.window.scrollTop() > 10) {
        document.getElementById('navBar').addClass('floatingNav');
    } else {
        document.getElementById("navBar").removeClass('floatingNav');
    }
});