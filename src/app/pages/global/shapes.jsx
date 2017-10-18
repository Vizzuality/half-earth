import React from 'react'
import uiStyles from 'app/styles/ui'

const Shapes = props => (
  <div className={uiStyles.visualisationsContainer}>
    <div className={uiStyles.svgTextContainer}>
      <img src="img/graph/montain.svg" />
      <span className={uiStyles.percentage}>14.7%</span>
      <span className={uiStyles.category}>Land</span>
    </div>
    <div className={uiStyles.svgTextContainer}>
      <img src="img/graph/coral.svg" />
      <span className={uiStyles.percentage}>4.12%</span>
      <span className={uiStyles.category}>Marine</span>
    </div>
    <div className={uiStyles.svgTextContainer}>
      <img src="img/graph/sea.svg" />
      <span className={uiStyles.percentage}>10.2%</span>
      <span className={uiStyles.category}>Ocean</span>
    </div>
  </div>
)

export default Shapes
