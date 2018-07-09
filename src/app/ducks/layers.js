const ADD_LAYER = 'layers/ADD_LAYER';
const REMOVE_LAYER = 'layers/REMOVE_LAYER';

const layers = {
  byId: {}
};

function layersReducer (state = layers, action) {
  switch (action.type) {
    case ADD_LAYER: {
      return state;
    }
    case REMOVE_LAYER: {
      return state;
    }
    default:
      return state;
  }
}

export default layersReducer;
