import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'he-components';
import DatasetCombo from 'components/v2/dataset-combo';

import styles from './progress-card-styles';

class ProgressBarComponent extends Component {
  render() {
    const { legend, subtitle, category } = this.props;
    const percentage = category ? category.datasets
        .filter(d => d.active)
        .reduce((acc, dataset) => acc + dataset.percentage || 0, 0) : 0;
    return (
      <div className={styles.container}>
        <ProgressBar percentage={percentage} label={legend} />
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
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
ProgressBarComponent.propTypes = {
  category: PropTypes.object,
  legend: PropTypes.string,
  subtitle: PropTypes.string
};

ProgressBarComponent.defaultProps = { category: null, subtitle: '', legend: '' };

export default ProgressBarComponent;
