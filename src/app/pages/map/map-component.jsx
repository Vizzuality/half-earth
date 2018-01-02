import React from 'react'
import { ns } from 'utils'
import CesiumMap from 'components/cesium/map'
import ImageProvider from 'components/cesium/image-provider'
import bindZoomLevels from 'data/zoom-levels'
import Billboard from 'components/cesium/billboard'
import Birds from 'components/birds'
import Logos from 'components/logos'

const { Cesium } = window
const analytics = {
  openPopUp: ['Map hotspots']
}

const Map = ({
  map,
  regional,
  global,
  zoomLevel: routeLevel,
  lockNavigation,
  local,
  openPopUp,
  openSidePopup,
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
    >
      {route === 'regional' &&
        section.section === 'regional:3' &&
        regional.billboards.map(billboard => (
          <Billboard
            key={billboard.id}
            id={billboard.id}
            url={billboard.url}
            urlHover={billboard.urlHover}
            width={58}
            height={58}
            onClick={id =>
              openSidePopup({
                payload: id,
                meta: ['local', ...analytics.openPopUp, id]
              })}
            position={billboard.coordinates}
          />
        ))}
      {false &&
        local.birds.map(localBird => (
          <Birds {...{ ...localBird }} key={localBird} url="hum" />
        ))}
      {false &&
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
