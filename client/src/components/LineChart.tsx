import React, { FC } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

type Props = {
    chartData: {labels: Array<any>, datasets: Array<any>}
}

const LineChart: FC<Props> = ({ chartData }) =>{
    return(
        <Line data={chartData}/>
    )
}

export default LineChart;