import Bird from './lib/bird';
import { mapCubed } from './lib/utils';
const { Cesium } = window;

class CesiumBird extends Bird {
  constructor (options) {
    super(options);
    this.viewer = options.viewer;
    if (!this.entity) {
      this.coords = options.coords;
      this.latScale = options.latScale;
      this.longScale = options.longScale;
      this.west = options.west;
      this.east = options.east;
      this.north = options.north;
      this.south = options.south;
      this.crop = options.crop;
      this.color = Cesium.Color.WHITE;
      this.burstTime = 10;
      this.alphaScale = mapCubed([0, this.burstTime], [0, 1]);
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
      });
    }
  }

  render (clock) {
    // const { context, position, velocity, r } = this
    // const pos = position // wrap(position)
    // const theta = velocity.heading() + degreesToRadians(90)
    const { west, east, north, south, viewer } = this;
    const { entity } = this;
    if (!entity || !entity.position) return;

    const { x, y } = this.position;
    const pos = Cesium.Cartesian3.fromDegrees(
      this.latScale(x),
      this.longScale(y)
    );
    entity.position = pos;

    const lifeTime =
      clock.currentTime.secondsOfDay - clock.startTime.secondsOfDay;
    if (lifeTime <= this.burstTime) {
      entity.model.color = Cesium.Color.fromAlpha(
        this.color,
        this.alphaScale(lifeTime)
      );
    }

    const heading = this.velocity.heading() + Cesium.Math.toRadians(90);
    var pitch = 0;
    var roll = 0;
    var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
    var orientation = Cesium.Transforms.headingPitchRollQuaternion(pos, hpr);
    entity.orientation = orientation;
    if (!this.crop) return;
    if (
      this.longScale(y) < south ||
      this.longScale(y) > north ||
      this.latScale(x) > east ||
      this.latScale(x) < west
    ) {
      if (!entity.show) viewer.entities.remove(entity);
      entity.show = false;
    }
  }
}

export default CesiumBird;
