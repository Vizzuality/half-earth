import React from 'react';
import CesiumMap from 'components/cesium/map';
import CesiumLayer from 'components/cesium/layer';
import Legend, { LegendLayers } from 'components/legend';
import styles from './map-layout-styles';

const MapLayoutComponent = props => {
  const { layers, coordinates, coordinatesOptions } = props;
  return (
    <div className={styles.mapLayout}>
      <CesiumMap
        coordinates={coordinates}
        coordinatesOptions={coordinatesOptions}
        className={styles.mapContainer}
      >
        {layers.map(layer => <CesiumLayer key={layer.id} {...layer.config} />)}
      </CesiumMap>
      {layers && (
        <Legend>
          <LegendLayers layers={layers.map(l => l.legend)} />
        </Legend>
      )}
    </div>
  );
};

export default MapLayoutComponent;
