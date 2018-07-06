import { Component, createElement } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from './home-actions';
import { actions as mapActions } from 'pages/map';
import { actions as sectionActions } from 'providers/section';
import { actions as analyticsActions } from 'providers/analytics';
import HomeComponent from './home-component';

const analytics = {
  onClick: ['Landing', 'Click Play', 'Click Play']
};

class HomeContainer extends Component {
  constructor (props) {
    super(props);
    props.setHomeSection('regional:1');
    props.setSection('home');
    props.resetLayers();
  }
  onClick = () => {
    const { history, trackEvent } = this.props;
    trackEvent(analytics.onClick);

    history.push('/local');
  };

  render () {
    return createElement(HomeComponent, {
      ...this.props,
      onClick: this.onClick
    });
  }
}

export default withRouter(
  connect(
    null,
    {
      ...actions,
      ...mapActions,
      ...analyticsActions,
      ...sectionActions
    }
  )(HomeContainer)
);
