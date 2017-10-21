import Bird from './lib/bird'
const { Cesium } = window

class CesiumBird extends Bird {
  constructor (options) {
    super(options)
    this.viewer = options.viewer
    if (!this.entity) {
      this.coords = options.coords
      this.latScale = options.latScale
      this.longScale = options.longScale
      this.west = options.west
      this.east = options.east
      this.north = options.north
      this.south = options.south
      this.crop = options.crop

      this.entity = this.viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(...options.position),
        model: {
          uri: '/img/triangulos.glb',
          minimumPixelSize: options.r,
          allowPicking: false,
          shadows: Cesium.ShadowMode.DISABLED,
          // // material: new Cesium.PolylineArrowMaterialProperty(Cesium.Color.PURPLE),
          // appearance: new Cesium.MaterialAppearance({
          //   flat: true
          // })
          colorBlendMode: options.colorBlendMode || 1,
          colorBlendAmount: options.colorBlendAmount || 0.4
        }
      })
    }
  }

  render () {
    // const { context, position, velocity, r } = this
    // const pos = position // wrap(position)
    // const theta = velocity.heading() + degreesToRadians(90)

    const { west, east, north, south, viewer } = this
    const { entity } = this
    if (!entity || !entity.position) return

    const { x, y } = this.position
    const pos = Cesium.Cartesian3.fromDegrees(
      this.latScale(x),
      this.longScale(y)
    )
    entity.position = pos

    const heading = this.velocity.heading() + Cesium.Math.toRadians(90)
    var pitch = 0
    var roll = 0
    var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll)
    var orientation = Cesium.Transforms.headingPitchRollQuaternion(pos, hpr)
    entity.orientation = orientation
    if (!this.crop) return
    if (
      this.longScale(y) < south ||
      this.longScale(y) > north ||
      this.latScale(x) > east ||
      this.latScale(x) < west
    ) {
      if (!entity.show) viewer.entities.remove(entity)
      entity.show = false
    }
  }
}

export default CesiumBird
