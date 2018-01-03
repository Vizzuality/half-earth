import legend from './regional-legends'
import billboards from './regional-billboards'
import layers from './regional-layers'
import sections from './regional-sections'
import charts from './regional-charts'
import cards from './regional-cards'

export default {
  ...charts,
  layers,
  billboardsDistance: 70000.0,
  sections,
  legend,
  billboards,
  sidePopup: {
    open: false,
    selected: null,
    content: cards
  }
}
