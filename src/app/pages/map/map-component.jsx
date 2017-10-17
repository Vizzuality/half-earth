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

const Map = ({ map, regional, zoomLevel, lockNavigation, className }) => (
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
    {regional.layers.map(
      layer =>
        layer.url ? <ImageProvider key={layer.name} {...layer} /> : null
    )}
    <Billboard
      id={'paharo'}
      url="/img/bird.png"
      urlHover="/img/bird-hover.png"
      width="100"
      height="100"
      onClick={id => console.log('clicked', id)}
      position={[22.727253, -19.3193416]}
    />
    <Billboard
      id={'paharo2'}
      url="/img/bird.png"
      urlHover="/img/bird-hover.png"
      width="100"
      height="100"
      onClick={id => console.log('clicked', id)}
      position={[22.827253, -19.3193416]}
    />
  </CesiumMap>
)

export default Map
