import React, { Component } from 'react';
import MapAttributionComponent from './map-attributions-component';

const attributions = [
  { alt: 'Cesium', src: '/img/logo_cesium.png', href: 'https://cesiumjs.org/' },
  { alt: 'Carto', src: '/img/logo_carto.png', href: 'https://carto.com/' }
];

class MapAttributionContainer extends Component {
  render() {
    return <MapAttributionComponent attributions={attributions} />;
  }
}

export default MapAttributionContainer;
