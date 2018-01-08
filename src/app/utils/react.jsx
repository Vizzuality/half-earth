import React, { Component, createElement } from 'react'

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

const assign = (o, ...rest) => Object.assign({}, o, ...rest)
const isFunction = object => typeof object === 'function'
const isSymbol = object => typeof object === 'symbol'

export const withReducers = ({ actions, reducers, initialState }) => Comp =>
  class WithReducers extends Component {
    constructor (props) {
      super(props)
      this.state = initialState
      this.reducers = reducers.default || reducers
      this.actions = {}
      this.reduce = this.reduce.bind(this)
      this.bindActions(actions)
    }

    bindActions (actions) {
      this.actions = Object.keys(actions).reduce((bound, name) => {
        const action = actions[name]
        bound[name] = payload => {
          const actionned = action(payload)
          if (isSymbol(actionned.key)) {
            this.reduce(this.state, actionned)
          } else if (isFunction(actionned)) {
            actionned(
              act => {
                this.reduce(this.state, act)
              },
              {
                getState: () => this.state,
                dispatch: a => this.reduce(this.state, a)
              }
            )
          }
        }
        return bound
      }, {})
    }

    reduce (state, action) {
      if (isFunction(this.reducers[action.key])) {
        this.setState(this.reducers[action.key](state, action))
      }
    }

    render () {
      return createElement(Comp, assign(this.props, this.state, this.actions))
    }
  }
