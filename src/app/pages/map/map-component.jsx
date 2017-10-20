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
    {zoomLevel === 'local' &&
      local.billboards.map(billboard => (
        <Billboard
          key={billboard.id}
          id={billboard.id}
          url={billboard.url}
          urlHover={billboard.urlHover}
          width={82}
          height={108}
          onClick={id => openPopUp(id)}
          position={billboard.coordinates}
        />
      ))}
    {zoomLevel === 'loscal' && (
      <Birds
        log={console.log(section)}
        pixelSize={15}
        maxspeed={0.5}
        target={[21.814053, -33.583702]}
        north={-17.3312}
        south={-20.273157}
        east={24.031766}
        west={21.395792}
        numBirds="100"
        url="hum"
      />
    )}
    {(zoomLevel === 'local' || zoomLevel === 'regional') && (
      <Birds
        pixelSize={15}
        target={[23.269086, -19.925504]}
        north={7.8621481}
        south={-34.5355066}
        east={34.898694}
        west={17.330078}
        numBirds="200"
        url="hum"
      />
    )}
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
  </CesiumMap>
)

export default Map
