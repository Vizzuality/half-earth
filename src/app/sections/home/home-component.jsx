import React from 'react'
import cx from 'classnames'

import Zoom from 'components/zoom'
import zoomStyles from './zoom-theme.scss'

const Home = props => (
  <Zoom className={cx(zoomStyles.zoom, zoomStyles.home)} theme={zoomStyles} />
)

export default Home
