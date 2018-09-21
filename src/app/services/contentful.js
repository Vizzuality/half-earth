const { CONTENTFUL_SPACE_ID } = process.env;
const { CONTENTFUL_TOKEN } = process.env;

const config = {
  baseUrl: 'https://cdn.contentful.com',
  space: CONTENTFUL_SPACE_ID,
  token: CONTENTFUL_TOKEN,
  env: 'master'
};

async function fetchContentfulEntry({ contentType = 'metadata', filterField = 'layerSlug', filterValue = '' }) {
  let url = `${config.baseUrl}/spaces/${config.space}/environments/${config.env}/entries?content_type=${contentType}&access_token=${config.token}`;
  if (filterField && filterValue) {
    url += `&fields.${filterField}=${filterValue}`;
  }
  try {
    const data = await fetch(url).then(d => d.json());
    return data;
  } catch (e) {
    console.warn(e);
    throw new Error(e);
  }
}

async function getMetadata(slug) {
  const data = await fetchContentfulEntry({ filterValue: slug });
  if (data && data.items && data.items.length > 0) {
    return data.items[0].fields;
  }
  return null;
}

export default { getEntries: fetchContentfulEntry, getMetadata };
