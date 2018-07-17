import { createElement, Component } from 'react';
import { connect } from 'react-redux';

import LocatorComponent from './locator-component';
import * as actions from './locator-actions';

const options = new Map();

options.set('home', 'intro');
options.set('global', 'global');
options.set('regional', 'regional');

class LocatorContainer extends Component {
  static defaultProps = {
    options
  };

  onSelect = section => {
    this.props.navigateSection({ section });
  };

  render() {
    return createElement(LocatorComponent, {
      ...this.props,
      onSelect: this.onSelect
    });
  }
}

export { actions };
export default connect(
  null,
  actions
)(LocatorContainer);
