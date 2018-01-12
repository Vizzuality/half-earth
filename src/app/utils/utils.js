import once from 'lodash/once'
export const assign = (o, ...rest) => Object.assign({}, o, ...rest)
export const ns = (s, sep = '|') => s.split(sep)
export const logOnce = once((...args) => console.log(...args))

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

export const lerp = (value, istart, istop, ostart, ostop) =>
  ostart + (ostop - ostart) * ((value - istart) / (istop - istart))

export const clamp = (v, min, max) => Math.max(min, Math.min(max, v))

export const colorMap = {
  blue: '#0664f6',
  purple: '#8366e4',
  violet: '#9632b2'
}

export const pick = (o, k) => (o && o[k]) || o
