import { connect } from 'react-redux'
import MapComponent from './map-component'
import initialState from './initial-state'
import * as actions from './map-actions'
import reducers from './map-reducers'

export { actions, reducers, initialState }
const mapStateToProps = ({ map }) => ({ map })

export default connect(mapStateToProps)(MapComponent)
