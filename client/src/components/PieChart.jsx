import { ResponsivePie } from '@nivo/pie';

const PieChart = ({ data }) => {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={2}
      cornerRadius={3}
      motionConfig={'stiff'}
      activeOuterRadiusOffset={12}
      colors={{ scheme: 'oranges' }}
      borderWidth={2}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.5]],
      }}
      enableArcLinkLabels={false}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLinkLabelsTextColor="#000000"
      arcLabel="id"
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 3]],
      }}
    />
  );
};

export default PieChart;
