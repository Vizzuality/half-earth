import * as actions from './root-actions';

export const initialState = { isTouchScreen: false };

const setIsTouchScreenState = state => ({ ...state, isTouchScreen: true });

export default { [actions.setIsTouchScreenState]: setIsTouchScreenState };
