!(function(n) {
  function e(a) {
    if (l[a]) return l[a].exports;
    var c = (l[a] = { i: a, l: !1, exports: {} });
    return n[a].call(c.exports, c, c.exports, e), (c.l = !0), c.exports;
  }
  var l = {};
  (e.m = n),
    (e.c = l),
    (e.d = function(n, l, a) {
      e.o(n, l) ||
        Object.defineProperty(n, l, {
          configurable: !1,
          enumerable: !0,
          get: a
        });
    }),
    (e.n = function(n) {
      var l =
        n && n.__esModule
          ? function() {
              return n.default;
            }
          : function() {
              return n;
            };
      return e.d(l, "a", l), l;
    }),
    (e.o = function(n, e) {
      return Object.prototype.hasOwnProperty.call(n, e);
    }),
    (e.p = ""),
    e((e.s = 0));
})([
  function(module, exports, __webpack_require__) {
    "use strict";
    eval(
      "\n\n/* global MAPBOX_TOKEN */\n\nvar _window = window,\n    fetch = _window.fetch,\n    Cesium = _window.Cesium;\n\n\nvar $ = function $(sel) {\n  return document.querySelector(sel);\n};\n\nvar $global = $('#global');\nvar $regional = $('#regional');\nvar $landscape = $('#landscape');\nvar $birds = $('#birds');\nvar $mammals = $('#mammals');\n\n// const MAP_CONFIG = {\n//   'version': '1.3.0',\n//   'layers': [{\n//     'type': 'mapnik',\n//     'options': {\n//       'cartocss_version': '2.1.1',\n//       'cartocss': `#layer {\n//         polygon-fill: ramp([pvalue], (#f7feae, #9bd8a4, #46aea0, #058092, #045275), jenks)\n//         polygon-opacity: ramp([pvalue], (0.2, 0.4, 0.6, 0.8, 1), jenks)\n//       }\n//       #layer::outline {\n//         line-width: 1\n//         line-color: #ffffff\n//         line-opacity: 0\n//       }`,\n//       'sql': 'select * from mol_facets'\n//     }\n//   }]\n// }\n\nvar bindFlyTo = function bindFlyTo(v) {\n  return function (lat, long) {\n    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 15000.0;\n    var rest = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n    return v.camera.flyTo(Object.assign({\n      destination: Cesium.Cartesian3.fromDegrees(lat, long, z)\n    }, rest));\n  };\n};\n\nvar disablePanning = function disablePanning(v) {\n  var scene = v.scene;\n\n  scene.screenSpaceCameraController.enableRotate = false;\n  scene.screenSpaceCameraController.enableTranslate = false;\n  scene.screenSpaceCameraController.enableZoom = false;\n  scene.screenSpaceCameraController.enableTilt = false;\n  scene.screenSpaceCameraController.enableLook = false;\n  return v;\n};\n\n// fetch(`https://vectorsize.carto.com/api/v1/map?config=${encodeURIComponent(JSON.stringify(MAP_CONFIG))}`)\n//   .then(d => d.json())\n//   .then(({layergroupid, cdn_url: { templates: {https: { url }} }}) => render(layergroupid, url))\nvar home = [-82.50, 35.09, 18490000.0];\nvar render = function render(layergroupid, https) {\n  var viewer = disablePanning(new Cesium.Viewer('map', {\n    geocoder: false,\n    homeButton: false,\n    sceneModePicker: false,\n    baseLayerPicker: false,\n    navigationHelpButton: false,\n    animation: false,\n    timeline: false,\n    creditsDisplay: false,\n    fullscreenButton: false,\n    skyAtmosphere: false,\n    imageryProvider: new Cesium.MapboxImageryProvider({\n      mapId: 'mapbox.satellite',\n      accessToken: \"pk.eyJ1IjoidmVjdG9yc2l6ZSIsImEiOiJjajVtaXE1cjgwcjF0MndwYjV4Z3V1MzBhIn0.inBCrbB_0lUITta7JCrftg\"\n    })\n  }));\n\n  var flyTo = bindFlyTo(viewer);\n  flyTo.apply(undefined, home);\n  window.v = viewer;\n\n  var mousePosition = new Cesium.Cartesian2(viewer.canvas.width / 2, viewer.canvas.height / 2);\n  var ellipsoid = viewer.scene.globe.ellipsoid;\n  var cartesian = viewer.camera.pickEllipsoid(mousePosition, ellipsoid);\n  if (cartesian) {\n    var cartographic = ellipsoid.cartesianToCartographic(cartesian);\n    var longitudeString = Cesium.Math.toDegrees(cartographic.longitude).toFixed(2);\n    var latitudeString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(2);\n    var heightString = Cesium.Math.toDegrees(cartographic.height).toFixed(2);\n\n    console.log(longitudeString, latitudeString, heightString);\n  }\n\n  // viewer.camera.setView({\n  //   destination: Cesium.Cartesian3.fromDegrees(\n  //     longitude,\n  //     latitude,\n  //     Cesium.Ellipsoid.WGS84.cartesianToCartographic(viewer.camera.position).height\n  //   )\n  // })\n  // flyTo(22.6063012, -19.4333746, 1000000000.0).then(() => {\n  //   flyTo(22.6063012, -19.4333746, 100000000.0)\n  // })\n  var layers = viewer.imageryLayers;\n\n  var birds = layers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({\n    url: 'http://storage.googleapis.com/half-earth/v1/demo/mol-rgb/sr_birds/{z}/{x}/{y}.png'\n  }));\n\n  var mammals = layers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({\n    url: 'http://storage.googleapis.com/half-earth/v1/demo/mol-rgb/sr_mammals/{z}/{x}/{y}.png'\n  }));\n\n  birds.show = false;\n  mammals.show = false;\n\n  $global.addEventListener('click', function () {\n    flyTo.apply(undefined, home);\n  });\n\n  $birds.addEventListener('click', function (e) {\n    birds.show = Boolean(e.target.checked);\n  });\n\n  $mammals.addEventListener('click', function (e) {\n    mammals.show = Boolean(e.target.checked);\n  });\n\n  $regional.addEventListener('click', function () {\n    flyTo(22.6063012, -19.4333746, 10000000.0);\n  });\n\n  $landscape.addEventListener('click', function () {\n    flyTo(22.6063012, -19.4333746, 40000.0, {\n      orientation: {\n        heading: Cesium.Math.toRadians(-15.0),\n        pitch: -Cesium.Math.PI_OVER_FOUR,\n        roll: 0.0\n      }\n    });\n  });\n};\n\nrender();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwLmpzP2JkOWMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIE1BUEJPWF9UT0tFTiAqL1xuXG5jb25zdCB7IGZldGNoLCBDZXNpdW0gfSA9IHdpbmRvd1xuXG5jb25zdCAkID0gc2VsID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsKVxuXG5jb25zdCAkZ2xvYmFsID0gJCgnI2dsb2JhbCcpXG5jb25zdCAkcmVnaW9uYWwgPSAkKCcjcmVnaW9uYWwnKVxuY29uc3QgJGxhbmRzY2FwZSA9ICQoJyNsYW5kc2NhcGUnKVxuY29uc3QgJGJpcmRzID0gJCgnI2JpcmRzJylcbmNvbnN0ICRtYW1tYWxzID0gJCgnI21hbW1hbHMnKVxuXG4vLyBjb25zdCBNQVBfQ09ORklHID0ge1xuLy8gICAndmVyc2lvbic6ICcxLjMuMCcsXG4vLyAgICdsYXllcnMnOiBbe1xuLy8gICAgICd0eXBlJzogJ21hcG5paycsXG4vLyAgICAgJ29wdGlvbnMnOiB7XG4vLyAgICAgICAnY2FydG9jc3NfdmVyc2lvbic6ICcyLjEuMScsXG4vLyAgICAgICAnY2FydG9jc3MnOiBgI2xheWVyIHtcbi8vICAgICAgICAgcG9seWdvbi1maWxsOiByYW1wKFtwdmFsdWVdLCAoI2Y3ZmVhZSwgIzliZDhhNCwgIzQ2YWVhMCwgIzA1ODA5MiwgIzA0NTI3NSksIGplbmtzKVxuLy8gICAgICAgICBwb2x5Z29uLW9wYWNpdHk6IHJhbXAoW3B2YWx1ZV0sICgwLjIsIDAuNCwgMC42LCAwLjgsIDEpLCBqZW5rcylcbi8vICAgICAgIH1cbi8vICAgICAgICNsYXllcjo6b3V0bGluZSB7XG4vLyAgICAgICAgIGxpbmUtd2lkdGg6IDFcbi8vICAgICAgICAgbGluZS1jb2xvcjogI2ZmZmZmZlxuLy8gICAgICAgICBsaW5lLW9wYWNpdHk6IDBcbi8vICAgICAgIH1gLFxuLy8gICAgICAgJ3NxbCc6ICdzZWxlY3QgKiBmcm9tIG1vbF9mYWNldHMnXG4vLyAgICAgfVxuLy8gICB9XVxuLy8gfVxuXG5jb25zdCBiaW5kRmx5VG8gPSB2ID0+IChsYXQsIGxvbmcsIHogPSAxNTAwMC4wLCByZXN0ID0ge30pID0+IHYuY2FtZXJhLmZseVRvKE9iamVjdC5hc3NpZ24oe1xuICBkZXN0aW5hdGlvbjogQ2VzaXVtLkNhcnRlc2lhbjMuZnJvbURlZ3JlZXMobGF0LCBsb25nLCB6KVxufSwgcmVzdCkpXG5cbmNvbnN0IGRpc2FibGVQYW5uaW5nID0gKHYpID0+IHtcbiAgY29uc3QgeyBzY2VuZSB9ID0gdlxuICBzY2VuZS5zY3JlZW5TcGFjZUNhbWVyYUNvbnRyb2xsZXIuZW5hYmxlUm90YXRlID0gZmFsc2VcbiAgc2NlbmUuc2NyZWVuU3BhY2VDYW1lcmFDb250cm9sbGVyLmVuYWJsZVRyYW5zbGF0ZSA9IGZhbHNlXG4gIHNjZW5lLnNjcmVlblNwYWNlQ2FtZXJhQ29udHJvbGxlci5lbmFibGVab29tID0gZmFsc2VcbiAgc2NlbmUuc2NyZWVuU3BhY2VDYW1lcmFDb250cm9sbGVyLmVuYWJsZVRpbHQgPSBmYWxzZVxuICBzY2VuZS5zY3JlZW5TcGFjZUNhbWVyYUNvbnRyb2xsZXIuZW5hYmxlTG9vayA9IGZhbHNlXG4gIHJldHVybiB2XG59XG5cbi8vIGZldGNoKGBodHRwczovL3ZlY3RvcnNpemUuY2FydG8uY29tL2FwaS92MS9tYXA/Y29uZmlnPSR7ZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KE1BUF9DT05GSUcpKX1gKVxuLy8gICAudGhlbihkID0+IGQuanNvbigpKVxuLy8gICAudGhlbigoe2xheWVyZ3JvdXBpZCwgY2RuX3VybDogeyB0ZW1wbGF0ZXM6IHtodHRwczogeyB1cmwgfX0gfX0pID0+IHJlbmRlcihsYXllcmdyb3VwaWQsIHVybCkpXG5jb25zdCBob21lID0gWy04Mi41MCwgMzUuMDksIDE4NDkwMDAwLjBdXG5jb25zdCByZW5kZXIgPSAobGF5ZXJncm91cGlkLCBodHRwcykgPT4ge1xuICBjb25zdCB2aWV3ZXIgPSBkaXNhYmxlUGFubmluZyhuZXcgQ2VzaXVtLlZpZXdlcignbWFwJywge1xuICAgIGdlb2NvZGVyOiBmYWxzZSxcbiAgICBob21lQnV0dG9uOiBmYWxzZSxcbiAgICBzY2VuZU1vZGVQaWNrZXI6IGZhbHNlLFxuICAgIGJhc2VMYXllclBpY2tlcjogZmFsc2UsXG4gICAgbmF2aWdhdGlvbkhlbHBCdXR0b246IGZhbHNlLFxuICAgIGFuaW1hdGlvbjogZmFsc2UsXG4gICAgdGltZWxpbmU6IGZhbHNlLFxuICAgIGNyZWRpdHNEaXNwbGF5OiBmYWxzZSxcbiAgICBmdWxsc2NyZWVuQnV0dG9uOiBmYWxzZSxcbiAgICBza3lBdG1vc3BoZXJlOiBmYWxzZSxcbiAgICBpbWFnZXJ5UHJvdmlkZXI6IG5ldyBDZXNpdW0uTWFwYm94SW1hZ2VyeVByb3ZpZGVyKHtcbiAgICAgIG1hcElkOiAnbWFwYm94LnNhdGVsbGl0ZScsXG4gICAgICBhY2Nlc3NUb2tlbjogTUFQQk9YX1RPS0VOXG4gICAgfSlcbiAgfSkpXG5cbiAgY29uc3QgZmx5VG8gPSBiaW5kRmx5VG8odmlld2VyKVxuICBmbHlUbyguLi5ob21lKVxuICB3aW5kb3cudiA9IHZpZXdlclxuXG4gIHZhciBtb3VzZVBvc2l0aW9uID0gbmV3IENlc2l1bS5DYXJ0ZXNpYW4yKHZpZXdlci5jYW52YXMud2lkdGggLyAyLCB2aWV3ZXIuY2FudmFzLmhlaWdodCAvIDIpXG4gIHZhciBlbGxpcHNvaWQgPSB2aWV3ZXIuc2NlbmUuZ2xvYmUuZWxsaXBzb2lkXG4gIHZhciBjYXJ0ZXNpYW4gPSB2aWV3ZXIuY2FtZXJhLnBpY2tFbGxpcHNvaWQobW91c2VQb3NpdGlvbiwgZWxsaXBzb2lkKVxuICBpZiAoY2FydGVzaWFuKSB7XG4gICAgdmFyIGNhcnRvZ3JhcGhpYyA9IGVsbGlwc29pZC5jYXJ0ZXNpYW5Ub0NhcnRvZ3JhcGhpYyhjYXJ0ZXNpYW4pXG4gICAgdmFyIGxvbmdpdHVkZVN0cmluZyA9IENlc2l1bS5NYXRoLnRvRGVncmVlcyhjYXJ0b2dyYXBoaWMubG9uZ2l0dWRlKS50b0ZpeGVkKDIpXG4gICAgdmFyIGxhdGl0dWRlU3RyaW5nID0gQ2VzaXVtLk1hdGgudG9EZWdyZWVzKGNhcnRvZ3JhcGhpYy5sYXRpdHVkZSkudG9GaXhlZCgyKVxuICAgIHZhciBoZWlnaHRTdHJpbmcgPSBDZXNpdW0uTWF0aC50b0RlZ3JlZXMoY2FydG9ncmFwaGljLmhlaWdodCkudG9GaXhlZCgyKVxuXG4gICAgY29uc29sZS5sb2cobG9uZ2l0dWRlU3RyaW5nLCBsYXRpdHVkZVN0cmluZywgaGVpZ2h0U3RyaW5nKVxuICB9XG5cbiAgLy8gdmlld2VyLmNhbWVyYS5zZXRWaWV3KHtcbiAgLy8gICBkZXN0aW5hdGlvbjogQ2VzaXVtLkNhcnRlc2lhbjMuZnJvbURlZ3JlZXMoXG4gIC8vICAgICBsb25naXR1ZGUsXG4gIC8vICAgICBsYXRpdHVkZSxcbiAgLy8gICAgIENlc2l1bS5FbGxpcHNvaWQuV0dTODQuY2FydGVzaWFuVG9DYXJ0b2dyYXBoaWModmlld2VyLmNhbWVyYS5wb3NpdGlvbikuaGVpZ2h0XG4gIC8vICAgKVxuICAvLyB9KVxuICAvLyBmbHlUbygyMi42MDYzMDEyLCAtMTkuNDMzMzc0NiwgMTAwMDAwMDAwMC4wKS50aGVuKCgpID0+IHtcbiAgLy8gICBmbHlUbygyMi42MDYzMDEyLCAtMTkuNDMzMzc0NiwgMTAwMDAwMDAwLjApXG4gIC8vIH0pXG4gIGNvbnN0IGxheWVycyA9IHZpZXdlci5pbWFnZXJ5TGF5ZXJzXG5cbiAgY29uc3QgYmlyZHMgPSBsYXllcnMuYWRkSW1hZ2VyeVByb3ZpZGVyKG5ldyBDZXNpdW0uVXJsVGVtcGxhdGVJbWFnZXJ5UHJvdmlkZXIoe1xuICAgIHVybDogJ2h0dHA6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2hhbGYtZWFydGgvdjEvZGVtby9tb2wtcmdiL3NyX2JpcmRzL3t6fS97eH0ve3l9LnBuZydcbiAgfSkpXG5cbiAgY29uc3QgbWFtbWFscyA9IGxheWVycy5hZGRJbWFnZXJ5UHJvdmlkZXIobmV3IENlc2l1bS5VcmxUZW1wbGF0ZUltYWdlcnlQcm92aWRlcih7XG4gICAgdXJsOiAnaHR0cDovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vaGFsZi1lYXJ0aC92MS9kZW1vL21vbC1yZ2Ivc3JfbWFtbWFscy97en0ve3h9L3t5fS5wbmcnXG4gIH0pKVxuXG4gIGJpcmRzLnNob3cgPSBmYWxzZVxuICBtYW1tYWxzLnNob3cgPSBmYWxzZVxuXG4gICRnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZmx5VG8oLi4uaG9tZSlcbiAgfSlcblxuICAkYmlyZHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBiaXJkcy5zaG93ID0gQm9vbGVhbihlLnRhcmdldC5jaGVja2VkKVxuICB9KVxuXG4gICRtYW1tYWxzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgbWFtbWFscy5zaG93ID0gQm9vbGVhbihlLnRhcmdldC5jaGVja2VkKVxuICB9KVxuXG4gICRyZWdpb25hbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmbHlUbygyMi42MDYzMDEyLCAtMTkuNDMzMzc0NiwgMTAwMDAwMDAuMClcbiAgfSlcblxuICAkbGFuZHNjYXBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZseVRvKDIyLjYwNjMwMTIsIC0xOS40MzMzNzQ2LCA0MDAwMC4wLCB7XG4gICAgICBvcmllbnRhdGlvbjoge1xuICAgICAgICBoZWFkaW5nOiBDZXNpdW0uTWF0aC50b1JhZGlhbnMoLTE1LjApLFxuICAgICAgICBwaXRjaDogLUNlc2l1bS5NYXRoLlBJX09WRVJfRk9VUixcbiAgICAgICAgcm9sbDogMC4wXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxucmVuZGVyKClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVhBO0FBQ0E7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n"
    );
  }
]);
