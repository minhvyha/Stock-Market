import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { data } from '../data'

function Main() {
  const [chartData, setChartData] = useState<{label: Array<any>, datasets: Array<any>}>();

  var API_KEY = 'UH9YQHN45N2JZGYW'
  var api = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${API_KEY}`

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(api)
      return response.json()
    }
    getData().then((result) =>{
      let label = []
      let data = []
      let price = result['Time Series (Daily)']
      for (const [key, value] of Object.entries(price)){
        try{

          label.push(key)

        }
        catch (err){

        }
      }
    })
  }, [])
  return (
    <div>
      {/* <Line data={} options={} /> */}
    </div>
  )
}

export default Main