import React, { Component } from 'react';
import cx from 'classnames';
import katex from 'katex';
import styles from './katex-styles';

class Katex extends Component {
  componentDidMount () {
    katex.render(this.props.children, this.el);
  }
  render () {
    const { className } = this.props;
    return (
      <span
        className={cx(className, styles.latexBlock)}
        ref={el => {
          this.el = el;
        }}
      />
    );
  }
}

export default Katex;
