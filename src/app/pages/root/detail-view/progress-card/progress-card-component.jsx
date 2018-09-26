import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProgressBar, SwitchInput } from 'he-components';

import styles from './progress-card-styles';

class ProgressBarComponent extends Component {
  render() {
    const { legend, subtitle, layers } = this.props;
    const percentage = layers && layers.reduce((acc, next) => acc + next.percentage, 0) || 0;
    return (
      <div className={styles.container}>
        <ProgressBar percentage={percentage} label={legend} />
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {
          layers && layers.map(layer => (
            <SwitchInput
              key={layer.slug}
              id={layer.slug}
              checked={layer.active}
              onChange={() => {
                  console.info('TODO');
                }}
              label={layer.name}
            />
            ))
        }
      </div>
    );
  }
}

// eslint-disable-next-line
ProgressBarComponent.propTypes = {
  layers: PropTypes.array,
  legend: PropTypes.string,
  subtitle: PropTypes.string
};

ProgressBarComponent.defaultProps = { layers: null, subtitle: '', legend: '' };

export default ProgressBarComponent;
