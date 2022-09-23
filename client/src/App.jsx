import React, { useState, useEffect } from "react";
import { Data } from "./Data1";
import {
  Chart,
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(
  LineElement,
  PointElement,
  LineController,
  CategoryScale,
  LinearScale,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

function App() {
  const [data, setData] = useState();
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
      return { labels, datasets };
    }
    setData(fetchData());
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
      <div style={{width: 700}}>
      <Line options={option} data={data} />
      </div>
    </div>
  );
}

export default App;
