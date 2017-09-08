export const home = [[-82.5, 35.09, 18490000.0], null]
export default Cesium => ({
  local: [
    [22.6063012, -19.4333746, 40000.0],
    {
      orientation: {
        heading: (Cesium && Cesium.Math.toRadians(-15.0)) || null,
        pitch: (Cesium && -Cesium.Math.PI_OVER_FOUR) || null,
        roll: 0.0
      }
    }
  ],
  global: home,
  regional: [[22.6063012, -19.4333746, 10000000.0], null]
})
