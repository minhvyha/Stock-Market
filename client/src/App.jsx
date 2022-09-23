import { useState, useEffect } from "react";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";
import { Data } from "./Data1";

function App() {
  console.log('start')
  const [newData, setNewData] = useState(fetchData);

  function fetchData(){
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
    return {labels, datasets}
  }

  return (
    <div className="App">
      <div style={{ width: 700 }}>
        <LineChart chartData={newData} />
      </div>
    </div>
  );
}

export default App;
