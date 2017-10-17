import React from 'react'
import cx from 'classnames'

import styles from './legend-layers-styles.scss'

const LegendLayers = ({ layers }) => (
  <div className={styles.legendLayers}>
    <span className={cx([styles.simpleLegend, styles.simpleLegendRed])}>
      Roads
    </span>
    <span className={cx([styles.simpleLegend, styles.simpleLegendBrown])}>
      Urban Development
    </span>
    <span className={cx([styles.simpleLegend, styles.simpleLegendPink])}>
      Protected Areas
    </span>
    <span className={cx([styles.simpleLegend, styles.simpleLegendOrange])}>
      Private Reserves
    </span>
    <span className={cx([styles.simpleLegend, styles.simpleLegendGreen])}>
      Key Biodiversity Areas
    </span>
    <span className={cx([styles.simpleLegend, styles.simpleLegendYellow])}>
      Where to Protect
    </span>
    <div className={styles.gradientLegend}>
      Biodiversity
      <div className={styles.gradient}>
        All Taxa
        <div className={styles.gradientBoxes}>
          <span>-</span>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span>+</span>
        </div>
      </div>
    </div>
  </div>
)

export default LegendLayers
