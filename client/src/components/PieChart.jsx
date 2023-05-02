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
      tooltip={(e) => {
        let { datum: t } = e;
        console.log(t);
        return (
          <div style={{background: '#ffffff', color: '#000000' }}>
            {t.id}
            {t.value}
          </div>
        );
      }}
      // tooltip={(e) => {
      //   let { datum: t } = e;
      //   return n.createElement(
      //     l,
      //     { style: { color: t.color } },
      //     n.createElement(s, null, 'id'),
      //     n.createElement(d, null, t.id),
      //     n.createElement(s, null, 'value'),
      //     n.createElement(d, null, t.value),
      //     n.createElement(s, null, 'formattedValue'),
      //     n.createElement(d, null, t.formattedValue),
      //     n.createElement(s, null, 'color'),
      //     n.createElement(d, null, t.color)
      //   );
      // }}
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
