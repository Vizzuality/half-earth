import { Component, createElement } from 'react';
import { connect } from 'react-redux';
import { renderDropdown, renderToggle } from 'components/explorable';
import { requestCartos } from 'pages/map/map-utils';
import * as actions from './regional-actions';
import { getSection, getType } from './regional-selectors';
import * as cartoActions from 'providers/carto/carto-actions';
import * as sectionActions from 'providers/section/section-actions';

import * as reducers from './regional-reducers';
import initialState from './regional-initial-state';
import RegionalComponent from './regional-component';

class RegionalConTainer extends Component {
  constructor(props) {
    super(props);
    const {
      getCartoTiles,
      setRegionalSectionThunk,
      setSection,
      getBillboards
    } = props;
    const { layers } = props.regional;
    requestCartos({ layers, getCartoTiles });
    setRegionalSectionThunk('regional:1');
    setSection('regional:1');
    getBillboards();
  }
  render() {
    return createElement(RegionalComponent, this.props);
  }
}

const mapStateToProps = state => {
  const { map, regional, section } = state;

  return {
    map,
    selectedType: getType(getSection(state)),
    regional,
    section,
    renderToggle: renderToggle(regional.layers),
    renderDropdown: renderDropdown(regional.sections)
  };
};

export const redux = { reducers, initialState, actions };
export default connect(
  mapStateToProps,
  {
    ...cartoActions,
    ...actions,
    ...sectionActions
  }
)(RegionalConTainer);
