import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './histogram-styles';

const yColors = [ '#3474ef', '#538bf0', '#8bb2f5', '#c5d8f9', '#e5eeff' ];
const xColors = [ '#fae651', '#fbea62', '#fcf090', '#fef8c5', '#e5eeff' ];
const legendColors = [
  [ '#fae651', '#fbea62', '#fcf090', '#fef8c5', '#e5eeff' ],
  [ '#3474ef', '#538bf0', '#8bb2f5', '#c5d8f9', '#e5eeff' ],
  [ '#fae651', '#fbea62', '#fcf090', '#fef8c5', '#e5eeff' ],
  [ '#3474ef', '#538bf0', '#8bb2f5', '#c5d8f9', '#e5eeff' ],
  [ '#fae651', '#fbea62', '#fcf090', '#fef8c5', '#e5eeff' ]
];

class DetailViewComponent extends Component {
  render() {
    const { data } = this.props;
    if (!data) return null;
    return (
      <div className={styles.histogramContainer}>
        <span className={cx(styles.legend, styles.legendY)}> - Rarity + </span>
        <span className={cx(styles.legend, styles.legendX)}> - Richness + </span>
        <div className={cx(styles.histogram, styles.histogramX)}>
          {data.richness.map((r, i) => (
            <span
              key={r}
              style={{ height: r, backgroundColor: yColors[i], borderWidth: i === 2 ? 1 : 0 }}
            />
          ))}
        </div>
        <div className={styles.graphContainer}>
          <div className={styles.squareLegend}>
            {data.rarity.map((rar, ir) => (
              <div>
                {data.richness.map((rich, iri) => (
                  <span
                    key={rar + rich}
                    style={{
                      backgroundColor: legendColors[ir][iri],
                      borderWidth: ir === 2 && iri === 2 ? 1 : 0
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className={cx(styles.histogram, styles.histogramY)}>
            {data.rarity.map((r, i) => (
              <span
                key={r}
                style={{ width: r, backgroundColor: xColors[i], borderWidth: i === 2 ? 1 : 0 }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

DetailViewComponent.propTypes = {
  data: PropTypes.shape({ richness: PropTypes.array, rarity: PropTypes.array })
};

DetailViewComponent.defaultProps = { data: null };

export default DetailViewComponent;
