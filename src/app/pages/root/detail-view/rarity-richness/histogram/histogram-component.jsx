import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './histogram-styles';

const legendColors = [
  [ '#1E6818', '#437D18', '#81A018', '#BFC218', '#FDE619' ],
  [ '#1D693D', '#437F3E', '#82A33E', '#C0C63F', '#FEEA40' ],
  [ '#1D6C7B', '#43837C', '#82A87D', '#C0CC7E', '#FEF180' ],
  [ '#1E6FB9', '#4487B9', '#83ADBC', '#C1D2BD', '#FFF8BF' ],
  [ '#1E73F7', '#448BF8', '#83B2FB', '#C1D8FD', '#FFFFFF' ]
];

class HistogramComponent extends Component {
  render() {
    const { data = {}, values } = this.props;
    const { richness, rarity } = data;
    if (!values) return null;
    return (
      <div className={styles.histogramContainer}>
        <span className={cx(styles.legend, styles.legendY)}> - Rarity + </span>
        <span className={cx(styles.legend, styles.legendX)}> - Richness + </span>
        <div className={styles.graphContainer}>
          <div className={styles.squareLegend}>
            {values.rarity.map((rar, ir) => (
              <div key={rar}>
                {values.richness.map((rich, iri) => (
                  <span
                    key={rar + rich}
                    style={{ backgroundColor: legendColors[ir][iri] }}
                    className={cx({
                      [styles.cellHighlight]: ir === rarity.position && iri === richness.position
                    })}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

HistogramComponent.propTypes = {
  data: PropTypes.shape({ richness: PropTypes.object, rarity: PropTypes.object }).isRequired,
  values: PropTypes.shape({ richness: PropTypes.array, rarity: PropTypes.array })
};

HistogramComponent.defaultProps = { values: null };

export default HistogramComponent;
