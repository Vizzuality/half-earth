import React from 'react'
import cx from 'classnames'
import {
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
  Tooltip
} from 'recharts'

import styles from './barchart-styles.scss'
import { colorMap } from 'utils/utils'
import capitalize from 'lodash/capitalize'

const CustomBarchart = ({ data, dataKey, labelKey, color, domain, legend }) => (
  <div className={styles.outerContainer}>
    <ResponsiveContainer className={styles.container} width="100%" height={300}>
      <BarChart data={data}>
        <YAxis tickLine={false} axisLine={false} domain={domain} />
        <XAxis
          tickLine={false}
          axisLine={false}
          dataKey={labelKey}
          interval={0}
          angle={window.innerWidth < 1210 ? -35 : null}
        />
        <Bar
          background={{ fill: 'rgba(43, 77, 104, 0.3)' }}
          className={styles.bar}
          dataKey={dataKey}
          maxBarSize={11}
          fill={colorMap[color]}
        />
        <Tooltip
          offset={0}
          content={({ payload }) => <CustomTooltip content={payload} />}
          cursor={false}
          isAnimationActive={false}
        />
      </BarChart>
    </ResponsiveContainer>
    <div className={styles.legendContainer}>
      <span className={cx(styles.legend, styles[`legend${capitalize(color)}`])}>
        {legend}
      </span>
    </div>
  </div>
)

const CustomTooltip = ({ content }) => {
  const [bar] = content
  const formatter = n =>
    n.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
  return bar ? (
    <div
      className={cx(styles.customTooltip, {
        [styles.customTooltipLastBar]: bar.payload.isLast
      })}
    >
      <div className={styles.customTooltipContainer}>
        <div className={styles.customTooltipValue}>
          {formatter(bar.value || '')}
        </div>
      </div>
    </div>
  ) : null
}

export default CustomBarchart
