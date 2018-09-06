import * as actions from './modal-metadata-actions';

export const initialState = {
  isOpen: false,
  title: '',
  slug: null
};

const setModalMetadataParams = (state, { payload }) => ({
  ...state,
  ...payload
});

export default {
  [actions.setModalMetadataParams]: setModalMetadataParams
};
