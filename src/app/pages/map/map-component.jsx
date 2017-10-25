import React from 'react'
import { ns } from 'utils'
import CesiumMap from 'components/cesium/map'
import ImageProvider from 'components/cesium/image-provider'
import bindZoomLevels from 'data/zoom-levels'
import Billboard from 'components/cesium/billboard'
import Birds from 'components/birds'
import Logos from 'components/logos'

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
      key="CesiumMap"
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
            width={80}
            height={106}
            onClick={id => openPopUp(id)}
            position={billboard.coordinates}
          />
        ))}
      {route === 'local' &&
        local.birds.map(localBird => (
          <Birds {...{ ...localBird }} key={localBird} url="hum" />
        ))}
      {(route === 'local' ||
        (route === 'regional' && section.section === 'regional:1')) &&
        regional.birds.map((regionalBird, i) => (
          <Birds {...{ ...regionalBird }} key={`regionalBird${i}`} url="hum" />
        ))}
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
      {route !== 'home' && <Logos key="Logos" />}
    </CesiumMap>
  )
}

export default Map
