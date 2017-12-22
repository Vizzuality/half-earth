import React from 'react'
import cx from 'classnames'
import kebabCase from 'lodash/kebabCase'
import startCase from 'lodash/startCase'
import includes from 'lodash/includes'
import uiStyles from 'styles/ui'
import styles from './side-popup-styles'

const notInFilters = filters => d =>
  filters.length ? includes(filters, d.taxoGroup) : true

const SidePopupComponent = ({
  open,
  closeSidePopup,
  data,
  groups,
  toggleFilters,
  ...props
}) =>
  console.log(data) ||
  (data && (
    <div className={cx(styles.container, { [styles.containerOpen]: open })}>
      <div className={styles.top}>
        <button onClick={() => closeSidePopup()}>X</button>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
      </div>
      <div className={styles.bottom}>
        <ul className={styles.tags}>
          {groups.map(group => (
            <li className={styles.tag} key={group}>
              <button
                className={cx(uiStyles.tag, {
                  [uiStyles.tagActive]: includes(data.filters, group)
                })}
                onClick={() => toggleFilters(group)}
              >
                {startCase(group)}
              </button>
            </li>
          ))}
        </ul>
        <ul className={styles.species}>
          {data.species.filter(notInFilters(data.filters)).map(specie => (
            <li
              key={kebabCase(`${data.name}-${specie.scientificName}`)}
              className={styles.specie}
            >
              {specie.commonName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )) ||
  null

export default SidePopupComponent
