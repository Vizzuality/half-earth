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
