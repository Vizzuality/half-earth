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
/**
@license
mersenne-twister.js - https://gist.github.com/banksean/300494

   Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions
   are met:

     1. Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.

     2. Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.

     3. The names of its contributors may not be used to endorse or promote
        products derived from this software without specific prior written
        permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

!(function() {
  define("Core/defined", [], function() {
    "use strict";
    function e(e) {
      return void 0 !== e && null !== e;
    }
    return e;
  }),
    define("Core/DeveloperError", ["./defined"], function(e) {
      "use strict";
      function t(e) {
        (this.name = "DeveloperError"), (this.message = e);
        var t;
        try {
          throw new Error();
        } catch (e) {
          t = e.stack;
        }
        this.stack = t;
      }
      return (
        e(Object.create) &&
          ((t.prototype = Object.create(Error.prototype)),
          (t.prototype.constructor = t)),
        (t.prototype.toString = function() {
          var t = this.name + ": " + this.message;
          return e(this.stack) && (t += "\n" + this.stack.toString()), t;
        }),
        (t.throwInstantiationError = function() {
          throw new t(
            "This function defines an interface and should not be called directly."
          );
        }),
        t
      );
    }),
    define("Core/Check", ["./defined", "./DeveloperError"], function(e, t) {
      "use strict";
      function n(e) {
        return e + " is required, actual value was undefined";
      }
      function r(e, t, n) {
        return (
          "Expected " + n + " to be typeof " + t + ", actual typeof was " + e
        );
      }
      var i = {};
      return (
        (i.typeOf = {}),
        (i.defined = function(r, i) {
          if (!e(i)) throw new t(n(r));
        }),
        (i.typeOf.func = function(e, n) {
          if ("function" != typeof n) throw new t(r(typeof n, "function", e));
        }),
        (i.typeOf.string = function(e, n) {
          if ("string" != typeof n) throw new t(r(typeof n, "string", e));
        }),
        (i.typeOf.number = function(e, n) {
          if ("number" != typeof n) throw new t(r(typeof n, "number", e));
        }),
        (i.typeOf.number.lessThan = function(e, n, r) {
          if ((i.typeOf.number(e, n), n >= r))
            throw new t(
              "Expected " +
                e +
                " to be less than " +
                r +
                ", actual value was " +
                n
            );
        }),
        (i.typeOf.number.lessThanOrEquals = function(e, n, r) {
          if ((i.typeOf.number(e, n), n > r))
            throw new t(
              "Expected " +
                e +
                " to be less than or equal to " +
                r +
                ", actual value was " +
                n
            );
        }),
        (i.typeOf.number.greaterThan = function(e, n, r) {
          if ((i.typeOf.number(e, n), n <= r))
            throw new t(
              "Expected " +
                e +
                " to be greater than " +
                r +
                ", actual value was " +
                n
            );
        }),
        (i.typeOf.number.greaterThanOrEquals = function(e, n, r) {
          if ((i.typeOf.number(e, n), n < r))
            throw new t(
              "Expected " +
                e +
                " to be greater than or equal to" +
                r +
                ", actual value was " +
                n
            );
        }),
        (i.typeOf.object = function(e, n) {
          if ("object" != typeof n) throw new t(r(typeof n, "object", e));
        }),
        (i.typeOf.bool = function(e, n) {
          if ("boolean" != typeof n) throw new t(r(typeof n, "boolean", e));
        }),
        (i.typeOf.number.equals = function(e, n, r, a) {
          if ((i.typeOf.number(e, r), i.typeOf.number(n, a), r !== a))
            throw new t(
              e +
                " must be equal to " +
                n +
                ", the actual values are " +
                r +
                " and " +
                a
            );
        }),
        i
      );
    }),
    define("Core/freezeObject", ["./defined"], function(e) {
      "use strict";
      var t = Object.freeze;
      return (
        e(t) ||
          (t = function(e) {
            return e;
          }),
        t
      );
    }),
    define("Core/defaultValue", ["./freezeObject"], function(e) {
      "use strict";
      function t(e, t) {
        return void 0 !== e && null !== e ? e : t;
      }
      return (t.EMPTY_OBJECT = e({})), t;
    }),
    define("ThirdParty/mersenne-twister", [], function() {
      var e = function(e) {
        void 0 == e && (e = new Date().getTime()),
          (this.N = 624),
          (this.M = 397),
          (this.MATRIX_A = 2567483615),
          (this.UPPER_MASK = 2147483648),
          (this.LOWER_MASK = 2147483647),
          (this.mt = new Array(this.N)),
          (this.mti = this.N + 1),
          this.init_genrand(e);
      };
      return (
        (e.prototype.init_genrand = function(e) {
          for (
            this.mt[0] = e >>> 0, this.mti = 1;
            this.mti < this.N;
            this.mti++
          ) {
            var e = this.mt[this.mti - 1] ^ (this.mt[this.mti - 1] >>> 30);
            (this.mt[this.mti] =
              ((1812433253 * ((4294901760 & e) >>> 16)) << 16) +
              1812433253 * (65535 & e) +
              this.mti),
              (this.mt[this.mti] >>>= 0);
          }
        }),
        (e.prototype.genrand_int32 = function() {
          var e,
            t = new Array(0, this.MATRIX_A);
          if (this.mti >= this.N) {
            var n;
            for (
              this.mti == this.N + 1 && this.init_genrand(5489), n = 0;
              n < this.N - this.M;
              n++
            )
              (e =
                (this.mt[n] & this.UPPER_MASK) |
                (this.mt[n + 1] & this.LOWER_MASK)),
                (this.mt[n] = this.mt[n + this.M] ^ (e >>> 1) ^ t[1 & e]);
            for (; n < this.N - 1; n++)
              (e =
                (this.mt[n] & this.UPPER_MASK) |
                (this.mt[n + 1] & this.LOWER_MASK)),
                (this.mt[n] =
                  this.mt[n + (this.M - this.N)] ^ (e >>> 1) ^ t[1 & e]);
            (e =
              (this.mt[this.N - 1] & this.UPPER_MASK) |
              (this.mt[0] & this.LOWER_MASK)),
              (this.mt[this.N - 1] =
                this.mt[this.M - 1] ^ (e >>> 1) ^ t[1 & e]),
              (this.mti = 0);
          }
          return (
            (e = this.mt[this.mti++]),
            (e ^= e >>> 11),
            (e ^= (e << 7) & 2636928640),
            (e ^= (e << 15) & 4022730752),
            (e ^= e >>> 18),
            e >>> 0
          );
        }),
        (e.prototype.random = function() {
          return this.genrand_int32() * (1 / 4294967296);
        }),
        e
      );
    }),
    define(
      "Core/Math",
      [
        "../ThirdParty/mersenne-twister",
        "./defaultValue",
        "./defined",
        "./DeveloperError"
      ],
      function(e, t, n, r) {
        "use strict";
        var i = {};
        (i.EPSILON1 = 0.1),
          (i.EPSILON2 = 0.01),
          (i.EPSILON3 = 0.001),
          (i.EPSILON4 = 1e-4),
          (i.EPSILON5 = 1e-5),
          (i.EPSILON6 = 1e-6),
          (i.EPSILON7 = 1e-7),
          (i.EPSILON8 = 1e-8),
          (i.EPSILON9 = 1e-9),
          (i.EPSILON10 = 1e-10),
          (i.EPSILON11 = 1e-11),
          (i.EPSILON12 = 1e-12),
          (i.EPSILON13 = 1e-13),
          (i.EPSILON14 = 1e-14),
          (i.EPSILON15 = 1e-15),
          (i.EPSILON16 = 1e-16),
          (i.EPSILON17 = 1e-17),
          (i.EPSILON18 = 1e-18),
          (i.EPSILON19 = 1e-19),
          (i.EPSILON20 = 1e-20),
          (i.GRAVITATIONALPARAMETER = 3986004418e5),
          (i.SOLAR_RADIUS = 6955e5),
          (i.LUNAR_RADIUS = 1737400),
          (i.SIXTY_FOUR_KILOBYTES = 65536),
          (i.sign = function(e) {
            return e > 0 ? 1 : e < 0 ? -1 : 0;
          }),
          (i.signNotZero = function(e) {
            return e < 0 ? -1 : 1;
          }),
          (i.toSNorm = function(e, n) {
            return (
              (n = t(n, 255)), Math.round((0.5 * i.clamp(e, -1, 1) + 0.5) * n)
            );
          }),
          (i.fromSNorm = function(e, n) {
            return (n = t(n, 255)), i.clamp(e, 0, n) / n * 2 - 1;
          }),
          (i.sinh = function(e) {
            var t = Math.pow(Math.E, e),
              n = Math.pow(Math.E, -1 * e);
            return 0.5 * (t - n);
          }),
          (i.cosh = function(e) {
            var t = Math.pow(Math.E, e),
              n = Math.pow(Math.E, -1 * e);
            return 0.5 * (t + n);
          }),
          (i.lerp = function(e, t, n) {
            return (1 - n) * e + n * t;
          }),
          (i.PI = Math.PI),
          (i.ONE_OVER_PI = 1 / Math.PI),
          (i.PI_OVER_TWO = 0.5 * Math.PI),
          (i.PI_OVER_THREE = Math.PI / 3),
          (i.PI_OVER_FOUR = Math.PI / 4),
          (i.PI_OVER_SIX = Math.PI / 6),
          (i.THREE_PI_OVER_TWO = 3 * Math.PI * 0.5),
          (i.TWO_PI = 2 * Math.PI),
          (i.ONE_OVER_TWO_PI = 1 / (2 * Math.PI)),
          (i.RADIANS_PER_DEGREE = Math.PI / 180),
          (i.DEGREES_PER_RADIAN = 180 / Math.PI),
          (i.RADIANS_PER_ARCSECOND = i.RADIANS_PER_DEGREE / 3600),
          (i.toRadians = function(e) {
            return e * i.RADIANS_PER_DEGREE;
          }),
          (i.toDegrees = function(e) {
            return e * i.DEGREES_PER_RADIAN;
          }),
          (i.convertLongitudeRange = function(e) {
            var t = i.TWO_PI,
              n = e - Math.floor(e / t) * t;
            return n < -Math.PI ? n + t : n >= Math.PI ? n - t : n;
          }),
          (i.clampToLatitudeRange = function(e) {
            return i.clamp(e, -1 * i.PI_OVER_TWO, i.PI_OVER_TWO);
          }),
          (i.negativePiToPi = function(e) {
            return i.zeroToTwoPi(e + i.PI) - i.PI;
          }),
          (i.zeroToTwoPi = function(e) {
            var t = i.mod(e, i.TWO_PI);
            return Math.abs(t) < i.EPSILON14 && Math.abs(e) > i.EPSILON14
              ? i.TWO_PI
              : t;
          }),
          (i.mod = function(e, t) {
            return (e % t + t) % t;
          }),
          (i.equalsEpsilon = function(e, n, r, i) {
            i = t(i, r);
            var a = Math.abs(e - n);
            return a <= i || a <= r * Math.max(Math.abs(e), Math.abs(n));
          });
        var a = [1];
        (i.factorial = function(e) {
          var t = a.length;
          if (e >= t) for (var n = a[t - 1], r = t; r <= e; r++) a.push(n * r);
          return a[e];
        }),
          (i.incrementWrap = function(e, n, r) {
            return (r = t(r, 0)), ++e, e > n && (e = r), e;
          }),
          (i.isPowerOfTwo = function(e) {
            return 0 !== e && 0 === (e & (e - 1));
          }),
          (i.nextPowerOfTwo = function(e) {
            return (
              --e,
              (e |= e >> 1),
              (e |= e >> 2),
              (e |= e >> 4),
              (e |= e >> 8),
              (e |= e >> 16),
              ++e,
              e
            );
          }),
          (i.clamp = function(e, t, n) {
            return e < t ? t : e > n ? n : e;
          });
        var o = new e();
        return (
          (i.setRandomNumberSeed = function(t) {
            o = new e(t);
          }),
          (i.nextRandomNumber = function() {
            return o.random();
          }),
          (i.randomBetween = function(e, t) {
            return i.nextRandomNumber() * (t - e) + e;
          }),
          (i.acosClamped = function(e) {
            return Math.acos(i.clamp(e, -1, 1));
          }),
          (i.asinClamped = function(e) {
            return Math.asin(i.clamp(e, -1, 1));
          }),
          (i.chordLength = function(e, t) {
            return 2 * t * Math.sin(0.5 * e);
          }),
          (i.logBase = function(e, t) {
            return Math.log(e) / Math.log(t);
          }),
          (i.fog = function(e, t) {
            var n = e * t;
            return 1 - Math.exp(-(n * n));
          }),
          i
        );
      }
    ),
    define(
      "Core/Cartesian3",
      [
        "./Check",
        "./defaultValue",
        "./defined",
        "./DeveloperError",
        "./freezeObject",
        "./Math"
      ],
      function(e, t, n, r, i, a) {
        "use strict";
        function o(e, n, r) {
          (this.x = t(e, 0)), (this.y = t(n, 0)), (this.z = t(r, 0));
        }
        (o.fromSpherical = function(e, r) {
          n(r) || (r = new o());
          var i = e.clock,
            a = e.cone,
            u = t(e.magnitude, 1),
            E = u * Math.sin(a);
          return (
            (r.x = E * Math.cos(i)),
            (r.y = E * Math.sin(i)),
            (r.z = u * Math.cos(a)),
            r
          );
        }),
          (o.fromElements = function(e, t, r, i) {
            return n(i) ? ((i.x = e), (i.y = t), (i.z = r), i) : new o(e, t, r);
          }),
          (o.clone = function(e, t) {
            if (n(e))
              return n(t)
                ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), t)
                : new o(e.x, e.y, e.z);
          }),
          (o.fromCartesian4 = o.clone),
          (o.packedLength = 3),
          (o.pack = function(e, n, r) {
            return (
              (r = t(r, 0)), (n[r++] = e.x), (n[r++] = e.y), (n[r] = e.z), n
            );
          }),
          (o.unpack = function(e, r, i) {
            return (
              (r = t(r, 0)),
              n(i) || (i = new o()),
              (i.x = e[r++]),
              (i.y = e[r++]),
              (i.z = e[r]),
              i
            );
          }),
          (o.packArray = function(e, t) {
            var r = e.length;
            n(t) ? (t.length = 3 * r) : (t = new Array(3 * r));
            for (var i = 0; i < r; ++i) o.pack(e[i], t, 3 * i);
            return t;
          }),
          (o.unpackArray = function(e, t) {
            var r = e.length;
            n(t) ? (t.length = r / 3) : (t = new Array(r / 3));
            for (var i = 0; i < r; i += 3) {
              var a = i / 3;
              t[a] = o.unpack(e, i, t[a]);
            }
            return t;
          }),
          (o.fromArray = o.unpack),
          (o.maximumComponent = function(e) {
            return Math.max(e.x, e.y, e.z);
          }),
          (o.minimumComponent = function(e) {
            return Math.min(e.x, e.y, e.z);
          }),
          (o.minimumByComponent = function(e, t, n) {
            return (
              (n.x = Math.min(e.x, t.x)),
              (n.y = Math.min(e.y, t.y)),
              (n.z = Math.min(e.z, t.z)),
              n
            );
          }),
          (o.maximumByComponent = function(e, t, n) {
            return (
              (n.x = Math.max(e.x, t.x)),
              (n.y = Math.max(e.y, t.y)),
              (n.z = Math.max(e.z, t.z)),
              n
            );
          }),
          (o.magnitudeSquared = function(e) {
            return e.x * e.x + e.y * e.y + e.z * e.z;
          }),
          (o.magnitude = function(e) {
            return Math.sqrt(o.magnitudeSquared(e));
          });
        var u = new o();
        (o.distance = function(e, t) {
          return o.subtract(e, t, u), o.magnitude(u);
        }),
          (o.distanceSquared = function(e, t) {
            return o.subtract(e, t, u), o.magnitudeSquared(u);
          }),
          (o.normalize = function(e, t) {
            var n = o.magnitude(e);
            return (t.x = e.x / n), (t.y = e.y / n), (t.z = e.z / n), t;
          }),
          (o.dot = function(e, t) {
            return e.x * t.x + e.y * t.y + e.z * t.z;
          }),
          (o.multiplyComponents = function(e, t, n) {
            return (n.x = e.x * t.x), (n.y = e.y * t.y), (n.z = e.z * t.z), n;
          }),
          (o.divideComponents = function(e, t, n) {
            return (n.x = e.x / t.x), (n.y = e.y / t.y), (n.z = e.z / t.z), n;
          }),
          (o.add = function(e, t, n) {
            return (n.x = e.x + t.x), (n.y = e.y + t.y), (n.z = e.z + t.z), n;
          }),
          (o.subtract = function(e, t, n) {
            return (n.x = e.x - t.x), (n.y = e.y - t.y), (n.z = e.z - t.z), n;
          }),
          (o.multiplyByScalar = function(e, t, n) {
            return (n.x = e.x * t), (n.y = e.y * t), (n.z = e.z * t), n;
          }),
          (o.divideByScalar = function(e, t, n) {
            return (n.x = e.x / t), (n.y = e.y / t), (n.z = e.z / t), n;
          }),
          (o.negate = function(e, t) {
            return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), t;
          }),
          (o.abs = function(e, t) {
            return (
              (t.x = Math.abs(e.x)),
              (t.y = Math.abs(e.y)),
              (t.z = Math.abs(e.z)),
              t
            );
          });
        var E = new o();
        o.lerp = function(e, t, n, r) {
          return (
            o.multiplyByScalar(t, n, E),
            (r = o.multiplyByScalar(e, 1 - n, r)),
            o.add(E, r, r)
          );
        };
        var s = new o(),
          c = new o();
        o.angleBetween = function(e, t) {
          o.normalize(e, s), o.normalize(t, c);
          var n = o.dot(s, c),
            r = o.magnitude(o.cross(s, c, s));
          return Math.atan2(r, n);
        };
        var _ = new o();
        (o.mostOrthogonalAxis = function(e, t) {
          var n = o.normalize(e, _);
          return (
            o.abs(n, n),
            (t =
              n.x <= n.y
                ? n.x <= n.z ? o.clone(o.UNIT_X, t) : o.clone(o.UNIT_Z, t)
                : n.y <= n.z ? o.clone(o.UNIT_Y, t) : o.clone(o.UNIT_Z, t))
          );
        }),
          (o.equals = function(e, t) {
            return (
              e === t ||
              (n(e) && n(t) && e.x === t.x && e.y === t.y && e.z === t.z)
            );
          }),
          (o.equalsArray = function(e, t, n) {
            return e.x === t[n] && e.y === t[n + 1] && e.z === t[n + 2];
          }),
          (o.equalsEpsilon = function(e, t, r, i) {
            return (
              e === t ||
              (n(e) &&
                n(t) &&
                a.equalsEpsilon(e.x, t.x, r, i) &&
                a.equalsEpsilon(e.y, t.y, r, i) &&
                a.equalsEpsilon(e.z, t.z, r, i))
            );
          }),
          (o.cross = function(e, t, n) {
            var r = e.x,
              i = e.y,
              a = e.z,
              o = t.x,
              u = t.y,
              E = t.z,
              s = i * E - a * u,
              c = a * o - r * E,
              _ = r * u - i * o;
            return (n.x = s), (n.y = c), (n.z = _), n;
          }),
          (o.fromDegrees = function(e, t, n, r, i) {
            return (
              (e = a.toRadians(e)),
              (t = a.toRadians(t)),
              o.fromRadians(e, t, n, r, i)
            );
          });
        var l = new o(),
          T = new o(),
          R = new o(40680631590769, 40680631590769, 40408299984661.445);
        return (
          (o.fromRadians = function(e, r, i, a, u) {
            i = t(i, 0);
            var E = n(a) ? a.radiiSquared : R,
              s = Math.cos(r);
            (l.x = s * Math.cos(e)),
              (l.y = s * Math.sin(e)),
              (l.z = Math.sin(r)),
              (l = o.normalize(l, l)),
              o.multiplyComponents(E, l, T);
            var c = Math.sqrt(o.dot(l, T));
            return (
              (T = o.divideByScalar(T, c, T)),
              (l = o.multiplyByScalar(l, i, l)),
              n(u) || (u = new o()),
              o.add(T, l, u)
            );
          }),
          (o.fromDegreesArray = function(e, t, r) {
            var i = e.length;
            n(r) ? (r.length = i / 2) : (r = new Array(i / 2));
            for (var a = 0; a < i; a += 2) {
              var u = e[a],
                E = e[a + 1],
                s = a / 2;
              r[s] = o.fromDegrees(u, E, 0, t, r[s]);
            }
            return r;
          }),
          (o.fromRadiansArray = function(e, t, r) {
            var i = e.length;
            n(r) ? (r.length = i / 2) : (r = new Array(i / 2));
            for (var a = 0; a < i; a += 2) {
              var u = e[a],
                E = e[a + 1],
                s = a / 2;
              r[s] = o.fromRadians(u, E, 0, t, r[s]);
            }
            return r;
          }),
          (o.fromDegreesArrayHeights = function(e, t, r) {
            var i = e.length;
            n(r) ? (r.length = i / 3) : (r = new Array(i / 3));
            for (var a = 0; a < i; a += 3) {
              var u = e[a],
                E = e[a + 1],
                s = e[a + 2],
                c = a / 3;
              r[c] = o.fromDegrees(u, E, s, t, r[c]);
            }
            return r;
          }),
          (o.fromRadiansArrayHeights = function(e, t, r) {
            var i = e.length;
            n(r) ? (r.length = i / 3) : (r = new Array(i / 3));
            for (var a = 0; a < i; a += 3) {
              var u = e[a],
                E = e[a + 1],
                s = e[a + 2],
                c = a / 3;
              r[c] = o.fromRadians(u, E, s, t, r[c]);
            }
            return r;
          }),
          (o.ZERO = i(new o(0, 0, 0))),
          (o.UNIT_X = i(new o(1, 0, 0))),
          (o.UNIT_Y = i(new o(0, 1, 0))),
          (o.UNIT_Z = i(new o(0, 0, 1))),
          (o.prototype.clone = function(e) {
            return o.clone(this, e);
          }),
          (o.prototype.equals = function(e) {
            return o.equals(this, e);
          }),
          (o.prototype.equalsEpsilon = function(e, t, n) {
            return o.equalsEpsilon(this, e, t, n);
          }),
          (o.prototype.toString = function() {
            return "(" + this.x + ", " + this.y + ", " + this.z + ")";
          }),
          o
        );
      }
    ),
    define(
      "Core/scaleToGeodeticSurface",
      ["./Cartesian3", "./defined", "./DeveloperError", "./Math"],
      function(e, t, n, r) {
        "use strict";
        function i(n, i, u, E, s) {
          var c = n.x,
            _ = n.y,
            l = n.z,
            T = i.x,
            R = i.y,
            f = i.z,
            h = c * c * T * T,
            A = _ * _ * R * R,
            d = l * l * f * f,
            N = h + A + d,
            I = Math.sqrt(1 / N),
            S = e.multiplyByScalar(n, I, a);
          if (N < E) return isFinite(I) ? e.clone(S, s) : void 0;
          var M = u.x,
            y = u.y,
            m = u.z,
            O = o;
          (O.x = S.x * M * 2), (O.y = S.y * y * 2), (O.z = S.z * m * 2);
          var p,
            C,
            U,
            g,
            w,
            L,
            x,
            P,
            v,
            F,
            B,
            D = (1 - I) * e.magnitude(n) / (0.5 * e.magnitude(O)),
            z = 0;
          do {
            (D -= z),
              (U = 1 / (1 + D * M)),
              (g = 1 / (1 + D * y)),
              (w = 1 / (1 + D * m)),
              (L = U * U),
              (x = g * g),
              (P = w * w),
              (v = L * U),
              (F = x * g),
              (B = P * w),
              (p = h * L + A * x + d * P - 1),
              (C = h * v * M + A * F * y + d * B * m);
            var G = -2 * C;
            z = p / G;
          } while (Math.abs(p) > r.EPSILON12);
          return t(s)
            ? ((s.x = c * U), (s.y = _ * g), (s.z = l * w), s)
            : new e(c * U, _ * g, l * w);
        }
        var a = new e(),
          o = new e();
        return i;
      }
    ),
    define(
      "Core/Cartographic",
      [
        "./Cartesian3",
        "./Check",
        "./defaultValue",
        "./defined",
        "./freezeObject",
        "./Math",
        "./scaleToGeodeticSurface"
      ],
      function(e, t, n, r, i, a, o) {
        "use strict";
        function u(e, t, r) {
          (this.longitude = n(e, 0)),
            (this.latitude = n(t, 0)),
            (this.height = n(r, 0));
        }
        (u.fromRadians = function(e, t, i, a) {
          return (
            (i = n(i, 0)),
            r(a)
              ? ((a.longitude = e), (a.latitude = t), (a.height = i), a)
              : new u(e, t, i)
          );
        }),
          (u.fromDegrees = function(e, t, n, r) {
            return (
              (e = a.toRadians(e)),
              (t = a.toRadians(t)),
              u.fromRadians(e, t, n, r)
            );
          });
        var E = new e(),
          s = new e(),
          c = new e(),
          _ = new e(1 / 6378137, 1 / 6378137, 1 / 6356752.314245179),
          l = new e(
            1 / 40680631590769,
            1 / 40680631590769,
            1 / 40408299984661.445
          ),
          T = a.EPSILON1;
        return (
          (u.fromCartesian = function(t, n, i) {
            var R = r(n) ? n.oneOverRadii : _,
              f = r(n) ? n.oneOverRadiiSquared : l,
              h = r(n) ? n._centerToleranceSquared : T,
              A = o(t, R, f, h, s);
            if (r(A)) {
              var d = e.multiplyComponents(A, f, E);
              d = e.normalize(d, d);
              var N = e.subtract(t, A, c),
                I = Math.atan2(d.y, d.x),
                S = Math.asin(d.z),
                M = a.sign(e.dot(N, t)) * e.magnitude(N);
              return r(i)
                ? ((i.longitude = I), (i.latitude = S), (i.height = M), i)
                : new u(I, S, M);
            }
          }),
          (u.clone = function(e, t) {
            if (r(e))
              return r(t)
                ? ((t.longitude = e.longitude),
                  (t.latitude = e.latitude),
                  (t.height = e.height),
                  t)
                : new u(e.longitude, e.latitude, e.height);
          }),
          (u.equals = function(e, t) {
            return (
              e === t ||
              (r(e) &&
                r(t) &&
                e.longitude === t.longitude &&
                e.latitude === t.latitude &&
                e.height === t.height)
            );
          }),
          (u.equalsEpsilon = function(e, t, n) {
            return (
              e === t ||
              (r(e) &&
                r(t) &&
                Math.abs(e.longitude - t.longitude) <= n &&
                Math.abs(e.latitude - t.latitude) <= n &&
                Math.abs(e.height - t.height) <= n)
            );
          }),
          (u.ZERO = i(new u(0, 0, 0))),
          (u.prototype.clone = function(e) {
            return u.clone(this, e);
          }),
          (u.prototype.equals = function(e) {
            return u.equals(this, e);
          }),
          (u.prototype.equalsEpsilon = function(e, t) {
            return u.equalsEpsilon(this, e, t);
          }),
          (u.prototype.toString = function() {
            return (
              "(" +
              this.longitude +
              ", " +
              this.latitude +
              ", " +
              this.height +
              ")"
            );
          }),
          u
        );
      }
    ),
    define("Core/defineProperties", ["./defined"], function(e) {
      "use strict";
      var t = (function() {
          try {
            return "x" in Object.defineProperty({}, "x", {});
          } catch (e) {
            return !1;
          }
        })(),
        n = Object.defineProperties;
      return (
        (t && e(n)) ||
          (n = function(e) {
            return e;
          }),
        n
      );
    }),
    define(
      "Core/Ellipsoid",
      [
        "./Cartesian3",
        "./Cartographic",
        "./Check",
        "./defaultValue",
        "./defined",
        "./defineProperties",
        "./DeveloperError",
        "./freezeObject",
        "./Math",
        "./scaleToGeodeticSurface"
      ],
      function(e, t, n, r, i, a, o, u, E, s) {
        "use strict";
        function c(t, n, i, a) {
          (n = r(n, 0)),
            (i = r(i, 0)),
            (a = r(a, 0)),
            (t._radii = new e(n, i, a)),
            (t._radiiSquared = new e(n * n, i * i, a * a)),
            (t._radiiToTheFourth = new e(
              n * n * n * n,
              i * i * i * i,
              a * a * a * a
            )),
            (t._oneOverRadii = new e(
              0 === n ? 0 : 1 / n,
              0 === i ? 0 : 1 / i,
              0 === a ? 0 : 1 / a
            )),
            (t._oneOverRadiiSquared = new e(
              0 === n ? 0 : 1 / (n * n),
              0 === i ? 0 : 1 / (i * i),
              0 === a ? 0 : 1 / (a * a)
            )),
            (t._minimumRadius = Math.min(n, i, a)),
            (t._maximumRadius = Math.max(n, i, a)),
            (t._centerToleranceSquared = E.EPSILON1),
            0 !== t._radiiSquared.z &&
              (t._squaredXOverSquaredZ = t._radiiSquared.x / t._radiiSquared.z);
        }
        function _(e, t, n) {
          (this._radii = void 0),
            (this._radiiSquared = void 0),
            (this._radiiToTheFourth = void 0),
            (this._oneOverRadii = void 0),
            (this._oneOverRadiiSquared = void 0),
            (this._minimumRadius = void 0),
            (this._maximumRadius = void 0),
            (this._centerToleranceSquared = void 0),
            (this._squaredXOverSquaredZ = void 0),
            c(this, e, t, n);
        }
        a(_.prototype, {
          radii: {
            get: function() {
              return this._radii;
            }
          },
          radiiSquared: {
            get: function() {
              return this._radiiSquared;
            }
          },
          radiiToTheFourth: {
            get: function() {
              return this._radiiToTheFourth;
            }
          },
          oneOverRadii: {
            get: function() {
              return this._oneOverRadii;
            }
          },
          oneOverRadiiSquared: {
            get: function() {
              return this._oneOverRadiiSquared;
            }
          },
          minimumRadius: {
            get: function() {
              return this._minimumRadius;
            }
          },
          maximumRadius: {
            get: function() {
              return this._maximumRadius;
            }
          }
        }),
          (_.clone = function(t, n) {
            if (i(t)) {
              var r = t._radii;
              return i(n)
                ? (e.clone(r, n._radii),
                  e.clone(t._radiiSquared, n._radiiSquared),
                  e.clone(t._radiiToTheFourth, n._radiiToTheFourth),
                  e.clone(t._oneOverRadii, n._oneOverRadii),
                  e.clone(t._oneOverRadiiSquared, n._oneOverRadiiSquared),
                  (n._minimumRadius = t._minimumRadius),
                  (n._maximumRadius = t._maximumRadius),
                  (n._centerToleranceSquared = t._centerToleranceSquared),
                  n)
                : new _(r.x, r.y, r.z);
            }
          }),
          (_.fromCartesian3 = function(e, t) {
            return i(t) || (t = new _()), i(e) ? (c(t, e.x, e.y, e.z), t) : t;
          }),
          (_.WGS84 = u(new _(6378137, 6378137, 6356752.314245179))),
          (_.UNIT_SPHERE = u(new _(1, 1, 1))),
          (_.MOON = u(new _(E.LUNAR_RADIUS, E.LUNAR_RADIUS, E.LUNAR_RADIUS))),
          (_.prototype.clone = function(e) {
            return _.clone(this, e);
          }),
          (_.packedLength = e.packedLength),
          (_.pack = function(t, n, i) {
            return (i = r(i, 0)), e.pack(t._radii, n, i), n;
          }),
          (_.unpack = function(t, n, i) {
            n = r(n, 0);
            var a = e.unpack(t, n);
            return _.fromCartesian3(a, i);
          }),
          (_.prototype.geocentricSurfaceNormal = e.normalize),
          (_.prototype.geodeticSurfaceNormalCartographic = function(t, n) {
            var r = t.longitude,
              a = t.latitude,
              o = Math.cos(a),
              u = o * Math.cos(r),
              E = o * Math.sin(r),
              s = Math.sin(a);
            return (
              i(n) || (n = new e()),
              (n.x = u),
              (n.y = E),
              (n.z = s),
              e.normalize(n, n)
            );
          }),
          (_.prototype.geodeticSurfaceNormal = function(t, n) {
            return (
              i(n) || (n = new e()),
              (n = e.multiplyComponents(t, this._oneOverRadiiSquared, n)),
              e.normalize(n, n)
            );
          });
        var l = new e(),
          T = new e();
        (_.prototype.cartographicToCartesian = function(t, n) {
          var r = l,
            a = T;
          this.geodeticSurfaceNormalCartographic(t, r),
            e.multiplyComponents(this._radiiSquared, r, a);
          var o = Math.sqrt(e.dot(r, a));
          return (
            e.divideByScalar(a, o, a),
            e.multiplyByScalar(r, t.height, r),
            i(n) || (n = new e()),
            e.add(a, r, n)
          );
        }),
          (_.prototype.cartographicArrayToCartesianArray = function(e, t) {
            var n = e.length;
            i(t) ? (t.length = n) : (t = new Array(n));
            for (var r = 0; r < n; r++)
              t[r] = this.cartographicToCartesian(e[r], t[r]);
            return t;
          });
        var R = new e(),
          f = new e(),
          h = new e();
        return (
          (_.prototype.cartesianToCartographic = function(n, r) {
            var a = this.scaleToGeodeticSurface(n, f);
            if (i(a)) {
              var o = this.geodeticSurfaceNormal(a, R),
                u = e.subtract(n, a, h),
                s = Math.atan2(o.y, o.x),
                c = Math.asin(o.z),
                _ = E.sign(e.dot(u, n)) * e.magnitude(u);
              return i(r)
                ? ((r.longitude = s), (r.latitude = c), (r.height = _), r)
                : new t(s, c, _);
            }
          }),
          (_.prototype.cartesianArrayToCartographicArray = function(e, t) {
            var n = e.length;
            i(t) ? (t.length = n) : (t = new Array(n));
            for (var r = 0; r < n; ++r)
              t[r] = this.cartesianToCartographic(e[r], t[r]);
            return t;
          }),
          (_.prototype.scaleToGeodeticSurface = function(e, t) {
            return s(
              e,
              this._oneOverRadii,
              this._oneOverRadiiSquared,
              this._centerToleranceSquared,
              t
            );
          }),
          (_.prototype.scaleToGeocentricSurface = function(t, n) {
            i(n) || (n = new e());
            var r = t.x,
              a = t.y,
              o = t.z,
              u = this._oneOverRadiiSquared,
              E = 1 / Math.sqrt(r * r * u.x + a * a * u.y + o * o * u.z);
            return e.multiplyByScalar(t, E, n);
          }),
          (_.prototype.transformPositionToScaledSpace = function(t, n) {
            return (
              i(n) || (n = new e()),
              e.multiplyComponents(t, this._oneOverRadii, n)
            );
          }),
          (_.prototype.transformPositionFromScaledSpace = function(t, n) {
            return (
              i(n) || (n = new e()), e.multiplyComponents(t, this._radii, n)
            );
          }),
          (_.prototype.equals = function(t) {
            return this === t || (i(t) && e.equals(this._radii, t._radii));
          }),
          (_.prototype.toString = function() {
            return this._radii.toString();
          }),
          (_.prototype.getSurfaceNormalIntersectionWithZAxis = function(
            t,
            n,
            a
          ) {
            n = r(n, 0);
            var o = this._squaredXOverSquaredZ;
            if (
              (i(a) || (a = new e()),
              (a.x = 0),
              (a.y = 0),
              (a.z = t.z * (1 - o)),
              !(Math.abs(a.z) >= this._radii.z - n))
            )
              return a;
          }),
          _
        );
      }
    ),
    define(
      "Core/GeographicProjection",
      [
        "./Cartesian3",
        "./Cartographic",
        "./defaultValue",
        "./defined",
        "./defineProperties",
        "./DeveloperError",
        "./Ellipsoid"
      ],
      function(e, t, n, r, i, a, o) {
        "use strict";
        function u(e) {
          (this._ellipsoid = n(e, o.WGS84)),
            (this._semimajorAxis = this._ellipsoid.maximumRadius),
            (this._oneOverSemimajorAxis = 1 / this._semimajorAxis);
        }
        return (
          i(u.prototype, {
            ellipsoid: {
              get: function() {
                return this._ellipsoid;
              }
            }
          }),
          (u.prototype.project = function(t, n) {
            var i = this._semimajorAxis,
              a = t.longitude * i,
              o = t.latitude * i,
              u = t.height;
            return r(n) ? ((n.x = a), (n.y = o), (n.z = u), n) : new e(a, o, u);
          }),
          (u.prototype.unproject = function(e, n) {
            var i = this._oneOverSemimajorAxis,
              a = e.x * i,
              o = e.y * i,
              u = e.z;
            return r(n)
              ? ((n.longitude = a), (n.latitude = o), (n.height = u), n)
              : new t(a, o, u);
          }),
          u
        );
      }
    ),
    define("Core/Intersect", ["./freezeObject"], function(e) {
      "use strict";
      var t = { OUTSIDE: -1, INTERSECTING: 0, INSIDE: 1 };
      return e(t);
    }),
    define("Core/Interval", ["./defaultValue"], function(e) {
      "use strict";
      function t(t, n) {
        (this.start = e(t, 0)), (this.stop = e(n, 0));
      }
      return t;
    }),
    define(
      "Core/Matrix3",
      [
        "./Cartesian3",
        "./Check",
        "./defaultValue",
        "./defined",
        "./defineProperties",
        "./DeveloperError",
        "./freezeObject",
        "./Math"
      ],
      function(e, t, n, r, i, a, o, u) {
        "use strict";
        function E(e, t, r, i, a, o, u, E, s) {
          (this[0] = n(e, 0)),
            (this[1] = n(i, 0)),
            (this[2] = n(u, 0)),
            (this[3] = n(t, 0)),
            (this[4] = n(a, 0)),
            (this[5] = n(E, 0)),
            (this[6] = n(r, 0)),
            (this[7] = n(o, 0)),
            (this[8] = n(s, 0));
        }
        function s(e) {
          for (var t = 0, n = 0; n < 9; ++n) {
            var r = e[n];
            t += r * r;
          }
          return Math.sqrt(t);
        }
        function c(e) {
          for (var t = 0, n = 0; n < 3; ++n) {
            var r = e[E.getElementIndex(f[n], R[n])];
            t += 2 * r * r;
          }
          return Math.sqrt(t);
        }
        function _(e, t) {
          for (var n = u.EPSILON15, r = 0, i = 1, a = 0; a < 3; ++a) {
            var o = Math.abs(e[E.getElementIndex(f[a], R[a])]);
            o > r && ((i = a), (r = o));
          }
          var s = 1,
            c = 0,
            _ = R[i],
            l = f[i];
          if (Math.abs(e[E.getElementIndex(l, _)]) > n) {
            var T,
              h = e[E.getElementIndex(l, l)],
              A = e[E.getElementIndex(_, _)],
              d = e[E.getElementIndex(l, _)],
              N = (h - A) / 2 / d;
            (T =
              N < 0
                ? -1 / (-N + Math.sqrt(1 + N * N))
                : 1 / (N + Math.sqrt(1 + N * N))),
              (s = 1 / Math.sqrt(1 + T * T)),
              (c = T * s);
          }
          return (
            (t = E.clone(E.IDENTITY, t)),
            (t[E.getElementIndex(_, _)] = t[E.getElementIndex(l, l)] = s),
            (t[E.getElementIndex(l, _)] = c),
            (t[E.getElementIndex(_, l)] = -c),
            t
          );
        }
        (E.packedLength = 9),
          (E.pack = function(e, t, r) {
            return (
              (r = n(r, 0)),
              (t[r++] = e[0]),
              (t[r++] = e[1]),
              (t[r++] = e[2]),
              (t[r++] = e[3]),
              (t[r++] = e[4]),
              (t[r++] = e[5]),
              (t[r++] = e[6]),
              (t[r++] = e[7]),
              (t[r++] = e[8]),
              t
            );
          }),
          (E.unpack = function(e, t, i) {
            return (
              (t = n(t, 0)),
              r(i) || (i = new E()),
              (i[0] = e[t++]),
              (i[1] = e[t++]),
              (i[2] = e[t++]),
              (i[3] = e[t++]),
              (i[4] = e[t++]),
              (i[5] = e[t++]),
              (i[6] = e[t++]),
              (i[7] = e[t++]),
              (i[8] = e[t++]),
              i
            );
          }),
          (E.clone = function(e, t) {
            if (r(e))
              return r(t)
                ? ((t[0] = e[0]),
                  (t[1] = e[1]),
                  (t[2] = e[2]),
                  (t[3] = e[3]),
                  (t[4] = e[4]),
                  (t[5] = e[5]),
                  (t[6] = e[6]),
                  (t[7] = e[7]),
                  (t[8] = e[8]),
                  t)
                : new E(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]);
          }),
          (E.fromArray = function(e, t, i) {
            return (
              (t = n(t, 0)),
              r(i) || (i = new E()),
              (i[0] = e[t]),
              (i[1] = e[t + 1]),
              (i[2] = e[t + 2]),
              (i[3] = e[t + 3]),
              (i[4] = e[t + 4]),
              (i[5] = e[t + 5]),
              (i[6] = e[t + 6]),
              (i[7] = e[t + 7]),
              (i[8] = e[t + 8]),
              i
            );
          }),
          (E.fromColumnMajorArray = function(e, t) {
            return E.clone(e, t);
          }),
          (E.fromRowMajorArray = function(e, t) {
            return r(t)
              ? ((t[0] = e[0]),
                (t[1] = e[3]),
                (t[2] = e[6]),
                (t[3] = e[1]),
                (t[4] = e[4]),
                (t[5] = e[7]),
                (t[6] = e[2]),
                (t[7] = e[5]),
                (t[8] = e[8]),
                t)
              : new E(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]);
          }),
          (E.fromQuaternion = function(e, t) {
            var n = e.x * e.x,
              i = e.x * e.y,
              a = e.x * e.z,
              o = e.x * e.w,
              u = e.y * e.y,
              s = e.y * e.z,
              c = e.y * e.w,
              _ = e.z * e.z,
              l = e.z * e.w,
              T = e.w * e.w,
              R = n - u - _ + T,
              f = 2 * (i - l),
              h = 2 * (a + c),
              A = 2 * (i + l),
              d = -n + u - _ + T,
              N = 2 * (s - o),
              I = 2 * (a - c),
              S = 2 * (s + o),
              M = -n - u + _ + T;
            return r(t)
              ? ((t[0] = R),
                (t[1] = A),
                (t[2] = I),
                (t[3] = f),
                (t[4] = d),
                (t[5] = S),
                (t[6] = h),
                (t[7] = N),
                (t[8] = M),
                t)
              : new E(R, f, h, A, d, N, I, S, M);
          }),
          (E.fromHeadingPitchRoll = function(e, t) {
            var n = Math.cos(-e.pitch),
              i = Math.cos(-e.heading),
              a = Math.cos(e.roll),
              o = Math.sin(-e.pitch),
              u = Math.sin(-e.heading),
              s = Math.sin(e.roll),
              c = n * i,
              _ = -a * u + s * o * i,
              l = s * u + a * o * i,
              T = n * u,
              R = a * i + s * o * u,
              f = -s * i + a * o * u,
              h = -o,
              A = s * n,
              d = a * n;
            return r(t)
              ? ((t[0] = c),
                (t[1] = T),
                (t[2] = h),
                (t[3] = _),
                (t[4] = R),
                (t[5] = A),
                (t[6] = l),
                (t[7] = f),
                (t[8] = d),
                t)
              : new E(c, _, l, T, R, f, h, A, d);
          }),
          (E.fromScale = function(e, t) {
            return r(t)
              ? ((t[0] = e.x),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 0),
                (t[4] = e.y),
                (t[5] = 0),
                (t[6] = 0),
                (t[7] = 0),
                (t[8] = e.z),
                t)
              : new E(e.x, 0, 0, 0, e.y, 0, 0, 0, e.z);
          }),
          (E.fromUniformScale = function(e, t) {
            return r(t)
              ? ((t[0] = e),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 0),
                (t[4] = e),
                (t[5] = 0),
                (t[6] = 0),
                (t[7] = 0),
                (t[8] = e),
                t)
              : new E(e, 0, 0, 0, e, 0, 0, 0, e);
          }),
          (E.fromCrossProduct = function(e, t) {
            return r(t)
              ? ((t[0] = 0),
                (t[1] = e.z),
                (t[2] = -e.y),
                (t[3] = -e.z),
                (t[4] = 0),
                (t[5] = e.x),
                (t[6] = e.y),
                (t[7] = -e.x),
                (t[8] = 0),
                t)
              : new E(0, -e.z, e.y, e.z, 0, -e.x, -e.y, e.x, 0);
          }),
          (E.fromRotationX = function(e, t) {
            var n = Math.cos(e),
              i = Math.sin(e);
            return r(t)
              ? ((t[0] = 1),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 0),
                (t[4] = n),
                (t[5] = i),
                (t[6] = 0),
                (t[7] = -i),
                (t[8] = n),
                t)
              : new E(1, 0, 0, 0, n, -i, 0, i, n);
          }),
          (E.fromRotationY = function(e, t) {
            var n = Math.cos(e),
              i = Math.sin(e);
            return r(t)
              ? ((t[0] = n),
                (t[1] = 0),
                (t[2] = -i),
                (t[3] = 0),
                (t[4] = 1),
                (t[5] = 0),
                (t[6] = i),
                (t[7] = 0),
                (t[8] = n),
                t)
              : new E(n, 0, i, 0, 1, 0, -i, 0, n);
          }),
          (E.fromRotationZ = function(e, t) {
            var n = Math.cos(e),
              i = Math.sin(e);
            return r(t)
              ? ((t[0] = n),
                (t[1] = i),
                (t[2] = 0),
                (t[3] = -i),
                (t[4] = n),
                (t[5] = 0),
                (t[6] = 0),
                (t[7] = 0),
                (t[8] = 1),
                t)
              : new E(n, -i, 0, i, n, 0, 0, 0, 1);
          }),
          (E.toArray = function(e, t) {
            return r(t)
              ? ((t[0] = e[0]),
                (t[1] = e[1]),
                (t[2] = e[2]),
                (t[3] = e[3]),
                (t[4] = e[4]),
                (t[5] = e[5]),
                (t[6] = e[6]),
                (t[7] = e[7]),
                (t[8] = e[8]),
                t)
              : [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]];
          }),
          (E.getElementIndex = function(e, t) {
            return 3 * e + t;
          }),
          (E.getColumn = function(e, t, n) {
            var r = 3 * t,
              i = e[r],
              a = e[r + 1],
              o = e[r + 2];
            return (n.x = i), (n.y = a), (n.z = o), n;
          }),
          (E.setColumn = function(e, t, n, r) {
            r = E.clone(e, r);
            var i = 3 * t;
            return (r[i] = n.x), (r[i + 1] = n.y), (r[i + 2] = n.z), r;
          }),
          (E.getRow = function(e, t, n) {
            var r = e[t],
              i = e[t + 3],
              a = e[t + 6];
            return (n.x = r), (n.y = i), (n.z = a), n;
          }),
          (E.setRow = function(e, t, n, r) {
            return (
              (r = E.clone(e, r)),
              (r[t] = n.x),
              (r[t + 3] = n.y),
              (r[t + 6] = n.z),
              r
            );
          });
        var l = new e();
        E.getScale = function(t, n) {
          return (
            (n.x = e.magnitude(e.fromElements(t[0], t[1], t[2], l))),
            (n.y = e.magnitude(e.fromElements(t[3], t[4], t[5], l))),
            (n.z = e.magnitude(e.fromElements(t[6], t[7], t[8], l))),
            n
          );
        };
        var T = new e();
        (E.getMaximumScale = function(t) {
          return E.getScale(t, T), e.maximumComponent(T);
        }),
          (E.multiply = function(e, t, n) {
            var r = e[0] * t[0] + e[3] * t[1] + e[6] * t[2],
              i = e[1] * t[0] + e[4] * t[1] + e[7] * t[2],
              a = e[2] * t[0] + e[5] * t[1] + e[8] * t[2],
              o = e[0] * t[3] + e[3] * t[4] + e[6] * t[5],
              u = e[1] * t[3] + e[4] * t[4] + e[7] * t[5],
              E = e[2] * t[3] + e[5] * t[4] + e[8] * t[5],
              s = e[0] * t[6] + e[3] * t[7] + e[6] * t[8],
              c = e[1] * t[6] + e[4] * t[7] + e[7] * t[8],
              _ = e[2] * t[6] + e[5] * t[7] + e[8] * t[8];
            return (
              (n[0] = r),
              (n[1] = i),
              (n[2] = a),
              (n[3] = o),
              (n[4] = u),
              (n[5] = E),
              (n[6] = s),
              (n[7] = c),
              (n[8] = _),
              n
            );
          }),
          (E.add = function(e, t, n) {
            return (
              (n[0] = e[0] + t[0]),
              (n[1] = e[1] + t[1]),
              (n[2] = e[2] + t[2]),
              (n[3] = e[3] + t[3]),
              (n[4] = e[4] + t[4]),
              (n[5] = e[5] + t[5]),
              (n[6] = e[6] + t[6]),
              (n[7] = e[7] + t[7]),
              (n[8] = e[8] + t[8]),
              n
            );
          }),
          (E.subtract = function(e, t, n) {
            return (
              (n[0] = e[0] - t[0]),
              (n[1] = e[1] - t[1]),
              (n[2] = e[2] - t[2]),
              (n[3] = e[3] - t[3]),
              (n[4] = e[4] - t[4]),
              (n[5] = e[5] - t[5]),
              (n[6] = e[6] - t[6]),
              (n[7] = e[7] - t[7]),
              (n[8] = e[8] - t[8]),
              n
            );
          }),
          (E.multiplyByVector = function(e, t, n) {
            var r = t.x,
              i = t.y,
              a = t.z,
              o = e[0] * r + e[3] * i + e[6] * a,
              u = e[1] * r + e[4] * i + e[7] * a,
              E = e[2] * r + e[5] * i + e[8] * a;
            return (n.x = o), (n.y = u), (n.z = E), n;
          }),
          (E.multiplyByScalar = function(e, t, n) {
            return (
              (n[0] = e[0] * t),
              (n[1] = e[1] * t),
              (n[2] = e[2] * t),
              (n[3] = e[3] * t),
              (n[4] = e[4] * t),
              (n[5] = e[5] * t),
              (n[6] = e[6] * t),
              (n[7] = e[7] * t),
              (n[8] = e[8] * t),
              n
            );
          }),
          (E.multiplyByScale = function(e, t, n) {
            return (
              (n[0] = e[0] * t.x),
              (n[1] = e[1] * t.x),
              (n[2] = e[2] * t.x),
              (n[3] = e[3] * t.y),
              (n[4] = e[4] * t.y),
              (n[5] = e[5] * t.y),
              (n[6] = e[6] * t.z),
              (n[7] = e[7] * t.z),
              (n[8] = e[8] * t.z),
              n
            );
          }),
          (E.negate = function(e, t) {
            return (
              (t[0] = -e[0]),
              (t[1] = -e[1]),
              (t[2] = -e[2]),
              (t[3] = -e[3]),
              (t[4] = -e[4]),
              (t[5] = -e[5]),
              (t[6] = -e[6]),
              (t[7] = -e[7]),
              (t[8] = -e[8]),
              t
            );
          }),
          (E.transpose = function(e, t) {
            var n = e[0],
              r = e[3],
              i = e[6],
              a = e[1],
              o = e[4],
              u = e[7],
              E = e[2],
              s = e[5],
              c = e[8];
            return (
              (t[0] = n),
              (t[1] = r),
              (t[2] = i),
              (t[3] = a),
              (t[4] = o),
              (t[5] = u),
              (t[6] = E),
              (t[7] = s),
              (t[8] = c),
              t
            );
          });
        var R = [1, 0, 0],
          f = [2, 2, 1],
          h = new E(),
          A = new E();
        return (
          (E.computeEigenDecomposition = function(e, t) {
            var n = u.EPSILON20,
              i = 10,
              a = 0,
              o = 0;
            r(t) || (t = {});
            for (
              var l = (t.unitary = E.clone(E.IDENTITY, t.unitary)),
                T = (t.diagonal = E.clone(e, t.diagonal)),
                R = n * s(T);
              o < i && c(T) > R;

            )
              _(T, h),
                E.transpose(h, A),
                E.multiply(T, h, T),
                E.multiply(A, T, T),
                E.multiply(l, h, l),
                ++a > 2 && (++o, (a = 0));
            return t;
          }),
          (E.abs = function(e, t) {
            return (
              (t[0] = Math.abs(e[0])),
              (t[1] = Math.abs(e[1])),
              (t[2] = Math.abs(e[2])),
              (t[3] = Math.abs(e[3])),
              (t[4] = Math.abs(e[4])),
              (t[5] = Math.abs(e[5])),
              (t[6] = Math.abs(e[6])),
              (t[7] = Math.abs(e[7])),
              (t[8] = Math.abs(e[8])),
              t
            );
          }),
          (E.determinant = function(e) {
            var t = e[0],
              n = e[3],
              r = e[6],
              i = e[1],
              a = e[4],
              o = e[7],
              u = e[2],
              E = e[5],
              s = e[8];
            return (
              t * (a * s - E * o) + i * (E * r - n * s) + u * (n * o - a * r)
            );
          }),
          (E.inverse = function(e, t) {
            var n = e[0],
              r = e[1],
              i = e[2],
              a = e[3],
              o = e[4],
              u = e[5],
              s = e[6],
              c = e[7],
              _ = e[8],
              l = E.determinant(e);
            (t[0] = o * _ - c * u),
              (t[1] = c * i - r * _),
              (t[2] = r * u - o * i),
              (t[3] = s * u - a * _),
              (t[4] = n * _ - s * i),
              (t[5] = a * i - n * u),
              (t[6] = a * c - s * o),
              (t[7] = s * r - n * c),
              (t[8] = n * o - a * r);
            var T = 1 / l;
            return E.multiplyByScalar(t, T, t);
          }),
          (E.equals = function(e, t) {
            return (
              e === t ||
              (r(e) &&
                r(t) &&
                e[0] === t[0] &&
                e[1] === t[1] &&
                e[2] === t[2] &&
                e[3] === t[3] &&
                e[4] === t[4] &&
                e[5] === t[5] &&
                e[6] === t[6] &&
                e[7] === t[7] &&
                e[8] === t[8])
            );
          }),
          (E.equalsEpsilon = function(e, t, n) {
            return (
              e === t ||
              (r(e) &&
                r(t) &&
                Math.abs(e[0] - t[0]) <= n &&
                Math.abs(e[1] - t[1]) <= n &&
                Math.abs(e[2] - t[2]) <= n &&
                Math.abs(e[3] - t[3]) <= n &&
                Math.abs(e[4] - t[4]) <= n &&
                Math.abs(e[5] - t[5]) <= n &&
                Math.abs(e[6] - t[6]) <= n &&
                Math.abs(e[7] - t[7]) <= n &&
                Math.abs(e[8] - t[8]) <= n)
            );
          }),
          (E.IDENTITY = o(new E(1, 0, 0, 0, 1, 0, 0, 0, 1))),
          (E.ZERO = o(new E(0, 0, 0, 0, 0, 0, 0, 0, 0))),
          (E.COLUMN0ROW0 = 0),
          (E.COLUMN0ROW1 = 1),
          (E.COLUMN0ROW2 = 2),
          (E.COLUMN1ROW0 = 3),
          (E.COLUMN1ROW1 = 4),
          (E.COLUMN1ROW2 = 5),
          (E.COLUMN2ROW0 = 6),
          (E.COLUMN2ROW1 = 7),
          (E.COLUMN2ROW2 = 8),
          i(E.prototype, {
            length: {
              get: function() {
                return E.packedLength;
              }
            }
          }),
          (E.prototype.clone = function(e) {
            return E.clone(this, e);
          }),
          (E.prototype.equals = function(e) {
            return E.equals(this, e);
          }),
          (E.equalsArray = function(e, t, n) {
            return (
              e[0] === t[n] &&
              e[1] === t[n + 1] &&
              e[2] === t[n + 2] &&
              e[3] === t[n + 3] &&
              e[4] === t[n + 4] &&
              e[5] === t[n + 5] &&
              e[6] === t[n + 6] &&
              e[7] === t[n + 7] &&
              e[8] === t[n + 8]
            );
          }),
          (E.prototype.equalsEpsilon = function(e, t) {
            return E.equalsEpsilon(this, e, t);
          }),
          (E.prototype.toString = function() {
            return (
              "(" +
              this[0] +
              ", " +
              this[3] +
              ", " +
              this[6] +
              ")\n(" +
              this[1] +
              ", " +
              this[4] +
              ", " +
              this[7] +
              ")\n(" +
              this[2] +
              ", " +
              this[5] +
              ", " +
              this[8] +
              ")"
            );
          }),
          E
        );
      }
    ),
    define(
      "Core/Cartesian4",
      [
        "./Check",
        "./defaultValue",
        "./defined",
        "./DeveloperError",
        "./freezeObject",
        "./Math"
      ],
      function(e, t, n, r, i, a) {
        "use strict";
        function o(e, n, r, i) {
          (this.x = t(e, 0)),
            (this.y = t(n, 0)),
            (this.z = t(r, 0)),
            (this.w = t(i, 0));
        }
        (o.fromElements = function(e, t, r, i, a) {
          return n(a)
            ? ((a.x = e), (a.y = t), (a.z = r), (a.w = i), a)
            : new o(e, t, r, i);
        }),
          (o.fromColor = function(e, t) {
            return n(t)
              ? ((t.x = e.red),
                (t.y = e.green),
                (t.z = e.blue),
                (t.w = e.alpha),
                t)
              : new o(e.red, e.green, e.blue, e.alpha);
          }),
          (o.clone = function(e, t) {
            if (n(e))
              return n(t)
                ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t)
                : new o(e.x, e.y, e.z, e.w);
          }),
          (o.packedLength = 4),
          (o.pack = function(e, n, r) {
            return (
              (r = t(r, 0)),
              (n[r++] = e.x),
              (n[r++] = e.y),
              (n[r++] = e.z),
              (n[r] = e.w),
              n
            );
          }),
          (o.unpack = function(e, r, i) {
            return (
              (r = t(r, 0)),
              n(i) || (i = new o()),
              (i.x = e[r++]),
              (i.y = e[r++]),
              (i.z = e[r++]),
              (i.w = e[r]),
              i
            );
          }),
          (o.packArray = function(e, t) {
            var r = e.length;
            n(t) ? (t.length = 4 * r) : (t = new Array(4 * r));
            for (var i = 0; i < r; ++i) o.pack(e[i], t, 4 * i);
            return t;
          }),
          (o.unpackArray = function(e, t) {
            var r = e.length;
            n(t) ? (t.length = r / 4) : (t = new Array(r / 4));
            for (var i = 0; i < r; i += 4) {
              var a = i / 4;
              t[a] = o.unpack(e, i, t[a]);
            }
            return t;
          }),
          (o.fromArray = o.unpack),
          (o.maximumComponent = function(e) {
            return Math.max(e.x, e.y, e.z, e.w);
          }),
          (o.minimumComponent = function(e) {
            return Math.min(e.x, e.y, e.z, e.w);
          }),
          (o.minimumByComponent = function(e, t, n) {
            return (
              (n.x = Math.min(e.x, t.x)),
              (n.y = Math.min(e.y, t.y)),
              (n.z = Math.min(e.z, t.z)),
              (n.w = Math.min(e.w, t.w)),
              n
            );
          }),
          (o.maximumByComponent = function(e, t, n) {
            return (
              (n.x = Math.max(e.x, t.x)),
              (n.y = Math.max(e.y, t.y)),
              (n.z = Math.max(e.z, t.z)),
              (n.w = Math.max(e.w, t.w)),
              n
            );
          }),
          (o.magnitudeSquared = function(e) {
            return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w;
          }),
          (o.magnitude = function(e) {
            return Math.sqrt(o.magnitudeSquared(e));
          });
        var u = new o();
        (o.distance = function(e, t) {
          return o.subtract(e, t, u), o.magnitude(u);
        }),
          (o.distanceSquared = function(e, t) {
            return o.subtract(e, t, u), o.magnitudeSquared(u);
          }),
          (o.normalize = function(e, t) {
            var n = o.magnitude(e);
            return (
              (t.x = e.x / n),
              (t.y = e.y / n),
              (t.z = e.z / n),
              (t.w = e.w / n),
              t
            );
          }),
          (o.dot = function(e, t) {
            return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
          }),
          (o.multiplyComponents = function(e, t, n) {
            return (
              (n.x = e.x * t.x),
              (n.y = e.y * t.y),
              (n.z = e.z * t.z),
              (n.w = e.w * t.w),
              n
            );
          }),
          (o.divideComponents = function(e, t, n) {
            return (
              (n.x = e.x / t.x),
              (n.y = e.y / t.y),
              (n.z = e.z / t.z),
              (n.w = e.w / t.w),
              n
            );
          }),
          (o.add = function(e, t, n) {
            return (
              (n.x = e.x + t.x),
              (n.y = e.y + t.y),
              (n.z = e.z + t.z),
              (n.w = e.w + t.w),
              n
            );
          }),
          (o.subtract = function(e, t, n) {
            return (
              (n.x = e.x - t.x),
              (n.y = e.y - t.y),
              (n.z = e.z - t.z),
              (n.w = e.w - t.w),
              n
            );
          }),
          (o.multiplyByScalar = function(e, t, n) {
            return (
              (n.x = e.x * t),
              (n.y = e.y * t),
              (n.z = e.z * t),
              (n.w = e.w * t),
              n
            );
          }),
          (o.divideByScalar = function(e, t, n) {
            return (
              (n.x = e.x / t),
              (n.y = e.y / t),
              (n.z = e.z / t),
              (n.w = e.w / t),
              n
            );
          }),
          (o.negate = function(e, t) {
            return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = -e.w), t;
          }),
          (o.abs = function(e, t) {
            return (
              (t.x = Math.abs(e.x)),
              (t.y = Math.abs(e.y)),
              (t.z = Math.abs(e.z)),
              (t.w = Math.abs(e.w)),
              t
            );
          });
        var E = new o();
        o.lerp = function(e, t, n, r) {
          return (
            o.multiplyByScalar(t, n, E),
            (r = o.multiplyByScalar(e, 1 - n, r)),
            o.add(E, r, r)
          );
        };
        var s = new o();
        return (
          (o.mostOrthogonalAxis = function(e, t) {
            var n = o.normalize(e, s);
            return (
              o.abs(n, n),
              (t =
                n.x <= n.y
                  ? n.x <= n.z
                    ? n.x <= n.w ? o.clone(o.UNIT_X, t) : o.clone(o.UNIT_W, t)
                    : n.z <= n.w ? o.clone(o.UNIT_Z, t) : o.clone(o.UNIT_W, t)
                  : n.y <= n.z
                    ? n.y <= n.w ? o.clone(o.UNIT_Y, t) : o.clone(o.UNIT_W, t)
                    : n.z <= n.w ? o.clone(o.UNIT_Z, t) : o.clone(o.UNIT_W, t))
            );
          }),
          (o.equals = function(e, t) {
            return (
              e === t ||
              (n(e) &&
                n(t) &&
                e.x === t.x &&
                e.y === t.y &&
                e.z === t.z &&
                e.w === t.w)
            );
          }),
          (o.equalsArray = function(e, t, n) {
            return (
              e.x === t[n] &&
              e.y === t[n + 1] &&
              e.z === t[n + 2] &&
              e.w === t[n + 3]
            );
          }),
          (o.equalsEpsilon = function(e, t, r, i) {
            return (
              e === t ||
              (n(e) &&
                n(t) &&
                a.equalsEpsilon(e.x, t.x, r, i) &&
                a.equalsEpsilon(e.y, t.y, r, i) &&
                a.equalsEpsilon(e.z, t.z, r, i) &&
                a.equalsEpsilon(e.w, t.w, r, i))
            );
          }),
          (o.ZERO = i(new o(0, 0, 0, 0))),
          (o.UNIT_X = i(new o(1, 0, 0, 0))),
          (o.UNIT_Y = i(new o(0, 1, 0, 0))),
          (o.UNIT_Z = i(new o(0, 0, 1, 0))),
          (o.UNIT_W = i(new o(0, 0, 0, 1))),
          (o.prototype.clone = function(e) {
            return o.clone(this, e);
          }),
          (o.prototype.equals = function(e) {
            return o.equals(this, e);
          }),
          (o.prototype.equalsEpsilon = function(e, t, n) {
            return o.equalsEpsilon(this, e, t, n);
          }),
          (o.prototype.toString = function() {
            return (
              "(" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")"
            );
          }),
          o
        );
      }
    ),
    define("Core/RuntimeError", ["./defined"], function(e) {
      "use strict";
      function t(e) {
        (this.name = "RuntimeError"), (this.message = e);
        var t;
        try {
          throw new Error();
        } catch (e) {
          t = e.stack;
        }
        this.stack = t;
      }
      return (
        e(Object.create) &&
          ((t.prototype = Object.create(Error.prototype)),
          (t.prototype.constructor = t)),
        (t.prototype.toString = function() {
          var t = this.name + ": " + this.message;
          return e(this.stack) && (t += "\n" + this.stack.toString()), t;
        }),
        t
      );
    }),
    define(
      "Core/Matrix4",
      [
        "./Cartesian3",
        "./Cartesian4",
        "./Check",
        "./defaultValue",
        "./defined",
        "./defineProperties",
        "./freezeObject",
        "./Math",
        "./Matrix3",
        "./RuntimeError"
      ],
      function(e, t, n, r, i, a, o, u, E, s) {
        "use strict";
        function c(e, t, n, i, a, o, u, E, s, c, _, l, T, R, f, h) {
          (this[0] = r(e, 0)),
            (this[1] = r(a, 0)),
            (this[2] = r(s, 0)),
            (this[3] = r(T, 0)),
            (this[4] = r(t, 0)),
            (this[5] = r(o, 0)),
            (this[6] = r(c, 0)),
            (this[7] = r(R, 0)),
            (this[8] = r(n, 0)),
            (this[9] = r(u, 0)),
            (this[10] = r(_, 0)),
            (this[11] = r(f, 0)),
            (this[12] = r(i, 0)),
            (this[13] = r(E, 0)),
            (this[14] = r(l, 0)),
            (this[15] = r(h, 0));
        }
        (c.packedLength = 16),
          (c.pack = function(e, t, n) {
            return (
              (n = r(n, 0)),
              (t[n++] = e[0]),
              (t[n++] = e[1]),
              (t[n++] = e[2]),
              (t[n++] = e[3]),
              (t[n++] = e[4]),
              (t[n++] = e[5]),
              (t[n++] = e[6]),
              (t[n++] = e[7]),
              (t[n++] = e[8]),
              (t[n++] = e[9]),
              (t[n++] = e[10]),
              (t[n++] = e[11]),
              (t[n++] = e[12]),
              (t[n++] = e[13]),
              (t[n++] = e[14]),
              (t[n] = e[15]),
              t
            );
          }),
          (c.unpack = function(e, t, n) {
            return (
              (t = r(t, 0)),
              i(n) || (n = new c()),
              (n[0] = e[t++]),
              (n[1] = e[t++]),
              (n[2] = e[t++]),
              (n[3] = e[t++]),
              (n[4] = e[t++]),
              (n[5] = e[t++]),
              (n[6] = e[t++]),
              (n[7] = e[t++]),
              (n[8] = e[t++]),
              (n[9] = e[t++]),
              (n[10] = e[t++]),
              (n[11] = e[t++]),
              (n[12] = e[t++]),
              (n[13] = e[t++]),
              (n[14] = e[t++]),
              (n[15] = e[t]),
              n
            );
          }),
          (c.clone = function(e, t) {
            if (i(e))
              return i(t)
                ? ((t[0] = e[0]),
                  (t[1] = e[1]),
                  (t[2] = e[2]),
                  (t[3] = e[3]),
                  (t[4] = e[4]),
                  (t[5] = e[5]),
                  (t[6] = e[6]),
                  (t[7] = e[7]),
                  (t[8] = e[8]),
                  (t[9] = e[9]),
                  (t[10] = e[10]),
                  (t[11] = e[11]),
                  (t[12] = e[12]),
                  (t[13] = e[13]),
                  (t[14] = e[14]),
                  (t[15] = e[15]),
                  t)
                : new c(
                    e[0],
                    e[4],
                    e[8],
                    e[12],
                    e[1],
                    e[5],
                    e[9],
                    e[13],
                    e[2],
                    e[6],
                    e[10],
                    e[14],
                    e[3],
                    e[7],
                    e[11],
                    e[15]
                  );
          }),
          (c.fromArray = c.unpack),
          (c.fromColumnMajorArray = function(e, t) {
            return c.clone(e, t);
          }),
          (c.fromRowMajorArray = function(e, t) {
            return i(t)
              ? ((t[0] = e[0]),
                (t[1] = e[4]),
                (t[2] = e[8]),
                (t[3] = e[12]),
                (t[4] = e[1]),
                (t[5] = e[5]),
                (t[6] = e[9]),
                (t[7] = e[13]),
                (t[8] = e[2]),
                (t[9] = e[6]),
                (t[10] = e[10]),
                (t[11] = e[14]),
                (t[12] = e[3]),
                (t[13] = e[7]),
                (t[14] = e[11]),
                (t[15] = e[15]),
                t)
              : new c(
                  e[0],
                  e[1],
                  e[2],
                  e[3],
                  e[4],
                  e[5],
                  e[6],
                  e[7],
                  e[8],
                  e[9],
                  e[10],
                  e[11],
                  e[12],
                  e[13],
                  e[14],
                  e[15]
                );
          }),
          (c.fromRotationTranslation = function(t, n, a) {
            return (
              (n = r(n, e.ZERO)),
              i(a)
                ? ((a[0] = t[0]),
                  (a[1] = t[1]),
                  (a[2] = t[2]),
                  (a[3] = 0),
                  (a[4] = t[3]),
                  (a[5] = t[4]),
                  (a[6] = t[5]),
                  (a[7] = 0),
                  (a[8] = t[6]),
                  (a[9] = t[7]),
                  (a[10] = t[8]),
                  (a[11] = 0),
                  (a[12] = n.x),
                  (a[13] = n.y),
                  (a[14] = n.z),
                  (a[15] = 1),
                  a)
                : new c(
                    t[0],
                    t[3],
                    t[6],
                    n.x,
                    t[1],
                    t[4],
                    t[7],
                    n.y,
                    t[2],
                    t[5],
                    t[8],
                    n.z,
                    0,
                    0,
                    0,
                    1
                  )
            );
          }),
          (c.fromTranslationQuaternionRotationScale = function(e, t, n, r) {
            i(r) || (r = new c());
            var a = n.x,
              o = n.y,
              u = n.z,
              E = t.x * t.x,
              s = t.x * t.y,
              _ = t.x * t.z,
              l = t.x * t.w,
              T = t.y * t.y,
              R = t.y * t.z,
              f = t.y * t.w,
              h = t.z * t.z,
              A = t.z * t.w,
              d = t.w * t.w,
              N = E - T - h + d,
              I = 2 * (s - A),
              S = 2 * (_ + f),
              M = 2 * (s + A),
              y = -E + T - h + d,
              m = 2 * (R - l),
              O = 2 * (_ - f),
              p = 2 * (R + l),
              C = -E - T + h + d;
            return (
              (r[0] = N * a),
              (r[1] = M * a),
              (r[2] = O * a),
              (r[3] = 0),
              (r[4] = I * o),
              (r[5] = y * o),
              (r[6] = p * o),
              (r[7] = 0),
              (r[8] = S * u),
              (r[9] = m * u),
              (r[10] = C * u),
              (r[11] = 0),
              (r[12] = e.x),
              (r[13] = e.y),
              (r[14] = e.z),
              (r[15] = 1),
              r
            );
          }),
          (c.fromTranslationRotationScale = function(e, t) {
            return c.fromTranslationQuaternionRotationScale(
              e.translation,
              e.rotation,
              e.scale,
              t
            );
          }),
          (c.fromTranslation = function(e, t) {
            return c.fromRotationTranslation(E.IDENTITY, e, t);
          }),
          (c.fromScale = function(e, t) {
            return i(t)
              ? ((t[0] = e.x),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 0),
                (t[4] = 0),
                (t[5] = e.y),
                (t[6] = 0),
                (t[7] = 0),
                (t[8] = 0),
                (t[9] = 0),
                (t[10] = e.z),
                (t[11] = 0),
                (t[12] = 0),
                (t[13] = 0),
                (t[14] = 0),
                (t[15] = 1),
                t)
              : new c(e.x, 0, 0, 0, 0, e.y, 0, 0, 0, 0, e.z, 0, 0, 0, 0, 1);
          }),
          (c.fromUniformScale = function(e, t) {
            return i(t)
              ? ((t[0] = e),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 0),
                (t[4] = 0),
                (t[5] = e),
                (t[6] = 0),
                (t[7] = 0),
                (t[8] = 0),
                (t[9] = 0),
                (t[10] = e),
                (t[11] = 0),
                (t[12] = 0),
                (t[13] = 0),
                (t[14] = 0),
                (t[15] = 1),
                t)
              : new c(e, 0, 0, 0, 0, e, 0, 0, 0, 0, e, 0, 0, 0, 0, 1);
          });
        var _ = new e(),
          l = new e(),
          T = new e();
        (c.fromCamera = function(t, n) {
          var r = t.position,
            a = t.direction,
            o = t.up;
          e.normalize(a, _),
            e.normalize(e.cross(_, o, l), l),
            e.normalize(e.cross(l, _, T), T);
          var u = l.x,
            E = l.y,
            s = l.z,
            R = _.x,
            f = _.y,
            h = _.z,
            A = T.x,
            d = T.y,
            N = T.z,
            I = r.x,
            S = r.y,
            M = r.z,
            y = u * -I + E * -S + s * -M,
            m = A * -I + d * -S + N * -M,
            O = R * I + f * S + h * M;
          return i(n)
            ? ((n[0] = u),
              (n[1] = A),
              (n[2] = -R),
              (n[3] = 0),
              (n[4] = E),
              (n[5] = d),
              (n[6] = -f),
              (n[7] = 0),
              (n[8] = s),
              (n[9] = N),
              (n[10] = -h),
              (n[11] = 0),
              (n[12] = y),
              (n[13] = m),
              (n[14] = O),
              (n[15] = 1),
              n)
            : new c(u, E, s, y, A, d, N, m, -R, -f, -h, O, 0, 0, 0, 1);
        }),
          (c.computePerspectiveFieldOfView = function(e, t, n, r, i) {
            var a = Math.tan(0.5 * e),
              o = 1 / a,
              u = o / t,
              E = (r + n) / (n - r),
              s = 2 * r * n / (n - r);
            return (
              (i[0] = u),
              (i[1] = 0),
              (i[2] = 0),
              (i[3] = 0),
              (i[4] = 0),
              (i[5] = o),
              (i[6] = 0),
              (i[7] = 0),
              (i[8] = 0),
              (i[9] = 0),
              (i[10] = E),
              (i[11] = -1),
              (i[12] = 0),
              (i[13] = 0),
              (i[14] = s),
              (i[15] = 0),
              i
            );
          }),
          (c.computeOrthographicOffCenter = function(e, t, n, r, i, a, o) {
            var u = 1 / (t - e),
              E = 1 / (r - n),
              s = 1 / (a - i),
              c = -(t + e) * u,
              _ = -(r + n) * E,
              l = -(a + i) * s;
            return (
              (u *= 2),
              (E *= 2),
              (s *= -2),
              (o[0] = u),
              (o[1] = 0),
              (o[2] = 0),
              (o[3] = 0),
              (o[4] = 0),
              (o[5] = E),
              (o[6] = 0),
              (o[7] = 0),
              (o[8] = 0),
              (o[9] = 0),
              (o[10] = s),
              (o[11] = 0),
              (o[12] = c),
              (o[13] = _),
              (o[14] = l),
              (o[15] = 1),
              o
            );
          }),
          (c.computePerspectiveOffCenter = function(e, t, n, r, i, a, o) {
            var u = 2 * i / (t - e),
              E = 2 * i / (r - n),
              s = (t + e) / (t - e),
              c = (r + n) / (r - n),
              _ = -(a + i) / (a - i),
              l = -1,
              T = -2 * a * i / (a - i);
            return (
              (o[0] = u),
              (o[1] = 0),
              (o[2] = 0),
              (o[3] = 0),
              (o[4] = 0),
              (o[5] = E),
              (o[6] = 0),
              (o[7] = 0),
              (o[8] = s),
              (o[9] = c),
              (o[10] = _),
              (o[11] = l),
              (o[12] = 0),
              (o[13] = 0),
              (o[14] = T),
              (o[15] = 0),
              o
            );
          }),
          (c.computeInfinitePerspectiveOffCenter = function(e, t, n, r, i, a) {
            var o = 2 * i / (t - e),
              u = 2 * i / (r - n),
              E = (t + e) / (t - e),
              s = (r + n) / (r - n),
              c = -1,
              _ = -1,
              l = -2 * i;
            return (
              (a[0] = o),
              (a[1] = 0),
              (a[2] = 0),
              (a[3] = 0),
              (a[4] = 0),
              (a[5] = u),
              (a[6] = 0),
              (a[7] = 0),
              (a[8] = E),
              (a[9] = s),
              (a[10] = c),
              (a[11] = _),
              (a[12] = 0),
              (a[13] = 0),
              (a[14] = l),
              (a[15] = 0),
              a
            );
          }),
          (c.computeViewportTransformation = function(e, t, n, i) {
            e = r(e, r.EMPTY_OBJECT);
            var a = r(e.x, 0),
              o = r(e.y, 0),
              u = r(e.width, 0),
              E = r(e.height, 0);
            (t = r(t, 0)), (n = r(n, 1));
            var s = 0.5 * u,
              c = 0.5 * E,
              _ = 0.5 * (n - t),
              l = s,
              T = c,
              R = _,
              f = a + s,
              h = o + c,
              A = t + _,
              d = 1;
            return (
              (i[0] = l),
              (i[1] = 0),
              (i[2] = 0),
              (i[3] = 0),
              (i[4] = 0),
              (i[5] = T),
              (i[6] = 0),
              (i[7] = 0),
              (i[8] = 0),
              (i[9] = 0),
              (i[10] = R),
              (i[11] = 0),
              (i[12] = f),
              (i[13] = h),
              (i[14] = A),
              (i[15] = d),
              i
            );
          }),
          (c.computeView = function(t, n, r, i, a) {
            return (
              (a[0] = i.x),
              (a[1] = r.x),
              (a[2] = -n.x),
              (a[3] = 0),
              (a[4] = i.y),
              (a[5] = r.y),
              (a[6] = -n.y),
              (a[7] = 0),
              (a[8] = i.z),
              (a[9] = r.z),
              (a[10] = -n.z),
              (a[11] = 0),
              (a[12] = -e.dot(i, t)),
              (a[13] = -e.dot(r, t)),
              (a[14] = e.dot(n, t)),
              (a[15] = 1),
              a
            );
          }),
          (c.toArray = function(e, t) {
            return i(t)
              ? ((t[0] = e[0]),
                (t[1] = e[1]),
                (t[2] = e[2]),
                (t[3] = e[3]),
                (t[4] = e[4]),
                (t[5] = e[5]),
                (t[6] = e[6]),
                (t[7] = e[7]),
                (t[8] = e[8]),
                (t[9] = e[9]),
                (t[10] = e[10]),
                (t[11] = e[11]),
                (t[12] = e[12]),
                (t[13] = e[13]),
                (t[14] = e[14]),
                (t[15] = e[15]),
                t)
              : [
                  e[0],
                  e[1],
                  e[2],
                  e[3],
                  e[4],
                  e[5],
                  e[6],
                  e[7],
                  e[8],
                  e[9],
                  e[10],
                  e[11],
                  e[12],
                  e[13],
                  e[14],
                  e[15]
                ];
          }),
          (c.getElementIndex = function(e, t) {
            return 4 * e + t;
          }),
          (c.getColumn = function(e, t, n) {
            var r = 4 * t,
              i = e[r],
              a = e[r + 1],
              o = e[r + 2],
              u = e[r + 3];
            return (n.x = i), (n.y = a), (n.z = o), (n.w = u), n;
          }),
          (c.setColumn = function(e, t, n, r) {
            r = c.clone(e, r);
            var i = 4 * t;
            return (
              (r[i] = n.x),
              (r[i + 1] = n.y),
              (r[i + 2] = n.z),
              (r[i + 3] = n.w),
              r
            );
          }),
          (c.setTranslation = function(e, t, n) {
            return (
              (n[0] = e[0]),
              (n[1] = e[1]),
              (n[2] = e[2]),
              (n[3] = e[3]),
              (n[4] = e[4]),
              (n[5] = e[5]),
              (n[6] = e[6]),
              (n[7] = e[7]),
              (n[8] = e[8]),
              (n[9] = e[9]),
              (n[10] = e[10]),
              (n[11] = e[11]),
              (n[12] = t.x),
              (n[13] = t.y),
              (n[14] = t.z),
              (n[15] = e[15]),
              n
            );
          }),
          (c.getRow = function(e, t, n) {
            var r = e[t],
              i = e[t + 4],
              a = e[t + 8],
              o = e[t + 12];
            return (n.x = r), (n.y = i), (n.z = a), (n.w = o), n;
          }),
          (c.setRow = function(e, t, n, r) {
            return (
              (r = c.clone(e, r)),
              (r[t] = n.x),
              (r[t + 4] = n.y),
              (r[t + 8] = n.z),
              (r[t + 12] = n.w),
              r
            );
          });
        var R = new e();
        c.getScale = function(t, n) {
          return (
            (n.x = e.magnitude(e.fromElements(t[0], t[1], t[2], R))),
            (n.y = e.magnitude(e.fromElements(t[4], t[5], t[6], R))),
            (n.z = e.magnitude(e.fromElements(t[8], t[9], t[10], R))),
            n
          );
        };
        var f = new e();
        (c.getMaximumScale = function(t) {
          return c.getScale(t, f), e.maximumComponent(f);
        }),
          (c.multiply = function(e, t, n) {
            var r = e[0],
              i = e[1],
              a = e[2],
              o = e[3],
              u = e[4],
              E = e[5],
              s = e[6],
              c = e[7],
              _ = e[8],
              l = e[9],
              T = e[10],
              R = e[11],
              f = e[12],
              h = e[13],
              A = e[14],
              d = e[15],
              N = t[0],
              I = t[1],
              S = t[2],
              M = t[3],
              y = t[4],
              m = t[5],
              O = t[6],
              p = t[7],
              C = t[8],
              U = t[9],
              g = t[10],
              w = t[11],
              L = t[12],
              x = t[13],
              P = t[14],
              v = t[15],
              F = r * N + u * I + _ * S + f * M,
              B = i * N + E * I + l * S + h * M,
              D = a * N + s * I + T * S + A * M,
              z = o * N + c * I + R * S + d * M,
              G = r * y + u * m + _ * O + f * p,
              b = i * y + E * m + l * O + h * p,
              X = a * y + s * m + T * O + A * p,
              V = o * y + c * m + R * O + d * p,
              q = r * C + u * U + _ * g + f * w,
              H = i * C + E * U + l * g + h * w,
              W = a * C + s * U + T * g + A * w,
              Y = o * C + c * U + R * g + d * w,
              k = r * L + u * x + _ * P + f * v,
              K = i * L + E * x + l * P + h * v,
              Z = a * L + s * x + T * P + A * v,
              j = o * L + c * x + R * P + d * v;
            return (
              (n[0] = F),
              (n[1] = B),
              (n[2] = D),
              (n[3] = z),
              (n[4] = G),
              (n[5] = b),
              (n[6] = X),
              (n[7] = V),
              (n[8] = q),
              (n[9] = H),
              (n[10] = W),
              (n[11] = Y),
              (n[12] = k),
              (n[13] = K),
              (n[14] = Z),
              (n[15] = j),
              n
            );
          }),
          (c.add = function(e, t, n) {
            return (
              (n[0] = e[0] + t[0]),
              (n[1] = e[1] + t[1]),
              (n[2] = e[2] + t[2]),
              (n[3] = e[3] + t[3]),
              (n[4] = e[4] + t[4]),
              (n[5] = e[5] + t[5]),
              (n[6] = e[6] + t[6]),
              (n[7] = e[7] + t[7]),
              (n[8] = e[8] + t[8]),
              (n[9] = e[9] + t[9]),
              (n[10] = e[10] + t[10]),
              (n[11] = e[11] + t[11]),
              (n[12] = e[12] + t[12]),
              (n[13] = e[13] + t[13]),
              (n[14] = e[14] + t[14]),
              (n[15] = e[15] + t[15]),
              n
            );
          }),
          (c.subtract = function(e, t, n) {
            return (
              (n[0] = e[0] - t[0]),
              (n[1] = e[1] - t[1]),
              (n[2] = e[2] - t[2]),
              (n[3] = e[3] - t[3]),
              (n[4] = e[4] - t[4]),
              (n[5] = e[5] - t[5]),
              (n[6] = e[6] - t[6]),
              (n[7] = e[7] - t[7]),
              (n[8] = e[8] - t[8]),
              (n[9] = e[9] - t[9]),
              (n[10] = e[10] - t[10]),
              (n[11] = e[11] - t[11]),
              (n[12] = e[12] - t[12]),
              (n[13] = e[13] - t[13]),
              (n[14] = e[14] - t[14]),
              (n[15] = e[15] - t[15]),
              n
            );
          }),
          (c.multiplyTransformation = function(e, t, n) {
            var r = e[0],
              i = e[1],
              a = e[2],
              o = e[4],
              u = e[5],
              E = e[6],
              s = e[8],
              c = e[9],
              _ = e[10],
              l = e[12],
              T = e[13],
              R = e[14],
              f = t[0],
              h = t[1],
              A = t[2],
              d = t[4],
              N = t[5],
              I = t[6],
              S = t[8],
              M = t[9],
              y = t[10],
              m = t[12],
              O = t[13],
              p = t[14],
              C = r * f + o * h + s * A,
              U = i * f + u * h + c * A,
              g = a * f + E * h + _ * A,
              w = r * d + o * N + s * I,
              L = i * d + u * N + c * I,
              x = a * d + E * N + _ * I,
              P = r * S + o * M + s * y,
              v = i * S + u * M + c * y,
              F = a * S + E * M + _ * y,
              B = r * m + o * O + s * p + l,
              D = i * m + u * O + c * p + T,
              z = a * m + E * O + _ * p + R;
            return (
              (n[0] = C),
              (n[1] = U),
              (n[2] = g),
              (n[3] = 0),
              (n[4] = w),
              (n[5] = L),
              (n[6] = x),
              (n[7] = 0),
              (n[8] = P),
              (n[9] = v),
              (n[10] = F),
              (n[11] = 0),
              (n[12] = B),
              (n[13] = D),
              (n[14] = z),
              (n[15] = 1),
              n
            );
          }),
          (c.multiplyByMatrix3 = function(e, t, n) {
            var r = e[0],
              i = e[1],
              a = e[2],
              o = e[4],
              u = e[5],
              E = e[6],
              s = e[8],
              c = e[9],
              _ = e[10],
              l = t[0],
              T = t[1],
              R = t[2],
              f = t[3],
              h = t[4],
              A = t[5],
              d = t[6],
              N = t[7],
              I = t[8],
              S = r * l + o * T + s * R,
              M = i * l + u * T + c * R,
              y = a * l + E * T + _ * R,
              m = r * f + o * h + s * A,
              O = i * f + u * h + c * A,
              p = a * f + E * h + _ * A,
              C = r * d + o * N + s * I,
              U = i * d + u * N + c * I,
              g = a * d + E * N + _ * I;
            return (
              (n[0] = S),
              (n[1] = M),
              (n[2] = y),
              (n[3] = 0),
              (n[4] = m),
              (n[5] = O),
              (n[6] = p),
              (n[7] = 0),
              (n[8] = C),
              (n[9] = U),
              (n[10] = g),
              (n[11] = 0),
              (n[12] = e[12]),
              (n[13] = e[13]),
              (n[14] = e[14]),
              (n[15] = e[15]),
              n
            );
          }),
          (c.multiplyByTranslation = function(e, t, n) {
            var r = t.x,
              i = t.y,
              a = t.z,
              o = r * e[0] + i * e[4] + a * e[8] + e[12],
              u = r * e[1] + i * e[5] + a * e[9] + e[13],
              E = r * e[2] + i * e[6] + a * e[10] + e[14];
            return (
              (n[0] = e[0]),
              (n[1] = e[1]),
              (n[2] = e[2]),
              (n[3] = e[3]),
              (n[4] = e[4]),
              (n[5] = e[5]),
              (n[6] = e[6]),
              (n[7] = e[7]),
              (n[8] = e[8]),
              (n[9] = e[9]),
              (n[10] = e[10]),
              (n[11] = e[11]),
              (n[12] = o),
              (n[13] = u),
              (n[14] = E),
              (n[15] = e[15]),
              n
            );
          });
        var h = new e();
        (c.multiplyByUniformScale = function(e, t, n) {
          return (h.x = t), (h.y = t), (h.z = t), c.multiplyByScale(e, h, n);
        }),
          (c.multiplyByScale = function(e, t, n) {
            var r = t.x,
              i = t.y,
              a = t.z;
            return 1 === r && 1 === i && 1 === a
              ? c.clone(e, n)
              : ((n[0] = r * e[0]),
                (n[1] = r * e[1]),
                (n[2] = r * e[2]),
                (n[3] = 0),
                (n[4] = i * e[4]),
                (n[5] = i * e[5]),
                (n[6] = i * e[6]),
                (n[7] = 0),
                (n[8] = a * e[8]),
                (n[9] = a * e[9]),
                (n[10] = a * e[10]),
                (n[11] = 0),
                (n[12] = e[12]),
                (n[13] = e[13]),
                (n[14] = e[14]),
                (n[15] = 1),
                n);
          }),
          (c.multiplyByVector = function(e, t, n) {
            var r = t.x,
              i = t.y,
              a = t.z,
              o = t.w,
              u = e[0] * r + e[4] * i + e[8] * a + e[12] * o,
              E = e[1] * r + e[5] * i + e[9] * a + e[13] * o,
              s = e[2] * r + e[6] * i + e[10] * a + e[14] * o,
              c = e[3] * r + e[7] * i + e[11] * a + e[15] * o;
            return (n.x = u), (n.y = E), (n.z = s), (n.w = c), n;
          }),
          (c.multiplyByPointAsVector = function(e, t, n) {
            var r = t.x,
              i = t.y,
              a = t.z,
              o = e[0] * r + e[4] * i + e[8] * a,
              u = e[1] * r + e[5] * i + e[9] * a,
              E = e[2] * r + e[6] * i + e[10] * a;
            return (n.x = o), (n.y = u), (n.z = E), n;
          }),
          (c.multiplyByPoint = function(e, t, n) {
            var r = t.x,
              i = t.y,
              a = t.z,
              o = e[0] * r + e[4] * i + e[8] * a + e[12],
              u = e[1] * r + e[5] * i + e[9] * a + e[13],
              E = e[2] * r + e[6] * i + e[10] * a + e[14];
            return (n.x = o), (n.y = u), (n.z = E), n;
          }),
          (c.multiplyByScalar = function(e, t, n) {
            return (
              (n[0] = e[0] * t),
              (n[1] = e[1] * t),
              (n[2] = e[2] * t),
              (n[3] = e[3] * t),
              (n[4] = e[4] * t),
              (n[5] = e[5] * t),
              (n[6] = e[6] * t),
              (n[7] = e[7] * t),
              (n[8] = e[8] * t),
              (n[9] = e[9] * t),
              (n[10] = e[10] * t),
              (n[11] = e[11] * t),
              (n[12] = e[12] * t),
              (n[13] = e[13] * t),
              (n[14] = e[14] * t),
              (n[15] = e[15] * t),
              n
            );
          }),
          (c.negate = function(e, t) {
            return (
              (t[0] = -e[0]),
              (t[1] = -e[1]),
              (t[2] = -e[2]),
              (t[3] = -e[3]),
              (t[4] = -e[4]),
              (t[5] = -e[5]),
              (t[6] = -e[6]),
              (t[7] = -e[7]),
              (t[8] = -e[8]),
              (t[9] = -e[9]),
              (t[10] = -e[10]),
              (t[11] = -e[11]),
              (t[12] = -e[12]),
              (t[13] = -e[13]),
              (t[14] = -e[14]),
              (t[15] = -e[15]),
              t
            );
          }),
          (c.transpose = function(e, t) {
            var n = e[1],
              r = e[2],
              i = e[3],
              a = e[6],
              o = e[7],
              u = e[11];
            return (
              (t[0] = e[0]),
              (t[1] = e[4]),
              (t[2] = e[8]),
              (t[3] = e[12]),
              (t[4] = n),
              (t[5] = e[5]),
              (t[6] = e[9]),
              (t[7] = e[13]),
              (t[8] = r),
              (t[9] = a),
              (t[10] = e[10]),
              (t[11] = e[14]),
              (t[12] = i),
              (t[13] = o),
              (t[14] = u),
              (t[15] = e[15]),
              t
            );
          }),
          (c.abs = function(e, t) {
            return (
              (t[0] = Math.abs(e[0])),
              (t[1] = Math.abs(e[1])),
              (t[2] = Math.abs(e[2])),
              (t[3] = Math.abs(e[3])),
              (t[4] = Math.abs(e[4])),
              (t[5] = Math.abs(e[5])),
              (t[6] = Math.abs(e[6])),
              (t[7] = Math.abs(e[7])),
              (t[8] = Math.abs(e[8])),
              (t[9] = Math.abs(e[9])),
              (t[10] = Math.abs(e[10])),
              (t[11] = Math.abs(e[11])),
              (t[12] = Math.abs(e[12])),
              (t[13] = Math.abs(e[13])),
              (t[14] = Math.abs(e[14])),
              (t[15] = Math.abs(e[15])),
              t
            );
          }),
          (c.equals = function(e, t) {
            return (
              e === t ||
              (i(e) &&
                i(t) &&
                e[12] === t[12] &&
                e[13] === t[13] &&
                e[14] === t[14] &&
                e[0] === t[0] &&
                e[1] === t[1] &&
                e[2] === t[2] &&
                e[4] === t[4] &&
                e[5] === t[5] &&
                e[6] === t[6] &&
                e[8] === t[8] &&
                e[9] === t[9] &&
                e[10] === t[10] &&
                e[3] === t[3] &&
                e[7] === t[7] &&
                e[11] === t[11] &&
                e[15] === t[15])
            );
          }),
          (c.equalsEpsilon = function(e, t, n) {
            return (
              e === t ||
              (i(e) &&
                i(t) &&
                Math.abs(e[0] - t[0]) <= n &&
                Math.abs(e[1] - t[1]) <= n &&
                Math.abs(e[2] - t[2]) <= n &&
                Math.abs(e[3] - t[3]) <= n &&
                Math.abs(e[4] - t[4]) <= n &&
                Math.abs(e[5] - t[5]) <= n &&
                Math.abs(e[6] - t[6]) <= n &&
                Math.abs(e[7] - t[7]) <= n &&
                Math.abs(e[8] - t[8]) <= n &&
                Math.abs(e[9] - t[9]) <= n &&
                Math.abs(e[10] - t[10]) <= n &&
                Math.abs(e[11] - t[11]) <= n &&
                Math.abs(e[12] - t[12]) <= n &&
                Math.abs(e[13] - t[13]) <= n &&
                Math.abs(e[14] - t[14]) <= n &&
                Math.abs(e[15] - t[15]) <= n)
            );
          }),
          (c.getTranslation = function(e, t) {
            return (t.x = e[12]), (t.y = e[13]), (t.z = e[14]), t;
          }),
          (c.getRotation = function(e, t) {
            return (
              (t[0] = e[0]),
              (t[1] = e[1]),
              (t[2] = e[2]),
              (t[3] = e[4]),
              (t[4] = e[5]),
              (t[5] = e[6]),
              (t[6] = e[8]),
              (t[7] = e[9]),
              (t[8] = e[10]),
              t
            );
          });
        var A = new E(),
          d = new E(),
          N = new t(),
          I = new t(0, 0, 0, 1);
        return (
          (c.inverse = function(e, n) {
            if (
              E.equalsEpsilon(c.getRotation(e, A), d, u.EPSILON7) &&
              t.equals(c.getRow(e, 3, N), I)
            )
              return (
                (n[0] = 0),
                (n[1] = 0),
                (n[2] = 0),
                (n[3] = 0),
                (n[4] = 0),
                (n[5] = 0),
                (n[6] = 0),
                (n[7] = 0),
                (n[8] = 0),
                (n[9] = 0),
                (n[10] = 0),
                (n[11] = 0),
                (n[12] = -e[12]),
                (n[13] = -e[13]),
                (n[14] = -e[14]),
                (n[15] = 1),
                n
              );
            var r = e[0],
              i = e[4],
              a = e[8],
              o = e[12],
              _ = e[1],
              l = e[5],
              T = e[9],
              R = e[13],
              f = e[2],
              h = e[6],
              S = e[10],
              M = e[14],
              y = e[3],
              m = e[7],
              O = e[11],
              p = e[15],
              C = S * p,
              U = M * O,
              g = h * p,
              w = M * m,
              L = h * O,
              x = S * m,
              P = f * p,
              v = M * y,
              F = f * O,
              B = S * y,
              D = f * m,
              z = h * y,
              G = C * l + w * T + L * R - (U * l + g * T + x * R),
              b = U * _ + P * T + B * R - (C * _ + v * T + F * R),
              X = g * _ + v * l + D * R - (w * _ + P * l + z * R),
              V = x * _ + F * l + z * T - (L * _ + B * l + D * T),
              q = U * i + g * a + x * o - (C * i + w * a + L * o),
              H = C * r + v * a + F * o - (U * r + P * a + B * o),
              W = w * r + P * i + z * o - (g * r + v * i + D * o),
              Y = L * r + B * i + D * a - (x * r + F * i + z * a);
            (C = a * R),
              (U = o * T),
              (g = i * R),
              (w = o * l),
              (L = i * T),
              (x = a * l),
              (P = r * R),
              (v = o * _),
              (F = r * T),
              (B = a * _),
              (D = r * l),
              (z = i * _);
            var k = C * m + w * O + L * p - (U * m + g * O + x * p),
              K = U * y + P * O + B * p - (C * y + v * O + F * p),
              Z = g * y + v * m + D * p - (w * y + P * m + z * p),
              j = x * y + F * m + z * O - (L * y + B * m + D * O),
              Q = g * S + x * M + U * h - (L * M + C * h + w * S),
              J = F * M + C * f + v * S - (P * S + B * M + U * f),
              $ = P * h + z * M + w * f - (D * M + g * f + v * h),
              ee = D * S + L * f + B * h - (F * h + z * S + x * f),
              te = r * G + i * b + a * X + o * V;
            if (Math.abs(te) < u.EPSILON20)
              throw new s(
                "matrix is not invertible because its determinate is zero."
              );
            return (
              (te = 1 / te),
              (n[0] = G * te),
              (n[1] = b * te),
              (n[2] = X * te),
              (n[3] = V * te),
              (n[4] = q * te),
              (n[5] = H * te),
              (n[6] = W * te),
              (n[7] = Y * te),
              (n[8] = k * te),
              (n[9] = K * te),
              (n[10] = Z * te),
              (n[11] = j * te),
              (n[12] = Q * te),
              (n[13] = J * te),
              (n[14] = $ * te),
              (n[15] = ee * te),
              n
            );
          }),
          (c.inverseTransformation = function(e, t) {
            var n = e[0],
              r = e[1],
              i = e[2],
              a = e[4],
              o = e[5],
              u = e[6],
              E = e[8],
              s = e[9],
              c = e[10],
              _ = e[12],
              l = e[13],
              T = e[14],
              R = -n * _ - r * l - i * T,
              f = -a * _ - o * l - u * T,
              h = -E * _ - s * l - c * T;
            return (
              (t[0] = n),
              (t[1] = a),
              (t[2] = E),
              (t[3] = 0),
              (t[4] = r),
              (t[5] = o),
              (t[6] = s),
              (t[7] = 0),
              (t[8] = i),
              (t[9] = u),
              (t[10] = c),
              (t[11] = 0),
              (t[12] = R),
              (t[13] = f),
              (t[14] = h),
              (t[15] = 1),
              t
            );
          }),
          (c.IDENTITY = o(
            new c(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
          )),
          (c.ZERO = o(new c(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0))),
          (c.COLUMN0ROW0 = 0),
          (c.COLUMN0ROW1 = 1),
          (c.COLUMN0ROW2 = 2),
          (c.COLUMN0ROW3 = 3),
          (c.COLUMN1ROW0 = 4),
          (c.COLUMN1ROW1 = 5),
          (c.COLUMN1ROW2 = 6),
          (c.COLUMN1ROW3 = 7),
          (c.COLUMN2ROW0 = 8),
          (c.COLUMN2ROW1 = 9),
          (c.COLUMN2ROW2 = 10),
          (c.COLUMN2ROW3 = 11),
          (c.COLUMN3ROW0 = 12),
          (c.COLUMN3ROW1 = 13),
          (c.COLUMN3ROW2 = 14),
          (c.COLUMN3ROW3 = 15),
          a(c.prototype, {
            length: {
              get: function() {
                return c.packedLength;
              }
            }
          }),
          (c.prototype.clone = function(e) {
            return c.clone(this, e);
          }),
          (c.prototype.equals = function(e) {
            return c.equals(this, e);
          }),
          (c.equalsArray = function(e, t, n) {
            return (
              e[0] === t[n] &&
              e[1] === t[n + 1] &&
              e[2] === t[n + 2] &&
              e[3] === t[n + 3] &&
              e[4] === t[n + 4] &&
              e[5] === t[n + 5] &&
              e[6] === t[n + 6] &&
              e[7] === t[n + 7] &&
              e[8] === t[n + 8] &&
              e[9] === t[n + 9] &&
              e[10] === t[n + 10] &&
              e[11] === t[n + 11] &&
              e[12] === t[n + 12] &&
              e[13] === t[n + 13] &&
              e[14] === t[n + 14] &&
              e[15] === t[n + 15]
            );
          }),
          (c.prototype.equalsEpsilon = function(e, t) {
            return c.equalsEpsilon(this, e, t);
          }),
          (c.prototype.toString = function() {
            return (
              "(" +
              this[0] +
              ", " +
              this[4] +
              ", " +
              this[8] +
              ", " +
              this[12] +
              ")\n(" +
              this[1] +
              ", " +
              this[5] +
              ", " +
              this[9] +
              ", " +
              this[13] +
              ")\n(" +
              this[2] +
              ", " +
              this[6] +
              ", " +
              this[10] +
              ", " +
              this[14] +
              ")\n(" +
              this[3] +
              ", " +
              this[7] +
              ", " +
              this[11] +
              ", " +
              this[15] +
              ")"
            );
          }),
          c
        );
      }
    ),
    define(
      "Core/Rectangle",
      [
        "./Cartographic",
        "./Check",
        "./defaultValue",
        "./defined",
        "./defineProperties",
        "./Ellipsoid",
        "./freezeObject",
        "./Math"
      ],
      function(e, t, n, r, i, a, o, u) {
        "use strict";
        function E(e, t, r, i) {
          (this.west = n(e, 0)),
            (this.south = n(t, 0)),
            (this.east = n(r, 0)),
            (this.north = n(i, 0));
        }
        i(E.prototype, {
          width: {
            get: function() {
              return E.computeWidth(this);
            }
          },
          height: {
            get: function() {
              return E.computeHeight(this);
            }
          }
        }),
          (E.packedLength = 4),
          (E.pack = function(e, t, r) {
            return (
              (r = n(r, 0)),
              (t[r++] = e.west),
              (t[r++] = e.south),
              (t[r++] = e.east),
              (t[r] = e.north),
              t
            );
          }),
          (E.unpack = function(e, t, i) {
            return (
              (t = n(t, 0)),
              r(i) || (i = new E()),
              (i.west = e[t++]),
              (i.south = e[t++]),
              (i.east = e[t++]),
              (i.north = e[t]),
              i
            );
          }),
          (E.computeWidth = function(e) {
            var t = e.east,
              n = e.west;
            return t < n && (t += u.TWO_PI), t - n;
          }),
          (E.computeHeight = function(e) {
            return e.north - e.south;
          }),
          (E.fromDegrees = function(e, t, i, a, o) {
            return (
              (e = u.toRadians(n(e, 0))),
              (t = u.toRadians(n(t, 0))),
              (i = u.toRadians(n(i, 0))),
              (a = u.toRadians(n(a, 0))),
              r(o)
                ? ((o.west = e), (o.south = t), (o.east = i), (o.north = a), o)
                : new E(e, t, i, a)
            );
          }),
          (E.fromRadians = function(e, t, i, a, o) {
            return r(o)
              ? ((o.west = n(e, 0)),
                (o.south = n(t, 0)),
                (o.east = n(i, 0)),
                (o.north = n(a, 0)),
                o)
              : new E(e, t, i, a);
          }),
          (E.fromCartographicArray = function(e, t) {
            for (
              var n = Number.MAX_VALUE,
                i = -Number.MAX_VALUE,
                a = Number.MAX_VALUE,
                o = -Number.MAX_VALUE,
                s = Number.MAX_VALUE,
                c = -Number.MAX_VALUE,
                _ = 0,
                l = e.length;
              _ < l;
              _++
            ) {
              var T = e[_];
              (n = Math.min(n, T.longitude)),
                (i = Math.max(i, T.longitude)),
                (s = Math.min(s, T.latitude)),
                (c = Math.max(c, T.latitude));
              var R = T.longitude >= 0 ? T.longitude : T.longitude + u.TWO_PI;
              (a = Math.min(a, R)), (o = Math.max(o, R));
            }
            return (
              i - n > o - a &&
                ((n = a),
                (i = o),
                i > u.PI && (i -= u.TWO_PI),
                n > u.PI && (n -= u.TWO_PI)),
              r(t)
                ? ((t.west = n), (t.south = s), (t.east = i), (t.north = c), t)
                : new E(n, s, i, c)
            );
          }),
          (E.fromCartesianArray = function(e, t, i) {
            t = n(t, a.WGS84);
            for (
              var o = Number.MAX_VALUE,
                s = -Number.MAX_VALUE,
                c = Number.MAX_VALUE,
                _ = -Number.MAX_VALUE,
                l = Number.MAX_VALUE,
                T = -Number.MAX_VALUE,
                R = 0,
                f = e.length;
              R < f;
              R++
            ) {
              var h = t.cartesianToCartographic(e[R]);
              (o = Math.min(o, h.longitude)),
                (s = Math.max(s, h.longitude)),
                (l = Math.min(l, h.latitude)),
                (T = Math.max(T, h.latitude));
              var A = h.longitude >= 0 ? h.longitude : h.longitude + u.TWO_PI;
              (c = Math.min(c, A)), (_ = Math.max(_, A));
            }
            return (
              s - o > _ - c &&
                ((o = c),
                (s = _),
                s > u.PI && (s -= u.TWO_PI),
                o > u.PI && (o -= u.TWO_PI)),
              r(i)
                ? ((i.west = o), (i.south = l), (i.east = s), (i.north = T), i)
                : new E(o, l, s, T)
            );
          }),
          (E.clone = function(e, t) {
            if (r(e))
              return r(t)
                ? ((t.west = e.west),
                  (t.south = e.south),
                  (t.east = e.east),
                  (t.north = e.north),
                  t)
                : new E(e.west, e.south, e.east, e.north);
          }),
          (E.prototype.clone = function(e) {
            return E.clone(this, e);
          }),
          (E.prototype.equals = function(e) {
            return E.equals(this, e);
          }),
          (E.equals = function(e, t) {
            return (
              e === t ||
              (r(e) &&
                r(t) &&
                e.west === t.west &&
                e.south === t.south &&
                e.east === t.east &&
                e.north === t.north)
            );
          }),
          (E.prototype.equalsEpsilon = function(e, t) {
            return (
              r(e) &&
              Math.abs(this.west - e.west) <= t &&
              Math.abs(this.south - e.south) <= t &&
              Math.abs(this.east - e.east) <= t &&
              Math.abs(this.north - e.north) <= t
            );
          }),
          (E.validate = function(e) {}),
          (E.southwest = function(t, n) {
            return r(n)
              ? ((n.longitude = t.west),
                (n.latitude = t.south),
                (n.height = 0),
                n)
              : new e(t.west, t.south);
          }),
          (E.northwest = function(t, n) {
            return r(n)
              ? ((n.longitude = t.west),
                (n.latitude = t.north),
                (n.height = 0),
                n)
              : new e(t.west, t.north);
          }),
          (E.northeast = function(t, n) {
            return r(n)
              ? ((n.longitude = t.east),
                (n.latitude = t.north),
                (n.height = 0),
                n)
              : new e(t.east, t.north);
          }),
          (E.southeast = function(t, n) {
            return r(n)
              ? ((n.longitude = t.east),
                (n.latitude = t.south),
                (n.height = 0),
                n)
              : new e(t.east, t.south);
          }),
          (E.center = function(t, n) {
            var i = t.east,
              a = t.west;
            i < a && (i += u.TWO_PI);
            var o = u.negativePiToPi(0.5 * (a + i)),
              E = 0.5 * (t.south + t.north);
            return r(n)
              ? ((n.longitude = o), (n.latitude = E), (n.height = 0), n)
              : new e(o, E);
          }),
          (E.intersection = function(e, t, n) {
            var i = e.east,
              a = e.west,
              o = t.east,
              s = t.west;
            i < a && o > 0
              ? (i += u.TWO_PI)
              : o < s && i > 0 && (o += u.TWO_PI),
              i < a && s < 0
                ? (s += u.TWO_PI)
                : o < s && a < 0 && (a += u.TWO_PI);
            var c = u.negativePiToPi(Math.max(a, s)),
              _ = u.negativePiToPi(Math.min(i, o));
            if (!((e.west < e.east || t.west < t.east) && _ <= c)) {
              var l = Math.max(e.south, t.south),
                T = Math.min(e.north, t.north);
              if (!(l >= T))
                return r(n)
                  ? ((n.west = c),
                    (n.south = l),
                    (n.east = _),
                    (n.north = T),
                    n)
                  : new E(c, l, _, T);
            }
          }),
          (E.simpleIntersection = function(e, t, n) {
            var i = Math.max(e.west, t.west),
              a = Math.max(e.south, t.south),
              o = Math.min(e.east, t.east),
              u = Math.min(e.north, t.north);
            if (!(a >= u || i >= o))
              return r(n)
                ? ((n.west = i), (n.south = a), (n.east = o), (n.north = u), n)
                : new E(i, a, o, u);
          }),
          (E.union = function(e, t, n) {
            r(n) || (n = new E());
            var i = e.east,
              a = e.west,
              o = t.east,
              s = t.west;
            i < a && o > 0
              ? (i += u.TWO_PI)
              : o < s && i > 0 && (o += u.TWO_PI),
              i < a && s < 0
                ? (s += u.TWO_PI)
                : o < s && a < 0 && (a += u.TWO_PI);
            var c = u.convertLongitudeRange(Math.min(a, s)),
              _ = u.convertLongitudeRange(Math.max(i, o));
            return (
              (n.west = c),
              (n.south = Math.min(e.south, t.south)),
              (n.east = _),
              (n.north = Math.max(e.north, t.north)),
              n
            );
          }),
          (E.expand = function(e, t, n) {
            return (
              r(n) || (n = new E()),
              (n.west = Math.min(e.west, t.longitude)),
              (n.south = Math.min(e.south, t.latitude)),
              (n.east = Math.max(e.east, t.longitude)),
              (n.north = Math.max(e.north, t.latitude)),
              n
            );
          }),
          (E.contains = function(e, t) {
            var n = t.longitude,
              r = t.latitude,
              i = e.west,
              a = e.east;
            return (
              a < i && ((a += u.TWO_PI), n < 0 && (n += u.TWO_PI)),
              (n > i || u.equalsEpsilon(n, i, u.EPSILON14)) &&
                (n < a || u.equalsEpsilon(n, a, u.EPSILON14)) &&
                r >= e.south &&
                r <= e.north
            );
          });
        var s = new e();
        return (
          (E.subsample = function(e, t, i, o) {
            (t = n(t, a.WGS84)), (i = n(i, 0)), r(o) || (o = []);
            var c = 0,
              _ = e.north,
              l = e.south,
              T = e.east,
              R = e.west,
              f = s;
            (f.height = i),
              (f.longitude = R),
              (f.latitude = _),
              (o[c] = t.cartographicToCartesian(f, o[c])),
              c++,
              (f.longitude = T),
              (o[c] = t.cartographicToCartesian(f, o[c])),
              c++,
              (f.latitude = l),
              (o[c] = t.cartographicToCartesian(f, o[c])),
              c++,
              (f.longitude = R),
              (o[c] = t.cartographicToCartesian(f, o[c])),
              c++,
              _ < 0
                ? (f.latitude = _)
                : l > 0 ? (f.latitude = l) : (f.latitude = 0);
            for (var h = 1; h < 8; ++h)
              (f.longitude = -Math.PI + h * u.PI_OVER_TWO),
                E.contains(e, f) &&
                  ((o[c] = t.cartographicToCartesian(f, o[c])), c++);
            return (
              0 === f.latitude &&
                ((f.longitude = R),
                (o[c] = t.cartographicToCartesian(f, o[c])),
                c++,
                (f.longitude = T),
                (o[c] = t.cartographicToCartesian(f, o[c])),
                c++),
              (o.length = c),
              o
            );
          }),
          (E.MAX_VALUE = o(
            new E(-Math.PI, -u.PI_OVER_TWO, Math.PI, u.PI_OVER_TWO)
          )),
          E
        );
      }
    ),
    define(
      "Core/BoundingSphere",
      [
        "./Cartesian3",
        "./Cartographic",
        "./Check",
        "./defaultValue",
        "./defined",
        "./Ellipsoid",
        "./GeographicProjection",
        "./Intersect",
        "./Interval",
        "./Matrix3",
        "./Matrix4",
        "./Rectangle"
      ],
      function(e, t, n, r, i, a, o, u, E, s, c, _) {
        "use strict";
        function l(t, n) {
          (this.center = e.clone(r(t, e.ZERO))), (this.radius = r(n, 0));
        }
        var T = new e(),
          R = new e(),
          f = new e(),
          h = new e(),
          A = new e(),
          d = new e(),
          N = new e(),
          I = new e(),
          S = new e(),
          M = new e(),
          y = new e(),
          m = new e();
        l.fromPoints = function(t, n) {
          if ((i(n) || (n = new l()), !i(t) || 0 === t.length))
            return (n.center = e.clone(e.ZERO, n.center)), (n.radius = 0), n;
          var r,
            a = e.clone(t[0], N),
            o = e.clone(a, T),
            u = e.clone(a, R),
            E = e.clone(a, f),
            s = e.clone(a, h),
            c = e.clone(a, A),
            _ = e.clone(a, d),
            O = t.length;
          for (r = 1; r < O; r++) {
            e.clone(t[r], a);
            var p = a.x,
              C = a.y,
              U = a.z;
            p < o.x && e.clone(a, o),
              p > s.x && e.clone(a, s),
              C < u.y && e.clone(a, u),
              C > c.y && e.clone(a, c),
              U < E.z && e.clone(a, E),
              U > _.z && e.clone(a, _);
          }
          var g = e.magnitudeSquared(e.subtract(s, o, I)),
            w = e.magnitudeSquared(e.subtract(c, u, I)),
            L = e.magnitudeSquared(e.subtract(_, E, I)),
            x = o,
            P = s,
            v = g;
          w > v && ((v = w), (x = u), (P = c)),
            L > v && ((v = L), (x = E), (P = _));
          var F = S;
          (F.x = 0.5 * (x.x + P.x)),
            (F.y = 0.5 * (x.y + P.y)),
            (F.z = 0.5 * (x.z + P.z));
          var B = e.magnitudeSquared(e.subtract(P, F, I)),
            D = Math.sqrt(B),
            z = M;
          (z.x = o.x), (z.y = u.y), (z.z = E.z);
          var G = y;
          (G.x = s.x), (G.y = c.y), (G.z = _.z);
          var b = e.multiplyByScalar(e.add(z, G, I), 0.5, m),
            X = 0;
          for (r = 0; r < O; r++) {
            e.clone(t[r], a);
            var V = e.magnitude(e.subtract(a, b, I));
            V > X && (X = V);
            var q = e.magnitudeSquared(e.subtract(a, F, I));
            if (q > B) {
              var H = Math.sqrt(q);
              (D = 0.5 * (D + H)), (B = D * D);
              var W = H - D;
              (F.x = (D * F.x + W * a.x) / H),
                (F.y = (D * F.y + W * a.y) / H),
                (F.z = (D * F.z + W * a.z) / H);
            }
          }
          return (
            D < X
              ? (e.clone(F, n.center), (n.radius = D))
              : (e.clone(b, n.center), (n.radius = X)),
            n
          );
        };
        var O = new o(),
          p = new e(),
          C = new e(),
          U = new t(),
          g = new t();
        (l.fromRectangle2D = function(e, t, n) {
          return l.fromRectangleWithHeights2D(e, t, 0, 0, n);
        }),
          (l.fromRectangleWithHeights2D = function(t, n, a, o, u) {
            if ((i(u) || (u = new l()), !i(t)))
              return (u.center = e.clone(e.ZERO, u.center)), (u.radius = 0), u;
            (n = r(n, O)),
              _.southwest(t, U),
              (U.height = a),
              _.northeast(t, g),
              (g.height = o);
            var E = n.project(U, p),
              s = n.project(g, C),
              c = s.x - E.x,
              T = s.y - E.y,
              R = s.z - E.z;
            u.radius = 0.5 * Math.sqrt(c * c + T * T + R * R);
            var f = u.center;
            return (
              (f.x = E.x + 0.5 * c),
              (f.y = E.y + 0.5 * T),
              (f.z = E.z + 0.5 * R),
              u
            );
          });
        var w = [];
        (l.fromRectangle3D = function(e, t, n, o) {
          (t = r(t, a.WGS84)), (n = r(n, 0));
          var u;
          return i(e) && (u = _.subsample(e, t, n, w)), l.fromPoints(u, o);
        }),
          (l.fromVertices = function(t, n, a, o) {
            if ((i(o) || (o = new l()), !i(t) || 0 === t.length))
              return (o.center = e.clone(e.ZERO, o.center)), (o.radius = 0), o;
            (n = r(n, e.ZERO)), (a = r(a, 3));
            var u = N;
            (u.x = t[0] + n.x), (u.y = t[1] + n.y), (u.z = t[2] + n.z);
            var E,
              s = e.clone(u, T),
              c = e.clone(u, R),
              _ = e.clone(u, f),
              O = e.clone(u, h),
              p = e.clone(u, A),
              C = e.clone(u, d),
              U = t.length;
            for (E = 0; E < U; E += a) {
              var g = t[E] + n.x,
                w = t[E + 1] + n.y,
                L = t[E + 2] + n.z;
              (u.x = g),
                (u.y = w),
                (u.z = L),
                g < s.x && e.clone(u, s),
                g > O.x && e.clone(u, O),
                w < c.y && e.clone(u, c),
                w > p.y && e.clone(u, p),
                L < _.z && e.clone(u, _),
                L > C.z && e.clone(u, C);
            }
            var x = e.magnitudeSquared(e.subtract(O, s, I)),
              P = e.magnitudeSquared(e.subtract(p, c, I)),
              v = e.magnitudeSquared(e.subtract(C, _, I)),
              F = s,
              B = O,
              D = x;
            P > D && ((D = P), (F = c), (B = p)),
              v > D && ((D = v), (F = _), (B = C));
            var z = S;
            (z.x = 0.5 * (F.x + B.x)),
              (z.y = 0.5 * (F.y + B.y)),
              (z.z = 0.5 * (F.z + B.z));
            var G = e.magnitudeSquared(e.subtract(B, z, I)),
              b = Math.sqrt(G),
              X = M;
            (X.x = s.x), (X.y = c.y), (X.z = _.z);
            var V = y;
            (V.x = O.x), (V.y = p.y), (V.z = C.z);
            var q = e.multiplyByScalar(e.add(X, V, I), 0.5, m),
              H = 0;
            for (E = 0; E < U; E += a) {
              (u.x = t[E] + n.x),
                (u.y = t[E + 1] + n.y),
                (u.z = t[E + 2] + n.z);
              var W = e.magnitude(e.subtract(u, q, I));
              W > H && (H = W);
              var Y = e.magnitudeSquared(e.subtract(u, z, I));
              if (Y > G) {
                var k = Math.sqrt(Y);
                (b = 0.5 * (b + k)), (G = b * b);
                var K = k - b;
                (z.x = (b * z.x + K * u.x) / k),
                  (z.y = (b * z.y + K * u.y) / k),
                  (z.z = (b * z.z + K * u.z) / k);
              }
            }
            return (
              b < H
                ? (e.clone(z, o.center), (o.radius = b))
                : (e.clone(q, o.center), (o.radius = H)),
              o
            );
          }),
          (l.fromEncodedCartesianVertices = function(t, n, r) {
            if (
              (i(r) || (r = new l()),
              !i(t) || !i(n) || t.length !== n.length || 0 === t.length)
            )
              return (r.center = e.clone(e.ZERO, r.center)), (r.radius = 0), r;
            var a = N;
            (a.x = t[0] + n[0]), (a.y = t[1] + n[1]), (a.z = t[2] + n[2]);
            var o,
              u = e.clone(a, T),
              E = e.clone(a, R),
              s = e.clone(a, f),
              c = e.clone(a, h),
              _ = e.clone(a, A),
              O = e.clone(a, d),
              p = t.length;
            for (o = 0; o < p; o += 3) {
              var C = t[o] + n[o],
                U = t[o + 1] + n[o + 1],
                g = t[o + 2] + n[o + 2];
              (a.x = C),
                (a.y = U),
                (a.z = g),
                C < u.x && e.clone(a, u),
                C > c.x && e.clone(a, c),
                U < E.y && e.clone(a, E),
                U > _.y && e.clone(a, _),
                g < s.z && e.clone(a, s),
                g > O.z && e.clone(a, O);
            }
            var w = e.magnitudeSquared(e.subtract(c, u, I)),
              L = e.magnitudeSquared(e.subtract(_, E, I)),
              x = e.magnitudeSquared(e.subtract(O, s, I)),
              P = u,
              v = c,
              F = w;
            L > F && ((F = L), (P = E), (v = _)),
              x > F && ((F = x), (P = s), (v = O));
            var B = S;
            (B.x = 0.5 * (P.x + v.x)),
              (B.y = 0.5 * (P.y + v.y)),
              (B.z = 0.5 * (P.z + v.z));
            var D = e.magnitudeSquared(e.subtract(v, B, I)),
              z = Math.sqrt(D),
              G = M;
            (G.x = u.x), (G.y = E.y), (G.z = s.z);
            var b = y;
            (b.x = c.x), (b.y = _.y), (b.z = O.z);
            var X = e.multiplyByScalar(e.add(G, b, I), 0.5, m),
              V = 0;
            for (o = 0; o < p; o += 3) {
              (a.x = t[o] + n[o]),
                (a.y = t[o + 1] + n[o + 1]),
                (a.z = t[o + 2] + n[o + 2]);
              var q = e.magnitude(e.subtract(a, X, I));
              q > V && (V = q);
              var H = e.magnitudeSquared(e.subtract(a, B, I));
              if (H > D) {
                var W = Math.sqrt(H);
                (z = 0.5 * (z + W)), (D = z * z);
                var Y = W - z;
                (B.x = (z * B.x + Y * a.x) / W),
                  (B.y = (z * B.y + Y * a.y) / W),
                  (B.z = (z * B.z + Y * a.z) / W);
              }
            }
            return (
              z < V
                ? (e.clone(B, r.center), (r.radius = z))
                : (e.clone(X, r.center), (r.radius = V)),
              r
            );
          }),
          (l.fromCornerPoints = function(t, n, r) {
            i(r) || (r = new l());
            var a = r.center;
            return (
              e.add(t, n, a),
              e.multiplyByScalar(a, 0.5, a),
              (r.radius = e.distance(a, n)),
              r
            );
          }),
          (l.fromEllipsoid = function(t, n) {
            return (
              i(n) || (n = new l()),
              e.clone(e.ZERO, n.center),
              (n.radius = t.maximumRadius),
              n
            );
          });
        var L = new e();
        l.fromBoundingSpheres = function(t, n) {
          if ((i(n) || (n = new l()), !i(t) || 0 === t.length))
            return (n.center = e.clone(e.ZERO, n.center)), (n.radius = 0), n;
          var r = t.length;
          if (1 === r) return l.clone(t[0], n);
          if (2 === r) return l.union(t[0], t[1], n);
          var a,
            o = [];
          for (a = 0; a < r; a++) o.push(t[a].center);
          n = l.fromPoints(o, n);
          var u = n.center,
            E = n.radius;
          for (a = 0; a < r; a++) {
            var s = t[a];
            E = Math.max(E, e.distance(u, s.center, L) + s.radius);
          }
          return (n.radius = E), n;
        };
        var x = new e(),
          P = new e(),
          v = new e();
        (l.fromOrientedBoundingBox = function(t, n) {
          i(n) || (n = new l());
          var r = t.halfAxes,
            a = s.getColumn(r, 0, x),
            o = s.getColumn(r, 1, P),
            u = s.getColumn(r, 2, v);
          return (
            e.add(a, o, a),
            e.add(a, u, a),
            (n.center = e.clone(t.center, n.center)),
            (n.radius = e.magnitude(a)),
            n
          );
        }),
          (l.clone = function(t, n) {
            if (i(t))
              return i(n)
                ? ((n.center = e.clone(t.center, n.center)),
                  (n.radius = t.radius),
                  n)
                : new l(t.center, t.radius);
          }),
          (l.packedLength = 4),
          (l.pack = function(e, t, n) {
            n = r(n, 0);
            var i = e.center;
            return (
              (t[n++] = i.x),
              (t[n++] = i.y),
              (t[n++] = i.z),
              (t[n] = e.radius),
              t
            );
          }),
          (l.unpack = function(e, t, n) {
            (t = r(t, 0)), i(n) || (n = new l());
            var a = n.center;
            return (
              (a.x = e[t++]),
              (a.y = e[t++]),
              (a.z = e[t++]),
              (n.radius = e[t]),
              n
            );
          });
        var F = new e(),
          B = new e();
        l.union = function(t, n, r) {
          i(r) || (r = new l());
          var a = t.center,
            o = t.radius,
            u = n.center,
            E = n.radius,
            s = e.subtract(u, a, F),
            c = e.magnitude(s);
          if (o >= c + E) return t.clone(r), r;
          if (E >= c + o) return n.clone(r), r;
          var _ = 0.5 * (o + c + E),
            T = e.multiplyByScalar(s, (-o + _) / c, B);
          return e.add(T, a, T), e.clone(T, r.center), (r.radius = _), r;
        };
        var D = new e();
        (l.expand = function(t, n, r) {
          r = l.clone(t, r);
          var i = e.magnitude(e.subtract(n, r.center, D));
          return i > r.radius && (r.radius = i), r;
        }),
          (l.intersectPlane = function(t, n) {
            var r = t.center,
              i = t.radius,
              a = n.normal,
              o = e.dot(a, r) + n.distance;
            return o < -i ? u.OUTSIDE : o < i ? u.INTERSECTING : u.INSIDE;
          }),
          (l.transform = function(e, t, n) {
            return (
              i(n) || (n = new l()),
              (n.center = c.multiplyByPoint(t, e.center, n.center)),
              (n.radius = c.getMaximumScale(t) * e.radius),
              n
            );
          });
        var z = new e();
        (l.distanceSquaredTo = function(t, n) {
          var r = e.subtract(t.center, n, z);
          return e.magnitudeSquared(r) - t.radius * t.radius;
        }),
          (l.transformWithoutScale = function(e, t, n) {
            return (
              i(n) || (n = new l()),
              (n.center = c.multiplyByPoint(t, e.center, n.center)),
              (n.radius = e.radius),
              n
            );
          });
        var G = new e();
        l.computePlaneDistances = function(t, n, r, a) {
          i(a) || (a = new E());
          var o = e.subtract(t.center, n, G),
            u = e.dot(r, o);
          return (a.start = u - t.radius), (a.stop = u + t.radius), a;
        };
        for (
          var b = new e(),
            X = new e(),
            V = new e(),
            q = new e(),
            H = new e(),
            W = new t(),
            Y = new Array(8),
            k = 0;
          k < 8;
          ++k
        )
          Y[k] = new e();
        var K = new o();
        return (
          (l.projectTo2D = function(t, n, i) {
            n = r(n, K);
            var a = n.ellipsoid,
              o = t.center,
              u = t.radius,
              E = a.geodeticSurfaceNormal(o, b),
              s = e.cross(e.UNIT_Z, E, X);
            e.normalize(s, s);
            var c = e.cross(E, s, V);
            e.normalize(c, c),
              e.multiplyByScalar(E, u, E),
              e.multiplyByScalar(c, u, c),
              e.multiplyByScalar(s, u, s);
            var _ = e.negate(c, H),
              T = e.negate(s, q),
              R = Y,
              f = R[0];
            e.add(E, c, f),
              e.add(f, s, f),
              (f = R[1]),
              e.add(E, c, f),
              e.add(f, T, f),
              (f = R[2]),
              e.add(E, _, f),
              e.add(f, T, f),
              (f = R[3]),
              e.add(E, _, f),
              e.add(f, s, f),
              e.negate(E, E),
              (f = R[4]),
              e.add(E, c, f),
              e.add(f, s, f),
              (f = R[5]),
              e.add(E, c, f),
              e.add(f, T, f),
              (f = R[6]),
              e.add(E, _, f),
              e.add(f, T, f),
              (f = R[7]),
              e.add(E, _, f),
              e.add(f, s, f);
            for (var h = R.length, A = 0; A < h; ++A) {
              var d = R[A];
              e.add(o, d, d);
              var N = a.cartesianToCartographic(d, W);
              n.project(N, d);
            }
            (i = l.fromPoints(R, i)), (o = i.center);
            var I = o.x,
              S = o.y,
              M = o.z;
            return (o.x = M), (o.y = I), (o.z = S), i;
          }),
          (l.isOccluded = function(e, t) {
            return !t.isBoundingSphereVisible(e);
          }),
          (l.equals = function(t, n) {
            return (
              t === n ||
              (i(t) &&
                i(n) &&
                e.equals(t.center, n.center) &&
                t.radius === n.radius)
            );
          }),
          (l.prototype.intersectPlane = function(e) {
            return l.intersectPlane(this, e);
          }),
          (l.prototype.distanceSquaredTo = function(e) {
            return l.distanceSquaredTo(this, e);
          }),
          (l.prototype.computePlaneDistances = function(e, t, n) {
            return l.computePlaneDistances(this, e, t, n);
          }),
          (l.prototype.isOccluded = function(e) {
            return l.isOccluded(this, e);
          }),
          (l.prototype.equals = function(e) {
            return l.equals(this, e);
          }),
          (l.prototype.clone = function(e) {
            return l.clone(this, e);
          }),
          l
        );
      }
    ),
    define("Core/Fullscreen", ["./defined", "./defineProperties"], function(
      e,
      t
    ) {
      "use strict";
      var n,
        r = {
          requestFullscreen: void 0,
          exitFullscreen: void 0,
          fullscreenEnabled: void 0,
          fullscreenElement: void 0,
          fullscreenchange: void 0,
          fullscreenerror: void 0
        },
        i = {};
      return (
        t(i, {
          element: {
            get: function() {
              if (i.supportsFullscreen()) return document[r.fullscreenElement];
            }
          },
          changeEventName: {
            get: function() {
              if (i.supportsFullscreen()) return r.fullscreenchange;
            }
          },
          errorEventName: {
            get: function() {
              if (i.supportsFullscreen()) return r.fullscreenerror;
            }
          },
          enabled: {
            get: function() {
              if (i.supportsFullscreen()) return document[r.fullscreenEnabled];
            }
          },
          fullscreen: {
            get: function() {
              if (i.supportsFullscreen()) return null !== i.element;
            }
          }
        }),
        (i.supportsFullscreen = function() {
          if (e(n)) return n;
          n = !1;
          var t = document.body;
          if ("function" == typeof t.requestFullscreen)
            return (
              (r.requestFullscreen = "requestFullscreen"),
              (r.exitFullscreen = "exitFullscreen"),
              (r.fullscreenEnabled = "fullscreenEnabled"),
              (r.fullscreenElement = "fullscreenElement"),
              (r.fullscreenchange = "fullscreenchange"),
              (r.fullscreenerror = "fullscreenerror"),
              (n = !0)
            );
          for (
            var i,
              a = ["webkit", "moz", "o", "ms", "khtml"],
              o = 0,
              u = a.length;
            o < u;
            ++o
          ) {
            var E = a[o];
            (i = E + "RequestFullscreen"),
              "function" == typeof t[i]
                ? ((r.requestFullscreen = i), (n = !0))
                : ((i = E + "RequestFullScreen"),
                  "function" == typeof t[i] &&
                    ((r.requestFullscreen = i), (n = !0))),
              (i = E + "ExitFullscreen"),
              "function" == typeof document[i]
                ? (r.exitFullscreen = i)
                : ((i = E + "CancelFullScreen"),
                  "function" == typeof document[i] && (r.exitFullscreen = i)),
              (i = E + "FullscreenEnabled"),
              void 0 !== document[i]
                ? (r.fullscreenEnabled = i)
                : ((i = E + "FullScreenEnabled"),
                  void 0 !== document[i] && (r.fullscreenEnabled = i)),
              (i = E + "FullscreenElement"),
              void 0 !== document[i]
                ? (r.fullscreenElement = i)
                : ((i = E + "FullScreenElement"),
                  void 0 !== document[i] && (r.fullscreenElement = i)),
              (i = E + "fullscreenchange"),
              void 0 !== document["on" + i] &&
                ("ms" === E && (i = "MSFullscreenChange"),
                (r.fullscreenchange = i)),
              (i = E + "fullscreenerror"),
              void 0 !== document["on" + i] &&
                ("ms" === E && (i = "MSFullscreenError"),
                (r.fullscreenerror = i));
          }
          return n;
        }),
        (i.requestFullscreen = function(e, t) {
          i.supportsFullscreen() && e[r.requestFullscreen]({ vrDisplay: t });
        }),
        (i.exitFullscreen = function() {
          i.supportsFullscreen() && document[r.exitFullscreen]();
        }),
        i
      );
    }),
    define(
      "Core/FeatureDetection",
      ["./defaultValue", "./defined", "./Fullscreen"],
      function(e, t, n) {
        "use strict";
        function r(e) {
          for (var t = e.split("."), n = 0, r = t.length; n < r; ++n)
            t[n] = parseInt(t[n], 10);
          return t;
        }
        function i() {
          if (!t(S) && ((S = !1), !l())) {
            var e = / Chrome\/([\.0-9]+)/.exec(I.userAgent);
            null !== e && ((S = !0), (M = r(e[1])));
          }
          return S;
        }
        function a() {
          return i() && M;
        }
        function o() {
          if (
            !t(y) &&
            ((y = !1), !i() && !l() && / Safari\/[\.0-9]+/.test(I.userAgent))
          ) {
            var e = / Version\/([\.0-9]+)/.exec(I.userAgent);
            null !== e && ((y = !0), (m = r(e[1])));
          }
          return y;
        }
        function u() {
          return o() && m;
        }
        function E() {
          if (!t(O)) {
            O = !1;
            var e = / AppleWebKit\/([\.0-9]+)(\+?)/.exec(I.userAgent);
            null !== e && ((O = !0), (p = r(e[1])), (p.isNightly = !!e[2]));
          }
          return O;
        }
        function s() {
          return E() && p;
        }
        function c() {
          if (!t(C)) {
            C = !1;
            var e;
            "Microsoft Internet Explorer" === I.appName
              ? ((e = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(I.userAgent)),
                null !== e && ((C = !0), (U = r(e[1]))))
              : "Netscape" === I.appName &&
                ((e = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(I.userAgent)),
                null !== e && ((C = !0), (U = r(e[1]))));
          }
          return C;
        }
        function _() {
          return c() && U;
        }
        function l() {
          if (!t(g)) {
            g = !1;
            var e = / Edge\/([\.0-9]+)/.exec(I.userAgent);
            null !== e && ((g = !0), (w = r(e[1])));
          }
          return g;
        }
        function T() {
          return l() && w;
        }
        function R() {
          if (!t(L)) {
            L = !1;
            var e = /Firefox\/([\.0-9]+)/.exec(I.userAgent);
            null !== e && ((L = !0), (x = r(e[1])));
          }
          return L;
        }
        function f() {
          return t(P) || (P = /Windows/i.test(I.appVersion)), P;
        }
        function h() {
          return R() && x;
        }
        function A() {
          return (
            t(v) ||
              (v =
                "undefined" != typeof PointerEvent &&
                (!t(I.pointerEnabled) || I.pointerEnabled)),
            v
          );
        }
        function d() {
          if (!t(B)) {
            var e = document.createElement("canvas");
            e.setAttribute(
              "style",
              "image-rendering: -moz-crisp-edges;image-rendering: pixelated;"
            );
            var n = e.style.imageRendering;
            (B = t(n) && "" !== n), B && (F = n);
          }
          return B;
        }
        function N() {
          return d() ? F : void 0;
        }
        var I;
        I = "undefined" != typeof navigator ? navigator : {};
        var S,
          M,
          y,
          m,
          O,
          p,
          C,
          U,
          g,
          w,
          L,
          x,
          P,
          v,
          F,
          B,
          D = {
            isChrome: i,
            chromeVersion: a,
            isSafari: o,
            safariVersion: u,
            isWebkit: E,
            webkitVersion: s,
            isInternetExplorer: c,
            internetExplorerVersion: _,
            isEdge: l,
            edgeVersion: T,
            isFirefox: R,
            firefoxVersion: h,
            isWindows: f,
            hardwareConcurrency: e(I.hardwareConcurrency, 3),
            supportsPointerEvents: A,
            supportsImageRenderingPixelated: d,
            imageRenderingValue: N
          };
        return (
          (D.supportsFullscreen = function() {
            return n.supportsFullscreen();
          }),
          (D.supportsTypedArrays = function() {
            return "undefined" != typeof ArrayBuffer;
          }),
          (D.supportsWebWorkers = function() {
            return "undefined" != typeof Worker;
          }),
          D
        );
      }
    ),
    define("Core/WebGLConstants", ["./freezeObject"], function(e) {
      "use strict";
      var t = {
        DEPTH_BUFFER_BIT: 256,
        STENCIL_BUFFER_BIT: 1024,
        COLOR_BUFFER_BIT: 16384,
        POINTS: 0,
        LINES: 1,
        LINE_LOOP: 2,
        LINE_STRIP: 3,
        TRIANGLES: 4,
        TRIANGLE_STRIP: 5,
        TRIANGLE_FAN: 6,
        ZERO: 0,
        ONE: 1,
        SRC_COLOR: 768,
        ONE_MINUS_SRC_COLOR: 769,
        SRC_ALPHA: 770,
        ONE_MINUS_SRC_ALPHA: 771,
        DST_ALPHA: 772,
        ONE_MINUS_DST_ALPHA: 773,
        DST_COLOR: 774,
        ONE_MINUS_DST_COLOR: 775,
        SRC_ALPHA_SATURATE: 776,
        FUNC_ADD: 32774,
        BLEND_EQUATION: 32777,
        BLEND_EQUATION_RGB: 32777,
        BLEND_EQUATION_ALPHA: 34877,
        FUNC_SUBTRACT: 32778,
        FUNC_REVERSE_SUBTRACT: 32779,
        BLEND_DST_RGB: 32968,
        BLEND_SRC_RGB: 32969,
        BLEND_DST_ALPHA: 32970,
        BLEND_SRC_ALPHA: 32971,
        CONSTANT_COLOR: 32769,
        ONE_MINUS_CONSTANT_COLOR: 32770,
        CONSTANT_ALPHA: 32771,
        ONE_MINUS_CONSTANT_ALPHA: 32772,
        BLEND_COLOR: 32773,
        ARRAY_BUFFER: 34962,
        ELEMENT_ARRAY_BUFFER: 34963,
        ARRAY_BUFFER_BINDING: 34964,
        ELEMENT_ARRAY_BUFFER_BINDING: 34965,
        STREAM_DRAW: 35040,
        STATIC_DRAW: 35044,
        DYNAMIC_DRAW: 35048,
        BUFFER_SIZE: 34660,
        BUFFER_USAGE: 34661,
        CURRENT_VERTEX_ATTRIB: 34342,
        FRONT: 1028,
        BACK: 1029,
        FRONT_AND_BACK: 1032,
        CULL_FACE: 2884,
        BLEND: 3042,
        DITHER: 3024,
        STENCIL_TEST: 2960,
        DEPTH_TEST: 2929,
        SCISSOR_TEST: 3089,
        POLYGON_OFFSET_FILL: 32823,
        SAMPLE_ALPHA_TO_COVERAGE: 32926,
        SAMPLE_COVERAGE: 32928,
        NO_ERROR: 0,
        INVALID_ENUM: 1280,
        INVALID_VALUE: 1281,
        INVALID_OPERATION: 1282,
        OUT_OF_MEMORY: 1285,
        CW: 2304,
        CCW: 2305,
        LINE_WIDTH: 2849,
        ALIASED_POINT_SIZE_RANGE: 33901,
        ALIASED_LINE_WIDTH_RANGE: 33902,
        CULL_FACE_MODE: 2885,
        FRONT_FACE: 2886,
        DEPTH_RANGE: 2928,
        DEPTH_WRITEMASK: 2930,
        DEPTH_CLEAR_VALUE: 2931,
        DEPTH_FUNC: 2932,
        STENCIL_CLEAR_VALUE: 2961,
        STENCIL_FUNC: 2962,
        STENCIL_FAIL: 2964,
        STENCIL_PASS_DEPTH_FAIL: 2965,
        STENCIL_PASS_DEPTH_PASS: 2966,
        STENCIL_REF: 2967,
        STENCIL_VALUE_MASK: 2963,
        STENCIL_WRITEMASK: 2968,
        STENCIL_BACK_FUNC: 34816,
        STENCIL_BACK_FAIL: 34817,
        STENCIL_BACK_PASS_DEPTH_FAIL: 34818,
        STENCIL_BACK_PASS_DEPTH_PASS: 34819,
        STENCIL_BACK_REF: 36003,
        STENCIL_BACK_VALUE_MASK: 36004,
        STENCIL_BACK_WRITEMASK: 36005,
        VIEWPORT: 2978,
        SCISSOR_BOX: 3088,
        COLOR_CLEAR_VALUE: 3106,
        COLOR_WRITEMASK: 3107,
        UNPACK_ALIGNMENT: 3317,
        PACK_ALIGNMENT: 3333,
        MAX_TEXTURE_SIZE: 3379,
        MAX_VIEWPORT_DIMS: 3386,
        SUBPIXEL_BITS: 3408,
        RED_BITS: 3410,
        GREEN_BITS: 3411,
        BLUE_BITS: 3412,
        ALPHA_BITS: 3413,
        DEPTH_BITS: 3414,
        STENCIL_BITS: 3415,
        POLYGON_OFFSET_UNITS: 10752,
        POLYGON_OFFSET_FACTOR: 32824,
        TEXTURE_BINDING_2D: 32873,
        SAMPLE_BUFFERS: 32936,
        SAMPLES: 32937,
        SAMPLE_COVERAGE_VALUE: 32938,
        SAMPLE_COVERAGE_INVERT: 32939,
        COMPRESSED_TEXTURE_FORMATS: 34467,
        DONT_CARE: 4352,
        FASTEST: 4353,
        NICEST: 4354,
        GENERATE_MIPMAP_HINT: 33170,
        BYTE: 5120,
        UNSIGNED_BYTE: 5121,
        SHORT: 5122,
        UNSIGNED_SHORT: 5123,
        INT: 5124,
        UNSIGNED_INT: 5125,
        FLOAT: 5126,
        DEPTH_COMPONENT: 6402,
        ALPHA: 6406,
        RGB: 6407,
        RGBA: 6408,
        LUMINANCE: 6409,
        LUMINANCE_ALPHA: 6410,
        UNSIGNED_SHORT_4_4_4_4: 32819,
        UNSIGNED_SHORT_5_5_5_1: 32820,
        UNSIGNED_SHORT_5_6_5: 33635,
        FRAGMENT_SHADER: 35632,
        VERTEX_SHADER: 35633,
        MAX_VERTEX_ATTRIBS: 34921,
        MAX_VERTEX_UNIFORM_VECTORS: 36347,
        MAX_VARYING_VECTORS: 36348,
        MAX_COMBINED_TEXTURE_IMAGE_UNITS: 35661,
        MAX_VERTEX_TEXTURE_IMAGE_UNITS: 35660,
        MAX_TEXTURE_IMAGE_UNITS: 34930,
        MAX_FRAGMENT_UNIFORM_VECTORS: 36349,
        SHADER_TYPE: 35663,
        DELETE_STATUS: 35712,
        LINK_STATUS: 35714,
        VALIDATE_STATUS: 35715,
        ATTACHED_SHADERS: 35717,
        ACTIVE_UNIFORMS: 35718,
        ACTIVE_ATTRIBUTES: 35721,
        SHADING_LANGUAGE_VERSION: 35724,
        CURRENT_PROGRAM: 35725,
        NEVER: 512,
        LESS: 513,
        EQUAL: 514,
        LEQUAL: 515,
        GREATER: 516,
        NOTEQUAL: 517,
        GEQUAL: 518,
        ALWAYS: 519,
        KEEP: 7680,
        REPLACE: 7681,
        INCR: 7682,
        DECR: 7683,
        INVERT: 5386,
        INCR_WRAP: 34055,
        DECR_WRAP: 34056,
        VENDOR: 7936,
        RENDERER: 7937,
        VERSION: 7938,
        NEAREST: 9728,
        LINEAR: 9729,
        NEAREST_MIPMAP_NEAREST: 9984,
        LINEAR_MIPMAP_NEAREST: 9985,
        NEAREST_MIPMAP_LINEAR: 9986,
        LINEAR_MIPMAP_LINEAR: 9987,
        TEXTURE_MAG_FILTER: 10240,
        TEXTURE_MIN_FILTER: 10241,
        TEXTURE_WRAP_S: 10242,
        TEXTURE_WRAP_T: 10243,
        TEXTURE_2D: 3553,
        TEXTURE: 5890,
        TEXTURE_CUBE_MAP: 34067,
        TEXTURE_BINDING_CUBE_MAP: 34068,
        TEXTURE_CUBE_MAP_POSITIVE_X: 34069,
        TEXTURE_CUBE_MAP_NEGATIVE_X: 34070,
        TEXTURE_CUBE_MAP_POSITIVE_Y: 34071,
        TEXTURE_CUBE_MAP_NEGATIVE_Y: 34072,
        TEXTURE_CUBE_MAP_POSITIVE_Z: 34073,
        TEXTURE_CUBE_MAP_NEGATIVE_Z: 34074,
        MAX_CUBE_MAP_TEXTURE_SIZE: 34076,
        TEXTURE0: 33984,
        TEXTURE1: 33985,
        TEXTURE2: 33986,
        TEXTURE3: 33987,
        TEXTURE4: 33988,
        TEXTURE5: 33989,
        TEXTURE6: 33990,
        TEXTURE7: 33991,
        TEXTURE8: 33992,
        TEXTURE9: 33993,
        TEXTURE10: 33994,
        TEXTURE11: 33995,
        TEXTURE12: 33996,
        TEXTURE13: 33997,
        TEXTURE14: 33998,
        TEXTURE15: 33999,
        TEXTURE16: 34e3,
        TEXTURE17: 34001,
        TEXTURE18: 34002,
        TEXTURE19: 34003,
        TEXTURE20: 34004,
        TEXTURE21: 34005,
        TEXTURE22: 34006,
        TEXTURE23: 34007,
        TEXTURE24: 34008,
        TEXTURE25: 34009,
        TEXTURE26: 34010,
        TEXTURE27: 34011,
        TEXTURE28: 34012,
        TEXTURE29: 34013,
        TEXTURE30: 34014,
        TEXTURE31: 34015,
        ACTIVE_TEXTURE: 34016,
        REPEAT: 10497,
        CLAMP_TO_EDGE: 33071,
        MIRRORED_REPEAT: 33648,
        FLOAT_VEC2: 35664,
        FLOAT_VEC3: 35665,
        FLOAT_VEC4: 35666,
        INT_VEC2: 35667,
        INT_VEC3: 35668,
        INT_VEC4: 35669,
        BOOL: 35670,
        BOOL_VEC2: 35671,
        BOOL_VEC3: 35672,
        BOOL_VEC4: 35673,
        FLOAT_MAT2: 35674,
        FLOAT_MAT3: 35675,
        FLOAT_MAT4: 35676,
        SAMPLER_2D: 35678,
        SAMPLER_CUBE: 35680,
        VERTEX_ATTRIB_ARRAY_ENABLED: 34338,
        VERTEX_ATTRIB_ARRAY_SIZE: 34339,
        VERTEX_ATTRIB_ARRAY_STRIDE: 34340,
        VERTEX_ATTRIB_ARRAY_TYPE: 34341,
        VERTEX_ATTRIB_ARRAY_NORMALIZED: 34922,
        VERTEX_ATTRIB_ARRAY_POINTER: 34373,
        VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,
        IMPLEMENTATION_COLOR_READ_TYPE: 35738,
        IMPLEMENTATION_COLOR_READ_FORMAT: 35739,
        COMPILE_STATUS: 35713,
        LOW_FLOAT: 36336,
        MEDIUM_FLOAT: 36337,
        HIGH_FLOAT: 36338,
        LOW_INT: 36339,
        MEDIUM_INT: 36340,
        HIGH_INT: 36341,
        FRAMEBUFFER: 36160,
        RENDERBUFFER: 36161,
        RGBA4: 32854,
        RGB5_A1: 32855,
        RGB565: 36194,
        DEPTH_COMPONENT16: 33189,
        STENCIL_INDEX: 6401,
        STENCIL_INDEX8: 36168,
        DEPTH_STENCIL: 34041,
        RENDERBUFFER_WIDTH: 36162,
        RENDERBUFFER_HEIGHT: 36163,
        RENDERBUFFER_INTERNAL_FORMAT: 36164,
        RENDERBUFFER_RED_SIZE: 36176,
        RENDERBUFFER_GREEN_SIZE: 36177,
        RENDERBUFFER_BLUE_SIZE: 36178,
        RENDERBUFFER_ALPHA_SIZE: 36179,
        RENDERBUFFER_DEPTH_SIZE: 36180,
        RENDERBUFFER_STENCIL_SIZE: 36181,
        FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,
        FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 36049,
        FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 36050,
        FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 36051,
        COLOR_ATTACHMENT0: 36064,
        DEPTH_ATTACHMENT: 36096,
        STENCIL_ATTACHMENT: 36128,
        DEPTH_STENCIL_ATTACHMENT: 33306,
        NONE: 0,
        FRAMEBUFFER_COMPLETE: 36053,
        FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 36054,
        FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 36055,
        FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 36057,
        FRAMEBUFFER_UNSUPPORTED: 36061,
        FRAMEBUFFER_BINDING: 36006,
        RENDERBUFFER_BINDING: 36007,
        MAX_RENDERBUFFER_SIZE: 34024,
        INVALID_FRAMEBUFFER_OPERATION: 1286,
        UNPACK_FLIP_Y_WEBGL: 37440,
        UNPACK_PREMULTIPLY_ALPHA_WEBGL: 37441,
        CONTEXT_LOST_WEBGL: 37442,
        UNPACK_COLORSPACE_CONVERSION_WEBGL: 37443,
        BROWSER_DEFAULT_WEBGL: 37444,
        COMPRESSED_RGB_S3TC_DXT1_EXT: 33776,
        COMPRESSED_RGBA_S3TC_DXT1_EXT: 33777,
        COMPRESSED_RGBA_S3TC_DXT3_EXT: 33778,
        COMPRESSED_RGBA_S3TC_DXT5_EXT: 33779,
        COMPRESSED_RGB_PVRTC_4BPPV1_IMG: 35840,
        COMPRESSED_RGB_PVRTC_2BPPV1_IMG: 35841,
        COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: 35842,
        COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: 35843,
        COMPRESSED_RGB_ETC1_WEBGL: 36196,
        DOUBLE: 5130,
        READ_BUFFER: 3074,
        UNPACK_ROW_LENGTH: 3314,
        UNPACK_SKIP_ROWS: 3315,
        UNPACK_SKIP_PIXELS: 3316,
        PACK_ROW_LENGTH: 3330,
        PACK_SKIP_ROWS: 3331,
        PACK_SKIP_PIXELS: 3332,
        COLOR: 6144,
        DEPTH: 6145,
        STENCIL: 6146,
        RED: 6403,
        RGB8: 32849,
        RGBA8: 32856,
        RGB10_A2: 32857,
        TEXTURE_BINDING_3D: 32874,
        UNPACK_SKIP_IMAGES: 32877,
        UNPACK_IMAGE_HEIGHT: 32878,
        TEXTURE_3D: 32879,
        TEXTURE_WRAP_R: 32882,
        MAX_3D_TEXTURE_SIZE: 32883,
        UNSIGNED_INT_2_10_10_10_REV: 33640,
        MAX_ELEMENTS_VERTICES: 33e3,
        MAX_ELEMENTS_INDICES: 33001,
        TEXTURE_MIN_LOD: 33082,
        TEXTURE_MAX_LOD: 33083,
        TEXTURE_BASE_LEVEL: 33084,
        TEXTURE_MAX_LEVEL: 33085,
        MIN: 32775,
        MAX: 32776,
        DEPTH_COMPONENT24: 33190,
        MAX_TEXTURE_LOD_BIAS: 34045,
        TEXTURE_COMPARE_MODE: 34892,
        TEXTURE_COMPARE_FUNC: 34893,
        CURRENT_QUERY: 34917,
        QUERY_RESULT: 34918,
        QUERY_RESULT_AVAILABLE: 34919,
        STREAM_READ: 35041,
        STREAM_COPY: 35042,
        STATIC_READ: 35045,
        STATIC_COPY: 35046,
        DYNAMIC_READ: 35049,
        DYNAMIC_COPY: 35050,
        MAX_DRAW_BUFFERS: 34852,
        DRAW_BUFFER0: 34853,
        DRAW_BUFFER1: 34854,
        DRAW_BUFFER2: 34855,
        DRAW_BUFFER3: 34856,
        DRAW_BUFFER4: 34857,
        DRAW_BUFFER5: 34858,
        DRAW_BUFFER6: 34859,
        DRAW_BUFFER7: 34860,
        DRAW_BUFFER8: 34861,
        DRAW_BUFFER9: 34862,
        DRAW_BUFFER10: 34863,
        DRAW_BUFFER11: 34864,
        DRAW_BUFFER12: 34865,
        DRAW_BUFFER13: 34866,
        DRAW_BUFFER14: 34867,
        DRAW_BUFFER15: 34868,
        MAX_FRAGMENT_UNIFORM_COMPONENTS: 35657,
        MAX_VERTEX_UNIFORM_COMPONENTS: 35658,
        SAMPLER_3D: 35679,
        SAMPLER_2D_SHADOW: 35682,
        FRAGMENT_SHADER_DERIVATIVE_HINT: 35723,
        PIXEL_PACK_BUFFER: 35051,
        PIXEL_UNPACK_BUFFER: 35052,
        PIXEL_PACK_BUFFER_BINDING: 35053,
        PIXEL_UNPACK_BUFFER_BINDING: 35055,
        FLOAT_MAT2x3: 35685,
        FLOAT_MAT2x4: 35686,
        FLOAT_MAT3x2: 35687,
        FLOAT_MAT3x4: 35688,
        FLOAT_MAT4x2: 35689,
        FLOAT_MAT4x3: 35690,
        SRGB: 35904,
        SRGB8: 35905,
        SRGB8_ALPHA8: 35907,
        COMPARE_REF_TO_TEXTURE: 34894,
        RGBA32F: 34836,
        RGB32F: 34837,
        RGBA16F: 34842,
        RGB16F: 34843,
        VERTEX_ATTRIB_ARRAY_INTEGER: 35069,
        MAX_ARRAY_TEXTURE_LAYERS: 35071,
        MIN_PROGRAM_TEXEL_OFFSET: 35076,
        MAX_PROGRAM_TEXEL_OFFSET: 35077,
        MAX_VARYING_COMPONENTS: 35659,
        TEXTURE_2D_ARRAY: 35866,
        TEXTURE_BINDING_2D_ARRAY: 35869,
        R11F_G11F_B10F: 35898,
        UNSIGNED_INT_10F_11F_11F_REV: 35899,
        RGB9_E5: 35901,
        UNSIGNED_INT_5_9_9_9_REV: 35902,
        TRANSFORM_FEEDBACK_BUFFER_MODE: 35967,
        MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 35968,
        TRANSFORM_FEEDBACK_VARYINGS: 35971,
        TRANSFORM_FEEDBACK_BUFFER_START: 35972,
        TRANSFORM_FEEDBACK_BUFFER_SIZE: 35973,
        TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 35976,
        RASTERIZER_DISCARD: 35977,
        MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 35978,
        MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 35979,
        INTERLEAVED_ATTRIBS: 35980,
        SEPARATE_ATTRIBS: 35981,
        TRANSFORM_FEEDBACK_BUFFER: 35982,
        TRANSFORM_FEEDBACK_BUFFER_BINDING: 35983,
        RGBA32UI: 36208,
        RGB32UI: 36209,
        RGBA16UI: 36214,
        RGB16UI: 36215,
        RGBA8UI: 36220,
        RGB8UI: 36221,
        RGBA32I: 36226,
        RGB32I: 36227,
        RGBA16I: 36232,
        RGB16I: 36233,
        RGBA8I: 36238,
        RGB8I: 36239,
        RED_INTEGER: 36244,
        RGB_INTEGER: 36248,
        RGBA_INTEGER: 36249,
        SAMPLER_2D_ARRAY: 36289,
        SAMPLER_2D_ARRAY_SHADOW: 36292,
        SAMPLER_CUBE_SHADOW: 36293,
        UNSIGNED_INT_VEC2: 36294,
        UNSIGNED_INT_VEC3: 36295,
        UNSIGNED_INT_VEC4: 36296,
        INT_SAMPLER_2D: 36298,
        INT_SAMPLER_3D: 36299,
        INT_SAMPLER_CUBE: 36300,
        INT_SAMPLER_2D_ARRAY: 36303,
        UNSIGNED_INT_SAMPLER_2D: 36306,
        UNSIGNED_INT_SAMPLER_3D: 36307,
        UNSIGNED_INT_SAMPLER_CUBE: 36308,
        UNSIGNED_INT_SAMPLER_2D_ARRAY: 36311,
        DEPTH_COMPONENT32F: 36012,
        DEPTH32F_STENCIL8: 36013,
        FLOAT_32_UNSIGNED_INT_24_8_REV: 36269,
        FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 33296,
        FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 33297,
        FRAMEBUFFER_ATTACHMENT_RED_SIZE: 33298,
        FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 33299,
        FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 33300,
        FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 33301,
        FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 33302,
        FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 33303,
        FRAMEBUFFER_DEFAULT: 33304,
        UNSIGNED_INT_24_8: 34042,
        DEPTH24_STENCIL8: 35056,
        UNSIGNED_NORMALIZED: 35863,
        DRAW_FRAMEBUFFER_BINDING: 36006,
        READ_FRAMEBUFFER: 36008,
        DRAW_FRAMEBUFFER: 36009,
        READ_FRAMEBUFFER_BINDING: 36010,
        RENDERBUFFER_SAMPLES: 36011,
        FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 36052,
        MAX_COLOR_ATTACHMENTS: 36063,
        COLOR_ATTACHMENT1: 36065,
        COLOR_ATTACHMENT2: 36066,
        COLOR_ATTACHMENT3: 36067,
        COLOR_ATTACHMENT4: 36068,
        COLOR_ATTACHMENT5: 36069,
        COLOR_ATTACHMENT6: 36070,
        COLOR_ATTACHMENT7: 36071,
        COLOR_ATTACHMENT8: 36072,
        COLOR_ATTACHMENT9: 36073,
        COLOR_ATTACHMENT10: 36074,
        COLOR_ATTACHMENT11: 36075,
        COLOR_ATTACHMENT12: 36076,
        COLOR_ATTACHMENT13: 36077,
        COLOR_ATTACHMENT14: 36078,
        COLOR_ATTACHMENT15: 36079,
        FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 36182,
        MAX_SAMPLES: 36183,
        HALF_FLOAT: 5131,
        RG: 33319,
        RG_INTEGER: 33320,
        R8: 33321,
        RG8: 33323,
        R16F: 33325,
        R32F: 33326,
        RG16F: 33327,
        RG32F: 33328,
        R8I: 33329,
        R8UI: 33330,
        R16I: 33331,
        R16UI: 33332,
        R32I: 33333,
        R32UI: 33334,
        RG8I: 33335,
        RG8UI: 33336,
        RG16I: 33337,
        RG16UI: 33338,
        RG32I: 33339,
        RG32UI: 33340,
        VERTEX_ARRAY_BINDING: 34229,
        R8_SNORM: 36756,
        RG8_SNORM: 36757,
        RGB8_SNORM: 36758,
        RGBA8_SNORM: 36759,
        SIGNED_NORMALIZED: 36764,
        COPY_READ_BUFFER: 36662,
        COPY_WRITE_BUFFER: 36663,
        COPY_READ_BUFFER_BINDING: 36662,
        COPY_WRITE_BUFFER_BINDING: 36663,
        UNIFORM_BUFFER: 35345,
        UNIFORM_BUFFER_BINDING: 35368,
        UNIFORM_BUFFER_START: 35369,
        UNIFORM_BUFFER_SIZE: 35370,
        MAX_VERTEX_UNIFORM_BLOCKS: 35371,
        MAX_FRAGMENT_UNIFORM_BLOCKS: 35373,
        MAX_COMBINED_UNIFORM_BLOCKS: 35374,
        MAX_UNIFORM_BUFFER_BINDINGS: 35375,
        MAX_UNIFORM_BLOCK_SIZE: 35376,
        MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 35377,
        MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 35379,
        UNIFORM_BUFFER_OFFSET_ALIGNMENT: 35380,
        ACTIVE_UNIFORM_BLOCKS: 35382,
        UNIFORM_TYPE: 35383,
        UNIFORM_SIZE: 35384,
        UNIFORM_BLOCK_INDEX: 35386,
        UNIFORM_OFFSET: 35387,
        UNIFORM_ARRAY_STRIDE: 35388,
        UNIFORM_MATRIX_STRIDE: 35389,
        UNIFORM_IS_ROW_MAJOR: 35390,
        UNIFORM_BLOCK_BINDING: 35391,
        UNIFORM_BLOCK_DATA_SIZE: 35392,
        UNIFORM_BLOCK_ACTIVE_UNIFORMS: 35394,
        UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 35395,
        UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 35396,
        UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 35398,
        INVALID_INDEX: 4294967295,
        MAX_VERTEX_OUTPUT_COMPONENTS: 37154,
        MAX_FRAGMENT_INPUT_COMPONENTS: 37157,
        MAX_SERVER_WAIT_TIMEOUT: 37137,
        OBJECT_TYPE: 37138,
        SYNC_CONDITION: 37139,
        SYNC_STATUS: 37140,
        SYNC_FLAGS: 37141,
        SYNC_FENCE: 37142,
        SYNC_GPU_COMMANDS_COMPLETE: 37143,
        UNSIGNALED: 37144,
        SIGNALED: 37145,
        ALREADY_SIGNALED: 37146,
        TIMEOUT_EXPIRED: 37147,
        CONDITION_SATISFIED: 37148,
        WAIT_FAILED: 37149,
        SYNC_FLUSH_COMMANDS_BIT: 1,
        VERTEX_ATTRIB_ARRAY_DIVISOR: 35070,
        ANY_SAMPLES_PASSED: 35887,
        ANY_SAMPLES_PASSED_CONSERVATIVE: 36202,
        SAMPLER_BINDING: 35097,
        RGB10_A2UI: 36975,
        INT_2_10_10_10_REV: 36255,
        TRANSFORM_FEEDBACK: 36386,
        TRANSFORM_FEEDBACK_PAUSED: 36387,
        TRANSFORM_FEEDBACK_ACTIVE: 36388,
        TRANSFORM_FEEDBACK_BINDING: 36389,
        COMPRESSED_R11_EAC: 37488,
        COMPRESSED_SIGNED_R11_EAC: 37489,
        COMPRESSED_RG11_EAC: 37490,
        COMPRESSED_SIGNED_RG11_EAC: 37491,
        COMPRESSED_RGB8_ETC2: 37492,
        COMPRESSED_SRGB8_ETC2: 37493,
        COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: 37494,
        COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: 37495,
        COMPRESSED_RGBA8_ETC2_EAC: 37496,
        COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: 37497,
        TEXTURE_IMMUTABLE_FORMAT: 37167,
        MAX_ELEMENT_INDEX: 36203,
        TEXTURE_IMMUTABLE_LEVELS: 33503,
        MAX_TEXTURE_MAX_ANISOTROPY_EXT: 34047
      };
      return e(t);
    }),
    define(
      "Core/ComponentDatatype",
      [
        "./defaultValue",
        "./defined",
        "./DeveloperError",
        "./FeatureDetection",
        "./freezeObject",
        "./WebGLConstants"
      ],
      function(e, t, n, r, i, a) {
        "use strict";
        if (!r.supportsTypedArrays()) return {};
        var o = {
          BYTE: a.BYTE,
          UNSIGNED_BYTE: a.UNSIGNED_BYTE,
          SHORT: a.SHORT,
          UNSIGNED_SHORT: a.UNSIGNED_SHORT,
          INT: a.INT,
          UNSIGNED_INT: a.UNSIGNED_INT,
          FLOAT: a.FLOAT,
          DOUBLE: a.DOUBLE
        };
        return (
          (o.getSizeInBytes = function(e) {
            switch (e) {
              case o.BYTE:
                return Int8Array.BYTES_PER_ELEMENT;
              case o.UNSIGNED_BYTE:
                return Uint8Array.BYTES_PER_ELEMENT;
              case o.SHORT:
                return Int16Array.BYTES_PER_ELEMENT;
              case o.UNSIGNED_SHORT:
                return Uint16Array.BYTES_PER_ELEMENT;
              case o.INT:
                return Int32Array.BYTES_PER_ELEMENT;
              case o.UNSIGNED_INT:
                return Uint32Array.BYTES_PER_ELEMENT;
              case o.FLOAT:
                return Float32Array.BYTES_PER_ELEMENT;
              case o.DOUBLE:
                return Float64Array.BYTES_PER_ELEMENT;
            }
          }),
          (o.fromTypedArray = function(e) {
            return e instanceof Int8Array
              ? o.BYTE
              : e instanceof Uint8Array
                ? o.UNSIGNED_BYTE
                : e instanceof Int16Array
                  ? o.SHORT
                  : e instanceof Uint16Array
                    ? o.UNSIGNED_SHORT
                    : e instanceof Int32Array
                      ? o.INT
                      : e instanceof Uint32Array
                        ? o.UNSIGNED_INT
                        : e instanceof Float32Array
                          ? o.FLOAT
                          : e instanceof Float64Array ? o.DOUBLE : void 0;
          }),
          (o.validate = function(e) {
            return (
              t(e) &&
              (e === o.BYTE ||
                e === o.UNSIGNED_BYTE ||
                e === o.SHORT ||
                e === o.UNSIGNED_SHORT ||
                e === o.INT ||
                e === o.UNSIGNED_INT ||
                e === o.FLOAT ||
                e === o.DOUBLE)
            );
          }),
          (o.createTypedArray = function(e, t) {
            switch (e) {
              case o.BYTE:
                return new Int8Array(t);
              case o.UNSIGNED_BYTE:
                return new Uint8Array(t);
              case o.SHORT:
                return new Int16Array(t);
              case o.UNSIGNED_SHORT:
                return new Uint16Array(t);
              case o.INT:
                return new Int32Array(t);
              case o.UNSIGNED_INT:
                return new Uint32Array(t);
              case o.FLOAT:
                return new Float32Array(t);
              case o.DOUBLE:
                return new Float64Array(t);
            }
          }),
          (o.createArrayBufferView = function(t, n, r, i) {
            switch (((r = e(r, 0)),
            (i = e(i, (n.byteLength - r) / o.getSizeInBytes(t))),
            t)) {
              case o.BYTE:
                return new Int8Array(n, r, i);
              case o.UNSIGNED_BYTE:
                return new Uint8Array(n, r, i);
              case o.SHORT:
                return new Int16Array(n, r, i);
              case o.UNSIGNED_SHORT:
                return new Uint16Array(n, r, i);
              case o.INT:
                return new Int32Array(n, r, i);
              case o.UNSIGNED_INT:
                return new Uint32Array(n, r, i);
              case o.FLOAT:
                return new Float32Array(n, r, i);
              case o.DOUBLE:
                return new Float64Array(n, r, i);
            }
          }),
          (o.fromName = function(e) {
            switch (e) {
              case "BYTE":
                return o.BYTE;
              case "UNSIGNED_BYTE":
                return o.UNSIGNED_BYTE;
              case "SHORT":
                return o.SHORT;
              case "UNSIGNED_SHORT":
                return o.UNSIGNED_SHORT;
              case "INT":
                return o.INT;
              case "UNSIGNED_INT":
                return o.UNSIGNED_INT;
              case "FLOAT":
                return o.FLOAT;
              case "DOUBLE":
                return o.DOUBLE;
            }
          }),
          i(o)
        );
      }
    ),
    define(
      "Core/HeadingPitchRoll",
      ["./defaultValue", "./defined", "./DeveloperError", "./Math"],
      function(e, t, n, r) {
        "use strict";
        function i(t, n, r) {
          (this.heading = e(t, 0)),
            (this.pitch = e(n, 0)),
            (this.roll = e(r, 0));
        }
        return (
          (i.fromQuaternion = function(e, n) {
            t(n) || (n = new i());
            var r = 2 * (e.w * e.y - e.z * e.x),
              a = 1 - 2 * (e.x * e.x + e.y * e.y),
              o = 2 * (e.w * e.x + e.y * e.z),
              u = 1 - 2 * (e.y * e.y + e.z * e.z),
              E = 2 * (e.w * e.z + e.x * e.y);
            return (
              (n.heading = -Math.atan2(E, u)),
              (n.roll = Math.atan2(o, a)),
              (n.pitch = -Math.asin(r)),
              n
            );
          }),
          (i.fromDegrees = function(e, n, a, o) {
            return (
              t(o) || (o = new i()),
              (o.heading = e * r.RADIANS_PER_DEGREE),
              (o.pitch = n * r.RADIANS_PER_DEGREE),
              (o.roll = a * r.RADIANS_PER_DEGREE),
              o
            );
          }),
          (i.clone = function(e, n) {
            if (t(e))
              return t(n)
                ? ((n.heading = e.heading),
                  (n.pitch = e.pitch),
                  (n.roll = e.roll),
                  n)
                : new i(e.heading, e.pitch, e.roll);
          }),
          (i.equals = function(e, n) {
            return (
              e === n ||
              (t(e) &&
                t(n) &&
                e.heading === n.heading &&
                e.pitch === n.pitch &&
                e.roll === n.roll)
            );
          }),
          (i.equalsEpsilon = function(e, n, i, a) {
            return (
              e === n ||
              (t(e) &&
                t(n) &&
                r.equalsEpsilon(e.heading, n.heading, i, a) &&
                r.equalsEpsilon(e.pitch, n.pitch, i, a) &&
                r.equalsEpsilon(e.roll, n.roll, i, a))
            );
          }),
          (i.prototype.clone = function(e) {
            return i.clone(this, e);
          }),
          (i.prototype.equals = function(e) {
            return i.equals(this, e);
          }),
          (i.prototype.equalsEpsilon = function(e, t, n) {
            return i.equalsEpsilon(this, e, t, n);
          }),
          (i.prototype.toString = function() {
            return (
              "(" + this.heading + ", " + this.pitch + ", " + this.roll + ")"
            );
          }),
          i
        );
      }
    ),
    define(
      "Core/Quaternion",
      [
        "./Cartesian3",
        "./Check",
        "./defaultValue",
        "./defined",
        "./FeatureDetection",
        "./freezeObject",
        "./HeadingPitchRoll",
        "./Math",
        "./Matrix3"
      ],
      function(e, t, n, r, i, a, o, u, E) {
        "use strict";
        function s(e, t, r, i) {
          (this.x = n(e, 0)),
            (this.y = n(t, 0)),
            (this.z = n(r, 0)),
            (this.w = n(i, 0));
        }
        var c = new e();
        s.fromAxisAngle = function(t, n, i) {
          var a = n / 2,
            o = Math.sin(a);
          c = e.normalize(t, c);
          var u = c.x * o,
            E = c.y * o,
            _ = c.z * o,
            l = Math.cos(a);
          return r(i)
            ? ((i.x = u), (i.y = E), (i.z = _), (i.w = l), i)
            : new s(u, E, _, l);
        };
        var _ = [1, 2, 0],
          l = new Array(3);
        s.fromRotationMatrix = function(e, t) {
          var n,
            i,
            a,
            o,
            u,
            c = e[E.COLUMN0ROW0],
            T = e[E.COLUMN1ROW1],
            R = e[E.COLUMN2ROW2],
            f = c + T + R;
          if (f > 0)
            (n = Math.sqrt(f + 1)),
              (u = 0.5 * n),
              (n = 0.5 / n),
              (i = (e[E.COLUMN1ROW2] - e[E.COLUMN2ROW1]) * n),
              (a = (e[E.COLUMN2ROW0] - e[E.COLUMN0ROW2]) * n),
              (o = (e[E.COLUMN0ROW1] - e[E.COLUMN1ROW0]) * n);
          else {
            var h = _,
              A = 0;
            T > c && (A = 1), R > c && R > T && (A = 2);
            var d = h[A],
              N = h[d];
            n = Math.sqrt(
              e[E.getElementIndex(A, A)] -
                e[E.getElementIndex(d, d)] -
                e[E.getElementIndex(N, N)] +
                1
            );
            var I = l;
            (I[A] = 0.5 * n),
              (n = 0.5 / n),
              (u =
                (e[E.getElementIndex(N, d)] - e[E.getElementIndex(d, N)]) * n),
              (I[d] =
                (e[E.getElementIndex(d, A)] + e[E.getElementIndex(A, d)]) * n),
              (I[N] =
                (e[E.getElementIndex(N, A)] + e[E.getElementIndex(A, N)]) * n),
              (i = -I[0]),
              (a = -I[1]),
              (o = -I[2]);
          }
          return r(t)
            ? ((t.x = i), (t.y = a), (t.z = o), (t.w = u), t)
            : new s(i, a, o, u);
        };
        var T = new s(),
          R = new s(),
          f = new s(),
          h = new s();
        s.fromHeadingPitchRoll = function(t, n) {
          return (
            (h = s.fromAxisAngle(e.UNIT_X, t.roll, T)),
            (f = s.fromAxisAngle(e.UNIT_Y, -t.pitch, n)),
            (n = s.multiply(f, h, f)),
            (R = s.fromAxisAngle(e.UNIT_Z, -t.heading, T)),
            s.multiply(R, n, n)
          );
        };
        var A = new e(),
          d = new e(),
          N = new s(),
          I = new s(),
          S = new s();
        (s.packedLength = 4),
          (s.pack = function(e, t, r) {
            return (
              (r = n(r, 0)),
              (t[r++] = e.x),
              (t[r++] = e.y),
              (t[r++] = e.z),
              (t[r] = e.w),
              t
            );
          }),
          (s.unpack = function(e, t, i) {
            return (
              (t = n(t, 0)),
              r(i) || (i = new s()),
              (i.x = e[t]),
              (i.y = e[t + 1]),
              (i.z = e[t + 2]),
              (i.w = e[t + 3]),
              i
            );
          }),
          (s.packedInterpolationLength = 3),
          (s.convertPackedArrayForInterpolation = function(e, t, n, r) {
            s.unpack(e, 4 * n, S), s.conjugate(S, S);
            for (var i = 0, a = n - t + 1; i < a; i++) {
              var o = 3 * i;
              s.unpack(e, 4 * (t + i), N),
                s.multiply(N, S, N),
                N.w < 0 && s.negate(N, N),
                s.computeAxis(N, A);
              var u = s.computeAngle(N);
              (r[o] = A.x * u), (r[o + 1] = A.y * u), (r[o + 2] = A.z * u);
            }
          }),
          (s.unpackInterpolationResult = function(t, n, i, a, o) {
            r(o) || (o = new s()), e.fromArray(t, 0, d);
            var u = e.magnitude(d);
            return (
              s.unpack(n, 4 * a, I),
              0 === u ? s.clone(s.IDENTITY, N) : s.fromAxisAngle(d, u, N),
              s.multiply(N, I, o)
            );
          }),
          (s.clone = function(e, t) {
            if (r(e))
              return r(t)
                ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t)
                : new s(e.x, e.y, e.z, e.w);
          }),
          (s.conjugate = function(e, t) {
            return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = e.w), t;
          }),
          (s.magnitudeSquared = function(e) {
            return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w;
          }),
          (s.magnitude = function(e) {
            return Math.sqrt(s.magnitudeSquared(e));
          }),
          (s.normalize = function(e, t) {
            var n = 1 / s.magnitude(e),
              r = e.x * n,
              i = e.y * n,
              a = e.z * n,
              o = e.w * n;
            return (t.x = r), (t.y = i), (t.z = a), (t.w = o), t;
          }),
          (s.inverse = function(e, t) {
            var n = s.magnitudeSquared(e);
            return (t = s.conjugate(e, t)), s.multiplyByScalar(t, 1 / n, t);
          }),
          (s.add = function(e, t, n) {
            return (
              (n.x = e.x + t.x),
              (n.y = e.y + t.y),
              (n.z = e.z + t.z),
              (n.w = e.w + t.w),
              n
            );
          }),
          (s.subtract = function(e, t, n) {
            return (
              (n.x = e.x - t.x),
              (n.y = e.y - t.y),
              (n.z = e.z - t.z),
              (n.w = e.w - t.w),
              n
            );
          }),
          (s.negate = function(e, t) {
            return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = -e.w), t;
          }),
          (s.dot = function(e, t) {
            return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
          }),
          (s.multiply = function(e, t, n) {
            var r = e.x,
              i = e.y,
              a = e.z,
              o = e.w,
              u = t.x,
              E = t.y,
              s = t.z,
              c = t.w,
              _ = o * u + r * c + i * s - a * E,
              l = o * E - r * s + i * c + a * u,
              T = o * s + r * E - i * u + a * c,
              R = o * c - r * u - i * E - a * s;
            return (n.x = _), (n.y = l), (n.z = T), (n.w = R), n;
          }),
          (s.multiplyByScalar = function(e, t, n) {
            return (
              (n.x = e.x * t),
              (n.y = e.y * t),
              (n.z = e.z * t),
              (n.w = e.w * t),
              n
            );
          }),
          (s.divideByScalar = function(e, t, n) {
            return (
              (n.x = e.x / t),
              (n.y = e.y / t),
              (n.z = e.z / t),
              (n.w = e.w / t),
              n
            );
          }),
          (s.computeAxis = function(e, t) {
            var n = e.w;
            if (Math.abs(n - 1) < u.EPSILON6) return (t.x = t.y = t.z = 0), t;
            var r = 1 / Math.sqrt(1 - n * n);
            return (t.x = e.x * r), (t.y = e.y * r), (t.z = e.z * r), t;
          }),
          (s.computeAngle = function(e) {
            return Math.abs(e.w - 1) < u.EPSILON6 ? 0 : 2 * Math.acos(e.w);
          });
        var M = new s();
        s.lerp = function(e, t, n, r) {
          return (
            (M = s.multiplyByScalar(t, n, M)),
            (r = s.multiplyByScalar(e, 1 - n, r)),
            s.add(M, r, r)
          );
        };
        var y = new s(),
          m = new s(),
          O = new s();
        (s.slerp = function(e, t, n, r) {
          var i = s.dot(e, t),
            a = t;
          if (
            (i < 0 && ((i = -i), (a = y = s.negate(t, y))), 1 - i < u.EPSILON6)
          )
            return s.lerp(e, a, n, r);
          var o = Math.acos(i);
          return (
            (m = s.multiplyByScalar(e, Math.sin((1 - n) * o), m)),
            (O = s.multiplyByScalar(a, Math.sin(n * o), O)),
            (r = s.add(m, O, r)),
            s.multiplyByScalar(r, 1 / Math.sin(o), r)
          );
        }),
          (s.log = function(t, n) {
            var r = u.acosClamped(t.w),
              i = 0;
            return (
              0 !== r && (i = r / Math.sin(r)), e.multiplyByScalar(t, i, n)
            );
          }),
          (s.exp = function(t, n) {
            var r = e.magnitude(t),
              i = 0;
            return (
              0 !== r && (i = Math.sin(r) / r),
              (n.x = t.x * i),
              (n.y = t.y * i),
              (n.z = t.z * i),
              (n.w = Math.cos(r)),
              n
            );
          });
        var p = new e(),
          C = new e(),
          U = new s(),
          g = new s();
        (s.computeInnerQuadrangle = function(t, n, r, i) {
          var a = s.conjugate(n, U);
          s.multiply(a, r, g);
          var o = s.log(g, p);
          s.multiply(a, t, g);
          var u = s.log(g, C);
          return (
            e.add(o, u, o),
            e.multiplyByScalar(o, 0.25, o),
            e.negate(o, o),
            s.exp(o, U),
            s.multiply(n, U, i)
          );
        }),
          (s.squad = function(e, t, n, r, i, a) {
            var o = s.slerp(e, t, i, U),
              u = s.slerp(n, r, i, g);
            return s.slerp(o, u, 2 * i * (1 - i), a);
          });
        for (
          var w = new s(),
            L = 1.9011074535173003,
            x = i.supportsTypedArrays() ? new Float32Array(8) : [],
            P = i.supportsTypedArrays() ? new Float32Array(8) : [],
            v = i.supportsTypedArrays() ? new Float32Array(8) : [],
            F = i.supportsTypedArrays() ? new Float32Array(8) : [],
            B = 0;
          B < 7;
          ++B
        ) {
          var D = B + 1,
            z = 2 * D + 1;
          (x[B] = 1 / (D * z)), (P[B] = D / z);
        }
        return (
          (x[7] = L / 136),
          (P[7] = 8 * L / 17),
          (s.fastSlerp = function(e, t, n, r) {
            var i,
              a = s.dot(e, t);
            a >= 0 ? (i = 1) : ((i = -1), (a = -a));
            for (
              var o = a - 1, u = 1 - n, E = n * n, c = u * u, _ = 7;
              _ >= 0;
              --_
            )
              (v[_] = (x[_] * E - P[_]) * o), (F[_] = (x[_] * c - P[_]) * o);
            var l =
                i *
                n *
                (1 +
                  v[0] *
                    (1 +
                      v[1] *
                        (1 +
                          v[2] *
                            (1 +
                              v[3] *
                                (1 +
                                  v[4] *
                                    (1 + v[5] * (1 + v[6] * (1 + v[7])))))))),
              T =
                u *
                (1 +
                  F[0] *
                    (1 +
                      F[1] *
                        (1 +
                          F[2] *
                            (1 +
                              F[3] *
                                (1 +
                                  F[4] *
                                    (1 + F[5] * (1 + F[6] * (1 + F[7])))))))),
              R = s.multiplyByScalar(e, T, w);
            return s.multiplyByScalar(t, l, r), s.add(R, r, r);
          }),
          (s.fastSquad = function(e, t, n, r, i, a) {
            var o = s.fastSlerp(e, t, i, U),
              u = s.fastSlerp(n, r, i, g);
            return s.fastSlerp(o, u, 2 * i * (1 - i), a);
          }),
          (s.equals = function(e, t) {
            return (
              e === t ||
              (r(e) &&
                r(t) &&
                e.x === t.x &&
                e.y === t.y &&
                e.z === t.z &&
                e.w === t.w)
            );
          }),
          (s.equalsEpsilon = function(e, t, n) {
            return (
              e === t ||
              (r(e) &&
                r(t) &&
                Math.abs(e.x - t.x) <= n &&
                Math.abs(e.y - t.y) <= n &&
                Math.abs(e.z - t.z) <= n &&
                Math.abs(e.w - t.w) <= n)
            );
          }),
          (s.ZERO = a(new s(0, 0, 0, 0))),
          (s.IDENTITY = a(new s(0, 0, 0, 1))),
          (s.prototype.clone = function(e) {
            return s.clone(this, e);
          }),
          (s.prototype.equals = function(e) {
            return s.equals(this, e);
          }),
          (s.prototype.equalsEpsilon = function(e, t) {
            return s.equalsEpsilon(this, e, t);
          }),
          (s.prototype.toString = function() {
            return (
              "(" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")"
            );
          }),
          s
        );
      }
    ),
    define(
      "Core/EllipseGeometryLibrary",
      ["./Cartesian3", "./Math", "./Matrix3", "./Quaternion"],
      function(e, t, n, r) {
        "use strict";
        function i(t, i, a, c, _, l, T, R, f, h) {
          var A = t + i;
          e.multiplyByScalar(c, Math.cos(A), o),
            e.multiplyByScalar(a, Math.sin(A), u),
            e.add(o, u, o);
          var d = Math.cos(t);
          d *= d;
          var N = Math.sin(t);
          N *= N;
          var I = l / Math.sqrt(T * d + _ * N),
            S = I / R;
          return (
            r.fromAxisAngle(o, S, E),
            n.fromQuaternion(E, s),
            n.multiplyByVector(s, f, h),
            e.normalize(h, h),
            e.multiplyByScalar(h, R, h),
            h
          );
        }
        var a = {},
          o = new e(),
          u = new e(),
          E = new r(),
          s = new n(),
          c = new e(),
          _ = new e(),
          l = new e(),
          T = new e();
        a.raisePositionsToHeight = function(t, n, r) {
          for (
            var i = n.ellipsoid,
              a = n.height,
              o = n.extrudedHeight,
              u = r ? t.length / 3 * 2 : t.length / 3,
              E = new Float64Array(3 * u),
              s = t.length,
              R = r ? s : 0,
              f = 0;
            f < s;
            f += 3
          ) {
            var h = f + 1,
              A = f + 2,
              d = e.fromArray(t, f, c);
            i.scaleToGeodeticSurface(d, d);
            var N = e.clone(d, _),
              I = i.geodeticSurfaceNormal(d, T),
              S = e.multiplyByScalar(I, a, l);
            e.add(d, S, d),
              r &&
                (e.multiplyByScalar(I, o, S),
                e.add(N, S, N),
                (E[f + R] = N.x),
                (E[h + R] = N.y),
                (E[A + R] = N.z)),
              (E[f] = d.x),
              (E[h] = d.y),
              (E[A] = d.z);
          }
          return E;
        };
        var R = new e(),
          f = new e(),
          h = new e();
        return (
          (a.computeEllipsePositions = function(n, r, a) {
            var o = n.semiMinorAxis,
              u = n.semiMajorAxis,
              E = n.rotation,
              s = n.center,
              T = 8 * n.granularity,
              A = o * o,
              d = u * u,
              N = u * o,
              I = e.magnitude(s),
              S = e.normalize(s, R),
              M = e.cross(e.UNIT_Z, s, f);
            M = e.normalize(M, M);
            var y = e.cross(S, M, h),
              m = 1 + Math.ceil(t.PI_OVER_TWO / T),
              O = t.PI_OVER_TWO / (m - 1),
              p = t.PI_OVER_TWO - m * O;
            p < 0 && (m -= Math.ceil(Math.abs(p) / O));
            var C,
              U,
              g,
              w,
              L,
              x = 2 * (m * (m + 2)),
              P = r ? new Array(3 * x) : void 0,
              v = 0,
              F = c,
              B = _,
              D = 4 * m * 3,
              z = D - 1,
              G = 0,
              b = a ? new Array(D) : void 0;
            for (
              p = t.PI_OVER_TWO,
                F = i(p, E, y, M, A, N, d, I, S, F),
                r && ((P[v++] = F.x), (P[v++] = F.y), (P[v++] = F.z)),
                a && ((b[z--] = F.z), (b[z--] = F.y), (b[z--] = F.x)),
                p = t.PI_OVER_TWO - O,
                C = 1;
              C < m + 1;
              ++C
            ) {
              if (
                ((F = i(p, E, y, M, A, N, d, I, S, F)),
                (B = i(Math.PI - p, E, y, M, A, N, d, I, S, B)),
                r)
              ) {
                for (
                  P[v++] = F.x,
                    P[v++] = F.y,
                    P[v++] = F.z,
                    g = 2 * C + 2,
                    U = 1;
                  U < g - 1;
                  ++U
                )
                  (w = U / (g - 1)),
                    (L = e.lerp(F, B, w, l)),
                    (P[v++] = L.x),
                    (P[v++] = L.y),
                    (P[v++] = L.z);
                (P[v++] = B.x), (P[v++] = B.y), (P[v++] = B.z);
              }
              a &&
                ((b[z--] = F.z),
                (b[z--] = F.y),
                (b[z--] = F.x),
                (b[G++] = B.x),
                (b[G++] = B.y),
                (b[G++] = B.z)),
                (p = t.PI_OVER_TWO - (C + 1) * O);
            }
            for (C = m; C > 1; --C) {
              if (
                ((p = t.PI_OVER_TWO - (C - 1) * O),
                (F = i(-p, E, y, M, A, N, d, I, S, F)),
                (B = i(p + Math.PI, E, y, M, A, N, d, I, S, B)),
                r)
              ) {
                for (
                  P[v++] = F.x,
                    P[v++] = F.y,
                    P[v++] = F.z,
                    g = 2 * (C - 1) + 2,
                    U = 1;
                  U < g - 1;
                  ++U
                )
                  (w = U / (g - 1)),
                    (L = e.lerp(F, B, w, l)),
                    (P[v++] = L.x),
                    (P[v++] = L.y),
                    (P[v++] = L.z);
                (P[v++] = B.x), (P[v++] = B.y), (P[v++] = B.z);
              }
              a &&
                ((b[z--] = F.z),
                (b[z--] = F.y),
                (b[z--] = F.x),
                (b[G++] = B.x),
                (b[G++] = B.y),
                (b[G++] = B.z));
            }
            (p = t.PI_OVER_TWO), (F = i(-p, E, y, M, A, N, d, I, S, F));
            var X = {};
            return (
              r &&
                ((P[v++] = F.x),
                (P[v++] = F.y),
                (P[v++] = F.z),
                (X.positions = P),
                (X.numPts = m)),
              a &&
                ((b[z--] = F.z),
                (b[z--] = F.y),
                (b[z--] = F.x),
                (X.outerPositions = b)),
              X
            );
          }),
          a
        );
      }
    ),
    define("Core/GeometryType", ["./freezeObject"], function(e) {
      "use strict";
      var t = { NONE: 0, TRIANGLES: 1, LINES: 2, POLYLINES: 3 };
      return e(t);
    }),
    define(
      "Core/PrimitiveType",
      ["./freezeObject", "./WebGLConstants"],
      function(e, t) {
        "use strict";
        var n = {
          POINTS: t.POINTS,
          LINES: t.LINES,
          LINE_LOOP: t.LINE_LOOP,
          LINE_STRIP: t.LINE_STRIP,
          TRIANGLES: t.TRIANGLES,
          TRIANGLE_STRIP: t.TRIANGLE_STRIP,
          TRIANGLE_FAN: t.TRIANGLE_FAN,
          validate: function(e) {
            return (
              e === n.POINTS ||
              e === n.LINES ||
              e === n.LINE_LOOP ||
              e === n.LINE_STRIP ||
              e === n.TRIANGLES ||
              e === n.TRIANGLE_STRIP ||
              e === n.TRIANGLE_FAN
            );
          }
        };
        return e(n);
      }
    ),
    define(
      "Core/Geometry",
      [
        "./Check",
        "./defaultValue",
        "./defined",
        "./DeveloperError",
        "./GeometryType",
        "./PrimitiveType"
      ],
      function(e, t, n, r, i, a) {
        "use strict";
        function o(e) {
          (e = t(e, t.EMPTY_OBJECT)),
            (this.attributes = e.attributes),
            (this.indices = e.indices),
            (this.primitiveType = t(e.primitiveType, a.TRIANGLES)),
            (this.boundingSphere = e.boundingSphere),
            (this.geometryType = t(e.geometryType, i.NONE)),
            (this.boundingSphereCV = e.boundingSphereCV);
        }
        return (
          (o.computeNumberOfVertices = function(e) {
            var t = -1;
            for (var r in e.attributes)
              if (
                e.attributes.hasOwnProperty(r) &&
                n(e.attributes[r]) &&
                n(e.attributes[r].values)
              ) {
                var i = e.attributes[r],
                  a = i.values.length / i.componentsPerAttribute;
                t = a;
              }
            return t;
          }),
          o
        );
      }
    ),
    define(
      "Core/GeometryAttribute",
      ["./defaultValue", "./defined", "./DeveloperError"],
      function(e, t, n) {
        "use strict";
        function r(t) {
          (t = e(t, e.EMPTY_OBJECT)),
            (this.componentDatatype = t.componentDatatype),
            (this.componentsPerAttribute = t.componentsPerAttribute),
            (this.normalize = e(t.normalize, !1)),
            (this.values = t.values);
        }
        return r;
      }
    ),
    define("Core/GeometryAttributes", ["./defaultValue"], function(e) {
      "use strict";
      function t(t) {
        (t = e(t, e.EMPTY_OBJECT)),
          (this.position = t.position),
          (this.normal = t.normal),
          (this.st = t.st),
          (this.bitangent = t.bitangent),
          (this.tangent = t.tangent),
          (this.color = t.color);
      }
      return t;
    }),
    define(
      "Core/IndexDatatype",
      [
        "./defined",
        "./DeveloperError",
        "./freezeObject",
        "./Math",
        "./WebGLConstants"
      ],
      function(e, t, n, r, i) {
        "use strict";
        var a = {
          UNSIGNED_BYTE: i.UNSIGNED_BYTE,
          UNSIGNED_SHORT: i.UNSIGNED_SHORT,
          UNSIGNED_INT: i.UNSIGNED_INT
        };
        return (
          (a.getSizeInBytes = function(e) {
            switch (e) {
              case a.UNSIGNED_BYTE:
                return Uint8Array.BYTES_PER_ELEMENT;
              case a.UNSIGNED_SHORT:
                return Uint16Array.BYTES_PER_ELEMENT;
              case a.UNSIGNED_INT:
                return Uint32Array.BYTES_PER_ELEMENT;
            }
          }),
          (a.validate = function(t) {
            return (
              e(t) &&
              (t === a.UNSIGNED_BYTE ||
                t === a.UNSIGNED_SHORT ||
                t === a.UNSIGNED_INT)
            );
          }),
          (a.createTypedArray = function(e, t) {
            return e >= r.SIXTY_FOUR_KILOBYTES
              ? new Uint32Array(t)
              : new Uint16Array(t);
          }),
          (a.createTypedArrayFromArrayBuffer = function(e, t, n, i) {
            return e >= r.SIXTY_FOUR_KILOBYTES
              ? new Uint32Array(t, n, i)
              : new Uint16Array(t, n, i);
          }),
          n(a)
        );
      }
    ),
    define(
      "Core/EllipseOutlineGeometry",
      [
        "./BoundingSphere",
        "./Cartesian3",
        "./ComponentDatatype",
        "./defaultValue",
        "./defined",
        "./DeveloperError",
        "./EllipseGeometryLibrary",
        "./Ellipsoid",
        "./Geometry",
        "./GeometryAttribute",
        "./GeometryAttributes",
        "./IndexDatatype",
        "./Math",
        "./PrimitiveType"
      ],
      function(e, t, n, r, i, a, o, u, E, s, c, _, l, T) {
        "use strict";
        function R(r) {
          var i = r.center;
          (d = t.multiplyByScalar(
            r.ellipsoid.geodeticSurfaceNormal(i, d),
            r.height,
            d
          )),
            (d = t.add(i, d, d));
          for (
            var a = new e(d, r.semiMajorAxis),
              u = o.computeEllipsePositions(r, !1, !0).outerPositions,
              E = new c({
                position: new s({
                  componentDatatype: n.DOUBLE,
                  componentsPerAttribute: 3,
                  values: o.raisePositionsToHeight(u, r, !1)
                })
              }),
              l = u.length / 3,
              T = _.createTypedArray(l, 2 * l),
              R = 0,
              f = 0;
            f < l;
            ++f
          )
            (T[R++] = f), (T[R++] = (f + 1) % l);
          return { boundingSphere: a, attributes: E, indices: T };
        }
        function f(i) {
          var a = i.center,
            u = i.ellipsoid,
            E = i.semiMajorAxis,
            T = t.multiplyByScalar(u.geodeticSurfaceNormal(a, A), i.height, A);
          (N.center = t.add(a, T, N.center)),
            (N.radius = E),
            (T = t.multiplyByScalar(
              u.geodeticSurfaceNormal(a, T),
              i.extrudedHeight,
              T
            )),
            (I.center = t.add(a, T, I.center)),
            (I.radius = E);
          var R = o.computeEllipsePositions(i, !1, !0).outerPositions,
            f = new c({
              position: new s({
                componentDatatype: n.DOUBLE,
                componentsPerAttribute: 3,
                values: o.raisePositionsToHeight(R, i, !0)
              })
            });
          R = f.position.values;
          var h = e.union(N, I),
            d = R.length / 3,
            S = r(i.numberOfVerticalLines, 16);
          S = l.clamp(S, 0, d / 2);
          var M = _.createTypedArray(d, 2 * d + 2 * S);
          d /= 2;
          var y,
            m = 0;
          for (y = 0; y < d; ++y)
            (M[m++] = y),
              (M[m++] = (y + 1) % d),
              (M[m++] = y + d),
              (M[m++] = (y + 1) % d + d);
          var O;
          if (S > 0) {
            var p = Math.min(S, d);
            O = Math.round(d / p);
            var C = Math.min(O * S, d);
            for (y = 0; y < C; y += O) (M[m++] = y), (M[m++] = y + d);
          }
          return { boundingSphere: h, attributes: f, indices: M };
        }
        function h(e) {
          e = r(e, r.EMPTY_OBJECT);
          var n = e.center,
            a = r(e.ellipsoid, u.WGS84),
            o = e.semiMajorAxis,
            E = e.semiMinorAxis,
            s = r(e.granularity, l.RADIANS_PER_DEGREE),
            c = r(e.height, 0),
            _ = e.extrudedHeight,
            T = i(_) && Math.abs(c - _) > 1;
          (this._center = t.clone(n)),
            (this._semiMajorAxis = o),
            (this._semiMinorAxis = E),
            (this._ellipsoid = u.clone(a)),
            (this._rotation = r(e.rotation, 0)),
            (this._height = c),
            (this._granularity = s),
            (this._extrudedHeight = _),
            (this._extrude = T),
            (this._numberOfVerticalLines = Math.max(
              r(e.numberOfVerticalLines, 16),
              0
            )),
            (this._workerName = "createEllipseOutlineGeometry");
        }
        var A = new t(),
          d = new t(),
          N = new e(),
          I = new e();
        (h.packedLength = t.packedLength + u.packedLength + 9),
          (h.pack = function(e, n, a) {
            return (
              (a = r(a, 0)),
              t.pack(e._center, n, a),
              (a += t.packedLength),
              u.pack(e._ellipsoid, n, a),
              (a += u.packedLength),
              (n[a++] = e._semiMajorAxis),
              (n[a++] = e._semiMinorAxis),
              (n[a++] = e._rotation),
              (n[a++] = e._height),
              (n[a++] = e._granularity),
              (n[a++] = i(e._extrudedHeight) ? 1 : 0),
              (n[a++] = r(e._extrudedHeight, 0)),
              (n[a++] = e._extrude ? 1 : 0),
              (n[a] = e._numberOfVerticalLines),
              n
            );
          });
        var S = new t(),
          M = new u(),
          y = {
            center: S,
            ellipsoid: M,
            semiMajorAxis: void 0,
            semiMinorAxis: void 0,
            rotation: void 0,
            height: void 0,
            granularity: void 0,
            extrudedHeight: void 0,
            numberOfVerticalLines: void 0
          };
        return (
          (h.unpack = function(e, n, a) {
            n = r(n, 0);
            var o = t.unpack(e, n, S);
            n += t.packedLength;
            var E = u.unpack(e, n, M);
            n += u.packedLength;
            var s = e[n++],
              c = e[n++],
              _ = e[n++],
              l = e[n++],
              T = e[n++],
              R = e[n++],
              f = e[n++],
              A = 1 === e[n++],
              d = e[n];
            return i(a)
              ? ((a._center = t.clone(o, a._center)),
                (a._ellipsoid = u.clone(E, a._ellipsoid)),
                (a._semiMajorAxis = s),
                (a._semiMinorAxis = c),
                (a._rotation = _),
                (a._height = l),
                (a._granularity = T),
                (a._extrudedHeight = R ? f : void 0),
                (a._extrude = A),
                (a._numberOfVerticalLines = d),
                a)
              : ((y.height = l),
                (y.extrudedHeight = R ? f : void 0),
                (y.granularity = T),
                (y.rotation = _),
                (y.semiMajorAxis = s),
                (y.semiMinorAxis = c),
                (y.numberOfVerticalLines = d),
                new h(y));
          }),
          (h.createGeometry = function(e) {
            if (!(e._semiMajorAxis <= 0 || e._semiMinorAxis <= 0)) {
              e._center = e._ellipsoid.scaleToGeodeticSurface(
                e._center,
                e._center
              );
              var t,
                n = {
                  center: e._center,
                  semiMajorAxis: e._semiMajorAxis,
                  semiMinorAxis: e._semiMinorAxis,
                  ellipsoid: e._ellipsoid,
                  rotation: e._rotation,
                  height: e._height,
                  extrudedHeight: e._extrudedHeight,
                  granularity: e._granularity,
                  numberOfVerticalLines: e._numberOfVerticalLines
                };
              return (
                e._extrude
                  ? ((n.extrudedHeight = Math.min(
                      e._extrudedHeight,
                      e._height
                    )),
                    (n.height = Math.max(e._extrudedHeight, e._height)),
                    (t = f(n)))
                  : (t = R(n)),
                new E({
                  attributes: t.attributes,
                  indices: t.indices,
                  primitiveType: T.LINES,
                  boundingSphere: t.boundingSphere
                })
              );
            }
          }),
          h
        );
      }
    ),
    define(
      "Workers/createEllipseOutlineGeometry",
      [
        "../Core/Cartesian3",
        "../Core/defined",
        "../Core/EllipseOutlineGeometry",
        "../Core/Ellipsoid"
      ],
      function(e, t, n, r) {
        "use strict";
        function i(i, a) {
          return (
            t(a) && (i = n.unpack(i, a)),
            (i._center = e.clone(i._center)),
            (i._ellipsoid = r.clone(i._ellipsoid)),
            n.createGeometry(i)
          );
        }
        return i;
      }
    );
})();
