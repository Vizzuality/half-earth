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
      var a = {};
      return (
        (a.typeOf = {}),
        (a.defined = function(r, a) {
          if (!e(a)) throw new t(n(r));
        }),
        (a.typeOf.func = function(e, n) {
          if ("function" != typeof n) throw new t(r(typeof n, "function", e));
        }),
        (a.typeOf.string = function(e, n) {
          if ("string" != typeof n) throw new t(r(typeof n, "string", e));
        }),
        (a.typeOf.number = function(e, n) {
          if ("number" != typeof n) throw new t(r(typeof n, "number", e));
        }),
        (a.typeOf.number.lessThan = function(e, n, r) {
          if ((a.typeOf.number(e, n), n >= r))
            throw new t(
              "Expected " +
                e +
                " to be less than " +
                r +
                ", actual value was " +
                n
            );
        }),
        (a.typeOf.number.lessThanOrEquals = function(e, n, r) {
          if ((a.typeOf.number(e, n), n > r))
            throw new t(
              "Expected " +
                e +
                " to be less than or equal to " +
                r +
                ", actual value was " +
                n
            );
        }),
        (a.typeOf.number.greaterThan = function(e, n, r) {
          if ((a.typeOf.number(e, n), n <= r))
            throw new t(
              "Expected " +
                e +
                " to be greater than " +
                r +
                ", actual value was " +
                n
            );
        }),
        (a.typeOf.number.greaterThanOrEquals = function(e, n, r) {
          if ((a.typeOf.number(e, n), n < r))
            throw new t(
              "Expected " +
                e +
                " to be greater than or equal to" +
                r +
                ", actual value was " +
                n
            );
        }),
        (a.typeOf.object = function(e, n) {
          if ("object" != typeof n) throw new t(r(typeof n, "object", e));
        }),
        (a.typeOf.bool = function(e, n) {
          if ("boolean" != typeof n) throw new t(r(typeof n, "boolean", e));
        }),
        (a.typeOf.number.equals = function(e, n, r, i) {
          if ((a.typeOf.number(e, r), a.typeOf.number(n, i), r !== i))
            throw new t(
              e +
                " must be equal to " +
                n +
                ", the actual values are " +
                r +
                " and " +
                i
            );
        }),
        a
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
          (a.sign = function(e) {
            return e > 0 ? 1 : e < 0 ? -1 : 0;
          }),
          (a.signNotZero = function(e) {
            return e < 0 ? -1 : 1;
          }),
          (a.toSNorm = function(e, n) {
            return (
              (n = t(n, 255)), Math.round((0.5 * a.clamp(e, -1, 1) + 0.5) * n)
            );
          }),
          (a.fromSNorm = function(e, n) {
            return (n = t(n, 255)), a.clamp(e, 0, n) / n * 2 - 1;
          }),
          (a.sinh = function(e) {
            var t = Math.pow(Math.E, e),
              n = Math.pow(Math.E, -1 * e);
            return 0.5 * (t - n);
          }),
          (a.cosh = function(e) {
            var t = Math.pow(Math.E, e),
              n = Math.pow(Math.E, -1 * e);
            return 0.5 * (t + n);
          }),
          (a.lerp = function(e, t, n) {
            return (1 - n) * e + n * t;
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
          (a.toRadians = function(e) {
            return e * a.RADIANS_PER_DEGREE;
          }),
          (a.toDegrees = function(e) {
            return e * a.DEGREES_PER_RADIAN;
          }),
          (a.convertLongitudeRange = function(e) {
            var t = a.TWO_PI,
              n = e - Math.floor(e / t) * t;
            return n < -Math.PI ? n + t : n >= Math.PI ? n - t : n;
          }),
          (a.clampToLatitudeRange = function(e) {
            return a.clamp(e, -1 * a.PI_OVER_TWO, a.PI_OVER_TWO);
          }),
          (a.negativePiToPi = function(e) {
            return a.zeroToTwoPi(e + a.PI) - a.PI;
          }),
          (a.zeroToTwoPi = function(e) {
            var t = a.mod(e, a.TWO_PI);
            return Math.abs(t) < a.EPSILON14 && Math.abs(e) > a.EPSILON14
              ? a.TWO_PI
              : t;
          }),
          (a.mod = function(e, t) {
            return (e % t + t) % t;
          }),
          (a.equalsEpsilon = function(e, n, r, a) {
            a = t(a, r);
            var i = Math.abs(e - n);
            return i <= a || i <= r * Math.max(Math.abs(e), Math.abs(n));
          });
        var i = [1];
        (a.factorial = function(e) {
          var t = i.length;
          if (e >= t) for (var n = i[t - 1], r = t; r <= e; r++) i.push(n * r);
          return i[e];
        }),
          (a.incrementWrap = function(e, n, r) {
            return (r = t(r, 0)), ++e, e > n && (e = r), e;
          }),
          (a.isPowerOfTwo = function(e) {
            return 0 !== e && 0 === (e & (e - 1));
          }),
          (a.nextPowerOfTwo = function(e) {
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
          (a.clamp = function(e, t, n) {
            return e < t ? t : e > n ? n : e;
          });
        var o = new e();
        return (
          (a.setRandomNumberSeed = function(t) {
            o = new e(t);
          }),
          (a.nextRandomNumber = function() {
            return o.random();
          }),
          (a.randomBetween = function(e, t) {
            return a.nextRandomNumber() * (t - e) + e;
          }),
          (a.acosClamped = function(e) {
            return Math.acos(a.clamp(e, -1, 1));
          }),
          (a.asinClamped = function(e) {
            return Math.asin(a.clamp(e, -1, 1));
          }),
          (a.chordLength = function(e, t) {
            return 2 * t * Math.sin(0.5 * e);
          }),
          (a.logBase = function(e, t) {
            return Math.log(e) / Math.log(t);
          }),
          (a.fog = function(e, t) {
            var n = e * t;
            return 1 - Math.exp(-(n * n));
          }),
          a
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
      function(e, t, n, r, a, i) {
        "use strict";
        function o(e, n, r) {
          (this.x = t(e, 0)), (this.y = t(n, 0)), (this.z = t(r, 0));
        }
        (o.fromSpherical = function(e, r) {
          n(r) || (r = new o());
          var a = e.clock,
            i = e.cone,
            u = t(e.magnitude, 1),
            s = u * Math.sin(i);
          return (
            (r.x = s * Math.cos(a)),
            (r.y = s * Math.sin(a)),
            (r.z = u * Math.cos(i)),
            r
          );
        }),
          (o.fromElements = function(e, t, r, a) {
            return n(a) ? ((a.x = e), (a.y = t), (a.z = r), a) : new o(e, t, r);
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
          (o.unpack = function(e, r, a) {
            return (
              (r = t(r, 0)),
              n(a) || (a = new o()),
              (a.x = e[r++]),
              (a.y = e[r++]),
              (a.z = e[r]),
              a
            );
          }),
          (o.packArray = function(e, t) {
            var r = e.length;
            n(t) ? (t.length = 3 * r) : (t = new Array(3 * r));
            for (var a = 0; a < r; ++a) o.pack(e[a], t, 3 * a);
            return t;
          }),
          (o.unpackArray = function(e, t) {
            var r = e.length;
            n(t) ? (t.length = r / 3) : (t = new Array(r / 3));
            for (var a = 0; a < r; a += 3) {
              var i = a / 3;
              t[i] = o.unpack(e, a, t[i]);
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
        var s = new o();
        o.lerp = function(e, t, n, r) {
          return (
            o.multiplyByScalar(t, n, s),
            (r = o.multiplyByScalar(e, 1 - n, r)),
            o.add(s, r, r)
          );
        };
        var c = new o(),
          l = new o();
        o.angleBetween = function(e, t) {
          o.normalize(e, c), o.normalize(t, l);
          var n = o.dot(c, l),
            r = o.magnitude(o.cross(c, l, c));
          return Math.atan2(r, n);
        };
        var f = new o();
        (o.mostOrthogonalAxis = function(e, t) {
          var n = o.normalize(e, f);
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
          (o.equalsEpsilon = function(e, t, r, a) {
            return (
              e === t ||
              (n(e) &&
                n(t) &&
                i.equalsEpsilon(e.x, t.x, r, a) &&
                i.equalsEpsilon(e.y, t.y, r, a) &&
                i.equalsEpsilon(e.z, t.z, r, a))
            );
          }),
          (o.cross = function(e, t, n) {
            var r = e.x,
              a = e.y,
              i = e.z,
              o = t.x,
              u = t.y,
              s = t.z,
              c = a * s - i * u,
              l = i * o - r * s,
              f = r * u - a * o;
            return (n.x = c), (n.y = l), (n.z = f), n;
          }),
          (o.fromDegrees = function(e, t, n, r, a) {
            return (
              (e = i.toRadians(e)),
              (t = i.toRadians(t)),
              o.fromRadians(e, t, n, r, a)
            );
          });
        var d = new o(),
          h = new o(),
          E = new o(40680631590769, 40680631590769, 40408299984661.445);
        return (
          (o.fromRadians = function(e, r, a, i, u) {
            a = t(a, 0);
            var s = n(i) ? i.radiiSquared : E,
              c = Math.cos(r);
            (d.x = c * Math.cos(e)),
              (d.y = c * Math.sin(e)),
              (d.z = Math.sin(r)),
              (d = o.normalize(d, d)),
              o.multiplyComponents(s, d, h);
            var l = Math.sqrt(o.dot(d, h));
            return (
              (h = o.divideByScalar(h, l, h)),
              (d = o.multiplyByScalar(d, a, d)),
              n(u) || (u = new o()),
              o.add(h, d, u)
            );
          }),
          (o.fromDegreesArray = function(e, t, r) {
            var a = e.length;
            n(r) ? (r.length = a / 2) : (r = new Array(a / 2));
            for (var i = 0; i < a; i += 2) {
              var u = e[i],
                s = e[i + 1],
                c = i / 2;
              r[c] = o.fromDegrees(u, s, 0, t, r[c]);
            }
            return r;
          }),
          (o.fromRadiansArray = function(e, t, r) {
            var a = e.length;
            n(r) ? (r.length = a / 2) : (r = new Array(a / 2));
            for (var i = 0; i < a; i += 2) {
              var u = e[i],
                s = e[i + 1],
                c = i / 2;
              r[c] = o.fromRadians(u, s, 0, t, r[c]);
            }
            return r;
          }),
          (o.fromDegreesArrayHeights = function(e, t, r) {
            var a = e.length;
            n(r) ? (r.length = a / 3) : (r = new Array(a / 3));
            for (var i = 0; i < a; i += 3) {
              var u = e[i],
                s = e[i + 1],
                c = e[i + 2],
                l = i / 3;
              r[l] = o.fromDegrees(u, s, c, t, r[l]);
            }
            return r;
          }),
          (o.fromRadiansArrayHeights = function(e, t, r) {
            var a = e.length;
            n(r) ? (r.length = a / 3) : (r = new Array(a / 3));
            for (var i = 0; i < a; i += 3) {
              var u = e[i],
                s = e[i + 1],
                c = e[i + 2],
                l = i / 3;
              r[l] = o.fromRadians(u, s, c, t, r[l]);
            }
            return r;
          }),
          (o.ZERO = a(new o(0, 0, 0))),
          (o.UNIT_X = a(new o(1, 0, 0))),
          (o.UNIT_Y = a(new o(0, 1, 0))),
          (o.UNIT_Z = a(new o(0, 0, 1))),
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
    define("Core/Intersect", ["./freezeObject"], function(e) {
      "use strict";
      var t = { OUTSIDE: -1, INTERSECTING: 0, INSIDE: 1 };
      return e(t);
    }),
    define(
      "Core/AxisAlignedBoundingBox",
      ["./Cartesian3", "./Check", "./defaultValue", "./defined", "./Intersect"],
      function(e, t, n, r, a) {
        "use strict";
        function i(t, a, i) {
          (this.minimum = e.clone(n(t, e.ZERO))),
            (this.maximum = e.clone(n(a, e.ZERO))),
            r(i)
              ? (i = e.clone(i))
              : ((i = e.add(this.minimum, this.maximum, new e())),
                e.multiplyByScalar(i, 0.5, i)),
            (this.center = i);
        }
        (i.fromPoints = function(t, n) {
          if ((r(n) || (n = new i()), !r(t) || 0 === t.length))
            return (
              (n.minimum = e.clone(e.ZERO, n.minimum)),
              (n.maximum = e.clone(e.ZERO, n.maximum)),
              (n.center = e.clone(e.ZERO, n.center)),
              n
            );
          for (
            var a = t[0].x,
              o = t[0].y,
              u = t[0].z,
              s = t[0].x,
              c = t[0].y,
              l = t[0].z,
              f = t.length,
              d = 1;
            d < f;
            d++
          ) {
            var h = t[d],
              E = h.x,
              m = h.y,
              _ = h.z;
            (a = Math.min(E, a)),
              (s = Math.max(E, s)),
              (o = Math.min(m, o)),
              (c = Math.max(m, c)),
              (u = Math.min(_, u)),
              (l = Math.max(_, l));
          }
          var p = n.minimum;
          (p.x = a), (p.y = o), (p.z = u);
          var y = n.maximum;
          (y.x = s), (y.y = c), (y.z = l);
          var T = e.add(p, y, n.center);
          return e.multiplyByScalar(T, 0.5, T), n;
        }),
          (i.clone = function(t, n) {
            if (r(t))
              return r(n)
                ? ((n.minimum = e.clone(t.minimum, n.minimum)),
                  (n.maximum = e.clone(t.maximum, n.maximum)),
                  (n.center = e.clone(t.center, n.center)),
                  n)
                : new i(t.minimum, t.maximum);
          }),
          (i.equals = function(t, n) {
            return (
              t === n ||
              (r(t) &&
                r(n) &&
                e.equals(t.center, n.center) &&
                e.equals(t.minimum, n.minimum) &&
                e.equals(t.maximum, n.maximum))
            );
          });
        var o = new e();
        return (
          (i.intersectPlane = function(t, n) {
            o = e.subtract(t.maximum, t.minimum, o);
            var r = e.multiplyByScalar(o, 0.5, o),
              i = n.normal,
              u =
                r.x * Math.abs(i.x) + r.y * Math.abs(i.y) + r.z * Math.abs(i.z),
              s = e.dot(t.center, i) + n.distance;
            return s - u > 0
              ? a.INSIDE
              : s + u < 0 ? a.OUTSIDE : a.INTERSECTING;
          }),
          (i.prototype.clone = function(e) {
            return i.clone(this, e);
          }),
          (i.prototype.intersectPlane = function(e) {
            return i.intersectPlane(this, e);
          }),
          (i.prototype.equals = function(e) {
            return i.equals(this, e);
          }),
          i
        );
      }
    ),
    define(
      "Core/scaleToGeodeticSurface",
      ["./Cartesian3", "./defined", "./DeveloperError", "./Math"],
      function(e, t, n, r) {
        "use strict";
        function a(n, a, u, s, c) {
          var l = n.x,
            f = n.y,
            d = n.z,
            h = a.x,
            E = a.y,
            m = a.z,
            _ = l * l * h * h,
            p = f * f * E * E,
            y = d * d * m * m,
            T = _ + p + y,
            R = Math.sqrt(1 / T),
            A = e.multiplyByScalar(n, R, i);
          if (T < s) return isFinite(R) ? e.clone(A, c) : void 0;
          var S = u.x,
            N = u.y,
            v = u.z,
            M = o;
          (M.x = A.x * S * 2), (M.y = A.y * N * 2), (M.z = A.z * v * 2);
          var g,
            O,
            I,
            w,
            C,
            x,
            P,
            U,
            D,
            L,
            F,
            B = (1 - R) * e.magnitude(n) / (0.5 * e.magnitude(M)),
            b = 0;
          do {
            (B -= b),
              (I = 1 / (1 + B * S)),
              (w = 1 / (1 + B * N)),
              (C = 1 / (1 + B * v)),
              (x = I * I),
              (P = w * w),
              (U = C * C),
              (D = x * I),
              (L = P * w),
              (F = U * C),
              (g = _ * x + p * P + y * U - 1),
              (O = _ * D * S + p * L * N + y * F * v);
            var z = -2 * O;
            b = g / z;
          } while (Math.abs(g) > r.EPSILON12);
          return t(c)
            ? ((c.x = l * I), (c.y = f * w), (c.z = d * C), c)
            : new e(l * I, f * w, d * C);
        }
        var i = new e(),
          o = new e();
        return a;
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
      function(e, t, n, r, a, i, o) {
        "use strict";
        function u(e, t, r) {
          (this.longitude = n(e, 0)),
            (this.latitude = n(t, 0)),
            (this.height = n(r, 0));
        }
        (u.fromRadians = function(e, t, a, i) {
          return (
            (a = n(a, 0)),
            r(i)
              ? ((i.longitude = e), (i.latitude = t), (i.height = a), i)
              : new u(e, t, a)
          );
        }),
          (u.fromDegrees = function(e, t, n, r) {
            return (
              (e = i.toRadians(e)),
              (t = i.toRadians(t)),
              u.fromRadians(e, t, n, r)
            );
          });
        var s = new e(),
          c = new e(),
          l = new e(),
          f = new e(1 / 6378137, 1 / 6378137, 1 / 6356752.314245179),
          d = new e(
            1 / 40680631590769,
            1 / 40680631590769,
            1 / 40408299984661.445
          ),
          h = i.EPSILON1;
        return (
          (u.fromCartesian = function(t, n, a) {
            var E = r(n) ? n.oneOverRadii : f,
              m = r(n) ? n.oneOverRadiiSquared : d,
              _ = r(n) ? n._centerToleranceSquared : h,
              p = o(t, E, m, _, c);
            if (r(p)) {
              var y = e.multiplyComponents(p, m, s);
              y = e.normalize(y, y);
              var T = e.subtract(t, p, l),
                R = Math.atan2(y.y, y.x),
                A = Math.asin(y.z),
                S = i.sign(e.dot(T, t)) * e.magnitude(T);
              return r(a)
                ? ((a.longitude = R), (a.latitude = A), (a.height = S), a)
                : new u(R, A, S);
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
          (u.ZERO = a(new u(0, 0, 0))),
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
      function(e, t, n, r, a, i, o, u, s, c) {
        "use strict";
        function l(t, n, a, i) {
          (n = r(n, 0)),
            (a = r(a, 0)),
            (i = r(i, 0)),
            (t._radii = new e(n, a, i)),
            (t._radiiSquared = new e(n * n, a * a, i * i)),
            (t._radiiToTheFourth = new e(
              n * n * n * n,
              a * a * a * a,
              i * i * i * i
            )),
            (t._oneOverRadii = new e(
              0 === n ? 0 : 1 / n,
              0 === a ? 0 : 1 / a,
              0 === i ? 0 : 1 / i
            )),
            (t._oneOverRadiiSquared = new e(
              0 === n ? 0 : 1 / (n * n),
              0 === a ? 0 : 1 / (a * a),
              0 === i ? 0 : 1 / (i * i)
            )),
            (t._minimumRadius = Math.min(n, a, i)),
            (t._maximumRadius = Math.max(n, a, i)),
            (t._centerToleranceSquared = s.EPSILON1),
            0 !== t._radiiSquared.z &&
              (t._squaredXOverSquaredZ = t._radiiSquared.x / t._radiiSquared.z);
        }
        function f(e, t, n) {
          (this._radii = void 0),
            (this._radiiSquared = void 0),
            (this._radiiToTheFourth = void 0),
            (this._oneOverRadii = void 0),
            (this._oneOverRadiiSquared = void 0),
            (this._minimumRadius = void 0),
            (this._maximumRadius = void 0),
            (this._centerToleranceSquared = void 0),
            (this._squaredXOverSquaredZ = void 0),
            l(this, e, t, n);
        }
        i(f.prototype, {
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
          (f.clone = function(t, n) {
            if (a(t)) {
              var r = t._radii;
              return a(n)
                ? (e.clone(r, n._radii),
                  e.clone(t._radiiSquared, n._radiiSquared),
                  e.clone(t._radiiToTheFourth, n._radiiToTheFourth),
                  e.clone(t._oneOverRadii, n._oneOverRadii),
                  e.clone(t._oneOverRadiiSquared, n._oneOverRadiiSquared),
                  (n._minimumRadius = t._minimumRadius),
                  (n._maximumRadius = t._maximumRadius),
                  (n._centerToleranceSquared = t._centerToleranceSquared),
                  n)
                : new f(r.x, r.y, r.z);
            }
          }),
          (f.fromCartesian3 = function(e, t) {
            return a(t) || (t = new f()), a(e) ? (l(t, e.x, e.y, e.z), t) : t;
          }),
          (f.WGS84 = u(new f(6378137, 6378137, 6356752.314245179))),
          (f.UNIT_SPHERE = u(new f(1, 1, 1))),
          (f.MOON = u(new f(s.LUNAR_RADIUS, s.LUNAR_RADIUS, s.LUNAR_RADIUS))),
          (f.prototype.clone = function(e) {
            return f.clone(this, e);
          }),
          (f.packedLength = e.packedLength),
          (f.pack = function(t, n, a) {
            return (a = r(a, 0)), e.pack(t._radii, n, a), n;
          }),
          (f.unpack = function(t, n, a) {
            n = r(n, 0);
            var i = e.unpack(t, n);
            return f.fromCartesian3(i, a);
          }),
          (f.prototype.geocentricSurfaceNormal = e.normalize),
          (f.prototype.geodeticSurfaceNormalCartographic = function(t, n) {
            var r = t.longitude,
              i = t.latitude,
              o = Math.cos(i),
              u = o * Math.cos(r),
              s = o * Math.sin(r),
              c = Math.sin(i);
            return (
              a(n) || (n = new e()),
              (n.x = u),
              (n.y = s),
              (n.z = c),
              e.normalize(n, n)
            );
          }),
          (f.prototype.geodeticSurfaceNormal = function(t, n) {
            return (
              a(n) || (n = new e()),
              (n = e.multiplyComponents(t, this._oneOverRadiiSquared, n)),
              e.normalize(n, n)
            );
          });
        var d = new e(),
          h = new e();
        (f.prototype.cartographicToCartesian = function(t, n) {
          var r = d,
            i = h;
          this.geodeticSurfaceNormalCartographic(t, r),
            e.multiplyComponents(this._radiiSquared, r, i);
          var o = Math.sqrt(e.dot(r, i));
          return (
            e.divideByScalar(i, o, i),
            e.multiplyByScalar(r, t.height, r),
            a(n) || (n = new e()),
            e.add(i, r, n)
          );
        }),
          (f.prototype.cartographicArrayToCartesianArray = function(e, t) {
            var n = e.length;
            a(t) ? (t.length = n) : (t = new Array(n));
            for (var r = 0; r < n; r++)
              t[r] = this.cartographicToCartesian(e[r], t[r]);
            return t;
          });
        var E = new e(),
          m = new e(),
          _ = new e();
        return (
          (f.prototype.cartesianToCartographic = function(n, r) {
            var i = this.scaleToGeodeticSurface(n, m);
            if (a(i)) {
              var o = this.geodeticSurfaceNormal(i, E),
                u = e.subtract(n, i, _),
                c = Math.atan2(o.y, o.x),
                l = Math.asin(o.z),
                f = s.sign(e.dot(u, n)) * e.magnitude(u);
              return a(r)
                ? ((r.longitude = c), (r.latitude = l), (r.height = f), r)
                : new t(c, l, f);
            }
          }),
          (f.prototype.cartesianArrayToCartographicArray = function(e, t) {
            var n = e.length;
            a(t) ? (t.length = n) : (t = new Array(n));
            for (var r = 0; r < n; ++r)
              t[r] = this.cartesianToCartographic(e[r], t[r]);
            return t;
          }),
          (f.prototype.scaleToGeodeticSurface = function(e, t) {
            return c(
              e,
              this._oneOverRadii,
              this._oneOverRadiiSquared,
              this._centerToleranceSquared,
              t
            );
          }),
          (f.prototype.scaleToGeocentricSurface = function(t, n) {
            a(n) || (n = new e());
            var r = t.x,
              i = t.y,
              o = t.z,
              u = this._oneOverRadiiSquared,
              s = 1 / Math.sqrt(r * r * u.x + i * i * u.y + o * o * u.z);
            return e.multiplyByScalar(t, s, n);
          }),
          (f.prototype.transformPositionToScaledSpace = function(t, n) {
            return (
              a(n) || (n = new e()),
              e.multiplyComponents(t, this._oneOverRadii, n)
            );
          }),
          (f.prototype.transformPositionFromScaledSpace = function(t, n) {
            return (
              a(n) || (n = new e()), e.multiplyComponents(t, this._radii, n)
            );
          }),
          (f.prototype.equals = function(t) {
            return this === t || (a(t) && e.equals(this._radii, t._radii));
          }),
          (f.prototype.toString = function() {
            return this._radii.toString();
          }),
          (f.prototype.getSurfaceNormalIntersectionWithZAxis = function(
            t,
            n,
            i
          ) {
            n = r(n, 0);
            var o = this._squaredXOverSquaredZ;
            if (
              (a(i) || (i = new e()),
              (i.x = 0),
              (i.y = 0),
              (i.z = t.z * (1 - o)),
              !(Math.abs(i.z) >= this._radii.z - n))
            )
              return i;
          }),
          f
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
      function(e, t, n, r, a, i, o) {
        "use strict";
        function u(e) {
          (this._ellipsoid = n(e, o.WGS84)),
            (this._semimajorAxis = this._ellipsoid.maximumRadius),
            (this._oneOverSemimajorAxis = 1 / this._semimajorAxis);
        }
        return (
          a(u.prototype, {
            ellipsoid: {
              get: function() {
                return this._ellipsoid;
              }
            }
          }),
          (u.prototype.project = function(t, n) {
            var a = this._semimajorAxis,
              i = t.longitude * a,
              o = t.latitude * a,
              u = t.height;
            return r(n) ? ((n.x = i), (n.y = o), (n.z = u), n) : new e(i, o, u);
          }),
          (u.prototype.unproject = function(e, n) {
            var a = this._oneOverSemimajorAxis,
              i = e.x * a,
              o = e.y * a,
              u = e.z;
            return r(n)
              ? ((n.longitude = i), (n.latitude = o), (n.height = u), n)
              : new t(i, o, u);
          }),
          u
        );
      }
    ),
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
      function(e, t, n, r, a, i, o, u) {
        "use strict";
        function s(e, t, r, a, i, o, u, s, c) {
          (this[0] = n(e, 0)),
            (this[1] = n(a, 0)),
            (this[2] = n(u, 0)),
            (this[3] = n(t, 0)),
            (this[4] = n(i, 0)),
            (this[5] = n(s, 0)),
            (this[6] = n(r, 0)),
            (this[7] = n(o, 0)),
            (this[8] = n(c, 0));
        }
        function c(e) {
          for (var t = 0, n = 0; n < 9; ++n) {
            var r = e[n];
            t += r * r;
          }
          return Math.sqrt(t);
        }
        function l(e) {
          for (var t = 0, n = 0; n < 3; ++n) {
            var r = e[s.getElementIndex(m[n], E[n])];
            t += 2 * r * r;
          }
          return Math.sqrt(t);
        }
        function f(e, t) {
          for (var n = u.EPSILON15, r = 0, a = 1, i = 0; i < 3; ++i) {
            var o = Math.abs(e[s.getElementIndex(m[i], E[i])]);
            o > r && ((a = i), (r = o));
          }
          var c = 1,
            l = 0,
            f = E[a],
            d = m[a];
          if (Math.abs(e[s.getElementIndex(d, f)]) > n) {
            var h,
              _ = e[s.getElementIndex(d, d)],
              p = e[s.getElementIndex(f, f)],
              y = e[s.getElementIndex(d, f)],
              T = (_ - p) / 2 / y;
            (h =
              T < 0
                ? -1 / (-T + Math.sqrt(1 + T * T))
                : 1 / (T + Math.sqrt(1 + T * T))),
              (c = 1 / Math.sqrt(1 + h * h)),
              (l = h * c);
          }
          return (
            (t = s.clone(s.IDENTITY, t)),
            (t[s.getElementIndex(f, f)] = t[s.getElementIndex(d, d)] = c),
            (t[s.getElementIndex(d, f)] = l),
            (t[s.getElementIndex(f, d)] = -l),
            t
          );
        }
        (s.packedLength = 9),
          (s.pack = function(e, t, r) {
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
          (s.unpack = function(e, t, a) {
            return (
              (t = n(t, 0)),
              r(a) || (a = new s()),
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
            );
          }),
          (s.clone = function(e, t) {
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
                : new s(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]);
          }),
          (s.fromArray = function(e, t, a) {
            return (
              (t = n(t, 0)),
              r(a) || (a = new s()),
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
            );
          }),
          (s.fromColumnMajorArray = function(e, t) {
            return s.clone(e, t);
          }),
          (s.fromRowMajorArray = function(e, t) {
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
              : new s(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]);
          }),
          (s.fromQuaternion = function(e, t) {
            var n = e.x * e.x,
              a = e.x * e.y,
              i = e.x * e.z,
              o = e.x * e.w,
              u = e.y * e.y,
              c = e.y * e.z,
              l = e.y * e.w,
              f = e.z * e.z,
              d = e.z * e.w,
              h = e.w * e.w,
              E = n - u - f + h,
              m = 2 * (a - d),
              _ = 2 * (i + l),
              p = 2 * (a + d),
              y = -n + u - f + h,
              T = 2 * (c - o),
              R = 2 * (i - l),
              A = 2 * (c + o),
              S = -n - u + f + h;
            return r(t)
              ? ((t[0] = E),
                (t[1] = p),
                (t[2] = R),
                (t[3] = m),
                (t[4] = y),
                (t[5] = A),
                (t[6] = _),
                (t[7] = T),
                (t[8] = S),
                t)
              : new s(E, m, _, p, y, T, R, A, S);
          }),
          (s.fromHeadingPitchRoll = function(e, t) {
            var n = Math.cos(-e.pitch),
              a = Math.cos(-e.heading),
              i = Math.cos(e.roll),
              o = Math.sin(-e.pitch),
              u = Math.sin(-e.heading),
              c = Math.sin(e.roll),
              l = n * a,
              f = -i * u + c * o * a,
              d = c * u + i * o * a,
              h = n * u,
              E = i * a + c * o * u,
              m = -c * a + i * o * u,
              _ = -o,
              p = c * n,
              y = i * n;
            return r(t)
              ? ((t[0] = l),
                (t[1] = h),
                (t[2] = _),
                (t[3] = f),
                (t[4] = E),
                (t[5] = p),
                (t[6] = d),
                (t[7] = m),
                (t[8] = y),
                t)
              : new s(l, f, d, h, E, m, _, p, y);
          }),
          (s.fromScale = function(e, t) {
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
              : new s(e.x, 0, 0, 0, e.y, 0, 0, 0, e.z);
          }),
          (s.fromUniformScale = function(e, t) {
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
              : new s(e, 0, 0, 0, e, 0, 0, 0, e);
          }),
          (s.fromCrossProduct = function(e, t) {
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
              : new s(0, -e.z, e.y, e.z, 0, -e.x, -e.y, e.x, 0);
          }),
          (s.fromRotationX = function(e, t) {
            var n = Math.cos(e),
              a = Math.sin(e);
            return r(t)
              ? ((t[0] = 1),
                (t[1] = 0),
                (t[2] = 0),
                (t[3] = 0),
                (t[4] = n),
                (t[5] = a),
                (t[6] = 0),
                (t[7] = -a),
                (t[8] = n),
                t)
              : new s(1, 0, 0, 0, n, -a, 0, a, n);
          }),
          (s.fromRotationY = function(e, t) {
            var n = Math.cos(e),
              a = Math.sin(e);
            return r(t)
              ? ((t[0] = n),
                (t[1] = 0),
                (t[2] = -a),
                (t[3] = 0),
                (t[4] = 1),
                (t[5] = 0),
                (t[6] = a),
                (t[7] = 0),
                (t[8] = n),
                t)
              : new s(n, 0, a, 0, 1, 0, -a, 0, n);
          }),
          (s.fromRotationZ = function(e, t) {
            var n = Math.cos(e),
              a = Math.sin(e);
            return r(t)
              ? ((t[0] = n),
                (t[1] = a),
                (t[2] = 0),
                (t[3] = -a),
                (t[4] = n),
                (t[5] = 0),
                (t[6] = 0),
                (t[7] = 0),
                (t[8] = 1),
                t)
              : new s(n, -a, 0, a, n, 0, 0, 0, 1);
          }),
          (s.toArray = function(e, t) {
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
          (s.getElementIndex = function(e, t) {
            return 3 * e + t;
          }),
          (s.getColumn = function(e, t, n) {
            var r = 3 * t,
              a = e[r],
              i = e[r + 1],
              o = e[r + 2];
            return (n.x = a), (n.y = i), (n.z = o), n;
          }),
          (s.setColumn = function(e, t, n, r) {
            r = s.clone(e, r);
            var a = 3 * t;
            return (r[a] = n.x), (r[a + 1] = n.y), (r[a + 2] = n.z), r;
          }),
          (s.getRow = function(e, t, n) {
            var r = e[t],
              a = e[t + 3],
              i = e[t + 6];
            return (n.x = r), (n.y = a), (n.z = i), n;
          }),
          (s.setRow = function(e, t, n, r) {
            return (
              (r = s.clone(e, r)),
              (r[t] = n.x),
              (r[t + 3] = n.y),
              (r[t + 6] = n.z),
              r
            );
          });
        var d = new e();
        s.getScale = function(t, n) {
          return (
            (n.x = e.magnitude(e.fromElements(t[0], t[1], t[2], d))),
            (n.y = e.magnitude(e.fromElements(t[3], t[4], t[5], d))),
            (n.z = e.magnitude(e.fromElements(t[6], t[7], t[8], d))),
            n
          );
        };
        var h = new e();
        (s.getMaximumScale = function(t) {
          return s.getScale(t, h), e.maximumComponent(h);
        }),
          (s.multiply = function(e, t, n) {
            var r = e[0] * t[0] + e[3] * t[1] + e[6] * t[2],
              a = e[1] * t[0] + e[4] * t[1] + e[7] * t[2],
              i = e[2] * t[0] + e[5] * t[1] + e[8] * t[2],
              o = e[0] * t[3] + e[3] * t[4] + e[6] * t[5],
              u = e[1] * t[3] + e[4] * t[4] + e[7] * t[5],
              s = e[2] * t[3] + e[5] * t[4] + e[8] * t[5],
              c = e[0] * t[6] + e[3] * t[7] + e[6] * t[8],
              l = e[1] * t[6] + e[4] * t[7] + e[7] * t[8],
              f = e[2] * t[6] + e[5] * t[7] + e[8] * t[8];
            return (
              (n[0] = r),
              (n[1] = a),
              (n[2] = i),
              (n[3] = o),
              (n[4] = u),
              (n[5] = s),
              (n[6] = c),
              (n[7] = l),
              (n[8] = f),
              n
            );
          }),
          (s.add = function(e, t, n) {
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
          (s.subtract = function(e, t, n) {
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
          (s.multiplyByVector = function(e, t, n) {
            var r = t.x,
              a = t.y,
              i = t.z,
              o = e[0] * r + e[3] * a + e[6] * i,
              u = e[1] * r + e[4] * a + e[7] * i,
              s = e[2] * r + e[5] * a + e[8] * i;
            return (n.x = o), (n.y = u), (n.z = s), n;
          }),
          (s.multiplyByScalar = function(e, t, n) {
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
          (s.multiplyByScale = function(e, t, n) {
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
          (s.negate = function(e, t) {
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
          (s.transpose = function(e, t) {
            var n = e[0],
              r = e[3],
              a = e[6],
              i = e[1],
              o = e[4],
              u = e[7],
              s = e[2],
              c = e[5],
              l = e[8];
            return (
              (t[0] = n),
              (t[1] = r),
              (t[2] = a),
              (t[3] = i),
              (t[4] = o),
              (t[5] = u),
              (t[6] = s),
              (t[7] = c),
              (t[8] = l),
              t
            );
          });
        var E = [1, 0, 0],
          m = [2, 2, 1],
          _ = new s(),
          p = new s();
        return (
          (s.computeEigenDecomposition = function(e, t) {
            var n = u.EPSILON20,
              a = 10,
              i = 0,
              o = 0;
            r(t) || (t = {});
            for (
              var d = (t.unitary = s.clone(s.IDENTITY, t.unitary)),
                h = (t.diagonal = s.clone(e, t.diagonal)),
                E = n * c(h);
              o < a && l(h) > E;

            )
              f(h, _),
                s.transpose(_, p),
                s.multiply(h, _, h),
                s.multiply(p, h, h),
                s.multiply(d, _, d),
                ++i > 2 && (++o, (i = 0));
            return t;
          }),
          (s.abs = function(e, t) {
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
          (s.determinant = function(e) {
            var t = e[0],
              n = e[3],
              r = e[6],
              a = e[1],
              i = e[4],
              o = e[7],
              u = e[2],
              s = e[5],
              c = e[8];
            return (
              t * (i * c - s * o) + a * (s * r - n * c) + u * (n * o - i * r)
            );
          }),
          (s.inverse = function(e, t) {
            var n = e[0],
              r = e[1],
              a = e[2],
              i = e[3],
              o = e[4],
              u = e[5],
              c = e[6],
              l = e[7],
              f = e[8],
              d = s.determinant(e);
            (t[0] = o * f - l * u),
              (t[1] = l * a - r * f),
              (t[2] = r * u - o * a),
              (t[3] = c * u - i * f),
              (t[4] = n * f - c * a),
              (t[5] = i * a - n * u),
              (t[6] = i * l - c * o),
              (t[7] = c * r - n * l),
              (t[8] = n * o - i * r);
            var h = 1 / d;
            return s.multiplyByScalar(t, h, t);
          }),
          (s.equals = function(e, t) {
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
          (s.equalsEpsilon = function(e, t, n) {
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
              get: function() {
                return s.packedLength;
              }
            }
          }),
          (s.prototype.clone = function(e) {
            return s.clone(this, e);
          }),
          (s.prototype.equals = function(e) {
            return s.equals(this, e);
          }),
          (s.equalsArray = function(e, t, n) {
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
          (s.prototype.equalsEpsilon = function(e, t) {
            return s.equalsEpsilon(this, e, t);
          }),
          (s.prototype.toString = function() {
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
          s
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
      function(e, t, n, r, a, i) {
        "use strict";
        function o(e, n, r, a) {
          (this.x = t(e, 0)),
            (this.y = t(n, 0)),
            (this.z = t(r, 0)),
            (this.w = t(a, 0));
        }
        (o.fromElements = function(e, t, r, a, i) {
          return n(i)
            ? ((i.x = e), (i.y = t), (i.z = r), (i.w = a), i)
            : new o(e, t, r, a);
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
          (o.unpack = function(e, r, a) {
            return (
              (r = t(r, 0)),
              n(a) || (a = new o()),
              (a.x = e[r++]),
              (a.y = e[r++]),
              (a.z = e[r++]),
              (a.w = e[r]),
              a
            );
          }),
          (o.packArray = function(e, t) {
            var r = e.length;
            n(t) ? (t.length = 4 * r) : (t = new Array(4 * r));
            for (var a = 0; a < r; ++a) o.pack(e[a], t, 4 * a);
            return t;
          }),
          (o.unpackArray = function(e, t) {
            var r = e.length;
            n(t) ? (t.length = r / 4) : (t = new Array(r / 4));
            for (var a = 0; a < r; a += 4) {
              var i = a / 4;
              t[i] = o.unpack(e, a, t[i]);
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
        var s = new o();
        o.lerp = function(e, t, n, r) {
          return (
            o.multiplyByScalar(t, n, s),
            (r = o.multiplyByScalar(e, 1 - n, r)),
            o.add(s, r, r)
          );
        };
        var c = new o();
        return (
          (o.mostOrthogonalAxis = function(e, t) {
            var n = o.normalize(e, c);
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
          (o.equalsEpsilon = function(e, t, r, a) {
            return (
              e === t ||
              (n(e) &&
                n(t) &&
                i.equalsEpsilon(e.x, t.x, r, a) &&
                i.equalsEpsilon(e.y, t.y, r, a) &&
                i.equalsEpsilon(e.z, t.z, r, a) &&
                i.equalsEpsilon(e.w, t.w, r, a))
            );
          }),
          (o.ZERO = a(new o(0, 0, 0, 0))),
          (o.UNIT_X = a(new o(1, 0, 0, 0))),
          (o.UNIT_Y = a(new o(0, 1, 0, 0))),
          (o.UNIT_Z = a(new o(0, 0, 1, 0))),
          (o.UNIT_W = a(new o(0, 0, 0, 1))),
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
      function(e, t, n, r, a, i, o, u, s, c) {
        "use strict";
        function l(e, t, n, a, i, o, u, s, c, l, f, d, h, E, m, _) {
          (this[0] = r(e, 0)),
            (this[1] = r(i, 0)),
            (this[2] = r(c, 0)),
            (this[3] = r(h, 0)),
            (this[4] = r(t, 0)),
            (this[5] = r(o, 0)),
            (this[6] = r(l, 0)),
            (this[7] = r(E, 0)),
            (this[8] = r(n, 0)),
            (this[9] = r(u, 0)),
            (this[10] = r(f, 0)),
            (this[11] = r(m, 0)),
            (this[12] = r(a, 0)),
            (this[13] = r(s, 0)),
            (this[14] = r(d, 0)),
            (this[15] = r(_, 0));
        }
        (l.packedLength = 16),
          (l.pack = function(e, t, n) {
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
          (l.unpack = function(e, t, n) {
            return (
              (t = r(t, 0)),
              a(n) || (n = new l()),
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
          (l.clone = function(e, t) {
            if (a(e))
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
                  );
          }),
          (l.fromArray = l.unpack),
          (l.fromColumnMajorArray = function(e, t) {
            return l.clone(e, t);
          }),
          (l.fromRowMajorArray = function(e, t) {
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
                );
          }),
          (l.fromRotationTranslation = function(t, n, i) {
            return (
              (n = r(n, e.ZERO)),
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
                  (i[12] = n.x),
                  (i[13] = n.y),
                  (i[14] = n.z),
                  (i[15] = 1),
                  i)
                : new l(
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
          (l.fromTranslationQuaternionRotationScale = function(e, t, n, r) {
            a(r) || (r = new l());
            var i = n.x,
              o = n.y,
              u = n.z,
              s = t.x * t.x,
              c = t.x * t.y,
              f = t.x * t.z,
              d = t.x * t.w,
              h = t.y * t.y,
              E = t.y * t.z,
              m = t.y * t.w,
              _ = t.z * t.z,
              p = t.z * t.w,
              y = t.w * t.w,
              T = s - h - _ + y,
              R = 2 * (c - p),
              A = 2 * (f + m),
              S = 2 * (c + p),
              N = -s + h - _ + y,
              v = 2 * (E - d),
              M = 2 * (f - m),
              g = 2 * (E + d),
              O = -s - h + _ + y;
            return (
              (r[0] = T * i),
              (r[1] = S * i),
              (r[2] = M * i),
              (r[3] = 0),
              (r[4] = R * o),
              (r[5] = N * o),
              (r[6] = g * o),
              (r[7] = 0),
              (r[8] = A * u),
              (r[9] = v * u),
              (r[10] = O * u),
              (r[11] = 0),
              (r[12] = e.x),
              (r[13] = e.y),
              (r[14] = e.z),
              (r[15] = 1),
              r
            );
          }),
          (l.fromTranslationRotationScale = function(e, t) {
            return l.fromTranslationQuaternionRotationScale(
              e.translation,
              e.rotation,
              e.scale,
              t
            );
          }),
          (l.fromTranslation = function(e, t) {
            return l.fromRotationTranslation(s.IDENTITY, e, t);
          }),
          (l.fromScale = function(e, t) {
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
              : new l(e.x, 0, 0, 0, 0, e.y, 0, 0, 0, 0, e.z, 0, 0, 0, 0, 1);
          }),
          (l.fromUniformScale = function(e, t) {
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
              : new l(e, 0, 0, 0, 0, e, 0, 0, 0, 0, e, 0, 0, 0, 0, 1);
          });
        var f = new e(),
          d = new e(),
          h = new e();
        (l.fromCamera = function(t, n) {
          var r = t.position,
            i = t.direction,
            o = t.up;
          e.normalize(i, f),
            e.normalize(e.cross(f, o, d), d),
            e.normalize(e.cross(d, f, h), h);
          var u = d.x,
            s = d.y,
            c = d.z,
            E = f.x,
            m = f.y,
            _ = f.z,
            p = h.x,
            y = h.y,
            T = h.z,
            R = r.x,
            A = r.y,
            S = r.z,
            N = u * -R + s * -A + c * -S,
            v = p * -R + y * -A + T * -S,
            M = E * R + m * A + _ * S;
          return a(n)
            ? ((n[0] = u),
              (n[1] = p),
              (n[2] = -E),
              (n[3] = 0),
              (n[4] = s),
              (n[5] = y),
              (n[6] = -m),
              (n[7] = 0),
              (n[8] = c),
              (n[9] = T),
              (n[10] = -_),
              (n[11] = 0),
              (n[12] = N),
              (n[13] = v),
              (n[14] = M),
              (n[15] = 1),
              n)
            : new l(u, s, c, N, p, y, T, v, -E, -m, -_, M, 0, 0, 0, 1);
        }),
          (l.computePerspectiveFieldOfView = function(e, t, n, r, a) {
            var i = Math.tan(0.5 * e),
              o = 1 / i,
              u = o / t,
              s = (r + n) / (n - r),
              c = 2 * r * n / (n - r);
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
            );
          }),
          (l.computeOrthographicOffCenter = function(e, t, n, r, a, i, o) {
            var u = 1 / (t - e),
              s = 1 / (r - n),
              c = 1 / (i - a),
              l = -(t + e) * u,
              f = -(r + n) * s,
              d = -(i + a) * c;
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
            );
          }),
          (l.computePerspectiveOffCenter = function(e, t, n, r, a, i, o) {
            var u = 2 * a / (t - e),
              s = 2 * a / (r - n),
              c = (t + e) / (t - e),
              l = (r + n) / (r - n),
              f = -(i + a) / (i - a),
              d = -1,
              h = -2 * i * a / (i - a);
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
            );
          }),
          (l.computeInfinitePerspectiveOffCenter = function(e, t, n, r, a, i) {
            var o = 2 * a / (t - e),
              u = 2 * a / (r - n),
              s = (t + e) / (t - e),
              c = (r + n) / (r - n),
              l = -1,
              f = -1,
              d = -2 * a;
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
            );
          }),
          (l.computeViewportTransformation = function(e, t, n, a) {
            e = r(e, r.EMPTY_OBJECT);
            var i = r(e.x, 0),
              o = r(e.y, 0),
              u = r(e.width, 0),
              s = r(e.height, 0);
            (t = r(t, 0)), (n = r(n, 1));
            var c = 0.5 * u,
              l = 0.5 * s,
              f = 0.5 * (n - t),
              d = c,
              h = l,
              E = f,
              m = i + c,
              _ = o + l,
              p = t + f,
              y = 1;
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
              (a[13] = _),
              (a[14] = p),
              (a[15] = y),
              a
            );
          }),
          (l.computeView = function(t, n, r, a, i) {
            return (
              (i[0] = a.x),
              (i[1] = r.x),
              (i[2] = -n.x),
              (i[3] = 0),
              (i[4] = a.y),
              (i[5] = r.y),
              (i[6] = -n.y),
              (i[7] = 0),
              (i[8] = a.z),
              (i[9] = r.z),
              (i[10] = -n.z),
              (i[11] = 0),
              (i[12] = -e.dot(a, t)),
              (i[13] = -e.dot(r, t)),
              (i[14] = e.dot(n, t)),
              (i[15] = 1),
              i
            );
          }),
          (l.toArray = function(e, t) {
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
                ];
          }),
          (l.getElementIndex = function(e, t) {
            return 4 * e + t;
          }),
          (l.getColumn = function(e, t, n) {
            var r = 4 * t,
              a = e[r],
              i = e[r + 1],
              o = e[r + 2],
              u = e[r + 3];
            return (n.x = a), (n.y = i), (n.z = o), (n.w = u), n;
          }),
          (l.setColumn = function(e, t, n, r) {
            r = l.clone(e, r);
            var a = 4 * t;
            return (
              (r[a] = n.x),
              (r[a + 1] = n.y),
              (r[a + 2] = n.z),
              (r[a + 3] = n.w),
              r
            );
          }),
          (l.setTranslation = function(e, t, n) {
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
          (l.getRow = function(e, t, n) {
            var r = e[t],
              a = e[t + 4],
              i = e[t + 8],
              o = e[t + 12];
            return (n.x = r), (n.y = a), (n.z = i), (n.w = o), n;
          }),
          (l.setRow = function(e, t, n, r) {
            return (
              (r = l.clone(e, r)),
              (r[t] = n.x),
              (r[t + 4] = n.y),
              (r[t + 8] = n.z),
              (r[t + 12] = n.w),
              r
            );
          });
        var E = new e();
        l.getScale = function(t, n) {
          return (
            (n.x = e.magnitude(e.fromElements(t[0], t[1], t[2], E))),
            (n.y = e.magnitude(e.fromElements(t[4], t[5], t[6], E))),
            (n.z = e.magnitude(e.fromElements(t[8], t[9], t[10], E))),
            n
          );
        };
        var m = new e();
        (l.getMaximumScale = function(t) {
          return l.getScale(t, m), e.maximumComponent(m);
        }),
          (l.multiply = function(e, t, n) {
            var r = e[0],
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
              _ = e[13],
              p = e[14],
              y = e[15],
              T = t[0],
              R = t[1],
              A = t[2],
              S = t[3],
              N = t[4],
              v = t[5],
              M = t[6],
              g = t[7],
              O = t[8],
              I = t[9],
              w = t[10],
              C = t[11],
              x = t[12],
              P = t[13],
              U = t[14],
              D = t[15],
              L = r * T + u * R + f * A + m * S,
              F = a * T + s * R + d * A + _ * S,
              B = i * T + c * R + h * A + p * S,
              b = o * T + l * R + E * A + y * S,
              z = r * N + u * v + f * M + m * g,
              q = a * N + s * v + d * M + _ * g,
              G = i * N + c * v + h * M + p * g,
              W = o * N + l * v + E * M + y * g,
              V = r * O + u * I + f * w + m * C,
              X = a * O + s * I + d * w + _ * C,
              H = i * O + c * I + h * w + p * C,
              Y = o * O + l * I + E * w + y * C,
              k = r * x + u * P + f * U + m * D,
              j = a * x + s * P + d * U + _ * D,
              Z = i * x + c * P + h * U + p * D,
              K = o * x + l * P + E * U + y * D;
            return (
              (n[0] = L),
              (n[1] = F),
              (n[2] = B),
              (n[3] = b),
              (n[4] = z),
              (n[5] = q),
              (n[6] = G),
              (n[7] = W),
              (n[8] = V),
              (n[9] = X),
              (n[10] = H),
              (n[11] = Y),
              (n[12] = k),
              (n[13] = j),
              (n[14] = Z),
              (n[15] = K),
              n
            );
          }),
          (l.add = function(e, t, n) {
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
          (l.subtract = function(e, t, n) {
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
          (l.multiplyTransformation = function(e, t, n) {
            var r = e[0],
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
              _ = t[1],
              p = t[2],
              y = t[4],
              T = t[5],
              R = t[6],
              A = t[8],
              S = t[9],
              N = t[10],
              v = t[12],
              M = t[13],
              g = t[14],
              O = r * m + o * _ + c * p,
              I = a * m + u * _ + l * p,
              w = i * m + s * _ + f * p,
              C = r * y + o * T + c * R,
              x = a * y + u * T + l * R,
              P = i * y + s * T + f * R,
              U = r * A + o * S + c * N,
              D = a * A + u * S + l * N,
              L = i * A + s * S + f * N,
              F = r * v + o * M + c * g + d,
              B = a * v + u * M + l * g + h,
              b = i * v + s * M + f * g + E;
            return (
              (n[0] = O),
              (n[1] = I),
              (n[2] = w),
              (n[3] = 0),
              (n[4] = C),
              (n[5] = x),
              (n[6] = P),
              (n[7] = 0),
              (n[8] = U),
              (n[9] = D),
              (n[10] = L),
              (n[11] = 0),
              (n[12] = F),
              (n[13] = B),
              (n[14] = b),
              (n[15] = 1),
              n
            );
          }),
          (l.multiplyByMatrix3 = function(e, t, n) {
            var r = e[0],
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
              _ = t[4],
              p = t[5],
              y = t[6],
              T = t[7],
              R = t[8],
              A = r * d + o * h + c * E,
              S = a * d + u * h + l * E,
              N = i * d + s * h + f * E,
              v = r * m + o * _ + c * p,
              M = a * m + u * _ + l * p,
              g = i * m + s * _ + f * p,
              O = r * y + o * T + c * R,
              I = a * y + u * T + l * R,
              w = i * y + s * T + f * R;
            return (
              (n[0] = A),
              (n[1] = S),
              (n[2] = N),
              (n[3] = 0),
              (n[4] = v),
              (n[5] = M),
              (n[6] = g),
              (n[7] = 0),
              (n[8] = O),
              (n[9] = I),
              (n[10] = w),
              (n[11] = 0),
              (n[12] = e[12]),
              (n[13] = e[13]),
              (n[14] = e[14]),
              (n[15] = e[15]),
              n
            );
          }),
          (l.multiplyByTranslation = function(e, t, n) {
            var r = t.x,
              a = t.y,
              i = t.z,
              o = r * e[0] + a * e[4] + i * e[8] + e[12],
              u = r * e[1] + a * e[5] + i * e[9] + e[13],
              s = r * e[2] + a * e[6] + i * e[10] + e[14];
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
              (n[14] = s),
              (n[15] = e[15]),
              n
            );
          });
        var _ = new e();
        (l.multiplyByUniformScale = function(e, t, n) {
          return (_.x = t), (_.y = t), (_.z = t), l.multiplyByScale(e, _, n);
        }),
          (l.multiplyByScale = function(e, t, n) {
            var r = t.x,
              a = t.y,
              i = t.z;
            return 1 === r && 1 === a && 1 === i
              ? l.clone(e, n)
              : ((n[0] = r * e[0]),
                (n[1] = r * e[1]),
                (n[2] = r * e[2]),
                (n[3] = 0),
                (n[4] = a * e[4]),
                (n[5] = a * e[5]),
                (n[6] = a * e[6]),
                (n[7] = 0),
                (n[8] = i * e[8]),
                (n[9] = i * e[9]),
                (n[10] = i * e[10]),
                (n[11] = 0),
                (n[12] = e[12]),
                (n[13] = e[13]),
                (n[14] = e[14]),
                (n[15] = 1),
                n);
          }),
          (l.multiplyByVector = function(e, t, n) {
            var r = t.x,
              a = t.y,
              i = t.z,
              o = t.w,
              u = e[0] * r + e[4] * a + e[8] * i + e[12] * o,
              s = e[1] * r + e[5] * a + e[9] * i + e[13] * o,
              c = e[2] * r + e[6] * a + e[10] * i + e[14] * o,
              l = e[3] * r + e[7] * a + e[11] * i + e[15] * o;
            return (n.x = u), (n.y = s), (n.z = c), (n.w = l), n;
          }),
          (l.multiplyByPointAsVector = function(e, t, n) {
            var r = t.x,
              a = t.y,
              i = t.z,
              o = e[0] * r + e[4] * a + e[8] * i,
              u = e[1] * r + e[5] * a + e[9] * i,
              s = e[2] * r + e[6] * a + e[10] * i;
            return (n.x = o), (n.y = u), (n.z = s), n;
          }),
          (l.multiplyByPoint = function(e, t, n) {
            var r = t.x,
              a = t.y,
              i = t.z,
              o = e[0] * r + e[4] * a + e[8] * i + e[12],
              u = e[1] * r + e[5] * a + e[9] * i + e[13],
              s = e[2] * r + e[6] * a + e[10] * i + e[14];
            return (n.x = o), (n.y = u), (n.z = s), n;
          }),
          (l.multiplyByScalar = function(e, t, n) {
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
          (l.negate = function(e, t) {
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
          (l.transpose = function(e, t) {
            var n = e[1],
              r = e[2],
              a = e[3],
              i = e[6],
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
              (t[9] = i),
              (t[10] = e[10]),
              (t[11] = e[14]),
              (t[12] = a),
              (t[13] = o),
              (t[14] = u),
              (t[15] = e[15]),
              t
            );
          }),
          (l.abs = function(e, t) {
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
          (l.equals = function(e, t) {
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
            );
          }),
          (l.equalsEpsilon = function(e, t, n) {
            return (
              e === t ||
              (a(e) &&
                a(t) &&
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
          (l.getTranslation = function(e, t) {
            return (t.x = e[12]), (t.y = e[13]), (t.z = e[14]), t;
          }),
          (l.getRotation = function(e, t) {
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
        var p = new s(),
          y = new s(),
          T = new t(),
          R = new t(0, 0, 0, 1);
        return (
          (l.inverse = function(e, n) {
            if (
              s.equalsEpsilon(l.getRotation(e, p), y, u.EPSILON7) &&
              t.equals(l.getRow(e, 3, T), R)
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
              a = e[4],
              i = e[8],
              o = e[12],
              f = e[1],
              d = e[5],
              h = e[9],
              E = e[13],
              m = e[2],
              _ = e[6],
              A = e[10],
              S = e[14],
              N = e[3],
              v = e[7],
              M = e[11],
              g = e[15],
              O = A * g,
              I = S * M,
              w = _ * g,
              C = S * v,
              x = _ * M,
              P = A * v,
              U = m * g,
              D = S * N,
              L = m * M,
              F = A * N,
              B = m * v,
              b = _ * N,
              z = O * d + C * h + x * E - (I * d + w * h + P * E),
              q = I * f + U * h + F * E - (O * f + D * h + L * E),
              G = w * f + D * d + B * E - (C * f + U * d + b * E),
              W = P * f + L * d + b * h - (x * f + F * d + B * h),
              V = I * a + w * i + P * o - (O * a + C * i + x * o),
              X = O * r + D * i + L * o - (I * r + U * i + F * o),
              H = C * r + U * a + b * o - (w * r + D * a + B * o),
              Y = x * r + F * a + B * i - (P * r + L * a + b * i);
            (O = i * E),
              (I = o * h),
              (w = a * E),
              (C = o * d),
              (x = a * h),
              (P = i * d),
              (U = r * E),
              (D = o * f),
              (L = r * h),
              (F = i * f),
              (B = r * d),
              (b = a * f);
            var k = O * v + C * M + x * g - (I * v + w * M + P * g),
              j = I * N + U * M + F * g - (O * N + D * M + L * g),
              Z = w * N + D * v + B * g - (C * N + U * v + b * g),
              K = P * N + L * v + b * M - (x * N + F * v + B * M),
              J = w * A + P * S + I * _ - (x * S + O * _ + C * A),
              Q = L * S + O * m + D * A - (U * A + F * S + I * m),
              $ = U * _ + b * S + C * m - (B * S + w * m + D * _),
              ee = B * A + x * m + F * _ - (L * _ + b * A + P * m),
              te = r * z + a * q + i * G + o * W;
            if (Math.abs(te) < u.EPSILON20)
              throw new c(
                "matrix is not invertible because its determinate is zero."
              );
            return (
              (te = 1 / te),
              (n[0] = z * te),
              (n[1] = q * te),
              (n[2] = G * te),
              (n[3] = W * te),
              (n[4] = V * te),
              (n[5] = X * te),
              (n[6] = H * te),
              (n[7] = Y * te),
              (n[8] = k * te),
              (n[9] = j * te),
              (n[10] = Z * te),
              (n[11] = K * te),
              (n[12] = J * te),
              (n[13] = Q * te),
              (n[14] = $ * te),
              (n[15] = ee * te),
              n
            );
          }),
          (l.inverseTransformation = function(e, t) {
            var n = e[0],
              r = e[1],
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
              E = -n * f - r * d - a * h,
              m = -i * f - o * d - u * h,
              _ = -s * f - c * d - l * h;
            return (
              (t[0] = n),
              (t[1] = i),
              (t[2] = s),
              (t[3] = 0),
              (t[4] = r),
              (t[5] = o),
              (t[6] = c),
              (t[7] = 0),
              (t[8] = a),
              (t[9] = u),
              (t[10] = l),
              (t[11] = 0),
              (t[12] = E),
              (t[13] = m),
              (t[14] = _),
              (t[15] = 1),
              t
            );
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
              get: function() {
                return l.packedLength;
              }
            }
          }),
          (l.prototype.clone = function(e) {
            return l.clone(this, e);
          }),
          (l.prototype.equals = function(e) {
            return l.equals(this, e);
          }),
          (l.equalsArray = function(e, t, n) {
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
          (l.prototype.equalsEpsilon = function(e, t) {
            return l.equalsEpsilon(this, e, t);
          }),
          (l.prototype.toString = function() {
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
          l
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
      function(e, t, n, r, a, i, o, u) {
        "use strict";
        function s(e, t, r, a) {
          (this.west = n(e, 0)),
            (this.south = n(t, 0)),
            (this.east = n(r, 0)),
            (this.north = n(a, 0));
        }
        a(s.prototype, {
          width: {
            get: function() {
              return s.computeWidth(this);
            }
          },
          height: {
            get: function() {
              return s.computeHeight(this);
            }
          }
        }),
          (s.packedLength = 4),
          (s.pack = function(e, t, r) {
            return (
              (r = n(r, 0)),
              (t[r++] = e.west),
              (t[r++] = e.south),
              (t[r++] = e.east),
              (t[r] = e.north),
              t
            );
          }),
          (s.unpack = function(e, t, a) {
            return (
              (t = n(t, 0)),
              r(a) || (a = new s()),
              (a.west = e[t++]),
              (a.south = e[t++]),
              (a.east = e[t++]),
              (a.north = e[t]),
              a
            );
          }),
          (s.computeWidth = function(e) {
            var t = e.east,
              n = e.west;
            return t < n && (t += u.TWO_PI), t - n;
          }),
          (s.computeHeight = function(e) {
            return e.north - e.south;
          }),
          (s.fromDegrees = function(e, t, a, i, o) {
            return (
              (e = u.toRadians(n(e, 0))),
              (t = u.toRadians(n(t, 0))),
              (a = u.toRadians(n(a, 0))),
              (i = u.toRadians(n(i, 0))),
              r(o)
                ? ((o.west = e), (o.south = t), (o.east = a), (o.north = i), o)
                : new s(e, t, a, i)
            );
          }),
          (s.fromRadians = function(e, t, a, i, o) {
            return r(o)
              ? ((o.west = n(e, 0)),
                (o.south = n(t, 0)),
                (o.east = n(a, 0)),
                (o.north = n(i, 0)),
                o)
              : new s(e, t, a, i);
          }),
          (s.fromCartographicArray = function(e, t) {
            for (
              var n = Number.MAX_VALUE,
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
              (n = Math.min(n, h.longitude)),
                (a = Math.max(a, h.longitude)),
                (c = Math.min(c, h.latitude)),
                (l = Math.max(l, h.latitude));
              var E = h.longitude >= 0 ? h.longitude : h.longitude + u.TWO_PI;
              (i = Math.min(i, E)), (o = Math.max(o, E));
            }
            return (
              a - n > o - i &&
                ((n = i),
                (a = o),
                a > u.PI && (a -= u.TWO_PI),
                n > u.PI && (n -= u.TWO_PI)),
              r(t)
                ? ((t.west = n), (t.south = c), (t.east = a), (t.north = l), t)
                : new s(n, c, a, l)
            );
          }),
          (s.fromCartesianArray = function(e, t, a) {
            t = n(t, i.WGS84);
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
              var _ = t.cartesianToCartographic(e[E]);
              (o = Math.min(o, _.longitude)),
                (c = Math.max(c, _.longitude)),
                (d = Math.min(d, _.latitude)),
                (h = Math.max(h, _.latitude));
              var p = _.longitude >= 0 ? _.longitude : _.longitude + u.TWO_PI;
              (l = Math.min(l, p)), (f = Math.max(f, p));
            }
            return (
              c - o > f - l &&
                ((o = l),
                (c = f),
                c > u.PI && (c -= u.TWO_PI),
                o > u.PI && (o -= u.TWO_PI)),
              r(a)
                ? ((a.west = o), (a.south = d), (a.east = c), (a.north = h), a)
                : new s(o, d, c, h)
            );
          }),
          (s.clone = function(e, t) {
            if (r(e))
              return r(t)
                ? ((t.west = e.west),
                  (t.south = e.south),
                  (t.east = e.east),
                  (t.north = e.north),
                  t)
                : new s(e.west, e.south, e.east, e.north);
          }),
          (s.prototype.clone = function(e) {
            return s.clone(this, e);
          }),
          (s.prototype.equals = function(e) {
            return s.equals(this, e);
          }),
          (s.equals = function(e, t) {
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
          (s.prototype.equalsEpsilon = function(e, t) {
            return (
              r(e) &&
              Math.abs(this.west - e.west) <= t &&
              Math.abs(this.south - e.south) <= t &&
              Math.abs(this.east - e.east) <= t &&
              Math.abs(this.north - e.north) <= t
            );
          }),
          (s.validate = function(e) {}),
          (s.southwest = function(t, n) {
            return r(n)
              ? ((n.longitude = t.west),
                (n.latitude = t.south),
                (n.height = 0),
                n)
              : new e(t.west, t.south);
          }),
          (s.northwest = function(t, n) {
            return r(n)
              ? ((n.longitude = t.west),
                (n.latitude = t.north),
                (n.height = 0),
                n)
              : new e(t.west, t.north);
          }),
          (s.northeast = function(t, n) {
            return r(n)
              ? ((n.longitude = t.east),
                (n.latitude = t.north),
                (n.height = 0),
                n)
              : new e(t.east, t.north);
          }),
          (s.southeast = function(t, n) {
            return r(n)
              ? ((n.longitude = t.east),
                (n.latitude = t.south),
                (n.height = 0),
                n)
              : new e(t.east, t.south);
          }),
          (s.center = function(t, n) {
            var a = t.east,
              i = t.west;
            a < i && (a += u.TWO_PI);
            var o = u.negativePiToPi(0.5 * (i + a)),
              s = 0.5 * (t.south + t.north);
            return r(n)
              ? ((n.longitude = o), (n.latitude = s), (n.height = 0), n)
              : new e(o, s);
          }),
          (s.intersection = function(e, t, n) {
            var a = e.east,
              i = e.west,
              o = t.east,
              c = t.west;
            a < i && o > 0
              ? (a += u.TWO_PI)
              : o < c && a > 0 && (o += u.TWO_PI),
              a < i && c < 0
                ? (c += u.TWO_PI)
                : o < c && i < 0 && (i += u.TWO_PI);
            var l = u.negativePiToPi(Math.max(i, c)),
              f = u.negativePiToPi(Math.min(a, o));
            if (!((e.west < e.east || t.west < t.east) && f <= l)) {
              var d = Math.max(e.south, t.south),
                h = Math.min(e.north, t.north);
              if (!(d >= h))
                return r(n)
                  ? ((n.west = l),
                    (n.south = d),
                    (n.east = f),
                    (n.north = h),
                    n)
                  : new s(l, d, f, h);
            }
          }),
          (s.simpleIntersection = function(e, t, n) {
            var a = Math.max(e.west, t.west),
              i = Math.max(e.south, t.south),
              o = Math.min(e.east, t.east),
              u = Math.min(e.north, t.north);
            if (!(i >= u || a >= o))
              return r(n)
                ? ((n.west = a), (n.south = i), (n.east = o), (n.north = u), n)
                : new s(a, i, o, u);
          }),
          (s.union = function(e, t, n) {
            r(n) || (n = new s());
            var a = e.east,
              i = e.west,
              o = t.east,
              c = t.west;
            a < i && o > 0
              ? (a += u.TWO_PI)
              : o < c && a > 0 && (o += u.TWO_PI),
              a < i && c < 0
                ? (c += u.TWO_PI)
                : o < c && i < 0 && (i += u.TWO_PI);
            var l = u.convertLongitudeRange(Math.min(i, c)),
              f = u.convertLongitudeRange(Math.max(a, o));
            return (
              (n.west = l),
              (n.south = Math.min(e.south, t.south)),
              (n.east = f),
              (n.north = Math.max(e.north, t.north)),
              n
            );
          }),
          (s.expand = function(e, t, n) {
            return (
              r(n) || (n = new s()),
              (n.west = Math.min(e.west, t.longitude)),
              (n.south = Math.min(e.south, t.latitude)),
              (n.east = Math.max(e.east, t.longitude)),
              (n.north = Math.max(e.north, t.latitude)),
              n
            );
          }),
          (s.contains = function(e, t) {
            var n = t.longitude,
              r = t.latitude,
              a = e.west,
              i = e.east;
            return (
              i < a && ((i += u.TWO_PI), n < 0 && (n += u.TWO_PI)),
              (n > a || u.equalsEpsilon(n, a, u.EPSILON14)) &&
                (n < i || u.equalsEpsilon(n, i, u.EPSILON14)) &&
                r >= e.south &&
                r <= e.north
            );
          });
        var c = new e();
        return (
          (s.subsample = function(e, t, a, o) {
            (t = n(t, i.WGS84)), (a = n(a, 0)), r(o) || (o = []);
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
                : d > 0 ? (m.latitude = d) : (m.latitude = 0);
            for (var _ = 1; _ < 8; ++_)
              (m.longitude = -Math.PI + _ * u.PI_OVER_TWO),
                s.contains(e, m) &&
                  ((o[l] = t.cartographicToCartesian(m, o[l])), l++);
            return (
              0 === m.latitude &&
                ((m.longitude = E),
                (o[l] = t.cartographicToCartesian(m, o[l])),
                l++,
                (m.longitude = h),
                (o[l] = t.cartographicToCartesian(m, o[l])),
                l++),
              (o.length = l),
              o
            );
          }),
          (s.MAX_VALUE = o(
            new s(-Math.PI, -u.PI_OVER_TWO, Math.PI, u.PI_OVER_TWO)
          )),
          s
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
      function(e, t, n, r, a, i, o, u, s, c, l, f) {
        "use strict";
        function d(t, n) {
          (this.center = e.clone(r(t, e.ZERO))), (this.radius = r(n, 0));
        }
        var h = new e(),
          E = new e(),
          m = new e(),
          _ = new e(),
          p = new e(),
          y = new e(),
          T = new e(),
          R = new e(),
          A = new e(),
          S = new e(),
          N = new e(),
          v = new e();
        d.fromPoints = function(t, n) {
          if ((a(n) || (n = new d()), !a(t) || 0 === t.length))
            return (n.center = e.clone(e.ZERO, n.center)), (n.radius = 0), n;
          var r,
            i = e.clone(t[0], T),
            o = e.clone(i, h),
            u = e.clone(i, E),
            s = e.clone(i, m),
            c = e.clone(i, _),
            l = e.clone(i, p),
            f = e.clone(i, y),
            M = t.length;
          for (r = 1; r < M; r++) {
            e.clone(t[r], i);
            var g = i.x,
              O = i.y,
              I = i.z;
            g < o.x && e.clone(i, o),
              g > c.x && e.clone(i, c),
              O < u.y && e.clone(i, u),
              O > l.y && e.clone(i, l),
              I < s.z && e.clone(i, s),
              I > f.z && e.clone(i, f);
          }
          var w = e.magnitudeSquared(e.subtract(c, o, R)),
            C = e.magnitudeSquared(e.subtract(l, u, R)),
            x = e.magnitudeSquared(e.subtract(f, s, R)),
            P = o,
            U = c,
            D = w;
          C > D && ((D = C), (P = u), (U = l)),
            x > D && ((D = x), (P = s), (U = f));
          var L = A;
          (L.x = 0.5 * (P.x + U.x)),
            (L.y = 0.5 * (P.y + U.y)),
            (L.z = 0.5 * (P.z + U.z));
          var F = e.magnitudeSquared(e.subtract(U, L, R)),
            B = Math.sqrt(F),
            b = S;
          (b.x = o.x), (b.y = u.y), (b.z = s.z);
          var z = N;
          (z.x = c.x), (z.y = l.y), (z.z = f.z);
          var q = e.multiplyByScalar(e.add(b, z, R), 0.5, v),
            G = 0;
          for (r = 0; r < M; r++) {
            e.clone(t[r], i);
            var W = e.magnitude(e.subtract(i, q, R));
            W > G && (G = W);
            var V = e.magnitudeSquared(e.subtract(i, L, R));
            if (V > F) {
              var X = Math.sqrt(V);
              (B = 0.5 * (B + X)), (F = B * B);
              var H = X - B;
              (L.x = (B * L.x + H * i.x) / X),
                (L.y = (B * L.y + H * i.y) / X),
                (L.z = (B * L.z + H * i.z) / X);
            }
          }
          return (
            B < G
              ? (e.clone(L, n.center), (n.radius = B))
              : (e.clone(q, n.center), (n.radius = G)),
            n
          );
        };
        var M = new o(),
          g = new e(),
          O = new e(),
          I = new t(),
          w = new t();
        (d.fromRectangle2D = function(e, t, n) {
          return d.fromRectangleWithHeights2D(e, t, 0, 0, n);
        }),
          (d.fromRectangleWithHeights2D = function(t, n, i, o, u) {
            if ((a(u) || (u = new d()), !a(t)))
              return (u.center = e.clone(e.ZERO, u.center)), (u.radius = 0), u;
            (n = r(n, M)),
              f.southwest(t, I),
              (I.height = i),
              f.northeast(t, w),
              (w.height = o);
            var s = n.project(I, g),
              c = n.project(w, O),
              l = c.x - s.x,
              h = c.y - s.y,
              E = c.z - s.z;
            u.radius = 0.5 * Math.sqrt(l * l + h * h + E * E);
            var m = u.center;
            return (
              (m.x = s.x + 0.5 * l),
              (m.y = s.y + 0.5 * h),
              (m.z = s.z + 0.5 * E),
              u
            );
          });
        var C = [];
        (d.fromRectangle3D = function(e, t, n, o) {
          (t = r(t, i.WGS84)), (n = r(n, 0));
          var u;
          return a(e) && (u = f.subsample(e, t, n, C)), d.fromPoints(u, o);
        }),
          (d.fromVertices = function(t, n, i, o) {
            if ((a(o) || (o = new d()), !a(t) || 0 === t.length))
              return (o.center = e.clone(e.ZERO, o.center)), (o.radius = 0), o;
            (n = r(n, e.ZERO)), (i = r(i, 3));
            var u = T;
            (u.x = t[0] + n.x), (u.y = t[1] + n.y), (u.z = t[2] + n.z);
            var s,
              c = e.clone(u, h),
              l = e.clone(u, E),
              f = e.clone(u, m),
              M = e.clone(u, _),
              g = e.clone(u, p),
              O = e.clone(u, y),
              I = t.length;
            for (s = 0; s < I; s += i) {
              var w = t[s] + n.x,
                C = t[s + 1] + n.y,
                x = t[s + 2] + n.z;
              (u.x = w),
                (u.y = C),
                (u.z = x),
                w < c.x && e.clone(u, c),
                w > M.x && e.clone(u, M),
                C < l.y && e.clone(u, l),
                C > g.y && e.clone(u, g),
                x < f.z && e.clone(u, f),
                x > O.z && e.clone(u, O);
            }
            var P = e.magnitudeSquared(e.subtract(M, c, R)),
              U = e.magnitudeSquared(e.subtract(g, l, R)),
              D = e.magnitudeSquared(e.subtract(O, f, R)),
              L = c,
              F = M,
              B = P;
            U > B && ((B = U), (L = l), (F = g)),
              D > B && ((B = D), (L = f), (F = O));
            var b = A;
            (b.x = 0.5 * (L.x + F.x)),
              (b.y = 0.5 * (L.y + F.y)),
              (b.z = 0.5 * (L.z + F.z));
            var z = e.magnitudeSquared(e.subtract(F, b, R)),
              q = Math.sqrt(z),
              G = S;
            (G.x = c.x), (G.y = l.y), (G.z = f.z);
            var W = N;
            (W.x = M.x), (W.y = g.y), (W.z = O.z);
            var V = e.multiplyByScalar(e.add(G, W, R), 0.5, v),
              X = 0;
            for (s = 0; s < I; s += i) {
              (u.x = t[s] + n.x),
                (u.y = t[s + 1] + n.y),
                (u.z = t[s + 2] + n.z);
              var H = e.magnitude(e.subtract(u, V, R));
              H > X && (X = H);
              var Y = e.magnitudeSquared(e.subtract(u, b, R));
              if (Y > z) {
                var k = Math.sqrt(Y);
                (q = 0.5 * (q + k)), (z = q * q);
                var j = k - q;
                (b.x = (q * b.x + j * u.x) / k),
                  (b.y = (q * b.y + j * u.y) / k),
                  (b.z = (q * b.z + j * u.z) / k);
              }
            }
            return (
              q < X
                ? (e.clone(b, o.center), (o.radius = q))
                : (e.clone(V, o.center), (o.radius = X)),
              o
            );
          }),
          (d.fromEncodedCartesianVertices = function(t, n, r) {
            if (
              (a(r) || (r = new d()),
              !a(t) || !a(n) || t.length !== n.length || 0 === t.length)
            )
              return (r.center = e.clone(e.ZERO, r.center)), (r.radius = 0), r;
            var i = T;
            (i.x = t[0] + n[0]), (i.y = t[1] + n[1]), (i.z = t[2] + n[2]);
            var o,
              u = e.clone(i, h),
              s = e.clone(i, E),
              c = e.clone(i, m),
              l = e.clone(i, _),
              f = e.clone(i, p),
              M = e.clone(i, y),
              g = t.length;
            for (o = 0; o < g; o += 3) {
              var O = t[o] + n[o],
                I = t[o + 1] + n[o + 1],
                w = t[o + 2] + n[o + 2];
              (i.x = O),
                (i.y = I),
                (i.z = w),
                O < u.x && e.clone(i, u),
                O > l.x && e.clone(i, l),
                I < s.y && e.clone(i, s),
                I > f.y && e.clone(i, f),
                w < c.z && e.clone(i, c),
                w > M.z && e.clone(i, M);
            }
            var C = e.magnitudeSquared(e.subtract(l, u, R)),
              x = e.magnitudeSquared(e.subtract(f, s, R)),
              P = e.magnitudeSquared(e.subtract(M, c, R)),
              U = u,
              D = l,
              L = C;
            x > L && ((L = x), (U = s), (D = f)),
              P > L && ((L = P), (U = c), (D = M));
            var F = A;
            (F.x = 0.5 * (U.x + D.x)),
              (F.y = 0.5 * (U.y + D.y)),
              (F.z = 0.5 * (U.z + D.z));
            var B = e.magnitudeSquared(e.subtract(D, F, R)),
              b = Math.sqrt(B),
              z = S;
            (z.x = u.x), (z.y = s.y), (z.z = c.z);
            var q = N;
            (q.x = l.x), (q.y = f.y), (q.z = M.z);
            var G = e.multiplyByScalar(e.add(z, q, R), 0.5, v),
              W = 0;
            for (o = 0; o < g; o += 3) {
              (i.x = t[o] + n[o]),
                (i.y = t[o + 1] + n[o + 1]),
                (i.z = t[o + 2] + n[o + 2]);
              var V = e.magnitude(e.subtract(i, G, R));
              V > W && (W = V);
              var X = e.magnitudeSquared(e.subtract(i, F, R));
              if (X > B) {
                var H = Math.sqrt(X);
                (b = 0.5 * (b + H)), (B = b * b);
                var Y = H - b;
                (F.x = (b * F.x + Y * i.x) / H),
                  (F.y = (b * F.y + Y * i.y) / H),
                  (F.z = (b * F.z + Y * i.z) / H);
              }
            }
            return (
              b < W
                ? (e.clone(F, r.center), (r.radius = b))
                : (e.clone(G, r.center), (r.radius = W)),
              r
            );
          }),
          (d.fromCornerPoints = function(t, n, r) {
            a(r) || (r = new d());
            var i = r.center;
            return (
              e.add(t, n, i),
              e.multiplyByScalar(i, 0.5, i),
              (r.radius = e.distance(i, n)),
              r
            );
          }),
          (d.fromEllipsoid = function(t, n) {
            return (
              a(n) || (n = new d()),
              e.clone(e.ZERO, n.center),
              (n.radius = t.maximumRadius),
              n
            );
          });
        var x = new e();
        d.fromBoundingSpheres = function(t, n) {
          if ((a(n) || (n = new d()), !a(t) || 0 === t.length))
            return (n.center = e.clone(e.ZERO, n.center)), (n.radius = 0), n;
          var r = t.length;
          if (1 === r) return d.clone(t[0], n);
          if (2 === r) return d.union(t[0], t[1], n);
          var i,
            o = [];
          for (i = 0; i < r; i++) o.push(t[i].center);
          n = d.fromPoints(o, n);
          var u = n.center,
            s = n.radius;
          for (i = 0; i < r; i++) {
            var c = t[i];
            s = Math.max(s, e.distance(u, c.center, x) + c.radius);
          }
          return (n.radius = s), n;
        };
        var P = new e(),
          U = new e(),
          D = new e();
        (d.fromOrientedBoundingBox = function(t, n) {
          a(n) || (n = new d());
          var r = t.halfAxes,
            i = c.getColumn(r, 0, P),
            o = c.getColumn(r, 1, U),
            u = c.getColumn(r, 2, D);
          return (
            e.add(i, o, i),
            e.add(i, u, i),
            (n.center = e.clone(t.center, n.center)),
            (n.radius = e.magnitude(i)),
            n
          );
        }),
          (d.clone = function(t, n) {
            if (a(t))
              return a(n)
                ? ((n.center = e.clone(t.center, n.center)),
                  (n.radius = t.radius),
                  n)
                : new d(t.center, t.radius);
          }),
          (d.packedLength = 4),
          (d.pack = function(e, t, n) {
            n = r(n, 0);
            var a = e.center;
            return (
              (t[n++] = a.x),
              (t[n++] = a.y),
              (t[n++] = a.z),
              (t[n] = e.radius),
              t
            );
          }),
          (d.unpack = function(e, t, n) {
            (t = r(t, 0)), a(n) || (n = new d());
            var i = n.center;
            return (
              (i.x = e[t++]),
              (i.y = e[t++]),
              (i.z = e[t++]),
              (n.radius = e[t]),
              n
            );
          });
        var L = new e(),
          F = new e();
        d.union = function(t, n, r) {
          a(r) || (r = new d());
          var i = t.center,
            o = t.radius,
            u = n.center,
            s = n.radius,
            c = e.subtract(u, i, L),
            l = e.magnitude(c);
          if (o >= l + s) return t.clone(r), r;
          if (s >= l + o) return n.clone(r), r;
          var f = 0.5 * (o + l + s),
            h = e.multiplyByScalar(c, (-o + f) / l, F);
          return e.add(h, i, h), e.clone(h, r.center), (r.radius = f), r;
        };
        var B = new e();
        (d.expand = function(t, n, r) {
          r = d.clone(t, r);
          var a = e.magnitude(e.subtract(n, r.center, B));
          return a > r.radius && (r.radius = a), r;
        }),
          (d.intersectPlane = function(t, n) {
            var r = t.center,
              a = t.radius,
              i = n.normal,
              o = e.dot(i, r) + n.distance;
            return o < -a ? u.OUTSIDE : o < a ? u.INTERSECTING : u.INSIDE;
          }),
          (d.transform = function(e, t, n) {
            return (
              a(n) || (n = new d()),
              (n.center = l.multiplyByPoint(t, e.center, n.center)),
              (n.radius = l.getMaximumScale(t) * e.radius),
              n
            );
          });
        var b = new e();
        (d.distanceSquaredTo = function(t, n) {
          var r = e.subtract(t.center, n, b);
          return e.magnitudeSquared(r) - t.radius * t.radius;
        }),
          (d.transformWithoutScale = function(e, t, n) {
            return (
              a(n) || (n = new d()),
              (n.center = l.multiplyByPoint(t, e.center, n.center)),
              (n.radius = e.radius),
              n
            );
          });
        var z = new e();
        d.computePlaneDistances = function(t, n, r, i) {
          a(i) || (i = new s());
          var o = e.subtract(t.center, n, z),
            u = e.dot(r, o);
          return (i.start = u - t.radius), (i.stop = u + t.radius), i;
        };
        for (
          var q = new e(),
            G = new e(),
            W = new e(),
            V = new e(),
            X = new e(),
            H = new t(),
            Y = new Array(8),
            k = 0;
          k < 8;
          ++k
        )
          Y[k] = new e();
        var j = new o();
        return (
          (d.projectTo2D = function(t, n, a) {
            n = r(n, j);
            var i = n.ellipsoid,
              o = t.center,
              u = t.radius,
              s = i.geodeticSurfaceNormal(o, q),
              c = e.cross(e.UNIT_Z, s, G);
            e.normalize(c, c);
            var l = e.cross(s, c, W);
            e.normalize(l, l),
              e.multiplyByScalar(s, u, s),
              e.multiplyByScalar(l, u, l),
              e.multiplyByScalar(c, u, c);
            var f = e.negate(l, X),
              h = e.negate(c, V),
              E = Y,
              m = E[0];
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
              e.add(m, c, m);
            for (var _ = E.length, p = 0; p < _; ++p) {
              var y = E[p];
              e.add(o, y, y);
              var T = i.cartesianToCartographic(y, H);
              n.project(T, y);
            }
            (a = d.fromPoints(E, a)), (o = a.center);
            var R = o.x,
              A = o.y,
              S = o.z;
            return (o.x = S), (o.y = R), (o.z = A), a;
          }),
          (d.isOccluded = function(e, t) {
            return !t.isBoundingSphereVisible(e);
          }),
          (d.equals = function(t, n) {
            return (
              t === n ||
              (a(t) &&
                a(n) &&
                e.equals(t.center, n.center) &&
                t.radius === n.radius)
            );
          }),
          (d.prototype.intersectPlane = function(e) {
            return d.intersectPlane(this, e);
          }),
          (d.prototype.distanceSquaredTo = function(e) {
            return d.distanceSquaredTo(this, e);
          }),
          (d.prototype.computePlaneDistances = function(e, t, n) {
            return d.computePlaneDistances(this, e, t, n);
          }),
          (d.prototype.isOccluded = function(e) {
            return d.isOccluded(this, e);
          }),
          (d.prototype.equals = function(e) {
            return d.equals(this, e);
          }),
          (d.prototype.clone = function(e) {
            return d.clone(this, e);
          }),
          d
        );
      }
    ),
    define(
      "Core/Cartesian2",
      [
        "./Check",
        "./defaultValue",
        "./defined",
        "./DeveloperError",
        "./freezeObject",
        "./Math"
      ],
      function(e, t, n, r, a, i) {
        "use strict";
        function o(e, n) {
          (this.x = t(e, 0)), (this.y = t(n, 0));
        }
        (o.fromElements = function(e, t, r) {
          return n(r) ? ((r.x = e), (r.y = t), r) : new o(e, t);
        }),
          (o.clone = function(e, t) {
            if (n(e))
              return n(t) ? ((t.x = e.x), (t.y = e.y), t) : new o(e.x, e.y);
          }),
          (o.fromCartesian3 = o.clone),
          (o.fromCartesian4 = o.clone),
          (o.packedLength = 2),
          (o.pack = function(e, n, r) {
            return (r = t(r, 0)), (n[r++] = e.x), (n[r] = e.y), n;
          }),
          (o.unpack = function(e, r, a) {
            return (
              (r = t(r, 0)),
              n(a) || (a = new o()),
              (a.x = e[r++]),
              (a.y = e[r]),
              a
            );
          }),
          (o.packArray = function(e, t) {
            var r = e.length;
            n(t) ? (t.length = 2 * r) : (t = new Array(2 * r));
            for (var a = 0; a < r; ++a) o.pack(e[a], t, 2 * a);
            return t;
          }),
          (o.unpackArray = function(e, t) {
            var r = e.length;
            n(t) ? (t.length = r / 2) : (t = new Array(r / 2));
            for (var a = 0; a < r; a += 2) {
              var i = a / 2;
              t[i] = o.unpack(e, a, t[i]);
            }
            return t;
          }),
          (o.fromArray = o.unpack),
          (o.maximumComponent = function(e) {
            return Math.max(e.x, e.y);
          }),
          (o.minimumComponent = function(e) {
            return Math.min(e.x, e.y);
          }),
          (o.minimumByComponent = function(e, t, n) {
            return (n.x = Math.min(e.x, t.x)), (n.y = Math.min(e.y, t.y)), n;
          }),
          (o.maximumByComponent = function(e, t, n) {
            return (n.x = Math.max(e.x, t.x)), (n.y = Math.max(e.y, t.y)), n;
          }),
          (o.magnitudeSquared = function(e) {
            return e.x * e.x + e.y * e.y;
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
            return (t.x = e.x / n), (t.y = e.y / n), t;
          }),
          (o.dot = function(e, t) {
            return e.x * t.x + e.y * t.y;
          }),
          (o.multiplyComponents = function(e, t, n) {
            return (n.x = e.x * t.x), (n.y = e.y * t.y), n;
          }),
          (o.divideComponents = function(e, t, n) {
            return (n.x = e.x / t.x), (n.y = e.y / t.y), n;
          }),
          (o.add = function(e, t, n) {
            return (n.x = e.x + t.x), (n.y = e.y + t.y), n;
          }),
          (o.subtract = function(e, t, n) {
            return (n.x = e.x - t.x), (n.y = e.y - t.y), n;
          }),
          (o.multiplyByScalar = function(e, t, n) {
            return (n.x = e.x * t), (n.y = e.y * t), n;
          }),
          (o.divideByScalar = function(e, t, n) {
            return (n.x = e.x / t), (n.y = e.y / t), n;
          }),
          (o.negate = function(e, t) {
            return (t.x = -e.x), (t.y = -e.y), t;
          }),
          (o.abs = function(e, t) {
            return (t.x = Math.abs(e.x)), (t.y = Math.abs(e.y)), t;
          });
        var s = new o();
        o.lerp = function(e, t, n, r) {
          return (
            o.multiplyByScalar(t, n, s),
            (r = o.multiplyByScalar(e, 1 - n, r)),
            o.add(s, r, r)
          );
        };
        var c = new o(),
          l = new o();
        o.angleBetween = function(e, t) {
          return (
            o.normalize(e, c), o.normalize(t, l), i.acosClamped(o.dot(c, l))
          );
        };
        var f = new o();
        return (
          (o.mostOrthogonalAxis = function(e, t) {
            var n = o.normalize(e, f);
            return (
              o.abs(n, n),
              (t = n.x <= n.y ? o.clone(o.UNIT_X, t) : o.clone(o.UNIT_Y, t))
            );
          }),
          (o.equals = function(e, t) {
            return e === t || (n(e) && n(t) && e.x === t.x && e.y === t.y);
          }),
          (o.equalsArray = function(e, t, n) {
            return e.x === t[n] && e.y === t[n + 1];
          }),
          (o.equalsEpsilon = function(e, t, r, a) {
            return (
              e === t ||
              (n(e) &&
                n(t) &&
                i.equalsEpsilon(e.x, t.x, r, a) &&
                i.equalsEpsilon(e.y, t.y, r, a))
            );
          }),
          (o.ZERO = a(new o(0, 0))),
          (o.UNIT_X = a(new o(1, 0))),
          (o.UNIT_Y = a(new o(0, 1))),
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
            return "(" + this.x + ", " + this.y + ")";
          }),
          o
        );
      }
    ),
    define(
      "Core/EllipsoidalOccluder",
      [
        "./BoundingSphere",
        "./Cartesian3",
        "./Check",
        "./defaultValue",
        "./defined",
        "./defineProperties",
        "./Rectangle"
      ],
      function(e, t, n, r, a, i, o) {
        "use strict";
        function u(e, n) {
          (this._ellipsoid = e),
            (this._cameraPosition = new t()),
            (this._cameraPositionInScaledSpace = new t()),
            (this._distanceToLimbInScaledSpaceSquared = 0),
            a(n) && (this.cameraPosition = n);
        }
        function s(e, n, r) {
          var a = e.transformPositionToScaledSpace(n, E),
            i = t.magnitudeSquared(a),
            o = Math.sqrt(i),
            u = t.divideByScalar(a, o, m);
          (i = Math.max(1, i)), (o = Math.max(1, o));
          var s = t.dot(u, r),
            c = t.magnitude(t.cross(u, r, u)),
            l = 1 / o,
            f = Math.sqrt(i - 1) * l;
          return 1 / (s * l - c * f);
        }
        function c(e, n, r) {
          if (!(n <= 0 || n === 1 / 0 || n !== n))
            return t.multiplyByScalar(e, n, r);
        }
        function l(e, n) {
          return t.equals(n, t.ZERO)
            ? n
            : (e.transformPositionToScaledSpace(n, _), t.normalize(_, _));
        }
        i(u.prototype, {
          ellipsoid: {
            get: function() {
              return this._ellipsoid;
            }
          },
          cameraPosition: {
            get: function() {
              return this._cameraPosition;
            },
            set: function(e) {
              var n = this._ellipsoid,
                r = n.transformPositionToScaledSpace(
                  e,
                  this._cameraPositionInScaledSpace
                ),
                a = t.magnitudeSquared(r) - 1;
              t.clone(e, this._cameraPosition),
                (this._cameraPositionInScaledSpace = r),
                (this._distanceToLimbInScaledSpaceSquared = a);
            }
          }
        });
        var f = new t();
        (u.prototype.isPointVisible = function(e) {
          var t = this._ellipsoid,
            n = t.transformPositionToScaledSpace(e, f);
          return this.isScaledSpacePointVisible(n);
        }),
          (u.prototype.isScaledSpacePointVisible = function(e) {
            var n = this._cameraPositionInScaledSpace,
              r = this._distanceToLimbInScaledSpaceSquared,
              a = t.subtract(e, n, f),
              i = -t.dot(a, n),
              o = r < 0 ? i > 0 : i > r && i * i / t.magnitudeSquared(a) > r;
            return !o;
          }),
          (u.prototype.computeHorizonCullingPoint = function(e, n, r) {
            a(r) || (r = new t());
            for (
              var i = this._ellipsoid, o = l(i, e), u = 0, f = 0, d = n.length;
              f < d;
              ++f
            ) {
              var h = n[f],
                E = s(i, h, o);
              u = Math.max(u, E);
            }
            return c(o, u, r);
          });
        var d = new t();
        u.prototype.computeHorizonCullingPointFromVertices = function(
          e,
          n,
          i,
          o,
          u
        ) {
          a(u) || (u = new t()), (o = r(o, t.ZERO));
          for (
            var f = this._ellipsoid, h = l(f, e), E = 0, m = 0, _ = n.length;
            m < _;
            m += i
          ) {
            (d.x = n[m] + o.x), (d.y = n[m + 1] + o.y), (d.z = n[m + 2] + o.z);
            var p = s(f, d, h);
            E = Math.max(E, p);
          }
          return c(h, E, u);
        };
        var h = [];
        u.prototype.computeHorizonCullingPointFromRectangle = function(
          n,
          r,
          a
        ) {
          var i = o.subsample(n, r, 0, h),
            u = e.fromPoints(i);
          if (!(t.magnitude(u.center) < 0.1 * r.minimumRadius))
            return this.computeHorizonCullingPoint(u.center, i, a);
        };
        var E = new t(),
          m = new t(),
          _ = new t();
        return u;
      }
    ),
    define(
      "Core/QuadraticRealPolynomial",
      ["./DeveloperError", "./Math"],
      function(e, t) {
        "use strict";
        function n(e, n, r) {
          var a = e + n;
          return t.sign(e) !== t.sign(n) &&
          Math.abs(a / Math.max(Math.abs(e), Math.abs(n))) < r
            ? 0
            : a;
        }
        var r = {};
        return (
          (r.computeDiscriminant = function(e, t, n) {
            var r = t * t - 4 * e * n;
            return r;
          }),
          (r.computeRealRoots = function(e, r, a) {
            var i;
            if (0 === e) return 0 === r ? [] : [-a / r];
            if (0 === r) {
              if (0 === a) return [0, 0];
              var o = Math.abs(a),
                u = Math.abs(e);
              if (o < u && o / u < t.EPSILON14) return [0, 0];
              if (o > u && u / o < t.EPSILON14) return [];
              if (((i = -a / e), i < 0)) return [];
              var s = Math.sqrt(i);
              return [-s, s];
            }
            if (0 === a) return (i = -r / e), i < 0 ? [i, 0] : [0, i];
            var c = r * r,
              l = 4 * e * a,
              f = n(c, -l, t.EPSILON14);
            if (f < 0) return [];
            var d = -0.5 * n(r, t.sign(r) * Math.sqrt(f), t.EPSILON14);
            return r > 0 ? [d / e, a / d] : [a / d, d / e];
          }),
          r
        );
      }
    ),
    define(
      "Core/CubicRealPolynomial",
      ["./DeveloperError", "./QuadraticRealPolynomial"],
      function(e, t) {
        "use strict";
        function n(e, t, n, r) {
          var a,
            i,
            o = e,
            u = t / 3,
            s = n / 3,
            c = r,
            l = o * s,
            f = u * c,
            d = u * u,
            h = s * s,
            E = o * s - d,
            m = o * c - u * s,
            _ = u * c - h,
            p = 4 * E * _ - m * m;
          if (p < 0) {
            var y, T, R;
            d * f >= l * h
              ? ((y = o), (T = E), (R = -2 * u * E + o * m))
              : ((y = c), (T = _), (R = -c * m + 2 * s * _));
            var A = R < 0 ? -1 : 1,
              S = -A * Math.abs(y) * Math.sqrt(-p);
            i = -R + S;
            var N = i / 2,
              v = N < 0 ? -Math.pow(-N, 1 / 3) : Math.pow(N, 1 / 3),
              M = i === S ? -v : -T / v;
            return (
              (a = T <= 0 ? v + M : -R / (v * v + M * M + T)),
              d * f >= l * h ? [(a - u) / o] : [-c / (a + s)]
            );
          }
          var g = E,
            O = -2 * u * E + o * m,
            I = _,
            w = -c * m + 2 * s * _,
            C = Math.sqrt(p),
            x = Math.sqrt(3) / 2,
            P = Math.abs(Math.atan2(o * C, -O) / 3);
          a = 2 * Math.sqrt(-g);
          var U = Math.cos(P);
          i = a * U;
          var D = a * (-U / 2 - x * Math.sin(P)),
            L = i + D > 2 * u ? i - u : D - u,
            F = o,
            B = L / F;
          (P = Math.abs(Math.atan2(c * C, -w) / 3)),
            (a = 2 * Math.sqrt(-I)),
            (U = Math.cos(P)),
            (i = a * U),
            (D = a * (-U / 2 - x * Math.sin(P)));
          var b = -c,
            z = i + D < 2 * s ? i + s : D + s,
            q = b / z,
            G = F * z,
            W = -L * z - F * b,
            V = L * b,
            X = (s * W - u * V) / (-u * W + s * G);
          return B <= X
            ? B <= q ? (X <= q ? [B, X, q] : [B, q, X]) : [q, B, X]
            : B <= q ? [X, B, q] : X <= q ? [X, q, B] : [q, X, B];
        }
        var r = {};
        return (
          (r.computeDiscriminant = function(e, t, n, r) {
            var a = e * e,
              i = t * t,
              o = n * n,
              u = r * r,
              s =
                18 * e * t * n * r +
                i * o -
                27 * a * u -
                4 * (e * o * n + i * t * r);
            return s;
          }),
          (r.computeRealRoots = function(e, r, a, i) {
            var o, u;
            if (0 === e) return t.computeRealRoots(r, a, i);
            if (0 === r) {
              if (0 === a) {
                if (0 === i) return [0, 0, 0];
                u = -i / e;
                var s = u < 0 ? -Math.pow(-u, 1 / 3) : Math.pow(u, 1 / 3);
                return [s, s, s];
              }
              return 0 === i
                ? ((o = t.computeRealRoots(e, 0, a)),
                  0 === o.Length ? [0] : [o[0], 0, o[1]])
                : n(e, 0, a, i);
            }
            return 0 === a
              ? 0 === i
                ? ((u = -r / e), u < 0 ? [u, 0, 0] : [0, 0, u])
                : n(e, r, 0, i)
              : 0 === i
                ? ((o = t.computeRealRoots(e, r, a)),
                  0 === o.length
                    ? [0]
                    : o[1] <= 0
                      ? [o[0], o[1], 0]
                      : o[0] >= 0 ? [0, o[0], o[1]] : [o[0], 0, o[1]])
                : n(e, r, a, i);
          }),
          r
        );
      }
    ),
    define(
      "Core/QuarticRealPolynomial",
      [
        "./CubicRealPolynomial",
        "./DeveloperError",
        "./Math",
        "./QuadraticRealPolynomial"
      ],
      function(e, t, n, r) {
        "use strict";
        function a(t, a, i, o) {
          var u = t * t,
            s = a - 3 * u / 8,
            c = i - a * t / 2 + u * t / 8,
            l = o - i * t / 4 + a * u / 16 - 3 * u * u / 256,
            f = e.computeRealRoots(1, 2 * s, s * s - 4 * l, -c * c);
          if (f.length > 0) {
            var d = -t / 4,
              h = f[f.length - 1];
            if (Math.abs(h) < n.EPSILON14) {
              var E = r.computeRealRoots(1, s, l);
              if (2 === E.length) {
                var m,
                  _ = E[0],
                  p = E[1];
                if (_ >= 0 && p >= 0) {
                  var y = Math.sqrt(_),
                    T = Math.sqrt(p);
                  return [d - T, d - y, d + y, d + T];
                }
                if (_ >= 0 && p < 0) return (m = Math.sqrt(_)), [d - m, d + m];
                if (_ < 0 && p >= 0) return (m = Math.sqrt(p)), [d - m, d + m];
              }
              return [];
            }
            if (h > 0) {
              var R = Math.sqrt(h),
                A = (s + h - c / R) / 2,
                S = (s + h + c / R) / 2,
                N = r.computeRealRoots(1, R, A),
                v = r.computeRealRoots(1, -R, S);
              return 0 !== N.length
                ? ((N[0] += d),
                  (N[1] += d),
                  0 !== v.length
                    ? ((v[0] += d),
                      (v[1] += d),
                      N[1] <= v[0]
                        ? [N[0], N[1], v[0], v[1]]
                        : v[1] <= N[0]
                          ? [v[0], v[1], N[0], N[1]]
                          : N[0] >= v[0] && N[1] <= v[1]
                            ? [v[0], N[0], N[1], v[1]]
                            : v[0] >= N[0] && v[1] <= N[1]
                              ? [N[0], v[0], v[1], N[1]]
                              : N[0] > v[0] && N[0] < v[1]
                                ? [v[0], N[0], v[1], N[1]]
                                : [N[0], v[0], N[1], v[1]])
                    : N)
                : 0 !== v.length ? ((v[0] += d), (v[1] += d), v) : [];
            }
          }
          return [];
        }
        function i(t, a, i, o) {
          var u = i * i,
            s = a * a,
            c = t * t,
            l = -2 * a,
            f = i * t + s - 4 * o,
            d = c * o - i * a * t + u,
            h = e.computeRealRoots(1, l, f, d);
          if (h.length > 0) {
            var E,
              m,
              _ = h[0],
              p = a - _,
              y = p * p,
              T = t / 2,
              R = p / 2,
              A = y - 4 * o,
              S = y + 4 * Math.abs(o),
              N = c - 4 * _,
              v = c + 4 * Math.abs(_);
            if (_ < 0 || A * v < N * S) {
              var M = Math.sqrt(N);
              (E = M / 2), (m = 0 === M ? 0 : (t * R - i) / M);
            } else {
              var g = Math.sqrt(A);
              (E = 0 === g ? 0 : (t * R - i) / g), (m = g / 2);
            }
            var O, I;
            0 === T && 0 === E
              ? ((O = 0), (I = 0))
              : n.sign(T) === n.sign(E)
                ? ((O = T + E), (I = _ / O))
                : ((I = T - E), (O = _ / I));
            var w, C;
            0 === R && 0 === m
              ? ((w = 0), (C = 0))
              : n.sign(R) === n.sign(m)
                ? ((w = R + m), (C = o / w))
                : ((C = R - m), (w = o / C));
            var x = r.computeRealRoots(1, O, w),
              P = r.computeRealRoots(1, I, C);
            if (0 !== x.length)
              return 0 !== P.length
                ? x[1] <= P[0]
                  ? [x[0], x[1], P[0], P[1]]
                  : P[1] <= x[0]
                    ? [P[0], P[1], x[0], x[1]]
                    : x[0] >= P[0] && x[1] <= P[1]
                      ? [P[0], x[0], x[1], P[1]]
                      : P[0] >= x[0] && P[1] <= x[1]
                        ? [x[0], P[0], P[1], x[1]]
                        : x[0] > P[0] && x[0] < P[1]
                          ? [P[0], x[0], P[1], x[1]]
                          : [x[0], P[0], x[1], P[1]]
                : x;
            if (0 !== P.length) return P;
          }
          return [];
        }
        var o = {};
        return (
          (o.computeDiscriminant = function(e, t, n, r, a) {
            var i = e * e,
              o = i * e,
              u = t * t,
              s = u * t,
              c = n * n,
              l = c * n,
              f = r * r,
              d = f * r,
              h = a * a,
              E = h * a,
              m =
                u * c * f -
                4 * s * d -
                4 * e * l * f +
                18 * e * t * n * d -
                27 * i * f * f +
                256 * o * E +
                a *
                  (18 * s * n * r -
                    4 * u * l +
                    16 * e * c * c -
                    80 * e * t * c * r -
                    6 * e * u * f +
                    144 * i * n * f) +
                h *
                  (144 * e * u * n -
                    27 * u * u -
                    128 * i * c -
                    192 * i * t * r);
            return m;
          }),
          (o.computeRealRoots = function(t, r, o, u, s) {
            if (Math.abs(t) < n.EPSILON15)
              return e.computeRealRoots(r, o, u, s);
            var c = r / t,
              l = o / t,
              f = u / t,
              d = s / t,
              h = c < 0 ? 1 : 0;
            switch (((h += l < 0 ? h + 1 : h),
            (h += f < 0 ? h + 1 : h),
            (h += d < 0 ? h + 1 : h))) {
              case 0:
                return a(c, l, f, d);
              case 1:
                return i(c, l, f, d);
              case 2:
                return i(c, l, f, d);
              case 3:
                return a(c, l, f, d);
              case 4:
                return a(c, l, f, d);
              case 5:
                return i(c, l, f, d);
              case 6:
                return a(c, l, f, d);
              case 7:
                return a(c, l, f, d);
              case 8:
                return i(c, l, f, d);
              case 9:
                return a(c, l, f, d);
              case 10:
                return a(c, l, f, d);
              case 11:
                return i(c, l, f, d);
              case 12:
                return a(c, l, f, d);
              case 13:
                return a(c, l, f, d);
              case 14:
                return a(c, l, f, d);
              case 15:
                return a(c, l, f, d);
              default:
                return;
            }
          }),
          o
        );
      }
    ),
    define(
      "Core/Ray",
      ["./Cartesian3", "./defaultValue", "./defined", "./DeveloperError"],
      function(e, t, n, r) {
        "use strict";
        function a(n, r) {
          (r = e.clone(t(r, e.ZERO))),
            e.equals(r, e.ZERO) || e.normalize(r, r),
            (this.origin = e.clone(t(n, e.ZERO))),
            (this.direction = r);
        }
        return (
          (a.getPoint = function(t, r, a) {
            return (
              n(a) || (a = new e()),
              (a = e.multiplyByScalar(t.direction, r, a)),
              e.add(t.origin, a, a)
            );
          }),
          a
        );
      }
    ),
    define(
      "Core/IntersectionTests",
      [
        "./Cartesian3",
        "./Cartographic",
        "./defaultValue",
        "./defined",
        "./DeveloperError",
        "./Interval",
        "./Math",
        "./Matrix3",
        "./QuadraticRealPolynomial",
        "./QuarticRealPolynomial",
        "./Ray"
      ],
      function(e, t, n, r, a, i, o, u, s, c, l) {
        "use strict";
        function f(e, t, n, r) {
          var a = t * t - 4 * e * n;
          if (!(a < 0)) {
            if (a > 0) {
              var i = 1 / (2 * e),
                o = Math.sqrt(a),
                u = (-t + o) * i,
                s = (-t - o) * i;
              return (
                u < s
                  ? ((r.root0 = u), (r.root1 = s))
                  : ((r.root0 = s), (r.root1 = u)),
                r
              );
            }
            var c = -t / (2 * e);
            if (0 !== c) return (r.root0 = r.root1 = c), r;
          }
        }
        function d(t, n, a) {
          r(a) || (a = new i());
          var o = t.origin,
            u = t.direction,
            s = n.center,
            c = n.radius * n.radius,
            l = e.subtract(o, s, y),
            d = e.dot(u, u),
            h = 2 * e.dot(u, l),
            E = e.magnitudeSquared(l) - c,
            m = f(d, h, E, S);
          if (r(m)) return (a.start = m.root0), (a.stop = m.root1), a;
        }
        function h(e, t, n) {
          var r = e + t;
          return o.sign(e) !== o.sign(t) &&
          Math.abs(r / Math.max(Math.abs(e), Math.abs(t))) < n
            ? 0
            : r;
        }
        function E(t, n, r, a, i) {
          var l,
            f = a * a,
            d = i * i,
            E = (t[u.COLUMN1ROW1] - t[u.COLUMN2ROW2]) * d,
            m =
              i *
              (a * h(t[u.COLUMN1ROW0], t[u.COLUMN0ROW1], o.EPSILON15) + n.y),
            _ = t[u.COLUMN0ROW0] * f + t[u.COLUMN2ROW2] * d + a * n.x + r,
            p = d * h(t[u.COLUMN2ROW1], t[u.COLUMN1ROW2], o.EPSILON15),
            y = i * (a * h(t[u.COLUMN2ROW0], t[u.COLUMN0ROW2]) + n.z),
            T = [];
          if (0 === y && 0 === p) {
            if (((l = s.computeRealRoots(E, m, _)), 0 === l.length)) return T;
            var R = l[0],
              A = Math.sqrt(Math.max(1 - R * R, 0));
            if (
              (T.push(new e(a, i * R, i * -A)),
              T.push(new e(a, i * R, i * A)),
              2 === l.length)
            ) {
              var S = l[1],
                N = Math.sqrt(Math.max(1 - S * S, 0));
              T.push(new e(a, i * S, i * -N)), T.push(new e(a, i * S, i * N));
            }
            return T;
          }
          var v = y * y,
            M = p * p,
            g = E * E,
            O = y * p,
            I = g + M,
            w = 2 * (m * E + O),
            C = 2 * _ * E + m * m - M + v,
            x = 2 * (_ * m - O),
            P = _ * _ - v;
          if (0 === I && 0 === w && 0 === C && 0 === x) return T;
          l = c.computeRealRoots(I, w, C, x, P);
          var U = l.length;
          if (0 === U) return T;
          for (var D = 0; D < U; ++D) {
            var L,
              F = l[D],
              B = F * F,
              b = Math.max(1 - B, 0),
              z = Math.sqrt(b);
            L =
              o.sign(E) === o.sign(_)
                ? h(E * B + _, m * F, o.EPSILON12)
                : o.sign(_) === o.sign(m * F)
                  ? h(E * B, m * F + _, o.EPSILON12)
                  : h(E * B + m * F, _, o.EPSILON12);
            var q = h(p * F, y, o.EPSILON15),
              G = L * q;
            G < 0
              ? T.push(new e(a, i * F, i * z))
              : G > 0
                ? T.push(new e(a, i * F, i * -z))
                : 0 !== z
                  ? (T.push(new e(a, i * F, i * -z)),
                    T.push(new e(a, i * F, i * z)),
                    ++D)
                  : T.push(new e(a, i * F, i * z));
          }
          return T;
        }
        var m = {};
        m.rayPlane = function(t, n, a) {
          r(a) || (a = new e());
          var i = t.origin,
            u = t.direction,
            s = n.normal,
            c = e.dot(s, u);
          if (!(Math.abs(c) < o.EPSILON15)) {
            var l = (-n.distance - e.dot(s, i)) / c;
            if (!(l < 0))
              return (a = e.multiplyByScalar(u, l, a)), e.add(i, a, a);
          }
        };
        var _ = new e(),
          p = new e(),
          y = new e(),
          T = new e(),
          R = new e();
        (m.rayTriangleParametric = function(t, r, a, i, u) {
          u = n(u, !1);
          var s,
            c,
            l,
            f,
            d,
            h = t.origin,
            E = t.direction,
            m = e.subtract(a, r, _),
            A = e.subtract(i, r, p),
            S = e.cross(E, A, y),
            N = e.dot(m, S);
          if (u) {
            if (N < o.EPSILON6) return;
            if (((s = e.subtract(h, r, T)), (l = e.dot(s, S)), l < 0 || l > N))
              return;
            if (((c = e.cross(s, m, R)), (f = e.dot(E, c)), f < 0 || l + f > N))
              return;
            d = e.dot(A, c) / N;
          } else {
            if (Math.abs(N) < o.EPSILON6) return;
            var v = 1 / N;
            if (
              ((s = e.subtract(h, r, T)), (l = e.dot(s, S) * v), l < 0 || l > 1)
            )
              return;
            if (
              ((c = e.cross(s, m, R)),
              (f = e.dot(E, c) * v),
              f < 0 || l + f > 1)
            )
              return;
            d = e.dot(A, c) * v;
          }
          return d;
        }),
          (m.rayTriangle = function(t, n, a, i, o, u) {
            var s = m.rayTriangleParametric(t, n, a, i, o);
            if (r(s) && !(s < 0))
              return (
                r(u) || (u = new e()),
                e.multiplyByScalar(t.direction, s, u),
                e.add(t.origin, u, u)
              );
          });
        var A = new l();
        m.lineSegmentTriangle = function(t, n, a, i, o, u, s) {
          var c = A;
          e.clone(t, c.origin),
            e.subtract(n, t, c.direction),
            e.normalize(c.direction, c.direction);
          var l = m.rayTriangleParametric(c, a, i, o, u);
          if (!(!r(l) || l < 0 || l > e.distance(t, n)))
            return (
              r(s) || (s = new e()),
              e.multiplyByScalar(c.direction, l, s),
              e.add(c.origin, s, s)
            );
        };
        var S = { root0: 0, root1: 0 };
        m.raySphere = function(e, t, n) {
          if (((n = d(e, t, n)), r(n) && !(n.stop < 0)))
            return (n.start = Math.max(n.start, 0)), n;
        };
        var N = new l();
        m.lineSegmentSphere = function(t, n, a, i) {
          var o = N;
          e.clone(t, o.origin);
          var u = e.subtract(n, t, o.direction),
            s = e.magnitude(u);
          if (
            (e.normalize(u, u),
            (i = d(o, a, i)),
            !(!r(i) || i.stop < 0 || i.start > s))
          )
            return (
              (i.start = Math.max(i.start, 0)),
              (i.stop = Math.min(i.stop, s)),
              i
            );
        };
        var v = new e(),
          M = new e();
        m.rayEllipsoid = function(t, n) {
          var r,
            a,
            o,
            u,
            s,
            c = n.oneOverRadii,
            l = e.multiplyComponents(c, t.origin, v),
            f = e.multiplyComponents(c, t.direction, M),
            d = e.magnitudeSquared(l),
            h = e.dot(l, f);
          if (d > 1) {
            if (h >= 0) return;
            var E = h * h;
            if (((r = d - 1), (a = e.magnitudeSquared(f)), (o = a * r), E < o))
              return;
            if (E > o) {
              (u = h * h - o), (s = -h + Math.sqrt(u));
              var m = s / a,
                _ = r / s;
              return m < _ ? new i(m, _) : { start: _, stop: m };
            }
            var p = Math.sqrt(r / a);
            return new i(p, p);
          }
          return d < 1
            ? ((r = d - 1),
              (a = e.magnitudeSquared(f)),
              (o = a * r),
              (u = h * h - o),
              (s = -h + Math.sqrt(u)),
              new i(0, s / a))
            : h < 0 ? ((a = e.magnitudeSquared(f)), new i(0, -h / a)) : void 0;
        };
        var g = new e(),
          O = new e(),
          I = new e(),
          w = new e(),
          C = new e(),
          x = new u(),
          P = new u(),
          U = new u(),
          D = new u(),
          L = new u(),
          F = new u(),
          B = new u(),
          b = new e(),
          z = new e(),
          q = new t();
        m.grazingAltitudeLocation = function(t, n) {
          var a = t.origin,
            i = t.direction;
          if (!e.equals(a, e.ZERO)) {
            var s = n.geodeticSurfaceNormal(a, g);
            if (e.dot(i, s) >= 0) return a;
          }
          var c = r(this.rayEllipsoid(t, n)),
            l = n.transformPositionToScaledSpace(i, g),
            f = e.normalize(l, l),
            d = e.mostOrthogonalAxis(l, w),
            h = e.normalize(e.cross(d, f, O), O),
            m = e.normalize(e.cross(f, h, I), I),
            _ = x;
          (_[0] = f.x),
            (_[1] = f.y),
            (_[2] = f.z),
            (_[3] = h.x),
            (_[4] = h.y),
            (_[5] = h.z),
            (_[6] = m.x),
            (_[7] = m.y),
            (_[8] = m.z);
          var p = u.transpose(_, P),
            y = u.fromScale(n.radii, U),
            T = u.fromScale(n.oneOverRadii, D),
            R = L;
          (R[0] = 0),
            (R[1] = -i.z),
            (R[2] = i.y),
            (R[3] = i.z),
            (R[4] = 0),
            (R[5] = -i.x),
            (R[6] = -i.y),
            (R[7] = i.x),
            (R[8] = 0);
          var A,
            S,
            N = u.multiply(u.multiply(p, T, F), R, F),
            v = u.multiply(u.multiply(N, y, B), _, B),
            M = u.multiplyByVector(N, a, C),
            G = E(v, e.negate(M, g), 0, 0, 1),
            W = G.length;
          if (W > 0) {
            for (
              var V = e.clone(e.ZERO, z), X = Number.NEGATIVE_INFINITY, H = 0;
              H < W;
              ++H
            ) {
              A = u.multiplyByVector(y, u.multiplyByVector(_, G[H], b), b);
              var Y = e.normalize(e.subtract(A, a, w), w),
                k = e.dot(Y, i);
              k > X && ((X = k), (V = e.clone(A, V)));
            }
            var j = n.cartesianToCartographic(V, q);
            return (
              (X = o.clamp(X, 0, 1)),
              (S = e.magnitude(e.subtract(V, a, w)) * Math.sqrt(1 - X * X)),
              (S = c ? -S : S),
              (j.height = S),
              n.cartographicToCartesian(j, new e())
            );
          }
        };
        var G = new e();
        return (
          (m.lineSegmentPlane = function(t, n, a, i) {
            r(i) || (i = new e());
            var u = e.subtract(n, t, G),
              s = a.normal,
              c = e.dot(s, u);
            if (!(Math.abs(c) < o.EPSILON6)) {
              var l = e.dot(s, t),
                f = -(a.distance + l) / c;
              if (!(f < 0 || f > 1))
                return e.multiplyByScalar(u, f, i), e.add(t, i, i), i;
            }
          }),
          (m.trianglePlaneIntersection = function(t, n, r, a) {
            var i = a.normal,
              o = a.distance,
              u = e.dot(i, t) + o < 0,
              s = e.dot(i, n) + o < 0,
              c = e.dot(i, r) + o < 0,
              l = 0;
            (l += u ? 1 : 0), (l += s ? 1 : 0), (l += c ? 1 : 0);
            var f, d;
            if (
              ((1 !== l && 2 !== l) || ((f = new e()), (d = new e())), 1 === l)
            ) {
              if (u)
                return (
                  m.lineSegmentPlane(t, n, a, f),
                  m.lineSegmentPlane(t, r, a, d),
                  {
                    positions: [t, n, r, f, d],
                    indices: [0, 3, 4, 1, 2, 4, 1, 4, 3]
                  }
                );
              if (s)
                return (
                  m.lineSegmentPlane(n, r, a, f),
                  m.lineSegmentPlane(n, t, a, d),
                  {
                    positions: [t, n, r, f, d],
                    indices: [1, 3, 4, 2, 0, 4, 2, 4, 3]
                  }
                );
              if (c)
                return (
                  m.lineSegmentPlane(r, t, a, f),
                  m.lineSegmentPlane(r, n, a, d),
                  {
                    positions: [t, n, r, f, d],
                    indices: [2, 3, 4, 0, 1, 4, 0, 4, 3]
                  }
                );
            } else if (2 === l) {
              if (!u)
                return (
                  m.lineSegmentPlane(n, t, a, f),
                  m.lineSegmentPlane(r, t, a, d),
                  {
                    positions: [t, n, r, f, d],
                    indices: [1, 2, 4, 1, 4, 3, 0, 3, 4]
                  }
                );
              if (!s)
                return (
                  m.lineSegmentPlane(r, n, a, f),
                  m.lineSegmentPlane(t, n, a, d),
                  {
                    positions: [t, n, r, f, d],
                    indices: [2, 0, 4, 2, 4, 3, 1, 3, 4]
                  }
                );
              if (!c)
                return (
                  m.lineSegmentPlane(t, r, a, f),
                  m.lineSegmentPlane(n, r, a, d),
                  {
                    positions: [t, n, r, f, d],
                    indices: [0, 1, 4, 0, 4, 3, 2, 3, 4]
                  }
                );
            }
          }),
          m
        );
      }
    ),
    define(
      "Core/Plane",
      [
        "./Cartesian3",
        "./defined",
        "./DeveloperError",
        "./freezeObject",
        "./Math"
      ],
      function(e, t, n, r, a) {
        "use strict";
        function i(t, n) {
          (this.normal = e.clone(t)), (this.distance = n);
        }
        i.fromPointNormal = function(n, r, a) {
          var o = -e.dot(r, n);
          return t(a)
            ? (e.clone(r, a.normal), (a.distance = o), a)
            : new i(r, o);
        };
        var o = new e();
        return (
          (i.fromCartesian4 = function(n, r) {
            var a = e.fromCartesian4(n, o),
              u = n.w;
            return t(r)
              ? (e.clone(a, r.normal), (r.distance = u), r)
              : new i(a, u);
          }),
          (i.getPointDistance = function(t, n) {
            return e.dot(t.normal, n) + t.distance;
          }),
          (i.ORIGIN_XY_PLANE = r(new i(e.UNIT_Z, 0))),
          (i.ORIGIN_YZ_PLANE = r(new i(e.UNIT_X, 0))),
          (i.ORIGIN_ZX_PLANE = r(new i(e.UNIT_Y, 0))),
          i
        );
      }
    ),
    (function(e) {
      "use strict";
      e("ThirdParty/when", [], function() {
        function e(e, n, r, a) {
          return t(e).then(n, r, a);
        }
        function t(e) {
          var t, n;
          return (
            e instanceof r
              ? (t = e)
              : u(e)
                ? ((n = o()),
                  e.then(
                    function(e) {
                      n.resolve(e);
                    },
                    function(e) {
                      n.reject(e);
                    },
                    function(e) {
                      n.progress(e);
                    }
                  ),
                  (t = n.promise))
                : (t = a(e)),
            t
          );
        }
        function n(t) {
          return e(t, i);
        }
        function r(e) {
          this.then = e;
        }
        function a(e) {
          var n = new r(function(n) {
            try {
              return t(n ? n(e) : e);
            } catch (e) {
              return i(e);
            }
          });
          return n;
        }
        function i(e) {
          var n = new r(function(n, r) {
            try {
              return r ? t(r(e)) : i(e);
            } catch (e) {
              return i(e);
            }
          });
          return n;
        }
        function o() {
          function e(e, t, n) {
            return d(e, t, n);
          }
          function n(e) {
            return E(e);
          }
          function a(e) {
            return E(i(e));
          }
          function u(e) {
            return h(e);
          }
          var s, c, l, f, d, h, E;
          return (
            (c = new r(e)),
            (s = {
              then: e,
              resolve: n,
              reject: a,
              progress: u,
              promise: c,
              resolver: { resolve: n, reject: a, progress: u }
            }),
            (l = []),
            (f = []),
            (d = function(e, t, n) {
              var r, a;
              return (
                (r = o()),
                (a =
                  "function" == typeof n
                    ? function(e) {
                        try {
                          r.progress(n(e));
                        } catch (e) {
                          r.progress(e);
                        }
                      }
                    : function(e) {
                        r.progress(e);
                      }),
                l.push(function(n) {
                  n.then(e, t).then(r.resolve, r.reject, a);
                }),
                f.push(a),
                r.promise
              );
            }),
            (h = function(e) {
              return m(f, e), e;
            }),
            (E = function(e) {
              return (
                (e = t(e)),
                (d = e.then),
                (E = t),
                (h = p),
                m(l, e),
                (f = l = A),
                e
              );
            }),
            s
          );
        }
        function u(e) {
          return e && "function" == typeof e.then;
        }
        function s(t, n, r, a, i) {
          return (
            _(2, arguments),
            e(t, function(t) {
              function u(e) {
                m(e);
              }
              function s(e) {
                E(e);
              }
              var c, l, f, d, h, E, m, _, y, T;
              if (
                ((y = t.length >>> 0),
                (c = Math.max(0, Math.min(n, y))),
                (f = []),
                (l = y - c + 1),
                (d = []),
                (h = o()),
                c)
              )
                for (
                  _ = h.progress,
                    m = function(e) {
                      d.push(e), --l || ((E = m = p), h.reject(d));
                    },
                    E = function(e) {
                      f.push(e), --c || ((E = m = p), h.resolve(f));
                    },
                    T = 0;
                  T < y;
                  ++T
                )
                  T in t && e(t[T], s, u, _);
              else h.resolve(f);
              return h.then(r, a, i);
            })
          );
        }
        function c(e, t, n, r) {
          function a(e) {
            return t ? t(e[0]) : e[0];
          }
          return s(e, 1, a, n, r);
        }
        function l(e, t, n, r) {
          return _(1, arguments), d(e, y).then(t, n, r);
        }
        function f() {
          return d(arguments, y);
        }
        function d(t, n) {
          return e(t, function(t) {
            var r, a, i, u, s, c;
            if (((i = a = t.length >>> 0), (r = []), (c = o()), i))
              for (
                u = function(t, a) {
                  e(t, n).then(function(e) {
                    (r[a] = e), --i || c.resolve(r);
                  }, c.reject);
                },
                  s = 0;
                s < a;
                s++
              )
                s in t ? u(t[s], s) : --i;
            else c.resolve(r);
            return c.promise;
          });
        }
        function h(t, n) {
          var r = R.call(arguments, 1);
          return e(t, function(t) {
            var a;
            return (
              (a = t.length),
              (r[0] = function(t, r, i) {
                return e(t, function(t) {
                  return e(r, function(e) {
                    return n(t, e, i, a);
                  });
                });
              }),
              T.apply(t, r)
            );
          });
        }
        function E(t, n, r) {
          var a = arguments.length > 2;
          return e(
            t,
            function(e) {
              return (e = a ? r : e), n.resolve(e), e;
            },
            function(e) {
              return n.reject(e), i(e);
            },
            n.progress
          );
        }
        function m(e, t) {
          for (var n, r = 0; (n = e[r++]); ) n(t);
        }
        function _(e, t) {
          for (var n, r = t.length; r > e; )
            if (((n = t[--r]), null != n && "function" != typeof n))
              throw new Error("arg " + r + " must be a function");
        }
        function p() {}
        function y(e) {
          return e;
        }
        var T, R, A;
        return (
          (e.defer = o),
          (e.resolve = t),
          (e.reject = n),
          (e.join = f),
          (e.all = l),
          (e.map = d),
          (e.reduce = h),
          (e.any = c),
          (e.some = s),
          (e.chain = E),
          (e.isPromise = u),
          (r.prototype = {
            always: function(e, t) {
              return this.then(e, e, t);
            },
            otherwise: function(e) {
              return this.then(A, e);
            },
            yield: function(e) {
              return this.then(function() {
                return e;
              });
            },
            spread: function(e) {
              return this.then(function(t) {
                return l(t, function(t) {
                  return e.apply(A, t);
                });
              });
            }
          }),
          (R = [].slice),
          (T =
            [].reduce ||
            function(e) {
              var t, n, r, a, i;
              if (
                ((i = 0),
                (t = Object(this)),
                (a = t.length >>> 0),
                (n = arguments),
                n.length <= 1)
              )
                for (;;) {
                  if (i in t) {
                    r = t[i++];
                    break;
                  }
                  if (++i >= a) throw new TypeError();
                }
              else r = n[1];
              for (; i < a; ++i) i in t && (r = e(r, t[i], i, t));
              return r;
            }),
          e
        );
      });
    })(
      "function" == typeof define && define.amd
        ? define
        : function(e) {
            "object" == typeof exports
              ? (module.exports = e())
              : (this.when = e());
          }
    ),
    define("Core/binarySearch", ["./Check", "./defined"], function(e, t) {
      "use strict";
      function n(e, t, n) {
        for (var r, a, i = 0, o = e.length - 1; i <= o; )
          if (((r = ~~((i + o) / 2)), (a = n(e[r], t)), a < 0)) i = r + 1;
          else {
            if (!(a > 0)) return r;
            o = r - 1;
          }
        return ~(o + 1);
      }
      return n;
    }),
    define("Core/EarthOrientationParametersSample", [], function() {
      "use strict";
      function e(e, t, n, r, a) {
        (this.xPoleWander = e),
          (this.yPoleWander = t),
          (this.xPoleOffset = n),
          (this.yPoleOffset = r),
          (this.ut1MinusUtc = a);
      }
      return e;
    }),
    define("ThirdParty/sprintf", [], function() {
      function e() {
        var e = /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g,
          t = arguments,
          n = 0,
          r = t[n++],
          a = function(e, t, n, r) {
            n || (n = " ");
            var a =
              e.length >= t ? "" : Array((1 + t - e.length) >>> 0).join(n);
            return r ? e + a : a + e;
          },
          i = function(e, t, n, r, i, o) {
            var u = r - e.length;
            return (
              u > 0 &&
                (e =
                  n || !i
                    ? a(e, r, o, n)
                    : e.slice(0, t.length) +
                      a("", u, "0", !0) +
                      e.slice(t.length)),
              e
            );
          },
          o = function(e, t, n, r, o, u, s) {
            var c = e >>> 0;
            return (
              (n = (n && c && { 2: "0b", 8: "0", 16: "0x" }[t]) || ""),
              (e = n + a(c.toString(t), u || 0, "0", !1)),
              i(e, n, r, o, s)
            );
          },
          u = function(e, t, n, r, a, o) {
            return null != r && (e = e.slice(0, r)), i(e, "", t, n, a, o);
          },
          s = function(e, r, s, c, l, f, d) {
            var h, E, m, _, p;
            if ("%%" == e) return "%";
            for (
              var y = !1, T = "", R = !1, A = !1, S = " ", N = s.length, v = 0;
              s && v < N;
              v++
            )
              switch (s.charAt(v)) {
                case " ":
                  T = " ";
                  break;
                case "+":
                  T = "+";
                  break;
                case "-":
                  y = !0;
                  break;
                case "'":
                  S = s.charAt(v + 1);
                  break;
                case "0":
                  R = !0;
                  break;
                case "#":
                  A = !0;
              }
            if (
              ((c = c
                ? "*" == c
                  ? +t[n++]
                  : "*" == c.charAt(0) ? +t[c.slice(1, -1)] : +c
                : 0),
              c < 0 && ((c = -c), (y = !0)),
              !isFinite(c))
            )
              throw new Error("sprintf: (minimum-)width must be finite");
            switch (((f = f
              ? "*" == f
                ? +t[n++]
                : "*" == f.charAt(0) ? +t[f.slice(1, -1)] : +f
              : "fFeE".indexOf(d) > -1 ? 6 : "d" == d ? 0 : void 0),
            (p = r ? t[r.slice(0, -1)] : t[n++]),
            d)) {
              case "s":
                return u(String(p), y, c, f, R, S);
              case "c":
                return u(String.fromCharCode(+p), y, c, f, R);
              case "b":
                return o(p, 2, A, y, c, f, R);
              case "o":
                return o(p, 8, A, y, c, f, R);
              case "x":
                return o(p, 16, A, y, c, f, R);
              case "X":
                return o(p, 16, A, y, c, f, R).toUpperCase();
              case "u":
                return o(p, 10, A, y, c, f, R);
              case "i":
              case "d":
                return (
                  (h = +p || 0),
                  (h = Math.round(h - h % 1)),
                  (E = h < 0 ? "-" : T),
                  (p = E + a(String(Math.abs(h)), f, "0", !1)),
                  i(p, E, y, c, R)
                );
              case "e":
              case "E":
              case "f":
              case "F":
              case "g":
              case "G":
                return (
                  (h = +p),
                  (E = h < 0 ? "-" : T),
                  (m = ["toExponential", "toFixed", "toPrecision"][
                    "efg".indexOf(d.toLowerCase())
                  ]),
                  (_ = ["toString", "toUpperCase"]["eEfFgG".indexOf(d) % 2]),
                  (p = E + Math.abs(h)[m](f)),
                  i(p, E, y, c, R)[_]()
                );
              default:
                return e;
            }
          };
        return r.replace(e, s);
      }
      return e;
    }),
    define("Core/GregorianDate", [], function() {
      "use strict";
      function e(e, t, n, r, a, i, o, u) {
        (this.year = e),
          (this.month = t),
          (this.day = n),
          (this.hour = r),
          (this.minute = a),
          (this.second = i),
          (this.millisecond = o),
          (this.isLeapSecond = u);
      }
      return e;
    }),
    define("Core/isLeapYear", ["./DeveloperError"], function(e) {
      "use strict";
      function t(e) {
        return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0;
      }
      return t;
    }),
    define("Core/LeapSecond", [], function() {
      "use strict";
      function e(e, t) {
        (this.julianDate = e), (this.offset = t);
      }
      return e;
    }),
    define("Core/TimeConstants", ["./freezeObject"], function(e) {
      "use strict";
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
      };
      return e(t);
    }),
    define("Core/TimeStandard", ["./freezeObject"], function(e) {
      "use strict";
      var t = { UTC: 0, TAI: 1 };
      return e(t);
    }),
    define(
      "Core/JulianDate",
      [
        "../ThirdParty/sprintf",
        "./binarySearch",
        "./defaultValue",
        "./defined",
        "./DeveloperError",
        "./GregorianDate",
        "./isLeapYear",
        "./LeapSecond",
        "./TimeConstants",
        "./TimeStandard"
      ],
      function(e, t, n, r, a, i, o, u, s, c) {
        "use strict";
        function l(e, t) {
          return m.compare(e.julianDate, t.julianDate);
        }
        function f(e) {
          T.julianDate = e;
          var n = m.leapSeconds,
            r = t(n, T, l);
          r < 0 && (r = ~r), r >= n.length && (r = n.length - 1);
          var a = n[r].offset;
          if (r > 0) {
            var i = m.secondsDifference(n[r].julianDate, e);
            i > a && (r--, (a = n[r].offset));
          }
          m.addSeconds(e, a, e);
        }
        function d(e, n) {
          T.julianDate = e;
          var r = m.leapSeconds,
            a = t(r, T, l);
          if ((a < 0 && (a = ~a), 0 === a))
            return m.addSeconds(e, -r[0].offset, n);
          if (a >= r.length) return m.addSeconds(e, -r[a - 1].offset, n);
          var i = m.secondsDifference(r[a].julianDate, e);
          return 0 === i
            ? m.addSeconds(e, -r[a].offset, n)
            : i <= 1 ? void 0 : m.addSeconds(e, -r[--a].offset, n);
        }
        function h(e, t, n) {
          var r = (t / s.SECONDS_PER_DAY) | 0;
          return (
            (e += r),
            (t -= s.SECONDS_PER_DAY * r),
            t < 0 && (e--, (t += s.SECONDS_PER_DAY)),
            (n.dayNumber = e),
            (n.secondsOfDay = t),
            n
          );
        }
        function E(e, t, n, r, a, i, o) {
          var u = ((t - 14) / 12) | 0,
            c = e + 4800 + u,
            l =
              ((1461 * c / 4) | 0) +
              ((367 * (t - 2 - 12 * u) / 12) | 0) -
              ((3 * (((c + 100) / 100) | 0) / 4) | 0) +
              n -
              32075;
          (r -= 12), r < 0 && (r += 24);
          var f =
            i +
            (r * s.SECONDS_PER_HOUR +
              a * s.SECONDS_PER_MINUTE +
              o * s.SECONDS_PER_MILLISECOND);
          return f >= 43200 && (l -= 1), [l, f];
        }
        function m(e, t, r) {
          (this.dayNumber = void 0),
            (this.secondsOfDay = void 0),
            (e = n(e, 0)),
            (t = n(t, 0)),
            (r = n(r, c.UTC));
          var a = 0 | e;
          (t += (e - a) * s.SECONDS_PER_DAY),
            h(a, t, this),
            r === c.UTC && f(this);
        }
        var _ = new i(),
          p = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
          y = 29,
          T = new u(),
          R = /^(\d{4})$/,
          A = /^(\d{4})-(\d{2})$/,
          S = /^(\d{4})-?(\d{3})$/,
          N = /^(\d{4})-?W(\d{2})-?(\d{1})?$/,
          v = /^(\d{4})-?(\d{2})-?(\d{2})$/,
          M = /([Z+\-])?(\d{2})?:?(\d{2})?$/,
          g = /^(\d{2})(\.\d+)?/.source + M.source,
          O = /^(\d{2}):?(\d{2})(\.\d+)?/.source + M.source,
          I = /^(\d{2}):?(\d{2}):?(\d{2})(\.\d+)?/.source + M.source;
        (m.fromGregorianDate = function(e, t) {
          var n = E(
            e.year,
            e.month,
            e.day,
            e.hour,
            e.minute,
            e.second,
            e.millisecond
          );
          return r(t) ? (h(n[0], n[1], t), f(t), t) : new m(n[0], n[1], c.UTC);
        }),
          (m.fromDate = function(e, t) {
            var n = E(
              e.getUTCFullYear(),
              e.getUTCMonth() + 1,
              e.getUTCDate(),
              e.getUTCHours(),
              e.getUTCMinutes(),
              e.getUTCSeconds(),
              e.getUTCMilliseconds()
            );
            return r(t)
              ? (h(n[0], n[1], t), f(t), t)
              : new m(n[0], n[1], c.UTC);
          }),
          (m.fromIso8601 = function(e, t) {
            e = e.replace(",", ".");
            var n,
              a,
              i,
              u = e.split("T"),
              s = 1,
              l = 1,
              d = 0,
              _ = 0,
              T = 0,
              M = 0,
              w = u[0],
              C = u[1];
            if (((u = w.match(v)), null !== u))
              (n = +u[1]), (s = +u[2]), (l = +u[3]);
            else if (((u = w.match(A)), null !== u)) (n = +u[1]), (s = +u[2]);
            else if (((u = w.match(R)), null !== u)) n = +u[1];
            else {
              var x;
              if (((u = w.match(S)), null !== u))
                (n = +u[1]), (x = +u[2]), (i = o(n));
              else if (((u = w.match(N)), null !== u)) {
                n = +u[1];
                var P = +u[2],
                  U = +u[3] || 0,
                  D = new Date(Date.UTC(n, 0, 4));
                x = 7 * P + U - D.getUTCDay() - 3;
              }
              (a = new Date(Date.UTC(n, 0, 1))),
                a.setUTCDate(x),
                (s = a.getUTCMonth() + 1),
                (l = a.getUTCDate());
            }
            i = o(n);
            var L;
            if (r(C)) {
              (u = C.match(I)),
                null !== u
                  ? ((d = +u[1]),
                    (_ = +u[2]),
                    (T = +u[3]),
                    (M = 1e3 * +(u[4] || 0)),
                    (L = 5))
                  : ((u = C.match(O)),
                    null !== u
                      ? ((d = +u[1]),
                        (_ = +u[2]),
                        (T = 60 * +(u[3] || 0)),
                        (L = 4))
                      : ((u = C.match(g)),
                        null !== u &&
                          ((d = +u[1]), (_ = 60 * +(u[2] || 0)), (L = 3))));
              var F = u[L],
                B = +u[L + 1],
                b = +(u[L + 2] || 0);
              switch (F) {
                case "+":
                  (d -= B), (_ -= b);
                  break;
                case "-":
                  (d += B), (_ += b);
                  break;
                case "Z":
                  break;
                default:
                  _ += new Date(
                    Date.UTC(n, s - 1, l, d, _)
                  ).getTimezoneOffset();
              }
            }
            var z = 60 === T;
            for (z && T--; _ >= 60; ) (_ -= 60), d++;
            for (; d >= 24; ) (d -= 24), l++;
            for (a = i && 2 === s ? y : p[s - 1]; l > a; )
              (l -= a),
                s++,
                s > 12 && ((s -= 12), n++),
                (a = i && 2 === s ? y : p[s - 1]);
            for (; _ < 0; ) (_ += 60), d--;
            for (; d < 0; ) (d += 24), l--;
            for (; l < 1; )
              s--,
                s < 1 && ((s += 12), n--),
                (a = i && 2 === s ? y : p[s - 1]),
                (l += a);
            var q = E(n, s, l, d, _, T, M);
            return (
              r(t) ? (h(q[0], q[1], t), f(t)) : (t = new m(q[0], q[1], c.UTC)),
              z && m.addSeconds(t, 1, t),
              t
            );
          }),
          (m.now = function(e) {
            return m.fromDate(new Date(), e);
          });
        var w = new m(0, 0, c.TAI);
        return (
          (m.toGregorianDate = function(e, t) {
            var n = !1,
              a = d(e, w);
            r(a) || (m.addSeconds(e, -1, w), (a = d(w, w)), (n = !0));
            var o = a.dayNumber,
              u = a.secondsOfDay;
            u >= 43200 && (o += 1);
            var c = (o + 68569) | 0,
              l = (4 * c / 146097) | 0;
            c = (c - (((146097 * l + 3) / 4) | 0)) | 0;
            var f = (4e3 * (c + 1) / 1461001) | 0;
            c = (c - ((1461 * f / 4) | 0) + 31) | 0;
            var h = (80 * c / 2447) | 0,
              E = (c - ((2447 * h / 80) | 0)) | 0;
            c = (h / 11) | 0;
            var _ = (h + 2 - 12 * c) | 0,
              p = (100 * (l - 49) + f + c) | 0,
              y = (u / s.SECONDS_PER_HOUR) | 0,
              T = u - y * s.SECONDS_PER_HOUR,
              R = (T / s.SECONDS_PER_MINUTE) | 0;
            T -= R * s.SECONDS_PER_MINUTE;
            var A = 0 | T,
              S = (T - A) / s.SECONDS_PER_MILLISECOND;
            return (
              (y += 12),
              y > 23 && (y -= 24),
              n && (A += 1),
              r(t)
                ? ((t.year = p),
                  (t.month = _),
                  (t.day = E),
                  (t.hour = y),
                  (t.minute = R),
                  (t.second = A),
                  (t.millisecond = S),
                  (t.isLeapSecond = n),
                  t)
                : new i(p, _, E, y, R, A, S, n)
            );
          }),
          (m.toDate = function(e) {
            var t = m.toGregorianDate(e, _),
              n = t.second;
            return (
              t.isLeapSecond && (n -= 1),
              new Date(
                Date.UTC(
                  t.year,
                  t.month - 1,
                  t.day,
                  t.hour,
                  t.minute,
                  n,
                  t.millisecond
                )
              )
            );
          }),
          (m.toIso8601 = function(t, n) {
            var a,
              i = m.toGregorianDate(t, _);
            return r(n) || 0 === i.millisecond
              ? r(n) && 0 !== n
                ? ((a = (0.01 * i.millisecond)
                    .toFixed(n)
                    .replace(".", "")
                    .slice(0, n)),
                  e(
                    "%04d-%02d-%02dT%02d:%02d:%02d.%sZ",
                    i.year,
                    i.month,
                    i.day,
                    i.hour,
                    i.minute,
                    i.second,
                    a
                  ))
                : e(
                    "%04d-%02d-%02dT%02d:%02d:%02dZ",
                    i.year,
                    i.month,
                    i.day,
                    i.hour,
                    i.minute,
                    i.second
                  )
              : ((a = (0.01 * i.millisecond).toString().replace(".", "")),
                e(
                  "%04d-%02d-%02dT%02d:%02d:%02d.%sZ",
                  i.year,
                  i.month,
                  i.day,
                  i.hour,
                  i.minute,
                  i.second,
                  a
                ));
          }),
          (m.clone = function(e, t) {
            if (r(e))
              return r(t)
                ? ((t.dayNumber = e.dayNumber),
                  (t.secondsOfDay = e.secondsOfDay),
                  t)
                : new m(e.dayNumber, e.secondsOfDay, c.TAI);
          }),
          (m.compare = function(e, t) {
            var n = e.dayNumber - t.dayNumber;
            return 0 !== n ? n : e.secondsOfDay - t.secondsOfDay;
          }),
          (m.equals = function(e, t) {
            return (
              e === t ||
              (r(e) &&
                r(t) &&
                e.dayNumber === t.dayNumber &&
                e.secondsOfDay === t.secondsOfDay)
            );
          }),
          (m.equalsEpsilon = function(e, t, n) {
            return (
              e === t ||
              (r(e) && r(t) && Math.abs(m.secondsDifference(e, t)) <= n)
            );
          }),
          (m.totalDays = function(e) {
            return e.dayNumber + e.secondsOfDay / s.SECONDS_PER_DAY;
          }),
          (m.secondsDifference = function(e, t) {
            var n = (e.dayNumber - t.dayNumber) * s.SECONDS_PER_DAY;
            return n + (e.secondsOfDay - t.secondsOfDay);
          }),
          (m.daysDifference = function(e, t) {
            var n = e.dayNumber - t.dayNumber,
              r = (e.secondsOfDay - t.secondsOfDay) / s.SECONDS_PER_DAY;
            return n + r;
          }),
          (m.computeTaiMinusUtc = function(e) {
            T.julianDate = e;
            var n = m.leapSeconds,
              r = t(n, T, l);
            return r < 0 && ((r = ~r), --r, r < 0 && (r = 0)), n[r].offset;
          }),
          (m.addSeconds = function(e, t, n) {
            return h(e.dayNumber, e.secondsOfDay + t, n);
          }),
          (m.addMinutes = function(e, t, n) {
            var r = e.secondsOfDay + t * s.SECONDS_PER_MINUTE;
            return h(e.dayNumber, r, n);
          }),
          (m.addHours = function(e, t, n) {
            var r = e.secondsOfDay + t * s.SECONDS_PER_HOUR;
            return h(e.dayNumber, r, n);
          }),
          (m.addDays = function(e, t, n) {
            var r = e.dayNumber + t;
            return h(r, e.secondsOfDay, n);
          }),
          (m.lessThan = function(e, t) {
            return m.compare(e, t) < 0;
          }),
          (m.lessThanOrEquals = function(e, t) {
            return m.compare(e, t) <= 0;
          }),
          (m.greaterThan = function(e, t) {
            return m.compare(e, t) > 0;
          }),
          (m.greaterThanOrEquals = function(e, t) {
            return m.compare(e, t) >= 0;
          }),
          (m.prototype.clone = function(e) {
            return m.clone(this, e);
          }),
          (m.prototype.equals = function(e) {
            return m.equals(this, e);
          }),
          (m.prototype.equalsEpsilon = function(e, t) {
            return m.equalsEpsilon(this, e, t);
          }),
          (m.prototype.toString = function() {
            return m.toIso8601(this);
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
        );
      }
    ),
    define("Core/clone", ["./defaultValue"], function(e) {
      "use strict";
      function t(n, r) {
        if (null === n || "object" != typeof n) return n;
        r = e(r, !1);
        var a = new n.constructor();
        for (var i in n)
          if (n.hasOwnProperty(i)) {
            var o = n[i];
            r && (o = t(o, r)), (a[i] = o);
          }
        return a;
      }
      return t;
    }),
    define(
      "Core/oneTimeWarning",
      ["./defaultValue", "./defined", "./DeveloperError"],
      function(e, t, n) {
        "use strict";
        function r(n, r) {
          t(a[n]) || ((a[n] = !0), console.warn(e(r, n)));
        }
        var a = {};
        return (
          (r.geometryOutlines =
            "Entity geometry outlines are unsupported on terrain. Outlines will be disabled. To enable outlines, disable geometry terrain clamping by explicitly setting height to 0."),
          r
        );
      }
    ),
    define(
      "Core/deprecationWarning",
      ["./defined", "./DeveloperError", "./oneTimeWarning"],
      function(e, t, n) {
        "use strict";
        function r(e, t) {
          n(e, t);
        }
        return r;
      }
    ),
    define("Core/RequestState", ["../Core/freezeObject"], function(e) {
      "use strict";
      var t = {
        UNISSUED: 0,
        ISSUED: 1,
        ACTIVE: 2,
        RECEIVED: 3,
        CANCELLED: 4,
        FAILED: 5
      };
      return e(t);
    }),
    define("Core/RequestType", ["../Core/freezeObject"], function(e) {
      "use strict";
      var t = { TERRAIN: 0, IMAGERY: 1, TILES3D: 2, OTHER: 3 };
      return e(t);
    }),
    define(
      "Core/Request",
      [
        "./defaultValue",
        "./defined",
        "./defineProperties",
        "./RequestState",
        "./RequestType"
      ],
      function(e, t, n, r, a) {
        "use strict";
        function i(t) {
          t = e(t, e.EMPTY_OBJECT);
          var n = e(t.throttleByServer, !1),
            i = n || e(t.throttle, !1);
          (this.url = t.url),
            (this.requestFunction = t.requestFunction),
            (this.cancelFunction = t.cancelFunction),
            (this.priorityFunction = t.priorityFunction),
            (this.priority = e(t.priority, 0)),
            (this.throttle = i),
            (this.throttleByServer = n),
            (this.type = e(t.type, a.OTHER)),
            (this.serverKey = void 0),
            (this.state = r.UNISSUED),
            (this.deferred = void 0),
            (this.cancelled = !1);
        }
        return (
          (i.prototype.cancel = function() {
            this.cancelled = !0;
          }),
          i
        );
      }
    ),
    define("Core/parseResponseHeaders", [], function() {
      "use strict";
      function e(e) {
        var t = {};
        if (!e) return t;
        for (var n = e.split("\r\n"), r = 0; r < n.length; ++r) {
          var a = n[r],
            i = a.indexOf(": ");
          if (i > 0) {
            var o = a.substring(0, i),
              u = a.substring(i + 2);
            t[o] = u;
          }
        }
        return t;
      }
      return e;
    }),
    define(
      "Core/RequestErrorEvent",
      ["./defined", "./parseResponseHeaders"],
      function(e, t) {
        "use strict";
        function n(e, n, r) {
          (this.statusCode = e),
            (this.response = n),
            (this.responseHeaders = r),
            "string" == typeof this.responseHeaders &&
              (this.responseHeaders = t(this.responseHeaders));
        }
        return (
          (n.prototype.toString = function() {
            var t = "Request has failed.";
            return (
              e(this.statusCode) && (t += " Status Code: " + this.statusCode), t
            );
          }),
          n
        );
      }
    ),
    define("ThirdParty/Uri", [], function() {
      function e(t) {
        if (t instanceof e)
          (this.scheme = t.scheme),
            (this.authority = t.authority),
            (this.path = t.path),
            (this.query = t.query),
            (this.fragment = t.fragment);
        else if (t) {
          var n = r.exec(t);
          (this.scheme = n[1]),
            (this.authority = n[2]),
            (this.path = n[3]),
            (this.query = n[4]),
            (this.fragment = n[5]);
        }
      }
      function t(e) {
        var t = unescape(e);
        return i.test(t) ? t : e.toUpperCase();
      }
      function n(e, t, n, r) {
        return (t || "") + n.toLowerCase() + (r || "");
      }
      (e.prototype.scheme = null),
        (e.prototype.authority = null),
        (e.prototype.path = ""),
        (e.prototype.query = null),
        (e.prototype.fragment = null);
      var r = new RegExp(
        "^(?:([^:/?#]+):)?(?://([^/?#]*))?([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$"
      );
      (e.prototype.getScheme = function() {
        return this.scheme;
      }),
        (e.prototype.getAuthority = function() {
          return this.authority;
        }),
        (e.prototype.getPath = function() {
          return this.path;
        }),
        (e.prototype.getQuery = function() {
          return this.query;
        }),
        (e.prototype.getFragment = function() {
          return this.fragment;
        }),
        (e.prototype.isAbsolute = function() {
          return !!this.scheme && !this.fragment;
        }),
        (e.prototype.isSameDocumentAs = function(e) {
          return (
            e.scheme == this.scheme &&
            e.authority == this.authority &&
            e.path == this.path &&
            e.query == this.query
          );
        }),
        (e.prototype.equals = function(e) {
          return this.isSameDocumentAs(e) && e.fragment == this.fragment;
        }),
        (e.prototype.normalize = function() {
          this.removeDotSegments(),
            this.scheme && (this.scheme = this.scheme.toLowerCase()),
            this.authority &&
              (this.authority = this.authority.replace(o, n).replace(a, t)),
            this.path && (this.path = this.path.replace(a, t)),
            this.query && (this.query = this.query.replace(a, t)),
            this.fragment && (this.fragment = this.fragment.replace(a, t));
        });
      var a = /%[0-9a-z]{2}/gi,
        i = /[a-zA-Z0-9\-\._~]/,
        o = /(.*@)?([^@:]*)(:.*)?/;
      return (
        (e.prototype.resolve = function(t) {
          var n = new e();
          return (
            this.scheme
              ? ((n.scheme = this.scheme),
                (n.authority = this.authority),
                (n.path = this.path),
                (n.query = this.query))
              : ((n.scheme = t.scheme),
                this.authority
                  ? ((n.authority = this.authority),
                    (n.path = this.path),
                    (n.query = this.query))
                  : ((n.authority = t.authority),
                    "" == this.path
                      ? ((n.path = t.path), (n.query = this.query || t.query))
                      : ("/" == this.path.charAt(0)
                          ? ((n.path = this.path), n.removeDotSegments())
                          : (t.authority && "" == t.path
                              ? (n.path = "/" + this.path)
                              : (n.path =
                                  t.path.substring(
                                    0,
                                    t.path.lastIndexOf("/") + 1
                                  ) + this.path),
                            n.removeDotSegments()),
                        (n.query = this.query)))),
            (n.fragment = this.fragment),
            n
          );
        }),
        (e.prototype.removeDotSegments = function() {
          var e,
            t = this.path.split("/"),
            n = [],
            r = "" == t[0];
          r && t.shift();
          for ("" == t[0] ? t.shift() : null; t.length; )
            (e = t.shift()), ".." == e ? n.pop() : "." != e && n.push(e);
          ("." != e && ".." != e) || n.push(""),
            r && n.unshift(""),
            (this.path = n.join("/"));
        }),
        (e.prototype.toString = function() {
          var e = "";
          return (
            this.scheme && (e += this.scheme + ":"),
            this.authority && (e += "//" + this.authority),
            (e += this.path),
            this.query && (e += "?" + this.query),
            this.fragment && (e += "#" + this.fragment),
            e
          );
        }),
        e
      );
    }),
    define(
      "Core/Heap",
      ["./Check", "./defaultValue", "./defined", "./defineProperties"],
      function(e, t, n, r) {
        "use strict";
        function a(e) {
          (this._comparator = e.comparator),
            (this._array = []),
            (this._length = 0),
            (this._maximumLength = void 0);
        }
        function i(e, t, n) {
          var r = e[t];
          (e[t] = e[n]), (e[n] = r);
        }
        return (
          r(a.prototype, {
            length: {
              get: function() {
                return this._length;
              }
            },
            internalArray: {
              get: function() {
                return this._array;
              }
            },
            maximumLength: {
              get: function() {
                return this._maximumLength;
              },
              set: function(e) {
                (this._maximumLength = e),
                  this._length > e &&
                    e > 0 &&
                    ((this._length = e), (this._array.length = e));
              }
            },
            comparator: {
              get: function() {
                return this._comparator;
              }
            }
          }),
          (a.prototype.reserve = function(e) {
            (e = t(e, this._length)), (this._array.length = e);
          }),
          (a.prototype.heapify = function(e) {
            e = t(e, 0);
            for (
              var n = this._length,
                r = this._comparator,
                a = this._array,
                o = -1,
                u = !0;
              u;

            ) {
              var s = 2 * (e + 1),
                c = s - 1;
              (o = c < n && r(a[c], a[e]) < 0 ? c : e),
                s < n && r(a[s], a[o]) < 0 && (o = s),
                o !== e ? (i(a, o, e), (e = o)) : (u = !1);
            }
          }),
          (a.prototype.resort = function() {
            for (var e = this._length, t = Math.ceil(e / 2); t >= 0; --t)
              this.heapify(t);
          }),
          (a.prototype.insert = function(e) {
            var t = this._array,
              r = this._comparator,
              a = this._maximumLength,
              o = this._length++;
            for (o < t.length ? (t[o] = e) : t.push(e); 0 !== o; ) {
              var u = Math.floor((o - 1) / 2);
              if (!(r(t[o], t[u]) < 0)) break;
              i(t, o, u), (o = u);
            }
            var s;
            return (
              n(a) && this._length > a && ((s = t[a]), (this._length = a)), s
            );
          }),
          (a.prototype.pop = function(e) {
            if (((e = t(e, 0)), 0 !== this._length)) {
              var n = this._array,
                r = n[e];
              return i(n, e, --this._length), this.heapify(e), r;
            }
          }),
          a
        );
      }
    ),
    define("Core/isBlobUri", ["./Check"], function(e) {
      "use strict";
      function t(e) {
        return n.test(e);
      }
      var n = /^blob:/i;
      return t;
    }),
    define("Core/isDataUri", ["./Check"], function(e) {
      "use strict";
      function t(e) {
        return n.test(e);
      }
      var n = /^data:/i;
      return t;
    }),
    define(
      "Core/RequestScheduler",
      [
        "../ThirdParty/Uri",
        "../ThirdParty/when",
        "./Check",
        "./clone",
        "./defined",
        "./defineProperties",
        "./Heap",
        "./isBlobUri",
        "./isDataUri",
        "./RequestState"
      ],
      function(e, t, n, r, a, i, o, u, s, c) {
        "use strict";
        function l(e, t) {
          return e.priority - t.priority;
        }
        function f() {}
        function d(e) {
          a(e.priorityFunction) && (e.priority = e.priorityFunction());
        }
        function h(e) {
          return M[e] < f.maximumRequestsPerServer;
        }
        function E(e) {
          return (
            e.state === c.UNISSUED &&
              ((e.state = c.ISSUED), (e.deferred = t.defer())),
            e.deferred.promise
          );
        }
        function m(e) {
          return function(t) {
            e.state !== c.CANCELLED &&
              (--A.numberOfActiveRequests,
              --M[e.serverKey],
              (e.state = c.RECEIVED),
              e.deferred.resolve(t));
          };
        }
        function _(e) {
          return function(t) {
            e.state !== c.CANCELLED &&
              (++A.numberOfFailedRequests,
              --A.numberOfActiveRequests,
              --M[e.serverKey],
              (e.state = c.FAILED),
              e.deferred.reject(t));
          };
        }
        function p(e) {
          var t = E(e);
          return (
            (e.state = c.ACTIVE),
            v.push(e),
            ++A.numberOfActiveRequests,
            ++A.numberOfActiveRequestsEver,
            ++M[e.serverKey],
            e
              .requestFunction()
              .then(m(e))
              .otherwise(_(e)),
            t
          );
        }
        function y(e) {
          var t = e.state === c.ACTIVE;
          (e.state = c.CANCELLED),
            ++A.numberOfCancelledRequests,
            e.deferred.reject(),
            t &&
              (--A.numberOfActiveRequests,
              --M[e.serverKey],
              ++A.numberOfCancelledActiveRequests),
            a(e.cancelFunction) && e.cancelFunction();
        }
        function T() {
          (A.numberOfAttemptedRequests = 0),
            (A.numberOfCancelledRequests = 0),
            (A.numberOfCancelledActiveRequests = 0);
        }
        function R() {
          f.debugShowStatistics &&
            (A.numberOfAttemptedRequests > 0 &&
              console.log(
                "Number of attempted requests: " + A.numberOfAttemptedRequests
              ),
            A.numberOfActiveRequests > 0 &&
              console.log(
                "Number of active requests: " + A.numberOfActiveRequests
              ),
            A.numberOfCancelledRequests > 0 &&
              console.log(
                "Number of cancelled requests: " + A.numberOfCancelledRequests
              ),
            A.numberOfCancelledActiveRequests > 0 &&
              console.log(
                "Number of cancelled active requests: " +
                  A.numberOfCancelledActiveRequests
              ),
            A.numberOfFailedRequests > 0 &&
              console.log(
                "Number of failed requests: " + A.numberOfFailedRequests
              ),
            T());
        }
        var A = {
            numberOfAttemptedRequests: 0,
            numberOfActiveRequests: 0,
            numberOfCancelledRequests: 0,
            numberOfCancelledActiveRequests: 0,
            numberOfFailedRequests: 0,
            numberOfActiveRequestsEver: 0
          },
          S = 20,
          N = new o({ comparator: l });
        (N.maximumLength = S), N.reserve(S);
        var v = [],
          M = {},
          g =
            "undefined" != typeof document
              ? new e(document.location.href)
              : new e();
        return (
          (f.maximumRequests = 50),
          (f.maximumRequestsPerServer = 6),
          (f.throttleRequests = !0),
          (f.debugShowStatistics = !1),
          i(f, {
            statistics: {
              get: function() {
                return A;
              }
            },
            priorityHeapLength: {
              get: function() {
                return S;
              },
              set: function(e) {
                if (e < S)
                  for (; N.length > e; ) {
                    var t = N.pop();
                    y(t);
                  }
                (S = e), (N.maximumLength = e), N.reserve(e);
              }
            }
          }),
          (f.update = function() {
            var e,
              t,
              n = 0,
              r = v.length;
            for (e = 0; e < r; ++e)
              (t = v[e]),
                t.cancelled && y(t),
                t.state === c.ACTIVE ? n > 0 && (v[e - n] = t) : ++n;
            v.length -= n;
            var a = N.internalArray,
              i = N.length;
            for (e = 0; e < i; ++e) d(a[e]);
            N.resort();
            for (
              var o = Math.max(f.maximumRequests - v.length, 0), u = 0;
              u < o && N.length > 0;

            )
              (t = N.pop()),
                t.cancelled
                  ? y(t)
                  : !t.throttleByServer || h(t.serverKey) ? (p(t), ++u) : y(t);
            R();
          }),
          (f.getServerKey = function(t) {
            var n = new e(t).resolve(g);
            n.normalize();
            var r = n.authority;
            /:/.test(r) ||
              (r = r + ":" + ("https" === n.scheme ? "443" : "80"));
            var i = M[r];
            return a(i) || (M[r] = 0), r;
          }),
          (f.request = function(e) {
            if (s(e.url) || u(e.url))
              return (e.state = c.RECEIVED), e.requestFunction();
            if (
              (++A.numberOfAttemptedRequests,
              a(e.serverKey) || (e.serverKey = f.getServerKey(e.url)),
              !f.throttleRequests || !e.throttle)
            )
              return p(e);
            if (
              !(v.length >= f.maximumRequests) &&
              (!e.throttleByServer || h(e.serverKey))
            ) {
              d(e);
              var t = N.insert(e);
              if (a(t)) {
                if (t === e) return;
                y(t);
              }
              return E(e);
            }
          }),
          (f.clearForSpecs = function() {
            for (; N.length > 0; ) {
              var e = N.pop();
              y(e);
            }
            for (var t = v.length, n = 0; n < t; ++n) y(v[n]);
            (v.length = 0),
              (M = {}),
              (A.numberOfAttemptedRequests = 0),
              (A.numberOfActiveRequests = 0),
              (A.numberOfCancelledRequests = 0),
              (A.numberOfCancelledActiveRequests = 0),
              (A.numberOfFailedRequests = 0),
              (A.numberOfActiveRequestsEver = 0);
          }),
          (f.numberOfActiveRequestsByServer = function(e) {
            return M[e];
          }),
          (f.requestHeap = N),
          f
        );
      }
    ),
    define(
      "Core/TrustedServers",
      ["../ThirdParty/Uri", "./defined", "./DeveloperError"],
      function(e, t, n) {
        "use strict";
        function r(n) {
          var r = new e(n);
          r.normalize();
          var a = r.getAuthority();
          if (t(a)) {
            if (a.indexOf("@") !== -1) {
              var i = a.split("@");
              a = i[1];
            }
            if (a.indexOf(":") === -1) {
              var o = r.getScheme();
              if (
                (t(o) ||
                  ((o = window.location.protocol),
                  (o = o.substring(0, o.length - 1))),
                "http" === o)
              )
                a += ":80";
              else {
                if ("https" !== o) return;
                a += ":443";
              }
            }
            return a;
          }
        }
        var a = {},
          i = {};
        return (
          (a.add = function(e, n) {
            var r = e.toLowerCase() + ":" + n;
            t(i[r]) || (i[r] = !0);
          }),
          (a.remove = function(e, n) {
            var r = e.toLowerCase() + ":" + n;
            t(i[r]) && delete i[r];
          }),
          (a.contains = function(e) {
            var n = r(e);
            return !(!t(n) || !t(i[n]));
          }),
          (a.clear = function() {
            i = {};
          }),
          a
        );
      }
    ),
    define(
      "Core/loadWithXhr",
      [
        "../ThirdParty/when",
        "./Check",
        "./defaultValue",
        "./defined",
        "./deprecationWarning",
        "./DeveloperError",
        "./Request",
        "./RequestErrorEvent",
        "./RequestScheduler",
        "./RuntimeError",
        "./TrustedServers"
      ],
      function(e, t, n, r, a, i, o, u, s, c, l) {
        "use strict";
        function f(e) {
          e = n(e, n.EMPTY_OBJECT);
          var t = e.url;
          return "string" != typeof t
            ? (a(
                "url promise",
                "options.url as a Promise is deprecated and will be removed in Cesium 1.37"
              ),
              t.then(function(t) {
                return d(e, t);
              }))
            : d(e);
        }
        function d(t, a) {
          var i = t.responseType,
            u = n(t.method, "GET"),
            c = t.data,
            l = t.headers,
            d = t.overrideMimeType;
          a = n(a, t.url);
          var h = r(t.request) ? t.request : new o();
          return (
            (h.url = a),
            (h.requestFunction = function() {
              var t = e.defer(),
                n = f.load(a, i, u, c, l, t, d);
              return (
                r(n) &&
                  r(n.abort) &&
                  (h.cancelFunction = function() {
                    n.abort();
                  }),
                t.promise
              );
            }),
            s.request(h)
          );
        }
        function h(e, t) {
          var n = decodeURIComponent(t);
          return e ? atob(n) : n;
        }
        function E(e, t) {
          for (
            var n = h(e, t),
              r = new ArrayBuffer(n.length),
              a = new Uint8Array(r),
              i = 0;
            i < n.length;
            i++
          )
            a[i] = n.charCodeAt(i);
          return r;
        }
        function m(e, t) {
          t = n(t, "");
          var r = e[1],
            a = !!e[2],
            i = e[3];
          switch (t) {
            case "":
            case "text":
              return h(a, i);
            case "arraybuffer":
              return E(a, i);
            case "blob":
              var o = E(a, i);
              return new Blob([o], { type: r });
            case "document":
              var u = new DOMParser();
              return u.parseFromString(h(a, i), r);
            case "json":
              return JSON.parse(h(a, i));
          }
        }
        var _ = /^data:(.*?)(;base64)?,(.*)$/;
        return (
          (f.load = function(e, t, n, a, i, o, s) {
            var f = _.exec(e);
            if (null !== f) return void o.resolve(m(f, t));
            var d = new XMLHttpRequest();
            if (
              (l.contains(e) && (d.withCredentials = !0),
              r(s) && r(d.overrideMimeType) && d.overrideMimeType(s),
              d.open(n, e, !0),
              r(i))
            )
              for (var h in i)
                i.hasOwnProperty(h) && d.setRequestHeader(h, i[h]);
            return (
              r(t) && (d.responseType = t),
              (d.onload = function() {
                if (d.status < 200 || d.status >= 300)
                  return void o.reject(
                    new u(d.status, d.response, d.getAllResponseHeaders())
                  );
                var e = d.response,
                  n = d.responseType;
                if (!r(e) || (r(t) && n !== t))
                  if ("json" === t && "string" == typeof e)
                    try {
                      o.resolve(JSON.parse(e));
                    } catch (e) {
                      o.reject(e);
                    }
                  else
                    ("" === n || "document" === n) &&
                    r(d.responseXML) &&
                    d.responseXML.hasChildNodes()
                      ? o.resolve(d.responseXML)
                      : ("" !== n && "text" !== n) || !r(d.responseText)
                        ? o.reject(
                            new c("Invalid XMLHttpRequest response type.")
                          )
                        : o.resolve(d.responseText);
                else o.resolve(e);
              }),
              (d.onerror = function(e) {
                o.reject(new u());
              }),
              d.send(a),
              d
            );
          }),
          (f.defaultLoad = f.load),
          f
        );
      }
    ),
    define("Core/loadText", ["./loadWithXhr"], function(e) {
      "use strict";
      function t(t, n, r) {
        return e({ url: t, headers: n, request: r });
      }
      return t;
    }),
    define(
      "Core/loadJson",
      ["./clone", "./defined", "./DeveloperError", "./loadText"],
      function(e, t, n, r) {
        "use strict";
        function a(n, a, o) {
          t(a) ? t(a.Accept) || ((a = e(a)), (a.Accept = i.Accept)) : (a = i);
          var u = r(n, a, o);
          if (t(u))
            return u.then(function(e) {
              return JSON.parse(e);
            });
        }
        var i = { Accept: "application/json,*/*;q=0.01" };
        return a;
      }
    ),
    define(
      "Core/EarthOrientationParameters",
      [
        "../ThirdParty/when",
        "./binarySearch",
        "./defaultValue",
        "./defined",
        "./EarthOrientationParametersSample",
        "./freezeObject",
        "./JulianDate",
        "./LeapSecond",
        "./loadJson",
        "./RuntimeError",
        "./TimeConstants",
        "./TimeStandard"
      ],
      function(e, t, n, r, a, i, o, u, s, c, l, f) {
        "use strict";
        function d(t) {
          if (
            ((t = n(t, n.EMPTY_OBJECT)),
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
            (this._addNewLeapSeconds = n(t.addNewLeapSeconds, !0)),
            r(t.data))
          )
            E(this, t.data);
          else if (r(t.url)) {
            var a = this;
            this._downloadPromise = e(
              s(t.url),
              function(e) {
                E(a, e);
              },
              function() {
                a._dataError =
                  "An error occurred while retrieving the EOP data from the URL " +
                  t.url +
                  ".";
              }
            );
          } else
            E(this, {
              columnNames: [
                "dateIso8601",
                "modifiedJulianDateUtc",
                "xPoleWanderRadians",
                "yPoleWanderRadians",
                "ut1MinusUtcSeconds",
                "lengthOfDayCorrectionSeconds",
                "xCelestialPoleOffsetRadians",
                "yCelestialPoleOffsetRadians",
                "taiMinusUtcSeconds"
              ],
              samples: []
            });
        }
        function h(e, t) {
          return o.compare(e.julianDate, t);
        }
        function E(e, n) {
          if (!r(n.columnNames))
            return void (e._dataError =
              "Error in loaded EOP data: The columnNames property is required.");
          if (!r(n.samples))
            return void (e._dataError =
              "Error in loaded EOP data: The samples property is required.");
          var a = n.columnNames.indexOf("modifiedJulianDateUtc"),
            i = n.columnNames.indexOf("xPoleWanderRadians"),
            s = n.columnNames.indexOf("yPoleWanderRadians"),
            c = n.columnNames.indexOf("ut1MinusUtcSeconds"),
            d = n.columnNames.indexOf("xCelestialPoleOffsetRadians"),
            E = n.columnNames.indexOf("yCelestialPoleOffsetRadians"),
            m = n.columnNames.indexOf("taiMinusUtcSeconds");
          if (a < 0 || i < 0 || s < 0 || c < 0 || d < 0 || E < 0 || m < 0)
            return void (e._dataError =
              "Error in loaded EOP data: The columnNames property must include modifiedJulianDateUtc, xPoleWanderRadians, yPoleWanderRadians, ut1MinusUtcSeconds, xCelestialPoleOffsetRadians, yCelestialPoleOffsetRadians, and taiMinusUtcSeconds columns");
          var _ = (e._samples = n.samples),
            p = (e._dates = []);
          (e._dateColumn = a),
            (e._xPoleWanderRadiansColumn = i),
            (e._yPoleWanderRadiansColumn = s),
            (e._ut1MinusUtcSecondsColumn = c),
            (e._xCelestialPoleOffsetRadiansColumn = d),
            (e._yCelestialPoleOffsetRadiansColumn = E),
            (e._taiMinusUtcSecondsColumn = m),
            (e._columnCount = n.columnNames.length),
            (e._lastIndex = void 0);
          for (
            var y, T = e._addNewLeapSeconds, R = 0, A = _.length;
            R < A;
            R += e._columnCount
          ) {
            var S = _[R + a],
              N = _[R + m],
              v = S + l.MODIFIED_JULIAN_DATE_DIFFERENCE,
              M = new o(v, N, f.TAI);
            if ((p.push(M), T)) {
              if (N !== y && r(y)) {
                var g = o.leapSeconds,
                  O = t(g, M, h);
                if (O < 0) {
                  var I = new u(M, N);
                  g.splice(~O, 0, I);
                }
              }
              y = N;
            }
          }
        }
        function m(e, t, n, r, a) {
          var i = n * r;
          (a.xPoleWander = t[i + e._xPoleWanderRadiansColumn]),
            (a.yPoleWander = t[i + e._yPoleWanderRadiansColumn]),
            (a.xPoleOffset = t[i + e._xCelestialPoleOffsetRadiansColumn]),
            (a.yPoleOffset = t[i + e._yCelestialPoleOffsetRadiansColumn]),
            (a.ut1MinusUtc = t[i + e._ut1MinusUtcSecondsColumn]);
        }
        function _(e, t, n) {
          return t + e * (n - t);
        }
        function p(e, t, n, r, a, i, u) {
          var s = e._columnCount;
          if (i > t.length - 1)
            return (
              (u.xPoleWander = 0),
              (u.yPoleWander = 0),
              (u.xPoleOffset = 0),
              (u.yPoleOffset = 0),
              (u.ut1MinusUtc = 0),
              u
            );
          var c = t[a],
            l = t[i];
          if (c.equals(l) || r.equals(c)) return m(e, n, a, s, u), u;
          if (r.equals(l)) return m(e, n, i, s, u), u;
          var f = o.secondsDifference(r, c) / o.secondsDifference(l, c),
            d = a * s,
            h = i * s,
            E = n[d + e._ut1MinusUtcSecondsColumn],
            p = n[h + e._ut1MinusUtcSecondsColumn],
            y = p - E;
          if (y > 0.5 || y < -0.5) {
            var T = n[d + e._taiMinusUtcSecondsColumn],
              R = n[h + e._taiMinusUtcSecondsColumn];
            T !== R && (l.equals(r) ? (E = p) : (p -= R - T));
          }
          return (
            (u.xPoleWander = _(
              f,
              n[d + e._xPoleWanderRadiansColumn],
              n[h + e._xPoleWanderRadiansColumn]
            )),
            (u.yPoleWander = _(
              f,
              n[d + e._yPoleWanderRadiansColumn],
              n[h + e._yPoleWanderRadiansColumn]
            )),
            (u.xPoleOffset = _(
              f,
              n[d + e._xCelestialPoleOffsetRadiansColumn],
              n[h + e._xCelestialPoleOffsetRadiansColumn]
            )),
            (u.yPoleOffset = _(
              f,
              n[d + e._yCelestialPoleOffsetRadiansColumn],
              n[h + e._yCelestialPoleOffsetRadiansColumn]
            )),
            (u.ut1MinusUtc = _(f, E, p)),
            u
          );
        }
        return (
          (d.NONE = i({
            getPromiseToLoad: function() {
              return e();
            },
            compute: function(e, t) {
              return (
                r(t)
                  ? ((t.xPoleWander = 0),
                    (t.yPoleWander = 0),
                    (t.xPoleOffset = 0),
                    (t.yPoleOffset = 0),
                    (t.ut1MinusUtc = 0))
                  : (t = new a(0, 0, 0, 0, 0)),
                t
              );
            }
          })),
          (d.prototype.getPromiseToLoad = function() {
            return e(this._downloadPromise);
          }),
          (d.prototype.compute = function(e, n) {
            if (r(this._samples)) {
              if (
                (r(n) || (n = new a(0, 0, 0, 0, 0)), 0 === this._samples.length)
              )
                return (
                  (n.xPoleWander = 0),
                  (n.yPoleWander = 0),
                  (n.xPoleOffset = 0),
                  (n.yPoleOffset = 0),
                  (n.ut1MinusUtc = 0),
                  n
                );
              var i = this._dates,
                u = this._lastIndex,
                s = 0,
                l = 0;
              if (r(u)) {
                var f = i[u],
                  d = i[u + 1],
                  h = o.lessThanOrEquals(f, e),
                  E = !r(d),
                  m = E || o.greaterThanOrEquals(d, e);
                if (h && m)
                  return (
                    (s = u),
                    !E && d.equals(e) && ++s,
                    (l = s + 1),
                    p(this, i, this._samples, e, s, l, n),
                    n
                  );
              }
              var _ = t(i, e, o.compare, this._dateColumn);
              return (
                _ >= 0
                  ? (_ < i.length - 1 && i[_ + 1].equals(e) && ++_,
                    (s = _),
                    (l = _))
                  : ((l = ~_), (s = l - 1), s < 0 && (s = 0)),
                (this._lastIndex = s),
                p(this, i, this._samples, e, s, l, n),
                n
              );
            }
            if (r(this._dataError)) throw new c(this._dataError);
          }),
          d
        );
      }
    ),
    define(
      "Core/getAbsoluteUri",
      ["../ThirdParty/Uri", "./defaultValue", "./defined", "./DeveloperError"],
      function(e, t, n, r) {
        "use strict";
        function a(n, r) {
          r = t(r, document.location.href);
          var a = new e(r),
            i = new e(n);
          return i.resolve(a).toString();
        }
        return a;
      }
    ),
    define(
      "Core/joinUrls",
      ["../ThirdParty/Uri", "./defaultValue", "./defined", "./DeveloperError"],
      function(e, t, n, r) {
        "use strict";
        function a(r, a, i) {
          if (
            ((i = t(i, !0)),
            r instanceof e || (r = new e(r)),
            a instanceof e || (a = new e(a)),
            "data" === r.scheme)
          )
            return r.toString();
          if ("data" === a.scheme) return a.toString();
          n(a.authority) &&
            !n(a.scheme) &&
            ("undefined" != typeof document &&
            n(document.location) &&
            n(document.location.href)
              ? (a.scheme = new e(document.location.href).scheme)
              : (a.scheme = r.scheme));
          var o = r;
          a.isAbsolute() && (o = a);
          var u = "";
          n(o.scheme) && (u += o.scheme + ":"),
            n(o.authority) &&
              ((u += "//" + o.authority),
              "" !== o.path &&
                "/" !== o.path &&
                ((u = u.replace(/\/?$/, "/")),
                (o.path = o.path.replace(/^\/?/g, "")))),
            (u +=
              o === r
                ? i
                  ? r.path.replace(/\/?$/, "/") + a.path.replace(/^\/?/g, "")
                  : r.path + a.path
                : a.path);
          var s = n(r.query),
            c = n(a.query);
          s && c
            ? (u += "?" + r.query + "&" + a.query)
            : s && !c ? (u += "?" + r.query) : !s && c && (u += "?" + a.query);
          var l = n(a.fragment);
          return (
            n(r.fragment) && !l
              ? (u += "#" + r.fragment)
              : l && (u += "#" + a.fragment),
            u
          );
        }
        return a;
      }
    ),
    define(
      "Core/buildModuleUrl",
      [
        "../ThirdParty/Uri",
        "./defined",
        "./DeveloperError",
        "./getAbsoluteUri",
        "./joinUrls",
        "require"
      ],
      function(e, t, n, r, a, i) {
        "use strict";
        function o() {
          for (
            var e = document.getElementsByTagName("script"),
              t = 0,
              n = e.length;
            t < n;
            ++t
          ) {
            var r = e[t].getAttribute("src"),
              a = E.exec(r);
            if (null !== a) return a[1];
          }
        }
        function u() {
          if (t(f)) return f;
          var n;
          return (
            (n = "undefined" != typeof CESIUM_BASE_URL ? CESIUM_BASE_URL : o()),
            (f = new e(r(n)))
          );
        }
        function s(e) {
          return i.toUrl("../" + e);
        }
        function c(e) {
          return a(u(), e);
        }
        function l(e) {
          t(d) || (d = t(i.toUrl) ? s : c),
            t(h) || (h = document.createElement("a"));
          var n = d(e);
          return (h.href = n), (h.href = h.href), h.href;
        }
        var f,
          d,
          h,
          E = /((?:.*\/)|^)cesium[\w-]*\.js(?:\W|$)/i;
        return (
          (l._cesiumScriptRegex = E),
          (l.setBaseUrl = function(t) {
            f = new e(t).resolve(new e(document.location.href));
          }),
          l
        );
      }
    ),
    define("Core/Iau2006XysSample", [], function() {
      "use strict";
      function e(e, t, n) {
        (this.x = e), (this.y = t), (this.s = n);
      }
      return e;
    }),
    define(
      "Core/Iau2006XysData",
      [
        "../ThirdParty/when",
        "./buildModuleUrl",
        "./defaultValue",
        "./defined",
        "./Iau2006XysSample",
        "./JulianDate",
        "./loadJson",
        "./TimeStandard"
      ],
      function(e, t, n, r, a, i, o, u) {
        "use strict";
        function s(e) {
          (e = n(e, n.EMPTY_OBJECT)),
            (this._xysFileUrlTemplate = e.xysFileUrlTemplate),
            (this._interpolationOrder = n(e.interpolationOrder, 9)),
            (this._sampleZeroJulianEphemerisDate = n(
              e.sampleZeroJulianEphemerisDate,
              2442396.5
            )),
            (this._sampleZeroDateTT = new i(
              this._sampleZeroJulianEphemerisDate,
              0,
              u.TAI
            )),
            (this._stepSizeDays = n(e.stepSizeDays, 1)),
            (this._samplesPerXysFile = n(e.samplesPerXysFile, 1e3)),
            (this._totalSamples = n(e.totalSamples, 27426)),
            (this._samples = new Array(3 * this._totalSamples)),
            (this._chunkDownloadsInProgress = []);
          for (
            var t = this._interpolationOrder,
              r = (this._denominators = new Array(t + 1)),
              a = (this._xTable = new Array(t + 1)),
              o = Math.pow(this._stepSizeDays, t),
              s = 0;
            s <= t;
            ++s
          ) {
            (r[s] = o), (a[s] = s * this._stepSizeDays);
            for (var c = 0; c <= t; ++c) c !== s && (r[s] *= s - c);
            r[s] = 1 / r[s];
          }
          (this._work = new Array(t + 1)), (this._coef = new Array(t + 1));
        }
        function c(e, t, n) {
          var r = f;
          return (
            (r.dayNumber = t),
            (r.secondsOfDay = n),
            i.daysDifference(r, e._sampleZeroDateTT)
          );
        }
        function l(n, a) {
          if (n._chunkDownloadsInProgress[a])
            return n._chunkDownloadsInProgress[a];
          var i = e.defer();
          n._chunkDownloadsInProgress[a] = i;
          var u,
            s = n._xysFileUrlTemplate;
          return (
            (u = r(s)
              ? s.replace("{0}", a)
              : t("Assets/IAU2006_XYS/IAU2006_XYS_" + a + ".json")),
            e(o(u), function(e) {
              n._chunkDownloadsInProgress[a] = !1;
              for (
                var t = n._samples,
                  r = e.samples,
                  o = a * n._samplesPerXysFile * 3,
                  u = 0,
                  s = r.length;
                u < s;
                ++u
              )
                t[o + u] = r[u];
              i.resolve();
            }),
            i.promise
          );
        }
        var f = new i(0, 0, u.TAI);
        return (
          (s.prototype.preload = function(t, n, r, a) {
            var i = c(this, t, n),
              o = c(this, r, a),
              u = (i / this._stepSizeDays - this._interpolationOrder / 2) | 0;
            u < 0 && (u = 0);
            var s =
              (o / this._stepSizeDays - this._interpolationOrder / 2) |
              (0 + this._interpolationOrder);
            s >= this._totalSamples && (s = this._totalSamples - 1);
            for (
              var f = (u / this._samplesPerXysFile) | 0,
                d = (s / this._samplesPerXysFile) | 0,
                h = [],
                E = f;
              E <= d;
              ++E
            )
              h.push(l(this, E));
            return e.all(h);
          }),
          (s.prototype.computeXysRadians = function(e, t, n) {
            var i = c(this, e, t);
            if (!(i < 0)) {
              var o = (i / this._stepSizeDays) | 0;
              if (!(o >= this._totalSamples)) {
                var u = this._interpolationOrder,
                  s = o - ((u / 2) | 0);
                s < 0 && (s = 0);
                var f = s + u;
                f >= this._totalSamples &&
                  ((f = this._totalSamples - 1), (s = f - u), s < 0 && (s = 0));
                var d = !1,
                  h = this._samples;
                if (
                  (r(h[3 * s]) ||
                    (l(this, (s / this._samplesPerXysFile) | 0), (d = !0)),
                  r(h[3 * f]) ||
                    (l(this, (f / this._samplesPerXysFile) | 0), (d = !0)),
                  !d)
                ) {
                  r(n)
                    ? ((n.x = 0), (n.y = 0), (n.s = 0))
                    : (n = new a(0, 0, 0));
                  var E,
                    m,
                    _ = i - s * this._stepSizeDays,
                    p = this._work,
                    y = this._denominators,
                    T = this._coef,
                    R = this._xTable;
                  for (E = 0; E <= u; ++E) p[E] = _ - R[E];
                  for (E = 0; E <= u; ++E) {
                    for (T[E] = 1, m = 0; m <= u; ++m)
                      m !== E && (T[E] *= p[m]);
                    T[E] *= y[E];
                    var A = 3 * (s + E);
                    (n.x += T[E] * h[A++]),
                      (n.y += T[E] * h[A++]),
                      (n.s += T[E] * h[A]);
                  }
                  return n;
                }
              }
            }
          }),
          s
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
        a = {};
      return (
        t(a, {
          element: {
            get: function() {
              if (a.supportsFullscreen()) return document[r.fullscreenElement];
            }
          },
          changeEventName: {
            get: function() {
              if (a.supportsFullscreen()) return r.fullscreenchange;
            }
          },
          errorEventName: {
            get: function() {
              if (a.supportsFullscreen()) return r.fullscreenerror;
            }
          },
          enabled: {
            get: function() {
              if (a.supportsFullscreen()) return document[r.fullscreenEnabled];
            }
          },
          fullscreen: {
            get: function() {
              if (a.supportsFullscreen()) return null !== a.element;
            }
          }
        }),
        (a.supportsFullscreen = function() {
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
            var a,
              i = ["webkit", "moz", "o", "ms", "khtml"],
              o = 0,
              u = i.length;
            o < u;
            ++o
          ) {
            var s = i[o];
            (a = s + "RequestFullscreen"),
              "function" == typeof t[a]
                ? ((r.requestFullscreen = a), (n = !0))
                : ((a = s + "RequestFullScreen"),
                  "function" == typeof t[a] &&
                    ((r.requestFullscreen = a), (n = !0))),
              (a = s + "ExitFullscreen"),
              "function" == typeof document[a]
                ? (r.exitFullscreen = a)
                : ((a = s + "CancelFullScreen"),
                  "function" == typeof document[a] && (r.exitFullscreen = a)),
              (a = s + "FullscreenEnabled"),
              void 0 !== document[a]
                ? (r.fullscreenEnabled = a)
                : ((a = s + "FullScreenEnabled"),
                  void 0 !== document[a] && (r.fullscreenEnabled = a)),
              (a = s + "FullscreenElement"),
              void 0 !== document[a]
                ? (r.fullscreenElement = a)
                : ((a = s + "FullScreenElement"),
                  void 0 !== document[a] && (r.fullscreenElement = a)),
              (a = s + "fullscreenchange"),
              void 0 !== document["on" + a] &&
                ("ms" === s && (a = "MSFullscreenChange"),
                (r.fullscreenchange = a)),
              (a = s + "fullscreenerror"),
              void 0 !== document["on" + a] &&
                ("ms" === s && (a = "MSFullscreenError"),
                (r.fullscreenerror = a));
          }
          return n;
        }),
        (a.requestFullscreen = function(e, t) {
          a.supportsFullscreen() && e[r.requestFullscreen]({ vrDisplay: t });
        }),
        (a.exitFullscreen = function() {
          a.supportsFullscreen() && document[r.exitFullscreen]();
        }),
        a
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
        function a() {
          if (!t(A) && ((A = !1), !d())) {
            var e = / Chrome\/([\.0-9]+)/.exec(R.userAgent);
            null !== e && ((A = !0), (S = r(e[1])));
          }
          return A;
        }
        function i() {
          return a() && S;
        }
        function o() {
          if (
            !t(N) &&
            ((N = !1), !a() && !d() && / Safari\/[\.0-9]+/.test(R.userAgent))
          ) {
            var e = / Version\/([\.0-9]+)/.exec(R.userAgent);
            null !== e && ((N = !0), (v = r(e[1])));
          }
          return N;
        }
        function u() {
          return o() && v;
        }
        function s() {
          if (!t(M)) {
            M = !1;
            var e = / AppleWebKit\/([\.0-9]+)(\+?)/.exec(R.userAgent);
            null !== e && ((M = !0), (g = r(e[1])), (g.isNightly = !!e[2]));
          }
          return M;
        }
        function c() {
          return s() && g;
        }
        function l() {
          if (!t(O)) {
            O = !1;
            var e;
            "Microsoft Internet Explorer" === R.appName
              ? ((e = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(R.userAgent)),
                null !== e && ((O = !0), (I = r(e[1]))))
              : "Netscape" === R.appName &&
                ((e = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(R.userAgent)),
                null !== e && ((O = !0), (I = r(e[1]))));
          }
          return O;
        }
        function f() {
          return l() && I;
        }
        function d() {
          if (!t(w)) {
            w = !1;
            var e = / Edge\/([\.0-9]+)/.exec(R.userAgent);
            null !== e && ((w = !0), (C = r(e[1])));
          }
          return w;
        }
        function h() {
          return d() && C;
        }
        function E() {
          if (!t(x)) {
            x = !1;
            var e = /Firefox\/([\.0-9]+)/.exec(R.userAgent);
            null !== e && ((x = !0), (P = r(e[1])));
          }
          return x;
        }
        function m() {
          return t(U) || (U = /Windows/i.test(R.appVersion)), U;
        }
        function _() {
          return E() && P;
        }
        function p() {
          return (
            t(D) ||
              (D =
                "undefined" != typeof PointerEvent &&
                (!t(R.pointerEnabled) || R.pointerEnabled)),
            D
          );
        }
        function y() {
          if (!t(F)) {
            var e = document.createElement("canvas");
            e.setAttribute(
              "style",
              "image-rendering: -moz-crisp-edges;image-rendering: pixelated;"
            );
            var n = e.style.imageRendering;
            (F = t(n) && "" !== n), F && (L = n);
          }
          return F;
        }
        function T() {
          return y() ? L : void 0;
        }
        var R;
        R = "undefined" != typeof navigator ? navigator : {};
        var A,
          S,
          N,
          v,
          M,
          g,
          O,
          I,
          w,
          C,
          x,
          P,
          U,
          D,
          L,
          F,
          B = {
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
            firefoxVersion: _,
            isWindows: m,
            hardwareConcurrency: e(R.hardwareConcurrency, 3),
            supportsPointerEvents: p,
            supportsImageRenderingPixelated: y,
            imageRenderingValue: T
          };
        return (
          (B.supportsFullscreen = function() {
            return n.supportsFullscreen();
          }),
          (B.supportsTypedArrays = function() {
            return "undefined" != typeof ArrayBuffer;
          }),
          (B.supportsWebWorkers = function() {
            return "undefined" != typeof Worker;
          }),
          B
        );
      }
    ),
    define(
      "Core/HeadingPitchRoll",
      ["./defaultValue", "./defined", "./DeveloperError", "./Math"],
      function(e, t, n, r) {
        "use strict";
        function a(t, n, r) {
          (this.heading = e(t, 0)),
            (this.pitch = e(n, 0)),
            (this.roll = e(r, 0));
        }
        return (
          (a.fromQuaternion = function(e, n) {
            t(n) || (n = new a());
            var r = 2 * (e.w * e.y - e.z * e.x),
              i = 1 - 2 * (e.x * e.x + e.y * e.y),
              o = 2 * (e.w * e.x + e.y * e.z),
              u = 1 - 2 * (e.y * e.y + e.z * e.z),
              s = 2 * (e.w * e.z + e.x * e.y);
            return (
              (n.heading = -Math.atan2(s, u)),
              (n.roll = Math.atan2(o, i)),
              (n.pitch = -Math.asin(r)),
              n
            );
          }),
          (a.fromDegrees = function(e, n, i, o) {
            return (
              t(o) || (o = new a()),
              (o.heading = e * r.RADIANS_PER_DEGREE),
              (o.pitch = n * r.RADIANS_PER_DEGREE),
              (o.roll = i * r.RADIANS_PER_DEGREE),
              o
            );
          }),
          (a.clone = function(e, n) {
            if (t(e))
              return t(n)
                ? ((n.heading = e.heading),
                  (n.pitch = e.pitch),
                  (n.roll = e.roll),
                  n)
                : new a(e.heading, e.pitch, e.roll);
          }),
          (a.equals = function(e, n) {
            return (
              e === n ||
              (t(e) &&
                t(n) &&
                e.heading === n.heading &&
                e.pitch === n.pitch &&
                e.roll === n.roll)
            );
          }),
          (a.equalsEpsilon = function(e, n, a, i) {
            return (
              e === n ||
              (t(e) &&
                t(n) &&
                r.equalsEpsilon(e.heading, n.heading, a, i) &&
                r.equalsEpsilon(e.pitch, n.pitch, a, i) &&
                r.equalsEpsilon(e.roll, n.roll, a, i))
            );
          }),
          (a.prototype.clone = function(e) {
            return a.clone(this, e);
          }),
          (a.prototype.equals = function(e) {
            return a.equals(this, e);
          }),
          (a.prototype.equalsEpsilon = function(e, t, n) {
            return a.equalsEpsilon(this, e, t, n);
          }),
          (a.prototype.toString = function() {
            return (
              "(" + this.heading + ", " + this.pitch + ", " + this.roll + ")"
            );
          }),
          a
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
      function(e, t, n, r, a, i, o, u, s) {
        "use strict";
        function c(e, t, r, a) {
          (this.x = n(e, 0)),
            (this.y = n(t, 0)),
            (this.z = n(r, 0)),
            (this.w = n(a, 0));
        }
        var l = new e();
        c.fromAxisAngle = function(t, n, a) {
          var i = n / 2,
            o = Math.sin(i);
          l = e.normalize(t, l);
          var u = l.x * o,
            s = l.y * o,
            f = l.z * o,
            d = Math.cos(i);
          return r(a)
            ? ((a.x = u), (a.y = s), (a.z = f), (a.w = d), a)
            : new c(u, s, f, d);
        };
        var f = [1, 2, 0],
          d = new Array(3);
        c.fromRotationMatrix = function(e, t) {
          var n,
            a,
            i,
            o,
            u,
            l = e[s.COLUMN0ROW0],
            h = e[s.COLUMN1ROW1],
            E = e[s.COLUMN2ROW2],
            m = l + h + E;
          if (m > 0)
            (n = Math.sqrt(m + 1)),
              (u = 0.5 * n),
              (n = 0.5 / n),
              (a = (e[s.COLUMN1ROW2] - e[s.COLUMN2ROW1]) * n),
              (i = (e[s.COLUMN2ROW0] - e[s.COLUMN0ROW2]) * n),
              (o = (e[s.COLUMN0ROW1] - e[s.COLUMN1ROW0]) * n);
          else {
            var _ = f,
              p = 0;
            h > l && (p = 1), E > l && E > h && (p = 2);
            var y = _[p],
              T = _[y];
            n = Math.sqrt(
              e[s.getElementIndex(p, p)] -
                e[s.getElementIndex(y, y)] -
                e[s.getElementIndex(T, T)] +
                1
            );
            var R = d;
            (R[p] = 0.5 * n),
              (n = 0.5 / n),
              (u =
                (e[s.getElementIndex(T, y)] - e[s.getElementIndex(y, T)]) * n),
              (R[y] =
                (e[s.getElementIndex(y, p)] + e[s.getElementIndex(p, y)]) * n),
              (R[T] =
                (e[s.getElementIndex(T, p)] + e[s.getElementIndex(p, T)]) * n),
              (a = -R[0]),
              (i = -R[1]),
              (o = -R[2]);
          }
          return r(t)
            ? ((t.x = a), (t.y = i), (t.z = o), (t.w = u), t)
            : new c(a, i, o, u);
        };
        var h = new c(),
          E = new c(),
          m = new c(),
          _ = new c();
        c.fromHeadingPitchRoll = function(t, n) {
          return (
            (_ = c.fromAxisAngle(e.UNIT_X, t.roll, h)),
            (m = c.fromAxisAngle(e.UNIT_Y, -t.pitch, n)),
            (n = c.multiply(m, _, m)),
            (E = c.fromAxisAngle(e.UNIT_Z, -t.heading, h)),
            c.multiply(E, n, n)
          );
        };
        var p = new e(),
          y = new e(),
          T = new c(),
          R = new c(),
          A = new c();
        (c.packedLength = 4),
          (c.pack = function(e, t, r) {
            return (
              (r = n(r, 0)),
              (t[r++] = e.x),
              (t[r++] = e.y),
              (t[r++] = e.z),
              (t[r] = e.w),
              t
            );
          }),
          (c.unpack = function(e, t, a) {
            return (
              (t = n(t, 0)),
              r(a) || (a = new c()),
              (a.x = e[t]),
              (a.y = e[t + 1]),
              (a.z = e[t + 2]),
              (a.w = e[t + 3]),
              a
            );
          }),
          (c.packedInterpolationLength = 3),
          (c.convertPackedArrayForInterpolation = function(e, t, n, r) {
            c.unpack(e, 4 * n, A), c.conjugate(A, A);
            for (var a = 0, i = n - t + 1; a < i; a++) {
              var o = 3 * a;
              c.unpack(e, 4 * (t + a), T),
                c.multiply(T, A, T),
                T.w < 0 && c.negate(T, T),
                c.computeAxis(T, p);
              var u = c.computeAngle(T);
              (r[o] = p.x * u), (r[o + 1] = p.y * u), (r[o + 2] = p.z * u);
            }
          }),
          (c.unpackInterpolationResult = function(t, n, a, i, o) {
            r(o) || (o = new c()), e.fromArray(t, 0, y);
            var u = e.magnitude(y);
            return (
              c.unpack(n, 4 * i, R),
              0 === u ? c.clone(c.IDENTITY, T) : c.fromAxisAngle(y, u, T),
              c.multiply(T, R, o)
            );
          }),
          (c.clone = function(e, t) {
            if (r(e))
              return r(t)
                ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), (t.w = e.w), t)
                : new c(e.x, e.y, e.z, e.w);
          }),
          (c.conjugate = function(e, t) {
            return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = e.w), t;
          }),
          (c.magnitudeSquared = function(e) {
            return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w;
          }),
          (c.magnitude = function(e) {
            return Math.sqrt(c.magnitudeSquared(e));
          }),
          (c.normalize = function(e, t) {
            var n = 1 / c.magnitude(e),
              r = e.x * n,
              a = e.y * n,
              i = e.z * n,
              o = e.w * n;
            return (t.x = r), (t.y = a), (t.z = i), (t.w = o), t;
          }),
          (c.inverse = function(e, t) {
            var n = c.magnitudeSquared(e);
            return (t = c.conjugate(e, t)), c.multiplyByScalar(t, 1 / n, t);
          }),
          (c.add = function(e, t, n) {
            return (
              (n.x = e.x + t.x),
              (n.y = e.y + t.y),
              (n.z = e.z + t.z),
              (n.w = e.w + t.w),
              n
            );
          }),
          (c.subtract = function(e, t, n) {
            return (
              (n.x = e.x - t.x),
              (n.y = e.y - t.y),
              (n.z = e.z - t.z),
              (n.w = e.w - t.w),
              n
            );
          }),
          (c.negate = function(e, t) {
            return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), (t.w = -e.w), t;
          }),
          (c.dot = function(e, t) {
            return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
          }),
          (c.multiply = function(e, t, n) {
            var r = e.x,
              a = e.y,
              i = e.z,
              o = e.w,
              u = t.x,
              s = t.y,
              c = t.z,
              l = t.w,
              f = o * u + r * l + a * c - i * s,
              d = o * s - r * c + a * l + i * u,
              h = o * c + r * s - a * u + i * l,
              E = o * l - r * u - a * s - i * c;
            return (n.x = f), (n.y = d), (n.z = h), (n.w = E), n;
          }),
          (c.multiplyByScalar = function(e, t, n) {
            return (
              (n.x = e.x * t),
              (n.y = e.y * t),
              (n.z = e.z * t),
              (n.w = e.w * t),
              n
            );
          }),
          (c.divideByScalar = function(e, t, n) {
            return (
              (n.x = e.x / t),
              (n.y = e.y / t),
              (n.z = e.z / t),
              (n.w = e.w / t),
              n
            );
          }),
          (c.computeAxis = function(e, t) {
            var n = e.w;
            if (Math.abs(n - 1) < u.EPSILON6) return (t.x = t.y = t.z = 0), t;
            var r = 1 / Math.sqrt(1 - n * n);
            return (t.x = e.x * r), (t.y = e.y * r), (t.z = e.z * r), t;
          }),
          (c.computeAngle = function(e) {
            return Math.abs(e.w - 1) < u.EPSILON6 ? 0 : 2 * Math.acos(e.w);
          });
        var S = new c();
        c.lerp = function(e, t, n, r) {
          return (
            (S = c.multiplyByScalar(t, n, S)),
            (r = c.multiplyByScalar(e, 1 - n, r)),
            c.add(S, r, r)
          );
        };
        var N = new c(),
          v = new c(),
          M = new c();
        (c.slerp = function(e, t, n, r) {
          var a = c.dot(e, t),
            i = t;
          if (
            (a < 0 && ((a = -a), (i = N = c.negate(t, N))), 1 - a < u.EPSILON6)
          )
            return c.lerp(e, i, n, r);
          var o = Math.acos(a);
          return (
            (v = c.multiplyByScalar(e, Math.sin((1 - n) * o), v)),
            (M = c.multiplyByScalar(i, Math.sin(n * o), M)),
            (r = c.add(v, M, r)),
            c.multiplyByScalar(r, 1 / Math.sin(o), r)
          );
        }),
          (c.log = function(t, n) {
            var r = u.acosClamped(t.w),
              a = 0;
            return (
              0 !== r && (a = r / Math.sin(r)), e.multiplyByScalar(t, a, n)
            );
          }),
          (c.exp = function(t, n) {
            var r = e.magnitude(t),
              a = 0;
            return (
              0 !== r && (a = Math.sin(r) / r),
              (n.x = t.x * a),
              (n.y = t.y * a),
              (n.z = t.z * a),
              (n.w = Math.cos(r)),
              n
            );
          });
        var g = new e(),
          O = new e(),
          I = new c(),
          w = new c();
        (c.computeInnerQuadrangle = function(t, n, r, a) {
          var i = c.conjugate(n, I);
          c.multiply(i, r, w);
          var o = c.log(w, g);
          c.multiply(i, t, w);
          var u = c.log(w, O);
          return (
            e.add(o, u, o),
            e.multiplyByScalar(o, 0.25, o),
            e.negate(o, o),
            c.exp(o, I),
            c.multiply(n, I, a)
          );
        }),
          (c.squad = function(e, t, n, r, a, i) {
            var o = c.slerp(e, t, a, I),
              u = c.slerp(n, r, a, w);
            return c.slerp(o, u, 2 * a * (1 - a), i);
          });
        for (
          var C = new c(),
            x = 1.9011074535173003,
            P = a.supportsTypedArrays() ? new Float32Array(8) : [],
            U = a.supportsTypedArrays() ? new Float32Array(8) : [],
            D = a.supportsTypedArrays() ? new Float32Array(8) : [],
            L = a.supportsTypedArrays() ? new Float32Array(8) : [],
            F = 0;
          F < 7;
          ++F
        ) {
          var B = F + 1,
            b = 2 * B + 1;
          (P[F] = 1 / (B * b)), (U[F] = B / b);
        }
        return (
          (P[7] = x / 136),
          (U[7] = 8 * x / 17),
          (c.fastSlerp = function(e, t, n, r) {
            var a,
              i = c.dot(e, t);
            i >= 0 ? (a = 1) : ((a = -1), (i = -i));
            for (
              var o = i - 1, u = 1 - n, s = n * n, l = u * u, f = 7;
              f >= 0;
              --f
            )
              (D[f] = (P[f] * s - U[f]) * o), (L[f] = (P[f] * l - U[f]) * o);
            var d =
                a *
                n *
                (1 +
                  D[0] *
                    (1 +
                      D[1] *
                        (1 +
                          D[2] *
                            (1 +
                              D[3] *
                                (1 +
                                  D[4] *
                                    (1 + D[5] * (1 + D[6] * (1 + D[7])))))))),
              h =
                u *
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
              E = c.multiplyByScalar(e, h, C);
            return c.multiplyByScalar(t, d, r), c.add(E, r, r);
          }),
          (c.fastSquad = function(e, t, n, r, a, i) {
            var o = c.fastSlerp(e, t, a, I),
              u = c.fastSlerp(n, r, a, w);
            return c.fastSlerp(o, u, 2 * a * (1 - a), i);
          }),
          (c.equals = function(e, t) {
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
          (c.equalsEpsilon = function(e, t, n) {
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
          (c.ZERO = i(new c(0, 0, 0, 0))),
          (c.IDENTITY = i(new c(0, 0, 0, 1))),
          (c.prototype.clone = function(e) {
            return c.clone(this, e);
          }),
          (c.prototype.equals = function(e) {
            return c.equals(this, e);
          }),
          (c.prototype.equalsEpsilon = function(e, t) {
            return c.equalsEpsilon(this, e, t);
          }),
          (c.prototype.toString = function() {
            return (
              "(" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")"
            );
          }),
          c
        );
      }
    ),
    define(
      "Core/Transforms",
      [
        "../ThirdParty/when",
        "./Cartesian2",
        "./Cartesian3",
        "./Cartesian4",
        "./Cartographic",
        "./Check",
        "./defaultValue",
        "./defined",
        "./DeveloperError",
        "./EarthOrientationParameters",
        "./EarthOrientationParametersSample",
        "./Ellipsoid",
        "./Iau2006XysData",
        "./Iau2006XysSample",
        "./JulianDate",
        "./Math",
        "./Matrix3",
        "./Matrix4",
        "./Quaternion",
        "./TimeConstants"
      ],
      function(e, t, n, r, a, i, o, u, s, c, l, f, d, h, E, m, _, p, y, T) {
        "use strict";
        var R = {},
          A = {
            up: { south: "east", north: "west", west: "south", east: "north" },
            down: {
              south: "west",
              north: "east",
              west: "north",
              east: "south"
            },
            south: { up: "west", down: "east", west: "down", east: "up" },
            north: { up: "east", down: "west", west: "up", east: "down" },
            west: { up: "north", down: "south", north: "down", south: "up" },
            east: { up: "south", down: "north", north: "up", south: "down" }
          },
          S = {
            north: [-1, 0, 0],
            east: [0, 1, 0],
            up: [0, 0, 1],
            south: [1, 0, 0],
            west: [0, -1, 0],
            down: [0, 0, -1]
          },
          N = {},
          v = {
            east: new n(),
            north: new n(),
            up: new n(),
            west: new n(),
            south: new n(),
            down: new n()
          },
          M = new n(),
          g = new n(),
          O = new n();
        (R.localFrameToFixedFrameGenerator = function(e, t) {
          if (!A.hasOwnProperty(e) || !A[e].hasOwnProperty(t))
            throw new s(
              "firstAxis and secondAxis must be east, north, up, west, south or down."
            );
          var r,
            a = A[e][t],
            i = e + t;
          return (
            u(N[i])
              ? (r = N[i])
              : ((r = function(r, i, s) {
                  if (
                    (u(s) || (s = new p()),
                    m.equalsEpsilon(r.x, 0, m.EPSILON14) &&
                      m.equalsEpsilon(r.y, 0, m.EPSILON14))
                  ) {
                    var c = m.sign(r.z);
                    n.unpack(S[e], 0, M),
                      "east" !== e &&
                        "west" !== e &&
                        n.multiplyByScalar(M, c, M),
                      n.unpack(S[t], 0, g),
                      "east" !== t &&
                        "west" !== t &&
                        n.multiplyByScalar(g, c, g),
                      n.unpack(S[a], 0, O),
                      "east" !== a &&
                        "west" !== a &&
                        n.multiplyByScalar(O, c, O);
                  } else {
                    (i = o(i, f.WGS84)), i.geodeticSurfaceNormal(r, v.up);
                    var l = v.up,
                      d = v.east;
                    (d.x = -r.y),
                      (d.y = r.x),
                      (d.z = 0),
                      n.normalize(d, v.east),
                      n.cross(l, d, v.north),
                      n.multiplyByScalar(v.up, -1, v.down),
                      n.multiplyByScalar(v.east, -1, v.west),
                      n.multiplyByScalar(v.north, -1, v.south),
                      (M = v[e]),
                      (g = v[t]),
                      (O = v[a]);
                  }
                  return (
                    (s[0] = M.x),
                    (s[1] = M.y),
                    (s[2] = M.z),
                    (s[3] = 0),
                    (s[4] = g.x),
                    (s[5] = g.y),
                    (s[6] = g.z),
                    (s[7] = 0),
                    (s[8] = O.x),
                    (s[9] = O.y),
                    (s[10] = O.z),
                    (s[11] = 0),
                    (s[12] = r.x),
                    (s[13] = r.y),
                    (s[14] = r.z),
                    (s[15] = 1),
                    s
                  );
                }),
                (N[i] = r)),
            r
          );
        }),
          (R.eastNorthUpToFixedFrame = R.localFrameToFixedFrameGenerator(
            "east",
            "north"
          )),
          (R.northEastDownToFixedFrame = R.localFrameToFixedFrameGenerator(
            "north",
            "east"
          )),
          (R.northUpEastToFixedFrame = R.localFrameToFixedFrameGenerator(
            "north",
            "up"
          )),
          (R.northWestUpToFixedFrame = R.localFrameToFixedFrameGenerator(
            "north",
            "west"
          ));
        var I = new y(),
          w = new n(1, 1, 1),
          C = new p();
        R.headingPitchRollToFixedFrame = function(e, t, r, a, i) {
          a = o(a, R.eastNorthUpToFixedFrame);
          var u = y.fromHeadingPitchRoll(t, I),
            s = p.fromTranslationQuaternionRotationScale(n.ZERO, u, w, C);
          return (i = a(e, r, i)), p.multiply(i, s, i);
        };
        var x = new p(),
          P = new _();
        R.headingPitchRollQuaternion = function(e, t, n, r, a) {
          var i = R.headingPitchRollToFixedFrame(e, t, n, r, x),
            o = p.getRotation(i, P);
          return y.fromRotationMatrix(o, a);
        };
        var U = 24110.54841,
          D = 8640184.812866,
          L = 0.093104,
          F = -62e-7,
          B = 1.1772758384668e-19,
          b = 72921158553e-15,
          z = m.TWO_PI / 86400,
          q = new E();
        (R.computeTemeToPseudoFixedMatrix = function(e, t) {
          q = E.addSeconds(e, -E.computeTaiMinusUtc(e), q);
          var n,
            r = q.dayNumber,
            a = q.secondsOfDay,
            i = r - 2451545;
          n =
            a >= 43200
              ? (i + 0.5) / T.DAYS_PER_JULIAN_CENTURY
              : (i - 0.5) / T.DAYS_PER_JULIAN_CENTURY;
          var o = U + n * (D + n * (L + n * F)),
            s = (o * z) % m.TWO_PI,
            c = b + B * (r - 2451545.5),
            l = (a + 0.5 * T.SECONDS_PER_DAY) % T.SECONDS_PER_DAY,
            f = s + c * l,
            d = Math.cos(f),
            h = Math.sin(f);
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
            : new _(d, h, 0, -h, d, 0, 0, 0, 1);
        }),
          (R.iau2006XysData = new d()),
          (R.earthOrientationParameters = c.NONE);
        var G = 32.184,
          W = 2451545;
        (R.preloadIcrfFixed = function(t) {
          var n = t.start.dayNumber,
            r = t.start.secondsOfDay + G,
            a = t.stop.dayNumber,
            i = t.stop.secondsOfDay + G,
            o = R.iau2006XysData.preload(n, r, a, i),
            u = R.earthOrientationParameters.getPromiseToLoad();
          return e.all([o, u]);
        }),
          (R.computeIcrfToFixedMatrix = function(e, t) {
            u(t) || (t = new _());
            var n = R.computeFixedToIcrfMatrix(e, t);
            if (u(n)) return _.transpose(n, t);
          });
        var V = new h(0, 0, 0),
          X = new l(0, 0, 0, 0, 0, 0),
          H = new _(),
          Y = new _();
        R.computeFixedToIcrfMatrix = function(e, t) {
          u(t) || (t = new _());
          var n = R.earthOrientationParameters.compute(e, X);
          if (u(n)) {
            var r = e.dayNumber,
              a = e.secondsOfDay + G,
              i = R.iau2006XysData.computeXysRadians(r, a, V);
            if (u(i)) {
              var o = i.x + n.xPoleOffset,
                s = i.y + n.yPoleOffset,
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
                (l[8] = 1 - c * (o * o + s * s));
              var f = _.fromRotationZ(-i.s, Y),
                d = _.multiply(l, f, H),
                h = e.dayNumber,
                p = e.secondsOfDay - E.computeTaiMinusUtc(e) + n.ut1MinusUtc,
                y = h - 2451545,
                A = p / T.SECONDS_PER_DAY,
                S = 0.779057273264 + A + 0.00273781191135448 * (y + A);
              S = (S % 1) * m.TWO_PI;
              var N = _.fromRotationZ(S, Y),
                v = _.multiply(d, N, H),
                M = Math.cos(n.xPoleWander),
                g = Math.cos(n.yPoleWander),
                O = Math.sin(n.xPoleWander),
                I = Math.sin(n.yPoleWander),
                w = r - W + a / T.SECONDS_PER_DAY;
              w /= 36525;
              var C = -47e-6 * w * m.RADIANS_PER_DEGREE / 3600,
                x = Math.cos(C),
                P = Math.sin(C),
                U = Y;
              return (
                (U[0] = M * x),
                (U[1] = M * P),
                (U[2] = O),
                (U[3] = -g * P + I * O * x),
                (U[4] = g * x + I * O * P),
                (U[5] = -I * M),
                (U[6] = -I * P - g * O * x),
                (U[7] = I * x - g * O * P),
                (U[8] = g * M),
                _.multiply(v, U, t)
              );
            }
          }
        };
        var k = new r();
        (R.pointToWindowCoordinates = function(e, t, n, r) {
          return (
            (r = R.pointToGLWindowCoordinates(e, t, n, r)),
            (r.y = 2 * t[5] - r.y),
            r
          );
        }),
          (R.pointToGLWindowCoordinates = function(e, n, a, i) {
            u(i) || (i = new t());
            var o = k;
            return (
              p.multiplyByVector(e, r.fromElements(a.x, a.y, a.z, 1, o), o),
              r.multiplyByScalar(o, 1 / o.w, o),
              p.multiplyByVector(n, o, o),
              t.fromCartesian4(o, i)
            );
          });
        var j = new n(),
          Z = new n(),
          K = new n();
        R.rotationMatrixFromPositionVelocity = function(e, t, r, a) {
          var i = o(r, f.WGS84).geodeticSurfaceNormal(e, j),
            s = n.cross(t, i, Z);
          n.equalsEpsilon(s, n.ZERO, m.EPSILON6) && (s = n.clone(n.UNIT_X, s));
          var c = n.cross(s, t, K);
          return (
            n.cross(t, c, s),
            n.negate(s, s),
            u(a) || (a = new _()),
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
          );
        };
        var J = new p(0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1),
          Q = new a(),
          $ = new n(),
          ee = new n(),
          te = new _(),
          ne = new p(),
          re = new p();
        return (
          (R.basisTo2D = function(e, t, r) {
            var a = p.getTranslation(t, ee),
              i = e.ellipsoid,
              o = i.cartesianToCartographic(a, Q),
              u = e.project(o, $);
            n.fromElements(u.z, u.x, u.y, u);
            var s = R.eastNorthUpToFixedFrame(a, i, ne),
              c = p.inverseTransformation(s, re),
              l = p.getRotation(t, te),
              f = p.multiplyByMatrix3(c, l, r);
            return p.multiply(J, f, r), p.setTranslation(r, u, r), r;
          }),
          (R.wgs84To2DModelMatrix = function(e, t, r) {
            var a = e.ellipsoid,
              i = R.eastNorthUpToFixedFrame(t, a, ne),
              o = p.inverseTransformation(i, re),
              u = a.cartesianToCartographic(t, Q),
              s = e.project(u, $);
            n.fromElements(s.z, s.x, s.y, s);
            var c = p.fromTranslation(s, ne);
            return p.multiply(J, o, r), p.multiply(c, r, r), r;
          }),
          R
        );
      }
    ),
    define(
      "Core/EllipsoidTangentPlane",
      [
        "./AxisAlignedBoundingBox",
        "./Cartesian2",
        "./Cartesian3",
        "./Cartesian4",
        "./defaultValue",
        "./defined",
        "./defineProperties",
        "./DeveloperError",
        "./Ellipsoid",
        "./IntersectionTests",
        "./Matrix4",
        "./Plane",
        "./Ray",
        "./Transforms"
      ],
      function(e, t, n, r, a, i, o, u, s, c, l, f, d, h) {
        "use strict";
        function E(e, t) {
          (t = a(t, s.WGS84)), (e = t.scaleToGeodeticSurface(e));
          var r = h.eastNorthUpToFixedFrame(e, t);
          (this._ellipsoid = t),
            (this._origin = e),
            (this._xAxis = n.fromCartesian4(l.getColumn(r, 0, m))),
            (this._yAxis = n.fromCartesian4(l.getColumn(r, 1, m)));
          var i = n.fromCartesian4(l.getColumn(r, 2, m));
          this._plane = f.fromPointNormal(e, i);
        }
        var m = new r();
        o(E.prototype, {
          ellipsoid: {
            get: function() {
              return this._ellipsoid;
            }
          },
          origin: {
            get: function() {
              return this._origin;
            }
          },
          plane: {
            get: function() {
              return this._plane;
            }
          },
          xAxis: {
            get: function() {
              return this._xAxis;
            }
          },
          yAxis: {
            get: function() {
              return this._yAxis;
            }
          },
          zAxis: {
            get: function() {
              return this._plane.normal;
            }
          }
        });
        var _ = new e();
        E.fromPoints = function(t, n) {
          var r = e.fromPoints(t, _);
          return new E(r.center, n);
        };
        var p = new d(),
          y = new n();
        (E.prototype.projectPointOntoPlane = function(e, r) {
          var a = p;
          (a.origin = e), n.normalize(e, a.direction);
          var o = c.rayPlane(a, this._plane, y);
          if (
            (i(o) ||
              (n.negate(a.direction, a.direction),
              (o = c.rayPlane(a, this._plane, y))),
            i(o))
          ) {
            var u = n.subtract(o, this._origin, o),
              s = n.dot(this._xAxis, u),
              l = n.dot(this._yAxis, u);
            return i(r) ? ((r.x = s), (r.y = l), r) : new t(s, l);
          }
        }),
          (E.prototype.projectPointsOntoPlane = function(e, t) {
            i(t) || (t = []);
            for (var n = 0, r = e.length, a = 0; a < r; a++) {
              var o = this.projectPointOntoPlane(e[a], t[n]);
              i(o) && ((t[n] = o), n++);
            }
            return (t.length = n), t;
          }),
          (E.prototype.projectPointToNearestOnPlane = function(e, r) {
            i(r) || (r = new t());
            var a = p;
            (a.origin = e), n.clone(this._plane.normal, a.direction);
            var o = c.rayPlane(a, this._plane, y);
            i(o) ||
              (n.negate(a.direction, a.direction),
              (o = c.rayPlane(a, this._plane, y)));
            var u = n.subtract(o, this._origin, o),
              s = n.dot(this._xAxis, u),
              l = n.dot(this._yAxis, u);
            return (r.x = s), (r.y = l), r;
          }),
          (E.prototype.projectPointsToNearestOnPlane = function(e, t) {
            i(t) || (t = []);
            var n = e.length;
            t.length = n;
            for (var r = 0; r < n; r++)
              t[r] = this.projectPointToNearestOnPlane(e[r], t[r]);
            return t;
          });
        var T = new n();
        return (
          (E.prototype.projectPointsOntoEllipsoid = function(e, t) {
            var r = e.length;
            i(t) ? (t.length = r) : (t = new Array(r));
            for (
              var a = this._ellipsoid,
                o = this._origin,
                u = this._xAxis,
                s = this._yAxis,
                c = T,
                l = 0;
              l < r;
              ++l
            ) {
              var f = e[l];
              n.multiplyByScalar(u, f.x, c), i(t[l]) || (t[l] = new n());
              var d = n.add(o, c, t[l]);
              n.multiplyByScalar(s, f.y, c),
                n.add(d, c, d),
                a.scaleToGeocentricSurface(d, d);
            }
            return t;
          }),
          E
        );
      }
    ),
    define(
      "Core/OrientedBoundingBox",
      [
        "./BoundingSphere",
        "./Cartesian2",
        "./Cartesian3",
        "./Cartographic",
        "./defaultValue",
        "./defined",
        "./DeveloperError",
        "./Ellipsoid",
        "./EllipsoidTangentPlane",
        "./Intersect",
        "./Interval",
        "./Math",
        "./Matrix3",
        "./Plane",
        "./Rectangle"
      ],
      function(e, t, n, r, a, i, o, u, s, c, l, f, d, h, E) {
        "use strict";
        function m(e, t) {
          (this.center = n.clone(a(e, n.ZERO))),
            (this.halfAxes = d.clone(a(t, d.ZERO)));
        }
        function _(e, t, r, a, o, u, s, c) {
          i(c) || (c = new m());
          var l = c.halfAxes;
          d.setColumn(l, 0, e.xAxis, l),
            d.setColumn(l, 1, e.yAxis, l),
            d.setColumn(l, 2, e.zAxis, l);
          var f = M;
          (f.x = (t + r) / 2), (f.y = (a + o) / 2), (f.z = (u + s) / 2);
          var h = g;
          (h.x = (r - t) / 2), (h.y = (o - a) / 2), (h.z = (s - u) / 2);
          var E = c.center;
          return (
            (f = d.multiplyByVector(l, f, f)),
            n.add(e.origin, f, E),
            d.multiplyByScale(l, h, l),
            c
          );
        }
        var p = new n(),
          y = new n(),
          T = new n(),
          R = new n(),
          A = new n(),
          S = new n(),
          N = new d(),
          v = { unitary: new d(), diagonal: new d() };
        m.fromPoints = function(e, t) {
          if ((i(t) || (t = new m()), !i(e) || 0 === e.length))
            return (t.halfAxes = d.ZERO), (t.center = n.ZERO), t;
          var r,
            a = e.length,
            o = n.clone(e[0], p);
          for (r = 1; r < a; r++) n.add(o, e[r], o);
          var u = 1 / a;
          n.multiplyByScalar(o, u, o);
          var s,
            c = 0,
            l = 0,
            f = 0,
            h = 0,
            E = 0,
            _ = 0;
          for (r = 0; r < a; r++)
            (s = n.subtract(e[r], o, y)),
              (c += s.x * s.x),
              (l += s.x * s.y),
              (f += s.x * s.z),
              (h += s.y * s.y),
              (E += s.y * s.z),
              (_ += s.z * s.z);
          (c *= u), (l *= u), (f *= u), (h *= u), (E *= u), (_ *= u);
          var M = N;
          (M[0] = c),
            (M[1] = l),
            (M[2] = f),
            (M[3] = l),
            (M[4] = h),
            (M[5] = E),
            (M[6] = f),
            (M[7] = E),
            (M[8] = _);
          var g = d.computeEigenDecomposition(M, v),
            O = d.clone(g.unitary, t.halfAxes),
            I = d.getColumn(O, 0, R),
            w = d.getColumn(O, 1, A),
            C = d.getColumn(O, 2, S),
            x = -Number.MAX_VALUE,
            P = -Number.MAX_VALUE,
            U = -Number.MAX_VALUE,
            D = Number.MAX_VALUE,
            L = Number.MAX_VALUE,
            F = Number.MAX_VALUE;
          for (r = 0; r < a; r++)
            (s = e[r]),
              (x = Math.max(n.dot(I, s), x)),
              (P = Math.max(n.dot(w, s), P)),
              (U = Math.max(n.dot(C, s), U)),
              (D = Math.min(n.dot(I, s), D)),
              (L = Math.min(n.dot(w, s), L)),
              (F = Math.min(n.dot(C, s), F));
          (I = n.multiplyByScalar(I, 0.5 * (D + x), I)),
            (w = n.multiplyByScalar(w, 0.5 * (L + P), w)),
            (C = n.multiplyByScalar(C, 0.5 * (F + U), C));
          var B = n.add(I, w, t.center);
          n.add(B, C, B);
          var b = T;
          return (
            (b.x = x - D),
            (b.y = P - L),
            (b.z = U - F),
            n.multiplyByScalar(b, 0.5, b),
            d.multiplyByScale(t.halfAxes, b, t.halfAxes),
            t
          );
        };
        var M = new n(),
          g = new n(),
          O = new r(),
          I = new n(),
          w = [
            new r(),
            new r(),
            new r(),
            new r(),
            new r(),
            new r(),
            new r(),
            new r()
          ],
          C = [
            new n(),
            new n(),
            new n(),
            new n(),
            new n(),
            new n(),
            new n(),
            new n()
          ],
          x = [
            new t(),
            new t(),
            new t(),
            new t(),
            new t(),
            new t(),
            new t(),
            new t()
          ];
        (m.fromRectangle = function(e, t, n, r, i) {
          (t = a(t, 0)), (n = a(n, 0)), (r = a(r, u.WGS84));
          var o = E.center(e, O),
            c = r.cartographicToCartesian(o, I),
            l = new s(c, r),
            f = l.plane,
            d = w[0],
            m = w[1],
            p = w[2],
            y = w[3],
            T = w[4],
            R = w[5],
            A = w[6],
            S = w[7],
            N = o.longitude,
            v = e.south < 0 && e.north > 0 ? 0 : o.latitude;
          (A.latitude = R.latitude = T.latitude = e.south),
            (S.latitude = y.latitude = v),
            (d.latitude = m.latitude = p.latitude = e.north),
            (A.longitude = S.longitude = d.longitude = e.west),
            (R.longitude = m.longitude = N),
            (T.longitude = y.longitude = p.longitude = e.east),
            (p.height = m.height = d.height = S.height = A.height = R.height = T.height = y.height = n),
            r.cartographicArrayToCartesianArray(w, C),
            l.projectPointsToNearestOnPlane(C, x);
          var M = Math.min(x[6].x, x[7].x, x[0].x),
            g = Math.max(x[2].x, x[3].x, x[4].x),
            P = Math.min(x[4].y, x[5].y, x[6].y),
            U = Math.max(x[0].y, x[1].y, x[2].y);
          (p.height = d.height = T.height = A.height = t),
            r.cartographicArrayToCartesianArray(w, C);
          var D = Math.min(
              h.getPointDistance(f, C[0]),
              h.getPointDistance(f, C[2]),
              h.getPointDistance(f, C[4]),
              h.getPointDistance(f, C[6])
            ),
            L = n;
          return _(l, M, g, P, U, D, L, i);
        }),
          (m.clone = function(e, t) {
            if (i(e))
              return i(t)
                ? (n.clone(e.center, t.center),
                  d.clone(e.halfAxes, t.halfAxes),
                  t)
                : new m(e.center, e.halfAxes);
          }),
          (m.intersectPlane = function(e, t) {
            var r = e.center,
              a = t.normal,
              i = e.halfAxes,
              o = a.x,
              u = a.y,
              s = a.z,
              l =
                Math.abs(
                  o * i[d.COLUMN0ROW0] +
                    u * i[d.COLUMN0ROW1] +
                    s * i[d.COLUMN0ROW2]
                ) +
                Math.abs(
                  o * i[d.COLUMN1ROW0] +
                    u * i[d.COLUMN1ROW1] +
                    s * i[d.COLUMN1ROW2]
                ) +
                Math.abs(
                  o * i[d.COLUMN2ROW0] +
                    u * i[d.COLUMN2ROW1] +
                    s * i[d.COLUMN2ROW2]
                ),
              f = n.dot(a, r) + t.distance;
            return f <= -l ? c.OUTSIDE : f >= l ? c.INSIDE : c.INTERSECTING;
          });
        var P = new n(),
          U = new n(),
          D = new n(),
          L = new n();
        m.distanceSquaredTo = function(e, t) {
          var r = n.subtract(t, e.center, M),
            a = e.halfAxes,
            i = d.getColumn(a, 0, P),
            o = d.getColumn(a, 1, U),
            u = d.getColumn(a, 2, D),
            s = n.magnitude(i),
            c = n.magnitude(o),
            l = n.magnitude(u);
          n.normalize(i, i), n.normalize(o, o), n.normalize(u, u);
          var f = L;
          (f.x = n.dot(r, i)), (f.y = n.dot(r, o)), (f.z = n.dot(r, u));
          var h,
            E = 0;
          return (
            f.x < -s
              ? ((h = f.x + s), (E += h * h))
              : f.x > s && ((h = f.x - s), (E += h * h)),
            f.y < -c
              ? ((h = f.y + c), (E += h * h))
              : f.y > c && ((h = f.y - c), (E += h * h)),
            f.z < -l
              ? ((h = f.z + l), (E += h * h))
              : f.z > l && ((h = f.z - l), (E += h * h)),
            E
          );
        };
        var F = new n(),
          B = new n();
        m.computePlaneDistances = function(e, t, r, a) {
          i(a) || (a = new l());
          var o = Number.POSITIVE_INFINITY,
            u = Number.NEGATIVE_INFINITY,
            s = e.center,
            c = e.halfAxes,
            f = d.getColumn(c, 0, P),
            h = d.getColumn(c, 1, U),
            E = d.getColumn(c, 2, D),
            m = n.add(f, h, F);
          n.add(m, E, m), n.add(m, s, m);
          var _ = n.subtract(m, t, B),
            p = n.dot(r, _);
          return (
            (o = Math.min(p, o)),
            (u = Math.max(p, u)),
            n.add(s, f, m),
            n.add(m, h, m),
            n.subtract(m, E, m),
            n.subtract(m, t, _),
            (p = n.dot(r, _)),
            (o = Math.min(p, o)),
            (u = Math.max(p, u)),
            n.add(s, f, m),
            n.subtract(m, h, m),
            n.add(m, E, m),
            n.subtract(m, t, _),
            (p = n.dot(r, _)),
            (o = Math.min(p, o)),
            (u = Math.max(p, u)),
            n.add(s, f, m),
            n.subtract(m, h, m),
            n.subtract(m, E, m),
            n.subtract(m, t, _),
            (p = n.dot(r, _)),
            (o = Math.min(p, o)),
            (u = Math.max(p, u)),
            n.subtract(s, f, m),
            n.add(m, h, m),
            n.add(m, E, m),
            n.subtract(m, t, _),
            (p = n.dot(r, _)),
            (o = Math.min(p, o)),
            (u = Math.max(p, u)),
            n.subtract(s, f, m),
            n.add(m, h, m),
            n.subtract(m, E, m),
            n.subtract(m, t, _),
            (p = n.dot(r, _)),
            (o = Math.min(p, o)),
            (u = Math.max(p, u)),
            n.subtract(s, f, m),
            n.subtract(m, h, m),
            n.add(m, E, m),
            n.subtract(m, t, _),
            (p = n.dot(r, _)),
            (o = Math.min(p, o)),
            (u = Math.max(p, u)),
            n.subtract(s, f, m),
            n.subtract(m, h, m),
            n.subtract(m, E, m),
            n.subtract(m, t, _),
            (p = n.dot(r, _)),
            (o = Math.min(p, o)),
            (u = Math.max(p, u)),
            (a.start = o),
            (a.stop = u),
            a
          );
        };
        var b = new e();
        return (
          (m.isOccluded = function(t, n) {
            var r = e.fromOrientedBoundingBox(t, b);
            return !n.isBoundingSphereVisible(r);
          }),
          (m.prototype.intersectPlane = function(e) {
            return m.intersectPlane(this, e);
          }),
          (m.prototype.distanceSquaredTo = function(e) {
            return m.distanceSquaredTo(this, e);
          }),
          (m.prototype.computePlaneDistances = function(e, t, n) {
            return m.computePlaneDistances(this, e, t, n);
          }),
          (m.prototype.isOccluded = function(e) {
            return m.isOccluded(this, e);
          }),
          (m.equals = function(e, t) {
            return (
              e === t ||
              (i(e) &&
                i(t) &&
                n.equals(e.center, t.center) &&
                d.equals(e.halfAxes, t.halfAxes))
            );
          }),
          (m.prototype.clone = function(e) {
            return m.clone(this, e);
          }),
          (m.prototype.equals = function(e) {
            return m.equals(this, e);
          }),
          m
        );
      }
    ),
    define(
      "Core/AttributeCompression",
      [
        "./Cartesian2",
        "./Cartesian3",
        "./Check",
        "./defined",
        "./DeveloperError",
        "./Math"
      ],
      function(e, t, n, r, a, i) {
        "use strict";
        var o = {};
        (o.octEncodeInRange = function(e, t, n) {
          if (
            ((n.x = e.x / (Math.abs(e.x) + Math.abs(e.y) + Math.abs(e.z))),
            (n.y = e.y / (Math.abs(e.x) + Math.abs(e.y) + Math.abs(e.z))),
            e.z < 0)
          ) {
            var r = n.x,
              a = n.y;
            (n.x = (1 - Math.abs(a)) * i.signNotZero(r)),
              (n.y = (1 - Math.abs(r)) * i.signNotZero(a));
          }
          return (n.x = i.toSNorm(n.x, t)), (n.y = i.toSNorm(n.y, t)), n;
        }),
          (o.octEncode = function(e, t) {
            return o.octEncodeInRange(e, 255, t);
          }),
          (o.octDecodeInRange = function(e, n, r, a) {
            if (
              ((a.x = i.fromSNorm(e, r)),
              (a.y = i.fromSNorm(n, r)),
              (a.z = 1 - (Math.abs(a.x) + Math.abs(a.y))),
              a.z < 0)
            ) {
              var o = a.x;
              (a.x = (1 - Math.abs(a.y)) * i.signNotZero(o)),
                (a.y = (1 - Math.abs(o)) * i.signNotZero(a.y));
            }
            return t.normalize(a, a);
          }),
          (o.octDecode = function(e, t, n) {
            return o.octDecodeInRange(e, t, 255, n);
          }),
          (o.octPackFloat = function(e) {
            return 256 * e.x + e.y;
          });
        var u = new e();
        return (
          (o.octEncodeFloat = function(e) {
            return o.octEncode(e, u), o.octPackFloat(u);
          }),
          (o.octDecodeFloat = function(e, t) {
            var n = e / 256,
              r = Math.floor(n),
              a = 256 * (n - r);
            return o.octDecode(r, a, t);
          }),
          (o.octPack = function(e, t, n, r) {
            var a = o.octEncodeFloat(e),
              i = o.octEncodeFloat(t),
              s = o.octEncode(n, u);
            return (r.x = 65536 * s.x + a), (r.y = 65536 * s.y + i), r;
          }),
          (o.octUnpack = function(e, t, n, r) {
            var a = e.x / 65536,
              i = Math.floor(a),
              u = 65536 * (a - i);
            a = e.y / 65536;
            var s = Math.floor(a),
              c = 65536 * (a - s);
            o.octDecodeFloat(u, t),
              o.octDecodeFloat(c, n),
              o.octDecode(i, s, r);
          }),
          (o.compressTextureCoordinates = function(e) {
            var t = (4095 * e.x) | 0,
              n = (4095 * e.y) | 0;
            return 4096 * t + n;
          }),
          (o.decompressTextureCoordinates = function(e, t) {
            var n = e / 4096,
              r = Math.floor(n);
            return (t.x = r / 4095), (t.y = (e - 4096 * r) / 4095), t;
          }),
          o
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
      function(e, t, n, r, a, i) {
        "use strict";
        if (!r.supportsTypedArrays()) return {};
        var o = {
          BYTE: i.BYTE,
          UNSIGNED_BYTE: i.UNSIGNED_BYTE,
          SHORT: i.SHORT,
          UNSIGNED_SHORT: i.UNSIGNED_SHORT,
          INT: i.INT,
          UNSIGNED_INT: i.UNSIGNED_INT,
          FLOAT: i.FLOAT,
          DOUBLE: i.DOUBLE
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
          (o.createArrayBufferView = function(t, n, r, a) {
            switch (((r = e(r, 0)),
            (a = e(a, (n.byteLength - r) / o.getSizeInBytes(t))),
            t)) {
              case o.BYTE:
                return new Int8Array(n, r, a);
              case o.UNSIGNED_BYTE:
                return new Uint8Array(n, r, a);
              case o.SHORT:
                return new Int16Array(n, r, a);
              case o.UNSIGNED_SHORT:
                return new Uint16Array(n, r, a);
              case o.INT:
                return new Int32Array(n, r, a);
              case o.UNSIGNED_INT:
                return new Uint32Array(n, r, a);
              case o.FLOAT:
                return new Float32Array(n, r, a);
              case o.DOUBLE:
                return new Float64Array(n, r, a);
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
          a(o)
        );
      }
    ),
    define("Core/TerrainQuantization", ["./freezeObject"], function(e) {
      "use strict";
      var t = { NONE: 0, BITS12: 1 };
      return e(t);
    }),
    define(
      "Core/TerrainEncoding",
      [
        "./AttributeCompression",
        "./Cartesian2",
        "./Cartesian3",
        "./ComponentDatatype",
        "./defaultValue",
        "./defined",
        "./Math",
        "./Matrix4",
        "./TerrainQuantization"
      ],
      function(e, t, n, r, a, i, o, u, s) {
        "use strict";
        function c(e, t, r, o, c, d) {
          var _, p, y, T;
          if (i(e) && i(t) && i(r) && i(o)) {
            var R = e.minimum,
              A = e.maximum,
              S = n.subtract(A, R, f),
              N = r - t,
              v = Math.max(n.maximumComponent(S), N);
            (_ = v < m - 1 ? s.BITS12 : s.NONE),
              (p = e.center),
              (y = u.inverseTransformation(o, new u()));
            var M = n.negate(R, l);
            u.multiply(u.fromTranslation(M, h), y, y);
            var g = l;
            (g.x = 1 / S.x),
              (g.y = 1 / S.y),
              (g.z = 1 / S.z),
              u.multiply(u.fromScale(g, h), y, y),
              (T = u.clone(o)),
              u.setTranslation(T, n.ZERO, T),
              (o = u.clone(o, new u()));
            var O = u.fromTranslation(R, h),
              I = u.fromScale(S, E),
              w = u.multiply(O, I, h);
            u.multiply(o, w, o), u.multiply(T, w, T);
          }
          (this.quantization = _),
            (this.minimumHeight = t),
            (this.maximumHeight = r),
            (this.center = p),
            (this.toScaledENU = y),
            (this.fromScaledENU = o),
            (this.matrix = T),
            (this.hasVertexNormals = c),
            (this.hasWebMercatorT = a(d, !1));
        }
        var l = new n(),
          f = new n(),
          d = new t(),
          h = new u(),
          E = new u(),
          m = Math.pow(2, 12);
        (c.prototype.encode = function(r, a, i, c, f, h, E) {
          var m = c.x,
            _ = c.y;
          if (this.quantization === s.BITS12) {
            (i = u.multiplyByPoint(this.toScaledENU, i, l)),
              (i.x = o.clamp(i.x, 0, 1)),
              (i.y = o.clamp(i.y, 0, 1)),
              (i.z = o.clamp(i.z, 0, 1));
            var p = this.maximumHeight - this.minimumHeight,
              y = o.clamp((f - this.minimumHeight) / p, 0, 1);
            t.fromElements(i.x, i.y, d);
            var T = e.compressTextureCoordinates(d);
            t.fromElements(i.z, y, d);
            var R = e.compressTextureCoordinates(d);
            t.fromElements(m, _, d);
            var A = e.compressTextureCoordinates(d);
            if (
              ((r[a++] = T), (r[a++] = R), (r[a++] = A), this.hasWebMercatorT)
            ) {
              t.fromElements(E, 0, d);
              var S = e.compressTextureCoordinates(d);
              r[a++] = S;
            }
          } else
            n.subtract(i, this.center, l),
              (r[a++] = l.x),
              (r[a++] = l.y),
              (r[a++] = l.z),
              (r[a++] = f),
              (r[a++] = m),
              (r[a++] = _),
              this.hasWebMercatorT && (r[a++] = E);
          return this.hasVertexNormals && (r[a++] = e.octPackFloat(h)), a;
        }),
          (c.prototype.decodePosition = function(t, r, a) {
            if (
              (i(a) || (a = new n()),
              (r *= this.getStride()),
              this.quantization === s.BITS12)
            ) {
              var o = e.decompressTextureCoordinates(t[r], d);
              (a.x = o.x), (a.y = o.y);
              var c = e.decompressTextureCoordinates(t[r + 1], d);
              return (a.z = c.x), u.multiplyByPoint(this.fromScaledENU, a, a);
            }
            return (
              (a.x = t[r]),
              (a.y = t[r + 1]),
              (a.z = t[r + 2]),
              n.add(a, this.center, a)
            );
          }),
          (c.prototype.decodeTextureCoordinates = function(n, r, a) {
            return (
              i(a) || (a = new t()),
              (r *= this.getStride()),
              this.quantization === s.BITS12
                ? e.decompressTextureCoordinates(n[r + 2], a)
                : t.fromElements(n[r + 4], n[r + 5], a)
            );
          }),
          (c.prototype.decodeHeight = function(t, n) {
            if (((n *= this.getStride()), this.quantization === s.BITS12)) {
              var r = e.decompressTextureCoordinates(t[n + 1], d);
              return (
                r.y * (this.maximumHeight - this.minimumHeight) +
                this.minimumHeight
              );
            }
            return t[n + 3];
          }),
          (c.prototype.getOctEncodedNormal = function(e, n, r) {
            var a = this.getStride();
            n = (n + 1) * a - 1;
            var i = e[n] / 256,
              o = Math.floor(i),
              u = 256 * (i - o);
            return t.fromElements(o, u, r);
          }),
          (c.prototype.getStride = function() {
            var e;
            switch (this.quantization) {
              case s.BITS12:
                e = 3;
                break;
              default:
                e = 6;
            }
            return this.hasWebMercatorT && ++e, this.hasVertexNormals && ++e, e;
          });
        var _ = { position3DAndHeight: 0, textureCoordAndEncodedNormals: 1 },
          p = { compressed0: 0, compressed1: 1 };
        return (
          (c.prototype.getAttributes = function(e) {
            var t,
              n = r.FLOAT,
              a = r.getSizeInBytes(n);
            if (this.quantization === s.NONE) {
              var i = 4,
                o = 2;
              return (
                this.hasWebMercatorT && ++o,
                this.hasVertexNormals && ++o,
                (t = (i + o) * a),
                [
                  {
                    index: _.position3DAndHeight,
                    vertexBuffer: e,
                    componentDatatype: n,
                    componentsPerAttribute: i,
                    offsetInBytes: 0,
                    strideInBytes: t
                  },
                  {
                    index: _.textureCoordAndEncodedNormals,
                    vertexBuffer: e,
                    componentDatatype: n,
                    componentsPerAttribute: o,
                    offsetInBytes: i * a,
                    strideInBytes: t
                  }
                ]
              );
            }
            var u = 3,
              c = 0;
            return (
              (this.hasWebMercatorT || this.hasVertexNormals) && ++u,
              this.hasWebMercatorT && this.hasVertexNormals
                ? (++c,
                  (t = (u + c) * a),
                  [
                    {
                      index: p.compressed0,
                      vertexBuffer: e,
                      componentDatatype: n,
                      componentsPerAttribute: u,
                      offsetInBytes: 0,
                      strideInBytes: t
                    },
                    {
                      index: p.compressed1,
                      vertexBuffer: e,
                      componentDatatype: n,
                      componentsPerAttribute: c,
                      offsetInBytes: u * a,
                      strideInBytes: t
                    }
                  ])
                : [
                    {
                      index: p.compressed0,
                      vertexBuffer: e,
                      componentDatatype: n,
                      componentsPerAttribute: u
                    }
                  ]
            );
          }),
          (c.prototype.getAttributeLocations = function() {
            return this.quantization === s.NONE ? _ : p;
          }),
          (c.clone = function(e, t) {
            return (
              i(t) || (t = new c()),
              (t.quantization = e.quantization),
              (t.minimumHeight = e.minimumHeight),
              (t.maximumHeight = e.maximumHeight),
              (t.center = n.clone(e.center)),
              (t.toScaledENU = u.clone(e.toScaledENU)),
              (t.fromScaledENU = u.clone(e.fromScaledENU)),
              (t.matrix = u.clone(e.matrix)),
              (t.hasVertexNormals = e.hasVertexNormals),
              (t.hasWebMercatorT = e.hasWebMercatorT),
              t
            );
          }),
          c
        );
      }
    ),
    define(
      "Core/WebMercatorProjection",
      [
        "./Cartesian3",
        "./Cartographic",
        "./defaultValue",
        "./defined",
        "./defineProperties",
        "./DeveloperError",
        "./Ellipsoid",
        "./Math"
      ],
      function(e, t, n, r, a, i, o, u) {
        "use strict";
        function s(e) {
          (this._ellipsoid = n(e, o.WGS84)),
            (this._semimajorAxis = this._ellipsoid.maximumRadius),
            (this._oneOverSemimajorAxis = 1 / this._semimajorAxis);
        }
        return (
          a(s.prototype, {
            ellipsoid: {
              get: function() {
                return this._ellipsoid;
              }
            }
          }),
          (s.mercatorAngleToGeodeticLatitude = function(e) {
            return u.PI_OVER_TWO - 2 * Math.atan(Math.exp(-e));
          }),
          (s.geodeticLatitudeToMercatorAngle = function(e) {
            e > s.MaximumLatitude
              ? (e = s.MaximumLatitude)
              : e < -s.MaximumLatitude && (e = -s.MaximumLatitude);
            var t = Math.sin(e);
            return 0.5 * Math.log((1 + t) / (1 - t));
          }),
          (s.MaximumLatitude = s.mercatorAngleToGeodeticLatitude(Math.PI)),
          (s.prototype.project = function(t, n) {
            var a = this._semimajorAxis,
              i = t.longitude * a,
              o = s.geodeticLatitudeToMercatorAngle(t.latitude) * a,
              u = t.height;
            return r(n) ? ((n.x = i), (n.y = o), (n.z = u), n) : new e(i, o, u);
          }),
          (s.prototype.unproject = function(e, n) {
            var a = this._oneOverSemimajorAxis,
              i = e.x * a,
              o = s.mercatorAngleToGeodeticLatitude(e.y * a),
              u = e.z;
            return r(n)
              ? ((n.longitude = i), (n.latitude = o), (n.height = u), n)
              : new t(i, o, u);
          }),
          s
        );
      }
    ),
    define("Core/formatError", ["./defined"], function(e) {
      "use strict";
      function t(t) {
        var n,
          r = t.name,
          a = t.message;
        n = e(r) && e(a) ? r + ": " + a : t.toString();
        var i = t.stack;
        return e(i) && (n += "\n" + i), n;
      }
      return t;
    }),
    define(
      "Workers/createTaskProcessorWorker",
      ["../Core/defaultValue", "../Core/defined", "../Core/formatError"],
      function(e, t, n) {
        "use strict";
        function r(r) {
          var a,
            i = [],
            o = { id: void 0, result: void 0, error: void 0 };
          return function(u) {
            var s = u.data;
            (i.length = 0),
              (o.id = s.id),
              (o.error = void 0),
              (o.result = void 0);
            try {
              o.result = r(s.parameters, i);
            } catch (e) {
              e instanceof Error
                ? (o.error = {
                    name: e.name,
                    message: e.message,
                    stack: e.stack
                  })
                : (o.error = e);
            }
            t(a) || (a = e(self.webkitPostMessage, self.postMessage)),
              s.canTransferArrayBuffer || (i.length = 0);
            try {
              a(o, i);
            } catch (e) {
              (o.result = void 0),
                (o.error =
                  "postMessage failed with error: " +
                  n(e) +
                  "\n  with responseMessage: " +
                  JSON.stringify(o)),
                a(o);
            }
          };
        }
        return r;
      }
    ),
    define(
      "Workers/createVerticesFromGoogleEarthEnterpriseBuffer",
      [
        "../Core/AxisAlignedBoundingBox",
        "../Core/BoundingSphere",
        "../Core/Cartesian2",
        "../Core/Cartesian3",
        "../Core/Cartographic",
        "../Core/defaultValue",
        "../Core/defined",
        "../Core/Ellipsoid",
        "../Core/EllipsoidalOccluder",
        "../Core/Math",
        "../Core/Matrix4",
        "../Core/OrientedBoundingBox",
        "../Core/Rectangle",
        "../Core/RuntimeError",
        "../Core/TerrainEncoding",
        "../Core/Transforms",
        "../Core/WebMercatorProjection",
        "./createTaskProcessorWorker"
      ],
      function(e, t, n, r, a, i, o, u, s, c, l, f, d, h, E, m, _, p) {
        "use strict";
        function y(e, t, n) {
          n = i(n, c);
          for (var r = e.length, a = 0; a < r; ++a)
            if (n.equalsEpsilon(e[a], t, c.EPSILON12)) return a;
          return -1;
        }
        function T(e, t) {
          (e.ellipsoid = u.clone(e.ellipsoid)),
            (e.rectangle = d.clone(e.rectangle));
          var n = R(
              e.buffer,
              e.relativeToCenter,
              e.ellipsoid,
              e.rectangle,
              e.nativeRectangle,
              e.exaggeration,
              e.skirtHeight,
              e.includeWebMercatorT,
              e.negativeAltitudeExponentBias,
              e.negativeElevationThreshold
            ),
            r = n.vertices;
          t.push(r.buffer);
          var a = n.indices;
          return (
            t.push(a.buffer),
            {
              vertices: r.buffer,
              indices: a.buffer,
              numberOfAttributes: n.encoding.getStride(),
              minimumHeight: n.minimumHeight,
              maximumHeight: n.maximumHeight,
              boundingSphere3D: n.boundingSphere3D,
              orientedBoundingBox: n.orientedBoundingBox,
              occludeePointInScaledSpace: n.occludeePointInScaledSpace,
              encoding: n.encoding,
              vertexCountWithoutSkirts: n.vertexCountWithoutSkirts,
              skirtIndex: n.skirtIndex
            }
          );
        }
        function R(i, u, d, p, T, R, P, U, D, L) {
          var F, B, b, z, q, G;
          o(p)
            ? ((F = p.west),
              (B = p.south),
              (b = p.east),
              (z = p.north),
              (q = p.width),
              (G = p.height))
            : ((F = c.toRadians(T.west)),
              (B = c.toRadians(T.south)),
              (b = c.toRadians(T.east)),
              (z = c.toRadians(T.north)),
              (q = c.toRadians(p.width)),
              (G = c.toRadians(p.height)));
          var W,
            V,
            X = [B, z],
            H = [F, b],
            Y = m.eastNorthUpToFixedFrame(u, d),
            k = l.inverseTransformation(Y, x);
          U &&
            ((W = _.geodeticLatitudeToMercatorAngle(B)),
            (V = 1 / (_.geodeticLatitudeToMercatorAngle(z) - W)));
          var j = new DataView(i),
            Z = Number.POSITIVE_INFINITY,
            K = Number.NEGATIVE_INFINITY,
            J = w;
          (J.x = Number.POSITIVE_INFINITY),
            (J.y = Number.POSITIVE_INFINITY),
            (J.z = Number.POSITIVE_INFINITY);
          var Q = C;
          (Q.x = Number.NEGATIVE_INFINITY),
            (Q.y = Number.NEGATIVE_INFINITY),
            (Q.z = Number.NEGATIVE_INFINITY);
          var $,
            ee,
            te = 0,
            ne = 0,
            re = 0;
          for (ee = 0; ee < 4; ++ee) {
            var ae = te;
            ($ = j.getUint32(ae, !0)), (ae += v);
            var ie = c.toRadians(180 * j.getFloat64(ae, !0));
            (ae += g), y(H, ie) === -1 && H.push(ie);
            var oe = c.toRadians(180 * j.getFloat64(ae, !0));
            (ae += g), y(X, oe) === -1 && X.push(oe), (ae += 2 * g);
            var ue = j.getInt32(ae, !0);
            (ae += N),
              (ne += ue),
              (ue = j.getInt32(ae, !0)),
              (re += 3 * ue),
              (te += $ + v);
          }
          var se = [],
            ce = [],
            le = new Array(ne),
            fe = new Array(ne),
            de = new Array(ne),
            he = U ? new Array(ne) : [],
            Ee = new Array(re),
            me = [],
            _e = [],
            pe = [],
            ye = [],
            Te = 0,
            Re = 0;
          for (te = 0, ee = 0; ee < 4; ++ee) {
            ($ = j.getUint32(te, !0)), (te += v);
            var Ae = te,
              Se = c.toRadians(180 * j.getFloat64(te, !0));
            te += g;
            var Ne = c.toRadians(180 * j.getFloat64(te, !0));
            te += g;
            var ve = c.toRadians(180 * j.getFloat64(te, !0)),
              Me = 0.5 * ve;
            te += g;
            var ge = c.toRadians(180 * j.getFloat64(te, !0)),
              Oe = 0.5 * ge;
            te += g;
            var Ie = j.getInt32(te, !0);
            te += N;
            var we = j.getInt32(te, !0);
            (te += N), (te += N);
            for (var Ce = new Array(Ie), xe = 0; xe < Ie; ++xe) {
              var Pe = Se + j.getUint8(te++) * ve;
              O.longitude = Pe;
              var Ue = Ne + j.getUint8(te++) * ge;
              O.latitude = Ue;
              var De = 6371010 * j.getFloat32(te, !0);
              if (
                ((te += M),
                De < L && (De *= D),
                (De *= R),
                (O.height = De),
                y(H, Pe) !== -1 || y(X, Ue) !== -1)
              ) {
                var Le = y(se, O, a);
                if (Le !== -1) {
                  Ce[xe] = ce[Le];
                  continue;
                }
                se.push(a.clone(O)), ce.push(Te);
              }
              (Ce[xe] = Te),
                Math.abs(Pe - F) < Me
                  ? me.push({ index: Te, cartographic: a.clone(O) })
                  : Math.abs(Pe - b) < Me
                    ? pe.push({ index: Te, cartographic: a.clone(O) })
                    : Math.abs(Ue - B) < Oe
                      ? _e.push({ index: Te, cartographic: a.clone(O) })
                      : Math.abs(Ue - z) < Oe &&
                        ye.push({ index: Te, cartographic: a.clone(O) }),
                (Z = Math.min(De, Z)),
                (K = Math.max(De, K)),
                (de[Te] = De);
              var Fe = d.cartographicToCartesian(O);
              (le[Te] = Fe),
                U && (he[Te] = (_.geodeticLatitudeToMercatorAngle(Ue) - W) * V),
                l.multiplyByPoint(k, Fe, I),
                r.minimumByComponent(I, J, J),
                r.maximumByComponent(I, Q, Q);
              var Be = (Pe - F) / (b - F);
              Be = c.clamp(Be, 0, 1);
              var be = (Ue - B) / (z - B);
              (be = c.clamp(be, 0, 1)), (fe[Te] = new n(Be, be)), ++Te;
            }
            for (var ze = 3 * we, qe = 0; qe < ze; ++qe, ++Re)
              (Ee[Re] = Ce[j.getUint16(te, !0)]), (te += S);
            if ($ !== te - Ae) throw new h("Invalid terrain tile.");
          }
          (le.length = Te),
            (fe.length = Te),
            (de.length = Te),
            U && (he.length = Te);
          var Ge = Te,
            We = Re,
            Ve = {
              hMin: Z,
              lastBorderPoint: void 0,
              skirtHeight: P,
              toENU: k,
              ellipsoid: d,
              minimum: J,
              maximum: Q
            };
          me.sort(function(e, t) {
            return t.cartographic.latitude - e.cartographic.latitude;
          }),
            _e.sort(function(e, t) {
              return e.cartographic.longitude - t.cartographic.longitude;
            }),
            pe.sort(function(e, t) {
              return e.cartographic.latitude - t.cartographic.latitude;
            }),
            ye.sort(function(e, t) {
              return t.cartographic.longitude - e.cartographic.longitude;
            });
          var Xe = 1e-5;
          if (
            (A(le, de, fe, he, Ee, Ve, me, -Xe * q, !0, -Xe * G),
            A(le, de, fe, he, Ee, Ve, _e, -Xe * G, !1),
            A(le, de, fe, he, Ee, Ve, pe, Xe * q, !0, Xe * G),
            A(le, de, fe, he, Ee, Ve, ye, Xe * G, !1),
            me.length > 0 && ye.length > 0)
          ) {
            var He = me[0].index,
              Ye = Ge,
              ke = ye[ye.length - 1].index,
              je = le.length - 1;
            Ee.push(ke, je, Ye, Ye, He, ke);
          }
          ne = le.length;
          var Ze,
            Ke = t.fromPoints(le);
          o(p) &&
            p.width < c.PI_OVER_TWO + c.EPSILON5 &&
            (Ze = f.fromRectangle(p, Z, K, d));
          for (
            var Je = new s(d),
              Qe = Je.computeHorizonCullingPoint(u, le),
              $e = new e(J, Q, u),
              et = new E($e, Ve.hMin, K, Y, !1, U),
              tt = new Float32Array(ne * et.getStride()),
              nt = 0,
              rt = 0;
            rt < ne;
            ++rt
          )
            nt = et.encode(tt, nt, le[rt], fe[rt], de[rt], void 0, he[rt]);
          return {
            vertices: tt,
            indices: new Uint16Array(Ee),
            maximumHeight: K,
            minimumHeight: Z,
            encoding: et,
            boundingSphere3D: Ke,
            orientedBoundingBox: Ze,
            occludeePointInScaledSpace: Qe,
            vertexCountWithoutSkirts: Ge,
            skirtIndex: We
          };
        }
        function A(e, t, i, u, s, f, d, h, E, m) {
          for (var _ = d.length, p = 0; p < _; ++p) {
            var y = d[p],
              T = y.cartographic,
              R = y.index,
              A = e.length,
              S = T.longitude,
              N = T.latitude;
            N = c.clamp(N, -c.PI_OVER_TWO, c.PI_OVER_TWO);
            var v = T.height - f.skirtHeight;
            (f.hMin = Math.min(f.hMin, v)),
              a.fromRadians(S, N, v, O),
              E && (O.longitude += h),
              E
                ? p === _ - 1 ? (O.latitude += m) : 0 === p && (O.latitude -= m)
                : (O.latitude += h);
            var M = f.ellipsoid.cartographicToCartesian(O);
            e.push(M),
              t.push(v),
              i.push(n.clone(i[R])),
              u.length > 0 && u.push(u[R]),
              l.multiplyByPoint(f.toENU, M, I);
            var g = f.minimum,
              w = f.maximum;
            r.minimumByComponent(I, g, g), r.maximumByComponent(I, w, w);
            var C = f.lastBorderPoint;
            if (o(C)) {
              var x = C.index;
              s.push(x, A - 1, A, A, R, x);
            }
            f.lastBorderPoint = y;
          }
        }
        var S = Uint16Array.BYTES_PER_ELEMENT,
          N = Int32Array.BYTES_PER_ELEMENT,
          v = Uint32Array.BYTES_PER_ELEMENT,
          M = Float32Array.BYTES_PER_ELEMENT,
          g = Float64Array.BYTES_PER_ELEMENT,
          O = new a(),
          I = new r(),
          w = new r(),
          C = new r(),
          x = new l();
        return p(T);
      }
    );
})();
