// export const home = [-149.08005145269817, 1.8339533001836001, 606366397771028]
// export const home = [-175.96666956767837, 33.01832152194098, 120524376619.79341]
// export const home = [-175.96666956767837, 33.01832152194098, 1500000000]
// export const home = [
//   -22.643237270227818,
//   -2.3289369232938455,
//   54883266.847136475
// ]
export const home = [-21.224974466928508, 21.802579565064256, 25000000]

export default Cesium => ({
  home: [
    home,
    {
      orientation: {
        // heading: (Cesium && Cesium.Math.toRadians(-1.0)) || null,
        // pitch: (Cesium && -Cesium.Math.toRadians(Cesium.Math.PI / 16)) || null,
        roll: 0.0
      }
    }
  ],
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

  regional: [[19.9913308, -32.3237066, 3000000.0], null],
  global: [[-82.5, 35.09, 18490000.0], null]
})
