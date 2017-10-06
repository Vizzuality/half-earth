import { actions as zoomActions } from 'components/zoom'
// import { actions as earthometerActions } from 'components/earthometer'
import { actions as mapActions } from 'pages/map'
import { actions as cartoActions } from 'providers/carto'
import { actions as sectionActions } from 'providers/section'
import { actions as sidebarActions } from 'components/sidebar'

export default {
  ...zoomActions,
  // ...earthometerActions,
  ...mapActions,
  ...cartoActions,
  ...sidebarActions,
  ...sectionActions
}
