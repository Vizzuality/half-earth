import React from 'react'
import _find from 'lodash/find'
import { ns } from 'utils'
import CesiumMap from 'components/cesium/map'
import ImageProvider from 'components/cesium/image-provider'
import zoomLevels from 'data/zoom-levels'
import Billboard from 'components/cesium/billboard'
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
  setDistance,
  openSidePopup,
  className,
  section,
  setInteraction
}) => {
  // @NOTE zoom handling should be refactored and handled independently in the furure
  const foundRegionalPopup = _find(regional.sidePopup.content, {
    key: regional.sidePopup.selected
  })
  const [route, zoomLevel] = ns(routeLevel, '|')

  let zoom = zoomLevels[zoomLevel] || zoomLevels[route]

  if (regional.sidePopup.open && foundRegionalPopup) {
    const { x, y, z } = Cesium.Cartesian3.fromDegrees(
      ...foundRegionalPopup.location,
      regional.billboardsDistance
    )
    if (x && y) zoom = [[x, y, z], null]
  }

  const getBillboardLayer = (billboard, layers) =>
    _find(layers, { name: billboard.layerName })

  return (
    <CesiumMap
      key="CesiumMap"
      className={className}
      lockNavigation={lockNavigation}
      zoomLevel={zoom}
      onTick={({ distance }) => setDistance(distance)}
    >
      {route === 'regional' &&
        section.section === 'regional:3' &&
        regional.billboards
          .map(billboard => ({
            ...billboard,
            show:
              getBillboardLayer(billboard, regional.layers) &&
              getBillboardLayer(billboard, regional.layers).visible
          }))
          .map(billboard => (
            <Billboard
              key={billboard.id}
              id={billboard.id}
              url={billboard.url}
              urlHover={billboard.urlHover}
              width={58}
              height={58}
              show={billboard.show}
              onMouseHover={e => setInteraction('hover')}
              onMouseOut={e => setInteraction()}
              {...(billboard.color
                ? { color: new Cesium.Color(...billboard.color) }
                : {
                  color: new Cesium.Color(
                      ...(map.distance < regional.billboardsDistance + 1000
                        ? [1.0, 1.0, 1.0, 0.25]
                        : [1, 1, 1])
                    )
                })}
              {...(billboard.distanceDisplayCondition
                ? {
                  distanceDisplayCondition: new Cesium.DistanceDisplayCondition(
                      ...billboard.distanceDisplayCondition
                    )
                }
                : {})}
              onClick={id =>
                openSidePopup({
                  payload: id,
                  meta: ['local', ...analytics.openPopUp, id]
                })}
              position={billboard.coordinates}
            />
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
