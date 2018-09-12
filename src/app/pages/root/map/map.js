import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './map-actions';

import { mapStateToProps } from './map-selectors';
import MapComponent from './map-component';

class MapContainer extends Component {
  updateMapParams = params => {
    const { query, updateQueryParam } = this.props;
    updateQueryParam({ query: { ...query, ...params } });
  };

  render() {
    return <MapComponent {...this.props} updateMapParams={this.updateMapParams} />;
  }
}

export default connect(mapStateToProps, actions)(MapContainer);
