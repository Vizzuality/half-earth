import * as actions from './modal-share-actions';

export const initialState = { isOpen: false, linkActive: true };

const setModalShareParams = (state, { payload }) => ({ ...state, ...payload });

export default { [actions.setModalShareParams]: setModalShareParams };
