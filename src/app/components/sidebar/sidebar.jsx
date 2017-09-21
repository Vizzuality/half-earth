import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'

import Zoom from 'components/zoom'
import zoomStyles from './sidebar-styles.scss'

const getMatch = match => match.url.replace('/', '')

const Sidebar = props => (
  <Zoom
    active={getMatch(props.match)}
    className={cx(zoomStyles.zoom, zoomStyles.sidebar)}
    theme={zoomStyles}
  />
)

const mapStateToProps = state => state

export default connect(mapStateToProps)(Sidebar)
