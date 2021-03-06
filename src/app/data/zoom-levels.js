const { PI } = Math;
const toRadians = deg => deg * (PI / 180);
const PI_OVER_FOUR = PI / 4;

export const home = [
  1553050.2420231537,
  -7982538.989058298,
  208217.95614838324
];

const homeZoom = [
  home,
  {
    orientation: {
      heading: 5.92122801224943,
      pitch: -0.29198679662794125,
      roll: 6.26520814284261
    }
  },
  {
    direction: {
      x: -0.45398661837491283,
      y: 0.3809856883575422,
      z: 0.8054477361090793
    },
    up: {
      x: 0.1122919730791525,
      y: -0.872300942381824,
      z: 0.4759008076288302
    },
    position: {
      x: 1763712.746442791,
      y: -6539514.672847353,
      z: 1589391.5741452249
    }
  }
];

export default {
  home: homeZoom,
  local: [
    [5760629.535260948, 2406368.791758723, -2400118.3266120856],
    {
      orientation: {
        heading: toRadians(-15.0),
        pitch: PI_OVER_FOUR,
        roll: 0.0
      }
    }
  ],

  regional: [[6117078.691789706, 2713298.848612979, -4028512.8895655624], null],
  'regional:4': [
    [18164909.39474914, -5635861.180443844, -985462.2374030603],
    null
  ],
  // global: [[18164909.39474914, -5635861.180443844, -985462.2374030603], null]
  global: [[16950078.329516124, 6216309.802733912, -985462.2374030603], null]
};
