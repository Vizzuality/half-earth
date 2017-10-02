import * as actions from './global-actions'
import { assign } from 'utils'

export default {
  [actions.selectVertebrateSpecies]: (state, { payload }) => {
    const { vertebrateSpecies } = state
    return {
      ...state,
      vertebrateSpecies: assign(vertebrateSpecies, { selected: payload })
    }
  }
}
