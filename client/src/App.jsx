import React, { useState, useEffect } from 'react';
import { Symbol } from './SP500';
import axios from 'axios';
import LineChart from './components/LineChart';
import jwt_decode from 'jwt-decode';
import SignInImage from './assets/images/SignIn.png';
import Login from './components/Login';

var dataOption = Symbol.map((company) => {
  return <option value={company.Symbol}>{company.Name}</option>;
});

var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;

function App() {
  const [user, setUser] = useState({});
  const [data, setData] = useState({
    datasets: [],
  });
  const [options, setOption] = useState();
  const [stock, setStock] = useState('AAPL');
  const [login, setLogin] = useState(true);
  const [errorLogin, setErrorLogin] = useState();

  function handleCallBackResponse(response) {
    console.log('Encoded JWT ID token: ' + response.credential);
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById('signInDiv').hidden = true;
    document.getElementById('login-container').style.display = 'none';
    fetchData();
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById('signInDiv').hidden = false;
    document.getElementById('login-container').style.display = 'flex';
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENT_ID,
      callback: handleCallBackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });
    google.accounts.id.prompt();
  }, []);

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
      elements:{

      },
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

  function handleSignUp() {
    setLogin(false);
  }
  function handleSignIn() {
    setLogin(true);
  }

  function handleSubmitForm() {
    let email = document.getElementById('email-login').value;
    let password = document.getElementById('password-login').value;
    if (email === '') {
      setErrorLogin('Please enter username.');
      return;
    }
    if (password === '') {
      setErrorLogin('Please enter password.');
      return;
    }
    console.log(email.match(emailRegex));
    if (email.match(emailRegex) === null) {
      setErrorLogin('Invalid email.');
      return;
    }
    if (password.match(passwordRegex) === null) {
      setErrorLogin(
        'Password must have minimum length of 8 and contain at least one letter and one number.'
      );
      return;
    }
    if (!login) {
      let confirmation = document.getElementById('confirmation-login').value;
      if (confirmation === '') {
        setErrorLogin('Please confirm password.');
        return;
      }
      if (confirmation !== password) {
        setErrorLogin('Your passwords do not match.');
        return;
      }
    }
  }

  return (
    <div className="App">
      <Login
        login={login}
        handleSignUp={handleSignUp}
        handleSignIn={handleSignIn}
        error={errorLogin}
        handleSubmit={handleSubmitForm}
      />

      {Object.keys(user).length !== 0 && (
        <div>
          <div className="chart-container">
            <LineChart options={options} data={data} fontSize={9} />
          </div>
          <label htmlFor="symbolList">Choose a symbol</label>
          <input
            type="text"
            name="symbolList"
            id="symbolList"
            list="symbolData"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <datalist id="symbolData">{dataOption}</datalist>
          <button onClick={handleChoose}>See Price</button>

          <button className="btn-sign-out" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
