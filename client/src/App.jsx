import { useState, useEffect } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";
import { Data } from "./Data1";

function App() {
  const [newData, setNewData] = useState();
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    let labels = [];
    let data = [];
    let dataYear = Data["Time Series (Daily)"];
    for (const [key, val] of Object.entries(dataYear)) {
      labels.push(key);
      data.push((val["1. open"] + val["3. low"]) / 2);
    }
    let datasets = [
      {
        labels: "Price",
        data: data,
        backgroundColor: ["black"],
        borderColor: "black",
        borderWidth: 2,
      },
    ];
    setNewData({
      labels,
      datasets
    });
  }, []);

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={newData} />
      </div>
    </div>
  );
}

export default App;
