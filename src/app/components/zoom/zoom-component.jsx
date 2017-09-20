import React from 'react'
import { Link } from 'react-router-dom'
import { themr } from 'react-css-themr'
import cx from 'classnames'

import bindZoomLevels from 'data/zoom-levels'
import styles from './zoom-styles.scss'

const zoomLevels = bindZoomLevels()
const hidden = l => l !== 'hidden'

const Zoom = ({ theme, className }) => (
  <ul className={cx(className, theme.items)}>
    {Object.keys(zoomLevels)
      .filter(hidden)
      .map(l => (
        <li className={cx(theme[`item-${l}`], theme.item)} key={l}>
          <Link className={theme.link} to={l}>
            <span className={theme.label}>{l}</span>
          </Link>
        </li>
      ))}
  </ul>
)

export default themr('Zoom', styles)(Zoom)
