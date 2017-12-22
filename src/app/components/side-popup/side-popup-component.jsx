import React from 'react'
import cx from 'classnames'
import kebabCase from 'lodash/kebabCase'
import startCase from 'lodash/startCase'
import includes from 'lodash/includes'

import Close from 'components/close-button'
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
  (data && (
    <div className={cx(styles.container, { [styles.containerOpen]: open })}>
      <div
        className={styles.top}
        style={{ backgroundImage: `url(/img/reserves/${data.key}.jpg)` }}
      >
        <div className={styles.fade}>
          <div className={styles.col}>
            <Close close={() => closeSidePopup()} theme={styles} />
            <h1 className={styles.title}>{data.name}</h1>
            <p className={styles.description}>{data.description}</p>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <ul className={styles.tags}>
          {groups.sort().map(group => (
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
              <span>
                {specie.scientificName} - {specie.commonName}
                <br />
                {specie.molLink && (
                  <a
                    target="_blank"
                    className={styles.more}
                    href={specie.molLink}
                  >
                    Learn more
                  </a>
                )}
              </span>
              <img
                src={`/img/reserves/species/${data.key}/${kebabCase(
                  specie.taxoGroup
                )}-${kebabCase(specie.scientificName)}-${kebabCase(
                  specie.commonName
                )}.jpg`}
                className={styles.thumb}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )) ||
  null

export default SidePopupComponent
