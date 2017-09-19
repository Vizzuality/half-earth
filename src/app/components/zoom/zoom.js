import { createElement } from 'react'
import ZoomComponent from './zoom-component'
import { connect } from 'react-redux'

import styles from './zoom-styles.scss'

import * as actions from './zoom-actions'
import reducers from './zoom-reducers'
import initialState from './initial-state'

const ZoomContainer = props =>
  createElement(ZoomComponent, { ...props, onClick: props.setZoom })

const mapStateToProps = state => state.zoom

export { actions, reducers, initialState, styles }
export default connect(mapStateToProps, actions)(ZoomContainer)
