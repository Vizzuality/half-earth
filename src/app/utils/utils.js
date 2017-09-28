export const assign = (o, ...rest) => Object.assign({}, o, ...rest)

// quick helper, can be further improved
export const cartoConfig = (account, cartocss, table, options = {}) => ({
  account,
  apiv: 'v1',
  tileFormat: 'png',
  config: {
    version: '1.3.0',
    layers: [
      {
        type: 'mapnik',
        options: assign(
          {
            cartocss_version: '2.3.0',
            cartocss,
            sql: `select * from ${table}`
          },
          options
        )
      }
    ]
  }
})
