import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ZoomControlsComponent from './zoom-controls-component';

class ZoomControlsContainer extends Component {
  handleZoomIn = () => {
    const { map } = this.props;
    const { camera } = map;
    const position = camera.positionCartographic;
    const { longitude, latitude, height } = position;
    const destination = Cesium.Cartesian3.fromRadians(
      longitude,
      latitude,
      height - height * 30 / 100
    );
    camera.flyTo({ destination, duration: 0.5 });
  };

  handleZoomOut = () => {
    const { map } = this.props;
    const { camera } = map;
    const position = camera.positionCartographic;
    const { longitude, latitude, height } = position;
    const destination = Cesium.Cartesian3.fromRadians(
      longitude,
      latitude,
      height + height * 30 / 100
    );
    camera.flyTo({ destination, duration: 0.5 });
  };

  render() {
    return (
      <ZoomControlsComponent
        handleZoomIn={this.handleZoomIn}
        handleZoomOut={this.handleZoomOut}
        {...this.props}
      />
    );
  }
}

ZoomControlsContainer.propTypes = { map: PropTypes.object };

ZoomControlsContainer.defaultProps = { map: null };

export default ZoomControlsContainer;
