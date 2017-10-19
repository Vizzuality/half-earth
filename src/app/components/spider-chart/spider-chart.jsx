import React from 'react'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts'

import uiStyles from 'app/styles/ui'

const SpiderChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <RadarChart data={data} className={uiStyles.radarChart}>
      <Radar
        name="Total Percentages"
        dataKey="Total"
        stroke="#0664f6"
        fill="#0664f6"
        fillOpacity={0.2}
      />
      <PolarGrid gridType="circle" stroke="#2b4d68" stroke-dasharray="15" />
      <PolarRadiusAxis
        angle={0}
        domain={['auto', 'auto']}
        tick={false}
        tickCount={5}
        stroke="#2b4d68"
        strokeDasharray="15"
      />
      <PolarAngleAxis dataKey="subject" fill="#fff" />
      <Tooltip
        wrapperStyle={{ backgroundColor: '#1b364c', border: 0 }}
        labelStyle={{ padding: '0', fontSize: 12 }}
        itemStyle={{ color: '#fff', padding: '0', fontSize: 12 }}
        formatter={val => `${val}%`}
        cursor={false}
        isAnimationActive={false}
      />
    </RadarChart>
  </ResponsiveContainer>
)

export default SpiderChart
