import * as actions from './sidebar-actions';
import first from 'lodash/first';
import differenceBy from 'lodash/differenceBy';
import { pick } from 'utils';
import { ofPath, get, set } from 'js-lenses';

export default {
  [actions.openSidebar]: (state, { payload }) => ({ ...state, open: true }),
  [actions.closeSidebar]: (state, { payload }) => ({ ...state, open: false }),
  [actions.toggleSidebar]: (state, { payload }) => ({
    ...state,
    open: !state.open
  }),
  [actions.switchMode]: (states, { payload }) => {
    const $path = ofPath('mode');
    const state = get($path, states);
    const options = pick(state, 'options');
    const selected = pick(state, 'selected');

    const otherOpion = first(differenceBy(options, [{ key: selected }], 'key'));

    const value = {
      ...state,
      selected: pick(otherOpion, 'key')
    };
    return set($path, value, states);
  }
};
