import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "./MockData.js";

const LineChart = ({}) => {

  return (
   <ResponsiveLine
   data={data}
   margin={{ top: 0, right: 110, bottom: 70, left: 60 }}
   xScale={{
      type: 'time',
      format: '%Y-%m-%d',
      useUTC: false,
      precision: 'day',
  }}
   xFormat="time:%Y-%m-%d"
   yScale={{
     type: 'linear',
     min: 'auto',
     max: 'auto',
     stacked: false,
     reverse: false,
   }}
   curve="monotoneX"
   axisTop={null}
   axisRight={null}
   axisLeft={{
     orient: 'left',
     tickSize: 5,
     tickPadding: 5,
     tickRotation: 0,
     legend: 'Submission',
     legendOffset: -40,
     legendPosition: 'middle',
   }}
   axisBottom={{
     format: '%b %d',
     // tickRotation: -90,
     legend: 'Day',
     legendOffset: 40,
     legendPosition: 'middle',
   }}
   colors={{ scheme: 'spectral' }}
   pointSize={10}
   pointColor={{ theme: 'background' }}
   pointBorderWidth={2}
   pointBorderColor={{ from: 'serieColor' }}
   pointLabel="y"
   pointLabelYOffset={-12}
   useMesh={true}
   legends={[
     {
       anchor: 'bottom-right',
       direction: 'column',
       justify: false,
       translateX: 100,
       translateY: 0,
       itemsSpacing: 0,
       itemDirection: 'left-to-right',
       itemWidth: 80,
       itemHeight: 20,
       itemOpacity: 0.75,
       symbolSize: 12,
       symbolShape: 'circle',
       symbolBorderColor: 'rgba(0, 0, 0, .5)',
       effects: [
         {
           on: 'hover',
           style: {
             itemBackground: 'rgba(0, 0, 0, .03)',
             itemOpacity: 1,
           },
         },
       ],
     },
   ]}
 />
  );
};

export default LineChart;
