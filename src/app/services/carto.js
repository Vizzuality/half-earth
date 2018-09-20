import camelCase from 'lodash/camelCase';

const config = {
  account: 'half-earth',
  layersQuery: 'SELECT dataset, env, interaction_config, iso, layer_config, legend_config, name, provider, slug FROM layers ORDER BY name',
  categoriesQuery: 'SELECT name, slug, description, metadata, position, group_name, group_slug, featured, image_url, multi_select from categories ORDER BY position',
  datasetsQuery: 'SELECT name, description, slug, multilayer, category, featured from datasets ORDER BY name'
};

function fetchCartoResource(resource) {
  const cartoUrl = `https://${config.account}.carto.com/api/v2/sql`;
  const resourceTable = `${resource}Query`;
  const query = config[resourceTable] || '';
  return fetch(`${cartoUrl}?q=${query}`).then(
    d => d.json().then(data => {
      if (!data || !data.rows) return [];
      return data.rows.map(row => {
        const camelCasedKeys = {};
        Object.keys(row).forEach(key => {
          camelCasedKeys[camelCase(key)] = row[key];
        });
        return camelCasedKeys;
      });
    })
  );
}

export default { get: fetchCartoResource };
