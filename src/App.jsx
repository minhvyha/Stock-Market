import React, { useState, useEffect, useRef } from 'react';
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

// https://cloud.iexapis.com/stable/stock/AAPL/quote?token=

export const MainPageContext = React.createContext();

function App() {
  const [user, setUser] = useState(
    window.localStorage.getItem('FUTURIS_USER_OBJECT') !== null
      ? JSON.parse(window.localStorage.getItem('FUTURIS_USER_OBJECT')).expDate >
        new Date().getTime()
        ? JSON.parse(window.localStorage.getItem('FUTURIS_USER_OBJECT')).user
        : removeLocalStorage()
      : {}
  );
  const [fontSize, setFontSize] = useState('Medium');
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [assets, setAssets] = useState('AAPL');
  const [isDropDown, setIsDropDown] = useState(false);
  const [activeSetting, setActiveSetting] = useState('');

  const [title, setTitle] = useState('Apple Inc.');
  const [sector, setSector] = useState('NASDAQ');
  const [activePage, setActivePage] = useState('home');
  useEffect(() => {
    let url = window.location.pathname;
    setActivePage(url.slice(1));
  }, []);

  useEffect(() => {
    let expDate = new Date().setDate(new Date().getDate() + 1);
    console.log(expDate);
    window.localStorage.setItem(
      'FUTURIS_USER_OBJECT',
      JSON.stringify({ user: user, expDate: expDate })
    );
  }, [user]);

  function handleSignOut(event) {
    setUser({});
  }

  function removeLocalStorage(){
    window.localStorage.removeItem('FUTURIS_USER_OBJECT')
    return {}
  }

  useEffect(() => {
    if (isDarkMode) {
      document.getElementsByTagName('html')[0].classList.remove('light');
      document.getElementsByTagName('html')[0].classList.add('dark');
    } else {
      document.getElementsByTagName('html')[0].classList.add('light');
      document.getElementsByTagName('html')[0].classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <MainPageContext.Provider
        value={{
          fontSize,
          setFontSize,
          Symbol,
          user,
          setUser,
          assets,
          title,
          sector,
          windowSize,
          activePage,
          setAssets,
          setTitle,
          setSector,
          handleSignOut,
          isDarkMode,
          setIsDarkMode,
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
              path="/portfolio"
              element={
                <ProtectedRoute user={user}>
                  <Portfolio />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account"
              element={
                <ProtectedRoute user={user}>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route
              path="/buy"
              element={
                <ProtectedRoute user={user}>
                  <Buy />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sell"
              element={
                <ProtectedRoute user={user}>
                  <Sell />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/intro" element={<Intro />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/news" element={<News />} />
          <Route path="/features" element={<Features />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </MainPageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
