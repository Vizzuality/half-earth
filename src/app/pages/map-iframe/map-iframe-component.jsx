import React from 'react';
import CesiumMap from 'components/cesium/map';
import CesiumLayer from 'components/cesium/layer';
import Legend, { LegendLayers } from 'components/legend';
import styles from './map-iframe-styles';

const MapIframeComponent = props => {
  const { layers, coordinates, coordinatesOptions, updateMapParams } = props;
  const hasLayers = layers && !!layers.length;
  return (
    <React.Fragment>
      <CesiumMap
        className={styles.mapContainer}
        coordinates={coordinates}
        coordinatesOptions={coordinatesOptions}
        onMoveEnd={updateMapParams}
      >
        {layers.map(layer => <CesiumLayer key={layer.id} {...layer.config} />)}
      </CesiumMap>
      {hasLayers && (
        <Legend>
          <LegendLayers layers={layers.map(l => l.legend)} />
        </Legend>
      )}
    </React.Fragment>
  );
};

MapIframeComponent.defaultProps = {
  layers: []
};

export default MapIframeComponent;
