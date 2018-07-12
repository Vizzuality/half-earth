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
