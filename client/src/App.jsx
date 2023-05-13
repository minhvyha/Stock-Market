import React, { useState, useEffect, useRef } from 'react';
import { Symbol } from './SP500';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import Home from './pages/Main/Home';
import ProtectedRoute from './pages/Layout/ProtectedRoute';
import ShareLayout from './pages/Layout/ShareLayout';
import Intro from './pages/Login/Intro';
import Features from './pages/Login/Features';
import Assets from './pages/Login/Assets';
import News from './pages/Login/News';
import Demo from './pages/Login/Demo';
import Portfolio from './pages/Main/Portfolio';
import Account from './pages/Main/Account';
import Buy from './pages/Main/Buy';
import Sell from './pages/Main/Sell';
import Personal from './components/Account/Personal';
import SuccessPopUp from './components/SuccessPopUp';
import FailPopUp from './components/FailPopUp';
import Loader from './components/Loader';

// https://cloud.iexapis.com/stable/stock/AAPL/quote?token=

export const MainPageContext = React.createContext();

function App() {
  const [user, setUser] = useState({
    // name: 'Minh Vy Ha',
    // assets: {
    //   "AAPL": 50_000,
    //   "BTCUSD": 50_000, 
    //   "ETHUSD" : 180_000,
    //   "AMZN" : 92_000,
    //   "MATICUSD": 22000,
    //   "BNBUSD": 80_012
    // },
    // cash: 100_000,
    // totalAssets: 572_012,

  });
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [data, setData] = useState();
  const [isLightMode, setIsLightMode] = useState(true);
  const [successPopUpOpen, setSuccessPopUpOpen] = useState(false);
  const [assets, setAssets] = useState('AAPL');
  const [isDropDown, setIsDropDown] = useState(false);
  const [activeSetting, setActiveSetting] = useState('personal');

  const [title, setTitle] = useState('Apple');
  const [sector, setSector] = useState('Information Technology');
  const [activePage, setActivePage] = useState('home');
  function handleSignOut(event) {
    setUser({});
  }

  return (
    <BrowserRouter>
      <MainPageContext.Provider
        value={{
          Symbol,
          user,
          data,
          assets,
          title,
          sector,
          windowSize,
          activePage,
          setAssets,
          setTitle,
          setSector,
          handleSignOut,
          setIsLightMode,
          setActivePage,
          isDropDown,
          setIsDropDown,
          activeSetting,
          setActiveSetting,
        }}
      >
        <Routes>
          <Route path="/" element={<ShareLayout />}>
            <Route index element={<Navigate to="/home" />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute user={user}>
                  <Home />
                </ProtectedRoute>
              }
              key={nanoid()}
            />
            <Route
              path="portfolio"
              element={
                <ProtectedRoute user={user}>
                  <Portfolio />
                </ProtectedRoute>
              }
            />
            <Route
              path="account"
              element={
                <ProtectedRoute user={user}>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route
              path="buy"
              element={
                <ProtectedRoute user={user}>
                  <Buy />
                </ProtectedRoute>
              }
            />
            <Route
              path="sell"
              element={
                <ProtectedRoute user={user}>
                  <Sell />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="intro" element={<Intro />} />
          <Route path="assets" element={<Assets />} />
          <Route path="news" element={<News />} />
          <Route path="features" element={<Features />} />
          <Route path="demo" element={<Demo />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route path="signup" element={<Signup setUser={setUser} />} />
        </Routes>
      </MainPageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
