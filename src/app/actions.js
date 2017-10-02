import { actions as zoomActions } from 'components/zoom'
import { actions as earthometerActions } from 'components/earthometer'
import { actions as localActions } from 'pages/local'
import { actions as globalActions } from 'pages/global'
import { actions as mapActions } from 'pages/map'
import { actions as cartoActions } from 'providers/carto'

export default {
  ...zoomActions,
  ...earthometerActions,
  ...globalActions,
  ...localActions,
  ...mapActions,
  ...cartoActions
}
