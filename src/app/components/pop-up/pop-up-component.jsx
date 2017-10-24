import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import CloseButton from './close-button/close-button-component'

import theme from './turquoise-close-button-theme.scss'
import styles from './pop-up-styles.scss'

class PopUp extends Component {
  constructor (props) {
    super(props)
    this.root = document.getElementById('pop-up-root')
    this.el = document.createElement('article')
  }
  componentDidMount () {
    this.root.appendChild(this.el)
  }

  componentWillUnmount () {
    this.root.removeChild(this.el)
  }

  render () {
    const { className, open, close, children } = this.props
    const portalContent = (
      <div className={cx([className, styles.popUp])}>
        <CloseButton theme={theme} close={close} />
        <div className={styles.content}>{children}</div>
      </div>
    )
    return open ? ReactDOM.createPortal(portalContent, this.el) : null
  }
}
export default PopUp
