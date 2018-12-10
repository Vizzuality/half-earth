export const ns = (s, sep = '|') => s.split(sep);

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
        options: {
          cartocss_version: '2.3.0',
          cartocss,
          sql: options.sql || `select * from ${table}`,
          ...options
        }
      }
    ]
  }
});

export const lerp = (value, istart, istop, ostart, ostop) =>
  ostart + (ostop - ostart) * ((value - istart) / (istop - istart));

export const maxClamp = (v, min, max) => Math.max(min, Math.min(max, v));

export const colorMap = { blue: '#0664f6', purple: '#8366e4', violet: '#9632b2' };

export const pick = (o, k) => o && o[k] || o;

export const checkBoolean = bool => typeof bool === 'string' ? bool === 'true' : bool;

export const filenameFromPath = path => path.substring(path.lastIndexOf('/') + 1);
