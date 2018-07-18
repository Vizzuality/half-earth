import React from 'react';
import CesiumMap from 'components/cesium/map';
import CesiumLayer from 'components/cesium/layer';
import Grid from 'components/cesium/grid';
import Legend, { LegendLayers } from 'components/legend';
import styles from './map-iframe-styles';

const MapIframeComponent = props => {
  const { layers, coordinates, coordinatesOptions } = props;
  const hasLayers = layers && !!layers.length;
  return (
    <React.Fragment>
      <CesiumMap
        className={styles.mapContainer}
        coordinates={coordinates}
        coordinatesOptions={coordinatesOptions}
      >
        <Grid />
        {hasLayers &&
          layers.map(layer => <CesiumLayer key={layer.id} {...layer.config} />)}
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
