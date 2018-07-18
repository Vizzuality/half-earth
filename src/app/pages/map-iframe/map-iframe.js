import { createElement, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './map-iframe-actions';
import MapLayout from './map-iframe-component';
import postRobot from 'post-robot';

function mapDispatchToProps(state) {
  const { layers, location } = state;
  let coordinates, coordinatesOptions;

  const sanitizeVector = vector =>
    vector
      .split(',')
      .slice(0, 3)
      .map(n => parseFloat(n));
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
        this.updateMapParams({ coordinates, orientation });
        return { done: true };
      }
      return { done: false };
    });
    postRobot.on('setMapLayers', event => {
      const { layers = [] } = event.data;
      this.updateMapParams({ layers });
      return { done: true };
    });
  }

  updateMapParams = params => {
    const { location, updateMapParams } = this.props;
    const parsedParams = Object.keys(params).reduce(
      (acc, next) => ({
        ...acc,
        [next]: Array.isArray(params[next])
          ? params[next].join(',')
          : params[next]
      }),
      {}
    );
    updateMapParams({
      query: {
        ...location.query,
        ...parsedParams
      }
    });
  };

  render() {
    return createElement(MapLayout, {
      ...this.props,
      updateMapParams: this.updateMapParams
    });
  }
}

export default connect(
  mapDispatchToProps,
  actions
)(MapLayoutContainer);
