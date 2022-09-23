import React, { useState, useEffect } from "react";
import { Data } from "./Data1";
import LineChart from "./components/LineChart";

// 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
// 492508981332-js4l4e26nhbkkhic3iv1injpjos9ttvt.apps.googleusercontent.com

function App() {
  const [data, setData] = useState({
    datasets: [],
  });
  const [options, setOption] = useState();

  function handleCallBackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential)
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "492508981332-js4l4e26nhbkkhic3iv1injpjos9ttvt.apps.googleusercontent.com",
      callback: handleCallBackResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    )
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

  return (
    <div className="App">
      <div id="signInDiv"></div>
      {/* <LineChart options={options} data={data} /> */}
    </div>
  );
}

export default App;
