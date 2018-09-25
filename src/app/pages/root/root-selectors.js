import { createSelector, createStructuredSelector } from 'reselect';
import { getSidebarVisibility, getGridId, getIsTerrain } from 'selectors/location-selectors';

export const getDetailViewVisibility = createSelector(
  [ getGridId, getIsTerrain ],
  (gridId, isTerrain) => gridId && isTerrain
);

export const mapStateToProps = createStructuredSelector({
  showSidebar: getSidebarVisibility,
  showDetailView: getDetailViewVisibility
});
