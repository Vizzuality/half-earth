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

/**
  @license
  when.js - https://github.com/cujojs/when

  MIT License (c) copyright B Cavalier & J Hann

 * A lightweight CommonJS Promises/A and when() implementation
 * when is part of the cujo.js family of libraries (http://cujojs.com/)
 *
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @version 1.7.1
 */

/**
@license
sprintf.js from the php.js project - https://github.com/kvz/phpjs
Directly from https://github.com/kvz/phpjs/blob/master/functions/strings/sprintf.js

php.js is copyright 2012 Kevin van Zonneveld.

Portions copyright Brett Zamir (http://brett-zamir.me), Kevin van Zonneveld
(http://kevin.vanzonneveld.net), Onno Marsman, Theriault, Michael White
(http://getsprink.com), Waldo Malqui Silva, Paulo Freitas, Jack, Jonas
Raoni Soares Silva (http://www.jsfromhell.com), Philip Peterson, Legaev
Andrey, Ates Goral (http://magnetiq.com), Alex, Ratheous, Martijn Wieringa,
Rafa? Kukawski (http://blog.kukawski.pl), lmeyrick
(https://sourceforge.net/projects/bcmath-js/), Nate, Philippe Baumann,
Enrique Gonzalez, Webtoolkit.info (http://www.webtoolkit.info/), Carlos R.
L. Rodrigues (http://www.jsfromhell.com), Ash Searle
(http://hexmen.com/blog/), Jani Hartikainen, travc, Ole Vrijenhoek,
Erkekjetter, Michael Grier, Rafa? Kukawski (http://kukawski.pl), Johnny
Mast (http://www.phpvrouwen.nl), T.Wild, d3x,
http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript,
Rafa? Kukawski (http://blog.kukawski.pl/), stag019, pilus, WebDevHobo
(http://webdevhobo.blogspot.com/), marrtins, GeekFG
(http://geekfg.blogspot.com), Andrea Giammarchi
(http://webreflection.blogspot.com), Arpad Ray (mailto:arpad@php.net),
gorthaur, Paul Smith, Tim de Koning (http://www.kingsquare.nl), Joris, Oleg
Eremeev, Steve Hilder, majak, gettimeofday, KELAN, Josh Fraser
(http://onlineaspect.com/2007/06/08/auto-detect-a-time-zone-with-javascript/),
Marc Palau, Martin
(http://www.erlenwiese.de/), Breaking Par Consulting Inc
(http://www.breakingpar.com/bkp/home.nsf/0/87256B280015193F87256CFB006C45F7),
Chris, Mirek Slugen, saulius, Alfonso Jimenez
(http://www.alfonsojimenez.com), Diplom@t (http://difane.com/), felix,
Mailfaker (http://www.weedem.fr/), Tyler Akins (http://rumkin.com), Caio
Ariede (http://caioariede.com), Robin, Kankrelune
(http://www.webfaktory.info/), Karol Kowalski, Imgen Tata
(http://www.myipdf.com/), mdsjack (http://www.mdsjack.bo.it), Dreamer,
Felix Geisendoerfer (http://www.debuggable.com/felix), Lars Fischer, AJ,
David, Aman Gupta, Michael White, Public Domain
(http://www.json.org/json2.js), Steven Levithan
(http://blog.stevenlevithan.com), Sakimori, Pellentesque Malesuada,
Thunder.m, Dj (http://phpjs.org/functions/htmlentities:425#comment_134018),
Steve Clay, David James, Francois, class_exists, nobbler, T. Wild, Itsacon
(http://www.itsacon.net/), date, Ole Vrijenhoek (http://www.nervous.nl/),
Fox, Raphael (Ao RUDLER), Marco, noname, Mateusz "loonquawl" Zalega, Frank
Forte, Arno, ger, mktime, john (http://www.jd-tech.net), Nick Kolosov
(http://sammy.ru), marc andreu, Scott Cariss, Douglas Crockford
(http://javascript.crockford.com), madipta, Slawomir Kaniecki,
ReverseSyntax, Nathan, Alex Wilson, kenneth, Bayron Guevara, Adam Wallner
(http://web2.bitbaro.hu/), paulo kuong, jmweb, Lincoln Ramsay, djmix,
Pyerre, Jon Hohle, Thiago Mata (http://thiagomata.blog.com), lmeyrick
(https://sourceforge.net/projects/bcmath-js/this.), Linuxworld, duncan,
Gilbert, Sanjoy Roy, Shingo, sankai, Oskar Larsson H?gfeldt
(http://oskar-lh.name/), Denny Wardhana, 0m3r, Everlasto, Subhasis Deb,
josh, jd, Pier Paolo Ramon (http://www.mastersoup.com/), P, merabi, Soren
Hansen, Eugene Bulkin (http://doubleaw.com/), Der Simon
(http://innerdom.sourceforge.net/), echo is bad, Ozh, XoraX
(http://www.xorax.info), EdorFaus, JB, J A R, Marc Jansen, Francesco, LH,
Stoyan Kyosev (http://www.svest.org/), nord_ua, omid
(http://phpjs.org/functions/380:380#comment_137122), Brad Touesnard, MeEtc
(http://yass.meetcweb.com), Peter-Paul Koch
(http://www.quirksmode.org/js/beat.html), Olivier Louvignes
(http://mg-crea.com/), T0bsn, Tim Wiel, Bryan Elliott, Jalal Berrami,
Martin, JT, David Randall, Thomas Beaucourt (http://www.webapp.fr), taith,
vlado houba, Pierre-Luc Paour, Kristof Coomans (SCK-CEN Belgian Nucleair
Research Centre), Martin Pool, Kirk Strobeck, Rick Waldron, Brant Messenger
(http://www.brantmessenger.com/), Devan Penner-Woelk, Saulo Vallory, Wagner
B. Soares, Artur Tchernychev, Valentina De Rosa, Jason Wong
(http://carrot.org/), Christoph, Daniel Esteban, strftime, Mick@el, rezna,
Simon Willison (http://simonwillison.net), Anton Ongson, Gabriel Paderni,
Marco van Oort, penutbutterjelly, Philipp Lenssen, Bjorn Roesbeke
(http://www.bjornroesbeke.be/), Bug?, Eric Nagel, Tomasz Wesolowski,
Evertjan Garretsen, Bobby Drake, Blues (http://tech.bluesmoon.info/), Luke
Godfrey, Pul, uestla, Alan C, Ulrich, Rafal Kukawski, Yves Sucaet,
sowberry, Norman "zEh" Fuchs, hitwork, Zahlii, johnrembo, Nick Callen,
Steven Levithan (stevenlevithan.com), ejsanders, Scott Baker, Brian Tafoya
(http://www.premasolutions.com/), Philippe Jausions
(http://pear.php.net/user/jausions), Aidan Lister
(http://aidanlister.com/), Rob, e-mike, HKM, ChaosNo1, metjay, strcasecmp,
strcmp, Taras Bogach, jpfle, Alexander Ermolaev
(http://snippets.dzone.com/user/AlexanderErmolaev), DxGx, kilops, Orlando,
dptr1988, Le Torbi, James (http://www.james-bell.co.uk/), Pedro Tainha
(http://www.pedrotainha.com), James, Arnout Kazemier
(http://www.3rd-Eden.com), Chris McMacken, gabriel paderni, Yannoo,
FGFEmperor, baris ozdil, Tod Gentille, Greg Frazier, jakes, 3D-GRAF, Allan
Jensen (http://www.winternet.no), Howard Yeend, Benjamin Lupton, davook,
daniel airton wermann (http://wermann.com.br), Atli T¨®r, Maximusya, Ryan
W Tenney (http://ryan.10e.us), Alexander M Beedie, fearphage
(http://http/my.opera.com/fearphage/), Nathan Sepulveda, Victor, Matteo,
Billy, stensi, Cord, Manish, T.J. Leahy, Riddler
(http://www.frontierwebdev.com/), Rafa? Kukawski, FremyCompany, Matt
Bradley, Tim de Koning, Luis Salazar (http://www.freaky-media.com/), Diogo
Resende, Rival, Andrej Pavlovic, Garagoth, Le Torbi
(http://www.letorbi.de/), Dino, Josep Sanz (http://www.ws3.es/), rem,
Russell Walker (http://www.nbill.co.uk/), Jamie Beck
(http://www.terabit.ca/), setcookie, Michael, YUI Library:
http://developer.yahoo.com/yui/docs/YAHOO.util.DateLocale.html, Blues at
http://hacks.bluesmoon.info/strftime/strftime.js, Ben
(http://benblume.co.uk/), DtTvB
(http://dt.in.th/2008-09-16.string-length-in-bytes.html), Andreas, William,
meo, incidence, Cagri Ekin, Amirouche, Amir Habibi
(http://www.residence-mixte.com/), Luke Smith (http://lucassmith.name),
Kheang Hok Chin (http://www.distantia.ca/), Jay Klehr, Lorenzo Pisani,
Tony, Yen-Wei Liu, Greenseed, mk.keck, Leslie Hoare, dude, booeyOH, Ben
Bryan

Licensed under the MIT (MIT-LICENSE.txt) license.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL KEVIN VAN ZONNEVELD BE LIABLE FOR ANY CLAIM, DAMAGES
OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * @license
 *
 * Grauw URI utilities
 *
 * See: http://hg.grauw.nl/grauw-lib/file/tip/src/uri.js
 *
 * @author Laurens Holst (http://www.grauw.nl/)
 *
 *   Copyright 2012 Laurens Holst
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
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
      var a = {}
      return (
        (a.typeOf = {}),
        (a.defined = function (n, a) {
          if (!e(a)) throw new t(r(n))
        }),
        (a.typeOf.func = function (e, r) {
          if (typeof r !== 'function') throw new t(n(typeof r, 'function', e))
        }),
        (a.typeOf.string = function (e, r) {
          if (typeof r !== 'string') throw new t(n(typeof r, 'string', e))
        }),
        (a.typeOf.number = function (e, r) {
          if (typeof r !== 'number') throw new t(n(typeof r, 'number', e))
        }),
        (a.typeOf.number.lessThan = function (e, r, n) {
          if ((a.typeOf.number(e, r), r >= n)) {
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
        (a.typeOf.number.lessThanOrEquals = function (e, r, n) {
          if ((a.typeOf.number(e, r), r > n)) {
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
        (a.typeOf.number.greaterThan = function (e, r, n) {
          if ((a.typeOf.number(e, r), r <= n)) {
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
        (a.typeOf.number.greaterThanOrEquals = function (e, r, n) {
          if ((a.typeOf.number(e, r), r < n)) {
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
        (a.typeOf.object = function (e, r) {
          if (typeof r !== 'object') throw new t(n(typeof r, 'object', e))
        }),
        (a.typeOf.bool = function (e, r) {
          if (typeof r !== 'boolean') throw new t(n(typeof r, 'boolean', e))
        }),
        (a.typeOf.number.equals = function (e, r, n, i) {
          if ((a.typeOf.number(e, n), a.typeOf.number(r, i), n !== i)) {
            throw new t(
              e +
                ' must be equal to ' +
                r +
                ', the actual values are ' +
                n +
                ' and ' +
                i
            )
          }
        }),
        a
      )
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
    define('ThirdParty/mersenne-twister', [], function () {
      var e = function (e) {
        void 0 == e && (e = new Date().getTime()),
          (this.N = 624),
          (this.M = 397),
          (this.MATRIX_A = 2567483615),
          (this.UPPER_MASK = 2147483648),
          (this.LOWER_MASK = 2147483647),
          (this.mt = new Array(this.N)),
          (this.mti = this.N + 1),
          this.init_genrand(e)
      }
      return (
        (e.prototype.init_genrand = function (e) {
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
              (this.mt[this.mti] >>>= 0)
          }
        }),
        (e.prototype.genrand_int32 = function () {
          var e,
            t = new Array(0, this.MATRIX_A)
          if (this.mti >= this.N) {
            var r
            for (
              this.mti == this.N + 1 && this.init_genrand(5489), r = 0;
              r < this.N - this.M;
              r++
            ) {
              (e =
                (this.mt[r] & this.UPPER_MASK) |
                (this.mt[r + 1] & this.LOWER_MASK)),
                (this.mt[r] = this.mt[r + this.M] ^ (e >>> 1) ^ t[1 & e])
            }
            for (; r < this.N - 1; r++) {
              (e =
                (this.mt[r] & this.UPPER_MASK) |
                (this.mt[r + 1] & this.LOWER_MASK)),
                (this.mt[r] =
                  this.mt[r + (this.M - this.N)] ^ (e >>> 1) ^ t[1 & e])
            }
            (e =
              (this.mt[this.N - 1] & this.UPPER_MASK) |
              (this.mt[0] & this.LOWER_MASK)),
              (this.mt[this.N - 1] =
                this.mt[this.M - 1] ^ (e >>> 1) ^ t[1 & e]),
              (this.mti = 0)
          }
          return (
            (e = this.mt[this.mti++]),
            (e ^= e >>> 11),
            (e ^= (e << 7) & 2636928640),
            (e ^= (e << 15) & 4022730752),
            (e ^= e >>> 18),
            e >>> 0
          )
        }),
        (e.prototype.random = function () {
          return this.genrand_int32() * (1 / 4294967296)
        }),
        e
      )
    }),
    define(
      'Core/Math',
      [
        '../ThirdParty/mersenne-twister',
        './defaultValue',
        './defined',
        './DeveloperError'
      ],
      function (e, t, r, n) {
        'use strict'
        var a = {};
        (a.EPSILON1 = 0.1),
          (a.EPSILON2 = 0.01),
          (a.EPSILON3 = 0.001),
          (a.EPSILON4 = 1e-4),
          (a.EPSILON5 = 1e-5),
          (a.EPSILON6 = 1e-6),
          (a.EPSILON7 = 1e-7),
          (a.EPSILON8 = 1e-8),
          (a.EPSILON9 = 1e-9),
          (a.EPSILON10 = 1e-10),
          (a.EPSILON11 = 1e-11),
          (a.EPSILON12 = 1e-12),
          (a.EPSILON13 = 1e-13),
          (a.EPSILON14 = 1e-14),
          (a.EPSILON15 = 1e-15),
          (a.EPSILON16 = 1e-16),
          (a.EPSILON17 = 1e-17),
          (a.EPSILON18 = 1e-18),
          (a.EPSILON19 = 1e-19),
          (a.EPSILON20 = 1e-20),
          (a.GRAVITATIONALPARAMETER = 3986004418e5),
          (a.SOLAR_RADIUS = 6955e5),
          (a.LUNAR_RADIUS = 1737400),
          (a.SIXTY_FOUR_KILOBYTES = 65536),
          (a.sign = function (e) {
            return e > 0 ? 1 : e < 0 ? -1 : 0
          }),
          (a.signNotZero = function (e) {
            return e < 0 ? -1 : 1
          }),
          (a.toSNorm = function (e, r) {
            return (
              (r = t(r, 255)), Math.round((0.5 * a.clamp(e, -1, 1) + 0.5) * r)
            )
          }),
          (a.fromSNorm = function (e, r) {
            return (r = t(r, 255)), a.clamp(e, 0, r) / r * 2 - 1
          }),
          (a.sinh = function (e) {
            var t = Math.pow(Math.E, e),
              r = Math.pow(Math.E, -1 * e)
            return 0.5 * (t - r)
          }),
          (a.cosh = function (e) {
            var t = Math.pow(Math.E, e),
              r = Math.pow(Math.E, -1 * e)
            return 0.5 * (t + r)
          }),
          (a.lerp = function (e, t, r) {
            return (1 - r) * e + r * t
          }),
          (a.PI = Math.PI),
          (a.ONE_OVER_PI = 1 / Math.PI),
          (a.PI_OVER_TWO = 0.5 * Math.PI),
          (a.PI_OVER_THREE = Math.PI / 3),
          (a.PI_OVER_FOUR = Math.PI / 4),
          (a.PI_OVER_SIX = Math.PI / 6),
          (a.THREE_PI_OVER_TWO = 3 * Math.PI * 0.5),
          (a.TWO_PI = 2 * Math.PI),
          (a.ONE_OVER_TWO_PI = 1 / (2 * Math.PI)),
          (a.RADIANS_PER_DEGREE = Math.PI / 180),
          (a.DEGREES_PER_RADIAN = 180 / Math.PI),
          (a.RADIANS_PER_ARCSECOND = a.RADIANS_PER_DEGREE / 3600),
          (a.toRadians = function (e) {
            return e * a.RADIANS_PER_DEGREE
          }),
          (a.toDegrees = function (e) {
            return e * a.DEGREES_PER_RADIAN
          }),
          (a.convertLongitudeRange = function (e) {
            var t = a.TWO_PI,
              r = e - Math.floor(e / t) * t
            return r < -Math.PI ? r + t : r >= Math.PI ? r - t : r
          }),
          (a.clampToLatitudeRange = function (e) {
            return a.clamp(e, -1 * a.PI_OVER_TWO, a.PI_OVER_TWO)
          }),
          (a.negativePiToPi = function (e) {
            return a.zeroToTwoPi(e + a.PI) - a.PI
          }),
          (a.zeroToTwoPi = function (e) {
            var t = a.mod(e, a.TWO_PI)
            return Math.abs(t) < a.EPSILON14 && Math.abs(e) > a.EPSILON14
              ? a.TWO_PI
              : t
          }),
          (a.mod = function (e, t) {
            return (e % t + t) % t
          }),
          (a.equalsEpsilon = function (e, r, n, a) {
            a = t(a, n)
            var i = Math.abs(e - r)
            return i <= a || i <= n * Math.max(Math.abs(e), Math.abs(r))
          })
        var i = [1];
        (a.factorial = function (e) {
          var t = i.length
          if (e >= t) for (var r = i[t - 1], n = t; n <= e; n++) i.push(r * n)
          return i[e]
        }),
          (a.incrementWrap = function (e, r, n) {
            return (n = t(n, 0)), ++e, e > r && (e = n), e
          }),
          (a.isPowerOfTwo = function (e) {
            return e !== 0 && (e & (e - 1)) === 0
          }),
          (a.nextPowerOfTwo = function (e) {
            return (
              --e,
              (e |= e >> 1),
              (e |= e >> 2),
              (e |= e >> 4),
              (e |= e >> 8),
              (e |= e >> 16),
              ++e,
              e
            )
          }),
          (a.clamp = function (e, t, r) {
            return e < t ? t : e > r ? r : e
          })
        var o = new e()
        return (
          (a.setRandomNumberSeed = function (t) {
            o = new e(t)
          }),
          (a.nextRandomNumber = function () {
            return o.random()
          }),
          (a.randomBetween = function (e, t) {
            return a.nextRandomNumber() * (t - e) + e
          }),
          (a.acosClamped = function (e) {
            return Math.acos(a.clamp(e, -1, 1))
          }),
          (a.asinClamped = function (e) {
            return Math.asin(a.clamp(e, -1, 1))
          }),
          (a.chordLength = function (e, t) {
            return 2 * t * Math.sin(0.5 * e)
          }),
          (a.logBase = function (e, t) {
            return Math.log(e) / Math.log(t)
          }),
          (a.fog = function (e, t) {
            var r = e * t
            return 1 - Math.exp(-(r * r))
          }),
          a
        )
      }
    ),
    define(
      'Core/Cartesian3',
      [
        './Check',
        './defaultValue',
        './defined',
        './DeveloperError',
        './freezeObject',
        './Math'
      ],
      function (e, t, r, n, a, i) {
        'use strict'
        function o (e, r, n) {
          (this.x = t(e, 0)), (this.y = t(r, 0)), (this.z = t(n, 0))
        }
        (o.fromSpherical = function (e, n) {
          r(n) || (n = new o())
          var a = e.clock,
            i = e.cone,
            u = t(e.magnitude, 1),
            s = u * Math.sin(i)
          return (
            (n.x = s * Math.cos(a)),
            (n.y = s * Math.sin(a)),
            (n.z = u * Math.cos(i)),
            n
          )
        }),
          (o.fromElements = function (e, t, n, a) {
            return r(a) ? ((a.x = e), (a.y = t), (a.z = n), a) : new o(e, t, n)
          }),
          (o.clone = function (e, t) {
            if (r(e)) {
              return r(t)
                ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), t)
                : new o(e.x, e.y, e.z)
            }
          }),
          (o.fromCartesian4 = o.clone),
          (o.packedLength = 3),
          (o.pack = function (e, r, n) {
            return (
              (n = t(n, 0)), (r[n++] = e.x), (r[n++] = e.y), (r[n] = e.z), r
            )
          }),
          (o.unpack = function (e, n, a) {
            return (
              (n = t(n, 0)),
              r(a) || (a = new o()),
              (a.x = e[n++]),
              (a.y = e[n++]),
              (a.z = e[n]),
              a
            )
          }),
          (o.packArray = function (e, t) {
            var n = e.length
            r(t) ? (t.length = 3 * n) : (t = new Array(3 * n))
            for (var a = 0; a < n; ++a) o.pack(e[a], t, 3 * a)
            return t
          }),
          (o.unpackArray = function (e, t) {
            var n = e.length
            r(t) ? (t.length = n / 3) : (t = new Array(n / 3))
            for (var a = 0; a < n; a += 3) {
              var i = a / 3
              t[i] = o.unpack(e, a, t[i])
            }
            return t
          }),
          (o.fromArray = o.unpack),
          (o.maximumComponent = function (e) {
            return Math.max(e.x, e.y, e.z)
          }),
          (o.minimumComponent = function (e) {
            return Math.min(e.x, e.y, e.z)
          }),
          (o.minimumByComponent = function (e, t, r) {
            return (
              (r.x = Math.min(e.x, t.x)),
              (r.y = Math.min(e.y, t.y)),
              (r.z = Math.min(e.z, t.z)),
              r
            )
          }),
          (o.maximumByComponent = function (e, t, r) {
            return (
              (r.x = Math.max(e.x, t.x)),
              (r.y = Math.max(e.y, t.y)),
              (r.z = Math.max(e.z, t.z)),
              r
            )
          }),
          (o.magnitudeSquared = function (e) {
            return e.x * e.x + e.y * e.y + e.z * e.z
          }),
          (o.magnitude = function (e) {
            return Math.sqrt(o.magnitudeSquared(e))
          })
        var u = new o();
        (o.distance = function (e, t) {
          return o.subtract(e, t, u), o.magnitude(u)
        }),
          (o.distanceSquared = function (e, t) {
            return o.subtract(e, t, u), o.magnitudeSquared(u)
          }),
          (o.normalize = function (e, t) {
            var r = o.magnitude(e)
            return (t.x = e.x / r), (t.y = e.y / r), (t.z = e.z / r), t
          }),
          (o.dot = function (e, t) {
            return e.x * t.x + e.y * t.y + e.z * t.z
          }),
          (o.multiplyComponents = function (e, t, r) {
            return (r.x = e.x * t.x), (r.y = e.y * t.y), (r.z = e.z * t.z), r
          }),
          (o.divideComponents = function (e, t, r) {
            return (r.x = e.x / t.x), (r.y = e.y / t.y), (r.z = e.z / t.z), r
          }),
          (o.add = function (e, t, r) {
            return (r.x = e.x + t.x), (r.y = e.y + t.y), (r.z = e.z + t.z), r
          }),
          (o.subtract = function (e, t, r) {
            return (r.x = e.x - t.x), (r.y = e.y - t.y), (r.z = e.z - t.z), r
          }),
          (o.multiplyByScalar = function (e, t, r) {
            return (r.x = e.x * t), (r.y = e.y * t), (r.z = e.z * t), r
          }),
          (o.divideByScalar = function (e, t, r) {
            return (r.x = e.x / t), (r.y = e.y / t), (r.z = e.z / t), r
          }),
          (o.negate = function (e, t) {
            return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), t
          }),
          (o.abs = function (e, t) {
            return (
              (t.x = Math.abs(e.x)),
              (t.y = Math.abs(e.y)),
              (t.z = Math.abs(e.z)),
              t
            )
          })
        var s = new o()
        o.lerp = function (e, t, r, n) {
          return (
            o.multiplyByScalar(t, r, s),
            (n = o.multiplyByScalar(e, 1 - r, n)),
            o.add(s, n, n)
          )
        }
        var c = new o(),
          l = new o()
        o.angleBetween = function (e, t) {
          o.normalize(e, c), o.normalize(t, l)
          var r = o.dot(c, l),
            n = o.magnitude(o.cross(c, l, c))
          return Math.atan2(n, r)
        }
        var f = new o();
        (o.mostOrthogonalAxis = function (e, t) {
          var r = o.normalize(e, f)
          return (
            o.abs(r, r),
            (t =
              r.x <= r.y
                ? r.x <= r.z ? o.clone(o.UNIT_X, t) : o.clone(o.UNIT_Z, t)
                : r.y <= r.z ? o.clone(o.UNIT_Y, t) : o.clone(o.UNIT_Z, t))
          )
        }),
          (o.equals = function (e, t) {
            return (
              e === t ||
              (r(e) && r(t) && e.x === t.x && e.y === t.y && e.z === t.z)
            )
          }),
          (o.equalsArray = function (e, t, r) {
            return e.x === t[r] && e.y === t[r + 1] && e.z === t[r + 2]
          }),
          (o.equalsEpsilon = function (e, t, n, a) {
            return (
              e === t ||
              (r(e) &&
                r(t) &&
                i.equalsEpsilon(e.x, t.x, n, a) &&
                i.equalsEpsilon(e.y, t.y, n, a) &&
                i.equalsEpsilon(e.z, t.z, n, a))
            )
          }),
          (o.cross = function (e, t, r) {
            var n = e.x,
              a = e.y,
              i = e.z,
              o = t.x,
              u = t.y,
              s = t.z,
              c = a * s - i * u,
              l = i * o - n * s,
              f = n * u - a * o
            return (r.x = c), (r.y = l), (r.z = f), r
          }),
          (o.fromDegrees = function (e, t, r, n, a) {
            return (
              (e = i.toRadians(e)),
              (t = i.toRadians(t)),
              o.fromRadians(e, t, r, n, a)
            )
          })
        var d = new o(),
          h = new o(),
          E = new o(40680631590769, 40680631590769, 40408299984661.445)
        return (
          (o.fromRadians = function (e, n, a, i, u) {
            a = t(a, 0)
            var s = r(i) ? i.radiiSquared : E,
              c = Math.cos(n);
            (d.x = c * Math.cos(e)),
              (d.y = c * Math.sin(e)),
              (d.z = Math.sin(n)),
              (d = o.normalize(d, d)),
              o.multiplyComponents(s, d, h)
            var l = Math.sqrt(o.dot(d, h))
            return (
              (h = o.divideByScalar(h, l, h)),
              (d = o.multiplyByScalar(d, a, d)),
              r(u) || (u = new o()),
              o.add(h, d, u)
            )
          }),
          (o.fromDegreesArray = function (e, t, n) {
            var a = e.length
            r(n) ? (n.length = a / 2) : (n = new Array(a / 2))
            for (var i = 0; i < a; i += 2) {
              var u = e[i],
                s = e[i + 1],
                c = i / 2
              n[c] = o.fromDegrees(u, s, 0, t, n[c])
            }
            return n
          }),
          (o.fromRadiansArray = function (e, t, n) {
            var a = e.length
            r(n) ? (n.length = a / 2) : (n = new Array(a / 2))
            for (var i = 0; i < a; i += 2) {
              var u = e[i],
                s = e[i + 1],
                c = i / 2
              n[c] = o.fromRadians(u, s, 0, t, n[c])
            }
            return n
          }),
          (o.fromDegreesArrayHeights = function (e, t, n) {
            var a = e.length
            r(n) ? (n.length = a / 3) : (n = new Array(a / 3))
            for (var i = 0; i < a; i += 3) {
              var u = e[i],
                s = e[i + 1],
                c = e[i + 2],
                l = i / 3
              n[l] = o.fromDegrees(u, s, c, t, n[l])
            }
            return n
          }),
          (o.fromRadiansArrayHeights = function (e, t, n) {
            var a = e.length
            r(n) ? (n.length = a / 3) : (n = new Array(a / 3))
            for (var i = 0; i < a; i += 3) {
              var u = e[i],
                s = e[i + 1],
                c = e[i + 2],
                l = i / 3
              n[l] = o.fromRadians(u, s, c, t, n[l])
            }
            return n
          }),
          (o.ZERO = a(new o(0, 0, 0))),
          (o.UNIT_X = a(new o(1, 0, 0))),
          (o.UNIT_Y = a(new o(0, 1, 0))),
          (o.UNIT_Z = a(new o(0, 0, 1))),
          (o.prototype.clone = function (e) {
            return o.clone(this, e)
          }),
          (o.prototype.equals = function (e) {
            return o.equals(this, e)
          }),
          (o.prototype.equalsEpsilon = function (e, t, r) {
            return o.equalsEpsilon(this, e, t, r)
          }),
          (o.prototype.toString = function () {
            return '(' + this.x + ', ' + this.y + ', ' + this.z + ')'
          }),
          o
        )
      }
    ),
    define('Core/defineProperties', ['./defined'], function (e) {
      'use strict'
      var t = (function () {
          try {
            return 'x' in Object.defineProperty({}, 'x', {})
          } catch (e) {
            return !1
          }
        })(),
        r = Object.defineProperties
      return (
        (t && e(r)) ||
          (r = function (e) {
            return e
          }),
        r
      )
    }),
    define(
      'Core/scaleToGeodeticSurface',
      ['./Cartesian3', './defined', './DeveloperError', './Math'],
      function (e, t, r, n) {
        'use strict'
        function a (r, a, u, s, c) {
          var l = r.x,
            f = r.y,
            d = r.z,
            h = a.x,
            E = a.y,
            m = a.z,
            p = l * l * h * h,
            y = f * f * E * E,
            _ = d * d * m * m,
            T = p + y + _,
            R = Math.sqrt(1 / T),
            v = e.multiplyByScalar(r, R, i)
          if (T < s) return isFinite(R) ? e.clone(v, c) : void 0
          var A = u.x,
            S = u.y,
            N = u.z,
            g = o;
          (g.x = v.x * A * 2), (g.y = v.y * S * 2), (g.z = v.z * N * 2)
          var I,
            O,
            w,
            M,
            x,
            C,
            P,
            D,
            L,
            U,
            b,
            F = (1 - R) * e.magnitude(r) / (0.5 * e.magnitude(g)),
            B = 0
          do {
            (F -= B),
              (w = 1 / (1 + F * A)),
              (M = 1 / (1 + F * S)),
              (x = 1 / (1 + F * N)),
              (C = w * w),
              (P = M * M),
              (D = x * x),
              (L = C * w),
              (U = P * M),
              (b = D * x),
              (I = p * C + y * P + _ * D - 1),
              (O = p * L * A + y * U * S + _ * b * N)
            var z = -2 * O
            B = I / z
          } while (Math.abs(I) > n.EPSILON12)
          return t(c)
            ? ((c.x = l * w), (c.y = f * M), (c.z = d * x), c)
            : new e(l * w, f * M, d * x)
        }
        var i = new e(),
          o = new e()
        return a
      }
    ),
    define(
      'Core/Cartographic',
      [
        './Cartesian3',
        './Check',
        './defaultValue',
        './defined',
        './freezeObject',
        './Math',
        './scaleToGeodeticSurface'
      ],
      function (e, t, r, n, a, i, o) {
        'use strict'
        function u (e, t, n) {
          (this.longitude = r(e, 0)),
            (this.latitude = r(t, 0)),
            (this.height = r(n, 0))
        }
        (u.fromRadians = function (e, t, a, i) {
          return (
            (a = r(a, 0)),
            n(i)
              ? ((i.longitude = e), (i.latitude = t), (i.height = a), i)
              : new u(e, t, a)
          )
        }),
          (u.fromDegrees = function (e, t, r, n) {
            return (
              (e = i.toRadians(e)),
              (t = i.toRadians(t)),
              u.fromRadians(e, t, r, n)
            )
          })
        var s = new e(),
          c = new e(),
          l = new e(),
          f = new e(1 / 6378137, 1 / 6378137, 1 / 6356752.314245179),
          d = new e(
            1 / 40680631590769,
            1 / 40680631590769,
            1 / 40408299984661.445
          ),
          h = i.EPSILON1
        return (
          (u.fromCartesian = function (t, r, a) {
            var E = n(r) ? r.oneOverRadii : f,
              m = n(r) ? r.oneOverRadiiSquared : d,
              p = n(r) ? r._centerToleranceSquared : h,
              y = o(t, E, m, p, c)
            if (n(y)) {
              var _ = e.multiplyComponents(y, m, s)
              _ = e.normalize(_, _)
              var T = e.subtract(t, y, l),
                R = Math.atan2(_.y, _.x),
                v = Math.asin(_.z),
                A = i.sign(e.dot(T, t)) * e.magnitude(T)
              return n(a)
                ? ((a.longitude = R), (a.latitude = v), (a.height = A), a)
                : new u(R, v, A)
            }
          }),
          (u.clone = function (e, t) {
            if (n(e)) {
              return n(t)
                ? ((t.longitude = e.longitude),
                  (t.latitude = e.latitude),
                  (t.height = e.height),
                  t)
                : new u(e.longitude, e.latitude, e.height)
            }
          }),
          (u.equals = function (e, t) {
            return (
              e === t ||
              (n(e) &&
                n(t) &&
                e.longitude === t.longitude &&
                e.latitude === t.latitude &&
                e.height === t.height)
            )
          }),
          (u.equalsEpsilon = function (e, t, r) {
            return (
              e === t ||
              (n(e) &&
                n(t) &&
                Math.abs(e.longitude - t.longitude) <= r &&
                Math.abs(e.latitude - t.latitude) <= r &&
                Math.abs(e.height - t.height) <= r)
            )
          }),
          (u.ZERO = a(new u(0, 0, 0))),
          (u.prototype.clone = function (e) {
            return u.clone(this, e)
          }),
          (u.prototype.equals = function (e) {
            return u.equals(this, e)
          }),
          (u.prototype.equalsEpsilon = function (e, t) {
            return u.equalsEpsilon(this, e, t)
          }),
          (u.prototype.toString = function () {
            return (
              '(' +
              this.longitude +
              ', ' +
              this.latitude +
              ', ' +
              this.height +
              ')'
            )
          }),
          u
        )
      }
    ),
    define(
      'Core/Ellipsoid',
      [
        './Cartesian3',
        './Cartographic',
        './Check',
        './defaultValue',
        './defined',
        './defineProperties',
        './DeveloperError',
        './freezeObject',
        './Math',
        './scaleToGeodeticSurface'
      ],
      function (e, t, r, n, a, i, o, u, s, c) {
        'use strict'
        function l (t, r, a, i) {
          (r = n(r, 0)),
            (a = n(a, 0)),
            (i = n(i, 0)),
            (t._radii = new e(r, a, i)),
            (t._radiiSquared = new e(r * r, a * a, i * i)),
            (t._radiiToTheFourth = new e(
              r * r * r * r,
              a * a * a * a,
              i * i * i * i
            )),
            (t._oneOverRadii = new e(
              r === 0 ? 0 : 1 / r,
              a === 0 ? 0 : 1 / a,
              i === 0 ? 0 : 1 / i
            )),
            (t._oneOverRadiiSquared = new e(
              r === 0 ? 0 : 1 / (r * r),
              a === 0 ? 0 : 1 / (a * a),
              i === 0 ? 0 : 1 / (i * i)
            )),
            (t._minimumRadius = Math.min(r, a, i)),
            (t._maximumRadius = Math.max(r, a, i)),
            (t._centerToleranceSquared = s.EPSILON1),
            t._radiiSquared.z !== 0 &&
              (t._squaredXOverSquaredZ = t._radiiSquared.x / t._radiiSquared.z)
        }
        function f (e, t, r) {
          (this._radii = void 0),
            (this._radiiSquared = void 0),
            (this._radiiToTheFourth = void 0),
            (this._oneOverRadii = void 0),
            (this._oneOverRadiiSquared = void 0),
            (this._minimumRadius = void 0),
            (this._maximumRadius = void 0),
            (this._centerToleranceSquared = void 0),
            (this._squaredXOverSquaredZ = void 0),
            l(this, e, t, r)
        }
        i(f.prototype, {
          radii: {
            get: function () {
              return this._radii
            }
          },
          radiiSquared: {
            get: function () {
              return this._radiiSquared
            }
          },
          radiiToTheFourth: {
            get: function () {
              return this._radiiToTheFourth
            }
          },
          oneOverRadii: {
            get: function () {
              return this._oneOverRadii
            }
          },
          oneOverRadiiSquared: {
            get: function () {
              return this._oneOverRadiiSquared
            }
          },
          minimumRadius: {
            get: function () {
              return this._minimumRadius
            }
          },
          maximumRadius: {
            get: function () {
              return this._maximumRadius
            }
          }
        }),
          (f.clone = function (t, r) {
            if (a(t)) {
              var n = t._radii
              return a(r)
                ? (e.clone(n, r._radii),
                  e.clone(t._radiiSquared, r._radiiSquared),
                  e.clone(t._radiiToTheFourth, r._radiiToTheFourth),
                  e.clone(t._oneOverRadii, r._oneOverRadii),
                  e.clone(t._oneOverRadiiSquared, r._oneOverRadiiSquared),
                  (r._minimumRadius = t._minimumRadius),
                  (r._maximumRadius = t._maximumRadius),
                  (r._centerToleranceSquared = t._centerToleranceSquared),
                  r)
                : new f(n.x, n.y, n.z)
            }
          }),
          (f.fromCartesian3 = function (e, t) {
            return a(t) || (t = new f()), a(e) ? (l(t, e.x, e.y, e.z), t) : t
          }),
          (f.WGS84 = u(new f(6378137, 6378137, 6356752.314245179))),
          (f.UNIT_SPHERE = u(new f(1, 1, 1))),
          (f.MOON = u(new f(s.LUNAR_RADIUS, s.LUNAR_RADIUS, s.LUNAR_RADIUS))),
          (f.prototype.clone = function (e) {
            return f.clone(this, e)
          }),
          (f.packedLength = e.packedLength),
          (f.pack = function (t, r, a) {
            return (a = n(a, 0)), e.pack(t._radii, r, a), r
          }),
          (f.unpack = function (t, r, a) {
            r = n(r, 0)
            var i = e.unpack(t, r)
            return f.fromCartesian3(i, a)
          }),
          (f.prototype.geocentricSurfaceNormal = e.normalize),
          (f.prototype.geodeticSurfaceNormalCartographic = function (t, r) {
            var n = t.longitude,
              i = t.latitude,
              o = Math.cos(i),
              u = o * Math.cos(n),
              s = o * Math.sin(n),
              c = Math.sin(i)
            return (
              a(r) || (r = new e()),
              (r.x = u),
              (r.y = s),
              (r.z = c),
              e.normalize(r, r)
            )
          }),
          (f.prototype.geodeticSurfaceNormal = function (t, r) {
            return (
              a(r) || (r = new e()),
              (r = e.multiplyComponents(t, this._oneOverRadiiSquared, r)),
              e.normalize(r, r)
            )
          })
        var d = new e(),
          h = new e();
        (f.prototype.cartographicToCartesian = function (t, r) {
          var n = d,
            i = h
          this.geodeticSurfaceNormalCartographic(t, n),
            e.multiplyComponents(this._radiiSquared, n, i)
          var o = Math.sqrt(e.dot(n, i))
          return (
            e.divideByScalar(i, o, i),
            e.multiplyByScalar(n, t.height, n),
            a(r) || (r = new e()),
            e.add(i, n, r)
          )
        }),
          (f.prototype.cartographicArrayToCartesianArray = function (e, t) {
            var r = e.length
            a(t) ? (t.length = r) : (t = new Array(r))
            for (var n = 0; n < r; n++) { t[n] = this.cartographicToCartesian(e[n], t[n]) }
            return t
          })
        var E = new e(),
          m = new e(),
          p = new e()
        return (
          (f.prototype.cartesianToCartographic = function (r, n) {
            var i = this.scaleToGeodeticSurface(r, m)
            if (a(i)) {
              var o = this.geodeticSurfaceNormal(i, E),
                u = e.subtract(r, i, p),
                c = Math.atan2(o.y, o.x),
                l = Math.asin(o.z),
                f = s.sign(e.dot(u, r)) * e.magnitude(u)
              return a(n)
                ? ((n.longitude = c), (n.latitude = l), (n.height = f), n)
                : new t(c, l, f)
            }
          }),
          (f.prototype.cartesianArrayToCartographicArray = function (e, t) {
            var r = e.length
            a(t) ? (t.length = r) : (t = new Array(r))
            for (var n = 0; n < r; ++n) { t[n] = this.cartesianToCartographic(e[n], t[n]) }
            return t
          }),
          (f.prototype.scaleToGeodeticSurface = function (e, t) {
            return c(
              e,
              this._oneOverRadii,
              this._oneOverRadiiSquared,
              this._centerToleranceSquared,
              t
            )
          }),
          (f.prototype.scaleToGeocentricSurface = function (t, r) {
            a(r) || (r = new e())
            var n = t.x,
              i = t.y,
              o = t.z,
              u = this._oneOverRadiiSquared,
              s = 1 / Math.sqrt(n * n * u.x + i * i * u.y + o * o * u.z)
            return e.multiplyByScalar(t, s, r)
          }),
          (f.prototype.transformPositionToScaledSpace = function (t, r) {
            return (
              a(r) || (r = new e()),
              e.multiplyComponents(t, this._oneOverRadii, r)
            )
          }),
          (f.prototype.transformPositionFromScaledSpace = function (t, r) {
            return (
              a(r) || (r = new e()), e.multiplyComponents(t, this._radii, r)
            )
          }),
          (f.prototype.equals = function (t) {
            return this === t || (a(t) && e.equals(this._radii, t._radii))
          }),
          (f.prototype.toString = function () {
            return this._radii.toString()
          }),
          (f.prototype.getSurfaceNormalIntersectionWithZAxis = function (
            t,
            r,
            i
          ) {
            r = n(r, 0)
            var o = this._squaredXOverSquaredZ
            if (
              (a(i) || (i = new e()),
              (i.x = 0),
              (i.y = 0),
              (i.z = t.z * (1 - o)),
              !(Math.abs(i.z) >= this._radii.z - r))
            ) { return i }
          }),
          f
        )
      }
    ),
    define(
      'Core/GeographicProjection',
      [
        './Cartesian3',
        './Cartographic',
        './defaultValue',
        './defined',
        './defineProperties',
        './DeveloperError',
        './Ellipsoid'
      ],
      function (e, t, r, n, a, i, o) {
        'use strict'
        function u (e) {
          (this._ellipsoid = r(e, o.WGS84)),
            (this._semimajorAxis = this._ellipsoid.maximumRadius),
            (this._oneOverSemimajorAxis = 1 / this._semimajorAxis)
        }
        return (
          a(u.prototype, {
            ellipsoid: {
              get: function () {
                return this._ellipsoid
              }
            }
          }),
          (u.prototype.project = function (t, r) {
            var a = this._semimajorAxis,
              i = t.longitude * a,
              o = t.latitude * a,
              u = t.height
            return n(r) ? ((r.x = i), (r.y = o), (r.z = u), r) : new e(i, o, u)
          }),
          (u.prototype.unproject = function (e, r) {
            var a = this._oneOverSemimajorAxis,
              i = e.x * a,
              o = e.y * a,
              u = e.z
            return n(r)
              ? ((r.longitude = i), (r.latitude = o), (r.height = u), r)
              : new t(i, o, u)
          }),
          u
        )
      }
    ),
    define('Core/Intersect', ['./freezeObject'], function (e) {
      'use strict'
      var t = { OUTSIDE: -1, INTERSECTING: 0, INSIDE: 1 }
      return e(t)
    }),
    define('Core/Interval', ['./defaultValue'], function (e) {
      'use strict'
      function t (t, r) {
        (this.start = e(t, 0)), (this.stop = e(r, 0))
      }
      return t
    }),
    define(
      'Core/Matrix3',
      [
        './Cartesian3',
        './Check',
        './defaultValue',
        './defined',
        './defineProperties',
        './DeveloperError',
        './freezeObject',
        './Math'
      ],
      function (e, t, r, n, a, i, o, u) {
        'use strict'
        function s (e, t, n, a, i, o, u, s, c) {
          (this[0] = r(e, 0)),
            (this[1] = r(a, 0)),
            (this[2] = r(u, 0)),
            (this[3] = r(t, 0)),
            (this[4] = r(i, 0)),
            (this[5] = r(s, 0)),
            (this[6] = r(n, 0)),
            (this[7] = r(o, 0)),
            (this[8] = r(c, 0))
        }
        function c (e) {
          for (var t = 0, r = 0; r < 9; ++r) {
            var n = e[r]
            t += n * n
          }
          return Math.sqrt(t)
        }
        function l (e) {
          for (var t = 0, r = 0; r < 3; ++r) {
            var n = e[s.getElementIndex(m[r], E[r])]
            t += 2 * n * n
          }
          return Math.sqrt(t)
        }
        function f (e, t) {
          for (var r = u.EPSILON15, n = 0, a = 1, i = 0; i < 3; ++i) {
            var o = Math.abs(e[s.getElementIndex(m[i], E[i])])
            o > n && ((a = i), (n = o))
          }
          var c = 1,
            l = 0,
            f = E[a],
            d = m[a]
          if (Math.abs(e[s.getElementIndex(d, f)]) > r) {
            var h,
              p = e[s.getElementIndex(d, d)],
              y = e[s.getElementIndex(f, f)],
              _ = e[s.getElementIndex(d, f)],
              T = (p - y) / 2 / _;
            (h =
              T < 0
                ? -1 / (-T + Math.sqrt(1 + T * T))
                : 1 / (T + Math.sqrt(1 + T * T))),
              (c = 1 / Math.sqrt(1 + h * h)),
              (l = h * c)
          }
          return (
            (t = s.clone(s.IDENTITY, t)),
            (t[s.getElementIndex(f, f)] = t[s.getElementIndex(d, d)] = c),
            (t[s.getElementIndex(d, f)] = l),
            (t[s.getElementIndex(f, d)] = -l),
            t
          )
        }
        (s.packedLength = 9),
          (s.pack = function (e, t, n) {
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
              t
            )
          }),
          (s.unpack = function (e, t, a) {
            return (
              (t = r(t, 0)),
              n(a) || (a = new s()),
              (a[0] = e[t++]),
              (a[1] = e[t++]),
              (a[2] = e[t++]),
              (a[3] = e[t++]),
              (a[4] = e[t++]),
              (a[5] = e[t++]),
              (a[6] = e[t++]),
              (a[7] = e[t++]),
              (a[8] = e[t++]),
              a
            )
          }),
          (s.clone = function (e, t) {
            if (n(e)) {
              return n(t)
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
                : new s(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8])
            }
          }),
          (s.fromArray = function (e, t, a) {
            return (
              (t = r(t, 0)),
              n(a) || (a = new s()),
              (a[0] = e[t]),
              (a[1] = e[t + 1]),
              (a[2] = e[t + 2]),
              (a[3] = e[t + 3]),
              (a[4] = e[t + 4]),
              (a[5] = e[t + 5]),
              (a[6] = e[t + 6]),
              (a[7] = e[t + 7]),
              (a[8] = e[t + 8]),
              a
            )
          }),
          (s.fromColumnMajorArray = function (e, t) {
            return s.clone(e, t)
          }),
          (s.fromRowMajorArray = function (e, t) {
            return n(t)
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
              : new s(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8])
          }),
          (s.fromQuaternion = function (e, t) {
            var r = e.x * e.x,
              a = e.x * e.y,
              i = e.x * e.z,
              o = e.x * e.w,
              u = e.y * e.y,
              c = e.y * e.z,
              l = e.y * e.w,
              f = e.z * e.z,
              d = e.z * e.w,
              h = e.w * e.w,
              E = r - u - f + h,
              m = 2 * (a - d),
              p = 2 * (i + l),
              y = 2 * (a + d),
              _ = -r + u - f + h,
              T = 2 * (c - o),
              R = 2 * (i - l),
              v = 2 * (c + o),
              A = -r - u + f + h
            return n(t)
              ? ((t[0] = E),
                (t[1] = y),
                (t[2] = R),
                (t[3] = m),
                (t[4] = _),
                (t[5] = v),
                (t[6] = p),
                (t[7] = T),
                (t[8] = A),
                t)
              : new s(E, m, p, y, _, T, R, v, A)
          }),
          (s.fromHeadingPitchRoll = function (e, t) {
            var r = Math.cos(-e.pitch),
              a = Math.cos(-e.heading),
              i = Math.cos(e.roll),
              o = Math.sin(-e.pitch),
              u = Math.sin(-e.heading),
              c = Math.sin(e.roll),
              l = r * a,
              f = -i * u + c * o * a,
              d = c * u + i * o * a,
              h = r * u,
              E = i * a + c * o * u,
              m = -c * a + i * o * u,
              p = -o,
              y = c * r,
              _ = i * r
            return n(t)
              ? ((t[0] = l),
                (t[1] = h),
                (t[2] = p),
                (t[3] = f),
                (t[4] = E),
                (t[5] = y),
                (t[6] = d),
                (t[7] = m),
                (t[8] = _),
                t)
              : new s(l, f, d, h, E, m, p, y, _)
          }),
          (s.fromScale = function (e, t) {
            return n(t)
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
              : new s(e.x, 0, 0, 0, e.y, 0, 0, 0, e.z)
          }),
          (s.fromUniformScale = function (e, t) {
            return n(t)
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
              : new s(e, 0, 0, 0, e, 0, 0, 0, e)
          }),
          (s.fromCrossProduct = function (e, t) {
            return n(t)
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
              : new s(0, -e.z, e.y, e.z, 0, -e.x, -e.y, e.x, 0)
          }),
          (s.fromRotationX = function (e, t) {
            var r = Math.cos(e),
              a = Math.sin(e)
            return n(t)
              ? ((t[0] = 1),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 0),
                (t[4] = r),
                (t[5] = a),
                (t[6] = 0),
                (t[7] = -a),
                (t[8] = r),
                t)
              : new s(1, 0, 0, 0, r, -a, 0, a, r)
          }),
          (s.fromRotationY = function (e, t) {
            var r = Math.cos(e),
              a = Math.sin(e)
            return n(t)
              ? ((t[0] = r),
                (t[1] = 0),
                (t[2] = -a),
                (t[3] = 0),
                (t[4] = 1),
                (t[5] = 0),
                (t[6] = a),
                (t[7] = 0),
                (t[8] = r),
                t)
              : new s(r, 0, a, 0, 1, 0, -a, 0, r)
          }),
          (s.fromRotationZ = function (e, t) {
            var r = Math.cos(e),
              a = Math.sin(e)
            return n(t)
              ? ((t[0] = r),
                (t[1] = a),
                (t[2] = 0),
                (t[3] = -a),
                (t[4] = r),
                (t[5] = 0),
                (t[6] = 0),
                (t[7] = 0),
                (t[8] = 1),
                t)
              : new s(r, -a, 0, a, r, 0, 0, 0, 1)
          }),
          (s.toArray = function (e, t) {
            return n(t)
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
              : [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]]
          }),
          (s.getElementIndex = function (e, t) {
            return 3 * e + t
          }),
          (s.getColumn = function (e, t, r) {
            var n = 3 * t,
              a = e[n],
              i = e[n + 1],
              o = e[n + 2]
            return (r.x = a), (r.y = i), (r.z = o), r
          }),
          (s.setColumn = function (e, t, r, n) {
            n = s.clone(e, n)
            var a = 3 * t
            return (n[a] = r.x), (n[a + 1] = r.y), (n[a + 2] = r.z), n
          }),
          (s.getRow = function (e, t, r) {
            var n = e[t],
              a = e[t + 3],
              i = e[t + 6]
            return (r.x = n), (r.y = a), (r.z = i), r
          }),
          (s.setRow = function (e, t, r, n) {
            return (
              (n = s.clone(e, n)),
              (n[t] = r.x),
              (n[t + 3] = r.y),
              (n[t + 6] = r.z),
              n
            )
          })
        var d = new e()
        s.getScale = function (t, r) {
          return (
            (r.x = e.magnitude(e.fromElements(t[0], t[1], t[2], d))),
            (r.y = e.magnitude(e.fromElements(t[3], t[4], t[5], d))),
            (r.z = e.magnitude(e.fromElements(t[6], t[7], t[8], d))),
            r
          )
        }
        var h = new e();
        (s.getMaximumScale = function (t) {
          return s.getScale(t, h), e.maximumComponent(h)
        }),
          (s.multiply = function (e, t, r) {
            var n = e[0] * t[0] + e[3] * t[1] + e[6] * t[2],
              a = e[1] * t[0] + e[4] * t[1] + e[7] * t[2],
              i = e[2] * t[0] + e[5] * t[1] + e[8] * t[2],
              o = e[0] * t[3] + e[3] * t[4] + e[6] * t[5],
              u = e[1] * t[3] + e[4] * t[4] + e[7] * t[5],
              s = e[2] * t[3] + e[5] * t[4] + e[8] * t[5],
              c = e[0] * t[6] + e[3] * t[7] + e[6] * t[8],
              l = e[1] * t[6] + e[4] * t[7] + e[7] * t[8],
              f = e[2] * t[6] + e[5] * t[7] + e[8] * t[8]
            return (
              (r[0] = n),
              (r[1] = a),
              (r[2] = i),
              (r[3] = o),
              (r[4] = u),
              (r[5] = s),
              (r[6] = c),
              (r[7] = l),
              (r[8] = f),
              r
            )
          }),
          (s.add = function (e, t, r) {
            return (
              (r[0] = e[0] + t[0]),
              (r[1] = e[1] + t[1]),
              (r[2] = e[2] + t[2]),
              (r[3] = e[3] + t[3]),
              (r[4] = e[4] + t[4]),
              (r[5] = e[5] + t[5]),
              (r[6] = e[6] + t[6]),
              (r[7] = e[7] + t[7]),
              (r[8] = e[8] + t[8]),
              r
            )
          }),
          (s.subtract = function (e, t, r) {
            return (
              (r[0] = e[0] - t[0]),
              (r[1] = e[1] - t[1]),
              (r[2] = e[2] - t[2]),
              (r[3] = e[3] - t[3]),
              (r[4] = e[4] - t[4]),
              (r[5] = e[5] - t[5]),
              (r[6] = e[6] - t[6]),
              (r[7] = e[7] - t[7]),
              (r[8] = e[8] - t[8]),
              r
            )
          }),
          (s.multiplyByVector = function (e, t, r) {
            var n = t.x,
              a = t.y,
              i = t.z,
              o = e[0] * n + e[3] * a + e[6] * i,
              u = e[1] * n + e[4] * a + e[7] * i,
              s = e[2] * n + e[5] * a + e[8] * i
            return (r.x = o), (r.y = u), (r.z = s), r
          }),
          (s.multiplyByScalar = function (e, t, r) {
            return (
              (r[0] = e[0] * t),
              (r[1] = e[1] * t),
              (r[2] = e[2] * t),
              (r[3] = e[3] * t),
              (r[4] = e[4] * t),
              (r[5] = e[5] * t),
              (r[6] = e[6] * t),
              (r[7] = e[7] * t),
              (r[8] = e[8] * t),
              r
            )
          }),
          (s.multiplyByScale = function (e, t, r) {
            return (
              (r[0] = e[0] * t.x),
              (r[1] = e[1] * t.x),
              (r[2] = e[2] * t.x),
              (r[3] = e[3] * t.y),
              (r[4] = e[4] * t.y),
              (r[5] = e[5] * t.y),
              (r[6] = e[6] * t.z),
              (r[7] = e[7] * t.z),
              (r[8] = e[8] * t.z),
              r
            )
          }),
          (s.negate = function (e, t) {
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
            )
          }),
          (s.transpose = function (e, t) {
            var r = e[0],
              n = e[3],
              a = e[6],
              i = e[1],
              o = e[4],
              u = e[7],
              s = e[2],
              c = e[5],
              l = e[8]
            return (
              (t[0] = r),
              (t[1] = n),
              (t[2] = a),
              (t[3] = i),
              (t[4] = o),
              (t[5] = u),
              (t[6] = s),
              (t[7] = c),
              (t[8] = l),
              t
            )
          })
        var E = [1, 0, 0],
          m = [2, 2, 1],
          p = new s(),
          y = new s()
        return (
          (s.computeEigenDecomposition = function (e, t) {
            var r = u.EPSILON20,
              a = 10,
              i = 0,
              o = 0
            n(t) || (t = {})
            for (
              var d = (t.unitary = s.clone(s.IDENTITY, t.unitary)),
                h = (t.diagonal = s.clone(e, t.diagonal)),
                E = r * c(h);
              o < a && l(h) > E;

            ) {
              f(h, p),
                s.transpose(p, y),
                s.multiply(h, p, h),
                s.multiply(y, h, h),
                s.multiply(d, p, d),
                ++i > 2 && (++o, (i = 0))
            }
            return t
          }),
          (s.abs = function (e, t) {
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
            )
          }),
          (s.determinant = function (e) {
            var t = e[0],
              r = e[3],
              n = e[6],
              a = e[1],
              i = e[4],
              o = e[7],
              u = e[2],
              s = e[5],
              c = e[8]
            return (
              t * (i * c - s * o) + a * (s * n - r * c) + u * (r * o - i * n)
            )
          }),
          (s.inverse = function (e, t) {
            var r = e[0],
              n = e[1],
              a = e[2],
              i = e[3],
              o = e[4],
              u = e[5],
              c = e[6],
              l = e[7],
              f = e[8],
              d = s.determinant(e);
            (t[0] = o * f - l * u),
              (t[1] = l * a - n * f),
              (t[2] = n * u - o * a),
              (t[3] = c * u - i * f),
              (t[4] = r * f - c * a),
              (t[5] = i * a - r * u),
              (t[6] = i * l - c * o),
              (t[7] = c * n - r * l),
              (t[8] = r * o - i * n)
            var h = 1 / d
            return s.multiplyByScalar(t, h, t)
          }),
          (s.equals = function (e, t) {
            return (
              e === t ||
              (n(e) &&
                n(t) &&
                e[0] === t[0] &&
                e[1] === t[1] &&
                e[2] === t[2] &&
                e[3] === t[3] &&
                e[4] === t[4] &&
                e[5] === t[5] &&
                e[6] === t[6] &&
                e[7] === t[7] &&
                e[8] === t[8])
            )
          }),
          (s.equalsEpsilon = function (e, t, r) {
            return (
              e === t ||
              (n(e) &&
                n(t) &&
                Math.abs(e[0] - t[0]) <= r &&
                Math.abs(e[1] - t[1]) <= r &&
                Math.abs(e[2] - t[2]) <= r &&
                Math.abs(e[3] - t[3]) <= r &&
                Math.abs(e[4] - t[4]) <= r &&
                Math.abs(e[5] - t[5]) <= r &&
                Math.abs(e[6] - t[6]) <= r &&
                Math.abs(e[7] - t[7]) <= r &&
                Math.abs(e[8] - t[8]) <= r)
            )
          }),
          (s.IDENTITY = o(new s(1, 0, 0, 0, 1, 0, 0, 0, 1))),
          (s.ZERO = o(new s(0, 0, 0, 0, 0, 0, 0, 0, 0))),
          (s.COLUMN0ROW0 = 0),
          (s.COLUMN0ROW1 = 1),
          (s.COLUMN0ROW2 = 2),
          (s.COLUMN1ROW0 = 3),
          (s.COLUMN1ROW1 = 4),
          (s.COLUMN1ROW2 = 5),
          (s.COLUMN2ROW0 = 6),
          (s.COLUMN2ROW1 = 7),
          (s.COLUMN2ROW2 = 8),
          a(s.prototype, {
            length: {
              get: function () {
                return s.packedLength
              }
            }
          }),
          (s.prototype.clone = function (e) {
            return s.clone(this, e)
          }),
          (s.prototype.equals = function (e) {
            return s.equals(this, e)
          }),
          (s.equalsArray = function (e, t, r) {
            return (
              e[0] === t[r] &&
              e[1] === t[r + 1] &&
              e[2] === t[r + 2] &&
              e[3] === t[r + 3] &&
              e[4] === t[r + 4] &&
              e[5] === t[r + 5] &&
              e[6] === t[r + 6] &&
              e[7] === t[r + 7] &&
              e[8] === t[r + 8]
            )
          }),
          (s.prototype.equalsEpsilon = function (e, t) {
            return s.equalsEpsilon(this, e, t)
          }),
          (s.prototype.toString = function () {
            return (
              '(' +
              this[0] +
              ', ' +
              this[3] +
              ', ' +
              this[6] +
              ')\n(' +
              this[1] +
              ', ' +
              this[4] +
              ', ' +
              this[7] +
              ')\n(' +
              this[2] +
              ', ' +
              this[5] +
              ', ' +
              this[8] +
              ')'
            )
          }),
          s
        )
      }
    ),
    define(
      'Core/Cartesian4',
      [
        './Check',
        './defaultValue',
        './defined',
        './DeveloperError',
        './freezeObject',
        './Math'
      ],
      function (e, t, r, n, a, i) {
        'use strict'
        function o (e, r, n, a) {
          (this.x = t(e, 0)),
            (this.y = t(r, 0)),
            (this.z = t(n, 0)),
            (this.w = t(a, 0))
        }
        (o.fromElements = function (e, t, n, a, i) {
          return r(i)
            ? ((i.x = e), (i.y = t), (i.z = n), (i.w = a), i)
            : new o(e, t, n, a)
        }),
          (o.fromColor = function (e, t) {
            return r(t)
              ? ((t.x = e.red),
                (t.y = e.green),
                (t.z = e.blue),
                (t.w = e.alpha),
                t)
              : new o(e.red, e.green, e.blue, e.alpha)
          }),
          (o.clone = function (e, t) {
            if (r(e)) {
              return r(t)
                ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t)
                : new o(e.x, e.y, e.z, e.w)
            }
          }),
          (o.packedLength = 4),
          (o.pack = function (e, r, n) {
            return (
              (n = t(n, 0)),
              (r[n++] = e.x),
              (r[n++] = e.y),
              (r[n++] = e.z),
              (r[n] = e.w),
              r
            )
          }),
          (o.unpack = function (e, n, a) {
            return (
              (n = t(n, 0)),
              r(a) || (a = new o()),
              (a.x = e[n++]),
              (a.y = e[n++]),
              (a.z = e[n++]),
              (a.w = e[n]),
              a
            )
          }),
          (o.packArray = function (e, t) {
            var n = e.length
            r(t) ? (t.length = 4 * n) : (t = new Array(4 * n))
            for (var a = 0; a < n; ++a) o.pack(e[a], t, 4 * a)
            return t
          }),
          (o.unpackArray = function (e, t) {
            var n = e.length
            r(t) ? (t.length = n / 4) : (t = new Array(n / 4))
            for (var a = 0; a < n; a += 4) {
              var i = a / 4
              t[i] = o.unpack(e, a, t[i])
            }
            return t
          }),
          (o.fromArray = o.unpack),
          (o.maximumComponent = function (e) {
            return Math.max(e.x, e.y, e.z, e.w)
          }),
          (o.minimumComponent = function (e) {
            return Math.min(e.x, e.y, e.z, e.w)
          }),
          (o.minimumByComponent = function (e, t, r) {
            return (
              (r.x = Math.min(e.x, t.x)),
              (r.y = Math.min(e.y, t.y)),
              (r.z = Math.min(e.z, t.z)),
              (r.w = Math.min(e.w, t.w)),
              r
            )
          }),
          (o.maximumByComponent = function (e, t, r) {
            return (
              (r.x = Math.max(e.x, t.x)),
              (r.y = Math.max(e.y, t.y)),
              (r.z = Math.max(e.z, t.z)),
              (r.w = Math.max(e.w, t.w)),
              r
            )
          }),
          (o.magnitudeSquared = function (e) {
            return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w
          }),
          (o.magnitude = function (e) {
            return Math.sqrt(o.magnitudeSquared(e))
          })
        var u = new o();
        (o.distance = function (e, t) {
          return o.subtract(e, t, u), o.magnitude(u)
        }),
          (o.distanceSquared = function (e, t) {
            return o.subtract(e, t, u), o.magnitudeSquared(u)
          }),
          (o.normalize = function (e, t) {
            var r = o.magnitude(e)
            return (
              (t.x = e.x / r),
              (t.y = e.y / r),
              (t.z = e.z / r),
              (t.w = e.w / r),
              t
            )
          }),
          (o.dot = function (e, t) {
            return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w
          }),
          (o.multiplyComponents = function (e, t, r) {
            return (
              (r.x = e.x * t.x),
              (r.y = e.y * t.y),
              (r.z = e.z * t.z),
              (r.w = e.w * t.w),
              r
            )
          }),
          (o.divideComponents = function (e, t, r) {
            return (
              (r.x = e.x / t.x),
              (r.y = e.y / t.y),
              (r.z = e.z / t.z),
              (r.w = e.w / t.w),
              r
            )
          }),
          (o.add = function (e, t, r) {
            return (
              (r.x = e.x + t.x),
              (r.y = e.y + t.y),
              (r.z = e.z + t.z),
              (r.w = e.w + t.w),
              r
            )
          }),
          (o.subtract = function (e, t, r) {
            return (
              (r.x = e.x - t.x),
              (r.y = e.y - t.y),
              (r.z = e.z - t.z),
              (r.w = e.w - t.w),
              r
            )
          }),
          (o.multiplyByScalar = function (e, t, r) {
            return (
              (r.x = e.x * t),
              (r.y = e.y * t),
              (r.z = e.z * t),
              (r.w = e.w * t),
              r
            )
          }),
          (o.divideByScalar = function (e, t, r) {
            return (
              (r.x = e.x / t),
              (r.y = e.y / t),
              (r.z = e.z / t),
              (r.w = e.w / t),
              r
            )
          }),
          (o.negate = function (e, t) {
            return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = -e.w), t
          }),
          (o.abs = function (e, t) {
            return (
              (t.x = Math.abs(e.x)),
              (t.y = Math.abs(e.y)),
              (t.z = Math.abs(e.z)),
              (t.w = Math.abs(e.w)),
              t
            )
          })
        var s = new o()
        o.lerp = function (e, t, r, n) {
          return (
            o.multiplyByScalar(t, r, s),
            (n = o.multiplyByScalar(e, 1 - r, n)),
            o.add(s, n, n)
          )
        }
        var c = new o()
        return (
          (o.mostOrthogonalAxis = function (e, t) {
            var r = o.normalize(e, c)
            return (
              o.abs(r, r),
              (t =
                r.x <= r.y
                  ? r.x <= r.z
                    ? r.x <= r.w ? o.clone(o.UNIT_X, t) : o.clone(o.UNIT_W, t)
                    : r.z <= r.w ? o.clone(o.UNIT_Z, t) : o.clone(o.UNIT_W, t)
                  : r.y <= r.z
                    ? r.y <= r.w ? o.clone(o.UNIT_Y, t) : o.clone(o.UNIT_W, t)
                    : r.z <= r.w ? o.clone(o.UNIT_Z, t) : o.clone(o.UNIT_W, t))
            )
          }),
          (o.equals = function (e, t) {
            return (
              e === t ||
              (r(e) &&
                r(t) &&
                e.x === t.x &&
                e.y === t.y &&
                e.z === t.z &&
                e.w === t.w)
            )
          }),
          (o.equalsArray = function (e, t, r) {
            return (
              e.x === t[r] &&
              e.y === t[r + 1] &&
              e.z === t[r + 2] &&
              e.w === t[r + 3]
            )
          }),
          (o.equalsEpsilon = function (e, t, n, a) {
            return (
              e === t ||
              (r(e) &&
                r(t) &&
                i.equalsEpsilon(e.x, t.x, n, a) &&
                i.equalsEpsilon(e.y, t.y, n, a) &&
                i.equalsEpsilon(e.z, t.z, n, a) &&
                i.equalsEpsilon(e.w, t.w, n, a))
            )
          }),
          (o.ZERO = a(new o(0, 0, 0, 0))),
          (o.UNIT_X = a(new o(1, 0, 0, 0))),
          (o.UNIT_Y = a(new o(0, 1, 0, 0))),
          (o.UNIT_Z = a(new o(0, 0, 1, 0))),
          (o.UNIT_W = a(new o(0, 0, 0, 1))),
          (o.prototype.clone = function (e) {
            return o.clone(this, e)
          }),
          (o.prototype.equals = function (e) {
            return o.equals(this, e)
          }),
          (o.prototype.equalsEpsilon = function (e, t, r) {
            return o.equalsEpsilon(this, e, t, r)
          }),
          (o.prototype.toString = function () {
            return (
              '(' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + ')'
            )
          }),
          o
        )
      }
    ),
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
      'Core/Matrix4',
      [
        './Cartesian3',
        './Cartesian4',
        './Check',
        './defaultValue',
        './defined',
        './defineProperties',
        './freezeObject',
        './Math',
        './Matrix3',
        './RuntimeError'
      ],
      function (e, t, r, n, a, i, o, u, s, c) {
        'use strict'
        function l (e, t, r, a, i, o, u, s, c, l, f, d, h, E, m, p) {
          (this[0] = n(e, 0)),
            (this[1] = n(i, 0)),
            (this[2] = n(c, 0)),
            (this[3] = n(h, 0)),
            (this[4] = n(t, 0)),
            (this[5] = n(o, 0)),
            (this[6] = n(l, 0)),
            (this[7] = n(E, 0)),
            (this[8] = n(r, 0)),
            (this[9] = n(u, 0)),
            (this[10] = n(f, 0)),
            (this[11] = n(m, 0)),
            (this[12] = n(a, 0)),
            (this[13] = n(s, 0)),
            (this[14] = n(d, 0)),
            (this[15] = n(p, 0))
        }
        (l.packedLength = 16),
          (l.pack = function (e, t, r) {
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
              (t[r++] = e[9]),
              (t[r++] = e[10]),
              (t[r++] = e[11]),
              (t[r++] = e[12]),
              (t[r++] = e[13]),
              (t[r++] = e[14]),
              (t[r] = e[15]),
              t
            )
          }),
          (l.unpack = function (e, t, r) {
            return (
              (t = n(t, 0)),
              a(r) || (r = new l()),
              (r[0] = e[t++]),
              (r[1] = e[t++]),
              (r[2] = e[t++]),
              (r[3] = e[t++]),
              (r[4] = e[t++]),
              (r[5] = e[t++]),
              (r[6] = e[t++]),
              (r[7] = e[t++]),
              (r[8] = e[t++]),
              (r[9] = e[t++]),
              (r[10] = e[t++]),
              (r[11] = e[t++]),
              (r[12] = e[t++]),
              (r[13] = e[t++]),
              (r[14] = e[t++]),
              (r[15] = e[t]),
              r
            )
          }),
          (l.clone = function (e, t) {
            if (a(e)) {
              return a(t)
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
                : new l(
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
                  )
            }
          }),
          (l.fromArray = l.unpack),
          (l.fromColumnMajorArray = function (e, t) {
            return l.clone(e, t)
          }),
          (l.fromRowMajorArray = function (e, t) {
            return a(t)
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
              : new l(
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
                )
          }),
          (l.fromRotationTranslation = function (t, r, i) {
            return (
              (r = n(r, e.ZERO)),
              a(i)
                ? ((i[0] = t[0]),
                  (i[1] = t[1]),
                  (i[2] = t[2]),
                  (i[3] = 0),
                  (i[4] = t[3]),
                  (i[5] = t[4]),
                  (i[6] = t[5]),
                  (i[7] = 0),
                  (i[8] = t[6]),
                  (i[9] = t[7]),
                  (i[10] = t[8]),
                  (i[11] = 0),
                  (i[12] = r.x),
                  (i[13] = r.y),
                  (i[14] = r.z),
                  (i[15] = 1),
                  i)
                : new l(
                    t[0],
                    t[3],
                    t[6],
                    r.x,
                    t[1],
                    t[4],
                    t[7],
                    r.y,
                    t[2],
                    t[5],
                    t[8],
                    r.z,
                    0,
                    0,
                    0,
                    1
                  )
            )
          }),
          (l.fromTranslationQuaternionRotationScale = function (e, t, r, n) {
            a(n) || (n = new l())
            var i = r.x,
              o = r.y,
              u = r.z,
              s = t.x * t.x,
              c = t.x * t.y,
              f = t.x * t.z,
              d = t.x * t.w,
              h = t.y * t.y,
              E = t.y * t.z,
              m = t.y * t.w,
              p = t.z * t.z,
              y = t.z * t.w,
              _ = t.w * t.w,
              T = s - h - p + _,
              R = 2 * (c - y),
              v = 2 * (f + m),
              A = 2 * (c + y),
              S = -s + h - p + _,
              N = 2 * (E - d),
              g = 2 * (f - m),
              I = 2 * (E + d),
              O = -s - h + p + _
            return (
              (n[0] = T * i),
              (n[1] = A * i),
              (n[2] = g * i),
              (n[3] = 0),
              (n[4] = R * o),
              (n[5] = S * o),
              (n[6] = I * o),
              (n[7] = 0),
              (n[8] = v * u),
              (n[9] = N * u),
              (n[10] = O * u),
              (n[11] = 0),
              (n[12] = e.x),
              (n[13] = e.y),
              (n[14] = e.z),
              (n[15] = 1),
              n
            )
          }),
          (l.fromTranslationRotationScale = function (e, t) {
            return l.fromTranslationQuaternionRotationScale(
              e.translation,
              e.rotation,
              e.scale,
              t
            )
          }),
          (l.fromTranslation = function (e, t) {
            return l.fromRotationTranslation(s.IDENTITY, e, t)
          }),
          (l.fromScale = function (e, t) {
            return a(t)
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
              : new l(e.x, 0, 0, 0, 0, e.y, 0, 0, 0, 0, e.z, 0, 0, 0, 0, 1)
          }),
          (l.fromUniformScale = function (e, t) {
            return a(t)
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
              : new l(e, 0, 0, 0, 0, e, 0, 0, 0, 0, e, 0, 0, 0, 0, 1)
          })
        var f = new e(),
          d = new e(),
          h = new e();
        (l.fromCamera = function (t, r) {
          var n = t.position,
            i = t.direction,
            o = t.up
          e.normalize(i, f),
            e.normalize(e.cross(f, o, d), d),
            e.normalize(e.cross(d, f, h), h)
          var u = d.x,
            s = d.y,
            c = d.z,
            E = f.x,
            m = f.y,
            p = f.z,
            y = h.x,
            _ = h.y,
            T = h.z,
            R = n.x,
            v = n.y,
            A = n.z,
            S = u * -R + s * -v + c * -A,
            N = y * -R + _ * -v + T * -A,
            g = E * R + m * v + p * A
          return a(r)
            ? ((r[0] = u),
              (r[1] = y),
              (r[2] = -E),
              (r[3] = 0),
              (r[4] = s),
              (r[5] = _),
              (r[6] = -m),
              (r[7] = 0),
              (r[8] = c),
              (r[9] = T),
              (r[10] = -p),
              (r[11] = 0),
              (r[12] = S),
              (r[13] = N),
              (r[14] = g),
              (r[15] = 1),
              r)
            : new l(u, s, c, S, y, _, T, N, -E, -m, -p, g, 0, 0, 0, 1)
        }),
          (l.computePerspectiveFieldOfView = function (e, t, r, n, a) {
            var i = Math.tan(0.5 * e),
              o = 1 / i,
              u = o / t,
              s = (n + r) / (r - n),
              c = 2 * n * r / (r - n)
            return (
              (a[0] = u),
              (a[1] = 0),
              (a[2] = 0),
              (a[3] = 0),
              (a[4] = 0),
              (a[5] = o),
              (a[6] = 0),
              (a[7] = 0),
              (a[8] = 0),
              (a[9] = 0),
              (a[10] = s),
              (a[11] = -1),
              (a[12] = 0),
              (a[13] = 0),
              (a[14] = c),
              (a[15] = 0),
              a
            )
          }),
          (l.computeOrthographicOffCenter = function (e, t, r, n, a, i, o) {
            var u = 1 / (t - e),
              s = 1 / (n - r),
              c = 1 / (i - a),
              l = -(t + e) * u,
              f = -(n + r) * s,
              d = -(i + a) * c
            return (
              (u *= 2),
              (s *= 2),
              (c *= -2),
              (o[0] = u),
              (o[1] = 0),
              (o[2] = 0),
              (o[3] = 0),
              (o[4] = 0),
              (o[5] = s),
              (o[6] = 0),
              (o[7] = 0),
              (o[8] = 0),
              (o[9] = 0),
              (o[10] = c),
              (o[11] = 0),
              (o[12] = l),
              (o[13] = f),
              (o[14] = d),
              (o[15] = 1),
              o
            )
          }),
          (l.computePerspectiveOffCenter = function (e, t, r, n, a, i, o) {
            var u = 2 * a / (t - e),
              s = 2 * a / (n - r),
              c = (t + e) / (t - e),
              l = (n + r) / (n - r),
              f = -(i + a) / (i - a),
              d = -1,
              h = -2 * i * a / (i - a)
            return (
              (o[0] = u),
              (o[1] = 0),
              (o[2] = 0),
              (o[3] = 0),
              (o[4] = 0),
              (o[5] = s),
              (o[6] = 0),
              (o[7] = 0),
              (o[8] = c),
              (o[9] = l),
              (o[10] = f),
              (o[11] = d),
              (o[12] = 0),
              (o[13] = 0),
              (o[14] = h),
              (o[15] = 0),
              o
            )
          }),
          (l.computeInfinitePerspectiveOffCenter = function (e, t, r, n, a, i) {
            var o = 2 * a / (t - e),
              u = 2 * a / (n - r),
              s = (t + e) / (t - e),
              c = (n + r) / (n - r),
              l = -1,
              f = -1,
              d = -2 * a
            return (
              (i[0] = o),
              (i[1] = 0),
              (i[2] = 0),
              (i[3] = 0),
              (i[4] = 0),
              (i[5] = u),
              (i[6] = 0),
              (i[7] = 0),
              (i[8] = s),
              (i[9] = c),
              (i[10] = l),
              (i[11] = f),
              (i[12] = 0),
              (i[13] = 0),
              (i[14] = d),
              (i[15] = 0),
              i
            )
          }),
          (l.computeViewportTransformation = function (e, t, r, a) {
            e = n(e, n.EMPTY_OBJECT)
            var i = n(e.x, 0),
              o = n(e.y, 0),
              u = n(e.width, 0),
              s = n(e.height, 0);
            (t = n(t, 0)), (r = n(r, 1))
            var c = 0.5 * u,
              l = 0.5 * s,
              f = 0.5 * (r - t),
              d = c,
              h = l,
              E = f,
              m = i + c,
              p = o + l,
              y = t + f,
              _ = 1
            return (
              (a[0] = d),
              (a[1] = 0),
              (a[2] = 0),
              (a[3] = 0),
              (a[4] = 0),
              (a[5] = h),
              (a[6] = 0),
              (a[7] = 0),
              (a[8] = 0),
              (a[9] = 0),
              (a[10] = E),
              (a[11] = 0),
              (a[12] = m),
              (a[13] = p),
              (a[14] = y),
              (a[15] = _),
              a
            )
          }),
          (l.computeView = function (t, r, n, a, i) {
            return (
              (i[0] = a.x),
              (i[1] = n.x),
              (i[2] = -r.x),
              (i[3] = 0),
              (i[4] = a.y),
              (i[5] = n.y),
              (i[6] = -r.y),
              (i[7] = 0),
              (i[8] = a.z),
              (i[9] = n.z),
              (i[10] = -r.z),
              (i[11] = 0),
              (i[12] = -e.dot(a, t)),
              (i[13] = -e.dot(n, t)),
              (i[14] = e.dot(r, t)),
              (i[15] = 1),
              i
            )
          }),
          (l.toArray = function (e, t) {
            return a(t)
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
              ]
          }),
          (l.getElementIndex = function (e, t) {
            return 4 * e + t
          }),
          (l.getColumn = function (e, t, r) {
            var n = 4 * t,
              a = e[n],
              i = e[n + 1],
              o = e[n + 2],
              u = e[n + 3]
            return (r.x = a), (r.y = i), (r.z = o), (r.w = u), r
          }),
          (l.setColumn = function (e, t, r, n) {
            n = l.clone(e, n)
            var a = 4 * t
            return (
              (n[a] = r.x),
              (n[a + 1] = r.y),
              (n[a + 2] = r.z),
              (n[a + 3] = r.w),
              n
            )
          }),
          (l.setTranslation = function (e, t, r) {
            return (
              (r[0] = e[0]),
              (r[1] = e[1]),
              (r[2] = e[2]),
              (r[3] = e[3]),
              (r[4] = e[4]),
              (r[5] = e[5]),
              (r[6] = e[6]),
              (r[7] = e[7]),
              (r[8] = e[8]),
              (r[9] = e[9]),
              (r[10] = e[10]),
              (r[11] = e[11]),
              (r[12] = t.x),
              (r[13] = t.y),
              (r[14] = t.z),
              (r[15] = e[15]),
              r
            )
          }),
          (l.getRow = function (e, t, r) {
            var n = e[t],
              a = e[t + 4],
              i = e[t + 8],
              o = e[t + 12]
            return (r.x = n), (r.y = a), (r.z = i), (r.w = o), r
          }),
          (l.setRow = function (e, t, r, n) {
            return (
              (n = l.clone(e, n)),
              (n[t] = r.x),
              (n[t + 4] = r.y),
              (n[t + 8] = r.z),
              (n[t + 12] = r.w),
              n
            )
          })
        var E = new e()
        l.getScale = function (t, r) {
          return (
            (r.x = e.magnitude(e.fromElements(t[0], t[1], t[2], E))),
            (r.y = e.magnitude(e.fromElements(t[4], t[5], t[6], E))),
            (r.z = e.magnitude(e.fromElements(t[8], t[9], t[10], E))),
            r
          )
        }
        var m = new e();
        (l.getMaximumScale = function (t) {
          return l.getScale(t, m), e.maximumComponent(m)
        }),
          (l.multiply = function (e, t, r) {
            var n = e[0],
              a = e[1],
              i = e[2],
              o = e[3],
              u = e[4],
              s = e[5],
              c = e[6],
              l = e[7],
              f = e[8],
              d = e[9],
              h = e[10],
              E = e[11],
              m = e[12],
              p = e[13],
              y = e[14],
              _ = e[15],
              T = t[0],
              R = t[1],
              v = t[2],
              A = t[3],
              S = t[4],
              N = t[5],
              g = t[6],
              I = t[7],
              O = t[8],
              w = t[9],
              M = t[10],
              x = t[11],
              C = t[12],
              P = t[13],
              D = t[14],
              L = t[15],
              U = n * T + u * R + f * v + m * A,
              b = a * T + s * R + d * v + p * A,
              F = i * T + c * R + h * v + y * A,
              B = o * T + l * R + E * v + _ * A,
              z = n * S + u * N + f * g + m * I,
              G = a * S + s * N + d * g + p * I,
              q = i * S + c * N + h * g + y * I,
              V = o * S + l * N + E * g + _ * I,
              W = n * O + u * w + f * M + m * x,
              X = a * O + s * w + d * M + p * x,
              H = i * O + c * w + h * M + y * x,
              Y = o * O + l * w + E * M + _ * x,
              k = n * C + u * P + f * D + m * L,
              j = a * C + s * P + d * D + p * L,
              Z = i * C + c * P + h * D + y * L,
              K = o * C + l * P + E * D + _ * L
            return (
              (r[0] = U),
              (r[1] = b),
              (r[2] = F),
              (r[3] = B),
              (r[4] = z),
              (r[5] = G),
              (r[6] = q),
              (r[7] = V),
              (r[8] = W),
              (r[9] = X),
              (r[10] = H),
              (r[11] = Y),
              (r[12] = k),
              (r[13] = j),
              (r[14] = Z),
              (r[15] = K),
              r
            )
          }),
          (l.add = function (e, t, r) {
            return (
              (r[0] = e[0] + t[0]),
              (r[1] = e[1] + t[1]),
              (r[2] = e[2] + t[2]),
              (r[3] = e[3] + t[3]),
              (r[4] = e[4] + t[4]),
              (r[5] = e[5] + t[5]),
              (r[6] = e[6] + t[6]),
              (r[7] = e[7] + t[7]),
              (r[8] = e[8] + t[8]),
              (r[9] = e[9] + t[9]),
              (r[10] = e[10] + t[10]),
              (r[11] = e[11] + t[11]),
              (r[12] = e[12] + t[12]),
              (r[13] = e[13] + t[13]),
              (r[14] = e[14] + t[14]),
              (r[15] = e[15] + t[15]),
              r
            )
          }),
          (l.subtract = function (e, t, r) {
            return (
              (r[0] = e[0] - t[0]),
              (r[1] = e[1] - t[1]),
              (r[2] = e[2] - t[2]),
              (r[3] = e[3] - t[3]),
              (r[4] = e[4] - t[4]),
              (r[5] = e[5] - t[5]),
              (r[6] = e[6] - t[6]),
              (r[7] = e[7] - t[7]),
              (r[8] = e[8] - t[8]),
              (r[9] = e[9] - t[9]),
              (r[10] = e[10] - t[10]),
              (r[11] = e[11] - t[11]),
              (r[12] = e[12] - t[12]),
              (r[13] = e[13] - t[13]),
              (r[14] = e[14] - t[14]),
              (r[15] = e[15] - t[15]),
              r
            )
          }),
          (l.multiplyTransformation = function (e, t, r) {
            var n = e[0],
              a = e[1],
              i = e[2],
              o = e[4],
              u = e[5],
              s = e[6],
              c = e[8],
              l = e[9],
              f = e[10],
              d = e[12],
              h = e[13],
              E = e[14],
              m = t[0],
              p = t[1],
              y = t[2],
              _ = t[4],
              T = t[5],
              R = t[6],
              v = t[8],
              A = t[9],
              S = t[10],
              N = t[12],
              g = t[13],
              I = t[14],
              O = n * m + o * p + c * y,
              w = a * m + u * p + l * y,
              M = i * m + s * p + f * y,
              x = n * _ + o * T + c * R,
              C = a * _ + u * T + l * R,
              P = i * _ + s * T + f * R,
              D = n * v + o * A + c * S,
              L = a * v + u * A + l * S,
              U = i * v + s * A + f * S,
              b = n * N + o * g + c * I + d,
              F = a * N + u * g + l * I + h,
              B = i * N + s * g + f * I + E
            return (
              (r[0] = O),
              (r[1] = w),
              (r[2] = M),
              (r[3] = 0),
              (r[4] = x),
              (r[5] = C),
              (r[6] = P),
              (r[7] = 0),
              (r[8] = D),
              (r[9] = L),
              (r[10] = U),
              (r[11] = 0),
              (r[12] = b),
              (r[13] = F),
              (r[14] = B),
              (r[15] = 1),
              r
            )
          }),
          (l.multiplyByMatrix3 = function (e, t, r) {
            var n = e[0],
              a = e[1],
              i = e[2],
              o = e[4],
              u = e[5],
              s = e[6],
              c = e[8],
              l = e[9],
              f = e[10],
              d = t[0],
              h = t[1],
              E = t[2],
              m = t[3],
              p = t[4],
              y = t[5],
              _ = t[6],
              T = t[7],
              R = t[8],
              v = n * d + o * h + c * E,
              A = a * d + u * h + l * E,
              S = i * d + s * h + f * E,
              N = n * m + o * p + c * y,
              g = a * m + u * p + l * y,
              I = i * m + s * p + f * y,
              O = n * _ + o * T + c * R,
              w = a * _ + u * T + l * R,
              M = i * _ + s * T + f * R
            return (
              (r[0] = v),
              (r[1] = A),
              (r[2] = S),
              (r[3] = 0),
              (r[4] = N),
              (r[5] = g),
              (r[6] = I),
              (r[7] = 0),
              (r[8] = O),
              (r[9] = w),
              (r[10] = M),
              (r[11] = 0),
              (r[12] = e[12]),
              (r[13] = e[13]),
              (r[14] = e[14]),
              (r[15] = e[15]),
              r
            )
          }),
          (l.multiplyByTranslation = function (e, t, r) {
            var n = t.x,
              a = t.y,
              i = t.z,
              o = n * e[0] + a * e[4] + i * e[8] + e[12],
              u = n * e[1] + a * e[5] + i * e[9] + e[13],
              s = n * e[2] + a * e[6] + i * e[10] + e[14]
            return (
              (r[0] = e[0]),
              (r[1] = e[1]),
              (r[2] = e[2]),
              (r[3] = e[3]),
              (r[4] = e[4]),
              (r[5] = e[5]),
              (r[6] = e[6]),
              (r[7] = e[7]),
              (r[8] = e[8]),
              (r[9] = e[9]),
              (r[10] = e[10]),
              (r[11] = e[11]),
              (r[12] = o),
              (r[13] = u),
              (r[14] = s),
              (r[15] = e[15]),
              r
            )
          })
        var p = new e();
        (l.multiplyByUniformScale = function (e, t, r) {
          return (p.x = t), (p.y = t), (p.z = t), l.multiplyByScale(e, p, r)
        }),
          (l.multiplyByScale = function (e, t, r) {
            var n = t.x,
              a = t.y,
              i = t.z
            return n === 1 && a === 1 && i === 1
              ? l.clone(e, r)
              : ((r[0] = n * e[0]),
                (r[1] = n * e[1]),
                (r[2] = n * e[2]),
                (r[3] = 0),
                (r[4] = a * e[4]),
                (r[5] = a * e[5]),
                (r[6] = a * e[6]),
                (r[7] = 0),
                (r[8] = i * e[8]),
                (r[9] = i * e[9]),
                (r[10] = i * e[10]),
                (r[11] = 0),
                (r[12] = e[12]),
                (r[13] = e[13]),
                (r[14] = e[14]),
                (r[15] = 1),
                r)
          }),
          (l.multiplyByVector = function (e, t, r) {
            var n = t.x,
              a = t.y,
              i = t.z,
              o = t.w,
              u = e[0] * n + e[4] * a + e[8] * i + e[12] * o,
              s = e[1] * n + e[5] * a + e[9] * i + e[13] * o,
              c = e[2] * n + e[6] * a + e[10] * i + e[14] * o,
              l = e[3] * n + e[7] * a + e[11] * i + e[15] * o
            return (r.x = u), (r.y = s), (r.z = c), (r.w = l), r
          }),
          (l.multiplyByPointAsVector = function (e, t, r) {
            var n = t.x,
              a = t.y,
              i = t.z,
              o = e[0] * n + e[4] * a + e[8] * i,
              u = e[1] * n + e[5] * a + e[9] * i,
              s = e[2] * n + e[6] * a + e[10] * i
            return (r.x = o), (r.y = u), (r.z = s), r
          }),
          (l.multiplyByPoint = function (e, t, r) {
            var n = t.x,
              a = t.y,
              i = t.z,
              o = e[0] * n + e[4] * a + e[8] * i + e[12],
              u = e[1] * n + e[5] * a + e[9] * i + e[13],
              s = e[2] * n + e[6] * a + e[10] * i + e[14]
            return (r.x = o), (r.y = u), (r.z = s), r
          }),
          (l.multiplyByScalar = function (e, t, r) {
            return (
              (r[0] = e[0] * t),
              (r[1] = e[1] * t),
              (r[2] = e[2] * t),
              (r[3] = e[3] * t),
              (r[4] = e[4] * t),
              (r[5] = e[5] * t),
              (r[6] = e[6] * t),
              (r[7] = e[7] * t),
              (r[8] = e[8] * t),
              (r[9] = e[9] * t),
              (r[10] = e[10] * t),
              (r[11] = e[11] * t),
              (r[12] = e[12] * t),
              (r[13] = e[13] * t),
              (r[14] = e[14] * t),
              (r[15] = e[15] * t),
              r
            )
          }),
          (l.negate = function (e, t) {
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
            )
          }),
          (l.transpose = function (e, t) {
            var r = e[1],
              n = e[2],
              a = e[3],
              i = e[6],
              o = e[7],
              u = e[11]
            return (
              (t[0] = e[0]),
              (t[1] = e[4]),
              (t[2] = e[8]),
              (t[3] = e[12]),
              (t[4] = r),
              (t[5] = e[5]),
              (t[6] = e[9]),
              (t[7] = e[13]),
              (t[8] = n),
              (t[9] = i),
              (t[10] = e[10]),
              (t[11] = e[14]),
              (t[12] = a),
              (t[13] = o),
              (t[14] = u),
              (t[15] = e[15]),
              t
            )
          }),
          (l.abs = function (e, t) {
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
            )
          }),
          (l.equals = function (e, t) {
            return (
              e === t ||
              (a(e) &&
                a(t) &&
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
            )
          }),
          (l.equalsEpsilon = function (e, t, r) {
            return (
              e === t ||
              (a(e) &&
                a(t) &&
                Math.abs(e[0] - t[0]) <= r &&
                Math.abs(e[1] - t[1]) <= r &&
                Math.abs(e[2] - t[2]) <= r &&
                Math.abs(e[3] - t[3]) <= r &&
                Math.abs(e[4] - t[4]) <= r &&
                Math.abs(e[5] - t[5]) <= r &&
                Math.abs(e[6] - t[6]) <= r &&
                Math.abs(e[7] - t[7]) <= r &&
                Math.abs(e[8] - t[8]) <= r &&
                Math.abs(e[9] - t[9]) <= r &&
                Math.abs(e[10] - t[10]) <= r &&
                Math.abs(e[11] - t[11]) <= r &&
                Math.abs(e[12] - t[12]) <= r &&
                Math.abs(e[13] - t[13]) <= r &&
                Math.abs(e[14] - t[14]) <= r &&
                Math.abs(e[15] - t[15]) <= r)
            )
          }),
          (l.getTranslation = function (e, t) {
            return (t.x = e[12]), (t.y = e[13]), (t.z = e[14]), t
          }),
          (l.getRotation = function (e, t) {
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
            )
          })
        var y = new s(),
          _ = new s(),
          T = new t(),
          R = new t(0, 0, 0, 1)
        return (
          (l.inverse = function (e, r) {
            if (
              s.equalsEpsilon(l.getRotation(e, y), _, u.EPSILON7) &&
              t.equals(l.getRow(e, 3, T), R)
            ) {
              return (
                (r[0] = 0),
                (r[1] = 0),
                (r[2] = 0),
                (r[3] = 0),
                (r[4] = 0),
                (r[5] = 0),
                (r[6] = 0),
                (r[7] = 0),
                (r[8] = 0),
                (r[9] = 0),
                (r[10] = 0),
                (r[11] = 0),
                (r[12] = -e[12]),
                (r[13] = -e[13]),
                (r[14] = -e[14]),
                (r[15] = 1),
                r
              )
            }
            var n = e[0],
              a = e[4],
              i = e[8],
              o = e[12],
              f = e[1],
              d = e[5],
              h = e[9],
              E = e[13],
              m = e[2],
              p = e[6],
              v = e[10],
              A = e[14],
              S = e[3],
              N = e[7],
              g = e[11],
              I = e[15],
              O = v * I,
              w = A * g,
              M = p * I,
              x = A * N,
              C = p * g,
              P = v * N,
              D = m * I,
              L = A * S,
              U = m * g,
              b = v * S,
              F = m * N,
              B = p * S,
              z = O * d + x * h + C * E - (w * d + M * h + P * E),
              G = w * f + D * h + b * E - (O * f + L * h + U * E),
              q = M * f + L * d + F * E - (x * f + D * d + B * E),
              V = P * f + U * d + B * h - (C * f + b * d + F * h),
              W = w * a + M * i + P * o - (O * a + x * i + C * o),
              X = O * n + L * i + U * o - (w * n + D * i + b * o),
              H = x * n + D * a + B * o - (M * n + L * a + F * o),
              Y = C * n + b * a + F * i - (P * n + U * a + B * i);
            (O = i * E),
              (w = o * h),
              (M = a * E),
              (x = o * d),
              (C = a * h),
              (P = i * d),
              (D = n * E),
              (L = o * f),
              (U = n * h),
              (b = i * f),
              (F = n * d),
              (B = a * f)
            var k = O * N + x * g + C * I - (w * N + M * g + P * I),
              j = w * S + D * g + b * I - (O * S + L * g + U * I),
              Z = M * S + L * N + F * I - (x * S + D * N + B * I),
              K = P * S + U * N + B * g - (C * S + b * N + F * g),
              J = M * v + P * A + w * p - (C * A + O * p + x * v),
              Q = U * A + O * m + L * v - (D * v + b * A + w * m),
              $ = D * p + B * A + x * m - (F * A + M * m + L * p),
              ee = F * v + C * m + b * p - (U * p + B * v + P * m),
              te = n * z + a * G + i * q + o * V
            if (Math.abs(te) < u.EPSILON20) {
              throw new c(
                'matrix is not invertible because its determinate is zero.'
              )
            }
            return (
              (te = 1 / te),
              (r[0] = z * te),
              (r[1] = G * te),
              (r[2] = q * te),
              (r[3] = V * te),
              (r[4] = W * te),
              (r[5] = X * te),
              (r[6] = H * te),
              (r[7] = Y * te),
              (r[8] = k * te),
              (r[9] = j * te),
              (r[10] = Z * te),
              (r[11] = K * te),
              (r[12] = J * te),
              (r[13] = Q * te),
              (r[14] = $ * te),
              (r[15] = ee * te),
              r
            )
          }),
          (l.inverseTransformation = function (e, t) {
            var r = e[0],
              n = e[1],
              a = e[2],
              i = e[4],
              o = e[5],
              u = e[6],
              s = e[8],
              c = e[9],
              l = e[10],
              f = e[12],
              d = e[13],
              h = e[14],
              E = -r * f - n * d - a * h,
              m = -i * f - o * d - u * h,
              p = -s * f - c * d - l * h
            return (
              (t[0] = r),
              (t[1] = i),
              (t[2] = s),
              (t[3] = 0),
              (t[4] = n),
              (t[5] = o),
              (t[6] = c),
              (t[7] = 0),
              (t[8] = a),
              (t[9] = u),
              (t[10] = l),
              (t[11] = 0),
              (t[12] = E),
              (t[13] = m),
              (t[14] = p),
              (t[15] = 1),
              t
            )
          }),
          (l.IDENTITY = o(
            new l(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
          )),
          (l.ZERO = o(new l(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0))),
          (l.COLUMN0ROW0 = 0),
          (l.COLUMN0ROW1 = 1),
          (l.COLUMN0ROW2 = 2),
          (l.COLUMN0ROW3 = 3),
          (l.COLUMN1ROW0 = 4),
          (l.COLUMN1ROW1 = 5),
          (l.COLUMN1ROW2 = 6),
          (l.COLUMN1ROW3 = 7),
          (l.COLUMN2ROW0 = 8),
          (l.COLUMN2ROW1 = 9),
          (l.COLUMN2ROW2 = 10),
          (l.COLUMN2ROW3 = 11),
          (l.COLUMN3ROW0 = 12),
          (l.COLUMN3ROW1 = 13),
          (l.COLUMN3ROW2 = 14),
          (l.COLUMN3ROW3 = 15),
          i(l.prototype, {
            length: {
              get: function () {
                return l.packedLength
              }
            }
          }),
          (l.prototype.clone = function (e) {
            return l.clone(this, e)
          }),
          (l.prototype.equals = function (e) {
            return l.equals(this, e)
          }),
          (l.equalsArray = function (e, t, r) {
            return (
              e[0] === t[r] &&
              e[1] === t[r + 1] &&
              e[2] === t[r + 2] &&
              e[3] === t[r + 3] &&
              e[4] === t[r + 4] &&
              e[5] === t[r + 5] &&
              e[6] === t[r + 6] &&
              e[7] === t[r + 7] &&
              e[8] === t[r + 8] &&
              e[9] === t[r + 9] &&
              e[10] === t[r + 10] &&
              e[11] === t[r + 11] &&
              e[12] === t[r + 12] &&
              e[13] === t[r + 13] &&
              e[14] === t[r + 14] &&
              e[15] === t[r + 15]
            )
          }),
          (l.prototype.equalsEpsilon = function (e, t) {
            return l.equalsEpsilon(this, e, t)
          }),
          (l.prototype.toString = function () {
            return (
              '(' +
              this[0] +
              ', ' +
              this[4] +
              ', ' +
              this[8] +
              ', ' +
              this[12] +
              ')\n(' +
              this[1] +
              ', ' +
              this[5] +
              ', ' +
              this[9] +
              ', ' +
              this[13] +
              ')\n(' +
              this[2] +
              ', ' +
              this[6] +
              ', ' +
              this[10] +
              ', ' +
              this[14] +
              ')\n(' +
              this[3] +
              ', ' +
              this[7] +
              ', ' +
              this[11] +
              ', ' +
              this[15] +
              ')'
            )
          }),
          l
        )
      }
    ),
    define(
      'Core/Rectangle',
      [
        './Cartographic',
        './Check',
        './defaultValue',
        './defined',
        './defineProperties',
        './Ellipsoid',
        './freezeObject',
        './Math'
      ],
      function (e, t, r, n, a, i, o, u) {
        'use strict'
        function s (e, t, n, a) {
          (this.west = r(e, 0)),
            (this.south = r(t, 0)),
            (this.east = r(n, 0)),
            (this.north = r(a, 0))
        }
        a(s.prototype, {
          width: {
            get: function () {
              return s.computeWidth(this)
            }
          },
          height: {
            get: function () {
              return s.computeHeight(this)
            }
          }
        }),
          (s.packedLength = 4),
          (s.pack = function (e, t, n) {
            return (
              (n = r(n, 0)),
              (t[n++] = e.west),
              (t[n++] = e.south),
              (t[n++] = e.east),
              (t[n] = e.north),
              t
            )
          }),
          (s.unpack = function (e, t, a) {
            return (
              (t = r(t, 0)),
              n(a) || (a = new s()),
              (a.west = e[t++]),
              (a.south = e[t++]),
              (a.east = e[t++]),
              (a.north = e[t]),
              a
            )
          }),
          (s.computeWidth = function (e) {
            var t = e.east,
              r = e.west
            return t < r && (t += u.TWO_PI), t - r
          }),
          (s.computeHeight = function (e) {
            return e.north - e.south
          }),
          (s.fromDegrees = function (e, t, a, i, o) {
            return (
              (e = u.toRadians(r(e, 0))),
              (t = u.toRadians(r(t, 0))),
              (a = u.toRadians(r(a, 0))),
              (i = u.toRadians(r(i, 0))),
              n(o)
                ? ((o.west = e), (o.south = t), (o.east = a), (o.north = i), o)
                : new s(e, t, a, i)
            )
          }),
          (s.fromRadians = function (e, t, a, i, o) {
            return n(o)
              ? ((o.west = r(e, 0)),
                (o.south = r(t, 0)),
                (o.east = r(a, 0)),
                (o.north = r(i, 0)),
                o)
              : new s(e, t, a, i)
          }),
          (s.fromCartographicArray = function (e, t) {
            for (
              var r = Number.MAX_VALUE,
                a = -Number.MAX_VALUE,
                i = Number.MAX_VALUE,
                o = -Number.MAX_VALUE,
                c = Number.MAX_VALUE,
                l = -Number.MAX_VALUE,
                f = 0,
                d = e.length;
              f < d;
              f++
            ) {
              var h = e[f];
              (r = Math.min(r, h.longitude)),
                (a = Math.max(a, h.longitude)),
                (c = Math.min(c, h.latitude)),
                (l = Math.max(l, h.latitude))
              var E = h.longitude >= 0 ? h.longitude : h.longitude + u.TWO_PI;
              (i = Math.min(i, E)), (o = Math.max(o, E))
            }
            return (
              a - r > o - i &&
                ((r = i),
                (a = o),
                a > u.PI && (a -= u.TWO_PI),
                r > u.PI && (r -= u.TWO_PI)),
              n(t)
                ? ((t.west = r), (t.south = c), (t.east = a), (t.north = l), t)
                : new s(r, c, a, l)
            )
          }),
          (s.fromCartesianArray = function (e, t, a) {
            t = r(t, i.WGS84)
            for (
              var o = Number.MAX_VALUE,
                c = -Number.MAX_VALUE,
                l = Number.MAX_VALUE,
                f = -Number.MAX_VALUE,
                d = Number.MAX_VALUE,
                h = -Number.MAX_VALUE,
                E = 0,
                m = e.length;
              E < m;
              E++
            ) {
              var p = t.cartesianToCartographic(e[E]);
              (o = Math.min(o, p.longitude)),
                (c = Math.max(c, p.longitude)),
                (d = Math.min(d, p.latitude)),
                (h = Math.max(h, p.latitude))
              var y = p.longitude >= 0 ? p.longitude : p.longitude + u.TWO_PI;
              (l = Math.min(l, y)), (f = Math.max(f, y))
            }
            return (
              c - o > f - l &&
                ((o = l),
                (c = f),
                c > u.PI && (c -= u.TWO_PI),
                o > u.PI && (o -= u.TWO_PI)),
              n(a)
                ? ((a.west = o), (a.south = d), (a.east = c), (a.north = h), a)
                : new s(o, d, c, h)
            )
          }),
          (s.clone = function (e, t) {
            if (n(e)) {
              return n(t)
                ? ((t.west = e.west),
                  (t.south = e.south),
                  (t.east = e.east),
                  (t.north = e.north),
                  t)
                : new s(e.west, e.south, e.east, e.north)
            }
          }),
          (s.prototype.clone = function (e) {
            return s.clone(this, e)
          }),
          (s.prototype.equals = function (e) {
            return s.equals(this, e)
          }),
          (s.equals = function (e, t) {
            return (
              e === t ||
              (n(e) &&
                n(t) &&
                e.west === t.west &&
                e.south === t.south &&
                e.east === t.east &&
                e.north === t.north)
            )
          }),
          (s.prototype.equalsEpsilon = function (e, t) {
            return (
              n(e) &&
              Math.abs(this.west - e.west) <= t &&
              Math.abs(this.south - e.south) <= t &&
              Math.abs(this.east - e.east) <= t &&
              Math.abs(this.north - e.north) <= t
            )
          }),
          (s.validate = function (e) {}),
          (s.southwest = function (t, r) {
            return n(r)
              ? ((r.longitude = t.west),
                (r.latitude = t.south),
                (r.height = 0),
                r)
              : new e(t.west, t.south)
          }),
          (s.northwest = function (t, r) {
            return n(r)
              ? ((r.longitude = t.west),
                (r.latitude = t.north),
                (r.height = 0),
                r)
              : new e(t.west, t.north)
          }),
          (s.northeast = function (t, r) {
            return n(r)
              ? ((r.longitude = t.east),
                (r.latitude = t.north),
                (r.height = 0),
                r)
              : new e(t.east, t.north)
          }),
          (s.southeast = function (t, r) {
            return n(r)
              ? ((r.longitude = t.east),
                (r.latitude = t.south),
                (r.height = 0),
                r)
              : new e(t.east, t.south)
          }),
          (s.center = function (t, r) {
            var a = t.east,
              i = t.west
            a < i && (a += u.TWO_PI)
            var o = u.negativePiToPi(0.5 * (i + a)),
              s = 0.5 * (t.south + t.north)
            return n(r)
              ? ((r.longitude = o), (r.latitude = s), (r.height = 0), r)
              : new e(o, s)
          }),
          (s.intersection = function (e, t, r) {
            var a = e.east,
              i = e.west,
              o = t.east,
              c = t.west
            a < i && o > 0
              ? (a += u.TWO_PI)
              : o < c && a > 0 && (o += u.TWO_PI),
              a < i && c < 0
                ? (c += u.TWO_PI)
                : o < c && i < 0 && (i += u.TWO_PI)
            var l = u.negativePiToPi(Math.max(i, c)),
              f = u.negativePiToPi(Math.min(a, o))
            if (!((e.west < e.east || t.west < t.east) && f <= l)) {
              var d = Math.max(e.south, t.south),
                h = Math.min(e.north, t.north)
              if (!(d >= h)) {
                return n(r)
                  ? ((r.west = l),
                    (r.south = d),
                    (r.east = f),
                    (r.north = h),
                    r)
                  : new s(l, d, f, h)
              }
            }
          }),
          (s.simpleIntersection = function (e, t, r) {
            var a = Math.max(e.west, t.west),
              i = Math.max(e.south, t.south),
              o = Math.min(e.east, t.east),
              u = Math.min(e.north, t.north)
            if (!(i >= u || a >= o)) {
              return n(r)
                ? ((r.west = a), (r.south = i), (r.east = o), (r.north = u), r)
                : new s(a, i, o, u)
            }
          }),
          (s.union = function (e, t, r) {
            n(r) || (r = new s())
            var a = e.east,
              i = e.west,
              o = t.east,
              c = t.west
            a < i && o > 0
              ? (a += u.TWO_PI)
              : o < c && a > 0 && (o += u.TWO_PI),
              a < i && c < 0
                ? (c += u.TWO_PI)
                : o < c && i < 0 && (i += u.TWO_PI)
            var l = u.convertLongitudeRange(Math.min(i, c)),
              f = u.convertLongitudeRange(Math.max(a, o))
            return (
              (r.west = l),
              (r.south = Math.min(e.south, t.south)),
              (r.east = f),
              (r.north = Math.max(e.north, t.north)),
              r
            )
          }),
          (s.expand = function (e, t, r) {
            return (
              n(r) || (r = new s()),
              (r.west = Math.min(e.west, t.longitude)),
              (r.south = Math.min(e.south, t.latitude)),
              (r.east = Math.max(e.east, t.longitude)),
              (r.north = Math.max(e.north, t.latitude)),
              r
            )
          }),
          (s.contains = function (e, t) {
            var r = t.longitude,
              n = t.latitude,
              a = e.west,
              i = e.east
            return (
              i < a && ((i += u.TWO_PI), r < 0 && (r += u.TWO_PI)),
              (r > a || u.equalsEpsilon(r, a, u.EPSILON14)) &&
                (r < i || u.equalsEpsilon(r, i, u.EPSILON14)) &&
                n >= e.south &&
                n <= e.north
            )
          })
        var c = new e()
        return (
          (s.subsample = function (e, t, a, o) {
            (t = r(t, i.WGS84)), (a = r(a, 0)), n(o) || (o = [])
            var l = 0,
              f = e.north,
              d = e.south,
              h = e.east,
              E = e.west,
              m = c;
            (m.height = a),
              (m.longitude = E),
              (m.latitude = f),
              (o[l] = t.cartographicToCartesian(m, o[l])),
              l++,
              (m.longitude = h),
              (o[l] = t.cartographicToCartesian(m, o[l])),
              l++,
              (m.latitude = d),
              (o[l] = t.cartographicToCartesian(m, o[l])),
              l++,
              (m.longitude = E),
              (o[l] = t.cartographicToCartesian(m, o[l])),
              l++,
              f < 0
                ? (m.latitude = f)
                : d > 0 ? (m.latitude = d) : (m.latitude = 0)
            for (var p = 1; p < 8; ++p) {
              (m.longitude = -Math.PI + p * u.PI_OVER_TWO),
                s.contains(e, m) &&
                  ((o[l] = t.cartographicToCartesian(m, o[l])), l++)
            }
            return (
              m.latitude === 0 &&
                ((m.longitude = E),
                (o[l] = t.cartographicToCartesian(m, o[l])),
                l++,
                (m.longitude = h),
                (o[l] = t.cartographicToCartesian(m, o[l])),
                l++),
              (o.length = l),
              o
            )
          }),
          (s.MAX_VALUE = o(
            new s(-Math.PI, -u.PI_OVER_TWO, Math.PI, u.PI_OVER_TWO)
          )),
          s
        )
      }
    ),
    define(
      'Core/BoundingSphere',
      [
        './Cartesian3',
        './Cartographic',
        './Check',
        './defaultValue',
        './defined',
        './Ellipsoid',
        './GeographicProjection',
        './Intersect',
        './Interval',
        './Matrix3',
        './Matrix4',
        './Rectangle'
      ],
      function (e, t, r, n, a, i, o, u, s, c, l, f) {
        'use strict'
        function d (t, r) {
          (this.center = e.clone(n(t, e.ZERO))), (this.radius = n(r, 0))
        }
        var h = new e(),
          E = new e(),
          m = new e(),
          p = new e(),
          y = new e(),
          _ = new e(),
          T = new e(),
          R = new e(),
          v = new e(),
          A = new e(),
          S = new e(),
          N = new e()
        d.fromPoints = function (t, r) {
          if ((a(r) || (r = new d()), !a(t) || t.length === 0)) { return (r.center = e.clone(e.ZERO, r.center)), (r.radius = 0), r }
          var n,
            i = e.clone(t[0], T),
            o = e.clone(i, h),
            u = e.clone(i, E),
            s = e.clone(i, m),
            c = e.clone(i, p),
            l = e.clone(i, y),
            f = e.clone(i, _),
            g = t.length
          for (n = 1; n < g; n++) {
            e.clone(t[n], i)
            var I = i.x,
              O = i.y,
              w = i.z
            I < o.x && e.clone(i, o),
              I > c.x && e.clone(i, c),
              O < u.y && e.clone(i, u),
              O > l.y && e.clone(i, l),
              w < s.z && e.clone(i, s),
              w > f.z && e.clone(i, f)
          }
          var M = e.magnitudeSquared(e.subtract(c, o, R)),
            x = e.magnitudeSquared(e.subtract(l, u, R)),
            C = e.magnitudeSquared(e.subtract(f, s, R)),
            P = o,
            D = c,
            L = M
          x > L && ((L = x), (P = u), (D = l)),
            C > L && ((L = C), (P = s), (D = f))
          var U = v;
          (U.x = 0.5 * (P.x + D.x)),
            (U.y = 0.5 * (P.y + D.y)),
            (U.z = 0.5 * (P.z + D.z))
          var b = e.magnitudeSquared(e.subtract(D, U, R)),
            F = Math.sqrt(b),
            B = A;
          (B.x = o.x), (B.y = u.y), (B.z = s.z)
          var z = S;
          (z.x = c.x), (z.y = l.y), (z.z = f.z)
          var G = e.multiplyByScalar(e.add(B, z, R), 0.5, N),
            q = 0
          for (n = 0; n < g; n++) {
            e.clone(t[n], i)
            var V = e.magnitude(e.subtract(i, G, R))
            V > q && (q = V)
            var W = e.magnitudeSquared(e.subtract(i, U, R))
            if (W > b) {
              var X = Math.sqrt(W);
              (F = 0.5 * (F + X)), (b = F * F)
              var H = X - F;
              (U.x = (F * U.x + H * i.x) / X),
                (U.y = (F * U.y + H * i.y) / X),
                (U.z = (F * U.z + H * i.z) / X)
            }
          }
          return (
            F < q
              ? (e.clone(U, r.center), (r.radius = F))
              : (e.clone(G, r.center), (r.radius = q)),
            r
          )
        }
        var g = new o(),
          I = new e(),
          O = new e(),
          w = new t(),
          M = new t();
        (d.fromRectangle2D = function (e, t, r) {
          return d.fromRectangleWithHeights2D(e, t, 0, 0, r)
        }),
          (d.fromRectangleWithHeights2D = function (t, r, i, o, u) {
            if ((a(u) || (u = new d()), !a(t))) { return (u.center = e.clone(e.ZERO, u.center)), (u.radius = 0), u }
            (r = n(r, g)),
              f.southwest(t, w),
              (w.height = i),
              f.northeast(t, M),
              (M.height = o)
            var s = r.project(w, I),
              c = r.project(M, O),
              l = c.x - s.x,
              h = c.y - s.y,
              E = c.z - s.z
            u.radius = 0.5 * Math.sqrt(l * l + h * h + E * E)
            var m = u.center
            return (
              (m.x = s.x + 0.5 * l),
              (m.y = s.y + 0.5 * h),
              (m.z = s.z + 0.5 * E),
              u
            )
          })
        var x = [];
        (d.fromRectangle3D = function (e, t, r, o) {
          (t = n(t, i.WGS84)), (r = n(r, 0))
          var u
          return a(e) && (u = f.subsample(e, t, r, x)), d.fromPoints(u, o)
        }),
          (d.fromVertices = function (t, r, i, o) {
            if ((a(o) || (o = new d()), !a(t) || t.length === 0)) { return (o.center = e.clone(e.ZERO, o.center)), (o.radius = 0), o }
            (r = n(r, e.ZERO)), (i = n(i, 3))
            var u = T;
            (u.x = t[0] + r.x), (u.y = t[1] + r.y), (u.z = t[2] + r.z)
            var s,
              c = e.clone(u, h),
              l = e.clone(u, E),
              f = e.clone(u, m),
              g = e.clone(u, p),
              I = e.clone(u, y),
              O = e.clone(u, _),
              w = t.length
            for (s = 0; s < w; s += i) {
              var M = t[s] + r.x,
                x = t[s + 1] + r.y,
                C = t[s + 2] + r.z;
              (u.x = M),
                (u.y = x),
                (u.z = C),
                M < c.x && e.clone(u, c),
                M > g.x && e.clone(u, g),
                x < l.y && e.clone(u, l),
                x > I.y && e.clone(u, I),
                C < f.z && e.clone(u, f),
                C > O.z && e.clone(u, O)
            }
            var P = e.magnitudeSquared(e.subtract(g, c, R)),
              D = e.magnitudeSquared(e.subtract(I, l, R)),
              L = e.magnitudeSquared(e.subtract(O, f, R)),
              U = c,
              b = g,
              F = P
            D > F && ((F = D), (U = l), (b = I)),
              L > F && ((F = L), (U = f), (b = O))
            var B = v;
            (B.x = 0.5 * (U.x + b.x)),
              (B.y = 0.5 * (U.y + b.y)),
              (B.z = 0.5 * (U.z + b.z))
            var z = e.magnitudeSquared(e.subtract(b, B, R)),
              G = Math.sqrt(z),
              q = A;
            (q.x = c.x), (q.y = l.y), (q.z = f.z)
            var V = S;
            (V.x = g.x), (V.y = I.y), (V.z = O.z)
            var W = e.multiplyByScalar(e.add(q, V, R), 0.5, N),
              X = 0
            for (s = 0; s < w; s += i) {
              (u.x = t[s] + r.x),
                (u.y = t[s + 1] + r.y),
                (u.z = t[s + 2] + r.z)
              var H = e.magnitude(e.subtract(u, W, R))
              H > X && (X = H)
              var Y = e.magnitudeSquared(e.subtract(u, B, R))
              if (Y > z) {
                var k = Math.sqrt(Y);
                (G = 0.5 * (G + k)), (z = G * G)
                var j = k - G;
                (B.x = (G * B.x + j * u.x) / k),
                  (B.y = (G * B.y + j * u.y) / k),
                  (B.z = (G * B.z + j * u.z) / k)
              }
            }
            return (
              G < X
                ? (e.clone(B, o.center), (o.radius = G))
                : (e.clone(W, o.center), (o.radius = X)),
              o
            )
          }),
          (d.fromEncodedCartesianVertices = function (t, r, n) {
            if (
              (a(n) || (n = new d()),
              !a(t) || !a(r) || t.length !== r.length || t.length === 0)
            ) { return (n.center = e.clone(e.ZERO, n.center)), (n.radius = 0), n }
            var i = T;
            (i.x = t[0] + r[0]), (i.y = t[1] + r[1]), (i.z = t[2] + r[2])
            var o,
              u = e.clone(i, h),
              s = e.clone(i, E),
              c = e.clone(i, m),
              l = e.clone(i, p),
              f = e.clone(i, y),
              g = e.clone(i, _),
              I = t.length
            for (o = 0; o < I; o += 3) {
              var O = t[o] + r[o],
                w = t[o + 1] + r[o + 1],
                M = t[o + 2] + r[o + 2];
              (i.x = O),
                (i.y = w),
                (i.z = M),
                O < u.x && e.clone(i, u),
                O > l.x && e.clone(i, l),
                w < s.y && e.clone(i, s),
                w > f.y && e.clone(i, f),
                M < c.z && e.clone(i, c),
                M > g.z && e.clone(i, g)
            }
            var x = e.magnitudeSquared(e.subtract(l, u, R)),
              C = e.magnitudeSquared(e.subtract(f, s, R)),
              P = e.magnitudeSquared(e.subtract(g, c, R)),
              D = u,
              L = l,
              U = x
            C > U && ((U = C), (D = s), (L = f)),
              P > U && ((U = P), (D = c), (L = g))
            var b = v;
            (b.x = 0.5 * (D.x + L.x)),
              (b.y = 0.5 * (D.y + L.y)),
              (b.z = 0.5 * (D.z + L.z))
            var F = e.magnitudeSquared(e.subtract(L, b, R)),
              B = Math.sqrt(F),
              z = A;
            (z.x = u.x), (z.y = s.y), (z.z = c.z)
            var G = S;
            (G.x = l.x), (G.y = f.y), (G.z = g.z)
            var q = e.multiplyByScalar(e.add(z, G, R), 0.5, N),
              V = 0
            for (o = 0; o < I; o += 3) {
              (i.x = t[o] + r[o]),
                (i.y = t[o + 1] + r[o + 1]),
                (i.z = t[o + 2] + r[o + 2])
              var W = e.magnitude(e.subtract(i, q, R))
              W > V && (V = W)
              var X = e.magnitudeSquared(e.subtract(i, b, R))
              if (X > F) {
                var H = Math.sqrt(X);
                (B = 0.5 * (B + H)), (F = B * B)
                var Y = H - B;
                (b.x = (B * b.x + Y * i.x) / H),
                  (b.y = (B * b.y + Y * i.y) / H),
                  (b.z = (B * b.z + Y * i.z) / H)
              }
            }
            return (
              B < V
                ? (e.clone(b, n.center), (n.radius = B))
                : (e.clone(q, n.center), (n.radius = V)),
              n
            )
          }),
          (d.fromCornerPoints = function (t, r, n) {
            a(n) || (n = new d())
            var i = n.center
            return (
              e.add(t, r, i),
              e.multiplyByScalar(i, 0.5, i),
              (n.radius = e.distance(i, r)),
              n
            )
          }),
          (d.fromEllipsoid = function (t, r) {
            return (
              a(r) || (r = new d()),
              e.clone(e.ZERO, r.center),
              (r.radius = t.maximumRadius),
              r
            )
          })
        var C = new e()
        d.fromBoundingSpheres = function (t, r) {
          if ((a(r) || (r = new d()), !a(t) || t.length === 0)) { return (r.center = e.clone(e.ZERO, r.center)), (r.radius = 0), r }
          var n = t.length
          if (n === 1) return d.clone(t[0], r)
          if (n === 2) return d.union(t[0], t[1], r)
          var i,
            o = []
          for (i = 0; i < n; i++) o.push(t[i].center)
          r = d.fromPoints(o, r)
          var u = r.center,
            s = r.radius
          for (i = 0; i < n; i++) {
            var c = t[i]
            s = Math.max(s, e.distance(u, c.center, C) + c.radius)
          }
          return (r.radius = s), r
        }
        var P = new e(),
          D = new e(),
          L = new e();
        (d.fromOrientedBoundingBox = function (t, r) {
          a(r) || (r = new d())
          var n = t.halfAxes,
            i = c.getColumn(n, 0, P),
            o = c.getColumn(n, 1, D),
            u = c.getColumn(n, 2, L)
          return (
            e.add(i, o, i),
            e.add(i, u, i),
            (r.center = e.clone(t.center, r.center)),
            (r.radius = e.magnitude(i)),
            r
          )
        }),
          (d.clone = function (t, r) {
            if (a(t)) {
              return a(r)
                ? ((r.center = e.clone(t.center, r.center)),
                  (r.radius = t.radius),
                  r)
                : new d(t.center, t.radius)
            }
          }),
          (d.packedLength = 4),
          (d.pack = function (e, t, r) {
            r = n(r, 0)
            var a = e.center
            return (
              (t[r++] = a.x),
              (t[r++] = a.y),
              (t[r++] = a.z),
              (t[r] = e.radius),
              t
            )
          }),
          (d.unpack = function (e, t, r) {
            (t = n(t, 0)), a(r) || (r = new d())
            var i = r.center
            return (
              (i.x = e[t++]),
              (i.y = e[t++]),
              (i.z = e[t++]),
              (r.radius = e[t]),
              r
            )
          })
        var U = new e(),
          b = new e()
        d.union = function (t, r, n) {
          a(n) || (n = new d())
          var i = t.center,
            o = t.radius,
            u = r.center,
            s = r.radius,
            c = e.subtract(u, i, U),
            l = e.magnitude(c)
          if (o >= l + s) return t.clone(n), n
          if (s >= l + o) return r.clone(n), n
          var f = 0.5 * (o + l + s),
            h = e.multiplyByScalar(c, (-o + f) / l, b)
          return e.add(h, i, h), e.clone(h, n.center), (n.radius = f), n
        }
        var F = new e();
        (d.expand = function (t, r, n) {
          n = d.clone(t, n)
          var a = e.magnitude(e.subtract(r, n.center, F))
          return a > n.radius && (n.radius = a), n
        }),
          (d.intersectPlane = function (t, r) {
            var n = t.center,
              a = t.radius,
              i = r.normal,
              o = e.dot(i, n) + r.distance
            return o < -a ? u.OUTSIDE : o < a ? u.INTERSECTING : u.INSIDE
          }),
          (d.transform = function (e, t, r) {
            return (
              a(r) || (r = new d()),
              (r.center = l.multiplyByPoint(t, e.center, r.center)),
              (r.radius = l.getMaximumScale(t) * e.radius),
              r
            )
          })
        var B = new e();
        (d.distanceSquaredTo = function (t, r) {
          var n = e.subtract(t.center, r, B)
          return e.magnitudeSquared(n) - t.radius * t.radius
        }),
          (d.transformWithoutScale = function (e, t, r) {
            return (
              a(r) || (r = new d()),
              (r.center = l.multiplyByPoint(t, e.center, r.center)),
              (r.radius = e.radius),
              r
            )
          })
        var z = new e()
        d.computePlaneDistances = function (t, r, n, i) {
          a(i) || (i = new s())
          var o = e.subtract(t.center, r, z),
            u = e.dot(n, o)
          return (i.start = u - t.radius), (i.stop = u + t.radius), i
        }
        for (
          var G = new e(),
            q = new e(),
            V = new e(),
            W = new e(),
            X = new e(),
            H = new t(),
            Y = new Array(8),
            k = 0;
          k < 8;
          ++k
        ) { Y[k] = new e() }
        var j = new o()
        return (
          (d.projectTo2D = function (t, r, a) {
            r = n(r, j)
            var i = r.ellipsoid,
              o = t.center,
              u = t.radius,
              s = i.geodeticSurfaceNormal(o, G),
              c = e.cross(e.UNIT_Z, s, q)
            e.normalize(c, c)
            var l = e.cross(s, c, V)
            e.normalize(l, l),
              e.multiplyByScalar(s, u, s),
              e.multiplyByScalar(l, u, l),
              e.multiplyByScalar(c, u, c)
            var f = e.negate(l, X),
              h = e.negate(c, W),
              E = Y,
              m = E[0]
            e.add(s, l, m),
              e.add(m, c, m),
              (m = E[1]),
              e.add(s, l, m),
              e.add(m, h, m),
              (m = E[2]),
              e.add(s, f, m),
              e.add(m, h, m),
              (m = E[3]),
              e.add(s, f, m),
              e.add(m, c, m),
              e.negate(s, s),
              (m = E[4]),
              e.add(s, l, m),
              e.add(m, c, m),
              (m = E[5]),
              e.add(s, l, m),
              e.add(m, h, m),
              (m = E[6]),
              e.add(s, f, m),
              e.add(m, h, m),
              (m = E[7]),
              e.add(s, f, m),
              e.add(m, c, m)
            for (var p = E.length, y = 0; y < p; ++y) {
              var _ = E[y]
              e.add(o, _, _)
              var T = i.cartesianToCartographic(_, H)
              r.project(T, _)
            }
            (a = d.fromPoints(E, a)), (o = a.center)
            var R = o.x,
              v = o.y,
              A = o.z
            return (o.x = A), (o.y = R), (o.z = v), a
          }),
          (d.isOccluded = function (e, t) {
            return !t.isBoundingSphereVisible(e)
          }),
          (d.equals = function (t, r) {
            return (
              t === r ||
              (a(t) &&
                a(r) &&
                e.equals(t.center, r.center) &&
                t.radius === r.radius)
            )
          }),
          (d.prototype.intersectPlane = function (e) {
            return d.intersectPlane(this, e)
          }),
          (d.prototype.distanceSquaredTo = function (e) {
            return d.distanceSquaredTo(this, e)
          }),
          (d.prototype.computePlaneDistances = function (e, t, r) {
            return d.computePlaneDistances(this, e, t, r)
          }),
          (d.prototype.isOccluded = function (e) {
            return d.isOccluded(this, e)
          }),
          (d.prototype.equals = function (e) {
            return d.equals(this, e)
          }),
          (d.prototype.clone = function (e) {
            return d.clone(this, e)
          }),
          d
        )
      }
    ),
    define(
      'Core/Cartesian2',
      [
        './Check',
        './defaultValue',
        './defined',
        './DeveloperError',
        './freezeObject',
        './Math'
      ],
      function (e, t, r, n, a, i) {
        'use strict'
        function o (e, r) {
          (this.x = t(e, 0)), (this.y = t(r, 0))
        }
        (o.fromElements = function (e, t, n) {
          return r(n) ? ((n.x = e), (n.y = t), n) : new o(e, t)
        }),
          (o.clone = function (e, t) {
            if (r(e)) { return r(t) ? ((t.x = e.x), (t.y = e.y), t) : new o(e.x, e.y) }
          }),
          (o.fromCartesian3 = o.clone),
          (o.fromCartesian4 = o.clone),
          (o.packedLength = 2),
          (o.pack = function (e, r, n) {
            return (n = t(n, 0)), (r[n++] = e.x), (r[n] = e.y), r
          }),
          (o.unpack = function (e, n, a) {
            return (
              (n = t(n, 0)),
              r(a) || (a = new o()),
              (a.x = e[n++]),
              (a.y = e[n]),
              a
            )
          }),
          (o.packArray = function (e, t) {
            var n = e.length
            r(t) ? (t.length = 2 * n) : (t = new Array(2 * n))
            for (var a = 0; a < n; ++a) o.pack(e[a], t, 2 * a)
            return t
          }),
          (o.unpackArray = function (e, t) {
            var n = e.length
            r(t) ? (t.length = n / 2) : (t = new Array(n / 2))
            for (var a = 0; a < n; a += 2) {
              var i = a / 2
              t[i] = o.unpack(e, a, t[i])
            }
            return t
          }),
          (o.fromArray = o.unpack),
          (o.maximumComponent = function (e) {
            return Math.max(e.x, e.y)
          }),
          (o.minimumComponent = function (e) {
            return Math.min(e.x, e.y)
          }),
          (o.minimumByComponent = function (e, t, r) {
            return (r.x = Math.min(e.x, t.x)), (r.y = Math.min(e.y, t.y)), r
          }),
          (o.maximumByComponent = function (e, t, r) {
            return (r.x = Math.max(e.x, t.x)), (r.y = Math.max(e.y, t.y)), r
          }),
          (o.magnitudeSquared = function (e) {
            return e.x * e.x + e.y * e.y
          }),
          (o.magnitude = function (e) {
            return Math.sqrt(o.magnitudeSquared(e))
          })
        var u = new o();
        (o.distance = function (e, t) {
          return o.subtract(e, t, u), o.magnitude(u)
        }),
          (o.distanceSquared = function (e, t) {
            return o.subtract(e, t, u), o.magnitudeSquared(u)
          }),
          (o.normalize = function (e, t) {
            var r = o.magnitude(e)
            return (t.x = e.x / r), (t.y = e.y / r), t
          }),
          (o.dot = function (e, t) {
            return e.x * t.x + e.y * t.y
          }),
          (o.multiplyComponents = function (e, t, r) {
            return (r.x = e.x * t.x), (r.y = e.y * t.y), r
          }),
          (o.divideComponents = function (e, t, r) {
            return (r.x = e.x / t.x), (r.y = e.y / t.y), r
          }),
          (o.add = function (e, t, r) {
            return (r.x = e.x + t.x), (r.y = e.y + t.y), r
          }),
          (o.subtract = function (e, t, r) {
            return (r.x = e.x - t.x), (r.y = e.y - t.y), r
          }),
          (o.multiplyByScalar = function (e, t, r) {
            return (r.x = e.x * t), (r.y = e.y * t), r
          }),
          (o.divideByScalar = function (e, t, r) {
            return (r.x = e.x / t), (r.y = e.y / t), r
          }),
          (o.negate = function (e, t) {
            return (t.x = -e.x), (t.y = -e.y), t
          }),
          (o.abs = function (e, t) {
            return (t.x = Math.abs(e.x)), (t.y = Math.abs(e.y)), t
          })
        var s = new o()
        o.lerp = function (e, t, r, n) {
          return (
            o.multiplyByScalar(t, r, s),
            (n = o.multiplyByScalar(e, 1 - r, n)),
            o.add(s, n, n)
          )
        }
        var c = new o(),
          l = new o()
        o.angleBetween = function (e, t) {
          return (
            o.normalize(e, c), o.normalize(t, l), i.acosClamped(o.dot(c, l))
          )
        }
        var f = new o()
        return (
          (o.mostOrthogonalAxis = function (e, t) {
            var r = o.normalize(e, f)
            return (
              o.abs(r, r),
              (t = r.x <= r.y ? o.clone(o.UNIT_X, t) : o.clone(o.UNIT_Y, t))
            )
          }),
          (o.equals = function (e, t) {
            return e === t || (r(e) && r(t) && e.x === t.x && e.y === t.y)
          }),
          (o.equalsArray = function (e, t, r) {
            return e.x === t[r] && e.y === t[r + 1]
          }),
          (o.equalsEpsilon = function (e, t, n, a) {
            return (
              e === t ||
              (r(e) &&
                r(t) &&
                i.equalsEpsilon(e.x, t.x, n, a) &&
                i.equalsEpsilon(e.y, t.y, n, a))
            )
          }),
          (o.ZERO = a(new o(0, 0))),
          (o.UNIT_X = a(new o(1, 0))),
          (o.UNIT_Y = a(new o(0, 1))),
          (o.prototype.clone = function (e) {
            return o.clone(this, e)
          }),
          (o.prototype.equals = function (e) {
            return o.equals(this, e)
          }),
          (o.prototype.equalsEpsilon = function (e, t, r) {
            return o.equalsEpsilon(this, e, t, r)
          }),
          (o.prototype.toString = function () {
            return '(' + this.x + ', ' + this.y + ')'
          }),
          o
        )
      }
    ),
    define('Core/Fullscreen', ['./defined', './defineProperties'], function (
      e,
      t
    ) {
      'use strict'
      var r,
        n = {
          requestFullscreen: void 0,
          exitFullscreen: void 0,
          fullscreenEnabled: void 0,
          fullscreenElement: void 0,
          fullscreenchange: void 0,
          fullscreenerror: void 0
        },
        a = {}
      return (
        t(a, {
          element: {
            get: function () {
              if (a.supportsFullscreen()) return document[n.fullscreenElement]
            }
          },
          changeEventName: {
            get: function () {
              if (a.supportsFullscreen()) return n.fullscreenchange
            }
          },
          errorEventName: {
            get: function () {
              if (a.supportsFullscreen()) return n.fullscreenerror
            }
          },
          enabled: {
            get: function () {
              if (a.supportsFullscreen()) return document[n.fullscreenEnabled]
            }
          },
          fullscreen: {
            get: function () {
              if (a.supportsFullscreen()) return a.element !== null
            }
          }
        }),
        (a.supportsFullscreen = function () {
          if (e(r)) return r
          r = !1
          var t = document.body
          if (typeof t.requestFullscreen === 'function') {
            return (
              (n.requestFullscreen = 'requestFullscreen'),
              (n.exitFullscreen = 'exitFullscreen'),
              (n.fullscreenEnabled = 'fullscreenEnabled'),
              (n.fullscreenElement = 'fullscreenElement'),
              (n.fullscreenchange = 'fullscreenchange'),
              (n.fullscreenerror = 'fullscreenerror'),
              (r = !0)
            )
          }
          for (
            var a,
              i = ['webkit', 'moz', 'o', 'ms', 'khtml'],
              o = 0,
              u = i.length;
            o < u;
            ++o
          ) {
            var s = i[o];
            (a = s + 'RequestFullscreen'),
              typeof t[a] === 'function'
                ? ((n.requestFullscreen = a), (r = !0))
                : ((a = s + 'RequestFullScreen'),
                  typeof t[a] === 'function' &&
                    ((n.requestFullscreen = a), (r = !0))),
              (a = s + 'ExitFullscreen'),
              typeof document[a] === 'function'
                ? (n.exitFullscreen = a)
                : ((a = s + 'CancelFullScreen'),
                  typeof document[a] === 'function' && (n.exitFullscreen = a)),
              (a = s + 'FullscreenEnabled'),
              void 0 !== document[a]
                ? (n.fullscreenEnabled = a)
                : ((a = s + 'FullScreenEnabled'),
                  void 0 !== document[a] && (n.fullscreenEnabled = a)),
              (a = s + 'FullscreenElement'),
              void 0 !== document[a]
                ? (n.fullscreenElement = a)
                : ((a = s + 'FullScreenElement'),
                  void 0 !== document[a] && (n.fullscreenElement = a)),
              (a = s + 'fullscreenchange'),
              void 0 !== document['on' + a] &&
                (s === 'ms' && (a = 'MSFullscreenChange'),
                (n.fullscreenchange = a)),
              (a = s + 'fullscreenerror'),
              void 0 !== document['on' + a] &&
                (s === 'ms' && (a = 'MSFullscreenError'),
                (n.fullscreenerror = a))
          }
          return r
        }),
        (a.requestFullscreen = function (e, t) {
          a.supportsFullscreen() && e[n.requestFullscreen]({ vrDisplay: t })
        }),
        (a.exitFullscreen = function () {
          a.supportsFullscreen() && document[n.exitFullscreen]()
        }),
        a
      )
    }),
    define(
      'Core/FeatureDetection',
      ['./defaultValue', './defined', './Fullscreen'],
      function (e, t, r) {
        'use strict'
        function n (e) {
          for (var t = e.split('.'), r = 0, n = t.length; r < n; ++r) { t[r] = parseInt(t[r], 10) }
          return t
        }
        function a () {
          if (!t(v) && ((v = !1), !d())) {
            var e = / Chrome\/([\.0-9]+)/.exec(R.userAgent)
            e !== null && ((v = !0), (A = n(e[1])))
          }
          return v
        }
        function i () {
          return a() && A
        }
        function o () {
          if (
            !t(S) &&
            ((S = !1), !a() && !d() && / Safari\/[\.0-9]+/.test(R.userAgent))
          ) {
            var e = / Version\/([\.0-9]+)/.exec(R.userAgent)
            e !== null && ((S = !0), (N = n(e[1])))
          }
          return S
        }
        function u () {
          return o() && N
        }
        function s () {
          if (!t(g)) {
            g = !1
            var e = / AppleWebKit\/([\.0-9]+)(\+?)/.exec(R.userAgent)
            e !== null && ((g = !0), (I = n(e[1])), (I.isNightly = !!e[2]))
          }
          return g
        }
        function c () {
          return s() && I
        }
        function l () {
          if (!t(O)) {
            O = !1
            var e
            R.appName === 'Microsoft Internet Explorer'
              ? ((e = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(R.userAgent)),
                e !== null && ((O = !0), (w = n(e[1]))))
              : R.appName === 'Netscape' &&
                ((e = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(R.userAgent)),
                e !== null && ((O = !0), (w = n(e[1]))))
          }
          return O
        }
        function f () {
          return l() && w
        }
        function d () {
          if (!t(M)) {
            M = !1
            var e = / Edge\/([\.0-9]+)/.exec(R.userAgent)
            e !== null && ((M = !0), (x = n(e[1])))
          }
          return M
        }
        function h () {
          return d() && x
        }
        function E () {
          if (!t(C)) {
            C = !1
            var e = /Firefox\/([\.0-9]+)/.exec(R.userAgent)
            e !== null && ((C = !0), (P = n(e[1])))
          }
          return C
        }
        function m () {
          return t(D) || (D = /Windows/i.test(R.appVersion)), D
        }
        function p () {
          return E() && P
        }
        function y () {
          return (
            t(L) ||
              (L =
                typeof PointerEvent !== 'undefined' &&
                (!t(R.pointerEnabled) || R.pointerEnabled)),
            L
          )
        }
        function _ () {
          if (!t(b)) {
            var e = document.createElement('canvas')
            e.setAttribute(
              'style',
              'image-rendering: -moz-crisp-edges;image-rendering: pixelated;'
            )
            var r = e.style.imageRendering;
            (b = t(r) && r !== ''), b && (U = r)
          }
          return b
        }
        function T () {
          return _() ? U : void 0
        }
        var R
        R = typeof navigator !== 'undefined' ? navigator : {}
        var v,
          A,
          S,
          N,
          g,
          I,
          O,
          w,
          M,
          x,
          C,
          P,
          D,
          L,
          U,
          b,
          F = {
            isChrome: a,
            chromeVersion: i,
            isSafari: o,
            safariVersion: u,
            isWebkit: s,
            webkitVersion: c,
            isInternetExplorer: l,
            internetExplorerVersion: f,
            isEdge: d,
            edgeVersion: h,
            isFirefox: E,
            firefoxVersion: p,
            isWindows: m,
            hardwareConcurrency: e(R.hardwareConcurrency, 3),
            supportsPointerEvents: y,
            supportsImageRenderingPixelated: _,
            imageRenderingValue: T
          }
        return (
          (F.supportsFullscreen = function () {
            return r.supportsFullscreen()
          }),
          (F.supportsTypedArrays = function () {
            return typeof ArrayBuffer !== 'undefined'
          }),
          (F.supportsWebWorkers = function () {
            return typeof Worker !== 'undefined'
          }),
          F
        )
      }
    ),
    define('Core/WebGLConstants', ['./freezeObject'], function (e) {
      'use strict'
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
      }
      return e(t)
    }),
    define(
      'Core/ComponentDatatype',
      [
        './defaultValue',
        './defined',
        './DeveloperError',
        './FeatureDetection',
        './freezeObject',
        './WebGLConstants'
      ],
      function (e, t, r, n, a, i) {
        'use strict'
        if (!n.supportsTypedArrays()) return {}
        var o = {
          BYTE: i.BYTE,
          UNSIGNED_BYTE: i.UNSIGNED_BYTE,
          SHORT: i.SHORT,
          UNSIGNED_SHORT: i.UNSIGNED_SHORT,
          INT: i.INT,
          UNSIGNED_INT: i.UNSIGNED_INT,
          FLOAT: i.FLOAT,
          DOUBLE: i.DOUBLE
        }
        return (
          (o.getSizeInBytes = function (e) {
            switch (e) {
              case o.BYTE:
                return Int8Array.BYTES_PER_ELEMENT
              case o.UNSIGNED_BYTE:
                return Uint8Array.BYTES_PER_ELEMENT
              case o.SHORT:
                return Int16Array.BYTES_PER_ELEMENT
              case o.UNSIGNED_SHORT:
                return Uint16Array.BYTES_PER_ELEMENT
              case o.INT:
                return Int32Array.BYTES_PER_ELEMENT
              case o.UNSIGNED_INT:
                return Uint32Array.BYTES_PER_ELEMENT
              case o.FLOAT:
                return Float32Array.BYTES_PER_ELEMENT
              case o.DOUBLE:
                return Float64Array.BYTES_PER_ELEMENT
            }
          }),
          (o.fromTypedArray = function (e) {
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
                          : e instanceof Float64Array ? o.DOUBLE : void 0
          }),
          (o.validate = function (e) {
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
            )
          }),
          (o.createTypedArray = function (e, t) {
            switch (e) {
              case o.BYTE:
                return new Int8Array(t)
              case o.UNSIGNED_BYTE:
                return new Uint8Array(t)
              case o.SHORT:
                return new Int16Array(t)
              case o.UNSIGNED_SHORT:
                return new Uint16Array(t)
              case o.INT:
                return new Int32Array(t)
              case o.UNSIGNED_INT:
                return new Uint32Array(t)
              case o.FLOAT:
                return new Float32Array(t)
              case o.DOUBLE:
                return new Float64Array(t)
            }
          }),
          (o.createArrayBufferView = function (t, r, n, a) {
            switch (((n = e(n, 0)),
            (a = e(a, (r.byteLength - n) / o.getSizeInBytes(t))),
            t)) {
              case o.BYTE:
                return new Int8Array(r, n, a)
              case o.UNSIGNED_BYTE:
                return new Uint8Array(r, n, a)
              case o.SHORT:
                return new Int16Array(r, n, a)
              case o.UNSIGNED_SHORT:
                return new Uint16Array(r, n, a)
              case o.INT:
                return new Int32Array(r, n, a)
              case o.UNSIGNED_INT:
                return new Uint32Array(r, n, a)
              case o.FLOAT:
                return new Float32Array(r, n, a)
              case o.DOUBLE:
                return new Float64Array(r, n, a)
            }
          }),
          (o.fromName = function (e) {
            switch (e) {
              case 'BYTE':
                return o.BYTE
              case 'UNSIGNED_BYTE':
                return o.UNSIGNED_BYTE
              case 'SHORT':
                return o.SHORT
              case 'UNSIGNED_SHORT':
                return o.UNSIGNED_SHORT
              case 'INT':
                return o.INT
              case 'UNSIGNED_INT':
                return o.UNSIGNED_INT
              case 'FLOAT':
                return o.FLOAT
              case 'DOUBLE':
                return o.DOUBLE
            }
          }),
          a(o)
        )
      }
    ),
    define(
      'Core/HeadingPitchRoll',
      ['./defaultValue', './defined', './DeveloperError', './Math'],
      function (e, t, r, n) {
        'use strict'
        function a (t, r, n) {
          (this.heading = e(t, 0)),
            (this.pitch = e(r, 0)),
            (this.roll = e(n, 0))
        }
        return (
          (a.fromQuaternion = function (e, r) {
            t(r) || (r = new a())
            var n = 2 * (e.w * e.y - e.z * e.x),
              i = 1 - 2 * (e.x * e.x + e.y * e.y),
              o = 2 * (e.w * e.x + e.y * e.z),
              u = 1 - 2 * (e.y * e.y + e.z * e.z),
              s = 2 * (e.w * e.z + e.x * e.y)
            return (
              (r.heading = -Math.atan2(s, u)),
              (r.roll = Math.atan2(o, i)),
              (r.pitch = -Math.asin(n)),
              r
            )
          }),
          (a.fromDegrees = function (e, r, i, o) {
            return (
              t(o) || (o = new a()),
              (o.heading = e * n.RADIANS_PER_DEGREE),
              (o.pitch = r * n.RADIANS_PER_DEGREE),
              (o.roll = i * n.RADIANS_PER_DEGREE),
              o
            )
          }),
          (a.clone = function (e, r) {
            if (t(e)) {
              return t(r)
                ? ((r.heading = e.heading),
                  (r.pitch = e.pitch),
                  (r.roll = e.roll),
                  r)
                : new a(e.heading, e.pitch, e.roll)
            }
          }),
          (a.equals = function (e, r) {
            return (
              e === r ||
              (t(e) &&
                t(r) &&
                e.heading === r.heading &&
                e.pitch === r.pitch &&
                e.roll === r.roll)
            )
          }),
          (a.equalsEpsilon = function (e, r, a, i) {
            return (
              e === r ||
              (t(e) &&
                t(r) &&
                n.equalsEpsilon(e.heading, r.heading, a, i) &&
                n.equalsEpsilon(e.pitch, r.pitch, a, i) &&
                n.equalsEpsilon(e.roll, r.roll, a, i))
            )
          }),
          (a.prototype.clone = function (e) {
            return a.clone(this, e)
          }),
          (a.prototype.equals = function (e) {
            return a.equals(this, e)
          }),
          (a.prototype.equalsEpsilon = function (e, t, r) {
            return a.equalsEpsilon(this, e, t, r)
          }),
          (a.prototype.toString = function () {
            return (
              '(' + this.heading + ', ' + this.pitch + ', ' + this.roll + ')'
            )
          }),
          a
        )
      }
    ),
    define(
      'Core/Quaternion',
      [
        './Cartesian3',
        './Check',
        './defaultValue',
        './defined',
        './FeatureDetection',
        './freezeObject',
        './HeadingPitchRoll',
        './Math',
        './Matrix3'
      ],
      function (e, t, r, n, a, i, o, u, s) {
        'use strict'
        function c (e, t, n, a) {
          (this.x = r(e, 0)),
            (this.y = r(t, 0)),
            (this.z = r(n, 0)),
            (this.w = r(a, 0))
        }
        var l = new e()
        c.fromAxisAngle = function (t, r, a) {
          var i = r / 2,
            o = Math.sin(i)
          l = e.normalize(t, l)
          var u = l.x * o,
            s = l.y * o,
            f = l.z * o,
            d = Math.cos(i)
          return n(a)
            ? ((a.x = u), (a.y = s), (a.z = f), (a.w = d), a)
            : new c(u, s, f, d)
        }
        var f = [1, 2, 0],
          d = new Array(3)
        c.fromRotationMatrix = function (e, t) {
          var r,
            a,
            i,
            o,
            u,
            l = e[s.COLUMN0ROW0],
            h = e[s.COLUMN1ROW1],
            E = e[s.COLUMN2ROW2],
            m = l + h + E
          if (m > 0) {
            (r = Math.sqrt(m + 1)),
              (u = 0.5 * r),
              (r = 0.5 / r),
              (a = (e[s.COLUMN1ROW2] - e[s.COLUMN2ROW1]) * r),
              (i = (e[s.COLUMN2ROW0] - e[s.COLUMN0ROW2]) * r),
              (o = (e[s.COLUMN0ROW1] - e[s.COLUMN1ROW0]) * r)
          } else {
            var p = f,
              y = 0
            h > l && (y = 1), E > l && E > h && (y = 2)
            var _ = p[y],
              T = p[_]
            r = Math.sqrt(
              e[s.getElementIndex(y, y)] -
                e[s.getElementIndex(_, _)] -
                e[s.getElementIndex(T, T)] +
                1
            )
            var R = d;
            (R[y] = 0.5 * r),
              (r = 0.5 / r),
              (u =
                (e[s.getElementIndex(T, _)] - e[s.getElementIndex(_, T)]) * r),
              (R[_] =
                (e[s.getElementIndex(_, y)] + e[s.getElementIndex(y, _)]) * r),
              (R[T] =
                (e[s.getElementIndex(T, y)] + e[s.getElementIndex(y, T)]) * r),
              (a = -R[0]),
              (i = -R[1]),
              (o = -R[2])
          }
          return n(t)
            ? ((t.x = a), (t.y = i), (t.z = o), (t.w = u), t)
            : new c(a, i, o, u)
        }
        var h = new c(),
          E = new c(),
          m = new c(),
          p = new c()
        c.fromHeadingPitchRoll = function (t, r) {
          return (
            (p = c.fromAxisAngle(e.UNIT_X, t.roll, h)),
            (m = c.fromAxisAngle(e.UNIT_Y, -t.pitch, r)),
            (r = c.multiply(m, p, m)),
            (E = c.fromAxisAngle(e.UNIT_Z, -t.heading, h)),
            c.multiply(E, r, r)
          )
        }
        var y = new e(),
          _ = new e(),
          T = new c(),
          R = new c(),
          v = new c();
        (c.packedLength = 4),
          (c.pack = function (e, t, n) {
            return (
              (n = r(n, 0)),
              (t[n++] = e.x),
              (t[n++] = e.y),
              (t[n++] = e.z),
              (t[n] = e.w),
              t
            )
          }),
          (c.unpack = function (e, t, a) {
            return (
              (t = r(t, 0)),
              n(a) || (a = new c()),
              (a.x = e[t]),
              (a.y = e[t + 1]),
              (a.z = e[t + 2]),
              (a.w = e[t + 3]),
              a
            )
          }),
          (c.packedInterpolationLength = 3),
          (c.convertPackedArrayForInterpolation = function (e, t, r, n) {
            c.unpack(e, 4 * r, v), c.conjugate(v, v)
            for (var a = 0, i = r - t + 1; a < i; a++) {
              var o = 3 * a
              c.unpack(e, 4 * (t + a), T),
                c.multiply(T, v, T),
                T.w < 0 && c.negate(T, T),
                c.computeAxis(T, y)
              var u = c.computeAngle(T);
              (n[o] = y.x * u), (n[o + 1] = y.y * u), (n[o + 2] = y.z * u)
            }
          }),
          (c.unpackInterpolationResult = function (t, r, a, i, o) {
            n(o) || (o = new c()), e.fromArray(t, 0, _)
            var u = e.magnitude(_)
            return (
              c.unpack(r, 4 * i, R),
              u === 0 ? c.clone(c.IDENTITY, T) : c.fromAxisAngle(_, u, T),
              c.multiply(T, R, o)
            )
          }),
          (c.clone = function (e, t) {
            if (n(e)) {
              return n(t)
                ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t)
                : new c(e.x, e.y, e.z, e.w)
            }
          }),
          (c.conjugate = function (e, t) {
            return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = e.w), t
          }),
          (c.magnitudeSquared = function (e) {
            return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w
          }),
          (c.magnitude = function (e) {
            return Math.sqrt(c.magnitudeSquared(e))
          }),
          (c.normalize = function (e, t) {
            var r = 1 / c.magnitude(e),
              n = e.x * r,
              a = e.y * r,
              i = e.z * r,
              o = e.w * r
            return (t.x = n), (t.y = a), (t.z = i), (t.w = o), t
          }),
          (c.inverse = function (e, t) {
            var r = c.magnitudeSquared(e)
            return (t = c.conjugate(e, t)), c.multiplyByScalar(t, 1 / r, t)
          }),
          (c.add = function (e, t, r) {
            return (
              (r.x = e.x + t.x),
              (r.y = e.y + t.y),
              (r.z = e.z + t.z),
              (r.w = e.w + t.w),
              r
            )
          }),
          (c.subtract = function (e, t, r) {
            return (
              (r.x = e.x - t.x),
              (r.y = e.y - t.y),
              (r.z = e.z - t.z),
              (r.w = e.w - t.w),
              r
            )
          }),
          (c.negate = function (e, t) {
            return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = -e.w), t
          }),
          (c.dot = function (e, t) {
            return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w
          }),
          (c.multiply = function (e, t, r) {
            var n = e.x,
              a = e.y,
              i = e.z,
              o = e.w,
              u = t.x,
              s = t.y,
              c = t.z,
              l = t.w,
              f = o * u + n * l + a * c - i * s,
              d = o * s - n * c + a * l + i * u,
              h = o * c + n * s - a * u + i * l,
              E = o * l - n * u - a * s - i * c
            return (r.x = f), (r.y = d), (r.z = h), (r.w = E), r
          }),
          (c.multiplyByScalar = function (e, t, r) {
            return (
              (r.x = e.x * t),
              (r.y = e.y * t),
              (r.z = e.z * t),
              (r.w = e.w * t),
              r
            )
          }),
          (c.divideByScalar = function (e, t, r) {
            return (
              (r.x = e.x / t),
              (r.y = e.y / t),
              (r.z = e.z / t),
              (r.w = e.w / t),
              r
            )
          }),
          (c.computeAxis = function (e, t) {
            var r = e.w
            if (Math.abs(r - 1) < u.EPSILON6) return (t.x = t.y = t.z = 0), t
            var n = 1 / Math.sqrt(1 - r * r)
            return (t.x = e.x * n), (t.y = e.y * n), (t.z = e.z * n), t
          }),
          (c.computeAngle = function (e) {
            return Math.abs(e.w - 1) < u.EPSILON6 ? 0 : 2 * Math.acos(e.w)
          })
        var A = new c()
        c.lerp = function (e, t, r, n) {
          return (
            (A = c.multiplyByScalar(t, r, A)),
            (n = c.multiplyByScalar(e, 1 - r, n)),
            c.add(A, n, n)
          )
        }
        var S = new c(),
          N = new c(),
          g = new c();
        (c.slerp = function (e, t, r, n) {
          var a = c.dot(e, t),
            i = t
          if (
            (a < 0 && ((a = -a), (i = S = c.negate(t, S))), 1 - a < u.EPSILON6)
          ) { return c.lerp(e, i, r, n) }
          var o = Math.acos(a)
          return (
            (N = c.multiplyByScalar(e, Math.sin((1 - r) * o), N)),
            (g = c.multiplyByScalar(i, Math.sin(r * o), g)),
            (n = c.add(N, g, n)),
            c.multiplyByScalar(n, 1 / Math.sin(o), n)
          )
        }),
          (c.log = function (t, r) {
            var n = u.acosClamped(t.w),
              a = 0
            return (
              n !== 0 && (a = n / Math.sin(n)), e.multiplyByScalar(t, a, r)
            )
          }),
          (c.exp = function (t, r) {
            var n = e.magnitude(t),
              a = 0
            return (
              n !== 0 && (a = Math.sin(n) / n),
              (r.x = t.x * a),
              (r.y = t.y * a),
              (r.z = t.z * a),
              (r.w = Math.cos(n)),
              r
            )
          })
        var I = new e(),
          O = new e(),
          w = new c(),
          M = new c();
        (c.computeInnerQuadrangle = function (t, r, n, a) {
          var i = c.conjugate(r, w)
          c.multiply(i, n, M)
          var o = c.log(M, I)
          c.multiply(i, t, M)
          var u = c.log(M, O)
          return (
            e.add(o, u, o),
            e.multiplyByScalar(o, 0.25, o),
            e.negate(o, o),
            c.exp(o, w),
            c.multiply(r, w, a)
          )
        }),
          (c.squad = function (e, t, r, n, a, i) {
            var o = c.slerp(e, t, a, w),
              u = c.slerp(r, n, a, M)
            return c.slerp(o, u, 2 * a * (1 - a), i)
          })
        for (
          var x = new c(),
            C = 1.9011074535173003,
            P = a.supportsTypedArrays() ? new Float32Array(8) : [],
            D = a.supportsTypedArrays() ? new Float32Array(8) : [],
            L = a.supportsTypedArrays() ? new Float32Array(8) : [],
            U = a.supportsTypedArrays() ? new Float32Array(8) : [],
            b = 0;
          b < 7;
          ++b
        ) {
          var F = b + 1,
            B = 2 * F + 1;
          (P[b] = 1 / (F * B)), (D[b] = F / B)
        }
        return (
          (P[7] = C / 136),
          (D[7] = 8 * C / 17),
          (c.fastSlerp = function (e, t, r, n) {
            var a,
              i = c.dot(e, t)
            i >= 0 ? (a = 1) : ((a = -1), (i = -i))
            for (
              var o = i - 1, u = 1 - r, s = r * r, l = u * u, f = 7;
              f >= 0;
              --f
            ) { (L[f] = (P[f] * s - D[f]) * o), (U[f] = (P[f] * l - D[f]) * o) }
            var d =
                a *
                r *
                (1 +
                  L[0] *
                    (1 +
                      L[1] *
                        (1 +
                          L[2] *
                            (1 +
                              L[3] *
                                (1 +
                                  L[4] *
                                    (1 + L[5] * (1 + L[6] * (1 + L[7])))))))),
              h =
                u *
                (1 +
                  U[0] *
                    (1 +
                      U[1] *
                        (1 +
                          U[2] *
                            (1 +
                              U[3] *
                                (1 +
                                  U[4] *
                                    (1 + U[5] * (1 + U[6] * (1 + U[7])))))))),
              E = c.multiplyByScalar(e, h, x)
            return c.multiplyByScalar(t, d, n), c.add(E, n, n)
          }),
          (c.fastSquad = function (e, t, r, n, a, i) {
            var o = c.fastSlerp(e, t, a, w),
              u = c.fastSlerp(r, n, a, M)
            return c.fastSlerp(o, u, 2 * a * (1 - a), i)
          }),
          (c.equals = function (e, t) {
            return (
              e === t ||
              (n(e) &&
                n(t) &&
                e.x === t.x &&
                e.y === t.y &&
                e.z === t.z &&
                e.w === t.w)
            )
          }),
          (c.equalsEpsilon = function (e, t, r) {
            return (
              e === t ||
              (n(e) &&
                n(t) &&
                Math.abs(e.x - t.x) <= r &&
                Math.abs(e.y - t.y) <= r &&
                Math.abs(e.z - t.z) <= r &&
                Math.abs(e.w - t.w) <= r)
            )
          }),
          (c.ZERO = i(new c(0, 0, 0, 0))),
          (c.IDENTITY = i(new c(0, 0, 0, 1))),
          (c.prototype.clone = function (e) {
            return c.clone(this, e)
          }),
          (c.prototype.equals = function (e) {
            return c.equals(this, e)
          }),
          (c.prototype.equalsEpsilon = function (e, t) {
            return c.equalsEpsilon(this, e, t)
          }),
          (c.prototype.toString = function () {
            return (
              '(' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + ')'
            )
          }),
          c
        )
      }
    ),
    define(
      'Core/EllipseGeometryLibrary',
      ['./Cartesian3', './Math', './Matrix3', './Quaternion'],
      function (e, t, r, n) {
        'use strict'
        function a (t, a, i, l, f, d, h, E, m, p) {
          var y = t + a
          e.multiplyByScalar(l, Math.cos(y), o),
            e.multiplyByScalar(i, Math.sin(y), u),
            e.add(o, u, o)
          var _ = Math.cos(t)
          _ *= _
          var T = Math.sin(t)
          T *= T
          var R = d / Math.sqrt(h * _ + f * T),
            v = R / E
          return (
            n.fromAxisAngle(o, v, s),
            r.fromQuaternion(s, c),
            r.multiplyByVector(c, m, p),
            e.normalize(p, p),
            e.multiplyByScalar(p, E, p),
            p
          )
        }
        var i = {},
          o = new e(),
          u = new e(),
          s = new n(),
          c = new r(),
          l = new e(),
          f = new e(),
          d = new e(),
          h = new e()
        i.raisePositionsToHeight = function (t, r, n) {
          for (
            var a = r.ellipsoid,
              i = r.height,
              o = r.extrudedHeight,
              u = n ? t.length / 3 * 2 : t.length / 3,
              s = new Float64Array(3 * u),
              c = t.length,
              E = n ? c : 0,
              m = 0;
            m < c;
            m += 3
          ) {
            var p = m + 1,
              y = m + 2,
              _ = e.fromArray(t, m, l)
            a.scaleToGeodeticSurface(_, _)
            var T = e.clone(_, f),
              R = a.geodeticSurfaceNormal(_, h),
              v = e.multiplyByScalar(R, i, d)
            e.add(_, v, _),
              n &&
                (e.multiplyByScalar(R, o, v),
                e.add(T, v, T),
                (s[m + E] = T.x),
                (s[p + E] = T.y),
                (s[y + E] = T.z)),
              (s[m] = _.x),
              (s[p] = _.y),
              (s[y] = _.z)
          }
          return s
        }
        var E = new e(),
          m = new e(),
          p = new e()
        return (
          (i.computeEllipsePositions = function (r, n, i) {
            var o = r.semiMinorAxis,
              u = r.semiMajorAxis,
              s = r.rotation,
              c = r.center,
              h = 8 * r.granularity,
              y = o * o,
              _ = u * u,
              T = u * o,
              R = e.magnitude(c),
              v = e.normalize(c, E),
              A = e.cross(e.UNIT_Z, c, m)
            A = e.normalize(A, A)
            var S = e.cross(v, A, p),
              N = 1 + Math.ceil(t.PI_OVER_TWO / h),
              g = t.PI_OVER_TWO / (N - 1),
              I = t.PI_OVER_TWO - N * g
            I < 0 && (N -= Math.ceil(Math.abs(I) / g))
            var O,
              w,
              M,
              x,
              C,
              P = 2 * (N * (N + 2)),
              D = n ? new Array(3 * P) : void 0,
              L = 0,
              U = l,
              b = f,
              F = 4 * N * 3,
              B = F - 1,
              z = 0,
              G = i ? new Array(F) : void 0
            for (
              I = t.PI_OVER_TWO,
                U = a(I, s, S, A, y, T, _, R, v, U),
                n && ((D[L++] = U.x), (D[L++] = U.y), (D[L++] = U.z)),
                i && ((G[B--] = U.z), (G[B--] = U.y), (G[B--] = U.x)),
                I = t.PI_OVER_TWO - g,
                O = 1;
              O < N + 1;
              ++O
            ) {
              if (
                ((U = a(I, s, S, A, y, T, _, R, v, U)),
                (b = a(Math.PI - I, s, S, A, y, T, _, R, v, b)),
                n)
              ) {
                for (
                  D[L++] = U.x,
                    D[L++] = U.y,
                    D[L++] = U.z,
                    M = 2 * O + 2,
                    w = 1;
                  w < M - 1;
                  ++w
                ) {
                  (x = w / (M - 1)),
                    (C = e.lerp(U, b, x, d)),
                    (D[L++] = C.x),
                    (D[L++] = C.y),
                    (D[L++] = C.z)
                }
                (D[L++] = b.x), (D[L++] = b.y), (D[L++] = b.z)
              }
              i &&
                ((G[B--] = U.z),
                (G[B--] = U.y),
                (G[B--] = U.x),
                (G[z++] = b.x),
                (G[z++] = b.y),
                (G[z++] = b.z)),
                (I = t.PI_OVER_TWO - (O + 1) * g)
            }
            for (O = N; O > 1; --O) {
              if (
                ((I = t.PI_OVER_TWO - (O - 1) * g),
                (U = a(-I, s, S, A, y, T, _, R, v, U)),
                (b = a(I + Math.PI, s, S, A, y, T, _, R, v, b)),
                n)
              ) {
                for (
                  D[L++] = U.x,
                    D[L++] = U.y,
                    D[L++] = U.z,
                    M = 2 * (O - 1) + 2,
                    w = 1;
                  w < M - 1;
                  ++w
                ) {
                  (x = w / (M - 1)),
                    (C = e.lerp(U, b, x, d)),
                    (D[L++] = C.x),
                    (D[L++] = C.y),
                    (D[L++] = C.z)
                }
                (D[L++] = b.x), (D[L++] = b.y), (D[L++] = b.z)
              }
              i &&
                ((G[B--] = U.z),
                (G[B--] = U.y),
                (G[B--] = U.x),
                (G[z++] = b.x),
                (G[z++] = b.y),
                (G[z++] = b.z))
            }
            (I = t.PI_OVER_TWO), (U = a(-I, s, S, A, y, T, _, R, v, U))
            var q = {}
            return (
              n &&
                ((D[L++] = U.x),
                (D[L++] = U.y),
                (D[L++] = U.z),
                (q.positions = D),
                (q.numPts = N)),
              i &&
                ((G[B--] = U.z),
                (G[B--] = U.y),
                (G[B--] = U.x),
                (q.outerPositions = G)),
              q
            )
          }),
          i
        )
      }
    ),
    define('Core/GeometryType', ['./freezeObject'], function (e) {
      'use strict'
      var t = { NONE: 0, TRIANGLES: 1, LINES: 2, POLYLINES: 3 }
      return e(t)
    }),
    define(
      'Core/PrimitiveType',
      ['./freezeObject', './WebGLConstants'],
      function (e, t) {
        'use strict'
        var r = {
          POINTS: t.POINTS,
          LINES: t.LINES,
          LINE_LOOP: t.LINE_LOOP,
          LINE_STRIP: t.LINE_STRIP,
          TRIANGLES: t.TRIANGLES,
          TRIANGLE_STRIP: t.TRIANGLE_STRIP,
          TRIANGLE_FAN: t.TRIANGLE_FAN,
          validate: function (e) {
            return (
              e === r.POINTS ||
              e === r.LINES ||
              e === r.LINE_LOOP ||
              e === r.LINE_STRIP ||
              e === r.TRIANGLES ||
              e === r.TRIANGLE_STRIP ||
              e === r.TRIANGLE_FAN
            )
          }
        }
        return e(r)
      }
    ),
    define(
      'Core/Geometry',
      [
        './Check',
        './defaultValue',
        './defined',
        './DeveloperError',
        './GeometryType',
        './PrimitiveType'
      ],
      function (e, t, r, n, a, i) {
        'use strict'
        function o (e) {
          (e = t(e, t.EMPTY_OBJECT)),
            (this.attributes = e.attributes),
            (this.indices = e.indices),
            (this.primitiveType = t(e.primitiveType, i.TRIANGLES)),
            (this.boundingSphere = e.boundingSphere),
            (this.geometryType = t(e.geometryType, a.NONE)),
            (this.boundingSphereCV = e.boundingSphereCV)
        }
        return (
          (o.computeNumberOfVertices = function (e) {
            var t = -1
            for (var n in e.attributes) {
              if (
                e.attributes.hasOwnProperty(n) &&
                r(e.attributes[n]) &&
                r(e.attributes[n].values)
              ) {
                var a = e.attributes[n],
                  i = a.values.length / a.componentsPerAttribute
                t = i
              }
            }
            return t
          }),
          o
        )
      }
    ),
    define(
      'Core/GeometryAttribute',
      ['./defaultValue', './defined', './DeveloperError'],
      function (e, t, r) {
        'use strict'
        function n (t) {
          (t = e(t, e.EMPTY_OBJECT)),
            (this.componentDatatype = t.componentDatatype),
            (this.componentsPerAttribute = t.componentsPerAttribute),
            (this.normalize = e(t.normalize, !1)),
            (this.values = t.values)
        }
        return n
      }
    ),
    define('Core/GeometryAttributes', ['./defaultValue'], function (e) {
      'use strict'
      function t (t) {
        (t = e(t, e.EMPTY_OBJECT)),
          (this.position = t.position),
          (this.normal = t.normal),
          (this.st = t.st),
          (this.bitangent = t.bitangent),
          (this.tangent = t.tangent),
          (this.color = t.color)
      }
      return t
    }),
    define(
      'Core/GeometryInstance',
      ['./defaultValue', './defined', './DeveloperError', './Matrix4'],
      function (e, t, r, n) {
        'use strict'
        function a (t) {
          (t = e(t, e.EMPTY_OBJECT)),
            (this.geometry = t.geometry),
            (this.modelMatrix = n.clone(e(t.modelMatrix, n.IDENTITY))),
            (this.id = t.id),
            (this.pickPrimitive = t.pickPrimitive),
            (this.attributes = e(t.attributes, {})),
            (this.westHemisphereGeometry = void 0),
            (this.eastHemisphereGeometry = void 0)
        }
        return a
      }
    ),
    define(
      'Core/AttributeCompression',
      [
        './Cartesian2',
        './Cartesian3',
        './Check',
        './defined',
        './DeveloperError',
        './Math'
      ],
      function (e, t, r, n, a, i) {
        'use strict'
        var o = {};
        (o.octEncodeInRange = function (e, t, r) {
          if (
            ((r.x = e.x / (Math.abs(e.x) + Math.abs(e.y) + Math.abs(e.z))),
            (r.y = e.y / (Math.abs(e.x) + Math.abs(e.y) + Math.abs(e.z))),
            e.z < 0)
          ) {
            var n = r.x,
              a = r.y;
            (r.x = (1 - Math.abs(a)) * i.signNotZero(n)),
              (r.y = (1 - Math.abs(n)) * i.signNotZero(a))
          }
          return (r.x = i.toSNorm(r.x, t)), (r.y = i.toSNorm(r.y, t)), r
        }),
          (o.octEncode = function (e, t) {
            return o.octEncodeInRange(e, 255, t)
          }),
          (o.octDecodeInRange = function (e, r, n, a) {
            if (
              ((a.x = i.fromSNorm(e, n)),
              (a.y = i.fromSNorm(r, n)),
              (a.z = 1 - (Math.abs(a.x) + Math.abs(a.y))),
              a.z < 0)
            ) {
              var o = a.x;
              (a.x = (1 - Math.abs(a.y)) * i.signNotZero(o)),
                (a.y = (1 - Math.abs(o)) * i.signNotZero(a.y))
            }
            return t.normalize(a, a)
          }),
          (o.octDecode = function (e, t, r) {
            return o.octDecodeInRange(e, t, 255, r)
          }),
          (o.octPackFloat = function (e) {
            return 256 * e.x + e.y
          })
        var u = new e()
        return (
          (o.octEncodeFloat = function (e) {
            return o.octEncode(e, u), o.octPackFloat(u)
          }),
          (o.octDecodeFloat = function (e, t) {
            var r = e / 256,
              n = Math.floor(r),
              a = 256 * (r - n)
            return o.octDecode(n, a, t)
          }),
          (o.octPack = function (e, t, r, n) {
            var a = o.octEncodeFloat(e),
              i = o.octEncodeFloat(t),
              s = o.octEncode(r, u)
            return (n.x = 65536 * s.x + a), (n.y = 65536 * s.y + i), n
          }),
          (o.octUnpack = function (e, t, r, n) {
            var a = e.x / 65536,
              i = Math.floor(a),
              u = 65536 * (a - i)
            a = e.y / 65536
            var s = Math.floor(a),
              c = 65536 * (a - s)
            o.octDecodeFloat(u, t),
              o.octDecodeFloat(c, r),
              o.octDecode(i, s, n)
          }),
          (o.compressTextureCoordinates = function (e) {
            var t = (4095 * e.x) | 0,
              r = (4095 * e.y) | 0
            return 4096 * t + r
          }),
          (o.decompressTextureCoordinates = function (e, t) {
            var r = e / 4096,
              n = Math.floor(r)
            return (t.x = n / 4095), (t.y = (e - 4096 * n) / 4095), t
          }),
          o
        )
      }
    ),
    define(
      'Core/barycentricCoordinates',
      ['./Cartesian2', './Cartesian3', './Check', './defined'],
      function (e, t, r, n) {
        'use strict'
        function a (r, a, s, c, l) {
          n(l) || (l = new t())
          var f, d, h, E, m, p, y, _
          n(a.z)
            ? ((f = t.subtract(s, a, i)),
              (d = t.subtract(c, a, o)),
              (h = t.subtract(r, a, u)),
              (E = t.dot(f, f)),
              (m = t.dot(f, d)),
              (p = t.dot(f, h)),
              (y = t.dot(d, d)),
              (_ = t.dot(d, h)))
            : ((f = e.subtract(s, a, i)),
              (d = e.subtract(c, a, o)),
              (h = e.subtract(r, a, u)),
              (E = e.dot(f, f)),
              (m = e.dot(f, d)),
              (p = e.dot(f, h)),
              (y = e.dot(d, d)),
              (_ = e.dot(d, h)))
          var T = 1 / (E * y - m * m)
          return (
            (l.y = (y * p - m * _) * T),
            (l.z = (E * _ - m * p) * T),
            (l.x = 1 - l.y - l.z),
            l
          )
        }
        var i = new t(),
          o = new t(),
          u = new t()
        return a
      }
    ),
    define(
      'Core/EncodedCartesian3',
      ['./Cartesian3', './Check', './defined'],
      function (e, t, r) {
        'use strict'
        function n () {
          (this.high = e.clone(e.ZERO)), (this.low = e.clone(e.ZERO))
        }
        n.encode = function (e, t) {
          r(t) || (t = { high: 0, low: 0 })
          var n
          return (
            e >= 0
              ? ((n = 65536 * Math.floor(e / 65536)),
                (t.high = n),
                (t.low = e - n))
              : ((n = 65536 * Math.floor(-e / 65536)),
                (t.high = -n),
                (t.low = e + n)),
            t
          )
        }
        var a = { high: 0, low: 0 }
        n.fromCartesian = function (e, t) {
          r(t) || (t = new n())
          var i = t.high,
            o = t.low
          return (
            n.encode(e.x, a),
            (i.x = a.high),
            (o.x = a.low),
            n.encode(e.y, a),
            (i.y = a.high),
            (o.y = a.low),
            n.encode(e.z, a),
            (i.z = a.high),
            (o.z = a.low),
            t
          )
        }
        var i = new n()
        return (
          (n.writeElements = function (e, t, r) {
            n.fromCartesian(e, i)
            var a = i.high,
              o = i.low;
            (t[r] = a.x),
              (t[r + 1] = a.y),
              (t[r + 2] = a.z),
              (t[r + 3] = o.x),
              (t[r + 4] = o.y),
              (t[r + 5] = o.z)
          }),
          n
        )
      }
    ),
    define(
      'Core/IndexDatatype',
      [
        './defined',
        './DeveloperError',
        './freezeObject',
        './Math',
        './WebGLConstants'
      ],
      function (e, t, r, n, a) {
        'use strict'
        var i = {
          UNSIGNED_BYTE: a.UNSIGNED_BYTE,
          UNSIGNED_SHORT: a.UNSIGNED_SHORT,
          UNSIGNED_INT: a.UNSIGNED_INT
        }
        return (
          (i.getSizeInBytes = function (e) {
            switch (e) {
              case i.UNSIGNED_BYTE:
                return Uint8Array.BYTES_PER_ELEMENT
              case i.UNSIGNED_SHORT:
                return Uint16Array.BYTES_PER_ELEMENT
              case i.UNSIGNED_INT:
                return Uint32Array.BYTES_PER_ELEMENT
            }
          }),
          (i.validate = function (t) {
            return (
              e(t) &&
              (t === i.UNSIGNED_BYTE ||
                t === i.UNSIGNED_SHORT ||
                t === i.UNSIGNED_INT)
            )
          }),
          (i.createTypedArray = function (e, t) {
            return e >= n.SIXTY_FOUR_KILOBYTES
              ? new Uint32Array(t)
              : new Uint16Array(t)
          }),
          (i.createTypedArrayFromArrayBuffer = function (e, t, r, a) {
            return e >= n.SIXTY_FOUR_KILOBYTES
              ? new Uint32Array(t, r, a)
              : new Uint16Array(t, r, a)
          }),
          r(i)
        )
      }
    ),
    define(
      'Core/QuadraticRealPolynomial',
      ['./DeveloperError', './Math'],
      function (e, t) {
        'use strict'
        function r (e, r, n) {
          var a = e + r
          return t.sign(e) !== t.sign(r) &&
          Math.abs(a / Math.max(Math.abs(e), Math.abs(r))) < n
            ? 0
            : a
        }
        var n = {}
        return (
          (n.computeDiscriminant = function (e, t, r) {
            var n = t * t - 4 * e * r
            return n
          }),
          (n.computeRealRoots = function (e, n, a) {
            var i
            if (e === 0) return n === 0 ? [] : [-a / n]
            if (n === 0) {
              if (a === 0) return [0, 0]
              var o = Math.abs(a),
                u = Math.abs(e)
              if (o < u && o / u < t.EPSILON14) return [0, 0]
              if (o > u && u / o < t.EPSILON14) return []
              if (((i = -a / e), i < 0)) return []
              var s = Math.sqrt(i)
              return [-s, s]
            }
            if (a === 0) return (i = -n / e), i < 0 ? [i, 0] : [0, i]
            var c = n * n,
              l = 4 * e * a,
              f = r(c, -l, t.EPSILON14)
            if (f < 0) return []
            var d = -0.5 * r(n, t.sign(n) * Math.sqrt(f), t.EPSILON14)
            return n > 0 ? [d / e, a / d] : [a / d, d / e]
          }),
          n
        )
      }
    ),
    define(
      'Core/CubicRealPolynomial',
      ['./DeveloperError', './QuadraticRealPolynomial'],
      function (e, t) {
        'use strict'
        function r (e, t, r, n) {
          var a,
            i,
            o = e,
            u = t / 3,
            s = r / 3,
            c = n,
            l = o * s,
            f = u * c,
            d = u * u,
            h = s * s,
            E = o * s - d,
            m = o * c - u * s,
            p = u * c - h,
            y = 4 * E * p - m * m
          if (y < 0) {
            var _, T, R
            d * f >= l * h
              ? ((_ = o), (T = E), (R = -2 * u * E + o * m))
              : ((_ = c), (T = p), (R = -c * m + 2 * s * p))
            var v = R < 0 ? -1 : 1,
              A = -v * Math.abs(_) * Math.sqrt(-y)
            i = -R + A
            var S = i / 2,
              N = S < 0 ? -Math.pow(-S, 1 / 3) : Math.pow(S, 1 / 3),
              g = i === A ? -N : -T / N
            return (
              (a = T <= 0 ? N + g : -R / (N * N + g * g + T)),
              d * f >= l * h ? [(a - u) / o] : [-c / (a + s)]
            )
          }
          var I = E,
            O = -2 * u * E + o * m,
            w = p,
            M = -c * m + 2 * s * p,
            x = Math.sqrt(y),
            C = Math.sqrt(3) / 2,
            P = Math.abs(Math.atan2(o * x, -O) / 3)
          a = 2 * Math.sqrt(-I)
          var D = Math.cos(P)
          i = a * D
          var L = a * (-D / 2 - C * Math.sin(P)),
            U = i + L > 2 * u ? i - u : L - u,
            b = o,
            F = U / b;
          (P = Math.abs(Math.atan2(c * x, -M) / 3)),
            (a = 2 * Math.sqrt(-w)),
            (D = Math.cos(P)),
            (i = a * D),
            (L = a * (-D / 2 - C * Math.sin(P)))
          var B = -c,
            z = i + L < 2 * s ? i + s : L + s,
            G = B / z,
            q = b * z,
            V = -U * z - b * B,
            W = U * B,
            X = (s * V - u * W) / (-u * V + s * q)
          return F <= X
            ? F <= G ? (X <= G ? [F, X, G] : [F, G, X]) : [G, F, X]
            : F <= G ? [X, F, G] : X <= G ? [X, G, F] : [G, X, F]
        }
        var n = {}
        return (
          (n.computeDiscriminant = function (e, t, r, n) {
            var a = e * e,
              i = t * t,
              o = r * r,
              u = n * n,
              s =
                18 * e * t * r * n +
                i * o -
                27 * a * u -
                4 * (e * o * r + i * t * n)
            return s
          }),
          (n.computeRealRoots = function (e, n, a, i) {
            var o, u
            if (e === 0) return t.computeRealRoots(n, a, i)
            if (n === 0) {
              if (a === 0) {
                if (i === 0) return [0, 0, 0]
                u = -i / e
                var s = u < 0 ? -Math.pow(-u, 1 / 3) : Math.pow(u, 1 / 3)
                return [s, s, s]
              }
              return i === 0
                ? ((o = t.computeRealRoots(e, 0, a)),
                  o.Length === 0 ? [0] : [o[0], 0, o[1]])
                : r(e, 0, a, i)
            }
            return a === 0
              ? i === 0
                ? ((u = -n / e), u < 0 ? [u, 0, 0] : [0, 0, u])
                : r(e, n, 0, i)
              : i === 0
                ? ((o = t.computeRealRoots(e, n, a)),
                  o.length === 0
                    ? [0]
                    : o[1] <= 0
                      ? [o[0], o[1], 0]
                      : o[0] >= 0 ? [0, o[0], o[1]] : [o[0], 0, o[1]])
                : r(e, n, a, i)
          }),
          n
        )
      }
    ),
    define(
      'Core/QuarticRealPolynomial',
      [
        './CubicRealPolynomial',
        './DeveloperError',
        './Math',
        './QuadraticRealPolynomial'
      ],
      function (e, t, r, n) {
        'use strict'
        function a (t, a, i, o) {
          var u = t * t,
            s = a - 3 * u / 8,
            c = i - a * t / 2 + u * t / 8,
            l = o - i * t / 4 + a * u / 16 - 3 * u * u / 256,
            f = e.computeRealRoots(1, 2 * s, s * s - 4 * l, -c * c)
          if (f.length > 0) {
            var d = -t / 4,
              h = f[f.length - 1]
            if (Math.abs(h) < r.EPSILON14) {
              var E = n.computeRealRoots(1, s, l)
              if (E.length === 2) {
                var m,
                  p = E[0],
                  y = E[1]
                if (p >= 0 && y >= 0) {
                  var _ = Math.sqrt(p),
                    T = Math.sqrt(y)
                  return [d - T, d - _, d + _, d + T]
                }
                if (p >= 0 && y < 0) return (m = Math.sqrt(p)), [d - m, d + m]
                if (p < 0 && y >= 0) return (m = Math.sqrt(y)), [d - m, d + m]
              }
              return []
            }
            if (h > 0) {
              var R = Math.sqrt(h),
                v = (s + h - c / R) / 2,
                A = (s + h + c / R) / 2,
                S = n.computeRealRoots(1, R, v),
                N = n.computeRealRoots(1, -R, A)
              return S.length !== 0
                ? ((S[0] += d),
                  (S[1] += d),
                  N.length !== 0
                    ? ((N[0] += d),
                      (N[1] += d),
                      S[1] <= N[0]
                        ? [S[0], S[1], N[0], N[1]]
                        : N[1] <= S[0]
                          ? [N[0], N[1], S[0], S[1]]
                          : S[0] >= N[0] && S[1] <= N[1]
                            ? [N[0], S[0], S[1], N[1]]
                            : N[0] >= S[0] && N[1] <= S[1]
                              ? [S[0], N[0], N[1], S[1]]
                              : S[0] > N[0] && S[0] < N[1]
                                ? [N[0], S[0], N[1], S[1]]
                                : [S[0], N[0], S[1], N[1]])
                    : S)
                : N.length !== 0 ? ((N[0] += d), (N[1] += d), N) : []
            }
          }
          return []
        }
        function i (t, a, i, o) {
          var u = i * i,
            s = a * a,
            c = t * t,
            l = -2 * a,
            f = i * t + s - 4 * o,
            d = c * o - i * a * t + u,
            h = e.computeRealRoots(1, l, f, d)
          if (h.length > 0) {
            var E,
              m,
              p = h[0],
              y = a - p,
              _ = y * y,
              T = t / 2,
              R = y / 2,
              v = _ - 4 * o,
              A = _ + 4 * Math.abs(o),
              S = c - 4 * p,
              N = c + 4 * Math.abs(p)
            if (p < 0 || v * N < S * A) {
              var g = Math.sqrt(S);
              (E = g / 2), (m = g === 0 ? 0 : (t * R - i) / g)
            } else {
              var I = Math.sqrt(v);
              (E = I === 0 ? 0 : (t * R - i) / I), (m = I / 2)
            }
            var O, w
            T === 0 && E === 0
              ? ((O = 0), (w = 0))
              : r.sign(T) === r.sign(E)
                ? ((O = T + E), (w = p / O))
                : ((w = T - E), (O = p / w))
            var M, x
            R === 0 && m === 0
              ? ((M = 0), (x = 0))
              : r.sign(R) === r.sign(m)
                ? ((M = R + m), (x = o / M))
                : ((x = R - m), (M = o / x))
            var C = n.computeRealRoots(1, O, M),
              P = n.computeRealRoots(1, w, x)
            if (C.length !== 0) {
              return P.length !== 0
                ? C[1] <= P[0]
                  ? [C[0], C[1], P[0], P[1]]
                  : P[1] <= C[0]
                    ? [P[0], P[1], C[0], C[1]]
                    : C[0] >= P[0] && C[1] <= P[1]
                      ? [P[0], C[0], C[1], P[1]]
                      : P[0] >= C[0] && P[1] <= C[1]
                        ? [C[0], P[0], P[1], C[1]]
                        : C[0] > P[0] && C[0] < P[1]
                          ? [P[0], C[0], P[1], C[1]]
                          : [C[0], P[0], C[1], P[1]]
                : C
            }
            if (P.length !== 0) return P
          }
          return []
        }
        var o = {}
        return (
          (o.computeDiscriminant = function (e, t, r, n, a) {
            var i = e * e,
              o = i * e,
              u = t * t,
              s = u * t,
              c = r * r,
              l = c * r,
              f = n * n,
              d = f * n,
              h = a * a,
              E = h * a,
              m =
                u * c * f -
                4 * s * d -
                4 * e * l * f +
                18 * e * t * r * d -
                27 * i * f * f +
                256 * o * E +
                a *
                  (18 * s * r * n -
                    4 * u * l +
                    16 * e * c * c -
                    80 * e * t * c * n -
                    6 * e * u * f +
                    144 * i * r * f) +
                h *
                  (144 * e * u * r -
                    27 * u * u -
                    128 * i * c -
                    192 * i * t * n)
            return m
          }),
          (o.computeRealRoots = function (t, n, o, u, s) {
            if (Math.abs(t) < r.EPSILON15) { return e.computeRealRoots(n, o, u, s) }
            var c = n / t,
              l = o / t,
              f = u / t,
              d = s / t,
              h = c < 0 ? 1 : 0
            switch (((h += l < 0 ? h + 1 : h),
            (h += f < 0 ? h + 1 : h),
            (h += d < 0 ? h + 1 : h))) {
              case 0:
                return a(c, l, f, d)
              case 1:
                return i(c, l, f, d)
              case 2:
                return i(c, l, f, d)
              case 3:
                return a(c, l, f, d)
              case 4:
                return a(c, l, f, d)
              case 5:
                return i(c, l, f, d)
              case 6:
                return a(c, l, f, d)
              case 7:
                return a(c, l, f, d)
              case 8:
                return i(c, l, f, d)
              case 9:
                return a(c, l, f, d)
              case 10:
                return a(c, l, f, d)
              case 11:
                return i(c, l, f, d)
              case 12:
                return a(c, l, f, d)
              case 13:
                return a(c, l, f, d)
              case 14:
                return a(c, l, f, d)
              case 15:
                return a(c, l, f, d)
              default:
            }
          }),
          o
        )
      }
    ),
    define(
      'Core/Ray',
      ['./Cartesian3', './defaultValue', './defined', './DeveloperError'],
      function (e, t, r, n) {
        'use strict'
        function a (r, n) {
          (n = e.clone(t(n, e.ZERO))),
            e.equals(n, e.ZERO) || e.normalize(n, n),
            (this.origin = e.clone(t(r, e.ZERO))),
            (this.direction = n)
        }
        return (
          (a.getPoint = function (t, n, a) {
            return (
              r(a) || (a = new e()),
              (a = e.multiplyByScalar(t.direction, n, a)),
              e.add(t.origin, a, a)
            )
          }),
          a
        )
      }
    ),
    define(
      'Core/IntersectionTests',
      [
        './Cartesian3',
        './Cartographic',
        './defaultValue',
        './defined',
        './DeveloperError',
        './Interval',
        './Math',
        './Matrix3',
        './QuadraticRealPolynomial',
        './QuarticRealPolynomial',
        './Ray'
      ],
      function (e, t, r, n, a, i, o, u, s, c, l) {
        'use strict'
        function f (e, t, r, n) {
          var a = t * t - 4 * e * r
          if (!(a < 0)) {
            if (a > 0) {
              var i = 1 / (2 * e),
                o = Math.sqrt(a),
                u = (-t + o) * i,
                s = (-t - o) * i
              return (
                u < s
                  ? ((n.root0 = u), (n.root1 = s))
                  : ((n.root0 = s), (n.root1 = u)),
                n
              )
            }
            var c = -t / (2 * e)
            if (c !== 0) return (n.root0 = n.root1 = c), n
          }
        }
        function d (t, r, a) {
          n(a) || (a = new i())
          var o = t.origin,
            u = t.direction,
            s = r.center,
            c = r.radius * r.radius,
            l = e.subtract(o, s, _),
            d = e.dot(u, u),
            h = 2 * e.dot(u, l),
            E = e.magnitudeSquared(l) - c,
            m = f(d, h, E, A)
          if (n(m)) return (a.start = m.root0), (a.stop = m.root1), a
        }
        function h (e, t, r) {
          var n = e + t
          return o.sign(e) !== o.sign(t) &&
          Math.abs(n / Math.max(Math.abs(e), Math.abs(t))) < r
            ? 0
            : n
        }
        function E (t, r, n, a, i) {
          var l,
            f = a * a,
            d = i * i,
            E = (t[u.COLUMN1ROW1] - t[u.COLUMN2ROW2]) * d,
            m =
              i *
              (a * h(t[u.COLUMN1ROW0], t[u.COLUMN0ROW1], o.EPSILON15) + r.y),
            p = t[u.COLUMN0ROW0] * f + t[u.COLUMN2ROW2] * d + a * r.x + n,
            y = d * h(t[u.COLUMN2ROW1], t[u.COLUMN1ROW2], o.EPSILON15),
            _ = i * (a * h(t[u.COLUMN2ROW0], t[u.COLUMN0ROW2]) + r.z),
            T = []
          if (_ === 0 && y === 0) {
            if (((l = s.computeRealRoots(E, m, p)), l.length === 0)) return T
            var R = l[0],
              v = Math.sqrt(Math.max(1 - R * R, 0))
            if (
              (T.push(new e(a, i * R, i * -v)),
              T.push(new e(a, i * R, i * v)),
              l.length === 2)
            ) {
              var A = l[1],
                S = Math.sqrt(Math.max(1 - A * A, 0))
              T.push(new e(a, i * A, i * -S)), T.push(new e(a, i * A, i * S))
            }
            return T
          }
          var N = _ * _,
            g = y * y,
            I = E * E,
            O = _ * y,
            w = I + g,
            M = 2 * (m * E + O),
            x = 2 * p * E + m * m - g + N,
            C = 2 * (p * m - O),
            P = p * p - N
          if (w === 0 && M === 0 && x === 0 && C === 0) return T
          l = c.computeRealRoots(w, M, x, C, P)
          var D = l.length
          if (D === 0) return T
          for (var L = 0; L < D; ++L) {
            var U,
              b = l[L],
              F = b * b,
              B = Math.max(1 - F, 0),
              z = Math.sqrt(B)
            U =
              o.sign(E) === o.sign(p)
                ? h(E * F + p, m * b, o.EPSILON12)
                : o.sign(p) === o.sign(m * b)
                  ? h(E * F, m * b + p, o.EPSILON12)
                  : h(E * F + m * b, p, o.EPSILON12)
            var G = h(y * b, _, o.EPSILON15),
              q = U * G
            q < 0
              ? T.push(new e(a, i * b, i * z))
              : q > 0
                ? T.push(new e(a, i * b, i * -z))
                : z !== 0
                  ? (T.push(new e(a, i * b, i * -z)),
                    T.push(new e(a, i * b, i * z)),
                    ++L)
                  : T.push(new e(a, i * b, i * z))
          }
          return T
        }
        var m = {}
        m.rayPlane = function (t, r, a) {
          n(a) || (a = new e())
          var i = t.origin,
            u = t.direction,
            s = r.normal,
            c = e.dot(s, u)
          if (!(Math.abs(c) < o.EPSILON15)) {
            var l = (-r.distance - e.dot(s, i)) / c
            if (!(l < 0)) { return (a = e.multiplyByScalar(u, l, a)), e.add(i, a, a) }
          }
        }
        var p = new e(),
          y = new e(),
          _ = new e(),
          T = new e(),
          R = new e();
        (m.rayTriangleParametric = function (t, n, a, i, u) {
          u = r(u, !1)
          var s,
            c,
            l,
            f,
            d,
            h = t.origin,
            E = t.direction,
            m = e.subtract(a, n, p),
            v = e.subtract(i, n, y),
            A = e.cross(E, v, _),
            S = e.dot(m, A)
          if (u) {
            if (S < o.EPSILON6) return
            if (((s = e.subtract(h, n, T)), (l = e.dot(s, A)), l < 0 || l > S)) { return }
            if (((c = e.cross(s, m, R)), (f = e.dot(E, c)), f < 0 || l + f > S)) { return }
            d = e.dot(v, c) / S
          } else {
            if (Math.abs(S) < o.EPSILON6) return
            var N = 1 / S
            if (
              ((s = e.subtract(h, n, T)), (l = e.dot(s, A) * N), l < 0 || l > 1)
            ) { return }
            if (
              ((c = e.cross(s, m, R)),
              (f = e.dot(E, c) * N),
              f < 0 || l + f > 1)
            ) { return }
            d = e.dot(v, c) * N
          }
          return d
        }),
          (m.rayTriangle = function (t, r, a, i, o, u) {
            var s = m.rayTriangleParametric(t, r, a, i, o)
            if (n(s) && !(s < 0)) {
              return (
                n(u) || (u = new e()),
                e.multiplyByScalar(t.direction, s, u),
                e.add(t.origin, u, u)
              )
            }
          })
        var v = new l()
        m.lineSegmentTriangle = function (t, r, a, i, o, u, s) {
          var c = v
          e.clone(t, c.origin),
            e.subtract(r, t, c.direction),
            e.normalize(c.direction, c.direction)
          var l = m.rayTriangleParametric(c, a, i, o, u)
          if (!(!n(l) || l < 0 || l > e.distance(t, r))) {
            return (
              n(s) || (s = new e()),
              e.multiplyByScalar(c.direction, l, s),
              e.add(c.origin, s, s)
            )
          }
        }
        var A = { root0: 0, root1: 0 }
        m.raySphere = function (e, t, r) {
          if (((r = d(e, t, r)), n(r) && !(r.stop < 0))) { return (r.start = Math.max(r.start, 0)), r }
        }
        var S = new l()
        m.lineSegmentSphere = function (t, r, a, i) {
          var o = S
          e.clone(t, o.origin)
          var u = e.subtract(r, t, o.direction),
            s = e.magnitude(u)
          if (
            (e.normalize(u, u),
            (i = d(o, a, i)),
            !(!n(i) || i.stop < 0 || i.start > s))
          ) {
            return (
              (i.start = Math.max(i.start, 0)),
              (i.stop = Math.min(i.stop, s)),
              i
            )
          }
        }
        var N = new e(),
          g = new e()
        m.rayEllipsoid = function (t, r) {
          var n,
            a,
            o,
            u,
            s,
            c = r.oneOverRadii,
            l = e.multiplyComponents(c, t.origin, N),
            f = e.multiplyComponents(c, t.direction, g),
            d = e.magnitudeSquared(l),
            h = e.dot(l, f)
          if (d > 1) {
            if (h >= 0) return
            var E = h * h
            if (((n = d - 1), (a = e.magnitudeSquared(f)), (o = a * n), E < o)) { return }
            if (E > o) {
              (u = h * h - o), (s = -h + Math.sqrt(u))
              var m = s / a,
                p = n / s
              return m < p ? new i(m, p) : { start: p, stop: m }
            }
            var y = Math.sqrt(n / a)
            return new i(y, y)
          }
          return d < 1
            ? ((n = d - 1),
              (a = e.magnitudeSquared(f)),
              (o = a * n),
              (u = h * h - o),
              (s = -h + Math.sqrt(u)),
              new i(0, s / a))
            : h < 0 ? ((a = e.magnitudeSquared(f)), new i(0, -h / a)) : void 0
        }
        var I = new e(),
          O = new e(),
          w = new e(),
          M = new e(),
          x = new e(),
          C = new u(),
          P = new u(),
          D = new u(),
          L = new u(),
          U = new u(),
          b = new u(),
          F = new u(),
          B = new e(),
          z = new e(),
          G = new t()
        m.grazingAltitudeLocation = function (t, r) {
          var a = t.origin,
            i = t.direction
          if (!e.equals(a, e.ZERO)) {
            var s = r.geodeticSurfaceNormal(a, I)
            if (e.dot(i, s) >= 0) return a
          }
          var c = n(this.rayEllipsoid(t, r)),
            l = r.transformPositionToScaledSpace(i, I),
            f = e.normalize(l, l),
            d = e.mostOrthogonalAxis(l, M),
            h = e.normalize(e.cross(d, f, O), O),
            m = e.normalize(e.cross(f, h, w), w),
            p = C;
          (p[0] = f.x),
            (p[1] = f.y),
            (p[2] = f.z),
            (p[3] = h.x),
            (p[4] = h.y),
            (p[5] = h.z),
            (p[6] = m.x),
            (p[7] = m.y),
            (p[8] = m.z)
          var y = u.transpose(p, P),
            _ = u.fromScale(r.radii, D),
            T = u.fromScale(r.oneOverRadii, L),
            R = U;
          (R[0] = 0),
            (R[1] = -i.z),
            (R[2] = i.y),
            (R[3] = i.z),
            (R[4] = 0),
            (R[5] = -i.x),
            (R[6] = -i.y),
            (R[7] = i.x),
            (R[8] = 0)
          var v,
            A,
            S = u.multiply(u.multiply(y, T, b), R, b),
            N = u.multiply(u.multiply(S, _, F), p, F),
            g = u.multiplyByVector(S, a, x),
            q = E(N, e.negate(g, I), 0, 0, 1),
            V = q.length
          if (V > 0) {
            for (
              var W = e.clone(e.ZERO, z), X = Number.NEGATIVE_INFINITY, H = 0;
              H < V;
              ++H
            ) {
              v = u.multiplyByVector(_, u.multiplyByVector(p, q[H], B), B)
              var Y = e.normalize(e.subtract(v, a, M), M),
                k = e.dot(Y, i)
              k > X && ((X = k), (W = e.clone(v, W)))
            }
            var j = r.cartesianToCartographic(W, G)
            return (
              (X = o.clamp(X, 0, 1)),
              (A = e.magnitude(e.subtract(W, a, M)) * Math.sqrt(1 - X * X)),
              (A = c ? -A : A),
              (j.height = A),
              r.cartographicToCartesian(j, new e())
            )
          }
        }
        var q = new e()
        return (
          (m.lineSegmentPlane = function (t, r, a, i) {
            n(i) || (i = new e())
            var u = e.subtract(r, t, q),
              s = a.normal,
              c = e.dot(s, u)
            if (!(Math.abs(c) < o.EPSILON6)) {
              var l = e.dot(s, t),
                f = -(a.distance + l) / c
              if (!(f < 0 || f > 1)) { return e.multiplyByScalar(u, f, i), e.add(t, i, i), i }
            }
          }),
          (m.trianglePlaneIntersection = function (t, r, n, a) {
            var i = a.normal,
              o = a.distance,
              u = e.dot(i, t) + o < 0,
              s = e.dot(i, r) + o < 0,
              c = e.dot(i, n) + o < 0,
              l = 0;
            (l += u ? 1 : 0), (l += s ? 1 : 0), (l += c ? 1 : 0)
            var f, d
            if (
              ((l !== 1 && l !== 2) || ((f = new e()), (d = new e())), l === 1)
            ) {
              if (u) {
                return (
                  m.lineSegmentPlane(t, r, a, f),
                  m.lineSegmentPlane(t, n, a, d),
                  {
                    positions: [t, r, n, f, d],
                    indices: [0, 3, 4, 1, 2, 4, 1, 4, 3]
                  }
                )
              }
              if (s) {
                return (
                  m.lineSegmentPlane(r, n, a, f),
                  m.lineSegmentPlane(r, t, a, d),
                  {
                    positions: [t, r, n, f, d],
                    indices: [1, 3, 4, 2, 0, 4, 2, 4, 3]
                  }
                )
              }
              if (c) {
                return (
                  m.lineSegmentPlane(n, t, a, f),
                  m.lineSegmentPlane(n, r, a, d),
                  {
                    positions: [t, r, n, f, d],
                    indices: [2, 3, 4, 0, 1, 4, 0, 4, 3]
                  }
                )
              }
            } else if (l === 2) {
              if (!u) {
                return (
                  m.lineSegmentPlane(r, t, a, f),
                  m.lineSegmentPlane(n, t, a, d),
                  {
                    positions: [t, r, n, f, d],
                    indices: [1, 2, 4, 1, 4, 3, 0, 3, 4]
                  }
                )
              }
              if (!s) {
                return (
                  m.lineSegmentPlane(n, r, a, f),
                  m.lineSegmentPlane(t, r, a, d),
                  {
                    positions: [t, r, n, f, d],
                    indices: [2, 0, 4, 2, 4, 3, 1, 3, 4]
                  }
                )
              }
              if (!c) {
                return (
                  m.lineSegmentPlane(t, n, a, f),
                  m.lineSegmentPlane(r, n, a, d),
                  {
                    positions: [t, r, n, f, d],
                    indices: [0, 1, 4, 0, 4, 3, 2, 3, 4]
                  }
                )
              }
            }
          }),
          m
        )
      }
    ),
    define(
      'Core/Plane',
      [
        './Cartesian3',
        './defined',
        './DeveloperError',
        './freezeObject',
        './Math'
      ],
      function (e, t, r, n, a) {
        'use strict'
        function i (t, r) {
          (this.normal = e.clone(t)), (this.distance = r)
        }
        i.fromPointNormal = function (r, n, a) {
          var o = -e.dot(n, r)
          return t(a)
            ? (e.clone(n, a.normal), (a.distance = o), a)
            : new i(n, o)
        }
        var o = new e()
        return (
          (i.fromCartesian4 = function (r, n) {
            var a = e.fromCartesian4(r, o),
              u = r.w
            return t(n)
              ? (e.clone(a, n.normal), (n.distance = u), n)
              : new i(a, u)
          }),
          (i.getPointDistance = function (t, r) {
            return e.dot(t.normal, r) + t.distance
          }),
          (i.ORIGIN_XY_PLANE = n(new i(e.UNIT_Z, 0))),
          (i.ORIGIN_YZ_PLANE = n(new i(e.UNIT_X, 0))),
          (i.ORIGIN_ZX_PLANE = n(new i(e.UNIT_Y, 0))),
          i
        )
      }
    ),
    define(
      'Core/Tipsify',
      ['./defaultValue', './defined', './DeveloperError'],
      function (e, t, r) {
        'use strict'
        var n = {}
        return (
          (n.calculateACMR = function (r) {
            r = e(r, e.EMPTY_OBJECT)
            var n = r.indices,
              a = r.maximumIndex,
              i = e(r.cacheSize, 24),
              o = n.length
            if (!t(a)) {
              a = 0
              for (var u = 0, s = n[u]; u < o;) { s > a && (a = s), ++u, (s = n[u]) }
            }
            for (var c = [], l = 0; l < a + 1; l++) c[l] = 0
            for (var f = i + 1, d = 0; d < o; ++d) { f - c[n[d]] > i && ((c[n[d]] = f), ++f) }
            return (f - i + 1) / (o / 3)
          }),
          (n.tipsify = function (r) {
            function n (e, t, r, n) {
              for (; t.length >= 1;) {
                var a = t[t.length - 1]
                if ((t.splice(t.length - 1, 1), e[a].numLiveTriangles > 0)) { return a }
              }
              for (; i < n;) {
                if (e[i].numLiveTriangles > 0) return ++i, i - 1
                ++i
              }
              return -1
            }
            function a (e, t, r, a, i, o, u) {
              for (var s, c = -1, l = -1, f = 0; f < r.length;) {
                var d = r[f]
                a[d].numLiveTriangles &&
                  ((s = 0),
                  i - a[d].timeStamp + 2 * a[d].numLiveTriangles <= t &&
                    (s = i - a[d].timeStamp),
                  (s > l || l === -1) && ((l = s), (c = d))),
                  ++f
              }
              return c === -1 ? n(a, o, e, u) : c
            }
            r = e(r, e.EMPTY_OBJECT)
            var i,
              o = r.indices,
              u = r.maximumIndex,
              s = e(r.cacheSize, 24),
              c = o.length,
              l = 0,
              f = 0,
              d = o[f],
              h = c
            if (t(u)) l = u + 1
            else {
              for (; f < h;) d > l && (l = d), ++f, (d = o[f])
              if (l === -1) return 0
              ++l
            }
            var E,
              m = []
            for (E = 0; E < l; E++) { m[E] = { numLiveTriangles: 0, timeStamp: 0, vertexTriangles: [] } }
            f = 0
            for (var p = 0; f < h;) {
              m[o[f]].vertexTriangles.push(p),
                ++m[o[f]].numLiveTriangles,
                m[o[f + 1]].vertexTriangles.push(p),
                ++m[o[f + 1]].numLiveTriangles,
                m[o[f + 2]].vertexTriangles.push(p),
                ++m[o[f + 2]].numLiveTriangles,
                ++p,
                (f += 3)
            }
            var y = 0,
              _ = s + 1
            i = 1
            var T,
              R,
              v = [],
              A = [],
              S = 0,
              N = [],
              g = c / 3,
              I = []
            for (E = 0; E < g; E++) I[E] = !1
            for (var O, w; y !== -1;) {
              (v = []), (R = m[y]), (w = R.vertexTriangles.length)
              for (var M = 0; M < w; ++M) {
                if (((p = R.vertexTriangles[M]), !I[p])) {
                  (I[p] = !0), (f = p + p + p)
                  for (var x = 0; x < 3; ++x) {
                    (O = o[f]),
                      v.push(O),
                      A.push(O),
                      (N[S] = O),
                      ++S,
                      (T = m[O]),
                      --T.numLiveTriangles,
                      _ - T.timeStamp > s && ((T.timeStamp = _), ++_),
                      ++f
                  }
                }
              }
              y = a(o, s, v, m, _, A, l)
            }
            return N
          }),
          n
        )
      }
    ),
    define(
      'Core/GeometryPipeline',
      [
        './AttributeCompression',
        './barycentricCoordinates',
        './BoundingSphere',
        './Cartesian2',
        './Cartesian3',
        './Cartesian4',
        './Cartographic',
        './ComponentDatatype',
        './defaultValue',
        './defined',
        './DeveloperError',
        './EncodedCartesian3',
        './GeographicProjection',
        './Geometry',
        './GeometryAttribute',
        './GeometryType',
        './IndexDatatype',
        './Intersect',
        './IntersectionTests',
        './Math',
        './Matrix3',
        './Matrix4',
        './Plane',
        './PrimitiveType',
        './Tipsify'
      ],
      function (
        e,
        t,
        r,
        n,
        a,
        i,
        o,
        u,
        s,
        c,
        l,
        f,
        d,
        h,
        E,
        m,
        p,
        y,
        _,
        T,
        R,
        v,
        A,
        S,
        N
      ) {
        'use strict'
        function g (e, t, r, n, a) {
          (e[t++] = r),
            (e[t++] = n),
            (e[t++] = n),
            (e[t++] = a),
            (e[t++] = a),
            (e[t] = r)
        }
        function I (e) {
          for (
            var t = e.length,
              r = t / 3 * 6,
              n = p.createTypedArray(t, r),
              a = 0,
              i = 0;
            i < t;
            i += 3, a += 6
          ) { g(n, a, e[i], e[i + 1], e[i + 2]) }
          return n
        }
        function O (e) {
          var t = e.length
          if (t >= 3) {
            var r = 6 * (t - 2),
              n = p.createTypedArray(t, r)
            g(n, 0, e[0], e[1], e[2])
            for (var a = 6, i = 3; i < t; ++i, a += 6) { g(n, a, e[i - 1], e[i], e[i - 2]) }
            return n
          }
          return new Uint16Array()
        }
        function w (e) {
          if (e.length > 0) {
            for (
              var t = e.length - 1,
                r = 6 * (t - 1),
                n = p.createTypedArray(t, r),
                a = e[0],
                i = 0,
                o = 1;
              o < t;
              ++o, i += 6
            ) { g(n, i, a, e[o], e[o + 1]) }
            return n
          }
          return new Uint16Array()
        }
        function M (e) {
          var t = {}
          for (var r in e) {
            if (e.hasOwnProperty(r) && c(e[r]) && c(e[r].values)) {
              var n = e[r]
              t[r] = new E({
                componentDatatype: n.componentDatatype,
                componentsPerAttribute: n.componentsPerAttribute,
                normalize: n.normalize,
                values: []
              })
            }
          }
          return t
        }
        function x (e, t, r) {
          for (var n in t) {
            if (t.hasOwnProperty(n) && c(t[n]) && c(t[n].values)) {
              for (var a = t[n], i = 0; i < a.componentsPerAttribute; ++i) { e[n].values.push(a.values[r * a.componentsPerAttribute + i]) }
            }
          }
        }
        function C (e, t) {
          if (c(t)) {
            for (var r = t.values, n = r.length, i = 0; i < n; i += 3) {
              a.unpack(r, i, ie),
                v.multiplyByPoint(e, ie, ie),
                a.pack(ie, r, i)
            }
          }
        }
        function P (e, t) {
          if (c(t)) {
            for (var r = t.values, n = r.length, i = 0; i < n; i += 3) {
              a.unpack(r, i, ie),
                R.multiplyByVector(e, ie, ie),
                (ie = a.normalize(ie, ie)),
                a.pack(ie, r, i)
            }
          }
        }
        function D (e, t) {
          var r,
            n = e.length,
            a = {},
            i = e[0][t].attributes
          for (r in i) {
            if (i.hasOwnProperty(r) && c(i[r]) && c(i[r].values)) {
              for (
                var o = i[r], s = o.values.length, l = !0, f = 1;
                f < n;
                ++f
              ) {
                var d = e[f][t].attributes[r]
                if (
                  !c(d) ||
                  o.componentDatatype !== d.componentDatatype ||
                  o.componentsPerAttribute !== d.componentsPerAttribute ||
                  o.normalize !== d.normalize
                ) {
                  l = !1
                  break
                }
                s += d.values.length
              }
              l &&
                (a[r] = new E({
                  componentDatatype: o.componentDatatype,
                  componentsPerAttribute: o.componentsPerAttribute,
                  normalize: o.normalize,
                  values: u.createTypedArray(o.componentDatatype, s)
                }))
            }
          }
          return a
        }
        function L (e, t) {
          var n,
            i,
            o,
            u,
            s,
            l,
            f,
            d = e.length,
            E = (e[0].modelMatrix, c(e[0][t].indices)),
            m = e[0][t].primitiveType,
            y = D(e, t)
          for (n in y) {
            if (y.hasOwnProperty(n)) {
              for (s = y[n].values, u = 0, i = 0; i < d; ++i) {
                for (
                  l = e[i][t].attributes[n].values, f = l.length, o = 0;
                  o < f;
                  ++o
                ) { s[u++] = l[o] }
              }
            }
          }
          var _
          if (E) {
            var T = 0
            for (i = 0; i < d; ++i) T += e[i][t].indices.length
            var R = h.computeNumberOfVertices(
                new h({ attributes: y, primitiveType: S.POINTS })
              ),
              v = p.createTypedArray(R, T),
              A = 0,
              N = 0
            for (i = 0; i < d; ++i) {
              var g = e[i][t].indices,
                I = g.length
              for (u = 0; u < I; ++u) v[A++] = N + g[u]
              N += h.computeNumberOfVertices(e[i][t])
            }
            _ = v
          }
          var O,
            w = new a(),
            M = 0
          for (i = 0; i < d; ++i) {
            if (((O = e[i][t].boundingSphere), !c(O))) {
              w = void 0
              break
            }
            a.add(O.center, w, w)
          }
          if (c(w)) {
            for (a.divideByScalar(w, d, w), i = 0; i < d; ++i) {
              O = e[i][t].boundingSphere
              var x = a.magnitude(a.subtract(O.center, w, se)) + O.radius
              x > M && (M = x)
            }
          }
          return new h({
            attributes: y,
            indices: _,
            primitiveType: m,
            boundingSphere: c(w) ? new r(w, M) : void 0
          })
        }
        function U (e) {
          if (c(e.indices)) return e
          for (
            var t = h.computeNumberOfVertices(e),
              r = p.createTypedArray(t, t),
              n = 0;
            n < t;
            ++n
          ) { r[n] = n }
          return (e.indices = r), e
        }
        function b (e) {
          var t = h.computeNumberOfVertices(e),
            r = p.createTypedArray(t, 3 * (t - 2));
          (r[0] = 1), (r[1] = 0), (r[2] = 2)
          for (var n = 3, a = 3; a < t; ++a) { (r[n++] = a - 1), (r[n++] = 0), (r[n++] = a) }
          return (e.indices = r), (e.primitiveType = S.TRIANGLES), e
        }
        function F (e) {
          var t = h.computeNumberOfVertices(e),
            r = p.createTypedArray(t, 3 * (t - 2));
          (r[0] = 0),
            (r[1] = 1),
            (r[2] = 2),
            t > 3 && ((r[3] = 0), (r[4] = 2), (r[5] = 3))
          for (var n = 6, a = 3; a < t - 1; a += 2) {
            (r[n++] = a),
              (r[n++] = a - 1),
              (r[n++] = a + 1),
              a + 2 < t && ((r[n++] = a), (r[n++] = a + 1), (r[n++] = a + 2))
          }
          return (e.indices = r), (e.primitiveType = S.TRIANGLES), e
        }
        function B (e) {
          if (c(e.indices)) return e
          for (
            var t = h.computeNumberOfVertices(e),
              r = p.createTypedArray(t, t),
              n = 0;
            n < t;
            ++n
          ) { r[n] = n }
          return (e.indices = r), e
        }
        function z (e) {
          var t = h.computeNumberOfVertices(e),
            r = p.createTypedArray(t, 2 * (t - 1));
          (r[0] = 0), (r[1] = 1)
          for (var n = 2, a = 2; a < t; ++a) (r[n++] = a - 1), (r[n++] = a)
          return (e.indices = r), (e.primitiveType = S.LINES), e
        }
        function G (e) {
          var t = h.computeNumberOfVertices(e),
            r = p.createTypedArray(t, 2 * t);
          (r[0] = 0), (r[1] = 1)
          for (var n = 2, a = 2; a < t; ++a) (r[n++] = a - 1), (r[n++] = a)
          return (
            (r[n++] = t - 1),
            (r[n] = 0),
            (e.indices = r),
            (e.primitiveType = S.LINES),
            e
          )
        }
        function q (e) {
          switch (e.primitiveType) {
            case S.TRIANGLE_FAN:
              return b(e)
            case S.TRIANGLE_STRIP:
              return F(e)
            case S.TRIANGLES:
              return U(e)
            case S.LINE_STRIP:
              return z(e)
            case S.LINE_LOOP:
              return G(e)
            case S.LINES:
              return B(e)
          }
          return e
        }
        function V (e, t) {
          Math.abs(e.y) < T.EPSILON6 &&
            (t ? (e.y = -T.EPSILON6) : (e.y = T.EPSILON6))
        }
        function W (e, t, r) {
          if (e.y !== 0 && t.y !== 0 && r.y !== 0) { return V(e, e.y < 0), V(t, t.y < 0), void V(r, r.y < 0) }
          var n,
            a = Math.abs(e.y),
            i = Math.abs(t.y),
            o = Math.abs(r.y)
          n =
            a > i
              ? a > o ? T.sign(e.y) : T.sign(r.y)
              : i > o ? T.sign(t.y) : T.sign(r.y)
          var u = n < 0
          V(e, u), V(t, u), V(r, u)
        }
        function X (e, t, r, n) {
          a.add(
            e,
            a.multiplyByScalar(a.subtract(t, e, ve), e.y / (e.y - t.y), ve),
            r
          ),
            a.clone(r, n),
            V(r, !0),
            V(n, !1)
        }
        function H (e, t, r) {
          if (!(e.x >= 0 || t.x >= 0 || r.x >= 0)) {
            W(e, t, r)
            var n = e.y < 0,
              a = t.y < 0,
              i = r.y < 0,
              o = 0;
            (o += n ? 1 : 0), (o += a ? 1 : 0), (o += i ? 1 : 0)
            var u = Ie.indices
            o === 1
              ? ((u[1] = 3),
                (u[2] = 4),
                (u[5] = 6),
                (u[7] = 6),
                (u[8] = 5),
                n
                  ? (X(e, t, Ae, Ne),
                    X(e, r, Se, ge),
                    (u[0] = 0),
                    (u[3] = 1),
                    (u[4] = 2),
                    (u[6] = 1))
                  : a
                    ? (X(t, r, Ae, Ne),
                      X(t, e, Se, ge),
                      (u[0] = 1),
                      (u[3] = 2),
                      (u[4] = 0),
                      (u[6] = 2))
                    : i &&
                      (X(r, e, Ae, Ne),
                      X(r, t, Se, ge),
                      (u[0] = 2),
                      (u[3] = 0),
                      (u[4] = 1),
                      (u[6] = 0)))
              : o === 2 &&
                ((u[2] = 4),
                (u[4] = 4),
                (u[5] = 3),
                (u[7] = 5),
                (u[8] = 6),
                n
                  ? a
                    ? i ||
                      (X(r, e, Ae, Ne),
                      X(r, t, Se, ge),
                      (u[0] = 0),
                      (u[1] = 1),
                      (u[3] = 0),
                      (u[6] = 2))
                    : (X(t, r, Ae, Ne),
                      X(t, e, Se, ge),
                      (u[0] = 2),
                      (u[1] = 0),
                      (u[3] = 2),
                      (u[6] = 1))
                  : (X(e, t, Ae, Ne),
                    X(e, r, Se, ge),
                    (u[0] = 1),
                    (u[1] = 2),
                    (u[3] = 1),
                    (u[6] = 0)))
            var s = Ie.positions
            return (
              (s[0] = e),
              (s[1] = t),
              (s[2] = r),
              (s.length = 3),
              (o !== 1 && o !== 2) ||
                ((s[3] = Ae),
                (s[4] = Se),
                (s[5] = Ne),
                (s[6] = ge),
                (s.length = 7)),
              Ie
            )
          }
        }
        function Y (e, t) {
          var n = e.attributes
          if (n.position.values.length !== 0) {
            for (var a in n) {
              if (n.hasOwnProperty(a) && c(n[a]) && c(n[a].values)) {
                var i = n[a]
                i.values = u.createTypedArray(i.componentDatatype, i.values)
              }
            }
            var o = h.computeNumberOfVertices(e)
            return (
              (e.indices = p.createTypedArray(o, e.indices)),
              t && (e.boundingSphere = r.fromVertices(n.position.values)),
              e
            )
          }
        }
        function k (e) {
          var t = e.attributes,
            r = {}
          for (var n in t) {
            if (t.hasOwnProperty(n) && c(t[n]) && c(t[n].values)) {
              var a = t[n]
              r[n] = new E({
                componentDatatype: a.componentDatatype,
                componentsPerAttribute: a.componentsPerAttribute,
                normalize: a.normalize,
                values: []
              })
            }
          }
          return new h({
            attributes: r,
            indices: [],
            primitiveType: e.primitiveType
          })
        }
        function j (e, t, r) {
          var n = c(e.geometry.boundingSphere);
          (t = Y(t, n)),
            (r = Y(r, n)),
            c(r) && !c(t)
              ? (e.geometry = r)
              : !c(r) && c(t)
                ? (e.geometry = t)
                : ((e.westHemisphereGeometry = t),
                  (e.eastHemisphereGeometry = r),
                  (e.geometry = void 0))
        }
        function Z (e, r, i, o, u, s, l, f, d, h, E, m) {
          if (c(s) || c(l) || c(f) || c(d) || c(h)) {
            var p = a.fromArray(u, 3 * e, Oe),
              y = a.fromArray(u, 3 * r, we),
              _ = a.fromArray(u, 3 * i, Me),
              T = t(o, p, y, _, xe)
            if (c(s)) {
              var R = a.fromArray(s, 3 * e, Oe),
                v = a.fromArray(s, 3 * r, we),
                A = a.fromArray(s, 3 * i, Me)
              a.multiplyByScalar(R, T.x, R),
                a.multiplyByScalar(v, T.y, v),
                a.multiplyByScalar(A, T.z, A)
              var S = a.add(R, v, R)
              a.add(S, A, S),
                a.normalize(S, S),
                a.pack(S, E.normal.values, 3 * m)
            }
            if (c(h)) {
              var N = a.fromArray(h, 3 * e, Oe),
                g = a.fromArray(h, 3 * r, we),
                I = a.fromArray(h, 3 * i, Me)
              a.multiplyByScalar(N, T.x, N),
                a.multiplyByScalar(g, T.y, g),
                a.multiplyByScalar(I, T.z, I)
              var O
              a.equals(N, a.ZERO) && a.equals(g, a.ZERO) && a.equals(I, a.ZERO)
                ? ((O = Oe), (O.x = 0), (O.y = 0), (O.z = 0))
                : ((O = a.add(N, g, N)), a.add(O, I, O), a.normalize(O, O)),
                a.pack(O, E.extrudeDirection.values, 3 * m)
            }
            if (c(l)) {
              var w = a.fromArray(l, 3 * e, Oe),
                M = a.fromArray(l, 3 * r, we),
                x = a.fromArray(l, 3 * i, Me)
              a.multiplyByScalar(w, T.x, w),
                a.multiplyByScalar(M, T.y, M),
                a.multiplyByScalar(x, T.z, x)
              var C = a.add(w, M, w)
              a.add(C, x, C),
                a.normalize(C, C),
                a.pack(C, E.tangent.values, 3 * m)
            }
            if (c(f)) {
              var P = a.fromArray(f, 3 * e, Oe),
                D = a.fromArray(f, 3 * r, we),
                L = a.fromArray(f, 3 * i, Me)
              a.multiplyByScalar(P, T.x, P),
                a.multiplyByScalar(D, T.y, D),
                a.multiplyByScalar(L, T.z, L)
              var U = a.add(P, D, P)
              a.add(U, L, U),
                a.normalize(U, U),
                a.pack(U, E.bitangent.values, 3 * m)
            }
            if (c(d)) {
              var b = n.fromArray(d, 2 * e, Ce),
                F = n.fromArray(d, 2 * r, Pe),
                B = n.fromArray(d, 2 * i, De)
              n.multiplyByScalar(b, T.x, b),
                n.multiplyByScalar(F, T.y, F),
                n.multiplyByScalar(B, T.z, B)
              var z = n.add(b, F, b)
              n.add(z, B, z), n.pack(z, E.st.values, 2 * m)
            }
          }
        }
        function K (e, t, r, n, a, i) {
          var o = e.position.values.length / 3
          if (a !== -1) {
            var u = n[a],
              s = r[u]
            return s === -1
              ? ((r[u] = o),
                e.position.values.push(i.x, i.y, i.z),
                t.push(o),
                o)
              : (t.push(s), s)
          }
          return e.position.values.push(i.x, i.y, i.z), t.push(o), o
        }
        function J (e) {
          var t,
            r,
            n,
            i,
            o,
            u = e.geometry,
            s = u.attributes,
            l = s.position.values,
            f = c(s.normal) ? s.normal.values : void 0,
            d = c(s.bitangent) ? s.bitangent.values : void 0,
            h = c(s.tangent) ? s.tangent.values : void 0,
            E = c(s.st) ? s.st.values : void 0,
            m = c(s.extrudeDirection) ? s.extrudeDirection.values : void 0,
            p = u.indices,
            y = k(u),
            _ = k(u),
            T = []
          T.length = l.length / 3
          var R = []
          for (R.length = l.length / 3, o = 0; o < T.length; ++o) { (T[o] = -1), (R[o] = -1) }
          var v = p.length
          for (o = 0; o < v; o += 3) {
            var A = p[o],
              S = p[o + 1],
              N = p[o + 2],
              g = a.fromArray(l, 3 * A),
              I = a.fromArray(l, 3 * S),
              O = a.fromArray(l, 3 * N),
              w = H(g, I, O)
            if (c(w) && w.positions.length > 3) {
              for (
                var M = w.positions, x = w.indices, C = x.length, P = 0;
                P < C;
                ++P
              ) {
                var D = x[P],
                  L = M[D]
                L.y < 0
                  ? ((t = _.attributes), (r = _.indices), (n = T))
                  : ((t = y.attributes), (r = y.indices), (n = R)),
                  (i = K(t, r, n, p, D < 3 ? o + D : -1, L)),
                  Z(A, S, N, L, l, f, h, d, E, m, t, i)
              }
            } else {
              c(w) &&
                ((g = w.positions[0]),
                (I = w.positions[1]),
                (O = w.positions[2])),
                g.y < 0
                  ? ((t = _.attributes), (r = _.indices), (n = T))
                  : ((t = y.attributes), (r = y.indices), (n = R)),
                (i = K(t, r, n, p, o, g)),
                Z(A, S, N, g, l, f, h, d, E, m, t, i),
                (i = K(t, r, n, p, o + 1, I)),
                Z(A, S, N, I, l, f, h, d, E, m, t, i),
                (i = K(t, r, n, p, o + 2, O)),
                Z(A, S, N, O, l, f, h, d, E, m, t, i)
            }
          }
          j(e, _, y)
        }
        function Q (e) {
          var t,
            r = e.geometry,
            n = r.attributes,
            i = n.position.values,
            o = r.indices,
            u = k(r),
            s = k(r),
            l = o.length,
            f = []
          f.length = i.length / 3
          var d = []
          for (d.length = i.length / 3, t = 0; t < f.length; ++t) { (f[t] = -1), (d[t] = -1) }
          for (t = 0; t < l; t += 2) {
            var h = o[t],
              E = o[t + 1],
              m = a.fromArray(i, 3 * h, Oe),
              p = a.fromArray(i, 3 * E, we)
            Math.abs(m.y) < T.EPSILON6 &&
              (m.y < 0 ? (m.y = -T.EPSILON6) : (m.y = T.EPSILON6)),
              Math.abs(p.y) < T.EPSILON6 &&
                (p.y < 0 ? (p.y = -T.EPSILON6) : (p.y = T.EPSILON6))
            var y = u.attributes,
              R = u.indices,
              v = d,
              A = s.attributes,
              S = s.indices,
              N = f,
              g = _.lineSegmentPlane(m, p, Le, Me)
            if (c(g)) {
              var I = a.multiplyByScalar(a.UNIT_Y, 5 * T.EPSILON9, Ue)
              m.y < 0 &&
                (a.negate(I, I),
                (y = s.attributes),
                (R = s.indices),
                (v = f),
                (A = u.attributes),
                (S = u.indices),
                (N = d))
              var O = a.add(g, I, be)
              K(y, R, v, o, t, m),
                K(y, R, v, o, -1, O),
                a.negate(I, I),
                a.add(g, I, O),
                K(A, S, N, o, -1, O),
                K(A, S, N, o, t + 1, p)
            } else {
              var w, M, x
              m.y < 0
                ? ((w = s.attributes), (M = s.indices), (x = f))
                : ((w = u.attributes), (M = u.indices), (x = d)),
                K(w, M, x, o, t, m),
                K(w, M, x, o, t + 1, p)
            }
          }
          j(e, s, u)
        }
        function $ (e) {
          for (
            var t = e.attributes,
              r = t.position.values,
              n = t.prevPosition.values,
              i = t.nextPosition.values,
              o = r.length,
              u = 0;
            u < o;
            u += 3
          ) {
            var s = a.unpack(r, u, ze)
            if (!(s.x > 0)) {
              var c = a.unpack(n, u, Ge);
              ((s.y < 0 && c.y > 0) || (s.y > 0 && c.y < 0)) &&
                (u - 3 > 0
                  ? ((n[u] = r[u - 3]),
                    (n[u + 1] = r[u - 2]),
                    (n[u + 2] = r[u - 1]))
                  : a.pack(s, n, u))
              var l = a.unpack(i, u, qe);
              ((s.y < 0 && l.y > 0) || (s.y > 0 && l.y < 0)) &&
                (u + 3 < o
                  ? ((i[u] = r[u + 3]),
                    (i[u + 1] = r[u + 4]),
                    (i[u + 2] = r[u + 5]))
                  : a.pack(s, i, u))
            }
          }
        }
        function ee (e) {
          var t,
            r,
            o,
            u = e.geometry,
            s = u.attributes,
            l = s.position.values,
            f = s.prevPosition.values,
            d = s.nextPosition.values,
            h = s.expandAndWidth.values,
            E = c(s.st) ? s.st.values : void 0,
            m = c(s.color) ? s.color.values : void 0,
            p = k(u),
            y = k(u),
            R = !1,
            v = l.length / 3
          for (t = 0; t < v; t += 4) {
            var A = t,
              S = t + 2,
              N = a.fromArray(l, 3 * A, ze),
              g = a.fromArray(l, 3 * S, Ge)
            if (Math.abs(N.y) < ke) {
              for (
                N.y = ke * (g.y < 0 ? -1 : 1),
                  l[3 * t + 1] = N.y,
                  l[3 * (t + 1) + 1] = N.y,
                  r = 3 * A;
                r < 3 * A + 12;
                r += 3
              ) {
                (f[r] = l[3 * t]),
                  (f[r + 1] = l[3 * t + 1]),
                  (f[r + 2] = l[3 * t + 2])
              }
            }
            if (Math.abs(g.y) < ke) {
              for (
                g.y = ke * (N.y < 0 ? -1 : 1),
                  l[3 * (t + 2) + 1] = g.y,
                  l[3 * (t + 3) + 1] = g.y,
                  r = 3 * A;
                r < 3 * A + 12;
                r += 3
              ) {
                (d[r] = l[3 * (t + 2)]),
                  (d[r + 1] = l[3 * (t + 2) + 1]),
                  (d[r + 2] = l[3 * (t + 2) + 2])
              }
            }
            var I = p.attributes,
              O = p.indices,
              w = y.attributes,
              M = y.indices,
              x = _.lineSegmentPlane(N, g, Le, Ve)
            if (c(x)) {
              R = !0
              var C = a.multiplyByScalar(a.UNIT_Y, Ye, We)
              N.y < 0 &&
                (a.negate(C, C),
                (I = y.attributes),
                (O = y.indices),
                (w = p.attributes),
                (M = p.indices))
              var P = a.add(x, C, Xe)
              I.position.values.push(N.x, N.y, N.z, N.x, N.y, N.z),
                I.position.values.push(P.x, P.y, P.z),
                I.position.values.push(P.x, P.y, P.z),
                I.prevPosition.values.push(
                  f[3 * A],
                  f[3 * A + 1],
                  f[3 * A + 2]
                ),
                I.prevPosition.values.push(
                  f[3 * A + 3],
                  f[3 * A + 4],
                  f[3 * A + 5]
                ),
                I.prevPosition.values.push(N.x, N.y, N.z, N.x, N.y, N.z),
                I.nextPosition.values.push(P.x, P.y, P.z),
                I.nextPosition.values.push(P.x, P.y, P.z),
                I.nextPosition.values.push(P.x, P.y, P.z),
                I.nextPosition.values.push(P.x, P.y, P.z),
                a.negate(C, C),
                a.add(x, C, P),
                w.position.values.push(P.x, P.y, P.z),
                w.position.values.push(P.x, P.y, P.z),
                w.position.values.push(g.x, g.y, g.z, g.x, g.y, g.z),
                w.prevPosition.values.push(P.x, P.y, P.z),
                w.prevPosition.values.push(P.x, P.y, P.z),
                w.prevPosition.values.push(P.x, P.y, P.z),
                w.prevPosition.values.push(P.x, P.y, P.z),
                w.nextPosition.values.push(g.x, g.y, g.z, g.x, g.y, g.z),
                w.nextPosition.values.push(
                  d[3 * S],
                  d[3 * S + 1],
                  d[3 * S + 2]
                ),
                w.nextPosition.values.push(
                  d[3 * S + 3],
                  d[3 * S + 4],
                  d[3 * S + 5]
                )
              var D = n.fromArray(h, 2 * A, Fe),
                L = Math.abs(D.y)
              I.expandAndWidth.values.push(-1, L, 1, L),
                I.expandAndWidth.values.push(-1, -L, 1, -L),
                w.expandAndWidth.values.push(-1, L, 1, L),
                w.expandAndWidth.values.push(-1, -L, 1, -L)
              var U = a.magnitudeSquared(a.subtract(x, N, qe))
              if (((U /= a.magnitudeSquared(a.subtract(g, N, qe))), c(m))) {
                var b = i.fromArray(m, 4 * A, He),
                  F = i.fromArray(m, 4 * S, He),
                  B = T.lerp(b.x, F.x, U),
                  z = T.lerp(b.y, F.y, U),
                  G = T.lerp(b.z, F.z, U),
                  q = T.lerp(b.w, F.w, U)
                for (r = 4 * A; r < 4 * A + 8; ++r) I.color.values.push(m[r])
                for (
                  I.color.values.push(B, z, G, q),
                    I.color.values.push(B, z, G, q),
                    w.color.values.push(B, z, G, q),
                    w.color.values.push(B, z, G, q),
                    r = 4 * S;
                  r < 4 * S + 8;
                  ++r
                ) { w.color.values.push(m[r]) }
              }
              if (c(E)) {
                var V = n.fromArray(E, 2 * A, Fe),
                  W = n.fromArray(E, 2 * (t + 3), Be),
                  X = T.lerp(V.x, W.x, U)
                for (r = 2 * A; r < 2 * A + 4; ++r) I.st.values.push(E[r])
                for (
                  I.st.values.push(X, V.y),
                    I.st.values.push(X, W.y),
                    w.st.values.push(X, V.y),
                    w.st.values.push(X, W.y),
                    r = 2 * S;
                  r < 2 * S + 4;
                  ++r
                ) { w.st.values.push(E[r]) }
              }
              (o = I.position.values.length / 3 - 4),
                O.push(o, o + 2, o + 1),
                O.push(o + 1, o + 2, o + 3),
                (o = w.position.values.length / 3 - 4),
                M.push(o, o + 2, o + 1),
                M.push(o + 1, o + 2, o + 3)
            } else {
              var H, Y
              for (
                N.y < 0
                  ? ((H = y.attributes), (Y = y.indices))
                  : ((H = p.attributes), (Y = p.indices)),
                  H.position.values.push(N.x, N.y, N.z),
                  H.position.values.push(N.x, N.y, N.z),
                  H.position.values.push(g.x, g.y, g.z),
                  H.position.values.push(g.x, g.y, g.z),
                  r = 3 * t;
                r < 3 * t + 12;
                ++r
              ) {
                H.prevPosition.values.push(f[r]),
                  H.nextPosition.values.push(d[r])
              }
              for (r = 2 * t; r < 2 * t + 8; ++r) {
                H.expandAndWidth.values.push(h[r]),
                  c(E) && H.st.values.push(E[r])
              }
              if (c(m)) { for (r = 4 * t; r < 4 * t + 16; ++r) H.color.values.push(m[r]) }
              (o = H.position.values.length / 3 - 4),
                Y.push(o, o + 2, o + 1),
                Y.push(o + 1, o + 2, o + 3)
            }
          }
          R && ($(y), $(p)), j(e, y, p)
        }
        var te = {};
        (te.toWireframe = function (e) {
          var t = e.indices
          if (c(t)) {
            switch (e.primitiveType) {
              case S.TRIANGLES:
                e.indices = I(t)
                break
              case S.TRIANGLE_STRIP:
                e.indices = O(t)
                break
              case S.TRIANGLE_FAN:
                e.indices = w(t)
            }
            e.primitiveType = S.LINES
          }
          return e
        }),
          (te.createLineSegmentsForVectors = function (e, t, n) {
            (t = s(t, 'normal')), (n = s(n, 1e4))
            for (
              var a = e.attributes.position.values,
                i = e.attributes[t].values,
                o = a.length,
                l = new Float64Array(2 * o),
                f = 0,
                d = 0;
              d < o;
              d += 3
            ) {
              (l[f++] = a[d]),
                (l[f++] = a[d + 1]),
                (l[f++] = a[d + 2]),
                (l[f++] = a[d] + i[d] * n),
                (l[f++] = a[d + 1] + i[d + 1] * n),
                (l[f++] = a[d + 2] + i[d + 2] * n)
            }
            var m,
              p = e.boundingSphere
            return (
              c(p) && (m = new r(p.center, p.radius + n)),
              new h({
                attributes: {
                  position: new E({
                    componentDatatype: u.DOUBLE,
                    componentsPerAttribute: 3,
                    values: l
                  })
                },
                primitiveType: S.LINES,
                boundingSphere: m
              })
            )
          }),
          (te.createAttributeLocations = function (e) {
            var t,
              r = [
                'position',
                'positionHigh',
                'positionLow',
                'position3DHigh',
                'position3DLow',
                'position2DHigh',
                'position2DLow',
                'pickColor',
                'normal',
                'st',
                'tangent',
                'bitangent',
                'extrudeDirection',
                'compressedAttributes'
              ],
              n = e.attributes,
              a = {},
              i = 0,
              o = r.length
            for (t = 0; t < o; ++t) {
              var u = r[t]
              c(n[u]) && (a[u] = i++)
            }
            for (var s in n) n.hasOwnProperty(s) && !c(a[s]) && (a[s] = i++)
            return a
          }),
          (te.reorderForPreVertexCache = function (e) {
            var t = h.computeNumberOfVertices(e),
              r = e.indices
            if (c(r)) {
              for (var n = new Int32Array(t), a = 0; a < t; a++) n[a] = -1
              for (
                var i,
                  o = r,
                  s = o.length,
                  l = p.createTypedArray(t, s),
                  f = 0,
                  d = 0,
                  E = 0;
                f < s;

              ) {
                (i = n[o[f]]),
                  i !== -1
                    ? (l[d] = i)
                    : ((i = o[f]), (n[i] = E), (l[d] = E), ++E),
                  ++f,
                  ++d
              }
              e.indices = l
              var m = e.attributes
              for (var y in m) {
                if (m.hasOwnProperty(y) && c(m[y]) && c(m[y].values)) {
                  for (
                    var _ = m[y],
                      T = _.values,
                      R = 0,
                      v = _.componentsPerAttribute,
                      A = u.createTypedArray(_.componentDatatype, E * v);
                    R < t;

                  ) {
                    var S = n[R]
                    if (S !== -1) { for (var N = 0; N < v; N++) A[v * S + N] = T[v * R + N] }
                    ++R
                  }
                  _.values = A
                }
              }
            }
            return e
          }),
          (te.reorderForPostVertexCache = function (e, t) {
            var r = e.indices
            if (e.primitiveType === S.TRIANGLES && c(r)) {
              for (var n = r.length, a = 0, i = 0; i < n; i++) { r[i] > a && (a = r[i]) }
              e.indices = N.tipsify({
                indices: r,
                maximumIndex: a,
                cacheSize: t
              })
            }
            return e
          }),
          (te.fitToUnsignedShortIndices = function (e) {
            var t = [],
              r = h.computeNumberOfVertices(e)
            if (c(e.indices) && r >= T.SIXTY_FOUR_KILOBYTES) {
              var n,
                a = [],
                i = [],
                o = 0,
                u = M(e.attributes),
                s = e.indices,
                l = s.length
              e.primitiveType === S.TRIANGLES
                ? (n = 3)
                : e.primitiveType === S.LINES
                  ? (n = 2)
                  : e.primitiveType === S.POINTS && (n = 1)
              for (var f = 0; f < l; f += n) {
                for (var d = 0; d < n; ++d) {
                  var E = s[f + d],
                    m = a[E]
                  c(m) || ((m = o++), (a[E] = m), x(u, e.attributes, E)),
                    i.push(m)
                }
                o + n >= T.SIXTY_FOUR_KILOBYTES &&
                  (t.push(
                    new h({
                      attributes: u,
                      indices: i,
                      primitiveType: e.primitiveType,
                      boundingSphere: e.boundingSphere,
                      boundingSphereCV: e.boundingSphereCV
                    })
                  ),
                  (a = []),
                  (i = []),
                  (o = 0),
                  (u = M(e.attributes)))
              }
              i.length !== 0 &&
                t.push(
                  new h({
                    attributes: u,
                    indices: i,
                    primitiveType: e.primitiveType,
                    boundingSphere: e.boundingSphere,
                    boundingSphereCV: e.boundingSphereCV
                  })
                )
            } else t.push(e)
            return t
          })
        var re = new a(),
          ne = new o()
        te.projectTo2D = function (e, t, r, n, i) {
          var o = e.attributes[t]
          i = c(i) ? i : new d()
          for (
            var s = i.ellipsoid,
              l = o.values,
              f = new Float64Array(l.length),
              h = 0,
              m = 0;
            m < l.length;
            m += 3
          ) {
            var p = a.fromArray(l, m, re),
              y = s.cartesianToCartographic(p, ne),
              _ = i.project(y, re);
            (f[h++] = _.x), (f[h++] = _.y), (f[h++] = _.z)
          }
          return (
            (e.attributes[r] = o),
            (e.attributes[n] = new E({
              componentDatatype: u.DOUBLE,
              componentsPerAttribute: 3,
              values: f
            })),
            delete e.attributes[t],
            e
          )
        }
        var ae = { high: 0, low: 0 }
        te.encodeAttribute = function (e, t, r, n) {
          for (
            var a = e.attributes[t],
              i = a.values,
              o = i.length,
              s = new Float32Array(o),
              c = new Float32Array(o),
              l = 0;
            l < o;
            ++l
          ) { f.encode(i[l], ae), (s[l] = ae.high), (c[l] = ae.low) }
          var d = a.componentsPerAttribute
          return (
            (e.attributes[r] = new E({
              componentDatatype: u.FLOAT,
              componentsPerAttribute: d,
              values: s
            })),
            (e.attributes[n] = new E({
              componentDatatype: u.FLOAT,
              componentsPerAttribute: d,
              values: c
            })),
            delete e.attributes[t],
            e
          )
        }
        var ie = new a(),
          oe = new v(),
          ue = new R()
        te.transformToWorldCoordinates = function (e) {
          var t = e.modelMatrix
          if (v.equals(t, v.IDENTITY)) return e
          var n = e.geometry.attributes
          C(t, n.position),
            C(t, n.prevPosition),
            C(t, n.nextPosition),
            (c(n.normal) || c(n.tangent) || c(n.bitangent)) &&
              (v.inverse(t, oe),
              v.transpose(oe, oe),
              v.getRotation(oe, ue),
              P(ue, n.normal),
              P(ue, n.tangent),
              P(ue, n.bitangent))
          var a = e.geometry.boundingSphere
          return (
            c(a) && (e.geometry.boundingSphere = r.transform(a, t, a)),
            (e.modelMatrix = v.clone(v.IDENTITY)),
            e
          )
        }
        var se = new a()
        te.combineInstances = function (e) {
          for (var t = [], r = [], n = e.length, a = 0; a < n; ++a) {
            var i = e[a]
            c(i.geometry)
              ? t.push(i)
              : c(i.westHemisphereGeometry) &&
                c(i.eastHemisphereGeometry) &&
                r.push(i)
          }
          var o = []
          return (
            t.length > 0 && o.push(L(t, 'geometry')),
            r.length > 0 &&
              (o.push(L(r, 'westHemisphereGeometry')),
              o.push(L(r, 'eastHemisphereGeometry'))),
            o
          )
        }
        var ce = new a(),
          le = new a(),
          fe = new a(),
          de = new a()
        te.computeNormal = function (e) {
          var t,
            r = e.indices,
            n = e.attributes,
            i = n.position.values,
            o = n.position.values.length / 3,
            s = r.length,
            c = new Array(o),
            l = new Array(s / 3),
            f = new Array(s)
          for (t = 0; t < o; t++) { c[t] = { indexOffset: 0, count: 0, currentCount: 0 } }
          var d = 0
          for (t = 0; t < s; t += 3) {
            var h = r[t],
              m = r[t + 1],
              p = r[t + 2],
              y = 3 * h,
              _ = 3 * m,
              R = 3 * p;
            (le.x = i[y]),
              (le.y = i[y + 1]),
              (le.z = i[y + 2]),
              (fe.x = i[_]),
              (fe.y = i[_ + 1]),
              (fe.z = i[_ + 2]),
              (de.x = i[R]),
              (de.y = i[R + 1]),
              (de.z = i[R + 2]),
              c[h].count++,
              c[m].count++,
              c[p].count++,
              a.subtract(fe, le, fe),
              a.subtract(de, le, de),
              (l[d] = a.cross(fe, de, new a())),
              d++
          }
          var v = 0
          for (t = 0; t < o; t++) (c[t].indexOffset += v), (v += c[t].count)
          d = 0
          var A
          for (t = 0; t < s; t += 3) {
            A = c[r[t]]
            var S = A.indexOffset + A.currentCount;
            (f[S] = d),
              A.currentCount++,
              (A = c[r[t + 1]]),
              (S = A.indexOffset + A.currentCount),
              (f[S] = d),
              A.currentCount++,
              (A = c[r[t + 2]]),
              (S = A.indexOffset + A.currentCount),
              (f[S] = d),
              A.currentCount++,
              d++
          }
          var N = new Float32Array(3 * o)
          for (t = 0; t < o; t++) {
            var g = 3 * t
            if (((A = c[t]), a.clone(a.ZERO, ce), A.count > 0)) {
              for (d = 0; d < A.count; d++) { a.add(ce, l[f[A.indexOffset + d]], ce) }
              a.equalsEpsilon(a.ZERO, ce, T.EPSILON10) &&
                a.clone(l[f[A.indexOffset]], ce)
            }
            a.equalsEpsilon(a.ZERO, ce, T.EPSILON10) && (ce.z = 1),
              a.normalize(ce, ce),
              (N[g] = ce.x),
              (N[g + 1] = ce.y),
              (N[g + 2] = ce.z)
          }
          return (
            (e.attributes.normal = new E({
              componentDatatype: u.FLOAT,
              componentsPerAttribute: 3,
              values: N
            })),
            e
          )
        }
        var he = new a(),
          Ee = new a(),
          me = new a()
        te.computeTangentAndBitangent = function (e) {
          var t,
            r = (e.attributes, e.indices),
            n = e.attributes.position.values,
            i = e.attributes.normal.values,
            o = e.attributes.st.values,
            s = e.attributes.position.values.length / 3,
            c = r.length,
            l = new Array(3 * s)
          for (t = 0; t < l.length; t++) l[t] = 0
          var f, d, h
          for (t = 0; t < c; t += 3) {
            var m = r[t],
              p = r[t + 1],
              y = r[t + 2];
            (f = 3 * m), (d = 3 * p), (h = 3 * y)
            var _ = 2 * m,
              T = 2 * p,
              R = 2 * y,
              v = n[f],
              A = n[f + 1],
              S = n[f + 2],
              N = o[_],
              g = o[_ + 1],
              I = o[T + 1] - g,
              O = o[R + 1] - g,
              w = 1 / ((o[T] - N) * O - (o[R] - N) * I),
              M = (O * (n[d] - v) - I * (n[h] - v)) * w,
              x = (O * (n[d + 1] - A) - I * (n[h + 1] - A)) * w,
              C = (O * (n[d + 2] - S) - I * (n[h + 2] - S)) * w;
            (l[f] += M),
              (l[f + 1] += x),
              (l[f + 2] += C),
              (l[d] += M),
              (l[d + 1] += x),
              (l[d + 2] += C),
              (l[h] += M),
              (l[h + 1] += x),
              (l[h + 2] += C)
          }
          var P = new Float32Array(3 * s),
            D = new Float32Array(3 * s)
          for (t = 0; t < s; t++) {
            (f = 3 * t), (d = f + 1), (h = f + 2)
            var L = a.fromArray(i, f, he),
              U = a.fromArray(l, f, me),
              b = a.dot(L, U)
            a.multiplyByScalar(L, b, Ee),
              a.normalize(a.subtract(U, Ee, U), U),
              (P[f] = U.x),
              (P[d] = U.y),
              (P[h] = U.z),
              a.normalize(a.cross(L, U, U), U),
              (D[f] = U.x),
              (D[d] = U.y),
              (D[h] = U.z)
          }
          return (
            (e.attributes.tangent = new E({
              componentDatatype: u.FLOAT,
              componentsPerAttribute: 3,
              values: P
            })),
            (e.attributes.bitangent = new E({
              componentDatatype: u.FLOAT,
              componentsPerAttribute: 3,
              values: D
            })),
            e
          )
        }
        var pe = new n(),
          ye = new a(),
          _e = new a(),
          Te = new a(),
          Re = new n()
        te.compressVertices = function (t) {
          var r,
            i,
            o = t.attributes.extrudeDirection
          if (c(o)) {
            var s = o.values
            i = s.length / 3
            var l = new Float32Array(2 * i),
              f = 0
            for (r = 0; r < i; ++r) {
              a.fromArray(s, 3 * r, ye),
                a.equals(ye, a.ZERO)
                  ? (f += 2)
                  : ((Re = e.octEncodeInRange(ye, 65535, Re)),
                    (l[f++] = Re.x),
                    (l[f++] = Re.y))
            }
            return (
              (t.attributes.compressedAttributes = new E({
                componentDatatype: u.FLOAT,
                componentsPerAttribute: 2,
                values: l
              })),
              delete t.attributes.extrudeDirection,
              t
            )
          }
          var d = t.attributes.normal,
            h = t.attributes.st,
            m = c(d),
            p = c(h)
          if (!m && !p) return t
          var y,
            _,
            T,
            R,
            v = t.attributes.tangent,
            A = t.attributes.bitangent,
            S = c(v),
            N = c(A)
          m && (y = d.values),
            p && (_ = h.values),
            S && (T = v.values),
            N && (R = A.values)
          var g = m ? y.length : _.length,
            I = m ? 3 : 2
          i = g / I
          var O = i,
            w = p && m ? 2 : 1;
          (w += S || N ? 1 : 0), (O *= w)
          var M = new Float32Array(O),
            x = 0
          for (r = 0; r < i; ++r) {
            p &&
              (n.fromArray(_, 2 * r, pe),
              (M[x++] = e.compressTextureCoordinates(pe)))
            var C = 3 * r
            m && c(T) && c(R)
              ? (a.fromArray(y, C, ye),
                a.fromArray(T, C, _e),
                a.fromArray(R, C, Te),
                e.octPack(ye, _e, Te, pe),
                (M[x++] = pe.x),
                (M[x++] = pe.y))
              : (m && (a.fromArray(y, C, ye), (M[x++] = e.octEncodeFloat(ye))),
                S && (a.fromArray(T, C, ye), (M[x++] = e.octEncodeFloat(ye))),
                N && (a.fromArray(R, C, ye), (M[x++] = e.octEncodeFloat(ye))))
          }
          return (
            (t.attributes.compressedAttributes = new E({
              componentDatatype: u.FLOAT,
              componentsPerAttribute: w,
              values: M
            })),
            m && delete t.attributes.normal,
            p && delete t.attributes.st,
            N && delete t.attributes.bitangent,
            S && delete t.attributes.tangent,
            t
          )
        }
        var ve = new a(),
          Ae = new a(),
          Se = new a(),
          Ne = new a(),
          ge = new a(),
          Ie = { positions: new Array(7), indices: new Array(9) },
          Oe = new a(),
          we = new a(),
          Me = new a(),
          xe = new a(),
          Ce = new n(),
          Pe = new n(),
          De = new n(),
          Le = A.fromPointNormal(a.ZERO, a.UNIT_Y),
          Ue = new a(),
          be = new a(),
          Fe = new n(),
          Be = new n(),
          ze = new a(),
          Ge = new a(),
          qe = new a(),
          Ve = new a(),
          We = new a(),
          Xe = new a(),
          He = new i(),
          Ye = 5 * T.EPSILON9,
          ke = T.EPSILON6
        return (
          (te.splitLongitude = function (e) {
            var t = e.geometry,
              n = t.boundingSphere
            if (c(n)) {
              var a = n.center.x - n.radius
              if (
                a > 0 ||
                r.intersectPlane(n, A.ORIGIN_ZX_PLANE) !== y.INTERSECTING
              ) { return e }
            }
            if (t.geometryType !== m.NONE) {
              switch (t.geometryType) {
                case m.POLYLINES:
                  ee(e)
                  break
                case m.TRIANGLES:
                  J(e)
                  break
                case m.LINES:
                  Q(e)
              }
            } else {
              q(t),
                t.primitiveType === S.TRIANGLES
                  ? J(e)
                  : t.primitiveType === S.LINES && Q(e)
            }
            return e
          }),
          te
        )
      }
    ),
    (function (e) {
      'use strict'
      e('ThirdParty/when', [], function () {
        function e (e, r, n, a) {
          return t(e).then(r, n, a)
        }
        function t (e) {
          var t, r
          return (
            e instanceof n
              ? (t = e)
              : u(e)
                ? ((r = o()),
                  e.then(
                    function (e) {
                      r.resolve(e)
                    },
                    function (e) {
                      r.reject(e)
                    },
                    function (e) {
                      r.progress(e)
                    }
                  ),
                  (t = r.promise))
                : (t = a(e)),
            t
          )
        }
        function r (t) {
          return e(t, i)
        }
        function n (e) {
          this.then = e
        }
        function a (e) {
          var r = new n(function (r) {
            try {
              return t(r ? r(e) : e)
            } catch (e) {
              return i(e)
            }
          })
          return r
        }
        function i (e) {
          var r = new n(function (r, n) {
            try {
              return n ? t(n(e)) : i(e)
            } catch (e) {
              return i(e)
            }
          })
          return r
        }
        function o () {
          function e (e, t, r) {
            return d(e, t, r)
          }
          function r (e) {
            return E(e)
          }
          function a (e) {
            return E(i(e))
          }
          function u (e) {
            return h(e)
          }
          var s, c, l, f, d, h, E
          return (
            (c = new n(e)),
            (s = {
              then: e,
              resolve: r,
              reject: a,
              progress: u,
              promise: c,
              resolver: { resolve: r, reject: a, progress: u }
            }),
            (l = []),
            (f = []),
            (d = function (e, t, r) {
              var n, a
              return (
                (n = o()),
                (a =
                  typeof r === 'function'
                    ? function (e) {
                      try {
                        n.progress(r(e))
                      } catch (e) {
                        n.progress(e)
                      }
                    }
                    : function (e) {
                      n.progress(e)
                    }),
                l.push(function (r) {
                  r.then(e, t).then(n.resolve, n.reject, a)
                }),
                f.push(a),
                n.promise
              )
            }),
            (h = function (e) {
              return m(f, e), e
            }),
            (E = function (e) {
              return (
                (e = t(e)),
                (d = e.then),
                (E = t),
                (h = y),
                m(l, e),
                (f = l = v),
                e
              )
            }),
            s
          )
        }
        function u (e) {
          return e && typeof e.then === 'function'
        }
        function s (t, r, n, a, i) {
          return (
            p(2, arguments),
            e(t, function (t) {
              function u (e) {
                m(e)
              }
              function s (e) {
                E(e)
              }
              var c, l, f, d, h, E, m, p, _, T
              if (
                ((_ = t.length >>> 0),
                (c = Math.max(0, Math.min(r, _))),
                (f = []),
                (l = _ - c + 1),
                (d = []),
                (h = o()),
                c)
              ) {
                for (
                  p = h.progress,
                    m = function (e) {
                      d.push(e), --l || ((E = m = y), h.reject(d))
                    },
                    E = function (e) {
                      f.push(e), --c || ((E = m = y), h.resolve(f))
                    },
                    T = 0;
                  T < _;
                  ++T
                ) { T in t && e(t[T], s, u, p) }
              } else h.resolve(f)
              return h.then(n, a, i)
            })
          )
        }
        function c (e, t, r, n) {
          function a (e) {
            return t ? t(e[0]) : e[0]
          }
          return s(e, 1, a, r, n)
        }
        function l (e, t, r, n) {
          return p(1, arguments), d(e, _).then(t, r, n)
        }
        function f () {
          return d(arguments, _)
        }
        function d (t, r) {
          return e(t, function (t) {
            var n, a, i, u, s, c
            if (((i = a = t.length >>> 0), (n = []), (c = o()), i)) {
              for (
                u = function (t, a) {
                  e(t, r).then(function (e) {
                    (n[a] = e), --i || c.resolve(n)
                  }, c.reject)
                },
                  s = 0;
                s < a;
                s++
              ) { s in t ? u(t[s], s) : --i }
            } else c.resolve(n)
            return c.promise
          })
        }
        function h (t, r) {
          var n = R.call(arguments, 1)
          return e(t, function (t) {
            var a
            return (
              (a = t.length),
              (n[0] = function (t, n, i) {
                return e(t, function (t) {
                  return e(n, function (e) {
                    return r(t, e, i, a)
                  })
                })
              }),
              T.apply(t, n)
            )
          })
        }
        function E (t, r, n) {
          var a = arguments.length > 2
          return e(
            t,
            function (e) {
              return (e = a ? n : e), r.resolve(e), e
            },
            function (e) {
              return r.reject(e), i(e)
            },
            r.progress
          )
        }
        function m (e, t) {
          for (var r, n = 0; (r = e[n++]);) r(t)
        }
        function p (e, t) {
          for (var r, n = t.length; n > e;) {
            if (((r = t[--n]), r != null && typeof r !== 'function')) { throw new Error('arg ' + n + ' must be a function') }
          }
        }
        function y () {}
        function _ (e) {
          return e
        }
        var T, R, v
        return (
          (e.defer = o),
          (e.resolve = t),
          (e.reject = r),
          (e.join = f),
          (e.all = l),
          (e.map = d),
          (e.reduce = h),
          (e.any = c),
          (e.some = s),
          (e.chain = E),
          (e.isPromise = u),
          (n.prototype = {
            always: function (e, t) {
              return this.then(e, e, t)
            },
            otherwise: function (e) {
              return this.then(v, e)
            },
            yield: function (e) {
              return this.then(function () {
                return e
              })
            },
            spread: function (e) {
              return this.then(function (t) {
                return l(t, function (t) {
                  return e.apply(v, t)
                })
              })
            }
          }),
          (R = [].slice),
          (T =
            [].reduce ||
            function (e) {
              var t, r, n, a, i
              if (
                ((i = 0),
                (t = Object(this)),
                (a = t.length >>> 0),
                (r = arguments),
                r.length <= 1)
              ) {
                for (;;) {
                  if (i in t) {
                    n = t[i++]
                    break
                  }
                  if (++i >= a) throw new TypeError()
                }
              } else n = r[1]
              for (; i < a; ++i) i in t && (n = e(n, t[i], i, t))
              return n
            }),
          e
        )
      })
    })(
      typeof define === 'function' && define.amd
        ? define
        : function (e) {
          typeof exports === 'object'
              ? (module.exports = e())
              : (this.when = e())
        }
    ),
    define('Core/binarySearch', ['./Check', './defined'], function (e, t) {
      'use strict'
      function r (e, t, r) {
        for (var n, a, i = 0, o = e.length - 1; i <= o;) {
          if (((n = ~~((i + o) / 2)), (a = r(e[n], t)), a < 0)) i = n + 1
          else {
            if (!(a > 0)) return n
            o = n - 1
          }
        }
        return ~(o + 1)
      }
      return r
    }),
    define('Core/EarthOrientationParametersSample', [], function () {
      'use strict'
      function e (e, t, r, n, a) {
        (this.xPoleWander = e),
          (this.yPoleWander = t),
          (this.xPoleOffset = r),
          (this.yPoleOffset = n),
          (this.ut1MinusUtc = a)
      }
      return e
    }),
    define('ThirdParty/sprintf', [], function () {
      function e () {
        var e = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g,
          t = arguments,
          r = 0,
          n = t[r++],
          a = function (e, t, r, n) {
            r || (r = ' ')
            var a =
              e.length >= t ? '' : Array((1 + t - e.length) >>> 0).join(r)
            return n ? e + a : a + e
          },
          i = function (e, t, r, n, i, o) {
            var u = n - e.length
            return (
              u > 0 &&
                (e =
                  r || !i
                    ? a(e, n, o, r)
                    : e.slice(0, t.length) +
                      a('', u, '0', !0) +
                      e.slice(t.length)),
              e
            )
          },
          o = function (e, t, r, n, o, u, s) {
            var c = e >>> 0
            return (
              (r = (r && c && { 2: '0b', 8: '0', 16: '0x' }[t]) || ''),
              (e = r + a(c.toString(t), u || 0, '0', !1)),
              i(e, r, n, o, s)
            )
          },
          u = function (e, t, r, n, a, o) {
            return n != null && (e = e.slice(0, n)), i(e, '', t, r, a, o)
          },
          s = function (e, n, s, c, l, f, d) {
            var h, E, m, p, y
            if (e == '%%') return '%'
            for (
              var _ = !1, T = '', R = !1, v = !1, A = ' ', S = s.length, N = 0;
              s && N < S;
              N++
            ) {
              switch (s.charAt(N)) {
                case ' ':
                  T = ' '
                  break
                case '+':
                  T = '+'
                  break
                case '-':
                  _ = !0
                  break
                case "'":
                  A = s.charAt(N + 1)
                  break
                case '0':
                  R = !0
                  break
                case '#':
                  v = !0
              }
            }
            if (
              ((c = c
                ? c == '*'
                  ? +t[r++]
                  : c.charAt(0) == '*' ? +t[c.slice(1, -1)] : +c
                : 0),
              c < 0 && ((c = -c), (_ = !0)),
              !isFinite(c))
            ) { throw new Error('sprintf: (minimum-)width must be finite') }
            switch (((f = f
              ? f == '*'
                ? +t[r++]
                : f.charAt(0) == '*' ? +t[f.slice(1, -1)] : +f
              : 'fFeE'.indexOf(d) > -1 ? 6 : d == 'd' ? 0 : void 0),
            (y = n ? t[n.slice(0, -1)] : t[r++]),
            d)) {
              case 's':
                return u(String(y), _, c, f, R, A)
              case 'c':
                return u(String.fromCharCode(+y), _, c, f, R)
              case 'b':
                return o(y, 2, v, _, c, f, R)
              case 'o':
                return o(y, 8, v, _, c, f, R)
              case 'x':
                return o(y, 16, v, _, c, f, R)
              case 'X':
                return o(y, 16, v, _, c, f, R).toUpperCase()
              case 'u':
                return o(y, 10, v, _, c, f, R)
              case 'i':
              case 'd':
                return (
                  (h = +y || 0),
                  (h = Math.round(h - h % 1)),
                  (E = h < 0 ? '-' : T),
                  (y = E + a(String(Math.abs(h)), f, '0', !1)),
                  i(y, E, _, c, R)
                )
              case 'e':
              case 'E':
              case 'f':
              case 'F':
              case 'g':
              case 'G':
                return (
                  (h = +y),
                  (E = h < 0 ? '-' : T),
                  (m = ['toExponential', 'toFixed', 'toPrecision'][
                    'efg'.indexOf(d.toLowerCase())
                  ]),
                  (p = ['toString', 'toUpperCase']['eEfFgG'.indexOf(d) % 2]),
                  (y = E + Math.abs(h)[m](f)),
                  i(y, E, _, c, R)[p]()
                )
              default:
                return e
            }
          }
        return n.replace(e, s)
      }
      return e
    }),
    define('Core/GregorianDate', [], function () {
      'use strict'
      function e (e, t, r, n, a, i, o, u) {
        (this.year = e),
          (this.month = t),
          (this.day = r),
          (this.hour = n),
          (this.minute = a),
          (this.second = i),
          (this.millisecond = o),
          (this.isLeapSecond = u)
      }
      return e
    }),
    define('Core/isLeapYear', ['./DeveloperError'], function (e) {
      'use strict'
      function t (e) {
        return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0
      }
      return t
    }),
    define('Core/LeapSecond', [], function () {
      'use strict'
      function e (e, t) {
        (this.julianDate = e), (this.offset = t)
      }
      return e
    }),
    define('Core/TimeConstants', ['./freezeObject'], function (e) {
      'use strict'
      var t = {
        SECONDS_PER_MILLISECOND: 0.001,
        SECONDS_PER_MINUTE: 60,
        MINUTES_PER_HOUR: 60,
        HOURS_PER_DAY: 24,
        SECONDS_PER_HOUR: 3600,
        MINUTES_PER_DAY: 1440,
        SECONDS_PER_DAY: 86400,
        DAYS_PER_JULIAN_CENTURY: 36525,
        PICOSECOND: 1e-9,
        MODIFIED_JULIAN_DATE_DIFFERENCE: 2400000.5
      }
      return e(t)
    }),
    define('Core/TimeStandard', ['./freezeObject'], function (e) {
      'use strict'
      var t = { UTC: 0, TAI: 1 }
      return e(t)
    }),
    define(
      'Core/JulianDate',
      [
        '../ThirdParty/sprintf',
        './binarySearch',
        './defaultValue',
        './defined',
        './DeveloperError',
        './GregorianDate',
        './isLeapYear',
        './LeapSecond',
        './TimeConstants',
        './TimeStandard'
      ],
      function (e, t, r, n, a, i, o, u, s, c) {
        'use strict'
        function l (e, t) {
          return m.compare(e.julianDate, t.julianDate)
        }
        function f (e) {
          T.julianDate = e
          var r = m.leapSeconds,
            n = t(r, T, l)
          n < 0 && (n = ~n), n >= r.length && (n = r.length - 1)
          var a = r[n].offset
          if (n > 0) {
            var i = m.secondsDifference(r[n].julianDate, e)
            i > a && (n--, (a = r[n].offset))
          }
          m.addSeconds(e, a, e)
        }
        function d (e, r) {
          T.julianDate = e
          var n = m.leapSeconds,
            a = t(n, T, l)
          if ((a < 0 && (a = ~a), a === 0)) { return m.addSeconds(e, -n[0].offset, r) }
          if (a >= n.length) return m.addSeconds(e, -n[a - 1].offset, r)
          var i = m.secondsDifference(n[a].julianDate, e)
          return i === 0
            ? m.addSeconds(e, -n[a].offset, r)
            : i <= 1 ? void 0 : m.addSeconds(e, -n[--a].offset, r)
        }
        function h (e, t, r) {
          var n = (t / s.SECONDS_PER_DAY) | 0
          return (
            (e += n),
            (t -= s.SECONDS_PER_DAY * n),
            t < 0 && (e--, (t += s.SECONDS_PER_DAY)),
            (r.dayNumber = e),
            (r.secondsOfDay = t),
            r
          )
        }
        function E (e, t, r, n, a, i, o) {
          var u = ((t - 14) / 12) | 0,
            c = e + 4800 + u,
            l =
              ((1461 * c / 4) | 0) +
              ((367 * (t - 2 - 12 * u) / 12) | 0) -
              ((3 * (((c + 100) / 100) | 0) / 4) | 0) +
              r -
              32075;
          (n -= 12), n < 0 && (n += 24)
          var f =
            i +
            (n * s.SECONDS_PER_HOUR +
              a * s.SECONDS_PER_MINUTE +
              o * s.SECONDS_PER_MILLISECOND)
          return f >= 43200 && (l -= 1), [l, f]
        }
        function m (e, t, n) {
          (this.dayNumber = void 0),
            (this.secondsOfDay = void 0),
            (e = r(e, 0)),
            (t = r(t, 0)),
            (n = r(n, c.UTC))
          var a = 0 | e;
          (t += (e - a) * s.SECONDS_PER_DAY),
            h(a, t, this),
            n === c.UTC && f(this)
        }
        var p = new i(),
          y = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          _ = 29,
          T = new u(),
          R = /^(\d{4})$/,
          v = /^(\d{4})-(\d{2})$/,
          A = /^(\d{4})-?(\d{3})$/,
          S = /^(\d{4})-?W(\d{2})-?(\d{1})?$/,
          N = /^(\d{4})-?(\d{2})-?(\d{2})$/,
          g = /([Z+\-])?(\d{2})?:?(\d{2})?$/,
          I = /^(\d{2})(\.\d+)?/.source + g.source,
          O = /^(\d{2}):?(\d{2})(\.\d+)?/.source + g.source,
          w = /^(\d{2}):?(\d{2}):?(\d{2})(\.\d+)?/.source + g.source;
        (m.fromGregorianDate = function (e, t) {
          var r = E(
            e.year,
            e.month,
            e.day,
            e.hour,
            e.minute,
            e.second,
            e.millisecond
          )
          return n(t) ? (h(r[0], r[1], t), f(t), t) : new m(r[0], r[1], c.UTC)
        }),
          (m.fromDate = function (e, t) {
            var r = E(
              e.getUTCFullYear(),
              e.getUTCMonth() + 1,
              e.getUTCDate(),
              e.getUTCHours(),
              e.getUTCMinutes(),
              e.getUTCSeconds(),
              e.getUTCMilliseconds()
            )
            return n(t)
              ? (h(r[0], r[1], t), f(t), t)
              : new m(r[0], r[1], c.UTC)
          }),
          (m.fromIso8601 = function (e, t) {
            e = e.replace(',', '.')
            var r,
              a,
              i,
              u = e.split('T'),
              s = 1,
              l = 1,
              d = 0,
              p = 0,
              T = 0,
              g = 0,
              M = u[0],
              x = u[1]
            if (((u = M.match(N)), u !== null)) { (r = +u[1]), (s = +u[2]), (l = +u[3]) } else if (((u = M.match(v)), u !== null)) (r = +u[1]), (s = +u[2])
            else if (((u = M.match(R)), u !== null)) r = +u[1]
            else {
              var C
              if (((u = M.match(A)), u !== null)) { (r = +u[1]), (C = +u[2]), (i = o(r)) } else if (((u = M.match(S)), u !== null)) {
                r = +u[1]
                var P = +u[2],
                  D = +u[3] || 0,
                  L = new Date(Date.UTC(r, 0, 4))
                C = 7 * P + D - L.getUTCDay() - 3
              }
              (a = new Date(Date.UTC(r, 0, 1))),
                a.setUTCDate(C),
                (s = a.getUTCMonth() + 1),
                (l = a.getUTCDate())
            }
            i = o(r)
            var U
            if (n(x)) {
              (u = x.match(w)),
                u !== null
                  ? ((d = +u[1]),
                    (p = +u[2]),
                    (T = +u[3]),
                    (g = 1e3 * +(u[4] || 0)),
                    (U = 5))
                  : ((u = x.match(O)),
                    u !== null
                      ? ((d = +u[1]),
                        (p = +u[2]),
                        (T = 60 * +(u[3] || 0)),
                        (U = 4))
                      : ((u = x.match(I)),
                        u !== null &&
                          ((d = +u[1]), (p = 60 * +(u[2] || 0)), (U = 3))))
              var b = u[U],
                F = +u[U + 1],
                B = +(u[U + 2] || 0)
              switch (b) {
                case '+':
                  (d -= F), (p -= B)
                  break
                case '-':
                  (d += F), (p += B)
                  break
                case 'Z':
                  break
                default:
                  p += new Date(
                    Date.UTC(r, s - 1, l, d, p)
                  ).getTimezoneOffset()
              }
            }
            var z = T === 60
            for (z && T--; p >= 60;) (p -= 60), d++
            for (; d >= 24;) (d -= 24), l++
            for (a = i && s === 2 ? _ : y[s - 1]; l > a;) {
              (l -= a),
                s++,
                s > 12 && ((s -= 12), r++),
                (a = i && s === 2 ? _ : y[s - 1])
            }
            for (; p < 0;) (p += 60), d--
            for (; d < 0;) (d += 24), l--
            for (; l < 1;) {
              s--,
                s < 1 && ((s += 12), r--),
                (a = i && s === 2 ? _ : y[s - 1]),
                (l += a)
            }
            var G = E(r, s, l, d, p, T, g)
            return (
              n(t) ? (h(G[0], G[1], t), f(t)) : (t = new m(G[0], G[1], c.UTC)),
              z && m.addSeconds(t, 1, t),
              t
            )
          }),
          (m.now = function (e) {
            return m.fromDate(new Date(), e)
          })
        var M = new m(0, 0, c.TAI)
        return (
          (m.toGregorianDate = function (e, t) {
            var r = !1,
              a = d(e, M)
            n(a) || (m.addSeconds(e, -1, M), (a = d(M, M)), (r = !0))
            var o = a.dayNumber,
              u = a.secondsOfDay
            u >= 43200 && (o += 1)
            var c = (o + 68569) | 0,
              l = (4 * c / 146097) | 0
            c = (c - (((146097 * l + 3) / 4) | 0)) | 0
            var f = (4e3 * (c + 1) / 1461001) | 0
            c = (c - ((1461 * f / 4) | 0) + 31) | 0
            var h = (80 * c / 2447) | 0,
              E = (c - ((2447 * h / 80) | 0)) | 0
            c = (h / 11) | 0
            var p = (h + 2 - 12 * c) | 0,
              y = (100 * (l - 49) + f + c) | 0,
              _ = (u / s.SECONDS_PER_HOUR) | 0,
              T = u - _ * s.SECONDS_PER_HOUR,
              R = (T / s.SECONDS_PER_MINUTE) | 0
            T -= R * s.SECONDS_PER_MINUTE
            var v = 0 | T,
              A = (T - v) / s.SECONDS_PER_MILLISECOND
            return (
              (_ += 12),
              _ > 23 && (_ -= 24),
              r && (v += 1),
              n(t)
                ? ((t.year = y),
                  (t.month = p),
                  (t.day = E),
                  (t.hour = _),
                  (t.minute = R),
                  (t.second = v),
                  (t.millisecond = A),
                  (t.isLeapSecond = r),
                  t)
                : new i(y, p, E, _, R, v, A, r)
            )
          }),
          (m.toDate = function (e) {
            var t = m.toGregorianDate(e, p),
              r = t.second
            return (
              t.isLeapSecond && (r -= 1),
              new Date(
                Date.UTC(
                  t.year,
                  t.month - 1,
                  t.day,
                  t.hour,
                  t.minute,
                  r,
                  t.millisecond
                )
              )
            )
          }),
          (m.toIso8601 = function (t, r) {
            var a,
              i = m.toGregorianDate(t, p)
            return n(r) || i.millisecond === 0
              ? n(r) && r !== 0
                ? ((a = (0.01 * i.millisecond)
                    .toFixed(r)
                    .replace('.', '')
                    .slice(0, r)),
                  e(
                    '%04d-%02d-%02dT%02d:%02d:%02d.%sZ',
                    i.year,
                    i.month,
                    i.day,
                    i.hour,
                    i.minute,
                    i.second,
                    a
                  ))
                : e(
                    '%04d-%02d-%02dT%02d:%02d:%02dZ',
                    i.year,
                    i.month,
                    i.day,
                    i.hour,
                    i.minute,
                    i.second
                  )
              : ((a = (0.01 * i.millisecond).toString().replace('.', '')),
                e(
                  '%04d-%02d-%02dT%02d:%02d:%02d.%sZ',
                  i.year,
                  i.month,
                  i.day,
                  i.hour,
                  i.minute,
                  i.second,
                  a
                ))
          }),
          (m.clone = function (e, t) {
            if (n(e)) {
              return n(t)
                ? ((t.dayNumber = e.dayNumber),
                  (t.secondsOfDay = e.secondsOfDay),
                  t)
                : new m(e.dayNumber, e.secondsOfDay, c.TAI)
            }
          }),
          (m.compare = function (e, t) {
            var r = e.dayNumber - t.dayNumber
            return r !== 0 ? r : e.secondsOfDay - t.secondsOfDay
          }),
          (m.equals = function (e, t) {
            return (
              e === t ||
              (n(e) &&
                n(t) &&
                e.dayNumber === t.dayNumber &&
                e.secondsOfDay === t.secondsOfDay)
            )
          }),
          (m.equalsEpsilon = function (e, t, r) {
            return (
              e === t ||
              (n(e) && n(t) && Math.abs(m.secondsDifference(e, t)) <= r)
            )
          }),
          (m.totalDays = function (e) {
            return e.dayNumber + e.secondsOfDay / s.SECONDS_PER_DAY
          }),
          (m.secondsDifference = function (e, t) {
            var r = (e.dayNumber - t.dayNumber) * s.SECONDS_PER_DAY
            return r + (e.secondsOfDay - t.secondsOfDay)
          }),
          (m.daysDifference = function (e, t) {
            var r = e.dayNumber - t.dayNumber,
              n = (e.secondsOfDay - t.secondsOfDay) / s.SECONDS_PER_DAY
            return r + n
          }),
          (m.computeTaiMinusUtc = function (e) {
            T.julianDate = e
            var r = m.leapSeconds,
              n = t(r, T, l)
            return n < 0 && ((n = ~n), --n, n < 0 && (n = 0)), r[n].offset
          }),
          (m.addSeconds = function (e, t, r) {
            return h(e.dayNumber, e.secondsOfDay + t, r)
          }),
          (m.addMinutes = function (e, t, r) {
            var n = e.secondsOfDay + t * s.SECONDS_PER_MINUTE
            return h(e.dayNumber, n, r)
          }),
          (m.addHours = function (e, t, r) {
            var n = e.secondsOfDay + t * s.SECONDS_PER_HOUR
            return h(e.dayNumber, n, r)
          }),
          (m.addDays = function (e, t, r) {
            var n = e.dayNumber + t
            return h(n, e.secondsOfDay, r)
          }),
          (m.lessThan = function (e, t) {
            return m.compare(e, t) < 0
          }),
          (m.lessThanOrEquals = function (e, t) {
            return m.compare(e, t) <= 0
          }),
          (m.greaterThan = function (e, t) {
            return m.compare(e, t) > 0
          }),
          (m.greaterThanOrEquals = function (e, t) {
            return m.compare(e, t) >= 0
          }),
          (m.prototype.clone = function (e) {
            return m.clone(this, e)
          }),
          (m.prototype.equals = function (e) {
            return m.equals(this, e)
          }),
          (m.prototype.equalsEpsilon = function (e, t) {
            return m.equalsEpsilon(this, e, t)
          }),
          (m.prototype.toString = function () {
            return m.toIso8601(this)
          }),
          (m.leapSeconds = [
            new u(new m(2441317, 43210, c.TAI), 10),
            new u(new m(2441499, 43211, c.TAI), 11),
            new u(new m(2441683, 43212, c.TAI), 12),
            new u(new m(2442048, 43213, c.TAI), 13),
            new u(new m(2442413, 43214, c.TAI), 14),
            new u(new m(2442778, 43215, c.TAI), 15),
            new u(new m(2443144, 43216, c.TAI), 16),
            new u(new m(2443509, 43217, c.TAI), 17),
            new u(new m(2443874, 43218, c.TAI), 18),
            new u(new m(2444239, 43219, c.TAI), 19),
            new u(new m(2444786, 43220, c.TAI), 20),
            new u(new m(2445151, 43221, c.TAI), 21),
            new u(new m(2445516, 43222, c.TAI), 22),
            new u(new m(2446247, 43223, c.TAI), 23),
            new u(new m(2447161, 43224, c.TAI), 24),
            new u(new m(2447892, 43225, c.TAI), 25),
            new u(new m(2448257, 43226, c.TAI), 26),
            new u(new m(2448804, 43227, c.TAI), 27),
            new u(new m(2449169, 43228, c.TAI), 28),
            new u(new m(2449534, 43229, c.TAI), 29),
            new u(new m(2450083, 43230, c.TAI), 30),
            new u(new m(2450630, 43231, c.TAI), 31),
            new u(new m(2451179, 43232, c.TAI), 32),
            new u(new m(2453736, 43233, c.TAI), 33),
            new u(new m(2454832, 43234, c.TAI), 34),
            new u(new m(2456109, 43235, c.TAI), 35),
            new u(new m(2457204, 43236, c.TAI), 36),
            new u(new m(2457754, 43237, c.TAI), 37)
          ]),
          m
        )
      }
    ),
    define('Core/clone', ['./defaultValue'], function (e) {
      'use strict'
      function t (r, n) {
        if (r === null || typeof r !== 'object') return r
        n = e(n, !1)
        var a = new r.constructor()
        for (var i in r) {
          if (r.hasOwnProperty(i)) {
            var o = r[i]
            n && (o = t(o, n)), (a[i] = o)
          }
        }
        return a
      }
      return t
    }),
    define(
      'Core/oneTimeWarning',
      ['./defaultValue', './defined', './DeveloperError'],
      function (e, t, r) {
        'use strict'
        function n (r, n) {
          t(a[r]) || ((a[r] = !0), console.warn(e(n, r)))
        }
        var a = {}
        return (
          (n.geometryOutlines =
            'Entity geometry outlines are unsupported on terrain. Outlines will be disabled. To enable outlines, disable geometry terrain clamping by explicitly setting height to 0.'),
          n
        )
      }
    ),
    define(
      'Core/deprecationWarning',
      ['./defined', './DeveloperError', './oneTimeWarning'],
      function (e, t, r) {
        'use strict'
        function n (e, t) {
          r(e, t)
        }
        return n
      }
    ),
    define('Core/RequestState', ['../Core/freezeObject'], function (e) {
      'use strict'
      var t = {
        UNISSUED: 0,
        ISSUED: 1,
        ACTIVE: 2,
        RECEIVED: 3,
        CANCELLED: 4,
        FAILED: 5
      }
      return e(t)
    }),
    define('Core/RequestType', ['../Core/freezeObject'], function (e) {
      'use strict'
      var t = { TERRAIN: 0, IMAGERY: 1, TILES3D: 2, OTHER: 3 }
      return e(t)
    }),
    define(
      'Core/Request',
      [
        './defaultValue',
        './defined',
        './defineProperties',
        './RequestState',
        './RequestType'
      ],
      function (e, t, r, n, a) {
        'use strict'
        function i (t) {
          t = e(t, e.EMPTY_OBJECT)
          var r = e(t.throttleByServer, !1),
            i = r || e(t.throttle, !1);
          (this.url = t.url),
            (this.requestFunction = t.requestFunction),
            (this.cancelFunction = t.cancelFunction),
            (this.priorityFunction = t.priorityFunction),
            (this.priority = e(t.priority, 0)),
            (this.throttle = i),
            (this.throttleByServer = r),
            (this.type = e(t.type, a.OTHER)),
            (this.serverKey = void 0),
            (this.state = n.UNISSUED),
            (this.deferred = void 0),
            (this.cancelled = !1)
        }
        return (
          (i.prototype.cancel = function () {
            this.cancelled = !0
          }),
          i
        )
      }
    ),
    define('Core/parseResponseHeaders', [], function () {
      'use strict'
      function e (e) {
        var t = {}
        if (!e) return t
        for (var r = e.split('\r\n'), n = 0; n < r.length; ++n) {
          var a = r[n],
            i = a.indexOf(': ')
          if (i > 0) {
            var o = a.substring(0, i),
              u = a.substring(i + 2)
            t[o] = u
          }
        }
        return t
      }
      return e
    }),
    define(
      'Core/RequestErrorEvent',
      ['./defined', './parseResponseHeaders'],
      function (e, t) {
        'use strict'
        function r (e, r, n) {
          (this.statusCode = e),
            (this.response = r),
            (this.responseHeaders = n),
            typeof this.responseHeaders === 'string' &&
              (this.responseHeaders = t(this.responseHeaders))
        }
        return (
          (r.prototype.toString = function () {
            var t = 'Request has failed.'
            return (
              e(this.statusCode) && (t += ' Status Code: ' + this.statusCode), t
            )
          }),
          r
        )
      }
    ),
    define('ThirdParty/Uri', [], function () {
      function e (t) {
        if (t instanceof e) {
          (this.scheme = t.scheme),
            (this.authority = t.authority),
            (this.path = t.path),
            (this.query = t.query),
            (this.fragment = t.fragment)
        } else if (t) {
          var r = n.exec(t);
          (this.scheme = r[1]),
            (this.authority = r[2]),
            (this.path = r[3]),
            (this.query = r[4]),
            (this.fragment = r[5])
        }
      }
      function t (e) {
        var t = unescape(e)
        return i.test(t) ? t : e.toUpperCase()
      }
      function r (e, t, r, n) {
        return (t || '') + r.toLowerCase() + (n || '')
      }
      (e.prototype.scheme = null),
        (e.prototype.authority = null),
        (e.prototype.path = ''),
        (e.prototype.query = null),
        (e.prototype.fragment = null)
      var n = new RegExp(
        '^(?:([^:/?#]+):)?(?://([^/?#]*))?([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$'
      );
      (e.prototype.getScheme = function () {
        return this.scheme
      }),
        (e.prototype.getAuthority = function () {
          return this.authority
        }),
        (e.prototype.getPath = function () {
          return this.path
        }),
        (e.prototype.getQuery = function () {
          return this.query
        }),
        (e.prototype.getFragment = function () {
          return this.fragment
        }),
        (e.prototype.isAbsolute = function () {
          return !!this.scheme && !this.fragment
        }),
        (e.prototype.isSameDocumentAs = function (e) {
          return (
            e.scheme == this.scheme &&
            e.authority == this.authority &&
            e.path == this.path &&
            e.query == this.query
          )
        }),
        (e.prototype.equals = function (e) {
          return this.isSameDocumentAs(e) && e.fragment == this.fragment
        }),
        (e.prototype.normalize = function () {
          this.removeDotSegments(),
            this.scheme && (this.scheme = this.scheme.toLowerCase()),
            this.authority &&
              (this.authority = this.authority.replace(o, r).replace(a, t)),
            this.path && (this.path = this.path.replace(a, t)),
            this.query && (this.query = this.query.replace(a, t)),
            this.fragment && (this.fragment = this.fragment.replace(a, t))
        })
      var a = /%[0-9a-z]{2}/gi,
        i = /[a-zA-Z0-9\-\._~]/,
        o = /(.*@)?([^@:]*)(:.*)?/
      return (
        (e.prototype.resolve = function (t) {
          var r = new e()
          return (
            this.scheme
              ? ((r.scheme = this.scheme),
                (r.authority = this.authority),
                (r.path = this.path),
                (r.query = this.query))
              : ((r.scheme = t.scheme),
                this.authority
                  ? ((r.authority = this.authority),
                    (r.path = this.path),
                    (r.query = this.query))
                  : ((r.authority = t.authority),
                    this.path == ''
                      ? ((r.path = t.path), (r.query = this.query || t.query))
                      : (this.path.charAt(0) == '/'
                          ? ((r.path = this.path), r.removeDotSegments())
                          : (t.authority && t.path == ''
                              ? (r.path = '/' + this.path)
                              : (r.path =
                                  t.path.substring(
                                    0,
                                    t.path.lastIndexOf('/') + 1
                                  ) + this.path),
                            r.removeDotSegments()),
                        (r.query = this.query)))),
            (r.fragment = this.fragment),
            r
          )
        }),
        (e.prototype.removeDotSegments = function () {
          var e,
            t = this.path.split('/'),
            r = [],
            n = t[0] == ''
          n && t.shift()
          for (t[0] == '' ? t.shift() : null; t.length;) { (e = t.shift()), e == '..' ? r.pop() : e != '.' && r.push(e) }
          (e != '.' && e != '..') || r.push(''),
            n && r.unshift(''),
            (this.path = r.join('/'))
        }),
        (e.prototype.toString = function () {
          var e = ''
          return (
            this.scheme && (e += this.scheme + ':'),
            this.authority && (e += '//' + this.authority),
            (e += this.path),
            this.query && (e += '?' + this.query),
            this.fragment && (e += '#' + this.fragment),
            e
          )
        }),
        e
      )
    }),
    define(
      'Core/Heap',
      ['./Check', './defaultValue', './defined', './defineProperties'],
      function (e, t, r, n) {
        'use strict'
        function a (e) {
          (this._comparator = e.comparator),
            (this._array = []),
            (this._length = 0),
            (this._maximumLength = void 0)
        }
        function i (e, t, r) {
          var n = e[t];
          (e[t] = e[r]), (e[r] = n)
        }
        return (
          n(a.prototype, {
            length: {
              get: function () {
                return this._length
              }
            },
            internalArray: {
              get: function () {
                return this._array
              }
            },
            maximumLength: {
              get: function () {
                return this._maximumLength
              },
              set: function (e) {
                (this._maximumLength = e),
                  this._length > e &&
                    e > 0 &&
                    ((this._length = e), (this._array.length = e))
              }
            },
            comparator: {
              get: function () {
                return this._comparator
              }
            }
          }),
          (a.prototype.reserve = function (e) {
            (e = t(e, this._length)), (this._array.length = e)
          }),
          (a.prototype.heapify = function (e) {
            e = t(e, 0)
            for (
              var r = this._length,
                n = this._comparator,
                a = this._array,
                o = -1,
                u = !0;
              u;

            ) {
              var s = 2 * (e + 1),
                c = s - 1;
              (o = c < r && n(a[c], a[e]) < 0 ? c : e),
                s < r && n(a[s], a[o]) < 0 && (o = s),
                o !== e ? (i(a, o, e), (e = o)) : (u = !1)
            }
          }),
          (a.prototype.resort = function () {
            for (var e = this._length, t = Math.ceil(e / 2); t >= 0; --t) { this.heapify(t) }
          }),
          (a.prototype.insert = function (e) {
            var t = this._array,
              n = this._comparator,
              a = this._maximumLength,
              o = this._length++
            for (o < t.length ? (t[o] = e) : t.push(e); o !== 0;) {
              var u = Math.floor((o - 1) / 2)
              if (!(n(t[o], t[u]) < 0)) break
              i(t, o, u), (o = u)
            }
            var s
            return (
              r(a) && this._length > a && ((s = t[a]), (this._length = a)), s
            )
          }),
          (a.prototype.pop = function (e) {
            if (((e = t(e, 0)), this._length !== 0)) {
              var r = this._array,
                n = r[e]
              return i(r, e, --this._length), this.heapify(e), n
            }
          }),
          a
        )
      }
    ),
    define('Core/isBlobUri', ['./Check'], function (e) {
      'use strict'
      function t (e) {
        return r.test(e)
      }
      var r = /^blob:/i
      return t
    }),
    define('Core/isDataUri', ['./Check'], function (e) {
      'use strict'
      function t (e) {
        return r.test(e)
      }
      var r = /^data:/i
      return t
    }),
    define(
      'Core/RequestScheduler',
      [
        '../ThirdParty/Uri',
        '../ThirdParty/when',
        './Check',
        './clone',
        './defined',
        './defineProperties',
        './Heap',
        './isBlobUri',
        './isDataUri',
        './RequestState'
      ],
      function (e, t, r, n, a, i, o, u, s, c) {
        'use strict'
        function l (e, t) {
          return e.priority - t.priority
        }
        function f () {}
        function d (e) {
          a(e.priorityFunction) && (e.priority = e.priorityFunction())
        }
        function h (e) {
          return g[e] < f.maximumRequestsPerServer
        }
        function E (e) {
          return (
            e.state === c.UNISSUED &&
              ((e.state = c.ISSUED), (e.deferred = t.defer())),
            e.deferred.promise
          )
        }
        function m (e) {
          return function (t) {
            e.state !== c.CANCELLED &&
              (--v.numberOfActiveRequests,
              --g[e.serverKey],
              (e.state = c.RECEIVED),
              e.deferred.resolve(t))
          }
        }
        function p (e) {
          return function (t) {
            e.state !== c.CANCELLED &&
              (++v.numberOfFailedRequests,
              --v.numberOfActiveRequests,
              --g[e.serverKey],
              (e.state = c.FAILED),
              e.deferred.reject(t))
          }
        }
        function y (e) {
          var t = E(e)
          return (
            (e.state = c.ACTIVE),
            N.push(e),
            ++v.numberOfActiveRequests,
            ++v.numberOfActiveRequestsEver,
            ++g[e.serverKey],
            e
              .requestFunction()
              .then(m(e))
              .otherwise(p(e)),
            t
          )
        }
        function _ (e) {
          var t = e.state === c.ACTIVE;
          (e.state = c.CANCELLED),
            ++v.numberOfCancelledRequests,
            e.deferred.reject(),
            t &&
              (--v.numberOfActiveRequests,
              --g[e.serverKey],
              ++v.numberOfCancelledActiveRequests),
            a(e.cancelFunction) && e.cancelFunction()
        }
        function T () {
          (v.numberOfAttemptedRequests = 0),
            (v.numberOfCancelledRequests = 0),
            (v.numberOfCancelledActiveRequests = 0)
        }
        function R () {
          f.debugShowStatistics &&
            (v.numberOfAttemptedRequests > 0 &&
              console.log(
                'Number of attempted requests: ' + v.numberOfAttemptedRequests
              ),
            v.numberOfActiveRequests > 0 &&
              console.log(
                'Number of active requests: ' + v.numberOfActiveRequests
              ),
            v.numberOfCancelledRequests > 0 &&
              console.log(
                'Number of cancelled requests: ' + v.numberOfCancelledRequests
              ),
            v.numberOfCancelledActiveRequests > 0 &&
              console.log(
                'Number of cancelled active requests: ' +
                  v.numberOfCancelledActiveRequests
              ),
            v.numberOfFailedRequests > 0 &&
              console.log(
                'Number of failed requests: ' + v.numberOfFailedRequests
              ),
            T())
        }
        var v = {
            numberOfAttemptedRequests: 0,
            numberOfActiveRequests: 0,
            numberOfCancelledRequests: 0,
            numberOfCancelledActiveRequests: 0,
            numberOfFailedRequests: 0,
            numberOfActiveRequestsEver: 0
          },
          A = 20,
          S = new o({ comparator: l });
        (S.maximumLength = A), S.reserve(A)
        var N = [],
          g = {},
          I =
            typeof document !== 'undefined'
              ? new e(document.location.href)
              : new e()
        return (
          (f.maximumRequests = 50),
          (f.maximumRequestsPerServer = 6),
          (f.throttleRequests = !0),
          (f.debugShowStatistics = !1),
          i(f, {
            statistics: {
              get: function () {
                return v
              }
            },
            priorityHeapLength: {
              get: function () {
                return A
              },
              set: function (e) {
                if (e < A) {
                  for (; S.length > e;) {
                    var t = S.pop()
                    _(t)
                  }
                }
                (A = e), (S.maximumLength = e), S.reserve(e)
              }
            }
          }),
          (f.update = function () {
            var e,
              t,
              r = 0,
              n = N.length
            for (e = 0; e < n; ++e) {
              (t = N[e]),
                t.cancelled && _(t),
                t.state === c.ACTIVE ? r > 0 && (N[e - r] = t) : ++r
            }
            N.length -= r
            var a = S.internalArray,
              i = S.length
            for (e = 0; e < i; ++e) d(a[e])
            S.resort()
            for (
              var o = Math.max(f.maximumRequests - N.length, 0), u = 0;
              u < o && S.length > 0;

            ) {
              (t = S.pop()),
                t.cancelled
                  ? _(t)
                  : !t.throttleByServer || h(t.serverKey) ? (y(t), ++u) : _(t)
            }
            R()
          }),
          (f.getServerKey = function (t) {
            var r = new e(t).resolve(I)
            r.normalize()
            var n = r.authority;
            /:/.test(n) ||
              (n = n + ':' + (r.scheme === 'https' ? '443' : '80'))
            var i = g[n]
            return a(i) || (g[n] = 0), n
          }),
          (f.request = function (e) {
            if (s(e.url) || u(e.url)) { return (e.state = c.RECEIVED), e.requestFunction() }
            if (
              (++v.numberOfAttemptedRequests,
              a(e.serverKey) || (e.serverKey = f.getServerKey(e.url)),
              !f.throttleRequests || !e.throttle)
            ) { return y(e) }
            if (
              !(N.length >= f.maximumRequests) &&
              (!e.throttleByServer || h(e.serverKey))
            ) {
              d(e)
              var t = S.insert(e)
              if (a(t)) {
                if (t === e) return
                _(t)
              }
              return E(e)
            }
          }),
          (f.clearForSpecs = function () {
            for (; S.length > 0;) {
              var e = S.pop()
              _(e)
            }
            for (var t = N.length, r = 0; r < t; ++r) _(N[r]);
            (N.length = 0),
              (g = {}),
              (v.numberOfAttemptedRequests = 0),
              (v.numberOfActiveRequests = 0),
              (v.numberOfCancelledRequests = 0),
              (v.numberOfCancelledActiveRequests = 0),
              (v.numberOfFailedRequests = 0),
              (v.numberOfActiveRequestsEver = 0)
          }),
          (f.numberOfActiveRequestsByServer = function (e) {
            return g[e]
          }),
          (f.requestHeap = S),
          f
        )
      }
    ),
    define(
      'Core/TrustedServers',
      ['../ThirdParty/Uri', './defined', './DeveloperError'],
      function (e, t, r) {
        'use strict'
        function n (r) {
          var n = new e(r)
          n.normalize()
          var a = n.getAuthority()
          if (t(a)) {
            if (a.indexOf('@') !== -1) {
              var i = a.split('@')
              a = i[1]
            }
            if (a.indexOf(':') === -1) {
              var o = n.getScheme()
              if (
                (t(o) ||
                  ((o = window.location.protocol),
                  (o = o.substring(0, o.length - 1))),
                o === 'http')
              ) { a += ':80' } else {
                if (o !== 'https') return
                a += ':443'
              }
            }
            return a
          }
        }
        var a = {},
          i = {}
        return (
          (a.add = function (e, r) {
            var n = e.toLowerCase() + ':' + r
            t(i[n]) || (i[n] = !0)
          }),
          (a.remove = function (e, r) {
            var n = e.toLowerCase() + ':' + r
            t(i[n]) && delete i[n]
          }),
          (a.contains = function (e) {
            var r = n(e)
            return !(!t(r) || !t(i[r]))
          }),
          (a.clear = function () {
            i = {}
          }),
          a
        )
      }
    ),
    define(
      'Core/loadWithXhr',
      [
        '../ThirdParty/when',
        './Check',
        './defaultValue',
        './defined',
        './deprecationWarning',
        './DeveloperError',
        './Request',
        './RequestErrorEvent',
        './RequestScheduler',
        './RuntimeError',
        './TrustedServers'
      ],
      function (e, t, r, n, a, i, o, u, s, c, l) {
        'use strict'
        function f (e) {
          e = r(e, r.EMPTY_OBJECT)
          var t = e.url
          return typeof t !== 'string'
            ? (a(
                'url promise',
                'options.url as a Promise is deprecated and will be removed in Cesium 1.37'
              ),
              t.then(function (t) {
                return d(e, t)
              }))
            : d(e)
        }
        function d (t, a) {
          var i = t.responseType,
            u = r(t.method, 'GET'),
            c = t.data,
            l = t.headers,
            d = t.overrideMimeType
          a = r(a, t.url)
          var h = n(t.request) ? t.request : new o()
          return (
            (h.url = a),
            (h.requestFunction = function () {
              var t = e.defer(),
                r = f.load(a, i, u, c, l, t, d)
              return (
                n(r) &&
                  n(r.abort) &&
                  (h.cancelFunction = function () {
                    r.abort()
                  }),
                t.promise
              )
            }),
            s.request(h)
          )
        }
        function h (e, t) {
          var r = decodeURIComponent(t)
          return e ? atob(r) : r
        }
        function E (e, t) {
          for (
            var r = h(e, t),
              n = new ArrayBuffer(r.length),
              a = new Uint8Array(n),
              i = 0;
            i < r.length;
            i++
          ) { a[i] = r.charCodeAt(i) }
          return n
        }
        function m (e, t) {
          t = r(t, '')
          var n = e[1],
            a = !!e[2],
            i = e[3]
          switch (t) {
            case '':
            case 'text':
              return h(a, i)
            case 'arraybuffer':
              return E(a, i)
            case 'blob':
              var o = E(a, i)
              return new Blob([o], { type: n })
            case 'document':
              var u = new DOMParser()
              return u.parseFromString(h(a, i), n)
            case 'json':
              return JSON.parse(h(a, i))
          }
        }
        var p = /^data:(.*?)(;base64)?,(.*)$/
        return (
          (f.load = function (e, t, r, a, i, o, s) {
            var f = p.exec(e)
            if (f !== null) return void o.resolve(m(f, t))
            var d = new XMLHttpRequest()
            if (
              (l.contains(e) && (d.withCredentials = !0),
              n(s) && n(d.overrideMimeType) && d.overrideMimeType(s),
              d.open(r, e, !0),
              n(i))
            ) {
              for (var h in i) { i.hasOwnProperty(h) && d.setRequestHeader(h, i[h]) }
            }
            return (
              n(t) && (d.responseType = t),
              (d.onload = function () {
                if (d.status < 200 || d.status >= 300) {
                  return void o.reject(
                    new u(d.status, d.response, d.getAllResponseHeaders())
                  )
                }
                var e = d.response,
                  r = d.responseType
                if (!n(e) || (n(t) && r !== t)) {
                  if (t === 'json' && typeof e === 'string') {
                    try {
                      o.resolve(JSON.parse(e))
                    } catch (e) {
                      o.reject(e)
                    }
                  } else {
                    (r === '' || r === 'document') &&
                    n(d.responseXML) &&
                    d.responseXML.hasChildNodes()
                      ? o.resolve(d.responseXML)
                      : (r !== '' && r !== 'text') || !n(d.responseText)
                        ? o.reject(
                            new c('Invalid XMLHttpRequest response type.')
                          )
                        : o.resolve(d.responseText)
                  }
                } else o.resolve(e)
              }),
              (d.onerror = function (e) {
                o.reject(new u())
              }),
              d.send(a),
              d
            )
          }),
          (f.defaultLoad = f.load),
          f
        )
      }
    ),
    define('Core/loadText', ['./loadWithXhr'], function (e) {
      'use strict'
      function t (t, r, n) {
        return e({ url: t, headers: r, request: n })
      }
      return t
    }),
    define(
      'Core/loadJson',
      ['./clone', './defined', './DeveloperError', './loadText'],
      function (e, t, r, n) {
        'use strict'
        function a (r, a, o) {
          t(a) ? t(a.Accept) || ((a = e(a)), (a.Accept = i.Accept)) : (a = i)
          var u = n(r, a, o)
          if (t(u)) {
            return u.then(function (e) {
              return JSON.parse(e)
            })
          }
        }
        var i = { Accept: 'application/json,*/*;q=0.01' }
        return a
      }
    ),
    define(
      'Core/EarthOrientationParameters',
      [
        '../ThirdParty/when',
        './binarySearch',
        './defaultValue',
        './defined',
        './EarthOrientationParametersSample',
        './freezeObject',
        './JulianDate',
        './LeapSecond',
        './loadJson',
        './RuntimeError',
        './TimeConstants',
        './TimeStandard'
      ],
      function (e, t, r, n, a, i, o, u, s, c, l, f) {
        'use strict'
        function d (t) {
          if (
            ((t = r(t, r.EMPTY_OBJECT)),
            (this._dates = void 0),
            (this._samples = void 0),
            (this._dateColumn = -1),
            (this._xPoleWanderRadiansColumn = -1),
            (this._yPoleWanderRadiansColumn = -1),
            (this._ut1MinusUtcSecondsColumn = -1),
            (this._xCelestialPoleOffsetRadiansColumn = -1),
            (this._yCelestialPoleOffsetRadiansColumn = -1),
            (this._taiMinusUtcSecondsColumn = -1),
            (this._columnCount = 0),
            (this._lastIndex = -1),
            (this._downloadPromise = void 0),
            (this._dataError = void 0),
            (this._addNewLeapSeconds = r(t.addNewLeapSeconds, !0)),
            n(t.data))
          ) { E(this, t.data) } else if (n(t.url)) {
            var a = this
            this._downloadPromise = e(
              s(t.url),
              function (e) {
                E(a, e)
              },
              function () {
                a._dataError =
                  'An error occurred while retrieving the EOP data from the URL ' +
                  t.url +
                  '.'
              }
            )
          } else {
            E(this, {
              columnNames: [
                'dateIso8601',
                'modifiedJulianDateUtc',
                'xPoleWanderRadians',
                'yPoleWanderRadians',
                'ut1MinusUtcSeconds',
                'lengthOfDayCorrectionSeconds',
                'xCelestialPoleOffsetRadians',
                'yCelestialPoleOffsetRadians',
                'taiMinusUtcSeconds'
              ],
              samples: []
            })
          }
        }
        function h (e, t) {
          return o.compare(e.julianDate, t)
        }
        function E (e, r) {
          if (!n(r.columnNames)) {
            return void (e._dataError =
              'Error in loaded EOP data: The columnNames property is required.')
          }
          if (!n(r.samples)) {
            return void (e._dataError =
              'Error in loaded EOP data: The samples property is required.')
          }
          var a = r.columnNames.indexOf('modifiedJulianDateUtc'),
            i = r.columnNames.indexOf('xPoleWanderRadians'),
            s = r.columnNames.indexOf('yPoleWanderRadians'),
            c = r.columnNames.indexOf('ut1MinusUtcSeconds'),
            d = r.columnNames.indexOf('xCelestialPoleOffsetRadians'),
            E = r.columnNames.indexOf('yCelestialPoleOffsetRadians'),
            m = r.columnNames.indexOf('taiMinusUtcSeconds')
          if (a < 0 || i < 0 || s < 0 || c < 0 || d < 0 || E < 0 || m < 0) {
            return void (e._dataError =
              'Error in loaded EOP data: The columnNames property must include modifiedJulianDateUtc, xPoleWanderRadians, yPoleWanderRadians, ut1MinusUtcSeconds, xCelestialPoleOffsetRadians, yCelestialPoleOffsetRadians, and taiMinusUtcSeconds columns')
          }
          var p = (e._samples = r.samples),
            y = (e._dates = []);
          (e._dateColumn = a),
            (e._xPoleWanderRadiansColumn = i),
            (e._yPoleWanderRadiansColumn = s),
            (e._ut1MinusUtcSecondsColumn = c),
            (e._xCelestialPoleOffsetRadiansColumn = d),
            (e._yCelestialPoleOffsetRadiansColumn = E),
            (e._taiMinusUtcSecondsColumn = m),
            (e._columnCount = r.columnNames.length),
            (e._lastIndex = void 0)
          for (
            var _, T = e._addNewLeapSeconds, R = 0, v = p.length;
            R < v;
            R += e._columnCount
          ) {
            var A = p[R + a],
              S = p[R + m],
              N = A + l.MODIFIED_JULIAN_DATE_DIFFERENCE,
              g = new o(N, S, f.TAI)
            if ((y.push(g), T)) {
              if (S !== _ && n(_)) {
                var I = o.leapSeconds,
                  O = t(I, g, h)
                if (O < 0) {
                  var w = new u(g, S)
                  I.splice(~O, 0, w)
                }
              }
              _ = S
            }
          }
        }
        function m (e, t, r, n, a) {
          var i = r * n;
          (a.xPoleWander = t[i + e._xPoleWanderRadiansColumn]),
            (a.yPoleWander = t[i + e._yPoleWanderRadiansColumn]),
            (a.xPoleOffset = t[i + e._xCelestialPoleOffsetRadiansColumn]),
            (a.yPoleOffset = t[i + e._yCelestialPoleOffsetRadiansColumn]),
            (a.ut1MinusUtc = t[i + e._ut1MinusUtcSecondsColumn])
        }
        function p (e, t, r) {
          return t + e * (r - t)
        }
        function y (e, t, r, n, a, i, u) {
          var s = e._columnCount
          if (i > t.length - 1) {
            return (
              (u.xPoleWander = 0),
              (u.yPoleWander = 0),
              (u.xPoleOffset = 0),
              (u.yPoleOffset = 0),
              (u.ut1MinusUtc = 0),
              u
            )
          }
          var c = t[a],
            l = t[i]
          if (c.equals(l) || n.equals(c)) return m(e, r, a, s, u), u
          if (n.equals(l)) return m(e, r, i, s, u), u
          var f = o.secondsDifference(n, c) / o.secondsDifference(l, c),
            d = a * s,
            h = i * s,
            E = r[d + e._ut1MinusUtcSecondsColumn],
            y = r[h + e._ut1MinusUtcSecondsColumn],
            _ = y - E
          if (_ > 0.5 || _ < -0.5) {
            var T = r[d + e._taiMinusUtcSecondsColumn],
              R = r[h + e._taiMinusUtcSecondsColumn]
            T !== R && (l.equals(n) ? (E = y) : (y -= R - T))
          }
          return (
            (u.xPoleWander = p(
              f,
              r[d + e._xPoleWanderRadiansColumn],
              r[h + e._xPoleWanderRadiansColumn]
            )),
            (u.yPoleWander = p(
              f,
              r[d + e._yPoleWanderRadiansColumn],
              r[h + e._yPoleWanderRadiansColumn]
            )),
            (u.xPoleOffset = p(
              f,
              r[d + e._xCelestialPoleOffsetRadiansColumn],
              r[h + e._xCelestialPoleOffsetRadiansColumn]
            )),
            (u.yPoleOffset = p(
              f,
              r[d + e._yCelestialPoleOffsetRadiansColumn],
              r[h + e._yCelestialPoleOffsetRadiansColumn]
            )),
            (u.ut1MinusUtc = p(f, E, y)),
            u
          )
        }
        return (
          (d.NONE = i({
            getPromiseToLoad: function () {
              return e()
            },
            compute: function (e, t) {
              return (
                n(t)
                  ? ((t.xPoleWander = 0),
                    (t.yPoleWander = 0),
                    (t.xPoleOffset = 0),
                    (t.yPoleOffset = 0),
                    (t.ut1MinusUtc = 0))
                  : (t = new a(0, 0, 0, 0, 0)),
                t
              )
            }
          })),
          (d.prototype.getPromiseToLoad = function () {
            return e(this._downloadPromise)
          }),
          (d.prototype.compute = function (e, r) {
            if (n(this._samples)) {
              if (
                (n(r) || (r = new a(0, 0, 0, 0, 0)), this._samples.length === 0)
              ) {
                return (
                  (r.xPoleWander = 0),
                  (r.yPoleWander = 0),
                  (r.xPoleOffset = 0),
                  (r.yPoleOffset = 0),
                  (r.ut1MinusUtc = 0),
                  r
                )
              }
              var i = this._dates,
                u = this._lastIndex,
                s = 0,
                l = 0
              if (n(u)) {
                var f = i[u],
                  d = i[u + 1],
                  h = o.lessThanOrEquals(f, e),
                  E = !n(d),
                  m = E || o.greaterThanOrEquals(d, e)
                if (h && m) {
                  return (
                    (s = u),
                    !E && d.equals(e) && ++s,
                    (l = s + 1),
                    y(this, i, this._samples, e, s, l, r),
                    r
                  )
                }
              }
              var p = t(i, e, o.compare, this._dateColumn)
              return (
                p >= 0
                  ? (p < i.length - 1 && i[p + 1].equals(e) && ++p,
                    (s = p),
                    (l = p))
                  : ((l = ~p), (s = l - 1), s < 0 && (s = 0)),
                (this._lastIndex = s),
                y(this, i, this._samples, e, s, l, r),
                r
              )
            }
            if (n(this._dataError)) throw new c(this._dataError)
          }),
          d
        )
      }
    ),
    define(
      'Core/getAbsoluteUri',
      ['../ThirdParty/Uri', './defaultValue', './defined', './DeveloperError'],
      function (e, t, r, n) {
        'use strict'
        function a (r, n) {
          n = t(n, document.location.href)
          var a = new e(n),
            i = new e(r)
          return i.resolve(a).toString()
        }
        return a
      }
    ),
    define(
      'Core/joinUrls',
      ['../ThirdParty/Uri', './defaultValue', './defined', './DeveloperError'],
      function (e, t, r, n) {
        'use strict'
        function a (n, a, i) {
          if (
            ((i = t(i, !0)),
            n instanceof e || (n = new e(n)),
            a instanceof e || (a = new e(a)),
            n.scheme === 'data')
          ) { return n.toString() }
          if (a.scheme === 'data') return a.toString()
          r(a.authority) &&
            !r(a.scheme) &&
            (typeof document !== 'undefined' &&
            r(document.location) &&
            r(document.location.href)
              ? (a.scheme = new e(document.location.href).scheme)
              : (a.scheme = n.scheme))
          var o = n
          a.isAbsolute() && (o = a)
          var u = ''
          r(o.scheme) && (u += o.scheme + ':'),
            r(o.authority) &&
              ((u += '//' + o.authority),
              o.path !== '' &&
                o.path !== '/' &&
                ((u = u.replace(/\/?$/, '/')),
                (o.path = o.path.replace(/^\/?/g, '')))),
            (u +=
              o === n
                ? i
                  ? n.path.replace(/\/?$/, '/') + a.path.replace(/^\/?/g, '')
                  : n.path + a.path
                : a.path)
          var s = r(n.query),
            c = r(a.query)
          s && c
            ? (u += '?' + n.query + '&' + a.query)
            : s && !c ? (u += '?' + n.query) : !s && c && (u += '?' + a.query)
          var l = r(a.fragment)
          return (
            r(n.fragment) && !l
              ? (u += '#' + n.fragment)
              : l && (u += '#' + a.fragment),
            u
          )
        }
        return a
      }
    ),
    define(
      'Core/buildModuleUrl',
      [
        '../ThirdParty/Uri',
        './defined',
        './DeveloperError',
        './getAbsoluteUri',
        './joinUrls',
        'require'
      ],
      function (e, t, r, n, a, i) {
        'use strict'
        function o () {
          for (
            var e = document.getElementsByTagName('script'),
              t = 0,
              r = e.length;
            t < r;
            ++t
          ) {
            var n = e[t].getAttribute('src'),
              a = E.exec(n)
            if (a !== null) return a[1]
          }
        }
        function u () {
          if (t(f)) return f
          var r
          return (
            (r = typeof CESIUM_BASE_URL !== 'undefined' ? CESIUM_BASE_URL : o()),
            (f = new e(n(r)))
          )
        }
        function s (e) {
          return i.toUrl('../' + e)
        }
        function c (e) {
          return a(u(), e)
        }
        function l (e) {
          t(d) || (d = t(i.toUrl) ? s : c),
            t(h) || (h = document.createElement('a'))
          var r = d(e)
          return (h.href = r), (h.href = h.href), h.href
        }
        var f,
          d,
          h,
          E = /((?:.*\/)|^)cesium[\w-]*\.js(?:\W|$)/i
        return (
          (l._cesiumScriptRegex = E),
          (l.setBaseUrl = function (t) {
            f = new e(t).resolve(new e(document.location.href))
          }),
          l
        )
      }
    ),
    define('Core/Iau2006XysSample', [], function () {
      'use strict'
      function e (e, t, r) {
        (this.x = e), (this.y = t), (this.s = r)
      }
      return e
    }),
    define(
      'Core/Iau2006XysData',
      [
        '../ThirdParty/when',
        './buildModuleUrl',
        './defaultValue',
        './defined',
        './Iau2006XysSample',
        './JulianDate',
        './loadJson',
        './TimeStandard'
      ],
      function (e, t, r, n, a, i, o, u) {
        'use strict'
        function s (e) {
          (e = r(e, r.EMPTY_OBJECT)),
            (this._xysFileUrlTemplate = e.xysFileUrlTemplate),
            (this._interpolationOrder = r(e.interpolationOrder, 9)),
            (this._sampleZeroJulianEphemerisDate = r(
              e.sampleZeroJulianEphemerisDate,
              2442396.5
            )),
            (this._sampleZeroDateTT = new i(
              this._sampleZeroJulianEphemerisDate,
              0,
              u.TAI
            )),
            (this._stepSizeDays = r(e.stepSizeDays, 1)),
            (this._samplesPerXysFile = r(e.samplesPerXysFile, 1e3)),
            (this._totalSamples = r(e.totalSamples, 27426)),
            (this._samples = new Array(3 * this._totalSamples)),
            (this._chunkDownloadsInProgress = [])
          for (
            var t = this._interpolationOrder,
              n = (this._denominators = new Array(t + 1)),
              a = (this._xTable = new Array(t + 1)),
              o = Math.pow(this._stepSizeDays, t),
              s = 0;
            s <= t;
            ++s
          ) {
            (n[s] = o), (a[s] = s * this._stepSizeDays)
            for (var c = 0; c <= t; ++c) c !== s && (n[s] *= s - c)
            n[s] = 1 / n[s]
          }
          (this._work = new Array(t + 1)), (this._coef = new Array(t + 1))
        }
        function c (e, t, r) {
          var n = f
          return (
            (n.dayNumber = t),
            (n.secondsOfDay = r),
            i.daysDifference(n, e._sampleZeroDateTT)
          )
        }
        function l (r, a) {
          if (r._chunkDownloadsInProgress[a]) { return r._chunkDownloadsInProgress[a] }
          var i = e.defer()
          r._chunkDownloadsInProgress[a] = i
          var u,
            s = r._xysFileUrlTemplate
          return (
            (u = n(s)
              ? s.replace('{0}', a)
              : t('Assets/IAU2006_XYS/IAU2006_XYS_' + a + '.json')),
            e(o(u), function (e) {
              r._chunkDownloadsInProgress[a] = !1
              for (
                var t = r._samples,
                  n = e.samples,
                  o = a * r._samplesPerXysFile * 3,
                  u = 0,
                  s = n.length;
                u < s;
                ++u
              ) { t[o + u] = n[u] }
              i.resolve()
            }),
            i.promise
          )
        }
        var f = new i(0, 0, u.TAI)
        return (
          (s.prototype.preload = function (t, r, n, a) {
            var i = c(this, t, r),
              o = c(this, n, a),
              u = (i / this._stepSizeDays - this._interpolationOrder / 2) | 0
            u < 0 && (u = 0)
            var s =
              (o / this._stepSizeDays - this._interpolationOrder / 2) |
              (0 + this._interpolationOrder)
            s >= this._totalSamples && (s = this._totalSamples - 1)
            for (
              var f = (u / this._samplesPerXysFile) | 0,
                d = (s / this._samplesPerXysFile) | 0,
                h = [],
                E = f;
              E <= d;
              ++E
            ) { h.push(l(this, E)) }
            return e.all(h)
          }),
          (s.prototype.computeXysRadians = function (e, t, r) {
            var i = c(this, e, t)
            if (!(i < 0)) {
              var o = (i / this._stepSizeDays) | 0
              if (!(o >= this._totalSamples)) {
                var u = this._interpolationOrder,
                  s = o - ((u / 2) | 0)
                s < 0 && (s = 0)
                var f = s + u
                f >= this._totalSamples &&
                  ((f = this._totalSamples - 1), (s = f - u), s < 0 && (s = 0))
                var d = !1,
                  h = this._samples
                if (
                  (n(h[3 * s]) ||
                    (l(this, (s / this._samplesPerXysFile) | 0), (d = !0)),
                  n(h[3 * f]) ||
                    (l(this, (f / this._samplesPerXysFile) | 0), (d = !0)),
                  !d)
                ) {
                  n(r)
                    ? ((r.x = 0), (r.y = 0), (r.s = 0))
                    : (r = new a(0, 0, 0))
                  var E,
                    m,
                    p = i - s * this._stepSizeDays,
                    y = this._work,
                    _ = this._denominators,
                    T = this._coef,
                    R = this._xTable
                  for (E = 0; E <= u; ++E) y[E] = p - R[E]
                  for (E = 0; E <= u; ++E) {
                    for (T[E] = 1, m = 0; m <= u; ++m) { m !== E && (T[E] *= y[m]) }
                    T[E] *= _[E]
                    var v = 3 * (s + E);
                    (r.x += T[E] * h[v++]),
                      (r.y += T[E] * h[v++]),
                      (r.s += T[E] * h[v])
                  }
                  return r
                }
              }
            }
          }),
          s
        )
      }
    ),
    define(
      'Core/Transforms',
      [
        '../ThirdParty/when',
        './Cartesian2',
        './Cartesian3',
        './Cartesian4',
        './Cartographic',
        './Check',
        './defaultValue',
        './defined',
        './DeveloperError',
        './EarthOrientationParameters',
        './EarthOrientationParametersSample',
        './Ellipsoid',
        './Iau2006XysData',
        './Iau2006XysSample',
        './JulianDate',
        './Math',
        './Matrix3',
        './Matrix4',
        './Quaternion',
        './TimeConstants'
      ],
      function (e, t, r, n, a, i, o, u, s, c, l, f, d, h, E, m, p, y, _, T) {
        'use strict'
        var R = {},
          v = {
            up: { south: 'east', north: 'west', west: 'south', east: 'north' },
            down: {
              south: 'west',
              north: 'east',
              west: 'north',
              east: 'south'
            },
            south: { up: 'west', down: 'east', west: 'down', east: 'up' },
            north: { up: 'east', down: 'west', west: 'up', east: 'down' },
            west: { up: 'north', down: 'south', north: 'down', south: 'up' },
            east: { up: 'south', down: 'north', north: 'up', south: 'down' }
          },
          A = {
            north: [-1, 0, 0],
            east: [0, 1, 0],
            up: [0, 0, 1],
            south: [1, 0, 0],
            west: [0, -1, 0],
            down: [0, 0, -1]
          },
          S = {},
          N = {
            east: new r(),
            north: new r(),
            up: new r(),
            west: new r(),
            south: new r(),
            down: new r()
          },
          g = new r(),
          I = new r(),
          O = new r();
        (R.localFrameToFixedFrameGenerator = function (e, t) {
          if (!v.hasOwnProperty(e) || !v[e].hasOwnProperty(t)) {
            throw new s(
              'firstAxis and secondAxis must be east, north, up, west, south or down.'
            )
          }
          var n,
            a = v[e][t],
            i = e + t
          return (
            u(S[i])
              ? (n = S[i])
              : ((n = function (n, i, s) {
                if (
                    (u(s) || (s = new y()),
                    m.equalsEpsilon(n.x, 0, m.EPSILON14) &&
                      m.equalsEpsilon(n.y, 0, m.EPSILON14))
                  ) {
                  var c = m.sign(n.z)
                  r.unpack(A[e], 0, g),
                      e !== 'east' &&
                        e !== 'west' &&
                        r.multiplyByScalar(g, c, g),
                      r.unpack(A[t], 0, I),
                      t !== 'east' &&
                        t !== 'west' &&
                        r.multiplyByScalar(I, c, I),
                      r.unpack(A[a], 0, O),
                      a !== 'east' &&
                        a !== 'west' &&
                        r.multiplyByScalar(O, c, O)
                } else {
                  (i = o(i, f.WGS84)), i.geodeticSurfaceNormal(n, N.up)
                  var l = N.up,
                    d = N.east;
                  (d.x = -n.y),
                      (d.y = n.x),
                      (d.z = 0),
                      r.normalize(d, N.east),
                      r.cross(l, d, N.north),
                      r.multiplyByScalar(N.up, -1, N.down),
                      r.multiplyByScalar(N.east, -1, N.west),
                      r.multiplyByScalar(N.north, -1, N.south),
                      (g = N[e]),
                      (I = N[t]),
                      (O = N[a])
                }
                return (
                    (s[0] = g.x),
                    (s[1] = g.y),
                    (s[2] = g.z),
                    (s[3] = 0),
                    (s[4] = I.x),
                    (s[5] = I.y),
                    (s[6] = I.z),
                    (s[7] = 0),
                    (s[8] = O.x),
                    (s[9] = O.y),
                    (s[10] = O.z),
                    (s[11] = 0),
                    (s[12] = n.x),
                    (s[13] = n.y),
                    (s[14] = n.z),
                    (s[15] = 1),
                    s
                )
              }),
                (S[i] = n)),
            n
          )
        }),
          (R.eastNorthUpToFixedFrame = R.localFrameToFixedFrameGenerator(
            'east',
            'north'
          )),
          (R.northEastDownToFixedFrame = R.localFrameToFixedFrameGenerator(
            'north',
            'east'
          )),
          (R.northUpEastToFixedFrame = R.localFrameToFixedFrameGenerator(
            'north',
            'up'
          )),
          (R.northWestUpToFixedFrame = R.localFrameToFixedFrameGenerator(
            'north',
            'west'
          ))
        var w = new _(),
          M = new r(1, 1, 1),
          x = new y()
        R.headingPitchRollToFixedFrame = function (e, t, n, a, i) {
          a = o(a, R.eastNorthUpToFixedFrame)
          var u = _.fromHeadingPitchRoll(t, w),
            s = y.fromTranslationQuaternionRotationScale(r.ZERO, u, M, x)
          return (i = a(e, n, i)), y.multiply(i, s, i)
        }
        var C = new y(),
          P = new p()
        R.headingPitchRollQuaternion = function (e, t, r, n, a) {
          var i = R.headingPitchRollToFixedFrame(e, t, r, n, C),
            o = y.getRotation(i, P)
          return _.fromRotationMatrix(o, a)
        }
        var D = 24110.54841,
          L = 8640184.812866,
          U = 0.093104,
          b = -62e-7,
          F = 1.1772758384668e-19,
          B = 72921158553e-15,
          z = m.TWO_PI / 86400,
          G = new E();
        (R.computeTemeToPseudoFixedMatrix = function (e, t) {
          G = E.addSeconds(e, -E.computeTaiMinusUtc(e), G)
          var r,
            n = G.dayNumber,
            a = G.secondsOfDay,
            i = n - 2451545
          r =
            a >= 43200
              ? (i + 0.5) / T.DAYS_PER_JULIAN_CENTURY
              : (i - 0.5) / T.DAYS_PER_JULIAN_CENTURY
          var o = D + r * (L + r * (U + r * b)),
            s = (o * z) % m.TWO_PI,
            c = B + F * (n - 2451545.5),
            l = (a + 0.5 * T.SECONDS_PER_DAY) % T.SECONDS_PER_DAY,
            f = s + c * l,
            d = Math.cos(f),
            h = Math.sin(f)
          return u(t)
            ? ((t[0] = d),
              (t[1] = -h),
              (t[2] = 0),
              (t[3] = h),
              (t[4] = d),
              (t[5] = 0),
              (t[6] = 0),
              (t[7] = 0),
              (t[8] = 1),
              t)
            : new p(d, h, 0, -h, d, 0, 0, 0, 1)
        }),
          (R.iau2006XysData = new d()),
          (R.earthOrientationParameters = c.NONE)
        var q = 32.184,
          V = 2451545;
        (R.preloadIcrfFixed = function (t) {
          var r = t.start.dayNumber,
            n = t.start.secondsOfDay + q,
            a = t.stop.dayNumber,
            i = t.stop.secondsOfDay + q,
            o = R.iau2006XysData.preload(r, n, a, i),
            u = R.earthOrientationParameters.getPromiseToLoad()
          return e.all([o, u])
        }),
          (R.computeIcrfToFixedMatrix = function (e, t) {
            u(t) || (t = new p())
            var r = R.computeFixedToIcrfMatrix(e, t)
            if (u(r)) return p.transpose(r, t)
          })
        var W = new h(0, 0, 0),
          X = new l(0, 0, 0, 0, 0, 0),
          H = new p(),
          Y = new p()
        R.computeFixedToIcrfMatrix = function (e, t) {
          u(t) || (t = new p())
          var r = R.earthOrientationParameters.compute(e, X)
          if (u(r)) {
            var n = e.dayNumber,
              a = e.secondsOfDay + q,
              i = R.iau2006XysData.computeXysRadians(n, a, W)
            if (u(i)) {
              var o = i.x + r.xPoleOffset,
                s = i.y + r.yPoleOffset,
                c = 1 / (1 + Math.sqrt(1 - o * o - s * s)),
                l = H;
              (l[0] = 1 - c * o * o),
                (l[3] = -c * o * s),
                (l[6] = o),
                (l[1] = -c * o * s),
                (l[4] = 1 - c * s * s),
                (l[7] = s),
                (l[2] = -o),
                (l[5] = -s),
                (l[8] = 1 - c * (o * o + s * s))
              var f = p.fromRotationZ(-i.s, Y),
                d = p.multiply(l, f, H),
                h = e.dayNumber,
                y = e.secondsOfDay - E.computeTaiMinusUtc(e) + r.ut1MinusUtc,
                _ = h - 2451545,
                v = y / T.SECONDS_PER_DAY,
                A = 0.779057273264 + v + 0.00273781191135448 * (_ + v)
              A = (A % 1) * m.TWO_PI
              var S = p.fromRotationZ(A, Y),
                N = p.multiply(d, S, H),
                g = Math.cos(r.xPoleWander),
                I = Math.cos(r.yPoleWander),
                O = Math.sin(r.xPoleWander),
                w = Math.sin(r.yPoleWander),
                M = n - V + a / T.SECONDS_PER_DAY
              M /= 36525
              var x = -47e-6 * M * m.RADIANS_PER_DEGREE / 3600,
                C = Math.cos(x),
                P = Math.sin(x),
                D = Y
              return (
                (D[0] = g * C),
                (D[1] = g * P),
                (D[2] = O),
                (D[3] = -I * P + w * O * C),
                (D[4] = I * C + w * O * P),
                (D[5] = -w * g),
                (D[6] = -w * P - I * O * C),
                (D[7] = w * C - I * O * P),
                (D[8] = I * g),
                p.multiply(N, D, t)
              )
            }
          }
        }
        var k = new n();
        (R.pointToWindowCoordinates = function (e, t, r, n) {
          return (
            (n = R.pointToGLWindowCoordinates(e, t, r, n)),
            (n.y = 2 * t[5] - n.y),
            n
          )
        }),
          (R.pointToGLWindowCoordinates = function (e, r, a, i) {
            u(i) || (i = new t())
            var o = k
            return (
              y.multiplyByVector(e, n.fromElements(a.x, a.y, a.z, 1, o), o),
              n.multiplyByScalar(o, 1 / o.w, o),
              y.multiplyByVector(r, o, o),
              t.fromCartesian4(o, i)
            )
          })
        var j = new r(),
          Z = new r(),
          K = new r()
        R.rotationMatrixFromPositionVelocity = function (e, t, n, a) {
          var i = o(n, f.WGS84).geodeticSurfaceNormal(e, j),
            s = r.cross(t, i, Z)
          r.equalsEpsilon(s, r.ZERO, m.EPSILON6) && (s = r.clone(r.UNIT_X, s))
          var c = r.cross(s, t, K)
          return (
            r.cross(t, c, s),
            r.negate(s, s),
            u(a) || (a = new p()),
            (a[0] = t.x),
            (a[1] = t.y),
            (a[2] = t.z),
            (a[3] = s.x),
            (a[4] = s.y),
            (a[5] = s.z),
            (a[6] = c.x),
            (a[7] = c.y),
            (a[8] = c.z),
            a
          )
        }
        var J = new y(0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1),
          Q = new a(),
          $ = new r(),
          ee = new r(),
          te = new p(),
          re = new y(),
          ne = new y()
        return (
          (R.basisTo2D = function (e, t, n) {
            var a = y.getTranslation(t, ee),
              i = e.ellipsoid,
              o = i.cartesianToCartographic(a, Q),
              u = e.project(o, $)
            r.fromElements(u.z, u.x, u.y, u)
            var s = R.eastNorthUpToFixedFrame(a, i, re),
              c = y.inverseTransformation(s, ne),
              l = y.getRotation(t, te),
              f = y.multiplyByMatrix3(c, l, n)
            return y.multiply(J, f, n), y.setTranslation(n, u, n), n
          }),
          (R.wgs84To2DModelMatrix = function (e, t, n) {
            var a = e.ellipsoid,
              i = R.eastNorthUpToFixedFrame(t, a, re),
              o = y.inverseTransformation(i, ne),
              u = a.cartesianToCartographic(t, Q),
              s = e.project(u, $)
            r.fromElements(s.z, s.x, s.y, s)
            var c = y.fromTranslation(s, re)
            return y.multiply(J, o, n), y.multiply(c, n, n), n
          }),
          R
        )
      }
    ),
    define(
      'Core/VertexFormat',
      ['./defaultValue', './defined', './DeveloperError', './freezeObject'],
      function (e, t, r, n) {
        'use strict'
        function a (t) {
          (t = e(t, e.EMPTY_OBJECT)),
            (this.position = e(t.position, !1)),
            (this.normal = e(t.normal, !1)),
            (this.st = e(t.st, !1)),
            (this.bitangent = e(t.bitangent, !1)),
            (this.tangent = e(t.tangent, !1)),
            (this.color = e(t.color, !1))
        }
        return (
          (a.POSITION_ONLY = n(new a({ position: !0 }))),
          (a.POSITION_AND_NORMAL = n(new a({ position: !0, normal: !0 }))),
          (a.POSITION_NORMAL_AND_ST = n(
            new a({ position: !0, normal: !0, st: !0 })
          )),
          (a.POSITION_AND_ST = n(new a({ position: !0, st: !0 }))),
          (a.POSITION_AND_COLOR = n(new a({ position: !0, color: !0 }))),
          (a.ALL = n(
            new a({
              position: !0,
              normal: !0,
              st: !0,
              tangent: !0,
              bitangent: !0
            })
          )),
          (a.DEFAULT = a.POSITION_NORMAL_AND_ST),
          (a.packedLength = 6),
          (a.pack = function (t, r, n) {
            return (
              (n = e(n, 0)),
              (r[n++] = t.position ? 1 : 0),
              (r[n++] = t.normal ? 1 : 0),
              (r[n++] = t.st ? 1 : 0),
              (r[n++] = t.tangent ? 1 : 0),
              (r[n++] = t.bitangent ? 1 : 0),
              (r[n] = t.color ? 1 : 0),
              r
            )
          }),
          (a.unpack = function (r, n, i) {
            return (
              (n = e(n, 0)),
              t(i) || (i = new a()),
              (i.position = r[n++] === 1),
              (i.normal = r[n++] === 1),
              (i.st = r[n++] === 1),
              (i.tangent = r[n++] === 1),
              (i.bitangent = r[n++] === 1),
              (i.color = r[n] === 1),
              i
            )
          }),
          (a.clone = function (e, r) {
            if (t(e)) {
              return (
                t(r) || (r = new a()),
                (r.position = e.position),
                (r.normal = e.normal),
                (r.st = e.st),
                (r.tangent = e.tangent),
                (r.bitangent = e.bitangent),
                (r.color = e.color),
                r
              )
            }
          }),
          a
        )
      }
    ),
    define(
      'Core/EllipseGeometry',
      [
        './BoundingSphere',
        './Cartesian2',
        './Cartesian3',
        './Cartographic',
        './ComponentDatatype',
        './defaultValue',
        './defined',
        './defineProperties',
        './DeveloperError',
        './EllipseGeometryLibrary',
        './Ellipsoid',
        './GeographicProjection',
        './Geometry',
        './GeometryAttribute',
        './GeometryAttributes',
        './GeometryInstance',
        './GeometryPipeline',
        './IndexDatatype',
        './Math',
        './Matrix3',
        './Matrix4',
        './PrimitiveType',
        './Quaternion',
        './Rectangle',
        './Transforms',
        './VertexFormat'
      ],
      function (
        e,
        t,
        r,
        n,
        a,
        i,
        o,
        u,
        s,
        c,
        l,
        f,
        d,
        h,
        E,
        m,
        p,
        y,
        _,
        T,
        R,
        v,
        A,
        S,
        N,
        g
      ) {
        'use strict'
        function I (e, n, i) {
          var o = n.vertexFormat,
            u = n.center,
            s = n.semiMajorAxis,
            l = n.semiMinorAxis,
            d = n.ellipsoid,
            m = n.stRotation,
            p = i ? e.length / 3 * 2 : e.length / 3,
            y = n.shadowVolume,
            _ = o.st ? new Float32Array(2 * p) : void 0,
            R = o.normal ? new Float32Array(3 * p) : void 0,
            v = o.tangent ? new Float32Array(3 * p) : void 0,
            S = o.bitangent ? new Float32Array(3 * p) : void 0,
            N = y ? new Float32Array(3 * p) : void 0,
            g = 0,
            I = q,
            O = V,
            w = W,
            M = new f(d),
            x = M.project(d.cartesianToCartographic(u, X), H),
            C = d.scaleToGeodeticSurface(u, L)
          d.geodeticSurfaceNormal(C, C)
          for (
            var P = A.fromAxisAngle(C, m, G),
              D = T.fromQuaternion(P, z),
              F = t.fromElements(
                Number.POSITIVE_INFINITY,
                Number.POSITIVE_INFINITY,
                Y
              ),
              j = t.fromElements(
                Number.NEGATIVE_INFINITY,
                Number.NEGATIVE_INFINITY,
                k
              ),
              Z = e.length,
              K = i ? Z : 0,
              J = K / 3 * 2,
              Q = 0;
            Q < Z;
            Q += 3
          ) {
            var $ = Q + 1,
              ee = Q + 2,
              te = r.fromArray(e, Q, L)
            if (o.st) {
              var re = T.multiplyByVector(D, te, U),
                ne = M.project(d.cartesianToCartographic(re, X), b)
              r.subtract(ne, x, ne),
                (B.x = (ne.x + s) / (2 * s)),
                (B.y = (ne.y + l) / (2 * l)),
                (F.x = Math.min(B.x, F.x)),
                (F.y = Math.min(B.y, F.y)),
                (j.x = Math.max(B.x, j.x)),
                (j.y = Math.max(B.y, j.y)),
                i && ((_[g + J] = B.x), (_[g + 1 + J] = B.y)),
                (_[g++] = B.x),
                (_[g++] = B.y)
            }
            (o.normal || o.tangent || o.bitangent || y) &&
              ((I = d.geodeticSurfaceNormal(te, I)),
              y && ((N[Q + K] = -I.x), (N[$ + K] = -I.y), (N[ee + K] = -I.z)),
              (o.normal || o.tangent || o.bitangent) &&
                ((o.tangent || o.bitangent) &&
                  ((O = r.normalize(r.cross(r.UNIT_Z, I, O), O)),
                  T.multiplyByVector(D, O, O)),
                o.normal &&
                  ((R[Q] = I.x),
                  (R[$] = I.y),
                  (R[ee] = I.z),
                  i &&
                    ((R[Q + K] = -I.x), (R[$ + K] = -I.y), (R[ee + K] = -I.z))),
                o.tangent &&
                  ((v[Q] = O.x),
                  (v[$] = O.y),
                  (v[ee] = O.z),
                  i &&
                    ((v[Q + K] = -O.x), (v[$ + K] = -O.y), (v[ee + K] = -O.z))),
                o.bitangent &&
                  ((w = r.normalize(r.cross(I, O, w), w)),
                  (S[Q] = w.x),
                  (S[$] = w.y),
                  (S[ee] = w.z),
                  i &&
                    ((S[Q + K] = w.x), (S[$ + K] = w.y), (S[ee + K] = w.z)))))
          }
          if (o.st) {
            Z = _.length
            for (var ae = 0; ae < Z; ae += 2) {
              (_[ae] = (_[ae] - F.x) / (j.x - F.x)),
                (_[ae + 1] = (_[ae + 1] - F.y) / (j.y - F.y))
            }
          }
          var ie = new E()
          if (o.position) {
            var oe = c.raisePositionsToHeight(e, n, i)
            ie.position = new h({
              componentDatatype: a.DOUBLE,
              componentsPerAttribute: 3,
              values: oe
            })
          }
          return (
            o.st &&
              (ie.st = new h({
                componentDatatype: a.FLOAT,
                componentsPerAttribute: 2,
                values: _
              })),
            o.normal &&
              (ie.normal = new h({
                componentDatatype: a.FLOAT,
                componentsPerAttribute: 3,
                values: R
              })),
            o.tangent &&
              (ie.tangent = new h({
                componentDatatype: a.FLOAT,
                componentsPerAttribute: 3,
                values: v
              })),
            o.bitangent &&
              (ie.bitangent = new h({
                componentDatatype: a.FLOAT,
                componentsPerAttribute: 3,
                values: S
              })),
            y &&
              (ie.extrudeDirection = new h({
                componentDatatype: a.FLOAT,
                componentsPerAttribute: 3,
                values: N
              })),
            ie
          )
        }
        function O (e) {
          var t,
            r,
            n,
            a,
            i,
            o = new Array(12 * (e * (e + 1)) - 6),
            u = 0
          for (t = 0, n = 1, a = 0; a < 3; a++) { (o[u++] = n++), (o[u++] = t), (o[u++] = n) }
          for (a = 2; a < e + 1; ++a) {
            for (
              n = a * (a + 1) - 1,
                t = (a - 1) * a - 1,
                o[u++] = n++,
                o[u++] = t,
                o[u++] = n,
                r = 2 * a,
                i = 0;
              i < r - 1;
              ++i
            ) {
              (o[u++] = n),
                (o[u++] = t++),
                (o[u++] = t),
                (o[u++] = n++),
                (o[u++] = t),
                (o[u++] = n)
            }
            (o[u++] = n++), (o[u++] = t), (o[u++] = n)
          }
          for (r = 2 * e, ++n, ++t, a = 0; a < r - 1; ++a) {
            (o[u++] = n),
              (o[u++] = t++),
              (o[u++] = t),
              (o[u++] = n++),
              (o[u++] = t),
              (o[u++] = n)
          }
          for (
            o[u++] = n,
              o[u++] = t++,
              o[u++] = t,
              o[u++] = n++,
              o[u++] = t++,
              o[u++] = t,
              ++t,
              a = e - 1;
            a > 1;
            --a
          ) {
            for (
              o[u++] = t++, o[u++] = t, o[u++] = n, r = 2 * a, i = 0;
              i < r - 1;
              ++i
            ) {
              (o[u++] = n),
                (o[u++] = t++),
                (o[u++] = t),
                (o[u++] = n++),
                (o[u++] = t),
                (o[u++] = n)
            }
            (o[u++] = t++), (o[u++] = t++), (o[u++] = n++)
          }
          for (a = 0; a < 3; a++) (o[u++] = t++), (o[u++] = t), (o[u++] = n)
          return o
        }
        function w (t) {
          var n = t.center;
          (j = r.multiplyByScalar(
            t.ellipsoid.geodeticSurfaceNormal(n, j),
            t.height,
            j
          )),
            (j = r.add(n, j, j))
          var a = new e(j, t.semiMajorAxis),
            i = c.computeEllipsePositions(t, !0, !1),
            o = i.positions,
            u = i.numPts,
            s = I(o, t, !1),
            l = O(u)
          return (
            (l = y.createTypedArray(o.length / 3, l)),
            { boundingSphere: a, attributes: s, indices: l }
          )
        }
        function M (e, n) {
          var i = n.vertexFormat,
            o = n.center,
            u = n.semiMajorAxis,
            s = n.semiMinorAxis,
            c = n.ellipsoid,
            l = n.height,
            d = n.extrudedHeight,
            m = n.stRotation,
            p = e.length / 3 * 2,
            y = new Float64Array(3 * p),
            _ = i.st ? new Float32Array(2 * p) : void 0,
            R = i.normal ? new Float32Array(3 * p) : void 0,
            v = i.tangent ? new Float32Array(3 * p) : void 0,
            S = i.bitangent ? new Float32Array(3 * p) : void 0,
            N = n.shadowVolume,
            g = N ? new Float32Array(3 * p) : void 0,
            I = 0,
            O = q,
            w = V,
            M = W,
            x = new f(c),
            C = x.project(c.cartesianToCartographic(o, X), H),
            P = c.scaleToGeodeticSurface(o, L)
          c.geodeticSurfaceNormal(P, P)
          for (
            var D = A.fromAxisAngle(P, m, G),
              j = T.fromQuaternion(D, z),
              Z = t.fromElements(
                Number.POSITIVE_INFINITY,
                Number.POSITIVE_INFINITY,
                Y
              ),
              K = t.fromElements(
                Number.NEGATIVE_INFINITY,
                Number.NEGATIVE_INFINITY,
                k
              ),
              J = e.length,
              Q = J / 3 * 2,
              $ = 0;
            $ < J;
            $ += 3
          ) {
            var ee,
              te = $ + 1,
              re = $ + 2,
              ne = r.fromArray(e, $, L)
            if (i.st) {
              var ae = T.multiplyByVector(j, ne, U),
                ie = x.project(c.cartesianToCartographic(ae, X), b)
              r.subtract(ie, C, ie),
                (B.x = (ie.x + u) / (2 * u)),
                (B.y = (ie.y + s) / (2 * s)),
                (Z.x = Math.min(B.x, Z.x)),
                (Z.y = Math.min(B.y, Z.y)),
                (K.x = Math.max(B.x, K.x)),
                (K.y = Math.max(B.y, K.y)),
                (_[I + Q] = B.x),
                (_[I + 1 + Q] = B.y),
                (_[I++] = B.x),
                (_[I++] = B.y)
            }
            (ne = c.scaleToGeodeticSurface(ne, ne)),
              (ee = r.clone(ne, U)),
              (O = c.geodeticSurfaceNormal(ne, O)),
              N && ((g[$ + J] = -O.x), (g[te + J] = -O.y), (g[re + J] = -O.z))
            var oe = r.multiplyByScalar(O, l, F)
            if (
              ((ne = r.add(ne, oe, ne)),
              (oe = r.multiplyByScalar(O, d, oe)),
              (ee = r.add(ee, oe, ee)),
              i.position &&
                ((y[$ + J] = ee.x),
                (y[te + J] = ee.y),
                (y[re + J] = ee.z),
                (y[$] = ne.x),
                (y[te] = ne.y),
                (y[re] = ne.z)),
              i.normal || i.tangent || i.bitangent)
            ) {
              M = r.clone(O, M)
              var ue = r.fromArray(e, ($ + 3) % J, F)
              r.subtract(ue, ne, ue)
              var se = r.subtract(ee, ne, b);
              (O = r.normalize(r.cross(se, ue, O), O)),
                i.normal &&
                  ((R[$] = O.x),
                  (R[te] = O.y),
                  (R[re] = O.z),
                  (R[$ + J] = O.x),
                  (R[te + J] = O.y),
                  (R[re + J] = O.z)),
                i.tangent &&
                  ((w = r.normalize(r.cross(M, O, w), w)),
                  (v[$] = w.x),
                  (v[te] = w.y),
                  (v[re] = w.z),
                  (v[$ + J] = w.x),
                  (v[$ + 1 + J] = w.y),
                  (v[$ + 2 + J] = w.z)),
                i.bitangent &&
                  ((S[$] = M.x),
                  (S[te] = M.y),
                  (S[re] = M.z),
                  (S[$ + J] = M.x),
                  (S[te + J] = M.y),
                  (S[re + J] = M.z))
            }
          }
          if (i.st) {
            J = _.length
            for (var ce = 0; ce < J; ce += 2) {
              (_[ce] = (_[ce] - Z.x) / (K.x - Z.x)),
                (_[ce + 1] = (_[ce + 1] - Z.y) / (K.y - Z.y))
            }
          }
          var le = new E()
          return (
            i.position &&
              (le.position = new h({
                componentDatatype: a.DOUBLE,
                componentsPerAttribute: 3,
                values: y
              })),
            i.st &&
              (le.st = new h({
                componentDatatype: a.FLOAT,
                componentsPerAttribute: 2,
                values: _
              })),
            i.normal &&
              (le.normal = new h({
                componentDatatype: a.FLOAT,
                componentsPerAttribute: 3,
                values: R
              })),
            i.tangent &&
              (le.tangent = new h({
                componentDatatype: a.FLOAT,
                componentsPerAttribute: 3,
                values: v
              })),
            i.bitangent &&
              (le.bitangent = new h({
                componentDatatype: a.FLOAT,
                componentsPerAttribute: 3,
                values: S
              })),
            N &&
              (le.extrudeDirection = new h({
                componentDatatype: a.FLOAT,
                componentsPerAttribute: 3,
                values: g
              })),
            le
          )
        }
        function x (e) {
          for (
            var t = e.length / 3,
              r = y.createTypedArray(t, 6 * t),
              n = 0,
              a = 0;
            a < t;
            a++
          ) {
            var i = a,
              o = a + t,
              u = (i + 1) % t,
              s = u + t;
            (r[n++] = i),
              (r[n++] = o),
              (r[n++] = u),
              (r[n++] = u),
              (r[n++] = o),
              (r[n++] = s)
          }
          return r
        }
        function C (t) {
          var n = t.center,
            a = t.ellipsoid,
            i = t.semiMajorAxis,
            o = r.multiplyByScalar(a.geodeticSurfaceNormal(n, L), t.height, L);
          (Z.center = r.add(n, o, Z.center)),
            (Z.radius = i),
            (o = r.multiplyByScalar(
              a.geodeticSurfaceNormal(n, o),
              t.extrudedHeight,
              o
            )),
            (K.center = r.add(n, o, K.center)),
            (K.radius = i)
          var u = c.computeEllipsePositions(t, !0, !0),
            s = u.positions,
            l = u.numPts,
            f = u.outerPositions,
            h = e.union(Z, K),
            E = I(s, t, !0),
            _ = O(l),
            T = _.length
          _.length = 2 * T
          for (var R = s.length / 3, A = 0; A < T; A += 3) {
            (_[A + T] = _[A + 2] + R),
              (_[A + 1 + T] = _[A + 1] + R),
              (_[A + 2 + T] = _[A] + R)
          }
          var S = y.createTypedArray(2 * R / 3, _),
            N = new d({
              attributes: E,
              indices: S,
              primitiveType: v.TRIANGLES
            }),
            g = M(f, t)
          _ = x(f)
          var w = y.createTypedArray(2 * f.length / 3, _),
            C = new d({
              attributes: g,
              indices: w,
              primitiveType: v.TRIANGLES
            }),
            P = p.combineInstances([
              new m({ geometry: N }),
              new m({ geometry: C })
            ])
          return {
            boundingSphere: h,
            attributes: P[0].attributes,
            indices: P[0].indices
          }
        }
        function P (e, t, n, a, i) {
          N.eastNorthUpToFixedFrame(e, t, J), R.inverseTransformation(J, Q)
          var o
          for (o = 0; o < 4; ++o) r.clone(r.ZERO, ee[o])
          for (
            ee[0].x += n,
              ee[1].x -= n,
              ee[2].y += a,
              ee[3].y -= a,
              T.fromRotationZ(i, $),
              o = 0;
            o < 4;
            ++o
          ) {
            T.multiplyByVector($, ee[o], ee[o]),
              R.multiplyByPoint(J, ee[o], ee[o]),
              t.cartesianToCartographic(ee[o], te[o])
          }
          return S.fromCartographicArray(te)
        }
        function D (e) {
          e = i(e, i.EMPTY_OBJECT)
          var t = e.center,
            n = i(e.ellipsoid, l.WGS84),
            a = e.semiMajorAxis,
            u = e.semiMinorAxis,
            s = i(e.granularity, _.RADIANS_PER_DEGREE),
            c = i(e.height, 0),
            f = e.extrudedHeight,
            d = o(f) && Math.abs(c - f) > 1,
            h = i(e.vertexFormat, g.DEFAULT);
          (this._center = r.clone(t)),
            (this._semiMajorAxis = a),
            (this._semiMinorAxis = u),
            (this._ellipsoid = l.clone(n)),
            (this._rotation = i(e.rotation, 0)),
            (this._stRotation = i(e.stRotation, 0)),
            (this._height = c),
            (this._granularity = s),
            (this._vertexFormat = g.clone(h)),
            (this._extrudedHeight = i(f, c)),
            (this._extrude = d),
            (this._shadowVolume = i(e.shadowVolume, !1)),
            (this._workerName = 'createEllipseGeometry'),
            (this._rectangle = P(
              this._center,
              this._ellipsoid,
              a,
              u,
              this._rotation
            ))
        }
        var L = new r(),
          U = new r(),
          b = new r(),
          F = new r(),
          B = new t(),
          z = new T(),
          G = new A(),
          q = new r(),
          V = new r(),
          W = new r(),
          X = new n(),
          H = new r(),
          Y = new t(),
          k = new t(),
          j = new r(),
          Z = new e(),
          K = new e(),
          J = new R(),
          Q = new R(),
          $ = new T(),
          ee = [new r(), new r(), new r(), new r()],
          te = [new n(), new n(), new n(), new n()];
        (D.packedLength =
          r.packedLength +
          l.packedLength +
          g.packedLength +
          S.packedLength +
          9),
          (D.pack = function (e, t, n) {
            return (
              (n = i(n, 0)),
              r.pack(e._center, t, n),
              (n += r.packedLength),
              l.pack(e._ellipsoid, t, n),
              (n += l.packedLength),
              g.pack(e._vertexFormat, t, n),
              (n += g.packedLength),
              S.pack(e._rectangle, t, n),
              (n += S.packedLength),
              (t[n++] = e._semiMajorAxis),
              (t[n++] = e._semiMinorAxis),
              (t[n++] = e._rotation),
              (t[n++] = e._stRotation),
              (t[n++] = e._height),
              (t[n++] = e._granularity),
              (t[n++] = e._extrudedHeight),
              (t[n++] = e._extrude ? 1 : 0),
              (t[n] = e._shadowVolume ? 1 : 0),
              t
            )
          })
        var re = new r(),
          ne = new l(),
          ae = new g(),
          ie = new S(),
          oe = {
            center: re,
            ellipsoid: ne,
            vertexFormat: ae,
            semiMajorAxis: void 0,
            semiMinorAxis: void 0,
            rotation: void 0,
            stRotation: void 0,
            height: void 0,
            granularity: void 0,
            extrudedHeight: void 0,
            shadowVolume: void 0
          }
        return (
          (D.unpack = function (e, t, n) {
            t = i(t, 0)
            var a = r.unpack(e, t, re)
            t += r.packedLength
            var u = l.unpack(e, t, ne)
            t += l.packedLength
            var s = g.unpack(e, t, ae)
            t += g.packedLength
            var c = S.unpack(e, t, ie)
            t += S.packedLength
            var f = e[t++],
              d = e[t++],
              h = e[t++],
              E = e[t++],
              m = e[t++],
              p = e[t++],
              y = e[t++],
              _ = e[t++] === 1,
              T = e[t] === 1
            return o(n)
              ? ((n._center = r.clone(a, n._center)),
                (n._ellipsoid = l.clone(u, n._ellipsoid)),
                (n._vertexFormat = g.clone(s, n._vertexFormat)),
                (n._semiMajorAxis = f),
                (n._semiMinorAxis = d),
                (n._rotation = h),
                (n._stRotation = E),
                (n._height = m),
                (n._granularity = p),
                (n._extrudedHeight = y),
                (n._extrude = _),
                (n._shadowVolume = T),
                (n._rectangle = S.clone(c)),
                n)
              : ((oe.height = m),
                (oe.extrudedHeight = y),
                (oe.granularity = p),
                (oe.stRotation = E),
                (oe.rotation = h),
                (oe.semiMajorAxis = f),
                (oe.semiMinorAxis = d),
                (oe.shadowVolume = T),
                new D(oe))
          }),
          (D.createGeometry = function (e) {
            if (!(e._semiMajorAxis <= 0 || e._semiMinorAxis <= 0)) {
              e._center = e._ellipsoid.scaleToGeodeticSurface(
                e._center,
                e._center
              )
              var t,
                r = {
                  center: e._center,
                  semiMajorAxis: e._semiMajorAxis,
                  semiMinorAxis: e._semiMinorAxis,
                  ellipsoid: e._ellipsoid,
                  rotation: e._rotation,
                  height: e._height,
                  extrudedHeight: e._extrudedHeight,
                  granularity: e._granularity,
                  vertexFormat: e._vertexFormat,
                  stRotation: e._stRotation
                }
              return (
                e._extrude
                  ? ((r.extrudedHeight = Math.min(
                      e._extrudedHeight,
                      e._height
                    )),
                    (r.height = Math.max(e._extrudedHeight, e._height)),
                    (r.shadowVolume = e._shadowVolume),
                    (t = C(r)))
                  : (t = w(r)),
                new d({
                  attributes: t.attributes,
                  indices: t.indices,
                  primitiveType: v.TRIANGLES,
                  boundingSphere: t.boundingSphere
                })
              )
            }
          }),
          (D.createShadowVolume = function (e, t, r) {
            var n = e._granularity,
              a = e._ellipsoid,
              i = t(n, a),
              o = r(n, a)
            return new D({
              center: e._center,
              semiMajorAxis: e._semiMajorAxis,
              semiMinorAxis: e._semiMinorAxis,
              ellipsoid: a,
              rotation: e._rotation,
              stRotation: e._stRotation,
              granularity: n,
              extrudedHeight: i,
              height: o,
              vertexFormat: g.POSITION_ONLY,
              shadowVolume: !0
            })
          }),
          u(D.prototype, {
            rectangle: {
              get: function () {
                return this._rectangle
              }
            }
          }),
          D
        )
      }
    ),
    define(
      'Core/CircleGeometry',
      [
        './Cartesian3',
        './Check',
        './defaultValue',
        './defined',
        './defineProperties',
        './EllipseGeometry',
        './Ellipsoid',
        './VertexFormat'
      ],
      function (e, t, r, n, a, i, o, u) {
        'use strict'
        function s (e) {
          e = r(e, r.EMPTY_OBJECT)
          var t = e.radius,
            n = {
              center: e.center,
              semiMajorAxis: t,
              semiMinorAxis: t,
              ellipsoid: e.ellipsoid,
              height: e.height,
              extrudedHeight: e.extrudedHeight,
              granularity: e.granularity,
              vertexFormat: e.vertexFormat,
              stRotation: e.stRotation,
              shadowVolume: e.shadowVolume
            };
          (this._ellipseGeometry = new i(n)),
            (this._workerName = 'createCircleGeometry')
        }
        (s.packedLength = i.packedLength),
          (s.pack = function (e, t, r) {
            return i.pack(e._ellipseGeometry, t, r)
          })
        var c = new i({ center: new e(), semiMajorAxis: 1, semiMinorAxis: 1 }),
          l = {
            center: new e(),
            radius: void 0,
            ellipsoid: o.clone(o.UNIT_SPHERE),
            height: void 0,
            extrudedHeight: void 0,
            granularity: void 0,
            vertexFormat: new u(),
            stRotation: void 0,
            semiMajorAxis: void 0,
            semiMinorAxis: void 0,
            shadowVolume: void 0
          }
        return (
          (s.unpack = function (t, r, a) {
            var f = i.unpack(t, r, c)
            return (
              (l.center = e.clone(f._center, l.center)),
              (l.ellipsoid = o.clone(f._ellipsoid, l.ellipsoid)),
              (l.height = f._height),
              (l.extrudedHeight = f._extrudedHeight),
              (l.granularity = f._granularity),
              (l.vertexFormat = u.clone(f._vertexFormat, l.vertexFormat)),
              (l.stRotation = f._stRotation),
              (l.shadowVolume = f._shadowVolume),
              n(a)
                ? ((l.semiMajorAxis = f._semiMajorAxis),
                  (l.semiMinorAxis = f._semiMinorAxis),
                  (a._ellipseGeometry = new i(l)),
                  a)
                : ((l.radius = f._semiMajorAxis), new s(l))
            )
          }),
          (s.createGeometry = function (e) {
            return i.createGeometry(e._ellipseGeometry)
          }),
          (s.createShadowVolume = function (e, t, r) {
            var n = e._ellipseGeometry._granularity,
              a = e._ellipseGeometry._ellipsoid,
              i = t(n, a),
              o = r(n, a)
            return new s({
              center: e._ellipseGeometry._center,
              radius: e._ellipseGeometry._semiMajorAxis,
              ellipsoid: a,
              stRotation: e._ellipseGeometry._stRotation,
              granularity: n,
              extrudedHeight: i,
              height: o,
              vertexFormat: u.POSITION_ONLY,
              shadowVolume: !0
            })
          }),
          a(s.prototype, {
            rectangle: {
              get: function () {
                return this._ellipseGeometry.rectangle
              }
            }
          }),
          s
        )
      }
    ),
    define(
      'Workers/createCircleGeometry',
      [
        '../Core/Cartesian3',
        '../Core/CircleGeometry',
        '../Core/defined',
        '../Core/Ellipsoid'
      ],
      function (e, t, r, n) {
        'use strict'
        function a (a, i) {
          return (
            r(i) && (a = t.unpack(a, i)),
            (a._ellipseGeometry._center = e.clone(a._ellipseGeometry._center)),
            (a._ellipseGeometry._ellipsoid = n.clone(
              a._ellipseGeometry._ellipsoid
            )),
            t.createGeometry(a)
          )
        }
        return a
      }
    )
})()
