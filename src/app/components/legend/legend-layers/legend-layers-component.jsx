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
  const simpleLegend = layer => (
    <span
      key={`legend-item-${layer.label}`}
      className={cx(
        styles.simpleLegend,
        styles['simpleLegend' + capitalize(layer.color)]
      )}
    >
      {layer.label}
    </span>
  )

  const gradientLegend = (layer, i) => (
    <div
      key={`legend-item-${layer.label}`}
      className={cx(
        { [styles.gradientLegendSmall]: layer.size === 'small' },
        styles.gradientLegend
      )}
    >
      <div className={styles.gradient}>
        <div className={styles.labelContain}>
          {layer.label}
          {i === 0 && <span className={styles.bioText}>Biodiversity</span>}
        </div>
        <div className={styles.boxContainer}>
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
          <div className={styles.numbers}>
            <span>{layer.min}</span>
            <span>{layer.max}</span>
          </div>
        </div>
      </div>
    </div>
  )

  const multipleLegend = (layer, i) => {
    if (!layer.type) throw new Error('Layer type is required')
    const renderer = {
      simple: simpleLegend,
      gradient: gradientLegend
    }

    return layer.elements.map(element => renderer[element.type](element, i))
  }

  const renderLegend = (layer, i) => {
    const renderer = {
      simple: simpleLegend,
      gradient: gradientLegend,
      multiple: multipleLegend
    }[layer.type]

    if (renderer) return renderer(layer, i)
    return null
  }

  return (
    <div>
      <div className={styles.legendLayers}>
        <div className={styles.legendModal} onClick={() => openPopUpLegend()}>
          <span>?</span>
        </div>
        {layers.sort(sortLayers).map((layer, i) => renderLegend(layer, i))}
      </div>
      <PopUp open={popUp} close={() => closePopUp()}>
        <ModalContent />
      </PopUp>
    </div>
  )
}

export default LegendLayers
