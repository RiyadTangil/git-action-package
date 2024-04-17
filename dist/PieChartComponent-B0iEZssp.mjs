import { dz as Zn, I as ce, P as H, j as Pe } from "./index-BrmRL7Ll.mjs";
import _, { isValidElement as it, Children as Kt, PureComponent as wt, forwardRef as zv, useRef as yi, useImperativeHandle as Hv, useState as Du, useCallback as Kv, useEffect as Ru, useMemo as Ud, cloneElement as xe, createElement as Wd, createContext as Jt, useContext as oa, Component as Gv } from "react";
import { i as He } from "./tiny-invariant-CkX21PdW.mjs";
function qd(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (r = qd(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function he() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)
    (e = arguments[r]) && (t = qd(e)) && (n && (n += " "), n += t);
  return n;
}
var Xv = Array.isArray, je = Xv, Vv = typeof Zn == "object" && Zn && Zn.Object === Object && Zn, zd = Vv, Yv = zd, Zv = typeof self == "object" && self && self.Object === Object && self, Jv = Yv || Zv || Function("return this")(), st = Jv, Qv = st, ey = Qv.Symbol, Un = ey, qc = Un, Hd = Object.prototype, ty = Hd.hasOwnProperty, ry = Hd.toString, Fr = qc ? qc.toStringTag : void 0;
function ny(e) {
  var t = ty.call(e, Fr), r = e[Fr];
  try {
    e[Fr] = void 0;
    var n = !0;
  } catch {
  }
  var i = ry.call(e);
  return n && (t ? e[Fr] = r : delete e[Fr]), i;
}
var iy = ny, ay = Object.prototype, oy = ay.toString;
function uy(e) {
  return oy.call(e);
}
var cy = uy, zc = Un, sy = iy, ly = cy, fy = "[object Null]", dy = "[object Undefined]", Hc = zc ? zc.toStringTag : void 0;
function py(e) {
  return e == null ? e === void 0 ? dy : fy : Hc && Hc in Object(e) ? sy(e) : ly(e);
}
var Ot = py;
function hy(e) {
  return e != null && typeof e == "object";
}
var St = hy, vy = Ot, yy = St, gy = "[object Symbol]";
function my(e) {
  return typeof e == "symbol" || yy(e) && vy(e) == gy;
}
var Tr = my, by = je, xy = Tr, wy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Oy = /^\w*$/;
function Sy(e, t) {
  if (by(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || xy(e) ? !0 : Oy.test(e) || !wy.test(e) || t != null && e in Object(t);
}
var Lu = Sy;
function Ay(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Et = Ay;
const Er = /* @__PURE__ */ ce(Et);
var _y = Ot, $y = Et, Py = "[object AsyncFunction]", Ty = "[object Function]", Ey = "[object GeneratorFunction]", My = "[object Proxy]";
function jy(e) {
  if (!$y(e))
    return !1;
  var t = _y(e);
  return t == Ty || t == Ey || t == Py || t == My;
}
var Bu = jy;
const Z = /* @__PURE__ */ ce(Bu);
var Iy = st, Cy = Iy["__core-js_shared__"], ky = Cy, Wa = ky, Kc = function() {
  var e = /[^.]+$/.exec(Wa && Wa.keys && Wa.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ny(e) {
  return !!Kc && Kc in e;
}
var Dy = Ny, Ry = Function.prototype, Ly = Ry.toString;
function By(e) {
  if (e != null) {
    try {
      return Ly.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Kd = By, Fy = Bu, Uy = Dy, Wy = Et, qy = Kd, zy = /[\\^$.*+?()[\]{}|]/g, Hy = /^\[object .+?Constructor\]$/, Ky = Function.prototype, Gy = Object.prototype, Xy = Ky.toString, Vy = Gy.hasOwnProperty, Yy = RegExp(
  "^" + Xy.call(Vy).replace(zy, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Zy(e) {
  if (!Wy(e) || Uy(e))
    return !1;
  var t = Fy(e) ? Yy : Hy;
  return t.test(qy(e));
}
var Jy = Zy;
function Qy(e, t) {
  return e == null ? void 0 : e[t];
}
var eg = Qy, tg = Jy, rg = eg;
function ng(e, t) {
  var r = rg(e, t);
  return tg(r) ? r : void 0;
}
var Qt = ng, ig = Qt, ag = ig(Object, "create"), ua = ag, Gc = ua;
function og() {
  this.__data__ = Gc ? Gc(null) : {}, this.size = 0;
}
var ug = og;
function cg(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var sg = cg, lg = ua, fg = "__lodash_hash_undefined__", dg = Object.prototype, pg = dg.hasOwnProperty;
function hg(e) {
  var t = this.__data__;
  if (lg) {
    var r = t[e];
    return r === fg ? void 0 : r;
  }
  return pg.call(t, e) ? t[e] : void 0;
}
var vg = hg, yg = ua, gg = Object.prototype, mg = gg.hasOwnProperty;
function bg(e) {
  var t = this.__data__;
  return yg ? t[e] !== void 0 : mg.call(t, e);
}
var xg = bg, wg = ua, Og = "__lodash_hash_undefined__";
function Sg(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = wg && t === void 0 ? Og : t, this;
}
var Ag = Sg, _g = ug, $g = sg, Pg = vg, Tg = xg, Eg = Ag;
function Mr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Mr.prototype.clear = _g;
Mr.prototype.delete = $g;
Mr.prototype.get = Pg;
Mr.prototype.has = Tg;
Mr.prototype.set = Eg;
var Mg = Mr;
function jg() {
  this.__data__ = [], this.size = 0;
}
var Ig = jg;
function Cg(e, t) {
  return e === t || e !== e && t !== t;
}
var Fu = Cg, kg = Fu;
function Ng(e, t) {
  for (var r = e.length; r--; )
    if (kg(e[r][0], t))
      return r;
  return -1;
}
var ca = Ng, Dg = ca, Rg = Array.prototype, Lg = Rg.splice;
function Bg(e) {
  var t = this.__data__, r = Dg(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Lg.call(t, r, 1), --this.size, !0;
}
var Fg = Bg, Ug = ca;
function Wg(e) {
  var t = this.__data__, r = Ug(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var qg = Wg, zg = ca;
function Hg(e) {
  return zg(this.__data__, e) > -1;
}
var Kg = Hg, Gg = ca;
function Xg(e, t) {
  var r = this.__data__, n = Gg(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var Vg = Xg, Yg = Ig, Zg = Fg, Jg = qg, Qg = Kg, em = Vg;
function jr(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
jr.prototype.clear = Yg;
jr.prototype.delete = Zg;
jr.prototype.get = Jg;
jr.prototype.has = Qg;
jr.prototype.set = em;
var sa = jr, tm = Qt, rm = st, nm = tm(rm, "Map"), Uu = nm, Xc = Mg, im = sa, am = Uu;
function om() {
  this.size = 0, this.__data__ = {
    hash: new Xc(),
    map: new (am || im)(),
    string: new Xc()
  };
}
var um = om;
function cm(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var sm = cm, lm = sm;
function fm(e, t) {
  var r = e.__data__;
  return lm(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var la = fm, dm = la;
function pm(e) {
  var t = dm(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var hm = pm, vm = la;
function ym(e) {
  return vm(this, e).get(e);
}
var gm = ym, mm = la;
function bm(e) {
  return mm(this, e).has(e);
}
var xm = bm, wm = la;
function Om(e, t) {
  var r = wm(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Sm = Om, Am = um, _m = hm, $m = gm, Pm = xm, Tm = Sm;
function Ir(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
Ir.prototype.clear = Am;
Ir.prototype.delete = _m;
Ir.prototype.get = $m;
Ir.prototype.has = Pm;
Ir.prototype.set = Tm;
var Wu = Ir, Gd = Wu, Em = "Expected a function";
function qu(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Em);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var o = e.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (qu.Cache || Gd)(), r;
}
qu.Cache = Gd;
var Xd = qu;
const Mm = /* @__PURE__ */ ce(Xd);
var jm = Xd, Im = 500;
function Cm(e) {
  var t = jm(e, function(n) {
    return r.size === Im && r.clear(), n;
  }), r = t.cache;
  return t;
}
var km = Cm, Nm = km, Dm = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Rm = /\\(\\)?/g, Lm = Nm(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Dm, function(r, n, i, a) {
    t.push(i ? a.replace(Rm, "$1") : n || r);
  }), t;
}), Bm = Lm;
function Fm(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var zu = Fm, Vc = Un, Um = zu, Wm = je, qm = Tr, zm = 1 / 0, Yc = Vc ? Vc.prototype : void 0, Zc = Yc ? Yc.toString : void 0;
function Vd(e) {
  if (typeof e == "string")
    return e;
  if (Wm(e))
    return Um(e, Vd) + "";
  if (qm(e))
    return Zc ? Zc.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -zm ? "-0" : t;
}
var Hm = Vd, Km = Hm;
function Gm(e) {
  return e == null ? "" : Km(e);
}
var Yd = Gm, Xm = je, Vm = Lu, Ym = Bm, Zm = Yd;
function Jm(e, t) {
  return Xm(e) ? e : Vm(e, t) ? [e] : Ym(Zm(e));
}
var Zd = Jm, Qm = Tr, eb = 1 / 0;
function tb(e) {
  if (typeof e == "string" || Qm(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -eb ? "-0" : t;
}
var fa = tb, rb = Zd, nb = fa;
function ib(e, t) {
  t = rb(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[nb(t[r++])];
  return r && r == n ? e : void 0;
}
var Hu = ib, ab = Hu;
function ob(e, t, r) {
  var n = e == null ? void 0 : ab(e, t);
  return n === void 0 ? r : n;
}
var Jd = ob;
const Qe = /* @__PURE__ */ ce(Jd);
function ub(e) {
  return e == null;
}
var cb = ub;
const J = /* @__PURE__ */ ce(cb);
var sb = Ot, lb = je, fb = St, db = "[object String]";
function pb(e) {
  return typeof e == "string" || !lb(e) && fb(e) && sb(e) == db;
}
var hb = pb;
const Wn = /* @__PURE__ */ ce(hb);
var go = { exports: {} }, te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jc;
function vb() {
  if (Jc)
    return te;
  Jc = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, s = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
  function w(h) {
    if (typeof h == "object" && h !== null) {
      var O = h.$$typeof;
      switch (O) {
        case t:
          switch (h = h.type, h) {
            case c:
            case s:
            case n:
            case a:
            case i:
            case l:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case u:
                case f:
                case g:
                case p:
                case o:
                  return h;
                default:
                  return O;
              }
          }
        case r:
          return O;
      }
    }
  }
  function m(h) {
    return w(h) === s;
  }
  return te.AsyncMode = c, te.ConcurrentMode = s, te.ContextConsumer = u, te.ContextProvider = o, te.Element = t, te.ForwardRef = f, te.Fragment = n, te.Lazy = g, te.Memo = p, te.Portal = r, te.Profiler = a, te.StrictMode = i, te.Suspense = l, te.isAsyncMode = function(h) {
    return m(h) || w(h) === c;
  }, te.isConcurrentMode = m, te.isContextConsumer = function(h) {
    return w(h) === u;
  }, te.isContextProvider = function(h) {
    return w(h) === o;
  }, te.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === t;
  }, te.isForwardRef = function(h) {
    return w(h) === f;
  }, te.isFragment = function(h) {
    return w(h) === n;
  }, te.isLazy = function(h) {
    return w(h) === g;
  }, te.isMemo = function(h) {
    return w(h) === p;
  }, te.isPortal = function(h) {
    return w(h) === r;
  }, te.isProfiler = function(h) {
    return w(h) === a;
  }, te.isStrictMode = function(h) {
    return w(h) === i;
  }, te.isSuspense = function(h) {
    return w(h) === l;
  }, te.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === s || h === a || h === i || h === l || h === d || typeof h == "object" && h !== null && (h.$$typeof === g || h.$$typeof === p || h.$$typeof === o || h.$$typeof === u || h.$$typeof === f || h.$$typeof === v || h.$$typeof === x || h.$$typeof === b || h.$$typeof === y);
  }, te.typeOf = w, te;
}
var re = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qc;
function yb() {
  return Qc || (Qc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, s = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, l = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
    function w($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === n || $ === s || $ === a || $ === i || $ === l || $ === d || typeof $ == "object" && $ !== null && ($.$$typeof === g || $.$$typeof === p || $.$$typeof === o || $.$$typeof === u || $.$$typeof === f || $.$$typeof === v || $.$$typeof === x || $.$$typeof === b || $.$$typeof === y);
    }
    function m($) {
      if (typeof $ == "object" && $ !== null) {
        var se = $.$$typeof;
        switch (se) {
          case t:
            var G = $.type;
            switch (G) {
              case c:
              case s:
              case n:
              case a:
              case i:
              case l:
                return G;
              default:
                var ve = G && G.$$typeof;
                switch (ve) {
                  case u:
                  case f:
                  case g:
                  case p:
                  case o:
                    return ve;
                  default:
                    return se;
                }
            }
          case r:
            return se;
        }
      }
    }
    var h = c, O = s, S = u, A = o, M = t, E = f, T = n, P = g, C = p, j = r, N = a, k = i, D = l, R = !1;
    function F($) {
      return R || (R = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), V($) || m($) === c;
    }
    function V($) {
      return m($) === s;
    }
    function Y($) {
      return m($) === u;
    }
    function q($) {
      return m($) === o;
    }
    function ie($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function Ie($) {
      return m($) === f;
    }
    function Ce($) {
      return m($) === n;
    }
    function kt($) {
      return m($) === g;
    }
    function Ye($) {
      return m($) === p;
    }
    function Ee($) {
      return m($) === r;
    }
    function L($) {
      return m($) === a;
    }
    function z($) {
      return m($) === i;
    }
    function K($) {
      return m($) === l;
    }
    re.AsyncMode = h, re.ConcurrentMode = O, re.ContextConsumer = S, re.ContextProvider = A, re.Element = M, re.ForwardRef = E, re.Fragment = T, re.Lazy = P, re.Memo = C, re.Portal = j, re.Profiler = N, re.StrictMode = k, re.Suspense = D, re.isAsyncMode = F, re.isConcurrentMode = V, re.isContextConsumer = Y, re.isContextProvider = q, re.isElement = ie, re.isForwardRef = Ie, re.isFragment = Ce, re.isLazy = kt, re.isMemo = Ye, re.isPortal = Ee, re.isProfiler = L, re.isStrictMode = z, re.isSuspense = K, re.isValidElementType = w, re.typeOf = m;
  }()), re;
}
process.env.NODE_ENV === "production" ? go.exports = vb() : go.exports = yb();
var mo = go.exports, gb = Ot, mb = St, bb = "[object Number]";
function xb(e) {
  return typeof e == "number" || mb(e) && gb(e) == bb;
}
var Qd = xb;
const wb = /* @__PURE__ */ ce(Qd);
var Ob = Qd;
function Sb(e) {
  return Ob(e) && e != +e;
}
var Ab = Sb;
const qn = /* @__PURE__ */ ce(Ab);
var Ke = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, qt = function(t) {
  return Wn(t) && t.indexOf("%") === t.length - 1;
}, B = function(t) {
  return wb(t) && !qn(t);
}, we = function(t) {
  return B(t) || Wn(t);
}, _b = 0, da = function(t) {
  var r = ++_b;
  return "".concat(t || "").concat(r);
}, Le = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!B(t) && !Wn(t))
    return n;
  var a;
  if (qt(t)) {
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else
    a = +t;
  return qn(a) && (a = n), i && a > r && (a = r), a;
}, ir = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, $b = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, i = 0; i < r; i++)
    if (!n[t[i]])
      n[t[i]] = !0;
    else
      return !0;
  return !1;
}, es = function(t, r) {
  return B(t) && B(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function bo(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : Qe(n, t)) === r;
  });
}
function xo(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function wo(e) {
  "@babel/helpers - typeof";
  return wo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wo(e);
}
var Pb = ["viewBox", "children"], Tb = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], ts = ["points", "pathLength"], qa = {
  svg: Pb,
  polygon: ts,
  polyline: ts
}, Ku = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], gi = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ it(t) && (n = t.props), !Er(n))
    return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    Ku.includes(a) && (i[a] = r || function(o) {
      return n[a](n, o);
    });
  }), i;
}, Eb = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, pa = function(t, r, n) {
  if (!Er(t) || wo(t) !== "object")
    return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    Ku.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = Eb(o, r, n));
  }), i;
}, Mb = ["children"], jb = ["children"];
function rs(e, t) {
  if (e == null)
    return {};
  var r = Ib(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Ib(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var ns = {
  click: "onClick",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  mouseout: "onMouseOut",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  touchcancel: "onTouchCancel",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchstart: "onTouchStart"
}, vt = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, is = null, za = null, Gu = function e(t) {
  if (t === is && Array.isArray(za))
    return za;
  var r = [];
  return Kt.forEach(t, function(n) {
    J(n) || (mo.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), za = r, is = t, r;
};
function at(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return vt(i);
  }) : n = [vt(t)], Gu(e).forEach(function(i) {
    var a = Qe(i, "type.displayName") || Qe(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function We(e, t) {
  var r = at(e, t);
  return r && r[0];
}
var as = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, i = r.height;
  return !(!B(n) || n <= 0 || !B(i) || i <= 0);
}, Cb = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], kb = function(t) {
  return t && t.type && Wn(t.type) && Cb.indexOf(t.type) >= 0;
}, Nb = function(t, r, n, i) {
  var a, o = (a = qa == null ? void 0 : qa[i]) !== null && a !== void 0 ? a : [];
  return !Z(t) && (i && o.includes(r) || Tb.includes(r)) || n && Ku.includes(r);
}, X = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var i = t;
  if (/* @__PURE__ */ it(t) && (i = t.props), !Er(i))
    return null;
  var a = {};
  return Object.keys(i).forEach(function(o) {
    var u;
    Nb((u = i) === null || u === void 0 ? void 0 : u[o], o, r, n) && (a[o] = i[o]);
  }), a;
}, Oo = function e(t, r) {
  if (t === r)
    return !0;
  var n = Kt.count(t);
  if (n !== Kt.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return os(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], o = r[i];
    if (Array.isArray(a) || Array.isArray(o)) {
      if (!e(a, o))
        return !1;
    } else if (!os(a, o))
      return !1;
  }
  return !0;
}, os = function(t, r) {
  if (J(t) && J(r))
    return !0;
  if (!J(t) && !J(r)) {
    var n = t.props || {}, i = n.children, a = rs(n, Mb), o = r.props || {}, u = o.children, c = rs(o, jb);
    return i && u ? xo(a, c) && Oo(i, u) : !i && !u ? xo(a, c) : !1;
  }
  return !1;
}, us = function(t, r) {
  var n = [], i = {};
  return Gu(t).forEach(function(a, o) {
    if (kb(a))
      n.push(a);
    else if (a) {
      var u = vt(a.type), c = r[u] || {}, s = c.handler, f = c.once;
      if (s && (!f || !i[u])) {
        var l = s(a, u, o);
        n.push(l), i[u] = !0;
      }
    }
  }), n;
}, Db = function(t) {
  var r = t && t.type;
  return r && ns[r] ? ns[r] : null;
}, Rb = function(t, r) {
  return Gu(r).indexOf(t);
}, Lb = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function So() {
  return So = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, So.apply(this, arguments);
}
function Bb(e, t) {
  if (e == null)
    return {};
  var r = Fb(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function Fb(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Ao(e) {
  var t = e.children, r = e.width, n = e.height, i = e.viewBox, a = e.className, o = e.style, u = e.title, c = e.desc, s = Bb(e, Lb), f = i || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, l = he("recharts-surface", a);
  return /* @__PURE__ */ _.createElement("svg", So({}, X(s, !0, "svg"), {
    className: l,
    width: r,
    height: n,
    style: o,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height)
  }), /* @__PURE__ */ _.createElement("title", null, u), /* @__PURE__ */ _.createElement("desc", null, c), t);
}
var Ub = ["children", "className"];
function _o() {
  return _o = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, _o.apply(this, arguments);
}
function Wb(e, t) {
  if (e == null)
    return {};
  var r = qb(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function qb(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var ye = /* @__PURE__ */ _.forwardRef(function(e, t) {
  var r = e.children, n = e.className, i = Wb(e, Ub), a = he("recharts-layer", n);
  return /* @__PURE__ */ _.createElement("g", _o({
    className: a
  }, X(i, !0), {
    ref: t
  }), r);
}), zb = process.env.NODE_ENV !== "production", yt = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  if (zb && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, function() {
        return i[o++];
      }));
    }
};
function Hb(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++n < i; )
    a[n] = e[n + t];
  return a;
}
var Kb = Hb, Gb = Kb;
function Xb(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : Gb(e, t, r);
}
var Vb = Xb, Yb = "\\ud800-\\udfff", Zb = "\\u0300-\\u036f", Jb = "\\ufe20-\\ufe2f", Qb = "\\u20d0-\\u20ff", e0 = Zb + Jb + Qb, t0 = "\\ufe0e\\ufe0f", r0 = "\\u200d", n0 = RegExp("[" + r0 + Yb + e0 + t0 + "]");
function i0(e) {
  return n0.test(e);
}
var ep = i0;
function a0(e) {
  return e.split("");
}
var o0 = a0, tp = "\\ud800-\\udfff", u0 = "\\u0300-\\u036f", c0 = "\\ufe20-\\ufe2f", s0 = "\\u20d0-\\u20ff", l0 = u0 + c0 + s0, f0 = "\\ufe0e\\ufe0f", d0 = "[" + tp + "]", $o = "[" + l0 + "]", Po = "\\ud83c[\\udffb-\\udfff]", p0 = "(?:" + $o + "|" + Po + ")", rp = "[^" + tp + "]", np = "(?:\\ud83c[\\udde6-\\uddff]){2}", ip = "[\\ud800-\\udbff][\\udc00-\\udfff]", h0 = "\\u200d", ap = p0 + "?", op = "[" + f0 + "]?", v0 = "(?:" + h0 + "(?:" + [rp, np, ip].join("|") + ")" + op + ap + ")*", y0 = op + ap + v0, g0 = "(?:" + [rp + $o + "?", $o, np, ip, d0].join("|") + ")", m0 = RegExp(Po + "(?=" + Po + ")|" + g0 + y0, "g");
function b0(e) {
  return e.match(m0) || [];
}
var x0 = b0, w0 = o0, O0 = ep, S0 = x0;
function A0(e) {
  return O0(e) ? S0(e) : w0(e);
}
var _0 = A0, $0 = Vb, P0 = ep, T0 = _0, E0 = Yd;
function M0(e) {
  return function(t) {
    t = E0(t);
    var r = P0(t) ? T0(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? $0(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var j0 = M0, I0 = j0, C0 = I0("toUpperCase"), k0 = C0;
const ha = /* @__PURE__ */ ce(k0);
function oe(e) {
  return function() {
    return e;
  };
}
const up = Math.cos, mi = Math.sin, et = Math.sqrt, bi = Math.PI, va = 2 * bi, To = Math.PI, Eo = 2 * To, Bt = 1e-6, N0 = Eo - Bt;
function cp(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function D0(e) {
  let t = Math.floor(e);
  if (!(t >= 0))
    throw new Error(`invalid digits: ${e}`);
  if (t > 15)
    return cp;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class R0 {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? cp : D0(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0)
      throw new Error(`negative radius: ${a}`);
    let o = this._x1, u = this._y1, c = n - t, s = i - r, f = o - t, l = u - r, d = f * f + l * l;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > Bt)
      if (!(Math.abs(l * c - s * f) > Bt) || !a)
        this._append`L${this._x1 = t},${this._y1 = r}`;
      else {
        let p = n - o, g = i - u, y = c * c + s * s, v = p * p + g * g, x = Math.sqrt(y), b = Math.sqrt(d), w = a * Math.tan((To - Math.acos((y + d - v) / (2 * x * b))) / 2), m = w / b, h = w / x;
        Math.abs(m - 1) > Bt && this._append`L${t + m * f},${r + m * l}`, this._append`A${a},${a},0,0,${+(l * p > f * g)},${this._x1 = t + h * c},${this._y1 = r + h * s}`;
      }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0)
      throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i), c = n * Math.sin(i), s = t + u, f = r + c, l = 1 ^ o, d = o ? i - a : a - i;
    this._x1 === null ? this._append`M${s},${f}` : (Math.abs(this._x1 - s) > Bt || Math.abs(this._y1 - f) > Bt) && this._append`L${s},${f}`, n && (d < 0 && (d = d % Eo + Eo), d > N0 ? this._append`A${n},${n},0,1,${l},${t - u},${r - c}A${n},${n},0,1,${l},${this._x1 = s},${this._y1 = f}` : d > Bt && this._append`A${n},${n},0,${+(d >= To)},${l},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Xu(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length)
      return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0))
        throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new R0(t);
}
function Vu(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function sp(e) {
  this._context = e;
}
sp.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function ya(e) {
  return new sp(e);
}
function lp(e) {
  return e[0];
}
function fp(e) {
  return e[1];
}
function dp(e, t) {
  var r = oe(!0), n = null, i = ya, a = null, o = Xu(u);
  e = typeof e == "function" ? e : e === void 0 ? lp : oe(e), t = typeof t == "function" ? t : t === void 0 ? fp : oe(t);
  function u(c) {
    var s, f = (c = Vu(c)).length, l, d = !1, p;
    for (n == null && (a = i(p = o())), s = 0; s <= f; ++s)
      !(s < f && r(l = c[s], s, c)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e(l, s, c), +t(l, s, c));
    if (p)
      return a = null, p + "" || null;
  }
  return u.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : oe(+c), u) : e;
  }, u.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : oe(+c), u) : t;
  }, u.defined = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : oe(!!c), u) : r;
  }, u.curve = function(c) {
    return arguments.length ? (i = c, n != null && (a = i(n)), u) : i;
  }, u.context = function(c) {
    return arguments.length ? (c == null ? n = a = null : a = i(n = c), u) : n;
  }, u;
}
function Jn(e, t, r) {
  var n = null, i = oe(!0), a = null, o = ya, u = null, c = Xu(s);
  e = typeof e == "function" ? e : e === void 0 ? lp : oe(+e), t = typeof t == "function" ? t : oe(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? fp : oe(+r);
  function s(l) {
    var d, p, g, y = (l = Vu(l)).length, v, x = !1, b, w = new Array(y), m = new Array(y);
    for (a == null && (u = o(b = c())), d = 0; d <= y; ++d) {
      if (!(d < y && i(v = l[d], d, l)) === x)
        if (x = !x)
          p = d, u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), g = d - 1; g >= p; --g)
            u.point(w[g], m[g]);
          u.lineEnd(), u.areaEnd();
        }
      x && (w[d] = +e(v, d, l), m[d] = +t(v, d, l), u.point(n ? +n(v, d, l) : w[d], r ? +r(v, d, l) : m[d]));
    }
    if (b)
      return u = null, b + "" || null;
  }
  function f() {
    return dp().defined(i).curve(o).context(a);
  }
  return s.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : oe(+l), n = null, s) : e;
  }, s.x0 = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : oe(+l), s) : e;
  }, s.x1 = function(l) {
    return arguments.length ? (n = l == null ? null : typeof l == "function" ? l : oe(+l), s) : n;
  }, s.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : oe(+l), r = null, s) : t;
  }, s.y0 = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : oe(+l), s) : t;
  }, s.y1 = function(l) {
    return arguments.length ? (r = l == null ? null : typeof l == "function" ? l : oe(+l), s) : r;
  }, s.lineX0 = s.lineY0 = function() {
    return f().x(e).y(t);
  }, s.lineY1 = function() {
    return f().x(e).y(r);
  }, s.lineX1 = function() {
    return f().x(n).y(t);
  }, s.defined = function(l) {
    return arguments.length ? (i = typeof l == "function" ? l : oe(!!l), s) : i;
  }, s.curve = function(l) {
    return arguments.length ? (o = l, a != null && (u = o(a)), s) : o;
  }, s.context = function(l) {
    return arguments.length ? (l == null ? a = u = null : u = o(a = l), s) : a;
  }, s;
}
class pp {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function L0(e) {
  return new pp(e, !0);
}
function B0(e) {
  return new pp(e, !1);
}
const Yu = {
  draw(e, t) {
    const r = et(t / bi);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, va);
  }
}, F0 = {
  draw(e, t) {
    const r = et(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, hp = et(1 / 3), U0 = hp * 2, W0 = {
  draw(e, t) {
    const r = et(t / U0), n = r * hp;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, q0 = {
  draw(e, t) {
    const r = et(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, z0 = 0.8908130915292852, vp = mi(bi / 10) / mi(7 * bi / 10), H0 = mi(va / 10) * vp, K0 = -up(va / 10) * vp, G0 = {
  draw(e, t) {
    const r = et(t * z0), n = H0 * r, i = K0 * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const o = va * a / 5, u = up(o), c = mi(o);
      e.lineTo(c * r, -u * r), e.lineTo(u * n - c * i, c * n + u * i);
    }
    e.closePath();
  }
}, Ha = et(3), X0 = {
  draw(e, t) {
    const r = -et(t / (Ha * 3));
    e.moveTo(0, r * 2), e.lineTo(-Ha * r, -r), e.lineTo(Ha * r, -r), e.closePath();
  }
}, Be = -0.5, Fe = et(3) / 2, Mo = 1 / et(12), V0 = (Mo / 2 + 1) * 3, Y0 = {
  draw(e, t) {
    const r = et(t / V0), n = r / 2, i = r * Mo, a = n, o = r * Mo + r, u = -a, c = o;
    e.moveTo(n, i), e.lineTo(a, o), e.lineTo(u, c), e.lineTo(Be * n - Fe * i, Fe * n + Be * i), e.lineTo(Be * a - Fe * o, Fe * a + Be * o), e.lineTo(Be * u - Fe * c, Fe * u + Be * c), e.lineTo(Be * n + Fe * i, Be * i - Fe * n), e.lineTo(Be * a + Fe * o, Be * o - Fe * a), e.lineTo(Be * u + Fe * c, Be * c - Fe * u), e.closePath();
  }
};
function Z0(e, t) {
  let r = null, n = Xu(i);
  e = typeof e == "function" ? e : oe(e || Yu), t = typeof t == "function" ? t : oe(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a)
      return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : oe(a), i) : e;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : oe(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function xi() {
}
function wi(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function yp(e) {
  this._context = e;
}
yp.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        wi(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        wi(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function J0(e) {
  return new yp(e);
}
function gp(e) {
  this._context = e;
}
gp.prototype = {
  areaStart: xi,
  areaEnd: xi,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        wi(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function Q0(e) {
  return new gp(e);
}
function mp(e) {
  this._context = e;
}
mp.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        wi(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function ex(e) {
  return new mp(e);
}
function bp(e) {
  this._context = e;
}
bp.prototype = {
  areaStart: xi,
  areaEnd: xi,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function tx(e) {
  return new bp(e);
}
function cs(e) {
  return e < 0 ? -1 : 1;
}
function ss(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), o = (r - e._y1) / (i || n < 0 && -0), u = (a * i + o * n) / (n + i);
  return (cs(a) + cs(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0;
}
function ls(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Ka(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, o = e._y1, u = (a - n) / 3;
  e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function Oi(e) {
  this._context = e;
}
Oi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Ka(this, this._t0, ls(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Ka(this, ls(this, r = ss(this, e, t)), r);
          break;
        default:
          Ka(this, this._t0, r = ss(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function xp(e) {
  this._context = new wp(e);
}
(xp.prototype = Object.create(Oi.prototype)).point = function(e, t) {
  Oi.prototype.point.call(this, t, e);
};
function wp(e) {
  this._context = e;
}
wp.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  }
};
function rx(e) {
  return new Oi(e);
}
function nx(e) {
  return new xp(e);
}
function Op(e) {
  this._context = e;
}
Op.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = fs(e), i = fs(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function fs(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
    i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t)
    n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t)
    i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t)
    a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function ix(e) {
  return new Op(e);
}
function ga(e, t) {
  this._context = e, this._t = t;
}
ga.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function ax(e) {
  return new ga(e, 0.5);
}
function ox(e) {
  return new ga(e, 0);
}
function ux(e) {
  return new ga(e, 1);
}
function fr(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < u; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function jo(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; )
    r[t] = t;
  return r;
}
function cx(e, t) {
  return e[t];
}
function sx(e) {
  const t = [];
  return t.key = e, t;
}
function lx() {
  var e = oe([]), t = jo, r = fr, n = cx;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), sx), u, c = o.length, s = -1, f;
    for (const l of a)
      for (u = 0, ++s; u < c; ++u)
        (o[u][s] = [0, +n(l, o[u].key, s, a)]).data = l;
    for (u = 0, f = Vu(t(o)); u < c; ++u)
      o[f[u]].index = u;
    return r(o, f), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : oe(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : oe(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? jo : typeof a == "function" ? a : oe(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? fr, i) : r;
  }, i;
}
function fx(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r)
        o += e[r][i][1] || 0;
      if (o)
        for (r = 0; r < n; ++r)
          e[r][i][1] /= o;
    }
    fr(e, t);
  }
}
function dx(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o)
        u += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    fr(e, t);
  }
}
function px(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, c = 0, s = 0; u < o; ++u) {
        for (var f = e[t[u]], l = f[n][1] || 0, d = f[n - 1][1] || 0, p = (l - d) / 2, g = 0; g < u; ++g) {
          var y = e[t[g]], v = y[n][1] || 0, x = y[n - 1][1] || 0;
          p += v - x;
        }
        c += l, s += p * l;
      }
      i[n - 1][1] += i[n - 1][0] = r, c && (r -= s / c);
    }
    i[n - 1][1] += i[n - 1][0] = r, fr(e, t);
  }
}
function nn(e) {
  "@babel/helpers - typeof";
  return nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nn(e);
}
var hx = ["type", "size", "sizeType"];
function Io() {
  return Io = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Io.apply(this, arguments);
}
function ds(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ps(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ds(Object(r), !0).forEach(function(n) {
      vx(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ds(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vx(e, t, r) {
  return t = yx(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function yx(e) {
  var t = gx(e, "string");
  return nn(t) == "symbol" ? t : String(t);
}
function gx(e, t) {
  if (nn(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (nn(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function mx(e, t) {
  if (e == null)
    return {};
  var r = bx(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function bx(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Sp = {
  symbolCircle: Yu,
  symbolCross: F0,
  symbolDiamond: W0,
  symbolSquare: q0,
  symbolStar: G0,
  symbolTriangle: X0,
  symbolWye: Y0
}, xx = Math.PI / 180, wx = function(t) {
  var r = "symbol".concat(ha(t));
  return Sp[r] || Yu;
}, Ox = function(t, r, n) {
  if (r === "area")
    return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var i = 18 * xx;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, Sx = function(t, r) {
  Sp["symbol".concat(ha(t))] = r;
}, Zu = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, o = t.sizeType, u = o === void 0 ? "area" : o, c = mx(t, hx), s = ps(ps({}, c), {}, {
    type: n,
    size: a,
    sizeType: u
  }), f = function() {
    var v = wx(n), x = Z0().type(v).size(Ox(a, u, n));
    return x();
  }, l = s.className, d = s.cx, p = s.cy, g = X(s, !0);
  return d === +d && p === +p && a === +a ? /* @__PURE__ */ _.createElement("path", Io({}, g, {
    className: he("recharts-symbols", l),
    transform: "translate(".concat(d, ", ").concat(p, ")"),
    d: f()
  })) : null;
};
Zu.registerSymbol = Sx;
function dr(e) {
  "@babel/helpers - typeof";
  return dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, dr(e);
}
function Co() {
  return Co = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Co.apply(this, arguments);
}
function hs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ax(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hs(Object(r), !0).forEach(function(n) {
      an(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _x(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vs(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, _p(n.key), n);
  }
}
function $x(e, t, r) {
  return t && vs(e.prototype, t), r && vs(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Px(e, t, r) {
  return t = Si(t), Tx(e, Ap() ? Reflect.construct(t, r || [], Si(e).constructor) : t.apply(e, r));
}
function Tx(e, t) {
  if (t && (dr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ex(e);
}
function Ex(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ap() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ap = function() {
    return !!e;
  })();
}
function Si(e) {
  return Si = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Si(e);
}
function Mx(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ko(e, t);
}
function ko(e, t) {
  return ko = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, ko(e, t);
}
function an(e, t, r) {
  return t = _p(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _p(e) {
  var t = jx(e, "string");
  return dr(t) == "symbol" ? t : String(t);
}
function jx(e, t) {
  if (dr(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (dr(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ue = 32, Ju = /* @__PURE__ */ function(e) {
  Mx(t, e);
  function t() {
    return _x(this, t), Px(this, t, arguments);
  }
  return $x(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var i = this.props.inactiveColor, a = Ue / 2, o = Ue / 6, u = Ue / 3, c = n.inactive ? i : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ _.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: Ue,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ _.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: c,
            d: "M0,".concat(a, "h").concat(u, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * u, ",").concat(a, `
            H`).concat(Ue, "M").concat(2 * u, ",").concat(a, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(u, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ _.createElement("path", {
            stroke: "none",
            fill: c,
            d: "M0,".concat(Ue / 8, "h").concat(Ue, "v").concat(Ue * 3 / 4, "h").concat(-Ue, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ _.isValidElement(n.legendIcon)) {
          var s = Ax({}, n);
          return delete s.legendIcon, /* @__PURE__ */ _.cloneElement(n.legendIcon, s);
        }
        return /* @__PURE__ */ _.createElement(Zu, {
          fill: c,
          cx: a,
          cy: a,
          size: Ue,
          sizeType: "diameter",
          type: n.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var n = this, i = this.props, a = i.payload, o = i.iconSize, u = i.layout, c = i.formatter, s = i.inactiveColor, f = {
        x: 0,
        y: 0,
        width: Ue,
        height: Ue
      }, l = {
        display: u === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, d = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(p, g) {
        var y = p.formatter || c, v = he(an(an({
          "recharts-legend-item": !0
        }, "legend-item-".concat(g), !0), "inactive", p.inactive));
        if (p.type === "none")
          return null;
        var x = Z(p.value) ? null : p.value;
        yt(
          !Z(p.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var b = p.inactive ? s : p.color;
        return /* @__PURE__ */ _.createElement("li", Co({
          className: v,
          style: l,
          key: "legend-item-".concat(g)
        }, pa(n.props, p, g)), /* @__PURE__ */ _.createElement(Ao, {
          width: o,
          height: o,
          viewBox: f,
          style: d
        }, n.renderIcon(p)), /* @__PURE__ */ _.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: b
          }
        }, y ? y(x, p, g) : x));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.payload, a = n.layout, o = n.align;
      if (!i || !i.length)
        return null;
      var u = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? o : "left"
      };
      return /* @__PURE__ */ _.createElement("ul", {
        className: "recharts-default-legend",
        style: u
      }, this.renderItems());
    }
  }]), t;
}(wt);
an(Ju, "displayName", "Legend");
an(Ju, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var Ix = sa;
function Cx() {
  this.__data__ = new Ix(), this.size = 0;
}
var kx = Cx;
function Nx(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var Dx = Nx;
function Rx(e) {
  return this.__data__.get(e);
}
var Lx = Rx;
function Bx(e) {
  return this.__data__.has(e);
}
var Fx = Bx, Ux = sa, Wx = Uu, qx = Wu, zx = 200;
function Hx(e, t) {
  var r = this.__data__;
  if (r instanceof Ux) {
    var n = r.__data__;
    if (!Wx || n.length < zx - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new qx(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var Kx = Hx, Gx = sa, Xx = kx, Vx = Dx, Yx = Lx, Zx = Fx, Jx = Kx;
function Cr(e) {
  var t = this.__data__ = new Gx(e);
  this.size = t.size;
}
Cr.prototype.clear = Xx;
Cr.prototype.delete = Vx;
Cr.prototype.get = Yx;
Cr.prototype.has = Zx;
Cr.prototype.set = Jx;
var $p = Cr, Qx = "__lodash_hash_undefined__";
function e1(e) {
  return this.__data__.set(e, Qx), this;
}
var t1 = e1;
function r1(e) {
  return this.__data__.has(e);
}
var n1 = r1, i1 = Wu, a1 = t1, o1 = n1;
function Ai(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new i1(); ++t < r; )
    this.add(e[t]);
}
Ai.prototype.add = Ai.prototype.push = a1;
Ai.prototype.has = o1;
var Pp = Ai;
function u1(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var Tp = u1;
function c1(e, t) {
  return e.has(t);
}
var Ep = c1, s1 = Pp, l1 = Tp, f1 = Ep, d1 = 1, p1 = 2;
function h1(e, t, r, n, i, a) {
  var o = r & d1, u = e.length, c = t.length;
  if (u != c && !(o && c > u))
    return !1;
  var s = a.get(e), f = a.get(t);
  if (s && f)
    return s == t && f == e;
  var l = -1, d = !0, p = r & p1 ? new s1() : void 0;
  for (a.set(e, t), a.set(t, e); ++l < u; ) {
    var g = e[l], y = t[l];
    if (n)
      var v = o ? n(y, g, l, t, e, a) : n(g, y, l, e, t, a);
    if (v !== void 0) {
      if (v)
        continue;
      d = !1;
      break;
    }
    if (p) {
      if (!l1(t, function(x, b) {
        if (!f1(p, b) && (g === x || i(g, x, r, n, a)))
          return p.push(b);
      })) {
        d = !1;
        break;
      }
    } else if (!(g === y || i(g, y, r, n, a))) {
      d = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), d;
}
var Mp = h1, v1 = st, y1 = v1.Uint8Array, g1 = y1;
function m1(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var b1 = m1;
function x1(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Qu = x1, ys = Un, gs = g1, w1 = Fu, O1 = Mp, S1 = b1, A1 = Qu, _1 = 1, $1 = 2, P1 = "[object Boolean]", T1 = "[object Date]", E1 = "[object Error]", M1 = "[object Map]", j1 = "[object Number]", I1 = "[object RegExp]", C1 = "[object Set]", k1 = "[object String]", N1 = "[object Symbol]", D1 = "[object ArrayBuffer]", R1 = "[object DataView]", ms = ys ? ys.prototype : void 0, Ga = ms ? ms.valueOf : void 0;
function L1(e, t, r, n, i, a, o) {
  switch (r) {
    case R1:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case D1:
      return !(e.byteLength != t.byteLength || !a(new gs(e), new gs(t)));
    case P1:
    case T1:
    case j1:
      return w1(+e, +t);
    case E1:
      return e.name == t.name && e.message == t.message;
    case I1:
    case k1:
      return e == t + "";
    case M1:
      var u = S1;
    case C1:
      var c = n & _1;
      if (u || (u = A1), e.size != t.size && !c)
        return !1;
      var s = o.get(e);
      if (s)
        return s == t;
      n |= $1, o.set(e, t);
      var f = O1(u(e), u(t), n, i, a, o);
      return o.delete(e), f;
    case N1:
      if (Ga)
        return Ga.call(e) == Ga.call(t);
  }
  return !1;
}
var B1 = L1;
function F1(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var jp = F1, U1 = jp, W1 = je;
function q1(e, t, r) {
  var n = t(e);
  return W1(e) ? n : U1(n, r(e));
}
var z1 = q1;
function H1(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (a[i++] = o);
  }
  return a;
}
var K1 = H1;
function G1() {
  return [];
}
var X1 = G1, V1 = K1, Y1 = X1, Z1 = Object.prototype, J1 = Z1.propertyIsEnumerable, bs = Object.getOwnPropertySymbols, Q1 = bs ? function(e) {
  return e == null ? [] : (e = Object(e), V1(bs(e), function(t) {
    return J1.call(e, t);
  }));
} : Y1, ew = Q1;
function tw(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var rw = tw, nw = Ot, iw = St, aw = "[object Arguments]";
function ow(e) {
  return iw(e) && nw(e) == aw;
}
var uw = ow, xs = uw, cw = St, Ip = Object.prototype, sw = Ip.hasOwnProperty, lw = Ip.propertyIsEnumerable, fw = xs(/* @__PURE__ */ function() {
  return arguments;
}()) ? xs : function(e) {
  return cw(e) && sw.call(e, "callee") && !lw.call(e, "callee");
}, ec = fw, _i = { exports: {} };
function dw() {
  return !1;
}
var pw = dw;
_i.exports;
(function(e, t) {
  var r = st, n = pw, i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, o = a && a.exports === i, u = o ? r.Buffer : void 0, c = u ? u.isBuffer : void 0, s = c || n;
  e.exports = s;
})(_i, _i.exports);
var Cp = _i.exports, hw = 9007199254740991, vw = /^(?:0|[1-9]\d*)$/;
function yw(e, t) {
  var r = typeof e;
  return t = t ?? hw, !!t && (r == "number" || r != "symbol" && vw.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var tc = yw, gw = 9007199254740991;
function mw(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= gw;
}
var rc = mw, bw = Ot, xw = rc, ww = St, Ow = "[object Arguments]", Sw = "[object Array]", Aw = "[object Boolean]", _w = "[object Date]", $w = "[object Error]", Pw = "[object Function]", Tw = "[object Map]", Ew = "[object Number]", Mw = "[object Object]", jw = "[object RegExp]", Iw = "[object Set]", Cw = "[object String]", kw = "[object WeakMap]", Nw = "[object ArrayBuffer]", Dw = "[object DataView]", Rw = "[object Float32Array]", Lw = "[object Float64Array]", Bw = "[object Int8Array]", Fw = "[object Int16Array]", Uw = "[object Int32Array]", Ww = "[object Uint8Array]", qw = "[object Uint8ClampedArray]", zw = "[object Uint16Array]", Hw = "[object Uint32Array]", le = {};
le[Rw] = le[Lw] = le[Bw] = le[Fw] = le[Uw] = le[Ww] = le[qw] = le[zw] = le[Hw] = !0;
le[Ow] = le[Sw] = le[Nw] = le[Aw] = le[Dw] = le[_w] = le[$w] = le[Pw] = le[Tw] = le[Ew] = le[Mw] = le[jw] = le[Iw] = le[Cw] = le[kw] = !1;
function Kw(e) {
  return ww(e) && xw(e.length) && !!le[bw(e)];
}
var Gw = Kw;
function Xw(e) {
  return function(t) {
    return e(t);
  };
}
var kp = Xw, $i = { exports: {} };
$i.exports;
(function(e, t) {
  var r = zd, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, o = a && r.process, u = function() {
    try {
      var c = i && i.require && i.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch {
    }
  }();
  e.exports = u;
})($i, $i.exports);
var Vw = $i.exports, Yw = Gw, Zw = kp, ws = Vw, Os = ws && ws.isTypedArray, Jw = Os ? Zw(Os) : Yw, Np = Jw, Qw = rw, eO = ec, tO = je, rO = Cp, nO = tc, iO = Np, aO = Object.prototype, oO = aO.hasOwnProperty;
function uO(e, t) {
  var r = tO(e), n = !r && eO(e), i = !r && !n && rO(e), a = !r && !n && !i && iO(e), o = r || n || i || a, u = o ? Qw(e.length, String) : [], c = u.length;
  for (var s in e)
    (t || oO.call(e, s)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (s == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (s == "offset" || s == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (s == "buffer" || s == "byteLength" || s == "byteOffset") || // Skip index properties.
    nO(s, c))) && u.push(s);
  return u;
}
var cO = uO, sO = Object.prototype;
function lO(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || sO;
  return e === r;
}
var fO = lO;
function dO(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Dp = dO, pO = Dp, hO = pO(Object.keys, Object), vO = hO, yO = fO, gO = vO, mO = Object.prototype, bO = mO.hasOwnProperty;
function xO(e) {
  if (!yO(e))
    return gO(e);
  var t = [];
  for (var r in Object(e))
    bO.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var wO = xO, OO = Bu, SO = rc;
function AO(e) {
  return e != null && SO(e.length) && !OO(e);
}
var ma = AO, _O = cO, $O = wO, PO = ma;
function TO(e) {
  return PO(e) ? _O(e) : $O(e);
}
var nc = TO, EO = z1, MO = ew, jO = nc;
function IO(e) {
  return EO(e, jO, MO);
}
var CO = IO, Ss = CO, kO = 1, NO = Object.prototype, DO = NO.hasOwnProperty;
function RO(e, t, r, n, i, a) {
  var o = r & kO, u = Ss(e), c = u.length, s = Ss(t), f = s.length;
  if (c != f && !o)
    return !1;
  for (var l = c; l--; ) {
    var d = u[l];
    if (!(o ? d in t : DO.call(t, d)))
      return !1;
  }
  var p = a.get(e), g = a.get(t);
  if (p && g)
    return p == t && g == e;
  var y = !0;
  a.set(e, t), a.set(t, e);
  for (var v = o; ++l < c; ) {
    d = u[l];
    var x = e[d], b = t[d];
    if (n)
      var w = o ? n(b, x, d, t, e, a) : n(x, b, d, e, t, a);
    if (!(w === void 0 ? x === b || i(x, b, r, n, a) : w)) {
      y = !1;
      break;
    }
    v || (v = d == "constructor");
  }
  if (y && !v) {
    var m = e.constructor, h = t.constructor;
    m != h && "constructor" in e && "constructor" in t && !(typeof m == "function" && m instanceof m && typeof h == "function" && h instanceof h) && (y = !1);
  }
  return a.delete(e), a.delete(t), y;
}
var LO = RO, BO = Qt, FO = st, UO = BO(FO, "DataView"), WO = UO, qO = Qt, zO = st, HO = qO(zO, "Promise"), KO = HO, GO = Qt, XO = st, VO = GO(XO, "Set"), Rp = VO, YO = Qt, ZO = st, JO = YO(ZO, "WeakMap"), QO = JO, No = WO, Do = Uu, Ro = KO, Lo = Rp, Bo = QO, Lp = Ot, kr = Kd, As = "[object Map]", eS = "[object Object]", _s = "[object Promise]", $s = "[object Set]", Ps = "[object WeakMap]", Ts = "[object DataView]", tS = kr(No), rS = kr(Do), nS = kr(Ro), iS = kr(Lo), aS = kr(Bo), Ft = Lp;
(No && Ft(new No(new ArrayBuffer(1))) != Ts || Do && Ft(new Do()) != As || Ro && Ft(Ro.resolve()) != _s || Lo && Ft(new Lo()) != $s || Bo && Ft(new Bo()) != Ps) && (Ft = function(e) {
  var t = Lp(e), r = t == eS ? e.constructor : void 0, n = r ? kr(r) : "";
  if (n)
    switch (n) {
      case tS:
        return Ts;
      case rS:
        return As;
      case nS:
        return _s;
      case iS:
        return $s;
      case aS:
        return Ps;
    }
  return t;
});
var oS = Ft, Xa = $p, uS = Mp, cS = B1, sS = LO, Es = oS, Ms = je, js = Cp, lS = Np, fS = 1, Is = "[object Arguments]", Cs = "[object Array]", Qn = "[object Object]", dS = Object.prototype, ks = dS.hasOwnProperty;
function pS(e, t, r, n, i, a) {
  var o = Ms(e), u = Ms(t), c = o ? Cs : Es(e), s = u ? Cs : Es(t);
  c = c == Is ? Qn : c, s = s == Is ? Qn : s;
  var f = c == Qn, l = s == Qn, d = c == s;
  if (d && js(e)) {
    if (!js(t))
      return !1;
    o = !0, f = !1;
  }
  if (d && !f)
    return a || (a = new Xa()), o || lS(e) ? uS(e, t, r, n, i, a) : cS(e, t, c, r, n, i, a);
  if (!(r & fS)) {
    var p = f && ks.call(e, "__wrapped__"), g = l && ks.call(t, "__wrapped__");
    if (p || g) {
      var y = p ? e.value() : e, v = g ? t.value() : t;
      return a || (a = new Xa()), i(y, v, r, n, a);
    }
  }
  return d ? (a || (a = new Xa()), sS(e, t, r, n, i, a)) : !1;
}
var hS = pS, vS = hS, Ns = St;
function Bp(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !Ns(e) && !Ns(t) ? e !== e && t !== t : vS(e, t, r, n, Bp, i);
}
var ic = Bp, yS = $p, gS = ic, mS = 1, bS = 2;
function xS(e, t, r, n) {
  var i = r.length, a = i, o = !n;
  if (e == null)
    return !a;
  for (e = Object(e); i--; ) {
    var u = r[i];
    if (o && u[2] ? u[1] !== e[u[0]] : !(u[0] in e))
      return !1;
  }
  for (; ++i < a; ) {
    u = r[i];
    var c = u[0], s = e[c], f = u[1];
    if (o && u[2]) {
      if (s === void 0 && !(c in e))
        return !1;
    } else {
      var l = new yS();
      if (n)
        var d = n(s, f, c, e, t, l);
      if (!(d === void 0 ? gS(f, s, mS | bS, n, l) : d))
        return !1;
    }
  }
  return !0;
}
var wS = xS, OS = Et;
function SS(e) {
  return e === e && !OS(e);
}
var Fp = SS, AS = Fp, _S = nc;
function $S(e) {
  for (var t = _S(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, AS(i)];
  }
  return t;
}
var PS = $S;
function TS(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var Up = TS, ES = wS, MS = PS, jS = Up;
function IS(e) {
  var t = MS(e);
  return t.length == 1 && t[0][2] ? jS(t[0][0], t[0][1]) : function(r) {
    return r === e || ES(r, e, t);
  };
}
var CS = IS;
function kS(e, t) {
  return e != null && t in Object(e);
}
var NS = kS, DS = Zd, RS = ec, LS = je, BS = tc, FS = rc, US = fa;
function WS(e, t, r) {
  t = DS(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var o = US(t[n]);
    if (!(a = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && FS(i) && BS(o, i) && (LS(e) || RS(e)));
}
var qS = WS, zS = NS, HS = qS;
function KS(e, t) {
  return e != null && HS(e, t, zS);
}
var GS = KS, XS = ic, VS = Jd, YS = GS, ZS = Lu, JS = Fp, QS = Up, eA = fa, tA = 1, rA = 2;
function nA(e, t) {
  return ZS(e) && JS(t) ? QS(eA(e), t) : function(r) {
    var n = VS(r, e);
    return n === void 0 && n === t ? YS(r, e) : XS(t, n, tA | rA);
  };
}
var iA = nA;
function aA(e) {
  return e;
}
var Nr = aA;
function oA(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var uA = oA, cA = Hu;
function sA(e) {
  return function(t) {
    return cA(t, e);
  };
}
var lA = sA, fA = uA, dA = lA, pA = Lu, hA = fa;
function vA(e) {
  return pA(e) ? fA(hA(e)) : dA(e);
}
var yA = vA, gA = CS, mA = iA, bA = Nr, xA = je, wA = yA;
function OA(e) {
  return typeof e == "function" ? e : e == null ? bA : typeof e == "object" ? xA(e) ? mA(e[0], e[1]) : gA(e) : wA(e);
}
var Mt = OA;
function SA(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var AA = SA;
function _A(e) {
  return e !== e;
}
var $A = _A;
function PA(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; )
    if (e[n] === t)
      return n;
  return -1;
}
var TA = PA, EA = AA, MA = $A, jA = TA;
function IA(e, t, r) {
  return t === t ? jA(e, t, r) : EA(e, MA, r);
}
var CA = IA, kA = CA;
function NA(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && kA(e, t, 0) > -1;
}
var DA = NA;
function RA(e, t, r) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var LA = RA;
function BA() {
}
var FA = BA, Va = Rp, UA = FA, WA = Qu, qA = 1 / 0, zA = Va && 1 / WA(new Va([, -0]))[1] == qA ? function(e) {
  return new Va(e);
} : UA, HA = zA, KA = Pp, GA = DA, XA = LA, VA = Ep, YA = HA, ZA = Qu, JA = 200;
function QA(e, t, r) {
  var n = -1, i = GA, a = e.length, o = !0, u = [], c = u;
  if (r)
    o = !1, i = XA;
  else if (a >= JA) {
    var s = t ? null : YA(e);
    if (s)
      return ZA(s);
    o = !1, i = VA, c = new KA();
  } else
    c = t ? [] : u;
  e:
    for (; ++n < a; ) {
      var f = e[n], l = t ? t(f) : f;
      if (f = r || f !== 0 ? f : 0, o && l === l) {
        for (var d = c.length; d--; )
          if (c[d] === l)
            continue e;
        t && c.push(l), u.push(f);
      } else
        i(c, l, r) || (c !== u && c.push(l), u.push(f));
    }
  return u;
}
var e_ = QA, t_ = Mt, r_ = e_;
function n_(e, t) {
  return e && e.length ? r_(e, t_(t)) : [];
}
var i_ = n_;
const Ds = /* @__PURE__ */ ce(i_);
function Wp(e, t, r) {
  return t === !0 ? Ds(e, r) : Z(t) ? Ds(e, t) : e;
}
function pr(e) {
  "@babel/helpers - typeof";
  return pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pr(e);
}
var a_ = ["ref"];
function Rs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rs(Object(r), !0).forEach(function(n) {
      ba(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function o_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ls(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Hp(n.key), n);
  }
}
function u_(e, t, r) {
  return t && Ls(e.prototype, t), r && Ls(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function c_(e, t, r) {
  return t = Pi(t), s_(e, qp() ? Reflect.construct(t, r || [], Pi(e).constructor) : t.apply(e, r));
}
function s_(e, t) {
  if (t && (pr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return zp(e);
}
function qp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (qp = function() {
    return !!e;
  })();
}
function Pi(e) {
  return Pi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Pi(e);
}
function zp(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function l_(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Fo(e, t);
}
function Fo(e, t) {
  return Fo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Fo(e, t);
}
function ba(e, t, r) {
  return t = Hp(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Hp(e) {
  var t = f_(e, "string");
  return pr(t) == "symbol" ? t : String(t);
}
function f_(e, t) {
  if (pr(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (pr(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function d_(e, t) {
  if (e == null)
    return {};
  var r = p_(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function p_(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function h_(e) {
  return e.value;
}
function v_(e, t) {
  if (/* @__PURE__ */ _.isValidElement(e))
    return /* @__PURE__ */ _.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ _.createElement(e, t);
  t.ref;
  var r = d_(t, a_);
  return /* @__PURE__ */ _.createElement(Ju, r);
}
var Bs = 1, on = /* @__PURE__ */ function(e) {
  l_(t, e);
  function t() {
    var r;
    o_(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = c_(this, t, [].concat(i)), ba(zp(r), "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return u_(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var n = this.props.onBBoxUpdate, i = this.getBBox();
      i ? (Math.abs(i.width - this.lastBoundingBox.width) > Bs || Math.abs(i.height - this.lastBoundingBox.height) > Bs) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? Dt({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var i = this.props, a = i.layout, o = i.align, u = i.verticalAlign, c = i.margin, s = i.chartWidth, f = i.chartHeight, l, d;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (o === "center" && a === "vertical") {
          var p = this.getBBoxSnapshot();
          l = {
            left: ((s || 0) - p.width) / 2
          };
        } else
          l = o === "right" ? {
            right: c && c.right || 0
          } : {
            left: c && c.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (u === "middle") {
          var g = this.getBBoxSnapshot();
          d = {
            top: ((f || 0) - g.height) / 2
          };
        } else
          d = u === "bottom" ? {
            bottom: c && c.bottom || 0
          } : {
            top: c && c.top || 0
          };
      return Dt(Dt({}, l), d);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.content, o = i.width, u = i.height, c = i.wrapperStyle, s = i.payloadUniqBy, f = i.payload, l = Dt(Dt({
        position: "absolute",
        width: o || "auto",
        height: u || "auto"
      }, this.getDefaultPosition(c)), c);
      return /* @__PURE__ */ _.createElement("div", {
        className: "recharts-legend-wrapper",
        style: l,
        ref: function(p) {
          n.wrapperNode = p;
        }
      }, v_(a, Dt(Dt({}, this.props), {}, {
        payload: Wp(f, s, h_)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, i) {
      var a = n.props.layout;
      return a === "vertical" && B(n.props.height) ? {
        height: n.props.height
      } : a === "horizontal" ? {
        width: n.props.width || i
      } : null;
    }
  }]), t;
}(wt);
ba(on, "displayName", "Legend");
ba(on, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var Fs = Un, y_ = ec, g_ = je, Us = Fs ? Fs.isConcatSpreadable : void 0;
function m_(e) {
  return g_(e) || y_(e) || !!(Us && e && e[Us]);
}
var b_ = m_, x_ = jp, w_ = b_;
function Kp(e, t, r, n, i) {
  var a = -1, o = e.length;
  for (r || (r = w_), i || (i = []); ++a < o; ) {
    var u = e[a];
    t > 0 && r(u) ? t > 1 ? Kp(u, t - 1, r, n, i) : x_(i, u) : n || (i[i.length] = u);
  }
  return i;
}
var Gp = Kp;
function O_(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), u = o.length; u--; ) {
      var c = o[e ? u : ++i];
      if (r(a[c], c, a) === !1)
        break;
    }
    return t;
  };
}
var S_ = O_, A_ = S_, __ = A_(), $_ = __, P_ = $_, T_ = nc;
function E_(e, t) {
  return e && P_(e, t, T_);
}
var Xp = E_, M_ = ma;
function j_(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!M_(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== !1; )
      ;
    return r;
  };
}
var I_ = j_, C_ = Xp, k_ = I_, N_ = k_(C_), ac = N_, D_ = ac, R_ = ma;
function L_(e, t) {
  var r = -1, n = R_(e) ? Array(e.length) : [];
  return D_(e, function(i, a, o) {
    n[++r] = t(i, a, o);
  }), n;
}
var Vp = L_;
function B_(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
var F_ = B_, Ws = Tr;
function U_(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, i = e === e, a = Ws(e), o = t !== void 0, u = t === null, c = t === t, s = Ws(t);
    if (!u && !s && !a && e > t || a && o && c && !u && !s || n && o && c || !r && c || !i)
      return 1;
    if (!n && !a && !s && e < t || s && r && i && !n && !a || u && r && i || !o && i || !c)
      return -1;
  }
  return 0;
}
var W_ = U_, q_ = W_;
function z_(e, t, r) {
  for (var n = -1, i = e.criteria, a = t.criteria, o = i.length, u = r.length; ++n < o; ) {
    var c = q_(i[n], a[n]);
    if (c) {
      if (n >= u)
        return c;
      var s = r[n];
      return c * (s == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var H_ = z_, Ya = zu, K_ = Hu, G_ = Mt, X_ = Vp, V_ = F_, Y_ = kp, Z_ = H_, J_ = Nr, Q_ = je;
function e$(e, t, r) {
  t.length ? t = Ya(t, function(a) {
    return Q_(a) ? function(o) {
      return K_(o, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [J_];
  var n = -1;
  t = Ya(t, Y_(G_));
  var i = X_(e, function(a, o, u) {
    var c = Ya(t, function(s) {
      return s(a);
    });
    return { criteria: c, index: ++n, value: a };
  });
  return V_(i, function(a, o) {
    return Z_(a, o, r);
  });
}
var t$ = e$;
function r$(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var n$ = r$, i$ = n$, qs = Math.max;
function a$(e, t, r) {
  return t = qs(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = qs(n.length - t, 0), o = Array(a); ++i < a; )
      o[i] = n[t + i];
    i = -1;
    for (var u = Array(t + 1); ++i < t; )
      u[i] = n[i];
    return u[t] = r(o), i$(e, this, u);
  };
}
var o$ = a$;
function u$(e) {
  return function() {
    return e;
  };
}
var c$ = u$, s$ = Qt, l$ = function() {
  try {
    var e = s$(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Yp = l$, f$ = c$, zs = Yp, d$ = Nr, p$ = zs ? function(e, t) {
  return zs(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: f$(t),
    writable: !0
  });
} : d$, h$ = p$, v$ = 800, y$ = 16, g$ = Date.now;
function m$(e) {
  var t = 0, r = 0;
  return function() {
    var n = g$(), i = y$ - (n - r);
    if (r = n, i > 0) {
      if (++t >= v$)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var b$ = m$, x$ = h$, w$ = b$, O$ = w$(x$), S$ = O$, A$ = Nr, _$ = o$, $$ = S$;
function P$(e, t) {
  return $$(_$(e, t, A$), e + "");
}
var T$ = P$, E$ = Fu, M$ = ma, j$ = tc, I$ = Et;
function C$(e, t, r) {
  if (!I$(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? M$(r) && j$(t, r.length) : n == "string" && t in r) ? E$(r[t], e) : !1;
}
var xa = C$, k$ = Gp, N$ = t$, D$ = T$, Hs = xa, R$ = D$(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && Hs(e, t[0], t[1]) ? t = [] : r > 2 && Hs(t[0], t[1], t[2]) && (t = [t[0]]), N$(e, k$(t, 1), []);
}), L$ = R$;
const oc = /* @__PURE__ */ ce(L$);
function un(e) {
  "@babel/helpers - typeof";
  return un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, un(e);
}
function Uo() {
  return Uo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Uo.apply(this, arguments);
}
function B$(e, t) {
  return q$(e) || W$(e, t) || U$(e, t) || F$();
}
function F$() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function U$(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ks(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ks(e, t);
  }
}
function Ks(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function W$(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0)
          ;
    } catch (f) {
      s = !0, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (s)
          throw i;
      }
    }
    return u;
  }
}
function q$(e) {
  if (Array.isArray(e))
    return e;
}
function Gs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Za(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gs(Object(r), !0).forEach(function(n) {
      z$(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function z$(e, t, r) {
  return t = H$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function H$(e) {
  var t = K$(e, "string");
  return un(t) == "symbol" ? t : String(t);
}
function K$(e, t) {
  if (un(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (un(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function G$(e) {
  return Array.isArray(e) && we(e[0]) && we(e[1]) ? e.join(" ~ ") : e;
}
var X$ = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, o = t.itemStyle, u = o === void 0 ? {} : o, c = t.labelStyle, s = c === void 0 ? {} : c, f = t.payload, l = t.formatter, d = t.itemSorter, p = t.wrapperClassName, g = t.labelClassName, y = t.label, v = t.labelFormatter, x = t.accessibilityLayer, b = x === void 0 ? !1 : x, w = function() {
    if (f && f.length) {
      var P = {
        padding: 0,
        margin: 0
      }, C = (d ? oc(f, d) : f).map(function(j, N) {
        if (j.type === "none")
          return null;
        var k = Za({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: j.color || "#000"
        }, u), D = j.formatter || l || G$, R = j.value, F = j.name, V = R, Y = F;
        if (D && V != null && Y != null) {
          var q = D(R, F, j, N, f);
          if (Array.isArray(q)) {
            var ie = B$(q, 2);
            V = ie[0], Y = ie[1];
          } else
            V = q;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ _.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(N),
            style: k
          }, we(Y) ? /* @__PURE__ */ _.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, Y) : null, we(Y) ? /* @__PURE__ */ _.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ _.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, V), /* @__PURE__ */ _.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, j.unit || ""))
        );
      });
      return /* @__PURE__ */ _.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: P
      }, C);
    }
    return null;
  }, m = Za({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), h = Za({
    margin: 0
  }, s), O = !J(y), S = O ? y : "", A = he("recharts-default-tooltip", p), M = he("recharts-tooltip-label", g);
  O && v && f !== void 0 && f !== null && (S = v(y, f));
  var E = b ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ _.createElement("div", Uo({
    className: A,
    style: m
  }, E), /* @__PURE__ */ _.createElement("p", {
    className: M,
    style: h
  }, /* @__PURE__ */ _.isValidElement(S) ? S : "".concat(S)), w());
};
function cn(e) {
  "@babel/helpers - typeof";
  return cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cn(e);
}
function ei(e, t, r) {
  return t = V$(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function V$(e) {
  var t = Y$(e, "string");
  return cn(t) == "symbol" ? t : String(t);
}
function Y$(e, t) {
  if (cn(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (cn(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ur = "recharts-tooltip-wrapper", Z$ = {
  visibility: "hidden"
};
function J$(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return he(Ur, ei(ei(ei(ei({}, "".concat(Ur, "-right"), B(r) && t && B(t.x) && r >= t.x), "".concat(Ur, "-left"), B(r) && t && B(t.x) && r < t.x), "".concat(Ur, "-bottom"), B(n) && t && B(t.y) && n >= t.y), "".concat(Ur, "-top"), B(n) && t && B(t.y) && n < t.y));
}
function Xs(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, i = e.offsetTopLeft, a = e.position, o = e.reverseDirection, u = e.tooltipDimension, c = e.viewBox, s = e.viewBoxDimension;
  if (a && B(a[n]))
    return a[n];
  var f = r[n] - u - i, l = r[n] + i;
  if (t[n])
    return o[n] ? f : l;
  if (o[n]) {
    var d = f, p = c[n];
    return d < p ? Math.max(l, c[n]) : Math.max(f, c[n]);
  }
  var g = l + u, y = c[n] + s;
  return g > y ? Math.max(f, c[n]) : Math.max(l, c[n]);
}
function Q$(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function eP(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, i = e.position, a = e.reverseDirection, o = e.tooltipBox, u = e.useTranslate3d, c = e.viewBox, s, f, l;
  return o.height > 0 && o.width > 0 && r ? (f = Xs({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), l = Xs({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), s = Q$({
    translateX: f,
    translateY: l,
    useTranslate3d: u
  })) : s = Z$, {
    cssProperties: s,
    cssClasses: J$({
      translateX: f,
      translateY: l,
      coordinate: r
    })
  };
}
function hr(e) {
  "@babel/helpers - typeof";
  return hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hr(e);
}
function Vs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ys(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vs(Object(r), !0).forEach(function(n) {
      hi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zs(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Jp(n.key), n);
  }
}
function rP(e, t, r) {
  return t && Zs(e.prototype, t), r && Zs(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function nP(e, t, r) {
  return t = Ti(t), iP(e, Zp() ? Reflect.construct(t, r || [], Ti(e).constructor) : t.apply(e, r));
}
function iP(e, t) {
  if (t && (hr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return pi(e);
}
function Zp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Zp = function() {
    return !!e;
  })();
}
function Ti(e) {
  return Ti = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ti(e);
}
function pi(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function aP(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Wo(e, t);
}
function Wo(e, t) {
  return Wo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Wo(e, t);
}
function hi(e, t, r) {
  return t = Jp(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Jp(e) {
  var t = oP(e, "string");
  return hr(t) == "symbol" ? t : String(t);
}
function oP(e, t) {
  if (hr(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (hr(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Js = 1, uP = /* @__PURE__ */ function(e) {
  aP(t, e);
  function t() {
    var r;
    tP(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = nP(this, t, [].concat(i)), hi(pi(r), "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      }
    }), hi(pi(r), "lastBoundingBox", {
      width: -1,
      height: -1
    }), hi(pi(r), "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var u, c, s, f;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (u = (c = r.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && u !== void 0 ? u : 0,
            y: (s = (f = r.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null && s !== void 0 ? s : 0
          }
        });
      }
    }), r;
  }
  return rP(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.lastBoundingBox.width) > Js || Math.abs(n.height - this.lastBoundingBox.height) > Js) && (this.lastBoundingBox.width = n.width, this.lastBoundingBox.height = n.height);
      } else
        (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var n, i;
      this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, u = i.animationDuration, c = i.animationEasing, s = i.children, f = i.coordinate, l = i.hasPayload, d = i.isAnimationActive, p = i.offset, g = i.position, y = i.reverseDirection, v = i.useTranslate3d, x = i.viewBox, b = i.wrapperStyle, w = eP({
        allowEscapeViewBox: o,
        coordinate: f,
        offsetTopLeft: p,
        position: g,
        reverseDirection: y,
        tooltipBox: {
          height: this.lastBoundingBox.height,
          width: this.lastBoundingBox.width
        },
        useTranslate3d: v,
        viewBox: x
      }), m = w.cssClasses, h = w.cssProperties, O = Ys(Ys({
        transition: d && a ? "transform ".concat(u, "ms ").concat(c) : void 0
      }, h), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && l ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, b);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ _.createElement("div", {
          tabIndex: -1,
          className: m,
          style: O,
          ref: function(A) {
            n.wrapperNode = A;
          }
        }, s)
      );
    }
  }]), t;
}(wt), cP = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Gt = {
  isSsr: cP(),
  get: function(t) {
    return Gt[t];
  },
  set: function(t, r) {
    if (typeof t == "string")
      Gt[t] = r;
    else {
      var n = Object.keys(t);
      n && n.length && n.forEach(function(i) {
        Gt[i] = t[i];
      });
    }
  }
};
function vr(e) {
  "@babel/helpers - typeof";
  return vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, vr(e);
}
function Qs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function el(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qs(Object(r), !0).forEach(function(n) {
      uc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tl(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, eh(n.key), n);
  }
}
function lP(e, t, r) {
  return t && tl(e.prototype, t), r && tl(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function fP(e, t, r) {
  return t = Ei(t), dP(e, Qp() ? Reflect.construct(t, r || [], Ei(e).constructor) : t.apply(e, r));
}
function dP(e, t) {
  if (t && (vr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return pP(e);
}
function pP(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Qp() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Qp = function() {
    return !!e;
  })();
}
function Ei(e) {
  return Ei = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ei(e);
}
function hP(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && qo(e, t);
}
function qo(e, t) {
  return qo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, qo(e, t);
}
function uc(e, t, r) {
  return t = eh(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function eh(e) {
  var t = vP(e, "string");
  return vr(t) == "symbol" ? t : String(t);
}
function vP(e, t) {
  if (vr(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (vr(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function yP(e) {
  return e.dataKey;
}
function gP(e, t) {
  return /* @__PURE__ */ _.isValidElement(e) ? /* @__PURE__ */ _.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ _.createElement(e, t) : /* @__PURE__ */ _.createElement(X$, t);
}
var rt = /* @__PURE__ */ function(e) {
  hP(t, e);
  function t() {
    return sP(this, t), fP(this, t, arguments);
  }
  return lP(t, [{
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, u = i.animationDuration, c = i.animationEasing, s = i.content, f = i.coordinate, l = i.filterNull, d = i.isAnimationActive, p = i.offset, g = i.payload, y = i.payloadUniqBy, v = i.position, x = i.reverseDirection, b = i.useTranslate3d, w = i.viewBox, m = i.wrapperStyle, h = g ?? [];
      l && h.length && (h = Wp(g.filter(function(S) {
        return S.value != null && (S.hide !== !0 || n.props.includeHidden);
      }), y, yP));
      var O = h.length > 0;
      return /* @__PURE__ */ _.createElement(uP, {
        allowEscapeViewBox: o,
        animationDuration: u,
        animationEasing: c,
        isAnimationActive: d,
        active: a,
        coordinate: f,
        hasPayload: O,
        offset: p,
        position: v,
        reverseDirection: x,
        useTranslate3d: b,
        viewBox: w,
        wrapperStyle: m
      }, gP(s, el(el({}, this.props), {}, {
        payload: h
      })));
    }
  }]), t;
}(wt);
uc(rt, "displayName", "Tooltip");
uc(rt, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !Gt.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var mP = st, bP = function() {
  return mP.Date.now();
}, xP = bP, wP = /\s/;
function OP(e) {
  for (var t = e.length; t-- && wP.test(e.charAt(t)); )
    ;
  return t;
}
var SP = OP, AP = SP, _P = /^\s+/;
function $P(e) {
  return e && e.slice(0, AP(e) + 1).replace(_P, "");
}
var PP = $P, TP = PP, rl = Et, EP = Tr, nl = NaN, MP = /^[-+]0x[0-9a-f]+$/i, jP = /^0b[01]+$/i, IP = /^0o[0-7]+$/i, CP = parseInt;
function kP(e) {
  if (typeof e == "number")
    return e;
  if (EP(e))
    return nl;
  if (rl(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = rl(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = TP(e);
  var r = jP.test(e);
  return r || IP.test(e) ? CP(e.slice(2), r ? 2 : 8) : MP.test(e) ? nl : +e;
}
var th = kP, NP = Et, Ja = xP, il = th, DP = "Expected a function", RP = Math.max, LP = Math.min;
function BP(e, t, r) {
  var n, i, a, o, u, c, s = 0, f = !1, l = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(DP);
  t = il(t) || 0, NP(r) && (f = !!r.leading, l = "maxWait" in r, a = l ? RP(il(r.maxWait) || 0, t) : a, d = "trailing" in r ? !!r.trailing : d);
  function p(O) {
    var S = n, A = i;
    return n = i = void 0, s = O, o = e.apply(A, S), o;
  }
  function g(O) {
    return s = O, u = setTimeout(x, t), f ? p(O) : o;
  }
  function y(O) {
    var S = O - c, A = O - s, M = t - S;
    return l ? LP(M, a - A) : M;
  }
  function v(O) {
    var S = O - c, A = O - s;
    return c === void 0 || S >= t || S < 0 || l && A >= a;
  }
  function x() {
    var O = Ja();
    if (v(O))
      return b(O);
    u = setTimeout(x, y(O));
  }
  function b(O) {
    return u = void 0, d && n ? p(O) : (n = i = void 0, o);
  }
  function w() {
    u !== void 0 && clearTimeout(u), s = 0, n = c = i = u = void 0;
  }
  function m() {
    return u === void 0 ? o : b(Ja());
  }
  function h() {
    var O = Ja(), S = v(O);
    if (n = arguments, i = this, c = O, S) {
      if (u === void 0)
        return g(c);
      if (l)
        return clearTimeout(u), u = setTimeout(x, t), p(c);
    }
    return u === void 0 && (u = setTimeout(x, t)), o;
  }
  return h.cancel = w, h.flush = m, h;
}
var FP = BP, UP = FP, WP = Et, qP = "Expected a function";
function zP(e, t, r) {
  var n = !0, i = !0;
  if (typeof e != "function")
    throw new TypeError(qP);
  return WP(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), UP(e, t, {
    leading: n,
    maxWait: t,
    trailing: i
  });
}
var HP = zP;
const rh = /* @__PURE__ */ ce(HP);
function sn(e) {
  "@babel/helpers - typeof";
  return sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sn(e);
}
function al(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ti(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? al(Object(r), !0).forEach(function(n) {
      KP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : al(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function KP(e, t, r) {
  return t = GP(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function GP(e) {
  var t = XP(e, "string");
  return sn(t) == "symbol" ? t : String(t);
}
function XP(e, t) {
  if (sn(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (sn(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function VP(e, t) {
  return QP(e) || JP(e, t) || ZP(e, t) || YP();
}
function YP() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZP(e, t) {
  if (e) {
    if (typeof e == "string")
      return ol(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ol(e, t);
  }
}
function ol(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function JP(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0)
          ;
    } catch (f) {
      s = !0, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (s)
          throw i;
      }
    }
    return u;
  }
}
function QP(e) {
  if (Array.isArray(e))
    return e;
}
var eT = /* @__PURE__ */ zv(function(e, t) {
  var r = e.aspect, n = e.initialDimension, i = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, o = a === void 0 ? "100%" : a, u = e.height, c = u === void 0 ? "100%" : u, s = e.minWidth, f = s === void 0 ? 0 : s, l = e.minHeight, d = e.maxHeight, p = e.children, g = e.debounce, y = g === void 0 ? 0 : g, v = e.id, x = e.className, b = e.onResize, w = e.style, m = w === void 0 ? {} : w, h = yi(null), O = yi();
  O.current = b, Hv(t, function() {
    return Object.defineProperty(h.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), h.current;
      },
      configurable: !0
    });
  });
  var S = Du({
    containerWidth: i.width,
    containerHeight: i.height
  }), A = VP(S, 2), M = A[0], E = A[1], T = Kv(function(C, j) {
    E(function(N) {
      var k = Math.round(C), D = Math.round(j);
      return N.containerWidth === k && N.containerHeight === D ? N : {
        containerWidth: k,
        containerHeight: D
      };
    });
  }, []);
  Ru(function() {
    var C = function(F) {
      var V, Y = F[0].contentRect, q = Y.width, ie = Y.height;
      T(q, ie), (V = O.current) === null || V === void 0 || V.call(O, q, ie);
    };
    y > 0 && (C = rh(C, y, {
      trailing: !0,
      leading: !1
    }));
    var j = new ResizeObserver(C), N = h.current.getBoundingClientRect(), k = N.width, D = N.height;
    return T(k, D), j.observe(h.current), function() {
      j.disconnect();
    };
  }, [T, y]);
  var P = Ud(function() {
    var C = M.containerWidth, j = M.containerHeight;
    if (C < 0 || j < 0)
      return null;
    yt(qt(o) || qt(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, c), yt(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var N = qt(o) ? C : o, k = qt(c) ? j : c;
    r && r > 0 && (N ? k = N / r : k && (N = k * r), d && k > d && (k = d)), yt(N > 0 || k > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, N, k, o, c, f, l, r);
    var D = !Array.isArray(p) && mo.isElement(p) && vt(p.type).endsWith("Chart");
    return _.Children.map(p, function(R) {
      return mo.isElement(R) ? /* @__PURE__ */ xe(R, ti({
        width: N,
        height: k
      }, D ? {
        style: ti({
          height: "100%",
          width: "100%",
          maxHeight: k,
          maxWidth: N
        }, R.props.style)
      } : {})) : R;
    });
  }, [r, p, c, d, l, f, M, o]);
  return /* @__PURE__ */ _.createElement("div", {
    id: v ? "".concat(v) : void 0,
    className: he("recharts-responsive-container", x),
    style: ti(ti({}, m), {}, {
      width: o,
      height: c,
      minWidth: f,
      minHeight: l,
      maxHeight: d
    }),
    ref: h
  }, P);
}), cc = function(t) {
  return null;
};
cc.displayName = "Cell";
function ln(e) {
  "@babel/helpers - typeof";
  return ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ln(e);
}
function ul(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ul(Object(r), !0).forEach(function(n) {
      tT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ul(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tT(e, t, r) {
  return t = rT(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rT(e) {
  var t = nT(e, "string");
  return ln(t) == "symbol" ? t : String(t);
}
function nT(e, t) {
  if (ln(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ln(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var rr = {
  widthCache: {},
  cacheCount: 0
}, iT = 2e3, aT = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, cl = "recharts_measurement_span";
function oT(e) {
  var t = zo({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var sl = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Gt.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = oT(r), i = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (rr.widthCache[i])
    return rr.widthCache[i];
  try {
    var a = document.getElementById(cl);
    a || (a = document.createElement("span"), a.setAttribute("id", cl), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var o = zo(zo({}, aT), n);
    Object.assign(a.style, o), a.textContent = "".concat(t);
    var u = a.getBoundingClientRect(), c = {
      width: u.width,
      height: u.height
    };
    return rr.widthCache[i] = c, ++rr.cacheCount > iT && (rr.cacheCount = 0, rr.widthCache = {}), c;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, uT = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function fn(e) {
  "@babel/helpers - typeof";
  return fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fn(e);
}
function Mi(e, t) {
  return fT(e) || lT(e, t) || sT(e, t) || cT();
}
function cT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function sT(e, t) {
  if (e) {
    if (typeof e == "string")
      return ll(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ll(e, t);
  }
}
function ll(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function lT(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0)
          ;
    } catch (f) {
      s = !0, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (s)
          throw i;
      }
    }
    return u;
  }
}
function fT(e) {
  if (Array.isArray(e))
    return e;
}
function dT(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fl(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, hT(n.key), n);
  }
}
function pT(e, t, r) {
  return t && fl(e.prototype, t), r && fl(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function hT(e) {
  var t = vT(e, "string");
  return fn(t) == "symbol" ? t : String(t);
}
function vT(e, t) {
  if (fn(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (fn(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var dl = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, pl = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, yT = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, gT = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, nh = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, mT = Object.keys(nh), or = "NaN";
function bT(e, t) {
  return e * nh[t];
}
var ri = /* @__PURE__ */ function() {
  function e(t, r) {
    dT(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !yT.test(r) && (this.num = NaN, this.unit = ""), mT.includes(r) && (this.num = bT(t, r), this.unit = "px");
  }
  return pT(e, [{
    key: "add",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num + r.num, this.unit);
    }
  }, {
    key: "subtract",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num - r.num, this.unit);
    }
  }, {
    key: "multiply",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num * r.num, this.unit || r.unit);
    }
  }, {
    key: "divide",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num / r.num, this.unit || r.unit);
    }
  }, {
    key: "toString",
    value: function() {
      return "".concat(this.num).concat(this.unit);
    }
  }, {
    key: "isNaN",
    value: function() {
      return Number.isNaN(this.num);
    }
  }], [{
    key: "parse",
    value: function(r) {
      var n, i = (n = gT.exec(r)) !== null && n !== void 0 ? n : [], a = Mi(i, 3), o = a[1], u = a[2];
      return new e(parseFloat(o), u ?? "");
    }
  }]), e;
}();
function ih(e) {
  if (e.includes(or))
    return or;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = dl.exec(t)) !== null && r !== void 0 ? r : [], i = Mi(n, 4), a = i[1], o = i[2], u = i[3], c = ri.parse(a ?? ""), s = ri.parse(u ?? ""), f = o === "*" ? c.multiply(s) : c.divide(s);
    if (f.isNaN())
      return or;
    t = t.replace(dl, f.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var l, d = (l = pl.exec(t)) !== null && l !== void 0 ? l : [], p = Mi(d, 4), g = p[1], y = p[2], v = p[3], x = ri.parse(g ?? ""), b = ri.parse(v ?? ""), w = y === "+" ? x.add(b) : x.subtract(b);
    if (w.isNaN())
      return or;
    t = t.replace(pl, w.toString());
  }
  return t;
}
var hl = /\(([^()]*)\)/;
function xT(e) {
  for (var t = e; t.includes("("); ) {
    var r = hl.exec(t), n = Mi(r, 2), i = n[1];
    t = t.replace(hl, ih(i));
  }
  return t;
}
function wT(e) {
  var t = e.replace(/\s+/g, "");
  return t = xT(t), t = ih(t), t;
}
function OT(e) {
  try {
    return wT(e);
  } catch {
    return or;
  }
}
function Qa(e) {
  var t = OT(e.slice(5, -1));
  return t === or ? "" : t;
}
var ST = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], AT = ["dx", "dy", "angle", "className", "breakAll"];
function Ho() {
  return Ho = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ho.apply(this, arguments);
}
function vl(e, t) {
  if (e == null)
    return {};
  var r = _T(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function _T(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function yl(e, t) {
  return ET(e) || TT(e, t) || PT(e, t) || $T();
}
function $T() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function PT(e, t) {
  if (e) {
    if (typeof e == "string")
      return gl(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return gl(e, t);
  }
}
function gl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function TT(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0)
          ;
    } catch (f) {
      s = !0, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (s)
          throw i;
      }
    }
    return u;
  }
}
function ET(e) {
  if (Array.isArray(e))
    return e;
}
var ah = /[ \f\n\r\t\v\u2028\u2029]+/, oh = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    J(r) || (n ? a = r.toString().split("") : a = r.toString().split(ah));
    var o = a.map(function(c) {
      return {
        word: c,
        width: sl(c, i).width
      };
    }), u = n ? 0 : sl(" ", i).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: u
    };
  } catch {
    return null;
  }
}, MT = function(t, r, n, i, a) {
  var o = t.maxLines, u = t.children, c = t.style, s = t.breakAll, f = B(o), l = u, d = function() {
    var N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return N.reduce(function(k, D) {
      var R = D.word, F = D.width, V = k[k.length - 1];
      if (V && (i == null || a || V.width + F + n < Number(i)))
        V.words.push(R), V.width += F + n;
      else {
        var Y = {
          words: [R],
          width: F
        };
        k.push(Y);
      }
      return k;
    }, []);
  }, p = d(r), g = function(N) {
    return N.reduce(function(k, D) {
      return k.width > D.width ? k : D;
    });
  };
  if (!f)
    return p;
  for (var y = "…", v = function(N) {
    var k = l.slice(0, N), D = oh({
      breakAll: s,
      style: c,
      children: k + y
    }).wordsWithComputedWidth, R = d(D), F = R.length > o || g(R).width > Number(i);
    return [F, R];
  }, x = 0, b = l.length - 1, w = 0, m; x <= b && w <= l.length - 1; ) {
    var h = Math.floor((x + b) / 2), O = h - 1, S = v(O), A = yl(S, 2), M = A[0], E = A[1], T = v(h), P = yl(T, 1), C = P[0];
    if (!M && !C && (x = h + 1), M && C && (b = h - 1), !M && C) {
      m = E;
      break;
    }
    w++;
  }
  return m || p;
}, ml = function(t) {
  var r = J(t) ? [] : t.toString().split(ah);
  return [{
    words: r
  }];
}, jT = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, o = t.breakAll, u = t.maxLines;
  if ((r || n) && !Gt.isSsr) {
    var c, s, f = oh({
      breakAll: o,
      children: i,
      style: a
    });
    if (f) {
      var l = f.wordsWithComputedWidth, d = f.spaceWidth;
      c = l, s = d;
    } else
      return ml(i);
    return MT({
      breakAll: o,
      children: i,
      maxLines: u,
      style: a
    }, c, s, r, n);
  }
  return ml(i);
}, bl = "#808080", yr = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.lineHeight, u = o === void 0 ? "1em" : o, c = t.capHeight, s = c === void 0 ? "0.71em" : c, f = t.scaleToFit, l = f === void 0 ? !1 : f, d = t.textAnchor, p = d === void 0 ? "start" : d, g = t.verticalAnchor, y = g === void 0 ? "end" : g, v = t.fill, x = v === void 0 ? bl : v, b = vl(t, ST), w = Ud(function() {
    return jT({
      breakAll: b.breakAll,
      children: b.children,
      maxLines: b.maxLines,
      scaleToFit: l,
      style: b.style,
      width: b.width
    });
  }, [b.breakAll, b.children, b.maxLines, l, b.style, b.width]), m = b.dx, h = b.dy, O = b.angle, S = b.className, A = b.breakAll, M = vl(b, AT);
  if (!we(n) || !we(a))
    return null;
  var E = n + (B(m) ? m : 0), T = a + (B(h) ? h : 0), P;
  switch (y) {
    case "start":
      P = Qa("calc(".concat(s, ")"));
      break;
    case "middle":
      P = Qa("calc(".concat((w.length - 1) / 2, " * -").concat(u, " + (").concat(s, " / 2))"));
      break;
    default:
      P = Qa("calc(".concat(w.length - 1, " * -").concat(u, ")"));
      break;
  }
  var C = [];
  if (l) {
    var j = w[0].width, N = b.width;
    C.push("scale(".concat((B(N) ? N / j : 1) / j, ")"));
  }
  return O && C.push("rotate(".concat(O, ", ").concat(E, ", ").concat(T, ")")), C.length && (M.transform = C.join(" ")), /* @__PURE__ */ _.createElement("text", Ho({}, X(M, !0), {
    x: E,
    y: T,
    className: he("recharts-text", S),
    textAnchor: p,
    fill: x.includes("url") ? bl : x
  }), w.map(function(k, D) {
    var R = k.words.join(A ? "" : " ");
    return /* @__PURE__ */ _.createElement("tspan", {
      x: E,
      dy: D === 0 ? P : u,
      key: R
    }, R);
  }));
};
function Pt(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function IT(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function sc(e) {
  let t, r, n;
  e.length !== 2 ? (t = Pt, r = (u, c) => Pt(e(u), c), n = (u, c) => e(u) - c) : (t = e === Pt || e === IT ? e : CT, r = e, n = e);
  function i(u, c, s = 0, f = u.length) {
    if (s < f) {
      if (t(c, c) !== 0)
        return f;
      do {
        const l = s + f >>> 1;
        r(u[l], c) < 0 ? s = l + 1 : f = l;
      } while (s < f);
    }
    return s;
  }
  function a(u, c, s = 0, f = u.length) {
    if (s < f) {
      if (t(c, c) !== 0)
        return f;
      do {
        const l = s + f >>> 1;
        r(u[l], c) <= 0 ? s = l + 1 : f = l;
      } while (s < f);
    }
    return s;
  }
  function o(u, c, s = 0, f = u.length) {
    const l = i(u, c, s, f - 1);
    return l > s && n(u[l - 1], c) > -n(u[l], c) ? l - 1 : l;
  }
  return { left: i, center: o, right: a };
}
function CT() {
  return 0;
}
function uh(e) {
  return e === null ? NaN : +e;
}
function* kT(e, t) {
  if (t === void 0)
    for (let r of e)
      r != null && (r = +r) >= r && (yield r);
  else {
    let r = -1;
    for (let n of e)
      (n = t(n, ++r, e)) != null && (n = +n) >= n && (yield n);
  }
}
const NT = sc(Pt), zn = NT.right;
sc(uh).center;
class xl extends Map {
  constructor(t, r = LT) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null)
      for (const [n, i] of t)
        this.set(n, i);
  }
  get(t) {
    return super.get(wl(this, t));
  }
  has(t) {
    return super.has(wl(this, t));
  }
  set(t, r) {
    return super.set(DT(this, t), r);
  }
  delete(t) {
    return super.delete(RT(this, t));
  }
}
function wl({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function DT({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function RT({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function LT(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function BT(e = Pt) {
  if (e === Pt)
    return ch;
  if (typeof e != "function")
    throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function ch(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const FT = Math.sqrt(50), UT = Math.sqrt(10), WT = Math.sqrt(2);
function ji(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= FT ? 10 : a >= UT ? 5 : a >= WT ? 2 : 1;
  let u, c, s;
  return i < 0 ? (s = Math.pow(10, -i) / o, u = Math.round(e * s), c = Math.round(t * s), u / s < e && ++u, c / s > t && --c, s = -s) : (s = Math.pow(10, i) * o, u = Math.round(e / s), c = Math.round(t / s), u * s < e && ++u, c * s > t && --c), c < u && 0.5 <= r && r < 2 ? ji(e, t, r * 2) : [u, c, s];
}
function Ko(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0))
    return [];
  if (e === t)
    return [e];
  const n = t < e, [i, a, o] = n ? ji(t, e, r) : ji(e, t, r);
  if (!(a >= i))
    return [];
  const u = a - i + 1, c = new Array(u);
  if (n)
    if (o < 0)
      for (let s = 0; s < u; ++s)
        c[s] = (a - s) / -o;
    else
      for (let s = 0; s < u; ++s)
        c[s] = (a - s) * o;
  else if (o < 0)
    for (let s = 0; s < u; ++s)
      c[s] = (i + s) / -o;
  else
    for (let s = 0; s < u; ++s)
      c[s] = (i + s) * o;
  return c;
}
function Go(e, t, r) {
  return t = +t, e = +e, r = +r, ji(e, t, r)[2];
}
function Xo(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? Go(t, e, r) : Go(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Ol(e, t) {
  let r;
  if (t === void 0)
    for (const n of e)
      n != null && (r < n || r === void 0 && n >= n) && (r = n);
  else {
    let n = -1;
    for (let i of e)
      (i = t(i, ++n, e)) != null && (r < i || r === void 0 && i >= i) && (r = i);
  }
  return r;
}
function Sl(e, t) {
  let r;
  if (t === void 0)
    for (const n of e)
      n != null && (r > n || r === void 0 && n >= n) && (r = n);
  else {
    let n = -1;
    for (let i of e)
      (i = t(i, ++n, e)) != null && (r > i || r === void 0 && i >= i) && (r = i);
  }
  return r;
}
function sh(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n))
    return e;
  for (i = i === void 0 ? ch : BT(i); n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, s = t - r + 1, f = Math.log(c), l = 0.5 * Math.exp(2 * f / 3), d = 0.5 * Math.sqrt(f * l * (c - l) / c) * (s - c / 2 < 0 ? -1 : 1), p = Math.max(r, Math.floor(t - s * l / c + d)), g = Math.min(n, Math.floor(t + (c - s) * l / c + d));
      sh(e, t, p, g, i);
    }
    const a = e[t];
    let o = r, u = n;
    for (Wr(e, r, t), i(e[n], a) > 0 && Wr(e, r, n); o < u; ) {
      for (Wr(e, o, u), ++o, --u; i(e[o], a) < 0; )
        ++o;
      for (; i(e[u], a) > 0; )
        --u;
    }
    i(e[r], a) === 0 ? Wr(e, r, u) : (++u, Wr(e, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1);
  }
  return e;
}
function Wr(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function qT(e, t, r) {
  if (e = Float64Array.from(kT(e, r)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2)
      return Sl(e);
    if (t >= 1)
      return Ol(e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = Ol(sh(e, a).subarray(0, a + 1)), u = Sl(e.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function zT(e, t, r = uh) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2)
      return +r(e[0], 0, e);
    if (t >= 1)
      return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e[a], a, e), u = +r(e[a + 1], a + 1, e);
    return o + (u - o) * (i - a);
  }
}
function HT(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function Ve(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function At(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const Vo = Symbol("implicit");
function lc() {
  var e = new xl(), t = [], r = [], n = Vo;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== Vo)
        return n;
      e.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new xl();
    for (const o of a)
      e.has(o) || e.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return lc(t, r).unknown(n);
  }, Ve.apply(i, arguments), i;
}
function dn() {
  var e = lc().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, o, u = !1, c = 0, s = 0, f = 0.5;
  delete e.unknown;
  function l() {
    var d = t().length, p = i < n, g = p ? i : n, y = p ? n : i;
    a = (y - g) / Math.max(1, d - c + s * 2), u && (a = Math.floor(a)), g += (y - g - a * (d - c)) * f, o = a * (1 - c), u && (g = Math.round(g), o = Math.round(o));
    var v = HT(d).map(function(x) {
      return g + a * x;
    });
    return r(p ? v.reverse() : v);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), l()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([n, i] = d, n = +n, i = +i, l()) : [n, i];
  }, e.rangeRound = function(d) {
    return [n, i] = d, n = +n, i = +i, u = !0, l();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return a;
  }, e.round = function(d) {
    return arguments.length ? (u = !!d, l()) : u;
  }, e.padding = function(d) {
    return arguments.length ? (c = Math.min(1, s = +d), l()) : c;
  }, e.paddingInner = function(d) {
    return arguments.length ? (c = Math.min(1, d), l()) : c;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (s = +d, l()) : s;
  }, e.align = function(d) {
    return arguments.length ? (f = Math.max(0, Math.min(1, d)), l()) : f;
  }, e.copy = function() {
    return dn(t(), [n, i]).round(u).paddingInner(c).paddingOuter(s).align(f);
  }, Ve.apply(l(), arguments);
}
function lh(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return lh(t());
  }, e;
}
function Zr() {
  return lh(dn.apply(null, arguments).paddingInner(1));
}
function fc(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function fh(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t)
    r[n] = t[n];
  return r;
}
function Hn() {
}
var pn = 0.7, Ii = 1 / pn, sr = "\\s*([+-]?\\d+)\\s*", hn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ot = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", KT = /^#([0-9a-f]{3,8})$/, GT = new RegExp(`^rgb\\(${sr},${sr},${sr}\\)$`), XT = new RegExp(`^rgb\\(${ot},${ot},${ot}\\)$`), VT = new RegExp(`^rgba\\(${sr},${sr},${sr},${hn}\\)$`), YT = new RegExp(`^rgba\\(${ot},${ot},${ot},${hn}\\)$`), ZT = new RegExp(`^hsl\\(${hn},${ot},${ot}\\)$`), JT = new RegExp(`^hsla\\(${hn},${ot},${ot},${hn}\\)$`), Al = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
fc(Hn, vn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: _l,
  // Deprecated! Use color.formatHex.
  formatHex: _l,
  formatHex8: QT,
  formatHsl: eE,
  formatRgb: $l,
  toString: $l
});
function _l() {
  return this.rgb().formatHex();
}
function QT() {
  return this.rgb().formatHex8();
}
function eE() {
  return dh(this).formatHsl();
}
function $l() {
  return this.rgb().formatRgb();
}
function vn(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = KT.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Pl(t) : r === 3 ? new Me(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? ni(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? ni(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = GT.exec(e)) ? new Me(t[1], t[2], t[3], 1) : (t = XT.exec(e)) ? new Me(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = VT.exec(e)) ? ni(t[1], t[2], t[3], t[4]) : (t = YT.exec(e)) ? ni(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ZT.exec(e)) ? Ml(t[1], t[2] / 100, t[3] / 100, 1) : (t = JT.exec(e)) ? Ml(t[1], t[2] / 100, t[3] / 100, t[4]) : Al.hasOwnProperty(e) ? Pl(Al[e]) : e === "transparent" ? new Me(NaN, NaN, NaN, 0) : null;
}
function Pl(e) {
  return new Me(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ni(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Me(e, t, r, n);
}
function tE(e) {
  return e instanceof Hn || (e = vn(e)), e ? (e = e.rgb(), new Me(e.r, e.g, e.b, e.opacity)) : new Me();
}
function Yo(e, t, r, n) {
  return arguments.length === 1 ? tE(e) : new Me(e, t, r, n ?? 1);
}
function Me(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
fc(Me, Yo, fh(Hn, {
  brighter(e) {
    return e = e == null ? Ii : Math.pow(Ii, e), new Me(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? pn : Math.pow(pn, e), new Me(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Me(Xt(this.r), Xt(this.g), Xt(this.b), Ci(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Tl,
  // Deprecated! Use color.formatHex.
  formatHex: Tl,
  formatHex8: rE,
  formatRgb: El,
  toString: El
}));
function Tl() {
  return `#${zt(this.r)}${zt(this.g)}${zt(this.b)}`;
}
function rE() {
  return `#${zt(this.r)}${zt(this.g)}${zt(this.b)}${zt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function El() {
  const e = Ci(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Xt(this.r)}, ${Xt(this.g)}, ${Xt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ci(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Xt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function zt(e) {
  return e = Xt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ml(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Je(e, t, r, n);
}
function dh(e) {
  if (e instanceof Je)
    return new Je(e.h, e.s, e.l, e.opacity);
  if (e instanceof Hn || (e = vn(e)), !e)
    return new Je();
  if (e instanceof Je)
    return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, u = a - i, c = (a + i) / 2;
  return u ? (t === a ? o = (r - n) / u + (r < n) * 6 : r === a ? o = (n - t) / u + 2 : o = (t - r) / u + 4, u /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : u = c > 0 && c < 1 ? 0 : o, new Je(o, u, c, e.opacity);
}
function nE(e, t, r, n) {
  return arguments.length === 1 ? dh(e) : new Je(e, t, r, n ?? 1);
}
function Je(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
fc(Je, nE, fh(Hn, {
  brighter(e) {
    return e = e == null ? Ii : Math.pow(Ii, e), new Je(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? pn : Math.pow(pn, e), new Je(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new Me(
      eo(e >= 240 ? e - 240 : e + 120, i, n),
      eo(e, i, n),
      eo(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new Je(jl(this.h), ii(this.s), ii(this.l), Ci(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Ci(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${jl(this.h)}, ${ii(this.s) * 100}%, ${ii(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function jl(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function ii(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function eo(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const dc = (e) => () => e;
function iE(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function aE(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function oE(e) {
  return (e = +e) == 1 ? ph : function(t, r) {
    return r - t ? aE(t, r, e) : dc(isNaN(t) ? r : t);
  };
}
function ph(e, t) {
  var r = t - e;
  return r ? iE(e, r) : dc(isNaN(e) ? t : e);
}
const Il = function e(t) {
  var r = oE(t);
  function n(i, a) {
    var o = r((i = Yo(i)).r, (a = Yo(a)).r), u = r(i.g, a.g), c = r(i.b, a.b), s = ph(i.opacity, a.opacity);
    return function(f) {
      return i.r = o(f), i.g = u(f), i.b = c(f), i.opacity = s(f), i + "";
    };
  }
  return n.gamma = e, n;
}(1);
function uE(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i)
      n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function cE(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function sE(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o)
    i[o] = Dr(e[o], t[o]);
  for (; o < r; ++o)
    a[o] = t[o];
  return function(u) {
    for (o = 0; o < n; ++o)
      a[o] = i[o](u);
    return a;
  };
}
function lE(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function ki(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function fE(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = Dr(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r)
      n[i] = r[i](a);
    return n;
  };
}
var Zo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, to = new RegExp(Zo.source, "g");
function dE(e) {
  return function() {
    return e;
  };
}
function pE(e) {
  return function(t) {
    return e(t) + "";
  };
}
function hE(e, t) {
  var r = Zo.lastIndex = to.lastIndex = 0, n, i, a, o = -1, u = [], c = [];
  for (e = e + "", t = t + ""; (n = Zo.exec(e)) && (i = to.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), u[o] ? u[o] += a : u[++o] = a), (n = n[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, c.push({ i: o, x: ki(n, i) })), r = to.lastIndex;
  return r < t.length && (a = t.slice(r), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? c[0] ? pE(c[0].x) : dE(t) : (t = c.length, function(s) {
    for (var f = 0, l; f < t; ++f)
      u[(l = c[f]).i] = l.x(s);
    return u.join("");
  });
}
function Dr(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? dc(t) : (r === "number" ? ki : r === "string" ? (n = vn(t)) ? (t = n, Il) : hE : t instanceof vn ? Il : t instanceof Date ? lE : cE(t) ? uE : Array.isArray(t) ? sE : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? fE : ki)(e, t);
}
function pc(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function vE(e, t) {
  t === void 0 && (t = e, e = Dr);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; )
    a[r] = e(i, i = t[++r]);
  return function(o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[u](o - u);
  };
}
function yE(e) {
  return function() {
    return e;
  };
}
function Ni(e) {
  return +e;
}
var Cl = [0, 1];
function Te(e) {
  return e;
}
function Jo(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : yE(isNaN(t) ? NaN : 0.5);
}
function gE(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function mE(e, t, r) {
  var n = e[0], i = e[1], a = t[0], o = t[1];
  return i < n ? (n = Jo(i, n), a = r(o, a)) : (n = Jo(n, i), a = r(a, o)), function(u) {
    return a(n(u));
  };
}
function bE(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    i[o] = Jo(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(u) {
    var c = zn(e, u, 1, n) - 1;
    return a[c](i[c](u));
  };
}
function Kn(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function wa() {
  var e = Cl, t = Cl, r = Dr, n, i, a, o = Te, u, c, s;
  function f() {
    var d = Math.min(e.length, t.length);
    return o !== Te && (o = gE(e[0], e[d - 1])), u = d > 2 ? bE : mE, c = s = null, l;
  }
  function l(d) {
    return d == null || isNaN(d = +d) ? a : (c || (c = u(e.map(n), t, r)))(n(o(d)));
  }
  return l.invert = function(d) {
    return o(i((s || (s = u(t, e.map(n), ki)))(d)));
  }, l.domain = function(d) {
    return arguments.length ? (e = Array.from(d, Ni), f()) : e.slice();
  }, l.range = function(d) {
    return arguments.length ? (t = Array.from(d), f()) : t.slice();
  }, l.rangeRound = function(d) {
    return t = Array.from(d), r = pc, f();
  }, l.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : Te, f()) : o !== Te;
  }, l.interpolate = function(d) {
    return arguments.length ? (r = d, f()) : r;
  }, l.unknown = function(d) {
    return arguments.length ? (a = d, l) : a;
  }, function(d, p) {
    return n = d, i = p, f();
  };
}
function hc() {
  return wa()(Te, Te);
}
function xE(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Di(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function gr(e) {
  return e = Di(Math.abs(e)), e ? e[1] : NaN;
}
function wE(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, u = e[0], c = 0; i > 0 && u > 0 && (c + u + 1 > n && (u = Math.max(1, n - c)), a.push(r.substring(i -= u, i + u)), !((c += u + 1) > n)); )
      u = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function OE(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var SE = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function yn(e) {
  if (!(t = SE.exec(e)))
    throw new Error("invalid format: " + e);
  var t;
  return new vc({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
yn.prototype = vc.prototype;
function vc(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
vc.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function AE(e) {
  e:
    for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
      switch (e[r]) {
        case ".":
          n = i = r;
          break;
        case "0":
          n === 0 && (n = r), i = r;
          break;
        default:
          if (!+e[r])
            break e;
          n > 0 && (n = 0);
          break;
      }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var hh;
function _E(e, t) {
  var r = Di(e, t);
  if (!r)
    return e + "";
  var n = r[0], i = r[1], a = i - (hh = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Di(e, Math.max(0, t + a - 1))[0];
}
function kl(e, t) {
  var r = Di(e, t);
  if (!r)
    return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Nl = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: xE,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => kl(e * 100, t),
  r: kl,
  s: _E,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Dl(e) {
  return e;
}
var Rl = Array.prototype.map, Ll = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function $E(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Dl : wE(Rl.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Dl : OE(Rl.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", u = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function s(l) {
    l = yn(l);
    var d = l.fill, p = l.align, g = l.sign, y = l.symbol, v = l.zero, x = l.width, b = l.comma, w = l.precision, m = l.trim, h = l.type;
    h === "n" ? (b = !0, h = "g") : Nl[h] || (w === void 0 && (w = 12), m = !0, h = "g"), (v || d === "0" && p === "=") && (v = !0, d = "0", p = "=");
    var O = y === "$" ? r : y === "#" && /[boxX]/.test(h) ? "0" + h.toLowerCase() : "", S = y === "$" ? n : /[%p]/.test(h) ? o : "", A = Nl[h], M = /[defgprs%]/.test(h);
    w = w === void 0 ? 6 : /[gprs]/.test(h) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w));
    function E(T) {
      var P = O, C = S, j, N, k;
      if (h === "c")
        C = A(T) + C, T = "";
      else {
        T = +T;
        var D = T < 0 || 1 / T < 0;
        if (T = isNaN(T) ? c : A(Math.abs(T), w), m && (T = AE(T)), D && +T == 0 && g !== "+" && (D = !1), P = (D ? g === "(" ? g : u : g === "-" || g === "(" ? "" : g) + P, C = (h === "s" ? Ll[8 + hh / 3] : "") + C + (D && g === "(" ? ")" : ""), M) {
          for (j = -1, N = T.length; ++j < N; )
            if (k = T.charCodeAt(j), 48 > k || k > 57) {
              C = (k === 46 ? i + T.slice(j + 1) : T.slice(j)) + C, T = T.slice(0, j);
              break;
            }
        }
      }
      b && !v && (T = t(T, 1 / 0));
      var R = P.length + T.length + C.length, F = R < x ? new Array(x - R + 1).join(d) : "";
      switch (b && v && (T = t(F + T, F.length ? x - C.length : 1 / 0), F = ""), p) {
        case "<":
          T = P + T + C + F;
          break;
        case "=":
          T = P + F + T + C;
          break;
        case "^":
          T = F.slice(0, R = F.length >> 1) + P + T + C + F.slice(R);
          break;
        default:
          T = F + P + T + C;
          break;
      }
      return a(T);
    }
    return E.toString = function() {
      return l + "";
    }, E;
  }
  function f(l, d) {
    var p = s((l = yn(l), l.type = "f", l)), g = Math.max(-8, Math.min(8, Math.floor(gr(d) / 3))) * 3, y = Math.pow(10, -g), v = Ll[8 + g / 3];
    return function(x) {
      return p(y * x) + v;
    };
  }
  return {
    format: s,
    formatPrefix: f
  };
}
var ai, yc, vh;
PE({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function PE(e) {
  return ai = $E(e), yc = ai.format, vh = ai.formatPrefix, ai;
}
function TE(e) {
  return Math.max(0, -gr(Math.abs(e)));
}
function EE(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(gr(t) / 3))) * 3 - gr(Math.abs(e)));
}
function ME(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, gr(t) - gr(e)) + 1;
}
function yh(e, t, r, n) {
  var i = Xo(e, t, r), a;
  switch (n = yn(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = EE(i, o)) && (n.precision = a), vh(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = ME(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = TE(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return yc(n);
}
function jt(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return Ko(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return yh(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], u = n[a], c, s, f = 10;
    for (u < o && (s = o, o = u, u = s, s = i, i = a, a = s); f-- > 0; ) {
      if (s = Go(o, u, r), s === c)
        return n[i] = o, n[a] = u, t(n);
      if (s > 0)
        o = Math.floor(o / s) * s, u = Math.ceil(u / s) * s;
      else if (s < 0)
        o = Math.ceil(o * s) / s, u = Math.floor(u * s) / s;
      else
        break;
      c = s;
    }
    return e;
  }, e;
}
function Ri() {
  var e = hc();
  return e.copy = function() {
    return Kn(e, Ri());
  }, Ve.apply(e, arguments), jt(e);
}
function gh(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, Ni), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return gh(e).unknown(t);
  }, e = arguments.length ? Array.from(e, Ni) : [0, 1], jt(r);
}
function mh(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function Bl(e) {
  return Math.log(e);
}
function Fl(e) {
  return Math.exp(e);
}
function jE(e) {
  return -Math.log(-e);
}
function IE(e) {
  return -Math.exp(-e);
}
function CE(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function kE(e) {
  return e === 10 ? CE : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function NE(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Ul(e) {
  return (t, r) => -e(-t, r);
}
function gc(e) {
  const t = e(Bl, Fl), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = NE(n), a = kE(n), r()[0] < 0 ? (i = Ul(i), a = Ul(a), e(jE, IE)) : e(Bl, Fl), t;
  }
  return t.base = function(u) {
    return arguments.length ? (n = +u, o()) : n;
  }, t.domain = function(u) {
    return arguments.length ? (r(u), o()) : r();
  }, t.ticks = (u) => {
    const c = r();
    let s = c[0], f = c[c.length - 1];
    const l = f < s;
    l && ([s, f] = [f, s]);
    let d = i(s), p = i(f), g, y;
    const v = u == null ? 10 : +u;
    let x = [];
    if (!(n % 1) && p - d < v) {
      if (d = Math.floor(d), p = Math.ceil(p), s > 0) {
        for (; d <= p; ++d)
          for (g = 1; g < n; ++g)
            if (y = d < 0 ? g / a(-d) : g * a(d), !(y < s)) {
              if (y > f)
                break;
              x.push(y);
            }
      } else
        for (; d <= p; ++d)
          for (g = n - 1; g >= 1; --g)
            if (y = d > 0 ? g / a(-d) : g * a(d), !(y < s)) {
              if (y > f)
                break;
              x.push(y);
            }
      x.length * 2 < v && (x = Ko(s, f, v));
    } else
      x = Ko(d, p, Math.min(p - d, v)).map(a);
    return l ? x.reverse() : x;
  }, t.tickFormat = (u, c) => {
    if (u == null && (u = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = yn(c)).precision == null && (c.trim = !0), c = yc(c)), u === 1 / 0)
      return c;
    const s = Math.max(1, n * u / t.ticks().length);
    return (f) => {
      let l = f / a(Math.round(i(f)));
      return l * n < n - 0.5 && (l *= n), l <= s ? c(f) : "";
    };
  }, t.nice = () => r(mh(r(), {
    floor: (u) => a(Math.floor(i(u))),
    ceil: (u) => a(Math.ceil(i(u)))
  })), t;
}
function bh() {
  const e = gc(wa()).domain([1, 10]);
  return e.copy = () => Kn(e, bh()).base(e.base()), Ve.apply(e, arguments), e;
}
function Wl(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function ql(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function mc(e) {
  var t = 1, r = e(Wl(t), ql(t));
  return r.constant = function(n) {
    return arguments.length ? e(Wl(t = +n), ql(t)) : t;
  }, jt(r);
}
function xh() {
  var e = mc(wa());
  return e.copy = function() {
    return Kn(e, xh()).constant(e.constant());
  }, Ve.apply(e, arguments);
}
function zl(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function DE(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function RE(e) {
  return e < 0 ? -e * e : e * e;
}
function bc(e) {
  var t = e(Te, Te), r = 1;
  function n() {
    return r === 1 ? e(Te, Te) : r === 0.5 ? e(DE, RE) : e(zl(r), zl(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, jt(t);
}
function xc() {
  var e = bc(wa());
  return e.copy = function() {
    return Kn(e, xc()).exponent(e.exponent());
  }, Ve.apply(e, arguments), e;
}
function LE() {
  return xc.apply(null, arguments).exponent(0.5);
}
function Hl(e) {
  return Math.sign(e) * e * e;
}
function BE(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function wh() {
  var e = hc(), t = [0, 1], r = !1, n;
  function i(a) {
    var o = BE(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e.invert(Hl(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, Ni)).map(Hl)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return wh(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Ve.apply(i, arguments), jt(i);
}
function Oh() {
  var e = [], t = [], r = [], n;
  function i() {
    var o = 0, u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; )
      r[o - 1] = zT(e, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[zn(r, o)];
  }
  return a.invertExtent = function(o) {
    var u = t.indexOf(o);
    return u < 0 ? [NaN, NaN] : [
      u > 0 ? r[u - 1] : e[0],
      u < r.length ? r[u] : e[e.length - 1]
    ];
  }, a.domain = function(o) {
    if (!arguments.length)
      return e.slice();
    e = [];
    for (let u of o)
      u != null && !isNaN(u = +u) && e.push(u);
    return e.sort(Pt), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return Oh().domain(e).range(t).unknown(n);
  }, Ve.apply(a, arguments);
}
function Sh() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(c) {
    return c != null && c <= c ? i[zn(n, c, 0, r)] : a;
  }
  function u() {
    var c = -1;
    for (n = new Array(r); ++c < r; )
      n[c] = ((c + 1) * t - (c - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(c) {
    return arguments.length ? ([e, t] = c, e = +e, t = +t, u()) : [e, t];
  }, o.range = function(c) {
    return arguments.length ? (r = (i = Array.from(c)).length - 1, u()) : i.slice();
  }, o.invertExtent = function(c) {
    var s = i.indexOf(c);
    return s < 0 ? [NaN, NaN] : s < 1 ? [e, n[0]] : s >= r ? [n[r - 1], t] : [n[s - 1], n[s]];
  }, o.unknown = function(c) {
    return arguments.length && (a = c), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return Sh().domain([e, t]).range(i).unknown(a);
  }, Ve.apply(jt(o), arguments);
}
function Ah() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[zn(e, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), i) : e.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var o = t.indexOf(a);
    return [e[o - 1], e[o]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return Ah().domain(e).range(t).unknown(r);
  }, Ve.apply(i, arguments);
}
const ro = /* @__PURE__ */ new Date(), no = /* @__PURE__ */ new Date();
function Oe(e, t, r, n) {
  function i(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = (a) => {
    const o = i(a), u = i.ceil(a);
    return a - o < u - a ? o : u;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, u) => {
    const c = [];
    if (a = i.ceil(a), u = u == null ? 1 : Math.floor(u), !(a < o) || !(u > 0))
      return c;
    let s;
    do
      c.push(s = /* @__PURE__ */ new Date(+a)), t(a, u), e(a);
    while (s < a && a < o);
    return c;
  }, i.filter = (a) => Oe((o) => {
    if (o >= o)
      for (; e(o), !a(o); )
        o.setTime(o - 1);
  }, (o, u) => {
    if (o >= o)
      if (u < 0)
        for (; ++u <= 0; )
          for (; t(o, -1), !a(o); )
            ;
      else
        for (; --u >= 0; )
          for (; t(o, 1), !a(o); )
            ;
  }), r && (i.count = (a, o) => (ro.setTime(+a), no.setTime(+o), e(ro), e(no), Math.floor(r(ro, no))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const Li = Oe(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Li.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Oe((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Li);
Li.range;
const pt = 1e3, Ge = pt * 60, ht = Ge * 60, mt = ht * 24, wc = mt * 7, Kl = mt * 30, io = mt * 365, Ht = Oe((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * pt);
}, (e, t) => (t - e) / pt, (e) => e.getUTCSeconds());
Ht.range;
const Oc = Oe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * pt);
}, (e, t) => {
  e.setTime(+e + t * Ge);
}, (e, t) => (t - e) / Ge, (e) => e.getMinutes());
Oc.range;
const Sc = Oe((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ge);
}, (e, t) => (t - e) / Ge, (e) => e.getUTCMinutes());
Sc.range;
const Ac = Oe((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * pt - e.getMinutes() * Ge);
}, (e, t) => {
  e.setTime(+e + t * ht);
}, (e, t) => (t - e) / ht, (e) => e.getHours());
Ac.range;
const _c = Oe((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * ht);
}, (e, t) => (t - e) / ht, (e) => e.getUTCHours());
_c.range;
const Gn = Oe(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ge) / mt,
  (e) => e.getDate() - 1
);
Gn.range;
const Oa = Oe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / mt, (e) => e.getUTCDate() - 1);
Oa.range;
const _h = Oe((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / mt, (e) => Math.floor(e / mt));
_h.range;
function er(e) {
  return Oe((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Ge) / wc);
}
const Sa = er(0), Bi = er(1), FE = er(2), UE = er(3), mr = er(4), WE = er(5), qE = er(6);
Sa.range;
Bi.range;
FE.range;
UE.range;
mr.range;
WE.range;
qE.range;
function tr(e) {
  return Oe((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / wc);
}
const Aa = tr(0), Fi = tr(1), zE = tr(2), HE = tr(3), br = tr(4), KE = tr(5), GE = tr(6);
Aa.range;
Fi.range;
zE.range;
HE.range;
br.range;
KE.range;
GE.range;
const $c = Oe((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
$c.range;
const Pc = Oe((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Pc.range;
const bt = Oe((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
bt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Oe((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
bt.range;
const xt = Oe((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
xt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Oe((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
xt.range;
function $h(e, t, r, n, i, a) {
  const o = [
    [Ht, 1, pt],
    [Ht, 5, 5 * pt],
    [Ht, 15, 15 * pt],
    [Ht, 30, 30 * pt],
    [a, 1, Ge],
    [a, 5, 5 * Ge],
    [a, 15, 15 * Ge],
    [a, 30, 30 * Ge],
    [i, 1, ht],
    [i, 3, 3 * ht],
    [i, 6, 6 * ht],
    [i, 12, 12 * ht],
    [n, 1, mt],
    [n, 2, 2 * mt],
    [r, 1, wc],
    [t, 1, Kl],
    [t, 3, 3 * Kl],
    [e, 1, io]
  ];
  function u(s, f, l) {
    const d = f < s;
    d && ([s, f] = [f, s]);
    const p = l && typeof l.range == "function" ? l : c(s, f, l), g = p ? p.range(s, +f + 1) : [];
    return d ? g.reverse() : g;
  }
  function c(s, f, l) {
    const d = Math.abs(f - s) / l, p = sc(([, , v]) => v).right(o, d);
    if (p === o.length)
      return e.every(Xo(s / io, f / io, l));
    if (p === 0)
      return Li.every(Math.max(Xo(s, f, l), 1));
    const [g, y] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
    return g.every(y);
  }
  return [u, c];
}
const [XE, VE] = $h(xt, Pc, Aa, _h, _c, Sc), [YE, ZE] = $h(bt, $c, Sa, Gn, Ac, Oc);
function ao(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function oo(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function qr(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function JE(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, o = e.shortDays, u = e.months, c = e.shortMonths, s = zr(i), f = Hr(i), l = zr(a), d = Hr(a), p = zr(o), g = Hr(o), y = zr(u), v = Hr(u), x = zr(c), b = Hr(c), w = {
    a: D,
    A: R,
    b: F,
    B: V,
    c: null,
    d: Jl,
    e: Jl,
    f: wM,
    g: jM,
    G: CM,
    H: mM,
    I: bM,
    j: xM,
    L: Ph,
    m: OM,
    M: SM,
    p: Y,
    q,
    Q: tf,
    s: rf,
    S: AM,
    u: _M,
    U: $M,
    V: PM,
    w: TM,
    W: EM,
    x: null,
    X: null,
    y: MM,
    Y: IM,
    Z: kM,
    "%": ef
  }, m = {
    a: ie,
    A: Ie,
    b: Ce,
    B: kt,
    c: null,
    d: Ql,
    e: Ql,
    f: LM,
    g: XM,
    G: YM,
    H: NM,
    I: DM,
    j: RM,
    L: Eh,
    m: BM,
    M: FM,
    p: Ye,
    q: Ee,
    Q: tf,
    s: rf,
    S: UM,
    u: WM,
    U: qM,
    V: zM,
    w: HM,
    W: KM,
    x: null,
    X: null,
    y: GM,
    Y: VM,
    Z: ZM,
    "%": ef
  }, h = {
    a: E,
    A: T,
    b: P,
    B: C,
    c: j,
    d: Yl,
    e: Yl,
    f: hM,
    g: Vl,
    G: Xl,
    H: Zl,
    I: Zl,
    j: lM,
    L: pM,
    m: sM,
    M: fM,
    p: M,
    q: cM,
    Q: yM,
    s: gM,
    S: dM,
    u: nM,
    U: iM,
    V: aM,
    w: rM,
    W: oM,
    x: N,
    X: k,
    y: Vl,
    Y: Xl,
    Z: uM,
    "%": vM
  };
  w.x = O(r, w), w.X = O(n, w), w.c = O(t, w), m.x = O(r, m), m.X = O(n, m), m.c = O(t, m);
  function O(L, z) {
    return function(K) {
      var $ = [], se = -1, G = 0, ve = L.length, ge, ke, lt;
      for (K instanceof Date || (K = /* @__PURE__ */ new Date(+K)); ++se < ve; )
        L.charCodeAt(se) === 37 && ($.push(L.slice(G, se)), (ke = Gl[ge = L.charAt(++se)]) != null ? ge = L.charAt(++se) : ke = ge === "e" ? " " : "0", (lt = z[ge]) && (ge = lt(K, ke)), $.push(ge), G = se + 1);
      return $.push(L.slice(G, se)), $.join("");
    };
  }
  function S(L, z) {
    return function(K) {
      var $ = qr(1900, void 0, 1), se = A($, L, K += "", 0), G, ve;
      if (se != K.length)
        return null;
      if ("Q" in $)
        return new Date($.Q);
      if ("s" in $)
        return new Date($.s * 1e3 + ("L" in $ ? $.L : 0));
      if (z && !("Z" in $) && ($.Z = 0), "p" in $ && ($.H = $.H % 12 + $.p * 12), $.m === void 0 && ($.m = "q" in $ ? $.q : 0), "V" in $) {
        if ($.V < 1 || $.V > 53)
          return null;
        "w" in $ || ($.w = 1), "Z" in $ ? (G = oo(qr($.y, 0, 1)), ve = G.getUTCDay(), G = ve > 4 || ve === 0 ? Fi.ceil(G) : Fi(G), G = Oa.offset(G, ($.V - 1) * 7), $.y = G.getUTCFullYear(), $.m = G.getUTCMonth(), $.d = G.getUTCDate() + ($.w + 6) % 7) : (G = ao(qr($.y, 0, 1)), ve = G.getDay(), G = ve > 4 || ve === 0 ? Bi.ceil(G) : Bi(G), G = Gn.offset(G, ($.V - 1) * 7), $.y = G.getFullYear(), $.m = G.getMonth(), $.d = G.getDate() + ($.w + 6) % 7);
      } else
        ("W" in $ || "U" in $) && ("w" in $ || ($.w = "u" in $ ? $.u % 7 : "W" in $ ? 1 : 0), ve = "Z" in $ ? oo(qr($.y, 0, 1)).getUTCDay() : ao(qr($.y, 0, 1)).getDay(), $.m = 0, $.d = "W" in $ ? ($.w + 6) % 7 + $.W * 7 - (ve + 5) % 7 : $.w + $.U * 7 - (ve + 6) % 7);
      return "Z" in $ ? ($.H += $.Z / 100 | 0, $.M += $.Z % 100, oo($)) : ao($);
    };
  }
  function A(L, z, K, $) {
    for (var se = 0, G = z.length, ve = K.length, ge, ke; se < G; ) {
      if ($ >= ve)
        return -1;
      if (ge = z.charCodeAt(se++), ge === 37) {
        if (ge = z.charAt(se++), ke = h[ge in Gl ? z.charAt(se++) : ge], !ke || ($ = ke(L, K, $)) < 0)
          return -1;
      } else if (ge != K.charCodeAt($++))
        return -1;
    }
    return $;
  }
  function M(L, z, K) {
    var $ = s.exec(z.slice(K));
    return $ ? (L.p = f.get($[0].toLowerCase()), K + $[0].length) : -1;
  }
  function E(L, z, K) {
    var $ = p.exec(z.slice(K));
    return $ ? (L.w = g.get($[0].toLowerCase()), K + $[0].length) : -1;
  }
  function T(L, z, K) {
    var $ = l.exec(z.slice(K));
    return $ ? (L.w = d.get($[0].toLowerCase()), K + $[0].length) : -1;
  }
  function P(L, z, K) {
    var $ = x.exec(z.slice(K));
    return $ ? (L.m = b.get($[0].toLowerCase()), K + $[0].length) : -1;
  }
  function C(L, z, K) {
    var $ = y.exec(z.slice(K));
    return $ ? (L.m = v.get($[0].toLowerCase()), K + $[0].length) : -1;
  }
  function j(L, z, K) {
    return A(L, t, z, K);
  }
  function N(L, z, K) {
    return A(L, r, z, K);
  }
  function k(L, z, K) {
    return A(L, n, z, K);
  }
  function D(L) {
    return o[L.getDay()];
  }
  function R(L) {
    return a[L.getDay()];
  }
  function F(L) {
    return c[L.getMonth()];
  }
  function V(L) {
    return u[L.getMonth()];
  }
  function Y(L) {
    return i[+(L.getHours() >= 12)];
  }
  function q(L) {
    return 1 + ~~(L.getMonth() / 3);
  }
  function ie(L) {
    return o[L.getUTCDay()];
  }
  function Ie(L) {
    return a[L.getUTCDay()];
  }
  function Ce(L) {
    return c[L.getUTCMonth()];
  }
  function kt(L) {
    return u[L.getUTCMonth()];
  }
  function Ye(L) {
    return i[+(L.getUTCHours() >= 12)];
  }
  function Ee(L) {
    return 1 + ~~(L.getUTCMonth() / 3);
  }
  return {
    format: function(L) {
      var z = O(L += "", w);
      return z.toString = function() {
        return L;
      }, z;
    },
    parse: function(L) {
      var z = S(L += "", !1);
      return z.toString = function() {
        return L;
      }, z;
    },
    utcFormat: function(L) {
      var z = O(L += "", m);
      return z.toString = function() {
        return L;
      }, z;
    },
    utcParse: function(L) {
      var z = S(L += "", !0);
      return z.toString = function() {
        return L;
      }, z;
    }
  };
}
var Gl = { "-": "", _: " ", 0: "0" }, Ae = /^\s*\d+/, QE = /^%/, eM = /[\\^$*+?|[\]().{}]/g;
function ee(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function tM(e) {
  return e.replace(eM, "\\$&");
}
function zr(e) {
  return new RegExp("^(?:" + e.map(tM).join("|") + ")", "i");
}
function Hr(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function rM(e, t, r) {
  var n = Ae.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function nM(e, t, r) {
  var n = Ae.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function iM(e, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function aM(e, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function oM(e, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Xl(e, t, r) {
  var n = Ae.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function Vl(e, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function uM(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function cM(e, t, r) {
  var n = Ae.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function sM(e, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function Yl(e, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function lM(e, t, r) {
  var n = Ae.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function Zl(e, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function fM(e, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function dM(e, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function pM(e, t, r) {
  var n = Ae.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function hM(e, t, r) {
  var n = Ae.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function vM(e, t, r) {
  var n = QE.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function yM(e, t, r) {
  var n = Ae.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function gM(e, t, r) {
  var n = Ae.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Jl(e, t) {
  return ee(e.getDate(), t, 2);
}
function mM(e, t) {
  return ee(e.getHours(), t, 2);
}
function bM(e, t) {
  return ee(e.getHours() % 12 || 12, t, 2);
}
function xM(e, t) {
  return ee(1 + Gn.count(bt(e), e), t, 3);
}
function Ph(e, t) {
  return ee(e.getMilliseconds(), t, 3);
}
function wM(e, t) {
  return Ph(e, t) + "000";
}
function OM(e, t) {
  return ee(e.getMonth() + 1, t, 2);
}
function SM(e, t) {
  return ee(e.getMinutes(), t, 2);
}
function AM(e, t) {
  return ee(e.getSeconds(), t, 2);
}
function _M(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function $M(e, t) {
  return ee(Sa.count(bt(e) - 1, e), t, 2);
}
function Th(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? mr(e) : mr.ceil(e);
}
function PM(e, t) {
  return e = Th(e), ee(mr.count(bt(e), e) + (bt(e).getDay() === 4), t, 2);
}
function TM(e) {
  return e.getDay();
}
function EM(e, t) {
  return ee(Bi.count(bt(e) - 1, e), t, 2);
}
function MM(e, t) {
  return ee(e.getFullYear() % 100, t, 2);
}
function jM(e, t) {
  return e = Th(e), ee(e.getFullYear() % 100, t, 2);
}
function IM(e, t) {
  return ee(e.getFullYear() % 1e4, t, 4);
}
function CM(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? mr(e) : mr.ceil(e), ee(e.getFullYear() % 1e4, t, 4);
}
function kM(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ee(t / 60 | 0, "0", 2) + ee(t % 60, "0", 2);
}
function Ql(e, t) {
  return ee(e.getUTCDate(), t, 2);
}
function NM(e, t) {
  return ee(e.getUTCHours(), t, 2);
}
function DM(e, t) {
  return ee(e.getUTCHours() % 12 || 12, t, 2);
}
function RM(e, t) {
  return ee(1 + Oa.count(xt(e), e), t, 3);
}
function Eh(e, t) {
  return ee(e.getUTCMilliseconds(), t, 3);
}
function LM(e, t) {
  return Eh(e, t) + "000";
}
function BM(e, t) {
  return ee(e.getUTCMonth() + 1, t, 2);
}
function FM(e, t) {
  return ee(e.getUTCMinutes(), t, 2);
}
function UM(e, t) {
  return ee(e.getUTCSeconds(), t, 2);
}
function WM(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function qM(e, t) {
  return ee(Aa.count(xt(e) - 1, e), t, 2);
}
function Mh(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? br(e) : br.ceil(e);
}
function zM(e, t) {
  return e = Mh(e), ee(br.count(xt(e), e) + (xt(e).getUTCDay() === 4), t, 2);
}
function HM(e) {
  return e.getUTCDay();
}
function KM(e, t) {
  return ee(Fi.count(xt(e) - 1, e), t, 2);
}
function GM(e, t) {
  return ee(e.getUTCFullYear() % 100, t, 2);
}
function XM(e, t) {
  return e = Mh(e), ee(e.getUTCFullYear() % 100, t, 2);
}
function VM(e, t) {
  return ee(e.getUTCFullYear() % 1e4, t, 4);
}
function YM(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? br(e) : br.ceil(e), ee(e.getUTCFullYear() % 1e4, t, 4);
}
function ZM() {
  return "+0000";
}
function ef() {
  return "%";
}
function tf(e) {
  return +e;
}
function rf(e) {
  return Math.floor(+e / 1e3);
}
var nr, jh, Ih;
JM({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function JM(e) {
  return nr = JE(e), jh = nr.format, nr.parse, Ih = nr.utcFormat, nr.utcParse, nr;
}
function QM(e) {
  return new Date(e);
}
function ej(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Tc(e, t, r, n, i, a, o, u, c, s) {
  var f = hc(), l = f.invert, d = f.domain, p = s(".%L"), g = s(":%S"), y = s("%I:%M"), v = s("%I %p"), x = s("%a %d"), b = s("%b %d"), w = s("%B"), m = s("%Y");
  function h(O) {
    return (c(O) < O ? p : u(O) < O ? g : o(O) < O ? y : a(O) < O ? v : n(O) < O ? i(O) < O ? x : b : r(O) < O ? w : m)(O);
  }
  return f.invert = function(O) {
    return new Date(l(O));
  }, f.domain = function(O) {
    return arguments.length ? d(Array.from(O, ej)) : d().map(QM);
  }, f.ticks = function(O) {
    var S = d();
    return e(S[0], S[S.length - 1], O ?? 10);
  }, f.tickFormat = function(O, S) {
    return S == null ? h : s(S);
  }, f.nice = function(O) {
    var S = d();
    return (!O || typeof O.range != "function") && (O = t(S[0], S[S.length - 1], O ?? 10)), O ? d(mh(S, O)) : f;
  }, f.copy = function() {
    return Kn(f, Tc(e, t, r, n, i, a, o, u, c, s));
  }, f;
}
function tj() {
  return Ve.apply(Tc(YE, ZE, bt, $c, Sa, Gn, Ac, Oc, Ht, jh).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function rj() {
  return Ve.apply(Tc(XE, VE, xt, Pc, Aa, Oa, _c, Sc, Ht, Ih).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function _a() {
  var e = 0, t = 1, r, n, i, a, o = Te, u = !1, c;
  function s(l) {
    return l == null || isNaN(l = +l) ? c : o(i === 0 ? 0.5 : (l = (a(l) - r) * i, u ? Math.max(0, Math.min(1, l)) : l));
  }
  s.domain = function(l) {
    return arguments.length ? ([e, t] = l, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), s) : [e, t];
  }, s.clamp = function(l) {
    return arguments.length ? (u = !!l, s) : u;
  }, s.interpolator = function(l) {
    return arguments.length ? (o = l, s) : o;
  };
  function f(l) {
    return function(d) {
      var p, g;
      return arguments.length ? ([p, g] = d, o = l(p, g), s) : [o(0), o(1)];
    };
  }
  return s.range = f(Dr), s.rangeRound = f(pc), s.unknown = function(l) {
    return arguments.length ? (c = l, s) : c;
  }, function(l) {
    return a = l, r = l(e), n = l(t), i = r === n ? 0 : 1 / (n - r), s;
  };
}
function It(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Ch() {
  var e = jt(_a()(Te));
  return e.copy = function() {
    return It(e, Ch());
  }, At.apply(e, arguments);
}
function kh() {
  var e = gc(_a()).domain([1, 10]);
  return e.copy = function() {
    return It(e, kh()).base(e.base());
  }, At.apply(e, arguments);
}
function Nh() {
  var e = mc(_a());
  return e.copy = function() {
    return It(e, Nh()).constant(e.constant());
  }, At.apply(e, arguments);
}
function Ec() {
  var e = bc(_a());
  return e.copy = function() {
    return It(e, Ec()).exponent(e.exponent());
  }, At.apply(e, arguments);
}
function nj() {
  return Ec.apply(null, arguments).exponent(0.5);
}
function Dh() {
  var e = [], t = Te;
  function r(n) {
    if (n != null && !isNaN(n = +n))
      return t((zn(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length)
      return e.slice();
    e = [];
    for (let i of n)
      i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(Pt), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => qT(e, a / n));
  }, r.copy = function() {
    return Dh(t).domain(e);
  }, At.apply(r, arguments);
}
function $a() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, o, u, c, s = Te, f, l = !1, d;
  function p(y) {
    return isNaN(y = +y) ? d : (y = 0.5 + ((y = +f(y)) - a) * (n * y < n * a ? u : c), s(l ? Math.max(0, Math.min(1, y)) : y));
  }
  p.domain = function(y) {
    return arguments.length ? ([e, t, r] = y, i = f(e = +e), a = f(t = +t), o = f(r = +r), u = i === a ? 0 : 0.5 / (a - i), c = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, p) : [e, t, r];
  }, p.clamp = function(y) {
    return arguments.length ? (l = !!y, p) : l;
  }, p.interpolator = function(y) {
    return arguments.length ? (s = y, p) : s;
  };
  function g(y) {
    return function(v) {
      var x, b, w;
      return arguments.length ? ([x, b, w] = v, s = vE(y, [x, b, w]), p) : [s(0), s(0.5), s(1)];
    };
  }
  return p.range = g(Dr), p.rangeRound = g(pc), p.unknown = function(y) {
    return arguments.length ? (d = y, p) : d;
  }, function(y) {
    return f = y, i = y(e), a = y(t), o = y(r), u = i === a ? 0 : 0.5 / (a - i), c = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, p;
  };
}
function Rh() {
  var e = jt($a()(Te));
  return e.copy = function() {
    return It(e, Rh());
  }, At.apply(e, arguments);
}
function Lh() {
  var e = gc($a()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return It(e, Lh()).base(e.base());
  }, At.apply(e, arguments);
}
function Bh() {
  var e = mc($a());
  return e.copy = function() {
    return It(e, Bh()).constant(e.constant());
  }, At.apply(e, arguments);
}
function Mc() {
  var e = bc($a());
  return e.copy = function() {
    return It(e, Mc()).exponent(e.exponent());
  }, At.apply(e, arguments);
}
function ij() {
  return Mc.apply(null, arguments).exponent(0.5);
}
const nf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: dn,
  scaleDiverging: Rh,
  scaleDivergingLog: Lh,
  scaleDivergingPow: Mc,
  scaleDivergingSqrt: ij,
  scaleDivergingSymlog: Bh,
  scaleIdentity: gh,
  scaleImplicit: Vo,
  scaleLinear: Ri,
  scaleLog: bh,
  scaleOrdinal: lc,
  scalePoint: Zr,
  scalePow: xc,
  scaleQuantile: Oh,
  scaleQuantize: Sh,
  scaleRadial: wh,
  scaleSequential: Ch,
  scaleSequentialLog: kh,
  scaleSequentialPow: Ec,
  scaleSequentialQuantile: Dh,
  scaleSequentialSqrt: nj,
  scaleSequentialSymlog: Nh,
  scaleSqrt: LE,
  scaleSymlog: xh,
  scaleThreshold: Ah,
  scaleTime: tj,
  scaleUtc: rj,
  tickFormat: yh
}, Symbol.toStringTag, { value: "Module" }));
var aj = Tr;
function oj(e, t, r) {
  for (var n = -1, i = e.length; ++n < i; ) {
    var a = e[n], o = t(a);
    if (o != null && (u === void 0 ? o === o && !aj(o) : r(o, u)))
      var u = o, c = a;
  }
  return c;
}
var Pa = oj;
function uj(e, t) {
  return e > t;
}
var Fh = uj, cj = Pa, sj = Fh, lj = Nr;
function fj(e) {
  return e && e.length ? cj(e, lj, sj) : void 0;
}
var dj = fj;
const Ta = /* @__PURE__ */ ce(dj);
function pj(e, t) {
  return e < t;
}
var Uh = pj, hj = Pa, vj = Uh, yj = Nr;
function gj(e) {
  return e && e.length ? hj(e, yj, vj) : void 0;
}
var mj = gj;
const Ea = /* @__PURE__ */ ce(mj);
var bj = zu, xj = Mt, wj = Vp, Oj = je;
function Sj(e, t) {
  var r = Oj(e) ? bj : wj;
  return r(e, xj(t));
}
var Aj = Sj, _j = Gp, $j = Aj;
function Pj(e, t) {
  return _j($j(e, t), 1);
}
var Tj = Pj;
const Ej = /* @__PURE__ */ ce(Tj);
var Mj = ic;
function jj(e, t) {
  return Mj(e, t);
}
var Ij = jj;
const jc = /* @__PURE__ */ ce(Ij);
var Rr = 1e9, Cj = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, Cc, pe = !0, Xe = "[DecimalError] ", Vt = Xe + "Invalid argument: ", Ic = Xe + "Exponent out of range: ", Lr = Math.floor, Ut = Math.pow, kj = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, De, Se = 1e7, fe = 7, Wh = 9007199254740991, Ui = Lr(Wh / fe), U = {};
U.absoluteValue = U.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
U.comparedTo = U.cmp = function(e) {
  var t, r, n, i, a = this;
  if (e = new a.constructor(e), a.s !== e.s)
    return a.s || -e.s;
  if (a.e !== e.e)
    return a.e > e.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t])
      return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
U.decimalPlaces = U.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * fe;
  if (t = e.d[t], t)
    for (; t % 10 == 0; t /= 10)
      r--;
  return r < 0 ? 0 : r;
};
U.dividedBy = U.div = function(e) {
  return gt(this, new this.constructor(e));
};
U.dividedToIntegerBy = U.idiv = function(e) {
  var t = this, r = t.constructor;
  return ae(gt(t, new r(e), 0, 1), r.precision);
};
U.equals = U.eq = function(e) {
  return !this.cmp(e);
};
U.exponent = function() {
  return me(this);
};
U.greaterThan = U.gt = function(e) {
  return this.cmp(e) > 0;
};
U.greaterThanOrEqualTo = U.gte = function(e) {
  return this.cmp(e) >= 0;
};
U.isInteger = U.isint = function() {
  return this.e > this.d.length - 2;
};
U.isNegative = U.isneg = function() {
  return this.s < 0;
};
U.isPositive = U.ispos = function() {
  return this.s > 0;
};
U.isZero = function() {
  return this.s === 0;
};
U.lessThan = U.lt = function(e) {
  return this.cmp(e) < 0;
};
U.lessThanOrEqualTo = U.lte = function(e) {
  return this.cmp(e) < 1;
};
U.logarithm = U.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(De))
    throw Error(Xe + "NaN");
  if (r.s < 1)
    throw Error(Xe + (r.s ? "NaN" : "-Infinity"));
  return r.eq(De) ? new n(0) : (pe = !1, t = gt(gn(r, a), gn(e, a), a), pe = !0, ae(t, i));
};
U.minus = U.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? Hh(t, e) : qh(t, (e.s = -e.s, e));
};
U.modulo = U.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s)
    throw Error(Xe + "NaN");
  return r.s ? (pe = !1, t = gt(r, e, 0, 1).times(e), pe = !0, r.minus(t)) : ae(new n(r), i);
};
U.naturalExponential = U.exp = function() {
  return zh(this);
};
U.naturalLogarithm = U.ln = function() {
  return gn(this);
};
U.negated = U.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
U.plus = U.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? qh(t, e) : Hh(t, (e.s = -e.s, e));
};
U.precision = U.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Vt + e);
  if (t = me(i) + 1, n = i.d.length - 1, r = n * fe + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = i.d[0]; n >= 10; n /= 10)
      r++;
  }
  return e && t > r ? t : r;
};
U.squareRoot = U.sqrt = function() {
  var e, t, r, n, i, a, o, u = this, c = u.constructor;
  if (u.s < 1) {
    if (!u.s)
      return new c(0);
    throw Error(Xe + "NaN");
  }
  for (e = me(u), pe = !1, i = Math.sqrt(+u), i == 0 || i == 1 / 0 ? (t = nt(u.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = Lr((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new c(t)) : n = new c(i.toString()), r = c.precision, i = o = r + 3; ; )
    if (a = n, n = a.plus(gt(u, a, o + 2)).times(0.5), nt(a.d).slice(0, o) === (t = nt(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
        if (ae(a, r + 1, 0), a.times(a).eq(u)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return pe = !0, ae(n, r);
};
U.times = U.mul = function(e) {
  var t, r, n, i, a, o, u, c, s, f = this, l = f.constructor, d = f.d, p = (e = new l(e)).d;
  if (!f.s || !e.s)
    return new l(0);
  for (e.s *= f.s, r = f.e + e.e, c = d.length, s = p.length, c < s && (a = d, d = p, p = a, o = c, c = s, s = o), a = [], o = c + s, n = o; n--; )
    a.push(0);
  for (n = s; --n >= 0; ) {
    for (t = 0, i = c + n; i > n; )
      u = a[i] + p[n] * d[i - n - 1] + t, a[i--] = u % Se | 0, t = u / Se | 0;
    a[i] = (a[i] + t) % Se | 0;
  }
  for (; !a[--o]; )
    a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, pe ? ae(e, l.precision) : e;
};
U.toDecimalPlaces = U.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (ct(e, 0, Rr), t === void 0 ? t = n.rounding : ct(t, 0, 8), ae(r, e + me(r) + 1, t));
};
U.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = Zt(n, !0) : (ct(e, 0, Rr), t === void 0 ? t = i.rounding : ct(t, 0, 8), n = ae(new i(n), e + 1, t), r = Zt(n, !0, e + 1)), r;
};
U.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? Zt(i) : (ct(e, 0, Rr), t === void 0 ? t = a.rounding : ct(t, 0, 8), n = ae(new a(i), e + me(i) + 1, t), r = Zt(n.abs(), !1, e + me(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
U.toInteger = U.toint = function() {
  var e = this, t = e.constructor;
  return ae(new t(e), me(e) + 1, t.rounding);
};
U.toNumber = function() {
  return +this;
};
U.toPower = U.pow = function(e) {
  var t, r, n, i, a, o, u = this, c = u.constructor, s = 12, f = +(e = new c(e));
  if (!e.s)
    return new c(De);
  if (u = new c(u), !u.s) {
    if (e.s < 1)
      throw Error(Xe + "Infinity");
    return u;
  }
  if (u.eq(De))
    return u;
  if (n = c.precision, e.eq(De))
    return ae(u, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, a = u.s, o) {
    if ((r = f < 0 ? -f : f) <= Wh) {
      for (i = new c(De), t = Math.ceil(n / fe + 4), pe = !1; r % 2 && (i = i.times(u), of(i.d, t)), r = Lr(r / 2), r !== 0; )
        u = u.times(u), of(u.d, t);
      return pe = !0, e.s < 0 ? new c(De).div(i) : ae(i, n);
    }
  } else if (a < 0)
    throw Error(Xe + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, u.s = 1, pe = !1, i = e.times(gn(u, n + s)), pe = !0, i = zh(i), i.s = a, i;
};
U.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = me(i), n = Zt(i, r <= a.toExpNeg || r >= a.toExpPos)) : (ct(e, 1, Rr), t === void 0 ? t = a.rounding : ct(t, 0, 8), i = ae(new a(i), e, t), r = me(i), n = Zt(i, e <= r || r <= a.toExpNeg, e)), n;
};
U.toSignificantDigits = U.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (ct(e, 1, Rr), t === void 0 ? t = n.rounding : ct(t, 0, 8)), ae(new n(r), e, t);
};
U.toString = U.valueOf = U.val = U.toJSON = U[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = me(e), r = e.constructor;
  return Zt(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function qh(e, t) {
  var r, n, i, a, o, u, c, s, f = e.constructor, l = f.precision;
  if (!e.s || !t.s)
    return t.s || (t = new f(e)), pe ? ae(t, l) : t;
  if (c = e.d, s = t.d, o = e.e, i = t.e, c = c.slice(), a = o - i, a) {
    for (a < 0 ? (n = c, a = -a, u = s.length) : (n = s, i = o, u = c.length), o = Math.ceil(l / fe), u = o > u ? o + 1 : u + 1, a > u && (a = u, n.length = 1), n.reverse(); a--; )
      n.push(0);
    n.reverse();
  }
  for (u = c.length, a = s.length, u - a < 0 && (a = u, n = s, s = c, c = n), r = 0; a; )
    r = (c[--a] = c[a] + s[a] + r) / Se | 0, c[a] %= Se;
  for (r && (c.unshift(r), ++i), u = c.length; c[--u] == 0; )
    c.pop();
  return t.d = c, t.e = i, pe ? ae(t, l) : t;
}
function ct(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Vt + e);
}
function nt(e) {
  var t, r, n, i = e.length - 1, a = "", o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      n = e[t] + "", r = fe - n.length, r && (a += $t(r)), a += n;
    o = e[t], n = o + "", r = fe - n.length, r && (a += $t(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; )
    o /= 10;
  return a + o;
}
var gt = /* @__PURE__ */ function() {
  function e(n, i) {
    var a, o = 0, u = n.length;
    for (n = n.slice(); u--; )
      a = n[u] * i + o, n[u] = a % Se | 0, o = a / Se | 0;
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var u, c;
    if (a != o)
      c = a > o ? 1 : -1;
    else
      for (u = c = 0; u < a; u++)
        if (n[u] != i[u]) {
          c = n[u] > i[u] ? 1 : -1;
          break;
        }
    return c;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * Se + n[a] - i[a];
    for (; !n[0] && n.length > 1; )
      n.shift();
  }
  return function(n, i, a, o) {
    var u, c, s, f, l, d, p, g, y, v, x, b, w, m, h, O, S, A, M = n.constructor, E = n.s == i.s ? 1 : -1, T = n.d, P = i.d;
    if (!n.s)
      return new M(n);
    if (!i.s)
      throw Error(Xe + "Division by zero");
    for (c = n.e - i.e, S = P.length, h = T.length, p = new M(E), g = p.d = [], s = 0; P[s] == (T[s] || 0); )
      ++s;
    if (P[s] > (T[s] || 0) && --c, a == null ? b = a = M.precision : o ? b = a + (me(n) - me(i)) + 1 : b = a, b < 0)
      return new M(0);
    if (b = b / fe + 2 | 0, s = 0, S == 1)
      for (f = 0, P = P[0], b++; (s < h || f) && b--; s++)
        w = f * Se + (T[s] || 0), g[s] = w / P | 0, f = w % P | 0;
    else {
      for (f = Se / (P[0] + 1) | 0, f > 1 && (P = e(P, f), T = e(T, f), S = P.length, h = T.length), m = S, y = T.slice(0, S), v = y.length; v < S; )
        y[v++] = 0;
      A = P.slice(), A.unshift(0), O = P[0], P[1] >= Se / 2 && ++O;
      do
        f = 0, u = t(P, y, S, v), u < 0 ? (x = y[0], S != v && (x = x * Se + (y[1] || 0)), f = x / O | 0, f > 1 ? (f >= Se && (f = Se - 1), l = e(P, f), d = l.length, v = y.length, u = t(l, y, d, v), u == 1 && (f--, r(l, S < d ? A : P, d))) : (f == 0 && (u = f = 1), l = P.slice()), d = l.length, d < v && l.unshift(0), r(y, l, v), u == -1 && (v = y.length, u = t(P, y, S, v), u < 1 && (f++, r(y, S < v ? A : P, v))), v = y.length) : u === 0 && (f++, y = [0]), g[s++] = f, u && y[0] ? y[v++] = T[m] || 0 : (y = [T[m]], v = 1);
      while ((m++ < h || y[0] !== void 0) && b--);
    }
    return g[0] || g.shift(), p.e = c, ae(p, o ? a + me(p) + 1 : a);
  };
}();
function zh(e, t) {
  var r, n, i, a, o, u, c = 0, s = 0, f = e.constructor, l = f.precision;
  if (me(e) > 16)
    throw Error(Ic + me(e));
  if (!e.s)
    return new f(De);
  for (t == null ? (pe = !1, u = l) : u = t, o = new f(0.03125); e.abs().gte(0.1); )
    e = e.times(o), s += 5;
  for (n = Math.log(Ut(2, s)) / Math.LN10 * 2 + 5 | 0, u += n, r = i = a = new f(De), f.precision = u; ; ) {
    if (i = ae(i.times(e), u), r = r.times(++c), o = a.plus(gt(i, r, u)), nt(o.d).slice(0, u) === nt(a.d).slice(0, u)) {
      for (; s--; )
        a = ae(a.times(a), u);
      return f.precision = l, t == null ? (pe = !0, ae(a, l)) : a;
    }
    a = o;
  }
}
function me(e) {
  for (var t = e.e * fe, r = e.d[0]; r >= 10; r /= 10)
    t++;
  return t;
}
function uo(e, t, r) {
  if (t > e.LN10.sd())
    throw pe = !0, r && (e.precision = r), Error(Xe + "LN10 precision limit exceeded");
  return ae(new e(e.LN10), t);
}
function $t(e) {
  for (var t = ""; e--; )
    t += "0";
  return t;
}
function gn(e, t) {
  var r, n, i, a, o, u, c, s, f, l = 1, d = 10, p = e, g = p.d, y = p.constructor, v = y.precision;
  if (p.s < 1)
    throw Error(Xe + (p.s ? "NaN" : "-Infinity"));
  if (p.eq(De))
    return new y(0);
  if (t == null ? (pe = !1, s = v) : s = t, p.eq(10))
    return t == null && (pe = !0), uo(y, s);
  if (s += d, y.precision = s, r = nt(g), n = r.charAt(0), a = me(p), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      p = p.times(e), r = nt(p.d), n = r.charAt(0), l++;
    a = me(p), n > 1 ? (p = new y("0." + r), a++) : p = new y(n + "." + r.slice(1));
  } else
    return c = uo(y, s + 2, v).times(a + ""), p = gn(new y(n + "." + r.slice(1)), s - d).plus(c), y.precision = v, t == null ? (pe = !0, ae(p, v)) : p;
  for (u = o = p = gt(p.minus(De), p.plus(De), s), f = ae(p.times(p), s), i = 3; ; ) {
    if (o = ae(o.times(f), s), c = u.plus(gt(o, new y(i), s)), nt(c.d).slice(0, s) === nt(u.d).slice(0, s))
      return u = u.times(2), a !== 0 && (u = u.plus(uo(y, s + 2, v).times(a + ""))), u = gt(u, new y(l), s), y.precision = v, t == null ? (pe = !0, ae(u, v)) : u;
    u = c, i += 2;
  }
}
function af(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; )
    ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; )
    --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = Lr(r / fe), e.d = [], n = (r + 1) % fe, r < 0 && (n += fe), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= fe; n < i; )
        e.d.push(+t.slice(n, n += fe));
      t = t.slice(n), n = fe - t.length;
    } else
      n -= i;
    for (; n--; )
      t += "0";
    if (e.d.push(+t), pe && (e.e > Ui || e.e < -Ui))
      throw Error(Ic + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function ae(e, t, r) {
  var n, i, a, o, u, c, s, f, l = e.d;
  for (o = 1, a = l[0]; a >= 10; a /= 10)
    o++;
  if (n = t - o, n < 0)
    n += fe, i = t, s = l[f = 0];
  else {
    if (f = Math.ceil((n + 1) / fe), a = l.length, f >= a)
      return e;
    for (s = a = l[f], o = 1; a >= 10; a /= 10)
      o++;
    n %= fe, i = n - fe + o;
  }
  if (r !== void 0 && (a = Ut(10, o - i - 1), u = s / a % 10 | 0, c = t < 0 || l[f + 1] !== void 0 || s % a, c = r < 4 ? (u || c) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || c || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? s / Ut(10, o - i) : 0 : l[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !l[0])
    return c ? (a = me(e), l.length = 1, t = t - a - 1, l[0] = Ut(10, (fe - t % fe) % fe), e.e = Lr(-t / fe) || 0) : (l.length = 1, l[0] = e.e = e.s = 0), e;
  if (n == 0 ? (l.length = f, a = 1, f--) : (l.length = f + 1, a = Ut(10, fe - n), l[f] = i > 0 ? (s / Ut(10, o - i) % Ut(10, i) | 0) * a : 0), c)
    for (; ; )
      if (f == 0) {
        (l[0] += a) == Se && (l[0] = 1, ++e.e);
        break;
      } else {
        if (l[f] += a, l[f] != Se)
          break;
        l[f--] = 0, a = 1;
      }
  for (n = l.length; l[--n] === 0; )
    l.pop();
  if (pe && (e.e > Ui || e.e < -Ui))
    throw Error(Ic + me(e));
  return e;
}
function Hh(e, t) {
  var r, n, i, a, o, u, c, s, f, l, d = e.constructor, p = d.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new d(e), pe ? ae(t, p) : t;
  if (c = e.d, l = t.d, n = t.e, s = e.e, c = c.slice(), o = s - n, o) {
    for (f = o < 0, f ? (r = c, o = -o, u = l.length) : (r = l, n = s, u = c.length), i = Math.max(Math.ceil(p / fe), u) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; )
      r.push(0);
    r.reverse();
  } else {
    for (i = c.length, u = l.length, f = i < u, f && (u = i), i = 0; i < u; i++)
      if (c[i] != l[i]) {
        f = c[i] < l[i];
        break;
      }
    o = 0;
  }
  for (f && (r = c, c = l, l = r, t.s = -t.s), u = c.length, i = l.length - u; i > 0; --i)
    c[u++] = 0;
  for (i = l.length; i > o; ) {
    if (c[--i] < l[i]) {
      for (a = i; a && c[--a] === 0; )
        c[a] = Se - 1;
      --c[a], c[i] += Se;
    }
    c[i] -= l[i];
  }
  for (; c[--u] === 0; )
    c.pop();
  for (; c[0] === 0; c.shift())
    --n;
  return c[0] ? (t.d = c, t.e = n, pe ? ae(t, p) : t) : new d(0);
}
function Zt(e, t, r) {
  var n, i = me(e), a = nt(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + $t(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + $t(-i - 1) + a, r && (n = r - o) > 0 && (a += $t(n))) : i >= o ? (a += $t(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + $t(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += $t(n))), e.s < 0 ? "-" + a : a;
}
function of(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function Kh(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i))
      return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0)
        throw Error(Vt + a);
      if (a > 0)
        o.s = 1;
      else if (a < 0)
        a = -a, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        o.e = 0, o.d = [a];
        return;
      }
      return af(o, a.toString());
    } else if (typeof a != "string")
      throw Error(Vt + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, kj.test(a))
      af(o, a);
    else
      throw Error(Vt + a);
  }
  if (i.prototype = U, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = Kh, i.config = i.set = Nj, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; )
      e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function Nj(e) {
  if (!e || typeof e != "object")
    throw Error(Xe + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    Rr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[r = i[t]]) !== void 0)
      if (Lr(n) === n && n >= i[t + 1] && n <= i[t + 2])
        this[r] = n;
      else
        throw Error(Vt + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10)
      this[r] = new this(n);
    else
      throw Error(Vt + r + ": " + n);
  return this;
}
var Cc = Kh(Cj);
De = new Cc(1);
const ne = Cc;
function Dj(e) {
  return Fj(e) || Bj(e) || Lj(e) || Rj();
}
function Rj() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lj(e, t) {
  if (e) {
    if (typeof e == "string")
      return Qo(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Qo(e, t);
  }
}
function Bj(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function Fj(e) {
  if (Array.isArray(e))
    return Qo(e);
}
function Qo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var Uj = function(t) {
  return t;
}, Gh = {
  "@@functional/placeholder": !0
}, Xh = function(t) {
  return t === Gh;
}, uf = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && Xh(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, Wj = function e(t, r) {
  return t === 1 ? r : uf(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var o = i.filter(function(u) {
      return u !== Gh;
    }).length;
    return o >= t ? r.apply(void 0, i) : e(t - o, uf(function() {
      for (var u = arguments.length, c = new Array(u), s = 0; s < u; s++)
        c[s] = arguments[s];
      var f = i.map(function(l) {
        return Xh(l) ? c.shift() : l;
      });
      return r.apply(void 0, Dj(f).concat(c));
    }));
  });
}, Ma = function(t) {
  return Wj(t.length, t);
}, eu = function(t, r) {
  for (var n = [], i = t; i < r; ++i)
    n[i - t] = i;
  return n;
}, qj = Ma(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), zj = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return Uj;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce(function(u, c) {
      return c(u);
    }, a.apply(void 0, arguments));
  };
}, tu = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, Vh = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return r && a.every(function(u, c) {
      return u === r[c];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function Hj(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new ne(e).abs().log(10).toNumber()) + 1, t;
}
function Kj(e, t, r) {
  for (var n = new ne(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var Gj = Ma(function(e, t, r) {
  var n = +e, i = +t;
  return n + r * (i - n);
}), Xj = Ma(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), Vj = Ma(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const ja = {
  rangeStep: Kj,
  getDigitCount: Hj,
  interpolateNumber: Gj,
  uninterpolateNumber: Xj,
  uninterpolateTruncation: Vj
};
function ru(e) {
  return Jj(e) || Zj(e) || Yh(e) || Yj();
}
function Yj() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zj(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function Jj(e) {
  if (Array.isArray(e))
    return nu(e);
}
function mn(e, t) {
  return tI(e) || eI(e, t) || Yh(e, t) || Qj();
}
function Qj() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yh(e, t) {
  if (e) {
    if (typeof e == "string")
      return nu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return nu(e, t);
  }
}
function nu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function eI(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, a = void 0;
    try {
      for (var o = e[Symbol.iterator](), u; !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t)); n = !0)
        ;
    } catch (c) {
      i = !0, a = c;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i)
          throw a;
      }
    }
    return r;
  }
}
function tI(e) {
  if (Array.isArray(e))
    return e;
}
function Zh(e) {
  var t = mn(e, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function Jh(e, t, r) {
  if (e.lte(0))
    return new ne(0);
  var n = ja.getDigitCount(e.toNumber()), i = new ne(10).pow(n), a = e.div(i), o = n !== 1 ? 0.05 : 0.1, u = new ne(Math.ceil(a.div(o).toNumber())).add(r).mul(o), c = u.mul(i);
  return t ? c : new ne(Math.ceil(c));
}
function rI(e, t, r) {
  var n = 1, i = new ne(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new ne(10).pow(ja.getDigitCount(e) - 1), i = new ne(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new ne(Math.floor(e)));
  } else
    e === 0 ? i = new ne(Math.floor((t - 1) / 2)) : r || (i = new ne(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), u = zj(qj(function(c) {
    return i.add(new ne(c - o).mul(n)).toNumber();
  }), eu);
  return u(0, t);
}
function Qh(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new ne(0),
      tickMin: new ne(0),
      tickMax: new ne(0)
    };
  var a = Jh(new ne(t).sub(e).div(r - 1), n, i), o;
  e <= 0 && t >= 0 ? o = new ne(0) : (o = new ne(e).add(t).div(2), o = o.sub(new ne(o).mod(a)));
  var u = Math.ceil(o.sub(e).div(a).toNumber()), c = Math.ceil(new ne(t).sub(o).div(a).toNumber()), s = u + c + 1;
  return s > r ? Qh(e, t, r, n, i + 1) : (s < r && (c = t > 0 ? c + (r - s) : c, u = t > 0 ? u : u + (r - s)), {
    step: a,
    tickMin: o.sub(new ne(u).mul(a)),
    tickMax: o.add(new ne(c).mul(a))
  });
}
function nI(e) {
  var t = mn(e, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(i, 2), u = Zh([r, n]), c = mn(u, 2), s = c[0], f = c[1];
  if (s === -1 / 0 || f === 1 / 0) {
    var l = f === 1 / 0 ? [s].concat(ru(eu(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(ru(eu(0, i - 1).map(function() {
      return -1 / 0;
    })), [f]);
    return r > n ? tu(l) : l;
  }
  if (s === f)
    return rI(s, i, a);
  var d = Qh(s, f, o, a), p = d.step, g = d.tickMin, y = d.tickMax, v = ja.rangeStep(g, y.add(new ne(0.1).mul(p)), p);
  return r > n ? tu(v) : v;
}
function iI(e, t) {
  var r = mn(e, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Zh([n, i]), u = mn(o, 2), c = u[0], s = u[1];
  if (c === -1 / 0 || s === 1 / 0)
    return [n, i];
  if (c === s)
    return [c];
  var f = Math.max(t, 2), l = Jh(new ne(s).sub(c).div(f - 1), a, 0), d = [].concat(ru(ja.rangeStep(new ne(c), new ne(s).sub(new ne(0.99).mul(l)), l)), [s]);
  return n > i ? tu(d) : d;
}
var aI = Vh(nI), oI = Vh(iI), uI = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Wi() {
  return Wi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wi.apply(this, arguments);
}
function cI(e, t) {
  return dI(e) || fI(e, t) || lI(e, t) || sI();
}
function sI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lI(e, t) {
  if (e) {
    if (typeof e == "string")
      return cf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return cf(e, t);
  }
}
function cf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function fI(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0)
          ;
    } catch (f) {
      s = !0, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (s)
          throw i;
      }
    }
    return u;
  }
}
function dI(e) {
  if (Array.isArray(e))
    return e;
}
function pI(e, t) {
  if (e == null)
    return {};
  var r = hI(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function hI(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function kc(e) {
  var t = e.offset, r = e.layout, n = e.width, i = e.dataKey, a = e.data, o = e.dataPointFormatter, u = e.xAxis, c = e.yAxis, s = pI(e, uI), f = X(s, !1);
  e.direction === "x" && u.type !== "number" && (process.env.NODE_ENV !== "production" ? He(!1, 'ErrorBar requires Axis type property to be "number".') : He(!1));
  var l = a.map(function(d) {
    var p = o(d, i), g = p.x, y = p.y, v = p.value, x = p.errorVal;
    if (!x)
      return null;
    var b = [], w, m;
    if (Array.isArray(x)) {
      var h = cI(x, 2);
      w = h[0], m = h[1];
    } else
      w = m = x;
    if (r === "vertical") {
      var O = u.scale, S = y + t, A = S + n, M = S - n, E = O(v - w), T = O(v + m);
      b.push({
        x1: T,
        y1: A,
        x2: T,
        y2: M
      }), b.push({
        x1: E,
        y1: S,
        x2: T,
        y2: S
      }), b.push({
        x1: E,
        y1: A,
        x2: E,
        y2: M
      });
    } else if (r === "horizontal") {
      var P = c.scale, C = g + t, j = C - n, N = C + n, k = P(v - w), D = P(v + m);
      b.push({
        x1: j,
        y1: D,
        x2: N,
        y2: D
      }), b.push({
        x1: C,
        y1: k,
        x2: C,
        y2: D
      }), b.push({
        x1: j,
        y1: k,
        x2: N,
        y2: k
      });
    }
    return /* @__PURE__ */ _.createElement(ye, Wi({
      className: "recharts-errorBar",
      key: "bar-".concat(b.map(function(R) {
        return "".concat(R.x1, "-").concat(R.x2, "-").concat(R.y1, "-").concat(R.y2);
      }))
    }, f), b.map(function(R) {
      return /* @__PURE__ */ _.createElement("line", Wi({}, R, {
        key: "line-".concat(R.x1, "-").concat(R.x2, "-").concat(R.y1, "-").concat(R.y2)
      }));
    }));
  });
  return /* @__PURE__ */ _.createElement(ye, {
    className: "recharts-errorBars"
  }, l);
}
kc.defaultProps = {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
};
kc.displayName = "ErrorBar";
function bn(e) {
  "@babel/helpers - typeof";
  return bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bn(e);
}
function sf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function co(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sf(Object(r), !0).forEach(function(n) {
      vI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vI(e, t, r) {
  return t = yI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function yI(e) {
  var t = gI(e, "string");
  return bn(t) == "symbol" ? t : String(t);
}
function gI(e, t) {
  if (bn(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (bn(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ev = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, o = We(r, on);
  if (!o)
    return null;
  var u;
  return o.props && o.props.payload ? u = o.props && o.props.payload : a === "children" ? u = (n || []).reduce(function(c, s) {
    var f = s.item, l = s.props, d = l.sectors || l.data || [];
    return c.concat(d.map(function(p) {
      return {
        type: o.props.iconType || f.props.legendType,
        value: p.name,
        color: p.fill,
        payload: p
      };
    }));
  }, []) : u = (n || []).map(function(c) {
    var s = c.item, f = s.props, l = f.dataKey, d = f.name, p = f.legendType, g = f.hide;
    return {
      inactive: g,
      dataKey: l,
      type: o.props.iconType || p || "square",
      color: Nc(s),
      value: d || l,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: s.props
    };
  }), co(co(co({}, o.props), on.getWithHeight(o, i)), {}, {
    payload: u,
    item: o
  });
};
function xn(e) {
  "@babel/helpers - typeof";
  return xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xn(e);
}
function lf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lf(Object(r), !0).forEach(function(n) {
      lr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function lr(e, t, r) {
  return t = mI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mI(e) {
  var t = bI(e, "string");
  return xn(t) == "symbol" ? t : String(t);
}
function bI(e, t) {
  if (xn(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (xn(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ff(e) {
  return SI(e) || OI(e) || wI(e) || xI();
}
function xI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wI(e, t) {
  if (e) {
    if (typeof e == "string")
      return iu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return iu(e, t);
  }
}
function OI(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function SI(e) {
  if (Array.isArray(e))
    return iu(e);
}
function iu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Re(e, t, r) {
  return J(e) || J(t) ? r : we(t) ? Qe(e, t, r) : Z(t) ? t(e) : r;
}
function Jr(e, t, r, n) {
  var i = Ej(e, function(u) {
    return Re(u, t);
  });
  if (r === "number") {
    var a = i.filter(function(u) {
      return B(u) || parseFloat(u);
    });
    return a.length ? [Ea(a), Ta(a)] : [1 / 0, -1 / 0];
  }
  var o = n ? i.filter(function(u) {
    return !J(u);
  }) : i;
  return o.map(function(u) {
    return we(u) || u instanceof Date ? u : "";
  });
}
var AI = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = -1, u = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (u <= 1)
    return 0;
  if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
    for (var c = a.range, s = 0; s < u; s++) {
      var f = s > 0 ? i[s - 1].coordinate : i[u - 1].coordinate, l = i[s].coordinate, d = s >= u - 1 ? i[0].coordinate : i[s + 1].coordinate, p = void 0;
      if (Ke(l - f) !== Ke(d - l)) {
        var g = [];
        if (Ke(d - l) === Ke(c[1] - c[0])) {
          p = d;
          var y = l + c[1] - c[0];
          g[0] = Math.min(y, (y + f) / 2), g[1] = Math.max(y, (y + f) / 2);
        } else {
          p = f;
          var v = d + c[1] - c[0];
          g[0] = Math.min(l, (v + l) / 2), g[1] = Math.max(l, (v + l) / 2);
        }
        var x = [Math.min(l, (p + l) / 2), Math.max(l, (p + l) / 2)];
        if (t > x[0] && t <= x[1] || t >= g[0] && t <= g[1]) {
          o = i[s].index;
          break;
        }
      } else {
        var b = Math.min(f, d), w = Math.max(f, d);
        if (t > (b + l) / 2 && t <= (w + l) / 2) {
          o = i[s].index;
          break;
        }
      }
    }
  else
    for (var m = 0; m < u; m++)
      if (m === 0 && t <= (n[m].coordinate + n[m + 1].coordinate) / 2 || m > 0 && m < u - 1 && t > (n[m].coordinate + n[m - 1].coordinate) / 2 && t <= (n[m].coordinate + n[m + 1].coordinate) / 2 || m === u - 1 && t > (n[m].coordinate + n[m - 1].coordinate) / 2) {
        o = n[m].index;
        break;
      }
  return o;
}, Nc = function(t) {
  var r = t, n = r.type.displayName, i = t.props, a = i.stroke, o = i.fill, u;
  switch (n) {
    case "Line":
      u = a;
      break;
    case "Area":
    case "Radar":
      u = a && a !== "none" ? a : o;
      break;
    default:
      u = o;
      break;
  }
  return u;
}, _I = function(t) {
  var r = t.barSize, n = t.stackGroups, i = n === void 0 ? {} : n;
  if (!i)
    return {};
  for (var a = {}, o = Object.keys(i), u = 0, c = o.length; u < c; u++)
    for (var s = i[o[u]].stackGroups, f = Object.keys(s), l = 0, d = f.length; l < d; l++) {
      var p = s[f[l]], g = p.items, y = p.cateAxisId, v = g.filter(function(w) {
        return vt(w.type).indexOf("Bar") >= 0;
      });
      if (v && v.length) {
        var x = v[0].props.barSize, b = v[0].props[y];
        a[b] || (a[b] = []), a[b].push({
          item: v[0],
          stackList: v.slice(1),
          barSize: J(x) ? r : x
        });
      }
    }
  return a;
}, $I = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, o = a === void 0 ? [] : a, u = t.maxBarSize, c = o.length;
  if (c < 1)
    return null;
  var s = Le(r, i, 0, !0), f, l = [];
  if (o[0].barSize === +o[0].barSize) {
    var d = !1, p = i / c, g = o.reduce(function(m, h) {
      return m + h.barSize || 0;
    }, 0);
    g += (c - 1) * s, g >= i && (g -= (c - 1) * s, s = 0), g >= i && p > 0 && (d = !0, p *= 0.9, g = c * p);
    var y = (i - g) / 2 >> 0, v = {
      offset: y - s,
      size: 0
    };
    f = o.reduce(function(m, h) {
      var O = {
        item: h.item,
        position: {
          offset: v.offset + v.size + s,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: d ? p : h.barSize
        }
      }, S = [].concat(ff(m), [O]);
      return v = S[S.length - 1].position, h.stackList && h.stackList.length && h.stackList.forEach(function(A) {
        S.push({
          item: A,
          position: v
        });
      }), S;
    }, l);
  } else {
    var x = Le(n, i, 0, !0);
    i - 2 * x - (c - 1) * s <= 0 && (s = 0);
    var b = (i - 2 * x - (c - 1) * s) / c;
    b > 1 && (b >>= 0);
    var w = u === +u ? Math.min(b, u) : b;
    f = o.reduce(function(m, h, O) {
      var S = [].concat(ff(m), [{
        item: h.item,
        position: {
          offset: x + (b + s) * O + (b - w) / 2,
          size: w
        }
      }]);
      return h.stackList && h.stackList.length && h.stackList.forEach(function(A) {
        S.push({
          item: A,
          position: S[S.length - 1].position
        });
      }), S;
    }, l);
  }
  return f;
}, PI = function(t, r, n, i) {
  var a = n.children, o = n.width, u = n.margin, c = o - (u.left || 0) - (u.right || 0), s = ev({
    children: a,
    legendWidth: c
  });
  if (s) {
    var f = i || {}, l = f.width, d = f.height, p = s.align, g = s.verticalAlign, y = s.layout;
    if ((y === "vertical" || y === "horizontal" && g === "middle") && p !== "center" && B(t[p]))
      return qe(qe({}, t), {}, lr({}, p, t[p] + (l || 0)));
    if ((y === "horizontal" || y === "vertical" && p === "center") && g !== "middle" && B(t[g]))
      return qe(qe({}, t), {}, lr({}, g, t[g] + (d || 0)));
  }
  return t;
}, TI = function(t, r, n) {
  return J(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, tv = function(t, r, n, i, a) {
  var o = r.props.children, u = at(o, kc).filter(function(s) {
    return TI(i, a, s.props.direction);
  });
  if (u && u.length) {
    var c = u.map(function(s) {
      return s.props.dataKey;
    });
    return t.reduce(function(s, f) {
      var l = Re(f, n);
      if (J(l))
        return s;
      var d = Array.isArray(l) ? [Ea(l), Ta(l)] : [l, l], p = c.reduce(function(g, y) {
        var v = Re(f, y, 0), x = d[0] - Math.abs(Array.isArray(v) ? v[0] : v), b = d[1] + Math.abs(Array.isArray(v) ? v[1] : v);
        return [Math.min(x, g[0]), Math.max(b, g[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(p[0], s[0]), Math.max(p[1], s[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, EI = function(t, r, n, i, a) {
  var o = r.map(function(u) {
    return tv(t, u, n, a, i);
  }).filter(function(u) {
    return !J(u);
  });
  return o && o.length ? o.reduce(function(u, c) {
    return [Math.min(u[0], c[0]), Math.max(u[1], c[1])];
  }, [1 / 0, -1 / 0]) : null;
}, rv = function(t, r, n, i, a) {
  var o = r.map(function(c) {
    var s = c.props.dataKey;
    return n === "number" && s && tv(t, c, s, i) || Jr(t, s, n, a);
  });
  if (n === "number")
    return o.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(c, s) {
        return [Math.min(c[0], s[0]), Math.max(c[1], s[1])];
      },
      [1 / 0, -1 / 0]
    );
  var u = {};
  return o.reduce(function(c, s) {
    for (var f = 0, l = s.length; f < l; f++)
      u[s[f]] || (u[s[f]] = !0, c.push(s[f]));
    return c;
  }, []);
}, nv = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, Vr = function(t, r, n) {
  if (!t)
    return null;
  var i = t.scale, a = t.duplicateDomain, o = t.type, u = t.range, c = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, s = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / c : 0;
  if (s = t.axisType === "angleAxis" && (u == null ? void 0 : u.length) >= 2 ? Ke(u[0] - u[1]) * 2 * s : s, r && (t.ticks || t.niceTicks)) {
    var f = (t.ticks || t.niceTicks).map(function(l) {
      var d = a ? a.indexOf(l) : l;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: i(d) + s,
        value: l,
        offset: s
      };
    });
    return f.filter(function(l) {
      return !qn(l.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(l, d) {
    return {
      coordinate: i(l) + s,
      value: l,
      index: d,
      offset: s
    };
  }) : i.ticks && !n ? i.ticks(t.tickCount).map(function(l) {
    return {
      coordinate: i(l) + s,
      value: l,
      offset: s
    };
  }) : i.domain().map(function(l, d) {
    return {
      coordinate: i(l) + s,
      value: a ? a[l] : l,
      index: d,
      offset: s
    };
  });
}, so = /* @__PURE__ */ new WeakMap(), oi = function(t, r) {
  if (typeof r != "function")
    return t;
  so.has(t) || so.set(t, /* @__PURE__ */ new WeakMap());
  var n = so.get(t);
  if (n.has(r))
    return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, MI = function(t, r, n) {
  var i = t.scale, a = t.type, o = t.layout, u = t.axisType;
  if (i === "auto")
    return o === "radial" && u === "radiusAxis" ? {
      scale: dn(),
      realScaleType: "band"
    } : o === "radial" && u === "angleAxis" ? {
      scale: Ri(),
      realScaleType: "linear"
    } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: Zr(),
      realScaleType: "point"
    } : a === "category" ? {
      scale: dn(),
      realScaleType: "band"
    } : {
      scale: Ri(),
      realScaleType: "linear"
    };
  if (Wn(i)) {
    var c = "scale".concat(ha(i));
    return {
      scale: (nf[c] || Zr)(),
      realScaleType: nf[c] ? c : "point"
    };
  }
  return Z(i) ? {
    scale: i
  } : {
    scale: Zr(),
    realScaleType: "point"
  };
}, df = 1e-4, jI = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - df, o = Math.max(i[0], i[1]) + df, u = t(r[0]), c = t(r[n - 1]);
    (u < a || u > o || c < a || c > o) && t.domain([r[0], r[n - 1]]);
  }
}, II = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0, u = 0; u < r; ++u) {
        var c = qn(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
        c >= 0 ? (t[u][n][0] = a, t[u][n][1] = a + c, a = t[u][n][1]) : (t[u][n][0] = o, t[u][n][1] = o + c, o = t[u][n][1]);
      }
}, CI = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, o = 0; o < r; ++o) {
        var u = qn(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
        u >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + u, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
      }
}, kI = {
  sign: II,
  // @ts-expect-error definitelytyped types are incorrect
  expand: fx,
  // @ts-expect-error definitelytyped types are incorrect
  none: fr,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: dx,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: px,
  positive: CI
}, NI = function(t, r, n) {
  var i = r.map(function(u) {
    return u.props.dataKey;
  }), a = kI[n], o = lx().keys(i).value(function(u, c) {
    return +Re(u, c, 0);
  }).order(jo).offset(a);
  return o(t);
}, DI = function(t, r, n, i, a, o) {
  if (!t)
    return null;
  var u = o ? r.reverse() : r, c = {}, s = u.reduce(function(l, d) {
    var p = d.props, g = p.stackId, y = p.hide;
    if (y)
      return l;
    var v = d.props[n], x = l[v] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (we(g)) {
      var b = x.stackGroups[g] || {
        numericAxisId: n,
        cateAxisId: i,
        items: []
      };
      b.items.push(d), x.hasStack = !0, x.stackGroups[g] = b;
    } else
      x.stackGroups[da("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: i,
        items: [d]
      };
    return qe(qe({}, l), {}, lr({}, v, x));
  }, c), f = {};
  return Object.keys(s).reduce(function(l, d) {
    var p = s[d];
    if (p.hasStack) {
      var g = {};
      p.stackGroups = Object.keys(p.stackGroups).reduce(function(y, v) {
        var x = p.stackGroups[v];
        return qe(qe({}, y), {}, lr({}, v, {
          numericAxisId: n,
          cateAxisId: i,
          items: x.items,
          stackedData: NI(t, x.items, a)
        }));
      }, g);
    }
    return qe(qe({}, l), {}, lr({}, d, p));
  }, f);
}, RI = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, o = r.originalDomain, u = r.allowDecimals, c = n || r.scale;
  if (c !== "auto" && c !== "linear")
    return null;
  if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var s = t.domain();
    if (!s.length)
      return null;
    var f = aI(s, a, u);
    return t.domain([Ea(f), Ta(f)]), {
      niceTicks: f
    };
  }
  if (a && i === "number") {
    var l = t.domain(), d = oI(l, a, u);
    return {
      niceTicks: d
    };
  }
  return null;
}, LI = function(t, r) {
  var n = t.props.stackId;
  if (we(n)) {
    var i = r[n];
    if (i) {
      var a = i.items.indexOf(t);
      return a >= 0 ? i.stackedData[a] : null;
    }
  }
  return null;
}, BI = function(t) {
  return t.reduce(function(r, n) {
    return [Ea(n.concat([r[0]]).filter(B)), Ta(n.concat([r[1]]).filter(B))];
  }, [1 / 0, -1 / 0]);
}, iv = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var o = t[a], u = o.stackedData, c = u.reduce(function(s, f) {
      var l = BI(f.slice(r, n + 1));
      return [Math.min(s[0], l[0]), Math.max(s[1], l[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(c[0], i[0]), Math.max(c[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, pf = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, hf = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, au = function(t, r, n) {
  if (Z(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var i = [];
  if (B(t[0]))
    i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (pf.test(t[0])) {
    var a = +pf.exec(t[0])[1];
    i[0] = r[0] - a;
  } else
    Z(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (B(t[1]))
    i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (hf.test(t[1])) {
    var o = +hf.exec(t[1])[1];
    i[1] = r[1] + o;
  } else
    Z(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, ou = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0)
      return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = oc(r, function(l) {
      return l.coordinate;
    }), o = 1 / 0, u = 1, c = a.length; u < c; u++) {
      var s = a[u], f = a[u - 1];
      o = Math.min((s.coordinate || 0) - (f.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, vf = function(t, r, n) {
  return !t || !t.length || jc(t, Qe(n, "type.defaultProps.domain")) ? r : t;
}, FI = function(t, r) {
  var n = t.props, i = n.dataKey, a = n.name, o = n.unit, u = n.formatter, c = n.tooltipType, s = n.chartType, f = n.hide;
  return qe(qe({}, X(t, !1)), {}, {
    dataKey: i,
    unit: o,
    formatter: u,
    name: a || i,
    color: Nc(t),
    value: Re(r, i),
    type: c,
    payload: r,
    chartType: s,
    hide: f
  });
};
function wn(e) {
  "@babel/helpers - typeof";
  return wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wn(e);
}
function yf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yf(Object(r), !0).forEach(function(n) {
      av(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function av(e, t, r) {
  return t = UI(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function UI(e) {
  var t = WI(e, "string");
  return wn(t) == "symbol" ? t : String(t);
}
function WI(e, t) {
  if (wn(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (wn(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function qI(e, t) {
  return GI(e) || KI(e, t) || HI(e, t) || zI();
}
function zI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function HI(e, t) {
  if (e) {
    if (typeof e == "string")
      return gf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return gf(e, t);
  }
}
function gf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function KI(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0)
          ;
    } catch (f) {
      s = !0, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (s)
          throw i;
      }
    }
    return u;
  }
}
function GI(e) {
  if (Array.isArray(e))
    return e;
}
var qi = Math.PI / 180, XI = function(t) {
  return t * 180 / Math.PI;
}, ue = function(t, r, n, i) {
  return {
    x: t + Math.cos(-qi * i) * n,
    y: r + Math.sin(-qi * i) * n
  };
}, ov = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, VI = function(t, r, n, i, a) {
  var o = t.width, u = t.height, c = t.startAngle, s = t.endAngle, f = Le(t.cx, o, o / 2), l = Le(t.cy, u, u / 2), d = ov(o, u, n), p = Le(t.innerRadius, d, 0), g = Le(t.outerRadius, d, d * 0.8), y = Object.keys(r);
  return y.reduce(function(v, x) {
    var b = r[x], w = b.domain, m = b.reversed, h;
    if (J(b.range))
      i === "angleAxis" ? h = [c, s] : i === "radiusAxis" && (h = [p, g]), m && (h = [h[1], h[0]]);
    else {
      h = b.range;
      var O = h, S = qI(O, 2);
      c = S[0], s = S[1];
    }
    var A = MI(b, a), M = A.realScaleType, E = A.scale;
    E.domain(w).range(h), jI(E);
    var T = RI(E, dt(dt({}, b), {}, {
      realScaleType: M
    })), P = dt(dt(dt({}, b), T), {}, {
      range: h,
      radius: g,
      realScaleType: M,
      scale: E,
      cx: f,
      cy: l,
      innerRadius: p,
      outerRadius: g,
      startAngle: c,
      endAngle: s
    });
    return dt(dt({}, v), {}, av({}, x, P));
  }, {});
}, YI = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
}, ZI = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, o = r.cy, u = YI({
    x: n,
    y: i
  }, {
    x: a,
    y: o
  });
  if (u <= 0)
    return {
      radius: u
    };
  var c = (n - a) / u, s = Math.acos(c);
  return i > o && (s = 2 * Math.PI - s), {
    radius: u,
    angle: XI(s),
    angleInRadian: s
  };
}, JI = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return {
    startAngle: r - o * 360,
    endAngle: n - o * 360
  };
}, QI = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), o = Math.floor(i / 360), u = Math.min(a, o);
  return t + u * 360;
}, mf = function(t, r) {
  var n = t.x, i = t.y, a = ZI({
    x: n,
    y: i
  }, r), o = a.radius, u = a.angle, c = r.innerRadius, s = r.outerRadius;
  if (o < c || o > s)
    return !1;
  if (o === 0)
    return !0;
  var f = JI(r), l = f.startAngle, d = f.endAngle, p = u, g;
  if (l <= d) {
    for (; p > d; )
      p -= 360;
    for (; p < l; )
      p += 360;
    g = p >= l && p <= d;
  } else {
    for (; p > l; )
      p -= 360;
    for (; p < d; )
      p += 360;
    g = p >= d && p <= l;
  }
  return g ? dt(dt({}, r), {}, {
    radius: o,
    angle: QI(p, r)
  }) : null;
};
function On(e) {
  "@babel/helpers - typeof";
  return On = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, On(e);
}
var eC = ["offset"];
function tC(e) {
  return aC(e) || iC(e) || nC(e) || rC();
}
function rC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nC(e, t) {
  if (e) {
    if (typeof e == "string")
      return uu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return uu(e, t);
  }
}
function iC(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function aC(e) {
  if (Array.isArray(e))
    return uu(e);
}
function uu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function oC(e, t) {
  if (e == null)
    return {};
  var r = uC(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function uC(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function bf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function be(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bf(Object(r), !0).forEach(function(n) {
      cC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cC(e, t, r) {
  return t = sC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sC(e) {
  var t = lC(e, "string");
  return On(t) == "symbol" ? t : String(t);
}
function lC(e, t) {
  if (On(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (On(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Sn() {
  return Sn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Sn.apply(this, arguments);
}
var fC = function(t) {
  var r = t.value, n = t.formatter, i = J(t.children) ? r : t.children;
  return Z(n) ? n(i) : i;
}, dC = function(t, r) {
  var n = Ke(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, pC = function(t, r, n) {
  var i = t.position, a = t.viewBox, o = t.offset, u = t.className, c = a, s = c.cx, f = c.cy, l = c.innerRadius, d = c.outerRadius, p = c.startAngle, g = c.endAngle, y = c.clockWise, v = (l + d) / 2, x = dC(p, g), b = x >= 0 ? 1 : -1, w, m;
  i === "insideStart" ? (w = p + b * o, m = y) : i === "insideEnd" ? (w = g - b * o, m = !y) : i === "end" && (w = g + b * o, m = y), m = x <= 0 ? m : !m;
  var h = ue(s, f, v, w), O = ue(s, f, v, w + (m ? 1 : -1) * 359), S = "M".concat(h.x, ",").concat(h.y, `
    A`).concat(v, ",").concat(v, ",0,1,").concat(m ? 0 : 1, `,
    `).concat(O.x, ",").concat(O.y), A = J(t.id) ? da("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ _.createElement("text", Sn({}, n, {
    dominantBaseline: "central",
    className: he("recharts-radial-bar-label", u)
  }), /* @__PURE__ */ _.createElement("defs", null, /* @__PURE__ */ _.createElement("path", {
    id: A,
    d: S
  })), /* @__PURE__ */ _.createElement("textPath", {
    xlinkHref: "#".concat(A)
  }, r));
}, hC = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, o = a.cx, u = a.cy, c = a.innerRadius, s = a.outerRadius, f = a.startAngle, l = a.endAngle, d = (f + l) / 2;
  if (i === "outside") {
    var p = ue(o, u, s + n, d), g = p.x, y = p.y;
    return {
      x: g,
      y,
      textAnchor: g >= o ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (i === "center")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (i === "centerTop")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (i === "centerBottom")
    return {
      x: o,
      y: u,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var v = (c + s) / 2, x = ue(o, u, v, d), b = x.x, w = x.y;
  return {
    x: b,
    y: w,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, vC = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, o = r, u = o.x, c = o.y, s = o.width, f = o.height, l = f >= 0 ? 1 : -1, d = l * i, p = l > 0 ? "end" : "start", g = l > 0 ? "start" : "end", y = s >= 0 ? 1 : -1, v = y * i, x = y > 0 ? "end" : "start", b = y > 0 ? "start" : "end";
  if (a === "top") {
    var w = {
      x: u + s / 2,
      y: c - l * i,
      textAnchor: "middle",
      verticalAnchor: p
    };
    return be(be({}, w), n ? {
      height: Math.max(c - n.y, 0),
      width: s
    } : {});
  }
  if (a === "bottom") {
    var m = {
      x: u + s / 2,
      y: c + f + d,
      textAnchor: "middle",
      verticalAnchor: g
    };
    return be(be({}, m), n ? {
      height: Math.max(n.y + n.height - (c + f), 0),
      width: s
    } : {});
  }
  if (a === "left") {
    var h = {
      x: u - v,
      y: c + f / 2,
      textAnchor: x,
      verticalAnchor: "middle"
    };
    return be(be({}, h), n ? {
      width: Math.max(h.x - n.x, 0),
      height: f
    } : {});
  }
  if (a === "right") {
    var O = {
      x: u + s + v,
      y: c + f / 2,
      textAnchor: b,
      verticalAnchor: "middle"
    };
    return be(be({}, O), n ? {
      width: Math.max(n.x + n.width - O.x, 0),
      height: f
    } : {});
  }
  var S = n ? {
    width: s,
    height: f
  } : {};
  return a === "insideLeft" ? be({
    x: u + v,
    y: c + f / 2,
    textAnchor: b,
    verticalAnchor: "middle"
  }, S) : a === "insideRight" ? be({
    x: u + s - v,
    y: c + f / 2,
    textAnchor: x,
    verticalAnchor: "middle"
  }, S) : a === "insideTop" ? be({
    x: u + s / 2,
    y: c + d,
    textAnchor: "middle",
    verticalAnchor: g
  }, S) : a === "insideBottom" ? be({
    x: u + s / 2,
    y: c + f - d,
    textAnchor: "middle",
    verticalAnchor: p
  }, S) : a === "insideTopLeft" ? be({
    x: u + v,
    y: c + d,
    textAnchor: b,
    verticalAnchor: g
  }, S) : a === "insideTopRight" ? be({
    x: u + s - v,
    y: c + d,
    textAnchor: x,
    verticalAnchor: g
  }, S) : a === "insideBottomLeft" ? be({
    x: u + v,
    y: c + f - d,
    textAnchor: b,
    verticalAnchor: p
  }, S) : a === "insideBottomRight" ? be({
    x: u + s - v,
    y: c + f - d,
    textAnchor: x,
    verticalAnchor: p
  }, S) : Er(a) && (B(a.x) || qt(a.x)) && (B(a.y) || qt(a.y)) ? be({
    x: u + Le(a.x, s),
    y: c + Le(a.y, f),
    textAnchor: "end",
    verticalAnchor: "end"
  }, S) : be({
    x: u + s / 2,
    y: c + f / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, S);
}, yC = function(t) {
  return "cx" in t && B(t.cx);
};
function $e(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = oC(e, eC), i = be({
    offset: r
  }, n), a = i.viewBox, o = i.position, u = i.value, c = i.children, s = i.content, f = i.className, l = f === void 0 ? "" : f, d = i.textBreakAll;
  if (!a || J(u) && J(c) && !/* @__PURE__ */ it(s) && !Z(s))
    return null;
  if (/* @__PURE__ */ it(s))
    return /* @__PURE__ */ xe(s, i);
  var p;
  if (Z(s)) {
    if (p = /* @__PURE__ */ Wd(s, i), /* @__PURE__ */ it(p))
      return p;
  } else
    p = fC(i);
  var g = yC(a), y = X(i, !0);
  if (g && (o === "insideStart" || o === "insideEnd" || o === "end"))
    return pC(i, p, y);
  var v = g ? hC(i) : vC(i);
  return /* @__PURE__ */ _.createElement(yr, Sn({
    className: he("recharts-label", l)
  }, y, v, {
    breakAll: d
  }), p);
}
$e.displayName = "Label";
var uv = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, o = t.endAngle, u = t.r, c = t.radius, s = t.innerRadius, f = t.outerRadius, l = t.x, d = t.y, p = t.top, g = t.left, y = t.width, v = t.height, x = t.clockWise, b = t.labelViewBox;
  if (b)
    return b;
  if (B(y) && B(v)) {
    if (B(l) && B(d))
      return {
        x: l,
        y: d,
        width: y,
        height: v
      };
    if (B(p) && B(g))
      return {
        x: p,
        y: g,
        width: y,
        height: v
      };
  }
  return B(l) && B(d) ? {
    x: l,
    y: d,
    width: 0,
    height: 0
  } : B(r) && B(n) ? {
    cx: r,
    cy: n,
    startAngle: a || i || 0,
    endAngle: o || i || 0,
    innerRadius: s || 0,
    outerRadius: f || c || u || 0,
    clockWise: x
  } : t.viewBox ? t.viewBox : {};
}, gC = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ _.createElement($e, {
    key: "label-implicit",
    viewBox: r
  }) : we(t) ? /* @__PURE__ */ _.createElement($e, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ it(t) ? t.type === $e ? /* @__PURE__ */ xe(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ _.createElement($e, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : Z(t) ? /* @__PURE__ */ _.createElement($e, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : Er(t) ? /* @__PURE__ */ _.createElement($e, Sn({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, mC = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var i = t.children, a = uv(t), o = at(i, $e).map(function(c, s) {
    return /* @__PURE__ */ xe(c, {
      viewBox: r || a,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(s)
    });
  });
  if (!n)
    return o;
  var u = gC(t.label, r || a);
  return [u].concat(tC(o));
};
$e.parseViewBox = uv;
$e.renderCallByParent = mC;
function bC(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var xC = bC;
const wC = /* @__PURE__ */ ce(xC);
function An(e) {
  "@babel/helpers - typeof";
  return An = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, An(e);
}
var OC = ["valueAccessor"], SC = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function AC(e) {
  return TC(e) || PC(e) || $C(e) || _C();
}
function _C() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $C(e, t) {
  if (e) {
    if (typeof e == "string")
      return cu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return cu(e, t);
  }
}
function PC(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function TC(e) {
  if (Array.isArray(e))
    return cu(e);
}
function cu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function zi() {
  return zi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, zi.apply(this, arguments);
}
function xf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xf(Object(r), !0).forEach(function(n) {
      EC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function EC(e, t, r) {
  return t = MC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function MC(e) {
  var t = jC(e, "string");
  return An(t) == "symbol" ? t : String(t);
}
function jC(e, t) {
  if (An(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (An(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Of(e, t) {
  if (e == null)
    return {};
  var r = IC(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function IC(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var CC = function(t) {
  return Array.isArray(t.value) ? wC(t.value) : t.value;
};
function Yt(e) {
  var t = e.valueAccessor, r = t === void 0 ? CC : t, n = Of(e, OC), i = n.data, a = n.dataKey, o = n.clockWise, u = n.id, c = n.textBreakAll, s = Of(n, SC);
  return !i || !i.length ? null : /* @__PURE__ */ _.createElement(ye, {
    className: "recharts-label-list"
  }, i.map(function(f, l) {
    var d = J(a) ? r(f, l) : Re(f && f.payload, a), p = J(u) ? {} : {
      id: "".concat(u, "-").concat(l)
    };
    return /* @__PURE__ */ _.createElement($e, zi({}, X(f, !0), s, p, {
      parentViewBox: f.parentViewBox,
      value: d,
      textBreakAll: c,
      viewBox: $e.parseViewBox(J(o) ? f : wf(wf({}, f), {}, {
        clockWise: o
      })),
      key: "label-".concat(l),
      index: l
    }));
  }));
}
Yt.displayName = "LabelList";
function kC(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ _.createElement(Yt, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ _.isValidElement(e) || Z(e) ? /* @__PURE__ */ _.createElement(Yt, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : Er(e) ? /* @__PURE__ */ _.createElement(Yt, zi({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function NC(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, i = at(n, Yt).map(function(o, u) {
    return /* @__PURE__ */ xe(o, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(u)
    });
  });
  if (!r)
    return i;
  var a = kC(e.label, t);
  return [a].concat(AC(i));
}
Yt.renderCallByParent = NC;
function _n(e) {
  "@babel/helpers - typeof";
  return _n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _n(e);
}
function su() {
  return su = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, su.apply(this, arguments);
}
function Sf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Af(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sf(Object(r), !0).forEach(function(n) {
      DC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function DC(e, t, r) {
  return t = RC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function RC(e) {
  var t = LC(e, "string");
  return _n(t) == "symbol" ? t : String(t);
}
function LC(e, t) {
  if (_n(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (_n(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var BC = function(t, r) {
  var n = Ke(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, ui = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, o = t.sign, u = t.isExternal, c = t.cornerRadius, s = t.cornerIsExternal, f = c * (u ? 1 : -1) + i, l = Math.asin(c / f) / qi, d = s ? a : a + o * l, p = ue(r, n, f, d), g = ue(r, n, i, d), y = s ? a - o * l : a, v = ue(r, n, f * Math.cos(l * qi), y);
  return {
    center: p,
    circleTangency: g,
    lineTangency: v,
    theta: l
  };
}, cv = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.startAngle, u = t.endAngle, c = BC(o, u), s = o + c, f = ue(r, n, a, o), l = ue(r, n, a, s), d = "M ".concat(f.x, ",").concat(f.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(c) > 180), ",").concat(+(o > s), `,
    `).concat(l.x, ",").concat(l.y, `
  `);
  if (i > 0) {
    var p = ue(r, n, i, o), g = ue(r, n, i, s);
    d += "L ".concat(g.x, ",").concat(g.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(c) > 180), ",").concat(+(o <= s), `,
            `).concat(p.x, ",").concat(p.y, " Z");
  } else
    d += "L ".concat(r, ",").concat(n, " Z");
  return d;
}, FC = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, u = t.forceCornerRadius, c = t.cornerIsExternal, s = t.startAngle, f = t.endAngle, l = Ke(f - s), d = ui({
    cx: r,
    cy: n,
    radius: a,
    angle: s,
    sign: l,
    cornerRadius: o,
    cornerIsExternal: c
  }), p = d.circleTangency, g = d.lineTangency, y = d.theta, v = ui({
    cx: r,
    cy: n,
    radius: a,
    angle: f,
    sign: -l,
    cornerRadius: o,
    cornerIsExternal: c
  }), x = v.circleTangency, b = v.lineTangency, w = v.theta, m = c ? Math.abs(s - f) : Math.abs(s - f) - y - w;
  if (m < 0)
    return u ? "M ".concat(g.x, ",").concat(g.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : cv({
      cx: r,
      cy: n,
      innerRadius: i,
      outerRadius: a,
      startAngle: s,
      endAngle: f
    });
  var h = "M ".concat(g.x, ",").concat(g.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(p.x, ",").concat(p.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(m > 180), ",").concat(+(l < 0), ",").concat(x.x, ",").concat(x.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(b.x, ",").concat(b.y, `
  `);
  if (i > 0) {
    var O = ui({
      cx: r,
      cy: n,
      radius: i,
      angle: s,
      sign: l,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: c
    }), S = O.circleTangency, A = O.lineTangency, M = O.theta, E = ui({
      cx: r,
      cy: n,
      radius: i,
      angle: f,
      sign: -l,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: c
    }), T = E.circleTangency, P = E.lineTangency, C = E.theta, j = c ? Math.abs(s - f) : Math.abs(s - f) - M - C;
    if (j < 0 && o === 0)
      return "".concat(h, "L").concat(r, ",").concat(n, "Z");
    h += "L".concat(P.x, ",").concat(P.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(T.x, ",").concat(T.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(j > 180), ",").concat(+(l > 0), ",").concat(S.x, ",").concat(S.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(A.x, ",").concat(A.y, "Z");
  } else
    h += "L".concat(r, ",").concat(n, "Z");
  return h;
}, UC = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, sv = function(t) {
  var r = Af(Af({}, UC), t), n = r.cx, i = r.cy, a = r.innerRadius, o = r.outerRadius, u = r.cornerRadius, c = r.forceCornerRadius, s = r.cornerIsExternal, f = r.startAngle, l = r.endAngle, d = r.className;
  if (o < a || f === l)
    return null;
  var p = he("recharts-sector", d), g = o - a, y = Le(u, g, 0, !0), v;
  return y > 0 && Math.abs(f - l) < 360 ? v = FC({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    cornerRadius: Math.min(y, g / 2),
    forceCornerRadius: c,
    cornerIsExternal: s,
    startAngle: f,
    endAngle: l
  }) : v = cv({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    startAngle: f,
    endAngle: l
  }), /* @__PURE__ */ _.createElement("path", su({}, X(r, !0), {
    className: p,
    d: v,
    role: "img"
  }));
};
function $n(e) {
  "@babel/helpers - typeof";
  return $n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $n(e);
}
function lu() {
  return lu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, lu.apply(this, arguments);
}
function _f(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _f(Object(r), !0).forEach(function(n) {
      WC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _f(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function WC(e, t, r) {
  return t = qC(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qC(e) {
  var t = zC(e, "string");
  return $n(t) == "symbol" ? t : String(t);
}
function zC(e, t) {
  if ($n(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if ($n(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pf = {
  curveBasisClosed: Q0,
  curveBasisOpen: ex,
  curveBasis: J0,
  curveBumpX: L0,
  curveBumpY: B0,
  curveLinearClosed: tx,
  curveLinear: ya,
  curveMonotoneX: rx,
  curveMonotoneY: nx,
  curveNatural: ix,
  curveStep: ax,
  curveStepAfter: ux,
  curveStepBefore: ox
}, ci = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, Kr = function(t) {
  return t.x;
}, Gr = function(t) {
  return t.y;
}, HC = function(t, r) {
  if (Z(t))
    return t;
  var n = "curve".concat(ha(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? Pf["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Pf[n] || ya;
}, KC = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, o = t.baseLine, u = t.layout, c = t.connectNulls, s = c === void 0 ? !1 : c, f = HC(n, u), l = s ? a.filter(function(y) {
    return ci(y);
  }) : a, d;
  if (Array.isArray(o)) {
    var p = s ? o.filter(function(y) {
      return ci(y);
    }) : o, g = l.map(function(y, v) {
      return $f($f({}, y), {}, {
        base: p[v]
      });
    });
    return u === "vertical" ? d = Jn().y(Gr).x1(Kr).x0(function(y) {
      return y.base.x;
    }) : d = Jn().x(Kr).y1(Gr).y0(function(y) {
      return y.base.y;
    }), d.defined(ci).curve(f), d(g);
  }
  return u === "vertical" && B(o) ? d = Jn().y(Gr).x1(Kr).x0(o) : B(o) ? d = Jn().x(Kr).y1(Gr).y0(o) : d = dp().x(Kr).y(Gr), d.defined(ci).curve(f), d(l);
}, fu = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i)
    return null;
  var o = n && n.length ? KC(t) : i;
  return /* @__PURE__ */ _.createElement("path", lu({}, X(t, !1), gi(t), {
    className: he("recharts-curve", r),
    d: o,
    ref: a
  }));
}, GC = Object.getOwnPropertyNames, XC = Object.getOwnPropertySymbols, VC = Object.prototype.hasOwnProperty;
function Tf(e, t) {
  return function(n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function si(e) {
  return function(r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, i);
    var a = i.cache, o = a.get(r), u = a.get(n);
    if (o && u)
      return o === n && u === r;
    a.set(r, n), a.set(n, r);
    var c = e(r, n, i);
    return a.delete(r), a.delete(n), c;
  };
}
function Ef(e) {
  return GC(e).concat(XC(e));
}
var lv = Object.hasOwn || function(e, t) {
  return VC.call(e, t);
};
function Br(e, t) {
  return e || t ? e === t : e === t || e !== e && t !== t;
}
var fv = "_owner", Mf = Object.getOwnPropertyDescriptor, jf = Object.keys;
function YC(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function ZC(e, t) {
  return Br(e.getTime(), t.getTime());
}
function If(e, t, r) {
  if (e.size !== t.size)
    return !1;
  for (var n = {}, i = e.entries(), a = 0, o, u; (o = i.next()) && !o.done; ) {
    for (var c = t.entries(), s = !1, f = 0; (u = c.next()) && !u.done; ) {
      var l = o.value, d = l[0], p = l[1], g = u.value, y = g[0], v = g[1];
      !s && !n[f] && (s = r.equals(d, y, a, f, e, t, r) && r.equals(p, v, d, y, e, t, r)) && (n[f] = !0), f++;
    }
    if (!s)
      return !1;
    a++;
  }
  return !0;
}
function JC(e, t, r) {
  var n = jf(e), i = n.length;
  if (jf(t).length !== i)
    return !1;
  for (var a; i-- > 0; )
    if (a = n[i], a === fv && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof || !lv(t, a) || !r.equals(e[a], t[a], a, a, e, t, r))
      return !1;
  return !0;
}
function Xr(e, t, r) {
  var n = Ef(e), i = n.length;
  if (Ef(t).length !== i)
    return !1;
  for (var a, o, u; i-- > 0; )
    if (a = n[i], a === fv && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof || !lv(t, a) || !r.equals(e[a], t[a], a, a, e, t, r) || (o = Mf(e, a), u = Mf(t, a), (o || u) && (!o || !u || o.configurable !== u.configurable || o.enumerable !== u.enumerable || o.writable !== u.writable)))
      return !1;
  return !0;
}
function QC(e, t) {
  return Br(e.valueOf(), t.valueOf());
}
function ek(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function Cf(e, t, r) {
  if (e.size !== t.size)
    return !1;
  for (var n = {}, i = e.values(), a, o; (a = i.next()) && !a.done; ) {
    for (var u = t.values(), c = !1, s = 0; (o = u.next()) && !o.done; )
      !c && !n[s] && (c = r.equals(a.value, o.value, a.value, o.value, e, t, r)) && (n[s] = !0), s++;
    if (!c)
      return !1;
  }
  return !0;
}
function tk(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var rk = "[object Arguments]", nk = "[object Boolean]", ik = "[object Date]", ak = "[object Map]", ok = "[object Number]", uk = "[object Object]", ck = "[object RegExp]", sk = "[object Set]", lk = "[object String]", fk = Array.isArray, kf = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, Nf = Object.assign, dk = Object.prototype.toString.call.bind(Object.prototype.toString);
function pk(e) {
  var t = e.areArraysEqual, r = e.areDatesEqual, n = e.areMapsEqual, i = e.areObjectsEqual, a = e.arePrimitiveWrappersEqual, o = e.areRegExpsEqual, u = e.areSetsEqual, c = e.areTypedArraysEqual;
  return function(f, l, d) {
    if (f === l)
      return !0;
    if (f == null || l == null || typeof f != "object" || typeof l != "object")
      return f !== f && l !== l;
    var p = f.constructor;
    if (p !== l.constructor)
      return !1;
    if (p === Object)
      return i(f, l, d);
    if (fk(f))
      return t(f, l, d);
    if (kf != null && kf(f))
      return c(f, l, d);
    if (p === Date)
      return r(f, l, d);
    if (p === RegExp)
      return o(f, l, d);
    if (p === Map)
      return n(f, l, d);
    if (p === Set)
      return u(f, l, d);
    var g = dk(f);
    return g === ik ? r(f, l, d) : g === ck ? o(f, l, d) : g === ak ? n(f, l, d) : g === sk ? u(f, l, d) : g === uk ? typeof f.then != "function" && typeof l.then != "function" && i(f, l, d) : g === rk ? i(f, l, d) : g === nk || g === ok || g === lk ? a(f, l, d) : !1;
  };
}
function hk(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, i = {
    areArraysEqual: n ? Xr : YC,
    areDatesEqual: ZC,
    areMapsEqual: n ? Tf(If, Xr) : If,
    areObjectsEqual: n ? Xr : JC,
    arePrimitiveWrappersEqual: QC,
    areRegExpsEqual: ek,
    areSetsEqual: n ? Tf(Cf, Xr) : Cf,
    areTypedArraysEqual: n ? Xr : tk
  };
  if (r && (i = Nf({}, i, r(i))), t) {
    var a = si(i.areArraysEqual), o = si(i.areMapsEqual), u = si(i.areObjectsEqual), c = si(i.areSetsEqual);
    i = Nf({}, i, {
      areArraysEqual: a,
      areMapsEqual: o,
      areObjectsEqual: u,
      areSetsEqual: c
    });
  }
  return i;
}
function vk(e) {
  return function(t, r, n, i, a, o, u) {
    return e(t, r, u);
  };
}
function yk(e) {
  var t = e.circular, r = e.comparator, n = e.createState, i = e.equals, a = e.strict;
  if (n)
    return function(c, s) {
      var f = n(), l = f.cache, d = l === void 0 ? t ? /* @__PURE__ */ new WeakMap() : void 0 : l, p = f.meta;
      return r(c, s, {
        cache: d,
        equals: i,
        meta: p,
        strict: a
      });
    };
  if (t)
    return function(c, s) {
      return r(c, s, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals: i,
        meta: void 0,
        strict: a
      });
    };
  var o = {
    cache: void 0,
    equals: i,
    meta: void 0,
    strict: a
  };
  return function(c, s) {
    return r(c, s, o);
  };
}
var gk = Ct();
Ct({ strict: !0 });
Ct({ circular: !0 });
Ct({
  circular: !0,
  strict: !0
});
Ct({
  createInternalComparator: function() {
    return Br;
  }
});
Ct({
  strict: !0,
  createInternalComparator: function() {
    return Br;
  }
});
Ct({
  circular: !0,
  createInternalComparator: function() {
    return Br;
  }
});
Ct({
  circular: !0,
  createInternalComparator: function() {
    return Br;
  },
  strict: !0
});
function Ct(e) {
  e === void 0 && (e = {});
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, i = e.createState, a = e.strict, o = a === void 0 ? !1 : a, u = hk(e), c = pk(u), s = n ? n(c) : vk(c);
  return yk({ circular: r, comparator: c, createState: i, equals: s, strict: o });
}
function mk(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function Df(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e(a), r = -1) : mk(i);
  };
  requestAnimationFrame(n);
}
function du(e) {
  "@babel/helpers - typeof";
  return du = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, du(e);
}
function bk(e) {
  return Sk(e) || Ok(e) || wk(e) || xk();
}
function xk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wk(e, t) {
  if (e) {
    if (typeof e == "string")
      return Rf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Rf(e, t);
  }
}
function Rf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Ok(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Sk(e) {
  if (Array.isArray(e))
    return e;
}
function Ak() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var o = a, u = bk(o), c = u[0], s = u.slice(1);
        if (typeof c == "number") {
          Df(i.bind(null, s), c);
          return;
        }
        i(c), Df(i.bind(null, s));
        return;
      }
      du(a) === "object" && (e = a, t(e)), typeof a == "function" && a();
    }
  };
  return {
    stop: function() {
      r = !0;
    },
    start: function(a) {
      r = !1, n(a);
    },
    subscribe: function(a) {
      return t = a, function() {
        t = function() {
          return null;
        };
      };
    }
  };
}
function Pn(e) {
  "@babel/helpers - typeof";
  return Pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pn(e);
}
function Lf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lf(Object(r), !0).forEach(function(n) {
      dv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dv(e, t, r) {
  return t = _k(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _k(e) {
  var t = $k(e, "string");
  return Pn(t) === "symbol" ? t : String(t);
}
function $k(e, t) {
  if (Pn(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Pn(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pk = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, Tk = function(t) {
  return t;
}, Ek = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, Qr = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return Bf(Bf({}, n), {}, dv({}, i, t(i, r[i])));
  }, {});
}, Ff = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(Ek(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, Mk = process.env.NODE_ENV !== "production", Hi = function(t, r, n, i, a, o, u, c) {
  if (Mk && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var s = [n, i, a, o, u, c], f = 0;
      console.warn(r.replace(/%s/g, function() {
        return s[f++];
      }));
    }
};
function jk(e, t) {
  return kk(e) || Ck(e, t) || pv(e, t) || Ik();
}
function Ik() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ck(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0)
          ;
    } catch (f) {
      s = !0, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (s)
          throw i;
      }
    }
    return u;
  }
}
function kk(e) {
  if (Array.isArray(e))
    return e;
}
function Nk(e) {
  return Lk(e) || Rk(e) || pv(e) || Dk();
}
function Dk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pv(e, t) {
  if (e) {
    if (typeof e == "string")
      return pu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return pu(e, t);
  }
}
function Rk(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Lk(e) {
  if (Array.isArray(e))
    return pu(e);
}
function pu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var Ki = 1e-4, hv = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, vv = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, Uf = function(t, r) {
  return function(n) {
    var i = hv(t, r);
    return vv(i, n);
  };
}, Bk = function(t, r) {
  return function(n) {
    var i = hv(t, r), a = [].concat(Nk(i.map(function(o, u) {
      return o * u;
    }).slice(1)), [0]);
    return vv(a, n);
  };
}, Wf = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0], a = r[1], o = r[2], u = r[3];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        i = 0, a = 0, o = 1, u = 1;
        break;
      case "ease":
        i = 0.25, a = 0.1, o = 0.25, u = 1;
        break;
      case "ease-in":
        i = 0.42, a = 0, o = 1, u = 1;
        break;
      case "ease-out":
        i = 0.42, a = 0, o = 0.58, u = 1;
        break;
      case "ease-in-out":
        i = 0, a = 0, o = 0.58, u = 1;
        break;
      default: {
        var c = r[0].split("(");
        if (c[0] === "cubic-bezier" && c[1].split(")")[0].split(",").length === 4) {
          var s = c[1].split(")")[0].split(",").map(function(v) {
            return parseFloat(v);
          }), f = jk(s, 4);
          i = f[0], a = f[1], o = f[2], u = f[3];
        } else
          Hi(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  Hi([i, o, a, u].every(function(v) {
    return typeof v == "number" && v >= 0 && v <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var l = Uf(i, o), d = Uf(a, u), p = Bk(i, o), g = function(x) {
    return x > 1 ? 1 : x < 0 ? 0 : x;
  }, y = function(x) {
    for (var b = x > 1 ? 1 : x, w = b, m = 0; m < 8; ++m) {
      var h = l(w) - b, O = p(w);
      if (Math.abs(h - b) < Ki || O < Ki)
        return d(w);
      w = g(w - h / O);
    }
    return d(w);
  };
  return y.isStepper = !1, y;
}, Fk = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, o = t.dt, u = o === void 0 ? 17 : o, c = function(f, l, d) {
    var p = -(f - l) * n, g = d * a, y = d + (p - g) * u / 1e3, v = d * u / 1e3 + f;
    return Math.abs(v - l) < Ki && Math.abs(y) < Ki ? [l, 0] : [v, y];
  };
  return c.isStepper = !0, c.dt = u, c;
}, Uk = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0];
  if (typeof i == "string")
    switch (i) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return Wf(i);
      case "spring":
        return Fk();
      default:
        if (i.split("(")[0] === "cubic-bezier")
          return Wf(i);
        Hi(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof i == "function" ? i : (Hi(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function Tn(e) {
  "@babel/helpers - typeof";
  return Tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tn(e);
}
function qf(e) {
  return zk(e) || qk(e) || yv(e) || Wk();
}
function Wk() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qk(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function zk(e) {
  if (Array.isArray(e))
    return vu(e);
}
function zf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _e(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zf(Object(r), !0).forEach(function(n) {
      hu(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hu(e, t, r) {
  return t = Hk(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Hk(e) {
  var t = Kk(e, "string");
  return Tn(t) === "symbol" ? t : String(t);
}
function Kk(e, t) {
  if (Tn(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Tn(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Gk(e, t) {
  return Yk(e) || Vk(e, t) || yv(e, t) || Xk();
}
function Xk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yv(e, t) {
  if (e) {
    if (typeof e == "string")
      return vu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return vu(e, t);
  }
}
function vu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Vk(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0)
          ;
    } catch (f) {
      s = !0, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (s)
          throw i;
      }
    }
    return u;
  }
}
function Yk(e) {
  if (Array.isArray(e))
    return e;
}
var Gi = function(t, r, n) {
  return t + (r - t) * n;
}, yu = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, Zk = function e(t, r, n) {
  var i = Qr(function(a, o) {
    if (yu(o)) {
      var u = t(o.from, o.to, o.velocity), c = Gk(u, 2), s = c[0], f = c[1];
      return _e(_e({}, o), {}, {
        from: s,
        velocity: f
      });
    }
    return o;
  }, r);
  return n < 1 ? Qr(function(a, o) {
    return yu(o) ? _e(_e({}, o), {}, {
      velocity: Gi(o.velocity, i[a].velocity, n),
      from: Gi(o.from, i[a].from, n)
    }) : o;
  }, r) : e(t, i, n - 1);
};
const Jk = function(e, t, r, n, i) {
  var a = Pk(e, t), o = a.reduce(function(v, x) {
    return _e(_e({}, v), {}, hu({}, x, [e[x], t[x]]));
  }, {}), u = a.reduce(function(v, x) {
    return _e(_e({}, v), {}, hu({}, x, {
      from: e[x],
      velocity: 0,
      to: t[x]
    }));
  }, {}), c = -1, s, f, l = function() {
    return null;
  }, d = function() {
    return Qr(function(x, b) {
      return b.from;
    }, u);
  }, p = function() {
    return !Object.values(u).filter(yu).length;
  }, g = function(x) {
    s || (s = x);
    var b = x - s, w = b / r.dt;
    u = Zk(r, u, w), i(_e(_e(_e({}, e), t), d())), s = x, p() || (c = requestAnimationFrame(l));
  }, y = function(x) {
    f || (f = x);
    var b = (x - f) / n, w = Qr(function(h, O) {
      return Gi.apply(void 0, qf(O).concat([r(b)]));
    }, o);
    if (i(_e(_e(_e({}, e), t), w)), b < 1)
      c = requestAnimationFrame(l);
    else {
      var m = Qr(function(h, O) {
        return Gi.apply(void 0, qf(O).concat([r(1)]));
      }, o);
      i(_e(_e(_e({}, e), t), m));
    }
  };
  return l = r.isStepper ? g : y, function() {
    return requestAnimationFrame(l), function() {
      cancelAnimationFrame(c);
    };
  };
};
function xr(e) {
  "@babel/helpers - typeof";
  return xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xr(e);
}
var Qk = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function e2(e, t) {
  if (e == null)
    return {};
  var r = t2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function t2(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function lo(e) {
  return a2(e) || i2(e) || n2(e) || r2();
}
function r2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function n2(e, t) {
  if (e) {
    if (typeof e == "string")
      return gu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return gu(e, t);
  }
}
function i2(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function a2(e) {
  if (Array.isArray(e))
    return gu(e);
}
function gu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Hf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ze(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hf(Object(r), !0).forEach(function(n) {
      Yr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Yr(e, t, r) {
  return t = gv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function o2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Kf(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, gv(n.key), n);
  }
}
function u2(e, t, r) {
  return t && Kf(e.prototype, t), r && Kf(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function gv(e) {
  var t = c2(e, "string");
  return xr(t) === "symbol" ? t : String(t);
}
function c2(e, t) {
  if (xr(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (xr(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function s2(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && mu(e, t);
}
function mu(e, t) {
  return mu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, mu(e, t);
}
function l2(e) {
  var t = f2();
  return function() {
    var n = Xi(e), i;
    if (t) {
      var a = Xi(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return bu(this, i);
  };
}
function bu(e, t) {
  if (t && (xr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return xu(e);
}
function xu(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function f2() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Xi(e) {
  return Xi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Xi(e);
}
var Tt = /* @__PURE__ */ function(e) {
  s2(r, e);
  var t = l2(r);
  function r(n, i) {
    var a;
    o2(this, r), a = t.call(this, n, i);
    var o = a.props, u = o.isActive, c = o.attributeName, s = o.from, f = o.to, l = o.steps, d = o.children, p = o.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind(xu(a)), a.changeStyle = a.changeStyle.bind(xu(a)), !u || p <= 0)
      return a.state = {
        style: {}
      }, typeof d == "function" && (a.state = {
        style: f
      }), bu(a);
    if (l && l.length)
      a.state = {
        style: l[0].style
      };
    else if (s) {
      if (typeof d == "function")
        return a.state = {
          style: s
        }, bu(a);
      a.state = {
        style: c ? Yr({}, c, s) : s
      };
    } else
      a.state = {
        style: {}
      };
    return a;
  }
  return u2(r, [{
    key: "componentDidMount",
    value: function() {
      var i = this.props, a = i.isActive, o = i.canBegin;
      this.mounted = !0, !(!a || !o) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      var a = this.props, o = a.isActive, u = a.canBegin, c = a.attributeName, s = a.shouldReAnimate, f = a.to, l = a.from, d = this.state.style;
      if (u) {
        if (!o) {
          var p = {
            style: c ? Yr({}, c, f) : f
          };
          this.state && d && (c && d[c] !== f || !c && d !== f) && this.setState(p);
          return;
        }
        if (!(gk(i.to, f) && i.canBegin && i.isActive)) {
          var g = !i.canBegin || !i.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var y = g || s ? l : i.to;
          if (this.state && d) {
            var v = {
              style: c ? Yr({}, c, y) : y
            };
            (c && d[c] !== y || !c && d !== y) && this.setState(v);
          }
          this.runAnimation(Ze(Ze({}, this.props), {}, {
            from: y,
            begin: 0
          }));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var i = this.props.onAnimationEnd;
      this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), i && i();
    }
  }, {
    key: "handleStyleChange",
    value: function(i) {
      this.changeStyle(i);
    }
  }, {
    key: "changeStyle",
    value: function(i) {
      this.mounted && this.setState({
        style: i
      });
    }
  }, {
    key: "runJSAnimation",
    value: function(i) {
      var a = this, o = i.from, u = i.to, c = i.duration, s = i.easing, f = i.begin, l = i.onAnimationEnd, d = i.onAnimationStart, p = Jk(o, u, Uk(s), c, this.changeStyle), g = function() {
        a.stopJSAnimation = p();
      };
      this.manager.start([d, f, g, c, l]);
    }
  }, {
    key: "runStepAnimation",
    value: function(i) {
      var a = this, o = i.steps, u = i.begin, c = i.onAnimationStart, s = o[0], f = s.style, l = s.duration, d = l === void 0 ? 0 : l, p = function(y, v, x) {
        if (x === 0)
          return y;
        var b = v.duration, w = v.easing, m = w === void 0 ? "ease" : w, h = v.style, O = v.properties, S = v.onAnimationEnd, A = x > 0 ? o[x - 1] : v, M = O || Object.keys(h);
        if (typeof m == "function" || m === "spring")
          return [].concat(lo(y), [a.runJSAnimation.bind(a, {
            from: A.style,
            to: h,
            duration: b,
            easing: m
          }), b]);
        var E = Ff(M, b, m), T = Ze(Ze(Ze({}, A.style), h), {}, {
          transition: E
        });
        return [].concat(lo(y), [T, b, S]).filter(Tk);
      };
      return this.manager.start([c].concat(lo(o.reduce(p, [f, Math.max(d, u)])), [i.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(i) {
      this.manager || (this.manager = Ak());
      var a = i.begin, o = i.duration, u = i.attributeName, c = i.to, s = i.easing, f = i.onAnimationStart, l = i.onAnimationEnd, d = i.steps, p = i.children, g = this.manager;
      if (this.unSubscribe = g.subscribe(this.handleStyleChange), typeof s == "function" || typeof p == "function" || s === "spring") {
        this.runJSAnimation(i);
        return;
      }
      if (d.length > 1) {
        this.runStepAnimation(i);
        return;
      }
      var y = u ? Yr({}, u, c) : c, v = Ff(Object.keys(y), o, s);
      g.start([f, a, Ze(Ze({}, y), {}, {
        transition: v
      }), o, l]);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.children;
      i.begin;
      var o = i.duration;
      i.attributeName, i.easing;
      var u = i.isActive;
      i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
      var c = e2(i, Qk), s = Kt.count(a), f = this.state.style;
      if (typeof a == "function")
        return a(f);
      if (!u || s === 0 || o <= 0)
        return a;
      var l = function(p) {
        var g = p.props, y = g.style, v = y === void 0 ? {} : y, x = g.className, b = /* @__PURE__ */ xe(p, Ze(Ze({}, c), {}, {
          style: Ze(Ze({}, v), f),
          className: x
        }));
        return b;
      };
      return s === 1 ? l(Kt.only(a)) : /* @__PURE__ */ _.createElement("div", null, Kt.map(a, function(d) {
        return l(d);
      }));
    }
  }]), r;
}(wt);
Tt.displayName = "Animate";
Tt.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function() {
  },
  onAnimationStart: function() {
  }
};
Tt.propTypes = {
  from: H.oneOfType([H.object, H.string]),
  to: H.oneOfType([H.object, H.string]),
  attributeName: H.string,
  // animation duration
  duration: H.number,
  begin: H.number,
  easing: H.oneOfType([H.string, H.func]),
  steps: H.arrayOf(H.shape({
    duration: H.number.isRequired,
    style: H.object.isRequired,
    easing: H.oneOfType([H.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), H.func]),
    // transition css properties(dash case), optional
    properties: H.arrayOf("string"),
    onAnimationEnd: H.func
  })),
  children: H.oneOfType([H.node, H.func]),
  isActive: H.bool,
  canBegin: H.bool,
  onAnimationEnd: H.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: H.bool,
  onAnimationStart: H.func,
  onAnimationReStart: H.func
};
H.object, H.object, H.object, H.element;
H.object, H.object, H.object, H.oneOfType([H.array, H.element]), H.any;
function En(e) {
  "@babel/helpers - typeof";
  return En = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, En(e);
}
function Vi() {
  return Vi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vi.apply(this, arguments);
}
function d2(e, t) {
  return y2(e) || v2(e, t) || h2(e, t) || p2();
}
function p2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function h2(e, t) {
  if (e) {
    if (typeof e == "string")
      return Gf(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Gf(e, t);
  }
}
function Gf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function v2(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0)
          ;
    } catch (f) {
      s = !0, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (s)
          throw i;
      }
    }
    return u;
  }
}
function y2(e) {
  if (Array.isArray(e))
    return e;
}
function Xf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xf(Object(r), !0).forEach(function(n) {
      g2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function g2(e, t, r) {
  return t = m2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function m2(e) {
  var t = b2(e, "string");
  return En(t) == "symbol" ? t : String(t);
}
function b2(e, t) {
  if (En(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (En(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Yf = function(t, r, n, i, a) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), u = i >= 0 ? 1 : -1, c = n >= 0 ? 1 : -1, s = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, f;
  if (o > 0 && a instanceof Array) {
    for (var l = [0, 0, 0, 0], d = 0, p = 4; d < p; d++)
      l[d] = a[d] > o ? o : a[d];
    f = "M".concat(t, ",").concat(r + u * l[0]), l[0] > 0 && (f += "A ".concat(l[0], ",").concat(l[0], ",0,0,").concat(s, ",").concat(t + c * l[0], ",").concat(r)), f += "L ".concat(t + n - c * l[1], ",").concat(r), l[1] > 0 && (f += "A ".concat(l[1], ",").concat(l[1], ",0,0,").concat(s, `,
        `).concat(t + n, ",").concat(r + u * l[1])), f += "L ".concat(t + n, ",").concat(r + i - u * l[2]), l[2] > 0 && (f += "A ".concat(l[2], ",").concat(l[2], ",0,0,").concat(s, `,
        `).concat(t + n - c * l[2], ",").concat(r + i)), f += "L ".concat(t + c * l[3], ",").concat(r + i), l[3] > 0 && (f += "A ".concat(l[3], ",").concat(l[3], ",0,0,").concat(s, `,
        `).concat(t, ",").concat(r + i - u * l[3])), f += "Z";
  } else if (o > 0 && a === +a && a > 0) {
    var g = Math.min(o, a);
    f = "M ".concat(t, ",").concat(r + u * g, `
            A `).concat(g, ",").concat(g, ",0,0,").concat(s, ",").concat(t + c * g, ",").concat(r, `
            L `).concat(t + n - c * g, ",").concat(r, `
            A `).concat(g, ",").concat(g, ",0,0,").concat(s, ",").concat(t + n, ",").concat(r + u * g, `
            L `).concat(t + n, ",").concat(r + i - u * g, `
            A `).concat(g, ",").concat(g, ",0,0,").concat(s, ",").concat(t + n - c * g, ",").concat(r + i, `
            L `).concat(t + c * g, ",").concat(r + i, `
            A `).concat(g, ",").concat(g, ",0,0,").concat(s, ",").concat(t, ",").concat(r + i - u * g, " Z");
  } else
    f = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
  return f;
}, x2 = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, i = t.y, a = r.x, o = r.y, u = r.width, c = r.height;
  if (Math.abs(u) > 0 && Math.abs(c) > 0) {
    var s = Math.min(a, a + u), f = Math.max(a, a + u), l = Math.min(o, o + c), d = Math.max(o, o + c);
    return n >= s && n <= f && i >= l && i <= d;
  }
  return !1;
}, w2 = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, Dc = function(t) {
  var r = Vf(Vf({}, w2), t), n = yi(), i = Du(-1), a = d2(i, 2), o = a[0], u = a[1];
  Ru(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var m = n.current.getTotalLength();
        m && u(m);
      } catch {
      }
  }, []);
  var c = r.x, s = r.y, f = r.width, l = r.height, d = r.radius, p = r.className, g = r.animationEasing, y = r.animationDuration, v = r.animationBegin, x = r.isAnimationActive, b = r.isUpdateAnimationActive;
  if (c !== +c || s !== +s || f !== +f || l !== +l || f === 0 || l === 0)
    return null;
  var w = he("recharts-rectangle", p);
  return b ? /* @__PURE__ */ _.createElement(Tt, {
    canBegin: o > 0,
    from: {
      width: f,
      height: l,
      x: c,
      y: s
    },
    to: {
      width: f,
      height: l,
      x: c,
      y: s
    },
    duration: y,
    animationEasing: g,
    isActive: b
  }, function(m) {
    var h = m.width, O = m.height, S = m.x, A = m.y;
    return /* @__PURE__ */ _.createElement(Tt, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: v,
      duration: y,
      isActive: x,
      easing: g
    }, /* @__PURE__ */ _.createElement("path", Vi({}, X(r, !0), {
      className: w,
      d: Yf(S, A, h, O, d),
      ref: n
    })));
  }) : /* @__PURE__ */ _.createElement("path", Vi({}, X(r, !0), {
    className: w,
    d: Yf(c, s, f, l, d)
  }));
}, O2 = ["points", "className", "baseLinePoints", "connectNulls"];
function ur() {
  return ur = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ur.apply(this, arguments);
}
function S2(e, t) {
  if (e == null)
    return {};
  var r = A2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function A2(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Zf(e) {
  return T2(e) || P2(e) || $2(e) || _2();
}
function _2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $2(e, t) {
  if (e) {
    if (typeof e == "string")
      return wu(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return wu(e, t);
  }
}
function P2(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function T2(e) {
  if (Array.isArray(e))
    return wu(e);
}
function wu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var Jf = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, E2 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    Jf(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), Jf(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, en = function(t, r) {
  var n = E2(t);
  r && (n = [n.reduce(function(a, o) {
    return [].concat(Zf(a), Zf(o));
  }, [])]);
  var i = n.map(function(a) {
    return a.reduce(function(o, u, c) {
      return "".concat(o).concat(c === 0 ? "M" : "L").concat(u.x, ",").concat(u.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(i, "Z") : i;
}, M2 = function(t, r, n) {
  var i = en(t, n);
  return "".concat(i.slice(-1) === "Z" ? i.slice(0, -1) : i, "L").concat(en(r.reverse(), n).slice(1));
}, j2 = function(t) {
  var r = t.points, n = t.className, i = t.baseLinePoints, a = t.connectNulls, o = S2(t, O2);
  if (!r || !r.length)
    return null;
  var u = he("recharts-polygon", n);
  if (i && i.length) {
    var c = o.stroke && o.stroke !== "none", s = M2(r, i, a);
    return /* @__PURE__ */ _.createElement("g", {
      className: u
    }, /* @__PURE__ */ _.createElement("path", ur({}, X(o, !0), {
      fill: s.slice(-1) === "Z" ? o.fill : "none",
      stroke: "none",
      d: s
    })), c ? /* @__PURE__ */ _.createElement("path", ur({}, X(o, !0), {
      fill: "none",
      d: en(r, a)
    })) : null, c ? /* @__PURE__ */ _.createElement("path", ur({}, X(o, !0), {
      fill: "none",
      d: en(i, a)
    })) : null);
  }
  var f = en(r, a);
  return /* @__PURE__ */ _.createElement("path", ur({}, X(o, !0), {
    fill: f.slice(-1) === "Z" ? o.fill : "none",
    className: u,
    d: f
  }));
};
function Ou() {
  return Ou = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ou.apply(this, arguments);
}
var Rc = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, o = he("recharts-dot", a);
  return r === +r && n === +n && i === +i ? /* @__PURE__ */ _.createElement("circle", Ou({}, X(t, !1), gi(t), {
    className: o,
    cx: r,
    cy: n,
    r: i
  })) : null;
};
function Mn(e) {
  "@babel/helpers - typeof";
  return Mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mn(e);
}
var I2 = ["x", "y", "top", "left", "width", "height", "className"];
function Su() {
  return Su = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Su.apply(this, arguments);
}
function Qf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function C2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qf(Object(r), !0).forEach(function(n) {
      k2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function k2(e, t, r) {
  return t = N2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function N2(e) {
  var t = D2(e, "string");
  return Mn(t) == "symbol" ? t : String(t);
}
function D2(e, t) {
  if (Mn(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Mn(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function R2(e, t) {
  if (e == null)
    return {};
  var r = L2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function L2(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var B2 = function(t, r, n, i, a, o) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n);
}, F2 = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.top, u = o === void 0 ? 0 : o, c = t.left, s = c === void 0 ? 0 : c, f = t.width, l = f === void 0 ? 0 : f, d = t.height, p = d === void 0 ? 0 : d, g = t.className, y = R2(t, I2), v = C2({
    x: n,
    y: a,
    top: u,
    left: s,
    width: l,
    height: p
  }, y);
  return !B(n) || !B(a) || !B(l) || !B(p) || !B(u) || !B(s) ? null : /* @__PURE__ */ _.createElement("path", Su({}, X(v, !0), {
    className: he("recharts-cross", g),
    d: B2(n, a, l, p, u, s)
  }));
}, U2 = Pa, W2 = Fh, q2 = Mt;
function z2(e, t) {
  return e && e.length ? U2(e, q2(t), W2) : void 0;
}
var H2 = z2;
const K2 = /* @__PURE__ */ ce(H2);
var G2 = Pa, X2 = Mt, V2 = Uh;
function Y2(e, t) {
  return e && e.length ? G2(e, X2(t), V2) : void 0;
}
var Z2 = Y2;
const J2 = /* @__PURE__ */ ce(Z2);
var Q2 = ["cx", "cy", "angle", "ticks", "axisLine"], eN = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function wr(e) {
  "@babel/helpers - typeof";
  return wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wr(e);
}
function tn() {
  return tn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, tn.apply(this, arguments);
}
function ed(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ed(Object(r), !0).forEach(function(n) {
      Ia(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ed(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function td(e, t) {
  if (e == null)
    return {};
  var r = tN(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function tN(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function rN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, bv(n.key), n);
  }
}
function nN(e, t, r) {
  return t && rd(e.prototype, t), r && rd(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function iN(e, t, r) {
  return t = Yi(t), aN(e, mv() ? Reflect.construct(t, r || [], Yi(e).constructor) : t.apply(e, r));
}
function aN(e, t) {
  if (t && (wr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return oN(e);
}
function oN(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (mv = function() {
    return !!e;
  })();
}
function Yi(e) {
  return Yi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Yi(e);
}
function uN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Au(e, t);
}
function Au(e, t) {
  return Au = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Au(e, t);
}
function Ia(e, t, r) {
  return t = bv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bv(e) {
  var t = cN(e, "string");
  return wr(t) == "symbol" ? t : String(t);
}
function cN(e, t) {
  if (wr(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (wr(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ca = /* @__PURE__ */ function(e) {
  uN(t, e);
  function t() {
    return rN(this, t), iN(this, t, arguments);
  }
  return nN(t, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(n) {
        var i = n.coordinate, a = this.props, o = a.angle, u = a.cx, c = a.cy;
        return ue(u, c, i, o);
      }
    )
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var n = this.props.orientation, i;
      switch (n) {
        case "left":
          i = "end";
          break;
        case "right":
          i = "start";
          break;
        default:
          i = "middle";
          break;
      }
      return i;
    }
  }, {
    key: "getViewBox",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, o = n.angle, u = n.ticks, c = K2(u, function(f) {
        return f.coordinate || 0;
      }), s = J2(u, function(f) {
        return f.coordinate || 0;
      });
      return {
        cx: i,
        cy: a,
        startAngle: o,
        endAngle: o,
        innerRadius: s.coordinate || 0,
        outerRadius: c.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, o = n.angle, u = n.ticks, c = n.axisLine, s = td(n, Q2), f = u.reduce(function(g, y) {
        return [Math.min(g[0], y.coordinate), Math.max(g[1], y.coordinate)];
      }, [1 / 0, -1 / 0]), l = ue(i, a, f[0], o), d = ue(i, a, f[1], o), p = Rt(Rt(Rt({}, X(s, !1)), {}, {
        fill: "none"
      }, X(c, !1)), {}, {
        x1: l.x,
        y1: l.y,
        x2: d.x,
        y2: d.y
      });
      return /* @__PURE__ */ _.createElement("line", tn({
        className: "recharts-polar-radius-axis-line"
      }, p));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, o = i.tick, u = i.angle, c = i.tickFormatter, s = i.stroke, f = td(i, eN), l = this.getTickTextAnchor(), d = X(f, !1), p = X(o, !1), g = a.map(function(y, v) {
        var x = n.getTickValueCoord(y), b = Rt(Rt(Rt(Rt({
          textAnchor: l,
          transform: "rotate(".concat(90 - u, ", ").concat(x.x, ", ").concat(x.y, ")")
        }, d), {}, {
          stroke: "none",
          fill: s
        }, p), {}, {
          index: v
        }, x), {}, {
          payload: y
        });
        return /* @__PURE__ */ _.createElement(ye, tn({
          className: "recharts-polar-radius-axis-tick",
          key: "tick-".concat(y.coordinate)
        }, pa(n.props, y, v)), t.renderTickItem(o, b, c ? c(y.value, v) : y.value));
      });
      return /* @__PURE__ */ _.createElement(ye, {
        className: "recharts-polar-radius-axis-ticks"
      }, g);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.ticks, a = n.axisLine, o = n.tick;
      return !i || !i.length ? null : /* @__PURE__ */ _.createElement(ye, {
        className: "recharts-polar-radius-axis"
      }, a && this.renderAxisLine(), o && this.renderTicks(), $e.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o;
      return /* @__PURE__ */ _.isValidElement(n) ? o = /* @__PURE__ */ _.cloneElement(n, i) : Z(n) ? o = n(i) : o = /* @__PURE__ */ _.createElement(yr, tn({}, i, {
        className: "recharts-polar-radius-axis-tick-value"
      }), a), o;
    }
  }]), t;
}(wt);
Ia(Ca, "displayName", "PolarRadiusAxis");
Ia(Ca, "axisType", "radiusAxis");
Ia(Ca, "defaultProps", {
  type: "number",
  radiusAxisId: 0,
  cx: 0,
  cy: 0,
  angle: 0,
  orientation: "right",
  stroke: "#ccc",
  axisLine: !0,
  tick: !0,
  tickCount: 5,
  allowDataOverflow: !1,
  scale: "auto",
  allowDuplicatedCategory: !0
});
function Or(e) {
  "@babel/helpers - typeof";
  return Or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Or(e);
}
function Wt() {
  return Wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wt.apply(this, arguments);
}
function nd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nd(Object(r), !0).forEach(function(n) {
      ka(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function id(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, wv(n.key), n);
  }
}
function lN(e, t, r) {
  return t && id(e.prototype, t), r && id(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function fN(e, t, r) {
  return t = Zi(t), dN(e, xv() ? Reflect.construct(t, r || [], Zi(e).constructor) : t.apply(e, r));
}
function dN(e, t) {
  if (t && (Or(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return pN(e);
}
function pN(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function xv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (xv = function() {
    return !!e;
  })();
}
function Zi(e) {
  return Zi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Zi(e);
}
function hN(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && _u(e, t);
}
function _u(e, t) {
  return _u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, _u(e, t);
}
function ka(e, t, r) {
  return t = wv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wv(e) {
  var t = vN(e, "string");
  return Or(t) == "symbol" ? t : String(t);
}
function vN(e, t) {
  if (Or(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Or(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var yN = Math.PI / 180, ad = 1e-5, Na = /* @__PURE__ */ function(e) {
  hN(t, e);
  function t() {
    return sN(this, t), fN(this, t, arguments);
  }
  return lN(t, [{
    key: "getTickLineCoord",
    value: (
      /**
       * Calculate the coordinate of line endpoint
       * @param  {Object} data The Data if ticks
       * @return {Object} (x0, y0): The start point of text,
       *                  (x1, y1): The end point close to text,
       *                  (x2, y2): The end point close to axis
       */
      function(n) {
        var i = this.props, a = i.cx, o = i.cy, u = i.radius, c = i.orientation, s = i.tickSize, f = s || 8, l = ue(a, o, u, n.coordinate), d = ue(a, o, u + (c === "inner" ? -1 : 1) * f, n.coordinate);
        return {
          x1: l.x,
          y1: l.y,
          x2: d.x,
          y2: d.y
        };
      }
    )
    /**
     * Get the text-anchor of each tick
     * @param  {Object} data Data of ticks
     * @return {String} text-anchor
     */
  }, {
    key: "getTickTextAnchor",
    value: function(n) {
      var i = this.props.orientation, a = Math.cos(-n.coordinate * yN), o;
      return a > ad ? o = i === "outer" ? "start" : "end" : a < -ad ? o = i === "outer" ? "end" : "start" : o = "middle", o;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, o = n.radius, u = n.axisLine, c = n.axisLineType, s = Lt(Lt({}, X(this.props, !1)), {}, {
        fill: "none"
      }, X(u, !1));
      if (c === "circle")
        return /* @__PURE__ */ _.createElement(Rc, Wt({
          className: "recharts-polar-angle-axis-line"
        }, s, {
          cx: i,
          cy: a,
          r: o
        }));
      var f = this.props.ticks, l = f.map(function(d) {
        return ue(i, a, o, d.coordinate);
      });
      return /* @__PURE__ */ _.createElement(j2, Wt({
        className: "recharts-polar-angle-axis-line"
      }, s, {
        points: l
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, o = i.tick, u = i.tickLine, c = i.tickFormatter, s = i.stroke, f = X(this.props, !1), l = X(o, !1), d = Lt(Lt({}, f), {}, {
        fill: "none"
      }, X(u, !1)), p = a.map(function(g, y) {
        var v = n.getTickLineCoord(g), x = n.getTickTextAnchor(g), b = Lt(Lt(Lt({
          textAnchor: x
        }, f), {}, {
          stroke: "none",
          fill: s
        }, l), {}, {
          index: y,
          payload: g,
          x: v.x2,
          y: v.y2
        });
        return /* @__PURE__ */ _.createElement(ye, Wt({
          className: "recharts-polar-angle-axis-tick",
          key: "tick-".concat(g.coordinate)
        }, pa(n.props, g, y)), u && /* @__PURE__ */ _.createElement("line", Wt({
          className: "recharts-polar-angle-axis-tick-line"
        }, d, v)), o && t.renderTickItem(o, b, c ? c(g.value, y) : g.value));
      });
      return /* @__PURE__ */ _.createElement(ye, {
        className: "recharts-polar-angle-axis-ticks"
      }, p);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.ticks, a = n.radius, o = n.axisLine;
      return a <= 0 || !i || !i.length ? null : /* @__PURE__ */ _.createElement(ye, {
        className: "recharts-polar-angle-axis"
      }, o && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var o;
      return /* @__PURE__ */ _.isValidElement(n) ? o = /* @__PURE__ */ _.cloneElement(n, i) : Z(n) ? o = n(i) : o = /* @__PURE__ */ _.createElement(yr, Wt({}, i, {
        className: "recharts-polar-angle-axis-tick-value"
      }), a), o;
    }
  }]), t;
}(wt);
ka(Na, "displayName", "PolarAngleAxis");
ka(Na, "axisType", "angleAxis");
ka(Na, "defaultProps", {
  type: "category",
  angleAxisId: 0,
  scale: "auto",
  cx: 0,
  cy: 0,
  orientation: "outer",
  axisLine: !0,
  tickLine: !0,
  tickSize: 8,
  tick: !0,
  hide: !1,
  allowDuplicatedCategory: !0
});
var gN = Dp, mN = gN(Object.getPrototypeOf, Object), bN = mN, xN = Ot, wN = bN, ON = St, SN = "[object Object]", AN = Function.prototype, _N = Object.prototype, Ov = AN.toString, $N = _N.hasOwnProperty, PN = Ov.call(Object);
function TN(e) {
  if (!ON(e) || xN(e) != SN)
    return !1;
  var t = wN(e);
  if (t === null)
    return !0;
  var r = $N.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Ov.call(r) == PN;
}
var EN = TN;
const MN = /* @__PURE__ */ ce(EN);
var jN = Ot, IN = St, CN = "[object Boolean]";
function kN(e) {
  return e === !0 || e === !1 || IN(e) && jN(e) == CN;
}
var NN = kN;
const DN = /* @__PURE__ */ ce(NN);
function jn(e) {
  "@babel/helpers - typeof";
  return jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jn(e);
}
function Ji() {
  return Ji = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ji.apply(this, arguments);
}
function RN(e, t) {
  return UN(e) || FN(e, t) || BN(e, t) || LN();
}
function LN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BN(e, t) {
  if (e) {
    if (typeof e == "string")
      return od(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return od(e, t);
  }
}
function od(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function FN(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0)
          ;
    } catch (f) {
      s = !0, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (s)
          throw i;
      }
    }
    return u;
  }
}
function UN(e) {
  if (Array.isArray(e))
    return e;
}
function ud(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ud(Object(r), !0).forEach(function(n) {
      WN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ud(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function WN(e, t, r) {
  return t = qN(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qN(e) {
  var t = zN(e, "string");
  return jn(t) == "symbol" ? t : String(t);
}
function zN(e, t) {
  if (jn(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (jn(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var sd = function(t, r, n, i, a) {
  var o = n - i, u;
  return u = "M ".concat(t, ",").concat(r), u += "L ".concat(t + n, ",").concat(r), u += "L ".concat(t + n - o / 2, ",").concat(r + a), u += "L ".concat(t + n - o / 2 - i, ",").concat(r + a), u += "L ".concat(t, ",").concat(r, " Z"), u;
}, HN = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, KN = function(t) {
  var r = cd(cd({}, HN), t), n = yi(), i = Du(-1), a = RN(i, 2), o = a[0], u = a[1];
  Ru(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var w = n.current.getTotalLength();
        w && u(w);
      } catch {
      }
  }, []);
  var c = r.x, s = r.y, f = r.upperWidth, l = r.lowerWidth, d = r.height, p = r.className, g = r.animationEasing, y = r.animationDuration, v = r.animationBegin, x = r.isUpdateAnimationActive;
  if (c !== +c || s !== +s || f !== +f || l !== +l || d !== +d || f === 0 && l === 0 || d === 0)
    return null;
  var b = he("recharts-trapezoid", p);
  return x ? /* @__PURE__ */ _.createElement(Tt, {
    canBegin: o > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: d,
      x: c,
      y: s
    },
    to: {
      upperWidth: f,
      lowerWidth: l,
      height: d,
      x: c,
      y: s
    },
    duration: y,
    animationEasing: g,
    isActive: x
  }, function(w) {
    var m = w.upperWidth, h = w.lowerWidth, O = w.height, S = w.x, A = w.y;
    return /* @__PURE__ */ _.createElement(Tt, {
      canBegin: o > 0,
      from: "0px ".concat(o === -1 ? 1 : o, "px"),
      to: "".concat(o, "px 0px"),
      attributeName: "strokeDasharray",
      begin: v,
      duration: y,
      easing: g
    }, /* @__PURE__ */ _.createElement("path", Ji({}, X(r, !0), {
      className: b,
      d: sd(S, A, m, h, O),
      ref: n
    })));
  }) : /* @__PURE__ */ _.createElement("g", null, /* @__PURE__ */ _.createElement("path", Ji({}, X(r, !0), {
    className: b,
    d: sd(c, s, f, l, d)
  })));
}, GN = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function In(e) {
  "@babel/helpers - typeof";
  return In = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, In(e);
}
function XN(e, t) {
  if (e == null)
    return {};
  var r = VN(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function VN(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function ld(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ld(Object(r), !0).forEach(function(n) {
      YN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ld(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function YN(e, t, r) {
  return t = ZN(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ZN(e) {
  var t = JN(e, "string");
  return In(t) == "symbol" ? t : String(t);
}
function JN(e, t) {
  if (In(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (In(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function QN(e, t) {
  return Qi(Qi({}, t), e);
}
function eD(e, t) {
  return e === "symbols";
}
function fd(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ _.createElement(Dc, r);
    case "trapezoid":
      return /* @__PURE__ */ _.createElement(KN, r);
    case "sector":
      return /* @__PURE__ */ _.createElement(sv, r);
    case "symbols":
      if (eD(t))
        return /* @__PURE__ */ _.createElement(Zu, r);
      break;
    default:
      return null;
  }
}
function tD(e) {
  return /* @__PURE__ */ it(e) ? e.props : e;
}
function rD(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, i = n === void 0 ? QN : n, a = e.activeClassName, o = a === void 0 ? "recharts-active-shape" : a, u = e.isActive, c = XN(e, GN), s;
  if (/* @__PURE__ */ it(t))
    s = /* @__PURE__ */ xe(t, Qi(Qi({}, c), tD(t)));
  else if (Z(t))
    s = t(c);
  else if (MN(t) && !DN(t)) {
    var f = i(t, c);
    s = /* @__PURE__ */ _.createElement(fd, {
      shapeType: r,
      elementProps: f
    });
  } else {
    var l = c;
    s = /* @__PURE__ */ _.createElement(fd, {
      shapeType: r,
      elementProps: l
    });
  }
  return u ? /* @__PURE__ */ _.createElement(ye, {
    className: o
  }, s) : s;
}
function Da(e, t) {
  return t != null && "trapezoids" in e.props;
}
function Ra(e, t) {
  return t != null && "sectors" in e.props;
}
function Cn(e, t) {
  return t != null && "points" in e.props;
}
function nD(e, t) {
  var r, n, i = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, a = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return i && a;
}
function iD(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function aD(e, t) {
  var r = e.x === t.x, n = e.y === t.y, i = e.z === t.z;
  return r && n && i;
}
function oD(e, t) {
  var r;
  return Da(e, t) ? r = nD : Ra(e, t) ? r = iD : Cn(e, t) && (r = aD), r;
}
function uD(e, t) {
  var r;
  return Da(e, t) ? r = "trapezoids" : Ra(e, t) ? r = "sectors" : Cn(e, t) && (r = "points"), r;
}
function cD(e, t) {
  if (Da(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (Ra(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return Cn(e, t) ? t.payload : {};
}
function sD(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, i = uD(r, t), a = cD(r, t), o = n.filter(function(c, s) {
    var f = jc(a, c), l = r.props[i].filter(function(g) {
      var y = oD(r, t);
      return y(g, t);
    }), d = r.props[i].indexOf(l[l.length - 1]), p = s === d;
    return f && p;
  }), u = n.indexOf(o[o.length - 1]);
  return u;
}
var vi;
function Sr(e) {
  "@babel/helpers - typeof";
  return Sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sr(e);
}
function cr() {
  return cr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, cr.apply(this, arguments);
}
function dd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function de(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dd(Object(r), !0).forEach(function(n) {
      ze(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function lD(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Av(n.key), n);
  }
}
function fD(e, t, r) {
  return t && pd(e.prototype, t), r && pd(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function dD(e, t, r) {
  return t = ea(t), pD(e, Sv() ? Reflect.construct(t, r || [], ea(e).constructor) : t.apply(e, r));
}
function pD(e, t) {
  if (t && (Sr(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ar(e);
}
function Sv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Sv = function() {
    return !!e;
  })();
}
function ea(e) {
  return ea = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ea(e);
}
function ar(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && $u(e, t);
}
function $u(e, t) {
  return $u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, $u(e, t);
}
function ze(e, t, r) {
  return t = Av(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Av(e) {
  var t = vD(e, "string");
  return Sr(t) == "symbol" ? t : String(t);
}
function vD(e, t) {
  if (Sr(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Sr(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _t = /* @__PURE__ */ function(e) {
  hD(t, e);
  function t(r) {
    var n;
    return lD(this, t), n = dD(this, t, [r]), ze(ar(n), "pieRef", null), ze(ar(n), "sectorRefs", []), ze(ar(n), "id", da("recharts-pie-")), ze(ar(n), "handleAnimationEnd", function() {
      var i = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), Z(i) && i();
    }), ze(ar(n), "handleAnimationStart", function() {
      var i = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), Z(i) && i();
    }), n.state = {
      isAnimationFinished: !r.isAnimationActive,
      prevIsAnimationActive: r.isAnimationActive,
      prevAnimationId: r.animationId,
      sectorToFocus: 0
    }, n;
  }
  return fD(t, [{
    key: "isActiveIndex",
    value: function(n) {
      var i = this.props.activeIndex;
      return Array.isArray(i) ? i.indexOf(n) !== -1 : n === i;
    }
  }, {
    key: "hasActiveIndex",
    value: function() {
      var n = this.props.activeIndex;
      return Array.isArray(n) ? n.length !== 0 : n || n === 0;
    }
  }, {
    key: "renderLabels",
    value: function(n) {
      var i = this.props.isAnimationActive;
      if (i && !this.state.isAnimationFinished)
        return null;
      var a = this.props, o = a.label, u = a.labelLine, c = a.dataKey, s = a.valueKey, f = X(this.props, !1), l = X(o, !1), d = X(u, !1), p = o && o.offsetRadius || 20, g = n.map(function(y, v) {
        var x = (y.startAngle + y.endAngle) / 2, b = ue(y.cx, y.cy, y.outerRadius + p, x), w = de(de(de(de({}, f), y), {}, {
          stroke: "none"
        }, l), {}, {
          index: v,
          textAnchor: t.getTextAnchor(b.x, y.cx)
        }, b), m = de(de(de(de({}, f), y), {}, {
          fill: "none",
          stroke: y.fill
        }, d), {}, {
          index: v,
          points: [ue(y.cx, y.cy, y.outerRadius, x), b],
          key: "line"
        }), h = c;
        return J(c) && J(s) ? h = "value" : J(c) && (h = s), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ _.createElement(ye, {
          key: "label-".concat(y.startAngle, "-").concat(y.endAngle, "-").concat(y.midAngle, "-").concat(v)
        }, u && t.renderLabelLineItem(u, m), t.renderLabelItem(o, w, Re(y, h)));
      });
      return /* @__PURE__ */ _.createElement(ye, {
        className: "recharts-pie-labels"
      }, g);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(n) {
      var i = this, a = this.props, o = a.activeShape, u = a.blendStroke, c = a.inactiveShape;
      return n.map(function(s, f) {
        if ((s == null ? void 0 : s.startAngle) === 0 && (s == null ? void 0 : s.endAngle) === 0 && n.length !== 1)
          return null;
        var l = i.isActiveIndex(f), d = c && i.hasActiveIndex() ? c : null, p = l ? o : d, g = de(de({}, s), {}, {
          stroke: u ? s.fill : s.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ _.createElement(ye, cr({
          ref: function(v) {
            v && !i.sectorRefs.includes(v) && i.sectorRefs.push(v);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, pa(i.props, s, f), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(s == null ? void 0 : s.startAngle, "-").concat(s == null ? void 0 : s.endAngle, "-").concat(s.midAngle, "-").concat(f)
        }), /* @__PURE__ */ _.createElement(rD, cr({
          option: p,
          isActive: l,
          shapeType: "sector"
        }, g)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.sectors, o = i.isAnimationActive, u = i.animationBegin, c = i.animationDuration, s = i.animationEasing, f = i.animationId, l = this.state, d = l.prevSectors, p = l.prevIsAnimationActive;
      return /* @__PURE__ */ _.createElement(Tt, {
        begin: u,
        duration: c,
        isActive: o,
        easing: s,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(f, "-").concat(p),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(g) {
        var y = g.t, v = [], x = a && a[0], b = x.startAngle;
        return a.forEach(function(w, m) {
          var h = d && d[m], O = m > 0 ? Qe(w, "paddingAngle", 0) : 0;
          if (h) {
            var S = es(h.endAngle - h.startAngle, w.endAngle - w.startAngle), A = de(de({}, w), {}, {
              startAngle: b + O,
              endAngle: b + S(y) + O
            });
            v.push(A), b = A.endAngle;
          } else {
            var M = w.endAngle, E = w.startAngle, T = es(0, M - E), P = T(y), C = de(de({}, w), {}, {
              startAngle: b + O,
              endAngle: b + P + O
            });
            v.push(C), b = C.endAngle;
          }
        }), /* @__PURE__ */ _.createElement(ye, null, n.renderSectorsStatically(v));
      });
    }
  }, {
    key: "attachKeyboardHandlers",
    value: function(n) {
      var i = this;
      n.onkeydown = function(a) {
        if (!a.altKey)
          switch (a.key) {
            case "ArrowLeft": {
              var o = ++i.state.sectorToFocus % i.sectorRefs.length;
              i.sectorRefs[o].focus(), i.setState({
                sectorToFocus: o
              });
              break;
            }
            case "ArrowRight": {
              var u = --i.state.sectorToFocus < 0 ? i.sectorRefs.length - 1 : i.state.sectorToFocus % i.sectorRefs.length;
              i.sectorRefs[u].focus(), i.setState({
                sectorToFocus: u
              });
              break;
            }
            case "Escape": {
              i.sectorRefs[i.state.sectorToFocus].blur(), i.setState({
                sectorToFocus: 0
              });
              break;
            }
          }
      };
    }
  }, {
    key: "renderSectors",
    value: function() {
      var n = this.props, i = n.sectors, a = n.isAnimationActive, o = this.state.prevSectors;
      return a && i && i.length && (!o || !jc(o, i)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(i);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.pieRef && this.attachKeyboardHandlers(this.pieRef);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.hide, o = i.sectors, u = i.className, c = i.label, s = i.cx, f = i.cy, l = i.innerRadius, d = i.outerRadius, p = i.isAnimationActive, g = this.state.isAnimationFinished;
      if (a || !o || !o.length || !B(s) || !B(f) || !B(l) || !B(d))
        return null;
      var y = he("recharts-pie", u);
      return /* @__PURE__ */ _.createElement(ye, {
        tabIndex: this.props.rootTabIndex,
        className: y,
        ref: function(x) {
          n.pieRef = x;
        }
      }, this.renderSectors(), c && this.renderLabels(o), $e.renderCallByParent(this.props, null, !1), (!p || g) && Yt.renderCallByParent(this.props, o, !1));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return i.prevIsAnimationActive !== n.isAnimationActive ? {
        prevIsAnimationActive: n.isAnimationActive,
        prevAnimationId: n.animationId,
        curSectors: n.sectors,
        prevSectors: [],
        isAnimationFinished: !0
      } : n.isAnimationActive && n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curSectors: n.sectors,
        prevSectors: i.curSectors,
        isAnimationFinished: !0
      } : n.sectors !== i.curSectors ? {
        curSectors: n.sectors,
        isAnimationFinished: !0
      } : null;
    }
  }, {
    key: "getTextAnchor",
    value: function(n, i) {
      return n > i ? "start" : n < i ? "end" : "middle";
    }
  }, {
    key: "renderLabelLineItem",
    value: function(n, i) {
      return /* @__PURE__ */ _.isValidElement(n) ? /* @__PURE__ */ _.cloneElement(n, i) : Z(n) ? n(i) : /* @__PURE__ */ _.createElement(fu, cr({}, i, {
        type: "linear",
        className: "recharts-pie-label-line"
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function(n, i, a) {
      if (/* @__PURE__ */ _.isValidElement(n))
        return /* @__PURE__ */ _.cloneElement(n, i);
      var o = a;
      return Z(n) && (o = n(i), /* @__PURE__ */ _.isValidElement(o)) ? o : /* @__PURE__ */ _.createElement(yr, cr({}, i, {
        alignmentBaseline: "middle",
        className: "recharts-pie-label-text"
      }), o);
    }
  }]), t;
}(wt);
vi = _t;
ze(_t, "displayName", "Pie");
ze(_t, "defaultProps", {
  stroke: "#fff",
  fill: "#808080",
  legendType: "rect",
  cx: "50%",
  cy: "50%",
  startAngle: 0,
  endAngle: 360,
  innerRadius: 0,
  outerRadius: "80%",
  paddingAngle: 0,
  labelLine: !0,
  hide: !1,
  minAngle: 0,
  isAnimationActive: !Gt.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
ze(_t, "parseDeltaAngle", function(e, t) {
  var r = Ke(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
});
ze(_t, "getRealPieData", function(e) {
  var t = e.props, r = t.data, n = t.children, i = X(e.props, !1), a = at(n, cc);
  return r && r.length ? r.map(function(o, u) {
    return de(de(de({
      payload: o
    }, i), o), a && a[u] && a[u].props);
  }) : a && a.length ? a.map(function(o) {
    return de(de({}, i), o.props);
  }) : [];
});
ze(_t, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, i = t.width, a = t.height, o = ov(i, a), u = n + Le(e.props.cx, i, i / 2), c = r + Le(e.props.cy, a, a / 2), s = Le(e.props.innerRadius, o, 0), f = Le(e.props.outerRadius, o, o * 0.8), l = e.props.maxRadius || Math.sqrt(i * i + a * a) / 2;
  return {
    cx: u,
    cy: c,
    innerRadius: s,
    outerRadius: f,
    maxRadius: l
  };
});
ze(_t, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = vi.getRealPieData(t);
  if (!n || !n.length)
    return null;
  var i = t.props, a = i.cornerRadius, o = i.startAngle, u = i.endAngle, c = i.paddingAngle, s = i.dataKey, f = i.nameKey, l = i.valueKey, d = i.tooltipType, p = Math.abs(t.props.minAngle), g = vi.parseCoordinateOfPie(t, r), y = vi.parseDeltaAngle(o, u), v = Math.abs(y), x = s;
  J(s) && J(l) ? (yt(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), x = "value") : J(s) && (yt(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), x = l);
  var b = n.filter(function(A) {
    return Re(A, x, 0) !== 0;
  }).length, w = (v >= 360 ? b : b - 1) * c, m = v - b * p - w, h = n.reduce(function(A, M) {
    var E = Re(M, x, 0);
    return A + (B(E) ? E : 0);
  }, 0), O;
  if (h > 0) {
    var S;
    O = n.map(function(A, M) {
      var E = Re(A, x, 0), T = Re(A, f, M), P = (B(E) ? E : 0) / h, C;
      M ? C = S.endAngle + Ke(y) * c * (E !== 0 ? 1 : 0) : C = o;
      var j = C + Ke(y) * ((E !== 0 ? p : 0) + P * m), N = (C + j) / 2, k = (g.innerRadius + g.outerRadius) / 2, D = [{
        name: T,
        value: E,
        payload: A,
        dataKey: x,
        type: d
      }], R = ue(g.cx, g.cy, k, N);
      return S = de(de(de({
        percent: P,
        cornerRadius: a,
        name: T,
        tooltipPayload: D,
        midAngle: N,
        middleRadius: k,
        tooltipPosition: R
      }, A), g), {}, {
        value: Re(A, x),
        startAngle: C,
        endAngle: j,
        payload: A,
        paddingAngle: Ke(y) * c
      }), S;
    });
  }
  return de(de({}, g), {}, {
    sectors: O,
    data: n
  });
});
var yD = Math.ceil, gD = Math.max;
function mD(e, t, r, n) {
  for (var i = -1, a = gD(yD((t - e) / (r || 1)), 0), o = Array(a); a--; )
    o[n ? a : ++i] = e, e += r;
  return o;
}
var bD = mD, xD = th, hd = 1 / 0, wD = 17976931348623157e292;
function OD(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = xD(e), e === hd || e === -hd) {
    var t = e < 0 ? -1 : 1;
    return t * wD;
  }
  return e === e ? e : 0;
}
var SD = OD, AD = bD, _D = xa, fo = SD;
function $D(e) {
  return function(t, r, n) {
    return n && typeof n != "number" && _D(t, r, n) && (r = n = void 0), t = fo(t), r === void 0 ? (r = t, t = 0) : r = fo(r), n = n === void 0 ? t < r ? 1 : -1 : fo(n), AD(t, r, n, e);
  };
}
var PD = $D, TD = PD, ED = TD(), MD = ED;
const ta = /* @__PURE__ */ ce(MD);
function kn(e) {
  "@babel/helpers - typeof";
  return kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kn(e);
}
function vd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vd(Object(r), !0).forEach(function(n) {
      _v(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _v(e, t, r) {
  return t = jD(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jD(e) {
  var t = ID(e, "string");
  return kn(t) == "symbol" ? t : String(t);
}
function ID(e, t) {
  if (kn(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (kn(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var CD = ["Webkit", "Moz", "O", "ms"], kD = function(t, r) {
  if (!t)
    return null;
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = CD.reduce(function(a, o) {
    return yd(yd({}, a), {}, _v({}, o + n, r));
  }, {});
  return i[t] = r, i;
};
function Ar(e) {
  "@babel/helpers - typeof";
  return Ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ar(e);
}
function ra() {
  return ra = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ra.apply(this, arguments);
}
function gd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function po(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gd(Object(r), !0).forEach(function(n) {
      Ne(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ND(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function md(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Pv(n.key), n);
  }
}
function DD(e, t, r) {
  return t && md(e.prototype, t), r && md(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function RD(e, t, r) {
  return t = na(t), LD(e, $v() ? Reflect.construct(t, r || [], na(e).constructor) : t.apply(e, r));
}
function LD(e, t) {
  if (t && (Ar(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return tt(e);
}
function $v() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return ($v = function() {
    return !!e;
  })();
}
function na(e) {
  return na = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, na(e);
}
function tt(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function BD(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Pu(e, t);
}
function Pu(e, t) {
  return Pu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Pu(e, t);
}
function Ne(e, t, r) {
  return t = Pv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Pv(e) {
  var t = FD(e, "string");
  return Ar(t) == "symbol" ? t : String(t);
}
function FD(e, t) {
  if (Ar(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ar(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var UD = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, o = t.width, u = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var c = r.length, s = Zr().domain(ta(0, c)).range([a, a + o - u]), f = s.domain().map(function(l) {
    return s(l);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: s(n),
    endX: s(i),
    scale: s,
    scaleValues: f
  };
}, bd = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, _r = /* @__PURE__ */ function(e) {
  BD(t, e);
  function t(r) {
    var n;
    return ND(this, t), n = RD(this, t, [r]), Ne(tt(n), "handleDrag", function(i) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i);
    }), Ne(tt(n), "handleTouchMove", function(i) {
      i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0]);
    }), Ne(tt(n), "handleDragEnd", function() {
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var i = n.props, a = i.endIndex, o = i.onDragEnd, u = i.startIndex;
        o == null || o({
          endIndex: a,
          startIndex: u
        });
      }), n.detachDragEndListener();
    }), Ne(tt(n), "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), Ne(tt(n), "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), Ne(tt(n), "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), Ne(tt(n), "handleSlideDragStart", function(i) {
      var a = bd(i) ? i.changedTouches[0] : i;
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: a.pageX
      }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = {
      startX: n.handleTravellerDragStart.bind(tt(n), "startX"),
      endX: n.handleTravellerDragStart.bind(tt(n), "endX")
    }, n.state = {}, n;
  }
  return DD(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var i = n.startX, a = n.endX, o = this.state.scaleValues, u = this.props, c = u.gap, s = u.data, f = s.length - 1, l = Math.min(i, a), d = Math.max(i, a), p = t.getIndexInRange(o, l), g = t.getIndexInRange(o, d);
      return {
        startIndex: p - p % c,
        endIndex: g === f ? f : g - g % c
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var i = this.props, a = i.data, o = i.tickFormatter, u = i.dataKey, c = Re(a[n], u, n);
      return Z(o) ? o(c, n) : c;
    }
  }, {
    key: "attachDragEndListener",
    value: function() {
      window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "detachDragEndListener",
    value: function() {
      window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "handleSlideDrag",
    value: function(n) {
      var i = this.state, a = i.slideMoveStartX, o = i.startX, u = i.endX, c = this.props, s = c.x, f = c.width, l = c.travellerWidth, d = c.startIndex, p = c.endIndex, g = c.onChange, y = n.pageX - a;
      y > 0 ? y = Math.min(y, s + f - l - u, s + f - l - o) : y < 0 && (y = Math.max(y, s - o, s - u));
      var v = this.getIndex({
        startX: o + y,
        endX: u + y
      });
      (v.startIndex !== d || v.endIndex !== p) && g && g(v), this.setState({
        startX: o + y,
        endX: u + y,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, i) {
      var a = bd(i) ? i.changedTouches[0] : i;
      this.setState({
        isSlideMoving: !1,
        isTravellerMoving: !0,
        movingTravellerId: n,
        brushMoveStartX: a.pageX
      }), this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function(n) {
      var i = this.state, a = i.brushMoveStartX, o = i.movingTravellerId, u = i.endX, c = i.startX, s = this.state[o], f = this.props, l = f.x, d = f.width, p = f.travellerWidth, g = f.onChange, y = f.gap, v = f.data, x = {
        startX: this.state.startX,
        endX: this.state.endX
      }, b = n.pageX - a;
      b > 0 ? b = Math.min(b, l + d - p - s) : b < 0 && (b = Math.max(b, l - s)), x[o] = s + b;
      var w = this.getIndex(x), m = w.startIndex, h = w.endIndex, O = function() {
        var A = v.length - 1;
        return o === "startX" && (u > c ? m % y === 0 : h % y === 0) || u < c && h === A || o === "endX" && (u > c ? h % y === 0 : m % y === 0) || u > c && h === A;
      };
      this.setState(Ne(Ne({}, o, s + b), "brushMoveStartX", n.pageX), function() {
        g && O() && g(w);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, i) {
      var a = this, o = this.state, u = o.scaleValues, c = o.startX, s = o.endX, f = this.state[i], l = u.indexOf(f);
      if (l !== -1) {
        var d = l + n;
        if (!(d === -1 || d >= u.length)) {
          var p = u[d];
          i === "startX" && p >= s || i === "endX" && p <= c || this.setState(Ne({}, i, p), function() {
            a.props.onChange(a.getIndex({
              startX: a.state.startX,
              endX: a.state.endX
            }));
          });
        }
      }
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, u = n.height, c = n.fill, s = n.stroke;
      return /* @__PURE__ */ _.createElement("rect", {
        stroke: s,
        fill: c,
        x: i,
        y: a,
        width: o,
        height: u
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var n = this.props, i = n.x, a = n.y, o = n.width, u = n.height, c = n.data, s = n.children, f = n.padding, l = Kt.only(s);
      return l ? /* @__PURE__ */ _.cloneElement(l, {
        x: i,
        y: a,
        width: o,
        height: u,
        margin: f,
        compact: !0,
        data: c
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, i) {
      var a = this, o = this.props, u = o.y, c = o.travellerWidth, s = o.height, f = o.traveller, l = o.ariaLabel, d = o.data, p = o.startIndex, g = o.endIndex, y = Math.max(n, this.props.x), v = po(po({}, X(this.props, !1)), {}, {
        x: y,
        y: u,
        width: c,
        height: s
      }), x = l || "Min value: ".concat(d[p].name, ", Max value: ").concat(d[g].name);
      return /* @__PURE__ */ _.createElement(ye, {
        tabIndex: 0,
        role: "slider",
        "aria-label": x,
        "aria-valuenow": n,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[i],
        onTouchStart: this.travellerDragStartHandlers[i],
        onKeyDown: function(w) {
          ["ArrowLeft", "ArrowRight"].includes(w.key) && (w.preventDefault(), w.stopPropagation(), a.handleTravellerMoveKeyboard(w.key === "ArrowRight" ? 1 : -1, i));
        },
        onFocus: function() {
          a.setState({
            isTravellerFocused: !0
          });
        },
        onBlur: function() {
          a.setState({
            isTravellerFocused: !1
          });
        },
        style: {
          cursor: "col-resize"
        }
      }, t.renderTraveller(f, v));
    }
  }, {
    key: "renderSlide",
    value: function(n, i) {
      var a = this.props, o = a.y, u = a.height, c = a.stroke, s = a.travellerWidth, f = Math.min(n, i) + s, l = Math.max(Math.abs(i - n) - s, 0);
      return /* @__PURE__ */ _.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: c,
        fillOpacity: 0.2,
        x: f,
        y: o,
        width: l,
        height: u
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, i = n.startIndex, a = n.endIndex, o = n.y, u = n.height, c = n.travellerWidth, s = n.stroke, f = this.state, l = f.startX, d = f.endX, p = 5, g = {
        pointerEvents: "none",
        fill: s
      };
      return /* @__PURE__ */ _.createElement(ye, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ _.createElement(yr, ra({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(l, d) - p,
        y: o + u / 2
      }, g), this.getTextOfTick(i)), /* @__PURE__ */ _.createElement(yr, ra({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(l, d) + c + p,
        y: o + u / 2
      }, g), this.getTextOfTick(a)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.data, a = n.className, o = n.children, u = n.x, c = n.y, s = n.width, f = n.height, l = n.alwaysShowText, d = this.state, p = d.startX, g = d.endX, y = d.isTextActive, v = d.isSlideMoving, x = d.isTravellerMoving, b = d.isTravellerFocused;
      if (!i || !i.length || !B(u) || !B(c) || !B(s) || !B(f) || s <= 0 || f <= 0)
        return null;
      var w = he("recharts-brush", a), m = _.Children.count(o) === 1, h = kD("userSelect", "none");
      return /* @__PURE__ */ _.createElement(ye, {
        className: w,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: h
      }, this.renderBackground(), m && this.renderPanorama(), this.renderSlide(p, g), this.renderTravellerLayer(p, "startX"), this.renderTravellerLayer(g, "endX"), (y || v || x || b || l) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var i = n.x, a = n.y, o = n.width, u = n.height, c = n.stroke, s = Math.floor(a + u / 2) - 1;
      return /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement("rect", {
        x: i,
        y: a,
        width: o,
        height: u,
        fill: c,
        stroke: "none"
      }), /* @__PURE__ */ _.createElement("line", {
        x1: i + 1,
        y1: s,
        x2: i + o - 1,
        y2: s,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ _.createElement("line", {
        x1: i + 1,
        y1: s + 2,
        x2: i + o - 1,
        y2: s + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function(n, i) {
      var a;
      return /* @__PURE__ */ _.isValidElement(n) ? a = /* @__PURE__ */ _.cloneElement(n, i) : Z(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      var a = n.data, o = n.width, u = n.x, c = n.travellerWidth, s = n.updateId, f = n.startIndex, l = n.endIndex;
      if (a !== i.prevData || s !== i.prevUpdateId)
        return po({
          prevData: a,
          prevTravellerWidth: c,
          prevUpdateId: s,
          prevX: u,
          prevWidth: o
        }, a && a.length ? UD({
          data: a,
          width: o,
          x: u,
          travellerWidth: c,
          startIndex: f,
          endIndex: l
        }) : {
          scale: null,
          scaleValues: null
        });
      if (i.scale && (o !== i.prevWidth || u !== i.prevX || c !== i.prevTravellerWidth)) {
        i.scale.range([u, u + o - c]);
        var d = i.scale.domain().map(function(p) {
          return i.scale(p);
        });
        return {
          prevData: a,
          prevTravellerWidth: c,
          prevUpdateId: s,
          prevX: u,
          prevWidth: o,
          startX: i.scale(n.startIndex),
          endX: i.scale(n.endIndex),
          scaleValues: d
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function(n, i) {
      for (var a = n.length, o = 0, u = a - 1; u - o > 1; ) {
        var c = Math.floor((o + u) / 2);
        n[c] > i ? u = c : o = c;
      }
      return i >= n[u] ? u : o;
    }
  }]), t;
}(wt);
Ne(_r, "displayName", "Brush");
Ne(_r, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1e3,
  alwaysShowText: !1
});
var WD = ac;
function qD(e, t) {
  var r;
  return WD(e, function(n, i, a) {
    return r = t(n, i, a), !r;
  }), !!r;
}
var zD = qD, HD = Tp, KD = Mt, GD = zD, XD = je, VD = xa;
function YD(e, t, r) {
  var n = XD(e) ? HD : GD;
  return r && VD(e, t, r) && (t = void 0), n(e, KD(t));
}
var ZD = YD;
const JD = /* @__PURE__ */ ce(ZD);
var ut = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, xd = Yp;
function QD(e, t, r) {
  t == "__proto__" && xd ? xd(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var eR = QD, tR = eR, rR = Xp, nR = Mt;
function iR(e, t) {
  var r = {};
  return t = nR(t), rR(e, function(n, i, a) {
    tR(r, i, t(n, i, a));
  }), r;
}
var aR = iR;
const oR = /* @__PURE__ */ ce(aR);
function uR(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e))
      return !1;
  return !0;
}
var cR = uR, sR = ac;
function lR(e, t) {
  var r = !0;
  return sR(e, function(n, i, a) {
    return r = !!t(n, i, a), r;
  }), r;
}
var fR = lR, dR = cR, pR = fR, hR = Mt, vR = je, yR = xa;
function gR(e, t, r) {
  var n = vR(e) ? dR : pR;
  return r && yR(e, t, r) && (t = void 0), n(e, hR(t));
}
var mR = gR;
const bR = /* @__PURE__ */ ce(mR);
function Nn(e) {
  "@babel/helpers - typeof";
  return Nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nn(e);
}
function xR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Tv(n.key), n);
  }
}
function wR(e, t, r) {
  return t && wd(e.prototype, t), r && wd(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Od(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function li(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Od(Object(r), !0).forEach(function(n) {
      Lc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Od(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Lc(e, t, r) {
  return t = Tv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Tv(e) {
  var t = OR(e, "string");
  return Nn(t) == "symbol" ? t : String(t);
}
function OR(e, t) {
  if (Nn(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Nn(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ev = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return {
    x: Math.min(n, a),
    y: Math.min(i, o),
    width: Math.abs(a - n),
    height: Math.abs(o - i)
  };
}, SR = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return Ev({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
}, Mv = /* @__PURE__ */ function() {
  function e(t) {
    xR(this, e), this.scale = t;
  }
  return wR(e, [{
    key: "domain",
    get: function() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.bandAware, a = n.position;
      if (r !== void 0) {
        if (a)
          switch (a) {
            case "start":
              return this.scale(r);
            case "middle": {
              var o = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(r) + o;
            }
            case "end": {
              var u = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(r) + u;
            }
            default:
              return this.scale(r);
          }
        if (i) {
          var c = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + c;
        }
        return this.scale(r);
      }
    }
  }, {
    key: "isInRange",
    value: function(r) {
      var n = this.range(), i = n[0], a = n[n.length - 1];
      return i <= a ? r >= i && r <= a : r >= a && r <= i;
    }
  }], [{
    key: "create",
    value: function(r) {
      return new e(r);
    }
  }]), e;
}();
Lc(Mv, "EPS", 1e-4);
var Bc = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return li(li({}, n), {}, Lc({}, i, Mv.create(t[i])));
  }, {});
  return li(li({}, r), {}, {
    apply: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.bandAware, u = a.position;
      return oR(i, function(c, s) {
        return r[s].apply(c, {
          bandAware: o,
          position: u
        });
      });
    },
    isInRange: function(i) {
      return bR(i, function(a, o) {
        return r[o].isInRange(a);
      });
    }
  });
}, AR = Mm(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
});
function ia(e) {
  "@babel/helpers - typeof";
  return ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ia(e);
}
var jv = /* @__PURE__ */ Jt(void 0), Iv = /* @__PURE__ */ Jt(void 0), Cv = /* @__PURE__ */ Jt(void 0), _R = /* @__PURE__ */ Jt({}), kv = /* @__PURE__ */ Jt(void 0), $R = /* @__PURE__ */ Jt(0), PR = /* @__PURE__ */ Jt(0), Sd = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, o = t.clipPathId, u = t.children, c = t.width, s = t.height, f = AR(a);
  return /* @__PURE__ */ _.createElement(jv.Provider, {
    value: n
  }, /* @__PURE__ */ _.createElement(Iv.Provider, {
    value: i
  }, /* @__PURE__ */ _.createElement(_R.Provider, {
    value: a
  }, /* @__PURE__ */ _.createElement(Cv.Provider, {
    value: f
  }, /* @__PURE__ */ _.createElement(kv.Provider, {
    value: o
  }, /* @__PURE__ */ _.createElement($R.Provider, {
    value: s
  }, /* @__PURE__ */ _.createElement(PR.Provider, {
    value: c
  }, u)))))));
}, TR = function() {
  return oa(kv);
};
function Nv(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var ER = function(t) {
  var r = oa(jv);
  r == null && (process.env.NODE_ENV !== "production" ? He(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : He(!1));
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? He(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(ia(t), "]. ").concat(Nv(r))) : He(!1)), n;
}, MR = function(t) {
  var r = oa(Iv);
  r == null && (process.env.NODE_ENV !== "production" ? He(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : He(!1));
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? He(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(ia(t), "]. ").concat(Nv(r))) : He(!1)), n;
}, jR = function() {
  var t = oa(Cv);
  return t;
};
function Dn(e) {
  "@babel/helpers - typeof";
  return Dn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dn(e);
}
function Ad(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ad(Object(r), !0).forEach(function(n) {
      IR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ad(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function IR(e, t, r) {
  return t = CR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function CR(e) {
  var t = kR(e, "string");
  return Dn(t) == "symbol" ? t : String(t);
}
function kR(e, t) {
  if (Dn(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Dn(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function NR(e, t) {
  return BR(e) || LR(e, t) || RR(e, t) || DR();
}
function DR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function RR(e, t) {
  if (e) {
    if (typeof e == "string")
      return $d(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return $d(e, t);
  }
}
function $d(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function LR(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0)
          ;
    } catch (f) {
      s = !0, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (s)
          throw i;
      }
    }
    return u;
  }
}
function BR(e) {
  if (Array.isArray(e))
    return e;
}
function Tu() {
  return Tu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Tu.apply(this, arguments);
}
var FR = function(t, r) {
  var n;
  return /* @__PURE__ */ _.isValidElement(t) ? n = /* @__PURE__ */ _.cloneElement(t, r) : Z(t) ? n = t(r) : n = /* @__PURE__ */ _.createElement("line", Tu({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, UR = function(t, r, n, i, a, o, u, c, s) {
  var f = a.x, l = a.y, d = a.width, p = a.height;
  if (n) {
    var g = s.y, y = t.y.apply(g, {
      position: o
    });
    if (ut(s, "discard") && !t.y.isInRange(y))
      return null;
    var v = [{
      x: f + d,
      y
    }, {
      x: f,
      y
    }];
    return c === "left" ? v.reverse() : v;
  }
  if (r) {
    var x = s.x, b = t.x.apply(x, {
      position: o
    });
    if (ut(s, "discard") && !t.x.isInRange(b))
      return null;
    var w = [{
      x: b,
      y: l + p
    }, {
      x: b,
      y: l
    }];
    return u === "top" ? w.reverse() : w;
  }
  if (i) {
    var m = s.segment, h = m.map(function(O) {
      return t.apply(O, {
        position: o
      });
    });
    return ut(s, "discard") && JD(h, function(O) {
      return !t.isInRange(O);
    }) ? null : h;
  }
  return null;
};
function Fc(e) {
  var t = e.x, r = e.y, n = e.segment, i = e.xAxisId, a = e.yAxisId, o = e.shape, u = e.className, c = e.alwaysShow, s = TR(), f = ER(i), l = MR(a), d = jR();
  if (!s || !d)
    return null;
  yt(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var p = Bc({
    x: f.scale,
    y: l.scale
  }), g = we(t), y = we(r), v = n && n.length === 2, x = UR(p, g, y, v, d, e.position, f.orientation, l.orientation, e);
  if (!x)
    return null;
  var b = NR(x, 2), w = b[0], m = w.x, h = w.y, O = b[1], S = O.x, A = O.y, M = ut(e, "hidden") ? "url(#".concat(s, ")") : void 0, E = _d(_d({
    clipPath: M
  }, X(e, !0)), {}, {
    x1: m,
    y1: h,
    x2: S,
    y2: A
  });
  return /* @__PURE__ */ _.createElement(ye, {
    className: he("recharts-reference-line", u)
  }, FR(o, E), $e.renderCallByParent(e, SR({
    x1: m,
    y1: h,
    x2: S,
    y2: A
  })));
}
Fc.displayName = "ReferenceLine";
Fc.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle"
};
function Rn(e) {
  "@babel/helpers - typeof";
  return Rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rn(e);
}
function Eu() {
  return Eu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Eu.apply(this, arguments);
}
function Pd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Td(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pd(Object(r), !0).forEach(function(n) {
      WR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function WR(e, t, r) {
  return t = qR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qR(e) {
  var t = zR(e, "string");
  return Rn(t) == "symbol" ? t : String(t);
}
function zR(e, t) {
  if (Rn(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Rn(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var HR = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, o = Bc({
    x: i.scale,
    y: a.scale
  }), u = o.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return ut(t, "discard") && !o.isInRange(u) ? null : u;
};
function Xn(e) {
  var t = e.x, r = e.y, n = e.r, i = e.alwaysShow, a = e.clipPathId, o = we(t), u = we(r);
  if (yt(i === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !o || !u)
    return null;
  var c = HR(e);
  if (!c)
    return null;
  var s = c.x, f = c.y, l = e.shape, d = e.className, p = ut(e, "hidden") ? "url(#".concat(a, ")") : void 0, g = Td(Td({
    clipPath: p
  }, X(e, !0)), {}, {
    cx: s,
    cy: f
  });
  return /* @__PURE__ */ _.createElement(ye, {
    className: he("recharts-reference-dot", d)
  }, Xn.renderDot(l, g), $e.renderCallByParent(e, {
    x: s - n,
    y: f - n,
    width: 2 * n,
    height: 2 * n
  }));
}
Xn.displayName = "ReferenceDot";
Xn.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1
};
Xn.renderDot = function(e, t) {
  var r;
  return /* @__PURE__ */ _.isValidElement(e) ? r = /* @__PURE__ */ _.cloneElement(e, t) : Z(e) ? r = e(t) : r = /* @__PURE__ */ _.createElement(Rc, Eu({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
};
function Ln(e) {
  "@babel/helpers - typeof";
  return Ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ln(e);
}
function Mu() {
  return Mu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Mu.apply(this, arguments);
}
function Ed(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Md(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ed(Object(r), !0).forEach(function(n) {
      KR(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ed(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function KR(e, t, r) {
  return t = GR(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function GR(e) {
  var t = XR(e, "string");
  return Ln(t) == "symbol" ? t : String(t);
}
function XR(e, t) {
  if (Ln(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ln(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var VR = function(t, r, n, i, a) {
  var o = a.x1, u = a.x2, c = a.y1, s = a.y2, f = a.xAxis, l = a.yAxis;
  if (!f || !l)
    return null;
  var d = Bc({
    x: f.scale,
    y: l.scale
  }), p = {
    x: t ? d.x.apply(o, {
      position: "start"
    }) : d.x.rangeMin,
    y: n ? d.y.apply(c, {
      position: "start"
    }) : d.y.rangeMin
  }, g = {
    x: r ? d.x.apply(u, {
      position: "end"
    }) : d.x.rangeMax,
    y: i ? d.y.apply(s, {
      position: "end"
    }) : d.y.rangeMax
  };
  return ut(a, "discard") && (!d.isInRange(p) || !d.isInRange(g)) ? null : Ev(p, g);
};
function Vn(e) {
  var t = e.x1, r = e.x2, n = e.y1, i = e.y2, a = e.className, o = e.alwaysShow, u = e.clipPathId;
  yt(o === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var c = we(t), s = we(r), f = we(n), l = we(i), d = e.shape;
  if (!c && !s && !f && !l && !d)
    return null;
  var p = VR(c, s, f, l, e);
  if (!p && !d)
    return null;
  var g = ut(e, "hidden") ? "url(#".concat(u, ")") : void 0;
  return /* @__PURE__ */ _.createElement(ye, {
    className: he("recharts-reference-area", a)
  }, Vn.renderRect(d, Md(Md({
    clipPath: g
  }, X(e, !0)), p)), $e.renderCallByParent(e, p));
}
Vn.displayName = "ReferenceArea";
Vn.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1
};
Vn.renderRect = function(e, t) {
  var r;
  return /* @__PURE__ */ _.isValidElement(e) ? r = /* @__PURE__ */ _.cloneElement(e, t) : Z(e) ? r = e(t) : r = /* @__PURE__ */ _.createElement(Dc, Mu({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
};
function jd(e) {
  return QR(e) || JR(e) || ZR(e) || YR();
}
function YR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZR(e, t) {
  if (e) {
    if (typeof e == "string")
      return ju(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ju(e, t);
  }
}
function JR(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function QR(e) {
  if (Array.isArray(e))
    return ju(e);
}
function ju(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var Iu = function(t, r, n, i, a) {
  var o = at(t, Fc), u = at(t, Xn), c = [].concat(jd(o), jd(u)), s = at(t, Vn), f = "".concat(i, "Id"), l = i[0], d = r;
  if (c.length && (d = c.reduce(function(y, v) {
    if (v.props[f] === n && ut(v.props, "extendDomain") && B(v.props[l])) {
      var x = v.props[l];
      return [Math.min(y[0], x), Math.max(y[1], x)];
    }
    return y;
  }, d)), s.length) {
    var p = "".concat(l, "1"), g = "".concat(l, "2");
    d = s.reduce(function(y, v) {
      if (v.props[f] === n && ut(v.props, "extendDomain") && B(v.props[p]) && B(v.props[g])) {
        var x = v.props[p], b = v.props[g];
        return [Math.min(y[0], x, b), Math.max(y[1], x, b)];
      }
      return y;
    }, d);
  }
  return a && a.length && (d = a.reduce(function(y, v) {
    return B(v) ? [Math.min(y[0], v), Math.max(y[1], v)] : y;
  }, d)), d;
}, Dv = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function i(c, s, f) {
    this.fn = c, this.context = s, this.once = f || !1;
  }
  function a(c, s, f, l, d) {
    if (typeof f != "function")
      throw new TypeError("The listener must be a function");
    var p = new i(f, l || c, d), g = r ? r + s : s;
    return c._events[g] ? c._events[g].fn ? c._events[g] = [c._events[g], p] : c._events[g].push(p) : (c._events[g] = p, c._eventsCount++), c;
  }
  function o(c, s) {
    --c._eventsCount === 0 ? c._events = new n() : delete c._events[s];
  }
  function u() {
    this._events = new n(), this._eventsCount = 0;
  }
  u.prototype.eventNames = function() {
    var s = [], f, l;
    if (this._eventsCount === 0)
      return s;
    for (l in f = this._events)
      t.call(f, l) && s.push(r ? l.slice(1) : l);
    return Object.getOwnPropertySymbols ? s.concat(Object.getOwnPropertySymbols(f)) : s;
  }, u.prototype.listeners = function(s) {
    var f = r ? r + s : s, l = this._events[f];
    if (!l)
      return [];
    if (l.fn)
      return [l.fn];
    for (var d = 0, p = l.length, g = new Array(p); d < p; d++)
      g[d] = l[d].fn;
    return g;
  }, u.prototype.listenerCount = function(s) {
    var f = r ? r + s : s, l = this._events[f];
    return l ? l.fn ? 1 : l.length : 0;
  }, u.prototype.emit = function(s, f, l, d, p, g) {
    var y = r ? r + s : s;
    if (!this._events[y])
      return !1;
    var v = this._events[y], x = arguments.length, b, w;
    if (v.fn) {
      switch (v.once && this.removeListener(s, v.fn, void 0, !0), x) {
        case 1:
          return v.fn.call(v.context), !0;
        case 2:
          return v.fn.call(v.context, f), !0;
        case 3:
          return v.fn.call(v.context, f, l), !0;
        case 4:
          return v.fn.call(v.context, f, l, d), !0;
        case 5:
          return v.fn.call(v.context, f, l, d, p), !0;
        case 6:
          return v.fn.call(v.context, f, l, d, p, g), !0;
      }
      for (w = 1, b = new Array(x - 1); w < x; w++)
        b[w - 1] = arguments[w];
      v.fn.apply(v.context, b);
    } else {
      var m = v.length, h;
      for (w = 0; w < m; w++)
        switch (v[w].once && this.removeListener(s, v[w].fn, void 0, !0), x) {
          case 1:
            v[w].fn.call(v[w].context);
            break;
          case 2:
            v[w].fn.call(v[w].context, f);
            break;
          case 3:
            v[w].fn.call(v[w].context, f, l);
            break;
          case 4:
            v[w].fn.call(v[w].context, f, l, d);
            break;
          default:
            if (!b)
              for (h = 1, b = new Array(x - 1); h < x; h++)
                b[h - 1] = arguments[h];
            v[w].fn.apply(v[w].context, b);
        }
    }
    return !0;
  }, u.prototype.on = function(s, f, l) {
    return a(this, s, f, l, !1);
  }, u.prototype.once = function(s, f, l) {
    return a(this, s, f, l, !0);
  }, u.prototype.removeListener = function(s, f, l, d) {
    var p = r ? r + s : s;
    if (!this._events[p])
      return this;
    if (!f)
      return o(this, p), this;
    var g = this._events[p];
    if (g.fn)
      g.fn === f && (!d || g.once) && (!l || g.context === l) && o(this, p);
    else {
      for (var y = 0, v = [], x = g.length; y < x; y++)
        (g[y].fn !== f || d && !g[y].once || l && g[y].context !== l) && v.push(g[y]);
      v.length ? this._events[p] = v.length === 1 ? v[0] : v : o(this, p);
    }
    return this;
  }, u.prototype.removeAllListeners = function(s) {
    var f;
    return s ? (f = r ? r + s : s, this._events[f] && o(this, f)) : (this._events = new n(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, e.exports = u;
})(Dv);
var eL = Dv.exports;
const tL = /* @__PURE__ */ ce(eL);
var ho = new tL(), vo = "recharts.syncMouseEvents";
function Bn(e) {
  "@babel/helpers - typeof";
  return Bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bn(e);
}
function rL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Id(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Rv(n.key), n);
  }
}
function nL(e, t, r) {
  return t && Id(e.prototype, t), r && Id(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function yo(e, t, r) {
  return t = Rv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Rv(e) {
  var t = iL(e, "string");
  return Bn(t) == "symbol" ? t : String(t);
}
function iL(e, t) {
  if (Bn(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Bn(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var aL = /* @__PURE__ */ function() {
  function e() {
    rL(this, e), yo(this, "activeIndex", 0), yo(this, "coordinateList", []), yo(this, "layout", "horizontal");
  }
  return nL(e, [{
    key: "setDetails",
    value: function(r) {
      var n, i = r.coordinateList, a = i === void 0 ? null : i, o = r.container, u = o === void 0 ? null : o, c = r.layout, s = c === void 0 ? null : c, f = r.offset, l = f === void 0 ? null : f, d = r.mouseHandlerCallback, p = d === void 0 ? null : d;
      this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = u ?? this.container, this.layout = s ?? this.layout, this.offset = l ?? this.offset, this.mouseHandlerCallback = p ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
    }
  }, {
    key: "focus",
    value: function() {
      this.spoofMouse();
    }
  }, {
    key: "keyboardEvent",
    value: function(r) {
      if (this.coordinateList.length !== 0)
        switch (r.key) {
          case "ArrowRight": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
            break;
          }
          case "ArrowLeft": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse();
            break;
          }
        }
    }
  }, {
    key: "setIndex",
    value: function(r) {
      this.activeIndex = r;
    }
  }, {
    key: "spoofMouse",
    value: function() {
      var r, n;
      if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
        var i = this.container.getBoundingClientRect(), a = i.x, o = i.y, u = i.height, c = this.coordinateList[this.activeIndex].coordinate, s = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, f = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, l = a + c + s, d = o + this.offset.top + u / 2 + f;
        this.mouseHandlerCallback({
          pageX: l,
          pageY: d
        });
      }
    }
  }]), e;
}();
function oL(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0], i = e == null ? void 0 : e[1];
    if (n && i && B(n) && B(i))
      return !0;
  }
  return !1;
}
function uL(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function Lv(e) {
  var t = e.cx, r = e.cy, n = e.radius, i = e.startAngle, a = e.endAngle, o = ue(t, r, n, i), u = ue(t, r, n, a);
  return {
    points: [o, u],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  };
}
function cL(e, t, r) {
  var n, i, a, o;
  if (e === "horizontal")
    n = t.x, a = n, i = r.top, o = r.top + r.height;
  else if (e === "vertical")
    i = t.y, o = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var u = t.cx, c = t.cy, s = t.innerRadius, f = t.outerRadius, l = t.angle, d = ue(u, c, s, l), p = ue(u, c, f, l);
      n = d.x, i = d.y, a = p.x, o = p.y;
    } else
      return Lv(t);
  return [{
    x: n,
    y: i
  }, {
    x: a,
    y: o
  }];
}
function Fn(e) {
  "@babel/helpers - typeof";
  return Fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fn(e);
}
function Cd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cd(Object(r), !0).forEach(function(n) {
      sL(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sL(e, t, r) {
  return t = lL(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lL(e) {
  var t = fL(e, "string");
  return Fn(t) == "symbol" ? t : String(t);
}
function fL(e, t) {
  if (Fn(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Fn(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dL(e) {
  var t = e.element, r = e.tooltipEventType, n = e.isActive, i = e.activeCoordinate, a = e.activePayload, o = e.offset, u = e.activeTooltipIndex, c = e.tooltipAxisBandSize, s = e.layout, f = e.chartName;
  if (!t || !t.props.cursor || !n || !i || f !== "ScatterChart" && r !== "axis")
    return null;
  var l, d = fu;
  if (f === "ScatterChart")
    l = i, d = F2;
  else if (f === "BarChart")
    l = uL(s, i, o, c), d = Dc;
  else if (s === "radial") {
    var p = Lv(i), g = p.cx, y = p.cy, v = p.radius, x = p.startAngle, b = p.endAngle;
    l = {
      cx: g,
      cy: y,
      startAngle: x,
      endAngle: b,
      innerRadius: v,
      outerRadius: v
    }, d = sv;
  } else
    l = {
      points: cL(s, i, o)
    }, d = fu;
  var w = fi(fi(fi(fi({
    stroke: "#ccc",
    pointerEvents: "none"
  }, o), l), X(t.props.cursor, !1)), {}, {
    payload: a,
    payloadIndex: u,
    className: "recharts-tooltip-cursor"
  });
  return /* @__PURE__ */ it(t.props.cursor) ? /* @__PURE__ */ xe(t.props.cursor, w) : /* @__PURE__ */ Wd(d, w);
}
var pL = ["item"], hL = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function $r(e) {
  "@babel/helpers - typeof";
  return $r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $r(e);
}
function rn() {
  return rn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, rn.apply(this, arguments);
}
function kd(e, t) {
  return gL(e) || yL(e, t) || Fv(e, t) || vL();
}
function vL() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function yL(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = !0, s = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        c = !1;
      } else
        for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = !0)
          ;
    } catch (f) {
      s = !0, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (s)
          throw i;
      }
    }
    return u;
  }
}
function gL(e) {
  if (Array.isArray(e))
    return e;
}
function Nd(e, t) {
  if (e == null)
    return {};
  var r = mL(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function mL(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function bL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dd(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Uv(n.key), n);
  }
}
function xL(e, t, r) {
  return t && Dd(e.prototype, t), r && Dd(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function wL(e, t, r) {
  return t = aa(t), OL(e, Bv() ? Reflect.construct(t, r || [], aa(e).constructor) : t.apply(e, r));
}
function OL(e, t) {
  if (t && ($r(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Q(e);
}
function Bv() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Bv = function() {
    return !!e;
  })();
}
function aa(e) {
  return aa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, aa(e);
}
function Q(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function SL(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Cu(e, t);
}
function Cu(e, t) {
  return Cu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Cu(e, t);
}
function Pr(e) {
  return $L(e) || _L(e) || Fv(e) || AL();
}
function AL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fv(e, t) {
  if (e) {
    if (typeof e == "string")
      return ku(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ku(e, t);
  }
}
function _L(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function $L(e) {
  if (Array.isArray(e))
    return ku(e);
}
function ku(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Rd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rd(Object(r), !0).forEach(function(n) {
      W(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function W(e, t, r) {
  return t = Uv(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Uv(e) {
  var t = PL(e, "string");
  return $r(t) == "symbol" ? t : String(t);
}
function PL(e, t) {
  if ($r(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if ($r(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var TL = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, EL = {
  width: "100%",
  height: "100%"
}, Wv = {
  x: 0,
  y: 0
};
function di(e) {
  return e;
}
var ML = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, jL = function(t, r, n, i) {
  var a = r.find(function(f) {
    return f && f.index === n;
  });
  if (a) {
    if (t === "horizontal")
      return {
        x: a.coordinate,
        y: i.y
      };
    if (t === "vertical")
      return {
        x: i.x,
        y: a.coordinate
      };
    if (t === "centric") {
      var o = a.coordinate, u = i.radius;
      return I(I(I({}, i), ue(i.cx, i.cy, u, o)), {}, {
        angle: o,
        radius: u
      });
    }
    var c = a.coordinate, s = i.angle;
    return I(I(I({}, i), ue(i.cx, i.cy, c, s)), {}, {
      angle: s,
      radius: c
    });
  }
  return Wv;
}, La = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, o = (n ?? []).reduce(function(u, c) {
    var s = c.props.data;
    return s && s.length ? [].concat(Pr(u), Pr(s)) : u;
  }, []);
  return o.length > 0 ? o : t && t.length && B(i) && B(a) ? t.slice(i, a + 1) : [];
};
function qv(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Nu = function(t, r, n, i) {
  var a = t.graphicalItems, o = t.tooltipAxis, u = La(r, t);
  return n < 0 || !a || !a.length || n >= u.length ? null : a.reduce(function(c, s) {
    var f, l = (f = s.props.data) !== null && f !== void 0 ? f : r;
    l && t.dataStartIndex + t.dataEndIndex !== 0 && (l = l.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var d;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var p = l === void 0 ? u : l;
      d = bo(p, o.dataKey, i);
    } else
      d = l && l[n] || u[n];
    return d ? [].concat(Pr(c), [FI(s, d)]) : c;
  }, []);
}, Ld = function(t, r, n, i) {
  var a = i || {
    x: t.chartX,
    y: t.chartY
  }, o = ML(a, n), u = t.orderedTooltipTicks, c = t.tooltipAxis, s = t.tooltipTicks, f = AI(o, u, s, c);
  if (f >= 0 && s) {
    var l = s[f] && s[f].value, d = Nu(t, r, f, l), p = jL(n, u, f, a);
    return {
      activeTooltipIndex: f,
      activeLabel: l,
      activePayload: d,
      activeCoordinate: p
    };
  }
  return null;
}, IL = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, o = r.axisIdKey, u = r.stackGroups, c = r.dataStartIndex, s = r.dataEndIndex, f = t.layout, l = t.children, d = t.stackOffset, p = nv(f, a);
  return n.reduce(function(g, y) {
    var v, x = y.props, b = x.type, w = x.dataKey, m = x.allowDataOverflow, h = x.allowDuplicatedCategory, O = x.scale, S = x.ticks, A = x.includeHidden, M = y.props[o];
    if (g[M])
      return g;
    var E = La(t.data, {
      graphicalItems: i.filter(function(q) {
        return q.props[o] === M;
      }),
      dataStartIndex: c,
      dataEndIndex: s
    }), T = E.length, P, C, j;
    oL(y.props.domain, m, b) && (P = au(y.props.domain, null, m), p && (b === "number" || O !== "auto") && (j = Jr(E, w, "category")));
    var N = qv(b);
    if (!P || P.length === 0) {
      var k, D = (k = y.props.domain) !== null && k !== void 0 ? k : N;
      if (w) {
        if (P = Jr(E, w, b), b === "category" && p) {
          var R = $b(P);
          h && R ? (C = P, P = ta(0, T)) : h || (P = vf(D, P, y).reduce(function(q, ie) {
            return q.indexOf(ie) >= 0 ? q : [].concat(Pr(q), [ie]);
          }, []));
        } else if (b === "category")
          h ? P = P.filter(function(q) {
            return q !== "" && !J(q);
          }) : P = vf(D, P, y).reduce(function(q, ie) {
            return q.indexOf(ie) >= 0 || ie === "" || J(ie) ? q : [].concat(Pr(q), [ie]);
          }, []);
        else if (b === "number") {
          var F = EI(E, i.filter(function(q) {
            return q.props[o] === M && (A || !q.props.hide);
          }), w, a, f);
          F && (P = F);
        }
        p && (b === "number" || O !== "auto") && (j = Jr(E, w, "category"));
      } else
        p ? P = ta(0, T) : u && u[M] && u[M].hasStack && b === "number" ? P = d === "expand" ? [0, 1] : iv(u[M].stackGroups, c, s) : P = rv(E, i.filter(function(q) {
          return q.props[o] === M && (A || !q.props.hide);
        }), b, f, !0);
      if (b === "number")
        P = Iu(l, P, M, a, S), D && (P = au(D, P, m));
      else if (b === "category" && D) {
        var V = D, Y = P.every(function(q) {
          return V.indexOf(q) >= 0;
        });
        Y && (P = V);
      }
    }
    return I(I({}, g), {}, W({}, M, I(I({}, y.props), {}, {
      axisType: a,
      domain: P,
      categoricalDomain: j,
      duplicateDomain: C,
      originalDomain: (v = y.props.domain) !== null && v !== void 0 ? v : N,
      isCategorical: p,
      layout: f
    })));
  }, {});
}, CL = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, o = r.axisIdKey, u = r.stackGroups, c = r.dataStartIndex, s = r.dataEndIndex, f = t.layout, l = t.children, d = La(t.data, {
    graphicalItems: n,
    dataStartIndex: c,
    dataEndIndex: s
  }), p = d.length, g = nv(f, a), y = -1;
  return n.reduce(function(v, x) {
    var b = x.props[o], w = qv("number");
    if (!v[b]) {
      y++;
      var m;
      return g ? m = ta(0, p) : u && u[b] && u[b].hasStack ? (m = iv(u[b].stackGroups, c, s), m = Iu(l, m, b, a)) : (m = au(w, rv(d, n.filter(function(h) {
        return h.props[o] === b && !h.props.hide;
      }), "number", f), i.defaultProps.allowDataOverflow), m = Iu(l, m, b, a)), I(I({}, v), {}, W({}, b, I(I({
        axisType: a
      }, i.defaultProps), {}, {
        hide: !0,
        orientation: Qe(TL, "".concat(a, ".").concat(y % 2), null),
        domain: m,
        originalDomain: w,
        isCategorical: g,
        layout: f
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return v;
  }, {});
}, kL = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, o = r.graphicalItems, u = r.stackGroups, c = r.dataStartIndex, s = r.dataEndIndex, f = t.children, l = "".concat(i, "Id"), d = at(f, a), p = {};
  return d && d.length ? p = IL(t, {
    axes: d,
    graphicalItems: o,
    axisType: i,
    axisIdKey: l,
    stackGroups: u,
    dataStartIndex: c,
    dataEndIndex: s
  }) : o && o.length && (p = CL(t, {
    Axis: a,
    graphicalItems: o,
    axisType: i,
    axisIdKey: l,
    stackGroups: u,
    dataStartIndex: c,
    dataEndIndex: s
  })), p;
}, NL = function(t) {
  var r = ir(t), n = Vr(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: oc(n, function(i) {
      return i.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: ou(r, n)
  };
}, Bd = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = We(r, _r), a = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (o = i.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: a,
    dataEndIndex: o,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, DL = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = vt(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, Fd = function(t) {
  return t === "horizontal" ? {
    numericAxisName: "yAxis",
    cateAxisName: "xAxis"
  } : t === "vertical" ? {
    numericAxisName: "xAxis",
    cateAxisName: "yAxis"
  } : t === "centric" ? {
    numericAxisName: "radiusAxis",
    cateAxisName: "angleAxis"
  } : {
    numericAxisName: "angleAxis",
    cateAxisName: "radiusAxis"
  };
}, RL = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, o = a === void 0 ? {} : a, u = t.yAxisMap, c = u === void 0 ? {} : u, s = n.width, f = n.height, l = n.children, d = n.margin || {}, p = We(l, _r), g = We(l, on), y = Object.keys(c).reduce(function(h, O) {
    var S = c[O], A = S.orientation;
    return !S.mirror && !S.hide ? I(I({}, h), {}, W({}, A, h[A] + S.width)) : h;
  }, {
    left: d.left || 0,
    right: d.right || 0
  }), v = Object.keys(o).reduce(function(h, O) {
    var S = o[O], A = S.orientation;
    return !S.mirror && !S.hide ? I(I({}, h), {}, W({}, A, Qe(h, "".concat(A)) + S.height)) : h;
  }, {
    top: d.top || 0,
    bottom: d.bottom || 0
  }), x = I(I({}, v), y), b = x.bottom;
  p && (x.bottom += p.props.height || _r.defaultProps.height), g && r && (x = PI(x, i, n, r));
  var w = s - x.left - x.right, m = f - x.top - x.bottom;
  return I(I({
    brushBottom: b
  }, x), {}, {
    // never return negative values for height and width
    width: Math.max(w, 0),
    height: Math.max(m, 0)
  });
}, LL = function(t) {
  var r, n = t.chartName, i = t.GraphicalChild, a = t.defaultTooltipEventType, o = a === void 0 ? "axis" : a, u = t.validateTooltipEventTypes, c = u === void 0 ? ["axis"] : u, s = t.axisComponents, f = t.legendContent, l = t.formatAxisMap, d = t.defaultProps, p = function(v, x) {
    var b = x.graphicalItems, w = x.stackGroups, m = x.offset, h = x.updateId, O = x.dataStartIndex, S = x.dataEndIndex, A = v.barSize, M = v.layout, E = v.barGap, T = v.barCategoryGap, P = v.maxBarSize, C = Fd(M), j = C.numericAxisName, N = C.cateAxisName, k = DL(b), D = k && _I({
      barSize: A,
      stackGroups: w
    }), R = [];
    return b.forEach(function(F, V) {
      var Y = La(v.data, {
        graphicalItems: [F],
        dataStartIndex: O,
        dataEndIndex: S
      }), q = F.props, ie = q.dataKey, Ie = q.maxBarSize, Ce = F.props["".concat(j, "Id")], kt = F.props["".concat(N, "Id")], Ye = {}, Ee = s.reduce(function(Nt, ft) {
        var Ba, Fa, Ua = x["".concat(ft.axisType, "Map")], Uc = F.props["".concat(ft.axisType, "Id")];
        Ua && Ua[Uc] || ft.axisType === "zAxis" || (process.env.NODE_ENV !== "production" ? He(!1, "Specifying a(n) ".concat(ft.axisType, "Id requires a corresponding ").concat(
          ft.axisType,
          "Id on the targeted graphical component "
        ).concat((Ba = F == null || (Fa = F.type) === null || Fa === void 0 ? void 0 : Fa.displayName) !== null && Ba !== void 0 ? Ba : "")) : He(!1));
        var Wc = Ua[Uc];
        return I(I({}, Nt), {}, W(W({}, ft.axisType, Wc), "".concat(ft.axisType, "Ticks"), Vr(Wc)));
      }, Ye), L = Ee[N], z = Ee["".concat(N, "Ticks")], K = w && w[Ce] && w[Ce].hasStack && LI(F, w[Ce].stackGroups), $ = vt(F.type).indexOf("Bar") >= 0, se = ou(L, z), G = [];
      if ($) {
        var ve, ge, ke = J(Ie) ? P : Ie, lt = (ve = (ge = ou(L, z, !0)) !== null && ge !== void 0 ? ge : ke) !== null && ve !== void 0 ? ve : 0;
        G = $I({
          barGap: E,
          barCategoryGap: T,
          bandSize: lt !== se ? lt : se,
          sizeList: D[kt],
          maxBarSize: ke
        }), lt !== se && (G = G.map(function(Nt) {
          return I(I({}, Nt), {}, {
            position: I(I({}, Nt.position), {}, {
              offset: Nt.position.offset - lt / 2
            })
          });
        }));
      }
      var Yn = F && F.type && F.type.getComposedData;
      Yn && R.push({
        props: I(I({}, Yn(I(I({}, Ee), {}, {
          displayedData: Y,
          props: v,
          dataKey: ie,
          item: F,
          bandSize: se,
          barPosition: G,
          offset: m,
          stackedData: K,
          layout: M,
          dataStartIndex: O,
          dataEndIndex: S
        }))), {}, W(W(W({
          key: F.key || "item-".concat(V)
        }, j, Ee[j]), N, Ee[N]), "animationId", h)),
        childIndex: Rb(F, v.children),
        item: F
      });
    }), R;
  }, g = function(v, x) {
    var b = v.props, w = v.dataStartIndex, m = v.dataEndIndex, h = v.updateId;
    if (!as({
      props: b
    }))
      return null;
    var O = b.children, S = b.layout, A = b.stackOffset, M = b.data, E = b.reverseStackOrder, T = Fd(S), P = T.numericAxisName, C = T.cateAxisName, j = at(O, i), N = DI(M, j, "".concat(P, "Id"), "".concat(C, "Id"), A, E), k = s.reduce(function(Y, q) {
      var ie = "".concat(q.axisType, "Map");
      return I(I({}, Y), {}, W({}, ie, kL(b, I(I({}, q), {}, {
        graphicalItems: j,
        stackGroups: q.axisType === P && N,
        dataStartIndex: w,
        dataEndIndex: m
      }))));
    }, {}), D = RL(I(I({}, k), {}, {
      props: b,
      graphicalItems: j
    }), x == null ? void 0 : x.legendBBox);
    Object.keys(k).forEach(function(Y) {
      k[Y] = l(b, k[Y], D, Y.replace("Map", ""), n);
    });
    var R = k["".concat(C, "Map")], F = NL(R), V = p(b, I(I({}, k), {}, {
      dataStartIndex: w,
      dataEndIndex: m,
      updateId: h,
      graphicalItems: j,
      stackGroups: N,
      offset: D
    }));
    return I(I({
      formattedGraphicalItems: V,
      graphicalItems: j,
      offset: D,
      stackGroups: N
    }, F), k);
  };
  return r = /* @__PURE__ */ function(y) {
    SL(v, y);
    function v(x) {
      var b, w, m;
      return bL(this, v), m = wL(this, v, [x]), W(Q(m), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), W(Q(m), "accessibilityManager", new aL()), W(Q(m), "handleLegendBBoxUpdate", function(h) {
        if (h) {
          var O = m.state, S = O.dataStartIndex, A = O.dataEndIndex, M = O.updateId;
          m.setState(I({
            legendBBox: h
          }, g({
            props: m.props,
            dataStartIndex: S,
            dataEndIndex: A,
            updateId: M
          }, I(I({}, m.state), {}, {
            legendBBox: h
          }))));
        }
      }), W(Q(m), "handleReceiveSyncEvent", function(h, O, S) {
        if (m.props.syncId === h) {
          if (S === m.eventEmitterSymbol && typeof m.props.syncMethod != "function")
            return;
          m.applySyncEvent(O);
        }
      }), W(Q(m), "handleBrushChange", function(h) {
        var O = h.startIndex, S = h.endIndex;
        if (O !== m.state.dataStartIndex || S !== m.state.dataEndIndex) {
          var A = m.state.updateId;
          m.setState(function() {
            return I({
              dataStartIndex: O,
              dataEndIndex: S
            }, g({
              props: m.props,
              dataStartIndex: O,
              dataEndIndex: S,
              updateId: A
            }, m.state));
          }), m.triggerSyncEvent({
            dataStartIndex: O,
            dataEndIndex: S
          });
        }
      }), W(Q(m), "handleMouseEnter", function(h) {
        var O = m.getMouseInfo(h);
        if (O) {
          var S = I(I({}, O), {}, {
            isTooltipActive: !0
          });
          m.setState(S), m.triggerSyncEvent(S);
          var A = m.props.onMouseEnter;
          Z(A) && A(S, h);
        }
      }), W(Q(m), "triggeredAfterMouseMove", function(h) {
        var O = m.getMouseInfo(h), S = O ? I(I({}, O), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        m.setState(S), m.triggerSyncEvent(S);
        var A = m.props.onMouseMove;
        Z(A) && A(S, h);
      }), W(Q(m), "handleItemMouseEnter", function(h) {
        m.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: h,
            activePayload: h.tooltipPayload,
            activeCoordinate: h.tooltipPosition || {
              x: h.cx,
              y: h.cy
            }
          };
        });
      }), W(Q(m), "handleItemMouseLeave", function() {
        m.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), W(Q(m), "handleMouseMove", function(h) {
        h.persist(), m.throttleTriggeredAfterMouseMove(h);
      }), W(Q(m), "handleMouseLeave", function(h) {
        m.throttleTriggeredAfterMouseMove.cancel();
        var O = {
          isTooltipActive: !1
        };
        m.setState(O), m.triggerSyncEvent(O);
        var S = m.props.onMouseLeave;
        Z(S) && S(O, h);
      }), W(Q(m), "handleOuterEvent", function(h) {
        var O = Db(h), S = Qe(m.props, "".concat(O));
        if (O && Z(S)) {
          var A, M;
          /.*touch.*/i.test(O) ? M = m.getMouseInfo(h.changedTouches[0]) : M = m.getMouseInfo(h), S((A = M) !== null && A !== void 0 ? A : {}, h);
        }
      }), W(Q(m), "handleClick", function(h) {
        var O = m.getMouseInfo(h);
        if (O) {
          var S = I(I({}, O), {}, {
            isTooltipActive: !0
          });
          m.setState(S), m.triggerSyncEvent(S);
          var A = m.props.onClick;
          Z(A) && A(S, h);
        }
      }), W(Q(m), "handleMouseDown", function(h) {
        var O = m.props.onMouseDown;
        if (Z(O)) {
          var S = m.getMouseInfo(h);
          O(S, h);
        }
      }), W(Q(m), "handleMouseUp", function(h) {
        var O = m.props.onMouseUp;
        if (Z(O)) {
          var S = m.getMouseInfo(h);
          O(S, h);
        }
      }), W(Q(m), "handleTouchMove", function(h) {
        h.changedTouches != null && h.changedTouches.length > 0 && m.throttleTriggeredAfterMouseMove(h.changedTouches[0]);
      }), W(Q(m), "handleTouchStart", function(h) {
        h.changedTouches != null && h.changedTouches.length > 0 && m.handleMouseDown(h.changedTouches[0]);
      }), W(Q(m), "handleTouchEnd", function(h) {
        h.changedTouches != null && h.changedTouches.length > 0 && m.handleMouseUp(h.changedTouches[0]);
      }), W(Q(m), "triggerSyncEvent", function(h) {
        m.props.syncId !== void 0 && ho.emit(vo, m.props.syncId, h, m.eventEmitterSymbol);
      }), W(Q(m), "applySyncEvent", function(h) {
        var O = m.props, S = O.layout, A = O.syncMethod, M = m.state.updateId, E = h.dataStartIndex, T = h.dataEndIndex;
        if (h.dataStartIndex !== void 0 || h.dataEndIndex !== void 0)
          m.setState(I({
            dataStartIndex: E,
            dataEndIndex: T
          }, g({
            props: m.props,
            dataStartIndex: E,
            dataEndIndex: T,
            updateId: M
          }, m.state)));
        else if (h.activeTooltipIndex !== void 0) {
          var P = h.chartX, C = h.chartY, j = h.activeTooltipIndex, N = m.state, k = N.offset, D = N.tooltipTicks;
          if (!k)
            return;
          if (typeof A == "function")
            j = A(D, h);
          else if (A === "value") {
            j = -1;
            for (var R = 0; R < D.length; R++)
              if (D[R].value === h.activeLabel) {
                j = R;
                break;
              }
          }
          var F = I(I({}, k), {}, {
            x: k.left,
            y: k.top
          }), V = Math.min(P, F.x + F.width), Y = Math.min(C, F.y + F.height), q = D[j] && D[j].value, ie = Nu(m.state, m.props.data, j), Ie = D[j] ? {
            x: S === "horizontal" ? D[j].coordinate : V,
            y: S === "horizontal" ? Y : D[j].coordinate
          } : Wv;
          m.setState(I(I({}, h), {}, {
            activeLabel: q,
            activeCoordinate: Ie,
            activePayload: ie,
            activeTooltipIndex: j
          }));
        } else
          m.setState(h);
      }), W(Q(m), "renderCursor", function(h) {
        var O, S = m.state, A = S.isTooltipActive, M = S.activeCoordinate, E = S.activePayload, T = S.offset, P = S.activeTooltipIndex, C = S.tooltipAxisBandSize, j = m.getTooltipEventType(), N = (O = h.props.active) !== null && O !== void 0 ? O : A, k = m.props.layout, D = h.key || "_recharts-cursor";
        return /* @__PURE__ */ _.createElement(dL, {
          key: D,
          activeCoordinate: M,
          activePayload: E,
          activeTooltipIndex: P,
          chartName: n,
          element: h,
          isActive: N,
          layout: k,
          offset: T,
          tooltipAxisBandSize: C,
          tooltipEventType: j
        });
      }), W(Q(m), "renderPolarAxis", function(h, O, S) {
        var A = Qe(h, "type.axisType"), M = Qe(m.state, "".concat(A, "Map")), E = M && M[h.props["".concat(A, "Id")]];
        return /* @__PURE__ */ xe(h, I(I({}, E), {}, {
          className: A,
          key: h.key || "".concat(O, "-").concat(S),
          ticks: Vr(E, !0)
        }));
      }), W(Q(m), "renderPolarGrid", function(h) {
        var O = h.props, S = O.radialLines, A = O.polarAngles, M = O.polarRadius, E = m.state, T = E.radiusAxisMap, P = E.angleAxisMap, C = ir(T), j = ir(P), N = j.cx, k = j.cy, D = j.innerRadius, R = j.outerRadius;
        return /* @__PURE__ */ xe(h, {
          polarAngles: Array.isArray(A) ? A : Vr(j, !0).map(function(F) {
            return F.coordinate;
          }),
          polarRadius: Array.isArray(M) ? M : Vr(C, !0).map(function(F) {
            return F.coordinate;
          }),
          cx: N,
          cy: k,
          innerRadius: D,
          outerRadius: R,
          key: h.key || "polar-grid",
          radialLines: S
        });
      }), W(Q(m), "renderLegend", function() {
        var h = m.state.formattedGraphicalItems, O = m.props, S = O.children, A = O.width, M = O.height, E = m.props.margin || {}, T = A - (E.left || 0) - (E.right || 0), P = ev({
          children: S,
          formattedGraphicalItems: h,
          legendWidth: T,
          legendContent: f
        });
        if (!P)
          return null;
        var C = P.item, j = Nd(P, pL);
        return /* @__PURE__ */ xe(C, I(I({}, j), {}, {
          chartWidth: A,
          chartHeight: M,
          margin: E,
          onBBoxUpdate: m.handleLegendBBoxUpdate
        }));
      }), W(Q(m), "renderTooltip", function() {
        var h, O = m.props, S = O.children, A = O.accessibilityLayer, M = We(S, rt);
        if (!M)
          return null;
        var E = m.state, T = E.isTooltipActive, P = E.activeCoordinate, C = E.activePayload, j = E.activeLabel, N = E.offset, k = (h = M.props.active) !== null && h !== void 0 ? h : T;
        return /* @__PURE__ */ xe(M, {
          viewBox: I(I({}, N), {}, {
            x: N.left,
            y: N.top
          }),
          active: k,
          label: j,
          payload: k ? C : [],
          coordinate: P,
          accessibilityLayer: A
        });
      }), W(Q(m), "renderBrush", function(h) {
        var O = m.props, S = O.margin, A = O.data, M = m.state, E = M.offset, T = M.dataStartIndex, P = M.dataEndIndex, C = M.updateId;
        return /* @__PURE__ */ xe(h, {
          key: h.key || "_recharts-brush",
          onChange: oi(m.handleBrushChange, h.props.onChange),
          data: A,
          x: B(h.props.x) ? h.props.x : E.left,
          y: B(h.props.y) ? h.props.y : E.top + E.height + E.brushBottom - (S.bottom || 0),
          width: B(h.props.width) ? h.props.width : E.width,
          startIndex: T,
          endIndex: P,
          updateId: "brush-".concat(C)
        });
      }), W(Q(m), "renderReferenceElement", function(h, O, S) {
        if (!h)
          return null;
        var A = Q(m), M = A.clipPathId, E = m.state, T = E.xAxisMap, P = E.yAxisMap, C = E.offset, j = h.props, N = j.xAxisId, k = j.yAxisId;
        return /* @__PURE__ */ xe(h, {
          key: h.key || "".concat(O, "-").concat(S),
          xAxis: T[N],
          yAxis: P[k],
          viewBox: {
            x: C.left,
            y: C.top,
            width: C.width,
            height: C.height
          },
          clipPathId: M
        });
      }), W(Q(m), "renderActivePoints", function(h) {
        var O = h.item, S = h.activePoint, A = h.basePoint, M = h.childIndex, E = h.isRange, T = [], P = O.props.key, C = O.item.props, j = C.activeDot, N = C.dataKey, k = I(I({
          index: M,
          dataKey: N,
          cx: S.x,
          cy: S.y,
          r: 4,
          fill: Nc(O.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: S.payload,
          value: S.value,
          key: "".concat(P, "-activePoint-").concat(M)
        }, X(j, !1)), gi(j));
        return T.push(v.renderActiveDot(j, k)), A ? T.push(v.renderActiveDot(j, I(I({}, k), {}, {
          cx: A.x,
          cy: A.y,
          key: "".concat(P, "-basePoint-").concat(M)
        }))) : E && T.push(null), T;
      }), W(Q(m), "renderGraphicChild", function(h, O, S) {
        var A = m.filterFormatItem(h, O, S);
        if (!A)
          return null;
        var M = m.getTooltipEventType(), E = m.state, T = E.isTooltipActive, P = E.tooltipAxis, C = E.activeTooltipIndex, j = E.activeLabel, N = m.props.children, k = We(N, rt), D = A.props, R = D.points, F = D.isRange, V = D.baseLine, Y = A.item.props, q = Y.activeDot, ie = Y.hide, Ie = Y.activeBar, Ce = Y.activeShape, kt = !!(!ie && T && k && (q || Ie || Ce)), Ye = {};
        M !== "axis" && k && k.props.trigger === "click" ? Ye = {
          onClick: oi(m.handleItemMouseEnter, h.props.onClick)
        } : M !== "axis" && (Ye = {
          onMouseLeave: oi(m.handleItemMouseLeave, h.props.onMouseLeave),
          onMouseEnter: oi(m.handleItemMouseEnter, h.props.onMouseEnter)
        });
        var Ee = /* @__PURE__ */ xe(h, I(I({}, A.props), Ye));
        function L(ft) {
          return typeof P.dataKey == "function" ? P.dataKey(ft.payload) : null;
        }
        if (kt)
          if (C >= 0) {
            var z, K;
            if (P.dataKey && !P.allowDuplicatedCategory) {
              var $ = typeof P.dataKey == "function" ? L : "payload.".concat(P.dataKey.toString());
              z = bo(R, $, j), K = F && V && bo(V, $, j);
            } else
              z = R == null ? void 0 : R[C], K = F && V && V[C];
            if (Ce || Ie) {
              var se = h.props.activeIndex !== void 0 ? h.props.activeIndex : C;
              return [/* @__PURE__ */ xe(h, I(I(I({}, A.props), Ye), {}, {
                activeIndex: se
              })), null, null];
            }
            if (!J(z))
              return [Ee].concat(Pr(m.renderActivePoints({
                item: A,
                activePoint: z,
                basePoint: K,
                childIndex: C,
                isRange: F
              })));
          } else {
            var G, ve = (G = m.getItemByXY(m.state.activeCoordinate)) !== null && G !== void 0 ? G : {
              graphicalItem: Ee
            }, ge = ve.graphicalItem, ke = ge.item, lt = ke === void 0 ? h : ke, Yn = ge.childIndex, Nt = I(I(I({}, A.props), Ye), {}, {
              activeIndex: Yn
            });
            return [/* @__PURE__ */ xe(lt, Nt), null, null];
          }
        return F ? [Ee, null, null] : [Ee, null];
      }), W(Q(m), "renderCustomized", function(h, O, S) {
        return /* @__PURE__ */ xe(h, I(I({
          key: "recharts-customized-".concat(S)
        }, m.props), m.state));
      }), W(Q(m), "renderMap", {
        CartesianGrid: {
          handler: di,
          once: !0
        },
        ReferenceArea: {
          handler: m.renderReferenceElement
        },
        ReferenceLine: {
          handler: di
        },
        ReferenceDot: {
          handler: m.renderReferenceElement
        },
        XAxis: {
          handler: di
        },
        YAxis: {
          handler: di
        },
        Brush: {
          handler: m.renderBrush,
          once: !0
        },
        Bar: {
          handler: m.renderGraphicChild
        },
        Line: {
          handler: m.renderGraphicChild
        },
        Area: {
          handler: m.renderGraphicChild
        },
        Radar: {
          handler: m.renderGraphicChild
        },
        RadialBar: {
          handler: m.renderGraphicChild
        },
        Scatter: {
          handler: m.renderGraphicChild
        },
        Pie: {
          handler: m.renderGraphicChild
        },
        Funnel: {
          handler: m.renderGraphicChild
        },
        Tooltip: {
          handler: m.renderCursor,
          once: !0
        },
        PolarGrid: {
          handler: m.renderPolarGrid,
          once: !0
        },
        PolarAngleAxis: {
          handler: m.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: m.renderPolarAxis
        },
        Customized: {
          handler: m.renderCustomized
        }
      }), m.clipPathId = "".concat((b = x.id) !== null && b !== void 0 ? b : da("recharts"), "-clip"), m.throttleTriggeredAfterMouseMove = rh(m.triggeredAfterMouseMove, (w = x.throttleDelay) !== null && w !== void 0 ? w : 1e3 / 60), m.state = {}, m;
    }
    return xL(v, [{
      key: "componentDidMount",
      value: function() {
        var b, w;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (b = this.props.margin.left) !== null && b !== void 0 ? b : 0,
            top: (w = this.props.margin.top) !== null && w !== void 0 ? w : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        }), this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function() {
        var b = this.props, w = b.children, m = b.data, h = b.height, O = b.layout, S = We(w, rt);
        if (S) {
          var A = S.props.defaultIndex;
          if (!(typeof A != "number" || A < 0 || A > this.state.tooltipTicks.length)) {
            var M = this.state.tooltipTicks[A] && this.state.tooltipTicks[A].value, E = Nu(this.state, m, A, M), T = this.state.tooltipTicks[A].coordinate, P = (this.state.offset.top + h) / 2, C = O === "horizontal", j = C ? {
              x: T,
              y: P
            } : {
              y: T,
              x: P
            }, N = this.state.formattedGraphicalItems.find(function(D) {
              var R = D.item;
              return R.type.name === "Scatter";
            });
            N && (j = I(I({}, j), N.props.points[A].tooltipPosition), E = N.props.points[A].tooltipPayload);
            var k = {
              activeTooltipIndex: A,
              isTooltipActive: !0,
              activeLabel: M,
              activePayload: E,
              activeCoordinate: j
            };
            this.setState(k), this.renderCursor(S), this.accessibilityManager.setIndex(A);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(b, w) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== w.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== b.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== b.margin) {
          var m, h;
          this.accessibilityManager.setDetails({
            offset: {
              left: (m = this.props.margin.left) !== null && m !== void 0 ? m : 0,
              top: (h = this.props.margin.top) !== null && h !== void 0 ? h : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(b) {
        Oo([We(b.children, rt)], [We(this.props.children, rt)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var b = We(this.props.children, rt);
        if (b && typeof b.props.shared == "boolean") {
          var w = b.props.shared ? "axis" : "item";
          return c.indexOf(w) >= 0 ? w : o;
        }
        return o;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {MousePointer} event    The event object
       * @return {Object}          Mouse data
       */
    }, {
      key: "getMouseInfo",
      value: function(b) {
        if (!this.container)
          return null;
        var w = this.container, m = w.getBoundingClientRect(), h = uT(m), O = {
          chartX: Math.round(b.pageX - h.left),
          chartY: Math.round(b.pageY - h.top)
        }, S = m.width / w.offsetWidth || 1, A = this.inRange(O.chartX, O.chartY, S);
        if (!A)
          return null;
        var M = this.state, E = M.xAxisMap, T = M.yAxisMap, P = this.getTooltipEventType();
        if (P !== "axis" && E && T) {
          var C = ir(E).scale, j = ir(T).scale, N = C && C.invert ? C.invert(O.chartX) : null, k = j && j.invert ? j.invert(O.chartY) : null;
          return I(I({}, O), {}, {
            xValue: N,
            yValue: k
          });
        }
        var D = Ld(this.state, this.props.data, this.props.layout, A);
        return D ? I(I({}, O), D) : null;
      }
    }, {
      key: "inRange",
      value: function(b, w) {
        var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, h = this.props.layout, O = b / m, S = w / m;
        if (h === "horizontal" || h === "vertical") {
          var A = this.state.offset, M = O >= A.left && O <= A.left + A.width && S >= A.top && S <= A.top + A.height;
          return M ? {
            x: O,
            y: S
          } : null;
        }
        var E = this.state, T = E.angleAxisMap, P = E.radiusAxisMap;
        if (T && P) {
          var C = ir(T);
          return mf({
            x: O,
            y: S
          }, C);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var b = this.props.children, w = this.getTooltipEventType(), m = We(b, rt), h = {};
        m && w === "axis" && (m.props.trigger === "click" ? h = {
          onClick: this.handleClick
        } : h = {
          onMouseEnter: this.handleMouseEnter,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd
        });
        var O = gi(this.props, this.handleOuterEvent);
        return I(I({}, O), h);
      }
    }, {
      key: "addListener",
      value: function() {
        ho.on(vo, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        ho.removeListener(vo, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(b, w, m) {
        for (var h = this.state.formattedGraphicalItems, O = 0, S = h.length; O < S; O++) {
          var A = h[O];
          if (A.item === b || A.props.key === b.key || w === vt(A.item.type) && m === A.childIndex)
            return A;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var b = this.clipPathId, w = this.state.offset, m = w.left, h = w.top, O = w.height, S = w.width;
        return /* @__PURE__ */ _.createElement("defs", null, /* @__PURE__ */ _.createElement("clipPath", {
          id: b
        }, /* @__PURE__ */ _.createElement("rect", {
          x: m,
          y: h,
          height: O,
          width: S
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var b = this.state.xAxisMap;
        return b ? Object.entries(b).reduce(function(w, m) {
          var h = kd(m, 2), O = h[0], S = h[1];
          return I(I({}, w), {}, W({}, O, S.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var b = this.state.yAxisMap;
        return b ? Object.entries(b).reduce(function(w, m) {
          var h = kd(m, 2), O = h[0], S = h[1];
          return I(I({}, w), {}, W({}, O, S.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(b) {
        var w;
        return (w = this.state.xAxisMap) === null || w === void 0 || (w = w[b]) === null || w === void 0 ? void 0 : w.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(b) {
        var w;
        return (w = this.state.yAxisMap) === null || w === void 0 || (w = w[b]) === null || w === void 0 ? void 0 : w.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(b) {
        var w = this.state, m = w.formattedGraphicalItems, h = w.activeItem;
        if (m && m.length)
          for (var O = 0, S = m.length; O < S; O++) {
            var A = m[O], M = A.props, E = A.item, T = vt(E.type);
            if (T === "Bar") {
              var P = (M.data || []).find(function(k) {
                return x2(b, k);
              });
              if (P)
                return {
                  graphicalItem: A,
                  payload: P
                };
            } else if (T === "RadialBar") {
              var C = (M.data || []).find(function(k) {
                return mf(b, k);
              });
              if (C)
                return {
                  graphicalItem: A,
                  payload: C
                };
            } else if (Da(A, h) || Ra(A, h) || Cn(A, h)) {
              var j = sD({
                graphicalItem: A,
                activeTooltipItem: h,
                itemData: E.props.data
              }), N = E.props.activeIndex === void 0 ? j : E.props.activeIndex;
              return {
                graphicalItem: I(I({}, A), {}, {
                  childIndex: N
                }),
                payload: Cn(A, h) ? E.props.data[j] : A.props.data[j]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var b = this, w;
        if (!as(this))
          return null;
        var m = this.props, h = m.children, O = m.className, S = m.width, A = m.height, M = m.style, E = m.compact, T = m.title, P = m.desc, C = Nd(m, hL), j = X(C, !1);
        if (E)
          return /* @__PURE__ */ _.createElement(Sd, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ _.createElement(Ao, rn({}, j, {
            width: S,
            height: A,
            title: T,
            desc: P
          }), this.renderClipPath(), us(h, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var N, k;
          j.tabIndex = (N = this.props.tabIndex) !== null && N !== void 0 ? N : 0, j.role = (k = this.props.role) !== null && k !== void 0 ? k : "application", j.onKeyDown = function(R) {
            b.accessibilityManager.keyboardEvent(R);
          }, j.onFocus = function() {
            b.accessibilityManager.focus();
          };
        }
        var D = this.parseEventsOfWrapper();
        return /* @__PURE__ */ _.createElement(Sd, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ _.createElement("div", rn({
          className: he("recharts-wrapper", O),
          style: I({
            position: "relative",
            cursor: "default",
            width: S,
            height: A
          }, M)
        }, D, {
          ref: function(F) {
            b.container = F;
          },
          role: (w = j.role) !== null && w !== void 0 ? w : "region"
        }), /* @__PURE__ */ _.createElement(Ao, rn({}, j, {
          width: S,
          height: A,
          title: T,
          desc: P,
          style: EL
        }), this.renderClipPath(), us(h, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]), v;
  }(Gv), W(r, "displayName", n), W(r, "defaultProps", I({
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: !1,
    syncMethod: "index"
  }, d)), W(r, "getDerivedStateFromProps", function(y, v) {
    var x = y.dataKey, b = y.data, w = y.children, m = y.width, h = y.height, O = y.layout, S = y.stackOffset, A = y.margin, M = v.dataStartIndex, E = v.dataEndIndex;
    if (v.updateId === void 0) {
      var T = Bd(y);
      return I(I(I({}, T), {}, {
        updateId: 0
      }, g(I(I({
        props: y
      }, T), {}, {
        updateId: 0
      }), v)), {}, {
        prevDataKey: x,
        prevData: b,
        prevWidth: m,
        prevHeight: h,
        prevLayout: O,
        prevStackOffset: S,
        prevMargin: A,
        prevChildren: w
      });
    }
    if (x !== v.prevDataKey || b !== v.prevData || m !== v.prevWidth || h !== v.prevHeight || O !== v.prevLayout || S !== v.prevStackOffset || !xo(A, v.prevMargin)) {
      var P = Bd(y), C = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: v.chartX,
        chartY: v.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: v.isTooltipActive
      }, j = I(I({}, Ld(v, b, O)), {}, {
        updateId: v.updateId + 1
      }), N = I(I(I({}, P), C), j);
      return I(I(I({}, N), g(I({
        props: y
      }, N), v)), {}, {
        prevDataKey: x,
        prevData: b,
        prevWidth: m,
        prevHeight: h,
        prevLayout: O,
        prevStackOffset: S,
        prevMargin: A,
        prevChildren: w
      });
    }
    if (!Oo(w, v.prevChildren)) {
      var k, D, R, F, V = We(w, _r), Y = V && (k = (D = V.props) === null || D === void 0 ? void 0 : D.startIndex) !== null && k !== void 0 ? k : M, q = V && (R = (F = V.props) === null || F === void 0 ? void 0 : F.endIndex) !== null && R !== void 0 ? R : E, ie = Y !== M || q !== E, Ie = !J(b), Ce = Ie && !ie ? v.updateId : v.updateId + 1;
      return I(I({
        updateId: Ce
      }, g(I(I({
        props: y
      }, v), {}, {
        updateId: Ce,
        dataStartIndex: Y,
        dataEndIndex: q
      }), v)), {}, {
        prevChildren: w,
        dataStartIndex: Y,
        dataEndIndex: q
      });
    }
    return null;
  }), W(r, "renderActiveDot", function(y, v) {
    var x;
    return /* @__PURE__ */ it(y) ? x = /* @__PURE__ */ xe(y, v) : Z(y) ? x = y(v) : x = /* @__PURE__ */ _.createElement(Rc, v), /* @__PURE__ */ _.createElement(ye, {
      className: "recharts-active-dot",
      key: v.key
    }, x);
  }), r;
}, BL = LL({
  chartName: "PieChart",
  GraphicalChild: _t,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: Na
  }, {
    axisType: "radiusAxis",
    AxisComp: Ca
  }],
  formatAxisMap: VI,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
});
const qL = ({ pieData: e }) => /* @__PURE__ */ Pe.jsxs(
  "div",
  {
    className: "pieChart",
    style: {
      width: "100%",
      height: 150,
      borderBottom: "1px solid #dcdbdb"
    },
    children: [
      /* @__PURE__ */ Pe.jsx("div", { className: "chart", style: { width: "50%", height: 150 }, children: /* @__PURE__ */ Pe.jsx(eT, { children: /* @__PURE__ */ Pe.jsxs(BL, { children: [
        /* @__PURE__ */ Pe.jsx(
          rt,
          {
            contentStyle: {
              background: "white",
              borderRadius: "5px"
            }
          }
        ),
        e.some((t) => t.value !== 0) ? /* @__PURE__ */ Pe.jsx(
          _t,
          {
            data: e,
            innerRadius: "40%",
            outerRadius: "80%",
            fill: e.some((t) => t.value !== 0) ? "#8884d8" : "#d8d8d8",
            paddingAngle: 5,
            dataKey: "value",
            children: e.map((t) => /* @__PURE__ */ Pe.jsx(cc, { fill: t.color }, t.name))
          }
        ) : null
      ] }) }) }),
      /* @__PURE__ */ Pe.jsx("div", { className: "options", children: e.length > 0 ? /* @__PURE__ */ Pe.jsx(Pe.Fragment, { children: e.map((t) => /* @__PURE__ */ Pe.jsxs("div", { className: "option-items", children: [
        /* @__PURE__ */ Pe.jsxs("div", { className: "pietitle", children: [
          /* @__PURE__ */ Pe.jsx(
            "div",
            {
              className: "dott",
              style: { backgroundColor: t.color }
            }
          ),
          /* @__PURE__ */ Pe.jsx("p", { className: "itemname", children: t.name })
        ] }),
        /* @__PURE__ */ Pe.jsx("p", { className: "itemval", style: { color: t.color }, children: t.value })
      ] }, t.name)) }) : null })
    ]
  }
);
export {
  qL as default
};
