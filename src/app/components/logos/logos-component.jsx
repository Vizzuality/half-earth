import React from 'react';
import PopUp from 'components/pop-up';
import ModalContent from './nav-footer-modal-content';
import styles from './logos-styles';

const Logos = ({ openPopUpNavFooter, closePopUp, popUp }) => [
  (
    <div key="logos" className={styles.partnerFooter}>
      <span className={styles.linkPartner} onClick={() => openPopUpNavFooter()}>
        Partners
      </span>
    </div>
  ),
  (
    <PopUp key="popup" open={popUp} close={() => closePopUp()}>
      <ModalContent />
    </PopUp>
  )
];

export default Logos;
