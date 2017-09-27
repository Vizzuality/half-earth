import { connect } from 'react-redux'

import LocalComponent from './local-component'
import * as actions from './local-actions'
import { actions as mapActions } from 'pages/map'
import reducers from './local-reducers'
import initialState from './initial-state'

export { actions, reducers, initialState }

const mapStateToProps = ({ local }) => ({ local })

export default connect(mapStateToProps, mapActions)(LocalComponent)
