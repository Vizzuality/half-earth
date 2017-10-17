import React from 'react'
import cx from 'classnames'

import styles from './legend-layers-styles.scss'

const LegendLayers = ({ layers }) => {
  return (
    <div className={styles.legendLayers}>
      {layers.map(
        layer =>
          layer.type === 'simple' ? (
            <span
              className={cx([styles.simpleLegend, styles.simpleLegendYellow])}
            >
              {layer.label}
            </span>
          ) : layer.type === 'gradient' ? (
            <div className={styles.gradientLegend}>
              Biodiversity
              <div className={styles.gradient}>
                {layer.label}
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
          ) : null
      )}
    </div>
  )
}

export default LegendLayers
