import Chart from "chart.js";
import { useRef, useEffect, useState } from "react";

interface Props {
  chartData: number[];
}

const MyChart = ({ chartData }: Props) => {
  // helper function to format chart data since you do this twice
  const formatData = (data: number[]): Chart.ChartData => ({
    labels: ["a", "b", "c", "d", "e", "f", "g", "h"],
    datasets: [{ data }]
  });

  // use a ref to store the chart instance since it it mutable
  const chartRef = useRef<Chart | null>(null);

  // callback creates the chart on the canvas element
  const canvasCallback = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: "radar",
        data: formatData(chartData),
        options: { responsive: true }
      });
    }
  };

  // effect to update the chart when props are updated
  useEffect(() => {
    // must verify that the chart exists
    if (chartRef.current) {
      chartRef.current.data = formatData(chartData);
      chartRef.current.update();
    }

    // cleanup function - I had to remove this as it was causing errors
    /*return () => {
      chartRef.current?.destroy();
    };*/
  }, [chartData]);

  return (
    <div className="self-center w-1/2">
      <div className="overflow-hidden">
        <canvas ref={canvasCallback}></canvas>
      </div>
    </div>
  );
};

// want to see some changes in the props on order to test MyChart
export default () => {
  const [data, setData] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

  const onClick = () => {
    setData((prevData) => prevData.slice(1).concat(10 * Math.random()));
  };

  return (
    <div>
      <button onClick={onClick}>Change</button>
      <MyChart chartData={data} />
    </div>
  );
};
