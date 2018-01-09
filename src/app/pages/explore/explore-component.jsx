import React from 'react'
import Expand from './components/expand'
import Row from './components/row'

const Explore = ({
  landCoverFold,
  someValue,
  opacity,
  toggleFold,
  toggleValue,
  updateOpacity,
  ...props
}) => (
  <div>
    Explore
    <div>
      <Expand
        {...{
          isOpen: landCoverFold.isOpen,
          expand: () => toggleFold('landCoverFold'),
          label: 'Land Cover'
        }}
      >
        <Row
          {...{ someValue, toggleValue, opacity }}
          updateOpacity={value =>
            updateOpacity({ path: ['opacity', 'value'], value })}
        />
      </Expand>
    </div>
  </div>
)

export default Explore
