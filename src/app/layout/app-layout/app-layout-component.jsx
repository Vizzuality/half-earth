import React from 'react';
import cx from 'classnames';

import Header from 'components/header';
import Map from 'pages/map';
import Locator from 'components/locator';
import Home from 'pages/home';
import Sidebar from 'components/sidebar';
import Legend, { LegendLayers } from 'components/legend';

import styles from './app-layout-styles.scss';

import Global from 'pages/global';
import Regional from 'pages/regional';
import Explore from 'pages/explore';

const pages = {
  global: Global,
  regional: Regional,
  explore: Explore
};

const Layout = ({ isHome, route, layers, section }) => {
  const zoomLevel = `${route}|${section.section}`;
  const Component = pages[route];
  return (
    <div className={cx(styles.container)}>
      <Header className={cx(styles.header, styles.headerHidden)} />
      <div className={styles.body}>
        {!isHome && (
          <Sidebar
            route={route}
            hidden={isHome}
            className={cx(styles.col, styles.sidebar)}
          >
            <Component />
          </Sidebar>
        )}
        {isHome ? <Home /> : <Locator route={route} />}
        <Map className={cx(styles.col, styles.map)} zoomLevel={zoomLevel} />
        {layers && (
          <Legend>
            <LegendLayers section={route} layers={layers} />
          </Legend>
        )}
      </div>
    </div>
  );
};

export default Layout;
