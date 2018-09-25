import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'he-components';

import styles from './detail-view-styles';

class DetailViewComponent extends Component {
  render() {
    const { loading, data } = this.props;
    if (loading) return <Loading height="100%" />;
    return (
      <div className={styles.groupCardListContainer}>
        <h2>All richness: {data && data.all.richness}</h2>
      </div>
    );
  }
}

DetailViewComponent.propTypes = { loading: PropTypes.bool, data: PropTypes.object };

DetailViewComponent.defaultProps = { loading: false, data: {} };

export default DetailViewComponent;
