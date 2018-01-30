import React, { cloneElement, Children } from 'react'
import cx from 'classnames'

import Header from 'components/header'
import Map from 'pages/map'
import Locator from 'components/locator'
import Home from 'pages/home'
// import Intro from 'pages/intro'
import Sidebar from 'components/sidebar'
import Legend, { LegendLayers } from 'components/legend'

import styles from './layout-styles.scss'

const Layout = ({
  children,
  location,
  route,
  layers,
  section,
  history,
  interaction
}) => {
  const isHome = route === 'home'
  // const isIntro = route === 'intro'
  const zoomLevel = `${route}|${section.section}`
  return (
    <div
      className={cx(styles.container, {
        [styles.containerHover]: interaction === 'hover'
      })}
    >
      <Header className={cx(styles.header, styles.headerHidden)} />
      <div className={styles.body}>
        {!isHome &&
          Children.map(
            children,
            child =>
              child.key === location.pathname && (
                <Sidebar
                  route={route}
                  hidden={isHome /* || isIntro */}
                  className={cx(styles.col, styles.sidebar)}
                >
                  {cloneElement(child)}
                </Sidebar>
              )
          )}
        {!isHome /* && !isIntro */ && (
          <Locator route={route} history={history} />
        )}
        {isHome && <Home />}
        {/* {isIntro && <Intro />} */}
        <Map className={cx(styles.col, styles.map)} zoomLevel={zoomLevel} />
        {layers && (
          <Legend>
            <LegendLayers section={route} layers={layers} />
          </Legend>
        )}
      </div>
    </div>
  )
}

export default Layout
