(window.webpackJsonp = window.webpackJsonp || []).push([[54], {
    Wucu: function(l, n, a) {
        "use strict";
        a.d(n, "a", function() {
            return o
        }),
        a.d(n, "b", function() {
            return u
        });
        var e = a("CcnG")
          , o = (a("qAlS"),
        a("Fzqc"),
        a("dWZg"),
        e.qb({
            encapsulation: 2,
            styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:0}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:0}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}"],
            data: {}
        }));
        function u(l) {
            return e.Mb(2, [e.Ib(402653184, 1, {
                _contentWrapper: 0
            }), (l()(),
            e.sb(1, 0, [[1, 0], ["contentWrapper", 1]], null, 1, "div", [["class", "cdk-virtual-scroll-content-wrapper"]], null, null, null, null, null)), e.Bb(null, 0), (l()(),
            e.sb(3, 0, null, null, 0, "div", [["class", "cdk-virtual-scroll-spacer"]], [[4, "transform", null]], null, null, null, null))], null, function(l, n) {
                l(n, 3, 0, n.component._totalContentSizeTransform)
            })
        }
    },
    "nPC+": function(l, n, a) {
        "use strict";
        a.r(n);
        var e = a("CcnG")
          , o = function() {
            return function() {}
        }()
          , u = a("pMnS")
          , t = a("t68o")
          , i = a("zbXB")
          , r = a("NcP4")
          , s = a("xYTU")
          , c = a("CTtL")
          , d = a("DZRV")
          , p = a("Fniy")
          , b = a("21Lb")
          , f = a("OzfB")
          , m = a("NvT6")
          , x = a("Blfk")
          , g = a("dWZg")
          , h = a("Ip0R")
          , C = a("wFw1")
          , y = a("Mr+X")
          , _ = a("SMsm")
          , L = a("seP3")
          , v = a("v9Dh")
          , k = a("eDkP")
          , A = a("qAlS")
          , w = a("lLAP")
          , F = a("Fzqc")
          , O = a("ZYjt")
          , I = a("TtEo")
          , T = a("LC5p")
          , P = a("Z5h4")
          , E = a("gIcY")
          , S = a("de3e")
          , D = a("lzlj")
          , M = a("FVSy")
          , R = a("6UMx")
          , G = a("0/Q6")
          , q = a("Wf4p")
          , N = a("bujt")
          , B = a("UodH")
          , z = a("Lwpp")
          , K = a("wmQ5")
          , H = a("vKJI")
          , U = a("dJrM")
          , j = a("b716")
          , $ = a("/VYK")
          , V = a("6uYy")
          , Q = a("ZYCi")
          , Y = a("Rlre")
          , J = a("La40")
          , Z = a("Wucu")
          , X = function() {
            function l(l) {
                this.zone = l,
                this.componentesAdicionados = []
            }
            return l.prototype.ngOnInit = function() {}
            ,
            l.prototype.compOver = function(l, n) {
                var a = this;
                n.zoom = !0,
                n.preRequisitos && this.zone.runOutsideAngular(function() {
                    a.matrizAluno.periodos.forEach(function(l) {
                        l.componentes.forEach(function(l) {
                            n.preRequisitos.forEach(function(n) {
                                n._id == l._id && (l.preRequisito = !0)
                            })
                        })
                    })
                })
            }
            ,
            l.prototype.compLeave = function(l, n) {
                var a = this;
                n.zoom = !1,
                n.preRequisitos && this.zone.runOutsideAngular(function() {
                    a.matrizAluno.periodos.forEach(function(l) {
                        l.componentes.forEach(function(l) {
                            n.preRequisitos.forEach(function(n) {
                                n._id == l._id && (l.preRequisito = !1)
                            })
                        })
                    })
                })
            }
            ,
            l.prototype.aCursar = function(l) {
                return !!this.componentesAdicionados.find(function(n) {
                    return n._id === l
                })
            }
            ,
            l
        }()
          , W = e.qb({
            encapsulation: 0,
            styles: [[".periodo[_ngcontent-%COMP%]{font-size:11px;color:#fff;background:#3a4ba7;padding:5px;text-align:center;margin-bottom:10px;border-radius:5px}.cursado[_ngcontent-%COMP%]{border:1px solid #167519!important;background:#d1fbd4!important}.aCursar[_ngcontent-%COMP%]{border:1px solid #3a4ba7!important;background:#ebedf8!important}.zoom[_ngcontent-%COMP%]{z-index:1;transition:all .1s ease-in;transform:scale(1.5);border:1.5px solid #1fa8d8!important}.preRequisito[_ngcontent-%COMP%]{border:1px solid #e4b50a!important}.colorCursados[_ngcontent-%COMP%]{color:#aedeb1}.colorSelecionado[_ngcontent-%COMP%]{color:#bfc7fb}.colorCursar[_ngcontent-%COMP%]{color:#dcdcdc}.colorPreRequisito[_ngcontent-%COMP%]{color:#e4b50a}"]],
            data: {}
        });
        function ll(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 14, "div", [], null, null, null, null, null)), (l()(),
            e.sb(1, 0, null, null, 13, "div", [["fxFlex", ""], ["fxLayout", "column"], ["fxLayout.lt-md", "column"], ["fxLayoutGap.lt-md", "0px"], ["style", "border: 1px solid rgb(220, 220, 220);padding: 2px; line-height: 14px; border-radius: 5px; text-align: center; background: rgb(253, 253, 253); height: 5em;"]], [[2, "zoom", null], [2, "preRequisito", null], [2, "zoom", null], [2, "cursado", null], [2, "cursado", null], [2, "aCursar", null]], [[null, "mouseover"], [null, "mouseleave"]], function(l, n, a) {
                var e = !0
                  , o = l.component;
                return "mouseover" === n && (e = !1 !== o.compOver(a, l.context.$implicit) && e),
                "mouseleave" === n && (e = !1 !== o.compLeave(a, l.context.$implicit) && e),
                e
            }, null, null)), e.rb(2, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-md": [1, "fxLayout.lt-md"]
            }, null), e.rb(3, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                "fxLayoutGap.lt-md": [0, "fxLayoutGap.lt-md"]
            }, null), e.rb(4, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(5, 0, null, null, 9, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"], ["style", "font-size: .68em"]], null, null, null, null, null)), e.rb(6, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(7, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(8, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(9, 0, null, null, 5, "p", [["style", "font-size:.68em"]], null, null, null, null, null)), (l()(),
            e.Kb(10, null, [" ", " "])), e.Gb(11, 1), (l()(),
            e.sb(12, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(13, 0, null, null, 1, "span", [["style", "font-size: 1.5em"]], null, null, null, null, null)), (l()(),
            e.Kb(14, null, ["", "h"]))], function(l, n) {
                l(n, 2, 0, "column", "column"),
                l(n, 3, 0, "0px"),
                l(n, 4, 0, ""),
                l(n, 6, 0, "row"),
                l(n, 7, 0, "center center"),
                l(n, 8, 0, "")
            }, function(l, n) {
                l(n, 1, 0, n.context.$implicit.zoom, n.context.$implicit.preRequisito, n.context.$implicit.preRequisito, n.context.$implicit.cursado && n.context.$implicit.zoom || n.context.$implicit.cursado && !n.context.$implicit.zoom, n.context.$implicit.cursado, n.component.aCursar(n.context.$implicit._id));
                var a = e.Lb(n, 10, 0, l(n, 11, 0, e.Cb(n.parent.parent, 0), n.context.$implicit.nome));
                l(n, 10, 0, a),
                l(n, 14, 0, n.context.$implicit.chTotal)
            })
        }
        function nl(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 12, "div", [["fxFlex", ""], ["fxLayout", "column"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 9, "div", [["fxFlex", ""], ["fxLayout", "column"], ["fxLayoutGap", "3px"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 3, "div", [["class", "periodo"], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(8, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(9, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.Kb(10, null, [" ", "\xba SEMESTRE "])), (l()(),
            e.kb(16777216, null, null, 1, null, ll)), e.rb(12, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 2, 0, ""),
                l(n, 4, 0, "column"),
                l(n, 5, 0, "3px"),
                l(n, 6, 0, ""),
                l(n, 8, 0, "row"),
                l(n, 9, 0, "center center"),
                l(n, 12, 0, n.context.$implicit.componentes)
            }, function(l, n) {
                l(n, 10, 0, n.context.$implicit.numero)
            })
        }
        function al(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 15, "div", [["fxFlex", "10"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(2, 0, null, null, 13, "div", [["fxFlex", ""], ["fxLayout", "column"], ["fxLayout.lt-md", "column"], ["fxLayoutGap.lt-md", "0px"], ["style", "border: 1px solid rgb(220, 220, 220);padding: 2px; line-height: 14px; border-radius: 5px; text-align: center; background: rgb(253, 253, 253); height: 5em;"]], [[2, "zoom", null], [2, "cursado", null], [2, "aCursar", null]], [[null, "mouseover"], [null, "mouseleave"]], function(l, n, a) {
                var e = !0
                  , o = l.component;
                return "mouseover" === n && (e = !1 !== o.compOver(a, l.context.$implicit) && e),
                "mouseleave" === n && (e = !1 !== o.compLeave(a, l.context.$implicit) && e),
                e
            }, null, null)), e.rb(3, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-md": [1, "fxLayout.lt-md"]
            }, null), e.rb(4, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                "fxLayoutGap.lt-md": [0, "fxLayoutGap.lt-md"]
            }, null), e.rb(5, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(6, 0, null, null, 9, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"], ["style", "font-size: .68em"]], null, null, null, null, null)), e.rb(7, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(8, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(9, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(10, 0, null, null, 5, "p", [["style", "font-size:.68em"]], null, null, null, null, null)), (l()(),
            e.Kb(11, null, [" ", " "])), e.Gb(12, 1), (l()(),
            e.sb(13, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(14, 0, null, null, 1, "span", [["style", "font-size: 1.5em"]], null, null, null, null, null)), (l()(),
            e.Kb(15, null, ["", "h"]))], function(l, n) {
                l(n, 1, 0, "10"),
                l(n, 3, 0, "column", "column"),
                l(n, 4, 0, "0px"),
                l(n, 5, 0, ""),
                l(n, 7, 0, "row"),
                l(n, 8, 0, "center center"),
                l(n, 9, 0, "")
            }, function(l, n) {
                l(n, 2, 0, n.context.$implicit.zoom, n.context.$implicit.cursado, n.component.aCursar(n.context.$implicit._id));
                var a = e.Lb(n, 11, 0, l(n, 12, 0, e.Cb(n.parent, 0), n.context.$implicit.nome));
                l(n, 11, 0, a),
                l(n, 15, 0, n.context.$implicit.chTotal)
            })
        }
        function el(l) {
            return e.Mb(0, [e.Eb(0, h.A, []), (l()(),
            e.sb(1, 0, null, null, 44, "div", [["fxLayout", "row"], ["fxLayoutGap", "3px"]], null, null, null, null, null)), e.rb(2, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(3, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(),
            e.sb(5, 0, null, null, 3, "mat-card", [["class", "mat-card"]], null, null, null, D.d, D.a)), e.rb(6, 49152, null, 0, M.a, [], null, null), (l()(),
            e.Kb(7, 0, ["", ""])), e.Gb(8, 1), (l()(),
            e.sb(9, 0, null, null, 1, "div", [["fxFlex", ""]], null, null, null, null, null)), e.rb(10, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(11, 0, null, null, 34, "div", [["fxLayout", "row"], ["fxLayoutGap", "5px"]], null, null, null, null, null)), e.rb(12, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(13, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(14, 0, null, null, 7, "div", [["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(15, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(16, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(17, 0, null, null, 2, "mat-icon", [["class", "colorCursados mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(18, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], null, null), (l()(),
            e.Kb(-1, 0, ["fiber_manual_record"])), (l()(),
            e.sb(20, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Cursado"])), (l()(),
            e.sb(22, 0, null, null, 7, "div", [["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(23, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(24, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(25, 0, null, null, 2, "mat-icon", [["class", "colorSelecionado mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(26, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], null, null), (l()(),
            e.Kb(-1, 0, ["fiber_manual_record"])), (l()(),
            e.sb(28, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Selecionado"])), (l()(),
            e.sb(30, 0, null, null, 7, "div", [["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(31, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(32, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(33, 0, null, null, 2, "mat-icon", [["class", "colorPreRequisito mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(34, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], null, null), (l()(),
            e.Kb(-1, 0, ["fiber_manual_record"])), (l()(),
            e.sb(36, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Pr\xe9-Requisito"])), (l()(),
            e.sb(38, 0, null, null, 7, "div", [["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(39, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(40, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(41, 0, null, null, 2, "mat-icon", [["class", "colorCursar mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(42, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], null, null), (l()(),
            e.Kb(-1, 0, ["fiber_manual_record"])), (l()(),
            e.sb(44, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["A cursar"])), (l()(),
            e.sb(46, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(47, 0, null, null, 4, "div", [["fxLayout", "row"], ["fxLayoutGap", "3px"]], null, null, null, null, null)), e.rb(48, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(49, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, nl)), e.rb(51, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.sb(52, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(53, 0, null, null, 7, "div", [["fxLayout", "row"], ["fxLayoutGap", "3px"]], null, null, null, null, null)), e.rb(54, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(55, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(56, 0, null, null, 4, "div", [["class", "periodo"], ["fxFlex", "10"], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(57, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(58, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(59, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(-1, null, [" OPTATIVOS "])), (l()(),
            e.sb(61, 0, null, null, 4, "div", [["fxLayout", "row"], ["fxLayoutGap", "3px"]], null, null, null, null, null)), e.rb(62, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(63, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, al)), e.rb(65, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.sb(66, 0, null, null, 0, "br", [], null, null, null, null, null))], function(l, n) {
                var a = n.component;
                l(n, 2, 0, "row"),
                l(n, 3, 0, "3px"),
                l(n, 10, 0, ""),
                l(n, 12, 0, "row"),
                l(n, 13, 0, "5px"),
                l(n, 15, 0, "row"),
                l(n, 16, 0, "center center"),
                l(n, 18, 0),
                l(n, 23, 0, "row"),
                l(n, 24, 0, "center center"),
                l(n, 26, 0),
                l(n, 31, 0, "row"),
                l(n, 32, 0, "center center"),
                l(n, 34, 0),
                l(n, 39, 0, "row"),
                l(n, 40, 0, "center center"),
                l(n, 42, 0),
                l(n, 48, 0, "row"),
                l(n, 49, 0, "3px"),
                l(n, 51, 0, null == a.matrizAluno ? null : a.matrizAluno.periodos),
                l(n, 54, 0, "row"),
                l(n, 55, 0, "3px"),
                l(n, 57, 0, "row"),
                l(n, 58, 0, "center center"),
                l(n, 59, 0, "10"),
                l(n, 62, 0, "row"),
                l(n, 63, 0, "3px"),
                l(n, 65, 0, null == a.matrizAluno ? null : a.matrizAluno.componentesOptativos)
            }, function(l, n) {
                var a = n.component
                  , o = e.Lb(n, 7, 0, l(n, 8, 0, e.Cb(n, 0), null == a.matrizAluno ? null : a.matrizAluno.nome));
                l(n, 7, 0, o),
                l(n, 17, 0, e.Cb(n, 18).inline, "primary" !== e.Cb(n, 18).color && "accent" !== e.Cb(n, 18).color && "warn" !== e.Cb(n, 18).color),
                l(n, 25, 0, e.Cb(n, 26).inline, "primary" !== e.Cb(n, 26).color && "accent" !== e.Cb(n, 26).color && "warn" !== e.Cb(n, 26).color),
                l(n, 33, 0, e.Cb(n, 34).inline, "primary" !== e.Cb(n, 34).color && "accent" !== e.Cb(n, 34).color && "warn" !== e.Cb(n, 34).color),
                l(n, 41, 0, e.Cb(n, 42).inline, "primary" !== e.Cb(n, 42).color && "accent" !== e.Cb(n, 42).color && "warn" !== e.Cb(n, 42).color)
            })
        }
        var ol = a("AytR")
          , ul = a("PeSF")
          , tl = a("5JmO")
          , il = a.n(tl)
          , rl = a("TruH")
          , sl = a.n(rl)
          , cl = a("r2bM")
          , dl = a("wd/R");
        il.a.vfs = sl.a.pdfMake.vfs;
        var pl = a("yGS9")
          , bl = function() {
            function l(l, n) {
                this.http = l,
                this._AESEncryptDecryptService = n
            }
            return l.prototype.turmasDisponiveis = function(l) {
                return this.http.get(ol.a.aaMarticulaUrl + "/aluno/" + l + "/turmas/disponiveis")
            }
            ,
            l.prototype.turmasDisponiveisUN = function(l) {
                return this.http.get(ol.a.aaMarticulaUrl + "/aluno/" + l + "/turmasUN/disponiveis")
            }
            ,
            l.prototype.atualizaContatos = function(l, n) {
                return this.http.put(ol.a.aaMarticulaUrl + "/aluno/" + l + "/updateContatos", n)
            }
            ,
            l.prototype.efetuarMatricula = function(l, n, a, e) {
                var o = this._AESEncryptDecryptService.encrypt(JSON.stringify(a), e.split("").reverse().join(""));
                return this.http.post(ol.a.aaMarticulaUrl + "/aluno/" + l + "/matricular/" + n, {
                    _rpo: o
                })
            }
            ,
            l.prototype.unEfetuarMatricula = function(l, n, a, e, o, u) {
                var t = this._AESEncryptDecryptService.encrypt(JSON.stringify({
                    componetesTurmas: a,
                    simulacao: e,
                    valoresCurso: o
                }), u.split("").reverse().join(""));
                return this.http.post(ol.a.aaMarticulaUrl + "/aluno/" + l + "/unMatricular/" + n, {
                    _rpo: t
                })
            }
            ,
            l.prototype.chkCondicaoMatricula = function(l) {
                return this.http.get(ol.a.aaMarticulaUrl + "/aluno/" + l + "/chkCondMatricula")
            }
            ,
            l.prototype.setAluno = function(l) {
                this.aluno = l
            }
            ,
            l.prototype.getAluno = function() {
                return this.aluno
            }
            ,
            l.prototype.setComponente = function(l) {
                this.componente = l
            }
            ,
            l.prototype.getComponente = function() {
                return this.componente
            }
            ,
            l.prototype.setComponentesLista = function(l) {
                this.componentesLista = l
            }
            ,
            l.prototype.getComponentesLista = function() {
                return this.componentesLista
            }
            ,
            l.prototype.gerarPDFPlanoDeEnsino = function(l) {
                var n = [{
                    style: "headerFooterStyle",
                    table: {
                        widths: [70, "*"],
                        body: [[{
                            image: cl.a,
                            width: 70,
                            height: 55,
                            rowSpan: 3,
                            margin: [19, 12, 0, 0]
                        }, {
                            text: "FACULDADE INDEPENDENTE DO NORDESTE",
                            fontSize: 16,
                            bold: !0,
                            alignment: "center",
                            margin: [0, 12, 0, 0]
                        }], [{}, {
                            text: "Recredenciada pela Portaria MEC n\xba 903, de 01/09/15 - Publicada no D.O.U. de 02/09/15, se\xe7\xe3o 1, p. 23 - c\xf3d. e-MEC: 1758",
                            fontSize: 8,
                            alignment: "center"
                        }], [{}, {}], [{}, {
                            text: "PLANO DE ENSINO",
                            bold: !0,
                            fontSize: 14,
                            alignment: "center",
                            margin: [-70, 7, 0, 5]
                        }], [{}, {}]]
                    },
                    layout: "noBorders"
                }, {
                    style: "subHeaderStyle",
                    table: {
                        widths: ["auto", 30, "auto"],
                        body: [[{
                            text: [{
                                text: "Componente Curricular: ",
                                bold: !0
                            }, {
                                text: l.nomeComponente.toUpperCase()
                            }]
                        }, "", ""]]
                    },
                    layout: "noBorders"
                }, {
                    style: "subHeaderStyle",
                    table: {
                        widths: ["*", "*", "*"],
                        body: [[{
                            text: [{
                                text: "C\xf3digo: ",
                                bold: !0
                            }, {
                                text: l.codigoComponente
                            }]
                        }, {
                            text: [{
                                text: "Carga Hor\xe1ria Total: ",
                                bold: !0
                            }, {
                                text: l.chComponente + "h"
                            }]
                        }, {
                            text: [{
                                text: "Per\xedodo Letivo: ",
                                bold: !0
                            }, {
                                text: l.periodo.descricao
                            }]
                        }]]
                    },
                    layout: "noBorders"
                }, {
                    style: "subHeaderStyle",
                    table: {
                        widths: ["auto", "auto", "auto"],
                        body: [[{
                            text: [{
                                text: "Docente" + (l.professores.length > 1 ? "s: " : ": "),
                                bold: !0
                            }, {
                                text: this.getProfessores(l.professores)
                            }]
                        }, " ", " "]]
                    },
                    layout: "noBorders"
                }]
                  , a = l.conteudos.map(function(l) {
                    return [{
                        text: l.dia ? dl(l.dia).format("DD/MM/YYYY") : "",
                        alignment: "center"
                    }, {
                        text: l.descricao ? l.descricao : "",
                        style: "texto"
                    }]
                });
                a.unshift([{
                    text: "DIA",
                    alignment: "center",
                    bold: !0
                }, {
                    text: "CONTE\xdaDO",
                    alignment: "center",
                    bold: !0
                }]);
                var e = [{
                    stack: [{
                        text: "EMENTA",
                        style: "tituloSecao"
                    }, {
                        text: " ",
                        style: "texto"
                    }, {
                        text: l.planoDeEnsino.ementa ? l.planoDeEnsino.ementa : "",
                        style: "texto"
                    }],
                    unbreakable: !0
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    stack: [{
                        text: "OBJETIVO GERAL",
                        style: "tituloSecao"
                    }, {
                        text: " ",
                        style: "texto"
                    }, {
                        text: l.planoDeEnsino.objetivoGeral ? l.planoDeEnsino.objetivoGeral : "",
                        style: "texto"
                    }],
                    unbreakable: !0
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    stack: [{
                        text: "OBJETIVOS ESPEC\xcdFICOS",
                        style: "tituloSecao"
                    }, {
                        text: " ",
                        style: "texto"
                    }, {
                        text: l.planoDeEnsino.objetivosEspecificos ? l.planoDeEnsino.objetivosEspecificos : "",
                        style: "texto"
                    }],
                    unbreakable: !0
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    stack: [{
                        text: "COMPET\xcaNCIAS E HABILIDADES",
                        style: "tituloSecao"
                    }, {
                        text: " ",
                        style: "texto"
                    }, {
                        text: l.planoDeEnsino.competencias ? l.planoDeEnsino.competencias : "",
                        style: "texto"
                    }],
                    unbreakable: !0
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    stack: [{
                        text: "CONTE\xdaDO PROGRAM\xc1TICO",
                        style: "tituloSecao"
                    }, {
                        text: " ",
                        style: "texto"
                    }, {
                        text: pl(l.planoDeEnsino.conteudoProgramatico ? l.planoDeEnsino.conteudoProgramatico : ""),
                        style: "texto"
                    }],
                    unbreakable: !0
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    stack: [{
                        text: "ESTRAT\xc9GIAS DE ENSINO",
                        style: "tituloSecao"
                    }, {
                        text: " ",
                        style: "texto"
                    }, {
                        text: pl(l.planoDeEnsino.estrategiaDeEnsino ? l.planoDeEnsino.estrategiaDeEnsino : ""),
                        style: "texto"
                    }],
                    unbreakable: !0
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    stack: [{
                        text: "SISTEMA DE AVALIA\xc7\xc3O",
                        style: "tituloSecao"
                    }, {
                        text: " ",
                        style: "texto"
                    }, {
                        text: pl(l.planoDeEnsino.sistemaDeAvaliacao ? l.planoDeEnsino.sistemaDeAvaliacao : ""),
                        style: "texto"
                    }],
                    unbreakable: !0
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    stack: [{
                        text: "SISTEMA DE PROMO\xc7\xc3O",
                        style: "tituloSecao"
                    }, {
                        text: " ",
                        style: "texto"
                    }, {
                        text: l.planoDeEnsino.sistemaDePromocao ? l.planoDeEnsino.sistemaDePromocao : "",
                        style: "texto"
                    }],
                    unbreakable: !0
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    stack: [{
                        text: "RECURSOS AUDIOVISUAIS E TECNOL\xd3GICOS",
                        style: "tituloSecao"
                    }, {
                        text: " ",
                        style: "texto"
                    }, {
                        text: pl(l.planoDeEnsino.recursosAVTech ? l.planoDeEnsino.recursosAVTech : ""),
                        style: "texto"
                    }],
                    unbreakable: !0
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    stack: [{
                        text: "BIBLIOGRAFIA B\xc1SICA",
                        style: "tituloSecao"
                    }, {
                        text: " ",
                        style: "texto"
                    }, {
                        text: l.planoDeEnsino.bibliografiaBasica ? l.planoDeEnsino.bibliografiaBasica : "",
                        style: "texto"
                    }],
                    unbreakable: !0
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    stack: [{
                        text: "BIBLIOGRAFIA COMPLEMENTAR",
                        style: "tituloSecao"
                    }, {
                        text: " ",
                        style: "texto"
                    }, {
                        text: l.planoDeEnsino.bibliografiaComplementar ? l.planoDeEnsino.bibliografiaComplementar : "",
                        style: "texto"
                    }],
                    unbreakable: !0
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    stack: [{
                        text: "BIBLIOGRAFIA RECOMENDADA",
                        style: "tituloSecao"
                    }, {
                        text: " ",
                        style: "texto"
                    }, {
                        text: pl(l.planoDeEnsino.bibliografiaRecomendada ? l.planoDeEnsino.bibliografiaRecomendada : ""),
                        style: "texto"
                    }],
                    unbreakable: !0
                }, {
                    text: " ",
                    style: "texto",
                    pageBreak: "after"
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    text: "CRONOGRAMA DE ATIVIDADES",
                    bold: !0,
                    fontSize: 12,
                    alignment: "center"
                }, {
                    text: " ",
                    style: "texto"
                }, {
                    style: "subHeaderStyle",
                    table: {
                        widths: ["auto", "*"],
                        body: a
                    }
                }];
                il.a.createPdf({
                    pageSize: "A4",
                    pageMargins: [25, 180, 25, 70],
                    header: n,
                    content: e,
                    footer: function(l, n) {
                        return [{
                            style: "footerStyle",
                            table: {
                                widths: ["*"],
                                body: [[{
                                    text: "P\xe1gina " + l.toString() + " de " + n,
                                    noWrap: !0,
                                    alignment: "right",
                                    fontSize: 8,
                                    margin: [0, 0, 20, 0]
                                }], [{
                                    text: "Av. Lu\xeds Eduardo Magalh\xe3es, 1305 - Candeias, Vit\xf3ria da Conquista-BA, CEP: 45028-440",
                                    fontSize: 8,
                                    alignment: "center"
                                }], [{
                                    text: "CNPJ: 03.262.477/0001-33  -  Tel: (77) 3161-1000 - Site: www.fainor.com.br",
                                    fontSize: 8,
                                    alignment: "center"
                                }]]
                            },
                            layout: "noBorders"
                        }]
                    },
                    pageBreakBefore: function(l, n, a, e) {
                        return 1 === l.headlineLevel && 0 === n.length && l.pageNumbers.length > 1 && l.unbreakable
                    },
                    styles: {
                        headerFooterStyle: {
                            fontSize: 10,
                            margin: [0, 0, 0, 0]
                        },
                        footerStyle: {
                            fontSize: 10,
                            margin: [0, 25, 0, 0]
                        },
                        subHeaderStyle: {
                            fontSize: 10,
                            margin: [30, 0, 30, 0]
                        },
                        tableExample2: {
                            fontSize: 10,
                            alignment: "right",
                            margin: [0, 0, 0, 0]
                        },
                        tableHeader: {
                            bold: !0,
                            alignment: "center",
                            fontSize: 10,
                            color: "black"
                        },
                        tituloSecao: {
                            bold: !0,
                            alignment: "center",
                            fontSize: 12,
                            color: "black",
                            margin: [0, 0, 0, 0]
                        },
                        texto: {
                            fontSize: 10,
                            margin: [0, 0, 0, 0],
                            alignment: "justify"
                        }
                    }
                }).open()
            }
            ,
            l.prototype.getProfessores = function(l) {
                for (var n = "", a = 0; a < l.length; a++)
                    n = l[a].nome.toUpperCase() + (a + 1 < l.length ? ", " : "");
                return n
            }
            ,
            l
        }()
          , fl = a("qXBG")
          , ml = function() {
            function l(l, n) {
                this.data = l,
                this.dialogRef = n
            }
            return l.prototype.ngOnInit = function() {}
            ,
            l.prototype.onNoClick = function() {
                this.dialogRef.close()
            }
            ,
            l
        }()
          , xl = a("UxvS")
          , gl = a("5Yjg")
          , hl = a("ziqz")
          , Cl = function() {
            function l(l, n, a) {
                this.data = l,
                this.dialogRef = n,
                this.sanitizer = a,
                this.contratoLido = !0,
                this.viewOnly = !1,
                this.viewOnly = l.viewOnly,
                this.aluno = l.aluno
            }
            return l.prototype.ngOnInit = function() {
                this.getContratoString(),
                this.montaContrato()
            }
            ,
            l.prototype.onNoClick = function() {
                this.dialogRef.close(this.contratoLido)
            }
            ,
            l.prototype.montaContrato = function() {
                for (var l = "", n = 0; n < this.aluno.resumoFinanceira.parcelas.length; n++) {
                    var a = '<tr class="c24"><td class="c34" colspan="1" rowspan="1"><p class="c5 c14"><span class="c0"></span></p><p class="c5"><span class="c0">{numeroParcela}&ordf; PARCELA</span></p></td><td class="c25" colspan="1" rowspan="1"><p class="c5"><span class="c0">{valorParcela} </span></p></td><td class="c36" colspan="1" rowspan="1"><p class="c5"><span class="c0">{vencimento}</span></p></td></tr>';
                    l += a = (a = (a = a.replace(new RegExp("{numeroParcela}","g"), this.aluno.resumoFinanceira.parcelas[n].numero)).replace(new RegExp("{valorParcela}","g"), this.formatarMoeda(this.aluno.resumoFinanceira.parcelas[n].valor))).replace(new RegExp("{vencimento}","g"), dl(this.aluno.resumoFinanceira.parcelas[n].dia).format("DD/MM/YYYY"))
                }
                this.contratoString = this.contratoString.replace(new RegExp("{nomeDoAluno}","g"), this.aluno.nome ? this.aluno.nome.toUpperCase() : "").replace(new RegExp("{curso}","g"), this.aluno.curso ? this.aluno.curso : "").replace(new RegExp("{periodo}","g"), this.aluno.resumoFinanceira.periodo ? this.aluno.resumoFinanceira.periodo : "").replace(new RegExp("{ra}","g"), this.aluno.ra ? this.aluno.ra : "").replace(new RegExp("{rg}","g"), this.aluno.rg ? this.aluno.rg : "").replace(new RegExp("{cpf}","g"), this.aluno.cpf ? this.aluno.cpf : "").replace(new RegExp("{nascimento}","g"), this.aluno.nascimento ? dl(this.aluno.nascimento).format("DD/MM/YYYY") : "").replace(new RegExp("{estadoCivil}","g"), this.aluno.estado_civil ? this.aluno.estado_civil.toUpperCase() : "").replace(new RegExp("{logradouro}","g"), this.aluno.endereco.logradouro ? this.aluno.endereco.logradouro.toUpperCase().concat(this.aluno.endereco.numero ? "  n\xba " + this.aluno.endereco.numero : "") : "").replace(new RegExp("{bairro}","g"), this.aluno.endereco.bairro ? this.aluno.endereco.bairro.toUpperCase() : "").replace(new RegExp("{cidade}","g"), this.aluno.endereco.cidade ? this.aluno.endereco.cidade.toUpperCase() : "").replace(new RegExp("{cep}","g"), this.aluno.endereco.cep ? this.aluno.endereco.cep.toUpperCase() : "").replace(new RegExp("{telefone}","g"), this.aluno.telCelular ? this.aluno.telCelular : "").replace(new RegExp("{email}","g"), this.aluno.email ? this.aluno.email : "").replace(new RegExp("{nomeDoPai}","g"), this.aluno.nome_pai ? this.aluno.nome_pai.toUpperCase() : "").replace(new RegExp("{nomeDaMae}","g"), this.aluno.nome_mae ? this.aluno.nome_mae.toUpperCase() : "").replace(new RegExp("{listaParcelas}","g"), l).replace(new RegExp("{qtdeParcelas}","g"), this.aluno.resumoFinanceira.parcelas.length).replace(new RegExp("{valorSemestre}","g"), this.formatarMoeda(this.aluno.resumoFinanceira.totalAPagar)).replace(new RegExp("{valorPorExtenso}","g"), this.valorMonetarioPorExtenso(this.aluno.resumoFinanceira.totalAPagar)).replace(new RegExp("{parcelasExtenso}","g"), this.numeroParaExtenso(this.aluno.resumoFinanceira.parcelas.length)),
                this.contratoHtml = this.sanitizer.bypassSecurityTrustHtml(this.contratoString)
            }
            ,
            l.prototype.formatarMoeda = function(l) {
                return "string" == typeof l && (l = parseFloat(l)),
                l.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })
            }
            ,
            l.prototype.numeroParaExtenso = function(l) {
                var n = ["zero", "um", "dois", "tr\xeas", "quatro", "cinco", "seis", "sete", "oito", "nove"]
                  , a = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"]
                  , e = ["", "", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"]
                  , o = ["", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];
                if (0 === l)
                    return "zero";
                function u(l) {
                    if (0 === l)
                        return "";
                    if (100 === l)
                        return "cem";
                    var u = ""
                      , t = Math.floor(l / 100)
                      , i = Math.floor(l % 100 / 10)
                      , r = l % 10;
                    return t > 0 && (u += o[t]),
                    (i > 0 || r > 0) && (t > 0 && (u += " e "),
                    1 === i ? u += a[r] : (i > 0 && (u += e[i]),
                    r > 0 && (i > 0 && (u += " e "),
                    u += n[r]))),
                    u
                }
                for (var t = Math.floor(l).toString(), i = [], r = t.length; r > 0; r -= 3)
                    i.unshift(parseInt(t.slice(Math.max(0, r - 3), r)));
                var s = "";
                for (r = 0; r < i.length; r++) {
                    var c = i[r]
                      , d = i.length - 1 - r;
                    0 !== c && ("" !== s && (s += 0 === d && 0 !== i[r - 1] && c < 100 ? " e " : " "),
                    s += u(c),
                    d > 0 && (1 === d ? s += " mil" : 2 === d ? s += 1 === c ? " milh\xe3o" : " milh\xf5es" : 3 === d && (s += 1 === c ? " bilh\xe3o" : " bilh\xf5es")))
                }
                return s || "zero"
            }
            ,
            l.prototype.valorMonetarioPorExtenso = function(l) {
                var n = l.toFixed(2).split(".")
                  , a = parseInt(n[0])
                  , e = parseInt(n[1])
                  , o = "";
                return 0 === a && 0 === e ? "zero reais" : (a > 0 && (o += this.numeroParaExtenso(a),
                o += 1 === a ? " real" : " reais"),
                e > 0 && (a > 0 && (o += " e "),
                o += this.numeroParaExtenso(e),
                o += 1 === e ? " centavo" : " centavos"),
                o)
            }
            ,
            l.prototype.getContratoString = function() {
                this.contratoString = '\n    <html><head><meta content="text/html; charset=UTF-8" http-equiv="content-type"><style type="text/css">ol.lst-kix_list_1-3{list-style-type:none}ol.lst-kix_list_1-4{list-style-type:none}ol.lst-kix_list_1-5{list-style-type:none}ol.lst-kix_list_1-6{list-style-type:none}ol.lst-kix_list_1-0{list-style-type:none}.lst-kix_list_1-4>li{counter-increment:lst-ctn-kix_list_1-4}ol.lst-kix_list_1-1{list-style-type:none}ol.lst-kix_list_1-2{list-style-type:none}ol.lst-kix_list_1-6.start{counter-reset:lst-ctn-kix_list_1-6 0}.lst-kix_list_1-1>li{counter-increment:lst-ctn-kix_list_1-1}ol.lst-kix_list_1-3.start{counter-reset:lst-ctn-kix_list_1-3 0}ol.lst-kix_list_1-2.start{counter-reset:lst-ctn-kix_list_1-2 0}ol.lst-kix_list_1-8.start{counter-reset:lst-ctn-kix_list_1-8 0}.lst-kix_list_1-0>li:before{content:"" counter(lst-ctn-kix_list_1-0,lower-latin) ") "}ol.lst-kix_list_1-5.start{counter-reset:lst-ctn-kix_list_1-5 0}ol.lst-kix_list_1-7{list-style-type:none}.lst-kix_list_1-1>li:before{content:"" counter(lst-ctn-kix_list_1-1,lower-latin) ". "}.lst-kix_list_1-2>li:before{content:"" counter(lst-ctn-kix_list_1-2,lower-roman) ". "}.lst-kix_list_1-7>li{counter-increment:lst-ctn-kix_list_1-7}ol.lst-kix_list_1-8{list-style-type:none}.lst-kix_list_1-3>li:before{content:"" counter(lst-ctn-kix_list_1-3,decimal) ". "}.lst-kix_list_1-4>li:before{content:"" counter(lst-ctn-kix_list_1-4,lower-latin) ". "}ol.lst-kix_list_1-0.start{counter-reset:lst-ctn-kix_list_1-0 0}.lst-kix_list_1-0>li{counter-increment:lst-ctn-kix_list_1-0}.lst-kix_list_1-6>li{counter-increment:lst-ctn-kix_list_1-6}.lst-kix_list_1-7>li:before{content:"" counter(lst-ctn-kix_list_1-7,lower-latin) ". "}.lst-kix_list_1-3>li{counter-increment:lst-ctn-kix_list_1-3}.lst-kix_list_1-5>li:before{content:"" counter(lst-ctn-kix_list_1-5,lower-roman) ". "}.lst-kix_list_1-6>li:before{content:"" counter(lst-ctn-kix_list_1-6,decimal) ". "}ol.lst-kix_list_1-7.start{counter-reset:lst-ctn-kix_list_1-7 0}.lst-kix_list_1-2>li{counter-increment:lst-ctn-kix_list_1-2}.lst-kix_list_1-5>li{counter-increment:lst-ctn-kix_list_1-5}.lst-kix_list_1-8>li{counter-increment:lst-ctn-kix_list_1-8}ol.lst-kix_list_1-4.start{counter-reset:lst-ctn-kix_list_1-4 0}.lst-kix_list_1-8>li:before{content:"" counter(lst-ctn-kix_list_1-8,lower-roman) ". "}ol.lst-kix_list_1-1.start{counter-reset:lst-ctn-kix_list_1-1 0}ol{margin:0;padding:0}table td,table th{padding:0}.c33{border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:0pt;border-right-width:0pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:0pt;border-top-style:solid;border-left-style:solid;border-bottom-width:0pt;width:219.8pt;border-top-color:#000000;border-bottom-style:solid}.c25{border-right-style:solid;padding:0pt 3.5pt 0pt 3.5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:middle;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:134.4pt;border-top-color:#000000;border-bottom-style:solid}.c26{border-right-style:solid;padding:0pt 3.5pt 0pt 3.5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:128pt;border-top-color:#000000;border-bottom-style:solid}.c34{border-right-style:solid;padding:0pt 3.5pt 0pt 3.5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:middle;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:95.7pt;border-top-color:#000000;border-bottom-style:solid}.c20{border-right-style:solid;padding:0pt 3.5pt 0pt 3.5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:134.4pt;border-top-color:#000000;border-bottom-style:solid}.c35{border-right-style:solid;padding:0pt 3.5pt 0pt 3.5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:95.7pt;border-top-color:#000000;border-bottom-style:solid}.c36{border-right-style:solid;padding:0pt 3.5pt 0pt 3.5pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:middle;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:128pt;border-top-color:#000000;border-bottom-style:solid}.c10{border-right-style:solid;padding:5pt 5pt 5pt 5pt;border-bottom-color:#000000;border-top-width:0pt;border-right-width:0pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:0pt;border-top-style:solid;border-left-style:solid;border-bottom-width:0pt;width:279.8pt;border-top-color:#000000;border-bottom-style:solid}.c3{-webkit-text-decoration-skip:none;color:#000000;font-weight:700;vertical-align:baseline;text-decoration-skip-ink:none;font-size:10pt;font-family:"Arial";font-style:normal}.c2{padding-top:0pt;text-indent:36pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:justify;height:12pt}.c4{padding-top:0pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:justify;height:12pt}.c11{padding-top:12pt;padding-bottom:6pt;line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:center;}.c6{padding-top:0pt;text-indent:36pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:justify}.c1{color:#000000;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:10pt;font-family:"Arial";font-style:normal}.c0{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:10pt;font-family:"Arial";font-style:normal;text-align:center}.c22{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:14pt;font-family:"Liberation Sans";font-style:normal}.c19{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:"Liberation Serif";font-style:normal}.c8{padding-top:0pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:left;height:12pt}.c9{padding-top:0pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:justify}.c5{padding-top:0pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:center}.c23{padding-top:0pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:right}.c17{padding-top:0pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:left}.c13{padding-top:0pt;padding-bottom:0pt;line-height:1.0;text-align:center;height:12pt}.c28{margin-left:auto;border-spacing:0;border-collapse:collapse;margin-right:auto}.c30{border-spacing:0;border-collapse:collapse;margin-right:auto}.c15{color:#000000;text-decoration:none;vertical-align:baseline;font-style:italic}.c18{padding-top:0pt;padding-bottom:0pt;line-height:1.0;text-align:center}.c27{font-size:12pt;font-weight:700;font-family:"Arial";text-align:center;}.c16{font-size:10pt;font-weight:700;font-family:"Arial"}.c21{background-color:#ffffff;max-width:481.9pt;padding:56.7pt 56.7pt 56.7pt 56.7pt}.c12{font-size:10pt;font-weight:400;font-family:"Arial"}.c24{height:0pt}.c29{page-break-after:avoid}.c7{background-color:#00ff00}.c31{height:26.9pt}.c32{text-indent:36pt}.c14{height:12pt}.title{padding-top:12pt;color:#000000;font-size:14pt;padding-bottom:6pt;font-family:"Liberation Sans";line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:center}.subtitle{padding-top:18pt;color:#666666;font-size:24pt;padding-bottom:4pt;font-family:"Georgia";line-height:1.0;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:12pt;font-family:"Liberation Serif"}p{margin:0;color:#000000;font-size:12pt;font-family:"Liberation Serif"}h1{padding-top:12pt;color:#000000;font-size:14pt;padding-bottom:6pt;font-family:"Liberation Sans";line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-weight:700;font-size:18pt;padding-bottom:4pt;font-family:"Liberation Serif";line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:14pt;color:#000000;font-weight:700;font-size:14pt;padding-bottom:4pt;font-family:"Liberation Serif";line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:12pt;color:#000000;font-weight:700;font-size:12pt;padding-bottom:2pt;font-family:"Liberation Serif";line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:11pt;color:#000000;font-weight:700;font-size:11pt;padding-bottom:2pt;font-family:"Liberation Serif";line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:10pt;color:#000000;font-weight:700;font-size:10pt;padding-bottom:2pt;font-family:"Liberation Serif";line-height:1.0;page-break-after:avoid;orphans:2;widows:2;text-align:left}</style></head><body class="c21 doc-content"><p class="c11 title"><span class="c27">CONTRATO DE PRESTA&Ccedil;&Atilde;O DE SERVI&Ccedil;OS EDUCACIONAIS</span></p><p class="c5 c29 c14 title"><span class="c1"></span></p><p class="c8"><span class="c19"></span></p><p class="c5"><span class="c1">CURSO: {curso}</span></p><p class="c5"><span class="c1">PER&Iacute;ODO LETIVO: {periodo}</span></p><p class="c5 c14"><span class="c1"></span></p><p class="c5 c14"><span class="c1"></span></p><p class="c5 c14"><span class="c1"></span></p><p class="c9" id="h.gjdgxs"><span class="c1">CONTRATANTE</span><span class="c0">: </span><span class="c12">{nomeDoAluno}</span></p><p class="c9"><span class="c1">RG</span><span class="c0">:</span><span class="c12">&nbsp;{rg}</span><span class="c0">&nbsp; </span><span class="c1">- &nbsp;CPF</span><span class="c0">: </span><span class="c12">{cpf}</span><span class="c0">&nbsp; - &nbsp;</span><span class="c1">DATA DE NASCIMENTO</span><span class="c0">: </span><span class="c0">{nascimento}</span></p><p class="c9"><span class="c16">ESTADO CIVIL</span><span class="c0">&nbsp;: {estadoCivil}</span></p><p class="c9"><span class="c1">ENDERE&Ccedil;O</span><span class="c0">: </span><span class="c0">{logradouro}</span></p><p class="c9"><span class="c1">BAIRRO</span><span class="c0">: </span><span class="c0">{bairro}</span></p><p class="c9"><span class="c1">CIDADE</span><span class="c0">: </span><span class="c12">{cidade} &nbsp; - &nbsp; </span><span class="c16">CEP</span><span class="c0">: {cep}</span></p><p class="c9"><span class="c1">TELEFONE</span><span class="c0">: </span><span class="c12">{telefone} &nbsp; - &nbsp; &nbsp;</span><span class="c1">EMAIL</span><span class="c0">: </span><span class="c12">{email}</span></p><p class="c4"><span class="c1"></span></p><p class="c9"><span class="c1">ALUNO(A) BENEFICI&Aacute;RIO(A)</span><span class="c0">: </span><span class="c12">{nomeDoAluno} &nbsp;( </span><span class="c1">RA: </span><span class="c0">{ra} )</span></p><p class="c9"><span class="c16">DATA DE NASCIMENTO</span><span class="c12">&nbsp;: {nascimento}</span></p><p class="c9"><span class="c1">FILHO (A) DE</span><span class="c0">: </span><span class="c12">{nomeDoPai} &nbsp; &nbsp;</span><span class="c1">E DE</span><span class="c0">: </span><span class="c12">{nomeDaMae}</span></p><p class="c9"><span class="c1">ENDERE&Ccedil;O</span><span class="c0">:</span><span class="c0">&nbsp;{logradouro}</span></p><p class="c9"><span class="c1">BAIRRO</span><span class="c0">: </span><span class="c12">{bairro}</span></p><p class="c9"><span class="c1">CIDADE</span><span class="c0">: </span><span class="c12">{cidade} &nbsp; - &nbsp; </span><span class="c1">CEP</span><span class="c0">: </span><span class="c12">{cep}</span></p><p class="c9"><span class="c1">TELEFONE</span><span class="c0">:</span><span class="c12">&nbsp;{telefone} &nbsp; - &nbsp; &nbsp;</span><span class="c16">EMAIL</span><span class="c12">: {email}</span></p><p class="c4"><span class="c0"></span></p><p class="c4"><span class="c0"></span></p><p class="c4"><span class="c1"></span></p><p class="c9"><span class="c1">CONTRATADA</span><span class="c0">: </span><span class="c1">FAINOR FACULDADE INDEPENDENTE DO NORDESTE LTDA</span><span class="c0">, devidamente inscrita no CNPJ sob n.&ordm; 03.262.477/0001-33, entidade mantenedora da FACULDADE INDEPENDENTE DO NORDESTE, com sede na Av. Lu&iacute;s Eduardo Magalh&atilde;es, n.&ordm; 1305, Vit&oacute;ria da Conquista &ndash; Ba, </span><span class="c12">representada pelo procurador que assina este Contrato</span><span class="c0">.</span></p><p class="c4"><span class="c0"></span></p><p class="c8"><span class="c1"></span></p><p class="c5"><span class="c1">DA LEGISLA&Ccedil;&Atilde;O APLIC&Aacute;VEL</span></p><p class="c4"><span class="c0"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 1&ordf;</span><span class="c0">&nbsp;&ndash; O presente CONTRATO DE ADES&Atilde;O &eacute; celebrado nos termos da Lei n&ordm; 8.078 de 11/09/90 (C&oacute;digo de Defesa do Consumidor), sob a &eacute;gide dos artigos 206, 207 e 209 da Constitui&ccedil;&atilde;o Federal, e Lei 9.394 de 20/12/96 (Lei de Diretrizes e Bases da Educa&ccedil;&atilde;o Nacional - LDB).</span></p><p class="c4"><span class="c0"></span></p><p class="c4"><span class="c0"></span></p><p class="c5"><span class="c1">DO OBJETO</span></p><p class="c4"><span class="c0"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 2&ordf;</span><span class="c0">&nbsp;&ndash; O objeto do presente contrato &eacute; a presta&ccedil;&atilde;o de servi&ccedil;os educacionais pela </span><span class="c1">CONTRATADA, </span><span class="c0">durante um semestre letivo, ao BENEFICI&Aacute;RIO(A) aqui denominado ALUNO(A), matriculado(a) em turma regular de qualquer dos cursos superiores de gradua&ccedil;&atilde;o mantidos pela </span><span class="c1">CONTRATADA</span><span class="c0">, durante um semestre letivo, e que tenha efetuado a ades&atilde;o a este instrumento. </span></p><p class="c4"><span class="c0"></span></p><p class="c4"><span class="c0"></span></p><p class="c5"><span class="c1">DA ADES&Atilde;O AO CONTRATO</span></p><p class="c4"><span class="c0"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 3&ordf;</span><span class="c0">&nbsp;&ndash; O(A) ALUNO(A), ou pessoa por ele(a) indicado como respons&aacute;vel, doravante denominado </span><span class="c1">CONTRATANTE, </span><span class="c0">ao realizar a matr&iacute;cula inicial ou a rematr&iacute;cula, mediante o preenchimento dos requerimentos necess&aacute;rios, bem como apresenta&ccedil;&atilde;o de TODOS os documentos solicitados, e efetuando o pagamento da primeira parcela da semestralidade, adere integralmente ao presente Contrato.</span></p><p class="c4"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo &Uacute;nico &ndash; </span><span class="c0">No caso de rematr&iacute;cula, o &ldquo;aceite&rdquo; do presente Contrato poder&aacute; ser efetuado por meio digital no &ldquo;Portal do Aluno&rdquo; mantido pela </span><span class="c1">CONTRATADA, </span><span class="c0">dispon&iacute;vel em</span><span class="c12">&nbsp;</span><span class="c16">https://portal.fainor.com.br</span><span class="c0">, mediante o uso da senha individual do(a) ALUNO(A), sendo equivalente &agrave; sua assinatura. </span></p><p class="c2"><span class="c0"></span></p><p class="c2"><span class="c0"></span></p><p class="c4"><span class="c0"></span></p><p class="c5"><span class="c1">DA DESCRI&Ccedil;&Atilde;O DOS SERVI&Ccedil;OS</span></p><p class="c4"><span class="c0"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 4&ordf;</span><span class="c0">&nbsp;&ndash; Os servi&ccedil;os educacionais objeto do presente contrato ser&atilde;o prestados por meio da </span><span class="c1">CONTRATADA </span><span class="c0">ao ALUNO(A), compreendendo as aulas e demais atividades escolares, inclu&iacute;do o processo de avalia&ccedil;&atilde;o do rendimento escolar do(a) ALUNO(A), bem como a cess&atilde;o do uso, individual ou coletivo, de laborat&oacute;rios, equipamentos, bibliotecas, n&uacute;cleos de estudo, cl&iacute;nicas e outros espa&ccedil;os f&iacute;sicos e virtuais necess&aacute;rios ao processo de ensino-aprendizagem, em conformidade com os programas e os curr&iacute;culos dos cursos e com o Calend&aacute;rio Acad&ecirc;mico, atendidas as disposi&ccedil;&otilde;es da legisla&ccedil;&atilde;o educacional, do Projeto Pedag&oacute;gico do Curso e dos Atos Normativos pertinentes.</span></p><p class="c6"><span class="c1">Par&aacute;grafo Primeiro</span><span class="c0">&nbsp;&ndash; Os valores da semestralidade e de suas respectivas parcelas n&atilde;o compreendem: provas substitutivas, &nbsp;componentes &nbsp;curriculares &nbsp;extras, &nbsp;adequa&ccedil;&otilde;es curriculares, &nbsp;cursos &nbsp;de &nbsp;f&eacute;rias, &nbsp;planos de curso, hist&oacute;rico escolar antes da conclus&atilde;o do curso, segunda via do hist&oacute;rico escolar ap&oacute;s a conclus&atilde;o do curso, segunda via do diploma. Tais documentos ser&atilde;o cobrados em separado pela </span><span class="c1">CONTRATADA,</span><span class="c0">&nbsp;conforme tabela existente na Secretaria Geral de Cursos.</span></p><p class="c4"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Segundo &ndash; </span><span class="c0">Tamb&eacute;m n&atilde;o est&atilde;o inclusos nos valores contratados as despesas com: provedores de acesso, equipamentos de inform&aacute;tica, programas de computador, materiais de uso obrigat&oacute;rio individual ou coletivo, taxas com transporte, hospedagem, cursos ou servi&ccedil;os opcionais, ou de uso facultativo.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Terceiro - </span><span class="c0">S&atilde;o de inteira responsabilidade da </span><span class="c1">CONTRATADA</span><span class="c0">&nbsp;o planejamento e a presta&ccedil;&atilde;o dos servi&ccedil;os educacionais, no que se refere &agrave; orienta&ccedil;&atilde;o did&aacute;tico-pedag&oacute;gica, &agrave; fixa&ccedil;&atilde;o do curr&iacute;culo, programas e cargas hor&aacute;rias das disciplinas, &agrave; designa&ccedil;&atilde;o e substitui&ccedil;&atilde;o de professores, &agrave; escolha de formas de avalia&ccedil;&atilde;o do rendimento escolar do(a) ALUNO(A) e o agendamento de datas para sua realiza&ccedil;&atilde;o, bem como a elabora&ccedil;&atilde;o do Calend&aacute;rio Acad&ecirc;mico, observadas a legisla&ccedil;&atilde;o de ensino e as determina&ccedil;&otilde;es do Minist&eacute;rio da Educa&ccedil;&atilde;o, sem inger&ecirc;ncia do(a) </span><span class="c1">CONTRATANTE.</span></p><p class="c6"><span class="c0">&nbsp;</span></p><p class="c6"><span class="c1">Par&aacute;grafo Quarto - </span><span class="c0">As aulas e demais atividades ser&atilde;o ministradas em locais e hor&aacute;rios indicados pela </span><span class="c1">CONTRATADA</span><span class="c0">, tendo em vista a natureza, o conte&uacute;do e as t&eacute;cnicas did&aacute;tico-pedag&oacute;gicas. </span><span class="c1">Em casos excepcionais, quando as aulas n&atilde;o puderem ocorrer de forma presencial, estas poder&atilde;o ser substitu&iacute;das por aulas ministradas de forma remota em meio informado previamente pela CONTRATADA.</span></p><p class="c2"><span class="c1"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Quinto &ndash; </span><span class="c0">A </span><span class="c1">CONTRATADA</span><span class="c0">&nbsp;se reserva ao direito de programar, eventualmente, aulas e outras atividades pedag&oacute;gicas em dias ou hor&aacute;rios diferente daqueles nos quais normalmente essas atividades seriam realizadas, inclusive aos s&aacute;bados, domingos e feriados, e durante os per&iacute;odos originalmente previstos como f&eacute;rias ou recesso escolar, sempre que isso for necess&aacute;rio para integraliza&ccedil;&atilde;o da carga hor&aacute;ria legalmente exigida.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Sexto &ndash; </span><span class="c0">A </span><span class="c1">CONTRATADA</span><span class="c0">&nbsp;poder&aacute; deslocar o curso ou algumas de suas atividades para outros locais, para atender &agrave;s necessidades espec&iacute;ficas do curso, de espa&ccedil;o f&iacute;sico ou de composi&ccedil;&atilde;o adequada de turmas.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo S&eacute;timo &ndash; </span><span class="c0">Os espa&ccedil;os utilizados para realiza&ccedil;&atilde;o das aulas te&oacute;ricas e/ou pr&aacute;ticas ser&atilde;o equipadas &uacute;nica e exclusivamente com ventiladores. A instala&ccedil;&atilde;o de ar-condicionado ser&aacute; da exclusiva liberalidade da CONTRATADA.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Oitavo &ndash; </span><span class="c0">Em aulas te&oacute;ricas poder&aacute; haver a jun&ccedil;&atilde;o de duas ou mais turmas, e nas aulas pr&aacute;ticas poder&aacute; ocorrer a subdivis&atilde;o das turmas.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Nono</span><span class="c0">&nbsp;&ndash; Nos cursos onde existe o componente curricular de Est&aacute;gio Obrigat&oacute;rio, este poder&aacute; ser realizado no turno diverso do contratado inicialmente, de acordo com o n&uacute;mero de alunos(as) por grupo e disponibilidade do campo de est&aacute;gio. Ser&aacute; de inteira responsabilidade da </span><span class="c1">CONTRATADA</span><span class="c0">&nbsp;a organiza&ccedil;&atilde;o dos grupos. </span></p><p class="c4"><span class="c0"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 5&ordf;</span><span class="c0">&nbsp;&ndash; O n&uacute;mero m&iacute;nimo para cria&ccedil;&atilde;o de uma turma &eacute; de 30 (trinta) ALUNOS(AS). Havendo n&uacute;mero inferior, &agrave; </span><span class="c1">CONTRATADA </span><span class="c0">fica facultada a cria&ccedil;&atilde;o da turma, podendo o(a) </span><span class="c1">ALUNO(A) </span><span class="c0">optar por outro curso com vagas oferecidas, conforme edital do vestibular, ou decidir pela devolu&ccedil;&atilde;o integral da quantia eventualmente paga.</span></p><p class="c4"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo &Uacute;nico</span><span class="c0">&nbsp;&ndash; Ap&oacute;s iniciada uma turma, se for verificada a impossibilidade de sua continuidade por apresentar n&uacute;mero insuficiente de alunos(as) para viabiliz&aacute;-la, a </span><span class="c1">CONTRATADA </span><span class="c0">n&atilde;o poder&aacute; ser responsabilizada por eventuais perdas ou danos em favor do </span><span class="c16">CONTRATANTE</span><span class="c1">, </span><span class="c0">por se tratar de fato provocado por terceiros, alheio a sua vontade, podendo, entretanto, realocar o(a) ALUNO(A) para outra turma ou curso, caso haja interesse desse.</span></p><p class="c4"><span class="c0"></span></p><p class="c4"><span class="c0"></span></p><p class="c4"><span class="c0"></span></p><p class="c23"><span class="c0">&nbsp; &nbsp; &nbsp; </span></p><p class="c5"><span class="c1">DA VIG&Ecirc;NCIA E RESCIS&Atilde;O</span></p><p class="c5 c14"><span class="c1"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 6&ordf;</span><span class="c0">&nbsp;&ndash; A vig&ecirc;ncia do presente Contrato inicia-se na data da matr&iacute;cula (inicial ou renova&ccedil;&atilde;o) do(a) ALUNO(A) no semestre letivo a ser cursado, encerrando-se na data do seu t&eacute;rmino, ressalvadas as hip&oacute;teses de rescis&atilde;o contratual.</span></p><p class="c4"><span class="c1"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 7&ordf;</span><span class="c0">&nbsp;&ndash; A matr&iacute;cula s&oacute; se efetivar&aacute; com a apresenta&ccedil;&atilde;o de TODOS os documentos solicitados, pagamento da primeira parcela da semestralidade, assinatura do presente instrumento contratual, e desde que cumpridos pelo(a) CONTRATANTE todos os requisitos necess&aacute;rios, em conson&acirc;ncia com a legisla&ccedil;&atilde;o educacional.</span><span class="c1">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></p><p class="c4"><span class="c1"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Primeiro</span><span class="c0">&nbsp;&ndash; O requerimento da </span><span class="c0">rematr&iacute;cula</span><span class="c0">&nbsp;somente ser&aacute; deferido, ap&oacute;s certifica&ccedil;&atilde;o pelo Setor Financeiro que o(a) CONTRATANTE esteja adimplente com suas obriga&ccedil;&otilde;es financeiras, inclusive aquelas decorrentes de semestres anteriores.</span></p><p class="c6"><span class="c0">&nbsp;</span></p><p class="c6"><span class="c1">Par&aacute;grafo Segundo</span><span class="c0">&nbsp;&ndash; Quando o(a) </span><span class="c1">CONTRATANTE</span><span class="c0">&nbsp;quiser efetuar a renova&ccedil;&atilde;o da matr&iacute;cula para o per&iacute;odo letivo posterior, antes que haja uma posi&ccedil;&atilde;o definitiva quanto a integraliza&ccedil;&atilde;o de todos os componente curriculares, a rematr&iacute;cula poder&aacute; ser aceita, por&eacute;m em car&aacute;ter condicional, e ser&aacute; confirmada somente depois de constatado que n&atilde;o h&aacute; nenhuma pend&ecirc;ncia de natureza acad&ecirc;mica que impe&ccedil;a o ingresso no novo per&iacute;odo letivo.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Terceiro &ndash; </span><span class="c0">Se ficar </span><span class="c12">constatada</span><span class="c0">&nbsp;alguma pend&ecirc;ncia de natureza acad&ecirc;mica que impe&ccedil;a o(a) ALUNO(A) de matricular-se no novo per&iacute;odo letivo, a renova&ccedil;&atilde;o da matr&iacute;cula n&atilde;o se concretizar&aacute;.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Quarto</span><span class="c0">&nbsp;&ndash; As matr&iacute;culas nas turmas de Est&aacute;gio Obrigat&oacute;rio ficar&atilde;o condicionadas </span><span class="c12">&agrave; oferta</span><span class="c0">&nbsp;de vagas em turno, hor&aacute;rio e local, de acordo com a disponibilidade da </span><span class="c1">CONTRATADA </span><span class="c0">e das unidades concedentes de est&aacute;gio</span><span class="c1">. </span><span class="c0">Os(As) primeiros(as) alunos(as) que se matricularem poder&atilde;o escolher a turma, turno, hor&aacute;rio e local do est&aacute;gio.</span></p><p class="c6"><span class="c0">&nbsp;</span></p><p class="c6"><span class="c1">Par&aacute;grafo Quinto - </span><span class="c0">O n&uacute;mero m&aacute;ximo de alunos(as) por turma n&atilde;o ser&aacute; ultrapassado, sendo autorizada apenas a matr&iacute;cula em turma com vaga,</span><span class="c1">&nbsp;</span><span class="c0">devendo, obrigatoriamente, o(a) </span><span class="c1">CONTRATANTE </span><span class="c0">obedecer ao Calend&aacute;rio Acad&ecirc;mico. E uma vez encerradas as vagas de determinada turma, o(a) aluno(a) dever&aacute; matricular-se em outra turma.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Sexto</span><span class="c0">&nbsp;&ndash; Eventuais aulas assistidas antes do estabelecimento do v&iacute;nculo entre as partes </span><span class="c1">N&Atilde;O</span><span class="c0">&nbsp;poder&atilde;o integrar o quadro de frequ&ecirc;ncia, constituindo-se em faltas para o per&iacute;odo.</span></p><p class="c4"><span class="c0"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 8&ordf;</span><span class="c1">&nbsp;&ndash; </span><span class="c0">O(A) </span><span class="c1">CONTRATANTE</span><span class="c0">&nbsp;e o(a) ALUNO(A) assumem total responsabilidade e responder&atilde;o com exclusividade, quanto &agrave;s declara&ccedil;&otilde;es prestadas neste contrato relativas &agrave; sua aptid&atilde;o legal, bem como, quanto &agrave; autenticidade dos documentos, p&uacute;blicos ou particulares, apresentados para a competente matr&iacute;cula.</span></p><p class="c4"><span class="c1"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Primeiro</span><span class="c0">&nbsp;&ndash; O(A) </span><span class="c1">CONTRATANTE</span><span class="c0">&nbsp;fica ciente que ser&aacute; rescindido imediatamente o presente contrato, encerrando-se assim a presta&ccedil;&atilde;o de servi&ccedil;os e isentando a </span><span class="c1">CONTRATADA</span><span class="c0">&nbsp;de qualquer responsabilidade pelos eventuais danos resultantes do cancelamento, quando:</span></p><p class="c2"><span class="c0"></span></p><p class="c9"><span class="c1">a)</span><span class="c0">&nbsp; n&atilde;o for entregue os documentos legais, p&uacute;blicos ou particulares, comprobat&oacute;rios das declara&ccedil;&otilde;es prestadas, nos prazos estabelecidos pela </span><span class="c1">CONTRATADA</span><span class="c0">.</span></p><p class="c4"><span class="c0"></span></p><p class="c9"><span class="c1">b)</span><span class="c0">&nbsp;for constatada a falsidade de qualquer documento, p&uacute;blico ou particular, legalmente exigido para a efetiva&ccedil;&atilde;o da matr&iacute;cula, com base na legisla&ccedil;&atilde;o federal, relativa ao ingresso de estudante em curso de gradua&ccedil;&atilde;o.</span></p><p class="c9"><span class="c0">&nbsp;</span></p><p class="c6"><span class="c1">Par&aacute;grafo Segundo</span><span class="c0">&nbsp;&ndash; O(A) </span><span class="c1">CONTRATANTE</span><span class="c0">&nbsp;e o(a) </span><span class="c1">ALUNO(A)</span><span class="c0">&nbsp;ficam cientes de que, em caso de falsidade de documentos, p&uacute;blicos ou particulares, praticar&atilde;o IL&Iacute;CITO PENAL conforme tipifica&ccedil;&atilde;o no respectivo C&oacute;digo Penal, configurando crime de &ldquo;Falsidade Documental&rdquo; e/ou &ldquo;Falsidade Ideol&oacute;gica&rdquo;, todos pass&iacute;veis de pena de reclus&atilde;o, al&eacute;m de multa.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Terceiro &ndash; </span><span class="c0">O presente Contrato tamb&eacute;m poder&aacute; ser rescindido nas seguintes hip&oacute;teses:</span></p><p class="c2"><span class="c0"></span></p><p class="c9"><span class="c1">a)</span><span class="c0">&nbsp;Pelo(a) </span><span class="c1">CONTRATANTE</span><span class="c0">&nbsp;no caso de TRANCAMENTO (somente a partir do 2&ordm; semestre do curso), de CANCELAMENTO da matr&iacute;cula (a qualquer tempo com implica&ccedil;&atilde;o da perda de v&iacute;nculo acad&ecirc;mico com a </span><span class="c1">CONTRATADA), </span><span class="c0">ou de TRANSFER&Ecirc;NCIA do(a) ALUNO(A) para outra institui&ccedil;&atilde;o de ensino superior. A solicita&ccedil;&atilde;o dever&aacute; ser feita por escrito, em formul&aacute;rio pr&oacute;prio fornecido pela </span><span class="c1">CONTRATADA, </span><span class="c0">devidamente assinado e protocolado pelo(a) </span><span class="c16">CONTRATANTE</span><span class="c1">. N&atilde;o ser&atilde;o aceitas solicita&ccedil;&otilde;es via telefone, e-mail ou aplicativos de mensagens, com o intuito de preservar a legitimidade da solicita&ccedil;&atilde;o.</span></p><p class="c4"><span class="c1"></span></p><p class="c9"><span class="c0">b) No caso de desligamento do(a) </span><span class="c1">CONTRATANTE</span><span class="c0">&nbsp;por motivo de disciplina ou de incompatibilidade com o regime da </span><span class="c1">CONTRATADA, </span><span class="c0">nos termos do Regimento Interno.</span></p><p class="c4"><span class="c0"></span></p><p class="c9"><span class="c0">&nbsp;</span></p><p class="c6"><span class="c1">Par&aacute;grafo Quarto &ndash; </span><span class="c0">Em todos os casos fica o(a) </span><span class="c1">CONTRATANTE</span><span class="c0">&nbsp;obrigado(a) a pagar as parcelas da semestralidade vencidas e a vencer no m&ecirc;s da solicita&ccedil;&atilde;o / desligamento, de forma proporcional aos servi&ccedil;os prestados.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Quinto &ndash; </span><span class="c0">No caso de trancamento da matr&iacute;cula o(a) ALUNO(A) estar&aacute; sujeito(a) &agrave;s adapta&ccedil;&otilde;es que se fizerem necess&aacute;rias para efeito de cumprimento do curr&iacute;culo que estiver em vigor quando do seu retorno ao curso.</span></p><p class="c4"><span class="c0"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 9&ordf;</span><span class="c0">&nbsp;&ndash; No caso de desist&ecirc;ncia ou trancamento o(a) </span><span class="c1">CONTRATANTE </span><span class="c0">dever&aacute; expressar formalmente essa inten&ccedil;&atilde;o junto &agrave; Secretaria Geral de Cursos, por meio de formul&aacute;rio pr&oacute;prio.</span></p><p class="c9"><span class="c0">&nbsp; </span></p><p class="c6"><span class="c1">Par&aacute;grafo Primeiro &ndash; </span><span class="c0">Se a desist&ecirc;ncia ocorrer antes do in&iacute;cio das aulas, ser&aacute; devida pelo(a) ALUNO(A) a taxa equivalente a 1/12 (um doze avos) do valor da semestralidade, e o saldo remanescente ser&aacute; devolvido ao </span><span class="c1">CONTRATANTE</span><span class="c0">.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Segundo &ndash; </span><span class="c0">Se a desist&ecirc;ncia ocorrer ap&oacute;s o in&iacute;cio das aulas, ser&aacute; devolvido o saldo correspondente aos meses subsequentes ao comunicado da desist&ecirc;ncia, de forma proporcional aos servi&ccedil;os ofertados.</span></p><p class="c6"><span class="c0">&nbsp;</span></p><p class="c6"><span class="c1">Par&aacute;grafo Terceiro</span><span class="c0">&nbsp;&ndash; Caso haja a necessidade de reembolso, o(a) </span><span class="c1">CONTRATANTE </span><span class="c0">deve comprovar que o(s) t&iacute;tulo(s) a ser(em) reembolsado(s) foi(ram) devidamente quitado(s).</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Quarto &ndash; </span><span class="c0">No trancamento de disciplina ou ajuste de matr&iacute;cula, com observ&acirc;ncia das datas previstas no Calend&aacute;rio Acad&ecirc;mico divulgado pela </span><span class="c1">CONTRATADA, </span><span class="c0">o cr&eacute;dito remanescente aos meses n&atilde;o cursados ser&aacute; utilizado de forma compensat&oacute;ria no(s) semestre(s) subsequente(s).</span></p><p class="c6"><span class="c0">&nbsp;</span></p><p class="c6"><span class="c1">Par&aacute;grafo Quinto &ndash; </span><span class="c0">Para o trancamento integral do semestre, o(a) </span><span class="c1">CONTRATANTE </span><span class="c0">dever&aacute; efetuar o pagamento da taxa correspondente a 01 (um) componente curricular de 60hs do respectivo curso (semestralidade).</span></p><p class="c4"><span class="c3"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 10&ordf;</span><span class="c0">&nbsp;&ndash; Fica reservado &agrave; </span><span class="c1">CONTRATADA </span><span class="c0">o direito de rescindir o presente Contrato, independentemente de notifica&ccedil;&atilde;o judicial ou extrajudicial, quando o(a) </span><span class="c1">ALUNO(A) </span><span class="c0">e/ou o </span><span class="c1">CONTRATANTE </span><span class="c0">infringirem quaisquer das cl&aacute;usulas deste instrumento contratual.</span></p><p class="c4"><span class="c0"></span></p><p class="c9"><span class="c0">&nbsp;</span></p><p class="c5"><span class="c1">DAS OBRIGA&Ccedil;&Otilde;ES DO(A) ALUNO(A)</span></p><p class="c5 c14"><span class="c1"></span></p><p class="c17"><span class="c1">CL&Aacute;USULA 11</span><span class="c1">&nbsp;&ndash; </span><span class="c0">S&atilde;o obriga&ccedil;&otilde;es do(a) </span><span class="c1">ALUNO(A):</span></p><p class="c8"><span class="c1"></span></p><p class="c17 c32"><span class="c1">Par&aacute;grafo Primeiro &ndash; </span><span class="c0">Estar adimplente com suas obriga&ccedil;&otilde;es financeiras, apresentando os respectivos recibos de quita&ccedil;&atilde;o, toda vez que forem solicitados pela </span><span class="c1">CONTRATADA.</span></p><p class="c8 c32"><span class="c1"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Segundo &ndash; </span><span class="c0">Manter atualizado os seus dados cadastrais, devendo informar imediatamente &agrave; </span><span class="c1">CONTRATADA </span><span class="c0">qualquer altera&ccedil;&atilde;o (n&uacute;mero de telefone, endere&ccedil;o, e-mail etc.). O n&atilde;o cumprimento desta obriga&ccedil;&atilde;o, n&atilde;o autoriza o(a) </span><span class="c1">CONTRATANTE </span><span class="c0">alegar desconhecimento de comunica&ccedil;&atilde;o, ou informa&ccedil;&atilde;o, enviada pela </span><span class="c1">CONTRATADA </span><span class="c0">para qualquer dos endere&ccedil;os fornecidos e que tiverem sido alterados.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Terceiro &ndash; </span><span class="c0">Cumprir e respeitar todas as normas internas da </span><span class="c1">CONTRATADA, </span><span class="c0">bem como &agrave;s demais obriga&ccedil;&otilde;es constantes na legisla&ccedil;&atilde;o aplicada &agrave; &aacute;rea de ensino, e, ainda &agrave;s emanadas de outras fontes legais, desde que regulem supletivamente a mat&eacute;ria.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Quarto</span><span class="c0">&nbsp;- Obedecer a todos os protocolos de Biosseguran&ccedil;a e manuais elaborados pela </span><span class="c1">CONTRATADA</span><span class="c0">&nbsp;e pelo Minist&eacute;rio da Sa&uacute;de, bem como, a usar corretamente a m&aacute;scara e demais Equipamentos de Prote&ccedil;&atilde;o Individual (EPIs) que forem necess&aacute;rios, sob pena de instaura&ccedil;&atilde;o de processo administrativo. Desde j&aacute; o(a) </span><span class="c1">CONTRATANTE</span><span class="c0">&nbsp;manifesta ci&ecirc;ncia que a </span><span class="c1">CONTRATADA </span><span class="c0">n&atilde;o fornecer&aacute; m&aacute;scara, e/ou, EPIs para uso do(a) </span><span class="c1">ALUNO(A), </span><span class="c0">sendo sua a responsabilidade pela aquisi&ccedil;&atilde;o dos equipamentos de seguran&ccedil;a.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Quinto - </span><span class="c0">Indicar e autorizar por escrito a qual m&eacute;dico, cl&iacute;nica ou hospital dever&aacute; ser encaminhado, em caso de emerg&ecirc;ncia.</span></p><p class="c8"><span class="c0"></span></p><p class="c8"><span class="c0"></span></p><p class="c5 c14"><span class="c1"></span></p><p class="c5"><span class="c1">DO PAGAMENTO DOS SERVI&Ccedil;OS</span></p><p class="c4"><span class="c0"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 12</span><span class="c0">&nbsp;&ndash; Em contrapresta&ccedil;&atilde;o aos servi&ccedil;os prestados, o(a) </span><span class="c1">CONTRATANTE</span><span class="c0">&nbsp;pagar&aacute; </span><span class="c12">&agrave; CONTRATADA</span><span class="c1">&nbsp;</span><span class="c12">o valor de </span><span class="c16">{valorSemestre} ({valorPorExtenso})</span><span class="c0">&nbsp;da seguinte forma:</span></p><p class="c4"><span class="c0"></span></p><table class="c28"><tr class="c31"><td class="c35" colspan="1" rowspan="1"><p class="c5"><span class="c1">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; PARCELAS</span></p></td><td class="c20" colspan="1" rowspan="1"><p class="c5 c14"><span class="c1"></span></p><p class="c5"><span class="c1">VALOR</span></p></td><td class="c26" colspan="1" rowspan="1"><p class="c5 c14"><span class="c1"></span></p><p class="c5"><span class="c1">DATA DE VENCIMENTO</span></p></td></tr>{listaParcelas}</table><p class="c4"><span class="c0"></span></p><p class="c4"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Primeiro &ndash; </span><span class="c0">O valor da semestralidade devido em cada componente curricular matriculado, ser&aacute; calculado obedecendo a seguinte f&oacute;rmula: </span><span class="c1">CH x VH = VCC, onde CH corresponde a </span><span class="c1">carga hor&aacute;ria</span><span class="c1">&nbsp;total do componente curricular, VH equivale ao </span><span class="c1">valor da hora</span><span class="c1">&nbsp;definida pela CONTRATADA para o respectivo curso, e VCC &eacute; o </span><span class="c1">valor do componente curricular</span><span class="c1">.</span></p><p class="c2"><span class="c1"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Segundo &ndash; </span><span class="c0">O valor total da semestralidade </span><span class="c1">(VS)</span><span class="c0">&nbsp;ser&aacute; calculado em raz&atilde;o do somat&oacute;rio dos valores dos componentes curriculares matriculados </span><span class="c1">(VCC1 + VCC2 + VCC3... = VS), </span><span class="c0">e poder&aacute; ser dividido em </span><span class="c1">at&eacute;</span><span class="c0">&nbsp;</span><span class="c12">{qtdeParcelas}</span><span class="c0">&nbsp;(</span><span class="c12">{parcelasExtenso}</span><span class="c0">) parcelas, a depender do plano de pagamento vigente.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Terceiro &ndash; </span><span class="c0">No ato da matr&iacute;cula o(a) </span><span class="c1">CONTRATANTE</span><span class="c0">&nbsp;far&aacute; ades&atilde;o ao plano de pagamento aplicado ao respectivo per&iacute;odo.</span></p><p class="c6"><span class="c0">&nbsp;</span></p><p class="c6"><span class="c1">Par&aacute;grafo Quarto</span><span class="c0">&nbsp;&ndash; A primeira parcela da semestralidade dever&aacute; ser paga &agrave; vista, no ato da matr&iacute;cula, como condi&ccedil;&atilde;o para sua concretiza&ccedil;&atilde;o.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Quinto</span><span class="c0">&nbsp;&ndash; Se n&atilde;o for cumprida a obriga&ccedil;&atilde;o de pagamento na forma e condi&ccedil;&otilde;es contratadas, principalmente em rela&ccedil;&atilde;o &agrave; DATA de vencimento, o(a) </span><span class="c1">CONTRATANTE</span><span class="c0">&nbsp;perder&aacute; o direito a eventuais descontos e bolsas de estudos, ficando obrigado ao pagamento do valor origin&aacute;rio da parcela.</span></p><p class="c6"><span class="c1">&nbsp;</span></p><p class="c6"><span class="c1">Par&aacute;grafo Sexto </span><span class="c0">&ndash; Em qualquer modalidade de desconto oferecido pela </span><span class="c1">CONTRATADA</span><span class="c0">, o inadimplemento reiterado da parcela de responsabilidade do(a) </span><span class="c1">CONTRATANTE</span><span class="c0">, dar&aacute; &agrave; </span><span class="c1">CONTRATADA</span><span class="c0">&nbsp;o direito de cancelar os descontos e bolsas de estudos.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo S&eacute;timo</span><span class="c0">&nbsp;&ndash; Os descontos e bolsas eventualmente concedidos ter&atilde;o validade apenas para o semestre a que est&atilde;o vinculados, cabendo </span><span class="c12">&agrave; </span><span class="c16">CONTRATADA</span><span class="c0">&nbsp;avaliar a cada novo semestre se ser&atilde;o mantidos ou n&atilde;o, ou reduzidos, para que se mantenha o equil&iacute;brio financeiro de cada turma.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Oitavo</span><span class="c0">&nbsp;&ndash; Os descontos e bolsas de estudos n&atilde;o ser&atilde;o cumulativos, e poder&atilde;o ser cancelados caso o(a) aluno(a) seja inclu&iacute;do em programa de financiamento estudantil (FIES), ou de concess&atilde;o de bolsas (PROUNI, Educa Mais Brasil, Quero Bolsa, Mais Bolsa etc.).</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Nono</span><span class="c0">&nbsp;&ndash; O(A) </span><span class="c1">ALUNO(A) </span><span class="c0">contemplado(a) com financiamento ou bolsa de estudos, concedidos por institui&ccedil;&otilde;es p&uacute;blicas ou privadas, responde por si s&oacute;, ou por interm&eacute;dio do(a) </span><span class="c1">CONTRATANTE,</span><span class="c0">&nbsp;pelo valor total das parcelas contratadas, caso ocorra inadimpl&ecirc;ncia da institui&ccedil;&atilde;o concedente.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo D&eacute;cimo &ndash; </span><span class="c0">Os componentes curriculares de Est&aacute;gio Obrigat&oacute;rio de cada &aacute;rea ser&atilde;o remunerados de acordo com as regras dispostas na presente cl&aacute;usula, n&atilde;o incidindo qualquer tipo de isen&ccedil;&atilde;o.</span></p><p class="c6"><span class="c0">&nbsp; </span></p><p class="c6"><span class="c1">Par&aacute;grafo Onze - </span><span class="c0">Desde j&aacute; o(a) </span><span class="c1">CONTRATANTE </span><span class="c0">autoriza a </span><span class="c1">CONTRATADA</span><span class="c0">&nbsp;a negociar ou repassar os cheques recebidos a quem achar de direito, e em caso de necessidade de resgate, se o t&iacute;tulo n&atilde;o for localizado, o(a) </span><span class="c1">CONTRATANTE </span><span class="c0">sustar&aacute; o cheque junto ao banco.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Doze</span><span class="c0">&nbsp;- Na hip&oacute;tese do cheque dado em</span><span class="c1">&nbsp;</span><span class="c0">pagamento da(s) parcela(s) sob qualquer pretexto, n&atilde;o ser(em) devidamente compensado(s), se constituir&aacute; este fato em mora, incidindo os encargos de multa e juros, a partir da data do vencimento da respectiva parcela.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Treze</span><span class="c0">&nbsp;&ndash; O n&atilde;o comparecimento do(a) </span><span class="c1">ALUNO(A) </span><span class="c0">aos atos escolares ora contratados n&atilde;o exime o pagamento, tendo em vista a disponibilidade dos servi&ccedil;os colocados &agrave; sua disposi&ccedil;&atilde;o pela </span><span class="c1">CONTRATADA</span><span class="c0">.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Quatorze - </span><span class="c0">A falta da fatura n&atilde;o exime o(a) </span><span class="c1">CONTRATANTE </span><span class="c0">do pagamento da mensalidade, na data acordada, ficando este, em caso de mora, sujeito &agrave;s penalidades previstas neste contrato.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Quinze</span><span class="c0">&nbsp;- Na hip&oacute;tese de o pagamento da mensalidade ser efetuado via dep&oacute;sito banc&aacute;rio identificado, transfer&ecirc;ncia banc&aacute;ria ou PIX, o(a) </span><span class="c1">CONTRATANTE</span><span class="c0">&nbsp;se obriga a apresentar &agrave; </span><span class="c1">CONTRATADA,</span><span class="c0">&nbsp;o comprovante do referido pagamento. A quita&ccedil;&atilde;o da mensalidade s&oacute; se dar&aacute; ap&oacute;s essa comprova&ccedil;&atilde;o. &nbsp;</span></p><p class="c4"><span class="c1"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 13</span><span class="c0">&nbsp;&ndash; A </span><span class="c1">CONTRATADA </span><span class="c0">reserva-se o direito de RECUSAR A RENOVA&Ccedil;&Atilde;O da matr&iacute;cula do(a) ALUNO(a) por motivo de conduta inadequada, ordem disciplinar, inobserv&acirc;ncia das regras do bom conv&iacute;vio social com os demais alunos(as), professores(as) e corpo administrativo, bem como, expor a </span><span class="c1">CONTRATADA</span><span class="c0">&nbsp;a coment&aacute;rios pejorativos, denegrir a sua imagem, usar as redes sociais para incitar boicotes, promover ou provocar a presen&ccedil;a de </span><span class="c15 c12">haters </span><span class="c0">e</span><span class="c15 c12">&nbsp;</span><span class="c0">cancelamentos nos canais de comunica&ccedil;&atilde;o da CONTRATADA, infringir o Regimentos Interno, normas, manuais institucionais e protocolos de Biosseguran&ccedil;a.</span></p><p class="c2"><span class="c1"></span></p><p class="c6"><span class="c1">Par&aacute;grafo &Uacute;nico </span><span class="c0">- A </span><span class="c1">CONTRATADA </span><span class="c0">tamb&eacute;m</span><span class="c1">&nbsp;</span><span class="c0">poder&aacute; recusar a renova&ccedil;&atilde;o da matr&iacute;cula do(a) ALUNO(A) com pend&ecirc;ncias Setor Financeiro, na Secretaria Geral de Cursos, ou na Biblioteca. &nbsp;</span></p><p class="c4"><span class="c0"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 14</span><span class="c0">&nbsp;&ndash; Na falta de pagamento at&eacute; a data do vencimento, ao valor do d&eacute;bito ser&aacute; acrescida MULTA de 2% (dois por cento) sobre a parcela vencida, al&eacute;m da aplica&ccedil;&atilde;o de corre&ccedil;&atilde;o monet&aacute;ria pelo &iacute;ndice IGPM, at&eacute; a sua efetiva liquida&ccedil;&atilde;o, conforme previsto nos artigos 389 e 395 do C&oacute;digo Civil.</span></p><p class="c4"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo &Uacute;nico</span><span class="c0">&ndash; Ocorrendo a inadimpl&ecirc;ncia poder&aacute; a </span><span class="c1">CONTRATADA </span><span class="c0">proceder a imediata cobran&ccedil;a atrav&eacute;s de vias extrajudiciais ou judiciais, acrescendo ao valor principal os encargos contratuais, al&eacute;m dos valores decorrentes de despesas judiciais, honor&aacute;rios advocat&iacute;cios e taxas cartoriais. Os m&eacute;todos utilizados para cobran&ccedil;a pela </span><span class="c1">CONTRATADA</span><span class="c0">&nbsp;poder&atilde;o ser: e-mail, WhatsApp, SMS, telefone, carta etc..</span></p><p class="c4"><span class="c3"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 15</span><span class="c0">&nbsp;&ndash; O(A) </span><span class="c1">CONTRATANTE </span><span class="c0">e o(a)</span><span class="c1">&nbsp;ALUNO(A), </span><span class="c0">desde j&aacute;, declaram ter ci&ecirc;ncia que em caso de inadimpl&ecirc;ncia, poder&atilde;o ser inscritos em cadastro de prote&ccedil;&atilde;o ao cr&eacute;dito, tais como SERASA, SPC etc., bem como, a(s) respectiva(s) fatura(s) ser&aacute;(&atilde;o) encaminhada(s) para o </span><span class="c12">CART&Oacute;RIO</span><span class="c0">&nbsp;DE PROTESTO DE T&Iacute;TULOS para os devidos fins, conforme autorizado pelo C&oacute;digo de Defesa do Consumidor.</span></p><p class="c4"><span class="c3"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 16</span><span class="c0">&nbsp;&ndash; S&atilde;o respons&aacute;veis solid&aacute;rios por todas as obriga&ccedil;&otilde;es previstas no presente instrumento, na condi&ccedil;&atilde;o de </span><span class="c1">CONTRATANTE(S), </span><span class="c0">o(a) ALUNO(A), quando civilmente capaz, nos termos da legisla&ccedil;&atilde;o em vigor, e quando for o caso, o(a) RESPONS&Aacute;VEL pelos pagamentos da semestralidade.</span></p><p class="c4"><span class="c0"></span></p><p class="c4"><span class="c1"></span></p><p class="c5"><span class="c1">FINANCIAMENTO ESTUDANTIL E BOLSAS DE ESTUDO</span></p><p class="c5 c14"><span class="c1"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 17</span><span class="c0">&nbsp;&ndash; Os(As) alunos(as) interessados(as) dever&atilde;o firmar os contratos de financiamentos com os respectivos bancos e institui&ccedil;&otilde;es, devendo obrigatoriamente obedecer ao roteiro operacional previsto em cada programa.</span></p><p class="c4"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Primeiro</span><span class="c0">&nbsp;&ndash; O(A) </span><span class="c1">CONTRATANTE</span><span class="c0">&nbsp;fica ciente que a institui&ccedil;&atilde;o financiadora ser&aacute; a respons&aacute;vel pela divulga&ccedil;&atilde;o, negocia&ccedil;&atilde;o e elabora&ccedil;&atilde;o das cl&aacute;usulas contratuais dos seus respectivos financiamentos.</span></p><p class="c6"><span class="c0">&nbsp;</span></p><p class="c6"><span class="c1">Par&aacute;grafo Segundo</span><span class="c0">&nbsp;- O(A)</span><span class="c1">&nbsp;CONTRATANTE </span><span class="c0">s&oacute; ter&aacute; o direito a rematr&iacute;cula, se renovar o seu financiamento com a respectiva institui&ccedil;&atilde;o. Caso contr&aacute;rio dever&aacute; procurar </span><span class="c12">o</span><span class="c0">&nbsp;Setor Financeiro da </span><span class="c1">CONTRATADA</span><span class="c0">&nbsp;e matricular-se em um dos planos financeiros dispon&iacute;veis.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Terceiro - </span><span class="c0">A</span><span class="c1">&nbsp;CONTRATADA</span><span class="c0">&nbsp;n&atilde;o ser&aacute; respons&aacute;vel por qualquer evento que ocorra durante o processo de financiamento entre o(a) aluno(a) e o agente financiador, por culpa ou n&atilde;o do(a) </span><span class="c1">CONTRATANTE</span><span class="c0">. As controv&eacute;rsias oriundas do contrato firmado entre as partes devem ser resolvidas entre elas, e no caso de cancelamento do contrato de financiamento, as parcelas vencidas e a vencer ser&atilde;o recalculadas, e ser&atilde;o de inteira responsabilidade do(a) </span><span class="c1">CONTRATANTE</span><span class="c0">.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Quarto &ndash; O(A) CONTRATANTE </span><span class="c0">que optar fazer a matr&iacute;cula por sele&ccedil;&atilde;o </span><span class="c12">atrav&eacute;s</span><span class="c0">&nbsp;dos programas de bolsas de estudos (PROUNI, Educa Mais Brasil, Quero Bolsa, Mais Bolsa etc.), &eacute; respons&aacute;vel por cumprir todos os pr&eacute;-requisitos exigidos, </span><span class="c12">respeitar</span><span class="c0">&nbsp;as datas previstas para matr&iacute;cula, e o n&uacute;mero de vagas disponibilizadas para cada Edital, sob pena de n&atilde;o ser contemplado com o desconto.</span></p><p class="c23 c14"><span class="c0"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 18</span><span class="c1">&nbsp;</span><span class="c0">&ndash; O(A) benefici&aacute;rio(a) do FIES fica obrigado(a) a realizar, no in&iacute;cio de cada semestre letivo o aditamento junto ao MEC, pelo site </span><span class="c1">sisfiesportal.mec.gov.br</span><span class="c0">,</span><span class="c15 c12">&nbsp;</span><span class="c0">durante o per&iacute;odo em que durar o financiamento em quest&atilde;o, sob pena de arcar com as mensalidades n&atilde;o repassadas pelo referido Programa.</span></p><p class="c4"><span class="c1"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Primeiro</span><span class="c0">&nbsp;&ndash;</span><span class="c1">&nbsp;</span><span class="c0">A n&atilde;o realiza&ccedil;&atilde;o do aditamento IMPLICAR&Aacute; NO POSS&Iacute;VEL CANCELAMENTO DO FINANCIAMENTO, e o respectivo &ocirc;nus financeiro ser&aacute; de inteira responsabilidade do(a) </span><span class="c1">CONTRATANTE</span><span class="c0">.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Segundo</span><span class="c0">&nbsp;-</span><span class="c1">&nbsp;</span><span class="c0">O(A) </span><span class="c1">CONTRATANTE</span><span class="c0">&nbsp;para realizar o aditamento semestral, dever&aacute; obedecer &agrave;s normas e prazos publicados pelo FIES/FNDE/MEC, sob pena de perder o financiamento.</span></p><p class="c6"><span class="c0">&nbsp;</span></p><p class="c6"><span class="c1">Par&aacute;grafo Terceiro</span><span class="c0">&nbsp;&ndash; No caso de cancelamento do FIES, as parcelas vencidas e a vencer ser&atilde;o recalculadas, e ser&atilde;o de inteira responsabilidade do(a) </span><span class="c1">CONTRATANTE</span><span class="c0">. </span></p><p class="c4"><span class="c3"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 19</span><span class="c1">&nbsp;&ndash; </span><span class="c0">O(A) benefici&aacute;rio(a) do PROUNI fica obrigado(a) a atualizar seus dados, semestralmente, junto ao Setor de Cr&eacute;dito Educativo da </span><span class="c1">CONTRATADA</span><span class="c0">.</span></p><p class="c4"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo &Uacute;nico </span><span class="c0">- A atualiza&ccedil;&atilde;o a que se refere esta cl&aacute;usula deve ser efetuada, </span><span class="c1">INDEPENDENTE </span><span class="c0">do prazo de matr&iacute;cula da </span><span class="c1">CONTRATADA</span><span class="c0">&nbsp;e do percentual pactuado para a bolsa, sob pena de </span><span class="c1">SUSPENS&Atilde;O/ENCERRAMENTO</span><span class="c0">&nbsp;do PROUNI. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></p><p class="c9"><span class="c0">&nbsp; &nbsp; &nbsp; </span></p><p class="c9"><span class="c1">CL&Aacute;USULA 20</span><span class="c0">&nbsp;&ndash; Os estudantes benefici&aacute;rios do PROUNI e do FIES, ficam desde j&aacute; cientes de que devem alcan&ccedil;ar, semestralmente, pelo menos 75% de aproveitamento acad&ecirc;mico nos componentes curriculares que estiverem cursando, sob pena de perder o referido benef&iacute;cio, conforme contratos assinados no ato da concess&atilde;o, e Portaria Normativa 19/2008 do MEC.</span></p><p class="c4"><span class="c0"></span></p><p class="c4"><span class="c0"></span></p><p class="c5"><span class="c1">DAS DISPOSI&Ccedil;&Otilde;ES GERAIS</span></p><p class="c5 c14"><span class="c1 c7"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 21</span><span class="c0">&nbsp;&ndash; A </span><span class="c1">CONTRATADA </span><span class="c0">obriga-se a requerer junto ao MEC o reconhecimento ou renova&ccedil;&atilde;o de reconhecimento de seus cursos no prazo legal, ficando o(a) </span><span class="c1">ALUNO(A)</span><span class="c0">&nbsp;ciente que s&oacute; poder&aacute; receber o seu diploma, devidamente registrado, ap&oacute;s a publica&ccedil;&atilde;o do Ato de Reconhecimento ou Renova&ccedil;&atilde;o de Reconhecimento, expedido pelo Minist&eacute;rio da Educa&ccedil;&atilde;o.</span></p><p class="c4"><span class="c0 c7"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 22</span><span class="c1">&nbsp;</span><span class="c0">&ndash; A </span><span class="c1">CONTRATADA</span><span class="c0">&nbsp;se resguarda no direito de emitir o certificado de cola&ccedil;&atilde;o de grau ou diploma do(a) aluno(a) somente ap&oacute;s a confer&ecirc;ncia do cumprimento de todos os componentes curriculares e das atividades acad&ecirc;micas obrigat&oacute;rias, bem como, ap&oacute;s a entrega de toda documenta&ccedil;&atilde;o exigida.</span></p><p class="c23 c14"><span class="c1"></span></p><p class="c6"><span class="c1">Par&aacute;grafo &Uacute;nico - </span><span class="c0">O n&atilde;o cumprimento de todas as obriga&ccedil;&otilde;es acad&ecirc;micas ou a n&atilde;o entrega da documenta&ccedil;&atilde;o solicitada, implicar&aacute; na impossibilidade de expedi&ccedil;&atilde;o do competente certificado de cola&ccedil;&atilde;o de grau ou diploma de conclus&atilde;o de curso</span></p><p class="c4"><span class="c3"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 23</span><span class="c0">&nbsp;&ndash; No caso da realiza&ccedil;&atilde;o de projetos de m&uacute;tuo interesse entre as partes, fica a </span><span class="c1">CONTRATADA </span><span class="c0">autorizada, &nbsp;a registrar em benef&iacute;cio pr&oacute;prio, os direitos sobre o projeto, obedecendo </span><span class="c12">&agrave;s normas</span><span class="c0">&nbsp;ditadas pelo INPI (Instituto Nacional de Propriedade Industrial).</span></p><p class="c4"><span class="c3"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 24</span><span class="c0">&nbsp;&ndash; A </span><span class="c1">CONTRATADA </span><span class="c0">se exime da responsabilidade quanto &agrave; guarda de quaisquer objetos dentro das suas instala&ccedil;&otilde;es, bem como de material did&aacute;tico-pedag&oacute;gico de uso individual do(a) aluno(a). </span></p><p class="c4"><span class="c3"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 25</span><span class="c0">&nbsp;&ndash; O(A) </span><span class="c1">ALUNO(A) </span><span class="c0">que causar danos ao estabelecimento de ensino ou a terceiros, no &acirc;mbito da &aacute;rea escolar ou durante suas atividades, dever&aacute; repar&aacute;-los no prazo de 48 horas, al&eacute;m de estar sujeito &agrave;s disposi&ccedil;&otilde;es regimentais.</span></p><p class="c14 c23"><span class="c3"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 26</span><span class="c1">&nbsp;&ndash; </span><span class="c0">&Eacute; vedado nas depend&ecirc;ncias da </span><span class="c1">CONTRATADA</span><span class="c0">&nbsp;praticar ato libidinoso, conjun&ccedil;&atilde;o carnal, guardar, adquirir, portar, transportar ou consumir subst&acirc;ncias il&iacute;citas, ou consumir bebidas alco&oacute;licas. Tais infra&ccedil;&otilde;es estar&atilde;o sujeitas </span><span class="c12">&agrave;s respectivas</span><span class="c0">&nbsp;san&ccedil;&otilde;es administrativas e/ou legais.</span></p><p class="c4"><span class="c0"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 27</span><span class="c0">&nbsp;&ndash; Desde j&aacute; o(a) ALUNO(A) autoriza a </span><span class="c1">CONTRATADA</span><span class="c0">&nbsp;a fornecer todos os dados e informa&ccedil;&otilde;es relativos &agrave; sua vida acad&ecirc;mica e financeira, a seu pai, m&atilde;e, e/ou respons&aacute;vel signat&aacute;rio desse Instrumento Particular, bem como ao respons&aacute;vel pelo pagamento das mensalidades do(a) ALUNO(A).</span></p><p class="c4"><span class="c3"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 28</span><span class="c0">&nbsp;&ndash; O(A) </span><span class="c1">CONTRATANTE, </span><span class="c0">neste ato, autoriza a utiliza&ccedil;&atilde;o de sua imagem pela </span><span class="c1">CONTRATADA, </span><span class="c0">livre de quaisquer &ocirc;nus, pagamentos ou indeniza&ccedil;&otilde;es, exclusivamente para fins de divulga&ccedil;&atilde;o de suas atividades, podendo, para tanto, reproduzi-la ou divulg&aacute;-la junto &agrave; internet, redes sociais, televis&atilde;o, </span><span class="c15 c12">outdoor</span><span class="c0">, </span><span class="c15 c12">busdoor</span><span class="c0">, jornais, revistas, folhetos e demais meios de comunica&ccedil;&atilde;o, p&uacute;blicos ou privados.</span></p><p class="c4"><span class="c1"></span></p><p class="c6"><span class="c1">Par&aacute;grafo &Uacute;nico </span><span class="c0">&ndash; As pe&ccedil;as promocionais publicit&aacute;rias ou acad&ecirc;micas de que trata esta cl&aacute;usula, ser&atilde;o veiculadas por tempo indeterminado, a qualquer momento, e em locais e ve&iacute;culos a crit&eacute;rio da </span><span class="c1">CONTRATADA, </span><span class="c0">mesmo ap&oacute;s a desvincula&ccedil;&atilde;o do(a) aluno(a) da </span><span class="c1">CONTRATADA</span><span class="c0">.</span></p><p class="c4"><span class="c0"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 29</span><span class="c0">&nbsp;&ndash; A CONTRATADA executar&aacute; os trabalhos a partir das premissas da LEI GERAL DE PROTE&Ccedil;&Atilde;O DOS DADOS (LGPD), em especial os princ&iacute;pios da finalidade, adequa&ccedil;&atilde;o, transpar&ecirc;ncia, livre acesso, seguran&ccedil;a, preven&ccedil;&atilde;o e n&atilde;o discrimina&ccedil;&atilde;o no tratamento dos dados.</span></p><p class="c4"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Primeiro</span><span class="c0">&nbsp;&ndash;</span><span class="c1">&nbsp;</span><span class="c0">Por este ato negocial, o(a) aluno(a), consciente e livremente, no exerc&iacute;cio de sua </span><span class="c12">autodetermina&ccedil;&atilde;o</span><span class="c0">&nbsp;informativa, manifesta seu consentimento em disponibilizar seus dados pessoais, assim compreendido, nos termos do art. 5&ordm; da Lei 13.709/2018 (LGPD), como toda informa&ccedil;&atilde;o relacionada com sua pessoa natural identificada ou identific&aacute;vel, incluindo dados cadastrais j&aacute; existentes na institui&ccedil;&atilde;o referentes &agrave; imagem, voz e demais registros presentes em bancos de dados f&iacute;sicos ou virtuais em poder da </span><span class="c1">CONTRATADA, </span><span class="c0">e que comp&otilde;e seu acervo hist&oacute;rico, do qual o(a) </span><span class="c1">CONTRATANTE</span><span class="c0">&nbsp;participou. O consentimento &eacute; conferido &agrave; </span><span class="c1">CONTATADA </span><span class="c0">para que esta cumpra suas finalidades pedag&oacute;gicas e educacionais relacionadas com o escopo do presente contrato.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Segundo</span><span class="c0">&nbsp;&ndash; </span><span class="c0">Por sua parte, a </span><span class="c1">CONTRATADA</span><span class="c0">&nbsp;se compromete a utilizar os dados pessoais do(a) </span><span class="c1">CONTRATANTE</span><span class="c0">&nbsp;de acordo com o princ&iacute;pio da boa-f&eacute; objetiva e em respeito &agrave;s finalidades para as quais foram autorizadas, em observ&acirc;ncia ao princ&iacute;pio da adequa&ccedil;&atilde;o e aos leg&iacute;timos prop&oacute;sitos de realiza&ccedil;&atilde;o das atividades pedag&oacute;gicas e educacionais desenvolvidas pela </span><span class="c16">CONTRATADA</span><span class="c1">, </span><span class="c0">atuando em conformidade com o preceituado no art. 6&ordm; da Lei supracitada.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Terceiro &ndash; </span><span class="c0">Para cumprir o aven&ccedil;ado, a </span><span class="c1">CONTRATADA</span><span class="c0">&nbsp;se compromete a implementar e manter medidas t&eacute;cnicas e organizacionais para proteger os dados pessoais do(a) </span><span class="c1">CONTRATANTE </span><span class="c0">contra destrui&ccedil;&atilde;o, perda, modifica&ccedil;&atilde;o, divulga&ccedil;&atilde;o n&atilde;o autorizada ou acesso n&atilde;o autorizado, acidentais ou ilegais, garantindo que as pessoas autorizadas a processar os dados do(a) </span><span class="c1">CONTRATANTE adotar&atilde;o </span><span class="c0">procedimentos adequados para manter a exatid&atilde;o, integridade, atualiza&ccedil;&atilde;o, de acordo com o art. 5&ordm;, inciso II, da LGPD.</span></p><p class="c2"><span class="c0"></span></p><p class="c6"><span class="c1">Par&aacute;grafo Quarto</span><span class="c0">&nbsp;&ndash;</span><span class="c1">&nbsp;</span><span class="c0">O(A) </span><span class="c1">CONTRATANTE</span><span class="c0">&nbsp;admite estar ciente que que a </span><span class="c1">CONTRATADA</span><span class="c0">&nbsp;(controladora dos dados) se compromete a proceder ao adequado tratamento dos seus dados pessoais, nos termos da citada lei.</span></p><p class="c6"><span class="c3">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></p><p class="c9"><span class="c1">CL&Aacute;USULA</span><span class="c0">&nbsp;</span><span class="c1">30</span><span class="c0">&nbsp;&ndash; &Eacute; parte integrante do presente contrato o Regimento Interno da CONTRATADA, o Projeto Pedag&oacute;gico do Curso matriculado, os manuais, e os protocolos de Biosseguran&ccedil;a.</span></p><p class="c4"><span class="c3"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 31</span><span class="c0">&nbsp;&ndash; O(A) </span><span class="c1">CONTRATANTE </span><span class="c0">e/ou</span><span class="c1">&nbsp;</span><span class="c0">o(a) </span><span class="c1">ALUNO(A) </span><span class="c0">DECLARAM TER CONHECIMENTO INTEGRAL DAS CONDI&Ccedil;&Otilde;ES ESTIPULADAS NO PRESENTE CONTRATO, CONCORDANDO DE LIVRE E ESPONT&Acirc;NEA VONTADE COM TODOS OS SEUS TERMOS. &nbsp; &nbsp; &nbsp; </span></p><p class="c4"><span class="c3"></span></p><p class="c9"><span class="c1">CL&Aacute;USULA 32</span><span class="c0">&nbsp;&ndash; As partes elegem o foro de Comarca de Vit&oacute;ria da Conquista, Bahia, para elidir qualquer diverg&ecirc;ncia oriunda deste contrato, com ren&uacute;ncia de qualquer outro, por mais privilegiado que seja. E por estarem justos e contratados</span><span class="c1">, </span><span class="c0">assinam o presente diante das testemunhas abaixo qualificadas, para que </span><span class="c12">surtam</span><span class="c0">&nbsp;os seus efeitos.</span></p><p class="c4"><span class="c0"></span></p><p class="c4"><span class="c0"></span></p><p class="c8 c29"><span class="c1"></span></p><table class="c30"><tr class="c24"><td class="c10" colspan="1" rowspan="1"><p class="c18"><span class="c15 c12">Assinado eletronicamente</span></p><p class="c13"><span class="c12 c15"></span></p><p class="c18"><span class="c1">FAINOR FACULDADE INDEPENDENTE DO NORDESTE<br>CONTRATADA</span></p></td><td class="c33" colspan="1" rowspan="1"><p class="c18"><span class="c15 c12">Assinado eletronicamente</span></p><p class="c13"><span class="c15 c12"></span></p><p class="c13"><span class="c15 c12"></span></p><p class="c18"><span class="c1">CONTRATANTE</span></p></td></tr></table><p class="c8 c29"><span class="c1"></span></p></body></html>\n    '
            }
            ,
            l
        }()
          , yl = function() {
            function l(l, n, a, e, o, u, t, i, r, s) {
                var c = this;
                this.zone = l,
                this.dialog = n,
                this.turmaService = a,
                this.authService = e,
                this.route = o,
                this.router = u,
                this._AESEncryptDecryptService = t,
                this._formBuilder = i,
                this.viacep = r,
                this.snackService = s,
                this.componentesAdicionados = [],
                this.horariosAdicionados = [],
                this.limiteMinimo = 1,
                this.resumoHorario = [],
                this.confirmacaoFinal = !1,
                this.lerContrato = !1,
                this.contratoLido = !1,
                this.processandoMatricula = !1,
                this.matriculaAtual = [],
                this.mostraTurnos = {
                    matutino: !1,
                    vespertino: !1,
                    noturno: !1
                },
                this.positionOptions = ["after", "before", "above", "below", "left", "right"],
                this.position = new E.i(this.positionOptions[0]),
                this.authService.getAuthStatus().subscribe(function(l) {
                    l.uid && /^[r][a]\d/.test(l.uid) && (c.uid = l.uid.replace(/[^\d]+/g, ""))
                })
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.secondFormGroup = this._formBuilder.group({
                    secondCtrl: ["", E.C.required]
                }),
                this.turmaService.turmasDisponiveis(this.uid).subscribe(function(n) {
                    l._rpo = JSON.parse(l._AESEncryptDecryptService.decrypt(n._rpo, l.uid.split("").reverse().join(""))),
                    l.componentes = l._rpo,
                    l.contatoFormGroup = l._formBuilder.group({
                        email: [l.componentes.aluno.email, [E.C.required, E.C.email]],
                        telResidencial: l._formBuilder.control(l.componentes.aluno.telResidencial),
                        telComercial: l._formBuilder.control(l.componentes.aluno.telComercial),
                        telCelular: l._formBuilder.control(l.componentes.aluno.telCelular)
                    }),
                    l.thirdFormGroup = l._formBuilder.group({
                        endereco: l._formBuilder.group({
                            cep: l._formBuilder.control(l.componentes.aluno.endereco && l.componentes.aluno.endereco.cep ? l.componentes.aluno.endereco.cep : ""),
                            logradouro: l._formBuilder.control(l.componentes.aluno.endereco && l.componentes.aluno.endereco.logradouro ? l.componentes.aluno.endereco.logradouro : "", E.C.required),
                            complemento: l._formBuilder.control(l.componentes.aluno.endereco && l.componentes.aluno.endereco.complemento ? l.componentes.aluno.endereco.complemento : ""),
                            cidade: l._formBuilder.control(l.componentes.aluno.endereco && l.componentes.aluno.endereco.cidade ? l.componentes.aluno.endereco.cidade : "", E.C.required),
                            bairro: l._formBuilder.control(l.componentes.aluno.endereco && l.componentes.aluno.endereco.bairro ? l.componentes.aluno.endereco.bairro : "", E.C.required),
                            numero: l._formBuilder.control(l.componentes.aluno.endereco && l.componentes.aluno.endereco.numero ? l.componentes.aluno.endereco.numero : "", E.C.required),
                            uf: l._formBuilder.control(l.componentes.aluno.endereco && l.componentes.aluno.endereco.uf ? l.componentes.aluno.endereco.uf : ""),
                            ibge: l._formBuilder.control(l.componentes.aluno.endereco && l.componentes.aluno.endereco.ibge ? l.componentes.aluno.endereco.ibge : "")
                        }),
                        enderecoDeOrigem: l._formBuilder.group({
                            cep: l._formBuilder.control(l.componentes.aluno.enderecoDeOrigem && l.componentes.aluno.enderecoDeOrigem.cep ? l.componentes.aluno.enderecoDeOrigem.cep : ""),
                            logradouro: l._formBuilder.control(l.componentes.aluno.enderecoDeOrigem && l.componentes.aluno.enderecoDeOrigem.logradouro ? l.componentes.aluno.enderecoDeOrigem.logradouro : ""),
                            complemento: l._formBuilder.control(l.componentes.aluno.enderecoDeOrigem && l.componentes.aluno.enderecoDeOrigem.complemento ? l.componentes.aluno.enderecoDeOrigem.complemento : ""),
                            cidade: l._formBuilder.control(l.componentes.aluno.enderecoDeOrigem && l.componentes.aluno.enderecoDeOrigem.cidade ? l.componentes.aluno.enderecoDeOrigem.cidade : ""),
                            bairro: l._formBuilder.control(l.componentes.aluno.enderecoDeOrigem && l.componentes.aluno.enderecoDeOrigem.bairro ? l.componentes.aluno.enderecoDeOrigem.bairro : ""),
                            numero: l._formBuilder.control(l.componentes.aluno.enderecoDeOrigem && l.componentes.aluno.enderecoDeOrigem.numero ? l.componentes.aluno.enderecoDeOrigem.numero : ""),
                            uf: l._formBuilder.control(l.componentes.aluno.enderecoDeOrigem && l.componentes.aluno.enderecoDeOrigem.uf ? l.componentes.aluno.enderecoDeOrigem.uf : ""),
                            ibge: l._formBuilder.control(l.componentes.aluno.enderecoDeOrigem && l.componentes.aluno.enderecoDeOrigem.ibge ? l.componentes.aluno.enderecoDeOrigem.ibge : "")
                        })
                    }),
                    l.limiteMaximo = l.componentes.maxComponentes,
                    l.zone.runOutsideAngular(function() {
                        l.componentes.matriculaAtual.forEach(function(n) {
                            l.componentes.cursoComTurmas.periodos.forEach(function(a) {
                                a.componentes.forEach(function(a) {
                                    a._id === n._id && n.turmas.forEach(function(n) {
                                        a.turmas.forEach(function(e) {
                                            n._id === e._id && l.addTurma({
                                                checked: !0
                                            }, a, e)
                                        })
                                    })
                                })
                            })
                        })
                    })
                }, function(n) {
                    l.erroConsulta = n.error
                })
            }
            ,
            l.prototype.atualizaContatos = function(l) {
                var n = this;
                this.turmaService.atualizaContatos(this.componentes.aluno._id, l).subscribe(function(l) {
                    n.aluno = n.componentes.aluno
                })
            }
            ,
            l.prototype.atualizaContatosFormValue = function(l) {
                var n = this;
                1 == l.selectedIndex && this.turmaService.atualizaContatos(this.componentes.aluno._id, this.contatoFormGroup.value).subscribe(function(l) {
                    n.aluno = n.componentes.aluno
                })
            }
            ,
            l.prototype.efetuarMatricula = function() {
                var l = this;
                this.processandoMatricula = !0,
                this.turmaService.efetuarMatricula(this.componentes._id, this.componentes.periodo._id, this.componentesAdicionados.map(function(l) {
                    return {
                        _id: l._id,
                        turmas: l.turmas.map(function(l) {
                            return {
                                _id: l._id
                            }
                        })
                    }
                }), this.uid).subscribe(function(n) {
                    l.aluno = l.componentes.aluno,
                    l.aluno.periodos = l.componentes.matrizDoAluno.periodos.length,
                    l.aluno.periodo = l.componentes.periodo,
                    l.aluno.curso = l.aluno.curso,
                    l.turmaService.setAluno(l.aluno),
                    l.turmaService.setComponente(l.componentesAdicionados),
                    l.turmaService.setComponentesLista(l.componentes),
                    l.router.navigate(["/aluno-aa/matricula-realizada"])
                }, function(n) {
                    l.processandoMatricula = !1,
                    l.notificacao(n)
                })
            }
            ,
            l.prototype.addTurma = function(l, n, a) {
                var e = this;
                if (n.teoriaePratica = n.turmas.some(function(l) {
                    return !l.tipoDeAula || "t" === l.tipoDeAula.sigla || "T" === l.tipoDeAula.sigla
                }) && n.turmas.some(function(l) {
                    return l.tipoDeAula && "t" !== l.tipoDeAula.sigla && "T" !== l.tipoDeAula.sigla
                }),
                l.checked) {
                    a.checked = !0;
                    var o = this.componentesAdicionados.find(function(l) {
                        return l._id === n._id
                    });
                    if (null != o) {
                        if (n.completo || o.turmas.push(a),
                        n.teoriaePratica) {
                            o.turmas.forEach(function(l) {
                                return l.tipoDeAula || (l.tipoDeAula = {
                                    sigla: "T"
                                }),
                                l
                            });
                            var u = o.turmas.reduce(function(l, n) {
                                return l[n.tipoDeAula.sigla] = (l[n.tipoDeAula.sigla] || 0) + 1,
                                l
                            }, {});
                            n.completo = 90 === n.chTotal ? !!(Object.values(u).every(function(l) {
                                return 1 === l
                            }) && Object.keys(u).length > 1) : !!(Object.values(u).every(function(l) {
                                return 1 === l
                            }) && Object.keys(u).length > 1 || a.horarioPorDia.length > 1)
                        }
                        this.componentesAdicionados.find(function(l) {
                            return l._id === n._id
                        }).completo = n.completo
                    } else
                        n.teoriaePratica && a.horarioPorDia.length < 2 ? n.completo = !1 : 90 === n.chTotal && n.teoriaePratica || (n.completo = !0),
                        this.componentesAdicionados.push({
                            _id: n._id,
                            nome: n.nome,
                            chTotal: n.chTotal,
                            creditos: n.creditos,
                            completo: n.completo,
                            turmas: [{
                                _id: a._id,
                                descricao: a.descricao,
                                horarioDetalhado: a.horarioDetalhado,
                                horarioPorDia: a.horarioPorDia,
                                tipoDeAula: a.tipoDeAula,
                                turno: a.turno
                            }],
                            adicionado: !0
                        });
                    this.zone.runOutsideAngular(function() {
                        a.horarioPorDia.forEach(function(l) {
                            e.horariosAdicionados.some(function(n) {
                                return l.dia === n.dia && l.horarios.some(function(l) {
                                    return n.horarios.some(function(n) {
                                        return n.mapKey === l.mapKey
                                    })
                                })
                            }) || e.horariosAdicionados.push(l)
                        })
                    }),
                    a.horarioDetalhado.forEach(function(l) {
                        l.dias.forEach(function(a) {
                            e.resumoHorario[l.mapKey + a] = n.nome
                        })
                    }),
                    n.adicionado = !0
                } else if (a.checked = !1,
                a.horarioDetalhado.forEach(function(l) {
                    l.dias.forEach(function(n) {
                        e.resumoHorario[l.mapKey + n] = " --- "
                    })
                }),
                this.componentesAdicionados.find(function(l) {
                    return l._id === n._id
                }).turmas = this.componentesAdicionados.find(function(l) {
                    return l._id === n._id
                }).turmas.filter(function(l) {
                    return l._id !== a._id
                }),
                this.componentesAdicionados = this.componentesAdicionados.filter(function(l) {
                    return l.turmas.length > 0
                }),
                this.horariosAdicionados = this.horariosAdicionados.filter(function(l) {
                    return a.horarioPorDia.every(function(n) {
                        return n.dia !== l.dia || n.dia === l.dia && !n.horarios.some(function(n) {
                            return l.horarios.some(function(l) {
                                return l.mapKey === n.mapKey
                            })
                        })
                    })
                }),
                n.teoriaePratica && a.horarioPorDia.length < 2) {
                    var t = this.componentesAdicionados.find(function(l) {
                        return l._id === n._id
                    });
                    null != t ? (t.turmas.forEach(function(l) {
                        return l.tipoDeAula || (l.tipoDeAula = {
                            sigla: "T"
                        }),
                        l
                    }),
                    u = t.turmas.reduce(function(l, n) {
                        return l[n.tipoDeAula.sigla] = (l[n.tipoDeAula.sigla] || 0) + 1,
                        l
                    }, {}),
                    90 === n.chTotal ? Object.values(u).some(function(l) {
                        return Number(l) > 1
                    }) && Object.keys(u).length > 1 ? (t.completo = !0,
                    n.completo = !0) : (t.completo = !1,
                    n.completo = !1) : Object.values(u).every(function(l) {
                        return 1 === l
                    }) && Object.keys(u).length > 1 || a.horarioPorDia.length > 1 ? (t.completo = !0,
                    n.completo = !0) : (t.completo = !1,
                    n.completo = !1)) : n.adicionado = !1
                } else
                    n.completo = !1,
                    n.adicionado = !1;
                this.zone.runOutsideAngular(function() {
                    e.componentes.cursoComTurmas.periodos.forEach(function(l) {
                        l.componentes.forEach(function(l) {
                            l.turmas.forEach(function(l) {
                                l.horarioPorDia.forEach(function(n) {
                                    e.horariosAdicionados.length < 1 && (n.choqueHorario = !1),
                                    n.choqueHorario = e.horariosAdicionados.some(function(e) {
                                        return n.dia === e.dia && n.horarios.some(function(l) {
                                            return e.horarios.some(function(n) {
                                                return n.mapKey === l.mapKey
                                            })
                                        }) && l._id !== a._id && !l.checked
                                    })
                                }),
                                l.choqueHorario = l.horarioPorDia.some(function(l) {
                                    return l.choqueHorario
                                }) && !l.checked
                            }),
                            l.choqueHorario = l.turmas.every(function(l) {
                                return l.choqueHorario
                            }),
                            l.turmasMarcadas = l.turmas.some(function(l) {
                                return l.checked
                            })
                        })
                    })
                }),
                a.checked && n.preRequisitos.length > 0 && n.preRequisitos.forEach(function(l) {
                    e.componentesAdicionados.find(function(n) {
                        return n._id === l._id
                    }) || e.componentes.cursoComTurmas.periodos.forEach(function(a) {
                        a.componentes.forEach(function(a) {
                            if (a._id === l._id) {
                                var o = a.turmas.find(function(l) {
                                    return !(l.choqueHorario || l.tipoDeAula && "t" !== l.tipoDeAula.sigla && "T" !== l.tipoDeAula.sigla)
                                });
                                o ? e.addTurma({
                                    checked: !0
                                }, a, o) : (n.completo = !1,
                                n.turmasMarcadas = !1,
                                n.choqueHorario = !0,
                                e.componentesAdicionados.find(function(l) {
                                    return l._id === n._id
                                }).completo = !1,
                                e.componentesAdicionados.find(function(l) {
                                    return l._id === n._id
                                }).turmasMarcadas = !1,
                                e.componentesAdicionados.find(function(l) {
                                    return l._id === n._id
                                }).choqueHorario = !0,
                                e.componentesCompletos = e.componentesAdicionados.every(function(l) {
                                    return l.completo
                                }))
                            }
                        })
                    })
                }),
                a.checked || !(n.preRequisitos.length > 0) || a.tipoDeAula && "t" !== a.tipoDeAula.sigla && "T" !== a.tipoDeAula.sigla || this.componentes.cursoComTurmas.periodos.forEach(function(l) {
                    l.componentes.forEach(function(l) {
                        l.preRequisitos.forEach(function(a) {
                            a._id === n._id && e.removeComponente(l)
                        })
                    })
                }),
                this.limiteAtingido = this.componentesAdicionados.length >= this.limiteMaximo,
                this.componentesCompletos = this.componentesAdicionados.every(function(l) {
                    return l.completo
                }),
                this.componentesCompletos ? this.secondFormGroup.get("secondCtrl").patchValue({
                    secondCtrl: !0
                }) : this.secondFormGroup.get("secondCtrl").patchValue({
                    secondCtrl: !1
                }),
                this.mostraTurnos.matutino = this.componentesAdicionados.some(function(l) {
                    return l.turmas.some(function(l) {
                        return "matutino" === l.turno.descricao
                    })
                }),
                this.mostraTurnos.vespertino = this.componentesAdicionados.some(function(l) {
                    return l.turmas.some(function(l) {
                        return "vespertino" === l.turno.descricao
                    })
                }),
                this.mostraTurnos.noturno = this.componentesAdicionados.some(function(l) {
                    return l.turmas.some(function(l) {
                        return "noturno" === l.turno.descricao
                    })
                }),
                this.componentesAdicionados.length < 1 && (this.mostraTurnos.matutino = !1,
                this.mostraTurnos.vespertino = !1,
                this.mostraTurnos.noturno = !1),
                this.mostraTurnos.matutino = !0,
                this.mostraTurnos.vespertino = !0,
                this.mostraTurnos.noturno = !0
            }
            ,
            l.prototype.removeComponente = function(l) {
                var n, a = this;
                this.componentes.cursoComTurmas.periodos.forEach(function(a) {
                    a.componentes.forEach(function(a) {
                        a._id === l._id && (n = a)
                    })
                }),
                n.teoriaePratica = n.turmas.some(function(l) {
                    return !l.tipoDeAula || "t" === l.tipoDeAula.sigla || "T" === l.tipoDeAula.sigla
                }) && n.turmas.some(function(l) {
                    return l.tipoDeAula && "t" !== l.tipoDeAula.sigla && "T" !== l.tipoDeAula.sigla
                }),
                n.turmas.forEach(function(l) {
                    l.checked = !1,
                    l.horarioDetalhado.forEach(function(l) {
                        l.dias.forEach(function(n) {
                            a.resumoHorario[l.mapKey + n] = " --- "
                        })
                    });
                    var n = !1;
                    l.horarioPorDia.forEach(function(e) {
                        a.componentesAdicionados.forEach(function(a) {
                            a.turmas.forEach(function(a) {
                                a.horarioPorDia.forEach(function(o) {
                                    e.dia === o.dia && e.horarios.some(function(l) {
                                        return o.horarios.some(function(n) {
                                            return n.mapKey === l.mapKey
                                        })
                                    }) && l._id !== a._id && (n = !0)
                                })
                            })
                        })
                    }),
                    n || (a.horariosAdicionados = a.horariosAdicionados.filter(function(n) {
                        return l.horarioPorDia.every(function(l) {
                            return l.dia !== n.dia || l.dia === n.dia && !l.horarios.some(function(l) {
                                return n.horarios.some(function(n) {
                                    return n.mapKey === l.mapKey
                                })
                            })
                        })
                    })),
                    a.componentes.cursoComTurmas.periodos.forEach(function(n) {
                        n.componentes.forEach(function(n) {
                            n.turmas.forEach(function(n) {
                                n.horarioPorDia.forEach(function(e) {
                                    a.horariosAdicionados.length < 1 && (e.choqueHorario = !1),
                                    e.choqueHorario = a.horariosAdicionados.some(function(a) {
                                        return e.dia === a.dia && e.horarios.some(function(l) {
                                            return a.horarios.some(function(n) {
                                                return n.mapKey === l.mapKey
                                            })
                                        }) && n._id !== l._id && !n.checked
                                    })
                                }),
                                n.choqueHorario = n.horarioPorDia.some(function(l) {
                                    return l.choqueHorario
                                }) && !n.checked
                            }),
                            n.choqueHorario = n.turmas.every(function(l) {
                                return l.choqueHorario
                            }),
                            n.turmasMarcadas = n.turmas.some(function(l) {
                                return l.checked
                            })
                        })
                    })
                }),
                this.componentesAdicionados = this.componentesAdicionados.filter(function(n) {
                    return n._id !== l._id
                }),
                n.completo = !1,
                n.adicionado = !1,
                this.limiteAtingido = this.componentesAdicionados.length >= this.limiteMaximo,
                this.componentesCompletos = this.componentesAdicionados.every(function(l) {
                    return l.completo
                }),
                this.componentesCompletos ? this.secondFormGroup.get("secondCtrl").patchValue({
                    secondCtrl: !0
                }) : this.secondFormGroup.get("secondCtrl").patchValue({
                    secondCtrl: !1
                }),
                this.componentes.cursoComTurmas.periodos.forEach(function(l) {
                    l.componentes.forEach(function(l) {
                        l.preRequisitos.forEach(function(e) {
                            e._id === n._id && a.removeComponente(l)
                        })
                    })
                }),
                this.mostraTurnos.matutino = this.componentesAdicionados.some(function(l) {
                    return l.turmas.some(function(l) {
                        return "matutino" === l.turno.descricao
                    })
                }),
                this.mostraTurnos.vespertino = this.componentesAdicionados.some(function(l) {
                    return l.turmas.some(function(l) {
                        return "vespertino" === l.turno.descricao
                    })
                }),
                this.mostraTurnos.noturno = this.componentesAdicionados.some(function(l) {
                    return l.turmas.some(function(l) {
                        return "noturno" === l.turno.descricao
                    })
                }),
                this.componentesAdicionados.length < 1 && (this.mostraTurnos.matutino = !1,
                this.mostraTurnos.vespertino = !1,
                this.mostraTurnos.noturno = !1)
            }
            ,
            l.prototype.onNotifySecond = function(l) {
                "VALID" == l && this.secondFormGroup.get("secondCtrl").patchValue({
                    secondCtrl: !0
                })
            }
            ,
            l.prototype.notificacao = function(l) {
                this.dialog.open(ml, {
                    width: "600px",
                    position: {
                        top: "50px"
                    },
                    data: {
                        error: l.error
                    }
                }).afterClosed().subscribe(function(l) {})
            }
            ,
            l.prototype.verContrato = function() {
                var l = this;
                this.dialog.open(Cl, {
                    width: "90%",
                    height: "80%",
                    position: {
                        top: "50px"
                    },
                    data: {
                        aluno: {
                            nome: this.componentes.aluno.nome.toUpperCase(),
                            ra: this.componentes.aluno.ra,
                            curso: this.componentes.aluno.curso.nome.toUpperCase(),
                            cpf: this.componentes.aluno.cpf,
                            rg: this.componentes.aluno.rg,
                            endereco: this.componentes.aluno.endereco,
                            telCelular: this.componentes.aluno.telCelular,
                            email: this.componentes.aluno.email,
                            nome_pai: this.componentes.aluno.nome_pai,
                            nome_mae: this.componentes.aluno.nome_mae,
                            nascimento: this.componentes.aluno.nascimento,
                            estado_civil: this.componentes.aluno.estado_civil,
                            resumoFinanceira: this.componentes.aluno.resumoFinanceira
                        }
                    }
                }).afterClosed().subscribe(function(n) {
                    l.contratoLido = n,
                    l.lerContrato = n
                })
            }
            ,
            l.prototype.showProgressSpinnerUntilExecuted = function() {
                this._spinnerDialog = this.dialog.open(xl.a, {})
            }
            ,
            l.prototype.closeProgressSpinnerUntilExecuted = function() {
                this._spinnerDialog.close()
            }
            ,
            l.prototype.findCEP = function(l) {
                var n = this;
                this.showProgressSpinnerUntilExecuted(),
                l ? this.viacep.buscarPorCep(this.thirdFormGroup.get("endereco.cep").value.replace(".", "").replace("-", "")).then(function(l) {
                    n.thirdFormGroup.get("endereco.cep").setValue(l.cep),
                    n.thirdFormGroup.get("endereco.logradouro").setValue(l.logradouro),
                    n.thirdFormGroup.get("endereco.bairro").setValue(l.bairro),
                    n.thirdFormGroup.get("endereco.cidade").setValue(l.localidade),
                    n.thirdFormGroup.get("endereco.uf").setValue(l.uf),
                    n.thirdFormGroup.get("endereco.ibge").setValue(l.ibge),
                    n.closeProgressSpinnerUntilExecuted(),
                    n.snackService.showDialog("Cep encontrado com sucesso!", "check_circle_outline")
                }).catch(function(l) {
                    switch (l.getCode()) {
                    case gl.a.CEP_MUITO_CURTO:
                        n.snackService.showDialog("Cep muito curto.", "info");
                        break;
                    case gl.a.CEP_MUITO_LONGO:
                        n.snackService.showDialog("Cep muito longo.", "info");
                        break;
                    case gl.a.CEP_NAO_ENCONTRADO:
                        n.snackService.showDialog("Cep n\xe3o encontrado.", "info")
                    }
                    n.thirdFormGroup.get("cep").reset(),
                    n.closeProgressSpinnerUntilExecuted()
                }) : this.viacep.buscarPorCep(this.thirdFormGroup.get("enderecoDeOrigem.cep").value.replace(".", "").replace("-", "")).then(function(l) {
                    n.thirdFormGroup.get("enderecoDeOrigem.cep").setValue(l.cep),
                    n.thirdFormGroup.get("enderecoDeOrigem.logradouro").setValue(l.logradouro),
                    n.thirdFormGroup.get("enderecoDeOrigem.bairro").setValue(l.bairro),
                    n.thirdFormGroup.get("enderecoDeOrigem.cidade").setValue(l.localidade),
                    n.thirdFormGroup.get("enderecoDeOrigem.uf").setValue(l.uf),
                    n.thirdFormGroup.get("enderecoDeOrigem.ibge").setValue(l.ibge),
                    n.closeProgressSpinnerUntilExecuted(),
                    n.snackService.showDialog("Cep encontrado com sucesso!", "check_circle_outline")
                }).catch(function(l) {
                    switch (l.getCode()) {
                    case gl.a.CEP_MUITO_CURTO:
                        n.snackService.showDialog("Cep muito curto.", "info");
                        break;
                    case gl.a.CEP_MUITO_LONGO:
                        n.snackService.showDialog("Cep muito longo.", "info");
                        break;
                    case gl.a.CEP_NAO_ENCONTRADO:
                        n.snackService.showDialog("Cep n\xe3o encontrado.", "info")
                    }
                    n.thirdFormGroup.get("cep").reset(),
                    n.closeProgressSpinnerUntilExecuted()
                })
            }
            ,
            l
        }()
          , _l = a("o3x0")
          , Ll = e.qb({
            encapsulation: 0,
            styles: [[".cor_titulo_mat-card[_ngcontent-%COMP%]{margin:5px 0;color:#3f51b5;font-family:Arial,Helvetica,sans-serif}.cor_titulo_mat-card-content[_ngcontent-%COMP%]{margin:5px 0;color:#202122;font-family:Arial,Helvetica,sans-serif}.cor_subtitulo_mat-card-content[_ngcontent-%COMP%]{margin:5px 0;color:#9c9ea4;font-size:.9em;font-family:Arial,Helvetica,sans-serif}.mat-card-content[_ngcontent-%COMP%]{font-size:13px}.choqueHorario[_ngcontent-%COMP%]{border:1px solid #ef5f55!important;background:#f4433612!important}.checked[_ngcontent-%COMP%]{border:1px solid #3f51b5!important;background:#3f51b51a!important}.resumoTitulo[_ngcontent-%COMP%]{font-size:11px;color:#fff;background:#3a4ba7;padding:5px;text-align:center;margin-bottom:10px;border-radius:5px}.resumoHorario[_ngcontent-%COMP%]{border:1px solid #3a4ba740;padding:2px;line-height:14px;border-radius:5px;text-align:center;background:rgba(58,75,167,.03);height:4.5em}.resumoComponente[_ngcontent-%COMP%]{border:1px solid #cec8c8;padding:2px;line-height:14px;border-radius:5px;text-align:center;background:rgba(238,238,238,.1);height:4.5em} .mat-checkbox-layout{white-space:normal!important} .mat-checkbox-inner-container{margin-top:5px!important}"]],
            data: {}
        });
        function vl(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 8, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 1, "mat-spinner", [["class", "mat-spinner mat-progress-spinner"], ["mode", "indeterminate"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"]], null, null, m.b, m.a)), e.rb(4, 49152, null, 0, x.d, [e.k, g.a, [2, h.e], [2, C.a], x.a], null, null), (l()(),
            e.sb(5, 0, null, null, 3, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(6, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 1, "span", [["class", "mat-subheading-2"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Consultando disponibilidade de matr\xedcula..."]))], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 2, 0, "center center"),
                l(n, 6, 0, "row")
            }, function(l, n) {
                l(n, 3, 0, e.Cb(n, 4)._noopAnimations, e.Cb(n, 4).diameter, e.Cb(n, 4).diameter)
            })
        }
        function kl(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 6, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 3, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(5, 0, null, null, 1, "span", [["class", "mat-subheading-2"]], null, null, null, null, null)), (l()(),
            e.Kb(6, null, ["", ""]))], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 2, 0, "center center"),
                l(n, 4, 0, "row")
            }, function(l, n) {
                l(n, 6, 0, n.component.erroConsulta.message)
            })
        }
        function Al(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 27, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["style", "padding: 5px 24px 0 24px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 8, "div", [["class", "mat-subheading-1"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(6, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(7, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], null, null), (l()(),
            e.Kb(-1, 0, ["label_important"])), (l()(),
            e.Kb(-1, null, [" \xa0 MATR\xcdCULA ACAD\xcaMICA: \xa0 "])), (l()(),
            e.sb(10, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            e.Kb(11, null, ["", ""])), (l()(),
            e.sb(12, 0, null, null, 15, "div", [["class", "mat-subheading-1"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["style", "margin-left: 30px;"]], null, null, null, null, null)), e.rb(13, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(14, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(15, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(16, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], null, null), (l()(),
            e.Kb(-1, 0, ["school"])), (l()(),
            e.Kb(18, null, [" \xa0 ", " - RA", " "])), e.Gb(19, 1), (l()(),
            e.sb(20, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["navigate_next"])), (l()(),
            e.Kb(22, null, [" ", " "])), e.Gb(23, 1), (l()(),
            e.sb(24, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["navigate_next"])), (l()(),
            e.Kb(26, null, [" ", " "])), e.Gb(27, 1)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "start center"),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "start center"),
                l(n, 7, 0),
                l(n, 13, 0, "row"),
                l(n, 14, 0, "start center"),
                l(n, 16, 0)
            }, function(l, n) {
                var a = n.component;
                l(n, 6, 0, e.Cb(n, 7).inline, "primary" !== e.Cb(n, 7).color && "accent" !== e.Cb(n, 7).color && "warn" !== e.Cb(n, 7).color),
                l(n, 11, 0, a.componentes.periodo.descricao),
                l(n, 15, 0, e.Cb(n, 16).inline, "primary" !== e.Cb(n, 16).color && "accent" !== e.Cb(n, 16).color && "warn" !== e.Cb(n, 16).color);
                var o = e.Lb(n, 18, 0, l(n, 19, 0, e.Cb(n.parent, 0), a.componentes.aluno.nome));
                l(n, 18, 0, o, a.componentes.aluno.ra);
                var u = e.Lb(n, 22, 0, l(n, 23, 0, e.Cb(n.parent, 0), a.componentes.aluno.curso.nome));
                l(n, 22, 0, u);
                var t = e.Lb(n, 26, 0, l(n, 27, 0, e.Cb(n.parent, 0), a.componentes.aluno.turno.descricao));
                l(n, 26, 0, t)
            })
        }
        function wl(l) {
            return e.Mb(0, [(l()(),
            e.Kb(-1, null, ["ATUALIZA\xc7\xc3O DE DADOS"]))], null, null)
        }
        function Fl(l) {
            return e.Mb(0, [(l()(),
            e.Kb(-1, null, ["Endere\xe7o"]))], null, null)
        }
        function Ol(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 4, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), e.rb(1, 16384, [[36, 4]], 0, L.b, [], null, null), (l()(),
            e.Kb(-1, null, [" O CEP \xe9 "])), (l()(),
            e.sb(3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["obrigat\xf3rio"]))], null, function(l, n) {
                l(n, 0, 0, e.Cb(n, 1).id)
            })
        }
        function Il(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 4, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), e.rb(1, 16384, [[43, 4]], 0, L.b, [], null, null), (l()(),
            e.Kb(-1, null, [" O logradouro \xe9 "])), (l()(),
            e.sb(3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["obrigat\xf3rio"]))], null, function(l, n) {
                l(n, 0, 0, e.Cb(n, 1).id)
            })
        }
        function Tl(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 4, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), e.rb(1, 16384, [[50, 4]], 0, L.b, [], null, null), (l()(),
            e.Kb(-1, null, [" O n\xfamero \xe9 "])), (l()(),
            e.sb(3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["obrigat\xf3rio"]))], null, function(l, n) {
                l(n, 0, 0, e.Cb(n, 1).id)
            })
        }
        function Pl(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 4, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), e.rb(1, 16384, [[64, 4]], 0, L.b, [], null, null), (l()(),
            e.Kb(-1, null, [" O bairro \xe9 "])), (l()(),
            e.sb(3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["obrigat\xf3rio"]))], null, function(l, n) {
                l(n, 0, 0, e.Cb(n, 1).id)
            })
        }
        function El(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 4, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), e.rb(1, 16384, [[71, 4]], 0, L.b, [], null, null), (l()(),
            e.Kb(-1, null, [" A cidade \xe9 "])), (l()(),
            e.sb(3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["obrigat\xf3ria"]))], null, function(l, n) {
                l(n, 0, 0, e.Cb(n, 1).id)
            })
        }
        function Sl(l) {
            return e.Mb(0, [(l()(),
            e.Kb(-1, null, ["ESCOLHER COMPONENTES E TURMAS"]))], null, null)
        }
        function Dl(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(1, null, ["", "\xba SEMESTRE"]))], null, function(l, n) {
                l(n, 1, 0, n.parent.context.$implicit.numero)
            })
        }
        function Ml(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["OPTATIVOS"]))], null, null)
        }
        function Rl(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 16777216, null, null, 4, "div", [["matTooltip", "Hor\xe1rio j\xe1 OCUPADO"]], null, [[null, "longpress"], [null, "keydown"], [null, "touchend"]], function(l, n, a) {
                var o = !0;
                return "longpress" === n && (o = !1 !== e.Cb(l, 1).show() && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 1)._handleKeydown(a) && o),
                "touchend" === n && (o = !1 !== e.Cb(l, 1)._handleTouchend() && o),
                o
            }, null, null)), e.rb(1, 147456, null, 0, v.d, [k.d, e.k, A.f, e.R, e.B, g.a, w.c, w.h, v.b, [2, F.b], [2, v.a], [2, O.g]], {
                message: [0, "message"]
            }, null), (l()(),
            e.sb(2, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["color", "warn"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(3, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["schedule"])), (l()(),
            e.kb(0, null, null, 0))], function(l, n) {
                l(n, 1, 0, "Hor\xe1rio j\xe1 OCUPADO"),
                l(n, 3, 0, "warn")
            }, function(l, n) {
                l(n, 2, 0, e.Cb(n, 3).inline, "primary" !== e.Cb(n, 3).color && "accent" !== e.Cb(n, 3).color && "warn" !== e.Cb(n, 3).color)
            })
        }
        function Gl(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 16777216, null, null, 4, "div", [["matTooltip", "Componente completo"]], null, [[null, "longpress"], [null, "keydown"], [null, "touchend"]], function(l, n, a) {
                var o = !0;
                return "longpress" === n && (o = !1 !== e.Cb(l, 1).show() && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 1)._handleKeydown(a) && o),
                "touchend" === n && (o = !1 !== e.Cb(l, 1)._handleTouchend() && o),
                o
            }, null, null)), e.rb(1, 147456, null, 0, v.d, [k.d, e.k, A.f, e.R, e.B, g.a, w.c, w.h, v.b, [2, F.b], [2, v.a], [2, O.g]], {
                message: [0, "message"]
            }, null), (l()(),
            e.sb(2, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["color", "primary"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(3, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["done_all"])), (l()(),
            e.kb(0, null, null, 0))], function(l, n) {
                l(n, 1, 0, "Componente completo"),
                l(n, 3, 0, "primary")
            }, function(l, n) {
                l(n, 2, 0, e.Cb(n, 3).inline, "primary" !== e.Cb(n, 3).color && "accent" !== e.Cb(n, 3).color && "warn" !== e.Cb(n, 3).color)
            })
        }
        function ql(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 16777216, null, null, 4, "div", [["matTooltip", "Falta escolher turma pr\xe1tica ou te\xf3rica"]], null, [[null, "longpress"], [null, "keydown"], [null, "touchend"]], function(l, n, a) {
                var o = !0;
                return "longpress" === n && (o = !1 !== e.Cb(l, 1).show() && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 1)._handleKeydown(a) && o),
                "touchend" === n && (o = !1 !== e.Cb(l, 1)._handleTouchend() && o),
                o
            }, null, null)), e.rb(1, 147456, null, 0, v.d, [k.d, e.k, A.f, e.R, e.B, g.a, w.c, w.h, v.b, [2, F.b], [2, v.a], [2, O.g]], {
                message: [0, "message"]
            }, null), (l()(),
            e.sb(2, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["color", "accent"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(3, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["report_problem"])), (l()(),
            e.kb(0, null, null, 0))], function(l, n) {
                l(n, 1, 0, "Falta escolher turma pr\xe1tica ou te\xf3rica"),
                l(n, 3, 0, "accent")
            }, function(l, n) {
                l(n, 2, 0, e.Cb(n, 3).inline, "primary" !== e.Cb(n, 3).color && "accent" !== e.Cb(n, 3).color && "warn" !== e.Cb(n, 3).color)
            })
        }
        function Nl(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 2, "h4", [["class", "cor_subtitulo_mat-card-content"]], null, null, null, null, null)), (l()(),
            e.Kb(1, null, [" ", " "])), e.Gb(2, 1)], null, function(l, n) {
                var a = e.Lb(n, 1, 0, l(n, 2, 0, e.Cb(n.parent.parent.parent.parent.parent.parent.parent, 0), n.parent.parent.context.$implicit.nome));
                l(n, 1, 0, a)
            })
        }
        function Bl(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 5, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Nl)), e.rb(5, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "10px"),
                l(n, 3, 0, "start center"),
                l(n, 5, 0, !(null != n.parent.context.$implicit && null != n.parent.context.$implicit.vigencia && n.parent.context.$implicit.vigencia.fim))
            }, null)
        }
        function zl(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 3, "div", [["fxLayout", "column"], ["style", "padding-left: 40px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Bl)), e.rb(3, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 3, 0, !(null != n.context.$implicit && null != n.context.$implicit.vigencia && n.context.$implicit.vigencia.fim))
            }, null)
        }
        function Kl(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 2, "div", [["style", "padding-left: 40px"]], null, null, null, null, null)), (l()(),
            e.sb(1, 0, null, null, 1, "small", [["style", "color: red;text-transform: uppercase"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Sem vagas dispon\xedveis"]))], null, null)
        }
        function Hl(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 5, "div", [["style", "padding-left: 40px"]], null, null, null, null, null)), (l()(),
            e.sb(1, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            e.Kb(2, null, ["", ""])), (l()(),
            e.Kb(-1, null, ["\xa0"])), (l()(),
            e.sb(4, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["vagas restantes"]))], null, function(l, n) {
                l(n, 2, 0, n.parent.context.$implicit.maximoVagas - n.parent.context.$implicit.quantidadeDeAlunos)
            })
        }
        function Ul(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 5, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 2, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.Kb(5, null, [" ", " - ", " "]))], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 2, 0, "center center"),
                l(n, 4, 0, "row")
            }, function(l, n) {
                l(n, 5, 0, n.context.$implicit.inicio, n.context.$implicit.fim)
            })
        }
        function jl(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 19, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "20px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(4, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(5, 16777216, null, null, 14, "div", [["fxLayout", "row"], ["fxLayout.lt-md", "column"], ["fxLayoutGap.lt-md", "0px"], ["style", "border: 1px solid #cec8c8;\n                            padding: 2px; line-height: 18px; text-align: center; border-radius: 5px; background: #eeeeeebf; min-width: 65px;"]], [[2, "choqueHorario", null], [2, "checked", null]], [[null, "longpress"], [null, "keydown"], [null, "touchend"]], function(l, n, a) {
                var o = !0;
                return "longpress" === n && (o = !1 !== e.Cb(l, 8).show() && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 8)._handleKeydown(a) && o),
                "touchend" === n && (o = !1 !== e.Cb(l, 8)._handleTouchend() && o),
                o
            }, null, null)), e.rb(6, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-md": [1, "fxLayout.lt-md"]
            }, null), e.rb(7, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                "fxLayoutGap.lt-md": [0, "fxLayoutGap.lt-md"]
            }, null), e.rb(8, 147456, null, 0, v.d, [k.d, e.k, A.f, e.R, e.B, g.a, w.c, w.h, v.b, [2, F.b], [2, v.a], [2, O.g]], {
                message: [0, "message"]
            }, null), (l()(),
            e.sb(9, 0, null, null, 10, "div", [["fxFlex", ""], ["fxLayout", "column"], ["fxLayoutAlign", "center center"], ["style", "font-size: .8em"]], null, null, null, null, null)), e.rb(10, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(11, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(12, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(13, 0, null, null, 4, "div", [["fxLayout", "row"], ["fxLayoutAlign", "center center"], ["style", "font-weight: bold;"]], null, null, null, null, null)), e.rb(14, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(15, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.Kb(16, null, [" ", " "])), e.Gb(17, 1), (l()(),
            e.kb(16777216, null, null, 1, null, Ul)), e.rb(19, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "20px"),
                l(n, 3, 0, "start center"),
                l(n, 4, 0, ""),
                l(n, 6, 0, "row", "column"),
                l(n, 7, 0, "0px"),
                l(n, 8, 0, n.context.$implicit.choqueHorario ? "Choque de hor\xe1rio" : ""),
                l(n, 10, 0, "column"),
                l(n, 11, 0, "center center"),
                l(n, 12, 0, ""),
                l(n, 14, 0, "row"),
                l(n, 15, 0, "center center"),
                l(n, 19, 0, n.context.$implicit.horarios)
            }, function(l, n) {
                l(n, 5, 0, n.context.$implicit.choqueHorario, n.parent.context.$implicit.checked);
                var a = e.Lb(n, 16, 0, l(n, 17, 0, e.Cb(n.parent.parent.parent.parent.parent, 0), n.context.$implicit.dia.substring(1)));
                l(n, 16, 0, a)
            })
        }
        function $l(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 6, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"], ["style", "margin: 0 0 15px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(3, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 2, "mat-divider", [["class", "mat-divider"], ["fxFlex", "90"], ["role", "separator"], ["style", "left: unset"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, I.b, I.a)), e.rb(5, 49152, null, 0, T.a, [], null, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "center center"),
                l(n, 3, 0, ""),
                l(n, 6, 0, "90")
            }, function(l, n) {
                l(n, 4, 0, e.Cb(n, 5).vertical ? "vertical" : "horizontal", e.Cb(n, 5).vertical, !e.Cb(n, 5).vertical, e.Cb(n, 5).inset)
            })
        }
        function Vl(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 28, "div", [["fxLayout", "column"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(2, 0, null, null, 24, "div", [["fxLayout", "column"], ["style", "margin-bottom: 15px"]], null, null, null, null, null)), e.rb(3, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 22, "div", [["fxLayout", "row"], ["fxLayout.lt-md", "column"], ["fxLayoutGap", "20px"], ["fxLayoutGap.lt-md", "0px"]], null, null, null, null, null)), e.rb(5, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-md": [1, "fxLayout.lt-md"]
            }, null), e.rb(6, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"],
                "fxLayoutGap.lt-md": [1, "fxLayoutGap.lt-md"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 17, "div", [["fxFlex", "60"], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(8, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(9, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(10, 0, null, null, 14, "div", [["fxLayout", "column"]], null, null, null, null, null)), e.rb(11, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(12, 0, null, null, 5, "div", [["style", "padding-left: 15px"]], null, null, null, null, null)), (l()(),
            e.sb(13, 0, null, null, 4, "mat-checkbox", [["class", "mat-checkbox"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null]], [[null, "change"]], function(l, n, a) {
                var e = !0;
                return "change" === n && (e = !1 !== l.component.addTurma(a, l.parent.context.$implicit, l.context.$implicit) && e),
                e
            }, P.b, P.a)), e.Hb(5120, null, E.r, function(l) {
                return [l]
            }, [S.b]), e.rb(15, 8568832, null, 0, S.b, [e.k, e.h, w.h, e.B, [8, null], [2, S.a], [2, C.a]], {
                checked: [0, "checked"],
                disabled: [1, "disabled"]
            }, {
                change: "change"
            }), (l()(),
            e.Kb(16, 0, [" ", ""])), e.Gb(17, 1), (l()(),
            e.sb(18, 0, null, null, 2, "div", [], null, null, null, null, null)), (l()(),
            e.kb(16777216, null, null, 1, null, zl)), e.rb(20, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Kl)), e.rb(22, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Hl)), e.rb(24, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, jl)), e.rb(26, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, $l)), e.rb(28, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null)], function(l, n) {
                var a = n.component;
                l(n, 1, 0, "column"),
                l(n, 3, 0, "column"),
                l(n, 5, 0, "row", "column"),
                l(n, 6, 0, "20px", "0px"),
                l(n, 8, 0, "row"),
                l(n, 9, 0, "60"),
                l(n, 11, 0, "column"),
                l(n, 15, 0, n.context.$implicit.checked, n.context.$implicit.choqueHorario || n.parent.context.$implicit.completo && !n.context.$implicit.checked || a.limiteAtingido && !n.context.$implicit.checked && (!n.parent.context.$implicit.teoriaePratica && !n.parent.context.$implicit.completo && !n.parent.context.$implicit.adicionado || n.parent.context.$implicit.teoriaePratica && !n.parent.context.$implicit.completo && !n.parent.context.$implicit.adicionado) || n.parent.context.$implicit.adicionado && n.parent.context.$implicit.chTotal < 90 && n.context.$implicit.horarioPorDia.length > 1 && !n.context.$implicit.checked || !n.context.$implicit.checked && n.context.$implicit.quantidadeDeAlunos >= n.context.$implicit.maximoVagas),
                l(n, 20, 0, n.context.$implicit.professores),
                l(n, 22, 0, n.context.$implicit.maximoVagas - n.context.$implicit.quantidadeDeAlunos < 1),
                l(n, 24, 0, n.context.$implicit.maximoVagas - n.context.$implicit.quantidadeDeAlunos > 0),
                l(n, 26, 0, n.context.$implicit.horarioPorDia),
                l(n, 28, 0, n.context.index < n.parent.context.$implicit.turmas.length - 1)
            }, function(l, n) {
                l(n, 13, 0, e.Cb(n, 15).id, null, e.Cb(n, 15).indeterminate, e.Cb(n, 15).checked, e.Cb(n, 15).disabled, "before" == e.Cb(n, 15).labelPosition, "NoopAnimations" === e.Cb(n, 15)._animationMode);
                var a = e.Lb(n, 16, 0, l(n, 17, 0, e.Cb(n.parent.parent.parent.parent, 0), n.context.$implicit.descricao));
                l(n, 16, 0, a)
            })
        }
        function Ql(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 26, "mat-card", [["class", "mat-elevation-z3 mat-card"], ["fxFlex", ""], ["style", "margin-bottom: 5px; padding-bottom: 0px; width: 94%; margin: 2px;"]], null, null, null, D.d, D.a)), e.rb(1, 49152, null, 0, M.a, [], null, null), e.rb(2, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(3, 0, null, 0, 19, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "20px"], ["style", "margin-bottom: 10px"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(6, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 3, "div", [], null, null, null, null, null)), (l()(),
            e.sb(8, 0, null, null, 2, "h4", [["style", "margin: unset; color: #3f51b5;"]], null, null, null, null, null)), (l()(),
            e.Kb(9, null, ["", ""])), e.Gb(10, 1), (l()(),
            e.sb(11, 0, null, null, 3, "div", [], null, null, null, null, null)), (l()(),
            e.sb(12, 0, null, null, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"], ["style", "margin: unset; color: #3f51b5;"]], null, null, null, null, null)), e.rb(13, 16384, null, 0, M.h, [], null, null), (l()(),
            e.Kb(14, null, ["", "h - ", " CR\xc9DITOS"])), (l()(),
            e.sb(15, 0, null, null, 1, "div", [["fxFlex", ""]], null, null, null, null, null)), e.rb(16, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Rl)), e.rb(18, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Gl)), e.rb(20, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, ql)), e.rb(22, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(23, 0, null, 0, 3, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), e.rb(24, 16384, null, 0, M.d, [], null, null), (l()(),
            e.kb(16777216, null, null, 1, null, Vl)), e.rb(26, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                l(n, 2, 0, ""),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "20px"),
                l(n, 6, 0, "start center"),
                l(n, 16, 0, ""),
                l(n, 18, 0, n.context.$implicit.choqueHorario),
                l(n, 20, 0, n.context.$implicit.completo),
                l(n, 22, 0, !n.context.$implicit.completo && n.context.$implicit.turmasMarcadas),
                l(n, 26, 0, n.context.$implicit.turmas)
            }, function(l, n) {
                var a = e.Lb(n, 9, 0, l(n, 10, 0, e.Cb(n.parent.parent.parent, 0), n.context.$implicit.nome));
                l(n, 9, 0, a),
                l(n, 14, 0, n.context.$implicit.chTotal, n.context.$implicit.creditos)
            })
        }
        function Yl(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 13, "div", [["fxLayout", "column"], ["style", "margin-bottom: 15px;"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(2, 0, null, null, 9, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(3, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 7, "div", [["fxFlex", "25"], ["fxLayoutAlign", "center center"], ["style", "background: #3f51b5; border-bottom: unset; border-top-left-radius: 6px; border-top-right-radius: 6px; height: 35px;"]], null, null, null, null, null)), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 4, "p", [["style", "color: white; font-size: 15px"]], null, null, null, null, null)), (l()(),
            e.kb(16777216, null, null, 1, null, Dl)), e.rb(9, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Ml)), e.rb(11, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Ql)), e.rb(13, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 3, 0, "row"),
                l(n, 5, 0, "center center"),
                l(n, 6, 0, "25"),
                l(n, 9, 0, 0 != n.context.$implicit.numero),
                l(n, 11, 0, 0 == n.context.$implicit.numero),
                l(n, 13, 0, n.context.$implicit.componentes)
            }, null)
        }
        function Jl(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 9, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "5px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(4, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(5, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["color", "accent"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(6, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["report_problem"])), (l()(),
            e.sb(8, 0, null, null, 1, "small", [["style", "color: red"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Existem pend\xeancias em componentes."]))], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "5px"),
                l(n, 3, 0, "start center"),
                l(n, 4, 0, ""),
                l(n, 6, 0, "accent")
            }, function(l, n) {
                l(n, 5, 0, e.Cb(n, 6).inline, "primary" !== e.Cb(n, 6).color && "accent" !== e.Cb(n, 6).color && "warn" !== e.Cb(n, 6).color)
            })
        }
        function Zl(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 9, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "5px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(4, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(5, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["color", "accent"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(6, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["report"])), (l()(),
            e.sb(8, 0, null, null, 1, "small", [["style", "color: red"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Limite de componentes excedido."]))], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "5px"),
                l(n, 3, 0, "start center"),
                l(n, 4, 0, ""),
                l(n, 6, 0, "accent")
            }, function(l, n) {
                l(n, 5, 0, e.Cb(n, 6).inline, "primary" !== e.Cb(n, 6).color && "accent" !== e.Cb(n, 6).color && "warn" !== e.Cb(n, 6).color)
            })
        }
        function Xl(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 9, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "5px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(4, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(5, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["color", "accent"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(6, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["report"])), (l()(),
            e.sb(8, 0, null, null, 1, "small", [["style", "color: red"]], null, null, null, null, null)), (l()(),
            e.Kb(9, null, ["Inclua pelo menos ", " componentes."]))], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "5px"),
                l(n, 3, 0, "start center"),
                l(n, 4, 0, ""),
                l(n, 6, 0, "accent")
            }, function(l, n) {
                var a = n.component;
                l(n, 5, 0, e.Cb(n, 6).inline, "primary" !== e.Cb(n, 6).color && "accent" !== e.Cb(n, 6).color && "warn" !== e.Cb(n, 6).color),
                l(n, 9, 0, a.limiteMinimo)
            })
        }
        function Wl(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 9, "div", [["fxLayout", "row"], ["style", "margin: 15px;"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(2, 0, null, null, 7, "div", [["fxLayout", "column"]], null, null, null, null, null)), e.rb(3, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Jl)), e.rb(5, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Zl)), e.rb(7, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Xl)), e.rb(9, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null)], function(l, n) {
                var a = n.component;
                l(n, 1, 0, "row"),
                l(n, 3, 0, "column"),
                l(n, 5, 0, a.componentesAdicionados.length > 0 && !a.componentesCompletos),
                l(n, 7, 0, a.componentesAdicionados.length > 0 && a.componentesAdicionados.length > a.limiteMaximo),
                l(n, 9, 0, a.componentesAdicionados.length < a.limiteMinimo)
            }, null)
        }
        function ln(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 13, "mat-list-item", [["class", "mat-list-item"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], null, null, R.f, R.b)), e.rb(1, 1228800, null, 3, G.c, [e.k, [2, G.g], [2, G.a], e.h], null, null), e.Ib(603979776, 121, {
                _lines: 1
            }), e.Ib(335544320, 122, {
                _avatar: 0
            }), e.Ib(335544320, 123, {
                _icon: 0
            }), (l()(),
            e.sb(5, 0, null, 1, 3, "p", [["class", "mat-line"], ["matLine", ""], ["style", "font-size:13px;"]], null, null, null, null, null)), e.rb(6, 16384, [[121, 4]], 0, q.o, [], null, null), (l()(),
            e.Kb(7, null, [" ", " "])), e.Gb(8, 1), (l()(),
            e.sb(9, 0, null, 2, 4, "button", [["mat-icon-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function(l, n, a) {
                var e = !0;
                return "click" === n && (e = !1 !== l.component.removeComponente(l.context.$implicit) && e),
                e
            }, N.d, N.b)), e.rb(10, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], null, null), (l()(),
            e.sb(11, 0, null, 0, 2, "mat-icon", [["class", "mat-24 mat-icon notranslate"], ["role", "img"], ["style", "color: red"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(12, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], null, null), (l()(),
            e.Kb(-1, 0, ["clear"]))], function(l, n) {
                l(n, 12, 0)
            }, function(l, n) {
                l(n, 0, 0, e.Cb(n, 1)._avatar || e.Cb(n, 1)._icon, e.Cb(n, 1)._avatar || e.Cb(n, 1)._icon);
                var a = e.Lb(n, 7, 0, l(n, 8, 0, e.Cb(n.parent.parent, 0), n.context.$implicit.nome));
                l(n, 7, 0, a),
                l(n, 9, 0, e.Cb(n, 10).disabled || null, "NoopAnimations" === e.Cb(n, 10)._animationMode),
                l(n, 11, 0, e.Cb(n, 12).inline, "primary" !== e.Cb(n, 12).color && "accent" !== e.Cb(n, 12).color && "warn" !== e.Cb(n, 12).color)
            })
        }
        function nn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 5, "mat-list-item", [["class", "mat-list-item"], ["style", "color: #5d6cc0;font-size:13px;"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], null, null, R.f, R.b)), e.rb(1, 1228800, null, 3, G.c, [e.k, [2, G.g], [2, G.a], e.h], null, null), e.Ib(603979776, 124, {
                _lines: 1
            }), e.Ib(335544320, 125, {
                _avatar: 0
            }), e.Ib(335544320, 126, {
                _icon: 0
            }), (l()(),
            e.Kb(-1, 2, [" Voc\xea ainda n\xe3o escolheu nenhum componente! "]))], null, function(l, n) {
                l(n, 0, 0, e.Cb(n, 1)._avatar || e.Cb(n, 1)._icon, e.Cb(n, 1)._avatar || e.Cb(n, 1)._icon)
            })
        }
        function an(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 11, "div", [["fxLayout", "row"], ["style", "margin: 15px;"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(2, 0, null, null, 9, "div", [["fxFlex", ""], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(3, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(4, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(5, 0, null, null, 1, "div", [["fxFlex", ""]], null, null, null, null, null)), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 4, "button", [["color", "primary"], ["mat-stroked-button", ""], ["matStepperNext", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null], [8, "type", 0]], [[null, "click"]], function(l, n, a) {
                var o = !0;
                return "click" === n && (o = !1 !== e.Cb(l, 10)._stepper.next() && o),
                o
            }, N.d, N.b)), e.rb(8, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                disabled: [0, "disabled"],
                color: [1, "color"]
            }, null), e.Hb(2048, null, z.d, null, [K.f]), e.rb(10, 16384, null, 0, K.i, [z.d], null, null), (l()(),
            e.Kb(-1, 0, ["PROSSEGUIR"]))], function(l, n) {
                var a = n.component;
                l(n, 1, 0, "row"),
                l(n, 3, 0, "row"),
                l(n, 4, 0, ""),
                l(n, 6, 0, ""),
                l(n, 8, 0, !a.componentesCompletos || a.componentesAdicionados.length > a.limiteMaximo || a.componentesAdicionados.length < a.limiteMinimo, "primary")
            }, function(l, n) {
                l(n, 7, 0, e.Cb(n, 8).disabled || null, "NoopAnimations" === e.Cb(n, 8)._animationMode, e.Cb(n, 10).type)
            })
        }
        function en(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 4, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"], ["style", "color: #5d6cc0;"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(3, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(-1, null, [" Voc\xea ainda n\xe3o escolheu nenhum componente! "]))], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "center center"),
                l(n, 3, 0, "")
            }, null)
        }
        function on(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 8, "div", [["fxFlex", ""], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 5, "div", [["class", "resumoTitulo"], ["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(7, null, [" ", ""])), e.Gb(8, 1)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, ""),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "center center"),
                l(n, 6, 0, "")
            }, function(l, n) {
                var a = e.Lb(n, 7, 0, l(n, 8, 0, e.Cb(n.parent.parent.parent, 0), n.context.$implicit.substring(1)));
                l(n, 7, 0, a)
            })
        }
        function un(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 9, "div", [["class", "resumoComponente"], ["fxFlex", ""], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 6, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 2, "span", [["style", "font-size: .7em"]], null, null, null, null, null)), (l()(),
            e.Kb(8, null, ["", ""])), e.Gb(9, 1)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, ""),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "center center"),
                l(n, 6, 0, "")
            }, function(l, n) {
                var a = n.component
                  , o = e.Lb(n, 8, 0, l(n, 9, 0, e.Cb(n.parent.parent.parent.parent, 0), a.resumoHorario[n.parent.context.$implicit.mapKey + n.context.$implicit] || " --- "));
                l(n, 8, 0, o)
            })
        }
        function tn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 9, "div", [["fxLayout", "row"], ["fxLayoutGap", "3px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 4, "div", [["class", "resumoHorario"], ["fxFlex", "12"], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(7, null, [" ", " - ", " "])), (l()(),
            e.kb(16777216, null, null, 1, null, un)), e.rb(9, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "3px"),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "center center"),
                l(n, 6, 0, "12"),
                l(n, 9, 0, n.context.$implicit.dias)
            }, function(l, n) {
                l(n, 7, 0, n.context.$implicit.inicio, n.context.$implicit.fim)
            })
        }
        function rn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 19, "div", [], null, null, null, null, null)), (l()(),
            e.sb(1, 0, null, null, 6, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(2, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 4, "div", [["fxFlex", "25"], ["fxLayoutAlign", "center center"], ["style", "background: #ebedf8b0; margin: 0 auto; border-bottom: unset; border-top-left-radius: 6px; border-top-right-radius: 6px; height: 35px;"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(5, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(6, 0, null, null, 1, "p", [["style", "color: rgba(0,0,0,.87); font-size: 15px"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["MATUTINO"])), (l()(),
            e.sb(8, 0, null, null, 9, "div", [["fxLayout", "row"], ["fxLayoutGap", "3px"]], null, null, null, null, null)), e.rb(9, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(10, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(11, 0, null, null, 4, "div", [["class", "resumoTitulo"], ["fxFlex", "12"], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(12, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(13, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(14, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(-1, null, ["HOR\xc1RIO"])), (l()(),
            e.kb(16777216, null, null, 1, null, on)), e.rb(17, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, tn)), e.rb(19, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                var a = n.component;
                l(n, 2, 0, "row"),
                l(n, 4, 0, "center center"),
                l(n, 5, 0, "25"),
                l(n, 9, 0, "row"),
                l(n, 10, 0, "3px"),
                l(n, 12, 0, "row"),
                l(n, 13, 0, "center center"),
                l(n, 14, 0, "12"),
                l(n, 17, 0, null == a.componentes ? null : a.componentes.horarioPadrao.matutino[0].dias),
                l(n, 19, 0, null == a.componentes ? null : a.componentes.horarioPadrao.matutino)
            }, null)
        }
        function sn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 8, "div", [["fxFlex", ""], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 5, "div", [["class", "resumoTitulo"], ["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(7, null, [" ", ""])), e.Gb(8, 1)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, ""),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "center center"),
                l(n, 6, 0, "")
            }, function(l, n) {
                var a = e.Lb(n, 7, 0, l(n, 8, 0, e.Cb(n.parent.parent.parent, 0), n.context.$implicit.substring(1)));
                l(n, 7, 0, a)
            })
        }
        function cn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 9, "div", [["class", "resumoComponente"], ["fxFlex", ""], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 6, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 2, "span", [["style", "font-size: .7em"]], null, null, null, null, null)), (l()(),
            e.Kb(8, null, ["", ""])), e.Gb(9, 1)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, ""),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "center center"),
                l(n, 6, 0, "")
            }, function(l, n) {
                var a = n.component
                  , o = e.Lb(n, 8, 0, l(n, 9, 0, e.Cb(n.parent.parent.parent.parent, 0), a.resumoHorario[n.parent.context.$implicit.mapKey + n.context.$implicit] || " --- "));
                l(n, 8, 0, o)
            })
        }
        function dn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 9, "div", [["fxLayout", "row"], ["fxLayoutGap", "3px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 4, "div", [["class", "resumoHorario"], ["fxFlex", "12"], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(7, null, [" ", " - ", " "])), (l()(),
            e.kb(16777216, null, null, 1, null, cn)), e.rb(9, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "3px"),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "center center"),
                l(n, 6, 0, "12"),
                l(n, 9, 0, n.context.$implicit.dias)
            }, function(l, n) {
                l(n, 7, 0, n.context.$implicit.inicio, n.context.$implicit.fim)
            })
        }
        function pn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 19, "div", [], null, null, null, null, null)), (l()(),
            e.sb(1, 0, null, null, 6, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(2, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 4, "div", [["fxFlex", "25"], ["fxLayoutAlign", "center center"], ["style", "background: #ebedf8b0; margin: 0 auto; border-bottom: unset; border-top-left-radius: 6px; border-top-right-radius: 6px; height: 35px;"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(5, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(6, 0, null, null, 1, "p", [["style", "color: rgba(0,0,0,.87); font-size: 15px"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["VESPERTINO"])), (l()(),
            e.sb(8, 0, null, null, 9, "div", [["fxLayout", "row"], ["fxLayoutGap", "3px"]], null, null, null, null, null)), e.rb(9, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(10, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(11, 0, null, null, 4, "div", [["class", "resumoTitulo"], ["fxFlex", "12"], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(12, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(13, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(14, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(-1, null, ["HOR\xc1RIO"])), (l()(),
            e.kb(16777216, null, null, 1, null, sn)), e.rb(17, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, dn)), e.rb(19, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                var a = n.component;
                l(n, 2, 0, "row"),
                l(n, 4, 0, "center center"),
                l(n, 5, 0, "25"),
                l(n, 9, 0, "row"),
                l(n, 10, 0, "3px"),
                l(n, 12, 0, "row"),
                l(n, 13, 0, "center center"),
                l(n, 14, 0, "12"),
                l(n, 17, 0, null == a.componentes ? null : a.componentes.horarioPadrao.vespertino[0].dias),
                l(n, 19, 0, null == a.componentes ? null : a.componentes.horarioPadrao.vespertino)
            }, null)
        }
        function bn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 8, "div", [["fxFlex", ""], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 5, "div", [["class", "resumoTitulo"], ["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(7, null, [" ", ""])), e.Gb(8, 1)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, ""),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "center center"),
                l(n, 6, 0, "")
            }, function(l, n) {
                var a = e.Lb(n, 7, 0, l(n, 8, 0, e.Cb(n.parent.parent.parent, 0), n.context.$implicit.substring(1)));
                l(n, 7, 0, a)
            })
        }
        function fn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 9, "div", [["class", "resumoComponente"], ["fxFlex", ""], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 6, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 2, "span", [["style", "font-size: .7em"]], null, null, null, null, null)), (l()(),
            e.Kb(8, null, ["", ""])), e.Gb(9, 1)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, ""),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "center center"),
                l(n, 6, 0, "")
            }, function(l, n) {
                var a = n.component
                  , o = e.Lb(n, 8, 0, l(n, 9, 0, e.Cb(n.parent.parent.parent.parent, 0), a.resumoHorario[n.parent.context.$implicit.mapKey + n.context.$implicit] || " --- "));
                l(n, 8, 0, o)
            })
        }
        function mn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 9, "div", [["fxLayout", "row"], ["fxLayoutGap", "3px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 4, "div", [["class", "resumoHorario"], ["fxFlex", "12"], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(7, null, [" ", " - ", " "])), (l()(),
            e.kb(16777216, null, null, 1, null, fn)), e.rb(9, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "3px"),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "center center"),
                l(n, 6, 0, "12"),
                l(n, 9, 0, n.context.$implicit.dias)
            }, function(l, n) {
                l(n, 7, 0, n.context.$implicit.inicio, n.context.$implicit.fim)
            })
        }
        function xn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 19, "div", [], null, null, null, null, null)), (l()(),
            e.sb(1, 0, null, null, 6, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(2, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 4, "div", [["fxFlex", "25"], ["fxLayoutAlign", "center center"], ["style", "background: #ebedf8b0; margin: 0 auto; border-bottom: unset; border-top-left-radius: 6px; border-top-right-radius: 6px; height: 35px;"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(5, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(6, 0, null, null, 1, "p", [["style", "color: rgba(0,0,0,.87); font-size: 15px"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["NOTURNO"])), (l()(),
            e.sb(8, 0, null, null, 9, "div", [["fxLayout", "row"], ["fxLayoutGap", "3px"]], null, null, null, null, null)), e.rb(9, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(10, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(11, 0, null, null, 4, "div", [["class", "resumoTitulo"], ["fxFlex", "12"], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(12, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(13, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(14, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(-1, null, ["HOR\xc1RIO"])), (l()(),
            e.kb(16777216, null, null, 1, null, bn)), e.rb(17, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, mn)), e.rb(19, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                var a = n.component;
                l(n, 2, 0, "row"),
                l(n, 4, 0, "center center"),
                l(n, 5, 0, "25"),
                l(n, 9, 0, "row"),
                l(n, 10, 0, "3px"),
                l(n, 12, 0, "row"),
                l(n, 13, 0, "center center"),
                l(n, 14, 0, "12"),
                l(n, 17, 0, null == a.componentes ? null : a.componentes.horarioPadrao.noturno[0].dias),
                l(n, 19, 0, null == a.componentes ? null : a.componentes.horarioPadrao.noturno)
            }, null)
        }
        function gn(l) {
            return e.Mb(0, [(l()(),
            e.Kb(-1, null, ["CONFIRMA\xc7\xc3O"]))], null, null)
        }
        function hn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 5, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 2, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.Kb(5, null, [" ", " - ", " "]))], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 2, 0, "center center"),
                l(n, 4, 0, "row")
            }, function(l, n) {
                l(n, 5, 0, n.context.$implicit.inicio, n.context.$implicit.fim)
            })
        }
        function Cn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 18, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "20px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(4, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(5, 0, null, null, 13, "div", [["fxLayout", "row"], ["fxLayout.lt-md", "column"], ["fxLayoutGap.lt-md", "0px"], ["style", "border: 1px solid #cec8c8;\n                  padding: 2px; line-height: 18px; text-align: center; border-radius: 5px; background: #eeeeeebf; min-width: 65px;"]], null, null, null, null, null)), e.rb(6, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-md": [1, "fxLayout.lt-md"]
            }, null), e.rb(7, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                "fxLayoutGap.lt-md": [0, "fxLayoutGap.lt-md"]
            }, null), (l()(),
            e.sb(8, 0, null, null, 10, "div", [["fxFlex", ""], ["fxLayout", "column"], ["fxLayoutAlign", "center center"], ["style", "font-size: .8em"]], null, null, null, null, null)), e.rb(9, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(10, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(11, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(12, 0, null, null, 4, "div", [["fxLayout", "row"], ["fxLayoutAlign", "center center"], ["style", "font-weight: bold;"]], null, null, null, null, null)), e.rb(13, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(14, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.Kb(15, null, [" ", " "])), e.Gb(16, 1), (l()(),
            e.kb(16777216, null, null, 1, null, hn)), e.rb(18, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "20px"),
                l(n, 3, 0, "start center"),
                l(n, 4, 0, ""),
                l(n, 6, 0, "row", "column"),
                l(n, 7, 0, "0px"),
                l(n, 9, 0, "column"),
                l(n, 10, 0, "center center"),
                l(n, 11, 0, ""),
                l(n, 13, 0, "row"),
                l(n, 14, 0, "center center"),
                l(n, 18, 0, n.context.$implicit.horarios)
            }, function(l, n) {
                var a = e.Lb(n, 15, 0, l(n, 16, 0, e.Cb(n.parent.parent.parent.parent, 0), n.context.$implicit.dia.substring(1)));
                l(n, 15, 0, a)
            })
        }
        function yn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 6, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"], ["style", "margin: 0 0 15px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(3, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 2, "mat-divider", [["class", "mat-divider"], ["fxFlex", "90"], ["role", "separator"], ["style", "left: unset"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, I.b, I.a)), e.rb(5, 49152, null, 0, T.a, [], null, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "center center"),
                l(n, 3, 0, ""),
                l(n, 6, 0, "90")
            }, function(l, n) {
                l(n, 4, 0, e.Cb(n, 5).vertical ? "vertical" : "horizontal", e.Cb(n, 5).vertical, !e.Cb(n, 5).vertical, e.Cb(n, 5).inset)
            })
        }
        function _n(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 18, "div", [["fxLayout", "column"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(2, 0, null, null, 14, "div", [["fxLayout", "column"], ["style", "margin-bottom: 15px"]], null, null, null, null, null)), e.rb(3, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 12, "div", [["fxLayout", "row"], ["fxLayoutGap", "20px"], ["fxLayoutGap.lt-md", "0px"]], null, null, null, null, null)), e.rb(5, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(6, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"],
                "fxLayoutGap.lt-md": [1, "fxLayoutGap.lt-md"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 7, "div", [["fxFlex", "60"], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(8, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(9, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(10, 0, null, null, 4, "div", [["fxLayout", "column"]], null, null, null, null, null)), e.rb(11, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(12, 0, null, null, 2, "div", [["style", "padding-left: 15px"]], null, null, null, null, null)), (l()(),
            e.Kb(13, null, [" ", " "])), e.Gb(14, 1), (l()(),
            e.kb(16777216, null, null, 1, null, Cn)), e.rb(16, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, yn)), e.rb(18, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 3, 0, "column"),
                l(n, 5, 0, "row"),
                l(n, 6, 0, "20px", "0px"),
                l(n, 8, 0, "row"),
                l(n, 9, 0, "60"),
                l(n, 11, 0, "column"),
                l(n, 16, 0, n.context.$implicit.horarioPorDia),
                l(n, 18, 0, n.context.index < n.parent.context.$implicit.turmas.length - 1)
            }, function(l, n) {
                var a = e.Lb(n, 13, 0, l(n, 14, 0, e.Cb(n.parent.parent.parent, 0), n.context.$implicit.descricao));
                l(n, 13, 0, a)
            })
        }
        function Ln(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 21, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 18, "mat-card", [["class", "mat-elevation-z3 mat-card"], ["fxFlex", ""], ["style", "margin-bottom: 5px; padding-bottom: 0px; width: 94%; margin: 2px;"]], null, null, null, D.d, D.a)), e.rb(4, 49152, null, 0, M.a, [], null, null), e.rb(5, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(6, 0, null, 0, 11, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "20px"], ["style", "margin-bottom: 10px"]], null, null, null, null, null)), e.rb(7, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(8, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(9, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(10, 0, null, null, 3, "div", [], null, null, null, null, null)), (l()(),
            e.sb(11, 0, null, null, 2, "h4", [["style", "margin: unset; color: #3f51b5;"]], null, null, null, null, null)), (l()(),
            e.Kb(12, null, ["", ""])), e.Gb(13, 1), (l()(),
            e.sb(14, 0, null, null, 3, "div", [], null, null, null, null, null)), (l()(),
            e.sb(15, 0, null, null, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"], ["style", "margin: unset; color: #3f51b5;"]], null, null, null, null, null)), e.rb(16, 16384, null, 0, M.h, [], null, null), (l()(),
            e.Kb(17, null, ["", "h - ", " CR\xc9DITOS"])), (l()(),
            e.sb(18, 0, null, 0, 3, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), e.rb(19, 16384, null, 0, M.d, [], null, null), (l()(),
            e.kb(16777216, null, null, 1, null, _n)), e.rb(21, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 2, 0, "center center"),
                l(n, 5, 0, ""),
                l(n, 7, 0, "row"),
                l(n, 8, 0, "20px"),
                l(n, 9, 0, "start center"),
                l(n, 21, 0, n.context.$implicit.turmas)
            }, function(l, n) {
                var a = e.Lb(n, 12, 0, l(n, 13, 0, e.Cb(n.parent.parent, 0), n.context.$implicit.nome));
                l(n, 12, 0, a),
                l(n, 17, 0, n.context.$implicit.chTotal, n.context.$implicit.creditos)
            })
        }
        function vn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 8, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "5px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["color", "accent"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(5, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["report_problem"])), (l()(),
            e.sb(7, 0, null, null, 1, "small", [["style", "color: red"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Exitem pend\xeancias na escolha dos componentes. Clique no bot\xe3o 'VOLTAR' para corrigir."]))], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "5px"),
                l(n, 3, 0, "start center"),
                l(n, 5, 0, "accent")
            }, function(l, n) {
                l(n, 4, 0, e.Cb(n, 5).inline, "primary" !== e.Cb(n, 5).color && "accent" !== e.Cb(n, 5).color && "warn" !== e.Cb(n, 5).color)
            })
        }
        function kn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 39, "div", [["fxLayout", "column"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 26, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-between center"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(6, 0, null, null, 18, "div", [["fxFlex", "75"], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(7, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(8, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(9, 0, null, null, 15, "div", [["fxLayout", "column"]], null, null, null, null, null)), e.rb(10, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(11, 0, null, null, 6, "mat-checkbox", [["class", "mat-checkbox"], ["style", "font-size: 0.9em;"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function(l, n, a) {
                var e = !0;
                return "ngModelChange" === n && (e = !1 !== (l.component.confirmacaoFinal = a) && e),
                e
            }, P.b, P.a)), e.rb(12, 8568832, null, 0, S.b, [e.k, e.h, w.h, e.B, [8, null], [2, S.a], [2, C.a]], {
                disabled: [0, "disabled"]
            }, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [S.b]), e.rb(14, 671744, null, 0, E.w, [[8, null], [8, null], [8, null], [6, E.r]], {
                isDisabled: [0, "isDisabled"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), e.Hb(2048, null, E.s, null, [E.w]), e.rb(16, 16384, null, 0, E.t, [[4, E.s]], null, null), (l()(),
            e.Kb(-1, 0, ["Confirmo que todas as informa\xe7\xf5es acima est\xe3o corretas, de acordo com as escolhas feitas e com as condi\xe7\xf5es de pagamento."])), (l()(),
            e.sb(18, 0, null, null, 6, "mat-checkbox", [["class", "mat-checkbox"], ["style", "font-size: 0.9em;"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"]], function(l, n, a) {
                var e = !0
                  , o = l.component;
                return "ngModelChange" === n && (e = !1 !== (o.lerContrato = a) && e),
                "click" === n && (e = !1 !== o.verContrato() && e),
                e
            }, P.b, P.a)), e.rb(19, 8568832, null, 0, S.b, [e.k, e.h, w.h, e.B, [8, null], [2, S.a], [2, C.a]], {
                disabled: [0, "disabled"]
            }, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [S.b]), e.rb(21, 671744, null, 0, E.w, [[8, null], [8, null], [8, null], [6, E.r]], {
                isDisabled: [0, "isDisabled"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), e.Hb(2048, null, E.s, null, [E.w]), e.rb(23, 16384, null, 0, E.t, [[4, E.s]], null, null), (l()(),
            e.Kb(-1, 0, ["Declaro que li e concordo com o Contrato de Presta\xe7\xe3o de Servi\xe7os Educacionais."])), (l()(),
            e.sb(25, 0, null, null, 4, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(26, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(27, 0, null, null, 2, "button", [["color", "primary"], ["mat-raised-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function(l, n, a) {
                var e = !0;
                return "click" === n && (e = !1 !== l.component.efetuarMatricula() && e),
                e
            }, N.d, N.b)), e.rb(28, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                disabled: [0, "disabled"],
                color: [1, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["EFETUAR MATR\xcdCULA"])), (l()(),
            e.sb(30, 0, null, null, 9, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-between center"]], null, null, null, null, null)), e.rb(31, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(32, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, vn)), e.rb(34, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(35, 0, null, null, 1, "div", [["fxFlex", ""]], null, null, null, null, null)), e.rb(36, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(37, 0, null, null, 2, "button", [["color", "primary"], ["mat-stroked-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function(l, n, a) {
                var o = !0;
                return "click" === n && (o = !1 !== e.Cb(l.parent, 1).previous() && o),
                o
            }, N.d, N.b)), e.rb(38, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["VOLTAR"]))], function(l, n) {
                var a = n.component;
                l(n, 1, 0, "column"),
                l(n, 2, 0, "10px"),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "space-between center"),
                l(n, 7, 0, "row"),
                l(n, 8, 0, "75"),
                l(n, 10, 0, "column"),
                l(n, 12, 0, !a.componentesCompletos || a.componentesAdicionados.length > a.limiteMaximo || a.componentesAdicionados.length < 1 || a.componentesAdicionados.length < a.limiteMinimo),
                l(n, 14, 0, !a.componentesCompletos || a.componentesAdicionados.length > a.limiteMaximo || a.componentesAdicionados.length < 1 || a.componentesAdicionados.length < a.limiteMinimo, a.confirmacaoFinal),
                l(n, 19, 0, !a.componentesCompletos || a.componentesAdicionados.length > a.limiteMaximo || a.componentesAdicionados.length < 1 || a.componentesAdicionados.length < a.limiteMinimo),
                l(n, 21, 0, !a.componentesCompletos || a.componentesAdicionados.length > a.limiteMaximo || a.componentesAdicionados.length < 1 || a.componentesAdicionados.length < a.limiteMinimo, a.lerContrato),
                l(n, 26, 0, "row"),
                l(n, 28, 0, !a.confirmacaoFinal || !a.componentesCompletos || a.componentesAdicionados.length > a.limiteMaximo || a.componentesAdicionados.length < 1 || a.componentesAdicionados.length < a.limiteMinimo || !a.contratoLido, "primary"),
                l(n, 31, 0, "row"),
                l(n, 32, 0, "space-between center"),
                l(n, 34, 0, !a.componentesCompletos || a.componentesAdicionados.length > a.limiteMaximo || a.componentesAdicionados.length < a.limiteMinimo),
                l(n, 36, 0, ""),
                l(n, 38, 0, "primary")
            }, function(l, n) {
                l(n, 11, 1, [e.Cb(n, 12).id, null, e.Cb(n, 12).indeterminate, e.Cb(n, 12).checked, e.Cb(n, 12).disabled, "before" == e.Cb(n, 12).labelPosition, "NoopAnimations" === e.Cb(n, 12)._animationMode, e.Cb(n, 16).ngClassUntouched, e.Cb(n, 16).ngClassTouched, e.Cb(n, 16).ngClassPristine, e.Cb(n, 16).ngClassDirty, e.Cb(n, 16).ngClassValid, e.Cb(n, 16).ngClassInvalid, e.Cb(n, 16).ngClassPending]),
                l(n, 18, 1, [e.Cb(n, 19).id, null, e.Cb(n, 19).indeterminate, e.Cb(n, 19).checked, e.Cb(n, 19).disabled, "before" == e.Cb(n, 19).labelPosition, "NoopAnimations" === e.Cb(n, 19)._animationMode, e.Cb(n, 23).ngClassUntouched, e.Cb(n, 23).ngClassTouched, e.Cb(n, 23).ngClassPristine, e.Cb(n, 23).ngClassDirty, e.Cb(n, 23).ngClassValid, e.Cb(n, 23).ngClassInvalid, e.Cb(n, 23).ngClassPending]),
                l(n, 27, 0, e.Cb(n, 28).disabled || null, "NoopAnimations" === e.Cb(n, 28)._animationMode),
                l(n, 37, 0, e.Cb(n, 38).disabled || null, "NoopAnimations" === e.Cb(n, 38)._animationMode)
            })
        }
        function An(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 8, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 1, "mat-spinner", [["class", "mat-spinner mat-progress-spinner"], ["mode", "indeterminate"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"]], null, null, m.b, m.a)), e.rb(4, 49152, null, 0, x.d, [e.k, g.a, [2, h.e], [2, C.a], x.a], {
                diameter: [0, "diameter"]
            }, null), (l()(),
            e.sb(5, 0, null, null, 3, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(6, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 1, "span", [["class", "mat-subheading-2"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Processando matr\xedcula..."]))], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 2, 0, "center center"),
                l(n, 4, 0, 60),
                l(n, 6, 0, "row")
            }, function(l, n) {
                l(n, 3, 0, e.Cb(n, 4)._noopAnimations, e.Cb(n, 4).diameter, e.Cb(n, 4).diameter)
            })
        }
        function wn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 610, "mat-horizontal-stepper", [["aria-orientation", "horizontal"], ["class", "mat-stepper-horizontal"], ["linear", ""], ["role", "tablist"], ["style", "background-color: #fafafa;"]], [[2, "mat-stepper-label-position-end", null], [2, "mat-stepper-label-position-bottom", null]], [[null, "selectionChange"]], function(l, n, a) {
                var e = !0;
                return "selectionChange" === n && (e = !1 !== l.component.atualizaContatosFormValue(a) && e),
                e
            }, H.d, H.a)), e.rb(1, 5423104, [["stepper", 4]], 2, K.b, [[2, F.b], e.h, e.k, h.e], {
                linear: [0, "linear"]
            }, {
                selectionChange: "selectionChange"
            }), e.Ib(603979776, 1, {
                _steps: 1
            }), e.Ib(603979776, 2, {
                _icons: 1
            }), e.Hb(2048, null, K.f, null, [K.b]), (l()(),
            e.sb(5, 0, null, null, 116, "mat-step", [], null, null, null, H.e, H.b)), e.rb(6, 573440, [[1, 4]], 1, K.c, [K.f, [1, q.d], [2, z.h]], {
                stepControl: [0, "stepControl"],
                editable: [1, "editable"]
            }, null), e.Ib(335544320, 3, {
                stepLabel: 0
            }), e.Hb(2048, null, q.d, null, [K.c]), (l()(),
            e.kb(0, null, 0, 1, null, wl)), e.rb(10, 16384, [[3, 4]], 0, K.e, [e.O], null, null), (l()(),
            e.sb(11, 0, null, 0, 110, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function(l, n, a) {
                var o = !0;
                return "submit" === n && (o = !1 !== e.Cb(l, 13).onSubmit(a) && o),
                "reset" === n && (o = !1 !== e.Cb(l, 13).onReset() && o),
                o
            }, null, null)), e.rb(12, 16384, null, 0, E.F, [], null, null), e.rb(13, 540672, null, 0, E.m, [[8, null], [8, null]], {
                form: [0, "form"]
            }, null), e.Hb(2048, null, E.c, null, [E.m]), e.rb(15, 16384, null, 0, E.u, [[4, E.c]], null, null), (l()(),
            e.sb(16, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(17, 0, null, null, 104, "mat-card", [["class", "mat-elevation-z3 mat-card"]], null, null, null, D.d, D.a)), e.rb(18, 49152, null, 0, M.a, [], null, null), (l()(),
            e.sb(19, 0, null, 0, 3, "div", [["fxLayout", "column"]], null, null, null, null, null)), e.rb(20, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(21, 0, null, null, 1, "span", [["style", "color: #3f51b5;"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["VERIFIQUE E ATUALIZE SEUS DADOS DE CONTATO"])), (l()(),
            e.sb(23, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(24, 0, null, 0, 97, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), e.rb(25, 16384, null, 0, M.d, [], null, null), (l()(),
            e.sb(26, 0, null, null, 95, "div", [["fxLayout", "column"]], null, null, null, null, null)), e.rb(27, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(28, 0, null, null, 41, "div", [["fxLayout", "row"], ["fxLayout.lt-md", "column"], ["fxLayoutGap", "20px"], ["fxLayoutGap.lt-md", "0px"]], null, null, null, null, null)), e.rb(29, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-md": [1, "fxLayout.lt-md"]
            }, null), e.rb(30, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"],
                "fxLayoutGap.lt-md": [1, "fxLayoutGap.lt-md"]
            }, null), (l()(),
            e.sb(31, 0, null, null, 17, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", ""]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(32, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 4, {
                _control: 0
            }), e.Ib(335544320, 5, {
                _placeholderChild: 0
            }), e.Ib(335544320, 6, {
                _labelChild: 0
            }), e.Ib(603979776, 7, {
                _errorChildren: 1
            }), e.Ib(603979776, 8, {
                _hintChildren: 1
            }), e.Ib(603979776, 9, {
                _prefixChildren: 1
            }), e.Ib(603979776, 10, {
                _suffixChildren: 1
            }), e.rb(40, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(41, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "email"], ["matInput", ""], ["placeholder", "E-mail"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 42)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 42).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 42)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 42)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 46)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 46)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 46)._onInput() && o),
                o
            }, null, null)), e.rb(42, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(44, 671744, null, 0, E.k, [[3, E.c], [8, null], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(46, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"]
            }, null), e.rb(47, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[4, 4]], L.d, null, [j.b]), (l()(),
            e.sb(49, 0, null, null, 20, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", ""]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(50, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 11, {
                _control: 0
            }), e.Ib(335544320, 12, {
                _placeholderChild: 0
            }), e.Ib(335544320, 13, {
                _labelChild: 0
            }), e.Ib(603979776, 14, {
                _errorChildren: 1
            }), e.Ib(603979776, 15, {
                _hintChildren: 1
            }), e.Ib(603979776, 16, {
                _prefixChildren: 1
            }), e.Ib(603979776, 17, {
                _suffixChildren: 1
            }), e.rb(58, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(59, 0, null, 1, 10, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "telCelular"], ["mask", "(00) 00000-0000"], ["matInput", ""], ["placeholder", "Tel. celular"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "click"], [null, "keydown"], [null, "paste"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 61).onInput(a) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 61).onBlur() && o),
                "click" === n && (o = !1 !== e.Cb(l, 61).onFocus(a) && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 61).a(a) && o),
                "paste" === n && (o = !1 !== e.Cb(l, 61).onPaste() && o),
                "input" === n && (o = !1 !== e.Cb(l, 63)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 63).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 63)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 63)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 67)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 67)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 67)._onInput() && o),
                o
            }, null, null)), e.Hb(512, null, V.d, V.d, [h.e, V.h, e.k, e.G]), e.rb(61, 540672, null, 0, V.b, [h.e, V.d], {
                maskExpression: [0, "maskExpression"]
            }, null), e.Hb(1024, null, E.q, function(l) {
                return [l]
            }, [V.b]), e.rb(63, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l, n) {
                return [l, n]
            }, [E.d, V.b]), e.rb(65, 671744, null, 0, E.k, [[3, E.c], [6, E.q], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(67, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"]
            }, null), e.rb(68, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[11, 4]], L.d, null, [j.b]), (l()(),
            e.sb(70, 0, null, null, 44, "div", [["fxLayout", "row"], ["fxLayout.lt-md", "column"], ["fxLayoutGap", "20px"], ["fxLayoutGap.lt-md", "0px"]], null, null, null, null, null)), e.rb(71, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-md": [1, "fxLayout.lt-md"]
            }, null), e.rb(72, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"],
                "fxLayoutGap.lt-md": [1, "fxLayoutGap.lt-md"]
            }, null), (l()(),
            e.sb(73, 0, null, null, 20, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", ""]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(74, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 18, {
                _control: 0
            }), e.Ib(335544320, 19, {
                _placeholderChild: 0
            }), e.Ib(335544320, 20, {
                _labelChild: 0
            }), e.Ib(603979776, 21, {
                _errorChildren: 1
            }), e.Ib(603979776, 22, {
                _hintChildren: 1
            }), e.Ib(603979776, 23, {
                _prefixChildren: 1
            }), e.Ib(603979776, 24, {
                _suffixChildren: 1
            }), e.rb(82, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(83, 0, null, 1, 10, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "telResidencial"], ["mask", "(00) 0000-0000"], ["matInput", ""], ["placeholder", "Tel. residencial"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "click"], [null, "keydown"], [null, "paste"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 85).onInput(a) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 85).onBlur() && o),
                "click" === n && (o = !1 !== e.Cb(l, 85).onFocus(a) && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 85).a(a) && o),
                "paste" === n && (o = !1 !== e.Cb(l, 85).onPaste() && o),
                "input" === n && (o = !1 !== e.Cb(l, 87)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 87).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 87)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 87)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 91)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 91)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 91)._onInput() && o),
                o
            }, null, null)), e.Hb(512, null, V.d, V.d, [h.e, V.h, e.k, e.G]), e.rb(85, 540672, null, 0, V.b, [h.e, V.d], {
                maskExpression: [0, "maskExpression"]
            }, null), e.Hb(1024, null, E.q, function(l) {
                return [l]
            }, [V.b]), e.rb(87, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l, n) {
                return [l, n]
            }, [E.d, V.b]), e.rb(89, 671744, null, 0, E.k, [[3, E.c], [6, E.q], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(91, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"]
            }, null), e.rb(92, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[18, 4]], L.d, null, [j.b]), (l()(),
            e.sb(94, 0, null, null, 20, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", ""]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(95, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 25, {
                _control: 0
            }), e.Ib(335544320, 26, {
                _placeholderChild: 0
            }), e.Ib(335544320, 27, {
                _labelChild: 0
            }), e.Ib(603979776, 28, {
                _errorChildren: 1
            }), e.Ib(603979776, 29, {
                _hintChildren: 1
            }), e.Ib(603979776, 30, {
                _prefixChildren: 1
            }), e.Ib(603979776, 31, {
                _suffixChildren: 1
            }), e.rb(103, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(104, 0, null, 1, 10, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "telComercial"], ["mask", "(00) 0000-0000"], ["matInput", ""], ["placeholder", "Tel. comercial"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "click"], [null, "keydown"], [null, "paste"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 106).onInput(a) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 106).onBlur() && o),
                "click" === n && (o = !1 !== e.Cb(l, 106).onFocus(a) && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 106).a(a) && o),
                "paste" === n && (o = !1 !== e.Cb(l, 106).onPaste() && o),
                "input" === n && (o = !1 !== e.Cb(l, 108)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 108).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 108)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 108)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 112)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 112)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 112)._onInput() && o),
                o
            }, null, null)), e.Hb(512, null, V.d, V.d, [h.e, V.h, e.k, e.G]), e.rb(106, 540672, null, 0, V.b, [h.e, V.d], {
                maskExpression: [0, "maskExpression"]
            }, null), e.Hb(1024, null, E.q, function(l) {
                return [l]
            }, [V.b]), e.rb(108, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l, n) {
                return [l, n]
            }, [E.d, V.b]), e.rb(110, 671744, null, 0, E.k, [[3, E.c], [6, E.q], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(112, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"]
            }, null), e.rb(113, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[25, 4]], L.d, null, [j.b]), (l()(),
            e.sb(115, 0, null, null, 6, "div", [["class", "input-row"], ["fxLayoutAlign", "end center"]], null, null, null, null, null)), e.rb(116, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(117, 0, null, null, 4, "button", [["color", "primary"], ["mat-stroked-button", ""], ["matStepperNext", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null], [8, "type", 0]], [[null, "click"]], function(l, n, a) {
                var o = !0
                  , u = l.component;
                return "click" === n && (o = !1 !== e.Cb(l, 120)._stepper.next() && o),
                "click" === n && (o = !1 !== u.atualizaContatos(u.contatoFormGroup.value) && o),
                o
            }, N.d, N.b)), e.rb(118, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                color: [0, "color"]
            }, null), e.Hb(2048, null, z.d, null, [K.f]), e.rb(120, 16384, null, 0, K.i, [z.d], null, null), (l()(),
            e.Kb(-1, 0, ["PROSSEGUIR"])), (l()(),
            e.sb(122, 0, null, null, 356, "mat-step", [], null, null, null, H.e, H.b)), e.rb(123, 573440, [[1, 4]], 1, K.c, [K.f, [1, q.d], [2, z.h]], {
                stepControl: [0, "stepControl"]
            }, null), e.Ib(335544320, 32, {
                stepLabel: 0
            }), e.Hb(2048, null, q.d, null, [K.c]), (l()(),
            e.sb(126, 0, null, 0, 352, "mat-card", [["class", "mat-elevation-z3 mat-card"], ["style", "font-size: smaller;"]], null, null, null, D.d, D.a)), e.rb(127, 49152, null, 0, M.a, [], null, null), (l()(),
            e.sb(128, 0, null, 0, 350, "form", [["fxLayout", "column"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function(l, n, a) {
                var o = !0;
                return "submit" === n && (o = !1 !== e.Cb(l, 130).onSubmit(a) && o),
                "reset" === n && (o = !1 !== e.Cb(l, 130).onReset() && o),
                o
            }, null, null)), e.rb(129, 16384, null, 0, E.F, [], null, null), e.rb(130, 540672, null, 0, E.m, [[8, null], [8, null]], {
                form: [0, "form"]
            }, null), e.Hb(2048, null, E.c, null, [E.m]), e.rb(132, 16384, null, 0, E.u, [[4, E.c]], null, null), e.rb(133, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.kb(0, null, null, 1, null, Fl)), e.rb(135, 16384, [[32, 4]], 0, K.e, [e.O], null, null), (l()(),
            e.sb(136, 0, null, null, 319, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutAlign", "space-between center"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(137, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(138, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(139, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(140, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(141, 0, null, null, 166, "div", [["formGroupName", "endereco"], ["fxFlex", "50"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, null, null)), e.rb(142, 212992, null, 0, E.n, [[3, E.c], [8, null], [8, null]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.c, null, [E.n]), e.rb(144, 16384, null, 0, E.u, [[4, E.c]], null, null), e.rb(145, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(146, 0, null, null, 4, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(147, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(148, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(149, 0, null, null, 1, "h4", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Endere\xe7o atual"])), (l()(),
            e.sb(151, 0, null, null, 34, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(152, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(153, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(154, 0, null, null, 21, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "30%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(155, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 33, {
                _control: 0
            }), e.Ib(335544320, 34, {
                _placeholderChild: 0
            }), e.Ib(335544320, 35, {
                _labelChild: 0
            }), e.Ib(603979776, 36, {
                _errorChildren: 1
            }), e.Ib(603979776, 37, {
                _hintChildren: 1
            }), e.Ib(603979776, 38, {
                _prefixChildren: 1
            }), e.Ib(603979776, 39, {
                _suffixChildren: 1
            }), e.rb(163, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(164, 0, null, 1, 9, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "cep"], ["matInput", ""], ["placeholder", "CEP"], ["required", ""]], [[1, "required", 0], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 167)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 167).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 167)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 167)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 171)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 171)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 171)._onInput() && o),
                o
            }, null, null)), e.rb(165, 16384, null, 0, E.A, [], {
                required: [0, "required"]
            }, null), e.Hb(1024, null, E.q, function(l) {
                return [l]
            }, [E.A]), e.rb(167, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(169, 671744, null, 0, E.k, [[3, E.c], [6, E.q], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(171, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"],
                required: [1, "required"]
            }, null), e.rb(172, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[33, 4]], L.d, null, [j.b]), (l()(),
            e.kb(16777216, null, 5, 1, null, Ol)), e.rb(175, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(176, 0, null, null, 9, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutAlign", "end center"]], null, null, null, null, null)), e.rb(177, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(178, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(179, 16777216, null, null, 6, "button", [["color", "primary"], ["mat-raised-button", ""], ["matTooltip", "Busque pelo CEP."]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function(l, n, a) {
                var o = !0
                  , u = l.component;
                return "longpress" === n && (o = !1 !== e.Cb(l, 181).show() && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 181)._handleKeydown(a) && o),
                "touchend" === n && (o = !1 !== e.Cb(l, 181)._handleTouchend() && o),
                "click" === n && (o = !1 !== u.findCEP(!0) && o),
                o
            }, N.d, N.b)), e.rb(180, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                color: [0, "color"]
            }, null), e.rb(181, 147456, null, 0, v.d, [k.d, e.k, A.f, e.R, e.B, g.a, w.c, w.h, v.b, [2, F.b], [2, v.a], [2, O.g]], {
                position: [0, "position"],
                message: [1, "message"]
            }, null), (l()(),
            e.sb(182, 0, null, 0, 3, "mat-icon", [["class", "mat-icon notranslate"], ["matPrefix", ""], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(183, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], null, null), e.rb(184, 16384, null, 0, L.h, [], null, null), (l()(),
            e.Kb(-1, 0, ["search"])), (l()(),
            e.sb(186, 0, null, null, 24, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(187, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(188, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(189, 0, null, null, 21, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "60%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(190, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 40, {
                _control: 0
            }), e.Ib(335544320, 41, {
                _placeholderChild: 0
            }), e.Ib(335544320, 42, {
                _labelChild: 0
            }), e.Ib(603979776, 43, {
                _errorChildren: 1
            }), e.Ib(603979776, 44, {
                _hintChildren: 1
            }), e.Ib(603979776, 45, {
                _prefixChildren: 1
            }), e.Ib(603979776, 46, {
                _suffixChildren: 1
            }), e.rb(198, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(199, 0, null, 1, 9, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "logradouro"], ["matInput", ""], ["placeholder", "Logradouro"], ["required", ""]], [[1, "required", 0], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 202)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 202).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 202)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 202)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 206)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 206)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 206)._onInput() && o),
                o
            }, null, null)), e.rb(200, 16384, null, 0, E.A, [], {
                required: [0, "required"]
            }, null), e.Hb(1024, null, E.q, function(l) {
                return [l]
            }, [E.A]), e.rb(202, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(204, 671744, null, 0, E.k, [[3, E.c], [6, E.q], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(206, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"],
                required: [1, "required"]
            }, null), e.rb(207, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[40, 4]], L.d, null, [j.b]), (l()(),
            e.kb(16777216, null, 5, 1, null, Il)), e.rb(210, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(211, 0, null, null, 25, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(212, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(213, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(214, 0, null, null, 22, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "60%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(215, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 47, {
                _control: 0
            }), e.Ib(335544320, 48, {
                _placeholderChild: 0
            }), e.Ib(335544320, 49, {
                _labelChild: 0
            }), e.Ib(603979776, 50, {
                _errorChildren: 1
            }), e.Ib(603979776, 51, {
                _hintChildren: 1
            }), e.Ib(603979776, 52, {
                _prefixChildren: 1
            }), e.Ib(603979776, 53, {
                _suffixChildren: 1
            }), e.rb(223, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(224, 16777216, null, 1, 10, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "numero"], ["matInput", ""], ["matTooltip", "Caso n\xe3o tenha n\xfamero, informe S/N."], ["placeholder", "Numero"], ["required", ""]], [[1, "required", 0], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 227)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 227).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 227)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 227)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 231)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 231)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 231)._onInput() && o),
                "longpress" === n && (o = !1 !== e.Cb(l, 233).show() && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 233)._handleKeydown(a) && o),
                "touchend" === n && (o = !1 !== e.Cb(l, 233)._handleTouchend() && o),
                o
            }, null, null)), e.rb(225, 16384, null, 0, E.A, [], {
                required: [0, "required"]
            }, null), e.Hb(1024, null, E.q, function(l) {
                return [l]
            }, [E.A]), e.rb(227, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(229, 671744, null, 0, E.k, [[3, E.c], [6, E.q], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(231, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"],
                required: [1, "required"]
            }, null), e.rb(232, 16384, null, 0, E.t, [[4, E.s]], null, null), e.rb(233, 147456, null, 0, v.d, [k.d, e.k, A.f, e.R, e.B, g.a, w.c, w.h, v.b, [2, F.b], [2, v.a], [2, O.g]], {
                position: [0, "position"],
                message: [1, "message"]
            }, null), e.Hb(2048, [[47, 4]], L.d, null, [j.b]), (l()(),
            e.kb(16777216, null, 5, 1, null, Tl)), e.rb(236, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(237, 0, null, null, 20, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(238, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(239, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(240, 0, null, null, 17, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "60%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(241, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 54, {
                _control: 0
            }), e.Ib(335544320, 55, {
                _placeholderChild: 0
            }), e.Ib(335544320, 56, {
                _labelChild: 0
            }), e.Ib(603979776, 57, {
                _errorChildren: 1
            }), e.Ib(603979776, 58, {
                _hintChildren: 1
            }), e.Ib(603979776, 59, {
                _prefixChildren: 1
            }), e.Ib(603979776, 60, {
                _suffixChildren: 1
            }), e.rb(249, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(250, 0, null, 1, 7, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "complemento"], ["matInput", ""], ["placeholder", "Complemento"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 251)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 251).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 251)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 251)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 255)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 255)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 255)._onInput() && o),
                o
            }, null, null)), e.rb(251, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(253, 671744, null, 0, E.k, [[3, E.c], [8, null], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(255, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"]
            }, null), e.rb(256, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[54, 4]], L.d, null, [j.b]), (l()(),
            e.sb(258, 0, null, null, 24, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(259, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(260, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(261, 0, null, null, 21, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "60%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(262, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 61, {
                _control: 0
            }), e.Ib(335544320, 62, {
                _placeholderChild: 0
            }), e.Ib(335544320, 63, {
                _labelChild: 0
            }), e.Ib(603979776, 64, {
                _errorChildren: 1
            }), e.Ib(603979776, 65, {
                _hintChildren: 1
            }), e.Ib(603979776, 66, {
                _prefixChildren: 1
            }), e.Ib(603979776, 67, {
                _suffixChildren: 1
            }), e.rb(270, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(271, 0, null, 1, 9, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "bairro"], ["matInput", ""], ["placeholder", "Bairro"], ["required", ""]], [[1, "required", 0], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 274)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 274).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 274)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 274)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 278)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 278)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 278)._onInput() && o),
                o
            }, null, null)), e.rb(272, 16384, null, 0, E.A, [], {
                required: [0, "required"]
            }, null), e.Hb(1024, null, E.q, function(l) {
                return [l]
            }, [E.A]), e.rb(274, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(276, 671744, null, 0, E.k, [[3, E.c], [6, E.q], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(278, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"],
                required: [1, "required"]
            }, null), e.rb(279, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[61, 4]], L.d, null, [j.b]), (l()(),
            e.kb(16777216, null, 5, 1, null, Pl)), e.rb(282, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(283, 0, null, null, 24, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(284, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(285, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(286, 0, null, null, 21, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "60%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(287, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 68, {
                _control: 0
            }), e.Ib(335544320, 69, {
                _placeholderChild: 0
            }), e.Ib(335544320, 70, {
                _labelChild: 0
            }), e.Ib(603979776, 71, {
                _errorChildren: 1
            }), e.Ib(603979776, 72, {
                _hintChildren: 1
            }), e.Ib(603979776, 73, {
                _prefixChildren: 1
            }), e.Ib(603979776, 74, {
                _suffixChildren: 1
            }), e.rb(295, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(296, 0, null, 1, 9, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "cidade"], ["matInput", ""], ["placeholder", "Cidade"], ["required", ""]], [[1, "required", 0], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 299)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 299).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 299)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 299)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 303)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 303)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 303)._onInput() && o),
                o
            }, null, null)), e.rb(297, 16384, null, 0, E.A, [], {
                required: [0, "required"]
            }, null), e.Hb(1024, null, E.q, function(l) {
                return [l]
            }, [E.A]), e.rb(299, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(301, 671744, null, 0, E.k, [[3, E.c], [6, E.q], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(303, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"],
                required: [1, "required"]
            }, null), e.rb(304, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[68, 4]], L.d, null, [j.b]), (l()(),
            e.kb(16777216, null, 5, 1, null, El)), e.rb(307, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(308, 0, null, null, 147, "div", [["formGroupName", "enderecoDeOrigem"], ["fxFlex", "50"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, null, null)), e.rb(309, 212992, null, 0, E.n, [[3, E.c], [8, null], [8, null]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.c, null, [E.n]), e.rb(311, 16384, null, 0, E.u, [[4, E.c]], null, null), e.rb(312, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(313, 0, null, null, 4, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(314, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(315, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(316, 0, null, null, 1, "h4", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Endere\xe7o de origem"])), (l()(),
            e.sb(318, 0, null, null, 31, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(319, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(320, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(321, 0, null, null, 17, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "30%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(322, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 75, {
                _control: 0
            }), e.Ib(335544320, 76, {
                _placeholderChild: 0
            }), e.Ib(335544320, 77, {
                _labelChild: 0
            }), e.Ib(603979776, 78, {
                _errorChildren: 1
            }), e.Ib(603979776, 79, {
                _hintChildren: 1
            }), e.Ib(603979776, 80, {
                _prefixChildren: 1
            }), e.Ib(603979776, 81, {
                _suffixChildren: 1
            }), e.rb(330, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(331, 0, null, 1, 7, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "cep"], ["matInput", ""], ["placeholder", "CEP"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 332)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 332).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 332)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 332)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 336)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 336)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 336)._onInput() && o),
                o
            }, null, null)), e.rb(332, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(334, 671744, null, 0, E.k, [[3, E.c], [8, null], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(336, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"]
            }, null), e.rb(337, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[75, 4]], L.d, null, [j.b]), (l()(),
            e.sb(339, 0, null, null, 10, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutAlign", "end center"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(340, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(341, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(342, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(343, 16777216, null, null, 6, "button", [["color", "primary"], ["mat-raised-button", ""], ["matTooltip", "Busque pelo CEP."]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function(l, n, a) {
                var o = !0
                  , u = l.component;
                return "longpress" === n && (o = !1 !== e.Cb(l, 345).show() && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 345)._handleKeydown(a) && o),
                "touchend" === n && (o = !1 !== e.Cb(l, 345)._handleTouchend() && o),
                "click" === n && (o = !1 !== u.findCEP(!1) && o),
                o
            }, N.d, N.b)), e.rb(344, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                color: [0, "color"]
            }, null), e.rb(345, 147456, null, 0, v.d, [k.d, e.k, A.f, e.R, e.B, g.a, w.c, w.h, v.b, [2, F.b], [2, v.a], [2, O.g]], {
                position: [0, "position"],
                message: [1, "message"]
            }, null), (l()(),
            e.sb(346, 0, null, 0, 3, "mat-icon", [["class", "mat-icon notranslate"], ["matPrefix", ""], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(347, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], null, null), e.rb(348, 16384, null, 0, L.h, [], null, null), (l()(),
            e.Kb(-1, 0, ["search"])), (l()(),
            e.sb(350, 0, null, null, 20, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(351, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(352, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(353, 0, null, null, 17, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "60%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(354, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 82, {
                _control: 0
            }), e.Ib(335544320, 83, {
                _placeholderChild: 0
            }), e.Ib(335544320, 84, {
                _labelChild: 0
            }), e.Ib(603979776, 85, {
                _errorChildren: 1
            }), e.Ib(603979776, 86, {
                _hintChildren: 1
            }), e.Ib(603979776, 87, {
                _prefixChildren: 1
            }), e.Ib(603979776, 88, {
                _suffixChildren: 1
            }), e.rb(362, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(363, 0, null, 1, 7, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "logradouro"], ["matInput", ""], ["placeholder", "Logradouro"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 364)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 364).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 364)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 364)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 368)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 368)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 368)._onInput() && o),
                o
            }, null, null)), e.rb(364, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(366, 671744, null, 0, E.k, [[3, E.c], [8, null], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(368, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"]
            }, null), e.rb(369, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[82, 4]], L.d, null, [j.b]), (l()(),
            e.sb(371, 0, null, null, 21, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(372, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(373, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(374, 0, null, null, 18, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "60%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(375, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 89, {
                _control: 0
            }), e.Ib(335544320, 90, {
                _placeholderChild: 0
            }), e.Ib(335544320, 91, {
                _labelChild: 0
            }), e.Ib(603979776, 92, {
                _errorChildren: 1
            }), e.Ib(603979776, 93, {
                _hintChildren: 1
            }), e.Ib(603979776, 94, {
                _prefixChildren: 1
            }), e.Ib(603979776, 95, {
                _suffixChildren: 1
            }), e.rb(383, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(384, 16777216, null, 1, 8, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "numero"], ["matInput", ""], ["matTooltip", "Caso n\xe3o tenha n\xfamero, informe S/N."], ["placeholder", "Numero"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 385)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 385).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 385)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 385)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 389)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 389)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 389)._onInput() && o),
                "longpress" === n && (o = !1 !== e.Cb(l, 391).show() && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 391)._handleKeydown(a) && o),
                "touchend" === n && (o = !1 !== e.Cb(l, 391)._handleTouchend() && o),
                o
            }, null, null)), e.rb(385, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(387, 671744, null, 0, E.k, [[3, E.c], [8, null], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(389, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"]
            }, null), e.rb(390, 16384, null, 0, E.t, [[4, E.s]], null, null), e.rb(391, 147456, null, 0, v.d, [k.d, e.k, A.f, e.R, e.B, g.a, w.c, w.h, v.b, [2, F.b], [2, v.a], [2, O.g]], {
                position: [0, "position"],
                message: [1, "message"]
            }, null), e.Hb(2048, [[89, 4]], L.d, null, [j.b]), (l()(),
            e.sb(393, 0, null, null, 20, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(394, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(395, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(396, 0, null, null, 17, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "60%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(397, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 96, {
                _control: 0
            }), e.Ib(335544320, 97, {
                _placeholderChild: 0
            }), e.Ib(335544320, 98, {
                _labelChild: 0
            }), e.Ib(603979776, 99, {
                _errorChildren: 1
            }), e.Ib(603979776, 100, {
                _hintChildren: 1
            }), e.Ib(603979776, 101, {
                _prefixChildren: 1
            }), e.Ib(603979776, 102, {
                _suffixChildren: 1
            }), e.rb(405, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(406, 0, null, 1, 7, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "complemento"], ["matInput", ""], ["placeholder", "Complemento"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 407)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 407).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 407)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 407)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 411)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 411)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 411)._onInput() && o),
                o
            }, null, null)), e.rb(407, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(409, 671744, null, 0, E.k, [[3, E.c], [8, null], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(411, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"]
            }, null), e.rb(412, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[96, 4]], L.d, null, [j.b]), (l()(),
            e.sb(414, 0, null, null, 20, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(415, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(416, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(417, 0, null, null, 17, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "60%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(418, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 103, {
                _control: 0
            }), e.Ib(335544320, 104, {
                _placeholderChild: 0
            }), e.Ib(335544320, 105, {
                _labelChild: 0
            }), e.Ib(603979776, 106, {
                _errorChildren: 1
            }), e.Ib(603979776, 107, {
                _hintChildren: 1
            }), e.Ib(603979776, 108, {
                _prefixChildren: 1
            }), e.Ib(603979776, 109, {
                _suffixChildren: 1
            }), e.rb(426, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(427, 0, null, 1, 7, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "bairro"], ["matInput", ""], ["placeholder", "Bairro"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 428)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 428).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 428)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 428)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 432)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 432)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 432)._onInput() && o),
                o
            }, null, null)), e.rb(428, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(430, 671744, null, 0, E.k, [[3, E.c], [8, null], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(432, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"]
            }, null), e.rb(433, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[103, 4]], L.d, null, [j.b]), (l()(),
            e.sb(435, 0, null, null, 20, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(436, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(437, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(438, 0, null, null, 17, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "60%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(439, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 110, {
                _control: 0
            }), e.Ib(335544320, 111, {
                _placeholderChild: 0
            }), e.Ib(335544320, 112, {
                _labelChild: 0
            }), e.Ib(603979776, 113, {
                _errorChildren: 1
            }), e.Ib(603979776, 114, {
                _hintChildren: 1
            }), e.Ib(603979776, 115, {
                _prefixChildren: 1
            }), e.Ib(603979776, 116, {
                _suffixChildren: 1
            }), e.rb(447, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(448, 0, null, 1, 7, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "cidade"], ["matInput", ""], ["placeholder", "Cidade"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 449)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 449).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 449)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 449)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 453)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 453)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 453)._onInput() && o),
                o
            }, null, null)), e.rb(449, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(451, 671744, null, 0, E.k, [[3, E.c], [8, null], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(453, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"]
            }, null), e.rb(454, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[110, 4]], L.d, null, [j.b]), (l()(),
            e.sb(456, 0, null, null, 22, "div", [["class", "button_next_top"], ["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(457, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(458, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(459, 0, null, null, 8, "button", [["color", "primary"], ["mat-stroked-button", ""], ["matStepperPrevious", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null], [8, "type", 0]], [[null, "click"]], function(l, n, a) {
                var o = !0;
                return "click" === n && (o = !1 !== e.Cb(l, 462)._stepper.previous() && o),
                o
            }, N.d, N.b)), e.rb(460, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                color: [0, "color"]
            }, null), e.Hb(2048, null, z.d, null, [K.f]), e.rb(462, 16384, null, 0, K.j, [z.d], null, null), (l()(),
            e.sb(463, 0, null, 0, 3, "mat-icon", [["class", "mat-icon notranslate"], ["matPrefix", ""], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(464, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], null, null), e.rb(465, 16384, null, 0, L.h, [], null, null), (l()(),
            e.Kb(-1, 0, ["navigate_before"])), (l()(),
            e.Kb(-1, 0, ["ANTERIOR "])), (l()(),
            e.sb(468, 0, null, null, 1, "span", [["fxFlex", ""]], null, null, null, null, null)), e.rb(469, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(470, 0, null, null, 8, "button", [["color", "primary"], ["mat-stroked-button", ""], ["matStepperNext", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null], [8, "type", 0]], [[null, "click"]], function(l, n, a) {
                var o = !0;
                return "click" === n && (o = !1 !== e.Cb(l, 473)._stepper.next() && o),
                o
            }, N.d, N.b)), e.rb(471, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                disabled: [0, "disabled"],
                color: [1, "color"]
            }, null), e.Hb(2048, null, z.d, null, [K.f]), e.rb(473, 16384, null, 0, K.i, [z.d], null, null), (l()(),
            e.Kb(-1, 0, [" PR\xd3XIMO "])), (l()(),
            e.sb(475, 0, null, 0, 3, "mat-icon", [["class", "mat-icon notranslate"], ["matPrefix", ""], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(476, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], null, null), e.rb(477, 16384, null, 0, L.h, [], null, null), (l()(),
            e.Kb(-1, 0, ["navigate_next"])), (l()(),
            e.sb(479, 0, null, null, 93, "mat-step", [], null, null, null, H.e, H.b)), e.Hb(6144, null, q.d, null, [K.c]), e.rb(481, 573440, [[1, 4]], 1, K.c, [K.f, [1, q.d], [2, z.h]], {
                stepControl: [0, "stepControl"],
                editable: [1, "editable"]
            }, null), e.Ib(335544320, 117, {
                stepLabel: 0
            }), (l()(),
            e.kb(0, null, 0, 1, null, Sl)), e.rb(484, 16384, [[117, 4]], 0, K.e, [e.O], null, null), (l()(),
            e.sb(485, 0, null, 0, 87, "div", [["fxLayout", "column"]], null, null, null, null, null)), e.rb(486, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(487, 0, null, null, 8, "div", [["fxLayout", "row"], ["fxLayoutAlign", "end center"]], null, null, null, null, null)), e.rb(488, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(489, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(490, 0, null, null, 5, "span", [], null, null, null, null, null)), (l()(),
            e.sb(491, 0, null, null, 4, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function(l, n, a) {
                var o = !0;
                return "click" === n && (o = !1 !== e.Cb(l, 492).onClick(a.button, a.ctrlKey, a.metaKey, a.shiftKey) && o),
                o
            }, null, null)), e.rb(492, 671744, null, 0, Q.p, [Q.n, Q.a, h.l], {
                routerLink: [0, "routerLink"]
            }, null), e.Fb(493, {
                tipo: 0,
                assunto: 1
            }), e.Db(494, 2), (l()(),
            e.Kb(-1, null, ["D\xfavidas ou dificuldades?"])), (l()(),
            e.sb(496, 0, null, null, 76, "mat-tab-group", [["class", "mat-tab-group"]], [[2, "mat-tab-group-dynamic-height", null], [2, "mat-tab-group-inverted-header", null]], null, null, Y.c, Y.b)), e.rb(497, 3325952, null, 1, J.f, [e.k, e.h, [2, J.a]], {
                selectedIndex: [0, "selectedIndex"]
            }, null), e.Ib(603979776, 118, {
                _tabs: 1
            }), (l()(),
            e.sb(499, 16777216, null, null, 43, "mat-tab", [["label", "SELE\xc7\xc3O DE COMPONENTES"]], null, null, null, Y.d, Y.a)), e.rb(500, 770048, [[118, 4]], 2, J.c, [e.R], {
                textLabel: [0, "textLabel"]
            }, null), e.Ib(335544320, 119, {
                templateLabel: 0
            }), e.Ib(335544320, 120, {
                _explicitContent: 0
            }), (l()(),
            e.sb(503, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(504, 0, null, 0, 38, "div", [["fxFlex", ""], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(505, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(506, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(507, 0, null, null, 9, "div", [["fxFlex", "64"], ["fxLayout", "column"]], null, null, null, null, null)), e.rb(508, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(509, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(510, 0, null, null, 6, "cdk-virtual-scroll-viewport", [["class", "cdk-virtual-scroll-viewport"], ["itemSize", "50"], ["style", "height: 90vh;"]], [[2, "cdk-virtual-scroll-orientation-horizontal", null], [2, "cdk-virtual-scroll-orientation-vertical", null]], null, null, Z.b, Z.a)), e.Hb(6144, null, A.b, null, [A.d]), e.rb(512, 540672, null, 0, A.a, [], {
                itemSize: [0, "itemSize"]
            }, null), e.Hb(1024, null, A.i, A.k, [A.a]), e.rb(514, 245760, null, 0, A.d, [e.k, e.h, e.B, [2, A.i], [2, F.b], A.f], null, null), (l()(),
            e.kb(16777216, null, 0, 1, null, Yl)), e.rb(516, 409600, null, 0, A.c, [e.R, e.O, e.u, [1, A.d], e.B], {
                cdkVirtualForOf: [0, "cdkVirtualForOf"],
                cdkVirtualForTemplateCacheSize: [1, "cdkVirtualForTemplateCacheSize"]
            }, null), (l()(),
            e.sb(517, 0, null, null, 25, "div", [["fxFlex", "35"], ["fxLayout", "column"]], null, null, null, null, null)), e.rb(518, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(519, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(520, 0, null, null, 8, "div", [], null, null, null, null, null)), (l()(),
            e.sb(521, 0, null, null, 7, "h4", [["class", "mat-subheading-2"], ["style", "margin: 0 0 4px"]], null, null, null, null, null)), (l()(),
            e.sb(522, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(523, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], null, null), (l()(),
            e.Kb(-1, 0, ["subject"])), (l()(),
            e.Kb(-1, null, [" COMPONENTES SELECIONADOS ( "])), (l()(),
            e.sb(526, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            e.Kb(527, null, ["", " de ", ""])), (l()(),
            e.Kb(-1, null, [" ) "])), (l()(),
            e.sb(529, 0, null, null, 13, "mat-card", [["class", "mat-elevation-z3 mat-card"], ["style", "padding: 0;"]], null, null, null, D.d, D.a)), e.rb(530, 49152, null, 0, M.a, [], null, null), (l()(),
            e.kb(16777216, null, 0, 1, null, Wl)), e.rb(532, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(533, 0, null, 0, 7, "mat-list", [["class", "mat-list mat-list-base"]], null, null, null, R.h, R.a)), e.rb(534, 704512, null, 0, G.a, [e.k], null, null), (l()(),
            e.kb(16777216, null, 0, 1, null, ln)), e.rb(536, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.kb(16777216, null, 0, 1, null, nn)), e.rb(538, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(539, 0, null, 0, 1, "mat-divider", [["class", "mat-divider"], ["role", "separator"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, I.b, I.a)), e.rb(540, 49152, null, 0, T.a, [], null, null), (l()(),
            e.kb(16777216, null, 0, 1, null, an)), e.rb(542, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(543, 16777216, null, null, 7, "mat-tab", [["fxFlex", ""], ["label", "MATRIZ CURRICULAR"]], null, null, null, Y.d, Y.a)), e.rb(544, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), e.rb(545, 770048, [[118, 4]], 2, J.c, [e.R], {
                textLabel: [0, "textLabel"]
            }, null), e.Ib(335544320, 127, {
                templateLabel: 0
            }), e.Ib(335544320, 128, {
                _explicitContent: 0
            }), (l()(),
            e.sb(548, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(549, 0, null, 0, 1, "app-matriz-curricular", [], null, null, null, el, W)), e.rb(550, 114688, null, 0, X, [e.B], {
                matrizAluno: [0, "matrizAluno"],
                componentesAdicionados: [1, "componentesAdicionados"]
            }, null), (l()(),
            e.sb(551, 16777216, null, null, 21, "mat-tab", [["label", "HOR\xc1RIO"]], null, null, null, Y.d, Y.a)), e.rb(552, 770048, [[118, 4]], 2, J.c, [e.R], {
                textLabel: [0, "textLabel"]
            }, null), e.Ib(335544320, 129, {
                templateLabel: 0
            }), e.Ib(335544320, 130, {
                _explicitContent: 0
            }), (l()(),
            e.sb(555, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.kb(16777216, null, 0, 1, null, en)), e.rb(557, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(558, 0, null, 0, 13, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(559, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(560, 0, null, null, 11, "div", [["fxFlex", ""], ["fxLayout", "column"], ["fxLayoutGap", "3px"]], null, null, null, null, null)), e.rb(561, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(562, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(563, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, rn)), e.rb(565, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(566, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            e.kb(16777216, null, null, 1, null, pn)), e.rb(568, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(569, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            e.kb(16777216, null, null, 1, null, xn)), e.rb(571, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(572, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(573, 0, null, null, 37, "mat-step", [], null, null, null, H.e, H.b)), e.Hb(6144, null, q.d, null, [K.c]), e.rb(575, 573440, [[1, 4]], 1, K.c, [K.f, [1, q.d], [2, z.h]], {
                editable: [0, "editable"]
            }, null), e.Ib(335544320, 131, {
                stepLabel: 0
            }), (l()(),
            e.kb(0, null, 0, 1, null, gn)), e.rb(578, 16384, [[131, 4]], 0, K.e, [e.O], null, null), (l()(),
            e.sb(579, 0, null, 0, 5, "div", [["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(580, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(581, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(582, 0, null, null, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"], ["style", "font-size: 1em; color: #3f51b5;"]], null, null, null, null, null)), e.rb(583, 16384, null, 0, M.h, [], null, null), (l()(),
            e.Kb(-1, null, ["Por favor, verifique todos os componentes, turmas e hor\xe1rios escolhidos. Confirme no final da p\xe1gina."])), (l()(),
            e.kb(16777216, null, 0, 1, null, Ln)), e.rb(586, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.sb(587, 0, null, 0, 10, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(588, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(589, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(590, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(591, 0, null, null, 6, "mat-card", [["class", "mat-elevation-z3 mat-card"], ["fxFlex", "94"]], null, null, null, D.d, D.a)), e.rb(592, 49152, null, 0, M.a, [], null, null), e.rb(593, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.kb(16777216, null, 0, 1, null, kn)), e.rb(595, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, 0, 1, null, An)), e.rb(597, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(598, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(599, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(600, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(601, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(602, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(603, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(604, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(605, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(606, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(607, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(608, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(609, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(610, 0, null, 0, 0, "br", [], null, null, null, null, null))], function(l, n) {
                var a = n.component;
                l(n, 1, 0, ""),
                l(n, 6, 0, a.contatoFormGroup, !0),
                l(n, 13, 0, a.contatoFormGroup),
                l(n, 20, 0, "column"),
                l(n, 27, 0, "column"),
                l(n, 29, 0, "row", "column"),
                l(n, 30, 0, "20px", "0px"),
                l(n, 40, 0, ""),
                l(n, 44, 0, "email"),
                l(n, 46, 0, "E-mail"),
                l(n, 58, 0, ""),
                l(n, 61, 0, "(00) 00000-0000"),
                l(n, 65, 0, "telCelular"),
                l(n, 67, 0, "Tel. celular"),
                l(n, 71, 0, "row", "column"),
                l(n, 72, 0, "20px", "0px"),
                l(n, 82, 0, ""),
                l(n, 85, 0, "(00) 0000-0000"),
                l(n, 89, 0, "telResidencial"),
                l(n, 91, 0, "Tel. residencial"),
                l(n, 103, 0, ""),
                l(n, 106, 0, "(00) 0000-0000"),
                l(n, 110, 0, "telComercial"),
                l(n, 112, 0, "Tel. comercial"),
                l(n, 116, 0, "end center"),
                l(n, 118, 0, "primary"),
                l(n, 123, 0, a.thirdFormGroup),
                l(n, 130, 0, a.thirdFormGroup),
                l(n, 133, 0, "column"),
                l(n, 137, 0, "row", "column"),
                l(n, 138, 0, "15px"),
                l(n, 139, 0, "space-between center"),
                l(n, 140, 0, ""),
                l(n, 142, 0, "endereco"),
                l(n, 145, 0, "50"),
                l(n, 147, 0, "row", "column"),
                l(n, 148, 0, "15px"),
                l(n, 152, 0, "row", "column"),
                l(n, 153, 0, "15px"),
                l(n, 163, 0, "30%"),
                l(n, 165, 0, ""),
                l(n, 169, 0, "cep"),
                l(n, 171, 0, "CEP", ""),
                l(n, 175, 0, a.thirdFormGroup.get("endereco.cep").hasError("required")),
                l(n, 177, 0, "row", "column"),
                l(n, 178, 0, "end center"),
                l(n, 180, 0, "primary"),
                l(n, 181, 0, a.position.value, "Busque pelo CEP."),
                l(n, 183, 0),
                l(n, 187, 0, "row", "column"),
                l(n, 188, 0, "15px"),
                l(n, 198, 0, "60%"),
                l(n, 200, 0, ""),
                l(n, 204, 0, "logradouro"),
                l(n, 206, 0, "Logradouro", ""),
                l(n, 210, 0, a.thirdFormGroup.get("endereco.logradouro").hasError("required")),
                l(n, 212, 0, "row", "column"),
                l(n, 213, 0, "15px"),
                l(n, 223, 0, "60%"),
                l(n, 225, 0, ""),
                l(n, 229, 0, "numero"),
                l(n, 231, 0, "Numero", ""),
                l(n, 233, 0, a.position.value, "Caso n\xe3o tenha n\xfamero, informe S/N."),
                l(n, 236, 0, a.thirdFormGroup.get("endereco.numero").hasError("required")),
                l(n, 238, 0, "row", "column"),
                l(n, 239, 0, "15px"),
                l(n, 249, 0, "60%"),
                l(n, 253, 0, "complemento"),
                l(n, 255, 0, "Complemento"),
                l(n, 259, 0, "row", "column"),
                l(n, 260, 0, "15px"),
                l(n, 270, 0, "60%"),
                l(n, 272, 0, ""),
                l(n, 276, 0, "bairro"),
                l(n, 278, 0, "Bairro", ""),
                l(n, 282, 0, a.thirdFormGroup.get("endereco.bairro").hasError("required")),
                l(n, 284, 0, "row", "column"),
                l(n, 285, 0, "15px"),
                l(n, 295, 0, "60%"),
                l(n, 297, 0, ""),
                l(n, 301, 0, "cidade"),
                l(n, 303, 0, "Cidade", ""),
                l(n, 307, 0, a.thirdFormGroup.get("endereco.cidade").hasError("required")),
                l(n, 309, 0, "enderecoDeOrigem"),
                l(n, 312, 0, "50"),
                l(n, 314, 0, "row", "column"),
                l(n, 315, 0, "15px"),
                l(n, 319, 0, "row", "column"),
                l(n, 320, 0, "15px"),
                l(n, 330, 0, "30%"),
                l(n, 334, 0, "cep"),
                l(n, 336, 0, "CEP"),
                l(n, 340, 0, "row", "column"),
                l(n, 341, 0, "15px"),
                l(n, 342, 0, "end center"),
                l(n, 344, 0, "primary"),
                l(n, 345, 0, a.position.value, "Busque pelo CEP."),
                l(n, 347, 0),
                l(n, 351, 0, "row", "column"),
                l(n, 352, 0, "15px"),
                l(n, 362, 0, "60%"),
                l(n, 366, 0, "logradouro"),
                l(n, 368, 0, "Logradouro"),
                l(n, 372, 0, "row", "column"),
                l(n, 373, 0, "15px"),
                l(n, 383, 0, "60%"),
                l(n, 387, 0, "numero"),
                l(n, 389, 0, "Numero"),
                l(n, 391, 0, a.position.value, "Caso n\xe3o tenha n\xfamero, informe S/N."),
                l(n, 394, 0, "row", "column"),
                l(n, 395, 0, "15px"),
                l(n, 405, 0, "60%"),
                l(n, 409, 0, "complemento"),
                l(n, 411, 0, "Complemento"),
                l(n, 415, 0, "row", "column"),
                l(n, 416, 0, "15px"),
                l(n, 426, 0, "60%"),
                l(n, 430, 0, "bairro"),
                l(n, 432, 0, "Bairro"),
                l(n, 436, 0, "row", "column"),
                l(n, 437, 0, "15px"),
                l(n, 447, 0, "60%"),
                l(n, 451, 0, "cidade"),
                l(n, 453, 0, "Cidade"),
                l(n, 457, 0, "row", "column"),
                l(n, 458, 0, "15px"),
                l(n, 460, 0, "primary"),
                l(n, 464, 0),
                l(n, 469, 0, ""),
                l(n, 471, 0, !a.thirdFormGroup.valid, "primary"),
                l(n, 476, 0),
                l(n, 481, 0, a.secondFormGroup, !0),
                l(n, 486, 0, "column"),
                l(n, 488, 0, "row"),
                l(n, 489, 0, "end center");
                var e = l(n, 494, 0, "/aa-solicitacoes/fale-conosco", l(n, 493, 0, "matricula_historico", "MATR\xcdCULA"));
                l(n, 492, 0, e),
                l(n, 497, 0, a.tabIndex),
                l(n, 500, 0, "SELE\xc7\xc3O DE COMPONENTES"),
                l(n, 505, 0, "row"),
                l(n, 506, 0, ""),
                l(n, 508, 0, "column"),
                l(n, 509, 0, "64"),
                l(n, 512, 0, "50"),
                l(n, 514, 0),
                l(n, 516, 0, null == a.componentes ? null : null == a.componentes.cursoComTurmas ? null : a.componentes.cursoComTurmas.periodos, 0),
                l(n, 518, 0, "column"),
                l(n, 519, 0, "35"),
                l(n, 523, 0),
                l(n, 532, 0, a.componentesAdicionados.length > 0 && !a.componentesCompletos || a.componentesAdicionados.length > 0 && a.componentesAdicionados.length > a.limiteMaximo || a.componentesAdicionados.length < a.limiteMinimo),
                l(n, 536, 0, a.componentesAdicionados),
                l(n, 538, 0, a.componentesAdicionados.length < 1),
                l(n, 542, 0, a.componentesAdicionados.length > 0),
                l(n, 544, 0, ""),
                l(n, 545, 0, "MATRIZ CURRICULAR"),
                l(n, 550, 0, null == a.componentes ? null : a.componentes.matrizDoAluno, a.componentesAdicionados),
                l(n, 552, 0, "HOR\xc1RIO"),
                l(n, 557, 0, a.componentesAdicionados.length < 1),
                l(n, 559, 0, "row"),
                l(n, 561, 0, "column"),
                l(n, 562, 0, "3px"),
                l(n, 563, 0, ""),
                l(n, 565, 0, null == a.mostraTurnos ? null : a.mostraTurnos.matutino),
                l(n, 568, 0, null == a.mostraTurnos ? null : a.mostraTurnos.vespertino),
                l(n, 571, 0, null == a.mostraTurnos ? null : a.mostraTurnos.noturno),
                l(n, 575, 0, !0),
                l(n, 580, 0, "row"),
                l(n, 581, 0, "center center"),
                l(n, 586, 0, a.componentesAdicionados),
                l(n, 588, 0, "row"),
                l(n, 589, 0, "center center"),
                l(n, 590, 0, ""),
                l(n, 593, 0, "94"),
                l(n, 595, 0, !a.processandoMatricula),
                l(n, 597, 0, a.processandoMatricula)
            }, function(l, n) {
                var a = n.component;
                l(n, 0, 0, "end" == e.Cb(n, 1).labelPosition, "bottom" == e.Cb(n, 1).labelPosition),
                l(n, 11, 0, e.Cb(n, 15).ngClassUntouched, e.Cb(n, 15).ngClassTouched, e.Cb(n, 15).ngClassPristine, e.Cb(n, 15).ngClassDirty, e.Cb(n, 15).ngClassValid, e.Cb(n, 15).ngClassInvalid, e.Cb(n, 15).ngClassPending),
                l(n, 31, 1, ["standard" == e.Cb(n, 32).appearance, "fill" == e.Cb(n, 32).appearance, "outline" == e.Cb(n, 32).appearance, "legacy" == e.Cb(n, 32).appearance, e.Cb(n, 32)._control.errorState, e.Cb(n, 32)._canLabelFloat, e.Cb(n, 32)._shouldLabelFloat(), e.Cb(n, 32)._hasFloatingLabel(), e.Cb(n, 32)._hideControlPlaceholder(), e.Cb(n, 32)._control.disabled, e.Cb(n, 32)._control.autofilled, e.Cb(n, 32)._control.focused, "accent" == e.Cb(n, 32).color, "warn" == e.Cb(n, 32).color, e.Cb(n, 32)._shouldForward("untouched"), e.Cb(n, 32)._shouldForward("touched"), e.Cb(n, 32)._shouldForward("pristine"), e.Cb(n, 32)._shouldForward("dirty"), e.Cb(n, 32)._shouldForward("valid"), e.Cb(n, 32)._shouldForward("invalid"), e.Cb(n, 32)._shouldForward("pending"), !e.Cb(n, 32)._animationsEnabled]),
                l(n, 41, 1, [e.Cb(n, 46)._isServer, e.Cb(n, 46).id, e.Cb(n, 46).placeholder, e.Cb(n, 46).disabled, e.Cb(n, 46).required, e.Cb(n, 46).readonly && !e.Cb(n, 46)._isNativeSelect || null, e.Cb(n, 46)._ariaDescribedby || null, e.Cb(n, 46).errorState, e.Cb(n, 46).required.toString(), e.Cb(n, 47).ngClassUntouched, e.Cb(n, 47).ngClassTouched, e.Cb(n, 47).ngClassPristine, e.Cb(n, 47).ngClassDirty, e.Cb(n, 47).ngClassValid, e.Cb(n, 47).ngClassInvalid, e.Cb(n, 47).ngClassPending]),
                l(n, 49, 1, ["standard" == e.Cb(n, 50).appearance, "fill" == e.Cb(n, 50).appearance, "outline" == e.Cb(n, 50).appearance, "legacy" == e.Cb(n, 50).appearance, e.Cb(n, 50)._control.errorState, e.Cb(n, 50)._canLabelFloat, e.Cb(n, 50)._shouldLabelFloat(), e.Cb(n, 50)._hasFloatingLabel(), e.Cb(n, 50)._hideControlPlaceholder(), e.Cb(n, 50)._control.disabled, e.Cb(n, 50)._control.autofilled, e.Cb(n, 50)._control.focused, "accent" == e.Cb(n, 50).color, "warn" == e.Cb(n, 50).color, e.Cb(n, 50)._shouldForward("untouched"), e.Cb(n, 50)._shouldForward("touched"), e.Cb(n, 50)._shouldForward("pristine"), e.Cb(n, 50)._shouldForward("dirty"), e.Cb(n, 50)._shouldForward("valid"), e.Cb(n, 50)._shouldForward("invalid"), e.Cb(n, 50)._shouldForward("pending"), !e.Cb(n, 50)._animationsEnabled]),
                l(n, 59, 1, [e.Cb(n, 67)._isServer, e.Cb(n, 67).id, e.Cb(n, 67).placeholder, e.Cb(n, 67).disabled, e.Cb(n, 67).required, e.Cb(n, 67).readonly && !e.Cb(n, 67)._isNativeSelect || null, e.Cb(n, 67)._ariaDescribedby || null, e.Cb(n, 67).errorState, e.Cb(n, 67).required.toString(), e.Cb(n, 68).ngClassUntouched, e.Cb(n, 68).ngClassTouched, e.Cb(n, 68).ngClassPristine, e.Cb(n, 68).ngClassDirty, e.Cb(n, 68).ngClassValid, e.Cb(n, 68).ngClassInvalid, e.Cb(n, 68).ngClassPending]),
                l(n, 73, 1, ["standard" == e.Cb(n, 74).appearance, "fill" == e.Cb(n, 74).appearance, "outline" == e.Cb(n, 74).appearance, "legacy" == e.Cb(n, 74).appearance, e.Cb(n, 74)._control.errorState, e.Cb(n, 74)._canLabelFloat, e.Cb(n, 74)._shouldLabelFloat(), e.Cb(n, 74)._hasFloatingLabel(), e.Cb(n, 74)._hideControlPlaceholder(), e.Cb(n, 74)._control.disabled, e.Cb(n, 74)._control.autofilled, e.Cb(n, 74)._control.focused, "accent" == e.Cb(n, 74).color, "warn" == e.Cb(n, 74).color, e.Cb(n, 74)._shouldForward("untouched"), e.Cb(n, 74)._shouldForward("touched"), e.Cb(n, 74)._shouldForward("pristine"), e.Cb(n, 74)._shouldForward("dirty"), e.Cb(n, 74)._shouldForward("valid"), e.Cb(n, 74)._shouldForward("invalid"), e.Cb(n, 74)._shouldForward("pending"), !e.Cb(n, 74)._animationsEnabled]),
                l(n, 83, 1, [e.Cb(n, 91)._isServer, e.Cb(n, 91).id, e.Cb(n, 91).placeholder, e.Cb(n, 91).disabled, e.Cb(n, 91).required, e.Cb(n, 91).readonly && !e.Cb(n, 91)._isNativeSelect || null, e.Cb(n, 91)._ariaDescribedby || null, e.Cb(n, 91).errorState, e.Cb(n, 91).required.toString(), e.Cb(n, 92).ngClassUntouched, e.Cb(n, 92).ngClassTouched, e.Cb(n, 92).ngClassPristine, e.Cb(n, 92).ngClassDirty, e.Cb(n, 92).ngClassValid, e.Cb(n, 92).ngClassInvalid, e.Cb(n, 92).ngClassPending]),
                l(n, 94, 1, ["standard" == e.Cb(n, 95).appearance, "fill" == e.Cb(n, 95).appearance, "outline" == e.Cb(n, 95).appearance, "legacy" == e.Cb(n, 95).appearance, e.Cb(n, 95)._control.errorState, e.Cb(n, 95)._canLabelFloat, e.Cb(n, 95)._shouldLabelFloat(), e.Cb(n, 95)._hasFloatingLabel(), e.Cb(n, 95)._hideControlPlaceholder(), e.Cb(n, 95)._control.disabled, e.Cb(n, 95)._control.autofilled, e.Cb(n, 95)._control.focused, "accent" == e.Cb(n, 95).color, "warn" == e.Cb(n, 95).color, e.Cb(n, 95)._shouldForward("untouched"), e.Cb(n, 95)._shouldForward("touched"), e.Cb(n, 95)._shouldForward("pristine"), e.Cb(n, 95)._shouldForward("dirty"), e.Cb(n, 95)._shouldForward("valid"), e.Cb(n, 95)._shouldForward("invalid"), e.Cb(n, 95)._shouldForward("pending"), !e.Cb(n, 95)._animationsEnabled]),
                l(n, 104, 1, [e.Cb(n, 112)._isServer, e.Cb(n, 112).id, e.Cb(n, 112).placeholder, e.Cb(n, 112).disabled, e.Cb(n, 112).required, e.Cb(n, 112).readonly && !e.Cb(n, 112)._isNativeSelect || null, e.Cb(n, 112)._ariaDescribedby || null, e.Cb(n, 112).errorState, e.Cb(n, 112).required.toString(), e.Cb(n, 113).ngClassUntouched, e.Cb(n, 113).ngClassTouched, e.Cb(n, 113).ngClassPristine, e.Cb(n, 113).ngClassDirty, e.Cb(n, 113).ngClassValid, e.Cb(n, 113).ngClassInvalid, e.Cb(n, 113).ngClassPending]),
                l(n, 117, 0, e.Cb(n, 118).disabled || null, "NoopAnimations" === e.Cb(n, 118)._animationMode, e.Cb(n, 120).type),
                l(n, 128, 0, e.Cb(n, 132).ngClassUntouched, e.Cb(n, 132).ngClassTouched, e.Cb(n, 132).ngClassPristine, e.Cb(n, 132).ngClassDirty, e.Cb(n, 132).ngClassValid, e.Cb(n, 132).ngClassInvalid, e.Cb(n, 132).ngClassPending),
                l(n, 141, 0, e.Cb(n, 144).ngClassUntouched, e.Cb(n, 144).ngClassTouched, e.Cb(n, 144).ngClassPristine, e.Cb(n, 144).ngClassDirty, e.Cb(n, 144).ngClassValid, e.Cb(n, 144).ngClassInvalid, e.Cb(n, 144).ngClassPending),
                l(n, 154, 1, ["standard" == e.Cb(n, 155).appearance, "fill" == e.Cb(n, 155).appearance, "outline" == e.Cb(n, 155).appearance, "legacy" == e.Cb(n, 155).appearance, e.Cb(n, 155)._control.errorState, e.Cb(n, 155)._canLabelFloat, e.Cb(n, 155)._shouldLabelFloat(), e.Cb(n, 155)._hasFloatingLabel(), e.Cb(n, 155)._hideControlPlaceholder(), e.Cb(n, 155)._control.disabled, e.Cb(n, 155)._control.autofilled, e.Cb(n, 155)._control.focused, "accent" == e.Cb(n, 155).color, "warn" == e.Cb(n, 155).color, e.Cb(n, 155)._shouldForward("untouched"), e.Cb(n, 155)._shouldForward("touched"), e.Cb(n, 155)._shouldForward("pristine"), e.Cb(n, 155)._shouldForward("dirty"), e.Cb(n, 155)._shouldForward("valid"), e.Cb(n, 155)._shouldForward("invalid"), e.Cb(n, 155)._shouldForward("pending"), !e.Cb(n, 155)._animationsEnabled]),
                l(n, 164, 1, [e.Cb(n, 165).required ? "" : null, e.Cb(n, 171)._isServer, e.Cb(n, 171).id, e.Cb(n, 171).placeholder, e.Cb(n, 171).disabled, e.Cb(n, 171).required, e.Cb(n, 171).readonly && !e.Cb(n, 171)._isNativeSelect || null, e.Cb(n, 171)._ariaDescribedby || null, e.Cb(n, 171).errorState, e.Cb(n, 171).required.toString(), e.Cb(n, 172).ngClassUntouched, e.Cb(n, 172).ngClassTouched, e.Cb(n, 172).ngClassPristine, e.Cb(n, 172).ngClassDirty, e.Cb(n, 172).ngClassValid, e.Cb(n, 172).ngClassInvalid, e.Cb(n, 172).ngClassPending]),
                l(n, 179, 0, e.Cb(n, 180).disabled || null, "NoopAnimations" === e.Cb(n, 180)._animationMode),
                l(n, 182, 0, e.Cb(n, 183).inline, "primary" !== e.Cb(n, 183).color && "accent" !== e.Cb(n, 183).color && "warn" !== e.Cb(n, 183).color),
                l(n, 189, 1, ["standard" == e.Cb(n, 190).appearance, "fill" == e.Cb(n, 190).appearance, "outline" == e.Cb(n, 190).appearance, "legacy" == e.Cb(n, 190).appearance, e.Cb(n, 190)._control.errorState, e.Cb(n, 190)._canLabelFloat, e.Cb(n, 190)._shouldLabelFloat(), e.Cb(n, 190)._hasFloatingLabel(), e.Cb(n, 190)._hideControlPlaceholder(), e.Cb(n, 190)._control.disabled, e.Cb(n, 190)._control.autofilled, e.Cb(n, 190)._control.focused, "accent" == e.Cb(n, 190).color, "warn" == e.Cb(n, 190).color, e.Cb(n, 190)._shouldForward("untouched"), e.Cb(n, 190)._shouldForward("touched"), e.Cb(n, 190)._shouldForward("pristine"), e.Cb(n, 190)._shouldForward("dirty"), e.Cb(n, 190)._shouldForward("valid"), e.Cb(n, 190)._shouldForward("invalid"), e.Cb(n, 190)._shouldForward("pending"), !e.Cb(n, 190)._animationsEnabled]),
                l(n, 199, 1, [e.Cb(n, 200).required ? "" : null, e.Cb(n, 206)._isServer, e.Cb(n, 206).id, e.Cb(n, 206).placeholder, e.Cb(n, 206).disabled, e.Cb(n, 206).required, e.Cb(n, 206).readonly && !e.Cb(n, 206)._isNativeSelect || null, e.Cb(n, 206)._ariaDescribedby || null, e.Cb(n, 206).errorState, e.Cb(n, 206).required.toString(), e.Cb(n, 207).ngClassUntouched, e.Cb(n, 207).ngClassTouched, e.Cb(n, 207).ngClassPristine, e.Cb(n, 207).ngClassDirty, e.Cb(n, 207).ngClassValid, e.Cb(n, 207).ngClassInvalid, e.Cb(n, 207).ngClassPending]),
                l(n, 214, 1, ["standard" == e.Cb(n, 215).appearance, "fill" == e.Cb(n, 215).appearance, "outline" == e.Cb(n, 215).appearance, "legacy" == e.Cb(n, 215).appearance, e.Cb(n, 215)._control.errorState, e.Cb(n, 215)._canLabelFloat, e.Cb(n, 215)._shouldLabelFloat(), e.Cb(n, 215)._hasFloatingLabel(), e.Cb(n, 215)._hideControlPlaceholder(), e.Cb(n, 215)._control.disabled, e.Cb(n, 215)._control.autofilled, e.Cb(n, 215)._control.focused, "accent" == e.Cb(n, 215).color, "warn" == e.Cb(n, 215).color, e.Cb(n, 215)._shouldForward("untouched"), e.Cb(n, 215)._shouldForward("touched"), e.Cb(n, 215)._shouldForward("pristine"), e.Cb(n, 215)._shouldForward("dirty"), e.Cb(n, 215)._shouldForward("valid"), e.Cb(n, 215)._shouldForward("invalid"), e.Cb(n, 215)._shouldForward("pending"), !e.Cb(n, 215)._animationsEnabled]),
                l(n, 224, 1, [e.Cb(n, 225).required ? "" : null, e.Cb(n, 231)._isServer, e.Cb(n, 231).id, e.Cb(n, 231).placeholder, e.Cb(n, 231).disabled, e.Cb(n, 231).required, e.Cb(n, 231).readonly && !e.Cb(n, 231)._isNativeSelect || null, e.Cb(n, 231)._ariaDescribedby || null, e.Cb(n, 231).errorState, e.Cb(n, 231).required.toString(), e.Cb(n, 232).ngClassUntouched, e.Cb(n, 232).ngClassTouched, e.Cb(n, 232).ngClassPristine, e.Cb(n, 232).ngClassDirty, e.Cb(n, 232).ngClassValid, e.Cb(n, 232).ngClassInvalid, e.Cb(n, 232).ngClassPending]),
                l(n, 240, 1, ["standard" == e.Cb(n, 241).appearance, "fill" == e.Cb(n, 241).appearance, "outline" == e.Cb(n, 241).appearance, "legacy" == e.Cb(n, 241).appearance, e.Cb(n, 241)._control.errorState, e.Cb(n, 241)._canLabelFloat, e.Cb(n, 241)._shouldLabelFloat(), e.Cb(n, 241)._hasFloatingLabel(), e.Cb(n, 241)._hideControlPlaceholder(), e.Cb(n, 241)._control.disabled, e.Cb(n, 241)._control.autofilled, e.Cb(n, 241)._control.focused, "accent" == e.Cb(n, 241).color, "warn" == e.Cb(n, 241).color, e.Cb(n, 241)._shouldForward("untouched"), e.Cb(n, 241)._shouldForward("touched"), e.Cb(n, 241)._shouldForward("pristine"), e.Cb(n, 241)._shouldForward("dirty"), e.Cb(n, 241)._shouldForward("valid"), e.Cb(n, 241)._shouldForward("invalid"), e.Cb(n, 241)._shouldForward("pending"), !e.Cb(n, 241)._animationsEnabled]),
                l(n, 250, 1, [e.Cb(n, 255)._isServer, e.Cb(n, 255).id, e.Cb(n, 255).placeholder, e.Cb(n, 255).disabled, e.Cb(n, 255).required, e.Cb(n, 255).readonly && !e.Cb(n, 255)._isNativeSelect || null, e.Cb(n, 255)._ariaDescribedby || null, e.Cb(n, 255).errorState, e.Cb(n, 255).required.toString(), e.Cb(n, 256).ngClassUntouched, e.Cb(n, 256).ngClassTouched, e.Cb(n, 256).ngClassPristine, e.Cb(n, 256).ngClassDirty, e.Cb(n, 256).ngClassValid, e.Cb(n, 256).ngClassInvalid, e.Cb(n, 256).ngClassPending]),
                l(n, 261, 1, ["standard" == e.Cb(n, 262).appearance, "fill" == e.Cb(n, 262).appearance, "outline" == e.Cb(n, 262).appearance, "legacy" == e.Cb(n, 262).appearance, e.Cb(n, 262)._control.errorState, e.Cb(n, 262)._canLabelFloat, e.Cb(n, 262)._shouldLabelFloat(), e.Cb(n, 262)._hasFloatingLabel(), e.Cb(n, 262)._hideControlPlaceholder(), e.Cb(n, 262)._control.disabled, e.Cb(n, 262)._control.autofilled, e.Cb(n, 262)._control.focused, "accent" == e.Cb(n, 262).color, "warn" == e.Cb(n, 262).color, e.Cb(n, 262)._shouldForward("untouched"), e.Cb(n, 262)._shouldForward("touched"), e.Cb(n, 262)._shouldForward("pristine"), e.Cb(n, 262)._shouldForward("dirty"), e.Cb(n, 262)._shouldForward("valid"), e.Cb(n, 262)._shouldForward("invalid"), e.Cb(n, 262)._shouldForward("pending"), !e.Cb(n, 262)._animationsEnabled]),
                l(n, 271, 1, [e.Cb(n, 272).required ? "" : null, e.Cb(n, 278)._isServer, e.Cb(n, 278).id, e.Cb(n, 278).placeholder, e.Cb(n, 278).disabled, e.Cb(n, 278).required, e.Cb(n, 278).readonly && !e.Cb(n, 278)._isNativeSelect || null, e.Cb(n, 278)._ariaDescribedby || null, e.Cb(n, 278).errorState, e.Cb(n, 278).required.toString(), e.Cb(n, 279).ngClassUntouched, e.Cb(n, 279).ngClassTouched, e.Cb(n, 279).ngClassPristine, e.Cb(n, 279).ngClassDirty, e.Cb(n, 279).ngClassValid, e.Cb(n, 279).ngClassInvalid, e.Cb(n, 279).ngClassPending]),
                l(n, 286, 1, ["standard" == e.Cb(n, 287).appearance, "fill" == e.Cb(n, 287).appearance, "outline" == e.Cb(n, 287).appearance, "legacy" == e.Cb(n, 287).appearance, e.Cb(n, 287)._control.errorState, e.Cb(n, 287)._canLabelFloat, e.Cb(n, 287)._shouldLabelFloat(), e.Cb(n, 287)._hasFloatingLabel(), e.Cb(n, 287)._hideControlPlaceholder(), e.Cb(n, 287)._control.disabled, e.Cb(n, 287)._control.autofilled, e.Cb(n, 287)._control.focused, "accent" == e.Cb(n, 287).color, "warn" == e.Cb(n, 287).color, e.Cb(n, 287)._shouldForward("untouched"), e.Cb(n, 287)._shouldForward("touched"), e.Cb(n, 287)._shouldForward("pristine"), e.Cb(n, 287)._shouldForward("dirty"), e.Cb(n, 287)._shouldForward("valid"), e.Cb(n, 287)._shouldForward("invalid"), e.Cb(n, 287)._shouldForward("pending"), !e.Cb(n, 287)._animationsEnabled]),
                l(n, 296, 1, [e.Cb(n, 297).required ? "" : null, e.Cb(n, 303)._isServer, e.Cb(n, 303).id, e.Cb(n, 303).placeholder, e.Cb(n, 303).disabled, e.Cb(n, 303).required, e.Cb(n, 303).readonly && !e.Cb(n, 303)._isNativeSelect || null, e.Cb(n, 303)._ariaDescribedby || null, e.Cb(n, 303).errorState, e.Cb(n, 303).required.toString(), e.Cb(n, 304).ngClassUntouched, e.Cb(n, 304).ngClassTouched, e.Cb(n, 304).ngClassPristine, e.Cb(n, 304).ngClassDirty, e.Cb(n, 304).ngClassValid, e.Cb(n, 304).ngClassInvalid, e.Cb(n, 304).ngClassPending]),
                l(n, 308, 0, e.Cb(n, 311).ngClassUntouched, e.Cb(n, 311).ngClassTouched, e.Cb(n, 311).ngClassPristine, e.Cb(n, 311).ngClassDirty, e.Cb(n, 311).ngClassValid, e.Cb(n, 311).ngClassInvalid, e.Cb(n, 311).ngClassPending),
                l(n, 321, 1, ["standard" == e.Cb(n, 322).appearance, "fill" == e.Cb(n, 322).appearance, "outline" == e.Cb(n, 322).appearance, "legacy" == e.Cb(n, 322).appearance, e.Cb(n, 322)._control.errorState, e.Cb(n, 322)._canLabelFloat, e.Cb(n, 322)._shouldLabelFloat(), e.Cb(n, 322)._hasFloatingLabel(), e.Cb(n, 322)._hideControlPlaceholder(), e.Cb(n, 322)._control.disabled, e.Cb(n, 322)._control.autofilled, e.Cb(n, 322)._control.focused, "accent" == e.Cb(n, 322).color, "warn" == e.Cb(n, 322).color, e.Cb(n, 322)._shouldForward("untouched"), e.Cb(n, 322)._shouldForward("touched"), e.Cb(n, 322)._shouldForward("pristine"), e.Cb(n, 322)._shouldForward("dirty"), e.Cb(n, 322)._shouldForward("valid"), e.Cb(n, 322)._shouldForward("invalid"), e.Cb(n, 322)._shouldForward("pending"), !e.Cb(n, 322)._animationsEnabled]),
                l(n, 331, 1, [e.Cb(n, 336)._isServer, e.Cb(n, 336).id, e.Cb(n, 336).placeholder, e.Cb(n, 336).disabled, e.Cb(n, 336).required, e.Cb(n, 336).readonly && !e.Cb(n, 336)._isNativeSelect || null, e.Cb(n, 336)._ariaDescribedby || null, e.Cb(n, 336).errorState, e.Cb(n, 336).required.toString(), e.Cb(n, 337).ngClassUntouched, e.Cb(n, 337).ngClassTouched, e.Cb(n, 337).ngClassPristine, e.Cb(n, 337).ngClassDirty, e.Cb(n, 337).ngClassValid, e.Cb(n, 337).ngClassInvalid, e.Cb(n, 337).ngClassPending]),
                l(n, 343, 0, e.Cb(n, 344).disabled || null, "NoopAnimations" === e.Cb(n, 344)._animationMode),
                l(n, 346, 0, e.Cb(n, 347).inline, "primary" !== e.Cb(n, 347).color && "accent" !== e.Cb(n, 347).color && "warn" !== e.Cb(n, 347).color),
                l(n, 353, 1, ["standard" == e.Cb(n, 354).appearance, "fill" == e.Cb(n, 354).appearance, "outline" == e.Cb(n, 354).appearance, "legacy" == e.Cb(n, 354).appearance, e.Cb(n, 354)._control.errorState, e.Cb(n, 354)._canLabelFloat, e.Cb(n, 354)._shouldLabelFloat(), e.Cb(n, 354)._hasFloatingLabel(), e.Cb(n, 354)._hideControlPlaceholder(), e.Cb(n, 354)._control.disabled, e.Cb(n, 354)._control.autofilled, e.Cb(n, 354)._control.focused, "accent" == e.Cb(n, 354).color, "warn" == e.Cb(n, 354).color, e.Cb(n, 354)._shouldForward("untouched"), e.Cb(n, 354)._shouldForward("touched"), e.Cb(n, 354)._shouldForward("pristine"), e.Cb(n, 354)._shouldForward("dirty"), e.Cb(n, 354)._shouldForward("valid"), e.Cb(n, 354)._shouldForward("invalid"), e.Cb(n, 354)._shouldForward("pending"), !e.Cb(n, 354)._animationsEnabled]),
                l(n, 363, 1, [e.Cb(n, 368)._isServer, e.Cb(n, 368).id, e.Cb(n, 368).placeholder, e.Cb(n, 368).disabled, e.Cb(n, 368).required, e.Cb(n, 368).readonly && !e.Cb(n, 368)._isNativeSelect || null, e.Cb(n, 368)._ariaDescribedby || null, e.Cb(n, 368).errorState, e.Cb(n, 368).required.toString(), e.Cb(n, 369).ngClassUntouched, e.Cb(n, 369).ngClassTouched, e.Cb(n, 369).ngClassPristine, e.Cb(n, 369).ngClassDirty, e.Cb(n, 369).ngClassValid, e.Cb(n, 369).ngClassInvalid, e.Cb(n, 369).ngClassPending]),
                l(n, 374, 1, ["standard" == e.Cb(n, 375).appearance, "fill" == e.Cb(n, 375).appearance, "outline" == e.Cb(n, 375).appearance, "legacy" == e.Cb(n, 375).appearance, e.Cb(n, 375)._control.errorState, e.Cb(n, 375)._canLabelFloat, e.Cb(n, 375)._shouldLabelFloat(), e.Cb(n, 375)._hasFloatingLabel(), e.Cb(n, 375)._hideControlPlaceholder(), e.Cb(n, 375)._control.disabled, e.Cb(n, 375)._control.autofilled, e.Cb(n, 375)._control.focused, "accent" == e.Cb(n, 375).color, "warn" == e.Cb(n, 375).color, e.Cb(n, 375)._shouldForward("untouched"), e.Cb(n, 375)._shouldForward("touched"), e.Cb(n, 375)._shouldForward("pristine"), e.Cb(n, 375)._shouldForward("dirty"), e.Cb(n, 375)._shouldForward("valid"), e.Cb(n, 375)._shouldForward("invalid"), e.Cb(n, 375)._shouldForward("pending"), !e.Cb(n, 375)._animationsEnabled]),
                l(n, 384, 1, [e.Cb(n, 389)._isServer, e.Cb(n, 389).id, e.Cb(n, 389).placeholder, e.Cb(n, 389).disabled, e.Cb(n, 389).required, e.Cb(n, 389).readonly && !e.Cb(n, 389)._isNativeSelect || null, e.Cb(n, 389)._ariaDescribedby || null, e.Cb(n, 389).errorState, e.Cb(n, 389).required.toString(), e.Cb(n, 390).ngClassUntouched, e.Cb(n, 390).ngClassTouched, e.Cb(n, 390).ngClassPristine, e.Cb(n, 390).ngClassDirty, e.Cb(n, 390).ngClassValid, e.Cb(n, 390).ngClassInvalid, e.Cb(n, 390).ngClassPending]),
                l(n, 396, 1, ["standard" == e.Cb(n, 397).appearance, "fill" == e.Cb(n, 397).appearance, "outline" == e.Cb(n, 397).appearance, "legacy" == e.Cb(n, 397).appearance, e.Cb(n, 397)._control.errorState, e.Cb(n, 397)._canLabelFloat, e.Cb(n, 397)._shouldLabelFloat(), e.Cb(n, 397)._hasFloatingLabel(), e.Cb(n, 397)._hideControlPlaceholder(), e.Cb(n, 397)._control.disabled, e.Cb(n, 397)._control.autofilled, e.Cb(n, 397)._control.focused, "accent" == e.Cb(n, 397).color, "warn" == e.Cb(n, 397).color, e.Cb(n, 397)._shouldForward("untouched"), e.Cb(n, 397)._shouldForward("touched"), e.Cb(n, 397)._shouldForward("pristine"), e.Cb(n, 397)._shouldForward("dirty"), e.Cb(n, 397)._shouldForward("valid"), e.Cb(n, 397)._shouldForward("invalid"), e.Cb(n, 397)._shouldForward("pending"), !e.Cb(n, 397)._animationsEnabled]),
                l(n, 406, 1, [e.Cb(n, 411)._isServer, e.Cb(n, 411).id, e.Cb(n, 411).placeholder, e.Cb(n, 411).disabled, e.Cb(n, 411).required, e.Cb(n, 411).readonly && !e.Cb(n, 411)._isNativeSelect || null, e.Cb(n, 411)._ariaDescribedby || null, e.Cb(n, 411).errorState, e.Cb(n, 411).required.toString(), e.Cb(n, 412).ngClassUntouched, e.Cb(n, 412).ngClassTouched, e.Cb(n, 412).ngClassPristine, e.Cb(n, 412).ngClassDirty, e.Cb(n, 412).ngClassValid, e.Cb(n, 412).ngClassInvalid, e.Cb(n, 412).ngClassPending]),
                l(n, 417, 1, ["standard" == e.Cb(n, 418).appearance, "fill" == e.Cb(n, 418).appearance, "outline" == e.Cb(n, 418).appearance, "legacy" == e.Cb(n, 418).appearance, e.Cb(n, 418)._control.errorState, e.Cb(n, 418)._canLabelFloat, e.Cb(n, 418)._shouldLabelFloat(), e.Cb(n, 418)._hasFloatingLabel(), e.Cb(n, 418)._hideControlPlaceholder(), e.Cb(n, 418)._control.disabled, e.Cb(n, 418)._control.autofilled, e.Cb(n, 418)._control.focused, "accent" == e.Cb(n, 418).color, "warn" == e.Cb(n, 418).color, e.Cb(n, 418)._shouldForward("untouched"), e.Cb(n, 418)._shouldForward("touched"), e.Cb(n, 418)._shouldForward("pristine"), e.Cb(n, 418)._shouldForward("dirty"), e.Cb(n, 418)._shouldForward("valid"), e.Cb(n, 418)._shouldForward("invalid"), e.Cb(n, 418)._shouldForward("pending"), !e.Cb(n, 418)._animationsEnabled]),
                l(n, 427, 1, [e.Cb(n, 432)._isServer, e.Cb(n, 432).id, e.Cb(n, 432).placeholder, e.Cb(n, 432).disabled, e.Cb(n, 432).required, e.Cb(n, 432).readonly && !e.Cb(n, 432)._isNativeSelect || null, e.Cb(n, 432)._ariaDescribedby || null, e.Cb(n, 432).errorState, e.Cb(n, 432).required.toString(), e.Cb(n, 433).ngClassUntouched, e.Cb(n, 433).ngClassTouched, e.Cb(n, 433).ngClassPristine, e.Cb(n, 433).ngClassDirty, e.Cb(n, 433).ngClassValid, e.Cb(n, 433).ngClassInvalid, e.Cb(n, 433).ngClassPending]),
                l(n, 438, 1, ["standard" == e.Cb(n, 439).appearance, "fill" == e.Cb(n, 439).appearance, "outline" == e.Cb(n, 439).appearance, "legacy" == e.Cb(n, 439).appearance, e.Cb(n, 439)._control.errorState, e.Cb(n, 439)._canLabelFloat, e.Cb(n, 439)._shouldLabelFloat(), e.Cb(n, 439)._hasFloatingLabel(), e.Cb(n, 439)._hideControlPlaceholder(), e.Cb(n, 439)._control.disabled, e.Cb(n, 439)._control.autofilled, e.Cb(n, 439)._control.focused, "accent" == e.Cb(n, 439).color, "warn" == e.Cb(n, 439).color, e.Cb(n, 439)._shouldForward("untouched"), e.Cb(n, 439)._shouldForward("touched"), e.Cb(n, 439)._shouldForward("pristine"), e.Cb(n, 439)._shouldForward("dirty"), e.Cb(n, 439)._shouldForward("valid"), e.Cb(n, 439)._shouldForward("invalid"), e.Cb(n, 439)._shouldForward("pending"), !e.Cb(n, 439)._animationsEnabled]),
                l(n, 448, 1, [e.Cb(n, 453)._isServer, e.Cb(n, 453).id, e.Cb(n, 453).placeholder, e.Cb(n, 453).disabled, e.Cb(n, 453).required, e.Cb(n, 453).readonly && !e.Cb(n, 453)._isNativeSelect || null, e.Cb(n, 453)._ariaDescribedby || null, e.Cb(n, 453).errorState, e.Cb(n, 453).required.toString(), e.Cb(n, 454).ngClassUntouched, e.Cb(n, 454).ngClassTouched, e.Cb(n, 454).ngClassPristine, e.Cb(n, 454).ngClassDirty, e.Cb(n, 454).ngClassValid, e.Cb(n, 454).ngClassInvalid, e.Cb(n, 454).ngClassPending]),
                l(n, 459, 0, e.Cb(n, 460).disabled || null, "NoopAnimations" === e.Cb(n, 460)._animationMode, e.Cb(n, 462).type),
                l(n, 463, 0, e.Cb(n, 464).inline, "primary" !== e.Cb(n, 464).color && "accent" !== e.Cb(n, 464).color && "warn" !== e.Cb(n, 464).color),
                l(n, 470, 0, e.Cb(n, 471).disabled || null, "NoopAnimations" === e.Cb(n, 471)._animationMode, e.Cb(n, 473).type),
                l(n, 475, 0, e.Cb(n, 476).inline, "primary" !== e.Cb(n, 476).color && "accent" !== e.Cb(n, 476).color && "warn" !== e.Cb(n, 476).color),
                l(n, 491, 0, e.Cb(n, 492).target, e.Cb(n, 492).href),
                l(n, 496, 0, e.Cb(n, 497).dynamicHeight, "below" === e.Cb(n, 497).headerPosition),
                l(n, 510, 0, "horizontal" === e.Cb(n, 514).orientation, "horizontal" !== e.Cb(n, 514).orientation),
                l(n, 522, 0, e.Cb(n, 523).inline, "primary" !== e.Cb(n, 523).color && "accent" !== e.Cb(n, 523).color && "warn" !== e.Cb(n, 523).color),
                l(n, 527, 0, a.componentesAdicionados.length, a.limiteMaximo),
                l(n, 539, 0, e.Cb(n, 540).vertical ? "vertical" : "horizontal", e.Cb(n, 540).vertical, !e.Cb(n, 540).vertical, e.Cb(n, 540).inset)
            })
        }
        function Fn(l) {
            return e.Mb(0, [e.Eb(0, h.A, []), (l()(),
            e.kb(16777216, null, null, 1, null, vl)), e.rb(2, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, kl)), e.rb(4, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Al)), e.rb(6, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, wn)), e.rb(8, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null)], function(l, n) {
                var a = n.component;
                l(n, 2, 0, !a.componentes && !a.erroConsulta),
                l(n, 4, 0, a.erroConsulta),
                l(n, 6, 0, a.componentes),
                l(n, 8, 0, a.componentes)
            }, null)
        }
        function On(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 1, "app-turmas-disponiveis", [], null, null, null, Fn, Ll)), e.rb(1, 114688, null, 0, yl, [e.B, _l.e, bl, fl.a, Q.a, Q.n, ul.a, E.h, gl.c, hl.a], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }
        var In = e.ob("app-turmas-disponiveis", yl, On, {}, {}, [])
          , Tn = a("MlvX")
          , Pn = a("Azqq")
          , En = a("uGex")
          , Sn = function() {
            function l(l, n, a, e, o, u, t, i, r, s) {
                var c = this;
                this.zone = l,
                this.dialog = n,
                this.turmaService = a,
                this.authService = e,
                this.route = o,
                this.router = u,
                this._AESEncryptDecryptService = t,
                this._formBuilder = i,
                this.viacep = r,
                this.snackService = s,
                this.componentesAdicionados = [],
                this.horariosAdicionados = [],
                this.limiteMinimo = 1,
                this.resumoHorario = [],
                this.confirmacaoFinal = !1,
                this.lerContrato = !1,
                this.contratoLido = !1,
                this.processandoMatricula = !1,
                this.matriculaAtual = [],
                this.mostraTurnos = {
                    matutino: !1,
                    vespertino: !1,
                    noturno: !1
                },
                this.subtotal = 0,
                this.desconto = 0,
                this.valorTotal = 0,
                this.creditoParcelasDisponivel = 0,
                this.creditoCarteiraDisponivel = 0,
                this.quantidadeParcelas = 1,
                this.parcelas = [],
                this.diferencaParcelas = 0,
                this.stringDiferenca = "",
                this.bloqueiaSalvar = !0,
                this.temDesconto = !1,
                this.fiesObrigatorio = !1,
                this.novoFies = !1,
                this.pravaler = !1,
                this.fiesProuni = !1,
                this.temRepasseFies = !1,
                this.descontoConsultado = !1,
                this.saldoCarteiraConsultado = !1,
                this.temConvenio = !1,
                this.maxDescontoConvenio = 0,
                this.maxDescontoAdicional = 0,
                this.maxParcelas = 1,
                this.consultando = !1,
                this.temTaxaDeMatricula = !1,
                this.primeiroMesVencimento = 1,
                this.primeiroDiaVencimento = 1,
                this.vencimentos = [],
                this.quantidadesParcelas = [],
                this.valorDosComponentes = 0,
                this.simulacao = {
                    componentes: [],
                    subtotal: 0,
                    valorTetoFies: null,
                    desconto: null,
                    percentualProuni: null,
                    fiesObrigatorio: null,
                    percentualFies: null,
                    percentualPravaler: null,
                    novoFies: !1,
                    valorCoPartFies: null,
                    valorRepasseFies: null,
                    descontoConvenio: null,
                    vlDescontoCond: null,
                    credito: null,
                    creditoCarteira: null,
                    creditoParcelas: null,
                    saldoParcelas: null,
                    valorTotal: 0,
                    totalAPagar: 0,
                    confirmada: !1,
                    quantidadeParcelas: 1,
                    parcelas: [],
                    taxaDeMatricula: {
                        valor: 0,
                        dia: null,
                        fatura: null
                    },
                    formaDePagamento: {
                        strId: "",
                        descricao: ""
                    },
                    periodoMatricula: {
                        _id: null,
                        descricao: null
                    },
                    descontoAntigo: {
                        _id: null,
                        descricao: null,
                        percentualDesconto: null,
                        valor: null
                    }
                },
                this.prouniSetado = !1,
                this.fiesSetado = !1,
                this.valorFiesObrigatorio = 0,
                this.subtotalViewFies = 0,
                this.formasDePagamento = [{
                    strId: "iugu-all",
                    descricao: "FATURA IUGU (BOL,PIX,CCR)"
                }],
                this.positionOptions = ["after", "before", "above", "below", "left", "right"],
                this.position = new E.i(this.positionOptions[0]),
                this.authService.getAuthStatus().subscribe(function(l) {
                    l.uid && /^[r][a]\d/.test(l.uid) && (c.uid = l.uid.replace(/[^\d]+/g, ""))
                })
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.secondFormGroup = this._formBuilder.group({
                    secondCtrl: ["", E.C.required]
                }),
                this.turmaService.turmasDisponiveisUN(this.uid).subscribe(function(n) {
                    console.log(l.uid.split("").reverse().join(""))
                    l._rpo = JSON.parse(l._AESEncryptDecryptService.decrypt(n._rpo, l.uid.split("").reverse().join(""))),
                    l.componentes = l._rpo,
                    l.setDescConvenio(l._rpo.desconto, !1),
                    l.setCreditoCarteira(l._rpo.credito, !1),
                    l.simulacao.quantidadeParcelas = l._rpo.maxParcelas,
                    l.formaDePagamento = {
                        strId: "iugu-all",
                        descricao: "FATURA IUGU (BOL,PIX,CCR)"
                    },
                    l.simulacao.formaDePagamento = {
                        strId: "iugu-all",
                        descricao: "FATURA IUGU (BOL,PIX,CCR)"
                    },
                    l.maxParcelas = l._rpo.maxParcelas,
                    l.vencimentos = l._rpo.vencimentos,
                    l.primeiroDiaVencimento = l.vencimentos[0],
                    l.primeiroMesVencimento = l._rpo.primeiroMesVencimento;
                    for (var a = 1; a <= l._rpo.maxParcelas; a++)
                        l.quantidadesParcelas.push(a);
                    l.simulacao.periodoMatricula = l._rpo.periodo,
                    l.contatoFormGroup = l._formBuilder.group({
                        email: [l.componentes.aluno.email, [E.C.required, E.C.email]],
                        telResidencial: l._formBuilder.control(l.componentes.aluno.telResidencial),
                        telComercial: l._formBuilder.control(l.componentes.aluno.telComercial),
                        telCelular: l._formBuilder.control(l.componentes.aluno.telCelular)
                    }),
                    l.thirdFormGroup = l._formBuilder.group({
                        endereco: l._formBuilder.group({
                            cep: l._formBuilder.control(l.componentes.aluno.endereco && l.componentes.aluno.endereco.cep ? l.componentes.aluno.endereco.cep : ""),
                            logradouro: l._formBuilder.control(l.componentes.aluno.endereco && l.componentes.aluno.endereco.logradouro ? l.componentes.aluno.endereco.logradouro : "", E.C.required),
                            complemento: l._formBuilder.control(l.componentes.aluno.endereco && l.componentes.aluno.endereco.complemento ? l.componentes.aluno.endereco.complemento : ""),
                            cidade: l._formBuilder.control(l.componentes.aluno.endereco && l.componentes.aluno.endereco.cidade ? l.componentes.aluno.endereco.cidade : "", E.C.required),
                            bairro: l._formBuilder.control(l.componentes.aluno.endereco && l.componentes.aluno.endereco.bairro ? l.componentes.aluno.endereco.bairro : "", E.C.required),
                            numero: l._formBuilder.control(l.componentes.aluno.endereco && l.componentes.aluno.endereco.numero ? l.componentes.aluno.endereco.numero : "", E.C.required),
                            uf: l._formBuilder.control(l.componentes.aluno.endereco && l.componentes.aluno.endereco.uf ? l.componentes.aluno.endereco.uf : ""),
                            ibge: l._formBuilder.control(l.componentes.aluno.endereco && l.componentes.aluno.endereco.ibge ? l.componentes.aluno.endereco.ibge : "")
                        }),
                        enderecoDeOrigem: l._formBuilder.group({
                            cep: l._formBuilder.control(l.componentes.aluno.enderecoDeOrigem && l.componentes.aluno.enderecoDeOrigem.cep ? l.componentes.aluno.enderecoDeOrigem.cep : ""),
                            logradouro: l._formBuilder.control(l.componentes.aluno.enderecoDeOrigem && l.componentes.aluno.enderecoDeOrigem.logradouro ? l.componentes.aluno.enderecoDeOrigem.logradouro : ""),
                            complemento: l._formBuilder.control(l.componentes.aluno.enderecoDeOrigem && l.componentes.aluno.enderecoDeOrigem.complemento ? l.componentes.aluno.enderecoDeOrigem.complemento : ""),
                            cidade: l._formBuilder.control(l.componentes.aluno.enderecoDeOrigem && l.componentes.aluno.enderecoDeOrigem.cidade ? l.componentes.aluno.enderecoDeOrigem.cidade : ""),
                            bairro: l._formBuilder.control(l.componentes.aluno.enderecoDeOrigem && l.componentes.aluno.enderecoDeOrigem.bairro ? l.componentes.aluno.enderecoDeOrigem.bairro : ""),
                            numero: l._formBuilder.control(l.componentes.aluno.enderecoDeOrigem && l.componentes.aluno.enderecoDeOrigem.numero ? l.componentes.aluno.enderecoDeOrigem.numero : ""),
                            uf: l._formBuilder.control(l.componentes.aluno.enderecoDeOrigem && l.componentes.aluno.enderecoDeOrigem.uf ? l.componentes.aluno.enderecoDeOrigem.uf : ""),
                            ibge: l._formBuilder.control(l.componentes.aluno.enderecoDeOrigem && l.componentes.aluno.enderecoDeOrigem.ibge ? l.componentes.aluno.enderecoDeOrigem.ibge : "")
                        })
                    }),
                    l.limiteMaximo = l.componentes.maxComponentes,
                    l.zone.runOutsideAngular(function() {
                        l.componentes.matriculaAtual.forEach(function(n) {
                            l.componentes.cursoComTurmas.periodos.forEach(function(a) {
                                a.componentes.forEach(function(a) {
                                    a._id === n._id && n.turmas.forEach(function(n) {
                                        a.turmas.forEach(function(e) {
                                            n._id === e._id && l.addTurma({
                                                checked: !0
                                            }, a, e)
                                        })
                                    })
                                })
                            })
                        })
                    })
                }, function(n) {
                    l.erroConsulta = n.error
                })
            }
            ,
            l.prototype.ngAfterViewChecked = function() {
                this.aluno && !this.fiesSetado && this.aluno && this.aluno.dadosFinanceiros && this.aluno.dadosFinanceiros.fies && this.aluno.dadosFinanceiros.fies.possui && !this.aluno.dadosFinanceiros.fies.encerrado && (this.setNovoFies(this.aluno.dadosFinanceiros.fies.novoFies),
                this.setfiesObrigatorio(this.aluno.dadosFinanceiros.fies.novoFies || parseInt(this.aluno.dadosFinanceiros.fies.periodoContratacao.descricao.replace(/-/g, "")) > 20142),
                this.setPercFies(this.aluno.dadosFinanceiros.fies.percentual, !1),
                this.fiesSetado = !0),
                this.aluno && !this.prouniSetado && this.aluno && this.aluno.dadosFinanceiros && this.aluno.dadosFinanceiros.prouni && this.aluno.dadosFinanceiros.prouni.possui && !this.aluno.dadosFinanceiros.prouni.encerrado && (this.setPercProUni(this.aluno.dadosFinanceiros.prouni.percentual, !1),
                this.prouniSetado = !0)
            }
            ,
            l.prototype.atualizaContatos = function(l) {
                var n = this;
                this.turmaService.atualizaContatos(this.componentes.aluno._id, l).subscribe(function(l) {
                    n.aluno = n.componentes.aluno
                })
            }
            ,
            l.prototype.atualizaContatosFormValue = function(l) {
                var n = this;
                1 == l.selectedIndex && this.turmaService.atualizaContatos(this.componentes.aluno._id, this.contatoFormGroup.value).subscribe(function(l) {
                    n.aluno = n.componentes.aluno
                }),
                2 == l.selectedIndex && this.turmaService.atualizaEnderecos(this.componentes.aluno._id, this.thirdFormGroup.value).subscribe(function(l) {
                    n.componentes.aluno.endereco = n.thirdFormGroup.get("endereco").value,
                    n.componentes.aluno.enderecoDeOrigem = n.thirdFormGroup.get("enderecoDeOrigem").value,
                    n.aluno = n.componentes.aluno
                })
            }
            ,
            l.prototype.efetuarMatricula = function() {
                var l = this;
                this.processandoMatricula = !0;
                var n = {
                    valorHoraComponente: this.componentes.aluno.curso.valorHoraComponente,
                    valorCreditoComponente: this.componentes.aluno.curso.valorCreditoComponente
                };
                this.turmaService.unEfetuarMatricula(this.componentes._id, this.componentes.periodo._id, this.componentesAdicionados.map(function(l) {
                    return {
                        _id: l._id,
                        turmas: l.turmas.map(function(l) {
                            return {
                                _id: l._id
                            }
                        })
                    }
                }), this.simulacao, n, this.uid).subscribe(function(n) {
                    var a = {
                        periodo: l.simulacao.periodoMatricula.descricao,
                        totalAPagar: l.simulacao.totalAPagar,
                        parcelas: l.simulacao.parcelas.map(function(l) {
                            return {
                                numero: l.numero,
                                dia: l.dia,
                                valor: l.valor
                            }
                        })
                    };
                    l.aluno.resumoFinanceira = a,
                    l.aluno = l.componentes.aluno,
                    l.aluno.periodos = l.componentes.matrizDoAluno.periodos.length,
                    l.aluno.periodo = l.componentes.periodo,
                    l.aluno.curso = l.aluno.curso,
                    l.turmaService.setAluno(l.aluno),
                    l.turmaService.setComponente(l.componentesAdicionados),
                    l.turmaService.setComponentesLista(l.componentes),
                    l.router.navigate(["/aluno-aa/matricula-realizada"])
                }, function(n) {
                    l.processandoMatricula = !1,
                    l.notificacao(n)
                })
            }
            ,
            l.prototype.addTurma = function(l, n, a) {
                var e = this;
                if (n.teoriaePratica = n.turmas.some(function(l) {
                    return !l.tipoDeAula || "t" === l.tipoDeAula.sigla || "T" === l.tipoDeAula.sigla
                }) && n.turmas.some(function(l) {
                    return l.tipoDeAula && "t" !== l.tipoDeAula.sigla && "T" !== l.tipoDeAula.sigla
                }),
                l.checked) {
                    a.checked = !0;
                    var o = this.componentesAdicionados.find(function(l) {
                        return l._id === n._id
                    });
                    if (null != o) {
                        if (n.completo || o.turmas.push(a),
                        n.teoriaePratica) {
                            o.turmas.forEach(function(l) {
                                return l.tipoDeAula || (l.tipoDeAula = {
                                    sigla: "T"
                                }),
                                l
                            });
                            var u = o.turmas.reduce(function(l, n) {
                                return l[n.tipoDeAula.sigla] = (l[n.tipoDeAula.sigla] || 0) + 1,
                                l
                            }, {});
                            n.completo = 90 === n.chTotal ? !!(Object.values(u).every(function(l) {
                                return 1 === l
                            }) && Object.keys(u).length > 1) : !!(Object.values(u).every(function(l) {
                                return 1 === l
                            }) && Object.keys(u).length > 1 || a.horarioPorDia.length > 1)
                        }
                        this.componentesAdicionados.find(function(l) {
                            return l._id === n._id
                        }).completo = n.completo
                    } else
                        n.teoriaePratica && a.horarioPorDia.length < 2 ? n.completo = !1 : 90 === n.chTotal && n.teoriaePratica || (n.completo = !0),
                        this.componentesAdicionados.push({
                            _id: n._id,
                            nome: n.nome,
                            chTotal: n.chTotal,
                            preco: n.preco,
                            creditos: n.creditos,
                            completo: n.completo,
                            turmas: [{
                                _id: a._id,
                                descricao: a.descricao,
                                horarioDetalhado: a.horarioDetalhado,
                                horarioPorDia: a.horarioPorDia,
                                tipoDeAula: a.tipoDeAula,
                                turno: a.turno
                            }],
                            adicionado: !0
                        }),
                        this.simulacao.componentes.find(function(l) {
                            return l._id.toString() === n._id.toString()
                        }) || (this.simulacao.componentes.push({
                            _id: n._id,
                            nome: n.nome,
                            codigoComponente: n.codigoComponente,
                            chTotal: n.chTotal,
                            creditos: n.creditos,
                            preco: n.preco
                        }),
                        this.simulacao.componentes.sort(function(l, n) {
                            return l.nome.localeCompare(n.nome)
                        }));
                    this.zone.runOutsideAngular(function() {
                        a.horarioPorDia.forEach(function(l) {
                            e.horariosAdicionados.some(function(n) {
                                return l.dia === n.dia && l.horarios.some(function(l) {
                                    return n.horarios.some(function(n) {
                                        return n.mapKey === l.mapKey
                                    })
                                })
                            }) || e.horariosAdicionados.push(l)
                        })
                    }),
                    a.horarioDetalhado.forEach(function(l) {
                        l.dias.forEach(function(a) {
                            e.resumoHorario[l.mapKey + a] = n.nome
                        })
                    }),
                    n.adicionado = !0
                } else {
                    a.checked = !1,
                    a.horarioDetalhado.forEach(function(l) {
                        l.dias.forEach(function(n) {
                            e.resumoHorario[l.mapKey + n] = " --- "
                        })
                    }),
                    this.componentesAdicionados.find(function(l) {
                        return l._id === n._id
                    }).turmas = this.componentesAdicionados.find(function(l) {
                        return l._id === n._id
                    }).turmas.filter(function(l) {
                        return l._id !== a._id
                    }),
                    this.componentesAdicionados = this.componentesAdicionados.filter(function(l) {
                        return l.turmas.length > 0
                    });
                    var t = this.componentesAdicionados.map(function(l) {
                        return l._id.toString()
                    });
                    if (this.simulacao.componentes = this.simulacao.componentes.filter(function(l) {
                        return -1 != t.indexOf(l._id.toString())
                    }),
                    this.horariosAdicionados = this.horariosAdicionados.filter(function(l) {
                        return a.horarioPorDia.every(function(n) {
                            return n.dia !== l.dia || n.dia === l.dia && !n.horarios.some(function(n) {
                                return l.horarios.some(function(l) {
                                    return l.mapKey === n.mapKey
                                })
                            })
                        })
                    }),
                    n.teoriaePratica && a.horarioPorDia.length < 2) {
                        var i = this.componentesAdicionados.find(function(l) {
                            return l._id === n._id
                        });
                        null != i ? (i.turmas.forEach(function(l) {
                            return l.tipoDeAula || (l.tipoDeAula = {
                                sigla: "T"
                            }),
                            l
                        }),
                        u = i.turmas.reduce(function(l, n) {
                            return l[n.tipoDeAula.sigla] = (l[n.tipoDeAula.sigla] || 0) + 1,
                            l
                        }, {}),
                        90 === n.chTotal ? Object.values(u).some(function(l) {
                            return Number(l) > 1
                        }) && Object.keys(u).length > 1 ? (i.completo = !0,
                        n.completo = !0) : (i.completo = !1,
                        n.completo = !1) : Object.values(u).every(function(l) {
                            return 1 === l
                        }) && Object.keys(u).length > 1 || a.horarioPorDia.length > 1 ? (i.completo = !0,
                        n.completo = !0) : (i.completo = !1,
                        n.completo = !1)) : n.adicionado = !1
                    } else
                        n.completo = !1,
                        n.adicionado = !1
                }
                this.simulacao.subtotal = this.simulacao.componentes.reduce(function(l, n) {
                    return l + parseFloat(n.preco)
                }, 0).toFixed(2),
                this.calculaValores(),
                this.zone.runOutsideAngular(function() {
                    e.componentes.cursoComTurmas.periodos.forEach(function(l) {
                        l.componentes.forEach(function(l) {
                            l.turmas.forEach(function(l) {
                                l.horarioPorDia.forEach(function(n) {
                                    e.horariosAdicionados.length < 1 && (n.choqueHorario = !1),
                                    n.choqueHorario = e.horariosAdicionados.some(function(e) {
                                        return n.dia === e.dia && n.horarios.some(function(l) {
                                            return e.horarios.some(function(n) {
                                                return n.mapKey === l.mapKey
                                            })
                                        }) && l._id !== a._id && !l.checked
                                    })
                                }),
                                l.choqueHorario = l.horarioPorDia.some(function(l) {
                                    return l.choqueHorario
                                }) && !l.checked
                            }),
                            l.choqueHorario = l.turmas.every(function(l) {
                                return l.choqueHorario
                            }),
                            l.turmasMarcadas = l.turmas.some(function(l) {
                                return l.checked
                            })
                        })
                    })
                }),
                a.checked && n.preRequisitos.length > 0 && n.preRequisitos.forEach(function(l) {
                    e.componentesAdicionados.find(function(n) {
                        return n._id === l._id
                    }) || e.componentes.cursoComTurmas.periodos.forEach(function(a) {
                        a.componentes.forEach(function(a) {
                            if (a._id === l._id) {
                                var o = a.turmas.find(function(l) {
                                    return !(l.choqueHorario || l.tipoDeAula && "t" !== l.tipoDeAula.sigla && "T" !== l.tipoDeAula.sigla)
                                });
                                o ? e.addTurma({
                                    checked: !0
                                }, a, o) : (n.completo = !1,
                                n.turmasMarcadas = !1,
                                n.choqueHorario = !0,
                                e.componentesAdicionados.find(function(l) {
                                    return l._id === n._id
                                }).completo = !1,
                                e.componentesAdicionados.find(function(l) {
                                    return l._id === n._id
                                }).turmasMarcadas = !1,
                                e.componentesAdicionados.find(function(l) {
                                    return l._id === n._id
                                }).choqueHorario = !0,
                                e.componentesCompletos = e.componentesAdicionados.every(function(l) {
                                    return l.completo
                                }))
                            }
                        })
                    })
                }),
                a.checked || !(n.preRequisitos.length > 0) || a.tipoDeAula && "t" !== a.tipoDeAula.sigla && "T" !== a.tipoDeAula.sigla || this.componentes.cursoComTurmas.periodos.forEach(function(l) {
                    l.componentes.forEach(function(l) {
                        l.preRequisitos && l.preRequisitos.forEach(function(a) {
                            a._id === n._id && e.removeComponente(l)
                        })
                    })
                }),
                this.limiteAtingido = this.componentesAdicionados.length >= this.limiteMaximo,
                this.componentesCompletos = this.componentesAdicionados.every(function(l) {
                    return l.completo
                }),
                this.componentesCompletos ? this.secondFormGroup.get("secondCtrl").patchValue({
                    secondCtrl: !0
                }) : this.secondFormGroup.get("secondCtrl").patchValue({
                    secondCtrl: !1
                }),
                this.mostraTurnos.matutino = this.componentesAdicionados.some(function(l) {
                    return l.turmas.some(function(l) {
                        return "matutino" === l.turno.descricao
                    })
                }),
                this.mostraTurnos.vespertino = this.componentesAdicionados.some(function(l) {
                    return l.turmas.some(function(l) {
                        return "vespertino" === l.turno.descricao
                    })
                }),
                this.mostraTurnos.noturno = this.componentesAdicionados.some(function(l) {
                    return l.turmas.some(function(l) {
                        return "noturno" === l.turno.descricao
                    })
                }),
                this.componentesAdicionados.length < 1 && (this.mostraTurnos.matutino = !1,
                this.mostraTurnos.vespertino = !1,
                this.mostraTurnos.noturno = !1),
                this.mostraTurnos.matutino = !0,
                this.mostraTurnos.vespertino = !0,
                this.mostraTurnos.noturno = !0,
                this.simulacao.subtotal = this.simulacao.componentes.reduce(function(l, n) {
                    return l + parseFloat(n.preco)
                }, 0).toFixed(2)
            }
            ,
            l.prototype.removeComponente = function(l) {
                var n, a = this;
                this.componentes.cursoComTurmas.periodos.forEach(function(a) {
                    a.componentes.forEach(function(a) {
                        a._id === l._id && (n = a)
                    })
                }),
                n.teoriaePratica = n.turmas.some(function(l) {
                    return !l.tipoDeAula || "t" === l.tipoDeAula.sigla || "T" === l.tipoDeAula.sigla
                }) && n.turmas.some(function(l) {
                    return l.tipoDeAula && "t" !== l.tipoDeAula.sigla && "T" !== l.tipoDeAula.sigla
                }),
                n.turmas.forEach(function(l) {
                    l.checked = !1,
                    l.horarioDetalhado.forEach(function(l) {
                        l.dias.forEach(function(n) {
                            a.resumoHorario[l.mapKey + n] = " --- "
                        })
                    });
                    var n = !1;
                    l.horarioPorDia.forEach(function(e) {
                        a.componentesAdicionados.forEach(function(a) {
                            a.turmas.forEach(function(a) {
                                a.horarioPorDia.forEach(function(o) {
                                    e.dia === o.dia && e.horarios.some(function(l) {
                                        return o.horarios.some(function(n) {
                                            return n.mapKey === l.mapKey
                                        })
                                    }) && l._id !== a._id && (n = !0)
                                })
                            })
                        })
                    }),
                    n || (a.horariosAdicionados = a.horariosAdicionados.filter(function(n) {
                        return l.horarioPorDia.every(function(l) {
                            return l.dia !== n.dia || l.dia === n.dia && !l.horarios.some(function(l) {
                                return n.horarios.some(function(n) {
                                    return n.mapKey === l.mapKey
                                })
                            })
                        })
                    })),
                    a.componentes.cursoComTurmas.periodos.forEach(function(n) {
                        n.componentes.forEach(function(n) {
                            n.turmas.forEach(function(n) {
                                n.horarioPorDia.forEach(function(e) {
                                    a.horariosAdicionados.length < 1 && (e.choqueHorario = !1),
                                    e.choqueHorario = a.horariosAdicionados.some(function(a) {
                                        return e.dia === a.dia && e.horarios.some(function(l) {
                                            return a.horarios.some(function(n) {
                                                return n.mapKey === l.mapKey
                                            })
                                        }) && n._id !== l._id && !n.checked
                                    })
                                }),
                                n.choqueHorario = n.horarioPorDia.some(function(l) {
                                    return l.choqueHorario
                                }) && !n.checked
                            }),
                            n.choqueHorario = n.turmas.every(function(l) {
                                return l.choqueHorario
                            }),
                            n.turmasMarcadas = n.turmas.some(function(l) {
                                return l.checked
                            })
                        })
                    })
                }),
                this.componentesAdicionados = this.componentesAdicionados.filter(function(n) {
                    return n._id !== l._id
                }),
                n.completo = !1,
                n.adicionado = !1,
                this.limiteAtingido = this.componentesAdicionados.length >= this.limiteMaximo,
                this.componentesCompletos = this.componentesAdicionados.every(function(l) {
                    return l.completo
                }),
                this.componentesCompletos ? this.secondFormGroup.get("secondCtrl").patchValue({
                    secondCtrl: !0
                }) : this.secondFormGroup.get("secondCtrl").patchValue({
                    secondCtrl: !1
                }),
                this.componentes.cursoComTurmas.periodos.forEach(function(l) {
                    l.componentes.forEach(function(l) {
                        l.preRequisitos && l.preRequisitos.forEach(function(e) {
                            e._id === n._id && a.removeComponente(l)
                        })
                    })
                }),
                this.mostraTurnos.matutino = this.componentesAdicionados.some(function(l) {
                    return l.turmas.some(function(l) {
                        return "matutino" === l.turno.descricao
                    })
                }),
                this.mostraTurnos.vespertino = this.componentesAdicionados.some(function(l) {
                    return l.turmas.some(function(l) {
                        return "vespertino" === l.turno.descricao
                    })
                }),
                this.mostraTurnos.noturno = this.componentesAdicionados.some(function(l) {
                    return l.turmas.some(function(l) {
                        return "noturno" === l.turno.descricao
                    })
                }),
                this.componentesAdicionados.length < 1 && (this.mostraTurnos.matutino = !1,
                this.mostraTurnos.vespertino = !1,
                this.mostraTurnos.noturno = !1),
                this.simulacao.componentes = this.simulacao.componentes.filter(function(n) {
                    return n._id != l._id
                }),
                this.simulacao.subtotal = this.simulacao.componentes.reduce(function(l, n) {
                    return l + parseFloat(n.preco)
                }, 0).toFixed(2),
                this.calculaValores()
            }
            ,
            l.prototype.onNotifySecond = function(l) {
                "VALID" == l && this.secondFormGroup.get("secondCtrl").patchValue({
                    secondCtrl: !0
                })
            }
            ,
            l.prototype.notificacao = function(l) {
                this.dialog.open(ml, {
                    width: "600px",
                    position: {
                        top: "50px"
                    },
                    data: {
                        error: l.error
                    }
                }).afterClosed().subscribe(function(l) {})
            }
            ,
            l.prototype.verContrato = function() {
                var l = this
                  , n = {
                    periodo: this.simulacao.periodoMatricula.descricao,
                    periodoId: this.simulacao.periodoMatricula._id,
                    totalAPagar: this.simulacao.totalAPagar,
                    parcelas: this.simulacao.parcelas.map(function(l) {
                        return {
                            numero: l.numero,
                            dia: l.dia,
                            valor: l.valor
                        }
                    })
                };
                this.dialog.open(Cl, {
                    width: "90%",
                    height: "80%",
                    position: {
                        top: "50px"
                    },
                    data: {
                        aluno: {
                            nome: this.componentes.aluno.nome.toUpperCase(),
                            curso: this.componentes.aluno.curso.nome.toUpperCase(),
                            cpf: this.componentes.aluno.cpf,
                            rg: this.componentes.aluno.rg,
                            endereco: this.componentes.aluno.endereco,
                            telCelular: this.componentes.aluno.telCelular,
                            email: this.componentes.aluno.email,
                            nome_pai: this.componentes.aluno.nome_pai,
                            nome_mae: this.componentes.aluno.nome_mae,
                            nascimento: this.componentes.aluno.nascimento,
                            estado_civil: this.componentes.aluno.estado_civil,
                            resumoFinanceira: n
                        }
                    }
                }).afterClosed().subscribe(function(n) {
                    l.contratoLido = n,
                    l.lerContrato = n
                })
            }
            ,
            l.prototype.calculaValores = function() {
                if (this.valorFiesObrigatorio = 0,
                this.simulacao.subtotal > 0) {
                    var l = parseFloat(this.simulacao.subtotal);
                    this.subtotalViewFies = parseFloat(this.simulacao.subtotal),
                    this.simulacao.percentualProuni > 0 && (l -= l * (this.simulacao.percentualProuni / 100)),
                    this.fiesObrigatorio && (this.subtotalViewFies -= this.subtotalViewFies * (this.simulacao.fiesObrigatorio / 100),
                    l -= l * (this.simulacao.fiesObrigatorio / 100)),
                    this.simulacao.descontoConvenio > 0 && (this.simulacao.vlDescontoCond = l * this.simulacao.descontoConvenio / 100,
                    this.subtotalViewFies -= this.subtotalViewFies * (this.simulacao.descontoConvenio / 100),
                    l -= l * (this.simulacao.descontoConvenio / 100)),
                    this.simulacao.desconto > 0 && (l -= l * (this.simulacao.desconto / 100)),
                    this.valorDosComponentes = l,
                    this.simulacao.percentualFies > 0 ? (this.simulacao.valorRepasseFies = l * (this.simulacao.percentualFies / 100),
                    this.simulacao.valorCoPartFies = l - this.simulacao.valorRepasseFies) : (this.simulacao.valorCoPartFies = 0,
                    this.simulacao.valorRepasseFies = 0);
                    var n = l - this.simulacao.valorCoPartFies - this.simulacao.valorRepasseFies;
                    n > 0 && (n -= this.simulacao.credito ? this.simulacao.credito : 0),
                    n > 0 && this.creditoCarteiraDisponivel > 0 ? (this.simulacao.creditoCarteira = n - this.creditoCarteiraDisponivel >= 0 ? this.creditoCarteiraDisponivel : this.creditoCarteiraDisponivel + (n - this.creditoCarteiraDisponivel),
                    n -= this.simulacao.creditoCarteira ? this.simulacao.creditoCarteira : 0) : this.simulacao.creditoCarteira = null,
                    this.simulacao.totalAPagar = n,
                    this.simulacao.valorTotal = n
                } else
                    this.simulacao.valorTotal = 0,
                    this.simulacao.totalAPagar = 0,
                    this.simulacao.valorTetoFies = 0,
                    this.simulacao.parcelas = [],
                    this.simulacao.quantidadeParcelas = 0,
                    this.simulacao.desconto = null,
                    this.simulacao.percentualPravaler = null,
                    this.simulacao.valorCoPartFies = null,
                    this.simulacao.valorRepasseFies = null,
                    this.simulacao.descontoConvenio = null,
                    this.simulacao.credito = null,
                    this.simulacao.creditoCarteira = null,
                    this.simulacao.creditoParcelas = null,
                    this.simulacao.saldoParcelas = null,
                    this.temDesconto = !1;
                if (this.simulacao.totalAPagar > 0) {
                    dl().date() <= 8 ? dl().set("date", 8) : dl().date() <= 15 ? dl().set("date", 15) : dl().set("date", 25);
                    var a, e = parseInt(this.primeiroMesVencimento.toString()), o = parseInt(dl().format("YYYY"));
                    (12 === e || e < dl().month() + 1) && (o += 1),
                    a = 12 === e ? dl([o, 0, this.primeiroDiaVencimento]).toDate() : dl([o, e - 1, this.primeiroDiaVencimento]).toDate(),
                    this.simulacao.parcelas = [];
                    for (var u = (this.simulacao.totalAPagar / this.simulacao.quantidadeParcelas).toFixed(2), t = 0; t < this.simulacao.quantidadeParcelas; t++) {
                        var i = 0 === t ? a : dl(this.simulacao.parcelas[t - 1].dia).add(1, "M").toDate();
                        this.simulacao.parcelas.push({
                            numero: t + 1,
                            dia: i,
                            valor: u,
                            formaPgto: this.formaDePagamento
                        })
                    }
                } else
                    this.simulacao.parcelas = [];
                this.diferencaParcelas = 0,
                this.stringDiferenca = "",
                this.bloqueiaSalvar = this.simulacao.valorTotal <= 0 || 0 != this.diferencaParcelas || "" === this.simulacao.formaDePagamento.strId,
                this.bloqueiaSalvar = this.bloqueiaSalvar && !(this.temDesconto && 0 === this.simulacao.valorTotal),
                this.bloqueiaSalvar = !(0 === this.simulacao.totalAPagar && 100 === this.simulacao.percentualProuni && this.simulacao.componentes.length > 0) && this.bloqueiaSalvar
            }
            ,
            l.prototype.setNovoFies = function(l) {
                l ? (this.novoFies = !0,
                this.simulacao.novoFies = !0,
                this.pravaler = !1,
                this.simulacao.percentualPravaler = null) : (this.novoFies = !1,
                this.simulacao.novoFies = !1,
                this.simulacao.valorCoPartFies = null),
                this.temDesconto = !!this.simulacao.novoFies,
                this.calculaValores()
            }
            ,
            l.prototype.setfiesObrigatorio = function(l) {
                l ? (this.fiesObrigatorio = !0,
                this.simulacao.fiesObrigatorio = 6,
                this.pravaler = !1,
                this.simulacao.percentualPravaler = null) : (this.fiesObrigatorio = !1,
                this.simulacao.fiesObrigatorio = 0),
                this.temDesconto = this.simulacao.fiesObrigatorio > 0,
                this.calculaValores()
            }
            ,
            l.prototype.setPercProUni = function(l, n) {
                this.simulacao.percentualProuni = isNaN(l) ? 0 : l,
                this.temDesconto = this.simulacao.percentualProuni > 0,
                n && this.calculaValores()
            }
            ,
            l.prototype.setPercFies = function(l, n) {
                this.simulacao.percentualFies = isNaN(l) ? 0 : l,
                this.temDesconto = this.simulacao.percentualFies > 0,
                this.fiesProuni = this.simulacao.percentualFies > 0,
                n && this.calculaValores()
            }
            ,
            l.prototype.setDescConvenio = function(l, n) {
                this.simulacao.descontoConvenio = l,
                this.temDesconto = this.simulacao.descontoConvenio > 0,
                this.fiesProuni = this.simulacao.percentualFies > 0,
                n && this.calculaValores()
            }
            ,
            l.prototype.setCreditoCarteira = function(l, n) {
                this.creditoCarteiraDisponivel = isNaN(l) ? 0 : l,
                this.simulacao.creditoCarteira = isNaN(l) ? 0 : l,
                this.temDesconto = this.simulacao.creditoCarteira > 0,
                n && this.calculaValores()
            }
            ,
            l.prototype.setDiaVencimento = function(l) {
                this.primeiroDiaVencimento = l.value,
                this.calculaValores()
            }
            ,
            l.prototype.setQtdeParcelas = function(l) {
                this.simulacao.quantidadeParcelas = l.value ? l.value : this.maxParcelas,
                this.calculaValores()
            }
            ,
            l.prototype.showProgressSpinnerUntilExecuted = function() {
                this._spinnerDialog = this.dialog.open(xl.a, {})
            }
            ,
            l.prototype.closeProgressSpinnerUntilExecuted = function() {
                this._spinnerDialog.close()
            }
            ,
            l.prototype.findCEP = function(l) {
                var n = this;
                this.showProgressSpinnerUntilExecuted(),
                l ? this.viacep.buscarPorCep(this.thirdFormGroup.get("endereco.cep").value.replace(".", "").replace("-", "")).then(function(l) {
                    n.thirdFormGroup.get("endereco.cep").setValue(l.cep),
                    n.thirdFormGroup.get("endereco.logradouro").setValue(l.logradouro),
                    n.thirdFormGroup.get("endereco.bairro").setValue(l.bairro),
                    n.thirdFormGroup.get("endereco.cidade").setValue(l.localidade),
                    n.thirdFormGroup.get("endereco.uf").setValue(l.uf),
                    n.thirdFormGroup.get("endereco.ibge").setValue(l.ibge),
                    n.closeProgressSpinnerUntilExecuted(),
                    n.snackService.showDialog("Cep encontrado com sucesso!", "check_circle_outline")
                }).catch(function(l) {
                    switch (l.getCode()) {
                    case gl.a.CEP_MUITO_CURTO:
                        n.snackService.showDialog("Cep muito curto.", "info");
                        break;
                    case gl.a.CEP_MUITO_LONGO:
                        n.snackService.showDialog("Cep muito longo.", "info");
                        break;
                    case gl.a.CEP_NAO_ENCONTRADO:
                        n.snackService.showDialog("Cep n\xe3o encontrado.", "info")
                    }
                    n.thirdFormGroup.get("cep").reset(),
                    n.closeProgressSpinnerUntilExecuted()
                }) : this.viacep.buscarPorCep(this.thirdFormGroup.get("enderecoDeOrigem.cep").value.replace(".", "").replace("-", "")).then(function(l) {
                    n.thirdFormGroup.get("enderecoDeOrigem.cep").setValue(l.cep),
                    n.thirdFormGroup.get("enderecoDeOrigem.logradouro").setValue(l.logradouro),
                    n.thirdFormGroup.get("enderecoDeOrigem.bairro").setValue(l.bairro),
                    n.thirdFormGroup.get("enderecoDeOrigem.cidade").setValue(l.localidade),
                    n.thirdFormGroup.get("enderecoDeOrigem.uf").setValue(l.uf),
                    n.thirdFormGroup.get("enderecoDeOrigem.ibge").setValue(l.ibge),
                    n.closeProgressSpinnerUntilExecuted(),
                    n.snackService.showDialog("Cep encontrado com sucesso!", "check_circle_outline")
                }).catch(function(l) {
                    switch (l.getCode()) {
                    case gl.a.CEP_MUITO_CURTO:
                        n.snackService.showDialog("Cep muito curto.", "info");
                        break;
                    case gl.a.CEP_MUITO_LONGO:
                        n.snackService.showDialog("Cep muito longo.", "info");
                        break;
                    case gl.a.CEP_NAO_ENCONTRADO:
                        n.snackService.showDialog("Cep n\xe3o encontrado.", "info")
                    }
                    n.thirdFormGroup.get("cep").reset(),
                    n.closeProgressSpinnerUntilExecuted()
                })
            }
            ,
            l
        }()
          , Dn = e.qb({
            encapsulation: 0,
            styles: [[".cor_titulo_mat-card[_ngcontent-%COMP%]{margin:5px 0;color:#3f51b5;font-family:Arial,Helvetica,sans-serif}.cor_titulo_mat-card-content[_ngcontent-%COMP%]{margin:5px 0;color:#202122;font-family:Arial,Helvetica,sans-serif}.cor_subtitulo_mat-card-content[_ngcontent-%COMP%]{margin:5px 0;color:#9c9ea4;font-size:.9em;font-family:Arial,Helvetica,sans-serif}.mat-card-content[_ngcontent-%COMP%]{font-size:13px}.choqueHorario[_ngcontent-%COMP%]{border:1px solid #ef5f55!important;background:#f4433612!important}.checked[_ngcontent-%COMP%]{border:1px solid #3f51b5!important;background:#3f51b51a!important}.resumoTitulo[_ngcontent-%COMP%]{font-size:11px;color:#fff;background:#3a4ba7;padding:5px;text-align:center;margin-bottom:10px;border-radius:5px}.resumoHorario[_ngcontent-%COMP%]{border:1px solid #3a4ba740;padding:2px;line-height:14px;border-radius:5px;text-align:center;background:rgba(58,75,167,.03);height:4.5em}.resumoComponente[_ngcontent-%COMP%]{border:1px solid #cec8c8;padding:2px;line-height:14px;border-radius:5px;text-align:center;background:rgba(238,238,238,.1);height:4.5em} .mat-checkbox-layout{white-space:normal!important} .mat-checkbox-inner-container{margin-top:5px!important}.linhaTotal[_ngcontent-%COMP%]{color:#4169e1;font-weight:700}"]],
            data: {}
        });
        function Mn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 8, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 1, "mat-spinner", [["class", "mat-spinner mat-progress-spinner"], ["mode", "indeterminate"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"]], null, null, m.b, m.a)), e.rb(4, 49152, null, 0, x.d, [e.k, g.a, [2, h.e], [2, C.a], x.a], null, null), (l()(),
            e.sb(5, 0, null, null, 3, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(6, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 1, "span", [["class", "mat-subheading-2"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Consultando disponibilidade de matr\xedcula..."]))], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 2, 0, "center center"),
                l(n, 6, 0, "row")
            }, function(l, n) {
                l(n, 3, 0, e.Cb(n, 4)._noopAnimations, e.Cb(n, 4).diameter, e.Cb(n, 4).diameter)
            })
        }
        function Rn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 6, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 3, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(5, 0, null, null, 1, "span", [["class", "mat-subheading-2"]], null, null, null, null, null)), (l()(),
            e.Kb(6, null, ["", ""]))], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 2, 0, "center center"),
                l(n, 4, 0, "row")
            }, function(l, n) {
                l(n, 6, 0, n.component.erroConsulta.message)
            })
        }
        function Gn(l) {
            return e.Mb(0, [(l()(),
            e.Kb(-1, null, ["ATUALIZA\xc7\xc3O DE DADOS"]))], null, null)
        }
        function qn(l) {
            return e.Mb(0, [(l()(),
            e.Kb(-1, null, ["Endere\xe7o"]))], null, null)
        }
        function Nn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 4, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), e.rb(1, 16384, [[36, 4]], 0, L.b, [], null, null), (l()(),
            e.Kb(-1, null, [" O CEP \xe9 "])), (l()(),
            e.sb(3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["obrigat\xf3rio"]))], null, function(l, n) {
                l(n, 0, 0, e.Cb(n, 1).id)
            })
        }
        function Bn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 4, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), e.rb(1, 16384, [[43, 4]], 0, L.b, [], null, null), (l()(),
            e.Kb(-1, null, [" O logradouro \xe9 "])), (l()(),
            e.sb(3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["obrigat\xf3rio"]))], null, function(l, n) {
                l(n, 0, 0, e.Cb(n, 1).id)
            })
        }
        function zn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 4, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), e.rb(1, 16384, [[50, 4]], 0, L.b, [], null, null), (l()(),
            e.Kb(-1, null, [" O n\xfamero \xe9 "])), (l()(),
            e.sb(3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["obrigat\xf3rio"]))], null, function(l, n) {
                l(n, 0, 0, e.Cb(n, 1).id)
            })
        }
        function Kn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 4, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), e.rb(1, 16384, [[64, 4]], 0, L.b, [], null, null), (l()(),
            e.Kb(-1, null, [" O bairro \xe9 "])), (l()(),
            e.sb(3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["obrigat\xf3rio"]))], null, function(l, n) {
                l(n, 0, 0, e.Cb(n, 1).id)
            })
        }
        function Hn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 4, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), e.rb(1, 16384, [[71, 4]], 0, L.b, [], null, null), (l()(),
            e.Kb(-1, null, [" A cidade \xe9 "])), (l()(),
            e.sb(3, 0, null, null, 1, "strong", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["obrigat\xf3ria"]))], null, function(l, n) {
                l(n, 0, 0, e.Cb(n, 1).id)
            })
        }
        function Un(l) {
            return e.Mb(0, [(l()(),
            e.Kb(-1, null, ["ESCOLHER COMPONENTES E TURMAS"]))], null, null)
        }
        function jn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(1, null, ["", "\xba SEMESTRE"]))], null, function(l, n) {
                l(n, 1, 0, n.parent.context.$implicit.numero)
            })
        }
        function $n(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["OPTATIVOS"]))], null, null)
        }
        function Vn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 16777216, null, null, 4, "div", [["matTooltip", "Hor\xe1rio j\xe1 OCUPADO"]], null, [[null, "longpress"], [null, "keydown"], [null, "touchend"]], function(l, n, a) {
                var o = !0;
                return "longpress" === n && (o = !1 !== e.Cb(l, 1).show() && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 1)._handleKeydown(a) && o),
                "touchend" === n && (o = !1 !== e.Cb(l, 1)._handleTouchend() && o),
                o
            }, null, null)), e.rb(1, 147456, null, 0, v.d, [k.d, e.k, A.f, e.R, e.B, g.a, w.c, w.h, v.b, [2, F.b], [2, v.a], [2, O.g]], {
                message: [0, "message"]
            }, null), (l()(),
            e.sb(2, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["color", "warn"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(3, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["schedule"])), (l()(),
            e.kb(0, null, null, 0))], function(l, n) {
                l(n, 1, 0, "Hor\xe1rio j\xe1 OCUPADO"),
                l(n, 3, 0, "warn")
            }, function(l, n) {
                l(n, 2, 0, e.Cb(n, 3).inline, "primary" !== e.Cb(n, 3).color && "accent" !== e.Cb(n, 3).color && "warn" !== e.Cb(n, 3).color)
            })
        }
        function Qn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 16777216, null, null, 4, "div", [["matTooltip", "Componente completo"]], null, [[null, "longpress"], [null, "keydown"], [null, "touchend"]], function(l, n, a) {
                var o = !0;
                return "longpress" === n && (o = !1 !== e.Cb(l, 1).show() && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 1)._handleKeydown(a) && o),
                "touchend" === n && (o = !1 !== e.Cb(l, 1)._handleTouchend() && o),
                o
            }, null, null)), e.rb(1, 147456, null, 0, v.d, [k.d, e.k, A.f, e.R, e.B, g.a, w.c, w.h, v.b, [2, F.b], [2, v.a], [2, O.g]], {
                message: [0, "message"]
            }, null), (l()(),
            e.sb(2, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["color", "primary"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(3, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["done_all"])), (l()(),
            e.kb(0, null, null, 0))], function(l, n) {
                l(n, 1, 0, "Componente completo"),
                l(n, 3, 0, "primary")
            }, function(l, n) {
                l(n, 2, 0, e.Cb(n, 3).inline, "primary" !== e.Cb(n, 3).color && "accent" !== e.Cb(n, 3).color && "warn" !== e.Cb(n, 3).color)
            })
        }
        function Yn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 16777216, null, null, 4, "div", [["matTooltip", "Falta escolher turma pr\xe1tica ou te\xf3rica"]], null, [[null, "longpress"], [null, "keydown"], [null, "touchend"]], function(l, n, a) {
                var o = !0;
                return "longpress" === n && (o = !1 !== e.Cb(l, 1).show() && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 1)._handleKeydown(a) && o),
                "touchend" === n && (o = !1 !== e.Cb(l, 1)._handleTouchend() && o),
                o
            }, null, null)), e.rb(1, 147456, null, 0, v.d, [k.d, e.k, A.f, e.R, e.B, g.a, w.c, w.h, v.b, [2, F.b], [2, v.a], [2, O.g]], {
                message: [0, "message"]
            }, null), (l()(),
            e.sb(2, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["color", "accent"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(3, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["report_problem"])), (l()(),
            e.kb(0, null, null, 0))], function(l, n) {
                l(n, 1, 0, "Falta escolher turma pr\xe1tica ou te\xf3rica"),
                l(n, 3, 0, "accent")
            }, function(l, n) {
                l(n, 2, 0, e.Cb(n, 3).inline, "primary" !== e.Cb(n, 3).color && "accent" !== e.Cb(n, 3).color && "warn" !== e.Cb(n, 3).color)
            })
        }
        function Jn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 2, "h4", [["class", "cor_subtitulo_mat-card-content"]], null, null, null, null, null)), (l()(),
            e.Kb(1, null, [" ", " "])), e.Gb(2, 1)], null, function(l, n) {
                var a = e.Lb(n, 1, 0, l(n, 2, 0, e.Cb(n.parent.parent.parent.parent.parent.parent.parent, 0), n.parent.parent.context.$implicit.nome));
                l(n, 1, 0, a)
            })
        }
        function Zn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 5, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Jn)), e.rb(5, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "10px"),
                l(n, 3, 0, "start center"),
                l(n, 5, 0, !(null != n.parent.context.$implicit && null != n.parent.context.$implicit.vigencia && n.parent.context.$implicit.vigencia.fim))
            }, null)
        }
        function Xn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 3, "div", [["fxLayout", "column"], ["style", "padding-left: 40px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Zn)), e.rb(3, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 3, 0, !(null != n.context.$implicit && null != n.context.$implicit.vigencia && n.context.$implicit.vigencia.fim))
            }, null)
        }
        function Wn(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 2, "div", [["style", "padding-left: 40px"]], null, null, null, null, null)), (l()(),
            e.sb(1, 0, null, null, 1, "small", [["style", "color: red;text-transform: uppercase"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Sem vagas dispon\xedveis"]))], null, null)
        }
        function la(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 5, "div", [["style", "padding-left: 40px"]], null, null, null, null, null)), (l()(),
            e.sb(1, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            e.Kb(2, null, ["", ""])), (l()(),
            e.Kb(-1, null, ["\xa0"])), (l()(),
            e.sb(4, 0, null, null, 1, "small", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["vagas restantes"]))], null, function(l, n) {
                l(n, 2, 0, n.parent.context.$implicit.maximoVagas - n.parent.context.$implicit.quantidadeDeAlunos)
            })
        }
        function na(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 5, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 2, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.Kb(5, null, [" ", " - ", " "]))], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 2, 0, "center center"),
                l(n, 4, 0, "row")
            }, function(l, n) {
                l(n, 5, 0, n.context.$implicit.inicio, n.context.$implicit.fim)
            })
        }
        function aa(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 19, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "20px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(4, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(5, 16777216, null, null, 14, "div", [["fxLayout", "row"], ["fxLayout.lt-md", "column"], ["fxLayoutGap.lt-md", "0px"], ["style", "border: 1px solid #cec8c8;\n                            padding: 2px; line-height: 18px; text-align: center; border-radius: 5px; background: #eeeeeebf; min-width: 65px;"]], [[2, "choqueHorario", null], [2, "checked", null]], [[null, "longpress"], [null, "keydown"], [null, "touchend"]], function(l, n, a) {
                var o = !0;
                return "longpress" === n && (o = !1 !== e.Cb(l, 8).show() && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 8)._handleKeydown(a) && o),
                "touchend" === n && (o = !1 !== e.Cb(l, 8)._handleTouchend() && o),
                o
            }, null, null)), e.rb(6, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-md": [1, "fxLayout.lt-md"]
            }, null), e.rb(7, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                "fxLayoutGap.lt-md": [0, "fxLayoutGap.lt-md"]
            }, null), e.rb(8, 147456, null, 0, v.d, [k.d, e.k, A.f, e.R, e.B, g.a, w.c, w.h, v.b, [2, F.b], [2, v.a], [2, O.g]], {
                message: [0, "message"]
            }, null), (l()(),
            e.sb(9, 0, null, null, 10, "div", [["fxFlex", ""], ["fxLayout", "column"], ["fxLayoutAlign", "center center"], ["style", "font-size: .8em"]], null, null, null, null, null)), e.rb(10, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(11, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(12, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(13, 0, null, null, 4, "div", [["fxLayout", "row"], ["fxLayoutAlign", "center center"], ["style", "font-weight: bold;"]], null, null, null, null, null)), e.rb(14, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(15, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.Kb(16, null, [" ", " "])), e.Gb(17, 1), (l()(),
            e.kb(16777216, null, null, 1, null, na)), e.rb(19, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "20px"),
                l(n, 3, 0, "start center"),
                l(n, 4, 0, ""),
                l(n, 6, 0, "row", "column"),
                l(n, 7, 0, "0px"),
                l(n, 8, 0, n.context.$implicit.choqueHorario ? "Choque de hor\xe1rio" : ""),
                l(n, 10, 0, "column"),
                l(n, 11, 0, "center center"),
                l(n, 12, 0, ""),
                l(n, 14, 0, "row"),
                l(n, 15, 0, "center center"),
                l(n, 19, 0, n.context.$implicit.horarios)
            }, function(l, n) {
                l(n, 5, 0, n.context.$implicit.choqueHorario, n.parent.context.$implicit.checked);
                var a = e.Lb(n, 16, 0, l(n, 17, 0, e.Cb(n.parent.parent.parent.parent.parent, 0), n.context.$implicit.dia.substring(1)));
                l(n, 16, 0, a)
            })
        }
        function ea(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 6, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"], ["style", "margin: 0 0 15px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(3, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 2, "mat-divider", [["class", "mat-divider"], ["fxFlex", "90"], ["role", "separator"], ["style", "left: unset"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, I.b, I.a)), e.rb(5, 49152, null, 0, T.a, [], null, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "center center"),
                l(n, 3, 0, ""),
                l(n, 6, 0, "90")
            }, function(l, n) {
                l(n, 4, 0, e.Cb(n, 5).vertical ? "vertical" : "horizontal", e.Cb(n, 5).vertical, !e.Cb(n, 5).vertical, e.Cb(n, 5).inset)
            })
        }
        function oa(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 28, "div", [["fxLayout", "column"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(2, 0, null, null, 24, "div", [["fxLayout", "column"], ["style", "margin-bottom: 15px"]], null, null, null, null, null)), e.rb(3, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 22, "div", [["fxLayout", "row"], ["fxLayout.lt-md", "column"], ["fxLayoutGap", "20px"], ["fxLayoutGap.lt-md", "0px"]], null, null, null, null, null)), e.rb(5, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-md": [1, "fxLayout.lt-md"]
            }, null), e.rb(6, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"],
                "fxLayoutGap.lt-md": [1, "fxLayoutGap.lt-md"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 17, "div", [["fxFlex", "60"], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(8, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(9, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(10, 0, null, null, 14, "div", [["fxLayout", "column"]], null, null, null, null, null)), e.rb(11, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(12, 0, null, null, 5, "div", [["style", "padding-left: 15px"]], null, null, null, null, null)), (l()(),
            e.sb(13, 0, null, null, 4, "mat-checkbox", [["class", "mat-checkbox"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null]], [[null, "change"]], function(l, n, a) {
                var e = !0;
                return "change" === n && (e = !1 !== l.component.addTurma(a, l.parent.context.$implicit, l.context.$implicit) && e),
                e
            }, P.b, P.a)), e.Hb(5120, null, E.r, function(l) {
                return [l]
            }, [S.b]), e.rb(15, 8568832, null, 0, S.b, [e.k, e.h, w.h, e.B, [8, null], [2, S.a], [2, C.a]], {
                checked: [0, "checked"],
                disabled: [1, "disabled"]
            }, {
                change: "change"
            }), (l()(),
            e.Kb(16, 0, [" ", ""])), e.Gb(17, 1), (l()(),
            e.sb(18, 0, null, null, 2, "div", [], null, null, null, null, null)), (l()(),
            e.kb(16777216, null, null, 1, null, Xn)), e.rb(20, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Wn)), e.rb(22, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, la)), e.rb(24, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, aa)), e.rb(26, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, ea)), e.rb(28, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null)], function(l, n) {
                var a = n.component;
                l(n, 1, 0, "column"),
                l(n, 3, 0, "column"),
                l(n, 5, 0, "row", "column"),
                l(n, 6, 0, "20px", "0px"),
                l(n, 8, 0, "row"),
                l(n, 9, 0, "60"),
                l(n, 11, 0, "column"),
                l(n, 15, 0, n.context.$implicit.checked, n.context.$implicit.choqueHorario || n.parent.context.$implicit.completo && !n.context.$implicit.checked || a.limiteAtingido && !n.context.$implicit.checked && (!n.parent.context.$implicit.teoriaePratica && !n.parent.context.$implicit.completo && !n.parent.context.$implicit.adicionado || n.parent.context.$implicit.teoriaePratica && !n.parent.context.$implicit.completo && !n.parent.context.$implicit.adicionado) || n.parent.context.$implicit.adicionado && n.parent.context.$implicit.chTotal < 90 && n.context.$implicit.horarioPorDia.length > 1 && !n.context.$implicit.checked || !n.context.$implicit.checked && n.context.$implicit.quantidadeDeAlunos >= n.context.$implicit.maximoVagas),
                l(n, 20, 0, n.context.$implicit.professores),
                l(n, 22, 0, n.context.$implicit.maximoVagas - n.context.$implicit.quantidadeDeAlunos < 1),
                l(n, 24, 0, n.context.$implicit.maximoVagas - n.context.$implicit.quantidadeDeAlunos > 0),
                l(n, 26, 0, n.context.$implicit.horarioPorDia),
                l(n, 28, 0, n.context.index < n.parent.context.$implicit.turmas.length - 1)
            }, function(l, n) {
                l(n, 13, 0, e.Cb(n, 15).id, null, e.Cb(n, 15).indeterminate, e.Cb(n, 15).checked, e.Cb(n, 15).disabled, "before" == e.Cb(n, 15).labelPosition, "NoopAnimations" === e.Cb(n, 15)._animationMode);
                var a = e.Lb(n, 16, 0, l(n, 17, 0, e.Cb(n.parent.parent.parent.parent, 0), n.context.$implicit.descricao));
                l(n, 16, 0, a)
            })
        }
        function ua(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 26, "mat-card", [["class", "mat-card"], ["fxFlex", ""], ["style", "margin-bottom: 5px; padding-bottom: 0px; width: 94%; margin: 2px;"]], null, null, null, D.d, D.a)), e.rb(1, 49152, null, 0, M.a, [], null, null), e.rb(2, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(3, 0, null, 0, 19, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "20px"], ["style", "margin-bottom: 10px"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(6, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 3, "div", [], null, null, null, null, null)), (l()(),
            e.sb(8, 0, null, null, 2, "h4", [["style", "margin: unset; color: #3f51b5;"]], null, null, null, null, null)), (l()(),
            e.Kb(9, null, ["", ""])), e.Gb(10, 1), (l()(),
            e.sb(11, 0, null, null, 3, "div", [], null, null, null, null, null)), (l()(),
            e.sb(12, 0, null, null, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"], ["style", "margin: unset; color: #3f51b5;"]], null, null, null, null, null)), e.rb(13, 16384, null, 0, M.h, [], null, null), (l()(),
            e.Kb(14, null, ["", "h - ", " CR\xc9DITOS"])), (l()(),
            e.sb(15, 0, null, null, 1, "div", [["fxFlex", ""]], null, null, null, null, null)), e.rb(16, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Vn)), e.rb(18, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Qn)), e.rb(20, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Yn)), e.rb(22, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(23, 0, null, 0, 3, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), e.rb(24, 16384, null, 0, M.d, [], null, null), (l()(),
            e.kb(16777216, null, null, 1, null, oa)), e.rb(26, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                l(n, 2, 0, ""),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "20px"),
                l(n, 6, 0, "start center"),
                l(n, 16, 0, ""),
                l(n, 18, 0, n.context.$implicit.choqueHorario),
                l(n, 20, 0, n.context.$implicit.completo),
                l(n, 22, 0, !n.context.$implicit.completo && n.context.$implicit.turmasMarcadas),
                l(n, 26, 0, n.context.$implicit.turmas)
            }, function(l, n) {
                var a = e.Lb(n, 9, 0, l(n, 10, 0, e.Cb(n.parent.parent.parent, 0), n.context.$implicit.nome));
                l(n, 9, 0, a),
                l(n, 14, 0, n.context.$implicit.chTotal, n.context.$implicit.creditos)
            })
        }
        function ta(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 13, "div", [["fxLayout", "column"], ["style", "margin-bottom: 15px;"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(2, 0, null, null, 9, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(3, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 7, "div", [["fxFlex", "25"], ["fxLayoutAlign", "center center"], ["style", "background: #3f51b5; border-bottom: unset; border-top-left-radius: 6px; border-top-right-radius: 6px; height: 35px;"]], null, null, null, null, null)), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 4, "p", [["style", "color: white; font-size: 15px"]], null, null, null, null, null)), (l()(),
            e.kb(16777216, null, null, 1, null, jn)), e.rb(9, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, $n)), e.rb(11, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, ua)), e.rb(13, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 3, 0, "row"),
                l(n, 5, 0, "center center"),
                l(n, 6, 0, "25"),
                l(n, 9, 0, 0 != n.context.$implicit.numero),
                l(n, 11, 0, 0 == n.context.$implicit.numero),
                l(n, 13, 0, n.context.$implicit.componentes)
            }, null)
        }
        function ia(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 9, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "5px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(4, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(5, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["color", "accent"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(6, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["report_problem"])), (l()(),
            e.sb(8, 0, null, null, 1, "small", [["style", "color: red"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Existem pend\xeancias em componentes."]))], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "5px"),
                l(n, 3, 0, "start center"),
                l(n, 4, 0, ""),
                l(n, 6, 0, "accent")
            }, function(l, n) {
                l(n, 5, 0, e.Cb(n, 6).inline, "primary" !== e.Cb(n, 6).color && "accent" !== e.Cb(n, 6).color && "warn" !== e.Cb(n, 6).color)
            })
        }
        function ra(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 9, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "5px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(4, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(5, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["color", "accent"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(6, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["report"])), (l()(),
            e.sb(8, 0, null, null, 1, "small", [["style", "color: red"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Limite de componentes excedido."]))], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "5px"),
                l(n, 3, 0, "start center"),
                l(n, 4, 0, ""),
                l(n, 6, 0, "accent")
            }, function(l, n) {
                l(n, 5, 0, e.Cb(n, 6).inline, "primary" !== e.Cb(n, 6).color && "accent" !== e.Cb(n, 6).color && "warn" !== e.Cb(n, 6).color)
            })
        }
        function sa(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["s"]))], null, null)
        }
        function ca(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 12, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "5px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(4, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(5, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["color", "accent"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(6, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["report"])), (l()(),
            e.sb(8, 0, null, null, 4, "small", [["style", "color: red"]], null, null, null, null, null)), (l()(),
            e.Kb(9, null, ["Inclua pelo menos ", " componente"])), (l()(),
            e.kb(16777216, null, null, 1, null, sa)), e.rb(11, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.Kb(-1, null, ["."]))], function(l, n) {
                var a = n.component;
                l(n, 1, 0, "row"),
                l(n, 2, 0, "5px"),
                l(n, 3, 0, "start center"),
                l(n, 4, 0, ""),
                l(n, 6, 0, "accent"),
                l(n, 11, 0, a.limiteMinimo > 1)
            }, function(l, n) {
                var a = n.component;
                l(n, 5, 0, e.Cb(n, 6).inline, "primary" !== e.Cb(n, 6).color && "accent" !== e.Cb(n, 6).color && "warn" !== e.Cb(n, 6).color),
                l(n, 9, 0, a.limiteMinimo)
            })
        }
        function da(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 9, "div", [["fxLayout", "row"], ["style", "margin: 15px;"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(2, 0, null, null, 7, "div", [["fxLayout", "column"]], null, null, null, null, null)), e.rb(3, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, ia)), e.rb(5, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, ra)), e.rb(7, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, ca)), e.rb(9, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null)], function(l, n) {
                var a = n.component;
                l(n, 1, 0, "row"),
                l(n, 3, 0, "column"),
                l(n, 5, 0, a.componentesAdicionados.length > 0 && !a.componentesCompletos),
                l(n, 7, 0, a.componentesAdicionados.length > 0 && a.componentesAdicionados.length > a.limiteMaximo),
                l(n, 9, 0, a.componentesAdicionados.length < a.limiteMinimo)
            }, null)
        }
        function pa(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 19, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-between center"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 11, "div", [["fxFlex", "80"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["style", "font-size: 13px;"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 4, "button", [["mat-icon-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function(l, n, a) {
                var e = !0;
                return "click" === n && (e = !1 !== l.component.removeComponente(l.context.$implicit) && e),
                e
            }, N.d, N.b)), e.rb(8, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], null, null), (l()(),
            e.sb(9, 0, null, 0, 2, "mat-icon", [["class", "mat-24 mat-icon notranslate"], ["role", "img"], ["style", "color: red"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(10, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], null, null), (l()(),
            e.Kb(-1, 0, ["clear"])), (l()(),
            e.sb(12, 0, null, null, 2, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(13, null, ["", ""])), e.Gb(14, 1), (l()(),
            e.sb(15, 0, null, null, 4, "div", [["fxFlex", "20"], ["fxLayoutAlign", "end center"], ["style", "font-size:13px;"]], null, null, null, null, null)), e.rb(16, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(17, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(18, null, [" ", " "])), e.Gb(19, 2)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "space-between center"),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "start center"),
                l(n, 6, 0, "80"),
                l(n, 10, 0),
                l(n, 16, 0, "end center"),
                l(n, 17, 0, "20")
            }, function(l, n) {
                l(n, 7, 0, e.Cb(n, 8).disabled || null, "NoopAnimations" === e.Cb(n, 8)._animationMode),
                l(n, 9, 0, e.Cb(n, 10).inline, "primary" !== e.Cb(n, 10).color && "accent" !== e.Cb(n, 10).color && "warn" !== e.Cb(n, 10).color);
                var a = e.Lb(n, 13, 0, l(n, 14, 0, e.Cb(n.parent.parent, 0), n.context.$implicit.nome));
                l(n, 13, 0, a);
                var o = e.Lb(n, 18, 0, l(n, 19, 0, e.Cb(n.parent.parent, 1), n.context.$implicit.preco, "R$"));
                l(n, 18, 0, o)
            })
        }
        function ba(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 8, "div", [["fxLayout", "row"], ["fxLayoutAlign", "end center"], ["fxLayoutGap", "20px"], ["style", "font-weight: bold; font-size:14px;"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Subtotal:"])), (l()(),
            e.sb(6, 0, null, null, 2, "div", [], null, null, null, null, null)), (l()(),
            e.Kb(7, null, ["", ""])), e.Gb(8, 2)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "20px"),
                l(n, 3, 0, "end center")
            }, function(l, n) {
                var a = n.component
                  , o = e.Lb(n, 7, 0, l(n, 8, 0, e.Cb(n.parent.parent, 1), a.simulacao.subtotal, "R$"));
                l(n, 7, 0, o)
            })
        }
        function fa(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 8, "div", [["fxLayout", "row"], ["fxLayoutAlign", "end center"], ["fxLayoutGap", "5px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["ProUni:"])), (l()(),
            e.sb(6, 0, null, null, 2, "div", [], null, null, null, null, null)), (l()(),
            e.sb(7, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(8, null, ["", " %"]))], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "5px"),
                l(n, 3, 0, "end center")
            }, function(l, n) {
                l(n, 8, 0, n.component.simulacao.percentualProuni)
            })
        }
        function ma(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 8, "div", [["fxLayout", "row"], ["fxLayoutAlign", "end center"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["FIES:"])), (l()(),
            e.sb(5, 0, null, null, 3, "div", [], null, null, null, null, null)), (l()(),
            e.sb(6, 0, null, null, 2, "div", [], null, null, null, null, null)), (l()(),
            e.sb(7, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(8, null, ["", " %"]))], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "end center")
            }, function(l, n) {
                l(n, 8, 0, n.component.simulacao.percentualFies)
            })
        }
        function xa(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 9, "div", [["fxLayout", "row"], ["fxLayoutAlign", "end center"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(),
            e.Kb(5, null, ["Desconto (", "%):"])), (l()(),
            e.sb(6, 0, null, null, 3, "div", [], null, null, null, null, null)), (l()(),
            e.sb(7, 0, null, null, 2, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(8, null, ["", ""])), e.Gb(9, 2)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "10px"),
                l(n, 3, 0, "end center")
            }, function(l, n) {
                var a = n.component;
                l(n, 5, 0, a.simulacao.descontoConvenio);
                var o = e.Lb(n, 8, 0, l(n, 9, 0, e.Cb(n.parent.parent.parent, 1), a.simulacao.vlDescontoCond, "R$"));
                l(n, 8, 0, o)
            })
        }
        function ga(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 20, "mat-card", [["class", "mat-card"], ["style", "margin-bottom: 5px; font-size: 13px;"]], null, null, null, D.d, D.a)), e.rb(1, 49152, null, 0, M.a, [], null, null), (l()(),
            e.sb(2, 0, null, 0, 9, "div", [["fxLayout", "row"], ["fxLayoutAlign", "end center"], ["fxLayoutGap", "20px"], ["style", "padding-bottom: 10px;"]], null, null, null, null, null)), e.rb(3, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(4, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, fa)), e.rb(7, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, ma)), e.rb(9, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, xa)), e.rb(11, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(12, 0, null, 0, 8, "div", [["class", "linhaTotal"], ["fxLayout", "row"], ["fxLayoutAlign", "end center"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), e.rb(13, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(14, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(15, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(16, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["TOTAL A PAGAR:"])), (l()(),
            e.sb(18, 0, null, null, 2, "div", [], null, null, null, null, null)), (l()(),
            e.Kb(19, null, [" ", " "])), e.Gb(20, 2)], function(l, n) {
                var a = n.component;
                l(n, 3, 0, "row"),
                l(n, 4, 0, "20px"),
                l(n, 5, 0, "end center"),
                l(n, 7, 0, a.simulacao.percentualProuni > 0),
                l(n, 9, 0, a.simulacao.percentualFies > 0),
                l(n, 11, 0, a.simulacao.descontoConvenio > 0),
                l(n, 13, 0, "row"),
                l(n, 14, 0, "10px"),
                l(n, 15, 0, "end center")
            }, function(l, n) {
                var a = n.component
                  , o = e.Lb(n, 19, 0, l(n, 20, 0, e.Cb(n.parent.parent, 1), a.simulacao.totalAPagar, "R$"));
                l(n, 19, 0, o)
            })
        }
        function ha(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 2, "mat-option", [["class", "mat-option"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function(l, n, a) {
                var o = !0;
                return "click" === n && (o = !1 !== e.Cb(l, 1)._selectViaInteraction() && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 1)._handleKeydown(a) && o),
                o
            }, Tn.c, Tn.a)), e.rb(1, 8568832, [[128, 4]], 0, q.s, [e.k, e.h, [2, q.l], [2, q.r]], {
                value: [0, "value"]
            }, null), (l()(),
            e.Kb(2, 0, [" ", " "]))], function(l, n) {
                l(n, 1, 0, n.context.$implicit)
            }, function(l, n) {
                l(n, 0, 0, e.Cb(n, 1)._getTabIndex(), e.Cb(n, 1).selected, e.Cb(n, 1).multiple, e.Cb(n, 1).active, e.Cb(n, 1).id, e.Cb(n, 1)._getAriaSelected(), e.Cb(n, 1).disabled.toString(), e.Cb(n, 1).disabled),
                l(n, 2, 0, n.context.$implicit)
            })
        }
        function Ca(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 2, "mat-option", [["class", "mat-option"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function(l, n, a) {
                var o = !0;
                return "click" === n && (o = !1 !== e.Cb(l, 1)._selectViaInteraction() && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 1)._handleKeydown(a) && o),
                o
            }, Tn.c, Tn.a)), e.rb(1, 8568832, [[138, 4]], 0, q.s, [e.k, e.h, [2, q.l], [2, q.r]], {
                value: [0, "value"]
            }, null), (l()(),
            e.Kb(2, 0, [" ", " "]))], function(l, n) {
                l(n, 1, 0, n.context.$implicit)
            }, function(l, n) {
                l(n, 0, 0, e.Cb(n, 1)._getTabIndex(), e.Cb(n, 1).selected, e.Cb(n, 1).multiple, e.Cb(n, 1).active, e.Cb(n, 1).id, e.Cb(n, 1)._getAriaSelected(), e.Cb(n, 1).disabled.toString(), e.Cb(n, 1).disabled),
                l(n, 2, 0, n.context.$implicit)
            })
        }
        function ya(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["s"]))], null, null)
        }
        function _a(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["1\xba"]))], null, null)
        }
        function La(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 81, "mat-card", [["class", "mat-card"], ["style", "margin-bottom: 5px; font-size: 14px;"]], null, null, null, D.d, D.a)), e.rb(1, 49152, null, 0, M.a, [], null, null), (l()(),
            e.sb(2, 0, null, 0, 47, "div", [["fxLayout", "row"], ["fxLayoutAlign", "end center"], ["fxLayoutGap", "25px"]], null, null, null, null, null)), e.rb(3, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(4, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(6, 0, null, null, 21, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "40"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(7, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 121, {
                _control: 0
            }), e.Ib(335544320, 122, {
                _placeholderChild: 0
            }), e.Ib(335544320, 123, {
                _labelChild: 0
            }), e.Ib(603979776, 124, {
                _errorChildren: 1
            }), e.Ib(603979776, 125, {
                _hintChildren: 1
            }), e.Ib(603979776, 126, {
                _prefixChildren: 1
            }), e.Ib(603979776, 127, {
                _suffixChildren: 1
            }), e.rb(15, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(16, 0, null, 1, 11, "mat-select", [["class", "mat-select"], ["placeholder", "DIA DE VENCIMENTO"], ["role", "listbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null]], [[null, "selectionChange"], [null, "ngModelChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function(l, n, a) {
                var o = !0
                  , u = l.component;
                return "keydown" === n && (o = !1 !== e.Cb(l, 21)._handleKeydown(a) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 21)._onFocus() && o),
                "blur" === n && (o = !1 !== e.Cb(l, 21)._onBlur() && o),
                "selectionChange" === n && (o = !1 !== u.setDiaVencimento(a) && o),
                "ngModelChange" === n && (o = !1 !== (u.primeiroDiaVencimento = a) && o),
                o
            }, Pn.b, Pn.a)), e.Hb(6144, null, q.l, null, [En.c]), e.rb(18, 671744, null, 0, E.w, [[8, null], [8, null], [8, null], [8, null]], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), e.Hb(2048, null, E.s, null, [E.w]), e.rb(20, 16384, null, 0, E.t, [[4, E.s]], null, null), e.rb(21, 2080768, null, 3, En.c, [A.j, e.h, e.B, q.d, e.k, [2, F.b], [2, E.v], [2, E.m], [2, L.c], [6, E.s], [8, null], En.a, w.j], {
                placeholder: [0, "placeholder"]
            }, {
                selectionChange: "selectionChange"
            }), e.Ib(603979776, 128, {
                options: 1
            }), e.Ib(603979776, 129, {
                optionGroups: 1
            }), e.Ib(335544320, 130, {
                customTrigger: 0
            }), e.Hb(2048, [[121, 4]], L.d, null, [En.c]), (l()(),
            e.kb(16777216, null, 1, 1, null, ha)), e.rb(27, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.sb(28, 0, null, null, 21, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "40"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(29, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 131, {
                _control: 0
            }), e.Ib(335544320, 132, {
                _placeholderChild: 0
            }), e.Ib(335544320, 133, {
                _labelChild: 0
            }), e.Ib(603979776, 134, {
                _errorChildren: 1
            }), e.Ib(603979776, 135, {
                _hintChildren: 1
            }), e.Ib(603979776, 136, {
                _prefixChildren: 1
            }), e.Ib(603979776, 137, {
                _suffixChildren: 1
            }), e.rb(37, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(38, 0, null, 1, 11, "mat-select", [["class", "mat-select"], ["placeholder", "QTDE. PARCELAS"], ["role", "listbox"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "mat-select-empty", null]], [[null, "selectionChange"], [null, "ngModelChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function(l, n, a) {
                var o = !0
                  , u = l.component;
                return "keydown" === n && (o = !1 !== e.Cb(l, 43)._handleKeydown(a) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 43)._onFocus() && o),
                "blur" === n && (o = !1 !== e.Cb(l, 43)._onBlur() && o),
                "selectionChange" === n && (o = !1 !== u.setQtdeParcelas(a) && o),
                "ngModelChange" === n && (o = !1 !== (u.simulacao.quantidadeParcelas = a) && o),
                o
            }, Pn.b, Pn.a)), e.Hb(6144, null, q.l, null, [En.c]), e.rb(40, 671744, null, 0, E.w, [[8, null], [8, null], [8, null], [8, null]], {
                model: [0, "model"]
            }, {
                update: "ngModelChange"
            }), e.Hb(2048, null, E.s, null, [E.w]), e.rb(42, 16384, null, 0, E.t, [[4, E.s]], null, null), e.rb(43, 2080768, null, 3, En.c, [A.j, e.h, e.B, q.d, e.k, [2, F.b], [2, E.v], [2, E.m], [2, L.c], [6, E.s], [8, null], En.a, w.j], {
                placeholder: [0, "placeholder"]
            }, {
                selectionChange: "selectionChange"
            }), e.Ib(603979776, 138, {
                options: 1
            }), e.Ib(603979776, 139, {
                optionGroups: 1
            }), e.Ib(335544320, 140, {
                customTrigger: 0
            }), e.Hb(2048, [[131, 4]], L.d, null, [En.c]), (l()(),
            e.kb(16777216, null, 1, 1, null, Ca)), e.rb(49, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.sb(50, 0, null, 0, 31, "div", [], null, null, null, null, null)), (l()(),
            e.sb(51, 0, null, null, 16, "div", [["class", "linhaTotal"], ["fxLayoutAlign", "end center"], ["fxLayoutGap", "10px"], ["style", "padding-bottom: 10px;"]], null, null, null, null, null)), e.rb(52, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(53, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(54, 0, null, null, 7, "div", [], null, null, null, null, null)), (l()(),
            e.sb(55, 0, null, null, 1, "span", [["style", "font-size: 1.1em;"]], null, null, null, null, null)), (l()(),
            e.Kb(56, null, ["", " "])), (l()(),
            e.sb(57, 0, null, null, 4, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, [" parcela"])), (l()(),
            e.kb(16777216, null, null, 1, null, ya)), e.rb(60, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.Kb(-1, null, [" de:"])), (l()(),
            e.sb(62, 0, null, null, 5, "div", [["fxFlex", "30"], ["fxLayoutAlign", "end center"]], null, null, null, null, null)), e.rb(63, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(64, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(65, 0, null, null, 2, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(66, null, ["", ""])), e.Gb(67, 2), (l()(),
            e.sb(68, 0, null, null, 13, "div", [["class", "linhaTotal"], ["fxLayoutAlign", "end center"], ["fxLayoutGap", "10px"], ["style", "padding-bottom: 10px;"]], null, null, null, null, null)), e.rb(69, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(70, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(71, 0, null, null, 4, "div", [], null, null, null, null, null)), (l()(),
            e.kb(16777216, null, null, 1, null, _a)), e.rb(73, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(74, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, [" vencimento:"])), (l()(),
            e.sb(76, 0, null, null, 5, "div", [["fxFlex", "30"], ["fxLayoutAlign", "end center"]], null, null, null, null, null)), e.rb(77, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(78, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(79, 0, null, null, 2, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(80, null, ["", ""])), e.Gb(81, 2)], function(l, n) {
                var a = n.component;
                l(n, 3, 0, "row"),
                l(n, 4, 0, "25px"),
                l(n, 5, 0, "end center"),
                l(n, 15, 0, "40"),
                l(n, 18, 0, a.primeiroDiaVencimento),
                l(n, 21, 0, "DIA DE VENCIMENTO"),
                l(n, 27, 0, a.vencimentos),
                l(n, 37, 0, "40"),
                l(n, 40, 0, a.simulacao.quantidadeParcelas),
                l(n, 43, 0, "QTDE. PARCELAS"),
                l(n, 49, 0, a.quantidadesParcelas),
                l(n, 52, 0, "10px"),
                l(n, 53, 0, "end center"),
                l(n, 60, 0, a.simulacao.quantidadeParcelas > 1),
                l(n, 63, 0, "end center"),
                l(n, 64, 0, "30"),
                l(n, 69, 0, "10px"),
                l(n, 70, 0, "end center"),
                l(n, 73, 0, a.simulacao.quantidadeParcelas > 1),
                l(n, 77, 0, "end center"),
                l(n, 78, 0, "30")
            }, function(l, n) {
                var a = n.component;
                l(n, 6, 1, ["standard" == e.Cb(n, 7).appearance, "fill" == e.Cb(n, 7).appearance, "outline" == e.Cb(n, 7).appearance, "legacy" == e.Cb(n, 7).appearance, e.Cb(n, 7)._control.errorState, e.Cb(n, 7)._canLabelFloat, e.Cb(n, 7)._shouldLabelFloat(), e.Cb(n, 7)._hasFloatingLabel(), e.Cb(n, 7)._hideControlPlaceholder(), e.Cb(n, 7)._control.disabled, e.Cb(n, 7)._control.autofilled, e.Cb(n, 7)._control.focused, "accent" == e.Cb(n, 7).color, "warn" == e.Cb(n, 7).color, e.Cb(n, 7)._shouldForward("untouched"), e.Cb(n, 7)._shouldForward("touched"), e.Cb(n, 7)._shouldForward("pristine"), e.Cb(n, 7)._shouldForward("dirty"), e.Cb(n, 7)._shouldForward("valid"), e.Cb(n, 7)._shouldForward("invalid"), e.Cb(n, 7)._shouldForward("pending"), !e.Cb(n, 7)._animationsEnabled]),
                l(n, 16, 1, [e.Cb(n, 20).ngClassUntouched, e.Cb(n, 20).ngClassTouched, e.Cb(n, 20).ngClassPristine, e.Cb(n, 20).ngClassDirty, e.Cb(n, 20).ngClassValid, e.Cb(n, 20).ngClassInvalid, e.Cb(n, 20).ngClassPending, e.Cb(n, 21).id, e.Cb(n, 21).tabIndex, e.Cb(n, 21)._getAriaLabel(), e.Cb(n, 21)._getAriaLabelledby(), e.Cb(n, 21).required.toString(), e.Cb(n, 21).disabled.toString(), e.Cb(n, 21).errorState, e.Cb(n, 21).panelOpen ? e.Cb(n, 21)._optionIds : null, e.Cb(n, 21).multiple, e.Cb(n, 21)._ariaDescribedby || null, e.Cb(n, 21)._getAriaActiveDescendant(), e.Cb(n, 21).disabled, e.Cb(n, 21).errorState, e.Cb(n, 21).required, e.Cb(n, 21).empty]),
                l(n, 28, 1, ["standard" == e.Cb(n, 29).appearance, "fill" == e.Cb(n, 29).appearance, "outline" == e.Cb(n, 29).appearance, "legacy" == e.Cb(n, 29).appearance, e.Cb(n, 29)._control.errorState, e.Cb(n, 29)._canLabelFloat, e.Cb(n, 29)._shouldLabelFloat(), e.Cb(n, 29)._hasFloatingLabel(), e.Cb(n, 29)._hideControlPlaceholder(), e.Cb(n, 29)._control.disabled, e.Cb(n, 29)._control.autofilled, e.Cb(n, 29)._control.focused, "accent" == e.Cb(n, 29).color, "warn" == e.Cb(n, 29).color, e.Cb(n, 29)._shouldForward("untouched"), e.Cb(n, 29)._shouldForward("touched"), e.Cb(n, 29)._shouldForward("pristine"), e.Cb(n, 29)._shouldForward("dirty"), e.Cb(n, 29)._shouldForward("valid"), e.Cb(n, 29)._shouldForward("invalid"), e.Cb(n, 29)._shouldForward("pending"), !e.Cb(n, 29)._animationsEnabled]),
                l(n, 38, 1, [e.Cb(n, 42).ngClassUntouched, e.Cb(n, 42).ngClassTouched, e.Cb(n, 42).ngClassPristine, e.Cb(n, 42).ngClassDirty, e.Cb(n, 42).ngClassValid, e.Cb(n, 42).ngClassInvalid, e.Cb(n, 42).ngClassPending, e.Cb(n, 43).id, e.Cb(n, 43).tabIndex, e.Cb(n, 43)._getAriaLabel(), e.Cb(n, 43)._getAriaLabelledby(), e.Cb(n, 43).required.toString(), e.Cb(n, 43).disabled.toString(), e.Cb(n, 43).errorState, e.Cb(n, 43).panelOpen ? e.Cb(n, 43)._optionIds : null, e.Cb(n, 43).multiple, e.Cb(n, 43)._ariaDescribedby || null, e.Cb(n, 43)._getAriaActiveDescendant(), e.Cb(n, 43).disabled, e.Cb(n, 43).errorState, e.Cb(n, 43).required, e.Cb(n, 43).empty]),
                l(n, 56, 0, a.simulacao.quantidadeParcelas);
                var o = e.Lb(n, 66, 0, l(n, 67, 0, e.Cb(n.parent.parent, 1), a.simulacao.parcelas[0].valor, "BRL"));
                l(n, 66, 0, o);
                var u = e.Lb(n, 80, 0, l(n, 81, 0, e.Cb(n.parent.parent, 2), a.simulacao.parcelas[0].dia, "dd/MM/yyyy"));
                l(n, 80, 0, u)
            })
        }
        function va(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 11, "div", [["fxLayout", "row"], ["style", "margin: 15px;"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(2, 0, null, null, 9, "div", [["fxFlex", ""], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(3, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(4, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(5, 0, null, null, 1, "div", [["fxFlex", ""]], null, null, null, null, null)), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 4, "button", [["color", "primary"], ["mat-stroked-button", ""], ["matStepperNext", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null], [8, "type", 0]], [[null, "click"]], function(l, n, a) {
                var o = !0;
                return "click" === n && (o = !1 !== e.Cb(l, 10)._stepper.next() && o),
                o
            }, N.d, N.b)), e.rb(8, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                disabled: [0, "disabled"],
                color: [1, "color"]
            }, null), e.Hb(2048, null, z.d, null, [K.f]), e.rb(10, 16384, null, 0, K.i, [z.d], null, null), (l()(),
            e.Kb(-1, 0, ["PROSSEGUIR"]))], function(l, n) {
                var a = n.component;
                l(n, 1, 0, "row"),
                l(n, 3, 0, "row"),
                l(n, 4, 0, ""),
                l(n, 6, 0, ""),
                l(n, 8, 0, !a.componentesCompletos || a.componentesAdicionados.length > a.limiteMaximo || a.componentesAdicionados.length < a.limiteMinimo, "primary")
            }, function(l, n) {
                l(n, 7, 0, e.Cb(n, 8).disabled || null, "NoopAnimations" === e.Cb(n, 8)._animationMode, e.Cb(n, 10).type)
            })
        }
        function ka(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 4, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"], ["style", "color: #5d6cc0;"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(3, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(-1, null, [" Voc\xea ainda n\xe3o escolheu nenhum componente! "]))], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "center center"),
                l(n, 3, 0, "")
            }, null)
        }
        function Aa(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 8, "div", [["fxFlex", ""], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 5, "div", [["class", "resumoTitulo"], ["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(7, null, [" ", ""])), e.Gb(8, 1)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, ""),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "center center"),
                l(n, 6, 0, "")
            }, function(l, n) {
                var a = e.Lb(n, 7, 0, l(n, 8, 0, e.Cb(n.parent.parent.parent, 0), n.context.$implicit.substring(1)));
                l(n, 7, 0, a)
            })
        }
        function wa(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 9, "div", [["class", "resumoComponente"], ["fxFlex", ""], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 6, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 2, "span", [["style", "font-size: .7em"]], null, null, null, null, null)), (l()(),
            e.Kb(8, null, ["", ""])), e.Gb(9, 1)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, ""),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "center center"),
                l(n, 6, 0, "")
            }, function(l, n) {
                var a = n.component
                  , o = e.Lb(n, 8, 0, l(n, 9, 0, e.Cb(n.parent.parent.parent.parent, 0), a.resumoHorario[n.parent.context.$implicit.mapKey + n.context.$implicit] || " --- "));
                l(n, 8, 0, o)
            })
        }
        function Fa(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 9, "div", [["fxLayout", "row"], ["fxLayoutGap", "3px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 4, "div", [["class", "resumoHorario"], ["fxFlex", "12"], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(7, null, [" ", " - ", " "])), (l()(),
            e.kb(16777216, null, null, 1, null, wa)), e.rb(9, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "3px"),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "center center"),
                l(n, 6, 0, "12"),
                l(n, 9, 0, n.context.$implicit.dias)
            }, function(l, n) {
                l(n, 7, 0, n.context.$implicit.inicio, n.context.$implicit.fim)
            })
        }
        function Oa(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 19, "div", [], null, null, null, null, null)), (l()(),
            e.sb(1, 0, null, null, 6, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(2, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 4, "div", [["fxFlex", "25"], ["fxLayoutAlign", "center center"], ["style", "background: #ebedf8b0; margin: 0 auto; border-bottom: unset; border-top-left-radius: 6px; border-top-right-radius: 6px; height: 35px;"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(5, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(6, 0, null, null, 1, "p", [["style", "color: rgba(0,0,0,.87); font-size: 15px"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["MATUTINO"])), (l()(),
            e.sb(8, 0, null, null, 9, "div", [["fxLayout", "row"], ["fxLayoutGap", "3px"]], null, null, null, null, null)), e.rb(9, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(10, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(11, 0, null, null, 4, "div", [["class", "resumoTitulo"], ["fxFlex", "12"], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(12, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(13, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(14, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(-1, null, ["HOR\xc1RIO"])), (l()(),
            e.kb(16777216, null, null, 1, null, Aa)), e.rb(17, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Fa)), e.rb(19, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                var a = n.component;
                l(n, 2, 0, "row"),
                l(n, 4, 0, "center center"),
                l(n, 5, 0, "25"),
                l(n, 9, 0, "row"),
                l(n, 10, 0, "3px"),
                l(n, 12, 0, "row"),
                l(n, 13, 0, "center center"),
                l(n, 14, 0, "12"),
                l(n, 17, 0, null == a.componentes ? null : a.componentes.horarioPadrao.matutino[0].dias),
                l(n, 19, 0, null == a.componentes ? null : a.componentes.horarioPadrao.matutino)
            }, null)
        }
        function Ia(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 8, "div", [["fxFlex", ""], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 5, "div", [["class", "resumoTitulo"], ["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(7, null, [" ", ""])), e.Gb(8, 1)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, ""),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "center center"),
                l(n, 6, 0, "")
            }, function(l, n) {
                var a = e.Lb(n, 7, 0, l(n, 8, 0, e.Cb(n.parent.parent.parent, 0), n.context.$implicit.substring(1)));
                l(n, 7, 0, a)
            })
        }
        function Ta(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 9, "div", [["class", "resumoComponente"], ["fxFlex", ""], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 6, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 2, "span", [["style", "font-size: .7em"]], null, null, null, null, null)), (l()(),
            e.Kb(8, null, ["", ""])), e.Gb(9, 1)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, ""),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "center center"),
                l(n, 6, 0, "")
            }, function(l, n) {
                var a = n.component
                  , o = e.Lb(n, 8, 0, l(n, 9, 0, e.Cb(n.parent.parent.parent.parent, 0), a.resumoHorario[n.parent.context.$implicit.mapKey + n.context.$implicit] || " --- "));
                l(n, 8, 0, o)
            })
        }
        function Pa(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 9, "div", [["fxLayout", "row"], ["fxLayoutGap", "3px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 4, "div", [["class", "resumoHorario"], ["fxFlex", "12"], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(7, null, [" ", " - ", " "])), (l()(),
            e.kb(16777216, null, null, 1, null, Ta)), e.rb(9, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "3px"),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "center center"),
                l(n, 6, 0, "12"),
                l(n, 9, 0, n.context.$implicit.dias)
            }, function(l, n) {
                l(n, 7, 0, n.context.$implicit.inicio, n.context.$implicit.fim)
            })
        }
        function Ea(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 19, "div", [], null, null, null, null, null)), (l()(),
            e.sb(1, 0, null, null, 6, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(2, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 4, "div", [["fxFlex", "25"], ["fxLayoutAlign", "center center"], ["style", "background: #ebedf8b0; margin: 0 auto; border-bottom: unset; border-top-left-radius: 6px; border-top-right-radius: 6px; height: 35px;"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(5, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(6, 0, null, null, 1, "p", [["style", "color: rgba(0,0,0,.87); font-size: 15px"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["VESPERTINO"])), (l()(),
            e.sb(8, 0, null, null, 9, "div", [["fxLayout", "row"], ["fxLayoutGap", "3px"]], null, null, null, null, null)), e.rb(9, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(10, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(11, 0, null, null, 4, "div", [["class", "resumoTitulo"], ["fxFlex", "12"], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(12, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(13, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(14, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(-1, null, ["HOR\xc1RIO"])), (l()(),
            e.kb(16777216, null, null, 1, null, Ia)), e.rb(17, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Pa)), e.rb(19, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                var a = n.component;
                l(n, 2, 0, "row"),
                l(n, 4, 0, "center center"),
                l(n, 5, 0, "25"),
                l(n, 9, 0, "row"),
                l(n, 10, 0, "3px"),
                l(n, 12, 0, "row"),
                l(n, 13, 0, "center center"),
                l(n, 14, 0, "12"),
                l(n, 17, 0, null == a.componentes ? null : a.componentes.horarioPadrao.vespertino[0].dias),
                l(n, 19, 0, null == a.componentes ? null : a.componentes.horarioPadrao.vespertino)
            }, null)
        }
        function Sa(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 8, "div", [["fxFlex", ""], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 5, "div", [["class", "resumoTitulo"], ["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(7, null, [" ", ""])), e.Gb(8, 1)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, ""),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "center center"),
                l(n, 6, 0, "")
            }, function(l, n) {
                var a = e.Lb(n, 7, 0, l(n, 8, 0, e.Cb(n.parent.parent.parent, 0), n.context.$implicit.substring(1)));
                l(n, 7, 0, a)
            })
        }
        function Da(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 9, "div", [["class", "resumoComponente"], ["fxFlex", ""], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 6, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 2, "span", [["style", "font-size: .7em"]], null, null, null, null, null)), (l()(),
            e.Kb(8, null, ["", ""])), e.Gb(9, 1)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, ""),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "center center"),
                l(n, 6, 0, "")
            }, function(l, n) {
                var a = n.component
                  , o = e.Lb(n, 8, 0, l(n, 9, 0, e.Cb(n.parent.parent.parent.parent, 0), a.resumoHorario[n.parent.context.$implicit.mapKey + n.context.$implicit] || " --- "));
                l(n, 8, 0, o)
            })
        }
        function Ma(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 9, "div", [["fxLayout", "row"], ["fxLayoutGap", "3px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 4, "div", [["class", "resumoHorario"], ["fxFlex", "12"], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(7, null, [" ", " - ", " "])), (l()(),
            e.kb(16777216, null, null, 1, null, Da)), e.rb(9, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "3px"),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "center center"),
                l(n, 6, 0, "12"),
                l(n, 9, 0, n.context.$implicit.dias)
            }, function(l, n) {
                l(n, 7, 0, n.context.$implicit.inicio, n.context.$implicit.fim)
            })
        }
        function Ra(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 19, "div", [], null, null, null, null, null)), (l()(),
            e.sb(1, 0, null, null, 6, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(2, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 4, "div", [["fxFlex", "25"], ["fxLayoutAlign", "center center"], ["style", "background: #ebedf8b0; margin: 0 auto; border-bottom: unset; border-top-left-radius: 6px; border-top-right-radius: 6px; height: 35px;"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(5, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(6, 0, null, null, 1, "p", [["style", "color: rgba(0,0,0,.87); font-size: 15px"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["NOTURNO"])), (l()(),
            e.sb(8, 0, null, null, 9, "div", [["fxLayout", "row"], ["fxLayoutGap", "3px"]], null, null, null, null, null)), e.rb(9, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(10, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(11, 0, null, null, 4, "div", [["class", "resumoTitulo"], ["fxFlex", "12"], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(12, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(13, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(14, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(-1, null, ["HOR\xc1RIO"])), (l()(),
            e.kb(16777216, null, null, 1, null, Sa)), e.rb(17, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Ma)), e.rb(19, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                var a = n.component;
                l(n, 2, 0, "row"),
                l(n, 4, 0, "center center"),
                l(n, 5, 0, "25"),
                l(n, 9, 0, "row"),
                l(n, 10, 0, "3px"),
                l(n, 12, 0, "row"),
                l(n, 13, 0, "center center"),
                l(n, 14, 0, "12"),
                l(n, 17, 0, null == a.componentes ? null : a.componentes.horarioPadrao.noturno[0].dias),
                l(n, 19, 0, null == a.componentes ? null : a.componentes.horarioPadrao.noturno)
            }, null)
        }
        function Ga(l) {
            return e.Mb(0, [(l()(),
            e.Kb(-1, null, ["CONFIRMA\xc7\xc3O"]))], null, null)
        }
        function qa(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 5, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 2, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.Kb(5, null, [" ", " - ", " "]))], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 2, 0, "center center"),
                l(n, 4, 0, "row")
            }, function(l, n) {
                l(n, 5, 0, n.context.$implicit.inicio, n.context.$implicit.fim)
            })
        }
        function Na(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 18, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "20px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(4, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(5, 0, null, null, 13, "div", [["fxLayout", "row"], ["fxLayout.lt-md", "column"], ["fxLayoutGap.lt-md", "0px"], ["style", "border: 1px solid #cec8c8;\n                      padding: 2px; line-height: 18px; text-align: center; border-radius: 5px; background: #eeeeeebf; min-width: 65px;"]], null, null, null, null, null)), e.rb(6, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-md": [1, "fxLayout.lt-md"]
            }, null), e.rb(7, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                "fxLayoutGap.lt-md": [0, "fxLayoutGap.lt-md"]
            }, null), (l()(),
            e.sb(8, 0, null, null, 10, "div", [["fxFlex", ""], ["fxLayout", "column"], ["fxLayoutAlign", "center center"], ["style", "font-size: .8em"]], null, null, null, null, null)), e.rb(9, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(10, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(11, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(12, 0, null, null, 4, "div", [["fxLayout", "row"], ["fxLayoutAlign", "center center"], ["style", "font-weight: bold;"]], null, null, null, null, null)), e.rb(13, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(14, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.Kb(15, null, [" ", " "])), e.Gb(16, 1), (l()(),
            e.kb(16777216, null, null, 1, null, qa)), e.rb(18, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "20px"),
                l(n, 3, 0, "start center"),
                l(n, 4, 0, ""),
                l(n, 6, 0, "row", "column"),
                l(n, 7, 0, "0px"),
                l(n, 9, 0, "column"),
                l(n, 10, 0, "center center"),
                l(n, 11, 0, ""),
                l(n, 13, 0, "row"),
                l(n, 14, 0, "center center"),
                l(n, 18, 0, n.context.$implicit.horarios)
            }, function(l, n) {
                var a = e.Lb(n, 15, 0, l(n, 16, 0, e.Cb(n.parent.parent.parent.parent, 0), n.context.$implicit.dia.substring(1)));
                l(n, 15, 0, a)
            })
        }
        function Ba(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 6, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"], ["style", "margin: 0 0 15px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(3, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 2, "mat-divider", [["class", "mat-divider"], ["fxFlex", "90"], ["role", "separator"], ["style", "left: unset"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, I.b, I.a)), e.rb(5, 49152, null, 0, T.a, [], null, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "center center"),
                l(n, 3, 0, ""),
                l(n, 6, 0, "90")
            }, function(l, n) {
                l(n, 4, 0, e.Cb(n, 5).vertical ? "vertical" : "horizontal", e.Cb(n, 5).vertical, !e.Cb(n, 5).vertical, e.Cb(n, 5).inset)
            })
        }
        function za(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 18, "div", [["fxLayout", "column"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(2, 0, null, null, 14, "div", [["fxLayout", "column"], ["style", "margin-bottom: 15px"]], null, null, null, null, null)), e.rb(3, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 12, "div", [["fxLayout", "row"], ["fxLayoutGap", "20px"], ["fxLayoutGap.lt-md", "0px"]], null, null, null, null, null)), e.rb(5, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(6, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"],
                "fxLayoutGap.lt-md": [1, "fxLayoutGap.lt-md"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 7, "div", [["fxFlex", "60"], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(8, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(9, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(10, 0, null, null, 4, "div", [["fxLayout", "column"]], null, null, null, null, null)), e.rb(11, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(12, 0, null, null, 2, "div", [["style", "padding-left: 15px"]], null, null, null, null, null)), (l()(),
            e.Kb(13, null, [" ", " "])), e.Gb(14, 1), (l()(),
            e.kb(16777216, null, null, 1, null, Na)), e.rb(16, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Ba)), e.rb(18, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 3, 0, "column"),
                l(n, 5, 0, "row"),
                l(n, 6, 0, "20px", "0px"),
                l(n, 8, 0, "row"),
                l(n, 9, 0, "60"),
                l(n, 11, 0, "column"),
                l(n, 16, 0, n.context.$implicit.horarioPorDia),
                l(n, 18, 0, n.context.index < n.parent.context.$implicit.turmas.length - 1)
            }, function(l, n) {
                var a = e.Lb(n, 13, 0, l(n, 14, 0, e.Cb(n.parent.parent.parent, 0), n.context.$implicit.descricao));
                l(n, 13, 0, a)
            })
        }
        function Ka(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 21, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 18, "mat-card", [["class", "mat-card"], ["fxFlex", ""], ["style", "margin-bottom: 5px; padding-bottom: 0px; width: 94%; margin: 2px;"]], null, null, null, D.d, D.a)), e.rb(4, 49152, null, 0, M.a, [], null, null), e.rb(5, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(6, 0, null, 0, 11, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "20px"], ["style", "margin-bottom: 10px"]], null, null, null, null, null)), e.rb(7, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(8, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(9, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(10, 0, null, null, 3, "div", [], null, null, null, null, null)), (l()(),
            e.sb(11, 0, null, null, 2, "h4", [["style", "margin: unset; color: #3f51b5;"]], null, null, null, null, null)), (l()(),
            e.Kb(12, null, ["", ""])), e.Gb(13, 1), (l()(),
            e.sb(14, 0, null, null, 3, "div", [], null, null, null, null, null)), (l()(),
            e.sb(15, 0, null, null, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"], ["style", "margin: unset; color: #3f51b5;"]], null, null, null, null, null)), e.rb(16, 16384, null, 0, M.h, [], null, null), (l()(),
            e.Kb(17, null, ["", "h - ", " CR\xc9DITOS"])), (l()(),
            e.sb(18, 0, null, 0, 3, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), e.rb(19, 16384, null, 0, M.d, [], null, null), (l()(),
            e.kb(16777216, null, null, 1, null, za)), e.rb(21, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 2, 0, "center center"),
                l(n, 5, 0, ""),
                l(n, 7, 0, "row"),
                l(n, 8, 0, "20px"),
                l(n, 9, 0, "start center"),
                l(n, 21, 0, n.context.$implicit.turmas)
            }, function(l, n) {
                var a = e.Lb(n, 12, 0, l(n, 13, 0, e.Cb(n.parent.parent, 0), n.context.$implicit.nome));
                l(n, 12, 0, a),
                l(n, 17, 0, n.context.$implicit.chTotal, n.context.$implicit.creditos)
            })
        }
        function Ha(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 14, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-between center"], ["style", "margin-bottom: 5px;"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 6, "div", [["fxFlex", "80"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["style", "font-size: 13px;"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 2, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(8, null, ["", ""])), e.Gb(9, 1), (l()(),
            e.sb(10, 0, null, null, 4, "div", [["fxFlex", "20"], ["fxLayoutAlign", "end center"], ["style", "font-size:13px;"]], null, null, null, null, null)), e.rb(11, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(12, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(13, null, [" ", " "])), e.Gb(14, 2)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "space-between center"),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "start center"),
                l(n, 6, 0, "80"),
                l(n, 11, 0, "end center"),
                l(n, 12, 0, "20")
            }, function(l, n) {
                var a = e.Lb(n, 8, 0, l(n, 9, 0, e.Cb(n.parent.parent, 0), n.context.$implicit.nome));
                l(n, 8, 0, a);
                var o = e.Lb(n, 13, 0, l(n, 14, 0, e.Cb(n.parent.parent, 1), n.context.$implicit.preco, "R$"));
                l(n, 13, 0, o)
            })
        }
        function Ua(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 8, "div", [["fxLayout", "row"], ["fxLayoutAlign", "end center"], ["fxLayoutGap", "20px"], ["style", "font-weight: bold; font-size:14px;"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Subtotal:"])), (l()(),
            e.sb(6, 0, null, null, 2, "div", [], null, null, null, null, null)), (l()(),
            e.Kb(7, null, ["", ""])), e.Gb(8, 2)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "20px"),
                l(n, 3, 0, "end center")
            }, function(l, n) {
                var a = n.component
                  , o = e.Lb(n, 7, 0, l(n, 8, 0, e.Cb(n.parent.parent, 1), a.simulacao.subtotal, "R$"));
                l(n, 7, 0, o)
            })
        }
        function ja(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 8, "div", [["fxLayout", "row"], ["fxLayoutAlign", "end center"], ["fxLayoutGap", "5px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["ProUni:"])), (l()(),
            e.sb(6, 0, null, null, 2, "div", [], null, null, null, null, null)), (l()(),
            e.sb(7, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(8, null, ["", " %"]))], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "5px"),
                l(n, 3, 0, "end center")
            }, function(l, n) {
                l(n, 8, 0, n.component.simulacao.percentualProuni)
            })
        }
        function $a(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 9, "div", [["fxLayout", "row"], ["fxLayoutAlign", "end center"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(),
            e.Kb(5, null, ["Desconto (", "%):"])), (l()(),
            e.sb(6, 0, null, null, 3, "div", [], null, null, null, null, null)), (l()(),
            e.sb(7, 0, null, null, 2, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(8, null, ["", ""])), e.Gb(9, 2)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "10px"),
                l(n, 3, 0, "end center")
            }, function(l, n) {
                var a = n.component;
                l(n, 5, 0, a.simulacao.descontoConvenio);
                var o = e.Lb(n, 8, 0, l(n, 9, 0, e.Cb(n.parent.parent.parent, 1), a.simulacao.vlDescontoCond, "R$"));
                l(n, 8, 0, o)
            })
        }
        function Va(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 8, "div", [["fxLayout", "row"], ["fxLayoutAlign", "end center"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["FIES:"])), (l()(),
            e.sb(5, 0, null, null, 3, "div", [], null, null, null, null, null)), (l()(),
            e.sb(6, 0, null, null, 2, "div", [], null, null, null, null, null)), (l()(),
            e.sb(7, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(8, null, ["", " %"]))], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "end center")
            }, function(l, n) {
                l(n, 8, 0, n.component.simulacao.percentualFies)
            })
        }
        function Qa(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 20, "mat-card", [["class", "mat-card"], ["style", "margin-bottom: 5px; font-size: 13px;"]], null, null, null, D.d, D.a)), e.rb(1, 49152, null, 0, M.a, [], null, null), (l()(),
            e.sb(2, 0, null, 0, 9, "div", [["fxLayout", "row"], ["fxLayoutAlign", "end center"], ["fxLayoutGap", "20px"], ["style", "padding-bottom: 10px;"]], null, null, null, null, null)), e.rb(3, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(4, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, ja)), e.rb(7, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, $a)), e.rb(9, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Va)), e.rb(11, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(12, 0, null, 0, 8, "div", [["class", "linhaTotal"], ["fxLayout", "row"], ["fxLayoutAlign", "end center"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), e.rb(13, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(14, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(15, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(16, 0, null, null, 1, "div", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["TOTAL A PAGAR:"])), (l()(),
            e.sb(18, 0, null, null, 2, "div", [], null, null, null, null, null)), (l()(),
            e.Kb(19, null, [" ", " "])), e.Gb(20, 2)], function(l, n) {
                var a = n.component;
                l(n, 3, 0, "row"),
                l(n, 4, 0, "20px"),
                l(n, 5, 0, "end center"),
                l(n, 7, 0, a.simulacao.percentualProuni > 0),
                l(n, 9, 0, a.simulacao.descontoConvenio > 0),
                l(n, 11, 0, a.simulacao.percentualFies > 0),
                l(n, 13, 0, "row"),
                l(n, 14, 0, "10px"),
                l(n, 15, 0, "end center")
            }, function(l, n) {
                var a = n.component
                  , o = e.Lb(n, 19, 0, l(n, 20, 0, e.Cb(n.parent.parent, 1), a.simulacao.totalAPagar, "R$"));
                l(n, 19, 0, o)
            })
        }
        function Ya(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 15, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "space-around center"], ["style", "font-size: 13px; margin-bottom: 5px;"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(3, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 5, "div", [["fxFlex", "30"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 2, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(8, null, ["", ""])), e.Gb(9, 2), (l()(),
            e.sb(10, 0, null, null, 5, "div", [["fxFlex", "30"], ["fxLayoutAlign", "end center"]], null, null, null, null, null)), e.rb(11, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(12, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(13, 0, null, null, 2, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(14, null, ["", ""])), e.Gb(15, 2)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "space-around center"),
                l(n, 3, 0, ""),
                l(n, 5, 0, "center center"),
                l(n, 6, 0, "30"),
                l(n, 11, 0, "end center"),
                l(n, 12, 0, "30")
            }, function(l, n) {
                var a = e.Lb(n, 8, 0, l(n, 9, 0, e.Cb(n.parent.parent.parent, 2), n.context.$implicit.dia, "dd/MM/yyyy"));
                l(n, 8, 0, a);
                var o = e.Lb(n, 14, 0, l(n, 15, 0, e.Cb(n.parent.parent.parent, 1), n.context.$implicit.valor, "R$"));
                l(n, 14, 0, o)
            })
        }
        function Ja(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 25, "mat-card", [["class", "mat-card"], ["style", "margin-bottom: 5px;"]], null, null, null, D.d, D.a)), e.rb(1, 49152, null, 0, M.a, [], null, null), (l()(),
            e.sb(2, 0, null, 0, 23, "div", [["fxLayout", "column"]], null, null, null, null, null)), e.rb(3, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 4, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start start"], ["fxflex", ""], ["style", "font-size: 13px; margin-bottom: 20px;"]], null, null, null, null, null)), e.rb(5, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(6, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["PARCELAS:"])), (l()(),
            e.sb(9, 0, null, null, 16, "div", [["fxFlex", "40"], ["fxLayout", "column"]], null, null, null, null, null)), e.rb(10, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(11, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(12, 0, null, null, 11, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "space-around center"], ["style", "font-size: 13px; margin-bottom: 5px;"]], null, null, null, null, null)), e.rb(13, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(14, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(15, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(16, 0, null, null, 3, "div", [["fxFlex", "30"], ["fxLayoutAlign", "center center"], ["style", "border-bottom: 1px solid black;"]], null, null, null, null, null)), e.rb(17, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(18, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(-1, null, ["VENCIMENTO"])), (l()(),
            e.sb(20, 0, null, null, 3, "div", [["fxFlex", "30"], ["fxLayoutAlign", "center center"], ["style", "border-bottom: 1px solid black;"]], null, null, null, null, null)), e.rb(21, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(22, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.Kb(-1, null, ["VALOR"])), (l()(),
            e.kb(16777216, null, null, 1, null, Ya)), e.rb(25, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                var a = n.component;
                l(n, 3, 0, "column"),
                l(n, 5, 0, "row"),
                l(n, 6, 0, "start start"),
                l(n, 10, 0, "column"),
                l(n, 11, 0, "40"),
                l(n, 13, 0, "row"),
                l(n, 14, 0, "space-around center"),
                l(n, 15, 0, ""),
                l(n, 17, 0, "center center"),
                l(n, 18, 0, "30"),
                l(n, 21, 0, "center center"),
                l(n, 22, 0, "30"),
                l(n, 25, 0, a.simulacao.parcelas)
            }, null)
        }
        function Za(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 8, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "5px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["color", "accent"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(5, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["report_problem"])), (l()(),
            e.sb(7, 0, null, null, 1, "small", [["style", "color: red"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Exitem pend\xeancias na escolha dos componentes. Clique no bot\xe3o 'VOLTAR' para corrigir."]))], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "5px"),
                l(n, 3, 0, "start center"),
                l(n, 5, 0, "accent")
            }, function(l, n) {
                l(n, 4, 0, e.Cb(n, 5).inline, "primary" !== e.Cb(n, 5).color && "accent" !== e.Cb(n, 5).color && "warn" !== e.Cb(n, 5).color)
            })
        }
        function Xa(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 39, "div", [["fxLayout", "column"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 26, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-between center"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(5, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(6, 0, null, null, 18, "div", [["fxFlex", "75"], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(7, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(8, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(9, 0, null, null, 15, "div", [["fxLayout", "column"]], null, null, null, null, null)), e.rb(10, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(11, 0, null, null, 6, "mat-checkbox", [["class", "mat-checkbox"], ["style", "font-size: 0.9em;"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function(l, n, a) {
                var e = !0;
                return "ngModelChange" === n && (e = !1 !== (l.component.confirmacaoFinal = a) && e),
                e
            }, P.b, P.a)), e.rb(12, 8568832, null, 0, S.b, [e.k, e.h, w.h, e.B, [8, null], [2, S.a], [2, C.a]], {
                disabled: [0, "disabled"]
            }, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [S.b]), e.rb(14, 671744, null, 0, E.w, [[8, null], [8, null], [8, null], [6, E.r]], {
                isDisabled: [0, "isDisabled"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), e.Hb(2048, null, E.s, null, [E.w]), e.rb(16, 16384, null, 0, E.t, [[4, E.s]], null, null), (l()(),
            e.Kb(-1, 0, ["Confirmo que todas as informa\xe7\xf5es acima est\xe3o corretas, de acordo com as escolhas feitas e com as condi\xe7\xf5es de pagamento."])), (l()(),
            e.sb(18, 0, null, null, 6, "mat-checkbox", [["class", "mat-checkbox"], ["style", "font-size: 0.9em;"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"]], function(l, n, a) {
                var e = !0
                  , o = l.component;
                return "ngModelChange" === n && (e = !1 !== (o.lerContrato = a) && e),
                "click" === n && (e = !1 !== o.verContrato() && e),
                e
            }, P.b, P.a)), e.rb(19, 8568832, null, 0, S.b, [e.k, e.h, w.h, e.B, [8, null], [2, S.a], [2, C.a]], {
                disabled: [0, "disabled"]
            }, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [S.b]), e.rb(21, 671744, null, 0, E.w, [[8, null], [8, null], [8, null], [6, E.r]], {
                isDisabled: [0, "isDisabled"],
                model: [1, "model"]
            }, {
                update: "ngModelChange"
            }), e.Hb(2048, null, E.s, null, [E.w]), e.rb(23, 16384, null, 0, E.t, [[4, E.s]], null, null), (l()(),
            e.Kb(-1, 0, ["Declaro que li e concordo com o Contrato de Presta\xe7\xe3o de Servi\xe7os Educacionais."])), (l()(),
            e.sb(25, 0, null, null, 4, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(26, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(27, 0, null, null, 2, "button", [["color", "primary"], ["mat-raised-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function(l, n, a) {
                var e = !0;
                return "click" === n && (e = !1 !== l.component.efetuarMatricula() && e),
                e
            }, N.d, N.b)), e.rb(28, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                disabled: [0, "disabled"],
                color: [1, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["EFETUAR MATR\xcdCULA"])), (l()(),
            e.sb(30, 0, null, null, 9, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-between center"]], null, null, null, null, null)), e.rb(31, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(32, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Za)), e.rb(34, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(35, 0, null, null, 1, "div", [["fxFlex", ""]], null, null, null, null, null)), e.rb(36, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(37, 0, null, null, 2, "button", [["color", "primary"], ["mat-stroked-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function(l, n, a) {
                var o = !0;
                return "click" === n && (o = !1 !== e.Cb(l.parent, 1).previous() && o),
                o
            }, N.d, N.b)), e.rb(38, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["VOLTAR"]))], function(l, n) {
                var a = n.component;
                l(n, 1, 0, "column"),
                l(n, 2, 0, "10px"),
                l(n, 4, 0, "row"),
                l(n, 5, 0, "space-between center"),
                l(n, 7, 0, "row"),
                l(n, 8, 0, "75"),
                l(n, 10, 0, "column"),
                l(n, 12, 0, !a.componentesCompletos || a.componentesAdicionados.length > a.limiteMaximo || a.componentesAdicionados.length < 1 || a.componentesAdicionados.length < a.limiteMinimo),
                l(n, 14, 0, !a.componentesCompletos || a.componentesAdicionados.length > a.limiteMaximo || a.componentesAdicionados.length < 1 || a.componentesAdicionados.length < a.limiteMinimo, a.confirmacaoFinal),
                l(n, 19, 0, !a.componentesCompletos || a.componentesAdicionados.length > a.limiteMaximo || a.componentesAdicionados.length < 1 || a.componentesAdicionados.length < a.limiteMinimo),
                l(n, 21, 0, !a.componentesCompletos || a.componentesAdicionados.length > a.limiteMaximo || a.componentesAdicionados.length < 1 || a.componentesAdicionados.length < a.limiteMinimo, a.lerContrato),
                l(n, 26, 0, "row"),
                l(n, 28, 0, !a.confirmacaoFinal || !a.componentesCompletos || a.componentesAdicionados.length > a.limiteMaximo || a.componentesAdicionados.length < 1 || a.componentesAdicionados.length < a.limiteMinimo || !a.contratoLido, "primary"),
                l(n, 31, 0, "row"),
                l(n, 32, 0, "space-between center"),
                l(n, 34, 0, !a.componentesCompletos || a.componentesAdicionados.length > a.limiteMaximo || a.componentesAdicionados.length < a.limiteMinimo),
                l(n, 36, 0, ""),
                l(n, 38, 0, "primary")
            }, function(l, n) {
                l(n, 11, 1, [e.Cb(n, 12).id, null, e.Cb(n, 12).indeterminate, e.Cb(n, 12).checked, e.Cb(n, 12).disabled, "before" == e.Cb(n, 12).labelPosition, "NoopAnimations" === e.Cb(n, 12)._animationMode, e.Cb(n, 16).ngClassUntouched, e.Cb(n, 16).ngClassTouched, e.Cb(n, 16).ngClassPristine, e.Cb(n, 16).ngClassDirty, e.Cb(n, 16).ngClassValid, e.Cb(n, 16).ngClassInvalid, e.Cb(n, 16).ngClassPending]),
                l(n, 18, 1, [e.Cb(n, 19).id, null, e.Cb(n, 19).indeterminate, e.Cb(n, 19).checked, e.Cb(n, 19).disabled, "before" == e.Cb(n, 19).labelPosition, "NoopAnimations" === e.Cb(n, 19)._animationMode, e.Cb(n, 23).ngClassUntouched, e.Cb(n, 23).ngClassTouched, e.Cb(n, 23).ngClassPristine, e.Cb(n, 23).ngClassDirty, e.Cb(n, 23).ngClassValid, e.Cb(n, 23).ngClassInvalid, e.Cb(n, 23).ngClassPending]),
                l(n, 27, 0, e.Cb(n, 28).disabled || null, "NoopAnimations" === e.Cb(n, 28)._animationMode),
                l(n, 37, 0, e.Cb(n, 38).disabled || null, "NoopAnimations" === e.Cb(n, 38)._animationMode)
            })
        }
        function Wa(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 8, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 1, "mat-spinner", [["class", "mat-spinner mat-progress-spinner"], ["mode", "indeterminate"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"]], null, null, m.b, m.a)), e.rb(4, 49152, null, 0, x.d, [e.k, g.a, [2, h.e], [2, C.a], x.a], {
                diameter: [0, "diameter"]
            }, null), (l()(),
            e.sb(5, 0, null, null, 3, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(6, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 1, "span", [["class", "mat-subheading-2"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Processando matr\xedcula..."]))], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 2, 0, "center center"),
                l(n, 4, 0, 60),
                l(n, 6, 0, "row")
            }, function(l, n) {
                l(n, 3, 0, e.Cb(n, 4)._noopAnimations, e.Cb(n, 4).diameter, e.Cb(n, 4).diameter)
            })
        }
        function le(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 633, "mat-horizontal-stepper", [["aria-orientation", "horizontal"], ["class", "mat-stepper-horizontal"], ["linear", ""], ["role", "tablist"], ["style", "background-color: #fafafa;"]], [[2, "mat-stepper-label-position-end", null], [2, "mat-stepper-label-position-bottom", null]], [[null, "selectionChange"]], function(l, n, a) {
                var e = !0;
                return "selectionChange" === n && (e = !1 !== l.component.atualizaContatosFormValue(a) && e),
                e
            }, H.d, H.a)), e.rb(1, 5423104, [["stepper", 4]], 2, K.b, [[2, F.b], e.h, e.k, h.e], {
                linear: [0, "linear"]
            }, {
                selectionChange: "selectionChange"
            }), e.Ib(603979776, 1, {
                _steps: 1
            }), e.Ib(603979776, 2, {
                _icons: 1
            }), e.Hb(2048, null, K.f, null, [K.b]), (l()(),
            e.sb(5, 0, null, null, 116, "mat-step", [], null, null, null, H.e, H.b)), e.rb(6, 573440, [[1, 4]], 1, K.c, [K.f, [1, q.d], [2, z.h]], {
                stepControl: [0, "stepControl"],
                editable: [1, "editable"]
            }, null), e.Ib(335544320, 3, {
                stepLabel: 0
            }), e.Hb(2048, null, q.d, null, [K.c]), (l()(),
            e.kb(0, null, 0, 1, null, Gn)), e.rb(10, 16384, [[3, 4]], 0, K.e, [e.O], null, null), (l()(),
            e.sb(11, 0, null, 0, 110, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function(l, n, a) {
                var o = !0;
                return "submit" === n && (o = !1 !== e.Cb(l, 13).onSubmit(a) && o),
                "reset" === n && (o = !1 !== e.Cb(l, 13).onReset() && o),
                o
            }, null, null)), e.rb(12, 16384, null, 0, E.F, [], null, null), e.rb(13, 540672, null, 0, E.m, [[8, null], [8, null]], {
                form: [0, "form"]
            }, null), e.Hb(2048, null, E.c, null, [E.m]), e.rb(15, 16384, null, 0, E.u, [[4, E.c]], null, null), (l()(),
            e.sb(16, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(17, 0, null, null, 104, "mat-card", [["class", "mat-elevation-z3 mat-card"]], null, null, null, D.d, D.a)), e.rb(18, 49152, null, 0, M.a, [], null, null), (l()(),
            e.sb(19, 0, null, 0, 3, "div", [["fxLayout", "column"]], null, null, null, null, null)), e.rb(20, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(21, 0, null, null, 1, "span", [["style", "color: #3f51b5;"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["VERIFIQUE E ATUALIZE SEUS DADOS DE CONTATO"])), (l()(),
            e.sb(23, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(24, 0, null, 0, 97, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), e.rb(25, 16384, null, 0, M.d, [], null, null), (l()(),
            e.sb(26, 0, null, null, 95, "div", [["fxLayout", "column"]], null, null, null, null, null)), e.rb(27, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(28, 0, null, null, 41, "div", [["fxLayout", "row"], ["fxLayout.lt-md", "column"], ["fxLayoutGap", "20px"], ["fxLayoutGap.lt-md", "0px"]], null, null, null, null, null)), e.rb(29, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-md": [1, "fxLayout.lt-md"]
            }, null), e.rb(30, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"],
                "fxLayoutGap.lt-md": [1, "fxLayoutGap.lt-md"]
            }, null), (l()(),
            e.sb(31, 0, null, null, 17, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", ""]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(32, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 4, {
                _control: 0
            }), e.Ib(335544320, 5, {
                _placeholderChild: 0
            }), e.Ib(335544320, 6, {
                _labelChild: 0
            }), e.Ib(603979776, 7, {
                _errorChildren: 1
            }), e.Ib(603979776, 8, {
                _hintChildren: 1
            }), e.Ib(603979776, 9, {
                _prefixChildren: 1
            }), e.Ib(603979776, 10, {
                _suffixChildren: 1
            }), e.rb(40, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(41, 0, null, 1, 7, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "email"], ["matInput", ""], ["placeholder", "E-mail"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 42)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 42).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 42)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 42)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 46)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 46)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 46)._onInput() && o),
                o
            }, null, null)), e.rb(42, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(44, 671744, null, 0, E.k, [[3, E.c], [8, null], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(46, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"]
            }, null), e.rb(47, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[4, 4]], L.d, null, [j.b]), (l()(),
            e.sb(49, 0, null, null, 20, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", ""]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(50, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 11, {
                _control: 0
            }), e.Ib(335544320, 12, {
                _placeholderChild: 0
            }), e.Ib(335544320, 13, {
                _labelChild: 0
            }), e.Ib(603979776, 14, {
                _errorChildren: 1
            }), e.Ib(603979776, 15, {
                _hintChildren: 1
            }), e.Ib(603979776, 16, {
                _prefixChildren: 1
            }), e.Ib(603979776, 17, {
                _suffixChildren: 1
            }), e.rb(58, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(59, 0, null, 1, 10, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "telCelular"], ["mask", "(00) 00000-0000"], ["matInput", ""], ["placeholder", "Tel. celular"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "click"], [null, "keydown"], [null, "paste"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 61).onInput(a) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 61).onBlur() && o),
                "click" === n && (o = !1 !== e.Cb(l, 61).onFocus(a) && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 61).a(a) && o),
                "paste" === n && (o = !1 !== e.Cb(l, 61).onPaste() && o),
                "input" === n && (o = !1 !== e.Cb(l, 63)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 63).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 63)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 63)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 67)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 67)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 67)._onInput() && o),
                o
            }, null, null)), e.Hb(512, null, V.d, V.d, [h.e, V.h, e.k, e.G]), e.rb(61, 540672, null, 0, V.b, [h.e, V.d], {
                maskExpression: [0, "maskExpression"]
            }, null), e.Hb(1024, null, E.q, function(l) {
                return [l]
            }, [V.b]), e.rb(63, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l, n) {
                return [l, n]
            }, [E.d, V.b]), e.rb(65, 671744, null, 0, E.k, [[3, E.c], [6, E.q], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(67, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"]
            }, null), e.rb(68, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[11, 4]], L.d, null, [j.b]), (l()(),
            e.sb(70, 0, null, null, 44, "div", [["fxLayout", "row"], ["fxLayout.lt-md", "column"], ["fxLayoutGap", "20px"], ["fxLayoutGap.lt-md", "0px"]], null, null, null, null, null)), e.rb(71, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-md": [1, "fxLayout.lt-md"]
            }, null), e.rb(72, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"],
                "fxLayoutGap.lt-md": [1, "fxLayoutGap.lt-md"]
            }, null), (l()(),
            e.sb(73, 0, null, null, 20, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", ""]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(74, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 18, {
                _control: 0
            }), e.Ib(335544320, 19, {
                _placeholderChild: 0
            }), e.Ib(335544320, 20, {
                _labelChild: 0
            }), e.Ib(603979776, 21, {
                _errorChildren: 1
            }), e.Ib(603979776, 22, {
                _hintChildren: 1
            }), e.Ib(603979776, 23, {
                _prefixChildren: 1
            }), e.Ib(603979776, 24, {
                _suffixChildren: 1
            }), e.rb(82, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(83, 0, null, 1, 10, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "telResidencial"], ["mask", "(00) 0000-0000"], ["matInput", ""], ["placeholder", "Tel. residencial"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "click"], [null, "keydown"], [null, "paste"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 85).onInput(a) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 85).onBlur() && o),
                "click" === n && (o = !1 !== e.Cb(l, 85).onFocus(a) && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 85).a(a) && o),
                "paste" === n && (o = !1 !== e.Cb(l, 85).onPaste() && o),
                "input" === n && (o = !1 !== e.Cb(l, 87)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 87).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 87)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 87)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 91)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 91)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 91)._onInput() && o),
                o
            }, null, null)), e.Hb(512, null, V.d, V.d, [h.e, V.h, e.k, e.G]), e.rb(85, 540672, null, 0, V.b, [h.e, V.d], {
                maskExpression: [0, "maskExpression"]
            }, null), e.Hb(1024, null, E.q, function(l) {
                return [l]
            }, [V.b]), e.rb(87, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l, n) {
                return [l, n]
            }, [E.d, V.b]), e.rb(89, 671744, null, 0, E.k, [[3, E.c], [6, E.q], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(91, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"]
            }, null), e.rb(92, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[18, 4]], L.d, null, [j.b]), (l()(),
            e.sb(94, 0, null, null, 20, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", ""]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(95, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 25, {
                _control: 0
            }), e.Ib(335544320, 26, {
                _placeholderChild: 0
            }), e.Ib(335544320, 27, {
                _labelChild: 0
            }), e.Ib(603979776, 28, {
                _errorChildren: 1
            }), e.Ib(603979776, 29, {
                _hintChildren: 1
            }), e.Ib(603979776, 30, {
                _prefixChildren: 1
            }), e.Ib(603979776, 31, {
                _suffixChildren: 1
            }), e.rb(103, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(104, 0, null, 1, 10, "input", [["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "telComercial"], ["mask", "(00) 0000-0000"], ["matInput", ""], ["placeholder", "Tel. comercial"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "click"], [null, "keydown"], [null, "paste"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 106).onInput(a) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 106).onBlur() && o),
                "click" === n && (o = !1 !== e.Cb(l, 106).onFocus(a) && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 106).a(a) && o),
                "paste" === n && (o = !1 !== e.Cb(l, 106).onPaste() && o),
                "input" === n && (o = !1 !== e.Cb(l, 108)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 108).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 108)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 108)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 112)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 112)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 112)._onInput() && o),
                o
            }, null, null)), e.Hb(512, null, V.d, V.d, [h.e, V.h, e.k, e.G]), e.rb(106, 540672, null, 0, V.b, [h.e, V.d], {
                maskExpression: [0, "maskExpression"]
            }, null), e.Hb(1024, null, E.q, function(l) {
                return [l]
            }, [V.b]), e.rb(108, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l, n) {
                return [l, n]
            }, [E.d, V.b]), e.rb(110, 671744, null, 0, E.k, [[3, E.c], [6, E.q], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(112, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"]
            }, null), e.rb(113, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[25, 4]], L.d, null, [j.b]), (l()(),
            e.sb(115, 0, null, null, 6, "div", [["class", "input-row"], ["fxLayoutAlign", "end center"]], null, null, null, null, null)), e.rb(116, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(117, 0, null, null, 4, "button", [["color", "primary"], ["mat-stroked-button", ""], ["matStepperNext", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null], [8, "type", 0]], [[null, "click"]], function(l, n, a) {
                var o = !0;
                return "click" === n && (o = !1 !== e.Cb(l, 120)._stepper.next() && o),
                o
            }, N.d, N.b)), e.rb(118, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                color: [0, "color"]
            }, null), e.Hb(2048, null, z.d, null, [K.f]), e.rb(120, 16384, null, 0, K.i, [z.d], null, null), (l()(),
            e.Kb(-1, 0, ["PROSSEGUIR"])), (l()(),
            e.sb(122, 0, null, null, 356, "mat-step", [], null, null, null, H.e, H.b)), e.rb(123, 573440, [[1, 4]], 1, K.c, [K.f, [1, q.d], [2, z.h]], {
                stepControl: [0, "stepControl"]
            }, null), e.Ib(335544320, 32, {
                stepLabel: 0
            }), e.Hb(2048, null, q.d, null, [K.c]), (l()(),
            e.sb(126, 0, null, 0, 352, "mat-card", [["class", "mat-elevation-z3 mat-card"], ["style", "font-size: smaller;"]], null, null, null, D.d, D.a)), e.rb(127, 49152, null, 0, M.a, [], null, null), (l()(),
            e.sb(128, 0, null, 0, 350, "form", [["fxLayout", "column"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function(l, n, a) {
                var o = !0;
                return "submit" === n && (o = !1 !== e.Cb(l, 130).onSubmit(a) && o),
                "reset" === n && (o = !1 !== e.Cb(l, 130).onReset() && o),
                o
            }, null, null)), e.rb(129, 16384, null, 0, E.F, [], null, null), e.rb(130, 540672, null, 0, E.m, [[8, null], [8, null]], {
                form: [0, "form"]
            }, null), e.Hb(2048, null, E.c, null, [E.m]), e.rb(132, 16384, null, 0, E.u, [[4, E.c]], null, null), e.rb(133, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.kb(0, null, null, 1, null, qn)), e.rb(135, 16384, [[32, 4]], 0, K.e, [e.O], null, null), (l()(),
            e.sb(136, 0, null, null, 319, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutAlign", "space-between center"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(137, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(138, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(139, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(140, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(141, 0, null, null, 166, "div", [["formGroupName", "endereco"], ["fxFlex", "50"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, null, null)), e.rb(142, 212992, null, 0, E.n, [[3, E.c], [8, null], [8, null]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.c, null, [E.n]), e.rb(144, 16384, null, 0, E.u, [[4, E.c]], null, null), e.rb(145, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(146, 0, null, null, 4, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(147, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(148, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(149, 0, null, null, 1, "h4", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Endere\xe7o atual"])), (l()(),
            e.sb(151, 0, null, null, 34, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(152, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(153, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(154, 0, null, null, 21, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "30%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(155, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 33, {
                _control: 0
            }), e.Ib(335544320, 34, {
                _placeholderChild: 0
            }), e.Ib(335544320, 35, {
                _labelChild: 0
            }), e.Ib(603979776, 36, {
                _errorChildren: 1
            }), e.Ib(603979776, 37, {
                _hintChildren: 1
            }), e.Ib(603979776, 38, {
                _prefixChildren: 1
            }), e.Ib(603979776, 39, {
                _suffixChildren: 1
            }), e.rb(163, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(164, 0, null, 1, 9, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "cep"], ["matInput", ""], ["placeholder", "CEP"], ["required", ""]], [[1, "required", 0], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 167)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 167).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 167)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 167)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 171)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 171)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 171)._onInput() && o),
                o
            }, null, null)), e.rb(165, 16384, null, 0, E.A, [], {
                required: [0, "required"]
            }, null), e.Hb(1024, null, E.q, function(l) {
                return [l]
            }, [E.A]), e.rb(167, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(169, 671744, null, 0, E.k, [[3, E.c], [6, E.q], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(171, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"],
                required: [1, "required"]
            }, null), e.rb(172, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[33, 4]], L.d, null, [j.b]), (l()(),
            e.kb(16777216, null, 5, 1, null, Nn)), e.rb(175, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(176, 0, null, null, 9, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutAlign", "end center"]], null, null, null, null, null)), e.rb(177, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(178, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(179, 16777216, null, null, 6, "button", [["color", "primary"], ["mat-raised-button", ""], ["matTooltip", "Busque pelo CEP."]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function(l, n, a) {
                var o = !0
                  , u = l.component;
                return "longpress" === n && (o = !1 !== e.Cb(l, 181).show() && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 181)._handleKeydown(a) && o),
                "touchend" === n && (o = !1 !== e.Cb(l, 181)._handleTouchend() && o),
                "click" === n && (o = !1 !== u.findCEP(!0) && o),
                o
            }, N.d, N.b)), e.rb(180, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                color: [0, "color"]
            }, null), e.rb(181, 147456, null, 0, v.d, [k.d, e.k, A.f, e.R, e.B, g.a, w.c, w.h, v.b, [2, F.b], [2, v.a], [2, O.g]], {
                position: [0, "position"],
                message: [1, "message"]
            }, null), (l()(),
            e.sb(182, 0, null, 0, 3, "mat-icon", [["class", "mat-icon notranslate"], ["matPrefix", ""], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(183, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], null, null), e.rb(184, 16384, null, 0, L.h, [], null, null), (l()(),
            e.Kb(-1, 0, ["search"])), (l()(),
            e.sb(186, 0, null, null, 24, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(187, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(188, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(189, 0, null, null, 21, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "60%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(190, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 40, {
                _control: 0
            }), e.Ib(335544320, 41, {
                _placeholderChild: 0
            }), e.Ib(335544320, 42, {
                _labelChild: 0
            }), e.Ib(603979776, 43, {
                _errorChildren: 1
            }), e.Ib(603979776, 44, {
                _hintChildren: 1
            }), e.Ib(603979776, 45, {
                _prefixChildren: 1
            }), e.Ib(603979776, 46, {
                _suffixChildren: 1
            }), e.rb(198, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(199, 0, null, 1, 9, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "logradouro"], ["matInput", ""], ["placeholder", "Logradouro"], ["required", ""]], [[1, "required", 0], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 202)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 202).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 202)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 202)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 206)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 206)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 206)._onInput() && o),
                o
            }, null, null)), e.rb(200, 16384, null, 0, E.A, [], {
                required: [0, "required"]
            }, null), e.Hb(1024, null, E.q, function(l) {
                return [l]
            }, [E.A]), e.rb(202, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(204, 671744, null, 0, E.k, [[3, E.c], [6, E.q], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(206, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"],
                required: [1, "required"]
            }, null), e.rb(207, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[40, 4]], L.d, null, [j.b]), (l()(),
            e.kb(16777216, null, 5, 1, null, Bn)), e.rb(210, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(211, 0, null, null, 25, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(212, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(213, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(214, 0, null, null, 22, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "60%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(215, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 47, {
                _control: 0
            }), e.Ib(335544320, 48, {
                _placeholderChild: 0
            }), e.Ib(335544320, 49, {
                _labelChild: 0
            }), e.Ib(603979776, 50, {
                _errorChildren: 1
            }), e.Ib(603979776, 51, {
                _hintChildren: 1
            }), e.Ib(603979776, 52, {
                _prefixChildren: 1
            }), e.Ib(603979776, 53, {
                _suffixChildren: 1
            }), e.rb(223, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(224, 16777216, null, 1, 10, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "numero"], ["matInput", ""], ["matTooltip", "Caso n\xe3o tenha n\xfamero, informe S/N."], ["placeholder", "Numero"], ["required", ""]], [[1, "required", 0], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 227)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 227).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 227)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 227)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 231)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 231)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 231)._onInput() && o),
                "longpress" === n && (o = !1 !== e.Cb(l, 233).show() && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 233)._handleKeydown(a) && o),
                "touchend" === n && (o = !1 !== e.Cb(l, 233)._handleTouchend() && o),
                o
            }, null, null)), e.rb(225, 16384, null, 0, E.A, [], {
                required: [0, "required"]
            }, null), e.Hb(1024, null, E.q, function(l) {
                return [l]
            }, [E.A]), e.rb(227, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(229, 671744, null, 0, E.k, [[3, E.c], [6, E.q], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(231, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"],
                required: [1, "required"]
            }, null), e.rb(232, 16384, null, 0, E.t, [[4, E.s]], null, null), e.rb(233, 147456, null, 0, v.d, [k.d, e.k, A.f, e.R, e.B, g.a, w.c, w.h, v.b, [2, F.b], [2, v.a], [2, O.g]], {
                position: [0, "position"],
                message: [1, "message"]
            }, null), e.Hb(2048, [[47, 4]], L.d, null, [j.b]), (l()(),
            e.kb(16777216, null, 5, 1, null, zn)), e.rb(236, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(237, 0, null, null, 20, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(238, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(239, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(240, 0, null, null, 17, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "60%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(241, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 54, {
                _control: 0
            }), e.Ib(335544320, 55, {
                _placeholderChild: 0
            }), e.Ib(335544320, 56, {
                _labelChild: 0
            }), e.Ib(603979776, 57, {
                _errorChildren: 1
            }), e.Ib(603979776, 58, {
                _hintChildren: 1
            }), e.Ib(603979776, 59, {
                _prefixChildren: 1
            }), e.Ib(603979776, 60, {
                _suffixChildren: 1
            }), e.rb(249, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(250, 0, null, 1, 7, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "complemento"], ["matInput", ""], ["placeholder", "Complemento"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 251)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 251).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 251)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 251)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 255)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 255)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 255)._onInput() && o),
                o
            }, null, null)), e.rb(251, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(253, 671744, null, 0, E.k, [[3, E.c], [8, null], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(255, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"]
            }, null), e.rb(256, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[54, 4]], L.d, null, [j.b]), (l()(),
            e.sb(258, 0, null, null, 24, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(259, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(260, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(261, 0, null, null, 21, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "60%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(262, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 61, {
                _control: 0
            }), e.Ib(335544320, 62, {
                _placeholderChild: 0
            }), e.Ib(335544320, 63, {
                _labelChild: 0
            }), e.Ib(603979776, 64, {
                _errorChildren: 1
            }), e.Ib(603979776, 65, {
                _hintChildren: 1
            }), e.Ib(603979776, 66, {
                _prefixChildren: 1
            }), e.Ib(603979776, 67, {
                _suffixChildren: 1
            }), e.rb(270, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(271, 0, null, 1, 9, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "bairro"], ["matInput", ""], ["placeholder", "Bairro"], ["required", ""]], [[1, "required", 0], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 274)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 274).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 274)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 274)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 278)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 278)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 278)._onInput() && o),
                o
            }, null, null)), e.rb(272, 16384, null, 0, E.A, [], {
                required: [0, "required"]
            }, null), e.Hb(1024, null, E.q, function(l) {
                return [l]
            }, [E.A]), e.rb(274, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(276, 671744, null, 0, E.k, [[3, E.c], [6, E.q], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(278, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"],
                required: [1, "required"]
            }, null), e.rb(279, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[61, 4]], L.d, null, [j.b]), (l()(),
            e.kb(16777216, null, 5, 1, null, Kn)), e.rb(282, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(283, 0, null, null, 24, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(284, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(285, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(286, 0, null, null, 21, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "60%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(287, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 68, {
                _control: 0
            }), e.Ib(335544320, 69, {
                _placeholderChild: 0
            }), e.Ib(335544320, 70, {
                _labelChild: 0
            }), e.Ib(603979776, 71, {
                _errorChildren: 1
            }), e.Ib(603979776, 72, {
                _hintChildren: 1
            }), e.Ib(603979776, 73, {
                _prefixChildren: 1
            }), e.Ib(603979776, 74, {
                _suffixChildren: 1
            }), e.rb(295, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(296, 0, null, 1, 9, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "cidade"], ["matInput", ""], ["placeholder", "Cidade"], ["required", ""]], [[1, "required", 0], [2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 299)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 299).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 299)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 299)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 303)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 303)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 303)._onInput() && o),
                o
            }, null, null)), e.rb(297, 16384, null, 0, E.A, [], {
                required: [0, "required"]
            }, null), e.Hb(1024, null, E.q, function(l) {
                return [l]
            }, [E.A]), e.rb(299, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(301, 671744, null, 0, E.k, [[3, E.c], [6, E.q], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(303, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"],
                required: [1, "required"]
            }, null), e.rb(304, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[68, 4]], L.d, null, [j.b]), (l()(),
            e.kb(16777216, null, 5, 1, null, Hn)), e.rb(307, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(308, 0, null, null, 147, "div", [["formGroupName", "enderecoDeOrigem"], ["fxFlex", "50"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, null, null)), e.rb(309, 212992, null, 0, E.n, [[3, E.c], [8, null], [8, null]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.c, null, [E.n]), e.rb(311, 16384, null, 0, E.u, [[4, E.c]], null, null), e.rb(312, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(313, 0, null, null, 4, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(314, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(315, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(316, 0, null, null, 1, "h4", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Endere\xe7o de origem"])), (l()(),
            e.sb(318, 0, null, null, 31, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(319, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(320, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(321, 0, null, null, 17, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "30%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(322, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 75, {
                _control: 0
            }), e.Ib(335544320, 76, {
                _placeholderChild: 0
            }), e.Ib(335544320, 77, {
                _labelChild: 0
            }), e.Ib(603979776, 78, {
                _errorChildren: 1
            }), e.Ib(603979776, 79, {
                _hintChildren: 1
            }), e.Ib(603979776, 80, {
                _prefixChildren: 1
            }), e.Ib(603979776, 81, {
                _suffixChildren: 1
            }), e.rb(330, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(331, 0, null, 1, 7, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "cep"], ["matInput", ""], ["placeholder", "CEP"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 332)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 332).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 332)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 332)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 336)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 336)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 336)._onInput() && o),
                o
            }, null, null)), e.rb(332, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(334, 671744, null, 0, E.k, [[3, E.c], [8, null], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(336, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"]
            }, null), e.rb(337, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[75, 4]], L.d, null, [j.b]), (l()(),
            e.sb(339, 0, null, null, 10, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutAlign", "end center"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(340, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(341, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(342, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(343, 16777216, null, null, 6, "button", [["color", "primary"], ["mat-raised-button", ""], ["matTooltip", "Busque pelo CEP."]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function(l, n, a) {
                var o = !0
                  , u = l.component;
                return "longpress" === n && (o = !1 !== e.Cb(l, 345).show() && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 345)._handleKeydown(a) && o),
                "touchend" === n && (o = !1 !== e.Cb(l, 345)._handleTouchend() && o),
                "click" === n && (o = !1 !== u.findCEP(!1) && o),
                o
            }, N.d, N.b)), e.rb(344, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                color: [0, "color"]
            }, null), e.rb(345, 147456, null, 0, v.d, [k.d, e.k, A.f, e.R, e.B, g.a, w.c, w.h, v.b, [2, F.b], [2, v.a], [2, O.g]], {
                position: [0, "position"],
                message: [1, "message"]
            }, null), (l()(),
            e.sb(346, 0, null, 0, 3, "mat-icon", [["class", "mat-icon notranslate"], ["matPrefix", ""], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(347, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], null, null), e.rb(348, 16384, null, 0, L.h, [], null, null), (l()(),
            e.Kb(-1, 0, ["search"])), (l()(),
            e.sb(350, 0, null, null, 20, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(351, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(352, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(353, 0, null, null, 17, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "60%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(354, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 82, {
                _control: 0
            }), e.Ib(335544320, 83, {
                _placeholderChild: 0
            }), e.Ib(335544320, 84, {
                _labelChild: 0
            }), e.Ib(603979776, 85, {
                _errorChildren: 1
            }), e.Ib(603979776, 86, {
                _hintChildren: 1
            }), e.Ib(603979776, 87, {
                _prefixChildren: 1
            }), e.Ib(603979776, 88, {
                _suffixChildren: 1
            }), e.rb(362, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(363, 0, null, 1, 7, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "logradouro"], ["matInput", ""], ["placeholder", "Logradouro"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 364)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 364).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 364)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 364)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 368)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 368)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 368)._onInput() && o),
                o
            }, null, null)), e.rb(364, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(366, 671744, null, 0, E.k, [[3, E.c], [8, null], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(368, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"]
            }, null), e.rb(369, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[82, 4]], L.d, null, [j.b]), (l()(),
            e.sb(371, 0, null, null, 21, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(372, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(373, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(374, 0, null, null, 18, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "60%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(375, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 89, {
                _control: 0
            }), e.Ib(335544320, 90, {
                _placeholderChild: 0
            }), e.Ib(335544320, 91, {
                _labelChild: 0
            }), e.Ib(603979776, 92, {
                _errorChildren: 1
            }), e.Ib(603979776, 93, {
                _hintChildren: 1
            }), e.Ib(603979776, 94, {
                _prefixChildren: 1
            }), e.Ib(603979776, 95, {
                _suffixChildren: 1
            }), e.rb(383, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(384, 16777216, null, 1, 8, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "numero"], ["matInput", ""], ["matTooltip", "Caso n\xe3o tenha n\xfamero, informe S/N."], ["placeholder", "Numero"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 385)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 385).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 385)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 385)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 389)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 389)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 389)._onInput() && o),
                "longpress" === n && (o = !1 !== e.Cb(l, 391).show() && o),
                "keydown" === n && (o = !1 !== e.Cb(l, 391)._handleKeydown(a) && o),
                "touchend" === n && (o = !1 !== e.Cb(l, 391)._handleTouchend() && o),
                o
            }, null, null)), e.rb(385, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(387, 671744, null, 0, E.k, [[3, E.c], [8, null], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(389, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"]
            }, null), e.rb(390, 16384, null, 0, E.t, [[4, E.s]], null, null), e.rb(391, 147456, null, 0, v.d, [k.d, e.k, A.f, e.R, e.B, g.a, w.c, w.h, v.b, [2, F.b], [2, v.a], [2, O.g]], {
                position: [0, "position"],
                message: [1, "message"]
            }, null), e.Hb(2048, [[89, 4]], L.d, null, [j.b]), (l()(),
            e.sb(393, 0, null, null, 20, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(394, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(395, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(396, 0, null, null, 17, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "60%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(397, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 96, {
                _control: 0
            }), e.Ib(335544320, 97, {
                _placeholderChild: 0
            }), e.Ib(335544320, 98, {
                _labelChild: 0
            }), e.Ib(603979776, 99, {
                _errorChildren: 1
            }), e.Ib(603979776, 100, {
                _hintChildren: 1
            }), e.Ib(603979776, 101, {
                _prefixChildren: 1
            }), e.Ib(603979776, 102, {
                _suffixChildren: 1
            }), e.rb(405, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(406, 0, null, 1, 7, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "complemento"], ["matInput", ""], ["placeholder", "Complemento"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 407)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 407).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 407)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 407)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 411)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 411)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 411)._onInput() && o),
                o
            }, null, null)), e.rb(407, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(409, 671744, null, 0, E.k, [[3, E.c], [8, null], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(411, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"]
            }, null), e.rb(412, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[96, 4]], L.d, null, [j.b]), (l()(),
            e.sb(414, 0, null, null, 20, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(415, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(416, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(417, 0, null, null, 17, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "60%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(418, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 103, {
                _control: 0
            }), e.Ib(335544320, 104, {
                _placeholderChild: 0
            }), e.Ib(335544320, 105, {
                _labelChild: 0
            }), e.Ib(603979776, 106, {
                _errorChildren: 1
            }), e.Ib(603979776, 107, {
                _hintChildren: 1
            }), e.Ib(603979776, 108, {
                _prefixChildren: 1
            }), e.Ib(603979776, 109, {
                _suffixChildren: 1
            }), e.rb(426, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(427, 0, null, 1, 7, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "bairro"], ["matInput", ""], ["placeholder", "Bairro"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 428)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 428).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 428)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 428)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 432)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 432)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 432)._onInput() && o),
                o
            }, null, null)), e.rb(428, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(430, 671744, null, 0, E.k, [[3, E.c], [8, null], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(432, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"]
            }, null), e.rb(433, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[103, 4]], L.d, null, [j.b]), (l()(),
            e.sb(435, 0, null, null, 20, "div", [["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(436, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(437, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(438, 0, null, null, 17, "mat-form-field", [["class", "mat-form-field"], ["fxFlex", "60%"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-has-label", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "_mat-animation-noopable", null]], null, null, U.b, U.a)), e.rb(439, 7520256, null, 7, L.c, [e.k, e.h, [2, q.j], [2, F.b], [2, L.a], g.a, e.B, [2, C.a]], null, null), e.Ib(335544320, 110, {
                _control: 0
            }), e.Ib(335544320, 111, {
                _placeholderChild: 0
            }), e.Ib(335544320, 112, {
                _labelChild: 0
            }), e.Ib(603979776, 113, {
                _errorChildren: 1
            }), e.Ib(603979776, 114, {
                _hintChildren: 1
            }), e.Ib(603979776, 115, {
                _prefixChildren: 1
            }), e.Ib(603979776, 116, {
                _suffixChildren: 1
            }), e.rb(447, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(448, 0, null, 1, 7, "input", [["autocomplete", "off"], ["class", "mat-input-element mat-form-field-autofill-control"], ["formControlName", "cidade"], ["matInput", ""], ["placeholder", "Cidade"]], [[2, "mat-input-server", null], [1, "id", 0], [1, "placeholder", 0], [8, "disabled", 0], [8, "required", 0], [1, "readonly", 0], [1, "aria-describedby", 0], [1, "aria-invalid", 0], [1, "aria-required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focus"]], function(l, n, a) {
                var o = !0;
                return "input" === n && (o = !1 !== e.Cb(l, 449)._handleInput(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 449).onTouched() && o),
                "compositionstart" === n && (o = !1 !== e.Cb(l, 449)._compositionStart() && o),
                "compositionend" === n && (o = !1 !== e.Cb(l, 449)._compositionEnd(a.target.value) && o),
                "blur" === n && (o = !1 !== e.Cb(l, 453)._focusChanged(!1) && o),
                "focus" === n && (o = !1 !== e.Cb(l, 453)._focusChanged(!0) && o),
                "input" === n && (o = !1 !== e.Cb(l, 453)._onInput() && o),
                o
            }, null, null)), e.rb(449, 16384, null, 0, E.d, [e.G, e.k, [2, E.a]], null, null), e.Hb(1024, null, E.r, function(l) {
                return [l]
            }, [E.d]), e.rb(451, 671744, null, 0, E.k, [[3, E.c], [8, null], [8, null], [6, E.r], [2, E.H]], {
                name: [0, "name"]
            }, null), e.Hb(2048, null, E.s, null, [E.k]), e.rb(453, 999424, null, 0, j.b, [e.k, g.a, [6, E.s], [2, E.v], [2, E.m], q.d, [8, null], $.a, e.B], {
                placeholder: [0, "placeholder"]
            }, null), e.rb(454, 16384, null, 0, E.t, [[4, E.s]], null, null), e.Hb(2048, [[110, 4]], L.d, null, [j.b]), (l()(),
            e.sb(456, 0, null, null, 22, "div", [["class", "button_next_top"], ["fxLayout", "row"], ["fxLayout.lt-sm", "column"], ["fxLayoutGap", "15px"]], null, null, null, null, null)), e.rb(457, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-sm": [1, "fxLayout.lt-sm"]
            }, null), e.rb(458, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), (l()(),
            e.sb(459, 0, null, null, 8, "button", [["color", "primary"], ["mat-stroked-button", ""], ["matStepperPrevious", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null], [8, "type", 0]], [[null, "click"]], function(l, n, a) {
                var o = !0;
                return "click" === n && (o = !1 !== e.Cb(l, 462)._stepper.previous() && o),
                o
            }, N.d, N.b)), e.rb(460, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                color: [0, "color"]
            }, null), e.Hb(2048, null, z.d, null, [K.f]), e.rb(462, 16384, null, 0, K.j, [z.d], null, null), (l()(),
            e.sb(463, 0, null, 0, 3, "mat-icon", [["class", "mat-icon notranslate"], ["matPrefix", ""], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(464, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], null, null), e.rb(465, 16384, null, 0, L.h, [], null, null), (l()(),
            e.Kb(-1, 0, ["navigate_before"])), (l()(),
            e.Kb(-1, 0, ["ANTERIOR "])), (l()(),
            e.sb(468, 0, null, null, 1, "span", [["fxFlex", ""]], null, null, null, null, null)), e.rb(469, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(470, 0, null, null, 8, "button", [["color", "primary"], ["mat-stroked-button", ""], ["matStepperNext", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null], [8, "type", 0]], [[null, "click"]], function(l, n, a) {
                var o = !0;
                return "click" === n && (o = !1 !== e.Cb(l, 473)._stepper.next() && o),
                o
            }, N.d, N.b)), e.rb(471, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                disabled: [0, "disabled"],
                color: [1, "color"]
            }, null), e.Hb(2048, null, z.d, null, [K.f]), e.rb(473, 16384, null, 0, K.i, [z.d], null, null), (l()(),
            e.Kb(-1, 0, [" PR\xd3XIMO "])), (l()(),
            e.sb(475, 0, null, 0, 3, "mat-icon", [["class", "mat-icon notranslate"], ["matPrefix", ""], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(476, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], null, null), e.rb(477, 16384, null, 0, L.h, [], null, null), (l()(),
            e.Kb(-1, 0, ["navigate_next"])), (l()(),
            e.sb(479, 0, null, null, 95, "mat-step", [], null, null, null, H.e, H.b)), e.Hb(6144, null, q.d, null, [K.c]), e.rb(481, 573440, [[1, 4]], 1, K.c, [K.f, [1, q.d], [2, z.h]], {
                stepControl: [0, "stepControl"],
                editable: [1, "editable"]
            }, null), e.Ib(335544320, 117, {
                stepLabel: 0
            }), (l()(),
            e.kb(0, null, 0, 1, null, Un)), e.rb(484, 16384, [[117, 4]], 0, K.e, [e.O], null, null), (l()(),
            e.sb(485, 0, null, 0, 89, "div", [["fxLayout", "column"]], null, null, null, null, null)), e.rb(486, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(487, 0, null, null, 12, "div", [["fxLayout", "row"], ["fxLayoutAlign", "space-between center"]], null, null, null, null, null)), e.rb(488, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(489, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(490, 0, null, null, 3, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, [" MATR\xcdCULA: \xa0 "])), (l()(),
            e.sb(492, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            e.Kb(493, null, ["", ""])), (l()(),
            e.sb(494, 0, null, null, 5, "span", [], null, null, null, null, null)), (l()(),
            e.sb(495, 0, null, null, 4, "a", [], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function(l, n, a) {
                var o = !0;
                return "click" === n && (o = !1 !== e.Cb(l, 496).onClick(a.button, a.ctrlKey, a.metaKey, a.shiftKey) && o),
                o
            }, null, null)), e.rb(496, 671744, null, 0, Q.p, [Q.n, Q.a, h.l], {
                routerLink: [0, "routerLink"]
            }, null), e.Fb(497, {
                tipo: 0,
                assunto: 1
            }), e.Db(498, 2), (l()(),
            e.Kb(-1, null, ["D\xfavidas ou dificuldades?"])), (l()(),
            e.sb(500, 0, null, null, 74, "mat-tab-group", [["class", "mat-tab-group"]], [[2, "mat-tab-group-dynamic-height", null], [2, "mat-tab-group-inverted-header", null]], null, null, Y.c, Y.b)), e.rb(501, 3325952, null, 1, J.f, [e.k, e.h, [2, J.a]], {
                selectedIndex: [0, "selectedIndex"]
            }, null), e.Ib(603979776, 118, {
                _tabs: 1
            }), (l()(),
            e.sb(503, 16777216, null, null, 41, "mat-tab", [["label", "SELE\xc7\xc3O DE COMPONENTES"]], null, null, null, Y.d, Y.a)), e.rb(504, 770048, [[118, 4]], 2, J.c, [e.R], {
                textLabel: [0, "textLabel"]
            }, null), e.Ib(335544320, 119, {
                templateLabel: 0
            }), e.Ib(335544320, 120, {
                _explicitContent: 0
            }), (l()(),
            e.sb(507, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(508, 0, null, 0, 36, "div", [["fxFlex", ""], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(509, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(510, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(511, 0, null, null, 9, "div", [["fxFlex", "64"], ["fxLayout", "column"]], null, null, null, null, null)), e.rb(512, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(513, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(514, 0, null, null, 6, "cdk-virtual-scroll-viewport", [["class", "cdk-virtual-scroll-viewport"], ["itemSize", "50"], ["style", "height: 90vh;"]], [[2, "cdk-virtual-scroll-orientation-horizontal", null], [2, "cdk-virtual-scroll-orientation-vertical", null]], null, null, Z.b, Z.a)), e.Hb(6144, null, A.b, null, [A.d]), e.rb(516, 540672, null, 0, A.a, [], {
                itemSize: [0, "itemSize"]
            }, null), e.Hb(1024, null, A.i, A.k, [A.a]), e.rb(518, 245760, null, 0, A.d, [e.k, e.h, e.B, [2, A.i], [2, F.b], A.f], null, null), (l()(),
            e.kb(16777216, null, 0, 1, null, ta)), e.rb(520, 409600, null, 0, A.c, [e.R, e.O, e.u, [1, A.d], e.B], {
                cdkVirtualForOf: [0, "cdkVirtualForOf"],
                cdkVirtualForTemplateCacheSize: [1, "cdkVirtualForTemplateCacheSize"]
            }, null), (l()(),
            e.sb(521, 0, null, null, 23, "div", [["fxFlex", "35"], ["fxLayout", "column"]], null, null, null, null, null)), e.rb(522, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(523, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(524, 0, null, null, 5, "div", [], null, null, null, null, null)), (l()(),
            e.sb(525, 0, null, null, 4, "h4", [["class", "mat-subheading-2"], ["style", "margin: 0 0 4px"]], null, null, null, null, null)), (l()(),
            e.sb(526, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(527, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], null, null), (l()(),
            e.Kb(-1, 0, ["subject"])), (l()(),
            e.Kb(-1, null, [" COMPONENTES SELECIONADOS "])), (l()(),
            e.sb(530, 0, null, null, 8, "mat-card", [["class", "mat-card"], ["style", "margin-bottom: 5px;"]], null, null, null, D.d, D.a)), e.rb(531, 49152, null, 0, M.a, [], null, null), (l()(),
            e.kb(16777216, null, 0, 1, null, da)), e.rb(533, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(534, 0, null, 0, 4, "div", [["style", "padding-bottom: 10px;"]], null, null, null, null, null)), (l()(),
            e.kb(16777216, null, null, 1, null, pa)), e.rb(536, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, ba)), e.rb(538, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, ga)), e.rb(540, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, La)), e.rb(542, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, va)), e.rb(544, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(545, 16777216, null, null, 7, "mat-tab", [["fxFlex", ""], ["label", "MATRIZ CURRICULAR"]], null, null, null, Y.d, Y.a)), e.rb(546, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), e.rb(547, 770048, [[118, 4]], 2, J.c, [e.R], {
                textLabel: [0, "textLabel"]
            }, null), e.Ib(335544320, 141, {
                templateLabel: 0
            }), e.Ib(335544320, 142, {
                _explicitContent: 0
            }), (l()(),
            e.sb(550, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(551, 0, null, 0, 1, "app-matriz-curricular", [], null, null, null, el, W)), e.rb(552, 114688, null, 0, X, [e.B], {
                matrizAluno: [0, "matrizAluno"],
                componentesAdicionados: [1, "componentesAdicionados"]
            }, null), (l()(),
            e.sb(553, 16777216, null, null, 21, "mat-tab", [["label", "HOR\xc1RIO"]], null, null, null, Y.d, Y.a)), e.rb(554, 770048, [[118, 4]], 2, J.c, [e.R], {
                textLabel: [0, "textLabel"]
            }, null), e.Ib(335544320, 143, {
                templateLabel: 0
            }), e.Ib(335544320, 144, {
                _explicitContent: 0
            }), (l()(),
            e.sb(557, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.kb(16777216, null, 0, 1, null, ka)), e.rb(559, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(560, 0, null, 0, 13, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(561, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(562, 0, null, null, 11, "div", [["fxFlex", ""], ["fxLayout", "column"], ["fxLayoutGap", "3px"]], null, null, null, null, null)), e.rb(563, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(564, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(565, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Oa)), e.rb(567, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(568, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            e.kb(16777216, null, null, 1, null, Ea)), e.rb(570, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(571, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            e.kb(16777216, null, null, 1, null, Ra)), e.rb(573, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(574, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(575, 0, null, null, 58, "mat-step", [], null, null, null, H.e, H.b)), e.Hb(6144, null, q.d, null, [K.c]), e.rb(577, 573440, [[1, 4]], 1, K.c, [K.f, [1, q.d], [2, z.h]], {
                editable: [0, "editable"]
            }, null), e.Ib(335544320, 145, {
                stepLabel: 0
            }), (l()(),
            e.kb(0, null, 0, 1, null, Ga)), e.rb(580, 16384, [[145, 4]], 0, K.e, [e.O], null, null), (l()(),
            e.sb(581, 0, null, 0, 5, "div", [["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(582, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(583, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(584, 0, null, null, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"], ["style", "font-size: 1em; color: #3f51b5;"]], null, null, null, null, null)), e.rb(585, 16384, null, 0, M.h, [], null, null), (l()(),
            e.Kb(-1, null, ["Por favor, verifique todos os componentes, turmas e hor\xe1rios e condi\xe7\xf5es de pagamento. Confirme no final da p\xe1gina."])), (l()(),
            e.sb(587, 0, null, 0, 22, "div", [["fxFlex", "97"], ["fxLayout", "row"], ["fxLayoutAlign", "space-between start"], ["fxLayoutGap", "5px"], ["style", "margin-left: 8px;"]], null, null, null, null, null)), e.rb(588, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(589, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(590, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(591, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(592, 0, null, null, 4, "div", [["fxFlex", "55"], ["fxLayout", "column"]], null, null, null, null, null)), e.rb(593, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(594, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Ka)), e.rb(596, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.sb(597, 0, null, null, 12, "div", [["fxFlex", "45"], ["fxLayout", "column"]], null, null, null, null, null)), e.rb(598, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(599, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(600, 0, null, null, 5, "mat-card", [["class", "mat-card"], ["style", "margin-bottom: 5px;"]], null, null, null, D.d, D.a)), e.rb(601, 49152, null, 0, M.a, [], null, null), (l()(),
            e.kb(16777216, null, 0, 1, null, Ha)), e.rb(603, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.kb(16777216, null, 0, 1, null, Ua)), e.rb(605, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Qa)), e.rb(607, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Ja)), e.rb(609, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(610, 0, null, 0, 10, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(611, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(612, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(613, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(614, 0, null, null, 6, "mat-card", [["class", "mat-card"], ["fxFlex", "95"]], null, null, null, D.d, D.a)), e.rb(615, 49152, null, 0, M.a, [], null, null), e.rb(616, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.kb(16777216, null, 0, 1, null, Xa)), e.rb(618, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, 0, 1, null, Wa)), e.rb(620, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(621, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(622, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(623, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(624, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(625, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(626, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(627, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(628, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(629, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(630, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(631, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(632, 0, null, 0, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(633, 0, null, 0, 0, "br", [], null, null, null, null, null))], function(l, n) {
                var a = n.component;
                l(n, 1, 0, ""),
                l(n, 6, 0, a.contatoFormGroup, !0),
                l(n, 13, 0, a.contatoFormGroup),
                l(n, 20, 0, "column"),
                l(n, 27, 0, "column"),
                l(n, 29, 0, "row", "column"),
                l(n, 30, 0, "20px", "0px"),
                l(n, 40, 0, ""),
                l(n, 44, 0, "email"),
                l(n, 46, 0, "E-mail"),
                l(n, 58, 0, ""),
                l(n, 61, 0, "(00) 00000-0000"),
                l(n, 65, 0, "telCelular"),
                l(n, 67, 0, "Tel. celular"),
                l(n, 71, 0, "row", "column"),
                l(n, 72, 0, "20px", "0px"),
                l(n, 82, 0, ""),
                l(n, 85, 0, "(00) 0000-0000"),
                l(n, 89, 0, "telResidencial"),
                l(n, 91, 0, "Tel. residencial"),
                l(n, 103, 0, ""),
                l(n, 106, 0, "(00) 0000-0000"),
                l(n, 110, 0, "telComercial"),
                l(n, 112, 0, "Tel. comercial"),
                l(n, 116, 0, "end center"),
                l(n, 118, 0, "primary"),
                l(n, 123, 0, a.thirdFormGroup),
                l(n, 130, 0, a.thirdFormGroup),
                l(n, 133, 0, "column"),
                l(n, 137, 0, "row", "column"),
                l(n, 138, 0, "15px"),
                l(n, 139, 0, "space-between center"),
                l(n, 140, 0, ""),
                l(n, 142, 0, "endereco"),
                l(n, 145, 0, "50"),
                l(n, 147, 0, "row", "column"),
                l(n, 148, 0, "15px"),
                l(n, 152, 0, "row", "column"),
                l(n, 153, 0, "15px"),
                l(n, 163, 0, "30%"),
                l(n, 165, 0, ""),
                l(n, 169, 0, "cep"),
                l(n, 171, 0, "CEP", ""),
                l(n, 175, 0, a.thirdFormGroup.get("endereco.cep").hasError("required")),
                l(n, 177, 0, "row", "column"),
                l(n, 178, 0, "end center"),
                l(n, 180, 0, "primary"),
                l(n, 181, 0, a.position.value, "Busque pelo CEP."),
                l(n, 183, 0),
                l(n, 187, 0, "row", "column"),
                l(n, 188, 0, "15px"),
                l(n, 198, 0, "60%"),
                l(n, 200, 0, ""),
                l(n, 204, 0, "logradouro"),
                l(n, 206, 0, "Logradouro", ""),
                l(n, 210, 0, a.thirdFormGroup.get("endereco.logradouro").hasError("required")),
                l(n, 212, 0, "row", "column"),
                l(n, 213, 0, "15px"),
                l(n, 223, 0, "60%"),
                l(n, 225, 0, ""),
                l(n, 229, 0, "numero"),
                l(n, 231, 0, "Numero", ""),
                l(n, 233, 0, a.position.value, "Caso n\xe3o tenha n\xfamero, informe S/N."),
                l(n, 236, 0, a.thirdFormGroup.get("endereco.numero").hasError("required")),
                l(n, 238, 0, "row", "column"),
                l(n, 239, 0, "15px"),
                l(n, 249, 0, "60%"),
                l(n, 253, 0, "complemento"),
                l(n, 255, 0, "Complemento"),
                l(n, 259, 0, "row", "column"),
                l(n, 260, 0, "15px"),
                l(n, 270, 0, "60%"),
                l(n, 272, 0, ""),
                l(n, 276, 0, "bairro"),
                l(n, 278, 0, "Bairro", ""),
                l(n, 282, 0, a.thirdFormGroup.get("endereco.bairro").hasError("required")),
                l(n, 284, 0, "row", "column"),
                l(n, 285, 0, "15px"),
                l(n, 295, 0, "60%"),
                l(n, 297, 0, ""),
                l(n, 301, 0, "cidade"),
                l(n, 303, 0, "Cidade", ""),
                l(n, 307, 0, a.thirdFormGroup.get("endereco.cidade").hasError("required")),
                l(n, 309, 0, "enderecoDeOrigem"),
                l(n, 312, 0, "50"),
                l(n, 314, 0, "row", "column"),
                l(n, 315, 0, "15px"),
                l(n, 319, 0, "row", "column"),
                l(n, 320, 0, "15px"),
                l(n, 330, 0, "30%"),
                l(n, 334, 0, "cep"),
                l(n, 336, 0, "CEP"),
                l(n, 340, 0, "row", "column"),
                l(n, 341, 0, "15px"),
                l(n, 342, 0, "end center"),
                l(n, 344, 0, "primary"),
                l(n, 345, 0, a.position.value, "Busque pelo CEP."),
                l(n, 347, 0),
                l(n, 351, 0, "row", "column"),
                l(n, 352, 0, "15px"),
                l(n, 362, 0, "60%"),
                l(n, 366, 0, "logradouro"),
                l(n, 368, 0, "Logradouro"),
                l(n, 372, 0, "row", "column"),
                l(n, 373, 0, "15px"),
                l(n, 383, 0, "60%"),
                l(n, 387, 0, "numero"),
                l(n, 389, 0, "Numero"),
                l(n, 391, 0, a.position.value, "Caso n\xe3o tenha n\xfamero, informe S/N."),
                l(n, 394, 0, "row", "column"),
                l(n, 395, 0, "15px"),
                l(n, 405, 0, "60%"),
                l(n, 409, 0, "complemento"),
                l(n, 411, 0, "Complemento"),
                l(n, 415, 0, "row", "column"),
                l(n, 416, 0, "15px"),
                l(n, 426, 0, "60%"),
                l(n, 430, 0, "bairro"),
                l(n, 432, 0, "Bairro"),
                l(n, 436, 0, "row", "column"),
                l(n, 437, 0, "15px"),
                l(n, 447, 0, "60%"),
                l(n, 451, 0, "cidade"),
                l(n, 453, 0, "Cidade"),
                l(n, 457, 0, "row", "column"),
                l(n, 458, 0, "15px"),
                l(n, 460, 0, "primary"),
                l(n, 464, 0),
                l(n, 469, 0, ""),
                l(n, 471, 0, !a.thirdFormGroup.valid, "primary"),
                l(n, 476, 0),
                l(n, 481, 0, a.secondFormGroup, !0),
                l(n, 486, 0, "column"),
                l(n, 488, 0, "row"),
                l(n, 489, 0, "space-between center");
                var e = l(n, 498, 0, "/aa-solicitacoes/fale-conosco", l(n, 497, 0, "matricula_historico", "MATR\xcdCULA"));
                l(n, 496, 0, e),
                l(n, 501, 0, a.tabIndex),
                l(n, 504, 0, "SELE\xc7\xc3O DE COMPONENTES"),
                l(n, 509, 0, "row"),
                l(n, 510, 0, ""),
                l(n, 512, 0, "column"),
                l(n, 513, 0, "64"),
                l(n, 516, 0, "50"),
                l(n, 518, 0),
                l(n, 520, 0, null == a.componentes ? null : null == a.componentes.cursoComTurmas ? null : a.componentes.cursoComTurmas.periodos, 0),
                l(n, 522, 0, "column"),
                l(n, 523, 0, "35"),
                l(n, 527, 0),
                l(n, 533, 0, a.componentesAdicionados.length > 0 && !a.componentesCompletos || a.componentesAdicionados.length > 0 && a.componentesAdicionados.length > a.limiteMaximo || a.componentesAdicionados.length < a.limiteMinimo),
                l(n, 536, 0, a.componentesAdicionados),
                l(n, 538, 0, a.simulacao.subtotal > 0),
                l(n, 540, 0, a.simulacao.subtotal > 0 && (a.simulacao.percentualProuni > 0 || a.simulacao.percentualFies > 0 || a.simulacao.descontoConvenio > 0)),
                l(n, 542, 0, a.simulacao.totalAPagar > 0),
                l(n, 544, 0, a.componentesAdicionados.length > 0),
                l(n, 546, 0, ""),
                l(n, 547, 0, "MATRIZ CURRICULAR"),
                l(n, 552, 0, null == a.componentes ? null : a.componentes.matrizDoAluno, a.componentesAdicionados),
                l(n, 554, 0, "HOR\xc1RIO"),
                l(n, 559, 0, a.componentesAdicionados.length < 1),
                l(n, 561, 0, "row"),
                l(n, 563, 0, "column"),
                l(n, 564, 0, "3px"),
                l(n, 565, 0, ""),
                l(n, 567, 0, null == a.mostraTurnos ? null : a.mostraTurnos.matutino),
                l(n, 570, 0, null == a.mostraTurnos ? null : a.mostraTurnos.vespertino),
                l(n, 573, 0, null == a.mostraTurnos ? null : a.mostraTurnos.noturno),
                l(n, 577, 0, !0),
                l(n, 582, 0, "row"),
                l(n, 583, 0, "center center"),
                l(n, 588, 0, "row"),
                l(n, 589, 0, "5px"),
                l(n, 590, 0, "space-between start"),
                l(n, 591, 0, "97"),
                l(n, 593, 0, "column"),
                l(n, 594, 0, "55"),
                l(n, 596, 0, a.componentesAdicionados),
                l(n, 598, 0, "column"),
                l(n, 599, 0, "45"),
                l(n, 603, 0, a.componentesAdicionados),
                l(n, 605, 0, a.simulacao.subtotal > 0),
                l(n, 607, 0, a.simulacao.subtotal > 0 && (a.simulacao.percentualProuni > 0 || a.simulacao.percentualFies > 0 || a.simulacao.descontoConvenio > 0)),
                l(n, 609, 0, a.simulacao.totalAPagar > 0),
                l(n, 611, 0, "row"),
                l(n, 612, 0, "center center"),
                l(n, 613, 0, ""),
                l(n, 616, 0, "95"),
                l(n, 618, 0, !a.processandoMatricula),
                l(n, 620, 0, a.processandoMatricula)
            }, function(l, n) {
                var a = n.component;
                l(n, 0, 0, "end" == e.Cb(n, 1).labelPosition, "bottom" == e.Cb(n, 1).labelPosition),
                l(n, 11, 0, e.Cb(n, 15).ngClassUntouched, e.Cb(n, 15).ngClassTouched, e.Cb(n, 15).ngClassPristine, e.Cb(n, 15).ngClassDirty, e.Cb(n, 15).ngClassValid, e.Cb(n, 15).ngClassInvalid, e.Cb(n, 15).ngClassPending),
                l(n, 31, 1, ["standard" == e.Cb(n, 32).appearance, "fill" == e.Cb(n, 32).appearance, "outline" == e.Cb(n, 32).appearance, "legacy" == e.Cb(n, 32).appearance, e.Cb(n, 32)._control.errorState, e.Cb(n, 32)._canLabelFloat, e.Cb(n, 32)._shouldLabelFloat(), e.Cb(n, 32)._hasFloatingLabel(), e.Cb(n, 32)._hideControlPlaceholder(), e.Cb(n, 32)._control.disabled, e.Cb(n, 32)._control.autofilled, e.Cb(n, 32)._control.focused, "accent" == e.Cb(n, 32).color, "warn" == e.Cb(n, 32).color, e.Cb(n, 32)._shouldForward("untouched"), e.Cb(n, 32)._shouldForward("touched"), e.Cb(n, 32)._shouldForward("pristine"), e.Cb(n, 32)._shouldForward("dirty"), e.Cb(n, 32)._shouldForward("valid"), e.Cb(n, 32)._shouldForward("invalid"), e.Cb(n, 32)._shouldForward("pending"), !e.Cb(n, 32)._animationsEnabled]),
                l(n, 41, 1, [e.Cb(n, 46)._isServer, e.Cb(n, 46).id, e.Cb(n, 46).placeholder, e.Cb(n, 46).disabled, e.Cb(n, 46).required, e.Cb(n, 46).readonly && !e.Cb(n, 46)._isNativeSelect || null, e.Cb(n, 46)._ariaDescribedby || null, e.Cb(n, 46).errorState, e.Cb(n, 46).required.toString(), e.Cb(n, 47).ngClassUntouched, e.Cb(n, 47).ngClassTouched, e.Cb(n, 47).ngClassPristine, e.Cb(n, 47).ngClassDirty, e.Cb(n, 47).ngClassValid, e.Cb(n, 47).ngClassInvalid, e.Cb(n, 47).ngClassPending]),
                l(n, 49, 1, ["standard" == e.Cb(n, 50).appearance, "fill" == e.Cb(n, 50).appearance, "outline" == e.Cb(n, 50).appearance, "legacy" == e.Cb(n, 50).appearance, e.Cb(n, 50)._control.errorState, e.Cb(n, 50)._canLabelFloat, e.Cb(n, 50)._shouldLabelFloat(), e.Cb(n, 50)._hasFloatingLabel(), e.Cb(n, 50)._hideControlPlaceholder(), e.Cb(n, 50)._control.disabled, e.Cb(n, 50)._control.autofilled, e.Cb(n, 50)._control.focused, "accent" == e.Cb(n, 50).color, "warn" == e.Cb(n, 50).color, e.Cb(n, 50)._shouldForward("untouched"), e.Cb(n, 50)._shouldForward("touched"), e.Cb(n, 50)._shouldForward("pristine"), e.Cb(n, 50)._shouldForward("dirty"), e.Cb(n, 50)._shouldForward("valid"), e.Cb(n, 50)._shouldForward("invalid"), e.Cb(n, 50)._shouldForward("pending"), !e.Cb(n, 50)._animationsEnabled]),
                l(n, 59, 1, [e.Cb(n, 67)._isServer, e.Cb(n, 67).id, e.Cb(n, 67).placeholder, e.Cb(n, 67).disabled, e.Cb(n, 67).required, e.Cb(n, 67).readonly && !e.Cb(n, 67)._isNativeSelect || null, e.Cb(n, 67)._ariaDescribedby || null, e.Cb(n, 67).errorState, e.Cb(n, 67).required.toString(), e.Cb(n, 68).ngClassUntouched, e.Cb(n, 68).ngClassTouched, e.Cb(n, 68).ngClassPristine, e.Cb(n, 68).ngClassDirty, e.Cb(n, 68).ngClassValid, e.Cb(n, 68).ngClassInvalid, e.Cb(n, 68).ngClassPending]),
                l(n, 73, 1, ["standard" == e.Cb(n, 74).appearance, "fill" == e.Cb(n, 74).appearance, "outline" == e.Cb(n, 74).appearance, "legacy" == e.Cb(n, 74).appearance, e.Cb(n, 74)._control.errorState, e.Cb(n, 74)._canLabelFloat, e.Cb(n, 74)._shouldLabelFloat(), e.Cb(n, 74)._hasFloatingLabel(), e.Cb(n, 74)._hideControlPlaceholder(), e.Cb(n, 74)._control.disabled, e.Cb(n, 74)._control.autofilled, e.Cb(n, 74)._control.focused, "accent" == e.Cb(n, 74).color, "warn" == e.Cb(n, 74).color, e.Cb(n, 74)._shouldForward("untouched"), e.Cb(n, 74)._shouldForward("touched"), e.Cb(n, 74)._shouldForward("pristine"), e.Cb(n, 74)._shouldForward("dirty"), e.Cb(n, 74)._shouldForward("valid"), e.Cb(n, 74)._shouldForward("invalid"), e.Cb(n, 74)._shouldForward("pending"), !e.Cb(n, 74)._animationsEnabled]),
                l(n, 83, 1, [e.Cb(n, 91)._isServer, e.Cb(n, 91).id, e.Cb(n, 91).placeholder, e.Cb(n, 91).disabled, e.Cb(n, 91).required, e.Cb(n, 91).readonly && !e.Cb(n, 91)._isNativeSelect || null, e.Cb(n, 91)._ariaDescribedby || null, e.Cb(n, 91).errorState, e.Cb(n, 91).required.toString(), e.Cb(n, 92).ngClassUntouched, e.Cb(n, 92).ngClassTouched, e.Cb(n, 92).ngClassPristine, e.Cb(n, 92).ngClassDirty, e.Cb(n, 92).ngClassValid, e.Cb(n, 92).ngClassInvalid, e.Cb(n, 92).ngClassPending]),
                l(n, 94, 1, ["standard" == e.Cb(n, 95).appearance, "fill" == e.Cb(n, 95).appearance, "outline" == e.Cb(n, 95).appearance, "legacy" == e.Cb(n, 95).appearance, e.Cb(n, 95)._control.errorState, e.Cb(n, 95)._canLabelFloat, e.Cb(n, 95)._shouldLabelFloat(), e.Cb(n, 95)._hasFloatingLabel(), e.Cb(n, 95)._hideControlPlaceholder(), e.Cb(n, 95)._control.disabled, e.Cb(n, 95)._control.autofilled, e.Cb(n, 95)._control.focused, "accent" == e.Cb(n, 95).color, "warn" == e.Cb(n, 95).color, e.Cb(n, 95)._shouldForward("untouched"), e.Cb(n, 95)._shouldForward("touched"), e.Cb(n, 95)._shouldForward("pristine"), e.Cb(n, 95)._shouldForward("dirty"), e.Cb(n, 95)._shouldForward("valid"), e.Cb(n, 95)._shouldForward("invalid"), e.Cb(n, 95)._shouldForward("pending"), !e.Cb(n, 95)._animationsEnabled]),
                l(n, 104, 1, [e.Cb(n, 112)._isServer, e.Cb(n, 112).id, e.Cb(n, 112).placeholder, e.Cb(n, 112).disabled, e.Cb(n, 112).required, e.Cb(n, 112).readonly && !e.Cb(n, 112)._isNativeSelect || null, e.Cb(n, 112)._ariaDescribedby || null, e.Cb(n, 112).errorState, e.Cb(n, 112).required.toString(), e.Cb(n, 113).ngClassUntouched, e.Cb(n, 113).ngClassTouched, e.Cb(n, 113).ngClassPristine, e.Cb(n, 113).ngClassDirty, e.Cb(n, 113).ngClassValid, e.Cb(n, 113).ngClassInvalid, e.Cb(n, 113).ngClassPending]),
                l(n, 117, 0, e.Cb(n, 118).disabled || null, "NoopAnimations" === e.Cb(n, 118)._animationMode, e.Cb(n, 120).type),
                l(n, 128, 0, e.Cb(n, 132).ngClassUntouched, e.Cb(n, 132).ngClassTouched, e.Cb(n, 132).ngClassPristine, e.Cb(n, 132).ngClassDirty, e.Cb(n, 132).ngClassValid, e.Cb(n, 132).ngClassInvalid, e.Cb(n, 132).ngClassPending),
                l(n, 141, 0, e.Cb(n, 144).ngClassUntouched, e.Cb(n, 144).ngClassTouched, e.Cb(n, 144).ngClassPristine, e.Cb(n, 144).ngClassDirty, e.Cb(n, 144).ngClassValid, e.Cb(n, 144).ngClassInvalid, e.Cb(n, 144).ngClassPending),
                l(n, 154, 1, ["standard" == e.Cb(n, 155).appearance, "fill" == e.Cb(n, 155).appearance, "outline" == e.Cb(n, 155).appearance, "legacy" == e.Cb(n, 155).appearance, e.Cb(n, 155)._control.errorState, e.Cb(n, 155)._canLabelFloat, e.Cb(n, 155)._shouldLabelFloat(), e.Cb(n, 155)._hasFloatingLabel(), e.Cb(n, 155)._hideControlPlaceholder(), e.Cb(n, 155)._control.disabled, e.Cb(n, 155)._control.autofilled, e.Cb(n, 155)._control.focused, "accent" == e.Cb(n, 155).color, "warn" == e.Cb(n, 155).color, e.Cb(n, 155)._shouldForward("untouched"), e.Cb(n, 155)._shouldForward("touched"), e.Cb(n, 155)._shouldForward("pristine"), e.Cb(n, 155)._shouldForward("dirty"), e.Cb(n, 155)._shouldForward("valid"), e.Cb(n, 155)._shouldForward("invalid"), e.Cb(n, 155)._shouldForward("pending"), !e.Cb(n, 155)._animationsEnabled]),
                l(n, 164, 1, [e.Cb(n, 165).required ? "" : null, e.Cb(n, 171)._isServer, e.Cb(n, 171).id, e.Cb(n, 171).placeholder, e.Cb(n, 171).disabled, e.Cb(n, 171).required, e.Cb(n, 171).readonly && !e.Cb(n, 171)._isNativeSelect || null, e.Cb(n, 171)._ariaDescribedby || null, e.Cb(n, 171).errorState, e.Cb(n, 171).required.toString(), e.Cb(n, 172).ngClassUntouched, e.Cb(n, 172).ngClassTouched, e.Cb(n, 172).ngClassPristine, e.Cb(n, 172).ngClassDirty, e.Cb(n, 172).ngClassValid, e.Cb(n, 172).ngClassInvalid, e.Cb(n, 172).ngClassPending]),
                l(n, 179, 0, e.Cb(n, 180).disabled || null, "NoopAnimations" === e.Cb(n, 180)._animationMode),
                l(n, 182, 0, e.Cb(n, 183).inline, "primary" !== e.Cb(n, 183).color && "accent" !== e.Cb(n, 183).color && "warn" !== e.Cb(n, 183).color),
                l(n, 189, 1, ["standard" == e.Cb(n, 190).appearance, "fill" == e.Cb(n, 190).appearance, "outline" == e.Cb(n, 190).appearance, "legacy" == e.Cb(n, 190).appearance, e.Cb(n, 190)._control.errorState, e.Cb(n, 190)._canLabelFloat, e.Cb(n, 190)._shouldLabelFloat(), e.Cb(n, 190)._hasFloatingLabel(), e.Cb(n, 190)._hideControlPlaceholder(), e.Cb(n, 190)._control.disabled, e.Cb(n, 190)._control.autofilled, e.Cb(n, 190)._control.focused, "accent" == e.Cb(n, 190).color, "warn" == e.Cb(n, 190).color, e.Cb(n, 190)._shouldForward("untouched"), e.Cb(n, 190)._shouldForward("touched"), e.Cb(n, 190)._shouldForward("pristine"), e.Cb(n, 190)._shouldForward("dirty"), e.Cb(n, 190)._shouldForward("valid"), e.Cb(n, 190)._shouldForward("invalid"), e.Cb(n, 190)._shouldForward("pending"), !e.Cb(n, 190)._animationsEnabled]),
                l(n, 199, 1, [e.Cb(n, 200).required ? "" : null, e.Cb(n, 206)._isServer, e.Cb(n, 206).id, e.Cb(n, 206).placeholder, e.Cb(n, 206).disabled, e.Cb(n, 206).required, e.Cb(n, 206).readonly && !e.Cb(n, 206)._isNativeSelect || null, e.Cb(n, 206)._ariaDescribedby || null, e.Cb(n, 206).errorState, e.Cb(n, 206).required.toString(), e.Cb(n, 207).ngClassUntouched, e.Cb(n, 207).ngClassTouched, e.Cb(n, 207).ngClassPristine, e.Cb(n, 207).ngClassDirty, e.Cb(n, 207).ngClassValid, e.Cb(n, 207).ngClassInvalid, e.Cb(n, 207).ngClassPending]),
                l(n, 214, 1, ["standard" == e.Cb(n, 215).appearance, "fill" == e.Cb(n, 215).appearance, "outline" == e.Cb(n, 215).appearance, "legacy" == e.Cb(n, 215).appearance, e.Cb(n, 215)._control.errorState, e.Cb(n, 215)._canLabelFloat, e.Cb(n, 215)._shouldLabelFloat(), e.Cb(n, 215)._hasFloatingLabel(), e.Cb(n, 215)._hideControlPlaceholder(), e.Cb(n, 215)._control.disabled, e.Cb(n, 215)._control.autofilled, e.Cb(n, 215)._control.focused, "accent" == e.Cb(n, 215).color, "warn" == e.Cb(n, 215).color, e.Cb(n, 215)._shouldForward("untouched"), e.Cb(n, 215)._shouldForward("touched"), e.Cb(n, 215)._shouldForward("pristine"), e.Cb(n, 215)._shouldForward("dirty"), e.Cb(n, 215)._shouldForward("valid"), e.Cb(n, 215)._shouldForward("invalid"), e.Cb(n, 215)._shouldForward("pending"), !e.Cb(n, 215)._animationsEnabled]),
                l(n, 224, 1, [e.Cb(n, 225).required ? "" : null, e.Cb(n, 231)._isServer, e.Cb(n, 231).id, e.Cb(n, 231).placeholder, e.Cb(n, 231).disabled, e.Cb(n, 231).required, e.Cb(n, 231).readonly && !e.Cb(n, 231)._isNativeSelect || null, e.Cb(n, 231)._ariaDescribedby || null, e.Cb(n, 231).errorState, e.Cb(n, 231).required.toString(), e.Cb(n, 232).ngClassUntouched, e.Cb(n, 232).ngClassTouched, e.Cb(n, 232).ngClassPristine, e.Cb(n, 232).ngClassDirty, e.Cb(n, 232).ngClassValid, e.Cb(n, 232).ngClassInvalid, e.Cb(n, 232).ngClassPending]),
                l(n, 240, 1, ["standard" == e.Cb(n, 241).appearance, "fill" == e.Cb(n, 241).appearance, "outline" == e.Cb(n, 241).appearance, "legacy" == e.Cb(n, 241).appearance, e.Cb(n, 241)._control.errorState, e.Cb(n, 241)._canLabelFloat, e.Cb(n, 241)._shouldLabelFloat(), e.Cb(n, 241)._hasFloatingLabel(), e.Cb(n, 241)._hideControlPlaceholder(), e.Cb(n, 241)._control.disabled, e.Cb(n, 241)._control.autofilled, e.Cb(n, 241)._control.focused, "accent" == e.Cb(n, 241).color, "warn" == e.Cb(n, 241).color, e.Cb(n, 241)._shouldForward("untouched"), e.Cb(n, 241)._shouldForward("touched"), e.Cb(n, 241)._shouldForward("pristine"), e.Cb(n, 241)._shouldForward("dirty"), e.Cb(n, 241)._shouldForward("valid"), e.Cb(n, 241)._shouldForward("invalid"), e.Cb(n, 241)._shouldForward("pending"), !e.Cb(n, 241)._animationsEnabled]),
                l(n, 250, 1, [e.Cb(n, 255)._isServer, e.Cb(n, 255).id, e.Cb(n, 255).placeholder, e.Cb(n, 255).disabled, e.Cb(n, 255).required, e.Cb(n, 255).readonly && !e.Cb(n, 255)._isNativeSelect || null, e.Cb(n, 255)._ariaDescribedby || null, e.Cb(n, 255).errorState, e.Cb(n, 255).required.toString(), e.Cb(n, 256).ngClassUntouched, e.Cb(n, 256).ngClassTouched, e.Cb(n, 256).ngClassPristine, e.Cb(n, 256).ngClassDirty, e.Cb(n, 256).ngClassValid, e.Cb(n, 256).ngClassInvalid, e.Cb(n, 256).ngClassPending]),
                l(n, 261, 1, ["standard" == e.Cb(n, 262).appearance, "fill" == e.Cb(n, 262).appearance, "outline" == e.Cb(n, 262).appearance, "legacy" == e.Cb(n, 262).appearance, e.Cb(n, 262)._control.errorState, e.Cb(n, 262)._canLabelFloat, e.Cb(n, 262)._shouldLabelFloat(), e.Cb(n, 262)._hasFloatingLabel(), e.Cb(n, 262)._hideControlPlaceholder(), e.Cb(n, 262)._control.disabled, e.Cb(n, 262)._control.autofilled, e.Cb(n, 262)._control.focused, "accent" == e.Cb(n, 262).color, "warn" == e.Cb(n, 262).color, e.Cb(n, 262)._shouldForward("untouched"), e.Cb(n, 262)._shouldForward("touched"), e.Cb(n, 262)._shouldForward("pristine"), e.Cb(n, 262)._shouldForward("dirty"), e.Cb(n, 262)._shouldForward("valid"), e.Cb(n, 262)._shouldForward("invalid"), e.Cb(n, 262)._shouldForward("pending"), !e.Cb(n, 262)._animationsEnabled]),
                l(n, 271, 1, [e.Cb(n, 272).required ? "" : null, e.Cb(n, 278)._isServer, e.Cb(n, 278).id, e.Cb(n, 278).placeholder, e.Cb(n, 278).disabled, e.Cb(n, 278).required, e.Cb(n, 278).readonly && !e.Cb(n, 278)._isNativeSelect || null, e.Cb(n, 278)._ariaDescribedby || null, e.Cb(n, 278).errorState, e.Cb(n, 278).required.toString(), e.Cb(n, 279).ngClassUntouched, e.Cb(n, 279).ngClassTouched, e.Cb(n, 279).ngClassPristine, e.Cb(n, 279).ngClassDirty, e.Cb(n, 279).ngClassValid, e.Cb(n, 279).ngClassInvalid, e.Cb(n, 279).ngClassPending]),
                l(n, 286, 1, ["standard" == e.Cb(n, 287).appearance, "fill" == e.Cb(n, 287).appearance, "outline" == e.Cb(n, 287).appearance, "legacy" == e.Cb(n, 287).appearance, e.Cb(n, 287)._control.errorState, e.Cb(n, 287)._canLabelFloat, e.Cb(n, 287)._shouldLabelFloat(), e.Cb(n, 287)._hasFloatingLabel(), e.Cb(n, 287)._hideControlPlaceholder(), e.Cb(n, 287)._control.disabled, e.Cb(n, 287)._control.autofilled, e.Cb(n, 287)._control.focused, "accent" == e.Cb(n, 287).color, "warn" == e.Cb(n, 287).color, e.Cb(n, 287)._shouldForward("untouched"), e.Cb(n, 287)._shouldForward("touched"), e.Cb(n, 287)._shouldForward("pristine"), e.Cb(n, 287)._shouldForward("dirty"), e.Cb(n, 287)._shouldForward("valid"), e.Cb(n, 287)._shouldForward("invalid"), e.Cb(n, 287)._shouldForward("pending"), !e.Cb(n, 287)._animationsEnabled]),
                l(n, 296, 1, [e.Cb(n, 297).required ? "" : null, e.Cb(n, 303)._isServer, e.Cb(n, 303).id, e.Cb(n, 303).placeholder, e.Cb(n, 303).disabled, e.Cb(n, 303).required, e.Cb(n, 303).readonly && !e.Cb(n, 303)._isNativeSelect || null, e.Cb(n, 303)._ariaDescribedby || null, e.Cb(n, 303).errorState, e.Cb(n, 303).required.toString(), e.Cb(n, 304).ngClassUntouched, e.Cb(n, 304).ngClassTouched, e.Cb(n, 304).ngClassPristine, e.Cb(n, 304).ngClassDirty, e.Cb(n, 304).ngClassValid, e.Cb(n, 304).ngClassInvalid, e.Cb(n, 304).ngClassPending]),
                l(n, 308, 0, e.Cb(n, 311).ngClassUntouched, e.Cb(n, 311).ngClassTouched, e.Cb(n, 311).ngClassPristine, e.Cb(n, 311).ngClassDirty, e.Cb(n, 311).ngClassValid, e.Cb(n, 311).ngClassInvalid, e.Cb(n, 311).ngClassPending),
                l(n, 321, 1, ["standard" == e.Cb(n, 322).appearance, "fill" == e.Cb(n, 322).appearance, "outline" == e.Cb(n, 322).appearance, "legacy" == e.Cb(n, 322).appearance, e.Cb(n, 322)._control.errorState, e.Cb(n, 322)._canLabelFloat, e.Cb(n, 322)._shouldLabelFloat(), e.Cb(n, 322)._hasFloatingLabel(), e.Cb(n, 322)._hideControlPlaceholder(), e.Cb(n, 322)._control.disabled, e.Cb(n, 322)._control.autofilled, e.Cb(n, 322)._control.focused, "accent" == e.Cb(n, 322).color, "warn" == e.Cb(n, 322).color, e.Cb(n, 322)._shouldForward("untouched"), e.Cb(n, 322)._shouldForward("touched"), e.Cb(n, 322)._shouldForward("pristine"), e.Cb(n, 322)._shouldForward("dirty"), e.Cb(n, 322)._shouldForward("valid"), e.Cb(n, 322)._shouldForward("invalid"), e.Cb(n, 322)._shouldForward("pending"), !e.Cb(n, 322)._animationsEnabled]),
                l(n, 331, 1, [e.Cb(n, 336)._isServer, e.Cb(n, 336).id, e.Cb(n, 336).placeholder, e.Cb(n, 336).disabled, e.Cb(n, 336).required, e.Cb(n, 336).readonly && !e.Cb(n, 336)._isNativeSelect || null, e.Cb(n, 336)._ariaDescribedby || null, e.Cb(n, 336).errorState, e.Cb(n, 336).required.toString(), e.Cb(n, 337).ngClassUntouched, e.Cb(n, 337).ngClassTouched, e.Cb(n, 337).ngClassPristine, e.Cb(n, 337).ngClassDirty, e.Cb(n, 337).ngClassValid, e.Cb(n, 337).ngClassInvalid, e.Cb(n, 337).ngClassPending]),
                l(n, 343, 0, e.Cb(n, 344).disabled || null, "NoopAnimations" === e.Cb(n, 344)._animationMode),
                l(n, 346, 0, e.Cb(n, 347).inline, "primary" !== e.Cb(n, 347).color && "accent" !== e.Cb(n, 347).color && "warn" !== e.Cb(n, 347).color),
                l(n, 353, 1, ["standard" == e.Cb(n, 354).appearance, "fill" == e.Cb(n, 354).appearance, "outline" == e.Cb(n, 354).appearance, "legacy" == e.Cb(n, 354).appearance, e.Cb(n, 354)._control.errorState, e.Cb(n, 354)._canLabelFloat, e.Cb(n, 354)._shouldLabelFloat(), e.Cb(n, 354)._hasFloatingLabel(), e.Cb(n, 354)._hideControlPlaceholder(), e.Cb(n, 354)._control.disabled, e.Cb(n, 354)._control.autofilled, e.Cb(n, 354)._control.focused, "accent" == e.Cb(n, 354).color, "warn" == e.Cb(n, 354).color, e.Cb(n, 354)._shouldForward("untouched"), e.Cb(n, 354)._shouldForward("touched"), e.Cb(n, 354)._shouldForward("pristine"), e.Cb(n, 354)._shouldForward("dirty"), e.Cb(n, 354)._shouldForward("valid"), e.Cb(n, 354)._shouldForward("invalid"), e.Cb(n, 354)._shouldForward("pending"), !e.Cb(n, 354)._animationsEnabled]),
                l(n, 363, 1, [e.Cb(n, 368)._isServer, e.Cb(n, 368).id, e.Cb(n, 368).placeholder, e.Cb(n, 368).disabled, e.Cb(n, 368).required, e.Cb(n, 368).readonly && !e.Cb(n, 368)._isNativeSelect || null, e.Cb(n, 368)._ariaDescribedby || null, e.Cb(n, 368).errorState, e.Cb(n, 368).required.toString(), e.Cb(n, 369).ngClassUntouched, e.Cb(n, 369).ngClassTouched, e.Cb(n, 369).ngClassPristine, e.Cb(n, 369).ngClassDirty, e.Cb(n, 369).ngClassValid, e.Cb(n, 369).ngClassInvalid, e.Cb(n, 369).ngClassPending]),
                l(n, 374, 1, ["standard" == e.Cb(n, 375).appearance, "fill" == e.Cb(n, 375).appearance, "outline" == e.Cb(n, 375).appearance, "legacy" == e.Cb(n, 375).appearance, e.Cb(n, 375)._control.errorState, e.Cb(n, 375)._canLabelFloat, e.Cb(n, 375)._shouldLabelFloat(), e.Cb(n, 375)._hasFloatingLabel(), e.Cb(n, 375)._hideControlPlaceholder(), e.Cb(n, 375)._control.disabled, e.Cb(n, 375)._control.autofilled, e.Cb(n, 375)._control.focused, "accent" == e.Cb(n, 375).color, "warn" == e.Cb(n, 375).color, e.Cb(n, 375)._shouldForward("untouched"), e.Cb(n, 375)._shouldForward("touched"), e.Cb(n, 375)._shouldForward("pristine"), e.Cb(n, 375)._shouldForward("dirty"), e.Cb(n, 375)._shouldForward("valid"), e.Cb(n, 375)._shouldForward("invalid"), e.Cb(n, 375)._shouldForward("pending"), !e.Cb(n, 375)._animationsEnabled]),
                l(n, 384, 1, [e.Cb(n, 389)._isServer, e.Cb(n, 389).id, e.Cb(n, 389).placeholder, e.Cb(n, 389).disabled, e.Cb(n, 389).required, e.Cb(n, 389).readonly && !e.Cb(n, 389)._isNativeSelect || null, e.Cb(n, 389)._ariaDescribedby || null, e.Cb(n, 389).errorState, e.Cb(n, 389).required.toString(), e.Cb(n, 390).ngClassUntouched, e.Cb(n, 390).ngClassTouched, e.Cb(n, 390).ngClassPristine, e.Cb(n, 390).ngClassDirty, e.Cb(n, 390).ngClassValid, e.Cb(n, 390).ngClassInvalid, e.Cb(n, 390).ngClassPending]),
                l(n, 396, 1, ["standard" == e.Cb(n, 397).appearance, "fill" == e.Cb(n, 397).appearance, "outline" == e.Cb(n, 397).appearance, "legacy" == e.Cb(n, 397).appearance, e.Cb(n, 397)._control.errorState, e.Cb(n, 397)._canLabelFloat, e.Cb(n, 397)._shouldLabelFloat(), e.Cb(n, 397)._hasFloatingLabel(), e.Cb(n, 397)._hideControlPlaceholder(), e.Cb(n, 397)._control.disabled, e.Cb(n, 397)._control.autofilled, e.Cb(n, 397)._control.focused, "accent" == e.Cb(n, 397).color, "warn" == e.Cb(n, 397).color, e.Cb(n, 397)._shouldForward("untouched"), e.Cb(n, 397)._shouldForward("touched"), e.Cb(n, 397)._shouldForward("pristine"), e.Cb(n, 397)._shouldForward("dirty"), e.Cb(n, 397)._shouldForward("valid"), e.Cb(n, 397)._shouldForward("invalid"), e.Cb(n, 397)._shouldForward("pending"), !e.Cb(n, 397)._animationsEnabled]),
                l(n, 406, 1, [e.Cb(n, 411)._isServer, e.Cb(n, 411).id, e.Cb(n, 411).placeholder, e.Cb(n, 411).disabled, e.Cb(n, 411).required, e.Cb(n, 411).readonly && !e.Cb(n, 411)._isNativeSelect || null, e.Cb(n, 411)._ariaDescribedby || null, e.Cb(n, 411).errorState, e.Cb(n, 411).required.toString(), e.Cb(n, 412).ngClassUntouched, e.Cb(n, 412).ngClassTouched, e.Cb(n, 412).ngClassPristine, e.Cb(n, 412).ngClassDirty, e.Cb(n, 412).ngClassValid, e.Cb(n, 412).ngClassInvalid, e.Cb(n, 412).ngClassPending]),
                l(n, 417, 1, ["standard" == e.Cb(n, 418).appearance, "fill" == e.Cb(n, 418).appearance, "outline" == e.Cb(n, 418).appearance, "legacy" == e.Cb(n, 418).appearance, e.Cb(n, 418)._control.errorState, e.Cb(n, 418)._canLabelFloat, e.Cb(n, 418)._shouldLabelFloat(), e.Cb(n, 418)._hasFloatingLabel(), e.Cb(n, 418)._hideControlPlaceholder(), e.Cb(n, 418)._control.disabled, e.Cb(n, 418)._control.autofilled, e.Cb(n, 418)._control.focused, "accent" == e.Cb(n, 418).color, "warn" == e.Cb(n, 418).color, e.Cb(n, 418)._shouldForward("untouched"), e.Cb(n, 418)._shouldForward("touched"), e.Cb(n, 418)._shouldForward("pristine"), e.Cb(n, 418)._shouldForward("dirty"), e.Cb(n, 418)._shouldForward("valid"), e.Cb(n, 418)._shouldForward("invalid"), e.Cb(n, 418)._shouldForward("pending"), !e.Cb(n, 418)._animationsEnabled]),
                l(n, 427, 1, [e.Cb(n, 432)._isServer, e.Cb(n, 432).id, e.Cb(n, 432).placeholder, e.Cb(n, 432).disabled, e.Cb(n, 432).required, e.Cb(n, 432).readonly && !e.Cb(n, 432)._isNativeSelect || null, e.Cb(n, 432)._ariaDescribedby || null, e.Cb(n, 432).errorState, e.Cb(n, 432).required.toString(), e.Cb(n, 433).ngClassUntouched, e.Cb(n, 433).ngClassTouched, e.Cb(n, 433).ngClassPristine, e.Cb(n, 433).ngClassDirty, e.Cb(n, 433).ngClassValid, e.Cb(n, 433).ngClassInvalid, e.Cb(n, 433).ngClassPending]),
                l(n, 438, 1, ["standard" == e.Cb(n, 439).appearance, "fill" == e.Cb(n, 439).appearance, "outline" == e.Cb(n, 439).appearance, "legacy" == e.Cb(n, 439).appearance, e.Cb(n, 439)._control.errorState, e.Cb(n, 439)._canLabelFloat, e.Cb(n, 439)._shouldLabelFloat(), e.Cb(n, 439)._hasFloatingLabel(), e.Cb(n, 439)._hideControlPlaceholder(), e.Cb(n, 439)._control.disabled, e.Cb(n, 439)._control.autofilled, e.Cb(n, 439)._control.focused, "accent" == e.Cb(n, 439).color, "warn" == e.Cb(n, 439).color, e.Cb(n, 439)._shouldForward("untouched"), e.Cb(n, 439)._shouldForward("touched"), e.Cb(n, 439)._shouldForward("pristine"), e.Cb(n, 439)._shouldForward("dirty"), e.Cb(n, 439)._shouldForward("valid"), e.Cb(n, 439)._shouldForward("invalid"), e.Cb(n, 439)._shouldForward("pending"), !e.Cb(n, 439)._animationsEnabled]),
                l(n, 448, 1, [e.Cb(n, 453)._isServer, e.Cb(n, 453).id, e.Cb(n, 453).placeholder, e.Cb(n, 453).disabled, e.Cb(n, 453).required, e.Cb(n, 453).readonly && !e.Cb(n, 453)._isNativeSelect || null, e.Cb(n, 453)._ariaDescribedby || null, e.Cb(n, 453).errorState, e.Cb(n, 453).required.toString(), e.Cb(n, 454).ngClassUntouched, e.Cb(n, 454).ngClassTouched, e.Cb(n, 454).ngClassPristine, e.Cb(n, 454).ngClassDirty, e.Cb(n, 454).ngClassValid, e.Cb(n, 454).ngClassInvalid, e.Cb(n, 454).ngClassPending]),
                l(n, 459, 0, e.Cb(n, 460).disabled || null, "NoopAnimations" === e.Cb(n, 460)._animationMode, e.Cb(n, 462).type),
                l(n, 463, 0, e.Cb(n, 464).inline, "primary" !== e.Cb(n, 464).color && "accent" !== e.Cb(n, 464).color && "warn" !== e.Cb(n, 464).color),
                l(n, 470, 0, e.Cb(n, 471).disabled || null, "NoopAnimations" === e.Cb(n, 471)._animationMode, e.Cb(n, 473).type),
                l(n, 475, 0, e.Cb(n, 476).inline, "primary" !== e.Cb(n, 476).color && "accent" !== e.Cb(n, 476).color && "warn" !== e.Cb(n, 476).color),
                l(n, 493, 0, a.componentes.periodo.descricao),
                l(n, 495, 0, e.Cb(n, 496).target, e.Cb(n, 496).href),
                l(n, 500, 0, e.Cb(n, 501).dynamicHeight, "below" === e.Cb(n, 501).headerPosition),
                l(n, 514, 0, "horizontal" === e.Cb(n, 518).orientation, "horizontal" !== e.Cb(n, 518).orientation),
                l(n, 526, 0, e.Cb(n, 527).inline, "primary" !== e.Cb(n, 527).color && "accent" !== e.Cb(n, 527).color && "warn" !== e.Cb(n, 527).color)
            })
        }
        function ne(l) {
            return e.Mb(0, [e.Eb(0, h.A, []), e.Eb(0, h.d, [e.w]), e.Eb(0, h.f, [e.w]), (l()(),
            e.kb(16777216, null, null, 1, null, Mn)), e.rb(4, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Rn)), e.rb(6, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, le)), e.rb(8, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null)], function(l, n) {
                var a = n.component;
                l(n, 4, 0, !a.componentes && !a.erroConsulta),
                l(n, 6, 0, a.erroConsulta),
                l(n, 8, 0, a.componentes)
            }, null)
        }
        function ae(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 1, "app-matricula-fa", [], null, null, null, ne, Dn)), e.rb(1, 8503296, null, 0, Sn, [e.B, _l.e, bl, fl.a, Q.a, Q.n, ul.a, E.h, gl.c, hl.a], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }
        var ee = e.ob("app-matricula-fa", Sn, ae, {}, {}, [])
          , oe = function() {
            function l(l, n, a, e, o, u, t) {
                var i = this;
                this.zone = l,
                this.dialog = n,
                this.turmaService = a,
                this.authService = e,
                this.route = o,
                this.router = u,
                this._formBuilder = t,
                this.consultando = !1,
                this.mensagem = null,
                this.authService.getAuthStatus().subscribe(function(l) {
                    l.uid && /^[r][a]\d/.test(l.uid) && (i.uid = l.uid.replace(/[^\d]+/g, ""))
                })
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.consultando = !0,
                this.turmaService.chkCondicaoMatricula(this.uid).subscribe(function(n) {
                    "financeira-existe" !== n.condicao && "academica-existe" !== n.condicao && "so-academica" !== n.condicao || l.router.navigate(["/aluno-aa/matricula-aa"]),
                    "0" === n.condicao && l.router.navigate(["/aluno-aa/matricula-fa"]),
                    "debito" !== n.condicao && "falha-debito" !== n.condicao && "fies" !== n.condicao && "sem-periodo" !== n.condicao || (l.mensagem = n.message),
                    l.consultando = !1
                })
            }
            ,
            l
        }()
          , ue = e.qb({
            encapsulation: 0,
            styles: [[""]],
            data: {}
        });
        function te(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 8, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 1, "mat-spinner", [["class", "mat-spinner mat-progress-spinner"], ["mode", "indeterminate"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"]], null, null, m.b, m.a)), e.rb(4, 49152, null, 0, x.d, [e.k, g.a, [2, h.e], [2, C.a], x.a], null, null), (l()(),
            e.sb(5, 0, null, null, 3, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(6, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 1, "span", [["class", "mat-subheading-2"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Consultando disponibilidade de matr\xedcula..."]))], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 2, 0, "center center"),
                l(n, 6, 0, "row")
            }, function(l, n) {
                l(n, 3, 0, e.Cb(n, 4)._noopAnimations, e.Cb(n, 4).diameter, e.Cb(n, 4).diameter)
            })
        }
        function ie(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 7, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 4, "mat-card", [["class", "mat-card"]], null, null, null, D.d, D.a)), e.rb(4, 49152, null, 0, M.a, [], null, null), (l()(),
            e.sb(5, 0, null, 0, 2, "span", [["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(6, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.Kb(7, null, ["", ""]))], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 2, 0, "center center"),
                l(n, 6, 0, "center center")
            }, function(l, n) {
                l(n, 7, 0, n.component.mensagem)
            })
        }
        function re(l) {
            return e.Mb(0, [(l()(),
            e.kb(16777216, null, null, 1, null, te)), e.rb(1, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(2, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(3, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(4, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            e.kb(16777216, null, null, 1, null, ie)), e.rb(6, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null)], function(l, n) {
                var a = n.component;
                l(n, 1, 0, a.consultando),
                l(n, 6, 0, a.mensagem)
            }, null)
        }
        function se(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 1, "app-matricula-routeselect", [], null, null, null, re, ue)), e.rb(1, 114688, null, 0, oe, [e.B, _l.e, bl, fl.a, Q.a, Q.n, E.h], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }
        var ce = e.ob("app-matricula-routeselect", oe, se, {}, {}, [])
          , de = a("gRDf")
          , pe = function() {
            function l(l) {
                this.http = l
            }
            return l.prototype.setAluno = function(l) {
                var n = this;
                this.aluno = l,
                this.aluno._id || this.buscaPorRA(this.aluno.ra).subscribe(function(l) {
                    n.aluno = l.aluno,
                    n.aluno.periodo = l.periodo
                })
            }
            ,
            l.prototype.getAluno = function() {
                return this.aluno
            }
            ,
            l.prototype.matriculaAtual = function(l) {
                return this.http.get(ol.a.aaMarticulaUrl + "/aluno/" + l + "/matriculaAtual")
            }
            ,
            l.prototype.buscaPorRA = function(l) {
                return this.http.get(ol.a.aaMarticulaUrl + "/aluno/porRA/" + l)
            }
            ,
            l.prototype.matriculaPorPeriodo = function(l, n) {
                return this.http.get(ol.a.sgcMarticulaUrl + "/aluno/" + l + "/matriculaPorPeriodo/" + n)
            }
            ,
            l
        }();
        il.a.vfs = sl.a.pdfMake.vfs;
        var be = function() {
            function l(l, n, a, e) {
                var o = this;
                this.turmaService = l,
                this.alunoService = n,
                this.datePipe = a,
                this.dialog = e,
                this.resumoHorario = [],
                this.mostraTurnos = {
                    matutino: !1,
                    vespertino: !1,
                    noturno: !1
                },
                this.mostraContrato = !1,
                this.aluno = this.turmaService.getAluno(),
                this.aluno || (this.aluno = this.alunoService.getAluno()),
                this.componentes = this.turmaService.getComponente(),
                this.componentesLista = this.turmaService.getComponentesLista(),
                this.alunoService.matriculaPorPeriodo(this.aluno.ra, this.aluno.periodo._id).subscribe(function(l) {
                    o.matriculaAtual = l
                })
            }
            return l.prototype.ngOnChanges = function(l) {
                var n = l.alunoConfirmacao;
                n && (this.aluno = n.currentValue)
            }
            ,
            l.prototype.ngOnInit = function() {
                this.alunoAtestado = {
                    ra: this.aluno.ra,
                    nome: this.aluno.nome,
                    rg: this.aluno.rg,
                    cpf: this.aluno.cpf,
                    periodoMatricula: {
                        descricao: this.aluno.periodo.descricao,
                        inicio: this.datePipe.transform(this.aluno.periodo.inicio, "dd/MM/yyyy"),
                        final: this.datePipe.transform(this.aluno.periodo.fim, "dd/MM/yyyy")
                    },
                    curso: this.aluno.curso.nome,
                    turno: this.aluno.turno.descricao,
                    duracaocurso: this.aluno.periodos
                },
                this.alunoComprovante = {
                    ra: this.aluno.ra,
                    nome: this.aluno.nome,
                    periodoIngresso: this.aluno.periodo.descricao,
                    periodoMatricula: {
                        descricao: this.aluno.periodo.descricao,
                        inicio: this.datePipe.transform(this.aluno.periodo.inicio, "dd/MM/yyyy"),
                        final: this.datePipe.transform(this.aluno.periodo.fim, "dd/MM/yyyy")
                    },
                    curso: this.aluno.curso.nome,
                    turno: this.aluno.turno.descricao,
                    listaComponentes: [{
                        codigo: "ENG-120",
                        descricao: "Geometria Analitica e de vetores",
                        semestre: "1\xba SEMESTRE",
                        turma: "TURMA 1",
                        turno: "MATUTINO",
                        cargaHoraria: "60",
                        periodo: "2019.1"
                    }]
                },
                this.isConfirmacao ? (this.mostraTurnos.matutino = this.aluno.componentes.some(function(l) {
                    return l.turmas.some(function(l) {
                        return "matutino" === l.turno.descricao
                    })
                }),
                this.mostraTurnos.vespertino = this.aluno.componentes.some(function(l) {
                    return l.turmas.some(function(l) {
                        return "vespertino" === l.turno.descricao
                    })
                }),
                this.mostraTurnos.noturno = this.aluno.componentes.some(function(l) {
                    return l.turmas.some(function(l) {
                        return "noturno" === l.turno.descricao
                    })
                })) : (this.mostraTurnos.matutino = this.componentes.some(function(l) {
                    return l.turmas.some(function(l) {
                        return "matutino" === l.turno.descricao
                    })
                }),
                this.mostraTurnos.vespertino = this.componentes.some(function(l) {
                    return l.turmas.some(function(l) {
                        return "vespertino" === l.turno.descricao
                    })
                }),
                this.mostraTurnos.noturno = this.componentes.some(function(l) {
                    return l.turmas.some(function(l) {
                        return "noturno" === l.turno.descricao
                    })
                })),
                this.mostraTurnos.matutino = !0,
                this.mostraTurnos.vespertino = !0,
                this.mostraTurnos.noturno = !0
            }
            ,
            l.prototype.formatarDataExtenso = function(l) {
                var n = l.getDate()
                  , a = l.getDay()
                  , e = l.getMonth()
                  , o = l.getYear();
                return "Netscape" == navigator.appName && (o += 1900),
                ["Domingo", "Segunda-feira", "Ter\xe7a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S\xe1bado"][a] + ", " + n + " de " + ["Janeiro", "Fevereiro", "Mar\xe7o", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"][e] + " de " + o
            }
            ,
            l.prototype.createPdfAtestado = function() {
                this.aluno.matriculaAtual || (this.aluno.matriculaAtual = {
                    resumoMatricula: {
                        situacao: {
                            descricao: "Em curso",
                            sigla: "EC"
                        }
                    }
                }),
                this.aluno.matriculaAtual.resumoMatricula.situacao.sigla || (this.aluno.matriculaAtual.resumoMatricula.situacao.sigla = "MT");
                var l = [{
                    style: "tableExample",
                    table: {
                        body: [[{
                            text: "ATESTADO",
                            bold: !0,
                            fontSize: 16,
                            alignment: "center",
                            margin: [0, 10, 0, 0]
                        }], [{
                            table: {
                                body: [[{
                                    table: {
                                        widths: ["*"],
                                        body: [[{
                                            text: "\u200b\t\t\t Atendendo ao que foi requerido, atesto para devidos fins que " + this.alunoAtestado.nome.toUpperCase() + ", RG " + this.alunoAtestado.rg + ", CPF " + this.alunoAtestado.cpf + ", " + {
                                                MT: "\xe9 aluno(a) matriculado(a)",
                                                TR: "matriculou e trancou a matr\xedcula"
                                            }[this.aluno.matriculaAtual.resumoMatricula.situacao.sigla] + " no curso de " + this.alunoAtestado.curso.toUpperCase() + " turno " + this.alunoAtestado.turno.toUpperCase() + " desta faculdade, registro acad\xeamico n\xba " + this.alunoAtestado.ra + " no per\xedodo " + this.alunoAtestado.periodoMatricula.descricao + ".",
                                            margin: [0, 20, 0, 50],
                                            alignment: "justify",
                                            fontSize: 11
                                        }], [{
                                            text: "\u200b\t\t\t Atesto, que o semestre letivo ter\xe1 in\xedcio em " + this.alunoAtestado.periodoMatricula.inicio + " e t\xe9rmino em " + this.alunoAtestado.periodoMatricula.final + " e que o curso de " + this.alunoAtestado.curso.toUpperCase() + " tem dura\xe7\xe3o de " + this.alunoAtestado.duracaocurso + " semestres.",
                                            fontSize: 11
                                        }]]
                                    },
                                    layout: "noBorders"
                                }], [{
                                    text: "Faculdade Independente do Nordeste - FAINOR",
                                    alignment: "center",
                                    fontSize: 11,
                                    margin: [0, 20, 0, 0]
                                }], [{
                                    text: "Vit\xf3ria da Conquista - BA, " + this.formatarDataExtenso(new Date),
                                    alignment: "center",
                                    fontSize: 11
                                }], [{
                                    text: "____________________________________",
                                    margin: [0, 70, 0, 0],
                                    alignment: "center",
                                    fontSize: 11
                                }], [{
                                    text: "SECRETARIA GERAL DE CURSOS",
                                    margin: [0, 0, 0, 120],
                                    alignment: "center",
                                    fontSize: 11
                                }]]
                            },
                            layout: "noBorders"
                        }]]
                    },
                    layout: "noBorders"
                }];
                il.a.createPdf({
                    header: [{
                        image: de.a,
                        width: 555,
                        margin: [19, 25, 19, 20]
                    }],
                    content: l,
                    footer: function(l, n) {
                        return [{
                            style: "tableExample",
                            table: {
                                widths: ["*"],
                                body: [[{
                                    text: "___________________________________________________________________________________________________________________________",
                                    width: 555,
                                    alignment: "center",
                                    margin: [0, 10, 0, 5]
                                }], [{
                                    text: "Sede: Av. Lu\xeds Eduardo Magalh\xe3es, 10305 - Candeias, Vit\xf3ria da Conquista-BA, Tel. (0xx77) 3161-1000",
                                    fontSize: 8,
                                    alignment: "center"
                                }], [{
                                    text: "Mantenedora: Av. Lu\xeds Eduardo Magalh\xe3es, 10305 - Candeias, Vit\xf3ria da Conquista-BA. E-mail: fainor@fainor.com.br",
                                    fontSize: 8,
                                    alignment: "center"
                                }]]
                            },
                            layout: "noBorders"
                        }]
                    },
                    pageMargins: [19, 60, 19, 70],
                    styles: {
                        tableExample: {
                            fontSize: 10,
                            margin: [0, 0, 0, 0]
                        }
                    }
                }).open()
            }
            ,
            l.prototype.createPdfComprovante = function() {
                this.isConfirmacao && (this.componentes = this.aluno.componentes);
                var l = []
                  , n = [];
                n.push([{
                    text: [{
                        text: "COMPROVANTE DE MATR\xcdCULA - PER\xcdODO: "
                    }, {
                        text: this.alunoComprovante.periodoIngresso
                    }],
                    bold: !0,
                    fontSize: 14,
                    alignment: "center",
                    colSpan: 7,
                    margin: [0, 10, 0, 20]
                }, {
                    text: ""
                }, {
                    text: ""
                }, {
                    text: ""
                }, {
                    text: ""
                }, {
                    text: ""
                }, {
                    text: ""
                }]),
                n.push([{
                    text: [{
                        text: "ALUNO: ",
                        bold: !0
                    }, {
                        text: this.alunoComprovante.nome.toUpperCase()
                    }],
                    fontSize: 10,
                    colSpan: 2
                }, {
                    text: ""
                }, {
                    text: [{
                        text: "CURSO: ",
                        bold: !0
                    }, {
                        text: this.alunoComprovante.curso.toUpperCase()
                    }],
                    fontSize: 10,
                    colSpan: 5
                }, {
                    text: ""
                }, {
                    text: ""
                }, {
                    text: ""
                }, {
                    text: ""
                }]),
                n.push([{
                    text: [{
                        text: "REG. ACAD\xcaMICO: ",
                        bold: !0
                    }, {
                        text: this.alunoComprovante.ra
                    }],
                    fontSize: 10,
                    colSpan: 2
                }, {
                    text: ""
                }, {
                    text: [{
                        text: "TURNO: ",
                        bold: !0
                    }, {
                        text: this.alunoComprovante.turno.toUpperCase()
                    }],
                    fontSize: 10,
                    colSpan: 5
                }, {
                    text: ""
                }, {
                    text: ""
                }]),
                l.push([{
                    text: "COMPONENTES CURRICULARES",
                    colSpan: 4,
                    style: "tableHeader",
                    bold: !0,
                    border: [!0, !0, !0, !1]
                }, {
                    text: ""
                }, {
                    text: ""
                }, {
                    text: ""
                }, {
                    text: "TURMAS",
                    style: "tableHeader",
                    bold: !0,
                    border: [!1, !0, !0, !1]
                }, {
                    text: "TURNO",
                    style: "tableHeader",
                    bold: !0,
                    alignment: "center",
                    border: [!1, !0, !0, !1]
                }, {
                    text: "DATA",
                    style: "tableHeader",
                    bold: !0,
                    alignment: "center",
                    border: [!1, !0, !0, !1]
                }]);
                for (var a = 0, e = this.matriculaAtual.aluno.matriculaAtual.componentes; a < e.length; a++) {
                    var o = e[a];
                    if (o.situacao) {
                        if ("TR" != o.situacao.sigla)
                            for (var u = 0, t = o.turmas; u < t.length; u++) {
                                var i = t[u];
                                l.push([{
                                    text: o.nome.toUpperCase(),
                                    fontSize: 8,
                                    colSpan: 4
                                }, {
                                    text: ""
                                }, {
                                    text: ""
                                }, {
                                    text: ""
                                }, {
                                    text: i.descricao.toUpperCase(),
                                    fontSize: 8
                                }, {
                                    text: i.turno.descricao.toUpperCase(),
                                    fontSize: 8,
                                    alignment: "center"
                                }, {
                                    text: this.datePipe.transform(o.matricula.createdAt, "dd/MM/yyyy"),
                                    fontSize: 8,
                                    alignment: "center"
                                }])
                            }
                    } else
                        for (var r = 0, s = o.turmas; r < s.length; r++)
                            i = s[r],
                            l.push([{
                                text: o.nome.toUpperCase(),
                                fontSize: 8,
                                colSpan: 4
                            }, {
                                text: ""
                            }, {
                                text: ""
                            }, {
                                text: ""
                            }, {
                                text: i.descricao.toUpperCase(),
                                fontSize: 8
                            }, {
                                text: i.turno.descricao.toUpperCase(),
                                fontSize: 8,
                                alignment: "center"
                            }, {
                                text: this.datePipe.transform(o.matricula.createdAt, "dd/MM/yyyy"),
                                fontSize: 8,
                                alignment: "center"
                            }])
                }
                var c = [{
                    table: {
                        widths: ["*"],
                        body: [[{
                            style: "tableExample",
                            margin: [0, 0, 0, 0],
                            headerRows: 1,
                            table: {
                                widths: ["auto", "*", "auto", "auto", "auto", "auto", "auto"],
                                body: n
                            },
                            layout: "noBorders"
                        }], [{
                            style: "tableExample",
                            margin: [0, 20, 0, 0],
                            headerRows: 1,
                            table: {
                                widths: ["auto", "*", "auto", "auto", "auto", "auto", "auto"],
                                body: l
                            }
                        }], [{
                            text: "Faculdade Independente do Nordeste - FAINOR",
                            alignment: "center",
                            fontSize: 11,
                            margin: [0, 110, 0, 0]
                        }], [{
                            text: "Vit\xf3ria da Conquista - BA, " + this.formatarDataExtenso(new Date),
                            alignment: "center",
                            fontSize: 11
                        }], [{
                            style: "tableExample",
                            margin: [0, 70, 0, 0],
                            headerRows: 1,
                            table: {
                                widths: ["*", "*"],
                                body: [[{
                                    text: [{
                                        text: "____________________________________",
                                        alignment: "center"
                                    }]
                                }, {
                                    text: [{
                                        text: "____________________________________",
                                        alignment: "center"
                                    }]
                                }], [{
                                    text: [{
                                        text: "SECRETARIA GERAL DE CURSOS",
                                        alignment: "center"
                                    }]
                                }, {
                                    text: [{
                                        text: this.alunoComprovante.nome.toUpperCase(),
                                        alignment: "center"
                                    }]
                                }]]
                            },
                            layout: "noBorders"
                        }]]
                    },
                    layout: "noBorders"
                }];
                il.a.createPdf({
                    header: [{
                        image: de.a,
                        width: 555,
                        margin: [19, 25, 19, 20]
                    }],
                    content: c,
                    footer: function(l, n) {
                        return [{
                            style: "tableExample",
                            table: {
                                widths: ["*"],
                                body: [[{
                                    text: "___________________________________________________________________________________________________________________________",
                                    width: 555,
                                    alignment: "center",
                                    margin: [0, 10, 0, 5]
                                }], [{
                                    text: "Sede:  Av. Lu\xeds Eduardo Magalh\xe3es, 10305 - Candeias, Vit\xf3ria da Conquista-BA, Tel. (0xx77) 3161-1000",
                                    fontSize: 8,
                                    alignment: "center"
                                }], [{
                                    text: "Mantenedora: Av. Lu\xeds Eduardo Magalh\xe3es, 10305 - Candeias, Vit\xf3ria da Conquista-BA. E-mail: fainor@fainor.com.br",
                                    fontSize: 8,
                                    alignment: "center"
                                }]]
                            },
                            layout: "noBorders"
                        }]
                    },
                    pageMargins: [19, 60, 19, 70],
                    styles: {
                        tableExample: {
                            fontSize: 10,
                            margin: [0, 0, 0, 0]
                        }
                    }
                }).open()
            }
            ,
            l.prototype.createPdfHorario = function() {
                this.isConfirmacao && (this.componentes = this.aluno.componentes,
                this.componentesLista = {
                    horarioPadrao: this.aluno.horarioPadrao
                });
                var l = []
                  , n = []
                  , a = []
                  , e = []
                  , o = []
                  , u = []
                  , t = []
                  , i = []
                  , r = []
                  , s = [];
                a.push([{
                    text: "HOR\xc1RIO",
                    style: "tableHeader",
                    alignment: "center"
                }]);
                for (var c = 0; c < this.componentesLista.horarioPadrao.matutino[0].dias.length; c++)
                    a.push([{
                        text: this.componentesLista.horarioPadrao.matutino[0].dias[c].substring(1).toUpperCase(),
                        style: "tableHeader",
                        alignment: "center"
                    }]);
                l.push(a);
                var d = [];
                for (c = 0; c < this.componentesLista.horarioPadrao.matutino.length; c++) {
                    (d = []).push([{
                        text: [{
                            text: this.componentesLista.horarioPadrao.matutino[c].inicio
                        }, {
                            text: " - "
                        }, {
                            text: this.componentesLista.horarioPadrao.matutino[c].fim
                        }],
                        style: "tableHeader",
                        alignment: "center"
                    }]);
                    for (var p = 0; p < this.componentesLista.horarioPadrao.matutino[c].dias.length; p++)
                        d.push([{
                            text: this.getResumoHorario(this.componentesLista.horarioPadrao.matutino[c], this.componentesLista.horarioPadrao.matutino[c].dias[p]),
                            style: "tableHeader",
                            alignment: "center"
                        }]);
                    n.push(d)
                }
                for (u.push([{
                    text: "HOR\xc1RIO",
                    style: "tableHeader",
                    alignment: "center"
                }]),
                c = 0; c < this.componentesLista.horarioPadrao.vespertino[0].dias.length; c++)
                    u.push([{
                        text: this.componentesLista.horarioPadrao.vespertino[0].dias[c].substring(1).toUpperCase(),
                        style: "tableHeader",
                        alignment: "center"
                    }]);
                e.push(u);
                var b = [];
                for (c = 0; c < this.componentesLista.horarioPadrao.vespertino.length; c++) {
                    for ((b = []).push([{
                        text: [{
                            text: this.componentesLista.horarioPadrao.vespertino[c].inicio
                        }, {
                            text: " - "
                        }, {
                            text: this.componentesLista.horarioPadrao.vespertino[c].fim
                        }],
                        style: "tableHeader",
                        alignment: "center"
                    }]),
                    p = 0; p < this.componentesLista.horarioPadrao.vespertino[c].dias.length; p++)
                        b.push([{
                            text: this.getResumoHorario(this.componentesLista.horarioPadrao.vespertino[c], this.componentesLista.horarioPadrao.vespertino[c].dias[p]),
                            style: "tableHeader",
                            alignment: "center"
                        }]);
                    o.push(b)
                }
                for (r.push([{
                    text: "HOR\xc1RIO",
                    style: "tableHeader",
                    alignment: "center"
                }]),
                c = 0; c < this.componentesLista.horarioPadrao.noturno[0].dias.length; c++)
                    r.push([{
                        text: this.componentesLista.horarioPadrao.noturno[0].dias[c].substring(1).toUpperCase(),
                        style: "tableHeader",
                        alignment: "center"
                    }]);
                t.push(r);
                var f = [];
                for (c = 0; c < this.componentesLista.horarioPadrao.noturno.length; c++) {
                    for ((f = []).push([{
                        text: [{
                            text: this.componentesLista.horarioPadrao.noturno[c].inicio
                        }, {
                            text: " - "
                        }, {
                            text: this.componentesLista.horarioPadrao.noturno[c].fim
                        }],
                        style: "tableHeader",
                        alignment: "center"
                    }]),
                    p = 0; p < this.componentesLista.horarioPadrao.noturno[c].dias.length; p++)
                        f.push([{
                            text: this.getResumoHorario(this.componentesLista.horarioPadrao.noturno[c], this.componentesLista.horarioPadrao.noturno[c].dias[p]),
                            style: "tableHeader",
                            alignment: "center"
                        }]);
                    i.push(f)
                }
                var m = [{
                    text: [{
                        text: this.aluno.nome.toUpperCase()
                    }, {
                        text: " - RA: "
                    }, {
                        text: this.aluno.ra
                    }],
                    bold: !0,
                    fontSize: 11,
                    alignment: "center",
                    margin: [0, 10, 0, 0]
                }, {
                    text: [{
                        text: "HOR\xc1RIO "
                    }, {
                        text: this.aluno.periodo.descricao
                    }],
                    bold: !0,
                    fontSize: 11,
                    alignment: "center",
                    margin: [0, 5, 0, 5]
                }]
                  , x = [{
                    text: "MATUTINO",
                    bold: !0,
                    fontSize: 9,
                    alignment: "center",
                    margin: [0, 10, 0, 5]
                }, {
                    style: "tableExample",
                    table: {
                        widths: ["*", "*", "*", "*", "*", "*", "*"],
                        body: l
                    }
                }, {
                    style: "tableExample",
                    table: {
                        widths: ["*", "*", "*", "*", "*", "*", "*"],
                        body: n
                    }
                }]
                  , g = [{
                    text: "VESPERTINO",
                    bold: !0,
                    fontSize: 9,
                    alignment: "center",
                    margin: [0, 15, 0, 5]
                }, {
                    style: "tableExample",
                    table: {
                        widths: ["*", "*", "*", "*", "*", "*", "*"],
                        body: e
                    }
                }, {
                    style: "tableExample",
                    table: {
                        widths: ["*", "*", "*", "*", "*", "*", "*"],
                        body: o
                    }
                }]
                  , h = [{
                    text: "NOTURNO",
                    bold: !0,
                    fontSize: 9,
                    alignment: "center",
                    margin: [0, 15, 0, 5]
                }, {
                    style: "tableExample",
                    table: {
                        widths: ["*", "*", "*", "*", "*", "*", "*"],
                        body: t
                    }
                }, {
                    style: "tableExample",
                    table: {
                        widths: ["*", "*", "*", "*", "*", "*", "*"],
                        body: i
                    }
                }];
                s.push(m),
                this.mostraTurnos.matutino && s.push(x),
                this.mostraTurnos.vespertino && s.push(g),
                this.mostraTurnos.noturno && s.push(h),
                il.a.createPdf({
                    header: [{
                        image: de.a,
                        width: 555,
                        margin: [19, 25, 19, 20]
                    }],
                    content: s,
                    footer: function(l, n) {
                        return [{
                            style: "tableExample",
                            table: {
                                widths: ["*"],
                                body: [[{
                                    text: "___________________________________________________________________________________________________________________________________________________________________________",
                                    width: 555,
                                    alignment: "center",
                                    margin: [0, 10, 0, 5]
                                }], [{
                                    text: "Sede: Av. Lu\xeds Eduardo Magalh\xe3es, 10305 - Candeias, Vit\xf3ria da Conquista-BA, Tel. (0xx77) 3161-1000",
                                    fontSize: 8,
                                    alignment: "center"
                                }], [{
                                    text: "Mantenedora: Av. Lu\xeds Eduardo Magalh\xe3es, 10305 - Candeias, Vit\xf3ria da Conquista-BA. E-mail: fainor@fainor.com.br",
                                    fontSize: 8,
                                    alignment: "center"
                                }]]
                            },
                            layout: "noBorders"
                        }]
                    },
                    pageMargins: [19, 60, 19, 70],
                    styles: {
                        tableExample: {
                            fontSize: 7,
                            margin: [0, 0, 0, 0]
                        }
                    }
                }).open()
            }
            ,
            l.prototype.getResumoHorario = function(l, n) {
                for (var a, e = this, o = function(o) {
                    u.componentes[o].turmas.forEach(function(u) {
                        u.horarioDetalhado.forEach(function(u) {
                            u.dias.forEach(function(t) {
                                l.mapKey == u.mapKey && t == n && (e.resumoHorario[u.mapKey + t] = e.componentes[o].nome,
                                a = e.resumoHorario[u.mapKey + t].toUpperCase())
                            })
                        })
                    })
                }, u = this, t = 0; t < this.componentes.length; t++)
                    o(t);
                return a || "---"
            }
            ,
            l.prototype.verContrato = function() {
                this.dialog.open(Cl, {
                    width: "90%",
                    height: "80%",
                    position: {
                        top: "50px"
                    },
                    data: {
                        viewOnly: this.mostraContrato,
                        aluno: {
                            nome: this.alunoConfirmacao.nome.toUpperCase(),
                            ra: this.alunoConfirmacao.ra,
                            curso: this.alunoConfirmacao.curso.nome.toUpperCase(),
                            cpf: this.alunoConfirmacao.cpf,
                            rg: this.alunoConfirmacao.rg,
                            endereco: this.alunoConfirmacao.endereco,
                            telCelular: this.alunoConfirmacao.telCelular,
                            email: this.alunoConfirmacao.email,
                            nome_pai: this.alunoConfirmacao.nome_pai,
                            nome_mae: this.alunoConfirmacao.nome_mae,
                            nascimento: this.alunoConfirmacao.nascimento,
                            estado_civil: this.alunoConfirmacao.estado_civil.descricao,
                            resumoFinanceira: this.alunoConfirmacao.resumoFinanceira
                        }
                    }
                }).afterClosed().subscribe(function(l) {})
            }
            ,
            l
        }()
          , fe = e.qb({
            encapsulation: 0,
            styles: [[".hidden-div-main[_ngcontent-%COMP%]{padding-left:34px}.hidden-card[_ngcontent-%COMP%]{background:0 0;border:none;box-shadow:none}.hidden-div-img[_ngcontent-%COMP%], .hidden-div-text[_ngcontent-%COMP%]{display:none!important}"]],
            data: {}
        });
        function me(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 2, "button", [["color", "primary"], ["mat-stroked-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function(l, n, a) {
                var e = !0;
                return "click" === n && (e = !1 !== l.component.verContrato() && e),
                e
            }, N.d, N.b)), e.rb(1, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["VER CONTRATO"]))], function(l, n) {
                l(n, 1, 0, "primary")
            }, function(l, n) {
                l(n, 0, 0, e.Cb(n, 1).disabled || null, "NoopAnimations" === e.Cb(n, 1)._animationMode)
            })
        }
        function xe(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(1, 0, null, null, 33, "div", [["fxLayout", "row"], ["fxLayoutAlign", "center center"]], [[2, "hidden-div-main", null]], null, null, null, null)), e.rb(2, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 30, "mat-card", [["class", "mat-card"]], [[2, "hidden-card", null]], null, null, D.d, D.a)), e.rb(5, 49152, null, 0, M.a, [], null, null), (l()(),
            e.sb(6, 0, null, 0, 28, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(7, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(8, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(9, 0, null, null, 4, "div", [["fxLayout", "row"], ["fxLayoutAlign", "center center"]], [[2, "hidden-div-img", null]], null, null, null, null)), e.rb(10, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(11, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(12, 0, null, null, 1, "i", [["class", "material-icons color_green"], ["style", "font-size: 70px; color: green;"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["check_circle_outline"])), (l()(),
            e.sb(14, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(15, 0, null, null, 4, "div", [["fxLayout", "row"], ["fxLayoutAlign", "center center"]], [[2, "hidden-div-text", null]], null, null, null, null)), e.rb(16, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(17, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(18, 0, null, null, 1, "span", [["class", "mat-subheading-2"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["MATR\xcdCULA REALIZADA COM SUCESSO!"])), (l()(),
            e.sb(20, 0, null, null, 14, "div", [["fxLayout", "row"], ["fxLayoutAlign", "center center"], ["fxLayoutGap", "5px"]], null, null, null, null, null)), e.rb(21, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(22, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(23, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(24, 0, null, null, 2, "button", [["color", "primary"], ["mat-stroked-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function(l, n, a) {
                var e = !0;
                return "click" === n && (e = !1 !== l.component.createPdfAtestado() && e),
                e
            }, N.d, N.b)), e.rb(25, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["ATESTADO DO ALUNO"])), (l()(),
            e.sb(27, 0, null, null, 2, "button", [["color", "primary"], ["mat-stroked-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function(l, n, a) {
                var e = !0;
                return "click" === n && (e = !1 !== l.component.createPdfComprovante() && e),
                e
            }, N.d, N.b)), e.rb(28, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["COMPROVANTE DE MATR\xcdCULA"])), (l()(),
            e.sb(30, 0, null, null, 2, "button", [["color", "primary"], ["mat-stroked-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function(l, n, a) {
                var e = !0;
                return "click" === n && (e = !1 !== l.component.createPdfHorario() && e),
                e
            }, N.d, N.b)), e.rb(31, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["HOR\xc1RIO"])), (l()(),
            e.kb(16777216, null, null, 1, null, me)), e.rb(34, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null)], function(l, n) {
                var a = n.component;
                l(n, 2, 0, "row"),
                l(n, 3, 0, "center center"),
                l(n, 7, 0, "column"),
                l(n, 8, 0, "center center"),
                l(n, 10, 0, "row"),
                l(n, 11, 0, "center center"),
                l(n, 16, 0, "row"),
                l(n, 17, 0, "center center"),
                l(n, 21, 0, "row"),
                l(n, 22, 0, "5px"),
                l(n, 23, 0, "center center"),
                l(n, 25, 0, "primary"),
                l(n, 28, 0, "primary"),
                l(n, 31, 0, "primary"),
                l(n, 34, 0, a.mostraContrato)
            }, function(l, n) {
                var a = n.component;
                l(n, 1, 0, a.isConfirmacao),
                l(n, 4, 0, a.isConfirmacao),
                l(n, 9, 0, a.isConfirmacao),
                l(n, 15, 0, a.isConfirmacao),
                l(n, 24, 0, e.Cb(n, 25).disabled || null, "NoopAnimations" === e.Cb(n, 25)._animationMode),
                l(n, 27, 0, e.Cb(n, 28).disabled || null, "NoopAnimations" === e.Cb(n, 28)._animationMode),
                l(n, 30, 0, e.Cb(n, 31).disabled || null, "NoopAnimations" === e.Cb(n, 31)._animationMode)
            })
        }
        function ge(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 1, "app-matricula-realizada", [], null, null, null, xe, fe)), e.rb(1, 638976, null, 0, be, [bl, pe, h.f, _l.e], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }
        var he = e.ob("app-matricula-realizada", be, ge, {
            isConfirmacao: "isConfirmacao",
            alunoConfirmacao: "alunoConfirmacao",
            mostraContrato: "mostraContrato"
        }, {}, [])
          , Ce = function() {
            function l(l, n, a) {
                this.alunoService = l,
                this.turmaService = n,
                this.dialog = a,
                this.isConfirmacao = !0,
                this.mostraContrato = !1,
                this.carregando = !1,
                this.semMatricula = !1,
                this.lerContrato = !1,
                this.contratoLido = !1
            }
            return l.prototype.ngOnInit = function() {
                var l = this;
                this.carregando = !0,
                this.alunoService.matriculaAtual(this.alunoService.getAluno().ra).subscribe(function(n) {
                    l.aluno = n.aluno,
                    l.carregando = !1,
                    l.matriculaAtual = n,
                    l.componentes = n.aluno.matriculaAtual.componentes,
                    l.aluno.periodos = l.matriculaAtual.aluno.curso.qtdePeriodos,
                    l.aluno.rg = l.matriculaAtual.aluno.rg,
                    l.aluno.cpf = l.matriculaAtual.aluno.cpf,
                    l.aluno.periodo = l.matriculaAtual.periodo,
                    l.aluno.componentes = l.componentes,
                    l.aluno.horarioPadrao = l.matriculaAtual.horarioPadrao,
                    l.aluno.matriculaAtual = l.matriculaAtual.aluno.matriculaAtual
                }, function(n) {
                    l.carregando = !1,
                    l.error = n.error
                })
            }
            ,
            l.prototype.geraPdfPLanoEsnino = function(l) {
                this.turmaService.gerarPDFPlanoDeEnsino(l)
            }
            ,
            l
        }()
          , ye = e.qb({
            encapsulation: 0,
            styles: [[""]],
            data: {}
        });
        function _e(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 8, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 1, "mat-spinner", [["class", "mat-spinner mat-progress-spinner"], ["mode", "indeterminate"], ["role", "progressbar"]], [[2, "_mat-animation-noopable", null], [4, "width", "px"], [4, "height", "px"]], null, null, m.b, m.a)), e.rb(4, 49152, null, 0, x.d, [e.k, g.a, [2, h.e], [2, C.a], x.a], null, null), (l()(),
            e.sb(5, 0, null, null, 3, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(6, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 1, "span", [["class", "mat-subheading-2"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["Carregando..."]))], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 2, 0, "center center"),
                l(n, 6, 0, "row")
            }, function(l, n) {
                l(n, 3, 0, e.Cb(n, 4)._noopAnimations, e.Cb(n, 4).diameter, e.Cb(n, 4).diameter)
            })
        }
        function Le(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 1, "app-matricula-realizada", [], null, null, null, xe, fe)), e.rb(1, 638976, null, 0, be, [bl, pe, h.f, _l.e], {
                isConfirmacao: [0, "isConfirmacao"],
                alunoConfirmacao: [1, "alunoConfirmacao"],
                mostraContrato: [2, "mostraContrato"]
            }, null)], function(l, n) {
                var a = n.component;
                l(n, 1, 0, !0, a.aluno, a.mostraContrato)
            }, null)
        }
        function ve(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 5, "div", [["fxLayout", "row"], ["fxLayoutAlign", "center center"], ["style", "color: #f44336;"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 1, "i", [["class", "material-icons"], ["color", "warn"], ["style", "font-size: 17px;"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["lock"])), (l()(),
            e.Kb(-1, null, [" MATR\xcdCULA TRANCADA "]))], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "center center")
            }, null)
        }
        function ke(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 3, "div", [], null, null, null, null, null)), (l()(),
            e.kb(16777216, null, null, 1, null, ve)), e.rb(2, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 0, "br", [], null, null, null, null, null))], function(l, n) {
                l(n, 2, 0, "TR" == n.parent.context.$implicit.situacao.sigla)
            }, null)
        }
        function Ae(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 5, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 2, "div", [["fxLayout", "row"]], null, null, null, null, null)), e.rb(4, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.Kb(5, null, [" ", " - ", " "]))], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 2, 0, "center center"),
                l(n, 4, 0, "row")
            }, function(l, n) {
                l(n, 5, 0, n.context.$implicit.inicio, n.context.$implicit.fim)
            })
        }
        function we(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 18, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "20px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(4, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(5, 0, null, null, 13, "div", [["fxLayout", "row"], ["fxLayout.lt-md", "column"], ["fxLayoutGap.lt-md", "0px"], ["style", "border: 1px solid #cec8c8;\n                padding: 2px; line-height: 18px; text-align: center; border-radius: 5px; background: #eeeeeebf; min-width: 65px;"]], null, null, null, null, null)), e.rb(6, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"],
                "fxLayout.lt-md": [1, "fxLayout.lt-md"]
            }, null), e.rb(7, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                "fxLayoutGap.lt-md": [0, "fxLayoutGap.lt-md"]
            }, null), (l()(),
            e.sb(8, 0, null, null, 10, "div", [["fxFlex", ""], ["fxLayout", "column"], ["fxLayoutAlign", "center center"], ["style", "font-size: .8em"]], null, null, null, null, null)), e.rb(9, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(10, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(11, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(12, 0, null, null, 4, "div", [["fxLayout", "row"], ["fxLayoutAlign", "center center"], ["style", "font-weight: bold;"]], null, null, null, null, null)), e.rb(13, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(14, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.Kb(15, null, [" ", " "])), e.Gb(16, 1), (l()(),
            e.kb(16777216, null, null, 1, null, Ae)), e.rb(18, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "20px"),
                l(n, 3, 0, "start center"),
                l(n, 4, 0, ""),
                l(n, 6, 0, "row", "column"),
                l(n, 7, 0, "0px"),
                l(n, 9, 0, "column"),
                l(n, 10, 0, "center center"),
                l(n, 11, 0, ""),
                l(n, 13, 0, "row"),
                l(n, 14, 0, "center center"),
                l(n, 18, 0, n.context.$implicit.horarios)
            }, function(l, n) {
                var a = e.Lb(n, 15, 0, l(n, 16, 0, e.Cb(n.parent.parent.parent.parent, 0), n.context.$implicit.dia.substring(1)));
                l(n, 15, 0, a)
            })
        }
        function Fe(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 6, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "center center"], ["style", "margin: 0 0 15px"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(3, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 2, "mat-divider", [["class", "mat-divider"], ["fxFlex", "90"], ["role", "separator"], ["style", "left: unset"]], [[1, "aria-orientation", 0], [2, "mat-divider-vertical", null], [2, "mat-divider-horizontal", null], [2, "mat-divider-inset", null]], null, null, I.b, I.a)), e.rb(5, 49152, null, 0, T.a, [], null, null), e.rb(6, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null)], function(l, n) {
                l(n, 1, 0, "row"),
                l(n, 2, 0, "center center"),
                l(n, 3, 0, ""),
                l(n, 6, 0, "90")
            }, function(l, n) {
                l(n, 4, 0, e.Cb(n, 5).vertical ? "vertical" : "horizontal", e.Cb(n, 5).vertical, !e.Cb(n, 5).vertical, e.Cb(n, 5).inset)
            })
        }
        function Oe(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 26, "div", [["fxLayout", "column"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(2, 0, null, null, 22, "div", [["fxLayout", "column"], ["style", "margin-bottom: 15px"]], null, null, null, null, null)), e.rb(3, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 20, "div", [["fxLayout", "row"], ["fxLayoutGap", "20px"], ["fxLayoutGap.lt-md", "0px"]], null, null, null, null, null)), e.rb(5, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(6, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"],
                "fxLayoutGap.lt-md": [1, "fxLayoutGap.lt-md"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 15, "div", [["fxFlex", "60"], ["fxLayout", "row"]], null, null, null, null, null)), e.rb(8, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(9, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(10, 0, null, null, 12, "div", [["fxLayout", "column"]], null, null, null, null, null)), e.rb(11, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), (l()(),
            e.sb(12, 0, null, null, 2, "div", [["style", "padding-left: 15px"]], null, null, null, null, null)), (l()(),
            e.Kb(13, null, [" ", " "])), e.Gb(14, 1), (l()(),
            e.sb(15, 0, null, null, 3, "div", [["style", "padding-left: 15px"]], null, null, null, null, null)), (l()(),
            e.sb(16, 0, null, null, 2, "button", [["color", "primary"], ["mat-stroked-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function(l, n, a) {
                var e = !0;
                return "click" === n && (e = !1 !== l.component.geraPdfPLanoEsnino(l.context.$implicit) && e),
                e
            }, N.d, N.b)), e.rb(17, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["PLANO DE ENSINO"])), (l()(),
            e.sb(19, 0, null, null, 3, "div", [["style", "padding-left: 15px"]], null, null, null, null, null)), (l()(),
            e.sb(20, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["C\xf3digo Google Classroom: "])), (l()(),
            e.Kb(22, null, ["", " "])), (l()(),
            e.kb(16777216, null, null, 1, null, we)), e.rb(24, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Fe)), e.rb(26, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 3, 0, "column"),
                l(n, 5, 0, "row"),
                l(n, 6, 0, "20px", "0px"),
                l(n, 8, 0, "row"),
                l(n, 9, 0, "60"),
                l(n, 11, 0, "column"),
                l(n, 17, 0, "primary"),
                l(n, 24, 0, n.context.$implicit.horarioPorDia),
                l(n, 26, 0, n.context.index < n.parent.context.$implicit.turmas.length - 1)
            }, function(l, n) {
                var a = e.Lb(n, 13, 0, l(n, 14, 0, e.Cb(n.parent.parent.parent, 0), n.context.$implicit.descricao));
                l(n, 13, 0, a),
                l(n, 16, 0, e.Cb(n, 17).disabled || null, "NoopAnimations" === e.Cb(n, 17)._animationMode),
                l(n, 22, 0, n.context.$implicit.gwksClrEnrollmentCode)
            })
        }
        function Ie(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 25, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 22, "mat-card", [["class", "mat-elevation-z3 mat-card"], ["fxFlex", ""], ["style", "margin-bottom: 5px; padding-bottom: 0px; width: 94%; margin: 2px;"]], null, null, null, D.d, D.a)), e.rb(4, 49152, null, 0, M.a, [], null, null), e.rb(5, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(6, 0, null, 0, 15, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "20px"], ["style", "margin-bottom: 10px"]], null, null, null, null, null)), e.rb(7, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(8, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(9, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(10, 0, null, null, 3, "div", [], null, null, null, null, null)), (l()(),
            e.sb(11, 0, null, null, 2, "h4", [["style", "margin: unset; color: #3f51b5;"]], null, null, null, null, null)), (l()(),
            e.Kb(12, null, ["", ""])), e.Gb(13, 1), (l()(),
            e.sb(14, 0, null, null, 3, "div", [], null, null, null, null, null)), (l()(),
            e.sb(15, 0, null, null, 2, "mat-card-subtitle", [["class", "mat-card-subtitle"], ["style", "margin: unset; color: #3f51b5;"]], null, null, null, null, null)), e.rb(16, 16384, null, 0, M.h, [], null, null), (l()(),
            e.Kb(17, null, ["", "h - ", " CR\xc9DITOS"])), (l()(),
            e.sb(18, 0, null, null, 1, "div", [["fxFlex", ""]], null, null, null, null, null)), e.rb(19, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, ke)), e.rb(21, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(22, 0, null, 0, 3, "mat-card-content", [["class", "mat-card-content"]], null, null, null, null, null)), e.rb(23, 16384, null, 0, M.d, [], null, null), (l()(),
            e.kb(16777216, null, null, 1, null, Oe)), e.rb(25, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 2, 0, "center center"),
                l(n, 5, 0, ""),
                l(n, 7, 0, "row"),
                l(n, 8, 0, "20px"),
                l(n, 9, 0, "start center"),
                l(n, 19, 0, ""),
                l(n, 21, 0, n.context.$implicit.situacao),
                l(n, 25, 0, null == n.context.$implicit ? null : n.context.$implicit.turmas)
            }, function(l, n) {
                var a = e.Lb(n, 12, 0, l(n, 13, 0, e.Cb(n.parent.parent, 0), n.context.$implicit.nome));
                l(n, 12, 0, a),
                l(n, 17, 0, n.context.$implicit.chTotal, n.context.$implicit.creditos)
            })
        }
        function Te(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 34, "div", [], null, null, null, null, null)), (l()(),
            e.sb(1, 0, null, null, 27, "div", [["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["style", "padding: 12px 24px 0 24px"]], null, null, null, null, null)), e.rb(2, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(3, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(4, 0, null, null, 8, "div", [["class", "mat-subheading-2"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"]], null, null, null, null, null)), e.rb(5, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(6, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(7, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(8, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], null, null), (l()(),
            e.Kb(-1, 0, ["label_important"])), (l()(),
            e.Kb(-1, null, [" \xa0 MATR\xcdCULA: \xa0 "])), (l()(),
            e.sb(11, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            e.Kb(12, null, ["", ""])), (l()(),
            e.sb(13, 0, null, null, 15, "div", [["class", "mat-subheading-2"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["style", "margin-left: 30px;"]], null, null, null, null, null)), e.rb(14, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(15, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(16, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(17, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], null, null), (l()(),
            e.Kb(-1, 0, ["school"])), (l()(),
            e.Kb(19, null, [" \xa0 ", " - RA", " "])), e.Gb(20, 1), (l()(),
            e.sb(21, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["navigate_next"])), (l()(),
            e.Kb(23, null, [" ", " "])), e.Gb(24, 1), (l()(),
            e.sb(25, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["navigate_next"])), (l()(),
            e.Kb(27, null, [" ", " "])), e.Gb(28, 1), (l()(),
            e.kb(16777216, null, null, 1, null, Le)), e.rb(30, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(31, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            e.kb(16777216, null, null, 1, null, Ie)), e.rb(33, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null), (l()(),
            e.sb(34, 0, null, null, 0, "br", [], null, null, null, null, null))], function(l, n) {
                var a = n.component;
                l(n, 2, 0, "row"),
                l(n, 3, 0, "start center"),
                l(n, 5, 0, "row"),
                l(n, 6, 0, "start center"),
                l(n, 8, 0),
                l(n, 14, 0, "row"),
                l(n, 15, 0, "start center"),
                l(n, 17, 0),
                l(n, 30, 0, !a.error),
                l(n, 33, 0, a.componentes)
            }, function(l, n) {
                var a = n.component;
                l(n, 7, 0, e.Cb(n, 8).inline, "primary" !== e.Cb(n, 8).color && "accent" !== e.Cb(n, 8).color && "warn" !== e.Cb(n, 8).color),
                l(n, 12, 0, null == a.matriculaAtual ? null : a.matriculaAtual.periodo.descricao),
                l(n, 16, 0, e.Cb(n, 17).inline, "primary" !== e.Cb(n, 17).color && "accent" !== e.Cb(n, 17).color && "warn" !== e.Cb(n, 17).color);
                var o = e.Lb(n, 19, 0, l(n, 20, 0, e.Cb(n.parent, 0), null == a.matriculaAtual ? null : a.matriculaAtual.aluno.nome));
                l(n, 19, 0, o, null == a.matriculaAtual ? null : a.matriculaAtual.aluno.ra);
                var u = e.Lb(n, 23, 0, l(n, 24, 0, e.Cb(n.parent, 0), null == a.matriculaAtual ? null : a.matriculaAtual.aluno.curso.nome));
                l(n, 23, 0, u);
                var t = e.Lb(n, 27, 0, l(n, 28, 0, e.Cb(n.parent, 0), null == a.matriculaAtual ? null : a.matriculaAtual.aluno.turno.descricao));
                l(n, 27, 0, t)
            })
        }
        function Pe(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 18, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center center"], ["style", "margin-top: 50px;"]], null, null, null, null, null)), e.rb(1, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(2, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(3, 0, null, null, 15, "mat-card", [["class", "mat-card"]], null, null, null, D.d, D.a)), e.rb(4, 49152, null, 0, M.a, [], null, null), (l()(),
            e.sb(5, 0, null, 0, 13, "div", [["fxLayout", "column"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(6, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(7, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(8, 0, null, null, 4, "div", [["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(9, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(10, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(11, 0, null, null, 1, "i", [["class", "material-icons color_green"], ["style", "font-size: 70px; color: red;"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["highlight_off"])), (l()(),
            e.sb(13, 0, null, null, 0, "br", [], null, null, null, null, null)), (l()(),
            e.sb(14, 0, null, null, 4, "div", [["fxLayout", "row"], ["fxLayoutAlign", "center center"]], null, null, null, null, null)), e.rb(15, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(16, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(17, 0, null, null, 1, "span", [["class", "mat-subheading-2"]], null, null, null, null, null)), (l()(),
            e.Kb(18, null, ["", ""]))], function(l, n) {
                l(n, 1, 0, "column"),
                l(n, 2, 0, "center center"),
                l(n, 6, 0, "column"),
                l(n, 7, 0, "center center"),
                l(n, 9, 0, "row"),
                l(n, 10, 0, "center center"),
                l(n, 15, 0, "row"),
                l(n, 16, 0, "center center")
            }, function(l, n) {
                l(n, 18, 0, n.component.error.message)
            })
        }
        function Ee(l) {
            return e.Mb(0, [e.Eb(0, h.A, []), (l()(),
            e.kb(16777216, null, null, 1, null, _e)), e.rb(2, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Te)), e.rb(4, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, null, 1, null, Pe)), e.rb(6, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null)], function(l, n) {
                var a = n.component;
                l(n, 2, 0, a.carregando),
                l(n, 4, 0, !a.carregando && !a.error),
                l(n, 6, 0, a.semMatricula || a.error)
            }, null)
        }
        function Se(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 1, "app-confirmacao-matricula", [], null, null, null, Ee, ye)), e.rb(1, 114688, null, 0, Ce, [pe, bl, _l.e], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }
        var De = e.ob("app-confirmacao-matricula", Ce, Se, {
            isConfirmacao: "isConfirmacao",
            mostraContrato: "mostraContrato"
        }, {}, [])
          , Me = function() {
            function l(l, n) {
                var a = this;
                this.authService = l,
                this.alunoService = n,
                this.authService.getAuthStatus().subscribe(function(l) {
                    l.uid && /^[r][a]\d/.test(l.uid) && (a.ra = l.uid.replace(/[^\d]+/g, ""),
                    a.alunoService.setAluno({
                        ra: a.ra
                    }))
                })
            }
            return l.prototype.ngOnInit = function() {}
            ,
            l
        }()
          , Re = e.qb({
            encapsulation: 0,
            styles: [[""]],
            data: {}
        });
        function Ge(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 1, "app-confirmacao-matricula", [], null, null, null, Ee, ye)), e.rb(1, 114688, null, 0, Ce, [pe, bl, _l.e], {
                isConfirmacao: [0, "isConfirmacao"],
                mostraContrato: [1, "mostraContrato"]
            }, null)], function(l, n) {
                l(n, 1, 0, !0, !0)
            }, null)
        }
        function qe(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 1, "app-comprovantes", [], null, null, null, Ge, Re)), e.rb(1, 114688, null, 0, Me, [fl.a, pe], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }
        var Ne = e.ob("app-comprovantes", Me, qe, {}, {}, [])
          , Be = e.qb({
            encapsulation: 0,
            styles: [[".mat-title[_ngcontent-%COMP%]{margin:0!important}"]],
            data: {}
        });
        function ze(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 9, "mat-list-item", [["class", "mat-list-item"]], [[2, "mat-list-item-avatar", null], [2, "mat-list-item-with-avatar", null]], null, null, R.f, R.b)), e.rb(1, 1228800, null, 3, G.c, [e.k, [2, G.g], [2, G.a], e.h], null, null), e.Ib(603979776, 1, {
                _lines: 1
            }), e.Ib(335544320, 2, {
                _avatar: 0
            }), e.Ib(335544320, 3, {
                _icon: 0
            }), (l()(),
            e.sb(5, 0, null, 2, 2, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, y.b, y.a)), e.rb(6, 9158656, null, 0, _.b, [e.k, _.d, [8, null], [2, _.a]], null, null), (l()(),
            e.Kb(-1, 0, ["chevron_right"])), (l()(),
            e.Kb(8, 2, [" ", " "])), e.Gb(9, 1)], function(l, n) {
                l(n, 6, 0)
            }, function(l, n) {
                l(n, 0, 0, e.Cb(n, 1)._avatar || e.Cb(n, 1)._icon, e.Cb(n, 1)._avatar || e.Cb(n, 1)._icon),
                l(n, 5, 0, e.Cb(n, 6).inline, "primary" !== e.Cb(n, 6).color && "accent" !== e.Cb(n, 6).color && "warn" !== e.Cb(n, 6).color);
                var a = e.Lb(n, 8, 0, l(n, 9, 0, e.Cb(n.parent.parent, 0), n.context.$implicit.descricao));
                l(n, 8, 0, a)
            })
        }
        function Ke(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 3, "mat-list", [["class", "mat-list mat-list-base"]], null, null, null, R.h, R.a)), e.rb(1, 704512, null, 0, G.a, [e.k], null, null), (l()(),
            e.kb(16777216, null, 0, 1, null, ze)), e.rb(3, 278528, null, 0, h.o, [e.R, e.O, e.u], {
                ngForOf: [0, "ngForOf"]
            }, null)], function(l, n) {
                l(n, 3, 0, n.component.data.error.turmas)
            }, null)
        }
        function He(l) {
            return e.Mb(0, [e.Eb(0, h.A, []), (l()(),
            e.sb(1, 0, null, null, 9, "div", [["class", "mat-subheading-2"], ["fxLayout", "row"], ["fxLayoutAlign", "start center"], ["fxLayoutGap", "10px"]], null, null, null, null, null)), e.rb(2, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(3, 1720320, null, 0, b.e, [e.k, e.B, F.b, f.i, [2, b.l], f.f], {
                fxLayoutGap: [0, "fxLayoutGap"]
            }, null), e.rb(4, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), (l()(),
            e.sb(5, 0, null, null, 1, "i", [["class", "material-icons"], ["style", "color: #f44336;font-size: 30px;"]], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["new_releases"])), (l()(),
            e.Kb(-1, null, [" \xa0 "])), (l()(),
            e.sb(8, 0, null, null, 2, "span", [["class", "mat-title"]], null, null, null, null, null)), (l()(),
            e.sb(9, 0, null, null, 1, "b", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["ATEN\xc7\xc3O!"])), (l()(),
            e.sb(11, 0, null, null, 7, "div", [["class", "mat-dialog-content"], ["mat-dialog-content", ""]], null, null, null, null, null)), e.rb(12, 16384, null, 0, _l.j, [], null, null), (l()(),
            e.sb(13, 0, null, null, 3, "p", [["class", "mat-subheading-1"]], null, null, null, null, null)), (l()(),
            e.sb(14, 0, null, null, 2, "b", [], null, null, null, null, null)), (l()(),
            e.Kb(15, null, ["", ":"])), e.Gb(16, 1), (l()(),
            e.kb(16777216, null, null, 1, null, Ke)), e.rb(18, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.sb(19, 0, null, null, 4, "div", [["class", "mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), e.rb(20, 16384, null, 0, _l.f, [], null, null), (l()(),
            e.sb(21, 0, null, null, 2, "button", [["color", "primary"], ["mat-stroked-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function(l, n, a) {
                var e = !0;
                return "click" === n && (e = !1 !== l.component.onNoClick() && e),
                e
            }, N.d, N.b)), e.rb(22, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.Kb(-1, 0, ["OK"]))], function(l, n) {
                var a = n.component;
                l(n, 2, 0, "row"),
                l(n, 3, 0, "10px"),
                l(n, 4, 0, "start center"),
                l(n, 18, 0, a.data.error.turmas),
                l(n, 22, 0, "primary")
            }, function(l, n) {
                var a = n.component
                  , o = e.Lb(n, 15, 0, l(n, 16, 0, e.Cb(n, 0), a.data.error.message));
                l(n, 15, 0, o),
                l(n, 21, 0, e.Cb(n, 22).disabled || null, "NoopAnimations" === e.Cb(n, 22)._animationMode)
            })
        }
        function Ue(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 1, "app-notificacao", [], null, null, null, He, Be)), e.rb(1, 114688, null, 0, ml, [_l.a, _l.l], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }
        var je = e.ob("app-notificacao", ml, Ue, {}, {}, [])
          , $e = e.qb({
            encapsulation: 0,
            styles: [['@import url(https://themes.googleusercontent.com/fonts/css?kit=dpiI8CyVsrzWsJLBFKehGpLhv3qFjX7dUn1mYxfCXhI);ol.lst-kix_list_1-0[_ngcontent-%COMP%], ol.lst-kix_list_1-3[_ngcontent-%COMP%], ol.lst-kix_list_1-4[_ngcontent-%COMP%], ol.lst-kix_list_1-5[_ngcontent-%COMP%], ol.lst-kix_list_1-6[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_list_1-4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_list_1-4}ol.lst-kix_list_1-1[_ngcontent-%COMP%], ol.lst-kix_list_1-2[_ngcontent-%COMP%]{list-style-type:none}ol.lst-kix_list_1-6.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_list_1-6 0}.lst-kix_list_1-1[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_list_1-1}ol.lst-kix_list_1-3.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_list_1-3 0}ol.lst-kix_list_1-2.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_list_1-2 0}ol.lst-kix_list_1-8.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_list_1-8 0}.lst-kix_list_1-0[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:"" counter(lst-ctn-kix_list_1-0,lower-latin) ") "}ol.lst-kix_list_1-5.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_list_1-5 0}ol.lst-kix_list_1-7[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_list_1-1[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:"" counter(lst-ctn-kix_list_1-1,lower-latin) ". "}.lst-kix_list_1-2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:"" counter(lst-ctn-kix_list_1-2,lower-roman) ". "}.lst-kix_list_1-7[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_list_1-7}ol.lst-kix_list_1-8[_ngcontent-%COMP%]{list-style-type:none}.lst-kix_list_1-3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:"" counter(lst-ctn-kix_list_1-3,decimal) ". "}.lst-kix_list_1-4[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:"" counter(lst-ctn-kix_list_1-4,lower-latin) ". "}ol.lst-kix_list_1-0.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_list_1-0 0}.lst-kix_list_1-0[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_list_1-0}.lst-kix_list_1-6[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_list_1-6}.lst-kix_list_1-7[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:"" counter(lst-ctn-kix_list_1-7,lower-latin) ". "}.lst-kix_list_1-3[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_list_1-3}.lst-kix_list_1-5[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:"" counter(lst-ctn-kix_list_1-5,lower-roman) ". "}.lst-kix_list_1-6[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:"" counter(lst-ctn-kix_list_1-6,decimal) ". "}ol.lst-kix_list_1-7.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_list_1-7 0}.lst-kix_list_1-2[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_list_1-2}.lst-kix_list_1-5[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_list_1-5}.lst-kix_list_1-8[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{counter-increment:lst-ctn-kix_list_1-8}ol.lst-kix_list_1-4.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_list_1-4 0}.lst-kix_list_1-8[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:before{content:"" counter(lst-ctn-kix_list_1-8,lower-roman) ". "}ol.lst-kix_list_1-1.start[_ngcontent-%COMP%]{counter-reset:lst-ctn-kix_list_1-1 0}ol[_ngcontent-%COMP%]{margin:0;padding:0}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:0}.c33[_ngcontent-%COMP%]{padding:5pt;vertical-align:top;width:219.8pt;border-right:0 solid #000;border-left:0 solid #000;border-width:0;border-color:#000;border-top:0 solid #000;border-style:solid;border-bottom:0 solid #000}.c25[_ngcontent-%COMP%]{padding:0 3.5pt;vertical-align:middle;width:134.4pt;border-right:1pt solid #000;border-left:1pt solid #000;border-width:1pt;border-color:#000;border-top:1pt solid #000;border-style:solid;border-bottom:1pt solid #000}.c26[_ngcontent-%COMP%]{padding:0 3.5pt;vertical-align:top;width:128pt;border-right:1pt solid #000;border-left:1pt solid #000;border-width:1pt;border-color:#000;border-top:1pt solid #000;border-style:solid;border-bottom:1pt solid #000}.c34[_ngcontent-%COMP%]{padding:0 3.5pt;vertical-align:middle;width:95.7pt;border-right:1pt solid #000;border-left:1pt solid #000;border-width:1pt;border-color:#000;border-top:1pt solid #000;border-style:solid;border-bottom:1pt solid #000}.c20[_ngcontent-%COMP%]{padding:0 3.5pt;vertical-align:top;width:134.4pt;border-right:1pt solid #000;border-left:1pt solid #000;border-width:1pt;border-color:#000;border-top:1pt solid #000;border-style:solid;border-bottom:1pt solid #000}.c35[_ngcontent-%COMP%]{padding:0 3.5pt;vertical-align:top;width:95.7pt;border-right:1pt solid #000;border-left:1pt solid #000;border-width:1pt;border-color:#000;border-top:1pt solid #000;border-style:solid;border-bottom:1pt solid #000}.c36[_ngcontent-%COMP%]{padding:0 3.5pt;vertical-align:middle;width:128pt;border-right:1pt solid #000;border-left:1pt solid #000;border-width:1pt;border-color:#000;border-top:1pt solid #000;border-style:solid;border-bottom:1pt solid #000}.c10[_ngcontent-%COMP%]{padding:5pt;vertical-align:top;width:279.8pt;border-right:0 solid #000;border-left:0 solid #000;border-width:0;border-color:#000;border-top:0 solid #000;border-style:solid;border-bottom:0 solid #000}.c3[_ngcontent-%COMP%]{-webkit-text-decoration-skip:none;color:#000;font-weight:700;vertical-align:baseline;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none;font-size:10pt;font-family:Arial;font-style:normal}.c2[_ngcontent-%COMP%]{padding-top:0;text-indent:36pt;padding-bottom:0;line-height:1;orphans:2;widows:2;text-align:justify;height:12pt}.c4[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0;line-height:1;orphans:2;widows:2;text-align:justify;height:12pt}.c11[_ngcontent-%COMP%]{padding-top:12pt;padding-bottom:6pt;line-height:1;page-break-after:avoid;orphans:2;widows:2;text-align:center}.c6[_ngcontent-%COMP%]{padding-top:0;text-indent:36pt;padding-bottom:0;line-height:1;orphans:2;widows:2;text-align:justify}.c1[_ngcontent-%COMP%]{color:#000;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:10pt;font-family:Arial;font-style:normal}.c0[_ngcontent-%COMP%]{color:#000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:10pt;font-family:Arial;font-style:normal;text-align:center}.c22[_ngcontent-%COMP%]{color:#000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:14pt;font-family:"Liberation Sans";font-style:normal}.c19[_ngcontent-%COMP%]{color:#000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:"Liberation Serif";font-style:normal}.c8[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0;line-height:1;orphans:2;widows:2;text-align:left;height:12pt}.c9[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0;line-height:1;orphans:2;widows:2;text-align:justify}.c5[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0;line-height:1;orphans:2;widows:2;text-align:center}.c23[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0;line-height:1;orphans:2;widows:2;text-align:right}.c17[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0;line-height:1;orphans:2;widows:2;text-align:left}.c13[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0;line-height:1;text-align:center;height:12pt}.c28[_ngcontent-%COMP%]{margin-left:auto;border-spacing:0;border-collapse:collapse;margin-right:auto}.c30[_ngcontent-%COMP%]{border-spacing:0;border-collapse:collapse;margin-right:auto}.c15[_ngcontent-%COMP%]{color:#000;text-decoration:none;vertical-align:baseline;font-style:italic}.c18[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0;line-height:1;text-align:center}.c27[_ngcontent-%COMP%]{font-size:12pt;font-weight:700;font-family:Arial;text-align:center}.c16[_ngcontent-%COMP%]{font-size:10pt;font-weight:700;font-family:Arial}.c21[_ngcontent-%COMP%]{background-color:#fff;max-width:481.9pt;padding:56.7pt}.c12[_ngcontent-%COMP%]{font-size:10pt;font-weight:400;font-family:Arial}.c24[_ngcontent-%COMP%]{height:0}.c29[_ngcontent-%COMP%]{page-break-after:avoid}.c7[_ngcontent-%COMP%]{background-color:#0f0}.c31[_ngcontent-%COMP%]{height:26.9pt}.c32[_ngcontent-%COMP%]{text-indent:36pt}.c14[_ngcontent-%COMP%]{height:12pt}.title[_ngcontent-%COMP%]{padding-top:12pt;color:#000;font-size:14pt;padding-bottom:6pt;font-family:"Liberation Sans";line-height:1;page-break-after:avoid;orphans:2;widows:2;text-align:center}.subtitle[_ngcontent-%COMP%]{padding-top:18pt;color:#666;font-size:24pt;padding-bottom:4pt;font-family:Georgia;line-height:1;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}li[_ngcontent-%COMP%]{color:#000;font-size:12pt;font-family:"Liberation Serif"}p[_ngcontent-%COMP%]{margin:0;color:#000;font-size:12pt;font-family:"Liberation Serif"}h1[_ngcontent-%COMP%]{padding-top:12pt;color:#000;font-size:14pt;padding-bottom:6pt;font-family:"Liberation Sans";line-height:1;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2[_ngcontent-%COMP%]{padding-top:18pt;color:#000;font-weight:700;font-size:18pt;padding-bottom:4pt;font-family:"Liberation Serif";line-height:1;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3[_ngcontent-%COMP%]{padding-top:14pt;color:#000;font-weight:700;font-size:14pt;padding-bottom:4pt;font-family:"Liberation Serif";line-height:1;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4[_ngcontent-%COMP%]{padding-top:12pt;color:#000;font-weight:700;font-size:12pt;padding-bottom:2pt;font-family:"Liberation Serif";line-height:1;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5[_ngcontent-%COMP%]{padding-top:11pt;color:#000;font-weight:700;font-size:11pt;padding-bottom:2pt;font-family:"Liberation Serif";line-height:1;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6[_ngcontent-%COMP%]{padding-top:10pt;color:#000;font-weight:700;font-size:10pt;padding-bottom:2pt;font-family:"Liberation Serif";line-height:1;page-break-after:avoid;orphans:2;widows:2;text-align:left}']],
            data: {}
        });
        function Ve(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["LI E CONCORDO"]))], null, null)
        }
        function Qe(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (l()(),
            e.Kb(-1, null, ["FECHAR"]))], null, null)
        }
        function Ye(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 2, "mat-dialog-content", [["class", "mat-dialog-content"]], null, null, null, null, null)), e.rb(1, 16384, null, 0, _l.j, [], null, null), (l()(),
            e.sb(2, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), (l()(),
            e.sb(3, 0, null, null, 13, "div", [["class", "mat-dialog-actions"], ["mat-dialog-actions", ""]], null, null, null, null, null)), e.rb(4, 16384, null, 0, _l.f, [], null, null), (l()(),
            e.sb(5, 0, null, null, 11, "div", [["fxFlex", ""], ["fxLayout", "row"], ["fxLayoutAlign", "space-between center"]], null, null, null, null, null)), e.rb(6, 671744, null, 0, b.d, [e.k, f.i, [2, b.m], f.f], {
                fxLayout: [0, "fxLayout"]
            }, null), e.rb(7, 671744, null, 0, b.c, [e.k, f.i, [2, b.k], f.f], {
                fxLayoutAlign: [0, "fxLayoutAlign"]
            }, null), e.rb(8, 671744, null, 0, b.b, [e.k, f.i, f.e, b.j, f.f], {
                fxFlex: [0, "fxFlex"]
            }, null), (l()(),
            e.sb(9, 0, null, null, 0, "div", [], null, null, null, null, null)), (l()(),
            e.sb(10, 0, null, null, 6, "div", [], null, null, null, null, null)), (l()(),
            e.sb(11, 0, null, null, 5, "button", [["color", "primary"], ["mat-stroked-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function(l, n, a) {
                var e = !0;
                return "click" === n && (e = !1 !== l.component.onNoClick() && e),
                e
            }, N.d, N.b)), e.rb(12, 180224, null, 0, B.b, [e.k, g.a, w.h, [2, C.a]], {
                color: [0, "color"]
            }, null), (l()(),
            e.kb(16777216, null, 0, 1, null, Ve)), e.rb(14, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null), (l()(),
            e.kb(16777216, null, 0, 1, null, Qe)), e.rb(16, 16384, null, 0, h.p, [e.R, e.O], {
                ngIf: [0, "ngIf"]
            }, null)], function(l, n) {
                var a = n.component;
                l(n, 6, 0, "row"),
                l(n, 7, 0, "space-between center"),
                l(n, 8, 0, ""),
                l(n, 12, 0, "primary"),
                l(n, 14, 0, !a.viewOnly),
                l(n, 16, 0, a.viewOnly)
            }, function(l, n) {
                l(n, 2, 0, n.component.contratoHtml),
                l(n, 11, 0, e.Cb(n, 12).disabled || null, "NoopAnimations" === e.Cb(n, 12)._animationMode)
            })
        }
        function Je(l) {
            return e.Mb(0, [(l()(),
            e.sb(0, 0, null, null, 1, "app-contrato-cpse", [], null, null, null, Ye, $e)), e.rb(1, 114688, null, 0, Cl, [_l.a, _l.l, O.c], null, null)], function(l, n) {
                l(n, 1, 0)
            }, null)
        }
        var Ze = e.ob("app-contrato-cpse", Cl, Je, {}, {}, [])
          , Xe = a("7vAU")
          , We = a("mVsa")
          , lo = a("M2Lx")
          , no = a("4tE/")
          , ao = a("jQLj")
          , eo = a("91LU")
          , oo = a("t/Na")
          , uo = a("4epT")
          , to = a("VqyD")
          , io = a("OkvK")
          , ro = a("GqbA")
          , so = a("QYds")
          , co = a("+Ioo")
          , po = a("93cY")
          , bo = a("wWP+")
          , fo = a("YBca")
          , mo = a("P+IX")
          , xo = a("zwwo")
          , go = a("vGXY")
          , ho = a("8mMr")
          , Co = a("Nsh5")
          , yo = a("4c35")
          , _o = a("9It4")
          , Lo = a("hUWP")
          , vo = a("3pJQ")
          , ko = a("V9q+")
          , Ao = a("bse0")
          , wo = a("Z+uX")
          , Fo = a("y4qS")
          , Oo = a("BHnd")
          , Io = a("/dO6")
          , To = a("u7R8")
          , Po = a("vARd")
          , Eo = a("kWGw")
          , So = a("YhbO")
          , Do = a("jlZm")
          , Mo = a("6Wmm")
          , Ro = a("Pc2U")
          , Go = a("I25s")
          , qo = a("iAsR")
          , No = a("pKmL")
          , Bo = function() {
            return function() {}
        }()
          , zo = a("YSh2");
        a.d(n, "AaMatriculaModuleNgFactory", function() {
            return Ko
        });
        var Ko = e.pb(o, [], function(l) {
            return e.zb([e.Ab(512, e.j, e.eb, [[8, [u.a, t.a, i.b, i.a, r.a, s.a, s.b, c.a, d.a, p.a, In, ee, ce, he, Ne, De, je, Ze]], [3, e.j], e.z]), e.Ab(4608, h.r, h.q, [e.w, [2, h.G]]), e.Ab(4608, Xe.a, Xe.a, []), e.Ab(5120, Xe.c, Xe.d, [Xe.a]), e.Ab(4608, k.d, k.d, [k.j, k.f, e.j, k.i, k.g, e.s, e.B, h.e, F.b, [2, h.k]]), e.Ab(5120, k.k, k.l, [k.d]), e.Ab(5120, We.b, We.g, [k.d]), e.Ab(4608, lo.c, lo.c, []), e.Ab(4608, q.d, q.d, []), e.Ab(5120, no.b, no.c, [k.d]), e.Ab(4608, E.G, E.G, []), e.Ab(4608, E.h, E.h, []), e.Ab(5120, e.b, function(l, n) {
                return [f.j(l, n)]
            }, [h.e, e.D]), e.Ab(5120, _l.c, _l.d, [k.d]), e.Ab(135680, _l.e, _l.e, [k.d, e.s, [2, h.k], [2, _l.b], _l.c, [3, _l.e], k.f]), e.Ab(4608, ao.i, ao.i, []), e.Ab(5120, ao.a, ao.b, [k.d]), e.Ab(4608, q.c, q.z, [[2, q.h], g.a]), e.Ab(5120, K.g, K.a, [[3, K.g]]), e.Ab(4608, eo.d, eo.d, []), e.Ab(4608, eo.e, eo.e, [[2, eo.f]]), e.Ab(4608, eo.c, eo.c, [oo.c, eo.e]), e.Ab(5120, v.b, v.c, [k.d]), e.Ab(4608, O.f, q.e, [[2, q.i], [2, q.n]]), e.Ab(5120, En.a, En.b, [k.d]), e.Ab(4608, uo.c, to.a, []), e.Ab(5120, io.d, io.a, [[3, io.d]]), e.Ab(4608, h.f, h.f, [e.w]), e.Ab(4608, ro.a, ro.a, [h.f]), e.Ab(4608, so.a, so.a, []), e.Ab(4608, co.a, co.a, [oo.c, so.a]), e.Ab(4608, po.a, po.a, [oo.c]), e.Ab(4608, bo.a, bo.a, [oo.c]), e.Ab(4608, fl.a, fl.a, [oo.c, ul.a]), e.Ab(4608, fo.a, fo.a, [oo.c]), e.Ab(4608, oo.d, oo.d, []), e.Ab(4608, mo.a, mo.a, [fl.a, Q.n]), e.Ab(4608, bl, bl, [oo.c, ul.a]), e.Ab(4608, pe, pe, [oo.c]), e.Ab(5120, oo.a, function(l, n) {
                return [new xo.a(l,n)]
            }, [fl.a, Q.n]), e.Ab(1073742336, h.c, h.c, []), e.Ab(1073742336, go.c, go.c, []), e.Ab(1073742336, Q.q, Q.q, [[2, Q.w], [2, Q.n]]), e.Ab(1073742336, Xe.b, Xe.b, []), e.Ab(1073742336, F.a, F.a, []), e.Ab(1073742336, q.n, q.n, [[2, q.f], [2, O.g]]), e.Ab(1073742336, ho.b, ho.b, []), e.Ab(1073742336, g.b, g.b, []), e.Ab(1073742336, q.y, q.y, []), e.Ab(1073742336, B.c, B.c, []), e.Ab(1073742336, A.g, A.g, []), e.Ab(1073742336, Co.h, Co.h, []), e.Ab(1073742336, _.c, _.c, []), e.Ab(1073742336, yo.g, yo.g, []), e.Ab(1073742336, k.h, k.h, []), e.Ab(1073742336, We.e, We.e, []), e.Ab(1073742336, T.b, T.b, []), e.Ab(1073742336, q.p, q.p, []), e.Ab(1073742336, q.w, q.w, []), e.Ab(1073742336, G.d, G.d, []), e.Ab(1073742336, lo.d, lo.d, []), e.Ab(1073742336, L.e, L.e, []), e.Ab(1073742336, _o.c, _o.c, []), e.Ab(1073742336, M.g, M.g, []), e.Ab(1073742336, $.c, $.c, []), e.Ab(1073742336, j.c, j.c, []), e.Ab(1073742336, q.t, q.t, []), e.Ab(1073742336, no.e, no.e, []), e.Ab(1073742336, E.D, E.D, []), e.Ab(1073742336, E.o, E.o, []), e.Ab(1073742336, E.z, E.z, []), e.Ab(1073742336, f.c, f.c, []), e.Ab(1073742336, b.i, b.i, []), e.Ab(1073742336, Lo.d, Lo.d, []), e.Ab(1073742336, vo.a, vo.a, []), e.Ab(1073742336, ko.a, ko.a, [[2, f.g], e.D]), e.Ab(1073742336, w.a, w.a, []), e.Ab(1073742336, J.k, J.k, []), e.Ab(1073742336, S.c, S.c, []), e.Ab(1073742336, _l.k, _l.k, []), e.Ab(1073742336, ao.j, ao.j, []), e.Ab(1073742336, q.A, q.A, []), e.Ab(1073742336, q.q, q.q, []), e.Ab(1073742336, z.e, z.e, []), e.Ab(1073742336, K.h, K.h, []), e.Ab(1073742336, A.e, A.e, []), e.Ab(1073742336, Ao.d, Ao.d, []), e.Ab(1073742336, eo.b, eo.b, []), e.Ab(1073742336, wo.c, wo.c, []), e.Ab(1073742336, v.e, v.e, []), e.Ab(1073742336, x.c, x.c, []), e.Ab(1073742336, Fo.p, Fo.p, []), e.Ab(1073742336, Oo.p, Oo.p, []), e.Ab(1073742336, En.d, En.d, []), e.Ab(1073742336, uo.d, uo.d, []), e.Ab(1073742336, Io.d, Io.d, []), e.Ab(1073742336, To.e, To.e, []), e.Ab(1073742336, Po.f, Po.f, []), e.Ab(1073742336, Eo.c, Eo.c, []), e.Ab(1073742336, So.c, So.c, []), e.Ab(1073742336, Do.d, Do.d, []), e.Ab(1073742336, Mo.a, Mo.a, []), e.Ab(1073742336, Ro.a, Ro.a, []), e.Ab(1073742336, Go.d, Go.d, []), e.Ab(1073742336, io.e, io.e, []), e.Ab(1073742336, qo.b, qo.b, []), e.Ab(1073742336, No.a, No.a, []), e.Ab(1073742336, Bo, Bo, []), e.Ab(1073742336, V.f, V.f, []), e.Ab(1073742336, o, o, []), e.Ab(256, e.w, "pt-BR", []), e.Ab(256, q.h, "pt-BR", []), e.Ab(256, q.g, q.k, []), e.Ab(256, Io.a, {
                separatorKeyCodes: [zo.f]
            }, []), e.Ab(256, Ao.a, No.b, []), e.Ab(256, Po.b, No.c, []), e.Ab(1024, Q.l, function() {
                return [[{
                    path: "matricula-aa",
                    component: yl
                }, {
                    path: "matricula-fa",
                    component: Sn
                }, {
                    path: "matricula",
                    component: oe
                }, {
                    path: "matricula-realizada",
                    component: be
                }, {
                    path: "comprovantes",
                    component: Me
                }, {
                    path: "confirmacao-matricula",
                    component: Ce
                }]]
            }, [])])
        })
    },
    ziqz: function(l, n, a) {
        "use strict";
        a.d(n, "a", function() {
            return i
        });
        var e = a("TJwl")
          , o = a("CcnG")
          , u = a("vARd")
          , t = a("o3x0")
          , i = function() {
            function l(l, n) {
                this.snackBar = l,
                this.dialog = n
            }
            return l.prototype.showDialog = function(l, n) {
                this.snackBar.openFromComponent(e.a, {
                    data: {
                        title: l,
                        icon: n
                    }
                })
            }
            ,
            l.ngInjectableDef = o.V({
                factory: function() {
                    return new l(o.Z(u.c),o.Z(t.e))
                },
                token: l,
                providedIn: "root"
            }),
            l
        }()
    }
}]);
