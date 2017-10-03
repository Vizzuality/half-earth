import React from 'react'
import { assign } from 'utils'

const Placeholder = ({ name, ...style }) => (
  <div
    style={assign(style, {
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain'
    })}
  />
)
export default Placeholder
