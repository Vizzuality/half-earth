import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Button, Icon } from 'he-components';

import styles from './accordion-card-styles.scss';

class AccordionCardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  componentDidMount() {
    const { isOpen } = this.props;
    this.setState({ isOpen });
  }

  render() {
    const { icon, title, children } = this.props;
    const { isOpen } = this.state;
    return (
      <div className={cx(styles.cardContainer, { [styles.open]: isOpen })}>
        <div className={styles.headerContainer}>
          <h2 className={styles.groupTitle}>{title}</h2>
          <Button onClick={() => this.setState({ isOpen: !isOpen })} theme={{ button: styles.toggleButton }}>
            <Icon icon={icon} theme={{ icon: isOpen ? styles.icon : styles.iconCollapse }} />
          </Button>
        </div>
        {children}
      </div>
    );
  }
}

AccordionCardComponent.propTypes = {
  isOpen: PropTypes.bool,
  icon: PropTypes.object,
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};

AccordionCardComponent.defaultProps = { isOpen: false, icon: null };

export default AccordionCardComponent;
