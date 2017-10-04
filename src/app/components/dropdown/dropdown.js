import { createElement, Component } from 'react'
import { assign } from 'utils'
import { clickOutside } from 'utils/react'

import DropdownComponent from './dropdown-component'

class DropdownContainer extends Component {
  constructor (props) {
    super(props)
    this.selectItem = this.selectItem.bind(this)
    this.close = this.close.bind(this)
    this.toggleOpen = this.toggleOpen.bind(this)
    this.getContainer = this.getContainer.bind(this)
    this.state = {
      closed: true
    }
  }

  componentWillReceiveProps ({ clickedOutside, ...props }) {
    if (clickedOutside) this.setState({ closed: clickedOutside })
  }

  getContainer (el) {
    this.container = el
  }

  toggleOpen () {
    this.setState({ closed: !this.state.closed })
  }

  close () {
    this.setState({ closed: true })
  }

  selectItem (item) {
    const { onSelect } = this.props
    onSelect(item)
    this.setState({ closed: true })
  }

  render () {
    const { getContainer, selectItem, open, close, toggleOpen } = this
    const { closed } = this.state
    return createElement(
      DropdownComponent,
      assign(this.props, {
        closed,
        selectItem,
        toggleOpen,
        open,
        close,
        getContainer
      })
    )
  }
}

export default clickOutside(DropdownContainer)