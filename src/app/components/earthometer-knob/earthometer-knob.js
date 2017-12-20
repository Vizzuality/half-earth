import { connect } from 'react-redux'

import EarthometerComponent from './earthometer-component'
import * as actions from './earthometer-actions'
import reducers from './earthometer-reducers'
import initialState from './initial-state'

const mapStateToProps = ({ earthSaved }) => ({ earthSaved: earthSaved.value })

export { initialState, actions, reducers }
export default connect(mapStateToProps, actions)(EarthometerComponent)
