var Hs = Object.defineProperty;
var Vs = (i, t, e) => t in i ? Hs(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var A = (i, t, e) => (Vs(i, typeof t != "symbol" ? t + "" : t, e), e);
import { aD as Ys, d as Us, u as Zn, a as Le, j as _, ah as $s, ai as Xs, al as Ks, ag as ji, am as qs, m as Ge, ac as Qs, aa as ai, au as Zs, b as Gs, ae as Js } from "./index-IlHv0hMp.mjs";
import gt, { Component as to, forwardRef as bi, useState as ht, useRef as Ei, useEffect as dt } from "react";
import { a as eo } from "./index.esm-CMILEMus.mjs";
import { a as io, E as no } from "./EventPageFormComponent-DV5mmLGo.mjs";
import { C as so, F as oo, a as ro } from "./Dashboard-CL4tlYjM.mjs";
import { R as ao, P as lo } from "./ReadMoreReadLess-B3Q9CfWL.mjs";
import { C as co } from "./CANCEL-YyRuUoYy.mjs";
var li = function() {
  return li = Object.assign || function(i) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s]);
    }
    return i;
  }, li.apply(this, arguments);
}, ho = function(i, t) {
  var e = {};
  for (var n in i)
    Object.prototype.hasOwnProperty.call(i, n) && t.indexOf(n) < 0 && (e[n] = i[n]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(i); s < n.length; s++)
      t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(i, n[s]) && (e[n[s]] = i[n[s]]);
  return e;
};
function xi(i) {
  var t = function(e) {
    var n = e.bgStyle, s = e.borderRadius, o = e.iconFillColor, r = e.round, a = e.size, l = ho(e, ["bgStyle", "borderRadius", "iconFillColor", "round", "size"]);
    return gt.createElement(
      "svg",
      li({ viewBox: "0 0 64 64", width: a, height: a }, l),
      r ? gt.createElement("circle", { cx: "32", cy: "32", r: "31", fill: i.color, style: n }) : gt.createElement("rect", { width: "64", height: "64", rx: s, ry: s, fill: i.color, style: n }),
      gt.createElement("path", { d: i.path, fill: o })
    );
  };
  return t.defaultProps = {
    bgStyle: {},
    borderRadius: 0,
    iconFillColor: "white",
    size: 64
  }, t;
}
function _i(i) {
  var t = Object.entries(i).filter(function(e) {
    var n = e[1];
    return n != null;
  }).map(function(e) {
    var n = e[0], s = e[1];
    return "".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(String(s)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var fo = /* @__PURE__ */ function() {
  var i = function(t, e) {
    return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, s) {
      n.__proto__ = s;
    } || function(n, s) {
      for (var o in s)
        Object.prototype.hasOwnProperty.call(s, o) && (n[o] = s[o]);
    }, i(t, e);
  };
  return function(t, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    i(t, e);
    function n() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  };
}(), ft = function() {
  return ft = Object.assign || function(i) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s]);
    }
    return i;
  }, ft.apply(this, arguments);
}, uo = function(i, t, e, n) {
  function s(o) {
    return o instanceof e ? o : new e(function(r) {
      r(o);
    });
  }
  return new (e || (e = Promise))(function(o, r) {
    function a(h) {
      try {
        c(n.next(h));
      } catch (d) {
        r(d);
      }
    }
    function l(h) {
      try {
        c(n.throw(h));
      } catch (d) {
        r(d);
      }
    }
    function c(h) {
      h.done ? o(h.value) : s(h.value).then(a, l);
    }
    c((n = n.apply(i, t || [])).next());
  });
}, go = function(i, t) {
  var e = { label: 0, sent: function() {
    if (o[0] & 1)
      throw o[1];
    return o[1];
  }, trys: [], ops: [] }, n, s, o, r;
  return r = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (r[Symbol.iterator] = function() {
    return this;
  }), r;
  function a(c) {
    return function(h) {
      return l([c, h]);
    };
  }
  function l(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; e; )
      try {
        if (n = 1, s && (o = c[0] & 2 ? s.return : c[0] ? s.throw || ((o = s.return) && o.call(s), 0) : s.next) && !(o = o.call(s, c[1])).done)
          return o;
        switch (s = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
          case 0:
          case 1:
            o = c;
            break;
          case 4:
            return e.label++, { value: c[1], done: !1 };
          case 5:
            e.label++, s = c[1], c = [0];
            continue;
          case 7:
            c = e.ops.pop(), e.trys.pop();
            continue;
          default:
            if (o = e.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              e = 0;
              continue;
            }
            if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
              e.label = c[1];
              break;
            }
            if (c[0] === 6 && e.label < o[1]) {
              e.label = o[1], o = c;
              break;
            }
            if (o && e.label < o[2]) {
              e.label = o[2], e.ops.push(c);
              break;
            }
            o[2] && e.ops.pop(), e.trys.pop();
            continue;
        }
        c = t.call(i, e);
      } catch (h) {
        c = [6, h], s = 0;
      } finally {
        n = o = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}, Gn = function(i, t) {
  var e = {};
  for (var n in i)
    Object.prototype.hasOwnProperty.call(i, n) && t.indexOf(n) < 0 && (e[n] = i[n]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(i); s < n.length; s++)
      t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(i, n[s]) && (e[n[s]] = i[n[s]]);
  return e;
}, po = function(i) {
  return !!i && (typeof i == "object" || typeof i == "function") && typeof i.then == "function";
}, mo = function(i, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - i / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, bo = function(i, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - i) / 2
  };
};
function xo(i, t, e) {
  var n = t.height, s = t.width, o = Gn(t, ["height", "width"]), r = ft({ height: n, width: s, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, o), a = window.open(i, "", Object.keys(r).map(function(c) {
    return "".concat(c, "=").concat(r[c]);
  }).join(", "));
  if (e)
    var l = window.setInterval(function() {
      try {
        (a === null || a.closed) && (window.clearInterval(l), e(a));
      } catch (c) {
        console.error(c);
      }
    }, 1e3);
  return a;
}
var _o = (
  /** @class */
  function(i) {
    fo(t, i);
    function t() {
      var e = i !== null && i.apply(this, arguments) || this;
      return e.openShareDialog = function(n) {
        var s = e.props, o = s.onShareWindowClose, r = s.windowHeight, a = r === void 0 ? 400 : r, l = s.windowPosition, c = l === void 0 ? "windowCenter" : l, h = s.windowWidth, d = h === void 0 ? 550 : h, f = ft({ height: a, width: d }, c === "windowCenter" ? mo(d, a) : bo(d, a));
        xo(n, f, o);
      }, e.handleClick = function(n) {
        return uo(e, void 0, void 0, function() {
          var s, o, r, a, l, c, h, d, f, u;
          return go(this, function(g) {
            switch (g.label) {
              case 0:
                return s = this.props, o = s.beforeOnClick, r = s.disabled, a = s.networkLink, l = s.onClick, c = s.url, h = s.openShareDialogOnClick, d = s.opts, f = a(c, d), r ? [
                  2
                  /*return*/
                ] : (n.preventDefault(), o ? (u = o(), po(u) ? [4, u] : [3, 2]) : [3, 2]);
              case 1:
                g.sent(), g.label = 2;
              case 2:
                return h && this.openShareDialog(f), l && l(n, f), [
                  2
                  /*return*/
                ];
            }
          });
        });
      }, e;
    }
    return t.prototype.render = function() {
      var e = this.props;
      e.beforeOnClick;
      var n = e.children, s = e.className, o = e.disabled, r = e.disabledStyle, a = e.forwardedRef;
      e.networkLink;
      var l = e.networkName;
      e.onShareWindowClose, e.openShareDialogOnClick, e.opts;
      var c = e.resetButtonStyle, h = e.style;
      e.url, e.windowHeight, e.windowPosition, e.windowWidth;
      var d = Gn(e, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), f = Ys("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!o,
        disabled: !!o
      }, s), u = ft(ft(c ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, h), o && r);
      return gt.createElement("button", ft({}, d, { "aria-label": d["aria-label"] || l, className: f, onClick: this.handleClick, ref: a, style: u }), n);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(to)
);
const yo = _o;
var Re = function() {
  return Re = Object.assign || function(i) {
    for (var t, e = 1, n = arguments.length; e < n; e++) {
      t = arguments[e];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (i[s] = t[s]);
    }
    return i;
  }, Re.apply(this, arguments);
};
function yi(i, t, e, n) {
  function s(o, r) {
    var a = e(o), l = Re({}, o), c = Object.keys(a);
    return c.forEach(function(h) {
      delete l[h];
    }), gt.createElement(yo, Re({}, n, l, { forwardedRef: r, networkName: i, networkLink: t, opts: e(o) }));
  }
  return s.displayName = "ShareButton-".concat(i), bi(s);
}
var wo = xi({
  color: "#3b5998",
  networkName: "facebook",
  path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
});
const Jn = wo;
var vo = /* @__PURE__ */ function() {
  var i = function(t, e) {
    return i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, s) {
      n.__proto__ = s;
    } || function(n, s) {
      for (var o in s)
        Object.prototype.hasOwnProperty.call(s, o) && (n[o] = s[o]);
    }, i(t, e);
  };
  return function(t, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    i(t, e);
    function n() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
  };
}(), ko = (
  /** @class */
  function(i) {
    vo(t, i);
    function t(e) {
      var n = i.call(this, e) || this;
      return n.name = "AssertionError", n;
    }
    return t;
  }(Error)
);
function ee(i, t) {
  if (!i)
    throw new ko(t);
}
function Mo(i, t) {
  var e = t.quote, n = t.hashtag;
  return ee(i, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + _i({
    u: i,
    quote: e,
    hashtag: n
  });
}
var So = yi("facebook", Mo, function(i) {
  return {
    quote: i.quote,
    hashtag: i.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
const ts = So;
var Co = xi({
  color: "#00aced",
  networkName: "twitter",
  path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
});
const es = Co;
function Ao(i, t) {
  var e = t.title, n = t.via, s = t.hashtags, o = s === void 0 ? [] : s, r = t.related, a = r === void 0 ? [] : r;
  return ee(i, "twitter.url"), ee(Array.isArray(o), "twitter.hashtags is not an array"), ee(Array.isArray(a), "twitter.related is not an array"), "https://twitter.com/share" + _i({
    url: i,
    text: e,
    via: n,
    hashtags: o.length > 0 ? o.join(",") : void 0,
    related: a.length > 0 ? a.join(",") : void 0
  });
}
var Oo = yi("twitter", Ao, function(i) {
  return {
    hashtags: i.hashtags,
    title: i.title,
    via: i.via,
    related: i.related
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
const is = Oo;
var Po = xi({
  color: "#25D366",
  networkName: "whatsapp",
  path: "m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"
});
const ns = Po;
function To() {
  return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
}
function Lo(i, t) {
  var e = t.title, n = t.separator;
  return ee(i, "whatsapp.url"), "https://" + (To() ? "api" : "web") + ".whatsapp.com/send" + _i({
    text: e ? e + n + i : i
  });
}
var Ro = yi("whatsapp", Lo, function(i) {
  return {
    title: i.title,
    separator: i.separator || " "
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
const ss = Ro, Io = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAmNSURBVHgB7Z3PchtFE8B79o9QVVL1iSv1VbEuLt8N+cMGblkXxPiWcORk5QmsPEGUJ0j8BFFu3Ai34FAV5QbEhcUDQPYCHFFuxrs7Q/dKNrI0+/+PxvL8qlxW7c62Vts7M909PTMAGqVgUCHW3pYLHFwGxhv/6KenoAput2Pb9r5g4t3ACIbwfOyBolSmEGt36wEDNpg7NPaPXm/CqtnrOja3X+In5/yQ4GIn+P54BApiQEWgMnoLh7rmF1t3YMVYodmHOWUQjLEHoCiVKQQWfnQE5+/CimHM6CwflNyrIlSpEE0FaIUohlaIYmiFKIaVeHZqvzvCFB1Ig0NmIn+lIUQo3kerKlthNJEtsJy0YsFpMIbReAI1IFcI2e6BPUBH6g5aJB3Gq/Mf23ufOiEPX0JT5Lh19FcG+G8/tVzLBri9PUITbli1A7zUZNm3tw/wxt7gmX18s9JrxnWFgYv1b4jP6wm1JFARlxRC3jZ+0WPQZIdBD5v1b6AiLhSCmu4uhD40WcHa0tr9eAAVMFdDxCPQFEaAOKii6ZoqBDtx7KBc0JShY79j9aAkkULswLoLmtIwYbhQkkghwgBtTVUANlsfQklq9dQNMLuLx8IwVEH50nvAcZL/wIqpN3TC4M5SR8fSHa8G6LzzxSf9S0ewH2UGW3nTbUG9OOjVnqBX+5ib4VsjMF0AJRQCXPBHaOp/iPf1yuTW+zzk/WoHtItRt0IIh5xNg5vqhTLRqcP76mHbD5njXTWjo72KoRWiGFohiqEVohhaIYqhFaIYWiGKoRWiGFohiqEVohhaIYqhFaIYicFFLsJ7oJHCDGOfieqHvRMVEr74eQgaKfbutgs1oJssxdAKUQytEMXQClEMrRDF0ApRjNJJDjTfw4czN+48A8MLnuefE16XXEoq52bYrVpuVRRXCE3qCe0nIQ9dA8zEomize/hTB5kmt9zudm2wH9UllzLVowyYquRWTLEmi6Z+hdbJdNJKJhya3NLa/Th5wj4+NAusl1dGbg0UUggtVVFkdpUAMbA+j59faDP7m6sktw5yK8T87CNKt3SgIIZh9OuQy0wmzYjEPqNXSi5rNr00t0Lwh3ehBHEZ4szI3JzECXblh3mp+8Vm7hY0SGWppOaZubF4LGgFjxhke8Oka5IAeCh3Z8VyG83Wr0whp6MfvMVjaK28hZJcNbll0Y6hYmiFKIZWiGJU16nv/b+3eCzXOiNyOldMbmlyK4RxmMjqFYYjniwXloqQLtqC5rDHli/olJYr+AQtreJyBXjQILmbLAEwhjKwmOs5jKAOuYI9g3L8Ag2SWyHRap5CjKAgJjMfVi1XCDGpQy6Qv2Kaja79UqhTN02L0oM8yIuAe6fPf/CqlEvKMJhRi1xsQu8nya2DQgqhm/TP/E1snw8hww8V9IYK2PRfvB6myTWNyIN+mlUuPrSds6OfnmWVSw86ReaE5FqmtZkmtw6KW1mj8SQAoEBhv+1+6sQVa0N7MhmNMq++Nnsje9G1K5B77sEHsBoqMXtlYYiLc3C15K4a7RgqRhMLB6wHbrdjta0uCzEajCF57GcciRPpYIDyBPvLMYaZR/7Z2bd5F8vUCkkDh6tbvLXPBe8zjqOOMx0kePRdLINjMKI3Wyxz6Jv+w6w7MpRWSF1ZHCvPDsEa0Wq1DgQXg1JLb9CajNzuZVVM9C3W7tYAzcelAX3/6HX8XcxlcUA6FBYZohn5MLVkTrnogxz+/d2PlTpvtK4w1gYKrThQLdh8sX5SNkuUD2N88J6LD8xdPMl//UP+AGdZHPjW/A+yQaNurvXBfyH89fdXsaUKyMW3dy9Vbg5omVx8Fl9DPSOFbfy7m3S/xbJO1jQ7JMcyuR5+6RD/+jSpKZrYhJ/x71BkCNPQ/Ubr/cruAXJSUdbJqGq5s6yTERREskPQJSIPn8Ehw2AlRhyWApnh3Odo9e4wdLE8dQOOVCD1LbvbE+wW7s8fXvuskyxEfUaSMkA8u+nf3AiOjgcyZSwShZYwTBSFl0Ak9Zv9xZXtKnMMKetk8Y9+SNbrE7JDSslNhZb2m3bgMTcm7qMivswTprmAwkuoRNrzCmJic2hOP4iW6Z1xbbNOLmRx+wDimhWMTvtHx8PYizPu/kZDANiM7cw2IXAWTncoR9oHiNKSrnfoZPpm9qXnsGYkRqcp2ZzWk0QjgFwGVOwJ+U5xxaPgpoAv5d+FFujMKLnWCqEtOaQnGAz9744TrS3J7m/U5CYu1079T1yfcr5z3PWuIYY8TTRu9HGeoru/UZ8Csv4EawlZZ9c16yTezMbaUfsoIReHYLCl2sQ576191kkccWY21Q4f6sUPgiEaA+SEXqpl6OvcWv+sk9jiTOYPjRsZQ6eQPINvYfmmuo1mndSaHZKh3b+MxMFlJV+2PHAh+65OY1knWbI4GssOofXomSx4KBrLweJCeLLj5bJOpiacl1T2PIuDskOyZJ3klVskO6TdbksDmNip5vfGL+NknZfIbCb9rrJZJwP8NOi4bucUTqU/MndCQU65q8oOiYMiuagUyDT2I6ESs3cW5yn7djUmNw6MRHfCrIWpDzDk8xpnwwGviuzZfi0dw9j+hjMHMuJ/f/w4MZKbEr1mAXTllyVR4YaJCuJJjuXasiiK5MaFQsB4k3w1i1eIENyTncTgWeMT5xtkeQiVxvFzvoQxSvFMw0geUpaFbQSMpj4vhZFb9l+y69A6ekbWDO2QA2tEtNuPsbzbD/7eh9ghDyAnFIcKeNDDEcW/bvg3niaNn0Rz5xksRyBwCJj9W2jrpd7LMGKCpvdGXbtBE6iQk2nu1gICNi/6kMgpE81ZNArTqbOpntUOWf9Bw77jC4WQ5YGO0T3QEP1a1jiJdlSFGGVPx/SX4qbRqBcD2v3YgevNxDf8zawpoKnQCCO3ZUO4hOcfvd6gD0tmL1Wb6CSOJ4sSU9fWgA49wKRh2cwkKwPmh3YzjfIkhTDWgaCF1pEklfYcShEqGgqhTEjy3OMSABetunLDbmuEdfujxzgse5BQxMuzylyU6xWyB0k5ytQCBS+Od+aPaYXMYe9uDyFlJ9LZJNMRPUxhTsP1+OAn+LkjgDtmaN7iIO5mSIkd3zi7sbPor2iFLJChppSGlHnTvylNvjNBcwn+25/PzY333qKTvAd1gN44NlNfnXqedJqknmMogSK5plFxyio2UZRSilZsP6mQbrJSoHQhZrADVjCsFI2WMmOY1RjQCsnIbIrBHaw1lM/VTeq0I/+NYTSZwyjvINU/p22FZcwXk4UAAAAASUVORK5CYII=", Do = ({
  EventDetails: i,
  setIsUpdating: t,
  EventPhotos: e,
  CurrentEventDetails: n,
  AdminMasjid: s
}) => {
  var v, y, S, M, k, C, P, O, T, Y;
  const [o, r] = gt.useState(!1), [a, l] = ht(!1), [c, h] = ht(!1), d = Qs.en, f = Us(), u = Zn();
  let g = Le((W) => W.AdminMasjid), m = Le((W) => W.EventCompletion);
  const p = () => {
    var R;
    f(
      so((R = i == null ? void 0 : i.masjid) == null ? void 0 : R._id, i == null ? void 0 : i._id)
    ).then(function(F) {
      F.message === "Event updated successfully" ? (ai(
        !0,
        "success",
        "Cancelled Event Successfully",
        f
      ), u("/events"), w()) : (ai(!0, "error", "Failed to Cancel Event", f), r(!1));
    });
  }, b = () => {
    f(io(!1));
  }, x = () => {
    r(!1);
  }, w = () => {
    r(!0);
  };
  return /* @__PURE__ */ _.jsx(_.Fragment, { children: /* @__PURE__ */ _.jsxs("div", { className: "EventProfileComponentContainer", children: [
    /* @__PURE__ */ _.jsx("div", { className: "EventProfileEventNameSection", children: /* @__PURE__ */ _.jsx("span", { className: "EventProfileNameWord", children: i == null ? void 0 : i.eventName }) }),
    /* @__PURE__ */ _.jsxs(
      $s,
      {
        open: o,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description",
        children: [
          /* @__PURE__ */ _.jsx(Xs, { id: "alert-dialog-title", children: "Are you sure you want to Cancel the  Event ?" }),
          /* @__PURE__ */ _.jsxs(Ks, { children: [
            /* @__PURE__ */ _.jsxs(ji, { onClick: p, variant: "outlined", children: [
              " ",
              a ? /* @__PURE__ */ _.jsx(qs, { size: "15px" }) : /* @__PURE__ */ _.jsx("span", { children: " Yes " }),
              " "
            ] }),
            /* @__PURE__ */ _.jsx(
              ji,
              {
                onClick: x,
                variant: "outlined",
                disabled: a,
                children: "No"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ _.jsxs("div", { className: "EventProfileInformationSection", children: [
      /* @__PURE__ */ _.jsxs("div", { className: "EventProfileInformationContainersMain", children: [
        /* @__PURE__ */ _.jsxs("span", { className: "EventProfileInfomationKey", children: [
          d.EVENT_PROFILE_CARD.MASJID_NAME,
          " :",
          " "
        ] }),
        /* @__PURE__ */ _.jsxs("span", { className: "EventProfileInfomationValueName", children: [
          " ",
          g == null ? void 0 : g.masjidName
        ] })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { className: "EventProfileInformationContainersDesc", children: [
        /* @__PURE__ */ _.jsxs("span", { className: "EventProfileInfomationKey", children: [
          d.EVENT_PROFILE_CARD.EVENT_DESCRIPTION,
          " :",
          " "
        ] }),
        /* @__PURE__ */ _.jsx("span", { className: "EventProfileInfomationValueDesc", children: ((v = i == null ? void 0 : i.description) == null ? void 0 : v.length) < 200 ? /* @__PURE__ */ _.jsx(_.Fragment, { children: i == null ? void 0 : i.description }) : /* @__PURE__ */ _.jsx(_.Fragment, { children: /* @__PURE__ */ _.jsx(ao, { Limit: 200, children: i == null ? void 0 : i.description }) }) })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { className: "EventProfileInformationContainers", children: [
        /* @__PURE__ */ _.jsxs("span", { className: "EventProfileInfomationKey", children: [
          d.EVENT_PROFILE_CARD.EVENT_ADDRESS,
          " :",
          " "
        ] }),
        /* @__PURE__ */ _.jsxs("span", { className: "EventProfileInfomationValue", children: [
          " ",
          i == null ? void 0 : i.address,
          " "
        ] })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { className: "EventProfileTimingSection", children: [
        /* @__PURE__ */ _.jsx("span", { className: "EventProfileTimingSectionTitle", children: d.EVENT_PROFILE_CARD.EVENT_TIMING_TITLE }),
        /* @__PURE__ */ _.jsxs("div", { className: "EventProfileTimingContainers", children: [
          /* @__PURE__ */ _.jsx("img", { src: Io, className: "CalenderLogo" }),
          /* @__PURE__ */ _.jsxs("span", { className: "EventProfileTimingValueDate", children: [
            ((y = i == null ? void 0 : i.metaData) == null ? void 0 : y.startDate) != null && Ge((S = i == null ? void 0 : i.metaData) == null ? void 0 : S.startDate).format(
              "DD/MM/YYYY"
            ),
            " | "
          ] }),
          /* @__PURE__ */ _.jsxs("span", { className: "EventProfileTimingValueStart", children: [
            " ",
            ((M = i == null ? void 0 : i.timings) == null ? void 0 : M.length) > 0 && Ge(((k = i == null ? void 0 : i.timings[0]) == null ? void 0 : k.startTime) * 1e3).format(
              "hh:mm A"
            ),
            " to"
          ] }),
          /* @__PURE__ */ _.jsxs("span", { className: "EventProfileTimingValueEnd", children: [
            " ",
            ((C = i == null ? void 0 : i.timings) == null ? void 0 : C.length) > 0 && Ge(((P = i == null ? void 0 : i.timings[0]) == null ? void 0 : P.endTime) * 1e3).format(
              "hh:mm A"
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ _.jsxs("div", { className: "EventProfileButtonSection", children: [
        m && /* @__PURE__ */ _.jsx(_.Fragment, { children: /* @__PURE__ */ _.jsx("button", { className: "DoneEvent", children: /* @__PURE__ */ _.jsx(
          "span",
          {
            className: "ButtonTitleEvent",
            onClick: (W) => {
              b(), h(!c);
            },
            children: "Done"
          }
        ) }) }),
        /* @__PURE__ */ _.jsx("button", { className: "AddGuestToEvent", children: /* @__PURE__ */ _.jsx(
          "span",
          {
            className: "ButtonTitleEvent",
            onClick: (W) => {
              t(!0);
            },
            children: "Update Event"
          }
        ) }),
        !(i != null && i.isCancelled) && /* @__PURE__ */ _.jsx("button", { className: "CancelEvent", onClick: w, children: /* @__PURE__ */ _.jsx(
          "span",
          {
            className: "ButtonTitleEvent",
            children: "Cancel Event"
          }
        ) })
      ] })
    ] }),
    c ? /* @__PURE__ */ _.jsx("div", { className: "PopupShare", children: /* @__PURE__ */ _.jsx("div", { className: "OutsidePopup", children: /* @__PURE__ */ _.jsxs("div", { className: "InsidePopup", children: [
      /* @__PURE__ */ _.jsxs("div", { className: "Shareclose", children: [
        /* @__PURE__ */ _.jsx("span", { className: "Shareonto", children: "Share On" }),
        /* @__PURE__ */ _.jsxs("div", { className: "SharingButtons", children: [
          /* @__PURE__ */ _.jsx("div", { className: "FacebookSharingButton", children: /* @__PURE__ */ _.jsx(
            ts,
            {
              url: (e == null ? void 0 : e.length) > 0 ? (O = e[0]) == null ? void 0 : O.url : "www.connectMazjid.com",
              children: /* @__PURE__ */ _.jsx(Jn, { size: 32, round: !0 })
            }
          ) }),
          /* @__PURE__ */ _.jsx("div", { className: "FacebookSharingButton", children: /* @__PURE__ */ _.jsx(
            ss,
            {
              url: (e == null ? void 0 : e.length) > 0 ? (T = e[0]) == null ? void 0 : T.url : "www.connectMazjid.com",
              title: `${i.eventName} will be happening at ${g.masjidName}`,
              children: /* @__PURE__ */ _.jsx(ns, { size: 32, round: !0 })
            }
          ) }),
          /* @__PURE__ */ _.jsx("div", { className: "FacebookSharingButton", children: /* @__PURE__ */ _.jsx(
            is,
            {
              url: (e == null ? void 0 : e.length) > 0 ? (Y = e[0]) == null ? void 0 : Y.url : "www.connectMazjid.com",
              title: `${i.eventName} will be happening at ${g.masjidName}`,
              children: /* @__PURE__ */ _.jsx(es, { size: 32, round: !0 })
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ _.jsx(
        "button",
        {
          onClick: (W) => {
            h(!1), u("/events");
          },
          className: "Buttonclose",
          children: /* @__PURE__ */ _.jsx("img", { src: co, className: "PopupCancelMain" })
        }
      )
    ] }) }) }) : ""
  ] }) });
};
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
function de(i) {
  return i + 0.5 | 0;
}
const mt = (i, t, e) => Math.max(Math.min(i, e), t);
function qt(i) {
  return mt(de(i * 2.55), 0, 255);
}
function _t(i) {
  return mt(de(i * 255), 0, 255);
}
function ut(i) {
  return mt(de(i / 2.55) / 100, 0, 1);
}
function Ni(i) {
  return mt(de(i * 100), 0, 100);
}
const tt = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, ci = [..."0123456789ABCDEF"], Fo = (i) => ci[i & 15], jo = (i) => ci[(i & 240) >> 4] + ci[i & 15], ge = (i) => (i & 240) >> 4 === (i & 15), Eo = (i) => ge(i.r) && ge(i.g) && ge(i.b) && ge(i.a);
function No(i) {
  var t = i.length, e;
  return i[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & tt[i[1]] * 17,
    g: 255 & tt[i[2]] * 17,
    b: 255 & tt[i[3]] * 17,
    a: t === 5 ? tt[i[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: tt[i[1]] << 4 | tt[i[2]],
    g: tt[i[3]] << 4 | tt[i[4]],
    b: tt[i[5]] << 4 | tt[i[6]],
    a: t === 9 ? tt[i[7]] << 4 | tt[i[8]] : 255
  })), e;
}
const zo = (i, t) => i < 255 ? t(i) : "";
function Bo(i) {
  var t = Eo(i) ? Fo : jo;
  return i ? "#" + t(i.r) + t(i.g) + t(i.b) + zo(i.a, t) : void 0;
}
const Wo = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function os(i, t, e) {
  const n = t * Math.min(e, 1 - e), s = (o, r = (o + i / 30) % 12) => e - n * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [s(0), s(8), s(4)];
}
function Ho(i, t, e) {
  const n = (s, o = (s + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [n(5), n(3), n(1)];
}
function Vo(i, t, e) {
  const n = os(i, 1, 0.5);
  let s;
  for (t + e > 1 && (s = 1 / (t + e), t *= s, e *= s), s = 0; s < 3; s++)
    n[s] *= 1 - t - e, n[s] += t;
  return n;
}
function Yo(i, t, e, n, s) {
  return i === s ? (t - e) / n + (t < e ? 6 : 0) : t === s ? (e - i) / n + 2 : (i - t) / n + 4;
}
function wi(i) {
  const e = i.r / 255, n = i.g / 255, s = i.b / 255, o = Math.max(e, n, s), r = Math.min(e, n, s), a = (o + r) / 2;
  let l, c, h;
  return o !== r && (h = o - r, c = a > 0.5 ? h / (2 - o - r) : h / (o + r), l = Yo(e, n, s, h, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function vi(i, t, e, n) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, n)).map(_t);
}
function ki(i, t, e) {
  return vi(os, i, t, e);
}
function Uo(i, t, e) {
  return vi(Vo, i, t, e);
}
function $o(i, t, e) {
  return vi(Ho, i, t, e);
}
function rs(i) {
  return (i % 360 + 360) % 360;
}
function Xo(i) {
  const t = Wo.exec(i);
  let e = 255, n;
  if (!t)
    return;
  t[5] !== n && (e = t[6] ? qt(+t[5]) : _t(+t[5]));
  const s = rs(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? n = Uo(s, o, r) : t[1] === "hsv" ? n = $o(s, o, r) : n = ki(s, o, r), {
    r: n[0],
    g: n[1],
    b: n[2],
    a: e
  };
}
function Ko(i, t) {
  var e = wi(i);
  e[0] = rs(e[0] + t), e = ki(e), i.r = e[0], i.g = e[1], i.b = e[2];
}
function qo(i) {
  if (!i)
    return;
  const t = wi(i), e = t[0], n = Ni(t[1]), s = Ni(t[2]);
  return i.a < 255 ? `hsla(${e}, ${n}%, ${s}%, ${ut(i.a)})` : `hsl(${e}, ${n}%, ${s}%)`;
}
const zi = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, Bi = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function Qo() {
  const i = {}, t = Object.keys(Bi), e = Object.keys(zi);
  let n, s, o, r, a;
  for (n = 0; n < t.length; n++) {
    for (r = a = t[n], s = 0; s < e.length; s++)
      o = e[s], a = a.replace(o, zi[o]);
    o = parseInt(Bi[r], 16), i[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return i;
}
let pe;
function Zo(i) {
  pe || (pe = Qo(), pe.transparent = [0, 0, 0, 0]);
  const t = pe[i.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const Go = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Jo(i) {
  const t = Go.exec(i);
  let e = 255, n, s, o;
  if (t) {
    if (t[7] !== n) {
      const r = +t[7];
      e = t[8] ? qt(r) : mt(r * 255, 0, 255);
    }
    return n = +t[1], s = +t[3], o = +t[5], n = 255 & (t[2] ? qt(n) : mt(n, 0, 255)), s = 255 & (t[4] ? qt(s) : mt(s, 0, 255)), o = 255 & (t[6] ? qt(o) : mt(o, 0, 255)), {
      r: n,
      g: s,
      b: o,
      a: e
    };
  }
}
function tr(i) {
  return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${ut(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
}
const Je = (i) => i <= 31308e-7 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055, Dt = (i) => i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
function er(i, t, e) {
  const n = Dt(ut(i.r)), s = Dt(ut(i.g)), o = Dt(ut(i.b));
  return {
    r: _t(Je(n + e * (Dt(ut(t.r)) - n))),
    g: _t(Je(s + e * (Dt(ut(t.g)) - s))),
    b: _t(Je(o + e * (Dt(ut(t.b)) - o))),
    a: i.a + e * (t.a - i.a)
  };
}
function me(i, t, e) {
  if (i) {
    let n = wi(i);
    n[t] = Math.max(0, Math.min(n[t] + n[t] * e, t === 0 ? 360 : 1)), n = ki(n), i.r = n[0], i.g = n[1], i.b = n[2];
  }
}
function as(i, t) {
  return i && Object.assign(t || {}, i);
}
function Wi(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(i) ? i.length >= 3 && (t = { r: i[0], g: i[1], b: i[2], a: 255 }, i.length > 3 && (t.a = _t(i[3]))) : (t = as(i, { r: 0, g: 0, b: 0, a: 1 }), t.a = _t(t.a)), t;
}
function ir(i) {
  return i.charAt(0) === "r" ? Jo(i) : Xo(i);
}
class re {
  constructor(t) {
    if (t instanceof re)
      return t;
    const e = typeof t;
    let n;
    e === "object" ? n = Wi(t) : e === "string" && (n = No(t) || Zo(t) || ir(t)), this._rgb = n, this._valid = !!n;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = as(this._rgb);
    return t && (t.a = ut(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Wi(t);
  }
  rgbString() {
    return this._valid ? tr(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Bo(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? qo(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const n = this.rgb, s = t.rgb;
      let o;
      const r = e === o ? 0.5 : e, a = 2 * r - 1, l = n.a - s.a, c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      o = 1 - c, n.r = 255 & c * n.r + o * s.r + 0.5, n.g = 255 & c * n.g + o * s.g + 0.5, n.b = 255 & c * n.b + o * s.b + 0.5, n.a = r * n.a + (1 - r) * s.a, this.rgb = n;
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = er(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new re(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = _t(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = de(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = e, this;
  }
  opaquer(t) {
    const e = this._rgb;
    return e.a *= 1 + t, this;
  }
  negate() {
    const t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return me(this._rgb, 2, t), this;
  }
  darken(t) {
    return me(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return me(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return me(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return Ko(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.2
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
function at() {
}
const nr = /* @__PURE__ */ (() => {
  let i = 0;
  return () => i++;
})();
function E(i) {
  return i === null || typeof i > "u";
}
function N(i) {
  if (Array.isArray && Array.isArray(i))
    return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function L(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function $(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function J(i, t) {
  return $(i) ? i : t;
}
function I(i, t) {
  return typeof i > "u" ? t : i;
}
const sr = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : +i / t, ls = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
function j(i, t, e) {
  if (i && typeof i.call == "function")
    return i.apply(e, t);
}
function D(i, t, e, n) {
  let s, o, r;
  if (N(i))
    if (o = i.length, n)
      for (s = o - 1; s >= 0; s--)
        t.call(e, i[s], s);
    else
      for (s = 0; s < o; s++)
        t.call(e, i[s], s);
  else if (L(i))
    for (r = Object.keys(i), o = r.length, s = 0; s < o; s++)
      t.call(e, i[r[s]], r[s]);
}
function Ie(i, t) {
  let e, n, s, o;
  if (!i || !t || i.length !== t.length)
    return !1;
  for (e = 0, n = i.length; e < n; ++e)
    if (s = i[e], o = t[e], s.datasetIndex !== o.datasetIndex || s.index !== o.index)
      return !1;
  return !0;
}
function De(i) {
  if (N(i))
    return i.map(De);
  if (L(i)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(i), n = e.length;
    let s = 0;
    for (; s < n; ++s)
      t[e[s]] = De(i[e[s]]);
    return t;
  }
  return i;
}
function cs(i) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(i) === -1;
}
function or(i, t, e, n) {
  if (!cs(i))
    return;
  const s = t[i], o = e[i];
  L(s) && L(o) ? ae(s, o, n) : t[i] = De(o);
}
function ae(i, t, e) {
  const n = N(t) ? t : [
    t
  ], s = n.length;
  if (!L(i))
    return i;
  e = e || {};
  const o = e.merger || or;
  let r;
  for (let a = 0; a < s; ++a) {
    if (r = n[a], !L(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, h = l.length; c < h; ++c)
      o(l[c], i, r, e);
  }
  return i;
}
function ie(i, t) {
  return ae(i, t, {
    merger: rr
  });
}
function rr(i, t, e) {
  if (!cs(i))
    return;
  const n = t[i], s = e[i];
  L(n) && L(s) ? ie(n, s) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = De(s));
}
const Hi = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (i) => i,
  // default resolvers
  x: (i) => i.x,
  y: (i) => i.y
};
function ar(i) {
  const t = i.split("."), e = [];
  let n = "";
  for (const s of t)
    n += s, n.endsWith("\\") ? n = n.slice(0, -1) + "." : (e.push(n), n = "");
  return e;
}
function lr(i) {
  const t = ar(i);
  return (e) => {
    for (const n of t) {
      if (n === "")
        break;
      e = e && e[n];
    }
    return e;
  };
}
function le(i, t) {
  return (Hi[t] || (Hi[t] = lr(t)))(i);
}
function Mi(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const Fe = (i) => typeof i < "u", yt = (i) => typeof i == "function", Vi = (i, t) => {
  if (i.size !== t.size)
    return !1;
  for (const e of i)
    if (!t.has(e))
      return !1;
  return !0;
};
function cr(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const U = Math.PI, z = 2 * U, je = Number.POSITIVE_INFINITY, hr = U / 180, V = U / 2, kt = U / 4, Yi = U * 2 / 3, bt = Math.log10, Ee = Math.sign;
function Oe(i, t, e) {
  return Math.abs(i - t) < e;
}
function Ui(i) {
  const t = Math.round(i);
  i = Oe(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(bt(i))), n = i / e;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * e;
}
function dr(i) {
  const t = [], e = Math.sqrt(i);
  let n;
  for (n = 1; n < e; n++)
    i % n === 0 && (t.push(n), t.push(i / n));
  return e === (e | 0) && t.push(e), t.sort((s, o) => s - o).pop(), t;
}
function Ne(i) {
  return !isNaN(parseFloat(i)) && isFinite(i);
}
function fr(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function hs(i, t, e) {
  let n, s, o;
  for (n = 0, s = i.length; n < s; n++)
    o = i[n][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function rt(i) {
  return i * (U / 180);
}
function Si(i) {
  return i * (180 / U);
}
function $i(i) {
  if (!$(i))
    return;
  let t = 1, e = 0;
  for (; Math.round(i * t) / t !== i; )
    t *= 10, e++;
  return e;
}
function ds(i, t) {
  const e = t.x - i.x, n = t.y - i.y, s = Math.sqrt(e * e + n * n);
  let o = Math.atan2(n, e);
  return o < -0.5 * U && (o += z), {
    angle: o,
    distance: s
  };
}
function ur(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function ot(i) {
  return (i % z + z) % z;
}
function ze(i, t, e, n) {
  const s = ot(i), o = ot(t), r = ot(e), a = ot(o - s), l = ot(r - s), c = ot(s - o), h = ot(s - r);
  return s === o || s === r || n && o === r || a > l && c < h;
}
function et(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function gr(i) {
  return et(i, -32768, 32767);
}
function Qt(i, t, e, n = 1e-6) {
  return i >= Math.min(t, e) - n && i <= Math.max(t, e) + n;
}
function Ci(i, t, e) {
  e = e || ((r) => i[r] < t);
  let n = i.length - 1, s = 0, o;
  for (; n - s > 1; )
    o = s + n >> 1, e(o) ? s = o : n = o;
  return {
    lo: s,
    hi: n
  };
}
const hi = (i, t, e, n) => Ci(i, e, n ? (s) => {
  const o = i[s][t];
  return o < e || o === e && i[s + 1][t] === e;
} : (s) => i[s][t] < e), pr = (i, t, e) => Ci(i, e, (n) => i[n][t] >= e);
function mr(i, t, e) {
  let n = 0, s = i.length;
  for (; n < s && i[n] < t; )
    n++;
  for (; s > n && i[s - 1] > e; )
    s--;
  return n > 0 || s < i.length ? i.slice(n, s) : i;
}
const fs = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function br(i, t) {
  if (i._chartjs) {
    i._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(i, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        t
      ]
    }
  }), fs.forEach((e) => {
    const n = "_onData" + Mi(e), s = i[e];
    Object.defineProperty(i, e, {
      configurable: !0,
      enumerable: !1,
      value(...o) {
        const r = s.apply(this, o);
        return i._chartjs.listeners.forEach((a) => {
          typeof a[n] == "function" && a[n](...o);
        }), r;
      }
    });
  });
}
function Xi(i, t) {
  const e = i._chartjs;
  if (!e)
    return;
  const n = e.listeners, s = n.indexOf(t);
  s !== -1 && n.splice(s, 1), !(n.length > 0) && (fs.forEach((o) => {
    delete i[o];
  }), delete i._chartjs);
}
function xr(i) {
  const t = new Set(i);
  return t.size === i.length ? i : Array.from(t);
}
const us = function() {
  return typeof window > "u" ? function(i) {
    return i();
  } : window.requestAnimationFrame;
}();
function gs(i, t) {
  let e = [], n = !1;
  return function(...s) {
    e = s, n || (n = !0, us.call(window, () => {
      n = !1, i.apply(t, e);
    }));
  };
}
function _r(i, t) {
  let e;
  return function(...n) {
    return t ? (clearTimeout(e), e = setTimeout(i, t, n)) : i.apply(this, n), t;
  };
}
const ps = (i) => i === "start" ? "left" : i === "end" ? "right" : "center", G = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2, yr = (i, t, e, n) => i === (n ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t, be = (i) => i === 0 || i === 1, Ki = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * z / e)), qi = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * z / e) + 1, ne = {
  linear: (i) => i,
  easeInQuad: (i) => i * i,
  easeOutQuad: (i) => -i * (i - 2),
  easeInOutQuad: (i) => (i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1),
  easeInCubic: (i) => i * i * i,
  easeOutCubic: (i) => (i -= 1) * i * i + 1,
  easeInOutCubic: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2),
  easeInQuart: (i) => i * i * i * i,
  easeOutQuart: (i) => -((i -= 1) * i * i * i - 1),
  easeInOutQuart: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
  easeInQuint: (i) => i * i * i * i * i,
  easeOutQuint: (i) => (i -= 1) * i * i * i * i + 1,
  easeInOutQuint: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i * i * i : 0.5 * ((i -= 2) * i * i * i * i + 2),
  easeInSine: (i) => -Math.cos(i * V) + 1,
  easeOutSine: (i) => Math.sin(i * V),
  easeInOutSine: (i) => -0.5 * (Math.cos(U * i) - 1),
  easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
  easeOutExpo: (i) => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
  easeInOutExpo: (i) => be(i) ? i : i < 0.5 ? 0.5 * Math.pow(2, 10 * (i * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
  easeInCirc: (i) => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
  easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
  easeInOutCirc: (i) => (i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
  easeInElastic: (i) => be(i) ? i : Ki(i, 0.075, 0.3),
  easeOutElastic: (i) => be(i) ? i : qi(i, 0.075, 0.3),
  easeInOutElastic(i) {
    return be(i) ? i : i < 0.5 ? 0.5 * Ki(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * qi(i * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(i) {
    return i * i * ((1.70158 + 1) * i - 1.70158);
  },
  easeOutBack(i) {
    return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1;
  },
  easeInOutBack(i) {
    let t = 1.70158;
    return (i /= 0.5) < 1 ? 0.5 * (i * i * (((t *= 1.525) + 1) * i - t)) : 0.5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2);
  },
  easeInBounce: (i) => 1 - ne.easeOutBounce(1 - i),
  easeOutBounce(i) {
    return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
  },
  easeInOutBounce: (i) => i < 0.5 ? ne.easeInBounce(i * 2) * 0.5 : ne.easeOutBounce(i * 2 - 1) * 0.5 + 0.5
};
function ms(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Qi(i) {
  return ms(i) ? i : new re(i);
}
function ti(i) {
  return ms(i) ? i : new re(i).saturate(0.5).darken(0.1).hexString();
}
const wr = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], vr = [
  "color",
  "borderColor",
  "backgroundColor"
];
function kr(i) {
  i.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), i.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn"
  }), i.set("animations", {
    colors: {
      type: "color",
      properties: vr
    },
    numbers: {
      type: "number",
      properties: wr
    }
  }), i.describe("animations", {
    _fallback: "animation"
  }), i.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (t) => t | 0
        }
      }
    }
  });
}
function Mr(i) {
  i.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const Zi = /* @__PURE__ */ new Map();
function Sr(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let n = Zi.get(e);
  return n || (n = new Intl.NumberFormat(i, t), Zi.set(e, n)), n;
}
function Xe(i, t, e) {
  return Sr(t, e).format(i);
}
const bs = {
  values(i) {
    return N(i) ? i : "" + i;
  },
  numeric(i, t, e) {
    if (i === 0)
      return "0";
    const n = this.chart.options.locale;
    let s, o = i;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (s = "scientific"), o = Cr(i, e);
    }
    const r = bt(Math.abs(o)), a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: s,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), Xe(i, n, l);
  },
  logarithmic(i, t, e) {
    if (i === 0)
      return "0";
    const n = e[t].significand || i / Math.pow(10, Math.floor(bt(i)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(n) || t > 0.8 * e.length ? bs.numeric.call(this, i, t, e) : "";
  }
};
function Cr(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var Ke = {
  formatters: bs
};
function Ar(i) {
  i.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, e) => e.lineWidth,
      tickColor: (t, e) => e.color,
      offset: !1
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Ke.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), i.route("scale.ticks", "color", "", "color"), i.route("scale.grid", "color", "", "borderColor"), i.route("scale.border", "color", "", "borderColor"), i.route("scale.title", "color", "", "color"), i.describe("scale", {
    _fallback: !1,
    _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
    _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
  }), i.describe("scales", {
    _fallback: "scale"
  }), i.describe("scale.ticks", {
    _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
    _indexable: (t) => t !== "backdropPadding"
  });
}
const Pt = /* @__PURE__ */ Object.create(null), di = /* @__PURE__ */ Object.create(null);
function se(i, t) {
  if (!t)
    return i;
  const e = t.split(".");
  for (let n = 0, s = e.length; n < s; ++n) {
    const o = e[n];
    i = i[o] || (i[o] = /* @__PURE__ */ Object.create(null));
  }
  return i;
}
function ei(i, t, e) {
  return typeof t == "string" ? ae(se(i, t), e) : ae(se(i, ""), t);
}
class Or {
  constructor(t, e) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (n) => n.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (n, s) => ti(s.backgroundColor), this.hoverBorderColor = (n, s) => ti(s.borderColor), this.hoverColor = (n, s) => ti(s.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return ei(this, t, e);
  }
  get(t) {
    return se(this, t);
  }
  describe(t, e) {
    return ei(di, t, e);
  }
  override(t, e) {
    return ei(Pt, t, e);
  }
  route(t, e, n, s) {
    const o = se(this, t), r = se(this, n), a = "_" + e;
    Object.defineProperties(o, {
      [a]: {
        value: o[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[s];
          return L(l) ? Object.assign({}, c, l) : I(l, c);
        },
        set(l) {
          this[a] = l;
        }
      }
    });
  }
  apply(t) {
    t.forEach((e) => e(this));
  }
}
var B = /* @__PURE__ */ new Or({
  _scriptable: (i) => !i.startsWith("on"),
  _indexable: (i) => i !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  kr,
  Mr,
  Ar
]);
function Pr(i) {
  return !i || E(i.size) || E(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
}
function Be(i, t, e, n, s) {
  let o = t[s];
  return o || (o = t[s] = i.measureText(s).width, e.push(s)), o > n && (n = o), n;
}
function Tr(i, t, e, n) {
  n = n || {};
  let s = n.data = n.data || {}, o = n.garbageCollect = n.garbageCollect || [];
  n.font !== t && (s = n.data = {}, o = n.garbageCollect = [], n.font = t), i.save(), i.font = t;
  let r = 0;
  const a = e.length;
  let l, c, h, d, f;
  for (l = 0; l < a; l++)
    if (d = e[l], d != null && !N(d))
      r = Be(i, s, o, r, d);
    else if (N(d))
      for (c = 0, h = d.length; c < h; c++)
        f = d[c], f != null && !N(f) && (r = Be(i, s, o, r, f));
  i.restore();
  const u = o.length / 2;
  if (u > e.length) {
    for (l = 0; l < u; l++)
      delete s[o[l]];
    o.splice(0, u);
  }
  return r;
}
function Mt(i, t, e) {
  const n = i.currentDevicePixelRatio, s = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - s) * n) / n + s;
}
function Gi(i, t) {
  t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore();
}
function Ji(i, t, e, n) {
  xs(i, t, e, n, null);
}
function xs(i, t, e, n, s) {
  let o, r, a, l, c, h, d, f;
  const u = t.pointStyle, g = t.rotation, m = t.radius;
  let p = (g || 0) * hr;
  if (u && typeof u == "object" && (o = u.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    i.save(), i.translate(e, n), i.rotate(p), i.drawImage(u, -u.width / 2, -u.height / 2, u.width, u.height), i.restore();
    return;
  }
  if (!(isNaN(m) || m <= 0)) {
    switch (i.beginPath(), u) {
      default:
        s ? i.ellipse(e, n, s / 2, m, 0, 0, z) : i.arc(e, n, m, 0, z), i.closePath();
        break;
      case "triangle":
        h = s ? s / 2 : m, i.moveTo(e + Math.sin(p) * h, n - Math.cos(p) * m), p += Yi, i.lineTo(e + Math.sin(p) * h, n - Math.cos(p) * m), p += Yi, i.lineTo(e + Math.sin(p) * h, n - Math.cos(p) * m), i.closePath();
        break;
      case "rectRounded":
        c = m * 0.516, l = m - c, r = Math.cos(p + kt) * l, d = Math.cos(p + kt) * (s ? s / 2 - c : l), a = Math.sin(p + kt) * l, f = Math.sin(p + kt) * (s ? s / 2 - c : l), i.arc(e - d, n - a, c, p - U, p - V), i.arc(e + f, n - r, c, p - V, p), i.arc(e + d, n + a, c, p, p + V), i.arc(e - f, n + r, c, p + V, p + U), i.closePath();
        break;
      case "rect":
        if (!g) {
          l = Math.SQRT1_2 * m, h = s ? s / 2 : l, i.rect(e - h, n - l, 2 * h, 2 * l);
          break;
        }
        p += kt;
      case "rectRot":
        d = Math.cos(p) * (s ? s / 2 : m), r = Math.cos(p) * m, a = Math.sin(p) * m, f = Math.sin(p) * (s ? s / 2 : m), i.moveTo(e - d, n - a), i.lineTo(e + f, n - r), i.lineTo(e + d, n + a), i.lineTo(e - f, n + r), i.closePath();
        break;
      case "crossRot":
        p += kt;
      case "cross":
        d = Math.cos(p) * (s ? s / 2 : m), r = Math.cos(p) * m, a = Math.sin(p) * m, f = Math.sin(p) * (s ? s / 2 : m), i.moveTo(e - d, n - a), i.lineTo(e + d, n + a), i.moveTo(e + f, n - r), i.lineTo(e - f, n + r);
        break;
      case "star":
        d = Math.cos(p) * (s ? s / 2 : m), r = Math.cos(p) * m, a = Math.sin(p) * m, f = Math.sin(p) * (s ? s / 2 : m), i.moveTo(e - d, n - a), i.lineTo(e + d, n + a), i.moveTo(e + f, n - r), i.lineTo(e - f, n + r), p += kt, d = Math.cos(p) * (s ? s / 2 : m), r = Math.cos(p) * m, a = Math.sin(p) * m, f = Math.sin(p) * (s ? s / 2 : m), i.moveTo(e - d, n - a), i.lineTo(e + d, n + a), i.moveTo(e + f, n - r), i.lineTo(e - f, n + r);
        break;
      case "line":
        r = s ? s / 2 : Math.cos(p) * m, a = Math.sin(p) * m, i.moveTo(e - r, n - a), i.lineTo(e + r, n + a);
        break;
      case "dash":
        i.moveTo(e, n), i.lineTo(e + Math.cos(p) * (s ? s / 2 : m), n + Math.sin(p) * m);
        break;
      case !1:
        i.closePath();
        break;
    }
    i.fill(), t.borderWidth > 0 && i.stroke();
  }
}
function jt(i, t, e) {
  return e = e || 0.5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
}
function Ai(i, t) {
  i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function Oi(i) {
  i.restore();
}
function Lr(i, t) {
  t.translation && i.translate(t.translation[0], t.translation[1]), E(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
}
function Rr(i, t, e, n, s) {
  if (s.strikethrough || s.underline) {
    const o = i.measureText(n), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, h = s.strikethrough ? (l + c) / 2 : c;
    i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = s.decorationWidth || 2, i.moveTo(r, h), i.lineTo(a, h), i.stroke();
  }
}
function Ir(i, t) {
  const e = i.fillStyle;
  i.fillStyle = t.color, i.fillRect(t.left, t.top, t.width, t.height), i.fillStyle = e;
}
function zt(i, t, e, n, s, o = {}) {
  const r = N(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (i.save(), i.font = s.string, Lr(i, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && Ir(i, o.backdrop), a && (o.strokeColor && (i.strokeStyle = o.strokeColor), E(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, n, o.maxWidth)), i.fillText(c, e, n, o.maxWidth), Rr(i, e, n, c, o), n += Number(s.lineHeight);
  i.restore();
}
function We(i, t) {
  const { x: e, y: n, w: s, h: o, radius: r } = t;
  i.arc(e + r.topLeft, n + r.topLeft, r.topLeft, 1.5 * U, U, !0), i.lineTo(e, n + o - r.bottomLeft), i.arc(e + r.bottomLeft, n + o - r.bottomLeft, r.bottomLeft, U, V, !0), i.lineTo(e + s - r.bottomRight, n + o), i.arc(e + s - r.bottomRight, n + o - r.bottomRight, r.bottomRight, V, 0, !0), i.lineTo(e + s, n + r.topRight), i.arc(e + s - r.topRight, n + r.topRight, r.topRight, 0, -V, !0), i.lineTo(e + r.topLeft, n);
}
const Dr = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, Fr = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function jr(i, t) {
  const e = ("" + i).match(Dr);
  if (!e || e[1] === "normal")
    return t * 1.2;
  switch (i = +e[2], e[3]) {
    case "px":
      return i;
    case "%":
      i /= 100;
      break;
  }
  return t * i;
}
const Er = (i) => +i || 0;
function Pi(i, t) {
  const e = {}, n = L(t), s = n ? Object.keys(t) : t, o = L(i) ? n ? (r) => I(i[r], i[t[r]]) : (r) => i[r] : () => i;
  for (const r of s)
    e[r] = Er(o(r));
  return e;
}
function Nr(i) {
  return Pi(i, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function Et(i) {
  return Pi(i, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function q(i) {
  const t = Nr(i);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function X(i, t) {
  i = i || {}, t = t || B.font;
  let e = I(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let n = I(i.style, t.style);
  n && !("" + n).match(Fr) && (console.warn('Invalid font style specified: "' + n + '"'), n = void 0);
  const s = {
    family: I(i.family, t.family),
    lineHeight: jr(I(i.lineHeight, t.lineHeight), e),
    size: e,
    style: n,
    weight: I(i.weight, t.weight),
    string: ""
  };
  return s.string = Pr(s), s;
}
function xe(i, t, e, n) {
  let s = !0, o, r, a;
  for (o = 0, r = i.length; o < r; ++o)
    if (a = i[o], a !== void 0 && (t !== void 0 && typeof a == "function" && (a = a(t), s = !1), e !== void 0 && N(a) && (a = a[e % a.length], s = !1), a !== void 0))
      return n && !s && (n.cacheable = !1), a;
}
function zr(i, t, e) {
  const { min: n, max: s } = i, o = ls(t, (s - n) / 2), r = (a, l) => e && a === 0 ? 0 : a + l;
  return {
    min: r(n, -Math.abs(o)),
    max: r(s, o)
  };
}
function Lt(i, t) {
  return Object.assign(Object.create(i), t);
}
function Ti(i, t = [
  ""
], e, n, s = () => i[0]) {
  const o = e || i;
  typeof n > "u" && (n = vs("_fallback", i));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: o,
    _fallback: n,
    _getTarget: s,
    override: (a) => Ti([
      a,
      ...i
    ], t, o, n)
  };
  return new Proxy(r, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete i[0][l], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(a, l) {
      return ys(a, l, () => Xr(l, t, i, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(a, l) {
      return en(a).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(a) {
      return en(a);
    },
    /**
    * A trap for setting property values.
    */
    set(a, l, c) {
      const h = a._storage || (a._storage = s());
      return a[l] = h[l] = c, delete a._keys, !0;
    }
  });
}
function Bt(i, t, e, n) {
  const s = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: _s(i, n),
    setContext: (o) => Bt(i, o, e, n),
    override: (o) => Bt(i.override(o), t, e, n)
  };
  return new Proxy(s, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(o, r) {
      return delete o[r], delete i[r], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(o, r, a) {
      return ys(o, r, () => Wr(o, r, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys ? Reflect.has(i, r) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(i, r);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i);
    },
    /**
    * A trap for the in operator.
    */
    has(o, r) {
      return Reflect.has(i, r);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(i);
    },
    /**
    * A trap for setting property values.
    */
    set(o, r, a) {
      return i[r] = a, delete o[r], !0;
    }
  });
}
function _s(i, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: n = t.indexable, _allKeys: s = t.allKeys } = i;
  return {
    allKeys: s,
    scriptable: e,
    indexable: n,
    isScriptable: yt(e) ? e : () => e,
    isIndexable: yt(n) ? n : () => n
  };
}
const Br = (i, t) => i ? i + Mi(t) : t, Li = (i, t) => L(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function ys(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t))
    return i[t];
  const n = e();
  return i[t] = n, n;
}
function Wr(i, t, e) {
  const { _proxy: n, _context: s, _subProxy: o, _descriptors: r } = i;
  let a = n[t];
  return yt(a) && r.isScriptable(t) && (a = Hr(t, a, i, e)), N(a) && a.length && (a = Vr(t, a, i, r.isIndexable)), Li(t, a) && (a = Bt(a, s, o && o[t], r)), a;
}
function Hr(i, t, e, n) {
  const { _proxy: s, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(i))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + i);
  a.add(i);
  let l = t(o, r || n);
  return a.delete(i), Li(i, l) && (l = Ri(s._scopes, s, i, l)), l;
}
function Vr(i, t, e, n) {
  const { _proxy: s, _context: o, _subProxy: r, _descriptors: a } = e;
  if (typeof o.index < "u" && n(i))
    return t[o.index % t.length];
  if (L(t[0])) {
    const l = t, c = s._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const d = Ri(c, s, i, h);
      t.push(Bt(d, o, r && r[i], a));
    }
  }
  return t;
}
function ws(i, t, e) {
  return yt(i) ? i(t, e) : i;
}
const Yr = (i, t) => i === !0 ? t : typeof i == "string" ? le(t, i) : void 0;
function Ur(i, t, e, n, s) {
  for (const o of t) {
    const r = Yr(e, o);
    if (r) {
      i.add(r);
      const a = ws(r._fallback, e, s);
      if (typeof a < "u" && a !== e && a !== n)
        return a;
    } else if (r === !1 && typeof n < "u" && e !== n)
      return null;
  }
  return !1;
}
function Ri(i, t, e, n) {
  const s = t._rootScopes, o = ws(t._fallback, e, n), r = [
    ...i,
    ...s
  ], a = /* @__PURE__ */ new Set();
  a.add(n);
  let l = tn(a, r, e, o || e, n);
  return l === null || typeof o < "u" && o !== e && (l = tn(a, r, o, l, n), l === null) ? !1 : Ti(Array.from(a), [
    ""
  ], s, o, () => $r(t, e, n));
}
function tn(i, t, e, n, s) {
  for (; e; )
    e = Ur(i, t, e, n, s);
  return e;
}
function $r(i, t, e) {
  const n = i._getTarget();
  t in n || (n[t] = {});
  const s = n[t];
  return N(s) && L(e) ? e : s || {};
}
function Xr(i, t, e, n) {
  let s;
  for (const o of t)
    if (s = vs(Br(o, i), e), typeof s < "u")
      return Li(i, s) ? Ri(e, n, i, s) : s;
}
function vs(i, t) {
  for (const e of t) {
    if (!e)
      continue;
    const n = e[i];
    if (typeof n < "u")
      return n;
  }
}
function en(i) {
  let t = i._keys;
  return t || (t = i._keys = Kr(i._scopes)), t;
}
function Kr(i) {
  const t = /* @__PURE__ */ new Set();
  for (const e of i)
    for (const n of Object.keys(e).filter((s) => !s.startsWith("_")))
      t.add(n);
  return Array.from(t);
}
function Ii() {
  return typeof window < "u" && typeof document < "u";
}
function Di(i) {
  let t = i.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function He(i, t, e) {
  let n;
  return typeof i == "string" ? (n = parseInt(i, 10), i.indexOf("%") !== -1 && (n = n / 100 * t.parentNode[e])) : n = i, n;
}
const qe = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function qr(i, t) {
  return qe(i).getPropertyValue(t);
}
const Qr = [
  "top",
  "right",
  "bottom",
  "left"
];
function Ot(i, t, e) {
  const n = {};
  e = e ? "-" + e : "";
  for (let s = 0; s < 4; s++) {
    const o = Qr[s];
    n[o] = parseFloat(i[t + "-" + o + e]) || 0;
  }
  return n.width = n.left + n.right, n.height = n.top + n.bottom, n;
}
const Zr = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function Gr(i, t) {
  const e = i.touches, n = e && e.length ? e[0] : i, { offsetX: s, offsetY: o } = n;
  let r = !1, a, l;
  if (Zr(s, o, i.target))
    a = s, l = o;
  else {
    const c = t.getBoundingClientRect();
    a = n.clientX - c.left, l = n.clientY - c.top, r = !0;
  }
  return {
    x: a,
    y: l,
    box: r
  };
}
function At(i, t) {
  if ("native" in i)
    return i;
  const { canvas: e, currentDevicePixelRatio: n } = t, s = qe(e), o = s.boxSizing === "border-box", r = Ot(s, "padding"), a = Ot(s, "border", "width"), { x: l, y: c, box: h } = Gr(i, e), d = r.left + (h && a.left), f = r.top + (h && a.top);
  let { width: u, height: g } = t;
  return o && (u -= r.width + a.width, g -= r.height + a.height), {
    x: Math.round((l - d) / u * e.width / n),
    y: Math.round((c - f) / g * e.height / n)
  };
}
function Jr(i, t, e) {
  let n, s;
  if (t === void 0 || e === void 0) {
    const o = Di(i);
    if (!o)
      t = i.clientWidth, e = i.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = qe(o), l = Ot(a, "border", "width"), c = Ot(a, "padding");
      t = r.width - c.width - l.width, e = r.height - c.height - l.height, n = He(a.maxWidth, o, "clientWidth"), s = He(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: n || je,
    maxHeight: s || je
  };
}
const _e = (i) => Math.round(i * 10) / 10;
function ta(i, t, e, n) {
  const s = qe(i), o = Ot(s, "margin"), r = He(s.maxWidth, i, "clientWidth") || je, a = He(s.maxHeight, i, "clientHeight") || je, l = Jr(i, t, e);
  let { width: c, height: h } = l;
  if (s.boxSizing === "content-box") {
    const f = Ot(s, "border", "width"), u = Ot(s, "padding");
    c -= u.width + f.width, h -= u.height + f.height;
  }
  return c = Math.max(0, c - o.width), h = Math.max(0, n ? c / n : h - o.height), c = _e(Math.min(c, r, l.maxWidth)), h = _e(Math.min(h, a, l.maxHeight)), c && !h && (h = _e(c / 2)), (t !== void 0 || e !== void 0) && n && l.height && h > l.height && (h = l.height, c = _e(Math.floor(h * n))), {
    width: c,
    height: h
  };
}
function nn(i, t, e) {
  const n = t || 1, s = Math.floor(i.height * n), o = Math.floor(i.width * n);
  i.height = Math.floor(i.height), i.width = Math.floor(i.width);
  const r = i.canvas;
  return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = `${i.height}px`, r.style.width = `${i.width}px`), i.currentDevicePixelRatio !== n || r.height !== s || r.width !== o ? (i.currentDevicePixelRatio = n, r.height = s, r.width = o, i.ctx.setTransform(n, 0, 0, n, 0, 0), !0) : !1;
}
const ea = function() {
  let i = !1;
  try {
    const t = {
      get passive() {
        return i = !0, !1;
      }
    };
    Ii() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return i;
}();
function sn(i, t) {
  const e = qr(i, t), n = e && e.match(/^(\d+)(\.\d+)?px$/);
  return n ? +n[1] : void 0;
}
const ia = function(i, t) {
  return {
    x(e) {
      return i + i + t - e;
    },
    setWidth(e) {
      t = e;
    },
    textAlign(e) {
      return e === "center" ? e : e === "right" ? "left" : "right";
    },
    xPlus(e, n) {
      return e - n;
    },
    leftForLtr(e, n) {
      return e - n;
    }
  };
}, na = function() {
  return {
    x(i) {
      return i;
    },
    setWidth(i) {
    },
    textAlign(i) {
      return i;
    },
    xPlus(i, t) {
      return i + t;
    },
    leftForLtr(i, t) {
      return i;
    }
  };
};
function Nt(i, t, e) {
  return i ? ia(t, e) : na();
}
function ks(i, t) {
  let e, n;
  (t === "ltr" || t === "rtl") && (e = i.canvas.style, n = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), i.prevTextDirection = n);
}
function Ms(i, t) {
  t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]));
}
/*!
 * Chart.js v4.4.2
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
class sa {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, e, n, s) {
    const o = e.listeners[s], r = e.duration;
    o.forEach((a) => a({
      chart: t,
      initial: e.initial,
      numSteps: r,
      currentStep: Math.min(n - e.start, r)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = us.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((n, s) => {
      if (!n.running || !n.items.length)
        return;
      const o = n.items;
      let r = o.length - 1, a = !1, l;
      for (; r >= 0; --r)
        l = o[r], l._active ? (l._total > n.duration && (n.duration = l._total), l.tick(t), a = !0) : (o[r] = o[o.length - 1], o.pop());
      a && (s.draw(), this._notify(s, n, t, "progress")), o.length || (n.running = !1, this._notify(s, n, t, "complete"), n.initial = !1), e += o.length;
    }), this._lastDate = t, e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let n = e.get(t);
    return n || (n = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, e.set(t, n)), n;
  }
  listen(t, e, n) {
    this._getAnims(t).listeners[e].push(n);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((n, s) => Math.max(n, s._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length)
      return;
    const n = e.items;
    let s = n.length - 1;
    for (; s >= 0; --s)
      n[s].cancel();
    e.items = [], this._notify(t, e, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var lt = /* @__PURE__ */ new sa();
const on = "transparent", oa = {
  boolean(i, t, e) {
    return e > 0.5 ? t : i;
  },
  color(i, t, e) {
    const n = Qi(i || on), s = n.valid && Qi(t || on);
    return s && s.valid ? s.mix(n, e).hexString() : t;
  },
  number(i, t, e) {
    return i + (t - i) * e;
  }
};
class ra {
  constructor(t, e, n, s) {
    const o = e[n];
    s = xe([
      t.to,
      s,
      o,
      t.from
    ]);
    const r = xe([
      t.from,
      o,
      s
    ]);
    this._active = !0, this._fn = t.fn || oa[t.type || typeof r], this._easing = ne[t.easing] || ne.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = n, this._from = r, this._to = s, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, n) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop], o = n - this._start, r = this._duration - o;
      this._start = n, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = xe([
        t.to,
        e,
        s,
        t.from
      ]), this._from = xe([
        t.from,
        s,
        e
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const e = t - this._start, n = this._duration, s = this._prop, o = this._from, r = this._loop, a = this._to;
    let l;
    if (this._active = o !== a && (r || e < n), !this._active) {
      this._target[s] = a, this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[s] = o;
      return;
    }
    l = e / n % 2, l = r && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[s] = this._fn(o, a, l);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, n) => {
      t.push({
        res: e,
        rej: n
      });
    });
  }
  _notify(t) {
    const e = t ? "res" : "rej", n = this._promises || [];
    for (let s = 0; s < n.length; s++)
      n[s][e]();
  }
}
class Ss {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!L(t))
      return;
    const e = Object.keys(B.animation), n = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const o = t[s];
      if (!L(o))
        return;
      const r = {};
      for (const a of e)
        r[a] = o[a];
      (N(o.properties) && o.properties || [
        s
      ]).forEach((a) => {
        (a === s || !n.has(a)) && n.set(a, r);
      });
    });
  }
  _animateOptions(t, e) {
    const n = e.options, s = la(t, n);
    if (!s)
      return [];
    const o = this._createAnimations(s, n);
    return n.$shared && aa(t.options.$animations, n).then(() => {
      t.options = n;
    }, () => {
    }), o;
  }
  _createAnimations(t, e) {
    const n = this._properties, s = [], o = t.$animations || (t.$animations = {}), r = Object.keys(e), a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        s.push(...this._animateOptions(t, e));
        continue;
      }
      const h = e[c];
      let d = o[c];
      const f = n.get(c);
      if (d)
        if (f && d.active()) {
          d.update(f, h, a);
          continue;
        } else
          d.cancel();
      if (!f || !f.duration) {
        t[c] = h;
        continue;
      }
      o[c] = d = new ra(f, t, c, h), s.push(d);
    }
    return s;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const n = this._createAnimations(t, e);
    if (n.length)
      return lt.add(this._chart, n), !0;
  }
}
function aa(i, t) {
  const e = [], n = Object.keys(t);
  for (let s = 0; s < n.length; s++) {
    const o = i[n[s]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function la(i, t) {
  if (!t)
    return;
  let e = i.options;
  if (!e) {
    i.options = t;
    return;
  }
  return e.$shared && (i.options = e = Object.assign({}, e, {
    $shared: !1,
    $animations: {}
  })), e;
}
function rn(i, t) {
  const e = i && i.options || {}, n = e.reverse, s = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: n ? o : s,
    end: n ? s : o
  };
}
function ca(i, t, e) {
  if (e === !1)
    return !1;
  const n = rn(i, e), s = rn(t, e);
  return {
    top: s.end,
    right: n.end,
    bottom: s.start,
    left: n.start
  };
}
function ha(i) {
  let t, e, n, s;
  return L(i) ? (t = i.top, e = i.right, n = i.bottom, s = i.left) : t = e = n = s = i, {
    top: t,
    right: e,
    bottom: n,
    left: s,
    disabled: i === !1
  };
}
function Cs(i, t) {
  const e = [], n = i._getSortedDatasetMetas(t);
  let s, o;
  for (s = 0, o = n.length; s < o; ++s)
    e.push(n[s].index);
  return e;
}
function an(i, t, e, n = {}) {
  const s = i.keys, o = n.mode === "single";
  let r, a, l, c;
  if (t !== null) {
    for (r = 0, a = s.length; r < a; ++r) {
      if (l = +s[r], l === e) {
        if (n.all)
          continue;
        break;
      }
      c = i.values[l], $(c) && (o || t === 0 || Ee(t) === Ee(c)) && (t += c);
    }
    return t;
  }
}
function da(i) {
  const t = Object.keys(i), e = new Array(t.length);
  let n, s, o;
  for (n = 0, s = t.length; n < s; ++n)
    o = t[n], e[n] = {
      x: o,
      y: i[o]
    };
  return e;
}
function ln(i, t) {
  const e = i && i.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function fa(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function ua(i) {
  const { min: t, max: e, minDefined: n, maxDefined: s } = i.getUserBounds();
  return {
    min: n ? t : Number.NEGATIVE_INFINITY,
    max: s ? e : Number.POSITIVE_INFINITY
  };
}
function ga(i, t, e) {
  const n = i[t] || (i[t] = {});
  return n[e] || (n[e] = {});
}
function cn(i, t, e, n) {
  for (const s of t.getMatchingVisibleMetas(n).reverse()) {
    const o = i[s.index];
    if (e && o > 0 || !e && o < 0)
      return s.index;
  }
  return null;
}
function hn(i, t) {
  const { chart: e, _cachedMeta: n } = i, s = e._stacks || (e._stacks = {}), { iScale: o, vScale: r, index: a } = n, l = o.axis, c = r.axis, h = fa(o, r, n), d = t.length;
  let f;
  for (let u = 0; u < d; ++u) {
    const g = t[u], { [l]: m, [c]: p } = g, b = g._stacks || (g._stacks = {});
    f = b[c] = ga(s, h, m), f[a] = p, f._top = cn(f, r, !0, n.type), f._bottom = cn(f, r, !1, n.type);
    const x = f._visualValues || (f._visualValues = {});
    x[a] = p;
  }
}
function ii(i, t) {
  const e = i.scales;
  return Object.keys(e).filter((n) => e[n].axis === t).shift();
}
function pa(i, t) {
  return Lt(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function ma(i, t, e) {
  return Lt(i, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: "default",
    type: "data"
  });
}
function Yt(i, t) {
  const e = i.controller.index, n = i.vScale && i.vScale.axis;
  if (n) {
    t = t || i._parsed;
    for (const s of t) {
      const o = s._stacks;
      if (!o || o[n] === void 0 || o[n][e] === void 0)
        return;
      delete o[n][e], o[n]._visualValues !== void 0 && o[n]._visualValues[e] !== void 0 && delete o[n]._visualValues[e];
    }
  }
}
const ni = (i) => i === "reset" || i === "none", dn = (i, t) => t ? i : Object.assign({}, i), ba = (i, t, e) => i && !t.hidden && t._stacked && {
  keys: Cs(e, !0),
  values: null
};
class oe {
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = ln(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Yt(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, n = this.getDataset(), s = (d, f, u, g) => d === "x" ? f : d === "r" ? g : u, o = e.xAxisID = I(n.xAxisID, ii(t, "x")), r = e.yAxisID = I(n.yAxisID, ii(t, "y")), a = e.rAxisID = I(n.rAxisID, ii(t, "r")), l = e.indexAxis, c = e.iAxisID = s(l, o, r, a), h = e.vAxisID = s(l, r, o, a);
    e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(r), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(h);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && Xi(this._data, this), t._stacked && Yt(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), n = this._data;
    if (L(e))
      this._data = da(e);
    else if (n !== e) {
      if (n) {
        Xi(n, this);
        const s = this._cachedMeta;
        Yt(s), s._parsed = [];
      }
      e && Object.isExtensible(e) && br(e, this), this._syncList = [], this._data = e;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta, n = this.getDataset();
    let s = !1;
    this._dataCheck();
    const o = e._stacked;
    e._stacked = ln(e.vScale, e), e.stack !== n.stack && (s = !0, Yt(e), e.stack = n.stack), this._resyncElements(t), (s || o !== e._stacked) && hn(this, e._parsed);
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), n = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(n, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const { _cachedMeta: n, _data: s } = this, { iScale: o, _stacked: r } = n, a = o.axis;
    let l = t === 0 && e === s.length ? !0 : n._sorted, c = t > 0 && n._parsed[t - 1], h, d, f;
    if (this._parsing === !1)
      n._parsed = s, n._sorted = !0, f = s;
    else {
      N(s[t]) ? f = this.parseArrayData(n, s, t, e) : L(s[t]) ? f = this.parseObjectData(n, s, t, e) : f = this.parsePrimitiveData(n, s, t, e);
      const u = () => d[a] === null || c && d[a] < c[a];
      for (h = 0; h < e; ++h)
        n._parsed[h + t] = d = f[h], l && (u() && (l = !1), c = d);
      n._sorted = l;
    }
    r && hn(this, f);
  }
  parsePrimitiveData(t, e, n, s) {
    const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), h = o === r, d = new Array(s);
    let f, u, g;
    for (f = 0, u = s; f < u; ++f)
      g = f + n, d[f] = {
        [a]: h || o.parse(c[g], g),
        [l]: r.parse(e[g], g)
      };
    return d;
  }
  parseArrayData(t, e, n, s) {
    const { xScale: o, yScale: r } = t, a = new Array(s);
    let l, c, h, d;
    for (l = 0, c = s; l < c; ++l)
      h = l + n, d = e[h], a[l] = {
        x: o.parse(d[0], h),
        y: r.parse(d[1], h)
      };
    return a;
  }
  parseObjectData(t, e, n, s) {
    const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(s);
    let h, d, f, u;
    for (h = 0, d = s; h < d; ++h)
      f = h + n, u = e[f], c[h] = {
        x: o.parse(le(u, a), f),
        y: r.parse(le(u, l), f)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, n) {
    const s = this.chart, o = this._cachedMeta, r = e[t.axis], a = {
      keys: Cs(s, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return an(a, r, o.index, {
      mode: n
    });
  }
  updateRangeFromParsed(t, e, n, s) {
    const o = n[e.axis];
    let r = o === null ? NaN : o;
    const a = s && n._stacks[e.axis];
    s && a && (s.values = a, r = an(s, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, e) {
    const n = this._cachedMeta, s = n._parsed, o = n._sorted && t === n.iScale, r = s.length, a = this._getOtherScale(t), l = ba(e, n, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: h, max: d } = ua(a);
    let f, u;
    function g() {
      u = s[f];
      const m = u[a.axis];
      return !$(u[t.axis]) || h > m || d < m;
    }
    for (f = 0; f < r && !(!g() && (this.updateRangeFromParsed(c, t, u, l), o)); ++f)
      ;
    if (o) {
      for (f = r - 1; f >= 0; --f)
        if (!g()) {
          this.updateRangeFromParsed(c, t, u, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed, n = [];
    let s, o, r;
    for (s = 0, o = e.length; s < o; ++s)
      r = e[s][t.axis], $(r) && n.push(r);
    return n;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, n = e.iScale, s = e.vScale, o = this.getParsed(t);
    return {
      label: n ? "" + n.getLabelForValue(o[n.axis]) : "",
      value: s ? "" + s.getLabelForValue(o[s.axis]) : ""
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || "default"), e._clip = ha(I(this.options.clip, ca(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, n = this._cachedMeta, s = n.data || [], o = e.chartArea, r = [], a = this._drawStart || 0, l = this._drawCount || s.length - a, c = this.options.drawActiveElementsOnTop;
    let h;
    for (n.dataset && n.dataset.draw(t, o, a, l), h = a; h < a + l; ++h) {
      const d = s[h];
      d.hidden || (d.active && c ? r.push(d) : d.draw(t, o));
    }
    for (h = 0; h < r.length; ++h)
      r[h].draw(t, o);
  }
  getStyle(t, e) {
    const n = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(n) : this.resolveDataElementOptions(t || 0, n);
  }
  getContext(t, e, n) {
    const s = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      o = r.$context || (r.$context = ma(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = s.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = pa(this.chart.getContext(), this.index)), o.dataset = s, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = n, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", n) {
    const s = e === "active", o = this._cachedDataOpts, r = t + "-" + e, a = o[r], l = this.enableOptionSharing && Fe(n);
    if (a)
      return dn(a, l);
    const c = this.chart.config, h = c.datasetElementScopeKeys(this._type, t), d = s ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], f = c.getOptionScopes(this.getDataset(), h), u = Object.keys(B.elements[t]), g = () => this.getContext(n, s, e), m = c.resolveNamedOptions(f, u, g, d);
    return m.$shared && (m.$shared = l, o[r] = Object.freeze(dn(m, l))), m;
  }
  _resolveAnimations(t, e, n) {
    const s = this.chart, o = this._cachedDataOpts, r = `animation-${e}`, a = o[r];
    if (a)
      return a;
    let l;
    if (s.options.animation !== !1) {
      const h = this.chart.config, d = h.datasetAnimationScopeKeys(this._type, e), f = h.getOptionScopes(this.getDataset(), d);
      l = h.createResolver(f, this.getContext(t, n, e));
    }
    const c = new Ss(s, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || ni(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const n = this.resolveDataElementOptions(t, e), s = this._sharedOptions, o = this.getSharedOptions(n), r = this.includeOptions(e, o) || o !== s;
    return this.updateSharedOptions(o, e, n), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, e, n, s) {
    ni(s) ? Object.assign(t, n) : this._resolveAnimations(e, s).update(t, n);
  }
  updateSharedOptions(t, e, n) {
    t && !ni(e) && this._resolveAnimations(void 0, e).update(t, n);
  }
  _setStyle(t, e, n, s) {
    t.active = s;
    const o = this.getStyle(e, s);
    this._resolveAnimations(e, n, s).update(t, {
      options: !s && this.getSharedOptions(o) || o
    });
  }
  removeHoverStyle(t, e, n) {
    this._setStyle(t, n, "active", !1);
  }
  setHoverStyle(t, e, n) {
    this._setStyle(t, n, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const e = this._data, n = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList)
      this[a](l, c);
    this._syncList = [];
    const s = n.length, o = e.length, r = Math.min(o, s);
    r && this.parse(0, r), o > s ? this._insertElements(s, o - s, t) : o < s && this._removeElements(o, s - o);
  }
  _insertElements(t, e, n = !0) {
    const s = this._cachedMeta, o = s.data, r = t + e;
    let a;
    const l = (c) => {
      for (c.length += e, a = c.length - 1; a >= r; a--)
        c[a] = c[a - e];
    };
    for (l(o), a = t; a < r; ++a)
      o[a] = new this.dataElementType();
    this._parsing && l(s._parsed), this.parse(t, e), n && this.updateElements(o, t, e, "reset");
  }
  updateElements(t, e, n, s) {
  }
  _removeElements(t, e) {
    const n = this._cachedMeta;
    if (this._parsing) {
      const s = n._parsed.splice(t, e);
      n._stacked && Yt(n, s);
    }
    n.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [e, n, s] = t;
      this[e](n, s);
    }
    this.chart._dataChanges.push([
      this.index,
      ...t
    ]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - t,
      t
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(t, e) {
    e && this._sync([
      "_removeElements",
      t,
      e
    ]);
    const n = arguments.length - 2;
    n && this._sync([
      "_insertElements",
      t,
      n
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
}
A(oe, "defaults", {}), A(oe, "datasetElementType", null), A(oe, "dataElementType", null);
function xa(i, t, e) {
  let n = 1, s = 1, o = 0, r = 0;
  if (t < z) {
    const a = i, l = a + t, c = Math.cos(a), h = Math.sin(a), d = Math.cos(l), f = Math.sin(l), u = (w, v, y) => ze(w, a, l, !0) ? 1 : Math.max(v, v * e, y, y * e), g = (w, v, y) => ze(w, a, l, !0) ? -1 : Math.min(v, v * e, y, y * e), m = u(0, c, d), p = u(V, h, f), b = g(U, c, d), x = g(U + V, h, f);
    n = (m - b) / 2, s = (p - x) / 2, o = -(m + b) / 2, r = -(p + x) / 2;
  }
  return {
    ratioX: n,
    ratioY: s,
    offsetX: o,
    offsetY: r
  };
}
class Zt extends oe {
  constructor(t, e) {
    super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(t, e) {
    const n = this.getDataset().data, s = this._cachedMeta;
    if (this._parsing === !1)
      s._parsed = n;
    else {
      let o = (l) => +n[l];
      if (L(n[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +le(n[c], l);
      }
      let r, a;
      for (r = t, a = t + e; r < a; ++r)
        s._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return rt(this.options.rotation - 90);
  }
  _getCircumference() {
    return rt(this.options.circumference);
  }
  _getRotationExtents() {
    let t = z, e = -z;
    for (let n = 0; n < this.chart.data.datasets.length; ++n)
      if (this.chart.isDatasetVisible(n) && this.chart.getDatasetMeta(n).type === this._type) {
        const s = this.chart.getDatasetMeta(n).controller, o = s._getRotation(), r = s._getCircumference();
        t = Math.min(t, o), e = Math.max(e, o + r);
      }
    return {
      rotation: t,
      circumference: e - t
    };
  }
  update(t) {
    const e = this.chart, { chartArea: n } = e, s = this._cachedMeta, o = s.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(n.width, n.height) - r) / 2, 0), l = Math.min(sr(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: h, rotation: d } = this._getRotationExtents(), { ratioX: f, ratioY: u, offsetX: g, offsetY: m } = xa(d, h, l), p = (n.width - r) / f, b = (n.height - r) / u, x = Math.max(Math.min(p, b) / 2, 0), w = ls(this.options.radius, x), v = Math.max(w * l, 0), y = (w - v) / this._getVisibleDatasetWeightTotal();
    this.offsetX = g * w, this.offsetY = m * w, s.total = this.calculateTotal(), this.outerRadius = w - y * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - y * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const n = this.options, s = this._cachedMeta, o = this._getCircumference();
    return e && n.animation.animateRotate || !this.chart.getDataVisibility(t) || s._parsed[t] === null || s.data[t].hidden ? 0 : this.calculateCircumference(s._parsed[t] * o / z);
  }
  updateElements(t, e, n, s) {
    const o = s === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, h = (a.left + a.right) / 2, d = (a.top + a.bottom) / 2, f = o && c.animateScale, u = f ? 0 : this.innerRadius, g = f ? 0 : this.outerRadius, { sharedOptions: m, includeOptions: p } = this._getSharedOptions(e, s);
    let b = this._getRotation(), x;
    for (x = 0; x < e; ++x)
      b += this._circumference(x, o);
    for (x = e; x < e + n; ++x) {
      const w = this._circumference(x, o), v = t[x], y = {
        x: h + this.offsetX,
        y: d + this.offsetY,
        startAngle: b,
        endAngle: b + w,
        circumference: w,
        outerRadius: g,
        innerRadius: u
      };
      p && (y.options = m || this.resolveDataElementOptions(x, v.active ? "active" : s)), b += w, this.updateElement(v, x, y, s);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta, e = t.data;
    let n = 0, s;
    for (s = 0; s < e.length; s++) {
      const o = t._parsed[s];
      o !== null && !isNaN(o) && this.chart.getDataVisibility(s) && !e[s].hidden && (n += Math.abs(o));
    }
    return n;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? z * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, n = this.chart, s = n.data.labels || [], o = Xe(e._parsed[t], n.options.locale);
    return {
      label: s[t] || "",
      value: o
    };
  }
  getMaxBorderWidth(t) {
    let e = 0;
    const n = this.chart;
    let s, o, r, a, l;
    if (!t) {
      for (s = 0, o = n.data.datasets.length; s < o; ++s)
        if (n.isDatasetVisible(s)) {
          r = n.getDatasetMeta(s), t = r.data, a = r.controller;
          break;
        }
    }
    if (!t)
      return 0;
    for (s = 0, o = t.length; s < o; ++s)
      l = a.resolveDataElementOptions(s), l.borderAlign !== "inner" && (e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let n = 0, s = t.length; n < s; ++n) {
      const o = this.resolveDataElementOptions(n);
      e = Math.max(e, o.offset || 0, o.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let n = 0; n < t; ++n)
      this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(I(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
A(Zt, "id", "doughnut"), A(Zt, "defaults", {
  datasetElementType: !1,
  dataElementType: "arc",
  animation: {
    animateRotate: !0,
    animateScale: !1
  },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "circumference",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "startAngle",
        "x",
        "y",
        "offset",
        "borderWidth",
        "spacing"
      ]
    }
  },
  cutout: "50%",
  rotation: 0,
  circumference: 360,
  radius: "100%",
  spacing: 0,
  indexAxis: "r"
}), A(Zt, "descriptors", {
  _scriptable: (t) => t !== "spacing",
  _indexable: (t) => t !== "spacing" && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
}), A(Zt, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(t) {
          const e = t.data;
          if (e.labels.length && e.datasets.length) {
            const { labels: { pointStyle: n, color: s } } = t.legend.options;
            return e.labels.map((o, r) => {
              const l = t.getDatasetMeta(0).controller.getStyle(r);
              return {
                text: o,
                fillStyle: l.backgroundColor,
                strokeStyle: l.borderColor,
                fontColor: s,
                lineWidth: l.borderWidth,
                pointStyle: n,
                hidden: !t.getDataVisibility(r),
                index: r
              };
            });
          }
          return [];
        }
      },
      onClick(t, e, n) {
        n.chart.toggleDataVisibility(e.index), n.chart.update();
      }
    }
  }
});
class fi extends Zt {
}
A(fi, "id", "pie"), A(fi, "defaults", {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: "100%"
});
function St() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class Fi {
  constructor(t) {
    A(this, "options");
    this.options = t || {};
  }
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  static override(t) {
    Object.assign(Fi.prototype, t);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return St();
  }
  parse() {
    return St();
  }
  format() {
    return St();
  }
  add() {
    return St();
  }
  diff() {
    return St();
  }
  startOf() {
    return St();
  }
  endOf() {
    return St();
  }
}
var _a = {
  _date: Fi
};
function ya(i, t, e, n) {
  const { controller: s, data: o, _sorted: r } = i, a = s._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const l = a._reversePixels ? pr : hi;
    if (n) {
      if (s._sharedOptions) {
        const c = o[0], h = typeof c.getRange == "function" && c.getRange(t);
        if (h) {
          const d = l(o, t, e - h), f = l(o, t, e + h);
          return {
            lo: d.lo,
            hi: f.hi
          };
        }
      }
    } else
      return l(o, t, e);
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function fe(i, t, e, n, s) {
  const o = i.getSortedVisibleDatasetMetas(), r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: h } = o[a], { lo: d, hi: f } = ya(o[a], t, r, s);
    for (let u = d; u <= f; ++u) {
      const g = h[u];
      g.skip || n(g, c, u);
    }
  }
}
function wa(i) {
  const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
  return function(n, s) {
    const o = t ? Math.abs(n.x - s.x) : 0, r = e ? Math.abs(n.y - s.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function si(i, t, e, n, s) {
  const o = [];
  return !s && !i.isPointInArea(t) || fe(i, e, t, function(a, l, c) {
    !s && !jt(a, i.chartArea, 0) || a.inRange(t.x, t.y, n) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function va(i, t, e, n) {
  let s = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: h } = r.getProps([
      "startAngle",
      "endAngle"
    ], n), { angle: d } = ds(r, {
      x: t.x,
      y: t.y
    });
    ze(d, c, h) && s.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return fe(i, e, t, o), s;
}
function ka(i, t, e, n, s, o) {
  let r = [];
  const a = wa(e);
  let l = Number.POSITIVE_INFINITY;
  function c(h, d, f) {
    const u = h.inRange(t.x, t.y, s);
    if (n && !u)
      return;
    const g = h.getCenterPoint(s);
    if (!(!!o || i.isPointInArea(g)) && !u)
      return;
    const p = a(t, g);
    p < l ? (r = [
      {
        element: h,
        datasetIndex: d,
        index: f
      }
    ], l = p) : p === l && r.push({
      element: h,
      datasetIndex: d,
      index: f
    });
  }
  return fe(i, e, t, c), r;
}
function oi(i, t, e, n, s, o) {
  return !o && !i.isPointInArea(t) ? [] : e === "r" && !n ? va(i, t, e, s) : ka(i, t, e, n, s, o);
}
function fn(i, t, e, n, s) {
  const o = [], r = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return fe(i, e, t, (l, c, h) => {
    l[r](t[e], s) && (o.push({
      element: l,
      datasetIndex: c,
      index: h
    }), a = a || l.inRange(t.x, t.y, s));
  }), n && !a ? [] : o;
}
var Ma = {
  evaluateInteractionItems: fe,
  modes: {
    index(i, t, e, n) {
      const s = At(t, i), o = e.axis || "x", r = e.includeInvisible || !1, a = e.intersect ? si(i, s, o, n, r) : oi(i, s, o, !1, n, r), l = [];
      return a.length ? (i.getSortedVisibleDatasetMetas().forEach((c) => {
        const h = a[0].index, d = c.data[h];
        d && !d.skip && l.push({
          element: d,
          datasetIndex: c.index,
          index: h
        });
      }), l) : [];
    },
    dataset(i, t, e, n) {
      const s = At(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      let a = e.intersect ? si(i, s, o, n, r) : oi(i, s, o, !1, n, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex, c = i.getDatasetMeta(l).data;
        a = [];
        for (let h = 0; h < c.length; ++h)
          a.push({
            element: c[h],
            datasetIndex: l,
            index: h
          });
      }
      return a;
    },
    point(i, t, e, n) {
      const s = At(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return si(i, s, o, n, r);
    },
    nearest(i, t, e, n) {
      const s = At(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return oi(i, s, o, e.intersect, n, r);
    },
    x(i, t, e, n) {
      const s = At(t, i);
      return fn(i, s, "x", e.intersect, n);
    },
    y(i, t, e, n) {
      const s = At(t, i);
      return fn(i, s, "y", e.intersect, n);
    }
  }
};
const As = [
  "left",
  "top",
  "right",
  "bottom"
];
function Ut(i, t) {
  return i.filter((e) => e.pos === t);
}
function un(i, t) {
  return i.filter((e) => As.indexOf(e.pos) === -1 && e.box.axis === t);
}
function $t(i, t) {
  return i.sort((e, n) => {
    const s = t ? n : e, o = t ? e : n;
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
  });
}
function Sa(i) {
  const t = [];
  let e, n, s, o, r, a;
  for (e = 0, n = (i || []).length; e < n; ++e)
    s = i[e], { position: o, options: { stack: r, stackWeight: a = 1 } } = s, t.push({
      index: e,
      box: s,
      pos: o,
      horizontal: s.isHorizontal(),
      weight: s.weight,
      stack: r && o + r,
      stackWeight: a
    });
  return t;
}
function Ca(i) {
  const t = {};
  for (const e of i) {
    const { stack: n, pos: s, stackWeight: o } = e;
    if (!n || !As.includes(s))
      continue;
    const r = t[n] || (t[n] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    r.count++, r.weight += o;
  }
  return t;
}
function Aa(i, t) {
  const e = Ca(i), { vBoxMaxWidth: n, hBoxMaxHeight: s } = t;
  let o, r, a;
  for (o = 0, r = i.length; o < r; ++o) {
    a = i[o];
    const { fullSize: l } = a.box, c = e[a.stack], h = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = h ? h * n : l && t.availableWidth, a.height = s) : (a.width = n, a.height = h ? h * s : l && t.availableHeight);
  }
  return e;
}
function Oa(i) {
  const t = Sa(i), e = $t(t.filter((c) => c.box.fullSize), !0), n = $t(Ut(t, "left"), !0), s = $t(Ut(t, "right")), o = $t(Ut(t, "top"), !0), r = $t(Ut(t, "bottom")), a = un(t, "x"), l = un(t, "y");
  return {
    fullSize: e,
    leftAndTop: n.concat(o),
    rightAndBottom: s.concat(l).concat(r).concat(a),
    chartArea: Ut(t, "chartArea"),
    vertical: n.concat(s).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function gn(i, t, e, n) {
  return Math.max(i[e], t[e]) + Math.max(i[n], t[n]);
}
function Os(i, t) {
  i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
}
function Pa(i, t, e, n) {
  const { pos: s, box: o } = e, r = i.maxPadding;
  if (!L(s)) {
    e.size && (i[s] -= e.size);
    const d = n[e.stack] || {
      size: 0,
      count: 1
    };
    d.size = Math.max(d.size, e.horizontal ? o.height : o.width), e.size = d.size / d.count, i[s] += e.size;
  }
  o.getPadding && Os(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - gn(r, i, "left", "right")), l = Math.max(0, t.outerHeight - gn(r, i, "top", "bottom")), c = a !== i.w, h = l !== i.h;
  return i.w = a, i.h = l, e.horizontal ? {
    same: c,
    other: h
  } : {
    same: h,
    other: c
  };
}
function Ta(i) {
  const t = i.maxPadding;
  function e(n) {
    const s = Math.max(t[n] - i[n], 0);
    return i[n] += s, s;
  }
  i.y += e("top"), i.x += e("left"), e("right"), e("bottom");
}
function La(i, t) {
  const e = t.maxPadding;
  function n(s) {
    const o = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return s.forEach((r) => {
      o[r] = Math.max(t[r], e[r]);
    }), o;
  }
  return n(i ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function Gt(i, t, e, n) {
  const s = [];
  let o, r, a, l, c, h;
  for (o = 0, r = i.length, c = 0; o < r; ++o) {
    a = i[o], l = a.box, l.update(a.width || t.w, a.height || t.h, La(a.horizontal, t));
    const { same: d, other: f } = Pa(t, e, a, n);
    c |= d && s.length, h = h || f, l.fullSize || s.push(a);
  }
  return c && Gt(s, t, e, n) || h;
}
function ye(i, t, e, n, s) {
  i.top = e, i.left = t, i.right = t + n, i.bottom = e + s, i.width = n, i.height = s;
}
function pn(i, t, e, n) {
  const s = e.padding;
  let { x: o, y: r } = t;
  for (const a of i) {
    const l = a.box, c = n[a.stack] || {
      count: 1,
      placed: 0,
      weight: 1
    }, h = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const d = t.w * h, f = c.size || l.height;
      Fe(c.start) && (r = c.start), l.fullSize ? ye(l, s.left, r, e.outerWidth - s.right - s.left, f) : ye(l, t.left + c.placed, r, d, f), c.start = r, c.placed += d, r = l.bottom;
    } else {
      const d = t.h * h, f = c.size || l.width;
      Fe(c.start) && (o = c.start), l.fullSize ? ye(l, o, s.top, f, e.outerHeight - s.bottom - s.top) : ye(l, o, t.top + c.placed, f, d), c.start = o, c.placed += d, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var xt = {
  addBox(i, t) {
    i.boxes || (i.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(e) {
            t.draw(e);
          }
        }
      ];
    }, i.boxes.push(t);
  },
  removeBox(i, t) {
    const e = i.boxes ? i.boxes.indexOf(t) : -1;
    e !== -1 && i.boxes.splice(e, 1);
  },
  configure(i, t, e) {
    t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight;
  },
  update(i, t, e, n) {
    if (!i)
      return;
    const s = q(i.options.layout.padding), o = Math.max(t - s.width, 0), r = Math.max(e - s.height, 0), a = Oa(i.boxes), l = a.vertical, c = a.horizontal;
    D(i.boxes, (m) => {
      typeof m.beforeLayout == "function" && m.beforeLayout();
    });
    const h = l.reduce((m, p) => p.box.options && p.box.options.display === !1 ? m : m + 1, 0) || 1, d = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: s,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / h,
      hBoxMaxHeight: r / 2
    }), f = Object.assign({}, s);
    Os(f, q(n));
    const u = Object.assign({
      maxPadding: f,
      w: o,
      h: r,
      x: s.left,
      y: s.top
    }, s), g = Aa(l.concat(c), d);
    Gt(a.fullSize, u, d, g), Gt(l, u, d, g), Gt(c, u, d, g) && Gt(l, u, d, g), Ta(u), pn(a.leftAndTop, u, d, g), u.x += u.w, u.y += u.h, pn(a.rightAndBottom, u, d, g), i.chartArea = {
      left: u.left,
      top: u.top,
      right: u.left + u.w,
      bottom: u.top + u.h,
      height: u.h,
      width: u.w
    }, D(a.chartArea, (m) => {
      const p = m.box;
      Object.assign(p, i.chartArea), p.update(u.w, u.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class Ps {
  acquireContext(t, e) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, n) {
  }
  removeEventListener(t, e, n) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, n, s) {
    return e = Math.max(0, e || t.width), n = n || t.height, {
      width: e,
      height: Math.max(0, s ? Math.floor(e / s) : n)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class Ra extends Ps {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Pe = "$chartjs", Ia = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, mn = (i) => i === null || i === "";
function Da(i, t) {
  const e = i.style, n = i.getAttribute("height"), s = i.getAttribute("width");
  if (i[Pe] = {
    initial: {
      height: n,
      width: s,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", mn(s)) {
    const o = sn(i, "width");
    o !== void 0 && (i.width = o);
  }
  if (mn(n))
    if (i.style.height === "")
      i.height = i.width / (t || 2);
    else {
      const o = sn(i, "height");
      o !== void 0 && (i.height = o);
    }
  return i;
}
const Ts = ea ? {
  passive: !0
} : !1;
function Fa(i, t, e) {
  i && i.addEventListener(t, e, Ts);
}
function ja(i, t, e) {
  i && i.canvas && i.canvas.removeEventListener(t, e, Ts);
}
function Ea(i, t) {
  const e = Ia[i.type] || i.type, { x: n, y: s } = At(i, t);
  return {
    type: e,
    chart: t,
    native: i,
    x: n !== void 0 ? n : null,
    y: s !== void 0 ? s : null
  };
}
function Ve(i, t) {
  for (const e of i)
    if (e === t || e.contains(t))
      return !0;
}
function Na(i, t, e) {
  const n = i.canvas, s = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Ve(a.addedNodes, n), r = r && !Ve(a.removedNodes, n);
    r && e();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
function za(i, t, e) {
  const n = i.canvas, s = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Ve(a.removedNodes, n), r = r && !Ve(a.addedNodes, n);
    r && e();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
const ce = /* @__PURE__ */ new Map();
let bn = 0;
function Ls() {
  const i = window.devicePixelRatio;
  i !== bn && (bn = i, ce.forEach((t, e) => {
    e.currentDevicePixelRatio !== i && t();
  }));
}
function Ba(i, t) {
  ce.size || window.addEventListener("resize", Ls), ce.set(i, t);
}
function Wa(i) {
  ce.delete(i), ce.size || window.removeEventListener("resize", Ls);
}
function Ha(i, t, e) {
  const n = i.canvas, s = n && Di(n);
  if (!s)
    return;
  const o = gs((a, l) => {
    const c = s.clientWidth;
    e(a, l), c < s.clientWidth && e();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, h = l.contentRect.height;
    c === 0 && h === 0 || o(c, h);
  });
  return r.observe(s), Ba(i, o), r;
}
function ri(i, t, e) {
  e && e.disconnect(), t === "resize" && Wa(i);
}
function Va(i, t, e) {
  const n = i.canvas, s = gs((o) => {
    i.ctx !== null && e(Ea(o, i));
  }, i);
  return Fa(n, t, s), s;
}
class Ya extends Ps {
  acquireContext(t, e) {
    const n = t && t.getContext && t.getContext("2d");
    return n && n.canvas === t ? (Da(t, e), n) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[Pe])
      return !1;
    const n = e[Pe].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = n[o];
      E(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const s = n.style || {};
    return Object.keys(s).forEach((o) => {
      e.style[o] = s[o];
    }), e.width = e.width, delete e[Pe], !0;
  }
  addEventListener(t, e, n) {
    this.removeEventListener(t, e);
    const s = t.$proxies || (t.$proxies = {}), r = {
      attach: Na,
      detach: za,
      resize: Ha
    }[e] || Va;
    s[e] = r(t, e, n);
  }
  removeEventListener(t, e) {
    const n = t.$proxies || (t.$proxies = {}), s = n[e];
    if (!s)
      return;
    ({
      attach: ri,
      detach: ri,
      resize: ri
    }[e] || ja)(t, e, s), n[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, n, s) {
    return ta(t, e, n, s);
  }
  isAttached(t) {
    const e = Di(t);
    return !!(e && e.isConnected);
  }
}
function Ua(i) {
  return !Ii() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? Ra : Ya;
}
class Tt {
  constructor() {
    A(this, "x");
    A(this, "y");
    A(this, "active", !1);
    A(this, "options");
    A(this, "$animations");
  }
  tooltipPosition(t) {
    const { x: e, y: n } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: n
    };
  }
  hasValue() {
    return Ne(this.x) && Ne(this.y);
  }
  getProps(t, e) {
    const n = this.$animations;
    if (!e || !n)
      return this;
    const s = {};
    return t.forEach((o) => {
      s[o] = n[o] && n[o].active() ? n[o]._to : this[o];
    }), s;
  }
}
A(Tt, "defaults", {}), A(Tt, "defaultRoutes");
function $a(i, t) {
  const e = i.options.ticks, n = Xa(i), s = Math.min(e.maxTicksLimit || n, n), o = e.major.enabled ? qa(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > s)
    return Qa(t, c, o, r / s), c;
  const h = Ka(o, t, s);
  if (r > 0) {
    let d, f;
    const u = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (we(t, c, h, E(u) ? 0 : a - u, a), d = 0, f = r - 1; d < f; d++)
      we(t, c, h, o[d], o[d + 1]);
    return we(t, c, h, l, E(u) ? t.length : l + u), c;
  }
  return we(t, c, h), c;
}
function Xa(i) {
  const t = i.options.offset, e = i._tickSize(), n = i._length / e + (t ? 0 : 1), s = i._maxLength / e;
  return Math.floor(Math.min(n, s));
}
function Ka(i, t, e) {
  const n = Za(i), s = t.length / e;
  if (!n)
    return Math.max(s, 1);
  const o = dr(n);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > s)
      return l;
  }
  return Math.max(s, 1);
}
function qa(i) {
  const t = [];
  let e, n;
  for (e = 0, n = i.length; e < n; e++)
    i[e].major && t.push(e);
  return t;
}
function Qa(i, t, e, n) {
  let s = 0, o = e[0], r;
  for (n = Math.ceil(n), r = 0; r < i.length; r++)
    r === o && (t.push(i[r]), s++, o = e[s * n]);
}
function we(i, t, e, n, s) {
  const o = I(n, 0), r = Math.min(I(s, i.length), i.length);
  let a = 0, l, c, h;
  for (e = Math.ceil(e), s && (l = s - n, e = l / Math.floor(l / e)), h = o; h < 0; )
    a++, h = Math.round(o + a * e);
  for (c = Math.max(o, 0); c < r; c++)
    c === h && (t.push(i[c]), a++, h = Math.round(o + a * e));
}
function Za(i) {
  const t = i.length;
  let e, n;
  if (t < 2)
    return !1;
  for (n = i[0], e = 1; e < t; ++e)
    if (i[e] - i[e - 1] !== n)
      return !1;
  return n;
}
const Ga = (i) => i === "left" ? "right" : i === "right" ? "left" : i, xn = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e, _n = (i, t) => Math.min(t || i, i);
function yn(i, t) {
  const e = [], n = i.length / t, s = i.length;
  let o = 0;
  for (; o < s; o += n)
    e.push(i[Math.floor(o)]);
  return e;
}
function Ja(i, t, e) {
  const n = i.ticks.length, s = Math.min(t, n - 1), o = i._startPixel, r = i._endPixel, a = 1e-6;
  let l = i.getPixelForTick(s), c;
  if (!(e && (n === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(s - 1)) / 2, l += s < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function tl(i, t) {
  D(i, (e) => {
    const n = e.gc, s = n.length / 2;
    let o;
    if (s > t) {
      for (o = 0; o < s; ++o)
        delete e.data[n[o]];
      n.splice(0, s);
    }
  });
}
function Xt(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function wn(i, t) {
  if (!i.display)
    return 0;
  const e = X(i.font, t), n = q(i.padding);
  return (N(i.text) ? i.text.length : 1) * e.lineHeight + n.height;
}
function el(i, t) {
  return Lt(i, {
    scale: t,
    type: "scale"
  });
}
function il(i, t, e) {
  return Lt(i, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function nl(i, t, e) {
  let n = ps(i);
  return (e && t !== "right" || !e && t === "right") && (n = Ga(n)), n;
}
function sl(i, t, e, n) {
  const { top: s, left: o, bottom: r, right: a, chart: l } = i, { chartArea: c, scales: h } = l;
  let d = 0, f, u, g;
  const m = r - s, p = a - o;
  if (i.isHorizontal()) {
    if (u = G(n, o, a), L(e)) {
      const b = Object.keys(e)[0], x = e[b];
      g = h[b].getPixelForValue(x) + m - t;
    } else
      e === "center" ? g = (c.bottom + c.top) / 2 + m - t : g = xn(i, e, t);
    f = a - o;
  } else {
    if (L(e)) {
      const b = Object.keys(e)[0], x = e[b];
      u = h[b].getPixelForValue(x) - p + t;
    } else
      e === "center" ? u = (c.left + c.right) / 2 - p + t : u = xn(i, e, t);
    g = G(n, r, s), d = e === "left" ? -V : V;
  }
  return {
    titleX: u,
    titleY: g,
    maxWidth: f,
    rotation: d
  };
}
class Wt extends Tt {
  constructor(t) {
    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(t) {
    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: n, _suggestedMax: s } = this;
    return t = J(t, Number.POSITIVE_INFINITY), e = J(e, Number.NEGATIVE_INFINITY), n = J(n, Number.POSITIVE_INFINITY), s = J(s, Number.NEGATIVE_INFINITY), {
      min: J(t, n),
      max: J(e, s),
      minDefined: $(t),
      maxDefined: $(e)
    };
  }
  getMinMax(t) {
    let { min: e, max: n, minDefined: s, maxDefined: o } = this.getUserBounds(), r;
    if (s && o)
      return {
        min: e,
        max: n
      };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      r = a[l].controller.getMinMax(this, t), s || (e = Math.min(e, r.min)), o || (n = Math.max(n, r.max));
    return e = o && e > n ? n : e, n = s && e > n ? e : n, {
      min: J(e, J(n, e)),
      max: J(n, J(e, n))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    j(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, e, n) {
    const { beginAtZero: s, grace: o, ticks: r } = this.options, a = r.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = n = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, n), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + n.left + n.right : this.height + n.top + n.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = zr(this, o, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? yn(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = $a(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, n;
    this.isHorizontal() ? (e = this.left, n = this.right) : (e = this.top, n = this.bottom, t = !t), this._startPixel = e, this._endPixel = n, this._reversePixels = t, this._length = n - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    j(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    j(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    j(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), j(this.options[t], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    j(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let n, s, o;
    for (n = 0, s = t.length; n < s; n++)
      o = t[n], o.label = j(e.callback, [
        o.value,
        n,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    j(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    j(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, n = _n(this.ticks.length, t.ticks.maxTicksLimit), s = e.minRotation || 0, o = e.maxRotation;
    let r = s, a, l, c;
    if (!this._isVisible() || !e.display || s >= o || n <= 1 || !this.isHorizontal()) {
      this.labelRotation = s;
      return;
    }
    const h = this._getLabelSizes(), d = h.widest.width, f = h.highest.height, u = et(this.chart.width - d, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / n : u / (n - 1), d + 6 > a && (a = u / (n - (t.offset ? 0.5 : 1)), l = this.maxHeight - Xt(t.grid) - e.padding - wn(t.title, this.chart.options.font), c = Math.sqrt(d * d + f * f), r = Si(Math.min(Math.asin(et((h.highest.height + 6) / a, -1, 1)), Math.asin(et(l / c, -1, 1)) - Math.asin(et(f / c, -1, 1)))), r = Math.max(s, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    j(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    j(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: n, title: s, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = wn(s, e.options.font);
      if (a ? (t.width = this.maxWidth, t.height = Xt(o) + l) : (t.height = this.maxHeight, t.width = Xt(o) + l), n.display && this.ticks.length) {
        const { first: c, last: h, widest: d, highest: f } = this._getLabelSizes(), u = n.padding * 2, g = rt(this.labelRotation), m = Math.cos(g), p = Math.sin(g);
        if (a) {
          const b = n.mirror ? 0 : p * d.width + m * f.height;
          t.height = Math.min(this.maxHeight, t.height + b + u);
        } else {
          const b = n.mirror ? 0 : m * d.width + p * f.height;
          t.width = Math.min(this.maxWidth, t.width + b + u);
        }
        this._calculatePadding(c, h, p, m);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, n, s) {
    const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left, d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let f = 0, u = 0;
      l ? c ? (f = s * t.width, u = n * e.height) : (f = n * t.height, u = s * e.width) : o === "start" ? u = e.width : o === "end" ? f = t.width : o !== "inner" && (f = t.width / 2, u = e.width / 2), this.paddingLeft = Math.max((f - h + r) * this.width / (this.width - h), 0), this.paddingRight = Math.max((u - d + r) * this.width / (this.width - d), 0);
    } else {
      let h = e.height / 2, d = t.height / 2;
      o === "start" ? (h = 0, d = t.height) : o === "end" && (h = e.height, d = 0), this.paddingTop = h + r, this.paddingBottom = d + r;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    j(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return e === "top" || e === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let e, n;
    for (e = 0, n = t.length; e < n; e++)
      E(t[e].label) && (t.splice(e, 1), n--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let n = this.ticks;
      e < n.length && (n = yn(n, e)), this._labelSizes = t = this._computeLabelSizes(n, n.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, n) {
    const { ctx: s, _longestTextCache: o } = this, r = [], a = [], l = Math.floor(e / _n(e, n));
    let c = 0, h = 0, d, f, u, g, m, p, b, x, w, v, y;
    for (d = 0; d < e; d += l) {
      if (g = t[d].label, m = this._resolveTickFontOptions(d), s.font = p = m.string, b = o[p] = o[p] || {
        data: {},
        gc: []
      }, x = m.lineHeight, w = v = 0, !E(g) && !N(g))
        w = Be(s, b.data, b.gc, w, g), v = x;
      else if (N(g))
        for (f = 0, u = g.length; f < u; ++f)
          y = g[f], !E(y) && !N(y) && (w = Be(s, b.data, b.gc, w, y), v += x);
      r.push(w), a.push(v), c = Math.max(w, c), h = Math.max(v, h);
    }
    tl(o, e);
    const S = r.indexOf(c), M = a.indexOf(h), k = (C) => ({
      width: r[C] || 0,
      height: a[C] || 0
    });
    return {
      first: k(0),
      last: k(e - 1),
      widest: k(S),
      highest: k(M),
      widths: r,
      heights: a
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return gr(this._alignToPixels ? Mt(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const n = e[t];
      return n.$context || (n.$context = il(this.getContext(), t, n));
    }
    return this.$context || (this.$context = el(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = rt(this.labelRotation), n = Math.abs(Math.cos(e)), s = Math.abs(Math.sin(e)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * n > a * s ? a / n : l / s : l * s < a * n ? l / n : a / s;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, n = this.chart, s = this.options, { grid: o, position: r, border: a } = s, l = o.offset, c = this.isHorizontal(), d = this.ticks.length + (l ? 1 : 0), f = Xt(o), u = [], g = a.setContext(this.getContext()), m = g.display ? g.width : 0, p = m / 2, b = function(F) {
      return Mt(n, F, m);
    };
    let x, w, v, y, S, M, k, C, P, O, T, Y;
    if (r === "top")
      x = b(this.bottom), M = this.bottom - f, C = x - p, O = b(t.top) + p, Y = t.bottom;
    else if (r === "bottom")
      x = b(this.top), O = t.top, Y = b(t.bottom) - p, M = x + p, C = this.top + f;
    else if (r === "left")
      x = b(this.right), S = this.right - f, k = x - p, P = b(t.left) + p, T = t.right;
    else if (r === "right")
      x = b(this.left), P = t.left, T = b(t.right) - p, S = x + p, k = this.left + f;
    else if (e === "x") {
      if (r === "center")
        x = b((t.top + t.bottom) / 2 + 0.5);
      else if (L(r)) {
        const F = Object.keys(r)[0], H = r[F];
        x = b(this.chart.scales[F].getPixelForValue(H));
      }
      O = t.top, Y = t.bottom, M = x + p, C = M + f;
    } else if (e === "y") {
      if (r === "center")
        x = b((t.left + t.right) / 2);
      else if (L(r)) {
        const F = Object.keys(r)[0], H = r[F];
        x = b(this.chart.scales[F].getPixelForValue(H));
      }
      S = x - p, k = S - f, P = t.left, T = t.right;
    }
    const W = I(s.ticks.maxTicksLimit, d), R = Math.max(1, Math.ceil(d / W));
    for (w = 0; w < d; w += R) {
      const F = this.getContext(w), H = o.setContext(F), it = a.setContext(F), K = H.lineWidth, Rt = H.color, ue = it.dash || [], It = it.dashOffset, Ht = H.tickWidth, wt = H.tickColor, Vt = H.tickBorderDash || [], vt = H.tickBorderDashOffset;
      v = Ja(this, w, l), v !== void 0 && (y = Mt(n, v, K), c ? S = k = P = T = y : M = C = O = Y = y, u.push({
        tx1: S,
        ty1: M,
        tx2: k,
        ty2: C,
        x1: P,
        y1: O,
        x2: T,
        y2: Y,
        width: K,
        color: Rt,
        borderDash: ue,
        borderDashOffset: It,
        tickWidth: Ht,
        tickColor: wt,
        tickBorderDash: Vt,
        tickBorderDashOffset: vt
      }));
    }
    return this._ticksLength = d, this._borderValue = x, u;
  }
  _computeLabelItems(t) {
    const e = this.axis, n = this.options, { position: s, ticks: o } = n, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: h, mirror: d } = o, f = Xt(n.grid), u = f + h, g = d ? -h : u, m = -rt(this.labelRotation), p = [];
    let b, x, w, v, y, S, M, k, C, P, O, T, Y = "middle";
    if (s === "top")
      S = this.bottom - g, M = this._getXAxisLabelAlignment();
    else if (s === "bottom")
      S = this.top + g, M = this._getXAxisLabelAlignment();
    else if (s === "left") {
      const R = this._getYAxisLabelAlignment(f);
      M = R.textAlign, y = R.x;
    } else if (s === "right") {
      const R = this._getYAxisLabelAlignment(f);
      M = R.textAlign, y = R.x;
    } else if (e === "x") {
      if (s === "center")
        S = (t.top + t.bottom) / 2 + u;
      else if (L(s)) {
        const R = Object.keys(s)[0], F = s[R];
        S = this.chart.scales[R].getPixelForValue(F) + u;
      }
      M = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (s === "center")
        y = (t.left + t.right) / 2 - u;
      else if (L(s)) {
        const R = Object.keys(s)[0], F = s[R];
        y = this.chart.scales[R].getPixelForValue(F);
      }
      M = this._getYAxisLabelAlignment(f).textAlign;
    }
    e === "y" && (l === "start" ? Y = "top" : l === "end" && (Y = "bottom"));
    const W = this._getLabelSizes();
    for (b = 0, x = a.length; b < x; ++b) {
      w = a[b], v = w.label;
      const R = o.setContext(this.getContext(b));
      k = this.getPixelForTick(b) + o.labelOffset, C = this._resolveTickFontOptions(b), P = C.lineHeight, O = N(v) ? v.length : 1;
      const F = O / 2, H = R.color, it = R.textStrokeColor, K = R.textStrokeWidth;
      let Rt = M;
      r ? (y = k, M === "inner" && (b === x - 1 ? Rt = this.options.reverse ? "left" : "right" : b === 0 ? Rt = this.options.reverse ? "right" : "left" : Rt = "center"), s === "top" ? c === "near" || m !== 0 ? T = -O * P + P / 2 : c === "center" ? T = -W.highest.height / 2 - F * P + P : T = -W.highest.height + P / 2 : c === "near" || m !== 0 ? T = P / 2 : c === "center" ? T = W.highest.height / 2 - F * P : T = W.highest.height - O * P, d && (T *= -1), m !== 0 && !R.showLabelBackdrop && (y += P / 2 * Math.sin(m))) : (S = k, T = (1 - O) * P / 2);
      let ue;
      if (R.showLabelBackdrop) {
        const It = q(R.backdropPadding), Ht = W.heights[b], wt = W.widths[b];
        let Vt = T - It.top, vt = 0 - It.left;
        switch (Y) {
          case "middle":
            Vt -= Ht / 2;
            break;
          case "bottom":
            Vt -= Ht;
            break;
        }
        switch (M) {
          case "center":
            vt -= wt / 2;
            break;
          case "right":
            vt -= wt;
            break;
          case "inner":
            b === x - 1 ? vt -= wt : b > 0 && (vt -= wt / 2);
            break;
        }
        ue = {
          left: vt,
          top: Vt,
          width: wt + It.width,
          height: Ht + It.height,
          color: R.backdropColor
        };
      }
      p.push({
        label: v,
        font: C,
        textOffset: T,
        options: {
          rotation: m,
          color: H,
          strokeColor: it,
          strokeWidth: K,
          textAlign: Rt,
          textBaseline: Y,
          translation: [
            y,
            S
          ],
          backdrop: ue
        }
      });
    }
    return p;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-rt(this.labelRotation))
      return t === "top" ? "left" : "right";
    let s = "center";
    return e.align === "start" ? s = "left" : e.align === "end" ? s = "right" : e.align === "inner" && (s = "inner"), s;
  }
  _getYAxisLabelAlignment(t) {
    const { position: e, ticks: { crossAlign: n, mirror: s, padding: o } } = this.options, r = this._getLabelSizes(), a = t + o, l = r.widest.width;
    let c, h;
    return e === "left" ? s ? (h = this.right + o, n === "near" ? c = "left" : n === "center" ? (c = "center", h += l / 2) : (c = "right", h += l)) : (h = this.right - a, n === "near" ? c = "right" : n === "center" ? (c = "center", h -= l / 2) : (c = "left", h = this.left)) : e === "right" ? s ? (h = this.left + o, n === "near" ? c = "right" : n === "center" ? (c = "center", h -= l / 2) : (c = "left", h -= l)) : (h = this.left + a, n === "near" ? c = "left" : n === "center" ? (c = "center", h += l / 2) : (c = "right", h = this.right)) : c = "right", {
      textAlign: c,
      x: h
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, e = this.options.position;
    if (e === "left" || e === "right")
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      };
    if (e === "top" || e === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      };
  }
  drawBackground() {
    const { ctx: t, options: { backgroundColor: e }, left: n, top: s, width: o, height: r } = this;
    e && (t.save(), t.fillStyle = e, t.fillRect(n, s, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display)
      return 0;
    const s = this.ticks.findIndex((o) => o.value === t);
    return s >= 0 ? e.setContext(this.getContext(s)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid, n = this.ctx, s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (l, c, h) => {
      !h.width || !h.color || (n.save(), n.lineWidth = h.width, n.strokeStyle = h.color, n.setLineDash(h.borderDash || []), n.lineDashOffset = h.borderDashOffset, n.beginPath(), n.moveTo(l.x, l.y), n.lineTo(c.x, c.y), n.stroke(), n.restore());
    };
    if (e.display)
      for (o = 0, r = s.length; o < r; ++o) {
        const l = s[o];
        e.drawOnChartArea && a({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), e.drawTicks && a({
          x: l.tx1,
          y: l.ty1
        }, {
          x: l.tx2,
          y: l.ty2
        }, {
          color: l.tickColor,
          width: l.tickWidth,
          borderDash: l.tickBorderDash,
          borderDashOffset: l.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: t, ctx: e, options: { border: n, grid: s } } = this, o = n.setContext(this.getContext()), r = n.display ? o.width : 0;
    if (!r)
      return;
    const a = s.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, h, d, f;
    this.isHorizontal() ? (c = Mt(t, this.left, r) - r / 2, h = Mt(t, this.right, a) + a / 2, d = f = l) : (d = Mt(t, this.top, r) - r / 2, f = Mt(t, this.bottom, a) + a / 2, c = h = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, d), e.lineTo(h, f), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const n = this.ctx, s = this._computeLabelArea();
    s && Ai(n, s);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, h = r.textOffset;
      zt(n, c, 0, h, l, a);
    }
    s && Oi(n);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: n, reverse: s } } = this;
    if (!n.display)
      return;
    const o = X(n.font), r = q(n.padding), a = n.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || L(e) ? (l += r.bottom, N(n.text) && (l += o.lineHeight * (n.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: h, maxWidth: d, rotation: f } = sl(this, l, e, a);
    zt(t, n.text, 0, 0, o, {
      color: n.color,
      maxWidth: d,
      rotation: f,
      textAlign: nl(a, e, s),
      textBaseline: "middle",
      translation: [
        c,
        h
      ]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, e = t.ticks && t.ticks.z || 0, n = I(t.grid && t.grid.z, -1), s = I(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== Wt.prototype.draw ? [
      {
        z: e,
        draw: (o) => {
          this.draw(o);
        }
      }
    ] : [
      {
        z: n,
        draw: (o) => {
          this.drawBackground(), this.drawGrid(o), this.drawTitle();
        }
      },
      {
        z: s,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: e,
        draw: (o) => {
          this.drawLabels(o);
        }
      }
    ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(), n = this.axis + "AxisID", s = [];
    let o, r;
    for (o = 0, r = e.length; o < r; ++o) {
      const a = e[o];
      a[n] === this.id && (!t || a.type === t) && s.push(a);
    }
    return s;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return X(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class ve {
  constructor(t, e, n) {
    this.type = t, this.scope = e, this.override = n, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let n;
    al(e) && (n = this.register(e));
    const s = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in s || (s[o] = t, ol(t, r, n), this.override && B.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, n = t.id, s = this.scope;
    n in e && delete e[n], s && n in B[s] && (delete B[s][n], this.override && delete Pt[n]);
  }
}
function ol(i, t, e) {
  const n = ae(/* @__PURE__ */ Object.create(null), [
    e ? B.get(e) : {},
    B.get(t),
    i.defaults
  ]);
  B.set(t, n), i.defaultRoutes && rl(t, i.defaultRoutes), i.descriptors && B.describe(t, i.descriptors);
}
function rl(i, t) {
  Object.keys(t).forEach((e) => {
    const n = e.split("."), s = n.pop(), o = [
      i
    ].concat(n).join("."), r = t[e].split("."), a = r.pop(), l = r.join(".");
    B.route(o, s, l, a);
  });
}
function al(i) {
  return "id" in i && "defaults" in i;
}
class ll {
  constructor() {
    this.controllers = new ve(oe, "datasets", !0), this.elements = new ve(Tt, "elements"), this.plugins = new ve(Object, "plugins"), this.scales = new ve(Wt, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, e, n) {
    [
      ...e
    ].forEach((s) => {
      const o = n || this._getRegistryForType(s);
      n || o.isForType(s) || o === this.plugins && s.id ? this._exec(t, o, s) : D(s, (r) => {
        const a = n || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, e, n) {
    const s = Mi(t);
    j(n["before" + s], [], n), e[t](n), j(n["after" + s], [], n);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const n = this._typedRegistries[e];
      if (n.isForType(t))
        return n;
    }
    return this.plugins;
  }
  _get(t, e, n) {
    const s = e.get(t);
    if (s === void 0)
      throw new Error('"' + t + '" is not a registered ' + n + ".");
    return s;
  }
}
var st = /* @__PURE__ */ new ll();
class cl {
  constructor() {
    this._init = [];
  }
  notify(t, e, n, s) {
    e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
    const o = s ? this._descriptors(t).filter(s) : this._descriptors(t), r = this._notify(o, t, e, n);
    return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), r;
  }
  _notify(t, e, n, s) {
    s = s || {};
    for (const o of t) {
      const r = o.plugin, a = r[n], l = [
        e,
        s,
        o.options
      ];
      if (j(a, l, r) === !1 && s.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    E(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const n = t && t.config, s = I(n.options && n.options.plugins, {}), o = hl(n);
    return s === !1 && !e ? [] : fl(t, o, s, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], n = this._cache, s = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(s(e, n), t, "stop"), this._notify(s(n, e), t, "start");
  }
}
function hl(i) {
  const t = {}, e = [], n = Object.keys(st.plugins.items);
  for (let o = 0; o < n.length; o++)
    e.push(st.getPlugin(n[o]));
  const s = i.plugins || [];
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    e.indexOf(r) === -1 && (e.push(r), t[r.id] = !0);
  }
  return {
    plugins: e,
    localIds: t
  };
}
function dl(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function fl(i, { plugins: t, localIds: e }, n, s) {
  const o = [], r = i.getContext();
  for (const a of t) {
    const l = a.id, c = dl(n[l], s);
    c !== null && o.push({
      plugin: a,
      options: ul(i.config, {
        plugin: a,
        local: e[l]
      }, c, r)
    });
  }
  return o;
}
function ul(i, { plugin: t, local: e }, n, s) {
  const o = i.pluginScopeKeys(t), r = i.getOptionScopes(n, o);
  return e && t.defaults && r.push(t.defaults), i.createResolver(r, s, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function ui(i, t) {
  const e = B.datasets[i] || {};
  return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function gl(i, t) {
  let e = i;
  return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function pl(i, t) {
  return i === t ? "_index_" : "_value_";
}
function vn(i) {
  if (i === "x" || i === "y" || i === "r")
    return i;
}
function ml(i) {
  if (i === "top" || i === "bottom")
    return "x";
  if (i === "left" || i === "right")
    return "y";
}
function gi(i, ...t) {
  if (vn(i))
    return i;
  for (const e of t) {
    const n = e.axis || ml(e.position) || i.length > 1 && vn(i[0].toLowerCase());
    if (n)
      return n;
  }
  throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`);
}
function kn(i, t, e) {
  if (e[t + "AxisID"] === i)
    return {
      axis: t
    };
}
function bl(i, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((n) => n.xAxisID === i || n.yAxisID === i);
    if (e.length)
      return kn(i, "x", e[0]) || kn(i, "y", e[0]);
  }
  return {};
}
function xl(i, t) {
  const e = Pt[i.type] || {
    scales: {}
  }, n = t.scales || {}, s = ui(i.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(n).forEach((r) => {
    const a = n[r];
    if (!L(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = gi(r, a, bl(r, i), B.scales[a.type]), c = pl(l, s), h = e.scales || {};
    o[r] = ie(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      h[l],
      h[c]
    ]);
  }), i.data.datasets.forEach((r) => {
    const a = r.type || i.type, l = r.indexAxis || ui(a, t), h = (Pt[a] || {}).scales || {};
    Object.keys(h).forEach((d) => {
      const f = gl(d, l), u = r[f + "AxisID"] || f;
      o[u] = o[u] || /* @__PURE__ */ Object.create(null), ie(o[u], [
        {
          axis: f
        },
        n[u],
        h[d]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    ie(a, [
      B.scales[a.type],
      B.scale
    ]);
  }), o;
}
function Rs(i) {
  const t = i.options || (i.options = {});
  t.plugins = I(t.plugins, {}), t.scales = xl(i, t);
}
function Is(i) {
  return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function _l(i) {
  return i = i || {}, i.data = Is(i.data), Rs(i), i;
}
const Mn = /* @__PURE__ */ new Map(), Ds = /* @__PURE__ */ new Set();
function ke(i, t) {
  let e = Mn.get(i);
  return e || (e = t(), Mn.set(i, e), Ds.add(e)), e;
}
const Kt = (i, t, e) => {
  const n = le(t, e);
  n !== void 0 && i.add(n);
};
class yl {
  constructor(t) {
    this._config = _l(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = Is(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), Rs(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return ke(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return ke(`${t}.transition.${e}`, () => [
      [
        `datasets.${t}.transitions.${e}`,
        `transitions.${e}`
      ],
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return ke(`${t}-${e}`, () => [
      [
        `datasets.${t}.elements.${e}`,
        `datasets.${t}`,
        `elements.${e}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id, n = this.type;
    return ke(`${n}-plugin-${e}`, () => [
      [
        `plugins.${e}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, e) {
    const n = this._scopeCache;
    let s = n.get(t);
    return (!s || e) && (s = /* @__PURE__ */ new Map(), n.set(t, s)), s;
  }
  getOptionScopes(t, e, n) {
    const { options: s, type: o } = this, r = this._cachedScopes(t, n), a = r.get(e);
    if (a)
      return a;
    const l = /* @__PURE__ */ new Set();
    e.forEach((h) => {
      t && (l.add(t), h.forEach((d) => Kt(l, t, d))), h.forEach((d) => Kt(l, s, d)), h.forEach((d) => Kt(l, Pt[o] || {}, d)), h.forEach((d) => Kt(l, B, d)), h.forEach((d) => Kt(l, di, d));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Ds.has(e) && r.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      Pt[e] || {},
      B.datasets[e] || {},
      {
        type: e
      },
      B,
      di
    ];
  }
  resolveNamedOptions(t, e, n, s = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = Sn(this._resolverCache, t, s);
    let l = r;
    if (vl(r, e)) {
      o.$shared = !1, n = yt(n) ? n() : n;
      const c = this.createResolver(t, n, a);
      l = Bt(r, n, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, n = [
    ""
  ], s) {
    const { resolver: o } = Sn(this._resolverCache, t, n);
    return L(e) ? Bt(o, e, void 0, s) : o;
  }
}
function Sn(i, t, e) {
  let n = i.get(t);
  n || (n = /* @__PURE__ */ new Map(), i.set(t, n));
  const s = e.join();
  let o = n.get(s);
  return o || (o = {
    resolver: Ti(t, e),
    subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover"))
  }, n.set(s, o)), o;
}
const wl = (i) => L(i) && Object.getOwnPropertyNames(i).some((t) => yt(i[t]));
function vl(i, t) {
  const { isScriptable: e, isIndexable: n } = _s(i);
  for (const s of t) {
    const o = e(s), r = n(s), a = (r || o) && i[s];
    if (o && (yt(a) || wl(a)) || r && N(a))
      return !0;
  }
  return !1;
}
var kl = "4.4.2";
const Ml = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function Cn(i, t) {
  return i === "top" || i === "bottom" || Ml.indexOf(i) === -1 && t === "x";
}
function An(i, t) {
  return function(e, n) {
    return e[i] === n[i] ? e[t] - n[t] : e[i] - n[i];
  };
}
function On(i) {
  const t = i.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), j(e && e.onComplete, [
    i
  ], t);
}
function Sl(i) {
  const t = i.chart, e = t.options.animation;
  j(e && e.onProgress, [
    i
  ], t);
}
function Fs(i) {
  return Ii() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
}
const Te = {}, Pn = (i) => {
  const t = Fs(i);
  return Object.values(Te).filter((e) => e.canvas === t).pop();
};
function Cl(i, t, e) {
  const n = Object.keys(i);
  for (const s of n) {
    const o = +s;
    if (o >= t) {
      const r = i[s];
      delete i[s], (e > 0 || o > t) && (i[o + e] = r);
    }
  }
}
function Al(i, t, e, n) {
  return !e || i.type === "mouseout" ? null : n ? t : i;
}
function Me(i, t, e) {
  return i.options.clip ? i[e] : t[e];
}
function Ol(i, t) {
  const { xScale: e, yScale: n } = i;
  return e && n ? {
    left: Me(e, t, "left"),
    right: Me(e, t, "right"),
    top: Me(n, t, "top"),
    bottom: Me(n, t, "bottom")
  } : t;
}
var pt;
let Qe = (pt = class {
  static register(...t) {
    st.add(...t), Tn();
  }
  static unregister(...t) {
    st.remove(...t), Tn();
  }
  constructor(t, e) {
    const n = this.config = new yl(e), s = Fs(t), o = Pn(s);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = n.createResolver(n.chartOptionScopes(), this.getContext());
    this.platform = new (n.platform || Ua(s))(), this.platform.updateConfig(n);
    const a = this.platform.acquireContext(s, r.aspectRatio), l = a && a.canvas, c = l && l.height, h = l && l.width;
    if (this.id = nr(), this.ctx = a, this.canvas = l, this.width = h, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new cl(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = _r((d) => this.update(d), r.resizeDelay || 0), this._dataChanges = [], Te[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    lt.listen(this, "complete", On), lt.listen(this, "progress", Sl), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: n, height: s, _aspectRatio: o } = this;
    return E(t) ? e && o ? o : s ? n / s : null : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return st;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : nn(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return Gi(this.canvas, this.ctx), this;
  }
  stop() {
    return lt.stop(this), this;
  }
  resize(t, e) {
    lt.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const n = this.options, s = this.canvas, o = n.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(s, t, e, o), a = n.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, nn(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), j(n.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    D(e, (n, s) => {
      n.id = s;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, n = this.scales, s = Object.keys(n).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    e && (o = o.concat(Object.keys(e).map((r) => {
      const a = e[r], l = gi(r, a), c = l === "r", h = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : h ? "bottom" : "left",
        dtype: c ? "radialLinear" : h ? "category" : "linear"
      };
    }))), D(o, (r) => {
      const a = r.options, l = a.id, c = gi(l, a), h = I(a.type, r.dtype);
      (a.position === void 0 || Cn(a.position, c) !== Cn(r.dposition)) && (a.position = r.dposition), s[l] = !0;
      let d = null;
      if (l in n && n[l].type === h)
        d = n[l];
      else {
        const f = st.getScale(h);
        d = new f({
          id: l,
          type: h,
          ctx: this.ctx,
          chart: this
        }), n[d.id] = d;
      }
      d.init(a, t);
    }), D(s, (r, a) => {
      r || delete n[a];
    }), D(n, (r) => {
      xt.configure(this, r, r.options), xt.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, n = t.length;
    if (t.sort((s, o) => s.index - o.index), n > e) {
      for (let s = e; s < n; ++s)
        this._destroyDatasetMeta(s);
      t.splice(e, n - e);
    }
    this._sortedMetasets = t.slice(0).sort(An("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: e } } = this;
    t.length > e.length && delete this._stacks, t.forEach((n, s) => {
      e.filter((o) => o === n._dataset).length === 0 && this._destroyDatasetMeta(s);
    });
  }
  buildOrUpdateControllers() {
    const t = [], e = this.data.datasets;
    let n, s;
    for (this._removeUnreferencedMetasets(), n = 0, s = e.length; n < s; n++) {
      const o = e[n];
      let r = this.getDatasetMeta(n);
      const a = o.type || this.config.type;
      if (r.type && r.type !== a && (this._destroyDatasetMeta(n), r = this.getDatasetMeta(n)), r.type = a, r.indexAxis = o.indexAxis || ui(a, this.options), r.order = o.order || 0, r.index = n, r.label = "" + o.label, r.visible = this.isDatasetVisible(n), r.controller)
        r.controller.updateIndex(n), r.controller.linkScales();
      else {
        const l = st.getController(a), { datasetElementType: c, dataElementType: h } = B.datasets[a];
        Object.assign(l, {
          dataElementType: st.getElement(h),
          datasetElementType: c && st.getElement(c)
        }), r.controller = new l(this, n), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    D(this.data.datasets, (t, e) => {
      this.getDatasetMeta(e).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const e = this.config;
    e.update();
    const n = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), s = this._animationsDisabled = !n.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let r = 0;
    for (let c = 0, h = this.data.datasets.length; c < h; c++) {
      const { controller: d } = this.getDatasetMeta(c), f = !s && o.indexOf(d) === -1;
      d.buildOrUpdateElements(f), r = Math.max(+d.getMaxOverflow(), r);
    }
    r = this._minPadding = n.layout.autoPadding ? r : 0, this._updateLayout(r), s || D(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(An("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    D(this.scales, (t) => {
      xt.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), n = new Set(t.events);
    (!Vi(e, n) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: n, start: s, count: o } of e) {
      const r = n === "_removeElements" ? -o : o;
      Cl(t, s, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, n = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), s = n(0);
    for (let o = 1; o < e; o++)
      if (!Vi(s, n(o)))
        return;
    return Array.from(s).map((o) => o.split(",")).map((o) => ({
      method: o[1],
      start: +o[2],
      count: +o[3]
    }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: !0
    }) === !1)
      return;
    xt.update(this, this.width, this.height, t);
    const e = this.chartArea, n = e.width <= 0 || e.height <= 0;
    this._layers = [], D(this.boxes, (s) => {
      n && s.position === "chartArea" || (s.configure && s.configure(), this._layers.push(...s._layers()));
    }, this), this._layers.forEach((s, o) => {
      s._idx = o;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let e = 0, n = this.data.datasets.length; e < n; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, n = this.data.datasets.length; e < n; ++e)
        this._updateDataset(e, yt(t) ? t({
          datasetIndex: e
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, e) {
    const n = this.getDatasetMeta(t), s = {
      meta: n,
      index: t,
      mode: e,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", s) !== !1 && (n.controller._update(e), s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (lt.has(this) ? this.attached && !lt.running(this) && lt.start(this) : (this.draw(), On({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: n, height: s } = this._resizeBeforeDraw;
      this._resize(n, s), this._resizeBeforeDraw = null;
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t)
      e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t)
      e[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets, n = [];
    let s, o;
    for (s = 0, o = e.length; s < o; ++s) {
      const r = e[s];
      (!t || r.visible) && n.push(r);
    }
    return n;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: !0
    }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let e = t.length - 1; e >= 0; --e)
      this._drawDataset(t[e]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const e = this.ctx, n = t._clip, s = !n.disabled, o = Ol(t, this.chartArea), r = {
      meta: t,
      index: t.index,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetDraw", r) !== !1 && (s && Ai(e, {
      left: n.left === !1 ? 0 : o.left - n.left,
      right: n.right === !1 ? this.width : o.right + n.right,
      top: n.top === !1 ? 0 : o.top - n.top,
      bottom: n.bottom === !1 ? this.height : o.bottom + n.bottom
    }), t.controller.draw(), s && Oi(e), r.cancelable = !1, this.notifyPlugins("afterDatasetDraw", r));
  }
  isPointInArea(t) {
    return jt(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, n, s) {
    const o = Ma.modes[e];
    return typeof o == "function" ? o(this, t, n, s) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t], n = this._metasets;
    let s = n.filter((o) => o && o._dataset === e).pop();
    return s || (s = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: e && e.order || 0,
      index: t,
      _dataset: e,
      _parsed: [],
      _sorted: !1
    }, n.push(s)), s;
  }
  getContext() {
    return this.$context || (this.$context = Lt(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e)
      return !1;
    const n = this.getDatasetMeta(t);
    return typeof n.hidden == "boolean" ? !n.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    const n = this.getDatasetMeta(t);
    n.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, n) {
    const s = n ? "show" : "hide", o = this.getDatasetMeta(t), r = o.controller._resolveAnimations(void 0, s);
    Fe(e) ? (o.data[e].hidden = !n, this.update()) : (this.setDatasetVisibility(t, n), r.update(o, {
      visible: n
    }), this.update((a) => a.datasetIndex === t ? s : void 0));
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1);
  }
  show(t, e) {
    this._updateVisibility(t, e, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t];
    e && e.controller && e.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, e;
    for (this.stop(), lt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Gi(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Te[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, e = this.platform, n = (o, r) => {
      e.addEventListener(this, o, r), t[o] = r;
    }, s = (o, r, a) => {
      o.offsetX = r, o.offsetY = a, this._eventHandler(o);
    };
    D(this.options.events, (o) => n(o, s));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, e = this.platform, n = (l, c) => {
      e.addEventListener(this, l, c), t[l] = c;
    }, s = (l, c) => {
      t[l] && (e.removeEventListener(this, l, c), delete t[l]);
    }, o = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let r;
    const a = () => {
      s("attach", a), this.attached = !0, this.resize(), n("resize", o), n("detach", r);
    };
    r = () => {
      this.attached = !1, s("resize", o), this._stop(), this._resize(0, 0), n("attach", a);
    }, e.isAttached(this.canvas) ? a() : r();
  }
  unbindEvents() {
    D(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, D(this._responsiveListeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, e, n) {
    const s = n ? "set" : "remove";
    let o, r, a, l;
    for (e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + s + "DatasetHoverStyle"]()), a = 0, l = t.length; a < l; ++a) {
      r = t[a];
      const c = r && this.getDatasetMeta(r.datasetIndex).controller;
      c && c[s + "HoverStyle"](r.element, r.datasetIndex, r.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [], n = t.map(({ datasetIndex: o, index: r }) => {
      const a = this.getDatasetMeta(o);
      if (!a)
        throw new Error("No dataset found at index " + o);
      return {
        datasetIndex: o,
        element: a.data[r],
        index: r
      };
    });
    !Ie(n, e) && (this._active = n, this._lastEvent = null, this._updateHoverStyles(n, e));
  }
  notifyPlugins(t, e, n) {
    return this._plugins.notify(this, t, e, n);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, n) {
    const s = this.options.hover, o = (l, c) => l.filter((h) => !c.some((d) => h.datasetIndex === d.datasetIndex && h.index === d.index)), r = o(e, t), a = n ? t : o(t, e);
    r.length && this.updateHoverStyle(r, s.mode, !1), a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
  }
  _eventHandler(t, e) {
    const n = {
      event: t,
      replay: e,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, s = (r) => (r.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", n, s) === !1)
      return;
    const o = this._handleEvent(t, e, n.inChartArea);
    return n.cancelable = !1, this.notifyPlugins("afterEvent", n, s), (o || n.changed) && this.render(), this;
  }
  _handleEvent(t, e, n) {
    const { _active: s = [], options: o } = this, r = e, a = this._getActiveElements(t, s, n, r), l = cr(t), c = Al(t, this._lastEvent, n, l);
    n && (this._lastEvent = null, j(o.onHover, [
      t,
      a,
      this
    ], this), l && j(o.onClick, [
      t,
      a,
      this
    ], this));
    const h = !Ie(a, s);
    return (h || e) && (this._active = a, this._updateHoverStyles(a, s, e)), this._lastEvent = c, h;
  }
  _getActiveElements(t, e, n, s) {
    if (t.type === "mouseout")
      return [];
    if (!n)
      return e;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, s);
  }
}, A(pt, "defaults", B), A(pt, "instances", Te), A(pt, "overrides", Pt), A(pt, "registry", st), A(pt, "version", kl), A(pt, "getChart", Pn), pt);
function Tn() {
  return D(Qe.instances, (i) => i._plugins.invalidate());
}
function Pl(i, t, e) {
  const { startAngle: n, pixelMargin: s, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = s / a;
  i.beginPath(), i.arc(o, r, a, n - c, e + c), l > s ? (c = s / l, i.arc(o, r, l, e + c, n - c, !0)) : i.arc(o, r, s, e + V, n - V), i.closePath(), i.clip();
}
function Tl(i) {
  return Pi(i, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function Ll(i, t, e, n) {
  const s = Tl(i.options.borderRadius), o = (e - t) / 2, r = Math.min(o, n * t / 2), a = (l) => {
    const c = (e - Math.min(o, l)) * n / 2;
    return et(l, 0, Math.min(o, c));
  };
  return {
    outerStart: a(s.outerStart),
    outerEnd: a(s.outerEnd),
    innerStart: et(s.innerStart, 0, r),
    innerEnd: et(s.innerEnd, 0, r)
  };
}
function Ft(i, t, e, n) {
  return {
    x: e + i * Math.cos(t),
    y: n + i * Math.sin(t)
  };
}
function Ye(i, t, e, n, s, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: h } = t, d = Math.max(t.outerRadius + n + e - c, 0), f = h > 0 ? h + n + e + c : 0;
  let u = 0;
  const g = s - l;
  if (n) {
    const R = h > 0 ? h - n : 0, F = d > 0 ? d - n : 0, H = (R + F) / 2, it = H !== 0 ? g * H / (H + n) : g;
    u = (g - it) / 2;
  }
  const m = Math.max(1e-3, g * d - e / U) / d, p = (g - m) / 2, b = l + p + u, x = s - p - u, { outerStart: w, outerEnd: v, innerStart: y, innerEnd: S } = Ll(t, f, d, x - b), M = d - w, k = d - v, C = b + w / M, P = x - v / k, O = f + y, T = f + S, Y = b + y / O, W = x - S / T;
  if (i.beginPath(), o) {
    const R = (C + P) / 2;
    if (i.arc(r, a, d, C, R), i.arc(r, a, d, R, P), v > 0) {
      const K = Ft(k, P, r, a);
      i.arc(K.x, K.y, v, P, x + V);
    }
    const F = Ft(T, x, r, a);
    if (i.lineTo(F.x, F.y), S > 0) {
      const K = Ft(T, W, r, a);
      i.arc(K.x, K.y, S, x + V, W + Math.PI);
    }
    const H = (x - S / f + (b + y / f)) / 2;
    if (i.arc(r, a, f, x - S / f, H, !0), i.arc(r, a, f, H, b + y / f, !0), y > 0) {
      const K = Ft(O, Y, r, a);
      i.arc(K.x, K.y, y, Y + Math.PI, b - V);
    }
    const it = Ft(M, b, r, a);
    if (i.lineTo(it.x, it.y), w > 0) {
      const K = Ft(M, C, r, a);
      i.arc(K.x, K.y, w, b - V, C);
    }
  } else {
    i.moveTo(r, a);
    const R = Math.cos(C) * d + r, F = Math.sin(C) * d + a;
    i.lineTo(R, F);
    const H = Math.cos(P) * d + r, it = Math.sin(P) * d + a;
    i.lineTo(H, it);
  }
  i.closePath();
}
function Rl(i, t, e, n, s) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    Ye(i, t, e, n, l, s);
    for (let c = 0; c < o; ++c)
      i.fill();
    isNaN(a) || (l = r + (a % z || z));
  }
  return Ye(i, t, e, n, l, s), i.fill(), l;
}
function Il(i, t, e, n, s) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t, { borderWidth: c, borderJoinStyle: h, borderDash: d, borderDashOffset: f } = l, u = l.borderAlign === "inner";
  if (!c)
    return;
  i.setLineDash(d || []), i.lineDashOffset = f, u ? (i.lineWidth = c * 2, i.lineJoin = h || "round") : (i.lineWidth = c, i.lineJoin = h || "bevel");
  let g = t.endAngle;
  if (o) {
    Ye(i, t, e, n, g, s);
    for (let m = 0; m < o; ++m)
      i.stroke();
    isNaN(a) || (g = r + (a % z || z));
  }
  u && Pl(i, t, g), o || (Ye(i, t, e, n, g, s), i.stroke());
}
class Jt extends Tt {
  constructor(e) {
    super();
    A(this, "circumference");
    A(this, "endAngle");
    A(this, "fullCircles");
    A(this, "innerRadius");
    A(this, "outerRadius");
    A(this, "pixelMargin");
    A(this, "startAngle");
    this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, e && Object.assign(this, e);
  }
  inRange(e, n, s) {
    const o = this.getProps([
      "x",
      "y"
    ], s), { angle: r, distance: a } = ds(o, {
      x: e,
      y: n
    }), { startAngle: l, endAngle: c, innerRadius: h, outerRadius: d, circumference: f } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], s), u = (this.options.spacing + this.options.borderWidth) / 2, m = I(f, c - l) >= z || ze(r, l, c), p = Qt(a, h + u, d + u);
    return m && p;
  }
  getCenterPoint(e) {
    const { x: n, y: s, startAngle: o, endAngle: r, innerRadius: a, outerRadius: l } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius"
    ], e), { offset: c, spacing: h } = this.options, d = (o + r) / 2, f = (a + l + h + c) / 2;
    return {
      x: n + Math.cos(d) * f,
      y: s + Math.sin(d) * f
    };
  }
  tooltipPosition(e) {
    return this.getCenterPoint(e);
  }
  draw(e) {
    const { options: n, circumference: s } = this, o = (n.offset || 0) / 4, r = (n.spacing || 0) / 2, a = n.circular;
    if (this.pixelMargin = n.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = s > z ? Math.floor(s / z) : 0, s === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    e.save();
    const l = (this.startAngle + this.endAngle) / 2;
    e.translate(Math.cos(l) * o, Math.sin(l) * o);
    const c = 1 - Math.sin(Math.min(U, s || 0)), h = o * c;
    e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, Rl(e, this, h, r, a), Il(e, this, h, r, a), e.restore();
  }
}
A(Jt, "id", "arc"), A(Jt, "defaults", {
  borderAlign: "center",
  borderColor: "#fff",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: !0
}), A(Jt, "defaultRoutes", {
  backgroundColor: "backgroundColor"
}), A(Jt, "descriptors", {
  _scriptable: !0,
  _indexable: (e) => e !== "borderDash"
});
const Ln = (i, t) => {
  let { boxHeight: e = t, boxWidth: n = t } = i;
  return i.usePointStyle && (e = Math.min(e, t), n = i.pointStyleWidth || Math.min(n, t)), {
    boxWidth: n,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, Dl = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class Rn extends Tt {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e, n) {
    this.maxWidth = t, this.maxHeight = e, this._margins = n, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = j(t.generateLabels, [
      this.chart
    ], this) || [];
    t.filter && (e = e.filter((n) => t.filter(n, this.chart.data))), t.sort && (e = e.sort((n, s) => t.sort(n, s, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const n = t.labels, s = X(n.font), o = s.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = Ln(n, o);
    let c, h;
    e.font = s.string, this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(r, o, a, l) + 10) : (h = this.maxHeight, c = this._fitCols(r, s, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, n, s) {
    const { ctx: o, maxWidth: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], h = s + a;
    let d = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let f = -1, u = -h;
    return this.legendItems.forEach((g, m) => {
      const p = n + e / 2 + o.measureText(g.text).width;
      (m === 0 || c[c.length - 1] + p + 2 * a > r) && (d += h, c[c.length - (m > 0 ? 0 : 1)] = 0, u += h, f++), l[m] = {
        left: 0,
        top: u,
        row: f,
        width: p,
        height: s
      }, c[c.length - 1] += p + a;
    }), d;
  }
  _fitCols(t, e, n, s) {
    const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], h = r - t;
    let d = a, f = 0, u = 0, g = 0, m = 0;
    return this.legendItems.forEach((p, b) => {
      const { itemWidth: x, itemHeight: w } = Fl(n, e, o, p, s);
      b > 0 && u + w + 2 * a > h && (d += f + a, c.push({
        width: f,
        height: u
      }), g += f + a, m++, f = u = 0), l[b] = {
        left: g,
        top: u,
        col: m,
        width: x,
        height: w
      }, f = Math.max(f, x), u += w + a;
    }), d += f, c.push({
      width: f,
      height: u
    }), d;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: n, labels: { padding: s }, rtl: o } } = this, r = Nt(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = G(n, this.left + s, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row && (a = c.row, l = G(n, this.left + s, this.right - this.lineWidths[a])), c.top += this.top + t + s, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + s;
    } else {
      let a = 0, l = G(n, this.top + t + s, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a && (a = c.col, l = G(n, this.top + t + s, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + s, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + s;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Ai(t, this), this._draw(), Oi(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: n, ctx: s } = this, { align: o, labels: r } = t, a = B.color, l = Nt(t.rtl, this.left, this.width), c = X(r.font), { padding: h } = r, d = c.size, f = d / 2;
    let u;
    this.drawTitle(), s.textAlign = l.textAlign("left"), s.textBaseline = "middle", s.lineWidth = 0.5, s.font = c.string;
    const { boxWidth: g, boxHeight: m, itemHeight: p } = Ln(r, d), b = function(S, M, k) {
      if (isNaN(g) || g <= 0 || isNaN(m) || m < 0)
        return;
      s.save();
      const C = I(k.lineWidth, 1);
      if (s.fillStyle = I(k.fillStyle, a), s.lineCap = I(k.lineCap, "butt"), s.lineDashOffset = I(k.lineDashOffset, 0), s.lineJoin = I(k.lineJoin, "miter"), s.lineWidth = C, s.strokeStyle = I(k.strokeStyle, a), s.setLineDash(I(k.lineDash, [])), r.usePointStyle) {
        const P = {
          radius: m * Math.SQRT2 / 2,
          pointStyle: k.pointStyle,
          rotation: k.rotation,
          borderWidth: C
        }, O = l.xPlus(S, g / 2), T = M + f;
        xs(s, P, O, T, r.pointStyleWidth && g);
      } else {
        const P = M + Math.max((d - m) / 2, 0), O = l.leftForLtr(S, g), T = Et(k.borderRadius);
        s.beginPath(), Object.values(T).some((Y) => Y !== 0) ? We(s, {
          x: O,
          y: P,
          w: g,
          h: m,
          radius: T
        }) : s.rect(O, P, g, m), s.fill(), C !== 0 && s.stroke();
      }
      s.restore();
    }, x = function(S, M, k) {
      zt(s, k.text, S, M + p / 2, c, {
        strikethrough: k.hidden,
        textAlign: l.textAlign(k.textAlign)
      });
    }, w = this.isHorizontal(), v = this._computeTitleHeight();
    w ? u = {
      x: G(o, this.left + h, this.right - n[0]),
      y: this.top + h + v,
      line: 0
    } : u = {
      x: this.left + h,
      y: G(o, this.top + v + h, this.bottom - e[0].height),
      line: 0
    }, ks(this.ctx, t.textDirection);
    const y = p + h;
    this.legendItems.forEach((S, M) => {
      s.strokeStyle = S.fontColor, s.fillStyle = S.fontColor;
      const k = s.measureText(S.text).width, C = l.textAlign(S.textAlign || (S.textAlign = r.textAlign)), P = g + f + k;
      let O = u.x, T = u.y;
      l.setWidth(this.width), w ? M > 0 && O + P + h > this.right && (T = u.y += y, u.line++, O = u.x = G(o, this.left + h, this.right - n[u.line])) : M > 0 && T + y > this.bottom && (O = u.x = O + e[u.line].width + h, u.line++, T = u.y = G(o, this.top + v + h, this.bottom - e[u.line].height));
      const Y = l.x(O);
      if (b(Y, T, S), O = yr(C, O + g + f, w ? O + P : this.right, t.rtl), x(l.x(O), T, S), w)
        u.x += P + h;
      else if (typeof S.text != "string") {
        const W = c.lineHeight;
        u.y += js(S, W) + h;
      } else
        u.y += y;
    }), Ms(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, n = X(e.font), s = q(e.padding);
    if (!e.display)
      return;
    const o = Nt(t.rtl, this.left, this.width), r = this.ctx, a = e.position, l = n.size / 2, c = s.top + l;
    let h, d = this.left, f = this.width;
    if (this.isHorizontal())
      f = Math.max(...this.lineWidths), h = this.top + c, d = G(t.align, d, this.right - f);
    else {
      const g = this.columnSizes.reduce((m, p) => Math.max(m, p.height), 0);
      h = c + G(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight());
    }
    const u = G(a, d, d + f);
    r.textAlign = o.textAlign(ps(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = n.string, zt(r, e.text, u, h, n);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = X(t.font), n = q(t.padding);
    return t.display ? e.lineHeight + n.height : 0;
  }
  _getLegendItemAt(t, e) {
    let n, s, o;
    if (Qt(t, this.left, this.right) && Qt(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, n = 0; n < o.length; ++n)
        if (s = o[n], Qt(t, s.left, s.left + s.width) && Qt(e, s.top, s.top + s.height))
          return this.legendItems[n];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!Nl(t.type, e))
      return;
    const n = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const s = this._hoveredItem, o = Dl(s, n);
      s && !o && j(e.onLeave, [
        t,
        s,
        this
      ], this), this._hoveredItem = n, n && !o && j(e.onHover, [
        t,
        n,
        this
      ], this);
    } else
      n && j(e.onClick, [
        t,
        n,
        this
      ], this);
  }
}
function Fl(i, t, e, n, s) {
  const o = jl(n, i, t, e), r = El(s, n, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function jl(i, t, e, n) {
  let s = i.text;
  return s && typeof s != "string" && (s = s.reduce((o, r) => o.length > r.length ? o : r)), t + e.size / 2 + n.measureText(s).width;
}
function El(i, t, e) {
  let n = i;
  return typeof t.text != "string" && (n = js(t, e)), n;
}
function js(i, t) {
  const e = i.text ? i.text.length : 0;
  return t * e;
}
function Nl(i, t) {
  return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
}
var zl = {
  id: "legend",
  _element: Rn,
  start(i, t, e) {
    const n = i.legend = new Rn({
      ctx: i.ctx,
      options: e,
      chart: i
    });
    xt.configure(i, n, e), xt.addBox(i, n);
  },
  stop(i) {
    xt.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, t, e) {
    const n = i.legend;
    xt.configure(i, n, e), n.options = e;
  },
  afterUpdate(i) {
    const t = i.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(i, t) {
    t.replay || i.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(i, t, e) {
      const n = t.datasetIndex, s = e.chart;
      s.isDatasetVisible(n) ? (s.hide(n), t.hidden = !0) : (s.show(n), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (i) => i.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(i) {
        const t = i.data.datasets, { labels: { usePointStyle: e, pointStyle: n, textAlign: s, color: o, useBorderRadius: r, borderRadius: a } } = i.legend.options;
        return i._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(e ? 0 : void 0), h = q(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (h.width + h.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: n || c.pointStyle,
            rotation: c.rotation,
            textAlign: s || c.textAlign,
            borderRadius: r && (a || c.borderRadius),
            datasetIndex: l.index
          };
        }, this);
      }
    },
    title: {
      color: (i) => i.chart.options.color,
      display: !1,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (i) => !i.startsWith("on"),
    labels: {
      _scriptable: (i) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(i)
    }
  }
};
const te = {
  average(i) {
    if (!i.length)
      return !1;
    let t, e, n = /* @__PURE__ */ new Set(), s = 0, o = 0;
    for (t = 0, e = i.length; t < e; ++t) {
      const a = i[t].element;
      if (a && a.hasValue()) {
        const l = a.tooltipPosition();
        n.add(l.x), s += l.y, ++o;
      }
    }
    return {
      x: [
        ...n
      ].reduce((a, l) => a + l) / n.size,
      y: s / o
    };
  },
  nearest(i, t) {
    if (!i.length)
      return !1;
    let e = t.x, n = t.y, s = Number.POSITIVE_INFINITY, o, r, a;
    for (o = 0, r = i.length; o < r; ++o) {
      const l = i[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), h = ur(t, c);
        h < s && (s = h, a = l);
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      e = l.x, n = l.y;
    }
    return {
      x: e,
      y: n
    };
  }
};
function nt(i, t) {
  return t && (N(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function ct(i) {
  return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
}
function Bl(i, t) {
  const { element: e, datasetIndex: n, index: s } = t, o = i.getDatasetMeta(n).controller, { label: r, value: a } = o.getLabelAndValue(s);
  return {
    chart: i,
    label: r,
    parsed: o.getParsed(s),
    raw: i.data.datasets[n].data[s],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: s,
    datasetIndex: n,
    element: e
  };
}
function In(i, t) {
  const e = i.chart.ctx, { body: n, footer: s, title: o } = i, { boxWidth: r, boxHeight: a } = t, l = X(t.bodyFont), c = X(t.titleFont), h = X(t.footerFont), d = o.length, f = s.length, u = n.length, g = q(t.padding);
  let m = g.height, p = 0, b = n.reduce((v, y) => v + y.before.length + y.lines.length + y.after.length, 0);
  if (b += i.beforeBody.length + i.afterBody.length, d && (m += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), b) {
    const v = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    m += u * v + (b - u) * l.lineHeight + (b - 1) * t.bodySpacing;
  }
  f && (m += t.footerMarginTop + f * h.lineHeight + (f - 1) * t.footerSpacing);
  let x = 0;
  const w = function(v) {
    p = Math.max(p, e.measureText(v).width + x);
  };
  return e.save(), e.font = c.string, D(i.title, w), e.font = l.string, D(i.beforeBody.concat(i.afterBody), w), x = t.displayColors ? r + 2 + t.boxPadding : 0, D(n, (v) => {
    D(v.before, w), D(v.lines, w), D(v.after, w);
  }), x = 0, e.font = h.string, D(i.footer, w), e.restore(), p += g.width, {
    width: p,
    height: m
  };
}
function Wl(i, t) {
  const { y: e, height: n } = t;
  return e < n / 2 ? "top" : e > i.height - n / 2 ? "bottom" : "center";
}
function Hl(i, t, e, n) {
  const { x: s, width: o } = n, r = e.caretSize + e.caretPadding;
  if (i === "left" && s + o + r > t.width || i === "right" && s - o - r < 0)
    return !0;
}
function Vl(i, t, e, n) {
  const { x: s, width: o } = e, { width: r, chartArea: { left: a, right: l } } = i;
  let c = "center";
  return n === "center" ? c = s <= (a + l) / 2 ? "left" : "right" : s <= o / 2 ? c = "left" : s >= r - o / 2 && (c = "right"), Hl(c, i, t, e) && (c = "center"), c;
}
function Dn(i, t, e) {
  const n = e.yAlign || t.yAlign || Wl(i, e);
  return {
    xAlign: e.xAlign || t.xAlign || Vl(i, t, e, n),
    yAlign: n
  };
}
function Yl(i, t) {
  let { x: e, width: n } = i;
  return t === "right" ? e -= n : t === "center" && (e -= n / 2), e;
}
function Ul(i, t, e) {
  let { y: n, height: s } = i;
  return t === "top" ? n += e : t === "bottom" ? n -= s + e : n -= s / 2, n;
}
function Fn(i, t, e, n) {
  const { caretSize: s, caretPadding: o, cornerRadius: r } = i, { xAlign: a, yAlign: l } = e, c = s + o, { topLeft: h, topRight: d, bottomLeft: f, bottomRight: u } = Et(r);
  let g = Yl(t, a);
  const m = Ul(t, l, c);
  return l === "center" ? a === "left" ? g += c : a === "right" && (g -= c) : a === "left" ? g -= Math.max(h, f) + s : a === "right" && (g += Math.max(d, u) + s), {
    x: et(g, 0, n.width - t.width),
    y: et(m, 0, n.height - t.height)
  };
}
function Se(i, t, e) {
  const n = q(e.padding);
  return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - n.right : i.x + n.left;
}
function jn(i) {
  return nt([], ct(i));
}
function $l(i, t, e) {
  return Lt(i, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function En(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const Es = {
  beforeTitle: at,
  title(i) {
    if (i.length > 0) {
      const t = i[0], e = t.chart.data.labels, n = e ? e.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (n > 0 && t.dataIndex < n)
        return e[t.dataIndex];
    }
    return "";
  },
  afterTitle: at,
  beforeBody: at,
  beforeLabel: at,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let t = i.dataset.label || "";
    t && (t += ": ");
    const e = i.formattedValue;
    return E(e) || (t += e), t;
  },
  labelColor(i) {
    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(i) {
    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
    return {
      pointStyle: e.pointStyle,
      rotation: e.rotation
    };
  },
  afterLabel: at,
  afterBody: at,
  beforeFooter: at,
  footer: at,
  afterFooter: at
};
function Q(i, t, e, n) {
  const s = i[t].call(e, n);
  return typeof s > "u" ? Es[t].call(e, n) : s;
}
class pi extends Tt {
  constructor(t) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(t) {
    this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t)
      return t;
    const e = this.chart, n = this.options.setContext(this.getContext()), s = n.enabled && e.options.animation && n.animations, o = new Ss(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = $l(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: n } = e, s = Q(n, "beforeTitle", this, t), o = Q(n, "title", this, t), r = Q(n, "afterTitle", this, t);
    let a = [];
    return a = nt(a, ct(s)), a = nt(a, ct(o)), a = nt(a, ct(r)), a;
  }
  getBeforeBody(t, e) {
    return jn(Q(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: n } = e, s = [];
    return D(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = En(n, o);
      nt(r.before, ct(Q(a, "beforeLabel", this, o))), nt(r.lines, Q(a, "label", this, o)), nt(r.after, ct(Q(a, "afterLabel", this, o))), s.push(r);
    }), s;
  }
  getAfterBody(t, e) {
    return jn(Q(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: n } = e, s = Q(n, "beforeFooter", this, t), o = Q(n, "footer", this, t), r = Q(n, "afterFooter", this, t);
    let a = [];
    return a = nt(a, ct(s)), a = nt(a, ct(o)), a = nt(a, ct(r)), a;
  }
  _createItems(t) {
    const e = this._active, n = this.chart.data, s = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      a.push(Bl(this.chart, e[l]));
    return t.filter && (a = a.filter((h, d, f) => t.filter(h, d, f, n))), t.itemSort && (a = a.sort((h, d) => t.itemSort(h, d, n))), D(a, (h) => {
      const d = En(t.callbacks, h);
      s.push(Q(d, "labelColor", this, h)), o.push(Q(d, "labelPointStyle", this, h)), r.push(Q(d, "labelTextColor", this, h));
    }), this.labelColors = s, this.labelPointStyles = o, this.labelTextColors = r, this.dataPoints = a, a;
  }
  update(t, e) {
    const n = this.options.setContext(this.getContext()), s = this._active;
    let o, r = [];
    if (!s.length)
      this.opacity !== 0 && (o = {
        opacity: 0
      });
    else {
      const a = te[n.position].call(this, s, this._eventPosition);
      r = this._createItems(n), this.title = this.getTitle(r, n), this.beforeBody = this.getBeforeBody(r, n), this.body = this.getBody(r, n), this.afterBody = this.getAfterBody(r, n), this.footer = this.getFooter(r, n);
      const l = this._size = In(this, n), c = Object.assign({}, a, l), h = Dn(this.chart, n, c), d = Fn(n, c, h, this.chart);
      this.xAlign = h.xAlign, this.yAlign = h.yAlign, o = {
        opacity: 1,
        x: d.x,
        y: d.y,
        width: l.width,
        height: l.height,
        caretX: a.x,
        caretY: a.y
      };
    }
    this._tooltipItems = r, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && n.external && n.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: e
    });
  }
  drawCaret(t, e, n, s) {
    const o = this.getCaretPosition(t, n, s);
    e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, e, n) {
    const { xAlign: s, yAlign: o } = this, { caretSize: r, cornerRadius: a } = n, { topLeft: l, topRight: c, bottomLeft: h, bottomRight: d } = Et(a), { x: f, y: u } = t, { width: g, height: m } = e;
    let p, b, x, w, v, y;
    return o === "center" ? (v = u + m / 2, s === "left" ? (p = f, b = p - r, w = v + r, y = v - r) : (p = f + g, b = p + r, w = v - r, y = v + r), x = p) : (s === "left" ? b = f + Math.max(l, h) + r : s === "right" ? b = f + g - Math.max(c, d) - r : b = this.caretX, o === "top" ? (w = u, v = w - r, p = b - r, x = b + r) : (w = u + m, v = w + r, p = b + r, x = b - r), y = w), {
      x1: p,
      x2: b,
      x3: x,
      y1: w,
      y2: v,
      y3: y
    };
  }
  drawTitle(t, e, n) {
    const s = this.title, o = s.length;
    let r, a, l;
    if (o) {
      const c = Nt(n.rtl, this.x, this.width);
      for (t.x = Se(this, n.titleAlign, n), e.textAlign = c.textAlign(n.titleAlign), e.textBaseline = "middle", r = X(n.titleFont), a = n.titleSpacing, e.fillStyle = n.titleColor, e.font = r.string, l = 0; l < o; ++l)
        e.fillText(s[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += n.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, n, s, o) {
    const r = this.labelColors[n], a = this.labelPointStyles[n], { boxHeight: l, boxWidth: c } = o, h = X(o.bodyFont), d = Se(this, "left", o), f = s.x(d), u = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0, g = e.y + u;
    if (o.usePointStyle) {
      const m = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, p = s.leftForLtr(f, c) + c / 2, b = g + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Ji(t, m, p, b), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, Ji(t, m, p, b);
    } else {
      t.lineWidth = L(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const m = s.leftForLtr(f, c), p = s.leftForLtr(s.xPlus(f, 1), c - 2), b = Et(r.borderRadius);
      Object.values(b).some((x) => x !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, We(t, {
        x: m,
        y: g,
        w: c,
        h: l,
        radius: b
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), We(t, {
        x: p,
        y: g + 1,
        w: c - 2,
        h: l - 2,
        radius: b
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(m, g, c, l), t.strokeRect(m, g, c, l), t.fillStyle = r.backgroundColor, t.fillRect(p, g + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[n];
  }
  drawBody(t, e, n) {
    const { body: s } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: h } = n, d = X(n.bodyFont);
    let f = d.lineHeight, u = 0;
    const g = Nt(n.rtl, this.x, this.width), m = function(k) {
      e.fillText(k, g.x(t.x + u), t.y + f / 2), t.y += f + o;
    }, p = g.textAlign(r);
    let b, x, w, v, y, S, M;
    for (e.textAlign = r, e.textBaseline = "middle", e.font = d.string, t.x = Se(this, p, n), e.fillStyle = n.bodyColor, D(this.beforeBody, m), u = a && p !== "right" ? r === "center" ? c / 2 + h : c + 2 + h : 0, v = 0, S = s.length; v < S; ++v) {
      for (b = s[v], x = this.labelTextColors[v], e.fillStyle = x, D(b.before, m), w = b.lines, a && w.length && (this._drawColorBox(e, t, v, g, n), f = Math.max(d.lineHeight, l)), y = 0, M = w.length; y < M; ++y)
        m(w[y]), f = d.lineHeight;
      D(b.after, m);
    }
    u = 0, f = d.lineHeight, D(this.afterBody, m), t.y -= o;
  }
  drawFooter(t, e, n) {
    const s = this.footer, o = s.length;
    let r, a;
    if (o) {
      const l = Nt(n.rtl, this.x, this.width);
      for (t.x = Se(this, n.footerAlign, n), t.y += n.footerMarginTop, e.textAlign = l.textAlign(n.footerAlign), e.textBaseline = "middle", r = X(n.footerFont), e.fillStyle = n.footerColor, e.font = r.string, a = 0; a < o; ++a)
        e.fillText(s[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + n.footerSpacing;
    }
  }
  drawBackground(t, e, n, s) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: h } = n, { topLeft: d, topRight: f, bottomLeft: u, bottomRight: g } = Et(s.cornerRadius);
    e.fillStyle = s.backgroundColor, e.strokeStyle = s.borderColor, e.lineWidth = s.borderWidth, e.beginPath(), e.moveTo(a + d, l), r === "top" && this.drawCaret(t, e, n, s), e.lineTo(a + c - f, l), e.quadraticCurveTo(a + c, l, a + c, l + f), r === "center" && o === "right" && this.drawCaret(t, e, n, s), e.lineTo(a + c, l + h - g), e.quadraticCurveTo(a + c, l + h, a + c - g, l + h), r === "bottom" && this.drawCaret(t, e, n, s), e.lineTo(a + u, l + h), e.quadraticCurveTo(a, l + h, a, l + h - u), r === "center" && o === "left" && this.drawCaret(t, e, n, s), e.lineTo(a, l + d), e.quadraticCurveTo(a, l, a + d, l), e.closePath(), e.fill(), s.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, n = this.$animations, s = n && n.x, o = n && n.y;
    if (s || o) {
      const r = te[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = In(this, t), l = Object.assign({}, r, this._size), c = Dn(e, t, l), h = Fn(t, l, c, e);
      (s._to !== h.x || o._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = a.width, this.height = a.height, this.caretX = r.x, this.caretY = r.y, this._resolveAnimations().update(this, h));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let n = this.opacity;
    if (!n)
      return;
    this._updateAnimationTarget(e);
    const s = {
      width: this.width,
      height: this.height
    }, o = {
      x: this.x,
      y: this.y
    };
    n = Math.abs(n) < 1e-3 ? 0 : n;
    const r = q(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && a && (t.save(), t.globalAlpha = n, this.drawBackground(o, t, s, e), ks(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), Ms(t, e.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const n = this._active, s = t.map(({ datasetIndex: a, index: l }) => {
      const c = this.chart.getDatasetMeta(a);
      if (!c)
        throw new Error("Cannot find a dataset at index " + a);
      return {
        datasetIndex: a,
        element: c.data[l],
        index: l
      };
    }), o = !Ie(n, s), r = this._positionChanged(s, e);
    (o || r) && (this._active = s, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, n = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options, o = this._active || [], r = this._getActiveElements(t, o, e, n), a = this._positionChanged(r, t), l = e || !Ie(r, o) || a;
    return l && (this._active = r, (s.enabled || s.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, e))), l;
  }
  _getActiveElements(t, e, n, s) {
    const o = this.options;
    if (t.type === "mouseout")
      return [];
    if (!s)
      return e.filter((a) => this.chart.data.datasets[a.datasetIndex] && this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index) !== void 0);
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, n);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, e) {
    const { caretX: n, caretY: s, options: o } = this, r = te[o.position].call(this, t, e);
    return r !== !1 && (n !== r.x || s !== r.y);
  }
}
A(pi, "positioners", te);
var Xl = {
  id: "tooltip",
  _element: pi,
  positioners: te,
  afterInit(i, t, e) {
    e && (i.tooltip = new pi({
      chart: i,
      options: e
    }));
  },
  beforeUpdate(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  reset(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  afterDraw(i) {
    const t = i.tooltip;
    if (t && t._willRender()) {
      const e = {
        tooltip: t
      };
      if (i.notifyPlugins("beforeTooltipDraw", {
        ...e,
        cancelable: !0
      }) === !1)
        return;
      t.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", e);
    }
  },
  afterEvent(i, t) {
    if (i.tooltip) {
      const e = t.replay;
      i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (i, t) => t.bodyFont.size,
    boxWidth: (i, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "width",
          "height",
          "caretX",
          "caretY"
        ]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: Es
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (i) => i !== "filter" && i !== "itemSort" && i !== "external",
    _indexable: !1,
    callbacks: {
      _scriptable: !1,
      _indexable: !1
    },
    animation: {
      _fallback: !1
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: [
    "interaction"
  ]
};
function Kl(i, t) {
  const e = [], { bounds: s, step: o, min: r, max: a, precision: l, count: c, maxTicks: h, maxDigits: d, includeBounds: f } = i, u = o || 1, g = h - 1, { min: m, max: p } = t, b = !E(r), x = !E(a), w = !E(c), v = (p - m) / (d + 1);
  let y = Ui((p - m) / g / u) * u, S, M, k, C;
  if (y < 1e-14 && !b && !x)
    return [
      {
        value: m
      },
      {
        value: p
      }
    ];
  C = Math.ceil(p / y) - Math.floor(m / y), C > g && (y = Ui(C * y / g / u) * u), E(l) || (S = Math.pow(10, l), y = Math.ceil(y * S) / S), s === "ticks" ? (M = Math.floor(m / y) * y, k = Math.ceil(p / y) * y) : (M = m, k = p), b && x && o && fr((a - r) / o, y / 1e3) ? (C = Math.round(Math.min((a - r) / y, h)), y = (a - r) / C, M = r, k = a) : w ? (M = b ? r : M, k = x ? a : k, C = c - 1, y = (k - M) / C) : (C = (k - M) / y, Oe(C, Math.round(C), y / 1e3) ? C = Math.round(C) : C = Math.ceil(C));
  const P = Math.max($i(y), $i(M));
  S = Math.pow(10, E(l) ? P : l), M = Math.round(M * S) / S, k = Math.round(k * S) / S;
  let O = 0;
  for (b && (f && M !== r ? (e.push({
    value: r
  }), M < r && O++, Oe(Math.round((M + O * y) * S) / S, r, Nn(r, v, i)) && O++) : M < r && O++); O < C; ++O) {
    const T = Math.round((M + O * y) * S) / S;
    if (x && T > a)
      break;
    e.push({
      value: T
    });
  }
  return x && f && k !== a ? e.length && Oe(e[e.length - 1].value, a, Nn(a, v, i)) ? e[e.length - 1].value = a : e.push({
    value: a
  }) : (!x || k === a) && e.push({
    value: k
  }), e;
}
function Nn(i, t, { horizontal: e, minRotation: n }) {
  const s = rt(n), o = (e ? Math.sin(s) : Math.cos(s)) || 1e-3, r = 0.75 * t * ("" + i).length;
  return Math.min(t / o, r);
}
class Ue extends Wt {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return E(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: n } = this.getUserBounds();
    let { min: s, max: o } = this;
    const r = (l) => s = e ? s : l, a = (l) => o = n ? o : l;
    if (t) {
      const l = Ee(s), c = Ee(o);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0);
    }
    if (s === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      a(o + l), t || r(s - l);
    }
    this.min = s, this.max = o;
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: e, stepSize: n } = t, s;
    return n ? (s = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1, s > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${s} ticks. Limiting to 1000.`), s = 1e3)) : (s = this.computeTickLimit(), e = e || 11), e && (s = Math.min(e, s)), s;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, e = t.ticks;
    let n = this.getTickLimit();
    n = Math.max(2, n);
    const s = {
      maxTicks: n,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: e.precision,
      step: e.stepSize,
      count: e.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: e.minRotation || 0,
      includeBounds: e.includeBounds !== !1
    }, o = this._range || this, r = Kl(s, o);
    return t.bounds === "ticks" && hs(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
  }
  configure() {
    const t = this.ticks;
    let e = this.min, n = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const s = (n - e) / Math.max(t.length - 1, 1) / 2;
      e -= s, n += s;
    }
    this._startValue = e, this._endValue = n, this._valueRange = n - e;
  }
  getLabelForValue(t) {
    return Xe(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class zn extends Ue {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = $(t) ? t : 0, this.max = $(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, n = rt(this.options.ticks.minRotation), s = (t ? Math.sin(n) : Math.cos(n)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / s));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
A(zn, "id", "linear"), A(zn, "defaults", {
  ticks: {
    callback: Ke.formatters.numeric
  }
});
const he = (i) => Math.floor(bt(i)), Ct = (i, t) => Math.pow(10, he(i) + t);
function Bn(i) {
  return i / Math.pow(10, he(i)) === 1;
}
function Wn(i, t, e) {
  const n = Math.pow(10, e), s = Math.floor(i / n);
  return Math.ceil(t / n) - s;
}
function ql(i, t) {
  const e = t - i;
  let n = he(e);
  for (; Wn(i, t, n) > 10; )
    n++;
  for (; Wn(i, t, n) < 10; )
    n--;
  return Math.min(n, he(i));
}
function Ql(i, { min: t, max: e }) {
  t = J(i.min, t);
  const n = [], s = he(t);
  let o = ql(t, e), r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const a = Math.pow(10, o), l = s > o ? Math.pow(10, s) : 0, c = Math.round((t - l) * r) / r, h = Math.floor((t - l) / a / 10) * a * 10;
  let d = Math.floor((c - h) / Math.pow(10, o)), f = J(i.min, Math.round((l + h + d * Math.pow(10, o)) * r) / r);
  for (; f < e; )
    n.push({
      value: f,
      major: Bn(f),
      significand: d
    }), d >= 10 ? d = d < 15 ? 15 : 20 : d++, d >= 20 && (o++, d = 2, r = o >= 0 ? 1 : r), f = Math.round((l + h + d * Math.pow(10, o)) * r) / r;
  const u = J(i.max, f);
  return n.push({
    value: u,
    major: Bn(u),
    significand: d
  }), n;
}
class Hn extends Wt {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    const n = Ue.prototype.parse.apply(this, [
      t,
      e
    ]);
    if (n === 0) {
      this._zero = !0;
      return;
    }
    return $(n) && n > 0 ? n : null;
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = $(t) ? Math.max(0, t) : null, this.max = $(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !$(this._userMin) && (this.min = t === Ct(this.min, 0) ? Ct(this.min, -1) : Ct(this.min, 0)), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let n = this.min, s = this.max;
    const o = (a) => n = t ? n : a, r = (a) => s = e ? s : a;
    n === s && (n <= 0 ? (o(1), r(10)) : (o(Ct(n, -1)), r(Ct(s, 1)))), n <= 0 && o(Ct(s, -1)), s <= 0 && r(Ct(n, 1)), this.min = n, this.max = s;
  }
  buildTicks() {
    const t = this.options, e = {
      min: this._userMin,
      max: this._userMax
    }, n = Ql(e, this);
    return t.bounds === "ticks" && hs(n, this, "value"), t.reverse ? (n.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), n;
  }
  getLabelForValue(t) {
    return t === void 0 ? "0" : Xe(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(), this._startValue = bt(t), this._valueRange = bt(this.max) - bt(t);
  }
  getPixelForValue(t) {
    return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (bt(t) - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
A(Hn, "id", "logarithmic"), A(Hn, "defaults", {
  ticks: {
    callback: Ke.formatters.logarithmic,
    major: {
      enabled: !0
    }
  }
});
function mi(i) {
  const t = i.ticks;
  if (t.display && i.display) {
    const e = q(t.backdropPadding);
    return I(t.font && t.font.size, B.font.size) + e.height;
  }
  return 0;
}
function Zl(i, t, e) {
  return e = N(e) ? e : [
    e
  ], {
    w: Tr(i, t.string, e),
    h: e.length * t.lineHeight
  };
}
function Vn(i, t, e, n, s) {
  return i === n || i === s ? {
    start: t - e / 2,
    end: t + e / 2
  } : i < n || i > s ? {
    start: t - e,
    end: t
  } : {
    start: t,
    end: t + e
  };
}
function Gl(i) {
  const t = {
    l: i.left + i._padding.left,
    r: i.right - i._padding.right,
    t: i.top + i._padding.top,
    b: i.bottom - i._padding.bottom
  }, e = Object.assign({}, t), n = [], s = [], o = i._pointLabels.length, r = i.options.pointLabels, a = r.centerPointLabels ? U / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(i.getPointLabelContext(l));
    s[l] = c.padding;
    const h = i.getPointPosition(l, i.drawingArea + s[l], a), d = X(c.font), f = Zl(i.ctx, d, i._pointLabels[l]);
    n[l] = f;
    const u = ot(i.getIndexAngle(l) + a), g = Math.round(Si(u)), m = Vn(g, h.x, f.w, 0, 180), p = Vn(g, h.y, f.h, 90, 270);
    Jl(e, t, u, m, p);
  }
  i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i._pointLabelItems = ic(i, n, s);
}
function Jl(i, t, e, n, s) {
  const o = Math.abs(Math.sin(e)), r = Math.abs(Math.cos(e));
  let a = 0, l = 0;
  n.start < t.l ? (a = (t.l - n.start) / o, i.l = Math.min(i.l, t.l - a)) : n.end > t.r && (a = (n.end - t.r) / o, i.r = Math.max(i.r, t.r + a)), s.start < t.t ? (l = (t.t - s.start) / r, i.t = Math.min(i.t, t.t - l)) : s.end > t.b && (l = (s.end - t.b) / r, i.b = Math.max(i.b, t.b + l));
}
function tc(i, t, e) {
  const n = i.drawingArea, { extra: s, additionalAngle: o, padding: r, size: a } = e, l = i.getPointPosition(t, n + s + r, o), c = Math.round(Si(ot(l.angle + V))), h = oc(l.y, a.h, c), d = nc(c), f = sc(l.x, a.w, d);
  return {
    visible: !0,
    x: l.x,
    y: h,
    textAlign: d,
    left: f,
    top: h,
    right: f + a.w,
    bottom: h + a.h
  };
}
function ec(i, t) {
  if (!t)
    return !0;
  const { left: e, top: n, right: s, bottom: o } = i;
  return !(jt({
    x: e,
    y: n
  }, t) || jt({
    x: e,
    y: o
  }, t) || jt({
    x: s,
    y: n
  }, t) || jt({
    x: s,
    y: o
  }, t));
}
function ic(i, t, e) {
  const n = [], s = i._pointLabels.length, o = i.options, { centerPointLabels: r, display: a } = o.pointLabels, l = {
    extra: mi(o) / 2,
    additionalAngle: r ? U / s : 0
  };
  let c;
  for (let h = 0; h < s; h++) {
    l.padding = e[h], l.size = t[h];
    const d = tc(i, h, l);
    n.push(d), a === "auto" && (d.visible = ec(d, c), d.visible && (c = d));
  }
  return n;
}
function nc(i) {
  return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right";
}
function sc(i, t, e) {
  return e === "right" ? i -= t : e === "center" && (i -= t / 2), i;
}
function oc(i, t, e) {
  return e === 90 || e === 270 ? i -= t / 2 : (e > 270 || e < 90) && (i -= t), i;
}
function rc(i, t, e) {
  const { left: n, top: s, right: o, bottom: r } = e, { backdropColor: a } = t;
  if (!E(a)) {
    const l = Et(t.borderRadius), c = q(t.backdropPadding);
    i.fillStyle = a;
    const h = n - c.left, d = s - c.top, f = o - n + c.width, u = r - s + c.height;
    Object.values(l).some((g) => g !== 0) ? (i.beginPath(), We(i, {
      x: h,
      y: d,
      w: f,
      h: u,
      radius: l
    }), i.fill()) : i.fillRect(h, d, f, u);
  }
}
function ac(i, t) {
  const { ctx: e, options: { pointLabels: n } } = i;
  for (let s = t - 1; s >= 0; s--) {
    const o = i._pointLabelItems[s];
    if (!o.visible)
      continue;
    const r = n.setContext(i.getPointLabelContext(s));
    rc(e, r, o);
    const a = X(r.font), { x: l, y: c, textAlign: h } = o;
    zt(e, i._pointLabels[s], l, c + a.lineHeight / 2, a, {
      color: r.color,
      textAlign: h,
      textBaseline: "middle"
    });
  }
}
function Ns(i, t, e, n) {
  const { ctx: s } = i;
  if (e)
    s.arc(i.xCenter, i.yCenter, t, 0, z);
  else {
    let o = i.getPointPosition(0, t);
    s.moveTo(o.x, o.y);
    for (let r = 1; r < n; r++)
      o = i.getPointPosition(r, t), s.lineTo(o.x, o.y);
  }
}
function lc(i, t, e, n, s) {
  const o = i.ctx, r = t.circular, { color: a, lineWidth: l } = t;
  !r && !n || !a || !l || e < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = l, o.setLineDash(s.dash), o.lineDashOffset = s.dashOffset, o.beginPath(), Ns(i, e, r, n), o.closePath(), o.stroke(), o.restore());
}
function cc(i, t, e) {
  return Lt(i, {
    label: e,
    index: t,
    type: "pointLabel"
  });
}
class Ce extends Ue {
  constructor(t) {
    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const t = this._padding = q(mi(this.options) / 2), e = this.width = this.maxWidth - t.width, n = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + n / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, n) / 2);
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    this.min = $(t) && !isNaN(t) ? t : 0, this.max = $(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / mi(this.options));
  }
  generateTickLabels(t) {
    Ue.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, n) => {
      const s = j(this.options.pointLabels.callback, [
        e,
        n
      ], this);
      return s || s === 0 ? s : "";
    }).filter((e, n) => this.chart.getDataVisibility(n));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? Gl(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, n, s) {
    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((n - s) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, n, s));
  }
  getIndexAngle(t) {
    const e = z / (this._pointLabels.length || 1), n = this.options.startAngle || 0;
    return ot(t * e + rt(n));
  }
  getDistanceFromCenterForValue(t) {
    if (E(t))
      return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (E(t))
      return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const n = e[t];
      return cc(this.getContext(), t, n);
    }
  }
  getPointPosition(t, e, n = 0) {
    const s = this.getIndexAngle(t) - V + n;
    return {
      x: Math.cos(s) * e + this.xCenter,
      y: Math.sin(s) * e + this.yCenter,
      angle: s
    };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: e, top: n, right: s, bottom: o } = this._pointLabelItems[t];
    return {
      left: e,
      top: n,
      right: s,
      bottom: o
    };
  }
  drawBackground() {
    const { backgroundColor: t, grid: { circular: e } } = this.options;
    if (t) {
      const n = this.ctx;
      n.save(), n.beginPath(), Ns(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), n.closePath(), n.fillStyle = t, n.fill(), n.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, e = this.options, { angleLines: n, grid: s, border: o } = e, r = this._pointLabels.length;
    let a, l, c;
    if (e.pointLabels.display && ac(this, r), s.display && this.ticks.forEach((h, d) => {
      if (d !== 0 || d === 0 && this.min < 0) {
        l = this.getDistanceFromCenterForValue(h.value);
        const f = this.getContext(d), u = s.setContext(f), g = o.setContext(f);
        lc(this, u, l, r, g);
      }
    }), n.display) {
      for (t.save(), a = r - 1; a >= 0; a--) {
        const h = n.setContext(this.getPointLabelContext(a)), { color: d, lineWidth: f } = h;
        !f || !d || (t.lineWidth = f, t.strokeStyle = d, t.setLineDash(h.borderDash), t.lineDashOffset = h.borderDashOffset, l = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), c = this.getPointPosition(a, l), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {
  }
  drawLabels() {
    const t = this.ctx, e = this.options, n = e.ticks;
    if (!n.display)
      return;
    const s = this.getIndexAngle(0);
    let o, r;
    t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(s), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((a, l) => {
      if (l === 0 && this.min >= 0 && !e.reverse)
        return;
      const c = n.setContext(this.getContext(l)), h = X(c.font);
      if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        t.font = h.string, r = t.measureText(a.label).width, t.fillStyle = c.backdropColor;
        const d = q(c.backdropPadding);
        t.fillRect(-r / 2 - d.left, -o - h.size / 2 - d.top, r + d.width, h.size + d.height);
      }
      zt(t, a.label, 0, -o, h, {
        color: c.color,
        strokeColor: c.textStrokeColor,
        strokeWidth: c.textStrokeWidth
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
A(Ce, "id", "radialLinear"), A(Ce, "defaults", {
  display: !0,
  animate: !0,
  position: "chartArea",
  angleLines: {
    display: !0,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0
  },
  grid: {
    circular: !1
  },
  startAngle: 0,
  ticks: {
    showLabelBackdrop: !0,
    callback: Ke.formatters.numeric
  },
  pointLabels: {
    backdropColor: void 0,
    backdropPadding: 2,
    display: !0,
    font: {
      size: 10
    },
    callback(t) {
      return t;
    },
    padding: 5,
    centerPointLabels: !1
  }
}), A(Ce, "defaultRoutes", {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color"
}), A(Ce, "descriptors", {
  angleLines: {
    _fallback: "grid"
  }
});
const Ze = {
  millisecond: {
    common: !0,
    size: 1,
    steps: 1e3
  },
  second: {
    common: !0,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: !0,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: !0,
    size: 36e5,
    steps: 24
  },
  day: {
    common: !0,
    size: 864e5,
    steps: 30
  },
  week: {
    common: !1,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: !0,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: !1,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: !0,
    size: 3154e7
  }
}, Z = /* @__PURE__ */ Object.keys(Ze);
function Yn(i, t) {
  return i - t;
}
function Un(i, t) {
  if (E(t))
    return null;
  const e = i._adapter, { parser: n, round: s, isoWeekday: o } = i._parseOpts;
  let r = t;
  return typeof n == "function" && (r = n(r)), $(r) || (r = typeof n == "string" ? e.parse(r, n) : e.parse(r)), r === null ? null : (s && (r = s === "week" && (Ne(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, s)), +r);
}
function $n(i, t, e, n) {
  const s = Z.length;
  for (let o = Z.indexOf(i); o < s - 1; ++o) {
    const r = Ze[Z[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= n)
      return Z[o];
  }
  return Z[s - 1];
}
function hc(i, t, e, n, s) {
  for (let o = Z.length - 1; o >= Z.indexOf(e); o--) {
    const r = Z[o];
    if (Ze[r].common && i._adapter.diff(s, n, r) >= t - 1)
      return r;
  }
  return Z[e ? Z.indexOf(e) : 0];
}
function dc(i) {
  for (let t = Z.indexOf(i) + 1, e = Z.length; t < e; ++t)
    if (Ze[Z[t]].common)
      return Z[t];
}
function Xn(i, t, e) {
  if (!e)
    i[t] = !0;
  else if (e.length) {
    const { lo: n, hi: s } = Ci(e, t), o = e[n] >= t ? e[n] : e[s];
    i[o] = !0;
  }
}
function fc(i, t, e, n) {
  const s = i._adapter, o = +s.startOf(t[0].value, n), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +s.add(a, 1, n))
    l = e[a], l >= 0 && (t[l].major = !0);
  return t;
}
function Kn(i, t, e) {
  const n = [], s = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], s[a] = r, n.push({
      value: a,
      major: !1
    });
  return o === 0 || !e ? n : fc(i, n, s, e);
}
class $e extends Wt {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, e = {}) {
    const n = t.time || (t.time = {}), s = this._adapter = new _a._date(t.adapters.date);
    s.init(e), ie(n.displayFormats, s.formats()), this._parseOpts = {
      parser: n.parser,
      round: n.round,
      isoWeekday: n.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : Un(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, e = this._adapter, n = t.time.unit || "day";
    let { min: s, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !r && !isNaN(c.min) && (s = Math.min(s, c.min)), !a && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), s = $(s) && !isNaN(s) ? s : +e.startOf(Date.now(), n), o = $(o) && !isNaN(o) ? o : +e.endOf(Date.now(), n) + 1, this.min = Math.min(s, o - 1), this.max = Math.max(s + 1, o);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY;
    return t.length && (e = t[0], n = t[t.length - 1]), {
      min: e,
      max: n
    };
  }
  buildTicks() {
    const t = this.options, e = t.time, n = t.ticks, s = n.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && s.length && (this.min = this._userMin || s[0], this.max = this._userMax || s[s.length - 1]);
    const o = this.min, r = this.max, a = mr(s, o, r);
    return this._unit = e.unit || (n.autoSkip ? $n(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : hc(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !n.major.enabled || this._unit === "year" ? void 0 : dc(this._unit), this.initOffsets(s), t.reverse && a.reverse(), Kn(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, n = 0, s, o;
    this.options.offset && t.length && (s = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - s : e = (this.getDecimalForValue(t[1]) - s) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? n = o : n = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    e = et(e, 0, r), n = et(n, 0, r), this._offsets = {
      start: e,
      end: n,
      factor: 1 / (e + 1 + n)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, n = this.max, s = this.options, o = s.time, r = o.unit || $n(o.minUnit, e, n, this._getLabelCapacity(e)), a = I(s.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = Ne(l) || l === !0, h = {};
    let d = e, f, u;
    if (c && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, c ? "day" : r), t.diff(n, e, r) > 1e5 * a)
      throw new Error(e + " and " + n + " are too far apart with stepSize of " + a + " " + r);
    const g = s.ticks.source === "data" && this.getDataTimestamps();
    for (f = d, u = 0; f < n; f = +t.add(f, a, r), u++)
      Xn(h, f, g);
    return (f === n || s.bounds === "ticks" || u === 1) && Xn(h, f, g), Object.keys(h).sort(Yn).map((m) => +m);
  }
  getLabelForValue(t) {
    const e = this._adapter, n = this.options.time;
    return n.tooltipFormat ? e.format(t, n.tooltipFormat) : e.format(t, n.displayFormats.datetime);
  }
  format(t, e) {
    const s = this.options.time.displayFormats, o = this._unit, r = e || s[o];
    return this._adapter.format(t, r);
  }
  _tickFormatFunction(t, e, n, s) {
    const o = this.options, r = o.ticks.callback;
    if (r)
      return j(r, [
        t,
        e,
        n
      ], this);
    const a = o.time.displayFormats, l = this._unit, c = this._majorUnit, h = l && a[l], d = c && a[c], f = n[e], u = c && d && f && f.major;
    return this._adapter.format(t, s || (u ? d : h));
  }
  generateTickLabels(t) {
    let e, n, s;
    for (e = 0, n = t.length; e < n; ++e)
      s = t[e], s.label = this._tickFormatFunction(s.value, e, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets, n = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + n) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets, n = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + n * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks, n = this.ctx.measureText(t).width, s = rt(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(s), r = Math.sin(s), a = this._resolveTickFontOptions(0).size;
    return {
      w: n * o + a * r,
      h: n * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, n = e.displayFormats, s = n[e.unit] || n.millisecond, o = this._tickFormatFunction(t, 0, Kn(this, [
      t
    ], this._majorUnit), s), r = this._getLabelSize(o), a = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], e, n;
    if (t.length)
      return t;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return this._cache.data = s[0].controller.getAllParsedValues(this);
    for (e = 0, n = s.length; e < n; ++e)
      t = t.concat(s[e].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, n;
    if (t.length)
      return t;
    const s = this.getLabels();
    for (e = 0, n = s.length; e < n; ++e)
      t.push(Un(this, s[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return xr(t.sort(Yn));
  }
}
A($e, "id", "time"), A($e, "defaults", {
  bounds: "data",
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: "millisecond",
    displayFormats: {}
  },
  ticks: {
    source: "auto",
    callback: !1,
    major: {
      enabled: !1
    }
  }
});
function Ae(i, t, e) {
  let n = 0, s = i.length - 1, o, r, a, l;
  e ? (t >= i[n].pos && t <= i[s].pos && ({ lo: n, hi: s } = hi(i, "pos", t)), { pos: o, time: a } = i[n], { pos: r, time: l } = i[s]) : (t >= i[n].time && t <= i[s].time && ({ lo: n, hi: s } = hi(i, "time", t)), { time: o, pos: a } = i[n], { time: r, pos: l } = i[s]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class qn extends $e {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = Ae(e, this.min), this._tableRange = Ae(e, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: n } = this, s = [], o = [];
    let r, a, l, c, h;
    for (r = 0, a = t.length; r < a; ++r)
      c = t[r], c >= e && c <= n && s.push(c);
    if (s.length < 2)
      return [
        {
          time: e,
          pos: 0
        },
        {
          time: n,
          pos: 1
        }
      ];
    for (r = 0, a = s.length; r < a; ++r)
      h = s[r + 1], l = s[r - 1], c = s[r], Math.round((h + l) / 2) !== c && o.push({
        time: c,
        pos: r / (a - 1)
      });
    return o;
  }
  _generate() {
    const t = this.min, e = this.max;
    let n = super.getDataTimestamps();
    return (!n.includes(t) || !n.length) && n.splice(0, 0, t), (!n.includes(e) || n.length === 1) && n.push(e), n.sort((s, o) => s - o);
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const e = this.getDataTimestamps(), n = this.getLabelTimestamps();
    return e.length && n.length ? t = this.normalize(e.concat(n)) : t = e.length ? e : n, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (Ae(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, n = this.getDecimalForPixel(t) / e.factor - e.end;
    return Ae(this._table, n * this._tableRange + this._minPos, !0);
  }
}
A(qn, "id", "timeseries"), A(qn, "defaults", $e.defaults);
const zs = "label";
function Qn(i, t) {
  typeof i == "function" ? i(t) : i && (i.current = t);
}
function uc(i, t) {
  const e = i.options;
  e && t && Object.assign(e, t);
}
function Bs(i, t) {
  i.labels = t;
}
function Ws(i, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : zs;
  const n = [];
  i.datasets = t.map((s) => {
    const o = i.datasets.find((r) => r[e] === s[e]);
    return !o || !s.data || n.includes(o) ? {
      ...s
    } : (n.push(o), Object.assign(o, s), o);
  });
}
function gc(i) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : zs;
  const e = {
    labels: [],
    datasets: []
  };
  return Bs(e, i.labels), Ws(e, i.datasets, t), e;
}
function pc(i, t) {
  const { height: e = 150, width: n = 300, redraw: s = !1, datasetIdKey: o, type: r, data: a, options: l, plugins: c = [], fallbackContent: h, updateMode: d, ...f } = i, u = Ei(null), g = Ei(), m = () => {
    u.current && (g.current = new Qe(u.current, {
      type: r,
      data: gc(a, o),
      options: l && {
        ...l
      },
      plugins: c
    }), Qn(t, g.current));
  }, p = () => {
    Qn(t, null), g.current && (g.current.destroy(), g.current = null);
  };
  return dt(() => {
    !s && g.current && l && uc(g.current, l);
  }, [
    s,
    l
  ]), dt(() => {
    !s && g.current && Bs(g.current.config.data, a.labels);
  }, [
    s,
    a.labels
  ]), dt(() => {
    !s && g.current && a.datasets && Ws(g.current.config.data, a.datasets, o);
  }, [
    s,
    a.datasets
  ]), dt(() => {
    g.current && (s ? (p(), setTimeout(m)) : g.current.update(d));
  }, [
    s,
    l,
    a.labels,
    a.datasets,
    d
  ]), dt(() => {
    g.current && (p(), setTimeout(m));
  }, [
    r
  ]), dt(() => (m(), () => p()), []), /* @__PURE__ */ gt.createElement("canvas", Object.assign({
    ref: u,
    role: "img",
    height: e,
    width: n
  }, f), h);
}
const mc = /* @__PURE__ */ bi(pc);
function bc(i, t) {
  return Qe.register(t), /* @__PURE__ */ bi((e, n) => /* @__PURE__ */ gt.createElement(mc, Object.assign({}, e, {
    ref: n,
    type: i
  })));
}
const xc = /* @__PURE__ */ bc("pie", fi);
Qe.register(Jt, Xl, zl);
const _c = ({ EventRSVP: i }) => {
  const t = {
    labels: ["Attending", "Not Attending", "Maybe", "No Response"],
    datasets: [
      {
        // data: [1, 1, 1, 1],
        label: " of Votes",
        data: [
          i == null ? void 0 : i.attending,
          i == null ? void 0 : i.maybe,
          i == null ? void 0 : i.notAttending,
          100
        ],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "gray"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "gray"]
      }
    ]
  };
  return /* @__PURE__ */ _.jsx("div", { className: "piechartcomponent", children: /* @__PURE__ */ _.jsx(xc, { data: t }) });
}, Pc = () => {
  var v, y, S;
  const i = Zs(), { id: t } = Gs(), [e, n] = ht(), [s, o] = ht(!1), r = Zn(), [a, l] = ht(!1), [c, h] = ht(), [d, f] = ht([]), [u, g] = ht(), [m, p] = ht();
  let b = Le((M) => M.AdminMasjid), x = Le((M) => M.admin);
  dt(() => {
    t && i(oo(t)).then((k) => {
      k.message === "Success" ? (console.log(k), n(k.data), f(k.data.eventPhotos), g(k.data), w(k.data._id)) : ai(
        !0,
        "error",
        `Failed To Fetch :${k.message}`,
        i
      );
    });
  }, [t]);
  const w = (M) => {
    i(ro(M)).then((C) => {
      C.data.data, Object.fromEntries(
        Object.entries(C.data.data).filter(([P, O]) => O !== 0)
      ), p(C.data.data);
    });
  };
  return dt(() => {
    let M = x.masjids[0];
    h(M);
  }, [c]), dt(() => {
    x != null && x.masjids[0] && i(Js(x.masjids[0])).then((k) => {
      k.message == "Success" && l(k.data);
    });
  }, [x == null ? void 0 : x.masjids[0]]), /* @__PURE__ */ _.jsx("div", { className: "EventProfileContainer", children: /* @__PURE__ */ _.jsxs("div", { className: "EventProfileMainContainer", children: [
    /* @__PURE__ */ _.jsx("div", { className: "EventProfileTopContainer", children: /* @__PURE__ */ _.jsx("div", { className: "EventProfileCancelBoxContainer", children: /* @__PURE__ */ _.jsx(
      eo,
      {
        className: "MasjidEventsCancelIcon",
        onClick: (M) => {
          s ? o(!1) : r("/feed");
        }
      }
    ) }) }),
    /* @__PURE__ */ _.jsx("div", { className: "EventProfileBottomContaienr", children: s ? /* @__PURE__ */ _.jsx(
      no,
      {
        ComponentPurpose: "Update",
        EventDetails: e,
        setEventDetails: n,
        setIsUpdating: o,
        setEventPhotos: f,
        EventPhotos: d
      }
    ) : /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
      /* @__PURE__ */ _.jsx("div", { className: "EventProfileInforContainer", children: e && /* @__PURE__ */ _.jsx(
        Do,
        {
          EventDetails: e,
          EventPhotos: d,
          setIsUpdating: o,
          CurrentEventDetails: u,
          AdminMasjid: a
        }
      ) }),
      /* @__PURE__ */ _.jsxs("div", { className: "EventProfilePictureMainContainer", children: [
        /* @__PURE__ */ _.jsxs("div", { className: "SharingButton", children: [
          /* @__PURE__ */ _.jsx("div", { className: "ShareOn", children: "Share On" }),
          /* @__PURE__ */ _.jsxs("div", { className: "SharingButtons", children: [
            /* @__PURE__ */ _.jsx("div", { className: "FacebookSharingButton", children: /* @__PURE__ */ _.jsx(
              ts,
              {
                url: (d == null ? void 0 : d.length) > 0 ? (v = d[0]) == null ? void 0 : v.url : "www.connectMazjid.com",
                children: /* @__PURE__ */ _.jsx(Jn, { size: 32, round: !0 })
              }
            ) }),
            /* @__PURE__ */ _.jsx("div", { className: "FacebookSharingButton", children: /* @__PURE__ */ _.jsx(
              ss,
              {
                url: (d == null ? void 0 : d.length) > 0 ? (y = d[0]) == null ? void 0 : y.url : "www.connectMazjid.com",
                title: `${e == null ? void 0 : e.eventName} will be happening at ${b.masjidName}`,
                children: /* @__PURE__ */ _.jsx(ns, { size: 32, round: !0 })
              }
            ) }),
            /* @__PURE__ */ _.jsx("div", { className: "FacebookSharingButton", children: /* @__PURE__ */ _.jsx(
              is,
              {
                url: (d == null ? void 0 : d.length) > 0 ? (S = d[0]) == null ? void 0 : S.url : "www.connectMazjid.com",
                title: `${e == null ? void 0 : e.eventName} will be happening at ${b.masjidName}`,
                children: /* @__PURE__ */ _.jsx(es, { size: 32, round: !0 })
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ _.jsx("div", { className: "EventProfilePictureContainer", children: /* @__PURE__ */ _.jsx(
          lo,
          {
            ParentComponentType: "Event",
            Event: e,
            EventPhotos: d
          }
        ) }),
        /* @__PURE__ */ _.jsx("div", { className: "EvetRSVP", children: m && /* @__PURE__ */ _.jsx(_.Fragment, { children: /* @__PURE__ */ _.jsx(_c, { EventRSVP: m }) }) })
      ] })
    ] }) })
  ] }) });
};
export {
  Pc as default
};
