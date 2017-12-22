import React from 'react'
import { BarChart, ResponsiveContainer, XAxis, YAxis, Bar } from 'recharts'

import styles from './barchart-styles.scss'

const leftPad = 80
const rightPad = 20
const bottomPad = 30
// const positionX = props => props.width + (leftPad - 15)

// const CustomTick = ({ data, dimension, ...props }) => (
//   <text y={props.y - 10} className={styles.tickLabel}>
//     <tspan className={styles.tickPercent} x={positionX(props)} textAnchor="end">
//       {data[props.index][dimension.key]}%
//     </tspan>
//     <tspan
//       className={styles.tickTitle}
//       textAnchor="end"
//       x={positionX(props)}
//       y={props.y + 16}
//     >
//       {props.payload.value}
//     </tspan>
//   </text>
// )

const CustomBarchart = ({ data, dataKey, labelKey }) => (
  <ResponsiveContainer className={styles.container} width="100%" height={400}>
    <BarChart layout="vertical" data={data}>
      <YAxis
        padding={{ bottom: bottomPad }}
        tickLine={false}
        axisLine={false}
        type="number"
      />
      <XAxis
        padding={{ left: leftPad, right: rightPad }}
        tickLine={false}
        axisLine={false}
        type="category"
        dataKey={labelKey}
        interval={0}
      />
      <Bar
        className={styles.bar}
        dataKey={dataKey}
        background={{ fill: 'rgba(43, 77, 104, 0.3)' }}
      />
    </BarChart>
  </ResponsiveContainer>
)

export default CustomBarchart
