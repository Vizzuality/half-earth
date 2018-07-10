import { combineReducers } from 'redux';
import { handleModule } from 'redux-tools';
import router from './router';

import layersReducer from 'app/ducks/layers';

import { redux as earthometerRedux } from 'components/earthometer-multi';
import { redux as mapRedux } from 'pages/map';
import { redux as globalRedux } from 'pages/global';
import { redux as regionalRedux } from 'pages/regional';
import { redux as sidebarRedux } from 'components/sidebar';
import { redux as sectionRedux } from 'providers/section';
import { redux as navFooterRedux } from 'components/nav-footer';
import { redux as legendLayersRedux } from 'components/legend/legend-layers';
import { redux as paneRedux } from 'components/pane';
import { redux as interactRedux } from 'providers/interact';

export default combineReducers({
  layers: layersReducer,
  location: router.reducer,
  earthometer: handleModule(earthometerRedux),
  sidebar: handleModule(sidebarRedux),
  map: handleModule(mapRedux),
  section: handleModule(sectionRedux),
  regional: handleModule(regionalRedux),
  navFooter: handleModule(navFooterRedux),
  legendLayers: handleModule(legendLayersRedux),
  global: handleModule(globalRedux),
  pane: handleModule(paneRedux),
  interactions: handleModule(interactRedux)
});
