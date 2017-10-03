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

// const disablePanning = v => {
//   const { scene } = v
//   scene.screenSpaceCameraController.enableRotate = false
//   scene.screenSpaceCameraController.enableTranslate = false
//   scene.screenSpaceCameraController.enableZoom = false
//   scene.screenSpaceCameraController.enableTilt = false
//   scene.screenSpaceCameraController.enableLook = false
//   return v
// }

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
      // skyAtmosphere: false,
      imageryProvider: new Cesium.UrlTemplateImageryProvider({
        url: `https://api.mapbox.com/styles/v1/jchalfearth/cj85y2wq523um2rryqnvxzlt1/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamNoYWxmZWFydGgiLCJhIjoiY2o4Mnh4aDN6MGNqazMzc2FkeTlnajBoeiJ9.5Su3_JeAsjM0slTkaGFihw`
      })
    }

    const viewer = (window.viewer =
      this.state.viewer || new Cesium.Viewer(mapId, mapConfig))
    this.flyTo = bindFlyTo(viewer)

    // setInterval(function () {
    //   const camera = viewer.scene.camera
    //   console.log(camera.position.clone())
    // }, 1000)

    // if (zoomLevel) this.handleZoom(zoomLevel)
    // if (lockNavigation) return disablePanning(viewer)
    return viewer
  }

  bindMap (props) {
    const viewer = this.mountMap(props)
    const layers = Object.keys(this.state.layers).length
      ? this.state.layers
      : viewer.imageryLayers

    // fetch('http://localhost:8080/tiles/0/0/0.geojson').then(d => d.json()).then(d => {
    //   console.log(d.features[0])
    //
    //   d.features.slice(0, 1000).map(f => {
    //     const [lant, long] = f.geometry.coordinates[0][0]
    //     viewer.entities.add({
    //       position: Cesium.Cartesian3.fromDegrees(lant, long),
    //       ellipse: {
    //         semiMinorAxis: 90000.0,
    //         semiMajorAxis: 90000.0,
    //         material: Cesium.Color.BLUE.withAlpha(0.5)
    //       }
    //     })
    //   })
    // })
    // const file = 'sr_mammals_sa.json'
    // const file = 'new_shapefile.geojson'
    // const file = 'protea-demo.geojson'
    // const file = 'restio_rarity_map_v1.tif.geojson'
    // const file = 'restio_rarity_map_v1.geojson'
    // const file = 'restio_raroty_1x1.geojson'
    // const file = 'restio_rarity_map.geojson'

    // Cesium.GeoJsonDataSource
    //   .load(`http://localhost:3333/${file}`)
    //   .then(dataSource => {
    //     // console.log(dataSource.entities.values[0])
    //     // var p = dataSource.entities.values
    //     // for (var i = 0; i < p.length; i++) {
    //     //   // console.log(Cesium.Color.WHITE, Object.assign(Cesium.Color.WHITE, { alpha: 0.1 }))
    //     //   // const green = Cesium.Color.LAWNGREEN
    //     //   // green.alpha = 0.5
    //     //   p[i].polygon.outline = false
    //     //   const color = new Cesium.Color(1, 0, 0, 0.4)
    //     //   p[i].polygon.material = color
    //     //   p[i].polygon.shadows = Cesium.ShadowMode.ENABLED
    //     //   // p[i].polygon.extrudedHeight = p[i].properties.pvalue._value * 10000 // or height property
    //     //   p[i].polygon.height = p[i].properties.pvalue._value * 9000 // or height property
    //     //   // p[i].polygon.height = 200000 // or height property
    //     // }

    //     viewer.dataSources.add(dataSource)
    //     // viewer.zoomTo(dataSource)
    //   })

    // var dataSource = Cesium.GeoJsonDataSource.load('http://localhost:8080/tiles/0/0/0.geojson')
    // viewer.dataSources.add(dataSource)
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
