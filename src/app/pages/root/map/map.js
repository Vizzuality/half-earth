import React, { Component } from 'react';
import { connect } from 'react-redux';

import { mapStateToProps } from './map-selectors';
import MapComponent from './map-component';

class MapContainer extends Component {
  render() {
    return <MapComponent {...this.props} />;
  }
}

export default connect(mapStateToProps)(MapContainer);
