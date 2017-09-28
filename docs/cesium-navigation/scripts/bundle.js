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
      "\n\n/* global MAPBOX_TOKEN */\n\nvar _window = window,\n    fetch = _window.fetch,\n    Cesium = _window.Cesium;\n\n\nvar globalEl = document.querySelector('#global');\nvar regionalEl = document.querySelector('#regional');\nvar landscapeEl = document.querySelector('#landscape');\n\nvar MAP_CONFIG = {\n  'version': '1.3.0',\n  'layers': [{\n    'type': 'mapnik',\n    'options': {\n      'cartocss_version': '2.1.1',\n      'cartocss': '#layer {\\n        polygon-fill: ramp([pvalue], (#f7feae, #9bd8a4, #46aea0, #058092, #045275), jenks)\\n        polygon-opacity: ramp([pvalue], (0.2, 0.4, 0.6, 0.8, 1), jenks)\\n      }\\n      #layer::outline {\\n        line-width: 1\\n        line-color: #ffffff\\n        line-opacity: 0\\n      }',\n      'sql': 'select * from mol_facets'\n    }\n  }]\n};\n\nvar bindFlyTo = function bindFlyTo(v) {\n  return function (lat, long) {\n    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 15000.0;\n    var rest = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n    return v.camera.flyTo(Object.assign({\n      destination: Cesium.Cartesian3.fromDegrees(lat, long, z)\n    }, rest));\n  };\n};\n\nvar disablePanning = function disablePanning(v) {\n  var scene = v.scene;\n\n  scene.screenSpaceCameraController.enableRotate = false;\n  scene.screenSpaceCameraController.enableTranslate = false;\n  scene.screenSpaceCameraController.enableZoom = false;\n  scene.screenSpaceCameraController.enableTilt = false;\n  scene.screenSpaceCameraController.enableLook = false;\n  return v;\n};\n\n// fetch(`https://vectorsize.carto.com/api/v1/map?config=${encodeURIComponent(JSON.stringify(MAP_CONFIG))}`)\n//   .then(d => d.json())\n//   .then(({layergroupid, cdn_url: { templates: {https: { url }} }}) => render(layergroupid, url))\nvar home = [-82.50, 35.09, 18490000.0];\nvar render = function render(layergroupid, https) {\n  var viewer = disablePanning(new Cesium.Viewer('map', {\n    geocoder: false,\n    homeButton: false,\n    sceneModePicker: false,\n    baseLayerPicker: false,\n    navigationHelpButton: false,\n    animation: false,\n    timeline: false,\n    creditsDisplay: false,\n    fullscreenButton: false,\n    skyAtmosphere: false,\n    imageryProvider: new Cesium.MapboxImageryProvider({\n      mapId: 'mapbox.satellite',\n      accessToken: \"pk.eyJ1IjoidmVjdG9yc2l6ZSIsImEiOiJjajVtaXE1cjgwcjF0MndwYjV4Z3V1MzBhIn0.inBCrbB_0lUITta7JCrftg\"\n    })\n  }));\n\n  var flyTo = bindFlyTo(viewer);\n  flyTo.apply(undefined, home);\n  window.v = viewer;\n\n  var mousePosition = new Cesium.Cartesian2(viewer.canvas.width / 2, viewer.canvas.height / 2);\n  var ellipsoid = viewer.scene.globe.ellipsoid;\n  var cartesian = viewer.camera.pickEllipsoid(mousePosition, ellipsoid);\n  if (cartesian) {\n    var cartographic = ellipsoid.cartesianToCartographic(cartesian);\n    var longitudeString = Cesium.Math.toDegrees(cartographic.longitude).toFixed(2);\n    var latitudeString = Cesium.Math.toDegrees(cartographic.latitude).toFixed(2);\n    var heightString = Cesium.Math.toDegrees(cartographic.height).toFixed(2);\n\n    console.log(longitudeString, latitudeString, heightString);\n  }\n\n  // viewer.camera.setView({\n  //   destination: Cesium.Cartesian3.fromDegrees(\n  //     longitude,\n  //     latitude,\n  //     Cesium.Ellipsoid.WGS84.cartesianToCartographic(viewer.camera.position).height\n  //   )\n  // })\n  // flyTo(22.6063012, -19.4333746, 1000000000.0).then(() => {\n  //   flyTo(22.6063012, -19.4333746, 100000000.0)\n  // })\n  // const layers = viewer.imageryLayers\n\n  // layers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({\n  //   url: 'http://storage.googleapis.com/half-earth/v1/demo/mol-tiles/sr_mammals/{z}/{x}/{y}.png'\n  //   // url: 'http://storage.googleapis.com/half-earth/v1/demo/mol-tiles/sr_mammals/{z}/{x}/{y}.png'\n  //   // url: `${https}/vectorsize/api/v1/map/${layergroupid}/{z}/{x}/{y}.png`\n  // }))\n\n  globalEl.addEventListener('click', function () {\n    flyTo.apply(undefined, home);\n  });\n\n  regionalEl.addEventListener('click', function () {\n    flyTo(22.6063012, -19.4333746, 10000000.0);\n  });\n\n  landscapeEl.addEventListener('click', function () {\n    flyTo(22.6063012, -19.4333746, 40000.0, {\n      orientation: {\n        heading: Cesium.Math.toRadians(-15.0),\n        pitch: -Cesium.Math.PI_OVER_FOUR,\n        roll: 0.0\n      }\n    });\n  });\n};\n\nrender();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwLmpzP2JkOWMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIE1BUEJPWF9UT0tFTiAqL1xuXG5jb25zdCB7IGZldGNoLCBDZXNpdW0gfSA9IHdpbmRvd1xuXG5jb25zdCBnbG9iYWxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnbG9iYWwnKVxuY29uc3QgcmVnaW9uYWxFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWdpb25hbCcpXG5jb25zdCBsYW5kc2NhcGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsYW5kc2NhcGUnKVxuXG5jb25zdCBNQVBfQ09ORklHID0ge1xuICAndmVyc2lvbic6ICcxLjMuMCcsXG4gICdsYXllcnMnOiBbe1xuICAgICd0eXBlJzogJ21hcG5paycsXG4gICAgJ29wdGlvbnMnOiB7XG4gICAgICAnY2FydG9jc3NfdmVyc2lvbic6ICcyLjEuMScsXG4gICAgICAnY2FydG9jc3MnOiBgI2xheWVyIHtcbiAgICAgICAgcG9seWdvbi1maWxsOiByYW1wKFtwdmFsdWVdLCAoI2Y3ZmVhZSwgIzliZDhhNCwgIzQ2YWVhMCwgIzA1ODA5MiwgIzA0NTI3NSksIGplbmtzKVxuICAgICAgICBwb2x5Z29uLW9wYWNpdHk6IHJhbXAoW3B2YWx1ZV0sICgwLjIsIDAuNCwgMC42LCAwLjgsIDEpLCBqZW5rcylcbiAgICAgIH1cbiAgICAgICNsYXllcjo6b3V0bGluZSB7XG4gICAgICAgIGxpbmUtd2lkdGg6IDFcbiAgICAgICAgbGluZS1jb2xvcjogI2ZmZmZmZlxuICAgICAgICBsaW5lLW9wYWNpdHk6IDBcbiAgICAgIH1gLFxuICAgICAgJ3NxbCc6ICdzZWxlY3QgKiBmcm9tIG1vbF9mYWNldHMnXG4gICAgfVxuICB9XVxufVxuXG5jb25zdCBiaW5kRmx5VG8gPSB2ID0+IChsYXQsIGxvbmcsIHogPSAxNTAwMC4wLCByZXN0ID0ge30pID0+IHYuY2FtZXJhLmZseVRvKE9iamVjdC5hc3NpZ24oe1xuICBkZXN0aW5hdGlvbjogQ2VzaXVtLkNhcnRlc2lhbjMuZnJvbURlZ3JlZXMobGF0LCBsb25nLCB6KVxufSwgcmVzdCkpXG5cbmNvbnN0IGRpc2FibGVQYW5uaW5nID0gKHYpID0+IHtcbiAgY29uc3QgeyBzY2VuZSB9ID0gdlxuICBzY2VuZS5zY3JlZW5TcGFjZUNhbWVyYUNvbnRyb2xsZXIuZW5hYmxlUm90YXRlID0gZmFsc2VcbiAgc2NlbmUuc2NyZWVuU3BhY2VDYW1lcmFDb250cm9sbGVyLmVuYWJsZVRyYW5zbGF0ZSA9IGZhbHNlXG4gIHNjZW5lLnNjcmVlblNwYWNlQ2FtZXJhQ29udHJvbGxlci5lbmFibGVab29tID0gZmFsc2VcbiAgc2NlbmUuc2NyZWVuU3BhY2VDYW1lcmFDb250cm9sbGVyLmVuYWJsZVRpbHQgPSBmYWxzZVxuICBzY2VuZS5zY3JlZW5TcGFjZUNhbWVyYUNvbnRyb2xsZXIuZW5hYmxlTG9vayA9IGZhbHNlXG4gIHJldHVybiB2XG59XG5cbi8vIGZldGNoKGBodHRwczovL3ZlY3RvcnNpemUuY2FydG8uY29tL2FwaS92MS9tYXA/Y29uZmlnPSR7ZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KE1BUF9DT05GSUcpKX1gKVxuLy8gICAudGhlbihkID0+IGQuanNvbigpKVxuLy8gICAudGhlbigoe2xheWVyZ3JvdXBpZCwgY2RuX3VybDogeyB0ZW1wbGF0ZXM6IHtodHRwczogeyB1cmwgfX0gfX0pID0+IHJlbmRlcihsYXllcmdyb3VwaWQsIHVybCkpXG5jb25zdCBob21lID0gWy04Mi41MCwgMzUuMDksIDE4NDkwMDAwLjBdXG5jb25zdCByZW5kZXIgPSAobGF5ZXJncm91cGlkLCBodHRwcykgPT4ge1xuICBjb25zdCB2aWV3ZXIgPSBkaXNhYmxlUGFubmluZyhuZXcgQ2VzaXVtLlZpZXdlcignbWFwJywge1xuICAgIGdlb2NvZGVyOiBmYWxzZSxcbiAgICBob21lQnV0dG9uOiBmYWxzZSxcbiAgICBzY2VuZU1vZGVQaWNrZXI6IGZhbHNlLFxuICAgIGJhc2VMYXllclBpY2tlcjogZmFsc2UsXG4gICAgbmF2aWdhdGlvbkhlbHBCdXR0b246IGZhbHNlLFxuICAgIGFuaW1hdGlvbjogZmFsc2UsXG4gICAgdGltZWxpbmU6IGZhbHNlLFxuICAgIGNyZWRpdHNEaXNwbGF5OiBmYWxzZSxcbiAgICBmdWxsc2NyZWVuQnV0dG9uOiBmYWxzZSxcbiAgICBza3lBdG1vc3BoZXJlOiBmYWxzZSxcbiAgICBpbWFnZXJ5UHJvdmlkZXI6IG5ldyBDZXNpdW0uTWFwYm94SW1hZ2VyeVByb3ZpZGVyKHtcbiAgICAgIG1hcElkOiAnbWFwYm94LnNhdGVsbGl0ZScsXG4gICAgICBhY2Nlc3NUb2tlbjogTUFQQk9YX1RPS0VOXG4gICAgfSlcbiAgfSkpXG5cbiAgY29uc3QgZmx5VG8gPSBiaW5kRmx5VG8odmlld2VyKVxuICBmbHlUbyguLi5ob21lKVxuICB3aW5kb3cudiA9IHZpZXdlclxuXG4gIHZhciBtb3VzZVBvc2l0aW9uID0gbmV3IENlc2l1bS5DYXJ0ZXNpYW4yKHZpZXdlci5jYW52YXMud2lkdGggLyAyLCB2aWV3ZXIuY2FudmFzLmhlaWdodCAvIDIpXG4gIHZhciBlbGxpcHNvaWQgPSB2aWV3ZXIuc2NlbmUuZ2xvYmUuZWxsaXBzb2lkXG4gIHZhciBjYXJ0ZXNpYW4gPSB2aWV3ZXIuY2FtZXJhLnBpY2tFbGxpcHNvaWQobW91c2VQb3NpdGlvbiwgZWxsaXBzb2lkKVxuICBpZiAoY2FydGVzaWFuKSB7XG4gICAgdmFyIGNhcnRvZ3JhcGhpYyA9IGVsbGlwc29pZC5jYXJ0ZXNpYW5Ub0NhcnRvZ3JhcGhpYyhjYXJ0ZXNpYW4pXG4gICAgdmFyIGxvbmdpdHVkZVN0cmluZyA9IENlc2l1bS5NYXRoLnRvRGVncmVlcyhjYXJ0b2dyYXBoaWMubG9uZ2l0dWRlKS50b0ZpeGVkKDIpXG4gICAgdmFyIGxhdGl0dWRlU3RyaW5nID0gQ2VzaXVtLk1hdGgudG9EZWdyZWVzKGNhcnRvZ3JhcGhpYy5sYXRpdHVkZSkudG9GaXhlZCgyKVxuICAgIHZhciBoZWlnaHRTdHJpbmcgPSBDZXNpdW0uTWF0aC50b0RlZ3JlZXMoY2FydG9ncmFwaGljLmhlaWdodCkudG9GaXhlZCgyKVxuXG4gICAgY29uc29sZS5sb2cobG9uZ2l0dWRlU3RyaW5nLCBsYXRpdHVkZVN0cmluZywgaGVpZ2h0U3RyaW5nKVxuICB9XG5cbiAgLy8gdmlld2VyLmNhbWVyYS5zZXRWaWV3KHtcbiAgLy8gICBkZXN0aW5hdGlvbjogQ2VzaXVtLkNhcnRlc2lhbjMuZnJvbURlZ3JlZXMoXG4gIC8vICAgICBsb25naXR1ZGUsXG4gIC8vICAgICBsYXRpdHVkZSxcbiAgLy8gICAgIENlc2l1bS5FbGxpcHNvaWQuV0dTODQuY2FydGVzaWFuVG9DYXJ0b2dyYXBoaWModmlld2VyLmNhbWVyYS5wb3NpdGlvbikuaGVpZ2h0XG4gIC8vICAgKVxuICAvLyB9KVxuICAvLyBmbHlUbygyMi42MDYzMDEyLCAtMTkuNDMzMzc0NiwgMTAwMDAwMDAwMC4wKS50aGVuKCgpID0+IHtcbiAgLy8gICBmbHlUbygyMi42MDYzMDEyLCAtMTkuNDMzMzc0NiwgMTAwMDAwMDAwLjApXG4gIC8vIH0pXG4gIC8vIGNvbnN0IGxheWVycyA9IHZpZXdlci5pbWFnZXJ5TGF5ZXJzXG5cbiAgLy8gbGF5ZXJzLmFkZEltYWdlcnlQcm92aWRlcihuZXcgQ2VzaXVtLlVybFRlbXBsYXRlSW1hZ2VyeVByb3ZpZGVyKHtcbiAgLy8gICB1cmw6ICdodHRwOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9oYWxmLWVhcnRoL3YxL2RlbW8vbW9sLXRpbGVzL3NyX21hbW1hbHMve3p9L3t4fS97eX0ucG5nJ1xuICAvLyAgIC8vIHVybDogJ2h0dHA6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2hhbGYtZWFydGgvdjEvZGVtby9tb2wtdGlsZXMvc3JfbWFtbWFscy97en0ve3h9L3t5fS5wbmcnXG4gIC8vICAgLy8gdXJsOiBgJHtodHRwc30vdmVjdG9yc2l6ZS9hcGkvdjEvbWFwLyR7bGF5ZXJncm91cGlkfS97en0ve3h9L3t5fS5wbmdgXG4gIC8vIH0pKVxuXG4gIGdsb2JhbEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGZseVRvKC4uLmhvbWUpXG4gIH0pXG5cbiAgcmVnaW9uYWxFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmbHlUbygyMi42MDYzMDEyLCAtMTkuNDMzMzc0NiwgMTAwMDAwMDAuMClcbiAgfSlcblxuICBsYW5kc2NhcGVFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBmbHlUbygyMi42MDYzMDEyLCAtMTkuNDMzMzc0NiwgNDAwMDAuMCwge1xuICAgICAgb3JpZW50YXRpb246IHtcbiAgICAgICAgaGVhZGluZzogQ2VzaXVtLk1hdGgudG9SYWRpYW5zKC0xNS4wKSxcbiAgICAgICAgcGl0Y2g6IC1DZXNpdW0uTWF0aC5QSV9PVkVSX0ZPVVIsXG4gICAgICAgIHJvbGw6IDAuMFxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbnJlbmRlcigpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2FwcC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQVhBO0FBRkE7QUFGQTtBQUNBO0FBbUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFYQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n"
    );
  }
]);