import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'

import pageStyles from 'app/styles/pages'

const PageBackground = ({ sidebar }) => (
  <div
    className={cx(pageStyles.background, {
      [pageStyles.containerClosed]: !sidebar.open
    })}
  />
)

const mapStateToProps = ({ sidebar }) => ({ sidebar })
export default connect(mapStateToProps)(PageBackground)
