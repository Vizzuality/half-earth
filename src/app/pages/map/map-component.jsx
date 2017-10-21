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
  /**
  maxspeed: Number(props.maxspeed) || 0.07,
  maxforce: Number(props.maxforce) || 0.03,
  targetRate: Number(props.targetRate) || 0.99,
  sep: Number(props.sep) || 1.5, // Separation
  ali: Number(props.ali) || 1.0, // Alignment
  coh: Number(props.coh) || 1.0, // Cohesion,
 */
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
            height={123}
            onClick={id => openPopUp(id)}
            position={billboard.coordinates}
          />
        ))}
      {route === 'local' && (
        <Birds
          pixelSize={18}
          maxspeed={0.1}
          colorBlendMode={1}
          colorBlendAmount={1}
          maxforce={0.03}
          start={[22.8888689, -19.1014986, 1000]}
          target={[21.814053, -33.583702]}
          north={-17.3312}
          south={-20.273157}
          east={24.031766}
          west={21.395792}
          numBirds="50"
          url="hum"
        />
      )}
      {route === 'regional' && (
        <Birds
          pixelSize={15}
          target={[23.269086, -19.925504]}
          start={[21.641831, -32.270312]}
          north={7.8621481}
          south={-34.5355066}
          east={34.898694}
          west={17.330078}
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
