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
      {route === 'local' &&
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
      {(route === 'intro' || route === 'local') && (
        <Birds
          pixelSize={15}
          colorBlendMode={1}
          colorBlendAmount={1}
          position={[22.541396, -16.692624]}
          targets={[
            [23.201735, -18.302562],
            [23.223064, -18.818436],
            [22.867807, -19.054048],
            [22.249646, -19.275385],
            [22.522715, -19.798506]
          ]}
          north={-17.3312}
          south={-20.273157}
          east={24.031766}
          west={21.395792}
          numBirds="200"
          url="hum"
        />
      )}
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
    </CesiumMap>
  )
}

export default Map
