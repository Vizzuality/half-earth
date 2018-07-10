import { Component, createElement } from 'react';
import { connect } from 'react-redux';

import * as actions from './home-actions';
import { actions as mapActions } from 'pages/map';
import { actions as sectionActions } from 'providers/section';
import { actions as analyticsActions } from 'providers/analytics';
import HomeComponent from './home-component';

const mergedActions = {
  ...actions,
  ...mapActions,
  ...analyticsActions,
  ...sectionActions
};

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    props.setHomeSection('regional:1');
    props.setSection('home');
    props.resetLayers();
  }

  render() {
    return createElement(HomeComponent, {
      ...this.props,
      onClick: this.onClick
    });
  }
}

export default connect(
  null,
  mergedActions
)(HomeContainer);
