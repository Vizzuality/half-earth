import React from 'react'
import { ns } from 'utils'
import CesiumMap from 'components/cesium/map'
import ImageProvider from 'components/cesium/image-provider'
import bindZoomLevels from 'data/zoom-levels'
import Billboard from 'components/cesium/billboard'
import Birds from 'components/birds'

const { Cesium } = window

const Map = ({
  map,
  regional,
  global,
  zoomLevel: routeLevel,
  lockNavigation,
  local,
  openPopUp,
  className,
  section
}) => {
  const [route, zoomLevel] = ns(routeLevel, '|')
  const zoomLevels = bindZoomLevels(Cesium)
  const zoom = zoomLevels[zoomLevel] || zoomLevels[route]
  return (
    <CesiumMap
      className={className}
      lockNavigation={lockNavigation}
      zoomLevel={zoom}
      rotate={route === 'global'}
    >
      {route === 'regional' &&
        regional.layers.map(
          layer =>
            layer.url ? (
              <ImageProvider keep={layer.keep} key={layer.name} {...layer} />
            ) : null
        )}
      {route === 'global' &&
        global.layers.map(
          layer =>
            layer.url ? <ImageProvider key={layer.name} {...layer} /> : null
        )}
      {route === 'local' &&
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
      {route === 'regional' && <Birds numBirds="200" url="hum" />}
    </CesiumMap>
  )
}

export default Map
