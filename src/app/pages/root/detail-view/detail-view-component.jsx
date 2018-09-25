import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'he-components';

import styles from './detail-view-styles';

class GroupCardListComponent extends Component {
  render() {
    const { loading } = this.props;
    if (loading) return <Loading height="100%" />;
    return (
      <div className={styles.groupCardListContainer}>
        <h2>the sidebar</h2>
      </div>
    );
  }
}

GroupCardListComponent.propTypes = { loading: PropTypes.bool };

GroupCardListComponent.defaultProps = { loading: false };

export default GroupCardListComponent;
