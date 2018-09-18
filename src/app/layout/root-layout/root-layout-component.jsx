import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';
import { Loading } from 'he-components';
import universal from 'react-universal-component';

const universalConfig = {
  loading: <Loading height="100vh" />
};

const PageComponent = universal(
  ({ page } /* webpackChunkName: "[request]" */) => import(`../../${page}`),
  universalConfig
);

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
