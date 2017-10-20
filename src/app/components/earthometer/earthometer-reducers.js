import * as actions from './earthometer-actions'
import { assign } from 'app/utils'

export default {
  [actions.setEarthSaved]: (state, { payload }) =>
    assign(state, { value: Math.max(Math.min(payload, 50), 15) })
}
