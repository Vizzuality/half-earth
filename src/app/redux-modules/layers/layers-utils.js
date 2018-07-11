export const getMolLayerConfig = name => {
  const data = name.split(':');
  const species = data[0];
  const type = data[1];
  return {
    name,
    opacity: 100,
    url: `https://cdn.mol.org/half-earth/tiles/${type}/${species}/{z}/{x}/{y}`,
    type: 'UrlTemplate',
    visible: false
  };
};

export const getLayerConfig = ({ type, name }) => {
  switch (type) {
    case 'mol':
      return getMolLayerConfig(name);
    default:
      console.warning('No layer config type provided for', name);
      return {};
  }
};
