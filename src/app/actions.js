import { actions as zoomActions } from 'components/zoom'
import { actions as earthometerActions } from 'components/earthometer'
import { actions as localActions } from 'pages/local'
import { actions as mapActions } from 'pages/map'

export default {
  ...zoomActions,
  ...earthometerActions,
  ...localActions,
  ...mapActions
}
