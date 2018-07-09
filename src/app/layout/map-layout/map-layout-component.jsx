import React from 'react';
import cx from 'classnames';
import Map from 'pages/map';
import styles from './map-layout-styles.scss';

const MapLayoutComponent = () => {
  return (
    <div>
      <h1>Your iframe map is...</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>drum roll.....</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>here!</h2>
      <Map className={cx(styles.col, styles.map)} zoomLevel="home|home" />
    </div>
  );
};

export default MapLayoutComponent;
