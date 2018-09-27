import { createSelector, createStructuredSelector } from 'reselect';
import { getSidebarVisibility, getCellId, getIsTerrain } from 'selectors/location-selectors';

export const getDetailViewVisibility = createSelector(
  [ getCellId, getIsTerrain ],
  (cellId, isTerrain) => cellId && isTerrain
);

export const mapStateToProps = createStructuredSelector({
  showSidebar: getSidebarVisibility,
  showDetailView: getDetailViewVisibility
});
