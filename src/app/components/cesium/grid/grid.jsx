import { Component } from 'react';
const { Cesium } = window;

class CesiumGrid extends Component {
  loaded = false;
  componentDidMount() {
    // SHOULD WORK BUT SEEMS THAT THE LAYER IS ON TOP
    // OF THE MATERIAL SO YOU CAN'T SEE IT
    //
    // var material = Cesium.Material.fromType('Grid');
    // material.uniforms.color = Cesium.Color.WHITE.withAlpha(0.5);
    // material.uniforms.lineCount = new Cesium.Cartesian2(12, 9);
    // this.viewer.scene.globe.material = material;
    this.worldRectangle = new Cesium.Primitive({
      geometryInstances: new Cesium.GeometryInstance({
        geometry: new Cesium.RectangleGeometry({
          rectangle: Cesium.Rectangle.fromDegrees(-180.0, -90.0, 180.0, 90.0),
          vertexFormat: Cesium.EllipsoidSurfaceAppearance.VERTEX_FORMAT
        })
      }),
      appearance: new Cesium.EllipsoidSurfaceAppearance({
        aboveGround: false
      }),
      show: true
    });
    const gridMaterial = Cesium.Material.fromType('Grid', {
      color: Cesium.Color.WHITE.withAlpha(0.5),
      lineCount: new Cesium.Cartesian2(360, 180)
    });
    this.worldRectangle.appearance.material = gridMaterial;

    this.loadTexture();

    // WORKS BUT THE GRIS SIZE IS NOT FIXED, SO NOT USEFUL
    //
    // const grid = new Cesium.GridImageryProvider({
    //   cells: 4,
    //   glowWidth: 1,
    //   color: Cesium.Color.WHITE.withAlpha(0.1),
    //   glowColor: Cesium.Color.WHITE.withAlpha(0.1),
    //   backgroundColor: Cesium.Color.WHITE.withAlpha(0)
    // });
    // this.viewer.imageryLayers.addImageryProvider(grid);
  }

  componentDidUpdate() {
    if (!this.loaded) {
      this.loadTexture();
      this.loaded = true;
    }
  }

  loadTexture() {
    if (this.props.viewer) {
      this.props.viewer.scene.primitives.add(this.worldRectangle);
    }
  }

  render() {
    return null;
  }
}

export default CesiumGrid;
