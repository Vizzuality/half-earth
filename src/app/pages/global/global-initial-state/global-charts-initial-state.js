const { parseInt } = window

const defaultFilter = d => parseInt(d.scenario, 10) === 0 && d.taxa !== 'all'
const defaultSorter = key => (a, b) => {
  if (a[key] > b[key]) return 1
  if (a[key] < b[key]) return -1
  return 0
}

const defaultParser = (d, key) =>
  d.filter(defaultFilter).sort(defaultSorter(key))

export default {
  globalScaleBiodiversity: {
    data: [],
    provider:
      'https://storage.googleapis.com/cdn.mol.org/half-earth/data/reserve-coverage/all-taxa-old.json',
    key: 'totalSpecies',
    parser: data => defaultParser(data, 'totalSpecies')
  },
  globalScaleProtectedAreas: {
    data: [],
    provider:
      'https://storage.googleapis.com/cdn.mol.org/half-earth/data/reserve-coverage/all-taxa.json',
    key: 'percentProtectedCurrently',
    parser: data => defaultParser(data, 'percentProtectedCurrently')
  },
  globalConservationPrioritization: {
    data: [],
    provider:
      'https://storage.googleapis.com/cdn.mol.org/half-earth/data/reserve-coverage/all-taxa.json',
    key: 'percentSpeciesMeetingTargetProtectedAreaViaAny',
    parser: data =>
      data
        .filter(d => d.taxa !== 'all')
        .sort(defaultSorter('percentSpeciesMeetingTargetProtectedAreaViaAny'))
  }
}
