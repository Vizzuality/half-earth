import React from 'react'
import { ResponsiveORFrame } from 'semiotic'

import styles from './barchart-styles.scss'

const axis = {
  orient: 'left',
  className: styles.tickLabel
}

const Barchart = ({ data, dimension }) => (
  <div className={styles.barchart}>
    <ResponsiveORFrame
      responsiveWidth
      responsiveHeight
      data={data.map(d => ({ ...d, domain: 70 }))}
      type="bar"
      axis={axis}
      oPadding={5}
      oAccessor={d => d.subject}
      oLabel={d => (
        <text
          className={styles.tickLabel}
          fontSize="10"
          transform="translate(-20, 15)"
        >
          {d}
        </text>
      )}
      rAccessor={dimension.key}
      pieceClass={d => console.log(d) || styles.mark}
    />
  </div>
)

export default Barchart
