import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';
import universal from 'react-universal-component';

const PageComponent = universal((
  { page } /* webpackChunkName: "[request]" */
) => import(`../../${page}`));

class Root extends PureComponent {
  render() {
    const { route } = this.props;
    const { page } = route;
    return page ? <PageComponent page={page} /> : null;
  }
}

Root.propTypes = {
  route: Proptypes.object.isRequired
};

export default Root;
