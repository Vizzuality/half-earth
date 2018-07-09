import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';

import styles from './root-layout-styles.scss';

class Root extends PureComponent {
  render () {
    const { route } = this.props;
    const Component = route && route.component;
    return (
      <div className={styles.app}>
        <div className={styles.contentLayout}>{Component && <Component />}</div>
      </div>
    );
  }
}

Root.propTypes = {
  route: Proptypes.object.isRequired
};

export default Root;
