import legend from './regional-legends'
import billboards from './regional-billboards'
import layers from './regional-layers'
import sections from './regional-sections'
import charts from './regional-charts'
import popups from './regional-popups'

export default {
  ...charts,
  layers,
  sections,
  legend,
  billboards,
  sidePopup: {
    open: false,
    selected: null,
    content: popups
  }
}
