import React from 'react';
import cx from 'classnames';
import { themr } from 'react-css-themr';
import Link from 'redux-first-router-link';
import styles from './nav-footer-styles.scss';
import { APP } from 'app/router';

const backwards = { home: 'local', local: 'regional', regional: 'global' };
const forwards = { home: 'start', regional: 'local', global: 'regional' };

const NavFooter = ({ className, from, to, theme }) => {
  const linkFrom = { type: APP };
  if (from) {
    linkFrom.payload = { section: from };
    linkFrom.meta = { analytics: [ backwards[from], 'Next Step', `Go back to ${from}` ] };
  }
  const linkTo = { type: APP };
  if (to) {
    linkTo.payload = { section: to };
    linkTo.meta = { analytics: [ forwards[to], 'Next Step', `Advance to ${to}` ] };
  }

  return (
    <div className={cx(theme.container, className)}>
      <div className={theme.controls}>
        <div className={theme.back}>
          <span className={theme.label}>Back</span>
          <Link to={linkFrom} className={theme.arrowButton} />
        </div>
        <div className={theme.forth}>
          <Link to={linkTo} className={theme.arrowButton} />
          <span className={theme.label}>Next</span>
        </div>
      </div>
    </div>
  );
};
export default themr('NavFooter', styles)(NavFooter);
