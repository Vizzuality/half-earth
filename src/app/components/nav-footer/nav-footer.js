import { Component, createElement } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actions as analyticsActions } from 'providers/analytics';
import reducers from './nav-footer-reducers';
import initialState from './initial-state';

import NavFooter from './nav-footer-component';

const analytics = {
  onClickTo: to => [forwards[to], 'Next Step', `Advance to ${to}`],
  onClickFrom: from => [backwards[from], 'Next Step', `Go back to ${from}`]
};

const backwards = {
  '/home': 'local',
  '/local': 'regional',
  '/regional': 'global'
};
const forwards = {
  '/home': 'start',
  '/regional': 'local',
  '/global': 'regional'
};

class NavFooterContainer extends Component {
  onClickTo = e => {
    e.preventDefault();
    const { history, trackEvent, to } = this.props;
    trackEvent([...analytics.onClickTo(to)]);

    history.push(to);
  };

  onClickFrom = e => {
    e.preventDefault();
    const { history, trackEvent, from } = this.props;
    trackEvent([...analytics.onClickFrom(from)]);

    history.push(from);
  };

  render () {
    const { onClickTo, onClickFrom } = this;
    return createElement(NavFooter, {
      ...this.props,
      onClickTo,
      onClickFrom
    });
  }
}

export { reducers, initialState };
export default withRouter(
  connect(
    null,
    analyticsActions
  )(NavFooterContainer)
);
