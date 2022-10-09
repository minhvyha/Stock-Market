import React, { useState, useEffect } from 'react';
import { Symbol } from './SP500';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import ProtectedRoute from './pages/ProtectedRoute';
import ShareLayout from './pages/ShareLayout';

var dataOption = Symbol.map((company) => {
  return <option value={company.Symbol}>{company.Name}</option>;
});
// https://cloud.iexapis.com/stable/stock/AAPL/quote?token=

export const MainPageContext = React.createContext();

function App() {
  const [user, setUser] = useState({});
  const [data, setData] = useState({
    datasets: [],
  });
  const [options, setOption] = useState();
  const [stock, setStock] = useState('AAPL');

  function handleCallBackResponse(response) {
    console.log('Encoded JWT ID token: ' + response.credential);
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    fetchData();
  }
  function handleSignOut(event) {
    setUser({});
  }

  async function fetchData() {
    const apiData = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    const convertData = await apiData.json();
    let labels = [];
    let data = [];
    let dataYear = await convertData['Time Series (Daily)'];
    for (const [key, val] of Object.entries(dataYear)) {
      labels.unshift(key);
      data.unshift(
        (parseFloat(val['1. open']) + parseFloat(val['3. low'])) / 2
      );
    }
    let datasets = [
      {
        label: 'Price',
        data: data,
        backgroundColor: ['#ef8e19'],
        borderColor: '#006989',
        borderWidth: 2,
      },
    ];
    setData({ labels, datasets });
    setOption({
      elements: {},
      maintainAspectRatio: false,
      tension: 0.2,
      // responsive: true,
      plugins: {
        tooltip: {
          interaction: {
            mode: 'index',
            axis: 'x',
          },
          intersect: false,
        },
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: stock,
        },
      },
    });
    setStock('');
  }

  function handleChoose() {
    fetchData();
  }

  return (
    <BrowserRouter>
      <MainPageContext.Provider
        value={{
          options,
          data,
          stock,
          setStock,
          dataOption,
          handleChoose,
          handleSignOut,
        }}
      >
        <Routes>
          <Route path="/" element={<ShareLayout />}>
            <Route
              index
              element={
                <ProtectedRoute user={user}>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="login"
              element={
                <Login
                  setUser={setUser}
                  handleCallBackResponse={handleCallBackResponse}
                />
              }
            />
            <Route
              path="signup"
              element={
                <Signup
                  setUser={setUser}
                  handleCallBackResponse={handleCallBackResponse}
                />
              }
            />
          </Route>
        </Routes>
      </MainPageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
