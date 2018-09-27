import iucnList from 'data/iucn-list';

const config = { url: 'https://api.mol.org/1.x/species/info', query: '?scientificname=' };

async function getSpecies(species) {
  const speciesArray = Array.isArray(species) ? species : [ species ];
  const promises = speciesArray.map(specie => fetch(`${config.url}${config.query}${specie}`).then(d => d.json()));
  const data = await Promise.all(promises);
  return data && data.map(d => ({ ...d[0], iucn: iucnList[d[0].redlist] }));
}

export default { getSpecies };