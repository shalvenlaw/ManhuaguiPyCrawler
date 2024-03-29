(function (n, t) {
    function se(n) {
        var t = vt[n] = {};
        return i.each(n.split(l), function (n, i) {
            t[i] = !0
        }), t
    }

    function tr(n, r, u) {
        if (u === t && n.nodeType === 1) {
            var f = "data-" + r.replace(eu, "-$1").toLowerCase();
            if (u = n.getAttribute(f), typeof u == "string") {
                try {
                    u = u === "true" ? !0 : u === "false" ? !1 : u === "null" ? null : +u + "" === u ? +u : ou.test(u) ? i.parseJSON(u) : u
                } catch (e) {}
                i.data(n, r, u)
            } else u = t
        }
        return u
    }

    function ri(n) {
        var t;
        for (t in n)
            if ((t !== "data" || !i.isEmptyObject(n[t])) && t !== "toJSON") return !1;
        return !0
    }

    function p() {
        return !1
    }

    function ft() {
        return !0
    }

    function d(n) {
        return !n || !n.parentNode || n.parentNode.nodeType === 11
    }

    function ir(n, t) {
        do n = n[t]; while (n && n.nodeType !== 1);
        return n
    }

    function rr(n, t, r) {
        if (t = t || 0, i.isFunction(t)) return i.grep(n, function (n, i) {
            var u = !!t.call(n, i, n);
            return u === r
        });
        if (t.nodeType) return i.grep(n, function (n) {
            return n === t === r
        });
        if (typeof t == "string") {
            var u = i.grep(n, function (n) {
                return n.nodeType === 1
            });
            if (ke.test(t)) return i.filter(t, u, !r);
            t = i.filter(t, u)
        }
        return i.grep(n, function (n) {
            return i.inArray(n, t) >= 0 === r
        })
    }

    function wi(n) {
        var i = bi.split("|"),
            t = n.createDocumentFragment();
        if (t.createElement)
            while (i.length) t.createElement(i.pop());
        return t
    }

    function he(n, t) {
        return n.getElementsByTagName(t)[0] || n.appendChild(n.ownerDocument.createElement(t))
    }

    function oi(n, t) {
        if (t.nodeType === 1 && i.hasData(n)) {
            var e, f, o, s = i._data(n),
                r = i._data(t, s),
                u = s.events;
            if (u) {
                delete r.handle, r.events = {};
                for (e in u)
                    for (f = 0, o = u[e].length; f < o; f++) i.event.add(t, e, u[e][f])
            }
            r.data && (r.data = i.extend({}, r.data))
        }
    }

    function fi(n, t) {
        var r;
        t.nodeType === 1 && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(n), r = t.nodeName.toLowerCase(), r === "object" ? (t.parentNode && (t.outerHTML = n.outerHTML), i.support.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : r === "input" && ui.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : r === "option" ? t.selected = n.defaultSelected : r === "input" || r === "textarea" ? t.defaultValue = n.defaultValue : r === "script" && t.text !== n.text && (t.text = n.text), t.removeAttribute(i.expando))
    }

    function et(n) {
        return typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName("*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll("*") : []
    }

    function vi(n) {
        ui.test(n.type) && (n.defaultChecked = n.checked)
    }

    function hi(n, t) {
        if (t in n) return t;
        for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = er.length; i--;)
            if (t = er[i] + r, t in n) return t;
        return u
    }

    function ut(n, t) {
        return n = t || n, i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n)
    }

    function ci(n, t) {
        for (var r, o, e = [], f = 0, s = n.length; f < s; f++)(r = n[f], r.style) && (e[f] = i._data(r, "olddisplay"), t ? (!e[f] && r.style.display === "none" && (r.style.display = ""), r.style.display === "" && ut(r) && (e[f] = i._data(r, "olddisplay", iu(r.nodeName)))) : (o = u(r, "display"), !e[f] && o !== "none" && i._data(r, "olddisplay", o)));
        for (f = 0; f < s; f++)(r = n[f], r.style) && (t && r.style.display !== "none" && r.style.display !== "" || (r.style.display = t ? e[f] || "" : "none"));
        return n
    }

    function hr(n, t, i) {
        var r = bu.exec(t);
        return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }

    function hu(n, t, r, f) {
        for (var e = r === (f ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0; e < 4; e += 2) r === "margin" && (o += i.css(n, r + a[e], !0)), f ? (r === "content" && (o -= parseFloat(u(n, "padding" + a[e])) || 0), r !== "margin" && (o -= parseFloat(u(n, "border" + a[e] + "Width")) || 0)) : (o += parseFloat(u(n, "padding" + a[e])) || 0, r !== "padding" && (o += parseFloat(u(n, "border" + a[e] + "Width")) || 0));
        return o
    }

    function su(n, t, r) {
        var f = t === "width" ? n.offsetWidth : n.offsetHeight,
            o = !0,
            e = i.support.boxSizing && i.css(n, "boxSizing") === "border-box";
        if (f <= 0 || f == null) {
            if (f = u(n, t), (f < 0 || f == null) && (f = n.style[t]), ot.test(f)) return f;
            o = e && (i.support.boxSizingReliable || f === n.style[t]), f = parseFloat(f) || 0
        }
        return f + hu(n, t, r || (e ? "border" : "content"), o) + "px"
    }

    function iu(n) {
        if (pt[n]) return pt[n];
        var f = i("<" + n + ">").appendTo(r.body),
            t = f.css("display");
        return f.remove(), (t === "none" || t === "") && (w = r.body.appendChild(w || i.extend(r.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })), v && w.createElement || (v = (w.contentWindow || w.contentDocument).document, v.write("<!doctype html><html><body>"), v.close()), f = v.body.appendChild(v.createElement(n)), t = u(f, "display"), r.body.removeChild(w)), pt[n] = t, t
    }

    function ti(n, t, r, u) {
        var f;
        if (i.isArray(t)) i.each(t, function (t, i) {
            r || sf.test(n) ? u(n, i) : ti(n + "[" + (typeof i == "object" ? t : "") + "]", i, r, u)
        });
        else if (r || i.type(t) !== "object") u(n, t);
        else
            for (f in t) ti(n + "[" + f + "]", t[f], r, u)
    }

    function cu(n) {
        return function (t, r) {
            typeof t != "string" && (r = t, t = "*");
            var u, s, f, o = t.toLowerCase().split(l),
                e = 0,
                h = o.length;
            if (i.isFunction(r))
                for (; e < h; e++) u = o[e], f = /^\+/.test(u), f && (u = u.substr(1) || "*"), s = n[u] = n[u] || [], s[f ? "unshift" : "push"](r)
        }
    }

    function nt(n, i, r, u, f, e) {
        f = f || i.dataTypes[0], e = e || {}, e[f] = !0;
        for (var o, c = n[f], h = 0, l = c ? c.length : 0, s = n === bt; h < l && (s || !o); h++) o = c[h](i, r, u), typeof o == "string" && (!s || e[o] ? o = t : (i.dataTypes.unshift(o), o = nt(n, i, r, u, o, e)));
        return (s || !o) && !e["*"] && (o = nt(n, i, r, u, "*", e)), o
    }

    function pr(n, r) {
        var u, f, e = i.ajaxSettings.flatOptions || {};
        for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
        f && i.extend(!0, n, f)
    }

    function oe(n, i, r) {
        var o, u, e, h, s = n.contents,
            f = n.dataTypes,
            c = n.responseFields;
        for (u in c) u in r && (i[c[u]] = r[u]);
        while (f[0] === "*") f.shift(), o === t && (o = n.mimeType || i.getResponseHeader("content-type"));
        if (o)
            for (u in s)
                if (s[u] && s[u].test(o)) {
                    f.unshift(u);
                    break
                } if (f[0] in r) e = f[0];
        else {
            for (u in r) {
                if (!f[0] || n.converters[u + " " + f[0]]) {
                    e = u;
                    break
                }
                h || (h = u)
            }
            e = e || h
        }
        if (e) return e !== f[0] && f.unshift(e), r[e]
    }

    function fe(n, t) {
        var i, o, r, e, s = n.dataTypes.slice(),
            f = s[0],
            u = {},
            h = 0;
        if (n.dataFilter && (t = n.dataFilter(t, n.dataType)), s[1])
            for (i in n.converters) u[i.toLowerCase()] = n.converters[i];
        for (; r = s[++h];)
            if (r !== "*") {
                if (f !== "*" && f !== r) {
                    if (i = u[f + " " + r] || u["* " + r], !i)
                        for (o in u)
                            if (e = o.split(" "), e[1] === r && (i = u[f + " " + e[0]] || u["* " + e[0]], i)) {
                                i === !0 ? i = u[o] : u[o] !== !0 && (r = e[0], s.splice(h--, 0, r));
                                break
                            } if (i !== !0)
                        if (i && n.throws) t = i(t);
                        else try {
                            t = i(t)
                        } catch (c) {
                            return {
                                state: "parsererror",
                                error: i ? c : "No conversion from " + f + " to " + r
                            }
                        }
                }
                f = r
            } return {
            state: "success",
            data: t
        }
    }

    function cr() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }

    function ee() {
        try {
            return new n.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function lr() {
        return setTimeout(function () {
            b = t
        }, 0), b = i.now()
    }

    function ve(n, t) {
        i.each(t, function (t, i) {
            for (var u = (k[t] || []).concat(k["*"]), r = 0, f = u.length; r < f; r++)
                if (u[r].call(n, t, i)) return
        })
    }

    function ar(n, t, r) {
        var s, o = 0,
            c = lt.length,
            f = i.Deferred().always(function () {
                delete h.elem
            }),
            h = function () {
                for (var o = b || lr(), i = Math.max(0, u.startTime + u.duration - o), s = i / u.duration || 0, t = 1 - s, r = 0, e = u.tweens.length; r < e; r++) u.tweens[r].run(t);
                return f.notifyWith(n, [u, t, i]), t < 1 && e ? i : (f.resolveWith(n, [u]), !1)
            },
            u = f.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {}
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: b || lr(),
                duration: r.duration,
                tweens: [],
                createTween: function (t, r) {
                    var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(f), f
                },
                stop: function (t) {
                    for (var i = 0, r = t ? u.tweens.length : 0; i < r; i++) u.tweens[i].run(1);
                    return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
                }
            }),
            e = u.props;
        for (ye(e, u.opts.specialEasing); o < c; o++)
            if (s = lt[o].call(u, n, e, u.opts), s) return s;
        return ve(u, e), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(h, {
            anim: u,
            queue: u.opts.queue,
            elem: n
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function ye(n, t) {
        var r, f, o, u, e;
        for (r in n)
            if (f = i.camelCase(r), o = t[f], u = n[r], i.isArray(u) && (o = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), e = i.cssHooks[f], e && "expand" in e) {
                u = e.expand(u), delete n[f];
                for (r in u) r in n || (n[r] = u[r], t[r] = o)
            } else t[f] = o
    }

    function ae(n, t, r) {
        var s, u, a, w, o, v, l, e, b, h = this,
            f = n.style,
            p = {},
            y = [],
            c = n.nodeType && ut(n);
        r.queue || (e = i._queueHooks(n, "fx"), e.unqueued == null && (e.unqueued = 0, b = e.empty.fire, e.empty.fire = function () {
            e.unqueued || b()
        }), e.unqueued++, h.always(function () {
            h.always(function () {
                e.unqueued--, i.queue(n, "fx").length || e.empty.fire()
            })
        })), n.nodeType === 1 && ("height" in t || "width" in t) && (r.overflow = [f.overflow, f.overflowX, f.overflowY], i.css(n, "display") === "inline" && i.css(n, "float") === "none" && (!i.support.inlineBlockNeedsLayout || iu(n.nodeName) === "inline" ? f.display = "inline-block" : f.zoom = 1)), r.overflow && (f.overflow = "hidden", i.support.shrinkWrapBlocks || h.done(function () {
            f.overflow = r.overflow[0], f.overflowX = r.overflow[1], f.overflowY = r.overflow[2]
        }));
        for (s in t)
            if (a = t[s], ff.exec(a)) {
                if (delete t[s], v = v || a === "toggle", a === (c ? "hide" : "show")) continue;
                y.push(s)
            } if (w = y.length, w)
            for (o = i._data(n, "fxshow") || i._data(n, "fxshow", {}), ("hidden" in o) && (c = o.hidden), v && (o.hidden = !c), c ? i(n).show() : h.done(function () {
                    i(n).hide()
                }), h.done(function () {
                    var t;
                    i.removeData(n, "fxshow", !0);
                    for (t in p) i.style(n, t, p[t])
                }), s = 0; s < w; s++) u = y[s], l = h.createTween(u, c ? o[u] : 0), p[u] = o[u] || i.style(n, u), u in o || (o[u] = l.start, c && (l.end = l.start, l.start = u === "width" || u === "height" ? 1 : 0))
    }

    function f(n, t, i, r, u) {
        return new f.prototype.init(n, t, i, r, u)
    }

    function it(n, t) {
        var u, i = {
                height: n
            },
            r = 0;
        for (t = t ? 1 : 0; r < 4; r += 2 - t) u = a[r], i["margin" + u] = i["padding" + u] = n;
        return t && (i.opacity = i.width = n), i
    }

    function nu(n) {
        return i.isWindow(n) ? n : n.nodeType === 9 ? n.defaultView || n.parentWindow : !1
    }
    var dr, tt, r = n.document,
        ce = n.location,
        le = n.navigator,
        ue = n.jQuery,
        kf = n.$,
        tu = Array.prototype.push,
        o = Array.prototype.slice,
        gr = Array.prototype.indexOf,
        df = Object.prototype.toString,
        gt = Object.prototype.hasOwnProperty,
        ni = String.prototype.trim,
        i = function (n, t) {
            return new i.fn.init(n, t, dr)
        },
        rt = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        bf = /\S/,
        l = /\s+/,
        pf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        wf = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        lu = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ie = /^[\],:{}\s]*$/,
        re = /(?:^|:|,)(?:\s*\[)+/g,
        te = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        gf = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        ne = /^-ms-/,
        so = /-([\da-z])/gi,
        ho = function (n, t) {
            return (t + "").toUpperCase()
        },
        ht = function () {
            r.addEventListener ? (r.removeEventListener("DOMContentLoaded", ht, !1), i.ready()) : r.readyState === "complete" && (r.detachEvent("onreadystatechange", ht), i.ready())
        },
        fu = {},
        vt, ou, eu, y, st, li, wt;
    i.fn = i.prototype = {
        constructor: i,
        init: function (n, u, f) {
            var e, o, s;
            if (!n) return this;
            if (n.nodeType) return this.context = this[0] = n, this.length = 1, this;
            if (typeof n == "string") {
                if (e = n.charAt(0) === "<" && n.charAt(n.length - 1) === ">" && n.length >= 3 ? [null, n, null] : wf.exec(n), e && (e[1] || !u)) {
                    if (e[1]) return u = u instanceof i ? u[0] : u, s = u && u.nodeType ? u.ownerDocument || u : r, n = i.parseHTML(e[1], s, !0), lu.test(e[1]) && i.isPlainObject(u) && this.attr.call(n, u, !0), i.merge(this, n);
                    if (o = r.getElementById(e[2]), o && o.parentNode) {
                        if (o.id !== e[2]) return f.find(n);
                        this.length = 1, this[0] = o
                    }
                    return this.context = r, this.selector = n, this
                }
                return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n)
            }
            return i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function () {
            return this.length
        },
        toArray: function () {
            return o.call(this)
        },
        get: function (n) {
            return n == null ? this.toArray() : n < 0 ? this[this.length + n] : this[n]
        },
        pushStack: function (n, t, r) {
            var u = i.merge(this.constructor(), n);
            return u.prevObject = this, u.context = this.context, t === "find" ? u.selector = this.selector + (this.selector ? " " : "") + r : t && (u.selector = this.selector + "." + t + "(" + r + ")"), u
        },
        each: function (n, t) {
            return i.each(this, n, t)
        },
        ready: function (n) {
            return i.ready.promise().done(n), this
        },
        eq: function (n) {
            return n = +n, n === -1 ? this.slice(n) : this.slice(n, n + 1)
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments), "slice", o.call(arguments).join(","))
        },
        map: function (n) {
            return this.pushStack(i.map(this, function (t, i) {
                return n.call(t, i, t)
            }))
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: tu,
        sort: [].sort,
        splice: [].splice
    }, i.fn.init.prototype = i.fn, i.extend = i.fn.extend = function () {
        var s, e, u, r, h, c, n = arguments[0] || {},
            f = 1,
            l = arguments.length,
            o = !1;
        for (typeof n == "boolean" && (o = n, n = arguments[1] || {}, f = 2), typeof n != "object" && !i.isFunction(n) && (n = {}), l === f && (n = this, --f); f < l; f++)
            if ((s = arguments[f]) != null)
                for (e in s)(u = n[e], r = s[e], n !== r) && (o && r && (i.isPlainObject(r) || (h = i.isArray(r))) ? (h ? (h = !1, c = u && i.isArray(u) ? u : []) : c = u && i.isPlainObject(u) ? u : {}, n[e] = i.extend(o, c, r)) : r !== t && (n[e] = r));
        return n
    }, i.extend({
        noConflict: function (t) {
            return n.$ === i && (n.$ = kf), t && n.jQuery === i && (n.jQuery = ue), i
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (n) {
            n ? i.readyWait++ : i.ready(!0)
        },
        ready: function (n) {
            if (n === !0 ? !--i.readyWait : !i.isReady) {
                if (!r.body) return setTimeout(i.ready, 1);
                (i.isReady = !0, n !== !0 && --i.readyWait > 0) || (tt.resolveWith(r, [i]), i.fn.trigger && i(r).trigger("ready").off("ready"))
            }
        },
        isFunction: function (n) {
            return i.type(n) === "function"
        },
        isArray: Array.isArray || function (n) {
            return i.type(n) === "array"
        },
        isWindow: function (n) {
            return n != null && n == n.window
        },
        isNumeric: function (n) {
            return !isNaN(parseFloat(n)) && isFinite(n)
        },
        type: function (n) {
            return n == null ? String(n) : fu[df.call(n)] || "object"
        },
        isPlainObject: function (n) {
            if (!n || i.type(n) !== "object" || n.nodeType || i.isWindow(n)) return !1;
            try {
                if (n.constructor && !gt.call(n, "constructor") && !gt.call(n.constructor.prototype, "isPrototypeOf")) return !1
            } catch (u) {
                return !1
            }
            var r;
            for (r in n);
            return r === t || gt.call(n, r)
        },
        isEmptyObject: function (n) {
            var t;
            for (t in n) return !1;
            return !0
        },
        error: function (n) {
            throw new Error(n);
        },
        parseHTML: function (n, t, u) {
            var f;
            return !n || typeof n != "string" ? null : (typeof t == "boolean" && (u = t, t = 0), t = t || r, (f = lu.exec(n)) ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, u ? null : []), i.merge([], (f.cacheable ? i.clone(f.fragment) : f.fragment).childNodes)))
        },
        parseJSON: function (t) {
            if (!t || typeof t != "string") return null;
            if (t = i.trim(t), n.JSON && n.JSON.parse) return n.JSON.parse(t);
            if (ie.test(t.replace(te, "@").replace(gf, "]").replace(re, ""))) return new Function("return " + t)();
            i.error("Invalid JSON: " + t)
        },
        parseXML: function (r) {
            var u, f;
            if (!r || typeof r != "string") return null;
            try {
                n.DOMParser ? (f = new DOMParser, u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"), u.async = "false", u.loadXML(r))
            } catch (e) {
                u = t
            }
            return (!u || !u.documentElement || u.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + r), u
        },
        noop: function () {},
        globalEval: function (t) {
            t && bf.test(t) && (n.execScript || function (t) {
                n.eval.call(n, t)
            })(t)
        },
        camelCase: function (n) {
            return n.replace(ne, "ms-").replace(so, ho)
        },
        nodeName: function (n, t) {
            return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function (n, r, u) {
            var e, f = 0,
                o = n.length,
                s = o === t || i.isFunction(n);
            if (u) {
                if (s) {
                    for (e in n)
                        if (r.apply(n[e], u) === !1) break
                } else
                    for (; f < o;)
                        if (r.apply(n[f++], u) === !1) break
            } else if (s) {
                for (e in n)
                    if (r.call(n[e], e, n[e]) === !1) break
            } else
                for (; f < o;)
                    if (r.call(n[f], f, n[f++]) === !1) break;
            return n
        },
        trim: ni && !ni.call("﻿ ") ? function (n) {
            return n == null ? "" : ni.call(n)
        } : function (n) {
            return n == null ? "" : (n + "").replace(pf, "")
        },
        makeArray: function (n, t) {
            var r, u = t || [];
            return n != null && (r = i.type(n), n.length == null || r === "string" || r === "function" || r === "regexp" || i.isWindow(n) ? tu.call(u, n) : i.merge(u, n)), u
        },
        inArray: function (n, t, i) {
            var r;
            if (t) {
                if (gr) return gr.call(t, n, i);
                for (r = t.length, i = i ? i < 0 ? Math.max(0, r + i) : i : 0; i < r; i++)
                    if (i in t && t[i] === n) return i
            }
            return -1
        },
        merge: function (n, i) {
            var f = i.length,
                u = n.length,
                r = 0;
            if (typeof f == "number")
                for (; r < f; r++) n[u++] = i[r];
            else
                while (i[r] !== t) n[u++] = i[r++];
            return n.length = u, n
        },
        grep: function (n, t, i) {
            var f, u = [],
                r = 0,
                e = n.length;
            for (i = !!i; r < e; r++) f = !!t(n[r], r), i !== f && u.push(n[r]);
            return u
        },
        map: function (n, r, u) {
            var o, h, f = [],
                s = 0,
                e = n.length,
                c = n instanceof i || e !== t && typeof e == "number" && (e > 0 && n[0] && n[e - 1] || e === 0 || i.isArray(n));
            if (c)
                for (; s < e; s++) o = r(n[s], s, u), o != null && (f[f.length] = o);
            else
                for (h in n) o = r(n[h], h, u), o != null && (f[f.length] = o);
            return f.concat.apply([], f)
        },
        guid: 1,
        proxy: function (n, r) {
            var f, e, u;
            return typeof r == "string" && (f = n[r], r = n, n = f), i.isFunction(n) ? (e = o.call(arguments, 2), u = function () {
                return n.apply(r, e.concat(o.call(arguments)))
            }, u.guid = n.guid = n.guid || i.guid++, u) : t
        },
        access: function (n, r, u, f, e, o, s) {
            var c, a = u == null,
                h = 0,
                l = n.length;
            if (u && typeof u == "object") {
                for (h in u) i.access(n, r, h, u[h], 1, o, f);
                e = 1
            } else if (f !== t) {
                if (c = s === t && i.isFunction(f), a && (c ? (c = r, r = function (n, t, r) {
                        return c.call(i(n), r)
                    }) : (r.call(n, f), r = null)), r)
                    for (; h < l; h++) r(n[h], u, c ? f.call(n[h], h, r(n[h], u)) : f, s);
                e = 1
            }
            return e ? n : a ? r.call(n) : l ? r(n[0], u) : o
        },
        now: function () {
            return +new Date
        }
    }), i.ready.promise = function (t) {
        if (!tt)
            if (tt = i.Deferred(), r.readyState === "complete") setTimeout(i.ready, 1);
            else if (r.addEventListener) r.addEventListener("DOMContentLoaded", ht, !1), n.addEventListener("load", i.ready, !1);
        else {
            r.attachEvent("onreadystatechange", ht), n.attachEvent("onload", i.ready);
            var u = !1;
            try {
                u = n.frameElement == null && r.documentElement
            } catch (e) {}
            u && u.doScroll && function f() {
                if (!i.isReady) {
                    try {
                        u.doScroll("left")
                    } catch (n) {
                        return setTimeout(f, 50)
                    }
                    i.ready()
                }
            }()
        }
        return tt.promise(t)
    }, i.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (n, t) {
        fu["[object " + t + "]"] = t.toLowerCase()
    }), dr = i(r), vt = {}, i.Callbacks = function (n) {
        n = typeof n == "string" ? vt[n] || se(n) : i.extend({}, n);
        var f, c, s, a, h, e, r = [],
            u = !n.once && [],
            l = function (t) {
                for (f = n.memory && t, c = !0, e = a || 0, a = 0, h = r.length, s = !0; r && e < h; e++)
                    if (r[e].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
                        f = !1;
                        break
                    } s = !1, r && (u ? u.length && l(u.shift()) : f ? r = [] : o.disable())
            },
            o = {
                add: function () {
                    if (r) {
                        var u = r.length;
                        (function t(u) {
                            i.each(u, function (u, f) {
                                var e = i.type(f);
                                e === "function" ? (!n.unique || !o.has(f)) && r.push(f) : f && f.length && e !== "string" && t(f)
                            })
                        })(arguments), s ? h = r.length : f && (a = u, l(f))
                    }
                    return this
                },
                remove: function () {
                    return r && i.each(arguments, function (n, t) {
                        for (var u;
                            (u = i.inArray(t, r, u)) > -1;) r.splice(u, 1), s && (u <= h && h--, u <= e && e--)
                    }), this
                },
                has: function (n) {
                    return i.inArray(n, r) > -1
                },
                empty: function () {
                    return r = [], this
                },
                disable: function () {
                    return r = u = f = t, this
                },
                disabled: function () {
                    return !r
                },
                lock: function () {
                    return u = t, f || o.disable(), this
                },
                locked: function () {
                    return !u
                },
                fireWith: function (n, t) {
                    return t = t || [], t = [n, t.slice ? t.slice() : t], r && (!c || u) && (s ? u.push(t) : l(t)), this
                },
                fire: function () {
                    return o.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!c
                }
            };
        return o
    }, i.extend({
        Deferred: function (n) {
            var u = [
                    ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", i.Callbacks("memory")]
                ],
                f = "pending",
                r = {
                    state: function () {
                        return f
                    },
                    always: function () {
                        return t.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var n = arguments;
                        return i.Deferred(function (r) {
                            i.each(u, function (u, f) {
                                var o = f[0],
                                    e = n[u];
                                t[f[1]](i.isFunction(e) ? function () {
                                    var n = e.apply(this, arguments);
                                    n && i.isFunction(n.promise) ? n.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[o + "With"](this === t ? r : this, [n])
                                } : r[o])
                            }), n = null
                        }).promise()
                    },
                    promise: function (n) {
                        return n != null ? i.extend(n, r) : r
                    }
                },
                t = {};
            return r.pipe = r.then, i.each(u, function (n, i) {
                var e = i[2],
                    o = i[3];
                r[i[1]] = e.add, o && e.add(function () {
                    f = o
                }, u[n ^ 1][2].disable, u[2][2].lock), t[i[0]] = e.fire, t[i[0] + "With"] = e.fireWith
            }), r.promise(t), n && n.call(t, t), t
        },
        when: function (n) {
            var r = 0,
                u = o.call(arguments),
                t = u.length,
                e = t !== 1 || n && i.isFunction(n.promise) ? t : 0,
                f = e === 1 ? n : i.Deferred(),
                c = function (n, t, i) {
                    return function (r) {
                        t[n] = this, i[n] = arguments.length > 1 ? o.call(arguments) : r, i === h ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                    }
                },
                h, l, s;
            if (t > 1)
                for (h = new Array(t), l = new Array(t), s = new Array(t); r < t; r++) u[r] && i.isFunction(u[r].promise) ? u[r].promise().done(c(r, s, u)).fail(f.reject).progress(c(r, l, h)) : --e;
            return e || f.resolveWith(s, u), f.promise()
        }
    }), i.support = function () {
        var u, h, e, l, c, f, o, a, v, s, y, t = r.createElement("div");
        if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", h = t.getElementsByTagName("*"), e = t.getElementsByTagName("a")[0], !h || !e || !h.length) return {};
        l = r.createElement("select"), c = l.appendChild(r.createElement("option")), f = t.getElementsByTagName("input")[0], e.style.cssText = "top:1px;float:left;opacity:.5", u = {
            leadingWhitespace: t.firstChild.nodeType === 3,
            tbody: !t.getElementsByTagName("tbody").length,
            htmlSerialize: !!t.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.5/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: f.value === "on",
            optSelected: c.selected,
            getSetAttribute: t.className !== "t",
            enctype: !!r.createElement("form").enctype,
            html5Clone: r.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: r.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, f.checked = !0, u.noCloneChecked = f.cloneNode(!0).checked, l.disabled = !0, u.optDisabled = !c.disabled;
        try {
            delete t.test
        } catch (p) {
            u.deleteExpando = !1
        }
        if (!t.addEventListener && t.attachEvent && t.fireEvent && (t.attachEvent("onclick", y = function () {
                u.noCloneEvent = !1
            }), t.cloneNode(!0).fireEvent("onclick"), t.detachEvent("onclick", y)), f = r.createElement("input"), f.value = "t", f.setAttribute("type", "radio"), u.radioValue = f.value === "t", f.setAttribute("checked", "checked"), f.setAttribute("name", "t"), t.appendChild(f), o = r.createDocumentFragment(), o.appendChild(t.lastChild), u.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, u.appendChecked = f.checked, o.removeChild(f), o.appendChild(t), t.attachEvent)
            for (v in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) a = "on" + v, s = a in t, s || (t.setAttribute(a, "return;"), s = typeof t[a] == "function"), u[v + "Bubbles"] = s;
        return i(function () {
            var e, t, f, i, h = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                o = r.getElementsByTagName("body")[0];
            o && (e = r.createElement("div"), e.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", o.insertBefore(e, o.firstChild), t = r.createElement("div"), e.appendChild(t), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", f = t.getElementsByTagName("td"), f[0].style.cssText = "padding:0;margin:0;border:0;display:none", s = f[0].offsetHeight === 0, f[0].style.display = "", f[1].style.display = "none", u.reliableHiddenOffsets = s && f[0].offsetHeight === 0, t.innerHTML = "", t.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", u.boxSizing = t.offsetWidth === 4, u.doesNotIncludeMarginInBodyOffset = o.offsetTop !== 1, n.getComputedStyle && (u.pixelPosition = (n.getComputedStyle(t, null) || {}).top !== "1%", u.boxSizingReliable = (n.getComputedStyle(t, null) || {
                width: "4px"
            }).width === "4px", i = r.createElement("div"), i.style.cssText = t.style.cssText = h, i.style.marginRight = i.style.width = "0", t.style.width = "1px", t.appendChild(i), u.reliableMarginRight = !parseFloat((n.getComputedStyle(i, null) || {}).marginRight)), typeof t.style.zoom != "undefined" && (t.innerHTML = "", t.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", u.inlineBlockNeedsLayout = t.offsetWidth === 3, t.style.display = "block", t.style.overflow = "visible", t.innerHTML = "<div></div>", t.firstChild.style.width = "5px", u.shrinkWrapBlocks = t.offsetWidth !== 3, e.style.zoom = 1), o.removeChild(e), e = t = f = i = null)
        }), o.removeChild(t), h = e = l = c = f = o = t = null, u
    }(), ou = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, eu = /([A-Z])/g, i.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (i.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (n) {
            return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !ri(n)
        },
        data: function (n, r, u, f) {
            if (i.acceptData(n)) {
                var s, h, c = i.expando,
                    a = typeof r == "string",
                    l = n.nodeType,
                    o = l ? i.cache : n,
                    e = l ? n[c] : n[c] && c;
                if (e && o[e] && (f || o[e].data) || !a || u !== t) return e || (l ? n[c] = e = i.deletedIds.pop() || i.guid++ : e = c), o[e] || (o[e] = {}, l || (o[e].toJSON = i.noop)), (typeof r == "object" || typeof r == "function") && (f ? o[e] = i.extend(o[e], r) : o[e].data = i.extend(o[e].data, r)), s = o[e], f || (s.data || (s.data = {}), s = s.data), u !== t && (s[i.camelCase(r)] = u), a ? (h = s[r], h == null && (h = s[i.camelCase(r)])) : h = s, h
            }
        },
        removeData: function (n, t, r) {
            if (i.acceptData(n)) {
                var e, o, h, s = n.nodeType,
                    u = s ? i.cache : n,
                    f = s ? n[i.expando] : i.expando;
                if (u[f]) {
                    if (t && (e = r ? u[f] : u[f].data, e)) {
                        for (i.isArray(t) || (t in e ? t = [t] : (t = i.camelCase(t), t = t in e ? [t] : t.split(" "))), o = 0, h = t.length; o < h; o++) delete e[t[o]];
                        if (!(r ? ri : i.isEmptyObject)(e)) return
                    }(r || (delete u[f].data, ri(u[f]))) && (s ? i.cleanData([n], !0) : i.support.deleteExpando || u != u.window ? delete u[f] : u[f] = null)
                }
            }
        },
        _data: function (n, t, r) {
            return i.data(n, t, r, !0)
        },
        acceptData: function (n) {
            var t = n.nodeName && i.noData[n.nodeName.toLowerCase()];
            return !t || t !== !0 && n.getAttribute("classid") === t
        }
    }), i.fn.extend({
        data: function (n, r) {
            var u, s, c, o, l, e = this[0],
                h = 0,
                f = null;
            if (n === t) {
                if (this.length && (f = i.data(e), e.nodeType === 1 && !i._data(e, "parsedAttrs"))) {
                    for (c = e.attributes, l = c.length; h < l; h++) o = c[h].name, o.indexOf("data-") || (o = i.camelCase(o.substring(5)), tr(e, o, f[o]));
                    i._data(e, "parsedAttrs", !0)
                }
                return f
            }
            return typeof n == "object" ? this.each(function () {
                i.data(this, n)
            }) : (u = n.split(".", 2), u[1] = u[1] ? "." + u[1] : "", s = u[1] + "!", i.access(this, function (r) {
                if (r === t) return f = this.triggerHandler("getData" + s, [u[0]]), f === t && e && (f = i.data(e, n), f = tr(e, n, f)), f === t && u[1] ? this.data(u[0]) : f;
                u[1] = r, this.each(function () {
                    var t = i(this);
                    t.triggerHandler("setData" + s, u), i.data(this, n, r), t.triggerHandler("changeData" + s, u)
                })
            }, null, r, arguments.length > 1, null, !1))
        },
        removeData: function (n) {
            return this.each(function () {
                i.removeData(this, n)
            })
        }
    }), i.extend({
        queue: function (n, t, r) {
            var u;
            if (n) return t = (t || "fx") + "queue", u = i._data(n, t), r && (!u || i.isArray(r) ? u = i._data(n, t, i.makeArray(r)) : u.push(r)), u || []
        },
        dequeue: function (n, t) {
            t = t || "fx";
            var f = i.queue(n, t),
                e = f.length,
                r = f.shift(),
                u = i._queueHooks(n, t),
                o = function () {
                    i.dequeue(n, t)
                };
            r === "inprogress" && (r = f.shift(), e--), r && (t === "fx" && f.unshift("inprogress"), delete u.stop, r.call(n, o, u)), !e && u && u.empty.fire()
        },
        _queueHooks: function (n, t) {
            var r = t + "queueHooks";
            return i._data(n, r) || i._data(n, r, {
                empty: i.Callbacks("once memory").add(function () {
                    i.removeData(n, t + "queue", !0), i.removeData(n, r, !0)
                })
            })
        }
    }), i.fn.extend({
        queue: function (n, r) {
            var u = 2;
            return typeof n != "string" && (r = n, n = "fx", u--), arguments.length < u ? i.queue(this[0], n) : r === t ? this : this.each(function () {
                var t = i.queue(this, n, r);
                i._queueHooks(this, n), n === "fx" && t[0] !== "inprogress" && i.dequeue(this, n)
            })
        },
        dequeue: function (n) {
            return this.each(function () {
                i.dequeue(this, n)
            })
        },
        delay: function (n, t) {
            return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function (t, i) {
                var r = setTimeout(t, n);
                i.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (n) {
            return this.queue(n || "fx", [])
        },
        promise: function (n, r) {
            var u, s = 1,
                h = i.Deferred(),
                f = this,
                o = this.length,
                e = function () {
                    --s || h.resolveWith(f, [f])
                };
            for (typeof n != "string" && (r = n, n = t), n = n || "fx"; o--;) u = i._data(f[o], n + "queueHooks"), u && u.empty && (s++, u.empty.add(e));
            return e(), h.promise(r)
        }
    });
    var s, ai, pi, yi = /[\t\r\n]/g,
        oo = /\r/g,
        fo = /^(?:button|input)$/i,
        eo = /^(?:button|input|object|select|textarea)$/i,
        vo = /^a(?:rea|)$/i,
        ei = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        si = i.support.getSetAttribute;
    i.fn.extend({
        attr: function (n, t) {
            return i.access(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function (n) {
            return this.each(function () {
                i.removeAttr(this, n)
            })
        },
        prop: function (n, t) {
            return i.access(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function (n) {
            return n = i.propFix[n] || n, this.each(function () {
                try {
                    this[n] = t, delete this[n]
                } catch (i) {}
            })
        },
        addClass: function (n) {
            var u, e, s, t, f, r, o;
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).addClass(n.call(this, t, this.className))
            });
            if (n && typeof n == "string")
                for (u = n.split(l), e = 0, s = this.length; e < s; e++)
                    if (t = this[e], t.nodeType === 1)
                        if (t.className || u.length !== 1) {
                            for (f = " " + t.className + " ", r = 0, o = u.length; r < o; r++) f.indexOf(" " + u[r] + " ") < 0 && (f += u[r] + " ");
                            t.className = i.trim(f)
                        } else t.className = n;
            return this
        },
        removeClass: function (n) {
            var o, f, r, u, h, e, s;
            if (i.isFunction(n)) return this.each(function (t) {
                i(this).removeClass(n.call(this, t, this.className))
            });
            if (n && typeof n == "string" || n === t)
                for (o = (n || "").split(l), e = 0, s = this.length; e < s; e++)
                    if (r = this[e], r.nodeType === 1 && r.className) {
                        for (f = (" " + r.className + " ").replace(yi, " "), u = 0, h = o.length; u < h; u++)
                            while (f.indexOf(" " + o[u] + " ") >= 0) f = f.replace(" " + o[u] + " ", " ");
                        r.className = n ? i.trim(f) : ""
                    } return this
        },
        toggleClass: function (n, t) {
            var r = typeof n,
                u = typeof t == "boolean";
            return i.isFunction(n) ? this.each(function (r) {
                i(this).toggleClass(n.call(this, r, this.className, t), t)
            }) : this.each(function () {
                if (r === "string")
                    for (var e, h = 0, o = i(this), f = t, s = n.split(l); e = s[h++];) f = u ? f : !o.hasClass(e), o[f ? "addClass" : "removeClass"](e);
                else(r === "undefined" || r === "boolean") && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
            })
        },
        hasClass: function (n) {
            for (var r = " " + n + " ", t = 0, i = this.length; t < i; t++)
                if (this[t].nodeType === 1 && (" " + this[t].className + " ").replace(yi, " ").indexOf(r) >= 0) return !0;
            return !1
        },
        val: function (n) {
            var r, u, e, f = this[0];
            return arguments.length ? (e = i.isFunction(n), this.each(function (u) {
                var f, o = i(this);
                this.nodeType === 1 && (f = e ? n.call(this, u, o.val()) : n, f == null ? f = "" : typeof f == "number" ? f += "" : i.isArray(f) && (f = i.map(f, function (n) {
                    return n == null ? "" : n + ""
                })), r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, f, "value") !== t || (this.value = f))
            })) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()], r && "get" in r && (u = r.get(f, "value")) !== t ? u : (u = f.value, typeof u == "string" ? u.replace(oo, "") : u == null ? "" : u)) : void 0
        }
    }), i.extend({
        valHooks: {
            option: {
                get: function (n) {
                    var t = n.attributes.value;
                    return !t || t.specified ? n.value : n.text
                }
            },
            select: {
                get: function (n) {
                    for (var e, t, o = n.options, r = n.selectedIndex, f = n.type === "select-one" || r < 0, h = f ? null : [], s = f ? r + 1 : o.length, u = r < 0 ? s : f ? r : 0; u < s; u++)
                        if (t = o[u], (t.selected || u === r) && (i.support.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(), f) return e;
                            h.push(e)
                        } return h
                },
                set: function (n, t) {
                    var r = i.makeArray(t);
                    return i(n).find("option").each(function () {
                        this.selected = i.inArray(i(this).val(), r) >= 0
                    }), r.length || (n.selectedIndex = -1), r
                }
            }
        },
        attrFn: {},
        attr: function (n, r, u, f) {
            var o, e, c, h = n.nodeType;
            if (n && h !== 3 && h !== 8 && h !== 2) {
                if (f && i.isFunction(i.fn[r])) return i(n)[r](u);
                if (typeof n.getAttribute == "undefined") return i.prop(n, r, u);
                if (c = h !== 1 || !i.isXMLDoc(n), c && (r = r.toLowerCase(), e = i.attrHooks[r] || (ei.test(r) ? ai : s)), u !== t) {
                    if (u === null) {
                        i.removeAttr(n, r);
                        return
                    }
                    return e && "set" in e && c && (o = e.set(n, u, r)) !== t ? o : (n.setAttribute(r, u + ""), u)
                }
                return e && "get" in e && c && (o = e.get(n, r)) !== null ? o : (o = n.getAttribute(r), o === null ? t : o)
            }
        },
        removeAttr: function (n, t) {
            var u, o, r, e, f = 0;
            if (t && n.nodeType === 1)
                for (o = t.split(l); f < o.length; f++) r = o[f], r && (u = i.propFix[r] || r, e = ei.test(r), e || i.attr(n, r, ""), n.removeAttribute(si ? r : u), e && u in n && (n[u] = !1))
        },
        attrHooks: {
            type: {
                set: function (n, t) {
                    if (fo.test(n.nodeName) && n.parentNode) i.error("type property can't be changed");
                    else if (!i.support.radioValue && t === "radio" && i.nodeName(n, "input")) {
                        var r = n.value;
                        return n.setAttribute("type", t), r && (n.value = r), t
                    }
                }
            },
            value: {
                get: function (n, t) {
                    return s && i.nodeName(n, "button") ? s.get(n, t) : t in n ? n.value : null
                },
                set: function (n, t, r) {
                    if (s && i.nodeName(n, "button")) return s.set(n, t, r);
                    n.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (n, r, u) {
            var o, f, s, e = n.nodeType;
            if (n && e !== 3 && e !== 8 && e !== 2) return s = e !== 1 || !i.isXMLDoc(n), s && (r = i.propFix[r] || r, f = i.propHooks[r]), u !== t ? f && "set" in f && (o = f.set(n, u, r)) !== t ? o : n[r] = u : f && "get" in f && (o = f.get(n, r)) !== null ? o : n[r]
        },
        propHooks: {
            tabIndex: {
                get: function (n) {
                    var i = n.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : eo.test(n.nodeName) || vo.test(n.nodeName) && n.href ? 0 : t
                }
            }
        }
    }), ai = {
        get: function (n, r) {
            var f, u = i.prop(n, r);
            return u === !0 || typeof u != "boolean" && (f = n.getAttributeNode(r)) && f.nodeValue !== !1 ? r.toLowerCase() : t
        },
        set: function (n, t, r) {
            var u;
            return t === !1 ? i.removeAttr(n, r) : (u = i.propFix[r] || r, u in n && (n[u] = !0), n.setAttribute(r, r.toLowerCase())), r
        }
    }, si || (pi = {
        name: !0,
        id: !0,
        coords: !0
    }, s = i.valHooks.button = {
        get: function (n, i) {
            var r;
            return r = n.getAttributeNode(i), r && (pi[i] ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function (n, t, i) {
            var u = n.getAttributeNode(i);
            return u || (u = r.createAttribute(i), n.setAttributeNode(u)), u.value = t + ""
        }
    }, i.each(["width", "height"], function (n, t) {
        i.attrHooks[t] = i.extend(i.attrHooks[t], {
            set: function (n, i) {
                if (i === "") return n.setAttribute(t, "auto"), i
            }
        })
    }), i.attrHooks.contenteditable = {
        get: s.get,
        set: function (n, t, i) {
            t === "" && (t = "false"), s.set(n, t, i)
        }
    }), i.support.hrefNormalized || i.each(["href", "src", "width", "height"], function (n, r) {
        i.attrHooks[r] = i.extend(i.attrHooks[r], {
            get: function (n) {
                var i = n.getAttribute(r, 2);
                return i === null ? t : i
            }
        })
    }), i.support.style || (i.attrHooks.style = {
        get: function (n) {
            return n.style.cssText.toLowerCase() || t
        },
        set: function (n, t) {
            return n.style.cssText = t + ""
        }
    }), i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
        get: function (n) {
            var t = n.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), i.support.enctype || (i.propFix.enctype = "encoding"), i.support.checkOn || i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = {
            get: function (n) {
                return n.getAttribute("value") === null ? "on" : n.value
            }
        }
    }), i.each(["radio", "checkbox"], function () {
        i.valHooks[this] = i.extend(i.valHooks[this], {
            set: function (n, t) {
                if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) >= 0
            }
        })
    });
    var at = /^(?:textarea|input|select)$/i,
        fr = /^([^\.]*|)(?:\.(.+)|)$/,
        yo = /(?:^|\s)hover(\.\S+|)\b/,
        ao = /^key/,
        co = /^(?:mouse|contextmenu)|click/,
        sr = /^(?:focusinfocus|focusoutblur)$/,
        or = function (n) {
            return i.event.special.hover ? n : n.replace(yo, "mouseenter$1 mouseleave$1")
        };
    i.event = {
            add: function (n, r, u, f, e) {
                var v, h, a, y, w, o, b, l, p, c, s;
                if (n.nodeType !== 3 && n.nodeType !== 8 && r && u && (v = i._data(n))) {
                    for (u.handler && (p = u, u = p.handler, e = p.selector), u.guid || (u.guid = i.guid++), a = v.events, a || (v.events = a = {}), h = v.handle, h || (v.handle = h = function (n) {
                            return typeof i == "undefined" || !!n && i.event.triggered === n.type ? t : i.event.dispatch.apply(h.elem, arguments)
                        }, h.elem = n), r = i.trim(or(r)).split(" "), y = 0; y < r.length; y++) w = fr.exec(r[y]) || [], o = w[1], b = (w[2] || "").split(".").sort(), s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, l = i.extend({
                        type: o,
                        origType: w[1],
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        needsContext: e && i.expr.match.needsContext.test(e),
                        namespace: b.join(".")
                    }, p), c = a[o], c || (c = a[o] = [], c.delegateCount = 0, s.setup && s.setup.call(n, f, b, h) !== !1 || (n.addEventListener ? n.addEventListener(o, h, !1) : n.attachEvent && n.attachEvent("on" + o, h))), s.add && (s.add.call(n, l), l.handler.guid || (l.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, l) : c.push(l), i.event.global[o] = !0;
                    n = null
                }
            },
            global: {},
            remove: function (n, t, r, u, f) {
                var v, p, e, w, h, b, a, l, c, o, s, y = i.hasData(n) && i._data(n);
                if (y && (l = y.events)) {
                    for (t = i.trim(or(t || "")).split(" "), v = 0; v < t.length; v++) {
                        if (p = fr.exec(t[v]) || [], e = w = p[1], h = p[2], !e) {
                            for (e in l) i.event.remove(n, e + t[v], r, u, !0);
                            continue
                        }
                        for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, o = l[e] || [], b = o.length, h = h ? new RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a = 0; a < o.length; a++) s = o[a], (f || w === s.origType) && (!r || r.guid === s.guid) && (!h || h.test(s.namespace)) && (!u || u === s.selector || u === "**" && s.selector) && (o.splice(a--, 1), s.selector && o.delegateCount--, c.remove && c.remove.call(n, s));
                        o.length === 0 && b !== o.length && ((!c.teardown || c.teardown.call(n, h, y.handle) === !1) && i.removeEvent(n, e, y.handle), delete l[e])
                    }
                    i.isEmptyObject(l) && (delete y.handle, i.removeData(n, "events", !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function (u, f, e, o) {
                if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                    var w, d, l, h, c, y, a, v, p, k, s = u.type || u,
                        b = [];
                    if (sr.test(s + i.event.triggered)) return;
                    if (s.indexOf("!") >= 0 && (s = s.slice(0, -1), d = !0), s.indexOf(".") >= 0 && (b = s.split("."), s = b.shift(), b.sort()), (!e || i.event.customEvent[s]) && !i.event.global[s]) return;
                    if (u = typeof u == "object" ? u[i.expando] ? u : new i.Event(s, u) : new i.Event(s), u.type = s, u.isTrigger = !0, u.exclusive = d, u.namespace = b.join("."), u.namespace_re = u.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, y = s.indexOf(":") < 0 ? "on" + s : "", !e) {
                        w = i.cache;
                        for (l in w) w[l].events && w[l].events[s] && i.event.trigger(u, f, w[l].handle.elem, !0);
                        return
                    }
                    if (u.result = t, u.target || (u.target = e), f = f != null ? i.makeArray(f) : [], f.unshift(u), a = i.event.special[s] || {}, a.trigger && a.trigger.apply(e, f) === !1) return;
                    if (p = [
                            [e, a.bindType || s]
                        ], !o && !a.noBubble && !i.isWindow(e)) {
                        for (k = a.delegateType || s, h = sr.test(k + s) ? e : e.parentNode, c = e; h; h = h.parentNode) p.push([h, k]), c = h;
                        c === (e.ownerDocument || r) && p.push([c.defaultView || c.parentWindow || n, k])
                    }
                    for (l = 0; l < p.length && !u.isPropagationStopped(); l++) h = p[l][0], u.type = p[l][1], v = (i._data(h, "events") || {})[u.type] && i._data(h, "handle"), v && v.apply(h, f), v = y && h[y], v && i.acceptData(h) && v.apply && v.apply(h, f) === !1 && u.preventDefault();
                    return u.type = s, !o && !u.isDefaultPrevented() && (!a._default || a._default.apply(e.ownerDocument, f) === !1) && (s !== "click" || !i.nodeName(e, "a")) && i.acceptData(e) && y && e[s] && (s !== "focus" && s !== "blur" || u.target.offsetWidth !== 0) && !i.isWindow(e) && (c = e[y], c && (e[y] = null), i.event.triggered = s, e[s](), i.event.triggered = t, c && (e[y] = c)), u.result
                }
                return
            },
            dispatch: function (r) {
                r = i.event.fix(r || n.event);
                var e, y, f, p, b, h, w, u, s, v = (i._data(this, "events") || {})[r.type] || [],
                    a = v.delegateCount,
                    k = o.call(arguments),
                    d = !r.exclusive && !r.namespace,
                    l = i.event.special[r.type] || {},
                    c = [];
                if (k[0] = r, r.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, r) !== !1) {
                    if (a && (!r.button || r.type !== "click"))
                        for (f = r.target; f != this; f = f.parentNode || this)
                            if (f.disabled !== !0 || r.type !== "click") {
                                for (b = {}, w = [], e = 0; e < a; e++) u = v[e], s = u.selector, b[s] === t && (b[s] = u.needsContext ? i(s, this).index(f) >= 0 : i.find(s, this, null, [f]).length), b[s] && w.push(u);
                                w.length && c.push({
                                    elem: f,
                                    matches: w
                                })
                            } for (v.length > a && c.push({
                            elem: this,
                            matches: v.slice(a)
                        }), e = 0; e < c.length && !r.isPropagationStopped(); e++)
                        for (h = c[e], r.currentTarget = h.elem, y = 0; y < h.matches.length && !r.isImmediatePropagationStopped(); y++) u = h.matches[y], (d || !r.namespace && !u.namespace || r.namespace_re && r.namespace_re.test(u.namespace)) && (r.data = u.data, r.handleObj = u, p = ((i.event.special[u.origType] || {}).handle || u.handler).apply(h.elem, k), p !== t && (r.result = p, p === !1 && (r.preventDefault(), r.stopPropagation())));
                    return l.postDispatch && l.postDispatch.call(this, r), r.result
                }
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (n, t) {
                    return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), n
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (n, i) {
                    var s, f, u, e = i.button,
                        o = i.fromElement;
                    return n.pageX == null && i.clientX != null && (s = n.target.ownerDocument || r, f = s.documentElement, u = s.body, n.pageX = i.clientX + (f && f.scrollLeft || u && u.scrollLeft || 0) - (f && f.clientLeft || u && u.clientLeft || 0), n.pageY = i.clientY + (f && f.scrollTop || u && u.scrollTop || 0) - (f && f.clientTop || u && u.clientTop || 0)), !n.relatedTarget && o && (n.relatedTarget = o === n.target ? i.toElement : o), !n.which && e !== t && (n.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0), n
                }
            },
            fix: function (n) {
                if (n[i.expando]) return n;
                var f, e, t = n,
                    u = i.event.fixHooks[n.type] || {},
                    o = u.props ? this.props.concat(u.props) : this.props;
                for (n = i.Event(t), f = o.length; f;) e = o[--f], n[e] = t[e];
                return n.target || (n.target = t.srcElement || r), n.target.nodeType === 3 && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, u.filter ? u.filter(n, t) : n
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function (n, t, r) {
                        i.isWindow(this) && (this.onbeforeunload = r)
                    },
                    teardown: function (n, t) {
                        this.onbeforeunload === t && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function (n, t, r, u) {
                var f = i.extend(new i.Event, r, {
                    type: n,
                    isSimulated: !0,
                    originalEvent: {}
                });
                u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f), f.isDefaultPrevented() && r.preventDefault()
            }
        }, i.event.handle = i.event.dispatch, i.removeEvent = r.removeEventListener ? function (n, t, i) {
            n.removeEventListener && n.removeEventListener(t, i, !1)
        } : function (n, t, i) {
            var r = "on" + t;
            n.detachEvent && (typeof n[r] == "undefined" && (n[r] = null), n.detachEvent(r, i))
        }, i.Event = function (n, t) {
            if (!(this instanceof i.Event)) return new i.Event(n, t);
            n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? ft : p) : this.type = n, t && i.extend(this, t), this.timeStamp = n && n.timeStamp || i.now(), this[i.expando] = !0
        }, i.Event.prototype = {
            preventDefault: function () {
                this.isDefaultPrevented = ft;
                var n = this.originalEvent;
                n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
            },
            stopPropagation: function () {
                this.isPropagationStopped = ft;
                var n = this.originalEvent;
                n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = ft, this.stopPropagation()
            },
            isDefaultPrevented: p,
            isPropagationStopped: p,
            isImmediatePropagationStopped: p
        }, i.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function (n, t) {
            i.event.special[n] = {
                delegateType: t,
                bindType: t,
                handle: function (n) {
                    var f, e = this,
                        r = n.relatedTarget,
                        u = n.handleObj,
                        o = u.selector;
                    return r && (r === e || i.contains(e, r)) || (n.type = u.origType, f = u.handler.apply(this, arguments), n.type = t), f
                }
            }
        }), i.support.submitBubbles || (i.event.special.submit = {
            setup: function () {
                if (i.nodeName(this, "form")) return !1;
                i.event.add(this, "click._submit keypress._submit", function (n) {
                    var u = n.target,
                        r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
                    r && !i._data(r, "_submit_attached") && (i.event.add(r, "submit._submit", function (n) {
                        n._submit_bubble = !0
                    }), i._data(r, "_submit_attached", !0))
                })
            },
            postDispatch: function (n) {
                n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
            },
            teardown: function () {
                if (i.nodeName(this, "form")) return !1;
                i.event.remove(this, "._submit")
            }
        }), i.support.changeBubbles || (i.event.special.change = {
            setup: function () {
                if (at.test(this.nodeName)) return (this.type === "checkbox" || this.type === "radio") && (i.event.add(this, "propertychange._change", function (n) {
                    n.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), i.event.add(this, "click._change", function (n) {
                    this._just_changed && !n.isTrigger && (this._just_changed = !1), i.event.simulate("change", this, n, !0)
                })), !1;
                i.event.add(this, "beforeactivate._change", function (n) {
                    var t = n.target;
                    at.test(t.nodeName) && !i._data(t, "_change_attached") && (i.event.add(t, "change._change", function (n) {
                        !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
                    }), i._data(t, "_change_attached", !0))
                })
            },
            handle: function (n) {
                var t = n.target;
                if (this !== t || n.isSimulated || n.isTrigger || t.type !== "radio" && t.type !== "checkbox") return n.handleObj.handler.apply(this, arguments)
            },
            teardown: function () {
                return i.event.remove(this, "._change"), !at.test(this.nodeName)
            }
        }), i.support.focusinBubbles || i.each({
            focus: "focusin",
            blur: "focusout"
        }, function (n, t) {
            var f = 0,
                u = function (n) {
                    i.event.simulate(t, n.target, i.event.fix(n), !0)
                };
            i.event.special[t] = {
                setup: function () {
                    f++ == 0 && r.addEventListener(n, u, !0)
                },
                teardown: function () {
                    --f == 0 && r.removeEventListener(n, u, !0)
                }
            }
        }), i.fn.extend({
            on: function (n, r, u, f, e) {
                var o, s;
                if (typeof n == "object") {
                    typeof r != "string" && (u = u || r, r = t);
                    for (s in n) this.on(s, r, u, n[s], e);
                    return this
                }
                if (u == null && f == null ? (f = r, u = r = t) : f == null && (typeof r == "string" ? (f = u, u = t) : (f = u, u = r, r = t)), f === !1) f = p;
                else if (!f) return this;
                return e === 1 && (o = f, f = function (n) {
                    return i().off(n), o.apply(this, arguments)
                }, f.guid = o.guid || (o.guid = i.guid++)), this.each(function () {
                    i.event.add(this, n, f, u, r)
                })
            },
            one: function (n, t, i, r) {
                return this.on(n, t, i, r, 1)
            },
            off: function (n, r, u) {
                var f, e;
                if (n && n.preventDefault && n.handleObj) return f = n.handleObj, i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this;
                if (typeof n == "object") {
                    for (e in n) this.off(e, r, n[e]);
                    return this
                }
                return (r === !1 || typeof r == "function") && (u = r, r = t), u === !1 && (u = p), this.each(function () {
                    i.event.remove(this, n, u, r)
                })
            },
            bind: function (n, t, i) {
                return this.on(n, null, t, i)
            },
            unbind: function (n, t) {
                return this.off(n, null, t)
            },
            live: function (n, t, r) {
                return i(this.context).on(n, this.selector, t, r), this
            },
            die: function (n, t) {
                return i(this.context).off(n, this.selector || "**", t), this
            },
            delegate: function (n, t, i, r) {
                return this.on(t, n, i, r)
            },
            undelegate: function (n, t, i) {
                return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i)
            },
            trigger: function (n, t) {
                return this.each(function () {
                    i.event.trigger(n, t, this)
                })
            },
            triggerHandler: function (n, t) {
                if (this[0]) return i.event.trigger(n, t, this[0], !0)
            },
            toggle: function (n) {
                var r = arguments,
                    f = n.guid || i.guid++,
                    t = 0,
                    u = function (u) {
                        var f = (i._data(this, "lastToggle" + n.guid) || 0) % t;
                        return i._data(this, "lastToggle" + n.guid, f + 1), u.preventDefault(), r[f].apply(this, arguments) || !1
                    };
                for (u.guid = f; t < r.length;) r[t++].guid = f;
                return this.click(u)
            },
            hover: function (n, t) {
                return this.mouseenter(n).mouseleave(t || n)
            }
        }), i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (n, t) {
            i.fn[t] = function (n, i) {
                return i == null && (i = n, n = null), arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
            }, ao.test(t) && (i.event.fixHooks[t] = i.event.keyHooks), co.test(t) && (i.event.fixHooks[t] = i.event.mouseHooks)
        }),
        function (n, t) {
            function r(n, t, i, r) {
                i = i || [], t = t || h;
                var e, u, s, f, o = t.nodeType;
                if (!n || typeof n != "string") return i;
                if (o !== 1 && o !== 9) return [];
                if (s = ft(t), !s && !r && (e = rr.exec(n)))
                    if (f = e[1]) {
                        if (o === 9) {
                            if (u = t.getElementById(f), !u || !u.parentNode) return i;
                            if (u.id === f) return i.push(u), i
                        } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && ri(t, u) && u.id === f) return i.push(u), i
                    } else {
                        if (e[2]) return p.apply(i, w.call(t.getElementsByTagName(n), 0)), i;
                        if ((f = e[3]) && ti && t.getElementsByClassName) return p.apply(i, w.call(t.getElementsByClassName(f), 0)), i
                    } return dt(n.replace(nt, "$1"), t, i, r, s)
            }

            function b(n) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return i === "input" && t.type === n
                }
            }

            function ni(n) {
                return function (t) {
                    var i = t.nodeName.toLowerCase();
                    return (i === "input" || i === "button") && t.type === n
                }
            }

            function a(n) {
                return s(function (t) {
                    return t = +t, s(function (i, r) {
                        for (var u, e = n([], i.length, t), f = e.length; f--;) i[u = e[f]] && (i[u] = !(r[u] = i[u]))
                    })
                })
            }

            function ut(n, t, i) {
                if (n === t) return i;
                for (var r = n.nextSibling; r;) {
                    if (r === t) return -1;
                    r = r.nextSibling
                }
                return 1
            }

            function rt(n, t) {
                var o, f, l, s, i, c, h, a = hi[e][n + " "];
                if (a) return t ? 0 : a.slice(0);
                for (i = n, c = [], h = u.preFilter; i;) {
                    (!o || (f = bi.exec(i))) && (f && (i = i.slice(f[0].length) || i), c.push(l = [])), o = !1, (f = gi.exec(i)) && (l.push(o = new ei(f.shift())), i = i.slice(o.length), o.type = f[0].replace(nt, " "));
                    for (s in u.filter)(f = tt[s].exec(i)) && (!h[s] || (f = h[s](f))) && (l.push(o = new ei(f.shift())), i = i.slice(o.length), o.type = s, o.matches = f);
                    if (!o) break
                }
                return t ? i.length : i ? r.error(n) : hi(n, c).slice(0)
            }

            function ht(n, t, i) {
                var u = t.dir,
                    r = i && t.dir === "parentNode",
                    f = nr++;
                return t.first ? function (t, i, f) {
                    while (t = t[u])
                        if (r || t.nodeType === 1) return n(t, i, f)
                } : function (t, i, o) {
                    if (o) {
                        while (t = t[u])
                            if ((r || t.nodeType === 1) && n(t, i, o)) return t
                    } else
                        for (var s, c = d + " " + f + " ", h = c + kt; t = t[u];)
                            if (r || t.nodeType === 1) {
                                if ((s = t[e]) === h) return t.sizset;
                                if (typeof s == "string" && s.indexOf(c) === 0) {
                                    if (t.sizset) return t
                                } else {
                                    if (t[e] = h, n(t, i, o)) return t.sizset = !0, t;
                                    t.sizset = !1
                                }
                            }
                }
            }

            function ct(n) {
                return n.length > 1 ? function (t, i, r) {
                    for (var u = n.length; u--;)
                        if (!n[u](t, i, r)) return !1;
                    return !0
                } : n[0]
            }

            function et(n, t, i, r, u) {
                for (var e, o = [], f = 0, h = n.length, s = t != null; f < h; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), s && t.push(f));
                return o
            }

            function vt(n, t, i, r, u, f) {
                return r && !r[e] && (r = vt(r)), u && !u[e] && (u = vt(u, f)), s(function (f, e, o, s) {
                    var l, c, a, w = [],
                        y = [],
                        b = e.length,
                        k = f || ci(t || "*", o.nodeType ? [o] : o, []),
                        v = n && (f || !t) ? et(k, w, n, o, s) : k,
                        h = i ? u || (f ? n : b || r) ? [] : e : v;
                    if (i && i(v, h, o, s), r)
                        for (l = et(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                    if (f) {
                        if (u || n) {
                            if (u) {
                                for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                                u(null, h = [], l, s)
                            }
                            for (c = h.length; c--;)(a = h[c]) && (l = u ? at.call(f, a) : w[c]) > -1 && (f[l] = !(e[l] = a))
                        }
                    } else h = et(h === e ? h.splice(b, h.length) : h), u ? u(null, e, h, s) : p.apply(e, h)
                })
            }

            function ot(n) {
                for (var h, r, i, o = n.length, s = u.relative[n[0].type], c = s || u.relative[" "], t = s ? 1 : 0, l = ht(function (n) {
                        return n === h
                    }, c, !0), a = ht(function (n) {
                        return at.call(h, n) > -1
                    }, c, !0), f = [function (n, t, i) {
                        return !s && (i || t !== g) || ((h = t).nodeType ? l(n, t, i) : a(n, t, i))
                    }]; t < o; t++)
                    if (r = u.relative[n[t].type]) f = [ht(ct(f), r)];
                    else {
                        if (r = u.filter[n[t].type].apply(null, n[t].matches), r[e]) {
                            for (i = ++t; i < o; i++)
                                if (u.relative[n[i].type]) break;
                            return vt(t > 1 && ct(f), t > 1 && n.slice(0, t - 1).join("").replace(nt, "$1"), r, t < i && ot(n.slice(t, i)), i < o && ot(n = n.slice(i)), i < o && n.join(""))
                        }
                        f.push(r)
                    } return ct(f)
            }

            function di(n, t) {
                var f = t.length > 0,
                    e = n.length > 0,
                    i = function (o, s, c, l, a) {
                        var w, b, nt, y = [],
                            k = 0,
                            v = "0",
                            it = o && [],
                            tt = a != null,
                            ut = g,
                            ft = o || e && u.find.TAG("*", a && s.parentNode || s),
                            rt = d += ut == null ? 1 : Math.E;
                        for (tt && (g = s !== h && s, kt = i.el);
                            (w = ft[v]) != null; v++) {
                            if (e && w) {
                                for (b = 0; nt = n[b]; b++)
                                    if (nt(w, s, c)) {
                                        l.push(w);
                                        break
                                    } tt && (d = rt, kt = ++i.el)
                            }
                            f && ((w = !nt && w) && k--, o && it.push(w))
                        }
                        if (k += v, f && v !== k) {
                            for (b = 0; nt = t[b]; b++) nt(it, y, s, c);
                            if (o) {
                                if (k > 0)
                                    while (v--) it[v] || y[v] || (y[v] = wi.call(l));
                                y = et(y)
                            }
                            p.apply(l, y), tt && !o && y.length > 0 && k + t.length > 1 && r.uniqueSort(l)
                        }
                        return tt && (d = rt, g = ut), it
                    };
                return i.el = 0, f ? s(i) : i
            }

            function ci(n, t, i) {
                for (var u = 0, f = t.length; u < f; u++) r(n, t[u], i);
                return i
            }

            function dt(n, t, i, r, f) {
                var h, e, s, l, c, o = rt(n),
                    a = o.length;
                if (!r && o.length === 1) {
                    if (e = o[0] = o[0].slice(0), e.length > 2 && (s = e[0]).type === "ID" && t.nodeType === 9 && !f && u.relative[e[1].type]) {
                        if (t = u.find.ID(s.matches[0].replace(v, ""), t, f)[0], !t) return i;
                        n = n.slice(e.shift().length)
                    }
                    for (h = tt.POS.test(n) ? -1 : e.length - 1; h >= 0; h--) {
                        if (s = e[h], u.relative[l = s.type]) break;
                        if ((c = u.find[l]) && (r = c(s.matches[0].replace(v, ""), yt.test(e[0].type) && t.parentNode || t, f))) {
                            if (e.splice(h, 1), n = r.length && e.join(""), !n) return p.apply(i, w.call(r, 0)), i;
                            break
                        }
                    }
                }
                return bt(n, o)(r, t, f, i, yt.test(n)), i
            }

            function fi() {}
            var kt, pt, u, it, ft, ri, bt, wt, k, g, ui = !0,
                c = "undefined",
                e = ("sizcache" + Math.random()).replace(".", ""),
                ei = String,
                h = n.document,
                o = h.documentElement,
                d = 0,
                nr = 0,
                wi = [].pop,
                p = [].push,
                w = [].slice,
                at = [].indexOf || function (n) {
                    for (var t = 0, i = this.length; t < i; t++)
                        if (this[t] === n) return t;
                    return -1
                },
                s = function (n, t) {
                    return n[e] = t == null || t, n
                },
                st = function () {
                    var n = {},
                        t = [];
                    return s(function (i, r) {
                        return t.push(i) > u.cacheLength && delete n[t.shift()], n[i + " "] = r
                    }, n)
                },
                oi = st(),
                hi = st(),
                si = st(),
                f = "[\\x20\\t\\r\\n\\f]",
                y = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                ki = y.replace("w", "w#"),
                gt = "\\[" + f + "*(" + y + ")" + f + "*(?:([*^$|!~]?=)" + f + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ki + ")|)|)" + f + "*\\]",
                lt = ":(" + y + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + gt + ")|[^:]|\\\\.)*|.*))\\)|)",
                ii = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + f + "*((?:-\\d)?\\d*)" + f + "*\\)|)(?=[^-]|$)",
                nt = new RegExp("^" + f + "+|((?:^|[^\\\\])(?:\\\\.)*)" + f + "+$", "g"),
                bi = new RegExp("^" + f + "*," + f + "*"),
                gi = new RegExp("^" + f + "*([\\x20\\t\\r\\n\\f>+~])" + f + "*"),
                ir = new RegExp(lt),
                rr = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                yt = /[\x20\t\r\n\f]*[+~]/,
                tr = /h\d/i,
                li = /input|select|textarea|button/i,
                v = /\\(?!\\)/g,
                tt = {
                    ID: new RegExp("^#(" + y + ")"),
                    CLASS: new RegExp("^\\.(" + y + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + y + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + y.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + gt),
                    PSEUDO: new RegExp("^" + lt),
                    POS: new RegExp(ii, "i"),
                    CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + f + "*(even|odd|(([+-]|)(\\d*)n|)" + f + "*(?:([+-]|)" + f + "*(\\d+)|))" + f + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + f + "*[>+~]|" + ii, "i")
                },
                l = function (n) {
                    var t = h.createElement("div");
                    try {
                        return n(t)
                    } catch (i) {
                        return !1
                    } finally {
                        t = null
                    }
                },
                yi = l(function (n) {
                    return n.appendChild(h.createComment("")), !n.getElementsByTagName("*").length
                }),
                pi = l(function (n) {
                    return n.innerHTML = "<a href='#'></a>", n.firstChild && typeof n.firstChild.getAttribute !== c && n.firstChild.getAttribute("href") === "#"
                }),
                ai = l(function (n) {
                    n.innerHTML = "<select></select>";
                    var t = typeof n.lastChild.getAttribute("multiple");
                    return t !== "boolean" && t !== "string"
                }),
                ti = l(function (n) {
                    return n.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !n.getElementsByClassName || !n.getElementsByClassName("e").length ? !1 : (n.lastChild.className = "e", n.getElementsByClassName("e").length === 2)
                }),
                vi = l(function (n) {
                    n.id = e + 0, n.innerHTML = "<a name='" + e + "'></a><div name='" + e + "'></div>", o.insertBefore(n, o.firstChild);
                    var t = h.getElementsByName && h.getElementsByName(e).length === 2 + h.getElementsByName(e + 0).length;
                    return pt = !h.getElementById(e), o.removeChild(n), t
                });
            try {
                w.call(o.childNodes, 0)[0].nodeType
            } catch (ur) {
                w = function (n) {
                    for (var i, t = []; i = this[n]; n++) t.push(i);
                    return t
                }
            }
            r.matches = function (n, t) {
                return r(n, null, null, t)
            }, r.matchesSelector = function (n, t) {
                return r(t, null, null, [n]).length > 0
            }, it = r.getText = function (n) {
                var r, i = "",
                    u = 0,
                    t = n.nodeType;
                if (t) {
                    if (t === 1 || t === 9 || t === 11) {
                        if (typeof n.textContent == "string") return n.textContent;
                        for (n = n.firstChild; n; n = n.nextSibling) i += it(n)
                    } else if (t === 3 || t === 4) return n.nodeValue
                } else
                    for (; r = n[u]; u++) i += it(r);
                return i
            }, ft = r.isXML = function (n) {
                var t = n && (n.ownerDocument || n).documentElement;
                return t ? t.nodeName !== "HTML" : !1
            }, ri = r.contains = o.contains ? function (n, t) {
                var r = n.nodeType === 9 ? n.documentElement : n,
                    i = t && t.parentNode;
                return n === i || !!(i && i.nodeType === 1 && r.contains && r.contains(i))
            } : o.compareDocumentPosition ? function (n, t) {
                return t && !!(n.compareDocumentPosition(t) & 16)
            } : function (n, t) {
                while (t = t.parentNode)
                    if (t === n) return !0;
                return !1
            }, r.attr = function (n, t) {
                var i, r = ft(n);
                return r || (t = t.toLowerCase()), (i = u.attrHandle[t]) ? i(n) : r || ai ? n.getAttribute(t) : (i = n.getAttributeNode(t), i ? typeof n[t] == "boolean" ? n[t] ? t : null : i.specified ? i.value : null : null)
            }, u = r.selectors = {
                cacheLength: 50,
                createPseudo: s,
                match: tt,
                attrHandle: pi ? {} : {
                    href: function (n) {
                        return n.getAttribute("href", 2)
                    },
                    type: function (n) {
                        return n.getAttribute("type")
                    }
                },
                find: {
                    ID: pt ? function (n, t, i) {
                        if (typeof t.getElementById !== c && !i) {
                            var r = t.getElementById(n);
                            return r && r.parentNode ? [r] : []
                        }
                    } : function (n, i, r) {
                        if (typeof i.getElementById !== c && !r) {
                            var u = i.getElementById(n);
                            return u ? u.id === n || typeof u.getAttributeNode !== c && u.getAttributeNode("id").value === n ? [u] : t : []
                        }
                    },
                    TAG: yi ? function (n, t) {
                        if (typeof t.getElementsByTagName !== c) return t.getElementsByTagName(n)
                    } : function (n, t) {
                        var f = t.getElementsByTagName(n),
                            r, i, u;
                        if (n === "*") {
                            for (i = [], u = 0; r = f[u]; u++) r.nodeType === 1 && i.push(r);
                            return i
                        }
                        return f
                    },
                    NAME: vi && function (n, t) {
                        if (typeof t.getElementsByName !== c) return t.getElementsByName(name)
                    },
                    CLASS: ti && function (n, t, i) {
                        if (typeof t.getElementsByClassName !== c && !i) return t.getElementsByClassName(n)
                    }
                },
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (n) {
                        return n[1] = n[1].replace(v, ""), n[3] = (n[4] || n[5] || "").replace(v, ""), n[2] === "~=" && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                    },
                    CHILD: function (n) {
                        return n[1] = n[1].toLowerCase(), n[1] === "nth" ? (n[2] || r.error(n[0]), n[3] = +(n[3] ? n[4] + (n[5] || 1) : 2 * (n[2] === "even" || n[2] === "odd")), n[4] = +(n[6] + n[7] || n[2] === "odd")) : n[2] && r.error(n[0]), n
                    },
                    PSEUDO: function (n) {
                        var t, i;
                        return tt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[3] : (t = n[4]) && (ir.test(t) && (i = rt(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (t = t.slice(0, i), n[0] = n[0].slice(0, i)), n[2] = t), n.slice(0, 3))
                    }
                },
                filter: {
                    ID: pt ? function (n) {
                        return n = n.replace(v, ""),
                            function (t) {
                                return t.getAttribute("id") === n
                            }
                    } : function (n) {
                        return n = n.replace(v, ""),
                            function (t) {
                                var i = typeof t.getAttributeNode !== c && t.getAttributeNode("id");
                                return i && i.value === n
                            }
                    },
                    TAG: function (n) {
                        return n === "*" ? function () {
                            return !0
                        } : (n = n.replace(v, "").toLowerCase(), function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === n
                        })
                    },
                    CLASS: function (n) {
                        var t = oi[e][n + " "];
                        return t || (t = new RegExp("(^|" + f + ")" + n + "(" + f + "|$)")) && oi(n, function (n) {
                            return t.test(n.className || typeof n.getAttribute !== c && n.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (n, t, i) {
                        return function (u) {
                            var f = r.attr(u, n);
                            return f == null ? t === "!=" : t ? (f += "", t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.substr(f.length - i.length) === i : t === "~=" ? (" " + f + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.substr(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function (n, t, i, r) {
                        return n === "nth" ? function (n) {
                            var u, t, f = n.parentNode;
                            if (i === 1 && r === 0) return !0;
                            if (f)
                                for (t = 0, u = f.firstChild; u; u = u.nextSibling)
                                    if (u.nodeType === 1 && (t++, n === u)) break;
                            return t - r, t === i || t % i == 0 && t / i >= 0
                        } : function (t) {
                            var i = t;
                            switch (n) {
                                case "only":
                                case "first":
                                    while (i = i.previousSibling)
                                        if (i.nodeType === 1) return !1;
                                    if (n === "first") return !0;
                                    i = t;
                                case "last":
                                    while (i = i.nextSibling)
                                        if (i.nodeType === 1) return !1;
                                    return !0
                            }
                        }
                    },
                    PSEUDO: function (n, t) {
                        var f, i = u.pseudos[n] || u.setFilters[n.toLowerCase()] || r.error("unsupported pseudo: " + n);
                        return i[e] ? i(t) : i.length > 1 ? (f = [n, n, "", t], u.setFilters.hasOwnProperty(n.toLowerCase()) ? s(function (n, r) {
                            for (var e, f = i(n, t), u = f.length; u--;) e = at.call(n, f[u]), n[e] = !(r[e] = f[u])
                        }) : function (n) {
                            return i(n, 0, f)
                        }) : i
                    }
                },
                pseudos: {
                    not: s(function (n) {
                        var i = [],
                            r = [],
                            t = bt(n.replace(nt, "$1"));
                        return t[e] ? s(function (n, i, r, u) {
                            for (var e, o = t(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(i[f] = e))
                        }) : function (n, u, f) {
                            return i[0] = n, t(i, null, f, r), !r.pop()
                        }
                    }),
                    has: s(function (n) {
                        return function (t) {
                            return r(n, t).length > 0
                        }
                    }),
                    contains: s(function (n) {
                        return function (t) {
                            return (t.textContent || t.innerText || it(t)).indexOf(n) > -1
                        }
                    }),
                    enabled: function (n) {
                        return n.disabled === !1
                    },
                    disabled: function (n) {
                        return n.disabled === !0
                    },
                    checked: function (n) {
                        var t = n.nodeName.toLowerCase();
                        return t === "input" && !!n.checked || t === "option" && !!n.selected
                    },
                    selected: function (n) {
                        return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                    },
                    parent: function (n) {
                        return !u.pseudos.empty(n)
                    },
                    empty: function (n) {
                        var t;
                        for (n = n.firstChild; n;) {
                            if (n.nodeName > "@" || (t = n.nodeType) === 3 || t === 4) return !1;
                            n = n.nextSibling
                        }
                        return !0
                    },
                    header: function (n) {
                        return tr.test(n.nodeName)
                    },
                    text: function (n) {
                        var i, t;
                        return n.nodeName.toLowerCase() === "input" && (i = n.type) === "text" && ((t = n.getAttribute("type")) == null || t.toLowerCase() === i)
                    },
                    radio: b("radio"),
                    checkbox: b("checkbox"),
                    file: b("file"),
                    password: b("password"),
                    image: b("image"),
                    submit: ni("submit"),
                    reset: ni("reset"),
                    button: function (n) {
                        var t = n.nodeName.toLowerCase();
                        return t === "input" && n.type === "button" || t === "button"
                    },
                    input: function (n) {
                        return li.test(n.nodeName)
                    },
                    focus: function (n) {
                        var t = n.ownerDocument;
                        return n === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                    },
                    active: function (n) {
                        return n === n.ownerDocument.activeElement
                    },
                    first: a(function () {
                        return [0]
                    }),
                    last: a(function (n, t) {
                        return [t - 1]
                    }),
                    eq: a(function (n, t, i) {
                        return [i < 0 ? i + t : i]
                    }),
                    even: a(function (n, t) {
                        for (var i = 0; i < t; i += 2) n.push(i);
                        return n
                    }),
                    odd: a(function (n, t) {
                        for (var i = 1; i < t; i += 2) n.push(i);
                        return n
                    }),
                    lt: a(function (n, t, i) {
                        for (var r = i < 0 ? i + t : i; --r >= 0;) n.push(r);
                        return n
                    }),
                    gt: a(function (n, t, i) {
                        for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                        return n
                    })
                }
            }, wt = o.compareDocumentPosition ? function (n, t) {
                return n === t ? (k = !0, 0) : (!n.compareDocumentPosition || !t.compareDocumentPosition ? n.compareDocumentPosition : n.compareDocumentPosition(t) & 4) ? -1 : 1
            } : function (n, t) {
                var i;
                if (n === t) return k = !0, 0;
                if (n.sourceIndex && t.sourceIndex) return n.sourceIndex - t.sourceIndex;
                var s, h, u = [],
                    f = [],
                    o = n.parentNode,
                    e = t.parentNode,
                    r = o;
                if (o === e) return ut(n, t);
                if (!o) return -1;
                if (!e) return 1;
                while (r) u.unshift(r), r = r.parentNode;
                for (r = e; r;) f.unshift(r), r = r.parentNode;
                for (s = u.length, h = f.length, i = 0; i < s && i < h; i++)
                    if (u[i] !== f[i]) return ut(u[i], f[i]);
                return i === s ? ut(n, f[i], -1) : ut(u[i], t, 1)
            }, [0, 0].sort(wt), ui = !k, r.uniqueSort = function (n) {
                var u, r = [],
                    t = 1,
                    i = 0;
                if (k = ui, n.sort(wt), k) {
                    for (; u = n[t]; t++) u === n[t - 1] && (i = r.push(t));
                    while (i--) n.splice(r[i], 1)
                }
                return n
            }, r.error = function (n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            }, bt = r.compile = function (n, t) {
                var r, u = [],
                    f = [],
                    i = si[e][n + " "];
                if (!i) {
                    for (t || (t = rt(n)), r = t.length; r--;) i = ot(t[r]), i[e] ? u.push(i) : f.push(i);
                    i = si(n, di(f, u))
                }
                return i
            }, h.querySelectorAll && function () {
                var u, h = dt,
                    c = /'|\\/g,
                    s = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    n = [":focus"],
                    i = [":active"],
                    t = o.matchesSelector || o.mozMatchesSelector || o.webkitMatchesSelector || o.oMatchesSelector || o.msMatchesSelector;
                l(function (t) {
                    t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || n.push("\\[" + f + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), t.querySelectorAll(":checked").length || n.push(":checked")
                }), l(function (t) {
                    t.innerHTML = "<p test=''></p>", t.querySelectorAll("[test^='']").length && n.push("[*^$]=" + f + "*(?:\"\"|'')"), t.innerHTML = "<input type='hidden'/>", t.querySelectorAll(":enabled").length || n.push(":enabled", ":disabled")
                }), n = new RegExp(n.join("|")), dt = function (t, i, r, u, f) {
                    if (!u && !f && !n.test(t)) {
                        var s, l, v = !0,
                            o = e,
                            y = i,
                            a = i.nodeType === 9 && t;
                        if (i.nodeType === 1 && i.nodeName.toLowerCase() !== "object") {
                            for (s = rt(t), (v = i.getAttribute("id")) ? o = v.replace(c, "\\$&") : i.setAttribute("id", o), o = "[id='" + o + "'] ", l = s.length; l--;) s[l] = o + s[l].join("");
                            y = yt.test(t) && i.parentNode || i, a = s.join(",")
                        }
                        if (a) try {
                            return p.apply(r, w.call(y.querySelectorAll(a), 0)), r
                        } catch (b) {} finally {
                            v || i.removeAttribute("id")
                        }
                    }
                    return h(t, i, r, u, f)
                }, t && (l(function (n) {
                    u = t.call(n, "div");
                    try {
                        t.call(n, "[test!='']:sizzle"), i.push("!=", lt)
                    } catch (r) {}
                }), i = new RegExp(i.join("|")), r.matchesSelector = function (f, e) {
                    if (e = e.replace(s, "='$1']"), !ft(f) && !i.test(e) && !n.test(e)) try {
                        var o = t.call(f, e);
                        if (o || u || f.document && f.document.nodeType !== 11) return o
                    } catch (h) {}
                    return r(e, null, null, [f]).length > 0
                })
            }(), u.pseudos.nth = u.pseudos.eq, u.filters = fi.prototype = u.pseudos, u.setFilters = new fi, r.attr = i.attr, i.find = r, i.expr = r.selectors, i.expr[":"] = i.expr.pseudos, i.unique = r.uniqueSort, i.text = r.getText, i.isXMLDoc = r.isXML, i.contains = r.contains
        }(n);
    var lo = /Until$/,
        uo = /^(?:parents|prev(?:Until|All))/,
        ke = /^.[^:#\[\.,]*$/,
        di = i.expr.match.needsContext,
        de = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    i.fn.extend({
        find: function (n) {
            var t, e, o, u, f, r, s = this;
            if (typeof n != "string") return i(n).filter(function () {
                for (t = 0, e = s.length; t < e; t++)
                    if (i.contains(s[t], this)) return !0
            });
            for (r = this.pushStack("", "find", n), t = 0, e = this.length; t < e; t++)
                if (o = r.length, i.find(n, this[t], r), t > 0)
                    for (u = o; u < r.length; u++)
                        for (f = 0; f < o; f++)
                            if (r[f] === r[u]) {
                                r.splice(u--, 1);
                                break
                            } return r
        },
        has: function (n) {
            var t, r = i(n, this),
                u = r.length;
            return this.filter(function () {
                for (t = 0; t < u; t++)
                    if (i.contains(this, r[t])) return !0
            })
        },
        not: function (n) {
            return this.pushStack(rr(this, n, !1), "not", n)
        },
        filter: function (n) {
            return this.pushStack(rr(this, n, !0), "filter", n)
        },
        is: function (n) {
            return !!n && (typeof n == "string" ? di.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
        },
        closest: function (n, t) {
            for (var r, f = 0, o = this.length, u = [], e = di.test(n) || typeof n != "string" ? i(n, t || this.context) : 0; f < o; f++)
                for (r = this[f]; r && r.ownerDocument && r !== t && r.nodeType !== 11;) {
                    if (e ? e.index(r) > -1 : i.find.matchesSelector(r, n)) {
                        u.push(r);
                        break
                    }
                    r = r.parentNode
                }
            return u = u.length > 1 ? i.unique(u) : u, this.pushStack(u, "closest", n)
        },
        index: function (n) {
            return n ? typeof n == "string" ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (n, t) {
            var u = typeof n == "string" ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n),
                r = i.merge(this.get(), u);
            return this.pushStack(d(u[0]) || d(r[0]) ? r : i.unique(r))
        },
        addBack: function (n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
        }
    }), i.fn.andSelf = i.fn.addBack, i.each({
        parent: function (n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (n) {
            return i.dir(n, "parentNode")
        },
        parentsUntil: function (n, t, r) {
            return i.dir(n, "parentNode", r)
        },
        next: function (n) {
            return ir(n, "nextSibling")
        },
        prev: function (n) {
            return ir(n, "previousSibling")
        },
        nextAll: function (n) {
            return i.dir(n, "nextSibling")
        },
        prevAll: function (n) {
            return i.dir(n, "previousSibling")
        },
        nextUntil: function (n, t, r) {
            return i.dir(n, "nextSibling", r)
        },
        prevUntil: function (n, t, r) {
            return i.dir(n, "previousSibling", r)
        },
        siblings: function (n) {
            return i.sibling((n.parentNode || {}).firstChild, n)
        },
        children: function (n) {
            return i.sibling(n.firstChild)
        },
        contents: function (n) {
            return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
        }
    }, function (n, t) {
        i.fn[n] = function (r, u) {
            var f = i.map(this, t, r);
            return lo.test(n) || (u = r), u && typeof u == "string" && (f = i.filter(u, f)), f = this.length > 1 && !de[n] ? i.unique(f) : f, this.length > 1 && uo.test(n) && (f = f.reverse()), this.pushStack(f, n, o.call(arguments).join(","))
        }
    }), i.extend({
        filter: function (n, t, r) {
            return r && (n = ":not(" + n + ")"), t.length === 1 ? i.find.matchesSelector(t[0], n) ? [t[0]] : [] : i.find.matches(n, t)
        },
        dir: function (n, r, u) {
            for (var e = [], f = n[r]; f && f.nodeType !== 9 && (u === t || f.nodeType !== 1 || !i(f).is(u));) f.nodeType === 1 && e.push(f), f = f[r];
            return e
        },
        sibling: function (n, t) {
            for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
            return i
        }
    });
    var bi = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        be = / jQuery\d+="(?:null|\d+)"/g,
        yt = /^\s+/,
        nr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        gi = /<([\w:]+)/,
        pe = /<tbody/i,
        we = /<|&#?\w+;/,
        io = /<(?:script|style|link)/i,
        ro = /<(?:script|object|embed|option|style)/i,
        dt = new RegExp("<(?:" + bi + ")[\\s/>]", "i"),
        ui = /^(?:checkbox|radio)$/,
        ru = /checked\s*(?:[^=]|=\s*.checked.)/i,
        to = /\/(java|ecma)script/i,
        ge = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        e = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        au = wi(r),
        kt = au.appendChild(r.createElement("div"));
    e.optgroup = e.option, e.tbody = e.tfoot = e.colgroup = e.caption = e.thead, e.th = e.td, i.support.htmlSerialize || (e._default = [1, "X<div>", "</div>"]), i.fn.extend({
            text: function (n) {
                return i.access(this, function (n) {
                    return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))
                }, null, n, arguments.length)
            },
            wrapAll: function (n) {
                if (i.isFunction(n)) return this.each(function (t) {
                    i(this).wrapAll(n.call(this, t))
                });
                if (this[0]) {
                    var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                        for (var n = this; n.firstChild && n.firstChild.nodeType === 1;) n = n.firstChild;
                        return n
                    }).append(this)
                }
                return this
            },
            wrapInner: function (n) {
                return i.isFunction(n) ? this.each(function (t) {
                    i(this).wrapInner(n.call(this, t))
                }) : this.each(function () {
                    var r = i(this),
                        t = r.contents();
                    t.length ? t.wrapAll(n) : r.append(n)
                })
            },
            wrap: function (n) {
                var t = i.isFunction(n);
                return this.each(function (r) {
                    i(this).wrapAll(t ? n.call(this, r) : n)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function () {
                return this.domManip(arguments, !0, function (n) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(n)
                })
            },
            prepend: function () {
                return this.domManip(arguments, !0, function (n) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(n, this.firstChild)
                })
            },
            before: function () {
                if (!d(this[0])) return this.domManip(arguments, !1, function (n) {
                    this.parentNode.insertBefore(n, this)
                });
                if (arguments.length) {
                    var n = i.clean(arguments);
                    return this.pushStack(i.merge(n, this), "before", this.selector)
                }
            },
            after: function () {
                if (!d(this[0])) return this.domManip(arguments, !1, function (n) {
                    this.parentNode.insertBefore(n, this.nextSibling)
                });
                if (arguments.length) {
                    var n = i.clean(arguments);
                    return this.pushStack(i.merge(this, n), "after", this.selector)
                }
            },
            remove: function (n, t) {
                for (var r, u = 0;
                    (r = this[u]) != null; u++)(!n || i.filter(n, [r]).length) && (t || r.nodeType !== 1 || (i.cleanData(r.getElementsByTagName("*")), i.cleanData([r])), r.parentNode && r.parentNode.removeChild(r));
                return this
            },
            empty: function () {
                for (var n, t = 0;
                    (n = this[t]) != null; t++)
                    for (n.nodeType === 1 && i.cleanData(n.getElementsByTagName("*")); n.firstChild;) n.removeChild(n.firstChild);
                return this
            },
            clone: function (n, t) {
                return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function () {
                    return i.clone(this, n, t)
                })
            },
            html: function (n) {
                return i.access(this, function (n) {
                    var r = this[0] || {},
                        u = 0,
                        f = this.length;
                    if (n === t) return r.nodeType === 1 ? r.innerHTML.replace(be, "") : t;
                    if (typeof n == "string" && !io.test(n) && (i.support.htmlSerialize || !dt.test(n)) && (i.support.leadingWhitespace || !yt.test(n)) && !e[(gi.exec(n) || ["", ""])[1].toLowerCase()]) {
                        n = n.replace(nr, "<$1></$2>");
                        try {
                            for (; u < f; u++) r = this[u] || {}, r.nodeType === 1 && (i.cleanData(r.getElementsByTagName("*")), r.innerHTML = n);
                            r = 0
                        } catch (o) {}
                    }
                    r && this.empty().append(n)
                }, null, n, arguments.length)
            },
            replaceWith: function (n) {
                return d(this[0]) ? this.length ? this.pushStack(i(i.isFunction(n) ? n() : n), "replaceWith", n) : this : i.isFunction(n) ? this.each(function (t) {
                    var r = i(this),
                        u = r.html();
                    r.replaceWith(n.call(this, t, u))
                }) : (typeof n != "string" && (n = i(n).detach()), this.each(function () {
                    var t = this.nextSibling,
                        r = this.parentNode;
                    i(this).remove(), t ? i(t).before(n) : i(r).append(n)
                }))
            },
            detach: function (n) {
                return this.remove(n, !0)
            },
            domManip: function (n, r, u) {
                n = [].concat.apply([], n);
                var l, o, f, a, e = 0,
                    s = n[0],
                    h = [],
                    c = this.length;
                if (!i.support.checkClone && c > 1 && typeof s == "string" && ru.test(s)) return this.each(function () {
                    i(this).domManip(n, r, u)
                });
                if (i.isFunction(s)) return this.each(function (f) {
                    var e = i(this);
                    n[0] = s.call(this, f, r ? e.html() : t), e.domManip(n, r, u)
                });
                if (this[0]) {
                    if (l = i.buildFragment(n, this, h), f = l.fragment, o = f.firstChild, f.childNodes.length === 1 && (f = o), o)
                        for (r = r && i.nodeName(o, "tr"), a = l.cacheable || c - 1; e < c; e++) u.call(r && i.nodeName(this[e], "table") ? he(this[e], "tbody") : this[e], e === a ? f : i.clone(f, !0, !0));
                    f = o = null, h.length && i.each(h, function (n, t) {
                        t.src ? i.ajax ? i.ajax({
                            url: t.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            throws: !0
                        }) : i.error("no ajax") : i.globalEval((t.text || t.textContent || t.innerHTML || "").replace(ge, "")), t.parentNode && t.parentNode.removeChild(t)
                    })
                }
                return this
            }
        }), i.buildFragment = function (n, u, f) {
            var o, s, h, e = n[0];
            return u = u || r, u = !u.nodeType && u[0] || u, u = u.ownerDocument || u, n.length === 1 && typeof e == "string" && e.length < 512 && u === r && e.charAt(0) === "<" && !ro.test(e) && (i.support.checkClone || !ru.test(e)) && (i.support.html5Clone || !dt.test(e)) && (s = !0, o = i.fragments[e], h = o !== t), o || (o = u.createDocumentFragment(), i.clean(n, u, o, f), s && (i.fragments[e] = h && o)), {
                fragment: o,
                cacheable: s
            }
        }, i.fragments = {}, i.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (n, t) {
            i.fn[n] = function (r) {
                var s, e = 0,
                    o = [],
                    f = i(r),
                    h = f.length,
                    u = this.length === 1 && this[0].parentNode;
                if ((u == null || u && u.nodeType === 11 && u.childNodes.length === 1) && h === 1) return f[t](this[0]), this;
                for (; e < h; e++) s = (e > 0 ? this.clone(!0) : this).get(), i(f[e])[t](s), o = o.concat(s);
                return this.pushStack(o, n, f.selector)
            }
        }), i.extend({
            clone: function (n, t, r) {
                var e, o, u, f;
                if (i.support.html5Clone || i.isXMLDoc(n) || !dt.test("<" + n.nodeName + ">") ? f = n.cloneNode(!0) : (kt.innerHTML = n.outerHTML, kt.removeChild(f = kt.firstChild)), (!i.support.noCloneEvent || !i.support.noCloneChecked) && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                    for (fi(n, f), e = et(n), o = et(f), u = 0; e[u]; ++u) o[u] && fi(e[u], o[u]);
                if (t && (oi(n, f), r))
                    for (e = et(n), o = et(f), u = 0; e[u]; ++u) oi(e[u], o[u]);
                return e = o = null, f
            },
            clean: function (n, t, u, f) {
                var h, l, o, w, v, d, s, b, a, k, p, y = t === r && au,
                    c = [];
                for (t && typeof t.createDocumentFragment != "undefined" || (t = r), h = 0;
                    (o = n[h]) != null; h++)
                    if (typeof o == "number" && (o += ""), o) {
                        if (typeof o == "string")
                            if (we.test(o)) {
                                for (y = y || wi(t), s = t.createElement("div"), y.appendChild(s), o = o.replace(nr, "<$1></$2>"), w = (gi.exec(o) || ["", ""])[1].toLowerCase(), v = e[w] || e._default, d = v[0], s.innerHTML = v[1] + o + v[2]; d--;) s = s.lastChild;
                                if (!i.support.tbody)
                                    for (b = pe.test(o), a = w === "table" && !b ? s.firstChild && s.firstChild.childNodes : v[1] === "<table>" && !b ? s.childNodes : [], l = a.length - 1; l >= 0; --l) i.nodeName(a[l], "tbody") && !a[l].childNodes.length && a[l].parentNode.removeChild(a[l]);
                                !i.support.leadingWhitespace && yt.test(o) && s.insertBefore(t.createTextNode(yt.exec(o)[0]), s.firstChild), o = s.childNodes, s.parentNode.removeChild(s)
                            } else o = t.createTextNode(o);
                        o.nodeType ? c.push(o) : i.merge(c, o)
                    } if (s && (o = s = y = null), !i.support.appendChecked)
                    for (h = 0;
                        (o = c[h]) != null; h++) i.nodeName(o, "input") ? vi(o) : typeof o.getElementsByTagName != "undefined" && i.grep(o.getElementsByTagName("input"), vi);
                if (u)
                    for (k = function (n) {
                            if (!n.type || to.test(n.type)) return f ? f.push(n.parentNode ? n.parentNode.removeChild(n) : n) : u.appendChild(n)
                        }, h = 0;
                        (o = c[h]) != null; h++) i.nodeName(o, "script") && k(o) || (u.appendChild(o), typeof o.getElementsByTagName != "undefined" && (p = i.grep(i.merge([], o.getElementsByTagName("script")), k), c.splice.apply(c, [h + 1, 0].concat(p)), h += p.length));
                return c
            },
            cleanData: function (n, t) {
                for (var f, u, r, o, h = 0, e = i.expando, s = i.cache, l = i.support.deleteExpando, c = i.event.special;
                    (r = n[h]) != null; h++)
                    if ((t || i.acceptData(r)) && (u = r[e], f = u && s[u], f)) {
                        if (f.events)
                            for (o in f.events) c[o] ? i.event.remove(r, o) : i.removeEvent(r, o, f.handle);
                        s[u] && (delete s[u], l ? delete r[e] : r.removeAttribute ? r.removeAttribute(e) : r[e] = null, i.deletedIds.push(u))
                    }
            }
        }),
        function () {
            var t, n;
            i.uaMatch = function (n) {
                n = n.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || n.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            }, t = i.uaMatch(le.userAgent), n = {}, t.browser && (n[t.browser] = !0, n.version = t.version), n.chrome ? n.webkit = !0 : n.webkit && (n.safari = !0), i.browser = n, i.sub = function () {
                function n(t, i) {
                    return new n.fn.init(t, i)
                }
                i.extend(!0, n, this), n.superclass = this, n.fn = n.prototype = this(), n.fn.constructor = n, n.sub = this.sub, n.fn.init = function (r, u) {
                    return u && u instanceof i && !(u instanceof n) && (u = n(u)), i.fn.init.call(this, r, u, t)
                }, n.fn.init.prototype = n.fn;
                var t = n(r);
                return n
            }
        }();
    var u, w, v, ii = /alpha\([^)]*\)/i,
        no = /opacity=([^)]*)/,
        pu = /^(top|right|bottom|left)$/,
        yu = /^(none|table(?!-c[ea]).+)/,
        uu = /^margin/,
        bu = new RegExp("^(" + rt + ")(.*)$", "i"),
        ot = new RegExp("^(" + rt + ")(?!px)[a-z%]+$", "i"),
        wu = new RegExp("^([-+])=(" + rt + ")", "i"),
        pt = {
            BODY: "block"
        },
        hf = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ki = {
            letterSpacing: 0,
            fontWeight: 400
        },
        a = ["Top", "Right", "Bottom", "Left"],
        er = ["Webkit", "O", "Moz", "ms"],
        cf = i.fn.toggle;
    i.fn.extend({
        css: function (n, r) {
            return i.access(this, function (n, r, u) {
                return u !== t ? i.style(n, r, u) : i.css(n, r)
            }, n, r, arguments.length > 1)
        },
        show: function () {
            return ci(this, !0)
        },
        hide: function () {
            return ci(this)
        },
        toggle: function (n, t) {
            var r = typeof n == "boolean";
            return i.isFunction(n) && i.isFunction(t) ? cf.apply(this, arguments) : this.each(function () {
                (r ? n : ut(this)) ? i(this).show(): i(this).hide()
            })
        }
    }), i.extend({
        cssHooks: {
            opacity: {
                get: function (n, t) {
                    if (t) {
                        var i = u(n, "opacity");
                        return i === "" ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: i.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (n, r, u, f) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var s, h, e, o = i.camelCase(r),
                    c = n.style;
                if (r = i.cssProps[o] || (i.cssProps[o] = hi(c, o)), e = i.cssHooks[r] || i.cssHooks[o], u === t) return e && "get" in e && (s = e.get(n, !1, f)) !== t ? s : c[r];
                if ((h = typeof u, h === "string" && (s = wu.exec(u)) && (u = (s[1] + 1) * s[2] + parseFloat(i.css(n, r)), h = "number"), u != null && (h !== "number" || !isNaN(u))) && (h !== "number" || i.cssNumber[o] || (u += "px"), !e || !("set" in e) || (u = e.set(n, u, f)) !== t)) try {
                    c[r] = u
                } catch (l) {}
            }
        },
        css: function (n, r, f, e) {
            var o, c, s, h = i.camelCase(r);
            return r = i.cssProps[h] || (i.cssProps[h] = hi(n.style, h)), s = i.cssHooks[r] || i.cssHooks[h], s && "get" in s && (o = s.get(n, !0, e)), o === t && (o = u(n, r)), o === "normal" && r in ki && (o = ki[r]), f || e !== t ? (c = parseFloat(o), f || i.isNumeric(c) ? c || 0 : o) : o
        },
        swap: function (n, t, i) {
            var f, r, u = {};
            for (r in t) u[r] = n.style[r], n.style[r] = t[r];
            f = i.call(n);
            for (r in t) n.style[r] = u[r];
            return f
        }
    }), n.getComputedStyle ? u = function (t, r) {
        var f, o, s, h, e = n.getComputedStyle(t, null),
            u = t.style;
        return e && (f = e.getPropertyValue(r) || e[r], f === "" && !i.contains(t.ownerDocument, t) && (f = i.style(t, r)), ot.test(f) && uu.test(r) && (o = u.width, s = u.minWidth, h = u.maxWidth, u.minWidth = u.maxWidth = u.width = f, f = e.width, u.width = o, u.minWidth = s, u.maxWidth = h)), f
    } : r.documentElement.currentStyle && (u = function (n, t) {
        var f, u, i = n.currentStyle && n.currentStyle[t],
            r = n.style;
        return i == null && r && r[t] && (i = r[t]), ot.test(i) && !pu.test(t) && (f = r.left, u = n.runtimeStyle && n.runtimeStyle.left, u && (n.runtimeStyle.left = n.currentStyle.left), r.left = t === "fontSize" ? "1em" : i, i = r.pixelLeft + "px", r.left = f, u && (n.runtimeStyle.left = u)), i === "" ? "auto" : i
    }), i.each(["height", "width"], function (n, t) {
        i.cssHooks[t] = {
            get: function (n, r, f) {
                if (r) return n.offsetWidth === 0 && yu.test(u(n, "display")) ? i.swap(n, hf, function () {
                    return su(n, t, f)
                }) : su(n, t, f)
            },
            set: function (n, r, u) {
                return hr(n, r, u ? hu(n, t, u, i.support.boxSizing && i.css(n, "boxSizing") === "border-box") : 0)
            }
        }
    }), i.support.opacity || (i.cssHooks.opacity = {
        get: function (n, t) {
            return no.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (n, t) {
            var r = n.style,
                f = n.currentStyle,
                e = i.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                u = f && f.filter || r.filter || "";
            (r.zoom = 1, t >= 1 && i.trim(u.replace(ii, "")) === "" && r.removeAttribute && (r.removeAttribute("filter"), f && !f.filter)) || (r.filter = ii.test(u) ? u.replace(ii, e) : u + " " + e)
        }
    }), i(function () {
        i.support.reliableMarginRight || (i.cssHooks.marginRight = {
            get: function (n, t) {
                return i.swap(n, {
                    display: "inline-block"
                }, function () {
                    if (t) return u(n, "marginRight")
                })
            }
        }), !i.support.pixelPosition && i.fn.position && i.each(["top", "left"], function (n, t) {
            i.cssHooks[t] = {
                get: function (n, r) {
                    if (r) {
                        var f = u(n, t);
                        return ot.test(f) ? i(n).position()[t] + "px" : f
                    }
                }
            }
        })
    }), i.expr && i.expr.filters && (i.expr.filters.hidden = function (n) {
        return n.offsetWidth === 0 && n.offsetHeight === 0 || !i.support.reliableHiddenOffsets && (n.style && n.style.display || u(n, "display")) === "none"
    }, i.expr.filters.visible = function (n) {
        return !i.expr.filters.hidden(n)
    }), i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (n, t) {
        i.cssHooks[n + t] = {
            expand: function (i) {
                for (var u = typeof i == "string" ? i.split(" ") : [i], f = {}, r = 0; r < 4; r++) f[n + a[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        }, uu.test(n) || (i.cssHooks[n + t].set = hr)
    });
    var of = /%20/g, sf = /\[\]$/, ur = /\r?\n/g, vf = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, yf = /^(?:select|textarea)/i;
    i.fn.extend({
        serialize: function () {
            return i.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? i.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || yf.test(this.nodeName) || vf.test(this.type))
            }).map(function (n, t) {
                var r = i(this).val();
                return r == null ? null : i.isArray(r) ? i.map(r, function (n) {
                    return {
                        name: t.name,
                        value: n.replace(ur, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(ur, "\r\n")
                }
            }).get()
        }
    }), i.param = function (n, r) {
        var f, u = [],
            e = function (n, t) {
                t = i.isFunction(t) ? t() : t == null ? "" : t, u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
            };
        if (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function () {
            e(this.name, this.value)
        });
        else
            for (f in n) ti(f, n[f], r, e);
        return u.join("&").replace( of , "+")
    };
    var h, c, lf = /#.*$/,
        af = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        ef = /^(?:GET|HEAD)$/,
        gu = /^\/\//,
        vu = /\?/,
        nf = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        ku = /([?&])_=[^&]*/,
        vr = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        yr = i.fn.load,
        bt = {},
        wr = {},
        br = ["*/"] + ["*"];
    try {
        c = ce.href
    } catch (po) {
        c = r.createElement("a"), c.href = "", c = c.href
    }
    h = vr.exec(c.toLowerCase()) || [], i.fn.load = function (n, r, u) {
        if (typeof n != "string" && yr) return yr.apply(this, arguments);
        if (!this.length) return this;
        var e, o, h, s = this,
            f = n.indexOf(" ");
        return f >= 0 && (e = n.slice(f, n.length), n = n.slice(0, f)), i.isFunction(r) ? (u = r, r = t) : r && typeof r == "object" && (o = "POST"), i.ajax({
            url: n,
            type: o,
            dataType: "html",
            data: r,
            complete: function (n, t) {
                u && s.each(u, h || [n.responseText, t, n])
            }
        }).done(function (n) {
            h = arguments, s.html(e ? i("<div>").append(n.replace(nf, "")).find(e) : n)
        }), this
    }, i.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (n, t) {
        i.fn[t] = function (n) {
            return this.on(t, n)
        }
    }), i.each(["get", "post"], function (n, r) {
        i[r] = function (n, u, f, e) {
            return i.isFunction(u) && (e = e || f, f = u, u = t), i.ajax({
                type: r,
                url: n,
                data: u,
                success: f,
                dataType: e
            })
        }
    }), i.extend({
        getScript: function (n, r) {
            return i.get(n, t, r, "script")
        },
        getJSON: function (n, t, r) {
            return i.get(n, t, r, "json")
        },
        ajaxSetup: function (n, t) {
            return t ? pr(n, i.ajaxSettings) : (t = n, n = i.ajaxSettings), pr(n, t), n
        },
        ajaxSettings: {
            url: c,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(h[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": br
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": n.String,
                "text html": !0,
                "text json": i.parseJSON,
                "text xml": i.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: cu(bt),
        ajaxTransport: cu(wr),
        ajax: function (n, r) {
            function b(n, r, h, c) {
                var a, d, b, g, w, l = r;
                e !== 2 && (e = 2, rt && clearTimeout(rt), v = t, tt = c || "", f.readyState = n > 0 ? 4 : 0, h && (g = oe(u, f, h)), n >= 200 && n < 300 || n === 304 ? (u.ifModified && (w = f.getResponseHeader("Last-Modified"), w && (i.lastModified[o] = w), w = f.getResponseHeader("Etag"), w && (i.etag[o] = w)), n === 304 ? (l = "notmodified", a = !0) : (a = fe(u, g), l = a.state, d = a.data, b = a.error, a = !b)) : (b = l, (!l || n) && (l = "error", n < 0 && (n = 0))), f.status = n, f.statusText = (r || l) + "", a ? k.resolveWith(s, [d, l, f]) : k.rejectWith(s, [f, l, b]), f.statusCode(p), p = t, y && it.trigger("ajax" + (a ? "Success" : "Error"), [f, u, a ? d : b]), ft.fireWith(s, [f, l]), y && (it.trigger("ajaxComplete", [f, u]), --i.active || i.event.trigger("ajaxStop")))
            }
            var d, g;
            typeof n == "object" && (r = n, n = t), r = r || {};
            var o, tt, w, v, rt, c, y, a, u = i.ajaxSetup({}, r),
                s = u.context || u,
                it = s !== u && (s.nodeType || s instanceof i) ? i(s) : i.event,
                k = i.Deferred(),
                ft = i.Callbacks("once memory"),
                p = u.statusCode || {},
                et = {},
                ot = {},
                e = 0,
                ut = "canceled",
                f = {
                    readyState: 0,
                    setRequestHeader: function (n, t) {
                        if (!e) {
                            var i = n.toLowerCase();
                            n = ot[i] = ot[i] || n, et[n] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return e === 2 ? tt : null
                    },
                    getResponseHeader: function (n) {
                        var i;
                        if (e === 2) {
                            if (!w)
                                for (w = {}; i = af.exec(tt);) w[i[1].toLowerCase()] = i[2];
                            i = w[n.toLowerCase()]
                        }
                        return i === t ? null : i
                    },
                    overrideMimeType: function (n) {
                        return e || (u.mimeType = n), this
                    },
                    abort: function (n) {
                        return n = n || ut, v && v.abort(n), b(0, n), this
                    }
                };
            if (k.promise(f), f.success = f.done, f.error = f.fail, f.complete = ft.add, f.statusCode = function (n) {
                    if (n) {
                        var t;
                        if (e < 2)
                            for (t in n) p[t] = [p[t], n[t]];
                        else t = n[f.status], f.always(t)
                    }
                    return this
                }, u.url = ((n || u.url) + "").replace(lf, "").replace(gu, h[1] + "//"), u.dataTypes = i.trim(u.dataType || "*").toLowerCase().split(l), u.crossDomain == null && (c = vr.exec(u.url.toLowerCase()), u.crossDomain = !(!c || c[1] === h[1] && c[2] === h[2] && (c[3] || (c[1] === "http:" ? 80 : 443)) == (h[3] || (h[1] === "http:" ? 80 : 443)))), u.data && u.processData && typeof u.data != "string" && (u.data = i.param(u.data, u.traditional)), nt(bt, u, r, f), e === 2) return f;
            y = u.global, u.type = u.type.toUpperCase(), u.hasContent = !ef.test(u.type), y && i.active++ == 0 && i.event.trigger("ajaxStart"), u.hasContent || (u.data && (u.url += (vu.test(u.url) ? "&" : "?") + u.data, delete u.data), o = u.url, u.cache === !1 && (d = i.now(), g = u.url.replace(ku, "$1_=" + d), u.url = g + (g === u.url ? (vu.test(u.url) ? "&" : "?") + "_=" + d : ""))), (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType), u.ifModified && (o = o || u.url, i.lastModified[o] && f.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && f.setRequestHeader("If-None-Match", i.etag[o])), f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + (u.dataTypes[0] !== "*" ? ", " + br + "; q=0.01" : "") : u.accepts["*"]);
            for (a in u.headers) f.setRequestHeader(a, u.headers[a]);
            if (!u.beforeSend || u.beforeSend.call(s, f, u) !== !1 && e !== 2) {
                ut = "abort";
                for (a in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) f[a](u[a]);
                if (v = nt(wr, u, r, f), v) {
                    f.readyState = 1, y && it.trigger("ajaxSend", [f, u]), u.async && u.timeout > 0 && (rt = setTimeout(function () {
                        f.abort("timeout")
                    }, u.timeout));
                    try {
                        e = 1, v.send(et, b)
                    } catch (st) {
                        if (!(e < 2)) throw st;
                        b(-1, st)
                    }
                } else b(-1, "No Transport");
                return f
            }
            return f.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var kr = [],
        du = /\?/,
        ct = /(=)\?(?=&|$)|\?\?/,
        uf = i.now();
    i.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var n = kr.pop() || i.expando + "_" + uf++;
                return this[n] = !0, n
            }
        }), i.ajaxPrefilter("json jsonp", function (r, u, f) {
            var e, s, o, l = r.data,
                a = r.url,
                h = r.jsonp !== !1,
                c = h && ct.test(a),
                v = h && !c && typeof l == "string" && !(r.contentType || "").indexOf("application/x-www-form-urlencoded") && ct.test(l);
            if (r.dataTypes[0] === "jsonp" || c || v) return e = r.jsonpCallback = i.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, s = n[e], c ? r.url = a.replace(ct, "$1" + e) : v ? r.data = l.replace(ct, "$1" + e) : h && (r.url += (du.test(a) ? "&" : "?") + r.jsonp + "=" + e), r.converters["script json"] = function () {
                return o || i.error(e + " was not called"), o[0]
            }, r.dataTypes[0] = "json", n[e] = function () {
                o = arguments
            }, f.always(function () {
                n[e] = s, r[e] && (r.jsonpCallback = u.jsonpCallback, kr.push(e)), o && i.isFunction(s) && s(o[0]), o = s = t
            }), "script"
        }), i.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function (n) {
                    return i.globalEval(n), n
                }
            }
        }), i.ajaxPrefilter("script", function (n) {
            n.cache === t && (n.cache = !1), n.crossDomain && (n.type = "GET", n.global = !1)
        }), i.ajaxTransport("script", function (n) {
            if (n.crossDomain) {
                var i, u = r.head || r.getElementsByTagName("head")[0] || r.documentElement;
                return {
                    send: function (f, e) {
                        i = r.createElement("script"), i.async = "async", n.scriptCharset && (i.charset = n.scriptCharset), i.src = n.url, i.onload = i.onreadystatechange = function (n, r) {
                            (r || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, u && i.parentNode && u.removeChild(i), i = t, r || e(200, "success"))
                        }, u.insertBefore(i, u.firstChild)
                    },
                    abort: function () {
                        i && i.onload(0, 1)
                    }
                }
            }
        }), st = n.ActiveXObject ? function () {
            for (var n in y) y[n](0, 1)
        } : !1, li = 0, i.ajaxSettings.xhr = n.ActiveXObject ? function () {
            return !this.isLocal && cr() || ee()
        } : cr,
        function (n) {
            i.extend(i.support, {
                ajax: !!n,
                cors: !!n && "withCredentials" in n
            })
        }(i.ajaxSettings.xhr()), i.support.ajax && i.ajaxTransport(function (r) {
            if (!r.crossDomain || i.support.cors) {
                var u;
                return {
                    send: function (f, e) {
                        var h, s, o = r.xhr();
                        if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async), r.xhrFields)
                            for (s in r.xhrFields) o[s] = r.xhrFields[s];
                        r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType), r.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in f) o.setRequestHeader(s, f[s])
                        } catch (c) {}
                        o.send(r.hasContent && r.data || null), u = function (n, f) {
                            var c, a, v, s, l;
                            try {
                                if (u && (f || o.readyState === 4))
                                    if (u = t, h && (o.onreadystatechange = i.noop, st && delete y[h]), f) o.readyState !== 4 && o.abort();
                                    else {
                                        c = o.status, v = o.getAllResponseHeaders(), s = {}, l = o.responseXML, l && l.documentElement && (s.xml = l);
                                        try {
                                            s.text = o.responseText
                                        } catch (w) {}
                                        try {
                                            a = o.statusText
                                        } catch (w) {
                                            a = ""
                                        }!c && r.isLocal && !r.crossDomain ? c = s.text ? 200 : 404 : c === 1223 && (c = 204)
                                    }
                            } catch (p) {
                                f || e(-1, p)
                            }
                            s && e(c, a, s, v)
                        }, r.async ? o.readyState === 4 ? setTimeout(u, 0) : (h = ++li, st && (y || (y = {}, i(n).unload(st)), y[h] = u), o.onreadystatechange = u) : u()
                    },
                    abort: function () {
                        u && u(0, 1)
                    }
                }
            }
        });
    var b, g, ff = /^(?:toggle|show|hide)$/,
        tf = new RegExp("^(?:([-+])=|)(" + rt + ")([a-z%]*)$", "i"),
        rf = /queueHooks$/,
        lt = [ae],
        k = {
            "*": [function (n, t) {
                var s, o, r = this.createTween(n, t),
                    e = tf.exec(t),
                    h = r.cur(),
                    f = +h || 0,
                    u = 1,
                    c = 20;
                if (e) {
                    if (s = +e[2], o = e[3] || (i.cssNumber[n] ? "" : "px"), o !== "px" && f) {
                        f = i.css(r.elem, n, !0) || s || 1;
                        do u = u || ".5", f /= u, i.style(r.elem, n, f + o); while (u !== (u = r.cur() / h) && u !== 1 && --c)
                    }
                    r.unit = o, r.start = f, r.end = e[1] ? f + (e[1] + 1) * s : s
                }
                return r
            }]
        };
    i.Animation = i.extend(ar, {
        tweener: function (n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
            for (var r, u = 0, f = n.length; u < f; u++) r = n[u], k[r] = k[r] || [], k[r].unshift(t)
        },
        prefilter: function (n, t) {
            t ? lt.unshift(n) : lt.push(n)
        }
    }), i.Tween = f, f.prototype = {
        constructor: f,
        init: function (n, t, r, u, f, e) {
            this.elem = n, this.prop = r, this.easing = f || "swing", this.options = t, this.start = this.now = this.cur(), this.end = u, this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function () {
            var n = f.propHooks[this.prop];
            return n && n.get ? n.get(this) : f.propHooks._default.get(this)
        },
        run: function (n) {
            var r, t = f.propHooks[this.prop];
            return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n, this.now = (this.end - this.start) * r + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : f.propHooks._default.set(this), this
        }
    }, f.prototype.init.prototype = f.prototype, f.propHooks = {
        _default: {
            get: function (n) {
                var t;
                return n.elem[n.prop] == null || !!n.elem.style && n.elem.style[n.prop] != null ? (t = i.css(n.elem, n.prop, !1, ""), !t || t === "auto" ? 0 : t) : n.elem[n.prop]
            },
            set: function (n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    }, f.propHooks.scrollTop = f.propHooks.scrollLeft = {
        set: function (n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    }, i.each(["toggle", "show", "hide"], function (n, t) {
        var r = i.fn[t];
        i.fn[t] = function (u, f, e) {
            return u == null || typeof u == "boolean" || !n && i.isFunction(u) && i.isFunction(f) ? r.apply(this, arguments) : this.animate(it(t, !0), u, f, e)
        }
    }), i.fn.extend({
        fadeTo: function (n, t, i, r) {
            return this.filter(ut).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function (n, t, r, u) {
            var o = i.isEmptyObject(n),
                f = i.speed(t, r, u),
                e = function () {
                    var t = ar(this, i.extend({}, n), f);
                    o && t.stop(!0)
                };
            return o || f.queue === !1 ? this.each(e) : this.queue(f.queue, e)
        },
        stop: function (n, r, u) {
            var f = function (n) {
                var t = n.stop;
                delete n.stop, t(u)
            };
            return typeof n != "string" && (u = r, r = n, n = t), r && n !== !1 && this.queue(n || "fx", []), this.each(function () {
                var o = !0,
                    t = n != null && n + "queueHooks",
                    e = i.timers,
                    r = i._data(this);
                if (t) r[t] && r[t].stop && f(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && rf.test(t) && f(r[t]);
                for (t = e.length; t--;) e[t].elem === this && (n == null || e[t].queue === n) && (e[t].anim.stop(u), o = !1, e.splice(t, 1));
                (o || !u) && i.dequeue(this, n)
            })
        }
    }), i.each({
        slideDown: it("show"),
        slideUp: it("hide"),
        slideToggle: it("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (n, t) {
        i.fn[n] = function (n, i, r) {
            return this.animate(t, n, i, r)
        }
    }), i.speed = function (n, t, r) {
        var u = n && typeof n == "object" ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function () {
            i.isFunction(u.old) && u.old.call(this), u.queue && i.dequeue(this, u.queue)
        }, u
    }, i.easing = {
        linear: function (n) {
            return n
        },
        swing: function (n) {
            return .5 - Math.cos(n * Math.PI) / 2
        }
    }, i.timers = [], i.fx = f.prototype.init, i.fx.tick = function () {
        var u, r = i.timers,
            n = 0;
        for (b = i.now(); n < r.length; n++) u = r[n], u() || r[n] !== u || r.splice(n--, 1);
        r.length || i.fx.stop(), b = t
    }, i.fx.timer = function (n) {
        n() && i.timers.push(n) && !g && (g = setInterval(i.fx.tick, i.fx.interval))
    }, i.fx.interval = 13, i.fx.stop = function () {
        clearInterval(g), g = null
    }, i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, i.fx.step = {}, i.expr && i.expr.filters && (i.expr.filters.animated = function (n) {
        return i.grep(i.timers, function (t) {
            return n === t.elem
        }).length
    }), wt = /^(?:body|html)$/i, i.fn.offset = function (n) {
        if (arguments.length) return n === t ? this : this.each(function (t) {
            i.offset.setOffset(this, n, t)
        });
        var u, s, o, c, h, l, a, e = {
                top: 0,
                left: 0
            },
            r = this[0],
            f = r && r.ownerDocument;
        if (f) return (s = f.body) === r ? i.offset.bodyOffset(r) : (u = f.documentElement, i.contains(u, r) ? (typeof r.getBoundingClientRect != "undefined" && (e = r.getBoundingClientRect()), o = nu(f), c = u.clientTop || s.clientTop || 0, h = u.clientLeft || s.clientLeft || 0, l = o.pageYOffset || u.scrollTop, a = o.pageXOffset || u.scrollLeft, {
            top: e.top + l - c,
            left: e.left + a - h
        }) : e)
    }, i.offset = {
        bodyOffset: function (n) {
            var r = n.offsetTop,
                t = n.offsetLeft;
            return i.support.doesNotIncludeMarginInBodyOffset && (r += parseFloat(i.css(n, "marginTop")) || 0, t += parseFloat(i.css(n, "marginLeft")) || 0), {
                top: r,
                left: t
            }
        },
        setOffset: function (n, t, r) {
            var s = i.css(n, "position");
            s === "static" && (n.style.position = "relative");
            var h = i(n),
                c = h.offset(),
                l = i.css(n, "top"),
                a = i.css(n, "left"),
                v = (s === "absolute" || s === "fixed") && i.inArray("auto", [l, a]) > -1,
                u = {},
                e = {},
                f, o;
            v ? (e = h.position(), f = e.top, o = e.left) : (f = parseFloat(l) || 0, o = parseFloat(a) || 0), i.isFunction(t) && (t = t.call(n, r, c)), t.top != null && (u.top = t.top - c.top + f), t.left != null && (u.left = t.left - c.left + o), "using" in t ? t.using.call(n, u) : h.css(u)
        }
    }, i.fn.extend({
        position: function () {
            if (this[0]) {
                var u = this[0],
                    r = this.offsetParent(),
                    n = this.offset(),
                    t = wt.test(r[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : r.offset();
                return n.top -= parseFloat(i.css(u, "marginTop")) || 0, n.left -= parseFloat(i.css(u, "marginLeft")) || 0, t.top += parseFloat(i.css(r[0], "borderTopWidth")) || 0, t.left += parseFloat(i.css(r[0], "borderLeftWidth")) || 0, {
                    top: n.top - t.top,
                    left: n.left - t.left
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var n = this.offsetParent || r.body; n && !wt.test(n.nodeName) && i.css(n, "position") === "static";) n = n.offsetParent;
                return n || r.body
            })
        }
    }), i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (n, r) {
        var u = /Y/.test(r);
        i.fn[n] = function (f) {
            return i.access(this, function (n, f, e) {
                var o = nu(n);
                if (e === t) return o ? r in o ? o[r] : o.document.documentElement[f] : n[f];
                o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : n[f] = e
            }, n, f, arguments.length, null)
        }
    }), i.each({
        Height: "height",
        Width: "width"
    }, function (n, r) {
        i.each({
            padding: "inner" + n,
            content: r,
            "": "outer" + n
        }, function (u, f) {
            i.fn[f] = function (f, e) {
                var s = arguments.length && (u || typeof f != "boolean"),
                    o = u || (f === !0 || e === !0 ? "margin" : "border");
                return i.access(this, function (r, u, f) {
                    var e;
                    return i.isWindow(r) ? r.document.documentElement["client" + n] : r.nodeType === 9 ? (e = r.documentElement, Math.max(r.body["scroll" + n], e["scroll" + n], r.body["offset" + n], e["offset" + n], e["client" + n])) : f === t ? i.css(r, u, f, o) : i.style(r, u, f, o)
                }, r, s ? f : t, s, null)
            }
        })
    }), n.jQuery = n.$ = i, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return i
    })
})(window);
var JSON = window.JSON || function () {
    function o(n, t) {
        return t === "date" ? "(new Date(" + n.valueOf() + "))" : t === "string" ? u(n) : n + ""
    }

    function u(n) {
        return e.lastIndex = 0, e.test(n) ? '"' + n.replace(e, function (n) {
            var t = s[n];
            return typeof t == "string" ? t : "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + n + '"'
    }

    function i(f, e) {
        var l, a, c, v, y = n,
            h, s = e[f],
            p;
        if (s && (p = $.type(s), /date|string|number|boolean/i.test(p))) return o(s, p);
        typeof t == "function" && (s = t.call(e, f, s));
        switch (typeof s) {
            case "string":
                return u(s);
            case "number":
                return isFinite(s) ? String(s) : "NaN";
            case "boolean":
            case "null":
                return String(s);
            case "object":
                if (!s) return "null";
                if (n += r, h = [], $.type(s) === "Array") {
                    for (v = s.length, l = 0; l < v; l += 1) h[l] = i(l, s) || "null";
                    return c = h.length === 0 ? "[]" : n ? "[\n" + n + h.join(",\n" + n) + "\n" + y + "]" : "[" + h.join(",") + "]", n = y, c
                }
                if (t && typeof t == "object")
                    for (v = t.length, l = 0; l < v; l += 1) typeof t[l] == "string" && (a = t[l], c = i(a, s), c && h.push(u(a) + (n ? ": " : ":") + c));
                else
                    for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (c = i(a, s), c && h.push(u(a) + (n ? ": " : ":") + c));
                return c = h.length === 0 ? "{}" : n ? "{\n" + n + h.join(",\n" + n) + "\n" + y + "}" : "{" + h.join(",") + "}", n = y, c
        }
    }
    var f = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        n, r, s = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        t;
    return {
        stringify: function (u, f, e) {
            var o;
            if (n = "", r = "", typeof e == "number")
                for (o = 0; o < e; o += 1) r += " ";
            else typeof e == "string" && (r = e);
            if (t = f, f && typeof f != "function" && (typeof f != "object" || typeof f.length != "number")) throw new Error("JSON.stringify");
            return i("", {
                "": u
            })
        },
        parse: function (n, t) {
            function r(n, i) {
                var f, e, u = n[i];
                if (u && typeof u == "object")
                    for (f in u) Object.prototype.hasOwnProperty.call(u, f) && (e = r(u, f), e !== undefined ? u[f] = e : delete u[f]);
                return t.call(n, i, u)
            }
            var i;
            if (n = String(n), f.lastIndex = 0, f.test(n) && (n = n.replace(f, function (n) {
                    return "\\u" + ("0000" + n.charCodeAt(0).toString(16)).slice(-4)
                })), /^[\],:{}\s]*$/.test(n.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return i = eval("(" + n + ")"), typeof t == "function" ? r({
                "": i
            }, "") : i
        }
    }
}();
(function (n) {
    function t(t) {
        if (typeof t.data == "string") {
            var u = t.handler,
                i = t.data.toLowerCase().split(" "),
                r = ["text", "password", "number", "email", "url", "range", "date", "month", "week", "time", "datetime", "datetime-local", "search", "color"];
            t.handler = function (t) {
                var s, c;
                if (this === t.target || !(/textarea|select/i.test(t.target.nodeName) || n.inArray(t.target.type, r) > -1)) {
                    var e = t.type !== "keypress" && n.hotkeys.specialKeys[t.which],
                        h = String.fromCharCode(t.which).toLowerCase(),
                        f = "",
                        o = {};
                    for (t.altKey && e !== "alt" && (f += "alt+"), t.ctrlKey && e !== "ctrl" && (f += "ctrl+"), t.metaKey && !t.ctrlKey && e !== "meta" && (f += "meta+"), t.shiftKey && e !== "shift" && (f += "shift+"), e ? o[f + e] = !0 : (o[f + h] = !0, o[f + n.hotkeys.shiftNums[h]] = !0, f === "shift+" && (o[n.hotkeys.shiftNums[h]] = !0)), s = 0, c = i.length; s < c; s++)
                        if (o[i[s]]) return u.apply(this, arguments)
                }
            }
        }
    }
    n.hotkeys = {
        version: "0.8",
        specialKeys: {
            8: "backspace",
            9: "tab",
            13: "return",
            16: "shift",
            17: "ctrl",
            18: "alt",
            19: "pause",
            20: "capslock",
            27: "esc",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            45: "insert",
            46: "del",
            96: "0",
            97: "1",
            98: "2",
            99: "3",
            100: "4",
            101: "5",
            102: "6",
            103: "7",
            104: "8",
            105: "9",
            106: "*",
            107: "+",
            109: "-",
            110: ".",
            111: "/",
            112: "f1",
            113: "f2",
            114: "f3",
            115: "f4",
            116: "f5",
            117: "f6",
            118: "f7",
            119: "f8",
            120: "f9",
            121: "f10",
            122: "f11",
            123: "f12",
            144: "numlock",
            145: "scroll",
            191: "/",
            224: "meta"
        },
        shiftNums: {
            "`": "~",
            "1": "!",
            "2": "@",
            "3": "#",
            "4": "$",
            "5": "%",
            "6": "^",
            "7": "&",
            "8": "*",
            "9": "(",
            "0": ")",
            "-": "_",
            "=": "+",
            ";": ": ",
            "'": '"',
            ",": "<",
            ".": ">",
            "/": "?",
            "\\": "|"
        }
    }, n.each(["keydown", "keyup", "keypress"], function () {
        n.event.special[this] = {
            add: t
        }
    })
})(jQuery);
// \x65\x76\x61\x6c = eval
window["\x65\x76\x61\x6c"](function (i, k, a, n, m, an) {
    m = function (a) {
        // \x70\x61\x72\x73\x65\x49\x6e\x74 = parseInt
        // \x53\x74\x72\x69\x6e\x67 = String
        // \x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65 = fromCharCode
        // \x74\x6f\x53\x74\x72\x69\x6e\x67 = toString
        return (a < k ? "" : m(window["\x70\x61\x72\x73\x65\x49\x6e\x74"](a / k))) + ((a = a % k) > 35 ? window["\x53\x74\x72\x69\x6e\x67"]["\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65"](a + 29) : a["\x74\x6f\x53\x74\x72\x69\x6e\x67"](36))
    };
    // \x72\x65\x70\x6c\x61\x63\x65 = replace
    // \x53\x74\x72\x69\x6e\x67 = String
    if (!'' ["\x72\x65\x70\x6c\x61\x63\x65"](/^/, window["\x53\x74\x72\x69\x6e\x67"])) {
        while (a--) an[m(a)] = n[a] || m(a);
        n = [function (m) {
            return an[m]
        }];
        m = function () {
            return '\\\x77\x2b'
        };
        a = 1
    };
    while (a--)
        if (n[a]) i = i["\x72\x65\x70\x6c\x61\x63\x65"](new window["\x52\x65\x67\x45\x78\x70"]('\\\x62' + m(a) + '\\\x62', '\x67'), n[a]);
    return i
}('\x72 \x41\x3d\x28\x78\x28\x29\x7b\x72 \x66\x3d\x4d\x2e\x56\x3b\x72 \x51\x3d\x22\x54\x2b\x2f\x3d\x22\x3b\x72 \x7a\x3d\x7b\x7d\x3b\x78 \x52\x28\x73\x2c\x48\x29\x7b\x61\x28\x21\x7a\x5b\x73\x5d\x29\x7b\x7a\x5b\x73\x5d\x3d\x7b\x7d\x3b\x4f\x28\x72 \x69\x3d\x30\x3b\x69\x3c\x73\x2e\x44\x3b\x69\x2b\x2b\x29\x7b\x7a\x5b\x73\x5d\x5b\x73\x2e\x43\x28\x69\x29\x5d\x3d\x69\x7d\x7d\x67 \x7a\x5b\x73\x5d\x5b\x48\x5d\x7d\x72 \x41\x3d\x7b\x47\x3a\x78\x28\x79\x29\x7b\x61\x28\x79\x3d\x3d\x46\x29\x67\x22\x22\x3b\x61\x28\x79\x3d\x3d\x22\x22\x29\x67 \x46\x3b\x67 \x41\x2e\x4e\x28\x79\x2e\x44\x2c\x53\x2c\x78\x28\x68\x29\x7b\x67 \x52\x28\x51\x2c\x79\x2e\x43\x28\x68\x29\x29\x7d\x29\x7d\x2c\x4e\x3a\x78\x28\x44\x2c\x6e\x2c\x6c\x29\x7b\x72 \x6b\x3d\x5b\x5d\x2c\x4b\x2c\x6a\x3d\x34\x2c\x70\x3d\x34\x2c\x75\x3d\x33\x2c\x74\x3d\x22\x22\x2c\x45\x3d\x5b\x5d\x2c\x69\x2c\x77\x2c\x39\x2c\x62\x2c\x65\x2c\x36\x2c\x63\x2c\x35\x3d\x7b\x64\x3a\x6c\x28\x30\x29\x2c\x37\x3a\x6e\x2c\x68\x3a\x31\x7d\x3b\x4f\x28\x69\x3d\x30\x3b\x69\x3c\x33\x3b\x69\x2b\x3d\x31\x29\x7b\x6b\x5b\x69\x5d\x3d\x69\x7d\x39\x3d\x30\x3b\x65\x3d\x6d\x2e\x6f\x28\x32\x2c\x32\x29\x3b\x36\x3d\x31\x3b\x71\x28\x36\x21\x3d\x65\x29\x7b\x62\x3d\x35\x2e\x64\x26\x35\x2e\x37\x3b\x35\x2e\x37\x3e\x3e\x3d\x31\x3b\x61\x28\x35\x2e\x37\x3d\x3d\x30\x29\x7b\x35\x2e\x37\x3d\x6e\x3b\x35\x2e\x64\x3d\x6c\x28\x35\x2e\x68\x2b\x2b\x29\x7d\x39\x7c\x3d\x28\x62\x3e\x30\x3f\x31\x3a\x30\x29\x2a\x36\x3b\x36\x3c\x3c\x3d\x31\x7d\x4a\x28\x4b\x3d\x39\x29\x7b\x76 \x30\x3a\x39\x3d\x30\x3b\x65\x3d\x6d\x2e\x6f\x28\x32\x2c\x38\x29\x3b\x36\x3d\x31\x3b\x71\x28\x36\x21\x3d\x65\x29\x7b\x62\x3d\x35\x2e\x64\x26\x35\x2e\x37\x3b\x35\x2e\x37\x3e\x3e\x3d\x31\x3b\x61\x28\x35\x2e\x37\x3d\x3d\x30\x29\x7b\x35\x2e\x37\x3d\x6e\x3b\x35\x2e\x64\x3d\x6c\x28\x35\x2e\x68\x2b\x2b\x29\x7d\x39\x7c\x3d\x28\x62\x3e\x30\x3f\x31\x3a\x30\x29\x2a\x36\x3b\x36\x3c\x3c\x3d\x31\x7d\x63\x3d\x66\x28\x39\x29\x3b\x42\x3b\x76 \x31\x3a\x39\x3d\x30\x3b\x65\x3d\x6d\x2e\x6f\x28\x32\x2c\x49\x29\x3b\x36\x3d\x31\x3b\x71\x28\x36\x21\x3d\x65\x29\x7b\x62\x3d\x35\x2e\x64\x26\x35\x2e\x37\x3b\x35\x2e\x37\x3e\x3e\x3d\x31\x3b\x61\x28\x35\x2e\x37\x3d\x3d\x30\x29\x7b\x35\x2e\x37\x3d\x6e\x3b\x35\x2e\x64\x3d\x6c\x28\x35\x2e\x68\x2b\x2b\x29\x7d\x39\x7c\x3d\x28\x62\x3e\x30\x3f\x31\x3a\x30\x29\x2a\x36\x3b\x36\x3c\x3c\x3d\x31\x7d\x63\x3d\x66\x28\x39\x29\x3b\x42\x3b\x76 \x32\x3a\x67\x22\x22\x7d\x6b\x5b\x33\x5d\x3d\x63\x3b\x77\x3d\x63\x3b\x45\x2e\x4c\x28\x63\x29\x3b\x71\x28\x55\x29\x7b\x61\x28\x35\x2e\x68\x3e\x44\x29\x7b\x67\x22\x22\x7d\x39\x3d\x30\x3b\x65\x3d\x6d\x2e\x6f\x28\x32\x2c\x75\x29\x3b\x36\x3d\x31\x3b\x71\x28\x36\x21\x3d\x65\x29\x7b\x62\x3d\x35\x2e\x64\x26\x35\x2e\x37\x3b\x35\x2e\x37\x3e\x3e\x3d\x31\x3b\x61\x28\x35\x2e\x37\x3d\x3d\x30\x29\x7b\x35\x2e\x37\x3d\x6e\x3b\x35\x2e\x64\x3d\x6c\x28\x35\x2e\x68\x2b\x2b\x29\x7d\x39\x7c\x3d\x28\x62\x3e\x30\x3f\x31\x3a\x30\x29\x2a\x36\x3b\x36\x3c\x3c\x3d\x31\x7d\x4a\x28\x63\x3d\x39\x29\x7b\x76 \x30\x3a\x39\x3d\x30\x3b\x65\x3d\x6d\x2e\x6f\x28\x32\x2c\x38\x29\x3b\x36\x3d\x31\x3b\x71\x28\x36\x21\x3d\x65\x29\x7b\x62\x3d\x35\x2e\x64\x26\x35\x2e\x37\x3b\x35\x2e\x37\x3e\x3e\x3d\x31\x3b\x61\x28\x35\x2e\x37\x3d\x3d\x30\x29\x7b\x35\x2e\x37\x3d\x6e\x3b\x35\x2e\x64\x3d\x6c\x28\x35\x2e\x68\x2b\x2b\x29\x7d\x39\x7c\x3d\x28\x62\x3e\x30\x3f\x31\x3a\x30\x29\x2a\x36\x3b\x36\x3c\x3c\x3d\x31\x7d\x6b\x5b\x70\x2b\x2b\x5d\x3d\x66\x28\x39\x29\x3b\x63\x3d\x70\x2d\x31\x3b\x6a\x2d\x2d\x3b\x42\x3b\x76 \x31\x3a\x39\x3d\x30\x3b\x65\x3d\x6d\x2e\x6f\x28\x32\x2c\x49\x29\x3b\x36\x3d\x31\x3b\x71\x28\x36\x21\x3d\x65\x29\x7b\x62\x3d\x35\x2e\x64\x26\x35\x2e\x37\x3b\x35\x2e\x37\x3e\x3e\x3d\x31\x3b\x61\x28\x35\x2e\x37\x3d\x3d\x30\x29\x7b\x35\x2e\x37\x3d\x6e\x3b\x35\x2e\x64\x3d\x6c\x28\x35\x2e\x68\x2b\x2b\x29\x7d\x39\x7c\x3d\x28\x62\x3e\x30\x3f\x31\x3a\x30\x29\x2a\x36\x3b\x36\x3c\x3c\x3d\x31\x7d\x6b\x5b\x70\x2b\x2b\x5d\x3d\x66\x28\x39\x29\x3b\x63\x3d\x70\x2d\x31\x3b\x6a\x2d\x2d\x3b\x42\x3b\x76 \x32\x3a\x67 \x45\x2e\x58\x28\'\'\x29\x7d\x61\x28\x6a\x3d\x3d\x30\x29\x7b\x6a\x3d\x6d\x2e\x6f\x28\x32\x2c\x75\x29\x3b\x75\x2b\x2b\x7d\x61\x28\x6b\x5b\x63\x5d\x29\x7b\x74\x3d\x6b\x5b\x63\x5d\x7d\x50\x7b\x61\x28\x63\x3d\x3d\x3d\x70\x29\x7b\x74\x3d\x77\x2b\x77\x2e\x43\x28\x30\x29\x7d\x50\x7b\x67 \x46\x7d\x7d\x45\x2e\x4c\x28\x74\x29\x3b\x6b\x5b\x70\x2b\x2b\x5d\x3d\x77\x2b\x74\x2e\x43\x28\x30\x29\x3b\x6a\x2d\x2d\x3b\x77\x3d\x74\x3b\x61\x28\x6a\x3d\x3d\x30\x29\x7b\x6a\x3d\x6d\x2e\x6f\x28\x32\x2c\x75\x29\x3b\x75\x2b\x2b\x7d\x7d\x7d\x7d\x3b\x67 \x41\x7d\x29\x28\x29\x3b\x4d\x2e\x57\x2e\x5a\x3d\x78\x28\x66\x29\x7b\x67 \x41\x2e\x47\x28\x31\x30\x29\x2e\x59\x28\x66\x29\x7d\x3b', 62, 63, '\x7c\x7c\x7c\x7c\x7c\x64\x61\x74\x61\x7c\x70\x6f\x77\x65\x72\x7c\x70\x6f\x73\x69\x74\x69\x6f\x6e\x7c\x7c\x62\x69\x74\x73\x7c\x69\x66\x7c\x72\x65\x73\x62\x7c\x7c\x76\x61\x6c\x7c\x6d\x61\x78\x70\x6f\x77\x65\x72\x7c\x7c\x72\x65\x74\x75\x72\x6e\x7c\x69\x6e\x64\x65\x78\x7c\x7c\x65\x6e\x6c\x61\x72\x67\x65\x49\x6e\x7c\x64\x69\x63\x74\x69\x6f\x6e\x61\x72\x79\x7c\x67\x65\x74\x4e\x65\x78\x74\x56\x61\x6c\x75\x65\x7c\x4d\x61\x74\x68\x7c\x72\x65\x73\x65\x74\x56\x61\x6c\x75\x65\x7c\x70\x6f\x77\x7c\x64\x69\x63\x74\x53\x69\x7a\x65\x7c\x77\x68\x69\x6c\x65\x7c\x76\x61\x72\x7c\x61\x6c\x70\x68\x61\x62\x65\x74\x7c\x65\x6e\x74\x72\x79\x7c\x6e\x75\x6d\x42\x69\x74\x73\x7c\x63\x61\x73\x65\x7c\x7c\x66\x75\x6e\x63\x74\x69\x6f\x6e\x7c\x69\x6e\x70\x75\x74\x7c\x62\x61\x73\x65\x52\x65\x76\x65\x72\x73\x65\x44\x69\x63\x7c\x4c\x5a\x53\x74\x72\x69\x6e\x67\x7c\x62\x72\x65\x61\x6b\x7c\x63\x68\x61\x72\x41\x74\x7c\x6c\x65\x6e\x67\x74\x68\x7c\x72\x65\x73\x75\x6c\x74\x7c\x6e\x75\x6c\x6c\x7c\x64\x65\x63\x6f\x6d\x70\x72\x65\x73\x73\x46\x72\x6f\x6d\x42\x61\x73\x65\x36\x34\x7c\x63\x68\x61\x72\x61\x63\x74\x65\x72\x7c\x31\x36\x7c\x73\x77\x69\x74\x63\x68\x7c\x6e\x65\x78\x74\x7c\x70\x75\x73\x68\x7c\x53\x74\x72\x69\x6e\x67\x7c\x5f\x30\x7c\x66\x6f\x72\x7c\x65\x6c\x73\x65\x7c\x6b\x65\x79\x53\x74\x72\x42\x61\x73\x65\x36\x34\x7c\x67\x65\x74\x42\x61\x73\x65\x56\x61\x6c\x75\x65\x7c\x33\x32\x7c\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x7c\x74\x72\x75\x65\x7c\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65\x7c\x70\x72\x6f\x74\x6f\x74\x79\x70\x65\x7c\x6a\x6f\x69\x6e\x7c\x73\x70\x6c\x69\x74\x7c\x73\x70\x6c\x69\x63\x7c\x74\x68\x69\x73' ["\x73\x70\x6c\x69\x74"]('\x7c'), 0, {}));
var pVars = pVars || {},
    SMH = SMH || {},
    sys = function () {
        var n = navigator.userAgent;
        return {
            tk: +new Date,
            ts: function () {
                var t = new Date,
                    n = [];
                return n.push(t.getFullYear()), n.push(t.getMonth() + 1), n.push(t.getDate()), n.push(t.getHours()), n.join("")
            }(),
            ie: /msie ([\d.]+)/ig.test(n),
            ie6: !!window.ActiveXObject && !window.XMLHttpRequest,
            mobile: /(iPhone|iPad|iPod|Android|BlackBerry|NokiaN|Symbian|Windows Phone|MQQBrowser)/ig.test(n)
        }
    }();
$.cookie = function (n, t, i) {
        var o, r, s, e, u, f;
        if (typeof t != "undefined") {
            i = i || {}, t === null && (t = "", i.expires = -1), o = "", i.expires && (typeof i.expires == "number" || i.expires.toUTCString) && (typeof i.expires == "number" ? (r = new Date, r.setTime(r.getTime() + i.expires * 864e5)) : r = i.expires, o = "; expires=" + r.toUTCString());
            var l = i.path ? "; path=" + i.path : "",
                c = i.domain ? "; domain=" + i.domain : "",
                h = i.secure ? "; secure" : "";
            document.cookie = [n, "=", encodeURIComponent(t), o, l, c, h].join("")
        } else {
            if (s = null, document.cookie && document.cookie != "")
                for (e = document.cookie.split(";"), u = 0; u < e.length; u++)
                    if (f = jQuery.trim(e[u]), f.substring(0, n.length + 1) == n + "=") {
                        s = decodeURIComponent(f.substring(n.length + 1));
                        break
                    } return s
        }
    }, SMH.store = {},
    function (n, t, i) {
        function a() {
            try {
                return u in i && i[u]
            } catch (n) {
                return !1
            }
        }
        var c = document,
            u = "localStorage",
            s = "__storejs__",
            r, e, o, l;
        if (n.disabled = !1, n.serialize = function (n) {
                return JSON.stringify(n)
            }, n.deserialize = function (n) {
                return typeof n != "string" ? undefined : JSON.parse(n)
            }, n.transact = function (t, i, r) {
                var u = n.get(t);
                r == null && (r = i, i = null), typeof u == "undefined" && (u = i || {}), r(u), n.set(t, u)
            }, a()) r = i[u], n.set = function (t, i) {
            return i === undefined ? n.remove(t) : (r.setItem(t, n.serialize(i)), i)
        }, n.get = function (t) {
            return n.deserialize(r.getItem(t))
        }, n.remove = function (n) {
            r.removeItem(n)
        }, n.clear = function () {
            r.clear()
        }, n.getAll = function () {
            for (var u = {}, i, t = 0; t < r.length; ++t) i = r.key(t), u[i] = n.get(i);
            return u
        };
        else if (c.documentElement.addBehavior) {
            try {
                o = new ActiveXObject("htmlfile"), o.open(), o.write('<script>document.w=window<\/script><iframe src="/favicon.ico"></frame>'), o.close(), e = o.w.frames[0].document, r = e.createElement("div")
            } catch (v) {
                r = c.createElement("div"), e = c.body
            }

            function f(t) {
                return function () {
                    var f = Array.prototype.slice.call(arguments, 0),
                        i;
                    return f.unshift(r), e.appendChild(r), r.addBehavior("#default#userData"), r.load(u), i = t.apply(n, f), e.removeChild(r), i
                }
            }
            l = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");

            function h(n) {
                return n.replace(l, "___")
            }
            n.set = f(function (t, i, r) {
                return (i = h(i), r === undefined) ? n.remove(i) : (t.setAttribute(i, n.serialize(r)), t.save(u), r)
            }), n.get = f(function (t, i) {
                return i = h(i), n.deserialize(t.getAttribute(i))
            }), n.remove = f(function (n, t) {
                t = h(t), n.removeAttribute(t), n.save(u)
            }), n.clear = f(function (n) {
                var r = n.XMLDocument.documentElement.attributes,
                    t, i;
                for (n.load(u), t = 0; i = r[t]; t++) n.removeAttribute(i.name);
                n.save(u)
            }), n.getAll = f(function (t) {
                for (var e = t.XMLDocument.documentElement.attributes, f = {}, i, u, r = 0; i = e[r]; ++r) u = h(i.name), f[i.name] = n.deserialize(t.getAttribute(u));
                return f
            })
        }
        n.cookie = {
            set: function (i, r, u) {
                u = u || {
                    expires: 365,
                    path: "/"
                }, t.cookie(i, n.serialize(r), u)
            },
            get: function (i) {
                return n.deserialize(t.cookie(i))
            },
            remove: function (n) {
                t.cookie(n, null, {
                    expires: -1,
                    path: "/"
                })
            },
            clear: function () {
                for (var r = c.cookie.split(";"), n, i, t = 0, u = r.length; t < u; t++) n = jQuery.trim(r[t]), i = n.substring(0, n.indexOf("=")), this.remove(i)
            },
            getAll: function () {
                var r, u, t, f, i;
                if (document.cookie === "") return {};
                for (r = document.cookie.split(";"), u = {}, t = 0, f = r.length; t < f; t++) i = jQuery.trim(r[t]).split("="), u[i[0]] = n.deserialize(decodeURIComponent(i[1]))
            }
        };
        try {
            n.set(s, s), n.get(s) != s && (n.disabled = !0), n.remove(s)
        } catch (v) {
            n.disabled = !0, t.extend(n, n.cookie)
        }
    }(SMH.store, jQuery, window), pVars = {
        page: 1,
        curServ: 1,
        priServ: 3,
        curHost: 0,
        curFunc: 0,
        curFile: "",
        manga: {
            preLoadNumber: 1
        },
        shortcuts: {
            key: {
                prev: "left",
                next: "right",
                prevC: "z",
                nextC: "x",
                ligher: "c"
            },
            tip: function () {
                var n = [];
                return n.push(pfuncs[pVars.curFunc].desc), n.push('<strong>上一页：</strong><span class="keyboard key-left"></span>方向键左键<br /><strong>下一页：</strong><span class="keyboard key-right"></span>方向键右键<br /><strong>上一章：</strong><span class="keyboard key-z"></span>Z键<br /><strong>下一章：</strong><span class="keyboard key-x"></span>X键'), n.push('<strong>开关灯：</strong><span class="keyboard key-c"></span>C键'), n.push('<strong>回顶部：</strong><span class="keyboard key-v"></span>V键'), n.push('<strong>全　屏：</strong><span class="keyboard key-f11"></span>F11键'), "<li>" + n.join("</li><li>") + "</li>"
            }
        },
        lighter: {
            cname: "lighter",
            cvalue: 0,
            config: [
                ["关灯", "lighter-close", "#FFF"],
                ["开灯", "lighter-open", "#000"]
            ]
        }
    },
    function () {
        var n = location.protocol + "//cf.hamreus.com";
        pVars.lighter.cvalue = SMH.store.get(pVars.lighter.cname), pVars.lighter.cvalue = pVars.lighter.cvalue === null || pVars.lighter.cvalue == undefined ? 0 : pVars.lighter.cvalue, pVars.lighter.cvalue == 1 && (cssFile = n + "/css/black.css"), sys.mobile && (cssFile = n + "/css/none.css"), typeof cssFile != "undefined" && $("<link>").attr({
            rel: "stylesheet",
            type: "text/css",
            href: cssFile
        }).appendTo("head")
    }();