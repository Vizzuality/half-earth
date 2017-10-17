import React from 'react'

import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts'

import uiStyles from 'app/styles/ui'

const SpiderChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={400}>
    <RadarChart data={data} className={uiStyles.radarChart}>
      <Radar
        name="Total Species in the Region"
        dataKey="Regional"
        stroke="#0664f6"
        fill="#0664f6"
        fillOpacity={0.2}
      />
      <Radar
        name="Total Species Globally"
        dataKey="Global"
        stroke="#8366e4"
        fill="#8366e4"
        fillOpacity={0.2}
      />
      <PolarGrid gridType="circle" stroke="#2b4d68" stroke-dasharray="15" />
      <Legend />
      <PolarRadiusAxis
        angle={0}
        domain={['auto', 'auto']}
        tick={false}
        tickCount={5}
        stroke="#2b4d68"
        strokeDasharray="15"
      />
      <PolarAngleAxis dataKey="subject" fill="#fff" />
    </RadarChart>
  </ResponsiveContainer>
)

export default SpiderChart
