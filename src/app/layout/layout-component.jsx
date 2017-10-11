import React, { cloneElement, Children } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import cx from 'classnames'

import Header from 'components/header'
import Map from 'pages/map'
import Home from 'pages/home'
import Intro from 'pages/intro'
import Sidebar from 'components/sidebar'

import styles from './layout-styles.scss'
const scope = path => path.replace('/', '') || 'home'

const Layout = ({ children, location, sidebar, ...props }) => {
  const route = scope(location.pathname)
  const isHome = route === 'home'
  const isIntro = route === 'intro'

  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <div className={styles.body}>
        {Children.map(
          children,
          child =>
            child.key === location.pathname && (
              <Sidebar
                hidden={isHome || isIntro}
                className={cx(styles.col, styles.sidebar)}
              >
                {cloneElement(child)}
              </Sidebar>
            )
        )}
        {isHome && <Home />}
        {isIntro && <Intro />}
        <Map className={cx(styles.col, styles.map)} zoomLevel={route} />
      </div>
    </div>
  )
}

const mapStateToProps = state => state

export default withRouter(connect(mapStateToProps)(Layout))
