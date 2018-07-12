import { combineReducers } from 'redux';
import { handleModule } from 'redux-tools';
import router from './router';

// Redux-modules
import { reduxConfig as layersRedux } from 'redux-modules/layers';

// Providers
import { reduxConfig as sectionRedux } from 'providers/section';
import { reduxConfig as interactRedux } from 'providers/interact';

// Pages
import { reduxConfig as mapRedux } from 'pages/map';
import { reduxConfig as globalRedux } from 'pages/global';
import { reduxConfig as regionalRedux } from 'pages/regional';

// Components
import { reduxConfig as earthometerRedux } from 'components/earthometer-multi';
import { reduxConfig as navFooterRedux } from 'components/nav-footer';
import { reduxConfig as legendLayersRedux } from 'components/legend/legend-layers';
import { reduxConfig as paneRedux } from 'components/pane';
import { reduxConfig as sidebarRedux } from 'components/sidebar';

const reduxModulesReducers = {
  layers: handleModule(layersRedux)
};

const providersReducers = {
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
  ...reduxModulesReducers,
  ...providersReducers,
  ...pagesReducers,
  ...componentReducers
});
