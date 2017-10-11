import { Component, createElement } from 'react'
import { connect } from 'react-redux'

import { assign } from 'utils'
import CesiumMapComponent from './map-component'
import bindZoomLevels from 'data/zoom-levels'
const { Cesium } = window

const zoomLevels = bindZoomLevels(Cesium)
const mapId = `map-${new Date().getTime()}`

const bindFlyTo = v => (lat, long, z = 15000.0, rest = {}) =>
  v.camera.flyTo(
    assign({ destination: Cesium.Cartesian3.fromDegrees(lat, long, z) }, rest)
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
    const [zLevel, opts] = zoomLevels[zoom]
    this.flyTo(...zLevel, opts)
  }

  componentWillReceiveProps (props) {
    if (this.props.zoomLevel !== props.zoomLevel) {
      this.handleZoom(props.zoomLevel)
    }
  }

  render () {
    const { props, state } = this
    const { layers, viewer } = state

    const getPos = (window.getPos = () => {
      const c = viewer.camera.positionCartographic
      console.log(
        Object.keys(c).reduce((a, k) => {
          a[k] = Cesium.Math.toDegrees(c[k])
          return a
        }, {})
      ) //
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
