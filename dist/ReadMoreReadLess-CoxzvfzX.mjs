import { a as Y, d as q, j as e, ah as G, ai as H, al as J, ag as v, am as D, an as K, ao as Q, ap as U } from "./index-CAznm34G.mjs";
import V, { useState as c, useEffect as W } from "react";
import { B as b, g as X } from "./FetchingMasjidByAdminAction-1czjJVdw.mjs";
import { b as Z } from "./index.esm-tipn90nT.mjs";
const ne = ({
  ParentComponentType: n,
  EventPhotos: d,
  Event: o,
  Photos: g
}) => {
  const [m, u] = c(), A = Y((l) => l.admin), [s, h] = c([]), [a, M] = c([]), [R, $] = c(!1), [i, r] = c(1), [B, f] = c(!1);
  let I = s ? s == null ? void 0 : s.length : 3;
  const [k, x] = V.useState(!1), [N, j] = c(!1), p = q(), L = () => {
    i !== (s == null ? void 0 : s.length) ? r(i + 1) : i === (s == null ? void 0 : s.length) && r(1);
  }, _ = () => {
    i !== 1 ? r(i - 1) : i === 1 && r(s == null ? void 0 : s.length);
  }, O = (l) => {
    r(l);
  };
  W(() => {
    n === "Masjid" && g ? (h(g), M(g), window.location.pathname === "/masjidprofile" ? f(!0) : f(!1)) : n === "Event" && (d == null ? void 0 : d.length) > 0 && (M(d), h(d), f(!0));
  }, [n, d]);
  const w = () => {
    if (j(!0), n === "Masjid") {
      let l = a[i - 1], t = l.indexOf("Masjid"), z = l.substr(t).indexOf(".jpg");
      const T = {
        imageId: l.substr(t, z),
        url: l
      };
      p(Q(m == null ? void 0 : m._id, T)).then(function(ee) {
        p(X(A._id)), r(i - 1), j(!1), x(!1);
      });
    } else
      y();
    j(!1);
  }, y = () => {
    j(!0);
    let l = a[i - 1];
    p(
      U(l._id, (o == null ? void 0 : o._id) ?? "")
    ).then(function(S) {
      a.splice(i - 1, 1), r(i - 1), j(!1), x(!1);
    });
  }, C = () => {
    x(!1);
  }, F = () => {
    x(!0);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "PictureCarouselContainer", children: [
    /* @__PURE__ */ e.jsxs(
      G,
      {
        open: k,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description",
        children: [
          /* @__PURE__ */ e.jsx(H, { id: "alert-dialog-title", children: "Are you sure you want to delete the  Image ?" }),
          /* @__PURE__ */ e.jsxs(J, { children: [
            /* @__PURE__ */ e.jsxs(v, { onClick: w, variant: "outlined", children: [
              " ",
              N ? /* @__PURE__ */ e.jsx(D, { size: "15px" }) : /* @__PURE__ */ e.jsx("span", { children: " Yes " }),
              " "
            ] }),
            /* @__PURE__ */ e.jsx(
              v,
              {
                onClick: C,
                variant: "outlined",
                disabled: N,
                children: "No"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "container-slider-masjid", children: [
      (a == null ? void 0 : a.length) > 0 ? a.map((l, t) => /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: i === t + 1 ? "slide active-anim" : "slide",
          children: [
            /* @__PURE__ */ e.jsx("img", { src: l.url, alt: "The Event ", className: "eventImage" }),
            (s == null ? void 0 : s.length) > 0 && B && (R ? /* @__PURE__ */ e.jsx("div", { className: "delete-icon", children: /* @__PURE__ */ e.jsx(D, { size: "15px", className: "loadingIcon" }) }) : /* @__PURE__ */ e.jsx(
              Z,
              {
                className: "delete-icon",
                onClick: F
              }
            ))
          ]
        },
        t
      )) : /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx("img", { src: K, alt: "The Event ", className: "eventImage2" }) }),
      (a == null ? void 0 : a.length) > 1 && /* @__PURE__ */ e.jsx(b, { moveSlide: L, direction: "next" }),
      (a == null ? void 0 : a.length) > 1 && /* @__PURE__ */ e.jsx(b, { moveSlide: _, direction: "prev" }),
      /* @__PURE__ */ e.jsx("div", { className: "container-dots", children: (a == null ? void 0 : a.length) > 1 && Array.from({ length: I || 3 }).map(
        (l, t) => /* @__PURE__ */ e.jsx(
          "div",
          {
            onClick: () => O(t + 1),
            className: i === t + 1 ? "dot active" : "dot"
          }
        )
      ) })
    ] })
  ] });
}, te = ({ children: n, Limit: d }) => {
  const [o, g] = c(!1), m = () => {
    g((u) => !u);
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    o ? /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx("div", { className: "DescriptionBody", children: /* @__PURE__ */ e.jsxs("div", { className: "DescriptionBtn", children: [
      /* @__PURE__ */ e.jsx("button", { className: "CloseBtn", onClick: m, children: "Close" }),
      /* @__PURE__ */ e.jsx("div", { className: "ChildrenProp", children: n })
    ] }) }) }) : n == null ? void 0 : n.substring(0, d),
    /* @__PURE__ */ e.jsx("button", { className: "ReadMoreBtn", onClick: m, children: "...ReadMore" })
  ] });
};
export {
  ne as P,
  te as R
};
