import React from 'react';
import CesiumMap from 'components/cesium/map';
import CesiumLayer from 'components/cesium/layer';

const MapLayoutComponent = props => {
  const { activeLayers, coordinates, coordinatesOptions } = props;
  return (
    <CesiumMap
      coordinates={coordinates}
      coordinatesOptions={coordinatesOptions}
    >
      {activeLayers.map(layer => (
        <CesiumLayer key={layer.id} {...layer.config} />
      ))}
    </CesiumMap>
  );
};

export default MapLayoutComponent;
