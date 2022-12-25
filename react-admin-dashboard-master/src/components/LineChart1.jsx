import { ResponsiveLine } from "@nivo/line"

function LineChart({data}) {
  return (
   <ResponsiveLine
   data={data}
   margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
   xScale={{ type: 'linear' }}
   yScale={{ type: 'linear', stacked: true, min: 0, max: 2500 }}
   yFormat=" >-.2f"
   curve="monotoneX"
   axisTop={null}
   axisRight={{
       tickValues: [
           0,
           500,
           1000,
           1500,
           2000,
           2500
       ],
       tickSize: 5,
       tickPadding: 5,
       tickRotation: 0,
       format: '.2s',
       legend: '',
       legendOffset: 0
   }}
   axisBottom={{
       tickValues: [
           0,
           20,
           40,
           60,
           80,
           100,
           120
       ],
       tickSize: 5,
       tickPadding: 5,
       tickRotation: 0,
       format: '.2f',
       legend: 'price',
       legendOffset: 37,
       legendPosition: 'middle'
   }}
   axisLeft={{
       tickValues: [
           0,
           500,
           1000,
           1500,
           2000,
           2500
       ],
       tickSize: 5,
       tickPadding: 5,
       tickRotation: 0,
       format: '.2s',
       legend: 'volume',
       legendOffset: -40,
       legendPosition: 'middle'
   }}
   colors={{ scheme: 'spectral' }}
   lineWidth={1}
   pointSize={4}
   pointColor={{ theme: 'background' }}
   pointBorderWidth={1}
   pointBorderColor={{ from: 'serieColor' }}
   pointLabelYOffset={-12}
   areaOpacity={0}
   useMesh={true}
   gridXValues={[ 0, 20, 40, 60, 80, 100, 120 ]}
   gridYValues={[ 0, 500, 1000, 1500, 2000, 2500 ]}
   legends={[
       {
           anchor: 'bottom-right',
           direction: 'column',
           justify: false,
           translateX: 140,
           translateY: 0,
           itemsSpacing: 2,
           itemDirection: 'left-to-right',
           itemWidth: 80,
           itemHeight: 12,
           itemOpacity: 0.75,
           symbolSize: 12,
           symbolShape: 'circle',
           symbolBorderColor: 'rgba(0, 0, 0, .5)',
           effects: [
               {
                   on: 'hover',
                   style: {
                       itemBackground: 'rgba(0, 0, 0, .03)',
                       itemOpacity: 1
                   }
               }
           ]
       }
   ]}
/>
  )
}

export default LineChart