import { a as f, u as v, d as D, ae as C, aa as g, j as e, ah as E, ai as M, aj as y, ak as R, al as _, ag as A, am as Y, m as h, ac as k } from "./index-IlHv0hMp.mjs";
import { useState as o, useRef as F, useEffect as N } from "react";
import { M as K, a as T } from "./index.esm-CMILEMus.mjs";
const V = () => {
  let s = f((a) => a.admin);
  const j = v(), i = k.en, n = f((a) => a.AdminMasjid[0]), [m, W] = o(!1), [d, c] = o(!1);
  let x = F();
  const [l, I] = o(""), t = D();
  N(() => {
    let a = s.masjids[0];
    console.log(a), I(a);
  }, [l]), N(() => {
    l && t(C(l)).then((r) => {
      !r.timings === null ? g(
        !0,
        "error",
        `Failed To Fetch :${r.message}`,
        t
      ) : console.log(r);
    });
  }, [l]);
  const P = () => {
    j("/feed");
  }, p = () => {
    c(!d);
  }, u = () => {
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "AdminProfileCard", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "AdminProfileCardInformation", children: [
      /* @__PURE__ */ e.jsxs(
        E,
        {
          open: d,
          "aria-labelledby": "alert-dialog-title",
          "aria-describedby": "alert-dialog-description",
          children: [
            /* @__PURE__ */ e.jsx(M, { id: "alert-dialog-title", children: "Enter the Name " }),
            /* @__PURE__ */ e.jsx(y, { children: /* @__PURE__ */ e.jsx(
              R,
              {
                autoFocus: !0,
                margin: "dense",
                inputRef: x,
                sx: { width: "20rem" },
                label: "Edit Name",
                type: "text",
                variant: "outlined"
              }
            ) }),
            /* @__PURE__ */ e.jsxs(_, { children: [
              /* @__PURE__ */ e.jsxs(A, { onClick: u, variant: "outlined", children: [
                " ",
                m ? /* @__PURE__ */ e.jsx(Y, { size: "15px" }) : /* @__PURE__ */ e.jsx("span", { children: " Yes " }),
                " "
              ] }),
              /* @__PURE__ */ e.jsx(
                A,
                {
                  onClick: (a) => c(!d),
                  variant: "outlined",
                  disabled: m,
                  children: "No"
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "AdminNameProfileCardName", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "AdminProfileItemAdminName", children: [
          /* @__PURE__ */ e.jsx("span", { className: "AdminName", children: s && s.name }),
          /* @__PURE__ */ e.jsx(K, { className: "CancelIconAdminName", onClick: p })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "CancelIconButtonAdmin", children: /* @__PURE__ */ e.jsx(T, { className: "CancelIconAdmin", onClick: P }) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "AdminProfileItem", children: [
        /* @__PURE__ */ e.jsx("div", { className: "AdminProfileInfoKey", children: /* @__PURE__ */ e.jsxs("span", { className: "AdminProfileInforKeyWord", children: [
          i.ADMIN_PROFILE_CARD.ADMIN_EMAIL,
          " :",
          " "
        ] }) }),
        /* @__PURE__ */ e.jsx("div", { className: "AdminProfileInfoValue", children: /* @__PURE__ */ e.jsx("span", { className: "AdminProfileInforValueWord", children: s && s.email }) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "AdminProfileItem", children: [
        /* @__PURE__ */ e.jsx("div", { className: "AdminProfileInfoKey", children: /* @__PURE__ */ e.jsxs("span", { className: "AdminProfileInforKeyWord", children: [
          i.ADMIN_PROFILE_CARD.ADMIN_MASJID,
          " :",
          " "
        ] }) }),
        /* @__PURE__ */ e.jsx("div", { className: "AdminProfileInfoValue", children: /* @__PURE__ */ e.jsx("span", { className: "AdminProfileInforValueWord", children: n && (n == null ? void 0 : n.masjidName) }) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "AdminProfileItem", children: [
        /* @__PURE__ */ e.jsx("div", { className: "AdminProfileInfoKey", children: /* @__PURE__ */ e.jsxs("span", { className: "AdminProfileInforKeyWord", children: [
          i.ADMIN_PROFILE_CARD.UPDATED_AT,
          " :",
          " "
        ] }) }),
        /* @__PURE__ */ e.jsx("div", { className: "AdminProfileInfoValue", children: /* @__PURE__ */ e.jsx("span", { className: "AdminProfileInforValueWord", children: s && h(s == null ? void 0 : s.updatedAt).format("DD/MM/YYYY hh:mm a") }) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "AdminProfileItem", children: [
        /* @__PURE__ */ e.jsx("div", { className: "AdminProfileInfoKey", children: /* @__PURE__ */ e.jsxs("span", { className: "AdminProfileInforKeyWord", children: [
          i.ADMIN_PROFILE_CARD.CREATED_AT,
          " :",
          " "
        ] }) }),
        /* @__PURE__ */ e.jsx("div", { className: "AdminProfileInfoValue", children: /* @__PURE__ */ e.jsx("span", { className: "AdminProfileInforValueWord", children: s && h(s == null ? void 0 : s.createdAt).format("DD/MM/YYYY hh:mm a") }) })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "AdminProfileCardImage" })
  ] });
}, O = () => /* @__PURE__ */ e.jsx("div", { className: "AdminProfileContainer", children: /* @__PURE__ */ e.jsx(V, {}) });
export {
  O as default
};
