const config = {
  account: 'half-earth',
  layersQuery: 'SELECT dataset, env, to_json(interactionconfig) interactionconfig, iso, to_json(layerconfig) layerconfig, to_json(legendconfig) legendconfig, name, provider, slug FROM layers ORDER BY name',
  categoriesQuery: 'SELECT name, slug, description, metadata, position, group_name, group_slug, featured, image_url from categories ORDER BY position',
  datasetsQuery: 'SELECT name, description, slug, multilayer, category, featured from datasets ORDER BY name'
};

function fetchCartoResource(resource) {
  const cartoUrl = `https://${config.account}.carto.com/api/v2/sql`;
  const resourceTable = `${resource}Query`;
  const query = config[resourceTable] || '';
  return fetch(`${cartoUrl}?q=${query}`).then(
    d => d.json().then(data => {
      if (!data || !data.rows) return [];
      return data.rows;
    })
  );
}

export default { get: fetchCartoResource };
