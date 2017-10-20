import React from 'react'
import cx from 'classnames'
import capitalize from 'lodash/capitalize'

import styles from './legend-layers-styles.scss'

const LegendLayers = ({ layers }) => {
  const sortLayers = (a, b) => {
    if (a.type === 'gradient' && b.type !== 'gradient') return 1
    if (a.type !== 'gradient' && b.type === 'gradient') return -1
    if (a.type === 'gradient' && b.type === 'gradient') return 0
  }
  return (
    <div className={styles.legendLayers}>
      {layers.sort(sortLayers).map(
        layer =>
          layer.type === 'simple' ? (
            <span
              key={`legend-item-${layer.label}`}
              className={cx([
                styles.simpleLegend,
                styles['simpleLegend' + capitalize(layer.color)]
              ])}
            >
              {layer.label}
            </span>
          ) : layer.type === 'gradient' ? (
            <div
              key={`legend-item-${layer.name}`}
              className={styles.gradientLegend}
            >
              Biodiversity
              <div className={styles.gradient}>
                {layer.label}
                <div
                  className={cx([
                    styles.gradientBoxes,
                    styles['gradientBoxes' + capitalize(layer.color)]
                  ])}
                >
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
