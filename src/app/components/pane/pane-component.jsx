import React from 'react'
import find from 'lodash/find'

import Expand from './components/expand'
import Row from './components/row'
import Toggle from './components/toggle'
import Info from './components/info'
import Opacity from './components/opacity'

import rowStyles from './components/row/row-styles'
import styles from './pane-styles'

const opacity = {
  options: [],
  selected: '100'
}

const toggleValue = console.log.bind(console)
const updateOpacity = console.log.bind(console)
const openInfo = console.log.bind(console)

const Pane = ({ page, panes, layers, togglePane, ...props }) => (
  <ul className={styles.panes}>
    {panes.map(pane => (
      <li key={pane.layers}>
        <Expand
          isOpen={pane.isOpen}
          expand={() => togglePane({ name: pane.name, page })}
          label={pane.name}
        >
          {pane.layers.map(l => {
            const layer = find(layers, { name: l.key })
            // console.log(layer)
            return (
              <Row key={layer.name}>
                <Toggle
                  label={l.label}
                  isOn={layer.visible}
                  toggle={() => toggleValue('someValue')}
                />
                <div className={rowStyles.buttons}>
                  <Opacity
                    disabled={!layer.visible}
                    label="opacity"
                    value={opacity.value}
                    options={opacity.options}
                    update={value =>
                      updateOpacity({ path: ['opacity', 'value'], value })}
                  />
                  <Info onClick={() => openInfo(l.key)} />
                </div>
              </Row>
            )
          })}
        </Expand>
      </li>
    ))}
  </ul>
)

export default Pane
