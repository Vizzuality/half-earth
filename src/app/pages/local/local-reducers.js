import { actions as popUpActions } from 'components/pop-up'

export default {
  [popUpActions.openPopUp]: (state, { payload }) => ({
    ...state,
    popUp: {
      ...state.popUp,
      open: true,
      selected: state.popUp.content[payload]
    }
  }),
  [popUpActions.closePopUp]: (state, { payload }) => ({
    ...state,
    popUp: { ...state.popUp, open: false, selected: null }
  })
}
