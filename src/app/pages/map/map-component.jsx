import React from 'react'

import CesiumMap from 'components/cesium/map'
import ImageProvider from 'components/cesium/image-provider'
import Billboard from 'components/cesium/billboard'
import Birds from 'components/birds'

const Map = ({
  map,
  regional,
  global,
  zoomLevel,
  lockNavigation,
  local,
  openPopUp,
  className,
  section
}) => (
  <CesiumMap
    className={className}
    lockNavigation={lockNavigation}
    zoomLevel={zoomLevel}
    rotate={zoomLevel === 'global'}
  >
    {zoomLevel === 'regional' &&
      regional.layers.map(
        layer =>
          layer.url ? (
            <ImageProvider keep={layer.keep} key={layer.name} {...layer} />
          ) : null
      )}
    {zoomLevel === 'global' &&
      global.layers.map(
        layer =>
          layer.url ? <ImageProvider key={layer.name} {...layer} /> : null
      )}
    {zoomLevel === 'local' &&
      local.billboards.map(billboard => (
        <Billboard
          key={billboard.id}
          id={billboard.id}
          url={billboard.url}
          urlHover={billboard.urlHover}
          width={82}
          height={123}
          onClick={id => openPopUp(id)}
          position={billboard.coordinates}
        />
      ))}
    {zoomLevel === 'regional' && <Birds numBirds="200" url="hum" />}
  </CesiumMap>
)

export default Map
