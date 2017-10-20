import React from 'react'
import cx from 'classnames'
import PopUp from 'components/pop-up'
import capitalize from 'lodash/capitalize'
import ModalContent from './legend-layers-modal-component'

import styles from './legend-layers-styles.scss'

const LegendLayers = ({ layers, openPopUpLegend, popUp, closePopUp }) => {
  const sortLayers = (a, b) => {
    if (a.type === 'gradient' && b.type !== 'gradient') return 1
    if (a.type !== 'gradient' && b.type === 'gradient') return -1
    if (a.type === 'gradient' && b.type === 'gradient') return 0
  }
  return (
    <div>
      <div className={styles.legendLayers}>
        <span className={styles.legendModal} onClick={() => openPopUpLegend()}>
          ?
        </span>
        {layers.sort(sortLayers).map(
          layer =>
            layer.type === 'simple' ? (
              <span
                key={`legend-item-${layer.name}`}
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
      <PopUp open={popUp} close={() => closePopUp()}>
        <ModalContent />
      </PopUp>
    </div>
  )
}

export default LegendLayers
