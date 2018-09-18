import lowerCase from 'lodash/lowerCase';

export const filterToLayer = name => (({ protea: 'protea' })[lowerCase(name)] || `${lowerCase(name)}s`) + ':rarity';
