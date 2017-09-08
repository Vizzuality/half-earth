import React from 'react'
import { Link } from 'react-router-dom'

import bindZoomLevels from 'data/zoom-levels'
const zoomLevels = bindZoomLevels()

const Zoom = props => (
  <ul>
    {Object.keys(zoomLevels).map(l => (
      <li key={l}>
        <Link to={l}>{l}</Link>
      </li>
    ))}
  </ul>
)

export default Zoom
