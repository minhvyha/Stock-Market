import React, { useState, useEffect } from "react";
import { Data } from "./TestData";
import axios from 'axios'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LineChart from "./components/LineChart";
import jwt_decode from "jwt-decode";

function App() {
  const [user, setUser] = useState({});
  const [data, setData] = useState({
    datasets: [],
  });
  const [options, setOption] = useState();

  function handleCallBackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "492508981332-js4l4e26nhbkkhic3iv1injpjos9ttvt.apps.googleusercontent.com",
      callback: handleCallBackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  useEffect(() => {
    async function fetchData() {
      const apiData = await fetch(
        "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo"
      );
      const convertData = await apiData.json();
      let labels = [];
      let data = [];
      let dataYear = await convertData["Time Series (Daily)"];
      for (const [key, val] of Object.entries(dataYear)) {
        labels.push(key);
        data.push((parseFloat(val["1. open"]) + parseFloat(val["3. low"])) / 2);
      }
      let datasets = [
        {
          label: "Price",
          data: data,
          backgroundColor: ["#ef8e19"],
          borderColor: "black",
          borderWidth: 2,
        },
      ];
      setData({ labels, datasets });
    }
    fetchData();
    setOption({
      tension: 0.2,
      responsive: true,
      plugins: {
        tooltip: {
          interaction: {
            mode: "index",
            axis: "x",
          },
          intersect: false,
        },
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Price of ...",
        },
      },
    });
  }, []);
  console.log(user);
  return (
    <div className="App">
      <div id="signInDiv"></div>
      {Object.keys(user).length !== 0 && (
        <div>
          <div style={{ width: 700 }}>
            <LineChart options={options} data={data} />
          </div>
          <label htmlFor="symbolList">Choose a symbol</label>
          <input
            type="text"
            name="symbolList"
            id="symbolList"
            list="symbolData"
          />
          <datalist id="symbolData">
            <option value="AAPL">Apple</option>
          </datalist>

          <button className="btn-sign-out" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
