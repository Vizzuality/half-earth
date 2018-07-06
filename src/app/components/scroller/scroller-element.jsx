import React, { Component } from 'react';

class Element extends Component {
  render () {
    const { className, children, getRef } = this.props;
    return (
      <span className={className} ref={getRef}>
        {children}
      </span>
    );
  }
}

export default Element;
