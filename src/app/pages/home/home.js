import { Component, createElement } from 'react';
import { connect } from 'react-redux';

import * as actions from './home-actions';
import * as mapActions from 'pages/map/map-actions';
import * as sectionActions from 'providers/section/section-actions';
import * as analyticsActions from 'providers/analytics/analytics-actions';
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
