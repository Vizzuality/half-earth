import * as actions from './cell-detail-actions';

export const initialState = {
  data: null,
  loading: false,
  loaded: true,
  error: false,
  histogram: {
    richness: {
      all: [ 31541, 3944, 3334, 1157, 399 ],
      amphibians: [ 4019, 3362, 2598, 887, 333 ],
      birds: [ 31467, 3908, 3342, 1147, 399 ],
      cacti: [ 1097, 1070, 899, 323, 73 ],
      conifers: [ 2434, 2551, 2007, 727, 237 ],
      fishes: [ 65408, 50302, 43343, 14979, 5451 ],
      mammals: [ 31062, 4194, 3363, 1192, 402 ],
      turtles: [ 1883, 2918, 1705, 666, 276 ]
    },
    rarity: {
      all: [ 31381, 3869, 3488, 1253, 385 ],
      amphibians: [ 3960, 3098, 2839, 1013, 286 ],
      birds: [ 30634, 4511, 3449, 1303, 367 ],
      cacti: [ 1245, 956, 928, 323, 10 ],
      conifers: [ 2837, 2238, 1927, 784, 169 ],
      fishes: [ 65618, 50139, 43316, 14966, 5445 ],
      mammals: [ 31477, 3799, 3352, 1216, 370 ],
      turtles: [ 2633, 2061, 1834, 755, 165 ]
    }
  },
  histogramBreaks: {
    richness: {
      fishes: [ 305, 464, 658, 1684, 3469 ],
      conifers: [ 3, 6, 12, 21, 49 ],
      birds: [ 150, 235, 436, 566, 1010 ],
      cacti: [ 2, 6, 20, 41, 93 ],
      all: [ 187, 314, 607, 822, 1420 ],
      mammals: [ 28, 50, 118, 168, 225 ],
      turtles: [ 2, 5, 9, 13, 22 ],
      amphibians: [ 6, 19, 49, 87, 180 ]
    },
    rarity: {
      birds: [
        0.000951457169688,
        0.002118669803344,
        0.004793622966076,
        0.014531712454054,
        0.345654170530923
      ],
      mammals: [
        0.001792715951431,
        0.003774471291193,
        0.009207707575509,
        0.022424884799749,
        0.154535354563766
      ],
      cacti: [ 0.002985045875918, 0.013466473099952, 0.069278172515258, 0.246837471328683, 1 ],
      fishes: [
        0.000017408490252,
        0.000023022433169,
        0.000068605335069,
        0.000226333724869,
        0.00684126820616
      ],
      turtles: [ 0.002971514874607, 0.005810064752986, 0.015415800521987, 0.049977196671277, 1 ],
      all: [
        0.002024310809826,
        0.005479986220463,
        0.017138521295314,
        0.047310862397745,
        0.48067781545632
      ],
      conifers: [ 0.002469027068453, 0.007929522029411, 0.018324173191885, 0.055555470940302, 1 ],
      amphibians: [ 0.003431235180182, 0.009875216978352, 0.04069126767663, 0.139397129600073, 1 ]
    }
  }
};

const fetchCellDetail = state => ({ ...state, loading: true, loaded: false });

const fetchCellDetailFail = (state, { payload }) => ({
  ...state,
  loading: false,
  loaded: false,
  error: payload
});

const fetchCellDetailReady = (state, { payload }) => ({
  ...state,
  loading: false,
  loaded: true,
  data: { ...state.data, [payload.id]: payload.data }
});

export default {
  [actions.fetchCellDetail]: fetchCellDetail,
  [actions.fetchCellDetailFail]: fetchCellDetailFail,
  [actions.fetchCellDetailReady]: fetchCellDetailReady
};
