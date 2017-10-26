import React from 'react'
import {
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar
} from 'recharts'

import styles from './barchart-styles.scss'

const leftPad = 80
const rightPad = 20
const bottomPad = 30
const positionX = props => props.width + (leftPad - 15)

const CustomTick = ({ data, dimension, ...props }) => (
  <text y={props.y - 10} className={styles.tickLabel}>
    <tspan className={styles.tickPercent} x={positionX(props)} textAnchor="end">
      {data[props.index][dimension.key]}%
    </tspan>
    <tspan
      className={styles.tickTitle}
      textAnchor="end"
      x={positionX(props)}
      y={props.y + 16}
    >
      {props.payload.value}
    </tspan>
  </text>
)

const CustomBarchart = ({ data, dimension }) => (
  <ResponsiveContainer className={styles.container} width="100%" height={400}>
    <BarChart layout="vertical" data={data}>
      <CartesianGrid />
      <XAxis
        padding={{ left: leftPad, right: rightPad }}
        tickLine={false}
        axisLine={false}
        domain={[0, 100]}
        type="number"
      />
      <YAxis
        padding={{ bottom: bottomPad }}
        tickLine={false}
        tick={<CustomTick data={data} dimension={dimension} />}
        axisLine={false}
        type="category"
        dataKey="subject"
      />
      <Bar className={styles.bar} dataKey={dimension.key} />
    </BarChart>
  </ResponsiveContainer>
)

export default CustomBarchart
