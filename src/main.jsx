import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app';
import { AppContainer } from 'react-hot-loader';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('boot')
  );
};

document.addEventListener('DOMContentLoaded', () => render(App));

if (module.hot) {
  /* eslint-disable global-require */
  module.hot.accept('./app', () => {
    render(require('./app').default);
  });
}
