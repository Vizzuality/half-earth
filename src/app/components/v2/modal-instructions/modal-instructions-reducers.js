import * as actions from './modal-instructions-actions';

export const initialState = { isOpen: false };

const setModalInstructionsParams = (state, { payload }) => ({ ...state, ...payload });

export default { [actions.setModalInstructionsParams]: setModalInstructionsParams };
