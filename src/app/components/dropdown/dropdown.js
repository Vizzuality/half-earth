import { createElement, Component } from 'react'
import isUndefined from 'lodash/isUndefined'
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
    const { sort } = this.props
    const { closed } = this.state
    return createElement(DropdownComponent, {
      ...this.props,
      closed,
      sort: isUndefined(sort) ? true : sort,
      selectItem,
      toggleOpen,
      open,
      close,
      getContainer
    })
  }
}

export default clickOutside(DropdownContainer)
