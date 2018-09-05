import { createSelector, createStructuredSelector } from 'reselect';

const selectOpen = ({ modalMetadata }) => modalMetadata.isOpen;
const selectTitle = ({ modalMetadata }) => modalMetadata.title;
const selectSlug = ({ modalMetadata }) => modalMetadata.slug;
const selectCategories = ({ categories }) => categories.data;

export const getMetadata = createSelector([selectSlug, selectCategories], (slug, categories) => {
  if (!slug || !categories) return;
  const datasetMeta = categories.find(d => d.slug === slug);
  return datasetMeta && datasetMeta.metadata;
});

export const mapStateToProps = createStructuredSelector({
  isOpen: selectOpen,
  metadata: getMetadata,
  title: selectTitle
});
