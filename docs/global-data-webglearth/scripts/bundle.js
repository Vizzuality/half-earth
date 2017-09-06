!(function(n) {
  function e(o) {
    if (t[o]) return t[o].exports;
    var l = (t[o] = { i: o, l: !1, exports: {} });
    return n[o].call(l.exports, l, l.exports, e), (l.l = !0), l.exports;
  }
  var t = {};
  (e.m = n),
    (e.c = t),
    (e.d = function(n, t, o) {
      e.o(n, t) ||
        Object.defineProperty(n, t, {
          configurable: !1,
          enumerable: !0,
          get: o
        });
    }),
    (e.n = function(n) {
      var t =
        n && n.__esModule
          ? function() {
              return n.default;
            }
          : function() {
              return n;
            };
      return e.d(t, "a", t), t;
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
      '\n\n/* global MAP_CONFIG */\nvar _window = window,\n    fetch = _window.fetch,\n    WE = _window.WE;\n\nvar Globe = WE.map;\n\ndocument.addEventListener(\'DOMContentLoaded\', function () {\n  var loader = document.querySelector(\'#loading\');\n\n  var render = function render(layergroupid, https) {\n    loader.style.display = \'none\';\n    var options = { atmosphere: true, center: [0, 0], zoom: 0 };\n    var earth = new Globe(\'map\', options);\n\n    WE.tileLayer(\'http://data.webglearth.com/natural-earth-color/{z}/{x}/{y}.jpg\', {\n      tileSize: 256,\n      bounds: [[-85, -180], [85, 180]],\n      minZoom: 0,\n      maxZoom: 16,\n      attribution: \'WebGLEarth example\',\n      tms: true\n    }).addTo(earth);\n\n    WE.tileLayer(https + \'/vectorsize/api/v1/map/\' + layergroupid + \'/{z}/{x}/{y}.png\', {\n      tileSize: 256,\n      bounds: [[-85, -180], [85, 180]],\n      minZoom: 0,\n      maxZoom: 16,\n      attribution: \'WebGLEarth example\'\n      // tms: true\n    }).addTo(earth);\n  };\n\n  fetch(\'https://vectorsize.carto.com/api/v1/map?config=\' + encodeURIComponent(JSON.stringify({"version":"1.3.0","layers":[{"type":"mapnik","options":{"cartocss_version":"2.1.1","cartocss":"#layer { polygon-fill: ramp([pvalue], (#f7feae, #9bd8a4, #46aea0, #058092, #045275), jenks); polygon-opacity: ramp([pvalue], (0.2, 0.4, 0.6, 0.8, 1), jenks);} #layer::outline { line-width: 1; line-color: #ffffff; line-opacity: 0;}","sql":"select * from mol_facets"}}]}))).then(function (d) {\n    return d.json();\n  }).then(function (_ref) {\n    var layergroupid = _ref.layergroupid,\n        url = _ref.cdn_url.templates.https.url;\n    return render(layergroupid, url);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYXBwLmpzP2JkOWMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIE1BUF9DT05GSUcgKi9cbmNvbnN0IHsgZmV0Y2gsIFdFIH0gPSB3aW5kb3dcbmNvbnN0IEdsb2JlID0gV0UubWFwXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkaW5nJylcblxuICBjb25zdCByZW5kZXIgPSAobGF5ZXJncm91cGlkLCBodHRwcykgPT4ge1xuICAgIGxvYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgY29uc3Qgb3B0aW9ucyA9IHthdG1vc3BoZXJlOiB0cnVlLCBjZW50ZXI6IFswLCAwXSwgem9vbTogMH1cbiAgICBjb25zdCBlYXJ0aCA9IG5ldyBHbG9iZSgnbWFwJywgb3B0aW9ucylcblxuICAgIFdFLnRpbGVMYXllcignaHR0cDovL2RhdGEud2ViZ2xlYXJ0aC5jb20vbmF0dXJhbC1lYXJ0aC1jb2xvci97en0ve3h9L3t5fS5qcGcnLCB7XG4gICAgICB0aWxlU2l6ZTogMjU2LFxuICAgICAgYm91bmRzOiBbWy04NSwgLTE4MF0sIFs4NSwgMTgwXV0sXG4gICAgICBtaW5ab29tOiAwLFxuICAgICAgbWF4Wm9vbTogMTYsXG4gICAgICBhdHRyaWJ1dGlvbjogJ1dlYkdMRWFydGggZXhhbXBsZScsXG4gICAgICB0bXM6IHRydWVcbiAgICB9KS5hZGRUbyhlYXJ0aClcblxuICAgIFdFLnRpbGVMYXllcihgJHtodHRwc30vdmVjdG9yc2l6ZS9hcGkvdjEvbWFwLyR7bGF5ZXJncm91cGlkfS97en0ve3h9L3t5fS5wbmdgLCB7XG4gICAgICB0aWxlU2l6ZTogMjU2LFxuICAgICAgYm91bmRzOiBbWy04NSwgLTE4MF0sIFs4NSwgMTgwXV0sXG4gICAgICBtaW5ab29tOiAwLFxuICAgICAgbWF4Wm9vbTogMTYsXG4gICAgICBhdHRyaWJ1dGlvbjogJ1dlYkdMRWFydGggZXhhbXBsZSdcbiAgICAgIC8vIHRtczogdHJ1ZVxuICAgIH0pLmFkZFRvKGVhcnRoKVxuICB9XG5cbiAgZmV0Y2goYGh0dHBzOi8vdmVjdG9yc2l6ZS5jYXJ0by5jb20vYXBpL3YxL21hcD9jb25maWc9JHtlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoTUFQX0NPTkZJRykpfWApXG4gICAgLnRoZW4oZCA9PiBkLmpzb24oKSlcbiAgICAudGhlbigoe2xheWVyZ3JvdXBpZCwgY2RuX3VybDogeyB0ZW1wbGF0ZXM6IHtodHRwczogeyB1cmwgfX0gfX0pID0+IHJlbmRlcihsYXllcmdyb3VwaWQsIHVybCkpXG59KVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hcHAuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n'
    );
  }
]);
