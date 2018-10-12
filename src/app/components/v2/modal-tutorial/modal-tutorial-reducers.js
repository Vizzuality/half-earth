import Cookies from 'universal-cookie';

import * as actions from './modal-tutorial-actions';

const cookies = new Cookies();

const firstVisit = cookies.get('visited') === null || cookies.get('visited') === undefined;

export const initialState = { isOpen: firstVisit || false };

const setModalTutorialParams = (state, { payload }) => ({ ...state, ...payload });

export default { [actions.setModalTutorialParams]: setModalTutorialParams };
