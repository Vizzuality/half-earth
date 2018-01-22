import React from 'react'
import find from 'lodash/find'
import cx from 'classnames'

import PopUp from 'components/pop-up/pop-up'
import Expand from './components/expand'
import Row from './components/row'
import Toggle from './components/toggle'
import Info from './components/info'
import Opacity from './components/opacity'

import rowStyles from './components/row/row-styles'
import styles from './pane-styles'

const Layer = ({
  l,
  layer,
  opacities,
  page,
  setLayerOpacity,
  toggleLayer,
  openPopup
}) => (
  <Row key={layer.name}>
    <Toggle
      label={l.label}
      isOn={layer.visible}
      toggle={() => toggleLayer({ name: layer.name })}
    />
    <div className={rowStyles.buttons}>
      {layer.info && <Info onClick={() => openPopup(layer.info)} />}
      <Opacity
        disabled={!layer.visible}
        label="opacity"
        value={layer.opacity}
        options={opacities}
        update={value => setLayerOpacity({ name: layer.name, value })}
      />
    </div>
  </Row>
)

const PaneList = props => {
  const {
    page,
    panes,
    layers,
    togglePane,
    toggleLayer,
    setLayerOpacity,
    opacities,
    openPopup,
    className
  } = props
  return panes ? (
    <ul key="pane-info-rows" className={cx(className, styles.panes)}>
      {panes.map(pane => (
        <li key={pane.name}>
          <Expand
            isOpen={pane.isOpen}
            expand={() => togglePane(pane.key)}
            label={pane.name}
            info={pane.info}
            openPopup={openPopup}
          >
            {pane.layers &&
              pane.layers.map(l => {
                const layer = find(layers, { name: l.key })
                return (
                  layer && (
                    <Layer
                      key={l.key}
                      {...{
                        l,
                        layer,
                        opacities,
                        page,
                        setLayerOpacity,
                        toggleLayer,
                        openPopup
                      }}
                    />
                  )
                )
              })}
            {pane.panes && (
              <PaneList
                {...{
                  ...props,
                  panes: pane.panes,
                  className: cx(className, { [styles.panesChild]: true })
                }}
              />
            )}
          </Expand>
        </li>
      ))}
    </ul>
  ) : null
}

const Pane = props => {
  const { popup, closePopup, selectedPopup } = props
  return [
    <PopUp key="pane-info-popup" open={popup.open} close={() => closePopup()}>
      <div className={styles.popup}>
        <div className={styles.popupContent}>
          {selectedPopup &&
          selectedPopup.title && <h1>{selectedPopup.title}</h1>}
          {selectedPopup &&
            selectedPopup.content &&
            selectedPopup.content.map(p => <p key={p}>{p}</p>)}
          {selectedPopup &&
            selectedPopup.formulas &&
            selectedPopup.formulas.map(f => (
              <pre key={f} className={styles.formula}>
                {f}
              </pre>
            ))}
          {selectedPopup &&
          selectedPopup.keywords && (
            <p className={styles.keyWords}>
              <h2 className={styles.keywordLabel}>Keywords</h2>
              <div className={styles.keywordList}>
                {selectedPopup.keywords.join(', ')}
              </div>
            </p>
          )}
        </div>
      </div>
    </PopUp>,
    <div key="pane-list" className={styles.paneContainer}>
      <PaneList {...props} />
    </div>
  ]
}

export default Pane
