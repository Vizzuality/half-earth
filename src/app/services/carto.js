const config = {
  account: 'half-earth',
  layersQuery:
    'SELECT dataset, env, to_json(interactionconfig) interactionconfig, iso, to_json(layerconfig) layerconfig, to_json(legendconfig) legendconfig, name, provider, slug FROM layers ORDER BY name',
  categoriesQuery: 'SELECT * from categories ORDER BY position',
  datasetsQuery: 'SELECT * from datasets ORDER BY name'
};

function fetchCartoResource(resource) {
  const cartoUrl = `https://${config.account}.carto.com/api/v2/sql`;
  const resourceTable = `${resource}Query`;
  const query = config[resourceTable] || '';
  return fetch(`${cartoUrl}?q=${query}`).then(d =>
    d.json().then(d => {
      if (!d || !d.rows) return [];
      return d.rows.map(row => {
        // Removing the not used fields from carto
        // eslint-disable-next-line
        const { cartodb_id, the_geom, the_geom_webmercator, ...rest } = row;
        return rest;
      });
    })
  );
}

export default {
  get: fetchCartoResource
};
