import React from 'react';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

import uiStyles from 'app/styles/ui';

const SpiderChart = ({ data, dimensions }) => {
  const defaultStyle = { stroke: '#0664f6', fill: '#0664f6', fillOpacity: 0.18 };
  const styles = d => ({ ...defaultStyle, ...d.style });
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart data={data} className={uiStyles.radarChart} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Radar name={dimensions[0].name} dataKey={dimensions[0].key} {...styles(dimensions[0])} />
        {dimensions[1] && <Radar name={dimensions[0].name} dataKey={dimensions[1].key} {...styles(dimensions[1])} />}
        <PolarGrid gridType="circle" stroke="#2b4d68" stroke-dasharray="15" />
        <PolarRadiusAxis
          angle={0}
          domain={[ 'auto', 'auto' ]}
          tick={false}
          tickCount={5}
          stroke="#2b4d68"
          strokeDasharray="15"
        />
        <PolarAngleAxis dataKey="subject" fill="#fff" />
        <Tooltip
          content={({ payload }) => <SpiderTooltip payload={payload} />}
          cursor={false}
          isAnimationActive={false}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

const SpiderTooltip = ({ payload }) => {
  const formatter = n => n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return payload.length > 0 ? <div className={uiStyles.radarChartTooltip}>
      {payload.map(({ payload }, k) => (
        <div key={`tooltip-value-${k}`} className={uiStyles.radarChartTooltipContainer}>
          <div className={uiStyles.radarChartTooltipLabel}>
            {payload.tooltip[k].label}
          </div>
          <div style={{ backgroundColor: payload.tooltip[k].color }} className={uiStyles.radarChartTooltipValue}>
            {formatter(payload.tooltip[k].value)}
          </div>
        </div>
      ))}
    </div> : null;
};

export default SpiderChart;
