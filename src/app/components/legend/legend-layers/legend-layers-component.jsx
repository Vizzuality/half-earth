import React from 'react';
import cx from 'classnames';
import PopUp from 'components/pop-up';
import capitalize from 'lodash/capitalize';
import isFunction from 'lodash/isFunction';
import ModalContent from './legend-layers-modal-component';

import styles from './legend-layers-styles.scss';

const LegendLayers = ({
  layers,
  openPopUpLegend,
  popUp,
  closePopUp,
  section
}) => {
  const sortLayers = (a, b) => {
    if (a.type === 'gradient' && b.type !== 'gradient') return 1;
    if (a.type !== 'gradient' && b.type === 'gradient') return -1;
    if (a.type === 'gradient' && b.type === 'gradient') return 0;
  };
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
  );

  const gradientLegend = (layer, i) => (
    <div
      key={`legend-item-${layer.label}-${layer.group}`}
      className={cx(
        { [styles.gradientLegendSmall]: layer.size === 'small' },
        styles.gradientLegend
      )}
    >
      <div className={styles.gradient}>
        <div className={styles.labelContain}>
          {layer.label}
          {layer.showGroup && (
            <span className={styles.bioText}>
              {layer.group &&
                `Species ${capitalize(layer.group) || 'Richness'}`}
            </span>
          )}
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
            <span>{isFunction(layer.min) ? layer.min() : layer.min}</span>
            <span>{isFunction(layer.max) ? layer.max() : layer.max}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const multipleLegend = (layer, i) => {
    if (!layer.type) throw new Error('Layer type is required');
    const renderer = {
      simple: simpleLegend,
      gradient: gradientLegend
    };

    return layer.elements.map(element => renderer[element.type](element, i));
  };

  const renderLegend = (layer, i) => {
    const renderer = {
      simple: simpleLegend,
      gradient: gradientLegend,
      multiple: multipleLegend
    }[layer.type];

    if (renderer) return renderer(layer, i);
    return null;
  };

  return (
    <div>
      <div className={styles.legendLayers}>
        <button
          className={styles.legendModal}
          onClick={() => openPopUpLegend()}
        >
          <span>?</span>
        </button>
        {layers.sort(sortLayers).map((layer, i) => renderLegend(layer, i))}
      </div>
      <PopUp open={popUp} close={closePopUp}>
        <ModalContent section={section} />
      </PopUp>
    </div>
  );
};

export default LegendLayers;
