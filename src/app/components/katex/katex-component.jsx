import React, { Component } from 'react'
import katex from 'katex'

class Katex extends Component {
  componentDidMount () {
    katex.render(this.props.children, this.el)
  }
  render () {
    const { className } = this.props
    return (
      <span
        className={className}
        ref={el => {
          this.el = el
        }}
      />
    )
  }
}

export default Katex
