import { combineReducers } from 'redux';
import { handleModule } from 'redux-tools';

// Redux-modules
import { reduxConfig as layerRedux } from 'redux-modules/layers';
import { reduxConfig as datasetsRedux } from 'redux-modules/datasets';
import { reduxConfig as categoriesRedux } from 'redux-modules/categories';
import { reduxConfig as storiesRedux } from 'redux-modules/stories';
import { reduxConfig as placesRedux } from 'redux-modules/places';
import { reduxConfig as cellsRedux } from 'redux-modules/cell-detail';
import { reduxConfig as speciesRedux } from 'redux-modules/species';
import { reduxConfig as pledgesRedux } from 'redux-modules/pledges';

// Providers
import { reduxConfig as sectionRedux } from 'providers/section';
import { reduxConfig as interactRedux } from 'providers/interact';

// Pages
import { reduxConfig as mapRedux } from 'pages/map';
import { reduxConfig as globalRedux } from 'pages/global';
import { reduxConfig as regionalRedux } from 'pages/regional';
import { reduxConfig as rootRedux } from 'pages/root';

// Components
import { reduxConfig as earthometerRedux } from 'components/earthometer-multi';
import { reduxConfig as navFooterRedux } from 'components/nav-footer';
import { reduxConfig as legendLayersRedux } from 'components/legend/legend-layers';
import { reduxConfig as paneRedux } from 'components/pane';
import { reduxConfig as sidebarRedux } from 'components/sidebar';
import { reduxConfig as modalMetadataRedux } from 'components/v2/modal-metadata';
import { reduxConfig as modalInstructionsRedux } from 'components/v2/modal-instructions';
import { reduxConfig as modalShareRedux } from 'components/v2/modal-share';
import { reduxConfig as modalTutorialRedux } from 'components/v2/modal-tutorial';
import router from './router';

const reduxModulesReducers = {
  layers: handleModule(layerRedux),
  datasets: handleModule(datasetsRedux),
  categories: handleModule(categoriesRedux),
  stories: handleModule(storiesRedux),
  places: handleModule(placesRedux),
  cellsDetail: handleModule(cellsRedux),
  species: handleModule(speciesRedux),
  pledges: handleModule(pledgesRedux)
};

const providersReducers = {
  interactions: handleModule(interactRedux),
  section: handleModule(sectionRedux)
};

const pagesReducers = {
  regional: handleModule(regionalRedux),
  global: handleModule(globalRedux),
  map: handleModule(mapRedux),
  root: handleModule(rootRedux)
};

const componentReducers = {
  location: router.reducer,
  earthometer: handleModule(earthometerRedux),
  navFooter: handleModule(navFooterRedux),
  legendLayers: handleModule(legendLayersRedux),
  pane: handleModule(paneRedux),
  sidebar: handleModule(sidebarRedux),
  modalMetadata: handleModule(modalMetadataRedux),
  modalInstructions: handleModule(modalInstructionsRedux),
  modalShare: handleModule(modalShareRedux),
  modalTutorial: handleModule(modalTutorialRedux)
};

export default combineReducers({
  location: router.reducer,
  ...reduxModulesReducers,
  ...providersReducers,
  ...pagesReducers,
  ...componentReducers
});
