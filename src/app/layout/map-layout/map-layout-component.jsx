import React from 'react';
import CesiumMap from 'components/cesium/map';
import CesiumLayer from 'components/cesium/layer';

const zoom = [
  [1553050.2420231537, -7982538.989058298, 208217.95614838324],
  {
    orientation: {
      heading: 5.92122801224943,
      pitch: -0.29198679662794125,
      roll: 6.26520814284261
    }
  },
  {
    direction: {
      x: -0.45398661837491283,
      y: 0.3809856883575422,
      z: 0.8054477361090793
    },
    up: {
      x: 0.1122919730791525,
      y: -0.872300942381824,
      z: 0.4759008076288302
    },
    position: {
      x: 1763712.746442791,
      y: -6539514.672847353,
      z: 1589391.5741452249
    }
  }
];

const MapLayoutComponent = () => {
  return <CesiumMap zoom={zoom}>{false && <CesiumLayer />}</CesiumMap>;
};

export default MapLayoutComponent;
