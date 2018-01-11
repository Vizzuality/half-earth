import React from 'react'
import find from 'lodash/find'

import { default as PopUp } from 'components/pop-up/pop-up'
import Expand from './components/expand'
import Row from './components/row'
import Toggle from './components/toggle'
import Info from './components/info'
import Opacity from './components/opacity'

import rowStyles from './components/row/row-styles'
import styles from './pane-styles'

const openInfo = console.log.bind(console)

const Pane = ({
  page,
  panes,
  layers,
  togglePane,
  toggleLayer,
  setLayerOpacity,
  opacities,
  ...props
}) => [
  <PopUp
    key="pane-info-popup"
    open={false}
    close={() => console.log('closePopup')}
  />,
  <ul key="pane-info-rows" className={styles.panes}>
    {panes.map(pane => (
      <li key={pane.layers}>
        <Expand
          isOpen={pane.isOpen}
          expand={() => togglePane({ name: pane.name, page })}
          label={pane.name}
        >
          {pane.layers.map(l => {
            const layer = find(layers, { name: l.key })
            return (
              <Row key={layer.name}>
                <Toggle
                  label={l.label}
                  isOn={layer.visible}
                  toggle={() => toggleLayer({ page, name: layer.name })}
                />
                <div className={rowStyles.buttons}>
                  <Opacity
                    disabled={!layer.visible}
                    label="opacity"
                    value={layer.opacity}
                    options={opacities}
                    update={value =>
                      setLayerOpacity({ page, name: layer.name, value })}
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
]

export default Pane
