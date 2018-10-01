import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'he-components';
import DatasetCombo from 'components/v2/dataset-combo';

import styles from './progress-card-styles';

class ProgressBarComponent extends Component {
  render() {
    const { category } = this.props;
    const layers = category &&
      category.datasets.reduce((acc, dataset) => [ ...acc, ...dataset.layers ], []);
    const layerActive = layers && layers.find(l => l.active) || {};
    return (
      <div className={styles.container}>
        {
          !category.hideProgress &&
            <ProgressBar percentage={layerActive.percentage || 0} label={layerActive.name || ''} />
        }
        {category.description && <p className={styles.subtitle}>{category.description}</p>}
        {
          category &&
            category.datasets.map(dataset => (
              <DatasetCombo
                layerDefaultOpacity={0.5}
                dataset={dataset}
                category={category}
                key={dataset.slug}
                className={styles.datasetComboWrapper}
              />
            ))
        }
      </div>
    );
  }
}

// eslint-disable-next-line
ProgressBarComponent.propTypes = { category: PropTypes.object };

ProgressBarComponent.defaultProps = { category: null };

export default ProgressBarComponent;
