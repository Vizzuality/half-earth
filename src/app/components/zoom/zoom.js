import { createElement } from 'react'
import ZoomComponent from './zoom-component'
import { connect } from 'react-redux'

import * as actions from './zoom-actions'
import reducers from './zoom-reducers'
import initialState from './initial-state'

const ZoomContainer = props =>
  createElement(ZoomComponent, { ...props, onClick: props.setZoom })

const mapStateToProps = state => state.zoom

export { actions, reducers, initialState }
export default connect(mapStateToProps, actions)(ZoomContainer)
