import { Component } from 'react';
import PropTypes from 'prop-types';

const { Cesium } = window;

class CesiumComponent extends Component {
  componentDidMount() {
    const { map } = this.props;
    if (map) {
      map.terrainProvider = Cesium.createWorldTerrain({ requestWaterMask: true, requestVertexNormals: true });
    }
  }

  componentWillUnmount() {
    this.props.map.terrainProvider = new Cesium.CesiumTerrainProvider({});
  }

  render() {
    return null;
  }
}

CesiumComponent.propTypes = { map: PropTypes.any };

CesiumComponent.defaultProps = { map: null };

export default CesiumComponent;
