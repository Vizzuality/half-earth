const maximumLevel = 0
export default {
  layers: [
    {
      name: 'birds',
      type: 'UrlTemplate',
      // url: 'https://cartocdn-ashbu_d.global.ssl.fastly.net/jcalonso/api/v1/map/jcalonso@acf357ab@73d17c35d9d98144ff2a1e9005236bd2:1506440445299/1/{z}/{x}/{y}.png',
      url:
        'http://storage.googleapis.com/half-earth/v1/demo/mol-rgb/sr_birds/{z}/{x}/{y}.png',
      maximumLevel: { maximumLevel },
      visible: false
    },
    {
      name: 'mammals',
      type: 'UrlTemplate',
      url:
        'http://storage.googleapis.com/half-earth/v1/demo/mol-rgb/sr_mammals/{z}/{x}/{y}.png',
      maximumLevel: { maximumLevel },
      visible: false
    },
    {
      name: 'KPA',
      type: 'UrlTemplate',
      url:
        'https://cartocdn-ashbu.global.ssl.fastly.net/simbiotica/api/v1/map/f270dbb613da2f1070ba58689f139d85:1506097102253/0/{z}/{x}/{y}.png',
      maximumLevel: { maximumLevel },
      visible: false
    },
    {
      name: 'PA',
      type: 'UrlTemplate',
      url:
        'https://cartocdn-ashbu.global.ssl.fastly.net/simbiotica/api/v1/map/7ee5af5d52cd4929232b8b60961cbd02:1462351287227/0/{z}/{x}/{y}.png',
      maximumLevel: { maximumLevel },
      visible: false
    },
    {
      name: 'pressures',
      type: 'WebMapService',
      format: 'image/png',
      layers: 'GUF28_DLR_v1_Mosaic',
      srs: 'EPSG:4326',
      transparent: true,
      url: 'https://geoservice.dlr.de/eoc/land/wms?service:WMS&request:GetMap',
      maximumLevel: { maximumLevel },
      visible: false
    }
  ]
}
