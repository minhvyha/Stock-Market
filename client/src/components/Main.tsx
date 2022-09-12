import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Main() {
  const [chartData, setChartData] = useState<{
    label: Array<any>;
    datasets: Array<any>;
  }>({label: [], datasets: []});

  var API_KEY = "UH9YQHN45N2JZGYW";
  var api = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${API_KEY}`;

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(api);
      return response.json();
    };
    getData().then((result) => {
      var label = [];
      var data = [];
      let price = result["Time Series (Daily)"];
      for (const [key] of Object.entries(price)) {
        label.push(key);
        data.push(parseFloat(price[key]["1. open"]));
      }
      setChartData({
        label: label,
        datasets: [
          {
            label: "Price Changes",
            data: data,
          },
        ],
      });
    });
  }, []);

  return(
    <>
    <Line 
      data={chartData}
    />
    </>
  );
}

export default Main;
