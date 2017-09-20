// export const home = [-149.08005145269817, 1.8339533001836001, 606366397771028]
// export const home = [-175.96666956767837, 33.01832152194098, 120524376619.79341]
// export const home = [-175.96666956767837, 33.01832152194098, 1500000000]
export const home = [
  -22.643237270227818,
  -2.3289369232938455,
  54883266.847136475
]

/*
height
:
54883266.847136475
latitude
:
-22.643237270227818
longitude
:
-2.3289369232938455
*/

export default Cesium => ({
  hidden: [home, null],
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
  regional: [[22.6063012, -19.4333746, 10000000.0], null],
  global: [[-82.5, 35.09, 18490000.0], null]
})
