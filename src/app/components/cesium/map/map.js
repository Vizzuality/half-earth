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
    this.rotatingEvent = false
    this.state = {
      layers: {},
      viewer: null,
      clickedPosition: null,
      hoverPosition: { x: 0, y: 0 }
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
    this.handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)
    this.handler.setInputAction(
      this.onMouseClick,
      Cesium.ScreenSpaceEventType.LEFT_CLICK
    )
    this.handler.setInputAction(
      this.onMouseMove,
      Cesium.ScreenSpaceEventType.MOUSE_MOVE
    )

    // var scene = viewer.scene
    // var sglobe = scene.globe
    // sglobe.depthTestAgainstTerrain = true
    // var vrTheWorldProvider = new Cesium.VRTheWorldTerrainProvider({
    //   url: '//www.vr-theworld.com/vr-theworld/tiles1.0.0/73/',
    //   credit: 'Terrain data courtesy VT MÄK'
    // })

    // viewer.terrainProvider = vrTheWorldProvider

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
    this.bindMap(Object.assign(props))
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
        viewer.camera[p] = cameraProps[p]
      })
    }
  }

  componentWillReceiveProps (props) {
    if (this.props.zoomLevel !== props.zoomLevel) {
      this.handleZoom(props.zoomLevel)
    }
  }

  componentDidUpdate () {
    this.state.clickedPosition = null
  }

  rotate = clock => {
    const { startTime, currentTime } = clock
    const { viewer } = this.state
    const lastNow = startTime.secondsOfDay
    const now = currentTime.secondsOfDay
    const spinRate = 0.8
    const delta = (now - lastNow) / 1000
    viewer.scene.camera.rotate(Cesium.Cartesian3.UNIT_Z, -spinRate * delta)
    clock.startTime.secondsOfDay = now - 1
  }

  addRotation () {
    const { viewer } = this.state
    if (this.rotatingEvent) return
    viewer.clock.onTick.addEventListener(this.rotate)
    this.rotatingEvent = true
  }

  onMouseClick = click => {
    this.setState({ clickedPosition: click.position })
  }

  onMouseMove = mouse => {
    this.setState({ hoverPosition: mouse.startPosition })
  }

  removeRotation () {
    const { viewer } = this.state
    viewer.clock.onTick.removeEventListener(this.rotate)
    this.rotatingEvent = false
  }

  render () {
    const { props, state } = this
    const { rotate } = props
    const { layers, viewer, clickedPosition, hoverPosition } = state
    if (viewer) this[rotate ? 'addRotation' : 'removeRotation']()

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
      clickedPosition,
      hoverPosition,
      ...props
    })
  }
}

const mapStateToProps = ({ zoom }) => ({ zoom })

export default connect(mapStateToProps)(CesiumComponent)
