window.Modernizr = function(a, b, c) {
    function D(a) {
        j.cssText = a
    }
    function E(a, b) {
        return D(n.join(a + ";") + (b || ""))
    }
    function F(a, b) {
        return typeof a === b
    }
    function G(a, b) {
        return !!~("" + a).indexOf(b)
    }
    function H(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!G(e, "-") && j[e] !== c)
                return b == "pfx" ? e : !0
        }
        return !1
    }
    function I(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }
    function J(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1)
          , e = (a + " " + p.join(d + " ") + d).split(" ");
        return F(b, "string") || F(b, "undefined") ? H(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "),
        I(e, b, c))
    }
    function K() {
        e.input = function(c) {
            for (var d = 0, e = c.length; d < e; d++)
                u[c[d]] = c[d]in k;
            return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement),
            u
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
        e.inputtypes = function(a) {
            for (var d = 0, e, f, h, i = a.length; d < i; d++)
                k.setAttribute("type", f = a[d]),
                e = k.type !== "text",
                e && (k.value = l,
                k.style.cssText = "position:absolute;visibility:hidden;",
                /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k),
                h = b.defaultView,
                e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0,
                g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)),
                t[a[d]] = !!e;
            return t
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d = "2.7.1", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k = b.createElement("input"), l = ":)", m = {}.toString, n = " -webkit- -moz- -o- -ms- ".split(" "), o = "Webkit Moz O ms", p = o.split(" "), q = o.toLowerCase().split(" "), r = {
        svg: "http://www.w3.org/2000/svg"
    }, s = {}, t = {}, u = {}, v = [], w = v.slice, x, y = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10))
            while (d--)
                j = b.createElement("div"),
                j.id = e ? e[d] : h + (d + 1),
                l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""),
        l.id = h,
        (m ? l : n).innerHTML += f,
        n.appendChild(l),
        m || (n.style.background = "",
        n.style.overflow = "hidden",
        k = g.style.overflow,
        g.style.overflow = "hidden",
        g.appendChild(n)),
        i = c(l, a),
        m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n),
        g.style.overflow = k),
        !!i
    }, z = function(b) {
        var c = a.matchMedia || a.msMatchMedia;
        if (c)
            return c(b).matches;
        var d;
        return y("@media " + b + " { #" + h + " { position: absolute; } }", function(b) {
            d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute"
        }),
        d
    }, A = function() {
        function d(d, e) {
            e = e || b.createElement(a[d] || "div"),
            d = "on" + d;
            var f = d in e;
            return f || (e.setAttribute || (e = b.createElement("div")),
            e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""),
            f = F(e[d], "function"),
            F(e[d], "undefined") || (e[d] = c),
            e.removeAttribute(d))),
            e = null,
            f
        }
        var a = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return d
    }(), B = {}.hasOwnProperty, C;
    !F(B, "undefined") && !F(B.call, "undefined") ? C = function(a, b) {
        return B.call(a, b)
    }
    : C = function(a, b) {
        return b in a && F(a.constructor.prototype[b], "undefined")
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function")
            throw new TypeError;
        var d = w.call(arguments, 1)
          , e = function() {
            if (this instanceof e) {
                var a = function() {};
                a.prototype = c.prototype;
                var f = new a
                  , g = c.apply(f, d.concat(w.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(w.call(arguments)))
        };
        return e
    }
    ),
    s.flexbox = function() {
        return J("flexWrap")
    }
    ,
    s.flexboxlegacy = function() {
        return J("boxDirection")
    }
    ,
    s.canvas = function() {
        var a = b.createElement("canvas");
        return !!a.getContext && !!a.getContext("2d")
    }
    ,
    s.canvastext = function() {
        return !!e.canvas && !!F(b.createElement("canvas").getContext("2d").fillText, "function")
    }
    ,
    s.webgl = function() {
        return !!a.WebGLRenderingContext
    }
    ,
    s.touch = function() {
        var c;
        return "ontouchstart"in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
            c = a.offsetTop === 9
        }),
        c
    }
    ,
    s.geolocation = function() {
        return "geolocation"in navigator
    }
    ,
    s.postmessage = function() {
        return !!a.postMessage
    }
    ,
    s.websqldatabase = function() {
        return !!a.openDatabase
    }
    ,
    s.indexedDB = function() {
        return !!J("indexedDB", a)
    }
    ,
    s.hashchange = function() {
        return A("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
    }
    ,
    s.history = function() {
        return !!a.history && !!history.pushState
    }
    ,
    s.draganddrop = function() {
        var a = b.createElement("div");
        return "draggable"in a || "ondragstart"in a && "ondrop"in a
    }
    ,
    s.websockets = function() {
        return "WebSocket"in a || "MozWebSocket"in a
    }
    ,
    s.rgba = function() {
        return D("background-color:rgba(150,255,150,.5)"),
        G(j.backgroundColor, "rgba")
    }
    ,
    s.hsla = function() {
        return D("background-color:hsla(120,40%,100%,.5)"),
        G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla")
    }
    ,
    s.multiplebgs = function() {
        return D("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(j.background)
    }
    ,
    s.backgroundsize = function() {
        return J("backgroundSize")
    }
    ,
    s.borderimage = function() {
        return J("borderImage")
    }
    ,
    s.borderradius = function() {
        return J("borderRadius")
    }
    ,
    s.boxshadow = function() {
        return J("boxShadow")
    }
    ,
    s.textshadow = function() {
        return b.createElement("div").style.textShadow === ""
    }
    ,
    s.opacity = function() {
        return E("opacity:.55"),
        /^0.55$/.test(j.opacity)
    }
    ,
    s.cssanimations = function() {
        return J("animationName")
    }
    ,
    s.csscolumns = function() {
        return J("columnCount")
    }
    ,
    s.cssgradients = function() {
        var a = "background-image:"
          , b = "gradient(linear,left top,right bottom,from(#9f9),to(white));"
          , c = "linear-gradient(left top,#9f9, white);";
        return D((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)),
        G(j.backgroundImage, "gradient")
    }
    ,
    s.cssreflections = function() {
        return J("boxReflect")
    }
    ,
    s.csstransforms = function() {
        return !!J("transform")
    }
    ,
    s.csstransforms3d = function() {
        var a = !!J("perspective");
        return a && "webkitPerspective"in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
            a = b.offsetLeft === 9 && b.offsetHeight === 3
        }),
        a
    }
    ,
    s.csstransitions = function() {
        return J("transition")
    }
    ,
    s.fontface = function() {
        var a;
        return y('@font-face {font-family:"font";src:url("https://")}', function(c, d) {
            var e = b.getElementById("smodernizr")
              , f = e.sheet || e.styleSheet
              , g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
            a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0
        }),
        a
    }
    ,
    s.generatedcontent = function() {
        var a;
        return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
            a = b.offsetHeight >= 3
        }),
        a
    }
    ,
    s.video = function() {
        var a = b.createElement("video")
          , c = !1;
        try {
            if (c = !!a.canPlayType)
                c = new Boolean(c),
                c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
                c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
                c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch (d) {}
        return c
    }
    ,
    s.audio = function() {
        var a = b.createElement("audio")
          , c = !1;
        try {
            if (c = !!a.canPlayType)
                c = new Boolean(c),
                c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
        } catch (d) {}
        return c
    }
    ,
    s.localstorage = function() {
        try {
            return localStorage.setItem(h, h),
            localStorage.removeItem(h),
            !0
        } catch (a) {
            return !1
        }
    }
    ,
    s.sessionstorage = function() {
        try {
            return sessionStorage.setItem(h, h),
            sessionStorage.removeItem(h),
            !0
        } catch (a) {
            return !1
        }
    }
    ,
    s.webworkers = function() {
        return !!a.Worker
    }
    ,
    s.applicationcache = function() {
        return !!a.applicationCache
    }
    ,
    s.svg = function() {
        return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect
    }
    ,
    s.inlinesvg = function() {
        var a = b.createElement("div");
        return a.innerHTML = "<svg/>",
        (a.firstChild && a.firstChild.namespaceURI) == r.svg
    }
    ,
    s.smil = function() {
        return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")))
    }
    ,
    s.svgclippaths = function() {
        return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
    }
    ;
    for (var L in s)
        C(s, L) && (x = L.toLowerCase(),
        e[x] = s[L](),
        v.push((e[x] ? "" : "no-") + x));
    return e.input || K(),
    e.addTest = function(a, b) {
        if (typeof a == "object")
            for (var d in a)
                C(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c)
                return e;
            b = typeof b == "function" ? b() : b,
            typeof f != "undefined" && f && (g.className += " mdrnz-" + (b ? "" : "no-") + a),
            e[a] = b
        }
        return e
    }
    ,
    D(""),
    i = k = null,
    function(a, b) {
        function l(a, b) {
            var c = a.createElement("p")
              , d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>",
            d.insertBefore(c.lastChild, d.firstChild)
        }
        function m() {
            var a = s.elements;
            return typeof a == "string" ? a.split(" ") : a
        }
        function n(a) {
            var b = j[a[h]];
            return b || (b = {},
            i++,
            a[h] = i,
            j[i] = b),
            b
        }
        function o(a, c, d) {
            c || (c = b);
            if (k)
                return c.createElement(a);
            d || (d = n(c));
            var g;
            return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a),
            g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
        }
        function p(a, c) {
            a || (a = b);
            if (k)
                return a.createDocumentFragment();
            c = c || n(a);
            var d = c.frag.cloneNode()
              , e = 0
              , f = m()
              , g = f.length;
            for (; e < g; e++)
                d.createElement(f[e]);
            return d
        }
        function q(a, b) {
            b.cache || (b.cache = {},
            b.createElem = a.createElement,
            b.createFrag = a.createDocumentFragment,
            b.frag = b.createFrag()),
            a.createElement = function(c) {
                return s.shivMethods ? o(c, a, b) : b.createElem(c)
            }
            ,
            a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) {
                return b.createElem(a),
                b.frag.createElement(a),
                'c("' + a + '")'
            }) + ");return n}")(s, b.frag)
        }
        function r(a) {
            a || (a = b);
            var c = n(a);
            return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            k || q(a, c),
            a
        }
        var c = "3.7.0", d = a.html5 || {}, e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g, h = "_html5shiv", i = 0, j = {}, k;
        (function() {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>",
                g = "hidden"in a,
                k = a.childNodes.length == 1 || function() {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                }()
            } catch (c) {
                g = !0,
                k = !0
            }
        })();
        var s = {
            elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: c,
            shivCSS: d.shivCSS !== !1,
            supportsUnknownElements: k,
            shivMethods: d.shivMethods !== !1,
            type: "default",
            shivDocument: r,
            createElement: o,
            createDocumentFragment: p
        };
        a.html5 = s,
        r(b)
    }(this, b),
    e._version = d,
    e._prefixes = n,
    e._domPrefixes = q,
    e._cssomPrefixes = p,
    e.mq = z,
    e.hasEvent = A,
    e.testProp = function(a) {
        return H([a])
    }
    ,
    e.testAllProps = J,
    e.testStyles = y,
    g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " mdrnz-js mdrnz-" + v.join(" mdrnz-") : ""),
    e
}(this, this.document),
function(a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }
    function e(a) {
        return "string" == typeof a
    }
    function f() {}
    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }
    function h() {
        var a = p.shift();
        q = 1,
        a ? a.t ? m(function() {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(),
        h()) : q = 0
    }
    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1,
            !q && h(),
            l.onload = l.onreadystatechange = null,
            b)) {
                "img" != a && m(function() {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c])
                    y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }
        var j = j || B.errorTimeout
          , l = b.createElement(a)
          , o = 0
          , r = 0
          , u = {
            t: d,
            s: c,
            e: f,
            a: i,
            x: j
        };
        1 === y[c] && (r = 1,
        y[c] = []),
        "object" == a ? l.data = c : (l.src = c,
        l.type = a),
        l.width = l.height = "0",
        l.onerror = l.onload = l.onreadystatechange = function() {
            k.call(this, r)
        }
        ,
        p.splice(e, 0, u),
        "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n),
        m(k, j)) : y[c].push(l))
    }
    function j(a, b, c, d, f) {
        return q = 0,
        b = b || "j",
        e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a),
        1 == p.length && h()),
        this
    }
    function k() {
        var a = B;
        return a.loader = {
            load: j,
            i: 0
        },
        a
    }
    var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance"in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function(a) {
        return "[object Array]" == o.call(a)
    }
    , x = [], y = {}, z = {
        timeout: function(a, b) {
            return b.length && (a.timeout = b[0]),
            a
        }
    }, A, B;
    B = function(a) {
        function b(a) {
            var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {
                url: c,
                origUrl: c,
                prefixes: a
            }, e, f, g;
            for (f = 0; f < d; f++)
                g = a[f].split("="),
                (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++)
                c = x[f](c);
            return c
        }
        function g(a, e, f, g, h) {
            var i = b(a)
              , j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(),
            i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]),
            i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1,
            f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout),
            (d(e) || d(j)) && f.load(function() {
                k(),
                e && e(i.origUrl, h, g),
                j && j(i.origUrl, h, g),
                y[i.url] = 2
            })))
        }
        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a))
                        c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a),
                            l()
                        }
                        ),
                        g(a, j, b, 0, h);
                    else if (Object(a) === a)
                        for (n in m = function() {
                            var b = 0, c;
                            for (c in a)
                                a.hasOwnProperty(c) && b++;
                            return b
                        }(),
                        a)
                            a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a),
                                l()
                            }
                            : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b),
                                    l()
                                }
                            }(k[n])),
                            g(a[n], j, b, n, h))
                } else
                    !c && l()
            }
            var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
            c(h ? a.yep : a.nope, !!i),
            i && c(i)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a))
            g(a, 0, l, 0);
        else if (w(a))
            for (i = 0; i < a.length; i++)
                j = a[i],
                e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
        else
            Object(a) === a && h(a, l)
    }
    ,
    B.addPrefix = function(a, b) {
        z[a] = b
    }
    ,
    B.addFilter = function(a) {
        x.push(a)
    }
    ,
    B.errorTimeout = 1e4,
    null == b.readyState && b.addEventListener && (b.readyState = "loading",
    b.addEventListener("DOMContentLoaded", A = function() {
        b.removeEventListener("DOMContentLoaded", A, 0),
        b.readyState = "complete"
    }
    , 0)),
    a.yepnope = k(),
    a.yepnope.executeStack = h,
    a.yepnope.injectJs = function(a, c, d, e, i, j) {
        var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d)
            k.setAttribute(o, d[o]);
        c = j ? h : c || f,
        k.onreadystatechange = k.onload = function() {
            !l && g(k.readyState) && (l = 1,
            c(),
            k.onload = k.onreadystatechange = null)
        }
        ,
        m(function() {
            l || (l = 1,
            c(1))
        }, e),
        i ? k.onload() : n.parentNode.insertBefore(k, n)
    }
    ,
    a.yepnope.injectCss = function(a, c, d, e, g, i) {
        var e = b.createElement("link"), j, c = i ? h : c || f;
        e.href = a,
        e.rel = "stylesheet",
        e.type = "text/css";
        for (j in d)
            e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n),
        m(c, 0))
    }
}(this, document),
Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
}
;
!function(a) {
    var b = {
        isMsie: function() {
            return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : !1
        },
        isBlankString: function(a) {
            return !a || /^\s*$/.test(a)
        },
        escapeRegExChars: function(a) {
            return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        },
        isString: function(a) {
            return "string" == typeof a
        },
        isNumber: function(a) {
            return "number" == typeof a
        },
        isArray: a.isArray,
        isFunction: a.isFunction,
        isObject: a.isPlainObject,
        isUndefined: function(a) {
            return "undefined" == typeof a
        },
        bind: a.proxy,
        each: function(b, c) {
            function d(a, b) {
                return c(b, a)
            }
            a.each(b, d)
        },
        map: a.map,
        filter: a.grep,
        every: function(b, c) {
            var d = !0;
            return b ? (a.each(b, function(a, e) {
                return (d = c.call(null, e, a, b)) ? void 0 : !1
            }),
            !!d) : d
        },
        some: function(b, c) {
            var d = !1;
            return b ? (a.each(b, function(a, e) {
                return (d = c.call(null, e, a, b)) ? !1 : void 0
            }),
            !!d) : d
        },
        mixin: a.extend,
        getUniqueId: function() {
            var a = 0;
            return function() {
                return a++
            }
        }(),
        templatify: function(b) {
            function c() {
                return String(b)
            }
            return a.isFunction(b) ? b : c
        },
        defer: function(a) {
            setTimeout(a, 0)
        },
        debounce: function(a, b, c) {
            var d, e;
            return function() {
                var f, g, h = this, i = arguments;
                return f = function() {
                    d = null,
                    c || (e = a.apply(h, i))
                }
                ,
                g = c && !d,
                clearTimeout(d),
                d = setTimeout(f, b),
                g && (e = a.apply(h, i)),
                e
            }
        },
        throttle: function(a, b) {
            var c, d, e, f, g, h;
            return g = 0,
            h = function() {
                g = new Date,
                e = null,
                f = a.apply(c, d)
            }
            ,
            function() {
                var i = new Date
                  , j = b - (i - g);
                return c = this,
                d = arguments,
                0 >= j ? (clearTimeout(e),
                e = null,
                g = i,
                f = a.apply(c, d)) : e || (e = setTimeout(h, j)),
                f
            }
        },
        noop: function() {}
    }
      , c = "0.10.0"
      , d = function() {
        function a(a) {
            this.maxSize = a || 100,
            this.size = 0,
            this.hash = {},
            this.list = new c
        }
        function c() {
            this.head = this.tail = null
        }
        function d(a, b) {
            this.key = a,
            this.val = b,
            this.prev = this.next = null
        }
        return b.mixin(a.prototype, {
            set: function(a, b) {
                var c, e = this.list.tail;
                this.size >= this.maxSize && (this.list.remove(e),
                delete this.hash[e.key]),
                (c = this.hash[a]) ? (c.val = b,
                this.list.moveToFront(c)) : (c = new d(a,b),
                this.list.add(c),
                this.hash[a] = c,
                this.size++)
            },
            get: function(a) {
                var b = this.hash[a];
                return b ? (this.list.moveToFront(b),
                b.val) : void 0
            }
        }),
        b.mixin(c.prototype, {
            add: function(a) {
                this.head && (a.next = this.head,
                this.head.prev = a),
                this.head = a,
                this.tail = this.tail || a
            },
            remove: function(a) {
                a.prev ? a.prev.next = a.next : this.head = a.next,
                a.next ? a.next.prev = a.prev : this.tail = a.prev
            },
            moveToFront: function(a) {
                this.remove(a),
                this.add(a)
            }
        }),
        a
    }(this)
      , e = function() {
        function a(a) {
            this.prefix = ["__", a, "__"].join(""),
            this.ttlKey = "__ttl__",
            this.keyMatcher = new RegExp("^" + this.prefix)
        }
        function c() {
            return (new Date).getTime()
        }
        function d(a) {
            return JSON.stringify(b.isUndefined(a) ? null : a)
        }
        function e(a) {
            return JSON.parse(a)
        }
        var f, g;
        try {
            f = window.localStorage,
            f.setItem("~~~", "!"),
            f.removeItem("~~~")
        } catch (h) {
            f = null
        }
        return g = f && window.JSON ? {
            _prefix: function(a) {
                return this.prefix + a
            },
            _ttlKey: function(a) {
                return this._prefix(a) + this.ttlKey
            },
            get: function(a) {
                return this.isExpired(a) && this.remove(a),
                e(f.getItem(this._prefix(a)))
            },
            set: function(a, e, g) {
                return b.isNumber(g) ? f.setItem(this._ttlKey(a), d(c() + g)) : f.removeItem(this._ttlKey(a)),
                f.setItem(this._prefix(a), d(e))
            },
            remove: function(a) {
                return f.removeItem(this._ttlKey(a)),
                f.removeItem(this._prefix(a)),
                this
            },
            clear: function() {
                var a, b, c = [], d = f.length;
                for (a = 0; d > a; a++)
                    (b = f.key(a)).match(this.keyMatcher) && c.push(b.replace(this.keyMatcher, ""));
                for (a = c.length; a--; )
                    this.remove(c[a]);
                return this
            },
            isExpired: function(a) {
                var d = e(f.getItem(this._ttlKey(a)));
                return b.isNumber(d) && c() > d ? !0 : !1
            }
        } : {
            get: b.noop,
            set: b.noop,
            remove: b.noop,
            clear: b.noop,
            isExpired: b.noop
        },
        b.mixin(a.prototype, g),
        a
    }()
      , f = function() {
        function c(b) {
            b = b || {},
            this._send = b.send ? e(b.send) : a.ajax,
            this._get = b.rateLimiter ? b.rateLimiter(this._get) : this._get
        }
        function e(c) {
            return function(d, e) {
                function f(a) {
                    b.defer(function() {
                        h.resolve(a)
                    })
                }
                function g(a) {
                    b.defer(function() {
                        h.reject(a)
                    })
                }
                var h = a.Deferred();
                return c(d, e, f, g),
                h
            }
        }
        var f = 0
          , g = {}
          , h = 6
          , i = new d(10);
        return c.setMaxPendingRequests = function(a) {
            h = a
        }
        ,
        c.resetCache = function() {
            i = new d(10)
        }
        ,
        b.mixin(c.prototype, {
            _get: function(a, b, c) {
                function d(b) {
                    c && c(b),
                    i.set(a, b)
                }
                function e() {
                    f--,
                    delete g[a],
                    k.onDeckRequestArgs && (k._get.apply(k, k.onDeckRequestArgs),
                    k.onDeckRequestArgs = null)
                }
                var j, k = this;
                (j = g[a]) ? j.done(d) : h > f ? (f++,
                g[a] = this._send(a, b).done(d).always(e)) : this.onDeckRequestArgs = [].slice.call(arguments, 0)
            },
            get: function(a, c, d) {
                var e;
                return b.isFunction(c) && (d = c,
                c = {}),
                (e = i.get(a)) ? b.defer(function() {
                    d && d(e)
                }) : this._get(a, c, d),
                !!e
            }
        }),
        c
    }()
      , g = function() {
        function c(b) {
            b = b || {},
            b.datumTokenizer && b.queryTokenizer || a.error("datumTokenizer and queryTokenizer are both required"),
            this.datumTokenizer = b.datumTokenizer,
            this.queryTokenizer = b.queryTokenizer,
            this.datums = [],
            this.trie = e()
        }
        function d(a) {
            return a = b.filter(a, function(a) {
                return !!a
            }),
            a = b.map(a, function(a) {
                return a.toLowerCase()
            })
        }
        function e() {
            return {
                ids: [],
                children: {}
            }
        }
        function f(a) {
            for (var b = {}, c = [], d = 0; d < a.length; d++)
                b[a[d]] || (b[a[d]] = !0,
                c.push(a[d]));
            return c
        }
        function g(a, b) {
            function c(a, b) {
                return a - b
            }
            var d = 0
              , e = 0
              , f = [];
            for (a = a.sort(c),
            b = b.sort(c); d < a.length && e < b.length; )
                a[d] < b[e] ? d++ : a[d] > b[e] ? e++ : (f.push(a[d]),
                d++,
                e++);
            return f
        }
        return b.mixin(c.prototype, {
            bootstrap: function(a) {
                this.datums = a.datums,
                this.trie = a.trie
            },
            add: function(a) {
                var c = this;
                a = b.isArray(a) ? a : [a],
                b.each(a, function(a) {
                    var f, g;
                    f = c.datums.push(a) - 1,
                    g = d(c.datumTokenizer(a)),
                    b.each(g, function(a) {
                        var b, d, g;
                        for (b = c.trie,
                        d = a.split(""); g = d.shift(); )
                            b = b.children[g] || (b.children[g] = e()),
                            b.ids.push(f)
                    })
                })
            },
            get: function(a) {
                var c, e, h = this;
                return c = d(this.queryTokenizer(a)),
                b.each(c, function(a) {
                    var b, c, d, f;
                    if (e && 0 === e.length)
                        return !1;
                    for (b = h.trie,
                    c = a.split(""); b && (d = c.shift()); )
                        b = b.children[d];
                    return b && 0 === c.length ? (f = b.ids.slice(0),
                    e = e ? g(e, f) : f,
                    void 0) : (e = [],
                    !1)
                }),
                e ? b.map(f(e), function(a) {
                    return h.datums[a]
                }) : []
            },
            serialize: function() {
                return {
                    datums: this.datums,
                    trie: this.trie
                }
            }
        }),
        c
    }()
      , h = function() {
        function d(a) {
            return a.local || null
        }
        function e(d) {
            var e, f;
            return f = {
                url: null,
                thumbprint: "",
                ttl: 864e5,
                filter: null,
                ajax: {}
            },
            (e = d.prefetch || null) && (e = b.isString(e) ? {
                url: e
            } : e,
            e = b.mixin(f, e),
            e.thumbprint = c + e.thumbprint,
            e.ajax.method = e.ajax.method || "get",
            e.ajax.dataType = e.ajax.dataType || "json",
            !e.url && a.error("prefetch requires url to be set")),
            e
        }
        function f(c) {
            function d(a) {
                return function(c) {
                    return b.debounce(c, a)
                }
            }
            function e(a) {
                return function(c) {
                    return b.throttle(c, a)
                }
            }
            var f, g;
            return g = {
                url: null,
                wildcard: "%QUERY",
                replace: null,
                rateLimitBy: "debounce",
                rateLimitWait: 300,
                send: null,
                filter: null,
                ajax: {}
            },
            (f = c.remote || null) && (f = b.isString(f) ? {
                url: f
            } : f,
            f = b.mixin(g, f),
            f.rateLimiter = /^throttle$/i.test(f.rateLimitBy) ? e(f.rateLimitWait) : d(f.rateLimitWait),
            f.ajax.method = f.ajax.method || "get",
            f.ajax.dataType = f.ajax.dataType || "json",
            delete f.rateLimitBy,
            delete f.rateLimitWait,
            !f.url && a.error("remote requires url to be set")),
            f
        }
        return {
            local: d,
            prefetch: e,
            remote: f
        }
    }()
      , i = (window.Bloodhound = function() {
        function c(b) {
            b && (b.local || b.prefetch || b.remote) || a.error("one of local, prefetch, or remote is required"),
            this.limit = b.limit || 5,
            this.sorter = b.sorter || d,
            this.dupDetector = b.dupDetector || i,
            this.local = h.local(b),
            this.prefetch = h.prefetch(b),
            this.remote = h.remote(b),
            this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null,
            this.index = new g({
                datumTokenizer: b.datumTokenizer,
                queryTokenizer: b.queryTokenizer
            }),
            this.storage = this.cacheKey ? new e(this.cacheKey) : null
        }
        function d() {
            return 0
        }
        function i() {
            return !1
        }
        var j;
        return j = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        },
        c.tokenizers = {
            whitespace: function(a) {
                return a.split(/\s+/)
            },
            nonword: function(a) {
                return a.split(/\W+/)
            }
        },
        b.mixin(c.prototype, {
            _loadPrefetch: function(b) {
                function c(a) {
                    var c;
                    c = b.filter ? b.filter(a) : a,
                    f.add(c),
                    f._saveToStorage(f.index.serialize(), b.thumbprint, b.ttl)
                }
                var d, e, f = this;
                return (d = this._readFromStorage(b.thumbprint)) ? (this.index.bootstrap(d),
                e = a.Deferred().resolve()) : e = a.ajax(b.url, b.ajax).done(c),
                e
            },
            _getFromRemote: function(a, b) {
                function c(a) {
                    var c = f.remote.filter ? f.remote.filter(a) : a;
                    b(c)
                }
                var d, e, f = this;
                return a = a || "",
                e = encodeURIComponent(a),
                d = this.remote.replace ? this.remote.replace(this.remote.url, a) : this.remote.url.replace(this.remote.wildcard, e),
                this.transport.get(d, this.remote.ajax, c)
            },
            _saveToStorage: function(a, b, c) {
                this.storage && (this.storage.set(j.data, a, c),
                this.storage.set(j.protocol, location.protocol, c),
                this.storage.set(j.thumbprint, b, c))
            },
            _readFromStorage: function(a) {
                var b = {};
                return this.storage && (b.data = this.storage.get(j.data),
                b.protocol = this.storage.get(j.protocol),
                b.thumbprint = this.storage.get(j.thumbprint)),
                isExpired = b.thumbprint !== a || b.protocol !== location.protocol,
                b.data && !isExpired ? b.data : null
            },
            initialize: function() {
                function b() {
                    d.add(d.local)
                }
                var c, d = this;
                return c = this.prefetch ? this._loadPrefetch(this.prefetch) : a.Deferred().resolve(),
                this.local && c.done(b),
                this.transport = this.remote ? new f(this.remote) : null,
                this.initialize = function() {
                    return c.promise()
                }
                ,
                c.promise()
            },
            add: function(a) {
                this.index.add(a)
            },
            get: function(a, c) {
                function d(a) {
                    var d = e.slice(0);
                    b.each(a, function(a) {
                        var c;
                        return c = b.some(d, function(b) {
                            return f.dupDetector(a, b)
                        }),
                        !c && d.push(a),
                        d.length < f.limit
                    }),
                    c && c(d.sort(f.sorter))
                }
                var e, f = this, g = !1;
                e = this.index.get(a).sort(this.sorter).slice(0, this.limit),
                e.length < this.limit && this.transport && (g = this._getFromRemote(a, d)),
                !g && c && c(e)
            },
            ttAdapter: function() {
                return b.bind(this.get, this)
            }
        }),
        c
    }(),
    {
        wrapper: '<span class="twitter-typeahead"></span>',
        dropdown: '<span class="tt-dropdown-menu"></span>',
        dataset: '<div class="tt-dataset-%CLASS%"></div>',
        suggestions: '<span class="tt-suggestions"></span>',
        suggestion: '<div class="tt-suggestion">%BODY%</div>'
    })
      , j = {
        wrapper: {
            position: "relative",
            display: "inline-block"
        },
        hint: {
            position: "absolute",
            top: "0",
            left: "0",
            borderColor: "transparent",
            boxShadow: "none"
        },
        input: {
            position: "relative",
            verticalAlign: "top",
            backgroundColor: "transparent"
        },
        inputWithNoHint: {
            position: "relative",
            verticalAlign: "top"
        },
        dropdown: {
            position: "absolute",
            top: "100%",
            left: "0",
            zIndex: "100",
            display: "none"
        },
        suggestions: {
            display: "block"
        },
        suggestion: {
            whiteSpace: "nowrap",
            cursor: "pointer"
        },
        suggestionChild: {
            whiteSpace: "normal"
        },
        ltr: {
            left: "0",
            right: "auto"
        },
        rtl: {
            left: "auto",
            right: " 0"
        }
    };
    b.isMsie() && b.mixin(j.input, {
        backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
    }),
    b.isMsie() && b.isMsie() <= 7 && b.mixin(j.input, {
        marginTop: "-1px"
    });
    var k = function() {
        function c(b) {
            b && b.el || a.error("EventBus initialized without el"),
            this.$el = a(b.el)
        }
        var d = "typeahead:";
        return b.mixin(c.prototype, {
            trigger: function(a) {
                var b = [].slice.call(arguments, 1);
                this.$el.trigger(d + a, b)
            }
        }),
        c
    }()
      , l = function() {
        function a(a, b, c, d) {
            var e;
            if (!c)
                return this;
            for (b = b.split(i),
            c = d ? h(c, d) : c,
            this._callbacks = this._callbacks || {}; e = b.shift(); )
                this._callbacks[e] = this._callbacks[e] || {
                    sync: [],
                    async: []
                },
                this._callbacks[e][a].push(c);
            return this
        }
        function b(b, c, d) {
            return a.call(this, "async", b, c, d)
        }
        function c(b, c, d) {
            return a.call(this, "sync", b, c, d)
        }
        function d(a) {
            var b;
            if (!this._callbacks)
                return this;
            for (a = a.split(i); b = a.shift(); )
                delete this._callbacks[b];
            return this
        }
        function e(a) {
            var b, c, d, e, g;
            if (!this._callbacks)
                return this;
            for (a = a.split(i),
            d = [].slice.call(arguments, 1); (b = a.shift()) && (c = this._callbacks[b]); )
                e = f(c.sync, this, [b].concat(d)),
                g = f(c.async, this, [b].concat(d)),
                e() && j(g);
            return this
        }
        function f(a, b, c) {
            function d() {
                for (var d, e = 0; !d && e < a.length; e += 1)
                    d = a[e].apply(b, c) === !1;
                return !d
            }
            return d
        }
        function g() {
            var a;
            return a = window.setImmediate ? function(a) {
                setImmediate(function() {
                    a()
                })
            }
            : function(a) {
                setTimeout(function() {
                    a()
                }, 0)
            }
        }
        function h(a, b) {
            return a.bind ? a.bind(b) : function() {
                a.apply(b, [].slice.call(arguments, 0))
            }
        }
        var i = /\s+/
          , j = g();
        return {
            onSync: c,
            onAsync: b,
            off: d,
            trigger: e
        }
    }()
      , m = function(a) {
        function c(a, c, d) {
            for (var e, f = [], g = 0; g < a.length; g++)
                f.push(b.escapeRegExChars(a[g]));
            return e = d ? "\\b(" + f.join("|") + ")\\b" : "(" + f.join("|") + ")",
            c ? new RegExp(e) : new RegExp(e,"i")
        }
        var d = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: !1,
            caseSensitive: !1
        };
        return function(e) {
            function f(b) {
                var c, d;
                return (c = h.exec(b.data)) && (wrapperNode = a.createElement(e.tagName),
                e.className && (wrapperNode.className = e.className),
                d = b.splitText(c.index),
                d.splitText(c[0].length),
                wrapperNode.appendChild(d.cloneNode(!0)),
                b.parentNode.replaceChild(wrapperNode, d)),
                !!c
            }
            function g(a, b) {
                for (var c, d = 3, e = 0; e < a.childNodes.length; e++)
                    c = a.childNodes[e],
                    c.nodeType === d ? e += b(c) ? 1 : 0 : g(c, b)
            }
            var h;
            e = b.mixin({}, d, e),
            e.node && e.pattern && (e.pattern = b.isArray(e.pattern) ? e.pattern : [e.pattern],
            h = c(e.pattern, e.caseSensitive, e.wordsOnly),
            g(e.node, f))
        }
    }(window.document)
      , n = function() {
        function c(c) {
            var e, f, h, i, j = this;
            c = c || {},
            c.input || a.error("input is missing"),
            e = b.bind(this._onBlur, this),
            f = b.bind(this._onFocus, this),
            h = b.bind(this._onKeydown, this),
            i = b.bind(this._onInput, this),
            this.$hint = a(c.hint),
            this.$input = a(c.input).on("blur.tt", e).on("focus.tt", f).on("keydown.tt", h),
            0 === this.$hint.length && (this.setHintValue = this.getHintValue = this.clearHint = b.noop),
            b.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function(a) {
                g[a.which || a.keyCode] || b.defer(b.bind(j._onInput, j, a))
            }) : this.$input.on("input.tt", i),
            this.query = this.$input.val(),
            this.$overflowHelper = d(this.$input)
        }
        function d(b) {
            return a('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "nowrap",
                fontFamily: b.css("font-family"),
                fontSize: b.css("font-size"),
                fontStyle: b.css("font-style"),
                fontVariant: b.css("font-variant"),
                fontWeight: b.css("font-weight"),
                wordSpacing: b.css("word-spacing"),
                letterSpacing: b.css("letter-spacing"),
                textIndent: b.css("text-indent"),
                textRendering: b.css("text-rendering"),
                textTransform: b.css("text-transform")
            }).insertAfter(b)
        }
        function e(a, b) {
            return c.normalizeQuery(a) === c.normalizeQuery(b)
        }
        function f(a) {
            return a.altKey || a.ctrlKey || a.metaKey || a.shiftKey
        }
        var g;
        return g = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        },
        c.normalizeQuery = function(a) {
            return (a || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
        }
        ,
        b.mixin(c.prototype, l, {
            _onBlur: function() {
                this.resetInputValue(),
                this.trigger("blurred")
            },
            _onFocus: function() {
                this.trigger("focused")
            },
            _onKeydown: function(a) {
                var b = g[a.which || a.keyCode];
                this._managePreventDefault(b, a),
                b && this._shouldTrigger(b, a) && this.trigger(b + "Keyed", a)
            },
            _onInput: function() {
                this._checkInputValue()
            },
            _managePreventDefault: function(a, b) {
                var c, d, e;
                switch (a) {
                case "tab":
                    d = this.getHintValue(),
                    e = this.getInputValue(),
                    c = d && d !== e && !f(b);
                    break;
                case "up":
                case "down":
                    c = !f(b);
                    break;
                default:
                    c = !1
                }
                c && b.preventDefault()
            },
            _shouldTrigger: function(a, b) {
                var c;
                switch (a) {
                case "tab":
                    c = !f(b);
                    break;
                default:
                    c = !0
                }
                return c
            },
            _checkInputValue: function() {
                var a, b, c;
                a = this.getInputValue(),
                b = e(a, this.query),
                c = b ? this.query.length !== a.length : !1,
                b ? c && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query = a)
            },
            focus: function() {
                this.$input.focus()
            },
            blur: function() {
                this.$input.blur()
            },
            getQuery: function() {
                return this.query
            },
            setQuery: function(a) {
                this.query = a
            },
            getInputValue: function() {
                return this.$input.val()
            },
            setInputValue: function(a, b) {
                this.$input.val(a),
                !b && this._checkInputValue()
            },
            getHintValue: function() {
                return this.$hint.val()
            },
            setHintValue: function(a) {
                this.$hint.val(a)
            },
            resetInputValue: function() {
                this.$input.val(this.query)
            },
            clearHint: function() {
                this.$hint.val("")
            },
            getLanguageDirection: function() {
                return (this.$input.css("direction") || "ltr").toLowerCase()
            },
            hasOverflow: function() {
                var a = this.$input.width() - 2;
                return this.$overflowHelper.text(this.getInputValue()),
                this.$overflowHelper.width() >= a
            },
            isCursorAtEnd: function() {
                var a, c, d;
                return a = this.$input.val().length,
                c = this.$input[0].selectionStart,
                b.isNumber(c) ? c === a : document.selection ? (d = document.selection.createRange(),
                d.moveStart("character", -a),
                a === d.text.length) : !0
            },
            destroy: function() {
                this.$hint.off(".tt"),
                this.$input.off(".tt"),
                this.$hint = this.$input = this.$overflowHelper = null
            }
        }),
        c
    }()
      , o = function() {
        function c(c) {
            c = c || {},
            c.templates = c.templates || {},
            c.source || a.error("missing source"),
            this.query = null,
            this.highlight = !!c.highlight,
            this.name = c.name || b.getUniqueId(),
            this.source = c.source,
            this.valueKey = c.displayKey || "value",
            this.templates = d(c.templates, this.valueKey),
            this.$el = a(i.dataset.replace("%CLASS%", this.name))
        }
        function d(a, c) {
            function d(a) {
                return "<p>" + a[c] + "</p>"
            }
            return {
                empty: a.empty && b.templatify(a.empty),
                header: a.header && b.templatify(a.header),
                footer: a.footer && b.templatify(a.footer),
                suggestion: a.suggestion || d
            }
        }
        var e = "ttDataset"
          , f = "ttValue"
          , g = "ttDatum";
        return c.extractDatasetName = function(b) {
            return a(b).data(e)
        }
        ,
        c.extractValue = function(b) {
            return a(b).data(f)
        }
        ,
        c.extractDatum = function(b) {
            return a(b).data(g)
        }
        ,
        b.mixin(c.prototype, l, {
            _render: function(c, d) {
                function h() {
                    return p.templates.empty({
                        query: c
                    })
                }
                function k() {
                    function h(b) {
                        var c, d, h;
                        return d = p.templates.suggestion(b),
                        h = i.suggestion.replace("%BODY%", d),
                        c = a(h).data(e, p.name).data(f, b[p.valueKey]).data(g, b),
                        c.children().each(function() {
                            a(this).css(j.suggestionChild)
                        }),
                        c
                    }
                    var k;
                    return k = a(i.suggestions).css(j.suggestions).append(b.map(d, h)),
                    p.highlight && m({
                        node: k[0],
                        pattern: c
                    }),
                    k
                }
                function l() {
                    return p.templates.header({
                        query: c,
                        isEmpty: !o
                    })
                }
                function n() {
                    return p.templates.footer({
                        query: c,
                        isEmpty: !o
                    })
                }
                if (this.$el) {
                    var o, p = this;
                    this.$el.empty(),
                    o = d && d.length,
                    !o && this.templates.empty ? this.$el.html(h()).prepend(p.templates.header ? l() : null).append(p.templates.footer ? n() : null) : o && this.$el.html(k()).prepend(p.templates.header ? l() : null).append(p.templates.footer ? n() : null),
                    this.trigger("rendered")
                }
            },
            getRoot: function() {
                return this.$el
            },
            update: function(a) {
                function b(b) {
                    a === c.query && c._render(a, b)
                }
                var c = this;
                this.query = a,
                this.source(a, b)
            },
            clear: function() {
                this._render(this.query || "")
            },
            isEmpty: function() {
                return this.$el.is(":empty")
            },
            destroy: function() {
                this.$el = null
            }
        }),
        c
    }()
      , p = function() {
        function c(c) {
            var e, f, g, h, i, j = this;
            c = c || {},
            c.menu || a.error("menu is required"),
            this.isOpen = !1,
            this.isEmpty = !0,
            this.isMouseOverDropdown = !1,
            this.datasets = b.map(c.datasets, d),
            e = b.bind(this._onMouseEnter, this),
            f = b.bind(this._onMouseLeave, this),
            g = b.bind(this._onSuggestionClick, this),
            h = b.bind(this._onSuggestionMouseEnter, this),
            i = b.bind(this._onSuggestionMouseLeave, this),
            this.$menu = a(c.menu).on("mouseenter.tt", e).on("mouseleave.tt", f).on("click.tt", ".tt-suggestion", g).on("mouseenter.tt", ".tt-suggestion", h).on("mouseleave.tt", ".tt-suggestion", i),
            b.each(this.datasets, function(a) {
                j.$menu.append(a.getRoot()),
                a.onSync("rendered", j._onRendered, j)
            })
        }
        function d(a) {
            return new o(a)
        }
        return b.mixin(c.prototype, l, {
            _onMouseEnter: function() {
                this.isMouseOverDropdown = !0
            },
            _onMouseLeave: function() {
                this.isMouseOverDropdown = !1
            },
            _onSuggestionClick: function(b) {
                this.trigger("suggestionClicked", a(b.currentTarget))
            },
            _onSuggestionMouseEnter: function(b) {
                this._removeCursor(),
                this._setCursor(a(b.currentTarget), !0)
            },
            _onSuggestionMouseLeave: function() {
                this._removeCursor()
            },
            _onRendered: function() {
                function a(a) {
                    return a.isEmpty()
                }
                this.isEmpty = b.every(this.datasets, a),
                this.isEmpty ? this._hide() : this.isOpen && this._show(),
                this.trigger("datasetRendered")
            },
            _hide: function() {
                this.$menu.hide()
            },
            _show: function() {
                this.$menu.css("display", "block")
            },
            _getSuggestions: function() {
                return this.$menu.find(".tt-suggestion")
            },
            _getCursor: function() {
                return this.$menu.find(".tt-cursor").first()
            },
            _setCursor: function(a, b) {
                a.first().addClass("tt-cursor"),
                !b && this.trigger("cursorMoved")
            },
            _removeCursor: function() {
                this._getCursor().removeClass("tt-cursor")
            },
            _moveCursor: function(a) {
                var b, c, d, e;
                if (this.isOpen) {
                    if (c = this._getCursor(),
                    b = this._getSuggestions(),
                    this._removeCursor(),
                    d = b.index(c) + a,
                    d = (d + 1) % (b.length + 1) - 1,
                    -1 === d)
                        return this.trigger("cursorRemoved"),
                        void 0;
                    -1 > d && (d = b.length - 1),
                    this._setCursor(e = b.eq(d)),
                    this._ensureVisible(e)
                }
            },
            _ensureVisible: function(a) {
                var b, c, d, e;
                b = a.position().top,
                c = b + a.outerHeight(!0),
                d = this.$menu.scrollTop(),
                e = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10),
                0 > b ? this.$menu.scrollTop(d + b) : c > e && this.$menu.scrollTop(d + (c - e))
            },
            close: function() {
                this.isOpen && (this.isOpen = this.isMouseOverDropdown = !1,
                this._removeCursor(),
                this._hide(),
                this.trigger("closed"))
            },
            open: function() {
                this.isOpen || (this.isOpen = !0,
                !this.isEmpty && this._show(),
                this.trigger("opened"))
            },
            setLanguageDirection: function(a) {
                this.$menu.css("ltr" === a ? j.ltr : j.rtl)
            },
            moveCursorUp: function() {
                this._moveCursor(-1)
            },
            moveCursorDown: function() {
                this._moveCursor(1)
            },
            getDatumForSuggestion: function(a) {
                var b = null;
                return a.length && (b = {
                    raw: o.extractDatum(a),
                    value: o.extractValue(a),
                    datasetName: o.extractDatasetName(a)
                }),
                b
            },
            getDatumForCursor: function() {
                return this.getDatumForSuggestion(this._getCursor().first())
            },
            getDatumForTopSuggestion: function() {
                return this.getDatumForSuggestion(this._getSuggestions().first())
            },
            update: function(a) {
                function c(b) {
                    b.update(a)
                }
                b.each(this.datasets, c)
            },
            empty: function() {
                function a(a) {
                    a.clear()
                }
                b.each(this.datasets, a)
            },
            isVisible: function() {
                return this.isOpen && !this.isEmpty
            },
            destroy: function() {
                function a(a) {
                    a.destroy()
                }
                this.$menu.off(".tt"),
                this.$menu = null,
                b.each(this.datasets, a)
            }
        }),
        c
    }()
      , q = function() {
        function c(c) {
            var e, f, g;
            c = c || {},
            c.input || a.error("missing input"),
            this.autoselect = !!c.autoselect,
            this.minLength = b.isNumber(c.minLength) ? c.minLength : 1,
            this.$node = d(c.input, c.withHint),
            e = this.$node.find(".tt-dropdown-menu"),
            f = this.$node.find(".tt-input"),
            g = this.$node.find(".tt-hint"),
            this.eventBus = c.eventBus || new k({
                el: f
            }),
            this.dropdown = new p({
                menu: e,
                datasets: c.datasets
            }).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this),
            this.input = new n({
                input: f,
                hint: g
            }).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this),
            e.on("mousedown.tt", function(a) {
                b.isMsie() && b.isMsie() < 9 && (f[0].onbeforedeactivate = function() {
                    window.event.returnValue = !1,
                    f[0].onbeforedeactivate = null
                }
                ),
                a.preventDefault()
            })
        }
        function d(b, c) {
            var d, f, h, k;
            d = a(b),
            f = a(i.wrapper).css(j.wrapper),
            h = a(i.dropdown).css(j.dropdown),
            k = d.clone().css(j.hint).css(e(d)),
            k.removeData().addClass("tt-hint").removeAttr("id name placeholder").prop("disabled", !0).attr({
                autocomplete: "off",
                spellcheck: "false"
            }),
            d.data(g, {
                dir: d.attr("dir"),
                autocomplete: d.attr("autocomplete"),
                spellcheck: d.attr("spellcheck"),
                style: d.attr("style")
            }),
            d.addClass("tt-input").attr({
                autocomplete: "off",
                spellcheck: !1
            }).css(c ? j.input : j.inputWithNoHint);
            try {
                !d.attr("dir") && d.attr("dir", "auto")
            } catch (l) {}
            return d.wrap(f).parent().prepend(c ? k : null).append(h)
        }
        function e(a) {
            return {
                backgroundAttachment: a.css("background-attachment"),
                backgroundClip: a.css("background-clip"),
                backgroundColor: a.css("background-color"),
                backgroundImage: a.css("background-image"),
                backgroundOrigin: a.css("background-origin"),
                backgroundPosition: a.css("background-position"),
                backgroundRepeat: a.css("background-repeat"),
                backgroundSize: a.css("background-size")
            }
        }
        function f(a) {
            var c = a.find(".tt-input");
            b.each(c.data(g), function(a, d) {
                b.isUndefined(a) ? c.removeAttr(d) : c.attr(d, a)
            }),
            c.detach().removeData(g).removeClass("tt-input").insertAfter(a),
            a.remove()
        }
        var g = "ttAttrs";
        return b.mixin(c.prototype, {
            _onSuggestionClicked: function(a, b) {
                var c;
                (c = this.dropdown.getDatumForSuggestion(b)) && this._select(c)
            },
            _onCursorMoved: function() {
                var a = this.dropdown.getDatumForCursor();
                this.input.clearHint(),
                this.input.setInputValue(a.value, !0),
                this.eventBus.trigger("cursorchanged", a.raw, a.datasetName)
            },
            _onCursorRemoved: function() {
                this.input.resetInputValue(),
                this._updateHint()
            },
            _onDatasetRendered: function() {
                this._updateHint()
            },
            _onOpened: function() {
                this._updateHint(),
                this.eventBus.trigger("opened")
            },
            _onClosed: function() {
                this.input.clearHint(),
                this.eventBus.trigger("closed")
            },
            _onFocused: function() {
                this.dropdown.open()
            },
            _onBlurred: function() {
                !this.dropdown.isMouseOverDropdown && this.dropdown.close()
            },
            _onEnterKeyed: function(a, b) {
                var c, d;
                c = this.dropdown.getDatumForCursor(),
                d = this.dropdown.getDatumForTopSuggestion(),
                c ? (this._select(c),
                b.preventDefault()) : this.autoselect && d && (this._select(d),
                b.preventDefault())
            },
            _onTabKeyed: function(a, b) {
                var c;
                (c = this.dropdown.getDatumForCursor()) ? (this._select(c),
                b.preventDefault()) : this._autocomplete()
            },
            _onEscKeyed: function() {
                this.dropdown.close(),
                this.input.resetInputValue()
            },
            _onUpKeyed: function() {
                var a = this.input.getQuery();
                !this.dropdown.isOpen && a.length >= this.minLength && this.dropdown.update(a),
                this.dropdown.open(),
                this.dropdown.moveCursorUp()
            },
            _onDownKeyed: function() {
                var a = this.input.getQuery();
                !this.dropdown.isOpen && a.length >= this.minLength && this.dropdown.update(a),
                this.dropdown.open(),
                this.dropdown.moveCursorDown()
            },
            _onLeftKeyed: function() {
                "rtl" === this.dir && this._autocomplete()
            },
            _onRightKeyed: function() {
                "ltr" === this.dir && this._autocomplete()
            },
            _onQueryChanged: function(a, b) {
                this.input.clearHint(),
                this.dropdown.empty(),
                b.length >= this.minLength && this.dropdown.update(b),
                this.dropdown.open(),
                this._setLanguageDirection()
            },
            _onWhitespaceChanged: function() {
                this._updateHint(),
                this.dropdown.open()
            },
            _setLanguageDirection: function() {
                var a;
                this.dir !== (a = this.input.getLanguageDirection()) && (this.dir = a,
                this.$node.css("direction", a),
                this.dropdown.setLanguageDirection(a))
            },
            _updateHint: function() {
                var a, c, d, e, f, g;
                a = this.dropdown.getDatumForTopSuggestion(),
                a && this.dropdown.isVisible() && !this.input.hasOverflow() && (c = this.input.getInputValue(),
                d = n.normalizeQuery(c),
                e = b.escapeRegExChars(d),
                f = new RegExp("^(?:" + e + ")(.*$)","i"),
                g = f.exec(a.value),
                this.input.setHintValue(c + (g ? g[1] : "")))
            },
            _autocomplete: function() {
                var a, b, c;
                a = this.input.getHintValue(),
                b = this.input.getQuery(),
                a && b !== a && this.input.isCursorAtEnd() && (c = this.dropdown.getDatumForTopSuggestion(),
                c && this.input.setInputValue(c.value),
                this.eventBus.trigger("autocompleted", c.raw, c.datasetName))
            },
            _select: function(a) {
                this.input.clearHint(),
                this.input.setQuery(a.value),
                this.input.setInputValue(a.value, !0),
                this.dropdown.empty(),
                this._setLanguageDirection(),
                b.defer(b.bind(this.dropdown.close, this.dropdown)),
                this.eventBus.trigger("selected", a.raw, a.datasetName)
            },
            open: function() {
                this.dropdown.open()
            },
            close: function() {
                this.dropdown.close()
            },
            getQuery: function() {
                return this.input.getQuery()
            },
            setQuery: function(a) {
                this.input.setInputValue(a)
            },
            destroy: function() {
                this.input.destroy(),
                this.dropdown.destroy(),
                f(this.$node),
                this.$node = null
            }
        }),
        c
    }();
    !function() {
        var c, d;
        c = "ttTypeahead",
        d = {
            initialize: function(d) {
                function e() {
                    var e, g, h = a(this);
                    b.each(f, function(a) {
                        a.highlight = !!d.highlight
                    }),
                    g = new q({
                        input: h,
                        eventBus: e = new k({
                            el: h
                        }),
                        withHint: b.isUndefined(d.hint) ? !0 : !!d.hint,
                        minLength: d.minLength,
                        autoselect: d.autoselect,
                        datasets: f
                    }),
                    h.data(c, g)
                }
                var f = [].slice.call(arguments, 1);
                return d = d || {},
                this.each(e)
            },
            open: function() {
                function b() {
                    var b, d = a(this);
                    (b = d.data(c)) && b.open()
                }
                return this.each(b)
            },
            close: function() {
                function b() {
                    var b, d = a(this);
                    (b = d.data(c)) && b.close()
                }
                return this.each(b)
            },
            val: function(d) {
                function e() {
                    var b, e = a(this);
                    (b = e.data(c)) && b.setQuery(d)
                }
                function f() {
                    var b, d, e = a(this);
                    return (b = e.data(c)) && (d = b.getQuery()),
                    d
                }
                return b.isString(d) ? this.each(e) : this.map(f).get()
            },
            destroy: function() {
                function b() {
                    var b, d = a(this);
                    (b = d.data(c)) && (b.destroy(),
                    d.removeData(c))
                }
                return this.each(b)
            }
        },
        jQuery.fn.typeahead = function(a) {
            return d[a] ? d[a].apply(this, [].slice.call(arguments, 1)) : d.initialize.apply(this, arguments)
        }
    }()
}(window.jQuery);
!function(t, e) {
    function n(t, e, n) {
        var r = t.children()
          , o = !1;
        t.empty();
        for (var i = 0, d = r.length; d > i; i++) {
            var l = r.eq(i);
            if (t.append(l),
            n && t.append(n),
            a(t, e)) {
                l.remove(),
                o = !0;
                break
            }
            n && n.detach()
        }
        return o
    }
    function r(e, n, i, d, l) {
        var s = !1
          , c = "a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style"
          , u = "script, .dotdotdot-keep";
        return e.contents().detach().each(function() {
            var h = this
              , f = t(h);
            if ("undefined" == typeof h)
                return !0;
            if (f.is(u))
                e.append(f);
            else {
                if (s)
                    return !0;
                e.append(f),
                !l || f.is(d.after) || f.find(d.after).length || e[e.is(c) ? "after" : "append"](l),
                a(i, d) && (s = 3 == h.nodeType ? o(f, n, i, d, l) : r(f, n, i, d, l),
                s || (f.detach(),
                s = !0)),
                s || l && l.detach()
            }
        }),
        n.addClass("is-truncated"),
        s
    }
    function o(e, n, r, o, d) {
        var c = e[0];
        if (!c)
            return !1;
        var h = s(c)
          , f = -1 !== h.indexOf(" ") ? " " : "　"
          , p = "letter" == o.wrap ? "" : f
          , g = h.split(p)
          , v = -1
          , w = -1
          , b = 0
          , y = g.length - 1;
        for (o.fallbackToLetter && 0 == b && 0 == y && (p = "",
        g = h.split(p),
        y = g.length - 1); y >= b && (0 != b || 0 != y); ) {
            var m = Math.floor((b + y) / 2);
            if (m == w)
                break;
            w = m,
            l(c, g.slice(0, w + 1).join(p) + o.ellipsis),
            r.children().each(function() {
                t(this).toggle().toggle()
            }),
            a(r, o) ? (y = w,
            o.fallbackToLetter && 0 == b && 0 == y && (p = "",
            g = g[0].split(p),
            v = -1,
            w = -1,
            b = 0,
            y = g.length - 1)) : (v = w,
            b = w)
        }
        if (-1 == v || 1 == g.length && 0 == g[0].length) {
            var x = e.parent();
            e.detach();
            var T = d && d.closest(x).length ? d.length : 0;
            x.contents().length > T ? c = u(x.contents().eq(-1 - T), n) : (c = u(x, n, !0),
            T || x.detach()),
            c && (h = i(s(c), o),
            l(c, h),
            T && d && t(c).parent().append(d))
        } else
            h = i(g.slice(0, v + 1).join(p), o),
            l(c, h);
        return !0
    }
    function a(t, e) {
        return t.innerHeight() > e.maxHeight
    }
    function i(e, n) {
        for (; t.inArray(e.slice(-1), n.lastCharacter.remove) > -1; )
            e = e.slice(0, -1);
        return t.inArray(e.slice(-1), n.lastCharacter.noEllipsis) < 0 && (e += n.ellipsis),
        e
    }
    function d(t) {
        return {
            width: t.innerWidth(),
            height: t.innerHeight()
        }
    }
    function l(t, e) {
        t.innerText ? t.innerText = e : t.nodeValue ? t.nodeValue = e : t.textContent && (t.textContent = e)
    }
    function s(t) {
        return t.innerText ? t.innerText : t.nodeValue ? t.nodeValue : t.textContent ? t.textContent : ""
    }
    function c(t) {
        do
            t = t.previousSibling;
        while (t && 1 !== t.nodeType && 3 !== t.nodeType);return t
    }
    function u(e, n, r) {
        var o, a = e && e[0];
        if (a) {
            if (!r) {
                if (3 === a.nodeType)
                    return a;
                if (t.trim(e.text()))
                    return u(e.contents().last(), n)
            }
            for (o = c(a); !o; ) {
                if (e = e.parent(),
                e.is(n) || !e.length)
                    return !1;
                o = c(e[0])
            }
            if (o)
                return u(t(o), n)
        }
        return !1
    }
    function h(e, n) {
        return e ? "string" == typeof e ? (e = t(e, n),
        e.length ? e : !1) : e.jquery ? e : !1 : !1
    }
    function f(t) {
        for (var e = t.innerHeight(), n = ["paddingTop", "paddingBottom"], r = 0, o = n.length; o > r; r++) {
            var a = parseInt(t.css(n[r]), 10);
            isNaN(a) && (a = 0),
            e -= a
        }
        return e
    }
    if (!t.fn.dotdotdot) {
        t.fn.dotdotdot = function(e) {
            if (0 == this.length)
                return t.fn.dotdotdot.debug('No element found for "' + this.selector + '".'),
                this;
            if (this.length > 1)
                return this.each(function() {
                    t(this).dotdotdot(e)
                });
            var o = this;
            o.data("dotdotdot") && o.trigger("destroy.dot"),
            o.data("dotdotdot-style", o.attr("style") || ""),
            o.css("word-wrap", "break-word"),
            "nowrap" === o.css("white-space") && o.css("white-space", "normal"),
            o.bind_events = function() {
                return o.bind("update.dot", function(e, d) {
                    switch (o.removeClass("is-truncated"),
                    e.preventDefault(),
                    e.stopPropagation(),
                    typeof l.height) {
                    case "number":
                        l.maxHeight = l.height;
                        break;
                    case "function":
                        l.maxHeight = l.height.call(o[0]);
                        break;
                    default:
                        l.maxHeight = f(o)
                    }
                    l.maxHeight += l.tolerance,
                    "undefined" != typeof d && (("string" == typeof d || "nodeType"in d && 1 === d.nodeType) && (d = t("<div />").append(d).contents()),
                    d instanceof t && (i = d)),
                    g = o.wrapInner('<div class="dotdotdot" />').children(),
                    g.contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({
                        height: "auto",
                        width: "auto",
                        border: "none",
                        padding: 0,
                        margin: 0
                    });
                    var c = !1
                      , u = !1;
                    return s.afterElement && (c = s.afterElement.clone(!0),
                    c.show(),
                    s.afterElement.detach()),
                    a(g, l) && (u = "children" == l.wrap ? n(g, l, c) : r(g, o, g, l, c)),
                    g.replaceWith(g.contents()),
                    g = null,
                    t.isFunction(l.callback) && l.callback.call(o[0], u, i),
                    s.isTruncated = u,
                    u
                }).bind("isTruncated.dot", function(t, e) {
                    return t.preventDefault(),
                    t.stopPropagation(),
                    "function" == typeof e && e.call(o[0], s.isTruncated),
                    s.isTruncated
                }).bind("originalContent.dot", function(t, e) {
                    return t.preventDefault(),
                    t.stopPropagation(),
                    "function" == typeof e && e.call(o[0], i),
                    i
                }).bind("destroy.dot", function(t) {
                    t.preventDefault(),
                    t.stopPropagation(),
                    o.unwatch().unbind_events().contents().detach().end().append(i).attr("style", o.data("dotdotdot-style") || "").data("dotdotdot", !1)
                }),
                o
            }
            ,
            o.unbind_events = function() {
                return o.unbind(".dot"),
                o
            }
            ,
            o.watch = function() {
                if (o.unwatch(),
                "window" == l.watch) {
                    var e = t(window)
                      , n = e.width()
                      , r = e.height();
                    e.bind("resize.dot" + s.dotId, function() {
                        n == e.width() && r == e.height() && l.windowResizeFix || (n = e.width(),
                        r = e.height(),
                        u && clearInterval(u),
                        u = setTimeout(function() {
                            o.trigger("update.dot")
                        }, 100))
                    })
                } else
                    c = d(o),
                    u = setInterval(function() {
                        if (o.is(":visible")) {
                            var t = d(o);
                            (c.width != t.width || c.height != t.height) && (o.trigger("update.dot"),
                            c = t)
                        }
                    }, 500);
                return o
            }
            ,
            o.unwatch = function() {
                return t(window).unbind("resize.dot" + s.dotId),
                u && clearInterval(u),
                o
            }
            ;
            var i = o.contents()
              , l = t.extend(!0, {}, t.fn.dotdotdot.defaults, e)
              , s = {}
              , c = {}
              , u = null
              , g = null;
            return l.lastCharacter.remove instanceof Array || (l.lastCharacter.remove = t.fn.dotdotdot.defaultArrays.lastCharacter.remove),
            l.lastCharacter.noEllipsis instanceof Array || (l.lastCharacter.noEllipsis = t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),
            s.afterElement = h(l.after, o),
            s.isTruncated = !1,
            s.dotId = p++,
            o.data("dotdotdot", !0).bind_events().trigger("update.dot"),
            l.watch && o.watch(),
            o
        }
        ,
        t.fn.dotdotdot.defaults = {
            ellipsis: "... ",
            wrap: "word",
            fallbackToLetter: !0,
            lastCharacter: {},
            tolerance: 0,
            callback: null,
            after: null,
            height: null,
            watch: !1,
            windowResizeFix: !0
        },
        t.fn.dotdotdot.defaultArrays = {
            lastCharacter: {
                remove: [" ", "　", ",", ";", ".", "!", "?"],
                noEllipsis: []
            }
        },
        t.fn.dotdotdot.debug = function() {}
        ;
        var p = 1
          , g = t.fn.html;
        t.fn.html = function(n) {
            return n != e && !t.isFunction(n) && this.data("dotdotdot") ? this.trigger("update", [n]) : g.apply(this, arguments)
        }
        ;
        var v = t.fn.text;
        t.fn.text = function(n) {
            return n != e && !t.isFunction(n) && this.data("dotdotdot") ? (n = t("<div />").text(n).html(),
            this.trigger("update", [n])) : v.apply(this, arguments)
        }
    }
}(jQuery);
(function(e) {
    var t, o = {
        className: "autosizejs",
        id: "autosizejs",
        append: "",
        callback: !1,
        resizeDelay: 10,
        placeholder: !0
    }, i = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>', n = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"], s = e(i).data("autosize", !0)[0];
    s.style.lineHeight = "99px",
    "99px" === e(s).css("lineHeight") && n.push("lineHeight"),
    s.style.lineHeight = "",
    e.fn.autosize = function(i) {
        return this.length ? (i = e.extend({}, o, i || {}),
        s.parentNode !== document.body && e(document.body).append(s),
        this.each(function() {
            function o() {
                var t, o = window.getComputedStyle ? window.getComputedStyle(u, null) : !1;
                o ? (t = u.getBoundingClientRect().width,
                0 === t && (t = parseInt(o.width, 10)),
                e.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], function(e, i) {
                    t -= parseInt(o[i], 10)
                })) : t = Math.max(p.width(), 0),
                s.style.width = t + "px"
            }
            function a() {
                var a = {};
                if (t = u,
                s.className = i.className,
                s.id = i.id,
                d = parseInt(p.css("maxHeight"), 10),
                e.each(n, function(e, t) {
                    a[t] = p.css(t)
                }),
                e(s).css(a),
                o(),
                window.chrome) {
                    var r = u.style.width;
                    u.style.width = "0px",
                    u.offsetWidth,
                    u.style.width = r
                }
            }
            function r() {
                var e, n;
                t !== u ? a() : o(),
                s.value = !u.value && i.placeholder ? (p.attr("placeholder") || "") + i.append : u.value + i.append,
                s.style.overflowY = u.style.overflowY,
                n = parseInt(u.style.height, 10),
                s.scrollTop = 0,
                s.scrollTop = 9e4,
                e = s.scrollTop,
                d && e > d ? (u.style.overflowY = "scroll",
                e = d) : (u.style.overflowY = "hidden",
                c > e && (e = c)),
                e += w,
                n !== e && (u.style.height = e + "px",
                f && i.callback.call(u, u))
            }
            function l() {
                clearTimeout(h),
                h = setTimeout(function() {
                    var e = p.width();
                    e !== g && (g = e,
                    r())
                }, parseInt(i.resizeDelay, 10))
            }
            var d, c, h, u = this, p = e(u), w = 0, f = e.isFunction(i.callback), z = {
                height: u.style.height,
                overflow: u.style.overflow,
                overflowY: u.style.overflowY,
                wordWrap: u.style.wordWrap,
                resize: u.style.resize
            }, g = p.width();
            p.data("autosize") || (p.data("autosize", !0),
            ("border-box" === p.css("box-sizing") || "border-box" === p.css("-moz-box-sizing") || "border-box" === p.css("-webkit-box-sizing")) && (w = p.outerHeight() - p.height()),
            c = Math.max(parseInt(p.css("minHeight"), 10) - w || 0, p.height()),
            p.css({
                overflow: "hidden",
                overflowY: "hidden",
                wordWrap: "break-word",
                resize: "none" === p.css("resize") || "vertical" === p.css("resize") ? "none" : "horizontal"
            }),
            "onpropertychange"in u ? "oninput"in u ? p.on("input.autosize keyup.autosize", r) : p.on("propertychange.autosize", function() {
                "value" === event.propertyName && r()
            }) : p.on("input.autosize", r),
            i.resizeDelay !== !1 && e(window).on("resize.autosize", l),
            p.on("autosize.resize", r),
            p.on("autosize.resizeIncludeStyle", function() {
                t = null,
                r()
            }),
            p.on("autosize.destroy", function() {
                t = null,
                clearTimeout(h),
                e(window).off("resize", l),
                p.off("autosize").off(".autosize").css(z).removeData("autosize")
            }),
            r())
        })) : this
    }
})(window.jQuery || window.$);
var Handlebars = function() {
    var a = function() {
        "use strict";
        function a(a) {
            this.string = a
        }
        var b;
        return a.prototype.toString = function() {
            return "" + this.string
        }
        ,
        b = a
    }()
      , b = function(a) {
        "use strict";
        function b(a) {
            return h[a] || "&amp;"
        }
        function c(a, b) {
            for (var c in b)
                Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c])
        }
        function d(a) {
            return a instanceof g ? a.toString() : a || 0 === a ? (a = "" + a,
            j.test(a) ? a.replace(i, b) : a) : ""
        }
        function e(a) {
            return a || 0 === a ? m(a) && 0 === a.length ? !0 : !1 : !0
        }
        var f = {}
          , g = a
          , h = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }
          , i = /[&<>"'`]/g
          , j = /[&<>"'`]/;
        f.extend = c;
        var k = Object.prototype.toString;
        f.toString = k;
        var l = function(a) {
            return "function" == typeof a
        };
        l(/x/) && (l = function(a) {
            return "function" == typeof a && "[object Function]" === k.call(a)
        }
        );
        var l;
        f.isFunction = l;
        var m = Array.isArray || function(a) {
            return a && "object" == typeof a ? "[object Array]" === k.call(a) : !1
        }
        ;
        return f.isArray = m,
        f.escapeExpression = d,
        f.isEmpty = e,
        f
    }(a)
      , c = function() {
        "use strict";
        function a(a, b) {
            var d;
            b && b.firstLine && (d = b.firstLine,
            a += " - " + d + ":" + b.firstColumn);
            for (var e = Error.prototype.constructor.call(this, a), f = 0; f < c.length; f++)
                this[c[f]] = e[c[f]];
            d && (this.lineNumber = d,
            this.column = b.firstColumn)
        }
        var b, c = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        return a.prototype = new Error,
        b = a
    }()
      , d = function(a, b) {
        "use strict";
        function c(a, b) {
            this.helpers = a || {},
            this.partials = b || {},
            d(this)
        }
        function d(a) {
            a.registerHelper("helperMissing", function(a) {
                if (2 === arguments.length)
                    return void 0;
                throw new h("Missing helper: '" + a + "'")
            }),
            a.registerHelper("blockHelperMissing", function(b, c) {
                var d = c.inverse || function() {}
                  , e = c.fn;
                return m(b) && (b = b.call(this)),
                b === !0 ? e(this) : b === !1 || null == b ? d(this) : l(b) ? b.length > 0 ? a.helpers.each(b, c) : d(this) : e(b)
            }),
            a.registerHelper("each", function(a, b) {
                var c, d = b.fn, e = b.inverse, f = 0, g = "";
                if (m(a) && (a = a.call(this)),
                b.data && (c = q(b.data)),
                a && "object" == typeof a)
                    if (l(a))
                        for (var h = a.length; h > f; f++)
                            c && (c.index = f,
                            c.first = 0 === f,
                            c.last = f === a.length - 1),
                            g += d(a[f], {
                                data: c
                            });
                    else
                        for (var i in a)
                            a.hasOwnProperty(i) && (c && (c.key = i,
                            c.index = f,
                            c.first = 0 === f),
                            g += d(a[i], {
                                data: c
                            }),
                            f++);
                return 0 === f && (g = e(this)),
                g
            }),
            a.registerHelper("if", function(a, b) {
                return m(a) && (a = a.call(this)),
                !b.hash.includeZero && !a || g.isEmpty(a) ? b.inverse(this) : b.fn(this)
            }),
            a.registerHelper("unless", function(b, c) {
                return a.helpers["if"].call(this, b, {
                    fn: c.inverse,
                    inverse: c.fn,
                    hash: c.hash
                })
            }),
            a.registerHelper("with", function(a, b) {
                return m(a) && (a = a.call(this)),
                g.isEmpty(a) ? void 0 : b.fn(a)
            }),
            a.registerHelper("log", function(b, c) {
                var d = c.data && null != c.data.level ? parseInt(c.data.level, 10) : 1;
                a.log(d, b)
            })
        }
        function e(a, b) {
            p.log(a, b)
        }
        var f = {}
          , g = a
          , h = b
          , i = "1.3.0";
        f.VERSION = i;
        var j = 4;
        f.COMPILER_REVISION = j;
        var k = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: ">= 1.0.0"
        };
        f.REVISION_CHANGES = k;
        var l = g.isArray
          , m = g.isFunction
          , n = g.toString
          , o = "[object Object]";
        f.HandlebarsEnvironment = c,
        c.prototype = {
            constructor: c,
            logger: p,
            log: e,
            registerHelper: function(a, b, c) {
                if (n.call(a) === o) {
                    if (c || b)
                        throw new h("Arg not supported with multiple helpers");
                    g.extend(this.helpers, a)
                } else
                    c && (b.not = c),
                    this.helpers[a] = b
            },
            registerPartial: function(a, b) {
                n.call(a) === o ? g.extend(this.partials, a) : this.partials[a] = b
            }
        };
        var p = {
            methodMap: {
                0: "debug",
                1: "info",
                2: "warn",
                3: "error"
            },
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            level: 3,
            log: function(a, b) {
                if (p.level <= a) {
                    var c = p.methodMap[a];
                    "undefined" != typeof console && console[c] && console[c].call(console, b)
                }
            }
        };
        f.logger = p,
        f.log = e;
        var q = function(a) {
            var b = {};
            return g.extend(b, a),
            b
        };
        return f.createFrame = q,
        f
    }(b, c)
      , e = function(a, b, c) {
        "use strict";
        function d(a) {
            var b = a && a[0] || 1
              , c = m;
            if (b !== c) {
                if (c > b) {
                    var d = n[c]
                      , e = n[b];
                    throw new l("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + d + ") or downgrade your runtime to an older version (" + e + ").")
                }
                throw new l("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + a[1] + ").")
            }
        }
        function e(a, b) {
            if (!b)
                throw new l("No environment passed to template");
            var c = function(a, c, d, e, f, g) {
                var h = b.VM.invokePartial.apply(this, arguments);
                if (null != h)
                    return h;
                if (b.compile) {
                    var i = {
                        helpers: e,
                        partials: f,
                        data: g
                    };
                    return f[c] = b.compile(a, {
                        data: void 0 !== g
                    }, b),
                    f[c](d, i)
                }
                throw new l("The partial " + c + " could not be compiled when running in runtime-only mode")
            }
              , d = {
                escapeExpression: k.escapeExpression,
                invokePartial: c,
                programs: [],
                program: function(a, b, c) {
                    var d = this.programs[a];
                    return c ? d = g(a, b, c) : d || (d = this.programs[a] = g(a, b)),
                    d
                },
                merge: function(a, b) {
                    var c = a || b;
                    return a && b && a !== b && (c = {},
                    k.extend(c, b),
                    k.extend(c, a)),
                    c
                },
                programWithDepth: b.VM.programWithDepth,
                noop: b.VM.noop,
                compilerInfo: null
            };
            return function(c, e) {
                e = e || {};
                var f, g, h = e.partial ? e : b;
                e.partial || (f = e.helpers,
                g = e.partials);
                var i = a.call(d, h, c, f, g, e.data);
                return e.partial || b.VM.checkRevision(d.compilerInfo),
                i
            }
        }
        function f(a, b, c) {
            var d = Array.prototype.slice.call(arguments, 3)
              , e = function(a, e) {
                return e = e || {},
                b.apply(this, [a, e.data || c].concat(d))
            };
            return e.program = a,
            e.depth = d.length,
            e
        }
        function g(a, b, c) {
            var d = function(a, d) {
                return d = d || {},
                b(a, d.data || c)
            };
            return d.program = a,
            d.depth = 0,
            d
        }
        function h(a, b, c, d, e, f) {
            var g = {
                partial: !0,
                helpers: d,
                partials: e,
                data: f
            };
            if (void 0 === a)
                throw new l("The partial " + b + " could not be found");
            return a instanceof Function ? a(c, g) : void 0
        }
        function i() {
            return ""
        }
        var j = {}
          , k = a
          , l = b
          , m = c.COMPILER_REVISION
          , n = c.REVISION_CHANGES;
        return j.checkRevision = d,
        j.template = e,
        j.programWithDepth = f,
        j.program = g,
        j.invokePartial = h,
        j.noop = i,
        j
    }(b, c, d)
      , f = function(a, b, c, d, e) {
        "use strict";
        var f, g = a, h = b, i = c, j = d, k = e, l = function() {
            var a = new g.HandlebarsEnvironment;
            return j.extend(a, g),
            a.SafeString = h,
            a.Exception = i,
            a.Utils = j,
            a.VM = k,
            a.template = function(b) {
                return k.template(b, a)
            }
            ,
            a
        }, m = l();
        return m.create = l,
        f = m
    }(d, a, c, b, e)
      , g = function(a) {
        "use strict";
        function b(a) {
            a = a || {},
            this.firstLine = a.first_line,
            this.firstColumn = a.first_column,
            this.lastColumn = a.last_column,
            this.lastLine = a.last_line
        }
        var c, d = a, e = {
            ProgramNode: function(a, c, d, f) {
                var g, h;
                3 === arguments.length ? (f = d,
                d = null) : 2 === arguments.length && (f = c,
                c = null),
                b.call(this, f),
                this.type = "program",
                this.statements = a,
                this.strip = {},
                d ? (h = d[0],
                h ? (g = {
                    first_line: h.firstLine,
                    last_line: h.lastLine,
                    last_column: h.lastColumn,
                    first_column: h.firstColumn
                },
                this.inverse = new e.ProgramNode(d,c,g)) : this.inverse = new e.ProgramNode(d,c),
                this.strip.right = c.left) : c && (this.strip.left = c.right)
            },
            MustacheNode: function(a, c, d, f, g) {
                if (b.call(this, g),
                this.type = "mustache",
                this.strip = f,
                null != d && d.charAt) {
                    var h = d.charAt(3) || d.charAt(2);
                    this.escaped = "{" !== h && "&" !== h
                } else
                    this.escaped = !!d;
                this.sexpr = a instanceof e.SexprNode ? a : new e.SexprNode(a,c),
                this.sexpr.isRoot = !0,
                this.id = this.sexpr.id,
                this.params = this.sexpr.params,
                this.hash = this.sexpr.hash,
                this.eligibleHelper = this.sexpr.eligibleHelper,
                this.isHelper = this.sexpr.isHelper
            },
            SexprNode: function(a, c, d) {
                b.call(this, d),
                this.type = "sexpr",
                this.hash = c;
                var e = this.id = a[0]
                  , f = this.params = a.slice(1)
                  , g = this.eligibleHelper = e.isSimple;
                this.isHelper = g && (f.length || c)
            },
            PartialNode: function(a, c, d, e) {
                b.call(this, e),
                this.type = "partial",
                this.partialName = a,
                this.context = c,
                this.strip = d
            },
            BlockNode: function(a, c, e, f, g) {
                if (b.call(this, g),
                a.sexpr.id.original !== f.path.original)
                    throw new d(a.sexpr.id.original + " doesn't match " + f.path.original,this);
                this.type = "block",
                this.mustache = a,
                this.program = c,
                this.inverse = e,
                this.strip = {
                    left: a.strip.left,
                    right: f.strip.right
                },
                (c || e).strip.left = a.strip.right,
                (e || c).strip.right = f.strip.left,
                e && !c && (this.isInverse = !0)
            },
            ContentNode: function(a, c) {
                b.call(this, c),
                this.type = "content",
                this.string = a
            },
            HashNode: function(a, c) {
                b.call(this, c),
                this.type = "hash",
                this.pairs = a
            },
            IdNode: function(a, c) {
                b.call(this, c),
                this.type = "ID";
                for (var e = "", f = [], g = 0, h = 0, i = a.length; i > h; h++) {
                    var j = a[h].part;
                    if (e += (a[h].separator || "") + j,
                    ".." === j || "." === j || "this" === j) {
                        if (f.length > 0)
                            throw new d("Invalid path: " + e,this);
                        ".." === j ? g++ : this.isScoped = !0
                    } else
                        f.push(j)
                }
                this.original = e,
                this.parts = f,
                this.string = f.join("."),
                this.depth = g,
                this.isSimple = 1 === a.length && !this.isScoped && 0 === g,
                this.stringModeValue = this.string
            },
            PartialNameNode: function(a, c) {
                b.call(this, c),
                this.type = "PARTIAL_NAME",
                this.name = a.original
            },
            DataNode: function(a, c) {
                b.call(this, c),
                this.type = "DATA",
                this.id = a
            },
            StringNode: function(a, c) {
                b.call(this, c),
                this.type = "STRING",
                this.original = this.string = this.stringModeValue = a
            },
            IntegerNode: function(a, c) {
                b.call(this, c),
                this.type = "INTEGER",
                this.original = this.integer = a,
                this.stringModeValue = Number(a)
            },
            BooleanNode: function(a, c) {
                b.call(this, c),
                this.type = "BOOLEAN",
                this.bool = a,
                this.stringModeValue = "true" === a
            },
            CommentNode: function(a, c) {
                b.call(this, c),
                this.type = "comment",
                this.comment = a
            }
        };
        return c = e
    }(c)
      , h = function() {
        "use strict";
        var a, b = function() {
            function a(a, b) {
                return {
                    left: "~" === a.charAt(2),
                    right: "~" === b.charAt(0) || "~" === b.charAt(1)
                }
            }
            function b() {
                this.yy = {}
            }
            var c = {
                trace: function() {},
                yy: {},
                symbols_: {
                    error: 2,
                    root: 3,
                    statements: 4,
                    EOF: 5,
                    program: 6,
                    simpleInverse: 7,
                    statement: 8,
                    openInverse: 9,
                    closeBlock: 10,
                    openBlock: 11,
                    mustache: 12,
                    partial: 13,
                    CONTENT: 14,
                    COMMENT: 15,
                    OPEN_BLOCK: 16,
                    sexpr: 17,
                    CLOSE: 18,
                    OPEN_INVERSE: 19,
                    OPEN_ENDBLOCK: 20,
                    path: 21,
                    OPEN: 22,
                    OPEN_UNESCAPED: 23,
                    CLOSE_UNESCAPED: 24,
                    OPEN_PARTIAL: 25,
                    partialName: 26,
                    partial_option0: 27,
                    sexpr_repetition0: 28,
                    sexpr_option0: 29,
                    dataName: 30,
                    param: 31,
                    STRING: 32,
                    INTEGER: 33,
                    BOOLEAN: 34,
                    OPEN_SEXPR: 35,
                    CLOSE_SEXPR: 36,
                    hash: 37,
                    hash_repetition_plus0: 38,
                    hashSegment: 39,
                    ID: 40,
                    EQUALS: 41,
                    DATA: 42,
                    pathSegments: 43,
                    SEP: 44,
                    $accept: 0,
                    $end: 1
                },
                terminals_: {
                    2: "error",
                    5: "EOF",
                    14: "CONTENT",
                    15: "COMMENT",
                    16: "OPEN_BLOCK",
                    18: "CLOSE",
                    19: "OPEN_INVERSE",
                    20: "OPEN_ENDBLOCK",
                    22: "OPEN",
                    23: "OPEN_UNESCAPED",
                    24: "CLOSE_UNESCAPED",
                    25: "OPEN_PARTIAL",
                    32: "STRING",
                    33: "INTEGER",
                    34: "BOOLEAN",
                    35: "OPEN_SEXPR",
                    36: "CLOSE_SEXPR",
                    40: "ID",
                    41: "EQUALS",
                    42: "DATA",
                    44: "SEP"
                },
                productions_: [0, [3, 2], [3, 1], [6, 2], [6, 3], [6, 2], [6, 1], [6, 1], [6, 0], [4, 1], [4, 2], [8, 3], [8, 3], [8, 1], [8, 1], [8, 1], [8, 1], [11, 3], [9, 3], [10, 3], [12, 3], [12, 3], [13, 4], [7, 2], [17, 3], [17, 1], [31, 1], [31, 1], [31, 1], [31, 1], [31, 1], [31, 3], [37, 1], [39, 3], [26, 1], [26, 1], [26, 1], [30, 2], [21, 1], [43, 3], [43, 1], [27, 0], [27, 1], [28, 0], [28, 2], [29, 0], [29, 1], [38, 1], [38, 2]],
                performAction: function(b, c, d, e, f, g) {
                    var h = g.length - 1;
                    switch (f) {
                    case 1:
                        return new e.ProgramNode(g[h - 1],this._$);
                    case 2:
                        return new e.ProgramNode([],this._$);
                    case 3:
                        this.$ = new e.ProgramNode([],g[h - 1],g[h],this._$);
                        break;
                    case 4:
                        this.$ = new e.ProgramNode(g[h - 2],g[h - 1],g[h],this._$);
                        break;
                    case 5:
                        this.$ = new e.ProgramNode(g[h - 1],g[h],[],this._$);
                        break;
                    case 6:
                        this.$ = new e.ProgramNode(g[h],this._$);
                        break;
                    case 7:
                        this.$ = new e.ProgramNode([],this._$);
                        break;
                    case 8:
                        this.$ = new e.ProgramNode([],this._$);
                        break;
                    case 9:
                        this.$ = [g[h]];
                        break;
                    case 10:
                        g[h - 1].push(g[h]),
                        this.$ = g[h - 1];
                        break;
                    case 11:
                        this.$ = new e.BlockNode(g[h - 2],g[h - 1].inverse,g[h - 1],g[h],this._$);
                        break;
                    case 12:
                        this.$ = new e.BlockNode(g[h - 2],g[h - 1],g[h - 1].inverse,g[h],this._$);
                        break;
                    case 13:
                        this.$ = g[h];
                        break;
                    case 14:
                        this.$ = g[h];
                        break;
                    case 15:
                        this.$ = new e.ContentNode(g[h],this._$);
                        break;
                    case 16:
                        this.$ = new e.CommentNode(g[h],this._$);
                        break;
                    case 17:
                        this.$ = new e.MustacheNode(g[h - 1],null,g[h - 2],a(g[h - 2], g[h]),this._$);
                        break;
                    case 18:
                        this.$ = new e.MustacheNode(g[h - 1],null,g[h - 2],a(g[h - 2], g[h]),this._$);
                        break;
                    case 19:
                        this.$ = {
                            path: g[h - 1],
                            strip: a(g[h - 2], g[h])
                        };
                        break;
                    case 20:
                        this.$ = new e.MustacheNode(g[h - 1],null,g[h - 2],a(g[h - 2], g[h]),this._$);
                        break;
                    case 21:
                        this.$ = new e.MustacheNode(g[h - 1],null,g[h - 2],a(g[h - 2], g[h]),this._$);
                        break;
                    case 22:
                        this.$ = new e.PartialNode(g[h - 2],g[h - 1],a(g[h - 3], g[h]),this._$);
                        break;
                    case 23:
                        this.$ = a(g[h - 1], g[h]);
                        break;
                    case 24:
                        this.$ = new e.SexprNode([g[h - 2]].concat(g[h - 1]),g[h],this._$);
                        break;
                    case 25:
                        this.$ = new e.SexprNode([g[h]],null,this._$);
                        break;
                    case 26:
                        this.$ = g[h];
                        break;
                    case 27:
                        this.$ = new e.StringNode(g[h],this._$);
                        break;
                    case 28:
                        this.$ = new e.IntegerNode(g[h],this._$);
                        break;
                    case 29:
                        this.$ = new e.BooleanNode(g[h],this._$);
                        break;
                    case 30:
                        this.$ = g[h];
                        break;
                    case 31:
                        g[h - 1].isHelper = !0,
                        this.$ = g[h - 1];
                        break;
                    case 32:
                        this.$ = new e.HashNode(g[h],this._$);
                        break;
                    case 33:
                        this.$ = [g[h - 2], g[h]];
                        break;
                    case 34:
                        this.$ = new e.PartialNameNode(g[h],this._$);
                        break;
                    case 35:
                        this.$ = new e.PartialNameNode(new e.StringNode(g[h],this._$),this._$);
                        break;
                    case 36:
                        this.$ = new e.PartialNameNode(new e.IntegerNode(g[h],this._$));
                        break;
                    case 37:
                        this.$ = new e.DataNode(g[h],this._$);
                        break;
                    case 38:
                        this.$ = new e.IdNode(g[h],this._$);
                        break;
                    case 39:
                        g[h - 2].push({
                            part: g[h],
                            separator: g[h - 1]
                        }),
                        this.$ = g[h - 2];
                        break;
                    case 40:
                        this.$ = [{
                            part: g[h]
                        }];
                        break;
                    case 43:
                        this.$ = [];
                        break;
                    case 44:
                        g[h - 1].push(g[h]);
                        break;
                    case 47:
                        this.$ = [g[h]];
                        break;
                    case 48:
                        g[h - 1].push(g[h])
                    }
                },
                table: [{
                    3: 1,
                    4: 2,
                    5: [1, 3],
                    8: 4,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 11],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    1: [3]
                }, {
                    5: [1, 16],
                    8: 17,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 11],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    1: [2, 2]
                }, {
                    5: [2, 9],
                    14: [2, 9],
                    15: [2, 9],
                    16: [2, 9],
                    19: [2, 9],
                    20: [2, 9],
                    22: [2, 9],
                    23: [2, 9],
                    25: [2, 9]
                }, {
                    4: 20,
                    6: 18,
                    7: 19,
                    8: 4,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 21],
                    20: [2, 8],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    4: 20,
                    6: 22,
                    7: 19,
                    8: 4,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 21],
                    20: [2, 8],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    5: [2, 13],
                    14: [2, 13],
                    15: [2, 13],
                    16: [2, 13],
                    19: [2, 13],
                    20: [2, 13],
                    22: [2, 13],
                    23: [2, 13],
                    25: [2, 13]
                }, {
                    5: [2, 14],
                    14: [2, 14],
                    15: [2, 14],
                    16: [2, 14],
                    19: [2, 14],
                    20: [2, 14],
                    22: [2, 14],
                    23: [2, 14],
                    25: [2, 14]
                }, {
                    5: [2, 15],
                    14: [2, 15],
                    15: [2, 15],
                    16: [2, 15],
                    19: [2, 15],
                    20: [2, 15],
                    22: [2, 15],
                    23: [2, 15],
                    25: [2, 15]
                }, {
                    5: [2, 16],
                    14: [2, 16],
                    15: [2, 16],
                    16: [2, 16],
                    19: [2, 16],
                    20: [2, 16],
                    22: [2, 16],
                    23: [2, 16],
                    25: [2, 16]
                }, {
                    17: 23,
                    21: 24,
                    30: 25,
                    40: [1, 28],
                    42: [1, 27],
                    43: 26
                }, {
                    17: 29,
                    21: 24,
                    30: 25,
                    40: [1, 28],
                    42: [1, 27],
                    43: 26
                }, {
                    17: 30,
                    21: 24,
                    30: 25,
                    40: [1, 28],
                    42: [1, 27],
                    43: 26
                }, {
                    17: 31,
                    21: 24,
                    30: 25,
                    40: [1, 28],
                    42: [1, 27],
                    43: 26
                }, {
                    21: 33,
                    26: 32,
                    32: [1, 34],
                    33: [1, 35],
                    40: [1, 28],
                    43: 26
                }, {
                    1: [2, 1]
                }, {
                    5: [2, 10],
                    14: [2, 10],
                    15: [2, 10],
                    16: [2, 10],
                    19: [2, 10],
                    20: [2, 10],
                    22: [2, 10],
                    23: [2, 10],
                    25: [2, 10]
                }, {
                    10: 36,
                    20: [1, 37]
                }, {
                    4: 38,
                    8: 4,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 11],
                    20: [2, 7],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    7: 39,
                    8: 17,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 21],
                    20: [2, 6],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    17: 23,
                    18: [1, 40],
                    21: 24,
                    30: 25,
                    40: [1, 28],
                    42: [1, 27],
                    43: 26
                }, {
                    10: 41,
                    20: [1, 37]
                }, {
                    18: [1, 42]
                }, {
                    18: [2, 43],
                    24: [2, 43],
                    28: 43,
                    32: [2, 43],
                    33: [2, 43],
                    34: [2, 43],
                    35: [2, 43],
                    36: [2, 43],
                    40: [2, 43],
                    42: [2, 43]
                }, {
                    18: [2, 25],
                    24: [2, 25],
                    36: [2, 25]
                }, {
                    18: [2, 38],
                    24: [2, 38],
                    32: [2, 38],
                    33: [2, 38],
                    34: [2, 38],
                    35: [2, 38],
                    36: [2, 38],
                    40: [2, 38],
                    42: [2, 38],
                    44: [1, 44]
                }, {
                    21: 45,
                    40: [1, 28],
                    43: 26
                }, {
                    18: [2, 40],
                    24: [2, 40],
                    32: [2, 40],
                    33: [2, 40],
                    34: [2, 40],
                    35: [2, 40],
                    36: [2, 40],
                    40: [2, 40],
                    42: [2, 40],
                    44: [2, 40]
                }, {
                    18: [1, 46]
                }, {
                    18: [1, 47]
                }, {
                    24: [1, 48]
                }, {
                    18: [2, 41],
                    21: 50,
                    27: 49,
                    40: [1, 28],
                    43: 26
                }, {
                    18: [2, 34],
                    40: [2, 34]
                }, {
                    18: [2, 35],
                    40: [2, 35]
                }, {
                    18: [2, 36],
                    40: [2, 36]
                }, {
                    5: [2, 11],
                    14: [2, 11],
                    15: [2, 11],
                    16: [2, 11],
                    19: [2, 11],
                    20: [2, 11],
                    22: [2, 11],
                    23: [2, 11],
                    25: [2, 11]
                }, {
                    21: 51,
                    40: [1, 28],
                    43: 26
                }, {
                    8: 17,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 11],
                    20: [2, 3],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    4: 52,
                    8: 4,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 11],
                    20: [2, 5],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    14: [2, 23],
                    15: [2, 23],
                    16: [2, 23],
                    19: [2, 23],
                    20: [2, 23],
                    22: [2, 23],
                    23: [2, 23],
                    25: [2, 23]
                }, {
                    5: [2, 12],
                    14: [2, 12],
                    15: [2, 12],
                    16: [2, 12],
                    19: [2, 12],
                    20: [2, 12],
                    22: [2, 12],
                    23: [2, 12],
                    25: [2, 12]
                }, {
                    14: [2, 18],
                    15: [2, 18],
                    16: [2, 18],
                    19: [2, 18],
                    20: [2, 18],
                    22: [2, 18],
                    23: [2, 18],
                    25: [2, 18]
                }, {
                    18: [2, 45],
                    21: 56,
                    24: [2, 45],
                    29: 53,
                    30: 60,
                    31: 54,
                    32: [1, 57],
                    33: [1, 58],
                    34: [1, 59],
                    35: [1, 61],
                    36: [2, 45],
                    37: 55,
                    38: 62,
                    39: 63,
                    40: [1, 64],
                    42: [1, 27],
                    43: 26
                }, {
                    40: [1, 65]
                }, {
                    18: [2, 37],
                    24: [2, 37],
                    32: [2, 37],
                    33: [2, 37],
                    34: [2, 37],
                    35: [2, 37],
                    36: [2, 37],
                    40: [2, 37],
                    42: [2, 37]
                }, {
                    14: [2, 17],
                    15: [2, 17],
                    16: [2, 17],
                    19: [2, 17],
                    20: [2, 17],
                    22: [2, 17],
                    23: [2, 17],
                    25: [2, 17]
                }, {
                    5: [2, 20],
                    14: [2, 20],
                    15: [2, 20],
                    16: [2, 20],
                    19: [2, 20],
                    20: [2, 20],
                    22: [2, 20],
                    23: [2, 20],
                    25: [2, 20]
                }, {
                    5: [2, 21],
                    14: [2, 21],
                    15: [2, 21],
                    16: [2, 21],
                    19: [2, 21],
                    20: [2, 21],
                    22: [2, 21],
                    23: [2, 21],
                    25: [2, 21]
                }, {
                    18: [1, 66]
                }, {
                    18: [2, 42]
                }, {
                    18: [1, 67]
                }, {
                    8: 17,
                    9: 5,
                    11: 6,
                    12: 7,
                    13: 8,
                    14: [1, 9],
                    15: [1, 10],
                    16: [1, 12],
                    19: [1, 11],
                    20: [2, 4],
                    22: [1, 13],
                    23: [1, 14],
                    25: [1, 15]
                }, {
                    18: [2, 24],
                    24: [2, 24],
                    36: [2, 24]
                }, {
                    18: [2, 44],
                    24: [2, 44],
                    32: [2, 44],
                    33: [2, 44],
                    34: [2, 44],
                    35: [2, 44],
                    36: [2, 44],
                    40: [2, 44],
                    42: [2, 44]
                }, {
                    18: [2, 46],
                    24: [2, 46],
                    36: [2, 46]
                }, {
                    18: [2, 26],
                    24: [2, 26],
                    32: [2, 26],
                    33: [2, 26],
                    34: [2, 26],
                    35: [2, 26],
                    36: [2, 26],
                    40: [2, 26],
                    42: [2, 26]
                }, {
                    18: [2, 27],
                    24: [2, 27],
                    32: [2, 27],
                    33: [2, 27],
                    34: [2, 27],
                    35: [2, 27],
                    36: [2, 27],
                    40: [2, 27],
                    42: [2, 27]
                }, {
                    18: [2, 28],
                    24: [2, 28],
                    32: [2, 28],
                    33: [2, 28],
                    34: [2, 28],
                    35: [2, 28],
                    36: [2, 28],
                    40: [2, 28],
                    42: [2, 28]
                }, {
                    18: [2, 29],
                    24: [2, 29],
                    32: [2, 29],
                    33: [2, 29],
                    34: [2, 29],
                    35: [2, 29],
                    36: [2, 29],
                    40: [2, 29],
                    42: [2, 29]
                }, {
                    18: [2, 30],
                    24: [2, 30],
                    32: [2, 30],
                    33: [2, 30],
                    34: [2, 30],
                    35: [2, 30],
                    36: [2, 30],
                    40: [2, 30],
                    42: [2, 30]
                }, {
                    17: 68,
                    21: 24,
                    30: 25,
                    40: [1, 28],
                    42: [1, 27],
                    43: 26
                }, {
                    18: [2, 32],
                    24: [2, 32],
                    36: [2, 32],
                    39: 69,
                    40: [1, 70]
                }, {
                    18: [2, 47],
                    24: [2, 47],
                    36: [2, 47],
                    40: [2, 47]
                }, {
                    18: [2, 40],
                    24: [2, 40],
                    32: [2, 40],
                    33: [2, 40],
                    34: [2, 40],
                    35: [2, 40],
                    36: [2, 40],
                    40: [2, 40],
                    41: [1, 71],
                    42: [2, 40],
                    44: [2, 40]
                }, {
                    18: [2, 39],
                    24: [2, 39],
                    32: [2, 39],
                    33: [2, 39],
                    34: [2, 39],
                    35: [2, 39],
                    36: [2, 39],
                    40: [2, 39],
                    42: [2, 39],
                    44: [2, 39]
                }, {
                    5: [2, 22],
                    14: [2, 22],
                    15: [2, 22],
                    16: [2, 22],
                    19: [2, 22],
                    20: [2, 22],
                    22: [2, 22],
                    23: [2, 22],
                    25: [2, 22]
                }, {
                    5: [2, 19],
                    14: [2, 19],
                    15: [2, 19],
                    16: [2, 19],
                    19: [2, 19],
                    20: [2, 19],
                    22: [2, 19],
                    23: [2, 19],
                    25: [2, 19]
                }, {
                    36: [1, 72]
                }, {
                    18: [2, 48],
                    24: [2, 48],
                    36: [2, 48],
                    40: [2, 48]
                }, {
                    41: [1, 71]
                }, {
                    21: 56,
                    30: 60,
                    31: 73,
                    32: [1, 57],
                    33: [1, 58],
                    34: [1, 59],
                    35: [1, 61],
                    40: [1, 28],
                    42: [1, 27],
                    43: 26
                }, {
                    18: [2, 31],
                    24: [2, 31],
                    32: [2, 31],
                    33: [2, 31],
                    34: [2, 31],
                    35: [2, 31],
                    36: [2, 31],
                    40: [2, 31],
                    42: [2, 31]
                }, {
                    18: [2, 33],
                    24: [2, 33],
                    36: [2, 33],
                    40: [2, 33]
                }],
                defaultActions: {
                    3: [2, 2],
                    16: [2, 1],
                    50: [2, 42]
                },
                parseError: function(a) {
                    throw new Error(a)
                },
                parse: function(a) {
                    function b() {
                        var a;
                        return a = c.lexer.lex() || 1,
                        "number" != typeof a && (a = c.symbols_[a] || a),
                        a
                    }
                    var c = this
                      , d = [0]
                      , e = [null]
                      , f = []
                      , g = this.table
                      , h = ""
                      , i = 0
                      , j = 0
                      , k = 0;
                    this.lexer.setInput(a),
                    this.lexer.yy = this.yy,
                    this.yy.lexer = this.lexer,
                    this.yy.parser = this,
                    "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                    var l = this.lexer.yylloc;
                    f.push(l);
                    var m = this.lexer.options && this.lexer.options.ranges;
                    "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                    for (var n, o, p, q, r, s, t, u, v, w = {}; ; ) {
                        if (p = d[d.length - 1],
                        this.defaultActions[p] ? q = this.defaultActions[p] : ((null === n || "undefined" == typeof n) && (n = b()),
                        q = g[p] && g[p][n]),
                        "undefined" == typeof q || !q.length || !q[0]) {
                            var x = "";
                            if (!k) {
                                v = [];
                                for (s in g[p])
                                    this.terminals_[s] && s > 2 && v.push("'" + this.terminals_[s] + "'");
                                x = this.lexer.showPosition ? "Parse error on line " + (i + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + v.join(", ") + ", got '" + (this.terminals_[n] || n) + "'" : "Parse error on line " + (i + 1) + ": Unexpected " + (1 == n ? "end of input" : "'" + (this.terminals_[n] || n) + "'"),
                                this.parseError(x, {
                                    text: this.lexer.match,
                                    token: this.terminals_[n] || n,
                                    line: this.lexer.yylineno,
                                    loc: l,
                                    expected: v
                                })
                            }
                        }
                        if (q[0]instanceof Array && q.length > 1)
                            throw new Error("Parse Error: multiple actions possible at state: " + p + ", token: " + n);
                        switch (q[0]) {
                        case 1:
                            d.push(n),
                            e.push(this.lexer.yytext),
                            f.push(this.lexer.yylloc),
                            d.push(q[1]),
                            n = null,
                            o ? (n = o,
                            o = null) : (j = this.lexer.yyleng,
                            h = this.lexer.yytext,
                            i = this.lexer.yylineno,
                            l = this.lexer.yylloc,
                            k > 0 && k--);
                            break;
                        case 2:
                            if (t = this.productions_[q[1]][1],
                            w.$ = e[e.length - t],
                            w._$ = {
                                first_line: f[f.length - (t || 1)].first_line,
                                last_line: f[f.length - 1].last_line,
                                first_column: f[f.length - (t || 1)].first_column,
                                last_column: f[f.length - 1].last_column
                            },
                            m && (w._$.range = [f[f.length - (t || 1)].range[0], f[f.length - 1].range[1]]),
                            r = this.performAction.call(w, h, j, i, this.yy, q[1], e, f),
                            "undefined" != typeof r)
                                return r;
                            t && (d = d.slice(0, -1 * t * 2),
                            e = e.slice(0, -1 * t),
                            f = f.slice(0, -1 * t)),
                            d.push(this.productions_[q[1]][0]),
                            e.push(w.$),
                            f.push(w._$),
                            u = g[d[d.length - 2]][d[d.length - 1]],
                            d.push(u);
                            break;
                        case 3:
                            return !0
                        }
                    }
                    return !0
                }
            }
              , d = function() {
                var a = {
                    EOF: 1,
                    parseError: function(a, b) {
                        if (!this.yy.parser)
                            throw new Error(a);
                        this.yy.parser.parseError(a, b)
                    },
                    setInput: function(a) {
                        return this._input = a,
                        this._more = this._less = this.done = !1,
                        this.yylineno = this.yyleng = 0,
                        this.yytext = this.matched = this.match = "",
                        this.conditionStack = ["INITIAL"],
                        this.yylloc = {
                            first_line: 1,
                            first_column: 0,
                            last_line: 1,
                            last_column: 0
                        },
                        this.options.ranges && (this.yylloc.range = [0, 0]),
                        this.offset = 0,
                        this
                    },
                    input: function() {
                        var a = this._input[0];
                        this.yytext += a,
                        this.yyleng++,
                        this.offset++,
                        this.match += a,
                        this.matched += a;
                        var b = a.match(/(?:\r\n?|\n).*/g);
                        return b ? (this.yylineno++,
                        this.yylloc.last_line++) : this.yylloc.last_column++,
                        this.options.ranges && this.yylloc.range[1]++,
                        this._input = this._input.slice(1),
                        a
                    },
                    unput: function(a) {
                        var b = a.length
                          , c = a.split(/(?:\r\n?|\n)/g);
                        this._input = a + this._input,
                        this.yytext = this.yytext.substr(0, this.yytext.length - b - 1),
                        this.offset -= b;
                        var d = this.match.split(/(?:\r\n?|\n)/g);
                        this.match = this.match.substr(0, this.match.length - 1),
                        this.matched = this.matched.substr(0, this.matched.length - 1),
                        c.length - 1 && (this.yylineno -= c.length - 1);
                        var e = this.yylloc.range;
                        return this.yylloc = {
                            first_line: this.yylloc.first_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.first_column,
                            last_column: c ? (c.length === d.length ? this.yylloc.first_column : 0) + d[d.length - c.length].length - c[0].length : this.yylloc.first_column - b
                        },
                        this.options.ranges && (this.yylloc.range = [e[0], e[0] + this.yyleng - b]),
                        this
                    },
                    more: function() {
                        return this._more = !0,
                        this
                    },
                    less: function(a) {
                        this.unput(this.match.slice(a))
                    },
                    pastInput: function() {
                        var a = this.matched.substr(0, this.matched.length - this.match.length);
                        return (a.length > 20 ? "..." : "") + a.substr(-20).replace(/\n/g, "")
                    },
                    upcomingInput: function() {
                        var a = this.match;
                        return a.length < 20 && (a += this._input.substr(0, 20 - a.length)),
                        (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(/\n/g, "")
                    },
                    showPosition: function() {
                        var a = this.pastInput()
                          , b = new Array(a.length + 1).join("-");
                        return a + this.upcomingInput() + "\n" + b + "^"
                    },
                    next: function() {
                        if (this.done)
                            return this.EOF;
                        this._input || (this.done = !0);
                        var a, b, c, d, e;
                        this._more || (this.yytext = "",
                        this.match = "");
                        for (var f = this._currentRules(), g = 0; g < f.length && (c = this._input.match(this.rules[f[g]]),
                        !c || b && !(c[0].length > b[0].length) || (b = c,
                        d = g,
                        this.options.flex)); g++)
                            ;
                        return b ? (e = b[0].match(/(?:\r\n?|\n).*/g),
                        e && (this.yylineno += e.length),
                        this.yylloc = {
                            first_line: this.yylloc.last_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.last_column,
                            last_column: e ? e[e.length - 1].length - e[e.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + b[0].length
                        },
                        this.yytext += b[0],
                        this.match += b[0],
                        this.matches = b,
                        this.yyleng = this.yytext.length,
                        this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]),
                        this._more = !1,
                        this._input = this._input.slice(b[0].length),
                        this.matched += b[0],
                        a = this.performAction.call(this, this.yy, this, f[d], this.conditionStack[this.conditionStack.length - 1]),
                        this.done && this._input && (this.done = !1),
                        a ? a : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                            text: "",
                            token: null,
                            line: this.yylineno
                        })
                    },
                    lex: function() {
                        var a = this.next();
                        return "undefined" != typeof a ? a : this.lex()
                    },
                    begin: function(a) {
                        this.conditionStack.push(a)
                    },
                    popState: function() {
                        return this.conditionStack.pop()
                    },
                    _currentRules: function() {
                        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                    },
                    topState: function() {
                        return this.conditionStack[this.conditionStack.length - 2]
                    },
                    pushState: function(a) {
                        this.begin(a)
                    }
                };
                return a.options = {},
                a.performAction = function(a, b, c, d) {
                    function e(a, c) {
                        return b.yytext = b.yytext.substr(a, b.yyleng - c)
                    }
                    switch (c) {
                    case 0:
                        if ("\\\\" === b.yytext.slice(-2) ? (e(0, 1),
                        this.begin("mu")) : "\\" === b.yytext.slice(-1) ? (e(0, 1),
                        this.begin("emu")) : this.begin("mu"),
                        b.yytext)
                            return 14;
                        break;
                    case 1:
                        return 14;
                    case 2:
                        return this.popState(),
                        14;
                    case 3:
                        return e(0, 4),
                        this.popState(),
                        15;
                    case 4:
                        return 35;
                    case 5:
                        return 36;
                    case 6:
                        return 25;
                    case 7:
                        return 16;
                    case 8:
                        return 20;
                    case 9:
                        return 19;
                    case 10:
                        return 19;
                    case 11:
                        return 23;
                    case 12:
                        return 22;
                    case 13:
                        this.popState(),
                        this.begin("com");
                        break;
                    case 14:
                        return e(3, 5),
                        this.popState(),
                        15;
                    case 15:
                        return 22;
                    case 16:
                        return 41;
                    case 17:
                        return 40;
                    case 18:
                        return 40;
                    case 19:
                        return 44;
                    case 20:
                        break;
                    case 21:
                        return this.popState(),
                        24;
                    case 22:
                        return this.popState(),
                        18;
                    case 23:
                        return b.yytext = e(1, 2).replace(/\\"/g, '"'),
                        32;
                    case 24:
                        return b.yytext = e(1, 2).replace(/\\'/g, "'"),
                        32;
                    case 25:
                        return 42;
                    case 26:
                        return 34;
                    case 27:
                        return 34;
                    case 28:
                        return 33;
                    case 29:
                        return 40;
                    case 30:
                        return b.yytext = e(1, 2),
                        40;
                    case 31:
                        return "INVALID";
                    case 32:
                        return 5
                    }
                }
                ,
                a.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/],
                a.conditions = {
                    mu: {
                        rules: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
                        inclusive: !1
                    },
                    emu: {
                        rules: [2],
                        inclusive: !1
                    },
                    com: {
                        rules: [3],
                        inclusive: !1
                    },
                    INITIAL: {
                        rules: [0, 1, 32],
                        inclusive: !0
                    }
                },
                a
            }();
            return c.lexer = d,
            b.prototype = c,
            c.Parser = b,
            new b
        }();
        return a = b
    }()
      , i = function(a, b) {
        "use strict";
        function c(a) {
            return a.constructor === f.ProgramNode ? a : (e.yy = f,
            e.parse(a))
        }
        var d = {}
          , e = a
          , f = b;
        return d.parser = e,
        d.parse = c,
        d
    }(h, g)
      , j = function(a) {
        "use strict";
        function b() {}
        function c(a, b, c) {
            if (null == a || "string" != typeof a && a.constructor !== c.AST.ProgramNode)
                throw new f("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + a);
            b = b || {},
            "data"in b || (b.data = !0);
            var d = c.parse(a)
              , e = (new c.Compiler).compile(d, b);
            return (new c.JavaScriptCompiler).compile(e, b)
        }
        function d(a, b, c) {
            function d() {
                var d = c.parse(a)
                  , e = (new c.Compiler).compile(d, b)
                  , f = (new c.JavaScriptCompiler).compile(e, b, void 0, !0);
                return c.template(f)
            }
            if (null == a || "string" != typeof a && a.constructor !== c.AST.ProgramNode)
                throw new f("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + a);
            b = b || {},
            "data"in b || (b.data = !0);
            var e;
            return function(a, b) {
                return e || (e = d()),
                e.call(this, a, b)
            }
        }
        var e = {}
          , f = a;
        return e.Compiler = b,
        b.prototype = {
            compiler: b,
            disassemble: function() {
                for (var a, b, c, d = this.opcodes, e = [], f = 0, g = d.length; g > f; f++)
                    if (a = d[f],
                    "DECLARE" === a.opcode)
                        e.push("DECLARE " + a.name + "=" + a.value);
                    else {
                        b = [];
                        for (var h = 0; h < a.args.length; h++)
                            c = a.args[h],
                            "string" == typeof c && (c = '"' + c.replace("\n", "\\n") + '"'),
                            b.push(c);
                        e.push(a.opcode + " " + b.join(" "))
                    }
                return e.join("\n")
            },
            equals: function(a) {
                var b = this.opcodes.length;
                if (a.opcodes.length !== b)
                    return !1;
                for (var c = 0; b > c; c++) {
                    var d = this.opcodes[c]
                      , e = a.opcodes[c];
                    if (d.opcode !== e.opcode || d.args.length !== e.args.length)
                        return !1;
                    for (var f = 0; f < d.args.length; f++)
                        if (d.args[f] !== e.args[f])
                            return !1
                }
                if (b = this.children.length,
                a.children.length !== b)
                    return !1;
                for (c = 0; b > c; c++)
                    if (!this.children[c].equals(a.children[c]))
                        return !1;
                return !0
            },
            guid: 0,
            compile: function(a, b) {
                this.opcodes = [],
                this.children = [],
                this.depths = {
                    list: []
                },
                this.options = b;
                var c = this.options.knownHelpers;
                if (this.options.knownHelpers = {
                    helperMissing: !0,
                    blockHelperMissing: !0,
                    each: !0,
                    "if": !0,
                    unless: !0,
                    "with": !0,
                    log: !0
                },
                c)
                    for (var d in c)
                        this.options.knownHelpers[d] = c[d];
                return this.accept(a)
            },
            accept: function(a) {
                var b, c = a.strip || {};
                return c.left && this.opcode("strip"),
                b = this[a.type](a),
                c.right && this.opcode("strip"),
                b
            },
            program: function(a) {
                for (var b = a.statements, c = 0, d = b.length; d > c; c++)
                    this.accept(b[c]);
                return this.isSimple = 1 === d,
                this.depths.list = this.depths.list.sort(function(a, b) {
                    return a - b
                }),
                this
            },
            compileProgram: function(a) {
                var b, c = (new this.compiler).compile(a, this.options), d = this.guid++;
                this.usePartial = this.usePartial || c.usePartial,
                this.children[d] = c;
                for (var e = 0, f = c.depths.list.length; f > e; e++)
                    b = c.depths.list[e],
                    2 > b || this.addDepth(b - 1);
                return d
            },
            block: function(a) {
                var b = a.mustache
                  , c = a.program
                  , d = a.inverse;
                c && (c = this.compileProgram(c)),
                d && (d = this.compileProgram(d));
                var e = b.sexpr
                  , f = this.classifySexpr(e);
                "helper" === f ? this.helperSexpr(e, c, d) : "simple" === f ? (this.simpleSexpr(e),
                this.opcode("pushProgram", c),
                this.opcode("pushProgram", d),
                this.opcode("emptyHash"),
                this.opcode("blockValue")) : (this.ambiguousSexpr(e, c, d),
                this.opcode("pushProgram", c),
                this.opcode("pushProgram", d),
                this.opcode("emptyHash"),
                this.opcode("ambiguousBlockValue")),
                this.opcode("append")
            },
            hash: function(a) {
                var b, c, d = a.pairs;
                this.opcode("pushHash");
                for (var e = 0, f = d.length; f > e; e++)
                    b = d[e],
                    c = b[1],
                    this.options.stringParams ? (c.depth && this.addDepth(c.depth),
                    this.opcode("getContext", c.depth || 0),
                    this.opcode("pushStringParam", c.stringModeValue, c.type),
                    "sexpr" === c.type && this.sexpr(c)) : this.accept(c),
                    this.opcode("assignToHash", b[0]);
                this.opcode("popHash")
            },
            partial: function(a) {
                var b = a.partialName;
                this.usePartial = !0,
                a.context ? this.ID(a.context) : this.opcode("push", "depth0"),
                this.opcode("invokePartial", b.name),
                this.opcode("append")
            },
            content: function(a) {
                this.opcode("appendContent", a.string)
            },
            mustache: function(a) {
                this.sexpr(a.sexpr),
                a.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
            },
            ambiguousSexpr: function(a, b, c) {
                var d = a.id
                  , e = d.parts[0]
                  , f = null != b || null != c;
                this.opcode("getContext", d.depth),
                this.opcode("pushProgram", b),
                this.opcode("pushProgram", c),
                this.opcode("invokeAmbiguous", e, f)
            },
            simpleSexpr: function(a) {
                var b = a.id;
                "DATA" === b.type ? this.DATA(b) : b.parts.length ? this.ID(b) : (this.addDepth(b.depth),
                this.opcode("getContext", b.depth),
                this.opcode("pushContext")),
                this.opcode("resolvePossibleLambda")
            },
            helperSexpr: function(a, b, c) {
                var d = this.setupFullMustacheParams(a, b, c)
                  , e = a.id.parts[0];
                if (this.options.knownHelpers[e])
                    this.opcode("invokeKnownHelper", d.length, e);
                else {
                    if (this.options.knownHelpersOnly)
                        throw new f("You specified knownHelpersOnly, but used the unknown helper " + e,a);
                    this.opcode("invokeHelper", d.length, e, a.isRoot)
                }
            },
            sexpr: function(a) {
                var b = this.classifySexpr(a);
                "simple" === b ? this.simpleSexpr(a) : "helper" === b ? this.helperSexpr(a) : this.ambiguousSexpr(a)
            },
            ID: function(a) {
                this.addDepth(a.depth),
                this.opcode("getContext", a.depth);
                var b = a.parts[0];
                b ? this.opcode("lookupOnContext", a.parts[0]) : this.opcode("pushContext");
                for (var c = 1, d = a.parts.length; d > c; c++)
                    this.opcode("lookup", a.parts[c])
            },
            DATA: function(a) {
                if (this.options.data = !0,
                a.id.isScoped || a.id.depth)
                    throw new f("Scoped data references are not supported: " + a.original,a);
                this.opcode("lookupData");
                for (var b = a.id.parts, c = 0, d = b.length; d > c; c++)
                    this.opcode("lookup", b[c])
            },
            STRING: function(a) {
                this.opcode("pushString", a.string)
            },
            INTEGER: function(a) {
                this.opcode("pushLiteral", a.integer)
            },
            BOOLEAN: function(a) {
                this.opcode("pushLiteral", a.bool)
            },
            comment: function() {},
            opcode: function(a) {
                this.opcodes.push({
                    opcode: a,
                    args: [].slice.call(arguments, 1)
                })
            },
            declare: function(a, b) {
                this.opcodes.push({
                    opcode: "DECLARE",
                    name: a,
                    value: b
                })
            },
            addDepth: function(a) {
                0 !== a && (this.depths[a] || (this.depths[a] = !0,
                this.depths.list.push(a)))
            },
            classifySexpr: function(a) {
                var b = a.isHelper
                  , c = a.eligibleHelper
                  , d = this.options;
                if (c && !b) {
                    var e = a.id.parts[0];
                    d.knownHelpers[e] ? b = !0 : d.knownHelpersOnly && (c = !1)
                }
                return b ? "helper" : c ? "ambiguous" : "simple"
            },
            pushParams: function(a) {
                for (var b, c = a.length; c--; )
                    b = a[c],
                    this.options.stringParams ? (b.depth && this.addDepth(b.depth),
                    this.opcode("getContext", b.depth || 0),
                    this.opcode("pushStringParam", b.stringModeValue, b.type),
                    "sexpr" === b.type && this.sexpr(b)) : this[b.type](b)
            },
            setupFullMustacheParams: function(a, b, c) {
                var d = a.params;
                return this.pushParams(d),
                this.opcode("pushProgram", b),
                this.opcode("pushProgram", c),
                a.hash ? this.hash(a.hash) : this.opcode("emptyHash"),
                d
            }
        },
        e.precompile = c,
        e.compile = d,
        e
    }(c)
      , k = function(a, b) {
        "use strict";
        function c(a) {
            this.value = a
        }
        function d() {}
        var e, f = a.COMPILER_REVISION, g = a.REVISION_CHANGES, h = a.log, i = b;
        d.prototype = {
            nameLookup: function(a, b) {
                var c, e;
                return 0 === a.indexOf("depth") && (c = !0),
                e = /^[0-9]+$/.test(b) ? a + "[" + b + "]" : d.isValidJavaScriptVariableName(b) ? a + "." + b : a + "['" + b + "']",
                c ? "(" + a + " && " + e + ")" : e
            },
            compilerInfo: function() {
                var a = f
                  , b = g[a];
                return "this.compilerInfo = [" + a + ",'" + b + "'];\n"
            },
            appendToBuffer: function(a) {
                return this.environment.isSimple ? "return " + a + ";" : {
                    appendToBuffer: !0,
                    content: a,
                    toString: function() {
                        return "buffer += " + a + ";"
                    }
                }
            },
            initializeBuffer: function() {
                return this.quotedString("")
            },
            namespace: "Handlebars",
            compile: function(a, b, c, d) {
                this.environment = a,
                this.options = b || {},
                h("debug", this.environment.disassemble() + "\n\n"),
                this.name = this.environment.name,
                this.isChild = !!c,
                this.context = c || {
                    programs: [],
                    environments: [],
                    aliases: {}
                },
                this.preamble(),
                this.stackSlot = 0,
                this.stackVars = [],
                this.registers = {
                    list: []
                },
                this.hashes = [],
                this.compileStack = [],
                this.inlineStack = [],
                this.compileChildren(a, b);
                var e, f = a.opcodes;
                this.i = 0;
                for (var g = f.length; this.i < g; this.i++)
                    e = f[this.i],
                    "DECLARE" === e.opcode ? this[e.name] = e.value : this[e.opcode].apply(this, e.args),
                    e.opcode !== this.stripNext && (this.stripNext = !1);
                if (this.pushSource(""),
                this.stackSlot || this.inlineStack.length || this.compileStack.length)
                    throw new i("Compile completed with content left on stack");
                return this.createFunctionContext(d)
            },
            preamble: function() {
                var a = [];
                if (this.isChild)
                    a.push("");
                else {
                    var b = this.namespace
                      , c = "helpers = this.merge(helpers, " + b + ".helpers);";
                    this.environment.usePartial && (c = c + " partials = this.merge(partials, " + b + ".partials);"),
                    this.options.data && (c += " data = data || {};"),
                    a.push(c)
                }
                this.environment.isSimple ? a.push("") : a.push(", buffer = " + this.initializeBuffer()),
                this.lastContext = 0,
                this.source = a
            },
            createFunctionContext: function(a) {
                var b = this.stackVars.concat(this.registers.list);
                if (b.length > 0 && (this.source[1] = this.source[1] + ", " + b.join(", ")),
                !this.isChild)
                    for (var c in this.context.aliases)
                        this.context.aliases.hasOwnProperty(c) && (this.source[1] = this.source[1] + ", " + c + "=" + this.context.aliases[c]);
                this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"),
                this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"),
                this.environment.isSimple || this.pushSource("return buffer;");
                for (var d = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"], e = 0, f = this.environment.depths.list.length; f > e; e++)
                    d.push("depth" + this.environment.depths.list[e]);
                var g = this.mergeSource();
                if (this.isChild || (g = this.compilerInfo() + g),
                a)
                    return d.push(g),
                    Function.apply(this, d);
                var i = "function " + (this.name || "") + "(" + d.join(",") + ") {\n  " + g + "}";
                return h("debug", i + "\n\n"),
                i
            },
            mergeSource: function() {
                for (var a, b = "", c = 0, d = this.source.length; d > c; c++) {
                    var e = this.source[c];
                    e.appendToBuffer ? a = a ? a + "\n    + " + e.content : e.content : (a && (b += "buffer += " + a + ";\n  ",
                    a = void 0),
                    b += e + "\n  ")
                }
                return b
            },
            blockValue: function() {
                this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                var a = ["depth0"];
                this.setupParams(0, a),
                this.replaceStack(function(b) {
                    return a.splice(1, 0, b),
                    "blockHelperMissing.call(" + a.join(", ") + ")"
                })
            },
            ambiguousBlockValue: function() {
                this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                var a = ["depth0"];
                this.setupParams(0, a);
                var b = this.topStack();
                a.splice(1, 0, b),
                this.pushSource("if (!" + this.lastHelper + ") { " + b + " = blockHelperMissing.call(" + a.join(", ") + "); }")
            },
            appendContent: function(a) {
                this.pendingContent && (a = this.pendingContent + a),
                this.stripNext && (a = a.replace(/^\s+/, "")),
                this.pendingContent = a
            },
            strip: function() {
                this.pendingContent && (this.pendingContent = this.pendingContent.replace(/\s+$/, "")),
                this.stripNext = "strip"
            },
            append: function() {
                this.flushInline();
                var a = this.popStack();
                this.pushSource("if(" + a + " || " + a + " === 0) { " + this.appendToBuffer(a) + " }"),
                this.environment.isSimple && this.pushSource("else { " + this.appendToBuffer("''") + " }")
            },
            appendEscaped: function() {
                this.context.aliases.escapeExpression = "this.escapeExpression",
                this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
            },
            getContext: function(a) {
                this.lastContext !== a && (this.lastContext = a)
            },
            lookupOnContext: function(a) {
                this.push(this.nameLookup("depth" + this.lastContext, a, "context"))
            },
            pushContext: function() {
                this.pushStackLiteral("depth" + this.lastContext)
            },
            resolvePossibleLambda: function() {
                this.context.aliases.functionType = '"function"',
                this.replaceStack(function(a) {
                    return "typeof " + a + " === functionType ? " + a + ".apply(depth0) : " + a
                })
            },
            lookup: function(a) {
                this.replaceStack(function(b) {
                    return b + " == null || " + b + " === false ? " + b + " : " + this.nameLookup(b, a, "context")
                })
            },
            lookupData: function() {
                this.pushStackLiteral("data")
            },
            pushStringParam: function(a, b) {
                this.pushStackLiteral("depth" + this.lastContext),
                this.pushString(b),
                "sexpr" !== b && ("string" == typeof a ? this.pushString(a) : this.pushStackLiteral(a))
            },
            emptyHash: function() {
                this.pushStackLiteral("{}"),
                this.options.stringParams && (this.push("{}"),
                this.push("{}"))
            },
            pushHash: function() {
                this.hash && this.hashes.push(this.hash),
                this.hash = {
                    values: [],
                    types: [],
                    contexts: []
                }
            },
            popHash: function() {
                var a = this.hash;
                this.hash = this.hashes.pop(),
                this.options.stringParams && (this.push("{" + a.contexts.join(",") + "}"),
                this.push("{" + a.types.join(",") + "}")),
                this.push("{\n    " + a.values.join(",\n    ") + "\n  }")
            },
            pushString: function(a) {
                this.pushStackLiteral(this.quotedString(a))
            },
            push: function(a) {
                return this.inlineStack.push(a),
                a
            },
            pushLiteral: function(a) {
                this.pushStackLiteral(a)
            },
            pushProgram: function(a) {
                null != a ? this.pushStackLiteral(this.programExpression(a)) : this.pushStackLiteral(null)
            },
            invokeHelper: function(a, b, c) {
                this.context.aliases.helperMissing = "helpers.helperMissing",
                this.useRegister("helper");
                var d = this.lastHelper = this.setupHelper(a, b, !0)
                  , e = this.nameLookup("depth" + this.lastContext, b, "context")
                  , f = "helper = " + d.name + " || " + e;
                d.paramsInit && (f += "," + d.paramsInit),
                this.push("(" + f + ",helper ? helper.call(" + d.callParams + ") : helperMissing.call(" + d.helperMissingParams + "))"),
                c || this.flushInline()
            },
            invokeKnownHelper: function(a, b) {
                var c = this.setupHelper(a, b);
                this.push(c.name + ".call(" + c.callParams + ")")
            },
            invokeAmbiguous: function(a, b) {
                this.context.aliases.functionType = '"function"',
                this.useRegister("helper"),
                this.emptyHash();
                var c = this.setupHelper(0, a, b)
                  , d = this.lastHelper = this.nameLookup("helpers", a, "helper")
                  , e = this.nameLookup("depth" + this.lastContext, a, "context")
                  , f = this.nextStack();
                c.paramsInit && this.pushSource(c.paramsInit),
                this.pushSource("if (helper = " + d + ") { " + f + " = helper.call(" + c.callParams + "); }"),
                this.pushSource("else { helper = " + e + "; " + f + " = typeof helper === functionType ? helper.call(" + c.callParams + ") : helper; }")
            },
            invokePartial: function(a) {
                var b = [this.nameLookup("partials", a, "partial"), "'" + a + "'", this.popStack(), "helpers", "partials"];
                this.options.data && b.push("data"),
                this.context.aliases.self = "this",
                this.push("self.invokePartial(" + b.join(", ") + ")")
            },
            assignToHash: function(a) {
                var b, c, d = this.popStack();
                this.options.stringParams && (c = this.popStack(),
                b = this.popStack());
                var e = this.hash;
                b && e.contexts.push("'" + a + "': " + b),
                c && e.types.push("'" + a + "': " + c),
                e.values.push("'" + a + "': (" + d + ")")
            },
            compiler: d,
            compileChildren: function(a, b) {
                for (var c, d, e = a.children, f = 0, g = e.length; g > f; f++) {
                    c = e[f],
                    d = new this.compiler;
                    var h = this.matchExistingProgram(c);
                    null == h ? (this.context.programs.push(""),
                    h = this.context.programs.length,
                    c.index = h,
                    c.name = "program" + h,
                    this.context.programs[h] = d.compile(c, b, this.context),
                    this.context.environments[h] = c) : (c.index = h,
                    c.name = "program" + h)
                }
            },
            matchExistingProgram: function(a) {
                for (var b = 0, c = this.context.environments.length; c > b; b++) {
                    var d = this.context.environments[b];
                    if (d && d.equals(a))
                        return b
                }
            },
            programExpression: function(a) {
                if (this.context.aliases.self = "this",
                null == a)
                    return "self.noop";
                for (var b, c = this.environment.children[a], d = c.depths.list, e = [c.index, c.name, "data"], f = 0, g = d.length; g > f; f++)
                    b = d[f],
                    1 === b ? e.push("depth0") : e.push("depth" + (b - 1));
                return (0 === d.length ? "self.program(" : "self.programWithDepth(") + e.join(", ") + ")"
            },
            register: function(a, b) {
                this.useRegister(a),
                this.pushSource(a + " = " + b + ";")
            },
            useRegister: function(a) {
                this.registers[a] || (this.registers[a] = !0,
                this.registers.list.push(a))
            },
            pushStackLiteral: function(a) {
                return this.push(new c(a))
            },
            pushSource: function(a) {
                this.pendingContent && (this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),
                this.pendingContent = void 0),
                a && this.source.push(a)
            },
            pushStack: function(a) {
                this.flushInline();
                var b = this.incrStack();
                return a && this.pushSource(b + " = " + a + ";"),
                this.compileStack.push(b),
                b
            },
            replaceStack: function(a) {
                var b, d, e, f = "", g = this.isInline();
                if (g) {
                    var h = this.popStack(!0);
                    if (h instanceof c)
                        b = h.value,
                        e = !0;
                    else {
                        d = !this.stackSlot;
                        var i = d ? this.incrStack() : this.topStackName();
                        f = "(" + this.push(i) + " = " + h + "),",
                        b = this.topStack()
                    }
                } else
                    b = this.topStack();
                var j = a.call(this, b);
                return g ? (e || this.popStack(),
                d && this.stackSlot--,
                this.push("(" + f + j + ")")) : (/^stack/.test(b) || (b = this.nextStack()),
                this.pushSource(b + " = (" + f + j + ");")),
                b
            },
            nextStack: function() {
                return this.pushStack()
            },
            incrStack: function() {
                return this.stackSlot++,
                this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot),
                this.topStackName()
            },
            topStackName: function() {
                return "stack" + this.stackSlot
            },
            flushInline: function() {
                var a = this.inlineStack;
                if (a.length) {
                    this.inlineStack = [];
                    for (var b = 0, d = a.length; d > b; b++) {
                        var e = a[b];
                        e instanceof c ? this.compileStack.push(e) : this.pushStack(e)
                    }
                }
            },
            isInline: function() {
                return this.inlineStack.length
            },
            popStack: function(a) {
                var b = this.isInline()
                  , d = (b ? this.inlineStack : this.compileStack).pop();
                if (!a && d instanceof c)
                    return d.value;
                if (!b) {
                    if (!this.stackSlot)
                        throw new i("Invalid stack pop");
                    this.stackSlot--
                }
                return d
            },
            topStack: function(a) {
                var b = this.isInline() ? this.inlineStack : this.compileStack
                  , d = b[b.length - 1];
                return !a && d instanceof c ? d.value : d
            },
            quotedString: function(a) {
                return '"' + a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
            },
            setupHelper: function(a, b, c) {
                var d = []
                  , e = this.setupParams(a, d, c)
                  , f = this.nameLookup("helpers", b, "helper");
                return {
                    params: d,
                    paramsInit: e,
                    name: f,
                    callParams: ["depth0"].concat(d).join(", "),
                    helperMissingParams: c && ["depth0", this.quotedString(b)].concat(d).join(", ")
                }
            },
            setupOptions: function(a, b) {
                var c, d, e, f = [], g = [], h = [];
                f.push("hash:" + this.popStack()),
                this.options.stringParams && (f.push("hashTypes:" + this.popStack()),
                f.push("hashContexts:" + this.popStack())),
                d = this.popStack(),
                e = this.popStack(),
                (e || d) && (e || (this.context.aliases.self = "this",
                e = "self.noop"),
                d || (this.context.aliases.self = "this",
                d = "self.noop"),
                f.push("inverse:" + d),
                f.push("fn:" + e));
                for (var i = 0; a > i; i++)
                    c = this.popStack(),
                    b.push(c),
                    this.options.stringParams && (h.push(this.popStack()),
                    g.push(this.popStack()));
                return this.options.stringParams && (f.push("contexts:[" + g.join(",") + "]"),
                f.push("types:[" + h.join(",") + "]")),
                this.options.data && f.push("data:data"),
                f
            },
            setupParams: function(a, b, c) {
                var d = "{" + this.setupOptions(a, b).join(",") + "}";
                return c ? (this.useRegister("options"),
                b.push("options"),
                "options=" + d) : (b.push(d),
                "")
            }
        };
        for (var j = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), k = d.RESERVED_WORDS = {}, l = 0, m = j.length; m > l; l++)
            k[j[l]] = !0;
        return d.isValidJavaScriptVariableName = function(a) {
            return !d.RESERVED_WORDS[a] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a) ? !0 : !1
        }
        ,
        e = d
    }(d, c)
      , l = function(a, b, c, d, e) {
        "use strict";
        var f, g = a, h = b, i = c.parser, j = c.parse, k = d.Compiler, l = d.compile, m = d.precompile, n = e, o = g.create, p = function() {
            var a = o();
            return a.compile = function(b, c) {
                return l(b, c, a)
            }
            ,
            a.precompile = function(b, c) {
                return m(b, c, a)
            }
            ,
            a.AST = h,
            a.Compiler = k,
            a.JavaScriptCompiler = n,
            a.Parser = i,
            a.parse = j,
            a
        };
        return g = p(),
        g.create = p,
        f = g
    }(f, g, i, j, k);
    return l
}();
if (!Modernizr.svg) {
    $(".svg_img").each(function() {
        $(this).attr("src", $(this).attr("data-alt-path"))
    })
}
function collapsableListsInitialCollapsing() {
    if ($(window).width() < 768) {
        $(".collapsable_list_title").addClass("collapse_trigger").next().slideUp(0)
    } else {
        $(".collapsable_list_title").removeClass("collapse_trigger").next().slideDown(0)
    }
}
function collapsableListsCollapsing() {
    $("body").on("click", ".collapse_trigger", function() {
        if ($(this).next().hasClass("expanded")) {
            $(this).removeClass("clicked").next().slideUp(200).removeClass("expanded")
        } else {
            $(this).closest(".collapsable_elements_holder").find(".collapsable_list_title").removeClass("clicked").next().slideUp(200).removeClass("expanded");
            $(this).addClass("clicked").next().addClass("expanded").slideDown(200)
        }
    })
}
function searchFieldReplacing() {
    if ($(window).width() < 768) {
        $("#search_field_holder_desktop form").appendTo($("#search_field_holder_mobile"))
    } else {
        $("#search_field_holder_mobile form").appendTo($("#search_field_holder_desktop"))
    }
}
function filtersHolderReplacing() {
    if ($(window).width() < 768) {
        $("#filters_holder").appendTo($("#filters_holder_mobile"))
    } else {
        $("#filters_holder").appendTo($("#filters_holder_desktop"))
    }
}
function truncateText() {
    $(".text_holder").dotdotdot({
        ellipsis: "... ",
        height: 70
    });
    $(".truncated_text_40").dotdotdot({
        ellipsis: "... ",
        height: 40
    });
    $(".truncated_text_60").dotdotdot({
        ellipsis: "... ",
        height: 60
    });
    $(".truncated_profile_text").dotdotdot({
        ellipsis: "... ",
        height: 120,
        after: "a.read-more",
        callback: function(truncated) {
            if (!truncated) {
                $(this).find("a.read-more").css("display", "none")
            }
        }
    })
}
var autocollapse = function() {
    var tabs = $("#responsive_tabs");
    var tabsHeight = tabs.innerHeight();
    if (tabsHeight >= 50) {
        while (tabsHeight > 50) {
            $("#collapsed_dropdown_list").show(0);
            var children = tabs.children("li:not(:last-child)");
            var count = children.size();
            $(children[count - 1]).prependTo("#collapsed_drop_down");
            tabsHeight = tabs.innerHeight()
        }
    } else {
        $("#collapsed_dropdown_list").hide(0);
        while (tabsHeight < 50 && $("#collapsed_drop_down").children("li").size() > 0) {
            var collapsed = $("#collapsed_drop_down").children("li");
            var count = collapsed.size();
            $(collapsed[0]).insertBefore(tabs.children("li:last-child"));
            tabsHeight = tabs.innerHeight()
        }
        if (tabsHeight > 50) {
            autocollapse()
        }
    }
};
$(document).ready(function() {
    collapsableListsCollapsing();
    collapsableListsInitialCollapsing();
    searchFieldReplacing();
    filtersHolderReplacing();
    truncateText();
    $(".popover_trigger").popover({
        placement: "right",
        container: "body",
        trigger: "focus"
    });
    $(".popover_trigger_hover").popover({
        container: "body",
        trigger: "focus hover"
    });
    autocollapse();
    $(".elastic_textarea").autosize()
});
$(window).load(function() {});
$(window).resize(function() {
    collapsableListsInitialCollapsing();
    searchFieldReplacing();
    filtersHolderReplacing();
    truncateText();
    autocollapse()
});
$(function() {
    var slider = {
        selector: $("#partners_slider"),
        animationTime: 1e3,
        animationInterval: 5e3,
        maxSlides: 4,
        currentPos: 0,
        visibleSlides: function() {
            var visibleSlides;
            var windowWidth = $(window).width();
            if (windowWidth >= 991) {
                visibleSlides = 4
            } else if (windowWidth < 991 && windowWidth > 767) {
                visibleSlides = 3
            } else {
                visibleSlides = 2
            }
            return visibleSlides
        },
        slides: function() {
            return $("li", this.selector).length
        },
        containerWidth: function() {
            return this.selector.width()
        },
        slideWidth: function() {
            return this.containerWidth() / this.visibleSlides()
        }
    };
    var list = slider.selector.find("ul");
    var listItem = slider.selector.find("li");
    var currentMargin = 0;
    var firstLoad = true;
    function updateSlider() {
        list.css("width", slider.slideWidth() * (slider.slides() + slider.maxSlides));
        listItem.css("width", slider.slideWidth());
        if (slider.currentPos > slider.maxSlides) {
            currentMargin = (slider.currentPos - slider.maxSlides) * slider.slideWidth() * -1
        } else {
            currentMargin = slider.currentPos * slider.slideWidth() * -1
        }
        list.css("margin-left", currentMargin);
        if (firstLoad) {
            for (i = 0; i < slider.maxSlides; i++) {
                listItem.eq(i).clone().appendTo(list)
            }
            list = slider.selector.find("ul");
            listItem = slider.selector.find("li");
            firstLoad = false
        }
    }
    $(window).on("load resize", updateSlider);
    setInterval(nextSlide, slider.animationInterval);
    function nextSlide() {
        if (slider.currentPos === slider.slides() - slider.maxSlides) {
            currentMargin = 0;
            list.css("margin-left", currentMargin);
            slider.currentPos = 1
        } else {
            slider.currentPos++
        }
        currentMargin -= slider.slideWidth();
        list.stop(true, false).animate({
            "margin-left": currentMargin
        }, slider.animationTime, "easeInOutQuad")
    }
});
(function($) {
    $.expr[":"].icontains = jQuery.expr.createPseudo(function(arg) {
        return function(elem) {
            return jQuery(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0
        }
    });
    $.fn.extend({
        contentEditableTextarea: function() {
            var textarea = $(this);
            textarea.after($('<div id="content_editable_textarea_editor">').css("height", textarea.height()).addClass("form-control").attr("contenteditable", true).html(textarea.val())).after(function() {
                var editor = $("#content_editable_textarea_editor");
                var loadPlaceholder = function() {
                    if ("" == editor.html()) {
                        editor.append($('<div id="content_editable_textarea_editor_placeholder">').css("position", "relative").css("color", "#ccc").css("user-select", "none").text(textarea.attr("placeholder")))
                    }
                };
                var removePlaceholder = function() {
                    var placeholder = $("#content_editable_textarea_editor_placeholder");
                    if (placeholder) {
                        placeholder.remove()
                    }
                };
                editor.keyup(function(e) {
                    textarea.val(editor.html())
                });
                editor.click(function(e) {
                    removePlaceholder()
                });
                editor.submit(function(e) {
                    removePlaceholder()
                });
                editor.blur(function(e) {
                    loadPlaceholder()
                });
                textarea.css("display", "none");
                loadPlaceholder()
            })
        }
    });
    $(document).ready(function() {
        $("#search-disorder").keyup(function() {
            $(".disorder-body ul li").css("display", "none");
            $(".disorder-body .panel").css("display", "block");
            $(".disorder-body ul li:icontains('" + $(this).val() + "')").css("display", "list-item");
            $(".disorder-body .panel-body").each(function() {
                var pagingItem = $("#" + $(this).attr("data-feedback"));
                if (0 >= $(this).height()) {
                    $(this).parent().css("display", "none");
                    pagingItem.addClass("disabled")
                } else {
                    $(this).parent().css("display", "block");
                    pagingItem.removeClass("disabled")
                }
            })
        }).trigger("keyup");
        $(".search-disorder-pagination li").each(function() {
            var panel = $(".panel-body[data-feedback='" + $(this).attr("id") + "']");
            if (0 == panel.length) {
                $(this).addClass("disabled")
            }
        });
        $(".carousel-feature-two .item").each(function() {
            $(this).children(":first-child").addClass("hide-controls");
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(":first")
            }
            next.children(":first-child").clone().appendTo($(this));
            var max = $(this).parent().children().length - 2;
            if (max > 2) {
                max = 2
            }
            for (var i = 0; i < max; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(":first")
                }
                next.children(":first-child").clone().appendTo($(this))
            }
            $(this).children(":last-child").addClass("hide-controls")
        }).after(function() {
            $(".carousel-feature-two .item.active .overlay .title").each(function() {
                if (18 != $(this).height()) {
                    $(this).parent().css("margin-top", "-" + ($(this).height() + 19) + "px")
                }
            })
        });
        $(".carousel-feature-two .hide-controls .item-holder").mouseenter(function() {
            $(this).parent().parent().parent().parent().children(".carousel-control").stop(true, true).fadeOut(400)
        }).mouseleave(function() {
            $(this).parent().parent().parent().parent().children(".carousel-control").stop(true, true).fadeIn(400)
        })
    })
})(jQuery);
$(function() {
    initTypeaheadSearch("#search");
    initTypeaheadSearchCaregivers();
    initSearchRelation(".search-relation");
    initCaptcha();
    initSlider();
    initGoogleMaps();
    initHighlight();
    initPreventPasteEvent();
    initLikeRating();
    initJsLink();
    initIframeHeight();
    initSelectAll();
    initRedirectKitty();
    $(".breadcrumb_left").dotdotdot({
        height: 20
    });
    $(".toggle-more").each(function() {
        var $this = $(this);
        var $target = $this.parent().prev().find(".collapsed");
        var $span = $this.find("span");
        var $icon = $this.find("i");
        var originalText = $this.text();
        var toggledText = $this.data("toggled-text");
        $this.click(function(e) {
            e.preventDefault();
            if ($target.hasClass("collapsed")) {
                $target.removeClass("collapsed");
                $span.text(toggledText);
                $icon.attr("class", "glyphicon glyphicon-chevron-up")
            } else {
                $target.addClass("collapsed");
                $span.text(originalText);
                $icon.attr("class", "glyphicon glyphicon-chevron-down")
            }
        })
    });
    Handlebars.registerHelper("compare", function(v1, operator, v2, options) {
        switch (operator) {
        case "==":
            return v1 == v2 ? options.fn(this) : options.inverse(this);
        case "===":
            return v1 === v2 ? options.fn(this) : options.inverse(this);
        case "<":
            return v1 < v2 ? options.fn(this) : options.inverse(this);
        case "<=":
            return v1 <= v2 ? options.fn(this) : options.inverse(this);
        case ">":
            return v1 > v2 ? options.fn(this) : options.inverse(this);
        case ">=":
            return v1 >= v2 ? options.fn(this) : options.inverse(this);
        case "&&":
            return v1 && v2 ? options.fn(this) : options.inverse(this);
        case "||":
            return v1 || v2 ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this)
        }
    })
});
function initSlider() {
    $(".slider-range").each(function(index, elm) {
        var slider = $("#" + $(elm).data("id"));
        $(this).slider({
            range: "max",
            min: parseInt(slider.attr("min")),
            max: parseInt(slider.attr("max")),
            step: parseInt(slider.attr("step")),
            value: slider.val(),
            slide: function(event, ui) {
                slider.val(ui.value);
                $(this).closest(".media").find(".amount").text(ui.value);
                calculateAmount()
            }
        });
        var value = "-";
        if (slider.val()) {
            value = $(this).closest(".media").find(".slider-range-max").slider("value")
        }
        $(this).closest(".media").find(".amount").text(value)
    });
    calculateAmount()
}
function calculateAmount() {
    var parametersNumber = 0;
    var sumTotal = 0;
    $(".sliders_list .amount").each(function() {
        if ($(this).text() != "-") {
            parametersNumber++;
            sumTotal += parseInt($(this).text())
        }
    });
    if (parametersNumber > 0) {
        $("#total_amount").text((sumTotal / parametersNumber).toFixed(1))
    }
}
function initGoogleMaps() {
    $("#showmap").click(function() {
        if ($("#showmap").html() == "Toon kaart") {
            $("#map-canvas").show();
            $("#showmap").html("Verberg kaart")
        } else {
            $("#map-canvas").hide();
            $("#showmap").html("Toon kaart")
        }
        var mapOptions = {
            center: new google.maps.LatLng(52.0378625,5.0840236),
            zoom: 8
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
        var bounds = new google.maps.LatLngBounds;
        var data = [];
        $(".media").each(function(i, elm) {
            if ($(elm).data("location")) {
                data.push([$(elm).data("location"), $(elm).find("h4 a").html()])
            } else {
                $(elm).find(".location").each(function() {
                    if ($(this).data("location")) {
                        data.push([$(this).data("location"), $(this).data("title")])
                    }
                })
            }
        });
        for (key in data) {
            if (data[key][0]) {
                var location = data[key][0].split(",");
                var position = new google.maps.LatLng(location[0],location[1]);
                var marker = new google.maps.Marker({
                    position: position,
                    map: map,
                    title: data[key][1],
                    zIndex: 4
                });
                bounds.extend(position)
            }
        }
        map.fitBounds(bounds)
    })
}
function initCaptcha() {
    $("input[type=hidden]").each(function() {
        if ($(this).data("form-id") != undefined) {
            var formid = $(this).attr("id");
            $("#" + formid).val("zkn")
        }
    })
}
function initHighlight() {
    $("textarea.highlight").click(function(e) {
        e.preventDefault();
        $(e.target).select()
    })
}
function initPreventPasteEvent() {
    $(".prevent-paste-event").bind("paste", function(e) {
        e.preventDefault()
    })
}
function initLikeRating() {
    $("#rating_like").click(function(e) {
        e.preventDefault();
        $.post(Routing.generate("zkn_content_rating_like", {
            id: $(this).attr("data-id")
        }), function(data) {
            var count = parseInt(data.count);
            $(".rating_like_holder").html('<p class="found_this_useful"><span class="number_of_persons">' + count + "</span>" + (count == 1 ? "persoon vindt" : "personen vinden") + " dit een nuttige waardering.</p>")
        })
    })
}
function initJsLink() {
    var baseUrl = window.location.protocol + "//" + window.location.hostname + (window.location.port != 80 ? ":" + window.location.port : "");
    $("span.js_link").each(function() {
        var elm = $(this);
        var link = $("<a>");
        $.each(elm.prop("attributes"), function() {
            if (this.name.substr(0, 14) != "data-param-key" && this.name.substr(0, 16) != "data-param-value") {
                if (this.name == "class") {
                    this.value = this.value.replace("js_link", "")
                }
                if (this.value) {
                    link.attr(this.name, this.value)
                }
            }
        });
        link.html(elm.html());
        var query = window.location.search.removeKey("p");
        var match = $(this).prop("outerHTML").match(/data-param-key\d*/gi);
        $.each(match, function(i, param) {
            var number = param.replace("data-param-key", "");
            query = query.removeKey(elm.attr("data-param-key" + number));
            query = query.addKey(elm.attr("data-param-key" + number), elm.attr("data-param-value" + number))
        });
        link.attr("href", baseUrl + window.location.pathname + query);
        $(this).replaceWith(link)
    })
}
String.prototype.removeKey = function(key) {
    var string = this.toString();
    if (string.indexOf("?") === 0) {
        string = string.slice(1)
    }
    var params = string.split("&");
    var query = [];
    for (var i = 0; i < params.length; i++) {
        var pairs = params[i].split("=");
        if (pairs[0] != key) {
            query.push(params[i])
        }
    }
    return (query.length > 0 ? "?" : "") + query.join("&")
}
;
String.prototype.addKey = function(key, value) {
    var string = this.toString();
    if (string.indexOf("?") != 0) {
        string = "?" + string
    }
    if (string.substr(-1) == "?") {
        string += key + "=" + value
    } else {
        if (string.substr(-1) != "&") {
            string += "&"
        }
        if (string.substr(-1) == "&") {
            string += key + "=" + value
        }
    }
    return string
}
;
function initTypeaheadSearch(element) {
    if ($(element).length == 0) {
        return
    }
    var headerSearch = new Bloodhound({
        datumTokenizer: function(d) {
            return Bloodhound.tokenizers.whitespace(d.title)
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        limit: 6,
        remote: Routing.generate("zkn_content_taxonomy_search", {
            type: "company|person"
        }) + "&zoekterm=%QUERY"
    });
    headerSearch.initialize();
    $(element).typeahead(null, {
        name: "search",
        displayKey: "title",
        source: headerSearch.ttAdapter(),
        templates: {
            footer: Handlebars.compile('<div class="tt-footer"><a href="javascript:;" onclick="$(\'' + element + "').closest('form').submit();\" class=\"title orange\">Bekijk alle resultaten voor '{{query}}'</a></div>"),
            suggestion: Handlebars.compile('{{#if group}}<div class="ta-group">{{group}}</div>{{/if}}' + '<div class="ta-image">' + '<i class="fontello-{{icon}}"></i>' + "</div>" + '<div class="ta-title">' + '<a href="{{url}}">' + "<strong>{{title}}</strong><br />" + '{{#compare type_name "==" "person"}}' + '{{#each type}}{{#compare @index "<" 2}}<div class="ta-row">{{this}}</div>{{/compare}}{{/each}}' + "{{else}}" + "{{type}}" + "{{/compare}}" + "</a>" + "</div>")
        }
    }).on("typeahead:selected", function(event, data, dataset) {
        window.location.href = data.url
    })
}
function initTypeaheadSearchCaregivers() {
    var element = "#search_caregivers_input";
    if ($(element).length == 0) {
        return
    }
    var diseaseName = $("#disease-name").val();
    var headerSearch = new Bloodhound({
        datumTokenizer: function(d) {
            return Bloodhound.tokenizers.whitespace(d.title)
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: Routing.generate("zkn_content_disease_caregivers_json", {
            slug: diseaseName
        }) + "?city=%QUERY"
    });
    headerSearch.initialize();
    $(element).typeahead(null, {
        name: "search_caregivers_input",
        displayKey: "city",
        source: headerSearch.ttAdapter(),
        templates: {
            header: Handlebars.compile('<div class="ta-group">Plaatsen</div>'),
            suggestion: Handlebars.compile('<div class="ta-title"><a href="{{ url }}">{{ city }}</a></div>')
        }
    }).on("typeahead:selected", function(event, data, dataset) {
        window.location.href = data.url
    })
}
function initSearchRelation(element) {
    element = $(element);
    element.addClass("search_typeahead_holder");
    var search = element.find("input")
      , hidden = element.next("input[type=hidden]")
      , current = hidden.val() ? search.val() : null
      , engine = getEngine();
    engine.initialize();
    search.typeahead(null, {
        name: "search",
        displayKey: "title",
        source: engine.ttAdapter(),
        templates: {
            suggestion: Handlebars.compile(getTemplate())
        }
    }).on("typeahead:selected", function(event, data) {
        current = search.val();
        hidden.val(data.type_id)
    }).on("typeahead:closed", function() {
        if (search.val() !== current) {
            current = null;
            search.val("");
            hidden.val("")
        }
    });
    function getEngine() {
        var params = [];
        if (search.data("search-type")) {
            params.push("type=" + search.data("search-type"))
        }
        if (search.data("search-organisation-types")) {
            $.each(search.data("search-organisation-types").split(","), function() {
                params.push("organisation_type[]=" + this)
            })
        }
        if (search.data("search-organisation") !== undefined) {
            params.push("organisation=" + (search.data("search-organisation") ? "1" : "0"))
        }
        params.push("zoekterm=%QUERY");
        return new Bloodhound({
            datumTokenizer: function(d) {
                return Bloodhound.tokenizers.whitespace(d.title)
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            limit: 6,
            remote: Routing.generate("zkn_content_taxonomy_search") + "?" + params.join("&")
        })
    }
    function getTemplate() {
        var template = "";
        if (!search.data("search-type")) {
            template = template + '{{#if group}}<div class="ta-group">{{group}}</div>{{/if}}'
        }
        return template + '<div class="ta-image"><i class="fontello-{{icon}}"></i></div><div class="ta-title"><a><strong>{{title}}</strong><br />{{type}}</a></div>'
    }
}
function initAddReview() {
    var $typeahead = $("#form_search");
    var $type = $('input[name="type"]');
    $type.prop("checked", false);
    var mapping = {
        zorgverlener: "person",
        zorginstelling: "company"
    };
    var type = "zorgverlener";
    var baseUrl = Routing.generate("zkn_content_taxonomy_search") + "?zoekterm=%QUERY&limit=6&type=";
    var step1 = {
        box: $("#add-review__step-1"),
        button: $("#add-review-button__step-1")
    };
    var step2 = {
        box: $("#add-review__step-2"),
        button: $("#add-review-button__step-2")
    };
    var step3 = {
        box: $("#add-review__step-3"),
        button: $("#add-review-button__step-3")
    };
    step1.button.click(function(e) {
        e.preventDefault();
        if (!$type.filter(":checked").length) {
            return
        }
        step2.box.addClass("active");
        step1.button.removeClass("active")
    });
    $type.change(function() {
        var val = $(this).val();
        $(".add-review-item").hide().filter(".add-review-item--" + val).show();
        $typeahead.val("");
        type = val;
        step3.box.removeClass("active");
        step1.button.trigger("click")
    });
    step2.button.click(function(e) {
        e.preventDefault()
    });
    var bloodhound = new Bloodhound({
        datumTokenizer: function(d) {
            return Bloodhound.tokenizers.whitespace(d.title)
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        limit: 6,
        remote: {
            url: baseUrl + mapping[type],
            replace: function() {
                return (baseUrl + mapping[type]).replace("%QUERY", $typeahead.val())
            }
        }
    });
    bloodhound.initialize();
    $typeahead.typeahead(null, {
        name: "search",
        displayKey: "title",
        source: bloodhound.ttAdapter(),
        templates: {
            suggestion: Handlebars.compile('<div class="ta-image">' + '<i class="fontello-{{icon}}"></i>' + "</div>" + '<div class="ta-title">' + '<a href="javascript:void(0);">' + "<strong>{{title}}</strong><br />" + '{{#compare type_name "==" "person"}}' + '{{#each type}}{{#compare @index "<" 2}}<div class="ta-row">{{this}}</div>{{/compare}}{{/each}}' + "{{else}}" + "{{type}}" + "{{/compare}}" + "</a>" + "</div>")
        }
    }).on("typeahead:selected", function(event, data, dataset) {
        var $step3_button = $("#add-review-button__step-3");
        if (data.type_name == "company") {
            $step3_button.attr("href", data.url + (data.organisation ? "/sublocations" : "/waardeer"))
        } else if (data.type_name == "person") {
            $step3_button.attr("href", data.jobs.length == 1 ? data.jobs[0].url + "/waardeer" : data.url + "/kies-dienstverband")
        } else {
            $step3_button.attr("href", data.url + "/waardeer")
        }
        $("#add-review-details").html(Handlebars.compile("<strong>{{title}}</strong><br/><br/>" + '{{#compare type_name "==" "person"}}' + "{{#each type}}" + '{{#compare @index "<" 2}}{{this}}<br/>{{/compare}}' + '{{#compare @index "==" 2}}Meer{{/compare}}' + "{{/each}}" + "{{else}}" + "{{type}}" + "{{/compare}}")(data));
        step2.button.removeClass("active");
        step3.box.addClass("active");
        $step3_button.fancybox({
            afterShow: function() {
                $("#subLocationsForm").submit(function(event) {
                    window.location.href = $("#sublocations_sublocations").val();
                    event.preventDefault()
                });
                $("#personSelectJobForm").submit(function(event) {
                    window.location.href = $("#person_select_job_jobs").val();
                    event.preventDefault()
                })
            },
            beforeLoad: function() {
                if (data.type_name == "company" && !data.organisation || data.type_name == "person" && data.jobs.length == 1) {
                    window.location.href = $step3_button.attr("href");
                    return false
                }
            }
        })
    })
}
function initSearchWidget(host) {
    var widget = $("#search_widget");
    host = host.replace(/\/$/, "");
    var updateForm = function() {
        var type = widget.find('input[name="search_widget[type]"]:checked').val();
        var job = widget.find("#search_widget_job").closest("div.form-group");
        var company = widget.find("#search_widget_company").closest("div.form-group");
        if (type == "none") {
            job.hide();
            company.hide()
        } else if (type == "job") {
            job.show();
            company.hide()
        } else if (type == "company") {
            job.hide();
            company.show()
        }
    };
    var updateWidget = function() {
        var size = parseInt(widget.find("#search_widget_format").val());
        var type = widget.find('input[name="search_widget[type]"]:checked').val();
        var city = widget.find("#search_widget_city").find(":selected");
        var job = widget.find("#search_widget_job").find(":selected");
        var company = widget.find("#search_widget_company").find(":selected");
        var linkUrl = host;
        var scriptUrl = host + "/zkn/widget/index/t/" + size + "/v/3";
        var typeText = "zorgaanbieder";
        var cityText = "Nederland";
        if (type == "job" && job.val().length) {
            typeText = job.text();
            linkUrl += "/" + encodeURI(job.val());
            scriptUrl += "/beroep/" + encodeURI(job.val())
        } else if (type == "company" && company.val().length) {
            typeText = company.text();
            linkUrl += "/" + encodeURI(company.val());
            scriptUrl += "/organisatie/" + encodeURI(company.val())
        }
        if (city.length && city.val().length) {
            cityText = city.text();
            linkUrl += "/" + encodeURI(city.val());
            scriptUrl += "/plaats/" + encodeURI(city.val())
        }
        var script = '<script type="text/javascript" async="async" src="' + scriptUrl + '"></script>';
        var form = '<form action="' + linkUrl + '" method="get" target="_blank">' + '<input type="text" name="zoekterm" placeholder="Zoek, vind &amp; waardeer uw zorgaanbieder">' + '<button type="submit">Zoeken</button>' + "</form>";
        var code = '<div class="zkn-widget-type-' + size + '" id="zkn-widget-type-' + size + '"><div class="zkn-widget-body">' + '<a href="' + host + '" target="_blank"><img src="//' + window.location.host + '/bundles/zkncontent/images/elements/logo_zkn.svg" alt="Zoek, vind en waardeer zorgaanbieders op ZorgkaartNederland.nl"></a>' + '<a href="http://www.npcf.nl" target="_blank"><img src="//' + window.location.host + '/bundles/zkncontent/images/elements/logo_npcf_mobile.svg" alt=""></a>' + "<h3>Vind een " + typeText + " in " + cityText + "</h3>" + form + "</div>" + script + "</div>";
        $("#search_widget_code").text(code);
        $("#search_widget_preview").html($("<iframe>").attr("class", "widget_preview").attr("height", getWidgetHeight(size) + 2).attr("src", scriptUrl + "/preview/1").attr("id", "search_widget_iframe"));
        initIframeHeight()
    };
    widget.find("input, select").change(function() {
        updateForm();
        updateWidget()
    });
    updateForm();
    updateWidget()
}
function initScoreDiseaseWidget(host) {
    var widget = $("#score_disease_widget");
    host = host.replace(/\/$/, "");
    var updateWidget = function() {
        var size = parseInt(widget.find("#score_disease_widget_format").val());
        var disease = "voorbeeld";
        var value = widget.find("#score_disease_widget_disease").val();
        if (value && value !== "") {
            var data = JSON.parse(value);
            var url = "//" + window.location.host + "/" + data.slug;
            var name = data.name;
            disease = data._id
        }
        var scriptUrl = host + "/zkn/widget/score-disease/t/" + size + "/v/2/" + disease;
        var script = '<script type="text/javascript" async="async" src="' + scriptUrl + '"></script>';
        if (disease !== "voorbeeld") {
            var link = name;
            var all_reviews = "";
            var place_txt = "Plaats een waardering";
            if (data.hasPage) {
                link = '<a href="' + url + '" target="_blank">zorg rond ' + name + "</a>";
                all_reviews = '<a href="' + url + '/waarderingen" target="_blank">Bekijk alle waarderingen</a> of ';
                place_txt = "plaats een waardering"
            }
            var code = '<div class="zkn-widget-type-' + size + '" id="zkn-score-disease-widget-' + disease + '"><div class="zkn-widget-body">' + '<a href="' + host + '" target="_blank"><img src="//' + window.location.host + '/bundles/zkncontent/images/elements/logo_zkn.svg" alt="Zoek, vind en waardeer zorgaanbieders op ZorgkaartNederland.nl"></a>' + '<a href="http://www.npcf.nl" target="_blank"><img src="//' + window.location.host + '/bundles/zkncontent/images/elements/logo_npcf_mobile.svg" alt=""></a>' + "De " + link + " is gewaardeerd op ZorgkaartNederland. " + all_reviews + '<a href="//' + window.location.host + '/schrijf-een-waardering" target="_blank">' + place_txt + "</a>" + "</div>" + script + "</div>";
            $("#score_disease_widget_code").removeAttr("placeholder").text(code)
        }
        $("#score_disease_widget_preview").html($("<iframe>").attr("class", "widget_preview").attr("height", getWidgetHeight(size)).attr("src", scriptUrl + "/preview/1").attr("id", "score_disease_widget_iframe"))
    };
    widget.find("input, select").change(function() {
        updateWidget()
    });
    updateWidget()
}
function initScoreWidget(host) {
    var widget = $("#score_widget");
    host = host.replace(/\/$/, "");
    var typeahead = new Bloodhound({
        datumTokenizer: function(d) {
            return Bloodhound.tokenizers.whitespace(d.title)
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        limit: 6,
        remote: Routing.generate("zkn_content_taxonomy_search") + "?zoekterm=%QUERY"
    });
    typeahead.initialize();
    $("input#score_widget_name").typeahead(null, {
        name: "search",
        displayKey: "title",
        source: typeahead.ttAdapter(),
        templates: {
            suggestion: Handlebars.compile('{{#if group}}<div class="ta-group">{{group}}</div>{{/if}}<div class="ta-image"><i class="fontello-{{icon}}"></i></div><div class="ta-title"><span class="title"><strong>{{title}}</strong><br />{{type}}</span></div>')
        }
    }).bind("typeahead:selected", function(obj, selected, name) {
        $("#score_widget_name").attr("data-id", selected.id).attr("data-type-name", selected.type_name).attr("data-type", selected.type).attr("data-name", selected.title).attr("data-url", selected.url).attr("data-organisation", parseInt(selected.organisation));
        updateWidget()
    });
    var updateWidget = function(update) {
        var code;
        var size = parseInt(widget.find("#score_widget_format").val());
        var name = widget.find("#score_widget_name");
        var scriptUrl = host + "/zkn/widget/score/t/" + size + "/v/2";
        var id = parseInt(name.attr("data-id"));
        var name2 = name.attr("data-name");
        var type = name.attr("data-type-name");
        var url = name.attr("data-url");
        var organisation = parseInt(name.attr("data-organisation"));
        if (update && name.is("select")) {
            $.ajax({
                url: "/widget/zoeken.json?id=" + name.val(),
                async: false
            }).done(function(data) {
                id = data.id;
                name2 = data.title;
                type = data.type_name;
                url = data.url;
                organisation = parseInt(data.organisation)
            })
        }
        if (name.val() != "" && id) {
            if (type == "job") {
                scriptUrl += "/beroep"
            } else if (type == "company") {
                scriptUrl += "/organisatie"
            } else if (type == "person") {
                scriptUrl += "/persoon"
            }
            scriptUrl += "/" + id
        } else {
            scriptUrl += "/voorbeeld/0"
        }
        if (name.val() != "" && id) {
            var script = '<script type="text/javascript" async="async" src="' + scriptUrl + '"></script>';
            code = '<div class="zkn-widget-type-' + size + '" id="zkn-score-widget-' + id + '"><div class="zkn-widget-body">' + '<a href="' + host + '" target="_blank"><img src="//' + window.location.host + '/bundles/zkncontent/images/elements/logo_zkn.svg" alt="Zoek, vind en waardeer zorgaanbieders op ZorgkaartNederland.nl"></a>' + '<a href="http://www.npcf.nl" target="_blank"><img src="//' + window.location.host + '/bundles/zkncontent/images/elements/logo_npcf_mobile.svg" alt=""></a>' + '<a href="' + url + '" target="_blank">' + name2 + "</a> is gewaardeerd op ZorgkaartNederland. " + '<a href="' + url + (organisation ? "" : "/waardering") + '" target="_blank">Bekijk alle waarderingen</a> of <a href="' + url + (organisation ? "" : "/waardeer") + '" target="_blank">plaats een waardering</a>' + "</div>" + script + "</div>";
            $("#score_widget_code").removeAttr("placeholder").text(code)
        }
        $("#score_widget_preview").html($("<iframe>").attr("class", "widget_preview").attr("height", getWidgetHeight(size)).attr("src", scriptUrl + "/preview/1").attr("id", "score_widget_iframe"));
        initIframeHeight()
    };
    widget.find("input, select").change(function() {
        updateWidget(true)
    });
    updateWidget()
}
function initRatingWidget() {
    var $widget = $("#rating_widget");
    var codeTemplate = $.parseJSON($widget.data("code-template")).trim();
    var updateWidget = function(update) {
        var id = $widget.find("#rating_widget_location").val();
        var code = codeTemplate.replace(/preview/gi, id);
        $("#rating_widget_preview").html(code);
        if ("preview" !== id) {
            $("#rating_widget_code").text(code)
        }
        if (update) {
            zknCreateWidget(document.getElementById("zkn_rating_widget_" + id))
        }
    };
    $widget.find("select").change(function() {
        updateWidget(true)
    });
    updateWidget(false)
}
function getWidgetHeight(size) {
    if (size == 1) {
        return 200
    } else if (size == 2) {
        return 250
    } else if (size == 3) {
        return 280
    } else if (size == 4) {
        return 250
    }
}
function initIframeHeight() {
    var iframes = $("iframe.iframe-resize");
    if (iframes.length == 0)
        return;
    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventListener = window[eventMethod];
    var eventMessage = eventMethod == "attachEvent" ? "onmessage" : "message";
    eventListener(eventMessage, function(e) {
        if (e.data === parseInt(e.data)) {
            $.each(iframes, function(i, iframe) {
                iframe.height = e.data + "px"
            })
        }
    }, false)
}
function initSelectAll() {
    function addHandler() {
        var trigger = $(this);
        var options = trigger.next().find(".select_all input");
        if (trigger.attr("data-checked") == 1) {
            trigger.attr("data-checked", 0);
            options.each(function() {
                $(this).prop("checked", false)
            })
        } else {
            trigger.attr("data-checked", 1);
            options.each(function() {
                $(this).prop("checked", true)
            })
        }
    }
    $(".select_all").each(function() {
        $(this).click(addHandler)
    });
    $("#select_all").click(addHandler);
    $(".toggle-child-companies").click(function() {
        var $this = $(this);
        if ($this.is(":checked")) {
            var id = $this.data("id");
            $this.closest("ul").find("[data-parent='" + id + "']").each(function() {
                $(this).prop("checked", true)
            })
        }
    })
}
function initTypeaheadSearchHealtcareProviders(element) {
    var headerSearch = new Bloodhound({
        datumTokenizer: function(d) {
            return Bloodhound.tokenizers.whitespace(d.title)
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        limit: 6,
        remote: Routing.generate("zkn_user_contract_search_healthcare_providers") + "?zoekterm=%QUERY"
    });
    headerSearch.initialize();
    $(element).typeahead(null, {
        name: "search",
        displayKey: "title",
        source: headerSearch.ttAdapter(),
        templates: {
            footer: Handlebars.compile('<div class="tt-footer"><a href="javascript:;" onclick="$(\'' + element + "').closest('form').submit();\" class=\"title orange\">Bekijk alle resultaten voor '{{query}}'</a></div>"),
            suggestion: Handlebars.compile('{{#if group}}<div class="ta-group">{{group}}</div>{{/if}}<div class="ta-image"><i class="fontello-{{icon}}"></i></div><div class="ta-title"><a href="{{url}}"><strong>{{title}}</strong><br />{{type}}</a></div>')
        }
    }).on("typeahead:selected", function(event, data, dataset) {
        window.location.href = data.url
    })
}
function initTypeaheadSpecialists(element) {
    var headerSearch = new Bloodhound({
        datumTokenizer: function(d) {
            return Bloodhound.tokenizers.whitespace(d.title)
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        limit: 6,
        remote: Routing.generate("zkn_user_job_search_specialists") + "?zoekterm=%QUERY"
    });
    headerSearch.initialize();
    $(element).typeahead(null, {
        name: "search",
        displayKey: "title",
        source: headerSearch.ttAdapter(),
        templates: {
            footer: Handlebars.compile('<div class="tt-footer"><a href="javascript:;" onclick="$(\'' + element + "').closest('form').submit();\" class=\"title orange\">Bekijk alle resultaten voor '{{query}}'</a></div>"),
            suggestion: Handlebars.compile('{{#if group}}<div class="ta-group">{{group}}</div>{{/if}}<div class="ta-image"><i class="fontello-{{icon}}"></i></div><div class="ta-title"><a href="{{url}}"><strong>{{title}}</strong><br />{{type}}</a></div>')
        }
    }).on("typeahead:selected", function(event, data, dataset) {
        window.location.href = data.url
    })
}
function initRedirectKitty() {
    $("#vergelijkingshulp-form select").change(function() {
        window.location = $(this).val()
    })
}
(function($) {
    $.fn.cookieBar = function(options) {
        var settings = $.extend({
            closeButton: "none",
            secure: false,
            path: "/",
            domain: ""
        }, options);
        return this.each(function() {
            var cookiebar = $(this);
            cookiebar.hide();
            if (settings.closeButton == "none") {
                settings = $.extend({
                    closeButton: ".cookiebar-close"
                }, options)
            }
            if ($.cookie("cookiebar") != "hide") {
                cookiebar.show()
            }
            cookiebar.find(settings.closeButton).click(function() {
                cookiebar.hide();
                $.cookie("cookiebar", "hide", {
                    path: settings.path,
                    secure: settings.secure,
                    domain: settings.domain,
                    expires: 300
                });
                return false
            })
        })
    }
    ;
    $.cookieBar = function(options) {
        if (options.link == undefined) {
            $("body").prepend('<div id="cookieBar"><p>Deze website maakt gebruik van cookies.</p></div>')
        } else {
            $("body").prepend('<div id="cookieBar"><p>Deze website gebruikt cookies om de website te verbeteren en om advertenties te filteren naar uw interesses. Als u geen cookies wilt accepteren kunt u <a href="' + options.link + '" class="readmore">hier</a> klikken voor meer informatie.<a class="cookiebar-close">sluiten</a></p></div>')
        }
        $("#cookieBar").cookieBar(options)
    }
})(jQuery);
(function($) {
    $.cookie = function(key, value, options) {
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);
            if (value === null || value === undefined) {
                options.expires = -1
            }
            if (typeof options.expires === "number") {
                var days = options.expires
                  , t = options.expires = new Date;
                t.setDate(t.getDate() + days)
            }
            value = String(value);
            return document.cookie = [encodeURIComponent(key), "=", options.raw ? value : encodeURIComponent(value), options.expires ? "; expires=" + options.expires.toUTCString() : "", options.path ? "; path=" + options.path : "", options.domain ? "; domain=" + options.domain : "", options.secure ? "; secure" : ""].join("")
        }
        options = value || {};
        var decode = options.raw ? function(s) {
            return s
        }
        : decodeURIComponent;
        var pairs = document.cookie.split("; ");
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split("="); i++) {
            if (decode(pair[0]) === key)
                return decode(pair[1] || "")
        }
        return null
    }
})(jQuery);

