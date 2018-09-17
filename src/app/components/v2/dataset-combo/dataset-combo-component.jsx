import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { SwitchInput, Button } from 'he-components';
import Checkbox from 'components/v2/checkbox';
import checkboxTheme from 'styles/themes/checkbox-theme.scss';
import halfEarthSwitchTheme from 'styles/themes/half-earth-switch-theme.scss';

import styles from './dataset-combo-styles.scss';

const DatasetComboComponent = props => {
  const { className, category, dataset, handleSwitchChange, handleMultiLayerClick, handleLayerClick } = props;

  const layersLength = dataset && dataset.layers && dataset.layers.length;
  if (!layersLength) return null;
  const hasMultipleOptions = layersLength > 2;
  return (
    <div key={dataset.slug} className={cx(className, { [styles.datasetMultiLayer]: hasMultipleOptions })}>
      <SwitchInput
        key={dataset.slug}
        id={dataset.slug}
        checked={dataset.active}
        theme={category.slug === 'he-movement' ? halfEarthSwitchTheme : { label: styles.label }}
        onChange={() => handleSwitchChange(category, dataset.slug, dataset.active)}
        label={dataset.name}
      />
      {
        // if there's more than a layer nest the checkboxs or create a double button
        dataset && dataset.active && layersLength > 1 && (
        <div className={cx(styles.switchWrapper, { [styles.multiLayerWrapper]: hasMultipleOptions })}>
          {dataset.layers.map(
                layer =>
                  hasMultipleOptions
                    ? (
                      <Checkbox
                        key={layer.slug}
                        id={layer.slug}
                        theme={checkboxTheme}
                        label={layer.name}
                        checked={layer.active}
                        onChange={() =>
                        dataset.multilayer ? handleMultiLayerClick(layer) : handleLayerClick(dataset.layers, layer)}
                      />
)
                    : (
                      <Button
                        key={layer.slug}
                        theme={{ button: layer.active ? styles.buttonActive : styles.button }}
                        onClick={() => handleLayerClick(dataset.layers, layer)}
                      >
                        {layer.name}
                      </Button>
)
              )}
        </div>
          )
      }
    </div>
  );
};

DatasetComboComponent.propTypes = {
  className: PropTypes.string,
  category: PropTypes.object.isRequired,
  dataset: PropTypes.shape({
    layers: PropTypes.array,
    active: PropTypes.bool,
    slug: PropTypes.string,
    name: PropTypes.string,
    multilayer: PropTypes.bool
  }).isRequired,
  handleSwitchChange: PropTypes.func.isRequired,
  handleMultiLayerClick: PropTypes.func.isRequired,
  handleLayerClick: PropTypes.func.isRequired
};

DatasetComboComponent.defaultProps = { className: '' };

export default DatasetComboComponent;
