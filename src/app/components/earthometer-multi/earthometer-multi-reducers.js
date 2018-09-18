import * as actions from './earthometer-multi-actions';
import { maxClamp } from 'app/utils';

const setValue = (saved, min, max) =>
  (state, { payload }) => ({ ...state, [`${saved}Saved`]: { value: maxClamp(payload, min, max) } });

export default {
  [actions.setLandSaved]: setValue('land', 15, 50),
  [actions.setOceanSaved]: setValue('ocean', 15, 50),
  [actions.setTab]: (state, { payload }) => ({ ...state, selected: payload })
};
