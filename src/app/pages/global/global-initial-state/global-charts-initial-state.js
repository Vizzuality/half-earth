const { parseInt } = window

const defaultFilter = d => parseInt(d.scenario, 10) === 0 && d.taxa !== 'all'
const defaultChartSorter = key => (a, b) => {
  if (a[key] > b[key]) return -1
  if (a[key] < b[key]) return 1
  return 0
}
const defaultParser = (d, key) =>
  d
    .map(d => ({ ...d, [key]: parseInt(d[key]) }))
    .filter(defaultFilter)
    .sort(defaultChartSorter(key))

const classifyScenarios = data =>
  data.reduce((acc, next) => {
    const scenario = acc[next.scenario] || []
    const scenarios = [...scenario, next]

    return { ...acc, [next.scenario]: scenarios }
  }, {})

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
      classifyScenarios(
        data.filter(d => d.taxa !== 'all').map(d => ({
          ...d,
          percentSpeciesMeetingTargetProtectedAreaViaAny: parseInt(
            d.percentSpeciesMeetingTargetProtectedAreaViaAny,
            10
          )
        }))
      )
  }
}
