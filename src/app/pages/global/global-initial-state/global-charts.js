const { parseInt } = window;

const defaultFilter = d => parseInt(d.scenario, 10) === 0 && d.taxa !== 'all';
// const defaultChartSorter = key => (a, b) => {
//   if (a[key] > b[key]) return -1
//   if (a[key] < b[key]) return 1
//   return 0
// }
const defaultParser = (d, key) =>
  d
    .filter(defaultFilter)
    .map(d => ({ ...d, [key]: parseFloat(d[key]) }))
    // .sort(defaultChartSorter(key))
    .map((d, i, l) => ({ ...d, isLast: i === l.length - 1 }));

const classifyScenarios = data =>
  Array.isArray(data) &&
  data.reduce((acc, next) => {
    const scenario = acc[next.scenario] || [];
    const scenarios = [...scenario, next];

    return { ...acc, [next.scenario]: scenarios };
  }, {});

export default {
  globalScaleBiodiversity: {
    data: [],
    color: 'blue',
    legend: 'Number of described species for each group.',
    provider:
      'https://storage.googleapis.com/cdn.mol.org/half-earth/data/reserve-coverage/all-taxa-old.json',
    key: 'totalSpecies',
    parser: data => defaultParser(data, 'totalSpecies')
  },
  globalScaleProtectedAreas: {
    data: [],
    domain: [0, 100],
    color: 'purple',
    legend:
      'Percentage of species for which the global protected area network provides sufficient coverage.',
    provider:
      'https://storage.googleapis.com/cdn.mol.org/half-earth/data/reserve-coverage/all-taxa.json',
    key: 'percentProtectedCurrently',
    parser: data => defaultParser(data, 'percentProtectedCurrently')
  },
  globalConservationPrioritization: {
    data: {},
    domain: [0, 100],
    color: 'violet',
    legend:
      'Percentage of species for which the global protected area network provides sufficient coverage.',
    provider:
      'https://storage.googleapis.com/cdn.mol.org/half-earth/data/reserve-coverage/all-taxa.json',
    key: 'percentSpeciesMeetingTargetProtectedAreaViaAny',
    parser: data =>
      classifyScenarios(
        data.filter(d => d.taxa !== 'all').map(d => ({
          ...d,
          percentSpeciesMeetingTargetProtectedAreaViaAny: parseFloat(
            d.percentSpeciesMeetingTargetProtectedAreaViaAny
          )
        }))
      )
  }
};
