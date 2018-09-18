import React from 'react';
import { Provider } from 'react-redux';
import 'app/styles/global.scss';
import 'he-components/dist/main.css';

import 'wri-api-components/dist/map.css';
import 'wri-api-components/dist/legend.css';
import 'wri-api-components/dist/tooltip.css';

import store from 'app/store';
import Root from 'app/layout/root-layout';

export default () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};
