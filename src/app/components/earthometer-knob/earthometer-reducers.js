import * as actions from './earthometer-actions'
import { assign, clamp } from 'app/utils'

export default {
  [actions.setEarthSaved]: (state, { payload }) =>
    assign(state, { value: clamp(payload, 15, 50) })
}
