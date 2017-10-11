import React from 'react'
import { Link } from 'react-router-dom'

import uiStyles from 'app/styles/ui'
import styles from './intro-styles'

const Intro = props => (
  <div className={styles.container}>
    <h1>Intro</h1>
    <Link className={uiStyles.button} to="/local">
      Next
    </Link>
  </div>
)

export default Intro
