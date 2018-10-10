import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { ProgressBar } from 'he-components';
import DatasetCombo from 'components/v2/dataset-combo';

import styles from './progress-card-styles';
import disabledTheme from './progressbar-disabled-styles';

class ProgressBarComponent extends Component {
  render() {
    const { category } = this.props;
    const { multiSelect } = category;
    const layers = category &&
      category.datasets.reduce((acc, dataset) => [ ...acc, ...dataset.layers ], []);
    const layerActive = layers && layers.find(l => l.active) || {};
    const disableProgressBar = multiSelect && layers.filter(l => l.active).length > 1;
    const theme = disableProgressBar ? disabledTheme : {};
    return (
      <div className={cx({ [styles.containerSpaced]: !category.hideProgress })}>
        {
          !category.hideProgress &&
            (
              <ProgressBar
                percentage={layerActive.percentage || 0}
                label={layerActive.name || ''}
                theme={theme}
              />
            )
        }
        {category.description && <p className={styles.subtitle}>{category.description}</p>}
        {
          category &&
            category.datasets.map(dataset => (
              <DatasetCombo
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
