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
/*
 Copyright (c) 2013 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

!(function(e) {
  function t() {
    function e(e) {
      var t,
        n,
        i,
        r,
        _,
        o,
        d = a.dyn_tree,
        f = a.stat_desc.static_tree,
        l = a.stat_desc.extra_bits,
        s = a.stat_desc.extra_base,
        c = a.stat_desc.max_length,
        p = 0;
      for (r = 0; r <= u; r++) e.bl_count[r] = 0;
      for (d[2 * e.heap[e.heap_max] + 1] = 0, t = e.heap_max + 1; t < h; t++)
        (n = e.heap[t]),
          (r = d[2 * d[2 * n + 1] + 1] + 1),
          r > c && ((r = c), p++),
          (d[2 * n + 1] = r),
          n > a.max_code ||
            (e.bl_count[r]++,
            (_ = 0),
            n >= s && (_ = l[n - s]),
            (o = d[2 * n]),
            (e.opt_len += o * (r + _)),
            f && (e.static_len += o * (f[2 * n + 1] + _)));
      if (0 !== p) {
        do {
          for (r = c - 1; 0 === e.bl_count[r]; ) r--;
          e.bl_count[r]--, (e.bl_count[r + 1] += 2), e.bl_count[c]--, (p -= 2);
        } while (p > 0);
        for (r = c; 0 !== r; r--)
          for (n = e.bl_count[r]; 0 !== n; )
            (i = e.heap[--t]),
              i > a.max_code ||
                (d[2 * i + 1] != r &&
                  ((e.opt_len += (r - d[2 * i + 1]) * d[2 * i]),
                  (d[2 * i + 1] = r)),
                n--);
      }
    }
    function t(e, t) {
      var n = 0;
      do (n |= 1 & e), (e >>>= 1), (n <<= 1);
      while (--t > 0);
      return n >>> 1;
    }
    function n(e, n, a) {
      var i,
        r,
        _,
        o = [],
        d = 0;
      for (i = 1; i <= u; i++) o[i] = d = (d + a[i - 1]) << 1;
      for (r = 0; r <= n; r++)
        (_ = e[2 * r + 1]), 0 !== _ && (e[2 * r] = t(o[_]++, _));
    }
    var a = this;
    a.build_tree = function(t) {
      var i,
        r,
        _,
        o = a.dyn_tree,
        u = a.stat_desc.static_tree,
        d = a.stat_desc.elems,
        f = -1;
      for (t.heap_len = 0, t.heap_max = h, i = 0; i < d; i++)
        0 !== o[2 * i]
          ? ((t.heap[++t.heap_len] = f = i), (t.depth[i] = 0))
          : (o[2 * i + 1] = 0);
      for (; t.heap_len < 2; )
        (_ = t.heap[++t.heap_len] = f < 2 ? ++f : 0),
          (o[2 * _] = 1),
          (t.depth[_] = 0),
          t.opt_len--,
          u && (t.static_len -= u[2 * _ + 1]);
      for (a.max_code = f, i = Math.floor(t.heap_len / 2); i >= 1; i--)
        t.pqdownheap(o, i);
      _ = d;
      do
        (i = t.heap[1]),
          (t.heap[1] = t.heap[t.heap_len--]),
          t.pqdownheap(o, 1),
          (r = t.heap[1]),
          (t.heap[--t.heap_max] = i),
          (t.heap[--t.heap_max] = r),
          (o[2 * _] = o[2 * i] + o[2 * r]),
          (t.depth[_] = Math.max(t.depth[i], t.depth[r]) + 1),
          (o[2 * i + 1] = o[2 * r + 1] = _),
          (t.heap[1] = _++),
          t.pqdownheap(o, 1);
      while (t.heap_len >= 2);
      (t.heap[--t.heap_max] = t.heap[1]), e(t), n(o, a.max_code, t.bl_count);
    };
  }
  function n(e, t, n, a, i) {
    var r = this;
    (r.static_tree = e),
      (r.extra_bits = t),
      (r.extra_base = n),
      (r.elems = a),
      (r.max_length = i);
  }
  function a(e, t, n, a, i) {
    var r = this;
    (r.good_length = e),
      (r.max_lazy = t),
      (r.nice_length = n),
      (r.max_chain = a),
      (r.func = i);
  }
  function i(e, t, n, a) {
    var i = e[2 * t],
      r = e[2 * n];
    return i < r || (i == r && a[t] <= a[n]);
  }
  function r() {
    function e() {
      var e;
      for (De = 2 * Ee, Pe[Le - 1] = 0, e = 0; e < Le - 1; e++) Pe[e] = 0;
      (Te = J[Ve].max_lazy),
        (Xe = J[Ve].good_length),
        (Ye = J[Ve].nice_length),
        (Re = J[Ve].max_chain),
        (Ke = 0),
        (Fe = 0),
        (Oe = 0),
        (Ge = Qe = te - 1),
        (Je = 0),
        (Se = 0);
    }
    function a() {
      var e;
      for (e = 0; e < c; e++) Ze[2 * e] = 0;
      for (e = 0; e < d; e++) $e[2 * e] = 0;
      for (e = 0; e < f; e++) et[2 * e] = 0;
      (Ze[2 * p] = 1), (tt.opt_len = tt.static_len = 0), (ot = dt = 0);
    }
    function r() {
      (nt.dyn_tree = Ze),
        (nt.stat_desc = n.static_l_desc),
        (at.dyn_tree = $e),
        (at.stat_desc = n.static_d_desc),
        (it.dyn_tree = et),
        (it.stat_desc = n.static_bl_desc),
        (lt = 0),
        (st = 0),
        (ft = 8),
        a();
    }
    function _(e, t) {
      var n,
        a,
        i = -1,
        r = e[1],
        _ = 0,
        o = 7,
        u = 4;
      for (
        0 === r && ((o = 138), (u = 3)), e[2 * (t + 1) + 1] = 65535, n = 0;
        n <= t;
        n++
      )
        (a = r),
          (r = e[2 * (n + 1) + 1]),
          (++_ < o && a == r) ||
            (_ < u
              ? (et[2 * a] += _)
              : 0 !== a
                ? (a != i && et[2 * a]++, et[2 * v]++)
                : _ <= 10 ? et[2 * b]++ : et[2 * g]++,
            (_ = 0),
            (i = a),
            0 === r
              ? ((o = 138), (u = 3))
              : a == r ? ((o = 6), (u = 3)) : ((o = 7), (u = 4)));
    }
    function o() {
      var e;
      for (
        _(Ze, nt.max_code), _($e, at.max_code), it.build_tree(tt), e = f - 1;
        e >= 3 && 0 === et[2 * t.bl_order[e] + 1];
        e--
      );
      return (tt.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
    }
    function u(e) {
      tt.pending_buf[tt.pending++] = e;
    }
    function l(e) {
      u(255 & e), u((e >>> 8) & 255);
    }
    function h(e) {
      u((e >> 8) & 255), u(255 & e & 255);
    }
    function x(e, t) {
      var n,
        a = t;
      st > w - a
        ? ((n = e),
          (lt |= (n << st) & 65535),
          l(lt),
          (lt = n >>> (w - st)),
          (st += a - w))
        : ((lt |= (e << st) & 65535), (st += a));
    }
    function j(e, t) {
      var n = 2 * e;
      x(65535 & t[n], 65535 & t[n + 1]);
    }
    function ie(e, t) {
      var n,
        a,
        i = -1,
        r = e[1],
        _ = 0,
        o = 7,
        u = 4;
      for (0 === r && ((o = 138), (u = 3)), n = 0; n <= t; n++)
        if (((a = r), (r = e[2 * (n + 1) + 1]), !(++_ < o && a == r))) {
          if (_ < u) {
            do j(a, et);
            while (0 !== --_);
          } else
            0 !== a
              ? (a != i && (j(a, et), _--), j(v, et), x(_ - 3, 2))
              : _ <= 10 ? (j(b, et), x(_ - 3, 3)) : (j(g, et), x(_ - 11, 7));
          (_ = 0),
            (i = a),
            0 === r
              ? ((o = 138), (u = 3))
              : a == r ? ((o = 6), (u = 3)) : ((o = 7), (u = 4));
        }
    }
    function re(e, n, a) {
      var i;
      for (x(e - 257, 5), x(n - 1, 5), x(a - 4, 4), i = 0; i < a; i++)
        x(et[2 * t.bl_order[i] + 1], 3);
      ie(Ze, e - 1), ie($e, n - 1);
    }
    function _e() {
      16 == st
        ? (l(lt), (lt = 0), (st = 0))
        : st >= 8 && (u(255 & lt), (lt >>>= 8), (st -= 8));
    }
    function oe() {
      x($ << 1, 3),
        j(p, n.static_ltree),
        _e(),
        1 + ft + 10 - st < 9 && (x($ << 1, 3), j(p, n.static_ltree), _e()),
        (ft = 7);
    }
    function ue(e, n) {
      var a, i, r;
      if (
        ((tt.pending_buf[ut + 2 * ot] = (e >>> 8) & 255),
        (tt.pending_buf[ut + 2 * ot + 1] = 255 & e),
        (tt.pending_buf[rt + ot] = 255 & n),
        ot++,
        0 === e
          ? Ze[2 * n]++
          : (dt++,
            e--,
            Ze[2 * (t._length_code[n] + s + 1)]++,
            $e[2 * t.d_code(e)]++),
        0 === (8191 & ot) && Ve > 2)
      ) {
        for (a = 8 * ot, i = Ke - Fe, r = 0; r < d; r++)
          a += $e[2 * r] * (5 + t.extra_dbits[r]);
        if (((a >>>= 3), dt < Math.floor(ot / 2) && a < Math.floor(i / 2)))
          return !0;
      }
      return ot == _t - 1;
    }
    function de(e, n) {
      var a,
        i,
        r,
        _,
        o = 0;
      if (0 !== ot)
        do
          (a =
            ((tt.pending_buf[ut + 2 * o] << 8) & 65280) |
            (255 & tt.pending_buf[ut + 2 * o + 1])),
            (i = 255 & tt.pending_buf[rt + o]),
            o++,
            0 === a
              ? j(i, e)
              : ((r = t._length_code[i]),
                j(r + s + 1, e),
                (_ = t.extra_lbits[r]),
                0 !== _ && ((i -= t.base_length[r]), x(i, _)),
                a--,
                (r = t.d_code(a)),
                j(r, n),
                (_ = t.extra_dbits[r]),
                0 !== _ && ((a -= t.base_dist[r]), x(a, _)));
        while (o < ot);
      j(p, e), (ft = e[2 * p + 1]);
    }
    function fe() {
      st > 8 ? l(lt) : st > 0 && u(255 & lt), (lt = 0), (st = 0);
    }
    function le(e, t, n) {
      fe(),
        (ft = 8),
        n && (l(t), l(~t)),
        tt.pending_buf.set(qe.subarray(e, e + t), tt.pending),
        (tt.pending += t);
    }
    function se(e, t, n) {
      x((Z << 1) + (n ? 1 : 0), 3), le(e, t, !0);
    }
    function ce(e, t, i) {
      var r,
        _,
        u = 0;
      Ve > 0
        ? (nt.build_tree(tt),
          at.build_tree(tt),
          (u = o()),
          (r = (tt.opt_len + 3 + 7) >>> 3),
          (_ = (tt.static_len + 3 + 7) >>> 3),
          _ <= r && (r = _))
        : (r = _ = t + 5),
        t + 4 <= r && e != -1
          ? se(e, t, i)
          : _ == r
            ? (x(($ << 1) + (i ? 1 : 0), 3), de(n.static_ltree, n.static_dtree))
            : (x((ee << 1) + (i ? 1 : 0), 3),
              re(nt.max_code + 1, at.max_code + 1, u + 1),
              de(Ze, $e)),
        a(),
        i && fe();
    }
    function he(e) {
      ce(Fe >= 0 ? Fe : -1, Ke - Fe, e), (Fe = Ke), me.flush_pending();
    }
    function pe() {
      var e, t, n, a;
      do {
        if (((a = De - Oe - Ke), 0 === a && 0 === Ke && 0 === Oe)) a = Ee;
        else if (a == -1) a--;
        else if (Ke >= Ee + Ee - ae) {
          qe.set(qe.subarray(Ee, Ee + Ee), 0),
            (Ne -= Ee),
            (Ke -= Ee),
            (Fe -= Ee),
            (e = Le),
            (n = e);
          do (t = 65535 & Pe[--n]), (Pe[n] = t >= Ee ? t - Ee : 0);
          while (0 !== --e);
          (e = Ee), (n = e);
          do (t = 65535 & Ie[--n]), (Ie[n] = t >= Ee ? t - Ee : 0);
          while (0 !== --e);
          a += Ee;
        }
        if (0 === me.avail_in) return;
        (e = me.read_buf(qe, Ke + Oe, a)),
          (Oe += e),
          Oe >= te &&
            ((Se = 255 & qe[Ke]),
            (Se = ((Se << Ce) ^ (255 & qe[Ke + 1])) & Be));
      } while (Oe < ae && 0 !== me.avail_in);
    }
    function xe(e) {
      var t,
        n = 65535;
      for (n > Me - 5 && (n = Me - 5); ; ) {
        if (Oe <= 1) {
          if ((pe(), 0 === Oe && e == U)) return N;
          if (0 === Oe) break;
        }
        if (
          ((Ke += Oe),
          (Oe = 0),
          (t = Fe + n),
          (0 === Ke || Ke >= t) &&
            ((Oe = Ke - t), (Ke = t), he(!1), 0 === me.avail_out))
        )
          return N;
        if (Ke - Fe >= Ee - ae && (he(!1), 0 === me.avail_out)) return N;
      }
      return he(e == z), 0 === me.avail_out ? (e == z ? Q : N) : e == z ? R : O;
    }
    function ve(e) {
      var t,
        n,
        a = Re,
        i = Ke,
        r = Qe,
        _ = Ke > Ee - ae ? Ke - (Ee - ae) : 0,
        o = Ye,
        u = ze,
        d = Ke + ne,
        f = qe[i + r - 1],
        l = qe[i + r];
      Qe >= Xe && (a >>= 2), o > Oe && (o = Oe);
      do
        if (
          ((t = e),
          qe[t + r] == l &&
            qe[t + r - 1] == f &&
            qe[t] == qe[i] &&
            qe[++t] == qe[i + 1])
        ) {
          (i += 2), t++;
          do;
          while (
            qe[++i] == qe[++t] &&
            qe[++i] == qe[++t] &&
            qe[++i] == qe[++t] &&
            qe[++i] == qe[++t] &&
            qe[++i] == qe[++t] &&
            qe[++i] == qe[++t] &&
            qe[++i] == qe[++t] &&
            qe[++i] == qe[++t] &&
            i < d
          );
          if (((n = ne - (d - i)), (i = d - ne), n > r)) {
            if (((Ne = e), (r = n), n >= o)) break;
            (f = qe[i + r - 1]), (l = qe[i + r]);
          }
        }
      while ((e = 65535 & Ie[e & u]) > _ && 0 !== --a);
      return r <= Oe ? r : Oe;
    }
    function be(e) {
      for (var t, n = 0; ; ) {
        if (Oe < ae) {
          if ((pe(), Oe < ae && e == U)) return N;
          if (0 === Oe) break;
        }
        if (
          (Oe >= te &&
            ((Se = ((Se << Ce) ^ (255 & qe[Ke + (te - 1)])) & Be),
            (n = 65535 & Pe[Se]),
            (Ie[Ke & ze] = Pe[Se]),
            (Pe[Se] = Ke)),
          0 !== n && ((Ke - n) & 65535) <= Ee - ae && We != M && (Ge = ve(n)),
          Ge >= te)
        )
          if (((t = ue(Ke - Ne, Ge - te)), (Oe -= Ge), Ge <= Te && Oe >= te)) {
            Ge--;
            do
              Ke++,
                (Se = ((Se << Ce) ^ (255 & qe[Ke + (te - 1)])) & Be),
                (n = 65535 & Pe[Se]),
                (Ie[Ke & ze] = Pe[Se]),
                (Pe[Se] = Ke);
            while (0 !== --Ge);
            Ke++;
          } else
            (Ke += Ge),
              (Ge = 0),
              (Se = 255 & qe[Ke]),
              (Se = ((Se << Ce) ^ (255 & qe[Ke + 1])) & Be);
        else (t = ue(0, 255 & qe[Ke])), Oe--, Ke++;
        if (t && (he(!1), 0 === me.avail_out)) return N;
      }
      return he(e == z), 0 === me.avail_out ? (e == z ? Q : N) : e == z ? R : O;
    }
    function ge(e) {
      for (var t, n, a = 0; ; ) {
        if (Oe < ae) {
          if ((pe(), Oe < ae && e == U)) return N;
          if (0 === Oe) break;
        }
        if (
          (Oe >= te &&
            ((Se = ((Se << Ce) ^ (255 & qe[Ke + (te - 1)])) & Be),
            (a = 65535 & Pe[Se]),
            (Ie[Ke & ze] = Pe[Se]),
            (Pe[Se] = Ke)),
          (Qe = Ge),
          (He = Ne),
          (Ge = te - 1),
          0 !== a &&
            Qe < Te &&
            ((Ke - a) & 65535) <= Ee - ae &&
            (We != M && (Ge = ve(a)),
            Ge <= 5 &&
              (We == y || (Ge == te && Ke - Ne > 4096)) &&
              (Ge = te - 1)),
          Qe >= te && Ge <= Qe)
        ) {
          (n = Ke + Oe - te),
            (t = ue(Ke - 1 - He, Qe - te)),
            (Oe -= Qe - 1),
            (Qe -= 2);
          do
            ++Ke <= n &&
              ((Se = ((Se << Ce) ^ (255 & qe[Ke + (te - 1)])) & Be),
              (a = 65535 & Pe[Se]),
              (Ie[Ke & ze] = Pe[Se]),
              (Pe[Se] = Ke));
          while (0 !== --Qe);
          if (
            ((Je = 0), (Ge = te - 1), Ke++, t && (he(!1), 0 === me.avail_out))
          )
            return N;
        } else if (0 !== Je) {
          if (
            ((t = ue(0, 255 & qe[Ke - 1])),
            t && he(!1),
            Ke++,
            Oe--,
            0 === me.avail_out)
          )
            return N;
        } else (Je = 1), Ke++, Oe--;
      }
      return (
        0 !== Je && ((t = ue(0, 255 & qe[Ke - 1])), (Je = 0)),
        he(e == z),
        0 === me.avail_out ? (e == z ? Q : N) : e == z ? R : O
      );
    }
    function we(t) {
      return (
        (t.total_in = t.total_out = 0),
        (t.msg = null),
        (tt.pending = 0),
        (tt.pending_out = 0),
        (ye = W),
        (Ue = U),
        r(),
        e(),
        q
      );
    }
    var me,
      ye,
      Me,
      Ae,
      Ue,
      Ee,
      ke,
      ze,
      qe,
      De,
      Ie,
      Pe,
      Se,
      Le,
      je,
      Be,
      Ce,
      Fe,
      Ge,
      He,
      Je,
      Ke,
      Ne,
      Oe,
      Qe,
      Re,
      Te,
      Ve,
      We,
      Xe,
      Ye,
      Ze,
      $e,
      et,
      tt = this,
      nt = new t(),
      at = new t(),
      it = new t();
    tt.depth = [];
    var rt, _t, ot, ut, dt, ft, lt, st;
    (tt.bl_count = []),
      (tt.heap = []),
      (Ze = []),
      ($e = []),
      (et = []),
      (tt.pqdownheap = function(e, t) {
        for (
          var n = tt.heap, a = n[t], r = t << 1;
          r <= tt.heap_len &&
          (r < tt.heap_len && i(e, n[r + 1], n[r], tt.depth) && r++,
          !i(e, a, n[r], tt.depth));

        )
          (n[t] = n[r]), (t = r), (r <<= 1);
        n[t] = a;
      }),
      (tt.deflateInit = function(e, t, n, a, i, r) {
        return (
          a || (a = Y),
          i || (i = C),
          r || (r = A),
          (e.msg = null),
          t == m && (t = 6),
          i < 1 ||
          i > B ||
          a != Y ||
          n < 9 ||
          n > 15 ||
          t < 0 ||
          t > 9 ||
          r < 0 ||
          r > M
            ? P
            : ((e.dstate = tt),
              (ke = n),
              (Ee = 1 << ke),
              (ze = Ee - 1),
              (je = i + 7),
              (Le = 1 << je),
              (Be = Le - 1),
              (Ce = Math.floor((je + te - 1) / te)),
              (qe = new Uint8Array(2 * Ee)),
              (Ie = []),
              (Pe = []),
              (_t = 1 << (i + 6)),
              (tt.pending_buf = new Uint8Array(4 * _t)),
              (Me = 4 * _t),
              (ut = Math.floor(_t / 2)),
              (rt = 3 * _t),
              (Ve = t),
              (We = r),
              (Ae = 255 & a),
              we(e))
        );
      }),
      (tt.deflateEnd = function() {
        return ye != V && ye != W && ye != X
          ? P
          : ((tt.pending_buf = null),
            (Pe = null),
            (Ie = null),
            (qe = null),
            (tt.dstate = null),
            ye == W ? S : q);
      }),
      (tt.deflateParams = function(e, t, n) {
        var a = q;
        return (
          t == m && (t = 6),
          t < 0 || t > 9 || n < 0 || n > M
            ? P
            : (J[Ve].func != J[t].func &&
                0 !== e.total_in &&
                (a = e.deflate(E)),
              Ve != t &&
                ((Ve = t),
                (Te = J[Ve].max_lazy),
                (Xe = J[Ve].good_length),
                (Ye = J[Ve].nice_length),
                (Re = J[Ve].max_chain)),
              (We = n),
              a)
        );
      }),
      (tt.deflateSetDictionary = function(e, t, n) {
        var a,
          i = n,
          r = 0;
        if (!t || ye != V) return P;
        if (i < te) return q;
        for (
          i > Ee - ae && ((i = Ee - ae), (r = n - i)),
            qe.set(t.subarray(r, r + i), 0),
            Ke = i,
            Fe = i,
            Se = 255 & qe[0],
            Se = ((Se << Ce) ^ (255 & qe[1])) & Be,
            a = 0;
          a <= i - te;
          a++
        )
          (Se = ((Se << Ce) ^ (255 & qe[a + (te - 1)])) & Be),
            (Ie[a & ze] = Pe[Se]),
            (Pe[Se] = a);
        return q;
      }),
      (tt.deflate = function(e, t) {
        var n, a, i, r, _;
        if (t > z || t < 0) return P;
        if (
          !e.next_out ||
          (!e.next_in && 0 !== e.avail_in) ||
          (ye == X && t != z)
        )
          return (e.msg = K[I - P]), P;
        if (0 === e.avail_out) return (e.msg = K[I - L]), L;
        if (
          ((me = e),
          (r = Ue),
          (Ue = t),
          ye == V &&
            ((a = (Y + ((ke - 8) << 4)) << 8),
            (i = ((Ve - 1) & 255) >> 1),
            i > 3 && (i = 3),
            (a |= i << 6),
            0 !== Ke && (a |= T),
            (a += 31 - a % 31),
            (ye = W),
            h(a)),
          0 !== tt.pending)
        ) {
          if ((me.flush_pending(), 0 === me.avail_out)) return (Ue = -1), q;
        } else if (0 === me.avail_in && t <= r && t != z)
          return (me.msg = K[I - L]), L;
        if (ye == X && 0 !== me.avail_in) return (e.msg = K[I - L]), L;
        if (0 !== me.avail_in || 0 !== Oe || (t != U && ye != X)) {
          switch (((_ = -1), J[Ve].func)) {
            case F:
              _ = xe(t);
              break;
            case G:
              _ = be(t);
              break;
            case H:
              _ = ge(t);
          }
          if (((_ != Q && _ != R) || (ye = X), _ == N || _ == Q))
            return 0 === me.avail_out && (Ue = -1), q;
          if (_ == O) {
            if (t == E) oe();
            else if ((se(0, 0, !1), t == k)) for (n = 0; n < Le; n++) Pe[n] = 0;
            if ((me.flush_pending(), 0 === me.avail_out)) return (Ue = -1), q;
          }
        }
        return t != z ? q : D;
      });
  }
  function _() {
    var e = this;
    (e.next_in_index = 0),
      (e.next_out_index = 0),
      (e.avail_in = 0),
      (e.total_in = 0),
      (e.avail_out = 0),
      (e.total_out = 0);
  }
  function o(e) {
    var t = this,
      n = new _(),
      a = 512,
      i = U,
      r = new Uint8Array(a);
    "undefined" == typeof e && (e = m),
      n.deflateInit(e),
      (n.next_out = r),
      (t.append = function(e, t) {
        var _,
          o,
          u = [],
          d = 0,
          f = 0,
          l = 0;
        if (e.length) {
          (n.next_in_index = 0), (n.next_in = e), (n.avail_in = e.length);
          do {
            if (
              ((n.next_out_index = 0),
              (n.avail_out = a),
              (_ = n.deflate(i)),
              _ != q)
            )
              throw "deflating: " + n.msg;
            n.next_out_index &&
              (n.next_out_index == a
                ? u.push(new Uint8Array(r))
                : u.push(new Uint8Array(r.subarray(0, n.next_out_index)))),
              (l += n.next_out_index),
              t &&
                n.next_in_index > 0 &&
                n.next_in_index != d &&
                (t(n.next_in_index), (d = n.next_in_index));
          } while (n.avail_in > 0 || 0 === n.avail_out);
          return (
            (o = new Uint8Array(l)),
            u.forEach(function(e) {
              o.set(e, f), (f += e.length);
            }),
            o
          );
        }
      }),
      (t.flush = function() {
        var e,
          t,
          i = [],
          _ = 0,
          o = 0;
        do {
          if (
            ((n.next_out_index = 0),
            (n.avail_out = a),
            (e = n.deflate(z)),
            e != D && e != q)
          )
            throw "deflating: " + n.msg;
          a - n.avail_out > 0 &&
            i.push(new Uint8Array(r.subarray(0, n.next_out_index))),
            (o += n.next_out_index);
        } while (n.avail_in > 0 || 0 === n.avail_out);
        return (
          n.deflateEnd(),
          (t = new Uint8Array(o)),
          i.forEach(function(e) {
            t.set(e, _), (_ += e.length);
          }),
          t
        );
      });
  }
  var u = 15,
    d = 30,
    f = 19,
    l = 29,
    s = 256,
    c = s + 1 + l,
    h = 2 * c + 1,
    p = 256,
    x = 7,
    v = 16,
    b = 17,
    g = 18,
    w = 16,
    m = -1,
    y = 1,
    M = 2,
    A = 0,
    U = 0,
    E = 1,
    k = 3,
    z = 4,
    q = 0,
    D = 1,
    I = 2,
    P = -2,
    S = -3,
    L = -5,
    j = [
      0,
      1,
      2,
      3,
      4,
      4,
      5,
      5,
      6,
      6,
      6,
      6,
      7,
      7,
      7,
      7,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      8,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      9,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      10,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      11,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      12,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      13,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      14,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      15,
      0,
      0,
      16,
      17,
      18,
      18,
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
      22,
      22,
      22,
      22,
      22,
      22,
      22,
      22,
      23,
      23,
      23,
      23,
      23,
      23,
      23,
      23,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      24,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      25,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      26,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      27,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      28,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29,
      29
    ];
  (t._length_code = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    12,
    12,
    13,
    13,
    13,
    13,
    14,
    14,
    14,
    14,
    15,
    15,
    15,
    15,
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
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    25,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    26,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    27,
    28
  ]),
    (t.base_length = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      10,
      12,
      14,
      16,
      20,
      24,
      28,
      32,
      40,
      48,
      56,
      64,
      80,
      96,
      112,
      128,
      160,
      192,
      224,
      0
    ]),
    (t.base_dist = [
      0,
      1,
      2,
      3,
      4,
      6,
      8,
      12,
      16,
      24,
      32,
      48,
      64,
      96,
      128,
      192,
      256,
      384,
      512,
      768,
      1024,
      1536,
      2048,
      3072,
      4096,
      6144,
      8192,
      12288,
      16384,
      24576
    ]),
    (t.d_code = function(e) {
      return e < 256 ? j[e] : j[256 + (e >>> 7)];
    }),
    (t.extra_lbits = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      5,
      5,
      5,
      5,
      0
    ]),
    (t.extra_dbits = [
      0,
      0,
      0,
      0,
      1,
      1,
      2,
      2,
      3,
      3,
      4,
      4,
      5,
      5,
      6,
      6,
      7,
      7,
      8,
      8,
      9,
      9,
      10,
      10,
      11,
      11,
      12,
      12,
      13,
      13
    ]),
    (t.extra_blbits = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      3,
      7
    ]),
    (t.bl_order = [
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
    ]),
    (n.static_ltree = [
      12,
      8,
      140,
      8,
      76,
      8,
      204,
      8,
      44,
      8,
      172,
      8,
      108,
      8,
      236,
      8,
      28,
      8,
      156,
      8,
      92,
      8,
      220,
      8,
      60,
      8,
      188,
      8,
      124,
      8,
      252,
      8,
      2,
      8,
      130,
      8,
      66,
      8,
      194,
      8,
      34,
      8,
      162,
      8,
      98,
      8,
      226,
      8,
      18,
      8,
      146,
      8,
      82,
      8,
      210,
      8,
      50,
      8,
      178,
      8,
      114,
      8,
      242,
      8,
      10,
      8,
      138,
      8,
      74,
      8,
      202,
      8,
      42,
      8,
      170,
      8,
      106,
      8,
      234,
      8,
      26,
      8,
      154,
      8,
      90,
      8,
      218,
      8,
      58,
      8,
      186,
      8,
      122,
      8,
      250,
      8,
      6,
      8,
      134,
      8,
      70,
      8,
      198,
      8,
      38,
      8,
      166,
      8,
      102,
      8,
      230,
      8,
      22,
      8,
      150,
      8,
      86,
      8,
      214,
      8,
      54,
      8,
      182,
      8,
      118,
      8,
      246,
      8,
      14,
      8,
      142,
      8,
      78,
      8,
      206,
      8,
      46,
      8,
      174,
      8,
      110,
      8,
      238,
      8,
      30,
      8,
      158,
      8,
      94,
      8,
      222,
      8,
      62,
      8,
      190,
      8,
      126,
      8,
      254,
      8,
      1,
      8,
      129,
      8,
      65,
      8,
      193,
      8,
      33,
      8,
      161,
      8,
      97,
      8,
      225,
      8,
      17,
      8,
      145,
      8,
      81,
      8,
      209,
      8,
      49,
      8,
      177,
      8,
      113,
      8,
      241,
      8,
      9,
      8,
      137,
      8,
      73,
      8,
      201,
      8,
      41,
      8,
      169,
      8,
      105,
      8,
      233,
      8,
      25,
      8,
      153,
      8,
      89,
      8,
      217,
      8,
      57,
      8,
      185,
      8,
      121,
      8,
      249,
      8,
      5,
      8,
      133,
      8,
      69,
      8,
      197,
      8,
      37,
      8,
      165,
      8,
      101,
      8,
      229,
      8,
      21,
      8,
      149,
      8,
      85,
      8,
      213,
      8,
      53,
      8,
      181,
      8,
      117,
      8,
      245,
      8,
      13,
      8,
      141,
      8,
      77,
      8,
      205,
      8,
      45,
      8,
      173,
      8,
      109,
      8,
      237,
      8,
      29,
      8,
      157,
      8,
      93,
      8,
      221,
      8,
      61,
      8,
      189,
      8,
      125,
      8,
      253,
      8,
      19,
      9,
      275,
      9,
      147,
      9,
      403,
      9,
      83,
      9,
      339,
      9,
      211,
      9,
      467,
      9,
      51,
      9,
      307,
      9,
      179,
      9,
      435,
      9,
      115,
      9,
      371,
      9,
      243,
      9,
      499,
      9,
      11,
      9,
      267,
      9,
      139,
      9,
      395,
      9,
      75,
      9,
      331,
      9,
      203,
      9,
      459,
      9,
      43,
      9,
      299,
      9,
      171,
      9,
      427,
      9,
      107,
      9,
      363,
      9,
      235,
      9,
      491,
      9,
      27,
      9,
      283,
      9,
      155,
      9,
      411,
      9,
      91,
      9,
      347,
      9,
      219,
      9,
      475,
      9,
      59,
      9,
      315,
      9,
      187,
      9,
      443,
      9,
      123,
      9,
      379,
      9,
      251,
      9,
      507,
      9,
      7,
      9,
      263,
      9,
      135,
      9,
      391,
      9,
      71,
      9,
      327,
      9,
      199,
      9,
      455,
      9,
      39,
      9,
      295,
      9,
      167,
      9,
      423,
      9,
      103,
      9,
      359,
      9,
      231,
      9,
      487,
      9,
      23,
      9,
      279,
      9,
      151,
      9,
      407,
      9,
      87,
      9,
      343,
      9,
      215,
      9,
      471,
      9,
      55,
      9,
      311,
      9,
      183,
      9,
      439,
      9,
      119,
      9,
      375,
      9,
      247,
      9,
      503,
      9,
      15,
      9,
      271,
      9,
      143,
      9,
      399,
      9,
      79,
      9,
      335,
      9,
      207,
      9,
      463,
      9,
      47,
      9,
      303,
      9,
      175,
      9,
      431,
      9,
      111,
      9,
      367,
      9,
      239,
      9,
      495,
      9,
      31,
      9,
      287,
      9,
      159,
      9,
      415,
      9,
      95,
      9,
      351,
      9,
      223,
      9,
      479,
      9,
      63,
      9,
      319,
      9,
      191,
      9,
      447,
      9,
      127,
      9,
      383,
      9,
      255,
      9,
      511,
      9,
      0,
      7,
      64,
      7,
      32,
      7,
      96,
      7,
      16,
      7,
      80,
      7,
      48,
      7,
      112,
      7,
      8,
      7,
      72,
      7,
      40,
      7,
      104,
      7,
      24,
      7,
      88,
      7,
      56,
      7,
      120,
      7,
      4,
      7,
      68,
      7,
      36,
      7,
      100,
      7,
      20,
      7,
      84,
      7,
      52,
      7,
      116,
      7,
      3,
      8,
      131,
      8,
      67,
      8,
      195,
      8,
      35,
      8,
      163,
      8,
      99,
      8,
      227,
      8
    ]),
    (n.static_dtree = [
      0,
      5,
      16,
      5,
      8,
      5,
      24,
      5,
      4,
      5,
      20,
      5,
      12,
      5,
      28,
      5,
      2,
      5,
      18,
      5,
      10,
      5,
      26,
      5,
      6,
      5,
      22,
      5,
      14,
      5,
      30,
      5,
      1,
      5,
      17,
      5,
      9,
      5,
      25,
      5,
      5,
      5,
      21,
      5,
      13,
      5,
      29,
      5,
      3,
      5,
      19,
      5,
      11,
      5,
      27,
      5,
      7,
      5,
      23,
      5
    ]),
    (n.static_l_desc = new n(n.static_ltree, t.extra_lbits, s + 1, c, u)),
    (n.static_d_desc = new n(n.static_dtree, t.extra_dbits, 0, d, u)),
    (n.static_bl_desc = new n(null, t.extra_blbits, 0, f, x));
  var B = 9,
    C = 8,
    F = 0,
    G = 1,
    H = 2,
    J = [
      new a(0, 0, 0, 0, F),
      new a(4, 4, 8, 4, G),
      new a(4, 5, 16, 8, G),
      new a(4, 6, 32, 32, G),
      new a(4, 4, 16, 16, H),
      new a(8, 16, 32, 32, H),
      new a(8, 16, 128, 128, H),
      new a(8, 32, 128, 256, H),
      new a(32, 128, 258, 1024, H),
      new a(32, 258, 258, 4096, H)
    ],
    K = [
      "need dictionary",
      "stream end",
      "",
      "",
      "stream error",
      "data error",
      "",
      "buffer error",
      "",
      ""
    ],
    N = 0,
    O = 1,
    Q = 2,
    R = 3,
    T = 32,
    V = 42,
    W = 113,
    X = 666,
    Y = 8,
    Z = 0,
    $ = 1,
    ee = 2,
    te = 3,
    ne = 258,
    ae = ne + te + 1;
  _.prototype = {
    deflateInit: function(e, t) {
      var n = this;
      return (n.dstate = new r()), t || (t = u), n.dstate.deflateInit(n, e, t);
    },
    deflate: function(e) {
      var t = this;
      return t.dstate ? t.dstate.deflate(t, e) : P;
    },
    deflateEnd: function() {
      var e = this;
      if (!e.dstate) return P;
      var t = e.dstate.deflateEnd();
      return (e.dstate = null), t;
    },
    deflateParams: function(e, t) {
      var n = this;
      return n.dstate ? n.dstate.deflateParams(n, e, t) : P;
    },
    deflateSetDictionary: function(e, t) {
      var n = this;
      return n.dstate ? n.dstate.deflateSetDictionary(n, e, t) : P;
    },
    read_buf: function(e, t, n) {
      var a = this,
        i = a.avail_in;
      return (
        i > n && (i = n),
        0 === i
          ? 0
          : ((a.avail_in -= i),
            e.set(a.next_in.subarray(a.next_in_index, a.next_in_index + i), t),
            (a.next_in_index += i),
            (a.total_in += i),
            i)
      );
    },
    flush_pending: function() {
      var e = this,
        t = e.dstate.pending;
      t > e.avail_out && (t = e.avail_out),
        0 !== t &&
          (e.next_out.set(
            e.dstate.pending_buf.subarray(
              e.dstate.pending_out,
              e.dstate.pending_out + t
            ),
            e.next_out_index
          ),
          (e.next_out_index += t),
          (e.dstate.pending_out += t),
          (e.total_out += t),
          (e.avail_out -= t),
          (e.dstate.pending -= t),
          0 === e.dstate.pending && (e.dstate.pending_out = 0));
    }
  };
  var ie;
  e.zip
    ? (e.zip.Deflater = o)
    : ((ie = new o()),
      e.addEventListener(
        "message",
        function(t) {
          var n = t.data;
          n.init && ((ie = new o(n.level)), e.postMessage({ oninit: !0 })),
            n.append &&
              e.postMessage({
                onappend: !0,
                data: ie.append(n.data, function(t) {
                  e.postMessage({ progress: !0, current: t });
                })
              }),
            n.flush && e.postMessage({ onflush: !0, data: ie.flush() });
        },
        !1
      ));
})(this);
