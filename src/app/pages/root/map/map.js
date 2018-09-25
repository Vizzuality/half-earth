import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import postRobot from 'post-robot';
import * as actions from './map-actions';

import { mapStateToProps } from './map-selectors';
import MapComponent from './map-component';

class MapContainer extends Component {
  componentDidMount() {
    const { query } = this.props;
    // eslint-disable-next-line eqeqeq
    if (query && query.listeners == 'true') {
      this.attachPostRobotListeners();
    }
  }

  updateMapParams = params => {
    const { query, updateQueryParam } = this.props;
    updateQueryParam({ query: { ...query, ...params } });
  };

  attachPostRobotListeners() {
    postRobot.on('mapFlyToCoordinates', event => {
      const { coordinates = [], orientation = [] } = event.data;
      if (coordinates.length || orientation.length) {
        this.updateMapParams({ coordinates, orientation });
        return { done: true };
      }
      return { done: false };
    });
    postRobot.on('setMapLayers', event => {
      const { layers = [] } = event.data;
      this.updateMapParams({ activeLayers: layers });
      return { done: true };
    });
  }

  render() {
    return <MapComponent {...this.props} updateMapParams={this.updateMapParams} />;
  }
}

MapContainer.propTypes = { query: PropTypes.object.isRequired, updateQueryParam: PropTypes.func.isRequired };

export default connect(mapStateToProps, actions)(MapContainer);
