/* global MAPBOX_TOKEN */
import { Component, createElement } from 'react'
import { connect } from 'react-redux'
import CesiumMapComponent from './map-component'
import bindZoomLevels from 'data/zoom-levels'
const { Cesium } = window

const zoomLevels = bindZoomLevels(Cesium)
const mapId = `map-${new Date().getTime()}`

const bindFlyTo = v => (lat, long, z = 15000.0, rest = {}) =>
  v.camera.flyTo(
    Object.assign(
      { destination: Cesium.Cartesian3.fromDegrees(lat, long, z) },
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

  mountMap ({ lockNavigation, zoomLevel }) {
    let viewer = new Cesium.Viewer(mapId, {
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

    this.flyTo = bindFlyTo(viewer)
    this.handleZoom(zoomLevel)

    if (lockNavigation) viewer = disablePanning(viewer)
    return viewer
  }

  componentDidMount () {
    const viewer = this.mountMap(this.props)
    const layers = viewer.imageryLayers
    this.setState({
      layers,
      viewer
    })
  }

  handleZoom (zoom) {
    const [zLevel, opts] = zoomLevels[zoom]
    this.flyTo(...zLevel, opts)
  }

  componentWillReceiveProps (props) {
    this.handleZoom(props.zoomLevel)
  }

  render () {
    const { layers } = this.state
    const { props } = this
    return createElement(CesiumMapComponent, { mapId, layers, ...props })
  }
}

const mapStateToProps = ({ zoom }) => ({ zoom })

export default connect(mapStateToProps)(CesiumComponent)
