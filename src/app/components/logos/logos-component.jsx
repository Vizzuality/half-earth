import React from 'react';
import cx from 'classnames';
import PopUp from 'components/pop-up';
import ModalContent from './nav-footer-modal-content';
import styles from './logos-styles';

const Logos = ({ openPopUpNavFooter, closePopUp, popUp, theme }) => [
  (
    <div key="logos" className={cx(styles.partnerFooter, theme.partnerFooter)}>
      <span
        className={cx(styles.linkPartner, theme.linkPartner)}
        onClick={() => openPopUpNavFooter()}
      >
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
