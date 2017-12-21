import React from 'react'
import cx from 'classnames'
import kebabCase from 'lodash/kebabCase'
import startCase from 'lodash/startCase'
import styles from './side-popup-styles'

const SidePopupComponent = ({
  open,
  closeSidePopup,
  data,
  groups,
  filterSpeciesBy,
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
        <ul className={styles.groups}>
          {groups.map(group => (
            <li key={group}>
              <button onClick={() => filterSpeciesBy(group)}>
                {startCase(group)}
              </button>
            </li>
          ))}
        </ul>
        <ul className={styles.species}>
          {data.species.map(specie => (
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
