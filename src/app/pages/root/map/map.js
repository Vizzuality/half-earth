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
        const coordinatesSplit = {
          x: coordinates[0] || 21070620.587769393,
          y: coordinates[1] || -12184436.566539336,
          z: coordinates[2] || 12238813.269256787
        };
        this.updateMapParams({ coordinates: coordinatesSplit, orientation });
        return { done: true };
      }
      return { done: false };
    });
    postRobot.on('setMapLayers', event => {
      const { layers = [] } = event.data;
      const activeLayers = layers.map(layer => ({
        slug: layer.slug,
        active: true,
        opacity: layer.opacity || 1,
        landscapeOpacity: null,
        layerCateogry: null
      }));
      this.updateMapParams({ activeLayers });
      return { done: true };
    });
  }

  render() {
    return <MapComponent {...this.props} updateMapParams={this.updateMapParams} />;
  }
}

MapContainer.propTypes = { query: PropTypes.object, updateQueryParam: PropTypes.func.isRequired };

MapContainer.defaultProps = { query: null };

export default connect(mapStateToProps, actions)(MapContainer);
