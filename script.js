!function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : e.jQuery ? t(e.jQuery) : t(e.Zepto)
}(this, function(e, t) {
    e.fn.lunaradio = function(i) {
        var a = "string" == typeof i
          , o = Array.prototype.slice.call(arguments, 1)
          , n = this;
        return i = !a && o.length ? e.extend.apply(null, [!0, i].concat(o)) : i,
        a && "_" === i.charAt(0) ? n : (a ? this.each(function() {
            var a = e(this).data("lunaradio")
              , r = a && e.isFunction(a[i]) ? a[i].apply(a, o) : a;
            if (r !== a && r !== t)
                return n = r,
                !1
        }) : this.each(function() {
            e(this).data("lunaradio", new e.lunaradio(this,i))
        }),
        n)
    }
    ,
    e.lunaradio = function(i, a) {
        function o(e, i) {
            return e !== t && "" != e.toString() || (e = i),
            e
        }
        function n() {
            if (!M()) {
                for (; L.lastElementChild; )
                    L.removeChild(L.lastElementChild);
                L.load()
            }
        }
        function r() {
            if (M())
                Ue || (L.src = G,
                L.load());
            else {
                var e = document.createElement("source");
                e.src = G,
                L.appendChild(e),
                L.load()
            }
            Ue = !0
        }
        function s(e) {
            var t = document.createElement("link");
            t.type = "text/css",
            t.rel = "stylesheet",
            t.href = "https://fonts.googleapis.com/css?family=" + e,
            document.getElementsByTagName("head")[0].appendChild(t)
        }
        function l() {
            var t = document.getElementById(R);
            t.innerHTML = "",
            e("#" + R).addClass("lunaaudioplayer").css({
                overflow: "hidden",
                display: "block"
            });
            var a = document.createElement("div");
            a.id = R + "containerinside",
            t.appendChild(a),
            e("#" + R + "containerinside").css({
                position: "relative",
                left: "0px",
                top: "0px",
                height: "100%",
                width: "100%",
                background: Z
            }),
            G = "true" == ce && "" != le ? le + E() : E(),
            (L = new Audio).id = R + "html5audio",
            L.preload = "auto",
            L.addEventListener("timeupdate", function() {
                I("timeupdate: " + L.currentTime),
                0 == L.paused && (e("#" + R + "audiopreloader").fadeOut(0),
                e("#" + R + "smallaudiopreloader").fadeOut(0))
            }, !1),
            L.addEventListener("loadedmetadata", function() {
                I("loadedmetadata")
            }, !1),
            L.addEventListener("ended", function() {
                n(),
                r(),
                Be && L.play().catch(function() {
                    I("error on html5 play")
                }),
                I("ended")
            }, !1),
            L.addEventListener("play", function() {
                A(),
                I("play")
            }, !1),
            L.addEventListener("loadstart", function() {
                Be && (e("#" + R + "audiopreloader").fadeIn(0),
                e("#" + R + "smallaudiopreloader").fadeIn(0)),
                I("loadstart")
            }, !1),
            L.addEventListener("waiting", function() {
                e("#" + R + "audiopreloader").fadeIn(0),
                e("#" + R + "smallaudiopreloader").fadeIn(0),
                I("waiting")
            }, !1),
            L.addEventListener("seeked", function() {
                e("#" + R + "audiopreloader").fadeOut(0),
                e("#" + R + "smallaudiopreloader").fadeOut(0),
                I("seeked")
            }, !1),
            L.addEventListener("canplaythrough", function() {
                e("#" + R + "audiopreloader").fadeOut(0),
                e("#" + R + "smallaudiopreloader").fadeOut(0),
                e("#" + R + "iconlive, #" + R + "smalliconlive").css({
                    opacity: "1.0"
                }),
                I("canplaythrough")
            }, !1),
            L.addEventListener("pause", function() {
                L.currentTime.toFixed(1) < L.duration.toFixed(1) && w(),
                I("pause: currentTime: " + L.currentTime.toFixed(1) + " duration: " + L.duration.toFixed(1))
            }, !1),
            L.addEventListener("error", function(t) {
                I(L.readyState),
                setTimeout(function() {
                    n(),
                    r(),
                    Be && L.play().catch(function() {
                        I("error on html5 play")
                    })
                }, 1e3),
                e("#" + R + "iconlive, #" + R + "smalliconlive").css({
                    opacity: "0"
                })
            }, !0),
            function(t) {
                (V = document.createElement("canvas")).id = R + "canvas",
                t.appendChild(V),
                e("#" + R + "canvas").css({
                    display: "block",
                    background: "none",
                    position: "absolute",
                    top: "0px"
                }),
                P = V.getContext("2d")
            }(a),
            "big" == X ? function(t) {
                var a = document.createElement("div");
                a.id = R + "playerwrapper",
                t.appendChild(a),
                e("#" + R + "playerwrapper").css({
                    overflow: "hidden",
                    display: "block",
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    height: "100%",
                    width: "100%"
                }),
                function(t) {
                    var i = document.createElement("div");
                    i.id = R + "backgroundimage",
                    t.appendChild(i),
                    e("#" + R + "backgroundimage").css({
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        height: "100%",
                        width: "100%",
                        "-webkit-filter": "blur(40px)",
                        filter: "blur(40px)",
                        opacity: "0.5"
                    });
                    var a = document.createElement("div");
                    a.id = R + "backgroundimage1",
                    i.appendChild(a),
                    e("#" + R + "backgroundimage1").css({
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        height: "100%",
                        width: "100%",
                        transition: "opacity 1s",
                        opacity: "0.0",
                        "background-repeat": "no-repeat",
                        "background-size": "cover"
                    }),
                    (a = document.createElement("div")).id = R + "backgroundimage2",
                    i.appendChild(a),
                    e("#" + R + "backgroundimage2").css({
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        height: "100%",
                        width: "100%",
                        transition: "opacity 1s",
                        opacity: "0.0",
                        "background-repeat": "no-repeat",
                        "background-size": "cover"
                    }),
                    (i = document.createElement("div")).id = R + "coverwrapper",
                    t.appendChild(i),
                    e("#" + R + "coverwrapper").css({
                        position: "absolute",
                        overflow: "hidden",
                        background: "rgba(" + z(W).r + ", " + z(W).g + ", " + z(W).b + ", 0.1)"
                    }).on("click", function() {
                        "" != Oe && window.open(Oe)
                    }).lunaradiodisableSelection(),
                    (a = document.createElement("div")).id = R + "coverwrapper1",
                    i.appendChild(a),
                    e("#" + R + "coverwrapper1").css({
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        height: "100%",
                        width: "100%",
                        overflow: "hidden",
                        transition: "opacity 1s",
                        opacity: "0.0",
                        "background-repeat": "no-repeat",
                        "background-size": "cover"
                    }),
                    (a = document.createElement("div")).id = R + "coverwrapper2",
                    i.appendChild(a),
                    e("#" + R + "coverwrapper2").css({
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        height: "100%",
                        width: "100%",
                        overflow: "hidden",
                        transition: "opacity 1s",
                        opacity: "0.0",
                        "background-repeat": "no-repeat",
                        "background-size": "cover"
                    }),
                    "circle" == ie && (e("#" + R + "coverwrapper, #" + R + "coverwrapper1, #" + R + "coverwrapper2").css({
                        "border-radius": "50%"
                    }),
                    e("#" + R + "backgroundimage, #" + R + "backgroundimage1, #" + R + "backgroundimage2").css({
                        "border-radius": "50%"
                    }))
                }(a),
                (i = document.createElement("div")).id = R + "iconlive",
                a.appendChild(i),
                e("#" + R + "iconlive").css({
                    position: "absolute",
                    fill: "rgba(" + z(W).r + ", " + z(W).g + ", " + z(W).b + ", 0.3)"
                }).html('<svg x="0px" y="0px" viewBox="-16 0 512 512.00113" ><path d="m262.84375 140.558594c-12.699219 12.671875-33.28125 12.671875-45.980469 0-12.695312-12.671875-12.695312-33.21875 0-45.890625 12.699219-12.671875 33.28125-12.671875 45.980469 0 12.695312 12.671875 12.695312 33.21875 0 45.890625zm0 0"/><path d="m307.257812 189.726562c-3.960937 0-7.921874-1.511718-10.9375-4.539062-6.03125-6.039062-6.019531-15.824219.019532-21.851562 12.238281-12.214844 18.976562-28.453126 18.976562-45.722657s-6.738281-33.507812-18.976562-45.722656c-6.039063-6.03125-6.050782-15.8125-.019532-21.855469 6.027344-6.039062 15.8125-6.050781 21.851563-.019531 18.089844 18.054687 28.050781 42.058594 28.050781 67.597656 0 25.535157-9.960937 49.542969-28.050781 67.597657-3.015625 3.011718-6.964844 4.515624-10.914063 4.515624zm0 0"/><path d="m342.210938 235.222656c-3.960938 0-7.921876-1.511718-10.9375-4.535156-6.03125-6.042969-6.019532-15.824219.019531-21.855469 24.414062-24.367187 37.863281-56.761719 37.863281-91.21875s-13.449219-66.851562-37.863281-91.21875c-6.039063-6.03125-6.050781-15.8125-.019531-21.855469 6.03125-6.039062 15.8125-6.050781 21.851562-.019531 30.265625 30.207031 46.9375 70.371094 46.933594 113.09375 0 42.722657-16.667969 82.890625-46.933594 113.097657-3.015625 3.007812-6.964844 4.511718-10.914062 4.511718zm0 0"/><path d="m172.371094 189.726562c-3.949219 0-7.898438-1.503906-10.917969-4.515624-18.089844-18.054688-28.050781-42.0625-28.050781-67.597657 0-25.539062 9.960937-49.542969 28.050781-67.597656 6.039063-6.03125 15.824219-6.023437 21.851563.019531 6.03125 6.039063 6.019531 15.824219-.019532 21.855469-12.238281 12.214844-18.976562 28.453125-18.976562 45.722656s6.738281 33.507813 18.976562 45.722657c6.039063 6.027343 6.050782 15.8125.019532 21.851562-3.015626 3.023438-6.976563 4.539062-10.933594 4.539062zm0 0"/><path d="m137.417969 235.222656c-3.953125 0-7.902344-1.503906-10.917969-4.515625-30.265625-30.207031-46.933594-70.371093-46.933594-113.09375 0-42.726562 16.667969-82.890625 46.933594-113.097656 6.039062-6.027344 15.824219-6.019531 21.851562.023437 6.03125 6.039063 6.019532 15.820313-.019531 21.851563-24.414062 24.367187-37.863281 56.761719-37.863281 91.21875s13.449219 66.855469 37.863281 91.222656c6.039063 6.03125 6.050781 15.8125.019531 21.855469-3.015624 3.023438-6.976562 4.535156-10.933593 4.535156zm0 0"/><path d="m443.480469 261.9375h-407.332031c-19.964844 0-36.148438 16.183594-36.148438 36.144531v177.769531c0 19.964844 16.183594 36.148438 36.148438 36.148438h407.328124c19.964844 0 36.148438-16.183594 36.148438-36.148438v-177.769531c0-19.960937-16.183594-36.144531-36.144531-36.144531zm-324.609375 203.683594h-56.933594c-8.53125 0-15.449219-6.917969-15.449219-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.449219-15.453125 8.535156 0 15.453125 6.917969 15.453125 15.453125v110.945313h41.480469c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125zm63.328125-15.453125c0 8.535156-6.917969 15.453125-15.453125 15.453125s-15.453125-6.917969-15.453125-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.453125-15.453125s15.453125 6.917969 15.453125 15.453125zm130.015625-121.929688-38.160156 126.394531c-.003907.011719-.007813.023438-.011719.035157-4.144531 14.144531-25.273438 13.796875-29.5625 0-.003907-.011719-.007813-.023438-.011719-.035157l-38.160156-126.394531c-2.464844-8.171875 2.15625-16.792969 10.328125-19.261719 8.164062-2.464843 16.792969 2.15625 19.257812 10.328126l23.367188 77.394531 23.367187-77.394531c2.46875-8.171876 11.089844-12.796876 19.261719-10.328126 8.167969 2.46875 12.792969 11.089844 10.324219 19.261719zm95.066406 35.320313c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.53125-6.917969 15.453125-15.453125 15.453125h-43.851562v40.25h52.175781c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125h-67.628907c-8.535156 0-15.453124-6.917969-15.453124-15.453125v-126.398438c0-8.53125 6.917968-15.453125 15.453124-15.453125h69.710938c8.53125 0 15.453125 6.917969 15.453125 15.453125 0 8.535157-6.921875 15.453125-15.453125 15.453125h-54.261719v24.335938zm0 0"/></svg>').lunaradiodisableSelection(),
                (i = document.createElement("div")).id = R + "buttonvolumeoff",
                a.appendChild(i),
                e("#" + R + "buttonvolumeoff").css({
                    position: "absolute",
                    transition: "fill 0.5s",
                    cursor: "pointer",
                    fill: W
                }).html('<svg x="0px" y="0px"\t viewBox="0 0 800 800" ><path d="M401.2,400c0,72.2,0,144.4,0,216.5c0,12-3.1,22.6-13.3,29.9c-13.4,9.6-31.1,8-42.8-3.7c-36.7-36.6-73.4-73.3-109.9-110.1\tc-4.5-4.6-9-6.3-15.3-6.2c-41.3,0.3-82.7,0.2-124,0.1c-15.7,0-27-8.6-31-23.8c-1.1-4-1.4-8.4-1.4-12.6c-0.1-60.2-0.1-120.4,0-180.6\tc0-11.1,2.3-21.5,11.7-28.9c6.5-5.1,13.8-7.3,22-7.3c41.6,0,83.3-0.1,124.9,0.1c4.7,0,8.1-1.2,11.5-4.7\tc37-37.2,74.1-74.3,111.2-111.3c16.1-16,41.4-12.8,52.5,6.9c3.5,6.1,3.9,13.1,3.9,20c0,69.5,0,139.1,0,208.6\tC401.2,395.3,401.2,397.7,401.2,400z"/><path d="M685.2,526.5c-7.3,0.4-12.8-2.6-17.5-7.4c-18-18-36-35.9-53.9-54c-3.1-3.1-4.6-2.8-7.5,0.1c-17.5,17.8-35.3,35.4-52.9,53.1\tc-5.2,5.2-11.2,8.5-19,8.3c-7-0.2-12.3-3.3-17-7.9c-8.9-8.7-17.6-17.5-26.4-26.3c-10.3-10.5-10.3-24.6,0.2-35.1\tc17.8-17.9,35.7-35.8,53.7-53.6c3-3,2.9-4.6,0-7.6c-17.7-17.4-35.2-35.1-52.8-52.6c-11-11-12.2-22.8-2-34.5\tc9.3-10.6,19.1-20.9,30.2-29.8c10.9-8.7,23.1-7.6,33,2.3c17.8,17.7,35.6,35.5,53.3,53.4c2.8,2.8,4.3,3,7.2,0.1\tc17.6-17.9,35.4-35.6,53.2-53.4c8.8-8.8,19.4-10.5,29.5-5c1.7,0.9,3.1,2.2,4.4,3.5c9.4,9.4,18.8,18.8,28.2,28.2\tc10,10,10.1,24.1,0,34.2c-17.8,17.9-35.7,35.8-53.7,53.6c-2.9,2.9-3.2,4.5-0.1,7.6c17.7,17.4,35.2,35.1,52.8,52.6\tc6.3,6.3,9.6,13.7,8.1,22.9c-0.9,5.6-3.9,10-7.7,13.9c-8.5,8.7-17,17.3-25.7,25.7C697.8,523.6,692.1,527,685.2,526.5z"/></svg>').on("mouseenter", function() {
                    e(this).css("fill", Y)
                }).on("mouseleave", function() {
                    e(this).css("fill", W)
                }).on("click", function() {
                    T(0)
                }).lunaradiodisableSelection(),
                (i = document.createElement("div")).id = R + "buttonvolumeon",
                a.appendChild(i),
                e("#" + R + "buttonvolumeon").css({
                    position: "absolute",
                    transition: "fill 0.5s",
                    cursor: "pointer",
                    fill: W
                }).html('<svg x="0px" y="0px" viewBox="0 0 800 800"><path d="M359.2,397.1c0,71.7,0,143.3,0,215c0,9.1-1.2,17.7-7.7,24.8c-13.8,14.9-34.2,15.1-49.1,0.3c-32.2-32.1-64.3-64.3-96.4-96.4\tc-4.8-4.8-9.8-9.6-14.5-14.6c-2.6-2.8-5.3-3.9-9.1-3.9c-42.4,0.1-84.8,0.1-127.1,0.1c-15.4,0-27.1-8.9-31.2-23.6\tc-1.1-4.1-1.4-8.3-1.4-12.5c0-60,0-120,0-180c0-14.4,4.6-26.3,18.5-32.9c5.1-2.4,10.6-3.1,16.1-3.1c41.5,0,83,0,124.5,0.1\tc4.2,0,7.1-1.2,9.9-4.1c36.8-36.9,73.6-73.8,110.6-110.6c10.5-10.5,23.1-14.1,37.2-8.3c11.2,4.6,17.9,13.1,19.1,25.5\tc0.5,5.1,0.6,10.2,0.6,15.3C359.2,257.5,359.2,327.3,359.2,397.1z"/><path d="M777.4,394.2c-0.2,41.1-5.6,79-17.7,115.8c-14.5,44.1-36,84.5-65.7,120.4c-9.1,11-18.2,22-28.8,31.6\tc-18.1,16.5-36.4,32.7-57.7,44.9c-19.1,10.9-43.9-1.6-46.9-23.4c-2-14.2,3.3-25.2,14.9-32.9c20.8-13.9,39.6-30.1,56.6-48.4\tc14.9-16,27.8-33.6,38.9-52.5c18.2-31,30.2-64.2,36.7-99.4c3.8-20.4,5.4-41,4.8-61.7c-1.2-42.3-10.6-82.8-28.5-121.1\tc-11.2-23.9-25.5-46-42.4-66.4c-19.8-23.8-43.3-43.3-68.4-61.2c-12.4-8.9-16.3-23.7-10.8-38.1c5.1-13.3,17.6-20.8,32.5-19.9\tc6.1,0.4,11.3,2.4,16.3,5.6c21.2,13.8,40.9,29.5,58.5,47.5c34.5,35.1,61.6,75.3,80.2,121.1c13.4,33,22,67.1,25.4,102.5\tC776.7,371.4,776.9,384.1,777.4,394.2z"/><path d="M652.1,392.3c-0.7,56.6-15.7,104.9-47.2,147.9c-17.4,23.7-38.4,43.6-63.2,59.5c-14.3,9.1-29.1,8.5-41-2\tc-11.9-10.5-13.8-29.9-4.5-42.9c3.9-5.5,9.5-8.9,14.8-12.6c35.3-24.8,59.1-57.9,70.4-99.4c10.8-39.8,8-78.9-8.4-116.9\tc-9.9-22.8-24-42.5-41.9-59.5c-8.8-8.4-18.8-15.1-28.6-22.1c-11-7.9-15.3-24.6-9.9-37.3c6.2-14.7,19.2-22,34-20.1\tc11.1,1.5,19.2,8.3,27.5,14.4c10.7,7.8,20.8,16.3,29.9,26.1c19.7,21.3,36.2,44.6,47.8,71.4c9.2,21.3,15.2,43.4,18.3,66.3\tC651.3,375.2,651.6,385.5,652.1,392.3z"/><path d="M526.4,394.8c-0.1,30.3-9.9,54.9-27.8,76.5c-9,10.8-19.7,19.4-32.1,25.8c-21.2,11-44.2-0.7-47.6-24.3\tc-1.7-12.2,3.1-22.4,13.1-29.5c7.1-5.1,14.6-9.7,19.8-16.9c17.6-24.1,12-55.7-12.8-72.4c-3.4-2.3-7-4.3-9.9-7.1\tc-12.5-11.6-14.1-29.7-4.1-43.1c10-13.3,28-16.9,42.6-8.2c31.6,18.7,51,46.1,57.3,82.4C526.1,384.3,526.7,390.6,526.4,394.8z"/></svg>').on("mouseenter", function() {
                    e(this).css("fill", Y)
                }).on("mouseleave", function() {
                    e(this).css("fill", W)
                }).on("click", function() {
                    T(100)
                }).lunaradiodisableSelection(),
                (i = document.createElement("div")).id = R + "buttonanalyzer",
                a.appendChild(i),
                e("#" + R + "buttonanalyzer").css({
                    position: "absolute",
                    transition: "fill 0.5s",
                    cursor: "pointer",
                    fill: W
                }).html('<svg  x="0px" y="0px"\t viewBox="0 0 800 800"><path d="M180.3,729.4h-72.4c-13.5,0-24.5-11-24.5-24.5V235.8c0-13.5,11-24.5,24.5-24.5h72.4c13.5,0,24.5,11,24.5,24.5v469.1\tC204.7,718.4,193.7,729.4,180.3,729.4"/><path d="M351,729.4h-72.4c-13.5,0-24.5-11-24.5-24.5V331.7c0-13.5,11-24.5,24.5-24.5H351c13.5,0,24.5,11,24.5,24.5v373.2\tC375.4,718.4,364.4,729.4,351,729.4"/><path d="M521.9,729.4h-72.4c-13.5,0-24.5-11-24.5-24.5V95.1c0-13.5,11-24.5,24.5-24.5h72.4c13.5,0,24.5,11,24.5,24.5v609.8\tC546.3,718.4,535.3,729.4,521.9,729.4"/><path d="M692.1,729.4h-72.4c-13.5,0-24.5-11-24.5-24.5V331.7c0-13.5,11-24.5,24.5-24.5h72.4c13.5,0,24.5,11,24.5,24.5v373.2\tC716.6,718.4,705.6,729.4,692.1,729.4"/></svg>').on("mouseenter", function() {
                    e(this).css("fill", Y)
                }).on("mouseleave", function() {
                    e(this).css("fill", W)
                }).on("click", function() {
                    "none" != e("#" + R + "buttonshuffle").css("pointer-events") && (9 < (oe = parseInt(oe) + 1) && (oe = 0),
                    I("changeanalyzer: " + oe))
                }).lunaradiodisableSelection(),
                (i = document.createElement("span")).classList.add(R + "textradionamespan"),
                a.appendChild(i),
                e("." + R + "textradionamespan").css({
                    "padding-left": "10px",
                    "padding-right": "10px",
                    margin: "0",
                    "white-space": "nowrap",
                    "font-family": K,
                    color: W
                }).html(_),
                (i = document.createElement("div")).id = R + "textradioname",
                i.dataset.speed = .5,
                i.dataset.reverse = !0,
                a.appendChild(i),
                e("#" + R + "textradioname").css({
                    position: "absolute",
                    overflow: "hidden",
                    padding: "0",
                    margin: "0",
                    "white-space": "nowrap",
                    "text-align": "center",
                    "text-overflow": "ellipsis",
                    "font-family": K,
                    color: W
                }).addClass(R + "textradioname").html(e("." + R + "textradionamespan")).lunaradiodisableSelection(),
                (i = document.createElement("span")).classList.add(R + "texttitlespan"),
                a.appendChild(i),
                e("." + R + "texttitlespan").css({
                    "padding-left": "10px",
                    "padding-right": "10px",
                    margin: "0",
                    "white-space": "nowrap",
                    "font-family": K,
                    color: W
                }).html(""),
                (i = document.createElement("div")).id = R + "texttitle",
                i.dataset.speed = .9,
                a.appendChild(i),
                e("#" + R + "texttitle").css({
                    position: "absolute",
                    overflow: "hidden",
                    padding: "0",
                    margin: "0",
                    "white-space": "nowrap",
                    "text-align": "center",
                    "text-overflow": "ellipsis",
                    "font-family": K,
                    color: W
                }).addClass(R + "texttitle").html(e("." + R + "texttitlespan")).lunaradiodisableSelection(),
                (i = document.createElement("div")).id = R + "textvolumeend",
                a.appendChild(i),
                e("#" + R + "textvolumeend").css({
                    position: "absolute",
                    "text-align": "center",
                    "font-family": "Roboto",
                    color: W
                }).html("100").lunaradiodisableSelection(),
                function(t) {
                    var i = document.createElement("div");
                    i.id = R + "volumewrapper",
                    t.appendChild(i),
                    e("#" + R + "volumewrapper").css({
                        position: "absolute"
                    }).lunaradiodisableSelection(),
                    (t = document.createElement("div")).id = R + "volumebackground",
                    i.appendChild(t),
                    e("#" + R + "volumebackground").css({
                        position: "absolute",
                        width: "100%",
                        background: W
                    }).lunaradiodisableSelection(),
                    (t = document.createElement("div")).id = R + "volumefill",
                    i.appendChild(t),
                    e("#" + R + "volumefill").css({
                        position: "absolute",
                        width: "0",
                        background: Y
                    }).lunaradiodisableSelection(),
                    (t = document.createElement("div")).id = R + "volumeicon",
                    i.appendChild(t),
                    e("#" + R + "volumeicon").css({
                        position: "absolute",
                        top: "0px",
                        "border-radius": "50%",
                        background: Y
                    }).lunaradiodisableSelection(),
                    (t = document.createElement("img")).id = R + "volumegrab",
                    i.appendChild(t),
                    t.src = "data:image/gif;base64,R0lGODlhAQABAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw%3D%3D",
                    e("#" + R + "volumegrab").css({
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        cursor: "pointer",
                        height: "100%",
                        width: "100%",
                        padding: "0",
                        margin: "0"
                    }).mouseover(function(t) {
                        e(this).css("cursor", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto")
                    }).lunaradiograb({
                        onstart: function(t) {
                            e(this).css("cursor", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAAKmSURBVEiJ7ZbPaxNBFMc/m4lttYtNBem9F3MrgvRawR78C/wbemz/CS3Yf8OLXgQ9KAgi9gcBLz2oh0IOhfZSLdUkTZN9s+NhZtpNdrJZFeyhDgzz2GTn8977vnmzkTGGyxiVS6H+B18JcDX0MIqiMu9GbgKYoTU4sicoCC4BU8BLZz8CUkC7mToHis+pMSY3C6CvgRbwRkRMr9czwDugDbwFbgExMOmcG8kqC47iODbGGCMiJo5j0+12TafTMUDn5OTEHB8fG6DjHLntHLjGhRwDjLLFFbXb7baIICIAZOxKxo4ODg4eAC+AWeAGVs5c0ZQFK4AkSUJgRIQkSQAiEaHZbC4Bz4Cag+fSXlRcvpAq3msRIU1T9vf3ERG01hweHk552zvh7HtYzROgjy28cx2LIn4F/HBrnI3SR661Pn8mIuzt7U1lshIBN4FprNYDrFERV4ClVqsVp2n6cGZm5nk2Yq11cM3abkw6aC7VoyKOgE0f0dHR0X0P9hGFpv9te3sb4CuDTaYUmGq1ul6r1d77TZeXl6+HIKG5srKyi9VTGNJ2HNiIyCel1Mbc3NzHJElYXV0NwkLPgDvAY2xR5QoLRmucAonWugGIiFCv1xnWOKRzo9Hwe/SBM6DnIh8AF1W1AKfVanV9fn7+Q5Gm2bm2trYLfPkbcAr0RWRHKfW0Xq9vjiuqTJqfOOgZ9hynw5uP61wp0NNa7yilNhYWFrY8ZJTebvSBrpv9EHjctegr81RrvaWUihYXF+9ScEyAzw54yog0A0Sh2yjwIVDBNoNpbPOfxXazCQazZrAR/gS+Ad+xN5aGP/sQSJ33JmP7m2cYLNiIW+5/uTRD+Yj98BfGhFtzrdCBBBu5byDWqwzrd8FwoW+Rzj4zA5uPBf+LcfW+q38BmqVkrsNuDnIAAAAASUVORK5CYII%3D), auto"),
                            Me = Ee
                        },
                        onmove: function(t) {
                            t = 100 * t.offset.x / e("#" + R + "volumewrapper").width(),
                            Ee = 100 > Me + t ? Me + t : 100,
                            0 > Me + t && (Ee = 0),
                            h(Ee)
                        },
                        onfinish: function(t) {
                            e(this).css("cursor", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto")
                        }
                    })
                }(a),
                function(t) {
                    var i = document.createElement("div");
                    i.id = R + "pauseplaywrapper",
                    t.appendChild(i),
                    e("#" + R + "pauseplaywrapper").css({
                        position: "absolute",
                        cursor: "pointer"
                    }).on("click", function() {
                        v(),
                        Be ? x() : b()
                    }).lunaradiodisableSelection(),
                    (t = document.createElement("div")).id = R + "buttonplay",
                    i.appendChild(t),
                    e("#" + R + "buttonplay").css({
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        transition: "fill 0.5s",
                        fill: W
                    }).html('<svg x="0px" y="0px"\t viewBox="0 0 800 800" ><path d="M713.9,400.5c1.4,171.2-137.8,314.4-313.9,314.3c-175.6,0-314.2-143-314-315c0.2-171.3,140.6-313.9,315-313.4\tC574,87,715.4,228.9,713.9,400.5z M279.5,400.3c0,23.1,0,46.2,0,69.3c0,20.8-0.2,41.7,0.1,62.5c0.1,12.2,6,21.1,17,26.6\tc11,5.5,21.2,3,31.2-2.9c23.3-13.6,46.8-27,70.2-40.5c49.8-28.6,99.6-57.1,149.3-85.8c18.1-10.4,18.7-38.7,1.1-49.4\tc-74.5-45.4-149-90.8-223.5-136.1c-6-3.7-12.6-5.5-19.8-4.2c-15.7,2.9-25.5,14.4-25.5,30.5C279.4,313.6,279.5,357,279.5,400.3z"/></svg>').on("mouseenter", function() {
                        e(this).css("fill", Y)
                    }).on("mouseleave", function() {
                        e(this).css("fill", W)
                    }).lunaradiodisableSelection(),
                    (t = document.createElement("div")).id = R + "buttonpause",
                    i.appendChild(t),
                    e("#" + R + "buttonpause").css({
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        transition: "fill 0.5s",
                        fill: W
                    }).html('<svg x="0px" y="0px"\t viewBox="0 0 800 800" ><path d="M86.3,400.7C84.8,229.1,226.5,86.7,400.6,87c172.9,0.3,313.7,142.5,313.1,314.8c-0.6,170.5-138.2,313.3-314.4,313.1\tC224.3,714.7,84.9,572.1,86.3,400.7z M378.8,400.8C378.8,400.8,378.7,400.8,378.8,400.8c-0.1-32.6-0.5-65.3,0.2-97.9\tc0.3-13.7-10.3-23.4-22.7-22.8c-18.3,0.8-36.6,0.2-54.8,0.2c-13.9,0-22.1,8.1-22.1,21.9c0,65.7,0.2,131.4-0.2,197.1\tc-0.1,12.6,9.2,22.6,22.4,22.2c18.4-0.6,36.9-0.5,55.3,0c12.1,0.3,22.2-7.4,22-21.9C378.6,466.7,378.8,433.8,378.8,400.8z\t M420.9,400.8C420.9,400.8,420.9,400.8,420.9,400.8c0.1,33.1,0,66.1,0.1,99.2c0,13.8,7.7,21.4,21.5,21.4c18.8,0,37.7-0.3,56.5,0.1\tc12.3,0.3,21.6-9.6,21.5-21.4c-0.2-66.1-0.1-132.2-0.1-198.3c0-13.3-8.2-21.4-21.7-21.5c-18.6,0-37.2,0.5-55.7-0.2\tc-12-0.5-22.5,9.2-22.3,22C421.2,335,420.9,367.9,420.9,400.8z"/></svg>').on("mouseenter", function() {
                        e(this).css("fill", Y)
                    }).on("mouseleave", function() {
                        e(this).css("fill", W)
                    }).fadeOut(0).lunaradiodisableSelection(),
                    (t = document.createElement("div")).id = R + "audiopreloader",
                    i.appendChild(t),
                    e("#" + R + "audiopreloader").css({
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        fill: W
                    }).html('<svg x="0px" y="0px" viewBox="5 5 40 40"><path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(39.9522 25 25)"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform></path></svg>').fadeOut(0).lunaradiodisableSelection()
                }(a),
                M() ? (Ee = 100,
                h(100)) : T(ye)
            }(a) : function(t) {
                I("iniSmallPlayer");
                var i = document.createElement("div");
                i.id = R + "smallplayerwrapper",
                t.appendChild(i),
                e("#" + R + "smallplayerwrapper").css({
                    overflow: "hidden",
                    position: "absolute",
                    left: "0px",
                    top: "0px",
                    height: "100%",
                    width: "100%"
                }),
                (t = document.createElement("div")).id = R + "smallvolumebackground",
                i.appendChild(t),
                e("#" + R + "smallvolumebackground").css({
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "100%",
                    height: "100%",
                    background: "rgba(" + z(Y).r + ", " + z(Y).g + ", " + z(Y).b + ", 0.5)"
                }).lunaradiodisableSelection(),
                (t = document.createElement("div")).id = R + "smalliconlive",
                i.appendChild(t),
                e("#" + R + "smalliconlive").css({
                    position: "absolute",
                    fill: "rgba(" + z(W).r + ", " + z(W).g + ", " + z(W).b + ", 0.3)"
                }).html('<svg x="0px" y="0px" viewBox="-16 0 512 512.00113" ><path d="m262.84375 140.558594c-12.699219 12.671875-33.28125 12.671875-45.980469 0-12.695312-12.671875-12.695312-33.21875 0-45.890625 12.699219-12.671875 33.28125-12.671875 45.980469 0 12.695312 12.671875 12.695312 33.21875 0 45.890625zm0 0"/><path d="m307.257812 189.726562c-3.960937 0-7.921874-1.511718-10.9375-4.539062-6.03125-6.039062-6.019531-15.824219.019532-21.851562 12.238281-12.214844 18.976562-28.453126 18.976562-45.722657s-6.738281-33.507812-18.976562-45.722656c-6.039063-6.03125-6.050782-15.8125-.019532-21.855469 6.027344-6.039062 15.8125-6.050781 21.851563-.019531 18.089844 18.054687 28.050781 42.058594 28.050781 67.597656 0 25.535157-9.960937 49.542969-28.050781 67.597657-3.015625 3.011718-6.964844 4.515624-10.914063 4.515624zm0 0"/><path d="m342.210938 235.222656c-3.960938 0-7.921876-1.511718-10.9375-4.535156-6.03125-6.042969-6.019532-15.824219.019531-21.855469 24.414062-24.367187 37.863281-56.761719 37.863281-91.21875s-13.449219-66.851562-37.863281-91.21875c-6.039063-6.03125-6.050781-15.8125-.019531-21.855469 6.03125-6.039062 15.8125-6.050781 21.851562-.019531 30.265625 30.207031 46.9375 70.371094 46.933594 113.09375 0 42.722657-16.667969 82.890625-46.933594 113.097657-3.015625 3.007812-6.964844 4.511718-10.914062 4.511718zm0 0"/><path d="m172.371094 189.726562c-3.949219 0-7.898438-1.503906-10.917969-4.515624-18.089844-18.054688-28.050781-42.0625-28.050781-67.597657 0-25.539062 9.960937-49.542969 28.050781-67.597656 6.039063-6.03125 15.824219-6.023437 21.851563.019531 6.03125 6.039063 6.019531 15.824219-.019532 21.855469-12.238281 12.214844-18.976562 28.453125-18.976562 45.722656s6.738281 33.507813 18.976562 45.722657c6.039063 6.027343 6.050782 15.8125.019532 21.851562-3.015626 3.023438-6.976563 4.539062-10.933594 4.539062zm0 0"/><path d="m137.417969 235.222656c-3.953125 0-7.902344-1.503906-10.917969-4.515625-30.265625-30.207031-46.933594-70.371093-46.933594-113.09375 0-42.726562 16.667969-82.890625 46.933594-113.097656 6.039062-6.027344 15.824219-6.019531 21.851562.023437 6.03125 6.039063 6.019532 15.820313-.019531 21.851563-24.414062 24.367187-37.863281 56.761719-37.863281 91.21875s13.449219 66.855469 37.863281 91.222656c6.039063 6.03125 6.050781 15.8125.019531 21.855469-3.015624 3.023438-6.976562 4.535156-10.933593 4.535156zm0 0"/><path d="m443.480469 261.9375h-407.332031c-19.964844 0-36.148438 16.183594-36.148438 36.144531v177.769531c0 19.964844 16.183594 36.148438 36.148438 36.148438h407.328124c19.964844 0 36.148438-16.183594 36.148438-36.148438v-177.769531c0-19.960937-16.183594-36.144531-36.144531-36.144531zm-324.609375 203.683594h-56.933594c-8.53125 0-15.449219-6.917969-15.449219-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.449219-15.453125 8.535156 0 15.453125 6.917969 15.453125 15.453125v110.945313h41.480469c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125zm63.328125-15.453125c0 8.535156-6.917969 15.453125-15.453125 15.453125s-15.453125-6.917969-15.453125-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.453125-15.453125s15.453125 6.917969 15.453125 15.453125zm130.015625-121.929688-38.160156 126.394531c-.003907.011719-.007813.023438-.011719.035157-4.144531 14.144531-25.273438 13.796875-29.5625 0-.003907-.011719-.007813-.023438-.011719-.035157l-38.160156-126.394531c-2.464844-8.171875 2.15625-16.792969 10.328125-19.261719 8.164062-2.464843 16.792969 2.15625 19.257812 10.328126l23.367188 77.394531 23.367187-77.394531c2.46875-8.171876 11.089844-12.796876 19.261719-10.328126 8.167969 2.46875 12.792969 11.089844 10.324219 19.261719zm95.066406 35.320313c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.53125-6.917969 15.453125-15.453125 15.453125h-43.851562v40.25h52.175781c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125h-67.628907c-8.535156 0-15.453124-6.917969-15.453124-15.453125v-126.398438c0-8.53125 6.917968-15.453125 15.453124-15.453125h69.710938c8.53125 0 15.453125 6.917969 15.453125 15.453125 0 8.535157-6.921875 15.453125-15.453125 15.453125h-54.261719v24.335938zm0 0"/></svg>').lunaradiodisableSelection(),
                (t = document.createElement("div")).id = R + "smalltextvolume",
                i.appendChild(t),
                e("#" + R + "smalltextvolume").css({
                    position: "absolute",
                    "text-align": "right",
                    "font-family": "Roboto",
                    color: "rgba(" + z(W).r + ", " + z(W).g + ", " + z(W).b + ", 0.3)"
                }).html("100").lunaradiodisableSelection(),
                (t = document.createElement("div")).id = R + "smalliconvolume",
                i.appendChild(t),
                e("#" + R + "smalliconvolume").css({
                    position: "absolute",
                    fill: "rgba(" + z(W).r + ", " + z(W).g + ", " + z(W).b + ", 0.3)"
                }).html('<svg x="0px" y="0px" viewBox="0 0 800 800"><path d="M359.2,397.1c0,71.7,0,143.3,0,215c0,9.1-1.2,17.7-7.7,24.8c-13.8,14.9-34.2,15.1-49.1,0.3c-32.2-32.1-64.3-64.3-96.4-96.4\tc-4.8-4.8-9.8-9.6-14.5-14.6c-2.6-2.8-5.3-3.9-9.1-3.9c-42.4,0.1-84.8,0.1-127.1,0.1c-15.4,0-27.1-8.9-31.2-23.6\tc-1.1-4.1-1.4-8.3-1.4-12.5c0-60,0-120,0-180c0-14.4,4.6-26.3,18.5-32.9c5.1-2.4,10.6-3.1,16.1-3.1c41.5,0,83,0,124.5,0.1\tc4.2,0,7.1-1.2,9.9-4.1c36.8-36.9,73.6-73.8,110.6-110.6c10.5-10.5,23.1-14.1,37.2-8.3c11.2,4.6,17.9,13.1,19.1,25.5\tc0.5,5.1,0.6,10.2,0.6,15.3C359.2,257.5,359.2,327.3,359.2,397.1z"/><path d="M777.4,394.2c-0.2,41.1-5.6,79-17.7,115.8c-14.5,44.1-36,84.5-65.7,120.4c-9.1,11-18.2,22-28.8,31.6\tc-18.1,16.5-36.4,32.7-57.7,44.9c-19.1,10.9-43.9-1.6-46.9-23.4c-2-14.2,3.3-25.2,14.9-32.9c20.8-13.9,39.6-30.1,56.6-48.4\tc14.9-16,27.8-33.6,38.9-52.5c18.2-31,30.2-64.2,36.7-99.4c3.8-20.4,5.4-41,4.8-61.7c-1.2-42.3-10.6-82.8-28.5-121.1\tc-11.2-23.9-25.5-46-42.4-66.4c-19.8-23.8-43.3-43.3-68.4-61.2c-12.4-8.9-16.3-23.7-10.8-38.1c5.1-13.3,17.6-20.8,32.5-19.9\tc6.1,0.4,11.3,2.4,16.3,5.6c21.2,13.8,40.9,29.5,58.5,47.5c34.5,35.1,61.6,75.3,80.2,121.1c13.4,33,22,67.1,25.4,102.5\tC776.7,371.4,776.9,384.1,777.4,394.2z"/><path d="M652.1,392.3c-0.7,56.6-15.7,104.9-47.2,147.9c-17.4,23.7-38.4,43.6-63.2,59.5c-14.3,9.1-29.1,8.5-41-2\tc-11.9-10.5-13.8-29.9-4.5-42.9c3.9-5.5,9.5-8.9,14.8-12.6c35.3-24.8,59.1-57.9,70.4-99.4c10.8-39.8,8-78.9-8.4-116.9\tc-9.9-22.8-24-42.5-41.9-59.5c-8.8-8.4-18.8-15.1-28.6-22.1c-11-7.9-15.3-24.6-9.9-37.3c6.2-14.7,19.2-22,34-20.1\tc11.1,1.5,19.2,8.3,27.5,14.4c10.7,7.8,20.8,16.3,29.9,26.1c19.7,21.3,36.2,44.6,47.8,71.4c9.2,21.3,15.2,43.4,18.3,66.3\tC651.3,375.2,651.6,385.5,652.1,392.3z"/><path d="M526.4,394.8c-0.1,30.3-9.9,54.9-27.8,76.5c-9,10.8-19.7,19.4-32.1,25.8c-21.2,11-44.2-0.7-47.6-24.3\tc-1.7-12.2,3.1-22.4,13.1-29.5c7.1-5.1,14.6-9.7,19.8-16.9c17.6-24.1,12-55.7-12.8-72.4c-3.4-2.3-7-4.3-9.9-7.1\tc-12.5-11.6-14.1-29.7-4.1-43.1c10-13.3,28-16.9,42.6-8.2c31.6,18.7,51,46.1,57.3,82.4C526.1,384.3,526.7,390.6,526.4,394.8z"/></svg>').lunaradiodisableSelection(),
                (t = document.createElement("span")).classList.add(R + "smalltextradionamespan"),
                i.appendChild(t),
                e("." + R + "smalltextradionamespan").css({
                    "padding-right": "30px",
                    margin: "0",
                    "white-space": "nowrap",
                    "font-family": K,
                    color: W
                }).html(_),
                (t = document.createElement("div")).id = R + "smalltextradioname",
                t.dataset.speed = .5,
                t.dataset.reverse = !0,
                i.appendChild(t),
                e("#" + R + "smalltextradioname").css({
                    position: "absolute",
                    overflow: "hidden",
                    padding: "0 0 10px 0",
                    "white-space": "nowrap",
                    "text-align": "left",
                    "text-overflow": "ellipsis",
                    "font-family": K,
                    color: W
                }).addClass(R + "smalltextradioname").html(e("." + R + "smalltextradionamespan")).lunaradiodisableSelection(),
                (t = document.createElement("span")).classList.add(R + "smalltexttitlespan"),
                i.appendChild(t),
                e("." + R + "smalltexttitlespan").css({
                    "padding-right": "30px",
                    margin: "0",
                    "white-space": "nowrap",
                    "font-family": K,
                    color: W
                }).html(""),
                (t = document.createElement("div")).id = R + "smalltexttitle",
                t.dataset.speed = .7,
                i.appendChild(t),
                e("#" + R + "smalltexttitle").css({
                    position: "absolute",
                    overflow: "hidden",
                    padding: "0 0 10px 0",
                    "white-space": "nowrap",
                    "text-align": "left",
                    "text-overflow": "ellipsis",
                    "font-family": K,
                    color: W
                }).addClass(R + "smalltexttitle").html(e("." + R + "smalltexttitlespan")).lunaradiodisableSelection(),
                (t = document.createElement("div")).id = R + "smallvolumegrab",
                i.appendChild(t),
                e("#" + R + "smallvolumegrab").css({
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    cursor: "pointer",
                    height: "100%",
                    width: "100%",
                    padding: "0",
                    margin: "0"
                }).mouseover(function(t) {
                    e(this).css("cursor", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto")
                }).lunaradiograb({
                    onstart: function(t) {
                        e(this).css("cursor", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAAKmSURBVEiJ7ZbPaxNBFMc/m4lttYtNBem9F3MrgvRawR78C/wbemz/CS3Yf8OLXgQ9KAgi9gcBLz2oh0IOhfZSLdUkTZN9s+NhZtpNdrJZFeyhDgzz2GTn8977vnmzkTGGyxiVS6H+B18JcDX0MIqiMu9GbgKYoTU4sicoCC4BU8BLZz8CUkC7mToHis+pMSY3C6CvgRbwRkRMr9czwDugDbwFbgExMOmcG8kqC47iODbGGCMiJo5j0+12TafTMUDn5OTEHB8fG6DjHLntHLjGhRwDjLLFFbXb7baIICIAZOxKxo4ODg4eAC+AWeAGVs5c0ZQFK4AkSUJgRIQkSQAiEaHZbC4Bz4Cag+fSXlRcvpAq3msRIU1T9vf3ERG01hweHk552zvh7HtYzROgjy28cx2LIn4F/HBrnI3SR661Pn8mIuzt7U1lshIBN4FprNYDrFERV4ClVqsVp2n6cGZm5nk2Yq11cM3abkw6aC7VoyKOgE0f0dHR0X0P9hGFpv9te3sb4CuDTaYUmGq1ul6r1d77TZeXl6+HIKG5srKyi9VTGNJ2HNiIyCel1Mbc3NzHJElYXV0NwkLPgDvAY2xR5QoLRmucAonWugGIiFCv1xnWOKRzo9Hwe/SBM6DnIh8AF1W1AKfVanV9fn7+Q5Gm2bm2trYLfPkbcAr0RWRHKfW0Xq9vjiuqTJqfOOgZ9hynw5uP61wp0NNa7yilNhYWFrY8ZJTebvSBrpv9EHjctegr81RrvaWUihYXF+9ScEyAzw54yog0A0Sh2yjwIVDBNoNpbPOfxXazCQazZrAR/gS+Ad+xN5aGP/sQSJ33JmP7m2cYLNiIW+5/uTRD+Yj98BfGhFtzrdCBBBu5byDWqwzrd8FwoW+Rzj4zA5uPBf+LcfW+q38BmqVkrsNuDnIAAAAASUVORK5CYII%3D), auto"),
                        Me = Ee
                    },
                    onmove: function(t) {
                        t = 100 * t.offset.x / e("#" + R + "smallvolumegrab").width(),
                        Ee = 100 > Me + t ? Me + t : 100,
                        0 > Me + t && (Ee = 0),
                        m(Ee)
                    },
                    onfinish: function(t) {
                        e(this).css("cursor", "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto")
                    }
                }).lunaradiodisableSelection(),
                function(t) {
                    var i = document.createElement("div");
                    i.id = R + "smallpauseplaywrapper",
                    t.appendChild(i),
                    e("#" + R + "smallpauseplaywrapper").css({
                        position: "absolute",
                        cursor: "pointer"
                    }).on("click", function() {
                        v(),
                        Be ? x() : b()
                    }).lunaradiodisableSelection(),
                    (t = document.createElement("div")).id = R + "smallbuttonplay",
                    i.appendChild(t),
                    e("#" + R + "smallbuttonplay").css({
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        transition: "fill 0.5s",
                        fill: W
                    }).html('<svg x="0px" y="0px"\t viewBox="0 0 800 800" ><path d="M713.9,400.5c1.4,171.2-137.8,314.4-313.9,314.3c-175.6,0-314.2-143-314-315c0.2-171.3,140.6-313.9,315-313.4\tC574,87,715.4,228.9,713.9,400.5z M279.5,400.3c0,23.1,0,46.2,0,69.3c0,20.8-0.2,41.7,0.1,62.5c0.1,12.2,6,21.1,17,26.6\tc11,5.5,21.2,3,31.2-2.9c23.3-13.6,46.8-27,70.2-40.5c49.8-28.6,99.6-57.1,149.3-85.8c18.1-10.4,18.7-38.7,1.1-49.4\tc-74.5-45.4-149-90.8-223.5-136.1c-6-3.7-12.6-5.5-19.8-4.2c-15.7,2.9-25.5,14.4-25.5,30.5C279.4,313.6,279.5,357,279.5,400.3z"/></svg>').on("mouseenter", function() {
                        e(this).css("fill", Y)
                    }).on("mouseleave", function() {
                        e(this).css("fill", W)
                    }).lunaradiodisableSelection(),
                    (t = document.createElement("div")).id = R + "smallbuttonpause",
                    i.appendChild(t),
                    e("#" + R + "smallbuttonpause").css({
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        transition: "fill 0.5s",
                        fill: W
                    }).html('<svg x="0px" y="0px"\t viewBox="0 0 800 800" ><path d="M86.3,400.7C84.8,229.1,226.5,86.7,400.6,87c172.9,0.3,313.7,142.5,313.1,314.8c-0.6,170.5-138.2,313.3-314.4,313.1\tC224.3,714.7,84.9,572.1,86.3,400.7z M378.8,400.8C378.8,400.8,378.7,400.8,378.8,400.8c-0.1-32.6-0.5-65.3,0.2-97.9\tc0.3-13.7-10.3-23.4-22.7-22.8c-18.3,0.8-36.6,0.2-54.8,0.2c-13.9,0-22.1,8.1-22.1,21.9c0,65.7,0.2,131.4-0.2,197.1\tc-0.1,12.6,9.2,22.6,22.4,22.2c18.4-0.6,36.9-0.5,55.3,0c12.1,0.3,22.2-7.4,22-21.9C378.6,466.7,378.8,433.8,378.8,400.8z\t M420.9,400.8C420.9,400.8,420.9,400.8,420.9,400.8c0.1,33.1,0,66.1,0.1,99.2c0,13.8,7.7,21.4,21.5,21.4c18.8,0,37.7-0.3,56.5,0.1\tc12.3,0.3,21.6-9.6,21.5-21.4c-0.2-66.1-0.1-132.2-0.1-198.3c0-13.3-8.2-21.4-21.7-21.5c-18.6,0-37.2,0.5-55.7-0.2\tc-12-0.5-22.5,9.2-22.3,22C421.2,335,420.9,367.9,420.9,400.8z"/></svg>').on("mouseenter", function() {
                        e(this).css("fill", Y)
                    }).on("mouseleave", function() {
                        e(this).css("fill", W)
                    }).fadeOut(0).lunaradiodisableSelection(),
                    (t = document.createElement("div")).id = R + "smallaudiopreloader",
                    i.appendChild(t),
                    e("#" + R + "smallaudiopreloader").css({
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        fill: W
                    }).html('<svg x="0px" y="0px" viewBox="5 5 40 40"><path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(39.9522 25 25)"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform></path></svg>').fadeOut(0).lunaradiodisableSelection()
                }(i),
                function(t) {
                    var i = document.createElement("div");
                    i.id = R + "smallcoverwrapper",
                    t.appendChild(i),
                    e("#" + R + "smallcoverwrapper").css({
                        position: "absolute",
                        overflow: "hidden",
                        background: "rgba(" + z(W).r + ", " + z(W).g + ", " + z(W).b + ", 0.1)"
                    }).on("click", function() {
                        "" != Oe && window.open(Oe)
                    }).lunaradiodisableSelection(),
                    (t = document.createElement("div")).id = R + "smallcoverwrapper1",
                    i.appendChild(t),
                    e("#" + R + "smallcoverwrapper1").css({
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        height: "100%",
                        width: "100%",
                        transition: "opacity 1s",
                        overflow: "hidden",
                        opacity: "0.0",
                        "background-repeat": "no-repeat",
                        "background-size": "cover"
                    }),
                    (t = document.createElement("div")).id = R + "smallcoverwrapper2",
                    i.appendChild(t),
                    e("#" + R + "smallcoverwrapper2").css({
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        height: "100%",
                        width: "100%",
                        overflow: "hidden",
                        transition: "opacity 1s",
                        opacity: "0.0",
                        "background-repeat": "no-repeat",
                        "background-size": "cover"
                    }),
                    "circle" == ie && e("#" + R + "smallcoverwrapper, #" + R + "smallcoverwrapper1, #" + R + "smallcoverwrapper2").css({
                        "border-radius": "50%"
                    })
                }(i),
                M() ? (Ee = 100,
                h(100)) : function(t) {
                    e({
                        countNum: Ee
                    }).animate({
                        countNum: Math.floor(t)
                    }, {
                        duration: 800,
                        easing: "linear",
                        step: function() {
                            Ee = this.countNum,
                            m(this.countNum)
                        },
                        complete: function() {
                            Ee = t,
                            m(t)
                        }
                    })
                }(ye)
            }(a),
            M() && (e("#" + R + "buttonvolumeoff, #" + R + "buttonvolumeon, #" + R + "volumegrab, #" + R + "textvolumeend, #" + R + "volumewrapper").css({
                display: "none"
            }),
            e("#" + R + "smallvolumegrab, #" + R + "smalltextvolume, #" + R + "smalliconvolume").css({
                display: "none"
            })),
            (t = "ie" == qe.browser.name.toLowerCase() && 12 > parseInt(qe.browser.version)) && e("#" + R + "backgroundimage").css({
                display: "none"
            }),
            f(),
            e(window).resize(function() {
                f()
            }),
            k(),
            "true" == te ? (te = "false",
            p(ee, ""),
            te = "true") : p(ee, ""),
            c(),
            setInterval(function() {
                c()
            }, xe)
        }
        function c() {
            switch (re) {
            case "ownmetadataurl":
                i = "GET",
                o = a = se,
                n = {},
                "corsproxy" == re && (i = "GET",
                o = a = le + a,
                n = {}),
                "fallback" == re && (i = "POST",
                o = Xe + "fallback.php",
                n = {
                    url: a
                }),
                e.ajax({
                    dataType: "text",
                    method: i,
                    crossDomain: !0,
                    url: o,
                    data: n,
                    success: function(e) {
                        d(e, "")
                    },
                    error: function(e, t, i) {
                        d("", "")
                    }
                });
                break;
            case "stream-icy-meta":
                !function() {
                    var t = E();
                    e.ajax({
                        dataType: "text",
                        url: Xe + "stream-icy-meta.php",
                        method: "POST",
                        crossDomain: !0,
                        data: {
                            url: t
                        },
                        success: function(e) {
                            d(e, "")
                        },
                        error: function(e, t, i) {
                            d("", "")
                        }
                    })
                }();
                break;
            default:
                switch (ue) {
                case "icecast2":
                    !function() {
                        var i = "GET"
                          , a = de + "/status-json.xsl"
                          , o = a
                          , n = {};
                        "corsproxy" == re && (i = "GET",
                        o = a = le + a,
                        n = {}),
                        "fallback" == re && (i = "POST",
                        o = Xe + "fallback.php",
                        n = {
                            url: a
                        }),
                        e.ajax({
                            dataType: "text",
                            method: i,
                            crossDomain: !0,
                            url: o,
                            data: n,
                            success: function(e) {
                                try {
                                    e = JSON.parse(e);
                                    var i = {};
                                    if (e.icestats.source.length === t)
                                        i = e.icestats.source;
                                    else
                                        for (var a = 0; a < e.icestats.source.length; a++) {
                                            var o = e.icestats.source[a].listenurl;
                                            he == o.substr(o.length - he.length, he.length) && (i = e.icestats.source[a])
                                        }
                                    a = e = "",
                                    i.hasOwnProperty("title") && (a = i.title),
                                    i.hasOwnProperty("artist") && (e = i.artist),
                                    d("" != e && "" != a ? e + " - " + a : "" != e ? e : a, "")
                                } catch (e) {
                                    I("Error on JSON File: " + e),
                                    d("", "")
                                }
                            },
                            error: function(e, t, i) {
                                I("Error on JSON File: " + t),
                                d("", "")
                            }
                        })
                    }();
                    break;
                case "shoutcast2":
                    !function() {
                        var t = "GET"
                          , i = de + "/stats?json=1&sid=" + we
                          , a = i
                          , o = {};
                        "corsproxy" == re && (t = "GET",
                        a = i = le + i,
                        o = {}),
                        "fallback" == re && (t = "POST",
                        a = Xe + "fallback.php",
                        o = {
                            url: i
                        }),
                        e.ajax({
                            dataType: "jsonp",
                            method: t,
                            crossDomain: !0,
                            url: a,
                            data: o,
                            success: function(e) {
                                d(e.songtitle, "")
                            },
                            error: function(e, t, i) {
                                d("", "")
                            }
                        })
                    }();
                    break;
                case "radionomy":
                    e.ajax({
                        dataType: "xml",
                        method: "GET",
                        crossDomain: !0,
                        url: "https://api.radionomy.com/currentsong.cfm?radiouid=" + me + "&apikey=" + ge + "&callmeback=yes&type=xml&cover=yes&previous=yes",
                        success: function(t) {
                            try {
                                var i = e(t).find("track").find("artists").text();
                                e(t).find("track").find("title").text() != e(t).find("track").find("artists").text() && (i += " - " + e(t).find("track").find("title").text());
                                var a = e(t).find("track").find("cover").text();
                                d(i, a)
                            } catch (e) {
                                d("", "")
                            }
                        },
                        error: function(e, t, i) {
                            d("", "")
                        }
                    });
                    break;
                case "radiojar":
                    e.ajax({
                        dataType: "text",
                        method: "GET",
                        crossDomain: !0,
                        url: "https://www.radiojar.com/api/stations/" + fe + "/now_playing/?rand=" + Math.random(),
                        success: function(e) {
                            try {
                                var t = JSON.parse(e);
                                d(t.artist + " - " + t.title, t.thumb)
                            } catch (e) {
                                d("", "")
                            }
                        },
                        error: function(e, t, i) {
                            d("", "")
                        }
                    });
                    break;
                case "radioco":
                    e.ajax({
                        dataType: "text",
                        method: "GET",
                        crossDomain: !0,
                        url: "https://public.radio.co/stations/" + ve + "/status",
                        success: function(e) {
                            try {
                                var t = JSON.parse(e);
                                d(t.current_track.title, t.current_track.artwork_url_large)
                            } catch (e) {
                                d("", "")
                            }
                        },
                        error: function(e, t, i) {
                            d("", "")
                        }
                    });
                    break;
                case "centova":
                    !function() {
                        var t = "GET"
                          , i = pe
                          , a = i
                          , o = {};
                        "corsproxy" == re && (t = "GET",
                        a = i = le + i,
                        o = {}),
                        "fallback" == re && (t = "POST",
                        a = Xe + "fallback.php",
                        o = {
                            url: i
                        }),
                        e.ajax({
                            dataType: "jsonp",
                            method: t,
                            crossDomain: !0,
                            url: a,
                            data: o,
                            success: function(e) {
                                d(e.data[0].song, "")
                            },
                            error: function(e, t, i) {
                                d("", "")
                            }
                        })
                    }()
                }
            }
            var i, a, o, n
        }
        function d(t, i) {
            Te != e("<div/>").html(t).text() && (I("New Title: " + (Te = e("<div/>").html(t).text())),
            e("." + R + "texttitlespan, ." + R + "smalltexttitlespan").html(Te),
            "" == i ? function() {
                if ("" != Te) {
                    var t = Te.replace(/ *\([^)]*\) */g, "")
                      , i = t = "https://itunes.apple.com/search?term=" + encodeURIComponent(t) + "&media=music&limit=1"
                      , a = i
                      , o = "GET";
                    M() && (o = "POST",
                    a = Xe + "fallback.php",
                    i = t),
                    I("ITUNES: " + a),
                    e.ajax({
                        dataType: "jsonp",
                        method: o,
                        crossDomain: !0,
                        url: a,
                        data: {
                            url: i
                        },
                        success: function(e) {
                            try {
                                var t = ""
                                  , i = "";
                                1 == e.results.length ? (I("COVER: " + (t = (t = e.results[0].artworkUrl100).replace("100x100bb", "600x600bb"))),
                                "" != ne && (i = e.results[0].trackViewUrl + "&app=itunes&at=" + ne),
                                p(t, i)) : p(ee, "")
                            } catch (e) {
                                p(ee, "")
                            }
                        },
                        error: function() {
                            p(ee, "")
                        }
                    })
                } else
                    p(ee, "")
            }() : p(i, ""),
            u(!0))
        }
        function p(t, i) {
            "false" == te && ("" != (Oe = i) ? e("#" + R + "coverwrapper, #" + R + "smallcoverwrapper").css({
                cursor: "pointer"
            }) : e("#" + R + "coverwrapper, #" + R + "smallcoverwrapper").css({
                cursor: "hand"
            }),
            2 < ++Ve && (Ve = 1),
            e("<img/>").attr("src", t).on("load", function() {
                e(this).remove(),
                e("#" + R + "backgroundimage" + Ve + ", #" + R + "coverwrapper" + Ve + ", #" + R + "smallcoverwrapper" + Ve).css({
                    background: "url(" + t + ")",
                    opacity: "1.0",
                    "background-repeat": "no-repeat",
                    "background-size": "cover"
                }),
                1 == Ve ? e("#" + R + "backgroundimage2, #" + R + "coverwrapper2, #" + R + "smallcoverwrapper2").css({
                    opacity: "0.0"
                }) : e("#" + R + "backgroundimage1, #" + R + "coverwrapper1, #" + R + "smallcoverwrapper1").css({
                    opacity: "0.0"
                })
            }))
        }
        function u(t) {
            if ("true" == $) {
                var i = "";
                "small" == X && (i = "small"),
                t && e("#" + R + i + "texttitle").hasClass(R + "Marquee") && (e("#" + R + i + "texttitle").removeClass(R + "Marquee"),
                e("#" + R + i + "texttitle").html(e("." + R + i + "texttitlespan").first()),
                e("#" + R + i + "texttitle").data("lunaradioMarquee").pause()),
                e("#" + R + i + "textradioname").width() > e("." + R + i + "textradionamespan").first().width() ? e("#" + R + i + "textradioname").hasClass(R + "Marquee") && (e("#" + R + i + "textradioname").removeClass(R + "Marquee"),
                e("#" + R + i + "textradioname").html(e("." + R + i + "textradionamespan").first()),
                e("#" + R + i + "textradioname").data("lunaradioMarquee").pause()) : e("#" + R + i + "textradioname").hasClass(R + "Marquee") || (e("#" + R + i + "textradioname").addClass(R + "Marquee"),
                e("#" + R + i + "textradioname").html(e("." + R + i + "textradionamespan").first()),
                e("#" + R + i + "textradioname").lunaradioMarquee()),
                e("#" + R + i + "texttitle").width() > e("." + R + i + "texttitlespan").first().width() ? e("#" + R + i + "texttitle").hasClass(R + "Marquee") && (e("#" + R + i + "texttitle").removeClass(R + "Marquee"),
                e("#" + R + i + "texttitle").html(e("." + R + i + "texttitlespan").first()),
                e("#" + R + i + "texttitle").data("lunaradioMarquee").pause()) : e("#" + R + i + "texttitle").hasClass(R + "Marquee") || (e("#" + R + i + "texttitle").addClass(R + "Marquee"),
                e("#" + R + i + "texttitle").html(e("." + R + i + "texttitlespan").first()),
                e("#" + R + i + "texttitle").lunaradioMarquee())
            }
        }
        function h(t) {
            0 > t && (t = 0),
            100 < t && (t = 100),
            M() || (L.volume = t / 100);
            var i = e("#" + R + "volumewrapper").width() * t / 100;
            e("#" + R + "volumefill").css({
                width: i + "px"
            }),
            e("#" + R + "volumeicon").css({
                left: i - e("#" + R + "volumeicon").width() / 2 + "px"
            }),
            e("#" + R + "textvolumeend").html(Math.round(t) + "%")
        }
        function m(t) {
            0 > t && (t = 0),
            100 < t && (t = 100),
            0 == Math.round(t) ? e("#" + R + "smalliconvolume").html('<svg x="0px" y="0px"\t viewBox="0 0 800 800" ><path d="M401.2,400c0,72.2,0,144.4,0,216.5c0,12-3.1,22.6-13.3,29.9c-13.4,9.6-31.1,8-42.8-3.7c-36.7-36.6-73.4-73.3-109.9-110.1\tc-4.5-4.6-9-6.3-15.3-6.2c-41.3,0.3-82.7,0.2-124,0.1c-15.7,0-27-8.6-31-23.8c-1.1-4-1.4-8.4-1.4-12.6c-0.1-60.2-0.1-120.4,0-180.6\tc0-11.1,2.3-21.5,11.7-28.9c6.5-5.1,13.8-7.3,22-7.3c41.6,0,83.3-0.1,124.9,0.1c4.7,0,8.1-1.2,11.5-4.7\tc37-37.2,74.1-74.3,111.2-111.3c16.1-16,41.4-12.8,52.5,6.9c3.5,6.1,3.9,13.1,3.9,20c0,69.5,0,139.1,0,208.6\tC401.2,395.3,401.2,397.7,401.2,400z"/><path d="M685.2,526.5c-7.3,0.4-12.8-2.6-17.5-7.4c-18-18-36-35.9-53.9-54c-3.1-3.1-4.6-2.8-7.5,0.1c-17.5,17.8-35.3,35.4-52.9,53.1\tc-5.2,5.2-11.2,8.5-19,8.3c-7-0.2-12.3-3.3-17-7.9c-8.9-8.7-17.6-17.5-26.4-26.3c-10.3-10.5-10.3-24.6,0.2-35.1\tc17.8-17.9,35.7-35.8,53.7-53.6c3-3,2.9-4.6,0-7.6c-17.7-17.4-35.2-35.1-52.8-52.6c-11-11-12.2-22.8-2-34.5\tc9.3-10.6,19.1-20.9,30.2-29.8c10.9-8.7,23.1-7.6,33,2.3c17.8,17.7,35.6,35.5,53.3,53.4c2.8,2.8,4.3,3,7.2,0.1\tc17.6-17.9,35.4-35.6,53.2-53.4c8.8-8.8,19.4-10.5,29.5-5c1.7,0.9,3.1,2.2,4.4,3.5c9.4,9.4,18.8,18.8,28.2,28.2\tc10,10,10.1,24.1,0,34.2c-17.8,17.9-35.7,35.8-53.7,53.6c-2.9,2.9-3.2,4.5-0.1,7.6c17.7,17.4,35.2,35.1,52.8,52.6\tc6.3,6.3,9.6,13.7,8.1,22.9c-0.9,5.6-3.9,10-7.7,13.9c-8.5,8.7-17,17.3-25.7,25.7C697.8,523.6,692.1,527,685.2,526.5z"/></svg>') : e("#" + R + "smalliconvolume").html('<svg x="0px" y="0px" viewBox="0 0 800 800"><path d="M359.2,397.1c0,71.7,0,143.3,0,215c0,9.1-1.2,17.7-7.7,24.8c-13.8,14.9-34.2,15.1-49.1,0.3c-32.2-32.1-64.3-64.3-96.4-96.4\tc-4.8-4.8-9.8-9.6-14.5-14.6c-2.6-2.8-5.3-3.9-9.1-3.9c-42.4,0.1-84.8,0.1-127.1,0.1c-15.4,0-27.1-8.9-31.2-23.6\tc-1.1-4.1-1.4-8.3-1.4-12.5c0-60,0-120,0-180c0-14.4,4.6-26.3,18.5-32.9c5.1-2.4,10.6-3.1,16.1-3.1c41.5,0,83,0,124.5,0.1\tc4.2,0,7.1-1.2,9.9-4.1c36.8-36.9,73.6-73.8,110.6-110.6c10.5-10.5,23.1-14.1,37.2-8.3c11.2,4.6,17.9,13.1,19.1,25.5\tc0.5,5.1,0.6,10.2,0.6,15.3C359.2,257.5,359.2,327.3,359.2,397.1z"/><path d="M777.4,394.2c-0.2,41.1-5.6,79-17.7,115.8c-14.5,44.1-36,84.5-65.7,120.4c-9.1,11-18.2,22-28.8,31.6\tc-18.1,16.5-36.4,32.7-57.7,44.9c-19.1,10.9-43.9-1.6-46.9-23.4c-2-14.2,3.3-25.2,14.9-32.9c20.8-13.9,39.6-30.1,56.6-48.4\tc14.9-16,27.8-33.6,38.9-52.5c18.2-31,30.2-64.2,36.7-99.4c3.8-20.4,5.4-41,4.8-61.7c-1.2-42.3-10.6-82.8-28.5-121.1\tc-11.2-23.9-25.5-46-42.4-66.4c-19.8-23.8-43.3-43.3-68.4-61.2c-12.4-8.9-16.3-23.7-10.8-38.1c5.1-13.3,17.6-20.8,32.5-19.9\tc6.1,0.4,11.3,2.4,16.3,5.6c21.2,13.8,40.9,29.5,58.5,47.5c34.5,35.1,61.6,75.3,80.2,121.1c13.4,33,22,67.1,25.4,102.5\tC776.7,371.4,776.9,384.1,777.4,394.2z"/><path d="M652.1,392.3c-0.7,56.6-15.7,104.9-47.2,147.9c-17.4,23.7-38.4,43.6-63.2,59.5c-14.3,9.1-29.1,8.5-41-2\tc-11.9-10.5-13.8-29.9-4.5-42.9c3.9-5.5,9.5-8.9,14.8-12.6c35.3-24.8,59.1-57.9,70.4-99.4c10.8-39.8,8-78.9-8.4-116.9\tc-9.9-22.8-24-42.5-41.9-59.5c-8.8-8.4-18.8-15.1-28.6-22.1c-11-7.9-15.3-24.6-9.9-37.3c6.2-14.7,19.2-22,34-20.1\tc11.1,1.5,19.2,8.3,27.5,14.4c10.7,7.8,20.8,16.3,29.9,26.1c19.7,21.3,36.2,44.6,47.8,71.4c9.2,21.3,15.2,43.4,18.3,66.3\tC651.3,375.2,651.6,385.5,652.1,392.3z"/><path d="M526.4,394.8c-0.1,30.3-9.9,54.9-27.8,76.5c-9,10.8-19.7,19.4-32.1,25.8c-21.2,11-44.2-0.7-47.6-24.3\tc-1.7-12.2,3.1-22.4,13.1-29.5c7.1-5.1,14.6-9.7,19.8-16.9c17.6-24.1,12-55.7-12.8-72.4c-3.4-2.3-7-4.3-9.9-7.1\tc-12.5-11.6-14.1-29.7-4.1-43.1c10-13.3,28-16.9,42.6-8.2c31.6,18.7,51,46.1,57.3,82.4C526.1,384.3,526.7,390.6,526.4,394.8z"/></svg>'),
            M() || (L.volume = t / 100),
            e("#" + R + "smalltextvolume").html(Math.round(t) + "%"),
            t = e("#" + R + "smallvolumegrab").width() * t / 100,
            e("#" + R + "smallvolumebackground").css({
                width: t + "px"
            }),
            V.width = t,
            V.height = ke
        }
        function g() {
            Se = e("#" + R).width(),
            ke = e("#" + R).height(),
            Ze && (ke = 80,
            959 > Se && (ke = 60),
            599 > Se && (ke = 40),
            e("#" + R).css({
                height: ke + "px"
            }))
        }
        function f() {
            if (g(),
            "big" == X) {
                V.width = Se,
                V.height = ke;
                var t = 1 * ke / 100
                  , i = ke / 2 - 20 - t - 4 * t;
                e("#" + R + "coverwrapper").css({
                    top: ke / 4 - i / 2 - t + "px",
                    left: Se / 2 - i / 2 - 2 * t + "px",
                    width: i + "px",
                    height: i + "px",
                    border: "solid " + 2 * t + "px rgba(" + z(W).r + ", " + z(W).g + ", " + z(W).b + ", 0.2)"
                }),
                e("#" + R + "backgroundimage").css({
                    "-webkit-filter": "blur(" + 5 * t + "px)",
                    filter: "blur(" + 5 * t + "px)",
                    top: 14 * t + "px",
                    left: Se / 2 - i / 1.25 + "px",
                    width: 1.5 * i + "px",
                    height: 1.5 * i + "px"
                });
                var a = (i = ke / 8) / 2
                  , o = i * J
                  , n = i - o
                  , r = ke / 2 + t
                  , s = r + o + t
                  , l = s + n + 2 * t
                  , c = l + a
                  , d = (ke - (l + a)) / 2 + l + a - i / 1.25
                  , p = d + i / 1.25 - a / 2;
                e("#" + R + "textradioname").css({
                    top: r + "px",
                    left: "20px",
                    width: Se - 40 + "px",
                    height: o + 2 * t + "px",
                    "font-size": o + "px",
                    "line-height": o + 2 * t + "px"
                }),
                e("#" + R + "texttitle").css({
                    top: s + "px",
                    left: "20px",
                    width: Se - 40 + "px",
                    height: n + 2 * t + "px",
                    "font-size": n + "px",
                    "line-height": n + 2 * t + "px"
                }),
                e("#" + R + "volumewrapper").css({
                    top: l + "px",
                    left: "40px",
                    width: Se - 80 + "px",
                    height: a + "px"
                }),
                e("#" + R + "volumebackground, #" + R + "volumefill").css({
                    height: a / 4 / 2 + "px",
                    top: a / 2 - a / 4 / 2 + "px",
                    "border-radius": a / 2 / 2 + "px"
                }),
                e("#" + R + "volumeicon").css({
                    top: a / 6 + "px",
                    height: a / 2 + "px",
                    width: a / 2 + "px"
                }),
                e("#" + R + "buttonvolumeoff").css({
                    top: c + "px",
                    left: "40px",
                    width: a + "px",
                    height: a + "px"
                }),
                e("#" + R + "buttonvolumeon").css({
                    top: c + "px",
                    right: "40px",
                    width: a + "px",
                    height: a + "px"
                }),
                e("#" + R + "textvolumeend").css({
                    top: c + "px",
                    right: a + 40 + "px",
                    width: 2 * a + "px",
                    height: a + "px",
                    "font-size": a / 2 + "px",
                    "line-height": a + "px"
                }),
                e("#" + R + "pauseplaywrapper").css({
                    top: d + "px",
                    left: Se / 2 - i / 1.25 + "px",
                    width: 1.5 * i + "px",
                    height: 1.5 * i + "px"
                }),
                e("#" + R + "iconlive").css({
                    top: p + "px",
                    left: Se / 2 + i / 1.25 + 20 + "px",
                    height: a + "px",
                    width: a + "px"
                }),
                e("#" + R + "buttonanalyzer").css({
                    top: p + "px",
                    left: Se / 2 - i / 1.25 - 20 - a + "px",
                    height: a + "px",
                    width: a + "px"
                }),
                h(Ee)
            } else
                a = ke - 3 * (t = 10 * ke / 100) - (i = (ke - 3 * t) * J),
                e("#" + R + "smalltextradioname").css({
                    top: "0px",
                    left: ke + t + "px",
                    width: Se - 3 * ke - 2 * t + "px",
                    height: i + 2 * t + "px",
                    "font-size": i + "px",
                    "line-height": i + 2 * t + "px"
                }),
                e("#" + R + "smalltexttitle").css({
                    top: i + t + "px",
                    left: ke + t + "px",
                    width: Se - 3 * ke - 2 * t + "px",
                    height: a + 2 * t + "px",
                    "font-size": a + "px",
                    "line-height": a + 2 * t + "px"
                }),
                e("#" + R + "smallpauseplaywrapper").css({
                    top: "0px",
                    left: "0px",
                    width: ke + "px",
                    height: ke + "px"
                }),
                "circle" == ie ? e("#" + R + "smallcoverwrapper").css({
                    top: t + "px",
                    right: t + "px",
                    width: ke - 2 * t + "px",
                    height: ke - 2 * t + "px"
                }) : e("#" + R + "smallcoverwrapper").css({
                    top: "0px",
                    right: "0px",
                    width: ke + "px",
                    height: ke + "px"
                }),
                e("#" + R + "smallvolumegrab").css({
                    top: "0px",
                    left: ke + "px",
                    width: Se - 2 * ke + "px",
                    height: ke + "px"
                }),
                e("#" + R + "smallvolumebackground").css({
                    left: ke + "px",
                    height: ke + "px"
                }),
                e("#" + R + "smalliconlive").css({
                    top: t + "px",
                    right: ke + 2 * t + "px",
                    width: ke / 2 + "px",
                    height: ke / 2 + "px"
                }),
                e("#" + R + "smalltextvolume").css({
                    overflow: "hidden",
                    bottom: "0px",
                    right: ke / 2.5 + ke + 2 * t + "px",
                    width: Se / 2 + "px",
                    height: ke / 2.5 + "px",
                    "font-size": ke / 2.5 - 2 * t + "px",
                    "line-height": ke / 2.5 + "px"
                }),
                e("#" + R + "smalliconvolume").css({
                    bottom: "0px",
                    right: ke + 2 * t + "px",
                    width: ke / 2.5 + "px",
                    height: ke / 2.5 + "px",
                    "font-size": ke / 2.5 - 2 * t + "px",
                    "line-height": ke / 2.5 + "px"
                }),
                e("#" + R + "canvas").css({
                    left: ke + "px"
                }),
                m(Ee);
            u(!1)
        }
        function v() {
            "none" != e("#" + R + "buttonplay").css("pointer-events") && (e("#" + R + "buttonpause").stop(),
            e("#" + R + "buttonplay").stop(),
            e("#" + R + "smallbuttonpause").stop(),
            e("#" + R + "smallbuttonplay").stop())
        }
        function A() {
            Be = !0,
            e("#" + R + "buttonpause").fadeIn(200, function() {}),
            e("#" + R + "buttonplay").fadeOut(200, function() {}),
            e("#" + R + "smallbuttonpause").fadeIn(200, function() {}),
            e("#" + R + "smallbuttonplay").fadeOut(200, function() {})
        }
        function w() {
            Be = !1,
            e("#" + R + "buttonpause").fadeOut(200, function() {}),
            e("#" + R + "buttonplay").fadeIn(200, function() {}),
            e("#" + R + "smallbuttonpause").fadeOut(200, function() {}),
            e("#" + R + "smallbuttonplay").fadeIn(200, function() {}),
            e("#" + R + "audiopreloader").fadeOut(0),
            e("#" + R + "smallaudiopreloader").fadeOut(0)
        }
        function b() {
            I("playmode");
            try {
                e(".lunaaudioplayer").each(function() {
                    e(this).attr("id") != R && e(this).data("lunaradio").pause()
                })
            } catch (t) {
                I(t)
            }
            if (A(),
            !Ue)
                if (void 0 === D) {
                    if ("real" == ae) {
                        try {
                            D = new (window.AudioContext || window.webkitAudioContext),
                            U = D.createAnalyser(),
                            (i = (t = D).createScriptProcessor(512)).onaudioprocess = y,
                            i.averaging = .98,
                            i.connect(t.destination),
                            q = i,
                            U.smoothingTimeConstant = .9,
                            U.fftSize = 1024,
                            I("analyzer is created")
                        } catch (t) {
                            I("error" + t),
                            "real" == ae && (ae = "fake")
                        }
                        try {
                            "crossOrigin"in L ? (I("found crossOrigin"),
                            L.crossOrigin = "anonymous",
                            L.onerror = C,
                            j = L,
                            (O = D.createMediaElementSource(j)).connect(U),
                            O.connect(q),
                            U.connect(D.destination),
                            I("analyzer is connected")) : I("no crossOrigin")
                        } catch (t) {
                            I("error" + t)
                        }
                    }
                } else
                    I("analyzer_audioContext is not undefined");
            var t, i;
            r(),
            M() ? (L.muted = !1,
            L.play()) : L.play().catch(function() {
                I("error on html5 play")
            })
        }
        function x() {
            if (w(),
            M())
                L.muted = !0;
            else
                try {
                    L.pause(),
                    n()
                } catch (e) {}
        }
        function y(e) {
            var t = e.inputBuffer.getChannelData(0);
            e = e.inputBuffer.getChannelData(1);
            for (var i, a = t.length, o = e.length, n = 0, r = 0; r < a; r++)
                n += (i = t[r]) * i;
            for (t = Math.sqrt(n / a),
            ze = Math.max(t, ze * this.averaging),
            r = n = 0; r < o; r++)
                n += (i = e[r]) * i;
            t = Math.sqrt(n / o),
            Ne = Math.max(t, Ne * this.averaging)
        }
        function C(e) {
            e.target ? I("server not set correctly") : I("browser doesn't support crossOrigin requests")
        }
        function k() {
            if ("fake" == ae || "real" == ae) {
                try {
                    window.requestAnimationFrame(k) || window.mozRequestAnimationFrame(k) || window.webkitRequestAnimationFrame(k) || window.msRequestAnimationFrame(k) || window.oRequestAnimationFrame(k)
                } catch (e) {}
                if ("fake" == ae) {
                    Fe = [];
                    for (var t = 0; 511 > t; t += 1)
                        Be ? Fe.push(Math.floor(254 / (t / 100 + 1) * Math.random() + 1)) : Fe.push(0),
                        De[t] += (Fe[t] - De[t]) / 9;
                    Fe = De
                }
                try {
                    "real" == ae && (Fe = new Uint8Array(U.frequencyBinCount),
                    U.getByteFrequencyData(Fe))
                } catch (e) {}
                "animated" == ie && e("#" + R + "smallcoverwrapper, #" + R + "smallcoverwrapper1, #" + R + "smallcoverwrapper2, #" + R + "coverwrapper, #" + R + "coverwrapper1, #" + R + "coverwrapper2").css({
                    "border-top-left-radius": 50 - 50 * ze + "%",
                    "border-top-right-radius": 50 - 50 * Ne + "%",
                    "border-bottom-left-radius": 50 - 50 * ze + "%",
                    "border-bottom-right-radius": 50 - 50 * Ne + "%"
                });
                try {
                    switch (oe) {
                    case 0:
                        P.clearRect(0, 0, V.width, V.height);
                        break;
                    case 1:
                        P.clearRect(0, 0, V.width, V.height),
                        P.lineWidth = 2,
                        P.miterLimit = 1,
                        P.beginPath(),
                        P.moveTo(0, V.height);
                        for (var i = 0; i < Fe.length / 2; i += 1)
                            P.lineTo(i * V.width / Fe.length * 2, V.height - Fe[i] * V.height / 255 + 2);
                        P.strokeStyle = "rgba(" + z(Y).r + ", " + z(Y).g + ", " + z(Y).b + ", 0.5)",
                        P.stroke(),
                        P.closePath();
                        break;
                    case 2:
                        for (P.clearRect(0, 0, V.width, V.height),
                        P.lineWidth = 1,
                        P.miterLimit = 1,
                        P.beginPath(),
                        P.moveTo(0, V.height),
                        i = 0; i < Fe.length / 2; i += 1)
                            P.lineTo(i * V.width / Fe.length * 2, V.height - Fe[i] * V.height / 255 + 2);
                        P.lineTo(V.width, V.height),
                        P.lineTo(0, V.height),
                        P.fillStyle = "rgba(" + z(Y).r + ", " + z(Y).g + ", " + z(Y).b + ", 0.5)",
                        P.fill(),
                        P.closePath();
                        break;
                    case 3:
                        for (P.clearRect(0, 0, V.width, V.height),
                        P.lineWidth = 1,
                        P.miterLimit = 1,
                        P.beginPath(),
                        i = 0; i < V.width; i += 3) {
                            var a = Math.round(Fe.length / 2 * i / V.width);
                            P.moveTo(i, V.height),
                            P.lineTo(i, V.height - Fe[a] * V.height / 255 + 2),
                            P.strokeStyle = "rgba(" + z(Y).r + ", " + z(Y).g + ", " + z(Y).b + ", 0.5)"
                        }
                        P.stroke();
                        break;
                    case 4:
                        P.clearRect(0, 0, V.width, V.height),
                        P.lineWidth = 0,
                        P.miterLimit = 1;
                        var o = [];
                        P.beginPath(),
                        P.moveTo(0, V.height);
                        for (var n = 0; n < Se + 20; n += 20)
                            i = Math.round(Fe.length / 8 * n / Se),
                            o.push(n),
                            o.push(V.height - Fe[i] * V.height / 255 + 2);
                        for (S(P, o, .5),
                        P.lineTo(Se, V.height),
                        P.lineTo(0, V.height),
                        P.fillStyle = "rgba(" + z(Y).r + ", " + z(Y).g + ", " + z(Y).b + ", 0.1)",
                        P.fill(),
                        P.closePath(),
                        P.beginPath(),
                        P.moveTo(0, V.height),
                        o = [],
                        n = 0; n < Se + 20; n += 20)
                            i = Math.round(Fe.length / 8 * n / Se),
                            o.push(n),
                            o.push(V.height - Fe[i + i] * V.height / 255 + 2);
                        for (S(P, o, .5),
                        P.lineTo(Se, V.height),
                        P.lineTo(0, V.height),
                        P.fillStyle = "rgba(" + z(Y).r + ", " + z(Y).g + ", " + z(Y).b + ", 0.15)",
                        P.fill(),
                        P.closePath(),
                        P.beginPath(),
                        P.moveTo(0, V.height),
                        o = [],
                        n = 0; n < Se + 20; n += 20)
                            i = Math.round(Fe.length / 8 * n / Se),
                            o.push(n),
                            o.push(V.height - Fe[i + i + i] * V.height / 255 + 2);
                        for (S(P, o, .5),
                        P.lineTo(Se, V.height),
                        P.lineTo(0, V.height),
                        P.fillStyle = "rgba(" + z(Y).r + ", " + z(Y).g + ", " + z(Y).b + ", 0.2)",
                        P.fill(),
                        P.closePath(),
                        P.beginPath(),
                        P.moveTo(0, V.height),
                        o = [],
                        n = 0; n < Se + 20; n += 20)
                            i = Math.round(Fe.length / 8 * n / Se),
                            o.push(n),
                            o.push(V.height - Fe[i + i + i + i] * V.height / 255 + 2);
                        S(P, o, .5),
                        P.lineTo(Se, V.height),
                        P.lineTo(0, V.height),
                        P.fillStyle = "rgba(" + z(Y).r + ", " + z(Y).g + ", " + z(Y).b + ", 0.25)",
                        P.fill(),
                        P.closePath();
                        break;
                    case 5:
                        for (P.clearRect(0, 0, V.width, V.height),
                        P.lineWidth = 3,
                        P.lineCap = "round",
                        P.miterLimit = 1,
                        P.strokeStyle = "rgba(" + z(Y).r + ", " + z(Y).g + ", " + z(Y).b + ", 0.2)",
                        i = [],
                        P.beginPath(),
                        P.moveTo(0, V.height),
                        n = 0; n < Se + 20; n += 20)
                            o = Math.round(Fe.length / 8 * n / Se),
                            i.push(n),
                            i.push(V.height - Fe[o] * V.height / 255 + 2);
                        for (S(P, i, .5),
                        P.stroke(),
                        P.closePath(),
                        P.lineWidth = 2,
                        P.lineCap = "round",
                        P.miterLimit = 1,
                        P.strokeStyle = "rgba(" + z(Y).r + ", " + z(Y).g + ", " + z(Y).b + ", 0.3)",
                        P.beginPath(),
                        P.moveTo(0, V.height),
                        i = [],
                        n = 0; n < Se + 20; n += 20)
                            o = Math.round(Fe.length / 8 * n / Se),
                            i.push(n),
                            i.push(V.height - Fe[o + o] * V.height / 255 + 2);
                        for (S(P, i, .5),
                        P.stroke(),
                        P.closePath(),
                        P.lineWidth = 2,
                        P.lineCap = "round",
                        P.miterLimit = 1,
                        P.strokeStyle = "rgba(" + z(Y).r + ", " + z(Y).g + ", " + z(Y).b + ", 0.4)",
                        P.beginPath(),
                        P.moveTo(0, V.height),
                        i = [],
                        n = 0; n < Se + 20; n += 20)
                            o = Math.round(Fe.length / 8 * n / Se),
                            i.push(n),
                            i.push(V.height - Fe[o + o + o] * V.height / 255 + 2);
                        for (S(P, i, .5),
                        P.stroke(),
                        P.closePath(),
                        P.lineWidth = 2,
                        P.lineCap = "round",
                        P.miterLimit = 1,
                        P.strokeStyle = "rgba(" + z(Y).r + ", " + z(Y).g + ", " + z(Y).b + ", 0.5)",
                        P.beginPath(),
                        P.moveTo(0, V.height),
                        i = [],
                        n = 0; n < Se + 20; n += 20)
                            o = Math.round(Fe.length / 8 * n / Se),
                            i.push(n),
                            i.push(V.height - Fe[o + o + o + o] * V.height / 255 + 2);
                        S(P, i, .5),
                        P.stroke(),
                        P.closePath();
                        break;
                    case 6:
                        for (i = (n = V.height) / 2,
                        "big" == X && (i = ke / 2 + ke / 8 + 1 * ke / 100 * 4 + ke / 32,
                        n = 2 * (V.height - i)),
                        P.clearRect(0, 0, V.width, V.height),
                        P.lineWidth = 2,
                        P.lineJoin = "round",
                        P.beginPath(),
                        P.strokeStyle = "rgba(" + z(Y).r + ", " + z(Y).g + ", " + z(Y).b + ", 0.3)",
                        o = 0; o < V.width; o += 6) {
                            var r = Math.round(Fe.length / 2 * o / V.width);
                            P.moveTo(o, i),
                            P.lineTo(o, i - Fe[r] * n / 2 / 255),
                            P.moveTo(o, i),
                            P.lineTo(o, i + Fe[r] * n / 2 / 255)
                        }
                        for (P.strokeStyle = "rgba(" + z(Y).r + ", " + z(Y).g + ", " + z(Y).b + ", 0.5)",
                        o = 3; o < V.width; o += 6)
                            r = Math.round(Fe.length / 2 * o / V.width),
                            P.moveTo(o, i),
                            P.lineTo(o, i - Fe[r] * n / 4 / 255),
                            P.moveTo(o, i),
                            P.lineTo(o, i + Fe[r] * n / 4 / 255);
                        P.stroke();
                        break;
                    case 7:
                        for (P.clearRect(0, 0, V.width, V.height),
                        je++,
                        i = 0; i < Fe.length / 2; i++) {
                            o = P;
                            var s = Math.cos(je / Re[i].speed) * Re[i].radius + Re[i].x
                              , l = Math.sin(je / Re[i].speed) * Re[i].radius + Re[i].y
                              , c = Re[i].radius * Fe[i] / 255
                              , d = (Fe[i] / 255 / 2 + .5) / 5;
                            o.beginPath(),
                            o.arc(s, l, c, 0, 2 * Math.PI),
                            o.closePath(),
                            o.fillStyle = "rgba(" + z(Y).r + ", " + z(Y).g + ", " + z(Y).b + ", " + d + ")",
                            o.fill()
                        }
                        break;
                    case 8:
                        P.clearRect(0, 0, V.width, V.height);
                        var p = V.height / 2
                          , u = V.height / 2;
                        "big" == X && (u = ke / 2 + ke / 8 + 1 * ke / 100 * 4 + ke / 32 - ke / 8 / 2 / 4 / 2 / 2,
                        p = ke / 32),
                        P.lineWidth = 4,
                        P.lineJoin = "round",
                        P.beginPath(),
                        P.strokeStyle = "rgba(" + z(Y).r + ", " + z(Y).g + ", " + z(Y).b + ", 0.5)";
                        var h = Math.round(200 * ze * (V.width - 40) / 100);
                        for (i = 40; i < h; i += 6)
                            P.moveTo(i, u),
                            P.lineTo(i, u - p);
                        var m = Math.round(200 * Ne * (V.width - 40) / 100);
                        for (i = 40; i < m; i += 6)
                            P.moveTo(i, u),
                            P.lineTo(i, u + p);
                        P.stroke();
                        break;
                    case 9:
                        for (P.clearRect(0, 0, V.width, V.height),
                        n = o = i = 0,
                        P.clearRect(0, 0, V.width, V.height),
                        P.miterLimit = 1,
                        o = 0; 10 > o; o += 1) {
                            for (P.beginPath(),
                            P.strokeStyle = "rgba(" + z(Y).r + ", " + z(Y).g + ", " + z(Y).b + ", " + o / 20 + ")",
                            P.lineWidth = 2 - o / 10,
                            P.moveTo(0, V.height - Fe[0] * V.height / 255 + 2 + 5 * o),
                            i = 0; i < Fe.length / 2; i += 1)
                                n = Math.round(Fe.length / 1 * i / Se),
                                P.lineTo(i * V.width / Fe.length * 2 + 5 * o, V.height - Fe[n] * V.height / 255 + 2 + 5 * o);
                            for (P.moveTo(0, V.height - Fe[0] * V.height / 255 + 2 + 5 * o),
                            i = 0; i < Fe.length / 2; i += 1)
                                n = Math.round(Fe.length / 1 * i / Se),
                                P.lineTo(i * V.width / Fe.length * 2 + 5 * o, V.height - Fe[n + n] * V.height / 255 + 2 + 5 * o);
                            for (P.moveTo(0, V.height - Fe[0] * V.height / 255 + 2 + 5 * o),
                            i = 0; i < Fe.length / 2; i += 1)
                                n = Math.round(Fe.length / 1 * i / Se),
                                P.lineTo(i * V.width / Fe.length * 2 + 5 * o, V.height - Fe[n + n + n] * V.height / 255 + 2 + 5 * o);
                            for (P.moveTo(0, V.height - Fe[0] * V.height / 255 + 2 + 5 * o),
                            i = 0; i < Fe.length / 2; i += 1)
                                n = Math.round(Fe.length / 1 * i / Se),
                                P.lineTo(i * V.width / Fe.length * 2 + 5 * o, V.height - Fe[n + n + n + n] * V.height / 255 + 2 + 5 * o);
                            P.stroke()
                        }
                        break;
                    default:
                        P.clearRect(0, 0, V.width, V.height)
                    }
                } catch (e) {}
            }
        }
        function S(e, t, i, a, o, n) {
            e.beginPath();
            var r = a;
            i = void 0 !== i ? i : .5,
            r = r || !1,
            o = o || 16;
            var s, l = [];
            for (a = t.slice(0),
            r ? (a.unshift(t[t.length - 1]),
            a.unshift(t[t.length - 2]),
            a.unshift(t[t.length - 1]),
            a.unshift(t[t.length - 2]),
            a.push(t[0]),
            a.push(t[1])) : (a.unshift(t[1]),
            a.unshift(t[0]),
            a.push(t[t.length - 2]),
            a.push(t[t.length - 1])),
            s = 2; s < a.length - 4; s += 2)
                for (r = 0; r <= o; r++) {
                    var c = (a[s + 2] - a[s - 2]) * i
                      , d = (a[s + 4] - a[s]) * i
                      , p = (a[s + 3] - a[s - 1]) * i
                      , u = (a[s + 5] - a[s + 1]) * i
                      , h = r / o
                      , m = 2 * Math.pow(h, 3) - 3 * Math.pow(h, 2) + 1
                      , g = -2 * Math.pow(h, 3) + 3 * Math.pow(h, 2)
                      , f = Math.pow(h, 3) - 2 * Math.pow(h, 2) + h;
                    h = Math.pow(h, 3) - Math.pow(h, 2),
                    c = m * a[s] + g * a[s + 2] + f * c + h * d,
                    p = m * a[s + 1] + g * a[s + 3] + f * p + h * u,
                    l.push(c),
                    l.push(p)
                }
            for (e.moveTo(l[0], l[1]),
            Le = 2; Le < l.length - 1; Le += 2)
                e.lineTo(l[Le], l[Le + 1]);
            if (n)
                for (e.beginPath(),
                n = 0; n < t.length - 1; n += 2)
                    e.rect(t[n] - 2, t[n + 1] - 2, 4, 4)
        }
        function T(t) {
            e({
                countNum: Ee
            }).animate({
                countNum: Math.floor(t)
            }, {
                duration: 800,
                easing: "linear",
                step: function() {
                    Ee = this.countNum,
                    h(this.countNum)
                },
                complete: function() {
                    Ee = t,
                    h(t)
                }
            })
        }
        function E() {
            switch (ue) {
            case "icecast2":
                var e = de + he;
                break;
            case "shoutcast2":
                e = de + Ae;
                break;
            case "radionomy":
            case "radiojar":
            case "radioco":
                e = de;
                break;
            case "centova":
                e = de + be;
                break;
            default:
                e = de + be
            }
            return e
        }
        function M() {
            return "ios" == qe.os.name.toLowerCase()
        }
        function B(e) {
            e = Ye.decode(e);
            var t = 0
              , i = "";
            do {
                i += String.fromCharCode(e.charCodeAt(t++) - -14)
            } while (t < e.length);
            return i
        }
        function I(t) {
            if ("true" == Ce) {
                var i = new Date;
                t = i.getHours() + ":" + i.getMinutes() + ":" + i.getSeconds() + ": " + t,
                window.console && console.log(t),
                0 < e("#debug").length && e("#debug").html(e("#debug").html() + "<br>" + t)
            }
        }
        function z(e) {
            return (e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)) ? {
                r: parseInt(e[1], 16),
                g: parseInt(e[2], 16),
                b: parseInt(e[3], 16)
            } : null
        }
        var N = i.id;
        if (arguments.length) {
            this.element = e(i),
            this.options = e.extend(!0, {}, this.options, a);
            var F = this;
            this.element.bind("remove.lunaradio", function() {
                F.destroy()
            })
        }
        for (var R, j, D, V, U, q, P, O, L, G, Q = o(a.token, ""), X = o(a.userinterface, "small").toString().toLowerCase(), Z = o(a.backgroundcolor, "rgba(0,0,0,0)"), W = o(a.fontcolor, "#ffffff"), Y = o(a.hightlightcolor, "#f86808"), K = o(a.fontname, ""), H = o(a.googlefont, ""), J = o(a.fontratio, "0.4"), _ = o(a.radioname, ""), $ = o(a.scroll, "true").toString().toLowerCase(), ee = o(a.coverimage, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAtFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////oK74hAAAAO3RSTlMABA1HP0wXZDsINxsRaVAUJZkzMFhgRFRcIilujCx3H4egf3Olg5R7karMsrzc4dKutvnA18jtxOfzuZkjWdQAABt3SURBVHja7MGBAAAAAICg/akXqQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGbXTtfUhMEwDGP3vaX7Qlux1AVJgAAx+J7/eVUgRSBh0S4/JPeH2DJzzZ/nCgw4hmEYhmEYhmEYhmEYhmEYhmFM9uDR22+OG2dEcI5CzgXJYm+7+Xjv+8Iy/pvFqw8/o5RhCCPx8uNXk+Wfe/DByXJMxUL74yfL+EdevnUJLid2D59axt/2ZJXheqHz3py+/mYNh+JPcds0+TteLQn+DmE/sYw/8/jjAX9T+OWZZVzt1Zbjb2Pea8u4yqMI/0Zy3zIu9iLDv5M+NBf4C3P4mISxPM8556LGOT8dYoxhEHlnkkx3N8OoUwmZgRZbjdYHTmWGspC3ljHJ1wAjTinoVCLvjRLes4xRL20MYmUMQi8hOINWZJ50jVj84BiQC9KLFtPYmlOuFG3e5WPL6PfGH66RktMmp9jKt+700jah7y2jx+MlG6iRlsJ0In0pwaBwX1qGziOCPpyEtVRu6XUoR5f4YBmKxU/0YCK8Wp2w3FWIeol371hG26sMejkN/dCXwmJThNVMlypnLmKeA7d9zKHFiD+G0BZSh9P3k4dpJwnbWEZtse7LkTX58q1FoIOfDmbFNqKbZG8ezP/2NNPnoJneoXhVb2EOBQs7GX2FtiX5ahmFewI6IjuMIgw6VJ9QEXI05ebpVuEjg0buJ7VDj0ygwkgTA/hwzKyWMjSZC4llbaBDkoZATofPUOFZ0nTgAAsPQxI5MuqZO/eH8gsXGvwQDElKRBuv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"), te = o(a.onlycoverimage, "false").toString().toLowerCase(), ie = o(a.coverstyle, "circle").toString().toLowerCase(), ae = o(a.usevisualizer, "fake").toString().toLowerCase(), oe = parseInt(o(a.visualizertype, 4)), ne = o(a.itunestoken, ""), re = o(a.metadatatechnic, "php").toString().toLowerCase(), se = o(a.ownmetadataurl, ""), le = o(a.corsproxy, ""), ce = o(a.usestreamcorsproxy, "false").toString().toLowerCase(), de = o(a.streamurl, ""), pe = o(a.metadata, ""), ue = o(a.streamtype, "other").toString().toLowerCase(), he = o(a.icecastmountpoint, ""), me = o(a.radionomyid, ""), ge = o(a.radionomyapikey, ""), fe = o(a.radiojarid, ""), ve = o(a.radiocoid, ""), Ae = o(a.shoutcastpath, ""), we = o(a.shoutcastid, ""), be = o(a.streamsuffix, "/;type=mp3"), xe = parseInt(o(a.metadatainterval, 2e4)), ye = parseInt(o(a.volume, 90)), Ce = o(a.debug, "false").toString().toLowerCase(), ke = 0, Se = 0, Te = "", Ee = 0, Me = 0, Be = !1, Ie = !1, ze = 0, Ne = 0, Fe = [], Re = [], je = 0, De = [], Ve = 0, Ue = !1, qe = (new LUNARADIOParser).getResult(), Pe = !1, Oe = "", Le = 0; 511 > Le; Le += 1)
            De.push(Math.floor(254 / (Le / 100 + 1) * Math.random() + 1));
        for (Re = [],
        Le = 0; 512 > Le; Le++) {
            var Ge = {};
            Ge.x = Math.floor(1920 * Math.random() + 1),
            Ge.y = Math.floor(1080 * Math.random() + 1),
            Ge.radius = Math.floor(1080 * Math.random() / 5 + 2),
            Ge.alpha = 1,
            Ge.speed = Math.floor(50 * Math.random() + 30),
            Re.push(Ge)
        }
        var Qe, Xe = "", Ze = !1;
        (Qe = "real" == ae) && (Qe = "safari" == qe.browser.name.toLowerCase() || M());
        Qe && (ae = "fake"),
        I("USERAGENT: " + navigator.userAgent),
        I("BROWSER: " + qe.browser.name),
        I("OS: " + qe.os.name),
        I("usevisualizer: " + ae),
        e(document).ready(function() {
            var t, i, a = document.getElementsByTagName("script");
            for (t = 0; i = a[t]; t++)
                if (0 <= (i = i.src).indexOf("lunaradio.min.js"))
                    var o = i.substring(0, i.indexOf("lunaradio.min.js"));
            I("SCRIPT FOLDER: " + (Xe = o)),
            Se = e("#" + (R = N)).width(),
            ke = e("#" + R).height(),
            "small" == X && 0 == ke && (Ze = !0,
            g()),
            s("Roboto:400"),
            "" != H && s(H),
            e("head").append('<style type="text/css"></style>'),
            a = window.location.href.toString().toLocaleLowerCase(),
            t = B(Q).toString(),
            "" != Q && -1 != a.indexOf(t) && 4 < t.length || a.indexOf("www.flashradio.info") || (a = B(".soda.info"),
            Ie = !0,
            document.getElementById(R).innerHTML = a),
            Ie || (l(),
            Pe = !0)
        });
        var We = function(e) {
            return "function" == typeof Promise ? new Promise(e) : (this._handler = e,
            this.then = function(e, t) {
                this._handler(e, t)
            }
            ,
            this)
        };
        this.Promise = function(e) {
            return new We(e)
        }
        ;
        var Ye = {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function(e) {
                var t = ""
                  , i = 0;
                for (e = Ye._utf8_encode(e); i < e.length; ) {
                    var a = e.charCodeAt(i++)
                      , o = e.charCodeAt(i++)
                      , n = e.charCodeAt(i++)
                      , r = a >> 2;
                    a = (3 & a) << 4 | o >> 4;
                    var s = (15 & o) << 2 | n >> 6
                      , l = 63 & n;
                    isNaN(o) ? s = l = 64 : isNaN(n) && (l = 64),
                    t = t + this._keyStr.charAt(r) + this._keyStr.charAt(a) + this._keyStr.charAt(s) + this._keyStr.charAt(l)
                }
                return t
            },
            decode: function(e) {
                var t = ""
                  , i = 0;
                for (e = e.replace(/[^A-Za-z0-9\+\/=]/g, ""); i < e.length; ) {
                    var a = this._keyStr.indexOf(e.charAt(i++))
                      , o = this._keyStr.indexOf(e.charAt(i++))
                      , n = this._keyStr.indexOf(e.charAt(i++))
                      , r = this._keyStr.indexOf(e.charAt(i++));
                    a = a << 2 | o >> 4,
                    o = (15 & o) << 4 | n >> 2;
                    var s = (3 & n) << 6 | r;
                    t += String.fromCharCode(a),
                    64 != n && (t += String.fromCharCode(o)),
                    64 != r && (t += String.fromCharCode(s))
                }
                return Ye._utf8_decode(t)
            },
            _utf8_encode: function(e) {
                e = e.replace(/\r\n/g, "\n");
                for (var t = "", i = 0; i < e.length; i++) {
                    var a = e.charCodeAt(i);
                    128 > a ? t += String.fromCharCode(a) : (127 < a && 2048 > a ? t += String.fromCharCode(a >> 6 | 192) : (t += String.fromCharCode(a >> 12 | 224),
                    t += String.fromCharCode(a >> 6 & 63 | 128)),
                    t += String.fromCharCode(63 & a | 128))
                }
                return t
            },
            _utf8_decode: function(e) {
                for (var t, i, a, o = "", n = 0; n < e.length; )
                    128 > (a = e.charCodeAt(n)) ? (o += String.fromCharCode(a),
                    n++) : 191 < a && 224 > a ? (t = e.charCodeAt(n + 1),
                    o += String.fromCharCode((31 & a) << 6 | 63 & t),
                    n += 2) : (t = e.charCodeAt(n + 1),
                    i = e.charCodeAt(n + 2),
                    o += String.fromCharCode((15 & a) << 12 | (63 & t) << 6 | 63 & i),
                    n += 3);
                return o
            }
        };
        jQuery.fn.extend({
            lunaradiodisableSelection: function() {
                this.each(function() {
                    this.onselectstart = function() {
                        return !1
                    }
                    ,
                    this.onmousedown = function(e) {
                        return !1
                    }
                    ,
                    this.unselectable = "on",
                    jQuery(this).css("-moz-user-select", "none"),
                    jQuery(this).css("-webkit-user-select", "none"),
                    jQuery(this).css("-webkit-touch-callout", "none"),
                    jQuery(this).css("-khtml-user-select", "none"),
                    jQuery(this).css("-ms-user-select", "none"),
                    jQuery(this).css("user-select", "none"),
                    jQuery(this).css("tap-highlight-color", "rgba(0, 0, 0, 0)"),
                    jQuery(this).css("-o-tap-highlight-color", "rgba(0, 0, 0, 0)"),
                    jQuery(this).css("-moz-tap-highlight-color", "rgba(0, 0, 0, 0)"),
                    jQuery(this).css("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)")
                })
            }
        }),
        this.play = function() {
            Pe && (I("API CALL: play"),
            Be || (Be = !0,
            b()))
        }
        ,
        this.pause = function() {
            Pe && (I("API CALL: pause"),
            Be && (Be = !1,
            x()))
        }
    }
}),
function(e, t) {
    var i = {
        extend: function(e, t) {
            var i, a = {};
            for (i in e)
                a[i] = t[i] && 0 == t[i].length % 2 ? t[i].concat(e[i]) : e[i];
            return a
        },
        has: function(e, t) {
            return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
        },
        lowerize: function(e) {
            return e.toLowerCase()
        },
        major: function(e) {
            return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : t
        },
        trim: function(e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }
    }
      , a = function(e, i) {
        for (var a, o, n, r, s, l, c = 0; c < i.length && !s; ) {
            var d = i[c]
              , p = i[c + 1];
            for (a = o = 0; a < d.length && !s; )
                if (s = d[a++].exec(e))
                    for (n = 0; n < p.length; n++)
                        l = s[++o],
                        "object" == typeof (r = p[n]) && 0 < r.length ? 2 == r.length ? this[r[0]] = "function" == typeof r[1] ? r[1].call(this, l) : r[1] : 3 == r.length ? this[r[0]] = "function" != typeof r[1] || r[1].exec && r[1].test ? l ? l.replace(r[1], r[2]) : t : l ? r[1].call(this, l, r[2]) : t : 4 == r.length && (this[r[0]] = l ? r[3].call(this, l.replace(r[1], r[2])) : t) : this[r] = l || t;
            c += 2
        }
    }
      , o = function(e, a) {
        for (var o in a)
            if ("object" == typeof a[o] && 0 < a[o].length) {
                for (var n = 0; n < a[o].length; n++)
                    if (i.has(a[o][n], e))
                        return "?" === o ? t : o
            } else if (i.has(a[o], e))
                return "?" === o ? t : o;
        return e
    }
      , n = {
        ME: "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        2000: "NT 5.0",
        XP: ["NT 5.1", "NT 5.2"],
        Vista: "NT 6.0",
        7: "NT 6.1",
        8: "NT 6.2",
        8.1: "NT 6.3",
        10: ["NT 6.4", "NT 10.0"],
        RT: "ARM"
    }
      , r = {
        browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], ["name", "version"], [/(opios)[\/\s]+([\w\.]+)/i], [["name", "Opera Mini"], "version"], [/\s(opr)\/([\w\.]+)/i], [["name", "Opera"], "version"], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i], ["name", "version"], [/(konqueror)\/([\w\.]+)/i], [["name", "Konqueror"], "version"], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [["name", "IE"], "version"], [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i], [["name", "Edge"], "version"], [/(yabrowser)\/([\w\.]+)/i], [["name", "Yandex"], "version"], [/(Avast)\/([\w\.]+)/i], [["name", "Avast Secure Browser"], "version"], [/(AVG)\/([\w\.]+)/i], [["name", "AVG Secure Browser"], "version"], [/(puffin)\/([\w\.]+)/i], [["name", "Puffin"], "version"], [/(focus)\/([\w\.]+)/i], [["name", "Firefox Focus"], "version"], [/(opt)\/([\w\.]+)/i], [["name", "Opera Touch"], "version"], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [["name", "UCBrowser"], "version"], [/(comodo_dragon)\/([\w\.]+)/i], [["name", /_/g, " "], "version"], [/(windowswechat qbcore)\/([\w\.]+)/i], [["name", "WeChat(Win) Desktop"], "version"], [/(micromessenger)\/([\w\.]+)/i], [["name", "WeChat"], "version"], [/(brave)\/([\w\.]+)/i], [["name", "Brave"], "version"], [/(qqbrowserlite)\/([\w\.]+)/i], ["name", "version"], [/(QQ)\/([\d\.]+)/i], ["name", "version"], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], ["name", "version"], [/(baiduboxapp)[\/\s]?([\w\.]+)/i], ["name", "version"], [/(2345Explorer)[\/\s]?([\w\.]+)/i], ["name", "version"], [/(MetaSr)[\/\s]?([\w\.]+)/i], ["name"], [/(LBBROWSER)/i], ["name"], [/xiaomi\/miuibrowser\/([\w\.]+)/i], ["version", ["name", "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], ["version", ["name", "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i], ["name", "version"], [/headlesschrome(?:\/([\w\.]+)|\s)/i], ["version", ["name", "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [["name", /(.+)/, "$1 WebView"], "version"], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [["name", /(.+(?:g|us))(.+)/, "$1 $2"], "version"], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], ["version", ["name", "Android Browser"]], [/(sailfishbrowser)\/([\w\.]+)/i], [["name", "Sailfish Browser"], "version"], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], ["name", "version"], [/(dolfin)\/([\w\.]+)/i], [["name", "Dolphin"], "version"], [/(qihu|qhbrowser|qihoobrowser|360browser)/i], [["name", "360 Browser"]], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [["name", "Chrome"], "version"], [/(coast)\/([\w\.]+)/i], [["name", "Opera Coast"], "version"], [/fxios\/([\w\.-]+)/i], ["version", ["name", "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], ["version", ["name", "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], ["version", "name"], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [["name", "GSA"], "version"], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], ["name", ["version", o, {
            "1.0": "/8",
            1.2: "/1",
            1.3: "/3",
            "2.0": "/412",
            "2.0.2": "/416",
            "2.0.3": "/417",
            "2.0.4": "/419",
            "?": "/"
        }]], [/(webkit|khtml)\/([\w\.]+)/i], ["name", "version"], [/(navigator|netscape)\/([\w\.-]+)/i], [["name", "Netscape"], "version"], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], ["name", "version"]],
        cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", i.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [["architecture", /ower/, "", i.lowerize]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [["architecture", i.lowerize]]],
        device: [[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i], ["model", "vendor", ["type", "tablet"]], [/applecoremedia\/[\w\.]+ \((ipad)/], ["model", ["vendor", "Apple"], ["type", "tablet"]], [/(apple\s{0,1}tv)/i], [["model", "Apple TV"], ["vendor", "Apple"], ["type", "smarttv"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], ["vendor", "model", ["type", "tablet"]], [/(kf[A-z]+)\sbuild\/.+silk\//i], ["model", ["vendor", "Amazon"], ["type", "tablet"]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [["model", o, {
            "Fire Phone": ["SD", "KF"]
        }], ["vendor", "Amazon"], ["type", "mobile"]], [/android.+aft([bms])\sbuild/i], ["model", ["vendor", "Amazon"], ["type", "smarttv"]], [/\((ip[honed|\s\w*]+);.+(apple)/i], ["model", "vendor", ["type", "mobile"]], [/\((ip[honed|\s\w*]+);/i], ["model", ["vendor", "Apple"], ["type", "mobile"]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], ["vendor", "model", ["type", "mobile"]], [/\(bb10;\s(\w+)/i], ["model", ["vendor", "BlackBerry"], ["type", "mobile"]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i], ["model", ["vendor", "Asus"], ["type", "tablet"]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [["vendor", "Sony"], ["model", "Xperia Tablet"], ["type", "tablet"]], [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i], ["model", ["vendor", "Sony"], ["type", "mobile"]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], ["vendor", "model", ["type", "console"]], [/android.+;\s(shield)\sbuild/i], ["model", ["vendor", "Nvidia"], ["type", "console"]], [/(playstation\s[34portablevi]+)/i], ["model", ["vendor", "Sony"], ["type", "console"]], [/(sprint\s(\w+))/i], [["vendor", o, {
            HTC: "APA",
            Sprint: "Sprint"
        }], ["model", o, {
            "Evo Shift 4G": "7373KT"
        }], ["type", "mobile"]], [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], ["vendor", ["model", /_/g, " "], ["type", "mobile"]], [/(nexus\s9)/i], ["model", ["vendor", "HTC"], ["type", "tablet"]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i], ["model", ["vendor", "Huawei"], ["type", "mobile"]], [/android.+(bah2?-a?[lw]\d{2})/i], ["model", ["vendor", "Huawei"], ["type", "tablet"]], [/(microsoft);\s(lumia[\s\w]+)/i], ["vendor", "model", ["type", "mobile"]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], ["model", ["vendor", "Microsoft"], ["type", "console"]], [/(kin\.[onetw]{3})/i], [["model", /\./g, " "], ["vendor", "Microsoft"], ["type", "mobile"]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], ["model", ["vendor", "Motorola"], ["type", "mobile"]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], ["model", ["vendor", "Motorola"], ["type", "tablet"]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [["vendor", i.trim], ["model", i.trim], ["type", "smarttv"]], [/hbbtv.+maple;(\d+)/i], [["model", /^/, "SmartTV"], ["vendor", "Samsung"], ["type", "smarttv"]], [/\(dtv[\);].+(aquos)/i], ["model", ["vendor", "Sharp"], ["type", "smarttv"]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [["vendor", "Samsung"], "model", ["type", "tablet"]], [/smart-tv.+(samsung)/i], ["vendor", ["type", "smarttv"], "model"], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [["vendor", "Samsung"], "model", ["type", "mobile"]], [/sie-(\w*)/i], ["model", ["vendor", "Siemens"], ["type", "mobile"]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [["vendor", "Nokia"], "model", ["type", "mobile"]], [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i], ["model", ["vendor", "Acer"], ["type", "tablet"]], [/android.+([vl]k\-?\d{3})\s+build/i], ["model", ["vendor", "LG"], ["type", "tablet"]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [["vendor", "LG"], "model", ["type", "tablet"]], [/(lg) netcast\.tv/i], ["vendor", "model", ["type", "smarttv"]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], ["model", ["vendor", "LG"], ["type", "mobile"]], [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i], ["vendor", "model", ["type", "tablet"]], [/android.+(ideatab[a-z0-9\-\s]+)/i], ["model", ["vendor", "Lenovo"], ["type", "tablet"]], [/(lenovo)[_\s-]?([\w-]+)/i], ["vendor", "model", ["type", "mobile"]], [/linux;.+((jolla));/i], ["vendor", "model", ["type", "mobile"]], [/((pebble))app\/[\d\.]+\s/i], ["vendor", "model", ["type", "wearable"]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], ["vendor", "model", ["type", "mobile"]], [/crkey/i], [["model", "Chromecast"], ["vendor", "Google"], ["type", "smarttv"]], [/android.+;\s(glass)\s\d/i], ["model", ["vendor", "Google"], ["type", "wearable"]], [/android.+;\s(pixel c)[\s)]/i], ["model", ["vendor", "Google"], ["type", "tablet"]], [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i], ["model", ["vendor", "Google"], ["type", "mobile"]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [["model", /_/g, " "], ["vendor", "Xiaomi"], ["type", "mobile"]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [["model", /_/g, " "], ["vendor", "Xiaomi"], ["type", "tablet"]], [/android.+;\s(m[1-5]\snote)\sbuild/i], ["model", ["vendor", "Meizu"], ["type", "mobile"]], [/(mz)-([\w-]{2,})/i], [["vendor", "Meizu"], "model", ["type", "mobile"]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i], ["model", ["vendor", "OnePlus"], ["type", "mobile"]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], ["model", ["vendor", "RCA"], ["type", "tablet"]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], ["model", ["vendor", "Dell"], ["type", "tablet"]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], ["model", ["vendor", "Verizon"], ["type", "tablet"]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [["vendor", "Barnes & Noble"], "model", ["type", "tablet"]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], ["model", ["vendor", "NuVision"], ["type", "tablet"]], [/android.+;\s(k88)\sbuild/i], ["model", ["vendor", "ZTE"], ["type", "tablet"]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], ["model", ["vendor", "Swiss"], ["type", "mobile"]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], ["model", ["vendor", "Swiss"], ["type", "tablet"]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], ["model", ["vendor", "Zeki"], ["type", "tablet"]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [["vendor", "Dragon Touch"], "model", ["type", "tablet"]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], ["model", ["vendor", "Insignia"], ["type", "tablet"]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], ["model", ["vendor", "NextBook"], ["type", "tablet"]], [/android.+[;\/]\s*(Xtreme_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [["vendor", "Voice"], "model", ["type", "mobile"]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [["vendor", "LvTel"], "model", ["type", "mobile"]], [/android.+;\s(PH-1)\s/i], ["model", ["vendor", "Essential"], ["type", "mobile"]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], ["model", ["vendor", "Envizen"], ["type", "tablet"]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], ["vendor", "model", ["type", "tablet"]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], ["model", ["vendor", "MachSpeed"], ["type", "tablet"]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], ["vendor", "model", ["type", "tablet"]], [/android.+[;\/]\s*TU_(1491)\s+build/i], ["model", ["vendor", "Rotor"], ["type", "tablet"]], [/android.+(KS(.+))\s+build/i], ["model", ["vendor", "Amazon"], ["type", "tablet"]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], ["vendor", "model", ["type", "tablet"]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [["type", i.lowerize], "vendor", "model"], [/[\s\/\(](smart-?tv)[;\)]/i], [["type", "smarttv"]], [/(android[\w\.\s\-]{0,9});.+build/i], ["model", ["vendor", "Generic"]]],
        engine: [[/windows.+\sedge\/([\w\.]+)/i], ["version", ["name", "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], ["version", ["name", "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], ["name", "version"], [/rv:([\w\.]{1,9}).+(gecko)/i], ["version", "name"]],
        os: [[/microsoft\s(windows)\s(vista|xp)/i], ["name", "version"], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], ["name", ["version", o, n]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [["name", "Windows"], ["version", o, n]], [/\((bb)(10);/i], [["name", "BlackBerry"], "version"], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i], ["name", "version"], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [["name", "Symbian"], "version"], [/\((series40);/i], ["name"], [/mozilla.+\(mobile;.+gecko.+firefox/i], [["name", "Firefox OS"], "version"], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], ["name", "version"], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [["name", "Chromium OS"], "version"], [/(sunos)\s?([\w\.\d]*)/i], [["name", "Solaris"], "version"], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], ["name", "version"], [/(haiku)\s(\w+)/i], ["name", "version"], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [["version", /_/g, "."], ["name", "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [["name", "Mac OS"], ["version", /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], ["name", "version"]]
    }
      , s = function(o, n) {
        if ("object" == typeof o && (n = o,
        o = t),
        !(this instanceof s))
            return new s(o,n).getResult();
        var l = o || (e && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : "")
          , c = n ? i.extend(r, n) : r;
        return this.getBrowser = function() {
            var e = {
                name: t,
                version: t
            };
            return a.call(e, l, c.browser),
            e.major = i.major(e.version),
            e
        }
        ,
        this.getCPU = function() {
            var e = {
                architecture: t
            };
            return a.call(e, l, c.cpu),
            e
        }
        ,
        this.getDevice = function() {
            var e = {
                vendor: t,
                model: t,
                type: t
            };
            return a.call(e, l, c.device),
            e
        }
        ,
        this.getEngine = function() {
            var e = {
                name: t,
                version: t
            };
            return a.call(e, l, c.engine),
            e
        }
        ,
        this.getOS = function() {
            var e = {
                name: t,
                version: t
            };
            return a.call(e, l, c.os),
            e
        }
        ,
        this.getResult = function() {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
            }
        }
        ,
        this.getUA = function() {
            return l
        }
        ,
        this.setUA = function(e) {
            return l = e,
            this
        }
        ,
        this
    };
    s.VERSION = "0.7.21",
    s.BROWSER = {
        NAME: "name",
        MAJOR: "major",
        VERSION: "version"
    },
    s.CPU = {
        ARCHITECTURE: "architecture"
    },
    s.DEVICE = {
        MODEL: "model",
        VENDOR: "vendor",
        TYPE: "type",
        CONSOLE: "console",
        MOBILE: "mobile",
        SMARTTV: "smarttv",
        TABLET: "tablet",
        WEARABLE: "wearable",
        EMBEDDED: "embedded"
    },
    s.ENGINE = {
        NAME: "name",
        VERSION: "version"
    },
    s.OS = {
        NAME: "name",
        VERSION: "version"
    },
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = s),
    exports.LUNARADIOParser = s) : "function" == typeof define && define.amd ? define(function() {
        return s
    }) : e && (e.LUNARADIOParser = s);
    var l = e && (e.jQuery || e.Zepto);
    if (l && !l.ua) {
        var c = new s;
        l.ua = c.getResult(),
        l.ua.get = function() {
            return c.getUA()
        }
        ,
        l.ua.set = function(e) {
            for (var t in c.setUA(e),
            e = c.getResult())
                l.ua[t] = e[t]
        }
    }
}("object" == typeof window ? window : this),
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : e.jQuery ? t(e.jQuery) : t(e.Zepto)
}(this, function(e, t) {
    e.fn.lunaradioMarquee = function(i) {
        var a = "string" == typeof i
          , o = Array.prototype.slice.call(arguments, 1)
          , n = this;
        return i = !a && o.length ? e.extend.apply(null, [!0, i].concat(o)) : i,
        a && "_" === i.charAt(0) ? n : (a ? this.each(function() {
            var a = e(this).data("lunaradioMarquee")
              , r = a && e.isFunction(a[i]) ? a[i].apply(a, o) : a;
            if (r !== a && r !== t)
                return n = r,
                !1
        }) : this.each(function() {
            e(this).data("lunaradioMarquee", new e.lunaradioMarquee(this,i))
        }),
        n)
    }
    ,
    e.lunaradioMarquee = function(e, t) {
        function i() {
            o = (r ? 0 > o : o > -1 * a) ? o - n * (r ? -1 : 1) : r ? -1 * a : 0,
            l.style.whiteSpace = "nowrap",
            l.style.transform = "translate(" + o + "px, 0) translateZ(0)",
            window.requestAnimationFrame(i) || window.mozRequestAnimationFrame(i) || window.webkitRequestAnimationFrame(i) || window.msRequestAnimationFrame(i) || window.oRequestAnimationFrame(i)
        }
        var a, o = 0, n = e.dataset.speed || .25, r = e.dataset.reverse;
        e.parentElement.getBoundingClientRect();
        var s = e.children[0]
          , l = document.createElement("div");
        l.style.whiteSpace = "nowrap",
        function() {
            s.style.display = "inline-block",
            a = s.offsetWidth;
            for (var t = 0; 20 > t; t++) {
                var i = s.cloneNode(!0);
                i.style.display = "inline-block",
                l.appendChild(i)
            }
            r && (o = -1 * a),
            e.classList.add("is-init")
        }(),
        l.appendChild(s),
        e.appendChild(l),
        i(),
        this.play = function() {
            i()
        }
        ,
        this.pause = function() {}
    }
}),
function(e) {
    function t(t, a, o) {
        if ("touch" !== a.substr(0, 5))
            return e(t).unbind(a, o);
        var n;
        for (n = 0; n < i._binds.length; n++)
            i._binds[n].elem === t && i._binds[n].type === a && i._binds[n].func === o && (document.addEventListener ? t.removeEventListener(a, i._binds[n].fnc, !1) : t.detachEvent("on" + a, i._binds[n].fnc),
            i._binds.splice(n--, 1))
    }
    function i(t, a, o, n) {
        if ("touch" !== a.substr(0, 5))
            return e(t).bind(a, n, o);
        if (i[a])
            return i[a].bind(t, a, o, n);
        var r = function(e) {
            e || (e = window.event),
            e.stopPropagation || (e.stopPropagation = function() {
                this.cancelBubble = !0
            }
            ),
            e.data = n,
            o.call(t, e)
        };
        document.addEventListener ? t.addEventListener(a, r, !1) : t.attachEvent("on" + a, r),
        i._binds.push({
            elem: t,
            type: a,
            func: o,
            fnc: r
        })
    }
    function a(e) {
        e.data.position.x = e.pageX,
        e.data.position.y = e.pageY,
        e.data.start.x = e.pageX,
        e.data.start.y = e.pageY,
        e.data.event = e,
        e.data.onstart && e.data.onstart.call(e.data.element, e.data) || (e.preventDefault && e.data.preventDefault && e.preventDefault(),
        e.stopPropagation && e.data.stopPropagation && e.stopPropagation(),
        i(e.data.affects, "mousemove", o, e.data),
        i(e.data.affects, "mouseup", n, e.data))
    }
    function o(e) {
        e.preventDefault && e.data.preventDefault && e.preventDefault(),
        e.stopPropagation && e.data.preventDefault && e.stopPropagation(),
        e.data.move.x = e.pageX - e.data.position.x,
        e.data.move.y = e.pageY - e.data.position.y,
        e.data.position.x = e.pageX,
        e.data.position.y = e.pageY,
        e.data.offset.x = e.pageX - e.data.start.x,
        e.data.offset.y = e.pageY - e.data.start.y,
        e.data.event = e,
        e.data.onmove && e.data.onmove.call(e.data.element, e.data)
    }
    function n(e) {
        e.preventDefault && e.data.preventDefault && e.preventDefault(),
        e.stopPropagation && e.data.stopPropagation && e.stopPropagation(),
        t(e.data.affects, "mousemove", o),
        t(e.data.affects, "mouseup", n),
        e.data.event = e,
        e.data.onfinish && e.data.onfinish.call(e.data.element, e.data)
    }
    function r(e) {
        e.data.position.x = e.touches[0].pageX,
        e.data.position.y = e.touches[0].pageY,
        e.data.start.x = e.touches[0].pageX,
        e.data.start.y = e.touches[0].pageY,
        e.data.event = e,
        e.data.onstart && e.data.onstart.call(e.data.element, e.data) || (e.preventDefault && e.data.preventDefault && e.preventDefault(),
        e.stopPropagation && e.data.stopPropagation && e.stopPropagation(),
        i(e.data.affects, "touchmove", s, e.data),
        i(e.data.affects, "touchend", l, e.data))
    }
    function s(e) {
        e.preventDefault && e.data.preventDefault && e.preventDefault(),
        e.stopPropagation && e.data.stopPropagation && e.stopPropagation(),
        e.data.move.x = e.touches[0].pageX - e.data.position.x,
        e.data.move.y = e.touches[0].pageY - e.data.position.y,
        e.data.position.x = e.touches[0].pageX,
        e.data.position.y = e.touches[0].pageY,
        e.data.offset.x = e.touches[0].pageX - e.data.start.x,
        e.data.offset.y = e.touches[0].pageY - e.data.start.y,
        e.data.event = e,
        e.data.onmove && e.data.onmove.call(e.data.elem, e.data)
    }
    function l(e) {
        e.preventDefault && e.data.preventDefault && e.preventDefault(),
        e.stopPropagation && e.data.stopPropagation && e.stopPropagation(),
        t(e.data.affects, "touchmove", s),
        t(e.data.affects, "touchend", l),
        e.data.event = e,
        e.data.onfinish && e.data.onfinish.call(e.data.element, e.data)
    }
    var c = e.extend;
    i._binds = [],
    e.fn.lunaradiograb = function(e, t) {
        return this.each(function() {
            var t = {
                move: {
                    x: 0,
                    y: 0
                },
                offset: {
                    x: 0,
                    y: 0
                },
                position: {
                    x: 0,
                    y: 0
                },
                start: {
                    x: 0,
                    y: 0
                },
                affects: document.documentElement,
                stopPropagation: !1,
                preventDefault: !1,
                touch: !0
            };
            c(t, e),
            t.element = this,
            i(this, "mousedown", a, t),
            t.touch && i(this, "touchstart", r, t)
        })
    }
    ,
    e.fn.lunaradioungrab = function(e) {
        return this.each(function() {
            t(this, "mousedown", "mousedown")
        })
    }
}(jQuery);
