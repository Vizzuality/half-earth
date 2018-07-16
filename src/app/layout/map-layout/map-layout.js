import { createElement, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './map-layout-actions';
import MapLayout from './map-layout-component';
import postRobot from 'post-robot';

function mapDispatchToProps(state) {
  const { layers, location } = state;
  let coordinates, coordinatesOptions;
  const sanitizeVector = vector => vector.split(',').slice(0, 3);
  if (location.query) {
    coordinates =
      location.query.coordinates && sanitizeVector(location.query.coordinates);
    if (location.query.orientation) {
      const [heading, pitch, roll] = sanitizeVector(location.query.orientation);
      coordinatesOptions = {
        orientation: {
          roll,
          pitch,
          heading
        }
      };
    }
  }
  const activeLayers = Object.values(layers.byId).filter(
    layer => layer.config.visible
  );
  return {
    location,
    coordinates,
    layers: activeLayers,
    coordinatesOptions
  };
}

class MapLayoutContainer extends Component {
  componentDidMount() {
    const { location } = this.props;
    if (location.query && location.query.listeners === 'true') {
      this.attachPostRobotListeners();
    }
  }

  attachPostRobotListeners() {
    postRobot.on('mapFlyToCoordinates', event => {
      const { coordinates = [], orientation = [] } = event.data;
      if (coordinates.length || orientation.length) {
        const params = {
          coordinates: coordinates.join(','),
          orientation: orientation.join(',')
        };
        this.updateMapParams(params);
        return { done: true };
      }
      return { done: false };
    });
    postRobot.on('setMapLayers', event => {
      const { layers = [] } = event.data;
      const params = { layers: layers.join(',') };
      this.updateMapParams(params);
      return { done: true };
    });
  }

  updateMapParams = params => {
    const { location, updateMapParams } = this.props;
    updateMapParams({
      query: {
        ...location.query,
        ...params
      }
    });
  };

  render() {
    return createElement(MapLayout, {
      ...this.props,
      updateMapCoordinates: this.updateMapCoordinates
    });
  }
}

export default connect(
  mapDispatchToProps,
  actions
)(MapLayoutContainer);
