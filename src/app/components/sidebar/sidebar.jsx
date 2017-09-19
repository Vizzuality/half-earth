import React from 'react'
import cx from 'classnames'

import Zoom from 'components/zoom'
import zoomStyles from './sidebar-styles.scss'

const Sidebar = props => (
  <Zoom
    className={cx(zoomStyles.zoom, zoomStyles.sidebar)}
    theme={zoomStyles}
  />
)

export default Sidebar
