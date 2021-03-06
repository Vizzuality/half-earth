import { Component, createElement } from 'react';
import { connect } from 'react-redux';
import MapComponent from './map-component';
import initialState from './initial-state';
import * as actions from './map-actions';
import * as utils from './map-utils';
import * as cartoActions from 'providers/carto/carto-actions';
import * as interActions from 'providers/interact/interact-actions';
import * as popUpActions from 'components/pop-up/pop-up-actions';
import * as regionalActions from 'pages/regional/regional-actions';
import reducers from './map-reducers';

class MapContainer extends Component {
  constructor(props) {
    super(props);
    const { getCartoTiles } = props;
    const { layers } = props.map;
    utils.requestCartos({ layers, getCartoTiles });
  }

  render() {
    return createElement(MapComponent, this.props);
  }
}

export { utils };
export const reduxConfig = { actions, reducers, initialState };
const mapStateToProps = ({ map, regional, local, popUp, global, section }) => ({
  map,
  regional,
  local,
  global,
  popUp,
  section
});

export default connect(
  mapStateToProps,
  {
    ...actions,
    ...cartoActions,
    ...popUpActions,
    ...regionalActions,
    ...interActions
  }
)(MapContainer);
