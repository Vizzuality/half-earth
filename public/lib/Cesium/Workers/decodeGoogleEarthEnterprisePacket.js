/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2017 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */
!(function () {
  define('Core/defined', [], function () {
    'use strict'
    function e (e) {
      return void 0 !== e && e !== null
    }
    return e
  }),
    define('Core/DeveloperError', ['./defined'], function (e) {
      'use strict'
      function t (e) {
        (this.name = 'DeveloperError'), (this.message = e)
        var t
        try {
          throw new Error()
        } catch (e) {
          t = e.stack
        }
        this.stack = t
      }
      return (
        e(Object.create) &&
          ((t.prototype = Object.create(Error.prototype)),
          (t.prototype.constructor = t)),
        (t.prototype.toString = function () {
          var t = this.name + ': ' + this.message
          return e(this.stack) && (t += '\n' + this.stack.toString()), t
        }),
        (t.throwInstantiationError = function () {
          throw new t(
            'This function defines an interface and should not be called directly.'
          )
        }),
        t
      )
    }),
    define('Core/Check', ['./defined', './DeveloperError'], function (e, t) {
      'use strict'
      function r (e) {
        return e + ' is required, actual value was undefined'
      }
      function n (e, t, r) {
        return (
          'Expected ' + r + ' to be typeof ' + t + ', actual typeof was ' + e
        )
      }
      var i = {}
      return (
        (i.typeOf = {}),
        (i.defined = function (n, i) {
          if (!e(i)) throw new t(r(n))
        }),
        (i.typeOf.func = function (e, r) {
          if (typeof r !== 'function') throw new t(n(typeof r, 'function', e))
        }),
        (i.typeOf.string = function (e, r) {
          if (typeof r !== 'string') throw new t(n(typeof r, 'string', e))
        }),
        (i.typeOf.number = function (e, r) {
          if (typeof r !== 'number') throw new t(n(typeof r, 'number', e))
        }),
        (i.typeOf.number.lessThan = function (e, r, n) {
          if ((i.typeOf.number(e, r), r >= n)) {
            throw new t(
              'Expected ' +
                e +
                ' to be less than ' +
                n +
                ', actual value was ' +
                r
            )
          }
        }),
        (i.typeOf.number.lessThanOrEquals = function (e, r, n) {
          if ((i.typeOf.number(e, r), r > n)) {
            throw new t(
              'Expected ' +
                e +
                ' to be less than or equal to ' +
                n +
                ', actual value was ' +
                r
            )
          }
        }),
        (i.typeOf.number.greaterThan = function (e, r, n) {
          if ((i.typeOf.number(e, r), r <= n)) {
            throw new t(
              'Expected ' +
                e +
                ' to be greater than ' +
                n +
                ', actual value was ' +
                r
            )
          }
        }),
        (i.typeOf.number.greaterThanOrEquals = function (e, r, n) {
          if ((i.typeOf.number(e, r), r < n)) {
            throw new t(
              'Expected ' +
                e +
                ' to be greater than or equal to' +
                n +
                ', actual value was ' +
                r
            )
          }
        }),
        (i.typeOf.object = function (e, r) {
          if (typeof r !== 'object') throw new t(n(typeof r, 'object', e))
        }),
        (i.typeOf.bool = function (e, r) {
          if (typeof r !== 'boolean') throw new t(n(typeof r, 'boolean', e))
        }),
        (i.typeOf.number.equals = function (e, r, n, a) {
          if ((i.typeOf.number(e, n), i.typeOf.number(r, a), n !== a)) {
            throw new t(
              e +
                ' must be equal to ' +
                r +
                ', the actual values are ' +
                n +
                ' and ' +
                a
            )
          }
        }),
        i
      )
    }),
    define('Core/RuntimeError', ['./defined'], function (e) {
      'use strict'
      function t (e) {
        (this.name = 'RuntimeError'), (this.message = e)
        var t
        try {
          throw new Error()
        } catch (e) {
          t = e.stack
        }
        this.stack = t
      }
      return (
        e(Object.create) &&
          ((t.prototype = Object.create(Error.prototype)),
          (t.prototype.constructor = t)),
        (t.prototype.toString = function () {
          var t = this.name + ': ' + this.message
          return e(this.stack) && (t += '\n' + this.stack.toString()), t
        }),
        t
      )
    }),
    define(
      'Core/decodeGoogleEarthEnterpriseData',
      ['./Check', './defined', './RuntimeError'],
      function (e, t, r) {
        'use strict'
        function n (e, t) {
          if (n.passThroughDataForTesting) return t
          var o = e.byteLength
          if (o === 0 || o % 4 !== 0) {
            throw new r(
              'The length of key must be greater than 0 and a multiple of 4.'
            )
          }
          var s = new DataView(t),
            f = s.getUint32(0, !0)
          if (f === i || f === a) return t
          for (
            var u,
              c = new DataView(e),
              l = 0,
              d = t.byteLength,
              h = d - d % 8,
              w = o,
              b = 8;
            l < h;

          ) {
            for (b = (b + 8) % 24, u = b; l < h && u < w;) {
              s.setUint32(l, s.getUint32(l, !0) ^ c.getUint32(u, !0), !0),
                s.setUint32(
                  l + 4,
                  s.getUint32(l + 4, !0) ^ c.getUint32(u + 4, !0),
                  !0
                ),
                (l += 8),
                (u += 24)
            }
          }
          if (l < d) {
            for (u >= w && ((b = (b + 8) % 24), (u = b)); l < d;) { s.setUint8(l, s.getUint8(l) ^ c.getUint8(u)), l++, u++ }
          }
        }
        var i = 1953029805,
          a = 2917034100
        return (n.passThroughDataForTesting = !1), n
      }
    ),
    define('Core/isBitSet', [], function () {
      'use strict'
      function e (e, t) {
        return (e & t) !== 0
      }
      return e
    }),
    define(
      'Core/GoogleEarthEnterpriseTileInformation',
      ['./defined', './isBitSet'],
      function (e, t) {
        'use strict'
        function r (e, t, r, n, i, a) {
          (this._bits = e),
            (this.cnodeVersion = t),
            (this.imageryVersion = r),
            (this.terrainVersion = n),
            (this.imageryProvider = i),
            (this.terrainProvider = a),
            (this.ancestorHasTerrain = !1),
            (this.terrainState = void 0)
        }
        var n = [1, 2, 4, 8],
          i = 15,
          a = 16,
          o = 64,
          s = 128
        return (
          (r.clone = function (t, n) {
            return (
              e(n)
                ? ((n._bits = t._bits),
                  (n.cnodeVersion = t.cnodeVersion),
                  (n.imageryVersion = t.imageryVersion),
                  (n.terrainVersion = t.terrainVersion),
                  (n.imageryProvider = t.imageryProvider),
                  (n.terrainProvider = t.terrainProvider))
                : (n = new r(
                    t._bits,
                    t.cnodeVersion,
                    t.imageryVersion,
                    t.terrainVersion,
                    t.imageryProvider,
                    t.terrainProvider
                  )),
              (n.ancestorHasTerrain = t.ancestorHasTerrain),
              (n.terrainState = t.terrainState),
              n
            )
          }),
          (r.prototype.setParent = function (e) {
            this.ancestorHasTerrain = e.ancestorHasTerrain || this.hasTerrain()
          }),
          (r.prototype.hasSubtree = function () {
            return t(this._bits, a)
          }),
          (r.prototype.hasImagery = function () {
            return t(this._bits, o)
          }),
          (r.prototype.hasTerrain = function () {
            return t(this._bits, s)
          }),
          (r.prototype.hasChildren = function () {
            return t(this._bits, i)
          }),
          (r.prototype.hasChild = function (e) {
            return t(this._bits, n[e])
          }),
          (r.prototype.getChildBitmask = function () {
            return this._bits & i
          }),
          r
        )
      }
    ),
    (function (e) {
      if (typeof exports === 'object' && typeof module !== 'undefined') { module.exports = e() } else if (typeof define === 'function' && define.amd) { define('ThirdParty/pako_inflate', [], e) } else {
        var t;
        (t =
          typeof window !== 'undefined'
            ? window
            : typeof global !== 'undefined'
              ? global
              : typeof self !== 'undefined' ? self : this),
          (t.pako = e())
      }
    })(function () {
      return (function e (t, r, n) {
        function i (o, s) {
          if (!r[o]) {
            if (!t[o]) {
              var f = typeof require === 'function' && require
              if (!s && f) return f(o, !0)
              if (a) return a(o, !0)
              var u = new Error("Cannot find module '" + o + "'")
              throw ((u.code = 'MODULE_NOT_FOUND'), u)
            }
            var c = (r[o] = { exports: {} })
            t[o][0].call(
              c.exports,
              function (e) {
                var r = t[o][1][e]
                return i(r || e)
              },
              c,
              c.exports,
              e,
              t,
              r,
              n
            )
          }
          return r[o].exports
        }
        for (
          var a = typeof require === 'function' && require, o = 0;
          o < n.length;
          o++
        ) { i(n[o]) }
        return i
      })(
        {
          1: [
            function (e, t, r) {
              'use strict'
              var n =
                typeof Uint8Array !== 'undefined' &&
                typeof Uint16Array !== 'undefined' &&
                typeof Int32Array !== 'undefined';
              (r.assign = function (e) {
                for (
                  var t = Array.prototype.slice.call(arguments, 1);
                  t.length;

                ) {
                  var r = t.shift()
                  if (r) {
                    if (typeof r !== 'object') { throw new TypeError(r + 'must be non-object') }
                    for (var n in r) r.hasOwnProperty(n) && (e[n] = r[n])
                  }
                }
                return e
              }),
                (r.shrinkBuf = function (e, t) {
                  return e.length === t
                    ? e
                    : e.subarray ? e.subarray(0, t) : ((e.length = t), e)
                })
              var i = {
                  arraySet: function (e, t, r, n, i) {
                    if (t.subarray && e.subarray) { return void e.set(t.subarray(r, r + n), i) }
                    for (var a = 0; a < n; a++) e[i + a] = t[r + a]
                  },
                  flattenChunks: function (e) {
                    var t, r, n, i, a, o
                    for (n = 0, t = 0, r = e.length; t < r; t++) { n += e[t].length }
                    for (
                      o = new Uint8Array(n), i = 0, t = 0, r = e.length;
                      t < r;
                      t++
                    ) { (a = e[t]), o.set(a, i), (i += a.length) }
                    return o
                  }
                },
                a = {
                  arraySet: function (e, t, r, n, i) {
                    for (var a = 0; a < n; a++) e[i + a] = t[r + a]
                  },
                  flattenChunks: function (e) {
                    return [].concat.apply([], e)
                  }
                };
              (r.setTyped = function (e) {
                e
                  ? ((r.Buf8 = Uint8Array),
                    (r.Buf16 = Uint16Array),
                    (r.Buf32 = Int32Array),
                    r.assign(r, i))
                  : ((r.Buf8 = Array),
                    (r.Buf16 = Array),
                    (r.Buf32 = Array),
                    r.assign(r, a))
              }),
                r.setTyped(n)
            },
            {}
          ],
          2: [
            function (e, t, r) {
              'use strict'
              function n (e, t) {
                if (t < 65537 && ((e.subarray && o) || (!e.subarray && a))) { return String.fromCharCode.apply(null, i.shrinkBuf(e, t)) }
                for (var r = '', n = 0; n < t; n++) { r += String.fromCharCode(e[n]) }
                return r
              }
              var i = e('./common'),
                a = !0,
                o = !0
              try {
                String.fromCharCode.apply(null, [0])
              } catch (e) {
                a = !1
              }
              try {
                String.fromCharCode.apply(null, new Uint8Array(1))
              } catch (e) {
                o = !1
              }
              for (var s = new i.Buf8(256), f = 0; f < 256; f++) {
                s[f] =
                  f >= 252
                    ? 6
                    : f >= 248
                      ? 5
                      : f >= 240 ? 4 : f >= 224 ? 3 : f >= 192 ? 2 : 1
              }
              (s[254] = s[254] = 1),
                (r.string2buf = function (e) {
                  var t,
                    r,
                    n,
                    a,
                    o,
                    s = e.length,
                    f = 0
                  for (a = 0; a < s; a++) {
                    (r = e.charCodeAt(a)),
                      (64512 & r) === 55296 &&
                        a + 1 < s &&
                        ((n = e.charCodeAt(a + 1)),
                        (64512 & n) === 56320 &&
                          ((r = 65536 + ((r - 55296) << 10) + (n - 56320)),
                          a++)),
                      (f += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4)
                  }
                  for (t = new i.Buf8(f), o = 0, a = 0; o < f; a++) {
                    (r = e.charCodeAt(a)),
                      (64512 & r) === 55296 &&
                        a + 1 < s &&
                        ((n = e.charCodeAt(a + 1)),
                        (64512 & n) === 56320 &&
                          ((r = 65536 + ((r - 55296) << 10) + (n - 56320)),
                          a++)),
                      r < 128
                        ? (t[o++] = r)
                        : r < 2048
                          ? ((t[o++] = 192 | (r >>> 6)),
                            (t[o++] = 128 | (63 & r)))
                          : r < 65536
                            ? ((t[o++] = 224 | (r >>> 12)),
                              (t[o++] = 128 | ((r >>> 6) & 63)),
                              (t[o++] = 128 | (63 & r)))
                            : ((t[o++] = 240 | (r >>> 18)),
                              (t[o++] = 128 | ((r >>> 12) & 63)),
                              (t[o++] = 128 | ((r >>> 6) & 63)),
                              (t[o++] = 128 | (63 & r)))
                  }
                  return t
                }),
                (r.buf2binstring = function (e) {
                  return n(e, e.length)
                }),
                (r.binstring2buf = function (e) {
                  for (
                    var t = new i.Buf8(e.length), r = 0, n = t.length;
                    r < n;
                    r++
                  ) { t[r] = e.charCodeAt(r) }
                  return t
                }),
                (r.buf2string = function (e, t) {
                  var r,
                    i,
                    a,
                    o,
                    f = t || e.length,
                    u = new Array(2 * f)
                  for (i = 0, r = 0; r < f;) {
                    if (((a = e[r++]), a < 128)) u[i++] = a
                    else if (((o = s[a]), o > 4)) { (u[i++] = 65533), (r += o - 1) } else {
                      for (
                        a &= o === 2 ? 31 : o === 3 ? 15 : 7;
                        o > 1 && r < f;

                      ) { (a = (a << 6) | (63 & e[r++])), o-- }
                      o > 1
                        ? (u[i++] = 65533)
                        : a < 65536
                          ? (u[i++] = a)
                          : ((a -= 65536),
                            (u[i++] = 55296 | ((a >> 10) & 1023)),
                            (u[i++] = 56320 | (1023 & a)))
                    }
                  }
                  return n(u, i)
                }),
                (r.utf8border = function (e, t) {
                  var r
                  for (
                    t = t || e.length,
                      t > e.length && (t = e.length),
                      r = t - 1;
                    r >= 0 && (192 & e[r]) === 128;

                  ) { r-- }
                  return r < 0 ? t : r === 0 ? t : r + s[e[r]] > t ? r : t
                })
            },
            { './common': 1 }
          ],
          3: [
            function (e, t, r) {
              'use strict'
              function n (e, t, r, n) {
                for (
                  var i = (65535 & e) | 0, a = ((e >>> 16) & 65535) | 0, o = 0;
                  r !== 0;

                ) {
                  (o = r > 2e3 ? 2e3 : r), (r -= o)
                  do (i = (i + t[n++]) | 0), (a = (a + i) | 0)
                  while (--o);
                  (i %= 65521), (a %= 65521)
                }
                return i | (a << 16) | 0
              }
              t.exports = n
            },
            {}
          ],
          4: [
            function (e, t, r) {
              'use strict'
              t.exports = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8
              }
            },
            {}
          ],
          5: [
            function (e, t, r) {
              'use strict'
              function n () {
                for (var e, t = [], r = 0; r < 256; r++) {
                  e = r
                  for (var n = 0; n < 8; n++) { e = 1 & e ? 3988292384 ^ (e >>> 1) : e >>> 1 }
                  t[r] = e
                }
                return t
              }
              function i (e, t, r, n) {
                var i = a,
                  o = n + r
                e ^= -1
                for (var s = n; s < o; s++) e = (e >>> 8) ^ i[255 & (e ^ t[s])]
                return e ^ -1
              }
              var a = n()
              t.exports = i
            },
            {}
          ],
          6: [
            function (e, t, r) {
              'use strict'
              function n () {
                (this.text = 0),
                  (this.time = 0),
                  (this.xflags = 0),
                  (this.os = 0),
                  (this.extra = null),
                  (this.extra_len = 0),
                  (this.name = ''),
                  (this.comment = ''),
                  (this.hcrc = 0),
                  (this.done = !1)
              }
              t.exports = n
            },
            {}
          ],
          7: [
            function (e, t, r) {
              'use strict'
              var n = 30,
                i = 12
              t.exports = function (e, t) {
                var r,
                  a,
                  o,
                  s,
                  f,
                  u,
                  c,
                  l,
                  d,
                  h,
                  w,
                  b,
                  m,
                  g,
                  v,
                  p,
                  k,
                  _,
                  y,
                  E,
                  x,
                  S,
                  T,
                  O,
                  B;
                (r = e.state),
                  (a = e.next_in),
                  (O = e.input),
                  (o = a + (e.avail_in - 5)),
                  (s = e.next_out),
                  (B = e.output),
                  (f = s - (t - e.avail_out)),
                  (u = s + (e.avail_out - 257)),
                  (c = r.dmax),
                  (l = r.wsize),
                  (d = r.whave),
                  (h = r.wnext),
                  (w = r.window),
                  (b = r.hold),
                  (m = r.bits),
                  (g = r.lencode),
                  (v = r.distcode),
                  (p = (1 << r.lenbits) - 1),
                  (k = (1 << r.distbits) - 1)
                e: do {
                  m < 15 &&
                    ((b += O[a++] << m),
                    (m += 8),
                    (b += O[a++] << m),
                    (m += 8)),
                    (_ = g[b & p])
                  t: for (;;) {
                    if (
                      ((y = _ >>> 24),
                      (b >>>= y),
                      (m -= y),
                      (y = (_ >>> 16) & 255),
                      y === 0)
                    ) { B[s++] = 65535 & _ } else {
                      if (!(16 & y)) {
                        if ((64 & y) === 0) {
                          _ = g[(65535 & _) + (b & ((1 << y) - 1))]
                          continue t
                        }
                        if (32 & y) {
                          r.mode = i
                          break e
                        }
                        (e.msg = 'invalid literal/length code'), (r.mode = n)
                        break e
                      }
                      (E = 65535 & _),
                        (y &= 15),
                        y &&
                          (m < y && ((b += O[a++] << m), (m += 8)),
                          (E += b & ((1 << y) - 1)),
                          (b >>>= y),
                          (m -= y)),
                        m < 15 &&
                          ((b += O[a++] << m),
                          (m += 8),
                          (b += O[a++] << m),
                          (m += 8)),
                        (_ = v[b & k])
                      r: for (;;) {
                        if (
                          ((y = _ >>> 24),
                          (b >>>= y),
                          (m -= y),
                          (y = (_ >>> 16) & 255),
                          !(16 & y))
                        ) {
                          if ((64 & y) === 0) {
                            _ = v[(65535 & _) + (b & ((1 << y) - 1))]
                            continue r
                          }
                          (e.msg = 'invalid distance code'), (r.mode = n)
                          break e
                        }
                        if (
                          ((x = 65535 & _),
                          (y &= 15),
                          m < y &&
                            ((b += O[a++] << m),
                            (m += 8),
                            m < y && ((b += O[a++] << m), (m += 8))),
                          (x += b & ((1 << y) - 1)),
                          x > c)
                        ) {
                          (e.msg = 'invalid distance too far back'),
                            (r.mode = n)
                          break e
                        }
                        if (((b >>>= y), (m -= y), (y = s - f), x > y)) {
                          if (((y = x - y), y > d && r.sane)) {
                            (e.msg = 'invalid distance too far back'),
                              (r.mode = n)
                            break e
                          }
                          if (((S = 0), (T = w), h === 0)) {
                            if (((S += l - y), y < E)) {
                              E -= y
                              do B[s++] = w[S++]
                              while (--y);
                              (S = s - x), (T = B)
                            }
                          } else if (h < y) {
                            if (((S += l + h - y), (y -= h), y < E)) {
                              E -= y
                              do B[s++] = w[S++]
                              while (--y)
                              if (((S = 0), h < E)) {
                                (y = h), (E -= y)
                                do B[s++] = w[S++]
                                while (--y);
                                (S = s - x), (T = B)
                              }
                            }
                          } else if (((S += h - y), y < E)) {
                            E -= y
                            do B[s++] = w[S++]
                            while (--y);
                            (S = s - x), (T = B)
                          }
                          for (; E > 2;) {
                            (B[s++] = T[S++]),
                              (B[s++] = T[S++]),
                              (B[s++] = T[S++]),
                              (E -= 3)
                          }
                          E && ((B[s++] = T[S++]), E > 1 && (B[s++] = T[S++]))
                        } else {
                          S = s - x
                          do {
                            (B[s++] = B[S++]),
                              (B[s++] = B[S++]),
                              (B[s++] = B[S++]),
                              (E -= 3)
                          }
                          while (E > 2)
                          E && ((B[s++] = B[S++]), E > 1 && (B[s++] = B[S++]))
                        }
                        break
                      }
                    }
                    break
                  }
                } while (a < o && s < u);
                (E = m >> 3),
                  (a -= E),
                  (m -= E << 3),
                  (b &= (1 << m) - 1),
                  (e.next_in = a),
                  (e.next_out = s),
                  (e.avail_in = a < o ? 5 + (o - a) : 5 - (a - o)),
                  (e.avail_out = s < u ? 257 + (u - s) : 257 - (s - u)),
                  (r.hold = b),
                  (r.bits = m)
              }
            },
            {}
          ],
          8: [
            function (e, t, r) {
              'use strict'
              function n (e) {
                return (
                  ((e >>> 24) & 255) +
                  ((e >>> 8) & 65280) +
                  ((65280 & e) << 8) +
                  ((255 & e) << 24)
                )
              }
              function i () {
                (this.mode = 0),
                  (this.last = !1),
                  (this.wrap = 0),
                  (this.havedict = !1),
                  (this.flags = 0),
                  (this.dmax = 0),
                  (this.check = 0),
                  (this.total = 0),
                  (this.head = null),
                  (this.wbits = 0),
                  (this.wsize = 0),
                  (this.whave = 0),
                  (this.wnext = 0),
                  (this.window = null),
                  (this.hold = 0),
                  (this.bits = 0),
                  (this.length = 0),
                  (this.offset = 0),
                  (this.extra = 0),
                  (this.lencode = null),
                  (this.distcode = null),
                  (this.lenbits = 0),
                  (this.distbits = 0),
                  (this.ncode = 0),
                  (this.nlen = 0),
                  (this.ndist = 0),
                  (this.have = 0),
                  (this.next = null),
                  (this.lens = new v.Buf16(320)),
                  (this.work = new v.Buf16(288)),
                  (this.lendyn = null),
                  (this.distdyn = null),
                  (this.sane = 0),
                  (this.back = 0),
                  (this.was = 0)
              }
              function a (e) {
                var t
                return e && e.state
                  ? ((t = e.state),
                    (e.total_in = e.total_out = t.total = 0),
                    (e.msg = ''),
                    t.wrap && (e.adler = 1 & t.wrap),
                    (t.mode = z),
                    (t.last = 0),
                    (t.havedict = 0),
                    (t.dmax = 32768),
                    (t.head = null),
                    (t.hold = 0),
                    (t.bits = 0),
                    (t.lencode = t.lendyn = new v.Buf32(be)),
                    (t.distcode = t.distdyn = new v.Buf32(me)),
                    (t.sane = 1),
                    (t.back = -1),
                    A)
                  : U
              }
              function o (e) {
                var t
                return e && e.state
                  ? ((t = e.state),
                    (t.wsize = 0),
                    (t.whave = 0),
                    (t.wnext = 0),
                    a(e))
                  : U
              }
              function s (e, t) {
                var r, n
                return e && e.state
                  ? ((n = e.state),
                    t < 0
                      ? ((r = 0), (t = -t))
                      : ((r = (t >> 4) + 1), t < 48 && (t &= 15)),
                    t && (t < 8 || t > 15)
                      ? U
                      : (n.window !== null &&
                          n.wbits !== t &&
                          (n.window = null),
                        (n.wrap = r),
                        (n.wbits = t),
                        o(e)))
                  : U
              }
              function f (e, t) {
                var r, n
                return e
                  ? ((n = new i()),
                    (e.state = n),
                    (n.window = null),
                    (r = s(e, t)),
                    r !== A && (e.state = null),
                    r)
                  : U
              }
              function u (e) {
                return f(e, ve)
              }
              function c (e) {
                if (pe) {
                  var t
                  for (
                    m = new v.Buf32(512), g = new v.Buf32(32), t = 0;
                    t < 144;

                  ) { e.lens[t++] = 8 }
                  for (; t < 256;) e.lens[t++] = 9
                  for (; t < 280;) e.lens[t++] = 7
                  for (; t < 288;) e.lens[t++] = 8
                  for (
                    y(x, e.lens, 0, 288, m, 0, e.work, { bits: 9 }), t = 0;
                    t < 32;

                  ) { e.lens[t++] = 5 }
                  y(S, e.lens, 0, 32, g, 0, e.work, { bits: 5 }), (pe = !1)
                }
                (e.lencode = m),
                  (e.lenbits = 9),
                  (e.distcode = g),
                  (e.distbits = 5)
              }
              function l (e, t, r, n) {
                var i,
                  a = e.state
                return (
                  a.window === null &&
                    ((a.wsize = 1 << a.wbits),
                    (a.wnext = 0),
                    (a.whave = 0),
                    (a.window = new v.Buf8(a.wsize))),
                  n >= a.wsize
                    ? (v.arraySet(a.window, t, r - a.wsize, a.wsize, 0),
                      (a.wnext = 0),
                      (a.whave = a.wsize))
                    : ((i = a.wsize - a.wnext),
                      i > n && (i = n),
                      v.arraySet(a.window, t, r - n, i, a.wnext),
                      (n -= i),
                      n
                        ? (v.arraySet(a.window, t, r - n, n, 0),
                          (a.wnext = n),
                          (a.whave = a.wsize))
                        : ((a.wnext += i),
                          a.wnext === a.wsize && (a.wnext = 0),
                          a.whave < a.wsize && (a.whave += i))),
                  0
                )
              }
              function d (e, t) {
                var r,
                  i,
                  a,
                  o,
                  s,
                  f,
                  u,
                  d,
                  h,
                  w,
                  b,
                  m,
                  g,
                  be,
                  me,
                  ge,
                  ve,
                  pe,
                  ke,
                  _e,
                  ye,
                  Ee,
                  xe,
                  Se,
                  Te = 0,
                  Oe = new v.Buf8(4),
                  Be = [
                    16,
                    17,
                    18,
                    0,
                    8,
                    7,
                    9,
                    6,
                    10,
                    5,
                    11,
                    4,
                    12,
                    3,
                    13,
                    2,
                    14,
                    1,
                    15
                  ]
                if (
                  !e ||
                  !e.state ||
                  !e.output ||
                  (!e.input && e.avail_in !== 0)
                ) { return U }
                (r = e.state),
                  r.mode === G && (r.mode = W),
                  (s = e.next_out),
                  (a = e.output),
                  (u = e.avail_out),
                  (o = e.next_in),
                  (i = e.input),
                  (f = e.avail_in),
                  (d = r.hold),
                  (h = r.bits),
                  (w = f),
                  (b = u),
                  (Ee = A)
                e: for (;;) {
                  switch (r.mode) {
                    case z:
                      if (r.wrap === 0) {
                        r.mode = W
                        break
                      }
                      for (; h < 16;) {
                        if (f === 0) break e
                        f--, (d += i[o++] << h), (h += 8)
                      }
                      if (2 & r.wrap && d === 35615) {
                        (r.check = 0),
                          (Oe[0] = 255 & d),
                          (Oe[1] = (d >>> 8) & 255),
                          (r.check = k(r.check, Oe, 2, 0)),
                          (d = 0),
                          (h = 0),
                          (r.mode = P)
                        break
                      }
                      if (
                        ((r.flags = 0),
                        r.head && (r.head.done = !1),
                        !(1 & r.wrap) || (((255 & d) << 8) + (d >> 8)) % 31)
                      ) {
                        (e.msg = 'incorrect header check'), (r.mode = de)
                        break
                      }
                      if ((15 & d) !== N) {
                        (e.msg = 'unknown compression method'), (r.mode = de)
                        break
                      }
                      if (
                        ((d >>>= 4),
                        (h -= 4),
                        (ye = (15 & d) + 8),
                        r.wbits === 0)
                      ) { r.wbits = ye } else if (ye > r.wbits) {
                        (e.msg = 'invalid window size'), (r.mode = de)
                        break
                      }
                      (r.dmax = 1 << ye),
                        (e.adler = r.check = 1),
                        (r.mode = 512 & d ? K : G),
                        (d = 0),
                        (h = 0)
                      break
                    case P:
                      for (; h < 16;) {
                        if (f === 0) break e
                        f--, (d += i[o++] << h), (h += 8)
                      }
                      if (((r.flags = d), (255 & r.flags) !== N)) {
                        (e.msg = 'unknown compression method'), (r.mode = de)
                        break
                      }
                      if (57344 & r.flags) {
                        (e.msg = 'unknown header flags set'), (r.mode = de)
                        break
                      }
                      r.head && (r.head.text = (d >> 8) & 1),
                        512 & r.flags &&
                          ((Oe[0] = 255 & d),
                          (Oe[1] = (d >>> 8) & 255),
                          (r.check = k(r.check, Oe, 2, 0))),
                        (d = 0),
                        (h = 0),
                        (r.mode = F)
                    case F:
                      for (; h < 32;) {
                        if (f === 0) break e
                        f--, (d += i[o++] << h), (h += 8)
                      }
                      r.head && (r.head.time = d),
                        512 & r.flags &&
                          ((Oe[0] = 255 & d),
                          (Oe[1] = (d >>> 8) & 255),
                          (Oe[2] = (d >>> 16) & 255),
                          (Oe[3] = (d >>> 24) & 255),
                          (r.check = k(r.check, Oe, 4, 0))),
                        (d = 0),
                        (h = 0),
                        (r.mode = L)
                    case L:
                      for (; h < 16;) {
                        if (f === 0) break e
                        f--, (d += i[o++] << h), (h += 8)
                      }
                      r.head &&
                        ((r.head.xflags = 255 & d), (r.head.os = d >> 8)),
                        512 & r.flags &&
                          ((Oe[0] = 255 & d),
                          (Oe[1] = (d >>> 8) & 255),
                          (r.check = k(r.check, Oe, 2, 0))),
                        (d = 0),
                        (h = 0),
                        (r.mode = M)
                    case M:
                      if (1024 & r.flags) {
                        for (; h < 16;) {
                          if (f === 0) break e
                          f--, (d += i[o++] << h), (h += 8)
                        }
                        (r.length = d),
                          r.head && (r.head.extra_len = d),
                          512 & r.flags &&
                            ((Oe[0] = 255 & d),
                            (Oe[1] = (d >>> 8) & 255),
                            (r.check = k(r.check, Oe, 2, 0))),
                          (d = 0),
                          (h = 0)
                      } else r.head && (r.head.extra = null)
                      r.mode = H
                    case H:
                      if (
                        1024 & r.flags &&
                        ((m = r.length),
                        m > f && (m = f),
                        m &&
                          (r.head &&
                            ((ye = r.head.extra_len - r.length),
                            r.head.extra ||
                              (r.head.extra = new Array(r.head.extra_len)),
                            v.arraySet(r.head.extra, i, o, m, ye)),
                          512 & r.flags && (r.check = k(r.check, i, m, o)),
                          (f -= m),
                          (o += m),
                          (r.length -= m)),
                        r.length)
                      ) { break e }
                      (r.length = 0), (r.mode = j)
                    case j:
                      if (2048 & r.flags) {
                        if (f === 0) break e
                        m = 0
                        do {
                          (ye = i[o + m++]),
                            r.head &&
                              ye &&
                              r.length < 65536 &&
                              (r.head.name += String.fromCharCode(ye))
                        }
                        while (ye && m < f)
                        if (
                          (512 & r.flags && (r.check = k(r.check, i, m, o)),
                          (f -= m),
                          (o += m),
                          ye)
                        ) { break e }
                      } else r.head && (r.head.name = null);
                      (r.length = 0), (r.mode = V)
                    case V:
                      if (4096 & r.flags) {
                        if (f === 0) break e
                        m = 0
                        do {
                          (ye = i[o + m++]),
                            r.head &&
                              ye &&
                              r.length < 65536 &&
                              (r.head.comment += String.fromCharCode(ye))
                        }
                        while (ye && m < f)
                        if (
                          (512 & r.flags && (r.check = k(r.check, i, m, o)),
                          (f -= m),
                          (o += m),
                          ye)
                        ) { break e }
                      } else r.head && (r.head.comment = null)
                      r.mode = q
                    case q:
                      if (512 & r.flags) {
                        for (; h < 16;) {
                          if (f === 0) break e
                          f--, (d += i[o++] << h), (h += 8)
                        }
                        if (d !== (65535 & r.check)) {
                          (e.msg = 'header crc mismatch'), (r.mode = de)
                          break
                        }
                        (d = 0), (h = 0)
                      }
                      r.head &&
                        ((r.head.hcrc = (r.flags >> 9) & 1),
                        (r.head.done = !0)),
                        (e.adler = r.check = 0),
                        (r.mode = G)
                      break
                    case K:
                      for (; h < 32;) {
                        if (f === 0) break e
                        f--, (d += i[o++] << h), (h += 8)
                      }
                      (e.adler = r.check = n(d)),
                        (d = 0),
                        (h = 0),
                        (r.mode = Y)
                    case Y:
                      if (r.havedict === 0) {
                        return (
                          (e.next_out = s),
                          (e.avail_out = u),
                          (e.next_in = o),
                          (e.avail_in = f),
                          (r.hold = d),
                          (r.bits = h),
                          R
                        )
                      }
                      (e.adler = r.check = 1), (r.mode = G)
                    case G:
                      if (t === O || t === B) break e
                    case W:
                      if (r.last) {
                        (d >>>= 7 & h), (h -= 7 & h), (r.mode = ue)
                        break
                      }
                      for (; h < 3;) {
                        if (f === 0) break e
                        f--, (d += i[o++] << h), (h += 8)
                      }
                      switch (((r.last = 1 & d), (d >>>= 1), (h -= 1), 3 & d)) {
                        case 0:
                          r.mode = J
                          break
                        case 1:
                          if ((c(r), (r.mode = re), t === B)) {
                            (d >>>= 2), (h -= 2)
                            break e
                          }
                          break
                        case 2:
                          r.mode = $
                          break
                        case 3:
                          (e.msg = 'invalid block type'), (r.mode = de)
                      }
                      (d >>>= 2), (h -= 2)
                      break
                    case J:
                      for (d >>>= 7 & h, h -= 7 & h; h < 32;) {
                        if (f === 0) break e
                        f--, (d += i[o++] << h), (h += 8)
                      }
                      if ((65535 & d) !== ((d >>> 16) ^ 65535)) {
                        (e.msg = 'invalid stored block lengths'), (r.mode = de)
                        break
                      }
                      if (
                        ((r.length = 65535 & d),
                        (d = 0),
                        (h = 0),
                        (r.mode = Q),
                        t === B)
                      ) { break e }
                    case Q:
                      r.mode = X
                    case X:
                      if ((m = r.length)) {
                        if ((m > f && (m = f), m > u && (m = u), m === 0)) { break e }
                        v.arraySet(a, i, o, m, s),
                          (f -= m),
                          (o += m),
                          (u -= m),
                          (s += m),
                          (r.length -= m)
                        break
                      }
                      r.mode = G
                      break
                    case $:
                      for (; h < 14;) {
                        if (f === 0) break e
                        f--, (d += i[o++] << h), (h += 8)
                      }
                      if (
                        ((r.nlen = (31 & d) + 257),
                        (d >>>= 5),
                        (h -= 5),
                        (r.ndist = (31 & d) + 1),
                        (d >>>= 5),
                        (h -= 5),
                        (r.ncode = (15 & d) + 4),
                        (d >>>= 4),
                        (h -= 4),
                        r.nlen > 286 || r.ndist > 30)
                      ) {
                        (e.msg = 'too many length or distance symbols'),
                          (r.mode = de)
                        break
                      }
                      (r.have = 0), (r.mode = ee)
                    case ee:
                      for (; r.have < r.ncode;) {
                        for (; h < 3;) {
                          if (f === 0) break e
                          f--, (d += i[o++] << h), (h += 8)
                        }
                        (r.lens[Be[r.have++]] = 7 & d), (d >>>= 3), (h -= 3)
                      }
                      for (; r.have < 19;) r.lens[Be[r.have++]] = 0
                      if (
                        ((r.lencode = r.lendyn),
                        (r.lenbits = 7),
                        (xe = { bits: r.lenbits }),
                        (Ee = y(E, r.lens, 0, 19, r.lencode, 0, r.work, xe)),
                        (r.lenbits = xe.bits),
                        Ee)
                      ) {
                        (e.msg = 'invalid code lengths set'), (r.mode = de)
                        break
                      }
                      (r.have = 0), (r.mode = te)
                    case te:
                      for (; r.have < r.nlen + r.ndist;) {
                        for (
                          ;
                          (Te = r.lencode[d & ((1 << r.lenbits) - 1)]),
                            (me = Te >>> 24),
                            (ge = (Te >>> 16) & 255),
                            (ve = 65535 & Te),
                            !(me <= h);

                        ) {
                          if (f === 0) break e
                          f--, (d += i[o++] << h), (h += 8)
                        }
                        if (ve < 16) { (d >>>= me), (h -= me), (r.lens[r.have++] = ve) } else {
                          if (ve === 16) {
                            for (Se = me + 2; h < Se;) {
                              if (f === 0) break e
                              f--, (d += i[o++] << h), (h += 8)
                            }
                            if (((d >>>= me), (h -= me), r.have === 0)) {
                              (e.msg = 'invalid bit length repeat'),
                                (r.mode = de)
                              break
                            }
                            (ye = r.lens[r.have - 1]),
                              (m = 3 + (3 & d)),
                              (d >>>= 2),
                              (h -= 2)
                          } else if (ve === 17) {
                            for (Se = me + 3; h < Se;) {
                              if (f === 0) break e
                              f--, (d += i[o++] << h), (h += 8)
                            }
                            (d >>>= me),
                              (h -= me),
                              (ye = 0),
                              (m = 3 + (7 & d)),
                              (d >>>= 3),
                              (h -= 3)
                          } else {
                            for (Se = me + 7; h < Se;) {
                              if (f === 0) break e
                              f--, (d += i[o++] << h), (h += 8)
                            }
                            (d >>>= me),
                              (h -= me),
                              (ye = 0),
                              (m = 11 + (127 & d)),
                              (d >>>= 7),
                              (h -= 7)
                          }
                          if (r.have + m > r.nlen + r.ndist) {
                            (e.msg = 'invalid bit length repeat'),
                              (r.mode = de)
                            break
                          }
                          for (; m--;) r.lens[r.have++] = ye
                        }
                      }
                      if (r.mode === de) break
                      if (r.lens[256] === 0) {
                        (e.msg = 'invalid code -- missing end-of-block'),
                          (r.mode = de)
                        break
                      }
                      if (
                        ((r.lenbits = 9),
                        (xe = { bits: r.lenbits }),
                        (Ee = y(
                          x,
                          r.lens,
                          0,
                          r.nlen,
                          r.lencode,
                          0,
                          r.work,
                          xe
                        )),
                        (r.lenbits = xe.bits),
                        Ee)
                      ) {
                        (e.msg = 'invalid literal/lengths set'), (r.mode = de)
                        break
                      }
                      if (
                        ((r.distbits = 6),
                        (r.distcode = r.distdyn),
                        (xe = { bits: r.distbits }),
                        (Ee = y(
                          S,
                          r.lens,
                          r.nlen,
                          r.ndist,
                          r.distcode,
                          0,
                          r.work,
                          xe
                        )),
                        (r.distbits = xe.bits),
                        Ee)
                      ) {
                        (e.msg = 'invalid distances set'), (r.mode = de)
                        break
                      }
                      if (((r.mode = re), t === B)) break e
                    case re:
                      r.mode = ne
                    case ne:
                      if (f >= 6 && u >= 258) {
                        (e.next_out = s),
                          (e.avail_out = u),
                          (e.next_in = o),
                          (e.avail_in = f),
                          (r.hold = d),
                          (r.bits = h),
                          _(e, b),
                          (s = e.next_out),
                          (a = e.output),
                          (u = e.avail_out),
                          (o = e.next_in),
                          (i = e.input),
                          (f = e.avail_in),
                          (d = r.hold),
                          (h = r.bits),
                          r.mode === G && (r.back = -1)
                        break
                      }
                      for (
                        r.back = 0;
                        (Te = r.lencode[d & ((1 << r.lenbits) - 1)]),
                          (me = Te >>> 24),
                          (ge = (Te >>> 16) & 255),
                          (ve = 65535 & Te),
                          !(me <= h);

                      ) {
                        if (f === 0) break e
                        f--, (d += i[o++] << h), (h += 8)
                      }
                      if (ge && (240 & ge) === 0) {
                        for (
                          pe = me, ke = ge, _e = ve;
                          (Te =
                            r.lencode[
                              _e + ((d & ((1 << (pe + ke)) - 1)) >> pe)
                            ]),
                            (me = Te >>> 24),
                            (ge = (Te >>> 16) & 255),
                            (ve = 65535 & Te),
                            !(pe + me <= h);

                        ) {
                          if (f === 0) break e
                          f--, (d += i[o++] << h), (h += 8)
                        }
                        (d >>>= pe), (h -= pe), (r.back += pe)
                      }
                      if (
                        ((d >>>= me),
                        (h -= me),
                        (r.back += me),
                        (r.length = ve),
                        ge === 0)
                      ) {
                        r.mode = fe
                        break
                      }
                      if (32 & ge) {
                        (r.back = -1), (r.mode = G)
                        break
                      }
                      if (64 & ge) {
                        (e.msg = 'invalid literal/length code'), (r.mode = de)
                        break
                      }
                      (r.extra = 15 & ge), (r.mode = ie)
                    case ie:
                      if (r.extra) {
                        for (Se = r.extra; h < Se;) {
                          if (f === 0) break e
                          f--, (d += i[o++] << h), (h += 8)
                        }
                        (r.length += d & ((1 << r.extra) - 1)),
                          (d >>>= r.extra),
                          (h -= r.extra),
                          (r.back += r.extra)
                      }
                      (r.was = r.length), (r.mode = ae)
                    case ae:
                      for (
                        ;
                        (Te = r.distcode[d & ((1 << r.distbits) - 1)]),
                          (me = Te >>> 24),
                          (ge = (Te >>> 16) & 255),
                          (ve = 65535 & Te),
                          !(me <= h);

                      ) {
                        if (f === 0) break e
                        f--, (d += i[o++] << h), (h += 8)
                      }
                      if ((240 & ge) === 0) {
                        for (
                          pe = me, ke = ge, _e = ve;
                          (Te =
                            r.distcode[
                              _e + ((d & ((1 << (pe + ke)) - 1)) >> pe)
                            ]),
                            (me = Te >>> 24),
                            (ge = (Te >>> 16) & 255),
                            (ve = 65535 & Te),
                            !(pe + me <= h);

                        ) {
                          if (f === 0) break e
                          f--, (d += i[o++] << h), (h += 8)
                        }
                        (d >>>= pe), (h -= pe), (r.back += pe)
                      }
                      if (((d >>>= me), (h -= me), (r.back += me), 64 & ge)) {
                        (e.msg = 'invalid distance code'), (r.mode = de)
                        break
                      }
                      (r.offset = ve), (r.extra = 15 & ge), (r.mode = oe)
                    case oe:
                      if (r.extra) {
                        for (Se = r.extra; h < Se;) {
                          if (f === 0) break e
                          f--, (d += i[o++] << h), (h += 8)
                        }
                        (r.offset += d & ((1 << r.extra) - 1)),
                          (d >>>= r.extra),
                          (h -= r.extra),
                          (r.back += r.extra)
                      }
                      if (r.offset > r.dmax) {
                        (e.msg = 'invalid distance too far back'),
                          (r.mode = de)
                        break
                      }
                      r.mode = se
                    case se:
                      if (u === 0) break e
                      if (((m = b - u), r.offset > m)) {
                        if (((m = r.offset - m), m > r.whave && r.sane)) {
                          (e.msg = 'invalid distance too far back'),
                            (r.mode = de)
                          break
                        }
                        m > r.wnext
                          ? ((m -= r.wnext), (g = r.wsize - m))
                          : (g = r.wnext - m),
                          m > r.length && (m = r.length),
                          (be = r.window)
                      } else (be = a), (g = s - r.offset), (m = r.length)
                      m > u && (m = u), (u -= m), (r.length -= m)
                      do a[s++] = be[g++]
                      while (--m)
                      r.length === 0 && (r.mode = ne)
                      break
                    case fe:
                      if (u === 0) break e;
                      (a[s++] = r.length), u--, (r.mode = ne)
                      break
                    case ue:
                      if (r.wrap) {
                        for (; h < 32;) {
                          if (f === 0) break e
                          f--, (d |= i[o++] << h), (h += 8)
                        }
                        if (
                          ((b -= u),
                          (e.total_out += b),
                          (r.total += b),
                          b &&
                            (e.adler = r.check = r.flags
                              ? k(r.check, a, b, s - b)
                              : p(r.check, a, b, s - b)),
                          (b = u),
                          (r.flags ? d : n(d)) !== r.check)
                        ) {
                          (e.msg = 'incorrect data check'), (r.mode = de)
                          break
                        }
                        (d = 0), (h = 0)
                      }
                      r.mode = ce
                    case ce:
                      if (r.wrap && r.flags) {
                        for (; h < 32;) {
                          if (f === 0) break e
                          f--, (d += i[o++] << h), (h += 8)
                        }
                        if (d !== (4294967295 & r.total)) {
                          (e.msg = 'incorrect length check'), (r.mode = de)
                          break
                        }
                        (d = 0), (h = 0)
                      }
                      r.mode = le
                    case le:
                      Ee = C
                      break e
                    case de:
                      Ee = I
                      break e
                    case he:
                      return Z
                    case we:
                    default:
                      return U
                  }
                }
                return (
                  (e.next_out = s),
                  (e.avail_out = u),
                  (e.next_in = o),
                  (e.avail_in = f),
                  (r.hold = d),
                  (r.bits = h),
                  (r.wsize ||
                    (b !== e.avail_out &&
                      r.mode < de &&
                      (r.mode < ue || t !== T))) &&
                  l(e, e.output, e.next_out, b - e.avail_out)
                    ? ((r.mode = he), Z)
                    : ((w -= e.avail_in),
                      (b -= e.avail_out),
                      (e.total_in += w),
                      (e.total_out += b),
                      (r.total += b),
                      r.wrap &&
                        b &&
                        (e.adler = r.check = r.flags
                          ? k(r.check, a, b, e.next_out - b)
                          : p(r.check, a, b, e.next_out - b)),
                      (e.data_type =
                        r.bits +
                        (r.last ? 64 : 0) +
                        (r.mode === G ? 128 : 0) +
                        (r.mode === re || r.mode === Q ? 256 : 0)),
                      ((w === 0 && b === 0) || t === T) && Ee === A && (Ee = D),
                      Ee)
                )
              }
              function h (e) {
                if (!e || !e.state) return U
                var t = e.state
                return t.window && (t.window = null), (e.state = null), A
              }
              function w (e, t) {
                var r
                return e && e.state
                  ? ((r = e.state),
                    (2 & r.wrap) === 0 ? U : ((r.head = t), (t.done = !1), A))
                  : U
              }
              function b (e, t) {
                var r,
                  n,
                  i,
                  a = t.length
                return e && e.state
                  ? ((r = e.state),
                    r.wrap !== 0 && r.mode !== Y
                      ? U
                      : r.mode === Y &&
                        ((n = 1), (n = p(n, t, a, 0)), n !== r.check)
                        ? I
                        : (i = l(e, t, a, a))
                          ? ((r.mode = he), Z)
                          : ((r.havedict = 1), A))
                  : U
              }
              var m,
                g,
                v = e('../utils/common'),
                p = e('./adler32'),
                k = e('./crc32'),
                _ = e('./inffast'),
                y = e('./inftrees'),
                E = 0,
                x = 1,
                S = 2,
                T = 4,
                O = 5,
                B = 6,
                A = 0,
                C = 1,
                R = 2,
                U = -2,
                I = -3,
                Z = -4,
                D = -5,
                N = 8,
                z = 1,
                P = 2,
                F = 3,
                L = 4,
                M = 5,
                H = 6,
                j = 7,
                V = 8,
                q = 9,
                K = 10,
                Y = 11,
                G = 12,
                W = 13,
                J = 14,
                Q = 15,
                X = 16,
                $ = 17,
                ee = 18,
                te = 19,
                re = 20,
                ne = 21,
                ie = 22,
                ae = 23,
                oe = 24,
                se = 25,
                fe = 26,
                ue = 27,
                ce = 28,
                le = 29,
                de = 30,
                he = 31,
                we = 32,
                be = 852,
                me = 592,
                ge = 15,
                ve = ge,
                pe = !0;
              (r.inflateReset = o),
                (r.inflateReset2 = s),
                (r.inflateResetKeep = a),
                (r.inflateInit = u),
                (r.inflateInit2 = f),
                (r.inflate = d),
                (r.inflateEnd = h),
                (r.inflateGetHeader = w),
                (r.inflateSetDictionary = b),
                (r.inflateInfo = 'pako inflate (from Nodeca project)')
            },
            {
              '../utils/common': 1,
              './adler32': 3,
              './crc32': 5,
              './inffast': 7,
              './inftrees': 9
            }
          ],
          9: [
            function (e, t, r) {
              'use strict'
              var n = e('../utils/common'),
                i = 15,
                a = 852,
                o = 592,
                s = 0,
                f = 1,
                u = 2,
                c = [
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  13,
                  15,
                  17,
                  19,
                  23,
                  27,
                  31,
                  35,
                  43,
                  51,
                  59,
                  67,
                  83,
                  99,
                  115,
                  131,
                  163,
                  195,
                  227,
                  258,
                  0,
                  0
                ],
                l = [
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  16,
                  17,
                  17,
                  17,
                  17,
                  18,
                  18,
                  18,
                  18,
                  19,
                  19,
                  19,
                  19,
                  20,
                  20,
                  20,
                  20,
                  21,
                  21,
                  21,
                  21,
                  16,
                  72,
                  78
                ],
                d = [
                  1,
                  2,
                  3,
                  4,
                  5,
                  7,
                  9,
                  13,
                  17,
                  25,
                  33,
                  49,
                  65,
                  97,
                  129,
                  193,
                  257,
                  385,
                  513,
                  769,
                  1025,
                  1537,
                  2049,
                  3073,
                  4097,
                  6145,
                  8193,
                  12289,
                  16385,
                  24577,
                  0,
                  0
                ],
                h = [
                  16,
                  16,
                  16,
                  16,
                  17,
                  17,
                  18,
                  18,
                  19,
                  19,
                  20,
                  20,
                  21,
                  21,
                  22,
                  22,
                  23,
                  23,
                  24,
                  24,
                  25,
                  25,
                  26,
                  26,
                  27,
                  27,
                  28,
                  28,
                  29,
                  29,
                  64,
                  64
                ]
              t.exports = function (e, t, r, w, b, m, g, v) {
                var p,
                  k,
                  _,
                  y,
                  E,
                  x,
                  S,
                  T,
                  O,
                  B = v.bits,
                  A = 0,
                  C = 0,
                  R = 0,
                  U = 0,
                  I = 0,
                  Z = 0,
                  D = 0,
                  N = 0,
                  z = 0,
                  P = 0,
                  F = null,
                  L = 0,
                  M = new n.Buf16(i + 1),
                  H = new n.Buf16(i + 1),
                  j = null,
                  V = 0
                for (A = 0; A <= i; A++) M[A] = 0
                for (C = 0; C < w; C++) M[t[r + C]]++
                for (I = B, U = i; U >= 1 && M[U] === 0; U--);
                if ((I > U && (I = U), U === 0)) {
                  return (
                    (b[m++] = 20971520), (b[m++] = 20971520), (v.bits = 1), 0
                  )
                }
                for (R = 1; R < U && M[R] === 0; R++);
                for (I < R && (I = R), N = 1, A = 1; A <= i; A++) { if (((N <<= 1), (N -= M[A]), N < 0)) return -1 }
                if (N > 0 && (e === s || U !== 1)) return -1
                for (H[1] = 0, A = 1; A < i; A++) H[A + 1] = H[A] + M[A]
                for (C = 0; C < w; C++) { t[r + C] !== 0 && (g[H[t[r + C]]++] = C) }
                if (
                  (e === s
                    ? ((F = j = g), (x = 19))
                    : e === f
                      ? ((F = c), (L -= 257), (j = l), (V -= 257), (x = 256))
                      : ((F = d), (j = h), (x = -1)),
                  (P = 0),
                  (C = 0),
                  (A = R),
                  (E = m),
                  (Z = I),
                  (D = 0),
                  (_ = -1),
                  (z = 1 << I),
                  (y = z - 1),
                  (e === f && z > a) || (e === u && z > o))
                ) { return 1 }
                for (;;) {
                  (S = A - D),
                    g[C] < x
                      ? ((T = 0), (O = g[C]))
                      : g[C] > x
                        ? ((T = j[V + g[C]]), (O = F[L + g[C]]))
                        : ((T = 96), (O = 0)),
                    (p = 1 << (A - D)),
                    (k = 1 << Z),
                    (R = k)
                  do {
                    (k -= p),
                      (b[E + (P >> D) + k] = (S << 24) | (T << 16) | O | 0)
                  }
                  while (k !== 0)
                  for (p = 1 << (A - 1); P & p;) p >>= 1
                  if (
                    (p !== 0 ? ((P &= p - 1), (P += p)) : (P = 0),
                    C++,
                    --M[A] === 0)
                  ) {
                    if (A === U) break
                    A = t[r + g[C]]
                  }
                  if (A > I && (P & y) !== _) {
                    for (
                      D === 0 && (D = I), E += R, Z = A - D, N = 1 << Z;
                      Z + D < U && ((N -= M[Z + D]), !(N <= 0));

                    ) { Z++, (N <<= 1) }
                    if (
                      ((z += 1 << Z), (e === f && z > a) || (e === u && z > o))
                    ) { return 1 }
                    (_ = P & y), (b[_] = (I << 24) | (Z << 16) | (E - m) | 0)
                  }
                }
                return (
                  P !== 0 && (b[E + P] = ((A - D) << 24) | (64 << 16) | 0),
                  (v.bits = I),
                  0
                )
              }
            },
            { '../utils/common': 1 }
          ],
          10: [
            function (e, t, r) {
              'use strict'
              t.exports = {
                2: 'need dictionary',
                1: 'stream end',
                0: '',
                '-1': 'file error',
                '-2': 'stream error',
                '-3': 'data error',
                '-4': 'insufficient memory',
                '-5': 'buffer error',
                '-6': 'incompatible version'
              }
            },
            {}
          ],
          11: [
            function (e, t, r) {
              'use strict'
              function n () {
                (this.input = null),
                  (this.next_in = 0),
                  (this.avail_in = 0),
                  (this.total_in = 0),
                  (this.output = null),
                  (this.next_out = 0),
                  (this.avail_out = 0),
                  (this.total_out = 0),
                  (this.msg = ''),
                  (this.state = null),
                  (this.data_type = 2),
                  (this.adler = 0)
              }
              t.exports = n
            },
            {}
          ],
          '/lib/inflate.js': [
            function (e, t, r) {
              'use strict'
              function n (e) {
                if (!(this instanceof n)) return new n(e)
                this.options = s.assign(
                  { chunkSize: 16384, windowBits: 0, to: '' },
                  e || {}
                )
                var t = this.options
                t.raw &&
                  t.windowBits >= 0 &&
                  t.windowBits < 16 &&
                  ((t.windowBits = -t.windowBits),
                  t.windowBits === 0 && (t.windowBits = -15)),
                  !(t.windowBits >= 0 && t.windowBits < 16) ||
                    (e && e.windowBits) ||
                    (t.windowBits += 32),
                  t.windowBits > 15 &&
                    t.windowBits < 48 &&
                    (15 & t.windowBits) === 0 &&
                    (t.windowBits |= 15),
                  (this.err = 0),
                  (this.msg = ''),
                  (this.ended = !1),
                  (this.chunks = []),
                  (this.strm = new l()),
                  (this.strm.avail_out = 0)
                var r = o.inflateInit2(this.strm, t.windowBits)
                if (r !== u.Z_OK) throw new Error(c[r]);
                (this.header = new d()),
                  o.inflateGetHeader(this.strm, this.header)
              }
              function i (e, t) {
                var r = new n(t)
                if ((r.push(e, !0), r.err)) throw r.msg || c[r.err]
                return r.result
              }
              function a (e, t) {
                return (t = t || {}), (t.raw = !0), i(e, t)
              }
              var o = e('./zlib/inflate'),
                s = e('./utils/common'),
                f = e('./utils/strings'),
                u = e('./zlib/constants'),
                c = e('./zlib/messages'),
                l = e('./zlib/zstream'),
                d = e('./zlib/gzheader'),
                h = Object.prototype.toString;
              (n.prototype.push = function (e, t) {
                var r,
                  n,
                  i,
                  a,
                  c,
                  l,
                  d = this.strm,
                  w = this.options.chunkSize,
                  b = this.options.dictionary,
                  m = !1
                if (this.ended) return !1;
                (n = t === ~~t ? t : t === !0 ? u.Z_FINISH : u.Z_NO_FLUSH),
                  typeof e === 'string'
                    ? (d.input = f.binstring2buf(e))
                    : h.call(e) === '[object ArrayBuffer]'
                      ? (d.input = new Uint8Array(e))
                      : (d.input = e),
                  (d.next_in = 0),
                  (d.avail_in = d.input.length)
                do {
                  if (
                    (d.avail_out === 0 &&
                      ((d.output = new s.Buf8(w)),
                      (d.next_out = 0),
                      (d.avail_out = w)),
                    (r = o.inflate(d, u.Z_NO_FLUSH)),
                    r === u.Z_NEED_DICT &&
                      b &&
                      ((l =
                        typeof b === 'string'
                          ? f.string2buf(b)
                          : h.call(b) === '[object ArrayBuffer]'
                            ? new Uint8Array(b)
                            : b),
                      (r = o.inflateSetDictionary(this.strm, l))),
                    r === u.Z_BUF_ERROR && m === !0 && ((r = u.Z_OK), (m = !1)),
                    r !== u.Z_STREAM_END && r !== u.Z_OK)
                  ) { return this.onEnd(r), (this.ended = !0), !1 }
                  d.next_out &&
                    ((d.avail_out !== 0 &&
                      r !== u.Z_STREAM_END &&
                      (d.avail_in !== 0 ||
                        (n !== u.Z_FINISH && n !== u.Z_SYNC_FLUSH))) ||
                      (this.options.to === 'string'
                        ? ((i = f.utf8border(d.output, d.next_out)),
                          (a = d.next_out - i),
                          (c = f.buf2string(d.output, i)),
                          (d.next_out = a),
                          (d.avail_out = w - a),
                          a && s.arraySet(d.output, d.output, i, a, 0),
                          this.onData(c))
                        : this.onData(s.shrinkBuf(d.output, d.next_out)))),
                    d.avail_in === 0 && d.avail_out === 0 && (m = !0)
                } while (
                  (d.avail_in > 0 || d.avail_out === 0) &&
                  r !== u.Z_STREAM_END
                )
                return (
                  r === u.Z_STREAM_END && (n = u.Z_FINISH),
                  n === u.Z_FINISH
                    ? ((r = o.inflateEnd(this.strm)),
                      this.onEnd(r),
                      (this.ended = !0),
                      r === u.Z_OK)
                    : n !== u.Z_SYNC_FLUSH ||
                      (this.onEnd(u.Z_OK), (d.avail_out = 0), !0)
                )
              }),
                (n.prototype.onData = function (e) {
                  this.chunks.push(e)
                }),
                (n.prototype.onEnd = function (e) {
                  e === u.Z_OK &&
                    (this.options.to === 'string'
                      ? (this.result = this.chunks.join(''))
                      : (this.result = s.flattenChunks(this.chunks))),
                    (this.chunks = []),
                    (this.err = e),
                    (this.msg = this.strm.msg)
                }),
                (r.Inflate = n),
                (r.inflate = i),
                (r.inflateRaw = a),
                (r.ungzip = i)
            },
            {
              './utils/common': 1,
              './utils/strings': 2,
              './zlib/constants': 4,
              './zlib/gzheader': 6,
              './zlib/inflate': 8,
              './zlib/messages': 10,
              './zlib/zstream': 11
            }
          ]
        },
        {},
        []
      )('/lib/inflate.js')
    }),
    define('Core/freezeObject', ['./defined'], function (e) {
      'use strict'
      var t = Object.freeze
      return (
        e(t) ||
          (t = function (e) {
            return e
          }),
        t
      )
    }),
    define('Core/defaultValue', ['./freezeObject'], function (e) {
      'use strict'
      function t (e, t) {
        return void 0 !== e && e !== null ? e : t
      }
      return (t.EMPTY_OBJECT = e({})), t
    }),
    define('Core/formatError', ['./defined'], function (e) {
      'use strict'
      function t (t) {
        var r,
          n = t.name,
          i = t.message
        r = e(n) && e(i) ? n + ': ' + i : t.toString()
        var a = t.stack
        return e(a) && (r += '\n' + a), r
      }
      return t
    }),
    define(
      'Workers/createTaskProcessorWorker',
      ['../Core/defaultValue', '../Core/defined', '../Core/formatError'],
      function (e, t, r) {
        'use strict'
        function n (n) {
          var i,
            a = [],
            o = { id: void 0, result: void 0, error: void 0 }
          return function (s) {
            var f = s.data;
            (a.length = 0),
              (o.id = f.id),
              (o.error = void 0),
              (o.result = void 0)
            try {
              o.result = n(f.parameters, a)
            } catch (e) {
              e instanceof Error
                ? (o.error = {
                  name: e.name,
                  message: e.message,
                  stack: e.stack
                })
                : (o.error = e)
            }
            t(i) || (i = e(self.webkitPostMessage, self.postMessage)),
              f.canTransferArrayBuffer || (a.length = 0)
            try {
              i(o, a)
            } catch (e) {
              (o.result = void 0),
                (o.error =
                  'postMessage failed with error: ' +
                  r(e) +
                  '\n  with responseMessage: ' +
                  JSON.stringify(o)),
                i(o)
            }
          }
        }
        return n
      }
    ),
    define(
      'Workers/decodeGoogleEarthEnterprisePacket',
      [
        '../Core/decodeGoogleEarthEnterpriseData',
        '../Core/GoogleEarthEnterpriseTileInformation',
        '../Core/RuntimeError',
        '../ThirdParty/pako_inflate',
        './createTaskProcessorWorker'
      ],
      function (e, t, r, n, i) {
        'use strict'
        function a (t, r) {
          var n = d.fromString(t.type),
            i = t.buffer
          e(t.key, i)
          var a = f(i)
          i = a.buffer
          var u = a.length
          switch (n) {
            case d.METADATA:
              return o(i, u, t.quadKey)
            case d.TERRAIN:
              return s(i, u, r)
            case d.DBROOT:
              return r.push(i), { buffer: i }
          }
        }
        function o (e, n, i) {
          function a (e, t, r) {
            var n = !1
            if (r === 4) {
              if (t.hasSubtree()) return
              n = !0
            }
            for (var i = 0; i < 4; ++i) {
              var o = e + i.toString()
              if (n) B[o] = null
              else if (r < 4) {
                if (t.hasChild(i)) {
                  if (A === b) { return void console.log('Incorrect number of instances') }
                  var s = k[A++];
                  (B[o] = s), a(o, s, r + 1)
                } else B[o] = null
              }
            }
          }
          var o = new DataView(e),
            s = 0,
            f = o.getUint32(s, !0)
          if (((s += l), f !== h)) throw new r('Invalid magic')
          var d = o.getUint32(s, !0)
          if (((s += l), d !== 1)) { throw new r('Invalid data type. Must be 1 for QuadTreePacket') }
          var w = o.getUint32(s, !0)
          if (((s += l), w !== 2)) {
            throw new r(
              'Invalid QuadTreePacket version. Only version 2 is supported.'
            )
          }
          var b = o.getInt32(s, !0)
          s += c
          var m = o.getInt32(s, !0)
          if (((s += c), m !== 32)) throw new r('Invalid instance size.')
          var g = o.getInt32(s, !0)
          s += c
          var v = o.getInt32(s, !0)
          s += c
          var p = o.getInt32(s, !0)
          if (((s += c), g !== b * m + s)) { throw new r('Invalid dataBufferOffset') }
          if (g + v + p !== n) throw new r('Invalid packet offsets')
          for (var k = [], _ = 0; _ < b; ++_) {
            var y = o.getUint8(s)
            ++s, ++s
            var E = o.getUint16(s, !0)
            s += u
            var x = o.getUint16(s, !0)
            s += u
            var S = o.getUint16(s, !0);
            (s += u), (s += u), (s += u), (s += c), (s += c), (s += 8)
            var T = o.getUint8(s++),
              O = o.getUint8(s++);
            (s += u), k.push(new t(y, E, x, S, T, O))
          }
          var B = [],
            A = 0,
            C = 0,
            R = k[A++]
          return i === '' ? ++C : (B[i] = R), a(i, R, C), B
        }
        function s (e, t, r) {
          for (var n = new DataView(e), i = 0, a = []; i < t;) {
            for (var o = i, s = 0; s < 4; ++s) {
              var f = n.getUint32(i, !0);
              (i += l), (i += f)
            }
            var u = e.slice(o, i)
            r.push(u), a.push(u)
          }
          return a
        }
        function f (e) {
          var t = new DataView(e),
            i = 0,
            a = t.getUint32(i, !0)
          if (((i += l), a !== w && a !== b)) throw new r('Invalid magic')
          var o = t.getUint32(i, a === w)
          i += l
          var s = new Uint8Array(e, i),
            f = n.inflate(s)
          if (f.length !== o) { throw new r("Size of packet doesn't match header") }
          return f
        }
        var u = Uint16Array.BYTES_PER_ELEMENT,
          c = Int32Array.BYTES_PER_ELEMENT,
          l = Uint32Array.BYTES_PER_ELEMENT,
          d = { METADATA: 0, TERRAIN: 1, DBROOT: 2 }
        d.fromString = function (e) {
          return e === 'Metadata'
            ? d.METADATA
            : e === 'Terrain' ? d.TERRAIN : e === 'DbRoot' ? d.DBROOT : void 0
        }
        var h = 32301,
          w = 1953029805,
          b = 2917034100
        return i(a)
      }
    )
})()
