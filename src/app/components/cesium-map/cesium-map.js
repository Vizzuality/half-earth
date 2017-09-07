/* global MAPBOX_TOKEN */
import React, { Component } from 'react'
const { Cesium } = window

const mapId = `map-${new Date().getTime()}`
const home = [-82.5, 35.09, 18490000.0]

const bindFlyTo = v => (lat, long, z = 15000.0, rest = {}) =>
  v.camera.flyTo(
    Object.assign(
      {
        destination: Cesium.Cartesian3.fromDegrees(lat, long, z)
      },
      rest
    )
  )

const disablePanning = v => {
  const { scene } = v
  scene.screenSpaceCameraController.enableRotate = false
  scene.screenSpaceCameraController.enableTranslate = false
  scene.screenSpaceCameraController.enableZoom = false
  scene.screenSpaceCameraController.enableTilt = false
  scene.screenSpaceCameraController.enableLook = false
  return v
}

class CesiumComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      layers: {},
      viewer: null
    }
  }

  mountMap () {
    const viewer = disablePanning(
      new Cesium.Viewer(mapId, {
        geocoder: false,
        homeButton: false,
        sceneModePicker: false,
        baseLayerPicker: false,
        navigationHelpButton: false,
        animation: false,
        timeline: false,
        creditsDisplay: false,
        fullscreenButton: false,
        skyAtmosphere: false,
        imageryProvider: new Cesium.MapboxImageryProvider({
          mapId: 'mapbox.satellite',
          accessToken: MAPBOX_TOKEN
        })
      })
    )

    const flyTo = bindFlyTo(viewer)
    flyTo(...home)
    return viewer
  }

  componentDidMount () {
    const viewer = this.mountMap()
    const layers = viewer.imageryLayers
    this.setState({
      layers,
      viewer
    })
  }

  render () {
    const { layers } = this.state
    return (
      <div id={mapId}>
        {React.Children.map(this.props.children, ch =>
          React.cloneElement(ch, { ...ch.props, layers })
        )}
      </div>
    )
  }
}

export default CesiumComponent
