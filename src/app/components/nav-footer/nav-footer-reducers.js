import { actions as popUpActions } from 'components/pop-up'

export default {
  [popUpActions.openPopUpNavFooter]: (state, { payload }) => {
    console.log('vacios')
    return {
      ...state,
      popUp: true
    }
  },
  [popUpActions.closePopUp]: (state, { payload }) => ({
    ...state,
    popUp: false
  })
}
