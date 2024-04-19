import { u as Ci, j as ve } from "./index-CHYS0LqX.mjs";
import { useState as yi } from "react";
/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
var Rn = 1252, Di = [874, 932, 936, 949, 950, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1e4], Jt = {
  /*::[*/
  0: 1252,
  /* ANSI */
  /*::[*/
  1: 65001,
  /* DEFAULT */
  /*::[*/
  2: 65001,
  /* SYMBOL */
  /*::[*/
  77: 1e4,
  /* MAC */
  /*::[*/
  128: 932,
  /* SHIFTJIS */
  /*::[*/
  129: 949,
  /* HANGUL */
  /*::[*/
  130: 1361,
  /* JOHAB */
  /*::[*/
  134: 936,
  /* GB2312 */
  /*::[*/
  136: 950,
  /* CHINESEBIG5 */
  /*::[*/
  161: 1253,
  /* GREEK */
  /*::[*/
  162: 1254,
  /* TURKISH */
  /*::[*/
  163: 1258,
  /* VIETNAMESE */
  /*::[*/
  177: 1255,
  /* HEBREW */
  /*::[*/
  178: 1256,
  /* ARABIC */
  /*::[*/
  186: 1257,
  /* BALTIC */
  /*::[*/
  204: 1251,
  /* RUSSIAN */
  /*::[*/
  222: 874,
  /* THAI */
  /*::[*/
  238: 1250,
  /* EASTEUROPE */
  /*::[*/
  255: 1252,
  /* OEM */
  /*::[*/
  69: 6969
  /* MISC */
}, Zt = function(e) {
  Di.indexOf(e) != -1 && (Rn = Jt[0] = e);
};
function Oi() {
  Zt(1252);
}
var wr = function(e) {
  Zt(e);
};
function In() {
  wr(1200), Oi();
}
function C0(e) {
  for (var a = [], r = 0, n = e.length; r < n; ++r)
    a[r] = e.charCodeAt(r);
  return a;
}
function Ri(e) {
  for (var a = [], r = 0; r < e.length >> 1; ++r)
    a[r] = String.fromCharCode(e.charCodeAt(2 * r) + (e.charCodeAt(2 * r + 1) << 8));
  return a.join("");
}
function Nn(e) {
  for (var a = [], r = 0; r < e.length >> 1; ++r)
    a[r] = String.fromCharCode(e.charCodeAt(2 * r + 1) + (e.charCodeAt(2 * r) << 8));
  return a.join("");
}
var Da = function(e) {
  var a = e.charCodeAt(0), r = e.charCodeAt(1);
  return a == 255 && r == 254 ? Ri(e.slice(2)) : a == 254 && r == 255 ? Nn(e.slice(2)) : a == 65279 ? e.slice(1) : e;
}, tt = function(a) {
  return String.fromCharCode(a);
}, y0 = function(a) {
  return String.fromCharCode(a);
}, Xr, zr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function D0(e) {
  for (var a = "", r = 0, n = 0, t = 0, s = 0, i = 0, c = 0, f = 0, l = 0; l < e.length; )
    r = e.charCodeAt(l++), s = r >> 2, n = e.charCodeAt(l++), i = (r & 3) << 4 | n >> 4, t = e.charCodeAt(l++), c = (n & 15) << 2 | t >> 6, f = t & 63, isNaN(n) ? c = f = 64 : isNaN(t) && (f = 64), a += zr.charAt(s) + zr.charAt(i) + zr.charAt(c) + zr.charAt(f);
  return a;
}
function ur(e) {
  var a = "", r = 0, n = 0, t = 0, s = 0, i = 0, c = 0, f = 0;
  e = e.replace(/[^\w\+\/\=]/g, "");
  for (var l = 0; l < e.length; )
    s = zr.indexOf(e.charAt(l++)), i = zr.indexOf(e.charAt(l++)), r = s << 2 | i >> 4, a += String.fromCharCode(r), c = zr.indexOf(e.charAt(l++)), n = (i & 15) << 4 | c >> 2, c !== 64 && (a += String.fromCharCode(n)), f = zr.indexOf(e.charAt(l++)), t = (c & 3) << 6 | f, f !== 64 && (a += String.fromCharCode(t));
  return a;
}
var me = /* @__PURE__ */ function() {
  return typeof Buffer < "u" && typeof process < "u" && typeof process.versions < "u" && !!process.versions.node;
}(), ca = /* @__PURE__ */ function() {
  if (typeof Buffer < "u") {
    var e = !Buffer.from;
    if (!e)
      try {
        Buffer.from("foo", "utf8");
      } catch {
        e = !0;
      }
    return e ? function(a, r) {
      return r ? new Buffer(a, r) : new Buffer(a);
    } : Buffer.from.bind(Buffer);
  }
  return function() {
  };
}();
function Yr(e) {
  return me ? Buffer.alloc ? Buffer.alloc(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
function O0(e) {
  return me ? Buffer.allocUnsafe ? Buffer.allocUnsafe(e) : new Buffer(e) : typeof Uint8Array < "u" ? new Uint8Array(e) : new Array(e);
}
var kr = function(a) {
  return me ? ca(a, "binary") : a.split("").map(function(r) {
    return r.charCodeAt(0) & 255;
  });
};
function fa(e) {
  if (Array.isArray(e))
    return e.map(function(n) {
      return String.fromCharCode(n);
    }).join("");
  for (var a = [], r = 0; r < e.length; ++r)
    a[r] = String.fromCharCode(e[r]);
  return a.join("");
}
function qt(e) {
  if (typeof ArrayBuffer > "u")
    throw new Error("Unsupported");
  if (e instanceof ArrayBuffer)
    return qt(new Uint8Array(e));
  for (var a = new Array(e.length), r = 0; r < e.length; ++r)
    a[r] = e[r];
  return a;
}
var $r = me ? function(e) {
  return Buffer.concat(e.map(function(a) {
    return Buffer.isBuffer(a) ? a : ca(a);
  }));
} : function(e) {
  if (typeof Uint8Array < "u") {
    var a = 0, r = 0;
    for (a = 0; a < e.length; ++a)
      r += e[a].length;
    var n = new Uint8Array(r), t = 0;
    for (a = 0, r = 0; a < e.length; r += t, ++a)
      if (t = e[a].length, e[a] instanceof Uint8Array)
        n.set(e[a], r);
      else {
        if (typeof e[a] == "string")
          throw "wtf";
        n.set(new Uint8Array(e[a]), r);
      }
    return n;
  }
  return [].concat.apply([], e.map(function(s) {
    return Array.isArray(s) ? s : [].slice.call(s);
  }));
};
function Ii(e) {
  for (var a = [], r = 0, n = e.length + 250, t = Yr(e.length + 255), s = 0; s < e.length; ++s) {
    var i = e.charCodeAt(s);
    if (i < 128)
      t[r++] = i;
    else if (i < 2048)
      t[r++] = 192 | i >> 6 & 31, t[r++] = 128 | i & 63;
    else if (i >= 55296 && i < 57344) {
      i = (i & 1023) + 64;
      var c = e.charCodeAt(++s) & 1023;
      t[r++] = 240 | i >> 8 & 7, t[r++] = 128 | i >> 2 & 63, t[r++] = 128 | c >> 6 & 15 | (i & 3) << 4, t[r++] = 128 | c & 63;
    } else
      t[r++] = 224 | i >> 12 & 15, t[r++] = 128 | i >> 6 & 63, t[r++] = 128 | i & 63;
    r > n && (a.push(t.slice(0, r)), r = 0, t = Yr(65535), n = 65530);
  }
  return a.push(t.slice(0, r)), $r(a);
}
var ir = /\u0000/g, Oa = /[\u0001-\u0006]/g;
function pa(e) {
  for (var a = "", r = e.length - 1; r >= 0; )
    a += e.charAt(r--);
  return a;
}
function Fr(e, a) {
  var r = "" + e;
  return r.length >= a ? r : Oe("0", a - r.length) + r;
}
function Qt(e, a) {
  var r = "" + e;
  return r.length >= a ? r : Oe(" ", a - r.length) + r;
}
function ut(e, a) {
  var r = "" + e;
  return r.length >= a ? r : r + Oe(" ", a - r.length);
}
function Ni(e, a) {
  var r = "" + Math.round(e);
  return r.length >= a ? r : Oe("0", a - r.length) + r;
}
function Pi(e, a) {
  var r = "" + e;
  return r.length >= a ? r : Oe("0", a - r.length) + r;
}
var R0 = /* @__PURE__ */ Math.pow(2, 32);
function xa(e, a) {
  if (e > R0 || e < -R0)
    return Ni(e, a);
  var r = Math.round(e);
  return Pi(r, a);
}
function xt(e, a) {
  return a = a || 0, e.length >= 7 + a && (e.charCodeAt(a) | 32) === 103 && (e.charCodeAt(a + 1) | 32) === 101 && (e.charCodeAt(a + 2) | 32) === 110 && (e.charCodeAt(a + 3) | 32) === 101 && (e.charCodeAt(a + 4) | 32) === 114 && (e.charCodeAt(a + 5) | 32) === 97 && (e.charCodeAt(a + 6) | 32) === 108;
}
var I0 = [
  ["Sun", "Sunday"],
  ["Mon", "Monday"],
  ["Tue", "Tuesday"],
  ["Wed", "Wednesday"],
  ["Thu", "Thursday"],
  ["Fri", "Friday"],
  ["Sat", "Saturday"]
], Dt = [
  ["J", "Jan", "January"],
  ["F", "Feb", "February"],
  ["M", "Mar", "March"],
  ["A", "Apr", "April"],
  ["M", "May", "May"],
  ["J", "Jun", "June"],
  ["J", "Jul", "July"],
  ["A", "Aug", "August"],
  ["S", "Sep", "September"],
  ["O", "Oct", "October"],
  ["N", "Nov", "November"],
  ["D", "Dec", "December"]
];
function Li(e) {
  return e || (e = {}), e[0] = "General", e[1] = "0", e[2] = "0.00", e[3] = "#,##0", e[4] = "#,##0.00", e[9] = "0%", e[10] = "0.00%", e[11] = "0.00E+00", e[12] = "# ?/?", e[13] = "# ??/??", e[14] = "m/d/yy", e[15] = "d-mmm-yy", e[16] = "d-mmm", e[17] = "mmm-yy", e[18] = "h:mm AM/PM", e[19] = "h:mm:ss AM/PM", e[20] = "h:mm", e[21] = "h:mm:ss", e[22] = "m/d/yy h:mm", e[37] = "#,##0 ;(#,##0)", e[38] = "#,##0 ;[Red](#,##0)", e[39] = "#,##0.00;(#,##0.00)", e[40] = "#,##0.00;[Red](#,##0.00)", e[45] = "mm:ss", e[46] = "[h]:mm:ss", e[47] = "mmss.0", e[48] = "##0.0E+0", e[49] = "@", e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "', e;
}
var de = {
  0: "General",
  1: "0",
  2: "0.00",
  3: "#,##0",
  4: "#,##0.00",
  9: "0%",
  10: "0.00%",
  11: "0.00E+00",
  12: "# ?/?",
  13: "# ??/??",
  14: "m/d/yy",
  15: "d-mmm-yy",
  16: "d-mmm",
  17: "mmm-yy",
  18: "h:mm AM/PM",
  19: "h:mm:ss AM/PM",
  20: "h:mm",
  21: "h:mm:ss",
  22: "m/d/yy h:mm",
  37: "#,##0 ;(#,##0)",
  38: "#,##0 ;[Red](#,##0)",
  39: "#,##0.00;(#,##0.00)",
  40: "#,##0.00;[Red](#,##0.00)",
  45: "mm:ss",
  46: "[h]:mm:ss",
  47: "mmss.0",
  48: "##0.0E+0",
  49: "@",
  56: '"上午/下午 "hh"時"mm"分"ss"秒 "'
}, N0 = {
  5: 37,
  6: 38,
  7: 39,
  8: 40,
  //  5 -> 37 ...  8 -> 40
  23: 0,
  24: 0,
  25: 0,
  26: 0,
  // 23 ->  0 ... 26 ->  0
  27: 14,
  28: 14,
  29: 14,
  30: 14,
  31: 14,
  // 27 -> 14 ... 31 -> 14
  50: 14,
  51: 14,
  52: 14,
  53: 14,
  54: 14,
  // 50 -> 14 ... 58 -> 14
  55: 14,
  56: 14,
  57: 14,
  58: 14,
  59: 1,
  60: 2,
  61: 3,
  62: 4,
  // 59 ->  1 ... 62 ->  4
  67: 9,
  68: 10,
  // 67 ->  9 ... 68 -> 10
  69: 12,
  70: 13,
  71: 14,
  // 69 -> 12 ... 71 -> 14
  72: 14,
  73: 15,
  74: 16,
  75: 17,
  // 72 -> 14 ... 75 -> 17
  76: 20,
  77: 21,
  78: 22,
  // 76 -> 20 ... 78 -> 22
  79: 45,
  80: 46,
  81: 47,
  // 79 -> 45 ... 81 -> 47
  82: 0
  // 82 ->  0 ... 65536 -> 0 (omitted)
}, Mi = {
  //  5 -- Currency,   0 decimal, black negative
  5: '"$"#,##0_);\\("$"#,##0\\)',
  63: '"$"#,##0_);\\("$"#,##0\\)',
  //  6 -- Currency,   0 decimal, red   negative
  6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  //  7 -- Currency,   2 decimal, black negative
  7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  //  8 -- Currency,   2 decimal, red   negative
  8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  // 41 -- Accounting, 0 decimal, No Symbol
  41: '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',
  // 42 -- Accounting, 0 decimal, $  Symbol
  42: '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',
  // 43 -- Accounting, 2 decimal, No Symbol
  43: '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',
  // 44 -- Accounting, 2 decimal, $  Symbol
  44: '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'
};
function dt(e, a, r) {
  for (var n = e < 0 ? -1 : 1, t = e * n, s = 0, i = 1, c = 0, f = 1, l = 0, o = 0, h = Math.floor(t); l < a && (h = Math.floor(t), c = h * i + s, o = h * l + f, !(t - h < 5e-8)); )
    t = 1 / (t - h), s = i, i = c, f = l, l = o;
  if (o > a && (l > a ? (o = f, c = s) : (o = l, c = i)), !r)
    return [0, n * c, o];
  var x = Math.floor(n * c / o);
  return [x, n * c - x * o, o];
}
function ra(e, a, r) {
  if (e > 2958465 || e < 0)
    return null;
  var n = e | 0, t = Math.floor(86400 * (e - n)), s = 0, i = [], c = { D: n, T: t, u: 86400 * (e - n) - t, y: 0, m: 0, d: 0, H: 0, M: 0, S: 0, q: 0 };
  if (Math.abs(c.u) < 1e-6 && (c.u = 0), a && a.date1904 && (n += 1462), c.u > 0.9999 && (c.u = 0, ++t == 86400 && (c.T = t = 0, ++n, ++c.D)), n === 60)
    i = r ? [1317, 10, 29] : [1900, 2, 29], s = 3;
  else if (n === 0)
    i = r ? [1317, 8, 29] : [1900, 1, 0], s = 6;
  else {
    n > 60 && --n;
    var f = new Date(1900, 0, 1);
    f.setDate(f.getDate() + n - 1), i = [f.getFullYear(), f.getMonth() + 1, f.getDate()], s = f.getDay(), n < 60 && (s = (s + 6) % 7), r && (s = Wi(f, i));
  }
  return c.y = i[0], c.m = i[1], c.d = i[2], c.S = t % 60, t = Math.floor(t / 60), c.M = t % 60, t = Math.floor(t / 60), c.H = t, c.q = s, c;
}
var Pn = /* @__PURE__ */ new Date(1899, 11, 31, 0, 0, 0), Bi = /* @__PURE__ */ Pn.getTime(), bi = /* @__PURE__ */ new Date(1900, 2, 1, 0, 0, 0);
function Ln(e, a) {
  var r = /* @__PURE__ */ e.getTime();
  return a ? r -= 1461 * 24 * 60 * 60 * 1e3 : e >= bi && (r += 24 * 60 * 60 * 1e3), (r - (Bi + (/* @__PURE__ */ e.getTimezoneOffset() - /* @__PURE__ */ Pn.getTimezoneOffset()) * 6e4)) / (24 * 60 * 60 * 1e3);
}
function e0(e) {
  return e.indexOf(".") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/, "$1");
}
function Ui(e) {
  return e.indexOf("E") == -1 ? e : e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/, "$1E").replace(/(E[+-])(\d)$/, "$10$2");
}
function Hi(e) {
  var a = e < 0 ? 12 : 11, r = e0(e.toFixed(12));
  return r.length <= a || (r = e.toPrecision(10), r.length <= a) ? r : e.toExponential(5);
}
function Vi(e) {
  var a = e0(e.toFixed(11));
  return a.length > (e < 0 ? 12 : 11) || a === "0" || a === "-0" ? e.toPrecision(6) : a;
}
function Wa(e) {
  var a = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E), r;
  return a >= -4 && a <= -1 ? r = e.toPrecision(10 + a) : Math.abs(a) <= 9 ? r = Hi(e) : a === 10 ? r = e.toFixed(10).substr(0, 12) : r = Vi(e), e0(Ui(r.toUpperCase()));
}
function na(e, a) {
  switch (typeof e) {
    case "string":
      return e;
    case "boolean":
      return e ? "TRUE" : "FALSE";
    case "number":
      return (e | 0) === e ? e.toString(10) : Wa(e);
    case "undefined":
      return "";
    case "object":
      if (e == null)
        return "";
      if (e instanceof Date)
        return mr(14, Ln(e, a && a.date1904), a);
  }
  throw new Error("unsupported value in General format: " + e);
}
function Wi(e, a) {
  a[0] -= 581;
  var r = e.getDay();
  return e < 60 && (r = (r + 6) % 7), r;
}
function Gi(e, a, r, n) {
  var t = "", s = 0, i = 0, c = r.y, f, l = 0;
  switch (e) {
    case 98:
      c = r.y + 543;
    case 121:
      switch (a.length) {
        case 1:
        case 2:
          f = c % 100, l = 2;
          break;
        default:
          f = c % 1e4, l = 4;
          break;
      }
      break;
    case 109:
      switch (a.length) {
        case 1:
        case 2:
          f = r.m, l = a.length;
          break;
        case 3:
          return Dt[r.m - 1][1];
        case 5:
          return Dt[r.m - 1][0];
        default:
          return Dt[r.m - 1][2];
      }
      break;
    case 100:
      switch (a.length) {
        case 1:
        case 2:
          f = r.d, l = a.length;
          break;
        case 3:
          return I0[r.q][0];
        default:
          return I0[r.q][1];
      }
      break;
    case 104:
      switch (a.length) {
        case 1:
        case 2:
          f = 1 + (r.H + 11) % 12, l = a.length;
          break;
        default:
          throw "bad hour format: " + a;
      }
      break;
    case 72:
      switch (a.length) {
        case 1:
        case 2:
          f = r.H, l = a.length;
          break;
        default:
          throw "bad hour format: " + a;
      }
      break;
    case 77:
      switch (a.length) {
        case 1:
        case 2:
          f = r.M, l = a.length;
          break;
        default:
          throw "bad minute format: " + a;
      }
      break;
    case 115:
      if (a != "s" && a != "ss" && a != ".0" && a != ".00" && a != ".000")
        throw "bad second format: " + a;
      return r.u === 0 && (a == "s" || a == "ss") ? Fr(r.S, a.length) : (n >= 2 ? i = n === 3 ? 1e3 : 100 : i = n === 1 ? 10 : 1, s = Math.round(i * (r.S + r.u)), s >= 60 * i && (s = 0), a === "s" ? s === 0 ? "0" : "" + s / i : (t = Fr(s, 2 + n), a === "ss" ? t.substr(0, 2) : "." + t.substr(2, a.length - 1)));
    case 90:
      switch (a) {
        case "[h]":
        case "[hh]":
          f = r.D * 24 + r.H;
          break;
        case "[m]":
        case "[mm]":
          f = (r.D * 24 + r.H) * 60 + r.M;
          break;
        case "[s]":
        case "[ss]":
          f = ((r.D * 24 + r.H) * 60 + r.M) * 60 + Math.round(r.S + r.u);
          break;
        default:
          throw "bad abstime format: " + a;
      }
      l = a.length === 3 ? 1 : 2;
      break;
    case 101:
      f = c, l = 1;
      break;
  }
  var o = l > 0 ? Fr(f, l) : "";
  return o;
}
function jr(e) {
  var a = 3;
  if (e.length <= a)
    return e;
  for (var r = e.length % a, n = e.substr(0, r); r != e.length; r += a)
    n += (n.length > 0 ? "," : "") + e.substr(r, a);
  return n;
}
var Mn = /%/g;
function Xi(e, a, r) {
  var n = a.replace(Mn, ""), t = a.length - n.length;
  return Br(e, n, r * Math.pow(10, 2 * t)) + Oe("%", t);
}
function $i(e, a, r) {
  for (var n = a.length - 1; a.charCodeAt(n - 1) === 44; )
    --n;
  return Br(e, a.substr(0, n), r / Math.pow(10, 3 * (a.length - n)));
}
function Bn(e, a) {
  var r, n = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (a == 0)
      return "0.0E+0";
    if (a < 0)
      return "-" + Bn(e, -a);
    var t = e.indexOf(".");
    t === -1 && (t = e.indexOf("E"));
    var s = Math.floor(Math.log(a) * Math.LOG10E) % t;
    if (s < 0 && (s += t), r = (a / Math.pow(10, s)).toPrecision(n + 1 + (t + s) % t), r.indexOf("e") === -1) {
      var i = Math.floor(Math.log(a) * Math.LOG10E);
      for (r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (i - r.length + s) : r += "E+" + (i - s); r.substr(0, 2) === "0."; )
        r = r.charAt(0) + r.substr(2, t) + "." + r.substr(2 + t), r = r.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
      r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(c, f, l, o) {
      return f + l + o.substr(0, (t + s) % t) + "." + o.substr(s) + "E";
    });
  } else
    r = a.toExponential(n);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
var bn = /# (\?+)( ?)\/( ?)(\d+)/;
function zi(e, a, r) {
  var n = parseInt(e[4], 10), t = Math.round(a * n), s = Math.floor(t / n), i = t - s * n, c = n;
  return r + (s === 0 ? "" : "" + s) + " " + (i === 0 ? Oe(" ", e[1].length + 1 + e[4].length) : Qt(i, e[1].length) + e[2] + "/" + e[3] + Fr(c, e[4].length));
}
function ji(e, a, r) {
  return r + (a === 0 ? "" : "" + a) + Oe(" ", e[1].length + 2 + e[4].length);
}
var Un = /^#*0*\.([0#]+)/, Hn = /\).*[0#]/, Vn = /\(###\) ###\\?-####/;
function tr(e) {
  for (var a = "", r, n = 0; n != e.length; ++n)
    switch (r = e.charCodeAt(n)) {
      case 35:
        break;
      case 63:
        a += " ";
        break;
      case 48:
        a += "0";
        break;
      default:
        a += String.fromCharCode(r);
    }
  return a;
}
function P0(e, a) {
  var r = Math.pow(10, a);
  return "" + Math.round(e * r) / r;
}
function L0(e, a) {
  var r = e - Math.floor(e), n = Math.pow(10, a);
  return a < ("" + Math.round(r * n)).length ? 0 : Math.round(r * n);
}
function Ki(e, a) {
  return a < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, a))).length ? 1 : 0;
}
function Yi(e) {
  return e < 2147483647 && e > -2147483648 ? "" + (e >= 0 ? e | 0 : e - 1 | 0) : "" + Math.floor(e);
}
function pr(e, a, r) {
  if (e.charCodeAt(0) === 40 && !a.match(Hn)) {
    var n = a.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? pr("n", n, r) : "(" + pr("n", n, -r) + ")";
  }
  if (a.charCodeAt(a.length - 1) === 44)
    return $i(e, a, r);
  if (a.indexOf("%") !== -1)
    return Xi(e, a, r);
  if (a.indexOf("E") !== -1)
    return Bn(a, r);
  if (a.charCodeAt(0) === 36)
    return "$" + pr(e, a.substr(a.charAt(1) == " " ? 2 : 1), r);
  var t, s, i, c, f = Math.abs(r), l = r < 0 ? "-" : "";
  if (a.match(/^00+$/))
    return l + xa(f, a.length);
  if (a.match(/^[#?]+$/))
    return t = xa(r, 0), t === "0" && (t = ""), t.length > a.length ? t : tr(a.substr(0, a.length - t.length)) + t;
  if (s = a.match(bn))
    return zi(s, f, l);
  if (a.match(/^#+0+$/))
    return l + xa(f, a.length - a.indexOf("0"));
  if (s = a.match(Un))
    return t = P0(r, s[1].length).replace(/^([^\.]+)$/, "$1." + tr(s[1])).replace(/\.$/, "." + tr(s[1])).replace(/\.(\d*)$/, function(v, u) {
      return "." + u + Oe("0", tr(
        /*::(*/
        s[1]
      ).length - u.length);
    }), a.indexOf("0.") !== -1 ? t : t.replace(/^0\./, ".");
  if (a = a.replace(/^#+([0.])/, "$1"), s = a.match(/^(0*)\.(#*)$/))
    return l + P0(f, s[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, s[1].length ? "0." : ".");
  if (s = a.match(/^#{1,3},##0(\.?)$/))
    return l + jr(xa(f, 0));
  if (s = a.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + pr(e, a, -r) : jr("" + (Math.floor(r) + Ki(r, s[1].length))) + "." + Fr(L0(r, s[1].length), s[1].length);
  if (s = a.match(/^#,#*,#0/))
    return pr(e, a.replace(/^#,#*,/, ""), r);
  if (s = a.match(/^([0#]+)(\\?-([0#]+))+$/))
    return t = pa(pr(e, a.replace(/[\\-]/g, ""), r)), i = 0, pa(pa(a.replace(/\\/g, "")).replace(/[0#]/g, function(v) {
      return i < t.length ? t.charAt(i++) : v === "0" ? "0" : "";
    }));
  if (a.match(Vn))
    return t = pr(e, "##########", r), "(" + t.substr(0, 3) + ") " + t.substr(3, 3) + "-" + t.substr(6);
  var o = "";
  if (s = a.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return i = Math.min(
      /*::String(*/
      s[4].length,
      7
    ), c = dt(f, Math.pow(10, i) - 1, !1), t = "" + l, o = Br(
      "n",
      /*::String(*/
      s[1],
      c[1]
    ), o.charAt(o.length - 1) == " " && (o = o.substr(0, o.length - 1) + "0"), t += o + /*::String(*/
    s[2] + "/" + /*::String(*/
    s[3], o = ut(c[2], i), o.length < s[4].length && (o = tr(s[4].substr(s[4].length - o.length)) + o), t += o, t;
  if (s = a.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return i = Math.min(Math.max(s[1].length, s[4].length), 7), c = dt(f, Math.pow(10, i) - 1, !0), l + (c[0] || (c[1] ? "" : "0")) + " " + (c[1] ? Qt(c[1], i) + s[2] + "/" + s[3] + ut(c[2], i) : Oe(" ", 2 * i + 1 + s[2].length + s[3].length));
  if (s = a.match(/^[#0?]+$/))
    return t = xa(r, 0), a.length <= t.length ? t : tr(a.substr(0, a.length - t.length)) + t;
  if (s = a.match(/^([#0?]+)\.([#0]+)$/)) {
    t = "" + r.toFixed(Math.min(s[2].length, 10)).replace(/([^0])0+$/, "$1"), i = t.indexOf(".");
    var h = a.indexOf(".") - i, x = a.length - t.length - h;
    return tr(a.substr(0, h) + t + a.substr(a.length - x));
  }
  if (s = a.match(/^00,000\.([#0]*0)$/))
    return i = L0(r, s[1].length), r < 0 ? "-" + pr(e, a, -r) : jr(Yi(r)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(v) {
      return "00," + (v.length < 3 ? Fr(0, 3 - v.length) : "") + v;
    }) + "." + Fr(i, s[1].length);
  switch (a) {
    case "###,##0.00":
      return pr(e, "#,##0.00", r);
    case "###,###":
    case "##,###":
    case "#,###":
      var d = jr(xa(f, 0));
      return d !== "0" ? l + d : "";
    case "###,###.00":
      return pr(e, "###,##0.00", r).replace(/^0\./, ".");
    case "#,###.00":
      return pr(e, "#,##0.00", r).replace(/^0\./, ".");
  }
  throw new Error("unsupported format |" + a + "|");
}
function Ji(e, a, r) {
  for (var n = a.length - 1; a.charCodeAt(n - 1) === 44; )
    --n;
  return Br(e, a.substr(0, n), r / Math.pow(10, 3 * (a.length - n)));
}
function Zi(e, a, r) {
  var n = a.replace(Mn, ""), t = a.length - n.length;
  return Br(e, n, r * Math.pow(10, 2 * t)) + Oe("%", t);
}
function Wn(e, a) {
  var r, n = e.indexOf("E") - e.indexOf(".") - 1;
  if (e.match(/^#+0.0E\+0$/)) {
    if (a == 0)
      return "0.0E+0";
    if (a < 0)
      return "-" + Wn(e, -a);
    var t = e.indexOf(".");
    t === -1 && (t = e.indexOf("E"));
    var s = Math.floor(Math.log(a) * Math.LOG10E) % t;
    if (s < 0 && (s += t), r = (a / Math.pow(10, s)).toPrecision(n + 1 + (t + s) % t), !r.match(/[Ee]/)) {
      var i = Math.floor(Math.log(a) * Math.LOG10E);
      r.indexOf(".") === -1 ? r = r.charAt(0) + "." + r.substr(1) + "E+" + (i - r.length + s) : r += "E+" + (i - s), r = r.replace(/\+-/, "-");
    }
    r = r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function(c, f, l, o) {
      return f + l + o.substr(0, (t + s) % t) + "." + o.substr(s) + "E";
    });
  } else
    r = a.toExponential(n);
  return e.match(/E\+00$/) && r.match(/e[+-]\d$/) && (r = r.substr(0, r.length - 1) + "0" + r.charAt(r.length - 1)), e.match(/E\-/) && r.match(/e\+/) && (r = r.replace(/e\+/, "e")), r.replace("e", "E");
}
function Dr(e, a, r) {
  if (e.charCodeAt(0) === 40 && !a.match(Hn)) {
    var n = a.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
    return r >= 0 ? Dr("n", n, r) : "(" + Dr("n", n, -r) + ")";
  }
  if (a.charCodeAt(a.length - 1) === 44)
    return Ji(e, a, r);
  if (a.indexOf("%") !== -1)
    return Zi(e, a, r);
  if (a.indexOf("E") !== -1)
    return Wn(a, r);
  if (a.charCodeAt(0) === 36)
    return "$" + Dr(e, a.substr(a.charAt(1) == " " ? 2 : 1), r);
  var t, s, i, c, f = Math.abs(r), l = r < 0 ? "-" : "";
  if (a.match(/^00+$/))
    return l + Fr(f, a.length);
  if (a.match(/^[#?]+$/))
    return t = "" + r, r === 0 && (t = ""), t.length > a.length ? t : tr(a.substr(0, a.length - t.length)) + t;
  if (s = a.match(bn))
    return ji(s, f, l);
  if (a.match(/^#+0+$/))
    return l + Fr(f, a.length - a.indexOf("0"));
  if (s = a.match(Un))
    return t = ("" + r).replace(/^([^\.]+)$/, "$1." + tr(s[1])).replace(/\.$/, "." + tr(s[1])), t = t.replace(/\.(\d*)$/, function(v, u) {
      return "." + u + Oe("0", tr(s[1]).length - u.length);
    }), a.indexOf("0.") !== -1 ? t : t.replace(/^0\./, ".");
  if (a = a.replace(/^#+([0.])/, "$1"), s = a.match(/^(0*)\.(#*)$/))
    return l + ("" + f).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, s[1].length ? "0." : ".");
  if (s = a.match(/^#{1,3},##0(\.?)$/))
    return l + jr("" + f);
  if (s = a.match(/^#,##0\.([#0]*0)$/))
    return r < 0 ? "-" + Dr(e, a, -r) : jr("" + r) + "." + Oe("0", s[1].length);
  if (s = a.match(/^#,#*,#0/))
    return Dr(e, a.replace(/^#,#*,/, ""), r);
  if (s = a.match(/^([0#]+)(\\?-([0#]+))+$/))
    return t = pa(Dr(e, a.replace(/[\\-]/g, ""), r)), i = 0, pa(pa(a.replace(/\\/g, "")).replace(/[0#]/g, function(v) {
      return i < t.length ? t.charAt(i++) : v === "0" ? "0" : "";
    }));
  if (a.match(Vn))
    return t = Dr(e, "##########", r), "(" + t.substr(0, 3) + ") " + t.substr(3, 3) + "-" + t.substr(6);
  var o = "";
  if (s = a.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))
    return i = Math.min(
      /*::String(*/
      s[4].length,
      7
    ), c = dt(f, Math.pow(10, i) - 1, !1), t = "" + l, o = Br(
      "n",
      /*::String(*/
      s[1],
      c[1]
    ), o.charAt(o.length - 1) == " " && (o = o.substr(0, o.length - 1) + "0"), t += o + /*::String(*/
    s[2] + "/" + /*::String(*/
    s[3], o = ut(c[2], i), o.length < s[4].length && (o = tr(s[4].substr(s[4].length - o.length)) + o), t += o, t;
  if (s = a.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))
    return i = Math.min(Math.max(s[1].length, s[4].length), 7), c = dt(f, Math.pow(10, i) - 1, !0), l + (c[0] || (c[1] ? "" : "0")) + " " + (c[1] ? Qt(c[1], i) + s[2] + "/" + s[3] + ut(c[2], i) : Oe(" ", 2 * i + 1 + s[2].length + s[3].length));
  if (s = a.match(/^[#0?]+$/))
    return t = "" + r, a.length <= t.length ? t : tr(a.substr(0, a.length - t.length)) + t;
  if (s = a.match(/^([#0]+)\.([#0]+)$/)) {
    t = "" + r.toFixed(Math.min(s[2].length, 10)).replace(/([^0])0+$/, "$1"), i = t.indexOf(".");
    var h = a.indexOf(".") - i, x = a.length - t.length - h;
    return tr(a.substr(0, h) + t + a.substr(a.length - x));
  }
  if (s = a.match(/^00,000\.([#0]*0)$/))
    return r < 0 ? "-" + Dr(e, a, -r) : jr("" + r).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function(v) {
      return "00," + (v.length < 3 ? Fr(0, 3 - v.length) : "") + v;
    }) + "." + Fr(0, s[1].length);
  switch (a) {
    case "###,###":
    case "##,###":
    case "#,###":
      var d = jr("" + f);
      return d !== "0" ? l + d : "";
    default:
      if (a.match(/\.[0#?]*$/))
        return Dr(e, a.slice(0, a.lastIndexOf(".")), r) + tr(a.slice(a.lastIndexOf(".")));
  }
  throw new Error("unsupported format |" + a + "|");
}
function Br(e, a, r) {
  return (r | 0) === r ? Dr(e, a, r) : pr(e, a, r);
}
function qi(e) {
  for (var a = [], r = !1, n = 0, t = 0; n < e.length; ++n)
    switch (
      /*cc=*/
      e.charCodeAt(n)
    ) {
      case 34:
        r = !r;
        break;
      case 95:
      case 42:
      case 92:
        ++n;
        break;
      case 59:
        a[a.length] = e.substr(t, n - t), t = n + 1;
    }
  if (a[a.length] = e.substr(t), r === !0)
    throw new Error("Format |" + e + "| unterminated string ");
  return a;
}
var Gn = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;
function Ta(e) {
  for (var a = 0, r = "", n = ""; a < e.length; )
    switch (r = e.charAt(a)) {
      case "G":
        xt(e, a) && (a += 6), a++;
        break;
      case '"':
        for (
          ;
          /*cc=*/
          e.charCodeAt(++a) !== 34 && a < e.length;
        )
          ;
        ++a;
        break;
      case "\\":
        a += 2;
        break;
      case "_":
        a += 2;
        break;
      case "@":
        ++a;
        break;
      case "B":
      case "b":
        if (e.charAt(a + 1) === "1" || e.charAt(a + 1) === "2")
          return !0;
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        return !0;
      case "A":
      case "a":
      case "上":
        if (e.substr(a, 3).toUpperCase() === "A/P" || e.substr(a, 5).toUpperCase() === "AM/PM" || e.substr(a, 5).toUpperCase() === "上午/下午")
          return !0;
        ++a;
        break;
      case "[":
        for (n = r; e.charAt(a++) !== "]" && a < e.length; )
          n += e.charAt(a);
        if (n.match(Gn))
          return !0;
        break;
      case ".":
      case "0":
      case "#":
        for (; a < e.length && ("0#?.,E+-%".indexOf(r = e.charAt(++a)) > -1 || r == "\\" && e.charAt(a + 1) == "-" && "0#".indexOf(e.charAt(a + 2)) > -1); )
          ;
        break;
      case "?":
        for (; e.charAt(++a) === r; )
          ;
        break;
      case "*":
        ++a, (e.charAt(a) == " " || e.charAt(a) == "*") && ++a;
        break;
      case "(":
      case ")":
        ++a;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (; a < e.length && "0123456789".indexOf(e.charAt(++a)) > -1; )
          ;
        break;
      case " ":
        ++a;
        break;
      default:
        ++a;
        break;
    }
  return !1;
}
function Qi(e, a, r, n) {
  for (var t = [], s = "", i = 0, c = "", f = "t", l, o, h, x = "H"; i < e.length; )
    switch (c = e.charAt(i)) {
      case "G":
        if (!xt(e, i))
          throw new Error("unrecognized character " + c + " in " + e);
        t[t.length] = { t: "G", v: "General" }, i += 7;
        break;
      case '"':
        for (s = ""; (h = e.charCodeAt(++i)) !== 34 && i < e.length; )
          s += String.fromCharCode(h);
        t[t.length] = { t: "t", v: s }, ++i;
        break;
      case "\\":
        var d = e.charAt(++i), v = d === "(" || d === ")" ? d : "t";
        t[t.length] = { t: v, v: d }, ++i;
        break;
      case "_":
        t[t.length] = { t: "t", v: " " }, i += 2;
        break;
      case "@":
        t[t.length] = { t: "T", v: a }, ++i;
        break;
      case "B":
      case "b":
        if (e.charAt(i + 1) === "1" || e.charAt(i + 1) === "2") {
          if (l == null && (l = ra(a, r, e.charAt(i + 1) === "2"), l == null))
            return "";
          t[t.length] = { t: "X", v: e.substr(i, 2) }, f = c, i += 2;
          break;
        }
      case "M":
      case "D":
      case "Y":
      case "H":
      case "S":
      case "E":
        c = c.toLowerCase();
      case "m":
      case "d":
      case "y":
      case "h":
      case "s":
      case "e":
      case "g":
        if (a < 0 || l == null && (l = ra(a, r), l == null))
          return "";
        for (s = c; ++i < e.length && e.charAt(i).toLowerCase() === c; )
          s += c;
        c === "m" && f.toLowerCase() === "h" && (c = "M"), c === "h" && (c = x), t[t.length] = { t: c, v: s }, f = c;
        break;
      case "A":
      case "a":
      case "上":
        var u = { t: c, v: c };
        if (l == null && (l = ra(a, r)), e.substr(i, 3).toUpperCase() === "A/P" ? (l != null && (u.v = l.H >= 12 ? "P" : "A"), u.t = "T", x = "h", i += 3) : e.substr(i, 5).toUpperCase() === "AM/PM" ? (l != null && (u.v = l.H >= 12 ? "PM" : "AM"), u.t = "T", i += 5, x = "h") : e.substr(i, 5).toUpperCase() === "上午/下午" ? (l != null && (u.v = l.H >= 12 ? "下午" : "上午"), u.t = "T", i += 5, x = "h") : (u.t = "t", ++i), l == null && u.t === "T")
          return "";
        t[t.length] = u, f = c;
        break;
      case "[":
        for (s = c; e.charAt(i++) !== "]" && i < e.length; )
          s += e.charAt(i);
        if (s.slice(-1) !== "]")
          throw 'unterminated "[" block: |' + s + "|";
        if (s.match(Gn)) {
          if (l == null && (l = ra(a, r), l == null))
            return "";
          t[t.length] = { t: "Z", v: s.toLowerCase() }, f = s.charAt(1);
        } else
          s.indexOf("$") > -1 && (s = (s.match(/\$([^-\[\]]*)/) || [])[1] || "$", Ta(e) || (t[t.length] = { t: "t", v: s }));
        break;
      case ".":
        if (l != null) {
          for (s = c; ++i < e.length && (c = e.charAt(i)) === "0"; )
            s += c;
          t[t.length] = { t: "s", v: s };
          break;
        }
      case "0":
      case "#":
        for (s = c; ++i < e.length && "0#?.,E+-%".indexOf(c = e.charAt(i)) > -1; )
          s += c;
        t[t.length] = { t: "n", v: s };
        break;
      case "?":
        for (s = c; e.charAt(++i) === c; )
          s += c;
        t[t.length] = { t: c, v: s }, f = c;
        break;
      case "*":
        ++i, (e.charAt(i) == " " || e.charAt(i) == "*") && ++i;
        break;
      case "(":
      case ")":
        t[t.length] = { t: n === 1 ? "t" : c, v: c }, ++i;
        break;
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        for (s = c; i < e.length && "0123456789".indexOf(e.charAt(++i)) > -1; )
          s += e.charAt(i);
        t[t.length] = { t: "D", v: s };
        break;
      case " ":
        t[t.length] = { t: c, v: c }, ++i;
        break;
      case "$":
        t[t.length] = { t: "t", v: "$" }, ++i;
        break;
      default:
        if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(c) === -1)
          throw new Error("unrecognized character " + c + " in " + e);
        t[t.length] = { t: "t", v: c }, ++i;
        break;
    }
  var g = 0, S = 0, y;
  for (i = t.length - 1, f = "t"; i >= 0; --i)
    switch (t[i].t) {
      case "h":
      case "H":
        t[i].t = x, f = "h", g < 1 && (g = 1);
        break;
      case "s":
        (y = t[i].v.match(/\.0+$/)) && (S = Math.max(S, y[0].length - 1)), g < 3 && (g = 3);
      case "d":
      case "y":
      case "M":
      case "e":
        f = t[i].t;
        break;
      case "m":
        f === "s" && (t[i].t = "M", g < 2 && (g = 2));
        break;
      case "X":
        break;
      case "Z":
        g < 1 && t[i].v.match(/[Hh]/) && (g = 1), g < 2 && t[i].v.match(/[Mm]/) && (g = 2), g < 3 && t[i].v.match(/[Ss]/) && (g = 3);
    }
  switch (g) {
    case 0:
      break;
    case 1:
      l.u >= 0.5 && (l.u = 0, ++l.S), l.S >= 60 && (l.S = 0, ++l.M), l.M >= 60 && (l.M = 0, ++l.H);
      break;
    case 2:
      l.u >= 0.5 && (l.u = 0, ++l.S), l.S >= 60 && (l.S = 0, ++l.M);
      break;
  }
  var _ = "", N;
  for (i = 0; i < t.length; ++i)
    switch (t[i].t) {
      case "t":
      case "T":
      case " ":
      case "D":
        break;
      case "X":
        t[i].v = "", t[i].t = ";";
        break;
      case "d":
      case "m":
      case "y":
      case "h":
      case "H":
      case "M":
      case "s":
      case "e":
      case "b":
      case "Z":
        t[i].v = Gi(t[i].t.charCodeAt(0), t[i].v, l, S), t[i].t = "t";
        break;
      case "n":
      case "?":
        for (N = i + 1; t[N] != null && ((c = t[N].t) === "?" || c === "D" || (c === " " || c === "t") && t[N + 1] != null && (t[N + 1].t === "?" || t[N + 1].t === "t" && t[N + 1].v === "/") || t[i].t === "(" && (c === " " || c === "n" || c === ")") || c === "t" && (t[N].v === "/" || t[N].v === " " && t[N + 1] != null && t[N + 1].t == "?")); )
          t[i].v += t[N].v, t[N] = { v: "", t: ";" }, ++N;
        _ += t[i].v, i = N - 1;
        break;
      case "G":
        t[i].t = "t", t[i].v = na(a, r);
        break;
    }
  var b = "", I, F;
  if (_.length > 0) {
    _.charCodeAt(0) == 40 ? (I = a < 0 && _.charCodeAt(0) === 45 ? -a : a, F = Br("n", _, I)) : (I = a < 0 && n > 1 ? -a : a, F = Br("n", _, I), I < 0 && t[0] && t[0].t == "t" && (F = F.substr(1), t[0].v = "-" + t[0].v)), N = F.length - 1;
    var V = t.length;
    for (i = 0; i < t.length; ++i)
      if (t[i] != null && t[i].t != "t" && t[i].v.indexOf(".") > -1) {
        V = i;
        break;
      }
    var D = t.length;
    if (V === t.length && F.indexOf("E") === -1) {
      for (i = t.length - 1; i >= 0; --i)
        t[i] == null || "n?".indexOf(t[i].t) === -1 || (N >= t[i].v.length - 1 ? (N -= t[i].v.length, t[i].v = F.substr(N + 1, t[i].v.length)) : N < 0 ? t[i].v = "" : (t[i].v = F.substr(0, N + 1), N = -1), t[i].t = "t", D = i);
      N >= 0 && D < t.length && (t[D].v = F.substr(0, N + 1) + t[D].v);
    } else if (V !== t.length && F.indexOf("E") === -1) {
      for (N = F.indexOf(".") - 1, i = V; i >= 0; --i)
        if (!(t[i] == null || "n?".indexOf(t[i].t) === -1)) {
          for (o = t[i].v.indexOf(".") > -1 && i === V ? t[i].v.indexOf(".") - 1 : t[i].v.length - 1, b = t[i].v.substr(o + 1); o >= 0; --o)
            N >= 0 && (t[i].v.charAt(o) === "0" || t[i].v.charAt(o) === "#") && (b = F.charAt(N--) + b);
          t[i].v = b, t[i].t = "t", D = i;
        }
      for (N >= 0 && D < t.length && (t[D].v = F.substr(0, N + 1) + t[D].v), N = F.indexOf(".") + 1, i = V; i < t.length; ++i)
        if (!(t[i] == null || "n?(".indexOf(t[i].t) === -1 && i !== V)) {
          for (o = t[i].v.indexOf(".") > -1 && i === V ? t[i].v.indexOf(".") + 1 : 0, b = t[i].v.substr(0, o); o < t[i].v.length; ++o)
            N < F.length && (b += F.charAt(N++));
          t[i].v = b, t[i].t = "t", D = i;
        }
    }
  }
  for (i = 0; i < t.length; ++i)
    t[i] != null && "n?".indexOf(t[i].t) > -1 && (I = n > 1 && a < 0 && i > 0 && t[i - 1].v === "-" ? -a : a, t[i].v = Br(t[i].t, t[i].v, I), t[i].t = "t");
  var z = "";
  for (i = 0; i !== t.length; ++i)
    t[i] != null && (z += t[i].v);
  return z;
}
var M0 = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
function B0(e, a) {
  if (a == null)
    return !1;
  var r = parseFloat(a[2]);
  switch (a[1]) {
    case "=":
      if (e == r)
        return !0;
      break;
    case ">":
      if (e > r)
        return !0;
      break;
    case "<":
      if (e < r)
        return !0;
      break;
    case "<>":
      if (e != r)
        return !0;
      break;
    case ">=":
      if (e >= r)
        return !0;
      break;
    case "<=":
      if (e <= r)
        return !0;
      break;
  }
  return !1;
}
function ec(e, a) {
  var r = qi(e), n = r.length, t = r[n - 1].indexOf("@");
  if (n < 4 && t > -1 && --n, r.length > 4)
    throw new Error("cannot find right format for |" + r.join("|") + "|");
  if (typeof a != "number")
    return [4, r.length === 4 || t > -1 ? r[r.length - 1] : "@"];
  switch (r.length) {
    case 1:
      r = t > -1 ? ["General", "General", "General", r[0]] : [r[0], r[0], r[0], "@"];
      break;
    case 2:
      r = t > -1 ? [r[0], r[0], r[0], r[1]] : [r[0], r[1], r[0], "@"];
      break;
    case 3:
      r = t > -1 ? [r[0], r[1], r[0], r[2]] : [r[0], r[1], r[2], "@"];
      break;
  }
  var s = a > 0 ? r[0] : a < 0 ? r[1] : r[2];
  if (r[0].indexOf("[") === -1 && r[1].indexOf("[") === -1)
    return [n, s];
  if (r[0].match(/\[[=<>]/) != null || r[1].match(/\[[=<>]/) != null) {
    var i = r[0].match(M0), c = r[1].match(M0);
    return B0(a, i) ? [n, r[0]] : B0(a, c) ? [n, r[1]] : [n, r[i != null && c != null ? 2 : 1]];
  }
  return [n, s];
}
function mr(e, a, r) {
  r == null && (r = {});
  var n = "";
  switch (typeof e) {
    case "string":
      e == "m/d/yy" && r.dateNF ? n = r.dateNF : n = e;
      break;
    case "number":
      e == 14 && r.dateNF ? n = r.dateNF : n = (r.table != null ? r.table : de)[e], n == null && (n = r.table && r.table[N0[e]] || de[N0[e]]), n == null && (n = Mi[e] || "General");
      break;
  }
  if (xt(n, 0))
    return na(a, r);
  a instanceof Date && (a = Ln(a, r.date1904));
  var t = ec(n, a);
  if (xt(t[1]))
    return na(a, r);
  if (a === !0)
    a = "TRUE";
  else if (a === !1)
    a = "FALSE";
  else if (a === "" || a == null)
    return "";
  return Qi(t[1], a, r, t[0]);
}
function aa(e, a) {
  if (typeof a != "number") {
    a = +a || -1;
    for (var r = 0; r < 392; ++r) {
      if (de[r] == null) {
        a < 0 && (a = r);
        continue;
      }
      if (de[r] == e) {
        a = r;
        break;
      }
    }
    a < 0 && (a = 391);
  }
  return de[a] = e, a;
}
function Xn() {
  de = Li();
}
var rc = {
  5: '"$"#,##0_);\\("$"#,##0\\)',
  6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  23: "General",
  24: "General",
  25: "General",
  26: "General",
  27: "m/d/yy",
  28: "m/d/yy",
  29: "m/d/yy",
  30: "m/d/yy",
  31: "m/d/yy",
  32: "h:mm:ss",
  33: "h:mm:ss",
  34: "h:mm:ss",
  35: "h:mm:ss",
  36: "m/d/yy",
  41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',
  42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',
  43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',
  44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',
  50: "m/d/yy",
  51: "m/d/yy",
  52: "m/d/yy",
  53: "m/d/yy",
  54: "m/d/yy",
  55: "m/d/yy",
  56: "m/d/yy",
  57: "m/d/yy",
  58: "m/d/yy",
  59: "0",
  60: "0.00",
  61: "#,##0",
  62: "#,##0.00",
  63: '"$"#,##0_);\\("$"#,##0\\)',
  64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
  65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
  66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
  67: "0%",
  68: "0.00%",
  69: "# ?/?",
  70: "# ??/??",
  71: "m/d/yy",
  72: "m/d/yy",
  73: "d-mmm-yy",
  74: "d-mmm",
  75: "mmm-yy",
  76: "h:mm",
  77: "h:mm:ss",
  78: "m/d/yy h:mm",
  79: "mm:ss",
  80: "[h]:mm:ss",
  81: "mmss.0"
}, $n = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
function ac(e) {
  var a = typeof e == "number" ? de[e] : e;
  return a = a.replace($n, "(\\d+)"), new RegExp("^" + a + "$");
}
function tc(e, a, r) {
  var n = -1, t = -1, s = -1, i = -1, c = -1, f = -1;
  (a.match($n) || []).forEach(function(h, x) {
    var d = parseInt(r[x + 1], 10);
    switch (h.toLowerCase().charAt(0)) {
      case "y":
        n = d;
        break;
      case "d":
        s = d;
        break;
      case "h":
        i = d;
        break;
      case "s":
        f = d;
        break;
      case "m":
        i >= 0 ? c = d : t = d;
        break;
    }
  }), f >= 0 && c == -1 && t >= 0 && (c = t, t = -1);
  var l = ("" + (n >= 0 ? n : (/* @__PURE__ */ new Date()).getFullYear())).slice(-4) + "-" + ("00" + (t >= 1 ? t : 1)).slice(-2) + "-" + ("00" + (s >= 1 ? s : 1)).slice(-2);
  l.length == 7 && (l = "0" + l), l.length == 8 && (l = "20" + l);
  var o = ("00" + (i >= 0 ? i : 0)).slice(-2) + ":" + ("00" + (c >= 0 ? c : 0)).slice(-2) + ":" + ("00" + (f >= 0 ? f : 0)).slice(-2);
  return i == -1 && c == -1 && f == -1 ? l : n == -1 && t == -1 && s == -1 ? o : l + "T" + o;
}
var nc = /* @__PURE__ */ function() {
  var e = {};
  e.version = "1.2.0";
  function a() {
    for (var F = 0, V = new Array(256), D = 0; D != 256; ++D)
      F = D, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, F = F & 1 ? -306674912 ^ F >>> 1 : F >>> 1, V[D] = F;
    return typeof Int32Array < "u" ? new Int32Array(V) : V;
  }
  var r = a();
  function n(F) {
    var V = 0, D = 0, z = 0, G = typeof Int32Array < "u" ? new Int32Array(4096) : new Array(4096);
    for (z = 0; z != 256; ++z)
      G[z] = F[z];
    for (z = 0; z != 256; ++z)
      for (D = F[z], V = 256 + z; V < 4096; V += 256)
        D = G[V] = D >>> 8 ^ F[D & 255];
    var P = [];
    for (z = 1; z != 16; ++z)
      P[z - 1] = typeof Int32Array < "u" ? G.subarray(z * 256, z * 256 + 256) : G.slice(z * 256, z * 256 + 256);
    return P;
  }
  var t = n(r), s = t[0], i = t[1], c = t[2], f = t[3], l = t[4], o = t[5], h = t[6], x = t[7], d = t[8], v = t[9], u = t[10], g = t[11], S = t[12], y = t[13], _ = t[14];
  function N(F, V) {
    for (var D = V ^ -1, z = 0, G = F.length; z < G; )
      D = D >>> 8 ^ r[(D ^ F.charCodeAt(z++)) & 255];
    return ~D;
  }
  function b(F, V) {
    for (var D = V ^ -1, z = F.length - 15, G = 0; G < z; )
      D = _[F[G++] ^ D & 255] ^ y[F[G++] ^ D >> 8 & 255] ^ S[F[G++] ^ D >> 16 & 255] ^ g[F[G++] ^ D >>> 24] ^ u[F[G++]] ^ v[F[G++]] ^ d[F[G++]] ^ x[F[G++]] ^ h[F[G++]] ^ o[F[G++]] ^ l[F[G++]] ^ f[F[G++]] ^ c[F[G++]] ^ i[F[G++]] ^ s[F[G++]] ^ r[F[G++]];
    for (z += 15; G < z; )
      D = D >>> 8 ^ r[(D ^ F[G++]) & 255];
    return ~D;
  }
  function I(F, V) {
    for (var D = V ^ -1, z = 0, G = F.length, P = 0, J = 0; z < G; )
      P = F.charCodeAt(z++), P < 128 ? D = D >>> 8 ^ r[(D ^ P) & 255] : P < 2048 ? (D = D >>> 8 ^ r[(D ^ (192 | P >> 6 & 31)) & 255], D = D >>> 8 ^ r[(D ^ (128 | P & 63)) & 255]) : P >= 55296 && P < 57344 ? (P = (P & 1023) + 64, J = F.charCodeAt(z++) & 1023, D = D >>> 8 ^ r[(D ^ (240 | P >> 8 & 7)) & 255], D = D >>> 8 ^ r[(D ^ (128 | P >> 2 & 63)) & 255], D = D >>> 8 ^ r[(D ^ (128 | J >> 6 & 15 | (P & 3) << 4)) & 255], D = D >>> 8 ^ r[(D ^ (128 | J & 63)) & 255]) : (D = D >>> 8 ^ r[(D ^ (224 | P >> 12 & 15)) & 255], D = D >>> 8 ^ r[(D ^ (128 | P >> 6 & 63)) & 255], D = D >>> 8 ^ r[(D ^ (128 | P & 63)) & 255]);
    return ~D;
  }
  return e.table = r, e.bstr = N, e.buf = b, e.str = I, e;
}(), _e = /* @__PURE__ */ function() {
  var a = {};
  a.version = "1.2.1";
  function r(p, T) {
    for (var m = p.split("/"), E = T.split("/"), k = 0, w = 0, M = Math.min(m.length, E.length); k < M; ++k) {
      if (w = m[k].length - E[k].length)
        return w;
      if (m[k] != E[k])
        return m[k] < E[k] ? -1 : 1;
    }
    return m.length - E.length;
  }
  function n(p) {
    if (p.charAt(p.length - 1) == "/")
      return p.slice(0, -1).indexOf("/") === -1 ? p : n(p.slice(0, -1));
    var T = p.lastIndexOf("/");
    return T === -1 ? p : p.slice(0, T + 1);
  }
  function t(p) {
    if (p.charAt(p.length - 1) == "/")
      return t(p.slice(0, -1));
    var T = p.lastIndexOf("/");
    return T === -1 ? p : p.slice(T + 1);
  }
  function s(p, T) {
    typeof T == "string" && (T = new Date(T));
    var m = T.getHours();
    m = m << 6 | T.getMinutes(), m = m << 5 | T.getSeconds() >>> 1, p.write_shift(2, m);
    var E = T.getFullYear() - 1980;
    E = E << 4 | T.getMonth() + 1, E = E << 5 | T.getDate(), p.write_shift(2, E);
  }
  function i(p) {
    var T = p.read_shift(2) & 65535, m = p.read_shift(2) & 65535, E = /* @__PURE__ */ new Date(), k = m & 31;
    m >>>= 5;
    var w = m & 15;
    m >>>= 4, E.setMilliseconds(0), E.setFullYear(m + 1980), E.setMonth(w - 1), E.setDate(k);
    var M = T & 31;
    T >>>= 5;
    var X = T & 63;
    return T >>>= 6, E.setHours(T), E.setMinutes(X), E.setSeconds(M << 1), E;
  }
  function c(p) {
    $e(p, 0);
    for (var T = (
      /*::(*/
      {}
    ), m = 0; p.l <= p.length - 4; ) {
      var E = p.read_shift(2), k = p.read_shift(2), w = p.l + k, M = {};
      switch (E) {
        case 21589:
          m = p.read_shift(1), m & 1 && (M.mtime = p.read_shift(4)), k > 5 && (m & 2 && (M.atime = p.read_shift(4)), m & 4 && (M.ctime = p.read_shift(4))), M.mtime && (M.mt = new Date(M.mtime * 1e3));
          break;
      }
      p.l = w, T[E] = M;
    }
    return T;
  }
  var f;
  function l() {
    return f || (f = {});
  }
  function o(p, T) {
    if (p[0] == 80 && p[1] == 75)
      return S0(p, T);
    if ((p[0] | 32) == 109 && (p[1] | 32) == 105)
      return Ti(p, T);
    if (p.length < 512)
      throw new Error("CFB file size " + p.length + " < 512");
    var m = 3, E = 512, k = 0, w = 0, M = 0, X = 0, L = 0, B = [], H = (
      /*::(*/
      p.slice(0, 512)
    );
    $e(H, 0);
    var K = h(H);
    switch (m = K[0], m) {
      case 3:
        E = 512;
        break;
      case 4:
        E = 4096;
        break;
      case 0:
        if (K[1] == 0)
          return S0(p, T);
      default:
        throw new Error("Major Version: Expected 3 or 4 saw " + m);
    }
    E !== 512 && (H = /*::(*/
    p.slice(0, E), $e(
      H,
      28
      /* blob.l */
    ));
    var Q = p.slice(0, E);
    x(H, m);
    var se = H.read_shift(4, "i");
    if (m === 3 && se !== 0)
      throw new Error("# Directory Sectors: Expected 0 saw " + se);
    H.l += 4, M = H.read_shift(4, "i"), H.l += 4, H.chk("00100000", "Mini Stream Cutoff Size: "), X = H.read_shift(4, "i"), k = H.read_shift(4, "i"), L = H.read_shift(4, "i"), w = H.read_shift(4, "i");
    for (var Z = -1, te = 0; te < 109 && (Z = H.read_shift(4, "i"), !(Z < 0)); ++te)
      B[te] = Z;
    var xe = d(p, E);
    g(L, w, xe, E, B);
    var ye = y(xe, M, B, E);
    ye[M].name = "!Directory", k > 0 && X !== J && (ye[X].name = "!MiniFAT"), ye[B[0]].name = "!FAT", ye.fat_addrs = B, ye.ssz = E;
    var De = {}, Ke = [], Sa = [], Ca = [];
    _(M, ye, xe, Ke, k, De, Sa, X), v(Sa, Ca, Ke), Ke.shift();
    var ya = {
      FileIndex: Sa,
      FullPaths: Ca
    };
    return T && T.raw && (ya.raw = { header: Q, sectors: xe }), ya;
  }
  function h(p) {
    if (p[p.l] == 80 && p[p.l + 1] == 75)
      return [0, 0];
    p.chk(fe, "Header Signature: "), p.l += 16;
    var T = p.read_shift(2, "u");
    return [p.read_shift(2, "u"), T];
  }
  function x(p, T) {
    var m = 9;
    switch (p.l += 2, m = p.read_shift(2)) {
      case 9:
        if (T != 3)
          throw new Error("Sector Shift: Expected 9 saw " + m);
        break;
      case 12:
        if (T != 4)
          throw new Error("Sector Shift: Expected 12 saw " + m);
        break;
      default:
        throw new Error("Sector Shift: Expected 9 or 12 saw " + m);
    }
    p.chk("0600", "Mini Sector Shift: "), p.chk("000000000000", "Reserved: ");
  }
  function d(p, T) {
    for (var m = Math.ceil(p.length / T) - 1, E = [], k = 1; k < m; ++k)
      E[k - 1] = p.slice(k * T, (k + 1) * T);
    return E[m - 1] = p.slice(m * T), E;
  }
  function v(p, T, m) {
    for (var E = 0, k = 0, w = 0, M = 0, X = 0, L = m.length, B = [], H = []; E < L; ++E)
      B[E] = H[E] = E, T[E] = m[E];
    for (; X < H.length; ++X)
      E = H[X], k = p[E].L, w = p[E].R, M = p[E].C, B[E] === E && (k !== -1 && B[k] !== k && (B[E] = B[k]), w !== -1 && B[w] !== w && (B[E] = B[w])), M !== -1 && (B[M] = E), k !== -1 && E != B[E] && (B[k] = B[E], H.lastIndexOf(k) < X && H.push(k)), w !== -1 && E != B[E] && (B[w] = B[E], H.lastIndexOf(w) < X && H.push(w));
    for (E = 1; E < L; ++E)
      B[E] === E && (w !== -1 && B[w] !== w ? B[E] = B[w] : k !== -1 && B[k] !== k && (B[E] = B[k]));
    for (E = 1; E < L; ++E)
      if (p[E].type !== 0) {
        if (X = E, X != B[X])
          do
            X = B[X], T[E] = T[X] + "/" + T[E];
          while (X !== 0 && B[X] !== -1 && X != B[X]);
        B[E] = -1;
      }
    for (T[0] += "/", E = 1; E < L; ++E)
      p[E].type !== 2 && (T[E] += "/");
  }
  function u(p, T, m) {
    for (var E = p.start, k = p.size, w = [], M = E; m && k > 0 && M >= 0; )
      w.push(T.slice(M * P, M * P + P)), k -= P, M = ea(m, M * 4);
    return w.length === 0 ? He(0) : $r(w).slice(0, p.size);
  }
  function g(p, T, m, E, k) {
    var w = J;
    if (p === J) {
      if (T !== 0)
        throw new Error("DIFAT chain shorter than expected");
    } else if (p !== -1) {
      var M = m[p], X = (E >>> 2) - 1;
      if (!M)
        return;
      for (var L = 0; L < X && (w = ea(M, L * 4)) !== J; ++L)
        k.push(w);
      g(ea(M, E - 4), T - 1, m, E, k);
    }
  }
  function S(p, T, m, E, k) {
    var w = [], M = [];
    k || (k = []);
    var X = E - 1, L = 0, B = 0;
    for (L = T; L >= 0; ) {
      k[L] = !0, w[w.length] = L, M.push(p[L]);
      var H = m[Math.floor(L * 4 / E)];
      if (B = L * 4 & X, E < 4 + B)
        throw new Error("FAT boundary crossed: " + L + " 4 " + E);
      if (!p[H])
        break;
      L = ea(p[H], B);
    }
    return { nodes: w, data: j0([M]) };
  }
  function y(p, T, m, E) {
    var k = p.length, w = [], M = [], X = [], L = [], B = E - 1, H = 0, K = 0, Q = 0, se = 0;
    for (H = 0; H < k; ++H)
      if (X = [], Q = H + T, Q >= k && (Q -= k), !M[Q]) {
        L = [];
        var Z = [];
        for (K = Q; K >= 0; ) {
          Z[K] = !0, M[K] = !0, X[X.length] = K, L.push(p[K]);
          var te = m[Math.floor(K * 4 / E)];
          if (se = K * 4 & B, E < 4 + se)
            throw new Error("FAT boundary crossed: " + K + " 4 " + E);
          if (!p[te] || (K = ea(p[te], se), Z[K]))
            break;
        }
        w[Q] = { nodes: X, data: j0([L]) };
      }
    return w;
  }
  function _(p, T, m, E, k, w, M, X) {
    for (var L = 0, B = E.length ? 2 : 0, H = T[p].data, K = 0, Q = 0, se; K < H.length; K += 128) {
      var Z = (
        /*::(*/
        H.slice(K, K + 128)
      );
      $e(Z, 64), Q = Z.read_shift(2), se = s0(Z, 0, Q - B), E.push(se);
      var te = {
        name: se,
        type: Z.read_shift(1),
        color: Z.read_shift(1),
        L: Z.read_shift(4, "i"),
        R: Z.read_shift(4, "i"),
        C: Z.read_shift(4, "i"),
        clsid: Z.read_shift(16),
        state: Z.read_shift(4, "i"),
        start: 0,
        size: 0
      }, xe = Z.read_shift(2) + Z.read_shift(2) + Z.read_shift(2) + Z.read_shift(2);
      xe !== 0 && (te.ct = N(Z, Z.l - 8));
      var ye = Z.read_shift(2) + Z.read_shift(2) + Z.read_shift(2) + Z.read_shift(2);
      ye !== 0 && (te.mt = N(Z, Z.l - 8)), te.start = Z.read_shift(4, "i"), te.size = Z.read_shift(4, "i"), te.size < 0 && te.start < 0 && (te.size = te.type = 0, te.start = J, te.name = ""), te.type === 5 ? (L = te.start, k > 0 && L !== J && (T[L].name = "!StreamData")) : te.size >= 4096 ? (te.storage = "fat", T[te.start] === void 0 && (T[te.start] = S(m, te.start, T.fat_addrs, T.ssz)), T[te.start].name = te.name, te.content = T[te.start].data.slice(0, te.size)) : (te.storage = "minifat", te.size < 0 ? te.size = 0 : L !== J && te.start !== J && T[L] && (te.content = u(te, T[L].data, (T[X] || {}).data))), te.content && $e(te.content, 0), w[se] = te, M.push(te);
    }
  }
  function N(p, T) {
    return new Date((lr(p, T + 4) / 1e7 * Math.pow(2, 32) + lr(p, T) / 1e7 - 11644473600) * 1e3);
  }
  function b(p, T) {
    return l(), o(f.readFileSync(p), T);
  }
  function I(p, T) {
    var m = T && T.type;
    switch (m || me && Buffer.isBuffer(p) && (m = "buffer"), m || "base64") {
      case "file":
        return b(p, T);
      case "base64":
        return o(kr(ur(p)), T);
      case "binary":
        return o(kr(p), T);
    }
    return o(
      /*::typeof blob == 'string' ? new Buffer(blob, 'utf-8') : */
      p,
      T
    );
  }
  function F(p, T) {
    var m = T || {}, E = m.root || "Root Entry";
    if (p.FullPaths || (p.FullPaths = []), p.FileIndex || (p.FileIndex = []), p.FullPaths.length !== p.FileIndex.length)
      throw new Error("inconsistent CFB structure");
    p.FullPaths.length === 0 && (p.FullPaths[0] = E + "/", p.FileIndex[0] = { name: E, type: 5 }), m.CLSID && (p.FileIndex[0].clsid = m.CLSID), V(p);
  }
  function V(p) {
    var T = "Sh33tJ5";
    if (!_e.find(p, "/" + T)) {
      var m = He(4);
      m[0] = 55, m[1] = m[3] = 50, m[2] = 54, p.FileIndex.push({ name: T, type: 2, content: m, size: 4, L: 69, R: 69, C: 69 }), p.FullPaths.push(p.FullPaths[0] + T), D(p);
    }
  }
  function D(p, T) {
    F(p);
    for (var m = !1, E = !1, k = p.FullPaths.length - 1; k >= 0; --k) {
      var w = p.FileIndex[k];
      switch (w.type) {
        case 0:
          E ? m = !0 : (p.FileIndex.pop(), p.FullPaths.pop());
          break;
        case 1:
        case 2:
        case 5:
          E = !0, isNaN(w.R * w.L * w.C) && (m = !0), w.R > -1 && w.L > -1 && w.R == w.L && (m = !0);
          break;
        default:
          m = !0;
          break;
      }
    }
    if (!(!m && !T)) {
      var M = new Date(1987, 1, 19), X = 0, L = Object.create ? /* @__PURE__ */ Object.create(null) : {}, B = [];
      for (k = 0; k < p.FullPaths.length; ++k)
        L[p.FullPaths[k]] = !0, p.FileIndex[k].type !== 0 && B.push([p.FullPaths[k], p.FileIndex[k]]);
      for (k = 0; k < B.length; ++k) {
        var H = n(B[k][0]);
        E = L[H], E || (B.push([H, {
          name: t(H).replace("/", ""),
          type: 1,
          clsid: ce,
          ct: M,
          mt: M,
          content: null
        }]), L[H] = !0);
      }
      for (B.sort(function(se, Z) {
        return r(se[0], Z[0]);
      }), p.FullPaths = [], p.FileIndex = [], k = 0; k < B.length; ++k)
        p.FullPaths[k] = B[k][0], p.FileIndex[k] = B[k][1];
      for (k = 0; k < B.length; ++k) {
        var K = p.FileIndex[k], Q = p.FullPaths[k];
        if (K.name = t(Q).replace("/", ""), K.L = K.R = K.C = -(K.color = 1), K.size = K.content ? K.content.length : 0, K.start = 0, K.clsid = K.clsid || ce, k === 0)
          K.C = B.length > 1 ? 1 : -1, K.size = 0, K.type = 5;
        else if (Q.slice(-1) == "/") {
          for (X = k + 1; X < B.length && n(p.FullPaths[X]) != Q; ++X)
            ;
          for (K.C = X >= B.length ? -1 : X, X = k + 1; X < B.length && n(p.FullPaths[X]) != n(Q); ++X)
            ;
          K.R = X >= B.length ? -1 : X, K.type = 1;
        } else
          n(p.FullPaths[k + 1] || "") == n(Q) && (K.R = k + 1), K.type = 2;
      }
    }
  }
  function z(p, T) {
    var m = T || {};
    if (m.fileType == "mad")
      return ki(p, m);
    switch (D(p), m.fileType) {
      case "zip":
        return vi(p, m);
    }
    var E = function(se) {
      for (var Z = 0, te = 0, xe = 0; xe < se.FileIndex.length; ++xe) {
        var ye = se.FileIndex[xe];
        if (ye.content) {
          var De = ye.content.length;
          De > 0 && (De < 4096 ? Z += De + 63 >> 6 : te += De + 511 >> 9);
        }
      }
      for (var Ke = se.FullPaths.length + 3 >> 2, Sa = Z + 7 >> 3, Ca = Z + 127 >> 7, ya = Sa + te + Ke + Ca, Qr = ya + 127 >> 7, yt = Qr <= 109 ? 0 : Math.ceil((Qr - 109) / 127); ya + Qr + yt + 127 >> 7 > Qr; )
        yt = ++Qr <= 109 ? 0 : Math.ceil((Qr - 109) / 127);
      var Lr = [1, yt, Qr, Ca, Ke, te, Z, 0];
      return se.FileIndex[0].size = Z << 6, Lr[7] = (se.FileIndex[0].start = Lr[0] + Lr[1] + Lr[2] + Lr[3] + Lr[4] + Lr[5]) + (Lr[6] + 7 >> 3), Lr;
    }(p), k = He(E[7] << 9), w = 0, M = 0;
    {
      for (w = 0; w < 8; ++w)
        k.write_shift(1, re[w]);
      for (w = 0; w < 8; ++w)
        k.write_shift(2, 0);
      for (k.write_shift(2, 62), k.write_shift(2, 3), k.write_shift(2, 65534), k.write_shift(2, 9), k.write_shift(2, 6), w = 0; w < 3; ++w)
        k.write_shift(2, 0);
      for (k.write_shift(4, 0), k.write_shift(4, E[2]), k.write_shift(4, E[0] + E[1] + E[2] + E[3] - 1), k.write_shift(4, 0), k.write_shift(4, 4096), k.write_shift(4, E[3] ? E[0] + E[1] + E[2] - 1 : J), k.write_shift(4, E[3]), k.write_shift(-4, E[1] ? E[0] - 1 : J), k.write_shift(4, E[1]), w = 0; w < 109; ++w)
        k.write_shift(-4, w < E[2] ? E[1] + w : -1);
    }
    if (E[1])
      for (M = 0; M < E[1]; ++M) {
        for (; w < 236 + M * 127; ++w)
          k.write_shift(-4, w < E[2] ? E[1] + w : -1);
        k.write_shift(-4, M === E[1] - 1 ? J : M + 1);
      }
    var X = function(se) {
      for (M += se; w < M - 1; ++w)
        k.write_shift(-4, w + 1);
      se && (++w, k.write_shift(-4, J));
    };
    for (M = w = 0, M += E[1]; w < M; ++w)
      k.write_shift(-4, ie.DIFSECT);
    for (M += E[2]; w < M; ++w)
      k.write_shift(-4, ie.FATSECT);
    X(E[3]), X(E[4]);
    for (var L = 0, B = 0, H = p.FileIndex[0]; L < p.FileIndex.length; ++L)
      H = p.FileIndex[L], H.content && (B = H.content.length, !(B < 4096) && (H.start = M, X(B + 511 >> 9)));
    for (X(E[6] + 7 >> 3); k.l & 511; )
      k.write_shift(-4, ie.ENDOFCHAIN);
    for (M = w = 0, L = 0; L < p.FileIndex.length; ++L)
      H = p.FileIndex[L], H.content && (B = H.content.length, !(!B || B >= 4096) && (H.start = M, X(B + 63 >> 6)));
    for (; k.l & 511; )
      k.write_shift(-4, ie.ENDOFCHAIN);
    for (w = 0; w < E[4] << 2; ++w) {
      var K = p.FullPaths[w];
      if (!K || K.length === 0) {
        for (L = 0; L < 17; ++L)
          k.write_shift(4, 0);
        for (L = 0; L < 3; ++L)
          k.write_shift(4, -1);
        for (L = 0; L < 12; ++L)
          k.write_shift(4, 0);
        continue;
      }
      H = p.FileIndex[w], w === 0 && (H.start = H.size ? H.start - 1 : J);
      var Q = w === 0 && m.root || H.name;
      if (B = 2 * (Q.length + 1), k.write_shift(64, Q, "utf16le"), k.write_shift(2, B), k.write_shift(1, H.type), k.write_shift(1, H.color), k.write_shift(-4, H.L), k.write_shift(-4, H.R), k.write_shift(-4, H.C), H.clsid)
        k.write_shift(16, H.clsid, "hex");
      else
        for (L = 0; L < 4; ++L)
          k.write_shift(4, 0);
      k.write_shift(4, H.state || 0), k.write_shift(4, 0), k.write_shift(4, 0), k.write_shift(4, 0), k.write_shift(4, 0), k.write_shift(4, H.start), k.write_shift(4, H.size), k.write_shift(4, 0);
    }
    for (w = 1; w < p.FileIndex.length; ++w)
      if (H = p.FileIndex[w], H.size >= 4096)
        if (k.l = H.start + 1 << 9, me && Buffer.isBuffer(H.content))
          H.content.copy(k, k.l, 0, H.size), k.l += H.size + 511 & -512;
        else {
          for (L = 0; L < H.size; ++L)
            k.write_shift(1, H.content[L]);
          for (; L & 511; ++L)
            k.write_shift(1, 0);
        }
    for (w = 1; w < p.FileIndex.length; ++w)
      if (H = p.FileIndex[w], H.size > 0 && H.size < 4096)
        if (me && Buffer.isBuffer(H.content))
          H.content.copy(k, k.l, 0, H.size), k.l += H.size + 63 & -64;
        else {
          for (L = 0; L < H.size; ++L)
            k.write_shift(1, H.content[L]);
          for (; L & 63; ++L)
            k.write_shift(1, 0);
        }
    if (me)
      k.l = k.length;
    else
      for (; k.l < k.length; )
        k.write_shift(1, 0);
    return k;
  }
  function G(p, T) {
    var m = p.FullPaths.map(function(L) {
      return L.toUpperCase();
    }), E = m.map(function(L) {
      var B = L.split("/");
      return B[B.length - (L.slice(-1) == "/" ? 2 : 1)];
    }), k = !1;
    T.charCodeAt(0) === 47 ? (k = !0, T = m[0].slice(0, -1) + T) : k = T.indexOf("/") !== -1;
    var w = T.toUpperCase(), M = k === !0 ? m.indexOf(w) : E.indexOf(w);
    if (M !== -1)
      return p.FileIndex[M];
    var X = !w.match(Oa);
    for (w = w.replace(ir, ""), X && (w = w.replace(Oa, "!")), M = 0; M < m.length; ++M)
      if ((X ? m[M].replace(Oa, "!") : m[M]).replace(ir, "") == w || (X ? E[M].replace(Oa, "!") : E[M]).replace(ir, "") == w)
        return p.FileIndex[M];
    return null;
  }
  var P = 64, J = -2, fe = "d0cf11e0a1b11ae1", re = [208, 207, 17, 224, 161, 177, 26, 225], ce = "00000000000000000000000000000000", ie = {
    /* 2.1 Compund File Sector Numbers and Types */
    MAXREGSECT: -6,
    DIFSECT: -4,
    FATSECT: -3,
    ENDOFCHAIN: J,
    FREESECT: -1,
    /* 2.2 Compound File Header */
    HEADER_SIGNATURE: fe,
    HEADER_MINOR_VERSION: "3e00",
    MAXREGSID: -6,
    NOSTREAM: -1,
    HEADER_CLSID: ce,
    /* 2.6.1 Compound File Directory Entry */
    EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
  };
  function Se(p, T, m) {
    l();
    var E = z(p, m);
    f.writeFileSync(T, E);
  }
  function W(p) {
    for (var T = new Array(p.length), m = 0; m < p.length; ++m)
      T[m] = String.fromCharCode(p[m]);
    return T.join("");
  }
  function le(p, T) {
    var m = z(p, T);
    switch (T && T.type || "buffer") {
      case "file":
        return l(), f.writeFileSync(T.filename, m), m;
      case "binary":
        return typeof m == "string" ? m : W(m);
      case "base64":
        return D0(typeof m == "string" ? m : W(m));
      case "buffer":
        if (me)
          return Buffer.isBuffer(m) ? m : ca(m);
      case "array":
        return typeof m == "string" ? kr(m) : m;
    }
    return m;
  }
  var he;
  function A(p) {
    try {
      var T = p.InflateRaw, m = new T();
      if (m._processChunk(new Uint8Array([3, 0]), m._finishFlushFlag), m.bytesRead)
        he = p;
      else
        throw new Error("zlib does not expose bytesRead");
    } catch (E) {
      console.error("cannot use native zlib: " + (E.message || E));
    }
  }
  function U(p, T) {
    if (!he)
      return F0(p, T);
    var m = he.InflateRaw, E = new m(), k = E._processChunk(p.slice(p.l), E._finishFlushFlag);
    return p.l += E.bytesRead, k;
  }
  function R(p) {
    return he ? he.deflateRawSync(p) : pe(p);
  }
  var O = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], j = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258], ee = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  function ne(p) {
    var T = (p << 1 | p << 11) & 139536 | (p << 5 | p << 15) & 558144;
    return (T >> 16 | T >> 8 | T) & 255;
  }
  for (var q = typeof Uint8Array < "u", Y = q ? new Uint8Array(256) : [], Te = 0; Te < 256; ++Te)
    Y[Te] = ne(Te);
  function C(p, T) {
    var m = Y[p & 255];
    return T <= 8 ? m >>> 8 - T : (m = m << 8 | Y[p >> 8 & 255], T <= 16 ? m >>> 16 - T : (m = m << 8 | Y[p >> 16 & 255], m >>> 24 - T));
  }
  function Ie(p, T) {
    var m = T & 7, E = T >>> 3;
    return (p[E] | (m <= 6 ? 0 : p[E + 1] << 8)) >>> m & 3;
  }
  function we(p, T) {
    var m = T & 7, E = T >>> 3;
    return (p[E] | (m <= 5 ? 0 : p[E + 1] << 8)) >>> m & 7;
  }
  function Fe(p, T) {
    var m = T & 7, E = T >>> 3;
    return (p[E] | (m <= 4 ? 0 : p[E + 1] << 8)) >>> m & 15;
  }
  function ge(p, T) {
    var m = T & 7, E = T >>> 3;
    return (p[E] | (m <= 3 ? 0 : p[E + 1] << 8)) >>> m & 31;
  }
  function ae(p, T) {
    var m = T & 7, E = T >>> 3;
    return (p[E] | (m <= 1 ? 0 : p[E + 1] << 8)) >>> m & 127;
  }
  function Ne(p, T, m) {
    var E = T & 7, k = T >>> 3, w = (1 << m) - 1, M = p[k] >>> E;
    return m < 8 - E || (M |= p[k + 1] << 8 - E, m < 16 - E) || (M |= p[k + 2] << 16 - E, m < 24 - E) || (M |= p[k + 3] << 24 - E), M & w;
  }
  function xr(p, T, m) {
    var E = T & 7, k = T >>> 3;
    return E <= 5 ? p[k] |= (m & 7) << E : (p[k] |= m << E & 255, p[k + 1] = (m & 7) >> 8 - E), T + 3;
  }
  function Sr(p, T, m) {
    var E = T & 7, k = T >>> 3;
    return m = (m & 1) << E, p[k] |= m, T + 1;
  }
  function Nr(p, T, m) {
    var E = T & 7, k = T >>> 3;
    return m <<= E, p[k] |= m & 255, m >>>= 8, p[k + 1] = m, T + 8;
  }
  function Fa(p, T, m) {
    var E = T & 7, k = T >>> 3;
    return m <<= E, p[k] |= m & 255, m >>>= 8, p[k + 1] = m & 255, p[k + 2] = m >>> 8, T + 16;
  }
  function Vr(p, T) {
    var m = p.length, E = 2 * m > T ? 2 * m : T + 5, k = 0;
    if (m >= T)
      return p;
    if (me) {
      var w = O0(E);
      if (p.copy)
        p.copy(w);
      else
        for (; k < p.length; ++k)
          w[k] = p[k];
      return w;
    } else if (q) {
      var M = new Uint8Array(E);
      if (M.set)
        M.set(p);
      else
        for (; k < m; ++k)
          M[k] = p[k];
      return M;
    }
    return p.length = E, p;
  }
  function or(p) {
    for (var T = new Array(p), m = 0; m < p; ++m)
      T[m] = 0;
    return T;
  }
  function Pr(p, T, m) {
    var E = 1, k = 0, w = 0, M = 0, X = 0, L = p.length, B = q ? new Uint16Array(32) : or(32);
    for (w = 0; w < 32; ++w)
      B[w] = 0;
    for (w = L; w < m; ++w)
      p[w] = 0;
    L = p.length;
    var H = q ? new Uint16Array(L) : or(L);
    for (w = 0; w < L; ++w)
      B[k = p[w]]++, E < k && (E = k), H[w] = 0;
    for (B[0] = 0, w = 1; w <= E; ++w)
      B[w + 16] = X = X + B[w - 1] << 1;
    for (w = 0; w < L; ++w)
      X = p[w], X != 0 && (H[w] = B[X + 16]++);
    var K = 0;
    for (w = 0; w < L; ++w)
      if (K = p[w], K != 0)
        for (X = C(H[w], E) >> E - K, M = (1 << E + 4 - K) - 1; M >= 0; --M)
          T[X | M << K] = K & 15 | w << 4;
    return E;
  }
  var Wr = q ? new Uint16Array(512) : or(512), Aa = q ? new Uint16Array(32) : or(32);
  if (!q) {
    for (var ar = 0; ar < 512; ++ar)
      Wr[ar] = 0;
    for (ar = 0; ar < 32; ++ar)
      Aa[ar] = 0;
  }
  (function() {
    for (var p = [], T = 0; T < 32; T++)
      p.push(5);
    Pr(p, Aa, 32);
    var m = [];
    for (T = 0; T <= 143; T++)
      m.push(8);
    for (; T <= 255; T++)
      m.push(9);
    for (; T <= 279; T++)
      m.push(7);
    for (; T <= 287; T++)
      m.push(8);
    Pr(m, Wr, 288);
  })();
  var Cr = /* @__PURE__ */ function() {
    for (var T = q ? new Uint8Array(32768) : [], m = 0, E = 0; m < ee.length - 1; ++m)
      for (; E < ee[m + 1]; ++E)
        T[E] = m;
    for (; E < 32768; ++E)
      T[E] = 29;
    var k = q ? new Uint8Array(259) : [];
    for (m = 0, E = 0; m < j.length - 1; ++m)
      for (; E < j[m + 1]; ++E)
        k[E] = m;
    function w(X, L) {
      for (var B = 0; B < X.length; ) {
        var H = Math.min(65535, X.length - B), K = B + H == X.length;
        for (L.write_shift(1, +K), L.write_shift(2, H), L.write_shift(2, ~H & 65535); H-- > 0; )
          L[L.l++] = X[B++];
      }
      return L.l;
    }
    function M(X, L) {
      for (var B = 0, H = 0, K = q ? new Uint16Array(32768) : []; H < X.length; ) {
        var Q = (
          /* data.length - boff; */
          Math.min(65535, X.length - H)
        );
        if (Q < 10) {
          for (B = xr(L, B, +(H + Q == X.length)), B & 7 && (B += 8 - (B & 7)), L.l = B / 8 | 0, L.write_shift(2, Q), L.write_shift(2, ~Q & 65535); Q-- > 0; )
            L[L.l++] = X[H++];
          B = L.l * 8;
          continue;
        }
        B = xr(L, B, +(H + Q == X.length) + 2);
        for (var se = 0; Q-- > 0; ) {
          var Z = X[H];
          se = (se << 5 ^ Z) & 32767;
          var te = -1, xe = 0;
          if ((te = K[se]) && (te |= H & -32768, te > H && (te -= 32768), te < H))
            for (; X[te + xe] == X[H + xe] && xe < 250; )
              ++xe;
          if (xe > 2) {
            Z = k[xe], Z <= 22 ? B = Nr(L, B, Y[Z + 1] >> 1) - 1 : (Nr(L, B, 3), B += 5, Nr(L, B, Y[Z - 23] >> 5), B += 3);
            var ye = Z < 8 ? 0 : Z - 4 >> 2;
            ye > 0 && (Fa(L, B, xe - j[Z]), B += ye), Z = T[H - te], B = Nr(L, B, Y[Z] >> 3), B -= 3;
            var De = Z < 4 ? 0 : Z - 2 >> 1;
            De > 0 && (Fa(L, B, H - te - ee[Z]), B += De);
            for (var Ke = 0; Ke < xe; ++Ke)
              K[se] = H & 32767, se = (se << 5 ^ X[H]) & 32767, ++H;
            Q -= xe - 1;
          } else
            Z <= 143 ? Z = Z + 48 : B = Sr(L, B, 1), B = Nr(L, B, Y[Z]), K[se] = H & 32767, ++H;
        }
        B = Nr(L, B, 0) - 1;
      }
      return L.l = (B + 7) / 8 | 0, L.l;
    }
    return function(L, B) {
      return L.length < 8 ? w(L, B) : M(L, B);
    };
  }();
  function pe(p) {
    var T = He(50 + Math.floor(p.length * 1.1)), m = Cr(p, T);
    return T.slice(0, m);
  }
  var Pe = q ? new Uint16Array(32768) : or(32768), dr = q ? new Uint16Array(32768) : or(32768), Ue = q ? new Uint16Array(128) : or(128), qr = 1, w0 = 1;
  function ui(p, T) {
    var m = ge(p, T) + 257;
    T += 5;
    var E = ge(p, T) + 1;
    T += 5;
    var k = Fe(p, T) + 4;
    T += 4;
    for (var w = 0, M = q ? new Uint8Array(19) : or(19), X = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], L = 1, B = q ? new Uint8Array(8) : or(8), H = q ? new Uint8Array(8) : or(8), K = M.length, Q = 0; Q < k; ++Q)
      M[O[Q]] = w = we(p, T), L < w && (L = w), B[w]++, T += 3;
    var se = 0;
    for (B[0] = 0, Q = 1; Q <= L; ++Q)
      H[Q] = se = se + B[Q - 1] << 1;
    for (Q = 0; Q < K; ++Q)
      (se = M[Q]) != 0 && (X[Q] = H[se]++);
    var Z = 0;
    for (Q = 0; Q < K; ++Q)
      if (Z = M[Q], Z != 0) {
        se = Y[X[Q]] >> 8 - Z;
        for (var te = (1 << 7 - Z) - 1; te >= 0; --te)
          Ue[se | te << Z] = Z & 7 | Q << 3;
      }
    var xe = [];
    for (L = 1; xe.length < m + E; )
      switch (se = Ue[ae(p, T)], T += se & 7, se >>>= 3) {
        case 16:
          for (w = 3 + Ie(p, T), T += 2, se = xe[xe.length - 1]; w-- > 0; )
            xe.push(se);
          break;
        case 17:
          for (w = 3 + we(p, T), T += 3; w-- > 0; )
            xe.push(0);
          break;
        case 18:
          for (w = 11 + ae(p, T), T += 7; w-- > 0; )
            xe.push(0);
          break;
        default:
          xe.push(se), L < se && (L = se);
          break;
      }
    var ye = xe.slice(0, m), De = xe.slice(m);
    for (Q = m; Q < 286; ++Q)
      ye[Q] = 0;
    for (Q = E; Q < 30; ++Q)
      De[Q] = 0;
    return qr = Pr(ye, Pe, 286), w0 = Pr(De, dr, 30), T;
  }
  function xi(p, T) {
    if (p[0] == 3 && !(p[1] & 3))
      return [Yr(T), 2];
    for (var m = 0, E = 0, k = O0(T || 1 << 18), w = 0, M = k.length >>> 0, X = 0, L = 0; !(E & 1); ) {
      if (E = we(p, m), m += 3, E >>> 1)
        E >> 1 == 1 ? (X = 9, L = 5) : (m = ui(p, m), X = qr, L = w0);
      else {
        m & 7 && (m += 8 - (m & 7));
        var B = p[m >>> 3] | p[(m >>> 3) + 1] << 8;
        if (m += 32, B > 0)
          for (!T && M < w + B && (k = Vr(k, w + B), M = k.length); B-- > 0; )
            k[w++] = p[m >>> 3], m += 8;
        continue;
      }
      for (; ; ) {
        !T && M < w + 32767 && (k = Vr(k, w + 32767), M = k.length);
        var H = Ne(p, m, X), K = E >>> 1 == 1 ? Wr[H] : Pe[H];
        if (m += K & 15, K >>>= 4, !(K >>> 8 & 255))
          k[w++] = K;
        else {
          if (K == 256)
            break;
          K -= 257;
          var Q = K < 8 ? 0 : K - 4 >> 2;
          Q > 5 && (Q = 0);
          var se = w + j[K];
          Q > 0 && (se += Ne(p, m, Q), m += Q), H = Ne(p, m, L), K = E >>> 1 == 1 ? Aa[H] : dr[H], m += K & 15, K >>>= 4;
          var Z = K < 4 ? 0 : K - 2 >> 1, te = ee[K];
          for (Z > 0 && (te += Ne(p, m, Z), m += Z), !T && M < se && (k = Vr(k, se + 100), M = k.length); w < se; )
            k[w] = k[w - te], ++w;
        }
      }
    }
    return T ? [k, m + 7 >>> 3] : [k.slice(0, w), m + 7 >>> 3];
  }
  function F0(p, T) {
    var m = p.slice(p.l || 0), E = xi(m, T);
    return p.l += E[1], E[0];
  }
  function A0(p, T) {
    if (p)
      typeof console < "u" && console.error(T);
    else
      throw new Error(T);
  }
  function S0(p, T) {
    var m = (
      /*::(*/
      p
    );
    $e(m, 0);
    var E = [], k = [], w = {
      FileIndex: E,
      FullPaths: k
    };
    F(w, { root: T.root });
    for (var M = m.length - 4; (m[M] != 80 || m[M + 1] != 75 || m[M + 2] != 5 || m[M + 3] != 6) && M >= 0; )
      --M;
    m.l = M + 4, m.l += 4;
    var X = m.read_shift(2);
    m.l += 6;
    var L = m.read_shift(4);
    for (m.l = L, M = 0; M < X; ++M) {
      m.l += 20;
      var B = m.read_shift(4), H = m.read_shift(4), K = m.read_shift(2), Q = m.read_shift(2), se = m.read_shift(2);
      m.l += 8;
      var Z = m.read_shift(4), te = c(
        /*::(*/
        m.slice(m.l + K, m.l + K + Q)
        /*:: :any)*/
      );
      m.l += K + Q + se;
      var xe = m.l;
      m.l = Z + 4, di(m, B, H, w, te), m.l = xe;
    }
    return w;
  }
  function di(p, T, m, E, k) {
    p.l += 2;
    var w = p.read_shift(2), M = p.read_shift(2), X = i(p);
    if (w & 8257)
      throw new Error("Unsupported ZIP encryption");
    for (var L = p.read_shift(4), B = p.read_shift(4), H = p.read_shift(4), K = p.read_shift(2), Q = p.read_shift(2), se = "", Z = 0; Z < K; ++Z)
      se += String.fromCharCode(p[p.l++]);
    if (Q) {
      var te = c(
        /*::(*/
        p.slice(p.l, p.l + Q)
        /*:: :any)*/
      );
      (te[21589] || {}).mt && (X = te[21589].mt), ((k || {})[21589] || {}).mt && (X = k[21589].mt);
    }
    p.l += Q;
    var xe = p.slice(p.l, p.l + B);
    switch (M) {
      case 8:
        xe = U(p, H);
        break;
      case 0:
        break;
      default:
        throw new Error("Unsupported ZIP Compression method " + M);
    }
    var ye = !1;
    w & 8 && (L = p.read_shift(4), L == 134695760 && (L = p.read_shift(4), ye = !0), B = p.read_shift(4), H = p.read_shift(4)), B != T && A0(ye, "Bad compressed size: " + T + " != " + B), H != m && A0(ye, "Bad uncompressed size: " + m + " != " + H), Ct(E, se, xe, { unsafe: !0, mt: X });
  }
  function vi(p, T) {
    var m = T || {}, E = [], k = [], w = He(1), M = m.compression ? 8 : 0, X = 0, L = 0, B = 0, H = 0, K = 0, Q = p.FullPaths[0], se = Q, Z = p.FileIndex[0], te = [], xe = 0;
    for (L = 1; L < p.FullPaths.length; ++L)
      if (se = p.FullPaths[L].slice(Q.length), Z = p.FileIndex[L], !(!Z.size || !Z.content || se == "Sh33tJ5")) {
        var ye = H, De = He(se.length);
        for (B = 0; B < se.length; ++B)
          De.write_shift(1, se.charCodeAt(B) & 127);
        De = De.slice(0, De.l), te[K] = nc.buf(
          /*::((*/
          Z.content,
          0
        );
        var Ke = Z.content;
        M == 8 && (Ke = R(Ke)), w = He(30), w.write_shift(4, 67324752), w.write_shift(2, 20), w.write_shift(2, X), w.write_shift(2, M), Z.mt ? s(w, Z.mt) : w.write_shift(4, 0), w.write_shift(-4, te[K]), w.write_shift(4, Ke.length), w.write_shift(
          4,
          /*::(*/
          Z.content.length
        ), w.write_shift(2, De.length), w.write_shift(2, 0), H += w.length, E.push(w), H += De.length, E.push(De), H += Ke.length, E.push(Ke), w = He(46), w.write_shift(4, 33639248), w.write_shift(2, 0), w.write_shift(2, 20), w.write_shift(2, X), w.write_shift(2, M), w.write_shift(4, 0), w.write_shift(-4, te[K]), w.write_shift(4, Ke.length), w.write_shift(
          4,
          /*::(*/
          Z.content.length
        ), w.write_shift(2, De.length), w.write_shift(2, 0), w.write_shift(2, 0), w.write_shift(2, 0), w.write_shift(2, 0), w.write_shift(4, 0), w.write_shift(4, ye), xe += w.l, k.push(w), xe += De.length, k.push(De), ++K;
      }
    return w = He(22), w.write_shift(4, 101010256), w.write_shift(2, 0), w.write_shift(2, 0), w.write_shift(2, K), w.write_shift(2, K), w.write_shift(4, xe), w.write_shift(4, H), w.write_shift(2, 0), $r([$r(E), $r(k), w]);
  }
  var at = {
    htm: "text/html",
    xml: "text/xml",
    gif: "image/gif",
    jpg: "image/jpeg",
    png: "image/png",
    mso: "application/x-mso",
    thmx: "application/vnd.ms-officetheme",
    sh33tj5: "application/octet-stream"
  };
  function pi(p, T) {
    if (p.ctype)
      return p.ctype;
    var m = p.name || "", E = m.match(/\.([^\.]+)$/);
    return E && at[E[1]] || T && (E = (m = T).match(/[\.\\]([^\.\\])+$/), E && at[E[1]]) ? at[E[1]] : "application/octet-stream";
  }
  function gi(p) {
    for (var T = D0(p), m = [], E = 0; E < T.length; E += 76)
      m.push(T.slice(E, E + 76));
    return m.join(`\r
`) + `\r
`;
  }
  function mi(p) {
    var T = p.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g, function(B) {
      var H = B.charCodeAt(0).toString(16).toUpperCase();
      return "=" + (H.length == 1 ? "0" + H : H);
    });
    T = T.replace(/ $/mg, "=20").replace(/\t$/mg, "=09"), T.charAt(0) == `
` && (T = "=0D" + T.slice(1)), T = T.replace(/\r(?!\n)/mg, "=0D").replace(/\n\n/mg, `
=0A`).replace(/([^\r\n])\n/mg, "$1=0A");
    for (var m = [], E = T.split(`\r
`), k = 0; k < E.length; ++k) {
      var w = E[k];
      if (w.length == 0) {
        m.push("");
        continue;
      }
      for (var M = 0; M < w.length; ) {
        var X = 76, L = w.slice(M, M + X);
        L.charAt(X - 1) == "=" ? X-- : L.charAt(X - 2) == "=" ? X -= 2 : L.charAt(X - 3) == "=" && (X -= 3), L = w.slice(M, M + X), M += X, M < w.length && (L += "="), m.push(L);
      }
    }
    return m.join(`\r
`);
  }
  function _i(p) {
    for (var T = [], m = 0; m < p.length; ++m) {
      for (var E = p[m]; m <= p.length && E.charAt(E.length - 1) == "="; )
        E = E.slice(0, E.length - 1) + p[++m];
      T.push(E);
    }
    for (var k = 0; k < T.length; ++k)
      T[k] = T[k].replace(/[=][0-9A-Fa-f]{2}/g, function(w) {
        return String.fromCharCode(parseInt(w.slice(1), 16));
      });
    return kr(T.join(`\r
`));
  }
  function Ei(p, T, m) {
    for (var E = "", k = "", w = "", M, X = 0; X < 10; ++X) {
      var L = T[X];
      if (!L || L.match(/^\s*$/))
        break;
      var B = L.match(/^(.*?):\s*([^\s].*)$/);
      if (B)
        switch (B[1].toLowerCase()) {
          case "content-location":
            E = B[2].trim();
            break;
          case "content-type":
            w = B[2].trim();
            break;
          case "content-transfer-encoding":
            k = B[2].trim();
            break;
        }
    }
    switch (++X, k.toLowerCase()) {
      case "base64":
        M = kr(ur(T.slice(X).join("")));
        break;
      case "quoted-printable":
        M = _i(T.slice(X));
        break;
      default:
        throw new Error("Unsupported Content-Transfer-Encoding " + k);
    }
    var H = Ct(p, E.slice(m.length), M, { unsafe: !0 });
    w && (H.ctype = w);
  }
  function Ti(p, T) {
    if (W(p.slice(0, 13)).toLowerCase() != "mime-version:")
      throw new Error("Unsupported MAD header");
    var m = T && T.root || "", E = (me && Buffer.isBuffer(p) ? p.toString("binary") : W(p)).split(`\r
`), k = 0, w = "";
    for (k = 0; k < E.length; ++k)
      if (w = E[k], !!/^Content-Location:/i.test(w) && (w = w.slice(w.indexOf("file")), m || (m = w.slice(0, w.lastIndexOf("/") + 1)), w.slice(0, m.length) != m))
        for (; m.length > 0 && (m = m.slice(0, m.length - 1), m = m.slice(0, m.lastIndexOf("/") + 1), w.slice(0, m.length) != m); )
          ;
    var M = (E[1] || "").match(/boundary="(.*?)"/);
    if (!M)
      throw new Error("MAD cannot find boundary");
    var X = "--" + (M[1] || ""), L = [], B = [], H = {
      FileIndex: L,
      FullPaths: B
    };
    F(H);
    var K, Q = 0;
    for (k = 0; k < E.length; ++k) {
      var se = E[k];
      se !== X && se !== X + "--" || (Q++ && Ei(H, E.slice(K, k), m), K = k);
    }
    return H;
  }
  function ki(p, T) {
    var m = T || {}, E = m.boundary || "SheetJS";
    E = "------=" + E;
    for (var k = [
      "MIME-Version: 1.0",
      'Content-Type: multipart/related; boundary="' + E.slice(2) + '"',
      "",
      "",
      ""
    ], w = p.FullPaths[0], M = w, X = p.FileIndex[0], L = 1; L < p.FullPaths.length; ++L)
      if (M = p.FullPaths[L].slice(w.length), X = p.FileIndex[L], !(!X.size || !X.content || M == "Sh33tJ5")) {
        M = M.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g, function(xe) {
          return "_x" + xe.charCodeAt(0).toString(16) + "_";
        }).replace(/[\u0080-\uFFFF]/g, function(xe) {
          return "_u" + xe.charCodeAt(0).toString(16) + "_";
        });
        for (var B = X.content, H = me && Buffer.isBuffer(B) ? B.toString("binary") : W(B), K = 0, Q = Math.min(1024, H.length), se = 0, Z = 0; Z <= Q; ++Z)
          (se = H.charCodeAt(Z)) >= 32 && se < 128 && ++K;
        var te = K >= Q * 4 / 5;
        k.push(E), k.push("Content-Location: " + (m.root || "file:///C:/SheetJS/") + M), k.push("Content-Transfer-Encoding: " + (te ? "quoted-printable" : "base64")), k.push("Content-Type: " + pi(X, M)), k.push(""), k.push(te ? mi(H) : gi(H));
      }
    return k.push(E + `--\r
`), k.join(`\r
`);
  }
  function wi(p) {
    var T = {};
    return F(T, p), T;
  }
  function Ct(p, T, m, E) {
    var k = E && E.unsafe;
    k || F(p);
    var w = !k && _e.find(p, T);
    if (!w) {
      var M = p.FullPaths[0];
      T.slice(0, M.length) == M ? M = T : (M.slice(-1) != "/" && (M += "/"), M = (M + T).replace("//", "/")), w = { name: t(T), type: 2 }, p.FileIndex.push(w), p.FullPaths.push(M), k || _e.utils.cfb_gc(p);
    }
    return w.content = m, w.size = m ? m.length : 0, E && (E.CLSID && (w.clsid = E.CLSID), E.mt && (w.mt = E.mt), E.ct && (w.ct = E.ct)), w;
  }
  function Fi(p, T) {
    F(p);
    var m = _e.find(p, T);
    if (m) {
      for (var E = 0; E < p.FileIndex.length; ++E)
        if (p.FileIndex[E] == m)
          return p.FileIndex.splice(E, 1), p.FullPaths.splice(E, 1), !0;
    }
    return !1;
  }
  function Ai(p, T, m) {
    F(p);
    var E = _e.find(p, T);
    if (E) {
      for (var k = 0; k < p.FileIndex.length; ++k)
        if (p.FileIndex[k] == E)
          return p.FileIndex[k].name = t(m), p.FullPaths[k] = m, !0;
    }
    return !1;
  }
  function Si(p) {
    D(p, !0);
  }
  return a.find = G, a.read = I, a.parse = o, a.write = le, a.writeFile = Se, a.utils = {
    cfb_new: wi,
    cfb_add: Ct,
    cfb_del: Fi,
    cfb_mov: Ai,
    cfb_gc: Si,
    ReadShift: Na,
    CheckField: ds,
    prep_blob: $e,
    bconcat: $r,
    use_zlib: A,
    _deflateRaw: pe,
    _inflateRaw: F0,
    consts: ie
  }, a;
}();
function sc(e) {
  if (typeof Deno < "u")
    return Deno.readFileSync(e);
  if (typeof $ < "u" && typeof File < "u" && typeof Folder < "u")
    try {
      var a = File(e);
      a.open("r"), a.encoding = "binary";
      var r = a.read();
      return a.close(), r;
    } catch (n) {
      if (!n.message || !n.message.match(/onstruct/))
        throw n;
    }
  throw new Error("Cannot access file " + e);
}
function Or(e) {
  for (var a = Object.keys(e), r = [], n = 0; n < a.length; ++n)
    Object.prototype.hasOwnProperty.call(e, a[n]) && r.push(a[n]);
  return r;
}
function r0(e) {
  for (var a = [], r = Or(e), n = 0; n !== r.length; ++n)
    a[e[r[n]]] = r[n];
  return a;
}
var vt = /* @__PURE__ */ new Date(1899, 11, 30, 0, 0, 0);
function cr(e, a) {
  var r = /* @__PURE__ */ e.getTime();
  a && (r -= 1462 * 24 * 60 * 60 * 1e3);
  var n = /* @__PURE__ */ vt.getTime() + (/* @__PURE__ */ e.getTimezoneOffset() - /* @__PURE__ */ vt.getTimezoneOffset()) * 6e4;
  return (r - n) / (24 * 60 * 60 * 1e3);
}
var zn = /* @__PURE__ */ new Date(), ic = /* @__PURE__ */ vt.getTime() + (/* @__PURE__ */ zn.getTimezoneOffset() - /* @__PURE__ */ vt.getTimezoneOffset()) * 6e4, b0 = /* @__PURE__ */ zn.getTimezoneOffset();
function wt(e) {
  var a = /* @__PURE__ */ new Date();
  return a.setTime(e * 24 * 60 * 60 * 1e3 + ic), a.getTimezoneOffset() !== b0 && a.setTime(a.getTime() + (a.getTimezoneOffset() - b0) * 6e4), a;
}
function cc(e) {
  var a = 0, r = 0, n = !1, t = e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);
  if (!t)
    throw new Error("|" + e + "| is not an ISO8601 Duration");
  for (var s = 1; s != t.length; ++s)
    if (t[s]) {
      switch (r = 1, s > 3 && (n = !0), t[s].slice(t[s].length - 1)) {
        case "Y":
          throw new Error("Unsupported ISO Duration Field: " + t[s].slice(t[s].length - 1));
        case "D":
          r *= 24;
        case "H":
          r *= 60;
        case "M":
          if (n)
            r *= 60;
          else
            throw new Error("Unsupported ISO Duration Field: M");
      }
      a += r * parseInt(t[s], 10);
    }
  return a;
}
var U0 = /* @__PURE__ */ new Date("2017-02-19T19:06:09.000Z"), jn = /* @__PURE__ */ isNaN(/* @__PURE__ */ U0.getFullYear()) ? /* @__PURE__ */ new Date("2/19/17") : U0, fc = /* @__PURE__ */ jn.getFullYear() == 2017;
function Xe(e, a) {
  var r = new Date(e);
  if (fc)
    return a > 0 ? r.setTime(r.getTime() + r.getTimezoneOffset() * 60 * 1e3) : a < 0 && r.setTime(r.getTime() - r.getTimezoneOffset() * 60 * 1e3), r;
  if (e instanceof Date)
    return e;
  if (jn.getFullYear() == 1917 && !isNaN(r.getFullYear())) {
    var n = r.getFullYear();
    return e.indexOf("" + n) > -1 || r.setFullYear(r.getFullYear() + 100), r;
  }
  var t = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"], s = new Date(+t[0], +t[1] - 1, +t[2], +t[3] || 0, +t[4] || 0, +t[5] || 0);
  return e.indexOf("Z") > -1 && (s = new Date(s.getTime() - s.getTimezoneOffset() * 60 * 1e3)), s;
}
function sa(e, a) {
  if (me && Buffer.isBuffer(e)) {
    if (a) {
      if (e[0] == 255 && e[1] == 254)
        return Ia(e.slice(2).toString("utf16le"));
      if (e[1] == 254 && e[2] == 255)
        return Ia(Nn(e.slice(2).toString("binary")));
    }
    return e.toString("binary");
  }
  if (typeof TextDecoder < "u")
    try {
      if (a) {
        if (e[0] == 255 && e[1] == 254)
          return Ia(new TextDecoder("utf-16le").decode(e.slice(2)));
        if (e[0] == 254 && e[1] == 255)
          return Ia(new TextDecoder("utf-16be").decode(e.slice(2)));
      }
      var r = {
        "€": "",
        "‚": "",
        ƒ: "",
        "„": "",
        "…": "",
        "†": "",
        "‡": "",
        "ˆ": "",
        "‰": "",
        Š: "",
        "‹": "",
        Œ: "",
        Ž: "",
        "‘": "",
        "’": "",
        "“": "",
        "”": "",
        "•": "",
        "–": "",
        "—": "",
        "˜": "",
        "™": "",
        š: "",
        "›": "",
        œ: "",
        ž: "",
        Ÿ: ""
      };
      return Array.isArray(e) && (e = new Uint8Array(e)), new TextDecoder("latin1").decode(e).replace(/[€‚ƒ„…†‡ˆ‰Š‹ŒŽ‘’“”•–—˜™š›œžŸ]/g, function(s) {
        return r[s] || s;
      });
    } catch {
    }
  for (var n = [], t = 0; t != e.length; ++t)
    n.push(String.fromCharCode(e[t]));
  return n.join("");
}
function ze(e) {
  if (typeof JSON < "u" && !Array.isArray(e))
    return JSON.parse(JSON.stringify(e));
  if (typeof e != "object" || e == null)
    return e;
  if (e instanceof Date)
    return new Date(e.getTime());
  var a = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (a[r] = ze(e[r]));
  return a;
}
function Oe(e, a) {
  for (var r = ""; r.length < a; )
    r += e;
  return r;
}
function Ar(e) {
  var a = Number(e);
  if (!isNaN(a))
    return isFinite(a) ? a : NaN;
  if (!/\d/.test(e))
    return a;
  var r = 1, n = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function() {
    return r *= 100, "";
  });
  return !isNaN(a = Number(n)) || (n = n.replace(/[(](.*)[)]/, function(t, s) {
    return r = -r, s;
  }), !isNaN(a = Number(n))) ? a / r : a;
}
var oc = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
function _a(e) {
  var a = new Date(e), r = /* @__PURE__ */ new Date(NaN), n = a.getYear(), t = a.getMonth(), s = a.getDate();
  if (isNaN(s))
    return r;
  var i = e.toLowerCase();
  if (i.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) {
    if (i = i.replace(/[^a-z]/g, "").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/, ""), i.length > 3 && oc.indexOf(i) == -1)
      return r;
  } else if (i.match(/[a-z]/))
    return r;
  return n < 0 || n > 8099 ? r : (t > 0 || s > 1) && n != 101 ? a : e.match(/[^-0-9:,\/\\]/) ? r : a;
}
var lc = /* @__PURE__ */ function() {
  var e = "abacaba".split(/(:?b)/i).length == 5;
  return function(r, n, t) {
    if (e || typeof n == "string")
      return r.split(n);
    for (var s = r.split(n), i = [s[0]], c = 1; c < s.length; ++c)
      i.push(t), i.push(s[c]);
    return i;
  };
}();
function Kn(e) {
  return e ? e.content && e.type ? sa(e.content, !0) : e.data ? Da(e.data) : e.asNodeBuffer && me ? Da(e.asNodeBuffer().toString("binary")) : e.asBinary ? Da(e.asBinary()) : e._data && e._data.getContent ? Da(sa(Array.prototype.slice.call(e._data.getContent(), 0))) : null : null;
}
function Yn(e) {
  if (!e)
    return null;
  if (e.data)
    return C0(e.data);
  if (e.asNodeBuffer && me)
    return e.asNodeBuffer();
  if (e._data && e._data.getContent) {
    var a = e._data.getContent();
    return typeof a == "string" ? C0(a) : Array.prototype.slice.call(a);
  }
  return e.content && e.type ? e.content : null;
}
function hc(e) {
  return e && e.name.slice(-4) === ".bin" ? Yn(e) : Kn(e);
}
function gr(e, a) {
  for (var r = e.FullPaths || Or(e.files), n = a.toLowerCase().replace(/[\/]/g, "\\"), t = n.replace(/\\/g, "/"), s = 0; s < r.length; ++s) {
    var i = r[s].replace(/^Root Entry[\/]/, "").toLowerCase();
    if (n == i || t == i)
      return e.files ? e.files[r[s]] : e.FileIndex[s];
  }
  return null;
}
function a0(e, a) {
  var r = gr(e, a);
  if (r == null)
    throw new Error("Cannot find file " + a + " in zip");
  return r;
}
function Be(e, a, r) {
  if (!r)
    return hc(a0(e, a));
  if (!a)
    return null;
  try {
    return Be(e, a);
  } catch {
    return null;
  }
}
function hr(e, a, r) {
  if (!r)
    return Kn(a0(e, a));
  if (!a)
    return null;
  try {
    return hr(e, a);
  } catch {
    return null;
  }
}
function Jn(e, a, r) {
  if (!r)
    return Yn(a0(e, a));
  if (!a)
    return null;
  try {
    return Jn(e, a);
  } catch {
    return null;
  }
}
function H0(e) {
  for (var a = e.FullPaths || Or(e.files), r = [], n = 0; n < a.length; ++n)
    a[n].slice(-1) != "/" && r.push(a[n].replace(/^Root Entry[\/]/, ""));
  return r.sort();
}
function uc(e, a, r) {
  if (e.FullPaths) {
    if (typeof r == "string") {
      var n;
      return me ? n = ca(r) : n = Ii(r), _e.utils.cfb_add(e, a, n);
    }
    _e.utils.cfb_add(e, a, r);
  } else
    e.file(a, r);
}
function Zn(e, a) {
  switch (a.type) {
    case "base64":
      return _e.read(e, { type: "base64" });
    case "binary":
      return _e.read(e, { type: "binary" });
    case "buffer":
    case "array":
      return _e.read(e, { type: "buffer" });
  }
  throw new Error("Unrecognized type " + a.type);
}
function Ra(e, a) {
  if (e.charAt(0) == "/")
    return e.slice(1);
  var r = a.split("/");
  a.slice(-1) != "/" && r.pop();
  for (var n = e.split("/"); n.length !== 0; ) {
    var t = n.shift();
    t === ".." ? r.pop() : t !== "." && r.push(t);
  }
  return r.join("/");
}
var qn = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r
`, xc = /([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g, V0 = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/mg, dc = /<[^>]*>/g, rr = /* @__PURE__ */ qn.match(V0) ? V0 : dc, vc = /<\w*:/, pc = /<(\/?)\w+:/;
function oe(e, a, r) {
  for (var n = {}, t = 0, s = 0; t !== e.length && !((s = e.charCodeAt(t)) === 32 || s === 10 || s === 13); ++t)
    ;
  if (a || (n[0] = e.slice(0, t)), t === e.length)
    return n;
  var i = e.match(xc), c = 0, f = "", l = 0, o = "", h = "", x = 1;
  if (i)
    for (l = 0; l != i.length; ++l) {
      for (h = i[l], s = 0; s != h.length && h.charCodeAt(s) !== 61; ++s)
        ;
      for (o = h.slice(0, s).trim(); h.charCodeAt(s + 1) == 32; )
        ++s;
      for (x = (t = h.charCodeAt(s + 1)) == 34 || t == 39 ? 1 : 0, f = h.slice(s + 1 + x, h.length - x), c = 0; c != o.length && o.charCodeAt(c) !== 58; ++c)
        ;
      if (c === o.length)
        o.indexOf("_") > 0 && (o = o.slice(0, o.indexOf("_"))), n[o] = f, r || (n[o.toLowerCase()] = f);
      else {
        var d = (c === 5 && o.slice(0, 5) === "xmlns" ? "xmlns" : "") + o.slice(c + 1);
        if (n[d] && o.slice(c - 3, c) == "ext")
          continue;
        n[d] = f, r || (n[d.toLowerCase()] = f);
      }
    }
  return n;
}
function Rr(e) {
  return e.replace(pc, "<$1");
}
var Qn = {
  "&quot;": '"',
  "&apos;": "'",
  "&gt;": ">",
  "&lt;": "<",
  "&amp;": "&"
}, gc = /* @__PURE__ */ r0(Qn), ke = /* @__PURE__ */ function() {
  var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/ig, a = /_x([\da-fA-F]{4})_/ig;
  return function r(n) {
    var t = n + "", s = t.indexOf("<![CDATA[");
    if (s == -1)
      return t.replace(e, function(c, f) {
        return Qn[c] || String.fromCharCode(parseInt(f, c.indexOf("x") > -1 ? 16 : 10)) || c;
      }).replace(a, function(c, f) {
        return String.fromCharCode(parseInt(f, 16));
      });
    var i = t.indexOf("]]>");
    return r(t.slice(0, s)) + t.slice(s + 9, i) + r(t.slice(i + 3));
  };
}(), mc = /[&<>'"]/g, _c = /[\u0000-\u001f]/g;
function t0(e) {
  var a = e + "";
  return a.replace(mc, function(r) {
    return gc[r];
  }).replace(/\n/g, "<br/>").replace(_c, function(r) {
    return "&#x" + ("000" + r.charCodeAt(0).toString(16)).slice(-4) + ";";
  });
}
var W0 = /* @__PURE__ */ function() {
  var e = /&#(\d+);/g;
  function a(r, n) {
    return String.fromCharCode(parseInt(n, 10));
  }
  return function(n) {
    return n.replace(e, a);
  };
}();
function Ce(e) {
  switch (e) {
    case 1:
    case !0:
    case "1":
    case "true":
    case "TRUE":
      return !0;
    default:
      return !1;
  }
}
function Ot(e) {
  for (var a = "", r = 0, n = 0, t = 0, s = 0, i = 0, c = 0; r < e.length; ) {
    if (n = e.charCodeAt(r++), n < 128) {
      a += String.fromCharCode(n);
      continue;
    }
    if (t = e.charCodeAt(r++), n > 191 && n < 224) {
      i = (n & 31) << 6, i |= t & 63, a += String.fromCharCode(i);
      continue;
    }
    if (s = e.charCodeAt(r++), n < 240) {
      a += String.fromCharCode((n & 15) << 12 | (t & 63) << 6 | s & 63);
      continue;
    }
    i = e.charCodeAt(r++), c = ((n & 7) << 18 | (t & 63) << 12 | (s & 63) << 6 | i & 63) - 65536, a += String.fromCharCode(55296 + (c >>> 10 & 1023)), a += String.fromCharCode(56320 + (c & 1023));
  }
  return a;
}
function G0(e) {
  var a = Yr(2 * e.length), r, n, t = 1, s = 0, i = 0, c;
  for (n = 0; n < e.length; n += t)
    t = 1, (c = e.charCodeAt(n)) < 128 ? r = c : c < 224 ? (r = (c & 31) * 64 + (e.charCodeAt(n + 1) & 63), t = 2) : c < 240 ? (r = (c & 15) * 4096 + (e.charCodeAt(n + 1) & 63) * 64 + (e.charCodeAt(n + 2) & 63), t = 3) : (t = 4, r = (c & 7) * 262144 + (e.charCodeAt(n + 1) & 63) * 4096 + (e.charCodeAt(n + 2) & 63) * 64 + (e.charCodeAt(n + 3) & 63), r -= 65536, i = 55296 + (r >>> 10 & 1023), r = 56320 + (r & 1023)), i !== 0 && (a[s++] = i & 255, a[s++] = i >>> 8, i = 0), a[s++] = r % 256, a[s++] = r >>> 8;
  return a.slice(0, s).toString("ucs2");
}
function X0(e) {
  return ca(e, "binary").toString("utf8");
}
var nt = "foo bar bazâð£", Ae = me && (/* @__PURE__ */ X0(nt) == /* @__PURE__ */ Ot(nt) && X0 || /* @__PURE__ */ G0(nt) == /* @__PURE__ */ Ot(nt) && G0) || Ot, Ia = me ? function(e) {
  return ca(e, "utf8").toString("binary");
} : function(e) {
  for (var a = [], r = 0, n = 0, t = 0; r < e.length; )
    switch (n = e.charCodeAt(r++), !0) {
      case n < 128:
        a.push(String.fromCharCode(n));
        break;
      case n < 2048:
        a.push(String.fromCharCode(192 + (n >> 6))), a.push(String.fromCharCode(128 + (n & 63)));
        break;
      case (n >= 55296 && n < 57344):
        n -= 55296, t = e.charCodeAt(r++) - 56320 + (n << 10), a.push(String.fromCharCode(240 + (t >> 18 & 7))), a.push(String.fromCharCode(144 + (t >> 12 & 63))), a.push(String.fromCharCode(128 + (t >> 6 & 63))), a.push(String.fromCharCode(128 + (t & 63)));
        break;
      default:
        a.push(String.fromCharCode(224 + (n >> 12))), a.push(String.fromCharCode(128 + (n >> 6 & 63))), a.push(String.fromCharCode(128 + (n & 63)));
    }
  return a.join("");
}, Ga = /* @__PURE__ */ function() {
  var e = {};
  return function(r, n) {
    var t = r + "|" + (n || "");
    return e[t] ? e[t] : e[t] = new RegExp("<(?:\\w+:)?" + r + '(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?' + r + ">", n || "");
  };
}(), es = /* @__PURE__ */ function() {
  var e = [
    ["nbsp", " "],
    ["middot", "·"],
    ["quot", '"'],
    ["apos", "'"],
    ["gt", ">"],
    ["lt", "<"],
    ["amp", "&"]
  ].map(function(a) {
    return [new RegExp("&" + a[0] + ";", "ig"), a[1]];
  });
  return function(r) {
    for (var n = r.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, `
`).replace(/<[^>]*>/g, ""), t = 0; t < e.length; ++t)
      n = n.replace(e[t][0], e[t][1]);
    return n;
  };
}(), Ec = /* @__PURE__ */ function() {
  var e = {};
  return function(r) {
    return e[r] !== void 0 ? e[r] : e[r] = new RegExp("<(?:vt:)?" + r + ">([\\s\\S]*?)</(?:vt:)?" + r + ">", "g");
  };
}(), Tc = /<\/?(?:vt:)?variant>/g, kc = /<(?:vt:)([^>]*)>([\s\S]*)</;
function $0(e, a) {
  var r = oe(e), n = e.match(Ec(r.baseType)) || [], t = [];
  if (n.length != r.size) {
    if (a.WTF)
      throw new Error("unexpected vector length " + n.length + " != " + r.size);
    return t;
  }
  return n.forEach(function(s) {
    var i = s.replace(Tc, "").match(kc);
    i && t.push({ v: Ae(i[2]), t: i[1] });
  }), t;
}
var wc = /(^\s|\s$|\n)/;
function Fc(e) {
  return Or(e).map(function(a) {
    return " " + a + '="' + e[a] + '"';
  }).join("");
}
function Ac(e, a, r) {
  return "<" + e + (r != null ? Fc(r) : "") + (a != null ? (a.match(wc) ? ' xml:space="preserve"' : "") + ">" + a + "</" + e : "/") + ">";
}
function n0(e) {
  if (me && /*::typeof Buffer !== "undefined" && d != null && d instanceof Buffer &&*/
  Buffer.isBuffer(e))
    return e.toString("utf8");
  if (typeof e == "string")
    return e;
  if (typeof Uint8Array < "u" && e instanceof Uint8Array)
    return Ae(fa(qt(e)));
  throw new Error("Bad input format: expected Buffer or string");
}
var Xa = /<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/][^>]*)?>/mg, Sc = {
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/metadata/core-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",
  CT: "http://schemas.openxmlformats.org/package/2006/content-types",
  RELS: "http://schemas.openxmlformats.org/package/2006/relationships",
  TCMNT: "http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",
  dc: "http://purl.org/dc/elements/1.1/",
  dcterms: "http://purl.org/dc/terms/",
  dcmitype: "http://purl.org/dc/dcmitype/",
  mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
  r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
  sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
  vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
  xsi: "http://www.w3.org/2001/XMLSchema-instance",
  xsd: "http://www.w3.org/2001/XMLSchema"
}, Cc = [
  "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
  "http://purl.oclc.org/ooxml/spreadsheetml/main",
  "http://schemas.microsoft.com/office/excel/2006/main",
  "http://schemas.microsoft.com/office/excel/2006/2"
];
function yc(e, a) {
  for (var r = 1 - 2 * (e[a + 7] >>> 7), n = ((e[a + 7] & 127) << 4) + (e[a + 6] >>> 4 & 15), t = e[a + 6] & 15, s = 5; s >= 0; --s)
    t = t * 256 + e[a + s];
  return n == 2047 ? t == 0 ? r * (1 / 0) : NaN : (n == 0 ? n = -1022 : (n -= 1023, t += Math.pow(2, 52)), r * Math.pow(2, n - 52) * t);
}
function Dc(e, a, r) {
  var n = (a < 0 || 1 / a == -1 / 0 ? 1 : 0) << 7, t = 0, s = 0, i = n ? -a : a;
  isFinite(i) ? i == 0 ? t = s = 0 : (t = Math.floor(Math.log(i) / Math.LN2), s = i * Math.pow(2, 52 - t), t <= -1023 && (!isFinite(s) || s < Math.pow(2, 52)) ? t = -1022 : (s -= Math.pow(2, 52), t += 1023)) : (t = 2047, s = isNaN(a) ? 26985 : 0);
  for (var c = 0; c <= 5; ++c, s /= 256)
    e[r + c] = s & 255;
  e[r + 6] = (t & 15) << 4 | s & 15, e[r + 7] = t >> 4 | n;
}
var z0 = function(e) {
  for (var a = [], r = 10240, n = 0; n < e[0].length; ++n)
    if (e[0][n])
      for (var t = 0, s = e[0][n].length; t < s; t += r)
        a.push.apply(a, e[0][n].slice(t, t + r));
  return a;
}, j0 = me ? function(e) {
  return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0].map(function(a) {
    return Buffer.isBuffer(a) ? a : ca(a);
  })) : z0(e);
} : z0, K0 = function(e, a, r) {
  for (var n = [], t = a; t < r; t += 2)
    n.push(String.fromCharCode(Mr(e, t)));
  return n.join("").replace(ir, "");
}, s0 = me ? function(e, a, r) {
  return Buffer.isBuffer(e) ? e.toString("utf16le", a, r).replace(ir, "") : K0(e, a, r);
} : K0, Y0 = function(e, a, r) {
  for (var n = [], t = a; t < a + r; ++t)
    n.push(("0" + e[t].toString(16)).slice(-2));
  return n.join("");
}, rs = me ? function(e, a, r) {
  return Buffer.isBuffer(e) ? e.toString("hex", a, a + r) : Y0(e, a, r);
} : Y0, J0 = function(e, a, r) {
  for (var n = [], t = a; t < r; t++)
    n.push(String.fromCharCode(da(e, t)));
  return n.join("");
}, Ja = me ? function(a, r, n) {
  return Buffer.isBuffer(a) ? a.toString("utf8", r, n) : J0(a, r, n);
} : J0, as = function(e, a) {
  var r = lr(e, a);
  return r > 0 ? Ja(e, a + 4, a + 4 + r - 1) : "";
}, ts = as, ns = function(e, a) {
  var r = lr(e, a);
  return r > 0 ? Ja(e, a + 4, a + 4 + r - 1) : "";
}, ss = ns, is = function(e, a) {
  var r = 2 * lr(e, a);
  return r > 0 ? Ja(e, a + 4, a + 4 + r - 1) : "";
}, cs = is, fs = function(a, r) {
  var n = lr(a, r);
  return n > 0 ? s0(a, r + 4, r + 4 + n) : "";
}, os = fs, ls = function(e, a) {
  var r = lr(e, a);
  return r > 0 ? Ja(e, a + 4, a + 4 + r) : "";
}, hs = ls, us = function(e, a) {
  return yc(e, a);
}, pt = us, xs = function(a) {
  return Array.isArray(a) || typeof Uint8Array < "u" && a instanceof Uint8Array;
};
me && (ts = function(a, r) {
  if (!Buffer.isBuffer(a))
    return as(a, r);
  var n = a.readUInt32LE(r);
  return n > 0 ? a.toString("utf8", r + 4, r + 4 + n - 1) : "";
}, ss = function(a, r) {
  if (!Buffer.isBuffer(a))
    return ns(a, r);
  var n = a.readUInt32LE(r);
  return n > 0 ? a.toString("utf8", r + 4, r + 4 + n - 1) : "";
}, cs = function(a, r) {
  if (!Buffer.isBuffer(a))
    return is(a, r);
  var n = 2 * a.readUInt32LE(r);
  return a.toString("utf16le", r + 4, r + 4 + n - 1);
}, os = function(a, r) {
  if (!Buffer.isBuffer(a))
    return fs(a, r);
  var n = a.readUInt32LE(r);
  return a.toString("utf16le", r + 4, r + 4 + n);
}, hs = function(a, r) {
  if (!Buffer.isBuffer(a))
    return ls(a, r);
  var n = a.readUInt32LE(r);
  return a.toString("utf8", r + 4, r + 4 + n);
}, pt = function(a, r) {
  return Buffer.isBuffer(a) ? a.readDoubleLE(r) : us(a, r);
}, xs = function(a) {
  return Buffer.isBuffer(a) || Array.isArray(a) || typeof Uint8Array < "u" && a instanceof Uint8Array;
});
var da = function(e, a) {
  return e[a];
}, Mr = function(e, a) {
  return e[a + 1] * 256 + e[a];
}, Oc = function(e, a) {
  var r = e[a + 1] * 256 + e[a];
  return r < 32768 ? r : (65535 - r + 1) * -1;
}, lr = function(e, a) {
  return e[a + 3] * (1 << 24) + (e[a + 2] << 16) + (e[a + 1] << 8) + e[a];
}, ea = function(e, a) {
  return e[a + 3] << 24 | e[a + 2] << 16 | e[a + 1] << 8 | e[a];
}, Rc = function(e, a) {
  return e[a] << 24 | e[a + 1] << 16 | e[a + 2] << 8 | e[a + 3];
};
function Na(e, a) {
  var r = "", n, t, s = [], i, c, f, l;
  switch (a) {
    case "dbcs":
      if (l = this.l, me && Buffer.isBuffer(this))
        r = this.slice(this.l, this.l + 2 * e).toString("utf16le");
      else
        for (f = 0; f < e; ++f)
          r += String.fromCharCode(Mr(this, l)), l += 2;
      e *= 2;
      break;
    case "utf8":
      r = Ja(this, this.l, this.l + e);
      break;
    case "utf16le":
      e *= 2, r = s0(this, this.l, this.l + e);
      break;
    case "wstr":
      return Na.call(this, e, "dbcs");
    case "lpstr-ansi":
      r = ts(this, this.l), e = 4 + lr(this, this.l);
      break;
    case "lpstr-cp":
      r = ss(this, this.l), e = 4 + lr(this, this.l);
      break;
    case "lpwstr":
      r = cs(this, this.l), e = 4 + 2 * lr(this, this.l);
      break;
    case "lpp4":
      e = 4 + lr(this, this.l), r = os(this, this.l), e & 2 && (e += 2);
      break;
    case "8lpp4":
      e = 4 + lr(this, this.l), r = hs(this, this.l), e & 3 && (e += 4 - (e & 3));
      break;
    case "cstr":
      for (e = 0, r = ""; (i = da(this, this.l + e++)) !== 0; )
        s.push(tt(i));
      r = s.join("");
      break;
    case "_wstr":
      for (e = 0, r = ""; (i = Mr(this, this.l + e)) !== 0; )
        s.push(tt(i)), e += 2;
      e += 2, r = s.join("");
      break;
    case "dbcs-cont":
      for (r = "", l = this.l, f = 0; f < e; ++f) {
        if (this.lens && this.lens.indexOf(l) !== -1)
          return i = da(this, l), this.l = l + 1, c = Na.call(this, e - f, i ? "dbcs-cont" : "sbcs-cont"), s.join("") + c;
        s.push(tt(Mr(this, l))), l += 2;
      }
      r = s.join(""), e *= 2;
      break;
    case "cpstr":
    case "sbcs-cont":
      for (r = "", l = this.l, f = 0; f != e; ++f) {
        if (this.lens && this.lens.indexOf(l) !== -1)
          return i = da(this, l), this.l = l + 1, c = Na.call(this, e - f, i ? "dbcs-cont" : "sbcs-cont"), s.join("") + c;
        s.push(tt(da(this, l))), l += 1;
      }
      r = s.join("");
      break;
    default:
      switch (e) {
        case 1:
          return n = da(this, this.l), this.l++, n;
        case 2:
          return n = (a === "i" ? Oc : Mr)(this, this.l), this.l += 2, n;
        case 4:
        case -4:
          return a === "i" || !(this[this.l + 3] & 128) ? (n = (e > 0 ? ea : Rc)(this, this.l), this.l += 4, n) : (t = lr(this, this.l), this.l += 4, t);
        case 8:
        case -8:
          if (a === "f")
            return e == 8 ? t = pt(this, this.l) : t = pt([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0), this.l += 8, t;
          e = 8;
        case 16:
          r = rs(this, this.l, e);
          break;
      }
  }
  return this.l += e, r;
}
var Ic = function(e, a, r) {
  e[r] = a & 255, e[r + 1] = a >>> 8 & 255, e[r + 2] = a >>> 16 & 255, e[r + 3] = a >>> 24 & 255;
}, Nc = function(e, a, r) {
  e[r] = a & 255, e[r + 1] = a >> 8 & 255, e[r + 2] = a >> 16 & 255, e[r + 3] = a >> 24 & 255;
}, Pc = function(e, a, r) {
  e[r] = a & 255, e[r + 1] = a >>> 8 & 255;
};
function Lc(e, a, r) {
  var n = 0, t = 0;
  if (r === "dbcs") {
    for (t = 0; t != a.length; ++t)
      Pc(this, a.charCodeAt(t), this.l + 2 * t);
    n = 2 * a.length;
  } else if (r === "sbcs") {
    for (a = a.replace(/[^\x00-\x7F]/g, "_"), t = 0; t != a.length; ++t)
      this[this.l + t] = a.charCodeAt(t) & 255;
    n = a.length;
  } else if (r === "hex") {
    for (; t < e; ++t)
      this[this.l++] = parseInt(a.slice(2 * t, 2 * t + 2), 16) || 0;
    return this;
  } else if (r === "utf16le") {
    var s = Math.min(this.l + e, this.length);
    for (t = 0; t < Math.min(a.length, e); ++t) {
      var i = a.charCodeAt(t);
      this[this.l++] = i & 255, this[this.l++] = i >> 8;
    }
    for (; this.l < s; )
      this[this.l++] = 0;
    return this;
  } else
    switch (e) {
      case 1:
        n = 1, this[this.l] = a & 255;
        break;
      case 2:
        n = 2, this[this.l] = a & 255, a >>>= 8, this[this.l + 1] = a & 255;
        break;
      case 3:
        n = 3, this[this.l] = a & 255, a >>>= 8, this[this.l + 1] = a & 255, a >>>= 8, this[this.l + 2] = a & 255;
        break;
      case 4:
        n = 4, Ic(this, a, this.l);
        break;
      case 8:
        if (n = 8, r === "f") {
          Dc(this, a, this.l);
          break;
        }
      case 16:
        break;
      case -4:
        n = 4, Nc(this, a, this.l);
        break;
    }
  return this.l += n, this;
}
function ds(e, a) {
  var r = rs(this, this.l, e.length >> 1);
  if (r !== e)
    throw new Error(a + "Expected " + e + " saw " + r);
  this.l += e.length >> 1;
}
function $e(e, a) {
  e.l = a, e.read_shift = /*::(*/
  Na, e.chk = ds, e.write_shift = Lc;
}
function er(e, a) {
  e.l += a;
}
function He(e) {
  var a = Yr(e);
  return $e(a, 0), a;
}
function Hr(e, a, r) {
  if (e) {
    var n, t, s;
    $e(e, e.l || 0);
    for (var i = e.length, c = 0, f = 0; e.l < i; ) {
      c = e.read_shift(1), c & 128 && (c = (c & 127) + ((e.read_shift(1) & 127) << 7));
      var l = kt[c] || kt[65535];
      for (n = e.read_shift(1), s = n & 127, t = 1; t < 4 && n & 128; ++t)
        s += ((n = e.read_shift(1)) & 127) << 7 * t;
      f = e.l + s;
      var o = l.f && l.f(e, s, r);
      if (e.l = f, a(o, l, c))
        return;
    }
  }
}
function Ut() {
  var e = [], a = me ? 256 : 2048, r = function(l) {
    var o = He(l);
    return $e(o, 0), o;
  }, n = r(a), t = function() {
    n && (n.length > n.l && (n = n.slice(0, n.l), n.l = n.length), n.length > 0 && e.push(n), n = null);
  }, s = function(l) {
    return n && l < n.length - n.l ? n : (t(), n = r(Math.max(l + 1, a)));
  }, i = function() {
    return t(), $r(e);
  }, c = function(l) {
    t(), n = l, n.l == null && (n.l = n.length), s(a);
  };
  return { next: s, push: c, end: i, _bufs: e };
}
function Pa(e, a, r) {
  var n = ze(e);
  if (a.s ? (n.cRel && (n.c += a.s.c), n.rRel && (n.r += a.s.r)) : (n.cRel && (n.c += a.c), n.rRel && (n.r += a.r)), !r || r.biff < 12) {
    for (; n.c >= 256; )
      n.c -= 256;
    for (; n.r >= 65536; )
      n.r -= 65536;
  }
  return n;
}
function Z0(e, a, r) {
  var n = ze(e);
  return n.s = Pa(n.s, a.s, r), n.e = Pa(n.e, a.s, r), n;
}
function La(e, a) {
  if (e.cRel && e.c < 0)
    for (e = ze(e); e.c < 0; )
      e.c += a > 8 ? 16384 : 256;
  if (e.rRel && e.r < 0)
    for (e = ze(e); e.r < 0; )
      e.r += a > 8 ? 1048576 : a > 5 ? 65536 : 16384;
  var r = ue(e);
  return !e.cRel && e.cRel != null && (r = bc(r)), !e.rRel && e.rRel != null && (r = Mc(r)), r;
}
function Rt(e, a) {
  return e.s.r == 0 && !e.s.rRel && e.e.r == (a.biff >= 12 ? 1048575 : a.biff >= 8 ? 65536 : 16384) && !e.e.rRel ? (e.s.cRel ? "" : "$") + Ve(e.s.c) + ":" + (e.e.cRel ? "" : "$") + Ve(e.e.c) : e.s.c == 0 && !e.s.cRel && e.e.c == (a.biff >= 12 ? 16383 : 255) && !e.e.cRel ? (e.s.rRel ? "" : "$") + je(e.s.r) + ":" + (e.e.rRel ? "" : "$") + je(e.e.r) : La(e.s, a.biff) + ":" + La(e.e, a.biff);
}
function i0(e) {
  return parseInt(Bc(e), 10) - 1;
}
function je(e) {
  return "" + (e + 1);
}
function Mc(e) {
  return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
}
function Bc(e) {
  return e.replace(/\$(\d+)$/, "$1");
}
function c0(e) {
  for (var a = Uc(e), r = 0, n = 0; n !== a.length; ++n)
    r = 26 * r + a.charCodeAt(n) - 64;
  return r - 1;
}
function Ve(e) {
  if (e < 0)
    throw new Error("invalid column " + e);
  var a = "";
  for (++e; e; e = Math.floor((e - 1) / 26))
    a = String.fromCharCode((e - 1) % 26 + 65) + a;
  return a;
}
function bc(e) {
  return e.replace(/^([A-Z])/, "$$$1");
}
function Uc(e) {
  return e.replace(/^\$([A-Z])/, "$1");
}
function Hc(e) {
  return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
}
function sr(e) {
  for (var a = 0, r = 0, n = 0; n < e.length; ++n) {
    var t = e.charCodeAt(n);
    t >= 48 && t <= 57 ? a = 10 * a + (t - 48) : t >= 65 && t <= 90 && (r = 26 * r + (t - 64));
  }
  return { c: r - 1, r: a - 1 };
}
function ue(e) {
  for (var a = e.c + 1, r = ""; a; a = (a - 1) / 26 | 0)
    r = String.fromCharCode((a - 1) % 26 + 65) + r;
  return r + (e.r + 1);
}
function ka(e) {
  var a = e.indexOf(":");
  return a == -1 ? { s: sr(e), e: sr(e) } : { s: sr(e.slice(0, a)), e: sr(e.slice(a + 1)) };
}
function Ee(e, a) {
  return typeof a > "u" || typeof a == "number" ? Ee(e.s, e.e) : (typeof e != "string" && (e = ue(e)), typeof a != "string" && (a = ue(a)), e == a ? e : e + ":" + a);
}
function Re(e) {
  var a = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }, r = 0, n = 0, t = 0, s = e.length;
  for (r = 0; n < s && !((t = e.charCodeAt(n) - 64) < 1 || t > 26); ++n)
    r = 26 * r + t;
  for (a.s.c = --r, r = 0; n < s && !((t = e.charCodeAt(n) - 48) < 0 || t > 9); ++n)
    r = 10 * r + t;
  if (a.s.r = --r, n === s || t != 10)
    return a.e.c = a.s.c, a.e.r = a.s.r, a;
  for (++n, r = 0; n != s && !((t = e.charCodeAt(n) - 64) < 1 || t > 26); ++n)
    r = 26 * r + t;
  for (a.e.c = --r, r = 0; n != s && !((t = e.charCodeAt(n) - 48) < 0 || t > 9); ++n)
    r = 10 * r + t;
  return a.e.r = --r, a;
}
function q0(e, a) {
  var r = e.t == "d" && a instanceof Date;
  if (e.z != null)
    try {
      return e.w = mr(e.z, r ? cr(a) : a);
    } catch {
    }
  try {
    return e.w = mr((e.XF || {}).numFmtId || (r ? 14 : 0), r ? cr(a) : a);
  } catch {
    return "" + a;
  }
}
function Ur(e, a, r) {
  return e == null || e.t == null || e.t == "z" ? "" : e.w !== void 0 ? e.w : (e.t == "d" && !e.z && r && r.dateNF && (e.z = r.dateNF), e.t == "e" ? ha[e.v] || e.v : a == null ? q0(e, e.v) : q0(e, a));
}
function Zr(e, a) {
  var r = a && a.sheet ? a.sheet : "Sheet1", n = {};
  return n[r] = e, { SheetNames: [r], Sheets: n };
}
function vs(e, a, r) {
  var n = r || {}, t = e ? Array.isArray(e) : n.dense, s = e || (t ? [] : {}), i = 0, c = 0;
  if (s && n.origin != null) {
    if (typeof n.origin == "number")
      i = n.origin;
    else {
      var f = typeof n.origin == "string" ? sr(n.origin) : n.origin;
      i = f.r, c = f.c;
    }
    s["!ref"] || (s["!ref"] = "A1:A1");
  }
  var l = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
  if (s["!ref"]) {
    var o = Re(s["!ref"]);
    l.s.c = o.s.c, l.s.r = o.s.r, l.e.c = Math.max(l.e.c, o.e.c), l.e.r = Math.max(l.e.r, o.e.r), i == -1 && (l.e.r = i = o.e.r + 1);
  }
  for (var h = 0; h != a.length; ++h)
    if (a[h]) {
      if (!Array.isArray(a[h]))
        throw new Error("aoa_to_sheet expects an array of arrays");
      for (var x = 0; x != a[h].length; ++x)
        if (!(typeof a[h][x] > "u")) {
          var d = { v: a[h][x] }, v = i + h, u = c + x;
          if (l.s.r > v && (l.s.r = v), l.s.c > u && (l.s.c = u), l.e.r < v && (l.e.r = v), l.e.c < u && (l.e.c = u), a[h][x] && typeof a[h][x] == "object" && !Array.isArray(a[h][x]) && !(a[h][x] instanceof Date))
            d = a[h][x];
          else if (Array.isArray(d.v) && (d.f = a[h][x][1], d.v = d.v[0]), d.v === null)
            if (d.f)
              d.t = "n";
            else if (n.nullError)
              d.t = "e", d.v = 0;
            else if (n.sheetStubs)
              d.t = "z";
            else
              continue;
          else
            typeof d.v == "number" ? d.t = "n" : typeof d.v == "boolean" ? d.t = "b" : d.v instanceof Date ? (d.z = n.dateNF || de[14], n.cellDates ? (d.t = "d", d.w = mr(d.z, cr(d.v))) : (d.t = "n", d.v = cr(d.v), d.w = mr(d.z, d.v))) : d.t = "s";
          if (t)
            s[v] || (s[v] = []), s[v][u] && s[v][u].z && (d.z = s[v][u].z), s[v][u] = d;
          else {
            var g = ue({ c: u, r: v });
            s[g] && s[g].z && (d.z = s[g].z), s[g] = d;
          }
        }
    }
  return l.s.c < 1e7 && (s["!ref"] = Ee(l)), s;
}
function wa(e, a) {
  return vs(null, e, a);
}
function Vc(e) {
  return e.read_shift(4, "i");
}
function Qe(e) {
  var a = e.read_shift(4);
  return a === 0 ? "" : e.read_shift(a, "dbcs");
}
function Wc(e) {
  return { ich: e.read_shift(2), ifnt: e.read_shift(2) };
}
function f0(e, a) {
  var r = e.l, n = e.read_shift(1), t = Qe(e), s = [], i = { t, h: t };
  if (n & 1) {
    for (var c = e.read_shift(4), f = 0; f != c; ++f)
      s.push(Wc(e));
    i.r = s;
  } else
    i.r = [{ ich: 0, ifnt: 0 }];
  return e.l = r + a, i;
}
var Gc = f0;
function _r(e) {
  var a = e.read_shift(4), r = e.read_shift(2);
  return r += e.read_shift(1) << 16, e.l++, { c: a, iStyleRef: r };
}
function oa(e) {
  var a = e.read_shift(2);
  return a += e.read_shift(1) << 16, e.l++, { c: -1, iStyleRef: a };
}
var Xc = Qe;
function o0(e) {
  var a = e.read_shift(4);
  return a === 0 || a === 4294967295 ? "" : e.read_shift(a, "dbcs");
}
var $c = Qe, Ht = o0;
function l0(e) {
  var a = e.slice(e.l, e.l + 4), r = a[0] & 1, n = a[0] & 2;
  e.l += 4;
  var t = n === 0 ? pt([0, 0, 0, 0, a[0] & 252, a[1], a[2], a[3]], 0) : ea(a, 0) >> 2;
  return r ? t / 100 : t;
}
function ps(e) {
  var a = { s: {}, e: {} };
  return a.s.r = e.read_shift(4), a.e.r = e.read_shift(4), a.s.c = e.read_shift(4), a.e.c = e.read_shift(4), a;
}
var la = ps;
function Ze(e) {
  if (e.length - e.l < 8)
    throw "XLS Xnum Buffer underflow";
  return e.read_shift(8, "f");
}
function zc(e) {
  var a = {}, r = e.read_shift(1), n = r >>> 1, t = e.read_shift(1), s = e.read_shift(2, "i"), i = e.read_shift(1), c = e.read_shift(1), f = e.read_shift(1);
  switch (e.l++, n) {
    case 0:
      a.auto = 1;
      break;
    case 1:
      a.index = t;
      var l = ta[t];
      l && (a.rgb = za(l));
      break;
    case 2:
      a.rgb = za([i, c, f]);
      break;
    case 3:
      a.theme = t;
      break;
  }
  return s != 0 && (a.tint = s > 0 ? s / 32767 : s / 32768), a;
}
function jc(e) {
  var a = e.read_shift(1);
  e.l++;
  var r = {
    fBold: a & 1,
    fItalic: a & 2,
    fUnderline: a & 4,
    fStrikeout: a & 8,
    fOutline: a & 16,
    fShadow: a & 32,
    fCondense: a & 64,
    fExtend: a & 128
  };
  return r;
}
function gs(e, a) {
  var r = { 2: "BITMAP", 3: "METAFILEPICT", 8: "DIB", 14: "ENHMETAFILE" }, n = e.read_shift(4);
  switch (n) {
    case 0:
      return "";
    case 4294967295:
    case 4294967294:
      return r[e.read_shift(4)] || "";
  }
  if (n > 400)
    throw new Error("Unsupported Clipboard: " + n.toString(16));
  return e.l -= 4, e.read_shift(0, a == 1 ? "lpstr" : "lpwstr");
}
function Kc(e) {
  return gs(e, 1);
}
function Yc(e) {
  return gs(e, 2);
}
var h0 = 2, fr = 3, st = 11, Q0 = 12, gt = 19, it = 64, Jc = 65, Zc = 71, qc = 4108, Qc = 4126, Ge = 80, ms = 81, ef = [Ge, ms], rf = {
  /*::[*/
  1: { n: "CodePage", t: h0 },
  /*::[*/
  2: { n: "Category", t: Ge },
  /*::[*/
  3: { n: "PresentationFormat", t: Ge },
  /*::[*/
  4: { n: "ByteCount", t: fr },
  /*::[*/
  5: { n: "LineCount", t: fr },
  /*::[*/
  6: { n: "ParagraphCount", t: fr },
  /*::[*/
  7: { n: "SlideCount", t: fr },
  /*::[*/
  8: { n: "NoteCount", t: fr },
  /*::[*/
  9: { n: "HiddenCount", t: fr },
  /*::[*/
  10: { n: "MultimediaClipCount", t: fr },
  /*::[*/
  11: { n: "ScaleCrop", t: st },
  /*::[*/
  12: {
    n: "HeadingPairs",
    t: qc
    /* VT_VECTOR | VT_VARIANT */
  },
  /*::[*/
  13: {
    n: "TitlesOfParts",
    t: Qc
    /* VT_VECTOR | VT_LPSTR */
  },
  /*::[*/
  14: { n: "Manager", t: Ge },
  /*::[*/
  15: { n: "Company", t: Ge },
  /*::[*/
  16: { n: "LinksUpToDate", t: st },
  /*::[*/
  17: { n: "CharacterCount", t: fr },
  /*::[*/
  19: { n: "SharedDoc", t: st },
  /*::[*/
  22: { n: "HyperlinksChanged", t: st },
  /*::[*/
  23: { n: "AppVersion", t: fr, p: "version" },
  /*::[*/
  24: { n: "DigSig", t: Jc },
  /*::[*/
  26: { n: "ContentType", t: Ge },
  /*::[*/
  27: { n: "ContentStatus", t: Ge },
  /*::[*/
  28: { n: "Language", t: Ge },
  /*::[*/
  29: { n: "Version", t: Ge },
  /*::[*/
  255: {},
  /* [MS-OLEPS] 2.18 */
  /*::[*/
  2147483648: { n: "Locale", t: gt },
  /*::[*/
  2147483651: { n: "Behavior", t: gt },
  /*::[*/
  1919054434: {}
}, af = {
  /*::[*/
  1: { n: "CodePage", t: h0 },
  /*::[*/
  2: { n: "Title", t: Ge },
  /*::[*/
  3: { n: "Subject", t: Ge },
  /*::[*/
  4: { n: "Author", t: Ge },
  /*::[*/
  5: { n: "Keywords", t: Ge },
  /*::[*/
  6: { n: "Comments", t: Ge },
  /*::[*/
  7: { n: "Template", t: Ge },
  /*::[*/
  8: { n: "LastAuthor", t: Ge },
  /*::[*/
  9: { n: "RevNumber", t: Ge },
  /*::[*/
  10: { n: "EditTime", t: it },
  /*::[*/
  11: { n: "LastPrinted", t: it },
  /*::[*/
  12: { n: "CreatedDate", t: it },
  /*::[*/
  13: { n: "ModifiedDate", t: it },
  /*::[*/
  14: { n: "PageCount", t: fr },
  /*::[*/
  15: { n: "WordCount", t: fr },
  /*::[*/
  16: { n: "CharCount", t: fr },
  /*::[*/
  17: { n: "Thumbnail", t: Zc },
  /*::[*/
  18: { n: "Application", t: Ge },
  /*::[*/
  19: { n: "DocSecurity", t: fr },
  /*::[*/
  255: {},
  /* [MS-OLEPS] 2.18 */
  /*::[*/
  2147483648: { n: "Locale", t: gt },
  /*::[*/
  2147483651: { n: "Behavior", t: gt },
  /*::[*/
  1919054434: {}
}, en = {
  /*::[*/
  1: "US",
  // United States
  /*::[*/
  2: "CA",
  // Canada
  /*::[*/
  3: "",
  // Latin America (except Brazil)
  /*::[*/
  7: "RU",
  // Russia
  /*::[*/
  20: "EG",
  // Egypt
  /*::[*/
  30: "GR",
  // Greece
  /*::[*/
  31: "NL",
  // Netherlands
  /*::[*/
  32: "BE",
  // Belgium
  /*::[*/
  33: "FR",
  // France
  /*::[*/
  34: "ES",
  // Spain
  /*::[*/
  36: "HU",
  // Hungary
  /*::[*/
  39: "IT",
  // Italy
  /*::[*/
  41: "CH",
  // Switzerland
  /*::[*/
  43: "AT",
  // Austria
  /*::[*/
  44: "GB",
  // United Kingdom
  /*::[*/
  45: "DK",
  // Denmark
  /*::[*/
  46: "SE",
  // Sweden
  /*::[*/
  47: "NO",
  // Norway
  /*::[*/
  48: "PL",
  // Poland
  /*::[*/
  49: "DE",
  // Germany
  /*::[*/
  52: "MX",
  // Mexico
  /*::[*/
  55: "BR",
  // Brazil
  /*::[*/
  61: "AU",
  // Australia
  /*::[*/
  64: "NZ",
  // New Zealand
  /*::[*/
  66: "TH",
  // Thailand
  /*::[*/
  81: "JP",
  // Japan
  /*::[*/
  82: "KR",
  // Korea
  /*::[*/
  84: "VN",
  // Viet Nam
  /*::[*/
  86: "CN",
  // China
  /*::[*/
  90: "TR",
  // Turkey
  /*::[*/
  105: "JS",
  // Ramastan
  /*::[*/
  213: "DZ",
  // Algeria
  /*::[*/
  216: "MA",
  // Morocco
  /*::[*/
  218: "LY",
  // Libya
  /*::[*/
  351: "PT",
  // Portugal
  /*::[*/
  354: "IS",
  // Iceland
  /*::[*/
  358: "FI",
  // Finland
  /*::[*/
  420: "CZ",
  // Czech Republic
  /*::[*/
  886: "TW",
  // Taiwan
  /*::[*/
  961: "LB",
  // Lebanon
  /*::[*/
  962: "JO",
  // Jordan
  /*::[*/
  963: "SY",
  // Syria
  /*::[*/
  964: "IQ",
  // Iraq
  /*::[*/
  965: "KW",
  // Kuwait
  /*::[*/
  966: "SA",
  // Saudi Arabia
  /*::[*/
  971: "AE",
  // United Arab Emirates
  /*::[*/
  972: "IL",
  // Israel
  /*::[*/
  974: "QA",
  // Qatar
  /*::[*/
  981: "IR",
  // Iran
  /*::[*/
  65535: "US"
  // United States
}, tf = [
  null,
  "solid",
  "mediumGray",
  "darkGray",
  "lightGray",
  "darkHorizontal",
  "darkVertical",
  "darkDown",
  "darkUp",
  "darkGrid",
  "darkTrellis",
  "lightHorizontal",
  "lightVertical",
  "lightDown",
  "lightUp",
  "lightGrid",
  "lightTrellis",
  "gray125",
  "gray0625"
];
function nf(e) {
  return e.map(function(a) {
    return [a >> 16 & 255, a >> 8 & 255, a & 255];
  });
}
var sf = /* @__PURE__ */ nf([
  /* Color Constants */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  /* Overridable Defaults */
  0,
  16777215,
  16711680,
  65280,
  255,
  16776960,
  16711935,
  65535,
  8388608,
  32768,
  128,
  8421376,
  8388736,
  32896,
  12632256,
  8421504,
  10066431,
  10040166,
  16777164,
  13434879,
  6684774,
  16744576,
  26316,
  13421823,
  128,
  16711935,
  16776960,
  65535,
  8388736,
  8388608,
  32896,
  255,
  52479,
  13434879,
  13434828,
  16777113,
  10079487,
  16751052,
  13408767,
  16764057,
  3368703,
  3394764,
  10079232,
  16763904,
  16750848,
  16737792,
  6710937,
  9868950,
  13158,
  3381606,
  13056,
  3355392,
  10040064,
  10040166,
  3355545,
  3355443,
  /* Other entries to appease BIFF8/12 */
  16777215,
  /* 0x40 icvForeground ?? */
  0,
  /* 0x41 icvBackground ?? */
  0,
  /* 0x42 icvFrame ?? */
  0,
  /* 0x43 icv3D ?? */
  0,
  /* 0x44 icv3DText ?? */
  0,
  /* 0x45 icv3DHilite ?? */
  0,
  /* 0x46 icv3DShadow ?? */
  0,
  /* 0x47 icvHilite ?? */
  0,
  /* 0x48 icvCtlText ?? */
  0,
  /* 0x49 icvCtlScrl ?? */
  0,
  /* 0x4A icvCtlInv ?? */
  0,
  /* 0x4B icvCtlBody ?? */
  0,
  /* 0x4C icvCtlFrame ?? */
  0,
  /* 0x4D icvCtlFore ?? */
  0,
  /* 0x4E icvCtlBack ?? */
  0,
  /* 0x4F icvCtlNeutral */
  0,
  /* 0x50 icvInfoBk ?? */
  0
  /* 0x51 icvInfoText ?? */
]), ta = /* @__PURE__ */ ze(sf), ha = {
  /*::[*/
  0: "#NULL!",
  /*::[*/
  7: "#DIV/0!",
  /*::[*/
  15: "#VALUE!",
  /*::[*/
  23: "#REF!",
  /*::[*/
  29: "#NAME?",
  /*::[*/
  36: "#NUM!",
  /*::[*/
  42: "#N/A",
  /*::[*/
  43: "#GETTING_DATA",
  /*::[*/
  255: "#WTF?"
}, _s = {
  "#NULL!": 0,
  "#DIV/0!": 7,
  "#VALUE!": 15,
  "#REF!": 23,
  "#NAME?": 29,
  "#NUM!": 36,
  "#N/A": 42,
  "#GETTING_DATA": 43,
  "#WTF?": 255
}, rn = {
  /* Workbook */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.macroEnabled.main+xml": "workbooks",
  "application/vnd.ms-excel.sheet.binary.macroEnabled.main": "workbooks",
  "application/vnd.ms-excel.addin.macroEnabled.main+xml": "workbooks",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": "workbooks",
  /* Worksheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": "sheets",
  "application/vnd.ms-excel.worksheet": "sheets",
  "application/vnd.ms-excel.binIndexWs": "TODO",
  /* Binary Index */
  /* Chartsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": "charts",
  "application/vnd.ms-excel.chartsheet": "charts",
  /* Macrosheet */
  "application/vnd.ms-excel.macrosheet+xml": "macros",
  "application/vnd.ms-excel.macrosheet": "macros",
  "application/vnd.ms-excel.intlmacrosheet": "TODO",
  "application/vnd.ms-excel.binIndexMs": "TODO",
  /* Binary Index */
  /* Dialogsheet */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": "dialogs",
  "application/vnd.ms-excel.dialogsheet": "dialogs",
  /* Shared Strings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml": "strs",
  "application/vnd.ms-excel.sharedStrings": "strs",
  /* Styles */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": "styles",
  "application/vnd.ms-excel.styles": "styles",
  /* File Properties */
  "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
  /* Custom Data Properties */
  "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
  /* Comments */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": "comments",
  "application/vnd.ms-excel.comments": "comments",
  "application/vnd.ms-excel.threadedcomments+xml": "threadedcomments",
  "application/vnd.ms-excel.person+xml": "people",
  /* Metadata (Stock/Geography and Dynamic Array) */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "metadata",
  "application/vnd.ms-excel.sheetMetadata": "metadata",
  /* PivotTable */
  "application/vnd.ms-excel.pivotTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
  /* Chart Objects */
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
  /* Chart Colors */
  "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
  /* Chart Style */
  "application/vnd.ms-office.chartstyle+xml": "TODO",
  /* Chart Advanced */
  "application/vnd.ms-office.chartex+xml": "TODO",
  /* Calculation Chain */
  "application/vnd.ms-excel.calcChain": "calcchains",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
  /* Printer Settings */
  "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
  /* ActiveX */
  "application/vnd.ms-office.activeX": "TODO",
  "application/vnd.ms-office.activeX+xml": "TODO",
  /* Custom Toolbars */
  "application/vnd.ms-excel.attachedToolbars": "TODO",
  /* External Data Connections */
  "application/vnd.ms-excel.connections": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
  /* External Links */
  "application/vnd.ms-excel.externalLink": "links",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
  /* PivotCache */
  "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
  "application/vnd.ms-excel.pivotCacheRecords": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
  /* Query Table */
  "application/vnd.ms-excel.queryTable": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
  /* Shared Workbook */
  "application/vnd.ms-excel.userNames": "TODO",
  "application/vnd.ms-excel.revisionHeaders": "TODO",
  "application/vnd.ms-excel.revisionLog": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
  /* Single Cell Table */
  "application/vnd.ms-excel.tableSingleCells": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
  /* Slicer */
  "application/vnd.ms-excel.slicer": "TODO",
  "application/vnd.ms-excel.slicerCache": "TODO",
  "application/vnd.ms-excel.slicer+xml": "TODO",
  "application/vnd.ms-excel.slicerCache+xml": "TODO",
  /* Sort Map */
  "application/vnd.ms-excel.wsSortMap": "TODO",
  /* Table */
  "application/vnd.ms-excel.table": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
  /* Themes */
  "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
  /* Theme Override */
  "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
  /* Timeline */
  "application/vnd.ms-excel.Timeline+xml": "TODO",
  /* verify */
  "application/vnd.ms-excel.TimelineCache+xml": "TODO",
  /* verify */
  /* VBA */
  "application/vnd.ms-office.vbaProject": "vba",
  "application/vnd.ms-office.vbaProjectSignature": "TODO",
  /* Volatile Dependencies */
  "application/vnd.ms-office.volatileDependencies": "TODO",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
  /* Control Properties */
  "application/vnd.ms-excel.controlproperties+xml": "TODO",
  /* Data Model */
  "application/vnd.openxmlformats-officedocument.model+data": "TODO",
  /* Survey */
  "application/vnd.ms-excel.Survey+xml": "TODO",
  /* Drawing */
  "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
  "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
  /* VML */
  "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
  "application/vnd.openxmlformats-package.relationships+xml": "rels",
  "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
  /* Image */
  "image/png": "TODO",
  sheet: "js"
};
function cf() {
  return {
    workbooks: [],
    sheets: [],
    charts: [],
    dialogs: [],
    macros: [],
    rels: [],
    strs: [],
    comments: [],
    threadedcomments: [],
    links: [],
    coreprops: [],
    extprops: [],
    custprops: [],
    themes: [],
    styles: [],
    calcchains: [],
    vba: [],
    drawings: [],
    metadata: [],
    people: [],
    TODO: [],
    xmlns: ""
  };
}
function ff(e) {
  var a = cf();
  if (!e || !e.match)
    return a;
  var r = {};
  if ((e.match(rr) || []).forEach(function(n) {
    var t = oe(n);
    switch (t[0].replace(vc, "<")) {
      case "<?xml":
        break;
      case "<Types":
        a.xmlns = t["xmlns" + (t[0].match(/<(\w+):/) || ["", ""])[1]];
        break;
      case "<Default":
        r[t.Extension] = t.ContentType;
        break;
      case "<Override":
        a[rn[t.ContentType]] !== void 0 && a[rn[t.ContentType]].push(t.PartName);
        break;
    }
  }), a.xmlns !== Sc.CT)
    throw new Error("Unknown Namespace: " + a.xmlns);
  return a.calcchain = a.calcchains.length > 0 ? a.calcchains[0] : "", a.sst = a.strs.length > 0 ? a.strs[0] : "", a.style = a.styles.length > 0 ? a.styles[0] : "", a.defaults = r, delete a.calcchains, a;
}
var va = {
  WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
  HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
  VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
  XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
  XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
  XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
  CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
  CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
  CMNT: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",
  CORE_PROPS: "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",
  EXT_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",
  CUST_PROPS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",
  SST: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",
  STY: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",
  THEME: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",
  CHART: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",
  CHARTEX: "http://schemas.microsoft.com/office/2014/relationships/chartEx",
  CS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",
  WS: [
    "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
    "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"
  ],
  DS: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",
  MS: "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",
  IMG: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
  DRAW: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
  XLMETA: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",
  TCMNT: "http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",
  PEOPLE: "http://schemas.microsoft.com/office/2017/10/relationships/person",
  VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
};
function Vt(e) {
  var a = e.lastIndexOf("/");
  return e.slice(0, a + 1) + "_rels/" + e.slice(a + 1) + ".rels";
}
function Ma(e, a) {
  var r = { "!id": {} };
  if (!e)
    return r;
  a.charAt(0) !== "/" && (a = "/" + a);
  var n = {};
  return (e.match(rr) || []).forEach(function(t) {
    var s = oe(t);
    if (s[0] === "<Relationship") {
      var i = {};
      i.Type = s.Type, i.Target = s.Target, i.Id = s.Id, s.TargetMode && (i.TargetMode = s.TargetMode);
      var c = s.TargetMode === "External" ? s.Target : Ra(s.Target, a);
      r[c] = i, n[s.Id] = i;
    }
  }), r["!id"] = n, r;
}
var of = "application/vnd.oasis.opendocument.spreadsheet";
function lf(e, a) {
  for (var r = n0(e), n, t; n = Xa.exec(r); )
    switch (n[3]) {
      case "manifest":
        break;
      case "file-entry":
        if (t = oe(n[0], !1), t.path == "/" && t.type !== of)
          throw new Error("This OpenDocument is not a spreadsheet");
        break;
      case "encryption-data":
      case "algorithm":
      case "start-key-generation":
      case "key-derivation":
        throw new Error("Unsupported ODS Encryption");
      default:
        if (a && a.WTF)
          throw n;
    }
}
var Ba = [
  ["cp:category", "Category"],
  ["cp:contentStatus", "ContentStatus"],
  ["cp:keywords", "Keywords"],
  ["cp:lastModifiedBy", "LastAuthor"],
  ["cp:lastPrinted", "LastPrinted"],
  ["cp:revision", "RevNumber"],
  ["cp:version", "Version"],
  ["dc:creator", "Author"],
  ["dc:description", "Comments"],
  ["dc:identifier", "Identifier"],
  ["dc:language", "Language"],
  ["dc:subject", "Subject"],
  ["dc:title", "Title"],
  ["dcterms:created", "CreatedDate", "date"],
  ["dcterms:modified", "ModifiedDate", "date"]
], hf = /* @__PURE__ */ function() {
  for (var e = new Array(Ba.length), a = 0; a < Ba.length; ++a) {
    var r = Ba[a], n = "(?:" + r[0].slice(0, r[0].indexOf(":")) + ":)" + r[0].slice(r[0].indexOf(":") + 1);
    e[a] = new RegExp("<" + n + "[^>]*>([\\s\\S]*?)</" + n + ">");
  }
  return e;
}();
function Es(e) {
  var a = {};
  e = Ae(e);
  for (var r = 0; r < Ba.length; ++r) {
    var n = Ba[r], t = e.match(hf[r]);
    t != null && t.length > 0 && (a[n[1]] = ke(t[1])), n[2] === "date" && a[n[1]] && (a[n[1]] = Xe(a[n[1]]));
  }
  return a;
}
var uf = [
  ["Application", "Application", "string"],
  ["AppVersion", "AppVersion", "string"],
  ["Company", "Company", "string"],
  ["DocSecurity", "DocSecurity", "string"],
  ["Manager", "Manager", "string"],
  ["HyperlinksChanged", "HyperlinksChanged", "bool"],
  ["SharedDoc", "SharedDoc", "bool"],
  ["LinksUpToDate", "LinksUpToDate", "bool"],
  ["ScaleCrop", "ScaleCrop", "bool"],
  ["HeadingPairs", "HeadingPairs", "raw"],
  ["TitlesOfParts", "TitlesOfParts", "raw"]
];
function Ts(e, a, r, n) {
  var t = [];
  if (typeof e == "string")
    t = $0(e, n);
  else
    for (var s = 0; s < e.length; ++s)
      t = t.concat(e[s].map(function(o) {
        return { v: o };
      }));
  var i = typeof a == "string" ? $0(a, n).map(function(o) {
    return o.v;
  }) : a, c = 0, f = 0;
  if (i.length > 0)
    for (var l = 0; l !== t.length; l += 2) {
      switch (f = +t[l + 1].v, t[l].v) {
        case "Worksheets":
        case "工作表":
        case "Листы":
        case "أوراق العمل":
        case "ワークシート":
        case "גליונות עבודה":
        case "Arbeitsblätter":
        case "Çalışma Sayfaları":
        case "Feuilles de calcul":
        case "Fogli di lavoro":
        case "Folhas de cálculo":
        case "Planilhas":
        case "Regneark":
        case "Hojas de cálculo":
        case "Werkbladen":
          r.Worksheets = f, r.SheetNames = i.slice(c, c + f);
          break;
        case "Named Ranges":
        case "Rangos con nombre":
        case "名前付き一覧":
        case "Benannte Bereiche":
        case "Navngivne områder":
          r.NamedRanges = f, r.DefinedNames = i.slice(c, c + f);
          break;
        case "Charts":
        case "Diagramme":
          r.Chartsheets = f, r.ChartNames = i.slice(c, c + f);
          break;
      }
      c += f;
    }
}
function xf(e, a, r) {
  var n = {};
  return a || (a = {}), e = Ae(e), uf.forEach(function(t) {
    var s = (e.match(Ga(t[0])) || [])[1];
    switch (t[2]) {
      case "string":
        s && (a[t[1]] = ke(s));
        break;
      case "bool":
        a[t[1]] = s === "true";
        break;
      case "raw":
        var i = e.match(new RegExp("<" + t[0] + "[^>]*>([\\s\\S]*?)</" + t[0] + ">"));
        i && i.length > 0 && (n[t[1]] = i[1]);
        break;
    }
  }), n.HeadingPairs && n.TitlesOfParts && Ts(n.HeadingPairs, n.TitlesOfParts, a, r), a;
}
var df = /<[^>]+>[^<]*/g;
function vf(e, a) {
  var r = {}, n = "", t = e.match(df);
  if (t)
    for (var s = 0; s != t.length; ++s) {
      var i = t[s], c = oe(i);
      switch (c[0]) {
        case "<?xml":
          break;
        case "<Properties":
          break;
        case "<property":
          n = ke(c.name);
          break;
        case "</property>":
          n = null;
          break;
        default:
          if (i.indexOf("<vt:") === 0) {
            var f = i.split(">"), l = f[0].slice(4), o = f[1];
            switch (l) {
              case "lpstr":
              case "bstr":
              case "lpwstr":
                r[n] = ke(o);
                break;
              case "bool":
                r[n] = Ce(o);
                break;
              case "i1":
              case "i2":
              case "i4":
              case "i8":
              case "int":
              case "uint":
                r[n] = parseInt(o, 10);
                break;
              case "r4":
              case "r8":
              case "decimal":
                r[n] = parseFloat(o);
                break;
              case "filetime":
              case "date":
                r[n] = Xe(o);
                break;
              case "cy":
              case "error":
                r[n] = ke(o);
                break;
              default:
                if (l.slice(-1) == "/")
                  break;
                a.WTF && typeof console < "u" && console.warn("Unexpected", i, l, f);
            }
          } else if (i.slice(0, 2) !== "</") {
            if (a.WTF)
              throw new Error(i);
          }
      }
    }
  return r;
}
var pf = {
  Title: "Title",
  Subject: "Subject",
  Author: "Author",
  Keywords: "Keywords",
  Comments: "Description",
  LastAuthor: "LastAuthor",
  RevNumber: "Revision",
  Application: "AppName",
  /* TotalTime: 'TotalTime', */
  LastPrinted: "LastPrinted",
  CreatedDate: "Created",
  ModifiedDate: "LastSaved",
  /* Pages */
  /* Words */
  /* Characters */
  Category: "Category",
  /* PresentationFormat */
  Manager: "Manager",
  Company: "Company",
  /* Guid */
  /* HyperlinkBase */
  /* Bytes */
  /* Lines */
  /* Paragraphs */
  /* CharactersWithSpaces */
  AppVersion: "Version",
  ContentStatus: "ContentStatus",
  /* NOTE: missing from schema */
  Identifier: "Identifier",
  /* NOTE: missing from schema */
  Language: "Language"
  /* NOTE: missing from schema */
}, It;
function gf(e, a, r) {
  It || (It = r0(pf)), a = It[a] || a, e[a] = r;
}
function u0(e) {
  var a = e.read_shift(4), r = e.read_shift(4);
  return new Date((r / 1e7 * Math.pow(2, 32) + a / 1e7 - 11644473600) * 1e3).toISOString().replace(/\.000/, "");
}
function ks(e, a, r) {
  var n = e.l, t = e.read_shift(0, "lpstr-cp");
  if (r)
    for (; e.l - n & 3; )
      ++e.l;
  return t;
}
function ws(e, a, r) {
  var n = e.read_shift(0, "lpwstr");
  return r && (e.l += 4 - (n.length + 1 & 3) & 3), n;
}
function Fs(e, a, r) {
  return a === 31 ? ws(e) : ks(e, a, r);
}
function Wt(e, a, r) {
  return Fs(e, a, r === !1 ? 0 : 4);
}
function mf(e, a) {
  if (!a)
    throw new Error("VtUnalignedString must have positive length");
  return Fs(e, a, 0);
}
function _f(e) {
  for (var a = e.read_shift(4), r = [], n = 0; n != a; ++n) {
    var t = e.l;
    r[n] = e.read_shift(0, "lpwstr").replace(ir, ""), e.l - t & 2 && (e.l += 2);
  }
  return r;
}
function Ef(e) {
  for (var a = e.read_shift(4), r = [], n = 0; n != a; ++n)
    r[n] = e.read_shift(0, "lpstr-cp").replace(ir, "");
  return r;
}
function Tf(e) {
  var a = e.l, r = mt(e, ms);
  e[e.l] == 0 && e[e.l + 1] == 0 && e.l - a & 2 && (e.l += 2);
  var n = mt(e, fr);
  return [r, n];
}
function kf(e) {
  for (var a = e.read_shift(4), r = [], n = 0; n < a / 2; ++n)
    r.push(Tf(e));
  return r;
}
function an(e, a) {
  for (var r = e.read_shift(4), n = {}, t = 0; t != r; ++t) {
    var s = e.read_shift(4), i = e.read_shift(4);
    n[s] = e.read_shift(i, a === 1200 ? "utf16le" : "utf8").replace(ir, "").replace(Oa, "!"), a === 1200 && i % 2 && (e.l += 2);
  }
  return e.l & 3 && (e.l = e.l >> 3 << 2), n;
}
function As(e) {
  var a = e.read_shift(4), r = e.slice(e.l, e.l + a);
  return e.l += a, (a & 3) > 0 && (e.l += 4 - (a & 3) & 3), r;
}
function wf(e) {
  var a = {};
  return a.Size = e.read_shift(4), e.l += a.Size + 3 - (a.Size - 1) % 4, a;
}
function mt(e, a, r) {
  var n = e.read_shift(2), t, s = r || {};
  if (e.l += 2, a !== Q0 && n !== a && ef.indexOf(a) === -1 && !((a & 65534) == 4126 && (n & 65534) == 4126))
    throw new Error("Expected type " + a + " saw " + n);
  switch (a === Q0 ? n : a) {
    case 2:
      return t = e.read_shift(2, "i"), s.raw || (e.l += 2), t;
    case 3:
      return t = e.read_shift(4, "i"), t;
    case 11:
      return e.read_shift(4) !== 0;
    case 19:
      return t = e.read_shift(4), t;
    case 30:
      return ks(e, n, 4).replace(ir, "");
    case 31:
      return ws(e);
    case 64:
      return u0(e);
    case 65:
      return As(e);
    case 71:
      return wf(e);
    case 80:
      return Wt(e, n, !s.raw).replace(ir, "");
    case 81:
      return mf(
        e,
        n
        /*, 4*/
      ).replace(ir, "");
    case 4108:
      return kf(e);
    case 4126:
    case 4127:
      return n == 4127 ? _f(e) : Ef(e);
    default:
      throw new Error("TypedPropertyValue unrecognized type " + a + " " + n);
  }
}
function tn(e, a) {
  var r = e.l, n = e.read_shift(4), t = e.read_shift(4), s = [], i = 0, c = 0, f = -1, l = {};
  for (i = 0; i != t; ++i) {
    var o = e.read_shift(4), h = e.read_shift(4);
    s[i] = [o, h + r];
  }
  s.sort(function(y, _) {
    return y[1] - _[1];
  });
  var x = {};
  for (i = 0; i != t; ++i) {
    if (e.l !== s[i][1]) {
      var d = !0;
      if (i > 0 && a)
        switch (a[s[i - 1][0]].t) {
          case 2:
            e.l + 2 === s[i][1] && (e.l += 2, d = !1);
            break;
          case 80:
            e.l <= s[i][1] && (e.l = s[i][1], d = !1);
            break;
          case 4108:
            e.l <= s[i][1] && (e.l = s[i][1], d = !1);
            break;
        }
      if ((!a || i == 0) && e.l <= s[i][1] && (d = !1, e.l = s[i][1]), d)
        throw new Error("Read Error: Expected address " + s[i][1] + " at " + e.l + " :" + i);
    }
    if (a) {
      var v = a[s[i][0]];
      if (x[v.n] = mt(e, v.t, { raw: !0 }), v.p === "version" && (x[v.n] = String(x[v.n] >> 16) + "." + ("0000" + String(x[v.n] & 65535)).slice(-4)), v.n == "CodePage")
        switch (x[v.n]) {
          case 0:
            x[v.n] = 1252;
          case 874:
          case 932:
          case 936:
          case 949:
          case 950:
          case 1250:
          case 1251:
          case 1253:
          case 1254:
          case 1255:
          case 1256:
          case 1257:
          case 1258:
          case 1e4:
          case 1200:
          case 1201:
          case 1252:
          case 65e3:
          case -536:
          case 65001:
          case -535:
            wr(c = x[v.n] >>> 0 & 65535);
            break;
          default:
            throw new Error("Unsupported CodePage: " + x[v.n]);
        }
    } else if (s[i][0] === 1) {
      if (c = x.CodePage = mt(e, h0), wr(c), f !== -1) {
        var u = e.l;
        e.l = s[f][1], l = an(e, c), e.l = u;
      }
    } else if (s[i][0] === 0) {
      if (c === 0) {
        f = i, e.l = s[i + 1][1];
        continue;
      }
      l = an(e, c);
    } else {
      var g = l[s[i][0]], S;
      switch (e[e.l]) {
        case 65:
          e.l += 4, S = As(e);
          break;
        case 30:
          e.l += 4, S = Wt(e, e[e.l - 4]).replace(/\u0000+$/, "");
          break;
        case 31:
          e.l += 4, S = Wt(e, e[e.l - 4]).replace(/\u0000+$/, "");
          break;
        case 3:
          e.l += 4, S = e.read_shift(4, "i");
          break;
        case 19:
          e.l += 4, S = e.read_shift(4);
          break;
        case 5:
          e.l += 4, S = e.read_shift(8, "f");
          break;
        case 11:
          e.l += 4, S = Le(e, 4);
          break;
        case 64:
          e.l += 4, S = Xe(u0(e));
          break;
        default:
          throw new Error("unparsed value: " + e[e.l]);
      }
      x[g] = S;
    }
  }
  return e.l = r + n, x;
}
function nn(e, a, r) {
  var n = e.content;
  if (!n)
    return {};
  $e(n, 0);
  var t, s, i, c, f = 0;
  n.chk("feff", "Byte Order: "), n.read_shift(2);
  var l = n.read_shift(4), o = n.read_shift(16);
  if (o !== _e.utils.consts.HEADER_CLSID && o !== r)
    throw new Error("Bad PropertySet CLSID " + o);
  if (t = n.read_shift(4), t !== 1 && t !== 2)
    throw new Error("Unrecognized #Sets: " + t);
  if (s = n.read_shift(16), c = n.read_shift(4), t === 1 && c !== n.l)
    throw new Error("Length mismatch: " + c + " !== " + n.l);
  t === 2 && (i = n.read_shift(16), f = n.read_shift(4));
  var h = tn(n, a), x = { SystemIdentifier: l };
  for (var d in h)
    x[d] = h[d];
  if (x.FMTID = s, t === 1)
    return x;
  if (f - n.l == 2 && (n.l += 2), n.l !== f)
    throw new Error("Length mismatch 2: " + n.l + " !== " + f);
  var v;
  try {
    v = tn(n, null);
  } catch {
  }
  for (d in v)
    x[d] = v[d];
  return x.FMTID = [s, i], x;
}
function Gr(e, a) {
  return e.read_shift(a), null;
}
function Ff(e, a, r) {
  for (var n = [], t = e.l + a; e.l < t; )
    n.push(r(e, t - e.l));
  if (t !== e.l)
    throw new Error("Slurp error");
  return n;
}
function Le(e, a) {
  return e.read_shift(a) === 1;
}
function be(e) {
  return e.read_shift(2, "u");
}
function Ss(e, a) {
  return Ff(e, a, be);
}
function Af(e) {
  var a = e.read_shift(1), r = e.read_shift(1);
  return r === 1 ? a : a === 1;
}
function Za(e, a, r) {
  var n = e.read_shift(r && r.biff >= 12 ? 2 : 1), t = "sbcs-cont";
  if (r && r.biff >= 8, !r || r.biff == 8) {
    var s = e.read_shift(1);
    s && (t = "dbcs-cont");
  } else
    r.biff == 12 && (t = "wstr");
  r.biff >= 2 && r.biff <= 5 && (t = "cpstr");
  var i = n ? e.read_shift(n, t) : "";
  return i;
}
function Sf(e) {
  var a = e.read_shift(2), r = e.read_shift(1), n = r & 4, t = r & 8, s = 1 + (r & 1), i = 0, c, f = {};
  t && (i = e.read_shift(2)), n && (c = e.read_shift(4));
  var l = s == 2 ? "dbcs-cont" : "sbcs-cont", o = a === 0 ? "" : e.read_shift(a, l);
  return t && (e.l += 4 * i), n && (e.l += c), f.t = o, t || (f.raw = "<t>" + f.t + "</t>", f.r = f.t), f;
}
function ia(e, a, r) {
  var n;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5)
      return e.read_shift(a, "cpstr");
    if (r.biff >= 12)
      return e.read_shift(a, "dbcs-cont");
  }
  var t = e.read_shift(1);
  return t === 0 ? n = e.read_shift(a, "sbcs-cont") : n = e.read_shift(a, "dbcs-cont"), n;
}
function qa(e, a, r) {
  var n = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return n === 0 ? (e.l++, "") : ia(e, n, r);
}
function ua(e, a, r) {
  if (r.biff > 5)
    return qa(e, a, r);
  var n = e.read_shift(1);
  return n === 0 ? (e.l++, "") : e.read_shift(n, r.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
}
function Cf(e) {
  var a = e.read_shift(1);
  e.l++;
  var r = e.read_shift(2);
  return e.l += 2, [a, r];
}
function yf(e) {
  var a = e.read_shift(4), r = e.l, n = !1;
  a > 24 && (e.l += a - 24, e.read_shift(16) === "795881f43b1d7f48af2c825dc4852763" && (n = !0), e.l = r);
  var t = e.read_shift((n ? a - 24 : a) >> 1, "utf16le").replace(ir, "");
  return n && (e.l += 24), t;
}
function Df(e) {
  for (var a = e.read_shift(2), r = ""; a-- > 0; )
    r += "../";
  var n = e.read_shift(0, "lpstr-ansi");
  if (e.l += 2, e.read_shift(2) != 57005)
    throw new Error("Bad FileMoniker");
  var t = e.read_shift(4);
  if (t === 0)
    return r + n.replace(/\\/g, "/");
  var s = e.read_shift(4);
  if (e.read_shift(2) != 3)
    throw new Error("Bad FileMoniker");
  var i = e.read_shift(s >> 1, "utf16le").replace(ir, "");
  return r + i;
}
function Of(e, a) {
  var r = e.read_shift(16);
  switch (r) {
    case "e0c9ea79f9bace118c8200aa004ba90b":
      return yf(e);
    case "0303000000000000c000000000000046":
      return Df(e);
    default:
      throw new Error("Unsupported Moniker " + r);
  }
}
function ct(e) {
  var a = e.read_shift(4), r = a > 0 ? e.read_shift(a, "utf16le").replace(ir, "") : "";
  return r;
}
function Rf(e, a) {
  var r = e.l + a, n = e.read_shift(4);
  if (n !== 2)
    throw new Error("Unrecognized streamVersion: " + n);
  var t = e.read_shift(2);
  e.l += 2;
  var s, i, c, f, l = "", o, h;
  t & 16 && (s = ct(e, r - e.l)), t & 128 && (i = ct(e, r - e.l)), (t & 257) === 257 && (c = ct(e, r - e.l)), (t & 257) === 1 && (f = Of(e, r - e.l)), t & 8 && (l = ct(e, r - e.l)), t & 32 && (o = e.read_shift(16)), t & 64 && (h = u0(
    e
    /*, 8*/
  )), e.l = r;
  var x = i || c || f || "";
  x && l && (x += "#" + l), x || (x = "#" + l), t & 2 && x.charAt(0) == "/" && x.charAt(1) != "/" && (x = "file://" + x);
  var d = { Target: x };
  return o && (d.guid = o), h && (d.time = h), s && (d.Tooltip = s), d;
}
function Cs(e) {
  var a = e.read_shift(1), r = e.read_shift(1), n = e.read_shift(1), t = e.read_shift(1);
  return [a, r, n, t];
}
function ys(e, a) {
  var r = Cs(e);
  return r[3] = 0, r;
}
function Ir(e) {
  var a = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(2);
  return { r: a, c: r, ixfe: n };
}
function If(e) {
  var a = e.read_shift(2), r = e.read_shift(2);
  return e.l += 8, { type: a, flags: r };
}
function Nf(e, a, r) {
  return a === 0 ? "" : ua(e, a, r);
}
function Pf(e, a, r) {
  var n = r.biff > 8 ? 4 : 2, t = e.read_shift(n), s = e.read_shift(n, "i"), i = e.read_shift(n, "i");
  return [t, s, i];
}
function Ds(e) {
  var a = e.read_shift(2), r = l0(e);
  return [a, r];
}
function Lf(e, a, r) {
  e.l += 4, a -= 4;
  var n = e.l + a, t = Za(e, a, r), s = e.read_shift(2);
  if (n -= e.l, s !== n)
    throw new Error("Malformed AddinUdf: padding = " + n + " != " + s);
  return e.l += s, t;
}
function Ft(e) {
  var a = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(2), t = e.read_shift(2);
  return { s: { c: n, r: a }, e: { c: t, r } };
}
function Os(e) {
  var a = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(1), t = e.read_shift(1);
  return { s: { c: n, r: a }, e: { c: t, r } };
}
var Mf = Os;
function Rs(e) {
  e.l += 4;
  var a = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(2);
  return e.l += 12, [r, a, n];
}
function Bf(e) {
  var a = {};
  return e.l += 4, e.l += 16, a.fSharedNote = e.read_shift(2), e.l += 4, a;
}
function bf(e) {
  var a = {};
  return e.l += 4, e.cf = e.read_shift(2), a;
}
function Ye(e) {
  e.l += 2, e.l += e.read_shift(2);
}
var Uf = {
  /*::[*/
  0: Ye,
  /* FtEnd */
  /*::[*/
  4: Ye,
  /* FtMacro */
  /*::[*/
  5: Ye,
  /* FtButton */
  /*::[*/
  6: Ye,
  /* FtGmo */
  /*::[*/
  7: bf,
  /* FtCf */
  /*::[*/
  8: Ye,
  /* FtPioGrbit */
  /*::[*/
  9: Ye,
  /* FtPictFmla */
  /*::[*/
  10: Ye,
  /* FtCbls */
  /*::[*/
  11: Ye,
  /* FtRbo */
  /*::[*/
  12: Ye,
  /* FtSbs */
  /*::[*/
  13: Bf,
  /* FtNts */
  /*::[*/
  14: Ye,
  /* FtSbsFmla */
  /*::[*/
  15: Ye,
  /* FtGboData */
  /*::[*/
  16: Ye,
  /* FtEdoData */
  /*::[*/
  17: Ye,
  /* FtRboData */
  /*::[*/
  18: Ye,
  /* FtCblsData */
  /*::[*/
  19: Ye,
  /* FtLbsData */
  /*::[*/
  20: Ye,
  /* FtCblsFmla */
  /*::[*/
  21: Rs
};
function Hf(e, a) {
  for (var r = e.l + a, n = []; e.l < r; ) {
    var t = e.read_shift(2);
    e.l -= 2;
    try {
      n.push(Uf[t](e, r - e.l));
    } catch {
      return e.l = r, n;
    }
  }
  return e.l != r && (e.l = r), n;
}
function ft(e, a) {
  var r = { BIFFVer: 0, dt: 0 };
  switch (r.BIFFVer = e.read_shift(2), a -= 2, a >= 2 && (r.dt = e.read_shift(2), e.l -= 2), r.BIFFVer) {
    case 1536:
    case 1280:
    case 1024:
    case 768:
    case 512:
    case 2:
    case 7:
      break;
    default:
      if (a > 6)
        throw new Error("Unexpected BIFF Ver " + r.BIFFVer);
  }
  return e.read_shift(a), r;
}
function Vf(e, a) {
  return a === 0 || e.read_shift(2), 1200;
}
function Wf(e, a, r) {
  if (r.enc)
    return e.l += a, "";
  var n = e.l, t = ua(e, 0, r);
  return e.read_shift(a + n - e.l), t;
}
function Gf(e, a, r) {
  var n = r && r.biff == 8 || a == 2 ? e.read_shift(2) : (e.l += a, 0);
  return { fDialog: n & 16, fBelow: n & 64, fRight: n & 128 };
}
function Xf(e, a, r) {
  var n = e.read_shift(4), t = e.read_shift(1) & 3, s = e.read_shift(1);
  switch (s) {
    case 0:
      s = "Worksheet";
      break;
    case 1:
      s = "Macrosheet";
      break;
    case 2:
      s = "Chartsheet";
      break;
    case 6:
      s = "VBAModule";
      break;
  }
  var i = Za(e, 0, r);
  return i.length === 0 && (i = "Sheet1"), { pos: n, hs: t, dt: s, name: i };
}
function $f(e, a) {
  for (var r = e.l + a, n = e.read_shift(4), t = e.read_shift(4), s = [], i = 0; i != t && e.l < r; ++i)
    s.push(Sf(e));
  return s.Count = n, s.Unique = t, s;
}
function zf(e, a) {
  var r = {};
  return r.dsst = e.read_shift(2), e.l += a - 2, r;
}
function jf(e) {
  var a = {};
  a.r = e.read_shift(2), a.c = e.read_shift(2), a.cnt = e.read_shift(2) - a.c;
  var r = e.read_shift(2);
  e.l += 4;
  var n = e.read_shift(1);
  return e.l += 3, n & 7 && (a.level = n & 7), n & 32 && (a.hidden = !0), n & 64 && (a.hpt = r / 20), a;
}
function Kf(e) {
  var a = If(e);
  if (a.type != 2211)
    throw new Error("Invalid Future Record " + a.type);
  var r = e.read_shift(4);
  return r !== 0;
}
function Yf(e) {
  return e.read_shift(2), e.read_shift(4);
}
function sn(e, a, r) {
  var n = 0;
  r && r.biff == 2 || (n = e.read_shift(2));
  var t = e.read_shift(2);
  r && r.biff == 2 && (n = 1 - (t >> 15), t &= 32767);
  var s = { Unsynced: n & 1, DyZero: (n & 2) >> 1, ExAsc: (n & 4) >> 2, ExDsc: (n & 8) >> 3 };
  return [s, t];
}
function Jf(e) {
  var a = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(2), t = e.read_shift(2), s = e.read_shift(2), i = e.read_shift(2), c = e.read_shift(2), f = e.read_shift(2), l = e.read_shift(2);
  return {
    Pos: [a, r],
    Dim: [n, t],
    Flags: s,
    CurTab: i,
    FirstTab: c,
    Selected: f,
    TabRatio: l
  };
}
function Zf(e, a, r) {
  if (r && r.biff >= 2 && r.biff < 5)
    return {};
  var n = e.read_shift(2);
  return { RTL: n & 64 };
}
function qf() {
}
function Qf(e, a, r) {
  var n = {
    dyHeight: e.read_shift(2),
    fl: e.read_shift(2)
  };
  switch (r && r.biff || 8) {
    case 2:
      break;
    case 3:
    case 4:
      e.l += 2;
      break;
    default:
      e.l += 10;
      break;
  }
  return n.name = Za(e, 0, r), n;
}
function eo(e) {
  var a = Ir(e);
  return a.isst = e.read_shift(4), a;
}
function ro(e, a, r) {
  r.biffguess && r.biff == 2 && (r.biff = 5);
  var n = e.l + a, t = Ir(e);
  r.biff == 2 && e.l++;
  var s = qa(e, n - e.l, r);
  return t.val = s, t;
}
function ao(e, a, r) {
  var n = e.read_shift(2), t = ua(e, 0, r);
  return [n, t];
}
var to = ua;
function cn(e, a, r) {
  var n = e.l + a, t = r.biff == 8 || !r.biff ? 4 : 2, s = e.read_shift(t), i = e.read_shift(t), c = e.read_shift(2), f = e.read_shift(2);
  return e.l = n, { s: { r: s, c }, e: { r: i, c: f } };
}
function no(e) {
  var a = e.read_shift(2), r = e.read_shift(2), n = Ds(e);
  return { r: a, c: r, ixfe: n[0], rknum: n[1] };
}
function so(e, a) {
  for (var r = e.l + a - 2, n = e.read_shift(2), t = e.read_shift(2), s = []; e.l < r; )
    s.push(Ds(e));
  if (e.l !== r)
    throw new Error("MulRK read error");
  var i = e.read_shift(2);
  if (s.length != i - t + 1)
    throw new Error("MulRK length mismatch");
  return { r: n, c: t, C: i, rkrec: s };
}
function io(e, a) {
  for (var r = e.l + a - 2, n = e.read_shift(2), t = e.read_shift(2), s = []; e.l < r; )
    s.push(e.read_shift(2));
  if (e.l !== r)
    throw new Error("MulBlank read error");
  var i = e.read_shift(2);
  if (s.length != i - t + 1)
    throw new Error("MulBlank length mismatch");
  return { r: n, c: t, C: i, ixfe: s };
}
function co(e, a, r, n) {
  var t = {}, s = e.read_shift(4), i = e.read_shift(4), c = e.read_shift(4), f = e.read_shift(2);
  return t.patternType = tf[c >> 26], n.cellStyles && (t.alc = s & 7, t.fWrap = s >> 3 & 1, t.alcV = s >> 4 & 7, t.fJustLast = s >> 7 & 1, t.trot = s >> 8 & 255, t.cIndent = s >> 16 & 15, t.fShrinkToFit = s >> 20 & 1, t.iReadOrder = s >> 22 & 2, t.fAtrNum = s >> 26 & 1, t.fAtrFnt = s >> 27 & 1, t.fAtrAlc = s >> 28 & 1, t.fAtrBdr = s >> 29 & 1, t.fAtrPat = s >> 30 & 1, t.fAtrProt = s >> 31 & 1, t.dgLeft = i & 15, t.dgRight = i >> 4 & 15, t.dgTop = i >> 8 & 15, t.dgBottom = i >> 12 & 15, t.icvLeft = i >> 16 & 127, t.icvRight = i >> 23 & 127, t.grbitDiag = i >> 30 & 3, t.icvTop = c & 127, t.icvBottom = c >> 7 & 127, t.icvDiag = c >> 14 & 127, t.dgDiag = c >> 21 & 15, t.icvFore = f & 127, t.icvBack = f >> 7 & 127, t.fsxButton = f >> 14 & 1), t;
}
function fo(e, a, r) {
  var n = {};
  return n.ifnt = e.read_shift(2), n.numFmtId = e.read_shift(2), n.flags = e.read_shift(2), n.fStyle = n.flags >> 2 & 1, a -= 6, n.data = co(e, a, n.fStyle, r), n;
}
function oo(e) {
  e.l += 4;
  var a = [e.read_shift(2), e.read_shift(2)];
  if (a[0] !== 0 && a[0]--, a[1] !== 0 && a[1]--, a[0] > 7 || a[1] > 7)
    throw new Error("Bad Gutters: " + a.join("|"));
  return a;
}
function fn(e, a, r) {
  var n = Ir(e);
  (r.biff == 2 || a == 9) && ++e.l;
  var t = Af(e);
  return n.val = t, n.t = t === !0 || t === !1 ? "b" : "e", n;
}
function lo(e, a, r) {
  r.biffguess && r.biff == 2 && (r.biff = 5);
  var n = Ir(e), t = Ze(e);
  return n.val = t, n;
}
var on = Nf;
function ho(e, a, r) {
  var n = e.l + a, t = e.read_shift(2), s = e.read_shift(2);
  if (r.sbcch = s, s == 1025 || s == 14849)
    return [s, t];
  if (s < 1 || s > 255)
    throw new Error("Unexpected SupBook type: " + s);
  for (var i = ia(e, s), c = []; n > e.l; )
    c.push(qa(e));
  return [s, t, i, c];
}
function ln(e, a, r) {
  var n = e.read_shift(2), t, s = {
    fBuiltIn: n & 1,
    fWantAdvise: n >>> 1 & 1,
    fWantPict: n >>> 2 & 1,
    fOle: n >>> 3 & 1,
    fOleLink: n >>> 4 & 1,
    cf: n >>> 5 & 1023,
    fIcon: n >>> 15 & 1
  };
  return r.sbcch === 14849 && (t = Lf(e, a - 2, r)), s.body = t || e.read_shift(a - 2), typeof t == "string" && (s.Name = t), s;
}
var uo = [
  "_xlnm.Consolidate_Area",
  "_xlnm.Auto_Open",
  "_xlnm.Auto_Close",
  "_xlnm.Extract",
  "_xlnm.Database",
  "_xlnm.Criteria",
  "_xlnm.Print_Area",
  "_xlnm.Print_Titles",
  "_xlnm.Recorder",
  "_xlnm.Data_Form",
  "_xlnm.Auto_Activate",
  "_xlnm.Auto_Deactivate",
  "_xlnm.Sheet_Title",
  "_xlnm._FilterDatabase"
];
function hn(e, a, r) {
  var n = e.l + a, t = e.read_shift(2), s = e.read_shift(1), i = e.read_shift(1), c = e.read_shift(r && r.biff == 2 ? 1 : 2), f = 0;
  (!r || r.biff >= 5) && (r.biff != 5 && (e.l += 2), f = e.read_shift(2), r.biff == 5 && (e.l += 2), e.l += 4);
  var l = ia(e, i, r);
  t & 32 && (l = uo[l.charCodeAt(0)]);
  var o = n - e.l;
  r && r.biff == 2 && --o;
  var h = n == e.l || c === 0 || !(o > 0) ? [] : Kh(e, o, r, c);
  return {
    chKey: s,
    Name: l,
    itab: f,
    rgce: h
  };
}
function Is(e, a, r) {
  if (r.biff < 8)
    return xo(e, a, r);
  for (var n = [], t = e.l + a, s = e.read_shift(r.biff > 8 ? 4 : 2); s-- !== 0; )
    n.push(Pf(e, r.biff > 8 ? 12 : 6, r));
  if (e.l != t)
    throw new Error("Bad ExternSheet: " + e.l + " != " + t);
  return n;
}
function xo(e, a, r) {
  e[e.l + 1] == 3 && e[e.l]++;
  var n = Za(e, a, r);
  return n.charCodeAt(0) == 3 ? n.slice(1) : n;
}
function vo(e, a, r) {
  if (r.biff < 8) {
    e.l += a;
    return;
  }
  var n = e.read_shift(2), t = e.read_shift(2), s = ia(e, n, r), i = ia(e, t, r);
  return [s, i];
}
function po(e, a, r) {
  var n = Os(e);
  e.l++;
  var t = e.read_shift(1);
  return a -= 8, [Yh(e, a, r), t, n];
}
function un(e, a, r) {
  var n = Mf(e);
  switch (r.biff) {
    case 2:
      e.l++, a -= 7;
      break;
    case 3:
    case 4:
      e.l += 2, a -= 8;
      break;
    default:
      e.l += 6, a -= 12;
  }
  return [n, zh(e, a, r)];
}
function go(e) {
  var a = e.read_shift(4) !== 0, r = e.read_shift(4) !== 0, n = e.read_shift(4);
  return [a, r, n];
}
function mo(e, a, r) {
  if (!(r.biff < 8)) {
    var n = e.read_shift(2), t = e.read_shift(2), s = e.read_shift(2), i = e.read_shift(2), c = ua(e, 0, r);
    return r.biff < 8 && e.read_shift(1), [{ r: n, c: t }, c, i, s];
  }
}
function _o(e, a, r) {
  return mo(e, a, r);
}
function Eo(e, a) {
  for (var r = [], n = e.read_shift(2); n--; )
    r.push(Ft(e));
  return r;
}
function To(e, a, r) {
  if (r && r.biff < 8)
    return wo(e, a, r);
  var n = Rs(e), t = Hf(e, a - 22, n[1]);
  return { cmo: n, ft: t };
}
var ko = {
  8: function(e, a) {
    var r = e.l + a;
    e.l += 10;
    var n = e.read_shift(2);
    e.l += 4, e.l += 2, e.l += 2, e.l += 2, e.l += 4;
    var t = e.read_shift(1);
    return e.l += t, e.l = r, { fmt: n };
  }
};
function wo(e, a, r) {
  e.l += 4;
  var n = e.read_shift(2), t = e.read_shift(2), s = e.read_shift(2);
  e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 2, e.l += 6, a -= 36;
  var i = [];
  return i.push((ko[n] || er)(e, a, r)), { cmo: [t, n, s], ft: i };
}
function Fo(e, a, r) {
  var n = e.l, t = "";
  try {
    e.l += 4;
    var s = (r.lastobj || { cmo: [0, 0] }).cmo[1], i;
    [0, 5, 7, 11, 12, 14].indexOf(s) == -1 ? e.l += 6 : i = Cf(e, 6, r);
    var c = e.read_shift(2);
    e.read_shift(2), be(e, 2);
    var f = e.read_shift(2);
    e.l += f;
    for (var l = 1; l < e.lens.length - 1; ++l) {
      if (e.l - n != e.lens[l])
        throw new Error("TxO: bad continue record");
      var o = e[e.l], h = ia(e, e.lens[l + 1] - e.lens[l] - 1);
      if (t += h, t.length >= (o ? c : 2 * c))
        break;
    }
    if (t.length !== c && t.length !== c * 2)
      throw new Error("cchText: " + c + " != " + t.length);
    return e.l = n + a, { t };
  } catch {
    return e.l = n + a, { t };
  }
}
function Ao(e, a) {
  var r = Ft(e);
  e.l += 16;
  var n = Rf(e, a - 24);
  return [r, n];
}
function So(e, a) {
  e.read_shift(2);
  var r = Ft(e), n = e.read_shift((a - 10) / 2, "dbcs-cont");
  return n = n.replace(ir, ""), [r, n];
}
function Co(e) {
  var a = [0, 0], r;
  return r = e.read_shift(2), a[0] = en[r] || r, r = e.read_shift(2), a[1] = en[r] || r, a;
}
function yo(e) {
  for (var a = e.read_shift(2), r = []; a-- > 0; )
    r.push(ys(e));
  return r;
}
function Do(e) {
  for (var a = e.read_shift(2), r = []; a-- > 0; )
    r.push(ys(e));
  return r;
}
function Oo(e) {
  e.l += 2;
  var a = { cxfs: 0, crc: 0 };
  return a.cxfs = e.read_shift(2), a.crc = e.read_shift(4), a;
}
function Ns(e, a, r) {
  if (!r.cellStyles)
    return er(e, a);
  var n = r && r.biff >= 12 ? 4 : 2, t = e.read_shift(n), s = e.read_shift(n), i = e.read_shift(n), c = e.read_shift(n), f = e.read_shift(2);
  n == 2 && (e.l += 2);
  var l = { s: t, e: s, w: i, ixfe: c, flags: f };
  return (r.biff >= 5 || !r.biff) && (l.level = f >> 8 & 7), l;
}
function Ro(e, a) {
  var r = {};
  return a < 32 || (e.l += 16, r.header = Ze(e), r.footer = Ze(e), e.l += 2), r;
}
function Io(e, a, r) {
  var n = { area: !1 };
  if (r.biff != 5)
    return e.l += a, n;
  var t = e.read_shift(1);
  return e.l += 3, t & 16 && (n.area = !0), n;
}
var No = Ir, Po = Ss, Lo = qa;
function Mo(e) {
  var a = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(4), t = { fmt: a, env: r, len: n, data: e.slice(e.l, e.l + n) };
  return e.l += n, t;
}
function Bo(e, a, r) {
  r.biffguess && r.biff == 5 && (r.biff = 2);
  var n = Ir(e);
  ++e.l;
  var t = ua(e, a - 7, r);
  return n.t = "str", n.val = t, n;
}
function bo(e) {
  var a = Ir(e);
  ++e.l;
  var r = Ze(e);
  return a.t = "n", a.val = r, a;
}
function Uo(e) {
  var a = Ir(e);
  ++e.l;
  var r = e.read_shift(2);
  return a.t = "n", a.val = r, a;
}
function Ho(e) {
  var a = e.read_shift(1);
  return a === 0 ? (e.l++, "") : e.read_shift(a, "sbcs-cont");
}
function Vo(e, a) {
  e.l += 6, e.l += 2, e.l += 1, e.l += 3, e.l += 1, e.l += a - 13;
}
function Wo(e, a, r) {
  var n = e.l + a, t = Ir(e), s = e.read_shift(2), i = ia(e, s, r);
  return e.l = n, t.t = "str", t.val = i, t;
}
var Go = [2, 3, 48, 49, 131, 139, 140, 245], xn = /* @__PURE__ */ function() {
  var e = {
    /* Code Pages Supported by Visual FoxPro */
    /*::[*/
    1: 437,
    /*::[*/
    2: 850,
    /*::[*/
    3: 1252,
    /*::[*/
    4: 1e4,
    /*::[*/
    100: 852,
    /*::[*/
    101: 866,
    /*::[*/
    102: 865,
    /*::[*/
    103: 861,
    /*::[*/
    104: 895,
    /*::[*/
    105: 620,
    /*::[*/
    106: 737,
    /*::[*/
    107: 857,
    /*::[*/
    120: 950,
    /*::[*/
    121: 949,
    /*::[*/
    122: 936,
    /*::[*/
    123: 932,
    /*::[*/
    124: 874,
    /*::[*/
    125: 1255,
    /*::[*/
    126: 1256,
    /*::[*/
    150: 10007,
    /*::[*/
    151: 10029,
    /*::[*/
    152: 10006,
    /*::[*/
    200: 1250,
    /*::[*/
    201: 1251,
    /*::[*/
    202: 1254,
    /*::[*/
    203: 1253,
    /* shapefile DBF extension */
    /*::[*/
    0: 20127,
    /*::[*/
    8: 865,
    /*::[*/
    9: 437,
    /*::[*/
    10: 850,
    /*::[*/
    11: 437,
    /*::[*/
    13: 437,
    /*::[*/
    14: 850,
    /*::[*/
    15: 437,
    /*::[*/
    16: 850,
    /*::[*/
    17: 437,
    /*::[*/
    18: 850,
    /*::[*/
    19: 932,
    /*::[*/
    20: 850,
    /*::[*/
    21: 437,
    /*::[*/
    22: 850,
    /*::[*/
    23: 865,
    /*::[*/
    24: 437,
    /*::[*/
    25: 437,
    /*::[*/
    26: 850,
    /*::[*/
    27: 437,
    /*::[*/
    28: 863,
    /*::[*/
    29: 850,
    /*::[*/
    31: 852,
    /*::[*/
    34: 852,
    /*::[*/
    35: 852,
    /*::[*/
    36: 860,
    /*::[*/
    37: 850,
    /*::[*/
    38: 866,
    /*::[*/
    55: 850,
    /*::[*/
    64: 852,
    /*::[*/
    77: 936,
    /*::[*/
    78: 949,
    /*::[*/
    79: 950,
    /*::[*/
    80: 874,
    /*::[*/
    87: 1252,
    /*::[*/
    88: 1252,
    /*::[*/
    89: 1252,
    /*::[*/
    108: 863,
    /*::[*/
    134: 737,
    /*::[*/
    135: 852,
    /*::[*/
    136: 857,
    /*::[*/
    204: 1257,
    /*::[*/
    255: 16969
  }, a = r0({
    /*::[*/
    1: 437,
    /*::[*/
    2: 850,
    /*::[*/
    3: 1252,
    /*::[*/
    4: 1e4,
    /*::[*/
    100: 852,
    /*::[*/
    101: 866,
    /*::[*/
    102: 865,
    /*::[*/
    103: 861,
    /*::[*/
    104: 895,
    /*::[*/
    105: 620,
    /*::[*/
    106: 737,
    /*::[*/
    107: 857,
    /*::[*/
    120: 950,
    /*::[*/
    121: 949,
    /*::[*/
    122: 936,
    /*::[*/
    123: 932,
    /*::[*/
    124: 874,
    /*::[*/
    125: 1255,
    /*::[*/
    126: 1256,
    /*::[*/
    150: 10007,
    /*::[*/
    151: 10029,
    /*::[*/
    152: 10006,
    /*::[*/
    200: 1250,
    /*::[*/
    201: 1251,
    /*::[*/
    202: 1254,
    /*::[*/
    203: 1253,
    /*::[*/
    0: 20127
  });
  function r(c, f) {
    var l = [], o = Yr(1);
    switch (f.type) {
      case "base64":
        o = kr(ur(c));
        break;
      case "binary":
        o = kr(c);
        break;
      case "buffer":
      case "array":
        o = c;
        break;
    }
    $e(o, 0);
    var h = o.read_shift(1), x = !!(h & 136), d = !1, v = !1;
    switch (h) {
      case 2:
        break;
      case 3:
        break;
      case 48:
        d = !0, x = !0;
        break;
      case 49:
        d = !0, x = !0;
        break;
      case 131:
        break;
      case 139:
        break;
      case 140:
        v = !0;
        break;
      case 245:
        break;
      default:
        throw new Error("DBF Unsupported Version: " + h.toString(16));
    }
    var u = 0, g = 521;
    h == 2 && (u = o.read_shift(2)), o.l += 3, h != 2 && (u = o.read_shift(4)), u > 1048576 && (u = 1e6), h != 2 && (g = o.read_shift(2));
    var S = o.read_shift(2), y = f.codepage || 1252;
    h != 2 && (o.l += 16, o.read_shift(1), o[o.l] !== 0 && (y = e[o[o.l]]), o.l += 1, o.l += 2), v && (o.l += 36);
    for (var _ = [], N = {}, b = Math.min(o.length, h == 2 ? 521 : g - 10 - (d ? 264 : 0)), I = v ? 32 : 11; o.l < b && o[o.l] != 13; )
      switch (N = {}, N.name = Xr.utils.decode(y, o.slice(o.l, o.l + I)).replace(/[\u0000\r\n].*$/g, ""), o.l += I, N.type = String.fromCharCode(o.read_shift(1)), h != 2 && !v && (N.offset = o.read_shift(4)), N.len = o.read_shift(1), h == 2 && (N.offset = o.read_shift(2)), N.dec = o.read_shift(1), N.name.length && _.push(N), h != 2 && (o.l += v ? 13 : 14), N.type) {
        case "B":
          (!d || N.len != 8) && f.WTF && console.log("Skipping " + N.name + ":" + N.type);
          break;
        case "G":
        case "P":
          f.WTF && console.log("Skipping " + N.name + ":" + N.type);
          break;
        case "+":
        case "0":
        case "@":
        case "C":
        case "D":
        case "F":
        case "I":
        case "L":
        case "M":
        case "N":
        case "O":
        case "T":
        case "Y":
          break;
        default:
          throw new Error("Unknown Field Type: " + N.type);
      }
    if (o[o.l] !== 13 && (o.l = g - 1), o.read_shift(1) !== 13)
      throw new Error("DBF Terminator not found " + o.l + " " + o[o.l]);
    o.l = g;
    var F = 0, V = 0;
    for (l[0] = [], V = 0; V != _.length; ++V)
      l[0][V] = _[V].name;
    for (; u-- > 0; ) {
      if (o[o.l] === 42) {
        o.l += S;
        continue;
      }
      for (++o.l, l[++F] = [], V = 0, V = 0; V != _.length; ++V) {
        var D = o.slice(o.l, o.l + _[V].len);
        o.l += _[V].len, $e(D, 0);
        var z = Xr.utils.decode(y, D);
        switch (_[V].type) {
          case "C":
            z.trim().length && (l[F][V] = z.replace(/\s+$/, ""));
            break;
          case "D":
            z.length === 8 ? l[F][V] = new Date(+z.slice(0, 4), +z.slice(4, 6) - 1, +z.slice(6, 8)) : l[F][V] = z;
            break;
          case "F":
            l[F][V] = parseFloat(z.trim());
            break;
          case "+":
          case "I":
            l[F][V] = v ? D.read_shift(-4, "i") ^ 2147483648 : D.read_shift(4, "i");
            break;
          case "L":
            switch (z.trim().toUpperCase()) {
              case "Y":
              case "T":
                l[F][V] = !0;
                break;
              case "N":
              case "F":
                l[F][V] = !1;
                break;
              case "":
              case "?":
                break;
              default:
                throw new Error("DBF Unrecognized L:|" + z + "|");
            }
            break;
          case "M":
            if (!x)
              throw new Error("DBF Unexpected MEMO for type " + h.toString(16));
            l[F][V] = "##MEMO##" + (v ? parseInt(z.trim(), 10) : D.read_shift(4));
            break;
          case "N":
            z = z.replace(/\u0000/g, "").trim(), z && z != "." && (l[F][V] = +z || 0);
            break;
          case "@":
            l[F][V] = new Date(D.read_shift(-8, "f") - 621356832e5);
            break;
          case "T":
            l[F][V] = new Date((D.read_shift(4) - 2440588) * 864e5 + D.read_shift(4));
            break;
          case "Y":
            l[F][V] = D.read_shift(4, "i") / 1e4 + D.read_shift(4, "i") / 1e4 * Math.pow(2, 32);
            break;
          case "O":
            l[F][V] = -D.read_shift(-8, "f");
            break;
          case "B":
            if (d && _[V].len == 8) {
              l[F][V] = D.read_shift(8, "f");
              break;
            }
          case "G":
          case "P":
            D.l += _[V].len;
            break;
          case "0":
            if (_[V].name === "_NullFlags")
              break;
          default:
            throw new Error("DBF Unsupported data type " + _[V].type);
        }
      }
    }
    if (h != 2 && o.l < o.length && o[o.l++] != 26)
      throw new Error("DBF EOF Marker missing " + (o.l - 1) + " of " + o.length + " " + o[o.l - 1].toString(16));
    return f && f.sheetRows && (l = l.slice(0, f.sheetRows)), f.DBF = _, l;
  }
  function n(c, f) {
    var l = f || {};
    l.dateNF || (l.dateNF = "yyyymmdd");
    var o = wa(r(c, l), l);
    return o["!cols"] = l.DBF.map(function(h) {
      return {
        wch: h.len,
        DBF: h
      };
    }), delete l.DBF, o;
  }
  function t(c, f) {
    try {
      return Zr(n(c, f), f);
    } catch (l) {
      if (f && f.WTF)
        throw l;
    }
    return { SheetNames: [], Sheets: {} };
  }
  var s = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
  function i(c, f) {
    var l = f || {};
    if (+l.codepage >= 0 && wr(+l.codepage), l.type == "string")
      throw new Error("Cannot write DBF to JS string");
    var o = Ut(), h = Yt(c, { header: 1, raw: !0, cellDates: !0 }), x = h[0], d = h.slice(1), v = c["!cols"] || [], u = 0, g = 0, S = 0, y = 1;
    for (u = 0; u < x.length; ++u) {
      if (((v[u] || {}).DBF || {}).name) {
        x[u] = v[u].DBF.name, ++S;
        continue;
      }
      if (x[u] != null) {
        if (++S, typeof x[u] == "number" && (x[u] = x[u].toString(10)), typeof x[u] != "string")
          throw new Error("DBF Invalid column name " + x[u] + " |" + typeof x[u] + "|");
        if (x.indexOf(x[u]) !== u) {
          for (g = 0; g < 1024; ++g)
            if (x.indexOf(x[u] + "_" + g) == -1) {
              x[u] += "_" + g;
              break;
            }
        }
      }
    }
    var _ = Re(c["!ref"]), N = [], b = [], I = [];
    for (u = 0; u <= _.e.c - _.s.c; ++u) {
      var F = "", V = "", D = 0, z = [];
      for (g = 0; g < d.length; ++g)
        d[g][u] != null && z.push(d[g][u]);
      if (z.length == 0 || x[u] == null) {
        N[u] = "?";
        continue;
      }
      for (g = 0; g < z.length; ++g) {
        switch (typeof z[g]) {
          case "number":
            V = "B";
            break;
          case "string":
            V = "C";
            break;
          case "boolean":
            V = "L";
            break;
          case "object":
            V = z[g] instanceof Date ? "D" : "C";
            break;
          default:
            V = "C";
        }
        D = Math.max(D, String(z[g]).length), F = F && F != V ? "C" : V;
      }
      D > 250 && (D = 250), V = ((v[u] || {}).DBF || {}).type, V == "C" && v[u].DBF.len > D && (D = v[u].DBF.len), F == "B" && V == "N" && (F = "N", I[u] = v[u].DBF.dec, D = v[u].DBF.len), b[u] = F == "C" || V == "N" ? D : s[F] || 0, y += b[u], N[u] = F;
    }
    var G = o.next(32);
    for (G.write_shift(4, 318902576), G.write_shift(4, d.length), G.write_shift(2, 296 + 32 * S), G.write_shift(2, y), u = 0; u < 4; ++u)
      G.write_shift(4, 0);
    for (G.write_shift(4, 0 | (+a[
      /*::String(*/
      Rn
      /*::)*/
    ] || 3) << 8), u = 0, g = 0; u < x.length; ++u)
      if (x[u] != null) {
        var P = o.next(32), J = (x[u].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
        P.write_shift(1, J, "sbcs"), P.write_shift(1, N[u] == "?" ? "C" : N[u], "sbcs"), P.write_shift(4, g), P.write_shift(1, b[u] || s[N[u]] || 0), P.write_shift(1, I[u] || 0), P.write_shift(1, 2), P.write_shift(4, 0), P.write_shift(1, 0), P.write_shift(4, 0), P.write_shift(4, 0), g += b[u] || s[N[u]] || 0;
      }
    var fe = o.next(264);
    for (fe.write_shift(4, 13), u = 0; u < 65; ++u)
      fe.write_shift(4, 0);
    for (u = 0; u < d.length; ++u) {
      var re = o.next(y);
      for (re.write_shift(1, 0), g = 0; g < x.length; ++g)
        if (x[g] != null)
          switch (N[g]) {
            case "L":
              re.write_shift(1, d[u][g] == null ? 63 : d[u][g] ? 84 : 70);
              break;
            case "B":
              re.write_shift(8, d[u][g] || 0, "f");
              break;
            case "N":
              var ce = "0";
              for (typeof d[u][g] == "number" && (ce = d[u][g].toFixed(I[g] || 0)), S = 0; S < b[g] - ce.length; ++S)
                re.write_shift(1, 32);
              re.write_shift(1, ce, "sbcs");
              break;
            case "D":
              d[u][g] ? (re.write_shift(4, ("0000" + d[u][g].getFullYear()).slice(-4), "sbcs"), re.write_shift(2, ("00" + (d[u][g].getMonth() + 1)).slice(-2), "sbcs"), re.write_shift(2, ("00" + d[u][g].getDate()).slice(-2), "sbcs")) : re.write_shift(8, "00000000", "sbcs");
              break;
            case "C":
              var ie = String(d[u][g] != null ? d[u][g] : "").slice(0, b[g]);
              for (re.write_shift(1, ie, "sbcs"), S = 0; S < b[g] - ie.length; ++S)
                re.write_shift(1, 32);
              break;
          }
    }
    return o.next(1).write_shift(1, 26), o.end();
  }
  return {
    to_workbook: t,
    to_sheet: n,
    from_sheet: i
  };
}(), Xo = /* @__PURE__ */ function() {
  var e = {
    AA: "À",
    BA: "Á",
    CA: "Â",
    DA: 195,
    HA: "Ä",
    JA: 197,
    AE: "È",
    BE: "É",
    CE: "Ê",
    HE: "Ë",
    AI: "Ì",
    BI: "Í",
    CI: "Î",
    HI: "Ï",
    AO: "Ò",
    BO: "Ó",
    CO: "Ô",
    DO: 213,
    HO: "Ö",
    AU: "Ù",
    BU: "Ú",
    CU: "Û",
    HU: "Ü",
    Aa: "à",
    Ba: "á",
    Ca: "â",
    Da: 227,
    Ha: "ä",
    Ja: 229,
    Ae: "è",
    Be: "é",
    Ce: "ê",
    He: "ë",
    Ai: "ì",
    Bi: "í",
    Ci: "î",
    Hi: "ï",
    Ao: "ò",
    Bo: "ó",
    Co: "ô",
    Do: 245,
    Ho: "ö",
    Au: "ù",
    Bu: "ú",
    Cu: "û",
    Hu: "ü",
    KC: "Ç",
    Kc: "ç",
    q: "æ",
    z: "œ",
    a: "Æ",
    j: "Œ",
    DN: 209,
    Dn: 241,
    Hy: 255,
    S: 169,
    c: 170,
    R: 174,
    "B ": 180,
    /*::[*/
    0: 176,
    /*::[*/
    1: 177,
    /*::[*/
    2: 178,
    /*::[*/
    3: 179,
    /*::[*/
    5: 181,
    /*::[*/
    6: 182,
    /*::[*/
    7: 183,
    Q: 185,
    k: 186,
    b: 208,
    i: 216,
    l: 222,
    s: 240,
    y: 248,
    "!": 161,
    '"': 162,
    "#": 163,
    "(": 164,
    "%": 165,
    "'": 167,
    "H ": 168,
    "+": 171,
    ";": 187,
    "<": 188,
    "=": 189,
    ">": 190,
    "?": 191,
    "{": 223
  }, a = new RegExp("\x1BN(" + Or(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm"), r = function(x, d) {
    var v = e[d];
    return typeof v == "number" ? y0(v) : v;
  }, n = function(x, d, v) {
    var u = d.charCodeAt(0) - 32 << 4 | v.charCodeAt(0) - 48;
    return u == 59 ? x : y0(u);
  };
  e["|"] = 254;
  function t(x, d) {
    switch (d.type) {
      case "base64":
        return s(ur(x), d);
      case "binary":
        return s(x, d);
      case "buffer":
        return s(me && Buffer.isBuffer(x) ? x.toString("binary") : fa(x), d);
      case "array":
        return s(sa(x), d);
    }
    throw new Error("Unrecognized type " + d.type);
  }
  function s(x, d) {
    var v = x.split(/[\n\r]+/), u = -1, g = -1, S = 0, y = 0, _ = [], N = [], b = null, I = {}, F = [], V = [], D = [], z = 0, G;
    for (+d.codepage >= 0 && wr(+d.codepage); S !== v.length; ++S) {
      z = 0;
      var P = v[S].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, n).replace(a, r), J = P.replace(/;;/g, "\0").split(";").map(function(O) {
        return O.replace(/\u0000/g, ";");
      }), fe = J[0], re;
      if (P.length > 0)
        switch (fe) {
          case "ID":
            break;
          case "E":
            break;
          case "B":
            break;
          case "O":
            break;
          case "W":
            break;
          case "P":
            J[1].charAt(0) == "P" && N.push(P.slice(3).replace(/;;/g, ";"));
            break;
          case "C":
            var ce = !1, ie = !1, Se = !1, W = !1, le = -1, he = -1;
            for (y = 1; y < J.length; ++y)
              switch (J[y].charAt(0)) {
                case "A":
                  break;
                case "X":
                  g = parseInt(J[y].slice(1)) - 1, ie = !0;
                  break;
                case "Y":
                  for (u = parseInt(J[y].slice(1)) - 1, ie || (g = 0), G = _.length; G <= u; ++G)
                    _[G] = [];
                  break;
                case "K":
                  re = J[y].slice(1), re.charAt(0) === '"' ? re = re.slice(1, re.length - 1) : re === "TRUE" ? re = !0 : re === "FALSE" ? re = !1 : isNaN(Ar(re)) ? isNaN(_a(re).getDate()) || (re = Xe(re)) : (re = Ar(re), b !== null && Ta(b) && (re = wt(re))), ce = !0;
                  break;
                case "E":
                  W = !0;
                  var A = ga(J[y].slice(1), { r: u, c: g });
                  _[u][g] = [_[u][g], A];
                  break;
                case "S":
                  Se = !0, _[u][g] = [_[u][g], "S5S"];
                  break;
                case "G":
                  break;
                case "R":
                  le = parseInt(J[y].slice(1)) - 1;
                  break;
                case "C":
                  he = parseInt(J[y].slice(1)) - 1;
                  break;
                default:
                  if (d && d.WTF)
                    throw new Error("SYLK bad record " + P);
              }
            if (ce && (_[u][g] && _[u][g].length == 2 ? _[u][g][0] = re : _[u][g] = re, b = null), Se) {
              if (W)
                throw new Error("SYLK shared formula cannot have own formula");
              var U = le > -1 && _[le][he];
              if (!U || !U[1])
                throw new Error("SYLK shared formula cannot find base");
              _[u][g][1] = Gs(U[1], { r: u - le, c: g - he });
            }
            break;
          case "F":
            var R = 0;
            for (y = 1; y < J.length; ++y)
              switch (J[y].charAt(0)) {
                case "X":
                  g = parseInt(J[y].slice(1)) - 1, ++R;
                  break;
                case "Y":
                  for (u = parseInt(J[y].slice(1)) - 1, G = _.length; G <= u; ++G)
                    _[G] = [];
                  break;
                case "M":
                  z = parseInt(J[y].slice(1)) / 20;
                  break;
                case "F":
                  break;
                case "G":
                  break;
                case "P":
                  b = N[parseInt(J[y].slice(1))];
                  break;
                case "S":
                  break;
                case "D":
                  break;
                case "N":
                  break;
                case "W":
                  for (D = J[y].slice(1).split(" "), G = parseInt(D[0], 10); G <= parseInt(D[1], 10); ++G)
                    z = parseInt(D[2], 10), V[G - 1] = z === 0 ? { hidden: !0 } : { wch: z }, Ea(V[G - 1]);
                  break;
                case "C":
                  g = parseInt(J[y].slice(1)) - 1, V[g] || (V[g] = {});
                  break;
                case "R":
                  u = parseInt(J[y].slice(1)) - 1, F[u] || (F[u] = {}), z > 0 ? (F[u].hpt = z, F[u].hpx = ja(z)) : z === 0 && (F[u].hidden = !0);
                  break;
                default:
                  if (d && d.WTF)
                    throw new Error("SYLK bad record " + P);
              }
            R < 1 && (b = null);
            break;
          default:
            if (d && d.WTF)
              throw new Error("SYLK bad record " + P);
        }
    }
    return F.length > 0 && (I["!rows"] = F), V.length > 0 && (I["!cols"] = V), d && d.sheetRows && (_ = _.slice(0, d.sheetRows)), [_, I];
  }
  function i(x, d) {
    var v = t(x, d), u = v[0], g = v[1], S = wa(u, d);
    return Or(g).forEach(function(y) {
      S[y] = g[y];
    }), S;
  }
  function c(x, d) {
    return Zr(i(x, d), d);
  }
  function f(x, d, v, u) {
    var g = "C;Y" + (v + 1) + ";X" + (u + 1) + ";K";
    switch (x.t) {
      case "n":
        g += x.v || 0, x.f && !x.F && (g += ";E" + O1(x.f, { r: v, c: u }));
        break;
      case "b":
        g += x.v ? "TRUE" : "FALSE";
        break;
      case "e":
        g += x.w || x.v;
        break;
      case "d":
        g += '"' + (x.w || x.v) + '"';
        break;
      case "s":
        g += '"' + x.v.replace(/"/g, "").replace(/;/g, ";;") + '"';
        break;
    }
    return g;
  }
  function l(x, d) {
    d.forEach(function(v, u) {
      var g = "F;W" + (u + 1) + " " + (u + 1) + " ";
      v.hidden ? g += "0" : (typeof v.width == "number" && !v.wpx && (v.wpx = Et(v.width)), typeof v.wpx == "number" && !v.wch && (v.wch = Tt(v.wpx)), typeof v.wch == "number" && (g += Math.round(v.wch))), g.charAt(g.length - 1) != " " && x.push(g);
    });
  }
  function o(x, d) {
    d.forEach(function(v, u) {
      var g = "F;";
      v.hidden ? g += "M0;" : v.hpt ? g += "M" + 20 * v.hpt + ";" : v.hpx && (g += "M" + 20 * Hs(v.hpx) + ";"), g.length > 2 && x.push(g + "R" + (u + 1));
    });
  }
  function h(x, d) {
    var v = ["ID;PWXL;N;E"], u = [], g = Re(x["!ref"]), S, y = Array.isArray(x), _ = `\r
`;
    v.push("P;PGeneral"), v.push("F;P0;DG0G8;M255"), x["!cols"] && l(v, x["!cols"]), x["!rows"] && o(v, x["!rows"]), v.push("B;Y" + (g.e.r - g.s.r + 1) + ";X" + (g.e.c - g.s.c + 1) + ";D" + [g.s.c, g.s.r, g.e.c, g.e.r].join(" "));
    for (var N = g.s.r; N <= g.e.r; ++N)
      for (var b = g.s.c; b <= g.e.c; ++b) {
        var I = ue({ r: N, c: b });
        S = y ? (x[N] || [])[b] : x[I], !(!S || S.v == null && (!S.f || S.F)) && u.push(f(S, x, N, b));
      }
    return v.join(_) + _ + u.join(_) + _ + "E" + _;
  }
  return {
    to_workbook: c,
    to_sheet: i,
    from_sheet: h
  };
}(), $o = /* @__PURE__ */ function() {
  function e(s, i) {
    switch (i.type) {
      case "base64":
        return a(ur(s), i);
      case "binary":
        return a(s, i);
      case "buffer":
        return a(me && Buffer.isBuffer(s) ? s.toString("binary") : fa(s), i);
      case "array":
        return a(sa(s), i);
    }
    throw new Error("Unrecognized type " + i.type);
  }
  function a(s, i) {
    for (var c = s.split(`
`), f = -1, l = -1, o = 0, h = []; o !== c.length; ++o) {
      if (c[o].trim() === "BOT") {
        h[++f] = [], l = 0;
        continue;
      }
      if (!(f < 0)) {
        var x = c[o].trim().split(","), d = x[0], v = x[1];
        ++o;
        for (var u = c[o] || ""; (u.match(/["]/g) || []).length & 1 && o < c.length - 1; )
          u += `
` + c[++o];
        switch (u = u.trim(), +d) {
          case -1:
            if (u === "BOT") {
              h[++f] = [], l = 0;
              continue;
            } else if (u !== "EOD")
              throw new Error("Unrecognized DIF special command " + u);
            break;
          case 0:
            u === "TRUE" ? h[f][l] = !0 : u === "FALSE" ? h[f][l] = !1 : isNaN(Ar(v)) ? isNaN(_a(v).getDate()) ? h[f][l] = v : h[f][l] = Xe(v) : h[f][l] = Ar(v), ++l;
            break;
          case 1:
            u = u.slice(1, u.length - 1), u = u.replace(/""/g, '"'), u && u.match(/^=".*"$/) && (u = u.slice(2, -1)), h[f][l++] = u !== "" ? u : null;
            break;
        }
        if (u === "EOD")
          break;
      }
    }
    return i && i.sheetRows && (h = h.slice(0, i.sheetRows)), h;
  }
  function r(s, i) {
    return wa(e(s, i), i);
  }
  function n(s, i) {
    return Zr(r(s, i), i);
  }
  var t = /* @__PURE__ */ function() {
    var s = function(f, l, o, h, x) {
      f.push(l), f.push(o + "," + h), f.push('"' + x.replace(/"/g, '""') + '"');
    }, i = function(f, l, o, h) {
      f.push(l + "," + o), f.push(l == 1 ? '"' + h.replace(/"/g, '""') + '"' : h);
    };
    return function(f) {
      var l = [], o = Re(f["!ref"]), h, x = Array.isArray(f);
      s(l, "TABLE", 0, 1, "sheetjs"), s(l, "VECTORS", 0, o.e.r - o.s.r + 1, ""), s(l, "TUPLES", 0, o.e.c - o.s.c + 1, ""), s(l, "DATA", 0, 0, "");
      for (var d = o.s.r; d <= o.e.r; ++d) {
        i(l, -1, 0, "BOT");
        for (var v = o.s.c; v <= o.e.c; ++v) {
          var u = ue({ r: d, c: v });
          if (h = x ? (f[d] || [])[v] : f[u], !h) {
            i(l, 1, 0, "");
            continue;
          }
          switch (h.t) {
            case "n":
              var g = h.w;
              !g && h.v != null && (g = h.v), g == null ? h.f && !h.F ? i(l, 1, 0, "=" + h.f) : i(l, 1, 0, "") : i(l, 0, g, "V");
              break;
            case "b":
              i(l, 0, h.v ? 1 : 0, h.v ? "TRUE" : "FALSE");
              break;
            case "s":
              i(l, 1, 0, isNaN(h.v) ? h.v : '="' + h.v + '"');
              break;
            case "d":
              h.w || (h.w = mr(h.z || de[14], cr(Xe(h.v)))), i(l, 0, h.w, "V");
              break;
            default:
              i(l, 1, 0, "");
          }
        }
      }
      i(l, -1, 0, "EOD");
      var S = `\r
`, y = l.join(S);
      return y;
    };
  }();
  return {
    to_workbook: n,
    to_sheet: r,
    from_sheet: t
  };
}(), zo = /* @__PURE__ */ function() {
  function e(h) {
    return h.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, `
`);
  }
  function a(h) {
    return h.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
  }
  function r(h, x) {
    for (var d = h.split(`
`), v = -1, u = -1, g = 0, S = []; g !== d.length; ++g) {
      var y = d[g].trim().split(":");
      if (y[0] === "cell") {
        var _ = sr(y[1]);
        if (S.length <= _.r)
          for (v = S.length; v <= _.r; ++v)
            S[v] || (S[v] = []);
        switch (v = _.r, u = _.c, y[2]) {
          case "t":
            S[v][u] = e(y[3]);
            break;
          case "v":
            S[v][u] = +y[3];
            break;
          case "vtf":
            var N = y[y.length - 1];
          case "vtc":
            switch (y[3]) {
              case "nl":
                S[v][u] = !!+y[4];
                break;
              default:
                S[v][u] = +y[4];
                break;
            }
            y[2] == "vtf" && (S[v][u] = [S[v][u], N]);
        }
      }
    }
    return x && x.sheetRows && (S = S.slice(0, x.sheetRows)), S;
  }
  function n(h, x) {
    return wa(r(h, x), x);
  }
  function t(h, x) {
    return Zr(n(h, x), x);
  }
  var s = [
    "socialcalc:version:1.5",
    "MIME-Version: 1.0",
    "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"
  ].join(`
`), i = [
    "--SocialCalcSpreadsheetControlSave",
    "Content-type: text/plain; charset=UTF-8"
  ].join(`
`) + `
`, c = [
    "# SocialCalc Spreadsheet Control Save",
    "part:sheet"
  ].join(`
`), f = "--SocialCalcSpreadsheetControlSave--";
  function l(h) {
    if (!h || !h["!ref"])
      return "";
    for (var x = [], d = [], v, u = "", g = ka(h["!ref"]), S = Array.isArray(h), y = g.s.r; y <= g.e.r; ++y)
      for (var _ = g.s.c; _ <= g.e.c; ++_)
        if (u = ue({ r: y, c: _ }), v = S ? (h[y] || [])[_] : h[u], !(!v || v.v == null || v.t === "z")) {
          switch (d = ["cell", u, "t"], v.t) {
            case "s":
            case "str":
              d.push(a(v.v));
              break;
            case "n":
              v.f ? (d[2] = "vtf", d[3] = "n", d[4] = v.v, d[5] = a(v.f)) : (d[2] = "v", d[3] = v.v);
              break;
            case "b":
              d[2] = "vt" + (v.f ? "f" : "c"), d[3] = "nl", d[4] = v.v ? "1" : "0", d[5] = a(v.f || (v.v ? "TRUE" : "FALSE"));
              break;
            case "d":
              var N = cr(Xe(v.v));
              d[2] = "vtc", d[3] = "nd", d[4] = "" + N, d[5] = v.w || mr(v.z || de[14], N);
              break;
            case "e":
              continue;
          }
          x.push(d.join(":"));
        }
    return x.push("sheet:c:" + (g.e.c - g.s.c + 1) + ":r:" + (g.e.r - g.s.r + 1) + ":tvf:1"), x.push("valueformat:1:text-wiki"), x.join(`
`);
  }
  function o(h) {
    return [s, i, c, i, l(h), f].join(`
`);
  }
  return {
    to_workbook: t,
    to_sheet: n,
    from_sheet: o
  };
}(), $a = /* @__PURE__ */ function() {
  function e(o, h, x, d, v) {
    v.raw ? h[x][d] = o : o === "" || (o === "TRUE" ? h[x][d] = !0 : o === "FALSE" ? h[x][d] = !1 : isNaN(Ar(o)) ? isNaN(_a(o).getDate()) ? h[x][d] = o : h[x][d] = Xe(o) : h[x][d] = Ar(o));
  }
  function a(o, h) {
    var x = h || {}, d = [];
    if (!o || o.length === 0)
      return d;
    for (var v = o.split(/[\r\n]/), u = v.length - 1; u >= 0 && v[u].length === 0; )
      --u;
    for (var g = 10, S = 0, y = 0; y <= u; ++y)
      S = v[y].indexOf(" "), S == -1 ? S = v[y].length : S++, g = Math.max(g, S);
    for (y = 0; y <= u; ++y) {
      d[y] = [];
      var _ = 0;
      for (e(v[y].slice(0, g).trim(), d, y, _, x), _ = 1; _ <= (v[y].length - g) / 10 + 1; ++_)
        e(v[y].slice(g + (_ - 1) * 10, g + _ * 10).trim(), d, y, _, x);
    }
    return x.sheetRows && (d = d.slice(0, x.sheetRows)), d;
  }
  var r = {
    /*::[*/
    44: ",",
    /*::[*/
    9: "	",
    /*::[*/
    59: ";",
    /*::[*/
    124: "|"
  }, n = {
    /*::[*/
    44: 3,
    /*::[*/
    9: 2,
    /*::[*/
    59: 1,
    /*::[*/
    124: 0
  };
  function t(o) {
    for (var h = {}, x = !1, d = 0, v = 0; d < o.length; ++d)
      (v = o.charCodeAt(d)) == 34 ? x = !x : !x && v in r && (h[v] = (h[v] || 0) + 1);
    v = [];
    for (d in h)
      Object.prototype.hasOwnProperty.call(h, d) && v.push([h[d], d]);
    if (!v.length) {
      h = n;
      for (d in h)
        Object.prototype.hasOwnProperty.call(h, d) && v.push([h[d], d]);
    }
    return v.sort(function(u, g) {
      return u[0] - g[0] || n[u[1]] - n[g[1]];
    }), r[v.pop()[1]] || 44;
  }
  function s(o, h) {
    var x = h || {}, d = "", v = x.dense ? [] : {}, u = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    o.slice(0, 4) == "sep=" ? o.charCodeAt(5) == 13 && o.charCodeAt(6) == 10 ? (d = o.charAt(4), o = o.slice(7)) : o.charCodeAt(5) == 13 || o.charCodeAt(5) == 10 ? (d = o.charAt(4), o = o.slice(6)) : d = t(o.slice(0, 1024)) : x && x.FS ? d = x.FS : d = t(o.slice(0, 1024));
    var g = 0, S = 0, y = 0, _ = 0, N = 0, b = d.charCodeAt(0), I = !1, F = 0, V = o.charCodeAt(0);
    o = o.replace(/\r\n/mg, `
`);
    var D = x.dateNF != null ? ac(x.dateNF) : null;
    function z() {
      var G = o.slice(_, N), P = {};
      if (G.charAt(0) == '"' && G.charAt(G.length - 1) == '"' && (G = G.slice(1, -1).replace(/""/g, '"')), G.length === 0)
        P.t = "z";
      else if (x.raw)
        P.t = "s", P.v = G;
      else if (G.trim().length === 0)
        P.t = "s", P.v = G;
      else if (G.charCodeAt(0) == 61)
        G.charCodeAt(1) == 34 && G.charCodeAt(G.length - 1) == 34 ? (P.t = "s", P.v = G.slice(2, -1).replace(/""/g, '"')) : I1(G) ? (P.t = "n", P.f = G.slice(1)) : (P.t = "s", P.v = G);
      else if (G == "TRUE")
        P.t = "b", P.v = !0;
      else if (G == "FALSE")
        P.t = "b", P.v = !1;
      else if (!isNaN(y = Ar(G)))
        P.t = "n", x.cellText !== !1 && (P.w = G), P.v = y;
      else if (!isNaN(_a(G).getDate()) || D && G.match(D)) {
        P.z = x.dateNF || de[14];
        var J = 0;
        D && G.match(D) && (G = tc(G, x.dateNF, G.match(D) || []), J = 1), x.cellDates ? (P.t = "d", P.v = Xe(G, J)) : (P.t = "n", P.v = cr(Xe(G, J))), x.cellText !== !1 && (P.w = mr(P.z, P.v instanceof Date ? cr(P.v) : P.v)), x.cellNF || delete P.z;
      } else
        P.t = "s", P.v = G;
      if (P.t == "z" || (x.dense ? (v[g] || (v[g] = []), v[g][S] = P) : v[ue({ c: S, r: g })] = P), _ = N + 1, V = o.charCodeAt(_), u.e.c < S && (u.e.c = S), u.e.r < g && (u.e.r = g), F == b)
        ++S;
      else if (S = 0, ++g, x.sheetRows && x.sheetRows <= g)
        return !0;
    }
    e:
      for (; N < o.length; ++N)
        switch (F = o.charCodeAt(N)) {
          case 34:
            V === 34 && (I = !I);
            break;
          case b:
          case 10:
          case 13:
            if (!I && z())
              break e;
            break;
        }
    return N - _ > 0 && z(), v["!ref"] = Ee(u), v;
  }
  function i(o, h) {
    return !(h && h.PRN) || h.FS || o.slice(0, 4) == "sep=" || o.indexOf("	") >= 0 || o.indexOf(",") >= 0 || o.indexOf(";") >= 0 ? s(o, h) : wa(a(o, h), h);
  }
  function c(o, h) {
    var x = "", d = h.type == "string" ? [0, 0, 0, 0] : E0(o, h);
    switch (h.type) {
      case "base64":
        x = ur(o);
        break;
      case "binary":
        x = o;
        break;
      case "buffer":
        h.codepage == 65001 ? x = o.toString("utf8") : h.codepage && typeof Xr < "u" ? x = Xr.utils.decode(h.codepage, o) : x = me && Buffer.isBuffer(o) ? o.toString("binary") : fa(o);
        break;
      case "array":
        x = sa(o);
        break;
      case "string":
        x = o;
        break;
      default:
        throw new Error("Unrecognized type " + h.type);
    }
    return d[0] == 239 && d[1] == 187 && d[2] == 191 ? x = Ae(x.slice(3)) : h.type != "string" && h.type != "buffer" && h.codepage == 65001 ? x = Ae(x) : h.type == "binary" && typeof Xr < "u" && h.codepage && (x = Xr.utils.decode(h.codepage, Xr.utils.encode(28591, x))), x.slice(0, 19) == "socialcalc:version:" ? zo.to_sheet(h.type == "string" ? x : Ae(x), h) : i(x, h);
  }
  function f(o, h) {
    return Zr(c(o, h), h);
  }
  function l(o) {
    for (var h = [], x = Re(o["!ref"]), d, v = Array.isArray(o), u = x.s.r; u <= x.e.r; ++u) {
      for (var g = [], S = x.s.c; S <= x.e.c; ++S) {
        var y = ue({ r: u, c: S });
        if (d = v ? (o[u] || [])[S] : o[y], !d || d.v == null) {
          g.push("          ");
          continue;
        }
        for (var _ = (d.w || (Ur(d), d.w) || "").slice(0, 10); _.length < 10; )
          _ += " ";
        g.push(_ + (S === 0 ? " " : ""));
      }
      h.push(g.join(""));
    }
    return h.join(`
`);
  }
  return {
    to_workbook: f,
    to_sheet: c,
    from_sheet: l
  };
}();
function jo(e, a) {
  var r = a || {}, n = !!r.WTF;
  r.WTF = !0;
  try {
    var t = Xo.to_workbook(e, r);
    return r.WTF = n, t;
  } catch (s) {
    if (r.WTF = n, !s.message.match(/SYLK bad record ID/) && n)
      throw s;
    return $a.to_workbook(e, a);
  }
}
var ba = /* @__PURE__ */ function() {
  function e(A, U, R) {
    if (A) {
      $e(A, A.l || 0);
      for (var O = R.Enum || le; A.l < A.length; ) {
        var j = A.read_shift(2), ee = O[j] || O[65535], ne = A.read_shift(2), q = A.l + ne, Y = ee.f && ee.f(A, ne, R);
        if (A.l = q, U(Y, ee, j))
          return;
      }
    }
  }
  function a(A, U) {
    switch (U.type) {
      case "base64":
        return r(kr(ur(A)), U);
      case "binary":
        return r(kr(A), U);
      case "buffer":
      case "array":
        return r(A, U);
    }
    throw "Unsupported type " + U.type;
  }
  function r(A, U) {
    if (!A)
      return A;
    var R = U || {}, O = R.dense ? [] : {}, j = "Sheet1", ee = "", ne = 0, q = {}, Y = [], Te = [], C = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, Ie = R.sheetRows || 0;
    if (A[2] == 0 && (A[3] == 8 || A[3] == 9) && A.length >= 16 && A[14] == 5 && A[15] === 108)
      throw new Error("Unsupported Works 3 for Mac file");
    if (A[2] == 2)
      R.Enum = le, e(A, function(ae, Ne, xr) {
        switch (xr) {
          case 0:
            R.vers = ae, ae >= 4096 && (R.qpro = !0);
            break;
          case 6:
            C = ae;
            break;
          case 204:
            ae && (ee = ae);
            break;
          case 222:
            ee = ae;
            break;
          case 15:
          case 51:
            R.qpro || (ae[1].v = ae[1].v.slice(1));
          case 13:
          case 14:
          case 16:
            xr == 14 && (ae[2] & 112) == 112 && (ae[2] & 15) > 1 && (ae[2] & 15) < 15 && (ae[1].z = R.dateNF || de[14], R.cellDates && (ae[1].t = "d", ae[1].v = wt(ae[1].v))), R.qpro && ae[3] > ne && (O["!ref"] = Ee(C), q[j] = O, Y.push(j), O = R.dense ? [] : {}, C = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, ne = ae[3], j = ee || "Sheet" + (ne + 1), ee = "");
            var Sr = R.dense ? (O[ae[0].r] || [])[ae[0].c] : O[ue(ae[0])];
            if (Sr) {
              Sr.t = ae[1].t, Sr.v = ae[1].v, ae[1].z != null && (Sr.z = ae[1].z), ae[1].f != null && (Sr.f = ae[1].f);
              break;
            }
            R.dense ? (O[ae[0].r] || (O[ae[0].r] = []), O[ae[0].r][ae[0].c] = ae[1]) : O[ue(ae[0])] = ae[1];
            break;
        }
      }, R);
    else if (A[2] == 26 || A[2] == 14)
      R.Enum = he, A[2] == 14 && (R.qpro = !0, A.l = 0), e(A, function(ae, Ne, xr) {
        switch (xr) {
          case 204:
            j = ae;
            break;
          case 22:
            ae[1].v = ae[1].v.slice(1);
          case 23:
          case 24:
          case 25:
          case 37:
          case 39:
          case 40:
            if (ae[3] > ne && (O["!ref"] = Ee(C), q[j] = O, Y.push(j), O = R.dense ? [] : {}, C = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, ne = ae[3], j = "Sheet" + (ne + 1)), Ie > 0 && ae[0].r >= Ie)
              break;
            R.dense ? (O[ae[0].r] || (O[ae[0].r] = []), O[ae[0].r][ae[0].c] = ae[1]) : O[ue(ae[0])] = ae[1], C.e.c < ae[0].c && (C.e.c = ae[0].c), C.e.r < ae[0].r && (C.e.r = ae[0].r);
            break;
          case 27:
            ae[14e3] && (Te[ae[14e3][0]] = ae[14e3][1]);
            break;
          case 1537:
            Te[ae[0]] = ae[1], ae[0] == ne && (j = ae[1]);
            break;
        }
      }, R);
    else
      throw new Error("Unrecognized LOTUS BOF " + A[2]);
    if (O["!ref"] = Ee(C), q[ee || j] = O, Y.push(ee || j), !Te.length)
      return { SheetNames: Y, Sheets: q };
    for (var we = {}, Fe = [], ge = 0; ge < Te.length; ++ge)
      q[Y[ge]] ? (Fe.push(Te[ge] || Y[ge]), we[Te[ge]] = q[Te[ge]] || q[Y[ge]]) : (Fe.push(Te[ge]), we[Te[ge]] = { "!ref": "A1" });
    return { SheetNames: Fe, Sheets: we };
  }
  function n(A, U) {
    var R = U || {};
    if (+R.codepage >= 0 && wr(+R.codepage), R.type == "string")
      throw new Error("Cannot write WK1 to JS string");
    var O = Ut(), j = Re(A["!ref"]), ee = Array.isArray(A), ne = [];
    Tr(O, 0, s(1030)), Tr(O, 6, f(j));
    for (var q = Math.min(j.e.r, 8191), Y = j.s.r; Y <= q; ++Y)
      for (var Te = je(Y), C = j.s.c; C <= j.e.c; ++C) {
        Y === j.s.r && (ne[C] = Ve(C));
        var Ie = ne[C] + Te, we = ee ? (A[Y] || [])[C] : A[Ie];
        if (!(!we || we.t == "z"))
          if (we.t == "n")
            (we.v | 0) == we.v && we.v >= -32768 && we.v <= 32767 ? Tr(O, 13, d(Y, C, we.v)) : Tr(O, 14, u(Y, C, we.v));
          else {
            var Fe = Ur(we);
            Tr(O, 15, h(Y, C, Fe.slice(0, 239)));
          }
      }
    return Tr(O, 1), O.end();
  }
  function t(A, U) {
    var R = U || {};
    if (+R.codepage >= 0 && wr(+R.codepage), R.type == "string")
      throw new Error("Cannot write WK3 to JS string");
    var O = Ut();
    Tr(O, 0, i(A));
    for (var j = 0, ee = 0; j < A.SheetNames.length; ++j)
      (A.Sheets[A.SheetNames[j]] || {})["!ref"] && Tr(O, 27, W(A.SheetNames[j], ee++));
    var ne = 0;
    for (j = 0; j < A.SheetNames.length; ++j) {
      var q = A.Sheets[A.SheetNames[j]];
      if (!(!q || !q["!ref"])) {
        for (var Y = Re(q["!ref"]), Te = Array.isArray(q), C = [], Ie = Math.min(Y.e.r, 8191), we = Y.s.r; we <= Ie; ++we)
          for (var Fe = je(we), ge = Y.s.c; ge <= Y.e.c; ++ge) {
            we === Y.s.r && (C[ge] = Ve(ge));
            var ae = C[ge] + Fe, Ne = Te ? (q[we] || [])[ge] : q[ae];
            if (!(!Ne || Ne.t == "z"))
              if (Ne.t == "n")
                Tr(O, 23, z(we, ge, ne, Ne.v));
              else {
                var xr = Ur(Ne);
                Tr(O, 22, F(we, ge, ne, xr.slice(0, 239)));
              }
          }
        ++ne;
      }
    }
    return Tr(O, 1), O.end();
  }
  function s(A) {
    var U = He(2);
    return U.write_shift(2, A), U;
  }
  function i(A) {
    var U = He(26);
    U.write_shift(2, 4096), U.write_shift(2, 4), U.write_shift(4, 0);
    for (var R = 0, O = 0, j = 0, ee = 0; ee < A.SheetNames.length; ++ee) {
      var ne = A.SheetNames[ee], q = A.Sheets[ne];
      if (!(!q || !q["!ref"])) {
        ++j;
        var Y = ka(q["!ref"]);
        R < Y.e.r && (R = Y.e.r), O < Y.e.c && (O = Y.e.c);
      }
    }
    return R > 8191 && (R = 8191), U.write_shift(2, R), U.write_shift(1, j), U.write_shift(1, O), U.write_shift(2, 0), U.write_shift(2, 0), U.write_shift(1, 1), U.write_shift(1, 2), U.write_shift(4, 0), U.write_shift(4, 0), U;
  }
  function c(A, U, R) {
    var O = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
    return U == 8 && R.qpro ? (O.s.c = A.read_shift(1), A.l++, O.s.r = A.read_shift(2), O.e.c = A.read_shift(1), A.l++, O.e.r = A.read_shift(2), O) : (O.s.c = A.read_shift(2), O.s.r = A.read_shift(2), U == 12 && R.qpro && (A.l += 2), O.e.c = A.read_shift(2), O.e.r = A.read_shift(2), U == 12 && R.qpro && (A.l += 2), O.s.c == 65535 && (O.s.c = O.e.c = O.s.r = O.e.r = 0), O);
  }
  function f(A) {
    var U = He(8);
    return U.write_shift(2, A.s.c), U.write_shift(2, A.s.r), U.write_shift(2, A.e.c), U.write_shift(2, A.e.r), U;
  }
  function l(A, U, R) {
    var O = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0, 0];
    return R.qpro && R.vers != 20768 ? (O[0].c = A.read_shift(1), O[3] = A.read_shift(1), O[0].r = A.read_shift(2), A.l += 2) : (O[2] = A.read_shift(1), O[0].c = A.read_shift(2), O[0].r = A.read_shift(2)), O;
  }
  function o(A, U, R) {
    var O = A.l + U, j = l(A, U, R);
    if (j[1].t = "s", R.vers == 20768) {
      A.l++;
      var ee = A.read_shift(1);
      return j[1].v = A.read_shift(ee, "utf8"), j;
    }
    return R.qpro && A.l++, j[1].v = A.read_shift(O - A.l, "cstr"), j;
  }
  function h(A, U, R) {
    var O = He(7 + R.length);
    O.write_shift(1, 255), O.write_shift(2, U), O.write_shift(2, A), O.write_shift(1, 39);
    for (var j = 0; j < O.length; ++j) {
      var ee = R.charCodeAt(j);
      O.write_shift(1, ee >= 128 ? 95 : ee);
    }
    return O.write_shift(1, 0), O;
  }
  function x(A, U, R) {
    var O = l(A, U, R);
    return O[1].v = A.read_shift(2, "i"), O;
  }
  function d(A, U, R) {
    var O = He(7);
    return O.write_shift(1, 255), O.write_shift(2, U), O.write_shift(2, A), O.write_shift(2, R, "i"), O;
  }
  function v(A, U, R) {
    var O = l(A, U, R);
    return O[1].v = A.read_shift(8, "f"), O;
  }
  function u(A, U, R) {
    var O = He(13);
    return O.write_shift(1, 255), O.write_shift(2, U), O.write_shift(2, A), O.write_shift(8, R, "f"), O;
  }
  function g(A, U, R) {
    var O = A.l + U, j = l(A, U, R);
    if (j[1].v = A.read_shift(8, "f"), R.qpro)
      A.l = O;
    else {
      var ee = A.read_shift(2);
      N(A.slice(A.l, A.l + ee), j), A.l += ee;
    }
    return j;
  }
  function S(A, U, R) {
    var O = U & 32768;
    return U &= -32769, U = (O ? A : 0) + (U >= 8192 ? U - 16384 : U), (O ? "" : "$") + (R ? Ve(U) : je(U));
  }
  var y = {
    51: ["FALSE", 0],
    52: ["TRUE", 0],
    70: ["LEN", 1],
    80: ["SUM", 69],
    81: ["AVERAGEA", 69],
    82: ["COUNTA", 69],
    83: ["MINA", 69],
    84: ["MAXA", 69],
    111: ["T", 1]
  }, _ = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "",
    "+",
    "-",
    "*",
    "/",
    "^",
    "=",
    "<>",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "<=",
    ">=",
    "<",
    ">",
    "",
    "",
    "",
    "",
    // eslint-disable-line no-mixed-spaces-and-tabs
    "&",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
    // eslint-disable-line no-mixed-spaces-and-tabs
  ];
  function N(A, U) {
    $e(A, 0);
    for (var R = [], O = 0, j = "", ee = "", ne = "", q = ""; A.l < A.length; ) {
      var Y = A[A.l++];
      switch (Y) {
        case 0:
          R.push(A.read_shift(8, "f"));
          break;
        case 1:
          ee = S(U[0].c, A.read_shift(2), !0), j = S(U[0].r, A.read_shift(2), !1), R.push(ee + j);
          break;
        case 2:
          {
            var Te = S(U[0].c, A.read_shift(2), !0), C = S(U[0].r, A.read_shift(2), !1);
            ee = S(U[0].c, A.read_shift(2), !0), j = S(U[0].r, A.read_shift(2), !1), R.push(Te + C + ":" + ee + j);
          }
          break;
        case 3:
          if (A.l < A.length) {
            console.error("WK1 premature formula end");
            return;
          }
          break;
        case 4:
          R.push("(" + R.pop() + ")");
          break;
        case 5:
          R.push(A.read_shift(2));
          break;
        case 6:
          {
            for (var Ie = ""; Y = A[A.l++]; )
              Ie += String.fromCharCode(Y);
            R.push('"' + Ie.replace(/"/g, '""') + '"');
          }
          break;
        case 8:
          R.push("-" + R.pop());
          break;
        case 23:
          R.push("+" + R.pop());
          break;
        case 22:
          R.push("NOT(" + R.pop() + ")");
          break;
        case 20:
        case 21:
          q = R.pop(), ne = R.pop(), R.push(["AND", "OR"][Y - 20] + "(" + ne + "," + q + ")");
          break;
        default:
          if (Y < 32 && _[Y])
            q = R.pop(), ne = R.pop(), R.push(ne + _[Y] + q);
          else if (y[Y]) {
            if (O = y[Y][1], O == 69 && (O = A[A.l++]), O > R.length) {
              console.error("WK1 bad formula parse 0x" + Y.toString(16) + ":|" + R.join("|") + "|");
              return;
            }
            var we = R.slice(-O);
            R.length -= O, R.push(y[Y][0] + "(" + we.join(",") + ")");
          } else
            return Y <= 7 ? console.error("WK1 invalid opcode " + Y.toString(16)) : Y <= 24 ? console.error("WK1 unsupported op " + Y.toString(16)) : Y <= 30 ? console.error("WK1 invalid opcode " + Y.toString(16)) : Y <= 115 ? console.error("WK1 unsupported function opcode " + Y.toString(16)) : console.error("WK1 unrecognized opcode " + Y.toString(16));
      }
    }
    R.length == 1 ? U[1].f = "" + R[0] : console.error("WK1 bad formula parse |" + R.join("|") + "|");
  }
  function b(A) {
    var U = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
    return U[0].r = A.read_shift(2), U[3] = A[A.l++], U[0].c = A[A.l++], U;
  }
  function I(A, U) {
    var R = b(A);
    return R[1].t = "s", R[1].v = A.read_shift(U - 4, "cstr"), R;
  }
  function F(A, U, R, O) {
    var j = He(6 + O.length);
    j.write_shift(2, A), j.write_shift(1, R), j.write_shift(1, U), j.write_shift(1, 39);
    for (var ee = 0; ee < O.length; ++ee) {
      var ne = O.charCodeAt(ee);
      j.write_shift(1, ne >= 128 ? 95 : ne);
    }
    return j.write_shift(1, 0), j;
  }
  function V(A, U) {
    var R = b(A);
    R[1].v = A.read_shift(2);
    var O = R[1].v >> 1;
    if (R[1].v & 1)
      switch (O & 7) {
        case 0:
          O = (O >> 3) * 5e3;
          break;
        case 1:
          O = (O >> 3) * 500;
          break;
        case 2:
          O = (O >> 3) / 20;
          break;
        case 3:
          O = (O >> 3) / 200;
          break;
        case 4:
          O = (O >> 3) / 2e3;
          break;
        case 5:
          O = (O >> 3) / 2e4;
          break;
        case 6:
          O = (O >> 3) / 16;
          break;
        case 7:
          O = (O >> 3) / 64;
          break;
      }
    return R[1].v = O, R;
  }
  function D(A, U) {
    var R = b(A), O = A.read_shift(4), j = A.read_shift(4), ee = A.read_shift(2);
    if (ee == 65535)
      return O === 0 && j === 3221225472 ? (R[1].t = "e", R[1].v = 15) : O === 0 && j === 3489660928 ? (R[1].t = "e", R[1].v = 42) : R[1].v = 0, R;
    var ne = ee & 32768;
    return ee = (ee & 32767) - 16446, R[1].v = (1 - ne * 2) * (j * Math.pow(2, ee + 32) + O * Math.pow(2, ee)), R;
  }
  function z(A, U, R, O) {
    var j = He(14);
    if (j.write_shift(2, A), j.write_shift(1, R), j.write_shift(1, U), O == 0)
      return j.write_shift(4, 0), j.write_shift(4, 0), j.write_shift(2, 65535), j;
    var ee = 0, ne = 0, q = 0, Y = 0;
    return O < 0 && (ee = 1, O = -O), ne = Math.log2(O) | 0, O /= Math.pow(2, ne - 31), Y = O >>> 0, Y & 2147483648 || (O /= 2, ++ne, Y = O >>> 0), O -= Y, Y |= 2147483648, Y >>>= 0, O *= Math.pow(2, 32), q = O >>> 0, j.write_shift(4, q), j.write_shift(4, Y), ne += 16383 + (ee ? 32768 : 0), j.write_shift(2, ne), j;
  }
  function G(A, U) {
    var R = D(A);
    return A.l += U - 14, R;
  }
  function P(A, U) {
    var R = b(A), O = A.read_shift(4);
    return R[1].v = O >> 6, R;
  }
  function J(A, U) {
    var R = b(A), O = A.read_shift(8, "f");
    return R[1].v = O, R;
  }
  function fe(A, U) {
    var R = J(A);
    return A.l += U - 10, R;
  }
  function re(A, U) {
    return A[A.l + U - 1] == 0 ? A.read_shift(U, "cstr") : "";
  }
  function ce(A, U) {
    var R = A[A.l++];
    R > U - 1 && (R = U - 1);
    for (var O = ""; O.length < R; )
      O += String.fromCharCode(A[A.l++]);
    return O;
  }
  function ie(A, U, R) {
    if (!(!R.qpro || U < 21)) {
      var O = A.read_shift(1);
      A.l += 17, A.l += 1, A.l += 2;
      var j = A.read_shift(U - 21, "cstr");
      return [O, j];
    }
  }
  function Se(A, U) {
    for (var R = {}, O = A.l + U; A.l < O; ) {
      var j = A.read_shift(2);
      if (j == 14e3) {
        for (R[j] = [0, ""], R[j][0] = A.read_shift(2); A[A.l]; )
          R[j][1] += String.fromCharCode(A[A.l]), A.l++;
        A.l++;
      }
    }
    return R;
  }
  function W(A, U) {
    var R = He(5 + A.length);
    R.write_shift(2, 14e3), R.write_shift(2, U);
    for (var O = 0; O < A.length; ++O) {
      var j = A.charCodeAt(O);
      R[R.l++] = j > 127 ? 95 : j;
    }
    return R[R.l++] = 0, R;
  }
  var le = {
    /*::[*/
    0: { n: "BOF", f: be },
    /*::[*/
    1: { n: "EOF" },
    /*::[*/
    2: { n: "CALCMODE" },
    /*::[*/
    3: { n: "CALCORDER" },
    /*::[*/
    4: { n: "SPLIT" },
    /*::[*/
    5: { n: "SYNC" },
    /*::[*/
    6: { n: "RANGE", f: c },
    /*::[*/
    7: { n: "WINDOW1" },
    /*::[*/
    8: { n: "COLW1" },
    /*::[*/
    9: { n: "WINTWO" },
    /*::[*/
    10: { n: "COLW2" },
    /*::[*/
    11: { n: "NAME" },
    /*::[*/
    12: { n: "BLANK" },
    /*::[*/
    13: { n: "INTEGER", f: x },
    /*::[*/
    14: { n: "NUMBER", f: v },
    /*::[*/
    15: { n: "LABEL", f: o },
    /*::[*/
    16: { n: "FORMULA", f: g },
    /*::[*/
    24: { n: "TABLE" },
    /*::[*/
    25: { n: "ORANGE" },
    /*::[*/
    26: { n: "PRANGE" },
    /*::[*/
    27: { n: "SRANGE" },
    /*::[*/
    28: { n: "FRANGE" },
    /*::[*/
    29: { n: "KRANGE1" },
    /*::[*/
    32: { n: "HRANGE" },
    /*::[*/
    35: { n: "KRANGE2" },
    /*::[*/
    36: { n: "PROTEC" },
    /*::[*/
    37: { n: "FOOTER" },
    /*::[*/
    38: { n: "HEADER" },
    /*::[*/
    39: { n: "SETUP" },
    /*::[*/
    40: { n: "MARGINS" },
    /*::[*/
    41: { n: "LABELFMT" },
    /*::[*/
    42: { n: "TITLES" },
    /*::[*/
    43: { n: "SHEETJS" },
    /*::[*/
    45: { n: "GRAPH" },
    /*::[*/
    46: { n: "NGRAPH" },
    /*::[*/
    47: { n: "CALCCOUNT" },
    /*::[*/
    48: { n: "UNFORMATTED" },
    /*::[*/
    49: { n: "CURSORW12" },
    /*::[*/
    50: { n: "WINDOW" },
    /*::[*/
    51: { n: "STRING", f: o },
    /*::[*/
    55: { n: "PASSWORD" },
    /*::[*/
    56: { n: "LOCKED" },
    /*::[*/
    60: { n: "QUERY" },
    /*::[*/
    61: { n: "QUERYNAME" },
    /*::[*/
    62: { n: "PRINT" },
    /*::[*/
    63: { n: "PRINTNAME" },
    /*::[*/
    64: { n: "GRAPH2" },
    /*::[*/
    65: { n: "GRAPHNAME" },
    /*::[*/
    66: { n: "ZOOM" },
    /*::[*/
    67: { n: "SYMSPLIT" },
    /*::[*/
    68: { n: "NSROWS" },
    /*::[*/
    69: { n: "NSCOLS" },
    /*::[*/
    70: { n: "RULER" },
    /*::[*/
    71: { n: "NNAME" },
    /*::[*/
    72: { n: "ACOMM" },
    /*::[*/
    73: { n: "AMACRO" },
    /*::[*/
    74: { n: "PARSE" },
    /*::[*/
    102: { n: "PRANGES??" },
    /*::[*/
    103: { n: "RRANGES??" },
    /*::[*/
    104: { n: "FNAME??" },
    /*::[*/
    105: { n: "MRANGES??" },
    /*::[*/
    204: { n: "SHEETNAMECS", f: re },
    /*::[*/
    222: { n: "SHEETNAMELP", f: ce },
    /*::[*/
    65535: { n: "" }
  }, he = {
    /*::[*/
    0: { n: "BOF" },
    /*::[*/
    1: { n: "EOF" },
    /*::[*/
    2: { n: "PASSWORD" },
    /*::[*/
    3: { n: "CALCSET" },
    /*::[*/
    4: { n: "WINDOWSET" },
    /*::[*/
    5: { n: "SHEETCELLPTR" },
    /*::[*/
    6: { n: "SHEETLAYOUT" },
    /*::[*/
    7: { n: "COLUMNWIDTH" },
    /*::[*/
    8: { n: "HIDDENCOLUMN" },
    /*::[*/
    9: { n: "USERRANGE" },
    /*::[*/
    10: { n: "SYSTEMRANGE" },
    /*::[*/
    11: { n: "ZEROFORCE" },
    /*::[*/
    12: { n: "SORTKEYDIR" },
    /*::[*/
    13: { n: "FILESEAL" },
    /*::[*/
    14: { n: "DATAFILLNUMS" },
    /*::[*/
    15: { n: "PRINTMAIN" },
    /*::[*/
    16: { n: "PRINTSTRING" },
    /*::[*/
    17: { n: "GRAPHMAIN" },
    /*::[*/
    18: { n: "GRAPHSTRING" },
    /*::[*/
    19: { n: "??" },
    /*::[*/
    20: { n: "ERRCELL" },
    /*::[*/
    21: { n: "NACELL" },
    /*::[*/
    22: { n: "LABEL16", f: I },
    /*::[*/
    23: { n: "NUMBER17", f: D },
    /*::[*/
    24: { n: "NUMBER18", f: V },
    /*::[*/
    25: { n: "FORMULA19", f: G },
    /*::[*/
    26: { n: "FORMULA1A" },
    /*::[*/
    27: { n: "XFORMAT", f: Se },
    /*::[*/
    28: { n: "DTLABELMISC" },
    /*::[*/
    29: { n: "DTLABELCELL" },
    /*::[*/
    30: { n: "GRAPHWINDOW" },
    /*::[*/
    31: { n: "CPA" },
    /*::[*/
    32: { n: "LPLAUTO" },
    /*::[*/
    33: { n: "QUERY" },
    /*::[*/
    34: { n: "HIDDENSHEET" },
    /*::[*/
    35: { n: "??" },
    /*::[*/
    37: { n: "NUMBER25", f: P },
    /*::[*/
    38: { n: "??" },
    /*::[*/
    39: { n: "NUMBER27", f: J },
    /*::[*/
    40: { n: "FORMULA28", f: fe },
    /*::[*/
    142: { n: "??" },
    /*::[*/
    147: { n: "??" },
    /*::[*/
    150: { n: "??" },
    /*::[*/
    151: { n: "??" },
    /*::[*/
    152: { n: "??" },
    /*::[*/
    153: { n: "??" },
    /*::[*/
    154: { n: "??" },
    /*::[*/
    155: { n: "??" },
    /*::[*/
    156: { n: "??" },
    /*::[*/
    163: { n: "??" },
    /*::[*/
    174: { n: "??" },
    /*::[*/
    175: { n: "??" },
    /*::[*/
    176: { n: "??" },
    /*::[*/
    177: { n: "??" },
    /*::[*/
    184: { n: "??" },
    /*::[*/
    185: { n: "??" },
    /*::[*/
    186: { n: "??" },
    /*::[*/
    187: { n: "??" },
    /*::[*/
    188: { n: "??" },
    /*::[*/
    195: { n: "??" },
    /*::[*/
    201: { n: "??" },
    /*::[*/
    204: { n: "SHEETNAMECS", f: re },
    /*::[*/
    205: { n: "??" },
    /*::[*/
    206: { n: "??" },
    /*::[*/
    207: { n: "??" },
    /*::[*/
    208: { n: "??" },
    /*::[*/
    256: { n: "??" },
    /*::[*/
    259: { n: "??" },
    /*::[*/
    260: { n: "??" },
    /*::[*/
    261: { n: "??" },
    /*::[*/
    262: { n: "??" },
    /*::[*/
    263: { n: "??" },
    /*::[*/
    265: { n: "??" },
    /*::[*/
    266: { n: "??" },
    /*::[*/
    267: { n: "??" },
    /*::[*/
    268: { n: "??" },
    /*::[*/
    270: { n: "??" },
    /*::[*/
    271: { n: "??" },
    /*::[*/
    384: { n: "??" },
    /*::[*/
    389: { n: "??" },
    /*::[*/
    390: { n: "??" },
    /*::[*/
    393: { n: "??" },
    /*::[*/
    396: { n: "??" },
    /*::[*/
    512: { n: "??" },
    /*::[*/
    514: { n: "??" },
    /*::[*/
    513: { n: "??" },
    /*::[*/
    516: { n: "??" },
    /*::[*/
    517: { n: "??" },
    /*::[*/
    640: { n: "??" },
    /*::[*/
    641: { n: "??" },
    /*::[*/
    642: { n: "??" },
    /*::[*/
    643: { n: "??" },
    /*::[*/
    644: { n: "??" },
    /*::[*/
    645: { n: "??" },
    /*::[*/
    646: { n: "??" },
    /*::[*/
    647: { n: "??" },
    /*::[*/
    648: { n: "??" },
    /*::[*/
    658: { n: "??" },
    /*::[*/
    659: { n: "??" },
    /*::[*/
    660: { n: "??" },
    /*::[*/
    661: { n: "??" },
    /*::[*/
    662: { n: "??" },
    /*::[*/
    665: { n: "??" },
    /*::[*/
    666: { n: "??" },
    /*::[*/
    768: { n: "??" },
    /*::[*/
    772: { n: "??" },
    /*::[*/
    1537: { n: "SHEETINFOQP", f: ie },
    /*::[*/
    1600: { n: "??" },
    /*::[*/
    1602: { n: "??" },
    /*::[*/
    1793: { n: "??" },
    /*::[*/
    1794: { n: "??" },
    /*::[*/
    1795: { n: "??" },
    /*::[*/
    1796: { n: "??" },
    /*::[*/
    1920: { n: "??" },
    /*::[*/
    2048: { n: "??" },
    /*::[*/
    2049: { n: "??" },
    /*::[*/
    2052: { n: "??" },
    /*::[*/
    2688: { n: "??" },
    /*::[*/
    10998: { n: "??" },
    /*::[*/
    12849: { n: "??" },
    /*::[*/
    28233: { n: "??" },
    /*::[*/
    28484: { n: "??" },
    /*::[*/
    65535: { n: "" }
  };
  return {
    sheet_to_wk1: n,
    book_to_wk3: t,
    to_workbook: a
  };
}();
function Ko(e) {
  var a = {}, r = e.match(rr), n = 0, t = !1;
  if (r)
    for (; n != r.length; ++n) {
      var s = oe(r[n]);
      switch (s[0].replace(/\w*:/g, "")) {
        case "<condense":
          break;
        case "<extend":
          break;
        case "<shadow":
          if (!s.val)
            break;
        case "<shadow>":
        case "<shadow/>":
          a.shadow = 1;
          break;
        case "</shadow>":
          break;
        case "<charset":
          if (s.val == "1")
            break;
          a.cp = Jt[parseInt(s.val, 10)];
          break;
        case "<outline":
          if (!s.val)
            break;
        case "<outline>":
        case "<outline/>":
          a.outline = 1;
          break;
        case "</outline>":
          break;
        case "<rFont":
          a.name = s.val;
          break;
        case "<sz":
          a.sz = s.val;
          break;
        case "<strike":
          if (!s.val)
            break;
        case "<strike>":
        case "<strike/>":
          a.strike = 1;
          break;
        case "</strike>":
          break;
        case "<u":
          if (!s.val)
            break;
          switch (s.val) {
            case "double":
              a.uval = "double";
              break;
            case "singleAccounting":
              a.uval = "single-accounting";
              break;
            case "doubleAccounting":
              a.uval = "double-accounting";
              break;
          }
        case "<u>":
        case "<u/>":
          a.u = 1;
          break;
        case "</u>":
          break;
        case "<b":
          if (s.val == "0")
            break;
        case "<b>":
        case "<b/>":
          a.b = 1;
          break;
        case "</b>":
          break;
        case "<i":
          if (s.val == "0")
            break;
        case "<i>":
        case "<i/>":
          a.i = 1;
          break;
        case "</i>":
          break;
        case "<color":
          s.rgb && (a.color = s.rgb.slice(2, 8));
          break;
        case "<color>":
        case "<color/>":
        case "</color>":
          break;
        case "<family":
          a.family = s.val;
          break;
        case "<family>":
        case "<family/>":
        case "</family>":
          break;
        case "<vertAlign":
          a.valign = s.val;
          break;
        case "<vertAlign>":
        case "<vertAlign/>":
        case "</vertAlign>":
          break;
        case "<scheme":
          break;
        case "<scheme>":
        case "<scheme/>":
        case "</scheme>":
          break;
        case "<extLst":
        case "<extLst>":
        case "</extLst>":
          break;
        case "<ext":
          t = !0;
          break;
        case "</ext>":
          t = !1;
          break;
        default:
          if (s[0].charCodeAt(1) !== 47 && !t)
            throw new Error("Unrecognized rich format " + s[0]);
      }
    }
  return a;
}
var Yo = /* @__PURE__ */ function() {
  var e = Ga("t"), a = Ga("rPr");
  function r(s) {
    var i = s.match(e);
    if (!i)
      return { t: "s", v: "" };
    var c = { t: "s", v: ke(i[1]) }, f = s.match(a);
    return f && (c.s = Ko(f[1])), c;
  }
  var n = /<(?:\w+:)?r>/g, t = /<\/(?:\w+:)?r>/;
  return function(i) {
    return i.replace(n, "").split(t).map(r).filter(function(c) {
      return c.v;
    });
  };
}(), Jo = /* @__PURE__ */ function() {
  var a = /(\r\n|\n)/g;
  function r(t, s, i) {
    var c = [];
    t.u && c.push("text-decoration: underline;"), t.uval && c.push("text-underline-style:" + t.uval + ";"), t.sz && c.push("font-size:" + t.sz + "pt;"), t.outline && c.push("text-effect: outline;"), t.shadow && c.push("text-shadow: auto;"), s.push('<span style="' + c.join("") + '">'), t.b && (s.push("<b>"), i.push("</b>")), t.i && (s.push("<i>"), i.push("</i>")), t.strike && (s.push("<s>"), i.push("</s>"));
    var f = t.valign || "";
    return f == "superscript" || f == "super" ? f = "sup" : f == "subscript" && (f = "sub"), f != "" && (s.push("<" + f + ">"), i.push("</" + f + ">")), i.push("</span>"), t;
  }
  function n(t) {
    var s = [[], t.v, []];
    return t.v ? (t.s && r(t.s, s[0], s[2]), s[0].join("") + s[1].replace(a, "<br/>") + s[2].join("")) : "";
  }
  return function(s) {
    return s.map(n).join("");
  };
}(), Zo = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g, qo = /<(?:\w+:)?r>/, Qo = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;
function x0(e, a) {
  var r = a ? a.cellHTML : !0, n = {};
  return e ? (e.match(/^\s*<(?:\w+:)?t[^>]*>/) ? (n.t = ke(Ae(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || "")), n.r = Ae(e), r && (n.h = t0(n.t))) : (
    /*y = */
    e.match(qo) && (n.r = Ae(e), n.t = ke(Ae((e.replace(Qo, "").match(Zo) || []).join("").replace(rr, ""))), r && (n.h = Jo(Yo(n.r))))
  ), n) : { t: "" };
}
var el = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/, rl = /<(?:\w+:)?(?:si|sstItem)>/g, al = /<\/(?:\w+:)?(?:si|sstItem)>/;
function tl(e, a) {
  var r = [], n = "";
  if (!e)
    return r;
  var t = e.match(el);
  if (t) {
    n = t[2].replace(rl, "").split(al);
    for (var s = 0; s != n.length; ++s) {
      var i = x0(n[s].trim(), a);
      i != null && (r[r.length] = i);
    }
    t = oe(t[1]), r.Count = t.count, r.Unique = t.uniqueCount;
  }
  return r;
}
function nl(e) {
  return [e.read_shift(4), e.read_shift(4)];
}
function sl(e, a) {
  var r = [], n = !1;
  return Hr(e, function(s, i, c) {
    switch (c) {
      case 159:
        r.Count = s[0], r.Unique = s[1];
        break;
      case 19:
        r.push(s);
        break;
      case 160:
        return !0;
      case 35:
        n = !0;
        break;
      case 36:
        n = !1;
        break;
      default:
        if (i.T, !n || a.WTF)
          throw new Error("Unexpected record 0x" + c.toString(16));
    }
  }), r;
}
function Ps(e) {
  for (var a = [], r = e.split(""), n = 0; n < r.length; ++n)
    a[n] = r[n].charCodeAt(0);
  return a;
}
function br(e, a) {
  var r = {};
  return r.Major = e.read_shift(2), r.Minor = e.read_shift(2), a >= 4 && (e.l += a - 4), r;
}
function il(e) {
  var a = {};
  return a.id = e.read_shift(0, "lpp4"), a.R = br(e, 4), a.U = br(e, 4), a.W = br(e, 4), a;
}
function cl(e) {
  for (var a = e.read_shift(4), r = e.l + a - 4, n = {}, t = e.read_shift(4), s = []; t-- > 0; )
    s.push({ t: e.read_shift(4), v: e.read_shift(0, "lpp4") });
  if (n.name = e.read_shift(0, "lpp4"), n.comps = s, e.l != r)
    throw new Error("Bad DataSpaceMapEntry: " + e.l + " != " + r);
  return n;
}
function fl(e) {
  var a = [];
  e.l += 4;
  for (var r = e.read_shift(4); r-- > 0; )
    a.push(cl(e));
  return a;
}
function ol(e) {
  var a = [];
  e.l += 4;
  for (var r = e.read_shift(4); r-- > 0; )
    a.push(e.read_shift(0, "lpp4"));
  return a;
}
function ll(e) {
  var a = {};
  return e.read_shift(4), e.l += 4, a.id = e.read_shift(0, "lpp4"), a.name = e.read_shift(0, "lpp4"), a.R = br(e, 4), a.U = br(e, 4), a.W = br(e, 4), a;
}
function hl(e) {
  var a = ll(e);
  if (a.ename = e.read_shift(0, "8lpp4"), a.blksz = e.read_shift(4), a.cmode = e.read_shift(4), e.read_shift(4) != 4)
    throw new Error("Bad !Primary record");
  return a;
}
function Ls(e, a) {
  var r = e.l + a, n = {};
  n.Flags = e.read_shift(4) & 63, e.l += 4, n.AlgID = e.read_shift(4);
  var t = !1;
  switch (n.AlgID) {
    case 26126:
    case 26127:
    case 26128:
      t = n.Flags == 36;
      break;
    case 26625:
      t = n.Flags == 4;
      break;
    case 0:
      t = n.Flags == 16 || n.Flags == 4 || n.Flags == 36;
      break;
    default:
      throw "Unrecognized encryption algorithm: " + n.AlgID;
  }
  if (!t)
    throw new Error("Encryption Flags/AlgID mismatch");
  return n.AlgIDHash = e.read_shift(4), n.KeySize = e.read_shift(4), n.ProviderType = e.read_shift(4), e.l += 8, n.CSPName = e.read_shift(r - e.l >> 1, "utf16le"), e.l = r, n;
}
function Ms(e, a) {
  var r = {}, n = e.l + a;
  return e.l += 4, r.Salt = e.slice(e.l, e.l + 16), e.l += 16, r.Verifier = e.slice(e.l, e.l + 16), e.l += 16, e.read_shift(4), r.VerifierHash = e.slice(e.l, n), e.l = n, r;
}
function ul(e) {
  var a = br(e);
  switch (a.Minor) {
    case 2:
      return [a.Minor, xl(e)];
    case 3:
      return [a.Minor, dl()];
    case 4:
      return [a.Minor, vl(e)];
  }
  throw new Error("ECMA-376 Encrypted file unrecognized Version: " + a.Minor);
}
function xl(e) {
  var a = e.read_shift(4);
  if ((a & 63) != 36)
    throw new Error("EncryptionInfo mismatch");
  var r = e.read_shift(4), n = Ls(e, r), t = Ms(e, e.length - e.l);
  return { t: "Std", h: n, v: t };
}
function dl() {
  throw new Error("File is password-protected: ECMA-376 Extensible");
}
function vl(e) {
  var a = ["saltSize", "blockSize", "keyBits", "hashSize", "cipherAlgorithm", "cipherChaining", "hashAlgorithm", "saltValue"];
  e.l += 4;
  var r = e.read_shift(e.length - e.l, "utf8"), n = {};
  return r.replace(rr, function(s) {
    var i = oe(s);
    switch (Rr(i[0])) {
      case "<?xml":
        break;
      case "<encryption":
      case "</encryption>":
        break;
      case "<keyData":
        a.forEach(function(c) {
          n[c] = i[c];
        });
        break;
      case "<dataIntegrity":
        n.encryptedHmacKey = i.encryptedHmacKey, n.encryptedHmacValue = i.encryptedHmacValue;
        break;
      case "<keyEncryptors>":
      case "<keyEncryptors":
        n.encs = [];
        break;
      case "</keyEncryptors>":
        break;
      case "<keyEncryptor":
        n.uri = i.uri;
        break;
      case "</keyEncryptor>":
        break;
      case "<encryptedKey":
        n.encs.push(i);
        break;
      default:
        throw i[0];
    }
  }), n;
}
function pl(e, a) {
  var r = {}, n = r.EncryptionVersionInfo = br(e, 4);
  if (a -= 4, n.Minor != 2)
    throw new Error("unrecognized minor version code: " + n.Minor);
  if (n.Major > 4 || n.Major < 2)
    throw new Error("unrecognized major version code: " + n.Major);
  r.Flags = e.read_shift(4), a -= 4;
  var t = e.read_shift(4);
  return a -= 4, r.EncryptionHeader = Ls(e, t), a -= t, r.EncryptionVerifier = Ms(e, a), r;
}
function gl(e) {
  var a = {}, r = a.EncryptionVersionInfo = br(e, 4);
  if (r.Major != 1 || r.Minor != 1)
    throw "unrecognized version code " + r.Major + " : " + r.Minor;
  return a.Salt = e.read_shift(16), a.EncryptedVerifier = e.read_shift(16), a.EncryptedVerifierHash = e.read_shift(16), a;
}
function ml(e) {
  var a = 0, r, n = Ps(e), t = n.length + 1, s, i, c, f, l;
  for (r = Yr(t), r[0] = n.length, s = 1; s != t; ++s)
    r[s] = n[s - 1];
  for (s = t - 1; s >= 0; --s)
    i = r[s], c = a & 16384 ? 1 : 0, f = a << 1 & 32767, l = c | f, a = l ^ i;
  return a ^ 52811;
}
var Bs = /* @__PURE__ */ function() {
  var e = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0], a = [57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287, 34041, 10252, 43370, 20163], r = [44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933, 60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248, 885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614, 21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210, 60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898, 15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812, 17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557, 1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128, 28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883, 1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628], n = function(i) {
    return (i / 2 | i * 128) & 255;
  }, t = function(i, c) {
    return n(i ^ c);
  }, s = function(i) {
    for (var c = a[i.length - 1], f = 104, l = i.length - 1; l >= 0; --l)
      for (var o = i[l], h = 0; h != 7; ++h)
        o & 64 && (c ^= r[f]), o *= 2, --f;
    return c;
  };
  return function(i) {
    for (var c = Ps(i), f = s(c), l = c.length, o = Yr(16), h = 0; h != 16; ++h)
      o[h] = 0;
    var x, d, v;
    for ((l & 1) === 1 && (x = f >> 8, o[l] = t(e[0], x), --l, x = f & 255, d = c[c.length - 1], o[l] = t(d, x)); l > 0; )
      --l, x = f >> 8, o[l] = t(c[l], x), --l, x = f & 255, o[l] = t(c[l], x);
    for (l = 15, v = 15 - c.length; v > 0; )
      x = f >> 8, o[l] = t(e[v], x), --l, --v, x = f & 255, o[l] = t(c[l], x), --l, --v;
    return o;
  };
}(), _l = function(e, a, r, n, t) {
  t || (t = a), n || (n = Bs(e));
  var s, i;
  for (s = 0; s != a.length; ++s)
    i = a[s], i ^= n[r], i = (i >> 5 | i << 3) & 255, t[s] = i, ++r;
  return [t, r, n];
}, El = function(e) {
  var a = 0, r = Bs(e);
  return function(n) {
    var t = _l("", n, a, r);
    return a = t[1], t[0];
  };
};
function Tl(e, a, r, n) {
  var t = { key: be(e), verificationBytes: be(e) };
  return r.password && (t.verifier = ml(r.password)), n.valid = t.verificationBytes === t.verifier, n.valid && (n.insitu = El(r.password)), t;
}
function kl(e, a, r) {
  var n = r || {};
  return n.Info = e.read_shift(2), e.l -= 2, n.Info === 1 ? n.Data = gl(e) : n.Data = pl(e, a), n;
}
function wl(e, a, r) {
  var n = { Type: r.biff >= 8 ? e.read_shift(2) : 0 };
  return n.Type ? kl(e, a - 2, n) : Tl(e, r.biff >= 8 ? a : a - 2, r, n), n;
}
var Fl = /* @__PURE__ */ function() {
  function e(t, s) {
    switch (s.type) {
      case "base64":
        return a(ur(t), s);
      case "binary":
        return a(t, s);
      case "buffer":
        return a(me && Buffer.isBuffer(t) ? t.toString("binary") : fa(t), s);
      case "array":
        return a(sa(t), s);
    }
    throw new Error("Unrecognized type " + s.type);
  }
  function a(t, s) {
    var i = s || {}, c = i.dense ? [] : {}, f = t.match(/\\trowd.*?\\row\b/g);
    if (!f.length)
      throw new Error("RTF missing table");
    var l = { s: { c: 0, r: 0 }, e: { c: 0, r: f.length - 1 } };
    return f.forEach(function(o, h) {
      Array.isArray(c) && (c[h] = []);
      for (var x = /\\\w+\b/g, d = 0, v, u = -1; v = x.exec(o); ) {
        switch (v[0]) {
          case "\\cell":
            var g = o.slice(d, x.lastIndex - v[0].length);
            if (g[0] == " " && (g = g.slice(1)), ++u, g.length) {
              var S = { v: g, t: "s" };
              Array.isArray(c) ? c[h][u] = S : c[ue({ r: h, c: u })] = S;
            }
            break;
        }
        d = x.lastIndex;
      }
      u > l.e.c && (l.e.c = u);
    }), c["!ref"] = Ee(l), c;
  }
  function r(t, s) {
    return Zr(e(t, s), s);
  }
  function n(t) {
    for (var s = ["{\\rtf1\\ansi"], i = Re(t["!ref"]), c, f = Array.isArray(t), l = i.s.r; l <= i.e.r; ++l) {
      s.push("\\trowd\\trautofit1");
      for (var o = i.s.c; o <= i.e.c; ++o)
        s.push("\\cellx" + (o + 1));
      for (s.push("\\pard\\intbl"), o = i.s.c; o <= i.e.c; ++o) {
        var h = ue({ r: l, c: o });
        c = f ? (t[l] || [])[o] : t[h], !(!c || c.v == null && (!c.f || c.F)) && (s.push(" " + (c.w || (Ur(c), c.w))), s.push("\\cell"));
      }
      s.push("\\pard\\intbl\\row");
    }
    return s.join("") + "}";
  }
  return {
    to_workbook: r,
    to_sheet: e,
    from_sheet: n
  };
}();
function Al(e) {
  var a = e.slice(e[0] === "#" ? 1 : 0).slice(0, 6);
  return [parseInt(a.slice(0, 2), 16), parseInt(a.slice(2, 4), 16), parseInt(a.slice(4, 6), 16)];
}
function za(e) {
  for (var a = 0, r = 1; a != 3; ++a)
    r = r * 256 + (e[a] > 255 ? 255 : e[a] < 0 ? 0 : e[a]);
  return r.toString(16).toUpperCase().slice(1);
}
function Sl(e) {
  var a = e[0] / 255, r = e[1] / 255, n = e[2] / 255, t = Math.max(a, r, n), s = Math.min(a, r, n), i = t - s;
  if (i === 0)
    return [0, 0, a];
  var c = 0, f = 0, l = t + s;
  switch (f = i / (l > 1 ? 2 - l : l), t) {
    case a:
      c = ((r - n) / i + 6) % 6;
      break;
    case r:
      c = (n - a) / i + 2;
      break;
    case n:
      c = (a - r) / i + 4;
      break;
  }
  return [c / 6, f, l / 2];
}
function Cl(e) {
  var a = e[0], r = e[1], n = e[2], t = r * 2 * (n < 0.5 ? n : 1 - n), s = n - t / 2, i = [s, s, s], c = 6 * a, f;
  if (r !== 0)
    switch (c | 0) {
      case 0:
      case 6:
        f = t * c, i[0] += t, i[1] += f;
        break;
      case 1:
        f = t * (2 - c), i[0] += f, i[1] += t;
        break;
      case 2:
        f = t * (c - 2), i[1] += t, i[2] += f;
        break;
      case 3:
        f = t * (4 - c), i[1] += f, i[2] += t;
        break;
      case 4:
        f = t * (c - 4), i[2] += t, i[0] += f;
        break;
      case 5:
        f = t * (6 - c), i[2] += f, i[0] += t;
        break;
    }
  for (var l = 0; l != 3; ++l)
    i[l] = Math.round(i[l] * 255);
  return i;
}
function _t(e, a) {
  if (a === 0)
    return e;
  var r = Sl(Al(e));
  return a < 0 ? r[2] = r[2] * (1 + a) : r[2] = 1 - (1 - r[2]) * (1 - a), za(Cl(r));
}
var bs = 6, yl = 15, Dl = 1, nr = bs;
function Et(e) {
  return Math.floor((e + Math.round(128 / nr) / 256) * nr);
}
function Tt(e) {
  return Math.floor((e - 5) / nr * 100 + 0.5) / 100;
}
function Gt(e) {
  return Math.round((e * nr + 5) / nr * 256) / 256;
}
function Nt(e) {
  return Gt(Tt(Et(e)));
}
function d0(e) {
  var a = Math.abs(e - Nt(e)), r = nr;
  if (a > 5e-3)
    for (nr = Dl; nr < yl; ++nr)
      Math.abs(e - Nt(e)) <= a && (a = Math.abs(e - Nt(e)), r = nr);
  nr = r;
}
function Ea(e) {
  e.width ? (e.wpx = Et(e.width), e.wch = Tt(e.wpx), e.MDW = nr) : e.wpx ? (e.wch = Tt(e.wpx), e.width = Gt(e.wch), e.MDW = nr) : typeof e.wch == "number" && (e.width = Gt(e.wch), e.wpx = Et(e.width), e.MDW = nr), e.customWidth && delete e.customWidth;
}
var Ol = 96, Us = Ol;
function Hs(e) {
  return e * 96 / Us;
}
function ja(e) {
  return e * Us / 96;
}
var Rl = {
  None: "none",
  Solid: "solid",
  Gray50: "mediumGray",
  Gray75: "darkGray",
  Gray25: "lightGray",
  HorzStripe: "darkHorizontal",
  VertStripe: "darkVertical",
  ReverseDiagStripe: "darkDown",
  DiagStripe: "darkUp",
  DiagCross: "darkGrid",
  ThickDiagCross: "darkTrellis",
  ThinHorzStripe: "lightHorizontal",
  ThinVertStripe: "lightVertical",
  ThinReverseDiagStripe: "lightDown",
  ThinHorzCross: "lightGrid"
};
function Il(e, a, r, n) {
  a.Borders = [];
  var t = {}, s = !1;
  (e[0].match(rr) || []).forEach(function(i) {
    var c = oe(i);
    switch (Rr(c[0])) {
      case "<borders":
      case "<borders>":
      case "</borders>":
        break;
      case "<border":
      case "<border>":
      case "<border/>":
        t = /*::(*/
        {}, c.diagonalUp && (t.diagonalUp = Ce(c.diagonalUp)), c.diagonalDown && (t.diagonalDown = Ce(c.diagonalDown)), a.Borders.push(t);
        break;
      case "</border>":
        break;
      case "<left/>":
        break;
      case "<left":
      case "<left>":
        break;
      case "</left>":
        break;
      case "<right/>":
        break;
      case "<right":
      case "<right>":
        break;
      case "</right>":
        break;
      case "<top/>":
        break;
      case "<top":
      case "<top>":
        break;
      case "</top>":
        break;
      case "<bottom/>":
        break;
      case "<bottom":
      case "<bottom>":
        break;
      case "</bottom>":
        break;
      case "<diagonal":
      case "<diagonal>":
      case "<diagonal/>":
        break;
      case "</diagonal>":
        break;
      case "<horizontal":
      case "<horizontal>":
      case "<horizontal/>":
        break;
      case "</horizontal>":
        break;
      case "<vertical":
      case "<vertical>":
      case "<vertical/>":
        break;
      case "</vertical>":
        break;
      case "<start":
      case "<start>":
      case "<start/>":
        break;
      case "</start>":
        break;
      case "<end":
      case "<end>":
      case "<end/>":
        break;
      case "</end>":
        break;
      case "<color":
      case "<color>":
        break;
      case "<color/>":
      case "</color>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        s = !0;
        break;
      case "</ext>":
        s = !1;
        break;
      default:
        if (n && n.WTF && !s)
          throw new Error("unrecognized " + c[0] + " in borders");
    }
  });
}
function Nl(e, a, r, n) {
  a.Fills = [];
  var t = {}, s = !1;
  (e[0].match(rr) || []).forEach(function(i) {
    var c = oe(i);
    switch (Rr(c[0])) {
      case "<fills":
      case "<fills>":
      case "</fills>":
        break;
      case "<fill>":
      case "<fill":
      case "<fill/>":
        t = {}, a.Fills.push(t);
        break;
      case "</fill>":
        break;
      case "<gradientFill>":
        break;
      case "<gradientFill":
      case "</gradientFill>":
        a.Fills.push(t), t = {};
        break;
      case "<patternFill":
      case "<patternFill>":
        c.patternType && (t.patternType = c.patternType);
        break;
      case "<patternFill/>":
      case "</patternFill>":
        break;
      case "<bgColor":
        t.bgColor || (t.bgColor = {}), c.indexed && (t.bgColor.indexed = parseInt(c.indexed, 10)), c.theme && (t.bgColor.theme = parseInt(c.theme, 10)), c.tint && (t.bgColor.tint = parseFloat(c.tint)), c.rgb && (t.bgColor.rgb = c.rgb.slice(-6));
        break;
      case "<bgColor/>":
      case "</bgColor>":
        break;
      case "<fgColor":
        t.fgColor || (t.fgColor = {}), c.theme && (t.fgColor.theme = parseInt(c.theme, 10)), c.tint && (t.fgColor.tint = parseFloat(c.tint)), c.rgb != null && (t.fgColor.rgb = c.rgb.slice(-6));
        break;
      case "<fgColor/>":
      case "</fgColor>":
        break;
      case "<stop":
      case "<stop/>":
        break;
      case "</stop>":
        break;
      case "<color":
      case "<color/>":
        break;
      case "</color>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        s = !0;
        break;
      case "</ext>":
        s = !1;
        break;
      default:
        if (n && n.WTF && !s)
          throw new Error("unrecognized " + c[0] + " in fills");
    }
  });
}
function Pl(e, a, r, n) {
  a.Fonts = [];
  var t = {}, s = !1;
  (e[0].match(rr) || []).forEach(function(i) {
    var c = oe(i);
    switch (Rr(c[0])) {
      case "<fonts":
      case "<fonts>":
      case "</fonts>":
        break;
      case "<font":
      case "<font>":
        break;
      case "</font>":
      case "<font/>":
        a.Fonts.push(t), t = {};
        break;
      case "<name":
        c.val && (t.name = Ae(c.val));
        break;
      case "<name/>":
      case "</name>":
        break;
      case "<b":
        t.bold = c.val ? Ce(c.val) : 1;
        break;
      case "<b/>":
        t.bold = 1;
        break;
      case "<i":
        t.italic = c.val ? Ce(c.val) : 1;
        break;
      case "<i/>":
        t.italic = 1;
        break;
      case "<u":
        switch (c.val) {
          case "none":
            t.underline = 0;
            break;
          case "single":
            t.underline = 1;
            break;
          case "double":
            t.underline = 2;
            break;
          case "singleAccounting":
            t.underline = 33;
            break;
          case "doubleAccounting":
            t.underline = 34;
            break;
        }
        break;
      case "<u/>":
        t.underline = 1;
        break;
      case "<strike":
        t.strike = c.val ? Ce(c.val) : 1;
        break;
      case "<strike/>":
        t.strike = 1;
        break;
      case "<outline":
        t.outline = c.val ? Ce(c.val) : 1;
        break;
      case "<outline/>":
        t.outline = 1;
        break;
      case "<shadow":
        t.shadow = c.val ? Ce(c.val) : 1;
        break;
      case "<shadow/>":
        t.shadow = 1;
        break;
      case "<condense":
        t.condense = c.val ? Ce(c.val) : 1;
        break;
      case "<condense/>":
        t.condense = 1;
        break;
      case "<extend":
        t.extend = c.val ? Ce(c.val) : 1;
        break;
      case "<extend/>":
        t.extend = 1;
        break;
      case "<sz":
        c.val && (t.sz = +c.val);
        break;
      case "<sz/>":
      case "</sz>":
        break;
      case "<vertAlign":
        c.val && (t.vertAlign = c.val);
        break;
      case "<vertAlign/>":
      case "</vertAlign>":
        break;
      case "<family":
        c.val && (t.family = parseInt(c.val, 10));
        break;
      case "<family/>":
      case "</family>":
        break;
      case "<scheme":
        c.val && (t.scheme = c.val);
        break;
      case "<scheme/>":
      case "</scheme>":
        break;
      case "<charset":
        if (c.val == "1")
          break;
        c.codepage = Jt[parseInt(c.val, 10)];
        break;
      case "<color":
        if (t.color || (t.color = {}), c.auto && (t.color.auto = Ce(c.auto)), c.rgb)
          t.color.rgb = c.rgb.slice(-6);
        else if (c.indexed) {
          t.color.index = parseInt(c.indexed, 10);
          var f = ta[t.color.index];
          t.color.index == 81 && (f = ta[1]), f || (f = ta[1]), t.color.rgb = f[0].toString(16) + f[1].toString(16) + f[2].toString(16);
        } else
          c.theme && (t.color.theme = parseInt(c.theme, 10), c.tint && (t.color.tint = parseFloat(c.tint)), c.theme && r.themeElements && r.themeElements.clrScheme && (t.color.rgb = _t(r.themeElements.clrScheme[t.color.theme].rgb, t.color.tint || 0)));
        break;
      case "<color/>":
      case "</color>":
        break;
      case "<AlternateContent":
        s = !0;
        break;
      case "</AlternateContent>":
        s = !1;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        s = !0;
        break;
      case "</ext>":
        s = !1;
        break;
      default:
        if (n && n.WTF && !s)
          throw new Error("unrecognized " + c[0] + " in fonts");
    }
  });
}
function Ll(e, a, r) {
  a.NumberFmt = [];
  for (var n = Or(de), t = 0; t < n.length; ++t)
    a.NumberFmt[n[t]] = de[n[t]];
  var s = e[0].match(rr);
  if (s)
    for (t = 0; t < s.length; ++t) {
      var i = oe(s[t]);
      switch (Rr(i[0])) {
        case "<numFmts":
        case "</numFmts>":
        case "<numFmts/>":
        case "<numFmts>":
          break;
        case "<numFmt":
          {
            var c = ke(Ae(i.formatCode)), f = parseInt(i.numFmtId, 10);
            if (a.NumberFmt[f] = c, f > 0) {
              if (f > 392) {
                for (f = 392; f > 60 && a.NumberFmt[f] != null; --f)
                  ;
                a.NumberFmt[f] = c;
              }
              aa(c, f);
            }
          }
          break;
        case "</numFmt>":
          break;
        default:
          if (r.WTF)
            throw new Error("unrecognized " + i[0] + " in numFmts");
      }
    }
}
var ot = ["numFmtId", "fillId", "fontId", "borderId", "xfId"], lt = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"];
function Ml(e, a, r) {
  a.CellXf = [];
  var n, t = !1;
  (e[0].match(rr) || []).forEach(function(s) {
    var i = oe(s), c = 0;
    switch (Rr(i[0])) {
      case "<cellXfs":
      case "<cellXfs>":
      case "<cellXfs/>":
      case "</cellXfs>":
        break;
      case "<xf":
      case "<xf/>":
        for (n = i, delete n[0], c = 0; c < ot.length; ++c)
          n[ot[c]] && (n[ot[c]] = parseInt(n[ot[c]], 10));
        for (c = 0; c < lt.length; ++c)
          n[lt[c]] && (n[lt[c]] = Ce(n[lt[c]]));
        if (a.NumberFmt && n.numFmtId > 392) {
          for (c = 392; c > 60; --c)
            if (a.NumberFmt[n.numFmtId] == a.NumberFmt[c]) {
              n.numFmtId = c;
              break;
            }
        }
        a.CellXf.push(n);
        break;
      case "</xf>":
        break;
      case "<alignment":
      case "<alignment/>":
        var f = {};
        i.vertical && (f.vertical = i.vertical), i.horizontal && (f.horizontal = i.horizontal), i.textRotation != null && (f.textRotation = i.textRotation), i.indent && (f.indent = i.indent), i.wrapText && (f.wrapText = Ce(i.wrapText)), n.alignment = f;
        break;
      case "</alignment>":
        break;
      case "<protection":
        break;
      case "</protection>":
      case "<protection/>":
        break;
      case "<AlternateContent":
        t = !0;
        break;
      case "</AlternateContent>":
        t = !1;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
        break;
      case "<ext":
        t = !0;
        break;
      case "</ext>":
        t = !1;
        break;
      default:
        if (r && r.WTF && !t)
          throw new Error("unrecognized " + i[0] + " in cellXfs");
    }
  });
}
var Bl = /* @__PURE__ */ function() {
  var a = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/, r = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/, n = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/, t = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/, s = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;
  return function(c, f, l) {
    var o = {};
    if (!c)
      return o;
    c = c.replace(/<!--([\s\S]*?)-->/mg, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
    var h;
    return (h = c.match(a)) && Ll(h, o, l), (h = c.match(t)) && Pl(h, o, f, l), (h = c.match(n)) && Nl(h, o, f, l), (h = c.match(s)) && Il(h, o, f, l), (h = c.match(r)) && Ml(h, o, l), o;
  };
}();
function bl(e, a) {
  var r = e.read_shift(2), n = Qe(e);
  return [r, n];
}
function Ul(e, a, r) {
  var n = {};
  n.sz = e.read_shift(2) / 20;
  var t = jc(e);
  t.fItalic && (n.italic = 1), t.fCondense && (n.condense = 1), t.fExtend && (n.extend = 1), t.fShadow && (n.shadow = 1), t.fOutline && (n.outline = 1), t.fStrikeout && (n.strike = 1);
  var s = e.read_shift(2);
  switch (s === 700 && (n.bold = 1), e.read_shift(2)) {
    case 1:
      n.vertAlign = "superscript";
      break;
    case 2:
      n.vertAlign = "subscript";
      break;
  }
  var i = e.read_shift(1);
  i != 0 && (n.underline = i);
  var c = e.read_shift(1);
  c > 0 && (n.family = c);
  var f = e.read_shift(1);
  switch (f > 0 && (n.charset = f), e.l++, n.color = zc(e), e.read_shift(1)) {
    case 1:
      n.scheme = "major";
      break;
    case 2:
      n.scheme = "minor";
      break;
  }
  return n.name = Qe(e), n;
}
var Hl = er;
function Vl(e, a) {
  var r = e.l + a, n = e.read_shift(2), t = e.read_shift(2);
  return e.l = r, { ixfe: n, numFmtId: t };
}
var Wl = er;
function Gl(e, a, r) {
  var n = {};
  n.NumberFmt = [];
  for (var t in de)
    n.NumberFmt[t] = de[t];
  n.CellXf = [], n.Fonts = [];
  var s = [], i = !1;
  return Hr(e, function(f, l, o) {
    switch (o) {
      case 44:
        n.NumberFmt[f[0]] = f[1], aa(f[1], f[0]);
        break;
      case 43:
        n.Fonts.push(f), f.color.theme != null && a && a.themeElements && a.themeElements.clrScheme && (f.color.rgb = _t(a.themeElements.clrScheme[f.color.theme].rgb, f.color.tint || 0));
        break;
      case 1025:
        break;
      case 45:
        break;
      case 46:
        break;
      case 47:
        s[s.length - 1] == 617 && n.CellXf.push(f);
        break;
      case 48:
      case 507:
      case 572:
      case 475:
        break;
      case 1171:
      case 2102:
      case 1130:
      case 512:
      case 2095:
      case 3072:
        break;
      case 35:
        i = !0;
        break;
      case 36:
        i = !1;
        break;
      case 37:
        s.push(o), i = !0;
        break;
      case 38:
        s.pop(), i = !1;
        break;
      default:
        if (l.T > 0)
          s.push(o);
        else if (l.T < 0)
          s.pop();
        else if (!i || r.WTF && s[s.length - 1] != 37)
          throw new Error("Unexpected record 0x" + o.toString(16));
    }
  }), n;
}
var Xl = [
  "</a:lt1>",
  "</a:dk1>",
  "</a:lt2>",
  "</a:dk2>",
  "</a:accent1>",
  "</a:accent2>",
  "</a:accent3>",
  "</a:accent4>",
  "</a:accent5>",
  "</a:accent6>",
  "</a:hlink>",
  "</a:folHlink>"
];
function $l(e, a, r) {
  a.themeElements.clrScheme = [];
  var n = {};
  (e[0].match(rr) || []).forEach(function(t) {
    var s = oe(t);
    switch (s[0]) {
      case "<a:clrScheme":
      case "</a:clrScheme>":
        break;
      case "<a:srgbClr":
        n.rgb = s.val;
        break;
      case "<a:sysClr":
        n.rgb = s.lastClr;
        break;
      case "<a:dk1>":
      case "</a:dk1>":
      case "<a:lt1>":
      case "</a:lt1>":
      case "<a:dk2>":
      case "</a:dk2>":
      case "<a:lt2>":
      case "</a:lt2>":
      case "<a:accent1>":
      case "</a:accent1>":
      case "<a:accent2>":
      case "</a:accent2>":
      case "<a:accent3>":
      case "</a:accent3>":
      case "<a:accent4>":
      case "</a:accent4>":
      case "<a:accent5>":
      case "</a:accent5>":
      case "<a:accent6>":
      case "</a:accent6>":
      case "<a:hlink>":
      case "</a:hlink>":
      case "<a:folHlink>":
      case "</a:folHlink>":
        s[0].charAt(1) === "/" ? (a.themeElements.clrScheme[Xl.indexOf(s[0])] = n, n = {}) : n.name = s[0].slice(3, s[0].length - 1);
        break;
      default:
        if (r && r.WTF)
          throw new Error("Unrecognized " + s[0] + " in clrScheme");
    }
  });
}
function zl() {
}
function jl() {
}
var Kl = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/, Yl = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/, Jl = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;
function Zl(e, a, r) {
  a.themeElements = {};
  var n;
  [
    /* clrScheme CT_ColorScheme */
    ["clrScheme", Kl, $l],
    /* fontScheme CT_FontScheme */
    ["fontScheme", Yl, zl],
    /* fmtScheme CT_StyleMatrix */
    ["fmtScheme", Jl, jl]
  ].forEach(function(t) {
    if (!(n = e.match(t[1])))
      throw new Error(t[0] + " not found in themeElements");
    t[2](n, a, r);
  });
}
var ql = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;
function Vs(e, a) {
  (!e || e.length === 0) && (e = Ql());
  var r, n = {};
  if (!(r = e.match(ql)))
    throw new Error("themeElements not found in theme");
  return Zl(r[0], n, a), n.raw = e, n;
}
function Ql(e, a) {
  if (a && a.themeXLSX)
    return a.themeXLSX;
  if (e && typeof e.raw == "string")
    return e.raw;
  var r = [qn];
  return r[r.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">', r[r.length] = "<a:themeElements>", r[r.length] = '<a:clrScheme name="Office">', r[r.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>', r[r.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>', r[r.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>', r[r.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>', r[r.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>', r[r.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>', r[r.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>', r[r.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>', r[r.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>', r[r.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>', r[r.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>', r[r.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>', r[r.length] = "</a:clrScheme>", r[r.length] = '<a:fontScheme name="Office">', r[r.length] = "<a:majorFont>", r[r.length] = '<a:latin typeface="Cambria"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Hebr" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="MoolBoran"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Times New Roman"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:majorFont>", r[r.length] = "<a:minorFont>", r[r.length] = '<a:latin typeface="Calibri"/>', r[r.length] = '<a:ea typeface=""/>', r[r.length] = '<a:cs typeface=""/>', r[r.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>', r[r.length] = '<a:font script="Hang" typeface="맑은 고딕"/>', r[r.length] = '<a:font script="Hans" typeface="宋体"/>', r[r.length] = '<a:font script="Hant" typeface="新細明體"/>', r[r.length] = '<a:font script="Arab" typeface="Arial"/>', r[r.length] = '<a:font script="Hebr" typeface="Arial"/>', r[r.length] = '<a:font script="Thai" typeface="Tahoma"/>', r[r.length] = '<a:font script="Ethi" typeface="Nyala"/>', r[r.length] = '<a:font script="Beng" typeface="Vrinda"/>', r[r.length] = '<a:font script="Gujr" typeface="Shruti"/>', r[r.length] = '<a:font script="Khmr" typeface="DaunPenh"/>', r[r.length] = '<a:font script="Knda" typeface="Tunga"/>', r[r.length] = '<a:font script="Guru" typeface="Raavi"/>', r[r.length] = '<a:font script="Cans" typeface="Euphemia"/>', r[r.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>', r[r.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>', r[r.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>', r[r.length] = '<a:font script="Thaa" typeface="MV Boli"/>', r[r.length] = '<a:font script="Deva" typeface="Mangal"/>', r[r.length] = '<a:font script="Telu" typeface="Gautami"/>', r[r.length] = '<a:font script="Taml" typeface="Latha"/>', r[r.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>', r[r.length] = '<a:font script="Orya" typeface="Kalinga"/>', r[r.length] = '<a:font script="Mlym" typeface="Kartika"/>', r[r.length] = '<a:font script="Laoo" typeface="DokChampa"/>', r[r.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>', r[r.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>', r[r.length] = '<a:font script="Viet" typeface="Arial"/>', r[r.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>', r[r.length] = '<a:font script="Geor" typeface="Sylfaen"/>', r[r.length] = "</a:minorFont>", r[r.length] = "</a:fontScheme>", r[r.length] = '<a:fmtScheme name="Office">', r[r.length] = "<a:fillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="1"/>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:lin ang="16200000" scaled="0"/>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:fillStyleLst>", r[r.length] = "<a:lnStyleLst>", r[r.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>', r[r.length] = "</a:lnStyleLst>", r[r.length] = "<a:effectStyleLst>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = "</a:effectStyle>", r[r.length] = "<a:effectStyle>", r[r.length] = "<a:effectLst>", r[r.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>', r[r.length] = "</a:effectLst>", r[r.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>', r[r.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>', r[r.length] = "</a:effectStyle>", r[r.length] = "</a:effectStyleLst>", r[r.length] = "<a:bgFillStyleLst>", r[r.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>', r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = '<a:gradFill rotWithShape="1">', r[r.length] = "<a:gsLst>", r[r.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>', r[r.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>', r[r.length] = "</a:gsLst>", r[r.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>', r[r.length] = "</a:gradFill>", r[r.length] = "</a:bgFillStyleLst>", r[r.length] = "</a:fmtScheme>", r[r.length] = "</a:themeElements>", r[r.length] = "<a:objectDefaults>", r[r.length] = "<a:spDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>', r[r.length] = "</a:spDef>", r[r.length] = "<a:lnDef>", r[r.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>', r[r.length] = "</a:lnDef>", r[r.length] = "</a:objectDefaults>", r[r.length] = "<a:extraClrSchemeLst/>", r[r.length] = "</a:theme>", r.join("");
}
function e1(e, a, r) {
  var n = e.l + a, t = e.read_shift(4);
  if (t !== 124226) {
    if (!r.cellStyles) {
      e.l = n;
      return;
    }
    var s = e.slice(e.l);
    e.l = n;
    var i;
    try {
      i = Zn(s, { type: "array" });
    } catch {
      return;
    }
    var c = hr(i, "theme/theme/theme1.xml", !0);
    if (c)
      return Vs(c, r);
  }
}
function r1(e) {
  return e.read_shift(4);
}
function a1(e) {
  var a = {};
  switch (a.xclrType = e.read_shift(2), a.nTintShade = e.read_shift(2), a.xclrType) {
    case 0:
      e.l += 4;
      break;
    case 1:
      a.xclrValue = t1(e, 4);
      break;
    case 2:
      a.xclrValue = Cs(e);
      break;
    case 3:
      a.xclrValue = r1(e);
      break;
    case 4:
      e.l += 4;
      break;
  }
  return e.l += 8, a;
}
function t1(e, a) {
  return er(e, a);
}
function n1(e, a) {
  return er(e, a);
}
function s1(e) {
  var a = e.read_shift(2), r = e.read_shift(2) - 4, n = [a];
  switch (a) {
    case 4:
    case 5:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 13:
      n[1] = a1(e);
      break;
    case 6:
      n[1] = n1(e, r);
      break;
    case 14:
    case 15:
      n[1] = e.read_shift(r === 1 ? 1 : 2);
      break;
    default:
      throw new Error("Unrecognized ExtProp type: " + a + " " + r);
  }
  return n;
}
function i1(e, a) {
  var r = e.l + a;
  e.l += 2;
  var n = e.read_shift(2);
  e.l += 2;
  for (var t = e.read_shift(2), s = []; t-- > 0; )
    s.push(s1(e, r - e.l));
  return { ixfe: n, ext: s };
}
function c1(e, a) {
  a.forEach(function(r) {
    switch (r[0]) {
    }
  });
}
function f1(e, a) {
  return {
    flags: e.read_shift(4),
    version: e.read_shift(4),
    name: Qe(e)
  };
}
function o1(e) {
  for (var a = [], r = e.read_shift(4); r-- > 0; )
    a.push([e.read_shift(4), e.read_shift(4)]);
  return a;
}
function l1(e) {
  return e.l += 4, e.read_shift(4) != 0;
}
function h1(e, a, r) {
  var n = { Types: [], Cell: [], Value: [] }, t = r || {}, s = [], i = !1, c = 2;
  return Hr(e, function(f, l, o) {
    switch (o) {
      case 335:
        n.Types.push({ name: f.name });
        break;
      case 51:
        f.forEach(function(h) {
          c == 1 ? n.Cell.push({ type: n.Types[h[0] - 1].name, index: h[1] }) : c == 0 && n.Value.push({ type: n.Types[h[0] - 1].name, index: h[1] });
        });
        break;
      case 337:
        c = f ? 1 : 0;
        break;
      case 338:
        c = 2;
        break;
      case 35:
        s.push(o), i = !0;
        break;
      case 36:
        s.pop(), i = !1;
        break;
      default:
        if (!l.T) {
          if (!i || t.WTF && s[s.length - 1] != 35)
            throw new Error("Unexpected record 0x" + o.toString(16));
        }
    }
  }), n;
}
function u1(e, a, r) {
  var n = { Types: [], Cell: [], Value: [] };
  if (!e)
    return n;
  var t = !1, s = 2, i;
  return e.replace(rr, function(c) {
    var f = oe(c);
    switch (Rr(f[0])) {
      case "<?xml":
        break;
      case "<metadata":
      case "</metadata>":
        break;
      case "<metadataTypes":
      case "</metadataTypes>":
        break;
      case "<metadataType":
        n.Types.push({ name: f.name });
        break;
      case "</metadataType>":
        break;
      case "<futureMetadata":
        for (var l = 0; l < n.Types.length; ++l)
          n.Types[l].name == f.name && (i = n.Types[l]);
        break;
      case "</futureMetadata>":
        break;
      case "<bk>":
        break;
      case "</bk>":
        break;
      case "<rc":
        s == 1 ? n.Cell.push({ type: n.Types[f.t - 1].name, index: +f.v }) : s == 0 && n.Value.push({ type: n.Types[f.t - 1].name, index: +f.v });
        break;
      case "</rc>":
        break;
      case "<cellMetadata":
        s = 1;
        break;
      case "</cellMetadata>":
        s = 2;
        break;
      case "<valueMetadata":
        s = 0;
        break;
      case "</valueMetadata>":
        s = 2;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        t = !0;
        break;
      case "</ext>":
        t = !1;
        break;
      case "<rvb":
        if (!i)
          break;
        i.offsets || (i.offsets = []), i.offsets.push(+f.i);
        break;
      default:
        if (!t && r.WTF)
          throw new Error("unrecognized " + f[0] + " in metadata");
    }
    return c;
  }), n;
}
function x1(e) {
  var a = [];
  if (!e)
    return a;
  var r = 1;
  return (e.match(rr) || []).forEach(function(n) {
    var t = oe(n);
    switch (t[0]) {
      case "<?xml":
        break;
      case "<calcChain":
      case "<calcChain>":
      case "</calcChain>":
        break;
      case "<c":
        delete t[0], t.i ? r = t.i : t.i = r, a.push(t);
        break;
    }
  }), a;
}
function d1(e) {
  var a = {};
  a.i = e.read_shift(4);
  var r = {};
  r.r = e.read_shift(4), r.c = e.read_shift(4), a.r = ue(r);
  var n = e.read_shift(1);
  return n & 2 && (a.l = "1"), n & 8 && (a.a = "1"), a;
}
function v1(e, a, r) {
  var n = [];
  return Hr(e, function(s, i, c) {
    switch (c) {
      case 63:
        n.push(s);
        break;
      default:
        if (!i.T)
          throw new Error("Unexpected record 0x" + c.toString(16));
    }
  }), n;
}
function p1(e, a, r, n) {
  if (!e)
    return e;
  var t = n || {}, s = !1;
  Hr(e, function(c, f, l) {
    switch (l) {
      case 359:
      case 363:
      case 364:
      case 366:
      case 367:
      case 368:
      case 369:
      case 370:
      case 371:
      case 472:
      case 577:
      case 578:
      case 579:
      case 580:
      case 581:
      case 582:
      case 583:
      case 584:
      case 585:
      case 586:
      case 587:
        break;
      case 35:
        s = !0;
        break;
      case 36:
        s = !1;
        break;
      default:
        if (!f.T) {
          if (!s || t.WTF)
            throw new Error("Unexpected record 0x" + l.toString(16));
        }
    }
  }, t);
}
function g1(e, a) {
  if (!e)
    return "??";
  var r = (e.match(/<c:chart [^>]*r:id="([^"]*)"/) || ["", ""])[1];
  return a["!id"][r].Target;
}
function dn(e, a, r, n) {
  var t = Array.isArray(e), s;
  a.forEach(function(i) {
    var c = sr(i.ref);
    if (t ? (e[c.r] || (e[c.r] = []), s = e[c.r][c.c]) : s = e[i.ref], !s) {
      s = { t: "z" }, t ? e[c.r][c.c] = s : e[i.ref] = s;
      var f = Re(e["!ref"] || "BDWGO1000001:A1");
      f.s.r > c.r && (f.s.r = c.r), f.e.r < c.r && (f.e.r = c.r), f.s.c > c.c && (f.s.c = c.c), f.e.c < c.c && (f.e.c = c.c);
      var l = Ee(f);
      l !== e["!ref"] && (e["!ref"] = l);
    }
    s.c || (s.c = []);
    var o = { a: i.author, t: i.t, r: i.r, T: r };
    i.h && (o.h = i.h);
    for (var h = s.c.length - 1; h >= 0; --h) {
      if (!r && s.c[h].T)
        return;
      r && !s.c[h].T && s.c.splice(h, 1);
    }
    if (r && n) {
      for (h = 0; h < n.length; ++h)
        if (o.a == n[h].id) {
          o.a = n[h].name || o.a;
          break;
        }
    }
    s.c.push(o);
  });
}
function m1(e, a) {
  if (e.match(/<(?:\w+:)?comments *\/>/))
    return [];
  var r = [], n = [], t = e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);
  t && t[1] && t[1].split(/<\/\w*:?author>/).forEach(function(i) {
    if (!(i === "" || i.trim() === "")) {
      var c = i.match(/<(?:\w+:)?author[^>]*>(.*)/);
      c && r.push(c[1]);
    }
  });
  var s = e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);
  return s && s[1] && s[1].split(/<\/\w*:?comment>/).forEach(function(i) {
    if (!(i === "" || i.trim() === "")) {
      var c = i.match(/<(?:\w+:)?comment[^>]*>/);
      if (c) {
        var f = oe(c[0]), l = { author: f.authorId && r[f.authorId] || "sheetjsghost", ref: f.ref, guid: f.guid }, o = sr(f.ref);
        if (!(a.sheetRows && a.sheetRows <= o.r)) {
          var h = i.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/), x = !!h && !!h[1] && x0(h[1]) || { r: "", t: "", h: "" };
          l.r = x.r, x.r == "<t></t>" && (x.t = x.h = ""), l.t = (x.t || "").replace(/\r\n/g, `
`).replace(/\r/g, `
`), a.cellHTML && (l.h = x.h), n.push(l);
        }
      }
    }
  }), n;
}
function _1(e, a) {
  var r = [], n = !1, t = {}, s = 0;
  return e.replace(rr, function(c, f) {
    var l = oe(c);
    switch (Rr(l[0])) {
      case "<?xml":
        break;
      case "<ThreadedComments":
        break;
      case "</ThreadedComments>":
        break;
      case "<threadedComment":
        t = { author: l.personId, guid: l.id, ref: l.ref, T: 1 };
        break;
      case "</threadedComment>":
        t.t != null && r.push(t);
        break;
      case "<text>":
      case "<text":
        s = f + c.length;
        break;
      case "</text>":
        t.t = e.slice(s, f).replace(/\r\n/g, `
`).replace(/\r/g, `
`);
        break;
      case "<mentions":
      case "<mentions>":
        n = !0;
        break;
      case "</mentions>":
        n = !1;
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        n = !0;
        break;
      case "</ext>":
        n = !1;
        break;
      default:
        if (!n && a.WTF)
          throw new Error("unrecognized " + l[0] + " in threaded comments");
    }
    return c;
  }), r;
}
function E1(e, a) {
  var r = [], n = !1;
  return e.replace(rr, function(s) {
    var i = oe(s);
    switch (Rr(i[0])) {
      case "<?xml":
        break;
      case "<personList":
        break;
      case "</personList>":
        break;
      case "<person":
        r.push({ name: i.displayname, id: i.id });
        break;
      case "</person>":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        n = !0;
        break;
      case "</ext>":
        n = !1;
        break;
      default:
        if (!n && a.WTF)
          throw new Error("unrecognized " + i[0] + " in threaded comments");
    }
    return s;
  }), r;
}
function T1(e) {
  var a = {};
  a.iauthor = e.read_shift(4);
  var r = la(e);
  return a.rfx = r.s, a.ref = ue(r.s), e.l += 16, a;
}
var k1 = Qe;
function w1(e, a) {
  var r = [], n = [], t = {}, s = !1;
  return Hr(e, function(c, f, l) {
    switch (l) {
      case 632:
        n.push(c);
        break;
      case 635:
        t = c;
        break;
      case 637:
        t.t = c.t, t.h = c.h, t.r = c.r;
        break;
      case 636:
        if (t.author = n[t.iauthor], delete t.iauthor, a.sheetRows && t.rfx && a.sheetRows <= t.rfx.r)
          break;
        t.t || (t.t = ""), delete t.rfx, r.push(t);
        break;
      case 3072:
        break;
      case 35:
        s = !0;
        break;
      case 36:
        s = !1;
        break;
      case 37:
        break;
      case 38:
        break;
      default:
        if (!f.T) {
          if (!s || a.WTF)
            throw new Error("Unexpected record 0x" + l.toString(16));
        }
    }
  }), r;
}
var F1 = "application/vnd.ms-office.vbaProject";
function A1(e) {
  var a = _e.utils.cfb_new({ root: "R" });
  return e.FullPaths.forEach(function(r, n) {
    if (!(r.slice(-1) === "/" || !r.match(/_VBA_PROJECT_CUR/))) {
      var t = r.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
      _e.utils.cfb_add(a, t, e.FileIndex[n].content);
    }
  }), _e.write(a);
}
function S1() {
  return { "!type": "dialog" };
}
function C1() {
  return { "!type": "dialog" };
}
function y1() {
  return { "!type": "macro" };
}
function D1() {
  return { "!type": "macro" };
}
var ga = /* @__PURE__ */ function() {
  var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g, a = { r: 0, c: 0 };
  function r(n, t, s, i) {
    var c = !1, f = !1;
    s.length == 0 ? f = !0 : s.charAt(0) == "[" && (f = !0, s = s.slice(1, -1)), i.length == 0 ? c = !0 : i.charAt(0) == "[" && (c = !0, i = i.slice(1, -1));
    var l = s.length > 0 ? parseInt(s, 10) | 0 : 0, o = i.length > 0 ? parseInt(i, 10) | 0 : 0;
    return c ? o += a.c : --o, f ? l += a.r : --l, t + (c ? "" : "$") + Ve(o) + (f ? "" : "$") + je(l);
  }
  return function(t, s) {
    return a = s, t.replace(e, r);
  };
}(), Ws = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g, O1 = /* @__PURE__ */ function() {
  return function(a, r) {
    return a.replace(Ws, function(n, t, s, i, c, f) {
      var l = c0(i) - (s ? 0 : r.c), o = i0(f) - (c ? 0 : r.r), h = o == 0 ? "" : c ? o + 1 : "[" + o + "]", x = l == 0 ? "" : s ? l + 1 : "[" + l + "]";
      return t + "R" + h + "C" + x;
    });
  };
}();
function Gs(e, a) {
  return e.replace(Ws, function(r, n, t, s, i, c) {
    return n + (t == "$" ? t + s : Ve(c0(s) + a.c)) + (i == "$" ? i + c : je(i0(c) + a.r));
  });
}
function R1(e, a, r) {
  var n = ka(a), t = n.s, s = sr(r), i = { r: s.r - t.r, c: s.c - t.c };
  return Gs(e, i);
}
function I1(e) {
  return e.length != 1;
}
function vn(e) {
  return e.replace(/_xlfn\./g, "");
}
function Me(e) {
  e.l += 1;
}
function Jr(e, a) {
  var r = e.read_shift(a == 1 ? 1 : 2);
  return [r & 16383, r >> 14 & 1, r >> 15 & 1];
}
function Xs(e, a, r) {
  var n = 2;
  if (r) {
    if (r.biff >= 2 && r.biff <= 5)
      return $s(e);
    r.biff == 12 && (n = 4);
  }
  var t = e.read_shift(n), s = e.read_shift(n), i = Jr(e, 2), c = Jr(e, 2);
  return { s: { r: t, c: i[0], cRel: i[1], rRel: i[2] }, e: { r: s, c: c[0], cRel: c[1], rRel: c[2] } };
}
function $s(e) {
  var a = Jr(e, 2), r = Jr(e, 2), n = e.read_shift(1), t = e.read_shift(1);
  return { s: { r: a[0], c: n, cRel: a[1], rRel: a[2] }, e: { r: r[0], c: t, cRel: r[1], rRel: r[2] } };
}
function N1(e, a, r) {
  if (r.biff < 8)
    return $s(e);
  var n = e.read_shift(r.biff == 12 ? 4 : 2), t = e.read_shift(r.biff == 12 ? 4 : 2), s = Jr(e, 2), i = Jr(e, 2);
  return { s: { r: n, c: s[0], cRel: s[1], rRel: s[2] }, e: { r: t, c: i[0], cRel: i[1], rRel: i[2] } };
}
function zs(e, a, r) {
  if (r && r.biff >= 2 && r.biff <= 5)
    return P1(e);
  var n = e.read_shift(r && r.biff == 12 ? 4 : 2), t = Jr(e, 2);
  return { r: n, c: t[0], cRel: t[1], rRel: t[2] };
}
function P1(e) {
  var a = Jr(e, 2), r = e.read_shift(1);
  return { r: a[0], c: r, cRel: a[1], rRel: a[2] };
}
function L1(e) {
  var a = e.read_shift(2), r = e.read_shift(2);
  return { r: a, c: r & 255, fQuoted: !!(r & 16384), cRel: r >> 15, rRel: r >> 15 };
}
function M1(e, a, r) {
  var n = r && r.biff ? r.biff : 8;
  if (n >= 2 && n <= 5)
    return B1(e);
  var t = e.read_shift(n >= 12 ? 4 : 2), s = e.read_shift(2), i = (s & 16384) >> 14, c = (s & 32768) >> 15;
  if (s &= 16383, c == 1)
    for (; t > 524287; )
      t -= 1048576;
  if (i == 1)
    for (; s > 8191; )
      s = s - 16384;
  return { r: t, c: s, cRel: i, rRel: c };
}
function B1(e) {
  var a = e.read_shift(2), r = e.read_shift(1), n = (a & 32768) >> 15, t = (a & 16384) >> 14;
  return a &= 16383, n == 1 && a >= 8192 && (a = a - 16384), t == 1 && r >= 128 && (r = r - 256), { r: a, c: r, cRel: t, rRel: n };
}
function b1(e, a, r) {
  var n = (e[e.l++] & 96) >> 5, t = Xs(e, r.biff >= 2 && r.biff <= 5 ? 6 : 8, r);
  return [n, t];
}
function U1(e, a, r) {
  var n = (e[e.l++] & 96) >> 5, t = e.read_shift(2, "i"), s = 8;
  if (r)
    switch (r.biff) {
      case 5:
        e.l += 12, s = 6;
        break;
      case 12:
        s = 12;
        break;
    }
  var i = Xs(e, s, r);
  return [n, t, i];
}
function H1(e, a, r) {
  var n = (e[e.l++] & 96) >> 5;
  return e.l += r && r.biff > 8 ? 12 : r.biff < 8 ? 6 : 8, [n];
}
function V1(e, a, r) {
  var n = (e[e.l++] & 96) >> 5, t = e.read_shift(2), s = 8;
  if (r)
    switch (r.biff) {
      case 5:
        e.l += 12, s = 6;
        break;
      case 12:
        s = 12;
        break;
    }
  return e.l += s, [n, t];
}
function W1(e, a, r) {
  var n = (e[e.l++] & 96) >> 5, t = N1(e, a - 1, r);
  return [n, t];
}
function G1(e, a, r) {
  var n = (e[e.l++] & 96) >> 5;
  return e.l += r.biff == 2 ? 6 : r.biff == 12 ? 14 : 7, [n];
}
function pn(e) {
  var a = e[e.l + 1] & 1, r = 1;
  return e.l += 4, [a, r];
}
function X1(e, a, r) {
  e.l += 2;
  for (var n = e.read_shift(r && r.biff == 2 ? 1 : 2), t = [], s = 0; s <= n; ++s)
    t.push(e.read_shift(r && r.biff == 2 ? 1 : 2));
  return t;
}
function $1(e, a, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function z1(e, a, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [n, e.read_shift(r && r.biff == 2 ? 1 : 2)];
}
function j1(e) {
  var a = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += 2, [a, e.read_shift(2)];
}
function K1(e, a, r) {
  var n = e[e.l + 1] & 255 ? 1 : 0;
  return e.l += r && r.biff == 2 ? 3 : 4, [n];
}
function js(e) {
  var a = e.read_shift(1), r = e.read_shift(1);
  return [a, r];
}
function Y1(e) {
  return e.read_shift(2), js(e);
}
function J1(e) {
  return e.read_shift(2), js(e);
}
function Z1(e, a, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var t = zs(e, 0, r);
  return [n, t];
}
function q1(e, a, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var t = M1(e, 0, r);
  return [n, t];
}
function Q1(e, a, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var t = e.read_shift(2);
  r && r.biff == 5 && (e.l += 12);
  var s = zs(e, 0, r);
  return [n, t, s];
}
function eh(e, a, r) {
  var n = (e[e.l] & 96) >> 5;
  e.l += 1;
  var t = e.read_shift(r && r.biff <= 3 ? 1 : 2);
  return [ru[t], Js[t], n];
}
function rh(e, a, r) {
  var n = e[e.l++], t = e.read_shift(1), s = r && r.biff <= 3 ? [n == 88 ? -1 : 0, e.read_shift(1)] : ah(e);
  return [t, (s[0] === 0 ? Js : eu)[s[1]]];
}
function ah(e) {
  return [e[e.l + 1] >> 7, e.read_shift(2) & 32767];
}
function th(e, a, r) {
  e.l += r && r.biff == 2 ? 3 : 4;
}
function nh(e, a, r) {
  if (e.l++, r && r.biff == 12)
    return [e.read_shift(4, "i"), 0];
  var n = e.read_shift(2), t = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, t];
}
function sh(e) {
  return e.l++, ha[e.read_shift(1)];
}
function ih(e) {
  return e.l++, e.read_shift(2);
}
function ch(e) {
  return e.l++, e.read_shift(1) !== 0;
}
function fh(e) {
  return e.l++, Ze(e);
}
function oh(e, a, r) {
  return e.l++, Za(e, a - 1, r);
}
function lh(e, a) {
  var r = [e.read_shift(1)];
  if (a == 12)
    switch (r[0]) {
      case 2:
        r[0] = 4;
        break;
      case 4:
        r[0] = 16;
        break;
      case 0:
        r[0] = 1;
        break;
      case 1:
        r[0] = 2;
        break;
    }
  switch (r[0]) {
    case 4:
      r[1] = Le(e, 1) ? "TRUE" : "FALSE", a != 12 && (e.l += 7);
      break;
    case 37:
    case 16:
      r[1] = ha[e[e.l]], e.l += a == 12 ? 4 : 8;
      break;
    case 0:
      e.l += 8;
      break;
    case 1:
      r[1] = Ze(e);
      break;
    case 2:
      r[1] = ua(e, 0, { biff: a > 0 && a < 8 ? 2 : a });
      break;
    default:
      throw new Error("Bad SerAr: " + r[0]);
  }
  return r;
}
function hh(e, a, r) {
  for (var n = e.read_shift(r.biff == 12 ? 4 : 2), t = [], s = 0; s != n; ++s)
    t.push((r.biff == 12 ? la : Ft)(e));
  return t;
}
function uh(e, a, r) {
  var n = 0, t = 0;
  r.biff == 12 ? (n = e.read_shift(4), t = e.read_shift(4)) : (t = 1 + e.read_shift(1), n = 1 + e.read_shift(2)), r.biff >= 2 && r.biff < 8 && (--n, --t == 0 && (t = 256));
  for (var s = 0, i = []; s != n && (i[s] = []); ++s)
    for (var c = 0; c != t; ++c)
      i[s][c] = lh(e, r.biff);
  return i;
}
function xh(e, a, r) {
  var n = e.read_shift(1) >>> 5 & 3, t = !r || r.biff >= 8 ? 4 : 2, s = e.read_shift(t);
  switch (r.biff) {
    case 2:
      e.l += 5;
      break;
    case 3:
    case 4:
      e.l += 8;
      break;
    case 5:
      e.l += 12;
      break;
  }
  return [n, 0, s];
}
function dh(e, a, r) {
  if (r.biff == 5)
    return vh(e);
  var n = e.read_shift(1) >>> 5 & 3, t = e.read_shift(2), s = e.read_shift(4);
  return [n, t, s];
}
function vh(e) {
  var a = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2, "i");
  e.l += 8;
  var n = e.read_shift(2);
  return e.l += 12, [a, r, n];
}
function ph(e, a, r) {
  var n = e.read_shift(1) >>> 5 & 3;
  e.l += r && r.biff == 2 ? 3 : 4;
  var t = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, t];
}
function gh(e, a, r) {
  var n = e.read_shift(1) >>> 5 & 3, t = e.read_shift(r && r.biff == 2 ? 1 : 2);
  return [n, t];
}
function mh(e, a, r) {
  var n = e.read_shift(1) >>> 5 & 3;
  return e.l += 4, r.biff < 8 && e.l--, r.biff == 12 && (e.l += 2), [n];
}
function _h(e, a, r) {
  var n = (e[e.l++] & 96) >> 5, t = e.read_shift(2), s = 4;
  if (r)
    switch (r.biff) {
      case 5:
        s = 15;
        break;
      case 12:
        s = 6;
        break;
    }
  return e.l += s, [n, t];
}
var Eh = er, Th = er, kh = er;
function Qa(e, a, r) {
  return e.l += 2, [L1(e)];
}
function v0(e) {
  return e.l += 6, [];
}
var wh = Qa, Fh = v0, Ah = v0, Sh = Qa;
function Ks(e) {
  return e.l += 2, [be(e), e.read_shift(2) & 1];
}
var Ch = Qa, yh = Ks, Dh = v0, Oh = Qa, Rh = Qa, Ih = [
  "Data",
  "All",
  "Headers",
  "??",
  "?Data2",
  "??",
  "?DataHeaders",
  "??",
  "Totals",
  "??",
  "??",
  "??",
  "?DataTotals",
  "??",
  "??",
  "??",
  "?Current"
];
function Nh(e) {
  e.l += 2;
  var a = e.read_shift(2), r = e.read_shift(2), n = e.read_shift(4), t = e.read_shift(2), s = e.read_shift(2), i = Ih[r >> 2 & 31];
  return { ixti: a, coltype: r & 3, rt: i, idx: n, c: t, C: s };
}
function Ph(e) {
  return e.l += 2, [e.read_shift(4)];
}
function Lh(e, a, r) {
  return e.l += 5, e.l += 2, e.l += r.biff == 2 ? 1 : 4, ["PTGSHEET"];
}
function Mh(e, a, r) {
  return e.l += r.biff == 2 ? 4 : 5, ["PTGENDSHEET"];
}
function Bh(e) {
  var a = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [a, r];
}
function bh(e) {
  var a = e.read_shift(1) >>> 5 & 3, r = e.read_shift(2);
  return [a, r];
}
function Uh(e) {
  return e.l += 4, [0, 0];
}
var gn = {
  /*::[*/
  1: { n: "PtgExp", f: nh },
  /*::[*/
  2: { n: "PtgTbl", f: kh },
  /*::[*/
  3: { n: "PtgAdd", f: Me },
  /*::[*/
  4: { n: "PtgSub", f: Me },
  /*::[*/
  5: { n: "PtgMul", f: Me },
  /*::[*/
  6: { n: "PtgDiv", f: Me },
  /*::[*/
  7: { n: "PtgPower", f: Me },
  /*::[*/
  8: { n: "PtgConcat", f: Me },
  /*::[*/
  9: { n: "PtgLt", f: Me },
  /*::[*/
  10: { n: "PtgLe", f: Me },
  /*::[*/
  11: { n: "PtgEq", f: Me },
  /*::[*/
  12: { n: "PtgGe", f: Me },
  /*::[*/
  13: { n: "PtgGt", f: Me },
  /*::[*/
  14: { n: "PtgNe", f: Me },
  /*::[*/
  15: { n: "PtgIsect", f: Me },
  /*::[*/
  16: { n: "PtgUnion", f: Me },
  /*::[*/
  17: { n: "PtgRange", f: Me },
  /*::[*/
  18: { n: "PtgUplus", f: Me },
  /*::[*/
  19: { n: "PtgUminus", f: Me },
  /*::[*/
  20: { n: "PtgPercent", f: Me },
  /*::[*/
  21: { n: "PtgParen", f: Me },
  /*::[*/
  22: { n: "PtgMissArg", f: Me },
  /*::[*/
  23: { n: "PtgStr", f: oh },
  /*::[*/
  26: { n: "PtgSheet", f: Lh },
  /*::[*/
  27: { n: "PtgEndSheet", f: Mh },
  /*::[*/
  28: { n: "PtgErr", f: sh },
  /*::[*/
  29: { n: "PtgBool", f: ch },
  /*::[*/
  30: { n: "PtgInt", f: ih },
  /*::[*/
  31: { n: "PtgNum", f: fh },
  /*::[*/
  32: { n: "PtgArray", f: G1 },
  /*::[*/
  33: { n: "PtgFunc", f: eh },
  /*::[*/
  34: { n: "PtgFuncVar", f: rh },
  /*::[*/
  35: { n: "PtgName", f: xh },
  /*::[*/
  36: { n: "PtgRef", f: Z1 },
  /*::[*/
  37: { n: "PtgArea", f: b1 },
  /*::[*/
  38: { n: "PtgMemArea", f: ph },
  /*::[*/
  39: { n: "PtgMemErr", f: Eh },
  /*::[*/
  40: { n: "PtgMemNoMem", f: Th },
  /*::[*/
  41: { n: "PtgMemFunc", f: gh },
  /*::[*/
  42: { n: "PtgRefErr", f: mh },
  /*::[*/
  43: { n: "PtgAreaErr", f: H1 },
  /*::[*/
  44: { n: "PtgRefN", f: q1 },
  /*::[*/
  45: { n: "PtgAreaN", f: W1 },
  /*::[*/
  46: { n: "PtgMemAreaN", f: Bh },
  /*::[*/
  47: { n: "PtgMemNoMemN", f: bh },
  /*::[*/
  57: { n: "PtgNameX", f: dh },
  /*::[*/
  58: { n: "PtgRef3d", f: Q1 },
  /*::[*/
  59: { n: "PtgArea3d", f: U1 },
  /*::[*/
  60: { n: "PtgRefErr3d", f: _h },
  /*::[*/
  61: { n: "PtgAreaErr3d", f: V1 },
  /*::[*/
  255: {}
}, Hh = {
  /*::[*/
  64: 32,
  /*::[*/
  96: 32,
  /*::[*/
  65: 33,
  /*::[*/
  97: 33,
  /*::[*/
  66: 34,
  /*::[*/
  98: 34,
  /*::[*/
  67: 35,
  /*::[*/
  99: 35,
  /*::[*/
  68: 36,
  /*::[*/
  100: 36,
  /*::[*/
  69: 37,
  /*::[*/
  101: 37,
  /*::[*/
  70: 38,
  /*::[*/
  102: 38,
  /*::[*/
  71: 39,
  /*::[*/
  103: 39,
  /*::[*/
  72: 40,
  /*::[*/
  104: 40,
  /*::[*/
  73: 41,
  /*::[*/
  105: 41,
  /*::[*/
  74: 42,
  /*::[*/
  106: 42,
  /*::[*/
  75: 43,
  /*::[*/
  107: 43,
  /*::[*/
  76: 44,
  /*::[*/
  108: 44,
  /*::[*/
  77: 45,
  /*::[*/
  109: 45,
  /*::[*/
  78: 46,
  /*::[*/
  110: 46,
  /*::[*/
  79: 47,
  /*::[*/
  111: 47,
  /*::[*/
  88: 34,
  /*::[*/
  120: 34,
  /*::[*/
  89: 57,
  /*::[*/
  121: 57,
  /*::[*/
  90: 58,
  /*::[*/
  122: 58,
  /*::[*/
  91: 59,
  /*::[*/
  123: 59,
  /*::[*/
  92: 60,
  /*::[*/
  124: 60,
  /*::[*/
  93: 61,
  /*::[*/
  125: 61
}, Vh = {
  /*::[*/
  1: { n: "PtgElfLel", f: Ks },
  /*::[*/
  2: { n: "PtgElfRw", f: Oh },
  /*::[*/
  3: { n: "PtgElfCol", f: wh },
  /*::[*/
  6: { n: "PtgElfRwV", f: Rh },
  /*::[*/
  7: { n: "PtgElfColV", f: Sh },
  /*::[*/
  10: { n: "PtgElfRadical", f: Ch },
  /*::[*/
  11: { n: "PtgElfRadicalS", f: Dh },
  /*::[*/
  13: { n: "PtgElfColS", f: Fh },
  /*::[*/
  15: { n: "PtgElfColSV", f: Ah },
  /*::[*/
  16: { n: "PtgElfRadicalLel", f: yh },
  /*::[*/
  25: { n: "PtgList", f: Nh },
  /*::[*/
  29: { n: "PtgSxName", f: Ph },
  /*::[*/
  255: {}
}, Wh = {
  /*::[*/
  0: { n: "PtgAttrNoop", f: Uh },
  /*::[*/
  1: { n: "PtgAttrSemi", f: K1 },
  /*::[*/
  2: { n: "PtgAttrIf", f: z1 },
  /*::[*/
  4: { n: "PtgAttrChoose", f: X1 },
  /*::[*/
  8: { n: "PtgAttrGoto", f: $1 },
  /*::[*/
  16: { n: "PtgAttrSum", f: th },
  /*::[*/
  32: { n: "PtgAttrBaxcel", f: pn },
  /*::[*/
  33: { n: "PtgAttrBaxcel", f: pn },
  /*::[*/
  64: { n: "PtgAttrSpace", f: Y1 },
  /*::[*/
  65: { n: "PtgAttrSpaceSemi", f: J1 },
  /*::[*/
  128: { n: "PtgAttrIfError", f: j1 },
  /*::[*/
  255: {}
};
function et(e, a, r, n) {
  if (n.biff < 8)
    return er(e, a);
  for (var t = e.l + a, s = [], i = 0; i !== r.length; ++i)
    switch (r[i][0]) {
      case "PtgArray":
        r[i][1] = uh(e, 0, n), s.push(r[i][1]);
        break;
      case "PtgMemArea":
        r[i][2] = hh(e, r[i][1], n), s.push(r[i][2]);
        break;
      case "PtgExp":
        n && n.biff == 12 && (r[i][1][1] = e.read_shift(4), s.push(r[i][1]));
        break;
      case "PtgList":
      case "PtgElfRadicalS":
      case "PtgElfColS":
      case "PtgElfColSV":
        throw "Unsupported " + r[i][0];
    }
  return a = t - e.l, a !== 0 && s.push(er(e, a)), s;
}
function rt(e, a, r) {
  for (var n = e.l + a, t, s, i = []; n != e.l; )
    a = n - e.l, s = e[e.l], t = gn[s] || gn[Hh[s]], (s === 24 || s === 25) && (t = (s === 24 ? Vh : Wh)[e[e.l + 1]]), !t || !t.f ? er(e, a) : i.push([t.n, t.f(e, a, r)]);
  return i;
}
function Gh(e) {
  for (var a = [], r = 0; r < e.length; ++r) {
    for (var n = e[r], t = [], s = 0; s < n.length; ++s) {
      var i = n[s];
      if (i)
        switch (i[0]) {
          case 2:
            t.push('"' + i[1].replace(/"/g, '""') + '"');
            break;
          default:
            t.push(i[1]);
        }
      else
        t.push("");
    }
    a.push(t.join(","));
  }
  return a.join(";");
}
var Xh = {
  PtgAdd: "+",
  PtgConcat: "&",
  PtgDiv: "/",
  PtgEq: "=",
  PtgGe: ">=",
  PtgGt: ">",
  PtgLe: "<=",
  PtgLt: "<",
  PtgMul: "*",
  PtgNe: "<>",
  PtgPower: "^",
  PtgSub: "-"
};
function $h(e, a) {
  if (!e && !(a && a.biff <= 5 && a.biff >= 2))
    throw new Error("empty sheet name");
  return /[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e) ? "'" + e + "'" : e;
}
function Ys(e, a, r) {
  if (!e)
    return "SH33TJSERR0";
  if (r.biff > 8 && (!e.XTI || !e.XTI[a]))
    return e.SheetNames[a];
  if (!e.XTI)
    return "SH33TJSERR6";
  var n = e.XTI[a];
  if (r.biff < 8)
    return a > 1e4 && (a -= 65536), a < 0 && (a = -a), a == 0 ? "" : e.XTI[a - 1];
  if (!n)
    return "SH33TJSERR1";
  var t = "";
  if (r.biff > 8)
    switch (e[n[0]][0]) {
      case 357:
        return t = n[1] == -1 ? "#REF" : e.SheetNames[n[1]], n[1] == n[2] ? t : t + ":" + e.SheetNames[n[2]];
      case 358:
        return r.SID != null ? e.SheetNames[r.SID] : "SH33TJSSAME" + e[n[0]][0];
      case 355:
      default:
        return "SH33TJSSRC" + e[n[0]][0];
    }
  switch (e[n[0]][0][0]) {
    case 1025:
      return t = n[1] == -1 ? "#REF" : e.SheetNames[n[1]] || "SH33TJSERR3", n[1] == n[2] ? t : t + ":" + e.SheetNames[n[2]];
    case 14849:
      return e[n[0]].slice(1).map(function(s) {
        return s.Name;
      }).join(";;");
    default:
      return e[n[0]][0][3] ? (t = n[1] == -1 ? "#REF" : e[n[0]][0][3][n[1]] || "SH33TJSERR4", n[1] == n[2] ? t : t + ":" + e[n[0]][0][3][n[2]]) : "SH33TJSERR2";
  }
}
function mn(e, a, r) {
  var n = Ys(e, a, r);
  return n == "#REF" ? n : $h(n, r);
}
function Je(e, a, r, n, t) {
  var s = t && t.biff || 8, i = (
    /*range != null ? range :*/
    { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } }
  ), c = [], f, l, o, h = 0, x = 0, d, v = "";
  if (!e[0] || !e[0][0])
    return "";
  for (var u = -1, g = "", S = 0, y = e[0].length; S < y; ++S) {
    var _ = e[0][S];
    switch (_[0]) {
      case "PtgUminus":
        c.push("-" + c.pop());
        break;
      case "PtgUplus":
        c.push("+" + c.pop());
        break;
      case "PtgPercent":
        c.push(c.pop() + "%");
        break;
      case "PtgAdd":
      case "PtgConcat":
      case "PtgDiv":
      case "PtgEq":
      case "PtgGe":
      case "PtgGt":
      case "PtgLe":
      case "PtgLt":
      case "PtgMul":
      case "PtgNe":
      case "PtgPower":
      case "PtgSub":
        if (f = c.pop(), l = c.pop(), u >= 0) {
          switch (e[0][u][1][0]) {
            case 0:
              g = Oe(" ", e[0][u][1][1]);
              break;
            case 1:
              g = Oe("\r", e[0][u][1][1]);
              break;
            default:
              if (g = "", t.WTF)
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][u][1][0]);
          }
          l = l + g, u = -1;
        }
        c.push(l + Xh[_[0]] + f);
        break;
      case "PtgIsect":
        f = c.pop(), l = c.pop(), c.push(l + " " + f);
        break;
      case "PtgUnion":
        f = c.pop(), l = c.pop(), c.push(l + "," + f);
        break;
      case "PtgRange":
        f = c.pop(), l = c.pop(), c.push(l + ":" + f);
        break;
      case "PtgAttrChoose":
        break;
      case "PtgAttrGoto":
        break;
      case "PtgAttrIf":
        break;
      case "PtgAttrIfError":
        break;
      case "PtgRef":
        o = Pa(_[1][1], i, t), c.push(La(o, s));
        break;
      case "PtgRefN":
        o = r ? Pa(_[1][1], r, t) : _[1][1], c.push(La(o, s));
        break;
      case "PtgRef3d":
        h = /*::Number(*/
        _[1][1], o = Pa(_[1][2], i, t), v = mn(n, h, t), c.push(v + "!" + La(o, s));
        break;
      case "PtgFunc":
      case "PtgFuncVar":
        var N = _[1][0], b = _[1][1];
        N || (N = 0), N &= 127;
        var I = N == 0 ? [] : c.slice(-N);
        c.length -= N, b === "User" && (b = I.shift()), c.push(b + "(" + I.join(",") + ")");
        break;
      case "PtgBool":
        c.push(_[1] ? "TRUE" : "FALSE");
        break;
      case "PtgInt":
        c.push(
          /*::String(*/
          _[1]
          /*::)*/
        );
        break;
      case "PtgNum":
        c.push(String(_[1]));
        break;
      case "PtgStr":
        c.push('"' + _[1].replace(/"/g, '""') + '"');
        break;
      case "PtgErr":
        c.push(
          /*::String(*/
          _[1]
          /*::)*/
        );
        break;
      case "PtgAreaN":
        d = Z0(_[1][1], r ? { s: r } : i, t), c.push(Rt(d, t));
        break;
      case "PtgArea":
        d = Z0(_[1][1], i, t), c.push(Rt(d, t));
        break;
      case "PtgArea3d":
        h = /*::Number(*/
        _[1][1], d = _[1][2], v = mn(n, h, t), c.push(v + "!" + Rt(d, t));
        break;
      case "PtgAttrSum":
        c.push("SUM(" + c.pop() + ")");
        break;
      case "PtgAttrBaxcel":
      case "PtgAttrSemi":
        break;
      case "PtgName":
        x = _[1][2];
        var F = (n.names || [])[x - 1] || (n[0] || [])[x], V = F ? F.Name : "SH33TJSNAME" + String(x);
        V && V.slice(0, 6) == "_xlfn." && !t.xlfn && (V = V.slice(6)), c.push(V);
        break;
      case "PtgNameX":
        var D = _[1][1];
        x = _[1][2];
        var z;
        if (t.biff <= 5)
          D < 0 && (D = -D), n[D] && (z = n[D][x]);
        else {
          var G = "";
          if (((n[D] || [])[0] || [])[0] == 14849 || (((n[D] || [])[0] || [])[0] == 1025 ? n[D][x] && n[D][x].itab > 0 && (G = n.SheetNames[n[D][x].itab - 1] + "!") : G = n.SheetNames[x - 1] + "!"), n[D] && n[D][x])
            G += n[D][x].Name;
          else if (n[0] && n[0][x])
            G += n[0][x].Name;
          else {
            var P = (Ys(n, D, t) || "").split(";;");
            P[x - 1] ? G = P[x - 1] : G += "SH33TJSERRX";
          }
          c.push(G);
          break;
        }
        z || (z = { Name: "SH33TJSERRY" }), c.push(z.Name);
        break;
      case "PtgParen":
        var J = "(", fe = ")";
        if (u >= 0) {
          switch (g = "", e[0][u][1][0]) {
            case 2:
              J = Oe(" ", e[0][u][1][1]) + J;
              break;
            case 3:
              J = Oe("\r", e[0][u][1][1]) + J;
              break;
            case 4:
              fe = Oe(" ", e[0][u][1][1]) + fe;
              break;
            case 5:
              fe = Oe("\r", e[0][u][1][1]) + fe;
              break;
            default:
              if (t.WTF)
                throw new Error("Unexpected PtgAttrSpaceType " + e[0][u][1][0]);
          }
          u = -1;
        }
        c.push(J + c.pop() + fe);
        break;
      case "PtgRefErr":
        c.push("#REF!");
        break;
      case "PtgRefErr3d":
        c.push("#REF!");
        break;
      case "PtgExp":
        o = { c: _[1][1], r: _[1][0] };
        var re = { c: r.c, r: r.r };
        if (n.sharedf[ue(o)]) {
          var ce = n.sharedf[ue(o)];
          c.push(Je(ce, i, re, n, t));
        } else {
          var ie = !1;
          for (f = 0; f != n.arrayf.length; ++f)
            if (l = n.arrayf[f], !(o.c < l[0].s.c || o.c > l[0].e.c) && !(o.r < l[0].s.r || o.r > l[0].e.r)) {
              c.push(Je(l[1], i, re, n, t)), ie = !0;
              break;
            }
          ie || c.push(
            /*::String(*/
            _[1]
            /*::)*/
          );
        }
        break;
      case "PtgArray":
        c.push("{" + Gh(
          /*::(*/
          _[1]
          /*:: :any)*/
        ) + "}");
        break;
      case "PtgMemArea":
        break;
      case "PtgAttrSpace":
      case "PtgAttrSpaceSemi":
        u = S;
        break;
      case "PtgTbl":
        break;
      case "PtgMemErr":
        break;
      case "PtgMissArg":
        c.push("");
        break;
      case "PtgAreaErr":
        c.push("#REF!");
        break;
      case "PtgAreaErr3d":
        c.push("#REF!");
        break;
      case "PtgList":
        c.push("Table" + _[1].idx + "[#" + _[1].rt + "]");
        break;
      case "PtgMemAreaN":
      case "PtgMemNoMemN":
      case "PtgAttrNoop":
      case "PtgSheet":
      case "PtgEndSheet":
        break;
      case "PtgMemFunc":
        break;
      case "PtgMemNoMem":
        break;
      case "PtgElfCol":
      case "PtgElfColS":
      case "PtgElfColSV":
      case "PtgElfColV":
      case "PtgElfLel":
      case "PtgElfRadical":
      case "PtgElfRadicalLel":
      case "PtgElfRadicalS":
      case "PtgElfRw":
      case "PtgElfRwV":
        throw new Error("Unsupported ELFs");
      case "PtgSxName":
        throw new Error("Unrecognized Formula Token: " + String(_));
      default:
        throw new Error("Unrecognized Formula Token: " + String(_));
    }
    var Se = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
    if (t.biff != 3 && u >= 0 && Se.indexOf(e[0][S][0]) == -1) {
      _ = e[0][u];
      var W = !0;
      switch (_[1][0]) {
        case 4:
          W = !1;
        case 0:
          g = Oe(" ", _[1][1]);
          break;
        case 5:
          W = !1;
        case 1:
          g = Oe("\r", _[1][1]);
          break;
        default:
          if (g = "", t.WTF)
            throw new Error("Unexpected PtgAttrSpaceType " + _[1][0]);
      }
      c.push((W ? g : "") + c.pop() + (W ? "" : g)), u = -1;
    }
  }
  if (c.length > 1 && t.WTF)
    throw new Error("bad formula stack");
  return c[0];
}
function zh(e, a, r) {
  var n = e.l + a, t = r.biff == 2 ? 1 : 2, s, i = e.read_shift(t);
  if (i == 65535)
    return [[], er(e, a - 2)];
  var c = rt(e, i, r);
  return a !== i + t && (s = et(e, a - i - t, c, r)), e.l = n, [c, s];
}
function jh(e, a, r) {
  var n = e.l + a, t = r.biff == 2 ? 1 : 2, s, i = e.read_shift(t);
  if (i == 65535)
    return [[], er(e, a - 2)];
  var c = rt(e, i, r);
  return a !== i + t && (s = et(e, a - i - t, c, r)), e.l = n, [c, s];
}
function Kh(e, a, r, n) {
  var t = e.l + a, s = rt(e, n, r), i;
  return t !== e.l && (i = et(e, t - e.l, s, r)), [s, i];
}
function Yh(e, a, r) {
  var n = e.l + a, t, s = e.read_shift(2), i = rt(e, s, r);
  return s == 65535 ? [[], er(e, a - 2)] : (a !== s + 2 && (t = et(e, n - s - 2, i, r)), [i, t]);
}
function Jh(e) {
  var a;
  if (Mr(e, e.l + 6) !== 65535)
    return [Ze(e), "n"];
  switch (e[e.l]) {
    case 0:
      return e.l += 8, ["String", "s"];
    case 1:
      return a = e[e.l + 2] === 1, e.l += 8, [a, "b"];
    case 2:
      return a = e[e.l + 2], e.l += 8, [a, "e"];
    case 3:
      return e.l += 8, ["", "s"];
  }
  return [];
}
function Pt(e, a, r) {
  var n = e.l + a, t = Ir(e);
  r.biff == 2 && ++e.l;
  var s = Jh(e), i = e.read_shift(1);
  r.biff != 2 && (e.read_shift(1), r.biff >= 5 && e.read_shift(4));
  var c = jh(e, n - e.l, r);
  return { cell: t, val: s[0], formula: c, shared: i >> 3 & 1, tt: s[1] };
}
function At(e, a, r) {
  var n = e.read_shift(4), t = rt(e, n, r), s = e.read_shift(4), i = s > 0 ? et(e, s, t, r) : null;
  return [t, i];
}
var Zh = At, St = At, qh = At, Qh = At, eu = {
  0: "BEEP",
  1: "OPEN",
  2: "OPEN.LINKS",
  3: "CLOSE.ALL",
  4: "SAVE",
  5: "SAVE.AS",
  6: "FILE.DELETE",
  7: "PAGE.SETUP",
  8: "PRINT",
  9: "PRINTER.SETUP",
  10: "QUIT",
  11: "NEW.WINDOW",
  12: "ARRANGE.ALL",
  13: "WINDOW.SIZE",
  14: "WINDOW.MOVE",
  15: "FULL",
  16: "CLOSE",
  17: "RUN",
  22: "SET.PRINT.AREA",
  23: "SET.PRINT.TITLES",
  24: "SET.PAGE.BREAK",
  25: "REMOVE.PAGE.BREAK",
  26: "FONT",
  27: "DISPLAY",
  28: "PROTECT.DOCUMENT",
  29: "PRECISION",
  30: "A1.R1C1",
  31: "CALCULATE.NOW",
  32: "CALCULATION",
  34: "DATA.FIND",
  35: "EXTRACT",
  36: "DATA.DELETE",
  37: "SET.DATABASE",
  38: "SET.CRITERIA",
  39: "SORT",
  40: "DATA.SERIES",
  41: "TABLE",
  42: "FORMAT.NUMBER",
  43: "ALIGNMENT",
  44: "STYLE",
  45: "BORDER",
  46: "CELL.PROTECTION",
  47: "COLUMN.WIDTH",
  48: "UNDO",
  49: "CUT",
  50: "COPY",
  51: "PASTE",
  52: "CLEAR",
  53: "PASTE.SPECIAL",
  54: "EDIT.DELETE",
  55: "INSERT",
  56: "FILL.RIGHT",
  57: "FILL.DOWN",
  61: "DEFINE.NAME",
  62: "CREATE.NAMES",
  63: "FORMULA.GOTO",
  64: "FORMULA.FIND",
  65: "SELECT.LAST.CELL",
  66: "SHOW.ACTIVE.CELL",
  67: "GALLERY.AREA",
  68: "GALLERY.BAR",
  69: "GALLERY.COLUMN",
  70: "GALLERY.LINE",
  71: "GALLERY.PIE",
  72: "GALLERY.SCATTER",
  73: "COMBINATION",
  74: "PREFERRED",
  75: "ADD.OVERLAY",
  76: "GRIDLINES",
  77: "SET.PREFERRED",
  78: "AXES",
  79: "LEGEND",
  80: "ATTACH.TEXT",
  81: "ADD.ARROW",
  82: "SELECT.CHART",
  83: "SELECT.PLOT.AREA",
  84: "PATTERNS",
  85: "MAIN.CHART",
  86: "OVERLAY",
  87: "SCALE",
  88: "FORMAT.LEGEND",
  89: "FORMAT.TEXT",
  90: "EDIT.REPEAT",
  91: "PARSE",
  92: "JUSTIFY",
  93: "HIDE",
  94: "UNHIDE",
  95: "WORKSPACE",
  96: "FORMULA",
  97: "FORMULA.FILL",
  98: "FORMULA.ARRAY",
  99: "DATA.FIND.NEXT",
  100: "DATA.FIND.PREV",
  101: "FORMULA.FIND.NEXT",
  102: "FORMULA.FIND.PREV",
  103: "ACTIVATE",
  104: "ACTIVATE.NEXT",
  105: "ACTIVATE.PREV",
  106: "UNLOCKED.NEXT",
  107: "UNLOCKED.PREV",
  108: "COPY.PICTURE",
  109: "SELECT",
  110: "DELETE.NAME",
  111: "DELETE.FORMAT",
  112: "VLINE",
  113: "HLINE",
  114: "VPAGE",
  115: "HPAGE",
  116: "VSCROLL",
  117: "HSCROLL",
  118: "ALERT",
  119: "NEW",
  120: "CANCEL.COPY",
  121: "SHOW.CLIPBOARD",
  122: "MESSAGE",
  124: "PASTE.LINK",
  125: "APP.ACTIVATE",
  126: "DELETE.ARROW",
  127: "ROW.HEIGHT",
  128: "FORMAT.MOVE",
  129: "FORMAT.SIZE",
  130: "FORMULA.REPLACE",
  131: "SEND.KEYS",
  132: "SELECT.SPECIAL",
  133: "APPLY.NAMES",
  134: "REPLACE.FONT",
  135: "FREEZE.PANES",
  136: "SHOW.INFO",
  137: "SPLIT",
  138: "ON.WINDOW",
  139: "ON.DATA",
  140: "DISABLE.INPUT",
  142: "OUTLINE",
  143: "LIST.NAMES",
  144: "FILE.CLOSE",
  145: "SAVE.WORKBOOK",
  146: "DATA.FORM",
  147: "COPY.CHART",
  148: "ON.TIME",
  149: "WAIT",
  150: "FORMAT.FONT",
  151: "FILL.UP",
  152: "FILL.LEFT",
  153: "DELETE.OVERLAY",
  155: "SHORT.MENUS",
  159: "SET.UPDATE.STATUS",
  161: "COLOR.PALETTE",
  162: "DELETE.STYLE",
  163: "WINDOW.RESTORE",
  164: "WINDOW.MAXIMIZE",
  166: "CHANGE.LINK",
  167: "CALCULATE.DOCUMENT",
  168: "ON.KEY",
  169: "APP.RESTORE",
  170: "APP.MOVE",
  171: "APP.SIZE",
  172: "APP.MINIMIZE",
  173: "APP.MAXIMIZE",
  174: "BRING.TO.FRONT",
  175: "SEND.TO.BACK",
  185: "MAIN.CHART.TYPE",
  186: "OVERLAY.CHART.TYPE",
  187: "SELECT.END",
  188: "OPEN.MAIL",
  189: "SEND.MAIL",
  190: "STANDARD.FONT",
  191: "CONSOLIDATE",
  192: "SORT.SPECIAL",
  193: "GALLERY.3D.AREA",
  194: "GALLERY.3D.COLUMN",
  195: "GALLERY.3D.LINE",
  196: "GALLERY.3D.PIE",
  197: "VIEW.3D",
  198: "GOAL.SEEK",
  199: "WORKGROUP",
  200: "FILL.GROUP",
  201: "UPDATE.LINK",
  202: "PROMOTE",
  203: "DEMOTE",
  204: "SHOW.DETAIL",
  206: "UNGROUP",
  207: "OBJECT.PROPERTIES",
  208: "SAVE.NEW.OBJECT",
  209: "SHARE",
  210: "SHARE.NAME",
  211: "DUPLICATE",
  212: "APPLY.STYLE",
  213: "ASSIGN.TO.OBJECT",
  214: "OBJECT.PROTECTION",
  215: "HIDE.OBJECT",
  216: "SET.EXTRACT",
  217: "CREATE.PUBLISHER",
  218: "SUBSCRIBE.TO",
  219: "ATTRIBUTES",
  220: "SHOW.TOOLBAR",
  222: "PRINT.PREVIEW",
  223: "EDIT.COLOR",
  224: "SHOW.LEVELS",
  225: "FORMAT.MAIN",
  226: "FORMAT.OVERLAY",
  227: "ON.RECALC",
  228: "EDIT.SERIES",
  229: "DEFINE.STYLE",
  240: "LINE.PRINT",
  243: "ENTER.DATA",
  249: "GALLERY.RADAR",
  250: "MERGE.STYLES",
  251: "EDITION.OPTIONS",
  252: "PASTE.PICTURE",
  253: "PASTE.PICTURE.LINK",
  254: "SPELLING",
  256: "ZOOM",
  259: "INSERT.OBJECT",
  260: "WINDOW.MINIMIZE",
  265: "SOUND.NOTE",
  266: "SOUND.PLAY",
  267: "FORMAT.SHAPE",
  268: "EXTEND.POLYGON",
  269: "FORMAT.AUTO",
  272: "GALLERY.3D.BAR",
  273: "GALLERY.3D.SURFACE",
  274: "FILL.AUTO",
  276: "CUSTOMIZE.TOOLBAR",
  277: "ADD.TOOL",
  278: "EDIT.OBJECT",
  279: "ON.DOUBLECLICK",
  280: "ON.ENTRY",
  281: "WORKBOOK.ADD",
  282: "WORKBOOK.MOVE",
  283: "WORKBOOK.COPY",
  284: "WORKBOOK.OPTIONS",
  285: "SAVE.WORKSPACE",
  288: "CHART.WIZARD",
  289: "DELETE.TOOL",
  290: "MOVE.TOOL",
  291: "WORKBOOK.SELECT",
  292: "WORKBOOK.ACTIVATE",
  293: "ASSIGN.TO.TOOL",
  295: "COPY.TOOL",
  296: "RESET.TOOL",
  297: "CONSTRAIN.NUMERIC",
  298: "PASTE.TOOL",
  302: "WORKBOOK.NEW",
  305: "SCENARIO.CELLS",
  306: "SCENARIO.DELETE",
  307: "SCENARIO.ADD",
  308: "SCENARIO.EDIT",
  309: "SCENARIO.SHOW",
  310: "SCENARIO.SHOW.NEXT",
  311: "SCENARIO.SUMMARY",
  312: "PIVOT.TABLE.WIZARD",
  313: "PIVOT.FIELD.PROPERTIES",
  314: "PIVOT.FIELD",
  315: "PIVOT.ITEM",
  316: "PIVOT.ADD.FIELDS",
  318: "OPTIONS.CALCULATION",
  319: "OPTIONS.EDIT",
  320: "OPTIONS.VIEW",
  321: "ADDIN.MANAGER",
  322: "MENU.EDITOR",
  323: "ATTACH.TOOLBARS",
  324: "VBAActivate",
  325: "OPTIONS.CHART",
  328: "VBA.INSERT.FILE",
  330: "VBA.PROCEDURE.DEFINITION",
  336: "ROUTING.SLIP",
  338: "ROUTE.DOCUMENT",
  339: "MAIL.LOGON",
  342: "INSERT.PICTURE",
  343: "EDIT.TOOL",
  344: "GALLERY.DOUGHNUT",
  350: "CHART.TREND",
  352: "PIVOT.ITEM.PROPERTIES",
  354: "WORKBOOK.INSERT",
  355: "OPTIONS.TRANSITION",
  356: "OPTIONS.GENERAL",
  370: "FILTER.ADVANCED",
  373: "MAIL.ADD.MAILER",
  374: "MAIL.DELETE.MAILER",
  375: "MAIL.REPLY",
  376: "MAIL.REPLY.ALL",
  377: "MAIL.FORWARD",
  378: "MAIL.NEXT.LETTER",
  379: "DATA.LABEL",
  380: "INSERT.TITLE",
  381: "FONT.PROPERTIES",
  382: "MACRO.OPTIONS",
  383: "WORKBOOK.HIDE",
  384: "WORKBOOK.UNHIDE",
  385: "WORKBOOK.DELETE",
  386: "WORKBOOK.NAME",
  388: "GALLERY.CUSTOM",
  390: "ADD.CHART.AUTOFORMAT",
  391: "DELETE.CHART.AUTOFORMAT",
  392: "CHART.ADD.DATA",
  393: "AUTO.OUTLINE",
  394: "TAB.ORDER",
  395: "SHOW.DIALOG",
  396: "SELECT.ALL",
  397: "UNGROUP.SHEETS",
  398: "SUBTOTAL.CREATE",
  399: "SUBTOTAL.REMOVE",
  400: "RENAME.OBJECT",
  412: "WORKBOOK.SCROLL",
  413: "WORKBOOK.NEXT",
  414: "WORKBOOK.PREV",
  415: "WORKBOOK.TAB.SPLIT",
  416: "FULL.SCREEN",
  417: "WORKBOOK.PROTECT",
  420: "SCROLLBAR.PROPERTIES",
  421: "PIVOT.SHOW.PAGES",
  422: "TEXT.TO.COLUMNS",
  423: "FORMAT.CHARTTYPE",
  424: "LINK.FORMAT",
  425: "TRACER.DISPLAY",
  430: "TRACER.NAVIGATE",
  431: "TRACER.CLEAR",
  432: "TRACER.ERROR",
  433: "PIVOT.FIELD.GROUP",
  434: "PIVOT.FIELD.UNGROUP",
  435: "CHECKBOX.PROPERTIES",
  436: "LABEL.PROPERTIES",
  437: "LISTBOX.PROPERTIES",
  438: "EDITBOX.PROPERTIES",
  439: "PIVOT.REFRESH",
  440: "LINK.COMBO",
  441: "OPEN.TEXT",
  442: "HIDE.DIALOG",
  443: "SET.DIALOG.FOCUS",
  444: "ENABLE.OBJECT",
  445: "PUSHBUTTON.PROPERTIES",
  446: "SET.DIALOG.DEFAULT",
  447: "FILTER",
  448: "FILTER.SHOW.ALL",
  449: "CLEAR.OUTLINE",
  450: "FUNCTION.WIZARD",
  451: "ADD.LIST.ITEM",
  452: "SET.LIST.ITEM",
  453: "REMOVE.LIST.ITEM",
  454: "SELECT.LIST.ITEM",
  455: "SET.CONTROL.VALUE",
  456: "SAVE.COPY.AS",
  458: "OPTIONS.LISTS.ADD",
  459: "OPTIONS.LISTS.DELETE",
  460: "SERIES.AXES",
  461: "SERIES.X",
  462: "SERIES.Y",
  463: "ERRORBAR.X",
  464: "ERRORBAR.Y",
  465: "FORMAT.CHART",
  466: "SERIES.ORDER",
  467: "MAIL.LOGOFF",
  468: "CLEAR.ROUTING.SLIP",
  469: "APP.ACTIVATE.MICROSOFT",
  470: "MAIL.EDIT.MAILER",
  471: "ON.SHEET",
  472: "STANDARD.WIDTH",
  473: "SCENARIO.MERGE",
  474: "SUMMARY.INFO",
  475: "FIND.FILE",
  476: "ACTIVE.CELL.FONT",
  477: "ENABLE.TIPWIZARD",
  478: "VBA.MAKE.ADDIN",
  480: "INSERTDATATABLE",
  481: "WORKGROUP.OPTIONS",
  482: "MAIL.SEND.MAILER",
  485: "AUTOCORRECT",
  489: "POST.DOCUMENT",
  491: "PICKLIST",
  493: "VIEW.SHOW",
  494: "VIEW.DEFINE",
  495: "VIEW.DELETE",
  509: "SHEET.BACKGROUND",
  510: "INSERT.MAP.OBJECT",
  511: "OPTIONS.MENONO",
  517: "MSOCHECKS",
  518: "NORMAL",
  519: "LAYOUT",
  520: "RM.PRINT.AREA",
  521: "CLEAR.PRINT.AREA",
  522: "ADD.PRINT.AREA",
  523: "MOVE.BRK",
  545: "HIDECURR.NOTE",
  546: "HIDEALL.NOTES",
  547: "DELETE.NOTE",
  548: "TRAVERSE.NOTES",
  549: "ACTIVATE.NOTES",
  620: "PROTECT.REVISIONS",
  621: "UNPROTECT.REVISIONS",
  647: "OPTIONS.ME",
  653: "WEB.PUBLISH",
  667: "NEWWEBQUERY",
  673: "PIVOT.TABLE.CHART",
  753: "OPTIONS.SAVE",
  755: "OPTIONS.SPELL",
  808: "HIDEALL.INKANNOTS"
}, Js = {
  0: "COUNT",
  1: "IF",
  2: "ISNA",
  3: "ISERROR",
  4: "SUM",
  5: "AVERAGE",
  6: "MIN",
  7: "MAX",
  8: "ROW",
  9: "COLUMN",
  10: "NA",
  11: "NPV",
  12: "STDEV",
  13: "DOLLAR",
  14: "FIXED",
  15: "SIN",
  16: "COS",
  17: "TAN",
  18: "ATAN",
  19: "PI",
  20: "SQRT",
  21: "EXP",
  22: "LN",
  23: "LOG10",
  24: "ABS",
  25: "INT",
  26: "SIGN",
  27: "ROUND",
  28: "LOOKUP",
  29: "INDEX",
  30: "REPT",
  31: "MID",
  32: "LEN",
  33: "VALUE",
  34: "TRUE",
  35: "FALSE",
  36: "AND",
  37: "OR",
  38: "NOT",
  39: "MOD",
  40: "DCOUNT",
  41: "DSUM",
  42: "DAVERAGE",
  43: "DMIN",
  44: "DMAX",
  45: "DSTDEV",
  46: "VAR",
  47: "DVAR",
  48: "TEXT",
  49: "LINEST",
  50: "TREND",
  51: "LOGEST",
  52: "GROWTH",
  53: "GOTO",
  54: "HALT",
  55: "RETURN",
  56: "PV",
  57: "FV",
  58: "NPER",
  59: "PMT",
  60: "RATE",
  61: "MIRR",
  62: "IRR",
  63: "RAND",
  64: "MATCH",
  65: "DATE",
  66: "TIME",
  67: "DAY",
  68: "MONTH",
  69: "YEAR",
  70: "WEEKDAY",
  71: "HOUR",
  72: "MINUTE",
  73: "SECOND",
  74: "NOW",
  75: "AREAS",
  76: "ROWS",
  77: "COLUMNS",
  78: "OFFSET",
  79: "ABSREF",
  80: "RELREF",
  81: "ARGUMENT",
  82: "SEARCH",
  83: "TRANSPOSE",
  84: "ERROR",
  85: "STEP",
  86: "TYPE",
  87: "ECHO",
  88: "SET.NAME",
  89: "CALLER",
  90: "DEREF",
  91: "WINDOWS",
  92: "SERIES",
  93: "DOCUMENTS",
  94: "ACTIVE.CELL",
  95: "SELECTION",
  96: "RESULT",
  97: "ATAN2",
  98: "ASIN",
  99: "ACOS",
  100: "CHOOSE",
  101: "HLOOKUP",
  102: "VLOOKUP",
  103: "LINKS",
  104: "INPUT",
  105: "ISREF",
  106: "GET.FORMULA",
  107: "GET.NAME",
  108: "SET.VALUE",
  109: "LOG",
  110: "EXEC",
  111: "CHAR",
  112: "LOWER",
  113: "UPPER",
  114: "PROPER",
  115: "LEFT",
  116: "RIGHT",
  117: "EXACT",
  118: "TRIM",
  119: "REPLACE",
  120: "SUBSTITUTE",
  121: "CODE",
  122: "NAMES",
  123: "DIRECTORY",
  124: "FIND",
  125: "CELL",
  126: "ISERR",
  127: "ISTEXT",
  128: "ISNUMBER",
  129: "ISBLANK",
  130: "T",
  131: "N",
  132: "FOPEN",
  133: "FCLOSE",
  134: "FSIZE",
  135: "FREADLN",
  136: "FREAD",
  137: "FWRITELN",
  138: "FWRITE",
  139: "FPOS",
  140: "DATEVALUE",
  141: "TIMEVALUE",
  142: "SLN",
  143: "SYD",
  144: "DDB",
  145: "GET.DEF",
  146: "REFTEXT",
  147: "TEXTREF",
  148: "INDIRECT",
  149: "REGISTER",
  150: "CALL",
  151: "ADD.BAR",
  152: "ADD.MENU",
  153: "ADD.COMMAND",
  154: "ENABLE.COMMAND",
  155: "CHECK.COMMAND",
  156: "RENAME.COMMAND",
  157: "SHOW.BAR",
  158: "DELETE.MENU",
  159: "DELETE.COMMAND",
  160: "GET.CHART.ITEM",
  161: "DIALOG.BOX",
  162: "CLEAN",
  163: "MDETERM",
  164: "MINVERSE",
  165: "MMULT",
  166: "FILES",
  167: "IPMT",
  168: "PPMT",
  169: "COUNTA",
  170: "CANCEL.KEY",
  171: "FOR",
  172: "WHILE",
  173: "BREAK",
  174: "NEXT",
  175: "INITIATE",
  176: "REQUEST",
  177: "POKE",
  178: "EXECUTE",
  179: "TERMINATE",
  180: "RESTART",
  181: "HELP",
  182: "GET.BAR",
  183: "PRODUCT",
  184: "FACT",
  185: "GET.CELL",
  186: "GET.WORKSPACE",
  187: "GET.WINDOW",
  188: "GET.DOCUMENT",
  189: "DPRODUCT",
  190: "ISNONTEXT",
  191: "GET.NOTE",
  192: "NOTE",
  193: "STDEVP",
  194: "VARP",
  195: "DSTDEVP",
  196: "DVARP",
  197: "TRUNC",
  198: "ISLOGICAL",
  199: "DCOUNTA",
  200: "DELETE.BAR",
  201: "UNREGISTER",
  204: "USDOLLAR",
  205: "FINDB",
  206: "SEARCHB",
  207: "REPLACEB",
  208: "LEFTB",
  209: "RIGHTB",
  210: "MIDB",
  211: "LENB",
  212: "ROUNDUP",
  213: "ROUNDDOWN",
  214: "ASC",
  215: "DBCS",
  216: "RANK",
  219: "ADDRESS",
  220: "DAYS360",
  221: "TODAY",
  222: "VDB",
  223: "ELSE",
  224: "ELSE.IF",
  225: "END.IF",
  226: "FOR.CELL",
  227: "MEDIAN",
  228: "SUMPRODUCT",
  229: "SINH",
  230: "COSH",
  231: "TANH",
  232: "ASINH",
  233: "ACOSH",
  234: "ATANH",
  235: "DGET",
  236: "CREATE.OBJECT",
  237: "VOLATILE",
  238: "LAST.ERROR",
  239: "CUSTOM.UNDO",
  240: "CUSTOM.REPEAT",
  241: "FORMULA.CONVERT",
  242: "GET.LINK.INFO",
  243: "TEXT.BOX",
  244: "INFO",
  245: "GROUP",
  246: "GET.OBJECT",
  247: "DB",
  248: "PAUSE",
  251: "RESUME",
  252: "FREQUENCY",
  253: "ADD.TOOLBAR",
  254: "DELETE.TOOLBAR",
  255: "User",
  256: "RESET.TOOLBAR",
  257: "EVALUATE",
  258: "GET.TOOLBAR",
  259: "GET.TOOL",
  260: "SPELLING.CHECK",
  261: "ERROR.TYPE",
  262: "APP.TITLE",
  263: "WINDOW.TITLE",
  264: "SAVE.TOOLBAR",
  265: "ENABLE.TOOL",
  266: "PRESS.TOOL",
  267: "REGISTER.ID",
  268: "GET.WORKBOOK",
  269: "AVEDEV",
  270: "BETADIST",
  271: "GAMMALN",
  272: "BETAINV",
  273: "BINOMDIST",
  274: "CHIDIST",
  275: "CHIINV",
  276: "COMBIN",
  277: "CONFIDENCE",
  278: "CRITBINOM",
  279: "EVEN",
  280: "EXPONDIST",
  281: "FDIST",
  282: "FINV",
  283: "FISHER",
  284: "FISHERINV",
  285: "FLOOR",
  286: "GAMMADIST",
  287: "GAMMAINV",
  288: "CEILING",
  289: "HYPGEOMDIST",
  290: "LOGNORMDIST",
  291: "LOGINV",
  292: "NEGBINOMDIST",
  293: "NORMDIST",
  294: "NORMSDIST",
  295: "NORMINV",
  296: "NORMSINV",
  297: "STANDARDIZE",
  298: "ODD",
  299: "PERMUT",
  300: "POISSON",
  301: "TDIST",
  302: "WEIBULL",
  303: "SUMXMY2",
  304: "SUMX2MY2",
  305: "SUMX2PY2",
  306: "CHITEST",
  307: "CORREL",
  308: "COVAR",
  309: "FORECAST",
  310: "FTEST",
  311: "INTERCEPT",
  312: "PEARSON",
  313: "RSQ",
  314: "STEYX",
  315: "SLOPE",
  316: "TTEST",
  317: "PROB",
  318: "DEVSQ",
  319: "GEOMEAN",
  320: "HARMEAN",
  321: "SUMSQ",
  322: "KURT",
  323: "SKEW",
  324: "ZTEST",
  325: "LARGE",
  326: "SMALL",
  327: "QUARTILE",
  328: "PERCENTILE",
  329: "PERCENTRANK",
  330: "MODE",
  331: "TRIMMEAN",
  332: "TINV",
  334: "MOVIE.COMMAND",
  335: "GET.MOVIE",
  336: "CONCATENATE",
  337: "POWER",
  338: "PIVOT.ADD.DATA",
  339: "GET.PIVOT.TABLE",
  340: "GET.PIVOT.FIELD",
  341: "GET.PIVOT.ITEM",
  342: "RADIANS",
  343: "DEGREES",
  344: "SUBTOTAL",
  345: "SUMIF",
  346: "COUNTIF",
  347: "COUNTBLANK",
  348: "SCENARIO.GET",
  349: "OPTIONS.LISTS.GET",
  350: "ISPMT",
  351: "DATEDIF",
  352: "DATESTRING",
  353: "NUMBERSTRING",
  354: "ROMAN",
  355: "OPEN.DIALOG",
  356: "SAVE.DIALOG",
  357: "VIEW.GET",
  358: "GETPIVOTDATA",
  359: "HYPERLINK",
  360: "PHONETIC",
  361: "AVERAGEA",
  362: "MAXA",
  363: "MINA",
  364: "STDEVPA",
  365: "VARPA",
  366: "STDEVA",
  367: "VARA",
  368: "BAHTTEXT",
  369: "THAIDAYOFWEEK",
  370: "THAIDIGIT",
  371: "THAIMONTHOFYEAR",
  372: "THAINUMSOUND",
  373: "THAINUMSTRING",
  374: "THAISTRINGLENGTH",
  375: "ISTHAIDIGIT",
  376: "ROUNDBAHTDOWN",
  377: "ROUNDBAHTUP",
  378: "THAIYEAR",
  379: "RTD",
  380: "CUBEVALUE",
  381: "CUBEMEMBER",
  382: "CUBEMEMBERPROPERTY",
  383: "CUBERANKEDMEMBER",
  384: "HEX2BIN",
  385: "HEX2DEC",
  386: "HEX2OCT",
  387: "DEC2BIN",
  388: "DEC2HEX",
  389: "DEC2OCT",
  390: "OCT2BIN",
  391: "OCT2HEX",
  392: "OCT2DEC",
  393: "BIN2DEC",
  394: "BIN2OCT",
  395: "BIN2HEX",
  396: "IMSUB",
  397: "IMDIV",
  398: "IMPOWER",
  399: "IMABS",
  400: "IMSQRT",
  401: "IMLN",
  402: "IMLOG2",
  403: "IMLOG10",
  404: "IMSIN",
  405: "IMCOS",
  406: "IMEXP",
  407: "IMARGUMENT",
  408: "IMCONJUGATE",
  409: "IMAGINARY",
  410: "IMREAL",
  411: "COMPLEX",
  412: "IMSUM",
  413: "IMPRODUCT",
  414: "SERIESSUM",
  415: "FACTDOUBLE",
  416: "SQRTPI",
  417: "QUOTIENT",
  418: "DELTA",
  419: "GESTEP",
  420: "ISEVEN",
  421: "ISODD",
  422: "MROUND",
  423: "ERF",
  424: "ERFC",
  425: "BESSELJ",
  426: "BESSELK",
  427: "BESSELY",
  428: "BESSELI",
  429: "XIRR",
  430: "XNPV",
  431: "PRICEMAT",
  432: "YIELDMAT",
  433: "INTRATE",
  434: "RECEIVED",
  435: "DISC",
  436: "PRICEDISC",
  437: "YIELDDISC",
  438: "TBILLEQ",
  439: "TBILLPRICE",
  440: "TBILLYIELD",
  441: "PRICE",
  442: "YIELD",
  443: "DOLLARDE",
  444: "DOLLARFR",
  445: "NOMINAL",
  446: "EFFECT",
  447: "CUMPRINC",
  448: "CUMIPMT",
  449: "EDATE",
  450: "EOMONTH",
  451: "YEARFRAC",
  452: "COUPDAYBS",
  453: "COUPDAYS",
  454: "COUPDAYSNC",
  455: "COUPNCD",
  456: "COUPNUM",
  457: "COUPPCD",
  458: "DURATION",
  459: "MDURATION",
  460: "ODDLPRICE",
  461: "ODDLYIELD",
  462: "ODDFPRICE",
  463: "ODDFYIELD",
  464: "RANDBETWEEN",
  465: "WEEKNUM",
  466: "AMORDEGRC",
  467: "AMORLINC",
  468: "CONVERT",
  724: "SHEETJS",
  469: "ACCRINT",
  470: "ACCRINTM",
  471: "WORKDAY",
  472: "NETWORKDAYS",
  473: "GCD",
  474: "MULTINOMIAL",
  475: "LCM",
  476: "FVSCHEDULE",
  477: "CUBEKPIMEMBER",
  478: "CUBESET",
  479: "CUBESETCOUNT",
  480: "IFERROR",
  481: "COUNTIFS",
  482: "SUMIFS",
  483: "AVERAGEIF",
  484: "AVERAGEIFS"
}, ru = {
  2: 1,
  3: 1,
  10: 0,
  15: 1,
  16: 1,
  17: 1,
  18: 1,
  19: 0,
  20: 1,
  21: 1,
  22: 1,
  23: 1,
  24: 1,
  25: 1,
  26: 1,
  27: 2,
  30: 2,
  31: 3,
  32: 1,
  33: 1,
  34: 0,
  35: 0,
  38: 1,
  39: 2,
  40: 3,
  41: 3,
  42: 3,
  43: 3,
  44: 3,
  45: 3,
  47: 3,
  48: 2,
  53: 1,
  61: 3,
  63: 0,
  65: 3,
  66: 3,
  67: 1,
  68: 1,
  69: 1,
  70: 1,
  71: 1,
  72: 1,
  73: 1,
  74: 0,
  75: 1,
  76: 1,
  77: 1,
  79: 2,
  80: 2,
  83: 1,
  85: 0,
  86: 1,
  89: 0,
  90: 1,
  94: 0,
  95: 0,
  97: 2,
  98: 1,
  99: 1,
  101: 3,
  102: 3,
  105: 1,
  106: 1,
  108: 2,
  111: 1,
  112: 1,
  113: 1,
  114: 1,
  117: 2,
  118: 1,
  119: 4,
  121: 1,
  126: 1,
  127: 1,
  128: 1,
  129: 1,
  130: 1,
  131: 1,
  133: 1,
  134: 1,
  135: 1,
  136: 2,
  137: 2,
  138: 2,
  140: 1,
  141: 1,
  142: 3,
  143: 4,
  144: 4,
  161: 1,
  162: 1,
  163: 1,
  164: 1,
  165: 2,
  172: 1,
  175: 2,
  176: 2,
  177: 3,
  178: 2,
  179: 1,
  184: 1,
  186: 1,
  189: 3,
  190: 1,
  195: 3,
  196: 3,
  197: 1,
  198: 1,
  199: 3,
  201: 1,
  207: 4,
  210: 3,
  211: 1,
  212: 2,
  213: 2,
  214: 1,
  215: 1,
  225: 0,
  229: 1,
  230: 1,
  231: 1,
  232: 1,
  233: 1,
  234: 1,
  235: 3,
  244: 1,
  247: 4,
  252: 2,
  257: 1,
  261: 1,
  271: 1,
  273: 4,
  274: 2,
  275: 2,
  276: 2,
  277: 3,
  278: 3,
  279: 1,
  280: 3,
  281: 3,
  282: 3,
  283: 1,
  284: 1,
  285: 2,
  286: 4,
  287: 3,
  288: 2,
  289: 4,
  290: 3,
  291: 3,
  292: 3,
  293: 4,
  294: 1,
  295: 3,
  296: 1,
  297: 3,
  298: 1,
  299: 2,
  300: 3,
  301: 3,
  302: 4,
  303: 2,
  304: 2,
  305: 2,
  306: 2,
  307: 2,
  308: 2,
  309: 3,
  310: 2,
  311: 2,
  312: 2,
  313: 2,
  314: 2,
  315: 2,
  316: 4,
  325: 2,
  326: 2,
  327: 2,
  328: 2,
  331: 2,
  332: 2,
  337: 2,
  342: 1,
  343: 1,
  346: 2,
  347: 1,
  350: 4,
  351: 3,
  352: 1,
  353: 2,
  360: 1,
  368: 1,
  369: 1,
  370: 1,
  371: 1,
  372: 1,
  373: 1,
  374: 1,
  375: 1,
  376: 1,
  377: 1,
  378: 1,
  382: 3,
  385: 1,
  392: 1,
  393: 1,
  396: 2,
  397: 2,
  398: 2,
  399: 1,
  400: 1,
  401: 1,
  402: 1,
  403: 1,
  404: 1,
  405: 1,
  406: 1,
  407: 1,
  408: 1,
  409: 1,
  410: 1,
  414: 4,
  415: 1,
  416: 1,
  417: 2,
  420: 1,
  421: 1,
  422: 2,
  424: 1,
  425: 2,
  426: 2,
  427: 2,
  428: 2,
  430: 3,
  438: 3,
  439: 3,
  440: 3,
  443: 2,
  444: 2,
  445: 2,
  446: 2,
  447: 6,
  448: 6,
  449: 2,
  450: 2,
  464: 2,
  468: 3,
  476: 2,
  479: 1,
  480: 2,
  65535: 0
};
function _n(e) {
  return e.slice(0, 3) == "of:" && (e = e.slice(3)), e.charCodeAt(0) == 61 && (e = e.slice(1), e.charCodeAt(0) == 61 && (e = e.slice(1))), e = e.replace(/COM\.MICROSOFT\./g, ""), e = e.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g, function(a, r) {
    return r.replace(/\./g, "");
  }), e = e.replace(/\[.(#[A-Z]*[?!])\]/g, "$1"), e.replace(/[;~]/g, ",").replace(/\|/g, ";");
}
function Lt(e) {
  var a = e.split(":"), r = a[0].split(".")[0];
  return [r, a[0].split(".")[1] + (a.length > 1 ? ":" + (a[1].split(".")[1] || a[1].split(".")[0]) : "")];
}
var Ua = {}, ma = {};
function Ha(e, a) {
  if (e) {
    var r = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
    a == "xlml" && (r = [1, 1, 1, 1, 0.5, 0.5]), e.left == null && (e.left = r[0]), e.right == null && (e.right = r[1]), e.top == null && (e.top = r[2]), e.bottom == null && (e.bottom = r[3]), e.header == null && (e.header = r[4]), e.footer == null && (e.footer = r[5]);
  }
}
function Zs(e, a, r, n, t, s) {
  try {
    n.cellNF && (e.z = de[a]);
  } catch (c) {
    if (n.WTF)
      throw c;
  }
  if (!(e.t === "z" && !n.cellStyles)) {
    if (e.t === "d" && typeof e.v == "string" && (e.v = Xe(e.v)), (!n || n.cellText !== !1) && e.t !== "z")
      try {
        if (de[a] == null && aa(rc[a] || "General", a), e.t === "e")
          e.w = e.w || ha[e.v];
        else if (a === 0)
          if (e.t === "n")
            (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Wa(e.v);
          else if (e.t === "d") {
            var i = cr(e.v);
            (i | 0) === i ? e.w = i.toString(10) : e.w = Wa(i);
          } else {
            if (e.v === void 0)
              return "";
            e.w = na(e.v, ma);
          }
        else
          e.t === "d" ? e.w = mr(a, cr(e.v), ma) : e.w = mr(a, e.v, ma);
      } catch (c) {
        if (n.WTF)
          throw c;
      }
    if (n.cellStyles && r != null)
      try {
        e.s = s.Fills[r], e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb && (e.s.fgColor.rgb = _t(t.themeElements.clrScheme[e.s.fgColor.theme].rgb, e.s.fgColor.tint || 0), n.WTF && (e.s.fgColor.raw_rgb = t.themeElements.clrScheme[e.s.fgColor.theme].rgb)), e.s.bgColor && e.s.bgColor.theme && (e.s.bgColor.rgb = _t(t.themeElements.clrScheme[e.s.bgColor.theme].rgb, e.s.bgColor.tint || 0), n.WTF && (e.s.bgColor.raw_rgb = t.themeElements.clrScheme[e.s.bgColor.theme].rgb));
      } catch (c) {
        if (n.WTF && s.Fills)
          throw c;
      }
  }
}
function au(e, a) {
  var r = Re(a);
  r.s.r <= r.e.r && r.s.c <= r.e.c && r.s.r >= 0 && r.s.c >= 0 && (e["!ref"] = Ee(r));
}
var tu = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g, nu = /<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/, su = /<(?:\w:)?hyperlink [^>]*>/mg, iu = /"(\w*:\w*)"/, cu = /<(?:\w:)?col\b[^>]*[\/]?>/g, fu = /<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g, ou = /<(?:\w:)?pageMargins[^>]*\/>/g, qs = /<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/, lu = /<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/, hu = /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;
function uu(e, a, r, n, t, s, i) {
  if (!e)
    return e;
  n || (n = { "!id": {} });
  var c = a.dense ? [] : {}, f = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, l = "", o = "", h = e.match(nu);
  h ? (l = e.slice(0, h.index), o = e.slice(h.index + h[0].length)) : l = o = e;
  var x = l.match(qs);
  x ? p0(x[0], c, t, r) : (x = l.match(lu)) && xu(x[0], x[1] || "", c, t, r);
  var d = (l.match(/<(?:\w*:)?dimension/) || { index: -1 }).index;
  if (d > 0) {
    var v = l.slice(d, d + 50).match(iu);
    v && au(c, v[1]);
  }
  var u = l.match(hu);
  u && u[1] && _u(u[1], t);
  var g = [];
  if (a.cellStyles) {
    var S = l.match(cu);
    S && pu(g, S);
  }
  h && Eu(h[1], c, a, f, s, i);
  var y = o.match(fu);
  y && (c["!autofilter"] = gu(y[0]));
  var _ = [], N = o.match(tu);
  if (N)
    for (d = 0; d != N.length; ++d)
      _[d] = Re(N[d].slice(N[d].indexOf('"') + 1));
  var b = o.match(su);
  b && du(c, b, n);
  var I = o.match(ou);
  if (I && (c["!margins"] = vu(oe(I[0]))), !c["!ref"] && f.e.c >= f.s.c && f.e.r >= f.s.r && (c["!ref"] = Ee(f)), a.sheetRows > 0 && c["!ref"]) {
    var F = Re(c["!ref"]);
    a.sheetRows <= +F.e.r && (F.e.r = a.sheetRows - 1, F.e.r > f.e.r && (F.e.r = f.e.r), F.e.r < F.s.r && (F.s.r = F.e.r), F.e.c > f.e.c && (F.e.c = f.e.c), F.e.c < F.s.c && (F.s.c = F.e.c), c["!fullref"] = c["!ref"], c["!ref"] = Ee(F));
  }
  return g.length > 0 && (c["!cols"] = g), _.length > 0 && (c["!merges"] = _), c;
}
function p0(e, a, r, n) {
  var t = oe(e);
  r.Sheets[n] || (r.Sheets[n] = {}), t.codeName && (r.Sheets[n].CodeName = ke(Ae(t.codeName)));
}
function xu(e, a, r, n, t) {
  p0(e.slice(0, e.indexOf(">")), r, n, t);
}
function du(e, a, r) {
  for (var n = Array.isArray(e), t = 0; t != a.length; ++t) {
    var s = oe(Ae(a[t]), !0);
    if (!s.ref)
      return;
    var i = ((r || {})["!id"] || [])[s.id];
    i ? (s.Target = i.Target, s.location && (s.Target += "#" + ke(s.location))) : (s.Target = "#" + ke(s.location), i = { Target: s.Target, TargetMode: "Internal" }), s.Rel = i, s.tooltip && (s.Tooltip = s.tooltip, delete s.tooltip);
    for (var c = Re(s.ref), f = c.s.r; f <= c.e.r; ++f)
      for (var l = c.s.c; l <= c.e.c; ++l) {
        var o = ue({ c: l, r: f });
        n ? (e[f] || (e[f] = []), e[f][l] || (e[f][l] = { t: "z", v: void 0 }), e[f][l].l = s) : (e[o] || (e[o] = { t: "z", v: void 0 }), e[o].l = s);
      }
  }
}
function vu(e) {
  var a = {};
  return ["left", "right", "top", "bottom", "header", "footer"].forEach(function(r) {
    e[r] && (a[r] = parseFloat(e[r]));
  }), a;
}
function pu(e, a) {
  for (var r = !1, n = 0; n != a.length; ++n) {
    var t = oe(a[n], !0);
    t.hidden && (t.hidden = Ce(t.hidden));
    var s = parseInt(t.min, 10) - 1, i = parseInt(t.max, 10) - 1;
    for (t.outlineLevel && (t.level = +t.outlineLevel || 0), delete t.min, delete t.max, t.width = +t.width, !r && t.width && (r = !0, d0(t.width)), Ea(t); s <= i; )
      e[s++] = ze(t);
  }
}
function gu(e) {
  var a = { ref: (e.match(/ref="([^"]*)"/) || [])[1] };
  return a;
}
var mu = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;
function _u(e, a) {
  a.Views || (a.Views = [{}]), (e.match(mu) || []).forEach(function(r, n) {
    var t = oe(r);
    a.Views[n] || (a.Views[n] = {}), +t.zoomScale && (a.Views[n].zoom = +t.zoomScale), Ce(t.rightToLeft) && (a.Views[n].RTL = !0);
  });
}
var Eu = /* @__PURE__ */ function() {
  var e = /<(?:\w+:)?c[ \/>]/, a = /<\/(?:\w+:)?row>/, r = /r=["']([^"']*)["']/, n = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/, t = /ref=["']([^"']*)["']/, s = Ga("v"), i = Ga("f");
  return function(f, l, o, h, x, d) {
    for (var v = 0, u = "", g = [], S = [], y = 0, _ = 0, N = 0, b = "", I, F, V = 0, D = 0, z, G, P = 0, J = 0, fe = Array.isArray(d.CellXf), re, ce = [], ie = [], Se = Array.isArray(l), W = [], le = {}, he = !1, A = !!o.sheetStubs, U = f.split(a), R = 0, O = U.length; R != O; ++R) {
      u = U[R].trim();
      var j = u.length;
      if (j !== 0) {
        var ee = 0;
        e:
          for (v = 0; v < j; ++v)
            switch (
              /*x.charCodeAt(ri)*/
              u[v]
            ) {
              case ">":
                if (
                  /*x.charCodeAt(ri-1) != 47*/
                  u[v - 1] != "/"
                ) {
                  ++v;
                  break e;
                }
                if (o && o.cellStyles) {
                  if (F = oe(u.slice(ee, v), !0), V = F.r != null ? parseInt(F.r, 10) : V + 1, D = -1, o.sheetRows && o.sheetRows < V)
                    continue;
                  le = {}, he = !1, F.ht && (he = !0, le.hpt = parseFloat(F.ht), le.hpx = ja(le.hpt)), F.hidden == "1" && (he = !0, le.hidden = !0), F.outlineLevel != null && (he = !0, le.level = +F.outlineLevel), he && (W[V - 1] = le);
                }
                break;
              case "<":
                ee = v;
                break;
            }
        if (ee >= v)
          break;
        if (F = oe(u.slice(ee, v), !0), V = F.r != null ? parseInt(F.r, 10) : V + 1, D = -1, !(o.sheetRows && o.sheetRows < V)) {
          h.s.r > V - 1 && (h.s.r = V - 1), h.e.r < V - 1 && (h.e.r = V - 1), o && o.cellStyles && (le = {}, he = !1, F.ht && (he = !0, le.hpt = parseFloat(F.ht), le.hpx = ja(le.hpt)), F.hidden == "1" && (he = !0, le.hidden = !0), F.outlineLevel != null && (he = !0, le.level = +F.outlineLevel), he && (W[V - 1] = le)), g = u.slice(v).split(e);
          for (var ne = 0; ne != g.length && g[ne].trim().charAt(0) == "<"; ++ne)
            ;
          for (g = g.slice(ne), v = 0; v != g.length; ++v)
            if (u = g[v].trim(), u.length !== 0) {
              if (S = u.match(r), y = v, _ = 0, N = 0, u = "<c " + (u.slice(0, 1) == "<" ? ">" : "") + u, S != null && S.length === 2) {
                for (y = 0, b = S[1], _ = 0; _ != b.length && !((N = b.charCodeAt(_) - 64) < 1 || N > 26); ++_)
                  y = 26 * y + N;
                --y, D = y;
              } else
                ++D;
              for (_ = 0; _ != u.length && u.charCodeAt(_) !== 62; ++_)
                ;
              if (++_, F = oe(u.slice(0, _), !0), F.r || (F.r = ue({ r: V - 1, c: D })), b = u.slice(_), I = { t: "" }, (S = b.match(s)) != null && /*::cref != null && */
              S[1] !== "" && (I.v = ke(S[1])), o.cellFormula) {
                if ((S = b.match(i)) != null && /*::cref != null && */
                S[1] !== "") {
                  if (I.f = ke(Ae(S[1])).replace(/\r\n/g, `
`), o.xlfn || (I.f = vn(I.f)), /*::cref != null && cref[0] != null && */
                  S[0].indexOf('t="array"') > -1)
                    I.F = (b.match(t) || [])[1], I.F.indexOf(":") > -1 && ce.push([Re(I.F), I.F]);
                  else if (
                    /*::cref != null && cref[0] != null && */
                    S[0].indexOf('t="shared"') > -1
                  ) {
                    G = oe(S[0]);
                    var q = ke(Ae(S[1]));
                    o.xlfn || (q = vn(q)), ie[parseInt(G.si, 10)] = [G, q, F.r];
                  }
                } else
                  (S = b.match(/<f[^>]*\/>/)) && (G = oe(S[0]), ie[G.si] && (I.f = R1(ie[G.si][1], ie[G.si][2], F.r)));
                var Y = sr(F.r);
                for (_ = 0; _ < ce.length; ++_)
                  Y.r >= ce[_][0].s.r && Y.r <= ce[_][0].e.r && Y.c >= ce[_][0].s.c && Y.c <= ce[_][0].e.c && (I.F = ce[_][1]);
              }
              if (F.t == null && I.v === void 0)
                if (I.f || I.F)
                  I.v = 0, I.t = "n";
                else if (A)
                  I.t = "z";
                else
                  continue;
              else
                I.t = F.t || "n";
              switch (h.s.c > D && (h.s.c = D), h.e.c < D && (h.e.c = D), I.t) {
                case "n":
                  if (I.v == "" || I.v == null) {
                    if (!A)
                      continue;
                    I.t = "z";
                  } else
                    I.v = parseFloat(I.v);
                  break;
                case "s":
                  if (typeof I.v > "u") {
                    if (!A)
                      continue;
                    I.t = "z";
                  } else
                    z = Ua[parseInt(I.v, 10)], I.v = z.t, I.r = z.r, o.cellHTML && (I.h = z.h);
                  break;
                case "str":
                  I.t = "s", I.v = I.v != null ? Ae(I.v) : "", o.cellHTML && (I.h = t0(I.v));
                  break;
                case "inlineStr":
                  S = b.match(n), I.t = "s", S != null && (z = x0(S[1])) ? (I.v = z.t, o.cellHTML && (I.h = z.h)) : I.v = "";
                  break;
                case "b":
                  I.v = Ce(I.v);
                  break;
                case "d":
                  o.cellDates ? I.v = Xe(I.v, 1) : (I.v = cr(Xe(I.v, 1)), I.t = "n");
                  break;
                case "e":
                  (!o || o.cellText !== !1) && (I.w = I.v), I.v = _s[I.v];
                  break;
              }
              if (P = J = 0, re = null, fe && F.s !== void 0 && (re = d.CellXf[F.s], re != null && (re.numFmtId != null && (P = re.numFmtId), o.cellStyles && re.fillId != null && (J = re.fillId))), Zs(I, P, J, o, x, d), o.cellDates && fe && I.t == "n" && Ta(de[P]) && (I.t = "d", I.v = wt(I.v)), F.cm && o.xlmeta) {
                var Te = (o.xlmeta.Cell || [])[+F.cm - 1];
                Te && Te.type == "XLDAPR" && (I.D = !0);
              }
              if (Se) {
                var C = sr(F.r);
                l[C.r] || (l[C.r] = []), l[C.r][C.c] = I;
              } else
                l[F.r] = I;
            }
        }
      }
    }
    W.length > 0 && (l["!rows"] = W);
  };
}();
function Tu(e, a) {
  var r = {}, n = e.l + a;
  r.r = e.read_shift(4), e.l += 4;
  var t = e.read_shift(2);
  e.l += 1;
  var s = e.read_shift(1);
  return e.l = n, s & 7 && (r.level = s & 7), s & 16 && (r.hidden = !0), s & 32 && (r.hpt = t / 20), r;
}
var ku = la;
function wu() {
}
function Fu(e, a) {
  var r = {}, n = e[e.l];
  return ++e.l, r.above = !(n & 64), r.left = !(n & 128), e.l += 18, r.name = Xc(e), r;
}
function Au(e) {
  var a = _r(e);
  return [a];
}
function Su(e) {
  var a = oa(e);
  return [a];
}
function Cu(e) {
  var a = _r(e), r = e.read_shift(1);
  return [a, r, "b"];
}
function yu(e) {
  var a = oa(e), r = e.read_shift(1);
  return [a, r, "b"];
}
function Du(e) {
  var a = _r(e), r = e.read_shift(1);
  return [a, r, "e"];
}
function Ou(e) {
  var a = oa(e), r = e.read_shift(1);
  return [a, r, "e"];
}
function Ru(e) {
  var a = _r(e), r = e.read_shift(4);
  return [a, r, "s"];
}
function Iu(e) {
  var a = oa(e), r = e.read_shift(4);
  return [a, r, "s"];
}
function Nu(e) {
  var a = _r(e), r = Ze(e);
  return [a, r, "n"];
}
function Qs(e) {
  var a = oa(e), r = Ze(e);
  return [a, r, "n"];
}
function Pu(e) {
  var a = _r(e), r = l0(e);
  return [a, r, "n"];
}
function Lu(e) {
  var a = oa(e), r = l0(e);
  return [a, r, "n"];
}
function Mu(e) {
  var a = _r(e), r = f0(e);
  return [a, r, "is"];
}
function Bu(e) {
  var a = _r(e), r = Qe(e);
  return [a, r, "str"];
}
function bu(e) {
  var a = oa(e), r = Qe(e);
  return [a, r, "str"];
}
function Uu(e, a, r) {
  var n = e.l + a, t = _r(e);
  t.r = r["!row"];
  var s = e.read_shift(1), i = [t, s, "b"];
  if (r.cellFormula) {
    e.l += 2;
    var c = St(e, n - e.l, r);
    i[3] = Je(c, null, t, r.supbooks, r);
  } else
    e.l = n;
  return i;
}
function Hu(e, a, r) {
  var n = e.l + a, t = _r(e);
  t.r = r["!row"];
  var s = e.read_shift(1), i = [t, s, "e"];
  if (r.cellFormula) {
    e.l += 2;
    var c = St(e, n - e.l, r);
    i[3] = Je(c, null, t, r.supbooks, r);
  } else
    e.l = n;
  return i;
}
function Vu(e, a, r) {
  var n = e.l + a, t = _r(e);
  t.r = r["!row"];
  var s = Ze(e), i = [t, s, "n"];
  if (r.cellFormula) {
    e.l += 2;
    var c = St(e, n - e.l, r);
    i[3] = Je(c, null, t, r.supbooks, r);
  } else
    e.l = n;
  return i;
}
function Wu(e, a, r) {
  var n = e.l + a, t = _r(e);
  t.r = r["!row"];
  var s = Qe(e), i = [t, s, "str"];
  if (r.cellFormula) {
    e.l += 2;
    var c = St(e, n - e.l, r);
    i[3] = Je(c, null, t, r.supbooks, r);
  } else
    e.l = n;
  return i;
}
var Gu = la;
function Xu(e, a) {
  var r = e.l + a, n = la(e), t = o0(e), s = Qe(e), i = Qe(e), c = Qe(e);
  e.l = r;
  var f = { rfx: n, relId: t, loc: s, display: c };
  return i && (f.Tooltip = i), f;
}
function $u() {
}
function zu(e, a, r) {
  var n = e.l + a, t = ps(e), s = e.read_shift(1), i = [t];
  if (i[2] = s, r.cellFormula) {
    var c = Zh(e, n - e.l, r);
    i[1] = c;
  } else
    e.l = n;
  return i;
}
function ju(e, a, r) {
  var n = e.l + a, t = la(e), s = [t];
  if (r.cellFormula) {
    var i = Qh(e, n - e.l, r);
    s[1] = i, e.l = n;
  } else
    e.l = n;
  return s;
}
var Ku = ["left", "right", "top", "bottom", "header", "footer"];
function Yu(e) {
  var a = {};
  return Ku.forEach(function(r) {
    a[r] = Ze(e);
  }), a;
}
function Ju(e) {
  var a = e.read_shift(2);
  return e.l += 28, { RTL: a & 32 };
}
function Zu() {
}
function qu() {
}
function Qu(e, a, r, n, t, s, i) {
  if (!e)
    return e;
  var c = a || {};
  n || (n = { "!id": {} });
  var f = c.dense ? [] : {}, l, o = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, h = !1, x = !1, d, v, u, g, S, y, _, N, b, I = [];
  c.biff = 12, c["!row"] = 0;
  var F = 0, V = !1, D = [], z = {}, G = c.supbooks || /*::(*/
  t.supbooks || [[]];
  if (G.sharedf = z, G.arrayf = D, G.SheetNames = t.SheetNames || t.Sheets.map(function(Se) {
    return Se.name;
  }), !c.supbooks && (c.supbooks = G, t.Names))
    for (var P = 0; P < t.Names.length; ++P)
      G[0][P + 1] = t.Names[P];
  var J = [], fe = [], re = !1;
  kt[16] = { n: "BrtShortReal", f: Qs };
  var ce;
  if (Hr(e, function(W, le, he) {
    if (!x)
      switch (he) {
        case 148:
          l = W;
          break;
        case 0:
          d = W, c.sheetRows && c.sheetRows <= d.r && (x = !0), N = je(g = d.r), c["!row"] = d.r, (W.hidden || W.hpt || W.level != null) && (W.hpt && (W.hpx = ja(W.hpt)), fe[W.r] = W);
          break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 62:
          switch (v = { t: W[2] }, W[2]) {
            case "n":
              v.v = W[1];
              break;
            case "s":
              _ = Ua[W[1]], v.v = _.t, v.r = _.r;
              break;
            case "b":
              v.v = !!W[1];
              break;
            case "e":
              v.v = W[1], c.cellText !== !1 && (v.w = ha[v.v]);
              break;
            case "str":
              v.t = "s", v.v = W[1];
              break;
            case "is":
              v.t = "s", v.v = W[1].t;
              break;
          }
          if ((u = i.CellXf[W[0].iStyleRef]) && Zs(v, u.numFmtId, null, c, s, i), S = W[0].c == -1 ? S + 1 : W[0].c, c.dense ? (f[g] || (f[g] = []), f[g][S] = v) : f[Ve(S) + N] = v, c.cellFormula) {
            for (V = !1, F = 0; F < D.length; ++F) {
              var A = D[F];
              d.r >= A[0].s.r && d.r <= A[0].e.r && S >= A[0].s.c && S <= A[0].e.c && (v.F = Ee(A[0]), V = !0);
            }
            !V && W.length > 3 && (v.f = W[3]);
          }
          if (o.s.r > d.r && (o.s.r = d.r), o.s.c > S && (o.s.c = S), o.e.r < d.r && (o.e.r = d.r), o.e.c < S && (o.e.c = S), c.cellDates && u && v.t == "n" && Ta(de[u.numFmtId])) {
            var U = ra(v.v);
            U && (v.t = "d", v.v = new Date(U.y, U.m - 1, U.d, U.H, U.M, U.S, U.u));
          }
          ce && (ce.type == "XLDAPR" && (v.D = !0), ce = void 0);
          break;
        case 1:
        case 12:
          if (!c.sheetStubs || h)
            break;
          v = { t: "z", v: void 0 }, S = W[0].c == -1 ? S + 1 : W[0].c, c.dense ? (f[g] || (f[g] = []), f[g][S] = v) : f[Ve(S) + N] = v, o.s.r > d.r && (o.s.r = d.r), o.s.c > S && (o.s.c = S), o.e.r < d.r && (o.e.r = d.r), o.e.c < S && (o.e.c = S), ce && (ce.type == "XLDAPR" && (v.D = !0), ce = void 0);
          break;
        case 176:
          I.push(W);
          break;
        case 49:
          ce = ((c.xlmeta || {}).Cell || [])[W - 1];
          break;
        case 494:
          var R = n["!id"][W.relId];
          for (R ? (W.Target = R.Target, W.loc && (W.Target += "#" + W.loc), W.Rel = R) : W.relId == "" && (W.Target = "#" + W.loc), g = W.rfx.s.r; g <= W.rfx.e.r; ++g)
            for (S = W.rfx.s.c; S <= W.rfx.e.c; ++S)
              c.dense ? (f[g] || (f[g] = []), f[g][S] || (f[g][S] = { t: "z", v: void 0 }), f[g][S].l = W) : (y = ue({ c: S, r: g }), f[y] || (f[y] = { t: "z", v: void 0 }), f[y].l = W);
          break;
        case 426:
          if (!c.cellFormula)
            break;
          D.push(W), b = c.dense ? f[g][S] : f[Ve(S) + N], b.f = Je(W[1], o, { r: d.r, c: S }, G, c), b.F = Ee(W[0]);
          break;
        case 427:
          if (!c.cellFormula)
            break;
          z[ue(W[0].s)] = W[1], b = c.dense ? f[g][S] : f[Ve(S) + N], b.f = Je(W[1], o, { r: d.r, c: S }, G, c);
          break;
        case 60:
          if (!c.cellStyles)
            break;
          for (; W.e >= W.s; )
            J[W.e--] = { width: W.w / 256, hidden: !!(W.flags & 1), level: W.level }, re || (re = !0, d0(W.w / 256)), Ea(J[W.e + 1]);
          break;
        case 161:
          f["!autofilter"] = { ref: Ee(W) };
          break;
        case 476:
          f["!margins"] = W;
          break;
        case 147:
          t.Sheets[r] || (t.Sheets[r] = {}), W.name && (t.Sheets[r].CodeName = W.name), (W.above || W.left) && (f["!outline"] = { above: W.above, left: W.left });
          break;
        case 137:
          t.Views || (t.Views = [{}]), t.Views[0] || (t.Views[0] = {}), W.RTL && (t.Views[0].RTL = !0);
          break;
        case 485:
          break;
        case 64:
        case 1053:
          break;
        case 151:
          break;
        case 152:
        case 175:
        case 644:
        case 625:
        case 562:
        case 396:
        case 1112:
        case 1146:
        case 471:
        case 1050:
        case 649:
        case 1105:
        case 589:
        case 607:
        case 564:
        case 1055:
        case 168:
        case 174:
        case 1180:
        case 499:
        case 507:
        case 550:
        case 171:
        case 167:
        case 1177:
        case 169:
        case 1181:
        case 551:
        case 552:
        case 661:
        case 639:
        case 478:
        case 537:
        case 477:
        case 536:
        case 1103:
        case 680:
        case 1104:
        case 1024:
        case 663:
        case 535:
        case 678:
        case 504:
        case 1043:
        case 428:
        case 170:
        case 3072:
        case 50:
        case 2070:
        case 1045:
          break;
        case 35:
          h = !0;
          break;
        case 36:
          h = !1;
          break;
        case 37:
          h = !0;
          break;
        case 38:
          h = !1;
          break;
        default:
          if (!le.T) {
            if (!h || c.WTF)
              throw new Error("Unexpected record 0x" + he.toString(16));
          }
      }
  }, c), delete c.supbooks, delete c["!row"], !f["!ref"] && (o.s.r < 2e6 || l && (l.e.r > 0 || l.e.c > 0 || l.s.r > 0 || l.s.c > 0)) && (f["!ref"] = Ee(l || o)), c.sheetRows && f["!ref"]) {
    var ie = Re(f["!ref"]);
    c.sheetRows <= +ie.e.r && (ie.e.r = c.sheetRows - 1, ie.e.r > o.e.r && (ie.e.r = o.e.r), ie.e.r < ie.s.r && (ie.s.r = ie.e.r), ie.e.c > o.e.c && (ie.e.c = o.e.c), ie.e.c < ie.s.c && (ie.s.c = ie.e.c), f["!fullref"] = f["!ref"], f["!ref"] = Ee(ie));
  }
  return I.length > 0 && (f["!merges"] = I), J.length > 0 && (f["!cols"] = J), fe.length > 0 && (f["!rows"] = fe), f;
}
function ex(e) {
  var a = [], r = e.match(/^<c:numCache>/), n;
  (e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/mg) || []).forEach(function(s) {
    var i = s.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);
    i && (a[+i[1]] = r ? +i[2] : i[2]);
  });
  var t = ke((e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/) || ["", "General"])[1]);
  return (e.match(/<c:f>(.*?)<\/c:f>/mg) || []).forEach(function(s) {
    n = s.replace(/<.*?>/g, "");
  }), [a, t, n];
}
function rx(e, a, r, n, t, s) {
  var i = s || { "!type": "chart" };
  if (!e)
    return s;
  var c = 0, f = 0, l = "A", o = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
  return (e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm) || []).forEach(function(h) {
    var x = ex(h);
    o.s.r = o.s.c = 0, o.e.c = c, l = Ve(c), x[0].forEach(function(d, v) {
      i[l + je(v)] = { t: "n", v: d, z: x[1] }, f = v;
    }), o.e.r < f && (o.e.r = f), ++c;
  }), c > 0 && (i["!ref"] = Ee(o)), i;
}
function ax(e, a, r, n, t) {
  if (!e)
    return e;
  n || (n = { "!id": {} });
  var s = { "!type": "chart", "!drawel": null, "!rel": "" }, i, c = e.match(qs);
  return c && p0(c[0], s, t, r), (i = e.match(/drawing r:id="(.*?)"/)) && (s["!rel"] = i[1]), n["!id"][s["!rel"]] && (s["!drawel"] = n["!id"][s["!rel"]]), s;
}
function tx(e, a) {
  e.l += 10;
  var r = Qe(e);
  return { name: r };
}
function nx(e, a, r, n, t) {
  if (!e)
    return e;
  n || (n = { "!id": {} });
  var s = { "!type": "chart", "!drawel": null, "!rel": "" }, i = !1;
  return Hr(e, function(f, l, o) {
    switch (o) {
      case 550:
        s["!rel"] = f;
        break;
      case 651:
        t.Sheets[r] || (t.Sheets[r] = {}), f.name && (t.Sheets[r].CodeName = f.name);
        break;
      case 562:
      case 652:
      case 669:
      case 679:
      case 551:
      case 552:
      case 476:
      case 3072:
        break;
      case 35:
        i = !0;
        break;
      case 36:
        i = !1;
        break;
      case 37:
        break;
      case 38:
        break;
      default:
        if (!(l.T > 0)) {
          if (!(l.T < 0)) {
            if (!i || a.WTF)
              throw new Error("Unexpected record 0x" + o.toString(16));
          }
        }
    }
  }, a), n["!id"][s["!rel"]] && (s["!drawel"] = n["!id"][s["!rel"]]), s;
}
var ei = [
  ["allowRefreshQuery", !1, "bool"],
  ["autoCompressPictures", !0, "bool"],
  ["backupFile", !1, "bool"],
  ["checkCompatibility", !1, "bool"],
  ["CodeName", ""],
  ["date1904", !1, "bool"],
  ["defaultThemeVersion", 0, "int"],
  ["filterPrivacy", !1, "bool"],
  ["hidePivotFieldList", !1, "bool"],
  ["promptedSolutions", !1, "bool"],
  ["publishItems", !1, "bool"],
  ["refreshAllConnections", !1, "bool"],
  ["saveExternalLinkValues", !0, "bool"],
  ["showBorderUnselectedTables", !0, "bool"],
  ["showInkAnnotation", !0, "bool"],
  ["showObjects", "all"],
  ["showPivotChartFilter", !1, "bool"],
  ["updateLinks", "userSet"]
], sx = [
  ["activeTab", 0, "int"],
  ["autoFilterDateGrouping", !0, "bool"],
  ["firstSheet", 0, "int"],
  ["minimized", !1, "bool"],
  ["showHorizontalScroll", !0, "bool"],
  ["showSheetTabs", !0, "bool"],
  ["showVerticalScroll", !0, "bool"],
  ["tabRatio", 600, "int"],
  ["visibility", "visible"]
  //window{Height,Width}, {x,y}Window
], ix = [
  //['state', 'visible']
], cx = [
  ["calcCompleted", "true"],
  ["calcMode", "auto"],
  ["calcOnSave", "true"],
  ["concurrentCalc", "true"],
  ["fullCalcOnLoad", "false"],
  ["fullPrecision", "true"],
  ["iterate", "false"],
  ["iterateCount", "100"],
  ["iterateDelta", "0.001"],
  ["refMode", "A1"]
];
function En(e, a) {
  for (var r = 0; r != e.length; ++r)
    for (var n = e[r], t = 0; t != a.length; ++t) {
      var s = a[t];
      if (n[s[0]] == null)
        n[s[0]] = s[1];
      else
        switch (s[2]) {
          case "bool":
            typeof n[s[0]] == "string" && (n[s[0]] = Ce(n[s[0]]));
            break;
          case "int":
            typeof n[s[0]] == "string" && (n[s[0]] = parseInt(n[s[0]], 10));
            break;
        }
    }
}
function Tn(e, a) {
  for (var r = 0; r != a.length; ++r) {
    var n = a[r];
    if (e[n[0]] == null)
      e[n[0]] = n[1];
    else
      switch (n[2]) {
        case "bool":
          typeof e[n[0]] == "string" && (e[n[0]] = Ce(e[n[0]]));
          break;
        case "int":
          typeof e[n[0]] == "string" && (e[n[0]] = parseInt(e[n[0]], 10));
          break;
      }
  }
}
function ri(e) {
  Tn(e.WBProps, ei), Tn(e.CalcPr, cx), En(e.WBView, sx), En(e.Sheets, ix), ma.date1904 = Ce(e.WBProps.date1904);
}
var fx = /* @__PURE__ */ "][*?/\\".split("");
function ox(e, a) {
  if (e.length > 31) {
    if (a)
      return !1;
    throw new Error("Sheet names cannot exceed 31 chars");
  }
  var r = !0;
  return fx.forEach(function(n) {
    if (e.indexOf(n) != -1) {
      if (!a)
        throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
      r = !1;
    }
  }), r;
}
var lx = /<\w+:workbook/;
function hx(e, a) {
  if (!e)
    throw new Error("Could not find file");
  var r = (
    /*::(*/
    { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, Names: [], xmlns: "" }
  ), n = !1, t = "xmlns", s = {}, i = 0;
  if (e.replace(rr, function(f, l) {
    var o = oe(f);
    switch (Rr(o[0])) {
      case "<?xml":
        break;
      case "<workbook":
        f.match(lx) && (t = "xmlns" + f.match(/<(\w+):/)[1]), r.xmlns = o[t];
        break;
      case "</workbook>":
        break;
      case "<fileVersion":
        delete o[0], r.AppVersion = o;
        break;
      case "<fileVersion/>":
      case "</fileVersion>":
        break;
      case "<fileSharing":
        break;
      case "<fileSharing/>":
        break;
      case "<workbookPr":
      case "<workbookPr/>":
        ei.forEach(function(h) {
          if (o[h[0]] != null)
            switch (h[2]) {
              case "bool":
                r.WBProps[h[0]] = Ce(o[h[0]]);
                break;
              case "int":
                r.WBProps[h[0]] = parseInt(o[h[0]], 10);
                break;
              default:
                r.WBProps[h[0]] = o[h[0]];
            }
        }), o.codeName && (r.WBProps.CodeName = Ae(o.codeName));
        break;
      case "</workbookPr>":
        break;
      case "<workbookProtection":
        break;
      case "<workbookProtection/>":
        break;
      case "<bookViews":
      case "<bookViews>":
      case "</bookViews>":
        break;
      case "<workbookView":
      case "<workbookView/>":
        delete o[0], r.WBView.push(o);
        break;
      case "</workbookView>":
        break;
      case "<sheets":
      case "<sheets>":
      case "</sheets>":
        break;
      case "<sheet":
        switch (o.state) {
          case "hidden":
            o.Hidden = 1;
            break;
          case "veryHidden":
            o.Hidden = 2;
            break;
          default:
            o.Hidden = 0;
        }
        delete o.state, o.name = ke(Ae(o.name)), delete o[0], r.Sheets.push(o);
        break;
      case "</sheet>":
        break;
      case "<functionGroups":
      case "<functionGroups/>":
        break;
      case "<functionGroup":
        break;
      case "<externalReferences":
      case "</externalReferences>":
      case "<externalReferences>":
        break;
      case "<externalReference":
        break;
      case "<definedNames/>":
        break;
      case "<definedNames>":
      case "<definedNames":
        n = !0;
        break;
      case "</definedNames>":
        n = !1;
        break;
      case "<definedName":
        s = {}, s.Name = Ae(o.name), o.comment && (s.Comment = o.comment), o.localSheetId && (s.Sheet = +o.localSheetId), Ce(o.hidden || "0") && (s.Hidden = !0), i = l + f.length;
        break;
      case "</definedName>":
        s.Ref = ke(Ae(e.slice(i, l))), r.Names.push(s);
        break;
      case "<definedName/>":
        break;
      case "<calcPr":
        delete o[0], r.CalcPr = o;
        break;
      case "<calcPr/>":
        delete o[0], r.CalcPr = o;
        break;
      case "</calcPr>":
        break;
      case "<oleSize":
        break;
      case "<customWorkbookViews>":
      case "</customWorkbookViews>":
      case "<customWorkbookViews":
        break;
      case "<customWorkbookView":
      case "</customWorkbookView>":
        break;
      case "<pivotCaches>":
      case "</pivotCaches>":
      case "<pivotCaches":
        break;
      case "<pivotCache":
        break;
      case "<smartTagPr":
      case "<smartTagPr/>":
        break;
      case "<smartTagTypes":
      case "<smartTagTypes>":
      case "</smartTagTypes>":
        break;
      case "<smartTagType":
        break;
      case "<webPublishing":
      case "<webPublishing/>":
        break;
      case "<fileRecoveryPr":
      case "<fileRecoveryPr/>":
        break;
      case "<webPublishObjects>":
      case "<webPublishObjects":
      case "</webPublishObjects>":
        break;
      case "<webPublishObject":
        break;
      case "<extLst":
      case "<extLst>":
      case "</extLst>":
      case "<extLst/>":
        break;
      case "<ext":
        n = !0;
        break;
      case "</ext>":
        n = !1;
        break;
      case "<ArchID":
        break;
      case "<AlternateContent":
      case "<AlternateContent>":
        n = !0;
        break;
      case "</AlternateContent>":
        n = !1;
        break;
      case "<revisionPtr":
        break;
      default:
        if (!n && a.WTF)
          throw new Error("unrecognized " + o[0] + " in workbook");
    }
    return f;
  }), Cc.indexOf(r.xmlns) === -1)
    throw new Error("Unknown Namespace: " + r.xmlns);
  return ri(r), r;
}
function ux(e, a) {
  var r = {};
  return r.Hidden = e.read_shift(4), r.iTabID = e.read_shift(4), r.strRelID = Ht(e), r.name = Qe(e), r;
}
function xx(e, a) {
  var r = {}, n = e.read_shift(4);
  r.defaultThemeVersion = e.read_shift(4);
  var t = a > 8 ? Qe(e) : "";
  return t.length > 0 && (r.CodeName = t), r.autoCompressPictures = !!(n & 65536), r.backupFile = !!(n & 64), r.checkCompatibility = !!(n & 4096), r.date1904 = !!(n & 1), r.filterPrivacy = !!(n & 8), r.hidePivotFieldList = !!(n & 1024), r.promptedSolutions = !!(n & 16), r.publishItems = !!(n & 2048), r.refreshAllConnections = !!(n & 262144), r.saveExternalLinkValues = !!(n & 128), r.showBorderUnselectedTables = !!(n & 4), r.showInkAnnotation = !!(n & 32), r.showObjects = ["all", "placeholders", "none"][n >> 13 & 3], r.showPivotChartFilter = !!(n & 32768), r.updateLinks = ["userSet", "never", "always"][n >> 8 & 3], r;
}
function dx(e, a) {
  var r = {};
  return e.read_shift(4), r.ArchID = e.read_shift(4), e.l += a - 8, r;
}
function vx(e, a, r) {
  var n = e.l + a;
  e.l += 4, e.l += 1;
  var t = e.read_shift(4), s = $c(e), i = qh(e, 0, r), c = o0(e);
  e.l = n;
  var f = { Name: s, Ptg: i };
  return t < 268435455 && (f.Sheet = t), c && (f.Comment = c), f;
}
function px(e, a) {
  var r = { AppVersion: {}, WBProps: {}, WBView: [], Sheets: [], CalcPr: {}, xmlns: "" }, n = [], t = !1;
  a || (a = {}), a.biff = 12;
  var s = [], i = [[]];
  return i.SheetNames = [], i.XTI = [], kt[16] = { n: "BrtFRTArchID$", f: dx }, Hr(e, function(f, l, o) {
    switch (o) {
      case 156:
        i.SheetNames.push(f.name), r.Sheets.push(f);
        break;
      case 153:
        r.WBProps = f;
        break;
      case 39:
        f.Sheet != null && (a.SID = f.Sheet), f.Ref = Je(f.Ptg, null, null, i, a), delete a.SID, delete f.Ptg, s.push(f);
        break;
      case 1036:
        break;
      case 357:
      case 358:
      case 355:
      case 667:
        i[0].length ? i.push([o, f]) : i[0] = [o, f], i[i.length - 1].XTI = [];
        break;
      case 362:
        i.length === 0 && (i[0] = [], i[0].XTI = []), i[i.length - 1].XTI = i[i.length - 1].XTI.concat(f), i.XTI = i.XTI.concat(f);
        break;
      case 361:
        break;
      case 2071:
      case 158:
      case 143:
      case 664:
      case 353:
        break;
      case 3072:
      case 3073:
      case 534:
      case 677:
      case 157:
      case 610:
      case 2050:
      case 155:
      case 548:
      case 676:
      case 128:
      case 665:
      case 2128:
      case 2125:
      case 549:
      case 2053:
      case 596:
      case 2076:
      case 2075:
      case 2082:
      case 397:
      case 154:
      case 1117:
      case 553:
      case 2091:
        break;
      case 35:
        n.push(o), t = !0;
        break;
      case 36:
        n.pop(), t = !1;
        break;
      case 37:
        n.push(o), t = !0;
        break;
      case 38:
        n.pop(), t = !1;
        break;
      case 16:
        break;
      default:
        if (!l.T) {
          if (!t || a.WTF && n[n.length - 1] != 37 && n[n.length - 1] != 35)
            throw new Error("Unexpected record 0x" + o.toString(16));
        }
    }
  }, a), ri(r), r.Names = s, r.supbooks = i, r;
}
function gx(e, a, r) {
  return a.slice(-4) === ".bin" ? px(e, r) : hx(e, r);
}
function mx(e, a, r, n, t, s, i, c) {
  return a.slice(-4) === ".bin" ? Qu(e, n, r, t, s, i, c) : uu(e, n, r, t, s, i, c);
}
function _x(e, a, r, n, t, s, i, c) {
  return a.slice(-4) === ".bin" ? nx(e, n, r, t, s) : ax(e, n, r, t, s);
}
function Ex(e, a, r, n, t, s, i, c) {
  return a.slice(-4) === ".bin" ? y1() : D1();
}
function Tx(e, a, r, n, t, s, i, c) {
  return a.slice(-4) === ".bin" ? S1() : C1();
}
function kx(e, a, r, n) {
  return a.slice(-4) === ".bin" ? Gl(e, r, n) : Bl(e, r, n);
}
function wx(e, a, r) {
  return Vs(e, r);
}
function Fx(e, a, r) {
  return a.slice(-4) === ".bin" ? sl(e, r) : tl(e, r);
}
function Ax(e, a, r) {
  return a.slice(-4) === ".bin" ? w1(e, r) : m1(e, r);
}
function Sx(e, a, r) {
  return a.slice(-4) === ".bin" ? v1(e) : x1(e);
}
function Cx(e, a, r, n) {
  return r.slice(-4) === ".bin" ? p1(e, a, r, n) : void 0;
}
function yx(e, a, r) {
  return a.slice(-4) === ".bin" ? h1(e, a, r) : u1(e, a, r);
}
var ai = /([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g, ti = /([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
function Er(e, a) {
  var r = e.split(/\s+/), n = [];
  if (a || (n[0] = r[0]), r.length === 1)
    return n;
  var t = e.match(ai), s, i, c, f;
  if (t)
    for (f = 0; f != t.length; ++f)
      s = t[f].match(ti), (i = s[1].indexOf(":")) === -1 ? n[s[1]] = s[2].slice(1, s[2].length - 1) : (s[1].slice(0, 6) === "xmlns:" ? c = "xmlns" + s[1].slice(6) : c = s[1].slice(i + 1), n[c] = s[2].slice(1, s[2].length - 1));
  return n;
}
function Dx(e) {
  var a = e.split(/\s+/), r = {};
  if (a.length === 1)
    return r;
  var n = e.match(ai), t, s, i, c;
  if (n)
    for (c = 0; c != n.length; ++c)
      t = n[c].match(ti), (s = t[1].indexOf(":")) === -1 ? r[t[1]] = t[2].slice(1, t[2].length - 1) : (t[1].slice(0, 6) === "xmlns:" ? i = "xmlns" + t[1].slice(6) : i = t[1].slice(s + 1), r[i] = t[2].slice(1, t[2].length - 1));
  return r;
}
var Va;
function Ox(e, a) {
  var r = Va[e] || ke(e);
  return r === "General" ? na(a) : mr(r, a);
}
function Rx(e, a, r, n) {
  var t = n;
  switch ((r[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
    case "boolean":
      t = Ce(n);
      break;
    case "i2":
    case "int":
      t = parseInt(n, 10);
      break;
    case "r4":
    case "float":
      t = parseFloat(n);
      break;
    case "date":
    case "dateTime.tz":
      t = Xe(n);
      break;
    case "i8":
    case "string":
    case "fixed":
    case "uuid":
    case "bin.base64":
      break;
    default:
      throw new Error("bad custprop:" + r[0]);
  }
  e[ke(a)] = t;
}
function Ix(e, a, r) {
  if (e.t !== "z") {
    if (!r || r.cellText !== !1)
      try {
        e.t === "e" ? e.w = e.w || ha[e.v] : a === "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Wa(e.v) : e.w = na(e.v) : e.w = Ox(a || "General", e.v);
      } catch (s) {
        if (r.WTF)
          throw s;
      }
    try {
      var n = Va[a] || a || "General";
      if (r.cellNF && (e.z = n), r.cellDates && e.t == "n" && Ta(n)) {
        var t = ra(e.v);
        t && (e.t = "d", e.v = new Date(t.y, t.m - 1, t.d, t.H, t.M, t.S, t.u));
      }
    } catch (s) {
      if (r.WTF)
        throw s;
    }
  }
}
function Nx(e, a, r) {
  if (r.cellStyles && a.Interior) {
    var n = a.Interior;
    n.Pattern && (n.patternType = Rl[n.Pattern] || n.Pattern);
  }
  e[a.ID] = a;
}
function Px(e, a, r, n, t, s, i, c, f, l) {
  var o = "General", h = n.StyleID, x = {};
  l = l || {};
  var d = [], v = 0;
  for (h === void 0 && c && (h = c.StyleID), h === void 0 && i && (h = i.StyleID); s[h] !== void 0 && (s[h].nf && (o = s[h].nf), s[h].Interior && d.push(s[h].Interior), !!s[h].Parent); )
    h = s[h].Parent;
  switch (r.Type) {
    case "Boolean":
      n.t = "b", n.v = Ce(e);
      break;
    case "String":
      n.t = "s", n.r = W0(ke(e)), n.v = e.indexOf("<") > -1 ? ke(a || e).replace(/<.*?>/g, "") : n.r;
      break;
    case "DateTime":
      e.slice(-1) != "Z" && (e += "Z"), n.v = (Xe(e) - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1e3), n.v !== n.v ? n.v = ke(e) : n.v < 60 && (n.v = n.v - 1), (!o || o == "General") && (o = "yyyy-mm-dd");
    case "Number":
      n.v === void 0 && (n.v = +e), n.t || (n.t = "n");
      break;
    case "Error":
      n.t = "e", n.v = _s[e], l.cellText !== !1 && (n.w = e);
      break;
    default:
      e == "" && a == "" ? n.t = "z" : (n.t = "s", n.v = W0(a || e));
      break;
  }
  if (Ix(n, o, l), l.cellFormula !== !1)
    if (n.Formula) {
      var u = ke(n.Formula);
      u.charCodeAt(0) == 61 && (u = u.slice(1)), n.f = ga(u, t), delete n.Formula, n.ArrayRange == "RC" ? n.F = ga("RC:RC", t) : n.ArrayRange && (n.F = ga(n.ArrayRange, t), f.push([Re(n.F), n.F]));
    } else
      for (v = 0; v < f.length; ++v)
        t.r >= f[v][0].s.r && t.r <= f[v][0].e.r && t.c >= f[v][0].s.c && t.c <= f[v][0].e.c && (n.F = f[v][1]);
  l.cellStyles && (d.forEach(function(g) {
    !x.patternType && g.patternType && (x.patternType = g.patternType);
  }), n.s = x), n.StyleID !== void 0 && (n.ixfe = n.StyleID);
}
function Lx(e) {
  e.t = e.v || "", e.t = e.t.replace(/\r\n/g, `
`).replace(/\r/g, `
`), e.v = e.w = e.ixfe = void 0;
}
function Mt(e, a) {
  var r = a || {};
  Xn();
  var n = Da(n0(e));
  (r.type == "binary" || r.type == "array" || r.type == "base64") && (n = Ae(n));
  var t = n.slice(0, 1024).toLowerCase(), s = !1;
  if (t = t.replace(/".*?"/g, ""), (t.indexOf(">") & 1023) > Math.min(t.indexOf(",") & 1023, t.indexOf(";") & 1023)) {
    var i = ze(r);
    return i.type = "string", $a.to_workbook(n, i);
  }
  if (t.indexOf("<?xml") == -1 && ["html", "table", "head", "meta", "script", "style", "div"].forEach(function(Ne) {
    t.indexOf("<" + Ne) >= 0 && (s = !0);
  }), s)
    return Xx(n, r);
  Va = {
    "General Number": "General",
    "General Date": de[22],
    "Long Date": "dddd, mmmm dd, yyyy",
    "Medium Date": de[15],
    "Short Date": de[14],
    "Long Time": de[19],
    "Medium Time": de[18],
    "Short Time": de[20],
    Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
    Fixed: de[2],
    Standard: de[4],
    Percent: de[10],
    Scientific: de[11],
    "Yes/No": '"Yes";"Yes";"No";@',
    "True/False": '"True";"True";"False";@',
    "On/Off": '"Yes";"Yes";"No";@'
  };
  var c, f = [], l, o = {}, h = [], x = r.dense ? [] : {}, d = "", v = {}, u = {}, g = Er('<Data ss:Type="String">'), S = 0, y = 0, _ = 0, N = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, b = {}, I = {}, F = "", V = 0, D = [], z = {}, G = {}, P = 0, J = [], fe = [], re = {}, ce = [], ie, Se = !1, W = [], le = [], he = {}, A = 0, U = 0, R = { Sheets: [], WBProps: { date1904: !1 } }, O = {};
  Xa.lastIndex = 0, n = n.replace(/<!--([\s\S]*?)-->/mg, "");
  for (var j = ""; c = Xa.exec(n); )
    switch (c[3] = (j = c[3]).toLowerCase()) {
      case "data":
        if (j == "data") {
          if (c[1] === "/") {
            if ((l = f.pop())[0] !== c[3])
              throw new Error("Bad state: " + l.join("|"));
          } else
            c[0].charAt(c[0].length - 2) !== "/" && f.push([c[3], !0]);
          break;
        }
        if (f[f.length - 1][1])
          break;
        c[1] === "/" ? Px(n.slice(S, c.index), F, g, f[f.length - 1][0] == /*"Comment"*/
        "comment" ? re : v, { c: y, r: _ }, b, ce[y], u, W, r) : (F = "", g = Er(c[0]), S = c.index + c[0].length);
        break;
      case "cell":
        if (c[1] === "/")
          if (fe.length > 0 && (v.c = fe), (!r.sheetRows || r.sheetRows > _) && v.v !== void 0 && (r.dense ? (x[_] || (x[_] = []), x[_][y] = v) : x[Ve(y) + je(_)] = v), v.HRef && (v.l = { Target: ke(v.HRef) }, v.HRefScreenTip && (v.l.Tooltip = v.HRefScreenTip), delete v.HRef, delete v.HRefScreenTip), (v.MergeAcross || v.MergeDown) && (A = y + (parseInt(v.MergeAcross, 10) | 0), U = _ + (parseInt(v.MergeDown, 10) | 0), D.push({ s: { c: y, r: _ }, e: { c: A, r: U } })), !r.sheetStubs)
            v.MergeAcross ? y = A + 1 : ++y;
          else if (v.MergeAcross || v.MergeDown) {
            for (var ee = y; ee <= A; ++ee)
              for (var ne = _; ne <= U; ++ne)
                (ee > y || ne > _) && (r.dense ? (x[ne] || (x[ne] = []), x[ne][ee] = { t: "z" }) : x[Ve(ee) + je(ne)] = { t: "z" });
            y = A + 1;
          } else
            ++y;
        else
          v = Dx(c[0]), v.Index && (y = +v.Index - 1), y < N.s.c && (N.s.c = y), y > N.e.c && (N.e.c = y), c[0].slice(-2) === "/>" && ++y, fe = [];
        break;
      case "row":
        c[1] === "/" || c[0].slice(-2) === "/>" ? (_ < N.s.r && (N.s.r = _), _ > N.e.r && (N.e.r = _), c[0].slice(-2) === "/>" && (u = Er(c[0]), u.Index && (_ = +u.Index - 1)), y = 0, ++_) : (u = Er(c[0]), u.Index && (_ = +u.Index - 1), he = {}, (u.AutoFitHeight == "0" || u.Height) && (he.hpx = parseInt(u.Height, 10), he.hpt = Hs(he.hpx), le[_] = he), u.Hidden == "1" && (he.hidden = !0, le[_] = he));
        break;
      case "worksheet":
        if (c[1] === "/") {
          if ((l = f.pop())[0] !== c[3])
            throw new Error("Bad state: " + l.join("|"));
          h.push(d), N.s.r <= N.e.r && N.s.c <= N.e.c && (x["!ref"] = Ee(N), r.sheetRows && r.sheetRows <= N.e.r && (x["!fullref"] = x["!ref"], N.e.r = r.sheetRows - 1, x["!ref"] = Ee(N))), D.length && (x["!merges"] = D), ce.length > 0 && (x["!cols"] = ce), le.length > 0 && (x["!rows"] = le), o[d] = x;
        } else
          N = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } }, _ = y = 0, f.push([c[3], !1]), l = Er(c[0]), d = ke(l.Name), x = r.dense ? [] : {}, D = [], W = [], le = [], O = { name: d, Hidden: 0 }, R.Sheets.push(O);
        break;
      case "table":
        if (c[1] === "/") {
          if ((l = f.pop())[0] !== c[3])
            throw new Error("Bad state: " + l.join("|"));
        } else {
          if (c[0].slice(-2) == "/>")
            break;
          f.push([c[3], !1]), ce = [], Se = !1;
        }
        break;
      case "style":
        c[1] === "/" ? Nx(b, I, r) : I = Er(c[0]);
        break;
      case "numberformat":
        I.nf = ke(Er(c[0]).Format || "General"), Va[I.nf] && (I.nf = Va[I.nf]);
        for (var q = 0; q != 392 && de[q] != I.nf; ++q)
          ;
        if (q == 392) {
          for (q = 57; q != 392; ++q)
            if (de[q] == null) {
              aa(I.nf, q);
              break;
            }
        }
        break;
      case "column":
        if (f[f.length - 1][0] !== /*'Table'*/
        "table")
          break;
        if (ie = Er(c[0]), ie.Hidden && (ie.hidden = !0, delete ie.Hidden), ie.Width && (ie.wpx = parseInt(ie.Width, 10)), !Se && ie.wpx > 10) {
          Se = !0, nr = bs;
          for (var Y = 0; Y < ce.length; ++Y)
            ce[Y] && Ea(ce[Y]);
        }
        Se && Ea(ie), ce[ie.Index - 1 || ce.length] = ie;
        for (var Te = 0; Te < +ie.Span; ++Te)
          ce[ce.length] = ze(ie);
        break;
      case "namedrange":
        if (c[1] === "/")
          break;
        R.Names || (R.Names = []);
        var C = oe(c[0]), Ie = {
          Name: C.Name,
          Ref: ga(C.RefersTo.slice(1), { r: 0, c: 0 })
        };
        R.Sheets.length > 0 && (Ie.Sheet = R.Sheets.length - 1), R.Names.push(Ie);
        break;
      case "namedcell":
        break;
      case "b":
        break;
      case "i":
        break;
      case "u":
        break;
      case "s":
        break;
      case "em":
        break;
      case "h2":
        break;
      case "h3":
        break;
      case "sub":
        break;
      case "sup":
        break;
      case "span":
        break;
      case "alignment":
        break;
      case "borders":
        break;
      case "border":
        break;
      case "font":
        if (c[0].slice(-2) === "/>")
          break;
        c[1] === "/" ? F += n.slice(V, c.index) : V = c.index + c[0].length;
        break;
      case "interior":
        if (!r.cellStyles)
          break;
        I.Interior = Er(c[0]);
        break;
      case "protection":
        break;
      case "author":
      case "title":
      case "description":
      case "created":
      case "keywords":
      case "subject":
      case "category":
      case "company":
      case "lastauthor":
      case "lastsaved":
      case "lastprinted":
      case "version":
      case "revision":
      case "totaltime":
      case "hyperlinkbase":
      case "manager":
      case "contentstatus":
      case "identifier":
      case "language":
      case "appname":
        if (c[0].slice(-2) === "/>")
          break;
        c[1] === "/" ? gf(z, j, n.slice(P, c.index)) : P = c.index + c[0].length;
        break;
      case "paragraphs":
        break;
      case "styles":
      case "workbook":
        if (c[1] === "/") {
          if ((l = f.pop())[0] !== c[3])
            throw new Error("Bad state: " + l.join("|"));
        } else
          f.push([c[3], !1]);
        break;
      case "comment":
        if (c[1] === "/") {
          if ((l = f.pop())[0] !== c[3])
            throw new Error("Bad state: " + l.join("|"));
          Lx(re), fe.push(re);
        } else
          f.push([c[3], !1]), l = Er(c[0]), re = { a: l.Author };
        break;
      case "autofilter":
        if (c[1] === "/") {
          if ((l = f.pop())[0] !== c[3])
            throw new Error("Bad state: " + l.join("|"));
        } else if (c[0].charAt(c[0].length - 2) !== "/") {
          var we = Er(c[0]);
          x["!autofilter"] = { ref: ga(we.Range).replace(/\$/g, "") }, f.push([c[3], !0]);
        }
        break;
      case "name":
        break;
      case "datavalidation":
        if (c[1] === "/") {
          if ((l = f.pop())[0] !== c[3])
            throw new Error("Bad state: " + l.join("|"));
        } else
          c[0].charAt(c[0].length - 2) !== "/" && f.push([c[3], !0]);
        break;
      case "pixelsperinch":
        break;
      case "componentoptions":
      case "documentproperties":
      case "customdocumentproperties":
      case "officedocumentsettings":
      case "pivottable":
      case "pivotcache":
      case "names":
      case "mapinfo":
      case "pagebreaks":
      case "querytable":
      case "sorting":
      case "schema":
      case "conditionalformatting":
      case "smarttagtype":
      case "smarttags":
      case "excelworkbook":
      case "workbookoptions":
      case "worksheetoptions":
        if (c[1] === "/") {
          if ((l = f.pop())[0] !== c[3])
            throw new Error("Bad state: " + l.join("|"));
        } else
          c[0].charAt(c[0].length - 2) !== "/" && f.push([c[3], !0]);
        break;
      case "null":
        break;
      default:
        if (f.length == 0 && c[3] == "document" || f.length == 0 && c[3] == "uof")
          return Cn(n, r);
        var Fe = !0;
        switch (f[f.length - 1][0]) {
          case "officedocumentsettings":
            switch (c[3]) {
              case "allowpng":
                break;
              case "removepersonalinformation":
                break;
              case "downloadcomponents":
                break;
              case "locationofcomponents":
                break;
              case "colors":
                break;
              case "color":
                break;
              case "index":
                break;
              case "rgb":
                break;
              case "targetscreensize":
                break;
              case "readonlyrecommended":
                break;
              default:
                Fe = !1;
            }
            break;
          case "componentoptions":
            switch (c[3]) {
              case "toolbar":
                break;
              case "hideofficelogo":
                break;
              case "spreadsheetautofit":
                break;
              case "label":
                break;
              case "caption":
                break;
              case "maxheight":
                break;
              case "maxwidth":
                break;
              case "nextsheetnumber":
                break;
              default:
                Fe = !1;
            }
            break;
          case "excelworkbook":
            switch (c[3]) {
              case "date1904":
                R.WBProps.date1904 = !0;
                break;
              case "windowheight":
                break;
              case "windowwidth":
                break;
              case "windowtopx":
                break;
              case "windowtopy":
                break;
              case "tabratio":
                break;
              case "protectstructure":
                break;
              case "protectwindow":
                break;
              case "protectwindows":
                break;
              case "activesheet":
                break;
              case "displayinknotes":
                break;
              case "firstvisiblesheet":
                break;
              case "supbook":
                break;
              case "sheetname":
                break;
              case "sheetindex":
                break;
              case "sheetindexfirst":
                break;
              case "sheetindexlast":
                break;
              case "dll":
                break;
              case "acceptlabelsinformulas":
                break;
              case "donotsavelinkvalues":
                break;
              case "iteration":
                break;
              case "maxiterations":
                break;
              case "maxchange":
                break;
              case "path":
                break;
              case "xct":
                break;
              case "count":
                break;
              case "selectedsheets":
                break;
              case "calculation":
                break;
              case "uncalced":
                break;
              case "startupprompt":
                break;
              case "crn":
                break;
              case "externname":
                break;
              case "formula":
                break;
              case "colfirst":
                break;
              case "collast":
                break;
              case "wantadvise":
                break;
              case "boolean":
                break;
              case "error":
                break;
              case "text":
                break;
              case "ole":
                break;
              case "noautorecover":
                break;
              case "publishobjects":
                break;
              case "donotcalculatebeforesave":
                break;
              case "number":
                break;
              case "refmoder1c1":
                break;
              case "embedsavesmarttags":
                break;
              default:
                Fe = !1;
            }
            break;
          case "workbookoptions":
            switch (c[3]) {
              case "owcversion":
                break;
              case "height":
                break;
              case "width":
                break;
              default:
                Fe = !1;
            }
            break;
          case "worksheetoptions":
            switch (c[3]) {
              case "visible":
                if (c[0].slice(-2) !== "/>")
                  if (c[1] === "/")
                    switch (n.slice(P, c.index)) {
                      case "SheetHidden":
                        O.Hidden = 1;
                        break;
                      case "SheetVeryHidden":
                        O.Hidden = 2;
                        break;
                    }
                  else
                    P = c.index + c[0].length;
                break;
              case "header":
                x["!margins"] || Ha(x["!margins"] = {}, "xlml"), isNaN(+oe(c[0]).Margin) || (x["!margins"].header = +oe(c[0]).Margin);
                break;
              case "footer":
                x["!margins"] || Ha(x["!margins"] = {}, "xlml"), isNaN(+oe(c[0]).Margin) || (x["!margins"].footer = +oe(c[0]).Margin);
                break;
              case "pagemargins":
                var ge = oe(c[0]);
                x["!margins"] || Ha(x["!margins"] = {}, "xlml"), isNaN(+ge.Top) || (x["!margins"].top = +ge.Top), isNaN(+ge.Left) || (x["!margins"].left = +ge.Left), isNaN(+ge.Right) || (x["!margins"].right = +ge.Right), isNaN(+ge.Bottom) || (x["!margins"].bottom = +ge.Bottom);
                break;
              case "displayrighttoleft":
                R.Views || (R.Views = []), R.Views[0] || (R.Views[0] = {}), R.Views[0].RTL = !0;
                break;
              case "freezepanes":
                break;
              case "frozennosplit":
                break;
              case "splithorizontal":
              case "splitvertical":
                break;
              case "donotdisplaygridlines":
                break;
              case "activerow":
                break;
              case "activecol":
                break;
              case "toprowbottompane":
                break;
              case "leftcolumnrightpane":
                break;
              case "unsynced":
                break;
              case "print":
                break;
              case "printerrors":
                break;
              case "panes":
                break;
              case "scale":
                break;
              case "pane":
                break;
              case "number":
                break;
              case "layout":
                break;
              case "pagesetup":
                break;
              case "selected":
                break;
              case "protectobjects":
                break;
              case "enableselection":
                break;
              case "protectscenarios":
                break;
              case "validprinterinfo":
                break;
              case "horizontalresolution":
                break;
              case "verticalresolution":
                break;
              case "numberofcopies":
                break;
              case "activepane":
                break;
              case "toprowvisible":
                break;
              case "leftcolumnvisible":
                break;
              case "fittopage":
                break;
              case "rangeselection":
                break;
              case "papersizeindex":
                break;
              case "pagelayoutzoom":
                break;
              case "pagebreakzoom":
                break;
              case "filteron":
                break;
              case "fitwidth":
                break;
              case "fitheight":
                break;
              case "commentslayout":
                break;
              case "zoom":
                break;
              case "lefttoright":
                break;
              case "gridlines":
                break;
              case "allowsort":
                break;
              case "allowfilter":
                break;
              case "allowinsertrows":
                break;
              case "allowdeleterows":
                break;
              case "allowinsertcols":
                break;
              case "allowdeletecols":
                break;
              case "allowinserthyperlinks":
                break;
              case "allowformatcells":
                break;
              case "allowsizecols":
                break;
              case "allowsizerows":
                break;
              case "nosummaryrowsbelowdetail":
                x["!outline"] || (x["!outline"] = {}), x["!outline"].above = !0;
                break;
              case "tabcolorindex":
                break;
              case "donotdisplayheadings":
                break;
              case "showpagelayoutzoom":
                break;
              case "nosummarycolumnsrightdetail":
                x["!outline"] || (x["!outline"] = {}), x["!outline"].left = !0;
                break;
              case "blackandwhite":
                break;
              case "donotdisplayzeros":
                break;
              case "displaypagebreak":
                break;
              case "rowcolheadings":
                break;
              case "donotdisplayoutline":
                break;
              case "noorientation":
                break;
              case "allowusepivottables":
                break;
              case "zeroheight":
                break;
              case "viewablerange":
                break;
              case "selection":
                break;
              case "protectcontents":
                break;
              default:
                Fe = !1;
            }
            break;
          case "pivottable":
          case "pivotcache":
            switch (c[3]) {
              case "immediateitemsondrop":
                break;
              case "showpagemultipleitemlabel":
                break;
              case "compactrowindent":
                break;
              case "location":
                break;
              case "pivotfield":
                break;
              case "orientation":
                break;
              case "layoutform":
                break;
              case "layoutsubtotallocation":
                break;
              case "layoutcompactrow":
                break;
              case "position":
                break;
              case "pivotitem":
                break;
              case "datatype":
                break;
              case "datafield":
                break;
              case "sourcename":
                break;
              case "parentfield":
                break;
              case "ptlineitems":
                break;
              case "ptlineitem":
                break;
              case "countofsameitems":
                break;
              case "item":
                break;
              case "itemtype":
                break;
              case "ptsource":
                break;
              case "cacheindex":
                break;
              case "consolidationreference":
                break;
              case "filename":
                break;
              case "reference":
                break;
              case "nocolumngrand":
                break;
              case "norowgrand":
                break;
              case "blanklineafteritems":
                break;
              case "hidden":
                break;
              case "subtotal":
                break;
              case "basefield":
                break;
              case "mapchilditems":
                break;
              case "function":
                break;
              case "refreshonfileopen":
                break;
              case "printsettitles":
                break;
              case "mergelabels":
                break;
              case "defaultversion":
                break;
              case "refreshname":
                break;
              case "refreshdate":
                break;
              case "refreshdatecopy":
                break;
              case "versionlastrefresh":
                break;
              case "versionlastupdate":
                break;
              case "versionupdateablemin":
                break;
              case "versionrefreshablemin":
                break;
              case "calculation":
                break;
              default:
                Fe = !1;
            }
            break;
          case "pagebreaks":
            switch (c[3]) {
              case "colbreaks":
                break;
              case "colbreak":
                break;
              case "rowbreaks":
                break;
              case "rowbreak":
                break;
              case "colstart":
                break;
              case "colend":
                break;
              case "rowend":
                break;
              default:
                Fe = !1;
            }
            break;
          case "autofilter":
            switch (c[3]) {
              case "autofiltercolumn":
                break;
              case "autofiltercondition":
                break;
              case "autofilterand":
                break;
              case "autofilteror":
                break;
              default:
                Fe = !1;
            }
            break;
          case "querytable":
            switch (c[3]) {
              case "id":
                break;
              case "autoformatfont":
                break;
              case "autoformatpattern":
                break;
              case "querysource":
                break;
              case "querytype":
                break;
              case "enableredirections":
                break;
              case "refreshedinxl9":
                break;
              case "urlstring":
                break;
              case "htmltables":
                break;
              case "connection":
                break;
              case "commandtext":
                break;
              case "refreshinfo":
                break;
              case "notitles":
                break;
              case "nextid":
                break;
              case "columninfo":
                break;
              case "overwritecells":
                break;
              case "donotpromptforfile":
                break;
              case "textwizardsettings":
                break;
              case "source":
                break;
              case "number":
                break;
              case "decimal":
                break;
              case "thousandseparator":
                break;
              case "trailingminusnumbers":
                break;
              case "formatsettings":
                break;
              case "fieldtype":
                break;
              case "delimiters":
                break;
              case "tab":
                break;
              case "comma":
                break;
              case "autoformatname":
                break;
              case "versionlastedit":
                break;
              case "versionlastrefresh":
                break;
              default:
                Fe = !1;
            }
            break;
          case "datavalidation":
            switch (c[3]) {
              case "range":
                break;
              case "type":
                break;
              case "min":
                break;
              case "max":
                break;
              case "sort":
                break;
              case "descending":
                break;
              case "order":
                break;
              case "casesensitive":
                break;
              case "value":
                break;
              case "errorstyle":
                break;
              case "errormessage":
                break;
              case "errortitle":
                break;
              case "inputmessage":
                break;
              case "inputtitle":
                break;
              case "combohide":
                break;
              case "inputhide":
                break;
              case "condition":
                break;
              case "qualifier":
                break;
              case "useblank":
                break;
              case "value1":
                break;
              case "value2":
                break;
              case "format":
                break;
              case "cellrangelist":
                break;
              default:
                Fe = !1;
            }
            break;
          case "sorting":
          case "conditionalformatting":
            switch (c[3]) {
              case "range":
                break;
              case "type":
                break;
              case "min":
                break;
              case "max":
                break;
              case "sort":
                break;
              case "descending":
                break;
              case "order":
                break;
              case "casesensitive":
                break;
              case "value":
                break;
              case "errorstyle":
                break;
              case "errormessage":
                break;
              case "errortitle":
                break;
              case "cellrangelist":
                break;
              case "inputmessage":
                break;
              case "inputtitle":
                break;
              case "combohide":
                break;
              case "inputhide":
                break;
              case "condition":
                break;
              case "qualifier":
                break;
              case "useblank":
                break;
              case "value1":
                break;
              case "value2":
                break;
              case "format":
                break;
              default:
                Fe = !1;
            }
            break;
          case "mapinfo":
          case "schema":
          case "data":
            switch (c[3]) {
              case "map":
                break;
              case "entry":
                break;
              case "range":
                break;
              case "xpath":
                break;
              case "field":
                break;
              case "xsdtype":
                break;
              case "filteron":
                break;
              case "aggregate":
                break;
              case "elementtype":
                break;
              case "attributetype":
                break;
              case "schema":
              case "element":
              case "complextype":
              case "datatype":
              case "all":
              case "attribute":
              case "extends":
                break;
              case "row":
                break;
              default:
                Fe = !1;
            }
            break;
          case "smarttags":
            break;
          default:
            Fe = !1;
            break;
        }
        if (Fe || c[3].match(/!\[CDATA/))
          break;
        if (!f[f.length - 1][1])
          throw "Unrecognized tag: " + c[3] + "|" + f.join("|");
        if (f[f.length - 1][0] === /*'CustomDocumentProperties'*/
        "customdocumentproperties") {
          if (c[0].slice(-2) === "/>")
            break;
          c[1] === "/" ? Rx(G, j, J, n.slice(P, c.index)) : (J = c, P = c.index + c[0].length);
          break;
        }
        if (r.WTF)
          throw "Unrecognized tag: " + c[3] + "|" + f.join("|");
    }
  var ae = {};
  return !r.bookSheets && !r.bookProps && (ae.Sheets = o), ae.SheetNames = h, ae.Workbook = R, ae.SSF = ze(de), ae.Props = z, ae.Custprops = G, ae;
}
function Xt(e, a) {
  switch (_0(a = a || {}), a.type || "base64") {
    case "base64":
      return Mt(ur(e), a);
    case "binary":
    case "buffer":
    case "file":
      return Mt(e, a);
    case "array":
      return Mt(fa(e), a);
  }
}
function Mx(e) {
  var a = {}, r = e.content;
  if (r.l = 28, a.AnsiUserType = r.read_shift(0, "lpstr-ansi"), a.AnsiClipboardFormat = Kc(r), r.length - r.l <= 4)
    return a;
  var n = r.read_shift(4);
  if (n == 0 || n > 40 || (r.l -= 4, a.Reserved1 = r.read_shift(0, "lpstr-ansi"), r.length - r.l <= 4) || (n = r.read_shift(4), n !== 1907505652) || (a.UnicodeClipboardFormat = Yc(r), n = r.read_shift(4), n == 0 || n > 40))
    return a;
  r.l -= 4, a.Reserved2 = r.read_shift(0, "lpwstr");
}
var Bx = [60, 1084, 2066, 2165, 2175];
function bx(e, a, r, n, t) {
  var s = n, i = [], c = r.slice(r.l, r.l + s);
  if (t && t.enc && t.enc.insitu && c.length > 0)
    switch (e) {
      case 9:
      case 521:
      case 1033:
      case 2057:
      case 47:
      case 405:
      case 225:
      case 406:
      case 312:
      case 404:
      case 10:
        break;
      case 133:
        break;
      default:
        t.enc.insitu(c);
    }
  i.push(c), r.l += s;
  for (var f = Mr(r, r.l), l = $t[f], o = 0; l != null && Bx.indexOf(f) > -1; )
    s = Mr(r, r.l + 2), o = r.l + 4, f == 2066 ? o += 4 : (f == 2165 || f == 2175) && (o += 12), c = r.slice(o, r.l + 4 + s), i.push(c), r.l += 4 + s, l = $t[f = Mr(r, r.l)];
  var h = $r(i);
  $e(h, 0);
  var x = 0;
  h.lens = [];
  for (var d = 0; d < i.length; ++d)
    h.lens.push(x), x += i[d].length;
  if (h.length < n)
    throw "XLS Record 0x" + e.toString(16) + " Truncated: " + h.length + " < " + n;
  return a.f(h, h.length, t);
}
function yr(e, a, r) {
  if (e.t !== "z" && e.XF) {
    var n = 0;
    try {
      n = e.z || e.XF.numFmtId || 0, a.cellNF && (e.z = de[n]);
    } catch (s) {
      if (a.WTF)
        throw s;
    }
    if (!a || a.cellText !== !1)
      try {
        e.t === "e" ? e.w = e.w || ha[e.v] : n === 0 || n == "General" ? e.t === "n" ? (e.v | 0) === e.v ? e.w = e.v.toString(10) : e.w = Wa(e.v) : e.w = na(e.v) : e.w = mr(n, e.v, { date1904: !!r, dateNF: a && a.dateNF });
      } catch (s) {
        if (a.WTF)
          throw s;
      }
    if (a.cellDates && n && e.t == "n" && Ta(de[n] || String(n))) {
      var t = ra(e.v);
      t && (e.t = "d", e.v = new Date(t.y, t.m - 1, t.d, t.H, t.M, t.S, t.u));
    }
  }
}
function ht(e, a, r) {
  return { v: e, ixfe: a, t: r };
}
function Ux(e, a) {
  var r = { opts: {} }, n = {}, t = a.dense ? [] : {}, s = {}, i = {}, c = null, f = [], l = "", o = {}, h, x = "", d, v, u, g, S = {}, y = [], _, N, b = [], I = [], F = { Sheets: [], WBProps: { date1904: !1 }, Views: [{}] }, V = {}, D = function(pe) {
    return pe < 8 ? ta[pe] : pe < 64 && I[pe - 8] || ta[pe];
  }, z = function(pe, Pe, dr) {
    var Ue = Pe.XF.data;
    if (!(!Ue || !Ue.patternType || !dr || !dr.cellStyles)) {
      Pe.s = {}, Pe.s.patternType = Ue.patternType;
      var qr;
      (qr = za(D(Ue.icvFore))) && (Pe.s.fgColor = { rgb: qr }), (qr = za(D(Ue.icvBack))) && (Pe.s.bgColor = { rgb: qr });
    }
  }, G = function(pe, Pe, dr) {
    if (!(he > 1) && !(dr.sheetRows && pe.r >= dr.sheetRows)) {
      if (dr.cellStyles && Pe.XF && Pe.XF.data && z(pe, Pe, dr), delete Pe.ixfe, delete Pe.XF, h = pe, x = ue(pe), (!i || !i.s || !i.e) && (i = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }), pe.r < i.s.r && (i.s.r = pe.r), pe.c < i.s.c && (i.s.c = pe.c), pe.r + 1 > i.e.r && (i.e.r = pe.r + 1), pe.c + 1 > i.e.c && (i.e.c = pe.c + 1), dr.cellFormula && Pe.f) {
        for (var Ue = 0; Ue < y.length; ++Ue)
          if (!(y[Ue][0].s.c > pe.c || y[Ue][0].s.r > pe.r) && !(y[Ue][0].e.c < pe.c || y[Ue][0].e.r < pe.r)) {
            Pe.F = Ee(y[Ue][0]), (y[Ue][0].s.c != pe.c || y[Ue][0].s.r != pe.r) && delete Pe.f, Pe.f && (Pe.f = "" + Je(y[Ue][1], i, pe, W, P));
            break;
          }
      }
      dr.dense ? (t[pe.r] || (t[pe.r] = []), t[pe.r][pe.c] = Pe) : t[x] = Pe;
    }
  }, P = {
    enc: !1,
    // encrypted
    sbcch: 0,
    // cch in the preceding SupBook
    snames: [],
    // sheetnames
    sharedf: S,
    // shared formulae by address
    arrayf: y,
    // array formulae array
    rrtabid: [],
    // RRTabId
    lastuser: "",
    // Last User from WriteAccess
    biff: 8,
    // BIFF version
    codepage: 0,
    // CP from CodePage record
    winlocked: 0,
    // fLockWn from WinProtect
    cellStyles: !!a && !!a.cellStyles,
    WTF: !!a && !!a.wtf
  };
  a.password && (P.password = a.password);
  var J, fe = [], re = [], ce = [], ie = [], Se = !1, W = [];
  W.SheetNames = P.snames, W.sharedf = P.sharedf, W.arrayf = P.arrayf, W.names = [], W.XTI = [];
  var le = 0, he = 0, A = 0, U = [], R = [], O;
  P.codepage = 1200, wr(1200);
  for (var j = !1; e.l < e.length - 1; ) {
    var ee = e.l, ne = e.read_shift(2);
    if (ne === 0 && le === 10)
      break;
    var q = e.l === e.length ? 0 : e.read_shift(2), Y = $t[ne];
    if (Y && Y.f) {
      if (a.bookSheets && le === 133 && ne !== 133)
        break;
      if (le = ne, Y.r === 2 || Y.r == 12) {
        var Te = e.read_shift(2);
        if (q -= 2, !P.enc && Te !== ne && ((Te & 255) << 8 | Te >> 8) !== ne)
          throw new Error("rt mismatch: " + Te + "!=" + ne);
        Y.r == 12 && (e.l += 10, q -= 10);
      }
      var C = {};
      if (ne === 10 ? C = /*::(*/
      Y.f(e, q, P) : C = /*::(*/
      bx(ne, Y, e, q, P), he == 0 && [9, 521, 1033, 2057].indexOf(le) === -1)
        continue;
      switch (ne) {
        case 34:
          r.opts.Date1904 = F.WBProps.date1904 = C;
          break;
        case 134:
          r.opts.WriteProtect = !0;
          break;
        case 47:
          if (P.enc || (e.l = 0), P.enc = C, !a.password)
            throw new Error("File is password-protected");
          if (C.valid == null)
            throw new Error("Encryption scheme unsupported");
          if (!C.valid)
            throw new Error("Password is incorrect");
          break;
        case 92:
          P.lastuser = C;
          break;
        case 66:
          var Ie = Number(C);
          switch (Ie) {
            case 21010:
              Ie = 1200;
              break;
            case 32768:
              Ie = 1e4;
              break;
            case 32769:
              Ie = 1252;
              break;
          }
          wr(P.codepage = Ie), j = !0;
          break;
        case 317:
          P.rrtabid = C;
          break;
        case 25:
          P.winlocked = C;
          break;
        case 439:
          r.opts.RefreshAll = C;
          break;
        case 12:
          r.opts.CalcCount = C;
          break;
        case 16:
          r.opts.CalcDelta = C;
          break;
        case 17:
          r.opts.CalcIter = C;
          break;
        case 13:
          r.opts.CalcMode = C;
          break;
        case 14:
          r.opts.CalcPrecision = C;
          break;
        case 95:
          r.opts.CalcSaveRecalc = C;
          break;
        case 15:
          P.CalcRefMode = C;
          break;
        case 2211:
          r.opts.FullCalc = C;
          break;
        case 129:
          C.fDialog && (t["!type"] = "dialog"), C.fBelow || ((t["!outline"] || (t["!outline"] = {})).above = !0), C.fRight || ((t["!outline"] || (t["!outline"] = {})).left = !0);
          break;
        case 224:
          b.push(C);
          break;
        case 430:
          W.push([C]), W[W.length - 1].XTI = [];
          break;
        case 35:
        case 547:
          W[W.length - 1].push(C);
          break;
        case 24:
        case 536:
          O = {
            Name: C.Name,
            Ref: Je(C.rgce, i, null, W, P)
          }, C.itab > 0 && (O.Sheet = C.itab - 1), W.names.push(O), W[0] || (W[0] = [], W[0].XTI = []), W[W.length - 1].push(C), C.Name == "_xlnm._FilterDatabase" && C.itab > 0 && C.rgce && C.rgce[0] && C.rgce[0][0] && C.rgce[0][0][0] == "PtgArea3d" && (R[C.itab - 1] = { ref: Ee(C.rgce[0][0][1][2]) });
          break;
        case 22:
          P.ExternCount = C;
          break;
        case 23:
          W.length == 0 && (W[0] = [], W[0].XTI = []), W[W.length - 1].XTI = W[W.length - 1].XTI.concat(C), W.XTI = W.XTI.concat(C);
          break;
        case 2196:
          if (P.biff < 8)
            break;
          O != null && (O.Comment = C[1]);
          break;
        case 18:
          t["!protect"] = C;
          break;
        case 19:
          C !== 0 && P.WTF && console.error("Password verifier: " + C);
          break;
        case 133:
          s[C.pos] = C, P.snames.push(C.name);
          break;
        case 10:
          {
            if (--he)
              break;
            if (i.e) {
              if (i.e.r > 0 && i.e.c > 0) {
                if (i.e.r--, i.e.c--, t["!ref"] = Ee(i), a.sheetRows && a.sheetRows <= i.e.r) {
                  var we = i.e.r;
                  i.e.r = a.sheetRows - 1, t["!fullref"] = t["!ref"], t["!ref"] = Ee(i), i.e.r = we;
                }
                i.e.r++, i.e.c++;
              }
              fe.length > 0 && (t["!merges"] = fe), re.length > 0 && (t["!objects"] = re), ce.length > 0 && (t["!cols"] = ce), ie.length > 0 && (t["!rows"] = ie), F.Sheets.push(V);
            }
            l === "" ? o = t : n[l] = t, t = a.dense ? [] : {};
          }
          break;
        case 9:
        case 521:
        case 1033:
        case 2057:
          {
            if (P.biff === 8 && (P.biff = {
              /*::[*/
              9: 2,
              /*::[*/
              521: 3,
              /*::[*/
              1033: 4
            }[ne] || {
              /*::[*/
              512: 2,
              /*::[*/
              768: 3,
              /*::[*/
              1024: 4,
              /*::[*/
              1280: 5,
              /*::[*/
              1536: 8,
              /*::[*/
              2: 2,
              /*::[*/
              7: 2
            }[C.BIFFVer] || 8), P.biffguess = C.BIFFVer == 0, C.BIFFVer == 0 && C.dt == 4096 && (P.biff = 5, j = !0, wr(P.codepage = 28591)), P.biff == 8 && C.BIFFVer == 0 && C.dt == 16 && (P.biff = 2), he++)
              break;
            if (t = a.dense ? [] : {}, P.biff < 8 && !j && (j = !0, wr(P.codepage = a.codepage || 1252)), P.biff < 5 || C.BIFFVer == 0 && C.dt == 4096) {
              l === "" && (l = "Sheet1"), i = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
              var Fe = { pos: e.l - q, name: l };
              s[Fe.pos] = Fe, P.snames.push(l);
            } else
              l = (s[ee] || { name: "" }).name;
            C.dt == 32 && (t["!type"] = "chart"), C.dt == 64 && (t["!type"] = "macro"), fe = [], re = [], P.arrayf = y = [], ce = [], ie = [], Se = !1, V = { Hidden: (s[ee] || { hs: 0 }).hs, name: l };
          }
          break;
        case 515:
        case 3:
        case 2:
          t["!type"] == "chart" && (a.dense ? (t[C.r] || [])[C.c] : t[ue({ c: C.c, r: C.r })]) && ++C.c, _ = { ixfe: C.ixfe, XF: b[C.ixfe] || {}, v: C.val, t: "n" }, A > 0 && (_.z = U[_.ixfe >> 8 & 63]), yr(_, a, r.opts.Date1904), G({ c: C.c, r: C.r }, _, a);
          break;
        case 5:
        case 517:
          _ = { ixfe: C.ixfe, XF: b[C.ixfe], v: C.val, t: C.t }, A > 0 && (_.z = U[_.ixfe >> 8 & 63]), yr(_, a, r.opts.Date1904), G({ c: C.c, r: C.r }, _, a);
          break;
        case 638:
          _ = { ixfe: C.ixfe, XF: b[C.ixfe], v: C.rknum, t: "n" }, A > 0 && (_.z = U[_.ixfe >> 8 & 63]), yr(_, a, r.opts.Date1904), G({ c: C.c, r: C.r }, _, a);
          break;
        case 189:
          for (var ge = C.c; ge <= C.C; ++ge) {
            var ae = C.rkrec[ge - C.c][0];
            _ = { ixfe: ae, XF: b[ae], v: C.rkrec[ge - C.c][1], t: "n" }, A > 0 && (_.z = U[_.ixfe >> 8 & 63]), yr(_, a, r.opts.Date1904), G({ c: ge, r: C.r }, _, a);
          }
          break;
        case 6:
        case 518:
        case 1030:
          {
            if (C.val == "String") {
              c = C;
              break;
            }
            if (_ = ht(C.val, C.cell.ixfe, C.tt), _.XF = b[_.ixfe], a.cellFormula) {
              var Ne = C.formula;
              if (Ne && Ne[0] && Ne[0][0] && Ne[0][0][0] == "PtgExp") {
                var xr = Ne[0][0][1][0], Sr = Ne[0][0][1][1], Nr = ue({ r: xr, c: Sr });
                S[Nr] ? _.f = "" + Je(C.formula, i, C.cell, W, P) : _.F = ((a.dense ? (t[xr] || [])[Sr] : t[Nr]) || {}).F;
              } else
                _.f = "" + Je(C.formula, i, C.cell, W, P);
            }
            A > 0 && (_.z = U[_.ixfe >> 8 & 63]), yr(_, a, r.opts.Date1904), G(C.cell, _, a), c = C;
          }
          break;
        case 7:
        case 519:
          if (c)
            c.val = C, _ = ht(C, c.cell.ixfe, "s"), _.XF = b[_.ixfe], a.cellFormula && (_.f = "" + Je(c.formula, i, c.cell, W, P)), A > 0 && (_.z = U[_.ixfe >> 8 & 63]), yr(_, a, r.opts.Date1904), G(c.cell, _, a), c = null;
          else
            throw new Error("String record expects Formula");
          break;
        case 33:
        case 545:
          {
            y.push(C);
            var Fa = ue(C[0].s);
            if (d = a.dense ? (t[C[0].s.r] || [])[C[0].s.c] : t[Fa], a.cellFormula && d) {
              if (!c || !Fa || !d)
                break;
              d.f = "" + Je(C[1], i, C[0], W, P), d.F = Ee(C[0]);
            }
          }
          break;
        case 1212:
          {
            if (!a.cellFormula)
              break;
            if (x) {
              if (!c)
                break;
              S[ue(c.cell)] = C[0], d = a.dense ? (t[c.cell.r] || [])[c.cell.c] : t[ue(c.cell)], (d || {}).f = "" + Je(C[0], i, h, W, P);
            }
          }
          break;
        case 253:
          _ = ht(f[C.isst].t, C.ixfe, "s"), f[C.isst].h && (_.h = f[C.isst].h), _.XF = b[_.ixfe], A > 0 && (_.z = U[_.ixfe >> 8 & 63]), yr(_, a, r.opts.Date1904), G({ c: C.c, r: C.r }, _, a);
          break;
        case 513:
          a.sheetStubs && (_ = { ixfe: C.ixfe, XF: b[C.ixfe], t: "z" }, A > 0 && (_.z = U[_.ixfe >> 8 & 63]), yr(_, a, r.opts.Date1904), G({ c: C.c, r: C.r }, _, a));
          break;
        case 190:
          if (a.sheetStubs)
            for (var Vr = C.c; Vr <= C.C; ++Vr) {
              var or = C.ixfe[Vr - C.c];
              _ = { ixfe: or, XF: b[or], t: "z" }, A > 0 && (_.z = U[_.ixfe >> 8 & 63]), yr(_, a, r.opts.Date1904), G({ c: Vr, r: C.r }, _, a);
            }
          break;
        case 214:
        case 516:
        case 4:
          _ = ht(C.val, C.ixfe, "s"), _.XF = b[_.ixfe], A > 0 && (_.z = U[_.ixfe >> 8 & 63]), yr(_, a, r.opts.Date1904), G({ c: C.c, r: C.r }, _, a);
          break;
        case 0:
        case 512:
          he === 1 && (i = C);
          break;
        case 252:
          f = C;
          break;
        case 1054:
          if (P.biff == 4) {
            U[A++] = C[1];
            for (var Pr = 0; Pr < A + 163 && de[Pr] != C[1]; ++Pr)
              ;
            Pr >= 163 && aa(C[1], A + 163);
          } else
            aa(C[1], C[0]);
          break;
        case 30:
          {
            U[A++] = C;
            for (var Wr = 0; Wr < A + 163 && de[Wr] != C; ++Wr)
              ;
            Wr >= 163 && aa(C, A + 163);
          }
          break;
        case 229:
          fe = fe.concat(C);
          break;
        case 93:
          re[C.cmo[0]] = P.lastobj = C;
          break;
        case 438:
          P.lastobj.TxO = C;
          break;
        case 127:
          P.lastobj.ImData = C;
          break;
        case 440:
          for (g = C[0].s.r; g <= C[0].e.r; ++g)
            for (u = C[0].s.c; u <= C[0].e.c; ++u)
              d = a.dense ? (t[g] || [])[u] : t[ue({ c: u, r: g })], d && (d.l = C[1]);
          break;
        case 2048:
          for (g = C[0].s.r; g <= C[0].e.r; ++g)
            for (u = C[0].s.c; u <= C[0].e.c; ++u)
              d = a.dense ? (t[g] || [])[u] : t[ue({ c: u, r: g })], d && d.l && (d.l.Tooltip = C[1]);
          break;
        case 28:
          {
            if (P.biff <= 5 && P.biff >= 2)
              break;
            d = a.dense ? (t[C[0].r] || [])[C[0].c] : t[ue(C[0])];
            var Aa = re[C[2]];
            d || (a.dense ? (t[C[0].r] || (t[C[0].r] = []), d = t[C[0].r][C[0].c] = { t: "z" }) : d = t[ue(C[0])] = { t: "z" }, i.e.r = Math.max(i.e.r, C[0].r), i.s.r = Math.min(i.s.r, C[0].r), i.e.c = Math.max(i.e.c, C[0].c), i.s.c = Math.min(i.s.c, C[0].c)), d.c || (d.c = []), v = { a: C[1], t: Aa.TxO.t }, d.c.push(v);
          }
          break;
        case 2173:
          c1(b[C.ixfe], C.ext);
          break;
        case 125:
          {
            if (!P.cellStyles)
              break;
            for (; C.e >= C.s; )
              ce[C.e--] = { width: C.w / 256, level: C.level || 0, hidden: !!(C.flags & 1) }, Se || (Se = !0, d0(C.w / 256)), Ea(ce[C.e + 1]);
          }
          break;
        case 520:
          {
            var ar = {};
            C.level != null && (ie[C.r] = ar, ar.level = C.level), C.hidden && (ie[C.r] = ar, ar.hidden = !0), C.hpt && (ie[C.r] = ar, ar.hpt = C.hpt, ar.hpx = ja(C.hpt));
          }
          break;
        case 38:
        case 39:
        case 40:
        case 41:
          t["!margins"] || Ha(t["!margins"] = {}), t["!margins"][{ 38: "left", 39: "right", 40: "top", 41: "bottom" }[ne]] = C;
          break;
        case 161:
          t["!margins"] || Ha(t["!margins"] = {}), t["!margins"].header = C.header, t["!margins"].footer = C.footer;
          break;
        case 574:
          C.RTL && (F.Views[0].RTL = !0);
          break;
        case 146:
          I = C;
          break;
        case 2198:
          J = C;
          break;
        case 140:
          N = C;
          break;
        case 442:
          l ? V.CodeName = C || V.name : F.WBProps.CodeName = C || "ThisWorkbook";
          break;
      }
    } else
      Y || console.error("Missing Info for XLS Record 0x" + ne.toString(16)), e.l += q;
  }
  return r.SheetNames = Or(s).sort(function(Cr, pe) {
    return Number(Cr) - Number(pe);
  }).map(function(Cr) {
    return s[Cr].name;
  }), a.bookSheets || (r.Sheets = n), !r.SheetNames.length && o["!ref"] ? (r.SheetNames.push("Sheet1"), r.Sheets && (r.Sheets.Sheet1 = o)) : r.Preamble = o, r.Sheets && R.forEach(function(Cr, pe) {
    r.Sheets[r.SheetNames[pe]]["!autofilter"] = Cr;
  }), r.Strings = f, r.SSF = ze(de), P.enc && (r.Encryption = P.enc), J && (r.Themes = J), r.Metadata = {}, N !== void 0 && (r.Metadata.Country = N), W.names.length > 0 && (F.Names = W.names), r.Workbook = F, r;
}
var kn = {
  SI: "e0859ff2f94f6810ab9108002b27b3d9",
  DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
  UDI: "05d5cdd59c2e1b10939708002b2cf9ae"
};
function Hx(e, a, r) {
  var n = _e.find(e, "/!DocumentSummaryInformation");
  if (n && n.size > 0)
    try {
      var t = nn(n, rf, kn.DSI);
      for (var s in t)
        a[s] = t[s];
    } catch (l) {
      if (r.WTF)
        throw l;
    }
  var i = _e.find(e, "/!SummaryInformation");
  if (i && i.size > 0)
    try {
      var c = nn(i, af, kn.SI);
      for (var f in c)
        a[f] == null && (a[f] = c[f]);
    } catch (l) {
      if (r.WTF)
        throw l;
    }
  a.HeadingPairs && a.TitlesOfParts && (Ts(a.HeadingPairs, a.TitlesOfParts, a, r), delete a.HeadingPairs, delete a.TitlesOfParts);
}
function ni(e, a) {
  a || (a = {}), _0(a), In(), a.codepage && Zt(a.codepage);
  var r, n;
  if (e.FullPaths) {
    if (_e.find(e, "/encryption"))
      throw new Error("File is password-protected");
    r = _e.find(e, "!CompObj"), n = _e.find(e, "/Workbook") || _e.find(e, "/Book");
  } else {
    switch (a.type) {
      case "base64":
        e = kr(ur(e));
        break;
      case "binary":
        e = kr(e);
        break;
      case "buffer":
        break;
      case "array":
        Array.isArray(e) || (e = Array.prototype.slice.call(e));
        break;
    }
    $e(e, 0), n = { content: e };
  }
  var t, s;
  if (r && Mx(r), a.bookProps && !a.bookSheets)
    t = {};
  else {
    var i = me ? "buffer" : "array";
    if (n && n.content)
      t = Ux(n.content, a);
    else if ((s = _e.find(e, "PerfectOffice_MAIN")) && s.content)
      t = ba.to_workbook(s.content, (a.type = i, a));
    else if ((s = _e.find(e, "NativeContent_MAIN")) && s.content)
      t = ba.to_workbook(s.content, (a.type = i, a));
    else
      throw (s = _e.find(e, "MN0")) && s.content ? new Error("Unsupported Works 4 for Mac file") : new Error("Cannot find Workbook stream");
    a.bookVBA && e.FullPaths && _e.find(e, "/_VBA_PROJECT_CUR/VBA/dir") && (t.vbaraw = A1(e));
  }
  var c = {};
  return e.FullPaths && Hx(
    /*::((*/
    e,
    c,
    a
  ), t.Props = t.Custprops = c, a.bookFiles && (t.cfb = e), t;
}
var kt = {
  /*::[*/
  0: {
    /* n:"BrtRowHdr", */
    f: Tu
  },
  /*::[*/
  1: {
    /* n:"BrtCellBlank", */
    f: Au
  },
  /*::[*/
  2: {
    /* n:"BrtCellRk", */
    f: Pu
  },
  /*::[*/
  3: {
    /* n:"BrtCellError", */
    f: Du
  },
  /*::[*/
  4: {
    /* n:"BrtCellBool", */
    f: Cu
  },
  /*::[*/
  5: {
    /* n:"BrtCellReal", */
    f: Nu
  },
  /*::[*/
  6: {
    /* n:"BrtCellSt", */
    f: Bu
  },
  /*::[*/
  7: {
    /* n:"BrtCellIsst", */
    f: Ru
  },
  /*::[*/
  8: {
    /* n:"BrtFmlaString", */
    f: Wu
  },
  /*::[*/
  9: {
    /* n:"BrtFmlaNum", */
    f: Vu
  },
  /*::[*/
  10: {
    /* n:"BrtFmlaBool", */
    f: Uu
  },
  /*::[*/
  11: {
    /* n:"BrtFmlaError", */
    f: Hu
  },
  /*::[*/
  12: {
    /* n:"BrtShortBlank", */
    f: Su
  },
  /*::[*/
  13: {
    /* n:"BrtShortRk", */
    f: Lu
  },
  /*::[*/
  14: {
    /* n:"BrtShortError", */
    f: Ou
  },
  /*::[*/
  15: {
    /* n:"BrtShortBool", */
    f: yu
  },
  /*::[*/
  16: {
    /* n:"BrtShortReal", */
    f: Qs
  },
  /*::[*/
  17: {
    /* n:"BrtShortSt", */
    f: bu
  },
  /*::[*/
  18: {
    /* n:"BrtShortIsst", */
    f: Iu
  },
  /*::[*/
  19: {
    /* n:"BrtSSTItem", */
    f: f0
  },
  /*::[*/
  20: {
    /* n:"BrtPCDIMissing" */
  },
  /*::[*/
  21: {
    /* n:"BrtPCDINumber" */
  },
  /*::[*/
  22: {
    /* n:"BrtPCDIBoolean" */
  },
  /*::[*/
  23: {
    /* n:"BrtPCDIError" */
  },
  /*::[*/
  24: {
    /* n:"BrtPCDIString" */
  },
  /*::[*/
  25: {
    /* n:"BrtPCDIDatetime" */
  },
  /*::[*/
  26: {
    /* n:"BrtPCDIIndex" */
  },
  /*::[*/
  27: {
    /* n:"BrtPCDIAMissing" */
  },
  /*::[*/
  28: {
    /* n:"BrtPCDIANumber" */
  },
  /*::[*/
  29: {
    /* n:"BrtPCDIABoolean" */
  },
  /*::[*/
  30: {
    /* n:"BrtPCDIAError" */
  },
  /*::[*/
  31: {
    /* n:"BrtPCDIAString" */
  },
  /*::[*/
  32: {
    /* n:"BrtPCDIADatetime" */
  },
  /*::[*/
  33: {
    /* n:"BrtPCRRecord" */
  },
  /*::[*/
  34: {
    /* n:"BrtPCRRecordDt" */
  },
  /*::[*/
  35: {
    /* n:"BrtFRTBegin", */
    T: 1
  },
  /*::[*/
  36: {
    /* n:"BrtFRTEnd", */
    T: -1
  },
  /*::[*/
  37: {
    /* n:"BrtACBegin", */
    T: 1
  },
  /*::[*/
  38: {
    /* n:"BrtACEnd", */
    T: -1
  },
  /*::[*/
  39: {
    /* n:"BrtName", */
    f: vx
  },
  /*::[*/
  40: {
    /* n:"BrtIndexRowBlock" */
  },
  /*::[*/
  42: {
    /* n:"BrtIndexBlock" */
  },
  /*::[*/
  43: {
    /* n:"BrtFont", */
    f: Ul
  },
  /*::[*/
  44: {
    /* n:"BrtFmt", */
    f: bl
  },
  /*::[*/
  45: {
    /* n:"BrtFill", */
    f: Hl
  },
  /*::[*/
  46: {
    /* n:"BrtBorder", */
    f: Wl
  },
  /*::[*/
  47: {
    /* n:"BrtXF", */
    f: Vl
  },
  /*::[*/
  48: {
    /* n:"BrtStyle" */
  },
  /*::[*/
  49: {
    /* n:"BrtCellMeta", */
    f: Vc
  },
  /*::[*/
  50: {
    /* n:"BrtValueMeta" */
  },
  /*::[*/
  51: {
    /* n:"BrtMdb" */
    f: o1
  },
  /*::[*/
  52: {
    /* n:"BrtBeginFmd", */
    T: 1
  },
  /*::[*/
  53: {
    /* n:"BrtEndFmd", */
    T: -1
  },
  /*::[*/
  54: {
    /* n:"BrtBeginMdx", */
    T: 1
  },
  /*::[*/
  55: {
    /* n:"BrtEndMdx", */
    T: -1
  },
  /*::[*/
  56: {
    /* n:"BrtBeginMdxTuple", */
    T: 1
  },
  /*::[*/
  57: {
    /* n:"BrtEndMdxTuple", */
    T: -1
  },
  /*::[*/
  58: {
    /* n:"BrtMdxMbrIstr" */
  },
  /*::[*/
  59: {
    /* n:"BrtStr" */
  },
  /*::[*/
  60: {
    /* n:"BrtColInfo", */
    f: Ns
  },
  /*::[*/
  62: {
    /* n:"BrtCellRString", */
    f: Mu
  },
  /*::[*/
  63: {
    /* n:"BrtCalcChainItem$", */
    f: d1
  },
  /*::[*/
  64: {
    /* n:"BrtDVal", */
    f: Zu
  },
  /*::[*/
  65: {
    /* n:"BrtSxvcellNum" */
  },
  /*::[*/
  66: {
    /* n:"BrtSxvcellStr" */
  },
  /*::[*/
  67: {
    /* n:"BrtSxvcellBool" */
  },
  /*::[*/
  68: {
    /* n:"BrtSxvcellErr" */
  },
  /*::[*/
  69: {
    /* n:"BrtSxvcellDate" */
  },
  /*::[*/
  70: {
    /* n:"BrtSxvcellNil" */
  },
  /*::[*/
  128: {
    /* n:"BrtFileVersion" */
  },
  /*::[*/
  129: {
    /* n:"BrtBeginSheet", */
    T: 1
  },
  /*::[*/
  130: {
    /* n:"BrtEndSheet", */
    T: -1
  },
  /*::[*/
  131: {
    /* n:"BrtBeginBook", */
    T: 1,
    f: er,
    p: 0
  },
  /*::[*/
  132: {
    /* n:"BrtEndBook", */
    T: -1
  },
  /*::[*/
  133: {
    /* n:"BrtBeginWsViews", */
    T: 1
  },
  /*::[*/
  134: {
    /* n:"BrtEndWsViews", */
    T: -1
  },
  /*::[*/
  135: {
    /* n:"BrtBeginBookViews", */
    T: 1
  },
  /*::[*/
  136: {
    /* n:"BrtEndBookViews", */
    T: -1
  },
  /*::[*/
  137: {
    /* n:"BrtBeginWsView", */
    T: 1,
    f: Ju
  },
  /*::[*/
  138: {
    /* n:"BrtEndWsView", */
    T: -1
  },
  /*::[*/
  139: {
    /* n:"BrtBeginCsViews", */
    T: 1
  },
  /*::[*/
  140: {
    /* n:"BrtEndCsViews", */
    T: -1
  },
  /*::[*/
  141: {
    /* n:"BrtBeginCsView", */
    T: 1
  },
  /*::[*/
  142: {
    /* n:"BrtEndCsView", */
    T: -1
  },
  /*::[*/
  143: {
    /* n:"BrtBeginBundleShs", */
    T: 1
  },
  /*::[*/
  144: {
    /* n:"BrtEndBundleShs", */
    T: -1
  },
  /*::[*/
  145: {
    /* n:"BrtBeginSheetData", */
    T: 1
  },
  /*::[*/
  146: {
    /* n:"BrtEndSheetData", */
    T: -1
  },
  /*::[*/
  147: {
    /* n:"BrtWsProp", */
    f: Fu
  },
  /*::[*/
  148: {
    /* n:"BrtWsDim", */
    f: ku,
    p: 16
  },
  /*::[*/
  151: {
    /* n:"BrtPane", */
    f: $u
  },
  /*::[*/
  152: {
    /* n:"BrtSel" */
  },
  /*::[*/
  153: {
    /* n:"BrtWbProp", */
    f: xx
  },
  /*::[*/
  154: {
    /* n:"BrtWbFactoid" */
  },
  /*::[*/
  155: {
    /* n:"BrtFileRecover" */
  },
  /*::[*/
  156: {
    /* n:"BrtBundleSh", */
    f: ux
  },
  /*::[*/
  157: {
    /* n:"BrtCalcProp" */
  },
  /*::[*/
  158: {
    /* n:"BrtBookView" */
  },
  /*::[*/
  159: {
    /* n:"BrtBeginSst", */
    T: 1,
    f: nl
  },
  /*::[*/
  160: {
    /* n:"BrtEndSst", */
    T: -1
  },
  /*::[*/
  161: {
    /* n:"BrtBeginAFilter", */
    T: 1,
    f: la
  },
  /*::[*/
  162: {
    /* n:"BrtEndAFilter", */
    T: -1
  },
  /*::[*/
  163: {
    /* n:"BrtBeginFilterColumn", */
    T: 1
  },
  /*::[*/
  164: {
    /* n:"BrtEndFilterColumn", */
    T: -1
  },
  /*::[*/
  165: {
    /* n:"BrtBeginFilters", */
    T: 1
  },
  /*::[*/
  166: {
    /* n:"BrtEndFilters", */
    T: -1
  },
  /*::[*/
  167: {
    /* n:"BrtFilter" */
  },
  /*::[*/
  168: {
    /* n:"BrtColorFilter" */
  },
  /*::[*/
  169: {
    /* n:"BrtIconFilter" */
  },
  /*::[*/
  170: {
    /* n:"BrtTop10Filter" */
  },
  /*::[*/
  171: {
    /* n:"BrtDynamicFilter" */
  },
  /*::[*/
  172: {
    /* n:"BrtBeginCustomFilters", */
    T: 1
  },
  /*::[*/
  173: {
    /* n:"BrtEndCustomFilters", */
    T: -1
  },
  /*::[*/
  174: {
    /* n:"BrtCustomFilter" */
  },
  /*::[*/
  175: {
    /* n:"BrtAFilterDateGroupItem" */
  },
  /*::[*/
  176: {
    /* n:"BrtMergeCell", */
    f: Gu
  },
  /*::[*/
  177: {
    /* n:"BrtBeginMergeCells", */
    T: 1
  },
  /*::[*/
  178: {
    /* n:"BrtEndMergeCells", */
    T: -1
  },
  /*::[*/
  179: {
    /* n:"BrtBeginPivotCacheDef", */
    T: 1
  },
  /*::[*/
  180: {
    /* n:"BrtEndPivotCacheDef", */
    T: -1
  },
  /*::[*/
  181: {
    /* n:"BrtBeginPCDFields", */
    T: 1
  },
  /*::[*/
  182: {
    /* n:"BrtEndPCDFields", */
    T: -1
  },
  /*::[*/
  183: {
    /* n:"BrtBeginPCDField", */
    T: 1
  },
  /*::[*/
  184: {
    /* n:"BrtEndPCDField", */
    T: -1
  },
  /*::[*/
  185: {
    /* n:"BrtBeginPCDSource", */
    T: 1
  },
  /*::[*/
  186: {
    /* n:"BrtEndPCDSource", */
    T: -1
  },
  /*::[*/
  187: {
    /* n:"BrtBeginPCDSRange", */
    T: 1
  },
  /*::[*/
  188: {
    /* n:"BrtEndPCDSRange", */
    T: -1
  },
  /*::[*/
  189: {
    /* n:"BrtBeginPCDFAtbl", */
    T: 1
  },
  /*::[*/
  190: {
    /* n:"BrtEndPCDFAtbl", */
    T: -1
  },
  /*::[*/
  191: {
    /* n:"BrtBeginPCDIRun", */
    T: 1
  },
  /*::[*/
  192: {
    /* n:"BrtEndPCDIRun", */
    T: -1
  },
  /*::[*/
  193: {
    /* n:"BrtBeginPivotCacheRecords", */
    T: 1
  },
  /*::[*/
  194: {
    /* n:"BrtEndPivotCacheRecords", */
    T: -1
  },
  /*::[*/
  195: {
    /* n:"BrtBeginPCDHierarchies", */
    T: 1
  },
  /*::[*/
  196: {
    /* n:"BrtEndPCDHierarchies", */
    T: -1
  },
  /*::[*/
  197: {
    /* n:"BrtBeginPCDHierarchy", */
    T: 1
  },
  /*::[*/
  198: {
    /* n:"BrtEndPCDHierarchy", */
    T: -1
  },
  /*::[*/
  199: {
    /* n:"BrtBeginPCDHFieldsUsage", */
    T: 1
  },
  /*::[*/
  200: {
    /* n:"BrtEndPCDHFieldsUsage", */
    T: -1
  },
  /*::[*/
  201: {
    /* n:"BrtBeginExtConnection", */
    T: 1
  },
  /*::[*/
  202: {
    /* n:"BrtEndExtConnection", */
    T: -1
  },
  /*::[*/
  203: {
    /* n:"BrtBeginECDbProps", */
    T: 1
  },
  /*::[*/
  204: {
    /* n:"BrtEndECDbProps", */
    T: -1
  },
  /*::[*/
  205: {
    /* n:"BrtBeginECOlapProps", */
    T: 1
  },
  /*::[*/
  206: {
    /* n:"BrtEndECOlapProps", */
    T: -1
  },
  /*::[*/
  207: {
    /* n:"BrtBeginPCDSConsol", */
    T: 1
  },
  /*::[*/
  208: {
    /* n:"BrtEndPCDSConsol", */
    T: -1
  },
  /*::[*/
  209: {
    /* n:"BrtBeginPCDSCPages", */
    T: 1
  },
  /*::[*/
  210: {
    /* n:"BrtEndPCDSCPages", */
    T: -1
  },
  /*::[*/
  211: {
    /* n:"BrtBeginPCDSCPage", */
    T: 1
  },
  /*::[*/
  212: {
    /* n:"BrtEndPCDSCPage", */
    T: -1
  },
  /*::[*/
  213: {
    /* n:"BrtBeginPCDSCPItem", */
    T: 1
  },
  /*::[*/
  214: {
    /* n:"BrtEndPCDSCPItem", */
    T: -1
  },
  /*::[*/
  215: {
    /* n:"BrtBeginPCDSCSets", */
    T: 1
  },
  /*::[*/
  216: {
    /* n:"BrtEndPCDSCSets", */
    T: -1
  },
  /*::[*/
  217: {
    /* n:"BrtBeginPCDSCSet", */
    T: 1
  },
  /*::[*/
  218: {
    /* n:"BrtEndPCDSCSet", */
    T: -1
  },
  /*::[*/
  219: {
    /* n:"BrtBeginPCDFGroup", */
    T: 1
  },
  /*::[*/
  220: {
    /* n:"BrtEndPCDFGroup", */
    T: -1
  },
  /*::[*/
  221: {
    /* n:"BrtBeginPCDFGItems", */
    T: 1
  },
  /*::[*/
  222: {
    /* n:"BrtEndPCDFGItems", */
    T: -1
  },
  /*::[*/
  223: {
    /* n:"BrtBeginPCDFGRange", */
    T: 1
  },
  /*::[*/
  224: {
    /* n:"BrtEndPCDFGRange", */
    T: -1
  },
  /*::[*/
  225: {
    /* n:"BrtBeginPCDFGDiscrete", */
    T: 1
  },
  /*::[*/
  226: {
    /* n:"BrtEndPCDFGDiscrete", */
    T: -1
  },
  /*::[*/
  227: {
    /* n:"BrtBeginPCDSDTupleCache", */
    T: 1
  },
  /*::[*/
  228: {
    /* n:"BrtEndPCDSDTupleCache", */
    T: -1
  },
  /*::[*/
  229: {
    /* n:"BrtBeginPCDSDTCEntries", */
    T: 1
  },
  /*::[*/
  230: {
    /* n:"BrtEndPCDSDTCEntries", */
    T: -1
  },
  /*::[*/
  231: {
    /* n:"BrtBeginPCDSDTCEMembers", */
    T: 1
  },
  /*::[*/
  232: {
    /* n:"BrtEndPCDSDTCEMembers", */
    T: -1
  },
  /*::[*/
  233: {
    /* n:"BrtBeginPCDSDTCEMember", */
    T: 1
  },
  /*::[*/
  234: {
    /* n:"BrtEndPCDSDTCEMember", */
    T: -1
  },
  /*::[*/
  235: {
    /* n:"BrtBeginPCDSDTCQueries", */
    T: 1
  },
  /*::[*/
  236: {
    /* n:"BrtEndPCDSDTCQueries", */
    T: -1
  },
  /*::[*/
  237: {
    /* n:"BrtBeginPCDSDTCQuery", */
    T: 1
  },
  /*::[*/
  238: {
    /* n:"BrtEndPCDSDTCQuery", */
    T: -1
  },
  /*::[*/
  239: {
    /* n:"BrtBeginPCDSDTCSets", */
    T: 1
  },
  /*::[*/
  240: {
    /* n:"BrtEndPCDSDTCSets", */
    T: -1
  },
  /*::[*/
  241: {
    /* n:"BrtBeginPCDSDTCSet", */
    T: 1
  },
  /*::[*/
  242: {
    /* n:"BrtEndPCDSDTCSet", */
    T: -1
  },
  /*::[*/
  243: {
    /* n:"BrtBeginPCDCalcItems", */
    T: 1
  },
  /*::[*/
  244: {
    /* n:"BrtEndPCDCalcItems", */
    T: -1
  },
  /*::[*/
  245: {
    /* n:"BrtBeginPCDCalcItem", */
    T: 1
  },
  /*::[*/
  246: {
    /* n:"BrtEndPCDCalcItem", */
    T: -1
  },
  /*::[*/
  247: {
    /* n:"BrtBeginPRule", */
    T: 1
  },
  /*::[*/
  248: {
    /* n:"BrtEndPRule", */
    T: -1
  },
  /*::[*/
  249: {
    /* n:"BrtBeginPRFilters", */
    T: 1
  },
  /*::[*/
  250: {
    /* n:"BrtEndPRFilters", */
    T: -1
  },
  /*::[*/
  251: {
    /* n:"BrtBeginPRFilter", */
    T: 1
  },
  /*::[*/
  252: {
    /* n:"BrtEndPRFilter", */
    T: -1
  },
  /*::[*/
  253: {
    /* n:"BrtBeginPNames", */
    T: 1
  },
  /*::[*/
  254: {
    /* n:"BrtEndPNames", */
    T: -1
  },
  /*::[*/
  255: {
    /* n:"BrtBeginPName", */
    T: 1
  },
  /*::[*/
  256: {
    /* n:"BrtEndPName", */
    T: -1
  },
  /*::[*/
  257: {
    /* n:"BrtBeginPNPairs", */
    T: 1
  },
  /*::[*/
  258: {
    /* n:"BrtEndPNPairs", */
    T: -1
  },
  /*::[*/
  259: {
    /* n:"BrtBeginPNPair", */
    T: 1
  },
  /*::[*/
  260: {
    /* n:"BrtEndPNPair", */
    T: -1
  },
  /*::[*/
  261: {
    /* n:"BrtBeginECWebProps", */
    T: 1
  },
  /*::[*/
  262: {
    /* n:"BrtEndECWebProps", */
    T: -1
  },
  /*::[*/
  263: {
    /* n:"BrtBeginEcWpTables", */
    T: 1
  },
  /*::[*/
  264: {
    /* n:"BrtEndECWPTables", */
    T: -1
  },
  /*::[*/
  265: {
    /* n:"BrtBeginECParams", */
    T: 1
  },
  /*::[*/
  266: {
    /* n:"BrtEndECParams", */
    T: -1
  },
  /*::[*/
  267: {
    /* n:"BrtBeginECParam", */
    T: 1
  },
  /*::[*/
  268: {
    /* n:"BrtEndECParam", */
    T: -1
  },
  /*::[*/
  269: {
    /* n:"BrtBeginPCDKPIs", */
    T: 1
  },
  /*::[*/
  270: {
    /* n:"BrtEndPCDKPIs", */
    T: -1
  },
  /*::[*/
  271: {
    /* n:"BrtBeginPCDKPI", */
    T: 1
  },
  /*::[*/
  272: {
    /* n:"BrtEndPCDKPI", */
    T: -1
  },
  /*::[*/
  273: {
    /* n:"BrtBeginDims", */
    T: 1
  },
  /*::[*/
  274: {
    /* n:"BrtEndDims", */
    T: -1
  },
  /*::[*/
  275: {
    /* n:"BrtBeginDim", */
    T: 1
  },
  /*::[*/
  276: {
    /* n:"BrtEndDim", */
    T: -1
  },
  /*::[*/
  277: {
    /* n:"BrtIndexPartEnd" */
  },
  /*::[*/
  278: {
    /* n:"BrtBeginStyleSheet", */
    T: 1
  },
  /*::[*/
  279: {
    /* n:"BrtEndStyleSheet", */
    T: -1
  },
  /*::[*/
  280: {
    /* n:"BrtBeginSXView", */
    T: 1
  },
  /*::[*/
  281: {
    /* n:"BrtEndSXVI", */
    T: -1
  },
  /*::[*/
  282: {
    /* n:"BrtBeginSXVI", */
    T: 1
  },
  /*::[*/
  283: {
    /* n:"BrtBeginSXVIs", */
    T: 1
  },
  /*::[*/
  284: {
    /* n:"BrtEndSXVIs", */
    T: -1
  },
  /*::[*/
  285: {
    /* n:"BrtBeginSXVD", */
    T: 1
  },
  /*::[*/
  286: {
    /* n:"BrtEndSXVD", */
    T: -1
  },
  /*::[*/
  287: {
    /* n:"BrtBeginSXVDs", */
    T: 1
  },
  /*::[*/
  288: {
    /* n:"BrtEndSXVDs", */
    T: -1
  },
  /*::[*/
  289: {
    /* n:"BrtBeginSXPI", */
    T: 1
  },
  /*::[*/
  290: {
    /* n:"BrtEndSXPI", */
    T: -1
  },
  /*::[*/
  291: {
    /* n:"BrtBeginSXPIs", */
    T: 1
  },
  /*::[*/
  292: {
    /* n:"BrtEndSXPIs", */
    T: -1
  },
  /*::[*/
  293: {
    /* n:"BrtBeginSXDI", */
    T: 1
  },
  /*::[*/
  294: {
    /* n:"BrtEndSXDI", */
    T: -1
  },
  /*::[*/
  295: {
    /* n:"BrtBeginSXDIs", */
    T: 1
  },
  /*::[*/
  296: {
    /* n:"BrtEndSXDIs", */
    T: -1
  },
  /*::[*/
  297: {
    /* n:"BrtBeginSXLI", */
    T: 1
  },
  /*::[*/
  298: {
    /* n:"BrtEndSXLI", */
    T: -1
  },
  /*::[*/
  299: {
    /* n:"BrtBeginSXLIRws", */
    T: 1
  },
  /*::[*/
  300: {
    /* n:"BrtEndSXLIRws", */
    T: -1
  },
  /*::[*/
  301: {
    /* n:"BrtBeginSXLICols", */
    T: 1
  },
  /*::[*/
  302: {
    /* n:"BrtEndSXLICols", */
    T: -1
  },
  /*::[*/
  303: {
    /* n:"BrtBeginSXFormat", */
    T: 1
  },
  /*::[*/
  304: {
    /* n:"BrtEndSXFormat", */
    T: -1
  },
  /*::[*/
  305: {
    /* n:"BrtBeginSXFormats", */
    T: 1
  },
  /*::[*/
  306: {
    /* n:"BrtEndSxFormats", */
    T: -1
  },
  /*::[*/
  307: {
    /* n:"BrtBeginSxSelect", */
    T: 1
  },
  /*::[*/
  308: {
    /* n:"BrtEndSxSelect", */
    T: -1
  },
  /*::[*/
  309: {
    /* n:"BrtBeginISXVDRws", */
    T: 1
  },
  /*::[*/
  310: {
    /* n:"BrtEndISXVDRws", */
    T: -1
  },
  /*::[*/
  311: {
    /* n:"BrtBeginISXVDCols", */
    T: 1
  },
  /*::[*/
  312: {
    /* n:"BrtEndISXVDCols", */
    T: -1
  },
  /*::[*/
  313: {
    /* n:"BrtEndSXLocation", */
    T: -1
  },
  /*::[*/
  314: {
    /* n:"BrtBeginSXLocation", */
    T: 1
  },
  /*::[*/
  315: {
    /* n:"BrtEndSXView", */
    T: -1
  },
  /*::[*/
  316: {
    /* n:"BrtBeginSXTHs", */
    T: 1
  },
  /*::[*/
  317: {
    /* n:"BrtEndSXTHs", */
    T: -1
  },
  /*::[*/
  318: {
    /* n:"BrtBeginSXTH", */
    T: 1
  },
  /*::[*/
  319: {
    /* n:"BrtEndSXTH", */
    T: -1
  },
  /*::[*/
  320: {
    /* n:"BrtBeginISXTHRws", */
    T: 1
  },
  /*::[*/
  321: {
    /* n:"BrtEndISXTHRws", */
    T: -1
  },
  /*::[*/
  322: {
    /* n:"BrtBeginISXTHCols", */
    T: 1
  },
  /*::[*/
  323: {
    /* n:"BrtEndISXTHCols", */
    T: -1
  },
  /*::[*/
  324: {
    /* n:"BrtBeginSXTDMPS", */
    T: 1
  },
  /*::[*/
  325: {
    /* n:"BrtEndSXTDMPs", */
    T: -1
  },
  /*::[*/
  326: {
    /* n:"BrtBeginSXTDMP", */
    T: 1
  },
  /*::[*/
  327: {
    /* n:"BrtEndSXTDMP", */
    T: -1
  },
  /*::[*/
  328: {
    /* n:"BrtBeginSXTHItems", */
    T: 1
  },
  /*::[*/
  329: {
    /* n:"BrtEndSXTHItems", */
    T: -1
  },
  /*::[*/
  330: {
    /* n:"BrtBeginSXTHItem", */
    T: 1
  },
  /*::[*/
  331: {
    /* n:"BrtEndSXTHItem", */
    T: -1
  },
  /*::[*/
  332: {
    /* n:"BrtBeginMetadata", */
    T: 1
  },
  /*::[*/
  333: {
    /* n:"BrtEndMetadata", */
    T: -1
  },
  /*::[*/
  334: {
    /* n:"BrtBeginEsmdtinfo", */
    T: 1
  },
  /*::[*/
  335: {
    /* n:"BrtMdtinfo", */
    f: f1
  },
  /*::[*/
  336: {
    /* n:"BrtEndEsmdtinfo", */
    T: -1
  },
  /*::[*/
  337: {
    /* n:"BrtBeginEsmdb", */
    f: l1,
    T: 1
  },
  /*::[*/
  338: {
    /* n:"BrtEndEsmdb", */
    T: -1
  },
  /*::[*/
  339: {
    /* n:"BrtBeginEsfmd", */
    T: 1
  },
  /*::[*/
  340: {
    /* n:"BrtEndEsfmd", */
    T: -1
  },
  /*::[*/
  341: {
    /* n:"BrtBeginSingleCells", */
    T: 1
  },
  /*::[*/
  342: {
    /* n:"BrtEndSingleCells", */
    T: -1
  },
  /*::[*/
  343: {
    /* n:"BrtBeginList", */
    T: 1
  },
  /*::[*/
  344: {
    /* n:"BrtEndList", */
    T: -1
  },
  /*::[*/
  345: {
    /* n:"BrtBeginListCols", */
    T: 1
  },
  /*::[*/
  346: {
    /* n:"BrtEndListCols", */
    T: -1
  },
  /*::[*/
  347: {
    /* n:"BrtBeginListCol", */
    T: 1
  },
  /*::[*/
  348: {
    /* n:"BrtEndListCol", */
    T: -1
  },
  /*::[*/
  349: {
    /* n:"BrtBeginListXmlCPr", */
    T: 1
  },
  /*::[*/
  350: {
    /* n:"BrtEndListXmlCPr", */
    T: -1
  },
  /*::[*/
  351: {
    /* n:"BrtListCCFmla" */
  },
  /*::[*/
  352: {
    /* n:"BrtListTrFmla" */
  },
  /*::[*/
  353: {
    /* n:"BrtBeginExternals", */
    T: 1
  },
  /*::[*/
  354: {
    /* n:"BrtEndExternals", */
    T: -1
  },
  /*::[*/
  355: {
    /* n:"BrtSupBookSrc", */
    f: Ht
  },
  /*::[*/
  357: {
    /* n:"BrtSupSelf" */
  },
  /*::[*/
  358: {
    /* n:"BrtSupSame" */
  },
  /*::[*/
  359: {
    /* n:"BrtSupTabs" */
  },
  /*::[*/
  360: {
    /* n:"BrtBeginSupBook", */
    T: 1
  },
  /*::[*/
  361: {
    /* n:"BrtPlaceholderName" */
  },
  /*::[*/
  362: {
    /* n:"BrtExternSheet", */
    f: Is
  },
  /*::[*/
  363: {
    /* n:"BrtExternTableStart" */
  },
  /*::[*/
  364: {
    /* n:"BrtExternTableEnd" */
  },
  /*::[*/
  366: {
    /* n:"BrtExternRowHdr" */
  },
  /*::[*/
  367: {
    /* n:"BrtExternCellBlank" */
  },
  /*::[*/
  368: {
    /* n:"BrtExternCellReal" */
  },
  /*::[*/
  369: {
    /* n:"BrtExternCellBool" */
  },
  /*::[*/
  370: {
    /* n:"BrtExternCellError" */
  },
  /*::[*/
  371: {
    /* n:"BrtExternCellString" */
  },
  /*::[*/
  372: {
    /* n:"BrtBeginEsmdx", */
    T: 1
  },
  /*::[*/
  373: {
    /* n:"BrtEndEsmdx", */
    T: -1
  },
  /*::[*/
  374: {
    /* n:"BrtBeginMdxSet", */
    T: 1
  },
  /*::[*/
  375: {
    /* n:"BrtEndMdxSet", */
    T: -1
  },
  /*::[*/
  376: {
    /* n:"BrtBeginMdxMbrProp", */
    T: 1
  },
  /*::[*/
  377: {
    /* n:"BrtEndMdxMbrProp", */
    T: -1
  },
  /*::[*/
  378: {
    /* n:"BrtBeginMdxKPI", */
    T: 1
  },
  /*::[*/
  379: {
    /* n:"BrtEndMdxKPI", */
    T: -1
  },
  /*::[*/
  380: {
    /* n:"BrtBeginEsstr", */
    T: 1
  },
  /*::[*/
  381: {
    /* n:"BrtEndEsstr", */
    T: -1
  },
  /*::[*/
  382: {
    /* n:"BrtBeginPRFItem", */
    T: 1
  },
  /*::[*/
  383: {
    /* n:"BrtEndPRFItem", */
    T: -1
  },
  /*::[*/
  384: {
    /* n:"BrtBeginPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  385: {
    /* n:"BrtEndPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  386: {
    /* n:"BrtBeginPivotCacheID", */
    T: 1
  },
  /*::[*/
  387: {
    /* n:"BrtEndPivotCacheID", */
    T: -1
  },
  /*::[*/
  388: {
    /* n:"BrtBeginISXVIs", */
    T: 1
  },
  /*::[*/
  389: {
    /* n:"BrtEndISXVIs", */
    T: -1
  },
  /*::[*/
  390: {
    /* n:"BrtBeginColInfos", */
    T: 1
  },
  /*::[*/
  391: {
    /* n:"BrtEndColInfos", */
    T: -1
  },
  /*::[*/
  392: {
    /* n:"BrtBeginRwBrk", */
    T: 1
  },
  /*::[*/
  393: {
    /* n:"BrtEndRwBrk", */
    T: -1
  },
  /*::[*/
  394: {
    /* n:"BrtBeginColBrk", */
    T: 1
  },
  /*::[*/
  395: {
    /* n:"BrtEndColBrk", */
    T: -1
  },
  /*::[*/
  396: {
    /* n:"BrtBrk" */
  },
  /*::[*/
  397: {
    /* n:"BrtUserBookView" */
  },
  /*::[*/
  398: {
    /* n:"BrtInfo" */
  },
  /*::[*/
  399: {
    /* n:"BrtCUsr" */
  },
  /*::[*/
  400: {
    /* n:"BrtUsr" */
  },
  /*::[*/
  401: {
    /* n:"BrtBeginUsers", */
    T: 1
  },
  /*::[*/
  403: {
    /* n:"BrtEOF" */
  },
  /*::[*/
  404: {
    /* n:"BrtUCR" */
  },
  /*::[*/
  405: {
    /* n:"BrtRRInsDel" */
  },
  /*::[*/
  406: {
    /* n:"BrtRREndInsDel" */
  },
  /*::[*/
  407: {
    /* n:"BrtRRMove" */
  },
  /*::[*/
  408: {
    /* n:"BrtRREndMove" */
  },
  /*::[*/
  409: {
    /* n:"BrtRRChgCell" */
  },
  /*::[*/
  410: {
    /* n:"BrtRREndChgCell" */
  },
  /*::[*/
  411: {
    /* n:"BrtRRHeader" */
  },
  /*::[*/
  412: {
    /* n:"BrtRRUserView" */
  },
  /*::[*/
  413: {
    /* n:"BrtRRRenSheet" */
  },
  /*::[*/
  414: {
    /* n:"BrtRRInsertSh" */
  },
  /*::[*/
  415: {
    /* n:"BrtRRDefName" */
  },
  /*::[*/
  416: {
    /* n:"BrtRRNote" */
  },
  /*::[*/
  417: {
    /* n:"BrtRRConflict" */
  },
  /*::[*/
  418: {
    /* n:"BrtRRTQSIF" */
  },
  /*::[*/
  419: {
    /* n:"BrtRRFormat" */
  },
  /*::[*/
  420: {
    /* n:"BrtRREndFormat" */
  },
  /*::[*/
  421: {
    /* n:"BrtRRAutoFmt" */
  },
  /*::[*/
  422: {
    /* n:"BrtBeginUserShViews", */
    T: 1
  },
  /*::[*/
  423: {
    /* n:"BrtBeginUserShView", */
    T: 1
  },
  /*::[*/
  424: {
    /* n:"BrtEndUserShView", */
    T: -1
  },
  /*::[*/
  425: {
    /* n:"BrtEndUserShViews", */
    T: -1
  },
  /*::[*/
  426: {
    /* n:"BrtArrFmla", */
    f: zu
  },
  /*::[*/
  427: {
    /* n:"BrtShrFmla", */
    f: ju
  },
  /*::[*/
  428: {
    /* n:"BrtTable" */
  },
  /*::[*/
  429: {
    /* n:"BrtBeginExtConnections", */
    T: 1
  },
  /*::[*/
  430: {
    /* n:"BrtEndExtConnections", */
    T: -1
  },
  /*::[*/
  431: {
    /* n:"BrtBeginPCDCalcMems", */
    T: 1
  },
  /*::[*/
  432: {
    /* n:"BrtEndPCDCalcMems", */
    T: -1
  },
  /*::[*/
  433: {
    /* n:"BrtBeginPCDCalcMem", */
    T: 1
  },
  /*::[*/
  434: {
    /* n:"BrtEndPCDCalcMem", */
    T: -1
  },
  /*::[*/
  435: {
    /* n:"BrtBeginPCDHGLevels", */
    T: 1
  },
  /*::[*/
  436: {
    /* n:"BrtEndPCDHGLevels", */
    T: -1
  },
  /*::[*/
  437: {
    /* n:"BrtBeginPCDHGLevel", */
    T: 1
  },
  /*::[*/
  438: {
    /* n:"BrtEndPCDHGLevel", */
    T: -1
  },
  /*::[*/
  439: {
    /* n:"BrtBeginPCDHGLGroups", */
    T: 1
  },
  /*::[*/
  440: {
    /* n:"BrtEndPCDHGLGroups", */
    T: -1
  },
  /*::[*/
  441: {
    /* n:"BrtBeginPCDHGLGroup", */
    T: 1
  },
  /*::[*/
  442: {
    /* n:"BrtEndPCDHGLGroup", */
    T: -1
  },
  /*::[*/
  443: {
    /* n:"BrtBeginPCDHGLGMembers", */
    T: 1
  },
  /*::[*/
  444: {
    /* n:"BrtEndPCDHGLGMembers", */
    T: -1
  },
  /*::[*/
  445: {
    /* n:"BrtBeginPCDHGLGMember", */
    T: 1
  },
  /*::[*/
  446: {
    /* n:"BrtEndPCDHGLGMember", */
    T: -1
  },
  /*::[*/
  447: {
    /* n:"BrtBeginQSI", */
    T: 1
  },
  /*::[*/
  448: {
    /* n:"BrtEndQSI", */
    T: -1
  },
  /*::[*/
  449: {
    /* n:"BrtBeginQSIR", */
    T: 1
  },
  /*::[*/
  450: {
    /* n:"BrtEndQSIR", */
    T: -1
  },
  /*::[*/
  451: {
    /* n:"BrtBeginDeletedNames", */
    T: 1
  },
  /*::[*/
  452: {
    /* n:"BrtEndDeletedNames", */
    T: -1
  },
  /*::[*/
  453: {
    /* n:"BrtBeginDeletedName", */
    T: 1
  },
  /*::[*/
  454: {
    /* n:"BrtEndDeletedName", */
    T: -1
  },
  /*::[*/
  455: {
    /* n:"BrtBeginQSIFs", */
    T: 1
  },
  /*::[*/
  456: {
    /* n:"BrtEndQSIFs", */
    T: -1
  },
  /*::[*/
  457: {
    /* n:"BrtBeginQSIF", */
    T: 1
  },
  /*::[*/
  458: {
    /* n:"BrtEndQSIF", */
    T: -1
  },
  /*::[*/
  459: {
    /* n:"BrtBeginAutoSortScope", */
    T: 1
  },
  /*::[*/
  460: {
    /* n:"BrtEndAutoSortScope", */
    T: -1
  },
  /*::[*/
  461: {
    /* n:"BrtBeginConditionalFormatting", */
    T: 1
  },
  /*::[*/
  462: {
    /* n:"BrtEndConditionalFormatting", */
    T: -1
  },
  /*::[*/
  463: {
    /* n:"BrtBeginCFRule", */
    T: 1
  },
  /*::[*/
  464: {
    /* n:"BrtEndCFRule", */
    T: -1
  },
  /*::[*/
  465: {
    /* n:"BrtBeginIconSet", */
    T: 1
  },
  /*::[*/
  466: {
    /* n:"BrtEndIconSet", */
    T: -1
  },
  /*::[*/
  467: {
    /* n:"BrtBeginDatabar", */
    T: 1
  },
  /*::[*/
  468: {
    /* n:"BrtEndDatabar", */
    T: -1
  },
  /*::[*/
  469: {
    /* n:"BrtBeginColorScale", */
    T: 1
  },
  /*::[*/
  470: {
    /* n:"BrtEndColorScale", */
    T: -1
  },
  /*::[*/
  471: {
    /* n:"BrtCFVO" */
  },
  /*::[*/
  472: {
    /* n:"BrtExternValueMeta" */
  },
  /*::[*/
  473: {
    /* n:"BrtBeginColorPalette", */
    T: 1
  },
  /*::[*/
  474: {
    /* n:"BrtEndColorPalette", */
    T: -1
  },
  /*::[*/
  475: {
    /* n:"BrtIndexedColor" */
  },
  /*::[*/
  476: {
    /* n:"BrtMargins", */
    f: Yu
  },
  /*::[*/
  477: {
    /* n:"BrtPrintOptions" */
  },
  /*::[*/
  478: {
    /* n:"BrtPageSetup" */
  },
  /*::[*/
  479: {
    /* n:"BrtBeginHeaderFooter", */
    T: 1
  },
  /*::[*/
  480: {
    /* n:"BrtEndHeaderFooter", */
    T: -1
  },
  /*::[*/
  481: {
    /* n:"BrtBeginSXCrtFormat", */
    T: 1
  },
  /*::[*/
  482: {
    /* n:"BrtEndSXCrtFormat", */
    T: -1
  },
  /*::[*/
  483: {
    /* n:"BrtBeginSXCrtFormats", */
    T: 1
  },
  /*::[*/
  484: {
    /* n:"BrtEndSXCrtFormats", */
    T: -1
  },
  /*::[*/
  485: {
    /* n:"BrtWsFmtInfo", */
    f: wu
  },
  /*::[*/
  486: {
    /* n:"BrtBeginMgs", */
    T: 1
  },
  /*::[*/
  487: {
    /* n:"BrtEndMGs", */
    T: -1
  },
  /*::[*/
  488: {
    /* n:"BrtBeginMGMaps", */
    T: 1
  },
  /*::[*/
  489: {
    /* n:"BrtEndMGMaps", */
    T: -1
  },
  /*::[*/
  490: {
    /* n:"BrtBeginMG", */
    T: 1
  },
  /*::[*/
  491: {
    /* n:"BrtEndMG", */
    T: -1
  },
  /*::[*/
  492: {
    /* n:"BrtBeginMap", */
    T: 1
  },
  /*::[*/
  493: {
    /* n:"BrtEndMap", */
    T: -1
  },
  /*::[*/
  494: {
    /* n:"BrtHLink", */
    f: Xu
  },
  /*::[*/
  495: {
    /* n:"BrtBeginDCon", */
    T: 1
  },
  /*::[*/
  496: {
    /* n:"BrtEndDCon", */
    T: -1
  },
  /*::[*/
  497: {
    /* n:"BrtBeginDRefs", */
    T: 1
  },
  /*::[*/
  498: {
    /* n:"BrtEndDRefs", */
    T: -1
  },
  /*::[*/
  499: {
    /* n:"BrtDRef" */
  },
  /*::[*/
  500: {
    /* n:"BrtBeginScenMan", */
    T: 1
  },
  /*::[*/
  501: {
    /* n:"BrtEndScenMan", */
    T: -1
  },
  /*::[*/
  502: {
    /* n:"BrtBeginSct", */
    T: 1
  },
  /*::[*/
  503: {
    /* n:"BrtEndSct", */
    T: -1
  },
  /*::[*/
  504: {
    /* n:"BrtSlc" */
  },
  /*::[*/
  505: {
    /* n:"BrtBeginDXFs", */
    T: 1
  },
  /*::[*/
  506: {
    /* n:"BrtEndDXFs", */
    T: -1
  },
  /*::[*/
  507: {
    /* n:"BrtDXF" */
  },
  /*::[*/
  508: {
    /* n:"BrtBeginTableStyles", */
    T: 1
  },
  /*::[*/
  509: {
    /* n:"BrtEndTableStyles", */
    T: -1
  },
  /*::[*/
  510: {
    /* n:"BrtBeginTableStyle", */
    T: 1
  },
  /*::[*/
  511: {
    /* n:"BrtEndTableStyle", */
    T: -1
  },
  /*::[*/
  512: {
    /* n:"BrtTableStyleElement" */
  },
  /*::[*/
  513: {
    /* n:"BrtTableStyleClient" */
  },
  /*::[*/
  514: {
    /* n:"BrtBeginVolDeps", */
    T: 1
  },
  /*::[*/
  515: {
    /* n:"BrtEndVolDeps", */
    T: -1
  },
  /*::[*/
  516: {
    /* n:"BrtBeginVolType", */
    T: 1
  },
  /*::[*/
  517: {
    /* n:"BrtEndVolType", */
    T: -1
  },
  /*::[*/
  518: {
    /* n:"BrtBeginVolMain", */
    T: 1
  },
  /*::[*/
  519: {
    /* n:"BrtEndVolMain", */
    T: -1
  },
  /*::[*/
  520: {
    /* n:"BrtBeginVolTopic", */
    T: 1
  },
  /*::[*/
  521: {
    /* n:"BrtEndVolTopic", */
    T: -1
  },
  /*::[*/
  522: {
    /* n:"BrtVolSubtopic" */
  },
  /*::[*/
  523: {
    /* n:"BrtVolRef" */
  },
  /*::[*/
  524: {
    /* n:"BrtVolNum" */
  },
  /*::[*/
  525: {
    /* n:"BrtVolErr" */
  },
  /*::[*/
  526: {
    /* n:"BrtVolStr" */
  },
  /*::[*/
  527: {
    /* n:"BrtVolBool" */
  },
  /*::[*/
  528: {
    /* n:"BrtBeginCalcChain$", */
    T: 1
  },
  /*::[*/
  529: {
    /* n:"BrtEndCalcChain$", */
    T: -1
  },
  /*::[*/
  530: {
    /* n:"BrtBeginSortState", */
    T: 1
  },
  /*::[*/
  531: {
    /* n:"BrtEndSortState", */
    T: -1
  },
  /*::[*/
  532: {
    /* n:"BrtBeginSortCond", */
    T: 1
  },
  /*::[*/
  533: {
    /* n:"BrtEndSortCond", */
    T: -1
  },
  /*::[*/
  534: {
    /* n:"BrtBookProtection" */
  },
  /*::[*/
  535: {
    /* n:"BrtSheetProtection" */
  },
  /*::[*/
  536: {
    /* n:"BrtRangeProtection" */
  },
  /*::[*/
  537: {
    /* n:"BrtPhoneticInfo" */
  },
  /*::[*/
  538: {
    /* n:"BrtBeginECTxtWiz", */
    T: 1
  },
  /*::[*/
  539: {
    /* n:"BrtEndECTxtWiz", */
    T: -1
  },
  /*::[*/
  540: {
    /* n:"BrtBeginECTWFldInfoLst", */
    T: 1
  },
  /*::[*/
  541: {
    /* n:"BrtEndECTWFldInfoLst", */
    T: -1
  },
  /*::[*/
  542: {
    /* n:"BrtBeginECTwFldInfo", */
    T: 1
  },
  /*::[*/
  548: {
    /* n:"BrtFileSharing" */
  },
  /*::[*/
  549: {
    /* n:"BrtOleSize" */
  },
  /*::[*/
  550: {
    /* n:"BrtDrawing", */
    f: Ht
  },
  /*::[*/
  551: {
    /* n:"BrtLegacyDrawing" */
  },
  /*::[*/
  552: {
    /* n:"BrtLegacyDrawingHF" */
  },
  /*::[*/
  553: {
    /* n:"BrtWebOpt" */
  },
  /*::[*/
  554: {
    /* n:"BrtBeginWebPubItems", */
    T: 1
  },
  /*::[*/
  555: {
    /* n:"BrtEndWebPubItems", */
    T: -1
  },
  /*::[*/
  556: {
    /* n:"BrtBeginWebPubItem", */
    T: 1
  },
  /*::[*/
  557: {
    /* n:"BrtEndWebPubItem", */
    T: -1
  },
  /*::[*/
  558: {
    /* n:"BrtBeginSXCondFmt", */
    T: 1
  },
  /*::[*/
  559: {
    /* n:"BrtEndSXCondFmt", */
    T: -1
  },
  /*::[*/
  560: {
    /* n:"BrtBeginSXCondFmts", */
    T: 1
  },
  /*::[*/
  561: {
    /* n:"BrtEndSXCondFmts", */
    T: -1
  },
  /*::[*/
  562: {
    /* n:"BrtBkHim" */
  },
  /*::[*/
  564: {
    /* n:"BrtColor" */
  },
  /*::[*/
  565: {
    /* n:"BrtBeginIndexedColors", */
    T: 1
  },
  /*::[*/
  566: {
    /* n:"BrtEndIndexedColors", */
    T: -1
  },
  /*::[*/
  569: {
    /* n:"BrtBeginMRUColors", */
    T: 1
  },
  /*::[*/
  570: {
    /* n:"BrtEndMRUColors", */
    T: -1
  },
  /*::[*/
  572: {
    /* n:"BrtMRUColor" */
  },
  /*::[*/
  573: {
    /* n:"BrtBeginDVals", */
    T: 1
  },
  /*::[*/
  574: {
    /* n:"BrtEndDVals", */
    T: -1
  },
  /*::[*/
  577: {
    /* n:"BrtSupNameStart" */
  },
  /*::[*/
  578: {
    /* n:"BrtSupNameValueStart" */
  },
  /*::[*/
  579: {
    /* n:"BrtSupNameValueEnd" */
  },
  /*::[*/
  580: {
    /* n:"BrtSupNameNum" */
  },
  /*::[*/
  581: {
    /* n:"BrtSupNameErr" */
  },
  /*::[*/
  582: {
    /* n:"BrtSupNameSt" */
  },
  /*::[*/
  583: {
    /* n:"BrtSupNameNil" */
  },
  /*::[*/
  584: {
    /* n:"BrtSupNameBool" */
  },
  /*::[*/
  585: {
    /* n:"BrtSupNameFmla" */
  },
  /*::[*/
  586: {
    /* n:"BrtSupNameBits" */
  },
  /*::[*/
  587: {
    /* n:"BrtSupNameEnd" */
  },
  /*::[*/
  588: {
    /* n:"BrtEndSupBook", */
    T: -1
  },
  /*::[*/
  589: {
    /* n:"BrtCellSmartTagProperty" */
  },
  /*::[*/
  590: {
    /* n:"BrtBeginCellSmartTag", */
    T: 1
  },
  /*::[*/
  591: {
    /* n:"BrtEndCellSmartTag", */
    T: -1
  },
  /*::[*/
  592: {
    /* n:"BrtBeginCellSmartTags", */
    T: 1
  },
  /*::[*/
  593: {
    /* n:"BrtEndCellSmartTags", */
    T: -1
  },
  /*::[*/
  594: {
    /* n:"BrtBeginSmartTags", */
    T: 1
  },
  /*::[*/
  595: {
    /* n:"BrtEndSmartTags", */
    T: -1
  },
  /*::[*/
  596: {
    /* n:"BrtSmartTagType" */
  },
  /*::[*/
  597: {
    /* n:"BrtBeginSmartTagTypes", */
    T: 1
  },
  /*::[*/
  598: {
    /* n:"BrtEndSmartTagTypes", */
    T: -1
  },
  /*::[*/
  599: {
    /* n:"BrtBeginSXFilters", */
    T: 1
  },
  /*::[*/
  600: {
    /* n:"BrtEndSXFilters", */
    T: -1
  },
  /*::[*/
  601: {
    /* n:"BrtBeginSXFILTER", */
    T: 1
  },
  /*::[*/
  602: {
    /* n:"BrtEndSXFilter", */
    T: -1
  },
  /*::[*/
  603: {
    /* n:"BrtBeginFills", */
    T: 1
  },
  /*::[*/
  604: {
    /* n:"BrtEndFills", */
    T: -1
  },
  /*::[*/
  605: {
    /* n:"BrtBeginCellWatches", */
    T: 1
  },
  /*::[*/
  606: {
    /* n:"BrtEndCellWatches", */
    T: -1
  },
  /*::[*/
  607: {
    /* n:"BrtCellWatch" */
  },
  /*::[*/
  608: {
    /* n:"BrtBeginCRErrs", */
    T: 1
  },
  /*::[*/
  609: {
    /* n:"BrtEndCRErrs", */
    T: -1
  },
  /*::[*/
  610: {
    /* n:"BrtCrashRecErr" */
  },
  /*::[*/
  611: {
    /* n:"BrtBeginFonts", */
    T: 1
  },
  /*::[*/
  612: {
    /* n:"BrtEndFonts", */
    T: -1
  },
  /*::[*/
  613: {
    /* n:"BrtBeginBorders", */
    T: 1
  },
  /*::[*/
  614: {
    /* n:"BrtEndBorders", */
    T: -1
  },
  /*::[*/
  615: {
    /* n:"BrtBeginFmts", */
    T: 1
  },
  /*::[*/
  616: {
    /* n:"BrtEndFmts", */
    T: -1
  },
  /*::[*/
  617: {
    /* n:"BrtBeginCellXFs", */
    T: 1
  },
  /*::[*/
  618: {
    /* n:"BrtEndCellXFs", */
    T: -1
  },
  /*::[*/
  619: {
    /* n:"BrtBeginStyles", */
    T: 1
  },
  /*::[*/
  620: {
    /* n:"BrtEndStyles", */
    T: -1
  },
  /*::[*/
  625: {
    /* n:"BrtBigName" */
  },
  /*::[*/
  626: {
    /* n:"BrtBeginCellStyleXFs", */
    T: 1
  },
  /*::[*/
  627: {
    /* n:"BrtEndCellStyleXFs", */
    T: -1
  },
  /*::[*/
  628: {
    /* n:"BrtBeginComments", */
    T: 1
  },
  /*::[*/
  629: {
    /* n:"BrtEndComments", */
    T: -1
  },
  /*::[*/
  630: {
    /* n:"BrtBeginCommentAuthors", */
    T: 1
  },
  /*::[*/
  631: {
    /* n:"BrtEndCommentAuthors", */
    T: -1
  },
  /*::[*/
  632: {
    /* n:"BrtCommentAuthor", */
    f: k1
  },
  /*::[*/
  633: {
    /* n:"BrtBeginCommentList", */
    T: 1
  },
  /*::[*/
  634: {
    /* n:"BrtEndCommentList", */
    T: -1
  },
  /*::[*/
  635: {
    /* n:"BrtBeginComment", */
    T: 1,
    f: T1
  },
  /*::[*/
  636: {
    /* n:"BrtEndComment", */
    T: -1
  },
  /*::[*/
  637: {
    /* n:"BrtCommentText", */
    f: Gc
  },
  /*::[*/
  638: {
    /* n:"BrtBeginOleObjects", */
    T: 1
  },
  /*::[*/
  639: {
    /* n:"BrtOleObject" */
  },
  /*::[*/
  640: {
    /* n:"BrtEndOleObjects", */
    T: -1
  },
  /*::[*/
  641: {
    /* n:"BrtBeginSxrules", */
    T: 1
  },
  /*::[*/
  642: {
    /* n:"BrtEndSxRules", */
    T: -1
  },
  /*::[*/
  643: {
    /* n:"BrtBeginActiveXControls", */
    T: 1
  },
  /*::[*/
  644: {
    /* n:"BrtActiveX" */
  },
  /*::[*/
  645: {
    /* n:"BrtEndActiveXControls", */
    T: -1
  },
  /*::[*/
  646: {
    /* n:"BrtBeginPCDSDTCEMembersSortBy", */
    T: 1
  },
  /*::[*/
  648: {
    /* n:"BrtBeginCellIgnoreECs", */
    T: 1
  },
  /*::[*/
  649: {
    /* n:"BrtCellIgnoreEC" */
  },
  /*::[*/
  650: {
    /* n:"BrtEndCellIgnoreECs", */
    T: -1
  },
  /*::[*/
  651: {
    /* n:"BrtCsProp", */
    f: tx
  },
  /*::[*/
  652: {
    /* n:"BrtCsPageSetup" */
  },
  /*::[*/
  653: {
    /* n:"BrtBeginUserCsViews", */
    T: 1
  },
  /*::[*/
  654: {
    /* n:"BrtEndUserCsViews", */
    T: -1
  },
  /*::[*/
  655: {
    /* n:"BrtBeginUserCsView", */
    T: 1
  },
  /*::[*/
  656: {
    /* n:"BrtEndUserCsView", */
    T: -1
  },
  /*::[*/
  657: {
    /* n:"BrtBeginPcdSFCIEntries", */
    T: 1
  },
  /*::[*/
  658: {
    /* n:"BrtEndPCDSFCIEntries", */
    T: -1
  },
  /*::[*/
  659: {
    /* n:"BrtPCDSFCIEntry" */
  },
  /*::[*/
  660: {
    /* n:"BrtBeginListParts", */
    T: 1
  },
  /*::[*/
  661: {
    /* n:"BrtListPart" */
  },
  /*::[*/
  662: {
    /* n:"BrtEndListParts", */
    T: -1
  },
  /*::[*/
  663: {
    /* n:"BrtSheetCalcProp" */
  },
  /*::[*/
  664: {
    /* n:"BrtBeginFnGroup", */
    T: 1
  },
  /*::[*/
  665: {
    /* n:"BrtFnGroup" */
  },
  /*::[*/
  666: {
    /* n:"BrtEndFnGroup", */
    T: -1
  },
  /*::[*/
  667: {
    /* n:"BrtSupAddin" */
  },
  /*::[*/
  668: {
    /* n:"BrtSXTDMPOrder" */
  },
  /*::[*/
  669: {
    /* n:"BrtCsProtection" */
  },
  /*::[*/
  671: {
    /* n:"BrtBeginWsSortMap", */
    T: 1
  },
  /*::[*/
  672: {
    /* n:"BrtEndWsSortMap", */
    T: -1
  },
  /*::[*/
  673: {
    /* n:"BrtBeginRRSort", */
    T: 1
  },
  /*::[*/
  674: {
    /* n:"BrtEndRRSort", */
    T: -1
  },
  /*::[*/
  675: {
    /* n:"BrtRRSortItem" */
  },
  /*::[*/
  676: {
    /* n:"BrtFileSharingIso" */
  },
  /*::[*/
  677: {
    /* n:"BrtBookProtectionIso" */
  },
  /*::[*/
  678: {
    /* n:"BrtSheetProtectionIso" */
  },
  /*::[*/
  679: {
    /* n:"BrtCsProtectionIso" */
  },
  /*::[*/
  680: {
    /* n:"BrtRangeProtectionIso" */
  },
  /*::[*/
  681: {
    /* n:"BrtDValList" */
  },
  /*::[*/
  1024: {
    /* n:"BrtRwDescent" */
  },
  /*::[*/
  1025: {
    /* n:"BrtKnownFonts" */
  },
  /*::[*/
  1026: {
    /* n:"BrtBeginSXTupleSet", */
    T: 1
  },
  /*::[*/
  1027: {
    /* n:"BrtEndSXTupleSet", */
    T: -1
  },
  /*::[*/
  1028: {
    /* n:"BrtBeginSXTupleSetHeader", */
    T: 1
  },
  /*::[*/
  1029: {
    /* n:"BrtEndSXTupleSetHeader", */
    T: -1
  },
  /*::[*/
  1030: {
    /* n:"BrtSXTupleSetHeaderItem" */
  },
  /*::[*/
  1031: {
    /* n:"BrtBeginSXTupleSetData", */
    T: 1
  },
  /*::[*/
  1032: {
    /* n:"BrtEndSXTupleSetData", */
    T: -1
  },
  /*::[*/
  1033: {
    /* n:"BrtBeginSXTupleSetRow", */
    T: 1
  },
  /*::[*/
  1034: {
    /* n:"BrtEndSXTupleSetRow", */
    T: -1
  },
  /*::[*/
  1035: {
    /* n:"BrtSXTupleSetRowItem" */
  },
  /*::[*/
  1036: {
    /* n:"BrtNameExt" */
  },
  /*::[*/
  1037: {
    /* n:"BrtPCDH14" */
  },
  /*::[*/
  1038: {
    /* n:"BrtBeginPCDCalcMem14", */
    T: 1
  },
  /*::[*/
  1039: {
    /* n:"BrtEndPCDCalcMem14", */
    T: -1
  },
  /*::[*/
  1040: {
    /* n:"BrtSXTH14" */
  },
  /*::[*/
  1041: {
    /* n:"BrtBeginSparklineGroup", */
    T: 1
  },
  /*::[*/
  1042: {
    /* n:"BrtEndSparklineGroup", */
    T: -1
  },
  /*::[*/
  1043: {
    /* n:"BrtSparkline" */
  },
  /*::[*/
  1044: {
    /* n:"BrtSXDI14" */
  },
  /*::[*/
  1045: {
    /* n:"BrtWsFmtInfoEx14" */
  },
  /*::[*/
  1046: {
    /* n:"BrtBeginConditionalFormatting14", */
    T: 1
  },
  /*::[*/
  1047: {
    /* n:"BrtEndConditionalFormatting14", */
    T: -1
  },
  /*::[*/
  1048: {
    /* n:"BrtBeginCFRule14", */
    T: 1
  },
  /*::[*/
  1049: {
    /* n:"BrtEndCFRule14", */
    T: -1
  },
  /*::[*/
  1050: {
    /* n:"BrtCFVO14" */
  },
  /*::[*/
  1051: {
    /* n:"BrtBeginDatabar14", */
    T: 1
  },
  /*::[*/
  1052: {
    /* n:"BrtBeginIconSet14", */
    T: 1
  },
  /*::[*/
  1053: {
    /* n:"BrtDVal14", */
    f: qu
  },
  /*::[*/
  1054: {
    /* n:"BrtBeginDVals14", */
    T: 1
  },
  /*::[*/
  1055: {
    /* n:"BrtColor14" */
  },
  /*::[*/
  1056: {
    /* n:"BrtBeginSparklines", */
    T: 1
  },
  /*::[*/
  1057: {
    /* n:"BrtEndSparklines", */
    T: -1
  },
  /*::[*/
  1058: {
    /* n:"BrtBeginSparklineGroups", */
    T: 1
  },
  /*::[*/
  1059: {
    /* n:"BrtEndSparklineGroups", */
    T: -1
  },
  /*::[*/
  1061: {
    /* n:"BrtSXVD14" */
  },
  /*::[*/
  1062: {
    /* n:"BrtBeginSXView14", */
    T: 1
  },
  /*::[*/
  1063: {
    /* n:"BrtEndSXView14", */
    T: -1
  },
  /*::[*/
  1064: {
    /* n:"BrtBeginSXView16", */
    T: 1
  },
  /*::[*/
  1065: {
    /* n:"BrtEndSXView16", */
    T: -1
  },
  /*::[*/
  1066: {
    /* n:"BrtBeginPCD14", */
    T: 1
  },
  /*::[*/
  1067: {
    /* n:"BrtEndPCD14", */
    T: -1
  },
  /*::[*/
  1068: {
    /* n:"BrtBeginExtConn14", */
    T: 1
  },
  /*::[*/
  1069: {
    /* n:"BrtEndExtConn14", */
    T: -1
  },
  /*::[*/
  1070: {
    /* n:"BrtBeginSlicerCacheIDs", */
    T: 1
  },
  /*::[*/
  1071: {
    /* n:"BrtEndSlicerCacheIDs", */
    T: -1
  },
  /*::[*/
  1072: {
    /* n:"BrtBeginSlicerCacheID", */
    T: 1
  },
  /*::[*/
  1073: {
    /* n:"BrtEndSlicerCacheID", */
    T: -1
  },
  /*::[*/
  1075: {
    /* n:"BrtBeginSlicerCache", */
    T: 1
  },
  /*::[*/
  1076: {
    /* n:"BrtEndSlicerCache", */
    T: -1
  },
  /*::[*/
  1077: {
    /* n:"BrtBeginSlicerCacheDef", */
    T: 1
  },
  /*::[*/
  1078: {
    /* n:"BrtEndSlicerCacheDef", */
    T: -1
  },
  /*::[*/
  1079: {
    /* n:"BrtBeginSlicersEx", */
    T: 1
  },
  /*::[*/
  1080: {
    /* n:"BrtEndSlicersEx", */
    T: -1
  },
  /*::[*/
  1081: {
    /* n:"BrtBeginSlicerEx", */
    T: 1
  },
  /*::[*/
  1082: {
    /* n:"BrtEndSlicerEx", */
    T: -1
  },
  /*::[*/
  1083: {
    /* n:"BrtBeginSlicer", */
    T: 1
  },
  /*::[*/
  1084: {
    /* n:"BrtEndSlicer", */
    T: -1
  },
  /*::[*/
  1085: {
    /* n:"BrtSlicerCachePivotTables" */
  },
  /*::[*/
  1086: {
    /* n:"BrtBeginSlicerCacheOlapImpl", */
    T: 1
  },
  /*::[*/
  1087: {
    /* n:"BrtEndSlicerCacheOlapImpl", */
    T: -1
  },
  /*::[*/
  1088: {
    /* n:"BrtBeginSlicerCacheLevelsData", */
    T: 1
  },
  /*::[*/
  1089: {
    /* n:"BrtEndSlicerCacheLevelsData", */
    T: -1
  },
  /*::[*/
  1090: {
    /* n:"BrtBeginSlicerCacheLevelData", */
    T: 1
  },
  /*::[*/
  1091: {
    /* n:"BrtEndSlicerCacheLevelData", */
    T: -1
  },
  /*::[*/
  1092: {
    /* n:"BrtBeginSlicerCacheSiRanges", */
    T: 1
  },
  /*::[*/
  1093: {
    /* n:"BrtEndSlicerCacheSiRanges", */
    T: -1
  },
  /*::[*/
  1094: {
    /* n:"BrtBeginSlicerCacheSiRange", */
    T: 1
  },
  /*::[*/
  1095: {
    /* n:"BrtEndSlicerCacheSiRange", */
    T: -1
  },
  /*::[*/
  1096: {
    /* n:"BrtSlicerCacheOlapItem" */
  },
  /*::[*/
  1097: {
    /* n:"BrtBeginSlicerCacheSelections", */
    T: 1
  },
  /*::[*/
  1098: {
    /* n:"BrtSlicerCacheSelection" */
  },
  /*::[*/
  1099: {
    /* n:"BrtEndSlicerCacheSelections", */
    T: -1
  },
  /*::[*/
  1100: {
    /* n:"BrtBeginSlicerCacheNative", */
    T: 1
  },
  /*::[*/
  1101: {
    /* n:"BrtEndSlicerCacheNative", */
    T: -1
  },
  /*::[*/
  1102: {
    /* n:"BrtSlicerCacheNativeItem" */
  },
  /*::[*/
  1103: {
    /* n:"BrtRangeProtection14" */
  },
  /*::[*/
  1104: {
    /* n:"BrtRangeProtectionIso14" */
  },
  /*::[*/
  1105: {
    /* n:"BrtCellIgnoreEC14" */
  },
  /*::[*/
  1111: {
    /* n:"BrtList14" */
  },
  /*::[*/
  1112: {
    /* n:"BrtCFIcon" */
  },
  /*::[*/
  1113: {
    /* n:"BrtBeginSlicerCachesPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  1114: {
    /* n:"BrtEndSlicerCachesPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  1115: {
    /* n:"BrtBeginSlicers", */
    T: 1
  },
  /*::[*/
  1116: {
    /* n:"BrtEndSlicers", */
    T: -1
  },
  /*::[*/
  1117: {
    /* n:"BrtWbProp14" */
  },
  /*::[*/
  1118: {
    /* n:"BrtBeginSXEdit", */
    T: 1
  },
  /*::[*/
  1119: {
    /* n:"BrtEndSXEdit", */
    T: -1
  },
  /*::[*/
  1120: {
    /* n:"BrtBeginSXEdits", */
    T: 1
  },
  /*::[*/
  1121: {
    /* n:"BrtEndSXEdits", */
    T: -1
  },
  /*::[*/
  1122: {
    /* n:"BrtBeginSXChange", */
    T: 1
  },
  /*::[*/
  1123: {
    /* n:"BrtEndSXChange", */
    T: -1
  },
  /*::[*/
  1124: {
    /* n:"BrtBeginSXChanges", */
    T: 1
  },
  /*::[*/
  1125: {
    /* n:"BrtEndSXChanges", */
    T: -1
  },
  /*::[*/
  1126: {
    /* n:"BrtSXTupleItems" */
  },
  /*::[*/
  1128: {
    /* n:"BrtBeginSlicerStyle", */
    T: 1
  },
  /*::[*/
  1129: {
    /* n:"BrtEndSlicerStyle", */
    T: -1
  },
  /*::[*/
  1130: {
    /* n:"BrtSlicerStyleElement" */
  },
  /*::[*/
  1131: {
    /* n:"BrtBeginStyleSheetExt14", */
    T: 1
  },
  /*::[*/
  1132: {
    /* n:"BrtEndStyleSheetExt14", */
    T: -1
  },
  /*::[*/
  1133: {
    /* n:"BrtBeginSlicerCachesPivotCacheID", */
    T: 1
  },
  /*::[*/
  1134: {
    /* n:"BrtEndSlicerCachesPivotCacheID", */
    T: -1
  },
  /*::[*/
  1135: {
    /* n:"BrtBeginConditionalFormattings", */
    T: 1
  },
  /*::[*/
  1136: {
    /* n:"BrtEndConditionalFormattings", */
    T: -1
  },
  /*::[*/
  1137: {
    /* n:"BrtBeginPCDCalcMemExt", */
    T: 1
  },
  /*::[*/
  1138: {
    /* n:"BrtEndPCDCalcMemExt", */
    T: -1
  },
  /*::[*/
  1139: {
    /* n:"BrtBeginPCDCalcMemsExt", */
    T: 1
  },
  /*::[*/
  1140: {
    /* n:"BrtEndPCDCalcMemsExt", */
    T: -1
  },
  /*::[*/
  1141: {
    /* n:"BrtPCDField14" */
  },
  /*::[*/
  1142: {
    /* n:"BrtBeginSlicerStyles", */
    T: 1
  },
  /*::[*/
  1143: {
    /* n:"BrtEndSlicerStyles", */
    T: -1
  },
  /*::[*/
  1144: {
    /* n:"BrtBeginSlicerStyleElements", */
    T: 1
  },
  /*::[*/
  1145: {
    /* n:"BrtEndSlicerStyleElements", */
    T: -1
  },
  /*::[*/
  1146: {
    /* n:"BrtCFRuleExt" */
  },
  /*::[*/
  1147: {
    /* n:"BrtBeginSXCondFmt14", */
    T: 1
  },
  /*::[*/
  1148: {
    /* n:"BrtEndSXCondFmt14", */
    T: -1
  },
  /*::[*/
  1149: {
    /* n:"BrtBeginSXCondFmts14", */
    T: 1
  },
  /*::[*/
  1150: {
    /* n:"BrtEndSXCondFmts14", */
    T: -1
  },
  /*::[*/
  1152: {
    /* n:"BrtBeginSortCond14", */
    T: 1
  },
  /*::[*/
  1153: {
    /* n:"BrtEndSortCond14", */
    T: -1
  },
  /*::[*/
  1154: {
    /* n:"BrtEndDVals14", */
    T: -1
  },
  /*::[*/
  1155: {
    /* n:"BrtEndIconSet14", */
    T: -1
  },
  /*::[*/
  1156: {
    /* n:"BrtEndDatabar14", */
    T: -1
  },
  /*::[*/
  1157: {
    /* n:"BrtBeginColorScale14", */
    T: 1
  },
  /*::[*/
  1158: {
    /* n:"BrtEndColorScale14", */
    T: -1
  },
  /*::[*/
  1159: {
    /* n:"BrtBeginSxrules14", */
    T: 1
  },
  /*::[*/
  1160: {
    /* n:"BrtEndSxrules14", */
    T: -1
  },
  /*::[*/
  1161: {
    /* n:"BrtBeginPRule14", */
    T: 1
  },
  /*::[*/
  1162: {
    /* n:"BrtEndPRule14", */
    T: -1
  },
  /*::[*/
  1163: {
    /* n:"BrtBeginPRFilters14", */
    T: 1
  },
  /*::[*/
  1164: {
    /* n:"BrtEndPRFilters14", */
    T: -1
  },
  /*::[*/
  1165: {
    /* n:"BrtBeginPRFilter14", */
    T: 1
  },
  /*::[*/
  1166: {
    /* n:"BrtEndPRFilter14", */
    T: -1
  },
  /*::[*/
  1167: {
    /* n:"BrtBeginPRFItem14", */
    T: 1
  },
  /*::[*/
  1168: {
    /* n:"BrtEndPRFItem14", */
    T: -1
  },
  /*::[*/
  1169: {
    /* n:"BrtBeginCellIgnoreECs14", */
    T: 1
  },
  /*::[*/
  1170: {
    /* n:"BrtEndCellIgnoreECs14", */
    T: -1
  },
  /*::[*/
  1171: {
    /* n:"BrtDxf14" */
  },
  /*::[*/
  1172: {
    /* n:"BrtBeginDxF14s", */
    T: 1
  },
  /*::[*/
  1173: {
    /* n:"BrtEndDxf14s", */
    T: -1
  },
  /*::[*/
  1177: {
    /* n:"BrtFilter14" */
  },
  /*::[*/
  1178: {
    /* n:"BrtBeginCustomFilters14", */
    T: 1
  },
  /*::[*/
  1180: {
    /* n:"BrtCustomFilter14" */
  },
  /*::[*/
  1181: {
    /* n:"BrtIconFilter14" */
  },
  /*::[*/
  1182: {
    /* n:"BrtPivotCacheConnectionName" */
  },
  /*::[*/
  2048: {
    /* n:"BrtBeginDecoupledPivotCacheIDs", */
    T: 1
  },
  /*::[*/
  2049: {
    /* n:"BrtEndDecoupledPivotCacheIDs", */
    T: -1
  },
  /*::[*/
  2050: {
    /* n:"BrtDecoupledPivotCacheID" */
  },
  /*::[*/
  2051: {
    /* n:"BrtBeginPivotTableRefs", */
    T: 1
  },
  /*::[*/
  2052: {
    /* n:"BrtEndPivotTableRefs", */
    T: -1
  },
  /*::[*/
  2053: {
    /* n:"BrtPivotTableRef" */
  },
  /*::[*/
  2054: {
    /* n:"BrtSlicerCacheBookPivotTables" */
  },
  /*::[*/
  2055: {
    /* n:"BrtBeginSxvcells", */
    T: 1
  },
  /*::[*/
  2056: {
    /* n:"BrtEndSxvcells", */
    T: -1
  },
  /*::[*/
  2057: {
    /* n:"BrtBeginSxRow", */
    T: 1
  },
  /*::[*/
  2058: {
    /* n:"BrtEndSxRow", */
    T: -1
  },
  /*::[*/
  2060: {
    /* n:"BrtPcdCalcMem15" */
  },
  /*::[*/
  2067: {
    /* n:"BrtQsi15" */
  },
  /*::[*/
  2068: {
    /* n:"BrtBeginWebExtensions", */
    T: 1
  },
  /*::[*/
  2069: {
    /* n:"BrtEndWebExtensions", */
    T: -1
  },
  /*::[*/
  2070: {
    /* n:"BrtWebExtension" */
  },
  /*::[*/
  2071: {
    /* n:"BrtAbsPath15" */
  },
  /*::[*/
  2072: {
    /* n:"BrtBeginPivotTableUISettings", */
    T: 1
  },
  /*::[*/
  2073: {
    /* n:"BrtEndPivotTableUISettings", */
    T: -1
  },
  /*::[*/
  2075: {
    /* n:"BrtTableSlicerCacheIDs" */
  },
  /*::[*/
  2076: {
    /* n:"BrtTableSlicerCacheID" */
  },
  /*::[*/
  2077: {
    /* n:"BrtBeginTableSlicerCache", */
    T: 1
  },
  /*::[*/
  2078: {
    /* n:"BrtEndTableSlicerCache", */
    T: -1
  },
  /*::[*/
  2079: {
    /* n:"BrtSxFilter15" */
  },
  /*::[*/
  2080: {
    /* n:"BrtBeginTimelineCachePivotCacheIDs", */
    T: 1
  },
  /*::[*/
  2081: {
    /* n:"BrtEndTimelineCachePivotCacheIDs", */
    T: -1
  },
  /*::[*/
  2082: {
    /* n:"BrtTimelineCachePivotCacheID" */
  },
  /*::[*/
  2083: {
    /* n:"BrtBeginTimelineCacheIDs", */
    T: 1
  },
  /*::[*/
  2084: {
    /* n:"BrtEndTimelineCacheIDs", */
    T: -1
  },
  /*::[*/
  2085: {
    /* n:"BrtBeginTimelineCacheID", */
    T: 1
  },
  /*::[*/
  2086: {
    /* n:"BrtEndTimelineCacheID", */
    T: -1
  },
  /*::[*/
  2087: {
    /* n:"BrtBeginTimelinesEx", */
    T: 1
  },
  /*::[*/
  2088: {
    /* n:"BrtEndTimelinesEx", */
    T: -1
  },
  /*::[*/
  2089: {
    /* n:"BrtBeginTimelineEx", */
    T: 1
  },
  /*::[*/
  2090: {
    /* n:"BrtEndTimelineEx", */
    T: -1
  },
  /*::[*/
  2091: {
    /* n:"BrtWorkBookPr15" */
  },
  /*::[*/
  2092: {
    /* n:"BrtPCDH15" */
  },
  /*::[*/
  2093: {
    /* n:"BrtBeginTimelineStyle", */
    T: 1
  },
  /*::[*/
  2094: {
    /* n:"BrtEndTimelineStyle", */
    T: -1
  },
  /*::[*/
  2095: {
    /* n:"BrtTimelineStyleElement" */
  },
  /*::[*/
  2096: {
    /* n:"BrtBeginTimelineStylesheetExt15", */
    T: 1
  },
  /*::[*/
  2097: {
    /* n:"BrtEndTimelineStylesheetExt15", */
    T: -1
  },
  /*::[*/
  2098: {
    /* n:"BrtBeginTimelineStyles", */
    T: 1
  },
  /*::[*/
  2099: {
    /* n:"BrtEndTimelineStyles", */
    T: -1
  },
  /*::[*/
  2100: {
    /* n:"BrtBeginTimelineStyleElements", */
    T: 1
  },
  /*::[*/
  2101: {
    /* n:"BrtEndTimelineStyleElements", */
    T: -1
  },
  /*::[*/
  2102: {
    /* n:"BrtDxf15" */
  },
  /*::[*/
  2103: {
    /* n:"BrtBeginDxfs15", */
    T: 1
  },
  /*::[*/
  2104: {
    /* n:"BrtEndDxfs15", */
    T: -1
  },
  /*::[*/
  2105: {
    /* n:"BrtSlicerCacheHideItemsWithNoData" */
  },
  /*::[*/
  2106: {
    /* n:"BrtBeginItemUniqueNames", */
    T: 1
  },
  /*::[*/
  2107: {
    /* n:"BrtEndItemUniqueNames", */
    T: -1
  },
  /*::[*/
  2108: {
    /* n:"BrtItemUniqueName" */
  },
  /*::[*/
  2109: {
    /* n:"BrtBeginExtConn15", */
    T: 1
  },
  /*::[*/
  2110: {
    /* n:"BrtEndExtConn15", */
    T: -1
  },
  /*::[*/
  2111: {
    /* n:"BrtBeginOledbPr15", */
    T: 1
  },
  /*::[*/
  2112: {
    /* n:"BrtEndOledbPr15", */
    T: -1
  },
  /*::[*/
  2113: {
    /* n:"BrtBeginDataFeedPr15", */
    T: 1
  },
  /*::[*/
  2114: {
    /* n:"BrtEndDataFeedPr15", */
    T: -1
  },
  /*::[*/
  2115: {
    /* n:"BrtTextPr15" */
  },
  /*::[*/
  2116: {
    /* n:"BrtRangePr15" */
  },
  /*::[*/
  2117: {
    /* n:"BrtDbCommand15" */
  },
  /*::[*/
  2118: {
    /* n:"BrtBeginDbTables15", */
    T: 1
  },
  /*::[*/
  2119: {
    /* n:"BrtEndDbTables15", */
    T: -1
  },
  /*::[*/
  2120: {
    /* n:"BrtDbTable15" */
  },
  /*::[*/
  2121: {
    /* n:"BrtBeginDataModel", */
    T: 1
  },
  /*::[*/
  2122: {
    /* n:"BrtEndDataModel", */
    T: -1
  },
  /*::[*/
  2123: {
    /* n:"BrtBeginModelTables", */
    T: 1
  },
  /*::[*/
  2124: {
    /* n:"BrtEndModelTables", */
    T: -1
  },
  /*::[*/
  2125: {
    /* n:"BrtModelTable" */
  },
  /*::[*/
  2126: {
    /* n:"BrtBeginModelRelationships", */
    T: 1
  },
  /*::[*/
  2127: {
    /* n:"BrtEndModelRelationships", */
    T: -1
  },
  /*::[*/
  2128: {
    /* n:"BrtModelRelationship" */
  },
  /*::[*/
  2129: {
    /* n:"BrtBeginECTxtWiz15", */
    T: 1
  },
  /*::[*/
  2130: {
    /* n:"BrtEndECTxtWiz15", */
    T: -1
  },
  /*::[*/
  2131: {
    /* n:"BrtBeginECTWFldInfoLst15", */
    T: 1
  },
  /*::[*/
  2132: {
    /* n:"BrtEndECTWFldInfoLst15", */
    T: -1
  },
  /*::[*/
  2133: {
    /* n:"BrtBeginECTWFldInfo15", */
    T: 1
  },
  /*::[*/
  2134: {
    /* n:"BrtFieldListActiveItem" */
  },
  /*::[*/
  2135: {
    /* n:"BrtPivotCacheIdVersion" */
  },
  /*::[*/
  2136: {
    /* n:"BrtSXDI15" */
  },
  /*::[*/
  2137: {
    /* n:"BrtBeginModelTimeGroupings", */
    T: 1
  },
  /*::[*/
  2138: {
    /* n:"BrtEndModelTimeGroupings", */
    T: -1
  },
  /*::[*/
  2139: {
    /* n:"BrtBeginModelTimeGrouping", */
    T: 1
  },
  /*::[*/
  2140: {
    /* n:"BrtEndModelTimeGrouping", */
    T: -1
  },
  /*::[*/
  2141: {
    /* n:"BrtModelTimeGroupingCalcCol" */
  },
  /*::[*/
  3072: {
    /* n:"BrtUid" */
  },
  /*::[*/
  3073: {
    /* n:"BrtRevisionPtr" */
  },
  /*::[*/
  4096: {
    /* n:"BrtBeginDynamicArrayPr", */
    T: 1
  },
  /*::[*/
  4097: {
    /* n:"BrtEndDynamicArrayPr", */
    T: -1
  },
  /*::[*/
  5002: {
    /* n:"BrtBeginRichValueBlock", */
    T: 1
  },
  /*::[*/
  5003: {
    /* n:"BrtEndRichValueBlock", */
    T: -1
  },
  /*::[*/
  5081: {
    /* n:"BrtBeginRichFilters", */
    T: 1
  },
  /*::[*/
  5082: {
    /* n:"BrtEndRichFilters", */
    T: -1
  },
  /*::[*/
  5083: {
    /* n:"BrtRichFilter" */
  },
  /*::[*/
  5084: {
    /* n:"BrtBeginRichFilterColumn", */
    T: 1
  },
  /*::[*/
  5085: {
    /* n:"BrtEndRichFilterColumn", */
    T: -1
  },
  /*::[*/
  5086: {
    /* n:"BrtBeginCustomRichFilters", */
    T: 1
  },
  /*::[*/
  5087: {
    /* n:"BrtEndCustomRichFilters", */
    T: -1
  },
  /*::[*/
  5088: {
    /* n:"BrtCustomRichFilter" */
  },
  /*::[*/
  5089: {
    /* n:"BrtTop10RichFilter" */
  },
  /*::[*/
  5090: {
    /* n:"BrtDynamicRichFilter" */
  },
  /*::[*/
  5092: {
    /* n:"BrtBeginRichSortCondition", */
    T: 1
  },
  /*::[*/
  5093: {
    /* n:"BrtEndRichSortCondition", */
    T: -1
  },
  /*::[*/
  5094: {
    /* n:"BrtRichFilterDateGroupItem" */
  },
  /*::[*/
  5095: {
    /* n:"BrtBeginCalcFeatures", */
    T: 1
  },
  /*::[*/
  5096: {
    /* n:"BrtEndCalcFeatures", */
    T: -1
  },
  /*::[*/
  5097: {
    /* n:"BrtCalcFeature" */
  },
  /*::[*/
  5099: {
    /* n:"BrtExternalLinksPr" */
  },
  /*::[*/
  65535: { n: "" }
}, $t = {
  /* [MS-XLS] 2.3 Record Enumeration 2021-08-17 */
  /*::[*/
  6: {
    /* n:"Formula", */
    f: Pt
  },
  /*::[*/
  10: {
    /* n:"EOF", */
    f: Gr
  },
  /*::[*/
  12: {
    /* n:"CalcCount", */
    f: be
  },
  //
  /*::[*/
  13: {
    /* n:"CalcMode", */
    f: be
  },
  //
  /*::[*/
  14: {
    /* n:"CalcPrecision", */
    f: Le
  },
  //
  /*::[*/
  15: {
    /* n:"CalcRefMode", */
    f: Le
  },
  //
  /*::[*/
  16: {
    /* n:"CalcDelta", */
    f: Ze
  },
  //
  /*::[*/
  17: {
    /* n:"CalcIter", */
    f: Le
  },
  //
  /*::[*/
  18: {
    /* n:"Protect", */
    f: Le
  },
  /*::[*/
  19: {
    /* n:"Password", */
    f: be
  },
  /*::[*/
  20: {
    /* n:"Header", */
    f: on
  },
  /*::[*/
  21: {
    /* n:"Footer", */
    f: on
  },
  /*::[*/
  23: {
    /* n:"ExternSheet", */
    f: Is
  },
  /*::[*/
  24: {
    /* n:"Lbl", */
    f: hn
  },
  /*::[*/
  25: {
    /* n:"WinProtect", */
    f: Le
  },
  /*::[*/
  26: {
    /* n:"VerticalPageBreaks", */
  },
  /*::[*/
  27: {
    /* n:"HorizontalPageBreaks", */
  },
  /*::[*/
  28: {
    /* n:"Note", */
    f: _o
  },
  /*::[*/
  29: {
    /* n:"Selection", */
  },
  /*::[*/
  34: {
    /* n:"Date1904", */
    f: Le
  },
  /*::[*/
  35: {
    /* n:"ExternName", */
    f: ln
  },
  /*::[*/
  38: {
    /* n:"LeftMargin", */
    f: Ze
  },
  // *
  /*::[*/
  39: {
    /* n:"RightMargin", */
    f: Ze
  },
  // *
  /*::[*/
  40: {
    /* n:"TopMargin", */
    f: Ze
  },
  // *
  /*::[*/
  41: {
    /* n:"BottomMargin", */
    f: Ze
  },
  // *
  /*::[*/
  42: {
    /* n:"PrintRowCol", */
    f: Le
  },
  /*::[*/
  43: {
    /* n:"PrintGrid", */
    f: Le
  },
  /*::[*/
  47: {
    /* n:"FilePass", */
    f: wl
  },
  /*::[*/
  49: {
    /* n:"Font", */
    f: Qf
  },
  /*::[*/
  51: {
    /* n:"PrintSize", */
    f: be
  },
  /*::[*/
  60: {
    /* n:"Continue", */
  },
  /*::[*/
  61: {
    /* n:"Window1", */
    f: Jf
  },
  /*::[*/
  64: {
    /* n:"Backup", */
    f: Le
  },
  /*::[*/
  65: {
    /* n:"Pane", */
    f: qf
  },
  /*::[*/
  66: {
    /* n:"CodePage", */
    f: be
  },
  /*::[*/
  77: {
    /* n:"Pls", */
  },
  /*::[*/
  80: {
    /* n:"DCon", */
  },
  /*::[*/
  81: {
    /* n:"DConRef", */
  },
  /*::[*/
  82: {
    /* n:"DConName", */
  },
  /*::[*/
  85: {
    /* n:"DefColWidth", */
    f: be
  },
  /*::[*/
  89: {
    /* n:"XCT", */
  },
  /*::[*/
  90: {
    /* n:"CRN", */
  },
  /*::[*/
  91: {
    /* n:"FileSharing", */
  },
  /*::[*/
  92: {
    /* n:"WriteAccess", */
    f: Wf
  },
  /*::[*/
  93: {
    /* n:"Obj", */
    f: To
  },
  /*::[*/
  94: {
    /* n:"Uncalced", */
  },
  /*::[*/
  95: {
    /* n:"CalcSaveRecalc", */
    f: Le
  },
  //
  /*::[*/
  96: {
    /* n:"Template", */
  },
  /*::[*/
  97: {
    /* n:"Intl", */
  },
  /*::[*/
  99: {
    /* n:"ObjProtect", */
    f: Le
  },
  /*::[*/
  125: {
    /* n:"ColInfo", */
    f: Ns
  },
  /*::[*/
  128: {
    /* n:"Guts", */
    f: oo
  },
  /*::[*/
  129: {
    /* n:"WsBool", */
    f: Gf
  },
  /*::[*/
  130: {
    /* n:"GridSet", */
    f: be
  },
  /*::[*/
  131: {
    /* n:"HCenter", */
    f: Le
  },
  /*::[*/
  132: {
    /* n:"VCenter", */
    f: Le
  },
  /*::[*/
  133: {
    /* n:"BoundSheet8", */
    f: Xf
  },
  /*::[*/
  134: {
    /* n:"WriteProtect", */
  },
  /*::[*/
  140: {
    /* n:"Country", */
    f: Co
  },
  /*::[*/
  141: {
    /* n:"HideObj", */
    f: be
  },
  /*::[*/
  144: {
    /* n:"Sort", */
  },
  /*::[*/
  146: {
    /* n:"Palette", */
    f: Do
  },
  /*::[*/
  151: {
    /* n:"Sync", */
  },
  /*::[*/
  152: {
    /* n:"LPr", */
  },
  /*::[*/
  153: {
    /* n:"DxGCol", */
  },
  /*::[*/
  154: {
    /* n:"FnGroupName", */
  },
  /*::[*/
  155: {
    /* n:"FilterMode", */
  },
  /*::[*/
  156: {
    /* n:"BuiltInFnGroupCount", */
    f: be
  },
  /*::[*/
  157: {
    /* n:"AutoFilterInfo", */
  },
  /*::[*/
  158: {
    /* n:"AutoFilter", */
  },
  /*::[*/
  160: {
    /* n:"Scl", */
    f: Po
  },
  /*::[*/
  161: {
    /* n:"Setup", */
    f: Ro
  },
  /*::[*/
  174: {
    /* n:"ScenMan", */
  },
  /*::[*/
  175: {
    /* n:"SCENARIO", */
  },
  /*::[*/
  176: {
    /* n:"SxView", */
  },
  /*::[*/
  177: {
    /* n:"Sxvd", */
  },
  /*::[*/
  178: {
    /* n:"SXVI", */
  },
  /*::[*/
  180: {
    /* n:"SxIvd", */
  },
  /*::[*/
  181: {
    /* n:"SXLI", */
  },
  /*::[*/
  182: {
    /* n:"SXPI", */
  },
  /*::[*/
  184: {
    /* n:"DocRoute", */
  },
  /*::[*/
  185: {
    /* n:"RecipName", */
  },
  /*::[*/
  189: {
    /* n:"MulRk", */
    f: so
  },
  /*::[*/
  190: {
    /* n:"MulBlank", */
    f: io
  },
  /*::[*/
  193: {
    /* n:"Mms", */
    f: Gr
  },
  /*::[*/
  197: {
    /* n:"SXDI", */
  },
  /*::[*/
  198: {
    /* n:"SXDB", */
  },
  /*::[*/
  199: {
    /* n:"SXFDB", */
  },
  /*::[*/
  200: {
    /* n:"SXDBB", */
  },
  /*::[*/
  201: {
    /* n:"SXNum", */
  },
  /*::[*/
  202: {
    /* n:"SxBool", */
    f: Le
  },
  /*::[*/
  203: {
    /* n:"SxErr", */
  },
  /*::[*/
  204: {
    /* n:"SXInt", */
  },
  /*::[*/
  205: {
    /* n:"SXString", */
  },
  /*::[*/
  206: {
    /* n:"SXDtr", */
  },
  /*::[*/
  207: {
    /* n:"SxNil", */
  },
  /*::[*/
  208: {
    /* n:"SXTbl", */
  },
  /*::[*/
  209: {
    /* n:"SXTBRGIITM", */
  },
  /*::[*/
  210: {
    /* n:"SxTbpg", */
  },
  /*::[*/
  211: {
    /* n:"ObProj", */
  },
  /*::[*/
  213: {
    /* n:"SXStreamID", */
  },
  /*::[*/
  215: {
    /* n:"DBCell", */
  },
  /*::[*/
  216: {
    /* n:"SXRng", */
  },
  /*::[*/
  217: {
    /* n:"SxIsxoper", */
  },
  /*::[*/
  218: {
    /* n:"BookBool", */
    f: be
  },
  /*::[*/
  220: {
    /* n:"DbOrParamQry", */
  },
  /*::[*/
  221: {
    /* n:"ScenarioProtect", */
    f: Le
  },
  /*::[*/
  222: {
    /* n:"OleObjectSize", */
  },
  /*::[*/
  224: {
    /* n:"XF", */
    f: fo
  },
  /*::[*/
  225: {
    /* n:"InterfaceHdr", */
    f: Vf
  },
  /*::[*/
  226: {
    /* n:"InterfaceEnd", */
    f: Gr
  },
  /*::[*/
  227: {
    /* n:"SXVS", */
  },
  /*::[*/
  229: {
    /* n:"MergeCells", */
    f: Eo
  },
  /*::[*/
  233: {
    /* n:"BkHim", */
  },
  /*::[*/
  235: {
    /* n:"MsoDrawingGroup", */
  },
  /*::[*/
  236: {
    /* n:"MsoDrawing", */
  },
  /*::[*/
  237: {
    /* n:"MsoDrawingSelection", */
  },
  /*::[*/
  239: {
    /* n:"PhoneticInfo", */
  },
  /*::[*/
  240: {
    /* n:"SxRule", */
  },
  /*::[*/
  241: {
    /* n:"SXEx", */
  },
  /*::[*/
  242: {
    /* n:"SxFilt", */
  },
  /*::[*/
  244: {
    /* n:"SxDXF", */
  },
  /*::[*/
  245: {
    /* n:"SxItm", */
  },
  /*::[*/
  246: {
    /* n:"SxName", */
  },
  /*::[*/
  247: {
    /* n:"SxSelect", */
  },
  /*::[*/
  248: {
    /* n:"SXPair", */
  },
  /*::[*/
  249: {
    /* n:"SxFmla", */
  },
  /*::[*/
  251: {
    /* n:"SxFormat", */
  },
  /*::[*/
  252: {
    /* n:"SST", */
    f: $f
  },
  /*::[*/
  253: {
    /* n:"LabelSst", */
    f: eo
  },
  /*::[*/
  255: {
    /* n:"ExtSST", */
    f: zf
  },
  /*::[*/
  256: {
    /* n:"SXVDEx", */
  },
  /*::[*/
  259: {
    /* n:"SXFormula", */
  },
  /*::[*/
  290: {
    /* n:"SXDBEx", */
  },
  /*::[*/
  311: {
    /* n:"RRDInsDel", */
  },
  /*::[*/
  312: {
    /* n:"RRDHead", */
  },
  /*::[*/
  315: {
    /* n:"RRDChgCell", */
  },
  /*::[*/
  317: {
    /* n:"RRTabId", */
    f: Ss
  },
  /*::[*/
  318: {
    /* n:"RRDRenSheet", */
  },
  /*::[*/
  319: {
    /* n:"RRSort", */
  },
  /*::[*/
  320: {
    /* n:"RRDMove", */
  },
  /*::[*/
  330: {
    /* n:"RRFormat", */
  },
  /*::[*/
  331: {
    /* n:"RRAutoFmt", */
  },
  /*::[*/
  333: {
    /* n:"RRInsertSh", */
  },
  /*::[*/
  334: {
    /* n:"RRDMoveBegin", */
  },
  /*::[*/
  335: {
    /* n:"RRDMoveEnd", */
  },
  /*::[*/
  336: {
    /* n:"RRDInsDelBegin", */
  },
  /*::[*/
  337: {
    /* n:"RRDInsDelEnd", */
  },
  /*::[*/
  338: {
    /* n:"RRDConflict", */
  },
  /*::[*/
  339: {
    /* n:"RRDDefName", */
  },
  /*::[*/
  340: {
    /* n:"RRDRstEtxp", */
  },
  /*::[*/
  351: {
    /* n:"LRng", */
  },
  /*::[*/
  352: {
    /* n:"UsesELFs", */
    f: Le
  },
  /*::[*/
  353: {
    /* n:"DSF", */
    f: Gr
  },
  /*::[*/
  401: {
    /* n:"CUsr", */
  },
  /*::[*/
  402: {
    /* n:"CbUsr", */
  },
  /*::[*/
  403: {
    /* n:"UsrInfo", */
  },
  /*::[*/
  404: {
    /* n:"UsrExcl", */
  },
  /*::[*/
  405: {
    /* n:"FileLock", */
  },
  /*::[*/
  406: {
    /* n:"RRDInfo", */
  },
  /*::[*/
  407: {
    /* n:"BCUsrs", */
  },
  /*::[*/
  408: {
    /* n:"UsrChk", */
  },
  /*::[*/
  425: {
    /* n:"UserBView", */
  },
  /*::[*/
  426: {
    /* n:"UserSViewBegin", */
  },
  /*::[*/
  427: {
    /* n:"UserSViewEnd", */
  },
  /*::[*/
  428: {
    /* n:"RRDUserView", */
  },
  /*::[*/
  429: {
    /* n:"Qsi", */
  },
  /*::[*/
  430: {
    /* n:"SupBook", */
    f: ho
  },
  /*::[*/
  431: {
    /* n:"Prot4Rev", */
    f: Le
  },
  /*::[*/
  432: {
    /* n:"CondFmt", */
  },
  /*::[*/
  433: {
    /* n:"CF", */
  },
  /*::[*/
  434: {
    /* n:"DVal", */
  },
  /*::[*/
  437: {
    /* n:"DConBin", */
  },
  /*::[*/
  438: {
    /* n:"TxO", */
    f: Fo
  },
  /*::[*/
  439: {
    /* n:"RefreshAll", */
    f: Le
  },
  //
  /*::[*/
  440: {
    /* n:"HLink", */
    f: Ao
  },
  /*::[*/
  441: {
    /* n:"Lel", */
  },
  /*::[*/
  442: {
    /* n:"CodeName", */
    f: qa
  },
  /*::[*/
  443: {
    /* n:"SXFDBType", */
  },
  /*::[*/
  444: {
    /* n:"Prot4RevPass", */
    f: be
  },
  /*::[*/
  445: {
    /* n:"ObNoMacros", */
  },
  /*::[*/
  446: {
    /* n:"Dv", */
  },
  /*::[*/
  448: {
    /* n:"Excel9File", */
    f: Gr
  },
  /*::[*/
  449: {
    /* n:"RecalcId", */
    f: Yf,
    r: 2
  },
  /*::[*/
  450: {
    /* n:"EntExU2", */
    f: Gr
  },
  /*::[*/
  512: {
    /* n:"Dimensions", */
    f: cn
  },
  /*::[*/
  513: {
    /* n:"Blank", */
    f: No
  },
  /*::[*/
  515: {
    /* n:"Number", */
    f: lo
  },
  /*::[*/
  516: {
    /* n:"Label", */
    f: ro
  },
  /*::[*/
  517: {
    /* n:"BoolErr", */
    f: fn
  },
  /*::[*/
  519: {
    /* n:"String", */
    f: Lo
  },
  /*::[*/
  520: {
    /* n:"Row", */
    f: jf
  },
  /*::[*/
  523: {
    /* n:"Index", */
  },
  /*::[*/
  545: {
    /* n:"Array", */
    f: un
  },
  /*::[*/
  549: {
    /* n:"DefaultRowHeight", */
    f: sn
  },
  /*::[*/
  566: {
    /* n:"Table", */
  },
  /*::[*/
  574: {
    /* n:"Window2", */
    f: Zf
  },
  /*::[*/
  638: {
    /* n:"RK", */
    f: no
  },
  /*::[*/
  659: {
    /* n:"Style", */
  },
  /*::[*/
  1048: {
    /* n:"BigName", */
  },
  /*::[*/
  1054: {
    /* n:"Format", */
    f: ao
  },
  /*::[*/
  1084: {
    /* n:"ContinueBigName", */
  },
  /*::[*/
  1212: {
    /* n:"ShrFmla", */
    f: po
  },
  /*::[*/
  2048: {
    /* n:"HLinkTooltip", */
    f: So
  },
  /*::[*/
  2049: {
    /* n:"WebPub", */
  },
  /*::[*/
  2050: {
    /* n:"QsiSXTag", */
  },
  /*::[*/
  2051: {
    /* n:"DBQueryExt", */
  },
  /*::[*/
  2052: {
    /* n:"ExtString", */
  },
  /*::[*/
  2053: {
    /* n:"TxtQry", */
  },
  /*::[*/
  2054: {
    /* n:"Qsir", */
  },
  /*::[*/
  2055: {
    /* n:"Qsif", */
  },
  /*::[*/
  2056: {
    /* n:"RRDTQSIF", */
  },
  /*::[*/
  2057: {
    /* n:"BOF", */
    f: ft
  },
  /*::[*/
  2058: {
    /* n:"OleDbConn", */
  },
  /*::[*/
  2059: {
    /* n:"WOpt", */
  },
  /*::[*/
  2060: {
    /* n:"SXViewEx", */
  },
  /*::[*/
  2061: {
    /* n:"SXTH", */
  },
  /*::[*/
  2062: {
    /* n:"SXPIEx", */
  },
  /*::[*/
  2063: {
    /* n:"SXVDTEx", */
  },
  /*::[*/
  2064: {
    /* n:"SXViewEx9", */
  },
  /*::[*/
  2066: {
    /* n:"ContinueFrt", */
  },
  /*::[*/
  2067: {
    /* n:"RealTimeData", */
  },
  /*::[*/
  2128: {
    /* n:"ChartFrtInfo", */
  },
  /*::[*/
  2129: {
    /* n:"FrtWrapper", */
  },
  /*::[*/
  2130: {
    /* n:"StartBlock", */
  },
  /*::[*/
  2131: {
    /* n:"EndBlock", */
  },
  /*::[*/
  2132: {
    /* n:"StartObject", */
  },
  /*::[*/
  2133: {
    /* n:"EndObject", */
  },
  /*::[*/
  2134: {
    /* n:"CatLab", */
  },
  /*::[*/
  2135: {
    /* n:"YMult", */
  },
  /*::[*/
  2136: {
    /* n:"SXViewLink", */
  },
  /*::[*/
  2137: {
    /* n:"PivotChartBits", */
  },
  /*::[*/
  2138: {
    /* n:"FrtFontList", */
  },
  /*::[*/
  2146: {
    /* n:"SheetExt", */
  },
  /*::[*/
  2147: {
    /* n:"BookExt", */
    r: 12
  },
  /*::[*/
  2148: {
    /* n:"SXAddl", */
  },
  /*::[*/
  2149: {
    /* n:"CrErr", */
  },
  /*::[*/
  2150: {
    /* n:"HFPicture", */
  },
  /*::[*/
  2151: {
    /* n:"FeatHdr", */
    f: Gr
  },
  /*::[*/
  2152: {
    /* n:"Feat", */
  },
  /*::[*/
  2154: {
    /* n:"DataLabExt", */
  },
  /*::[*/
  2155: {
    /* n:"DataLabExtContents", */
  },
  /*::[*/
  2156: {
    /* n:"CellWatch", */
  },
  /*::[*/
  2161: {
    /* n:"FeatHdr11", */
  },
  /*::[*/
  2162: {
    /* n:"Feature11", */
  },
  /*::[*/
  2164: {
    /* n:"DropDownObjIds", */
  },
  /*::[*/
  2165: {
    /* n:"ContinueFrt11", */
  },
  /*::[*/
  2166: {
    /* n:"DConn", */
  },
  /*::[*/
  2167: {
    /* n:"List12", */
  },
  /*::[*/
  2168: {
    /* n:"Feature12", */
  },
  /*::[*/
  2169: {
    /* n:"CondFmt12", */
  },
  /*::[*/
  2170: {
    /* n:"CF12", */
  },
  /*::[*/
  2171: {
    /* n:"CFEx", */
  },
  /*::[*/
  2172: {
    /* n:"XFCRC", */
    f: Oo,
    r: 12
  },
  /*::[*/
  2173: {
    /* n:"XFExt", */
    f: i1,
    r: 12
  },
  /*::[*/
  2174: {
    /* n:"AutoFilter12", */
  },
  /*::[*/
  2175: {
    /* n:"ContinueFrt12", */
  },
  /*::[*/
  2180: {
    /* n:"MDTInfo", */
  },
  /*::[*/
  2181: {
    /* n:"MDXStr", */
  },
  /*::[*/
  2182: {
    /* n:"MDXTuple", */
  },
  /*::[*/
  2183: {
    /* n:"MDXSet", */
  },
  /*::[*/
  2184: {
    /* n:"MDXProp", */
  },
  /*::[*/
  2185: {
    /* n:"MDXKPI", */
  },
  /*::[*/
  2186: {
    /* n:"MDB", */
  },
  /*::[*/
  2187: {
    /* n:"PLV", */
  },
  /*::[*/
  2188: {
    /* n:"Compat12", */
    f: Le,
    r: 12
  },
  /*::[*/
  2189: {
    /* n:"DXF", */
  },
  /*::[*/
  2190: {
    /* n:"TableStyles", */
    r: 12
  },
  /*::[*/
  2191: {
    /* n:"TableStyle", */
  },
  /*::[*/
  2192: {
    /* n:"TableStyleElement", */
  },
  /*::[*/
  2194: {
    /* n:"StyleExt", */
  },
  /*::[*/
  2195: {
    /* n:"NamePublish", */
  },
  /*::[*/
  2196: {
    /* n:"NameCmt", */
    f: vo,
    r: 12
  },
  /*::[*/
  2197: {
    /* n:"SortData", */
  },
  /*::[*/
  2198: {
    /* n:"Theme", */
    f: e1,
    r: 12
  },
  /*::[*/
  2199: {
    /* n:"GUIDTypeLib", */
  },
  /*::[*/
  2200: {
    /* n:"FnGrp12", */
  },
  /*::[*/
  2201: {
    /* n:"NameFnGrp12", */
  },
  /*::[*/
  2202: {
    /* n:"MTRSettings", */
    f: go,
    r: 12
  },
  /*::[*/
  2203: {
    /* n:"CompressPictures", */
    f: Gr
  },
  /*::[*/
  2204: {
    /* n:"HeaderFooter", */
  },
  /*::[*/
  2205: {
    /* n:"CrtLayout12", */
  },
  /*::[*/
  2206: {
    /* n:"CrtMlFrt", */
  },
  /*::[*/
  2207: {
    /* n:"CrtMlFrtContinue", */
  },
  /*::[*/
  2211: {
    /* n:"ForceFullCalculation", */
    f: Kf
  },
  /*::[*/
  2212: {
    /* n:"ShapePropsStream", */
  },
  /*::[*/
  2213: {
    /* n:"TextPropsStream", */
  },
  /*::[*/
  2214: {
    /* n:"RichTextStream", */
  },
  /*::[*/
  2215: {
    /* n:"CrtLayout12A", */
  },
  /*::[*/
  4097: {
    /* n:"Units", */
  },
  /*::[*/
  4098: {
    /* n:"Chart", */
  },
  /*::[*/
  4099: {
    /* n:"Series", */
  },
  /*::[*/
  4102: {
    /* n:"DataFormat", */
  },
  /*::[*/
  4103: {
    /* n:"LineFormat", */
  },
  /*::[*/
  4105: {
    /* n:"MarkerFormat", */
  },
  /*::[*/
  4106: {
    /* n:"AreaFormat", */
  },
  /*::[*/
  4107: {
    /* n:"PieFormat", */
  },
  /*::[*/
  4108: {
    /* n:"AttachedLabel", */
  },
  /*::[*/
  4109: {
    /* n:"SeriesText", */
  },
  /*::[*/
  4116: {
    /* n:"ChartFormat", */
  },
  /*::[*/
  4117: {
    /* n:"Legend", */
  },
  /*::[*/
  4118: {
    /* n:"SeriesList", */
  },
  /*::[*/
  4119: {
    /* n:"Bar", */
  },
  /*::[*/
  4120: {
    /* n:"Line", */
  },
  /*::[*/
  4121: {
    /* n:"Pie", */
  },
  /*::[*/
  4122: {
    /* n:"Area", */
  },
  /*::[*/
  4123: {
    /* n:"Scatter", */
  },
  /*::[*/
  4124: {
    /* n:"CrtLine", */
  },
  /*::[*/
  4125: {
    /* n:"Axis", */
  },
  /*::[*/
  4126: {
    /* n:"Tick", */
  },
  /*::[*/
  4127: {
    /* n:"ValueRange", */
  },
  /*::[*/
  4128: {
    /* n:"CatSerRange", */
  },
  /*::[*/
  4129: {
    /* n:"AxisLine", */
  },
  /*::[*/
  4130: {
    /* n:"CrtLink", */
  },
  /*::[*/
  4132: {
    /* n:"DefaultText", */
  },
  /*::[*/
  4133: {
    /* n:"Text", */
  },
  /*::[*/
  4134: {
    /* n:"FontX", */
    f: be
  },
  /*::[*/
  4135: {
    /* n:"ObjectLink", */
  },
  /*::[*/
  4146: {
    /* n:"Frame", */
  },
  /*::[*/
  4147: {
    /* n:"Begin", */
  },
  /*::[*/
  4148: {
    /* n:"End", */
  },
  /*::[*/
  4149: {
    /* n:"PlotArea", */
  },
  /*::[*/
  4154: {
    /* n:"Chart3d", */
  },
  /*::[*/
  4156: {
    /* n:"PicF", */
  },
  /*::[*/
  4157: {
    /* n:"DropBar", */
  },
  /*::[*/
  4158: {
    /* n:"Radar", */
  },
  /*::[*/
  4159: {
    /* n:"Surf", */
  },
  /*::[*/
  4160: {
    /* n:"RadarArea", */
  },
  /*::[*/
  4161: {
    /* n:"AxisParent", */
  },
  /*::[*/
  4163: {
    /* n:"LegendException", */
  },
  /*::[*/
  4164: {
    /* n:"ShtProps", */
    f: Io
  },
  /*::[*/
  4165: {
    /* n:"SerToCrt", */
  },
  /*::[*/
  4166: {
    /* n:"AxesUsed", */
  },
  /*::[*/
  4168: {
    /* n:"SBaseRef", */
  },
  /*::[*/
  4170: {
    /* n:"SerParent", */
  },
  /*::[*/
  4171: {
    /* n:"SerAuxTrend", */
  },
  /*::[*/
  4174: {
    /* n:"IFmtRecord", */
  },
  /*::[*/
  4175: {
    /* n:"Pos", */
  },
  /*::[*/
  4176: {
    /* n:"AlRuns", */
  },
  /*::[*/
  4177: {
    /* n:"BRAI", */
  },
  /*::[*/
  4187: {
    /* n:"SerAuxErrBar", */
  },
  /*::[*/
  4188: {
    /* n:"ClrtClient", */
    f: yo
  },
  /*::[*/
  4189: {
    /* n:"SerFmt", */
  },
  /*::[*/
  4191: {
    /* n:"Chart3DBarShape", */
  },
  /*::[*/
  4192: {
    /* n:"Fbi", */
  },
  /*::[*/
  4193: {
    /* n:"BopPop", */
  },
  /*::[*/
  4194: {
    /* n:"AxcExt", */
  },
  /*::[*/
  4195: {
    /* n:"Dat", */
  },
  /*::[*/
  4196: {
    /* n:"PlotGrowth", */
  },
  /*::[*/
  4197: {
    /* n:"SIIndex", */
  },
  /*::[*/
  4198: {
    /* n:"GelFrame", */
  },
  /*::[*/
  4199: {
    /* n:"BopPopCustom", */
  },
  /*::[*/
  4200: {
    /* n:"Fbi2", */
  },
  /*::[*/
  0: {
    /* n:"Dimensions", */
    f: cn
  },
  /*::[*/
  1: {
    /* n:"BIFF2BLANK", */
  },
  /*::[*/
  2: {
    /* n:"BIFF2INT", */
    f: Uo
  },
  /*::[*/
  3: {
    /* n:"BIFF2NUM", */
    f: bo
  },
  /*::[*/
  4: {
    /* n:"BIFF2STR", */
    f: Bo
  },
  /*::[*/
  5: {
    /* n:"BoolErr", */
    f: fn
  },
  /*::[*/
  7: {
    /* n:"String", */
    f: Ho
  },
  /*::[*/
  8: {
    /* n:"BIFF2ROW", */
  },
  /*::[*/
  9: {
    /* n:"BOF", */
    f: ft
  },
  /*::[*/
  11: {
    /* n:"Index", */
  },
  /*::[*/
  22: {
    /* n:"ExternCount", */
    f: be
  },
  /*::[*/
  30: {
    /* n:"BIFF2FORMAT", */
    f: to
  },
  /*::[*/
  31: {
    /* n:"BIFF2FMTCNT", */
  },
  /* 16-bit cnt of BIFF2FORMAT records */
  /*::[*/
  32: {
    /* n:"BIFF2COLINFO", */
  },
  /*::[*/
  33: {
    /* n:"Array", */
    f: un
  },
  /*::[*/
  36: {
    /* n:"COLWIDTH", */
  },
  /*::[*/
  37: {
    /* n:"DefaultRowHeight", */
    f: sn
  },
  // 0x2c ??
  // 0x2d ??
  // 0x2e ??
  // 0x30 FONTCOUNT: number of fonts
  /*::[*/
  50: {
    /* n:"BIFF2FONTXTRA", */
    f: Vo
  },
  // 0x35: INFOOPTS
  // 0x36: TABLE (BIFF2 only)
  // 0x37: TABLE2 (BIFF2 only)
  // 0x38: WNDESK
  // 0x39 ??
  // 0x3a: BEGINPREF
  // 0x3b: ENDPREF
  /*::[*/
  62: {
    /* n:"BIFF2WINDOW2", */
  },
  // 0x3f ??
  // 0x46: SHOWSCROLL
  // 0x47: SHOWFORMULA
  // 0x48: STATUSBAR
  // 0x49: SHORTMENUS
  // 0x4A:
  // 0x4B:
  // 0x4C:
  // 0x4E:
  // 0x4F:
  // 0x58: TOOLBAR (BIFF3)
  /* - - - */
  /*::[*/
  52: {
    /* n:"DDEObjName", */
  },
  /*::[*/
  67: {
    /* n:"BIFF2XF", */
  },
  /*::[*/
  68: {
    /* n:"BIFF2XFINDEX", */
    f: be
  },
  /*::[*/
  69: {
    /* n:"BIFF2FONTCLR", */
  },
  /*::[*/
  86: {
    /* n:"BIFF4FMTCNT", */
  },
  /* 16-bit cnt, similar to BIFF2 */
  /*::[*/
  126: {
    /* n:"RK", */
  },
  /* Not necessarily same as 0x027e */
  /*::[*/
  127: {
    /* n:"ImData", */
    f: Mo
  },
  /*::[*/
  135: {
    /* n:"Addin", */
  },
  /*::[*/
  136: {
    /* n:"Edg", */
  },
  /*::[*/
  137: {
    /* n:"Pub", */
  },
  // 0x8A
  // 0x8B LH: alternate menu key flag (BIFF3/4)
  // 0x8E
  // 0x8F
  /*::[*/
  145: {
    /* n:"Sub", */
  },
  // 0x93 STYLE
  /*::[*/
  148: {
    /* n:"LHRecord", */
  },
  /*::[*/
  149: {
    /* n:"LHNGraph", */
  },
  /*::[*/
  150: {
    /* n:"Sound", */
  },
  // 0xA2 FNPROTO: function prototypes (BIFF4)
  // 0xA3
  // 0xA8
  /*::[*/
  169: {
    /* n:"CoordList", */
  },
  /*::[*/
  171: {
    /* n:"GCW", */
  },
  /*::[*/
  188: {
    /* n:"ShrFmla", */
  },
  /* Not necessarily same as 0x04bc */
  /*::[*/
  191: {
    /* n:"ToolbarHdr", */
  },
  /*::[*/
  192: {
    /* n:"ToolbarEnd", */
  },
  /*::[*/
  194: {
    /* n:"AddMenu", */
  },
  /*::[*/
  195: {
    /* n:"DelMenu", */
  },
  /*::[*/
  214: {
    /* n:"RString", */
    f: Wo
  },
  /*::[*/
  223: {
    /* n:"UDDesc", */
  },
  /*::[*/
  234: {
    /* n:"TabIdConf", */
  },
  /*::[*/
  354: {
    /* n:"XL5Modify", */
  },
  /*::[*/
  421: {
    /* n:"FileSharing2", */
  },
  /*::[*/
  518: {
    /* n:"Formula", */
    f: Pt
  },
  /*::[*/
  521: {
    /* n:"BOF", */
    f: ft
  },
  /*::[*/
  536: {
    /* n:"Lbl", */
    f: hn
  },
  /*::[*/
  547: {
    /* n:"ExternName", */
    f: ln
  },
  /*::[*/
  561: {
    /* n:"Font", */
  },
  /*::[*/
  579: {
    /* n:"BIFF3XF", */
  },
  /*::[*/
  1030: {
    /* n:"Formula", */
    f: Pt
  },
  /*::[*/
  1033: {
    /* n:"BOF", */
    f: ft
  },
  /*::[*/
  1091: {
    /* n:"BIFF4XF", */
  },
  /*::[*/
  2157: {
    /* n:"FeatInfo", */
  },
  /*::[*/
  2163: {
    /* n:"FeatInfo11", */
  },
  /*::[*/
  2177: {
    /* n:"SXAddl12", */
  },
  /*::[*/
  2240: {
    /* n:"AutoWebPub", */
  },
  /*::[*/
  2241: {
    /* n:"ListObj", */
  },
  /*::[*/
  2242: {
    /* n:"ListField", */
  },
  /*::[*/
  2243: {
    /* n:"ListDV", */
  },
  /*::[*/
  2244: {
    /* n:"ListCondFmt", */
  },
  /*::[*/
  2245: {
    /* n:"ListCF", */
  },
  /*::[*/
  2246: {
    /* n:"FMQry", */
  },
  /*::[*/
  2247: {
    /* n:"FMSQry", */
  },
  /*::[*/
  2248: {
    /* n:"PLV", */
  },
  /*::[*/
  2249: {
    /* n:"LnExt", */
  },
  /*::[*/
  2250: {
    /* n:"MkrExt", */
  },
  /*::[*/
  2251: {
    /* n:"CrtCoopt", */
  },
  /*::[*/
  2262: {
    /* n:"FRTArchId$", */
    r: 12
  },
  /*::[*/
  29282: {}
};
function Tr(e, a, r, n) {
  var t = a;
  if (!isNaN(t)) {
    var s = n || (r || []).length || 0, i = e.next(4);
    i.write_shift(2, t), i.write_shift(2, s), /*:: len != null &&*/
    s > 0 && xs(r) && e.push(r);
  }
}
function wn(e, a) {
  var r = a || {}, n = r.dense ? [] : {};
  e = e.replace(/<!--.*?-->/g, "");
  var t = e.match(/<table/i);
  if (!t)
    throw new Error("Invalid HTML: could not find <table>");
  var s = e.match(/<\/table/i), i = t.index, c = s && s.index || e.length, f = lc(e.slice(i, c), /(:?<tr[^>]*>)/i, "<tr>"), l = -1, o = 0, h = 0, x = 0, d = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } }, v = [];
  for (i = 0; i < f.length; ++i) {
    var u = f[i].trim(), g = u.slice(0, 3).toLowerCase();
    if (g == "<tr") {
      if (++l, r.sheetRows && r.sheetRows <= l) {
        --l;
        break;
      }
      o = 0;
      continue;
    }
    if (!(g != "<td" && g != "<th")) {
      var S = u.split(/<\/t[dh]>/i);
      for (c = 0; c < S.length; ++c) {
        var y = S[c].trim();
        if (y.match(/<t[dh]/i)) {
          for (var _ = y, N = 0; _.charAt(0) == "<" && (N = _.indexOf(">")) > -1; )
            _ = _.slice(N + 1);
          for (var b = 0; b < v.length; ++b) {
            var I = v[b];
            I.s.c == o && I.s.r < l && l <= I.e.r && (o = I.e.c + 1, b = -1);
          }
          var F = oe(y.slice(0, y.indexOf(">")));
          x = F.colspan ? +F.colspan : 1, ((h = +F.rowspan) > 1 || x > 1) && v.push({ s: { r: l, c: o }, e: { r: l + (h || 1) - 1, c: o + x - 1 } });
          var V = F.t || F["data-t"] || "";
          if (!_.length) {
            o += x;
            continue;
          }
          if (_ = es(_), d.s.r > l && (d.s.r = l), d.e.r < l && (d.e.r = l), d.s.c > o && (d.s.c = o), d.e.c < o && (d.e.c = o), !_.length) {
            o += x;
            continue;
          }
          var D = { t: "s", v: _ };
          r.raw || !_.trim().length || V == "s" || (_ === "TRUE" ? D = { t: "b", v: !0 } : _ === "FALSE" ? D = { t: "b", v: !1 } : isNaN(Ar(_)) ? isNaN(_a(_).getDate()) || (D = { t: "d", v: Xe(_) }, r.cellDates || (D = { t: "n", v: cr(D.v) }), D.z = r.dateNF || de[14]) : D = { t: "n", v: Ar(_) }), r.dense ? (n[l] || (n[l] = []), n[l][o] = D) : n[ue({ r: l, c: o })] = D, o += x;
        }
      }
    }
  }
  return n["!ref"] = Ee(d), v.length && (n["!merges"] = v), n;
}
function Vx(e, a, r, n) {
  for (var t = e["!merges"] || [], s = [], i = a.s.c; i <= a.e.c; ++i) {
    for (var c = 0, f = 0, l = 0; l < t.length; ++l)
      if (!(t[l].s.r > r || t[l].s.c > i) && !(t[l].e.r < r || t[l].e.c < i)) {
        if (t[l].s.r < r || t[l].s.c < i) {
          c = -1;
          break;
        }
        c = t[l].e.r - t[l].s.r + 1, f = t[l].e.c - t[l].s.c + 1;
        break;
      }
    if (!(c < 0)) {
      var o = ue({ r, c: i }), h = n.dense ? (e[r] || [])[i] : e[o], x = h && h.v != null && (h.h || t0(h.w || (Ur(h), h.w) || "")) || "", d = {};
      c > 1 && (d.rowspan = c), f > 1 && (d.colspan = f), n.editable ? x = '<span contenteditable="true">' + x + "</span>" : h && (d["data-t"] = h && h.t || "z", h.v != null && (d["data-v"] = h.v), h.z != null && (d["data-z"] = h.z), h.l && (h.l.Target || "#").charAt(0) != "#" && (x = '<a href="' + h.l.Target + '">' + x + "</a>")), d.id = (n.id || "sjs") + "-" + o, s.push(Ac("td", x, d));
    }
  }
  var v = "<tr>";
  return v + s.join("") + "</tr>";
}
var Wx = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>', Gx = "</body></html>";
function Xx(e, a) {
  var r = e.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);
  if (!r || r.length == 0)
    throw new Error("Invalid HTML: could not find <table>");
  if (r.length == 1)
    return Zr(wn(r[0], a), a);
  var n = T0();
  return r.forEach(function(t, s) {
    k0(n, wn(t, a), "Sheet" + (s + 1));
  }), n;
}
function $x(e, a, r) {
  var n = [];
  return n.join("") + "<table" + (r && r.id ? ' id="' + r.id + '"' : "") + ">";
}
function zx(e, a) {
  var r = a || {}, n = r.header != null ? r.header : Wx, t = r.footer != null ? r.footer : Gx, s = [n], i = ka(e["!ref"]);
  r.dense = Array.isArray(e), s.push($x(e, i, r));
  for (var c = i.s.r; c <= i.e.r; ++c)
    s.push(Vx(e, i, c, r));
  return s.push("</table>" + t), s.join("");
}
function si(e, a, r) {
  var n = r || {}, t = 0, s = 0;
  if (n.origin != null)
    if (typeof n.origin == "number")
      t = n.origin;
    else {
      var i = typeof n.origin == "string" ? sr(n.origin) : n.origin;
      t = i.r, s = i.c;
    }
  var c = a.getElementsByTagName("tr"), f = Math.min(n.sheetRows || 1e7, c.length), l = { s: { r: 0, c: 0 }, e: { r: t, c: s } };
  if (e["!ref"]) {
    var o = ka(e["!ref"]);
    l.s.r = Math.min(l.s.r, o.s.r), l.s.c = Math.min(l.s.c, o.s.c), l.e.r = Math.max(l.e.r, o.e.r), l.e.c = Math.max(l.e.c, o.e.c), t == -1 && (l.e.r = t = o.e.r + 1);
  }
  var h = [], x = 0, d = e["!rows"] || (e["!rows"] = []), v = 0, u = 0, g = 0, S = 0, y = 0, _ = 0;
  for (e["!cols"] || (e["!cols"] = []); v < c.length && u < f; ++v) {
    var N = c[v];
    if (Fn(N)) {
      if (n.display)
        continue;
      d[u] = { hidden: !0 };
    }
    var b = N.children;
    for (g = S = 0; g < b.length; ++g) {
      var I = b[g];
      if (!(n.display && Fn(I))) {
        var F = I.hasAttribute("data-v") ? I.getAttribute("data-v") : I.hasAttribute("v") ? I.getAttribute("v") : es(I.innerHTML), V = I.getAttribute("data-z") || I.getAttribute("z");
        for (x = 0; x < h.length; ++x) {
          var D = h[x];
          D.s.c == S + s && D.s.r < u + t && u + t <= D.e.r && (S = D.e.c + 1 - s, x = -1);
        }
        _ = +I.getAttribute("colspan") || 1, ((y = +I.getAttribute("rowspan") || 1) > 1 || _ > 1) && h.push({ s: { r: u + t, c: S + s }, e: { r: u + t + (y || 1) - 1, c: S + s + (_ || 1) - 1 } });
        var z = { t: "s", v: F }, G = I.getAttribute("data-t") || I.getAttribute("t") || "";
        F != null && (F.length == 0 ? z.t = G || "z" : n.raw || F.trim().length == 0 || G == "s" || (F === "TRUE" ? z = { t: "b", v: !0 } : F === "FALSE" ? z = { t: "b", v: !1 } : isNaN(Ar(F)) ? isNaN(_a(F).getDate()) || (z = { t: "d", v: Xe(F) }, n.cellDates || (z = { t: "n", v: cr(z.v) }), z.z = n.dateNF || de[14]) : z = { t: "n", v: Ar(F) })), z.z === void 0 && V != null && (z.z = V);
        var P = "", J = I.getElementsByTagName("A");
        if (J && J.length)
          for (var fe = 0; fe < J.length && !(J[fe].hasAttribute("href") && (P = J[fe].getAttribute("href"), P.charAt(0) != "#")); ++fe)
            ;
        P && P.charAt(0) != "#" && (z.l = { Target: P }), n.dense ? (e[u + t] || (e[u + t] = []), e[u + t][S + s] = z) : e[ue({ c: S + s, r: u + t })] = z, l.e.c < S + s && (l.e.c = S + s), S += _;
      }
    }
    ++u;
  }
  return h.length && (e["!merges"] = (e["!merges"] || []).concat(h)), l.e.r = Math.max(l.e.r, u - 1 + t), e["!ref"] = Ee(l), u >= f && (e["!fullref"] = Ee((l.e.r = c.length - v + u - 1 + t, l))), e;
}
function ii(e, a) {
  var r = a || {}, n = r.dense ? [] : {};
  return si(n, e, a);
}
function jx(e, a) {
  return Zr(ii(e, a), a);
}
function Fn(e) {
  var a = "", r = Kx(e);
  return r && (a = r(e).getPropertyValue("display")), a || (a = e.style && e.style.display), a === "none";
}
function Kx(e) {
  return e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle == "function" ? e.ownerDocument.defaultView.getComputedStyle : typeof getComputedStyle == "function" ? getComputedStyle : null;
}
function Yx(e) {
  var a = e.replace(/[\t\r\n]/g, " ").trim().replace(/ +/g, " ").replace(/<text:s\/>/g, " ").replace(/<text:s text:c="(\d+)"\/>/g, function(n, t) {
    return Array(parseInt(t, 10) + 1).join(" ");
  }).replace(/<text:tab[^>]*\/>/g, "	").replace(/<text:line-break\/>/g, `
`), r = ke(a.replace(/<[^>]*>/g, ""));
  return [r];
}
var An = {
  /* ods name: [short ssf fmt, long ssf fmt] */
  day: ["d", "dd"],
  month: ["m", "mm"],
  year: ["y", "yy"],
  hours: ["h", "hh"],
  minutes: ["m", "mm"],
  seconds: ["s", "ss"],
  "am-pm": ["A/P", "AM/PM"],
  "day-of-week": ["ddd", "dddd"],
  era: ["e", "ee"],
  /* there is no native representation of LO "Q" format */
  quarter: ["\\Qm", 'm\\"th quarter"']
};
function ci(e, a) {
  var r = a || {}, n = n0(e), t = [], s, i, c = { name: "" }, f = "", l = 0, o, h, x = {}, d = [], v = r.dense ? [] : {}, u, g, S = { value: "" }, y = "", _ = 0, N = [], b = -1, I = -1, F = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } }, V = 0, D = {}, z = [], G = {}, P = 0, J = 0, fe = [], re = 1, ce = 1, ie = [], Se = { Names: [] }, W = {}, le = ["", ""], he = [], A = {}, U = "", R = 0, O = !1, j = !1, ee = 0;
  for (Xa.lastIndex = 0, n = n.replace(/<!--([\s\S]*?)-->/mg, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, ""); u = Xa.exec(n); )
    switch (u[3] = u[3].replace(/_.*$/, "")) {
      case "table":
      case "工作表":
        u[1] === "/" ? (F.e.c >= F.s.c && F.e.r >= F.s.r ? v["!ref"] = Ee(F) : v["!ref"] = "A1:A1", r.sheetRows > 0 && r.sheetRows <= F.e.r && (v["!fullref"] = v["!ref"], F.e.r = r.sheetRows - 1, v["!ref"] = Ee(F)), z.length && (v["!merges"] = z), fe.length && (v["!rows"] = fe), o.name = o.名称 || o.name, typeof JSON < "u" && JSON.stringify(o), d.push(o.name), x[o.name] = v, j = !1) : u[0].charAt(u[0].length - 2) !== "/" && (o = oe(u[0], !1), b = I = -1, F.s.r = F.s.c = 1e7, F.e.r = F.e.c = 0, v = r.dense ? [] : {}, z = [], fe = [], j = !0);
        break;
      case "table-row-group":
        u[1] === "/" ? --V : ++V;
        break;
      case "table-row":
      case "行":
        if (u[1] === "/") {
          b += re, re = 1;
          break;
        }
        if (h = oe(u[0], !1), h.行号 ? b = h.行号 - 1 : b == -1 && (b = 0), re = +h["number-rows-repeated"] || 1, re < 10)
          for (ee = 0; ee < re; ++ee)
            V > 0 && (fe[b + ee] = { level: V });
        I = -1;
        break;
      case "covered-table-cell":
        u[1] !== "/" && ++I, r.sheetStubs && (r.dense ? (v[b] || (v[b] = []), v[b][I] = { t: "z" }) : v[ue({ r: b, c: I })] = { t: "z" }), y = "", N = [];
        break;
      case "table-cell":
      case "数据":
        if (u[0].charAt(u[0].length - 2) === "/")
          ++I, S = oe(u[0], !1), ce = parseInt(S["number-columns-repeated"] || "1", 10), g = {
            t: "z",
            v: null
            /*:: , z:null, w:"",c:[]*/
          }, S.formula && r.cellFormula != !1 && (g.f = _n(ke(S.formula))), (S.数据类型 || S["value-type"]) == "string" && (g.t = "s", g.v = ke(S["string-value"] || ""), r.dense ? (v[b] || (v[b] = []), v[b][I] = g) : v[ue({ r: b, c: I })] = g), I += ce - 1;
        else if (u[1] !== "/") {
          ++I, y = "", _ = 0, N = [], ce = 1;
          var ne = re ? b + re - 1 : b;
          if (I > F.e.c && (F.e.c = I), I < F.s.c && (F.s.c = I), b < F.s.r && (F.s.r = b), ne > F.e.r && (F.e.r = ne), S = oe(u[0], !1), he = [], A = {}, g = {
            t: S.数据类型 || S["value-type"],
            v: null
            /*:: , z:null, w:"",c:[]*/
          }, r.cellFormula)
            if (S.formula && (S.formula = ke(S.formula)), S["number-matrix-columns-spanned"] && S["number-matrix-rows-spanned"] && (P = parseInt(S["number-matrix-rows-spanned"], 10) || 0, J = parseInt(S["number-matrix-columns-spanned"], 10) || 0, G = { s: { r: b, c: I }, e: { r: b + P - 1, c: I + J - 1 } }, g.F = Ee(G), ie.push([G, g.F])), S.formula)
              g.f = _n(S.formula);
            else
              for (ee = 0; ee < ie.length; ++ee)
                b >= ie[ee][0].s.r && b <= ie[ee][0].e.r && I >= ie[ee][0].s.c && I <= ie[ee][0].e.c && (g.F = ie[ee][1]);
          switch ((S["number-columns-spanned"] || S["number-rows-spanned"]) && (P = parseInt(S["number-rows-spanned"], 10) || 0, J = parseInt(S["number-columns-spanned"], 10) || 0, G = { s: { r: b, c: I }, e: { r: b + P - 1, c: I + J - 1 } }, z.push(G)), S["number-columns-repeated"] && (ce = parseInt(S["number-columns-repeated"], 10)), g.t) {
            case "boolean":
              g.t = "b", g.v = Ce(S["boolean-value"]);
              break;
            case "float":
              g.t = "n", g.v = parseFloat(S.value);
              break;
            case "percentage":
              g.t = "n", g.v = parseFloat(S.value);
              break;
            case "currency":
              g.t = "n", g.v = parseFloat(S.value);
              break;
            case "date":
              g.t = "d", g.v = Xe(S["date-value"]), r.cellDates || (g.t = "n", g.v = cr(g.v)), g.z = "m/d/yy";
              break;
            case "time":
              g.t = "n", g.v = cc(S["time-value"]) / 86400, r.cellDates && (g.t = "d", g.v = wt(g.v)), g.z = "HH:MM:SS";
              break;
            case "number":
              g.t = "n", g.v = parseFloat(S.数据数值);
              break;
            default:
              if (g.t === "string" || g.t === "text" || !g.t)
                g.t = "s", S["string-value"] != null && (y = ke(S["string-value"]), N = []);
              else
                throw new Error("Unsupported value type " + g.t);
          }
        } else {
          if (O = !1, g.t === "s" && (g.v = y || "", N.length && (g.R = N), O = _ == 0), W.Target && (g.l = W), he.length > 0 && (g.c = he, he = []), y && r.cellText !== !1 && (g.w = y), O && (g.t = "z", delete g.v), (!O || r.sheetStubs) && !(r.sheetRows && r.sheetRows <= b))
            for (var q = 0; q < re; ++q) {
              if (ce = parseInt(S["number-columns-repeated"] || "1", 10), r.dense)
                for (v[b + q] || (v[b + q] = []), v[b + q][I] = q == 0 ? g : ze(g); --ce > 0; )
                  v[b + q][I + ce] = ze(g);
              else
                for (v[ue({ r: b + q, c: I })] = g; --ce > 0; )
                  v[ue({ r: b + q, c: I + ce })] = ze(g);
              F.e.c <= I && (F.e.c = I);
            }
          ce = parseInt(S["number-columns-repeated"] || "1", 10), I += ce - 1, ce = 0, g = {
            /*:: t:"", v:null, z:null, w:"",c:[]*/
          }, y = "", N = [];
        }
        W = {};
        break;
      case "document":
      case "document-content":
      case "电子表格文档":
      case "spreadsheet":
      case "主体":
      case "scripts":
      case "styles":
      case "font-face-decls":
      case "master-styles":
        if (u[1] === "/") {
          if ((s = t.pop())[0] !== u[3])
            throw "Bad state: " + s;
        } else
          u[0].charAt(u[0].length - 2) !== "/" && t.push([u[3], !0]);
        break;
      case "annotation":
        if (u[1] === "/") {
          if ((s = t.pop())[0] !== u[3])
            throw "Bad state: " + s;
          A.t = y, N.length && (A.R = N), A.a = U, he.push(A);
        } else
          u[0].charAt(u[0].length - 2) !== "/" && t.push([u[3], !1]);
        U = "", R = 0, y = "", _ = 0, N = [];
        break;
      case "creator":
        u[1] === "/" ? U = n.slice(R, u.index) : R = u.index + u[0].length;
        break;
      case "meta":
      case "元数据":
      case "settings":
      case "config-item-set":
      case "config-item-map-indexed":
      case "config-item-map-entry":
      case "config-item-map-named":
      case "shapes":
      case "frame":
      case "text-box":
      case "image":
      case "data-pilot-tables":
      case "list-style":
      case "form":
      case "dde-links":
      case "event-listeners":
      case "chart":
        if (u[1] === "/") {
          if ((s = t.pop())[0] !== u[3])
            throw "Bad state: " + s;
        } else
          u[0].charAt(u[0].length - 2) !== "/" && t.push([u[3], !1]);
        y = "", _ = 0, N = [];
        break;
      case "scientific-number":
        break;
      case "currency-symbol":
        break;
      case "currency-style":
        break;
      case "number-style":
      case "percentage-style":
      case "date-style":
      case "time-style":
        if (u[1] === "/") {
          if (D[c.name] = f, (s = t.pop())[0] !== u[3])
            throw "Bad state: " + s;
        } else
          u[0].charAt(u[0].length - 2) !== "/" && (f = "", c = oe(u[0], !1), t.push([u[3], !0]));
        break;
      case "script":
        break;
      case "libraries":
        break;
      case "automatic-styles":
        break;
      case "default-style":
      case "page-layout":
        break;
      case "style":
        break;
      case "map":
        break;
      case "font-face":
        break;
      case "paragraph-properties":
        break;
      case "table-properties":
        break;
      case "table-column-properties":
        break;
      case "table-row-properties":
        break;
      case "table-cell-properties":
        break;
      case "number":
        switch (t[t.length - 1][0]) {
          case "time-style":
          case "date-style":
            i = oe(u[0], !1), f += An[u[3]][i.style === "long" ? 1 : 0];
            break;
        }
        break;
      case "fraction":
        break;
      case "day":
      case "month":
      case "year":
      case "era":
      case "day-of-week":
      case "week-of-year":
      case "quarter":
      case "hours":
      case "minutes":
      case "seconds":
      case "am-pm":
        switch (t[t.length - 1][0]) {
          case "time-style":
          case "date-style":
            i = oe(u[0], !1), f += An[u[3]][i.style === "long" ? 1 : 0];
            break;
        }
        break;
      case "boolean-style":
        break;
      case "boolean":
        break;
      case "text-style":
        break;
      case "text":
        if (u[0].slice(-2) === "/>")
          break;
        if (u[1] === "/")
          switch (t[t.length - 1][0]) {
            case "number-style":
            case "date-style":
            case "time-style":
              f += n.slice(l, u.index);
              break;
          }
        else
          l = u.index + u[0].length;
        break;
      case "named-range":
        i = oe(u[0], !1), le = Lt(i["cell-range-address"]);
        var Y = { Name: i.name, Ref: le[0] + "!" + le[1] };
        j && (Y.Sheet = d.length), Se.Names.push(Y);
        break;
      case "text-content":
        break;
      case "text-properties":
        break;
      case "embedded-text":
        break;
      case "body":
      case "电子表格":
        break;
      case "forms":
        break;
      case "table-column":
        break;
      case "table-header-rows":
        break;
      case "table-rows":
        break;
      case "table-column-group":
        break;
      case "table-header-columns":
        break;
      case "table-columns":
        break;
      case "null-date":
        break;
      case "graphic-properties":
        break;
      case "calculation-settings":
        break;
      case "named-expressions":
        break;
      case "label-range":
        break;
      case "label-ranges":
        break;
      case "named-expression":
        break;
      case "sort":
        break;
      case "sort-by":
        break;
      case "sort-groups":
        break;
      case "tab":
        break;
      case "line-break":
        break;
      case "span":
        break;
      case "p":
      case "文本串":
        if (["master-styles"].indexOf(t[t.length - 1][0]) > -1)
          break;
        if (u[1] === "/" && (!S || !S["string-value"])) {
          var Te = Yx(n.slice(_, u.index));
          y = (y.length > 0 ? y + `
` : "") + Te[0];
        } else
          oe(u[0], !1), _ = u.index + u[0].length;
        break;
      case "s":
        break;
      case "database-range":
        if (u[1] === "/")
          break;
        try {
          le = Lt(oe(u[0])["target-range-address"]), x[le[0]]["!autofilter"] = { ref: le[1] };
        } catch {
        }
        break;
      case "date":
        break;
      case "object":
        break;
      case "title":
      case "标题":
        break;
      case "desc":
        break;
      case "binary-data":
        break;
      case "table-source":
        break;
      case "scenario":
        break;
      case "iteration":
        break;
      case "content-validations":
        break;
      case "content-validation":
        break;
      case "help-message":
        break;
      case "error-message":
        break;
      case "database-ranges":
        break;
      case "filter":
        break;
      case "filter-and":
        break;
      case "filter-or":
        break;
      case "filter-condition":
        break;
      case "list-level-style-bullet":
        break;
      case "list-level-style-number":
        break;
      case "list-level-properties":
        break;
      case "sender-firstname":
      case "sender-lastname":
      case "sender-initials":
      case "sender-title":
      case "sender-position":
      case "sender-email":
      case "sender-phone-private":
      case "sender-fax":
      case "sender-company":
      case "sender-phone-work":
      case "sender-street":
      case "sender-city":
      case "sender-postal-code":
      case "sender-country":
      case "sender-state-or-province":
      case "author-name":
      case "author-initials":
      case "chapter":
      case "file-name":
      case "template-name":
      case "sheet-name":
        break;
      case "event-listener":
        break;
      case "initial-creator":
      case "creation-date":
      case "print-date":
      case "generator":
      case "document-statistic":
      case "user-defined":
      case "editing-duration":
      case "editing-cycles":
        break;
      case "config-item":
        break;
      case "page-number":
        break;
      case "page-count":
        break;
      case "time":
        break;
      case "cell-range-source":
        break;
      case "detective":
        break;
      case "operation":
        break;
      case "highlighted-range":
        break;
      case "data-pilot-table":
      case "source-cell-range":
      case "source-service":
      case "data-pilot-field":
      case "data-pilot-level":
      case "data-pilot-subtotals":
      case "data-pilot-subtotal":
      case "data-pilot-members":
      case "data-pilot-member":
      case "data-pilot-display-info":
      case "data-pilot-sort-info":
      case "data-pilot-layout-info":
      case "data-pilot-field-reference":
      case "data-pilot-groups":
      case "data-pilot-group":
      case "data-pilot-group-member":
        break;
      case "rect":
        break;
      case "dde-connection-decls":
      case "dde-connection-decl":
      case "dde-link":
      case "dde-source":
        break;
      case "properties":
        break;
      case "property":
        break;
      case "a":
        if (u[1] !== "/") {
          if (W = oe(u[0], !1), !W.href)
            break;
          W.Target = ke(W.href), delete W.href, W.Target.charAt(0) == "#" && W.Target.indexOf(".") > -1 ? (le = Lt(W.Target.slice(1)), W.Target = "#" + le[0] + "!" + le[1]) : W.Target.match(/^\.\.[\\\/]/) && (W.Target = W.Target.slice(3));
        }
        break;
      case "table-protection":
        break;
      case "data-pilot-grand-total":
        break;
      case "office-document-common-attrs":
        break;
      default:
        switch (u[2]) {
          case "dc:":
          case "calcext:":
          case "loext:":
          case "ooo:":
          case "chartooo:":
          case "draw:":
          case "style:":
          case "chart:":
          case "form:":
          case "uof:":
          case "表:":
          case "字:":
            break;
          default:
            if (r.WTF)
              throw new Error(u);
        }
    }
  var C = {
    Sheets: x,
    SheetNames: d,
    Workbook: Se
  };
  return r.bookSheets && delete /*::(*/
  C.Sheets, C;
}
function Sn(e, a) {
  a = a || {}, gr(e, "META-INF/manifest.xml") && lf(Be(e, "META-INF/manifest.xml"), a);
  var r = hr(e, "content.xml");
  if (!r)
    throw new Error("Missing content.xml in ODS / UOF file");
  var n = ci(Ae(r), a);
  return gr(e, "meta.xml") && (n.Props = Es(Be(e, "meta.xml"))), n;
}
function Cn(e, a) {
  return ci(e, a);
}
/*! sheetjs (C) 2013-present SheetJS -- http://sheetjs.com */
function g0(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function zt(e) {
  return typeof TextDecoder < "u" ? new TextDecoder().decode(e) : Ae(fa(e));
}
function jt(e) {
  var a = e.reduce(function(t, s) {
    return t + s.length;
  }, 0), r = new Uint8Array(a), n = 0;
  return e.forEach(function(t) {
    r.set(t, n), n += t.length;
  }), r;
}
function yn(e) {
  return e -= e >> 1 & 1431655765, e = (e & 858993459) + (e >> 2 & 858993459), (e + (e >> 4) & 252645135) * 16843009 >>> 24;
}
function Jx(e, a) {
  for (var r = (e[a + 15] & 127) << 7 | e[a + 14] >> 1, n = e[a + 14] & 1, t = a + 13; t >= a; --t)
    n = n * 256 + e[t];
  return (e[a + 15] & 128 ? -n : n) * Math.pow(10, r - 6176);
}
function Ka(e, a) {
  var r = a ? a[0] : 0, n = e[r] & 127;
  e:
    if (e[r++] >= 128 && (n |= (e[r] & 127) << 7, e[r++] < 128 || (n |= (e[r] & 127) << 14, e[r++] < 128) || (n |= (e[r] & 127) << 21, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 28), ++r, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 35), ++r, e[r++] < 128) || (n += (e[r] & 127) * Math.pow(2, 42), ++r, e[r++] < 128)))
      break e;
  return a && (a[0] = r), n;
}
function We(e) {
  var a = 0, r = e[a] & 127;
  e:
    if (e[a++] >= 128) {
      if (r |= (e[a] & 127) << 7, e[a++] < 128 || (r |= (e[a] & 127) << 14, e[a++] < 128) || (r |= (e[a] & 127) << 21, e[a++] < 128))
        break e;
      r |= (e[a] & 127) << 28;
    }
  return r;
}
function qe(e) {
  for (var a = [], r = [0]; r[0] < e.length; ) {
    var n = r[0], t = Ka(e, r), s = t & 7;
    t = Math.floor(t / 8);
    var i = 0, c;
    if (t == 0)
      break;
    switch (s) {
      case 0:
        {
          for (var f = r[0]; e[r[0]++] >= 128; )
            ;
          c = e.slice(f, r[0]);
        }
        break;
      case 5:
        i = 4, c = e.slice(r[0], r[0] + i), r[0] += i;
        break;
      case 1:
        i = 8, c = e.slice(r[0], r[0] + i), r[0] += i;
        break;
      case 2:
        i = Ka(e, r), c = e.slice(r[0], r[0] + i), r[0] += i;
        break;
      case 3:
      case 4:
      default:
        throw new Error("PB Type ".concat(s, " for Field ").concat(t, " at offset ").concat(n));
    }
    var l = { data: c, type: s };
    a[t] == null ? a[t] = [l] : a[t].push(l);
  }
  return a;
}
function m0(e, a) {
  return (e == null ? void 0 : e.map(function(r) {
    return a(r.data);
  })) || [];
}
function Zx(e) {
  for (var a, r = [], n = [0]; n[0] < e.length; ) {
    var t = Ka(e, n), s = qe(e.slice(n[0], n[0] + t));
    n[0] += t;
    var i = {
      id: We(s[1][0].data),
      messages: []
    };
    s[2].forEach(function(c) {
      var f = qe(c.data), l = We(f[3][0].data);
      i.messages.push({
        meta: f,
        data: e.slice(n[0], n[0] + l)
      }), n[0] += l;
    }), (a = s[3]) != null && a[0] && (i.merge = We(s[3][0].data) >>> 0 > 0), r.push(i);
  }
  return r;
}
function qx(e, a) {
  if (e != 0)
    throw new Error("Unexpected Snappy chunk type ".concat(e));
  for (var r = [0], n = Ka(a, r), t = []; r[0] < a.length; ) {
    var s = a[r[0]] & 3;
    if (s == 0) {
      var i = a[r[0]++] >> 2;
      if (i < 60)
        ++i;
      else {
        var c = i - 59;
        i = a[r[0]], c > 1 && (i |= a[r[0] + 1] << 8), c > 2 && (i |= a[r[0] + 2] << 16), c > 3 && (i |= a[r[0] + 3] << 24), i >>>= 0, i++, r[0] += c;
      }
      t.push(a.slice(r[0], r[0] + i)), r[0] += i;
      continue;
    } else {
      var f = 0, l = 0;
      if (s == 1 ? (l = (a[r[0]] >> 2 & 7) + 4, f = (a[r[0]++] & 224) << 3, f |= a[r[0]++]) : (l = (a[r[0]++] >> 2) + 1, s == 2 ? (f = a[r[0]] | a[r[0] + 1] << 8, r[0] += 2) : (f = (a[r[0]] | a[r[0] + 1] << 8 | a[r[0] + 2] << 16 | a[r[0] + 3] << 24) >>> 0, r[0] += 4)), t = [jt(t)], f == 0)
        throw new Error("Invalid offset 0");
      if (f > t[0].length)
        throw new Error("Invalid offset beyond length");
      if (l >= f)
        for (t.push(t[0].slice(-f)), l -= f; l >= t[t.length - 1].length; )
          t.push(t[t.length - 1]), l -= t[t.length - 1].length;
      t.push(t[0].slice(-f, -f + l));
    }
  }
  var o = jt(t);
  if (o.length != n)
    throw new Error("Unexpected length: ".concat(o.length, " != ").concat(n));
  return o;
}
function Qx(e) {
  for (var a = [], r = 0; r < e.length; ) {
    var n = e[r++], t = e[r] | e[r + 1] << 8 | e[r + 2] << 16;
    r += 3, a.push(qx(n, e.slice(r, r + t))), r += t;
  }
  if (r !== e.length)
    throw new Error("data is not a valid framed stream!");
  return jt(a);
}
function ed(e, a, r, n) {
  var t = g0(e), s = t.getUint32(4, !0), i = (n > 1 ? 12 : 8) + yn(s & (n > 1 ? 3470 : 398)) * 4, c = -1, f = -1, l = NaN, o = new Date(2001, 0, 1);
  s & 512 && (c = t.getUint32(i, !0), i += 4), i += yn(s & (n > 1 ? 12288 : 4096)) * 4, s & 16 && (f = t.getUint32(i, !0), i += 4), s & 32 && (l = t.getFloat64(i, !0), i += 8), s & 64 && (o.setTime(o.getTime() + t.getFloat64(i, !0) * 1e3), i += 8);
  var h;
  switch (e[2]) {
    case 0:
      break;
    case 2:
      h = { t: "n", v: l };
      break;
    case 3:
      h = { t: "s", v: a[f] };
      break;
    case 5:
      h = { t: "d", v: o };
      break;
    case 6:
      h = { t: "b", v: l > 0 };
      break;
    case 7:
      h = { t: "n", v: l / 86400 };
      break;
    case 8:
      h = { t: "e", v: 0 };
      break;
    case 9:
      if (c > -1)
        h = { t: "s", v: r[c] };
      else if (f > -1)
        h = { t: "s", v: a[f] };
      else if (!isNaN(l))
        h = { t: "n", v: l };
      else
        throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e.slice(0, 4)));
  }
  return h;
}
function rd(e, a, r) {
  var n = g0(e), t = n.getUint32(8, !0), s = 12, i = -1, c = -1, f = NaN, l = NaN, o = new Date(2001, 0, 1);
  t & 1 && (f = Jx(e, s), s += 16), t & 2 && (l = n.getFloat64(s, !0), s += 8), t & 4 && (o.setTime(o.getTime() + n.getFloat64(s, !0) * 1e3), s += 8), t & 8 && (c = n.getUint32(s, !0), s += 4), t & 16 && (i = n.getUint32(s, !0), s += 4);
  var h;
  switch (e[1]) {
    case 0:
      break;
    case 2:
      h = { t: "n", v: f };
      break;
    case 3:
      h = { t: "s", v: a[c] };
      break;
    case 5:
      h = { t: "d", v: o };
      break;
    case 6:
      h = { t: "b", v: l > 0 };
      break;
    case 7:
      h = { t: "n", v: l / 86400 };
      break;
    case 8:
      h = { t: "e", v: 0 };
      break;
    case 9:
      if (i > -1)
        h = { t: "s", v: r[i] };
      else
        throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(t & 31, " : ").concat(e.slice(0, 4)));
      break;
    case 10:
      h = { t: "n", v: f };
      break;
    default:
      throw new Error("Unsupported cell type ".concat(e[1], " : ").concat(t & 31, " : ").concat(e.slice(0, 4)));
  }
  return h;
}
function ad(e, a, r) {
  switch (e[0]) {
    case 0:
    case 1:
    case 2:
    case 3:
      return ed(e, a, r, e[0]);
    case 5:
      return rd(e, a, r);
    default:
      throw new Error("Unsupported payload version ".concat(e[0]));
  }
}
function Kr(e) {
  var a = qe(e);
  return Ka(a[1][0].data);
}
function Dn(e, a) {
  var r = qe(a.data), n = We(r[1][0].data), t = r[3], s = [];
  return (t || []).forEach(function(i) {
    var c = qe(i.data), f = We(c[1][0].data) >>> 0;
    switch (n) {
      case 1:
        s[f] = zt(c[3][0].data);
        break;
      case 8:
        {
          var l = e[Kr(c[9][0].data)][0], o = qe(l.data), h = e[Kr(o[1][0].data)][0], x = We(h.meta[1][0].data);
          if (x != 2001)
            throw new Error("2000 unexpected reference to ".concat(x));
          var d = qe(h.data);
          s[f] = d[3].map(function(v) {
            return zt(v.data);
          }).join("");
        }
        break;
    }
  }), s;
}
function td(e, a) {
  var r, n, t, s, i, c, f, l, o, h, x, d, v, u, g = qe(e), S = We(g[1][0].data) >>> 0, y = We(g[2][0].data) >>> 0, _ = ((n = (r = g[8]) == null ? void 0 : r[0]) == null ? void 0 : n.data) && We(g[8][0].data) > 0 || !1, N, b;
  if ((s = (t = g[7]) == null ? void 0 : t[0]) != null && s.data && a != 0)
    N = (c = (i = g[7]) == null ? void 0 : i[0]) == null ? void 0 : c.data, b = (l = (f = g[6]) == null ? void 0 : f[0]) == null ? void 0 : l.data;
  else if ((h = (o = g[4]) == null ? void 0 : o[0]) != null && h.data && a != 1)
    N = (d = (x = g[4]) == null ? void 0 : x[0]) == null ? void 0 : d.data, b = (u = (v = g[3]) == null ? void 0 : v[0]) == null ? void 0 : u.data;
  else
    throw "NUMBERS Tile missing ".concat(a, " cell storage");
  for (var I = _ ? 4 : 1, F = g0(N), V = [], D = 0; D < N.length / 2; ++D) {
    var z = F.getUint16(D * 2, !0);
    z < 65535 && V.push([D, z]);
  }
  if (V.length != y)
    throw "Expected ".concat(y, " cells, found ").concat(V.length);
  var G = [];
  for (D = 0; D < V.length - 1; ++D)
    G[V[D][0]] = b.subarray(V[D][1] * I, V[D + 1][1] * I);
  return V.length >= 1 && (G[V[V.length - 1][0]] = b.subarray(V[V.length - 1][1] * I)), { R: S, cells: G };
}
function nd(e, a) {
  var r, n = qe(a.data), t = (r = n == null ? void 0 : n[7]) != null && r[0] ? We(n[7][0].data) >>> 0 > 0 ? 1 : 0 : -1, s = m0(n[5], function(i) {
    return td(i, t);
  });
  return {
    nrows: We(n[4][0].data) >>> 0,
    data: s.reduce(function(i, c) {
      return i[c.R] || (i[c.R] = []), c.cells.forEach(function(f, l) {
        if (i[c.R][l])
          throw new Error("Duplicate cell r=".concat(c.R, " c=").concat(l));
        i[c.R][l] = f;
      }), i;
    }, [])
  };
}
function sd(e, a, r) {
  var n, t = qe(a.data), s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
  if (s.e.r = (We(t[6][0].data) >>> 0) - 1, s.e.r < 0)
    throw new Error("Invalid row varint ".concat(t[6][0].data));
  if (s.e.c = (We(t[7][0].data) >>> 0) - 1, s.e.c < 0)
    throw new Error("Invalid col varint ".concat(t[7][0].data));
  r["!ref"] = Ee(s);
  var i = qe(t[4][0].data), c = Dn(e, e[Kr(i[4][0].data)][0]), f = (n = i[17]) != null && n[0] ? Dn(e, e[Kr(i[17][0].data)][0]) : [], l = qe(i[3][0].data), o = 0;
  l[1].forEach(function(h) {
    var x = qe(h.data), d = e[Kr(x[2][0].data)][0], v = We(d.meta[1][0].data);
    if (v != 6002)
      throw new Error("6001 unexpected reference to ".concat(v));
    var u = nd(e, d);
    u.data.forEach(function(g, S) {
      g.forEach(function(y, _) {
        var N = ue({ r: o + S, c: _ }), b = ad(y, c, f);
        b && (r[N] = b);
      });
    }), o += u.nrows;
  });
}
function id(e, a) {
  var r = qe(a.data), n = { "!ref": "A1" }, t = e[Kr(r[2][0].data)], s = We(t[0].meta[1][0].data);
  if (s != 6001)
    throw new Error("6000 unexpected reference to ".concat(s));
  return sd(e, t[0], n), n;
}
function cd(e, a) {
  var r, n = qe(a.data), t = {
    name: (r = n[1]) != null && r[0] ? zt(n[1][0].data) : "",
    sheets: []
  }, s = m0(n[2], Kr);
  return s.forEach(function(i) {
    e[i].forEach(function(c) {
      var f = We(c.meta[1][0].data);
      f == 6e3 && t.sheets.push(id(e, c));
    });
  }), t;
}
function fd(e, a) {
  var r = T0(), n = qe(a.data), t = m0(n[1], Kr);
  if (t.forEach(function(s) {
    e[s].forEach(function(i) {
      var c = We(i.meta[1][0].data);
      if (c == 2) {
        var f = cd(e, i);
        f.sheets.forEach(function(l, o) {
          k0(r, l, o == 0 ? f.name : f.name + "_" + o, !0);
        });
      }
    });
  }), r.SheetNames.length == 0)
    throw new Error("Empty NUMBERS file");
  return r;
}
function Bt(e) {
  var a, r, n, t, s = {}, i = [];
  if (e.FullPaths.forEach(function(f) {
    if (f.match(/\.iwpv2/))
      throw new Error("Unsupported password protection");
  }), e.FileIndex.forEach(function(f) {
    if (f.name.match(/\.iwa$/)) {
      var l;
      try {
        l = Qx(f.content);
      } catch (h) {
        return console.log("?? " + f.content.length + " " + (h.message || h));
      }
      var o;
      try {
        o = Zx(l);
      } catch (h) {
        return console.log("## " + (h.message || h));
      }
      o.forEach(function(h) {
        s[h.id] = h.messages, i.push(h.id);
      });
    }
  }), !i.length)
    throw new Error("File has no messages");
  var c = ((t = (n = (r = (a = s == null ? void 0 : s[1]) == null ? void 0 : a[0]) == null ? void 0 : r.meta) == null ? void 0 : n[1]) == null ? void 0 : t[0].data) && We(s[1][0].meta[1][0].data) == 1 && s[1][0];
  if (c || i.forEach(function(f) {
    s[f].forEach(function(l) {
      var o = We(l.meta[1][0].data) >>> 0;
      if (o == 1)
        if (!c)
          c = l;
        else
          throw new Error("Document has multiple roots");
    });
  }), !c)
    throw new Error("Cannot find Document root");
  return fd(s, c);
}
function od(e) {
  return function(r) {
    for (var n = 0; n != e.length; ++n) {
      var t = e[n];
      r[t[0]] === void 0 && (r[t[0]] = t[1]), t[2] === "n" && (r[t[0]] = Number(r[t[0]]));
    }
  };
}
function _0(e) {
  od([
    ["cellNF", !1],
    /* emit cell number format string as .z */
    ["cellHTML", !0],
    /* emit html string as .h */
    ["cellFormula", !0],
    /* emit formulae as .f */
    ["cellStyles", !1],
    /* emits style/theme as .s */
    ["cellText", !0],
    /* emit formatted text as .w */
    ["cellDates", !1],
    /* emit date cells with type `d` */
    ["sheetStubs", !1],
    /* emit empty cells */
    ["sheetRows", 0, "n"],
    /* read n rows (0 = read all rows) */
    ["bookDeps", !1],
    /* parse calculation chains */
    ["bookSheets", !1],
    /* only try to get sheet names (no Sheets) */
    ["bookProps", !1],
    /* only try to get properties (no Sheets) */
    ["bookFiles", !1],
    /* include raw file structure (keys, files, cfb) */
    ["bookVBA", !1],
    /* include vba raw data (vbaraw) */
    ["password", ""],
    /* password */
    ["WTF", !1]
    /* WTF mode (throws errors) */
  ])(e);
}
function ld(e) {
  return va.WS.indexOf(e) > -1 ? "sheet" : e == va.CS ? "chart" : e == va.DS ? "dialog" : e == va.MS ? "macro" : e && e.length ? e : "sheet";
}
function hd(e, a) {
  if (!e)
    return 0;
  try {
    e = a.map(function(n) {
      return n.id || (n.id = n.strRelID), [n.name, e["!id"][n.id].Target, ld(e["!id"][n.id].Type)];
    });
  } catch {
    return null;
  }
  return !e || e.length === 0 ? null : e;
}
function ud(e, a, r, n, t, s, i, c, f, l, o, h) {
  try {
    s[n] = Ma(hr(e, r, !0), a);
    var x = Be(e, a), d;
    switch (c) {
      case "sheet":
        d = mx(x, a, t, f, s[n], l, o, h);
        break;
      case "chart":
        if (d = _x(x, a, t, f, s[n], l, o, h), !d || !d["!drawel"])
          break;
        var v = Ra(d["!drawel"].Target, a), u = Vt(v), g = g1(hr(e, v, !0), Ma(hr(e, u, !0), v)), S = Ra(g, v), y = Vt(S);
        d = rx(hr(e, S, !0), S, f, Ma(hr(e, y, !0), S), l, d);
        break;
      case "macro":
        d = Ex(x, a, t, f, s[n], l, o, h);
        break;
      case "dialog":
        d = Tx(x, a, t, f, s[n], l, o, h);
        break;
      default:
        throw new Error("Unrecognized sheet type " + c);
    }
    i[n] = d;
    var _ = [];
    s && s[n] && Or(s[n]).forEach(function(N) {
      var b = "";
      if (s[n][N].Type == va.CMNT) {
        b = Ra(s[n][N].Target, a);
        var I = Ax(Be(e, b, !0), b, f);
        if (!I || !I.length)
          return;
        dn(d, I, !1);
      }
      s[n][N].Type == va.TCMNT && (b = Ra(s[n][N].Target, a), _ = _.concat(_1(Be(e, b, !0), f)));
    }), _ && _.length && dn(d, _, !0, f.people || []);
  } catch (N) {
    if (f.WTF)
      throw N;
  }
}
function vr(e) {
  return e.charAt(0) == "/" ? e.slice(1) : e;
}
function xd(e, a) {
  if (Xn(), a = a || {}, _0(a), gr(e, "META-INF/manifest.xml") || gr(e, "objectdata.xml"))
    return Sn(e, a);
  if (gr(e, "Index/Document.iwa")) {
    if (typeof Uint8Array > "u")
      throw new Error("NUMBERS file parsing requires Uint8Array support");
    if (typeof Bt < "u") {
      if (e.FileIndex)
        return Bt(e);
      var r = _e.utils.cfb_new();
      return H0(e).forEach(function(fe) {
        uc(r, fe, Jn(e, fe));
      }), Bt(r);
    }
    throw new Error("Unsupported NUMBERS file");
  }
  if (!gr(e, "[Content_Types].xml"))
    throw gr(e, "index.xml.gz") ? new Error("Unsupported NUMBERS 08 file") : gr(e, "index.xml") ? new Error("Unsupported NUMBERS 09 file") : new Error("Unsupported ZIP file");
  var n = H0(e), t = ff(hr(e, "[Content_Types].xml")), s = !1, i, c;
  if (t.workbooks.length === 0 && (c = "xl/workbook.xml", Be(e, c, !0) && t.workbooks.push(c)), t.workbooks.length === 0) {
    if (c = "xl/workbook.bin", !Be(e, c, !0))
      throw new Error("Could not find workbook");
    t.workbooks.push(c), s = !0;
  }
  t.workbooks[0].slice(-3) == "bin" && (s = !0);
  var f = {}, l = {};
  if (!a.bookSheets && !a.bookProps) {
    if (Ua = [], t.sst)
      try {
        Ua = Fx(Be(e, vr(t.sst)), t.sst, a);
      } catch (fe) {
        if (a.WTF)
          throw fe;
      }
    a.cellStyles && t.themes.length && (f = wx(hr(e, t.themes[0].replace(/^\//, ""), !0) || "", t.themes[0], a)), t.style && (l = kx(Be(e, vr(t.style)), t.style, f, a));
  }
  t.links.map(function(fe) {
    try {
      var re = Ma(hr(e, Vt(vr(fe))), fe);
      return Cx(Be(e, vr(fe)), re, fe, a);
    } catch {
    }
  });
  var o = gx(Be(e, vr(t.workbooks[0])), t.workbooks[0], a), h = {}, x = "";
  t.coreprops.length && (x = Be(e, vr(t.coreprops[0]), !0), x && (h = Es(x)), t.extprops.length !== 0 && (x = Be(e, vr(t.extprops[0]), !0), x && xf(x, h, a)));
  var d = {};
  (!a.bookSheets || a.bookProps) && t.custprops.length !== 0 && (x = hr(e, vr(t.custprops[0]), !0), x && (d = vf(x, a)));
  var v = {};
  if ((a.bookSheets || a.bookProps) && (o.Sheets ? i = o.Sheets.map(function(re) {
    return re.name;
  }) : h.Worksheets && h.SheetNames.length > 0 && (i = h.SheetNames), a.bookProps && (v.Props = h, v.Custprops = d), a.bookSheets && typeof i < "u" && (v.SheetNames = i), a.bookSheets ? v.SheetNames : a.bookProps))
    return v;
  i = {};
  var u = {};
  a.bookDeps && t.calcchain && (u = Sx(Be(e, vr(t.calcchain)), t.calcchain));
  var g = 0, S = {}, y, _;
  {
    var N = o.Sheets;
    h.Worksheets = N.length, h.SheetNames = [];
    for (var b = 0; b != N.length; ++b)
      h.SheetNames[b] = N[b].name;
  }
  var I = s ? "bin" : "xml", F = t.workbooks[0].lastIndexOf("/"), V = (t.workbooks[0].slice(0, F + 1) + "_rels/" + t.workbooks[0].slice(F + 1) + ".rels").replace(/^\//, "");
  gr(e, V) || (V = "xl/_rels/workbook." + I + ".rels");
  var D = Ma(hr(e, V, !0), V.replace(/_rels.*/, "s5s"));
  (t.metadata || []).length >= 1 && (a.xlmeta = yx(Be(e, vr(t.metadata[0])), t.metadata[0], a)), (t.people || []).length >= 1 && (a.people = E1(Be(e, vr(t.people[0])), a)), D && (D = hd(D, o.Sheets));
  var z = Be(e, "xl/worksheets/sheet.xml", !0) ? 1 : 0;
  e:
    for (g = 0; g != h.Worksheets; ++g) {
      var G = "sheet";
      if (D && D[g] ? (y = "xl/" + D[g][1].replace(/[\/]?xl\//, ""), gr(e, y) || (y = D[g][1]), gr(e, y) || (y = V.replace(/_rels\/.*$/, "") + D[g][1]), G = D[g][2]) : (y = "xl/worksheets/sheet" + (g + 1 - z) + "." + I, y = y.replace(/sheet0\./, "sheet.")), _ = y.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels"), a && a.sheets != null)
        switch (typeof a.sheets) {
          case "number":
            if (g != a.sheets)
              continue e;
            break;
          case "string":
            if (h.SheetNames[g].toLowerCase() != a.sheets.toLowerCase())
              continue e;
            break;
          default:
            if (Array.isArray && Array.isArray(a.sheets)) {
              for (var P = !1, J = 0; J != a.sheets.length; ++J)
                typeof a.sheets[J] == "number" && a.sheets[J] == g && (P = 1), typeof a.sheets[J] == "string" && a.sheets[J].toLowerCase() == h.SheetNames[g].toLowerCase() && (P = 1);
              if (!P)
                continue e;
            }
        }
      ud(e, y, _, h.SheetNames[g], g, S, i, G, a, o, f, l);
    }
  return v = {
    Directory: t,
    Workbook: o,
    Props: h,
    Custprops: d,
    Deps: u,
    Sheets: i,
    SheetNames: h.SheetNames,
    Strings: Ua,
    Styles: l,
    Themes: f,
    SSF: ze(de)
  }, a && a.bookFiles && (e.files ? (v.keys = n, v.files = e.files) : (v.keys = [], v.files = {}, e.FullPaths.forEach(function(fe, re) {
    fe = fe.replace(/^Root Entry[\/]/, ""), v.keys.push(fe), v.files[fe] = e.FileIndex[re];
  }))), a && a.bookVBA && (t.vba.length > 0 ? v.vbaraw = Be(e, vr(t.vba[0]), !0) : t.defaults && t.defaults.bin === F1 && (v.vbaraw = Be(e, "xl/vbaProject.bin", !0))), v;
}
function dd(e, a) {
  var r = a || {}, n = "Workbook", t = _e.find(e, n);
  try {
    if (n = "/!DataSpaces/Version", t = _e.find(e, n), !t || !t.content)
      throw new Error("ECMA-376 Encrypted file missing " + n);
    if (il(t.content), n = "/!DataSpaces/DataSpaceMap", t = _e.find(e, n), !t || !t.content)
      throw new Error("ECMA-376 Encrypted file missing " + n);
    var s = fl(t.content);
    if (s.length !== 1 || s[0].comps.length !== 1 || s[0].comps[0].t !== 0 || s[0].name !== "StrongEncryptionDataSpace" || s[0].comps[0].v !== "EncryptedPackage")
      throw new Error("ECMA-376 Encrypted file bad " + n);
    if (n = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace", t = _e.find(e, n), !t || !t.content)
      throw new Error("ECMA-376 Encrypted file missing " + n);
    var i = ol(t.content);
    if (i.length != 1 || i[0] != "StrongEncryptionTransform")
      throw new Error("ECMA-376 Encrypted file bad " + n);
    if (n = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary", t = _e.find(e, n), !t || !t.content)
      throw new Error("ECMA-376 Encrypted file missing " + n);
    hl(t.content);
  } catch {
  }
  if (n = "/EncryptionInfo", t = _e.find(e, n), !t || !t.content)
    throw new Error("ECMA-376 Encrypted file missing " + n);
  var c = ul(t.content);
  if (n = "/EncryptedPackage", t = _e.find(e, n), !t || !t.content)
    throw new Error("ECMA-376 Encrypted file missing " + n);
  if (c[0] == 4 && typeof decrypt_agile < "u")
    return decrypt_agile(c[1], t.content, r.password || "", r);
  if (c[0] == 2 && typeof decrypt_std76 < "u")
    return decrypt_std76(c[1], t.content, r.password || "", r);
  throw new Error("File is password-protected");
}
function E0(e, a) {
  var r = "";
  switch ((a || {}).type || "base64") {
    case "buffer":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    case "base64":
      r = ur(e.slice(0, 12));
      break;
    case "binary":
      r = e;
      break;
    case "array":
      return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];
    default:
      throw new Error("Unrecognized type " + (a && a.type || "undefined"));
  }
  return [r.charCodeAt(0), r.charCodeAt(1), r.charCodeAt(2), r.charCodeAt(3), r.charCodeAt(4), r.charCodeAt(5), r.charCodeAt(6), r.charCodeAt(7)];
}
function vd(e, a) {
  return _e.find(e, "EncryptedPackage") ? dd(e, a) : ni(e, a);
}
function pd(e, a) {
  var r, n = e, t = a || {};
  return t.type || (t.type = me && Buffer.isBuffer(e) ? "buffer" : "base64"), r = Zn(n, t), xd(r, t);
}
function fi(e, a) {
  var r = 0;
  e:
    for (; r < e.length; )
      switch (e.charCodeAt(r)) {
        case 10:
        case 13:
        case 32:
          ++r;
          break;
        case 60:
          return Xt(e.slice(r), a);
        default:
          break e;
      }
  return $a.to_workbook(e, a);
}
function gd(e, a) {
  var r = "", n = E0(e, a);
  switch (a.type) {
    case "base64":
      r = ur(e);
      break;
    case "binary":
      r = e;
      break;
    case "buffer":
      r = e.toString("binary");
      break;
    case "array":
      r = sa(e);
      break;
    default:
      throw new Error("Unrecognized type " + a.type);
  }
  return n[0] == 239 && n[1] == 187 && n[2] == 191 && (r = Ae(r)), a.type = "binary", fi(r, a);
}
function md(e, a) {
  var r = e;
  return a.type == "base64" && (r = ur(r)), r = Xr.utils.decode(1200, r.slice(2), "str"), a.type = "binary", fi(r, a);
}
function _d(e) {
  return e.match(/[^\x00-\x7F]/) ? Ia(e) : e;
}
function bt(e, a, r, n) {
  return n ? (r.type = "string", $a.to_workbook(e, r)) : $a.to_workbook(a, r);
}
function Kt(e, a) {
  In();
  var r = a || {};
  if (typeof ArrayBuffer < "u" && e instanceof ArrayBuffer)
    return Kt(new Uint8Array(e), (r = ze(r), r.type = "array", r));
  typeof Uint8Array < "u" && e instanceof Uint8Array && !r.type && (r.type = typeof Deno < "u" ? "buffer" : "array");
  var n = e, t = [0, 0, 0, 0], s = !1;
  if (r.cellStyles && (r.cellNF = !0, r.sheetStubs = !0), ma = {}, r.dateNF && (ma.dateNF = r.dateNF), r.type || (r.type = me && Buffer.isBuffer(e) ? "buffer" : "base64"), r.type == "file" && (r.type = me ? "buffer" : "binary", n = sc(e), typeof Uint8Array < "u" && !me && (r.type = "array")), r.type == "string" && (s = !0, r.type = "binary", r.codepage = 65001, n = _d(e)), r.type == "array" && typeof Uint8Array < "u" && e instanceof Uint8Array && typeof ArrayBuffer < "u") {
    var i = new ArrayBuffer(3), c = new Uint8Array(i);
    if (c.foo = "bar", !c.foo)
      return r = ze(r), r.type = "array", Kt(qt(n), r);
  }
  switch ((t = E0(n, r))[0]) {
    case 208:
      if (t[1] === 207 && t[2] === 17 && t[3] === 224 && t[4] === 161 && t[5] === 177 && t[6] === 26 && t[7] === 225)
        return vd(_e.read(n, r), r);
      break;
    case 9:
      if (t[1] <= 8)
        return ni(n, r);
      break;
    case 60:
      return Xt(n, r);
    case 73:
      if (t[1] === 73 && t[2] === 42 && t[3] === 0)
        throw new Error("TIFF Image File is not a spreadsheet");
      if (t[1] === 68)
        return jo(n, r);
      break;
    case 84:
      if (t[1] === 65 && t[2] === 66 && t[3] === 76)
        return $o.to_workbook(n, r);
      break;
    case 80:
      return t[1] === 75 && t[2] < 9 && t[3] < 9 ? pd(n, r) : bt(e, n, r, s);
    case 239:
      return t[3] === 60 ? Xt(n, r) : bt(e, n, r, s);
    case 255:
      if (t[1] === 254)
        return md(n, r);
      if (t[1] === 0 && t[2] === 2 && t[3] === 0)
        return ba.to_workbook(n, r);
      break;
    case 0:
      if (t[1] === 0 && (t[2] >= 2 && t[3] === 0 || t[2] === 0 && (t[3] === 8 || t[3] === 9)))
        return ba.to_workbook(n, r);
      break;
    case 3:
    case 131:
    case 139:
    case 140:
      return xn.to_workbook(n, r);
    case 123:
      if (t[1] === 92 && t[2] === 114 && t[3] === 116)
        return Fl.to_workbook(n, r);
      break;
    case 10:
    case 13:
    case 32:
      return gd(n, r);
    case 137:
      if (t[1] === 80 && t[2] === 78 && t[3] === 71)
        throw new Error("PNG Image File is not a spreadsheet");
      break;
  }
  return Go.indexOf(t[0]) > -1 && t[2] <= 12 && t[3] <= 31 ? xn.to_workbook(n, r) : bt(e, n, r, s);
}
function Ed(e, a, r, n, t, s, i, c) {
  var f = je(r), l = c.defval, o = c.raw || !Object.prototype.hasOwnProperty.call(c, "raw"), h = !0, x = t === 1 ? [] : {};
  if (t !== 1)
    if (Object.defineProperty)
      try {
        Object.defineProperty(x, "__rowNum__", { value: r, enumerable: !1 });
      } catch {
        x.__rowNum__ = r;
      }
    else
      x.__rowNum__ = r;
  if (!i || e[r])
    for (var d = a.s.c; d <= a.e.c; ++d) {
      var v = i ? e[r][d] : e[n[d] + f];
      if (v === void 0 || v.t === void 0) {
        if (l === void 0)
          continue;
        s[d] != null && (x[s[d]] = l);
        continue;
      }
      var u = v.v;
      switch (v.t) {
        case "z":
          if (u == null)
            break;
          continue;
        case "e":
          u = u == 0 ? null : void 0;
          break;
        case "s":
        case "d":
        case "b":
        case "n":
          break;
        default:
          throw new Error("unrecognized type " + v.t);
      }
      if (s[d] != null) {
        if (u == null)
          if (v.t == "e" && u === null)
            x[s[d]] = null;
          else if (l !== void 0)
            x[s[d]] = l;
          else if (o && u === null)
            x[s[d]] = null;
          else
            continue;
        else
          x[s[d]] = o && (v.t !== "n" || v.t === "n" && c.rawNumbers !== !1) ? u : Ur(v, u, c);
        u != null && (h = !1);
      }
    }
  return { row: x, isempty: h };
}
function Yt(e, a) {
  if (e == null || e["!ref"] == null)
    return [];
  var r = { t: "n", v: 0 }, n = 0, t = 1, s = [], i = 0, c = "", f = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } }, l = a || {}, o = l.range != null ? l.range : e["!ref"];
  switch (l.header === 1 ? n = 1 : l.header === "A" ? n = 2 : Array.isArray(l.header) ? n = 3 : l.header == null && (n = 0), typeof o) {
    case "string":
      f = Re(o);
      break;
    case "number":
      f = Re(e["!ref"]), f.s.r = o;
      break;
    default:
      f = o;
  }
  n > 0 && (t = 0);
  var h = je(f.s.r), x = [], d = [], v = 0, u = 0, g = Array.isArray(e), S = f.s.r, y = 0, _ = {};
  g && !e[S] && (e[S] = []);
  var N = l.skipHidden && e["!cols"] || [], b = l.skipHidden && e["!rows"] || [];
  for (y = f.s.c; y <= f.e.c; ++y)
    if (!(N[y] || {}).hidden)
      switch (x[y] = Ve(y), r = g ? e[S][y] : e[x[y] + h], n) {
        case 1:
          s[y] = y - f.s.c;
          break;
        case 2:
          s[y] = x[y];
          break;
        case 3:
          s[y] = l.header[y - f.s.c];
          break;
        default:
          if (r == null && (r = { w: "__EMPTY", t: "s" }), c = i = Ur(r, null, l), u = _[i] || 0, !u)
            _[i] = 1;
          else {
            do
              c = i + "_" + u++;
            while (_[c]);
            _[i] = u, _[c] = 1;
          }
          s[y] = c;
      }
  for (S = f.s.r + t; S <= f.e.r; ++S)
    if (!(b[S] || {}).hidden) {
      var I = Ed(e, f, S, x, n, s, g, l);
      (I.isempty === !1 || (n === 1 ? l.blankrows !== !1 : l.blankrows)) && (d[v++] = I.row);
    }
  return d.length = v, d;
}
var On = /"/g;
function Td(e, a, r, n, t, s, i, c) {
  for (var f = !0, l = [], o = "", h = je(r), x = a.s.c; x <= a.e.c; ++x)
    if (n[x]) {
      var d = c.dense ? (e[r] || [])[x] : e[n[x] + h];
      if (d == null)
        o = "";
      else if (d.v != null) {
        f = !1, o = "" + (c.rawNumbers && d.t == "n" ? d.v : Ur(d, null, c));
        for (var v = 0, u = 0; v !== o.length; ++v)
          if ((u = o.charCodeAt(v)) === t || u === s || u === 34 || c.forceQuotes) {
            o = '"' + o.replace(On, '""') + '"';
            break;
          }
        o == "ID" && (o = '"ID"');
      } else
        d.f != null && !d.F ? (f = !1, o = "=" + d.f, o.indexOf(",") >= 0 && (o = '"' + o.replace(On, '""') + '"')) : o = "";
      l.push(o);
    }
  return c.blankrows === !1 && f ? null : l.join(i);
}
function oi(e, a) {
  var r = [], n = a ?? {};
  if (e == null || e["!ref"] == null)
    return "";
  var t = Re(e["!ref"]), s = n.FS !== void 0 ? n.FS : ",", i = s.charCodeAt(0), c = n.RS !== void 0 ? n.RS : `
`, f = c.charCodeAt(0), l = new RegExp((s == "|" ? "\\|" : s) + "+$"), o = "", h = [];
  n.dense = Array.isArray(e);
  for (var x = n.skipHidden && e["!cols"] || [], d = n.skipHidden && e["!rows"] || [], v = t.s.c; v <= t.e.c; ++v)
    (x[v] || {}).hidden || (h[v] = Ve(v));
  for (var u = 0, g = t.s.r; g <= t.e.r; ++g)
    (d[g] || {}).hidden || (o = Td(e, t, g, h, i, f, s, n), o != null && (n.strip && (o = o.replace(l, "")), (o || n.blankrows !== !1) && r.push((u++ ? c : "") + o)));
  return delete n.dense, r.join("");
}
function kd(e, a) {
  a || (a = {}), a.FS = "	", a.RS = `
`;
  var r = oi(e, a);
  return r;
}
function wd(e) {
  var a = "", r, n = "";
  if (e == null || e["!ref"] == null)
    return [];
  var t = Re(e["!ref"]), s = "", i = [], c, f = [], l = Array.isArray(e);
  for (c = t.s.c; c <= t.e.c; ++c)
    i[c] = Ve(c);
  for (var o = t.s.r; o <= t.e.r; ++o)
    for (s = je(o), c = t.s.c; c <= t.e.c; ++c)
      if (a = i[c] + s, r = l ? (e[o] || [])[c] : e[a], n = "", r !== void 0) {
        if (r.F != null) {
          if (a = r.F, !r.f)
            continue;
          n = r.f, a.indexOf(":") == -1 && (a = a + ":" + a);
        }
        if (r.f != null)
          n = r.f;
        else {
          if (r.t == "z")
            continue;
          if (r.t == "n" && r.v != null)
            n = "" + r.v;
          else if (r.t == "b")
            n = r.v ? "TRUE" : "FALSE";
          else if (r.w !== void 0)
            n = "'" + r.w;
          else {
            if (r.v === void 0)
              continue;
            r.t == "s" ? n = "'" + r.v : n = "" + r.v;
          }
        }
        f[f.length] = a + "=" + n;
      }
  return f;
}
function li(e, a, r) {
  var n = r || {}, t = +!n.skipHeader, s = e || {}, i = 0, c = 0;
  if (s && n.origin != null)
    if (typeof n.origin == "number")
      i = n.origin;
    else {
      var f = typeof n.origin == "string" ? sr(n.origin) : n.origin;
      i = f.r, c = f.c;
    }
  var l, o = { s: { c: 0, r: 0 }, e: { c, r: i + a.length - 1 + t } };
  if (s["!ref"]) {
    var h = Re(s["!ref"]);
    o.e.c = Math.max(o.e.c, h.e.c), o.e.r = Math.max(o.e.r, h.e.r), i == -1 && (i = h.e.r + 1, o.e.r = i + a.length - 1 + t);
  } else
    i == -1 && (i = 0, o.e.r = a.length - 1 + t);
  var x = n.header || [], d = 0;
  a.forEach(function(u, g) {
    Or(u).forEach(function(S) {
      (d = x.indexOf(S)) == -1 && (x[d = x.length] = S);
      var y = u[S], _ = "z", N = "", b = ue({ c: c + d, r: i + g + t });
      l = Ya(s, b), y && typeof y == "object" && !(y instanceof Date) ? s[b] = y : (typeof y == "number" ? _ = "n" : typeof y == "boolean" ? _ = "b" : typeof y == "string" ? _ = "s" : y instanceof Date ? (_ = "d", n.cellDates || (_ = "n", y = cr(y)), N = n.dateNF || de[14]) : y === null && n.nullError && (_ = "e", y = 0), l ? (l.t = _, l.v = y, delete l.w, delete l.R, N && (l.z = N)) : s[b] = l = { t: _, v: y }, N && (l.z = N));
    });
  }), o.e.c = Math.max(o.e.c, c + x.length - 1);
  var v = je(i);
  if (t)
    for (d = 0; d < x.length; ++d)
      s[Ve(d + c) + v] = { t: "s", v: x[d] };
  return s["!ref"] = Ee(o), s;
}
function Fd(e, a) {
  return li(null, e, a);
}
function Ya(e, a, r) {
  if (typeof a == "string") {
    if (Array.isArray(e)) {
      var n = sr(a);
      return e[n.r] || (e[n.r] = []), e[n.r][n.c] || (e[n.r][n.c] = { t: "z" });
    }
    return e[a] || (e[a] = { t: "z" });
  }
  return typeof a != "number" ? Ya(e, ue(a)) : Ya(e, ue({ r: a, c: r || 0 }));
}
function Ad(e, a) {
  if (typeof a == "number") {
    if (a >= 0 && e.SheetNames.length > a)
      return a;
    throw new Error("Cannot find sheet # " + a);
  } else if (typeof a == "string") {
    var r = e.SheetNames.indexOf(a);
    if (r > -1)
      return r;
    throw new Error("Cannot find sheet name |" + a + "|");
  } else
    throw new Error("Cannot find sheet |" + a + "|");
}
function T0() {
  return { SheetNames: [], Sheets: {} };
}
function k0(e, a, r, n) {
  var t = 1;
  if (!r)
    for (; t <= 65535 && e.SheetNames.indexOf(r = "Sheet" + t) != -1; ++t, r = void 0)
      ;
  if (!r || e.SheetNames.length >= 65535)
    throw new Error("Too many worksheets");
  if (n && e.SheetNames.indexOf(r) >= 0) {
    var s = r.match(/(^.*?)(\d+)$/);
    t = s && +s[2] || 0;
    var i = s && s[1] || r;
    for (++t; t <= 65535 && e.SheetNames.indexOf(r = i + t) != -1; ++t)
      ;
  }
  if (ox(r), e.SheetNames.indexOf(r) >= 0)
    throw new Error("Worksheet with name |" + r + "| already exists!");
  return e.SheetNames.push(r), e.Sheets[r] = a, r;
}
function Sd(e, a, r) {
  e.Workbook || (e.Workbook = {}), e.Workbook.Sheets || (e.Workbook.Sheets = []);
  var n = Ad(e, a);
  switch (e.Workbook.Sheets[n] || (e.Workbook.Sheets[n] = {}), r) {
    case 0:
    case 1:
    case 2:
      break;
    default:
      throw new Error("Bad sheet visibility setting " + r);
  }
  e.Workbook.Sheets[n].Hidden = r;
}
function Cd(e, a) {
  return e.z = a, e;
}
function hi(e, a, r) {
  return a ? (e.l = { Target: a }, r && (e.l.Tooltip = r)) : delete e.l, e;
}
function yd(e, a, r) {
  return hi(e, "#" + a, r);
}
function Dd(e, a, r) {
  e.c || (e.c = []), e.c.push({ t: a, a: r || "SheetJS" });
}
function Od(e, a, r, n) {
  for (var t = typeof a != "string" ? a : Re(a), s = typeof a == "string" ? a : Ee(a), i = t.s.r; i <= t.e.r; ++i)
    for (var c = t.s.c; c <= t.e.c; ++c) {
      var f = Ya(e, i, c);
      f.t = "n", f.F = s, delete f.v, i == t.s.r && c == t.s.c && (f.f = r, n && (f.D = !0));
    }
  return e;
}
var Rd = {
  encode_col: Ve,
  encode_row: je,
  encode_cell: ue,
  encode_range: Ee,
  decode_col: c0,
  decode_row: i0,
  split_cell: Hc,
  decode_cell: sr,
  decode_range: ka,
  format_cell: Ur,
  sheet_add_aoa: vs,
  sheet_add_json: li,
  sheet_add_dom: si,
  aoa_to_sheet: wa,
  json_to_sheet: Fd,
  table_to_sheet: ii,
  table_to_book: jx,
  sheet_to_csv: oi,
  sheet_to_txt: kd,
  sheet_to_json: Yt,
  sheet_to_html: zx,
  sheet_to_formulae: wd,
  sheet_to_row_object_array: Yt,
  sheet_get_cell: Ya,
  book_new: T0,
  book_append_sheet: k0,
  book_set_sheet_visibility: Sd,
  cell_set_number_format: Cd,
  cell_set_hyperlink: hi,
  cell_set_internal_link: yd,
  cell_add_comment: Dd,
  sheet_set_array_formula: Od,
  consts: {
    SHEET_VISIBLE: 0,
    SHEET_HIDDEN: 1,
    SHEET_VERY_HIDDEN: 2
  }
};
const Pd = () => {
  Ci();
  const [e, a] = yi([]), r = (n) => {
    new Promise((s, i) => {
      const c = new FileReader();
      c.readAsArrayBuffer(n), c.onload = (f) => {
        if (f.target) {
          const l = f.target.result, o = Kt(l, { type: "buffer" }), h = o.SheetNames[0], x = o.Sheets[h], d = Rd.sheet_to_json(x);
          s(d);
        }
      }, c.onerror = (f) => {
        i(f);
      };
    }).then((s) => {
      a(s);
    });
  };
  return /* @__PURE__ */ ve.jsx(ve.Fragment, { children: /* @__PURE__ */ ve.jsx("div", { className: "MasjidTimingsContainer", children: /* @__PURE__ */ ve.jsxs("div", { className: "MasjidTimigsComponnet", children: [
    /* @__PURE__ */ ve.jsx("div", { className: "MasjidTimingsTopComponent" }),
    /* @__PURE__ */ ve.jsx("div", { className: "MasjidTimingsBottomComponent", children: /* @__PURE__ */ ve.jsx("div", { children: /* @__PURE__ */ ve.jsxs("table", { className: "table-container", children: [
      /* @__PURE__ */ ve.jsx("thead", { className: "table-head-component", children: /* @__PURE__ */ ve.jsxs("tr", { className: "tableHeadUpload", children: [
        /* @__PURE__ */ ve.jsx("th", { className: "tableHeaderPrayerNameUpload", children: /* @__PURE__ */ ve.jsx("span", { className: "tableHeaderContentUpload", children: "Date" }) }),
        /* @__PURE__ */ ve.jsx("th", { className: "tableHeaderPrayerNameUpload", children: /* @__PURE__ */ ve.jsx("span", { className: "tableHeaderContentUpload", children: "Fajr" }) }),
        /* @__PURE__ */ ve.jsx("th", { className: "tableHeaderPrayerNameUpload", children: /* @__PURE__ */ ve.jsx("span", { className: "tableHeaderContentUpload", children: "Dhur" }) }),
        /* @__PURE__ */ ve.jsx("th", { className: "tableHeaderPrayerNameUpload", children: /* @__PURE__ */ ve.jsx("span", { className: "tableHeaderContentUpload", children: "Asar" }) }),
        /* @__PURE__ */ ve.jsx("th", { className: "tableHeaderPrayerNameUpload", children: /* @__PURE__ */ ve.jsx("span", { className: "tableHeaderContentUpload", children: "Maghrib" }) }),
        /* @__PURE__ */ ve.jsx("th", { className: "tableHeaderPrayerNameUpload", children: /* @__PURE__ */ ve.jsx("span", { className: "tableHeaderContentUpload", children: "Isha" }) })
      ] }) }),
      /* @__PURE__ */ ve.jsx("tbody", { children: e.slice(5, 30).map((n) => /* @__PURE__ */ ve.jsx(ve.Fragment, { children: /* @__PURE__ */ ve.jsxs("tr", { children: [
        /* @__PURE__ */ ve.jsx("td", { className: "tableRowUpload", children: /* @__PURE__ */ ve.jsx("span", { className: "tableHeaderContentBodyNameUpload", children: n.Date }) }),
        /* @__PURE__ */ ve.jsx("td", { className: "tableRowUpload", children: /* @__PURE__ */ ve.jsx("span", { className: "tableHeaderContentBodyNameUpload", children: n.Fajr }) }),
        /* @__PURE__ */ ve.jsx("td", { className: "tableRowUpload", children: /* @__PURE__ */ ve.jsx("span", { className: "tableHeaderContentBodyNameUpload", children: n.Dhur }) }),
        /* @__PURE__ */ ve.jsx("td", { className: "tableRowUpload", children: /* @__PURE__ */ ve.jsx("span", { className: "tableHeaderContentBodyNameUpload", children: n.Asar }) }),
        /* @__PURE__ */ ve.jsx("td", { className: "tableRowUpload", children: /* @__PURE__ */ ve.jsx("span", { className: "tableHeaderContentBodyNameUpload", children: n.Maghrib }) }),
        /* @__PURE__ */ ve.jsx("td", { className: "tableRowUpload", children: /* @__PURE__ */ ve.jsx("span", { className: "tableHeaderContentBodyNameUpload", children: n.Isha }) })
      ] }, n) })) })
    ] }) }) }),
    /* @__PURE__ */ ve.jsxs("div", { className: "inputFieldButton", children: [
      /* @__PURE__ */ ve.jsx(
        "input",
        {
          className: "InputFildTimingsContainer",
          type: "file",
          id: "file",
          onChange: (n) => {
            n.target.files && n.target.files.length > 0 && r(n.target.files[0]);
          }
        }
      ),
      /* @__PURE__ */ ve.jsx(
        "label",
        {
          className: "labelForUploadFile",
          children: "Upload Pdf, Csv or Excel"
        }
      )
    ] })
  ] }) }) });
};
export {
  Pd as default
};