!function (t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.animateCSSGrid = n() : t.animateCSSGrid = n()
}(window, function () {
    return function (t) {
        var n = {};

        function r(e) {
            if (n[e]) return n[e].exports;
            var o = n[e] = {i: e, l: !1, exports: {}};
            return t[e].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }

        return r.m = t, r.c = n, r.d = function (t, n, e) {
            r.o(t, n) || Object.defineProperty(t, n, {enumerable: !0, get: e})
        }, r.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, r.t = function (t, n) {
            if (1 & n && (t = r(t)), 8 & n) return t;
            if (4 & n && "object" == typeof t && t && t.__esModule) return t;
            var e = Object.create(null);
            if (r.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t) for (var o in t) r.d(e, o, function (n) {
                return t[n]
            }.bind(null, o));
            return e
        }, r.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return r.d(n, "a", n), n
        }, r.o = function (t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, r.p = "", r(r.s = 14)
    }([function (t, n) {
        t.exports = function (t) {
            var n = typeof t;
            return null != t && ("object" == n || "function" == n)
        }
    }, function (t, n, r) {
        var e = r(4), o = r(0), i = "Expected a function";
        t.exports = function (t, n, r) {
            var u = !0, a = !0;
            if ("function" != typeof t) throw new TypeError(i);
            return o(r) && (u = "leading" in r ? !!r.leading : u, a = "trailing" in r ? !!r.trailing : a), e(t, n, {
                leading: u,
                maxWait: n,
                trailing: a
            })
        }
    }, function (t, n, r) {
        var e = r(6), o = "object" == typeof self && self && self.Object === Object && self,
            i = e || o || Function("return this")();
        t.exports = i
    }, function (t, n, r) {
        var e = r(2).Symbol;
        t.exports = e
    }, function (t, n, r) {
        var e = r(0), o = r(5), i = r(8), u = "Expected a function", a = Math.max, c = Math.min;
        t.exports = function (t, n, r) {
            var f, s, p, l, d, v, h = 0, m = !1, g = !1, y = !0;
            if ("function" != typeof t) throw new TypeError(u);

            function b(n) {
                var r = f, e = s;
                return f = s = void 0, h = n, l = t.apply(e, r)
            }

            function w(t) {
                var r = t - v;
                return void 0 === v || r >= n || r < 0 || g && t - h >= p
            }

            function O() {
                var t = o();
                if (w(t)) return x(t);
                d = setTimeout(O, function (t) {
                    var r = n - (t - v);
                    return g ? c(r, p - (t - h)) : r
                }(t))
            }

            function x(t) {
                return d = void 0, y && f ? b(t) : (f = s = void 0, l)
            }

            function j() {
                var t = o(), r = w(t);
                if (f = arguments, s = this, v = t, r) {
                    if (void 0 === d) return function (t) {
                        return h = t, d = setTimeout(O, n), m ? b(t) : l
                    }(v);
                    if (g) return d = setTimeout(O, n), b(v)
                }
                return void 0 === d && (d = setTimeout(O, n)), l
            }

            return n = i(n) || 0, e(r) && (m = !!r.leading, p = (g = "maxWait" in r) ? a(i(r.maxWait) || 0, n) : p, y = "trailing" in r ? !!r.trailing : y), j.cancel = function () {
                void 0 !== d && clearTimeout(d), h = 0, f = v = s = d = void 0
            }, j.flush = function () {
                return void 0 === d ? l : x(o())
            }, j
        }
    }, function (t, n, r) {
        var e = r(2);
        t.exports = function () {
            return e.Date.now()
        }
    }, function (t, n, r) {
        (function (n) {
            var r = "object" == typeof n && n && n.Object === Object && n;
            t.exports = r
        }).call(this, r(7))
    }, function (t, n) {
        var r;
        r = function () {
            return this
        }();
        try {
            r = r || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (r = window)
        }
        t.exports = r
    }, function (t, n, r) {
        var e = r(0), o = r(9), i = NaN, u = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i, c = /^0b[01]+$/i,
            f = /^0o[0-7]+$/i, s = parseInt;
        t.exports = function (t) {
            if ("number" == typeof t) return t;
            if (o(t)) return i;
            if (e(t)) {
                var n = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = e(n) ? n + "" : n
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(u, "");
            var r = c.test(t);
            return r || f.test(t) ? s(t.slice(2), r ? 2 : 8) : a.test(t) ? i : +t
        }
    }, function (t, n, r) {
        var e = r(10), o = r(13), i = "[object Symbol]";
        t.exports = function (t) {
            return "symbol" == typeof t || o(t) && e(t) == i
        }
    }, function (t, n, r) {
        var e = r(3), o = r(11), i = r(12), u = "[object Null]", a = "[object Undefined]",
            c = e ? e.toStringTag : void 0;
        t.exports = function (t) {
            return null == t ? void 0 === t ? a : u : c && c in Object(t) ? o(t) : i(t)
        }
    }, function (t, n, r) {
        var e = r(3), o = Object.prototype, i = o.hasOwnProperty, u = o.toString, a = e ? e.toStringTag : void 0;
        t.exports = function (t) {
            var n = i.call(t, a), r = t[a];
            try {
                t[a] = void 0;
                var e = !0
            } catch (t) {
            }
            var o = u.call(t);
            return e && (n ? t[a] = r : delete t[a]), o
        }
    }, function (t, n) {
        var r = Object.prototype.toString;
        t.exports = function (t) {
            return r.call(t)
        }
    }, function (t, n) {
        t.exports = function (t) {
            return null != t && "object" == typeof t
        }
    }, function (t, n, r) {
        "use strict";
        r.r(n);
        var e = function (t) {
            return function (n) {
                return 1 - t(1 - n)
            }
        }, o = function (t) {
            return function (n) {
                return n <= .5 ? t(2 * n) / 2 : (2 - t(2 * (1 - n))) / 2
            }
        }, i = function (t) {
            return function (n) {
                return n * n * ((t + 1) * n - t)
            }
        }, u = function (t) {
            var n = i(t);
            return function (t) {
                return (t *= 2) < 1 ? .5 * n(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            }
        }, a = function (t) {
            return t
        }, c = function (t) {
            return function (n) {
                return Math.pow(n, t)
            }
        }(2), f = e(c), s = o(c), p = function (t) {
            return 1 - Math.sin(Math.acos(t))
        }, l = e(p), d = o(l), v = i(1.525), h = e(v), m = o(v), g = u(1.525);
        var y, b = 0, w = "undefined" != typeof window && void 0 !== window.requestAnimationFrame ? function (t) {
            return window.requestAnimationFrame(t)
        } : function (t) {
            var n = Date.now(), r = Math.max(0, 16.7 - (n - b));
            b = n + r, setTimeout(function () {
                return t(b)
            }, r)
        };
        !function (t) {
            t.Read = "read", t.Update = "update", t.Render = "render", t.PostRender = "postRender", t.FixedUpdate = "fixedUpdate"
        }(y || (y = {}));
        var O = 1 / 60 * 1e3, x = !0, j = !1, M = !1, P = {delta: 0, timestamp: 0},
            C = [y.Read, y.Update, y.Render, y.PostRender], S = function (t) {
                return j = t
            }, E = C.reduce(function (t, n) {
                var r, e, o, i, u, a, c, f, s,
                    p = (r = S, e = [], o = [], i = 0, u = !1, a = 0, c = new WeakSet, f = new WeakSet, s = {
                        cancel: function (t) {
                            var n = o.indexOf(t);
                            c.add(t), -1 !== n && o.splice(n, 1)
                        }, process: function (t) {
                            var n, p;
                            if (u = !0, e = (n = [o, e])[0], (o = n[1]).length = 0, i = e.length) for (a = 0; a < i; a++) (p = e[a])(t), !0 !== f.has(p) || c.has(p) || (s.schedule(p), r(!0));
                            u = !1
                        }, schedule: function (t, n, r) {
                            var a = r && u, c = a ? e : o;
                            n && f.add(t), -1 === c.indexOf(t) && (c.push(t), a && (i = e.length))
                        }
                    });
                return t.sync[n] = function (t, n, r) {
                    return void 0 === n && (n = !1), void 0 === r && (r = !1), j || k(), p.schedule(t, n, r), t
                }, t.cancelSync[n] = function (t) {
                    return p.cancel(t)
                }, t.steps[n] = p, t
            }, {steps: {}, sync: {}, cancelSync: {}}), A = E.steps, T = E.sync, I = E.cancelSync, X = function (t) {
                return A[t].process(P)
            }, Y = function (t) {
                j = !1, P.delta = x ? O : Math.max(Math.min(t - P.timestamp, 40), 1), x || (O = P.delta), P.timestamp = t, M = !0, C.forEach(X), M = !1, j && (x = !1, w(Y))
            }, k = function () {
                j = !0, x = !0, M || w(Y)
            }, R = T, _ = r(1), F = r.n(_), G = function (t, n) {
                return (G = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, n) {
                    t.__proto__ = n
                } || function (t, n) {
                    for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
                })(t, n)
            };

        function $(t, n) {
            function r() {
                this.constructor = t
            }

            G(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }

        var N = function () {
            return (N = Object.assign || function (t) {
                for (var n, r = 1, e = arguments.length; r < e; r++) for (var o in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                return t
            }).apply(this, arguments)
        };

        function L(t, n) {
            var r = {};
            for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && n.indexOf(e) < 0 && (r[e] = t[e]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (e = Object.getOwnPropertySymbols(t); o < e.length; o++) n.indexOf(e[o]) < 0 && (r[e[o]] = t[e[o]])
            }
            return r
        }

        var B = function () {
                return (B = Object.assign || function (t) {
                    for (var n, r = 1, e = arguments.length; r < e; r++) for (var o in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                    return t
                }).apply(this, arguments)
            }, W = function (t, n) {
                return function (r) {
                    return Math.max(Math.min(r, n), t)
                }
            }, q = function (t) {
                return function (n) {
                    return "string" == typeof n && 0 === n.indexOf(t)
                }
            }, U = function (t) {
                return t % 1 ? Number(t.toFixed(5)) : t
            }, V = {
                test: function (t) {
                    return "number" == typeof t
                }, parse: parseFloat, transform: function (t) {
                    return t
                }
            }, z = (B({}, V, {transform: W(0, 1)}), B({}, V, {default: 1}), function (t) {
                return {
                    test: function (n) {
                        return "string" == typeof n && n.endsWith(t) && 1 === n.split(" ").length
                    }, parse: parseFloat, transform: function (n) {
                        return "" + n + t
                    }
                }
            }), D = z("deg"), K = z("%"), H = z("px"), J = z("vh"), Q = z("vw"), Z = W(0, 255),
            tt = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/i,
            nt = function (t) {
                return void 0 !== t.red
            }, rt = function (t) {
                return void 0 !== t.hue
            }, et = function (t) {
                var n = t.length;
                return function (r) {
                    if ("string" != typeof r) return r;
                    for (var e, o = {}, i = function (t) {
                        return "string" == typeof t ? t.split(/,\s*/) : [t]
                    }((e = r).substring(e.indexOf("(") + 1, e.lastIndexOf(")"))), u = 0; u < n; u++) o[t[u]] = void 0 !== i[u] ? parseFloat(i[u]) : 1;
                    return o
                }
            }, ot = B({}, V, {
                transform: function (t) {
                    return Math.round(Z(t))
                }
            }), it = q("rgb"), ut = {
                test: function (t) {
                    return "string" == typeof t ? it(t) : nt(t)
                }, parse: et(["red", "green", "blue", "alpha"]), transform: function (t) {
                    var n = t.red, r = t.green, e = t.blue, o = t.alpha;
                    return function (t) {
                        var n = t.red, r = t.green, e = t.blue, o = t.alpha;
                        return "rgba(" + n + ", " + r + ", " + e + ", " + (void 0 === o ? 1 : o) + ")"
                    }({red: ot.transform(n), green: ot.transform(r), blue: ot.transform(e), alpha: U(o)})
                }
            }, at = q("hsl"), ct = {
                test: function (t) {
                    return "string" == typeof t ? at(t) : rt(t)
                }, parse: et(["hue", "saturation", "lightness", "alpha"]), transform: function (t) {
                    var n = t.hue, r = t.saturation, e = t.lightness, o = t.alpha;
                    return function (t) {
                        var n = t.hue, r = t.saturation, e = t.lightness, o = t.alpha;
                        return "hsla(" + n + ", " + r + ", " + e + ", " + (void 0 === o ? 1 : o) + ")"
                    }({hue: Math.round(n), saturation: K.transform(U(r)), lightness: K.transform(U(e)), alpha: U(o)})
                }
            }, ft = B({}, ut, {
                test: q("#"), parse: function (t) {
                    var n = "", r = "", e = "";
                    return t.length > 4 ? (n = t.substr(1, 2), r = t.substr(3, 2), e = t.substr(5, 2)) : (n = t.substr(1, 1), r = t.substr(2, 1), e = t.substr(3, 1), n += n, r += r, e += e), {
                        red: parseInt(n, 16),
                        green: parseInt(r, 16),
                        blue: parseInt(e, 16),
                        alpha: 1
                    }
                }
            }), st = {
                test: function (t) {
                    return "string" == typeof t && tt.test(t) || ut.test(t) || ct.test(t) || ft.test(t)
                }, parse: function (t) {
                    return ut.test(t) ? ut.parse(t) : ct.test(t) ? ct.parse(t) : ft.test(t) ? ft.parse(t) : t
                }, transform: function (t) {
                    return nt(t) ? ut.transform(t) : rt(t) ? ct.transform(t) : t
                }
            }, pt = /(-)?(\d[\d\.]*)/g,
            lt = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
            dt = function (t) {
                if ("string" != typeof t || !isNaN(t)) return !1;
                var n = 0, r = t.match(pt), e = t.match(lt);
                return r && (n += r.length), e && (n += e.length), n > 0
            }, vt = function (t) {
                var n = t, r = [], e = n.match(lt);
                e && (n = n.replace(lt, "${c}"), r.push.apply(r, e.map(st.parse)));
                var o = n.match(pt);
                return o && r.push.apply(r, o.map(V.parse)), r
            }, ht = function (t) {
                var n = t, r = 0, e = t.match(lt), o = e ? e.length : 0;
                if (e) for (var i = 0; i < o; i++) n = n.replace(e[i], "${c}"), r++;
                var u = n.match(pt), a = u ? u.length : 0;
                if (u) for (i = 0; i < a; i++) n = n.replace(u[i], "${n}"), r++;
                return function (t) {
                    for (var e = n, i = 0; i < r; i++) e = e.replace(i < o ? "${c}" : "${n}", i < o ? st.transform(t[i]) : U(t[i]));
                    return e
                }
            }, mt = function (t) {
                return "number" == typeof t
            }, gt = function (t) {
                return function (n, r, e) {
                    return void 0 !== e ? t(n, r, e) : function (e) {
                        return t(n, r, e)
                    }
                }
            }, yt = gt(function (t, n, r) {
                return Math.min(Math.max(r, t), n)
            }), bt = function (t, n, r) {
                var e = n - t;
                return 0 === e ? 1 : (r - t) / e
            }, wt = function (t, n, r) {
                return -r * t + r * n + t
            }, Ot = function () {
                return (Ot = Object.assign || function (t) {
                    for (var n, r = 1, e = arguments.length; r < e; r++) for (var o in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                    return t
                }).apply(this, arguments)
            }, xt = function (t, n, r) {
                var e = t * t, o = n * n;
                return Math.sqrt(r * (o - e) + e)
            }, jt = [ft, ut, ct], Mt = function (t) {
                return jt.find(function (n) {
                    return n.test(t)
                })
            }, Pt = function (t, n) {
                var r = Mt(t), e = Mt(n);
                r.transform, e.transform;
                var o = r.parse(t), i = e.parse(n), u = Ot({}, o), a = r === ct ? wt : xt;
                return function (t) {
                    for (var n in u) "alpha" !== n && (u[n] = a(o[n], i[n], t));
                    return u.alpha = wt(o.alpha, i.alpha, t), r.transform(u)
                }
            }, Ct = function (t, n) {
                return function (r) {
                    return n(t(r))
                }
            }, St = function () {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return t.reduce(Ct)
            }, Et = function (t, n) {
                var r = t.slice(), e = r.length, o = t.map(function (t, r) {
                    var e = n[r];
                    return mt(t) ? function (n) {
                        return wt(t, e, n)
                    } : st.test(t) ? Pt(t, e) : At(t, e)
                });
                return function (t) {
                    for (var n = 0; n < e; n++) r[n] = o[n](t);
                    return r
                }
            }, At = function (t, n) {
                var r = ht(t);
                return r(t), ht(n)(t), St(Et(vt(t), vt(n)), r)
            }, Tt = (gt(wt), function (t) {
                return t
            }), It = function (t) {
                return void 0 === t && (t = Tt), gt(function (n, r, e) {
                    var o = r - e, i = -(0 - n + 1) * (0 - t(Math.abs(o)));
                    return o <= 0 ? r + i : r - i
                })
            };
        It(), It(Math.sqrt), gt(function (t, n, r) {
            var e = n - t;
            return ((r - t) % e + e) % e + t
        }), yt(0, 1);
        var Xt = function () {
            function t(t) {
                void 0 === t && (t = {}), this.props = t
            }

            return t.prototype.applyMiddleware = function (t) {
                return this.create(N({}, this.props, {middleware: this.props.middleware ? [t].concat(this.props.middleware) : [t]}))
            }, t.prototype.pipe = function () {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var r = 1 === t.length ? t[0] : St.apply(void 0, t);
                return this.applyMiddleware(function (t) {
                    return function (n) {
                        return t(r(n))
                    }
                })
            }, t.prototype.while = function (t) {
                return this.applyMiddleware(function (n, r) {
                    return function (e) {
                        return t(e) ? n(e) : r()
                    }
                })
            }, t.prototype.filter = function (t) {
                return this.applyMiddleware(function (n) {
                    return function (r) {
                        return t(r) && n(r)
                    }
                })
            }, t
        }(), Yt = function () {
            return function (t, n) {
                var r = t.middleware, e = t.onComplete, o = this;
                this.isActive = !0, this.update = function (t) {
                    o.observer.update && o.updateObserver(t)
                }, this.complete = function () {
                    o.observer.complete && o.isActive && o.observer.complete(), o.onComplete && o.onComplete(), o.isActive = !1
                }, this.error = function (t) {
                    o.observer.error && o.isActive && o.observer.error(t), o.isActive = !1
                }, this.observer = n, this.updateObserver = function (t) {
                    return n.update(t)
                }, this.onComplete = e, n.update && r && r.length && r.forEach(function (t) {
                    return o.updateObserver = t(o.updateObserver, o.complete)
                })
            }
        }(), kt = function (t, n, r) {
            var e = n.middleware;
            return new Yt({middleware: e, onComplete: r}, "function" == typeof t ? {update: t} : t)
        }, Rt = function (t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }

            return $(n, t), n.prototype.create = function (t) {
                return new n(t)
            }, n.prototype.start = function (t) {
                void 0 === t && (t = {});
                var n = !1, r = {
                    stop: function () {
                    }
                }, e = this.props, o = e.init, i = L(e, ["init"]), u = o(kt(t, i, function () {
                    n = !0, r.stop()
                }));
                return r = u ? N({}, r, u) : r, t.registerParent && t.registerParent(r), n && r.stop(), r
            }, n
        }(Xt), _t = function (t) {
            return new Rt({init: t})
        }, Ft = function (t) {
            var n = t.getCount, r = t.getFirst, e = t.getOutput, o = t.mapApi, i = t.setProp, u = t.startActions;
            return function (t) {
                return _t(function (a) {
                    var c = a.update, f = a.complete, s = a.error, p = n(t), l = e(), d = function () {
                        return c(l)
                    }, v = 0, h = u(t, function (t, n) {
                        var r = !1;
                        return t.start({
                            complete: function () {
                                r || (r = !0, ++v === p && R.update(f))
                            }, error: s, update: function (t) {
                                i(l, n, t), R.update(d, !1, !0)
                            }
                        })
                    });
                    return Object.keys(r(h)).reduce(function (t, n) {
                        return t[n] = o(h, n), t
                    }, {})
                })
            }
        }, Gt = Ft({
            getOutput: function () {
                return {}
            }, getCount: function (t) {
                return Object.keys(t).length
            }, getFirst: function (t) {
                return t[Object.keys(t)[0]]
            }, mapApi: function (t, n) {
                return function () {
                    for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
                    return Object.keys(t).reduce(function (e, o) {
                        var i;
                        return t[o][n] && (r[0] && void 0 !== r[0][o] ? e[o] = t[o][n](r[0][o]) : e[o] = (i = t[o])[n].apply(i, r)), e
                    }, {})
                }
            }, setProp: function (t, n, r) {
                return t[n] = r
            }, startActions: function (t, n) {
                return Object.keys(t).reduce(function (r, e) {
                    return r[e] = n(t[e], e), r
                }, {})
            }
        }), $t = Ft({
            getOutput: function () {
                return []
            }, getCount: function (t) {
                return t.length
            }, getFirst: function (t) {
                return t[0]
            }, mapApi: function (t, n) {
                return function () {
                    for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
                    return t.map(function (t, e) {
                        if (t[n]) return Array.isArray(r[0]) ? t[n](r[0][e]) : t[n].apply(t, r)
                    })
                }
            }, setProp: function (t, n, r) {
                return t[n] = r
            }, startActions: function (t, n) {
                return t.map(function (t, r) {
                    return n(t, r)
                })
            }
        }), Nt = function () {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return $t(t)
        }, Lt = [H, K, D, J, Q], Bt = function (t) {
            return Lt.find(function (n) {
                return n.test(t)
            })
        }, Wt = function (t, n) {
            return t(n)
        }, qt = function (t, n, r) {
            var e = r[0], o = n[e].map(function (e, o) {
                var i = r.reduce(function (t) {
                    return function (n, r) {
                        return n[r] = n[r][t], n
                    }
                }(o), N({}, n));
                return Ht(e)(t, i)
            });
            return Nt.apply(void 0, o)
        }, Ut = function (t, n, r) {
            var e = r[0], o = Object.keys(n[e]).reduce(function (o, i) {
                var u = r.reduce(function (t) {
                    return function (n, r) {
                        return n[r] = n[r][t], n
                    }
                }(i), N({}, n));
                return o[i] = Ht(n[e][i])(t, u), o
            }, {});
            return Gt(o)
        }, Vt = function (t, n) {
            var r = n.from, e = n.to, o = L(n, ["from", "to"]), i = Bt(r) || Bt(e), u = i.transform, a = i.parse;
            return t(N({}, o, {from: "string" == typeof r ? a(r) : r, to: "string" == typeof e ? a(e) : e})).pipe(u)
        }, zt = function (t, n) {
            var r = n.from, e = n.to, o = L(n, ["from", "to"]);
            return t(N({}, o, {from: 0, to: 1})).pipe(Pt(r, e), st.transform)
        }, Dt = function (t, n) {
            var r = n.from, e = n.to, o = L(n, ["from", "to"]), i = ht(r);
            return i(r), ht(e)(r), t(N({}, o, {from: 0, to: 1})).pipe(Et(vt(r), vt(e)), i)
        }, Kt = function (t, n) {
            var r = function (t) {
                var n = Object.keys(t), r = function (n, r) {
                    return void 0 !== n && !t[r](n)
                };
                return {
                    getVectorKeys: function (t) {
                        return n.reduce(function (n, e) {
                            return r(t[e], e) && n.push(e), n
                        }, [])
                    }, testVectorProps: function (t) {
                        return t && n.some(function (n) {
                            return r(t[n], n)
                        })
                    }
                }
            }(n), e = r.testVectorProps, o = r.getVectorKeys;
            return function (n) {
                if (!e(n)) return t(n);
                var r = o(n), i = n[r[0]];
                return Ht(i)(t, n, r)
            }
        }, Ht = function (t) {
            var n = Wt;
            return "number" == typeof t ? n = Wt : Array.isArray(t) ? n = qt : !function (t) {
                return Boolean(Bt(t))
            }(t) ? st.test(t) ? n = zt : dt(t) ? n = Dt : "object" == typeof t && (n = Ut) : n = Vt, n
        }, Jt = Kt(function (t) {
            var n = t.from, r = void 0 === n ? 0 : n, e = t.to, o = void 0 === e ? 1 : e, i = t.ease,
                u = void 0 === i ? a : i;
            return _t(function (t) {
                var n = t.update;
                return {
                    seek: function (t) {
                        return n(t)
                    }
                }
            }).pipe(u, function (t) {
                return wt(r, o, t)
            })
        }, {
            ease: function (t) {
                return "function" == typeof t
            }, from: V.test, to: V.test
        }), Qt = yt(0, 1), Zt = function (t) {
            return void 0 === t && (t = {}), _t(function (n) {
                var r, e = n.update, o = n.complete, i = t.duration, u = void 0 === i ? 300 : i, a = t.ease,
                    c = void 0 === a ? f : a, s = t.flip, p = void 0 === s ? 0 : s, l = t.loop,
                    d = void 0 === l ? 0 : l, v = t.yoyo, h = void 0 === v ? 0 : v, m = t.from,
                    g = void 0 === m ? 0 : m, y = t.to, b = void 0 === y ? 1 : y, w = t.elapsed,
                    O = void 0 === w ? 0 : w, x = t.playDirection, j = void 0 === x ? 1 : x, M = t.flipCount,
                    P = void 0 === M ? 0 : M, C = t.yoyoCount, S = void 0 === C ? 0 : C, E = t.loopCount,
                    A = void 0 === E ? 0 : E, T = Jt({from: g, to: b, ease: c}).start(e), X = 0, Y = !1,
                    k = function () {
                        return j *= -1
                    }, _ = function () {
                        X = Qt(bt(0, u, O)), T.seek(X)
                    }, F = function () {
                        Y = !0, r = R.update(function (t) {
                            var n = t.delta;
                            O += n * j, _(), function () {
                                var t, n = 1 === j ? Y && O >= u : Y && O <= 0;
                                if (!n) return !1;
                                if (n && !d && !p && !h) return !0;
                                var r = !1;
                                return d && A < d ? (O = 0, A++, r = !0) : p && P < p ? (O = u - O, T = Jt({
                                    from: g = (t = [b, g])[0],
                                    to: b = t[1],
                                    ease: c
                                }).start(e), P++, r = !0) : h && S < h && (k(), S++, r = !0), !r
                            }() && o && (I.update(r), R.update(o, !1, !0))
                        }, !0)
                    }, G = function () {
                        Y = !1, r && I.update(r)
                    };
                return F(), {
                    isActive: function () {
                        return Y
                    }, getElapsed: function () {
                        return yt(0, u, O)
                    }, getProgress: function () {
                        return X
                    }, stop: function () {
                        G()
                    }, pause: function () {
                        return G(), this
                    }, resume: function () {
                        return Y || F(), this
                    }, seek: function (t) {
                        return O = wt(0, u, t), R.update(_, !1, !0), this
                    }, reverse: function () {
                        return k(), this
                    }
                }
            })
        }, tn = function (t, n, r) {
            return _t(function (e) {
                var o = e.update, i = n.split(" ").map(function (n) {
                    return t.addEventListener(n, o, r), n
                });
                return {
                    stop: function () {
                        return i.forEach(function (n) {
                            return t.removeEventListener(n, o, r)
                        })
                    }
                }
            })
        }, nn = function () {
            return {clientX: 0, clientY: 0, pageX: 0, pageY: 0, x: 0, y: 0}
        }, rn = function (t, n) {
            return void 0 === n && (n = {
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                x: 0,
                y: 0
            }), n.clientX = n.x = t.clientX, n.clientY = n.y = t.clientY, n.pageX = t.pageX, n.pageY = t.pageY, n
        }, en = [nn()];
        if ("undefined" != typeof document) {
            tn(document, "touchstart touchmove", {passive: !0, capture: !0}).start(function (t) {
                var n = t.touches;
                !0;
                var r = n.length;
                en.length = 0;
                for (var e = 0; e < r; e++) {
                    var o = n[e];
                    en.push(rn(o))
                }
            })
        }
        var on = nn();
        if ("undefined" != typeof document) {
            tn(document, "mousedown mousemove", !0).start(function (t) {
                !0, rn(t, on)
            })
        }
        r.d(n, "wrapGrid", function () {
            return sn
        });
        var un = {
            anticipate: g,
            backIn: v,
            backInOut: m,
            backOut: h,
            circIn: p,
            circInOut: d,
            circOut: l,
            easeIn: c,
            easeInOut: s,
            easeOut: f,
            linear: a
        }, an = function (t) {
            return t ? Array.prototype.slice.call(t) : []
        }, cn = function (t, n) {
            var r = n.getBoundingClientRect(), e = {top: r.top, left: r.left, width: r.width, height: r.height};
            return e.top -= t.top, e.left -= t.left, e.top = Math.max(e.top, 0), e.left = Math.max(e.left, 0), e
        }, fn = function (t, n) {
            var r = n.translateX, e = n.translateY, o = n.scaleX, i = n.scaleY,
                u = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).immediate,
                a = 0 === r && 0 === e && 1 === o && 1 === i, c = function () {
                    t.style.transform = a ? "" : "translateX(".concat(r, "px) translateY(").concat(e, "px) scaleX(").concat(o, ") scaleY(").concat(i, ")")
                };
            u ? c() : R.render(c);
            var f = t.children[0];
            if (f) {
                var s = function () {
                    f.style.transform = a ? "" : "scaleX(".concat(1 / o, ") scaleY(").concat(1 / i, ")")
                };
                u ? s() : R.render(s)
            }
        }, sn = function (t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = n.duration,
                e = void 0 === r ? 250 : r, o = n.stagger, i = void 0 === o ? 0 : o, u = n.easing,
                a = void 0 === u ? "easeInOut" : u, c = n.onStart, f = void 0 === c ? function () {
                } : c, s = n.onEnd, p = void 0 === s ? function () {
                } : s;
            if (!un[a]) throw new Error("".concat(a, " is not a valid easing name"));
            var l = {}, d = function (n) {
                var r = t.getBoundingClientRect();
                an(n).forEach(function (t) {
                    if ("function" == typeof t.getBoundingClientRect) {
                        if (!t.dataset.animateGridId) {
                            var n = "".concat(Math.random());
                            t.dataset.animateGridId = n, l[n] = {}
                        }
                        var e = t.dataset.animateGridId, o = cn(r, t);
                        l[e].rect = o, l[e].gridBoundingClientRect = r
                    }
                })
            };
            d(t.children);
            var v = F()(function () {
                var n = document.querySelector("body"), r = n && !n.contains(t);
                t && !r || window.removeEventListener("resize", v), d(t.children)
            }, 250);
            window.addEventListener("resize", v);
            var h = F()(function () {
                d(t.children)
            }, 20);
            t.addEventListener("scroll", h);
            var m = function (n) {
                if ("forceGridAnimation" !== n && !n.filter(function (t) {
                    return "class" === t.attributeName || t.addedNodes.length || t.removedNodes.length
                }).length) return;
                var r = t.getBoundingClientRect(), o = an(t.children);
                o.filter(function (t) {
                    var n = l[t.dataset.animateGridId];
                    if (n && n.stopTween) return n.stopTween(), delete n.stopTween, !0
                }).forEach(function (t) {
                    t.style.transform = "";
                    var n = t.children[0];
                    n && (n.style.transform = "")
                });
                var u = o.map(function (t) {
                    return {childCoords: {}, el: t, boundingClientRect: cn(r, t)}
                }).filter(function (t) {
                    var n = t.el, r = t.boundingClientRect, e = l[n.dataset.animateGridId];
                    return e ? r.top !== e.rect.top || r.left !== e.rect.left || r.width !== e.rect.width || r.height !== e.rect.height : (d([n]), !1)
                });
                if (u.forEach(function (t) {
                    var n = t.el;
                    if (an(n.children).length > 1) throw new Error("Make sure every grid item has a single container element surrounding its children")
                }), u.length) {
                    var c = u.map(function (t) {
                        return t.el
                    });
                    f(c);
                    var s = [];
                    u.map(function (t) {
                        var n = t.el.children[0];
                        return n && (t.childCoords = cn(r, n)), t
                    }).forEach(function (t, n) {
                        var r = t.el, o = t.boundingClientRect, u = o.top, c = o.left, f = o.width, p = o.height,
                            v = t.childCoords, h = v.top, m = v.left, g = r.children[0], y = l[r.dataset.animateGridId],
                            b = {
                                scaleX: y.rect.width / f,
                                scaleY: y.rect.height / p,
                                translateX: y.rect.left - c,
                                translateY: y.rect.top - u
                            };
                        r.style.transformOrigin = "0 0", g && m === c && h === u && (g.style.transformOrigin = "0 0");
                        var w = function () {
                        }, O = new Promise(function (t) {
                            w = t
                        });
                        s.push(O), fn(r, b, {immediate: !0});
                        var x = function () {
                            var t = Zt({
                                from: b,
                                to: {translateX: 0, translateY: 0, scaleX: 1, scaleY: 1},
                                duration: e,
                                ease: un[a]
                            }).start({
                                update: function (t) {
                                    fn(r, t), R.postRender(function () {
                                        return d([r])
                                    })
                                }, complete: w
                            }).stop;
                            y.stopTween = t
                        };
                        if ("number" != typeof i) x(); else {
                            var j = setTimeout(function () {
                                R.update(x)
                            }, i * n);
                            y.stopTween = function () {
                                return clearTimeout(j)
                            }
                        }
                    }), Promise.all(s).then(function () {
                        p(c)
                    })
                }
            }, g = new MutationObserver(m);
            g.observe(t, {childList: !0, attributes: !0, subtree: !0, attributeFilter: ["class"]});
            return {
                unwrapGrid: function () {
                    window.removeEventListener("resize", v), t.removeEventListener("scroll", h), g.disconnect()
                }, forceGridAnimation: function () {
                    return m("forceGridAnimation")
                }
            }
        }
    }])
});
//# sourceMappingURL=main.js.map