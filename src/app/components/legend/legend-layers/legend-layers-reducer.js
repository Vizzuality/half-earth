import * as popUpActions from 'components/pop-up/pop-up-actions';
import * as keyActions from 'providers/keyboard/keyboard-actions';

const closePopup = state => ({
  ...state,
  popUp: false
});

export default {
  [popUpActions.openPopUpLegend]: (state, { payload }) => {
    return {
      ...state,
      popUp: true
    };
  },
  [keyActions.keyUp]: (state, { payload }) =>
    payload.key === 'Escape' ? closePopup(state) : state,
  [popUpActions.closePopUp]: closePopup
};
