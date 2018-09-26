import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProgressBar, SwitchInput } from 'he-components';

import styles from './progress-card-styles';

class DetailViewComponent extends Component {
  render() {
    const { legend, subtitle, layers } = this.props;
    const percentage = layers && layers.reduce((acc, next) => acc + next.value, 0);
    return (
      <div className={styles.container}>
        <ProgressBar percentage={percentage} label={legend} />
        {subtitle && <p>{subtitle}</p>}
        {
          layers && layers.map(layer => (
            <SwitchInput
              key={layer.slug}
              id={layer.slug}
              checked={layer.active}
              onChange={() => {
                  console.info('TODO');
                }}
              label={layer.label}
            />
            ))
        }
      </div>
    );
  }
}

// eslint-disable-next-line
DetailViewComponent.propTypes = {
  layers: PropTypes.array,
  legend: PropTypes.string,
  subtitle: PropTypes.string
};

DetailViewComponent.defaultProps = { layers: null, subtitle: '', legend: '' };

export default DetailViewComponent;
