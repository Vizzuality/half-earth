import { Component, createElement } from 'react'
import { connect } from 'react-redux'

import { assign } from 'utils'
import CesiumMapComponent from './map-component'
import bindZoomLevels from 'data/zoom-levels'
const { Cesium } = window

const zoomLevels = bindZoomLevels(Cesium)
const mapId = `map-${new Date().getTime()}`

const bindFlyTo = v => (lat, long, z = 15000.0, rest = {}) =>
  v.camera.flyTo(assign({ destination: { x: lat, y: long, z } }, rest))

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

  mountMap ({ lockNavigation, zoomLevel, globe }) {
    const mapConfig = {
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
      imageryProvider: new Cesium.UrlTemplateImageryProvider({
        url: `https://api.mapbox.com/styles/v1/jchalfearth/cj85y2wq523um2rryqnvxzlt1/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamNoYWxmZWFydGgiLCJhIjoiY2o4Mnh4aDN6MGNqazMzc2FkeTlnajBoeiJ9.5Su3_JeAsjM0slTkaGFihw`
      })
    }

    const viewer = (window.viewer =
      this.state.viewer || new Cesium.Viewer(mapId, mapConfig))
    this.flyTo = bindFlyTo(viewer)

    if (zoomLevel) this.handleZoom(zoomLevel)
    if (lockNavigation) return disablePanning(viewer)

    this.state.viewer = viewer
    return viewer
  }

  bindMap (props) {
    const viewer = this.mountMap(props)
    const layers = Object.keys(this.state.layers).length
      ? this.state.layers
      : viewer.imageryLayers

    this.setState({
      layers,
      viewer
    })
  }

  componentDidMount () {
    const { props } = this
    this.bindMap(Object.assign({}, props))
    if (props.zoomLevel) this.handleZoom(props.zoomLevel)
  }

  handleZoom (zoom) {
    if (!zoomLevels[zoom]) return
    const { state: { viewer } } = this
    const [zLevel, opts, cameraProps] = zoomLevels[zoom]
    if (zLevel) {
      this.flyTo(...zLevel, opts)
    }

    if (viewer && cameraProps) {
      Object.keys(cameraProps).map(p => {
        console.log(viewer.camera[p])
        viewer.camera[p] = cameraProps[p]
      })
    }
  }

  componentWillReceiveProps (props) {
    if (this.props.zoomLevel !== props.zoomLevel) {
      this.handleZoom(props.zoomLevel)
    }
  }

  rotate () {
    const { viewer } = this.state

    var lastNow = Date.now()
    viewer.clock.onTick.addEventListener(clock => {
      const now = Date.now()
      const spinRate = 0.08
      const delta = (now - lastNow) / 1000
      viewer.scene.camera.rotate(Cesium.Cartesian3.UNIT_Z, -spinRate * delta)
      lastNow = now
    })
  }

  render () {
    const { props, state } = this
    const { rotate } = props
    const { layers, viewer } = state

    if (viewer && rotate) this.rotate()

    const getPos = (window.getPos = () => {
      const c = viewer.camera.positionCartographic
      console.log(
        Object.keys(c).reduce((a, k) => {
          a[k] = Cesium.Math.toDegrees(c[k])
          return a
        }, {})
      )
    })
    return createElement(CesiumMapComponent, {
      mapId,
      layers,
      getPos,
      viewer,
      ...props
    })
  }
}

const mapStateToProps = ({ zoom }) => ({ zoom })

export default connect(mapStateToProps)(CesiumComponent)
