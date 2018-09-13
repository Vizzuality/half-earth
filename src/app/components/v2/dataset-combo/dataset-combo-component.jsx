import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { SwitchInput, Button } from 'he-components';
import Checkbox from 'components/v2/checkbox';
import checkboxTheme from 'styles/themes/checkbox-theme.scss';
import halfEarthSwitchTheme from 'styles/themes/half-earth-switch-theme.scss';

import styles from './dataset-combo-styles.scss';

const DatasetComboComponent = props => {
  const {
    className,
    category,
    layers,
    active,
    slug,
    name,
    multilayer,
    handleSwitchChange,
    handleMultiLayerClick,
    handleLayerClick
  } = props;

  const layersLength = layers && layers.length;
  if (!layersLength) return null;
  const hasMultipleOptions = layersLength > 2;
  return (
    <div key={slug} className={cx(className, { [styles.datasetMultiLayer]: hasMultipleOptions })}>
      <SwitchInput
        key={slug}
        id={slug}
        checked={active}
        theme={category.slug === 'he-movement' ? halfEarthSwitchTheme : { label: styles.label }}
        onChange={() => handleSwitchChange(category, slug, active)}
        label={name}
      />
      {
        // if there's more than a layer nest the checkboxs or create a double button
        active && layersLength > 1 && (
        <div className={cx(styles.switchWrapper, { [styles.multiLayerWrapper]: hasMultipleOptions })}>
          {layers.map(
                layer =>
                  hasMultipleOptions
                    ? (
                      <Checkbox
                        key={layer.slug}
                        id={layer.slug}
                        theme={checkboxTheme}
                        label={layer.name}
                        checked={layer.active}
                        onChange={() => multilayer ? handleMultiLayerClick(layer) : handleLayerClick(layers, layer)}
                      />
)
                    : (
                      <Button
                        key={layer.slug}
                        theme={{ button: layer.active ? styles.buttonActive : styles.button }}
                        onClick={() => handleLayerClick(layers, layer)}
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
  layers: PropTypes.array,
  active: PropTypes.bool,
  slug: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  multilayer: PropTypes.bool,
  handleSwitchChange: PropTypes.func.isRequired,
  handleMultiLayerClick: PropTypes.func.isRequired,
  handleLayerClick: PropTypes.func.isRequired
};

DatasetComboComponent.defaultProps = { className: '', layers: [], active: false, multilayer: false };

export default DatasetComboComponent;
