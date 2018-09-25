
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'he-components';

import styles from './progress-card-styles';

class DetailViewComponent extends Component {
  render() {
    return (
      <div className={styles.container}>
        <ProgressBar percentage={57} label="Area total encroachment" />
      </div>
    );
  }
}

DetailViewComponent.propTypes = {
  data: PropTypes.object,
};

DetailViewComponent.defaultProps = { data: {} };

export default DetailViewComponent;
