export const requestCartos = ({ layers, getCartoTiles }) => {
  layers.map(({ carto, name, url }) => {
    if (carto && !url) {
      const { account, config, apiv, tileFormat } = carto
      getCartoTiles({ account, config, apiv, name, tileFormat })
    }
  })
}
