import { createSelector, createStructuredSelector } from 'reselect';
import { selectSpeciesLoading, selectSpeciesData } from 'selectors/species-selectors';

const selectSpecies = (state, props) => props.species;

const getSpeciesData = createSelector(
  [selectSpeciesData, selectSpecies],
  (data, species) => {
    if (!data || !species) return null;
    return species.map(specie => data[specie]).filter(s => !!s);
})

export const mapStateToProps = createStructuredSelector({
  loading: selectSpeciesLoading,
  data: getSpeciesData
});
