import React, { PureComponent, Children, cloneElement } from 'react';
import { interval } from 'rxjs/observable/interval';

import { generate as uid } from 'shortid';
import cx from 'classnames';
import styles from './scroller-styles.scss';

class Scroller extends PureComponent {
  constructor (props) {
    super(props);
    this.onTick = this.onTick.bind(this);
    this.onError = this.onError.bind(this);
    this.onComplete = this.onComplete.bind(this);
    this.source = interval(props.interval || 100);
    this.offset = -1;
    this.nodes = {};
  }

  componentDidMount () {
    const $playhead = document.getElementById('playhead');
    this.playheadPosition = $playhead.getBoundingClientRect().top;
    this.subscription = this.source.subscribe(
      this.onTick,
      this.onError,
      this.onComplete
    );
  }

  getOffset (el) {
    return el.scrollTop;
  }

  onTick () {
    Object.keys(this.nodes).map(k => {
      const { el, cb } = this.nodes[k];
      const rect = el.getBoundingClientRect();
      const top = rect.top - this.playheadPosition;
      const bottom = rect.bottom - this.playheadPosition;

      if (top !== this.offset && top <= 0 && bottom >= 0) {
        cb();
        this.offset = top;
      }
    });
  }

  onError (e) {
    console.error(e);
  }

  onComplete () {
    console.log('Completed');
  }

  render () {
    const { children, playhead, className } = this.props;
    return [
      <div
        key="playhead"
        id="playhead"
        className={cx(styles.playHead, {
          [className]: className,
          [styles.playHeadVisible]: playhead
        })}
      />,
      Children.map(children, ch => {
        const getRef = el => {
          if (!el) return false;
          this.nodes[ch.props.id || uid()] = { el, cb: ch.props.onScrollFocus };
        };

        const props = ch.props.onScrollFocus ? { getRef } : {};

        return cloneElement(ch, props);
      })
    ];
  }
}

export default Scroller;
