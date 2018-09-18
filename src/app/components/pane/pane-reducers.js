import * as actions from './pane-actions';
import findIndex from 'lodash/findIndex';
import flatten from 'lodash/flatten';
import isArray from 'lodash/isArray';
import { of, set, compose, ofPath, get } from 'js-lenses';

const toPath = values => flatten(
  values
    .filter(v => v >= 0)
    .map(v => [ 'panes', v ])
);

const getPath = (panes, key, path = []) =>
  toPath(
    flatten(
      panes.map(
        (pane, i) =>
          pane.key === key ? path.concat(i) : isArray(pane.panes) ? getPath(pane.panes, key, path.concat(i)) : -1
      )
    )
  );

export const togglePane = (state, { payload }) => {
  const panes = get(of('panes'), state);
  const path = getPath(panes, payload);
  const $currentIsOpen = compose(ofPath(...path), of('isOpen'));

  return set($currentIsOpen, !get($currentIsOpen, state), state);
};

export const setLayerOpacity = (state, { payload: { name, value } }) => {
  const layers = get(of('layers'), state);
  const currentIndex = findIndex(layers, { name });
  const $currentOpacity = compose(ofPath('layers', currentIndex), of('opacity'));

  return set($currentOpacity, value, state);
};

export default {
  [actions.openPopup]: (state, { payload }) => set(of('popup'), { open: true, selected: payload }, state),
  [actions.closePopup]: state => set(of('popup'), { open: false, selected: null }, state)
};
