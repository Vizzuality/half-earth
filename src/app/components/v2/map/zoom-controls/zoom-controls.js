import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ZoomControlsComponent from './zoom-controls-component';
import * as actions from './zoom-controls-actions';
import { mapStateToProps } from './zoom-controls-selectors';

class ZoomControlsContainer extends Component {
  rangeZoomIn = range => parseInt(range, 10) - parseInt(range, 10) * 30 / 100;

  rangeZoomOut = range => parseInt(range, 10) + parseInt(range, 10) * 30 / 100;

  heightZoomIn = height => height - height * 30 / 100;

  heightZoomOut = height => height + height * 30 / 100;

  landscapeZoom = zoomFunction => {
    const { query, updateQueryParam } = this.props;
    const { terrainCameraOffset } = query;
    const { range } = terrainCameraOffset;
    updateQueryParam({
      query: {
        ...query,
        terrainCameraOffset: { ...terrainCameraOffset, range: zoomFunction(range) }
      }
    });
  };

  globalViewZoom = (camera, zoomFunction) => {
    const position = camera.positionCartographic;
    const { longitude, latitude, height } = position;
    const destination = Cesium.Cartesian3.fromRadians(longitude, latitude, zoomFunction(height));
    camera.flyTo({ destination, duration: 0.5 });
  };

  handleZoomIn = () => {
    const { landscapeZoom, rangeZoomIn, globalViewZoom, heightZoomIn } = this;
    const { map, isLandscapeView } = this.props;
    const { camera } = map;
    if (isLandscapeView) {
      landscapeZoom(rangeZoomIn);
    } else {
      globalViewZoom(camera, heightZoomIn);
    }
  };

  handleZoomOut = () => {
    const { landscapeZoom, rangeZoomOut, globalViewZoom, heightZoomOut } = this;
    const { map, isLandscapeView } = this.props;
    const { camera } = map;
    if (isLandscapeView) {
      landscapeZoom(rangeZoomOut);
    } else {
      globalViewZoom(camera, heightZoomOut);
    }
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

ZoomControlsContainer.propTypes = {
  map: PropTypes.object,
  isLandscapeView: PropTypes.bool,
  query: PropTypes.object,
  updateQueryParam: PropTypes.func.isRequired
};

ZoomControlsContainer.defaultProps = { map: null, isLandscapeView: false, query: {} };

export default connect(mapStateToProps, actions)(ZoomControlsContainer);
