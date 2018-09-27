import camelCase from 'lodash/camelCase';

const { MOL_API_KEY } = process.env;

const config = {
  account: 'half-earth',
  molAccount: 'carto.mol.org/user/half-earth',
  layersQuery: 'SELECT dataset, env, interaction_config, iso, layer_config, legend_config, name, provider, slug FROM layers ORDER BY name',
  categoriesQuery: 'SELECT name, slug, description, position, group_name, group_slug, featured, image_url, multi_select from categories ORDER BY position',
  datasetsQuery: 'SELECT name, description, slug, multilayer, category, featured, position from datasets ORDER BY name',
  detailQuery: 'SELECT sr as richness, ave_rsr as rarity, strict, biosphere, other, focal_spp as species, prop_land, agricultur, urban, rainfed, taxa FROM global_facets_attr_pressures_vizz'
};

function handleResponse(data) {
  if (!data || !data.rows) return [];
  return data.rows.map(row => {
    const camelCasedKeys = {};
    Object.keys(row).forEach(key => {
      camelCasedKeys[camelCase(key)] = row[key];
    });
    return camelCasedKeys;
  });
}

function fetchCartoResource(resource) {
  const cartoUrl = `https://${config.account}.carto.com/api/v2/sql`;
  const resourceTable = `${resource}Query`;
  const query = config[resourceTable] || '';
  return fetch(`${cartoUrl}?q=${query}`).then(d => d.json().then(handleResponse));
}

function fetchCartoCellId(cellId) {
  const cartoUrl = `https://${config.molAccount}/api/v2/sql`;
  const query = `${config.detailQuery} WHERE cell_id = '${cellId}'&api_key=${MOL_API_KEY}&format=json`;
  return fetch(`${cartoUrl}?q=${query}`).then(d => d.json().then(handleResponse));
}

export default { get: fetchCartoResource, getDetail: fetchCartoCellId };
