export const getCartoUrl = ({ account = 'half-earth', config = {} }) => {
  const cartoConfig = {
    version: '1.3.0',
    layers: [
      {
        type: 'mapnik',
        options: {
          cartocss_version: '2.3.0',
          ...config
        }
      }
    ]
  };
  return fetch(
    `https://${account}.carto.com/api/v1/map?config=${encodeURIComponent(
      JSON.stringify(cartoConfig)
    )}`
  )
    .then(d => d.json())
    .then(({ layergroupid, cdn_url: { templates: { https: { url } } } }) => ({
      layergroupid,
      url
    }))
    .then(({ layergroupid, url }) => {
      return `${url}/${account}/api/v1/map/${layergroupid}/{z}/{x}/{y}.png`;
    });
};

export const getMolLayerConfig = (name, group, type) => {
  return {
    name,
    opacity: 100,
    url: `https://cdn.mol.org/half-earth/tiles/${type}/${group}/{z}/{x}/{y}`,
    type: 'UrlTemplate',
    visible: false
  };
};

export const getLayerConfig = (provider, { name, type, group }) => {
  switch (provider) {
    case 'mol':
      return getMolLayerConfig(name, group, type);
    default:
      console.warn('No layer config type provided for', name);
      return {};
  }
};
