import React, { Component } from 'react';
import { connect } from 'react-redux';

import { mapStateToProps } from './group-card-list-selectors';
import GroupCardComponent from './group-card-list-component';

class GroupCardContainer extends Component {
  render() {
    return <GroupCardComponent {...this.props} />;
  }
}

export default connect(mapStateToProps)(GroupCardContainer);
