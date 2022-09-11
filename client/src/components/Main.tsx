import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { data } from '../data'

function Main() {
  const [chartData, setChartData] = useState();

  var API_KEY = 'UH9YQHN45N2JZGYW'
  var api = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${API_KEY}`

  useEffect(() =>{
    setChartData({})
  }, [])
  return (
    <div>
      {/* <Line data={} options={} /> */}
    </div>
  )
}

export default Main