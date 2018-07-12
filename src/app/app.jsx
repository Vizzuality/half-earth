import React from 'react';
import { Provider } from 'react-redux';
import 'app/styles/global.scss';

import store from 'app/store';
import Root from 'app/layout/root-layout';

export default () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};
