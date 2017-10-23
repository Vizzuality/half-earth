import React from 'react'
import PopUp from 'components/pop-up'
import cx from 'classnames'
import ModalContent from './nav-footer-modal-content'

import styles from './logos-styles'

const logos = [
  {
    url: 'https://eowilsonfoundation.org/',
    img: 'wilson_white.png',
    alt: 'Wilson Biodiversity Foundation',
    className: styles.logoWilson
  },
  {
    url: 'https://mol.org/',
    img: 'mol_logo_white.png',
    alt: 'mol',
    className: styles.logoMoll
  },
  {
    url: 'http://www.vizzuality.com/',
    img: 'logo_vizz_white.png',
    alt: 'Vizzuality',
    className: styles.logoVizz
  }
]

const Logos = ({ openPopUpNavFooter, closePopUp, popUp }) => [
  <div key="logos" className={styles.partnerFooter}>
    <span className={styles.linkPartner} onClick={() => openPopUpNavFooter()}>
      Partners
    </span>
    <div className={styles.containImages}>
      {logos.map(({ url, className, img, alt }, k) => (
        <a
          key={k}
          href={url}
          style={{ backgroundImage: `url(/img/partners/${img})` }}
          className={cx(className, styles.logo)}
          target="_blank"
        >
          {alt}
        </a>
      ))}
    </div>
  </div>,
  <PopUp key="popup" open={popUp} close={() => closePopUp()}>
    <ModalContent />
  </PopUp>
]

export default Logos
