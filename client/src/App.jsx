import React, { useState, useEffect } from "react";
import { Data } from "./Data1";
import LineChart from "./components/LineChart";

function App() {
  const [data, setData] = useState({
    datasets: []
  });
  const [option, setOption] = useState();

  useEffect(() => {
    function fetchData() {
      let labels = [];
      let data = [];
      let dataYear = Data["Time Series (Daily)"];
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
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "test1",
        },
      },
    });
  }, []);

  return (
    <div className="App">
      <LineChart options={option} data={data} />
    </div>
  );
}

export default App;
