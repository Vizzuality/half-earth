import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';
import universal from 'react-universal-component';
import styles from './root-layout-styles.scss';

const PageComponent = universal(({ page }) =>
  import(/* webpackChunkName: "[request]" */
    `../${page}/${page}.js`)
);

class Root extends PureComponent {
  render () {
    const { route } = this.props;
    const { page } = route;
    return (
      <div className={styles.app}>
        <div className={styles.contentLayout}>
          {page && <PageComponent page={page} />}
        </div>
      </div>
    );
  }
}

Root.propTypes = {
  route: Proptypes.object.isRequired
};

export default Root;
