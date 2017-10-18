import React from 'react'
import cx from 'classnames'
import PopUp from 'components/pop-up'

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
        <img width="100%" src="/img/partners/mol_logo.png" />
        <img width="100%" src="/img/partners/nat_geo_logo.png" />
      </div>
      <span className={styles.linkPartner} onClick={() => openPopUpNavFooter()}>
        Partners
      </span>
    </div>
    <PopUp open={popUp} close={() => closePopUp()}>
      <div className={styles.footerModal}>
        <div className={styles.containt}>
          <h1>Data Partners</h1>
          <div className={styles.containImages}>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/1.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/2.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/3.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/4.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/5.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/6.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/7.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/8.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/9.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/10.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/11.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/12.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/13.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/14.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/15.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/16.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/17.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/18.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/19.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/20.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/21.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/22.png" />
            </div>
          </div>

          <h1>Research Partners</h1>
          <div className={styles.containImages}>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/23.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/24.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/25.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/26.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/27.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/28.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/29.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/30.png" />
            </div>
          </div>

          <h1>Engagement</h1>
          <div className={styles.containImages}>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/31.png" />
            </div>
            <div className={styles.imageContainer}>
              <img src="/img/partners/partner_image/32.png" />
            </div>
          </div>
        </div>
      </div>
    </PopUp>
  </div>
)
export default NavFooter
