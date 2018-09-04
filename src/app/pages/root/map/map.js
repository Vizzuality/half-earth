import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMapState } from './map-selectors';
import MapComponent from './map-component';

const mapStateToProps = getMapState;

class MapContainer extends Component {
  render() {
    return <MapComponent {...this.props} />;
  }
}

export default connect(mapStateToProps)(MapContainer);
