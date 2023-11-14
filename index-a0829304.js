(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const u of o)
      if (u.type === "childList")
        for (const s of u.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const u = {};
    return (
      o.integrity && (u.integrity = o.integrity),
      o.referrerPolicy && (u.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const u = n(o);
    fetch(o.href, u);
  }
})();
var Yn =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function el(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Kw = { exports: {} },
  zf = {},
  Yw = { exports: {} },
  He = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ks = Symbol.for("react.element"),
  _k = Symbol.for("react.portal"),
  vk = Symbol.for("react.fragment"),
  mk = Symbol.for("react.strict_mode"),
  yk = Symbol.for("react.profiler"),
  wk = Symbol.for("react.provider"),
  Sk = Symbol.for("react.context"),
  xk = Symbol.for("react.forward_ref"),
  Tk = Symbol.for("react.suspense"),
  bk = Symbol.for("react.memo"),
  Ck = Symbol.for("react.lazy"),
  l0 = Symbol.iterator;
function Ik(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (l0 && e[l0]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Qw = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  qw = Object.assign,
  Xw = {};
function du(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Xw),
    (this.updater = n || Qw);
}
du.prototype.isReactComponent = {};
du.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
du.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Zw() {}
Zw.prototype = du.prototype;
function Wg(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Xw),
    (this.updater = n || Qw);
}
var Vg = (Wg.prototype = new Zw());
Vg.constructor = Wg;
qw(Vg, du.prototype);
Vg.isPureReactComponent = !0;
var u0 = Array.isArray,
  Jw = Object.prototype.hasOwnProperty,
  Gg = { current: null },
  e1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function t1(e, t, n) {
  var r,
    o = {},
    u = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (u = "" + t.key),
    t))
      Jw.call(t, r) && !e1.hasOwnProperty(r) && (o[r] = t[r]);
  var c = arguments.length - 2;
  if (c === 1) o.children = n;
  else if (1 < c) {
    for (var f = Array(c), p = 0; p < c; p++) f[p] = arguments[p + 2];
    o.children = f;
  }
  if (e && e.defaultProps)
    for (r in ((c = e.defaultProps), c)) o[r] === void 0 && (o[r] = c[r]);
  return {
    $$typeof: Ks,
    type: e,
    key: u,
    ref: s,
    props: o,
    _owner: Gg.current,
  };
}
function Ek(e, t) {
  return {
    $$typeof: Ks,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Kg(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ks;
}
function Dk(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var s0 = /\/+/g;
function Xp(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Dk("" + e.key)
    : t.toString(36);
}
function Lc(e, t, n, r, o) {
  var u = typeof e;
  (u === "undefined" || u === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (u) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ks:
          case _k:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Xp(s, 0) : r),
      u0(o)
        ? ((n = ""),
          e != null && (n = e.replace(s0, "$&/") + "/"),
          Lc(o, t, n, "", function (p) {
            return p;
          }))
        : o != null &&
          (Kg(o) &&
            (o = Ek(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(s0, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), u0(e)))
    for (var c = 0; c < e.length; c++) {
      u = e[c];
      var f = r + Xp(u, c);
      s += Lc(u, t, n, f, o);
    }
  else if (((f = Ik(e)), typeof f == "function"))
    for (e = f.call(e), c = 0; !(u = e.next()).done; )
      (u = u.value), (f = r + Xp(u, c++)), (s += Lc(u, t, n, f, o));
  else if (u === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function lc(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Lc(e, r, "", "", function (u) {
      return t.call(n, u, o++);
    }),
    r
  );
}
function Ok(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var yn = { current: null },
  Ac = { transition: null },
  kk = {
    ReactCurrentDispatcher: yn,
    ReactCurrentBatchConfig: Ac,
    ReactCurrentOwner: Gg,
  };
He.Children = {
  map: lc,
  forEach: function (e, t, n) {
    lc(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      lc(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      lc(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Kg(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
He.Component = du;
He.Fragment = vk;
He.Profiler = yk;
He.PureComponent = Wg;
He.StrictMode = mk;
He.Suspense = Tk;
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kk;
He.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = qw({}, e.props),
    o = e.key,
    u = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((u = t.ref), (s = Gg.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var c = e.type.defaultProps;
    for (f in t)
      Jw.call(t, f) &&
        !e1.hasOwnProperty(f) &&
        (r[f] = t[f] === void 0 && c !== void 0 ? c[f] : t[f]);
  }
  var f = arguments.length - 2;
  if (f === 1) r.children = n;
  else if (1 < f) {
    c = Array(f);
    for (var p = 0; p < f; p++) c[p] = arguments[p + 2];
    r.children = c;
  }
  return { $$typeof: Ks, type: e.type, key: o, ref: u, props: r, _owner: s };
};
He.createContext = function (e) {
  return (
    (e = {
      $$typeof: Sk,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: wk, _context: e }),
    (e.Consumer = e)
  );
};
He.createElement = t1;
He.createFactory = function (e) {
  var t = t1.bind(null, e);
  return (t.type = e), t;
};
He.createRef = function () {
  return { current: null };
};
He.forwardRef = function (e) {
  return { $$typeof: xk, render: e };
};
He.isValidElement = Kg;
He.lazy = function (e) {
  return { $$typeof: Ck, _payload: { _status: -1, _result: e }, _init: Ok };
};
He.memo = function (e, t) {
  return { $$typeof: bk, type: e, compare: t === void 0 ? null : t };
};
He.startTransition = function (e) {
  var t = Ac.transition;
  Ac.transition = {};
  try {
    e();
  } finally {
    Ac.transition = t;
  }
};
He.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
He.useCallback = function (e, t) {
  return yn.current.useCallback(e, t);
};
He.useContext = function (e) {
  return yn.current.useContext(e);
};
He.useDebugValue = function () {};
He.useDeferredValue = function (e) {
  return yn.current.useDeferredValue(e);
};
He.useEffect = function (e, t) {
  return yn.current.useEffect(e, t);
};
He.useId = function () {
  return yn.current.useId();
};
He.useImperativeHandle = function (e, t, n) {
  return yn.current.useImperativeHandle(e, t, n);
};
He.useInsertionEffect = function (e, t) {
  return yn.current.useInsertionEffect(e, t);
};
He.useLayoutEffect = function (e, t) {
  return yn.current.useLayoutEffect(e, t);
};
He.useMemo = function (e, t) {
  return yn.current.useMemo(e, t);
};
He.useReducer = function (e, t, n) {
  return yn.current.useReducer(e, t, n);
};
He.useRef = function (e) {
  return yn.current.useRef(e);
};
He.useState = function (e) {
  return yn.current.useState(e);
};
He.useSyncExternalStore = function (e, t, n) {
  return yn.current.useSyncExternalStore(e, t, n);
};
He.useTransition = function () {
  return yn.current.useTransition();
};
He.version = "18.2.0";
Yw.exports = He;
var tt = Yw.exports;
const X = el(tt);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pk = tt,
  Rk = Symbol.for("react.element"),
  Nk = Symbol.for("react.fragment"),
  Lk = Object.prototype.hasOwnProperty,
  Ak = Pk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Mk = { key: !0, ref: !0, __self: !0, __source: !0 };
function n1(e, t, n) {
  var r,
    o = {},
    u = null,
    s = null;
  n !== void 0 && (u = "" + n),
    t.key !== void 0 && (u = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Lk.call(t, r) && !Mk.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Rk,
    type: e,
    key: u,
    ref: s,
    props: o,
    _owner: Ak.current,
  };
}
zf.Fragment = Nk;
zf.jsx = n1;
zf.jsxs = n1;
Kw.exports = zf;
var J = Kw.exports,
  Fh = {},
  r1 = { exports: {} },
  nr = {},
  i1 = { exports: {} },
  o1 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(ee, de) {
    var ae = ee.length;
    ee.push(de);
    e: for (; 0 < ae; ) {
      var Ae = (ae - 1) >>> 1,
        Ve = ee[Ae];
      if (0 < o(Ve, de)) (ee[Ae] = de), (ee[ae] = Ve), (ae = Ae);
      else break e;
    }
  }
  function n(ee) {
    return ee.length === 0 ? null : ee[0];
  }
  function r(ee) {
    if (ee.length === 0) return null;
    var de = ee[0],
      ae = ee.pop();
    if (ae !== de) {
      ee[0] = ae;
      e: for (var Ae = 0, Ve = ee.length, xn = Ve >>> 1; Ae < xn; ) {
        var Ot = 2 * (Ae + 1) - 1,
          Oe = ee[Ot],
          Z = Ot + 1,
          we = ee[Z];
        if (0 > o(Oe, ae))
          Z < Ve && 0 > o(we, Oe)
            ? ((ee[Ae] = we), (ee[Z] = ae), (Ae = Z))
            : ((ee[Ae] = Oe), (ee[Ot] = ae), (Ae = Ot));
        else if (Z < Ve && 0 > o(we, ae)) (ee[Ae] = we), (ee[Z] = ae), (Ae = Z);
        else break e;
      }
    }
    return de;
  }
  function o(ee, de) {
    var ae = ee.sortIndex - de.sortIndex;
    return ae !== 0 ? ae : ee.id - de.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var u = performance;
    e.unstable_now = function () {
      return u.now();
    };
  } else {
    var s = Date,
      c = s.now();
    e.unstable_now = function () {
      return s.now() - c;
    };
  }
  var f = [],
    p = [],
    _ = 1,
    w = null,
    S = 3,
    I = !1,
    P = !1,
    b = !1,
    F = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    g = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(ee) {
    for (var de = n(p); de !== null; ) {
      if (de.callback === null) r(p);
      else if (de.startTime <= ee)
        r(p), (de.sortIndex = de.expirationTime), t(f, de);
      else break;
      de = n(p);
    }
  }
  function k(ee) {
    if (((b = !1), m(ee), !P))
      if (n(f) !== null) (P = !0), Ie(O);
      else {
        var de = n(p);
        de !== null && Ue(k, de.startTime - ee);
      }
  }
  function O(ee, de) {
    (P = !1), b && ((b = !1), y(z), (z = -1)), (I = !0);
    var ae = S;
    try {
      for (
        m(de), w = n(f);
        w !== null && (!(w.expirationTime > de) || (ee && !ue()));

      ) {
        var Ae = w.callback;
        if (typeof Ae == "function") {
          (w.callback = null), (S = w.priorityLevel);
          var Ve = Ae(w.expirationTime <= de);
          (de = e.unstable_now()),
            typeof Ve == "function" ? (w.callback = Ve) : w === n(f) && r(f),
            m(de);
        } else r(f);
        w = n(f);
      }
      if (w !== null) var xn = !0;
      else {
        var Ot = n(p);
        Ot !== null && Ue(k, Ot.startTime - de), (xn = !1);
      }
      return xn;
    } finally {
      (w = null), (S = ae), (I = !1);
    }
  }
  var C = !1,
    N = null,
    z = -1,
    Y = 5,
    W = -1;
  function ue() {
    return !(e.unstable_now() - W < Y);
  }
  function he() {
    if (N !== null) {
      var ee = e.unstable_now();
      W = ee;
      var de = !0;
      try {
        de = N(!0, ee);
      } finally {
        de ? Ce() : ((C = !1), (N = null));
      }
    } else C = !1;
  }
  var Ce;
  if (typeof g == "function")
    Ce = function () {
      g(he);
    };
  else if (typeof MessageChannel < "u") {
    var ge = new MessageChannel(),
      xe = ge.port2;
    (ge.port1.onmessage = he),
      (Ce = function () {
        xe.postMessage(null);
      });
  } else
    Ce = function () {
      F(he, 0);
    };
  function Ie(ee) {
    (N = ee), C || ((C = !0), Ce());
  }
  function Ue(ee, de) {
    z = F(function () {
      ee(e.unstable_now());
    }, de);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (ee) {
      ee.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      P || I || ((P = !0), Ie(O));
    }),
    (e.unstable_forceFrameRate = function (ee) {
      0 > ee || 125 < ee
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Y = 0 < ee ? Math.floor(1e3 / ee) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return S;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(f);
    }),
    (e.unstable_next = function (ee) {
      switch (S) {
        case 1:
        case 2:
        case 3:
          var de = 3;
          break;
        default:
          de = S;
      }
      var ae = S;
      S = de;
      try {
        return ee();
      } finally {
        S = ae;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (ee, de) {
      switch (ee) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ee = 3;
      }
      var ae = S;
      S = ee;
      try {
        return de();
      } finally {
        S = ae;
      }
    }),
    (e.unstable_scheduleCallback = function (ee, de, ae) {
      var Ae = e.unstable_now();
      switch (
        (typeof ae == "object" && ae !== null
          ? ((ae = ae.delay),
            (ae = typeof ae == "number" && 0 < ae ? Ae + ae : Ae))
          : (ae = Ae),
        ee)
      ) {
        case 1:
          var Ve = -1;
          break;
        case 2:
          Ve = 250;
          break;
        case 5:
          Ve = 1073741823;
          break;
        case 4:
          Ve = 1e4;
          break;
        default:
          Ve = 5e3;
      }
      return (
        (Ve = ae + Ve),
        (ee = {
          id: _++,
          callback: de,
          priorityLevel: ee,
          startTime: ae,
          expirationTime: Ve,
          sortIndex: -1,
        }),
        ae > Ae
          ? ((ee.sortIndex = ae),
            t(p, ee),
            n(f) === null &&
              ee === n(p) &&
              (b ? (y(z), (z = -1)) : (b = !0), Ue(k, ae - Ae)))
          : ((ee.sortIndex = Ve), t(f, ee), P || I || ((P = !0), Ie(O))),
        ee
      );
    }),
    (e.unstable_shouldYield = ue),
    (e.unstable_wrapCallback = function (ee) {
      var de = S;
      return function () {
        var ae = S;
        S = de;
        try {
          return ee.apply(this, arguments);
        } finally {
          S = ae;
        }
      };
    });
})(o1);
i1.exports = o1;
var Fk = i1.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var l1 = tt,
  tr = Fk;
function q(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var u1 = new Set(),
  Cs = {};
function tl(e, t) {
  iu(e, t), iu(e + "Capture", t);
}
function iu(e, t) {
  for (Cs[e] = t, e = 0; e < t.length; e++) u1.add(t[e]);
}
var Oi = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  zh = Object.prototype.hasOwnProperty,
  zk =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  a0 = {},
  c0 = {};
function $k(e) {
  return zh.call(c0, e)
    ? !0
    : zh.call(a0, e)
    ? !1
    : zk.test(e)
    ? (c0[e] = !0)
    : ((a0[e] = !0), !1);
}
function Hk(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Bk(e, t, n, r) {
  if (t === null || typeof t > "u" || Hk(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function wn(e, t, n, r, o, u, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = u),
    (this.removeEmptyString = s);
}
var en = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    en[e] = new wn(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  en[t] = new wn(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  en[e] = new wn(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  en[e] = new wn(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    en[e] = new wn(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  en[e] = new wn(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  en[e] = new wn(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  en[e] = new wn(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  en[e] = new wn(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Yg = /[\-:]([a-z])/g;
function Qg(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yg, Qg);
    en[t] = new wn(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yg, Qg);
    en[t] = new wn(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Yg, Qg);
  en[t] = new wn(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  en[e] = new wn(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
en.xlinkHref = new wn(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  en[e] = new wn(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function qg(e, t, n, r) {
  var o = en.hasOwnProperty(t) ? en[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Bk(t, n, o, r) && (n = null),
    r || o === null
      ? $k(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Li = l1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  uc = Symbol.for("react.element"),
  Fl = Symbol.for("react.portal"),
  zl = Symbol.for("react.fragment"),
  Xg = Symbol.for("react.strict_mode"),
  $h = Symbol.for("react.profiler"),
  s1 = Symbol.for("react.provider"),
  a1 = Symbol.for("react.context"),
  Zg = Symbol.for("react.forward_ref"),
  Hh = Symbol.for("react.suspense"),
  Bh = Symbol.for("react.suspense_list"),
  Jg = Symbol.for("react.memo"),
  Qi = Symbol.for("react.lazy"),
  c1 = Symbol.for("react.offscreen"),
  f0 = Symbol.iterator;
function Qu(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (f0 && e[f0]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var It = Object.assign,
  Zp;
function ls(e) {
  if (Zp === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Zp = (t && t[1]) || "";
    }
  return (
    `
` +
    Zp +
    e
  );
}
var Jp = !1;
function eh(e, t) {
  if (!e || Jp) return "";
  Jp = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (p) {
          var r = p;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (p) {
          r = p;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (p) {
        r = p;
      }
      e();
    }
  } catch (p) {
    if (p && r && typeof p.stack == "string") {
      for (
        var o = p.stack.split(`
`),
          u = r.stack.split(`
`),
          s = o.length - 1,
          c = u.length - 1;
        1 <= s && 0 <= c && o[s] !== u[c];

      )
        c--;
      for (; 1 <= s && 0 <= c; s--, c--)
        if (o[s] !== u[c]) {
          if (s !== 1 || c !== 1)
            do
              if ((s--, c--, 0 > c || o[s] !== u[c])) {
                var f =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    f.includes("<anonymous>") &&
                    (f = f.replace("<anonymous>", e.displayName)),
                  f
                );
              }
            while (1 <= s && 0 <= c);
          break;
        }
    }
  } finally {
    (Jp = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ls(e) : "";
}
function Uk(e) {
  switch (e.tag) {
    case 5:
      return ls(e.type);
    case 16:
      return ls("Lazy");
    case 13:
      return ls("Suspense");
    case 19:
      return ls("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = eh(e.type, !1)), e;
    case 11:
      return (e = eh(e.type.render, !1)), e;
    case 1:
      return (e = eh(e.type, !0)), e;
    default:
      return "";
  }
}
function Uh(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case zl:
      return "Fragment";
    case Fl:
      return "Portal";
    case $h:
      return "Profiler";
    case Xg:
      return "StrictMode";
    case Hh:
      return "Suspense";
    case Bh:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case a1:
        return (e.displayName || "Context") + ".Consumer";
      case s1:
        return (e._context.displayName || "Context") + ".Provider";
      case Zg:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Jg:
        return (
          (t = e.displayName || null), t !== null ? t : Uh(e.type) || "Memo"
        );
      case Qi:
        (t = e._payload), (e = e._init);
        try {
          return Uh(e(t));
        } catch {}
    }
  return null;
}
function jk(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Uh(t);
    case 8:
      return t === Xg ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function co(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function f1(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Wk(e) {
  var t = f1(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      u = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), u.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function sc(e) {
  e._valueTracker || (e._valueTracker = Wk(e));
}
function d1(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = f1(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function nf(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function jh(e, t) {
  var n = t.checked;
  return It({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function d0(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = co(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function p1(e, t) {
  (t = t.checked), t != null && qg(e, "checked", t, !1);
}
function Wh(e, t) {
  p1(e, t);
  var n = co(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Vh(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Vh(e, t.type, co(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function p0(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Vh(e, t, n) {
  (t !== "number" || nf(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var us = Array.isArray;
function Ql(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + co(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Gh(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(q(91));
  return It({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function h0(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(q(92));
      if (us(n)) {
        if (1 < n.length) throw Error(q(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: co(n) };
}
function h1(e, t) {
  var n = co(t.value),
    r = co(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function g0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function g1(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Kh(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? g1(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ac,
  _1 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ac = ac || document.createElement("div"),
          ac.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ac.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Is(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ds = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Vk = ["Webkit", "ms", "Moz", "O"];
Object.keys(ds).forEach(function (e) {
  Vk.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ds[t] = ds[e]);
  });
});
function v1(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ds.hasOwnProperty(e) && ds[e])
    ? ("" + t).trim()
    : t + "px";
}
function m1(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = v1(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Gk = It(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Yh(e, t) {
  if (t) {
    if (Gk[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(q(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(q(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(q(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(q(62));
  }
}
function Qh(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var qh = null;
function e_(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Xh = null,
  ql = null,
  Xl = null;
function _0(e) {
  if ((e = qs(e))) {
    if (typeof Xh != "function") throw Error(q(280));
    var t = e.stateNode;
    t && ((t = jf(t)), Xh(e.stateNode, e.type, t));
  }
}
function y1(e) {
  ql ? (Xl ? Xl.push(e) : (Xl = [e])) : (ql = e);
}
function w1() {
  if (ql) {
    var e = ql,
      t = Xl;
    if (((Xl = ql = null), _0(e), t)) for (e = 0; e < t.length; e++) _0(t[e]);
  }
}
function S1(e, t) {
  return e(t);
}
function x1() {}
var th = !1;
function T1(e, t, n) {
  if (th) return e(t, n);
  th = !0;
  try {
    return S1(e, t, n);
  } finally {
    (th = !1), (ql !== null || Xl !== null) && (x1(), w1());
  }
}
function Es(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = jf(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(q(231, t, typeof n));
  return n;
}
var Zh = !1;
if (Oi)
  try {
    var qu = {};
    Object.defineProperty(qu, "passive", {
      get: function () {
        Zh = !0;
      },
    }),
      window.addEventListener("test", qu, qu),
      window.removeEventListener("test", qu, qu);
  } catch {
    Zh = !1;
  }
function Kk(e, t, n, r, o, u, s, c, f) {
  var p = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, p);
  } catch (_) {
    this.onError(_);
  }
}
var ps = !1,
  rf = null,
  of = !1,
  Jh = null,
  Yk = {
    onError: function (e) {
      (ps = !0), (rf = e);
    },
  };
function Qk(e, t, n, r, o, u, s, c, f) {
  (ps = !1), (rf = null), Kk.apply(Yk, arguments);
}
function qk(e, t, n, r, o, u, s, c, f) {
  if ((Qk.apply(this, arguments), ps)) {
    if (ps) {
      var p = rf;
      (ps = !1), (rf = null);
    } else throw Error(q(198));
    of || ((of = !0), (Jh = p));
  }
}
function nl(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function b1(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function v0(e) {
  if (nl(e) !== e) throw Error(q(188));
}
function Xk(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = nl(e)), t === null)) throw Error(q(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var u = o.alternate;
    if (u === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === u.child) {
      for (u = o.child; u; ) {
        if (u === n) return v0(o), e;
        if (u === r) return v0(o), t;
        u = u.sibling;
      }
      throw Error(q(188));
    }
    if (n.return !== r.return) (n = o), (r = u);
    else {
      for (var s = !1, c = o.child; c; ) {
        if (c === n) {
          (s = !0), (n = o), (r = u);
          break;
        }
        if (c === r) {
          (s = !0), (r = o), (n = u);
          break;
        }
        c = c.sibling;
      }
      if (!s) {
        for (c = u.child; c; ) {
          if (c === n) {
            (s = !0), (n = u), (r = o);
            break;
          }
          if (c === r) {
            (s = !0), (r = u), (n = o);
            break;
          }
          c = c.sibling;
        }
        if (!s) throw Error(q(189));
      }
    }
    if (n.alternate !== r) throw Error(q(190));
  }
  if (n.tag !== 3) throw Error(q(188));
  return n.stateNode.current === n ? e : t;
}
function C1(e) {
  return (e = Xk(e)), e !== null ? I1(e) : null;
}
function I1(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = I1(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var E1 = tr.unstable_scheduleCallback,
  m0 = tr.unstable_cancelCallback,
  Zk = tr.unstable_shouldYield,
  Jk = tr.unstable_requestPaint,
  Lt = tr.unstable_now,
  eP = tr.unstable_getCurrentPriorityLevel,
  t_ = tr.unstable_ImmediatePriority,
  D1 = tr.unstable_UserBlockingPriority,
  lf = tr.unstable_NormalPriority,
  tP = tr.unstable_LowPriority,
  O1 = tr.unstable_IdlePriority,
  $f = null,
  ri = null;
function nP(e) {
  if (ri && typeof ri.onCommitFiberRoot == "function")
    try {
      ri.onCommitFiberRoot($f, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var zr = Math.clz32 ? Math.clz32 : oP,
  rP = Math.log,
  iP = Math.LN2;
function oP(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((rP(e) / iP) | 0)) | 0;
}
var cc = 64,
  fc = 4194304;
function ss(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function uf(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    u = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var c = s & ~o;
    c !== 0 ? (r = ss(c)) : ((u &= s), u !== 0 && (r = ss(u)));
  } else (s = n & ~o), s !== 0 ? (r = ss(s)) : u !== 0 && (r = ss(u));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (u = t & -t), o >= u || (o === 16 && (u & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - zr(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function lP(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function uP(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      u = e.pendingLanes;
    0 < u;

  ) {
    var s = 31 - zr(u),
      c = 1 << s,
      f = o[s];
    f === -1
      ? (!(c & n) || c & r) && (o[s] = lP(c, t))
      : f <= t && (e.expiredLanes |= c),
      (u &= ~c);
  }
}
function eg(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function k1() {
  var e = cc;
  return (cc <<= 1), !(cc & 4194240) && (cc = 64), e;
}
function nh(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ys(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - zr(t)),
    (e[t] = n);
}
function sP(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - zr(n),
      u = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~u);
  }
}
function n_(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - zr(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Xe = 0;
function P1(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var R1,
  r_,
  N1,
  L1,
  A1,
  tg = !1,
  dc = [],
  no = null,
  ro = null,
  io = null,
  Ds = new Map(),
  Os = new Map(),
  Xi = [],
  aP =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function y0(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      no = null;
      break;
    case "dragenter":
    case "dragleave":
      ro = null;
      break;
    case "mouseover":
    case "mouseout":
      io = null;
      break;
    case "pointerover":
    case "pointerout":
      Ds.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Os.delete(t.pointerId);
  }
}
function Xu(e, t, n, r, o, u) {
  return e === null || e.nativeEvent !== u
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: u,
        targetContainers: [o],
      }),
      t !== null && ((t = qs(t)), t !== null && r_(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function cP(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (no = Xu(no, e, t, n, r, o)), !0;
    case "dragenter":
      return (ro = Xu(ro, e, t, n, r, o)), !0;
    case "mouseover":
      return (io = Xu(io, e, t, n, r, o)), !0;
    case "pointerover":
      var u = o.pointerId;
      return Ds.set(u, Xu(Ds.get(u) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (u = o.pointerId), Os.set(u, Xu(Os.get(u) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function M1(e) {
  var t = $o(e.target);
  if (t !== null) {
    var n = nl(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = b1(n)), t !== null)) {
          (e.blockedOn = t),
            A1(e.priority, function () {
              N1(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Mc(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ng(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (qh = r), n.target.dispatchEvent(r), (qh = null);
    } else return (t = qs(n)), t !== null && r_(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function w0(e, t, n) {
  Mc(e) && n.delete(t);
}
function fP() {
  (tg = !1),
    no !== null && Mc(no) && (no = null),
    ro !== null && Mc(ro) && (ro = null),
    io !== null && Mc(io) && (io = null),
    Ds.forEach(w0),
    Os.forEach(w0);
}
function Zu(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    tg ||
      ((tg = !0),
      tr.unstable_scheduleCallback(tr.unstable_NormalPriority, fP)));
}
function ks(e) {
  function t(o) {
    return Zu(o, e);
  }
  if (0 < dc.length) {
    Zu(dc[0], e);
    for (var n = 1; n < dc.length; n++) {
      var r = dc[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    no !== null && Zu(no, e),
      ro !== null && Zu(ro, e),
      io !== null && Zu(io, e),
      Ds.forEach(t),
      Os.forEach(t),
      n = 0;
    n < Xi.length;
    n++
  )
    (r = Xi[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Xi.length && ((n = Xi[0]), n.blockedOn === null); )
    M1(n), n.blockedOn === null && Xi.shift();
}
var Zl = Li.ReactCurrentBatchConfig,
  sf = !0;
function dP(e, t, n, r) {
  var o = Xe,
    u = Zl.transition;
  Zl.transition = null;
  try {
    (Xe = 1), i_(e, t, n, r);
  } finally {
    (Xe = o), (Zl.transition = u);
  }
}
function pP(e, t, n, r) {
  var o = Xe,
    u = Zl.transition;
  Zl.transition = null;
  try {
    (Xe = 4), i_(e, t, n, r);
  } finally {
    (Xe = o), (Zl.transition = u);
  }
}
function i_(e, t, n, r) {
  if (sf) {
    var o = ng(e, t, n, r);
    if (o === null) dh(e, t, r, af, n), y0(e, r);
    else if (cP(o, e, t, n, r)) r.stopPropagation();
    else if ((y0(e, r), t & 4 && -1 < aP.indexOf(e))) {
      for (; o !== null; ) {
        var u = qs(o);
        if (
          (u !== null && R1(u),
          (u = ng(e, t, n, r)),
          u === null && dh(e, t, r, af, n),
          u === o)
        )
          break;
        o = u;
      }
      o !== null && r.stopPropagation();
    } else dh(e, t, r, null, n);
  }
}
var af = null;
function ng(e, t, n, r) {
  if (((af = null), (e = e_(r)), (e = $o(e)), e !== null))
    if (((t = nl(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = b1(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (af = e), null;
}
function F1(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (eP()) {
        case t_:
          return 1;
        case D1:
          return 4;
        case lf:
        case tP:
          return 16;
        case O1:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ji = null,
  o_ = null,
  Fc = null;
function z1() {
  if (Fc) return Fc;
  var e,
    t = o_,
    n = t.length,
    r,
    o = "value" in Ji ? Ji.value : Ji.textContent,
    u = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[u - r]; r++);
  return (Fc = o.slice(e, 1 < r ? 1 - r : void 0));
}
function zc(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function pc() {
  return !0;
}
function S0() {
  return !1;
}
function rr(e) {
  function t(n, r, o, u, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = u),
      (this.target = s),
      (this.currentTarget = null);
    for (var c in e)
      e.hasOwnProperty(c) && ((n = e[c]), (this[c] = n ? n(u) : u[c]));
    return (
      (this.isDefaultPrevented = (
        u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
      )
        ? pc
        : S0),
      (this.isPropagationStopped = S0),
      this
    );
  }
  return (
    It(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = pc));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = pc));
      },
      persist: function () {},
      isPersistent: pc,
    }),
    t
  );
}
var pu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  l_ = rr(pu),
  Qs = It({}, pu, { view: 0, detail: 0 }),
  hP = rr(Qs),
  rh,
  ih,
  Ju,
  Hf = It({}, Qs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: u_,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ju &&
            (Ju && e.type === "mousemove"
              ? ((rh = e.screenX - Ju.screenX), (ih = e.screenY - Ju.screenY))
              : (ih = rh = 0),
            (Ju = e)),
          rh);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ih;
    },
  }),
  x0 = rr(Hf),
  gP = It({}, Hf, { dataTransfer: 0 }),
  _P = rr(gP),
  vP = It({}, Qs, { relatedTarget: 0 }),
  oh = rr(vP),
  mP = It({}, pu, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yP = rr(mP),
  wP = It({}, pu, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  SP = rr(wP),
  xP = It({}, pu, { data: 0 }),
  T0 = rr(xP),
  TP = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  bP = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  CP = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function IP(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = CP[e]) ? !!t[e] : !1;
}
function u_() {
  return IP;
}
var EP = It({}, Qs, {
    key: function (e) {
      if (e.key) {
        var t = TP[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = zc(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? bP[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: u_,
    charCode: function (e) {
      return e.type === "keypress" ? zc(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? zc(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  DP = rr(EP),
  OP = It({}, Hf, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  b0 = rr(OP),
  kP = It({}, Qs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: u_,
  }),
  PP = rr(kP),
  RP = It({}, pu, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  NP = rr(RP),
  LP = It({}, Hf, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  AP = rr(LP),
  MP = [9, 13, 27, 32],
  s_ = Oi && "CompositionEvent" in window,
  hs = null;
Oi && "documentMode" in document && (hs = document.documentMode);
var FP = Oi && "TextEvent" in window && !hs,
  $1 = Oi && (!s_ || (hs && 8 < hs && 11 >= hs)),
  C0 = String.fromCharCode(32),
  I0 = !1;
function H1(e, t) {
  switch (e) {
    case "keyup":
      return MP.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function B1(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var $l = !1;
function zP(e, t) {
  switch (e) {
    case "compositionend":
      return B1(t);
    case "keypress":
      return t.which !== 32 ? null : ((I0 = !0), C0);
    case "textInput":
      return (e = t.data), e === C0 && I0 ? null : e;
    default:
      return null;
  }
}
function $P(e, t) {
  if ($l)
    return e === "compositionend" || (!s_ && H1(e, t))
      ? ((e = z1()), (Fc = o_ = Ji = null), ($l = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return $1 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var HP = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function E0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!HP[e.type] : t === "textarea";
}
function U1(e, t, n, r) {
  y1(r),
    (t = cf(t, "onChange")),
    0 < t.length &&
      ((n = new l_("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var gs = null,
  Ps = null;
function BP(e) {
  J1(e, 0);
}
function Bf(e) {
  var t = Ul(e);
  if (d1(t)) return e;
}
function UP(e, t) {
  if (e === "change") return t;
}
var j1 = !1;
if (Oi) {
  var lh;
  if (Oi) {
    var uh = "oninput" in document;
    if (!uh) {
      var D0 = document.createElement("div");
      D0.setAttribute("oninput", "return;"),
        (uh = typeof D0.oninput == "function");
    }
    lh = uh;
  } else lh = !1;
  j1 = lh && (!document.documentMode || 9 < document.documentMode);
}
function O0() {
  gs && (gs.detachEvent("onpropertychange", W1), (Ps = gs = null));
}
function W1(e) {
  if (e.propertyName === "value" && Bf(Ps)) {
    var t = [];
    U1(t, Ps, e, e_(e)), T1(BP, t);
  }
}
function jP(e, t, n) {
  e === "focusin"
    ? (O0(), (gs = t), (Ps = n), gs.attachEvent("onpropertychange", W1))
    : e === "focusout" && O0();
}
function WP(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Bf(Ps);
}
function VP(e, t) {
  if (e === "click") return Bf(t);
}
function GP(e, t) {
  if (e === "input" || e === "change") return Bf(t);
}
function KP(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Br = typeof Object.is == "function" ? Object.is : KP;
function Rs(e, t) {
  if (Br(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!zh.call(t, o) || !Br(e[o], t[o])) return !1;
  }
  return !0;
}
function k0(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function P0(e, t) {
  var n = k0(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = k0(n);
  }
}
function V1(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? V1(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function G1() {
  for (var e = window, t = nf(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = nf(e.document);
  }
  return t;
}
function a_(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function YP(e) {
  var t = G1(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    V1(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && a_(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          u = Math.min(r.start, o);
        (r = r.end === void 0 ? u : Math.min(r.end, o)),
          !e.extend && u > r && ((o = r), (r = u), (u = o)),
          (o = P0(n, u));
        var s = P0(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          u > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var QP = Oi && "documentMode" in document && 11 >= document.documentMode,
  Hl = null,
  rg = null,
  _s = null,
  ig = !1;
function R0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ig ||
    Hl == null ||
    Hl !== nf(r) ||
    ((r = Hl),
    "selectionStart" in r && a_(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (_s && Rs(_s, r)) ||
      ((_s = r),
      (r = cf(rg, "onSelect")),
      0 < r.length &&
        ((t = new l_("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Hl))));
}
function hc(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Bl = {
    animationend: hc("Animation", "AnimationEnd"),
    animationiteration: hc("Animation", "AnimationIteration"),
    animationstart: hc("Animation", "AnimationStart"),
    transitionend: hc("Transition", "TransitionEnd"),
  },
  sh = {},
  K1 = {};
Oi &&
  ((K1 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Bl.animationend.animation,
    delete Bl.animationiteration.animation,
    delete Bl.animationstart.animation),
  "TransitionEvent" in window || delete Bl.transitionend.transition);
function Uf(e) {
  if (sh[e]) return sh[e];
  if (!Bl[e]) return e;
  var t = Bl[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in K1) return (sh[e] = t[n]);
  return e;
}
var Y1 = Uf("animationend"),
  Q1 = Uf("animationiteration"),
  q1 = Uf("animationstart"),
  X1 = Uf("transitionend"),
  Z1 = new Map(),
  N0 =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function go(e, t) {
  Z1.set(e, t), tl(t, [e]);
}
for (var ah = 0; ah < N0.length; ah++) {
  var ch = N0[ah],
    qP = ch.toLowerCase(),
    XP = ch[0].toUpperCase() + ch.slice(1);
  go(qP, "on" + XP);
}
go(Y1, "onAnimationEnd");
go(Q1, "onAnimationIteration");
go(q1, "onAnimationStart");
go("dblclick", "onDoubleClick");
go("focusin", "onFocus");
go("focusout", "onBlur");
go(X1, "onTransitionEnd");
iu("onMouseEnter", ["mouseout", "mouseover"]);
iu("onMouseLeave", ["mouseout", "mouseover"]);
iu("onPointerEnter", ["pointerout", "pointerover"]);
iu("onPointerLeave", ["pointerout", "pointerover"]);
tl(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
tl(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
tl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
tl(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
tl(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
tl(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var as =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ZP = new Set("cancel close invalid load scroll toggle".split(" ").concat(as));
function L0(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), qk(r, t, void 0, e), (e.currentTarget = null);
}
function J1(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var u = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var c = r[s],
            f = c.instance,
            p = c.currentTarget;
          if (((c = c.listener), f !== u && o.isPropagationStopped())) break e;
          L0(o, c, p), (u = f);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((c = r[s]),
            (f = c.instance),
            (p = c.currentTarget),
            (c = c.listener),
            f !== u && o.isPropagationStopped())
          )
            break e;
          L0(o, c, p), (u = f);
        }
    }
  }
  if (of) throw ((e = Jh), (of = !1), (Jh = null), e);
}
function ht(e, t) {
  var n = t[ag];
  n === void 0 && (n = t[ag] = new Set());
  var r = e + "__bubble";
  n.has(r) || (eS(t, e, 2, !1), n.add(r));
}
function fh(e, t, n) {
  var r = 0;
  t && (r |= 4), eS(n, e, r, t);
}
var gc = "_reactListening" + Math.random().toString(36).slice(2);
function Ns(e) {
  if (!e[gc]) {
    (e[gc] = !0),
      u1.forEach(function (n) {
        n !== "selectionchange" && (ZP.has(n) || fh(n, !1, e), fh(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[gc] || ((t[gc] = !0), fh("selectionchange", !1, t));
  }
}
function eS(e, t, n, r) {
  switch (F1(t)) {
    case 1:
      var o = dP;
      break;
    case 4:
      o = pP;
      break;
    default:
      o = i_;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Zh ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function dh(e, t, n, r, o) {
  var u = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var c = r.stateNode.containerInfo;
        if (c === o || (c.nodeType === 8 && c.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var f = s.tag;
            if (
              (f === 3 || f === 4) &&
              ((f = s.stateNode.containerInfo),
              f === o || (f.nodeType === 8 && f.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; c !== null; ) {
          if (((s = $o(c)), s === null)) return;
          if (((f = s.tag), f === 5 || f === 6)) {
            r = u = s;
            continue e;
          }
          c = c.parentNode;
        }
      }
      r = r.return;
    }
  T1(function () {
    var p = u,
      _ = e_(n),
      w = [];
    e: {
      var S = Z1.get(e);
      if (S !== void 0) {
        var I = l_,
          P = e;
        switch (e) {
          case "keypress":
            if (zc(n) === 0) break e;
          case "keydown":
          case "keyup":
            I = DP;
            break;
          case "focusin":
            (P = "focus"), (I = oh);
            break;
          case "focusout":
            (P = "blur"), (I = oh);
            break;
          case "beforeblur":
          case "afterblur":
            I = oh;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            I = x0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            I = _P;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            I = PP;
            break;
          case Y1:
          case Q1:
          case q1:
            I = yP;
            break;
          case X1:
            I = NP;
            break;
          case "scroll":
            I = hP;
            break;
          case "wheel":
            I = AP;
            break;
          case "copy":
          case "cut":
          case "paste":
            I = SP;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            I = b0;
        }
        var b = (t & 4) !== 0,
          F = !b && e === "scroll",
          y = b ? (S !== null ? S + "Capture" : null) : S;
        b = [];
        for (var g = p, m; g !== null; ) {
          m = g;
          var k = m.stateNode;
          if (
            (m.tag === 5 &&
              k !== null &&
              ((m = k),
              y !== null && ((k = Es(g, y)), k != null && b.push(Ls(g, k, m)))),
            F)
          )
            break;
          g = g.return;
        }
        0 < b.length &&
          ((S = new I(S, P, null, n, _)), w.push({ event: S, listeners: b }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((S = e === "mouseover" || e === "pointerover"),
          (I = e === "mouseout" || e === "pointerout"),
          S &&
            n !== qh &&
            (P = n.relatedTarget || n.fromElement) &&
            ($o(P) || P[ki]))
        )
          break e;
        if (
          (I || S) &&
          ((S =
            _.window === _
              ? _
              : (S = _.ownerDocument)
              ? S.defaultView || S.parentWindow
              : window),
          I
            ? ((P = n.relatedTarget || n.toElement),
              (I = p),
              (P = P ? $o(P) : null),
              P !== null &&
                ((F = nl(P)), P !== F || (P.tag !== 5 && P.tag !== 6)) &&
                (P = null))
            : ((I = null), (P = p)),
          I !== P)
        ) {
          if (
            ((b = x0),
            (k = "onMouseLeave"),
            (y = "onMouseEnter"),
            (g = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((b = b0),
              (k = "onPointerLeave"),
              (y = "onPointerEnter"),
              (g = "pointer")),
            (F = I == null ? S : Ul(I)),
            (m = P == null ? S : Ul(P)),
            (S = new b(k, g + "leave", I, n, _)),
            (S.target = F),
            (S.relatedTarget = m),
            (k = null),
            $o(_) === p &&
              ((b = new b(y, g + "enter", P, n, _)),
              (b.target = m),
              (b.relatedTarget = F),
              (k = b)),
            (F = k),
            I && P)
          )
            t: {
              for (b = I, y = P, g = 0, m = b; m; m = Nl(m)) g++;
              for (m = 0, k = y; k; k = Nl(k)) m++;
              for (; 0 < g - m; ) (b = Nl(b)), g--;
              for (; 0 < m - g; ) (y = Nl(y)), m--;
              for (; g--; ) {
                if (b === y || (y !== null && b === y.alternate)) break t;
                (b = Nl(b)), (y = Nl(y));
              }
              b = null;
            }
          else b = null;
          I !== null && A0(w, S, I, b, !1),
            P !== null && F !== null && A0(w, F, P, b, !0);
        }
      }
      e: {
        if (
          ((S = p ? Ul(p) : window),
          (I = S.nodeName && S.nodeName.toLowerCase()),
          I === "select" || (I === "input" && S.type === "file"))
        )
          var O = UP;
        else if (E0(S))
          if (j1) O = GP;
          else {
            O = WP;
            var C = jP;
          }
        else
          (I = S.nodeName) &&
            I.toLowerCase() === "input" &&
            (S.type === "checkbox" || S.type === "radio") &&
            (O = VP);
        if (O && (O = O(e, p))) {
          U1(w, O, n, _);
          break e;
        }
        C && C(e, S, p),
          e === "focusout" &&
            (C = S._wrapperState) &&
            C.controlled &&
            S.type === "number" &&
            Vh(S, "number", S.value);
      }
      switch (((C = p ? Ul(p) : window), e)) {
        case "focusin":
          (E0(C) || C.contentEditable === "true") &&
            ((Hl = C), (rg = p), (_s = null));
          break;
        case "focusout":
          _s = rg = Hl = null;
          break;
        case "mousedown":
          ig = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ig = !1), R0(w, n, _);
          break;
        case "selectionchange":
          if (QP) break;
        case "keydown":
        case "keyup":
          R0(w, n, _);
      }
      var N;
      if (s_)
        e: {
          switch (e) {
            case "compositionstart":
              var z = "onCompositionStart";
              break e;
            case "compositionend":
              z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              z = "onCompositionUpdate";
              break e;
          }
          z = void 0;
        }
      else
        $l
          ? H1(e, n) && (z = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z &&
        ($1 &&
          n.locale !== "ko" &&
          ($l || z !== "onCompositionStart"
            ? z === "onCompositionEnd" && $l && (N = z1())
            : ((Ji = _),
              (o_ = "value" in Ji ? Ji.value : Ji.textContent),
              ($l = !0))),
        (C = cf(p, z)),
        0 < C.length &&
          ((z = new T0(z, e, null, n, _)),
          w.push({ event: z, listeners: C }),
          N ? (z.data = N) : ((N = B1(n)), N !== null && (z.data = N)))),
        (N = FP ? zP(e, n) : $P(e, n)) &&
          ((p = cf(p, "onBeforeInput")),
          0 < p.length &&
            ((_ = new T0("onBeforeInput", "beforeinput", null, n, _)),
            w.push({ event: _, listeners: p }),
            (_.data = N)));
    }
    J1(w, t);
  });
}
function Ls(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function cf(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      u = o.stateNode;
    o.tag === 5 &&
      u !== null &&
      ((o = u),
      (u = Es(e, n)),
      u != null && r.unshift(Ls(e, u, o)),
      (u = Es(e, t)),
      u != null && r.push(Ls(e, u, o))),
      (e = e.return);
  }
  return r;
}
function Nl(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function A0(e, t, n, r, o) {
  for (var u = t._reactName, s = []; n !== null && n !== r; ) {
    var c = n,
      f = c.alternate,
      p = c.stateNode;
    if (f !== null && f === r) break;
    c.tag === 5 &&
      p !== null &&
      ((c = p),
      o
        ? ((f = Es(n, u)), f != null && s.unshift(Ls(n, f, c)))
        : o || ((f = Es(n, u)), f != null && s.push(Ls(n, f, c)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var JP = /\r\n?/g,
  eR = /\u0000|\uFFFD/g;
function M0(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      JP,
      `
`
    )
    .replace(eR, "");
}
function _c(e, t, n) {
  if (((t = M0(t)), M0(e) !== t && n)) throw Error(q(425));
}
function ff() {}
var og = null,
  lg = null;
function ug(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var sg = typeof setTimeout == "function" ? setTimeout : void 0,
  tR = typeof clearTimeout == "function" ? clearTimeout : void 0,
  F0 = typeof Promise == "function" ? Promise : void 0,
  nR =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof F0 < "u"
      ? function (e) {
          return F0.resolve(null).then(e).catch(rR);
        }
      : sg;
function rR(e) {
  setTimeout(function () {
    throw e;
  });
}
function ph(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), ks(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ks(t);
}
function oo(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function z0(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var hu = Math.random().toString(36).slice(2),
  ti = "__reactFiber$" + hu,
  As = "__reactProps$" + hu,
  ki = "__reactContainer$" + hu,
  ag = "__reactEvents$" + hu,
  iR = "__reactListeners$" + hu,
  oR = "__reactHandles$" + hu;
function $o(e) {
  var t = e[ti];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ki] || n[ti])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = z0(e); e !== null; ) {
          if ((n = e[ti])) return n;
          e = z0(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function qs(e) {
  return (
    (e = e[ti] || e[ki]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ul(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(q(33));
}
function jf(e) {
  return e[As] || null;
}
var cg = [],
  jl = -1;
function _o(e) {
  return { current: e };
}
function gt(e) {
  0 > jl || ((e.current = cg[jl]), (cg[jl] = null), jl--);
}
function ct(e, t) {
  jl++, (cg[jl] = e.current), (e.current = t);
}
var fo = {},
  fn = _o(fo),
  Ln = _o(!1),
  Vo = fo;
function ou(e, t) {
  var n = e.type.contextTypes;
  if (!n) return fo;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    u;
  for (u in n) o[u] = t[u];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function An(e) {
  return (e = e.childContextTypes), e != null;
}
function df() {
  gt(Ln), gt(fn);
}
function $0(e, t, n) {
  if (fn.current !== fo) throw Error(q(168));
  ct(fn, t), ct(Ln, n);
}
function tS(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(q(108, jk(e) || "Unknown", o));
  return It({}, n, r);
}
function pf(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || fo),
    (Vo = fn.current),
    ct(fn, e),
    ct(Ln, Ln.current),
    !0
  );
}
function H0(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(q(169));
  n
    ? ((e = tS(e, t, Vo)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      gt(Ln),
      gt(fn),
      ct(fn, e))
    : gt(Ln),
    ct(Ln, n);
}
var xi = null,
  Wf = !1,
  hh = !1;
function nS(e) {
  xi === null ? (xi = [e]) : xi.push(e);
}
function lR(e) {
  (Wf = !0), nS(e);
}
function vo() {
  if (!hh && xi !== null) {
    hh = !0;
    var e = 0,
      t = Xe;
    try {
      var n = xi;
      for (Xe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (xi = null), (Wf = !1);
    } catch (o) {
      throw (xi !== null && (xi = xi.slice(e + 1)), E1(t_, vo), o);
    } finally {
      (Xe = t), (hh = !1);
    }
  }
  return null;
}
var Wl = [],
  Vl = 0,
  hf = null,
  gf = 0,
  vr = [],
  mr = 0,
  Go = null,
  Ii = 1,
  Ei = "";
function Fo(e, t) {
  (Wl[Vl++] = gf), (Wl[Vl++] = hf), (hf = e), (gf = t);
}
function rS(e, t, n) {
  (vr[mr++] = Ii), (vr[mr++] = Ei), (vr[mr++] = Go), (Go = e);
  var r = Ii;
  e = Ei;
  var o = 32 - zr(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var u = 32 - zr(t) + o;
  if (30 < u) {
    var s = o - (o % 5);
    (u = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (Ii = (1 << (32 - zr(t) + o)) | (n << o) | r),
      (Ei = u + e);
  } else (Ii = (1 << u) | (n << o) | r), (Ei = e);
}
function c_(e) {
  e.return !== null && (Fo(e, 1), rS(e, 1, 0));
}
function f_(e) {
  for (; e === hf; )
    (hf = Wl[--Vl]), (Wl[Vl] = null), (gf = Wl[--Vl]), (Wl[Vl] = null);
  for (; e === Go; )
    (Go = vr[--mr]),
      (vr[mr] = null),
      (Ei = vr[--mr]),
      (vr[mr] = null),
      (Ii = vr[--mr]),
      (vr[mr] = null);
}
var Zn = null,
  qn = null,
  yt = !1,
  Fr = null;
function iS(e, t) {
  var n = wr(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function B0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Zn = e), (qn = oo(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Zn = e), (qn = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Go !== null ? { id: Ii, overflow: Ei } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = wr(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Zn = e),
            (qn = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function fg(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function dg(e) {
  if (yt) {
    var t = qn;
    if (t) {
      var n = t;
      if (!B0(e, t)) {
        if (fg(e)) throw Error(q(418));
        t = oo(n.nextSibling);
        var r = Zn;
        t && B0(e, t)
          ? iS(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (yt = !1), (Zn = e));
      }
    } else {
      if (fg(e)) throw Error(q(418));
      (e.flags = (e.flags & -4097) | 2), (yt = !1), (Zn = e);
    }
  }
}
function U0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Zn = e;
}
function vc(e) {
  if (e !== Zn) return !1;
  if (!yt) return U0(e), (yt = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ug(e.type, e.memoizedProps))),
    t && (t = qn))
  ) {
    if (fg(e)) throw (oS(), Error(q(418)));
    for (; t; ) iS(e, t), (t = oo(t.nextSibling));
  }
  if ((U0(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(q(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              qn = oo(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      qn = null;
    }
  } else qn = Zn ? oo(e.stateNode.nextSibling) : null;
  return !0;
}
function oS() {
  for (var e = qn; e; ) e = oo(e.nextSibling);
}
function lu() {
  (qn = Zn = null), (yt = !1);
}
function d_(e) {
  Fr === null ? (Fr = [e]) : Fr.push(e);
}
var uR = Li.ReactCurrentBatchConfig;
function Ar(e, t) {
  if (e && e.defaultProps) {
    (t = It({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var _f = _o(null),
  vf = null,
  Gl = null,
  p_ = null;
function h_() {
  p_ = Gl = vf = null;
}
function g_(e) {
  var t = _f.current;
  gt(_f), (e._currentValue = t);
}
function pg(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jl(e, t) {
  (vf = e),
    (p_ = Gl = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Nn = !0), (e.firstContext = null));
}
function Tr(e) {
  var t = e._currentValue;
  if (p_ !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Gl === null)) {
      if (vf === null) throw Error(q(308));
      (Gl = e), (vf.dependencies = { lanes: 0, firstContext: e });
    } else Gl = Gl.next = e;
  return t;
}
var Ho = null;
function __(e) {
  Ho === null ? (Ho = [e]) : Ho.push(e);
}
function lS(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), __(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Pi(e, r)
  );
}
function Pi(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var qi = !1;
function v_(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function uS(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Di(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function lo(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Ke & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Pi(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), __(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Pi(e, n)
  );
}
function $c(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), n_(e, n);
  }
}
function j0(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      u = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        u === null ? (o = u = s) : (u = u.next = s), (n = n.next);
      } while (n !== null);
      u === null ? (o = u = t) : (u = u.next = t);
    } else o = u = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: u,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function mf(e, t, n, r) {
  var o = e.updateQueue;
  qi = !1;
  var u = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    c = o.shared.pending;
  if (c !== null) {
    o.shared.pending = null;
    var f = c,
      p = f.next;
    (f.next = null), s === null ? (u = p) : (s.next = p), (s = f);
    var _ = e.alternate;
    _ !== null &&
      ((_ = _.updateQueue),
      (c = _.lastBaseUpdate),
      c !== s &&
        (c === null ? (_.firstBaseUpdate = p) : (c.next = p),
        (_.lastBaseUpdate = f)));
  }
  if (u !== null) {
    var w = o.baseState;
    (s = 0), (_ = p = f = null), (c = u);
    do {
      var S = c.lane,
        I = c.eventTime;
      if ((r & S) === S) {
        _ !== null &&
          (_ = _.next =
            {
              eventTime: I,
              lane: 0,
              tag: c.tag,
              payload: c.payload,
              callback: c.callback,
              next: null,
            });
        e: {
          var P = e,
            b = c;
          switch (((S = t), (I = n), b.tag)) {
            case 1:
              if (((P = b.payload), typeof P == "function")) {
                w = P.call(I, w, S);
                break e;
              }
              w = P;
              break e;
            case 3:
              P.flags = (P.flags & -65537) | 128;
            case 0:
              if (
                ((P = b.payload),
                (S = typeof P == "function" ? P.call(I, w, S) : P),
                S == null)
              )
                break e;
              w = It({}, w, S);
              break e;
            case 2:
              qi = !0;
          }
        }
        c.callback !== null &&
          c.lane !== 0 &&
          ((e.flags |= 64),
          (S = o.effects),
          S === null ? (o.effects = [c]) : S.push(c));
      } else
        (I = {
          eventTime: I,
          lane: S,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null,
        }),
          _ === null ? ((p = _ = I), (f = w)) : (_ = _.next = I),
          (s |= S);
      if (((c = c.next), c === null)) {
        if (((c = o.shared.pending), c === null)) break;
        (S = c),
          (c = S.next),
          (S.next = null),
          (o.lastBaseUpdate = S),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (_ === null && (f = w),
      (o.baseState = f),
      (o.firstBaseUpdate = p),
      (o.lastBaseUpdate = _),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else u === null && (o.shared.lanes = 0);
    (Yo |= s), (e.lanes = s), (e.memoizedState = w);
  }
}
function W0(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(q(191, o));
        o.call(r);
      }
    }
}
var sS = new l1.Component().refs;
function hg(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : It({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Vf = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? nl(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = mn(),
      o = so(e),
      u = Di(r, o);
    (u.payload = t),
      n != null && (u.callback = n),
      (t = lo(e, u, o)),
      t !== null && ($r(t, e, o, r), $c(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = mn(),
      o = so(e),
      u = Di(r, o);
    (u.tag = 1),
      (u.payload = t),
      n != null && (u.callback = n),
      (t = lo(e, u, o)),
      t !== null && ($r(t, e, o, r), $c(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = mn(),
      r = so(e),
      o = Di(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = lo(e, o, r)),
      t !== null && ($r(t, e, r, n), $c(t, e, r));
  },
};
function V0(e, t, n, r, o, u, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, u, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Rs(n, r) || !Rs(o, u)
      : !0
  );
}
function aS(e, t, n) {
  var r = !1,
    o = fo,
    u = t.contextType;
  return (
    typeof u == "object" && u !== null
      ? (u = Tr(u))
      : ((o = An(t) ? Vo : fn.current),
        (r = t.contextTypes),
        (u = (r = r != null) ? ou(e, o) : fo)),
    (t = new t(n, u)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Vf),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = u)),
    t
  );
}
function G0(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Vf.enqueueReplaceState(t, t.state, null);
}
function gg(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = sS), v_(e);
  var u = t.contextType;
  typeof u == "object" && u !== null
    ? (o.context = Tr(u))
    : ((u = An(t) ? Vo : fn.current), (o.context = ou(e, u))),
    (o.state = e.memoizedState),
    (u = t.getDerivedStateFromProps),
    typeof u == "function" && (hg(e, t, u, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Vf.enqueueReplaceState(o, o.state, null),
      mf(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function es(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(q(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(q(147, e));
      var o = r,
        u = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === u
        ? t.ref
        : ((t = function (s) {
            var c = o.refs;
            c === sS && (c = o.refs = {}),
              s === null ? delete c[u] : (c[u] = s);
          }),
          (t._stringRef = u),
          t);
    }
    if (typeof e != "string") throw Error(q(284));
    if (!n._owner) throw Error(q(290, e));
  }
  return e;
}
function mc(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      q(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function K0(e) {
  var t = e._init;
  return t(e._payload);
}
function cS(e) {
  function t(y, g) {
    if (e) {
      var m = y.deletions;
      m === null ? ((y.deletions = [g]), (y.flags |= 16)) : m.push(g);
    }
  }
  function n(y, g) {
    if (!e) return null;
    for (; g !== null; ) t(y, g), (g = g.sibling);
    return null;
  }
  function r(y, g) {
    for (y = new Map(); g !== null; )
      g.key !== null ? y.set(g.key, g) : y.set(g.index, g), (g = g.sibling);
    return y;
  }
  function o(y, g) {
    return (y = ao(y, g)), (y.index = 0), (y.sibling = null), y;
  }
  function u(y, g, m) {
    return (
      (y.index = m),
      e
        ? ((m = y.alternate),
          m !== null
            ? ((m = m.index), m < g ? ((y.flags |= 2), g) : m)
            : ((y.flags |= 2), g))
        : ((y.flags |= 1048576), g)
    );
  }
  function s(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function c(y, g, m, k) {
    return g === null || g.tag !== 6
      ? ((g = Sh(m, y.mode, k)), (g.return = y), g)
      : ((g = o(g, m)), (g.return = y), g);
  }
  function f(y, g, m, k) {
    var O = m.type;
    return O === zl
      ? _(y, g, m.props.children, k, m.key)
      : g !== null &&
        (g.elementType === O ||
          (typeof O == "object" &&
            O !== null &&
            O.$$typeof === Qi &&
            K0(O) === g.type))
      ? ((k = o(g, m.props)), (k.ref = es(y, g, m)), (k.return = y), k)
      : ((k = Vc(m.type, m.key, m.props, null, y.mode, k)),
        (k.ref = es(y, g, m)),
        (k.return = y),
        k);
  }
  function p(y, g, m, k) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== m.containerInfo ||
      g.stateNode.implementation !== m.implementation
      ? ((g = xh(m, y.mode, k)), (g.return = y), g)
      : ((g = o(g, m.children || [])), (g.return = y), g);
  }
  function _(y, g, m, k, O) {
    return g === null || g.tag !== 7
      ? ((g = Wo(m, y.mode, k, O)), (g.return = y), g)
      : ((g = o(g, m)), (g.return = y), g);
  }
  function w(y, g, m) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (g = Sh("" + g, y.mode, m)), (g.return = y), g;
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case uc:
          return (
            (m = Vc(g.type, g.key, g.props, null, y.mode, m)),
            (m.ref = es(y, null, g)),
            (m.return = y),
            m
          );
        case Fl:
          return (g = xh(g, y.mode, m)), (g.return = y), g;
        case Qi:
          var k = g._init;
          return w(y, k(g._payload), m);
      }
      if (us(g) || Qu(g))
        return (g = Wo(g, y.mode, m, null)), (g.return = y), g;
      mc(y, g);
    }
    return null;
  }
  function S(y, g, m, k) {
    var O = g !== null ? g.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return O !== null ? null : c(y, g, "" + m, k);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case uc:
          return m.key === O ? f(y, g, m, k) : null;
        case Fl:
          return m.key === O ? p(y, g, m, k) : null;
        case Qi:
          return (O = m._init), S(y, g, O(m._payload), k);
      }
      if (us(m) || Qu(m)) return O !== null ? null : _(y, g, m, k, null);
      mc(y, m);
    }
    return null;
  }
  function I(y, g, m, k, O) {
    if ((typeof k == "string" && k !== "") || typeof k == "number")
      return (y = y.get(m) || null), c(g, y, "" + k, O);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case uc:
          return (y = y.get(k.key === null ? m : k.key) || null), f(g, y, k, O);
        case Fl:
          return (y = y.get(k.key === null ? m : k.key) || null), p(g, y, k, O);
        case Qi:
          var C = k._init;
          return I(y, g, m, C(k._payload), O);
      }
      if (us(k) || Qu(k)) return (y = y.get(m) || null), _(g, y, k, O, null);
      mc(g, k);
    }
    return null;
  }
  function P(y, g, m, k) {
    for (
      var O = null, C = null, N = g, z = (g = 0), Y = null;
      N !== null && z < m.length;
      z++
    ) {
      N.index > z ? ((Y = N), (N = null)) : (Y = N.sibling);
      var W = S(y, N, m[z], k);
      if (W === null) {
        N === null && (N = Y);
        break;
      }
      e && N && W.alternate === null && t(y, N),
        (g = u(W, g, z)),
        C === null ? (O = W) : (C.sibling = W),
        (C = W),
        (N = Y);
    }
    if (z === m.length) return n(y, N), yt && Fo(y, z), O;
    if (N === null) {
      for (; z < m.length; z++)
        (N = w(y, m[z], k)),
          N !== null &&
            ((g = u(N, g, z)), C === null ? (O = N) : (C.sibling = N), (C = N));
      return yt && Fo(y, z), O;
    }
    for (N = r(y, N); z < m.length; z++)
      (Y = I(N, y, z, m[z], k)),
        Y !== null &&
          (e && Y.alternate !== null && N.delete(Y.key === null ? z : Y.key),
          (g = u(Y, g, z)),
          C === null ? (O = Y) : (C.sibling = Y),
          (C = Y));
    return (
      e &&
        N.forEach(function (ue) {
          return t(y, ue);
        }),
      yt && Fo(y, z),
      O
    );
  }
  function b(y, g, m, k) {
    var O = Qu(m);
    if (typeof O != "function") throw Error(q(150));
    if (((m = O.call(m)), m == null)) throw Error(q(151));
    for (
      var C = (O = null), N = g, z = (g = 0), Y = null, W = m.next();
      N !== null && !W.done;
      z++, W = m.next()
    ) {
      N.index > z ? ((Y = N), (N = null)) : (Y = N.sibling);
      var ue = S(y, N, W.value, k);
      if (ue === null) {
        N === null && (N = Y);
        break;
      }
      e && N && ue.alternate === null && t(y, N),
        (g = u(ue, g, z)),
        C === null ? (O = ue) : (C.sibling = ue),
        (C = ue),
        (N = Y);
    }
    if (W.done) return n(y, N), yt && Fo(y, z), O;
    if (N === null) {
      for (; !W.done; z++, W = m.next())
        (W = w(y, W.value, k)),
          W !== null &&
            ((g = u(W, g, z)), C === null ? (O = W) : (C.sibling = W), (C = W));
      return yt && Fo(y, z), O;
    }
    for (N = r(y, N); !W.done; z++, W = m.next())
      (W = I(N, y, z, W.value, k)),
        W !== null &&
          (e && W.alternate !== null && N.delete(W.key === null ? z : W.key),
          (g = u(W, g, z)),
          C === null ? (O = W) : (C.sibling = W),
          (C = W));
    return (
      e &&
        N.forEach(function (he) {
          return t(y, he);
        }),
      yt && Fo(y, z),
      O
    );
  }
  function F(y, g, m, k) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === zl &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case uc:
          e: {
            for (var O = m.key, C = g; C !== null; ) {
              if (C.key === O) {
                if (((O = m.type), O === zl)) {
                  if (C.tag === 7) {
                    n(y, C.sibling),
                      (g = o(C, m.props.children)),
                      (g.return = y),
                      (y = g);
                    break e;
                  }
                } else if (
                  C.elementType === O ||
                  (typeof O == "object" &&
                    O !== null &&
                    O.$$typeof === Qi &&
                    K0(O) === C.type)
                ) {
                  n(y, C.sibling),
                    (g = o(C, m.props)),
                    (g.ref = es(y, C, m)),
                    (g.return = y),
                    (y = g);
                  break e;
                }
                n(y, C);
                break;
              } else t(y, C);
              C = C.sibling;
            }
            m.type === zl
              ? ((g = Wo(m.props.children, y.mode, k, m.key)),
                (g.return = y),
                (y = g))
              : ((k = Vc(m.type, m.key, m.props, null, y.mode, k)),
                (k.ref = es(y, g, m)),
                (k.return = y),
                (y = k));
          }
          return s(y);
        case Fl:
          e: {
            for (C = m.key; g !== null; ) {
              if (g.key === C)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === m.containerInfo &&
                  g.stateNode.implementation === m.implementation
                ) {
                  n(y, g.sibling),
                    (g = o(g, m.children || [])),
                    (g.return = y),
                    (y = g);
                  break e;
                } else {
                  n(y, g);
                  break;
                }
              else t(y, g);
              g = g.sibling;
            }
            (g = xh(m, y.mode, k)), (g.return = y), (y = g);
          }
          return s(y);
        case Qi:
          return (C = m._init), F(y, g, C(m._payload), k);
      }
      if (us(m)) return P(y, g, m, k);
      if (Qu(m)) return b(y, g, m, k);
      mc(y, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        g !== null && g.tag === 6
          ? (n(y, g.sibling), (g = o(g, m)), (g.return = y), (y = g))
          : (n(y, g), (g = Sh(m, y.mode, k)), (g.return = y), (y = g)),
        s(y))
      : n(y, g);
  }
  return F;
}
var uu = cS(!0),
  fS = cS(!1),
  Xs = {},
  ii = _o(Xs),
  Ms = _o(Xs),
  Fs = _o(Xs);
function Bo(e) {
  if (e === Xs) throw Error(q(174));
  return e;
}
function m_(e, t) {
  switch ((ct(Fs, t), ct(Ms, e), ct(ii, Xs), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Kh(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Kh(t, e));
  }
  gt(ii), ct(ii, t);
}
function su() {
  gt(ii), gt(Ms), gt(Fs);
}
function dS(e) {
  Bo(Fs.current);
  var t = Bo(ii.current),
    n = Kh(t, e.type);
  t !== n && (ct(Ms, e), ct(ii, n));
}
function y_(e) {
  Ms.current === e && (gt(ii), gt(Ms));
}
var Tt = _o(0);
function yf(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var gh = [];
function w_() {
  for (var e = 0; e < gh.length; e++)
    gh[e]._workInProgressVersionPrimary = null;
  gh.length = 0;
}
var Hc = Li.ReactCurrentDispatcher,
  _h = Li.ReactCurrentBatchConfig,
  Ko = 0,
  Ct = null,
  Ut = null,
  Kt = null,
  wf = !1,
  vs = !1,
  zs = 0,
  sR = 0;
function on() {
  throw Error(q(321));
}
function S_(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Br(e[n], t[n])) return !1;
  return !0;
}
function x_(e, t, n, r, o, u) {
  if (
    ((Ko = u),
    (Ct = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Hc.current = e === null || e.memoizedState === null ? dR : pR),
    (e = n(r, o)),
    vs)
  ) {
    u = 0;
    do {
      if (((vs = !1), (zs = 0), 25 <= u)) throw Error(q(301));
      (u += 1),
        (Kt = Ut = null),
        (t.updateQueue = null),
        (Hc.current = hR),
        (e = n(r, o));
    } while (vs);
  }
  if (
    ((Hc.current = Sf),
    (t = Ut !== null && Ut.next !== null),
    (Ko = 0),
    (Kt = Ut = Ct = null),
    (wf = !1),
    t)
  )
    throw Error(q(300));
  return e;
}
function T_() {
  var e = zs !== 0;
  return (zs = 0), e;
}
function ei() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Kt === null ? (Ct.memoizedState = Kt = e) : (Kt = Kt.next = e), Kt;
}
function br() {
  if (Ut === null) {
    var e = Ct.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ut.next;
  var t = Kt === null ? Ct.memoizedState : Kt.next;
  if (t !== null) (Kt = t), (Ut = e);
  else {
    if (e === null) throw Error(q(310));
    (Ut = e),
      (e = {
        memoizedState: Ut.memoizedState,
        baseState: Ut.baseState,
        baseQueue: Ut.baseQueue,
        queue: Ut.queue,
        next: null,
      }),
      Kt === null ? (Ct.memoizedState = Kt = e) : (Kt = Kt.next = e);
  }
  return Kt;
}
function $s(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function vh(e) {
  var t = br(),
    n = t.queue;
  if (n === null) throw Error(q(311));
  n.lastRenderedReducer = e;
  var r = Ut,
    o = r.baseQueue,
    u = n.pending;
  if (u !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = u.next), (u.next = s);
    }
    (r.baseQueue = o = u), (n.pending = null);
  }
  if (o !== null) {
    (u = o.next), (r = r.baseState);
    var c = (s = null),
      f = null,
      p = u;
    do {
      var _ = p.lane;
      if ((Ko & _) === _)
        f !== null &&
          (f = f.next =
            {
              lane: 0,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null,
            }),
          (r = p.hasEagerState ? p.eagerState : e(r, p.action));
      else {
        var w = {
          lane: _,
          action: p.action,
          hasEagerState: p.hasEagerState,
          eagerState: p.eagerState,
          next: null,
        };
        f === null ? ((c = f = w), (s = r)) : (f = f.next = w),
          (Ct.lanes |= _),
          (Yo |= _);
      }
      p = p.next;
    } while (p !== null && p !== u);
    f === null ? (s = r) : (f.next = c),
      Br(r, t.memoizedState) || (Nn = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = f),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (u = o.lane), (Ct.lanes |= u), (Yo |= u), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function mh(e) {
  var t = br(),
    n = t.queue;
  if (n === null) throw Error(q(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    u = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (u = e(u, s.action)), (s = s.next);
    while (s !== o);
    Br(u, t.memoizedState) || (Nn = !0),
      (t.memoizedState = u),
      t.baseQueue === null && (t.baseState = u),
      (n.lastRenderedState = u);
  }
  return [u, r];
}
function pS() {}
function hS(e, t) {
  var n = Ct,
    r = br(),
    o = t(),
    u = !Br(r.memoizedState, o);
  if (
    (u && ((r.memoizedState = o), (Nn = !0)),
    (r = r.queue),
    b_(vS.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || u || (Kt !== null && Kt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Hs(9, _S.bind(null, n, r, o, t), void 0, null),
      Qt === null)
    )
      throw Error(q(349));
    Ko & 30 || gS(n, t, o);
  }
  return o;
}
function gS(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ct.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ct.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function _S(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), mS(t) && yS(e);
}
function vS(e, t, n) {
  return n(function () {
    mS(t) && yS(e);
  });
}
function mS(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Br(e, n);
  } catch {
    return !0;
  }
}
function yS(e) {
  var t = Pi(e, 1);
  t !== null && $r(t, e, 1, -1);
}
function Y0(e) {
  var t = ei();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $s,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = fR.bind(null, Ct, e)),
    [t.memoizedState, e]
  );
}
function Hs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ct.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ct.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function wS() {
  return br().memoizedState;
}
function Bc(e, t, n, r) {
  var o = ei();
  (Ct.flags |= e),
    (o.memoizedState = Hs(1 | t, n, void 0, r === void 0 ? null : r));
}
function Gf(e, t, n, r) {
  var o = br();
  r = r === void 0 ? null : r;
  var u = void 0;
  if (Ut !== null) {
    var s = Ut.memoizedState;
    if (((u = s.destroy), r !== null && S_(r, s.deps))) {
      o.memoizedState = Hs(t, n, u, r);
      return;
    }
  }
  (Ct.flags |= e), (o.memoizedState = Hs(1 | t, n, u, r));
}
function Q0(e, t) {
  return Bc(8390656, 8, e, t);
}
function b_(e, t) {
  return Gf(2048, 8, e, t);
}
function SS(e, t) {
  return Gf(4, 2, e, t);
}
function xS(e, t) {
  return Gf(4, 4, e, t);
}
function TS(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function bS(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Gf(4, 4, TS.bind(null, t, e), n)
  );
}
function C_() {}
function CS(e, t) {
  var n = br();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && S_(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function IS(e, t) {
  var n = br();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && S_(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function ES(e, t, n) {
  return Ko & 21
    ? (Br(n, t) || ((n = k1()), (Ct.lanes |= n), (Yo |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Nn = !0)), (e.memoizedState = n));
}
function aR(e, t) {
  var n = Xe;
  (Xe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = _h.transition;
  _h.transition = {};
  try {
    e(!1), t();
  } finally {
    (Xe = n), (_h.transition = r);
  }
}
function DS() {
  return br().memoizedState;
}
function cR(e, t, n) {
  var r = so(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    OS(e))
  )
    kS(t, n);
  else if (((n = lS(e, t, n, r)), n !== null)) {
    var o = mn();
    $r(n, e, r, o), PS(n, t, r);
  }
}
function fR(e, t, n) {
  var r = so(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (OS(e)) kS(t, o);
  else {
    var u = e.alternate;
    if (
      e.lanes === 0 &&
      (u === null || u.lanes === 0) &&
      ((u = t.lastRenderedReducer), u !== null)
    )
      try {
        var s = t.lastRenderedState,
          c = u(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = c), Br(c, s))) {
          var f = t.interleaved;
          f === null
            ? ((o.next = o), __(t))
            : ((o.next = f.next), (f.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = lS(e, t, o, r)),
      n !== null && ((o = mn()), $r(n, e, r, o), PS(n, t, r));
  }
}
function OS(e) {
  var t = e.alternate;
  return e === Ct || (t !== null && t === Ct);
}
function kS(e, t) {
  vs = wf = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function PS(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), n_(e, n);
  }
}
var Sf = {
    readContext: Tr,
    useCallback: on,
    useContext: on,
    useEffect: on,
    useImperativeHandle: on,
    useInsertionEffect: on,
    useLayoutEffect: on,
    useMemo: on,
    useReducer: on,
    useRef: on,
    useState: on,
    useDebugValue: on,
    useDeferredValue: on,
    useTransition: on,
    useMutableSource: on,
    useSyncExternalStore: on,
    useId: on,
    unstable_isNewReconciler: !1,
  },
  dR = {
    readContext: Tr,
    useCallback: function (e, t) {
      return (ei().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Tr,
    useEffect: Q0,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Bc(4194308, 4, TS.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Bc(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Bc(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ei();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ei();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = cR.bind(null, Ct, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ei();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Y0,
    useDebugValue: C_,
    useDeferredValue: function (e) {
      return (ei().memoizedState = e);
    },
    useTransition: function () {
      var e = Y0(!1),
        t = e[0];
      return (e = aR.bind(null, e[1])), (ei().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ct,
        o = ei();
      if (yt) {
        if (n === void 0) throw Error(q(407));
        n = n();
      } else {
        if (((n = t()), Qt === null)) throw Error(q(349));
        Ko & 30 || gS(r, t, n);
      }
      o.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return (
        (o.queue = u),
        Q0(vS.bind(null, r, u, e), [e]),
        (r.flags |= 2048),
        Hs(9, _S.bind(null, r, u, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ei(),
        t = Qt.identifierPrefix;
      if (yt) {
        var n = Ei,
          r = Ii;
        (n = (r & ~(1 << (32 - zr(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = zs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = sR++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  pR = {
    readContext: Tr,
    useCallback: CS,
    useContext: Tr,
    useEffect: b_,
    useImperativeHandle: bS,
    useInsertionEffect: SS,
    useLayoutEffect: xS,
    useMemo: IS,
    useReducer: vh,
    useRef: wS,
    useState: function () {
      return vh($s);
    },
    useDebugValue: C_,
    useDeferredValue: function (e) {
      var t = br();
      return ES(t, Ut.memoizedState, e);
    },
    useTransition: function () {
      var e = vh($s)[0],
        t = br().memoizedState;
      return [e, t];
    },
    useMutableSource: pS,
    useSyncExternalStore: hS,
    useId: DS,
    unstable_isNewReconciler: !1,
  },
  hR = {
    readContext: Tr,
    useCallback: CS,
    useContext: Tr,
    useEffect: b_,
    useImperativeHandle: bS,
    useInsertionEffect: SS,
    useLayoutEffect: xS,
    useMemo: IS,
    useReducer: mh,
    useRef: wS,
    useState: function () {
      return mh($s);
    },
    useDebugValue: C_,
    useDeferredValue: function (e) {
      var t = br();
      return Ut === null ? (t.memoizedState = e) : ES(t, Ut.memoizedState, e);
    },
    useTransition: function () {
      var e = mh($s)[0],
        t = br().memoizedState;
      return [e, t];
    },
    useMutableSource: pS,
    useSyncExternalStore: hS,
    useId: DS,
    unstable_isNewReconciler: !1,
  };
function au(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Uk(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (u) {
    o =
      `
Error generating stack: ` +
      u.message +
      `
` +
      u.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function yh(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function _g(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var gR = typeof WeakMap == "function" ? WeakMap : Map;
function RS(e, t, n) {
  (n = Di(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Tf || ((Tf = !0), (Ig = r)), _g(e, t);
    }),
    n
  );
}
function NS(e, t, n) {
  (n = Di(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        _g(e, t);
      });
  }
  var u = e.stateNode;
  return (
    u !== null &&
      typeof u.componentDidCatch == "function" &&
      (n.callback = function () {
        _g(e, t),
          typeof r != "function" &&
            (uo === null ? (uo = new Set([this])) : uo.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function q0(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new gR();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = OR.bind(null, e, t, n)), t.then(e, e));
}
function X0(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Z0(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Di(-1, 1)), (t.tag = 2), lo(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var _R = Li.ReactCurrentOwner,
  Nn = !1;
function _n(e, t, n, r) {
  t.child = e === null ? fS(t, null, n, r) : uu(t, e.child, n, r);
}
function J0(e, t, n, r, o) {
  n = n.render;
  var u = t.ref;
  return (
    Jl(t, o),
    (r = x_(e, t, n, r, u, o)),
    (n = T_()),
    e !== null && !Nn
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ri(e, t, o))
      : (yt && n && c_(t), (t.flags |= 1), _n(e, t, r, o), t.child)
  );
}
function ey(e, t, n, r, o) {
  if (e === null) {
    var u = n.type;
    return typeof u == "function" &&
      !N_(u) &&
      u.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = u), LS(e, t, u, r, o))
      : ((e = Vc(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((u = e.child), !(e.lanes & o))) {
    var s = u.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Rs), n(s, r) && e.ref === t.ref)
    )
      return Ri(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = ao(u, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function LS(e, t, n, r, o) {
  if (e !== null) {
    var u = e.memoizedProps;
    if (Rs(u, r) && e.ref === t.ref)
      if (((Nn = !1), (t.pendingProps = r = u), (e.lanes & o) !== 0))
        e.flags & 131072 && (Nn = !0);
      else return (t.lanes = e.lanes), Ri(e, t, o);
  }
  return vg(e, t, n, r, o);
}
function AS(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    u = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ct(Yl, Gn),
        (Gn |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = u !== null ? u.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ct(Yl, Gn),
          (Gn |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = u !== null ? u.baseLanes : n),
        ct(Yl, Gn),
        (Gn |= r);
    }
  else
    u !== null ? ((r = u.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ct(Yl, Gn),
      (Gn |= r);
  return _n(e, t, o, n), t.child;
}
function MS(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function vg(e, t, n, r, o) {
  var u = An(n) ? Vo : fn.current;
  return (
    (u = ou(t, u)),
    Jl(t, o),
    (n = x_(e, t, n, r, u, o)),
    (r = T_()),
    e !== null && !Nn
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ri(e, t, o))
      : (yt && r && c_(t), (t.flags |= 1), _n(e, t, n, o), t.child)
  );
}
function ty(e, t, n, r, o) {
  if (An(n)) {
    var u = !0;
    pf(t);
  } else u = !1;
  if ((Jl(t, o), t.stateNode === null))
    Uc(e, t), aS(t, n, r), gg(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      c = t.memoizedProps;
    s.props = c;
    var f = s.context,
      p = n.contextType;
    typeof p == "object" && p !== null
      ? (p = Tr(p))
      : ((p = An(n) ? Vo : fn.current), (p = ou(t, p)));
    var _ = n.getDerivedStateFromProps,
      w =
        typeof _ == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    w ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((c !== r || f !== p) && G0(t, s, r, p)),
      (qi = !1);
    var S = t.memoizedState;
    (s.state = S),
      mf(t, r, s, o),
      (f = t.memoizedState),
      c !== r || S !== f || Ln.current || qi
        ? (typeof _ == "function" && (hg(t, n, _, r), (f = t.memoizedState)),
          (c = qi || V0(t, n, c, r, S, f, p))
            ? (w ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = f)),
          (s.props = r),
          (s.state = f),
          (s.context = p),
          (r = c))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      uS(e, t),
      (c = t.memoizedProps),
      (p = t.type === t.elementType ? c : Ar(t.type, c)),
      (s.props = p),
      (w = t.pendingProps),
      (S = s.context),
      (f = n.contextType),
      typeof f == "object" && f !== null
        ? (f = Tr(f))
        : ((f = An(n) ? Vo : fn.current), (f = ou(t, f)));
    var I = n.getDerivedStateFromProps;
    (_ =
      typeof I == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((c !== w || S !== f) && G0(t, s, r, f)),
      (qi = !1),
      (S = t.memoizedState),
      (s.state = S),
      mf(t, r, s, o);
    var P = t.memoizedState;
    c !== w || S !== P || Ln.current || qi
      ? (typeof I == "function" && (hg(t, n, I, r), (P = t.memoizedState)),
        (p = qi || V0(t, n, p, r, S, P, f) || !1)
          ? (_ ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, P, f),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, P, f)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (c === e.memoizedProps && S === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (c === e.memoizedProps && S === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = P)),
        (s.props = r),
        (s.state = P),
        (s.context = f),
        (r = p))
      : (typeof s.componentDidUpdate != "function" ||
          (c === e.memoizedProps && S === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (c === e.memoizedProps && S === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return mg(e, t, n, r, u, o);
}
function mg(e, t, n, r, o, u) {
  MS(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && H0(t, n, !1), Ri(e, t, u);
  (r = t.stateNode), (_R.current = t);
  var c =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = uu(t, e.child, null, u)), (t.child = uu(t, null, c, u)))
      : _n(e, t, c, u),
    (t.memoizedState = r.state),
    o && H0(t, n, !0),
    t.child
  );
}
function FS(e) {
  var t = e.stateNode;
  t.pendingContext
    ? $0(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $0(e, t.context, !1),
    m_(e, t.containerInfo);
}
function ny(e, t, n, r, o) {
  return lu(), d_(o), (t.flags |= 256), _n(e, t, n, r), t.child;
}
var yg = { dehydrated: null, treeContext: null, retryLane: 0 };
function wg(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function zS(e, t, n) {
  var r = t.pendingProps,
    o = Tt.current,
    u = !1,
    s = (t.flags & 128) !== 0,
    c;
  if (
    ((c = s) ||
      (c = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    c
      ? ((u = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ct(Tt, o & 1),
    e === null)
  )
    return (
      dg(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          u
            ? ((r = t.mode),
              (u = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && u !== null
                ? ((u.childLanes = 0), (u.pendingProps = s))
                : (u = Qf(s, r, 0, null)),
              (e = Wo(e, r, n, null)),
              (u.return = t),
              (e.return = t),
              (u.sibling = e),
              (t.child = u),
              (t.child.memoizedState = wg(n)),
              (t.memoizedState = yg),
              e)
            : I_(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((c = o.dehydrated), c !== null)))
    return vR(e, t, s, r, c, o, n);
  if (u) {
    (u = r.fallback), (s = t.mode), (o = e.child), (c = o.sibling);
    var f = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = f),
          (t.deletions = null))
        : ((r = ao(o, f)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      c !== null ? (u = ao(c, u)) : ((u = Wo(u, s, n, null)), (u.flags |= 2)),
      (u.return = t),
      (r.return = t),
      (r.sibling = u),
      (t.child = r),
      (r = u),
      (u = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? wg(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (u.memoizedState = s),
      (u.childLanes = e.childLanes & ~n),
      (t.memoizedState = yg),
      r
    );
  }
  return (
    (u = e.child),
    (e = u.sibling),
    (r = ao(u, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function I_(e, t) {
  return (
    (t = Qf({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function yc(e, t, n, r) {
  return (
    r !== null && d_(r),
    uu(t, e.child, null, n),
    (e = I_(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function vR(e, t, n, r, o, u, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = yh(Error(q(422)))), yc(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((u = r.fallback),
        (o = t.mode),
        (r = Qf({ mode: "visible", children: r.children }, o, 0, null)),
        (u = Wo(u, o, s, null)),
        (u.flags |= 2),
        (r.return = t),
        (u.return = t),
        (r.sibling = u),
        (t.child = r),
        t.mode & 1 && uu(t, e.child, null, s),
        (t.child.memoizedState = wg(s)),
        (t.memoizedState = yg),
        u);
  if (!(t.mode & 1)) return yc(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var c = r.dgst;
    return (r = c), (u = Error(q(419))), (r = yh(u, r, void 0)), yc(e, t, s, r);
  }
  if (((c = (s & e.childLanes) !== 0), Nn || c)) {
    if (((r = Qt), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== u.retryLane &&
          ((u.retryLane = o), Pi(e, o), $r(r, e, o, -1));
    }
    return R_(), (r = yh(Error(q(421)))), yc(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = kR.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = u.treeContext),
      (qn = oo(o.nextSibling)),
      (Zn = t),
      (yt = !0),
      (Fr = null),
      e !== null &&
        ((vr[mr++] = Ii),
        (vr[mr++] = Ei),
        (vr[mr++] = Go),
        (Ii = e.id),
        (Ei = e.overflow),
        (Go = t)),
      (t = I_(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ry(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), pg(e.return, t, n);
}
function wh(e, t, n, r, o) {
  var u = e.memoizedState;
  u === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((u.isBackwards = t),
      (u.rendering = null),
      (u.renderingStartTime = 0),
      (u.last = r),
      (u.tail = n),
      (u.tailMode = o));
}
function $S(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    u = r.tail;
  if ((_n(e, t, r.children, n), (r = Tt.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ry(e, n, t);
        else if (e.tag === 19) ry(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ct(Tt, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && yf(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          wh(t, !1, o, n, u);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && yf(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        wh(t, !0, n, null, u);
        break;
      case "together":
        wh(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Uc(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ri(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Yo |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(q(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ao(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ao(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function mR(e, t, n) {
  switch (t.tag) {
    case 3:
      FS(t), lu();
      break;
    case 5:
      dS(t);
      break;
    case 1:
      An(t.type) && pf(t);
      break;
    case 4:
      m_(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ct(_f, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ct(Tt, Tt.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? zS(e, t, n)
          : (ct(Tt, Tt.current & 1),
            (e = Ri(e, t, n)),
            e !== null ? e.sibling : null);
      ct(Tt, Tt.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return $S(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ct(Tt, Tt.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), AS(e, t, n);
  }
  return Ri(e, t, n);
}
var HS, Sg, BS, US;
HS = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Sg = function () {};
BS = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Bo(ii.current);
    var u = null;
    switch (n) {
      case "input":
        (o = jh(e, o)), (r = jh(e, r)), (u = []);
        break;
      case "select":
        (o = It({}, o, { value: void 0 })),
          (r = It({}, r, { value: void 0 })),
          (u = []);
        break;
      case "textarea":
        (o = Gh(e, o)), (r = Gh(e, r)), (u = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ff);
    }
    Yh(n, r);
    var s;
    n = null;
    for (p in o)
      if (!r.hasOwnProperty(p) && o.hasOwnProperty(p) && o[p] != null)
        if (p === "style") {
          var c = o[p];
          for (s in c) c.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          p !== "dangerouslySetInnerHTML" &&
            p !== "children" &&
            p !== "suppressContentEditableWarning" &&
            p !== "suppressHydrationWarning" &&
            p !== "autoFocus" &&
            (Cs.hasOwnProperty(p)
              ? u || (u = [])
              : (u = u || []).push(p, null));
    for (p in r) {
      var f = r[p];
      if (
        ((c = o?.[p]),
        r.hasOwnProperty(p) && f !== c && (f != null || c != null))
      )
        if (p === "style")
          if (c) {
            for (s in c)
              !c.hasOwnProperty(s) ||
                (f && f.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in f)
              f.hasOwnProperty(s) &&
                c[s] !== f[s] &&
                (n || (n = {}), (n[s] = f[s]));
          } else n || (u || (u = []), u.push(p, n)), (n = f);
        else
          p === "dangerouslySetInnerHTML"
            ? ((f = f ? f.__html : void 0),
              (c = c ? c.__html : void 0),
              f != null && c !== f && (u = u || []).push(p, f))
            : p === "children"
            ? (typeof f != "string" && typeof f != "number") ||
              (u = u || []).push(p, "" + f)
            : p !== "suppressContentEditableWarning" &&
              p !== "suppressHydrationWarning" &&
              (Cs.hasOwnProperty(p)
                ? (f != null && p === "onScroll" && ht("scroll", e),
                  u || c === f || (u = []))
                : (u = u || []).push(p, f));
    }
    n && (u = u || []).push("style", n);
    var p = u;
    (t.updateQueue = p) && (t.flags |= 4);
  }
};
US = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ts(e, t) {
  if (!yt)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ln(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function yR(e, t, n) {
  var r = t.pendingProps;
  switch ((f_(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ln(t), null;
    case 1:
      return An(t.type) && df(), ln(t), null;
    case 3:
      return (
        (r = t.stateNode),
        su(),
        gt(Ln),
        gt(fn),
        w_(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (vc(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Fr !== null && (Og(Fr), (Fr = null)))),
        Sg(e, t),
        ln(t),
        null
      );
    case 5:
      y_(t);
      var o = Bo(Fs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        BS(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(q(166));
          return ln(t), null;
        }
        if (((e = Bo(ii.current)), vc(t))) {
          (r = t.stateNode), (n = t.type);
          var u = t.memoizedProps;
          switch (((r[ti] = t), (r[As] = u), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ht("cancel", r), ht("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ht("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < as.length; o++) ht(as[o], r);
              break;
            case "source":
              ht("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ht("error", r), ht("load", r);
              break;
            case "details":
              ht("toggle", r);
              break;
            case "input":
              d0(r, u), ht("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!u.multiple }),
                ht("invalid", r);
              break;
            case "textarea":
              h0(r, u), ht("invalid", r);
          }
          Yh(n, u), (o = null);
          for (var s in u)
            if (u.hasOwnProperty(s)) {
              var c = u[s];
              s === "children"
                ? typeof c == "string"
                  ? r.textContent !== c &&
                    (u.suppressHydrationWarning !== !0 &&
                      _c(r.textContent, c, e),
                    (o = ["children", c]))
                  : typeof c == "number" &&
                    r.textContent !== "" + c &&
                    (u.suppressHydrationWarning !== !0 &&
                      _c(r.textContent, c, e),
                    (o = ["children", "" + c]))
                : Cs.hasOwnProperty(s) &&
                  c != null &&
                  s === "onScroll" &&
                  ht("scroll", r);
            }
          switch (n) {
            case "input":
              sc(r), p0(r, u, !0);
              break;
            case "textarea":
              sc(r), g0(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof u.onClick == "function" && (r.onclick = ff);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = g1(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[ti] = t),
            (e[As] = r),
            HS(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Qh(n, r)), n)) {
              case "dialog":
                ht("cancel", e), ht("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ht("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < as.length; o++) ht(as[o], e);
                o = r;
                break;
              case "source":
                ht("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ht("error", e), ht("load", e), (o = r);
                break;
              case "details":
                ht("toggle", e), (o = r);
                break;
              case "input":
                d0(e, r), (o = jh(e, r)), ht("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = It({}, r, { value: void 0 })),
                  ht("invalid", e);
                break;
              case "textarea":
                h0(e, r), (o = Gh(e, r)), ht("invalid", e);
                break;
              default:
                o = r;
            }
            Yh(n, o), (c = o);
            for (u in c)
              if (c.hasOwnProperty(u)) {
                var f = c[u];
                u === "style"
                  ? m1(e, f)
                  : u === "dangerouslySetInnerHTML"
                  ? ((f = f ? f.__html : void 0), f != null && _1(e, f))
                  : u === "children"
                  ? typeof f == "string"
                    ? (n !== "textarea" || f !== "") && Is(e, f)
                    : typeof f == "number" && Is(e, "" + f)
                  : u !== "suppressContentEditableWarning" &&
                    u !== "suppressHydrationWarning" &&
                    u !== "autoFocus" &&
                    (Cs.hasOwnProperty(u)
                      ? f != null && u === "onScroll" && ht("scroll", e)
                      : f != null && qg(e, u, f, s));
              }
            switch (n) {
              case "input":
                sc(e), p0(e, r, !1);
                break;
              case "textarea":
                sc(e), g0(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + co(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (u = r.value),
                  u != null
                    ? Ql(e, !!r.multiple, u, !1)
                    : r.defaultValue != null &&
                      Ql(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ff);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ln(t), null;
    case 6:
      if (e && t.stateNode != null) US(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(q(166));
        if (((n = Bo(Fs.current)), Bo(ii.current), vc(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ti] = t),
            (u = r.nodeValue !== n) && ((e = Zn), e !== null))
          )
            switch (e.tag) {
              case 3:
                _c(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  _c(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          u && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ti] = t),
            (t.stateNode = r);
      }
      return ln(t), null;
    case 13:
      if (
        (gt(Tt),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (yt && qn !== null && t.mode & 1 && !(t.flags & 128))
          oS(), lu(), (t.flags |= 98560), (u = !1);
        else if (((u = vc(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!u) throw Error(q(318));
            if (
              ((u = t.memoizedState),
              (u = u !== null ? u.dehydrated : null),
              !u)
            )
              throw Error(q(317));
            u[ti] = t;
          } else
            lu(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ln(t), (u = !1);
        } else Fr !== null && (Og(Fr), (Fr = null)), (u = !0);
        if (!u) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Tt.current & 1 ? Wt === 0 && (Wt = 3) : R_())),
          t.updateQueue !== null && (t.flags |= 4),
          ln(t),
          null);
    case 4:
      return (
        su(), Sg(e, t), e === null && Ns(t.stateNode.containerInfo), ln(t), null
      );
    case 10:
      return g_(t.type._context), ln(t), null;
    case 17:
      return An(t.type) && df(), ln(t), null;
    case 19:
      if ((gt(Tt), (u = t.memoizedState), u === null)) return ln(t), null;
      if (((r = (t.flags & 128) !== 0), (s = u.rendering), s === null))
        if (r) ts(u, !1);
        else {
          if (Wt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = yf(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ts(u, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (u = n),
                    (e = r),
                    (u.flags &= 14680066),
                    (s = u.alternate),
                    s === null
                      ? ((u.childLanes = 0),
                        (u.lanes = e),
                        (u.child = null),
                        (u.subtreeFlags = 0),
                        (u.memoizedProps = null),
                        (u.memoizedState = null),
                        (u.updateQueue = null),
                        (u.dependencies = null),
                        (u.stateNode = null))
                      : ((u.childLanes = s.childLanes),
                        (u.lanes = s.lanes),
                        (u.child = s.child),
                        (u.subtreeFlags = 0),
                        (u.deletions = null),
                        (u.memoizedProps = s.memoizedProps),
                        (u.memoizedState = s.memoizedState),
                        (u.updateQueue = s.updateQueue),
                        (u.type = s.type),
                        (e = s.dependencies),
                        (u.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ct(Tt, (Tt.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          u.tail !== null &&
            Lt() > cu &&
            ((t.flags |= 128), (r = !0), ts(u, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = yf(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ts(u, !0),
              u.tail === null && u.tailMode === "hidden" && !s.alternate && !yt)
            )
              return ln(t), null;
          } else
            2 * Lt() - u.renderingStartTime > cu &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ts(u, !1), (t.lanes = 4194304));
        u.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = u.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (u.last = s));
      }
      return u.tail !== null
        ? ((t = u.tail),
          (u.rendering = t),
          (u.tail = t.sibling),
          (u.renderingStartTime = Lt()),
          (t.sibling = null),
          (n = Tt.current),
          ct(Tt, r ? (n & 1) | 2 : n & 1),
          t)
        : (ln(t), null);
    case 22:
    case 23:
      return (
        P_(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Gn & 1073741824 && (ln(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ln(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(q(156, t.tag));
}
function wR(e, t) {
  switch ((f_(t), t.tag)) {
    case 1:
      return (
        An(t.type) && df(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        su(),
        gt(Ln),
        gt(fn),
        w_(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return y_(t), null;
    case 13:
      if (
        (gt(Tt), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(q(340));
        lu();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return gt(Tt), null;
    case 4:
      return su(), null;
    case 10:
      return g_(t.type._context), null;
    case 22:
    case 23:
      return P_(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var wc = !1,
  sn = !1,
  SR = typeof WeakSet == "function" ? WeakSet : Set,
  ce = null;
function Kl(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Dt(e, t, r);
      }
    else n.current = null;
}
function xg(e, t, n) {
  try {
    n();
  } catch (r) {
    Dt(e, t, r);
  }
}
var iy = !1;
function xR(e, t) {
  if (((og = sf), (e = G1()), a_(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            u = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            c = -1,
            f = -1,
            p = 0,
            _ = 0,
            w = e,
            S = null;
          t: for (;;) {
            for (
              var I;
              w !== n || (o !== 0 && w.nodeType !== 3) || (c = s + o),
                w !== u || (r !== 0 && w.nodeType !== 3) || (f = s + r),
                w.nodeType === 3 && (s += w.nodeValue.length),
                (I = w.firstChild) !== null;

            )
              (S = w), (w = I);
            for (;;) {
              if (w === e) break t;
              if (
                (S === n && ++p === o && (c = s),
                S === u && ++_ === r && (f = s),
                (I = w.nextSibling) !== null)
              )
                break;
              (w = S), (S = w.parentNode);
            }
            w = I;
          }
          n = c === -1 || f === -1 ? null : { start: c, end: f };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    lg = { focusedElem: e, selectionRange: n }, sf = !1, ce = t;
    ce !== null;

  )
    if (((t = ce), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (ce = e);
    else
      for (; ce !== null; ) {
        t = ce;
        try {
          var P = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (P !== null) {
                  var b = P.memoizedProps,
                    F = P.memoizedState,
                    y = t.stateNode,
                    g = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? b : Ar(t.type, b),
                      F
                    );
                  y.__reactInternalSnapshotBeforeUpdate = g;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(q(163));
            }
        } catch (k) {
          Dt(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (ce = e);
          break;
        }
        ce = t.return;
      }
  return (P = iy), (iy = !1), P;
}
function ms(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var u = o.destroy;
        (o.destroy = void 0), u !== void 0 && xg(t, n, u);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Kf(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Tg(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function jS(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), jS(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ti], delete t[As], delete t[ag], delete t[iR], delete t[oR])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function WS(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function oy(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || WS(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function bg(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ff));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bg(e, t, n), e = e.sibling; e !== null; ) bg(e, t, n), (e = e.sibling);
}
function Cg(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Cg(e, t, n), e = e.sibling; e !== null; ) Cg(e, t, n), (e = e.sibling);
}
var Zt = null,
  Mr = !1;
function Yi(e, t, n) {
  for (n = n.child; n !== null; ) VS(e, t, n), (n = n.sibling);
}
function VS(e, t, n) {
  if (ri && typeof ri.onCommitFiberUnmount == "function")
    try {
      ri.onCommitFiberUnmount($f, n);
    } catch {}
  switch (n.tag) {
    case 5:
      sn || Kl(n, t);
    case 6:
      var r = Zt,
        o = Mr;
      (Zt = null),
        Yi(e, t, n),
        (Zt = r),
        (Mr = o),
        Zt !== null &&
          (Mr
            ? ((e = Zt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Zt.removeChild(n.stateNode));
      break;
    case 18:
      Zt !== null &&
        (Mr
          ? ((e = Zt),
            (n = n.stateNode),
            e.nodeType === 8
              ? ph(e.parentNode, n)
              : e.nodeType === 1 && ph(e, n),
            ks(e))
          : ph(Zt, n.stateNode));
      break;
    case 4:
      (r = Zt),
        (o = Mr),
        (Zt = n.stateNode.containerInfo),
        (Mr = !0),
        Yi(e, t, n),
        (Zt = r),
        (Mr = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !sn &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var u = o,
            s = u.destroy;
          (u = u.tag),
            s !== void 0 && (u & 2 || u & 4) && xg(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      Yi(e, t, n);
      break;
    case 1:
      if (
        !sn &&
        (Kl(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (c) {
          Dt(n, t, c);
        }
      Yi(e, t, n);
      break;
    case 21:
      Yi(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((sn = (r = sn) || n.memoizedState !== null), Yi(e, t, n), (sn = r))
        : Yi(e, t, n);
      break;
    default:
      Yi(e, t, n);
  }
}
function ly(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new SR()),
      t.forEach(function (r) {
        var o = PR.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Nr(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var u = e,
          s = t,
          c = s;
        e: for (; c !== null; ) {
          switch (c.tag) {
            case 5:
              (Zt = c.stateNode), (Mr = !1);
              break e;
            case 3:
              (Zt = c.stateNode.containerInfo), (Mr = !0);
              break e;
            case 4:
              (Zt = c.stateNode.containerInfo), (Mr = !0);
              break e;
          }
          c = c.return;
        }
        if (Zt === null) throw Error(q(160));
        VS(u, s, o), (Zt = null), (Mr = !1);
        var f = o.alternate;
        f !== null && (f.return = null), (o.return = null);
      } catch (p) {
        Dt(o, t, p);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) GS(t, e), (t = t.sibling);
}
function GS(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Nr(t, e), Xr(e), r & 4)) {
        try {
          ms(3, e, e.return), Kf(3, e);
        } catch (b) {
          Dt(e, e.return, b);
        }
        try {
          ms(5, e, e.return);
        } catch (b) {
          Dt(e, e.return, b);
        }
      }
      break;
    case 1:
      Nr(t, e), Xr(e), r & 512 && n !== null && Kl(n, n.return);
      break;
    case 5:
      if (
        (Nr(t, e),
        Xr(e),
        r & 512 && n !== null && Kl(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Is(o, "");
        } catch (b) {
          Dt(e, e.return, b);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var u = e.memoizedProps,
          s = n !== null ? n.memoizedProps : u,
          c = e.type,
          f = e.updateQueue;
        if (((e.updateQueue = null), f !== null))
          try {
            c === "input" && u.type === "radio" && u.name != null && p1(o, u),
              Qh(c, s);
            var p = Qh(c, u);
            for (s = 0; s < f.length; s += 2) {
              var _ = f[s],
                w = f[s + 1];
              _ === "style"
                ? m1(o, w)
                : _ === "dangerouslySetInnerHTML"
                ? _1(o, w)
                : _ === "children"
                ? Is(o, w)
                : qg(o, _, w, p);
            }
            switch (c) {
              case "input":
                Wh(o, u);
                break;
              case "textarea":
                h1(o, u);
                break;
              case "select":
                var S = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!u.multiple;
                var I = u.value;
                I != null
                  ? Ql(o, !!u.multiple, I, !1)
                  : S !== !!u.multiple &&
                    (u.defaultValue != null
                      ? Ql(o, !!u.multiple, u.defaultValue, !0)
                      : Ql(o, !!u.multiple, u.multiple ? [] : "", !1));
            }
            o[As] = u;
          } catch (b) {
            Dt(e, e.return, b);
          }
      }
      break;
    case 6:
      if ((Nr(t, e), Xr(e), r & 4)) {
        if (e.stateNode === null) throw Error(q(162));
        (o = e.stateNode), (u = e.memoizedProps);
        try {
          o.nodeValue = u;
        } catch (b) {
          Dt(e, e.return, b);
        }
      }
      break;
    case 3:
      if (
        (Nr(t, e), Xr(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ks(t.containerInfo);
        } catch (b) {
          Dt(e, e.return, b);
        }
      break;
    case 4:
      Nr(t, e), Xr(e);
      break;
    case 13:
      Nr(t, e),
        Xr(e),
        (o = e.child),
        o.flags & 8192 &&
          ((u = o.memoizedState !== null),
          (o.stateNode.isHidden = u),
          !u ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (O_ = Lt())),
        r & 4 && ly(e);
      break;
    case 22:
      if (
        ((_ = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((sn = (p = sn) || _), Nr(t, e), (sn = p)) : Nr(t, e),
        Xr(e),
        r & 8192)
      ) {
        if (
          ((p = e.memoizedState !== null),
          (e.stateNode.isHidden = p) && !_ && e.mode & 1)
        )
          for (ce = e, _ = e.child; _ !== null; ) {
            for (w = ce = _; ce !== null; ) {
              switch (((S = ce), (I = S.child), S.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ms(4, S, S.return);
                  break;
                case 1:
                  Kl(S, S.return);
                  var P = S.stateNode;
                  if (typeof P.componentWillUnmount == "function") {
                    (r = S), (n = S.return);
                    try {
                      (t = r),
                        (P.props = t.memoizedProps),
                        (P.state = t.memoizedState),
                        P.componentWillUnmount();
                    } catch (b) {
                      Dt(r, n, b);
                    }
                  }
                  break;
                case 5:
                  Kl(S, S.return);
                  break;
                case 22:
                  if (S.memoizedState !== null) {
                    sy(w);
                    continue;
                  }
              }
              I !== null ? ((I.return = S), (ce = I)) : sy(w);
            }
            _ = _.sibling;
          }
        e: for (_ = null, w = e; ; ) {
          if (w.tag === 5) {
            if (_ === null) {
              _ = w;
              try {
                (o = w.stateNode),
                  p
                    ? ((u = o.style),
                      typeof u.setProperty == "function"
                        ? u.setProperty("display", "none", "important")
                        : (u.display = "none"))
                    : ((c = w.stateNode),
                      (f = w.memoizedProps.style),
                      (s =
                        f != null && f.hasOwnProperty("display")
                          ? f.display
                          : null),
                      (c.style.display = v1("display", s)));
              } catch (b) {
                Dt(e, e.return, b);
              }
            }
          } else if (w.tag === 6) {
            if (_ === null)
              try {
                w.stateNode.nodeValue = p ? "" : w.memoizedProps;
              } catch (b) {
                Dt(e, e.return, b);
              }
          } else if (
            ((w.tag !== 22 && w.tag !== 23) ||
              w.memoizedState === null ||
              w === e) &&
            w.child !== null
          ) {
            (w.child.return = w), (w = w.child);
            continue;
          }
          if (w === e) break e;
          for (; w.sibling === null; ) {
            if (w.return === null || w.return === e) break e;
            _ === w && (_ = null), (w = w.return);
          }
          _ === w && (_ = null), (w.sibling.return = w.return), (w = w.sibling);
        }
      }
      break;
    case 19:
      Nr(t, e), Xr(e), r & 4 && ly(e);
      break;
    case 21:
      break;
    default:
      Nr(t, e), Xr(e);
  }
}
function Xr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (WS(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(q(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Is(o, ""), (r.flags &= -33));
          var u = oy(e);
          Cg(e, u, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            c = oy(e);
          bg(e, c, s);
          break;
        default:
          throw Error(q(161));
      }
    } catch (f) {
      Dt(e, e.return, f);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function TR(e, t, n) {
  (ce = e), KS(e);
}
function KS(e, t, n) {
  for (var r = (e.mode & 1) !== 0; ce !== null; ) {
    var o = ce,
      u = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || wc;
      if (!s) {
        var c = o.alternate,
          f = (c !== null && c.memoizedState !== null) || sn;
        c = wc;
        var p = sn;
        if (((wc = s), (sn = f) && !p))
          for (ce = o; ce !== null; )
            (s = ce),
              (f = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? ay(o)
                : f !== null
                ? ((f.return = s), (ce = f))
                : ay(o);
        for (; u !== null; ) (ce = u), KS(u), (u = u.sibling);
        (ce = o), (wc = c), (sn = p);
      }
      uy(e);
    } else
      o.subtreeFlags & 8772 && u !== null ? ((u.return = o), (ce = u)) : uy(e);
  }
}
function uy(e) {
  for (; ce !== null; ) {
    var t = ce;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              sn || Kf(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !sn)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ar(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var u = t.updateQueue;
              u !== null && W0(t, u, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                W0(t, s, n);
              }
              break;
            case 5:
              var c = t.stateNode;
              if (n === null && t.flags & 4) {
                n = c;
                var f = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    f.autoFocus && n.focus();
                    break;
                  case "img":
                    f.src && (n.src = f.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var p = t.alternate;
                if (p !== null) {
                  var _ = p.memoizedState;
                  if (_ !== null) {
                    var w = _.dehydrated;
                    w !== null && ks(w);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(q(163));
          }
        sn || (t.flags & 512 && Tg(t));
      } catch (S) {
        Dt(t, t.return, S);
      }
    }
    if (t === e) {
      ce = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (ce = n);
      break;
    }
    ce = t.return;
  }
}
function sy(e) {
  for (; ce !== null; ) {
    var t = ce;
    if (t === e) {
      ce = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (ce = n);
      break;
    }
    ce = t.return;
  }
}
function ay(e) {
  for (; ce !== null; ) {
    var t = ce;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Kf(4, t);
          } catch (f) {
            Dt(t, n, f);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (f) {
              Dt(t, o, f);
            }
          }
          var u = t.return;
          try {
            Tg(t);
          } catch (f) {
            Dt(t, u, f);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Tg(t);
          } catch (f) {
            Dt(t, s, f);
          }
      }
    } catch (f) {
      Dt(t, t.return, f);
    }
    if (t === e) {
      ce = null;
      break;
    }
    var c = t.sibling;
    if (c !== null) {
      (c.return = t.return), (ce = c);
      break;
    }
    ce = t.return;
  }
}
var bR = Math.ceil,
  xf = Li.ReactCurrentDispatcher,
  E_ = Li.ReactCurrentOwner,
  xr = Li.ReactCurrentBatchConfig,
  Ke = 0,
  Qt = null,
  zt = null,
  Jt = 0,
  Gn = 0,
  Yl = _o(0),
  Wt = 0,
  Bs = null,
  Yo = 0,
  Yf = 0,
  D_ = 0,
  ys = null,
  kn = null,
  O_ = 0,
  cu = 1 / 0,
  Si = null,
  Tf = !1,
  Ig = null,
  uo = null,
  Sc = !1,
  eo = null,
  bf = 0,
  ws = 0,
  Eg = null,
  jc = -1,
  Wc = 0;
function mn() {
  return Ke & 6 ? Lt() : jc !== -1 ? jc : (jc = Lt());
}
function so(e) {
  return e.mode & 1
    ? Ke & 2 && Jt !== 0
      ? Jt & -Jt
      : uR.transition !== null
      ? (Wc === 0 && (Wc = k1()), Wc)
      : ((e = Xe),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : F1(e.type))),
        e)
    : 1;
}
function $r(e, t, n, r) {
  if (50 < ws) throw ((ws = 0), (Eg = null), Error(q(185)));
  Ys(e, n, r),
    (!(Ke & 2) || e !== Qt) &&
      (e === Qt && (!(Ke & 2) && (Yf |= n), Wt === 4 && Zi(e, Jt)),
      Mn(e, r),
      n === 1 && Ke === 0 && !(t.mode & 1) && ((cu = Lt() + 500), Wf && vo()));
}
function Mn(e, t) {
  var n = e.callbackNode;
  uP(e, t);
  var r = uf(e, e === Qt ? Jt : 0);
  if (r === 0)
    n !== null && m0(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && m0(n), t === 1))
      e.tag === 0 ? lR(cy.bind(null, e)) : nS(cy.bind(null, e)),
        nR(function () {
          !(Ke & 6) && vo();
        }),
        (n = null);
    else {
      switch (P1(r)) {
        case 1:
          n = t_;
          break;
        case 4:
          n = D1;
          break;
        case 16:
          n = lf;
          break;
        case 536870912:
          n = O1;
          break;
        default:
          n = lf;
      }
      n = tx(n, YS.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function YS(e, t) {
  if (((jc = -1), (Wc = 0), Ke & 6)) throw Error(q(327));
  var n = e.callbackNode;
  if (eu() && e.callbackNode !== n) return null;
  var r = uf(e, e === Qt ? Jt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Cf(e, r);
  else {
    t = r;
    var o = Ke;
    Ke |= 2;
    var u = qS();
    (Qt !== e || Jt !== t) && ((Si = null), (cu = Lt() + 500), jo(e, t));
    do
      try {
        ER();
        break;
      } catch (c) {
        QS(e, c);
      }
    while (1);
    h_(),
      (xf.current = u),
      (Ke = o),
      zt !== null ? (t = 0) : ((Qt = null), (Jt = 0), (t = Wt));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = eg(e)), o !== 0 && ((r = o), (t = Dg(e, o)))), t === 1)
    )
      throw ((n = Bs), jo(e, 0), Zi(e, r), Mn(e, Lt()), n);
    if (t === 6) Zi(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !CR(o) &&
          ((t = Cf(e, r)),
          t === 2 && ((u = eg(e)), u !== 0 && ((r = u), (t = Dg(e, u)))),
          t === 1))
      )
        throw ((n = Bs), jo(e, 0), Zi(e, r), Mn(e, Lt()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(q(345));
        case 2:
          zo(e, kn, Si);
          break;
        case 3:
          if (
            (Zi(e, r), (r & 130023424) === r && ((t = O_ + 500 - Lt()), 10 < t))
          ) {
            if (uf(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              mn(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = sg(zo.bind(null, e, kn, Si), t);
            break;
          }
          zo(e, kn, Si);
          break;
        case 4:
          if ((Zi(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - zr(r);
            (u = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~u);
          }
          if (
            ((r = o),
            (r = Lt() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * bR(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = sg(zo.bind(null, e, kn, Si), r);
            break;
          }
          zo(e, kn, Si);
          break;
        case 5:
          zo(e, kn, Si);
          break;
        default:
          throw Error(q(329));
      }
    }
  }
  return Mn(e, Lt()), e.callbackNode === n ? YS.bind(null, e) : null;
}
function Dg(e, t) {
  var n = ys;
  return (
    e.current.memoizedState.isDehydrated && (jo(e, t).flags |= 256),
    (e = Cf(e, t)),
    e !== 2 && ((t = kn), (kn = n), t !== null && Og(t)),
    e
  );
}
function Og(e) {
  kn === null ? (kn = e) : kn.push.apply(kn, e);
}
function CR(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            u = o.getSnapshot;
          o = o.value;
          try {
            if (!Br(u(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Zi(e, t) {
  for (
    t &= ~D_,
      t &= ~Yf,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - zr(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function cy(e) {
  if (Ke & 6) throw Error(q(327));
  eu();
  var t = uf(e, 0);
  if (!(t & 1)) return Mn(e, Lt()), null;
  var n = Cf(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = eg(e);
    r !== 0 && ((t = r), (n = Dg(e, r)));
  }
  if (n === 1) throw ((n = Bs), jo(e, 0), Zi(e, t), Mn(e, Lt()), n);
  if (n === 6) throw Error(q(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zo(e, kn, Si),
    Mn(e, Lt()),
    null
  );
}
function k_(e, t) {
  var n = Ke;
  Ke |= 1;
  try {
    return e(t);
  } finally {
    (Ke = n), Ke === 0 && ((cu = Lt() + 500), Wf && vo());
  }
}
function Qo(e) {
  eo !== null && eo.tag === 0 && !(Ke & 6) && eu();
  var t = Ke;
  Ke |= 1;
  var n = xr.transition,
    r = Xe;
  try {
    if (((xr.transition = null), (Xe = 1), e)) return e();
  } finally {
    (Xe = r), (xr.transition = n), (Ke = t), !(Ke & 6) && vo();
  }
}
function P_() {
  (Gn = Yl.current), gt(Yl);
}
function jo(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), tR(n)), zt !== null))
    for (n = zt.return; n !== null; ) {
      var r = n;
      switch ((f_(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && df();
          break;
        case 3:
          su(), gt(Ln), gt(fn), w_();
          break;
        case 5:
          y_(r);
          break;
        case 4:
          su();
          break;
        case 13:
          gt(Tt);
          break;
        case 19:
          gt(Tt);
          break;
        case 10:
          g_(r.type._context);
          break;
        case 22:
        case 23:
          P_();
      }
      n = n.return;
    }
  if (
    ((Qt = e),
    (zt = e = ao(e.current, null)),
    (Jt = Gn = t),
    (Wt = 0),
    (Bs = null),
    (D_ = Yf = Yo = 0),
    (kn = ys = null),
    Ho !== null)
  ) {
    for (t = 0; t < Ho.length; t++)
      if (((n = Ho[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          u = n.pending;
        if (u !== null) {
          var s = u.next;
          (u.next = o), (r.next = s);
        }
        n.pending = r;
      }
    Ho = null;
  }
  return e;
}
function QS(e, t) {
  do {
    var n = zt;
    try {
      if ((h_(), (Hc.current = Sf), wf)) {
        for (var r = Ct.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        wf = !1;
      }
      if (
        ((Ko = 0),
        (Kt = Ut = Ct = null),
        (vs = !1),
        (zs = 0),
        (E_.current = null),
        n === null || n.return === null)
      ) {
        (Wt = 1), (Bs = t), (zt = null);
        break;
      }
      e: {
        var u = e,
          s = n.return,
          c = n,
          f = t;
        if (
          ((t = Jt),
          (c.flags |= 32768),
          f !== null && typeof f == "object" && typeof f.then == "function")
        ) {
          var p = f,
            _ = c,
            w = _.tag;
          if (!(_.mode & 1) && (w === 0 || w === 11 || w === 15)) {
            var S = _.alternate;
            S
              ? ((_.updateQueue = S.updateQueue),
                (_.memoizedState = S.memoizedState),
                (_.lanes = S.lanes))
              : ((_.updateQueue = null), (_.memoizedState = null));
          }
          var I = X0(s);
          if (I !== null) {
            (I.flags &= -257),
              Z0(I, s, c, u, t),
              I.mode & 1 && q0(u, p, t),
              (t = I),
              (f = p);
            var P = t.updateQueue;
            if (P === null) {
              var b = new Set();
              b.add(f), (t.updateQueue = b);
            } else P.add(f);
            break e;
          } else {
            if (!(t & 1)) {
              q0(u, p, t), R_();
              break e;
            }
            f = Error(q(426));
          }
        } else if (yt && c.mode & 1) {
          var F = X0(s);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256),
              Z0(F, s, c, u, t),
              d_(au(f, c));
            break e;
          }
        }
        (u = f = au(f, c)),
          Wt !== 4 && (Wt = 2),
          ys === null ? (ys = [u]) : ys.push(u),
          (u = s);
        do {
          switch (u.tag) {
            case 3:
              (u.flags |= 65536), (t &= -t), (u.lanes |= t);
              var y = RS(u, f, t);
              j0(u, y);
              break e;
            case 1:
              c = f;
              var g = u.type,
                m = u.stateNode;
              if (
                !(u.flags & 128) &&
                (typeof g.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (uo === null || !uo.has(m))))
              ) {
                (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                var k = NS(u, c, t);
                j0(u, k);
                break e;
              }
          }
          u = u.return;
        } while (u !== null);
      }
      ZS(n);
    } catch (O) {
      (t = O), zt === n && n !== null && (zt = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function qS() {
  var e = xf.current;
  return (xf.current = Sf), e === null ? Sf : e;
}
function R_() {
  (Wt === 0 || Wt === 3 || Wt === 2) && (Wt = 4),
    Qt === null || (!(Yo & 268435455) && !(Yf & 268435455)) || Zi(Qt, Jt);
}
function Cf(e, t) {
  var n = Ke;
  Ke |= 2;
  var r = qS();
  (Qt !== e || Jt !== t) && ((Si = null), jo(e, t));
  do
    try {
      IR();
      break;
    } catch (o) {
      QS(e, o);
    }
  while (1);
  if ((h_(), (Ke = n), (xf.current = r), zt !== null)) throw Error(q(261));
  return (Qt = null), (Jt = 0), Wt;
}
function IR() {
  for (; zt !== null; ) XS(zt);
}
function ER() {
  for (; zt !== null && !Zk(); ) XS(zt);
}
function XS(e) {
  var t = ex(e.alternate, e, Gn);
  (e.memoizedProps = e.pendingProps),
    t === null ? ZS(e) : (zt = t),
    (E_.current = null);
}
function ZS(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = wR(n, t)), n !== null)) {
        (n.flags &= 32767), (zt = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Wt = 6), (zt = null);
        return;
      }
    } else if (((n = yR(n, t, Gn)), n !== null)) {
      zt = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      zt = t;
      return;
    }
    zt = t = e;
  } while (t !== null);
  Wt === 0 && (Wt = 5);
}
function zo(e, t, n) {
  var r = Xe,
    o = xr.transition;
  try {
    (xr.transition = null), (Xe = 1), DR(e, t, n, r);
  } finally {
    (xr.transition = o), (Xe = r);
  }
  return null;
}
function DR(e, t, n, r) {
  do eu();
  while (eo !== null);
  if (Ke & 6) throw Error(q(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(q(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var u = n.lanes | n.childLanes;
  if (
    (sP(e, u),
    e === Qt && ((zt = Qt = null), (Jt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Sc ||
      ((Sc = !0),
      tx(lf, function () {
        return eu(), null;
      })),
    (u = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || u)
  ) {
    (u = xr.transition), (xr.transition = null);
    var s = Xe;
    Xe = 1;
    var c = Ke;
    (Ke |= 4),
      (E_.current = null),
      xR(e, n),
      GS(n, e),
      YP(lg),
      (sf = !!og),
      (lg = og = null),
      (e.current = n),
      TR(n),
      Jk(),
      (Ke = c),
      (Xe = s),
      (xr.transition = u);
  } else e.current = n;
  if (
    (Sc && ((Sc = !1), (eo = e), (bf = o)),
    (u = e.pendingLanes),
    u === 0 && (uo = null),
    nP(n.stateNode),
    Mn(e, Lt()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Tf) throw ((Tf = !1), (e = Ig), (Ig = null), e);
  return (
    bf & 1 && e.tag !== 0 && eu(),
    (u = e.pendingLanes),
    u & 1 ? (e === Eg ? ws++ : ((ws = 0), (Eg = e))) : (ws = 0),
    vo(),
    null
  );
}
function eu() {
  if (eo !== null) {
    var e = P1(bf),
      t = xr.transition,
      n = Xe;
    try {
      if (((xr.transition = null), (Xe = 16 > e ? 16 : e), eo === null))
        var r = !1;
      else {
        if (((e = eo), (eo = null), (bf = 0), Ke & 6)) throw Error(q(331));
        var o = Ke;
        for (Ke |= 4, ce = e.current; ce !== null; ) {
          var u = ce,
            s = u.child;
          if (ce.flags & 16) {
            var c = u.deletions;
            if (c !== null) {
              for (var f = 0; f < c.length; f++) {
                var p = c[f];
                for (ce = p; ce !== null; ) {
                  var _ = ce;
                  switch (_.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ms(8, _, u);
                  }
                  var w = _.child;
                  if (w !== null) (w.return = _), (ce = w);
                  else
                    for (; ce !== null; ) {
                      _ = ce;
                      var S = _.sibling,
                        I = _.return;
                      if ((jS(_), _ === p)) {
                        ce = null;
                        break;
                      }
                      if (S !== null) {
                        (S.return = I), (ce = S);
                        break;
                      }
                      ce = I;
                    }
                }
              }
              var P = u.alternate;
              if (P !== null) {
                var b = P.child;
                if (b !== null) {
                  P.child = null;
                  do {
                    var F = b.sibling;
                    (b.sibling = null), (b = F);
                  } while (b !== null);
                }
              }
              ce = u;
            }
          }
          if (u.subtreeFlags & 2064 && s !== null) (s.return = u), (ce = s);
          else
            e: for (; ce !== null; ) {
              if (((u = ce), u.flags & 2048))
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ms(9, u, u.return);
                }
              var y = u.sibling;
              if (y !== null) {
                (y.return = u.return), (ce = y);
                break e;
              }
              ce = u.return;
            }
        }
        var g = e.current;
        for (ce = g; ce !== null; ) {
          s = ce;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (ce = m);
          else
            e: for (s = g; ce !== null; ) {
              if (((c = ce), c.flags & 2048))
                try {
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kf(9, c);
                  }
                } catch (O) {
                  Dt(c, c.return, O);
                }
              if (c === s) {
                ce = null;
                break e;
              }
              var k = c.sibling;
              if (k !== null) {
                (k.return = c.return), (ce = k);
                break e;
              }
              ce = c.return;
            }
        }
        if (
          ((Ke = o), vo(), ri && typeof ri.onPostCommitFiberRoot == "function")
        )
          try {
            ri.onPostCommitFiberRoot($f, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Xe = n), (xr.transition = t);
    }
  }
  return !1;
}
function fy(e, t, n) {
  (t = au(n, t)),
    (t = RS(e, t, 1)),
    (e = lo(e, t, 1)),
    (t = mn()),
    e !== null && (Ys(e, 1, t), Mn(e, t));
}
function Dt(e, t, n) {
  if (e.tag === 3) fy(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        fy(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (uo === null || !uo.has(r)))
        ) {
          (e = au(n, e)),
            (e = NS(t, e, 1)),
            (t = lo(t, e, 1)),
            (e = mn()),
            t !== null && (Ys(t, 1, e), Mn(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function OR(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = mn()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Qt === e &&
      (Jt & n) === n &&
      (Wt === 4 || (Wt === 3 && (Jt & 130023424) === Jt && 500 > Lt() - O_)
        ? jo(e, 0)
        : (D_ |= n)),
    Mn(e, t);
}
function JS(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = fc), (fc <<= 1), !(fc & 130023424) && (fc = 4194304))
      : (t = 1));
  var n = mn();
  (e = Pi(e, t)), e !== null && (Ys(e, t, n), Mn(e, n));
}
function kR(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), JS(e, n);
}
function PR(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(q(314));
  }
  r !== null && r.delete(t), JS(e, n);
}
var ex;
ex = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ln.current) Nn = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Nn = !1), mR(e, t, n);
      Nn = !!(e.flags & 131072);
    }
  else (Nn = !1), yt && t.flags & 1048576 && rS(t, gf, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Uc(e, t), (e = t.pendingProps);
      var o = ou(t, fn.current);
      Jl(t, n), (o = x_(null, t, r, e, o, n));
      var u = T_();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            An(r) ? ((u = !0), pf(t)) : (u = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            v_(t),
            (o.updater = Vf),
            (t.stateNode = o),
            (o._reactInternals = t),
            gg(t, r, e, n),
            (t = mg(null, t, r, !0, u, n)))
          : ((t.tag = 0), yt && u && c_(t), _n(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Uc(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = NR(r)),
          (e = Ar(r, e)),
          o)
        ) {
          case 0:
            t = vg(null, t, r, e, n);
            break e;
          case 1:
            t = ty(null, t, r, e, n);
            break e;
          case 11:
            t = J0(null, t, r, e, n);
            break e;
          case 14:
            t = ey(null, t, r, Ar(r.type, e), n);
            break e;
        }
        throw Error(q(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ar(r, o)),
        vg(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ar(r, o)),
        ty(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((FS(t), e === null)) throw Error(q(387));
        (r = t.pendingProps),
          (u = t.memoizedState),
          (o = u.element),
          uS(e, t),
          mf(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), u.isDehydrated))
          if (
            ((u = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = u),
            (t.memoizedState = u),
            t.flags & 256)
          ) {
            (o = au(Error(q(423)), t)), (t = ny(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = au(Error(q(424)), t)), (t = ny(e, t, r, n, o));
            break e;
          } else
            for (
              qn = oo(t.stateNode.containerInfo.firstChild),
                Zn = t,
                yt = !0,
                Fr = null,
                n = fS(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((lu(), r === o)) {
            t = Ri(e, t, n);
            break e;
          }
          _n(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        dS(t),
        e === null && dg(t),
        (r = t.type),
        (o = t.pendingProps),
        (u = e !== null ? e.memoizedProps : null),
        (s = o.children),
        ug(r, o) ? (s = null) : u !== null && ug(r, u) && (t.flags |= 32),
        MS(e, t),
        _n(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && dg(t), null;
    case 13:
      return zS(e, t, n);
    case 4:
      return (
        m_(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = uu(t, null, r, n)) : _n(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ar(r, o)),
        J0(e, t, r, o, n)
      );
    case 7:
      return _n(e, t, t.pendingProps, n), t.child;
    case 8:
      return _n(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return _n(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (u = t.memoizedProps),
          (s = o.value),
          ct(_f, r._currentValue),
          (r._currentValue = s),
          u !== null)
        )
          if (Br(u.value, s)) {
            if (u.children === o.children && !Ln.current) {
              t = Ri(e, t, n);
              break e;
            }
          } else
            for (u = t.child, u !== null && (u.return = t); u !== null; ) {
              var c = u.dependencies;
              if (c !== null) {
                s = u.child;
                for (var f = c.firstContext; f !== null; ) {
                  if (f.context === r) {
                    if (u.tag === 1) {
                      (f = Di(-1, n & -n)), (f.tag = 2);
                      var p = u.updateQueue;
                      if (p !== null) {
                        p = p.shared;
                        var _ = p.pending;
                        _ === null
                          ? (f.next = f)
                          : ((f.next = _.next), (_.next = f)),
                          (p.pending = f);
                      }
                    }
                    (u.lanes |= n),
                      (f = u.alternate),
                      f !== null && (f.lanes |= n),
                      pg(u.return, n, t),
                      (c.lanes |= n);
                    break;
                  }
                  f = f.next;
                }
              } else if (u.tag === 10) s = u.type === t.type ? null : u.child;
              else if (u.tag === 18) {
                if (((s = u.return), s === null)) throw Error(q(341));
                (s.lanes |= n),
                  (c = s.alternate),
                  c !== null && (c.lanes |= n),
                  pg(s, n, t),
                  (s = u.sibling);
              } else s = u.child;
              if (s !== null) s.return = u;
              else
                for (s = u; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((u = s.sibling), u !== null)) {
                    (u.return = s.return), (s = u);
                    break;
                  }
                  s = s.return;
                }
              u = s;
            }
        _n(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Jl(t, n),
        (o = Tr(o)),
        (r = r(o)),
        (t.flags |= 1),
        _n(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Ar(r, t.pendingProps)),
        (o = Ar(r.type, o)),
        ey(e, t, r, o, n)
      );
    case 15:
      return LS(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ar(r, o)),
        Uc(e, t),
        (t.tag = 1),
        An(r) ? ((e = !0), pf(t)) : (e = !1),
        Jl(t, n),
        aS(t, r, o),
        gg(t, r, o, n),
        mg(null, t, r, !0, e, n)
      );
    case 19:
      return $S(e, t, n);
    case 22:
      return AS(e, t, n);
  }
  throw Error(q(156, t.tag));
};
function tx(e, t) {
  return E1(e, t);
}
function RR(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function wr(e, t, n, r) {
  return new RR(e, t, n, r);
}
function N_(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function NR(e) {
  if (typeof e == "function") return N_(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Zg)) return 11;
    if (e === Jg) return 14;
  }
  return 2;
}
function ao(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = wr(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Vc(e, t, n, r, o, u) {
  var s = 2;
  if (((r = e), typeof e == "function")) N_(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case zl:
        return Wo(n.children, o, u, t);
      case Xg:
        (s = 8), (o |= 8);
        break;
      case $h:
        return (
          (e = wr(12, n, t, o | 2)), (e.elementType = $h), (e.lanes = u), e
        );
      case Hh:
        return (e = wr(13, n, t, o)), (e.elementType = Hh), (e.lanes = u), e;
      case Bh:
        return (e = wr(19, n, t, o)), (e.elementType = Bh), (e.lanes = u), e;
      case c1:
        return Qf(n, o, u, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case s1:
              s = 10;
              break e;
            case a1:
              s = 9;
              break e;
            case Zg:
              s = 11;
              break e;
            case Jg:
              s = 14;
              break e;
            case Qi:
              (s = 16), (r = null);
              break e;
          }
        throw Error(q(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = wr(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = u), t
  );
}
function Wo(e, t, n, r) {
  return (e = wr(7, e, r, t)), (e.lanes = n), e;
}
function Qf(e, t, n, r) {
  return (
    (e = wr(22, e, r, t)),
    (e.elementType = c1),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Sh(e, t, n) {
  return (e = wr(6, e, null, t)), (e.lanes = n), e;
}
function xh(e, t, n) {
  return (
    (t = wr(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function LR(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = nh(0)),
    (this.expirationTimes = nh(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = nh(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function L_(e, t, n, r, o, u, s, c, f) {
  return (
    (e = new LR(e, t, n, c, f)),
    t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
    (u = wr(3, null, null, t)),
    (e.current = u),
    (u.stateNode = e),
    (u.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    v_(u),
    e
  );
}
function AR(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Fl,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function nx(e) {
  if (!e) return fo;
  e = e._reactInternals;
  e: {
    if (nl(e) !== e || e.tag !== 1) throw Error(q(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (An(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(q(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (An(n)) return tS(e, n, t);
  }
  return t;
}
function rx(e, t, n, r, o, u, s, c, f) {
  return (
    (e = L_(n, r, !0, e, o, u, s, c, f)),
    (e.context = nx(null)),
    (n = e.current),
    (r = mn()),
    (o = so(n)),
    (u = Di(r, o)),
    (u.callback = t ?? null),
    lo(n, u, o),
    (e.current.lanes = o),
    Ys(e, o, r),
    Mn(e, r),
    e
  );
}
function qf(e, t, n, r) {
  var o = t.current,
    u = mn(),
    s = so(o);
  return (
    (n = nx(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Di(u, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = lo(o, t, s)),
    e !== null && ($r(e, o, s, u), $c(e, o, s)),
    s
  );
}
function If(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function dy(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function A_(e, t) {
  dy(e, t), (e = e.alternate) && dy(e, t);
}
function MR() {
  return null;
}
var ix =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function M_(e) {
  this._internalRoot = e;
}
Xf.prototype.render = M_.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(q(409));
  qf(e, t, null, null);
};
Xf.prototype.unmount = M_.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Qo(function () {
      qf(null, e, null, null);
    }),
      (t[ki] = null);
  }
};
function Xf(e) {
  this._internalRoot = e;
}
Xf.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = L1();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Xi.length && t !== 0 && t < Xi[n].priority; n++);
    Xi.splice(n, 0, e), n === 0 && M1(e);
  }
};
function F_(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Zf(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function py() {}
function FR(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var u = r;
      r = function () {
        var p = If(s);
        u.call(p);
      };
    }
    var s = rx(t, r, e, 0, null, !1, !1, "", py);
    return (
      (e._reactRootContainer = s),
      (e[ki] = s.current),
      Ns(e.nodeType === 8 ? e.parentNode : e),
      Qo(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var c = r;
    r = function () {
      var p = If(f);
      c.call(p);
    };
  }
  var f = L_(e, 0, !1, null, null, !1, !1, "", py);
  return (
    (e._reactRootContainer = f),
    (e[ki] = f.current),
    Ns(e.nodeType === 8 ? e.parentNode : e),
    Qo(function () {
      qf(t, f, n, r);
    }),
    f
  );
}
function Jf(e, t, n, r, o) {
  var u = n._reactRootContainer;
  if (u) {
    var s = u;
    if (typeof o == "function") {
      var c = o;
      o = function () {
        var f = If(s);
        c.call(f);
      };
    }
    qf(t, s, e, o);
  } else s = FR(n, t, e, o, r);
  return If(s);
}
R1 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ss(t.pendingLanes);
        n !== 0 &&
          (n_(t, n | 1), Mn(t, Lt()), !(Ke & 6) && ((cu = Lt() + 500), vo()));
      }
      break;
    case 13:
      Qo(function () {
        var r = Pi(e, 1);
        if (r !== null) {
          var o = mn();
          $r(r, e, 1, o);
        }
      }),
        A_(e, 1);
  }
};
r_ = function (e) {
  if (e.tag === 13) {
    var t = Pi(e, 134217728);
    if (t !== null) {
      var n = mn();
      $r(t, e, 134217728, n);
    }
    A_(e, 134217728);
  }
};
N1 = function (e) {
  if (e.tag === 13) {
    var t = so(e),
      n = Pi(e, t);
    if (n !== null) {
      var r = mn();
      $r(n, e, t, r);
    }
    A_(e, t);
  }
};
L1 = function () {
  return Xe;
};
A1 = function (e, t) {
  var n = Xe;
  try {
    return (Xe = e), t();
  } finally {
    Xe = n;
  }
};
Xh = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Wh(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = jf(r);
            if (!o) throw Error(q(90));
            d1(r), Wh(r, o);
          }
        }
      }
      break;
    case "textarea":
      h1(e, n);
      break;
    case "select":
      (t = n.value), t != null && Ql(e, !!n.multiple, t, !1);
  }
};
S1 = k_;
x1 = Qo;
var zR = { usingClientEntryPoint: !1, Events: [qs, Ul, jf, y1, w1, k_] },
  ns = {
    findFiberByHostInstance: $o,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  $R = {
    bundleType: ns.bundleType,
    version: ns.version,
    rendererPackageName: ns.rendererPackageName,
    rendererConfig: ns.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Li.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = C1(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ns.findFiberByHostInstance || MR,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xc.isDisabled && xc.supportsFiber)
    try {
      ($f = xc.inject($R)), (ri = xc);
    } catch {}
}
nr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zR;
nr.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!F_(t)) throw Error(q(200));
  return AR(e, t, null, n);
};
nr.createRoot = function (e, t) {
  if (!F_(e)) throw Error(q(299));
  var n = !1,
    r = "",
    o = ix;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = L_(e, 1, !1, null, null, n, !1, r, o)),
    (e[ki] = t.current),
    Ns(e.nodeType === 8 ? e.parentNode : e),
    new M_(t)
  );
};
nr.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(q(188))
      : ((e = Object.keys(e).join(",")), Error(q(268, e)));
  return (e = C1(t)), (e = e === null ? null : e.stateNode), e;
};
nr.flushSync = function (e) {
  return Qo(e);
};
nr.hydrate = function (e, t, n) {
  if (!Zf(t)) throw Error(q(200));
  return Jf(null, e, t, !0, n);
};
nr.hydrateRoot = function (e, t, n) {
  if (!F_(e)) throw Error(q(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    u = "",
    s = ix;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = rx(t, null, e, 1, n ?? null, o, !1, u, s)),
    (e[ki] = t.current),
    Ns(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Xf(t);
};
nr.render = function (e, t, n) {
  if (!Zf(t)) throw Error(q(200));
  return Jf(null, e, t, !1, n);
};
nr.unmountComponentAtNode = function (e) {
  if (!Zf(e)) throw Error(q(40));
  return e._reactRootContainer
    ? (Qo(function () {
        Jf(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ki] = null);
        });
      }),
      !0)
    : !1;
};
nr.unstable_batchedUpdates = k_;
nr.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Zf(n)) throw Error(q(200));
  if (e == null || e._reactInternals === void 0) throw Error(q(38));
  return Jf(e, t, n, !1, r);
};
nr.version = "18.2.0-next-9e3b772b8-20220608";
function ox() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ox);
    } catch (e) {
      console.error(e);
    }
}
ox(), (r1.exports = nr);
var lx = r1.exports;
const HR = el(lx);
var hy = lx;
(Fh.createRoot = hy.createRoot), (Fh.hydrateRoot = hy.hydrateRoot);
var ux = { exports: {} },
  Ze = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qt = typeof Symbol == "function" && Symbol.for,
  z_ = qt ? Symbol.for("react.element") : 60103,
  $_ = qt ? Symbol.for("react.portal") : 60106,
  ed = qt ? Symbol.for("react.fragment") : 60107,
  td = qt ? Symbol.for("react.strict_mode") : 60108,
  nd = qt ? Symbol.for("react.profiler") : 60114,
  rd = qt ? Symbol.for("react.provider") : 60109,
  id = qt ? Symbol.for("react.context") : 60110,
  H_ = qt ? Symbol.for("react.async_mode") : 60111,
  od = qt ? Symbol.for("react.concurrent_mode") : 60111,
  ld = qt ? Symbol.for("react.forward_ref") : 60112,
  ud = qt ? Symbol.for("react.suspense") : 60113,
  BR = qt ? Symbol.for("react.suspense_list") : 60120,
  sd = qt ? Symbol.for("react.memo") : 60115,
  ad = qt ? Symbol.for("react.lazy") : 60116,
  UR = qt ? Symbol.for("react.block") : 60121,
  jR = qt ? Symbol.for("react.fundamental") : 60117,
  WR = qt ? Symbol.for("react.responder") : 60118,
  VR = qt ? Symbol.for("react.scope") : 60119;
function ir(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case z_:
        switch (((e = e.type), e)) {
          case H_:
          case od:
          case ed:
          case nd:
          case td:
          case ud:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case id:
              case ld:
              case ad:
              case sd:
              case rd:
                return e;
              default:
                return t;
            }
        }
      case $_:
        return t;
    }
  }
}
function sx(e) {
  return ir(e) === od;
}
Ze.AsyncMode = H_;
Ze.ConcurrentMode = od;
Ze.ContextConsumer = id;
Ze.ContextProvider = rd;
Ze.Element = z_;
Ze.ForwardRef = ld;
Ze.Fragment = ed;
Ze.Lazy = ad;
Ze.Memo = sd;
Ze.Portal = $_;
Ze.Profiler = nd;
Ze.StrictMode = td;
Ze.Suspense = ud;
Ze.isAsyncMode = function (e) {
  return sx(e) || ir(e) === H_;
};
Ze.isConcurrentMode = sx;
Ze.isContextConsumer = function (e) {
  return ir(e) === id;
};
Ze.isContextProvider = function (e) {
  return ir(e) === rd;
};
Ze.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === z_;
};
Ze.isForwardRef = function (e) {
  return ir(e) === ld;
};
Ze.isFragment = function (e) {
  return ir(e) === ed;
};
Ze.isLazy = function (e) {
  return ir(e) === ad;
};
Ze.isMemo = function (e) {
  return ir(e) === sd;
};
Ze.isPortal = function (e) {
  return ir(e) === $_;
};
Ze.isProfiler = function (e) {
  return ir(e) === nd;
};
Ze.isStrictMode = function (e) {
  return ir(e) === td;
};
Ze.isSuspense = function (e) {
  return ir(e) === ud;
};
Ze.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === ed ||
    e === od ||
    e === nd ||
    e === td ||
    e === ud ||
    e === BR ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === ad ||
        e.$$typeof === sd ||
        e.$$typeof === rd ||
        e.$$typeof === id ||
        e.$$typeof === ld ||
        e.$$typeof === jR ||
        e.$$typeof === WR ||
        e.$$typeof === VR ||
        e.$$typeof === UR))
  );
};
Ze.typeOf = ir;
ux.exports = Ze;
var GR = ux.exports,
  B_ = GR,
  KR = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  YR = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  QR = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  ax = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  U_ = {};
U_[B_.ForwardRef] = QR;
U_[B_.Memo] = ax;
function gy(e) {
  return B_.isMemo(e) ? ax : U_[e.$$typeof] || KR;
}
var qR = Object.defineProperty,
  XR = Object.getOwnPropertyNames,
  _y = Object.getOwnPropertySymbols,
  ZR = Object.getOwnPropertyDescriptor,
  JR = Object.getPrototypeOf,
  vy = Object.prototype;
function cx(e, t, n) {
  if (typeof t != "string") {
    if (vy) {
      var r = JR(t);
      r && r !== vy && cx(e, r, n);
    }
    var o = XR(t);
    _y && (o = o.concat(_y(t)));
    for (var u = gy(e), s = gy(t), c = 0; c < o.length; ++c) {
      var f = o[c];
      if (!YR[f] && !(n && n[f]) && !(s && s[f]) && !(u && u[f])) {
        var p = ZR(t, f);
        try {
          qR(e, f, p);
        } catch {}
      }
    }
  }
  return e;
}
var e2 = cx;
const fx = el(e2);
var dx = "Expected a function",
  my = 0 / 0,
  t2 = "[object Symbol]",
  n2 = /^\s+|\s+$/g,
  r2 = /^[-+]0x[0-9a-f]+$/i,
  i2 = /^0b[01]+$/i,
  o2 = /^0o[0-7]+$/i,
  l2 = parseInt,
  u2 = typeof Yn == "object" && Yn && Yn.Object === Object && Yn,
  s2 = typeof self == "object" && self && self.Object === Object && self,
  a2 = u2 || s2 || Function("return this")(),
  c2 = Object.prototype,
  f2 = c2.toString,
  d2 = Math.max,
  p2 = Math.min,
  Th = function () {
    return a2.Date.now();
  };
function h2(e, t, n) {
  var r,
    o,
    u,
    s,
    c,
    f,
    p = 0,
    _ = !1,
    w = !1,
    S = !0;
  if (typeof e != "function") throw new TypeError(dx);
  (t = yy(t) || 0),
    Ef(n) &&
      ((_ = !!n.leading),
      (w = "maxWait" in n),
      (u = w ? d2(yy(n.maxWait) || 0, t) : u),
      (S = "trailing" in n ? !!n.trailing : S));
  function I(C) {
    var N = r,
      z = o;
    return (r = o = void 0), (p = C), (s = e.apply(z, N)), s;
  }
  function P(C) {
    return (p = C), (c = setTimeout(y, t)), _ ? I(C) : s;
  }
  function b(C) {
    var N = C - f,
      z = C - p,
      Y = t - N;
    return w ? p2(Y, u - z) : Y;
  }
  function F(C) {
    var N = C - f,
      z = C - p;
    return f === void 0 || N >= t || N < 0 || (w && z >= u);
  }
  function y() {
    var C = Th();
    if (F(C)) return g(C);
    c = setTimeout(y, b(C));
  }
  function g(C) {
    return (c = void 0), S && r ? I(C) : ((r = o = void 0), s);
  }
  function m() {
    c !== void 0 && clearTimeout(c), (p = 0), (r = f = o = c = void 0);
  }
  function k() {
    return c === void 0 ? s : g(Th());
  }
  function O() {
    var C = Th(),
      N = F(C);
    if (((r = arguments), (o = this), (f = C), N)) {
      if (c === void 0) return P(f);
      if (w) return (c = setTimeout(y, t)), I(f);
    }
    return c === void 0 && (c = setTimeout(y, t)), s;
  }
  return (O.cancel = m), (O.flush = k), O;
}
function g2(e, t, n) {
  var r = !0,
    o = !0;
  if (typeof e != "function") throw new TypeError(dx);
  return (
    Ef(n) &&
      ((r = "leading" in n ? !!n.leading : r),
      (o = "trailing" in n ? !!n.trailing : o)),
    h2(e, t, { leading: r, maxWait: t, trailing: o })
  );
}
function Ef(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function _2(e) {
  return !!e && typeof e == "object";
}
function v2(e) {
  return typeof e == "symbol" || (_2(e) && f2.call(e) == t2);
}
function yy(e) {
  if (typeof e == "number") return e;
  if (v2(e)) return my;
  if (Ef(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ef(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(n2, "");
  var n = i2.test(e);
  return n || o2.test(e) ? l2(e.slice(2), n ? 2 : 8) : r2.test(e) ? my : +e;
}
var m2 = g2;
const y2 = el(m2);
var cd = tt.createContext({ dragDropManager: void 0 }),
  yr;
(function (e) {
  (e.SOURCE = "SOURCE"), (e.TARGET = "TARGET");
})(yr || (yr = {}));
function ve(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
    o < n;
    o++
  )
    r[o - 2] = arguments[o];
  if (!e) {
    var u;
    if (t === void 0)
      u = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      var s = 0;
      (u = new Error(
        t.replace(/%s/g, function () {
          return r[s++];
        })
      )),
        (u.name = "Invariant Violation");
    }
    throw ((u.framesToPop = 1), u);
  }
}
var j_ = "dnd-core/INIT_COORDS",
  fd = "dnd-core/BEGIN_DRAG",
  W_ = "dnd-core/PUBLISH_DRAG_SOURCE",
  dd = "dnd-core/HOVER",
  pd = "dnd-core/DROP",
  hd = "dnd-core/END_DRAG";
function wy(e, t) {
  return {
    type: j_,
    payload: { sourceClientOffset: t || null, clientOffset: e || null },
  };
}
function Gc(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Gc = function (n) {
          return typeof n;
        })
      : (Gc = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Gc(e)
  );
}
function w2(e, t, n) {
  return t.split(".").reduce(function (r, o) {
    return r && r[o] ? r[o] : n || null;
  }, e);
}
function S2(e, t) {
  return e.filter(function (n) {
    return n !== t;
  });
}
function px(e) {
  return Gc(e) === "object";
}
function x2(e, t) {
  var n = new Map(),
    r = function (s) {
      n.set(s, n.has(s) ? n.get(s) + 1 : 1);
    };
  e.forEach(r), t.forEach(r);
  var o = [];
  return (
    n.forEach(function (u, s) {
      u === 1 && o.push(s);
    }),
    o
  );
}
function T2(e, t) {
  return e.filter(function (n) {
    return t.indexOf(n) > -1;
  });
}
var b2 = {
  type: j_,
  payload: { clientOffset: null, sourceClientOffset: null },
};
function C2(e) {
  return function () {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
      r =
        arguments.length > 1 && arguments[1] !== void 0
          ? arguments[1]
          : { publishSource: !0 },
      o = r.publishSource,
      u = o === void 0 ? !0 : o,
      s = r.clientOffset,
      c = r.getSourceClientOffset,
      f = e.getMonitor(),
      p = e.getRegistry();
    e.dispatch(wy(s)), I2(n, f, p);
    var _ = O2(n, f);
    if (_ === null) {
      e.dispatch(b2);
      return;
    }
    var w = null;
    if (s) {
      if (!c) throw new Error("getSourceClientOffset must be defined");
      E2(c), (w = c(_));
    }
    e.dispatch(wy(s, w));
    var S = p.getSource(_),
      I = S.beginDrag(f, _);
    if (I != null) {
      D2(I), p.pinSource(_);
      var P = p.getSourceType(_);
      return {
        type: fd,
        payload: {
          itemType: P,
          item: I,
          sourceId: _,
          clientOffset: s || null,
          sourceClientOffset: w || null,
          isSourcePublic: !!u,
        },
      };
    }
  };
}
function I2(e, t, n) {
  ve(!t.isDragging(), "Cannot call beginDrag while dragging."),
    e.forEach(function (r) {
      ve(n.getSource(r), "Expected sourceIds to be registered.");
    });
}
function E2(e) {
  ve(
    typeof e == "function",
    "When clientOffset is provided, getSourceClientOffset must be a function."
  );
}
function D2(e) {
  ve(px(e), "Item must be an object.");
}
function O2(e, t) {
  for (var n = null, r = e.length - 1; r >= 0; r--)
    if (t.canDragSource(e[r])) {
      n = e[r];
      break;
    }
  return n;
}
function k2(e) {
  return function () {
    var n = e.getMonitor();
    if (n.isDragging()) return { type: W_ };
  };
}
function kg(e, t) {
  return t === null
    ? e === null
    : Array.isArray(e)
    ? e.some(function (n) {
        return n === t;
      })
    : e === t;
}
function P2(e) {
  return function (n) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      o = r.clientOffset;
    R2(n);
    var u = n.slice(0),
      s = e.getMonitor(),
      c = e.getRegistry();
    N2(u, s, c);
    var f = s.getItemType();
    return (
      L2(u, c, f),
      A2(u, s, c),
      { type: dd, payload: { targetIds: u, clientOffset: o || null } }
    );
  };
}
function R2(e) {
  ve(Array.isArray(e), "Expected targetIds to be an array.");
}
function N2(e, t, n) {
  ve(t.isDragging(), "Cannot call hover while not dragging."),
    ve(!t.didDrop(), "Cannot call hover after drop.");
  for (var r = 0; r < e.length; r++) {
    var o = e[r];
    ve(
      e.lastIndexOf(o) === r,
      "Expected targetIds to be unique in the passed array."
    );
    var u = n.getTarget(o);
    ve(u, "Expected targetIds to be registered.");
  }
}
function L2(e, t, n) {
  for (var r = e.length - 1; r >= 0; r--) {
    var o = e[r],
      u = t.getTargetType(o);
    kg(u, n) || e.splice(r, 1);
  }
}
function A2(e, t, n) {
  e.forEach(function (r) {
    var o = n.getTarget(r);
    o.hover(t, r);
  });
}
function Sy(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function xy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Sy(Object(n), !0).forEach(function (r) {
          M2(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Sy(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function M2(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function F2(e) {
  return function () {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = e.getMonitor(),
      o = e.getRegistry();
    z2(r);
    var u = B2(r);
    u.forEach(function (s, c) {
      var f = $2(s, c, o, r),
        p = { type: pd, payload: { dropResult: xy(xy({}, n), f) } };
      e.dispatch(p);
    });
  };
}
function z2(e) {
  ve(e.isDragging(), "Cannot call drop while not dragging."),
    ve(!e.didDrop(), "Cannot call drop twice during one drag operation.");
}
function $2(e, t, n, r) {
  var o = n.getTarget(e),
    u = o ? o.drop(r, e) : void 0;
  return H2(u), typeof u > "u" && (u = t === 0 ? {} : r.getDropResult()), u;
}
function H2(e) {
  ve(
    typeof e > "u" || px(e),
    "Drop result must either be an object or undefined."
  );
}
function B2(e) {
  var t = e.getTargetIds().filter(e.canDropOnTarget, e);
  return t.reverse(), t;
}
function U2(e) {
  return function () {
    var n = e.getMonitor(),
      r = e.getRegistry();
    j2(n);
    var o = n.getSourceId();
    if (o != null) {
      var u = r.getSource(o, !0);
      u.endDrag(n, o), r.unpinSource();
    }
    return { type: hd };
  };
}
function j2(e) {
  ve(e.isDragging(), "Cannot call endDrag while not dragging.");
}
function W2(e) {
  return {
    beginDrag: C2(e),
    publishDragSource: k2(e),
    hover: P2(e),
    drop: F2(e),
    endDrag: U2(e),
  };
}
function V2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ty(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function G2(e, t, n) {
  return t && Ty(e.prototype, t), n && Ty(e, n), e;
}
function rs(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var K2 = (function () {
  function e(t, n) {
    var r = this;
    V2(this, e),
      rs(this, "store", void 0),
      rs(this, "monitor", void 0),
      rs(this, "backend", void 0),
      rs(this, "isSetUp", !1),
      rs(this, "handleRefCountChange", function () {
        var o = r.store.getState().refCount > 0;
        r.backend &&
          (o && !r.isSetUp
            ? (r.backend.setup(), (r.isSetUp = !0))
            : !o && r.isSetUp && (r.backend.teardown(), (r.isSetUp = !1)));
      }),
      (this.store = t),
      (this.monitor = n),
      t.subscribe(this.handleRefCountChange);
  }
  return (
    G2(e, [
      {
        key: "receiveBackend",
        value: function (n) {
          this.backend = n;
        },
      },
      {
        key: "getMonitor",
        value: function () {
          return this.monitor;
        },
      },
      {
        key: "getBackend",
        value: function () {
          return this.backend;
        },
      },
      {
        key: "getRegistry",
        value: function () {
          return this.monitor.registry;
        },
      },
      {
        key: "getActions",
        value: function () {
          var n = this,
            r = this.store.dispatch;
          function o(s) {
            return function () {
              for (
                var c = arguments.length, f = new Array(c), p = 0;
                p < c;
                p++
              )
                f[p] = arguments[p];
              var _ = s.apply(n, f);
              typeof _ < "u" && r(_);
            };
          }
          var u = W2(this);
          return Object.keys(u).reduce(function (s, c) {
            var f = u[c];
            return (s[c] = o(f)), s;
          }, {});
        },
      },
      {
        key: "dispatch",
        value: function (n) {
          this.store.dispatch(n);
        },
      },
    ]),
    e
  );
})();
function gr(e) {
  return (
    "Minified Redux error #" +
    e +
    "; visit https://redux.js.org/Errors?code=" +
    e +
    " for the full message or use the non-minified dev environment for full errors. "
  );
}
var by = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  bh = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  Cy = {
    INIT: "@@redux/INIT" + bh(),
    REPLACE: "@@redux/REPLACE" + bh(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + bh();
    },
  };
function Y2(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function hx(e, t, n) {
  var r;
  if (
    (typeof t == "function" && typeof n == "function") ||
    (typeof n == "function" && typeof arguments[3] == "function")
  )
    throw new Error(gr(0));
  if (
    (typeof t == "function" && typeof n > "u" && ((n = t), (t = void 0)),
    typeof n < "u")
  ) {
    if (typeof n != "function") throw new Error(gr(1));
    return n(hx)(e, t);
  }
  if (typeof e != "function") throw new Error(gr(2));
  var o = e,
    u = t,
    s = [],
    c = s,
    f = !1;
  function p() {
    c === s && (c = s.slice());
  }
  function _() {
    if (f) throw new Error(gr(3));
    return u;
  }
  function w(b) {
    if (typeof b != "function") throw new Error(gr(4));
    if (f) throw new Error(gr(5));
    var F = !0;
    return (
      p(),
      c.push(b),
      function () {
        if (F) {
          if (f) throw new Error(gr(6));
          (F = !1), p();
          var g = c.indexOf(b);
          c.splice(g, 1), (s = null);
        }
      }
    );
  }
  function S(b) {
    if (!Y2(b)) throw new Error(gr(7));
    if (typeof b.type > "u") throw new Error(gr(8));
    if (f) throw new Error(gr(9));
    try {
      (f = !0), (u = o(u, b));
    } finally {
      f = !1;
    }
    for (var F = (s = c), y = 0; y < F.length; y++) {
      var g = F[y];
      g();
    }
    return b;
  }
  function I(b) {
    if (typeof b != "function") throw new Error(gr(10));
    (o = b), S({ type: Cy.REPLACE });
  }
  function P() {
    var b,
      F = w;
    return (
      (b = {
        subscribe: function (g) {
          if (typeof g != "object" || g === null) throw new Error(gr(11));
          function m() {
            g.next && g.next(_());
          }
          m();
          var k = F(m);
          return { unsubscribe: k };
        },
      }),
      (b[by] = function () {
        return this;
      }),
      b
    );
  }
  return (
    S({ type: Cy.INIT }),
    (r = { dispatch: S, subscribe: w, getState: _, replaceReducer: I }),
    (r[by] = P),
    r
  );
}
var Q2 = function (t, n) {
  return t === n;
};
function q2(e, t) {
  return !e && !t ? !0 : !e || !t ? !1 : e.x === t.x && e.y === t.y;
}
function X2(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Q2;
  if (e.length !== t.length) return !1;
  for (var r = 0; r < e.length; ++r) if (!n(e[r], t[r])) return !1;
  return !0;
}
function Iy(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Ey(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Iy(Object(n), !0).forEach(function (r) {
          Z2(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Iy(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Z2(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var Dy = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null,
};
function J2() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Dy,
    t = arguments.length > 1 ? arguments[1] : void 0,
    n = t.payload;
  switch (t.type) {
    case j_:
    case fd:
      return {
        initialSourceClientOffset: n.sourceClientOffset,
        initialClientOffset: n.clientOffset,
        clientOffset: n.clientOffset,
      };
    case dd:
      return q2(e.clientOffset, n.clientOffset)
        ? e
        : Ey(Ey({}, e), {}, { clientOffset: n.clientOffset });
    case hd:
    case pd:
      return Dy;
    default:
      return e;
  }
}
var V_ = "dnd-core/ADD_SOURCE",
  G_ = "dnd-core/ADD_TARGET",
  K_ = "dnd-core/REMOVE_SOURCE",
  gd = "dnd-core/REMOVE_TARGET";
function eN(e) {
  return { type: V_, payload: { sourceId: e } };
}
function tN(e) {
  return { type: G_, payload: { targetId: e } };
}
function nN(e) {
  return { type: K_, payload: { sourceId: e } };
}
function rN(e) {
  return { type: gd, payload: { targetId: e } };
}
function Oy(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function _r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Oy(Object(n), !0).forEach(function (r) {
          iN(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Oy(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function iN(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var oN = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: !1,
  isSourcePublic: null,
};
function lN() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : oN,
    t = arguments.length > 1 ? arguments[1] : void 0,
    n = t.payload;
  switch (t.type) {
    case fd:
      return _r(
        _r({}, e),
        {},
        {
          itemType: n.itemType,
          item: n.item,
          sourceId: n.sourceId,
          isSourcePublic: n.isSourcePublic,
          dropResult: null,
          didDrop: !1,
        }
      );
    case W_:
      return _r(_r({}, e), {}, { isSourcePublic: !0 });
    case dd:
      return _r(_r({}, e), {}, { targetIds: n.targetIds });
    case gd:
      return e.targetIds.indexOf(n.targetId) === -1
        ? e
        : _r(_r({}, e), {}, { targetIds: S2(e.targetIds, n.targetId) });
    case pd:
      return _r(
        _r({}, e),
        {},
        { dropResult: n.dropResult, didDrop: !0, targetIds: [] }
      );
    case hd:
      return _r(
        _r({}, e),
        {},
        {
          itemType: null,
          item: null,
          sourceId: null,
          dropResult: null,
          didDrop: !1,
          isSourcePublic: null,
          targetIds: [],
        }
      );
    default:
      return e;
  }
}
function uN() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
    t = arguments.length > 1 ? arguments[1] : void 0;
  switch (t.type) {
    case V_:
    case G_:
      return e + 1;
    case K_:
    case gd:
      return e - 1;
    default:
      return e;
  }
}
var Df = [],
  Y_ = [];
Df.__IS_NONE__ = !0;
Y_.__IS_ALL__ = !0;
function sN(e, t) {
  if (e === Df) return !1;
  if (e === Y_ || typeof t > "u") return !0;
  var n = T2(t, e);
  return n.length > 0;
}
function aN() {
  var e = arguments.length > 1 ? arguments[1] : void 0;
  switch (e.type) {
    case dd:
      break;
    case V_:
    case G_:
    case gd:
    case K_:
      return Df;
    case fd:
    case W_:
    case hd:
    case pd:
    default:
      return Y_;
  }
  var t = e.payload,
    n = t.targetIds,
    r = n === void 0 ? [] : n,
    o = t.prevTargetIds,
    u = o === void 0 ? [] : o,
    s = x2(r, u),
    c = s.length > 0 || !X2(r, u);
  if (!c) return Df;
  var f = u[u.length - 1],
    p = r[r.length - 1];
  return f !== p && (f && s.push(f), p && s.push(p)), s;
}
function cN() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return e + 1;
}
function ky(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Py(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ky(Object(n), !0).forEach(function (r) {
          fN(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ky(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function fN(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function dN() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = arguments.length > 1 ? arguments[1] : void 0;
  return {
    dirtyHandlerIds: aN(e.dirtyHandlerIds, {
      type: t.type,
      payload: Py(
        Py({}, t.payload),
        {},
        { prevTargetIds: w2(e, "dragOperation.targetIds", []) }
      ),
    }),
    dragOffset: J2(e.dragOffset, t),
    refCount: uN(e.refCount, t),
    dragOperation: lN(e.dragOperation, t),
    stateId: cN(e.stateId),
  };
}
function pN(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function gx(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function hN(e) {
  var t = e.clientOffset,
    n = e.initialClientOffset,
    r = e.initialSourceClientOffset;
  return !t || !n || !r ? null : gx(pN(t, r), n);
}
function gN(e) {
  var t = e.clientOffset,
    n = e.initialClientOffset;
  return !t || !n ? null : gx(t, n);
}
function _N(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ry(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function vN(e, t, n) {
  return t && Ry(e.prototype, t), n && Ry(e, n), e;
}
function Ny(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var mN = (function () {
    function e(t, n) {
      _N(this, e),
        Ny(this, "store", void 0),
        Ny(this, "registry", void 0),
        (this.store = t),
        (this.registry = n);
    }
    return (
      vN(e, [
        {
          key: "subscribeToStateChange",
          value: function (n) {
            var r = this,
              o =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : { handlerIds: void 0 },
              u = o.handlerIds;
            ve(typeof n == "function", "listener must be a function."),
              ve(
                typeof u > "u" || Array.isArray(u),
                "handlerIds, when specified, must be an array of strings."
              );
            var s = this.store.getState().stateId,
              c = function () {
                var p = r.store.getState(),
                  _ = p.stateId;
                try {
                  var w = _ === s || (_ === s + 1 && !sN(p.dirtyHandlerIds, u));
                  w || n();
                } finally {
                  s = _;
                }
              };
            return this.store.subscribe(c);
          },
        },
        {
          key: "subscribeToOffsetChange",
          value: function (n) {
            var r = this;
            ve(typeof n == "function", "listener must be a function.");
            var o = this.store.getState().dragOffset,
              u = function () {
                var c = r.store.getState().dragOffset;
                c !== o && ((o = c), n());
              };
            return this.store.subscribe(u);
          },
        },
        {
          key: "canDragSource",
          value: function (n) {
            if (!n) return !1;
            var r = this.registry.getSource(n);
            return (
              ve(r, "Expected to find a valid source. sourceId=".concat(n)),
              this.isDragging() ? !1 : r.canDrag(this, n)
            );
          },
        },
        {
          key: "canDropOnTarget",
          value: function (n) {
            if (!n) return !1;
            var r = this.registry.getTarget(n);
            if (
              (ve(r, "Expected to find a valid target. targetId=".concat(n)),
              !this.isDragging() || this.didDrop())
            )
              return !1;
            var o = this.registry.getTargetType(n),
              u = this.getItemType();
            return kg(o, u) && r.canDrop(this, n);
          },
        },
        {
          key: "isDragging",
          value: function () {
            return !!this.getItemType();
          },
        },
        {
          key: "isDraggingSource",
          value: function (n) {
            if (!n) return !1;
            var r = this.registry.getSource(n, !0);
            if (
              (ve(r, "Expected to find a valid source. sourceId=".concat(n)),
              !this.isDragging() || !this.isSourcePublic())
            )
              return !1;
            var o = this.registry.getSourceType(n),
              u = this.getItemType();
            return o !== u ? !1 : r.isDragging(this, n);
          },
        },
        {
          key: "isOverTarget",
          value: function (n) {
            var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : { shallow: !1 };
            if (!n) return !1;
            var o = r.shallow;
            if (!this.isDragging()) return !1;
            var u = this.registry.getTargetType(n),
              s = this.getItemType();
            if (s && !kg(u, s)) return !1;
            var c = this.getTargetIds();
            if (!c.length) return !1;
            var f = c.indexOf(n);
            return o ? f === c.length - 1 : f > -1;
          },
        },
        {
          key: "getItemType",
          value: function () {
            return this.store.getState().dragOperation.itemType;
          },
        },
        {
          key: "getItem",
          value: function () {
            return this.store.getState().dragOperation.item;
          },
        },
        {
          key: "getSourceId",
          value: function () {
            return this.store.getState().dragOperation.sourceId;
          },
        },
        {
          key: "getTargetIds",
          value: function () {
            return this.store.getState().dragOperation.targetIds;
          },
        },
        {
          key: "getDropResult",
          value: function () {
            return this.store.getState().dragOperation.dropResult;
          },
        },
        {
          key: "didDrop",
          value: function () {
            return this.store.getState().dragOperation.didDrop;
          },
        },
        {
          key: "isSourcePublic",
          value: function () {
            return !!this.store.getState().dragOperation.isSourcePublic;
          },
        },
        {
          key: "getInitialClientOffset",
          value: function () {
            return this.store.getState().dragOffset.initialClientOffset;
          },
        },
        {
          key: "getInitialSourceClientOffset",
          value: function () {
            return this.store.getState().dragOffset.initialSourceClientOffset;
          },
        },
        {
          key: "getClientOffset",
          value: function () {
            return this.store.getState().dragOffset.clientOffset;
          },
        },
        {
          key: "getSourceClientOffset",
          value: function () {
            return hN(this.store.getState().dragOffset);
          },
        },
        {
          key: "getDifferenceFromInitialOffset",
          value: function () {
            return gN(this.store.getState().dragOffset);
          },
        },
      ]),
      e
    );
  })(),
  yN = 0;
function wN() {
  return yN++;
}
function Kc(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Kc = function (n) {
          return typeof n;
        })
      : (Kc = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Kc(e)
  );
}
function SN(e) {
  ve(typeof e.canDrag == "function", "Expected canDrag to be a function."),
    ve(
      typeof e.beginDrag == "function",
      "Expected beginDrag to be a function."
    ),
    ve(typeof e.endDrag == "function", "Expected endDrag to be a function.");
}
function xN(e) {
  ve(typeof e.canDrop == "function", "Expected canDrop to be a function."),
    ve(typeof e.hover == "function", "Expected hover to be a function."),
    ve(typeof e.drop == "function", "Expected beginDrag to be a function.");
}
function Pg(e, t) {
  if (t && Array.isArray(e)) {
    e.forEach(function (n) {
      return Pg(n, !1);
    });
    return;
  }
  ve(
    typeof e == "string" || Kc(e) === "symbol",
    t
      ? "Type can only be a string, a symbol, or an array of either."
      : "Type can only be a string or a symbol."
  );
}
const Ly = typeof global < "u" ? global : self,
  _x = Ly.MutationObserver || Ly.WebKitMutationObserver;
function vx(e) {
  return function () {
    const n = setTimeout(o, 0),
      r = setInterval(o, 50);
    function o() {
      clearTimeout(n), clearInterval(r), e();
    }
  };
}
function TN(e) {
  let t = 1;
  const n = new _x(e),
    r = document.createTextNode("");
  return (
    n.observe(r, { characterData: !0 }),
    function () {
      (t = -t), (r.data = t);
    }
  );
}
const bN = typeof _x == "function" ? TN : vx;
class CN {
  enqueueTask(t) {
    const { queue: n, requestFlush: r } = this;
    n.length || (r(), (this.flushing = !0)), (n[n.length] = t);
  }
  constructor() {
    (this.queue = []),
      (this.pendingErrors = []),
      (this.flushing = !1),
      (this.index = 0),
      (this.capacity = 1024),
      (this.flush = () => {
        const { queue: t } = this;
        for (; this.index < t.length; ) {
          const n = this.index;
          if ((this.index++, t[n].call(), this.index > this.capacity)) {
            for (let r = 0, o = t.length - this.index; r < o; r++)
              t[r] = t[r + this.index];
            (t.length -= this.index), (this.index = 0);
          }
        }
        (t.length = 0), (this.index = 0), (this.flushing = !1);
      }),
      (this.registerPendingError = (t) => {
        this.pendingErrors.push(t), this.requestErrorThrow();
      }),
      (this.requestFlush = bN(this.flush)),
      (this.requestErrorThrow = vx(() => {
        if (this.pendingErrors.length) throw this.pendingErrors.shift();
      }));
  }
}
class IN {
  call() {
    try {
      this.task && this.task();
    } catch (t) {
      this.onError(t);
    } finally {
      (this.task = null), this.release(this);
    }
  }
  constructor(t, n) {
    (this.onError = t), (this.release = n), (this.task = null);
  }
}
class EN {
  create(t) {
    const n = this.freeTasks,
      r = n.length ? n.pop() : new IN(this.onError, (o) => (n[n.length] = o));
    return (r.task = t), r;
  }
  constructor(t) {
    (this.onError = t), (this.freeTasks = []);
  }
}
const mx = new CN(),
  DN = new EN(mx.registerPendingError);
function ON(e) {
  mx.enqueueTask(DN.create(e));
}
function kN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ay(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function PN(e, t, n) {
  return t && Ay(e.prototype, t), n && Ay(e, n), e;
}
function Ll(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function RN(e, t) {
  return MN(e) || AN(e, t) || LN(e, t) || NN();
}
function NN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function LN(e, t) {
  if (e) {
    if (typeof e == "string") return My(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return My(e, t);
  }
}
function My(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function AN(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      o = !0,
      u = !1,
      s,
      c;
    try {
      for (
        n = n.call(e);
        !(o = (s = n.next()).done) && (r.push(s.value), !(t && r.length === t));
        o = !0
      );
    } catch (f) {
      (u = !0), (c = f);
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (u) throw c;
      }
    }
    return r;
  }
}
function MN(e) {
  if (Array.isArray(e)) return e;
}
function FN(e) {
  var t = wN().toString();
  switch (e) {
    case yr.SOURCE:
      return "S".concat(t);
    case yr.TARGET:
      return "T".concat(t);
    default:
      throw new Error("Unknown Handler Role: ".concat(e));
  }
}
function Fy(e) {
  switch (e[0]) {
    case "S":
      return yr.SOURCE;
    case "T":
      return yr.TARGET;
    default:
      ve(!1, "Cannot parse handler ID: ".concat(e));
  }
}
function zy(e, t) {
  var n = e.entries(),
    r = !1;
  do {
    var o = n.next(),
      u = o.done,
      s = RN(o.value, 2),
      c = s[1];
    if (c === t) return !0;
    r = !!u;
  } while (!r);
  return !1;
}
var zN = (function () {
  function e(t) {
    kN(this, e),
      Ll(this, "types", new Map()),
      Ll(this, "dragSources", new Map()),
      Ll(this, "dropTargets", new Map()),
      Ll(this, "pinnedSourceId", null),
      Ll(this, "pinnedSource", null),
      Ll(this, "store", void 0),
      (this.store = t);
  }
  return (
    PN(e, [
      {
        key: "addSource",
        value: function (n, r) {
          Pg(n), SN(r);
          var o = this.addHandler(yr.SOURCE, n, r);
          return this.store.dispatch(eN(o)), o;
        },
      },
      {
        key: "addTarget",
        value: function (n, r) {
          Pg(n, !0), xN(r);
          var o = this.addHandler(yr.TARGET, n, r);
          return this.store.dispatch(tN(o)), o;
        },
      },
      {
        key: "containsHandler",
        value: function (n) {
          return zy(this.dragSources, n) || zy(this.dropTargets, n);
        },
      },
      {
        key: "getSource",
        value: function (n) {
          var r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          ve(this.isSourceId(n), "Expected a valid source ID.");
          var o = r && n === this.pinnedSourceId,
            u = o ? this.pinnedSource : this.dragSources.get(n);
          return u;
        },
      },
      {
        key: "getTarget",
        value: function (n) {
          return (
            ve(this.isTargetId(n), "Expected a valid target ID."),
            this.dropTargets.get(n)
          );
        },
      },
      {
        key: "getSourceType",
        value: function (n) {
          return (
            ve(this.isSourceId(n), "Expected a valid source ID."),
            this.types.get(n)
          );
        },
      },
      {
        key: "getTargetType",
        value: function (n) {
          return (
            ve(this.isTargetId(n), "Expected a valid target ID."),
            this.types.get(n)
          );
        },
      },
      {
        key: "isSourceId",
        value: function (n) {
          var r = Fy(n);
          return r === yr.SOURCE;
        },
      },
      {
        key: "isTargetId",
        value: function (n) {
          var r = Fy(n);
          return r === yr.TARGET;
        },
      },
      {
        key: "removeSource",
        value: function (n) {
          var r = this;
          ve(this.getSource(n), "Expected an existing source."),
            this.store.dispatch(nN(n)),
            ON(function () {
              r.dragSources.delete(n), r.types.delete(n);
            });
        },
      },
      {
        key: "removeTarget",
        value: function (n) {
          ve(this.getTarget(n), "Expected an existing target."),
            this.store.dispatch(rN(n)),
            this.dropTargets.delete(n),
            this.types.delete(n);
        },
      },
      {
        key: "pinSource",
        value: function (n) {
          var r = this.getSource(n);
          ve(r, "Expected an existing source."),
            (this.pinnedSourceId = n),
            (this.pinnedSource = r);
        },
      },
      {
        key: "unpinSource",
        value: function () {
          ve(this.pinnedSource, "No source is pinned at the time."),
            (this.pinnedSourceId = null),
            (this.pinnedSource = null);
        },
      },
      {
        key: "addHandler",
        value: function (n, r, o) {
          var u = FN(n);
          return (
            this.types.set(u, r),
            n === yr.SOURCE
              ? this.dragSources.set(u, o)
              : n === yr.TARGET && this.dropTargets.set(u, o),
            u
          );
        },
      },
    ]),
    e
  );
})();
function $N(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0,
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
    o = HN(r),
    u = new mN(o, new zN(o)),
    s = new K2(o, u),
    c = e(s, t, n);
  return s.receiveBackend(c), s;
}
function HN(e) {
  var t = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION__;
  return hx(dN, e && t && t({ name: "dnd-core", instanceId: "dnd-core" }));
}
var BN = ["children"];
function UN(e, t) {
  return GN(e) || VN(e, t) || WN(e, t) || jN();
}
function jN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function WN(e, t) {
  if (e) {
    if (typeof e == "string") return $y(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return $y(e, t);
  }
}
function $y(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function VN(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      o = !0,
      u = !1,
      s,
      c;
    try {
      for (
        n = n.call(e);
        !(o = (s = n.next()).done) && (r.push(s.value), !(t && r.length === t));
        o = !0
      );
    } catch (f) {
      (u = !0), (c = f);
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (u) throw c;
      }
    }
    return r;
  }
}
function GN(e) {
  if (Array.isArray(e)) return e;
}
function KN(e, t) {
  if (e == null) return {};
  var n = YN(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (o = 0; o < u.length; o++)
      (r = u[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function YN(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    u;
  for (u = 0; u < r.length; u++)
    (o = r[u]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Hy = 0,
  Yc = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__"),
  QN = tt.memo(function (t) {
    var n = t.children,
      r = KN(t, BN),
      o = qN(r),
      u = UN(o, 2),
      s = u[0],
      c = u[1];
    return (
      tt.useEffect(function () {
        if (c) {
          var f = yx();
          return (
            ++Hy,
            function () {
              --Hy === 0 && (f[Yc] = null);
            }
          );
        }
      }, []),
      J.jsx(cd.Provider, Object.assign({ value: s }, { children: n }), void 0)
    );
  });
function qN(e) {
  if ("manager" in e) {
    var t = { dragDropManager: e.manager };
    return [t, !1];
  }
  var n = XN(e.backend, e.context, e.options, e.debugMode),
    r = !e.context;
  return [n, r];
}
function XN(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yx(),
    n = arguments.length > 2 ? arguments[2] : void 0,
    r = arguments.length > 3 ? arguments[3] : void 0,
    o = t;
  return o[Yc] || (o[Yc] = { dragDropManager: $N(e, t, n, r) }), o[Yc];
}
function yx() {
  return typeof global < "u" ? global : window;
}
function ZN(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function By(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function JN(e, t, n) {
  return t && By(e.prototype, t), n && By(e, n), e;
}
function Uy(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var Ch = !1,
  Ih = !1,
  e4 = (function () {
    function e(t) {
      ZN(this, e),
        Uy(this, "internalMonitor", void 0),
        Uy(this, "sourceId", null),
        (this.internalMonitor = t.getMonitor());
    }
    return (
      JN(e, [
        {
          key: "receiveHandlerId",
          value: function (n) {
            this.sourceId = n;
          },
        },
        {
          key: "getHandlerId",
          value: function () {
            return this.sourceId;
          },
        },
        {
          key: "canDrag",
          value: function () {
            ve(
              !Ch,
              "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor"
            );
            try {
              return (
                (Ch = !0), this.internalMonitor.canDragSource(this.sourceId)
              );
            } finally {
              Ch = !1;
            }
          },
        },
        {
          key: "isDragging",
          value: function () {
            if (!this.sourceId) return !1;
            ve(
              !Ih,
              "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor"
            );
            try {
              return (
                (Ih = !0), this.internalMonitor.isDraggingSource(this.sourceId)
              );
            } finally {
              Ih = !1;
            }
          },
        },
        {
          key: "subscribeToStateChange",
          value: function (n, r) {
            return this.internalMonitor.subscribeToStateChange(n, r);
          },
        },
        {
          key: "isDraggingSource",
          value: function (n) {
            return this.internalMonitor.isDraggingSource(n);
          },
        },
        {
          key: "isOverTarget",
          value: function (n, r) {
            return this.internalMonitor.isOverTarget(n, r);
          },
        },
        {
          key: "getTargetIds",
          value: function () {
            return this.internalMonitor.getTargetIds();
          },
        },
        {
          key: "isSourcePublic",
          value: function () {
            return this.internalMonitor.isSourcePublic();
          },
        },
        {
          key: "getSourceId",
          value: function () {
            return this.internalMonitor.getSourceId();
          },
        },
        {
          key: "subscribeToOffsetChange",
          value: function (n) {
            return this.internalMonitor.subscribeToOffsetChange(n);
          },
        },
        {
          key: "canDragSource",
          value: function (n) {
            return this.internalMonitor.canDragSource(n);
          },
        },
        {
          key: "canDropOnTarget",
          value: function (n) {
            return this.internalMonitor.canDropOnTarget(n);
          },
        },
        {
          key: "getItemType",
          value: function () {
            return this.internalMonitor.getItemType();
          },
        },
        {
          key: "getItem",
          value: function () {
            return this.internalMonitor.getItem();
          },
        },
        {
          key: "getDropResult",
          value: function () {
            return this.internalMonitor.getDropResult();
          },
        },
        {
          key: "didDrop",
          value: function () {
            return this.internalMonitor.didDrop();
          },
        },
        {
          key: "getInitialClientOffset",
          value: function () {
            return this.internalMonitor.getInitialClientOffset();
          },
        },
        {
          key: "getInitialSourceClientOffset",
          value: function () {
            return this.internalMonitor.getInitialSourceClientOffset();
          },
        },
        {
          key: "getSourceClientOffset",
          value: function () {
            return this.internalMonitor.getSourceClientOffset();
          },
        },
        {
          key: "getClientOffset",
          value: function () {
            return this.internalMonitor.getClientOffset();
          },
        },
        {
          key: "getDifferenceFromInitialOffset",
          value: function () {
            return this.internalMonitor.getDifferenceFromInitialOffset();
          },
        },
      ]),
      e
    );
  })();
function t4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function n4(e, t, n) {
  return t && jy(e.prototype, t), n && jy(e, n), e;
}
function Wy(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var Eh = !1,
  r4 = (function () {
    function e(t) {
      t4(this, e),
        Wy(this, "internalMonitor", void 0),
        Wy(this, "targetId", null),
        (this.internalMonitor = t.getMonitor());
    }
    return (
      n4(e, [
        {
          key: "receiveHandlerId",
          value: function (n) {
            this.targetId = n;
          },
        },
        {
          key: "getHandlerId",
          value: function () {
            return this.targetId;
          },
        },
        {
          key: "subscribeToStateChange",
          value: function (n, r) {
            return this.internalMonitor.subscribeToStateChange(n, r);
          },
        },
        {
          key: "canDrop",
          value: function () {
            if (!this.targetId) return !1;
            ve(
              !Eh,
              "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor"
            );
            try {
              return (
                (Eh = !0), this.internalMonitor.canDropOnTarget(this.targetId)
              );
            } finally {
              Eh = !1;
            }
          },
        },
        {
          key: "isOver",
          value: function (n) {
            return this.targetId
              ? this.internalMonitor.isOverTarget(this.targetId, n)
              : !1;
          },
        },
        {
          key: "getItemType",
          value: function () {
            return this.internalMonitor.getItemType();
          },
        },
        {
          key: "getItem",
          value: function () {
            return this.internalMonitor.getItem();
          },
        },
        {
          key: "getDropResult",
          value: function () {
            return this.internalMonitor.getDropResult();
          },
        },
        {
          key: "didDrop",
          value: function () {
            return this.internalMonitor.didDrop();
          },
        },
        {
          key: "getInitialClientOffset",
          value: function () {
            return this.internalMonitor.getInitialClientOffset();
          },
        },
        {
          key: "getInitialSourceClientOffset",
          value: function () {
            return this.internalMonitor.getInitialSourceClientOffset();
          },
        },
        {
          key: "getSourceClientOffset",
          value: function () {
            return this.internalMonitor.getSourceClientOffset();
          },
        },
        {
          key: "getClientOffset",
          value: function () {
            return this.internalMonitor.getClientOffset();
          },
        },
        {
          key: "getDifferenceFromInitialOffset",
          value: function () {
            return this.internalMonitor.getDifferenceFromInitialOffset();
          },
        },
      ]),
      e
    );
  })();
function i4(e) {
  if (typeof e.type != "string") {
    var t = e.type.displayName || e.type.name || "the component";
    throw new Error(
      "Only native element nodes can now be passed to React DnD connectors." +
        "You can either wrap ".concat(t, " into a <div>, or turn it into a ") +
        "drag source or a drop target itself."
    );
  }
}
function o4(e) {
  return function () {
    var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null,
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
    if (!tt.isValidElement(t)) {
      var r = t;
      return e(r, n), r;
    }
    var o = t;
    i4(o);
    var u = n
      ? function (s) {
          return e(s, n);
        }
      : e;
    return l4(o, u);
  };
}
function wx(e) {
  var t = {};
  return (
    Object.keys(e).forEach(function (n) {
      var r = e[n];
      if (n.endsWith("Ref")) t[n] = e[n];
      else {
        var o = o4(r);
        t[n] = function () {
          return o;
        };
      }
    }),
    t
  );
}
function Vy(e, t) {
  typeof e == "function" ? e(t) : (e.current = t);
}
function l4(e, t) {
  var n = e.ref;
  return (
    ve(
      typeof n != "string",
      "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"
    ),
    n
      ? tt.cloneElement(e, {
          ref: function (o) {
            Vy(n, o), Vy(t, o);
          },
        })
      : tt.cloneElement(e, { ref: t })
  );
}
function Qc(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Qc = function (n) {
          return typeof n;
        })
      : (Qc = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Qc(e)
  );
}
function Rg(e) {
  return (
    e !== null &&
    Qc(e) === "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function tu(e, t, n, r) {
  var o = n ? n.call(r, e, t) : void 0;
  if (o !== void 0) return !!o;
  if (e === t) return !0;
  if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
  var u = Object.keys(e),
    s = Object.keys(t);
  if (u.length !== s.length) return !1;
  for (
    var c = Object.prototype.hasOwnProperty.bind(t), f = 0;
    f < u.length;
    f++
  ) {
    var p = u[f];
    if (!c(p)) return !1;
    var _ = e[p],
      w = t[p];
    if (
      ((o = n ? n.call(r, _, w, p) : void 0),
      o === !1 || (o === void 0 && _ !== w))
    )
      return !1;
  }
  return !0;
}
function u4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function s4(e, t, n) {
  return t && Gy(e.prototype, t), n && Gy(e, n), e;
}
function un(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var a4 = (function () {
  function e(t) {
    var n = this;
    u4(this, e),
      un(
        this,
        "hooks",
        wx({
          dragSource: function (o, u) {
            n.clearDragSource(),
              (n.dragSourceOptions = u || null),
              Rg(o) ? (n.dragSourceRef = o) : (n.dragSourceNode = o),
              n.reconnectDragSource();
          },
          dragPreview: function (o, u) {
            n.clearDragPreview(),
              (n.dragPreviewOptions = u || null),
              Rg(o) ? (n.dragPreviewRef = o) : (n.dragPreviewNode = o),
              n.reconnectDragPreview();
          },
        })
      ),
      un(this, "handlerId", null),
      un(this, "dragSourceRef", null),
      un(this, "dragSourceNode", void 0),
      un(this, "dragSourceOptionsInternal", null),
      un(this, "dragSourceUnsubscribe", void 0),
      un(this, "dragPreviewRef", null),
      un(this, "dragPreviewNode", void 0),
      un(this, "dragPreviewOptionsInternal", null),
      un(this, "dragPreviewUnsubscribe", void 0),
      un(this, "lastConnectedHandlerId", null),
      un(this, "lastConnectedDragSource", null),
      un(this, "lastConnectedDragSourceOptions", null),
      un(this, "lastConnectedDragPreview", null),
      un(this, "lastConnectedDragPreviewOptions", null),
      un(this, "backend", void 0),
      (this.backend = t);
  }
  return (
    s4(e, [
      {
        key: "receiveHandlerId",
        value: function (n) {
          this.handlerId !== n && ((this.handlerId = n), this.reconnect());
        },
      },
      {
        key: "connectTarget",
        get: function () {
          return this.dragSource;
        },
      },
      {
        key: "dragSourceOptions",
        get: function () {
          return this.dragSourceOptionsInternal;
        },
        set: function (n) {
          this.dragSourceOptionsInternal = n;
        },
      },
      {
        key: "dragPreviewOptions",
        get: function () {
          return this.dragPreviewOptionsInternal;
        },
        set: function (n) {
          this.dragPreviewOptionsInternal = n;
        },
      },
      {
        key: "reconnect",
        value: function () {
          this.reconnectDragSource(), this.reconnectDragPreview();
        },
      },
      {
        key: "reconnectDragSource",
        value: function () {
          var n = this.dragSource,
            r =
              this.didHandlerIdChange() ||
              this.didConnectedDragSourceChange() ||
              this.didDragSourceOptionsChange();
          if ((r && this.disconnectDragSource(), !!this.handlerId)) {
            if (!n) {
              this.lastConnectedDragSource = n;
              return;
            }
            r &&
              ((this.lastConnectedHandlerId = this.handlerId),
              (this.lastConnectedDragSource = n),
              (this.lastConnectedDragSourceOptions = this.dragSourceOptions),
              (this.dragSourceUnsubscribe = this.backend.connectDragSource(
                this.handlerId,
                n,
                this.dragSourceOptions
              )));
          }
        },
      },
      {
        key: "reconnectDragPreview",
        value: function () {
          var n = this.dragPreview,
            r =
              this.didHandlerIdChange() ||
              this.didConnectedDragPreviewChange() ||
              this.didDragPreviewOptionsChange();
          if ((r && this.disconnectDragPreview(), !!this.handlerId)) {
            if (!n) {
              this.lastConnectedDragPreview = n;
              return;
            }
            r &&
              ((this.lastConnectedHandlerId = this.handlerId),
              (this.lastConnectedDragPreview = n),
              (this.lastConnectedDragPreviewOptions = this.dragPreviewOptions),
              (this.dragPreviewUnsubscribe = this.backend.connectDragPreview(
                this.handlerId,
                n,
                this.dragPreviewOptions
              )));
          }
        },
      },
      {
        key: "didHandlerIdChange",
        value: function () {
          return this.lastConnectedHandlerId !== this.handlerId;
        },
      },
      {
        key: "didConnectedDragSourceChange",
        value: function () {
          return this.lastConnectedDragSource !== this.dragSource;
        },
      },
      {
        key: "didConnectedDragPreviewChange",
        value: function () {
          return this.lastConnectedDragPreview !== this.dragPreview;
        },
      },
      {
        key: "didDragSourceOptionsChange",
        value: function () {
          return !tu(
            this.lastConnectedDragSourceOptions,
            this.dragSourceOptions
          );
        },
      },
      {
        key: "didDragPreviewOptionsChange",
        value: function () {
          return !tu(
            this.lastConnectedDragPreviewOptions,
            this.dragPreviewOptions
          );
        },
      },
      {
        key: "disconnectDragSource",
        value: function () {
          this.dragSourceUnsubscribe &&
            (this.dragSourceUnsubscribe(),
            (this.dragSourceUnsubscribe = void 0));
        },
      },
      {
        key: "disconnectDragPreview",
        value: function () {
          this.dragPreviewUnsubscribe &&
            (this.dragPreviewUnsubscribe(),
            (this.dragPreviewUnsubscribe = void 0),
            (this.dragPreviewNode = null),
            (this.dragPreviewRef = null));
        },
      },
      {
        key: "dragSource",
        get: function () {
          return (
            this.dragSourceNode ||
            (this.dragSourceRef && this.dragSourceRef.current)
          );
        },
      },
      {
        key: "dragPreview",
        get: function () {
          return (
            this.dragPreviewNode ||
            (this.dragPreviewRef && this.dragPreviewRef.current)
          );
        },
      },
      {
        key: "clearDragSource",
        value: function () {
          (this.dragSourceNode = null), (this.dragSourceRef = null);
        },
      },
      {
        key: "clearDragPreview",
        value: function () {
          (this.dragPreviewNode = null), (this.dragPreviewRef = null);
        },
      },
    ]),
    e
  );
})();
function c4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ky(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function f4(e, t, n) {
  return t && Ky(e.prototype, t), n && Ky(e, n), e;
}
function Zr(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var d4 = (function () {
  function e(t) {
    var n = this;
    c4(this, e),
      Zr(
        this,
        "hooks",
        wx({
          dropTarget: function (o, u) {
            n.clearDropTarget(),
              (n.dropTargetOptions = u),
              Rg(o) ? (n.dropTargetRef = o) : (n.dropTargetNode = o),
              n.reconnect();
          },
        })
      ),
      Zr(this, "handlerId", null),
      Zr(this, "dropTargetRef", null),
      Zr(this, "dropTargetNode", void 0),
      Zr(this, "dropTargetOptionsInternal", null),
      Zr(this, "unsubscribeDropTarget", void 0),
      Zr(this, "lastConnectedHandlerId", null),
      Zr(this, "lastConnectedDropTarget", null),
      Zr(this, "lastConnectedDropTargetOptions", null),
      Zr(this, "backend", void 0),
      (this.backend = t);
  }
  return (
    f4(e, [
      {
        key: "connectTarget",
        get: function () {
          return this.dropTarget;
        },
      },
      {
        key: "reconnect",
        value: function () {
          var n =
            this.didHandlerIdChange() ||
            this.didDropTargetChange() ||
            this.didOptionsChange();
          n && this.disconnectDropTarget();
          var r = this.dropTarget;
          if (this.handlerId) {
            if (!r) {
              this.lastConnectedDropTarget = r;
              return;
            }
            n &&
              ((this.lastConnectedHandlerId = this.handlerId),
              (this.lastConnectedDropTarget = r),
              (this.lastConnectedDropTargetOptions = this.dropTargetOptions),
              (this.unsubscribeDropTarget = this.backend.connectDropTarget(
                this.handlerId,
                r,
                this.dropTargetOptions
              )));
          }
        },
      },
      {
        key: "receiveHandlerId",
        value: function (n) {
          n !== this.handlerId && ((this.handlerId = n), this.reconnect());
        },
      },
      {
        key: "dropTargetOptions",
        get: function () {
          return this.dropTargetOptionsInternal;
        },
        set: function (n) {
          this.dropTargetOptionsInternal = n;
        },
      },
      {
        key: "didHandlerIdChange",
        value: function () {
          return this.lastConnectedHandlerId !== this.handlerId;
        },
      },
      {
        key: "didDropTargetChange",
        value: function () {
          return this.lastConnectedDropTarget !== this.dropTarget;
        },
      },
      {
        key: "didOptionsChange",
        value: function () {
          return !tu(
            this.lastConnectedDropTargetOptions,
            this.dropTargetOptions
          );
        },
      },
      {
        key: "disconnectDropTarget",
        value: function () {
          this.unsubscribeDropTarget &&
            (this.unsubscribeDropTarget(),
            (this.unsubscribeDropTarget = void 0));
        },
      },
      {
        key: "dropTarget",
        get: function () {
          return (
            this.dropTargetNode ||
            (this.dropTargetRef && this.dropTargetRef.current)
          );
        },
      },
      {
        key: "clearDropTarget",
        value: function () {
          (this.dropTargetRef = null), (this.dropTargetNode = null);
        },
      },
    ]),
    e
  );
})();
function p4(e, t, n) {
  var r = n.getRegistry(),
    o = r.addTarget(e, t);
  return [
    o,
    function () {
      return r.removeTarget(o);
    },
  ];
}
function h4(e, t, n) {
  var r = n.getRegistry(),
    o = r.addSource(e, t);
  return [
    o,
    function () {
      return r.removeSource(o);
    },
  ];
}
function Ss(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (Ss = function (n) {
          return typeof n;
        })
      : (Ss = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    Ss(e)
  );
}
function Sx(e) {
  var t = e.current;
  return t == null ? null : t.decoratedRef ? t.decoratedRef.current : t;
}
function g4(e) {
  return e && e.prototype && typeof e.prototype.render == "function";
}
function _4(e) {
  var t,
    n = e;
  return (
    (n == null || (t = n.$$typeof) === null || t === void 0
      ? void 0
      : t.toString()) === "Symbol(react.forward_ref)"
  );
}
function v4(e) {
  return g4(e) || _4(e);
}
function Yy(e) {
  return typeof e == "function";
}
function xx() {}
function m4(e) {
  return Ss(e) === "object" && e !== null;
}
function Of(e) {
  if (!m4(e)) return !1;
  if (Object.getPrototypeOf(e) === null) return !0;
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Q_(e, t) {
  return (
    typeof e == "string" ||
    Ss(e) === "symbol" ||
    (!!t &&
      Array.isArray(e) &&
      e.every(function (n) {
        return Q_(n, !1);
      }))
  );
}
function q_(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Qy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function X_(e, t, n) {
  return t && Qy(e.prototype, t), n && Qy(e, n), e;
}
function qo(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var Ng = (function () {
  function e(t) {
    q_(this, e),
      qo(this, "isDisposed", !1),
      qo(this, "action", void 0),
      (this.action = Yy(t) ? t : xx);
  }
  return (
    X_(
      e,
      [
        {
          key: "dispose",
          value: function () {
            this.isDisposed || (this.action(), (this.isDisposed = !0));
          },
        },
      ],
      [
        {
          key: "isDisposable",
          value: function (n) {
            return !!(n && Yy(n.dispose));
          },
        },
        {
          key: "_fixup",
          value: function (n) {
            return e.isDisposable(n) ? n : e.empty;
          },
        },
        {
          key: "create",
          value: function (n) {
            return new e(n);
          },
        },
      ]
    ),
    e
  );
})();
qo(Ng, "empty", { dispose: xx });
var y4 = (function () {
    function e() {
      q_(this, e), qo(this, "isDisposed", !1), qo(this, "disposables", void 0);
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      this.disposables = n;
    }
    return (
      X_(e, [
        {
          key: "add",
          value: function (n) {
            this.isDisposed ? n.dispose() : this.disposables.push(n);
          },
        },
        {
          key: "remove",
          value: function (n) {
            var r = !1;
            if (!this.isDisposed) {
              var o = this.disposables.indexOf(n);
              o !== -1 &&
                ((r = !0), this.disposables.splice(o, 1), n.dispose());
            }
            return r;
          },
        },
        {
          key: "clear",
          value: function () {
            if (!this.isDisposed) {
              for (
                var n = this.disposables.length, r = new Array(n), o = 0;
                o < n;
                o++
              )
                r[o] = this.disposables[o];
              this.disposables = [];
              for (var u = 0; u < n; u++) r[u].dispose();
            }
          },
        },
        {
          key: "dispose",
          value: function () {
            if (!this.isDisposed) {
              this.isDisposed = !0;
              for (
                var n = this.disposables.length, r = new Array(n), o = 0;
                o < n;
                o++
              )
                r[o] = this.disposables[o];
              this.disposables = [];
              for (var u = 0; u < n; u++) r[u].dispose();
            }
          },
        },
      ]),
      e
    );
  })(),
  qy = (function () {
    function e() {
      q_(this, e), qo(this, "isDisposed", !1), qo(this, "current", void 0);
    }
    return (
      X_(e, [
        {
          key: "getDisposable",
          value: function () {
            return this.current;
          },
        },
        {
          key: "setDisposable",
          value: function (n) {
            var r = this.isDisposed;
            if (!r) {
              var o = this.current;
              (this.current = n), o && o.dispose();
            }
            r && n && n.dispose();
          },
        },
        {
          key: "dispose",
          value: function () {
            if (!this.isDisposed) {
              this.isDisposed = !0;
              var n = this.current;
              (this.current = void 0), n && n.dispose();
            }
          },
        },
      ]),
      e
    );
  })();
function qc(e) {
  "@babel/helpers - typeof";
  return (
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? (qc = function (n) {
          return typeof n;
        })
      : (qc = function (n) {
          return n &&
            typeof Symbol == "function" &&
            n.constructor === Symbol &&
            n !== Symbol.prototype
            ? "symbol"
            : typeof n;
        }),
    qc(e)
  );
}
function w4(e, t) {
  return b4(e) || T4(e, t) || x4(e, t) || S4();
}
function S4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function x4(e, t) {
  if (e) {
    if (typeof e == "string") return Xy(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Xy(e, t);
  }
}
function Xy(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function T4(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      o = !0,
      u = !1,
      s,
      c;
    try {
      for (
        n = n.call(e);
        !(o = (s = n.next()).done) && (r.push(s.value), !(t && r.length === t));
        o = !0
      );
    } catch (f) {
      (u = !0), (c = f);
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (u) throw c;
      }
    }
    return r;
  }
}
function b4(e) {
  if (Array.isArray(e)) return e;
}
function C4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function I4(e, t, n) {
  return t && Zy(e.prototype, t), n && Zy(e, n), e;
}
function E4(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Lg(e, t);
}
function Lg(e, t) {
  return (
    (Lg =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    Lg(e, t)
  );
}
function D4(e) {
  var t = k4();
  return function () {
    var r = kf(e),
      o;
    if (t) {
      var u = kf(this).constructor;
      o = Reflect.construct(r, arguments, u);
    } else o = r.apply(this, arguments);
    return O4(this, o);
  };
}
function O4(e, t) {
  if (t && (qc(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Jr(e);
}
function Jr(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function k4() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function kf(e) {
  return (
    (kf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    kf(e)
  );
}
function Lr(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Tx(e) {
  var t = e.DecoratedComponent,
    n = e.createHandler,
    r = e.createMonitor,
    o = e.createConnector,
    u = e.registerHandler,
    s = e.containerDisplayName,
    c = e.getType,
    f = e.collect,
    p = e.options,
    _ = p.arePropsEqual,
    w = _ === void 0 ? tu : _,
    S = t,
    I = t.displayName || t.name || "Component",
    P = (function (b) {
      E4(y, b);
      var F = D4(y);
      function y(g) {
        var m;
        return (
          C4(this, y),
          (m = F.call(this, g)),
          Lr(Jr(m), "decoratedRef", tt.createRef()),
          Lr(Jr(m), "handlerId", void 0),
          Lr(Jr(m), "manager", void 0),
          Lr(Jr(m), "handlerMonitor", void 0),
          Lr(Jr(m), "handlerConnector", void 0),
          Lr(Jr(m), "handler", void 0),
          Lr(Jr(m), "disposable", void 0),
          Lr(Jr(m), "currentType", void 0),
          Lr(Jr(m), "handleChange", function () {
            var k = m.getCurrentState();
            tu(k, m.state) || m.setState(k);
          }),
          (m.disposable = new qy()),
          m.receiveProps(g),
          m.dispose(),
          m
        );
      }
      return (
        I4(y, [
          {
            key: "getHandlerId",
            value: function () {
              return this.handlerId;
            },
          },
          {
            key: "getDecoratedComponentInstance",
            value: function () {
              return (
                ve(
                  this.decoratedRef.current,
                  "In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()"
                ),
                this.decoratedRef.current
              );
            },
          },
          {
            key: "shouldComponentUpdate",
            value: function (m, k) {
              return !w(m, this.props) || !tu(k, this.state);
            },
          },
          {
            key: "componentDidMount",
            value: function () {
              (this.disposable = new qy()),
                (this.currentType = void 0),
                this.receiveProps(this.props),
                this.handleChange();
            },
          },
          {
            key: "componentDidUpdate",
            value: function (m) {
              w(this.props, m) ||
                (this.receiveProps(this.props), this.handleChange());
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.dispose();
            },
          },
          {
            key: "receiveProps",
            value: function (m) {
              this.handler &&
                (this.handler.receiveProps(m), this.receiveType(c(m)));
            },
          },
          {
            key: "receiveType",
            value: function (m) {
              if (
                !(
                  !this.handlerMonitor ||
                  !this.manager ||
                  !this.handlerConnector
                ) &&
                m !== this.currentType
              ) {
                this.currentType = m;
                var k = u(m, this.handler, this.manager),
                  O = w4(k, 2),
                  C = O[0],
                  N = O[1];
                (this.handlerId = C),
                  this.handlerMonitor.receiveHandlerId(C),
                  this.handlerConnector.receiveHandlerId(C);
                var z = this.manager.getMonitor(),
                  Y = z.subscribeToStateChange(this.handleChange, {
                    handlerIds: [C],
                  });
                this.disposable.setDisposable(new y4(new Ng(Y), new Ng(N)));
              }
            },
          },
          {
            key: "dispose",
            value: function () {
              this.disposable.dispose(),
                this.handlerConnector &&
                  this.handlerConnector.receiveHandlerId(null);
            },
          },
          {
            key: "getCurrentState",
            value: function () {
              if (!this.handlerConnector) return {};
              var m = f(
                this.handlerConnector.hooks,
                this.handlerMonitor,
                this.props
              );
              return m;
            },
          },
          {
            key: "render",
            value: function () {
              var m = this;
              return J.jsx(
                cd.Consumer,
                {
                  children: function (O) {
                    var C = O.dragDropManager;
                    return (
                      m.receiveDragDropManager(C),
                      typeof requestAnimationFrame < "u" &&
                        requestAnimationFrame(function () {
                          var N;
                          return (N = m.handlerConnector) === null ||
                            N === void 0
                            ? void 0
                            : N.reconnect();
                        }),
                      J.jsx(
                        S,
                        Object.assign({}, m.props, m.getCurrentState(), {
                          ref: v4(S) ? m.decoratedRef : null,
                        }),
                        void 0
                      )
                    );
                  },
                },
                void 0
              );
            },
          },
          {
            key: "receiveDragDropManager",
            value: function (m) {
              this.manager === void 0 &&
                (ve(
                  m !== void 0,
                  "Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",
                  I,
                  I
                ),
                m !== void 0 &&
                  ((this.manager = m),
                  (this.handlerMonitor = r(m)),
                  (this.handlerConnector = o(m.getBackend())),
                  (this.handler = n(this.handlerMonitor, this.decoratedRef))));
            },
          },
        ]),
        y
      );
    })(tt.Component);
  return (
    Lr(P, "DecoratedComponent", t),
    Lr(P, "displayName", "".concat(s, "(").concat(I, ")")),
    fx(P, t)
  );
}
function P4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Jy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function R4(e, t, n) {
  return t && Jy(e.prototype, t), n && Jy(e, n), e;
}
function is(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var ew = ["canDrag", "beginDrag", "isDragging", "endDrag"],
  N4 = ["beginDrag"],
  L4 = (function () {
    function e(t, n, r) {
      var o = this;
      P4(this, e),
        is(this, "props", null),
        is(this, "spec", void 0),
        is(this, "monitor", void 0),
        is(this, "ref", void 0),
        is(this, "beginDrag", function () {
          if (o.props) {
            var u = o.spec.beginDrag(o.props, o.monitor, o.ref.current);
            return u;
          }
        }),
        (this.spec = t),
        (this.monitor = n),
        (this.ref = r);
    }
    return (
      R4(e, [
        {
          key: "receiveProps",
          value: function (n) {
            this.props = n;
          },
        },
        {
          key: "canDrag",
          value: function () {
            return this.props
              ? this.spec.canDrag
                ? this.spec.canDrag(this.props, this.monitor)
                : !0
              : !1;
          },
        },
        {
          key: "isDragging",
          value: function (n, r) {
            return this.props
              ? this.spec.isDragging
                ? this.spec.isDragging(this.props, this.monitor)
                : r === n.getSourceId()
              : !1;
          },
        },
        {
          key: "endDrag",
          value: function () {
            this.props &&
              this.spec.endDrag &&
              this.spec.endDrag(this.props, this.monitor, Sx(this.ref));
          },
        },
      ]),
      e
    );
  })();
function A4(e) {
  return (
    Object.keys(e).forEach(function (t) {
      ve(
        ew.indexOf(t) > -1,
        'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
        ew.join(", "),
        t
      ),
        ve(
          typeof e[t] == "function",
          "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source",
          t,
          t,
          e[t]
        );
    }),
    N4.forEach(function (t) {
      ve(
        typeof e[t] == "function",
        "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source",
        t,
        t,
        e[t]
      );
    }),
    function (n, r) {
      return new L4(e, n, r);
    }
  );
}
function M4(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    o = e;
  typeof e != "function" &&
    (ve(
      Q_(e),
      'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
      e
    ),
    (o = function () {
      return e;
    })),
    ve(
      Of(t),
      'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
      t
    );
  var u = A4(t);
  return (
    ve(
      typeof n == "function",
      'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
      n
    ),
    ve(
      Of(r),
      'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
      n
    ),
    function (c) {
      return Tx({
        containerDisplayName: "DragSource",
        createHandler: u,
        registerHandler: h4,
        createConnector: function (p) {
          return new a4(p);
        },
        createMonitor: function (p) {
          return new e4(p);
        },
        DecoratedComponent: c,
        getType: o,
        collect: n,
        options: r,
      });
    }
  );
}
function F4(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function tw(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function z4(e, t, n) {
  return t && tw(e.prototype, t), n && tw(e, n), e;
}
function Tc(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var nw = ["canDrop", "hover", "drop"],
  $4 = (function () {
    function e(t, n, r) {
      F4(this, e),
        Tc(this, "props", null),
        Tc(this, "spec", void 0),
        Tc(this, "monitor", void 0),
        Tc(this, "ref", void 0),
        (this.spec = t),
        (this.monitor = n),
        (this.ref = r);
    }
    return (
      z4(e, [
        {
          key: "receiveProps",
          value: function (n) {
            this.props = n;
          },
        },
        {
          key: "receiveMonitor",
          value: function (n) {
            this.monitor = n;
          },
        },
        {
          key: "canDrop",
          value: function () {
            return this.spec.canDrop
              ? this.spec.canDrop(this.props, this.monitor)
              : !0;
          },
        },
        {
          key: "hover",
          value: function () {
            !this.spec.hover ||
              !this.props ||
              this.spec.hover(this.props, this.monitor, Sx(this.ref));
          },
        },
        {
          key: "drop",
          value: function () {
            if (this.spec.drop) {
              var n = this.spec.drop(
                this.props,
                this.monitor,
                this.ref.current
              );
              return n;
            }
          },
        },
      ]),
      e
    );
  })();
function H4(e) {
  return (
    Object.keys(e).forEach(function (t) {
      ve(
        nw.indexOf(t) > -1,
        'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
        nw.join(", "),
        t
      ),
        ve(
          typeof e[t] == "function",
          "Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target",
          t,
          t,
          e[t]
        );
    }),
    function (n, r) {
      return new $4(e, n, r);
    }
  );
}
function bx(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    o = e;
  typeof e != "function" &&
    (ve(
      Q_(e, !0),
      'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
      e
    ),
    (o = function () {
      return e;
    })),
    ve(
      Of(t),
      'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
      t
    );
  var u = H4(t);
  return (
    ve(
      typeof n == "function",
      'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
      n
    ),
    ve(
      Of(r),
      'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
      n
    ),
    function (c) {
      return Tx({
        containerDisplayName: "DropTarget",
        createHandler: u,
        registerHandler: p4,
        createMonitor: function (p) {
          return new r4(p);
        },
        createConnector: function (p) {
          return new d4(p);
        },
        DecoratedComponent: c,
        getType: o,
        collect: n,
        options: r,
      });
    }
  );
}
var B4 = Object.defineProperty,
  U4 = Object.defineProperties,
  j4 = Object.getOwnPropertyDescriptors,
  Pf = Object.getOwnPropertySymbols,
  Cx = Object.prototype.hasOwnProperty,
  Ix = Object.prototype.propertyIsEnumerable,
  rw = (e, t, n) =>
    t in e
      ? B4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Xc = (e, t) => {
    for (var n in t || (t = {})) Cx.call(t, n) && rw(e, n, t[n]);
    if (Pf) for (var n of Pf(t)) Ix.call(t, n) && rw(e, n, t[n]);
    return e;
  },
  W4 = (e, t) => U4(e, j4(t)),
  V4 = (e, t) => {
    var n = {};
    for (var r in e) Cx.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Pf)
      for (var r of Pf(e)) t.indexOf(r) < 0 && Ix.call(e, r) && (n[r] = e[r]);
    return n;
  };
const G4 = () => {},
  iw = (e, t, n) => Math.floor(Math.min(t, Math.max(e, n))),
  K4 = (e) =>
    e.type === "touchmove"
      ? { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY }
      : { x: e.clientX, y: e.clientY },
  Ex = 150,
  Dx =
    (e) =>
    ({ x: t, w: n, y: r, h: o }, u) => {
      const s = Math.min(n / 2, e);
      if (u.x >= t && u.x <= t + n && u.y >= r && u.y <= r + o) {
        if (u.x < t + s) return (u.x - t - s) / s;
        if (u.x > t + n - s) return -(t + n - u.x - s) / s;
      }
      return 0;
    },
  Ox =
    (e) =>
    ({ y: t, h: n, x: r, w: o }, u) => {
      const s = Math.min(n / 2, e);
      if (u.y >= t && u.y <= t + n && u.x >= r && u.x <= r + o) {
        if (u.y < t + s) return (u.y - t - s) / s;
        if (u.y > t + n - s) return -(t + n - u.y - s) / s;
      }
      return 0;
    },
  Y4 = Dx(Ex),
  Q4 = Ox(Ex),
  q4 = {
    onScrollChange: G4,
    verticalStrength: Q4,
    horizontalStrength: Y4,
    strengthMultiplier: 30,
  },
  kx = (e) =>
    fx((n) => {
      n = Xc(Xc({}, q4), n);
      let r;
      const o = tt.createRef();
      let u,
        s = 0,
        c = 0,
        f = !1,
        p = !1;
      const _ = y2(
        (m) => {
          const {
              left: k,
              top: O,
              width: C,
              height: N,
            } = r.getBoundingClientRect(),
            z = { x: k, y: O, w: C, h: N },
            Y = K4(m);
          (s = n.horizontalStrength(z, Y)),
            (c = n.verticalStrength(z, Y)),
            !u && (s || c) && b();
        },
        100,
        { trailing: !1 }
      );
      tt.useEffect(() => {
        (r = o.current),
          r &&
            typeof r.addEventListener == "function" &&
            r.addEventListener("dragover", w),
          window.document.body.addEventListener("touchmove", w);
        const m = n.dragDropManager
          .getMonitor()
          .subscribeToStateChange(() => S());
        return () => {
          r &&
            typeof r.removeEventListener == "function" &&
            r.removeEventListener("dragover", w),
            window.document.body.removeEventListener("touchmove", w),
            m(),
            F();
        };
      }, []);
      const w = (m) => {
          p && !f && (I(), _(m));
        },
        S = () => {
          const m = n.dragDropManager.getMonitor().isDragging();
          !p && m ? (p = !0) : p && !m && ((p = !1), F());
        },
        I = () => {
          (f = !0),
            window.document.body.addEventListener("dragover", _),
            window.document.body.addEventListener("touchmove", _);
        },
        P = () => {
          (f = !1),
            window.document.body.removeEventListener("dragover", _),
            window.document.body.removeEventListener("touchmove", _);
        },
        b = () => {
          let m = 0;
          const k = () => {
            if (n.strengthMultiplier === 0 || s + c === 0) {
              F();
              return;
            }
            if (((m += 1), m % 2)) {
              const {
                  scrollLeft: O,
                  scrollTop: C,
                  scrollWidth: N,
                  scrollHeight: z,
                  clientWidth: Y,
                  clientHeight: W,
                } = r,
                ue = s
                  ? (r.scrollLeft = iw(0, N - Y, O + s * n.strengthMultiplier))
                  : O,
                he = c
                  ? (r.scrollTop = iw(0, z - W, C + c * n.strengthMultiplier))
                  : C;
              n.onScrollChange(ue, he);
            }
            u = requestAnimationFrame(k);
          };
          k();
        },
        F = () => {
          P(), (s = 0), (c = 0), u && (cancelAnimationFrame(u), (u = void 0));
        },
        y = n,
        g = V4(y, [
          "strengthMultiplier",
          "verticalStrength",
          "horizontalStrength",
          "onScrollChange",
        ]);
      return X.createElement(e, Xc({ ref: o }, g));
    }, e),
  X4 = (e) => {
    const t = kx(e);
    return (n) =>
      X.createElement(cd.Consumer, null, ({ dragDropManager: r }) =>
        r === void 0
          ? void 0
          : X.createElement(t, W4(Xc({}, n), { dragDropManager: r }))
      );
  };
var Rf = { exports: {} };
Rf.exports;
(function (e, t) {
  var n = 200,
    r = "__lodash_hash_undefined__",
    o = 1,
    u = 2,
    s = 9007199254740991,
    c = "[object Arguments]",
    f = "[object Array]",
    p = "[object AsyncFunction]",
    _ = "[object Boolean]",
    w = "[object Date]",
    S = "[object Error]",
    I = "[object Function]",
    P = "[object GeneratorFunction]",
    b = "[object Map]",
    F = "[object Number]",
    y = "[object Null]",
    g = "[object Object]",
    m = "[object Promise]",
    k = "[object Proxy]",
    O = "[object RegExp]",
    C = "[object Set]",
    N = "[object String]",
    z = "[object Symbol]",
    Y = "[object Undefined]",
    W = "[object WeakMap]",
    ue = "[object ArrayBuffer]",
    he = "[object DataView]",
    Ce = "[object Float32Array]",
    ge = "[object Float64Array]",
    xe = "[object Int8Array]",
    Ie = "[object Int16Array]",
    Ue = "[object Int32Array]",
    ee = "[object Uint8Array]",
    de = "[object Uint8ClampedArray]",
    ae = "[object Uint16Array]",
    Ae = "[object Uint32Array]",
    Ve = /[\\^$.*+?()[\]{}|]/g,
    xn = /^\[object .+?Constructor\]$/,
    Ot = /^(?:0|[1-9]\d*)$/,
    Oe = {};
  (Oe[Ce] =
    Oe[ge] =
    Oe[xe] =
    Oe[Ie] =
    Oe[Ue] =
    Oe[ee] =
    Oe[de] =
    Oe[ae] =
    Oe[Ae] =
      !0),
    (Oe[c] =
      Oe[f] =
      Oe[ue] =
      Oe[_] =
      Oe[he] =
      Oe[w] =
      Oe[S] =
      Oe[I] =
      Oe[b] =
      Oe[F] =
      Oe[g] =
      Oe[O] =
      Oe[C] =
      Oe[N] =
      Oe[W] =
        !1);
  var Z = typeof Yn == "object" && Yn && Yn.Object === Object && Yn,
    we = typeof self == "object" && self && self.Object === Object && self,
    ke = Z || we || Function("return this")(),
    st = t && !t.nodeType && t,
    _t = st && !0 && e && !e.nodeType && e,
    $t = _t && _t.exports === st,
    ft = $t && Z.process,
    kt = (function () {
      try {
        return ft && ft.binding && ft.binding("util");
      } catch {}
    })(),
    Fn = kt && kt.isTypedArray;
  function lr(T, L) {
    for (
      var V = -1, le = T == null ? 0 : T.length, it = 0, Ee = [];
      ++V < le;

    ) {
      var dt = T[V];
      L(dt, V, T) && (Ee[it++] = dt);
    }
    return Ee;
  }
  function vt(T, L) {
    for (var V = -1, le = L.length, it = T.length; ++V < le; ) T[it + V] = L[V];
    return T;
  }
  function ll(T, L) {
    for (var V = -1, le = T == null ? 0 : T.length; ++V < le; )
      if (L(T[V], V, T)) return !0;
    return !1;
  }
  function Mi(T, L) {
    for (var V = -1, le = Array(T); ++V < T; ) le[V] = L(V);
    return le;
  }
  function Cr(T) {
    return function (L) {
      return T(L);
    };
  }
  function tn(T, L) {
    return T.has(L);
  }
  function ur(T, L) {
    return T?.[L];
  }
  function zn(T) {
    var L = -1,
      V = Array(T.size);
    return (
      T.forEach(function (le, it) {
        V[++L] = [it, le];
      }),
      V
    );
  }
  function Ir(T, L) {
    return function (V) {
      return T(L(V));
    };
  }
  function jr(T) {
    var L = -1,
      V = Array(T.size);
    return (
      T.forEach(function (le) {
        V[++L] = le;
      }),
      V
    );
  }
  var ul = Array.prototype,
    Wr = Function.prototype,
    Tn = Object.prototype,
    Fi = ke["__core-js_shared__"],
    zi = Wr.toString,
    Vt = Tn.hasOwnProperty,
    $i = (function () {
      var T = /[^.]+$/.exec((Fi && Fi.keys && Fi.keys.IE_PROTO) || "");
      return T ? "Symbol(src)_1." + T : "";
    })(),
    sl = Tn.toString,
    mu = RegExp(
      "^" +
        zi
          .call(Vt)
          .replace(Ve, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    al = $t ? ke.Buffer : void 0,
    Hi = ke.Symbol,
    cl = ke.Uint8Array,
    ta = Tn.propertyIsEnumerable,
    Td = ul.splice,
    li = Hi ? Hi.toStringTag : void 0,
    yu = Object.getOwnPropertySymbols,
    na = al ? al.isBuffer : void 0,
    bd = Ir(Object.keys, Object),
    wu = $n(ke, "DataView"),
    So = $n(ke, "Map"),
    Su = $n(ke, "Promise"),
    fl = $n(ke, "Set"),
    xu = $n(ke, "WeakMap"),
    xo = $n(Object, "create"),
    Cd = ai(wu),
    Id = ai(So),
    Tu = ai(Su),
    Ed = ai(fl),
    ra = ai(xu),
    bu = Hi ? Hi.prototype : void 0,
    Cu = bu ? bu.valueOf : void 0;
  function ui(T) {
    var L = -1,
      V = T == null ? 0 : T.length;
    for (this.clear(); ++L < V; ) {
      var le = T[L];
      this.set(le[0], le[1]);
    }
  }
  function Dd() {
    (this.__data__ = xo ? xo(null) : {}), (this.size = 0);
  }
  function Od(T) {
    var L = this.has(T) && delete this.__data__[T];
    return (this.size -= L ? 1 : 0), L;
  }
  function kd(T) {
    var L = this.__data__;
    if (xo) {
      var V = L[T];
      return V === r ? void 0 : V;
    }
    return Vt.call(L, T) ? L[T] : void 0;
  }
  function Pd(T) {
    var L = this.__data__;
    return xo ? L[T] !== void 0 : Vt.call(L, T);
  }
  function Rd(T, L) {
    var V = this.__data__;
    return (
      (this.size += this.has(T) ? 0 : 1),
      (V[T] = xo && L === void 0 ? r : L),
      this
    );
  }
  (ui.prototype.clear = Dd),
    (ui.prototype.delete = Od),
    (ui.prototype.get = kd),
    (ui.prototype.has = Pd),
    (ui.prototype.set = Rd);
  function sr(T) {
    var L = -1,
      V = T == null ? 0 : T.length;
    for (this.clear(); ++L < V; ) {
      var le = T[L];
      this.set(le[0], le[1]);
    }
  }
  function Nd() {
    (this.__data__ = []), (this.size = 0);
  }
  function Ld(T) {
    var L = this.__data__,
      V = To(L, T);
    if (V < 0) return !1;
    var le = L.length - 1;
    return V == le ? L.pop() : Td.call(L, V, 1), --this.size, !0;
  }
  function Ad(T) {
    var L = this.__data__,
      V = To(L, T);
    return V < 0 ? void 0 : L[V][1];
  }
  function Md(T) {
    return To(this.__data__, T) > -1;
  }
  function Fd(T, L) {
    var V = this.__data__,
      le = To(V, T);
    return le < 0 ? (++this.size, V.push([T, L])) : (V[le][1] = L), this;
  }
  (sr.prototype.clear = Nd),
    (sr.prototype.delete = Ld),
    (sr.prototype.get = Ad),
    (sr.prototype.has = Md),
    (sr.prototype.set = Fd);
  function si(T) {
    var L = -1,
      V = T == null ? 0 : T.length;
    for (this.clear(); ++L < V; ) {
      var le = T[L];
      this.set(le[0], le[1]);
    }
  }
  function dl() {
    (this.size = 0),
      (this.__data__ = {
        hash: new ui(),
        map: new (So || sr)(),
        string: new ui(),
      });
  }
  function zd(T) {
    var L = Bi(this, T).delete(T);
    return (this.size -= L ? 1 : 0), L;
  }
  function pl(T) {
    return Bi(this, T).get(T);
  }
  function $d(T) {
    return Bi(this, T).has(T);
  }
  function Hd(T, L) {
    var V = Bi(this, T),
      le = V.size;
    return V.set(T, L), (this.size += V.size == le ? 0 : 1), this;
  }
  (si.prototype.clear = dl),
    (si.prototype.delete = zd),
    (si.prototype.get = pl),
    (si.prototype.has = $d),
    (si.prototype.set = Hd);
  function hl(T) {
    var L = -1,
      V = T == null ? 0 : T.length;
    for (this.__data__ = new si(); ++L < V; ) this.add(T[L]);
  }
  function ia(T) {
    return this.__data__.set(T, r), this;
  }
  function oa(T) {
    return this.__data__.has(T);
  }
  (hl.prototype.add = hl.prototype.push = ia), (hl.prototype.has = oa);
  function Er(T) {
    var L = (this.__data__ = new sr(T));
    this.size = L.size;
  }
  function Bd() {
    (this.__data__ = new sr()), (this.size = 0);
  }
  function Ud(T) {
    var L = this.__data__,
      V = L.delete(T);
    return (this.size = L.size), V;
  }
  function jd(T) {
    return this.__data__.get(T);
  }
  function Wd(T) {
    return this.__data__.has(T);
  }
  function la(T, L) {
    var V = this.__data__;
    if (V instanceof sr) {
      var le = V.__data__;
      if (!So || le.length < n - 1)
        return le.push([T, L]), (this.size = ++V.size), this;
      V = this.__data__ = new si(le);
    }
    return V.set(T, L), (this.size = V.size), this;
  }
  (Er.prototype.clear = Bd),
    (Er.prototype.delete = Ud),
    (Er.prototype.get = jd),
    (Er.prototype.has = Wd),
    (Er.prototype.set = la);
  function ua(T, L) {
    var V = vl(T),
      le = !V && ya(T),
      it = !V && !le && Du(T),
      Ee = !V && !le && !it && xa(T),
      dt = V || le || it || Ee,
      At = dt ? Mi(T.length, String) : [],
      Be = At.length;
    for (var ot in T)
      (L || Vt.call(T, ot)) &&
        !(
          dt &&
          (ot == "length" ||
            (it && (ot == "offset" || ot == "parent")) ||
            (Ee &&
              (ot == "buffer" || ot == "byteLength" || ot == "byteOffset")) ||
            ha(ot, Be))
        ) &&
        At.push(ot);
    return At;
  }
  function To(T, L) {
    for (var V = T.length; V--; ) if (ma(T[V][0], L)) return V;
    return -1;
  }
  function Iu(T, L, V) {
    var le = L(T);
    return vl(T) ? le : vt(le, V(T));
  }
  function bo(T) {
    return T == null
      ? T === void 0
        ? Y
        : y
      : li && li in Object(T)
      ? da(T)
      : Kd(T);
  }
  function Eu(T) {
    return Io(T) && bo(T) == c;
  }
  function Co(T, L, V, le, it) {
    return T === L
      ? !0
      : T == null || L == null || (!Io(T) && !Io(L))
      ? T !== T && L !== L
      : sa(T, L, V, le, Co, it);
  }
  function sa(T, L, V, le, it, Ee) {
    var dt = vl(T),
      At = vl(L),
      Be = dt ? f : Vr(T),
      ot = At ? f : Vr(L);
    (Be = Be == c ? g : Be), (ot = ot == c ? g : ot);
    var Gt = Be == g,
      bn = ot == g,
      Mt = Be == ot;
    if (Mt && Du(T)) {
      if (!Du(L)) return !1;
      (dt = !0), (Gt = !1);
    }
    if (Mt && !Gt)
      return (
        Ee || (Ee = new Er()),
        dt || xa(T) ? gl(T, L, V, le, it, Ee) : Gd(T, L, Be, V, le, it, Ee)
      );
    if (!(V & o)) {
      var pt = Gt && Vt.call(T, "__wrapped__"),
        dn = bn && Vt.call(L, "__wrapped__");
      if (pt || dn) {
        var Dr = pt ? T.value() : T,
          ar = dn ? L.value() : L;
        return Ee || (Ee = new Er()), it(Dr, ar, V, le, Ee);
      }
    }
    return Mt ? (Ee || (Ee = new Er()), fa(T, L, V, le, it, Ee)) : !1;
  }
  function Vd(T) {
    if (!Sa(T) || _a(T)) return !1;
    var L = ml(T) ? mu : xn;
    return L.test(ai(T));
  }
  function aa(T) {
    return Io(T) && wa(T.length) && !!Oe[bo(T)];
  }
  function ca(T) {
    if (!va(T)) return bd(T);
    var L = [];
    for (var V in Object(T)) Vt.call(T, V) && V != "constructor" && L.push(V);
    return L;
  }
  function gl(T, L, V, le, it, Ee) {
    var dt = V & o,
      At = T.length,
      Be = L.length;
    if (At != Be && !(dt && Be > At)) return !1;
    var ot = Ee.get(T);
    if (ot && Ee.get(L)) return ot == L;
    var Gt = -1,
      bn = !0,
      Mt = V & u ? new hl() : void 0;
    for (Ee.set(T, L), Ee.set(L, T); ++Gt < At; ) {
      var pt = T[Gt],
        dn = L[Gt];
      if (le) var Dr = dt ? le(dn, pt, Gt, L, T, Ee) : le(pt, dn, Gt, T, L, Ee);
      if (Dr !== void 0) {
        if (Dr) continue;
        bn = !1;
        break;
      }
      if (Mt) {
        if (
          !ll(L, function (ar, Gr) {
            if (!tn(Mt, Gr) && (pt === ar || it(pt, ar, V, le, Ee)))
              return Mt.push(Gr);
          })
        ) {
          bn = !1;
          break;
        }
      } else if (!(pt === dn || it(pt, dn, V, le, Ee))) {
        bn = !1;
        break;
      }
    }
    return Ee.delete(T), Ee.delete(L), bn;
  }
  function Gd(T, L, V, le, it, Ee, dt) {
    switch (V) {
      case he:
        if (T.byteLength != L.byteLength || T.byteOffset != L.byteOffset)
          return !1;
        (T = T.buffer), (L = L.buffer);
      case ue:
        return !(T.byteLength != L.byteLength || !Ee(new cl(T), new cl(L)));
      case _:
      case w:
      case F:
        return ma(+T, +L);
      case S:
        return T.name == L.name && T.message == L.message;
      case O:
      case N:
        return T == L + "";
      case b:
        var At = zn;
      case C:
        var Be = le & o;
        if ((At || (At = jr), T.size != L.size && !Be)) return !1;
        var ot = dt.get(T);
        if (ot) return ot == L;
        (le |= u), dt.set(T, L);
        var Gt = gl(At(T), At(L), le, it, Ee, dt);
        return dt.delete(T), Gt;
      case z:
        if (Cu) return Cu.call(T) == Cu.call(L);
    }
    return !1;
  }
  function fa(T, L, V, le, it, Ee) {
    var dt = V & o,
      At = _l(T),
      Be = At.length,
      ot = _l(L),
      Gt = ot.length;
    if (Be != Gt && !dt) return !1;
    for (var bn = Be; bn--; ) {
      var Mt = At[bn];
      if (!(dt ? Mt in L : Vt.call(L, Mt))) return !1;
    }
    var pt = Ee.get(T);
    if (pt && Ee.get(L)) return pt == L;
    var dn = !0;
    Ee.set(T, L), Ee.set(L, T);
    for (var Dr = dt; ++bn < Be; ) {
      Mt = At[bn];
      var ar = T[Mt],
        Gr = L[Mt];
      if (le) var Ou = dt ? le(Gr, ar, Mt, L, T, Ee) : le(ar, Gr, Mt, T, L, Ee);
      if (!(Ou === void 0 ? ar === Gr || it(ar, Gr, V, le, Ee) : Ou)) {
        dn = !1;
        break;
      }
      Dr || (Dr = Mt == "constructor");
    }
    if (dn && !Dr) {
      var Eo = T.constructor,
        yl = L.constructor;
      Eo != yl &&
        "constructor" in T &&
        "constructor" in L &&
        !(
          typeof Eo == "function" &&
          Eo instanceof Eo &&
          typeof yl == "function" &&
          yl instanceof yl
        ) &&
        (dn = !1);
    }
    return Ee.delete(T), Ee.delete(L), dn;
  }
  function _l(T) {
    return Iu(T, qd, pa);
  }
  function Bi(T, L) {
    var V = T.__data__;
    return ga(L) ? V[typeof L == "string" ? "string" : "hash"] : V.map;
  }
  function $n(T, L) {
    var V = ur(T, L);
    return Vd(V) ? V : void 0;
  }
  function da(T) {
    var L = Vt.call(T, li),
      V = T[li];
    try {
      T[li] = void 0;
      var le = !0;
    } catch {}
    var it = sl.call(T);
    return le && (L ? (T[li] = V) : delete T[li]), it;
  }
  var pa = yu
      ? function (T) {
          return T == null
            ? []
            : ((T = Object(T)),
              lr(yu(T), function (L) {
                return ta.call(T, L);
              }));
        }
      : rt,
    Vr = bo;
  ((wu && Vr(new wu(new ArrayBuffer(1))) != he) ||
    (So && Vr(new So()) != b) ||
    (Su && Vr(Su.resolve()) != m) ||
    (fl && Vr(new fl()) != C) ||
    (xu && Vr(new xu()) != W)) &&
    (Vr = function (T) {
      var L = bo(T),
        V = L == g ? T.constructor : void 0,
        le = V ? ai(V) : "";
      if (le)
        switch (le) {
          case Cd:
            return he;
          case Id:
            return b;
          case Tu:
            return m;
          case Ed:
            return C;
          case ra:
            return W;
        }
      return L;
    });
  function ha(T, L) {
    return (
      (L = L ?? s),
      !!L &&
        (typeof T == "number" || Ot.test(T)) &&
        T > -1 &&
        T % 1 == 0 &&
        T < L
    );
  }
  function ga(T) {
    var L = typeof T;
    return L == "string" || L == "number" || L == "symbol" || L == "boolean"
      ? T !== "__proto__"
      : T === null;
  }
  function _a(T) {
    return !!$i && $i in T;
  }
  function va(T) {
    var L = T && T.constructor,
      V = (typeof L == "function" && L.prototype) || Tn;
    return T === V;
  }
  function Kd(T) {
    return sl.call(T);
  }
  function ai(T) {
    if (T != null) {
      try {
        return zi.call(T);
      } catch {}
      try {
        return T + "";
      } catch {}
    }
    return "";
  }
  function ma(T, L) {
    return T === L || (T !== T && L !== L);
  }
  var ya = Eu(
      (function () {
        return arguments;
      })()
    )
      ? Eu
      : function (T) {
          return Io(T) && Vt.call(T, "callee") && !ta.call(T, "callee");
        },
    vl = Array.isArray;
  function Yd(T) {
    return T != null && wa(T.length) && !ml(T);
  }
  var Du = na || et;
  function Qd(T, L) {
    return Co(T, L);
  }
  function ml(T) {
    if (!Sa(T)) return !1;
    var L = bo(T);
    return L == I || L == P || L == p || L == k;
  }
  function wa(T) {
    return typeof T == "number" && T > -1 && T % 1 == 0 && T <= s;
  }
  function Sa(T) {
    var L = typeof T;
    return T != null && (L == "object" || L == "function");
  }
  function Io(T) {
    return T != null && typeof T == "object";
  }
  var xa = Fn ? Cr(Fn) : aa;
  function qd(T) {
    return Yd(T) ? ua(T) : ca(T);
  }
  function rt() {
    return [];
  }
  function et() {
    return !1;
  }
  e.exports = Qd;
})(Rf, Rf.exports);
var Z4 = Rf.exports;
const ow = el(Z4);
function Px(e) {
  var t = null,
    n = function () {
      return t == null && (t = e()), t;
    };
  return n;
}
function J4(e, t) {
  return e.filter(function (n) {
    return n !== t;
  });
}
function eL(e, t) {
  var n = new Set(),
    r = function (s) {
      return n.add(s);
    };
  e.forEach(r), t.forEach(r);
  var o = [];
  return (
    n.forEach(function (u) {
      return o.push(u);
    }),
    o
  );
}
function tL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function lw(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function nL(e, t, n) {
  return t && lw(e.prototype, t), n && lw(e, n), e;
}
function uw(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var rL = (function () {
    function e(t) {
      tL(this, e),
        uw(this, "entered", []),
        uw(this, "isNodeInDocument", void 0),
        (this.isNodeInDocument = t);
    }
    return (
      nL(e, [
        {
          key: "enter",
          value: function (n) {
            var r = this,
              o = this.entered.length,
              u = function (c) {
                return r.isNodeInDocument(c) && (!c.contains || c.contains(n));
              };
            return (
              (this.entered = eL(this.entered.filter(u), [n])),
              o === 0 && this.entered.length > 0
            );
          },
        },
        {
          key: "leave",
          value: function (n) {
            var r = this.entered.length;
            return (
              (this.entered = J4(
                this.entered.filter(this.isNodeInDocument),
                n
              )),
              r > 0 && this.entered.length === 0
            );
          },
        },
        {
          key: "reset",
          value: function () {
            this.entered = [];
          },
        },
      ]),
      e
    );
  })(),
  iL = Px(function () {
    return /firefox/i.test(navigator.userAgent);
  }),
  Rx = Px(function () {
    return !!window.safari;
  });
function oL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sw(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function lL(e, t, n) {
  return t && sw(e.prototype, t), n && sw(e, n), e;
}
function os(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var aw = (function () {
    function e(t, n) {
      oL(this, e),
        os(this, "xs", void 0),
        os(this, "ys", void 0),
        os(this, "c1s", void 0),
        os(this, "c2s", void 0),
        os(this, "c3s", void 0);
      for (var r = t.length, o = [], u = 0; u < r; u++) o.push(u);
      o.sort(function (z, Y) {
        return t[z] < t[Y] ? -1 : 1;
      });
      for (var s = [], c = [], f, p, _ = 0; _ < r - 1; _++)
        (f = t[_ + 1] - t[_]), (p = n[_ + 1] - n[_]), s.push(f), c.push(p / f);
      for (var w = [c[0]], S = 0; S < s.length - 1; S++) {
        var I = c[S],
          P = c[S + 1];
        if (I * P <= 0) w.push(0);
        else {
          f = s[S];
          var b = s[S + 1],
            F = f + b;
          w.push((3 * F) / ((F + b) / I + (F + f) / P));
        }
      }
      w.push(c[c.length - 1]);
      for (var y = [], g = [], m, k = 0; k < w.length - 1; k++) {
        m = c[k];
        var O = w[k],
          C = 1 / s[k],
          N = O + w[k + 1] - m - m;
        y.push((m - O - N) * C), g.push(N * C * C);
      }
      (this.xs = t),
        (this.ys = n),
        (this.c1s = w),
        (this.c2s = y),
        (this.c3s = g);
    }
    return (
      lL(e, [
        {
          key: "interpolate",
          value: function (n) {
            var r = this.xs,
              o = this.ys,
              u = this.c1s,
              s = this.c2s,
              c = this.c3s,
              f = r.length - 1;
            if (n === r[f]) return o[f];
            for (var p = 0, _ = c.length - 1, w; p <= _; ) {
              w = Math.floor(0.5 * (p + _));
              var S = r[w];
              if (S < n) p = w + 1;
              else if (S > n) _ = w - 1;
              else return o[w];
            }
            f = Math.max(0, _);
            var I = n - r[f],
              P = I * I;
            return o[f] + u[f] * I + s[f] * P + c[f] * I * P;
          },
        },
      ]),
      e
    );
  })(),
  uL = 1;
function Nx(e) {
  var t = e.nodeType === uL ? e : e.parentElement;
  if (!t) return null;
  var n = t.getBoundingClientRect(),
    r = n.top,
    o = n.left;
  return { x: o, y: r };
}
function bc(e) {
  return { x: e.clientX, y: e.clientY };
}
function sL(e) {
  var t;
  return (
    e.nodeName === "IMG" &&
    (iL() ||
      !(
        (t = document.documentElement) !== null &&
        t !== void 0 &&
        t.contains(e)
      ))
  );
}
function aL(e, t, n, r) {
  var o = e ? t.width : n,
    u = e ? t.height : r;
  return (
    Rx() &&
      e &&
      ((u /= window.devicePixelRatio), (o /= window.devicePixelRatio)),
    { dragPreviewWidth: o, dragPreviewHeight: u }
  );
}
function cL(e, t, n, r, o) {
  var u = sL(t),
    s = u ? e : t,
    c = Nx(s),
    f = { x: n.x - c.x, y: n.y - c.y },
    p = e.offsetWidth,
    _ = e.offsetHeight,
    w = r.anchorX,
    S = r.anchorY,
    I = aL(u, t, p, _),
    P = I.dragPreviewWidth,
    b = I.dragPreviewHeight,
    F = function () {
      var N = new aw([0, 0.5, 1], [f.y, (f.y / _) * b, f.y + b - _]),
        z = N.interpolate(S);
      return Rx() && u && (z += (window.devicePixelRatio - 1) * b), z;
    },
    y = function () {
      var N = new aw([0, 0.5, 1], [f.x, (f.x / p) * P, f.x + P - p]);
      return N.interpolate(w);
    },
    g = o.offsetX,
    m = o.offsetY,
    k = g === 0 || g,
    O = m === 0 || m;
  return { x: k ? g : y(), y: O ? m : F() };
}
var Lx = "__NATIVE_FILE__",
  Ax = "__NATIVE_URL__",
  Mx = "__NATIVE_TEXT__",
  Fx = "__NATIVE_HTML__";
const cw = Object.freeze(
  Object.defineProperty(
    { __proto__: null, FILE: Lx, HTML: Fx, TEXT: Mx, URL: Ax },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function Dh(e, t, n) {
  var r = t.reduce(function (o, u) {
    return o || e.getData(u);
  }, "");
  return r ?? n;
}
var Al;
function Cc(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var Ag =
  ((Al = {}),
  Cc(Al, Lx, {
    exposeProperties: {
      files: function (t) {
        return Array.prototype.slice.call(t.files);
      },
      items: function (t) {
        return t.items;
      },
      dataTransfer: function (t) {
        return t;
      },
    },
    matchesTypes: ["Files"],
  }),
  Cc(Al, Fx, {
    exposeProperties: {
      html: function (t, n) {
        return Dh(t, n, "");
      },
      dataTransfer: function (t) {
        return t;
      },
    },
    matchesTypes: ["Html", "text/html"],
  }),
  Cc(Al, Ax, {
    exposeProperties: {
      urls: function (t, n) {
        return Dh(t, n, "").split(`
`);
      },
      dataTransfer: function (t) {
        return t;
      },
    },
    matchesTypes: ["Url", "text/uri-list"],
  }),
  Cc(Al, Mx, {
    exposeProperties: {
      text: function (t, n) {
        return Dh(t, n, "");
      },
      dataTransfer: function (t) {
        return t;
      },
    },
    matchesTypes: ["Text", "text/plain"],
  }),
  Al);
function fL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fw(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function dL(e, t, n) {
  return t && fw(e.prototype, t), n && fw(e, n), e;
}
function dw(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var pL = (function () {
  function e(t) {
    fL(this, e),
      dw(this, "item", void 0),
      dw(this, "config", void 0),
      (this.config = t),
      (this.item = {}),
      this.initializeExposedProperties();
  }
  return (
    dL(e, [
      {
        key: "initializeExposedProperties",
        value: function () {
          var n = this;
          Object.keys(this.config.exposeProperties).forEach(function (r) {
            Object.defineProperty(n.item, r, {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return (
                  console.warn(
                    `Browser doesn't allow reading "`.concat(
                      r,
                      '" until the drop event.'
                    )
                  ),
                  null
                );
              },
            });
          });
        },
      },
      {
        key: "loadDataTransfer",
        value: function (n) {
          var r = this;
          if (n) {
            var o = {};
            Object.keys(this.config.exposeProperties).forEach(function (u) {
              o[u] = {
                value: r.config.exposeProperties[u](n, r.config.matchesTypes),
                configurable: !0,
                enumerable: !0,
              };
            }),
              Object.defineProperties(this.item, o);
          }
        },
      },
      {
        key: "canDrag",
        value: function () {
          return !0;
        },
      },
      {
        key: "beginDrag",
        value: function () {
          return this.item;
        },
      },
      {
        key: "isDragging",
        value: function (n, r) {
          return r === n.getSourceId();
        },
      },
      { key: "endDrag", value: function () {} },
    ]),
    e
  );
})();
function hL(e, t) {
  var n = new pL(Ag[e]);
  return n.loadDataTransfer(t), n;
}
function Oh(e) {
  if (!e) return null;
  var t = Array.prototype.slice.call(e.types || []);
  return (
    Object.keys(Ag).filter(function (n) {
      var r = Ag[n].matchesTypes;
      return r.some(function (o) {
        return t.indexOf(o) > -1;
      });
    })[0] || null
  );
}
function gL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pw(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function _L(e, t, n) {
  return t && pw(e.prototype, t), n && pw(e, n), e;
}
function kh(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var vL = (function () {
  function e(t, n) {
    gL(this, e),
      kh(this, "ownerDocument", null),
      kh(this, "globalContext", void 0),
      kh(this, "optionsArgs", void 0),
      (this.globalContext = t),
      (this.optionsArgs = n);
  }
  return (
    _L(e, [
      {
        key: "window",
        get: function () {
          if (this.globalContext) return this.globalContext;
          if (typeof window < "u") return window;
        },
      },
      {
        key: "document",
        get: function () {
          var n;
          return (n = this.globalContext) !== null && n !== void 0 && n.document
            ? this.globalContext.document
            : this.window
            ? this.window.document
            : void 0;
        },
      },
      {
        key: "rootElement",
        get: function () {
          var n;
          return (
            ((n = this.optionsArgs) === null || n === void 0
              ? void 0
              : n.rootElement) || this.window
          );
        },
      },
    ]),
    e
  );
})();
function hw(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function gw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? hw(Object(n), !0).forEach(function (r) {
          Fe(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : hw(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function mL(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _w(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function yL(e, t, n) {
  return t && _w(e.prototype, t), n && _w(e, n), e;
}
function Fe(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var wL = (function () {
    function e(t, n, r) {
      var o = this;
      mL(this, e),
        Fe(this, "options", void 0),
        Fe(this, "actions", void 0),
        Fe(this, "monitor", void 0),
        Fe(this, "registry", void 0),
        Fe(this, "enterLeaveCounter", void 0),
        Fe(this, "sourcePreviewNodes", new Map()),
        Fe(this, "sourcePreviewNodeOptions", new Map()),
        Fe(this, "sourceNodes", new Map()),
        Fe(this, "sourceNodeOptions", new Map()),
        Fe(this, "dragStartSourceIds", null),
        Fe(this, "dropTargetIds", []),
        Fe(this, "dragEnterTargetIds", []),
        Fe(this, "currentNativeSource", null),
        Fe(this, "currentNativeHandle", null),
        Fe(this, "currentDragSourceNode", null),
        Fe(this, "altKeyPressed", !1),
        Fe(this, "mouseMoveTimeoutTimer", null),
        Fe(this, "asyncEndDragFrameId", null),
        Fe(this, "dragOverTargetIds", null),
        Fe(this, "lastClientOffset", null),
        Fe(this, "hoverRafId", null),
        Fe(this, "getSourceClientOffset", function (u) {
          var s = o.sourceNodes.get(u);
          return (s && Nx(s)) || null;
        }),
        Fe(this, "endDragNativeItem", function () {
          o.isDraggingNativeItem() &&
            (o.actions.endDrag(),
            o.currentNativeHandle &&
              o.registry.removeSource(o.currentNativeHandle),
            (o.currentNativeHandle = null),
            (o.currentNativeSource = null));
        }),
        Fe(this, "isNodeInDocument", function (u) {
          return !!(
            u &&
            o.document &&
            o.document.body &&
            o.document.body.contains(u)
          );
        }),
        Fe(this, "endDragIfSourceWasRemovedFromDOM", function () {
          var u = o.currentDragSourceNode;
          u == null ||
            o.isNodeInDocument(u) ||
            (o.clearCurrentDragSourceNode() &&
              o.monitor.isDragging() &&
              o.actions.endDrag());
        }),
        Fe(this, "handleTopDragStartCapture", function () {
          o.clearCurrentDragSourceNode(), (o.dragStartSourceIds = []);
        }),
        Fe(this, "handleTopDragStart", function (u) {
          if (!u.defaultPrevented) {
            var s = o.dragStartSourceIds;
            o.dragStartSourceIds = null;
            var c = bc(u);
            o.monitor.isDragging() && o.actions.endDrag(),
              o.actions.beginDrag(s || [], {
                publishSource: !1,
                getSourceClientOffset: o.getSourceClientOffset,
                clientOffset: c,
              });
            var f = u.dataTransfer,
              p = Oh(f);
            if (o.monitor.isDragging()) {
              if (f && typeof f.setDragImage == "function") {
                var _ = o.monitor.getSourceId(),
                  w = o.sourceNodes.get(_),
                  S = o.sourcePreviewNodes.get(_) || w;
                if (S) {
                  var I = o.getCurrentSourcePreviewNodeOptions(),
                    P = I.anchorX,
                    b = I.anchorY,
                    F = I.offsetX,
                    y = I.offsetY,
                    g = { anchorX: P, anchorY: b },
                    m = { offsetX: F, offsetY: y },
                    k = cL(w, S, c, g, m);
                  f.setDragImage(S, k.x, k.y);
                }
              }
              try {
                f?.setData("application/json", {});
              } catch {}
              o.setCurrentDragSourceNode(u.target);
              var O = o.getCurrentSourcePreviewNodeOptions(),
                C = O.captureDraggingState;
              C
                ? o.actions.publishDragSource()
                : setTimeout(function () {
                    return o.actions.publishDragSource();
                  }, 0);
            } else if (p) o.beginDragNativeItem(p);
            else {
              if (
                f &&
                !f.types &&
                ((u.target && !u.target.hasAttribute) ||
                  !u.target.hasAttribute("draggable"))
              )
                return;
              u.preventDefault();
            }
          }
        }),
        Fe(this, "handleTopDragEndCapture", function () {
          o.clearCurrentDragSourceNode() &&
            o.monitor.isDragging() &&
            o.actions.endDrag();
        }),
        Fe(this, "handleTopDragEnterCapture", function (u) {
          o.dragEnterTargetIds = [];
          var s = o.enterLeaveCounter.enter(u.target);
          if (!(!s || o.monitor.isDragging())) {
            var c = u.dataTransfer,
              f = Oh(c);
            f && o.beginDragNativeItem(f, c);
          }
        }),
        Fe(this, "handleTopDragEnter", function (u) {
          var s = o.dragEnterTargetIds;
          if (((o.dragEnterTargetIds = []), !!o.monitor.isDragging())) {
            (o.altKeyPressed = u.altKey),
              s.length > 0 && o.actions.hover(s, { clientOffset: bc(u) });
            var c = s.some(function (f) {
              return o.monitor.canDropOnTarget(f);
            });
            c &&
              (u.preventDefault(),
              u.dataTransfer &&
                (u.dataTransfer.dropEffect = o.getCurrentDropEffect()));
          }
        }),
        Fe(this, "handleTopDragOverCapture", function () {
          o.dragOverTargetIds = [];
        }),
        Fe(this, "handleTopDragOver", function (u) {
          var s = o.dragOverTargetIds;
          if (((o.dragOverTargetIds = []), !o.monitor.isDragging())) {
            u.preventDefault(),
              u.dataTransfer && (u.dataTransfer.dropEffect = "none");
            return;
          }
          (o.altKeyPressed = u.altKey),
            (o.lastClientOffset = bc(u)),
            o.hoverRafId === null &&
              typeof requestAnimationFrame < "u" &&
              (o.hoverRafId = requestAnimationFrame(function () {
                o.monitor.isDragging() &&
                  o.actions.hover(s || [], {
                    clientOffset: o.lastClientOffset,
                  }),
                  (o.hoverRafId = null);
              }));
          var c = (s || []).some(function (f) {
            return o.monitor.canDropOnTarget(f);
          });
          c
            ? (u.preventDefault(),
              u.dataTransfer &&
                (u.dataTransfer.dropEffect = o.getCurrentDropEffect()))
            : o.isDraggingNativeItem()
            ? u.preventDefault()
            : (u.preventDefault(),
              u.dataTransfer && (u.dataTransfer.dropEffect = "none"));
        }),
        Fe(this, "handleTopDragLeaveCapture", function (u) {
          o.isDraggingNativeItem() && u.preventDefault();
          var s = o.enterLeaveCounter.leave(u.target);
          s &&
            o.isDraggingNativeItem() &&
            setTimeout(function () {
              return o.endDragNativeItem();
            }, 0);
        }),
        Fe(this, "handleTopDropCapture", function (u) {
          if (((o.dropTargetIds = []), o.isDraggingNativeItem())) {
            var s;
            u.preventDefault(),
              (s = o.currentNativeSource) === null ||
                s === void 0 ||
                s.loadDataTransfer(u.dataTransfer);
          } else Oh(u.dataTransfer) && u.preventDefault();
          o.enterLeaveCounter.reset();
        }),
        Fe(this, "handleTopDrop", function (u) {
          var s = o.dropTargetIds;
          (o.dropTargetIds = []),
            o.actions.hover(s, { clientOffset: bc(u) }),
            o.actions.drop({ dropEffect: o.getCurrentDropEffect() }),
            o.isDraggingNativeItem()
              ? o.endDragNativeItem()
              : o.monitor.isDragging() && o.actions.endDrag();
        }),
        Fe(this, "handleSelectStart", function (u) {
          var s = u.target;
          typeof s.dragDrop == "function" &&
            (s.tagName === "INPUT" ||
              s.tagName === "SELECT" ||
              s.tagName === "TEXTAREA" ||
              s.isContentEditable ||
              (u.preventDefault(), s.dragDrop()));
        }),
        (this.options = new vL(n, r)),
        (this.actions = t.getActions()),
        (this.monitor = t.getMonitor()),
        (this.registry = t.getRegistry()),
        (this.enterLeaveCounter = new rL(this.isNodeInDocument));
    }
    return (
      yL(e, [
        {
          key: "profile",
          value: function () {
            var n, r;
            return {
              sourcePreviewNodes: this.sourcePreviewNodes.size,
              sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
              sourceNodeOptions: this.sourceNodeOptions.size,
              sourceNodes: this.sourceNodes.size,
              dragStartSourceIds:
                ((n = this.dragStartSourceIds) === null || n === void 0
                  ? void 0
                  : n.length) || 0,
              dropTargetIds: this.dropTargetIds.length,
              dragEnterTargetIds: this.dragEnterTargetIds.length,
              dragOverTargetIds:
                ((r = this.dragOverTargetIds) === null || r === void 0
                  ? void 0
                  : r.length) || 0,
            };
          },
        },
        {
          key: "window",
          get: function () {
            return this.options.window;
          },
        },
        {
          key: "document",
          get: function () {
            return this.options.document;
          },
        },
        {
          key: "rootElement",
          get: function () {
            return this.options.rootElement;
          },
        },
        {
          key: "setup",
          value: function () {
            var n = this.rootElement;
            if (n !== void 0) {
              if (n.__isReactDndBackendSetUp)
                throw new Error(
                  "Cannot have two HTML5 backends at the same time."
                );
              (n.__isReactDndBackendSetUp = !0), this.addEventListeners(n);
            }
          },
        },
        {
          key: "teardown",
          value: function () {
            var n = this.rootElement;
            if (
              n !== void 0 &&
              ((n.__isReactDndBackendSetUp = !1),
              this.removeEventListeners(this.rootElement),
              this.clearCurrentDragSourceNode(),
              this.asyncEndDragFrameId)
            ) {
              var r;
              (r = this.window) === null ||
                r === void 0 ||
                r.cancelAnimationFrame(this.asyncEndDragFrameId);
            }
          },
        },
        {
          key: "connectDragPreview",
          value: function (n, r, o) {
            var u = this;
            return (
              this.sourcePreviewNodeOptions.set(n, o),
              this.sourcePreviewNodes.set(n, r),
              function () {
                u.sourcePreviewNodes.delete(n),
                  u.sourcePreviewNodeOptions.delete(n);
              }
            );
          },
        },
        {
          key: "connectDragSource",
          value: function (n, r, o) {
            var u = this;
            this.sourceNodes.set(n, r), this.sourceNodeOptions.set(n, o);
            var s = function (p) {
                return u.handleDragStart(p, n);
              },
              c = function (p) {
                return u.handleSelectStart(p);
              };
            return (
              r.setAttribute("draggable", "true"),
              r.addEventListener("dragstart", s),
              r.addEventListener("selectstart", c),
              function () {
                u.sourceNodes.delete(n),
                  u.sourceNodeOptions.delete(n),
                  r.removeEventListener("dragstart", s),
                  r.removeEventListener("selectstart", c),
                  r.setAttribute("draggable", "false");
              }
            );
          },
        },
        {
          key: "connectDropTarget",
          value: function (n, r) {
            var o = this,
              u = function (p) {
                return o.handleDragEnter(p, n);
              },
              s = function (p) {
                return o.handleDragOver(p, n);
              },
              c = function (p) {
                return o.handleDrop(p, n);
              };
            return (
              r.addEventListener("dragenter", u),
              r.addEventListener("dragover", s),
              r.addEventListener("drop", c),
              function () {
                r.removeEventListener("dragenter", u),
                  r.removeEventListener("dragover", s),
                  r.removeEventListener("drop", c);
              }
            );
          },
        },
        {
          key: "addEventListeners",
          value: function (n) {
            n.addEventListener &&
              (n.addEventListener("dragstart", this.handleTopDragStart),
              n.addEventListener(
                "dragstart",
                this.handleTopDragStartCapture,
                !0
              ),
              n.addEventListener("dragend", this.handleTopDragEndCapture, !0),
              n.addEventListener("dragenter", this.handleTopDragEnter),
              n.addEventListener(
                "dragenter",
                this.handleTopDragEnterCapture,
                !0
              ),
              n.addEventListener(
                "dragleave",
                this.handleTopDragLeaveCapture,
                !0
              ),
              n.addEventListener("dragover", this.handleTopDragOver),
              n.addEventListener("dragover", this.handleTopDragOverCapture, !0),
              n.addEventListener("drop", this.handleTopDrop),
              n.addEventListener("drop", this.handleTopDropCapture, !0));
          },
        },
        {
          key: "removeEventListeners",
          value: function (n) {
            n.removeEventListener &&
              (n.removeEventListener("dragstart", this.handleTopDragStart),
              n.removeEventListener(
                "dragstart",
                this.handleTopDragStartCapture,
                !0
              ),
              n.removeEventListener(
                "dragend",
                this.handleTopDragEndCapture,
                !0
              ),
              n.removeEventListener("dragenter", this.handleTopDragEnter),
              n.removeEventListener(
                "dragenter",
                this.handleTopDragEnterCapture,
                !0
              ),
              n.removeEventListener(
                "dragleave",
                this.handleTopDragLeaveCapture,
                !0
              ),
              n.removeEventListener("dragover", this.handleTopDragOver),
              n.removeEventListener(
                "dragover",
                this.handleTopDragOverCapture,
                !0
              ),
              n.removeEventListener("drop", this.handleTopDrop),
              n.removeEventListener("drop", this.handleTopDropCapture, !0));
          },
        },
        {
          key: "getCurrentSourceNodeOptions",
          value: function () {
            var n = this.monitor.getSourceId(),
              r = this.sourceNodeOptions.get(n);
            return gw(
              { dropEffect: this.altKeyPressed ? "copy" : "move" },
              r || {}
            );
          },
        },
        {
          key: "getCurrentDropEffect",
          value: function () {
            return this.isDraggingNativeItem()
              ? "copy"
              : this.getCurrentSourceNodeOptions().dropEffect;
          },
        },
        {
          key: "getCurrentSourcePreviewNodeOptions",
          value: function () {
            var n = this.monitor.getSourceId(),
              r = this.sourcePreviewNodeOptions.get(n);
            return gw(
              { anchorX: 0.5, anchorY: 0.5, captureDraggingState: !1 },
              r || {}
            );
          },
        },
        {
          key: "isDraggingNativeItem",
          value: function () {
            var n = this.monitor.getItemType();
            return Object.keys(cw).some(function (r) {
              return cw[r] === n;
            });
          },
        },
        {
          key: "beginDragNativeItem",
          value: function (n, r) {
            this.clearCurrentDragSourceNode(),
              (this.currentNativeSource = hL(n, r)),
              (this.currentNativeHandle = this.registry.addSource(
                n,
                this.currentNativeSource
              )),
              this.actions.beginDrag([this.currentNativeHandle]);
          },
        },
        {
          key: "setCurrentDragSourceNode",
          value: function (n) {
            var r = this;
            this.clearCurrentDragSourceNode(), (this.currentDragSourceNode = n);
            var o = 1e3;
            this.mouseMoveTimeoutTimer = setTimeout(function () {
              var u;
              return (u = r.rootElement) === null || u === void 0
                ? void 0
                : u.addEventListener(
                    "mousemove",
                    r.endDragIfSourceWasRemovedFromDOM,
                    !0
                  );
            }, o);
          },
        },
        {
          key: "clearCurrentDragSourceNode",
          value: function () {
            if (this.currentDragSourceNode) {
              if (((this.currentDragSourceNode = null), this.rootElement)) {
                var n;
                (n = this.window) === null ||
                  n === void 0 ||
                  n.clearTimeout(this.mouseMoveTimeoutTimer || void 0),
                  this.rootElement.removeEventListener(
                    "mousemove",
                    this.endDragIfSourceWasRemovedFromDOM,
                    !0
                  );
              }
              return (this.mouseMoveTimeoutTimer = null), !0;
            }
            return !1;
          },
        },
        {
          key: "handleDragStart",
          value: function (n, r) {
            n.defaultPrevented ||
              (this.dragStartSourceIds || (this.dragStartSourceIds = []),
              this.dragStartSourceIds.unshift(r));
          },
        },
        {
          key: "handleDragEnter",
          value: function (n, r) {
            this.dragEnterTargetIds.unshift(r);
          },
        },
        {
          key: "handleDragOver",
          value: function (n, r) {
            this.dragOverTargetIds === null && (this.dragOverTargetIds = []),
              this.dragOverTargetIds.unshift(r);
          },
        },
        {
          key: "handleDrop",
          value: function (n, r) {
            this.dropTargetIds.unshift(r);
          },
        },
      ]),
      e
    );
  })(),
  SL = function (t, n, r) {
    return new wL(t, n, r);
  };
const _d = 0,
  mo = 1,
  gu = 2,
  zx = 4;
function $x(e, t) {
  return (n) => e(t(n));
}
function xL(e, t) {
  return t(e);
}
function Hx(e, t) {
  return (n) => e(t, n);
}
function vw(e, t) {
  return () => e(t);
}
function vd(e, t) {
  return t(e), e;
}
function St(...e) {
  return e;
}
function TL(e) {
  e();
}
function mw(e) {
  return () => e;
}
function bL(...e) {
  return () => {
    e.map(TL);
  };
}
function Z_(e) {
  return e !== void 0;
}
function _u() {}
function nt(e, t) {
  return e(mo, t);
}
function Le(e, t) {
  e(_d, t);
}
function J_(e) {
  e(gu);
}
function Xn(e) {
  return e(zx);
}
function _e(e, t) {
  return nt(e, Hx(t, _d));
}
function Ni(e, t) {
  const n = e(mo, (r) => {
    n(), t(r);
  });
  return n;
}
function Ge() {
  const e = [];
  return (t, n) => {
    switch (t) {
      case gu:
        e.splice(0, e.length);
        return;
      case mo:
        return (
          e.push(n),
          () => {
            const r = e.indexOf(n);
            r > -1 && e.splice(r, 1);
          }
        );
      case _d:
        e.slice().forEach((r) => {
          r(n);
        });
        return;
      default:
        throw new Error(`unrecognized action ${t}`);
    }
  };
}
function re(e) {
  let t = e;
  const n = Ge();
  return (r, o) => {
    switch (r) {
      case mo:
        o(t);
        break;
      case _d:
        t = o;
        break;
      case zx:
        return t;
    }
    return n(r, o);
  };
}
function CL(e) {
  let t, n;
  const r = () => t && t();
  return function (o, u) {
    switch (o) {
      case mo:
        return u
          ? n === u
            ? void 0
            : (r(), (n = u), (t = nt(e, u)), t)
          : (r(), _u);
      case gu:
        r(), (n = null);
        return;
      default:
        throw new Error(`unrecognized action ${o}`);
    }
  };
}
function Jn(e) {
  return vd(Ge(), (t) => _e(e, t));
}
function vn(e, t) {
  return vd(re(t), (n) => _e(e, n));
}
function IL(...e) {
  return (t) => e.reduceRight(xL, t);
}
function Q(e, ...t) {
  const n = IL(...t);
  return (r, o) => {
    switch (r) {
      case mo:
        return nt(e, n(o));
      case gu:
        J_(e);
        return;
    }
  };
}
function Bx(e, t) {
  return e === t;
}
function wt(e = Bx) {
  let t;
  return (n) => (r) => {
    e(t, r) || ((t = r), n(r));
  };
}
function be(e) {
  return (t) => (n) => {
    e(n) && t(n);
  };
}
function fe(e) {
  return (t) => $x(t, e);
}
function Ti(e) {
  return (t) => () => t(e);
}
function ni(e, t) {
  return (n) => (r) => n((t = e(t, r)));
}
function fu(e) {
  return (t) => (n) => {
    e > 0 ? e-- : t(n);
  };
}
function to(e) {
  let t = null,
    n;
  return (r) => (o) => {
    (t = o),
      !n &&
        (n = setTimeout(() => {
          (n = void 0), r(t);
        }, e));
  };
}
function yw(e) {
  let t, n;
  return (r) => (o) => {
    (t = o),
      n && clearTimeout(n),
      (n = setTimeout(() => {
        r(t);
      }, e));
  };
}
function ze(...e) {
  const t = new Array(e.length);
  let n = 0,
    r = null;
  const o = Math.pow(2, e.length) - 1;
  return (
    e.forEach((u, s) => {
      const c = Math.pow(2, s);
      nt(u, (f) => {
        const p = n;
        (n = n | c), (t[s] = f), p !== o && n === o && r && (r(), (r = null));
      });
    }),
    (u) => (s) => {
      const c = () => u([s].concat(t));
      n === o ? c() : (r = c);
    }
  );
}
function ww(...e) {
  return function (t, n) {
    switch (t) {
      case mo:
        return bL(...e.map((r) => nt(r, n)));
      case gu:
        return;
      default:
        throw new Error(`unrecognized action ${t}`);
    }
  };
}
function Te(e, t = Bx) {
  return Q(e, wt(t));
}
function Yt(...e) {
  const t = Ge(),
    n = new Array(e.length);
  let r = 0;
  const o = Math.pow(2, e.length) - 1;
  return (
    e.forEach((u, s) => {
      const c = Math.pow(2, s);
      nt(u, (f) => {
        (n[s] = f), (r = r | c), r === o && Le(t, n);
      });
    }),
    function (u, s) {
      switch (u) {
        case mo:
          return r === o && s(n), nt(t, s);
        case gu:
          return J_(t);
        default:
          throw new Error(`unrecognized action ${u}`);
      }
    }
  );
}
function Je(e, t = [], { singleton: n } = { singleton: !0 }) {
  return { id: EL(), constructor: e, dependencies: t, singleton: n };
}
const EL = () => Symbol();
function DL(e) {
  const t = new Map(),
    n = ({ id: r, constructor: o, dependencies: u, singleton: s }) => {
      if (s && t.has(r)) return t.get(r);
      const c = o(u.map((f) => n(f)));
      return s && t.set(r, c), c;
    };
  return n(e);
}
function OL(e, t) {
  const n = {},
    r = {};
  let o = 0;
  const u = e.length;
  for (; o < u; ) (r[e[o]] = 1), (o += 1);
  for (const s in t) r.hasOwnProperty(s) || (n[s] = t[s]);
  return n;
}
const Ic = typeof document < "u" ? X.useLayoutEffect : X.useEffect;
function Ux(e, t, n) {
  const r = Object.keys(t.required || {}),
    o = Object.keys(t.optional || {}),
    u = Object.keys(t.methods || {}),
    s = Object.keys(t.events || {}),
    c = X.createContext({});
  function f(b, F) {
    b.propsReady && Le(b.propsReady, !1);
    for (const y of r) {
      const g = b[t.required[y]];
      Le(g, F[y]);
    }
    for (const y of o)
      if (y in F) {
        const g = b[t.optional[y]];
        Le(g, F[y]);
      }
    b.propsReady && Le(b.propsReady, !0);
  }
  function p(b) {
    return u.reduce(
      (F, y) => (
        (F[y] = (g) => {
          const m = b[t.methods[y]];
          Le(m, g);
        }),
        F
      ),
      {}
    );
  }
  function _(b) {
    return s.reduce((F, y) => ((F[y] = CL(b[t.events[y]])), F), {});
  }
  return {
    Component: X.forwardRef((b, F) => {
      const { children: y, ...g } = b,
        [m] = X.useState(() => vd(DL(e), (O) => f(O, g))),
        [k] = X.useState(vw(_, m));
      return (
        Ic(() => {
          for (const O of s) O in g && nt(k[O], g[O]);
          return () => {
            Object.values(k).map(J_);
          };
        }, [g, k, m]),
        Ic(() => {
          f(m, g);
        }),
        X.useImperativeHandle(F, mw(p(m))),
        X.createElement(
          c.Provider,
          { value: m },
          n ? X.createElement(n, OL([...r, ...o, ...s], g), y) : y
        )
      );
    }),
    usePublisher: (b) => X.useCallback(Hx(Le, X.useContext(c)[b]), [b]),
    useEmitterValue: (b) => {
      const y = X.useContext(c)[b],
        [g, m] = X.useState(vw(Xn, y));
      return (
        Ic(
          () =>
            nt(y, (k) => {
              k !== g && m(mw(k));
            }),
          [y, g]
        ),
        g
      );
    },
    useEmitter: (b, F) => {
      const g = X.useContext(c)[b];
      Ic(() => nt(g, F), [F, g]);
    },
  };
}
const kL = typeof document < "u" ? X.useLayoutEffect : X.useEffect,
  PL = kL;
var er = ((e) => (
  (e[(e.DEBUG = 0)] = "DEBUG"),
  (e[(e.INFO = 1)] = "INFO"),
  (e[(e.WARN = 2)] = "WARN"),
  (e[(e.ERROR = 3)] = "ERROR"),
  e
))(er || {});
const RL = { 0: "debug", 1: "log", 2: "warn", 3: "error" },
  NL = () => (typeof globalThis > "u" ? window : globalThis),
  yo = Je(
    () => {
      const e = re(3);
      return {
        log: re((n, r, o = 1) => {
          var u;
          const s = (u = NL().VIRTUOSO_LOG_LEVEL) != null ? u : Xn(e);
          o >= s &&
            console[RL[o]](
              "%creact-virtuoso: %c%s %o",
              "color: #0253b3; font-weight: bold",
              "color: initial",
              n,
              r
            );
        }),
        logLevel: e,
      };
    },
    [],
    { singleton: !0 }
  );
function ev(e, t = !0) {
  const n = X.useRef(null);
  let r = (o) => {};
  if (typeof ResizeObserver < "u") {
    const o = X.useMemo(
      () =>
        new ResizeObserver((u) => {
          const s = u[0].target;
          s.offsetParent !== null && e(s);
        }),
      [e]
    );
    r = (u) => {
      u && t
        ? (o.observe(u), (n.current = u))
        : (n.current && o.unobserve(n.current), (n.current = null));
    };
  }
  return { ref: n, callbackRef: r };
}
function rl(e, t = !0) {
  return ev(e, t).callbackRef;
}
function LL(e, t, n, r, o, u, s) {
  const c = X.useCallback(
    (f) => {
      const p = AL(f.children, t, "offsetHeight", o);
      let _ = f.parentElement;
      for (; !_.dataset.virtuosoScroller; ) _ = _.parentElement;
      const w = _.lastElementChild.dataset.viewportType === "window",
        S = s
          ? s.scrollTop
          : w
          ? window.pageYOffset || document.documentElement.scrollTop
          : _.scrollTop,
        I = s
          ? s.scrollHeight
          : w
          ? document.documentElement.scrollHeight
          : _.scrollHeight,
        P = s ? s.offsetHeight : w ? window.innerHeight : _.offsetHeight;
      r({ scrollTop: Math.max(S, 0), scrollHeight: I, viewportHeight: P }),
        u?.(ML("row-gap", getComputedStyle(f).rowGap, o)),
        p !== null && e(p);
    },
    [e, t, o, u, s, r]
  );
  return ev(c, n);
}
function AL(e, t, n, r) {
  const o = e.length;
  if (o === 0) return null;
  const u = [];
  for (let s = 0; s < o; s++) {
    const c = e.item(s);
    if (!c || c.dataset.index === void 0) continue;
    const f = parseInt(c.dataset.index),
      p = parseFloat(c.dataset.knownSize),
      _ = t(c, n);
    if (
      (_ === 0 &&
        r("Zero-sized element, this should not happen", { child: c }, er.ERROR),
      _ === p)
    )
      continue;
    const w = u[u.length - 1];
    u.length === 0 || w.size !== _ || w.endIndex !== f - 1
      ? u.push({ startIndex: f, endIndex: f, size: _ })
      : u[u.length - 1].endIndex++;
  }
  return u;
}
function ML(e, t, n) {
  return (
    t !== "normal" &&
      !t?.endsWith("px") &&
      n(`${e} was not resolved to pixel value correctly`, t, er.WARN),
    t === "normal" ? 0 : parseInt(t ?? "0", 10)
  );
}
function po(e, t) {
  return Math.round(e.getBoundingClientRect()[t]);
}
function jx(e, t) {
  return Math.abs(e - t) < 1.01;
}
function Wx(e, t, n, r = _u, o) {
  const u = X.useRef(null),
    s = X.useRef(null),
    c = X.useRef(null),
    f = X.useCallback(
      (w) => {
        const S = w.target,
          I = S === window || S === document,
          P = I
            ? window.pageYOffset || document.documentElement.scrollTop
            : S.scrollTop,
          b = I ? document.documentElement.scrollHeight : S.scrollHeight,
          F = I ? window.innerHeight : S.offsetHeight,
          y = () => {
            e({
              scrollTop: Math.max(P, 0),
              scrollHeight: b,
              viewportHeight: F,
            });
          };
        w.suppressFlushSync ? y() : HR.flushSync(y),
          s.current !== null &&
            (P === s.current || P <= 0 || P === b - F) &&
            ((s.current = null),
            t(!0),
            c.current && (clearTimeout(c.current), (c.current = null)));
      },
      [e, t]
    );
  X.useEffect(() => {
    const w = o || u.current;
    return (
      r(o || u.current),
      f({ target: w, suppressFlushSync: !0 }),
      w.addEventListener("scroll", f, { passive: !0 }),
      () => {
        r(null), w.removeEventListener("scroll", f);
      }
    );
  }, [u, f, n, r, o]);
  function p(w) {
    const S = u.current;
    if (!S || ("offsetHeight" in S && S.offsetHeight === 0)) return;
    const I = w.behavior === "smooth";
    let P, b, F;
    S === window
      ? ((b = Math.max(
          po(document.documentElement, "height"),
          document.documentElement.scrollHeight
        )),
        (P = window.innerHeight),
        (F = document.documentElement.scrollTop))
      : ((b = S.scrollHeight), (P = po(S, "height")), (F = S.scrollTop));
    const y = b - P;
    if (
      ((w.top = Math.ceil(Math.max(Math.min(y, w.top), 0))),
      jx(P, b) || w.top === F)
    ) {
      e({ scrollTop: F, scrollHeight: b, viewportHeight: P }), I && t(!0);
      return;
    }
    I
      ? ((s.current = w.top),
        c.current && clearTimeout(c.current),
        (c.current = setTimeout(() => {
          (c.current = null), (s.current = null), t(!0);
        }, 1e3)))
      : (s.current = null),
      S.scrollTo(w);
  }
  function _(w) {
    u.current.scrollBy(w);
  }
  return { scrollerRef: u, scrollByCallback: _, scrollToCallback: p };
}
const Sn = Je(
    () => {
      const e = Ge(),
        t = Ge(),
        n = re(0),
        r = Ge(),
        o = re(0),
        u = Ge(),
        s = Ge(),
        c = re(0),
        f = re(0),
        p = re(0),
        _ = re(0),
        w = Ge(),
        S = Ge(),
        I = re(!1);
      return (
        _e(
          Q(
            e,
            fe(({ scrollTop: P }) => P)
          ),
          t
        ),
        _e(
          Q(
            e,
            fe(({ scrollHeight: P }) => P)
          ),
          s
        ),
        _e(t, o),
        {
          scrollContainerState: e,
          scrollTop: t,
          viewportHeight: u,
          headerHeight: c,
          fixedHeaderHeight: f,
          fixedFooterHeight: p,
          footerHeight: _,
          scrollHeight: s,
          smoothScrollTargetReached: r,
          scrollTo: w,
          scrollBy: S,
          statefulScrollTop: o,
          deviation: n,
          scrollingInProgress: I,
        }
      );
    },
    [],
    { singleton: !0 }
  ),
  Us = { lvl: 0 };
function Vx(e, t, n, r = Us, o = Us) {
  return { k: e, v: t, lvl: n, l: r, r: o };
}
function ut(e) {
  return e === Us;
}
function nu() {
  return Us;
}
function Mg(e, t) {
  if (ut(e)) return Us;
  const { k: n, l: r, r: o } = e;
  if (t === n) {
    if (ut(r)) return o;
    if (ut(o)) return r;
    {
      const [u, s] = Gx(r);
      return Zc(jt(e, { k: u, v: s, l: Kx(r) }));
    }
  } else return t < n ? Zc(jt(e, { l: Mg(r, t) })) : Zc(jt(e, { r: Mg(o, t) }));
}
function js(e, t) {
  if (!ut(e)) return t === e.k ? e.v : t < e.k ? js(e.l, t) : js(e.r, t);
}
function Ur(e, t, n = "k") {
  if (ut(e)) return [-1 / 0, void 0];
  if (Number(e[n]) === t) return [e.k, e.v];
  if (Number(e[n]) < t) {
    const r = Ur(e.r, t, n);
    return r[0] === -1 / 0 ? [e.k, e.v] : r;
  }
  return Ur(e.l, t, n);
}
function Qn(e, t, n) {
  return ut(e)
    ? Vx(t, n, 1)
    : t === e.k
    ? jt(e, { k: t, v: n })
    : t < e.k
    ? Sw(jt(e, { l: Qn(e.l, t, n) }))
    : Sw(jt(e, { r: Qn(e.r, t, n) }));
}
function Fg(e, t, n) {
  if (ut(e)) return [];
  const { k: r, v: o, l: u, r: s } = e;
  let c = [];
  return (
    r > t && (c = c.concat(Fg(u, t, n))),
    r >= t && r <= n && c.push({ k: r, v: o }),
    r <= n && (c = c.concat(Fg(s, t, n))),
    c
  );
}
function Uo(e) {
  return ut(e) ? [] : [...Uo(e.l), { k: e.k, v: e.v }, ...Uo(e.r)];
}
function Gx(e) {
  return ut(e.r) ? [e.k, e.v] : Gx(e.r);
}
function Kx(e) {
  return ut(e.r) ? e.l : Zc(jt(e, { r: Kx(e.r) }));
}
function jt(e, t) {
  return Vx(
    t.k !== void 0 ? t.k : e.k,
    t.v !== void 0 ? t.v : e.v,
    t.lvl !== void 0 ? t.lvl : e.lvl,
    t.l !== void 0 ? t.l : e.l,
    t.r !== void 0 ? t.r : e.r
  );
}
function Ph(e) {
  return ut(e) || e.lvl > e.r.lvl;
}
function Sw(e) {
  return zg(Qx(e));
}
function Zc(e) {
  const { l: t, r: n, lvl: r } = e;
  if (n.lvl >= r - 1 && t.lvl >= r - 1) return e;
  if (r > n.lvl + 1) {
    if (Ph(t)) return Qx(jt(e, { lvl: r - 1 }));
    if (!ut(t) && !ut(t.r))
      return jt(t.r, {
        l: jt(t, { r: t.r.l }),
        r: jt(e, { l: t.r.r, lvl: r - 1 }),
        lvl: r,
      });
    throw new Error("Unexpected empty nodes");
  } else {
    if (Ph(e)) return zg(jt(e, { lvl: r - 1 }));
    if (!ut(n) && !ut(n.l)) {
      const o = n.l,
        u = Ph(o) ? n.lvl - 1 : n.lvl;
      return jt(o, {
        l: jt(e, { r: o.l, lvl: r - 1 }),
        r: zg(jt(n, { l: o.r, lvl: u })),
        lvl: o.lvl + 1,
      });
    } else throw new Error("Unexpected empty nodes");
  }
}
function md(e, t, n) {
  if (ut(e)) return [];
  const r = Ur(e, t)[0];
  return FL(Fg(e, r, n));
}
function Yx(e, t) {
  const n = e.length;
  if (n === 0) return [];
  let { index: r, value: o } = t(e[0]);
  const u = [];
  for (let s = 1; s < n; s++) {
    const { index: c, value: f } = t(e[s]);
    u.push({ start: r, end: c - 1, value: o }), (r = c), (o = f);
  }
  return u.push({ start: r, end: 1 / 0, value: o }), u;
}
function FL(e) {
  return Yx(e, ({ k: t, v: n }) => ({ index: t, value: n }));
}
function zg(e) {
  const { r: t, lvl: n } = e;
  return !ut(t) && !ut(t.r) && t.lvl === n && t.r.lvl === n
    ? jt(t, { l: jt(e, { r: t.l }), lvl: n + 1 })
    : e;
}
function Qx(e) {
  const { l: t } = e;
  return !ut(t) && t.lvl === e.lvl ? jt(t, { r: jt(e, { l: t.r }) }) : e;
}
function Nf(e, t, n, r = 0) {
  let o = e.length - 1;
  for (; r <= o; ) {
    const u = Math.floor((r + o) / 2),
      s = e[u],
      c = n(s, t);
    if (c === 0) return u;
    if (c === -1) {
      if (o - r < 2) return u - 1;
      o = u - 1;
    } else {
      if (o === r) return u;
      r = u + 1;
    }
  }
  throw new Error(
    `Failed binary finding record in array - ${e.join(",")}, searched for ${t}`
  );
}
function qx(e, t, n) {
  return e[Nf(e, t, n)];
}
function zL(e, t, n, r) {
  const o = Nf(e, t, r),
    u = Nf(e, n, r, o);
  return e.slice(o, u + 1);
}
const tv = Je(() => ({ recalcInProgress: re(!1) }), [], { singleton: !0 });
function $L(e) {
  const { size: t, startIndex: n, endIndex: r } = e;
  return (o) =>
    o.start === n && (o.end === r || o.end === 1 / 0) && o.value === t;
}
function xw(e, t) {
  let n = 0,
    r = 0;
  for (; n < e; ) (n += t[r + 1] - t[r] - 1), r++;
  return r - (n === e ? 0 : 1);
}
function HL(e, t) {
  let n = ut(e) ? 0 : 1 / 0;
  for (const r of t) {
    const { size: o, startIndex: u, endIndex: s } = r;
    if (((n = Math.min(n, u)), ut(e))) {
      e = Qn(e, 0, o);
      continue;
    }
    const c = md(e, u - 1, s + 1);
    if (c.some($L(r))) continue;
    let f = !1,
      p = !1;
    for (const { start: _, end: w, value: S } of c)
      f ? (s >= _ || o === S) && (e = Mg(e, _)) : ((p = S !== o), (f = !0)),
        w > s && s >= _ && S !== o && (e = Qn(e, s + 1, S));
    p && (e = Qn(e, u, o));
  }
  return [e, n];
}
function BL() {
  return {
    offsetTree: [],
    sizeTree: nu(),
    groupOffsetTree: nu(),
    lastIndex: 0,
    lastOffset: 0,
    lastSize: 0,
    groupIndices: [],
  };
}
function nv({ index: e }, t) {
  return t === e ? 0 : t < e ? -1 : 1;
}
function UL({ offset: e }, t) {
  return t === e ? 0 : t < e ? -1 : 1;
}
function jL(e) {
  return { index: e.index, value: e };
}
function WL(e, t, n, r = 0) {
  return (
    r > 0 && (t = Math.max(t, qx(e, r, nv).offset)), Yx(zL(e, t, n, UL), jL)
  );
}
function $g(e, t, n, r) {
  let o = e,
    u = 0,
    s = 0,
    c = 0,
    f = 0;
  if (t !== 0) {
    (f = Nf(o, t - 1, nv)), (c = o[f].offset);
    const _ = Ur(n, t - 1);
    (u = _[0]),
      (s = _[1]),
      o.length && o[f].size === Ur(n, t)[1] && (f -= 1),
      (o = o.slice(0, f + 1));
  } else o = [];
  for (const { start: p, value: _ } of md(n, t, 1 / 0)) {
    const w = p - u,
      S = w * s + c + w * r;
    o.push({ offset: S, size: _, index: p }), (u = p), (c = S), (s = _);
  }
  return { offsetTree: o, lastIndex: u, lastOffset: c, lastSize: s };
}
function VL(e, [t, n, r, o]) {
  t.length > 0 && r("received item sizes", t, er.DEBUG);
  const u = e.sizeTree;
  let s = u,
    c = 0;
  if (n.length > 0 && ut(u) && t.length === 2) {
    const S = t[0].size,
      I = t[1].size;
    s = n.reduce((P, b) => Qn(Qn(P, b, S), b + 1, I), s);
  } else [s, c] = HL(s, t);
  if (s === u) return e;
  const {
    offsetTree: f,
    lastIndex: p,
    lastSize: _,
    lastOffset: w,
  } = $g(e.offsetTree, c, s, o);
  return {
    sizeTree: s,
    offsetTree: f,
    lastIndex: p,
    lastOffset: w,
    lastSize: _,
    groupOffsetTree: n.reduce((S, I) => Qn(S, I, Ws(I, f, o)), nu()),
    groupIndices: n,
  };
}
function Ws(e, t, n) {
  if (t.length === 0) return 0;
  const { offset: r, index: o, size: u } = qx(t, e, nv),
    s = e - o,
    c = u * s + (s - 1) * n + r;
  return c > 0 ? c + n : c;
}
function GL(e) {
  return typeof e.groupIndex < "u";
}
function Xx(e, t, n) {
  if (GL(e)) return t.groupIndices[e.groupIndex] + 1;
  {
    const r = e.index === "LAST" ? n : e.index;
    let o = Zx(r, t);
    return (o = Math.max(0, o, Math.min(n, o))), o;
  }
}
function Zx(e, t) {
  if (!yd(t)) return e;
  let n = 0;
  for (; t.groupIndices[n] <= e + n; ) n++;
  return e + n;
}
function yd(e) {
  return !ut(e.groupOffsetTree);
}
function KL(e) {
  return Uo(e).map(({ k: t, v: n }, r, o) => {
    const u = o[r + 1],
      s = u ? u.k - 1 : 1 / 0;
    return { startIndex: t, endIndex: s, size: n };
  });
}
const YL = { offsetHeight: "height", offsetWidth: "width" },
  oi = Je(
    ([{ log: e }, { recalcInProgress: t }]) => {
      const n = Ge(),
        r = Ge(),
        o = vn(r, 0),
        u = Ge(),
        s = Ge(),
        c = re(0),
        f = re([]),
        p = re(void 0),
        _ = re(void 0),
        w = re((O, C) => po(O, YL[C])),
        S = re(void 0),
        I = re(0),
        P = BL(),
        b = vn(Q(n, ze(f, e, I), ni(VL, P), wt()), P),
        F = vn(
          Q(
            f,
            wt(),
            ni((O, C) => ({ prev: O.current, current: C }), {
              prev: [],
              current: [],
            }),
            fe(({ prev: O }) => O)
          ),
          []
        );
      _e(
        Q(
          f,
          be((O) => O.length > 0),
          ze(b, I),
          fe(([O, C, N]) => {
            const z = O.reduce(
              (Y, W, ue) => Qn(Y, W, Ws(W, C.offsetTree, N) || ue),
              nu()
            );
            return { ...C, groupIndices: O, groupOffsetTree: z };
          })
        ),
        b
      ),
        _e(
          Q(
            r,
            ze(b),
            be(([O, { lastIndex: C }]) => O < C),
            fe(([O, { lastIndex: C, lastSize: N }]) => [
              { startIndex: O, endIndex: C, size: N },
            ])
          ),
          n
        ),
        _e(p, _);
      const y = vn(
        Q(
          p,
          fe((O) => O === void 0)
        ),
        !0
      );
      _e(
        Q(
          _,
          be((O) => O !== void 0 && ut(Xn(b).sizeTree)),
          fe((O) => [{ startIndex: 0, endIndex: 0, size: O }])
        ),
        n
      );
      const g = Jn(
        Q(
          n,
          ze(b),
          ni(({ sizes: O }, [C, N]) => ({ changed: N !== O, sizes: N }), {
            changed: !1,
            sizes: P,
          }),
          fe((O) => O.changed)
        )
      );
      nt(
        Q(
          c,
          ni((O, C) => ({ diff: O.prev - C, prev: C }), { diff: 0, prev: 0 }),
          fe((O) => O.diff)
        ),
        (O) => {
          const { groupIndices: C } = Xn(b);
          if (O > 0) Le(t, !0), Le(u, O + xw(O, C));
          else if (O < 0) {
            const N = Xn(F);
            N.length > 0 && (O -= xw(-O, N)), Le(s, O);
          }
        }
      ),
        nt(Q(c, ze(e)), ([O, C]) => {
          O < 0 &&
            C(
              "`firstItemIndex` prop should not be set to less than zero. If you don't know the total count, just use a very high value",
              { firstItemIndex: c },
              er.ERROR
            );
        });
      const m = Jn(u);
      _e(
        Q(
          u,
          ze(b),
          fe(([O, C]) => {
            const N = C.groupIndices.length > 0,
              z = [],
              Y = C.lastSize;
            if (N) {
              const W = js(C.sizeTree, 0);
              let ue = 0,
                he = 0;
              for (; ue < O; ) {
                const xe = C.groupIndices[he],
                  Ie =
                    C.groupIndices.length === he + 1
                      ? 1 / 0
                      : C.groupIndices[he + 1] - xe - 1;
                z.push({ startIndex: xe, endIndex: xe, size: W }),
                  z.push({
                    startIndex: xe + 1,
                    endIndex: xe + 1 + Ie - 1,
                    size: Y,
                  }),
                  he++,
                  (ue += Ie + 1);
              }
              const Ce = Uo(C.sizeTree);
              return (
                ue !== O && Ce.shift(),
                Ce.reduce(
                  (xe, { k: Ie, v: Ue }) => {
                    let ee = xe.ranges;
                    return (
                      xe.prevSize !== 0 &&
                        (ee = [
                          ...xe.ranges,
                          {
                            startIndex: xe.prevIndex,
                            endIndex: Ie + O - 1,
                            size: xe.prevSize,
                          },
                        ]),
                      { ranges: ee, prevIndex: Ie + O, prevSize: Ue }
                    );
                  },
                  { ranges: z, prevIndex: O, prevSize: 0 }
                ).ranges
              );
            }
            return Uo(C.sizeTree).reduce(
              (W, { k: ue, v: he }) => ({
                ranges: [
                  ...W.ranges,
                  {
                    startIndex: W.prevIndex,
                    endIndex: ue + O - 1,
                    size: W.prevSize,
                  },
                ],
                prevIndex: ue + O,
                prevSize: he,
              }),
              { ranges: [], prevIndex: 0, prevSize: Y }
            ).ranges;
          })
        ),
        n
      );
      const k = Jn(
        Q(
          s,
          ze(b, I),
          fe(([O, { offsetTree: C }, N]) => {
            const z = -O;
            return Ws(z, C, N);
          })
        )
      );
      return (
        _e(
          Q(
            s,
            ze(b, I),
            fe(([O, C, N]) => {
              if (C.groupIndices.length > 0) {
                if (ut(C.sizeTree)) return C;
                let Y = nu();
                const W = Xn(F);
                let ue = 0,
                  he = 0,
                  Ce = 0;
                for (; ue < -O; ) {
                  Ce = W[he];
                  const xe = W[he + 1] - Ce - 1;
                  he++, (ue += xe + 1);
                }
                if (
                  ((Y = Uo(C.sizeTree).reduce(
                    (xe, { k: Ie, v: Ue }) => Qn(xe, Math.max(0, Ie + O), Ue),
                    Y
                  )),
                  ue !== -O)
                ) {
                  const xe = js(C.sizeTree, Ce);
                  Y = Qn(Y, 0, xe);
                  const Ie = Ur(C.sizeTree, -O + 1)[1];
                  Y = Qn(Y, 1, Ie);
                }
                return { ...C, sizeTree: Y, ...$g(C.offsetTree, 0, Y, N) };
              } else {
                const Y = Uo(C.sizeTree).reduce(
                  (W, { k: ue, v: he }) => Qn(W, Math.max(0, ue + O), he),
                  nu()
                );
                return { ...C, sizeTree: Y, ...$g(C.offsetTree, 0, Y, N) };
              }
            })
          ),
          b
        ),
        {
          data: S,
          totalCount: r,
          sizeRanges: n,
          groupIndices: f,
          defaultItemSize: _,
          fixedItemSize: p,
          unshiftWith: u,
          shiftWith: s,
          shiftWithOffset: k,
          beforeUnshiftWith: m,
          firstItemIndex: c,
          gap: I,
          sizes: b,
          listRefresh: g,
          statefulTotalCount: o,
          trackItemSizes: y,
          itemSize: w,
        }
      );
    },
    St(yo, tv),
    { singleton: !0 }
  ),
  QL =
    typeof document < "u" && "scrollBehavior" in document.documentElement.style;
function Jx(e) {
  const t = typeof e == "number" ? { index: e } : e;
  return (
    t.align || (t.align = "start"),
    (!t.behavior || !QL) && (t.behavior = "auto"),
    t.offset || (t.offset = 0),
    t
  );
}
const Zs = Je(
  ([
    { sizes: e, totalCount: t, listRefresh: n, gap: r },
    {
      scrollingInProgress: o,
      viewportHeight: u,
      scrollTo: s,
      smoothScrollTargetReached: c,
      headerHeight: f,
      footerHeight: p,
      fixedHeaderHeight: _,
      fixedFooterHeight: w,
    },
    { log: S },
  ]) => {
    const I = Ge(),
      P = re(0);
    let b = null,
      F = null,
      y = null;
    function g() {
      b && (b(), (b = null)),
        y && (y(), (y = null)),
        F && (clearTimeout(F), (F = null)),
        Le(o, !1);
    }
    return (
      _e(
        Q(
          I,
          ze(e, u, t, P, f, p, S),
          ze(r, _, w),
          fe(([[m, k, O, C, N, z, Y, W], ue, he, Ce]) => {
            const ge = Jx(m),
              { align: xe, behavior: Ie, offset: Ue } = ge,
              ee = C - 1,
              de = Xx(ge, k, ee);
            let ae = Ws(de, k.offsetTree, ue) + z;
            xe === "end"
              ? ((ae += he + Ur(k.sizeTree, de)[1] - O + Ce),
                de === ee && (ae += Y))
              : xe === "center"
              ? (ae += (he + Ur(k.sizeTree, de)[1] - O + Ce) / 2)
              : (ae -= N),
              Ue && (ae += Ue);
            const Ae = (Ve) => {
              g(),
                Ve
                  ? (W("retrying to scroll to", { location: m }, er.DEBUG),
                    Le(I, m))
                  : W("list did not change, scroll successful", {}, er.DEBUG);
            };
            if ((g(), Ie === "smooth")) {
              let Ve = !1;
              (y = nt(n, (xn) => {
                Ve = Ve || xn;
              })),
                (b = Ni(c, () => {
                  Ae(Ve);
                }));
            } else b = Ni(Q(n, qL(150)), Ae);
            return (
              (F = setTimeout(() => {
                g();
              }, 1200)),
              Le(o, !0),
              W(
                "scrolling from index to",
                { index: de, top: ae, behavior: Ie },
                er.DEBUG
              ),
              { top: ae, behavior: Ie }
            );
          })
        ),
        s
      ),
      { scrollToIndex: I, topListHeight: P }
    );
  },
  St(oi, Sn, yo),
  { singleton: !0 }
);
function qL(e) {
  return (t) => {
    const n = setTimeout(() => {
      t(!1);
    }, e);
    return (r) => {
      r && (t(!0), clearTimeout(n));
    };
  };
}
const Vs = "up",
  xs = "down",
  XL = "none",
  ZL = {
    atBottom: !1,
    notAtBottomBecause: "NOT_SHOWING_LAST_ITEM",
    state: {
      offsetBottom: 0,
      scrollTop: 0,
      viewportHeight: 0,
      scrollHeight: 0,
    },
  },
  JL = 0,
  Js = Je(
    ([
      {
        scrollContainerState: e,
        scrollTop: t,
        viewportHeight: n,
        headerHeight: r,
        footerHeight: o,
        scrollBy: u,
      },
    ]) => {
      const s = re(!1),
        c = re(!0),
        f = Ge(),
        p = Ge(),
        _ = re(4),
        w = re(JL),
        S = vn(
          Q(
            ww(Q(Te(t), fu(1), Ti(!0)), Q(Te(t), fu(1), Ti(!1), yw(100))),
            wt()
          ),
          !1
        ),
        I = vn(Q(ww(Q(u, Ti(!0)), Q(u, Ti(!1), yw(200))), wt()), !1);
      _e(
        Q(
          Yt(Te(t), Te(w)),
          fe(([g, m]) => g <= m),
          wt()
        ),
        c
      ),
        _e(Q(c, to(50)), p);
      const P = Jn(
          Q(
            Yt(e, Te(n), Te(r), Te(o), Te(_)),
            ni((g, [{ scrollTop: m, scrollHeight: k }, O, C, N, z]) => {
              const Y = m + O - k > -z,
                W = { viewportHeight: O, scrollTop: m, scrollHeight: k };
              if (Y) {
                let he, Ce;
                return (
                  m > g.state.scrollTop
                    ? ((he = "SCROLLED_DOWN"), (Ce = g.state.scrollTop - m))
                    : ((he = "SIZE_DECREASED"),
                      (Ce = g.state.scrollTop - m || g.scrollTopDelta)),
                  {
                    atBottom: !0,
                    state: W,
                    atBottomBecause: he,
                    scrollTopDelta: Ce,
                  }
                );
              }
              let ue;
              return (
                W.scrollHeight > g.state.scrollHeight
                  ? (ue = "SIZE_INCREASED")
                  : O < g.state.viewportHeight
                  ? (ue = "VIEWPORT_HEIGHT_DECREASING")
                  : m < g.state.scrollTop
                  ? (ue = "SCROLLING_UPWARDS")
                  : (ue = "NOT_FULLY_SCROLLED_TO_LAST_ITEM_BOTTOM"),
                { atBottom: !1, notAtBottomBecause: ue, state: W }
              );
            }, ZL),
            wt((g, m) => g && g.atBottom === m.atBottom)
          )
        ),
        b = vn(
          Q(
            e,
            ni(
              (g, { scrollTop: m, scrollHeight: k, viewportHeight: O }) => {
                if (jx(g.scrollHeight, k))
                  return {
                    scrollTop: m,
                    scrollHeight: k,
                    jump: 0,
                    changed: !1,
                  };
                {
                  const C = k - (m + O) < 1;
                  return g.scrollTop !== m && C
                    ? {
                        scrollHeight: k,
                        scrollTop: m,
                        jump: g.scrollTop - m,
                        changed: !0,
                      }
                    : { scrollHeight: k, scrollTop: m, jump: 0, changed: !0 };
                }
              },
              { scrollHeight: 0, jump: 0, scrollTop: 0, changed: !1 }
            ),
            be((g) => g.changed),
            fe((g) => g.jump)
          ),
          0
        );
      _e(
        Q(
          P,
          fe((g) => g.atBottom)
        ),
        s
      ),
        _e(Q(s, to(50)), f);
      const F = re(xs);
      _e(
        Q(
          e,
          fe(({ scrollTop: g }) => g),
          wt(),
          ni(
            (g, m) =>
              Xn(I)
                ? { direction: g.direction, prevScrollTop: m }
                : {
                    direction: m < g.prevScrollTop ? Vs : xs,
                    prevScrollTop: m,
                  },
            { direction: xs, prevScrollTop: 0 }
          ),
          fe((g) => g.direction)
        ),
        F
      ),
        _e(Q(e, to(50), Ti(XL)), F);
      const y = re(0);
      return (
        _e(
          Q(
            S,
            be((g) => !g),
            Ti(0)
          ),
          y
        ),
        _e(
          Q(
            t,
            to(100),
            ze(S),
            be(([g, m]) => !!m),
            ni(([g, m], [k]) => [m, k], [0, 0]),
            fe(([g, m]) => m - g)
          ),
          y
        ),
        {
          isScrolling: S,
          isAtTop: c,
          isAtBottom: s,
          atBottomState: P,
          atTopStateChange: p,
          atBottomStateChange: f,
          scrollDirection: F,
          atBottomThreshold: _,
          atTopThreshold: w,
          scrollVelocity: y,
          lastJumpDueToItemResize: b,
        }
      );
    },
    St(Sn)
  ),
  wo = Je(
    ([{ log: e }]) => {
      const t = re(!1),
        n = Jn(
          Q(
            t,
            be((r) => r),
            wt()
          )
        );
      return (
        nt(t, (r) => {
          r && Xn(e)("props updated", {}, er.DEBUG);
        }),
        { propsReady: t, didMount: n }
      );
    },
    St(yo),
    { singleton: !0 }
  );
function rv(e, t) {
  e == 0 ? t() : requestAnimationFrame(() => rv(e - 1, t));
}
function iv(e, t) {
  const n = t - 1;
  return typeof e == "number" ? e : e.index === "LAST" ? n : e.index;
}
const ea = Je(
  ([
    { sizes: e, listRefresh: t, defaultItemSize: n },
    { scrollTop: r },
    { scrollToIndex: o },
    { didMount: u },
  ]) => {
    const s = re(!0),
      c = re(0),
      f = re(!1);
    return (
      _e(
        Q(
          u,
          ze(c),
          be(([p, _]) => !!_),
          Ti(!1)
        ),
        s
      ),
      nt(
        Q(
          Yt(t, u),
          ze(s, e, n, f),
          be(
            ([[, p], _, { sizeTree: w }, S, I]) =>
              p && (!ut(w) || Z_(S)) && !_ && !I
          ),
          ze(c)
        ),
        ([, p]) => {
          Le(f, !0),
            rv(3, () => {
              Ni(r, () => Le(s, !0)), Le(o, p);
            });
        }
      ),
      { scrolledToInitialItem: s, initialTopMostItemIndex: c }
    );
  },
  St(oi, Sn, Zs, wo),
  { singleton: !0 }
);
function Tw(e) {
  return e ? (e === "smooth" ? "smooth" : "auto") : !1;
}
const eA = (e, t) => (typeof e == "function" ? Tw(e(t)) : t && Tw(e)),
  tA = Je(
    ([
      { totalCount: e, listRefresh: t },
      { isAtBottom: n, atBottomState: r },
      { scrollToIndex: o },
      { scrolledToInitialItem: u },
      { propsReady: s, didMount: c },
      { log: f },
      { scrollingInProgress: p },
    ]) => {
      const _ = re(!1),
        w = Ge();
      let S = null;
      function I(b) {
        Le(o, { index: "LAST", align: "end", behavior: b });
      }
      nt(
        Q(
          Yt(Q(Te(e), fu(1)), c),
          ze(Te(_), n, u, p),
          fe(([[b, F], y, g, m, k]) => {
            let O = F && m,
              C = "auto";
            return (
              O && ((C = eA(y, g || k)), (O = O && !!C)),
              { totalCount: b, shouldFollow: O, followOutputBehavior: C }
            );
          }),
          be(({ shouldFollow: b }) => b)
        ),
        ({ totalCount: b, followOutputBehavior: F }) => {
          S && (S(), (S = null)),
            (S = Ni(t, () => {
              Xn(f)("following output to ", { totalCount: b }, er.DEBUG),
                I(F),
                (S = null);
            }));
        }
      );
      function P(b) {
        const F = Ni(r, (y) => {
          b &&
            !y.atBottom &&
            y.notAtBottomBecause === "SIZE_INCREASED" &&
            !S &&
            (Xn(f)("scrolling to bottom due to increased size", {}, er.DEBUG),
            I("auto"));
        });
        setTimeout(F, 100);
      }
      return (
        nt(
          Q(
            Yt(Te(_), e, s),
            be(([b, , F]) => b && F),
            ni(({ value: b }, [, F]) => ({ refreshed: b === F, value: F }), {
              refreshed: !1,
              value: 0,
            }),
            be(({ refreshed: b }) => b),
            ze(_, e)
          ),
          ([, b]) => {
            P(b !== !1);
          }
        ),
        nt(w, () => {
          P(Xn(_) !== !1);
        }),
        nt(Yt(Te(_), r), ([b, F]) => {
          b &&
            !F.atBottom &&
            F.notAtBottomBecause === "VIEWPORT_HEIGHT_DECREASING" &&
            I("auto");
        }),
        { followOutput: _, autoscrollToBottom: w }
      );
    },
    St(oi, Js, Zs, ea, wo, yo, Sn)
  );
function nA(e) {
  return e.reduce(
    (t, n) => (t.groupIndices.push(t.totalCount), (t.totalCount += n + 1), t),
    { totalCount: 0, groupIndices: [] }
  );
}
const eT = Je(
  ([
    { totalCount: e, groupIndices: t, sizes: n },
    { scrollTop: r, headerHeight: o },
  ]) => {
    const u = Ge(),
      s = Ge(),
      c = Jn(Q(u, fe(nA)));
    return (
      _e(
        Q(
          c,
          fe((f) => f.totalCount)
        ),
        e
      ),
      _e(
        Q(
          c,
          fe((f) => f.groupIndices)
        ),
        t
      ),
      _e(
        Q(
          Yt(r, n, o),
          be(([f, p]) => yd(p)),
          fe(([f, p, _]) => Ur(p.groupOffsetTree, Math.max(f - _, 0), "v")[0]),
          wt(),
          fe((f) => [f])
        ),
        s
      ),
      { groupCounts: u, topItemsIndexes: s }
    );
  },
  St(oi, Sn)
);
function Gs(e, t) {
  return !!(e && e[0] === t[0] && e[1] === t[1]);
}
function tT(e, t) {
  return !!(e && e.startIndex === t.startIndex && e.endIndex === t.endIndex);
}
const Lf = "top",
  Af = "bottom",
  bw = "none";
function Cw(e, t, n) {
  return typeof e == "number"
    ? (n === Vs && t === Lf) || (n === xs && t === Af)
      ? e
      : 0
    : n === Vs
    ? t === Lf
      ? e.main
      : e.reverse
    : t === Af
    ? e.main
    : e.reverse;
}
function Iw(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const ov = Je(
  ([
    {
      scrollTop: e,
      viewportHeight: t,
      deviation: n,
      headerHeight: r,
      fixedHeaderHeight: o,
    },
  ]) => {
    const u = Ge(),
      s = re(0),
      c = re(0),
      f = re(0),
      p = vn(
        Q(
          Yt(Te(e), Te(t), Te(r), Te(u, Gs), Te(f), Te(s), Te(o), Te(n), Te(c)),
          fe(([_, w, S, [I, P], b, F, y, g, m]) => {
            const k = _ - g,
              O = F + y,
              C = Math.max(S - k, 0);
            let N = bw;
            const z = Iw(m, Lf),
              Y = Iw(m, Af);
            return (
              (I -= g),
              (I += S + y),
              (P += S + y),
              (P -= g),
              I > _ + O - z && (N = Vs),
              P < _ - C + w + Y && (N = xs),
              N !== bw
                ? [
                    Math.max(k - S - Cw(b, Lf, N) - z, 0),
                    k - C - y + w + Cw(b, Af, N) + Y,
                  ]
                : null
            );
          }),
          be((_) => _ != null),
          wt(Gs)
        ),
        [0, 0]
      );
    return {
      listBoundary: u,
      overscan: f,
      topListHeight: s,
      increaseViewportBy: c,
      visibleRange: p,
    };
  },
  St(Sn),
  { singleton: !0 }
);
function rA(e, t, n) {
  if (yd(t)) {
    const r = Zx(e, t);
    return [
      { index: Ur(t.groupOffsetTree, r)[0], size: 0, offset: 0 },
      { index: r, size: 0, offset: 0, data: n && n[0] },
    ];
  }
  return [{ index: e, size: 0, offset: 0, data: n && n[0] }];
}
const Rh = {
  items: [],
  topItems: [],
  offsetTop: 0,
  offsetBottom: 0,
  top: 0,
  bottom: 0,
  topListHeight: 0,
  totalCount: 0,
  firstItemIndex: 0,
};
function Ew(e, t, n) {
  if (e.length === 0) return [];
  if (!yd(t))
    return e.map((p) => ({ ...p, index: p.index + n, originalIndex: p.index }));
  const r = e[0].index,
    o = e[e.length - 1].index,
    u = [],
    s = md(t.groupOffsetTree, r, o);
  let c,
    f = 0;
  for (const p of e) {
    (!c || c.end < p.index) &&
      ((c = s.shift()), (f = t.groupIndices.indexOf(c.start)));
    let _;
    p.index === c.start
      ? (_ = { type: "group", index: f })
      : (_ = { index: p.index - (f + 1) + n, groupIndex: f }),
      u.push({
        ..._,
        size: p.size,
        offset: p.offset,
        originalIndex: p.index,
        data: p.data,
      });
  }
  return u;
}
function Jc(e, t, n, r, o, u) {
  const { lastSize: s, lastOffset: c, lastIndex: f } = o;
  let p = 0,
    _ = 0;
  if (e.length > 0) {
    p = e[0].offset;
    const b = e[e.length - 1];
    _ = b.offset + b.size;
  }
  const w = n - f,
    S = c + w * s + (w - 1) * r,
    I = p,
    P = S - _;
  return {
    items: Ew(e, o, u),
    topItems: Ew(t, o, u),
    topListHeight: t.reduce((b, F) => F.size + b, 0),
    offsetTop: p,
    offsetBottom: P,
    top: I,
    bottom: _,
    totalCount: n,
    firstItemIndex: u,
  };
}
function nT(e, t, n, r, o, u) {
  let s = 0;
  if (n.groupIndices.length > 0)
    for (const _ of n.groupIndices) {
      if (_ - s >= e) break;
      s++;
    }
  const c = e + s,
    f = iv(t, c),
    p = Array.from({ length: c }).map((_, w) => ({
      index: w + f,
      size: 0,
      offset: 0,
      data: u[w + f],
    }));
  return Jc(p, [], c, o, n, r);
}
const il = Je(
    ([
      { sizes: e, totalCount: t, data: n, firstItemIndex: r, gap: o },
      u,
      { visibleRange: s, listBoundary: c, topListHeight: f },
      { scrolledToInitialItem: p, initialTopMostItemIndex: _ },
      { topListHeight: w },
      S,
      { didMount: I },
      { recalcInProgress: P },
    ]) => {
      const b = re([]),
        F = re(0),
        y = Ge();
      _e(u.topItemsIndexes, b);
      const g = vn(
        Q(
          Yt(I, P, Te(s, Gs), Te(t), Te(e), Te(_), p, Te(b), Te(r), Te(o), n),
          be(([C, N, , z, , , , , , , Y]) => {
            const W = Y && Y.length !== z;
            return C && !N && !W;
          }),
          fe(([, , [C, N], z, Y, W, ue, he, Ce, ge, xe]) => {
            const Ie = Y,
              { sizeTree: Ue, offsetTree: ee } = Ie,
              de = Xn(F);
            if (z === 0) return { ...Rh, totalCount: z };
            if (C === 0 && N === 0)
              return de === 0
                ? { ...Rh, totalCount: z }
                : nT(de, W, Y, Ce, ge, xe || []);
            if (ut(Ue))
              return de > 0
                ? null
                : Jc(rA(iv(W, z), Ie, xe), [], z, ge, Ie, Ce);
            const ae = [];
            if (he.length > 0) {
              const Oe = he[0],
                Z = he[he.length - 1];
              let we = 0;
              for (const ke of md(Ue, Oe, Z)) {
                const st = ke.value,
                  _t = Math.max(ke.start, Oe),
                  $t = Math.min(ke.end, Z);
                for (let ft = _t; ft <= $t; ft++)
                  ae.push({
                    index: ft,
                    size: st,
                    offset: we,
                    data: xe && xe[ft],
                  }),
                    (we += st);
              }
            }
            if (!ue) return Jc([], ae, z, ge, Ie, Ce);
            const Ae = he.length > 0 ? he[he.length - 1] + 1 : 0,
              Ve = WL(ee, C, N, Ae);
            if (Ve.length === 0) return null;
            const xn = z - 1,
              Ot = vd([], (Oe) => {
                for (const Z of Ve) {
                  const we = Z.value;
                  let ke = we.offset,
                    st = Z.start;
                  const _t = we.size;
                  if (we.offset < C) {
                    st += Math.floor((C - we.offset + ge) / (_t + ge));
                    const ft = st - Z.start;
                    ke += ft * _t + ft * ge;
                  }
                  st < Ae && ((ke += (Ae - st) * _t), (st = Ae));
                  const $t = Math.min(Z.end, xn);
                  for (let ft = st; ft <= $t && !(ke >= N); ft++)
                    Oe.push({
                      index: ft,
                      size: _t,
                      offset: ke,
                      data: xe && xe[ft],
                    }),
                      (ke += _t + ge);
                }
              });
            return Jc(Ot, ae, z, ge, Ie, Ce);
          }),
          be((C) => C !== null),
          wt()
        ),
        Rh
      );
      _e(
        Q(
          n,
          be(Z_),
          fe((C) => C?.length)
        ),
        t
      ),
        _e(
          Q(
            g,
            fe((C) => C.topListHeight)
          ),
          w
        ),
        _e(w, f),
        _e(
          Q(
            g,
            fe((C) => [C.top, C.bottom])
          ),
          c
        ),
        _e(
          Q(
            g,
            fe((C) => C.items)
          ),
          y
        );
      const m = Jn(
          Q(
            g,
            be(({ items: C }) => C.length > 0),
            ze(t, n),
            be(([{ items: C }, N]) => C[C.length - 1].originalIndex === N - 1),
            fe(([, C, N]) => [C - 1, N]),
            wt(Gs),
            fe(([C]) => C)
          )
        ),
        k = Jn(
          Q(
            g,
            to(200),
            be(
              ({ items: C, topItems: N }) =>
                C.length > 0 && C[0].originalIndex === N.length
            ),
            fe(({ items: C }) => C[0].index),
            wt()
          )
        ),
        O = Jn(
          Q(
            g,
            be(({ items: C }) => C.length > 0),
            fe(({ items: C }) => {
              let N = 0,
                z = C.length - 1;
              for (; C[N].type === "group" && N < z; ) N++;
              for (; C[z].type === "group" && z > N; ) z--;
              return { startIndex: C[N].index, endIndex: C[z].index };
            }),
            wt(tT)
          )
        );
      return {
        listState: g,
        topItemsIndexes: b,
        endReached: m,
        startReached: k,
        rangeChanged: O,
        itemsRendered: y,
        initialItemCount: F,
        ...S,
      };
    },
    St(oi, eT, ov, ea, Zs, Js, wo, tv),
    { singleton: !0 }
  ),
  iA = Je(
    ([
      { sizes: e, firstItemIndex: t, data: n, gap: r },
      { initialTopMostItemIndex: o },
      { initialItemCount: u, listState: s },
      { didMount: c },
    ]) => (
      _e(
        Q(
          c,
          ze(u),
          be(([, f]) => f !== 0),
          ze(o, e, t, r, n),
          fe(([[, f], p, _, w, S, I = []]) => nT(f, p, _, w, S, I))
        ),
        s
      ),
      {}
    ),
    St(oi, ea, il, wo),
    { singleton: !0 }
  ),
  rT = Je(
    ([{ scrollVelocity: e }]) => {
      const t = re(!1),
        n = Ge(),
        r = re(!1);
      return (
        _e(
          Q(
            e,
            ze(r, t, n),
            be(([o, u]) => !!u),
            fe(([o, u, s, c]) => {
              const { exit: f, enter: p } = u;
              if (s) {
                if (f(o, c)) return !1;
              } else if (p(o, c)) return !0;
              return s;
            }),
            wt()
          ),
          t
        ),
        nt(
          Q(Yt(t, e, n), ze(r)),
          ([[o, u, s], c]) => o && c && c.change && c.change(u, s)
        ),
        {
          isSeeking: t,
          scrollSeekConfiguration: r,
          scrollVelocity: e,
          scrollSeekRangeChanged: n,
        }
      );
    },
    St(Js),
    { singleton: !0 }
  ),
  oA = Je(([{ topItemsIndexes: e }]) => {
    const t = re(0);
    return (
      _e(
        Q(
          t,
          be((n) => n > 0),
          fe((n) => Array.from({ length: n }).map((r, o) => o))
        ),
        e
      ),
      { topItemCount: t }
    );
  }, St(il)),
  iT = Je(
    ([
      {
        footerHeight: e,
        headerHeight: t,
        fixedHeaderHeight: n,
        fixedFooterHeight: r,
      },
      { listState: o },
    ]) => {
      const u = Ge(),
        s = vn(
          Q(
            Yt(e, r, t, n, o),
            fe(([c, f, p, _, w]) => c + f + p + _ + w.offsetBottom + w.bottom)
          ),
          0
        );
      return _e(Te(s), u), { totalListHeight: s, totalListHeightChanged: u };
    },
    St(Sn, il),
    { singleton: !0 }
  );
function oT(e) {
  let t = !1,
    n;
  return () => (t || ((t = !0), (n = e())), n);
}
const lA = oT(
    () =>
      /iP(ad|od|hone)/i.test(navigator.userAgent) &&
      /WebKit/i.test(navigator.userAgent)
  ),
  uA = Je(
    ([
      { scrollBy: e, scrollTop: t, deviation: n, scrollingInProgress: r },
      {
        isScrolling: o,
        isAtBottom: u,
        scrollDirection: s,
        lastJumpDueToItemResize: c,
      },
      { listState: f },
      { beforeUnshiftWith: p, shiftWithOffset: _, sizes: w, gap: S },
      { log: I },
      { recalcInProgress: P },
    ]) => {
      const b = Jn(
        Q(
          f,
          ze(c),
          ni(
            (
              [, y, g, m],
              [{ items: k, totalCount: O, bottom: C, offsetBottom: N }, z]
            ) => {
              const Y = C + N;
              let W = 0;
              return (
                g === O &&
                  y.length > 0 &&
                  k.length > 0 &&
                  ((k[0].originalIndex === 0 && y[0].originalIndex === 0) ||
                    ((W = Y - m), W !== 0 && (W += z))),
                [W, k, O, Y]
              );
            },
            [0, [], 0, 0]
          ),
          be(([y]) => y !== 0),
          ze(t, s, r, u, I, P),
          be(([, y, g, m, , , k]) => !k && !m && y !== 0 && g === Vs),
          fe(
            ([[y], , , , , g]) => (
              g("Upward scrolling compensation", { amount: y }, er.DEBUG), y
            )
          )
        )
      );
      function F(y) {
        y > 0
          ? (Le(e, { top: -y, behavior: "auto" }), Le(n, 0))
          : (Le(n, 0), Le(e, { top: -y, behavior: "auto" }));
      }
      return (
        nt(Q(b, ze(n, o)), ([y, g, m]) => {
          m && lA() ? Le(n, g - y) : F(-y);
        }),
        nt(
          Q(
            Yt(vn(o, !1), n, P),
            be(([y, g, m]) => !y && !m && g !== 0),
            fe(([y, g]) => g),
            to(1)
          ),
          F
        ),
        _e(
          Q(
            _,
            fe((y) => ({ top: -y }))
          ),
          e
        ),
        nt(
          Q(
            p,
            ze(w, S),
            fe(([y, { lastSize: g, groupIndices: m, sizeTree: k }, O]) => {
              function C(N) {
                return N * (g + O);
              }
              if (m.length === 0) return C(y);
              {
                let N = 0;
                const z = js(k, 0);
                let Y = 0,
                  W = 0;
                for (; Y < y; ) {
                  Y++, (N += z);
                  let ue = m.length === W + 1 ? 1 / 0 : m[W + 1] - m[W] - 1;
                  Y + ue > y && ((N -= z), (ue = y - Y + 1)),
                    (Y += ue),
                    (N += C(ue)),
                    W++;
                }
                return N;
              }
            })
          ),
          (y) => {
            Le(n, y),
              requestAnimationFrame(() => {
                Le(e, { top: y }),
                  requestAnimationFrame(() => {
                    Le(n, 0), Le(P, !1);
                  });
              });
          }
        ),
        { deviation: n }
      );
    },
    St(Sn, Js, il, oi, yo, tv)
  ),
  sA = Je(
    ([{ didMount: e }, { scrollTo: t }, { listState: n }]) => {
      const r = re(0);
      return (
        nt(
          Q(
            e,
            ze(r),
            be(([, o]) => o !== 0),
            fe(([, o]) => ({ top: o }))
          ),
          (o) => {
            Ni(
              Q(
                n,
                fu(1),
                be((u) => u.items.length > 1)
              ),
              () => {
                requestAnimationFrame(() => {
                  Le(t, o);
                });
              }
            );
          }
        ),
        { initialScrollTop: r }
      );
    },
    St(wo, Sn, il),
    { singleton: !0 }
  ),
  aA = Je(
    ([{ viewportHeight: e }, { totalListHeight: t }]) => {
      const n = re(!1),
        r = vn(
          Q(
            Yt(n, e, t),
            be(([o]) => o),
            fe(([, o, u]) => Math.max(0, o - u)),
            to(0),
            wt()
          ),
          0
        );
      return { alignToBottom: n, paddingTopAddition: r };
    },
    St(Sn, iT),
    { singleton: !0 }
  ),
  lv = Je(([{ scrollTo: e, scrollContainerState: t }]) => {
    const n = Ge(),
      r = Ge(),
      o = Ge(),
      u = re(!1),
      s = re(void 0);
    return (
      _e(
        Q(
          Yt(n, r),
          fe(
            ([
              { viewportHeight: c, scrollTop: f, scrollHeight: p },
              { offsetTop: _ },
            ]) => ({
              scrollTop: Math.max(0, f - _),
              scrollHeight: p,
              viewportHeight: c,
            })
          )
        ),
        t
      ),
      _e(
        Q(
          e,
          ze(r),
          fe(([c, { offsetTop: f }]) => ({ ...c, top: c.top + f }))
        ),
        o
      ),
      {
        useWindowScroll: u,
        customScrollParent: s,
        windowScrollContainerState: n,
        windowViewportRect: r,
        windowScrollTo: o,
      }
    );
  }, St(Sn)),
  cA = ({
    itemTop: e,
    itemBottom: t,
    viewportTop: n,
    viewportBottom: r,
    locationParams: { behavior: o, align: u, ...s },
  }) =>
    e < n
      ? { ...s, behavior: o, align: u ?? "start" }
      : t > r
      ? { ...s, behavior: o, align: u ?? "end" }
      : null,
  fA = Je(
    ([
      { sizes: e, totalCount: t, gap: n },
      {
        scrollTop: r,
        viewportHeight: o,
        headerHeight: u,
        fixedHeaderHeight: s,
        fixedFooterHeight: c,
        scrollingInProgress: f,
      },
      { scrollToIndex: p },
    ]) => {
      const _ = Ge();
      return (
        _e(
          Q(
            _,
            ze(e, o, t, u, s, c, r),
            ze(n),
            fe(([[w, S, I, P, b, F, y, g], m]) => {
              const {
                  done: k,
                  behavior: O,
                  align: C,
                  calculateViewLocation: N = cA,
                  ...z
                } = w,
                Y = Xx(w, S, P - 1),
                W = Ws(Y, S.offsetTree, m) + b + F,
                ue = W + Ur(S.sizeTree, Y)[1],
                he = g + F,
                Ce = g + I - y,
                ge = N({
                  itemTop: W,
                  itemBottom: ue,
                  viewportTop: he,
                  viewportBottom: Ce,
                  locationParams: { behavior: O, align: C, ...z },
                });
              return (
                ge
                  ? k &&
                    Ni(
                      Q(
                        f,
                        be((xe) => xe === !1),
                        fu(Xn(f) ? 1 : 2)
                      ),
                      k
                    )
                  : k && k(),
                ge
              );
            }),
            be((w) => w !== null)
          ),
          p
        ),
        { scrollIntoView: _ }
      );
    },
    St(oi, Sn, Zs, il, yo),
    { singleton: !0 }
  ),
  dA = Je(
    ([
      { sizes: e, sizeRanges: t },
      { scrollTop: n },
      { initialTopMostItemIndex: r },
      { didMount: o },
      {
        useWindowScroll: u,
        windowScrollContainerState: s,
        windowViewportRect: c,
      },
    ]) => {
      const f = Ge(),
        p = re(void 0),
        _ = re(null),
        w = re(null);
      return (
        _e(s, _),
        _e(c, w),
        nt(Q(f, ze(e, n, u, _, w)), ([S, I, P, b, F, y]) => {
          const g = KL(I.sizeTree);
          b && F !== null && y !== null && (P = F.scrollTop - y.offsetTop),
            S({ ranges: g, scrollTop: P });
        }),
        _e(Q(p, be(Z_), fe(pA)), r),
        _e(
          Q(
            o,
            ze(p),
            be(([, S]) => S !== void 0),
            wt(),
            fe(([, S]) => S.ranges)
          ),
          t
        ),
        { getState: f, restoreStateFrom: p }
      );
    },
    St(oi, Sn, ea, wo, lv)
  );
function pA(e) {
  return { offset: e.scrollTop, index: 0, align: "start" };
}
const hA = Je(
    ([e, t, n, r, o, u, s, c, f, p]) => ({
      ...e,
      ...t,
      ...n,
      ...r,
      ...o,
      ...u,
      ...s,
      ...c,
      ...f,
      ...p,
    }),
    St(ov, iA, wo, rT, iT, sA, aA, lv, fA, yo)
  ),
  gA = Je(
    ([
      {
        totalCount: e,
        sizeRanges: t,
        fixedItemSize: n,
        defaultItemSize: r,
        trackItemSizes: o,
        itemSize: u,
        data: s,
        firstItemIndex: c,
        groupIndices: f,
        statefulTotalCount: p,
        gap: _,
        sizes: w,
      },
      { initialTopMostItemIndex: S, scrolledToInitialItem: I },
      P,
      b,
      F,
      { listState: y, topItemsIndexes: g, ...m },
      { scrollToIndex: k },
      O,
      { topItemCount: C },
      { groupCounts: N },
      z,
    ]) => (
      _e(m.rangeChanged, z.scrollSeekRangeChanged),
      _e(
        Q(
          z.windowViewportRect,
          fe((Y) => Y.visibleHeight)
        ),
        P.viewportHeight
      ),
      {
        totalCount: e,
        data: s,
        firstItemIndex: c,
        sizeRanges: t,
        initialTopMostItemIndex: S,
        scrolledToInitialItem: I,
        topItemsIndexes: g,
        topItemCount: C,
        groupCounts: N,
        fixedItemHeight: n,
        defaultItemHeight: r,
        gap: _,
        ...F,
        statefulTotalCount: p,
        listState: y,
        scrollToIndex: k,
        trackItemSizes: o,
        itemSize: u,
        groupIndices: f,
        ...m,
        ...z,
        ...P,
        sizes: w,
        ...b,
      }
    ),
    St(oi, ea, Sn, dA, tA, il, Zs, uA, oA, eT, hA)
  ),
  Nh = "-webkit-sticky",
  Dw = "sticky",
  lT = oT(() => {
    if (typeof document > "u") return Dw;
    const e = document.createElement("div");
    return (e.style.position = Nh), e.style.position === Nh ? Nh : Dw;
  });
function uT(e, t) {
  const n = X.useRef(null),
    r = X.useCallback(
      (c) => {
        if (c === null || !c.offsetParent) return;
        const f = c.getBoundingClientRect(),
          p = f.width;
        let _, w;
        if (t) {
          const S = t.getBoundingClientRect(),
            I = f.top - S.top;
          (_ = S.height - Math.max(0, I)), (w = I + t.scrollTop);
        } else
          (_ = window.innerHeight - Math.max(0, f.top)),
            (w = f.top + window.pageYOffset);
        (n.current = { offsetTop: w, visibleHeight: _, visibleWidth: p }),
          e(n.current);
      },
      [e, t]
    ),
    { callbackRef: o, ref: u } = ev(r),
    s = X.useCallback(() => {
      r(u.current);
    }, [r, u]);
  return (
    X.useEffect(() => {
      if (t) {
        t.addEventListener("scroll", s);
        const c = new ResizeObserver(s);
        return (
          c.observe(t),
          () => {
            t.removeEventListener("scroll", s), c.unobserve(t);
          }
        );
      } else
        return (
          window.addEventListener("scroll", s),
          window.addEventListener("resize", s),
          () => {
            window.removeEventListener("scroll", s),
              window.removeEventListener("resize", s);
          }
        );
    }, [s, t]),
    o
  );
}
const sT = X.createContext(void 0),
  aT = X.createContext(void 0);
function cT(e) {
  return e;
}
const _A = Je(() => {
    const e = re((f) => `Item ${f}`),
      t = re(null),
      n = re((f) => `Group ${f}`),
      r = re({}),
      o = re(cT),
      u = re("div"),
      s = re(_u),
      c = (f, p = null) =>
        vn(
          Q(
            r,
            fe((_) => _[f]),
            wt()
          ),
          p
        );
    return {
      context: t,
      itemContent: e,
      groupContent: n,
      components: r,
      computeItemKey: o,
      headerFooterTag: u,
      scrollerRef: s,
      FooterComponent: c("Footer"),
      HeaderComponent: c("Header"),
      TopItemListComponent: c("TopItemList"),
      ListComponent: c("List", "div"),
      ItemComponent: c("Item", "div"),
      GroupComponent: c("Group", "div"),
      ScrollerComponent: c("Scroller", "div"),
      EmptyPlaceholder: c("EmptyPlaceholder"),
      ScrollSeekPlaceholder: c("ScrollSeekPlaceholder"),
    };
  }),
  vA = Je(([e, t]) => ({ ...e, ...t }), St(gA, _A)),
  mA = ({ height: e }) => X.createElement("div", { style: { height: e } }),
  yA = { position: lT(), zIndex: 1, overflowAnchor: "none" },
  wA = { overflowAnchor: "none" },
  Ow = X.memo(function ({ showTopList: t = !1 }) {
    const n = We("listState"),
      r = Sr("sizeRanges"),
      o = We("useWindowScroll"),
      u = We("customScrollParent"),
      s = Sr("windowScrollContainerState"),
      c = Sr("scrollContainerState"),
      f = u || o ? s : c,
      p = We("itemContent"),
      _ = We("context"),
      w = We("groupContent"),
      S = We("trackItemSizes"),
      I = We("itemSize"),
      P = We("log"),
      b = Sr("gap"),
      { callbackRef: F } = LL(r, I, S, t ? _u : f, P, b, u),
      [y, g] = X.useState(0);
    uv("deviation", (ge) => {
      y !== ge && g(ge);
    });
    const m = We("EmptyPlaceholder"),
      k = We("ScrollSeekPlaceholder") || mA,
      O = We("ListComponent"),
      C = We("ItemComponent"),
      N = We("GroupComponent"),
      z = We("computeItemKey"),
      Y = We("isSeeking"),
      W = We("groupIndices").length > 0,
      ue = We("paddingTopAddition"),
      he = We("scrolledToInitialItem"),
      Ce = t
        ? {}
        : {
            boxSizing: "border-box",
            paddingTop: n.offsetTop + ue,
            paddingBottom: n.offsetBottom,
            marginTop: y,
            ...(he ? {} : { visibility: "hidden" }),
          };
    return !t && n.totalCount === 0 && m
      ? X.createElement(m, Pn(m, _))
      : X.createElement(
          O,
          {
            ...Pn(O, _),
            ref: F,
            style: Ce,
            "data-test-id": t ? "virtuoso-top-item-list" : "virtuoso-item-list",
          },
          (t ? n.topItems : n.items).map((ge) => {
            const xe = ge.originalIndex,
              Ie = z(xe + n.firstItemIndex, ge.data, _);
            return Y
              ? X.createElement(k, {
                  ...Pn(k, _),
                  key: Ie,
                  index: ge.index,
                  height: ge.size,
                  type: ge.type || "item",
                  ...(ge.type === "group" ? {} : { groupIndex: ge.groupIndex }),
                })
              : ge.type === "group"
              ? X.createElement(
                  N,
                  {
                    ...Pn(N, _),
                    key: Ie,
                    "data-index": xe,
                    "data-known-size": ge.size,
                    "data-item-index": ge.index,
                    style: yA,
                  },
                  w(ge.index, _)
                )
              : X.createElement(
                  C,
                  {
                    ...Pn(C, _),
                    key: Ie,
                    "data-index": xe,
                    "data-known-size": ge.size,
                    "data-item-index": ge.index,
                    "data-item-group-index": ge.groupIndex,
                    item: ge.data,
                    style: wA,
                  },
                  W
                    ? p(ge.index, ge.groupIndex, ge.data, _)
                    : p(ge.index, ge.data, _)
                );
          })
        );
  }),
  SA = {
    height: "100%",
    outline: "none",
    overflowY: "auto",
    position: "relative",
    WebkitOverflowScrolling: "touch",
  },
  wd = { width: "100%", height: "100%", position: "absolute", top: 0 },
  xA = { width: "100%", position: lT(), top: 0, zIndex: 1 };
function Pn(e, t) {
  if (typeof e != "string") return { context: t };
}
const TA = X.memo(function () {
    const t = We("HeaderComponent"),
      n = Sr("headerHeight"),
      r = We("headerFooterTag"),
      o = rl((s) => n(po(s, "height"))),
      u = We("context");
    return t
      ? X.createElement(r, { ref: o }, X.createElement(t, Pn(t, u)))
      : null;
  }),
  bA = X.memo(function () {
    const t = We("FooterComponent"),
      n = Sr("footerHeight"),
      r = We("headerFooterTag"),
      o = rl((s) => n(po(s, "height"))),
      u = We("context");
    return t
      ? X.createElement(r, { ref: o }, X.createElement(t, Pn(t, u)))
      : null;
  });
function fT({ usePublisher: e, useEmitter: t, useEmitterValue: n }) {
  return X.memo(function ({ style: u, children: s, ...c }) {
    const f = e("scrollContainerState"),
      p = n("ScrollerComponent"),
      _ = e("smoothScrollTargetReached"),
      w = n("scrollerRef"),
      S = n("context"),
      {
        scrollerRef: I,
        scrollByCallback: P,
        scrollToCallback: b,
      } = Wx(f, _, p, w);
    return (
      t("scrollTo", b),
      t("scrollBy", P),
      X.createElement(
        p,
        {
          ref: I,
          style: { ...SA, ...u },
          "data-test-id": "virtuoso-scroller",
          "data-virtuoso-scroller": !0,
          tabIndex: 0,
          ...c,
          ...Pn(p, S),
        },
        s
      )
    );
  });
}
function dT({ usePublisher: e, useEmitter: t, useEmitterValue: n }) {
  return X.memo(function ({ style: u, children: s, ...c }) {
    const f = e("windowScrollContainerState"),
      p = n("ScrollerComponent"),
      _ = e("smoothScrollTargetReached"),
      w = n("totalListHeight"),
      S = n("deviation"),
      I = n("customScrollParent"),
      P = n("context"),
      {
        scrollerRef: b,
        scrollByCallback: F,
        scrollToCallback: y,
      } = Wx(f, _, p, _u, I);
    return (
      PL(
        () => (
          (b.current = I || window),
          () => {
            b.current = null;
          }
        ),
        [b, I]
      ),
      t("windowScrollTo", y),
      t("scrollBy", F),
      X.createElement(
        p,
        {
          style: {
            position: "relative",
            ...u,
            ...(w !== 0 ? { height: w + S } : {}),
          },
          "data-virtuoso-scroller": !0,
          ...c,
          ...Pn(p, P),
        },
        s
      )
    );
  });
}
const CA = ({ children: e }) => {
    const t = X.useContext(sT),
      n = Sr("viewportHeight"),
      r = Sr("fixedItemHeight"),
      o = rl($x(n, (u) => po(u, "height")));
    return (
      X.useEffect(() => {
        t && (n(t.viewportHeight), r(t.itemHeight));
      }, [t, n, r]),
      X.createElement(
        "div",
        { style: wd, ref: o, "data-viewport-type": "element" },
        e
      )
    );
  },
  IA = ({ children: e }) => {
    const t = X.useContext(sT),
      n = Sr("windowViewportRect"),
      r = Sr("fixedItemHeight"),
      o = We("customScrollParent"),
      u = uT(n, o);
    return (
      X.useEffect(() => {
        t &&
          (r(t.itemHeight),
          n({
            offsetTop: 0,
            visibleHeight: t.viewportHeight,
            visibleWidth: 100,
          }));
      }, [t, n, r]),
      X.createElement(
        "div",
        { ref: u, style: wd, "data-viewport-type": "window" },
        e
      )
    );
  },
  EA = ({ children: e }) => {
    const t = We("TopItemListComponent"),
      n = We("headerHeight"),
      r = { ...xA, marginTop: `${n}px` },
      o = We("context");
    return X.createElement(t || "div", { style: r, context: o }, e);
  },
  DA = X.memo(function (t) {
    const n = We("useWindowScroll"),
      r = We("topItemsIndexes").length > 0,
      o = We("customScrollParent"),
      u = o || n ? PA : kA,
      s = o || n ? IA : CA;
    return X.createElement(
      u,
      { ...t },
      r && X.createElement(EA, null, X.createElement(Ow, { showTopList: !0 })),
      X.createElement(
        s,
        null,
        X.createElement(TA, null),
        X.createElement(Ow, null),
        X.createElement(bA, null)
      )
    );
  }),
  {
    Component: OA,
    usePublisher: Sr,
    useEmitterValue: We,
    useEmitter: uv,
  } = Ux(
    vA,
    {
      required: {},
      optional: {
        restoreStateFrom: "restoreStateFrom",
        context: "context",
        followOutput: "followOutput",
        itemContent: "itemContent",
        groupContent: "groupContent",
        overscan: "overscan",
        increaseViewportBy: "increaseViewportBy",
        totalCount: "totalCount",
        groupCounts: "groupCounts",
        topItemCount: "topItemCount",
        firstItemIndex: "firstItemIndex",
        initialTopMostItemIndex: "initialTopMostItemIndex",
        components: "components",
        atBottomThreshold: "atBottomThreshold",
        atTopThreshold: "atTopThreshold",
        computeItemKey: "computeItemKey",
        defaultItemHeight: "defaultItemHeight",
        fixedItemHeight: "fixedItemHeight",
        itemSize: "itemSize",
        scrollSeekConfiguration: "scrollSeekConfiguration",
        headerFooterTag: "headerFooterTag",
        data: "data",
        initialItemCount: "initialItemCount",
        initialScrollTop: "initialScrollTop",
        alignToBottom: "alignToBottom",
        useWindowScroll: "useWindowScroll",
        customScrollParent: "customScrollParent",
        scrollerRef: "scrollerRef",
        logLevel: "logLevel",
      },
      methods: {
        scrollToIndex: "scrollToIndex",
        scrollIntoView: "scrollIntoView",
        scrollTo: "scrollTo",
        scrollBy: "scrollBy",
        autoscrollToBottom: "autoscrollToBottom",
        getState: "getState",
      },
      events: {
        isScrolling: "isScrolling",
        endReached: "endReached",
        startReached: "startReached",
        rangeChanged: "rangeChanged",
        atBottomStateChange: "atBottomStateChange",
        atTopStateChange: "atTopStateChange",
        totalListHeightChanged: "totalListHeightChanged",
        itemsRendered: "itemsRendered",
        groupIndices: "groupIndices",
      },
    },
    DA
  ),
  kA = fT({ usePublisher: Sr, useEmitterValue: We, useEmitter: uv }),
  PA = dT({ usePublisher: Sr, useEmitterValue: We, useEmitter: uv }),
  RA = OA,
  kw = {
    items: [],
    offsetBottom: 0,
    offsetTop: 0,
    top: 0,
    bottom: 0,
    itemHeight: 0,
    itemWidth: 0,
  },
  NA = {
    items: [{ index: 0 }],
    offsetBottom: 0,
    offsetTop: 0,
    top: 0,
    bottom: 0,
    itemHeight: 0,
    itemWidth: 0,
  },
  { round: Pw, ceil: Rw, floor: Mf, min: Lh, max: Ts } = Math;
function LA(e) {
  return { ...NA, items: e };
}
function Nw(e, t, n) {
  return Array.from({ length: t - e + 1 }).map((r, o) => {
    const u = n === null ? null : n[o + e];
    return { index: o + e, data: u };
  });
}
function AA(e, t) {
  return e && e.column === t.column && e.row === t.row;
}
function Ec(e, t) {
  return e && e.width === t.width && e.height === t.height;
}
const MA = Je(
  ([
    { overscan: e, visibleRange: t, listBoundary: n },
    {
      scrollTop: r,
      viewportHeight: o,
      scrollBy: u,
      scrollTo: s,
      smoothScrollTargetReached: c,
      scrollContainerState: f,
      footerHeight: p,
      headerHeight: _,
    },
    w,
    S,
    { propsReady: I, didMount: P },
    {
      windowViewportRect: b,
      useWindowScroll: F,
      customScrollParent: y,
      windowScrollContainerState: g,
      windowScrollTo: m,
    },
    k,
  ]) => {
    const O = re(0),
      C = re(0),
      N = re(kw),
      z = re({ height: 0, width: 0 }),
      Y = re({ height: 0, width: 0 }),
      W = Ge(),
      ue = Ge(),
      he = re(0),
      Ce = re(null),
      ge = re({ row: 0, column: 0 }),
      xe = Ge(),
      Ie = Ge(),
      Ue = re(!1),
      ee = re(0),
      de = re(!0),
      ae = re(!1);
    nt(
      Q(
        P,
        ze(ee),
        be(([Z, we]) => !!we)
      ),
      () => {
        Le(de, !1), Le(C, 0);
      }
    ),
      nt(
        Q(
          Yt(P, de, Y, z, ee, ae),
          be(
            ([Z, we, ke, st, , _t]) =>
              Z && !we && ke.height !== 0 && st.height !== 0 && !_t
          )
        ),
        ([, , , , Z]) => {
          Le(ae, !0),
            rv(1, () => {
              Le(W, Z);
            }),
            Ni(Q(r), () => {
              Le(n, [0, 0]), Le(de, !0);
            });
        }
      ),
      _e(
        Q(
          Ie,
          be((Z) => Z != null && Z.scrollTop > 0),
          Ti(0)
        ),
        C
      ),
      nt(
        Q(
          P,
          ze(Ie),
          be(([, Z]) => Z != null)
        ),
        ([, Z]) => {
          Z &&
            (Le(z, Z.viewport),
            Le(Y, Z?.item),
            Le(ge, Z.gap),
            Z.scrollTop > 0 &&
              (Le(Ue, !0),
              Ni(Q(r, fu(1)), (we) => {
                Le(Ue, !1);
              }),
              Le(s, { top: Z.scrollTop })));
        }
      ),
      _e(
        Q(
          z,
          fe(({ height: Z }) => Z)
        ),
        o
      ),
      _e(
        Q(
          Yt(
            Te(z, Ec),
            Te(Y, Ec),
            Te(ge, (Z, we) => Z && Z.column === we.column && Z.row === we.row),
            Te(r)
          ),
          fe(([Z, we, ke, st]) => ({
            viewport: Z,
            item: we,
            gap: ke,
            scrollTop: st,
          }))
        ),
        xe
      ),
      _e(
        Q(
          Yt(
            Te(O),
            t,
            Te(ge, AA),
            Te(Y, Ec),
            Te(z, Ec),
            Te(Ce),
            Te(C),
            Te(Ue),
            Te(de),
            Te(ee)
          ),
          be(([, , , , , , , Z]) => !Z),
          fe(([Z, [we, ke], st, _t, $t, ft, kt, , Fn, lr]) => {
            const { row: vt, column: ll } = st,
              { height: Mi, width: Cr } = _t,
              { width: tn } = $t;
            if (kt === 0 && (Z === 0 || tn === 0)) return kw;
            if (Cr === 0) {
              const Vt = iv(lr, Z),
                $i = Vt === 0 ? Math.max(kt - 1, 0) : Vt;
              return LA(Nw(Vt, $i, ft));
            }
            const ur = pT(tn, Cr, ll);
            let zn, Ir;
            Fn
              ? we === 0 && ke === 0 && kt > 0
                ? ((zn = 0), (Ir = kt - 1))
                : ((zn = ur * Mf((we + vt) / (Mi + vt))),
                  (Ir = ur * Rw((ke + vt) / (Mi + vt)) - 1),
                  (Ir = Lh(Z - 1, Ts(Ir, ur - 1))),
                  (zn = Lh(Ir, Ts(0, zn))))
              : ((zn = 0), (Ir = -1));
            const jr = Nw(zn, Ir, ft),
              { top: ul, bottom: Wr } = Lw($t, st, _t, jr),
              Tn = Rw(Z / ur),
              zi = Tn * Mi + (Tn - 1) * vt - Wr;
            return {
              items: jr,
              offsetTop: ul,
              offsetBottom: zi,
              top: ul,
              bottom: Wr,
              itemHeight: Mi,
              itemWidth: Cr,
            };
          })
        ),
        N
      ),
      _e(
        Q(
          Ce,
          be((Z) => Z !== null),
          fe((Z) => Z.length)
        ),
        O
      ),
      _e(
        Q(
          Yt(z, Y, N, ge),
          be(
            ([Z, we, { items: ke }]) =>
              ke.length > 0 && we.height !== 0 && Z.height !== 0
          ),
          fe(([Z, we, { items: ke }, st]) => {
            const { top: _t, bottom: $t } = Lw(Z, st, we, ke);
            return [_t, $t];
          }),
          wt(Gs)
        ),
        n
      );
    const Ae = re(!1);
    _e(
      Q(
        r,
        ze(Ae),
        fe(([Z, we]) => we || Z !== 0)
      ),
      Ae
    );
    const Ve = Jn(
        Q(
          Te(N),
          be(({ items: Z }) => Z.length > 0),
          ze(O, Ae),
          be(
            ([{ items: Z }, we, ke]) => ke && Z[Z.length - 1].index === we - 1
          ),
          fe(([, Z]) => Z - 1),
          wt()
        )
      ),
      xn = Jn(
        Q(
          Te(N),
          be(({ items: Z }) => Z.length > 0 && Z[0].index === 0),
          Ti(0),
          wt()
        )
      ),
      Ot = Jn(
        Q(
          Te(N),
          ze(Ue),
          be(([{ items: Z }, we]) => Z.length > 0 && !we),
          fe(([{ items: Z }]) => ({
            startIndex: Z[0].index,
            endIndex: Z[Z.length - 1].index,
          })),
          wt(tT),
          to(0)
        )
      );
    _e(Ot, S.scrollSeekRangeChanged),
      _e(
        Q(
          W,
          ze(z, Y, O, ge),
          fe(([Z, we, ke, st, _t]) => {
            const $t = Jx(Z),
              { align: ft, behavior: kt, offset: Fn } = $t;
            let lr = $t.index;
            lr === "LAST" && (lr = st - 1), (lr = Ts(0, lr, Lh(st - 1, lr)));
            let vt = Hg(we, _t, ke, lr);
            return (
              ft === "end"
                ? (vt = Pw(vt - we.height + ke.height))
                : ft === "center" &&
                  (vt = Pw(vt - we.height / 2 + ke.height / 2)),
              Fn && (vt += Fn),
              { top: vt, behavior: kt }
            );
          })
        ),
        s
      );
    const Oe = vn(
      Q(
        N,
        fe((Z) => Z.offsetBottom + Z.bottom)
      ),
      0
    );
    return (
      _e(
        Q(
          b,
          fe((Z) => ({ width: Z.visibleWidth, height: Z.visibleHeight }))
        ),
        z
      ),
      {
        data: Ce,
        totalCount: O,
        viewportDimensions: z,
        itemDimensions: Y,
        scrollTop: r,
        scrollHeight: ue,
        overscan: e,
        scrollBy: u,
        scrollTo: s,
        scrollToIndex: W,
        smoothScrollTargetReached: c,
        windowViewportRect: b,
        windowScrollTo: m,
        useWindowScroll: F,
        customScrollParent: y,
        windowScrollContainerState: g,
        deviation: he,
        scrollContainerState: f,
        footerHeight: p,
        headerHeight: _,
        initialItemCount: C,
        gap: ge,
        restoreStateFrom: Ie,
        ...S,
        initialTopMostItemIndex: ee,
        gridState: N,
        totalListHeight: Oe,
        ...w,
        startReached: xn,
        endReached: Ve,
        rangeChanged: Ot,
        stateChanged: xe,
        propsReady: I,
        stateRestoreInProgress: Ue,
        ...k,
      }
    );
  },
  St(ov, Sn, Js, rT, wo, lv, yo)
);
function Lw(e, t, n, r) {
  const { height: o } = n;
  if (o === void 0 || r.length === 0) return { top: 0, bottom: 0 };
  const u = Hg(e, t, n, r[0].index),
    s = Hg(e, t, n, r[r.length - 1].index) + o;
  return { top: u, bottom: s };
}
function Hg(e, t, n, r) {
  const o = pT(e.width, n.width, t.column),
    u = Mf(r / o),
    s = u * n.height + Ts(0, u - 1) * t.row;
  return s > 0 ? s + t.row : s;
}
function pT(e, t, n) {
  return Ts(1, Mf((e + n) / (Mf(t) + n)));
}
const FA = Je(() => {
    const e = re((p) => `Item ${p}`),
      t = re({}),
      n = re(null),
      r = re("virtuoso-grid-item"),
      o = re("virtuoso-grid-list"),
      u = re(cT),
      s = re("div"),
      c = re(_u),
      f = (p, _ = null) =>
        vn(
          Q(
            t,
            fe((w) => w[p]),
            wt()
          ),
          _
        );
    return {
      context: n,
      itemContent: e,
      components: t,
      computeItemKey: u,
      itemClassName: r,
      listClassName: o,
      headerFooterTag: s,
      scrollerRef: c,
      FooterComponent: f("Footer"),
      HeaderComponent: f("Header"),
      ListComponent: f("List", "div"),
      ItemComponent: f("Item", "div"),
      ScrollerComponent: f("Scroller", "div"),
      ScrollSeekPlaceholder: f("ScrollSeekPlaceholder", "div"),
    };
  }),
  zA = Je(([e, t]) => ({ ...e, ...t }), St(MA, FA)),
  $A = X.memo(function () {
    const t = xt("gridState"),
      n = xt("listClassName"),
      r = xt("itemClassName"),
      o = xt("itemContent"),
      u = xt("computeItemKey"),
      s = xt("isSeeking"),
      c = Hr("scrollHeight"),
      f = xt("ItemComponent"),
      p = xt("ListComponent"),
      _ = xt("ScrollSeekPlaceholder"),
      w = xt("context"),
      S = Hr("itemDimensions"),
      I = Hr("gap"),
      P = xt("log"),
      b = xt("stateRestoreInProgress"),
      F = rl((y) => {
        const g = y.parentElement.parentElement.scrollHeight;
        c(g);
        const m = y.firstChild;
        if (m) {
          const { width: k, height: O } = m.getBoundingClientRect();
          S({ width: k, height: O });
        }
        I({
          row: Aw("row-gap", getComputedStyle(y).rowGap, P),
          column: Aw("column-gap", getComputedStyle(y).columnGap, P),
        });
      });
    return b
      ? null
      : X.createElement(
          p,
          {
            ref: F,
            className: n,
            ...Pn(p, w),
            style: { paddingTop: t.offsetTop, paddingBottom: t.offsetBottom },
            "data-test-id": "virtuoso-item-list",
          },
          t.items.map((y) => {
            const g = u(y.index, y.data, w);
            return s
              ? X.createElement(_, {
                  key: g,
                  ...Pn(_, w),
                  index: y.index,
                  height: t.itemHeight,
                  width: t.itemWidth,
                })
              : X.createElement(
                  f,
                  { ...Pn(f, w), className: r, "data-index": y.index, key: g },
                  o(y.index, y.data, w)
                );
          })
        );
  }),
  HA = X.memo(function () {
    const t = xt("HeaderComponent"),
      n = Hr("headerHeight"),
      r = xt("headerFooterTag"),
      o = rl((s) => n(po(s, "height"))),
      u = xt("context");
    return t
      ? X.createElement(r, { ref: o }, X.createElement(t, Pn(t, u)))
      : null;
  }),
  BA = X.memo(function () {
    const t = xt("FooterComponent"),
      n = Hr("footerHeight"),
      r = xt("headerFooterTag"),
      o = rl((s) => n(po(s, "height"))),
      u = xt("context");
    return t
      ? X.createElement(r, { ref: o }, X.createElement(t, Pn(t, u)))
      : null;
  }),
  UA = ({ children: e }) => {
    const t = X.useContext(aT),
      n = Hr("itemDimensions"),
      r = Hr("viewportDimensions"),
      o = rl((u) => {
        r(u.getBoundingClientRect());
      });
    return (
      X.useEffect(() => {
        t &&
          (r({ height: t.viewportHeight, width: t.viewportWidth }),
          n({ height: t.itemHeight, width: t.itemWidth }));
      }, [t, r, n]),
      X.createElement("div", { style: wd, ref: o }, e)
    );
  },
  jA = ({ children: e }) => {
    const t = X.useContext(aT),
      n = Hr("windowViewportRect"),
      r = Hr("itemDimensions"),
      o = xt("customScrollParent"),
      u = uT(n, o);
    return (
      X.useEffect(() => {
        t &&
          (r({ height: t.itemHeight, width: t.itemWidth }),
          n({
            offsetTop: 0,
            visibleHeight: t.viewportHeight,
            visibleWidth: t.viewportWidth,
          }));
      }, [t, n, r]),
      X.createElement("div", { ref: u, style: wd }, e)
    );
  },
  WA = X.memo(function ({ ...t }) {
    const n = xt("useWindowScroll"),
      r = xt("customScrollParent"),
      o = r || n ? GA : VA,
      u = r || n ? jA : UA;
    return X.createElement(
      o,
      { ...t },
      X.createElement(
        u,
        null,
        X.createElement(HA, null),
        X.createElement($A, null),
        X.createElement(BA, null)
      )
    );
  }),
  {
    Component: b8,
    usePublisher: Hr,
    useEmitterValue: xt,
    useEmitter: hT,
  } = Ux(
    zA,
    {
      optional: {
        context: "context",
        totalCount: "totalCount",
        overscan: "overscan",
        itemContent: "itemContent",
        components: "components",
        computeItemKey: "computeItemKey",
        data: "data",
        initialItemCount: "initialItemCount",
        scrollSeekConfiguration: "scrollSeekConfiguration",
        headerFooterTag: "headerFooterTag",
        listClassName: "listClassName",
        itemClassName: "itemClassName",
        useWindowScroll: "useWindowScroll",
        customScrollParent: "customScrollParent",
        scrollerRef: "scrollerRef",
        logLevel: "logLevel",
        restoreStateFrom: "restoreStateFrom",
        initialTopMostItemIndex: "initialTopMostItemIndex",
      },
      methods: {
        scrollTo: "scrollTo",
        scrollBy: "scrollBy",
        scrollToIndex: "scrollToIndex",
      },
      events: {
        isScrolling: "isScrolling",
        endReached: "endReached",
        startReached: "startReached",
        rangeChanged: "rangeChanged",
        atBottomStateChange: "atBottomStateChange",
        atTopStateChange: "atTopStateChange",
        stateChanged: "stateChanged",
      },
    },
    WA
  ),
  VA = fT({ usePublisher: Hr, useEmitterValue: xt, useEmitter: hT }),
  GA = dT({ usePublisher: Hr, useEmitterValue: xt, useEmitter: hT });
function Aw(e, t, n) {
  return (
    t !== "normal" &&
      !t?.endsWith("px") &&
      n(`${e} was not resolved to pixel value correctly`, t, er.WARN),
    t === "normal" ? 0 : parseInt(t ?? "0", 10)
  );
}
const KA = ({ treeIndex: e }) => e,
  gT = (e) =>
    typeof e == "string"
      ? e
      : e === void 0 ||
        typeof e != "object" ||
        !e.props ||
        !e.props.children ||
        (typeof e.props.children != "string" &&
          typeof e.props.children != "object")
      ? ""
      : typeof e.props.children == "string"
      ? e.props.children
      : e.props.children.map((t) => gT(t)).join(""),
  Mw = (e, t, n, r, o) =>
    typeof n[e] == "function"
      ? String(n[e]({ node: n, path: r, treeIndex: o })).includes(t)
      : typeof n[e] == "object"
      ? gT(n[e]).includes(t)
      : n[e] && String(n[e]).includes(t),
  YA = ({ node: e, path: t, treeIndex: n, searchQuery: r }) =>
    Mw("title", r, e, t, n) || Mw("subtitle", r, e, t, n),
  _T = ({
    targetIndex: e,
    node: t,
    currentIndex: n,
    getNodeKey: r,
    path: o = [],
    lowerSiblingCounts: u = [],
    ignoreCollapsed: s = !0,
    isPseudoRoot: c = !1,
  }) => {
    const f = c ? [] : [...o, r({ node: t, treeIndex: n })];
    if (n === e) return { node: t, lowerSiblingCounts: u, path: f };
    if (!t?.children || (s && t?.expanded !== !0)) return { nextIndex: n + 1 };
    let p = n + 1;
    const _ = t.children.length;
    for (let w = 0; w < _; w += 1) {
      const S = _T({
        ignoreCollapsed: s,
        getNodeKey: r,
        targetIndex: e,
        node: t.children[w],
        currentIndex: p,
        lowerSiblingCounts: [...u, _ - w - 1],
        path: f,
      });
      if (S.node) return S;
      p = S.nextIndex;
    }
    return { nextIndex: p };
  },
  sv = ({ node: e, ignoreCollapsed: t = !0 }) =>
    _T({
      getNodeKey: () => {},
      ignoreCollapsed: t,
      node: e,
      currentIndex: 0,
      targetIndex: -1,
    }).nextIndex - 1,
  vT = ({
    callback: e,
    getNodeKey: t,
    ignoreCollapsed: n,
    isPseudoRoot: r = !1,
    node: o,
    parentNode: u = void 0,
    currentIndex: s,
    path: c = [],
    lowerSiblingCounts: f = [],
  }) => {
    const p = r ? [] : [...c, t({ node: o, treeIndex: s })];
    if (
      !r &&
      e(
        r
          ? void 0
          : {
              node: o,
              parentNode: u,
              path: p,
              lowerSiblingCounts: f,
              treeIndex: s,
            }
      ) === !1
    )
      return !1;
    if (!o.children || (o.expanded !== !0 && n && !r)) return s;
    let w = s;
    const S = o.children.length;
    if (typeof o.children != "function") {
      for (let I = 0; I < S; I += 1)
        if (
          ((w = vT({
            callback: e,
            getNodeKey: t,
            ignoreCollapsed: n,
            node: o.children[I],
            parentNode: r ? void 0 : o,
            currentIndex: w + 1,
            lowerSiblingCounts: [...f, S - I - 1],
            path: p,
          })),
          w === !1)
        )
          return !1;
    }
    return w;
  },
  mT = ({
    callback: e,
    getNodeKey: t,
    ignoreCollapsed: n,
    isPseudoRoot: r = !1,
    node: o,
    parentNode: u = void 0,
    currentIndex: s,
    path: c = [],
    lowerSiblingCounts: f = [],
  }) => {
    const p = { ...o },
      _ = r ? [] : [...c, t({ node: p, treeIndex: s })],
      w = {
        node: p,
        parentNode: u,
        path: _,
        lowerSiblingCounts: f,
        treeIndex: s,
      };
    if (!p.children || (p.expanded !== !0 && n && !r))
      return { treeIndex: s, node: e(w) };
    let S = s;
    const I = p.children.length;
    return (
      typeof p.children != "function" &&
        (p.children = p.children.map((P, b) => {
          const F = mT({
            callback: e,
            getNodeKey: t,
            ignoreCollapsed: n,
            node: P,
            parentNode: r ? void 0 : p,
            currentIndex: S + 1,
            lowerSiblingCounts: [...f, I - b - 1],
            path: _,
          });
          return (S = F.treeIndex), F.node;
        })),
      { node: e(w), treeIndex: S }
    );
  },
  yT = ({
    treeData: e,
    getNodeKey: t,
    callback: n,
    ignoreCollapsed: r = !0,
  }) => {
    !e ||
      e.length === 0 ||
      vT({
        callback: n,
        getNodeKey: t,
        ignoreCollapsed: r,
        isPseudoRoot: !0,
        node: { children: e },
        currentIndex: -1,
        path: [],
        lowerSiblingCounts: [],
      });
  },
  QA = ({ treeData: e, getNodeKey: t, callback: n, ignoreCollapsed: r = !0 }) =>
    !e || e.length === 0
      ? []
      : mT({
          callback: n,
          getNodeKey: t,
          ignoreCollapsed: r,
          isPseudoRoot: !0,
          node: { children: e },
          currentIndex: -1,
          path: [],
          lowerSiblingCounts: [],
        }).node.children,
  qA = ({ treeData: e, expanded: t = !0 }) =>
    QA({
      treeData: e,
      callback: ({ node: n }) => ({ ...n, expanded: t }),
      getNodeKey: ({ treeIndex: n }) => n,
      ignoreCollapsed: !1,
    }),
  cs = ({
    treeData: e,
    path: t,
    newNode: n,
    getNodeKey: r,
    ignoreCollapsed: o = !0,
  }) => {
    const u = "RESULT_MISS",
      s = ({
        isPseudoRoot: f = !1,
        node: p,
        currentTreeIndex: _,
        pathIndex: w,
      }) => {
        if (!f && r({ node: p, treeIndex: _ }) !== t[w]) return u;
        if (w >= t.length - 1)
          return typeof n == "function" ? n({ node: p, treeIndex: _ }) : n;
        if (!p.children)
          throw new Error("Path referenced children of node with no children.");
        let S = _ + 1;
        for (let I = 0; I < p.children.length; I += 1) {
          const P = s({
            node: p.children[I],
            currentTreeIndex: S,
            pathIndex: w + 1,
          });
          if (P !== u)
            return P
              ? {
                  ...p,
                  children: [
                    ...p.children.slice(0, I),
                    P,
                    ...p.children.slice(I + 1),
                  ],
                }
              : {
                  ...p,
                  children: [
                    ...p.children.slice(0, I),
                    ...p.children.slice(I + 1),
                  ],
                };
          S += 1 + sv({ node: p.children[I], ignoreCollapsed: o });
        }
        return u;
      },
      c = s({
        node: { children: e },
        currentTreeIndex: -1,
        pathIndex: -1,
        isPseudoRoot: !0,
      });
    if (c === u) throw new Error("No node found at the given path.");
    return c.children;
  },
  XA = ({ treeData: e, path: t, getNodeKey: n, ignoreCollapsed: r = !0 }) => {
    let o, u;
    return {
      treeData: cs({
        treeData: e,
        path: t,
        getNodeKey: n,
        ignoreCollapsed: r,
        newNode: ({ node: c, treeIndex: f }) => {
          (o = c), (u = f);
        },
      }),
      node: o,
      treeIndex: u,
    };
  },
  wT = ({
    targetDepth: e,
    minimumTreeIndex: t,
    newNode: n,
    ignoreCollapsed: r,
    expandParent: o,
    isPseudoRoot: u = !1,
    isLastChild: s,
    node: c,
    currentIndex: f,
    currentDepth: p,
    getNodeKey: _,
    path: w = [],
  }) => {
    const S = (k) => (u ? [] : [...w, _({ node: k, treeIndex: f })]);
    if (f >= t - 1 || (s && !(c.children && c.children.length > 0))) {
      if (typeof c.children == "function")
        throw new TypeError("Cannot add to children defined by a function");
      {
        const O = {
          ...c,
          ...(o ? { expanded: !0 } : {}),
          children: c.children ? [n, ...c.children] : [n],
        };
        return {
          node: O,
          nextIndex: f + 2,
          insertedTreeIndex: f + 1,
          parentPath: S(O),
          parentNode: u ? void 0 : O,
        };
      }
    }
    if (p >= e - 1) {
      if (
        !c.children ||
        typeof c.children == "function" ||
        (c.expanded !== !0 && r && !u)
      )
        return { node: c, nextIndex: f + 1 };
      let k = f + 1,
        O,
        C;
      for (let z = 0; z < c.children.length; z += 1) {
        if (k >= t) {
          (O = k), (C = z);
          break;
        }
        k += 1 + sv({ node: c.children[z], ignoreCollapsed: r });
      }
      if (C == null) {
        if (k < t && !s) return { node: c, nextIndex: k };
        (O = k), (C = c.children.length);
      }
      const N = {
        ...c,
        children: [...c.children.slice(0, C), n, ...c.children.slice(C)],
      };
      return {
        node: N,
        nextIndex: k,
        insertedTreeIndex: O,
        parentPath: S(N),
        parentNode: u ? void 0 : N,
      };
    }
    if (
      !c.children ||
      typeof c.children == "function" ||
      (c.expanded !== !0 && r && !u)
    )
      return { node: c, nextIndex: f + 1 };
    let I,
      P,
      b,
      F = f + 1,
      y = c.children;
    typeof y != "function" &&
      (y = y.map((k, O) => {
        if (I != null) return k;
        const C = wT({
          targetDepth: e,
          minimumTreeIndex: t,
          newNode: n,
          ignoreCollapsed: r,
          expandParent: o,
          isLastChild: s && O === y.length - 1,
          node: k,
          currentIndex: F,
          currentDepth: p + 1,
          getNodeKey: _,
          path: [],
        });
        return (
          "insertedTreeIndex" in C &&
            ({ insertedTreeIndex: I, parentNode: b, parentPath: P } = C),
          (F = C.nextIndex),
          C.node
        );
      }));
    const g = { ...c, children: y },
      m = { node: g, nextIndex: F };
    return (
      I != null &&
        ((m.insertedTreeIndex = I),
        (m.parentPath = [...S(g), ...P]),
        (m.parentNode = b)),
      m
    );
  },
  ST = ({
    treeData: e,
    depth: t,
    minimumTreeIndex: n,
    newNode: r,
    getNodeKey: o,
    ignoreCollapsed: u = !0,
    expandParent: s = !1,
  }) => {
    if (!e && t === 0)
      return {
        treeData: [r],
        treeIndex: 0,
        path: [o({ node: r, treeIndex: 0 })],
        parentNode: void 0,
      };
    const c = wT({
      targetDepth: t,
      minimumTreeIndex: n,
      newNode: r,
      ignoreCollapsed: u,
      expandParent: s,
      getNodeKey: o,
      isPseudoRoot: !0,
      isLastChild: !0,
      node: { children: e },
      currentIndex: -1,
      currentDepth: -1,
    });
    if (!("insertedTreeIndex" in c))
      throw new Error("No suitable position found to insert.");
    const f = c.insertedTreeIndex;
    return {
      treeData: c.node.children,
      treeIndex: f,
      path: [...c.parentPath, o({ node: r, treeIndex: f })],
      parentNode: c.parentNode,
    };
  },
  ZA = ({ treeData: e, getNodeKey: t, ignoreCollapsed: n = !0 }) => {
    if (!e || e.length === 0) return [];
    const r = [];
    return (
      yT({
        treeData: e,
        getNodeKey: t,
        ignoreCollapsed: n,
        callback: (o) => {
          r.push(o);
        },
      }),
      r
    );
  },
  JA = ({
    flatData: e,
    getKey: t = (o) => o.id,
    getParentKey: n = (o) => o.parentId,
    rootKey: r = "0",
  }) => {
    if (!e) return [];
    const o = {};
    for (const s of e) {
      const c = n(s);
      c in o ? o[c].push(s) : (o[c] = [s]);
    }
    if (!(r in o)) return [];
    const u = (s) => {
      const c = t(s);
      return c in o ? { ...s, children: o[c].map((f) => u(f)) } : { ...s };
    };
    return o[r].map((s) => u(s));
  },
  xT = (e, t) =>
    !!e.children &&
    typeof e.children != "function" &&
    e.children.some((n) => n === t || xT(n, t)),
  TT = (e, t = 0) =>
    e.children
      ? typeof e.children == "function"
        ? t + 1
        : e.children.reduce((n, r) => Math.max(n, TT(r, t + 1)), t)
      : t,
  e3 = ({
    getNodeKey: e,
    treeData: t,
    searchQuery: n,
    searchMethod: r,
    searchFocusOffset: o,
    expandAllMatchPaths: u = !1,
    expandFocusMatchPaths: s = !0,
  }) => {
    let c = 0;
    const f = ({
        isPseudoRoot: _ = !1,
        node: w,
        currentIndex: S,
        path: I = [],
      }) => {
        let P = [],
          b = !1,
          F = !1;
        const y = _ ? [] : [...I, e({ node: w, treeIndex: S })],
          g = _ ? void 0 : { path: y, treeIndex: S },
          m =
            w.children &&
            typeof w.children != "function" &&
            w.children.length > 0;
        !_ &&
          r({ ...g, node: w, searchQuery: n }) &&
          (c === o && (F = !0), (c += 1), (b = !0));
        let k = S;
        const O = { ...w };
        return (
          m &&
            (O.children = O.children.map((C) => {
              const N = f({ node: C, currentIndex: k + 1, path: y });
              return (
                N.node.expanded ? (k = N.treeIndex) : (k += 1),
                (N.matches.length > 0 || N.hasFocusMatch) &&
                  ((P = [...P, ...N.matches]),
                  N.hasFocusMatch && (F = !0),
                  ((u && N.matches.length > 0) ||
                    ((u || s) && N.hasFocusMatch)) &&
                    (O.expanded = !0)),
                N.node
              );
            })),
          !_ &&
            !O.expanded &&
            (P = P.map((C) => ({ ...C, treeIndex: void 0 }))),
          b && (P = [{ ...g, node: O }, ...P]),
          {
            node: P.length > 0 ? O : w,
            matches: P,
            hasFocusMatch: F,
            treeIndex: k,
          }
        );
      },
      p = f({ node: { children: t }, isPseudoRoot: !0, currentIndex: -1 });
    return { matches: p.matches, treeData: p.node.children };
  },
  Kn = (...e) => e.filter(Boolean).join(" "),
  t3 = {
    isSearchMatch: !1,
    isSearchFocus: !1,
    canDrag: !1,
    toggleChildrenVisibility: void 0,
    buttons: [],
    className: "",
    style: {},
    parentNode: void 0,
    draggedNode: void 0,
    canDrop: !1,
    title: void 0,
    subtitle: void 0,
    rowDirection: "ltr",
  },
  n3 = function (e) {
    e = { ...t3, ...e };
    const {
        scaffoldBlockPxWidth: t,
        toggleChildrenVisibility: n,
        connectDragPreview: r,
        connectDragSource: o,
        isDragging: u,
        canDrop: s,
        canDrag: c,
        node: f,
        title: p,
        subtitle: _,
        draggedNode: w,
        path: S,
        treeIndex: I,
        isSearchMatch: P,
        isSearchFocus: b,
        buttons: F,
        className: y,
        style: g,
        didDrop: m,
        treeId: k,
        isOver: O,
        parentNode: C,
        rowDirection: N,
        ...z
      } = e,
      Y = p || f.title,
      W = _ || f.subtitle,
      ue = N === "rtl" ? "rst__rtl" : void 0;
    let he;
    c &&
      (he =
        typeof f.children == "function" && f.expanded
          ? J.jsx("div", {
              className: "rst__loadingHandle",
              children: J.jsx("div", {
                className: "rst__loadingCircle",
                children: Array.from({ length: 12 }).map((Ie, Ue) =>
                  J.jsx(
                    "div",
                    { className: Kn("rst__loadingCirclePoint", ue ?? "") },
                    Ue
                  )
                ),
              }),
            })
          : o(J.jsx("div", { className: "rst__moveHandle" }), {
              dropEffect: "copy",
            }));
    const Ce = w && xT(w, f),
      ge = !m && u;
    let xe = { left: -0.5 * t, right: 0 };
    return (
      N === "rtl" && (xe = { right: -0.5 * t, left: 0 }),
      J.jsxs("div", {
        style: { height: "100%" },
        ...z,
        children: [
          n &&
            f.children &&
            (f.children.length > 0 || typeof f.children == "function") &&
            J.jsxs("div", {
              children: [
                J.jsx("button", {
                  type: "button",
                  "aria-label": f.expanded ? "Collapse" : "Expand",
                  className: Kn(
                    f.expanded ? "rst__collapseButton" : "rst__expandButton",
                    ue ?? ""
                  ),
                  style: xe,
                  onClick: () => n({ node: f, path: S, treeIndex: I }),
                }),
                f.expanded &&
                  !u &&
                  J.jsx("div", {
                    style: { width: t },
                    className: Kn("rst__lineChildren", ue ?? ""),
                  }),
              ],
            }),
          J.jsx("div", {
            className: Kn("rst__rowWrapper", ue ?? ""),
            children: r(
              J.jsxs("div", {
                className: Kn(
                  "rst__row",
                  ge ? "rst__rowLandingPad" : "",
                  ge && !s ? "rst__rowCancelPad" : "",
                  P ? "rst__rowSearchMatch" : "",
                  b ? "rst__rowSearchFocus" : "",
                  ue ?? "",
                  y ?? ""
                ),
                style: { opacity: Ce ? 0.5 : 1, ...g },
                children: [
                  he,
                  J.jsxs("div", {
                    className: Kn(
                      "rst__rowContents",
                      c ? "" : "rst__rowContentsDragDisabled",
                      ue ?? ""
                    ),
                    children: [
                      J.jsxs("div", {
                        className: Kn("rst__rowLabel", ue ?? ""),
                        children: [
                          J.jsx("span", {
                            className: Kn(
                              "rst__rowTitle",
                              f.subtitle ? "rst__rowTitleWithSubtitle" : ""
                            ),
                            children:
                              typeof Y == "function"
                                ? Y({ node: f, path: S, treeIndex: I })
                                : Y,
                          }),
                          W &&
                            J.jsx("span", {
                              className: "rst__rowSubtitle",
                              children:
                                typeof W == "function"
                                  ? W({ node: f, path: S, treeIndex: I })
                                  : W,
                            }),
                        ],
                      }),
                      J.jsx("div", {
                        className: "rst__rowToolbar",
                        children: F?.map((Ie, Ue) =>
                          J.jsx(
                            "div",
                            { className: "rst__toolbarButton", children: Ie },
                            Ue
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              })
            ),
          }),
        ],
      })
    );
  },
  r3 = { isOver: !1, canDrop: !1 },
  i3 = function (e) {
    e = { ...r3, ...e };
    const { canDrop: t, isOver: n } = e;
    return J.jsx("div", {
      className: Kn(
        "rst__placeholder",
        t ? "rst__placeholderLandingPad" : "",
        t && !n ? "rst__placeholderCancelPad" : ""
      ),
    });
  },
  o3 = {
    swapFrom: void 0,
    swapDepth: void 0,
    swapLength: void 0,
    canDrop: !1,
    draggedNode: void 0,
    rowDirection: "ltr",
  };
class l3 extends tt.Component {
  render() {
    const t = { ...o3, ...this.props },
      {
        children: n,
        listIndex: r,
        swapFrom: o,
        swapLength: u,
        swapDepth: s,
        scaffoldBlockPxWidth: c,
        lowerSiblingCounts: f,
        connectDropTarget: p,
        isOver: _,
        draggedNode: w,
        canDrop: S,
        treeIndex: I,
        rowHeight: P,
        treeId: b,
        getPrevRow: F,
        node: y,
        path: g,
        rowDirection: m,
        ...k
      } = t,
      O = m === "rtl" ? "rst__rtl" : void 0,
      C = f.length,
      N = [];
    for (const [W, ue] of f.entries()) {
      let he = "";
      if (
        (ue > 0
          ? r === 0
            ? (he = "rst__lineHalfHorizontalRight rst__lineHalfVerticalBottom")
            : W === C - 1
            ? (he = "rst__lineHalfHorizontalRight rst__lineFullVertical")
            : (he = "rst__lineFullVertical")
          : r === 0
          ? (he = "rst__lineHalfHorizontalRight")
          : W === C - 1 &&
            (he = "rst__lineHalfVerticalTop rst__lineHalfHorizontalRight"),
        N.push(
          J.jsx(
            "div",
            {
              style: { width: c },
              className: Kn("rst__lineBlock", he, O ?? ""),
            },
            `pre_${1 + W}`
          )
        ),
        I !== r && W === s)
      ) {
        let Ce = "";
        r === o + u - 1
          ? (Ce = "rst__highlightBottomLeftCorner")
          : I === o
          ? (Ce = "rst__highlightTopLeftCorner")
          : (Ce = "rst__highlightLineVertical");
        const ge =
          m === "rtl" ? { width: c, right: c * W } : { width: c, left: c * W };
        N.push(
          J.jsx(
            "div",
            { style: ge, className: Kn("rst__absoluteLineBlock", Ce, O ?? "") },
            W
          )
        );
      }
    }
    const z = m === "rtl" ? { right: c * C } : { left: c * C };
    let Y = P;
    return (
      typeof P == "function" && (Y = P(I, y, g)),
      p(
        J.jsxs("div", {
          ...k,
          style: { height: `${Y}px` },
          className: Kn("rst__node", O ?? ""),
          ref: (W) => (this.node = W),
          children: [
            N,
            J.jsx("div", {
              className: "rst__nodeContent",
              style: z,
              children: tt.Children.map(n, (W) =>
                tt.cloneElement(W, { isOver: _, canDrop: S, draggedNode: w })
              ),
            }),
          ],
        })
      )
    );
  }
}
const u3 = { canDrop: !1, draggedNode: void 0 },
  s3 = (e) => {
    e = { ...u3, ...e };
    const { children: t, connectDropTarget: n, treeId: r, drop: o, ...u } = e;
    return n(
      J.jsx("div", {
        children: tt.Children.map(t, (s) => tt.cloneElement(s, { ...u })),
      })
    );
  };
let Fw = 0;
const a3 = (e, t) => ({
    connectDragSource: e.dragSource(),
    connectDragPreview: e.dragPreview(),
    isDragging: t.isDragging(),
    didDrop: t.didDrop(),
  }),
  c3 = (e, t, n, r) =>
    M4(
      r,
      {
        beginDrag: (u) => (
          t(u),
          {
            node: u.node,
            parentNode: u.parentNode,
            path: u.path,
            treeIndex: u.treeIndex,
            treeId: u.treeId,
          }
        ),
        endDrag: (u, s) => {
          n(s.getDropResult());
        },
        isDragging: (u, s) => {
          const c = s.getItem().node;
          return u.node === c;
        },
      },
      a3
    )(e),
  bT = (e, t) => {
    const n = t.getItem();
    return {
      connectDropTarget: e.dropTarget(),
      isOver: t.isOver(),
      canDrop: t.canDrop(),
      draggedNode: n ? n.node : void 0,
    };
  },
  f3 = (e, t, n, r) =>
    bx(
      r,
      {
        drop: (u, s) => {
          const { node: c, path: f, treeIndex: p } = s.getItem(),
            _ = {
              node: c,
              path: f,
              treeIndex: p,
              treeId: t,
              minimumTreeIndex: 0,
              depth: 0,
            };
          return n(_), _;
        },
      },
      bT
    )(e),
  Bg = (e, t, n, r, o, u) => {
    let s = 0;
    const c = e.getPrevRow();
    if (c) {
      const { node: w } = c;
      let { path: S } = c;
      !r(w) && (S = S.slice(0, -1)), (s = Math.min(S.length, e.path.length));
    }
    let f,
      p = (t.getItem().path || []).length;
    if (t.getItem().treeId === o) {
      const w = e.rowDirection === "rtl" ? -1 : 1;
      f = Math.round(
        (w * t.getDifferenceFromInitialOffset().x) / e.scaffoldBlockPxWidth
      );
    } else if (((p = 0), n)) {
      const w = n.node.getBoundingClientRect(),
        S = t.getSourceClientOffset().x - w.left;
      f = Math.round(S / e.scaffoldBlockPxWidth);
    } else f = e.path.length;
    let _ = Math.min(s, Math.max(0, p + f - 1));
    if (u !== void 0 && u !== void 0) {
      const w = t.getItem().node,
        S = TT(w);
      _ = Math.max(0, Math.min(_, u - S - 1));
    }
    return _;
  },
  d3 = (e, t, n, r, o, u, s, c, f) => {
    if (!t.isOver()) return !1;
    const p = e.getPrevRow(),
      _ = p ? p.path : [],
      w = p ? p.node : {};
    if (
      Bg(e, t, void 0, n, r, o) >= _.length &&
      typeof w.children == "function"
    )
      return !1;
    if (typeof u == "function") {
      const { node: I } = t.getItem();
      return u({
        node: I,
        prevPath: t.getItem().path,
        prevParent: t.getItem().parentNode,
        prevTreeIndex: t.getItem().treeIndex,
        nextPath: e.children.props.path,
        nextParent: e.children.props.parentNode,
        nextTreeIndex: e.children.props.treeIndex,
      });
    }
    return !0;
  },
  p3 = (e, t, n, r, o, u, s, c, f, p, _) =>
    bx(
      c,
      {
        drop: (S, I, P) => {
          const b = {
            node: I.getItem().node,
            path: I.getItem().path,
            treeIndex: I.getItem().treeIndex,
            treeId: n,
            minimumTreeIndex: S.treeIndex,
            depth: Bg(S, I, P, t, n, r),
          };
          return u(b), b;
        },
        hover: (S, I, P) => {
          const b = Bg(S, I, P, t, n, r),
            F = I.getItem().node;
          (S.node !== F || b !== S.path.length - 1) &&
            (cancelAnimationFrame(Fw),
            (Fw = requestAnimationFrame(() => {
              const g = I.getItem();
              !g ||
                !I.isOver() ||
                s({
                  node: F,
                  path: g.path,
                  minimumTreeIndex: S.listIndex,
                  depth: b,
                });
            })));
        },
        canDrop: (S, I) => d3(S, I, t, n, r, o),
      },
      bT
    )(e),
  h3 = (e, t, n, r = 1) => {
    const o = [...e.slice(0, t), ...e.slice(t + r)];
    return [...o.slice(0, n), ...e.slice(t, t + r), ...o.slice(n)];
  },
  av = (e) => {
    let t = [],
      n = [],
      r;
    return (o) => {
      const u = Object.keys(o).sort(),
        s = u.map((c) => o[c]);
      return (
        (s.length !== t.length ||
          s.some((c, f) => c !== t[f]) ||
          u.some((c, f) => c !== n[f])) &&
          ((t = s), (n = u), (r = e(o))),
        r
      );
    };
  },
  zw = av(ST),
  g3 = av(ZA),
  _3 = av(sv);
let $w = 1;
const Ah = (e) => {
  const t = {
      ...e,
      style: { ...e.theme.style, ...e.style },
      innerStyle: { ...e.theme.innerStyle, ...e.innerStyle },
    },
    n = {
      nodeContentRenderer: n3,
      placeholderRenderer: i3,
      scaffoldBlockPxWidth: 44,
      slideRegionSize: 100,
      rowHeight: 62,
      treeNodeRenderer: l3,
    };
  for (const r of Object.keys(n))
    e[r] === void 0 && (t[r] = e.theme[r] === void 0 ? n[r] : e.theme[r]);
  return t;
};
class bi extends tt.Component {
  constructor(t) {
    super(t),
      (this.startDrag = ({ path: s }) => {
        this.setState((c) => {
          const {
            treeData: f,
            node: p,
            treeIndex: _,
          } = XA({
            treeData: c.instanceProps.treeData,
            path: s,
            getNodeKey: this.props.getNodeKey,
          });
          return {
            draggingTreeData: f,
            draggedNode: p,
            draggedDepth: s.length - 1,
            draggedMinimumTreeIndex: _,
            dragging: !0,
          };
        });
      }),
      (this.dragHover = ({ node: s, depth: c, minimumTreeIndex: f }) => {
        (this.state.draggedDepth === c &&
          this.state.draggedMinimumTreeIndex === f) ||
          this.setState(({ draggingTreeData: p, instanceProps: _ }) => {
            const w = p || _.treeData,
              S = zw({
                treeData: w,
                newNode: s,
                depth: c,
                minimumTreeIndex: f,
                expandParent: !0,
                getNodeKey: this.props.getNodeKey,
              }),
              P = this.getRows(S.treeData)[S.treeIndex].path;
            return {
              draggedNode: s,
              draggedDepth: c,
              draggedMinimumTreeIndex: f,
              draggingTreeData: cs({
                treeData: w,
                path: P.slice(0, -1),
                newNode: ({ node: b }) => ({ ...b, expanded: !0 }),
                getNodeKey: this.props.getNodeKey,
              }),
              searchFocusTreeIndex: void 0,
              dragging: !0,
            };
          });
      }),
      (this.endDrag = (s) => {
        const { instanceProps: c } = this.state;
        if (!s)
          this.setState({
            draggingTreeData: void 0,
            draggedNode: void 0,
            draggedMinimumTreeIndex: void 0,
            draggedDepth: void 0,
            dragging: !1,
          });
        else if (s.treeId !== this.treeId) {
          const { node: f, path: p, treeIndex: _ } = s;
          let w = this.props.shouldCopyOnOutsideDrop;
          typeof w == "function" &&
            (w = w({ node: f, prevTreeIndex: _, prevPath: p }));
          let S = this.state.draggingTreeData || c.treeData;
          w &&
            (S = cs({
              treeData: c.treeData,
              path: p,
              newNode: ({ node: I }) => ({ ...I }),
              getNodeKey: this.props.getNodeKey,
            })),
            this.props.onChange(S),
            this.props.onMoveNode({
              treeData: S,
              node: f,
              treeIndex: void 0,
              path: void 0,
              nextPath: void 0,
              nextTreeIndex: void 0,
              prevPath: p,
              prevTreeIndex: _,
            });
        }
      }),
      (this.drop = (s) => {
        this.moveNode(s);
      }),
      (this.canNodeHaveChildren = (s) => {
        const { canNodeHaveChildren: c } = this.props;
        return c ? c(s) : !0;
      }),
      (this.listRef = t.virtuosoRef || X.createRef()),
      (this.listProps = t.virtuosoProps || {});
    const {
      dndType: n,
      nodeContentRenderer: r,
      treeNodeRenderer: o,
      slideRegionSize: u,
    } = Ah(t);
    (this.treeId = `rst__${$w}`),
      ($w += 1),
      (this.dndType = n || this.treeId),
      (this.nodeContentRenderer = c3(
        r,
        this.startDrag,
        this.endDrag,
        this.dndType
      )),
      (this.treePlaceholderRenderer = f3(
        s3,
        this.treeId,
        this.drop,
        this.dndType
      )),
      (this.scrollZoneVirtualList = (kx || X4)(
        X.forwardRef((s, c) => {
          const { dragDropManager: f, rowHeight: p, ..._ } = s;
          return J.jsx(RA, {
            ref: this.listRef,
            scrollerRef: (w) => (c.current = w),
            ..._,
          });
        })
      )),
      (this.vStrength = Ox(u)),
      (this.hStrength = Dx(u)),
      (this.state = {
        draggingTreeData: void 0,
        draggedNode: void 0,
        draggedMinimumTreeIndex: void 0,
        draggedDepth: void 0,
        searchMatches: [],
        searchFocusTreeIndex: void 0,
        dragging: !1,
        instanceProps: {
          treeData: [],
          ignoreOneTreeUpdate: !1,
          searchQuery: void 0,
          searchFocusOffset: void 0,
        },
      }),
      (this.treeNodeRenderer = p3(
        o,
        this.canNodeHaveChildren,
        this.treeId,
        this.props.maxDepth,
        this.props.canDrop,
        this.drop,
        this.dragHover,
        this.dndType,
        this.state.draggingTreeData,
        this.props.treeData,
        this.props.getNodeKey
      )),
      (this.toggleChildrenVisibility =
        this.toggleChildrenVisibility.bind(this)),
      (this.moveNode = this.moveNode.bind(this)),
      (this.startDrag = this.startDrag.bind(this)),
      (this.dragHover = this.dragHover.bind(this)),
      (this.endDrag = this.endDrag.bind(this)),
      (this.drop = this.drop.bind(this)),
      (this.handleDndMonitorChange = this.handleDndMonitorChange.bind(this));
  }
  static search(t, n, r, o, u) {
    const {
        onChange: s,
        getNodeKey: c,
        searchFinishCallback: f,
        searchQuery: p,
        searchMethod: _,
        searchFocusOffset: w,
        onlyExpandSearchedNodes: S,
      } = t,
      { instanceProps: I } = n;
    if (!p && !_) return f && f([]), { searchMatches: [] };
    const P = { instanceProps: {} },
      { treeData: b, matches: F } = e3({
        getNodeKey: c,
        treeData: S ? qA({ treeData: I.treeData, expanded: !1 }) : I.treeData,
        searchQuery: p,
        searchMethod: _ || YA,
        searchFocusOffset: w,
        expandAllMatchPaths: o && !u,
        expandFocusMatchPaths: !!o,
      });
    o && ((P.instanceProps.ignoreOneTreeUpdate = !0), s(b)), f && f(F);
    let y;
    return (
      r && w !== void 0 && w < F.length && (y = F[w].treeIndex),
      (P.searchMatches = F),
      (P.searchFocusTreeIndex = y),
      P
    );
  }
  static loadLazyChildren(t, n) {
    const { instanceProps: r } = n;
    yT({
      treeData: r.treeData,
      getNodeKey: t.getNodeKey,
      callback: ({ node: o, path: u, lowerSiblingCounts: s, treeIndex: c }) => {
        o.children &&
          typeof o.children == "function" &&
          (o.expanded || t.loadCollapsedLazyChildren) &&
          o.children({
            node: o,
            path: u,
            lowerSiblingCounts: s,
            treeIndex: c,
            done: (f) =>
              t.onChange(
                cs({
                  treeData: r.treeData,
                  path: u,
                  newNode: ({ node: p }) =>
                    p === o ? { ...p, children: f } : p,
                  getNodeKey: t.getNodeKey,
                })
              ),
          });
      },
    });
  }
  componentDidMount() {
    bi.loadLazyChildren(this.props, this.state);
    const t = bi.search(this.props, this.state, !0, !0, !1);
    this.setState(t),
      (this.clearMonitorSubscription = this.props.dragDropManager
        .getMonitor()
        .subscribeToStateChange(this.handleDndMonitorChange));
  }
  static getDerivedStateFromProps(t, n) {
    const { instanceProps: r } = n,
      o = {},
      u = { ...r },
      s = ow(r.treeData, t.treeData);
    return (
      (u.treeData = t.treeData),
      s
        ? ow(r.searchQuery, t.searchQuery)
          ? r.searchFocusOffset !== t.searchFocusOffset &&
            Object.assign(o, bi.search(t, n, !0, !0, !0))
          : Object.assign(o, bi.search(t, n, !0, !0, !1))
        : (r.ignoreOneTreeUpdate
            ? (u.ignoreOneTreeUpdate = !1)
            : ((o.searchFocusTreeIndex = void 0),
              bi.loadLazyChildren(t, n),
              Object.assign(o, bi.search(t, n, !1, !1, !1))),
          (o.draggingTreeData = void 0),
          (o.draggedNode = void 0),
          (o.draggedMinimumTreeIndex = void 0),
          (o.draggedDepth = void 0),
          (o.dragging = !1)),
      (u.searchQuery = t.searchQuery),
      (u.searchFocusOffset = t.searchFocusOffset),
      (o.instanceProps = { ...u, ...o.instanceProps }),
      o
    );
  }
  componentDidUpdate(t, n) {
    this.state.dragging !== n.dragging &&
      this.props.onDragStateChanged &&
      this.props.onDragStateChanged({
        isDragging: this.state.dragging,
        draggedNode: this.state.draggedNode,
      });
  }
  componentWillUnmount() {
    this.clearMonitorSubscription();
  }
  handleDndMonitorChange() {
    !this.props.dragDropManager.getMonitor().isDragging() &&
      this.state.draggingTreeData &&
      setTimeout(() => {
        this.endDrag();
      });
  }
  getRows(t) {
    return g3({
      ignoreCollapsed: !0,
      getNodeKey: this.props.getNodeKey,
      treeData: t,
    });
  }
  toggleChildrenVisibility({ node: t, path: n }) {
    const { instanceProps: r } = this.state,
      o = cs({
        treeData: r.treeData,
        path: n,
        newNode: ({ node: u }) => ({ ...u, expanded: !u.expanded }),
        getNodeKey: this.props.getNodeKey,
      });
    this.props.onChange(o),
      this.props.onVisibilityToggle({
        treeData: o,
        node: t,
        expanded: !t.expanded,
        path: n,
      });
  }
  moveNode({ node: t, path: n, treeIndex: r, depth: o, minimumTreeIndex: u }) {
    const {
      treeData: s,
      treeIndex: c,
      path: f,
      parentNode: p,
    } = ST({
      treeData: this.state.draggingTreeData,
      newNode: t,
      depth: o,
      minimumTreeIndex: u,
      expandParent: !0,
      getNodeKey: this.props.getNodeKey,
    });
    this.props.onChange(s),
      this.props.onMoveNode({
        treeData: s,
        node: t,
        treeIndex: c,
        path: f,
        nextPath: f,
        nextTreeIndex: c,
        prevPath: n,
        prevTreeIndex: r,
        nextParentNode: p,
      });
  }
  renderRow(
    t,
    {
      listIndex: n,
      style: r,
      getPrevRow: o,
      matchKeys: u,
      swapFrom: s,
      swapDepth: c,
      swapLength: f,
    }
  ) {
    const {
        node: p,
        parentNode: _,
        path: w,
        lowerSiblingCounts: S,
        treeIndex: I,
      } = t,
      {
        canDrag: P,
        generateNodeProps: b,
        scaffoldBlockPxWidth: F,
        searchFocusOffset: y,
        rowDirection: g,
        rowHeight: m,
      } = Ah(this.props),
      k = this.treeNodeRenderer,
      O = this.nodeContentRenderer,
      C = w[w.length - 1],
      N = C in u,
      z = N && u[C] === y,
      Y = {
        node: p,
        parentNode: _,
        path: w,
        lowerSiblingCounts: S,
        treeIndex: I,
        isSearchMatch: N,
        isSearchFocus: z,
      },
      W = b ? b(Y) : {},
      ue = typeof P == "function" ? P(Y) : P,
      he = {
        treeIndex: I,
        scaffoldBlockPxWidth: F,
        node: p,
        path: w,
        treeId: this.treeId,
        rowDirection: g,
      };
    return J.jsx(
      k,
      {
        style: r,
        rowHeight: m,
        listIndex: n,
        getPrevRow: o,
        lowerSiblingCounts: S,
        swapFrom: s,
        swapLength: f,
        swapDepth: c,
        ...he,
        children: J.jsx(O, {
          parentNode: _,
          isSearchMatch: N,
          isSearchFocus: z,
          canDrag: ue,
          toggleChildrenVisibility: this.toggleChildrenVisibility,
          ...he,
          ...W,
        }),
      },
      C
    );
  }
  render() {
    const {
        dragDropManager: t,
        style: n,
        className: r,
        innerStyle: o,
        placeholderRenderer: u,
        getNodeKey: s,
        rowDirection: c,
      } = Ah(this.props),
      {
        searchMatches: f,
        searchFocusTreeIndex: p,
        draggedNode: _,
        draggedDepth: w,
        draggedMinimumTreeIndex: S,
        instanceProps: I,
      } = this.state,
      P = this.state.draggingTreeData || I.treeData,
      b = c === "rtl" ? "rst__rtl" : void 0;
    let F, y, g;
    if (_ && S !== void 0) {
      const C = zw({
          treeData: P,
          newNode: _,
          depth: w,
          minimumTreeIndex: S,
          expandParent: !0,
          getNodeKey: s,
        }),
        N = S;
      (y = C.treeIndex),
        (g = 1 + _3({ node: _ })),
        (F = h3(this.getRows(C.treeData), y, N, g));
    } else F = this.getRows(P);
    const m = {};
    for (const [C, { path: N }] of f.entries()) m[N[N.length - 1]] = C;
    p !== void 0 &&
      this.listRef.current.scrollToIndex({ index: p, align: "center" });
    let k = n,
      O;
    if (F.length === 0) {
      const C = this.treePlaceholderRenderer,
        N = u;
      O = J.jsx(C, {
        treeId: this.treeId,
        drop: this.drop,
        children: J.jsx(N, {}),
      });
    } else {
      k = { height: "100%", ...k };
      const C = this.scrollZoneVirtualList;
      O = J.jsx(C, {
        data: F,
        dragDropManager: t,
        verticalStrength: this.vStrength,
        horizontalStrength: this.hStrength,
        className: "rst__virtualScrollOverride",
        style: o,
        itemContent: (N) =>
          this.renderRow(F[N], {
            listIndex: N,
            getPrevRow: () => F[N - 1] || void 0,
            matchKeys: m,
            swapFrom: y,
            swapDepth: w,
            swapLength: g,
          }),
        ...this.listProps,
      });
    }
    return J.jsx("div", {
      className: Kn("rst__tree", r, b),
      style: k,
      children: O,
    });
  }
}
bi.defaultProps = {
  canDrag: !0,
  canDrop: void 0,
  canNodeHaveChildren: () => !0,
  className: "",
  dndType: void 0,
  generateNodeProps: void 0,
  getNodeKey: KA,
  innerStyle: {},
  maxDepth: void 0,
  treeNodeRenderer: void 0,
  nodeContentRenderer: void 0,
  onMoveNode: () => {},
  onVisibilityToggle: () => {},
  placeholderRenderer: void 0,
  scaffoldBlockPxWidth: void 0,
  searchFinishCallback: void 0,
  searchFocusOffset: void 0,
  searchMethod: void 0,
  searchQuery: void 0,
  shouldCopyOnOutsideDrop: !1,
  slideRegionSize: void 0,
  style: {},
  theme: {},
  onDragStateChanged: () => {},
  onlyExpandSearchedNodes: !1,
  rowDirection: "ltr",
  debugMode: !1,
  overscan: 0,
};
const v3 = function (e) {
    return J.jsx(cd.Consumer, {
      children: ({ dragDropManager: t }) =>
        t === void 0 ? void 0 : J.jsx(bi, { ...e, dragDropManager: t }),
    });
  },
  m3 = function (e) {
    return J.jsx(QN, {
      debugMode: e.debugMode,
      backend: SL,
      children: J.jsx(v3, { ...e }),
    });
  };
var Ff = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ Ff.exports;
(function (e, t) {
  (function () {
    var n,
      r = "4.17.0",
      o = 200,
      u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
      s = "Expected a function",
      c = "__lodash_hash_undefined__",
      f = 500,
      p = "__lodash_placeholder__",
      _ = 1,
      w = 2,
      S = 4,
      I = 1,
      P = 2,
      b = 1,
      F = 2,
      y = 4,
      g = 8,
      m = 16,
      k = 32,
      O = 64,
      C = 128,
      N = 256,
      z = 512,
      Y = 30,
      W = "...",
      ue = 800,
      he = 16,
      Ce = 1,
      ge = 2,
      xe = 3,
      Ie = 1 / 0,
      Ue = 9007199254740991,
      ee = 17976931348623157e292,
      de = 0 / 0,
      ae = 4294967295,
      Ae = ae - 1,
      Ve = ae >>> 1,
      xn = [
        ["ary", C],
        ["bind", b],
        ["bindKey", F],
        ["curry", g],
        ["curryRight", m],
        ["flip", z],
        ["partial", k],
        ["partialRight", O],
        ["rearg", N],
      ],
      Ot = "[object Arguments]",
      Oe = "[object Array]",
      Z = "[object AsyncFunction]",
      we = "[object Boolean]",
      ke = "[object Date]",
      st = "[object DOMException]",
      _t = "[object Error]",
      $t = "[object Function]",
      ft = "[object GeneratorFunction]",
      kt = "[object Map]",
      Fn = "[object Number]",
      lr = "[object Null]",
      vt = "[object Object]",
      ll = "[object Promise]",
      Mi = "[object Proxy]",
      Cr = "[object RegExp]",
      tn = "[object Set]",
      ur = "[object String]",
      zn = "[object Symbol]",
      Ir = "[object Undefined]",
      jr = "[object WeakMap]",
      ul = "[object WeakSet]",
      Wr = "[object ArrayBuffer]",
      Tn = "[object DataView]",
      Fi = "[object Float32Array]",
      zi = "[object Float64Array]",
      Vt = "[object Int8Array]",
      $i = "[object Int16Array]",
      sl = "[object Int32Array]",
      mu = "[object Uint8Array]",
      al = "[object Uint8ClampedArray]",
      Hi = "[object Uint16Array]",
      cl = "[object Uint32Array]",
      ta = /\b__p \+= '';/g,
      Td = /\b(__p \+=) '' \+/g,
      li = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      yu = /&(?:amp|lt|gt|quot|#39);/g,
      na = /[&<>"']/g,
      bd = RegExp(yu.source),
      wu = RegExp(na.source),
      So = /<%-([\s\S]+?)%>/g,
      Su = /<%([\s\S]+?)%>/g,
      fl = /<%=([\s\S]+?)%>/g,
      xu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      xo = /^\w*$/,
      Cd = /^\./,
      Id =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Tu = /[\\^$.*+?()[\]{}|]/g,
      Ed = RegExp(Tu.source),
      ra = /^\s+|\s+$/g,
      bu = /^\s+/,
      Cu = /\s+$/,
      ui = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      Dd = /\{\n\/\* \[wrapped with (.+)\] \*/,
      Od = /,? & /,
      kd = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      Pd = /\\(\\)?/g,
      Rd = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      sr = /\w*$/,
      Nd = /^[-+]0x[0-9a-f]+$/i,
      Ld = /^0b[01]+$/i,
      Ad = /^\[object .+?Constructor\]$/,
      Md = /^0o[0-7]+$/i,
      Fd = /^(?:0|[1-9]\d*)$/,
      si = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      dl = /($^)/,
      zd = /['\n\r\u2028\u2029\\]/g,
      pl = "\\ud800-\\udfff",
      $d = "\\u0300-\\u036f",
      Hd = "\\ufe20-\\ufe2f",
      hl = "\\u20d0-\\u20ff",
      ia = $d + Hd + hl,
      oa = "\\u2700-\\u27bf",
      Er = "a-z\\xdf-\\xf6\\xf8-\\xff",
      Bd = "\\xac\\xb1\\xd7\\xf7",
      Ud = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
      jd = "\\u2000-\\u206f",
      Wd =
        " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      la = "A-Z\\xc0-\\xd6\\xd8-\\xde",
      ua = "\\ufe0e\\ufe0f",
      To = Bd + Ud + jd + Wd,
      Iu = "['’]",
      bo = "[" + pl + "]",
      Eu = "[" + To + "]",
      Co = "[" + ia + "]",
      sa = "\\d+",
      Vd = "[" + oa + "]",
      aa = "[" + Er + "]",
      ca = "[^" + pl + To + sa + oa + Er + la + "]",
      gl = "\\ud83c[\\udffb-\\udfff]",
      Gd = "(?:" + Co + "|" + gl + ")",
      fa = "[^" + pl + "]",
      _l = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Bi = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      $n = "[" + la + "]",
      da = "\\u200d",
      pa = "(?:" + aa + "|" + ca + ")",
      Vr = "(?:" + $n + "|" + ca + ")",
      ha = "(?:" + Iu + "(?:d|ll|m|re|s|t|ve))?",
      ga = "(?:" + Iu + "(?:D|LL|M|RE|S|T|VE))?",
      _a = Gd + "?",
      va = "[" + ua + "]?",
      Kd = "(?:" + da + "(?:" + [fa, _l, Bi].join("|") + ")" + va + _a + ")*",
      ai = "\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)",
      ma = "\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)",
      ya = va + _a + Kd,
      vl = "(?:" + [Vd, _l, Bi].join("|") + ")" + ya,
      Yd = "(?:" + [fa + Co + "?", Co, _l, Bi, bo].join("|") + ")",
      Du = RegExp(Iu, "g"),
      Qd = RegExp(Co, "g"),
      ml = RegExp(gl + "(?=" + gl + ")|" + Yd + ya, "g"),
      wa = RegExp(
        [
          $n + "?" + aa + "+" + ha + "(?=" + [Eu, $n, "$"].join("|") + ")",
          Vr + "+" + ga + "(?=" + [Eu, $n + pa, "$"].join("|") + ")",
          $n + "?" + pa + "+" + ha,
          $n + "+" + ga,
          ma,
          ai,
          sa,
          vl,
        ].join("|"),
        "g"
      ),
      Sa = RegExp("[" + da + pl + ia + ua + "]"),
      Io =
        /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      xa = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout",
      ],
      qd = -1,
      rt = {};
    (rt[Fi] =
      rt[zi] =
      rt[Vt] =
      rt[$i] =
      rt[sl] =
      rt[mu] =
      rt[al] =
      rt[Hi] =
      rt[cl] =
        !0),
      (rt[Ot] =
        rt[Oe] =
        rt[Wr] =
        rt[we] =
        rt[Tn] =
        rt[ke] =
        rt[_t] =
        rt[$t] =
        rt[kt] =
        rt[Fn] =
        rt[vt] =
        rt[Cr] =
        rt[tn] =
        rt[ur] =
        rt[jr] =
          !1);
    var et = {};
    (et[Ot] =
      et[Oe] =
      et[Wr] =
      et[Tn] =
      et[we] =
      et[ke] =
      et[Fi] =
      et[zi] =
      et[Vt] =
      et[$i] =
      et[sl] =
      et[kt] =
      et[Fn] =
      et[vt] =
      et[Cr] =
      et[tn] =
      et[ur] =
      et[zn] =
      et[mu] =
      et[al] =
      et[Hi] =
      et[cl] =
        !0),
      (et[_t] = et[$t] = et[jr] = !1);
    var T = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s",
      },
      L = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      },
      V = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
      },
      le = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      it = parseFloat,
      Ee = parseInt,
      dt = typeof Yn == "object" && Yn && Yn.Object === Object && Yn,
      At = typeof self == "object" && self && self.Object === Object && self,
      Be = dt || At || Function("return this")(),
      ot = t && !t.nodeType && t,
      Gt = ot && !0 && e && !e.nodeType && e,
      bn = Gt && Gt.exports === ot,
      Mt = bn && dt.process,
      pt = (function () {
        try {
          return Mt && Mt.binding && Mt.binding("util");
        } catch {}
      })(),
      dn = pt && pt.isArrayBuffer,
      Dr = pt && pt.isDate,
      ar = pt && pt.isMap,
      Gr = pt && pt.isRegExp,
      Ou = pt && pt.isSet,
      Eo = pt && pt.isTypedArray;
    function yl(A, B) {
      return A.set(B[0], B[1]), A;
    }
    function PT(A, B) {
      return A.add(B), A;
    }
    function Cn(A, B, $) {
      switch ($.length) {
        case 0:
          return A.call(B);
        case 1:
          return A.call(B, $[0]);
        case 2:
          return A.call(B, $[0], $[1]);
        case 3:
          return A.call(B, $[0], $[1], $[2]);
      }
      return A.apply(B, $);
    }
    function RT(A, B, $, se) {
      for (var De = -1, Ye = A == null ? 0 : A.length; ++De < Ye; ) {
        var Ht = A[De];
        B(se, Ht, $(Ht), A);
      }
      return se;
    }
    function cr(A, B) {
      for (
        var $ = -1, se = A == null ? 0 : A.length;
        ++$ < se && B(A[$], $, A) !== !1;

      );
      return A;
    }
    function NT(A, B) {
      for (var $ = A == null ? 0 : A.length; $-- && B(A[$], $, A) !== !1; );
      return A;
    }
    function gv(A, B) {
      for (var $ = -1, se = A == null ? 0 : A.length; ++$ < se; )
        if (!B(A[$], $, A)) return !1;
      return !0;
    }
    function Do(A, B) {
      for (
        var $ = -1, se = A == null ? 0 : A.length, De = 0, Ye = [];
        ++$ < se;

      ) {
        var Ht = A[$];
        B(Ht, $, A) && (Ye[De++] = Ht);
      }
      return Ye;
    }
    function Ta(A, B) {
      var $ = A == null ? 0 : A.length;
      return !!$ && wl(A, B, 0) > -1;
    }
    function Xd(A, B, $) {
      for (var se = -1, De = A == null ? 0 : A.length; ++se < De; )
        if ($(B, A[se])) return !0;
      return !1;
    }
    function Et(A, B) {
      for (
        var $ = -1, se = A == null ? 0 : A.length, De = Array(se);
        ++$ < se;

      )
        De[$] = B(A[$], $, A);
      return De;
    }
    function ci(A, B) {
      for (var $ = -1, se = B.length, De = A.length; ++$ < se; )
        A[De + $] = B[$];
      return A;
    }
    function ku(A, B, $, se) {
      var De = -1,
        Ye = A == null ? 0 : A.length;
      for (se && Ye && ($ = A[++De]); ++De < Ye; ) $ = B($, A[De], De, A);
      return $;
    }
    function LT(A, B, $, se) {
      var De = A == null ? 0 : A.length;
      for (se && De && ($ = A[--De]); De--; ) $ = B($, A[De], De, A);
      return $;
    }
    function Zd(A, B) {
      for (var $ = -1, se = A == null ? 0 : A.length; ++$ < se; )
        if (B(A[$], $, A)) return !0;
      return !1;
    }
    var AT = Jd("length");
    function MT(A) {
      return A.split("");
    }
    function FT(A) {
      return A.match(kd) || [];
    }
    function _v(A, B, $) {
      var se;
      return (
        $(A, function (De, Ye, Ht) {
          if (B(De, Ye, Ht)) return (se = Ye), !1;
        }),
        se
      );
    }
    function ba(A, B, $, se) {
      for (var De = A.length, Ye = $ + (se ? 1 : -1); se ? Ye-- : ++Ye < De; )
        if (B(A[Ye], Ye, A)) return Ye;
      return -1;
    }
    function wl(A, B, $) {
      return B === B ? QT(A, B, $) : ba(A, vv, $);
    }
    function zT(A, B, $, se) {
      for (var De = $ - 1, Ye = A.length; ++De < Ye; )
        if (se(A[De], B)) return De;
      return -1;
    }
    function vv(A) {
      return A !== A;
    }
    function mv(A, B) {
      var $ = A == null ? 0 : A.length;
      return $ ? tp(A, B) / $ : de;
    }
    function Jd(A) {
      return function (B) {
        return B == null ? n : B[A];
      };
    }
    function ep(A) {
      return function (B) {
        return A == null ? n : A[B];
      };
    }
    function yv(A, B, $, se, De) {
      return (
        De(A, function (Ye, Ht, lt) {
          $ = se ? ((se = !1), Ye) : B($, Ye, Ht, lt);
        }),
        $
      );
    }
    function $T(A, B) {
      var $ = A.length;
      for (A.sort(B); $--; ) A[$] = A[$].value;
      return A;
    }
    function tp(A, B) {
      for (var $, se = -1, De = A.length; ++se < De; ) {
        var Ye = B(A[se]);
        Ye !== n && ($ = $ === n ? Ye : $ + Ye);
      }
      return $;
    }
    function np(A, B) {
      for (var $ = -1, se = Array(A); ++$ < A; ) se[$] = B($);
      return se;
    }
    function HT(A, B) {
      return Et(B, function ($) {
        return [$, A[$]];
      });
    }
    function Hn(A) {
      return function (B) {
        return A(B);
      };
    }
    function rp(A, B) {
      return Et(B, function ($) {
        return A[$];
      });
    }
    function Pu(A, B) {
      return A.has(B);
    }
    function wv(A, B) {
      for (var $ = -1, se = A.length; ++$ < se && wl(B, A[$], 0) > -1; );
      return $;
    }
    function Sv(A, B) {
      for (var $ = A.length; $-- && wl(B, A[$], 0) > -1; );
      return $;
    }
    function BT(A, B) {
      for (var $ = A.length, se = 0; $--; ) A[$] === B && ++se;
      return se;
    }
    var UT = ep(T),
      jT = ep(L);
    function WT(A) {
      return "\\" + le[A];
    }
    function VT(A, B) {
      return A == null ? n : A[B];
    }
    function Sl(A) {
      return Sa.test(A);
    }
    function GT(A) {
      return Io.test(A);
    }
    function KT(A) {
      for (var B, $ = []; !(B = A.next()).done; ) $.push(B.value);
      return $;
    }
    function Ru(A) {
      var B = -1,
        $ = Array(A.size);
      return (
        A.forEach(function (se, De) {
          $[++B] = [De, se];
        }),
        $
      );
    }
    function ip(A, B) {
      return function ($) {
        return A(B($));
      };
    }
    function Ui(A, B) {
      for (var $ = -1, se = A.length, De = 0, Ye = []; ++$ < se; ) {
        var Ht = A[$];
        (Ht === B || Ht === p) && ((A[$] = p), (Ye[De++] = $));
      }
      return Ye;
    }
    function xl(A) {
      var B = -1,
        $ = Array(A.size);
      return (
        A.forEach(function (se) {
          $[++B] = se;
        }),
        $
      );
    }
    function YT(A) {
      var B = -1,
        $ = Array(A.size);
      return (
        A.forEach(function (se) {
          $[++B] = [se, se];
        }),
        $
      );
    }
    function QT(A, B, $) {
      for (var se = $ - 1, De = A.length; ++se < De; )
        if (A[se] === B) return se;
      return -1;
    }
    function qT(A, B, $) {
      for (var se = $ + 1; se--; ) if (A[se] === B) return se;
      return se;
    }
    function Tl(A) {
      return Sl(A) ? ZT(A) : AT(A);
    }
    function Or(A) {
      return Sl(A) ? JT(A) : MT(A);
    }
    var XT = ep(V);
    function ZT(A) {
      for (var B = (ml.lastIndex = 0); ml.test(A); ) ++B;
      return B;
    }
    function JT(A) {
      return A.match(ml) || [];
    }
    function eb(A) {
      return A.match(wa) || [];
    }
    var tb = function A(B) {
        B = B == null ? Be : bl.defaults(Be.Object(), B, bl.pick(Be, xa));
        var $ = B.Array,
          se = B.Date,
          De = B.Error,
          Ye = B.Function,
          Ht = B.Math,
          lt = B.Object,
          op = B.RegExp,
          nb = B.String,
          fr = B.TypeError,
          Ca = $.prototype,
          rb = Ye.prototype,
          Nu = lt.prototype,
          Ia = B["__core-js_shared__"],
          Ea = rb.toString,
          at = Nu.hasOwnProperty,
          ib = 0,
          xv = (function () {
            var i = /[^.]+$/.exec((Ia && Ia.keys && Ia.keys.IE_PROTO) || "");
            return i ? "Symbol(src)_1." + i : "";
          })(),
          Tv = Nu.toString,
          ob = Ea.call(lt),
          lb = Be._,
          ub = op(
            "^" +
              Ea.call(at)
                .replace(Tu, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          Da = bn ? B.Buffer : n,
          ji = B.Symbol,
          Oa = B.Uint8Array,
          bv = Da ? Da.allocUnsafe : n,
          ka = ip(lt.getPrototypeOf, lt),
          Cv = lt.create,
          sb = Nu.propertyIsEnumerable,
          Pa = Ca.splice,
          Iv = ji ? ji.isConcatSpreadable : n,
          Lu = ji ? ji.iterator : n,
          Oo = ji ? ji.toStringTag : n,
          Ra = (function () {
            try {
              var i = Lo(lt, "defineProperty");
              return i({}, "", {}), i;
            } catch {}
          })(),
          ab = B.clearTimeout !== Be.clearTimeout && B.clearTimeout,
          cb = se && se.now !== Be.Date.now && se.now,
          fb = B.setTimeout !== Be.setTimeout && B.setTimeout,
          Na = Ht.ceil,
          La = Ht.floor,
          lp = lt.getOwnPropertySymbols,
          db = Da ? Da.isBuffer : n,
          pb = B.isFinite,
          hb = Ca.join,
          gb = ip(lt.keys, lt),
          Bt = Ht.max,
          nn = Ht.min,
          _b = se.now,
          vb = B.parseInt,
          Ev = Ht.random,
          mb = Ca.reverse,
          up = Lo(B, "DataView"),
          Au = Lo(B, "Map"),
          sp = Lo(B, "Promise"),
          Cl = Lo(B, "Set"),
          Mu = Lo(B, "WeakMap"),
          Fu = Lo(lt, "create"),
          Aa = Mu && new Mu(),
          zu = {},
          yb = Ao(up),
          wb = Ao(Au),
          Sb = Ao(sp),
          xb = Ao(Cl),
          Tb = Ao(Mu),
          Ma = ji ? ji.prototype : n,
          $u = Ma ? Ma.valueOf : n,
          Dv = Ma ? Ma.toString : n;
        function v(i) {
          if (Rt(i) && !Pe(i) && !(i instanceof $e)) {
            if (i instanceof dr) return i;
            if (at.call(i, "__wrapped__")) return Em(i);
          }
          return new dr(i);
        }
        var Il = (function () {
          function i() {}
          return function (l) {
            if (!mt(l)) return {};
            if (Cv) return Cv(l);
            i.prototype = l;
            var a = new i();
            return (i.prototype = n), a;
          };
        })();
        function Fa() {}
        function dr(i, l) {
          (this.__wrapped__ = i),
            (this.__actions__ = []),
            (this.__chain__ = !!l),
            (this.__index__ = 0),
            (this.__values__ = n);
        }
        (v.templateSettings = {
          escape: So,
          evaluate: Su,
          interpolate: fl,
          variable: "",
          imports: { _: v },
        }),
          (v.prototype = Fa.prototype),
          (v.prototype.constructor = v),
          (dr.prototype = Il(Fa.prototype)),
          (dr.prototype.constructor = dr);
        function $e(i) {
          (this.__wrapped__ = i),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = ae),
            (this.__views__ = []);
        }
        function bb() {
          var i = new $e(this.__wrapped__);
          return (
            (i.__actions__ = In(this.__actions__)),
            (i.__dir__ = this.__dir__),
            (i.__filtered__ = this.__filtered__),
            (i.__iteratees__ = In(this.__iteratees__)),
            (i.__takeCount__ = this.__takeCount__),
            (i.__views__ = In(this.__views__)),
            i
          );
        }
        function Cb() {
          if (this.__filtered__) {
            var i = new $e(this);
            (i.__dir__ = -1), (i.__filtered__ = !0);
          } else (i = this.clone()), (i.__dir__ *= -1);
          return i;
        }
        function Ib() {
          var i = this.__wrapped__.value(),
            l = this.__dir__,
            a = Pe(i),
            d = l < 0,
            h = a ? i.length : 0,
            x = BC(0, h, this.__views__),
            D = x.start,
            R = x.end,
            M = R - D,
            j = d ? R : D - 1,
            U = this.__iteratees__,
            K = U.length,
            te = 0,
            pe = nn(M, this.__takeCount__);
          if (!a || h < o || (h == M && pe == M))
            return Jv(i, this.__actions__);
          var ye = [];
          e: for (; M-- && te < pe; ) {
            j += l;
            for (var Me = -1, Se = i[j]; ++Me < K; ) {
              var je = U[Me],
                Qe = je.iteratee,
                hn = je.type,
                gn = Qe(Se);
              if (hn == ge) Se = gn;
              else if (!gn) {
                if (hn == Ce) continue e;
                break e;
              }
            }
            ye[te++] = Se;
          }
          return ye;
        }
        ($e.prototype = Il(Fa.prototype)), ($e.prototype.constructor = $e);
        function ko(i) {
          var l = -1,
            a = i == null ? 0 : i.length;
          for (this.clear(); ++l < a; ) {
            var d = i[l];
            this.set(d[0], d[1]);
          }
        }
        function Eb() {
          (this.__data__ = Fu ? Fu(null) : {}), (this.size = 0);
        }
        function Db(i) {
          var l = this.has(i) && delete this.__data__[i];
          return (this.size -= l ? 1 : 0), l;
        }
        function Ob(i) {
          var l = this.__data__;
          if (Fu) {
            var a = l[i];
            return a === c ? n : a;
          }
          return at.call(l, i) ? l[i] : n;
        }
        function kb(i) {
          var l = this.__data__;
          return Fu ? l[i] !== n : at.call(l, i);
        }
        function Pb(i, l) {
          var a = this.__data__;
          return (
            (this.size += this.has(i) ? 0 : 1),
            (a[i] = Fu && l === n ? c : l),
            this
          );
        }
        (ko.prototype.clear = Eb),
          (ko.prototype.delete = Db),
          (ko.prototype.get = Ob),
          (ko.prototype.has = kb),
          (ko.prototype.set = Pb);
        function fi(i) {
          var l = -1,
            a = i == null ? 0 : i.length;
          for (this.clear(); ++l < a; ) {
            var d = i[l];
            this.set(d[0], d[1]);
          }
        }
        function Rb() {
          (this.__data__ = []), (this.size = 0);
        }
        function Nb(i) {
          var l = this.__data__,
            a = za(l, i);
          if (a < 0) return !1;
          var d = l.length - 1;
          return a == d ? l.pop() : Pa.call(l, a, 1), --this.size, !0;
        }
        function Lb(i) {
          var l = this.__data__,
            a = za(l, i);
          return a < 0 ? n : l[a][1];
        }
        function Ab(i) {
          return za(this.__data__, i) > -1;
        }
        function Mb(i, l) {
          var a = this.__data__,
            d = za(a, i);
          return d < 0 ? (++this.size, a.push([i, l])) : (a[d][1] = l), this;
        }
        (fi.prototype.clear = Rb),
          (fi.prototype.delete = Nb),
          (fi.prototype.get = Lb),
          (fi.prototype.has = Ab),
          (fi.prototype.set = Mb);
        function di(i) {
          var l = -1,
            a = i == null ? 0 : i.length;
          for (this.clear(); ++l < a; ) {
            var d = i[l];
            this.set(d[0], d[1]);
          }
        }
        function Fb() {
          (this.size = 0),
            (this.__data__ = {
              hash: new ko(),
              map: new (Au || fi)(),
              string: new ko(),
            });
        }
        function zb(i) {
          var l = qa(this, i).delete(i);
          return (this.size -= l ? 1 : 0), l;
        }
        function $b(i) {
          return qa(this, i).get(i);
        }
        function Hb(i) {
          return qa(this, i).has(i);
        }
        function Bb(i, l) {
          var a = qa(this, i),
            d = a.size;
          return a.set(i, l), (this.size += a.size == d ? 0 : 1), this;
        }
        (di.prototype.clear = Fb),
          (di.prototype.delete = zb),
          (di.prototype.get = $b),
          (di.prototype.has = Hb),
          (di.prototype.set = Bb);
        function Po(i) {
          var l = -1,
            a = i == null ? 0 : i.length;
          for (this.__data__ = new di(); ++l < a; ) this.add(i[l]);
        }
        function Ub(i) {
          return this.__data__.set(i, c), this;
        }
        function jb(i) {
          return this.__data__.has(i);
        }
        (Po.prototype.add = Po.prototype.push = Ub), (Po.prototype.has = jb);
        function kr(i) {
          var l = (this.__data__ = new fi(i));
          this.size = l.size;
        }
        function Wb() {
          (this.__data__ = new fi()), (this.size = 0);
        }
        function Vb(i) {
          var l = this.__data__,
            a = l.delete(i);
          return (this.size = l.size), a;
        }
        function Gb(i) {
          return this.__data__.get(i);
        }
        function Kb(i) {
          return this.__data__.has(i);
        }
        function Yb(i, l) {
          var a = this.__data__;
          if (a instanceof fi) {
            var d = a.__data__;
            if (!Au || d.length < o - 1)
              return d.push([i, l]), (this.size = ++a.size), this;
            a = this.__data__ = new di(d);
          }
          return a.set(i, l), (this.size = a.size), this;
        }
        (kr.prototype.clear = Wb),
          (kr.prototype.delete = Vb),
          (kr.prototype.get = Gb),
          (kr.prototype.has = Kb),
          (kr.prototype.set = Yb);
        function Ov(i, l) {
          var a = Pe(i),
            d = !a && Mo(i),
            h = !a && !d && Gi(i),
            x = !a && !d && !h && Pl(i),
            D = a || d || h || x,
            R = D ? np(i.length, nb) : [],
            M = R.length;
          for (var j in i)
            (l || at.call(i, j)) &&
              !(
                D &&
                (j == "length" ||
                  (h && (j == "offset" || j == "parent")) ||
                  (x &&
                    (j == "buffer" ||
                      j == "byteLength" ||
                      j == "byteOffset")) ||
                  vi(j, M))
              ) &&
              R.push(j);
          return R;
        }
        function kv(i) {
          var l = i.length;
          return l ? i[wp(0, l - 1)] : n;
        }
        function Qb(i, l) {
          return Xa(In(i), Ro(l, 0, i.length));
        }
        function qb(i) {
          return Xa(In(i));
        }
        function ap(i, l, a, d) {
          return i === n || (qr(i, Nu[a]) && !at.call(d, a)) ? l : i;
        }
        function cp(i, l, a) {
          ((a !== n && !qr(i[l], a)) || (a === n && !(l in i))) && pi(i, l, a);
        }
        function Hu(i, l, a) {
          var d = i[l];
          (!(at.call(i, l) && qr(d, a)) || (a === n && !(l in i))) &&
            pi(i, l, a);
        }
        function za(i, l) {
          for (var a = i.length; a--; ) if (qr(i[a][0], l)) return a;
          return -1;
        }
        function Xb(i, l, a, d) {
          return (
            Wi(i, function (h, x, D) {
              l(d, h, a(h), D);
            }),
            d
          );
        }
        function Pv(i, l) {
          return i && Yr(l, Ft(l), i);
        }
        function Zb(i, l) {
          return i && Yr(l, Vn(l), i);
        }
        function pi(i, l, a) {
          l == "__proto__" && Ra
            ? Ra(i, l, {
                configurable: !0,
                enumerable: !0,
                value: a,
                writable: !0,
              })
            : (i[l] = a);
        }
        function fp(i, l) {
          for (var a = -1, d = l.length, h = $(d), x = i == null; ++a < d; )
            h[a] = x ? n : Up(i, l[a]);
          return h;
        }
        function Ro(i, l, a) {
          return (
            i === i &&
              (a !== n && (i = i <= a ? i : a),
              l !== n && (i = i >= l ? i : l)),
            i
          );
        }
        function Pr(i, l, a, d, h, x) {
          var D,
            R = l & _,
            M = l & w,
            j = l & S;
          if ((a && (D = h ? a(i, d, h, x) : a(i)), D !== n)) return D;
          if (!mt(i)) return i;
          var U = Pe(i);
          if (U) {
            if (((D = jC(i)), !R)) return In(i, D);
          } else {
            var K = rn(i),
              te = K == $t || K == ft;
            if (Gi(i)) return tm(i, R);
            if (K == vt || K == Ot || (te && !h)) {
              if (((D = M || te ? {} : mm(i)), !R))
                return M ? RC(i, Zb(D, i)) : PC(i, Pv(D, i));
            } else {
              if (!et[K]) return h ? i : {};
              D = WC(i, K, Pr, R);
            }
          }
          x || (x = new kr());
          var pe = x.get(i);
          if (pe) return pe;
          x.set(i, D);
          var ye = j ? (M ? Op : $C) : M ? Vn : Ft,
            Me = U ? n : ye(i);
          return (
            cr(Me || i, function (Se, je) {
              Me && ((je = Se), (Se = i[je])),
                Hu(D, je, Pr(Se, l, a, je, i, x));
            }),
            D
          );
        }
        function Jb(i) {
          var l = Ft(i);
          return function (a) {
            return Rv(a, i, l);
          };
        }
        function Rv(i, l, a) {
          var d = a.length;
          if (i == null) return !d;
          for (i = lt(i); d--; ) {
            var h = a[d],
              x = l[h],
              D = i[h];
            if ((D === n && !(h in i)) || !x(D)) return !1;
          }
          return !0;
        }
        function Nv(i, l, a) {
          if (typeof i != "function") throw new fr(s);
          return Ku(function () {
            i.apply(n, a);
          }, l);
        }
        function Bu(i, l, a, d) {
          var h = -1,
            x = Ta,
            D = !0,
            R = i.length,
            M = [],
            j = l.length;
          if (!R) return M;
          a && (l = Et(l, Hn(a))),
            d
              ? ((x = Xd), (D = !1))
              : l.length >= o && ((x = Pu), (D = !1), (l = new Po(l)));
          e: for (; ++h < R; ) {
            var U = i[h],
              K = a == null ? U : a(U);
            if (((U = d || U !== 0 ? U : 0), D && K === K)) {
              for (var te = j; te--; ) if (l[te] === K) continue e;
              M.push(U);
            } else x(l, K, d) || M.push(U);
          }
          return M;
        }
        var Wi = lm(Kr),
          Lv = lm(pp, !0);
        function eC(i, l) {
          var a = !0;
          return (
            Wi(i, function (d, h, x) {
              return (a = !!l(d, h, x)), a;
            }),
            a
          );
        }
        function $a(i, l, a) {
          for (var d = -1, h = i.length; ++d < h; ) {
            var x = i[d],
              D = l(x);
            if (D != null && (R === n ? D === D && !Wn(D) : a(D, R)))
              var R = D,
                M = x;
          }
          return M;
        }
        function tC(i, l, a, d) {
          var h = i.length;
          for (
            a = Re(a),
              a < 0 && (a = -a > h ? 0 : h + a),
              d = d === n || d > h ? h : Re(d),
              d < 0 && (d += h),
              d = a > d ? 0 : Km(d);
            a < d;

          )
            i[a++] = l;
          return i;
        }
        function Av(i, l) {
          var a = [];
          return (
            Wi(i, function (d, h, x) {
              l(d, h, x) && a.push(d);
            }),
            a
          );
        }
        function Xt(i, l, a, d, h) {
          var x = -1,
            D = i.length;
          for (a || (a = GC), h || (h = []); ++x < D; ) {
            var R = i[x];
            l > 0 && a(R)
              ? l > 1
                ? Xt(R, l - 1, a, d, h)
                : ci(h, R)
              : d || (h[h.length] = R);
          }
          return h;
        }
        var dp = um(),
          Mv = um(!0);
        function Kr(i, l) {
          return i && dp(i, l, Ft);
        }
        function pp(i, l) {
          return i && Mv(i, l, Ft);
        }
        function Ha(i, l) {
          return Do(l, function (a) {
            return mi(i[a]);
          });
        }
        function El(i, l) {
          l = Qr(l, i) ? [l] : No(l);
          for (var a = 0, d = l.length; i != null && a < d; ) i = i[Un(l[a++])];
          return a && a == d ? i : n;
        }
        function Fv(i, l, a) {
          var d = l(i);
          return Pe(i) ? d : ci(d, a(i));
        }
        function pn(i) {
          return i == null
            ? i === n
              ? Ir
              : lr
            : ((i = lt(i)), Oo && Oo in i ? HC(i) : JC(i));
        }
        function hp(i, l) {
          return i > l;
        }
        function nC(i, l) {
          return i != null && at.call(i, l);
        }
        function rC(i, l) {
          return i != null && l in lt(i);
        }
        function iC(i, l, a) {
          return i >= nn(l, a) && i < Bt(l, a);
        }
        function gp(i, l, a) {
          for (
            var d = a ? Xd : Ta,
              h = i[0].length,
              x = i.length,
              D = x,
              R = $(x),
              M = 1 / 0,
              j = [];
            D--;

          ) {
            var U = i[D];
            D && l && (U = Et(U, Hn(l))),
              (M = nn(U.length, M)),
              (R[D] =
                !a && (l || (h >= 120 && U.length >= 120))
                  ? new Po(D && U)
                  : n);
          }
          U = i[0];
          var K = -1,
            te = R[0];
          e: for (; ++K < h && j.length < M; ) {
            var pe = U[K],
              ye = l ? l(pe) : pe;
            if (
              ((pe = a || pe !== 0 ? pe : 0), !(te ? Pu(te, ye) : d(j, ye, a)))
            ) {
              for (D = x; --D; ) {
                var Me = R[D];
                if (!(Me ? Pu(Me, ye) : d(i[D], ye, a))) continue e;
              }
              te && te.push(ye), j.push(pe);
            }
          }
          return j;
        }
        function oC(i, l, a, d) {
          return (
            Kr(i, function (h, x, D) {
              l(d, a(h), x, D);
            }),
            d
          );
        }
        function Uu(i, l, a) {
          Qr(l, i) || ((l = No(l)), (i = Lp(i, l)), (l = jn(l)));
          var d = i == null ? i : i[Un(l)];
          return d == null ? n : Cn(d, i, a);
        }
        function zv(i) {
          return Rt(i) && pn(i) == Ot;
        }
        function lC(i) {
          return Rt(i) && pn(i) == Wr;
        }
        function uC(i) {
          return Rt(i) && pn(i) == ke;
        }
        function ju(i, l, a, d, h) {
          return i === l
            ? !0
            : i == null || l == null || (!mt(i) && !Rt(l))
            ? i !== i && l !== l
            : sC(i, l, a, d, ju, h);
        }
        function sC(i, l, a, d, h, x) {
          var D = Pe(i),
            R = Pe(l),
            M = Oe,
            j = Oe;
          D || ((M = rn(i)), (M = M == Ot ? vt : M)),
            R || ((j = rn(l)), (j = j == Ot ? vt : j));
          var U = M == vt,
            K = j == vt,
            te = M == j;
          if (te && Gi(i)) {
            if (!Gi(l)) return !1;
            (D = !0), (U = !1);
          }
          if (te && !U)
            return (
              x || (x = new kr()),
              D || Pl(i) ? gm(i, l, a, d, h, x) : FC(i, l, M, a, d, h, x)
            );
          if (!(a & I)) {
            var pe = U && at.call(i, "__wrapped__"),
              ye = K && at.call(l, "__wrapped__");
            if (pe || ye) {
              var Me = pe ? i.value() : i,
                Se = ye ? l.value() : l;
              return x || (x = new kr()), h(Me, Se, a, d, x);
            }
          }
          return te ? (x || (x = new kr()), zC(i, l, a, d, h, x)) : !1;
        }
        function aC(i) {
          return Rt(i) && rn(i) == kt;
        }
        function _p(i, l, a, d) {
          var h = a.length,
            x = h,
            D = !d;
          if (i == null) return !x;
          for (i = lt(i); h--; ) {
            var R = a[h];
            if (D && R[2] ? R[1] !== i[R[0]] : !(R[0] in i)) return !1;
          }
          for (; ++h < x; ) {
            R = a[h];
            var M = R[0],
              j = i[M],
              U = R[1];
            if (D && R[2]) {
              if (j === n && !(M in i)) return !1;
            } else {
              var K = new kr();
              if (d) var te = d(j, U, M, i, l, K);
              if (!(te === n ? ju(U, j, I | P, d, K) : te)) return !1;
            }
          }
          return !0;
        }
        function $v(i) {
          if (!mt(i) || YC(i)) return !1;
          var l = mi(i) ? ub : Ad;
          return l.test(Ao(i));
        }
        function cC(i) {
          return Rt(i) && pn(i) == Cr;
        }
        function fC(i) {
          return Rt(i) && rn(i) == tn;
        }
        function dC(i) {
          return Rt(i) && rc(i.length) && !!rt[pn(i)];
        }
        function Hv(i) {
          return typeof i == "function"
            ? i
            : i == null
            ? On
            : typeof i == "object"
            ? Pe(i)
              ? jv(i[0], i[1])
              : Uv(i)
            : i0(i);
        }
        function vp(i) {
          if (!Gu(i)) return gb(i);
          var l = [];
          for (var a in lt(i)) at.call(i, a) && a != "constructor" && l.push(a);
          return l;
        }
        function pC(i) {
          if (!mt(i)) return ZC(i);
          var l = Gu(i),
            a = [];
          for (var d in i)
            (d == "constructor" && (l || !at.call(i, d))) || a.push(d);
          return a;
        }
        function mp(i, l) {
          return i < l;
        }
        function Bv(i, l) {
          var a = -1,
            d = Dn(i) ? $(i.length) : [];
          return (
            Wi(i, function (h, x, D) {
              d[++a] = l(h, x, D);
            }),
            d
          );
        }
        function Uv(i) {
          var l = Pp(i);
          return l.length == 1 && l[0][2]
            ? wm(l[0][0], l[0][1])
            : function (a) {
                return a === i || _p(a, i, l);
              };
        }
        function jv(i, l) {
          return Qr(i) && ym(l)
            ? wm(Un(i), l)
            : function (a) {
                var d = Up(a, i);
                return d === n && d === l ? jp(a, i) : ju(l, d, I | P);
              };
        }
        function Ba(i, l, a, d, h) {
          i !== l &&
            dp(
              l,
              function (x, D) {
                if (mt(x)) h || (h = new kr()), hC(i, l, D, a, Ba, d, h);
                else {
                  var R = d ? d(i[D], x, D + "", i, l, h) : n;
                  R === n && (R = x), cp(i, D, R);
                }
              },
              Vn
            );
        }
        function hC(i, l, a, d, h, x, D) {
          var R = i[a],
            M = l[a],
            j = D.get(M);
          if (j) {
            cp(i, a, j);
            return;
          }
          var U = x ? x(R, M, a + "", i, l, D) : n,
            K = U === n;
          if (K) {
            var te = Pe(M),
              pe = !te && Gi(M),
              ye = !te && !pe && Pl(M);
            (U = M),
              te || pe || ye
                ? Pe(R)
                  ? (U = R)
                  : Pt(R)
                  ? (U = In(R))
                  : pe
                  ? ((K = !1), (U = tm(M, !0)))
                  : ye
                  ? ((K = !1), (U = nm(M, !0)))
                  : (U = [])
                : ic(M) || Mo(M)
                ? ((U = R),
                  Mo(R) ? (U = Ym(R)) : (!mt(R) || (d && mi(R))) && (U = mm(M)))
                : (K = !1);
          }
          K && (D.set(M, U), h(U, M, d, x, D), D.delete(M)), cp(i, a, U);
        }
        function Wv(i, l) {
          var a = i.length;
          if (a) return (l += l < 0 ? a : 0), vi(l, a) ? i[l] : n;
        }
        function Vv(i, l, a) {
          var d = -1;
          l = Et(l.length ? l : [On], Hn(me()));
          var h = Bv(i, function (x, D, R) {
            var M = Et(l, function (j) {
              return j(x);
            });
            return { criteria: M, index: ++d, value: x };
          });
          return $T(h, function (x, D) {
            return kC(x, D, a);
          });
        }
        function gC(i, l) {
          return (
            (i = lt(i)),
            Gv(i, l, function (a, d) {
              return jp(i, d);
            })
          );
        }
        function Gv(i, l, a) {
          for (var d = -1, h = l.length, x = {}; ++d < h; ) {
            var D = l[d],
              R = El(i, D);
            a(R, D) && Wu(x, D, R);
          }
          return x;
        }
        function _C(i) {
          return function (l) {
            return El(l, i);
          };
        }
        function yp(i, l, a, d) {
          var h = d ? zT : wl,
            x = -1,
            D = l.length,
            R = i;
          for (i === l && (l = In(l)), a && (R = Et(i, Hn(a))); ++x < D; )
            for (
              var M = 0, j = l[x], U = a ? a(j) : j;
              (M = h(R, U, M, d)) > -1;

            )
              R !== i && Pa.call(R, M, 1), Pa.call(i, M, 1);
          return i;
        }
        function Kv(i, l) {
          for (var a = i ? l.length : 0, d = a - 1; a--; ) {
            var h = l[a];
            if (a == d || h !== x) {
              var x = h;
              if (vi(h)) Pa.call(i, h, 1);
              else if (Qr(h, i)) delete i[Un(h)];
              else {
                var D = No(h),
                  R = Lp(i, D);
                R != null && delete R[Un(jn(D))];
              }
            }
          }
          return i;
        }
        function wp(i, l) {
          return i + La(Ev() * (l - i + 1));
        }
        function vC(i, l, a, d) {
          for (var h = -1, x = Bt(Na((l - i) / (a || 1)), 0), D = $(x); x--; )
            (D[d ? x : ++h] = i), (i += a);
          return D;
        }
        function Sp(i, l) {
          var a = "";
          if (!i || l < 1 || l > Ue) return a;
          do l % 2 && (a += i), (l = La(l / 2)), l && (i += i);
          while (l);
          return a;
        }
        function Ne(i, l) {
          return Ap(xm(i, l, On), i + "");
        }
        function mC(i) {
          return kv(Rl(i));
        }
        function yC(i, l) {
          var a = Rl(i);
          return Xa(a, Ro(l, 0, a.length));
        }
        function Wu(i, l, a, d) {
          if (!mt(i)) return i;
          l = Qr(l, i) ? [l] : No(l);
          for (
            var h = -1, x = l.length, D = x - 1, R = i;
            R != null && ++h < x;

          ) {
            var M = Un(l[h]),
              j = a;
            if (h != D) {
              var U = R[M];
              (j = d ? d(U, M, R) : n),
                j === n && (j = mt(U) ? U : vi(l[h + 1]) ? [] : {});
            }
            Hu(R, M, j), (R = R[M]);
          }
          return i;
        }
        var Yv = Aa
            ? function (i, l) {
                return Aa.set(i, l), i;
              }
            : On,
          wC = Ra
            ? function (i, l) {
                return Ra(i, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: Vp(l),
                  writable: !0,
                });
              }
            : On;
        function SC(i) {
          return Xa(Rl(i));
        }
        function pr(i, l, a) {
          var d = -1,
            h = i.length;
          l < 0 && (l = -l > h ? 0 : h + l),
            (a = a > h ? h : a),
            a < 0 && (a += h),
            (h = l > a ? 0 : (a - l) >>> 0),
            (l >>>= 0);
          for (var x = $(h); ++d < h; ) x[d] = i[d + l];
          return x;
        }
        function xC(i, l) {
          var a;
          return (
            Wi(i, function (d, h, x) {
              return (a = l(d, h, x)), !a;
            }),
            !!a
          );
        }
        function Ua(i, l, a) {
          var d = 0,
            h = i == null ? d : i.length;
          if (typeof l == "number" && l === l && h <= Ve) {
            for (; d < h; ) {
              var x = (d + h) >>> 1,
                D = i[x];
              D !== null && !Wn(D) && (a ? D <= l : D < l)
                ? (d = x + 1)
                : (h = x);
            }
            return h;
          }
          return xp(i, l, On, a);
        }
        function xp(i, l, a, d) {
          l = a(l);
          for (
            var h = 0,
              x = i == null ? 0 : i.length,
              D = l !== l,
              R = l === null,
              M = Wn(l),
              j = l === n;
            h < x;

          ) {
            var U = La((h + x) / 2),
              K = a(i[U]),
              te = K !== n,
              pe = K === null,
              ye = K === K,
              Me = Wn(K);
            if (D) var Se = d || ye;
            else
              j
                ? (Se = ye && (d || te))
                : R
                ? (Se = ye && te && (d || !pe))
                : M
                ? (Se = ye && te && !pe && (d || !Me))
                : pe || Me
                ? (Se = !1)
                : (Se = d ? K <= l : K < l);
            Se ? (h = U + 1) : (x = U);
          }
          return nn(x, Ae);
        }
        function Qv(i, l) {
          for (var a = -1, d = i.length, h = 0, x = []; ++a < d; ) {
            var D = i[a],
              R = l ? l(D) : D;
            if (!a || !qr(R, M)) {
              var M = R;
              x[h++] = D === 0 ? 0 : D;
            }
          }
          return x;
        }
        function qv(i) {
          return typeof i == "number" ? i : Wn(i) ? de : +i;
        }
        function Bn(i) {
          if (typeof i == "string") return i;
          if (Pe(i)) return Et(i, Bn) + "";
          if (Wn(i)) return Dv ? Dv.call(i) : "";
          var l = i + "";
          return l == "0" && 1 / i == -Ie ? "-0" : l;
        }
        function Vi(i, l, a) {
          var d = -1,
            h = Ta,
            x = i.length,
            D = !0,
            R = [],
            M = R;
          if (a) (D = !1), (h = Xd);
          else if (x >= o) {
            var j = l ? null : MC(i);
            if (j) return xl(j);
            (D = !1), (h = Pu), (M = new Po());
          } else M = l ? [] : R;
          e: for (; ++d < x; ) {
            var U = i[d],
              K = l ? l(U) : U;
            if (((U = a || U !== 0 ? U : 0), D && K === K)) {
              for (var te = M.length; te--; ) if (M[te] === K) continue e;
              l && M.push(K), R.push(U);
            } else h(M, K, a) || (M !== R && M.push(K), R.push(U));
          }
          return R;
        }
        function Xv(i, l) {
          (l = Qr(l, i) ? [l] : No(l)), (i = Lp(i, l));
          var a = Un(jn(l));
          return !(i != null && at.call(i, a)) || delete i[a];
        }
        function Zv(i, l, a, d) {
          return Wu(i, l, a(El(i, l)), d);
        }
        function ja(i, l, a, d) {
          for (
            var h = i.length, x = d ? h : -1;
            (d ? x-- : ++x < h) && l(i[x], x, i);

          );
          return a
            ? pr(i, d ? 0 : x, d ? x + 1 : h)
            : pr(i, d ? x + 1 : 0, d ? h : x);
        }
        function Jv(i, l) {
          var a = i;
          return (
            a instanceof $e && (a = a.value()),
            ku(
              l,
              function (d, h) {
                return h.func.apply(h.thisArg, ci([d], h.args));
              },
              a
            )
          );
        }
        function Tp(i, l, a) {
          var d = i.length;
          if (d < 2) return d ? Vi(i[0]) : [];
          for (var h = -1, x = $(d); ++h < d; )
            for (var D = i[h], R = -1; ++R < d; )
              R != h && (x[h] = Bu(x[h] || D, i[R], l, a));
          return Vi(Xt(x, 1), l, a);
        }
        function em(i, l, a) {
          for (var d = -1, h = i.length, x = l.length, D = {}; ++d < h; ) {
            var R = d < x ? l[d] : n;
            a(D, i[d], R);
          }
          return D;
        }
        function bp(i) {
          return Pt(i) ? i : [];
        }
        function Cp(i) {
          return typeof i == "function" ? i : On;
        }
        function No(i) {
          return Pe(i) ? i : Im(i);
        }
        var TC = Ne;
        function hi(i, l, a) {
          var d = i.length;
          return (a = a === n ? d : a), !l && a >= d ? i : pr(i, l, a);
        }
        var bC =
          ab ||
          function (i) {
            return Be.clearTimeout(i);
          };
        function tm(i, l) {
          if (l) return i.slice();
          var a = i.length,
            d = bv ? bv(a) : new i.constructor(a);
          return i.copy(d), d;
        }
        function Ip(i) {
          var l = new i.constructor(i.byteLength);
          return new Oa(l).set(new Oa(i)), l;
        }
        function CC(i, l) {
          var a = l ? Ip(i.buffer) : i.buffer;
          return new i.constructor(a, i.byteOffset, i.byteLength);
        }
        function IC(i, l, a) {
          var d = l ? a(Ru(i), _) : Ru(i);
          return ku(d, yl, new i.constructor());
        }
        function EC(i) {
          var l = new i.constructor(i.source, sr.exec(i));
          return (l.lastIndex = i.lastIndex), l;
        }
        function DC(i, l, a) {
          var d = l ? a(xl(i), _) : xl(i);
          return ku(d, PT, new i.constructor());
        }
        function OC(i) {
          return $u ? lt($u.call(i)) : {};
        }
        function nm(i, l) {
          var a = l ? Ip(i.buffer) : i.buffer;
          return new i.constructor(a, i.byteOffset, i.length);
        }
        function rm(i, l) {
          if (i !== l) {
            var a = i !== n,
              d = i === null,
              h = i === i,
              x = Wn(i),
              D = l !== n,
              R = l === null,
              M = l === l,
              j = Wn(l);
            if (
              (!R && !j && !x && i > l) ||
              (x && D && M && !R && !j) ||
              (d && D && M) ||
              (!a && M) ||
              !h
            )
              return 1;
            if (
              (!d && !x && !j && i < l) ||
              (j && a && h && !d && !x) ||
              (R && a && h) ||
              (!D && h) ||
              !M
            )
              return -1;
          }
          return 0;
        }
        function kC(i, l, a) {
          for (
            var d = -1,
              h = i.criteria,
              x = l.criteria,
              D = h.length,
              R = a.length;
            ++d < D;

          ) {
            var M = rm(h[d], x[d]);
            if (M) {
              if (d >= R) return M;
              var j = a[d];
              return M * (j == "desc" ? -1 : 1);
            }
          }
          return i.index - l.index;
        }
        function im(i, l, a, d) {
          for (
            var h = -1,
              x = i.length,
              D = a.length,
              R = -1,
              M = l.length,
              j = Bt(x - D, 0),
              U = $(M + j),
              K = !d;
            ++R < M;

          )
            U[R] = l[R];
          for (; ++h < D; ) (K || h < x) && (U[a[h]] = i[h]);
          for (; j--; ) U[R++] = i[h++];
          return U;
        }
        function om(i, l, a, d) {
          for (
            var h = -1,
              x = i.length,
              D = -1,
              R = a.length,
              M = -1,
              j = l.length,
              U = Bt(x - R, 0),
              K = $(U + j),
              te = !d;
            ++h < U;

          )
            K[h] = i[h];
          for (var pe = h; ++M < j; ) K[pe + M] = l[M];
          for (; ++D < R; ) (te || h < x) && (K[pe + a[D]] = i[h++]);
          return K;
        }
        function In(i, l) {
          var a = -1,
            d = i.length;
          for (l || (l = $(d)); ++a < d; ) l[a] = i[a];
          return l;
        }
        function Yr(i, l, a, d) {
          var h = !a;
          a || (a = {});
          for (var x = -1, D = l.length; ++x < D; ) {
            var R = l[x],
              M = d ? d(a[R], i[R], R, a, i) : n;
            M === n && (M = i[R]), h ? pi(a, R, M) : Hu(a, R, M);
          }
          return a;
        }
        function PC(i, l) {
          return Yr(i, Rp(i), l);
        }
        function RC(i, l) {
          return Yr(i, _m(i), l);
        }
        function Wa(i, l) {
          return function (a, d) {
            var h = Pe(a) ? RT : Xb,
              x = l ? l() : {};
            return h(a, i, me(d, 2), x);
          };
        }
        function Dl(i) {
          return Ne(function (l, a) {
            var d = -1,
              h = a.length,
              x = h > 1 ? a[h - 1] : n,
              D = h > 2 ? a[2] : n;
            for (
              x = i.length > 3 && typeof x == "function" ? (h--, x) : n,
                D && En(a[0], a[1], D) && ((x = h < 3 ? n : x), (h = 1)),
                l = lt(l);
              ++d < h;

            ) {
              var R = a[d];
              R && i(l, R, d, x);
            }
            return l;
          });
        }
        function lm(i, l) {
          return function (a, d) {
            if (a == null) return a;
            if (!Dn(a)) return i(a, d);
            for (
              var h = a.length, x = l ? h : -1, D = lt(a);
              (l ? x-- : ++x < h) && d(D[x], x, D) !== !1;

            );
            return a;
          };
        }
        function um(i) {
          return function (l, a, d) {
            for (var h = -1, x = lt(l), D = d(l), R = D.length; R--; ) {
              var M = D[i ? R : ++h];
              if (a(x[M], M, x) === !1) break;
            }
            return l;
          };
        }
        function NC(i, l, a) {
          var d = l & b,
            h = Vu(i);
          function x() {
            var D = this && this !== Be && this instanceof x ? h : i;
            return D.apply(d ? a : this, arguments);
          }
          return x;
        }
        function sm(i) {
          return function (l) {
            l = qe(l);
            var a = Sl(l) ? Or(l) : n,
              d = a ? a[0] : l.charAt(0),
              h = a ? hi(a, 1).join("") : l.slice(1);
            return d[i]() + h;
          };
        }
        function Ol(i) {
          return function (l) {
            return ku(n0(t0(l).replace(Du, "")), i, "");
          };
        }
        function Vu(i) {
          return function () {
            var l = arguments;
            switch (l.length) {
              case 0:
                return new i();
              case 1:
                return new i(l[0]);
              case 2:
                return new i(l[0], l[1]);
              case 3:
                return new i(l[0], l[1], l[2]);
              case 4:
                return new i(l[0], l[1], l[2], l[3]);
              case 5:
                return new i(l[0], l[1], l[2], l[3], l[4]);
              case 6:
                return new i(l[0], l[1], l[2], l[3], l[4], l[5]);
              case 7:
                return new i(l[0], l[1], l[2], l[3], l[4], l[5], l[6]);
            }
            var a = Il(i.prototype),
              d = i.apply(a, l);
            return mt(d) ? d : a;
          };
        }
        function LC(i, l, a) {
          var d = Vu(i);
          function h() {
            for (var x = arguments.length, D = $(x), R = x, M = kl(h); R--; )
              D[R] = arguments[R];
            var j = x < 3 && D[0] !== M && D[x - 1] !== M ? [] : Ui(D, M);
            if (((x -= j.length), x < a))
              return pm(i, l, Va, h.placeholder, n, D, j, n, n, a - x);
            var U = this && this !== Be && this instanceof h ? d : i;
            return Cn(U, this, D);
          }
          return h;
        }
        function am(i) {
          return function (l, a, d) {
            var h = lt(l);
            if (!Dn(l)) {
              var x = me(a, 3);
              (l = Ft(l)),
                (a = function (R) {
                  return x(h[R], R, h);
                });
            }
            var D = i(l, a, d);
            return D > -1 ? h[x ? l[D] : D] : n;
          };
        }
        function cm(i) {
          return _i(function (l) {
            var a = l.length,
              d = a,
              h = dr.prototype.thru;
            for (i && l.reverse(); d--; ) {
              var x = l[d];
              if (typeof x != "function") throw new fr(s);
              if (h && !D && Qa(x) == "wrapper") var D = new dr([], !0);
            }
            for (d = D ? d : a; ++d < a; ) {
              x = l[d];
              var R = Qa(x),
                M = R == "wrapper" ? kp(x) : n;
              M &&
              Np(M[0]) &&
              M[1] == (C | g | k | N) &&
              !M[4].length &&
              M[9] == 1
                ? (D = D[Qa(M[0])].apply(D, M[3]))
                : (D = x.length == 1 && Np(x) ? D[R]() : D.thru(x));
            }
            return function () {
              var j = arguments,
                U = j[0];
              if (D && j.length == 1 && Pe(U) && U.length >= o)
                return D.plant(U).value();
              for (var K = 0, te = a ? l[K].apply(this, j) : U; ++K < a; )
                te = l[K].call(this, te);
              return te;
            };
          });
        }
        function Va(i, l, a, d, h, x, D, R, M, j) {
          var U = l & C,
            K = l & b,
            te = l & F,
            pe = l & (g | m),
            ye = l & z,
            Me = te ? n : Vu(i);
          function Se() {
            for (var je = arguments.length, Qe = $(je), hn = je; hn--; )
              Qe[hn] = arguments[hn];
            if (pe)
              var gn = kl(Se),
                Ki = BT(Qe, gn);
            if (
              (d && (Qe = im(Qe, d, h, pe)),
              x && (Qe = om(Qe, x, D, pe)),
              (je -= Ki),
              pe && je < j)
            ) {
              var Nt = Ui(Qe, gn);
              return pm(i, l, Va, Se.placeholder, a, Qe, Nt, R, M, j - je);
            }
            var Rr = K ? a : this,
              wi = te ? Rr[i] : i;
            return (
              (je = Qe.length),
              R ? (Qe = eI(Qe, R)) : ye && je > 1 && Qe.reverse(),
              U && M < je && (Qe.length = M),
              this && this !== Be && this instanceof Se && (wi = Me || Vu(wi)),
              wi.apply(Rr, Qe)
            );
          }
          return Se;
        }
        function fm(i, l) {
          return function (a, d) {
            return oC(a, i, l(d), {});
          };
        }
        function Ga(i, l) {
          return function (a, d) {
            var h;
            if (a === n && d === n) return l;
            if ((a !== n && (h = a), d !== n)) {
              if (h === n) return d;
              typeof a == "string" || typeof d == "string"
                ? ((a = Bn(a)), (d = Bn(d)))
                : ((a = qv(a)), (d = qv(d))),
                (h = i(a, d));
            }
            return h;
          };
        }
        function Ep(i) {
          return _i(function (l) {
            return (
              (l = Et(l, Hn(me()))),
              Ne(function (a) {
                var d = this;
                return i(l, function (h) {
                  return Cn(h, d, a);
                });
              })
            );
          });
        }
        function Ka(i, l) {
          l = l === n ? " " : Bn(l);
          var a = l.length;
          if (a < 2) return a ? Sp(l, i) : l;
          var d = Sp(l, Na(i / Tl(l)));
          return Sl(l) ? hi(Or(d), 0, i).join("") : d.slice(0, i);
        }
        function AC(i, l, a, d) {
          var h = l & b,
            x = Vu(i);
          function D() {
            for (
              var R = -1,
                M = arguments.length,
                j = -1,
                U = d.length,
                K = $(U + M),
                te = this && this !== Be && this instanceof D ? x : i;
              ++j < U;

            )
              K[j] = d[j];
            for (; M--; ) K[j++] = arguments[++R];
            return Cn(te, h ? a : this, K);
          }
          return D;
        }
        function dm(i) {
          return function (l, a, d) {
            return (
              d && typeof d != "number" && En(l, a, d) && (a = d = n),
              (l = yi(l)),
              a === n ? ((a = l), (l = 0)) : (a = yi(a)),
              (d = d === n ? (l < a ? 1 : -1) : yi(d)),
              vC(l, a, d, i)
            );
          };
        }
        function Ya(i) {
          return function (l, a) {
            return (
              (typeof l == "string" && typeof a == "string") ||
                ((l = hr(l)), (a = hr(a))),
              i(l, a)
            );
          };
        }
        function pm(i, l, a, d, h, x, D, R, M, j) {
          var U = l & g,
            K = U ? D : n,
            te = U ? n : D,
            pe = U ? x : n,
            ye = U ? n : x;
          (l |= U ? k : O), (l &= ~(U ? O : k)), l & y || (l &= ~(b | F));
          var Me = [i, l, h, pe, K, ye, te, R, M, j],
            Se = a.apply(n, Me);
          return Np(i) && Tm(Se, Me), (Se.placeholder = d), bm(Se, i, l);
        }
        function Dp(i) {
          var l = Ht[i];
          return function (a, d) {
            if (((a = hr(a)), (d = nn(Re(d), 292)), d)) {
              var h = (qe(a) + "e").split("e"),
                x = l(h[0] + "e" + (+h[1] + d));
              return (
                (h = (qe(x) + "e").split("e")), +(h[0] + "e" + (+h[1] - d))
              );
            }
            return l(a);
          };
        }
        var MC =
          Cl && 1 / xl(new Cl([, -0]))[1] == Ie
            ? function (i) {
                return new Cl(i);
              }
            : Yp;
        function hm(i) {
          return function (l) {
            var a = rn(l);
            return a == kt ? Ru(l) : a == tn ? YT(l) : HT(l, i(l));
          };
        }
        function gi(i, l, a, d, h, x, D, R) {
          var M = l & F;
          if (!M && typeof i != "function") throw new fr(s);
          var j = d ? d.length : 0;
          if (
            (j || ((l &= ~(k | O)), (d = h = n)),
            (D = D === n ? D : Bt(Re(D), 0)),
            (R = R === n ? R : Re(R)),
            (j -= h ? h.length : 0),
            l & O)
          ) {
            var U = d,
              K = h;
            d = h = n;
          }
          var te = M ? n : kp(i),
            pe = [i, l, a, d, h, U, K, x, D, R];
          if (
            (te && XC(pe, te),
            (i = pe[0]),
            (l = pe[1]),
            (a = pe[2]),
            (d = pe[3]),
            (h = pe[4]),
            (R = pe[9] = pe[9] == null ? (M ? 0 : i.length) : Bt(pe[9] - j, 0)),
            !R && l & (g | m) && (l &= ~(g | m)),
            !l || l == b)
          )
            var ye = NC(i, l, a);
          else
            l == g || l == m
              ? (ye = LC(i, l, R))
              : (l == k || l == (b | k)) && !h.length
              ? (ye = AC(i, l, a, d))
              : (ye = Va.apply(n, pe));
          var Me = te ? Yv : Tm;
          return bm(Me(ye, pe), i, l);
        }
        function gm(i, l, a, d, h, x) {
          var D = a & I,
            R = i.length,
            M = l.length;
          if (R != M && !(D && M > R)) return !1;
          var j = x.get(i);
          if (j && x.get(l)) return j == l;
          var U = -1,
            K = !0,
            te = a & P ? new Po() : n;
          for (x.set(i, l), x.set(l, i); ++U < R; ) {
            var pe = i[U],
              ye = l[U];
            if (d) var Me = D ? d(ye, pe, U, l, i, x) : d(pe, ye, U, i, l, x);
            if (Me !== n) {
              if (Me) continue;
              K = !1;
              break;
            }
            if (te) {
              if (
                !Zd(l, function (Se, je) {
                  if (!Pu(te, je) && (pe === Se || h(pe, Se, a, d, x)))
                    return te.push(je);
                })
              ) {
                K = !1;
                break;
              }
            } else if (!(pe === ye || h(pe, ye, a, d, x))) {
              K = !1;
              break;
            }
          }
          return x.delete(i), x.delete(l), K;
        }
        function FC(i, l, a, d, h, x, D) {
          switch (a) {
            case Tn:
              if (i.byteLength != l.byteLength || i.byteOffset != l.byteOffset)
                return !1;
              (i = i.buffer), (l = l.buffer);
            case Wr:
              return !(
                i.byteLength != l.byteLength || !x(new Oa(i), new Oa(l))
              );
            case we:
            case ke:
            case Fn:
              return qr(+i, +l);
            case _t:
              return i.name == l.name && i.message == l.message;
            case Cr:
            case ur:
              return i == l + "";
            case kt:
              var R = Ru;
            case tn:
              var M = d & I;
              if ((R || (R = xl), i.size != l.size && !M)) return !1;
              var j = D.get(i);
              if (j) return j == l;
              (d |= P), D.set(i, l);
              var U = gm(R(i), R(l), d, h, x, D);
              return D.delete(i), U;
            case zn:
              if ($u) return $u.call(i) == $u.call(l);
          }
          return !1;
        }
        function zC(i, l, a, d, h, x) {
          var D = a & I,
            R = Ft(i),
            M = R.length,
            j = Ft(l),
            U = j.length;
          if (M != U && !D) return !1;
          for (var K = M; K--; ) {
            var te = R[K];
            if (!(D ? te in l : at.call(l, te))) return !1;
          }
          var pe = x.get(i);
          if (pe && x.get(l)) return pe == l;
          var ye = !0;
          x.set(i, l), x.set(l, i);
          for (var Me = D; ++K < M; ) {
            te = R[K];
            var Se = i[te],
              je = l[te];
            if (d) var Qe = D ? d(je, Se, te, l, i, x) : d(Se, je, te, i, l, x);
            if (!(Qe === n ? Se === je || h(Se, je, a, d, x) : Qe)) {
              ye = !1;
              break;
            }
            Me || (Me = te == "constructor");
          }
          if (ye && !Me) {
            var hn = i.constructor,
              gn = l.constructor;
            hn != gn &&
              "constructor" in i &&
              "constructor" in l &&
              !(
                typeof hn == "function" &&
                hn instanceof hn &&
                typeof gn == "function" &&
                gn instanceof gn
              ) &&
              (ye = !1);
          }
          return x.delete(i), x.delete(l), ye;
        }
        function _i(i) {
          return Ap(xm(i, n, km), i + "");
        }
        function $C(i) {
          return Fv(i, Ft, Rp);
        }
        function Op(i) {
          return Fv(i, Vn, _m);
        }
        var kp = Aa
          ? function (i) {
              return Aa.get(i);
            }
          : Yp;
        function Qa(i) {
          for (
            var l = i.name + "", a = zu[l], d = at.call(zu, l) ? a.length : 0;
            d--;

          ) {
            var h = a[d],
              x = h.func;
            if (x == null || x == i) return h.name;
          }
          return l;
        }
        function kl(i) {
          var l = at.call(v, "placeholder") ? v : i;
          return l.placeholder;
        }
        function me() {
          var i = v.iteratee || Gp;
          return (
            (i = i === Gp ? Hv : i),
            arguments.length ? i(arguments[0], arguments[1]) : i
          );
        }
        function qa(i, l) {
          var a = i.__data__;
          return KC(l) ? a[typeof l == "string" ? "string" : "hash"] : a.map;
        }
        function Pp(i) {
          for (var l = Ft(i), a = l.length; a--; ) {
            var d = l[a],
              h = i[d];
            l[a] = [d, h, ym(h)];
          }
          return l;
        }
        function Lo(i, l) {
          var a = VT(i, l);
          return $v(a) ? a : n;
        }
        function HC(i) {
          var l = at.call(i, Oo),
            a = i[Oo];
          try {
            i[Oo] = n;
            var d = !0;
          } catch {}
          var h = Tv.call(i);
          return d && (l ? (i[Oo] = a) : delete i[Oo]), h;
        }
        var Rp = lp ? ip(lp, lt) : Qp,
          _m = lp
            ? function (i) {
                for (var l = []; i; ) ci(l, Rp(i)), (i = ka(i));
                return l;
              }
            : Qp,
          rn = pn;
        ((up && rn(new up(new ArrayBuffer(1))) != Tn) ||
          (Au && rn(new Au()) != kt) ||
          (sp && rn(sp.resolve()) != ll) ||
          (Cl && rn(new Cl()) != tn) ||
          (Mu && rn(new Mu()) != jr)) &&
          (rn = function (i) {
            var l = pn(i),
              a = l == vt ? i.constructor : n,
              d = a ? Ao(a) : "";
            if (d)
              switch (d) {
                case yb:
                  return Tn;
                case wb:
                  return kt;
                case Sb:
                  return ll;
                case xb:
                  return tn;
                case Tb:
                  return jr;
              }
            return l;
          });
        function BC(i, l, a) {
          for (var d = -1, h = a.length; ++d < h; ) {
            var x = a[d],
              D = x.size;
            switch (x.type) {
              case "drop":
                i += D;
                break;
              case "dropRight":
                l -= D;
                break;
              case "take":
                l = nn(l, i + D);
                break;
              case "takeRight":
                i = Bt(i, l - D);
                break;
            }
          }
          return { start: i, end: l };
        }
        function UC(i) {
          var l = i.match(Dd);
          return l ? l[1].split(Od) : [];
        }
        function vm(i, l, a) {
          l = Qr(l, i) ? [l] : No(l);
          for (var d = -1, h = l.length, x = !1; ++d < h; ) {
            var D = Un(l[d]);
            if (!(x = i != null && a(i, D))) break;
            i = i[D];
          }
          return x || ++d != h
            ? x
            : ((h = i == null ? 0 : i.length),
              !!h && rc(h) && vi(D, h) && (Pe(i) || Mo(i)));
        }
        function jC(i) {
          var l = i.length,
            a = i.constructor(l);
          return (
            l &&
              typeof i[0] == "string" &&
              at.call(i, "index") &&
              ((a.index = i.index), (a.input = i.input)),
            a
          );
        }
        function mm(i) {
          return typeof i.constructor == "function" && !Gu(i) ? Il(ka(i)) : {};
        }
        function WC(i, l, a, d) {
          var h = i.constructor;
          switch (l) {
            case Wr:
              return Ip(i);
            case we:
            case ke:
              return new h(+i);
            case Tn:
              return CC(i, d);
            case Fi:
            case zi:
            case Vt:
            case $i:
            case sl:
            case mu:
            case al:
            case Hi:
            case cl:
              return nm(i, d);
            case kt:
              return IC(i, d, a);
            case Fn:
            case ur:
              return new h(i);
            case Cr:
              return EC(i);
            case tn:
              return DC(i, d, a);
            case zn:
              return OC(i);
          }
        }
        function VC(i, l) {
          var a = l.length;
          if (!a) return i;
          var d = a - 1;
          return (
            (l[d] = (a > 1 ? "& " : "") + l[d]),
            (l = l.join(a > 2 ? ", " : " ")),
            i.replace(
              ui,
              `{
/* [wrapped with ` +
                l +
                `] */
`
            )
          );
        }
        function GC(i) {
          return Pe(i) || Mo(i) || !!(Iv && i && i[Iv]);
        }
        function vi(i, l) {
          return (
            (l = l ?? Ue),
            !!l &&
              (typeof i == "number" || Fd.test(i)) &&
              i > -1 &&
              i % 1 == 0 &&
              i < l
          );
        }
        function En(i, l, a) {
          if (!mt(a)) return !1;
          var d = typeof l;
          return (
            d == "number" ? Dn(a) && vi(l, a.length) : d == "string" && l in a
          )
            ? qr(a[l], i)
            : !1;
        }
        function Qr(i, l) {
          if (Pe(i)) return !1;
          var a = typeof i;
          return a == "number" ||
            a == "symbol" ||
            a == "boolean" ||
            i == null ||
            Wn(i)
            ? !0
            : xo.test(i) || !xu.test(i) || (l != null && i in lt(l));
        }
        function KC(i) {
          var l = typeof i;
          return l == "string" ||
            l == "number" ||
            l == "symbol" ||
            l == "boolean"
            ? i !== "__proto__"
            : i === null;
        }
        function Np(i) {
          var l = Qa(i),
            a = v[l];
          if (typeof a != "function" || !(l in $e.prototype)) return !1;
          if (i === a) return !0;
          var d = kp(a);
          return !!d && i === d[0];
        }
        function YC(i) {
          return !!xv && xv in i;
        }
        var QC = Ia ? mi : qp;
        function Gu(i) {
          var l = i && i.constructor,
            a = (typeof l == "function" && l.prototype) || Nu;
          return i === a;
        }
        function ym(i) {
          return i === i && !mt(i);
        }
        function wm(i, l) {
          return function (a) {
            return a == null ? !1 : a[i] === l && (l !== n || i in lt(a));
          };
        }
        function qC(i) {
          var l = tc(i, function (d) {
              return a.size === f && a.clear(), d;
            }),
            a = l.cache;
          return l;
        }
        function XC(i, l) {
          var a = i[1],
            d = l[1],
            h = a | d,
            x = h < (b | F | C),
            D =
              (d == C && a == g) ||
              (d == C && a == N && i[7].length <= l[8]) ||
              (d == (C | N) && l[7].length <= l[8] && a == g);
          if (!(x || D)) return i;
          d & b && ((i[2] = l[2]), (h |= a & b ? 0 : y));
          var R = l[3];
          if (R) {
            var M = i[3];
            (i[3] = M ? im(M, R, l[4]) : R), (i[4] = M ? Ui(i[3], p) : l[4]);
          }
          return (
            (R = l[5]),
            R &&
              ((M = i[5]),
              (i[5] = M ? om(M, R, l[6]) : R),
              (i[6] = M ? Ui(i[5], p) : l[6])),
            (R = l[7]),
            R && (i[7] = R),
            d & C && (i[8] = i[8] == null ? l[8] : nn(i[8], l[8])),
            i[9] == null && (i[9] = l[9]),
            (i[0] = l[0]),
            (i[1] = h),
            i
          );
        }
        function Sm(i, l, a, d, h, x) {
          return (
            mt(i) && mt(l) && (x.set(l, i), Ba(i, l, n, Sm, x), x.delete(l)), i
          );
        }
        function ZC(i) {
          var l = [];
          if (i != null) for (var a in lt(i)) l.push(a);
          return l;
        }
        function JC(i) {
          return Tv.call(i);
        }
        function xm(i, l, a) {
          return (
            (l = Bt(l === n ? i.length - 1 : l, 0)),
            function () {
              for (
                var d = arguments, h = -1, x = Bt(d.length - l, 0), D = $(x);
                ++h < x;

              )
                D[h] = d[l + h];
              h = -1;
              for (var R = $(l + 1); ++h < l; ) R[h] = d[h];
              return (R[l] = a(D)), Cn(i, this, R);
            }
          );
        }
        function Lp(i, l) {
          return l.length == 1 ? i : El(i, pr(l, 0, -1));
        }
        function eI(i, l) {
          for (var a = i.length, d = nn(l.length, a), h = In(i); d--; ) {
            var x = l[d];
            i[d] = vi(x, a) ? h[x] : n;
          }
          return i;
        }
        var Tm = Cm(Yv),
          Ku =
            fb ||
            function (i, l) {
              return Be.setTimeout(i, l);
            },
          Ap = Cm(wC);
        function bm(i, l, a) {
          var d = l + "";
          return Ap(i, VC(d, tI(UC(d), a)));
        }
        function Cm(i) {
          var l = 0,
            a = 0;
          return function () {
            var d = _b(),
              h = he - (d - a);
            if (((a = d), h > 0)) {
              if (++l >= ue) return arguments[0];
            } else l = 0;
            return i.apply(n, arguments);
          };
        }
        function Xa(i, l) {
          var a = -1,
            d = i.length,
            h = d - 1;
          for (l = l === n ? d : l; ++a < l; ) {
            var x = wp(a, h),
              D = i[x];
            (i[x] = i[a]), (i[a] = D);
          }
          return (i.length = l), i;
        }
        var Im = qC(function (i) {
          i = qe(i);
          var l = [];
          return (
            Cd.test(i) && l.push(""),
            i.replace(Id, function (a, d, h, x) {
              l.push(h ? x.replace(Pd, "$1") : d || a);
            }),
            l
          );
        });
        function Un(i) {
          if (typeof i == "string" || Wn(i)) return i;
          var l = i + "";
          return l == "0" && 1 / i == -Ie ? "-0" : l;
        }
        function Ao(i) {
          if (i != null) {
            try {
              return Ea.call(i);
            } catch {}
            try {
              return i + "";
            } catch {}
          }
          return "";
        }
        function tI(i, l) {
          return (
            cr(xn, function (a) {
              var d = "_." + a[0];
              l & a[1] && !Ta(i, d) && i.push(d);
            }),
            i.sort()
          );
        }
        function Em(i) {
          if (i instanceof $e) return i.clone();
          var l = new dr(i.__wrapped__, i.__chain__);
          return (
            (l.__actions__ = In(i.__actions__)),
            (l.__index__ = i.__index__),
            (l.__values__ = i.__values__),
            l
          );
        }
        function nI(i, l, a) {
          (a ? En(i, l, a) : l === n) ? (l = 1) : (l = Bt(Re(l), 0));
          var d = i == null ? 0 : i.length;
          if (!d || l < 1) return [];
          for (var h = 0, x = 0, D = $(Na(d / l)); h < d; )
            D[x++] = pr(i, h, (h += l));
          return D;
        }
        function rI(i) {
          for (
            var l = -1, a = i == null ? 0 : i.length, d = 0, h = [];
            ++l < a;

          ) {
            var x = i[l];
            x && (h[d++] = x);
          }
          return h;
        }
        function iI() {
          var i = arguments.length;
          if (!i) return [];
          for (var l = $(i - 1), a = arguments[0], d = i; d--; )
            l[d - 1] = arguments[d];
          return ci(Pe(a) ? In(a) : [a], Xt(l, 1));
        }
        var oI = Ne(function (i, l) {
            return Pt(i) ? Bu(i, Xt(l, 1, Pt, !0)) : [];
          }),
          lI = Ne(function (i, l) {
            var a = jn(l);
            return (
              Pt(a) && (a = n), Pt(i) ? Bu(i, Xt(l, 1, Pt, !0), me(a, 2)) : []
            );
          }),
          uI = Ne(function (i, l) {
            var a = jn(l);
            return Pt(a) && (a = n), Pt(i) ? Bu(i, Xt(l, 1, Pt, !0), n, a) : [];
          });
        function sI(i, l, a) {
          var d = i == null ? 0 : i.length;
          return d
            ? ((l = a || l === n ? 1 : Re(l)), pr(i, l < 0 ? 0 : l, d))
            : [];
        }
        function aI(i, l, a) {
          var d = i == null ? 0 : i.length;
          return d
            ? ((l = a || l === n ? 1 : Re(l)),
              (l = d - l),
              pr(i, 0, l < 0 ? 0 : l))
            : [];
        }
        function cI(i, l) {
          return i && i.length ? ja(i, me(l, 3), !0, !0) : [];
        }
        function fI(i, l) {
          return i && i.length ? ja(i, me(l, 3), !0) : [];
        }
        function dI(i, l, a, d) {
          var h = i == null ? 0 : i.length;
          return h
            ? (a && typeof a != "number" && En(i, l, a) && ((a = 0), (d = h)),
              tC(i, l, a, d))
            : [];
        }
        function Dm(i, l, a) {
          var d = i == null ? 0 : i.length;
          if (!d) return -1;
          var h = a == null ? 0 : Re(a);
          return h < 0 && (h = Bt(d + h, 0)), ba(i, me(l, 3), h);
        }
        function Om(i, l, a) {
          var d = i == null ? 0 : i.length;
          if (!d) return -1;
          var h = d - 1;
          return (
            a !== n && ((h = Re(a)), (h = a < 0 ? Bt(d + h, 0) : nn(h, d - 1))),
            ba(i, me(l, 3), h, !0)
          );
        }
        function km(i) {
          var l = i == null ? 0 : i.length;
          return l ? Xt(i, 1) : [];
        }
        function pI(i) {
          var l = i == null ? 0 : i.length;
          return l ? Xt(i, Ie) : [];
        }
        function hI(i, l) {
          var a = i == null ? 0 : i.length;
          return a ? ((l = l === n ? 1 : Re(l)), Xt(i, l)) : [];
        }
        function gI(i) {
          for (var l = -1, a = i == null ? 0 : i.length, d = {}; ++l < a; ) {
            var h = i[l];
            d[h[0]] = h[1];
          }
          return d;
        }
        function Pm(i) {
          return i && i.length ? i[0] : n;
        }
        function _I(i, l, a) {
          var d = i == null ? 0 : i.length;
          if (!d) return -1;
          var h = a == null ? 0 : Re(a);
          return h < 0 && (h = Bt(d + h, 0)), wl(i, l, h);
        }
        function vI(i) {
          var l = i == null ? 0 : i.length;
          return l ? pr(i, 0, -1) : [];
        }
        var mI = Ne(function (i) {
            var l = Et(i, bp);
            return l.length && l[0] === i[0] ? gp(l) : [];
          }),
          yI = Ne(function (i) {
            var l = jn(i),
              a = Et(i, bp);
            return (
              l === jn(a) ? (l = n) : a.pop(),
              a.length && a[0] === i[0] ? gp(a, me(l, 2)) : []
            );
          }),
          wI = Ne(function (i) {
            var l = jn(i),
              a = Et(i, bp);
            return (
              (l = typeof l == "function" ? l : n),
              l && a.pop(),
              a.length && a[0] === i[0] ? gp(a, n, l) : []
            );
          });
        function SI(i, l) {
          return i == null ? "" : hb.call(i, l);
        }
        function jn(i) {
          var l = i == null ? 0 : i.length;
          return l ? i[l - 1] : n;
        }
        function xI(i, l, a) {
          var d = i == null ? 0 : i.length;
          if (!d) return -1;
          var h = d;
          return (
            a !== n && ((h = Re(a)), (h = h < 0 ? Bt(d + h, 0) : nn(h, d - 1))),
            l === l ? qT(i, l, h) : ba(i, vv, h, !0)
          );
        }
        function TI(i, l) {
          return i && i.length ? Wv(i, Re(l)) : n;
        }
        var bI = Ne(Rm);
        function Rm(i, l) {
          return i && i.length && l && l.length ? yp(i, l) : i;
        }
        function CI(i, l, a) {
          return i && i.length && l && l.length ? yp(i, l, me(a, 2)) : i;
        }
        function II(i, l, a) {
          return i && i.length && l && l.length ? yp(i, l, n, a) : i;
        }
        var EI = _i(function (i, l) {
          var a = i == null ? 0 : i.length,
            d = fp(i, l);
          return (
            Kv(
              i,
              Et(l, function (h) {
                return vi(h, a) ? +h : h;
              }).sort(rm)
            ),
            d
          );
        });
        function DI(i, l) {
          var a = [];
          if (!(i && i.length)) return a;
          var d = -1,
            h = [],
            x = i.length;
          for (l = me(l, 3); ++d < x; ) {
            var D = i[d];
            l(D, d, i) && (a.push(D), h.push(d));
          }
          return Kv(i, h), a;
        }
        function Mp(i) {
          return i == null ? i : mb.call(i);
        }
        function OI(i, l, a) {
          var d = i == null ? 0 : i.length;
          return d
            ? (a && typeof a != "number" && En(i, l, a)
                ? ((l = 0), (a = d))
                : ((l = l == null ? 0 : Re(l)), (a = a === n ? d : Re(a))),
              pr(i, l, a))
            : [];
        }
        function kI(i, l) {
          return Ua(i, l);
        }
        function PI(i, l, a) {
          return xp(i, l, me(a, 2));
        }
        function RI(i, l) {
          var a = i == null ? 0 : i.length;
          if (a) {
            var d = Ua(i, l);
            if (d < a && qr(i[d], l)) return d;
          }
          return -1;
        }
        function NI(i, l) {
          return Ua(i, l, !0);
        }
        function LI(i, l, a) {
          return xp(i, l, me(a, 2), !0);
        }
        function AI(i, l) {
          var a = i == null ? 0 : i.length;
          if (a) {
            var d = Ua(i, l, !0) - 1;
            if (qr(i[d], l)) return d;
          }
          return -1;
        }
        function MI(i) {
          return i && i.length ? Qv(i) : [];
        }
        function FI(i, l) {
          return i && i.length ? Qv(i, me(l, 2)) : [];
        }
        function zI(i) {
          var l = i == null ? 0 : i.length;
          return l ? pr(i, 1, l) : [];
        }
        function $I(i, l, a) {
          return i && i.length
            ? ((l = a || l === n ? 1 : Re(l)), pr(i, 0, l < 0 ? 0 : l))
            : [];
        }
        function HI(i, l, a) {
          var d = i == null ? 0 : i.length;
          return d
            ? ((l = a || l === n ? 1 : Re(l)),
              (l = d - l),
              pr(i, l < 0 ? 0 : l, d))
            : [];
        }
        function BI(i, l) {
          return i && i.length ? ja(i, me(l, 3), !1, !0) : [];
        }
        function UI(i, l) {
          return i && i.length ? ja(i, me(l, 3)) : [];
        }
        var jI = Ne(function (i) {
            return Vi(Xt(i, 1, Pt, !0));
          }),
          WI = Ne(function (i) {
            var l = jn(i);
            return Pt(l) && (l = n), Vi(Xt(i, 1, Pt, !0), me(l, 2));
          }),
          VI = Ne(function (i) {
            var l = jn(i);
            return (
              (l = typeof l == "function" ? l : n), Vi(Xt(i, 1, Pt, !0), n, l)
            );
          });
        function GI(i) {
          return i && i.length ? Vi(i) : [];
        }
        function KI(i, l) {
          return i && i.length ? Vi(i, me(l, 2)) : [];
        }
        function YI(i, l) {
          return (
            (l = typeof l == "function" ? l : n),
            i && i.length ? Vi(i, n, l) : []
          );
        }
        function Fp(i) {
          if (!(i && i.length)) return [];
          var l = 0;
          return (
            (i = Do(i, function (a) {
              if (Pt(a)) return (l = Bt(a.length, l)), !0;
            })),
            np(l, function (a) {
              return Et(i, Jd(a));
            })
          );
        }
        function Nm(i, l) {
          if (!(i && i.length)) return [];
          var a = Fp(i);
          return l == null
            ? a
            : Et(a, function (d) {
                return Cn(l, n, d);
              });
        }
        var QI = Ne(function (i, l) {
            return Pt(i) ? Bu(i, l) : [];
          }),
          qI = Ne(function (i) {
            return Tp(Do(i, Pt));
          }),
          XI = Ne(function (i) {
            var l = jn(i);
            return Pt(l) && (l = n), Tp(Do(i, Pt), me(l, 2));
          }),
          ZI = Ne(function (i) {
            var l = jn(i);
            return (l = typeof l == "function" ? l : n), Tp(Do(i, Pt), n, l);
          }),
          JI = Ne(Fp);
        function eE(i, l) {
          return em(i || [], l || [], Hu);
        }
        function tE(i, l) {
          return em(i || [], l || [], Wu);
        }
        var nE = Ne(function (i) {
          var l = i.length,
            a = l > 1 ? i[l - 1] : n;
          return (a = typeof a == "function" ? (i.pop(), a) : n), Nm(i, a);
        });
        function Lm(i) {
          var l = v(i);
          return (l.__chain__ = !0), l;
        }
        function rE(i, l) {
          return l(i), i;
        }
        function Za(i, l) {
          return l(i);
        }
        var iE = _i(function (i) {
          var l = i.length,
            a = l ? i[0] : 0,
            d = this.__wrapped__,
            h = function (x) {
              return fp(x, i);
            };
          return l > 1 ||
            this.__actions__.length ||
            !(d instanceof $e) ||
            !vi(a)
            ? this.thru(h)
            : ((d = d.slice(a, +a + (l ? 1 : 0))),
              d.__actions__.push({ func: Za, args: [h], thisArg: n }),
              new dr(d, this.__chain__).thru(function (x) {
                return l && !x.length && x.push(n), x;
              }));
        });
        function oE() {
          return Lm(this);
        }
        function lE() {
          return new dr(this.value(), this.__chain__);
        }
        function uE() {
          this.__values__ === n && (this.__values__ = Gm(this.value()));
          var i = this.__index__ >= this.__values__.length,
            l = i ? n : this.__values__[this.__index__++];
          return { done: i, value: l };
        }
        function sE() {
          return this;
        }
        function aE(i) {
          for (var l, a = this; a instanceof Fa; ) {
            var d = Em(a);
            (d.__index__ = 0),
              (d.__values__ = n),
              l ? (h.__wrapped__ = d) : (l = d);
            var h = d;
            a = a.__wrapped__;
          }
          return (h.__wrapped__ = i), l;
        }
        function cE() {
          var i = this.__wrapped__;
          if (i instanceof $e) {
            var l = i;
            return (
              this.__actions__.length && (l = new $e(this)),
              (l = l.reverse()),
              l.__actions__.push({ func: Za, args: [Mp], thisArg: n }),
              new dr(l, this.__chain__)
            );
          }
          return this.thru(Mp);
        }
        function fE() {
          return Jv(this.__wrapped__, this.__actions__);
        }
        var dE = Wa(function (i, l, a) {
          at.call(i, a) ? ++i[a] : pi(i, a, 1);
        });
        function pE(i, l, a) {
          var d = Pe(i) ? gv : eC;
          return a && En(i, l, a) && (l = n), d(i, me(l, 3));
        }
        function hE(i, l) {
          var a = Pe(i) ? Do : Av;
          return a(i, me(l, 3));
        }
        var gE = am(Dm),
          _E = am(Om);
        function vE(i, l) {
          return Xt(Ja(i, l), 1);
        }
        function mE(i, l) {
          return Xt(Ja(i, l), Ie);
        }
        function yE(i, l, a) {
          return (a = a === n ? 1 : Re(a)), Xt(Ja(i, l), a);
        }
        function Am(i, l) {
          var a = Pe(i) ? cr : Wi;
          return a(i, me(l, 3));
        }
        function Mm(i, l) {
          var a = Pe(i) ? NT : Lv;
          return a(i, me(l, 3));
        }
        var wE = Wa(function (i, l, a) {
          at.call(i, a) ? i[a].push(l) : pi(i, a, [l]);
        });
        function SE(i, l, a, d) {
          (i = Dn(i) ? i : Rl(i)), (a = a && !d ? Re(a) : 0);
          var h = i.length;
          return (
            a < 0 && (a = Bt(h + a, 0)),
            oc(i) ? a <= h && i.indexOf(l, a) > -1 : !!h && wl(i, l, a) > -1
          );
        }
        var xE = Ne(function (i, l, a) {
            var d = -1,
              h = typeof l == "function",
              x = Qr(l),
              D = Dn(i) ? $(i.length) : [];
            return (
              Wi(i, function (R) {
                var M = h ? l : x && R != null ? R[l] : n;
                D[++d] = M ? Cn(M, R, a) : Uu(R, l, a);
              }),
              D
            );
          }),
          TE = Wa(function (i, l, a) {
            pi(i, a, l);
          });
        function Ja(i, l) {
          var a = Pe(i) ? Et : Bv;
          return a(i, me(l, 3));
        }
        function bE(i, l, a, d) {
          return i == null
            ? []
            : (Pe(l) || (l = l == null ? [] : [l]),
              (a = d ? n : a),
              Pe(a) || (a = a == null ? [] : [a]),
              Vv(i, l, a));
        }
        var CE = Wa(
          function (i, l, a) {
            i[a ? 0 : 1].push(l);
          },
          function () {
            return [[], []];
          }
        );
        function IE(i, l, a) {
          var d = Pe(i) ? ku : yv,
            h = arguments.length < 3;
          return d(i, me(l, 4), a, h, Wi);
        }
        function EE(i, l, a) {
          var d = Pe(i) ? LT : yv,
            h = arguments.length < 3;
          return d(i, me(l, 4), a, h, Lv);
        }
        function DE(i, l) {
          var a = Pe(i) ? Do : Av;
          return a(i, nc(me(l, 3)));
        }
        function OE(i) {
          var l = Pe(i) ? kv : mC;
          return l(i);
        }
        function kE(i, l, a) {
          (a ? En(i, l, a) : l === n) ? (l = 1) : (l = Re(l));
          var d = Pe(i) ? Qb : yC;
          return d(i, l);
        }
        function PE(i) {
          var l = Pe(i) ? qb : SC;
          return l(i);
        }
        function RE(i) {
          if (i == null) return 0;
          if (Dn(i)) return oc(i) ? Tl(i) : i.length;
          var l = rn(i);
          return l == kt || l == tn ? i.size : vp(i).length;
        }
        function NE(i, l, a) {
          var d = Pe(i) ? Zd : xC;
          return a && En(i, l, a) && (l = n), d(i, me(l, 3));
        }
        var LE = Ne(function (i, l) {
            if (i == null) return [];
            var a = l.length;
            return (
              a > 1 && En(i, l[0], l[1])
                ? (l = [])
                : a > 2 && En(l[0], l[1], l[2]) && (l = [l[0]]),
              Vv(i, Xt(l, 1), [])
            );
          }),
          ec =
            cb ||
            function () {
              return Be.Date.now();
            };
        function AE(i, l) {
          if (typeof l != "function") throw new fr(s);
          return (
            (i = Re(i)),
            function () {
              if (--i < 1) return l.apply(this, arguments);
            }
          );
        }
        function Fm(i, l, a) {
          return (
            (l = a ? n : l),
            (l = i && l == null ? i.length : l),
            gi(i, C, n, n, n, n, l)
          );
        }
        function zm(i, l) {
          var a;
          if (typeof l != "function") throw new fr(s);
          return (
            (i = Re(i)),
            function () {
              return (
                --i > 0 && (a = l.apply(this, arguments)), i <= 1 && (l = n), a
              );
            }
          );
        }
        var zp = Ne(function (i, l, a) {
            var d = b;
            if (a.length) {
              var h = Ui(a, kl(zp));
              d |= k;
            }
            return gi(i, d, l, a, h);
          }),
          $m = Ne(function (i, l, a) {
            var d = b | F;
            if (a.length) {
              var h = Ui(a, kl($m));
              d |= k;
            }
            return gi(l, d, i, a, h);
          });
        function Hm(i, l, a) {
          l = a ? n : l;
          var d = gi(i, g, n, n, n, n, n, l);
          return (d.placeholder = Hm.placeholder), d;
        }
        function Bm(i, l, a) {
          l = a ? n : l;
          var d = gi(i, m, n, n, n, n, n, l);
          return (d.placeholder = Bm.placeholder), d;
        }
        function Um(i, l, a) {
          var d,
            h,
            x,
            D,
            R,
            M,
            j = 0,
            U = !1,
            K = !1,
            te = !0;
          if (typeof i != "function") throw new fr(s);
          (l = hr(l) || 0),
            mt(a) &&
              ((U = !!a.leading),
              (K = "maxWait" in a),
              (x = K ? Bt(hr(a.maxWait) || 0, l) : x),
              (te = "trailing" in a ? !!a.trailing : te));
          function pe(Nt) {
            var Rr = d,
              wi = h;
            return (d = h = n), (j = Nt), (D = i.apply(wi, Rr)), D;
          }
          function ye(Nt) {
            return (j = Nt), (R = Ku(je, l)), U ? pe(Nt) : D;
          }
          function Me(Nt) {
            var Rr = Nt - M,
              wi = Nt - j,
              o0 = l - Rr;
            return K ? nn(o0, x - wi) : o0;
          }
          function Se(Nt) {
            var Rr = Nt - M,
              wi = Nt - j;
            return M === n || Rr >= l || Rr < 0 || (K && wi >= x);
          }
          function je() {
            var Nt = ec();
            if (Se(Nt)) return Qe(Nt);
            R = Ku(je, Me(Nt));
          }
          function Qe(Nt) {
            return (R = n), te && d ? pe(Nt) : ((d = h = n), D);
          }
          function hn() {
            R !== n && bC(R), (j = 0), (d = M = h = R = n);
          }
          function gn() {
            return R === n ? D : Qe(ec());
          }
          function Ki() {
            var Nt = ec(),
              Rr = Se(Nt);
            if (((d = arguments), (h = this), (M = Nt), Rr)) {
              if (R === n) return ye(M);
              if (K) return (R = Ku(je, l)), pe(M);
            }
            return R === n && (R = Ku(je, l)), D;
          }
          return (Ki.cancel = hn), (Ki.flush = gn), Ki;
        }
        var ME = Ne(function (i, l) {
            return Nv(i, 1, l);
          }),
          FE = Ne(function (i, l, a) {
            return Nv(i, hr(l) || 0, a);
          });
        function zE(i) {
          return gi(i, z);
        }
        function tc(i, l) {
          if (typeof i != "function" || (l != null && typeof l != "function"))
            throw new fr(s);
          var a = function () {
            var d = arguments,
              h = l ? l.apply(this, d) : d[0],
              x = a.cache;
            if (x.has(h)) return x.get(h);
            var D = i.apply(this, d);
            return (a.cache = x.set(h, D) || x), D;
          };
          return (a.cache = new (tc.Cache || di)()), a;
        }
        tc.Cache = di;
        function nc(i) {
          if (typeof i != "function") throw new fr(s);
          return function () {
            var l = arguments;
            switch (l.length) {
              case 0:
                return !i.call(this);
              case 1:
                return !i.call(this, l[0]);
              case 2:
                return !i.call(this, l[0], l[1]);
              case 3:
                return !i.call(this, l[0], l[1], l[2]);
            }
            return !i.apply(this, l);
          };
        }
        function $E(i) {
          return zm(2, i);
        }
        var HE = TC(function (i, l) {
            l =
              l.length == 1 && Pe(l[0])
                ? Et(l[0], Hn(me()))
                : Et(Xt(l, 1), Hn(me()));
            var a = l.length;
            return Ne(function (d) {
              for (var h = -1, x = nn(d.length, a); ++h < x; )
                d[h] = l[h].call(this, d[h]);
              return Cn(i, this, d);
            });
          }),
          $p = Ne(function (i, l) {
            var a = Ui(l, kl($p));
            return gi(i, k, n, l, a);
          }),
          jm = Ne(function (i, l) {
            var a = Ui(l, kl(jm));
            return gi(i, O, n, l, a);
          }),
          BE = _i(function (i, l) {
            return gi(i, N, n, n, n, l);
          });
        function UE(i, l) {
          if (typeof i != "function") throw new fr(s);
          return (l = l === n ? l : Re(l)), Ne(i, l);
        }
        function jE(i, l) {
          if (typeof i != "function") throw new fr(s);
          return (
            (l = l === n ? 0 : Bt(Re(l), 0)),
            Ne(function (a) {
              var d = a[l],
                h = a.length - 1,
                x = hi(a, 0, l);
              return (
                d && ci(x, d), l != h && ci(x, hi(a, l + 1)), Cn(i, this, x)
              );
            })
          );
        }
        function WE(i, l, a) {
          var d = !0,
            h = !0;
          if (typeof i != "function") throw new fr(s);
          return (
            mt(a) &&
              ((d = "leading" in a ? !!a.leading : d),
              (h = "trailing" in a ? !!a.trailing : h)),
            Um(i, l, { leading: d, maxWait: l, trailing: h })
          );
        }
        function VE(i) {
          return Fm(i, 1);
        }
        function GE(i, l) {
          return $p(Cp(l), i);
        }
        function KE() {
          if (!arguments.length) return [];
          var i = arguments[0];
          return Pe(i) ? i : [i];
        }
        function YE(i) {
          return Pr(i, S);
        }
        function QE(i, l) {
          return (l = typeof l == "function" ? l : n), Pr(i, S, l);
        }
        function qE(i) {
          return Pr(i, _ | S);
        }
        function XE(i, l) {
          return (l = typeof l == "function" ? l : n), Pr(i, _ | S, l);
        }
        function ZE(i, l) {
          return l == null || Rv(i, l, Ft(l));
        }
        function qr(i, l) {
          return i === l || (i !== i && l !== l);
        }
        var JE = Ya(hp),
          eD = Ya(function (i, l) {
            return i >= l;
          }),
          Mo = zv(
            (function () {
              return arguments;
            })()
          )
            ? zv
            : function (i) {
                return Rt(i) && at.call(i, "callee") && !sb.call(i, "callee");
              },
          Pe = $.isArray,
          tD = dn ? Hn(dn) : lC;
        function Dn(i) {
          return i != null && rc(i.length) && !mi(i);
        }
        function Pt(i) {
          return Rt(i) && Dn(i);
        }
        function nD(i) {
          return i === !0 || i === !1 || (Rt(i) && pn(i) == we);
        }
        var Gi = db || qp,
          rD = Dr ? Hn(Dr) : uC;
        function iD(i) {
          return Rt(i) && i.nodeType === 1 && !ic(i);
        }
        function oD(i) {
          if (i == null) return !0;
          if (
            Dn(i) &&
            (Pe(i) ||
              typeof i == "string" ||
              typeof i.splice == "function" ||
              Gi(i) ||
              Pl(i) ||
              Mo(i))
          )
            return !i.length;
          var l = rn(i);
          if (l == kt || l == tn) return !i.size;
          if (Gu(i)) return !vp(i).length;
          for (var a in i) if (at.call(i, a)) return !1;
          return !0;
        }
        function lD(i, l) {
          return ju(i, l);
        }
        function uD(i, l, a) {
          a = typeof a == "function" ? a : n;
          var d = a ? a(i, l) : n;
          return d === n ? ju(i, l, n, a) : !!d;
        }
        function Hp(i) {
          if (!Rt(i)) return !1;
          var l = pn(i);
          return (
            l == _t ||
            l == st ||
            (typeof i.message == "string" &&
              typeof i.name == "string" &&
              !ic(i))
          );
        }
        function sD(i) {
          return typeof i == "number" && pb(i);
        }
        function mi(i) {
          if (!mt(i)) return !1;
          var l = pn(i);
          return l == $t || l == ft || l == Z || l == Mi;
        }
        function Wm(i) {
          return typeof i == "number" && i == Re(i);
        }
        function rc(i) {
          return typeof i == "number" && i > -1 && i % 1 == 0 && i <= Ue;
        }
        function mt(i) {
          var l = typeof i;
          return i != null && (l == "object" || l == "function");
        }
        function Rt(i) {
          return i != null && typeof i == "object";
        }
        var aD = ar ? Hn(ar) : aC;
        function cD(i, l) {
          return i === l || _p(i, l, Pp(l));
        }
        function fD(i, l, a) {
          return (a = typeof a == "function" ? a : n), _p(i, l, Pp(l), a);
        }
        function dD(i) {
          return Vm(i) && i != +i;
        }
        function pD(i) {
          if (QC(i)) throw new De(u);
          return $v(i);
        }
        function hD(i) {
          return i === null;
        }
        function gD(i) {
          return i == null;
        }
        function Vm(i) {
          return typeof i == "number" || (Rt(i) && pn(i) == Fn);
        }
        function ic(i) {
          if (!Rt(i) || pn(i) != vt) return !1;
          var l = ka(i);
          if (l === null) return !0;
          var a = at.call(l, "constructor") && l.constructor;
          return typeof a == "function" && a instanceof a && Ea.call(a) == ob;
        }
        var Bp = Gr ? Hn(Gr) : cC;
        function _D(i) {
          return Wm(i) && i >= -Ue && i <= Ue;
        }
        var vD = Ou ? Hn(Ou) : fC;
        function oc(i) {
          return typeof i == "string" || (!Pe(i) && Rt(i) && pn(i) == ur);
        }
        function Wn(i) {
          return typeof i == "symbol" || (Rt(i) && pn(i) == zn);
        }
        var Pl = Eo ? Hn(Eo) : dC;
        function mD(i) {
          return i === n;
        }
        function yD(i) {
          return Rt(i) && rn(i) == jr;
        }
        function wD(i) {
          return Rt(i) && pn(i) == ul;
        }
        var SD = Ya(mp),
          xD = Ya(function (i, l) {
            return i <= l;
          });
        function Gm(i) {
          if (!i) return [];
          if (Dn(i)) return oc(i) ? Or(i) : In(i);
          if (Lu && i[Lu]) return KT(i[Lu]());
          var l = rn(i),
            a = l == kt ? Ru : l == tn ? xl : Rl;
          return a(i);
        }
        function yi(i) {
          if (!i) return i === 0 ? i : 0;
          if (((i = hr(i)), i === Ie || i === -Ie)) {
            var l = i < 0 ? -1 : 1;
            return l * ee;
          }
          return i === i ? i : 0;
        }
        function Re(i) {
          var l = yi(i),
            a = l % 1;
          return l === l ? (a ? l - a : l) : 0;
        }
        function Km(i) {
          return i ? Ro(Re(i), 0, ae) : 0;
        }
        function hr(i) {
          if (typeof i == "number") return i;
          if (Wn(i)) return de;
          if (mt(i)) {
            var l = typeof i.valueOf == "function" ? i.valueOf() : i;
            i = mt(l) ? l + "" : l;
          }
          if (typeof i != "string") return i === 0 ? i : +i;
          i = i.replace(ra, "");
          var a = Ld.test(i);
          return a || Md.test(i)
            ? Ee(i.slice(2), a ? 2 : 8)
            : Nd.test(i)
            ? de
            : +i;
        }
        function Ym(i) {
          return Yr(i, Vn(i));
        }
        function TD(i) {
          return Ro(Re(i), -Ue, Ue);
        }
        function qe(i) {
          return i == null ? "" : Bn(i);
        }
        var bD = Dl(function (i, l) {
            if (Gu(l) || Dn(l)) {
              Yr(l, Ft(l), i);
              return;
            }
            for (var a in l) at.call(l, a) && Hu(i, a, l[a]);
          }),
          Qm = Dl(function (i, l) {
            Yr(l, Vn(l), i);
          }),
          Yu = Dl(function (i, l, a, d) {
            Yr(l, Vn(l), i, d);
          }),
          CD = Dl(function (i, l, a, d) {
            Yr(l, Ft(l), i, d);
          }),
          ID = _i(fp);
        function ED(i, l) {
          var a = Il(i);
          return l == null ? a : Pv(a, l);
        }
        var DD = Ne(function (i) {
            return i.push(n, ap), Cn(Yu, n, i);
          }),
          OD = Ne(function (i) {
            return i.push(n, Sm), Cn(qm, n, i);
          });
        function kD(i, l) {
          return _v(i, me(l, 3), Kr);
        }
        function PD(i, l) {
          return _v(i, me(l, 3), pp);
        }
        function RD(i, l) {
          return i == null ? i : dp(i, me(l, 3), Vn);
        }
        function ND(i, l) {
          return i == null ? i : Mv(i, me(l, 3), Vn);
        }
        function LD(i, l) {
          return i && Kr(i, me(l, 3));
        }
        function AD(i, l) {
          return i && pp(i, me(l, 3));
        }
        function MD(i) {
          return i == null ? [] : Ha(i, Ft(i));
        }
        function FD(i) {
          return i == null ? [] : Ha(i, Vn(i));
        }
        function Up(i, l, a) {
          var d = i == null ? n : El(i, l);
          return d === n ? a : d;
        }
        function zD(i, l) {
          return i != null && vm(i, l, nC);
        }
        function jp(i, l) {
          return i != null && vm(i, l, rC);
        }
        var $D = fm(function (i, l, a) {
            i[l] = a;
          }, Vp(On)),
          HD = fm(function (i, l, a) {
            at.call(i, l) ? i[l].push(a) : (i[l] = [a]);
          }, me),
          BD = Ne(Uu);
        function Ft(i) {
          return Dn(i) ? Ov(i) : vp(i);
        }
        function Vn(i) {
          return Dn(i) ? Ov(i, !0) : pC(i);
        }
        function UD(i, l) {
          var a = {};
          return (
            (l = me(l, 3)),
            Kr(i, function (d, h, x) {
              pi(a, l(d, h, x), d);
            }),
            a
          );
        }
        function jD(i, l) {
          var a = {};
          return (
            (l = me(l, 3)),
            Kr(i, function (d, h, x) {
              pi(a, h, l(d, h, x));
            }),
            a
          );
        }
        var WD = Dl(function (i, l, a) {
            Ba(i, l, a);
          }),
          qm = Dl(function (i, l, a, d) {
            Ba(i, l, a, d);
          }),
          VD = _i(function (i, l) {
            var a = {};
            if (i == null) return a;
            Yr(i, Op(i), a), (a = Pr(a, _ | w | S));
            for (var d = l.length; d--; ) Xv(a, l[d]);
            return a;
          });
        function GD(i, l) {
          return Xm(i, nc(me(l)));
        }
        var KD = _i(function (i, l) {
          return i == null ? {} : gC(i, Et(l, Un));
        });
        function Xm(i, l) {
          return i == null ? {} : Gv(i, Op(i), me(l));
        }
        function YD(i, l, a) {
          l = Qr(l, i) ? [l] : No(l);
          var d = -1,
            h = l.length;
          for (h || ((i = n), (h = 1)); ++d < h; ) {
            var x = i == null ? n : i[Un(l[d])];
            x === n && ((d = h), (x = a)), (i = mi(x) ? x.call(i) : x);
          }
          return i;
        }
        function QD(i, l, a) {
          return i == null ? i : Wu(i, l, a);
        }
        function qD(i, l, a, d) {
          return (
            (d = typeof d == "function" ? d : n), i == null ? i : Wu(i, l, a, d)
          );
        }
        var Zm = hm(Ft),
          Jm = hm(Vn);
        function XD(i, l, a) {
          var d = Pe(i),
            h = d || Gi(i) || Pl(i);
          if (((l = me(l, 4)), a == null)) {
            var x = i && i.constructor;
            h
              ? (a = d ? new x() : [])
              : mt(i)
              ? (a = mi(x) ? Il(ka(i)) : {})
              : (a = {});
          }
          return (
            (h ? cr : Kr)(i, function (D, R, M) {
              return l(a, D, R, M);
            }),
            a
          );
        }
        function ZD(i, l) {
          return i == null ? !0 : Xv(i, l);
        }
        function JD(i, l, a) {
          return i == null ? i : Zv(i, l, Cp(a));
        }
        function eO(i, l, a, d) {
          return (
            (d = typeof d == "function" ? d : n),
            i == null ? i : Zv(i, l, Cp(a), d)
          );
        }
        function Rl(i) {
          return i == null ? [] : rp(i, Ft(i));
        }
        function tO(i) {
          return i == null ? [] : rp(i, Vn(i));
        }
        function nO(i, l, a) {
          return (
            a === n && ((a = l), (l = n)),
            a !== n && ((a = hr(a)), (a = a === a ? a : 0)),
            l !== n && ((l = hr(l)), (l = l === l ? l : 0)),
            Ro(hr(i), l, a)
          );
        }
        function rO(i, l, a) {
          return (
            (l = yi(l)),
            a === n ? ((a = l), (l = 0)) : (a = yi(a)),
            (i = hr(i)),
            iC(i, l, a)
          );
        }
        function iO(i, l, a) {
          if (
            (a && typeof a != "boolean" && En(i, l, a) && (l = a = n),
            a === n &&
              (typeof l == "boolean"
                ? ((a = l), (l = n))
                : typeof i == "boolean" && ((a = i), (i = n))),
            i === n && l === n
              ? ((i = 0), (l = 1))
              : ((i = yi(i)), l === n ? ((l = i), (i = 0)) : (l = yi(l))),
            i > l)
          ) {
            var d = i;
            (i = l), (l = d);
          }
          if (a || i % 1 || l % 1) {
            var h = Ev();
            return nn(i + h * (l - i + it("1e-" + ((h + "").length - 1))), l);
          }
          return wp(i, l);
        }
        var oO = Ol(function (i, l, a) {
          return (l = l.toLowerCase()), i + (a ? e0(l) : l);
        });
        function e0(i) {
          return Wp(qe(i).toLowerCase());
        }
        function t0(i) {
          return (i = qe(i)), i && i.replace(si, UT).replace(Qd, "");
        }
        function lO(i, l, a) {
          (i = qe(i)), (l = Bn(l));
          var d = i.length;
          a = a === n ? d : Ro(Re(a), 0, d);
          var h = a;
          return (a -= l.length), a >= 0 && i.slice(a, h) == l;
        }
        function uO(i) {
          return (i = qe(i)), i && wu.test(i) ? i.replace(na, jT) : i;
        }
        function sO(i) {
          return (i = qe(i)), i && Ed.test(i) ? i.replace(Tu, "\\$&") : i;
        }
        var aO = Ol(function (i, l, a) {
            return i + (a ? "-" : "") + l.toLowerCase();
          }),
          cO = Ol(function (i, l, a) {
            return i + (a ? " " : "") + l.toLowerCase();
          }),
          fO = sm("toLowerCase");
        function dO(i, l, a) {
          (i = qe(i)), (l = Re(l));
          var d = l ? Tl(i) : 0;
          if (!l || d >= l) return i;
          var h = (l - d) / 2;
          return Ka(La(h), a) + i + Ka(Na(h), a);
        }
        function pO(i, l, a) {
          (i = qe(i)), (l = Re(l));
          var d = l ? Tl(i) : 0;
          return l && d < l ? i + Ka(l - d, a) : i;
        }
        function hO(i, l, a) {
          (i = qe(i)), (l = Re(l));
          var d = l ? Tl(i) : 0;
          return l && d < l ? Ka(l - d, a) + i : i;
        }
        function gO(i, l, a) {
          return (
            a || l == null ? (l = 0) : l && (l = +l),
            vb(qe(i).replace(bu, ""), l || 0)
          );
        }
        function _O(i, l, a) {
          return (
            (a ? En(i, l, a) : l === n) ? (l = 1) : (l = Re(l)), Sp(qe(i), l)
          );
        }
        function vO() {
          var i = arguments,
            l = qe(i[0]);
          return i.length < 3 ? l : l.replace(i[1], i[2]);
        }
        var mO = Ol(function (i, l, a) {
          return i + (a ? "_" : "") + l.toLowerCase();
        });
        function yO(i, l, a) {
          return (
            a && typeof a != "number" && En(i, l, a) && (l = a = n),
            (a = a === n ? ae : a >>> 0),
            a
              ? ((i = qe(i)),
                i &&
                (typeof l == "string" || (l != null && !Bp(l))) &&
                ((l = Bn(l)), !l && Sl(i))
                  ? hi(Or(i), 0, a)
                  : i.split(l, a))
              : []
          );
        }
        var wO = Ol(function (i, l, a) {
          return i + (a ? " " : "") + Wp(l);
        });
        function SO(i, l, a) {
          return (
            (i = qe(i)),
            (a = Ro(Re(a), 0, i.length)),
            (l = Bn(l)),
            i.slice(a, a + l.length) == l
          );
        }
        function xO(i, l, a) {
          var d = v.templateSettings;
          a && En(i, l, a) && (l = n), (i = qe(i)), (l = Yu({}, l, d, ap));
          var h = Yu({}, l.imports, d.imports, ap),
            x = Ft(h),
            D = rp(h, x),
            R,
            M,
            j = 0,
            U = l.interpolate || dl,
            K = "__p += '",
            te = op(
              (l.escape || dl).source +
                "|" +
                U.source +
                "|" +
                (U === fl ? Rd : dl).source +
                "|" +
                (l.evaluate || dl).source +
                "|$",
              "g"
            ),
            pe =
              "//# sourceURL=" +
              ("sourceURL" in l
                ? l.sourceURL
                : "lodash.templateSources[" + ++qd + "]") +
              `
`;
          i.replace(te, function (Se, je, Qe, hn, gn, Ki) {
            return (
              Qe || (Qe = hn),
              (K += i.slice(j, Ki).replace(zd, WT)),
              je &&
                ((R = !0),
                (K +=
                  `' +
__e(` +
                  je +
                  `) +
'`)),
              gn &&
                ((M = !0),
                (K +=
                  `';
` +
                  gn +
                  `;
__p += '`)),
              Qe &&
                (K +=
                  `' +
((__t = (` +
                  Qe +
                  `)) == null ? '' : __t) +
'`),
              (j = Ki + Se.length),
              Se
            );
          }),
            (K += `';
`);
          var ye = l.variable;
          ye ||
            (K =
              `with (obj) {
` +
              K +
              `
}
`),
            (K = (M ? K.replace(ta, "") : K)
              .replace(Td, "$1")
              .replace(li, "$1;")),
            (K =
              "function(" +
              (ye || "obj") +
              `) {
` +
              (ye
                ? ""
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (R ? ", __e = _.escape" : "") +
              (M
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              K +
              `return __p
}`);
          var Me = r0(function () {
            return Ye(x, pe + "return " + K).apply(n, D);
          });
          if (((Me.source = K), Hp(Me))) throw Me;
          return Me;
        }
        function TO(i) {
          return qe(i).toLowerCase();
        }
        function bO(i) {
          return qe(i).toUpperCase();
        }
        function CO(i, l, a) {
          if (((i = qe(i)), i && (a || l === n))) return i.replace(ra, "");
          if (!i || !(l = Bn(l))) return i;
          var d = Or(i),
            h = Or(l),
            x = wv(d, h),
            D = Sv(d, h) + 1;
          return hi(d, x, D).join("");
        }
        function IO(i, l, a) {
          if (((i = qe(i)), i && (a || l === n))) return i.replace(Cu, "");
          if (!i || !(l = Bn(l))) return i;
          var d = Or(i),
            h = Sv(d, Or(l)) + 1;
          return hi(d, 0, h).join("");
        }
        function EO(i, l, a) {
          if (((i = qe(i)), i && (a || l === n))) return i.replace(bu, "");
          if (!i || !(l = Bn(l))) return i;
          var d = Or(i),
            h = wv(d, Or(l));
          return hi(d, h).join("");
        }
        function DO(i, l) {
          var a = Y,
            d = W;
          if (mt(l)) {
            var h = "separator" in l ? l.separator : h;
            (a = "length" in l ? Re(l.length) : a),
              (d = "omission" in l ? Bn(l.omission) : d);
          }
          i = qe(i);
          var x = i.length;
          if (Sl(i)) {
            var D = Or(i);
            x = D.length;
          }
          if (a >= x) return i;
          var R = a - Tl(d);
          if (R < 1) return d;
          var M = D ? hi(D, 0, R).join("") : i.slice(0, R);
          if (h === n) return M + d;
          if ((D && (R += M.length - R), Bp(h))) {
            if (i.slice(R).search(h)) {
              var j,
                U = M;
              for (
                h.global || (h = op(h.source, qe(sr.exec(h)) + "g")),
                  h.lastIndex = 0;
                (j = h.exec(U));

              )
                var K = j.index;
              M = M.slice(0, K === n ? R : K);
            }
          } else if (i.indexOf(Bn(h), R) != R) {
            var te = M.lastIndexOf(h);
            te > -1 && (M = M.slice(0, te));
          }
          return M + d;
        }
        function OO(i) {
          return (i = qe(i)), i && bd.test(i) ? i.replace(yu, XT) : i;
        }
        var kO = Ol(function (i, l, a) {
            return i + (a ? " " : "") + l.toUpperCase();
          }),
          Wp = sm("toUpperCase");
        function n0(i, l, a) {
          return (
            (i = qe(i)),
            (l = a ? n : l),
            l === n ? (GT(i) ? eb(i) : FT(i)) : i.match(l) || []
          );
        }
        var r0 = Ne(function (i, l) {
            try {
              return Cn(i, n, l);
            } catch (a) {
              return Hp(a) ? a : new De(a);
            }
          }),
          PO = _i(function (i, l) {
            return (
              cr(l, function (a) {
                (a = Un(a)), pi(i, a, zp(i[a], i));
              }),
              i
            );
          });
        function RO(i) {
          var l = i == null ? 0 : i.length,
            a = me();
          return (
            (i = l
              ? Et(i, function (d) {
                  if (typeof d[1] != "function") throw new fr(s);
                  return [a(d[0]), d[1]];
                })
              : []),
            Ne(function (d) {
              for (var h = -1; ++h < l; ) {
                var x = i[h];
                if (Cn(x[0], this, d)) return Cn(x[1], this, d);
              }
            })
          );
        }
        function NO(i) {
          return Jb(Pr(i, _));
        }
        function Vp(i) {
          return function () {
            return i;
          };
        }
        function LO(i, l) {
          return i == null || i !== i ? l : i;
        }
        var AO = cm(),
          MO = cm(!0);
        function On(i) {
          return i;
        }
        function Gp(i) {
          return Hv(typeof i == "function" ? i : Pr(i, _));
        }
        function FO(i) {
          return Uv(Pr(i, _));
        }
        function zO(i, l) {
          return jv(i, Pr(l, _));
        }
        var $O = Ne(function (i, l) {
            return function (a) {
              return Uu(a, i, l);
            };
          }),
          HO = Ne(function (i, l) {
            return function (a) {
              return Uu(i, a, l);
            };
          });
        function Kp(i, l, a) {
          var d = Ft(l),
            h = Ha(l, d);
          a == null &&
            !(mt(l) && (h.length || !d.length)) &&
            ((a = l), (l = i), (i = this), (h = Ha(l, Ft(l))));
          var x = !(mt(a) && "chain" in a) || !!a.chain,
            D = mi(i);
          return (
            cr(h, function (R) {
              var M = l[R];
              (i[R] = M),
                D &&
                  (i.prototype[R] = function () {
                    var j = this.__chain__;
                    if (x || j) {
                      var U = i(this.__wrapped__),
                        K = (U.__actions__ = In(this.__actions__));
                      return (
                        K.push({ func: M, args: arguments, thisArg: i }),
                        (U.__chain__ = j),
                        U
                      );
                    }
                    return M.apply(i, ci([this.value()], arguments));
                  });
            }),
            i
          );
        }
        function BO() {
          return Be._ === this && (Be._ = lb), this;
        }
        function Yp() {}
        function UO(i) {
          return (
            (i = Re(i)),
            Ne(function (l) {
              return Wv(l, i);
            })
          );
        }
        var jO = Ep(Et),
          WO = Ep(gv),
          VO = Ep(Zd);
        function i0(i) {
          return Qr(i) ? Jd(Un(i)) : _C(i);
        }
        function GO(i) {
          return function (l) {
            return i == null ? n : El(i, l);
          };
        }
        var KO = dm(),
          YO = dm(!0);
        function Qp() {
          return [];
        }
        function qp() {
          return !1;
        }
        function QO() {
          return {};
        }
        function qO() {
          return "";
        }
        function XO() {
          return !0;
        }
        function ZO(i, l) {
          if (((i = Re(i)), i < 1 || i > Ue)) return [];
          var a = ae,
            d = nn(i, ae);
          (l = me(l)), (i -= ae);
          for (var h = np(d, l); ++a < i; ) l(a);
          return h;
        }
        function JO(i) {
          return Pe(i) ? Et(i, Un) : Wn(i) ? [i] : In(Im(i));
        }
        function ek(i) {
          var l = ++ib;
          return qe(i) + l;
        }
        var tk = Ga(function (i, l) {
            return i + l;
          }, 0),
          nk = Dp("ceil"),
          rk = Ga(function (i, l) {
            return i / l;
          }, 1),
          ik = Dp("floor");
        function ok(i) {
          return i && i.length ? $a(i, On, hp) : n;
        }
        function lk(i, l) {
          return i && i.length ? $a(i, me(l, 2), hp) : n;
        }
        function uk(i) {
          return mv(i, On);
        }
        function sk(i, l) {
          return mv(i, me(l, 2));
        }
        function ak(i) {
          return i && i.length ? $a(i, On, mp) : n;
        }
        function ck(i, l) {
          return i && i.length ? $a(i, me(l, 2), mp) : n;
        }
        var fk = Ga(function (i, l) {
            return i * l;
          }, 1),
          dk = Dp("round"),
          pk = Ga(function (i, l) {
            return i - l;
          }, 0);
        function hk(i) {
          return i && i.length ? tp(i, On) : 0;
        }
        function gk(i, l) {
          return i && i.length ? tp(i, me(l, 2)) : 0;
        }
        return (
          (v.after = AE),
          (v.ary = Fm),
          (v.assign = bD),
          (v.assignIn = Qm),
          (v.assignInWith = Yu),
          (v.assignWith = CD),
          (v.at = ID),
          (v.before = zm),
          (v.bind = zp),
          (v.bindAll = PO),
          (v.bindKey = $m),
          (v.castArray = KE),
          (v.chain = Lm),
          (v.chunk = nI),
          (v.compact = rI),
          (v.concat = iI),
          (v.cond = RO),
          (v.conforms = NO),
          (v.constant = Vp),
          (v.countBy = dE),
          (v.create = ED),
          (v.curry = Hm),
          (v.curryRight = Bm),
          (v.debounce = Um),
          (v.defaults = DD),
          (v.defaultsDeep = OD),
          (v.defer = ME),
          (v.delay = FE),
          (v.difference = oI),
          (v.differenceBy = lI),
          (v.differenceWith = uI),
          (v.drop = sI),
          (v.dropRight = aI),
          (v.dropRightWhile = cI),
          (v.dropWhile = fI),
          (v.fill = dI),
          (v.filter = hE),
          (v.flatMap = vE),
          (v.flatMapDeep = mE),
          (v.flatMapDepth = yE),
          (v.flatten = km),
          (v.flattenDeep = pI),
          (v.flattenDepth = hI),
          (v.flip = zE),
          (v.flow = AO),
          (v.flowRight = MO),
          (v.fromPairs = gI),
          (v.functions = MD),
          (v.functionsIn = FD),
          (v.groupBy = wE),
          (v.initial = vI),
          (v.intersection = mI),
          (v.intersectionBy = yI),
          (v.intersectionWith = wI),
          (v.invert = $D),
          (v.invertBy = HD),
          (v.invokeMap = xE),
          (v.iteratee = Gp),
          (v.keyBy = TE),
          (v.keys = Ft),
          (v.keysIn = Vn),
          (v.map = Ja),
          (v.mapKeys = UD),
          (v.mapValues = jD),
          (v.matches = FO),
          (v.matchesProperty = zO),
          (v.memoize = tc),
          (v.merge = WD),
          (v.mergeWith = qm),
          (v.method = $O),
          (v.methodOf = HO),
          (v.mixin = Kp),
          (v.negate = nc),
          (v.nthArg = UO),
          (v.omit = VD),
          (v.omitBy = GD),
          (v.once = $E),
          (v.orderBy = bE),
          (v.over = jO),
          (v.overArgs = HE),
          (v.overEvery = WO),
          (v.overSome = VO),
          (v.partial = $p),
          (v.partialRight = jm),
          (v.partition = CE),
          (v.pick = KD),
          (v.pickBy = Xm),
          (v.property = i0),
          (v.propertyOf = GO),
          (v.pull = bI),
          (v.pullAll = Rm),
          (v.pullAllBy = CI),
          (v.pullAllWith = II),
          (v.pullAt = EI),
          (v.range = KO),
          (v.rangeRight = YO),
          (v.rearg = BE),
          (v.reject = DE),
          (v.remove = DI),
          (v.rest = UE),
          (v.reverse = Mp),
          (v.sampleSize = kE),
          (v.set = QD),
          (v.setWith = qD),
          (v.shuffle = PE),
          (v.slice = OI),
          (v.sortBy = LE),
          (v.sortedUniq = MI),
          (v.sortedUniqBy = FI),
          (v.split = yO),
          (v.spread = jE),
          (v.tail = zI),
          (v.take = $I),
          (v.takeRight = HI),
          (v.takeRightWhile = BI),
          (v.takeWhile = UI),
          (v.tap = rE),
          (v.throttle = WE),
          (v.thru = Za),
          (v.toArray = Gm),
          (v.toPairs = Zm),
          (v.toPairsIn = Jm),
          (v.toPath = JO),
          (v.toPlainObject = Ym),
          (v.transform = XD),
          (v.unary = VE),
          (v.union = jI),
          (v.unionBy = WI),
          (v.unionWith = VI),
          (v.uniq = GI),
          (v.uniqBy = KI),
          (v.uniqWith = YI),
          (v.unset = ZD),
          (v.unzip = Fp),
          (v.unzipWith = Nm),
          (v.update = JD),
          (v.updateWith = eO),
          (v.values = Rl),
          (v.valuesIn = tO),
          (v.without = QI),
          (v.words = n0),
          (v.wrap = GE),
          (v.xor = qI),
          (v.xorBy = XI),
          (v.xorWith = ZI),
          (v.zip = JI),
          (v.zipObject = eE),
          (v.zipObjectDeep = tE),
          (v.zipWith = nE),
          (v.entries = Zm),
          (v.entriesIn = Jm),
          (v.extend = Qm),
          (v.extendWith = Yu),
          Kp(v, v),
          (v.add = tk),
          (v.attempt = r0),
          (v.camelCase = oO),
          (v.capitalize = e0),
          (v.ceil = nk),
          (v.clamp = nO),
          (v.clone = YE),
          (v.cloneDeep = qE),
          (v.cloneDeepWith = XE),
          (v.cloneWith = QE),
          (v.conformsTo = ZE),
          (v.deburr = t0),
          (v.defaultTo = LO),
          (v.divide = rk),
          (v.endsWith = lO),
          (v.eq = qr),
          (v.escape = uO),
          (v.escapeRegExp = sO),
          (v.every = pE),
          (v.find = gE),
          (v.findIndex = Dm),
          (v.findKey = kD),
          (v.findLast = _E),
          (v.findLastIndex = Om),
          (v.findLastKey = PD),
          (v.floor = ik),
          (v.forEach = Am),
          (v.forEachRight = Mm),
          (v.forIn = RD),
          (v.forInRight = ND),
          (v.forOwn = LD),
          (v.forOwnRight = AD),
          (v.get = Up),
          (v.gt = JE),
          (v.gte = eD),
          (v.has = zD),
          (v.hasIn = jp),
          (v.head = Pm),
          (v.identity = On),
          (v.includes = SE),
          (v.indexOf = _I),
          (v.inRange = rO),
          (v.invoke = BD),
          (v.isArguments = Mo),
          (v.isArray = Pe),
          (v.isArrayBuffer = tD),
          (v.isArrayLike = Dn),
          (v.isArrayLikeObject = Pt),
          (v.isBoolean = nD),
          (v.isBuffer = Gi),
          (v.isDate = rD),
          (v.isElement = iD),
          (v.isEmpty = oD),
          (v.isEqual = lD),
          (v.isEqualWith = uD),
          (v.isError = Hp),
          (v.isFinite = sD),
          (v.isFunction = mi),
          (v.isInteger = Wm),
          (v.isLength = rc),
          (v.isMap = aD),
          (v.isMatch = cD),
          (v.isMatchWith = fD),
          (v.isNaN = dD),
          (v.isNative = pD),
          (v.isNil = gD),
          (v.isNull = hD),
          (v.isNumber = Vm),
          (v.isObject = mt),
          (v.isObjectLike = Rt),
          (v.isPlainObject = ic),
          (v.isRegExp = Bp),
          (v.isSafeInteger = _D),
          (v.isSet = vD),
          (v.isString = oc),
          (v.isSymbol = Wn),
          (v.isTypedArray = Pl),
          (v.isUndefined = mD),
          (v.isWeakMap = yD),
          (v.isWeakSet = wD),
          (v.join = SI),
          (v.kebabCase = aO),
          (v.last = jn),
          (v.lastIndexOf = xI),
          (v.lowerCase = cO),
          (v.lowerFirst = fO),
          (v.lt = SD),
          (v.lte = xD),
          (v.max = ok),
          (v.maxBy = lk),
          (v.mean = uk),
          (v.meanBy = sk),
          (v.min = ak),
          (v.minBy = ck),
          (v.stubArray = Qp),
          (v.stubFalse = qp),
          (v.stubObject = QO),
          (v.stubString = qO),
          (v.stubTrue = XO),
          (v.multiply = fk),
          (v.nth = TI),
          (v.noConflict = BO),
          (v.noop = Yp),
          (v.now = ec),
          (v.pad = dO),
          (v.padEnd = pO),
          (v.padStart = hO),
          (v.parseInt = gO),
          (v.random = iO),
          (v.reduce = IE),
          (v.reduceRight = EE),
          (v.repeat = _O),
          (v.replace = vO),
          (v.result = YD),
          (v.round = dk),
          (v.runInContext = A),
          (v.sample = OE),
          (v.size = RE),
          (v.snakeCase = mO),
          (v.some = NE),
          (v.sortedIndex = kI),
          (v.sortedIndexBy = PI),
          (v.sortedIndexOf = RI),
          (v.sortedLastIndex = NI),
          (v.sortedLastIndexBy = LI),
          (v.sortedLastIndexOf = AI),
          (v.startCase = wO),
          (v.startsWith = SO),
          (v.subtract = pk),
          (v.sum = hk),
          (v.sumBy = gk),
          (v.template = xO),
          (v.times = ZO),
          (v.toFinite = yi),
          (v.toInteger = Re),
          (v.toLength = Km),
          (v.toLower = TO),
          (v.toNumber = hr),
          (v.toSafeInteger = TD),
          (v.toString = qe),
          (v.toUpper = bO),
          (v.trim = CO),
          (v.trimEnd = IO),
          (v.trimStart = EO),
          (v.truncate = DO),
          (v.unescape = OO),
          (v.uniqueId = ek),
          (v.upperCase = kO),
          (v.upperFirst = Wp),
          (v.each = Am),
          (v.eachRight = Mm),
          (v.first = Pm),
          Kp(
            v,
            (function () {
              var i = {};
              return (
                Kr(v, function (l, a) {
                  at.call(v.prototype, a) || (i[a] = l);
                }),
                i
              );
            })(),
            { chain: !1 }
          ),
          (v.VERSION = r),
          cr(
            [
              "bind",
              "bindKey",
              "curry",
              "curryRight",
              "partial",
              "partialRight",
            ],
            function (i) {
              v[i].placeholder = v;
            }
          ),
          cr(["drop", "take"], function (i, l) {
            ($e.prototype[i] = function (a) {
              var d = this.__filtered__;
              if (d && !l) return new $e(this);
              a = a === n ? 1 : Bt(Re(a), 0);
              var h = this.clone();
              return (
                d
                  ? (h.__takeCount__ = nn(a, h.__takeCount__))
                  : h.__views__.push({
                      size: nn(a, ae),
                      type: i + (h.__dir__ < 0 ? "Right" : ""),
                    }),
                h
              );
            }),
              ($e.prototype[i + "Right"] = function (a) {
                return this.reverse()[i](a).reverse();
              });
          }),
          cr(["filter", "map", "takeWhile"], function (i, l) {
            var a = l + 1,
              d = a == Ce || a == xe;
            $e.prototype[i] = function (h) {
              var x = this.clone();
              return (
                x.__iteratees__.push({ iteratee: me(h, 3), type: a }),
                (x.__filtered__ = x.__filtered__ || d),
                x
              );
            };
          }),
          cr(["head", "last"], function (i, l) {
            var a = "take" + (l ? "Right" : "");
            $e.prototype[i] = function () {
              return this[a](1).value()[0];
            };
          }),
          cr(["initial", "tail"], function (i, l) {
            var a = "drop" + (l ? "" : "Right");
            $e.prototype[i] = function () {
              return this.__filtered__ ? new $e(this) : this[a](1);
            };
          }),
          ($e.prototype.compact = function () {
            return this.filter(On);
          }),
          ($e.prototype.find = function (i) {
            return this.filter(i).head();
          }),
          ($e.prototype.findLast = function (i) {
            return this.reverse().find(i);
          }),
          ($e.prototype.invokeMap = Ne(function (i, l) {
            return typeof i == "function"
              ? new $e(this)
              : this.map(function (a) {
                  return Uu(a, i, l);
                });
          })),
          ($e.prototype.reject = function (i) {
            return this.filter(nc(me(i)));
          }),
          ($e.prototype.slice = function (i, l) {
            i = Re(i);
            var a = this;
            return a.__filtered__ && (i > 0 || l < 0)
              ? new $e(a)
              : (i < 0 ? (a = a.takeRight(-i)) : i && (a = a.drop(i)),
                l !== n &&
                  ((l = Re(l)), (a = l < 0 ? a.dropRight(-l) : a.take(l - i))),
                a);
          }),
          ($e.prototype.takeRightWhile = function (i) {
            return this.reverse().takeWhile(i).reverse();
          }),
          ($e.prototype.toArray = function () {
            return this.take(ae);
          }),
          Kr($e.prototype, function (i, l) {
            var a = /^(?:filter|find|map|reject)|While$/.test(l),
              d = /^(?:head|last)$/.test(l),
              h = v[d ? "take" + (l == "last" ? "Right" : "") : l],
              x = d || /^find/.test(l);
            h &&
              (v.prototype[l] = function () {
                var D = this.__wrapped__,
                  R = d ? [1] : arguments,
                  M = D instanceof $e,
                  j = R[0],
                  U = M || Pe(D),
                  K = function (je) {
                    var Qe = h.apply(v, ci([je], R));
                    return d && te ? Qe[0] : Qe;
                  };
                U &&
                  a &&
                  typeof j == "function" &&
                  j.length != 1 &&
                  (M = U = !1);
                var te = this.__chain__,
                  pe = !!this.__actions__.length,
                  ye = x && !te,
                  Me = M && !pe;
                if (!x && U) {
                  D = Me ? D : new $e(this);
                  var Se = i.apply(D, R);
                  return (
                    Se.__actions__.push({ func: Za, args: [K], thisArg: n }),
                    new dr(Se, te)
                  );
                }
                return ye && Me
                  ? i.apply(this, R)
                  : ((Se = this.thru(K)),
                    ye ? (d ? Se.value()[0] : Se.value()) : Se);
              });
          }),
          cr(
            ["pop", "push", "shift", "sort", "splice", "unshift"],
            function (i) {
              var l = Ca[i],
                a = /^(?:push|sort|unshift)$/.test(i) ? "tap" : "thru",
                d = /^(?:pop|shift)$/.test(i);
              v.prototype[i] = function () {
                var h = arguments;
                if (d && !this.__chain__) {
                  var x = this.value();
                  return l.apply(Pe(x) ? x : [], h);
                }
                return this[a](function (D) {
                  return l.apply(Pe(D) ? D : [], h);
                });
              };
            }
          ),
          Kr($e.prototype, function (i, l) {
            var a = v[l];
            if (a) {
              var d = a.name + "",
                h = zu[d] || (zu[d] = []);
              h.push({ name: l, func: a });
            }
          }),
          (zu[Va(n, F).name] = [{ name: "wrapper", func: n }]),
          ($e.prototype.clone = bb),
          ($e.prototype.reverse = Cb),
          ($e.prototype.value = Ib),
          (v.prototype.at = iE),
          (v.prototype.chain = oE),
          (v.prototype.commit = lE),
          (v.prototype.next = uE),
          (v.prototype.plant = aE),
          (v.prototype.reverse = cE),
          (v.prototype.toJSON = v.prototype.valueOf = v.prototype.value = fE),
          (v.prototype.first = v.prototype.head),
          Lu && (v.prototype[Lu] = sE),
          v
        );
      },
      bl = tb();
    Gt ? (((Gt.exports = bl)._ = bl), (ot._ = bl)) : (Be._ = bl);
  }).call(Yn);
})(Ff, Ff.exports);
var y3 = Ff.exports;
const w3 = el(y3),
  S3 = null;
class CT {
  key;
  todos = [];
  onChanges;
  loro;
  tree;
  sync = !0;
  history = [[]];
  version = 0;
  isCheckout = !1;
  constructor(t, n) {
    (this.key = n),
      (this.loro = t),
      (this.onChanges = []),
      (this.tree = this.loro.getTree("tree")),
      this.loro.subscribe((r) => {
        if (!this.isCheckout) {
          const o = this.loro.frontiers();
          w3.isEqual(o, this.history[this.history.length - 1]) ||
            (this.history.push(o), (this.version = this.history.length - 1)),
            this.inform();
        }
      });
  }
  getTodos(t) {
    const n = t.meta;
    return {
      id: t.id,
      parentId: t.parent,
      children: t.children ? t.children.map((r) => this.getTodos(r)) : [],
      title: n.title,
      completed: n.completed,
      expanded: n.expanded,
    };
  }
  checkout(t) {
    (this.isCheckout = !0),
      this.loro.checkout(this.history[t]),
      (this.version = t),
      t === this.history.length - 1 && this.onAttach(),
      this.inform();
  }
  onAttach() {
    this.loro.is_detached() &&
      (this.loro.attach(), (this.isCheckout = !1), this.inform());
  }
  setSync(t) {
    this.sync = t;
  }
  subscribe(t) {
    this.onChanges.push(t);
  }
  inform() {
    const t = this.tree.getDeepValue(),
      n = JA({
        flatData: t,
        getKey: (r) => r.id,
        getParentKey: (r) => r.parent,
        rootKey: S3,
      });
    (this.todos = n.map((r) => this.getTodos(r))),
      this.onChanges.forEach(function (r) {
        r();
      });
  }
  addChildTodo(t, n) {
    const r = this.tree.create(n),
      o = this.tree.getMeta(r);
    return (
      o.set("title", t),
      o.set("completed", !1),
      o.set("expanded", !0),
      this.loro.commit(),
      r
    );
  }
  addRootTodo(t) {
    const n = this.tree.create(),
      r = this.tree.getMeta(n);
    return (
      r.set("title", t),
      r.set("completed", !1),
      r.set("expanded", !0),
      this.loro.commit(),
      n
    );
  }
  asRoot(t) {
    this.tree.root(t), this.loro.commit();
  }
  move(t, n) {
    this.tree.mov(t, n), this.loro.commit();
  }
  changeExpanded(t, n) {
    this.tree.getMeta(t).set("expanded", n), this.loro.commit();
  }
  toggleAll(t) {
    const n = this.tree.nodes;
    for (const r of n) this.tree.getMeta(r).set("completed", t);
    this.loro.commit();
  }
  toggle(t) {
    const n = this.tree.getMeta(t),
      r = n.get("completed");
    n.set("completed", !r), this.loro.commit();
  }
  destroy(t) {
    this.tree.delete(t), this.loro.commit();
  }
  save(t, n) {
    this.tree.getMeta(t).set("title", n), this.loro.commit();
  }
  updateFromPeer(t) {
    if (this.sync) {
      const n = this.loro.version(),
        r = t.loro.version();
      if (!x3(n, r)) {
        const o = t.loro.exportFrom(n);
        this.loro.import(o);
      }
    }
  }
  clearCompleted() {
    this.todos = this.todos.filter(function (n) {
      return !n.completed;
    });
    const t = this.tree.nodes;
    for (const n of t)
      this.tree.getMeta(n).get("completed") && this.tree.delete(n);
    this.loro.commit();
  }
}
function x3(e, t) {
  if (e.byteLength !== t.byteLength) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
const T3 = "loro_wasm_bg-8ddc7d65.wasm",
  b3 = async (e = {}, t) => {
    let n;
    if (t.startsWith("data:")) {
      const r = t.replace(/^data:.*?base64,/, "");
      let o;
      if (typeof Buffer == "function" && typeof Buffer.from == "function")
        o = Buffer.from(r, "base64");
      else if (typeof atob == "function") {
        const u = atob(r);
        o = new Uint8Array(u.length);
        for (let s = 0; s < u.length; s++) o[s] = u.charCodeAt(s);
      } else throw new Error("Cannot decode base64-encoded data URL");
      n = await WebAssembly.instantiate(o, e);
    } else {
      const r = await fetch(t),
        o = r.headers.get("Content-Type") || "";
      if (
        "instantiateStreaming" in WebAssembly &&
        o.startsWith("application/wasm")
      )
        n = await WebAssembly.instantiateStreaming(r, e);
      else {
        const u = await r.arrayBuffer();
        n = await WebAssembly.instantiate(u, e);
      }
    }
    return n.instance.exports;
  };
let E;
function C3(e) {
  E = e;
}
const an = new Array(128).fill(void 0);
an.push(void 0, null, !0, !1);
function oe(e) {
  return an[e];
}
let bs = an.length;
function I3(e) {
  e < 132 || ((an[e] = bs), (bs = e));
}
function ne(e) {
  const t = oe(e);
  return I3(e), t;
}
function ie(e) {
  bs === an.length && an.push(an.length + 1);
  const t = bs;
  return (bs = an[t]), (an[t] = e), t;
}
const E3 =
  typeof TextDecoder > "u"
    ? (0, module.require)("util").TextDecoder
    : TextDecoder;
let IT = new E3("utf-8", { ignoreBOM: !0, fatal: !0 });
IT.decode();
let Dc = null;
function ru() {
  return (
    (Dc === null || Dc.byteLength === 0) &&
      (Dc = new Uint8Array(E.memory.buffer)),
    Dc
  );
}
function Ai(e, t) {
  return (e = e >>> 0), IT.decode(ru().subarray(e, e + t));
}
function Xo(e) {
  return e == null;
}
let Oc = null;
function D3() {
  return (
    (Oc === null || Oc.byteLength === 0) &&
      (Oc = new Float64Array(E.memory.buffer)),
    Oc
  );
}
let kc = null;
function H() {
  return (
    (kc === null || kc.byteLength === 0) &&
      (kc = new Int32Array(E.memory.buffer)),
    kc
  );
}
let bt = 0;
const O3 =
  typeof TextEncoder > "u"
    ? (0, module.require)("util").TextEncoder
    : TextEncoder;
let ef = new O3("utf-8");
const k3 =
  typeof ef.encodeInto == "function"
    ? function (e, t) {
        return ef.encodeInto(e, t);
      }
    : function (e, t) {
        const n = ef.encode(e);
        return t.set(n), { read: e.length, written: n.length };
      };
function Rn(e, t, n) {
  if (n === void 0) {
    const c = ef.encode(e),
      f = t(c.length) >>> 0;
    return (
      ru()
        .subarray(f, f + c.length)
        .set(c),
      (bt = c.length),
      f
    );
  }
  let r = e.length,
    o = t(r) >>> 0;
  const u = ru();
  let s = 0;
  for (; s < r; s++) {
    const c = e.charCodeAt(s);
    if (c > 127) break;
    u[o + s] = c;
  }
  if (s !== r) {
    s !== 0 && (e = e.slice(s)), (o = n(o, r, (r = s + e.length * 3)) >>> 0);
    const c = ru().subarray(o + s, o + r),
      f = k3(e, c);
    s += f.written;
  }
  return (bt = s), o;
}
let Pc = null;
function P3() {
  return (
    (Pc === null || Pc.byteLength === 0) &&
      (Pc = new BigInt64Array(E.memory.buffer)),
    Pc
  );
}
function Ug(e) {
  const t = typeof e;
  if (t == "number" || t == "boolean" || e == null) return `${e}`;
  if (t == "string") return `"${e}"`;
  if (t == "symbol") {
    const o = e.description;
    return o == null ? "Symbol" : `Symbol(${o})`;
  }
  if (t == "function") {
    const o = e.name;
    return typeof o == "string" && o.length > 0 ? `Function(${o})` : "Function";
  }
  if (Array.isArray(e)) {
    const o = e.length;
    let u = "[";
    o > 0 && (u += Ug(e[0]));
    for (let s = 1; s < o; s++) u += ", " + Ug(e[s]);
    return (u += "]"), u;
  }
  const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
  let r;
  if (n.length > 1) r = n[1];
  else return toString.call(e);
  if (r == "Object")
    try {
      return "Object(" + JSON.stringify(e) + ")";
    } catch {
      return "Object";
    }
  return e instanceof Error
    ? `${e.name}: ${e.message}
${e.stack}`
    : r;
}
function R3() {
  E.setPanicHook();
}
function Hw(e, t) {
  const n = t(e.length * 1) >>> 0;
  return ru().set(e, n / 1), (bt = e.length), n;
}
let Rc = null;
function ET() {
  return (
    (Rc === null || Rc.byteLength === 0) &&
      (Rc = new Uint32Array(E.memory.buffer)),
    Rc
  );
}
function Mh(e, t) {
  const n = t(e.length * 4) >>> 0,
    r = ET();
  for (let o = 0; o < e.length; o++) r[n / 4 + o] = ie(e[o]);
  return (bt = e.length), n;
}
let Ci = 128;
function Ml(e) {
  if (Ci == 1) throw new Error("out of js stack");
  return (an[--Ci] = e), Ci;
}
function Nc(e, t) {
  return (e = e >>> 0), ru().subarray(e / 1, e / 1 + t);
}
function fs(e, t) {
  e = e >>> 0;
  const r = ET().subarray(e / 4, e / 4 + t),
    o = [];
  for (let u = 0; u < r.length; u++) o.push(ne(r[u]));
  return o;
}
function ho(e, t) {
  if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
  return e.ptr;
}
function N3(e) {
  return () => {
    throw new Error(`${e} is not defined`);
  };
}
function or(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    E.__wbindgen_exn_store(ie(n));
  }
}
const Bw = new FinalizationRegistry((e) => E.__wbg_loro_free(e >>> 0));
class cn {
  static __wrap(t) {
    t = t >>> 0;
    const n = Object.create(cn.prototype);
    return (n.__wbg_ptr = t), Bw.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), Bw.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    E.__wbg_loro_free(t);
  }
  constructor() {
    const t = E.loro_new();
    return cn.__wrap(t);
  }
  static fromSnapshot(t) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16),
        s = Hw(t, E.__wbindgen_malloc),
        c = bt;
      E.loro_fromSnapshot(u, s, c);
      var n = H()[u / 4 + 0],
        r = H()[u / 4 + 1],
        o = H()[u / 4 + 2];
      if (o) throw ne(r);
      return cn.__wrap(n);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  attach() {
    E.loro_attach(this.__wbg_ptr);
  }
  is_detached() {
    return E.loro_is_detached(this.__wbg_ptr) !== 0;
  }
  checkoutToLatest() {
    try {
      const r = E.__wbindgen_add_to_stack_pointer(-16);
      E.loro_checkoutToLatest(r, this.__wbg_ptr);
      var t = H()[r / 4 + 0],
        n = H()[r / 4 + 1];
      if (n) throw ne(t);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  checkout(t) {
    try {
      const o = E.__wbindgen_add_to_stack_pointer(-16),
        u = Mh(t, E.__wbindgen_malloc),
        s = bt;
      E.loro_checkout(o, this.__wbg_ptr, u, s);
      var n = H()[o / 4 + 0],
        r = H()[o / 4 + 1];
      if (r) throw ne(n);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get peerId() {
    const t = E.loro_peerId(this.__wbg_ptr);
    return BigInt.asUintN(64, t);
  }
  get peerIdStr() {
    let t, n;
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16);
      E.loro_peerIdStr(u, this.__wbg_ptr);
      var r = H()[u / 4 + 0],
        o = H()[u / 4 + 1];
      return (t = r), (n = o), Ai(r, o);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16), E.__wbindgen_free(t, n);
    }
  }
  setPeerId(t) {
    try {
      const o = E.__wbindgen_add_to_stack_pointer(-16);
      E.loro_setPeerId(o, this.__wbg_ptr, t);
      var n = H()[o / 4 + 0],
        r = H()[o / 4 + 1];
      if (r) throw ne(n);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  commit(t) {
    var n = Xo(t) ? 0 : Rn(t, E.__wbindgen_malloc, E.__wbindgen_realloc),
      r = bt;
    E.loro_commit(this.__wbg_ptr, n, r);
  }
  getText(t) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16);
      E.loro_getText(u, this.__wbg_ptr, Ml(t));
      var n = H()[u / 4 + 0],
        r = H()[u / 4 + 1],
        o = H()[u / 4 + 2];
      if (o) throw ne(r);
      return Sd.__wrap(n);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16), (an[Ci++] = void 0);
    }
  }
  getMap(t) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16);
      E.loro_getMap(u, this.__wbg_ptr, Ml(t));
      var n = H()[u / 4 + 0],
        r = H()[u / 4 + 1],
        o = H()[u / 4 + 2];
      if (o) throw ne(r);
      return ol.__wrap(n);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16), (an[Ci++] = void 0);
    }
  }
  getList(t) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16);
      E.loro_getList(u, this.__wbg_ptr, Ml(t));
      var n = H()[u / 4 + 0],
        r = H()[u / 4 + 1],
        o = H()[u / 4 + 2];
      if (o) throw ne(r);
      return vu.__wrap(n);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16), (an[Ci++] = void 0);
    }
  }
  getTree(t) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16);
      E.loro_getTree(u, this.__wbg_ptr, Ml(t));
      var n = H()[u / 4 + 0],
        r = H()[u / 4 + 1],
        o = H()[u / 4 + 2];
      if (o) throw ne(r);
      return xd.__wrap(n);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16), (an[Ci++] = void 0);
    }
  }
  getContainerById(t) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16);
      E.loro_getContainerById(u, this.__wbg_ptr, ie(t));
      var n = H()[u / 4 + 0],
        r = H()[u / 4 + 1],
        o = H()[u / 4 + 2];
      if (o) throw ne(r);
      return ne(n);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  version() {
    try {
      const o = E.__wbindgen_add_to_stack_pointer(-16);
      E.loro_version(o, this.__wbg_ptr);
      var t = H()[o / 4 + 0],
        n = H()[o / 4 + 1],
        r = Nc(t, n).slice();
      return E.__wbindgen_free(t, n * 1), r;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  oplogVersion() {
    try {
      const o = E.__wbindgen_add_to_stack_pointer(-16);
      E.loro_oplogVersion(o, this.__wbg_ptr);
      var t = H()[o / 4 + 0],
        n = H()[o / 4 + 1],
        r = Nc(t, n).slice();
      return E.__wbindgen_free(t, n * 1), r;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  frontiers() {
    try {
      const o = E.__wbindgen_add_to_stack_pointer(-16);
      E.loro_frontiers(o, this.__wbg_ptr);
      var t = H()[o / 4 + 0],
        n = H()[o / 4 + 1],
        r = fs(t, n).slice();
      return E.__wbindgen_free(t, n * 4), r;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  oplog_frontiers() {
    try {
      const o = E.__wbindgen_add_to_stack_pointer(-16);
      E.loro_oplog_frontiers(o, this.__wbg_ptr);
      var t = H()[o / 4 + 0],
        n = H()[o / 4 + 1],
        r = fs(t, n).slice();
      return E.__wbindgen_free(t, n * 4), r;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  cmpFrontiers(t) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16),
        s = Mh(t, E.__wbindgen_malloc),
        c = bt;
      E.loro_cmpFrontiers(u, this.__wbg_ptr, s, c);
      var n = H()[u / 4 + 0],
        r = H()[u / 4 + 1],
        o = H()[u / 4 + 2];
      if (o) throw ne(r);
      return n;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  exportSnapshot() {
    try {
      const s = E.__wbindgen_add_to_stack_pointer(-16);
      E.loro_exportSnapshot(s, this.__wbg_ptr);
      var t = H()[s / 4 + 0],
        n = H()[s / 4 + 1],
        r = H()[s / 4 + 2],
        o = H()[s / 4 + 3];
      if (o) throw ne(r);
      var u = Nc(t, n).slice();
      return E.__wbindgen_free(t, n * 1), u;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  exportFrom(t) {
    try {
      const c = E.__wbindgen_add_to_stack_pointer(-16);
      E.loro_exportFrom(c, this.__wbg_ptr, Ml(t));
      var n = H()[c / 4 + 0],
        r = H()[c / 4 + 1],
        o = H()[c / 4 + 2],
        u = H()[c / 4 + 3];
      if (u) throw ne(o);
      var s = Nc(n, r).slice();
      return E.__wbindgen_free(n, r * 1), s;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16), (an[Ci++] = void 0);
    }
  }
  import(t) {
    try {
      const o = E.__wbindgen_add_to_stack_pointer(-16),
        u = Hw(t, E.__wbindgen_malloc),
        s = bt;
      E.loro_import(o, this.__wbg_ptr, u, s);
      var n = H()[o / 4 + 0],
        r = H()[o / 4 + 1];
      if (r) throw ne(n);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  importUpdateBatch(t) {
    try {
      const o = E.__wbindgen_add_to_stack_pointer(-16);
      E.loro_importUpdateBatch(o, this.__wbg_ptr, ie(t));
      var n = H()[o / 4 + 0],
        r = H()[o / 4 + 1];
      if (r) throw ne(n);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  toJson() {
    try {
      const o = E.__wbindgen_add_to_stack_pointer(-16);
      E.loro_toJson(o, this.__wbg_ptr);
      var t = H()[o / 4 + 0],
        n = H()[o / 4 + 1],
        r = H()[o / 4 + 2];
      if (r) throw ne(n);
      return ne(t);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  subscribe(t) {
    return E.loro_subscribe(this.__wbg_ptr, ie(t)) >>> 0;
  }
  unsubscribe(t) {
    E.loro_unsubscribe(this.__wbg_ptr, t);
  }
  debugHistory() {
    E.loro_debugHistory(this.__wbg_ptr);
  }
  getAllChanges() {
    const t = E.loro_getAllChanges(this.__wbg_ptr);
    return ne(t);
  }
  getChangeAt(t) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16);
      E.loro_getChangeAt(u, this.__wbg_ptr, ie(t));
      var n = H()[u / 4 + 0],
        r = H()[u / 4 + 1],
        o = H()[u / 4 + 2];
      if (o) throw ne(r);
      return ne(n);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  getOpsInChange(t) {
    try {
      const c = E.__wbindgen_add_to_stack_pointer(-16);
      E.loro_getOpsInChange(c, this.__wbg_ptr, ie(t));
      var n = H()[c / 4 + 0],
        r = H()[c / 4 + 1],
        o = H()[c / 4 + 2],
        u = H()[c / 4 + 3];
      if (u) throw ne(o);
      var s = fs(n, r).slice();
      return E.__wbindgen_free(n, r * 4), s;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  frontiersToVV(t) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16),
        s = Mh(t, E.__wbindgen_malloc),
        c = bt;
      E.loro_frontiersToVV(u, this.__wbg_ptr, s, c);
      var n = H()[u / 4 + 0],
        r = H()[u / 4 + 1],
        o = H()[u / 4 + 2];
      if (o) throw ne(r);
      return ne(n);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  vvToFrontiers(t) {
    try {
      const c = E.__wbindgen_add_to_stack_pointer(-16);
      E.loro_vvToFrontiers(c, this.__wbg_ptr, Ml(t));
      var n = H()[c / 4 + 0],
        r = H()[c / 4 + 1],
        o = H()[c / 4 + 2],
        u = H()[c / 4 + 3];
      if (u) throw ne(o);
      var s = fs(n, r).slice();
      return E.__wbindgen_free(n, r * 4), s;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16), (an[Ci++] = void 0);
    }
  }
  getDeepValue() {
    const t = E.loro_getDeepValue(this.__wbg_ptr);
    return ne(t);
  }
}
const Uw = new FinalizationRegistry((e) => E.__wbg_lorolist_free(e >>> 0));
class vu {
  static __wrap(t) {
    t = t >>> 0;
    const n = Object.create(vu.prototype);
    return (n.__wbg_ptr = t), Uw.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), Uw.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    E.__wbg_lorolist_free(t);
  }
  insert(t, n) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16);
      E.lorolist_insert(u, this.__wbg_ptr, t, ie(n));
      var r = H()[u / 4 + 0],
        o = H()[u / 4 + 1];
      if (o) throw ne(r);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  delete(t, n) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16);
      E.lorolist_delete(u, this.__wbg_ptr, t, n);
      var r = H()[u / 4 + 0],
        o = H()[u / 4 + 1];
      if (o) throw ne(r);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get(t) {
    const n = E.lorolist_get(this.__wbg_ptr, t);
    return ne(n);
  }
  get id() {
    const t = E.lorolist_id(this.__wbg_ptr);
    return ne(t);
  }
  get value() {
    const t = E.lorolist_value(this.__wbg_ptr);
    return ne(t);
  }
  getDeepValue() {
    const t = E.lorolist_getDeepValue(this.__wbg_ptr);
    return ne(t);
  }
  insertContainer(t, n) {
    try {
      const s = E.__wbindgen_add_to_stack_pointer(-16),
        c = Rn(n, E.__wbindgen_malloc, E.__wbindgen_realloc),
        f = bt;
      E.lorolist_insertContainer(s, this.__wbg_ptr, t, c, f);
      var r = H()[s / 4 + 0],
        o = H()[s / 4 + 1],
        u = H()[s / 4 + 2];
      if (u) throw ne(o);
      return ne(r);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  subscribe(t, n) {
    try {
      const s = E.__wbindgen_add_to_stack_pointer(-16);
      ho(t, cn), E.lorolist_subscribe(s, this.__wbg_ptr, t.__wbg_ptr, ie(n));
      var r = H()[s / 4 + 0],
        o = H()[s / 4 + 1],
        u = H()[s / 4 + 2];
      if (u) throw ne(o);
      return r >>> 0;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  unsubscribe(t, n) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16);
      ho(t, cn), E.lorolist_unsubscribe(u, this.__wbg_ptr, t.__wbg_ptr, n);
      var r = H()[u / 4 + 0],
        o = H()[u / 4 + 1];
      if (o) throw ne(r);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get length() {
    return E.lorolist_length(this.__wbg_ptr) >>> 0;
  }
}
const jw = new FinalizationRegistry((e) => E.__wbg_loromap_free(e >>> 0));
class ol {
  static __wrap(t) {
    t = t >>> 0;
    const n = Object.create(ol.prototype);
    return (n.__wbg_ptr = t), jw.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), jw.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    E.__wbg_loromap_free(t);
  }
  set(t, n) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16),
        s = Rn(t, E.__wbindgen_malloc, E.__wbindgen_realloc),
        c = bt;
      E.loromap_set(u, this.__wbg_ptr, s, c, ie(n));
      var r = H()[u / 4 + 0],
        o = H()[u / 4 + 1];
      if (o) throw ne(r);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  delete(t) {
    try {
      const o = E.__wbindgen_add_to_stack_pointer(-16),
        u = Rn(t, E.__wbindgen_malloc, E.__wbindgen_realloc),
        s = bt;
      E.loromap_delete(o, this.__wbg_ptr, u, s);
      var n = H()[o / 4 + 0],
        r = H()[o / 4 + 1];
      if (r) throw ne(n);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get(t) {
    const n = Rn(t, E.__wbindgen_malloc, E.__wbindgen_realloc),
      r = bt,
      o = E.loromap_get(this.__wbg_ptr, n, r);
    return ne(o);
  }
  get value() {
    const t = E.loromap_value(this.__wbg_ptr);
    return ne(t);
  }
  get id() {
    const t = E.loromap_id(this.__wbg_ptr);
    return ne(t);
  }
  getDeepValue() {
    const t = E.loromap_getDeepValue(this.__wbg_ptr);
    return ne(t);
  }
  setContainer(t, n) {
    try {
      const s = E.__wbindgen_add_to_stack_pointer(-16),
        c = Rn(t, E.__wbindgen_malloc, E.__wbindgen_realloc),
        f = bt,
        p = Rn(n, E.__wbindgen_malloc, E.__wbindgen_realloc),
        _ = bt;
      E.loromap_setContainer(s, this.__wbg_ptr, c, f, p, _);
      var r = H()[s / 4 + 0],
        o = H()[s / 4 + 1],
        u = H()[s / 4 + 2];
      if (u) throw ne(o);
      return ne(r);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  subscribe(t, n) {
    try {
      const s = E.__wbindgen_add_to_stack_pointer(-16);
      ho(t, cn), E.loromap_subscribe(s, this.__wbg_ptr, t.__wbg_ptr, ie(n));
      var r = H()[s / 4 + 0],
        o = H()[s / 4 + 1],
        u = H()[s / 4 + 2];
      if (u) throw ne(o);
      return r >>> 0;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  unsubscribe(t, n) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16);
      ho(t, cn), E.lorolist_unsubscribe(u, this.__wbg_ptr, t.__wbg_ptr, n);
      var r = H()[u / 4 + 0],
        o = H()[u / 4 + 1];
      if (o) throw ne(r);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get size() {
    return E.loromap_size(this.__wbg_ptr) >>> 0;
  }
}
const Ww = new FinalizationRegistry((e) => E.__wbg_lorotext_free(e >>> 0));
class Sd {
  static __wrap(t) {
    t = t >>> 0;
    const n = Object.create(Sd.prototype);
    return (n.__wbg_ptr = t), Ww.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), Ww.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    E.__wbg_lorotext_free(t);
  }
  insert(t, n) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16),
        s = Rn(n, E.__wbindgen_malloc, E.__wbindgen_realloc),
        c = bt;
      E.lorotext_insert(u, this.__wbg_ptr, t, s, c);
      var r = H()[u / 4 + 0],
        o = H()[u / 4 + 1];
      if (o) throw ne(r);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  delete(t, n) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16);
      E.lorotext_delete(u, this.__wbg_ptr, t, n);
      var r = H()[u / 4 + 0],
        o = H()[u / 4 + 1];
      if (o) throw ne(r);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  mark(t, n, r) {
    try {
      const s = E.__wbindgen_add_to_stack_pointer(-16),
        c = Rn(n, E.__wbindgen_malloc, E.__wbindgen_realloc),
        f = bt;
      E.lorotext_mark(s, this.__wbg_ptr, ie(t), c, f, ie(r));
      var o = H()[s / 4 + 0],
        u = H()[s / 4 + 1];
      if (u) throw ne(o);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  unmark(t, n) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16),
        s = Rn(n, E.__wbindgen_malloc, E.__wbindgen_realloc),
        c = bt;
      E.lorotext_unmark(u, this.__wbg_ptr, ie(t), s, c);
      var r = H()[u / 4 + 0],
        o = H()[u / 4 + 1];
      if (o) throw ne(r);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  toString() {
    let t, n;
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16);
      E.lorotext_toString(u, this.__wbg_ptr);
      var r = H()[u / 4 + 0],
        o = H()[u / 4 + 1];
      return (t = r), (n = o), Ai(r, o);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16), E.__wbindgen_free(t, n);
    }
  }
  toDelta() {
    const t = E.lorotext_toDelta(this.__wbg_ptr);
    return ne(t);
  }
  get id() {
    const t = E.lorotext_id(this.__wbg_ptr);
    return ne(t);
  }
  get length() {
    return E.lorotext_length(this.__wbg_ptr) >>> 0;
  }
  subscribe(t, n) {
    try {
      const s = E.__wbindgen_add_to_stack_pointer(-16);
      ho(t, cn), E.lorotext_subscribe(s, this.__wbg_ptr, t.__wbg_ptr, ie(n));
      var r = H()[s / 4 + 0],
        o = H()[s / 4 + 1],
        u = H()[s / 4 + 2];
      if (u) throw ne(o);
      return r >>> 0;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  unsubscribe(t, n) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16);
      ho(t, cn), E.lorolist_unsubscribe(u, this.__wbg_ptr, t.__wbg_ptr, n);
      var r = H()[u / 4 + 0],
        o = H()[u / 4 + 1];
      if (o) throw ne(r);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  applyDelta(t) {
    try {
      const o = E.__wbindgen_add_to_stack_pointer(-16);
      E.lorotext_applyDelta(o, this.__wbg_ptr, ie(t));
      var n = H()[o / 4 + 0],
        r = H()[o / 4 + 1];
      if (r) throw ne(n);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
const Vw = new FinalizationRegistry((e) => E.__wbg_lorotree_free(e >>> 0));
class xd {
  static __wrap(t) {
    t = t >>> 0;
    const n = Object.create(xd.prototype);
    return (n.__wbg_ptr = t), Vw.register(n, n.__wbg_ptr, n), n;
  }
  __destroy_into_raw() {
    const t = this.__wbg_ptr;
    return (this.__wbg_ptr = 0), Vw.unregister(this), t;
  }
  free() {
    const t = this.__destroy_into_raw();
    E.__wbg_lorotree_free(t);
  }
  create(t) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16);
      E.lorotree_create(u, this.__wbg_ptr, Xo(t) ? 0 : ie(t));
      var n = H()[u / 4 + 0],
        r = H()[u / 4 + 1],
        o = H()[u / 4 + 2];
      if (o) throw ne(r);
      return ne(n);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  mov(t, n) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16);
      E.lorotree_mov(u, this.__wbg_ptr, ie(t), ie(n));
      var r = H()[u / 4 + 0],
        o = H()[u / 4 + 1];
      if (o) throw ne(r);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  delete(t) {
    try {
      const o = E.__wbindgen_add_to_stack_pointer(-16);
      E.lorotree_delete(o, this.__wbg_ptr, ie(t));
      var n = H()[o / 4 + 0],
        r = H()[o / 4 + 1];
      if (r) throw ne(n);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  root(t) {
    try {
      const o = E.__wbindgen_add_to_stack_pointer(-16);
      E.lorotree_root(o, this.__wbg_ptr, ie(t));
      var n = H()[o / 4 + 0],
        r = H()[o / 4 + 1];
      if (r) throw ne(n);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  getMeta(t) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16);
      E.lorotree_getMeta(u, this.__wbg_ptr, ie(t));
      var n = H()[u / 4 + 0],
        r = H()[u / 4 + 1],
        o = H()[u / 4 + 2];
      if (o) throw ne(r);
      return ol.__wrap(n);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get id() {
    const t = E.lorotree_id(this.__wbg_ptr);
    return ne(t);
  }
  get value() {
    const t = E.lorotree_value(this.__wbg_ptr);
    return ne(t);
  }
  getDeepValue() {
    const t = E.lorotree_getDeepValue(this.__wbg_ptr);
    return ne(t);
  }
  get nodes() {
    try {
      const o = E.__wbindgen_add_to_stack_pointer(-16);
      E.lorotree_nodes(o, this.__wbg_ptr);
      var t = H()[o / 4 + 0],
        n = H()[o / 4 + 1],
        r = fs(t, n).slice();
      return E.__wbindgen_free(t, n * 4), r;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  parent(t) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16);
      E.lorotree_parent(u, this.__wbg_ptr, ie(t));
      var n = H()[u / 4 + 0],
        r = H()[u / 4 + 1],
        o = H()[u / 4 + 2];
      if (o) throw ne(r);
      return ne(n);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  subscribe(t, n) {
    try {
      const s = E.__wbindgen_add_to_stack_pointer(-16);
      ho(t, cn), E.lorotree_subscribe(s, this.__wbg_ptr, t.__wbg_ptr, ie(n));
      var r = H()[s / 4 + 0],
        o = H()[s / 4 + 1],
        u = H()[s / 4 + 2];
      if (u) throw ne(o);
      return r >>> 0;
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
  unsubscribe(t, n) {
    try {
      const u = E.__wbindgen_add_to_stack_pointer(-16);
      ho(t, cn), E.lorolist_unsubscribe(u, this.__wbg_ptr, t.__wbg_ptr, n);
      var r = H()[u / 4 + 0],
        o = H()[u / 4 + 1];
      if (o) throw ne(r);
    } finally {
      E.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
new FinalizationRegistry((e) => E.__wbg_prelimlist_free(e >>> 0));
new FinalizationRegistry((e) => E.__wbg_prelimmap_free(e >>> 0));
new FinalizationRegistry((e) => E.__wbg_prelimtext_free(e >>> 0));
function L3(e) {
  ne(e);
}
function A3(e) {
  const t = oe(e);
  return ie(t);
}
function M3(e, t) {
  const n = Ai(e, t);
  return ie(n);
}
function F3(e) {
  const t = BigInt.asUintN(64, e);
  return ie(t);
}
function z3(e, t) {
  return oe(e) === oe(t);
}
function $3(e, t) {
  const n = oe(t),
    r = typeof n == "number" ? n : void 0;
  (D3()[e / 8 + 1] = Xo(r) ? 0 : r), (H()[e / 4 + 0] = !Xo(r));
}
function H3(e) {
  return ie(e);
}
function B3(e) {
  return typeof oe(e) == "string";
}
function U3(e, t) {
  const n = oe(t),
    r = typeof n == "string" ? n : void 0;
  var o = Xo(r) ? 0 : Rn(r, E.__wbindgen_malloc, E.__wbindgen_realloc),
    u = bt;
  (H()[e / 4 + 1] = u), (H()[e / 4 + 0] = o);
}
function j3(e) {
  const t = typeof oe(e);
  return ie(t);
}
function W3(e, t) {
  console.error(Ai(e, t));
}
function V3(e) {
  const t = Sd.__wrap(e);
  return ie(t);
}
function G3(e) {
  const t = ol.__wrap(e);
  return ie(t);
}
function K3(e) {
  const t = vu.__wrap(e);
  return ie(t);
}
function Y3(e) {
  const t = xd.__wrap(e);
  return ie(t);
}
function Q3(e) {
  return oe(e) === null;
}
function q3(e) {
  return oe(e) === void 0;
}
function X3(e, t) {
  console.log(Ai(e, t));
}
function Z3(e, t) {
  const n = new Error(Ai(e, t));
  return ie(n);
}
function J3(e) {
  const t = oe(e);
  return typeof t == "boolean" ? (t ? 1 : 0) : 2;
}
function eM(e) {
  return typeof oe(e) == "bigint";
}
function tM(e) {
  return ie(e);
}
function nM(e) {
  const t = oe(e);
  return typeof t == "object" && t !== null;
}
function rM(e, t) {
  return oe(e) in oe(t);
}
function iM(e, t) {
  return oe(e) == oe(t);
}
function oM(e, t) {
  const n = String(oe(t)),
    r = Rn(n, E.__wbindgen_malloc, E.__wbindgen_realloc),
    o = bt;
  (H()[e / 4 + 1] = o), (H()[e / 4 + 0] = r);
}
function lM(e, t) {
  const n = oe(e)[oe(t)];
  return ie(n);
}
function uM(e, t, n) {
  oe(e)[ne(t)] = ne(n);
}
function sM() {
  const e = new Error();
  return ie(e);
}
function aM(e, t) {
  const n = oe(t).stack,
    r = Rn(n, E.__wbindgen_malloc, E.__wbindgen_realloc),
    o = bt;
  (H()[e / 4 + 1] = o), (H()[e / 4 + 0] = r);
}
function cM(e, t) {
  let n, r;
  try {
    (n = e), (r = t), console.error(Ai(e, t));
  } finally {
    E.__wbindgen_free(n, r);
  }
}
const fM = typeof Date.now == "function" ? Date.now : N3("Date.now");
function dM(e) {
  const t = oe(e).crypto;
  return ie(t);
}
function pM(e) {
  const t = oe(e).process;
  return ie(t);
}
function hM(e) {
  const t = oe(e).versions;
  return ie(t);
}
function gM(e) {
  const t = oe(e).node;
  return ie(t);
}
function _M(e) {
  const t = oe(e).msCrypto;
  return ie(t);
}
function vM() {
  return or(function () {
    const e = module.require;
    return ie(e);
  }, arguments);
}
function mM(e) {
  return typeof oe(e) == "function";
}
function yM() {
  return or(function (e, t) {
    oe(e).getRandomValues(oe(t));
  }, arguments);
}
function wM() {
  return or(function (e, t) {
    oe(e).randomFillSync(ne(t));
  }, arguments);
}
function SM(e, t) {
  const n = oe(e)[t >>> 0];
  return ie(n);
}
function xM(e) {
  return oe(e).length;
}
function TM() {
  const e = new Array();
  return ie(e);
}
function bM(e, t) {
  const n = new Function(Ai(e, t));
  return ie(n);
}
function CM() {
  return ie(new Map());
}
function IM(e) {
  const t = oe(e).next;
  return ie(t);
}
function EM() {
  return or(function (e) {
    const t = oe(e).next();
    return ie(t);
  }, arguments);
}
function DM(e) {
  return oe(e).done;
}
function OM(e) {
  const t = oe(e).value;
  return ie(t);
}
function kM() {
  return ie(Symbol.iterator);
}
function PM() {
  return or(function (e, t) {
    const n = Reflect.get(oe(e), oe(t));
    return ie(n);
  }, arguments);
}
function RM() {
  return or(function (e, t) {
    const n = oe(e).call(oe(t));
    return ie(n);
  }, arguments);
}
function NM() {
  const e = new Object();
  return ie(e);
}
function LM() {
  return or(function () {
    const e = self.self;
    return ie(e);
  }, arguments);
}
function AM() {
  return or(function () {
    const e = window.window;
    return ie(e);
  }, arguments);
}
function MM() {
  return or(function () {
    const e = globalThis.globalThis;
    return ie(e);
  }, arguments);
}
function FM() {
  return or(function () {
    const e = global.global;
    return ie(e);
  }, arguments);
}
function zM(e) {
  const t = new Array(e >>> 0);
  return ie(t);
}
function $M(e, t, n) {
  oe(e)[t >>> 0] = ne(n);
}
function HM(e) {
  const t = Array.from(oe(e));
  return ie(t);
}
function BM(e) {
  return Array.isArray(oe(e));
}
function UM(e) {
  let t;
  try {
    t = oe(e) instanceof ArrayBuffer;
  } catch {
    t = !1;
  }
  return t;
}
function jM() {
  return or(function (e, t, n) {
    const r = oe(e).call(oe(t), oe(n));
    return ie(r);
  }, arguments);
}
function WM(e, t, n) {
  const r = oe(e).set(oe(t), oe(n));
  return ie(r);
}
function VM(e) {
  const t = oe(e).entries();
  return ie(t);
}
function GM(e) {
  return Number.isSafeInteger(oe(e));
}
function KM(e) {
  const t = Object.entries(oe(e));
  return ie(t);
}
function YM(e) {
  const t = oe(e).buffer;
  return ie(t);
}
function QM(e, t, n) {
  const r = new Uint8Array(oe(e), t >>> 0, n >>> 0);
  return ie(r);
}
function qM(e) {
  const t = new Uint8Array(oe(e));
  return ie(t);
}
function XM(e, t, n) {
  oe(e).set(oe(t), n >>> 0);
}
function ZM(e) {
  return oe(e).length;
}
function JM(e) {
  let t;
  try {
    t = oe(e) instanceof Uint8Array;
  } catch {
    t = !1;
  }
  return t;
}
function e6(e) {
  const t = new Uint8Array(e >>> 0);
  return ie(t);
}
function t6(e, t, n) {
  const r = oe(e).subarray(t >>> 0, n >>> 0);
  return ie(r);
}
function n6(e, t, n) {
  oe(e)[t >>> 0] = n;
}
function r6() {
  return or(function (e) {
    const t = Reflect.ownKeys(oe(e));
    return ie(t);
  }, arguments);
}
function i6() {
  return or(function (e, t, n) {
    return Reflect.set(oe(e), oe(t), oe(n));
  }, arguments);
}
function o6(e, t) {
  const n = oe(t),
    r = typeof n == "bigint" ? n : void 0;
  (P3()[e / 8 + 1] = Xo(r) ? BigInt(0) : r), (H()[e / 4 + 0] = !Xo(r));
}
function l6(e, t) {
  const n = Ug(oe(t)),
    r = Rn(n, E.__wbindgen_malloc, E.__wbindgen_realloc),
    o = bt;
  (H()[e / 4 + 1] = o), (H()[e / 4 + 0] = r);
}
function u6(e, t) {
  throw new Error(Ai(e, t));
}
function s6() {
  const e = E.memory;
  return ie(e);
}
URL = globalThis.URL;
const G = await b3(
    {
      "./loro_wasm_bg.js": {
        __wbindgen_object_drop_ref: L3,
        __wbindgen_object_clone_ref: A3,
        __wbindgen_string_new: M3,
        __wbindgen_bigint_from_u64: F3,
        __wbindgen_jsval_eq: z3,
        __wbindgen_number_get: $3,
        __wbindgen_number_new: H3,
        __wbindgen_is_string: B3,
        __wbindgen_string_get: U3,
        __wbindgen_typeof: j3,
        __wbg_error_c8c2cca30a630316: W3,
        __wbg_lorotext_new: V3,
        __wbg_loromap_new: G3,
        __wbg_lorolist_new: K3,
        __wbg_lorotree_new: Y3,
        __wbindgen_is_null: Q3,
        __wbindgen_is_undefined: q3,
        __wbg_log_d8fdbde28117925d: X3,
        __wbindgen_error_new: Z3,
        __wbindgen_boolean_get: J3,
        __wbindgen_is_bigint: eM,
        __wbindgen_bigint_from_i64: tM,
        __wbindgen_is_object: nM,
        __wbindgen_in: rM,
        __wbindgen_jsval_loose_eq: iM,
        __wbg_String_88810dfeb4021902: oM,
        __wbg_getwithrefkey_5e6d9547403deab8: lM,
        __wbg_set_841ac57cff3d672b: uM,
        __wbg_new_abda76e883ba8a5f: sM,
        __wbg_stack_658279fe44541cf6: aM,
        __wbg_error_f851667af71bcfc6: cM,
        __wbg_now_db22aab4774ab135: fM,
        __wbg_crypto_c48a774b022d20ac: dM,
        __wbg_process_298734cf255a885d: pM,
        __wbg_versions_e2e78e134e3e5d01: hM,
        __wbg_node_1cd7a5d853dbea79: gM,
        __wbg_msCrypto_bcb970640f50a1e8: _M,
        __wbg_require_8f08ceecec0f4fee: vM,
        __wbindgen_is_function: mM,
        __wbg_getRandomValues_37fa2ca9e4e07fab: yM,
        __wbg_randomFillSync_dc1e9a60c158336d: wM,
        __wbg_get_7303ed2ef026b2f5: SM,
        __wbg_length_820c786973abdd8a: xM,
        __wbg_new_0394642eae39db16: TM,
        __wbg_newnoargs_c9e6043b8ad84109: bM,
        __wbg_new_0f2b71ca2f2a6029: CM,
        __wbg_next_f4bc0e96ea67da68: IM,
        __wbg_next_ec061e48a0e72a96: EM,
        __wbg_done_b6abb27d42b63867: DM,
        __wbg_value_2f4ef2036bfad28e: OM,
        __wbg_iterator_7c7e58f62eb84700: kM,
        __wbg_get_f53c921291c381bd: PM,
        __wbg_call_557a2f2deacc4912: RM,
        __wbg_new_2b6fea4ea03b1b95: NM,
        __wbg_self_742dd6eab3e9211e: LM,
        __wbg_window_c409e731db53a0e2: AM,
        __wbg_globalThis_b70c095388441f2d: MM,
        __wbg_global_1c72617491ed7194: FM,
        __wbg_newwithlength_cd1db47a173e3944: zM,
        __wbg_set_b4da98d504ac6091: $M,
        __wbg_from_6bc98a09a0b58bb1: HM,
        __wbg_isArray_04e59fb73f78ab5b: BM,
        __wbg_instanceof_ArrayBuffer_ef2632aa0d4bfff8: UM,
        __wbg_call_587b30eea3e09332: jM,
        __wbg_set_da7be7bf0e037b14: WM,
        __wbg_entries_039ff76b77e573c1: VM,
        __wbg_isSafeInteger_2088b01008075470: GM,
        __wbg_entries_13e011453776468f: KM,
        __wbg_buffer_55ba7a6b1b92e2ac: YM,
        __wbg_newwithbyteoffsetandlength_88d1d8be5df94b9b: QM,
        __wbg_new_09938a7d020f049b: qM,
        __wbg_set_3698e3ca519b3c3c: XM,
        __wbg_length_0aab7ffd65ad19ed: ZM,
        __wbg_instanceof_Uint8Array_1349640af2da2e88: JM,
        __wbg_newwithlength_89eeca401d8918c2: e6,
        __wbg_subarray_d82be056deb4ad27: t6,
        __wbg_setindex_f47cfb913f6e49c8: n6,
        __wbg_ownKeys_16ca303f7a5c24f3: r6,
        __wbg_set_07da13cc24b69217: i6,
        __wbindgen_bigint_get_as_i64: o6,
        __wbindgen_debug_string: l6,
        __wbindgen_throw: u6,
        __wbindgen_memory: s6,
      },
    },
    T3
  ),
  a6 = G.memory,
  c6 = G.setDebug,
  f6 = G.__wbg_loro_free,
  d6 = G.loro_new,
  p6 = G.loro_fromSnapshot,
  h6 = G.loro_attach,
  g6 = G.loro_is_detached,
  _6 = G.loro_checkoutToLatest,
  v6 = G.loro_checkout,
  m6 = G.loro_peerId,
  y6 = G.loro_peerIdStr,
  w6 = G.loro_setPeerId,
  S6 = G.loro_commit,
  x6 = G.loro_getText,
  T6 = G.loro_getMap,
  b6 = G.loro_getList,
  C6 = G.loro_getTree,
  I6 = G.loro_getContainerById,
  E6 = G.loro_version,
  D6 = G.loro_oplogVersion,
  O6 = G.loro_frontiers,
  k6 = G.loro_oplog_frontiers,
  P6 = G.loro_cmpFrontiers,
  R6 = G.loro_exportSnapshot,
  N6 = G.loro_exportFrom,
  L6 = G.loro_import,
  A6 = G.loro_importUpdateBatch,
  M6 = G.loro_toJson,
  F6 = G.loro_subscribe,
  z6 = G.loro_unsubscribe,
  $6 = G.loro_debugHistory,
  H6 = G.loro_getAllChanges,
  B6 = G.loro_getChangeAt,
  U6 = G.loro_getOpsInChange,
  j6 = G.loro_frontiersToVV,
  W6 = G.loro_vvToFrontiers,
  V6 = G.loro_getDeepValue,
  G6 = G.lorotext_insert,
  K6 = G.lorotext_delete,
  Y6 = G.lorotext_mark,
  Q6 = G.lorotext_unmark,
  q6 = G.lorotext_toString,
  X6 = G.lorotext_toDelta,
  Z6 = G.lorotext_id,
  J6 = G.lorotext_length,
  eF = G.lorotext_subscribe,
  tF = G.lorotext_applyDelta,
  nF = G.loromap_set,
  rF = G.loromap_delete,
  iF = G.loromap_get,
  oF = G.loromap_value,
  lF = G.loromap_id,
  uF = G.loromap_getDeepValue,
  sF = G.loromap_setContainer,
  aF = G.loromap_subscribe,
  cF = G.loromap_size,
  fF = G.__wbg_lorolist_free,
  dF = G.lorolist_insert,
  pF = G.lorolist_delete,
  hF = G.lorolist_get,
  gF = G.lorolist_id,
  _F = G.lorolist_value,
  vF = G.lorolist_getDeepValue,
  mF = G.lorolist_insertContainer,
  yF = G.lorolist_subscribe,
  wF = G.lorolist_unsubscribe,
  SF = G.lorolist_length,
  xF = G.lorotree_create,
  TF = G.lorotree_mov,
  bF = G.lorotree_delete,
  CF = G.lorotree_root,
  IF = G.lorotree_getMeta,
  EF = G.lorotree_id,
  DF = G.lorotree_value,
  OF = G.lorotree_getDeepValue,
  kF = G.lorotree_nodes,
  PF = G.lorotree_parent,
  RF = G.lorotree_subscribe,
  NF = G.toReadableVersion,
  LF = G.toEncodedVersion,
  AF = G.__wbg_lorotext_free,
  MF = G.__wbg_loromap_free,
  FF = G.__wbg_lorotree_free,
  zF = G.setPanicHook,
  $F = G.lorotext_unsubscribe,
  HF = G.loromap_unsubscribe,
  BF = G.lorotree_unsubscribe,
  UF = G.__wbg_prelimtext_free,
  jF = G.prelimtext_new,
  WF = G.prelimtext_insert,
  VF = G.prelimtext_delete,
  GF = G.prelimtext_value,
  KF = G.__wbg_prelimlist_free,
  YF = G.prelimlist_new,
  QF = G.prelimlist_insert,
  qF = G.prelimlist_delete,
  XF = G.prelimlist_value,
  ZF = G.__wbg_prelimmap_free,
  JF = G.prelimmap_new,
  e8 = G.prelimmap_set,
  t8 = G.prelimmap_delete,
  n8 = G.prelimmap_get,
  r8 = G.prelimmap_value,
  i8 = G.__wbindgen_malloc,
  o8 = G.__wbindgen_realloc,
  l8 = G.__wbindgen_add_to_stack_pointer,
  u8 = G.__wbindgen_free,
  s8 = G.__wbindgen_exn_store,
  a8 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        __wbg_loro_free: f6,
        __wbg_lorolist_free: fF,
        __wbg_loromap_free: MF,
        __wbg_lorotext_free: AF,
        __wbg_lorotree_free: FF,
        __wbg_prelimlist_free: KF,
        __wbg_prelimmap_free: ZF,
        __wbg_prelimtext_free: UF,
        __wbindgen_add_to_stack_pointer: l8,
        __wbindgen_exn_store: s8,
        __wbindgen_free: u8,
        __wbindgen_malloc: i8,
        __wbindgen_realloc: o8,
        loro_attach: h6,
        loro_checkout: v6,
        loro_checkoutToLatest: _6,
        loro_cmpFrontiers: P6,
        loro_commit: S6,
        loro_debugHistory: $6,
        loro_exportFrom: N6,
        loro_exportSnapshot: R6,
        loro_fromSnapshot: p6,
        loro_frontiers: O6,
        loro_frontiersToVV: j6,
        loro_getAllChanges: H6,
        loro_getChangeAt: B6,
        loro_getContainerById: I6,
        loro_getDeepValue: V6,
        loro_getList: b6,
        loro_getMap: T6,
        loro_getOpsInChange: U6,
        loro_getText: x6,
        loro_getTree: C6,
        loro_import: L6,
        loro_importUpdateBatch: A6,
        loro_is_detached: g6,
        loro_new: d6,
        loro_oplogVersion: D6,
        loro_oplog_frontiers: k6,
        loro_peerId: m6,
        loro_peerIdStr: y6,
        loro_setPeerId: w6,
        loro_subscribe: F6,
        loro_toJson: M6,
        loro_unsubscribe: z6,
        loro_version: E6,
        loro_vvToFrontiers: W6,
        lorolist_delete: pF,
        lorolist_get: hF,
        lorolist_getDeepValue: vF,
        lorolist_id: gF,
        lorolist_insert: dF,
        lorolist_insertContainer: mF,
        lorolist_length: SF,
        lorolist_subscribe: yF,
        lorolist_unsubscribe: wF,
        lorolist_value: _F,
        loromap_delete: rF,
        loromap_get: iF,
        loromap_getDeepValue: uF,
        loromap_id: lF,
        loromap_set: nF,
        loromap_setContainer: sF,
        loromap_size: cF,
        loromap_subscribe: aF,
        loromap_unsubscribe: HF,
        loromap_value: oF,
        lorotext_applyDelta: tF,
        lorotext_delete: K6,
        lorotext_id: Z6,
        lorotext_insert: G6,
        lorotext_length: J6,
        lorotext_mark: Y6,
        lorotext_subscribe: eF,
        lorotext_toDelta: X6,
        lorotext_toString: q6,
        lorotext_unmark: Q6,
        lorotext_unsubscribe: $F,
        lorotree_create: xF,
        lorotree_delete: bF,
        lorotree_getDeepValue: OF,
        lorotree_getMeta: IF,
        lorotree_id: EF,
        lorotree_mov: TF,
        lorotree_nodes: kF,
        lorotree_parent: PF,
        lorotree_root: CF,
        lorotree_subscribe: RF,
        lorotree_unsubscribe: BF,
        lorotree_value: DF,
        memory: a6,
        prelimlist_delete: qF,
        prelimlist_insert: QF,
        prelimlist_new: YF,
        prelimlist_value: XF,
        prelimmap_delete: t8,
        prelimmap_get: n8,
        prelimmap_new: JF,
        prelimmap_set: e8,
        prelimmap_value: r8,
        prelimtext_delete: VF,
        prelimtext_insert: WF,
        prelimtext_new: jF,
        prelimtext_value: GF,
        setDebug: c6,
        setPanicHook: zF,
        toEncodedVersion: LF,
        toReadableVersion: NF,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
C3(a8);
cn.prototype.getTypedMap = function (...e) {
  return this.getMap(...e);
};
cn.prototype.getTypedList = function (...e) {
  return this.getList(...e);
};
vu.prototype.getTyped = function (e, t) {
  const n = this.get(t);
  return typeof n == "string" && DT(n) ? e.getContainerById(n) : n;
};
vu.prototype.insertTyped = function (...e) {
  return this.insert(...e);
};
ol.prototype.getTyped = function (e, t) {
  const n = this.get(t);
  return typeof n == "string" && DT(n) ? e.getContainerById(n) : n;
};
ol.prototype.setTyped = function (...e) {
  return this.set(...e);
};
function DT(e) {
  return e.startsWith("cid:");
}
var OT = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], o = 0; o < arguments.length; o++) {
        var u = arguments[o];
        if (u) {
          var s = typeof u;
          if (s === "string" || s === "number") r.push(u);
          else if (Array.isArray(u)) {
            if (u.length) {
              var c = n.apply(null, u);
              c && r.push(c);
            }
          } else if (s === "object") {
            if (
              u.toString !== Object.prototype.toString &&
              !u.toString.toString().includes("[native code]")
            ) {
              r.push(u.toString());
              continue;
            }
            for (var f in u) t.call(u, f) && u[f] && r.push(f);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(OT);
var c8 = OT.exports;
const tf = el(c8);
class f8 {
  static uuid() {
    var t,
      n,
      r = "";
    for (t = 0; t < 32; t++)
      (n = (Math.random() * 16) | 0),
        (t === 8 || t === 12 || t === 16 || t === 20) && (r += "-"),
        (r += (t === 12 ? 4 : t === 16 ? (n & 3) | 8 : n).toString(16));
    return r;
  }
  static pluralize(t, n) {
    return t === 1 ? n : n + "s";
  }
  static store(t, n) {
    if (n) return localStorage.setItem(t, btoa(String.fromCharCode(...n)));
    var r = localStorage.getItem(t);
    if (r) {
      const o = atob(r),
        u = new Uint8Array(o.length);
      for (let s = 0; s < o.length; s++) u[s] = o.charCodeAt(s);
      return u;
    }
  }
  static extend(...t) {
    for (var n = {}, r = 0; r < t.length; r++) {
      var o = t[r];
      for (var u in o) o.hasOwnProperty(u) && (n[u] = o[u]);
    }
    return n;
  }
}
const jg = "all",
  cv = "active",
  fv = "completed",
  d8 = 13,
  p8 = ({
    completedCount: e,
    onClearCompleted: t,
    nowShowing: n,
    count: r,
  }) => {
    const o = f8.pluralize(r, "item");
    let u = null;
    return (
      e > 0 &&
        (u = J.jsx("button", {
          className: "clear-completed",
          onClick: t,
          children: "Clear completed",
        })),
      J.jsxs("footer", {
        className: "footer",
        children: [
          J.jsxs("span", {
            className: "todo-count",
            children: [J.jsx("strong", { children: r }), " ", o, " left"],
          }),
          J.jsxs("ul", {
            className: "filters",
            children: [
              J.jsx("li", {
                children: J.jsx("a", {
                  href: "#/",
                  className: tf({ selected: n === jg }),
                  children: "All",
                }),
              }),
              " ",
              J.jsx("li", {
                children: J.jsx("a", {
                  href: "#/active",
                  className: tf({ selected: n === cv }),
                  children: "Active",
                }),
              }),
              " ",
              J.jsx("li", {
                children: J.jsx("a", {
                  href: "#/completed",
                  className: tf({ selected: n === fv }),
                  children: "Completed",
                }),
              }),
            ],
          }),
          u,
        ],
      })
    );
  };
const h8 = 27,
  g8 = 13,
  _8 = ({
    todo: e,
    editing: t,
    onToggle: n,
    onDestroy: r,
    onSave: o,
    onCancel: u,
    onAddChild: s,
    onEdit: c,
  }) => {
    const [f, p] = tt.useState(""),
      _ = tt.useRef(null),
      w = () => {
        c(), p(e.title);
      },
      S = () => {
        var b = f.trim();
        b ? (o(b), p(b)) : r();
      },
      I = (b) => {
        var F = b.target;
        p(F.value);
      },
      P = (b) => {
        b.keyCode === h8 ? (p(e.title), u(b)) : b.keyCode === g8 && S();
      };
    return (
      tt.useEffect(() => {
        if (t) {
          const b = _.current;
          b.focus(), b.setSelectionRange(b.value.length, b.value.length);
        }
      }, [t]),
      J.jsxs("li", {
        className: tf({ completed: e.completed, editing: t }),
        children: [
          J.jsxs("div", {
            className: "view",
            children: [
              J.jsx("input", {
                className: "toggle",
                type: "checkbox",
                checked: e.completed,
                onChange: n,
              }),
              J.jsx("label", { onDoubleClick: (b) => w(), children: e.title }),
              J.jsx("button", { className: "addChild", onClick: s }),
              J.jsx("button", { className: "destroy", onClick: r }),
            ],
          }),
          J.jsx("input", {
            ref: _,
            className: "edit",
            value: f,
            onBlur: () => S(),
            onChange: (b) => I(b),
            onKeyDown: (b) => P(b),
          }),
        ],
      })
    );
  },
  kT = (e, t) =>
    e
      .map((n) => {
        const r = kT(n.children, t),
          o = dv(r),
          u = pv(r);
        return {
          ...n,
          children: r,
          childrenActiveCount: o,
          childrenAllCount: u,
        };
      })
      .filter((n) => {
        switch (t) {
          case cv:
            return !n.completed || n.childrenActiveCount > 0;
          case fv:
            return n.completed && n.childrenActiveCount === 0;
          default:
            return !0;
        }
      }),
  v8 = ({ model: e, setEditing: t, editing: n, cancel: r, nowShowing: o }) => {
    const u = kT(e.todos, o);
    return J.jsx("div", {
      style: { height: 400 },
      children: J.jsx(m3, {
        className: "todo-list",
        style: { width: "100%" },
        treeData: u,
        onMoveNode: (s) => {
          const c = s.node,
            f = s.nextParentNode;
          f ? e.move(c.id, f.id) : c.parentId && e.asRoot(c.id);
        },
        onVisibilityToggle: (s) => {
          const c = s.node;
          e.changeExpanded(c.id, s.expanded);
        },
        onChange: (s) => {},
        generateNodeProps: (s) => {
          const c = s.node;
          return {
            title: J.jsx(
              _8,
              {
                todo: c,
                onToggle: () => {
                  e.toggle(c.id);
                },
                onDestroy: () => {
                  e.destroy(c.id);
                },
                onEdit: () => {
                  t(c.id);
                },
                editing: n === c.id,
                onSave: (p) => {
                  e.save(c.id, p), t(null);
                },
                onAddChild: () => {
                  const p = e.addChildTodo("", c.id);
                  t(p);
                },
                onCancel: () => r(),
              },
              c.id
            ),
          };
        },
      }),
    });
  },
  m8 = ({ model: e }) => {
    const t = tt.useRef(null),
      n = e.history;
    return J.jsxs("div", {
      className: "slidecontainer",
      style: { padding: "8px" },
      children: [
        J.jsx("p", { children: "Check out any version" }),
        J.jsx("div", {
          style: { display: "flex" },
          children: J.jsx("input", {
            style: { width: "400px", margin: "0 auto" },
            ref: t,
            onChange: (r) => {
              const o = parseInt(r.target.value);
              e.checkout(o);
            },
            className: "slider",
            type: "range",
            min: 0,
            max: n.length - 1,
            value: e.version,
          }),
        }),
      ],
    });
  },
  dv = (e) =>
    e.reduce(function (t, n) {
      const r = t + dv(n.children);
      return n.completed ? r : r + 1;
    }, 0),
  pv = (e) =>
    e.reduce(function (t, n) {
      return t + pv(n.children) + 1;
    }, 0),
  Gw = ({ model: e }) => {
    const [t, n] = tt.useState(jg),
      [r, o] = tt.useState(null);
    tt.useEffect(() => {
      var _ = new Router({
        "/": () => n(jg),
        "/active": () => n(cv),
        "/completed": () => n(fv),
      });
      _.init("/");
    }, []);
    const u = tt.useRef(null),
      s = dv(e.todos),
      c = pv(e.todos) - s,
      f = (_) => {
        if (_.keyCode === d8) {
          _.preventDefault();
          var w = u.current.value.trim();
          w && (e.addRootTodo(w), (u.current.value = ""));
        }
      },
      p = () => {
        o(null);
      };
    return J.jsx(J.Fragment, {
      children: J.jsxs("div", {
        className: "todoapp",
        style: { width: "100%" },
        children: [
          J.jsxs("header", {
            className: "header",
            children: [
              J.jsx("h1", { children: "todos" }),
              J.jsx("input", {
                ref: u,
                className: "new-todo",
                placeholder: "What needs to be done?",
                onKeyDown: (_) => f(_),
                autoFocus: !0,
              }),
            ],
          }),
          J.jsx(J.Fragment, {
            children: J.jsxs("section", {
              className: "main",
              children: [
                J.jsx("input", {
                  id: "toggle-all",
                  className: "toggle-all",
                  type: "checkbox",
                  onChange: (_) => e.toggleAll(_.target.checked),
                  checked: s === 0,
                }),
                J.jsx("label", {
                  htmlFor: "toggle-all",
                  children: "Mark all as complete",
                }),
                J.jsx(v8, {
                  model: e,
                  editing: r,
                  setEditing: o,
                  cancel: p,
                  nowShowing: t,
                }),
              ],
            }),
          }),
          s || c
            ? J.jsx(p8, {
                count: s,
                completedCount: c,
                nowShowing: t,
                onClearCompleted: () => e.clearCompleted(),
              })
            : void 0,
          J.jsx("div", { children: J.jsx(m8, { model: e }) }),
        ],
      }),
    });
  },
  y8 = ({ modelA: e, modelB: t }) => {
    const [n, r] = tt.useState(!0);
    return J.jsxs("div", {
      className: "appContainer",
      children: [
        J.jsx("div", {
          className: "todoContainer",
          children: J.jsx(Gw, { model: e }),
        }),
        J.jsx("button", {
          style: {
            width: "200px",
            height: "56px",
            fontSize: "x-large",
            border: "1px solid black",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          },
          onClick: () => {
            r(!n), e.setSync(!n), t.setSync(!n), n || S8();
          },
          children: n ? "Stop Sync" : "Continue Sync",
        }),
        J.jsx("div", {
          className: "todoContainer",
          children: J.jsx(Gw, { model: t }),
        }),
      ],
    });
  },
  w8 = Fh.createRoot(document.getElementById("root")),
  hv = () => {
    w8.render(J.jsx(y8, { modelA: Zo, modelB: Jo }));
  };
R3();
const S8 = () => {
    Zo.updateFromPeer(Jo), Jo.updateFromPeer(Zo);
  },
  x8 = new cn(),
  Zo = new CT(x8, "react-todosA"),
  T8 = new cn(),
  Jo = new CT(T8, "react-todosB");
Zo.subscribe(hv);
Jo.subscribe(hv);
Zo.subscribe(() => {
  Jo.updateFromPeer(Zo);
});
Jo.subscribe(() => {
  Zo.updateFromPeer(Jo);
});
hv();
