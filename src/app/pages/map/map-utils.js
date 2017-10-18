export const requestCartos = ({ layers, getCartoTiles }) => {
  layers.map(({ carto, name, url }) => {
    if (carto && !url) {
      const { account, config, apiv, tileFormat } = carto
      getCartoTiles({ account, config, apiv, name, tileFormat })
    }
  })
}

export const MAPBOX_TOKEN =
  'pk.eyJ1IjoiamNoYWxmZWFydGgiLCJhIjoiY2o4Mnh4aDN6MGNqazMzc2FkeTlnajBoeiJ9.5Su3_JeAsjM0slTkaGFihw'

export const MOLLayer = (name, species, type) => ({
  name,
  url: `https://cdn.mol.org/half-earth/tiles/${type}/${species}/{z}/{x}/{y}`,
  type: 'UrlTemplate',
  visible: false
})

export const speciesSelector = selected => ({
  options: {
    birds: 'Birds',
    mammals: 'Mammals',
    amphibians: 'Amphibians',
    protea: 'Protea',
    restio: 'Restio'
  },
  selected
})

export const speciesSelections = type => ({
  birds: `birds:${type}`,
  mammals: `mammals:${type}`,
  amphibians: `amphibians:${type}`,
  protea: `protea:${type}`,
  restio: `restio:${type}`
})
