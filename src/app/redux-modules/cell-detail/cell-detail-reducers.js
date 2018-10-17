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
      all: [ 33, 41, 51, 209, 1420 ],
      amphibians: [ 3, 7, 15, 34, 180 ],
      birds: [ 15, 22, 31, 169, 1010 ],
      cacti: [ 1, 3, 5, 13, 93 ],
      conifers: [ 2, 3, 5, 8, 49 ],
      fishes: [ 53, 143, 353, 442, 3398 ],
      mammals: [ 17, 19, 21, 31, 225 ],
      turtles: [ 1, 3, 4, 6, 22 ]
    },
    rarity: {
      all: [ 0.0001473636, 0.0002036462, 0.0004603508, 0.0016094058, 0.31881176 ],
      amphibians: [ 0.0019410307, 0.00410291585, 0.00891039755, 0.02218424365, 1 ],
      birds: [ 0.000197536, 0.0002720665, 0.0005149996, 0.0011634435, 0.345654228 ],
      cacti: [ 0.0005780369, 0.0034472412, 0.0111445997, 0.0320535461, 1 ],
      conifers: [ 0.0014102132, 0.0029585817, 0.006997214, 0.0128205161, 1 ],
      fishes: [ 0.0000166599, 0.00001947, 0.0000272182, 0.0000658033, 0.0251937304 ],
      mammals: [ 0.0000689826, 0.0001159122, 0.0002832494, 0.0021119192, 0.15453537 ],
      turtles: [ 0.0018561816, 0.003236795, 0.0052568485, 0.0099394885, 1 ]
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
