import React, { Component } from 'react'

export const clickOutside = Comp =>
  class ClickOutside extends Component {
    constructor (props) {
      super(props)
      this.handle = this.handle.bind(this)
      this.state = {
        clickedOutside: false
      }
    }

    componentDidMount () {
      document.addEventListener('click', this.handle, true)
    }

    componentWillUnmount () {
      document.removeEventListener('click', this.handle, true)
    }

    componentDidUpdate () {
      this.state = { clickedOutside: false }
    }

    handle (e) {
      const el = this.container
      if (!el.contains(e.target)) {
        const { onClickOutside } = this.props
        if (onClickOutside) onClickOutside()
        this.setState({ clickedOutside: true })
      }
    }

    render () {
      const { clickedOutside } = this.state
      const getRef = el => (this.container = el)

      return (
        <span ref={getRef}>
          <Comp {...{ ...this.props, clickedOutside }} />
        </span>
      )
    }
  }
