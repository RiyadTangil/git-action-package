import { aF as ca, aG as ua, ax as ne, aH as da, aI as ma, aJ as pa, j as e, a5 as _e, aK as ha, ag as le, aq as fa, a as Le, au as ga, u as xa, ae as va, aa as V, ak as ie, aL as ja, aM as ba, aN as ya, aO as oe, aP as Re, aQ as Ye, am as Ta, aR as Ca, aS as Ma, aT as Ee } from "./index-biwjac3z.mjs";
import { createElement as C, useCallback as Na, useState as o, useEffect as $e, useRef as q } from "react";
import { u as ue, P as Sa, a as _, T as J, C as $, b as Ie, g as ka, c as Pa, d as Ae, t as Da, e as Oa, f as Fa, K as wa, h as La, p as Ra, D as Be, m as w } from "./DatePicker-jT2WqCXt.mjs";
import { a as Ya } from "./index.esm-NeaZr-zn.mjs";
var Ea = ca({
  toolbarLandscape: {
    flexWrap: "wrap"
  },
  toolbarAmpmLeftPadding: {
    paddingLeft: 50
  },
  separator: {
    margin: "0 4px 0 2px",
    cursor: "default"
  },
  hourMinuteLabel: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  hourMinuteLabelAmpmLandscape: {
    marginTop: "auto"
  },
  hourMinuteLabelReverse: {
    flexDirection: "row-reverse"
  },
  ampmSelection: {
    marginLeft: 20,
    marginRight: -20,
    display: "flex",
    flexDirection: "column"
  },
  ampmLandscape: {
    margin: "4px 0 auto",
    flexDirection: "row",
    justifyContent: "space-around",
    flexBasis: "100%"
  },
  ampmSelectionWithSeconds: {
    marginLeft: 15,
    marginRight: 10
  },
  ampmLabel: {
    fontSize: 18
  }
}, {
  name: "MuiPickersTimePickerToolbar"
});
function Ia(s, a, t) {
  var i = ue(), m = ka(s, i), c = Na(function(j) {
    var g = Pa(s, j, !!a, i);
    t(g, !1);
  }, [a, s, t, i]);
  return {
    meridiemMode: m,
    handleMeridiemChange: c
  };
}
var We = function(a) {
  var t = a.date, i = a.views, m = a.ampm, c = a.openView, j = a.onChange, g = a.isLandscape, u = a.setOpenView, b = ue(), L = ua(), h = Ea(), M = Ia(t, m, j), x = M.meridiemMode, I = M.handleMeridiemChange, R = g ? "h3" : "h2";
  return C(Sa, {
    isLandscape: g,
    className: ne(g ? h.toolbarLandscape : m && h.toolbarAmpmLeftPadding)
  }, C("div", {
    className: ne(h.hourMinuteLabel, m && g && h.hourMinuteLabelAmpmLandscape, {
      rtl: h.hourMinuteLabelReverse
    }[L.direction])
  }, _(i, "hours") && C(J, {
    variant: R,
    onClick: function() {
      return u($.HOURS);
    },
    selected: c === $.HOURS,
    label: b.getHourText(t, !!m)
  }), _(i, ["hours", "minutes"]) && C(Ie, {
    label: ":",
    variant: R,
    selected: !1,
    className: h.separator
  }), _(i, "minutes") && C(J, {
    variant: R,
    onClick: function() {
      return u($.MINUTES);
    },
    selected: c === $.MINUTES,
    label: b.getMinuteText(t)
  }), _(i, ["minutes", "seconds"]) && C(Ie, {
    variant: "h2",
    label: ":",
    selected: !1,
    className: h.separator
  }), _(i, "seconds") && C(J, {
    variant: "h2",
    onClick: function() {
      return u($.SECONDS);
    },
    selected: c === $.SECONDS,
    label: b.getSecondText(t)
  })), m && C("div", {
    className: ne(h.ampmSelection, g && h.ampmLandscape, _(i, "seconds") && h.ampmSelectionWithSeconds)
  }, C(J, {
    disableRipple: !0,
    variant: "subtitle1",
    selected: x === "am",
    typographyClassName: h.ampmLabel,
    label: b.getMeridiemText("am"),
    onClick: function() {
      return I("am");
    }
  }), C(J, {
    disableRipple: !0,
    variant: "subtitle1",
    selected: x === "pm",
    typographyClassName: h.ampmLabel,
    label: b.getMeridiemText("pm"),
    onClick: function() {
      return I("pm");
    }
  })));
};
function ze(s, a) {
  var t = Object.keys(s);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(s);
    a && (i = i.filter(function(m) {
      return Object.getOwnPropertyDescriptor(s, m).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function Ba(s) {
  for (var a = 1; a < arguments.length; a++) {
    var t = arguments[a] != null ? arguments[a] : {};
    a % 2 ? ze(t, !0).forEach(function(i) {
      da(s, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(t)) : ze(t).forEach(function(i) {
      Object.defineProperty(s, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return s;
}
var He = Ba({}, Da, {
  openTo: "hours",
  views: ["hours", "minutes"]
});
function Ue(s) {
  var a = ue();
  return {
    getDefaultFormat: function() {
      return Ra(s.format, s.ampm, {
        "12h": a.time12hFormat,
        "24h": a.time24hFormat
      });
    }
  };
}
var ce = Ae({
  useOptions: Ue,
  Input: Oa,
  useState: Fa,
  DefaultToolbarComponent: We
}), za = Ae({
  useOptions: Ue,
  Input: wa,
  useState: La,
  DefaultToolbarComponent: We,
  getCustomProps: function(a) {
    return {
      refuse: a.ampm ? /[^\dap]+/gi : /[^\d]+/gi
    };
  }
});
ce.defaultProps = He;
za.defaultProps = He;
var de = {}, Va = pa;
Object.defineProperty(de, "__esModule", {
  value: !0
});
var qe = de.default = void 0, _a = Va(ma()), Ve = e;
qe = de.default = (0, _a.default)([/* @__PURE__ */ (0, Ve.jsx)("circle", {
  cx: "12",
  cy: "12",
  r: "3.2"
}, "0"), /* @__PURE__ */ (0, Ve.jsx)("path", {
  d: "M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5"
}, "1")], "PhotoCamera");
const $a = _e.create({
  baseURL: "https://squid-app-7wo7y.ondigitalocean.app/api/"
});
$a.interceptors.request.use(
  async (s) => {
    if (localStorage.getItem("authTokens")) {
      const a = localStorage.getItem("authTokens"), t = a ? JSON.parse(a) : null;
      t != null && t.accessToken ? s.headers.Authorization = `Bearer ${t == null ? void 0 : t.accessToken}` : s.headers.Authorization = `Bearer ${t == null ? void 0 : t.token}`;
    }
    return s;
  },
  (s) => Promise.reject(s)
);
const Aa = ({
  EventId: s,
  MasjidId: a,
  eventPhotos: t,
  setEventsPhotos: i,
  DraggedImage: m,
  UploadAllow: c,
  setEventUploadPhoto: j,
  setMasjidUploadPhoto: g
}) => {
  const [u, b] = o(!0), [L, h] = o(!1), [M, x] = o();
  ha();
  const [I, R] = o({ uploadPercentage: 0 }), [Y, A] = o(!1);
  $e(() => {
    x(m), g(m), j(m);
  }, [m]);
  const W = (p) => {
    const d = p.target;
    d.files && d.files.length > 0 && (x(d.files[0]), g(d.files[0]), j(d.files[0]), b(!u));
  }, B = () => {
    x(void 0), g(void 0), j(void 0), b(!u);
  }, H = async (p) => {
    const d = p, y = "myFile.jpeg";
    fetch(d).then(async (T) => {
      const G = T.headers.get("content-type") ?? "", Q = await T.blob(), P = new File(
        [Q],
        y,
        {
          type: G
        }
        // type: blob.type,
        // { contentType }
      );
      x(P), g(P), j(P), b(!u);
    });
  };
  function U(p) {
    return fetch(p).then((d) => d.blob()).then((d) => d.type.split("/")[0] === "image").catch(() => !1);
  }
  const K = (p) => {
    U(p).then((d) => {
      setTimeout(() => {
        d && H(p);
      }, 1e3);
    }).catch((d) => {
      console.log(d);
    });
  };
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: u ? /* @__PURE__ */ e.jsx("div", { className: "file-card", children: /* @__PURE__ */ e.jsxs("div", { className: "file-inputs", children: [
    Y ? /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: "PasteBoxForLink", children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "url",
          id: "url-field",
          disabled: c,
          pattern: "^https?://.*$",
          autoFocus: !0,
          className: "InputPasteLinkEvents",
          onChange: (p) => {
            K(p.target.value);
          }
        }
      ),
      " ",
      /* @__PURE__ */ e.jsx(
        fa,
        {
          className: "TextBoxRightIcon",
          onClick: (p) => A(!1)
        }
      )
    ] }) }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: "ImageUploadButtonsEvents", children: [
      /* @__PURE__ */ e.jsxs(
        le,
        {
          variant: "outlined",
          disabled: c,
          style: {
            marginBottom: "5px",
            marginTop: "5px",
            width: "70%",
            height: "40px",
            fontSize: "13px"
          },
          component: "label",
          startIcon: /* @__PURE__ */ e.jsx(qe, {}),
          onChange: (p) => W(p),
          children: [
            "Choose New Image",
            /* @__PURE__ */ e.jsx(
              "input",
              {
                hidden: !0,
                accept: "image/jpeg,image/png,image/jpg",
                type: "file"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ e.jsx("span", { className: "Separator", children: "OR" }),
      /* @__PURE__ */ e.jsx(
        le,
        {
          variant: "contained",
          disabled: c,
          style: {
            marginBottom: "5px",
            marginTop: "5px",
            width: "70%",
            height: "30px",
            fontSize: "10px"
          },
          component: "label",
          onClick: (p) => A(!0),
          children: "Paste Link"
        }
      )
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "ImageUploadBottomDetails", children: c ? /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("p", { className: "info", children: [
      " ",
      "The Masjid has reached Maximum File Upload Limit"
    ] }) }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("p", { className: "main", children: "Supported files" }),
      /* @__PURE__ */ e.jsx("p", { className: "info", children: " JPG, PNG,JPEG less than 5MB" })
    ] }) })
  ] }) }) : M && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    " ",
    L && /* @__PURE__ */ e.jsxs("div", { className: "progressbar-container", children: [
      /* @__PURE__ */ e.jsx(
        "div",
        {
          className: "progressbar-complete",
          style: { width: `${I.uploadPercentage}%` },
          children: /* @__PURE__ */ e.jsx("div", { className: "progressbar-liquid" })
        }
      ),
      /* @__PURE__ */ e.jsxs("span", { className: "progress", children: [
        I.uploadPercentage,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "ImageContainer", children: /* @__PURE__ */ e.jsx("div", { className: "EventImagePreview", children: /* @__PURE__ */ e.jsx(
      "img",
      {
        src: URL.createObjectURL(M),
        className: "EventImage",
        alt: "Thumb"
      }
    ) }) }),
    /* @__PURE__ */ e.jsx("div", { className: "ImageButtons", children: /* @__PURE__ */ e.jsx(
      le,
      {
        variant: "outlined",
        onClick: B,
        className: "EventImageDelete",
        children: "Remove Image"
      }
    ) })
  ] }) });
}, Wa = (s) => async (a) => {
  try {
    a({ type: "COMPLETE_EVENT_EDITING", payload: s });
  } catch (t) {
    return {
      success: !1,
      message: t.response.data.message ? t.response.data.message : "Failed To Fetch Events : SomeThing Went Wrong"
    };
  }
}, Qa = ({
  ComponentPurpose: s,
  EventDetails: a,
  setAddingEvent: t,
  AddingEvent: i,
  setEventDetails: m,
  setIsUpdating: c,
  setEventPhotos: j,
  EventPhotos: g
}) => {
  const [u, b] = o("None"), [L, h] = o(!1), [M, x] = o(!1), [I, R] = o(!1), [Y, A] = o(!1), [W, B] = o(!1), [H, U] = o(!1), [K, p] = o(!1);
  let d = q(null), y = q(null), T = q(null), G = q(null), Q = q(null);
  const [P, Je] = o(/* @__PURE__ */ new Date()), [me, pe] = o(P), [X, Ke] = o(/* @__PURE__ */ new Date()), [Z, he] = o(
    /* @__PURE__ */ new Date()
  ), [N, Ge] = o([]), [E, Qe] = o(), [Xe, Ha] = o(), [Ua, Ze] = o(), [ea, ee] = o(), [ae, aa] = o();
  let S = Le((r) => r.AdminMasjid);
  const v = ga(), [ta, D] = o(!1), fe = xa(), te = Le((r) => r.admin);
  let k = te == null ? void 0 : te.masjids[0];
  console.log(k);
  const ra = (r) => {
    Je(r), pe(r);
  }, sa = (r) => {
    b(r), H && U(!1);
  }, ge = () => {
    v(Wa(!0));
  };
  $e(() => {
    k && v(va(k)).then((l) => {
      !l.timings === null ? V(
        !0,
        "error",
        `Failed To Fetch :${l.message}`,
        v
      ) : Ze(l.data);
    });
  }, [k]);
  const re = _e.create({
    baseURL: "https://squid-app-7wo7y.ondigitalocean.app/api/"
  });
  re.interceptors.request.use(
    async (r) => {
      if (localStorage.getItem("authTokens")) {
        const l = localStorage.getItem("authTokens"), n = l ? JSON.parse(l) : null;
        n != null && n.accessToken ? r.headers.Authorization = `Bearer ${n == null ? void 0 : n.accessToken}` : r.headers.Authorization = `Bearer ${n == null ? void 0 : n.token}`;
      }
      return r;
    },
    (r) => Promise.reject(r)
  );
  const na = (r) => {
    if (r) {
      const l = new FormData();
      l.append("image", ea), re.post(`v1/media/${k}/upload/${r}`, l).then((n) => {
        setTimeout(() => {
          n.data.data._id, n.data.data.url, ge(), V(
            !0,
            "success",
            "Created Event SuccessFully",
            v
          ), t == null || t(!1), D(!1), fe("/eventprofile/" + r), ee(void 0);
        }, 3e3);
      }).catch((n) => {
        const O = {
          snackbarOpen: !0,
          snackbarType: "error",
          snackbarMessage: n.response.data ? n.response.data.message : "Adding Masjid Media Failed"
        };
        v(Ee(O));
      });
    }
  }, la = (r) => {
    if (r) {
      const l = new FormData();
      l.append("image", ae), re.post(`v1/media/${k}/upload/${r}`, l).then((n) => {
        let O = {
          _id: n.data.data._id,
          url: n.data.data.url
        };
        V(
          !0,
          "success",
          "Updated Event SuccessFully",
          v
        ), j([...g, O]), c == null || c(!1), D(!1), ee(void 0);
      }).catch((n) => {
        const O = {
          snackbarOpen: !0,
          snackbarType: "error",
          snackbarMessage: n.response.data ? n.response.data.message : "Adding Masjid Media Failed"
        };
        D(!1), c == null || c(!1), v(Ee(O));
      });
    }
  }, ia = () => {
    var n, O, xe, ve, je, be, ye, Te, Ce, Me, Ne, Se, ke, Pe, De, Oe, Fe;
    (n = d.current) != null && n.value ? (O = d.current) != null && O.value && h(!1) : h(!0), (xe = y.current) != null && xe.value ? (ve = y.current) != null && ve.value && B(!1) : B(!0), (je = T.current) != null && je.value ? (be = T.current) != null && be.value && x(!1) : x(!0), (ye = G.current) != null && ye.value ? (Te = G.current) != null && Te.value && R(!1) : R(!0), (Ce = Q.current) != null && Ce.value ? (Me = Q.current) != null && Me.value && A(!1) : A(!0), U(u === null || u === "");
    let r, l;
    if (u === "None")
      l = {
        startDate: w(P).format("YYYY-MM-DD"),
        endDate: w(me).format("YYYY-MM-DD"),
        recurrenceType: u
      };
    else if (u === "Daily")
      E.length > 0 ? l = [
        {
          startDate: E[0].format("YYYY-MM-DD"),
          endDate: E[1].format("YYYY-MM-DD"),
          recurrenceType: u
        }
      ] : p(!0);
    else if (N.length > 0) {
      let F = [];
      N.map((se, f) => {
        let z = {
          startDate: N[f].format("YYYY-MM-DD"),
          endDate: N[f].format("YYYY-MM-DD"),
          recurrenceType: u
        };
        F.push(z);
      }), l = [...F];
    } else
      p(!0);
    if (u === "None")
      r = [
        {
          startTime: w(X).unix(),
          endTime: w(Z).unix()
        }
      ];
    else if (u === "Daily")
      (E == null ? void 0 : E.length) > 0 ? r = [
        {
          startTime: w(X).unix(),
          endTime: w(Z).unix()
        }
      ] : p(!0);
    else if (N.length > 0) {
      let F = [];
      N.map((se, f) => {
        let z = {
          startDate: N[f].format("MM/DD/YYYY"),
          startTime: w(X).unix(),
          endTime: w(Z).unix(),
          endDate: N[f].format("MM/DD/YYYY")
        };
        F.push(z);
      }), r = [...F];
    } else
      p(!0);
    if (((Ne = d.current) == null ? void 0 : Ne.value) !== (a == null ? void 0 : a.eventName) || ((Se = T.current) == null ? void 0 : Se.value) !== (a == null ? void 0 : a.address) || ((ke = y.current) == null ? void 0 : ke.value) !== (a == null ? void 0 : a.description) || (r == null ? void 0 : r.length) > 0) {
      let F = {
        eventName: ((Pe = d.current) == null ? void 0 : Pe.value) ?? "",
        address: ((De = T.current) == null ? void 0 : De.value) ?? "",
        mazjidName: S == null ? void 0 : S.masjidName,
        description: ((Oe = y.current) == null ? void 0 : Oe.value) ?? "",
        location: {
          coordinates: (Fe = S == null ? void 0 : S.location) == null ? void 0 : Fe.coordinates,
          type: "Point"
        },
        timings: r,
        metaData: l
      };
      K && p(!1), D(!0), s === "Update" ? v(
        Ca(F, k, (a == null ? void 0 : a._id) ?? "")
      ).then(function(f) {
        f.message === "Event updated successfully" ? ae instanceof File ? (la(f.data._id), m == null || m(f.data)) : (D(!1), c == null || c(!1), m == null || m(f.data)) : (D(!1), c == null || c(!1));
      }) : v(Ma(F, k)).then(function(f) {
        var z, we;
        f.status === 201 ? ae instanceof File ? na(f.data.data._id) : (ge(), V(
          !0,
          "success",
          "Created Event SuccessFully",
          v
        ), t == null || t(!1), D(!1), fe("/eventprofile/" + ((we = (z = f == null ? void 0 : f.data) == null ? void 0 : z.data) == null ? void 0 : we._id))) : D(!1);
      });
    } else
      K ? V(!0, "error", "Please Choose Dates", v) : V(
        !0,
        "error",
        "Please Enter All The  Details",
        v
      );
  }, oa = (r) => {
    Ke(r), he(r);
  };
  return /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: "AddEventsFormContainer", children: [
    /* @__PURE__ */ e.jsxs("div", { className: "CreateEvents", children: [
      /* @__PURE__ */ e.jsx("span", { className: "EventsData", children: s === "Update" ? "Update Events" : "Create Event" }),
      /* @__PURE__ */ e.jsx(
        Ya,
        {
          className: "MasjidEventsCancelIconForEvents",
          onClick: (r) => {
            t == null || t(!i);
          }
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "DetailsOfEventsContainer", children: [
      /* @__PURE__ */ e.jsxs("div", { className: "AddEventForm", children: [
        /* @__PURE__ */ e.jsx(
          ie,
          {
            size: "small",
            autoFocus: !0,
            margin: "dense",
            autoComplete: "Off",
            id: "outlined-size-small",
            placeholder: "Event Name",
            onChange: (r) => {
              var l, n;
              L && ((l = d.current) != null && l.value ? (n = d.current) != null && n.value && h(!1) : h(!0));
            },
            error: L,
            helperText: L ? "Manditory field" : "",
            sx: {
              "& .MuiOutlinedInput-notchedOutline ": {
                borderColor: "black"
              }
            },
            type: "text",
            fullWidth: !0,
            defaultValue: s === "Update" ? a == null ? void 0 : a.eventName : "",
            inputRef: d,
            variant: "outlined"
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "DescEvents", children: /* @__PURE__ */ e.jsx(
          ie,
          {
            id: "outlined-required",
            variant: "outlined",
            onChange: (r) => {
              var l, n;
              W && ((l = y.current) != null && l.value ? (n = y.current) != null && n.value && B(!1) : B(!0));
            },
            placeholder: "Description",
            multiline: !0,
            rows: 4,
            error: W,
            helperText: W ? "Manditory field" : "",
            defaultValue: s === "Update" ? a == null ? void 0 : a.description : "",
            inputRef: y,
            type: "text",
            autoComplete: "Off",
            sx: {
              "& .MuiFormControl-root": {
                width: 100
              },
              "& .MuiOutlinedInput-notchedOutline ": {
                borderColor: "black"
              }
            }
          }
        ) }),
        /* @__PURE__ */ e.jsx(
          ie,
          {
            id: "outlined-size-small",
            size: "small",
            variant: "outlined",
            autoComplete: "Off",
            placeholder: "Event Address",
            onChange: (r) => {
              var l, n;
              M && ((l = T.current) != null && l.value ? (n = T.current) != null && n.value && x(!1) : x(!0));
            },
            error: M,
            helperText: M ? "Manditory field" : "",
            inputRef: T,
            defaultValue: s === "Update" ? a == null ? void 0 : a.address : S == null ? void 0 : S.address,
            fullWidth: !0,
            type: "text"
          }
        ),
        /* @__PURE__ */ e.jsx("div", { className: "EventReccurence", children: /* @__PURE__ */ e.jsxs(ja, { size: "small", children: [
          /* @__PURE__ */ e.jsx(ba, { children: "Recurrence" }),
          /* @__PURE__ */ e.jsxs(
            ya,
            {
              size: "small",
              labelId: "demo-simple-select-label",
              id: "demo-simple-select",
              error: H,
              value: u,
              defaultValue: u,
              placeholder: "Choose The Recurrence type",
              onChange: (r) => sa(r.target.value),
              children: [
                /* @__PURE__ */ e.jsx(oe, { value: "RandomDates", children: "Choose Random Dates" }),
                /* @__PURE__ */ e.jsx(oe, { value: "Daily", children: "Daily" }),
                /* @__PURE__ */ e.jsx(oe, { value: "None", children: "None" })
              ]
            }
          ),
          H && /* @__PURE__ */ e.jsx("p", { style: { color: "red" }, children: "Error Please Choose Recurrence" })
        ] }) }),
        u === "RandomDates" && /* @__PURE__ */ e.jsx(
          Re,
          {
            value: N,
            onChange: Ge,
            placeholder: "Pick the dates of  recurrence",
            style: { width: "98%", height: "4vh", cursor: "pointer" },
            minDate: /* @__PURE__ */ new Date(),
            format: "MM/DD/YYYY",
            multiple: !0,
            plugins: [/* @__PURE__ */ e.jsx(Ye, { markFocused: !0 })]
          }
        ),
        u === "Daily" && /* @__PURE__ */ e.jsx(
          Re,
          {
            value: E,
            onChange: Qe,
            range: !0,
            minDate: /* @__PURE__ */ new Date(),
            placeholder: "Select the range for recurrence",
            style: {
              width: "98%",
              height: "4vh",
              marginTop: 1,
              marginBottom: 1,
              cursor: "pointer"
            },
            format: "MM/DD/YYYY",
            multiple: !0,
            plugins: [/* @__PURE__ */ e.jsx(Ye, { markFocused: !0 })]
          }
        ),
        u === "None" && s !== "Update" && /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsxs("div", { className: "DateContainer", children: [
          /* @__PURE__ */ e.jsx(
            Be,
            {
              size: "small",
              disableToolbar: !0,
              format: "dd/MM/yyyy",
              minDate: /* @__PURE__ */ new Date(),
              label: "Event Start Date ",
              value: P,
              onChange: ra
            }
          ),
          /* @__PURE__ */ e.jsx(
            Be,
            {
              size: "small",
              disableToolbar: !0,
              format: "dd/MM/yyyy",
              minDate: P,
              label: "Event End Date ",
              value: me,
              onChange: pe
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "RightPhotoContainer", children: [
        /* @__PURE__ */ e.jsx("div", { className: "AddingPhoto", children: /* @__PURE__ */ e.jsx(e.Fragment, { children: /* @__PURE__ */ e.jsx(
          Aa,
          {
            EventId: (a == null ? void 0 : a._id) ?? "",
            MasjidId: k,
            DraggedImage: Xe,
            eventPhotos: g,
            setEventsPhotos: j,
            setEventUploadPhoto: aa,
            setMasjidUploadPhoto: ee
          }
        ) }) }),
        /* @__PURE__ */ e.jsxs("div", { className: "DateTimeContainer", children: [
          /* @__PURE__ */ e.jsx(
            ce,
            {
              size: "small",
              autoOk: !0,
              inputVariant: "outlined",
              label: "Start time",
              value: X,
              onChange: oa
            }
          ),
          /* @__PURE__ */ e.jsx(
            ce,
            {
              size: "small",
              autoOk: !0,
              label: "End Time",
              inputVariant: "outlined",
              value: Z,
              onChange: (r) => {
                he(r);
              }
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "ButtonContainerFormContainer", children: /* @__PURE__ */ e.jsx("button", { className: "MasjidAddEventFormContainer", children: /* @__PURE__ */ e.jsx(
      "span",
      {
        className: "MasjidAddEventButtontitle",
        onClick: (r) => {
          ia();
        },
        children: ta ? /* @__PURE__ */ e.jsx(Ta, { color: "inherit", size: "20px" }) : s === "Update" ? "Update Event" : "Preview Event"
      }
    ) }) })
  ] }) });
};
export {
  Qa as E,
  Wa as a
};
