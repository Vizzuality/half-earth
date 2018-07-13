import React from 'react';
import CesiumMap from 'components/cesium/map';
import CesiumLayer from 'components/cesium/layer';
import Legend, { LegendLayers } from 'components/legend';

const MapLayoutComponent = props => {
  const { layers, coordinates, coordinatesOptions } = props;
  return (
    <React.Fragment>
      <CesiumMap
        coordinates={coordinates}
        coordinatesOptions={coordinatesOptions}
      >
        {layers.map(layer => <CesiumLayer key={layer.id} {...layer.config} />)}
      </CesiumMap>
      {layers && (
        <Legend>
          <LegendLayers layers={layers.map(l => l.legend)} />
        </Legend>
      )}
    </React.Fragment>
  );
};

export default MapLayoutComponent;
