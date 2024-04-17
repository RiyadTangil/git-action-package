import { c as Z, f as J, g as U, u as q, a as D, b as G, d as $, t as M, _ as E, j as e, B as H, E as K, C as Q, e as X, h as Y, i as I, k as V, M as ee, l as O, D as se, m as te, N as ne, n as ie, R as ae, o as N, p as oe, q as re, r as le, S as ce } from "./index-biwjac3z.mjs";
import f, { lazy as x, useState as j, useEffect as _, Suspense as de } from "react";
import { p as me } from "./PLACEHOLDER-event-l-Oe2vMs.mjs";
const pe = (i, t) => async () => {
  try {
    const { data: n } = await Z(i, t);
    return n.success, n;
  } catch (n) {
    return n.response.data;
  }
}, xe = (i) => async () => {
  try {
    const { data: t } = await J(i);
    return t.success, t;
  } catch (t) {
    return {
      success: !1,
      message: t.response.data.message ? t.response.data.message : "Failed To Fetch Event : SomeThing Went Wrong"
    };
  }
}, he = f.createContext({}), W = !0;
function ue({ baseColor: i, highlightColor: t, width: n, height: h, borderRadius: s, circle: d, direction: m, duration: u, enableAnimation: g = W }) {
  const a = {};
  return m === "rtl" && (a["--animation-direction"] = "reverse"), typeof u == "number" && (a["--animation-duration"] = `${u}s`), g || (a["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (a.width = n), (typeof h == "string" || typeof h == "number") && (a.height = h), (typeof s == "string" || typeof s == "number") && (a.borderRadius = s), d && (a.borderRadius = "50%"), typeof i < "u" && (a["--base-color"] = i), typeof t < "u" && (a["--highlight-color"] = t), a;
}
function R({ count: i = 1, wrapper: t, className: n, containerClassName: h, containerTestId: s, circle: d = !1, style: m, ...u }) {
  var g, a, F;
  const T = f.useContext(he), y = { ...u };
  for (const [o, p] of Object.entries(u))
    typeof p > "u" && delete y[o];
  const v = {
    ...T,
    ...y,
    circle: d
  }, z = {
    ...m,
    ...ue(v)
  };
  let P = "react-loading-skeleton";
  n && (P += ` ${n}`);
  const B = (g = v.inline) !== null && g !== void 0 ? g : !1, w = [], k = Math.ceil(i);
  for (let o = 0; o < k; o++) {
    let p = z;
    if (k > i && o === k - 1) {
      const S = (a = p.width) !== null && a !== void 0 ? a : "100%", r = i % 1, l = typeof S == "number" ? S * r : `calc(${S} * ${r})`;
      p = { ...p, width: l };
    }
    const A = f.createElement("span", { className: P, style: p, key: o }, "‌");
    B ? w.push(A) : w.push(f.createElement(
      f.Fragment,
      { key: o },
      A,
      f.createElement("br", null)
    ));
  }
  return f.createElement("span", { className: h, "data-testid": s, "aria-live": "polite", "aria-busy": (F = v.enableAnimation) !== null && F !== void 0 ? F : W }, t ? w.map((o, p) => f.createElement(t, { key: p }, o)) : w);
}
const fe = (i) => async () => {
  try {
    return await U(i);
  } catch (t) {
    return {
      success: !1,
      message: t.response.data.message ? t.response.data.message : "Failed To Login:SomeThing Went Wrong"
    };
  }
}, je = x(
  () => import("./PieChartComponent-BHNbp21J.mjs")
), ge = () => {
  var S;
  const i = q();
  let t = D((r) => r.admin);
  const [n, h] = j(""), [s, d] = j(), [m, u] = j(!1), [g, a] = j(!1), [F, T] = j(!1), { id: y } = G(), v = $(), [z, P] = j(), [B, w] = j([]);
  _(() => {
    y && (v(xe(y)).then(function(l) {
      if (l.success) {
        d(l.data);
        let c = l.data.location.coordinates[1], b = l.data.location.coordinates[0], L = c && b ? M(c, b) : "";
        h(L);
      } else
        E.error("Unable to fetch event data");
    }), t.role !== "musaliadmin" && v(fe(y)).then((c) => {
      P(c.data.data), w([
        {
          name: "Attending",
          value: c.data.data.attending,
          color: "#0EB77F"
        },
        {
          name: "Not Attending",
          value: c.data.data.notAttending,
          color: "#FF7272"
        },
        { name: "Maybe", value: c.data.data.maybe, color: "#FFB625" }
      ]);
    }));
  }, [m, g]);
  const k = async (r) => {
    if (r) {
      const l = E.loading("Please wait...!");
      v(pe(t.masjids[0], r)).then(function(b) {
        E.dismiss(l), b.message === "Event updated successfully" ? (E.success("Cancelled Event Successfully"), i("/feed/3")) : E.error("Failed to Cancel Event");
      });
    }
  }, o = (r) => {
    if (!(s != null && s.eventName))
      return "";
    let l = s == null ? void 0 : s.location.coordinates[1], c = s == null ? void 0 : s.location.coordinates[0], b = l && c ? M(l, c) : "";
    return !b || !r ? (E.error("There is something wrong with Time Zone"), "") : r ? te.unix(r).tz(b).format("hh:mm A") : "00:00";
  }, p = () => {
    i("/feed/3");
  }, A = {
    borderRadius: "16px",
    margin: "auto 10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    Width: "360px"
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    m ? /* @__PURE__ */ e.jsx(
      O,
      {
        setIsEditing: u,
        isFormDetailsPage: !0,
        eventData: s,
        setUpload: a
      }
    ) : /* @__PURE__ */ e.jsx("div", { className: "event-details", children: /* @__PURE__ */ e.jsxs("div", { className: "eventcontainer", style: { position: "relative" }, children: [
      /* @__PURE__ */ e.jsx("div", { className: "event-top-container", children: /* @__PURE__ */ e.jsx(H, { handleBackBtn: p }) }),
      /* @__PURE__ */ e.jsxs("div", { className: "eventMain", children: [
        /* @__PURE__ */ e.jsx("div", { className: "evntimg", children: (S = s == null ? void 0 : s.eventPhotos) != null && S.length ? /* @__PURE__ */ e.jsx(K, { eventData: s, isEditing: m }) : /* @__PURE__ */ e.jsx("div", { className: "event-preview-img", children: /* @__PURE__ */ e.jsx("img", { src: me, alt: "" }) }) }),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "eventdetailcard",
            style: {
              marginTop: "20px",
              position: "absolute",
              top: "80%",
              width: "100%"
            },
            children: /* @__PURE__ */ e.jsx(Q, { style: A, children: /* @__PURE__ */ e.jsxs("div", { className: "evntDesc", style: { padding: "0" }, children: [
              /* @__PURE__ */ e.jsxs(
                "div",
                {
                  className: "title",
                  style: {
                    fontSize: "20px",
                    padding: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #dcdbdb"
                  },
                  children: [
                    /* @__PURE__ */ e.jsx("h3", { children: (s == null ? void 0 : s.eventName) || /* @__PURE__ */ e.jsx(R, { count: 1, width: "100px" }) }),
                    !(s != null && s.isCancelled) && /* @__PURE__ */ e.jsxs(
                      "div",
                      {
                        className: "action-icon",
                        style: { display: "flex", gap: "15px" },
                        children: [
                          /* @__PURE__ */ e.jsx("div", { onClick: () => u(!0), children: /* @__PURE__ */ e.jsx("img", { src: X, alt: "", style: { width: "12px" } }) }),
                          /* @__PURE__ */ e.jsx("div", { onClick: () => T(!0), children: /* @__PURE__ */ e.jsx("img", { src: Y, alt: "", style: { width: "10px" } }) })
                        ]
                      }
                    )
                  ]
                }
              ),
              t.role !== "musaliadmin" && /* @__PURE__ */ e.jsx(de, { fallback: /* @__PURE__ */ e.jsx("div", { children: "Loading..." }), children: /* @__PURE__ */ e.jsx(je, { pieData: B }) }),
              /* @__PURE__ */ e.jsxs("div", { style: { padding: "1px 15px 15px" }, children: [
                /* @__PURE__ */ e.jsxs("div", { className: "evntStrtEnd", children: [
                  /* @__PURE__ */ e.jsx("div", { className: "datetiming", children: /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("h5", { children: "Start Date & Time" }),
                    /* @__PURE__ */ e.jsx("p", { children: s ? `${I(
                      V(
                        s == null ? void 0 : s.metaData.startDate,
                        n
                      )
                    )} |
                    ${o(s == null ? void 0 : s.timings[0].startTime)}` : /* @__PURE__ */ e.jsx(R, { count: 1, width: "130px" }) })
                  ] }) }),
                  /* @__PURE__ */ e.jsx("div", { className: "datetiming", children: /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("h5", { children: "End Date & Time" }),
                    /* @__PURE__ */ e.jsx("p", { children: s ? `${I(
                      V(
                        s == null ? void 0 : s.metaData.endDate,
                        n
                      )
                    )}    |  
                    ${o(s == null ? void 0 : s.timings[0].endTime)}` : /* @__PURE__ */ e.jsx(R, { count: 1, width: "130px" }) })
                  ] }) })
                ] }),
                /* @__PURE__ */ e.jsx("h5", { children: "Description" }),
                /* @__PURE__ */ e.jsx("div", { className: "event-des-box", children: s ? s != null && s.description ? /* @__PURE__ */ e.jsx("p", { children: /* @__PURE__ */ e.jsx(
                  ee,
                  {
                    tsx: s.description,
                    txLength: s.description.length
                  }
                ) }) : null : /* @__PURE__ */ e.jsx(R, { count: 3, width: "320px" }) }),
                /* @__PURE__ */ e.jsx("h5", { children: "Location" }),
                /* @__PURE__ */ e.jsx("p", { children: s ? s == null ? void 0 : s.address : /* @__PURE__ */ e.jsx(R, { count: 1, width: "320px" }) })
              ] })
            ] }) })
          }
        )
      ] })
    ] }) }),
    F && /* @__PURE__ */ e.jsx(
      se,
      {
        wariningType: "Delete",
        warining: `Are you sure you want to\r
        Delete this event Recovery not possible after deletion ?`,
        onClose: () => T(!1),
        onConfirm: () => {
          T(!1), k(y);
        }
      }
    )
  ] });
}, C = (i) => {
  const t = localStorage.getItem("admin"), n = t ? JSON.parse(t) : null;
  return n && n.isVerified ? /* @__PURE__ */ e.jsx(e.Fragment, { children: i.component }) : /* @__PURE__ */ e.jsx(ne, { to: "/login" });
};
x(
  () => import("./LandingFeedPage-BNnVbBrX.mjs")
);
x(
  () => import("./AdminProfile-BUG0J3HA.mjs")
);
x(
  () => import("./MasjidProfile-CuZ5F00S.mjs")
);
x(
  () => import("./MasjidAnnouncementPage-CeT-oQLa.mjs")
);
x(
  () => import("./MasjidEventsPage-xVxdsOx7.mjs")
);
x(
  () => import("./EventProfile-CTTEDDCh.mjs")
);
x(
  () => import("./MasjidTimings-COS2lBUk.mjs")
);
x(
  () => import("./MasjidUploadTimings-Ia_4l3uH.mjs")
);
const ye = () => {
  const i = $(), t = localStorage.getItem("admin"), n = t ? JSON.parse(t) : null;
  _(() => {
    n && i(ie()).then((m) => {
      console.log(m.message), m.message !== "Success" && (localStorage.removeItem("authTokens"), localStorage.removeItem("admin"), window.location.reload());
    });
  }, []);
  const [h, s] = j(!1);
  return _(() => {
    const d = () => {
      s(window.innerWidth <= 1024);
    };
    return window.addEventListener("resize", d), d(), () => {
      window.removeEventListener("resize", d);
    };
  }, []), /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs(ae, { children: [
    /* @__PURE__ */ e.jsx(
      N,
      {
        path: "/mobileCalender",
        element: /* @__PURE__ */ e.jsx(C, { component: /* @__PURE__ */ e.jsx(oe, {}) })
      }
    ),
    /* @__PURE__ */ e.jsx(
      N,
      {
        path: "/feed/:tab",
        element: /* @__PURE__ */ e.jsx(C, { component: /* @__PURE__ */ e.jsx(re, {}) })
      }
    ),
    /* @__PURE__ */ e.jsx(
      N,
      {
        path: "/events-calender",
        element: /* @__PURE__ */ e.jsx(C, { component: /* @__PURE__ */ e.jsx(le, {}) })
      }
    ),
    /* @__PURE__ */ e.jsx(
      N,
      {
        path: "/event/:id",
        element: /* @__PURE__ */ e.jsx(C, { component: /* @__PURE__ */ e.jsx(O, {}) })
      }
    ),
    /* @__PURE__ */ e.jsx(
      N,
      {
        path: "/event-details/:id",
        element: /* @__PURE__ */ e.jsx(C, { component: /* @__PURE__ */ e.jsx(ge, {}) })
      }
    ),
    /* @__PURE__ */ e.jsx(
      N,
      {
        path: "/special-prayers",
        element: /* @__PURE__ */ e.jsx(C, { component: /* @__PURE__ */ e.jsx(ce, {}) })
      }
    )
  ] }) }) });
}, Se = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ye
}, Symbol.toStringTag, { value: "Module" }));
export {
  pe as C,
  Se as D,
  xe as F,
  fe as a
};
