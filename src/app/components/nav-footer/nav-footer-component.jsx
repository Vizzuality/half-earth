import React from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'

import PopUp from 'components/pop-up'
import ModalContent from './nav-footer-modal-content'

import styles from './nav-footer-styles.scss'

const NavFooter = ({
  className,
  from,
  to,
  openPopUpNavFooter,
  popUp,
  closePopUp
}) => (
  <div className={cx(className, styles.container)}>
    <div className={styles.controls}>
      <Link className={styles.back} to={from}>
        Go Back
      </Link>
      <Link className={styles.forth} to={to} />
    </div>
    <div className={styles.partnerFooter}>
      <div className={styles.containImages}>
        <a href="https://mol.org/" target="_blank">
          <img width="100%" src="/img/partners/mol_logo.png" alt="mol" />
        </a>
        <a href="https://www.nationalgeographic.com/" target="_blank">
          <img
            width="100%"
            src="/img/partners/nat_geo_logo.png"
            alt="national geographic"
          />
        </a>
        <a href="http://www.vizzuality.com/" target="_blank">
          <img
            width="100%"
            src="/img/partners/logo_vizz.png"
            alt="vizzuality"
          />
        </a>
      </div>
      <span className={styles.linkPartner} onClick={() => openPopUpNavFooter()}>
        Partners
      </span>
    </div>
    <PopUp open={popUp} close={() => closePopUp()}>
      <ModalContent />
    </PopUp>
  </div>
)
export default NavFooter
