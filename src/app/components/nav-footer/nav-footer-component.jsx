import React from 'react'
import cx from 'classnames'
import PopUp from 'components/pop-up'
import ModalContent from './nav-footer-modal-content'

import styles from './nav-footer-styles.scss'

const NavFooter = ({
  className,
  goBack,
  goForth,
  openPopUpNavFooter,
  popUp,
  closePopUp
}) => (
  <div className={cx(className, styles.container)}>
    <div className={styles.controls}>
      <a className={styles.back} onClick={goBack}>
        Go Back
      </a>
      <button className={styles.forth} onClick={goForth} />
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
