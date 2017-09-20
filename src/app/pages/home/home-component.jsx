import React from 'react'
import cx from 'classnames'

import Zoom from 'components/zoom'
import styles from './home-styles.scss'
import zoomStyles from './zoom-theme.scss'

const Home = props => (
  <div className={styles.container}>
    <h1 className={cx(styles.title)}>
      Choose <span className={styles.em}>your scenario</span>
    </h1>
    <Zoom className={cx(zoomStyles.zoom, zoomStyles.home)} theme={zoomStyles} />
  </div>
)

export default Home
