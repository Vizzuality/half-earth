const defaultRegional = {
  maxspeed: 0.4,
  maxforce: 0.01,
  separationFactor: 1,
  velocityFactor: 1,
  cohesionFactor: 0.8,
  alignmentFactor: 0.5,
  targetFactor: 0.3,
  pixelSize: 10,
  colorBlendMode: 1,
  colorBlendAmount: 1,
  crop: true,
  targets: [ [ 22.083599, -32.008714 ] ],
  numBirds: 100,
  north: 24.382458,
  south: -34.437568,
  east: 42.014225,
  west: 13.532018
};

export default [
  { ...defaultRegional, position: [ 27.996585, -26.733413 ] },
  { ...defaultRegional, position: [ 24.064945, -9.513859 ] },
  { ...defaultRegional, position: [ 24.876767, -15.93911 ] }
];
