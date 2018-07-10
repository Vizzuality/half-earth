import { combineReducers } from 'redux';
import { handleModule } from 'redux-tools';
import router from './router';

// Providers
import { redux as layersRedux } from 'providers/layers';
import { redux as sectionRedux } from 'providers/section';
import { redux as interactRedux } from 'providers/interact';

// Pages
import { redux as mapRedux } from 'pages/map';
import { redux as globalRedux } from 'pages/global';
import { redux as regionalRedux } from 'pages/regional';

// Components
import { redux as earthometerRedux } from 'components/earthometer-multi';
import { redux as navFooterRedux } from 'components/nav-footer';
import { redux as legendLayersRedux } from 'components/legend/legend-layers';
import { redux as paneRedux } from 'components/pane';
import { redux as sidebarRedux } from 'components/sidebar';

const providersReducers = {
  layers: handleModule(layersRedux),
  interactions: handleModule(interactRedux),
  section: handleModule(sectionRedux)
};

const pagesReducers = {
  regional: handleModule(regionalRedux),
  global: handleModule(globalRedux),
  map: handleModule(mapRedux)
};

const componentReducers = {
  location: router.reducer,
  earthometer: handleModule(earthometerRedux),
  navFooter: handleModule(navFooterRedux),
  legendLayers: handleModule(legendLayersRedux),
  pane: handleModule(paneRedux),
  sidebar: handleModule(sidebarRedux)
};

export default combineReducers({
  location: router.reducer,
  ...providersReducers,
  ...pagesReducers,
  ...componentReducers
});
