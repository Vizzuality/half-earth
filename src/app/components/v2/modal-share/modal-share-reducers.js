import * as actions from './modal-share-actions';

export const initialState = { isOpen: false, linkActive: true, urlToCopy: window.location.href };

const setModalShareParams = (state, { payload }) => ({ ...state, ...payload });

export default { [actions.setModalShareParams]: setModalShareParams };
