import { createSelector } from 'reselect'
import { speciesSelections } from 'pages/map/map-utils'

const getRegional = state => state.regional
export const currentSection = state => state.section.section
export const getType = state => (state && state.selectionType) || 'richness'
const getSections = state => getRegional(state).sections

export const getSection = createSelector(
  getSections,
  currentSection,
  (sections, section) => sections[section]
)

export const selectorsForType = createSelector(getSection, section =>
  speciesSelections(getType(section))
)
