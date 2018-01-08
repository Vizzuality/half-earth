import React from 'react'
import Expand from './components/expand'
import Toggle from './components/toggle'

const Explore = ({
  landCoverFold,
  someValue,
  toggleFold,
  toggleValue,
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
        <Toggle isOn={someValue} toggle={() => toggleValue('someValue')} />
      </Expand>
    </div>
  </div>
)

export default Explore
