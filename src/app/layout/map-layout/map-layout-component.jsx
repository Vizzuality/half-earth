import React from 'react';
import CesiumMap from 'components/cesium/map';
import CesiumLayer from 'components/cesium/layer';
import styles from './map-layout-styles.scss';

const MapLayoutComponent = props => {
  const { activeLayers, coordinates, coordinatesOptions } = props;
  return (
    <CesiumMap
      className={styles.mapContainer}
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
