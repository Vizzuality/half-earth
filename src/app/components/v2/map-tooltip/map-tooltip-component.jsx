import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'he-components';
import chevronIcon from 'assets/icons/icon-chevron.svg';
import closeIcon from 'assets/icons/icon-cross.svg';

import styles from './map-tooltip-styles.scss';

const ACTION_TEXT = { story: 'go to story', place: 'go to landscape view' };

class MapTooltipComponent extends Component {
  constructor(props) {
    super(props);
    this.height = 450;
    this.width = 145;
  }

  componentDidMount() {
    this.height = this.tooltip.clientHeight + 25;
  }

  render() {
    const { x, y, type, title, image, text, url, handleTooltipClose } = this.props;
    return (
      <div
        className={styles.container}
        style={{ transform: `translate(${x - this.width}px, ${y - this.height}px)` }}
        ref={tooltip => {
          this.tooltip = tooltip;
        }}
      >
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
            <a
              href={url}
              className={styles.linkButton}
              target="_blank"
              rel="noopener noreferrer"
              theme={{ button: styles.linkButton }}
            >
              <span className={styles.actionText}>
                {ACTION_TEXT[type]}
              </span>
              <Icon icon={chevronIcon} theme={{ icon: styles.chevronIcon }} />
            </a>
          </section>
        </section>
      </div>
    );
  }
}

MapTooltipComponent.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  handleTooltipClose: PropTypes.func
};

MapTooltipComponent.defaultProps = {
  image: '',
  text: '',
  url: '#',
  x: 0,
  y: 0,
  handleTooltipClose: () => {
  }
};

export default MapTooltipComponent;
