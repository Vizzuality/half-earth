import { connect } from 'react-redux'
import find from 'lodash/find'
import uniq from 'lodash/uniq'
import lowerCase from 'lodash/lowerCase'
import SidePopup from './side-popup-component'
import * as regionalActions from 'pages/regional/regional-actions'

const mapStateToProps = ({ regional }) => {
  const { sidePopup } = regional
  const data = find(sidePopup.content, { key: sidePopup.selected })

  const groups =
    (data && uniq(data.species.map(specie => lowerCase(specie.taxoGroup)))) ||
    []

  return {
    ...sidePopup,
    data,
    groups
  }
}
export default connect(mapStateToProps, regionalActions)(SidePopup)
