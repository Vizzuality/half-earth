import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'he-components';
import chevronIcon from 'assets/icons/icon-chevron.svg';
import closeIcon from 'assets/icons/icon-cross.svg';

import styles from './map-tooltip-styles.scss';

const ACTION_TEXT = { story: 'go to story', place: 'go to landscape view' };

const simpleTooltip = ({ title }) => (
  <div className={styles.simpleContainer}>
    <span>
      {'Acadia National Park' || title}
    </span>
  </div>
);

const storiesAndPlacesTooltip = (
  { type, title, image, text, handleTooltipAction, handleTooltipClose }
) => (
  <div className={styles.container}>
    <div style={{ backgroundImage: `url(${image}` }} className={styles.image} />
    <Button onClick={handleTooltipClose} theme={{ button: styles.closeButton }}>
      <Icon icon={closeIcon} theme={{ icon: styles.closeIcon }} />
    </Button>
    <section className={styles.contentSection}>
      <h2 className={styles.title}>
        {title}
      </h2>
      <p className={styles.text}>
        {text}
      </p>
      <section className={styles.actionSection}>
        <Button onClick={handleTooltipAction} theme={{ button: styles.linkButton }}>
          <span className={styles.actionText}>
            {ACTION_TEXT[type]}
          </span>
          <Icon icon={chevronIcon} theme={{ icon: styles.chevronIcon }} />
        </Button>
      </section>
    </section>
  </div>
);

const MapTooltipComponent = ({ simple, ...props }) =>
  simple ? simpleTooltip(props) : storiesAndPlacesTooltip(props);

storiesAndPlacesTooltip.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  text: PropTypes.string,
  handleTooltipAction: PropTypes.func,
  handleTooltipClose: PropTypes.func
};

simpleTooltip.propTypes = { title: PropTypes.string.isRequired };

storiesAndPlacesTooltip.defaultProps = {
  image: '',
  text: 'PropTypes.array',
  handleTooltipAction: () => {
  },
  handleTooltipClose: () => {
  }
};

export default MapTooltipComponent;
