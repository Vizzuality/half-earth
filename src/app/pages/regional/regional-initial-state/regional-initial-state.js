import legend from './regional-legends';
import billboards from './regional-billboards';
import layers from './regional-layers';
import sections from './regional-sections';
import charts from './regional-charts';
import cards from './regional-cards';
import panes from './regional-panes';
import popups from './regional-popups';

export default {
  ...charts,
  layers,
  sections,
  legend,
  billboards,
  panes,
  popups,
  popup: {
    open: false,
    selected: null
  },
  sidePopup: {
    open: false,
    selected: null,
    content: cards
  }
};
