import React from 'react'

const CesiumMap = ({ layers, mapId, children }) => (
  <div id={mapId}>
    {React.Children.map(children, ch =>
      React.cloneElement(ch, { ...ch.props, layers })
    )}
  </div>
)

export default CesiumMap
