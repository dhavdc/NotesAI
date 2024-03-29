! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.MidiConvert = e() : t.MidiConvert = e()
}(this, function () {
    return function (t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.i = function (t) {
            return t
        }, e.d = function (t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 7)
    }([function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
            return r
        }), n.d(e, "b", function () {
            return i
        }), n.d(e, "c", function () {
            return a
        });
        var r = ["acoustic grand piano", "bright acoustic piano", "electric grand piano", "honky-tonk piano", "electric piano 1", "electric piano 2", "harpsichord", "clavi", "celesta", "glockenspiel", "music box", "vibraphone", "marimba", "xylophone", "tubular bells", "dulcimer", "drawbar organ", "percussive organ", "rock organ", "church organ", "reed organ", "accordion", "harmonica", "tango accordion", "acoustic guitar (nylon)", "acoustic guitar (steel)", "electric guitar (jazz)", "electric guitar (clean)", "electric guitar (muted)", "overdriven guitar", "distortion guitar", "guitar harmonics", "acoustic bass", "electric bass (finger)", "electric bass (pick)", "fretless bass", "slap bass 1", "slap bass 2", "synth bass 1", "synth bass 2", "violin", "viola", "cello", "contrabass", "tremolo strings", "pizzicato strings", "orchestral harp", "timpani", "string ensemble 1", "string ensemble 2", "synthstrings 1", "synthstrings 2", "choir aahs", "voice oohs", "synth voice", "orchestra hit", "trumpet", "trombone", "tuba", "muted trumpet", "french horn", "brass section", "synthbrass 1", "synthbrass 2", "soprano sax", "alto sax", "tenor sax", "baritone sax", "oboe", "english horn", "bassoon", "clarinet", "piccolo", "flute", "recorder", "pan flute", "blown bottle", "shakuhachi", "whistle", "ocarina", "lead 1 (square)", "lead 2 (sawtooth)", "lead 3 (calliope)", "lead 4 (chiff)", "lead 5 (charang)", "lead 6 (voice)", "lead 7 (fifths)", "lead 8 (bass + lead)", "pad 1 (new age)", "pad 2 (warm)", "pad 3 (polysynth)", "pad 4 (choir)", "pad 5 (bowed)", "pad 6 (metallic)", "pad 7 (halo)", "pad 8 (sweep)", "fx 1 (rain)", "fx 2 (soundtrack)", "fx 3 (crystal)", "fx 4 (atmosphere)", "fx 5 (brightness)", "fx 6 (goblins)", "fx 7 (echoes)", "fx 8 (sci-fi)", "sitar", "banjo", "shamisen", "koto", "kalimba", "bag pipe", "fiddle", "shanai", "tinkle bell", "agogo", "steel drums", "woodblock", "taiko drum", "melodic tom", "synth drum", "reverse cymbal", "guitar fret noise", "breath noise", "seashore", "bird tweet", "telephone ring", "helicopter", "applause", "gunshot"],
            i = ["piano", "chromatic percussion", "organ", "guitar", "bass", "strings", "ensemble", "brass", "reed", "pipe", "synth lead", "synth pad", "synth effects", "ethnic", "percussive", "sound effects"],
            a = {
                0: "standard kit",
                8: "room kit",
                16: "power kit",
                24: "electronic kit",
                25: "tr-808 kit",
                32: "jazz kit",
                40: "brush kit",
                48: "orchestra kit",
                56: "sound fx kit"
            }
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return t.replace(/\u0000/g, "")
        }

        function i(t, e) {
            return 60 / e.bpm * (t / e.PPQ)
        }

        function a(t) {
            return "number" == typeof t
        }

        function o(t) {
            return "string" == typeof t
        }

        function s(t) {
            return ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"][t % 12] + (Math.floor(t / 12) - 1)
        }
        e.b = r, e.a = i, e.c = a, n.d(e, "d", function () {
            return u
        }), e.e = s, n.d(e, "f", function () {
            return c
        });
        var u = function () {
                var t = /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i;
                return function (e) {
                    return o(e) && t.test(e)
                }
            }(),
            c = function () {
                var t = /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
                    e = {
                        cbb: -2,
                        cb: -1,
                        c: 0,
                        "c#": 1,
                        cx: 2,
                        dbb: 0,
                        db: 1,
                        d: 2,
                        "d#": 3,
                        dx: 4,
                        ebb: 2,
                        eb: 3,
                        e: 4,
                        "e#": 5,
                        ex: 6,
                        fbb: 3,
                        fb: 4,
                        f: 5,
                        "f#": 6,
                        fx: 7,
                        gbb: 5,
                        gb: 6,
                        g: 7,
                        "g#": 8,
                        gx: 9,
                        abb: 7,
                        ab: 8,
                        a: 9,
                        "a#": 10,
                        ax: 11,
                        bbb: 9,
                        bb: 10,
                        b: 11,
                        "b#": 12,
                        bx: 13
                    };
                return function (n) {
                    var r = t.exec(n),
                        i = r[1],
                        a = r[2];
                    return e[i.toLowerCase()] + 12 * (parseInt(a) + 1)
                }
            }()
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        n.d(e, "a", function () {
            return h
        });
        var i = n(11),
            a = (n.n(i), n(10)),
            o = (n.n(a), n(1)),
            s = n(9),
            u = n(5),
            c = function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function (e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            h = function () {
                function t() {
                    r(this, t), this.header = {
                        bpm: 120,
                        timeSignature: [4, 4],
                        PPQ: 480
                    }, this.tracks = []
                }
                return c(t, null, [{
                    key: "fromJSON",
                    value: function (e) {
                        var n = new t;
                        return n.header = e.header, e.tracks.forEach(function (t) {
                            var e = s.a.fromJSON(t);
                            n.tracks.push(e)
                        }), n
                    }
                }]), c(t, [{
                    key: "load",
                    value: function (t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "GET";
                        return new Promise(function (i, a) {
                            var o = new XMLHttpRequest;
                            o.open(r, t), o.responseType = "arraybuffer", o.addEventListener("load", function () {
                                4 === o.readyState && 200 === o.status ? i(e.decode(o.response)) : a(o.status)
                            }), o.addEventListener("error", a), o.send(n)
                        }).catch(function (t) {
                            console.log(t)
                        })
                    }
                }, {
                    key: "decode",
                    value: function (t) {
                        var e = this;
                        if (t instanceof ArrayBuffer) {
                            var r = new Uint8Array(t);
                            t = String.fromCharCode.apply(null, r)
                        }
                        var a = i(t);
                        return this.header = n.i(u.a)(a), this.tracks = [], a.tracks.forEach(function (t, n) {
                            var r = new s.a;
                            r.id = n, e.tracks.push(r);
                            var i = 0;
                            t.forEach(function (t) {
                                i += o.a(t.deltaTime, e.header), "meta" === t.type && "trackName" === t.subtype ? r.name = o.b(t.text) : "noteOn" === t.subtype ? (r.noteOn(t.noteNumber, i, t.velocity / 127), -1 === r.channelNumber && (r.channelNumber = t.channel)) : "noteOff" === t.subtype ? r.noteOff(t.noteNumber, i) : "controller" === t.subtype && t.controllerType ? r.cc(t.controllerType, i, t.value / 127) : "meta" === t.type && "instrumentName" === t.subtype ? r.instrument = t.text : "channel" === t.type && "programChange" === t.subtype && (r.patch(t.programNumber), r.channelNumber = t.channel)
                            }), e.header.name || r.length || !r.name || (e.header.name = r.name)
                        }), this
                    }
                }, {
                    key: "encode",
                    value: function () {
                        var t = this,
                            e = new a.File({
                                ticks: this.header.PPQ
                            }),
                            n = this.tracks.filter(function (t) {
                                return !t.length
                            })[0];
                        if (this.header.name && (!n || n.name !== this.header.name)) {
                            e.addTrack().addEvent(new a.MetaEvent({
                                time: 0,
                                type: a.MetaEvent.TRACK_NAME,
                                data: this.header.name
                            }))
                        }
                        return this.tracks.forEach(function (n) {
                            var r = e.addTrack();
                            r.setTempo(t.bpm), n.name && r.addEvent(new a.MetaEvent({
                                time: 0,
                                type: a.MetaEvent.TRACK_NAME,
                                data: n.name
                            })), n.encode(r, t.header)
                        }), e.toBytes()
                    }
                }, {
                    key: "toArray",
                    value: function () {
                        for (var t = this.encode(), e = new Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
                        return e
                    }
                }, {
                    key: "toJSON",
                    value: function () {
                        var t = {
                            header: this.header,
                            startTime: this.startTime,
                            duration: this.duration,
                            tracks: (this.tracks || []).map(function (t) {
                                return t.toJSON()
                            })
                        };
                        return t.header.name || (t.header.name = ""), t
                    }
                }, {
                    key: "track",
                    value: function (t) {
                        var e = new s.a(t);
                        return this.tracks.push(e), e
                    }
                }, {
                    key: "get",
                    value: function (t) {
                        return o.c(t) ? this.tracks[t] : this.tracks.find(function (e) {
                            return e.name === t
                        })
                    }
                }, {
                    key: "slice",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.duration,
                            r = new t;
                        return r.header = this.header, r.tracks = this.tracks.map(function (t) {
                            return t.slice(e, n)
                        }), r
                    }
                }, {
                    key: "startTime",
                    get: function () {
                        var t = this.tracks.map(function (t) {
                            return t.startTime
                        });
                        return t.length ? Math.min.apply(Math, t) || 0 : 0
                    }
                }, {
                    key: "bpm",
                    get: function () {
                        return this.header.bpm
                    },
                    set: function (t) {
                        var e = this.header.bpm;
                        this.header.bpm = t;
                        var n = e / t;
                        this.tracks.forEach(function (t) {
                            return t.scale(n)
                        })
                    }
                }, {
                    key: "timeSignature",
                    get: function () {
                        return this.header.timeSignature
                    },
                    set: function (t) {
                        this.header.timeSignature = t
                    }
                }, {
                    key: "duration",
                    get: function () {
                        var t = this.tracks.map(function (t) {
                            return t.duration
                        });
                        return t.length ? Math.max.apply(Math, t) || 0 : 0
                    }
                }]), t
            }()
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            var n = 0,
                r = t.length,
                i = r;
            if (r > 0 && t[r - 1].time <= e) return r - 1;
            for (; n < i;) {
                var a = Math.floor(n + (i - n) / 2),
                    o = t[a],
                    s = t[a + 1];
                if (o.time === e) {
                    for (var u = a; u < t.length; u++) {
                        t[u].time === e && (a = u)
                    }
                    return a
                }
                if (o.time < e && s.time > e) return a;
                o.time > e ? i = a : o.time < e && (n = a + 1)
            }
            return -1
        }

        function i(t, e) {
            if (t.length) {
                var n = r(t, e.time);
                t.splice(n + 1, 0, e)
            } else t.push(e)
        }
        n.d(e, "a", function () {
            return i
        })
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        n.d(e, "a", function () {
            return o
        });
        var i = function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function (e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            a = {
                1: "modulationWheel",
                2: "breath",
                4: "footController",
                5: "portamentoTime",
                7: "volume",
                8: "balance",
                10: "pan",
                64: "sustain",
                65: "portamentoTime",
                66: "sostenuto",
                67: "softPedal",
                68: "legatoFootswitch",
                84: "portamentoContro"
            },
            o = function () {
                function t(e, n, i) {
                    r(this, t), this.number = e, this.time = n, this.value = i
                }
                return i(t, [{
                    key: "name",
                    get: function () {
                        if (a.hasOwnProperty(this.number)) return a[this.number]
                    }
                }]), t
            }()
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            for (var e = {
                    PPQ: t.header.ticksPerBeat
                }, n = 0; n < t.tracks.length; n++)
                for (var r = t.tracks[n], i = 0; i < r.length; i++) {
                    var a = r[i];
                    "meta" === a.type && ("timeSignature" === a.subtype ? e.timeSignature = [a.numerator, a.denominator] : "setTempo" === a.subtype && (e.bpm || (e.bpm = 6e7 / a.microsecondsPerBeat)))
                }
            return e.bpm = e.bpm || 120, e
        }
        n.d(e, "a", function () {
            return r
        })
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n],
                    i = e[n];
                if (r.length > i) return !0
            }
            return !1
        }

        function i(t, e, n) {
            for (var r = 0, i = 1 / 0, a = 0; a < t.length; a++) {
                var o = t[a],
                    s = e[a];
                o[s] && o[s].time < i && (r = a, i = o[s].time)
            }
            n[r](t[r][e[r]]), e[r] += 1
        }

        function a() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            for (var a = e.filter(function (t, e) {
                    return e % 2 == 0
                }), o = new Uint32Array(a.length), s = e.filter(function (t, e) {
                    return e % 2 == 1
                }); r(a, o);) i(a, o, s)
        }
        n.d(e, "a", function () {
            return a
        })
    }, function (t, e, n) {
        "use strict";

        function r(t) {
            return (new s.a).decode(t)
        }

        function i(t, e) {
            var n = (new s.a).load(t);
            return e && n.then(e), n
        }

        function a() {
            return new s.a
        }

        function o(t) {
            return s.a.fromJSON(t)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.parse = r, e.load = i, e.create = a, e.fromJSON = o;
        var s = n(2),
            u = n(0);
        n.d(e, "instrumentByPatchID", function () {
            return u.a
        }), n.d(e, "instrumentFamilyByID", function () {
            return u.b
        }), n.d(e, "drumKitByPatchID", function () {
            return u.c
        })
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        n.d(e, "a", function () {
            return o
        });
        var i = n(1),
            a = function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function (e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            o = function () {
                function t(e, n) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                    if (r(this, t), i.c(e)) this.midi = e;
                    else {
                        if (!i.d(e)) throw new Error("the midi value must either be in Pitch Notation (e.g. C#4) or a midi value");
                        this.name = e
                    }
                    this.time = n, this.duration = a, this.velocity = o
                }
                return a(t, null, [{
                    key: "fromJSON",
                    value: function (e) {
                        return new t(e.midi, e.time, e.duration, e.velocity)
                    }
                }]), a(t, [{
                    key: "match",
                    value: function (t) {
                        return i.c(t) ? this.midi === t : i.d(t) ? this.name.toLowerCase() === t.toLowerCase() : void 0
                    }
                }, {
                    key: "toJSON",
                    value: function () {
                        return {
                            name: this.name,
                            midi: this.midi,
                            time: this.time,
                            velocity: this.velocity,
                            duration: this.duration
                        }
                    }
                }, {
                    key: "name",
                    get: function () {
                        return i.e(this.midi)
                    },
                    set: function (t) {
                        this.midi = i.f(t)
                    }
                }, {
                    key: "noteOn",
                    get: function () {
                        return this.time
                    },
                    set: function (t) {
                        this.time = t
                    }
                }, {
                    key: "noteOff",
                    get: function () {
                        return this.time + this.duration
                    },
                    set: function (t) {
                        this.duration = t - this.time
                    }
                }]), t
            }()
    }, function (t, e, n) {
        "use strict";

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        n.d(e, "a", function () {
            return h
        });
        var i = n(3),
            a = n(4),
            o = n(6),
            s = n(8),
            u = n(0),
            c = function () {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }
                return function (e, n, r) {
                    return n && t(e.prototype, n), r && t(e, r), e
                }
            }(),
            h = function () {
                function t(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
                    r(this, t), this.name = e, this.channelNumber = i, this.notes = [], this.controlChanges = {}, this.instrumentNumber = n
                }
                return c(t, null, [{
                    key: "fromJSON",
                    value: function (e) {
                        var n = new t(e.name, e.instrumentNumber, e.channelNumber);
                        return n.id = e.id, e.notes && e.notes.forEach(function (t) {
                            var e = s.a.fromJSON(t);
                            n.notes.push(e)
                        }), e.controlChanges && (n.controlChanges = e.controlChanges), n
                    }
                }]), c(t, [{
                    key: "note",
                    value: function (t, e) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                            o = new s.a(t, e, r, a);
                        return n.i(i.a)(this.notes, o), this
                    }
                }, {
                    key: "noteOn",
                    value: function (t, e) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                            a = new s.a(t, e, 0, r);
                        return n.i(i.a)(this.notes, a), this
                    }
                }, {
                    key: "noteOff",
                    value: function (t, e) {
                        for (var n = 0; n < this.notes.length; n++) {
                            var r = this.notes[n];
                            if (r.match(t) && 0 === r.duration) {
                                r.noteOff = e;
                                break
                            }
                        }
                        return this
                    }
                }, {
                    key: "cc",
                    value: function (t, e, r) {
                        this.controlChanges.hasOwnProperty(t) || (this.controlChanges[t] = []);
                        var o = new a.a(t, e, r);
                        return n.i(i.a)(this.controlChanges[t], o), this
                    }
                }, {
                    key: "patch",
                    value: function (t) {
                        return this.instrumentNumber = t, this
                    }
                }, {
                    key: "channel",
                    value: function (t) {
                        return this.channelNumber = t, this
                    }
                }, {
                    key: "scale",
                    value: function (t) {
                        return this.notes.forEach(function (e) {
                            e.time *= t, e.duration *= t
                        }), this
                    }
                }, {
                    key: "slice",
                    value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.duration,
                            r = Math.max(this.notes.findIndex(function (t) {
                                return t.time >= e
                            }), 0),
                            i = this.notes.findIndex(function (t) {
                                return t.noteOff >= n
                            }) + 1,
                            a = new t(this.name);
                        return a.notes = this.notes.slice(r, i), a.notes.forEach(function (t) {
                            return t.time = t.time - e
                        }), a
                    }
                }, {
                    key: "encode",
                    value: function (t, e) {
                        function r(t) {
                            var e = Math.floor(i * t),
                                n = Math.max(e - a, 0);
                            return a = e, n
                        }
                        var i = e.PPQ / (60 / e.bpm),
                            a = 0,
                            s = Math.max(0, this.channelNumber); - 1 !== this.instrumentNumber && t.instrument(s, this.instrumentNumber), n.i(o.a)(this.noteOns, function (e) {
                            t.addNoteOn(s, e.name, r(e.time), Math.floor(127 * e.velocity))
                        }, this.noteOffs, function (e) {
                            t.addNoteOff(s, e.name, r(e.time))
                        })
                    }
                }, {
                    key: "toJSON",
                    value: function () {
                        var t = {
                            startTime: this.startTime,
                            duration: this.duration,
                            length: this.length,
                            notes: [],
                            controlChanges: {}
                        };
                        return void 0 !== this.id && (t.id = this.id), t.name = this.name, -1 !== this.instrumentNumber && (t.instrumentNumber = this.instrumentNumber, t.instrument = this.instrument, t.instrumentFamily = this.instrumentFamily), -1 !== this.channelNumber && (t.channelNumber = this.channelNumber, t.isPercussion = this.isPercussion), this.notes.length && (t.notes = this.notes.map(function (t) {
                            return t.toJSON()
                        })), Object.keys(this.controlChanges).length && (t.controlChanges = this.controlChanges), t
                    }
                }, {
                    key: "noteOns",
                    get: function () {
                        var t = [];
                        return this.notes.forEach(function (e) {
                            t.push({
                                time: e.noteOn,
                                midi: e.midi,
                                name: e.name,
                                velocity: e.velocity
                            })
                        }), t
                    }
                }, {
                    key: "noteOffs",
                    get: function () {
                        var t = [];
                        return this.notes.forEach(function (e) {
                            t.push({
                                time: e.noteOff,
                                midi: e.midi,
                                name: e.name
                            })
                        }), t
                    }
                }, {
                    key: "length",
                    get: function () {
                        return this.notes.length
                    }
                }, {
                    key: "startTime",
                    get: function () {
                        if (this.notes.length) {
                            return this.notes[0].noteOn
                        }
                        return 0
                    }
                }, {
                    key: "duration",
                    get: function () {
                        if (this.notes.length) {
                            return this.notes[this.notes.length - 1].noteOff
                        }
                        return 0
                    }
                }, {
                    key: "instrument",
                    get: function () {
                        return this.isPercussion ? u.c[this.instrumentNumber] : u.a[this.instrumentNumber]
                    },
                    set: function (t) {
                        var e = u.a.indexOf(t); - 1 !== e && (this.instrumentNumber = e)
                    }
                }, {
                    key: "isPercussion",
                    get: function () {
                        return [9, 10].includes(this.channelNumber)
                    }
                }, {
                    key: "instrumentFamily",
                    get: function () {
                        return this.isPercussion ? "drums" : u.b[Math.floor(this.instrumentNumber / 8)]
                    }
                }]), t
            }()
    }, function (t, e, n) {
        (function (t) {
            var n = {};
            ! function (t) {
                var e = t.DEFAULT_VOLUME = 90,
                    n = (t.DEFAULT_DURATION = 128, t.DEFAULT_CHANNEL = 0, {
                        midi_letter_pitches: {
                            a: 21,
                            b: 23,
                            c: 12,
                            d: 14,
                            e: 16,
                            f: 17,
                            g: 19
                        },
                        midiPitchFromNote: function (t) {
                            var e = /([a-g])(#+|b+)?([0-9]+)$/i.exec(t),
                                r = e[1].toLowerCase(),
                                i = e[2] || "";
                            return 12 * parseInt(e[3], 10) + n.midi_letter_pitches[r] + ("#" == i.substr(0, 1) ? 1 : -1) * i.length
                        },
                        ensureMidiPitch: function (t) {
                            return "number" != typeof t && /[^0-9]/.test(t) ? n.midiPitchFromNote(t) : parseInt(t, 10)
                        },
                        midi_pitches_letter: {
                            12: "c",
                            13: "c#",
                            14: "d",
                            15: "d#",
                            16: "e",
                            17: "f",
                            18: "f#",
                            19: "g",
                            20: "g#",
                            21: "a",
                            22: "a#",
                            23: "b"
                        },
                        midi_flattened_notes: {
                            "a#": "bb",
                            "c#": "db",
                            "d#": "eb",
                            "f#": "gb",
                            "g#": "ab"
                        },
                        noteFromMidiPitch: function (t, e) {
                            var r, i = 0,
                                a = t,
                                e = e || !1;
                            return t > 23 && (i = Math.floor(t / 12) - 1, a = t - 12 * i), r = n.midi_pitches_letter[a], e && r.indexOf("#") > 0 && (r = n.midi_flattened_notes[r]), r + i
                        },
                        mpqnFromBpm: function (t) {
                            var e = Math.floor(6e7 / t),
                                n = [];
                            do {
                                n.unshift(255 & e), e >>= 8
                            } while (e);
                            for (; n.length < 3;) n.push(0);
                            return n
                        },
                        bpmFromMpqn: function (t) {
                            var e = t;
                            if (void 0 !== t[0]) {
                                e = 0;
                                for (var n = 0, r = t.length - 1; r >= 0; ++n, --r) e |= t[n] << r
                            }
                            return Math.floor(6e7 / t)
                        },
                        codes2Str: function (t) {
                            return String.fromCharCode.apply(null, t)
                        },
                        str2Bytes: function (t, e) {
                            if (e)
                                for (; t.length / 2 < e;) t = "0" + t;
                            for (var n = [], r = t.length - 1; r >= 0; r -= 2) {
                                var i = 0 === r ? t[r] : t[r - 1] + t[r];
                                n.unshift(parseInt(i, 16))
                            }
                            return n
                        },
                        translateTickTime: function (t) {
                            for (var e = 127 & t; t >>= 7;) e <<= 8, e |= 127 & t | 128;
                            for (var n = [];;) {
                                if (n.push(255 & e), !(128 & e)) break;
                                e >>= 8
                            }
                            return n
                        }
                    }),
                    r = function (t) {
                        if (!this) return new r(t);
                        !t || null === t.type && void 0 === t.type || null === t.channel && void 0 === t.channel || null === t.param1 && void 0 === t.param1 || (this.setTime(t.time), this.setType(t.type), this.setChannel(t.channel), this.setParam1(t.param1), this.setParam2(t.param2))
                    };
                r.NOTE_OFF = 128, r.NOTE_ON = 144, r.AFTER_TOUCH = 160, r.CONTROLLER = 176, r.PROGRAM_CHANGE = 192, r.CHANNEL_AFTERTOUCH = 208, r.PITCH_BEND = 224, r.prototype.setTime = function (t) {
                    this.time = n.translateTickTime(t || 0)
                }, r.prototype.setType = function (t) {
                    if (t < r.NOTE_OFF || t > r.PITCH_BEND) throw new Error("Trying to set an unknown event: " + t);
                    this.type = t
                }, r.prototype.setChannel = function (t) {
                    if (t < 0 || t > 15) throw new Error("Channel is out of bounds.");
                    this.channel = t
                }, r.prototype.setParam1 = function (t) {
                    this.param1 = t
                }, r.prototype.setParam2 = function (t) {
                    this.param2 = t
                }, r.prototype.toBytes = function () {
                    var t = [],
                        e = this.type | 15 & this.channel;
                    return t.push.apply(t, this.time), t.push(e), t.push(this.param1), void 0 !== this.param2 && null !== this.param2 && t.push(this.param2), t
                };
                var i = function (t) {
                    if (!this) return new i(t);
                    this.setTime(t.time), this.setType(t.type), this.setData(t.data)
                };
                i.SEQUENCE = 0, i.TEXT = 1, i.COPYRIGHT = 2, i.TRACK_NAME = 3, i.INSTRUMENT = 4, i.LYRIC = 5, i.MARKER = 6, i.CUE_POINT = 7, i.CHANNEL_PREFIX = 32, i.END_OF_TRACK = 47, i.TEMPO = 81, i.SMPTE = 84, i.TIME_SIG = 88, i.KEY_SIG = 89, i.SEQ_EVENT = 127, i.prototype.setTime = function (t) {
                    this.time = n.translateTickTime(t || 0)
                }, i.prototype.setType = function (t) {
                    this.type = t
                }, i.prototype.setData = function (t) {
                    this.data = t
                }, i.prototype.toBytes = function () {
                    if (!this.type) throw new Error("Type for meta-event not specified.");
                    var t = [];
                    if (t.push.apply(t, this.time), t.push(255, this.type), Array.isArray(this.data)) t.push(this.data.length), t.push.apply(t, this.data);
                    else if ("number" == typeof this.data) t.push(1, this.data);
                    else if (null !== this.data && void 0 !== this.data) {
                        t.push(this.data.length);
                        var e = this.data.split("").map(function (t) {
                            return t.charCodeAt(0)
                        });
                        t.push.apply(t, e)
                    } else t.push(0);
                    return t
                };
                var a = function (t) {
                    if (!this) return new a(t);
                    var e = t || {};
                    this.events = e.events || []
                };
                a.START_BYTES = [77, 84, 114, 107], a.END_BYTES = [0, 255, 47, 0], a.prototype.addEvent = function (t) {
                    return this.events.push(t), this
                }, a.prototype.addNoteOn = a.prototype.noteOn = function (t, i, a, o) {
                    return this.events.push(new r({
                        type: r.NOTE_ON,
                        channel: t,
                        param1: n.ensureMidiPitch(i),
                        param2: o || e,
                        time: a || 0
                    })), this
                }, a.prototype.addNoteOff = a.prototype.noteOff = function (t, i, a, o) {
                    return this.events.push(new r({
                        type: r.NOTE_OFF,
                        channel: t,
                        param1: n.ensureMidiPitch(i),
                        param2: o || e,
                        time: a || 0
                    })), this
                }, a.prototype.addNote = a.prototype.note = function (t, e, n, r, i) {
                    return this.noteOn(t, e, r, i), n && this.noteOff(t, e, n, i), this
                }, a.prototype.addChord = a.prototype.chord = function (t, e, n, r) {
                    if (!Array.isArray(e) && !e.length) throw new Error("Chord must be an array of pitches");
                    return e.forEach(function (e) {
                        this.noteOn(t, e, 0, r)
                    }, this), e.forEach(function (e, r) {
                        0 === r ? this.noteOff(t, e, n) : this.noteOff(t, e)
                    }, this), this
                }, a.prototype.setInstrument = a.prototype.instrument = function (t, e, n) {
                    return this.events.push(new r({
                        type: r.PROGRAM_CHANGE,
                        channel: t,
                        param1: e,
                        time: n || 0
                    })), this
                }, a.prototype.setTempo = a.prototype.tempo = function (t, e) {
                    return this.events.push(new i({
                        type: i.TEMPO,
                        data: n.mpqnFromBpm(t),
                        time: e || 0
                    })), this
                }, a.prototype.toBytes = function () {
                    var t = 0,
                        e = [],
                        r = a.START_BYTES,
                        i = a.END_BYTES,
                        o = function (n) {
                            var r = n.toBytes();
                            t += r.length, e.push.apply(e, r)
                        };
                    this.events.forEach(o), t += i.length;
                    var s = n.str2Bytes(t.toString(16), 4);
                    return r.concat(s, e, i)
                };
                var o = function (t) {
                    if (!this) return new o(t);
                    var e = t || {};
                    if (e.ticks) {
                        if ("number" != typeof e.ticks) throw new Error("Ticks per beat must be a number!");
                        if (e.ticks <= 0 || e.ticks >= 32768 || e.ticks % 1 != 0) throw new Error("Ticks per beat must be an integer between 1 and 32767!")
                    }
                    this.ticks = e.ticks || 128, this.tracks = e.tracks || []
                };
                o.HDR_CHUNKID = "MThd", o.HDR_CHUNK_SIZE = "\0\0\0", o.HDR_TYPE0 = "\0\0", o.HDR_TYPE1 = "\0", o.prototype.addTrack = function (t) {
                    return t ? (this.tracks.push(t), this) : (t = new a, this.tracks.push(t), t)
                }, o.prototype.toBytes = function () {
                    var t = this.tracks.length.toString(16),
                        e = o.HDR_CHUNKID + o.HDR_CHUNK_SIZE;
                    return parseInt(t, 16) > 1 ? e += o.HDR_TYPE1 : e += o.HDR_TYPE0, e += n.codes2Str(n.str2Bytes(t, 2)), e += String.fromCharCode(this.ticks / 256, this.ticks % 256), this.tracks.forEach(function (t) {
                        e += n.codes2Str(t.toBytes())
                    }), e
                }, t.Util = n, t.File = o, t.Track = a, t.Event = r, t.MetaEvent = i
            }(n), void 0 !== t && null !== t ? t.exports = n : void 0 !== e && null !== e ? e = n : this.Midi = n
        }).call(e, n(12)(t))
    }, function (t, e) {
        function n(t) {
            function e(t) {
                var e = t.read(4),
                    n = t.readInt32();
                return {
                    id: e,
                    length: n,
                    data: t.read(n)
                }
            }
            var n;
            stream = r(t);
            var i = e(stream);
            if ("MThd" != i.id || 6 != i.length) throw "Bad .mid file - header not found";
            var a = r(i.data),
                o = a.readInt16(),
                s = a.readInt16(),
                u = a.readInt16();
            if (32768 & u) throw "Expressing time division in SMTPE frames is not supported yet";
            ticksPerBeat = u;
            for (var c = {
                    formatType: o,
                    trackCount: s,
                    ticksPerBeat: ticksPerBeat
                }, h = [], f = 0; f < c.trackCount; f++) {
                h[f] = [];
                var d = e(stream);
                if ("MTrk" != d.id) throw "Unexpected chunk - expected MTrk, got " + d.id;
                for (var l = r(d.data); !l.eof();) {
                    var p = function (t) {
                        var e = {};
                        e.deltaTime = t.readVarInt();
                        var r = t.readInt8();
                        if (240 == (240 & r)) {
                            if (255 == r) {
                                e.type = "meta";
                                var i = t.readInt8(),
                                    a = t.readVarInt();
                                switch (i) {
                                    case 0:
                                        if (e.subtype = "sequenceNumber", 2 != a) throw "Expected length for sequenceNumber event is 2, got " + a;
                                        return e.number = t.readInt16(), e;
                                    case 1:
                                        return e.subtype = "text", e.text = t.read(a), e;
                                    case 2:
                                        return e.subtype = "copyrightNotice", e.text = t.read(a), e;
                                    case 3:
                                        return e.subtype = "trackName", e.text = t.read(a), e;
                                    case 4:
                                        return e.subtype = "instrumentName", e.text = t.read(a), e;
                                    case 5:
                                        return e.subtype = "lyrics", e.text = t.read(a), e;
                                    case 6:
                                        return e.subtype = "marker", e.text = t.read(a), e;
                                    case 7:
                                        return e.subtype = "cuePoint", e.text = t.read(a), e;
                                    case 32:
                                        if (e.subtype = "midiChannelPrefix", 1 != a) throw "Expected length for midiChannelPrefix event is 1, got " + a;
                                        return e.channel = t.readInt8(), e;
                                    case 47:
                                        if (e.subtype = "endOfTrack", 0 != a) throw "Expected length for endOfTrack event is 0, got " + a;
                                        return e;
                                    case 81:
                                        if (e.subtype = "setTempo", 3 != a) throw "Expected length for setTempo event is 3, got " + a;
                                        return e.microsecondsPerBeat = (t.readInt8() << 16) + (t.readInt8() << 8) + t.readInt8(), e;
                                    case 84:
                                        if (e.subtype = "smpteOffset", 5 != a) throw "Expected length for smpteOffset event is 5, got " + a;
                                        var o = t.readInt8();
                                        return e.frameRate = {
                                            0: 24,
                                            32: 25,
                                            64: 29,
                                            96: 30
                                        } [96 & o], e.hour = 31 & o, e.min = t.readInt8(), e.sec = t.readInt8(), e.frame = t.readInt8(), e.subframe = t.readInt8(), e;
                                    case 88:
                                        if (e.subtype = "timeSignature", 4 != a) throw "Expected length for timeSignature event is 4, got " + a;
                                        return e.numerator = t.readInt8(), e.denominator = Math.pow(2, t.readInt8()), e.metronome = t.readInt8(), e.thirtyseconds = t.readInt8(), e;
                                    case 89:
                                        if (e.subtype = "keySignature", 2 != a) throw "Expected length for keySignature event is 2, got " + a;
                                        return e.key = t.readInt8(!0), e.scale = t.readInt8(), e;
                                    case 127:
                                        return e.subtype = "sequencerSpecific", e.data = t.read(a), e;
                                    default:
                                        return e.subtype = "unknown", e.data = t.read(a), e
                                }
                                return e.data = t.read(a), e
                            }
                            if (240 == r) {
                                e.type = "sysEx";
                                var a = t.readVarInt();
                                return e.data = t.read(a), e
                            }
                            if (247 == r) {
                                e.type = "dividedSysEx";
                                var a = t.readVarInt();
                                return e.data = t.read(a), e
                            }
                            throw "Unrecognised MIDI event type byte: " + r
                        }
                        var s;
                        0 == (128 & r) ? (s = r, r = n) : (s = t.readInt8(), n = r);
                        var u = r >> 4;
                        switch (e.channel = 15 & r, e.type = "channel", u) {
                            case 8:
                                return e.subtype = "noteOff", e.noteNumber = s, e.velocity = t.readInt8(), e;
                            case 9:
                                return e.noteNumber = s, e.velocity = t.readInt8(), 0 == e.velocity ? e.subtype = "noteOff" : e.subtype = "noteOn", e;
                            case 10:
                                return e.subtype = "noteAftertouch", e.noteNumber = s, e.amount = t.readInt8(), e;
                            case 11:
                                return e.subtype = "controller", e.controllerType = s, e.value = t.readInt8(), e;
                            case 12:
                                return e.subtype = "programChange", e.programNumber = s, e;
                            case 13:
                                return e.subtype = "channelAftertouch", e.amount = s, e;
                            case 14:
                                return e.subtype = "pitchBend", e.value = s + (t.readInt8() << 7), e;
                            default:
                                throw "Unrecognised MIDI event type: " + u
                        }
                    }(l);
                    h[f].push(p)
                }
            }
            return {
                header: c,
                tracks: h
            }
        }

        function r(t) {
            function e(e) {
                var n = t.substr(s, e);
                return s += e, n
            }

            function n() {
                var e = (t.charCodeAt(s) << 24) + (t.charCodeAt(s + 1) << 16) + (t.charCodeAt(s + 2) << 8) + t.charCodeAt(s + 3);
                return s += 4, e
            }

            function r() {
                var e = (t.charCodeAt(s) << 8) + t.charCodeAt(s + 1);
                return s += 2, e
            }

            function i(e) {
                var n = t.charCodeAt(s);
                return e && n > 127 && (n -= 256), s += 1, n
            }

            function a() {
                return s >= t.length
            }

            function o() {
                for (var t = 0;;) {
                    var e = i();
                    if (!(128 & e)) return t + e;
                    t += 127 & e, t <<= 7
                }
            }
            var s = 0;
            return {
                eof: a,
                read: e,
                readInt32: n,
                readInt16: r,
                readInt8: i,
                readVarInt: o
            }
        }
        t.exports = function (t) {
            return n(t)
        }
    }, function (t, e) {
        t.exports = function (t) {
            return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function () {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function () {
                    return t.i
                }
            }), t.webpackPolyfill = 1), t
        }
    }])
});