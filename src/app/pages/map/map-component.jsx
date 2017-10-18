import React from 'react'

import CesiumMap from 'components/cesium/map'
import ImageProvider from 'components/cesium/image-provider'
import ModelProvider from 'components/cesium/model-provider'
import Billboard from 'components/cesium/billboard'

import random from 'lodash/random'
import zoomLevels from 'data/zoom-levels'
const { Cesium } = window

const [lat, long] = zoomLevels(Cesium).local[0]
const birdPosition = [lat - 0.07, long - 0.07, 150000]
const displace = (x, y, z) => [
  x + 0.1 + random(-0.8, 0.8, true),
  y - 0.5 + random(-0.8, 0.8, true),
  z
]
const birds = new Array(10).fill(0)

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
    {birds.map((bird, i) => (
      <ModelProvider
        key={`bird-${i}`}
        url="/img/bird.gltf"
        scale="150.0"
        coordinates={displace(...birdPosition)}
        animate
        speed={1}
      />
    ))}
    {zoomLevel === 'regional' &&
      regional.layers.map(
        layer =>
          layer.url ? <ImageProvider key={layer.name} {...layer} /> : null
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
  </CesiumMap>
)

export default Map
