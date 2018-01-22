import { actions as popUpActions } from 'components/pop-up'
import * as keyActions from 'providers/keyboard/keyboard-actions'

const closePopup = state => ({
  ...state,
  popUp: false
})

export default {
  [popUpActions.openPopUpNavFooter]: (state, { payload }) => {
    return {
      ...state,
      popUp: true
    }
  },
  [keyActions.keyUp]: (state, { payload }) =>
    payload.key === 'Escape' ? closePopup(state) : state,
  [popUpActions.closePopUp]: closePopup
}
