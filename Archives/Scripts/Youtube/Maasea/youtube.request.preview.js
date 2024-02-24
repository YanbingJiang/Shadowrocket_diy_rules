// Author: Maasea Build: 2024/2/20 09:54:19
(() => {
  (function (t) {
    function e() {}
    function n() {}
    var s = String.fromCharCode,
      r = {}.toString,
      o = r.call(t.SharedArrayBuffer),
      i = r(),
      a = t.Uint8Array,
      c = a || Array,
      u = a ? ArrayBuffer : c,
      l =
        u.isView ||
        function (h) {
          return h && "length" in h;
        },
      m = r.call(u.prototype);
    u = n.prototype;
    var p = t.TextEncoder,
      d = new (a ? Uint16Array : c)(32);
    (e.prototype.decode = function (h) {
      if (!l(h)) {
        var E = r.call(h);
        if (E !== m && E !== o && E !== i)
          throw TypeError(
            "Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'",
          );
        h = a ? new c(h) : h || [];
      }
      for (
        var N = (E = ""),
          g = 0,
          b = h.length | 0,
          G = (b - 32) | 0,
          k,
          w,
          F = 0,
          M = 0,
          O,
          S = 0,
          U = -1;
        g < b;

      ) {
        for (
          k = g <= G ? 32 : (b - g) | 0;
          S < k;
          g = (g + 1) | 0, S = (S + 1) | 0
        ) {
          switch (((w = h[g] & 255), w >> 4)) {
            case 15:
              if (((O = h[(g = (g + 1) | 0)] & 255), O >> 6 !== 2 || 247 < w)) {
                g = (g - 1) | 0;
                break;
              }
              (F = ((w & 7) << 6) | (O & 63)), (M = 5), (w = 256);
            case 14:
              (O = h[(g = (g + 1) | 0)] & 255),
                (F <<= 6),
                (F |= ((w & 15) << 6) | (O & 63)),
                (M = O >> 6 === 2 ? (M + 4) | 0 : 24),
                (w = (w + 256) & 768);
            case 13:
            case 12:
              (O = h[(g = (g + 1) | 0)] & 255),
                (F <<= 6),
                (F |= ((w & 31) << 6) | (O & 63)),
                (M = (M + 7) | 0),
                g < b && O >> 6 === 2 && F >> M && 1114112 > F
                  ? ((w = F),
                    (F = (F - 65536) | 0),
                    0 <= F &&
                      ((U = ((F >> 10) + 55296) | 0),
                      (w = ((F & 1023) + 56320) | 0),
                      31 > S
                        ? ((d[S] = U), (S = (S + 1) | 0), (U = -1))
                        : ((O = U), (U = w), (w = O))))
                  : ((w >>= 8), (g = (g - w - 1) | 0), (w = 65533)),
                (F = M = 0),
                (k = g <= G ? 32 : (b - g) | 0);
            default:
              d[S] = w;
              continue;
            case 11:
            case 10:
            case 9:
            case 8:
          }
          d[S] = 65533;
        }
        if (
          ((N += s(
            d[0],
            d[1],
            d[2],
            d[3],
            d[4],
            d[5],
            d[6],
            d[7],
            d[8],
            d[9],
            d[10],
            d[11],
            d[12],
            d[13],
            d[14],
            d[15],
            d[16],
            d[17],
            d[18],
            d[19],
            d[20],
            d[21],
            d[22],
            d[23],
            d[24],
            d[25],
            d[26],
            d[27],
            d[28],
            d[29],
            d[30],
            d[31],
          )),
          32 > S && (N = N.slice(0, (S - 32) | 0)),
          g < b)
        ) {
          if (((d[0] = U), (S = ~U >>> 31), (U = -1), N.length < E.length))
            continue;
        } else U !== -1 && (N += s(U));
        (E += N), (N = "");
      }
      return E;
    }),
      (u.encode = function (h) {
        h = h === void 0 ? "" : "" + h;
        var E = h.length | 0,
          N = new c(((E << 1) + 8) | 0),
          g,
          b = 0,
          G = !a;
        for (g = 0; g < E; g = (g + 1) | 0, b = (b + 1) | 0) {
          var k = h.charCodeAt(g) | 0;
          if (127 >= k) N[b] = k;
          else {
            if (2047 >= k) N[b] = 192 | (k >> 6);
            else {
              e: {
                if (55296 <= k)
                  if (56319 >= k) {
                    var w = h.charCodeAt((g = (g + 1) | 0)) | 0;
                    if (56320 <= w && 57343 >= w) {
                      if (((k = ((k << 10) + w - 56613888) | 0), 65535 < k)) {
                        (N[b] = 240 | (k >> 18)),
                          (N[(b = (b + 1) | 0)] = 128 | ((k >> 12) & 63)),
                          (N[(b = (b + 1) | 0)] = 128 | ((k >> 6) & 63)),
                          (N[(b = (b + 1) | 0)] = 128 | (k & 63));
                        continue;
                      }
                      break e;
                    }
                    k = 65533;
                  } else 57343 >= k && (k = 65533);
                !G &&
                  g << 1 < b &&
                  g << 1 < ((b - 7) | 0) &&
                  ((G = !0), (w = new c(3 * E)), w.set(N), (N = w));
              }
              (N[b] = 224 | (k >> 12)),
                (N[(b = (b + 1) | 0)] = 128 | ((k >> 6) & 63));
            }
            N[(b = (b + 1) | 0)] = 128 | (k & 63);
          }
        }
        return a ? N.subarray(0, b) : N.slice(0, b);
      }),
      p || ((t.TextDecoder = e), (t.TextEncoder = n));
  })(globalThis);
  function T(t, e) {
    if (!t) throw new Error(e);
  }
  var it = 34028234663852886e22,
    at = -34028234663852886e22,
    ct = 4294967295,
    ft = 2147483647,
    ut = -2147483648;
  function C(t) {
    if (typeof t != "number") throw new Error("invalid int 32: " + typeof t);
    if (!Number.isInteger(t) || t > ft || t < ut)
      throw new Error("invalid int 32: " + t);
  }
  function _(t) {
    if (typeof t != "number") throw new Error("invalid uint 32: " + typeof t);
    if (!Number.isInteger(t) || t > ct || t < 0)
      throw new Error("invalid uint 32: " + t);
  }
  function K(t) {
    if (typeof t != "number") throw new Error("invalid float 32: " + typeof t);
    if (Number.isFinite(t) && (t > it || t < at))
      throw new Error("invalid float 32: " + t);
  }
  var Ie = Symbol("@bufbuild/protobuf/enum-type");
  function Fe(t) {
    let e = t[Ie];
    return T(e, "missing enum type on enum object"), e;
  }
  function de(t, e, n, s) {
    t[Ie] = me(
      e,
      n.map((r) => ({ no: r.no, name: r.name, localName: t[r.no] })),
      s,
    );
  }
  function me(t, e, n) {
    let s = Object.create(null),
      r = Object.create(null),
      o = [];
    for (let i of e) {
      let a = Be(i);
      o.push(a), (s[i.name] = a), (r[i.no] = a);
    }
    return {
      typeName: t,
      values: o,
      findName(i) {
        return s[i];
      },
      findNumber(i) {
        return r[i];
      },
    };
  }
  function Ee(t, e, n) {
    let s = {};
    for (let r of e) {
      let o = Be(r);
      (s[o.localName] = o.no), (s[o.no] = o.localName);
    }
    return de(s, t, e, n), s;
  }
  function Be(t) {
    return "localName" in t
      ? t
      : Object.assign(Object.assign({}, t), { localName: t.name });
  }
  var I = class {
    equals(e) {
      return this.getType().runtime.util.equals(this.getType(), this, e);
    }
    clone() {
      return this.getType().runtime.util.clone(this);
    }
    fromBinary(e, n) {
      let s = this.getType(),
        r = s.runtime.bin,
        o = r.makeReadOptions(n);
      return r.readMessage(this, o.readerFactory(e), e.byteLength, o), this;
    }
    fromJson(e, n) {
      let s = this.getType(),
        r = s.runtime.json,
        o = r.makeReadOptions(n);
      return r.readMessage(s, e, o, this), this;
    }
    fromJsonString(e, n) {
      let s;
      try {
        s = JSON.parse(e);
      } catch (r) {
        throw new Error(
          `cannot decode ${this.getType().typeName} from JSON: ${
            r instanceof Error ? r.message : String(r)
          }`,
        );
      }
      return this.fromJson(s, n);
    }
    toBinary(e) {
      let n = this.getType(),
        s = n.runtime.bin,
        r = s.makeWriteOptions(e),
        o = r.writerFactory();
      return s.writeMessage(this, o, r), o.finish();
    }
    toJson(e) {
      let n = this.getType(),
        s = n.runtime.json,
        r = s.makeWriteOptions(e);
      return s.writeMessage(this, r);
    }
    toJsonString(e) {
      var n;
      let s = this.toJson(e);
      return JSON.stringify(
        s,
        null,
        (n = e?.prettySpaces) !== null && n !== void 0 ? n : 0,
      );
    }
    toJSON() {
      return this.toJson({ emitDefaultValues: !0 });
    }
    getType() {
      return Object.getPrototypeOf(this).constructor;
    }
  };
  function Se(t, e, n, s) {
    var r;
    let o =
        (r = s?.localName) !== null && r !== void 0
          ? r
          : e.substring(e.lastIndexOf(".") + 1),
      i = {
        [o]: function (a) {
          t.util.initFields(this), t.util.initPartial(a, this);
        },
      }[o];
    return (
      Object.setPrototypeOf(i.prototype, new I()),
      Object.assign(i, {
        runtime: t,
        typeName: e,
        fields: t.util.newFieldList(n),
        fromBinary(a, c) {
          return new i().fromBinary(a, c);
        },
        fromJson(a, c) {
          return new i().fromJson(a, c);
        },
        fromJsonString(a, c) {
          return new i().fromJsonString(a, c);
        },
        equals(a, c) {
          return t.util.equals(i, a, c);
        },
      }),
      i
    );
  }
  var f;
  (function (t) {
    (t[(t.DOUBLE = 1)] = "DOUBLE"),
      (t[(t.FLOAT = 2)] = "FLOAT"),
      (t[(t.INT64 = 3)] = "INT64"),
      (t[(t.UINT64 = 4)] = "UINT64"),
      (t[(t.INT32 = 5)] = "INT32"),
      (t[(t.FIXED64 = 6)] = "FIXED64"),
      (t[(t.FIXED32 = 7)] = "FIXED32"),
      (t[(t.BOOL = 8)] = "BOOL"),
      (t[(t.STRING = 9)] = "STRING"),
      (t[(t.BYTES = 12)] = "BYTES"),
      (t[(t.UINT32 = 13)] = "UINT32"),
      (t[(t.SFIXED32 = 15)] = "SFIXED32"),
      (t[(t.SFIXED64 = 16)] = "SFIXED64"),
      (t[(t.SINT32 = 17)] = "SINT32"),
      (t[(t.SINT64 = 18)] = "SINT64");
  })(f || (f = {}));
  var A;
  (function (t) {
    (t[(t.BIGINT = 0)] = "BIGINT"), (t[(t.STRING = 1)] = "STRING");
  })(A || (A = {}));
  function Ue() {
    let t = 0,
      e = 0;
    for (let s = 0; s < 28; s += 7) {
      let r = this.buf[this.pos++];
      if (((t |= (r & 127) << s), !(r & 128)))
        return this.assertBounds(), [t, e];
    }
    let n = this.buf[this.pos++];
    if (((t |= (n & 15) << 28), (e = (n & 112) >> 4), !(n & 128)))
      return this.assertBounds(), [t, e];
    for (let s = 3; s <= 31; s += 7) {
      let r = this.buf[this.pos++];
      if (((e |= (r & 127) << s), !(r & 128)))
        return this.assertBounds(), [t, e];
    }
    throw new Error("invalid varint");
  }
  function Q(t, e, n) {
    for (let o = 0; o < 28; o = o + 7) {
      let i = t >>> o,
        a = !(!(i >>> 7) && e == 0),
        c = (a ? i | 128 : i) & 255;
      if ((n.push(c), !a)) return;
    }
    let s = ((t >>> 28) & 15) | ((e & 7) << 4),
      r = !!(e >> 3);
    if ((n.push((r ? s | 128 : s) & 255), !!r)) {
      for (let o = 3; o < 31; o = o + 7) {
        let i = e >>> o,
          a = !!(i >>> 7),
          c = (a ? i | 128 : i) & 255;
        if ((n.push(c), !a)) return;
      }
      n.push((e >>> 31) & 1);
    }
  }
  var z = 4294967296;
  function pe(t) {
    let e = t[0] === "-";
    e && (t = t.slice(1));
    let n = 1e6,
      s = 0,
      r = 0;
    function o(i, a) {
      let c = Number(t.slice(i, a));
      (r *= n),
        (s = s * n + c),
        s >= z && ((r = r + ((s / z) | 0)), (s = s % z));
    }
    return o(-24, -18), o(-18, -12), o(-12, -6), o(-6), e ? De(s, r) : ge(s, r);
  }
  function Ae(t, e) {
    let n = ge(t, e),
      s = n.hi & 2147483648;
    s && (n = De(n.lo, n.hi));
    let r = he(n.lo, n.hi);
    return s ? "-" + r : r;
  }
  function he(t, e) {
    if ((({ lo: t, hi: e } = lt(t, e)), e <= 2097151)) return String(z * e + t);
    let n = t & 16777215,
      s = ((t >>> 24) | (e << 8)) & 16777215,
      r = (e >> 16) & 65535,
      o = n + s * 6777216 + r * 6710656,
      i = s + r * 8147497,
      a = r * 2,
      c = 1e7;
    return (
      o >= c && ((i += Math.floor(o / c)), (o %= c)),
      i >= c && ((a += Math.floor(i / c)), (i %= c)),
      a.toString() + Oe(i) + Oe(o)
    );
  }
  function lt(t, e) {
    return { lo: t >>> 0, hi: e >>> 0 };
  }
  function ge(t, e) {
    return { lo: t | 0, hi: e | 0 };
  }
  function De(t, e) {
    return (e = ~e), t ? (t = ~t + 1) : (e += 1), ge(t, e);
  }
  var Oe = (t) => {
    let e = String(t);
    return "0000000".slice(e.length) + e;
  };
  function ye(t, e) {
    if (t >= 0) {
      for (; t > 127; ) e.push((t & 127) | 128), (t = t >>> 7);
      e.push(t);
    } else {
      for (let n = 0; n < 9; n++) e.push((t & 127) | 128), (t = t >> 7);
      e.push(1);
    }
  }
  function $e() {
    let t = this.buf[this.pos++],
      e = t & 127;
    if (!(t & 128)) return this.assertBounds(), e;
    if (((t = this.buf[this.pos++]), (e |= (t & 127) << 7), !(t & 128)))
      return this.assertBounds(), e;
    if (((t = this.buf[this.pos++]), (e |= (t & 127) << 14), !(t & 128)))
      return this.assertBounds(), e;
    if (((t = this.buf[this.pos++]), (e |= (t & 127) << 21), !(t & 128)))
      return this.assertBounds(), e;
    (t = this.buf[this.pos++]), (e |= (t & 15) << 28);
    for (let n = 5; t & 128 && n < 10; n++) t = this.buf[this.pos++];
    if (t & 128) throw new Error("invalid varint");
    return this.assertBounds(), e >>> 0;
  }
  function dt() {
    let t = new DataView(new ArrayBuffer(8));
    if (
      typeof BigInt == "function" &&
      typeof t.getBigInt64 == "function" &&
      typeof t.getBigUint64 == "function" &&
      typeof t.setBigInt64 == "function" &&
      typeof t.setBigUint64 == "function" &&
      (typeof process != "object" ||
        typeof process.env != "object" ||
        process.env.BUF_BIGINT_DISABLE !== "1")
    ) {
      let r = BigInt("-9223372036854775808"),
        o = BigInt("9223372036854775807"),
        i = BigInt("0"),
        a = BigInt("18446744073709551615");
      return {
        zero: BigInt(0),
        supported: !0,
        parse(c) {
          let u = typeof c == "bigint" ? c : BigInt(c);
          if (u > o || u < r) throw new Error(`int64 invalid: ${c}`);
          return u;
        },
        uParse(c) {
          let u = typeof c == "bigint" ? c : BigInt(c);
          if (u > a || u < i) throw new Error(`uint64 invalid: ${c}`);
          return u;
        },
        enc(c) {
          return (
            t.setBigInt64(0, this.parse(c), !0),
            { lo: t.getInt32(0, !0), hi: t.getInt32(4, !0) }
          );
        },
        uEnc(c) {
          return (
            t.setBigInt64(0, this.uParse(c), !0),
            { lo: t.getInt32(0, !0), hi: t.getInt32(4, !0) }
          );
        },
        dec(c, u) {
          return (
            t.setInt32(0, c, !0), t.setInt32(4, u, !0), t.getBigInt64(0, !0)
          );
        },
        uDec(c, u) {
          return (
            t.setInt32(0, c, !0), t.setInt32(4, u, !0), t.getBigUint64(0, !0)
          );
        },
      };
    }
    let n = (r) => T(/^-?[0-9]+$/.test(r), `int64 invalid: ${r}`),
      s = (r) => T(/^[0-9]+$/.test(r), `uint64 invalid: ${r}`);
    return {
      zero: "0",
      supported: !1,
      parse(r) {
        return typeof r != "string" && (r = r.toString()), n(r), r;
      },
      uParse(r) {
        return typeof r != "string" && (r = r.toString()), s(r), r;
      },
      enc(r) {
        return typeof r != "string" && (r = r.toString()), n(r), pe(r);
      },
      uEnc(r) {
        return typeof r != "string" && (r = r.toString()), s(r), pe(r);
      },
      dec(r, o) {
        return Ae(r, o);
      },
      uDec(r, o) {
        return he(r, o);
      },
    };
  }
  var x = dt();
  var y;
  (function (t) {
    (t[(t.Varint = 0)] = "Varint"),
      (t[(t.Bit64 = 1)] = "Bit64"),
      (t[(t.LengthDelimited = 2)] = "LengthDelimited"),
      (t[(t.StartGroup = 3)] = "StartGroup"),
      (t[(t.EndGroup = 4)] = "EndGroup"),
      (t[(t.Bit32 = 5)] = "Bit32");
  })(y || (y = {}));
  var H = class {
      constructor(e) {
        (this.stack = []),
          (this.textEncoder = e ?? new TextEncoder()),
          (this.chunks = []),
          (this.buf = []);
      }
      finish() {
        this.chunks.push(new Uint8Array(this.buf));
        let e = 0;
        for (let r = 0; r < this.chunks.length; r++) e += this.chunks[r].length;
        let n = new Uint8Array(e),
          s = 0;
        for (let r = 0; r < this.chunks.length; r++)
          n.set(this.chunks[r], s), (s += this.chunks[r].length);
        return (this.chunks = []), n;
      }
      fork() {
        return (
          this.stack.push({ chunks: this.chunks, buf: this.buf }),
          (this.chunks = []),
          (this.buf = []),
          this
        );
      }
      join() {
        let e = this.finish(),
          n = this.stack.pop();
        if (!n) throw new Error("invalid state, fork stack empty");
        return (
          (this.chunks = n.chunks),
          (this.buf = n.buf),
          this.uint32(e.byteLength),
          this.raw(e)
        );
      }
      tag(e, n) {
        return this.uint32(((e << 3) | n) >>> 0);
      }
      raw(e) {
        return (
          this.buf.length &&
            (this.chunks.push(new Uint8Array(this.buf)), (this.buf = [])),
          this.chunks.push(e),
          this
        );
      }
      uint32(e) {
        for (_(e); e > 127; ) this.buf.push((e & 127) | 128), (e = e >>> 7);
        return this.buf.push(e), this;
      }
      int32(e) {
        return C(e), ye(e, this.buf), this;
      }
      bool(e) {
        return this.buf.push(e ? 1 : 0), this;
      }
      bytes(e) {
        return this.uint32(e.byteLength), this.raw(e);
      }
      string(e) {
        let n = this.textEncoder.encode(e);
        return this.uint32(n.byteLength), this.raw(n);
      }
      float(e) {
        K(e);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setFloat32(0, e, !0), this.raw(n);
      }
      double(e) {
        let n = new Uint8Array(8);
        return new DataView(n.buffer).setFloat64(0, e, !0), this.raw(n);
      }
      fixed32(e) {
        _(e);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setUint32(0, e, !0), this.raw(n);
      }
      sfixed32(e) {
        C(e);
        let n = new Uint8Array(4);
        return new DataView(n.buffer).setInt32(0, e, !0), this.raw(n);
      }
      sint32(e) {
        return C(e), (e = ((e << 1) ^ (e >> 31)) >>> 0), ye(e, this.buf), this;
      }
      sfixed64(e) {
        let n = new Uint8Array(8),
          s = new DataView(n.buffer),
          r = x.enc(e);
        return s.setInt32(0, r.lo, !0), s.setInt32(4, r.hi, !0), this.raw(n);
      }
      fixed64(e) {
        let n = new Uint8Array(8),
          s = new DataView(n.buffer),
          r = x.uEnc(e);
        return s.setInt32(0, r.lo, !0), s.setInt32(4, r.hi, !0), this.raw(n);
      }
      int64(e) {
        let n = x.enc(e);
        return Q(n.lo, n.hi, this.buf), this;
      }
      sint64(e) {
        let n = x.enc(e),
          s = n.hi >> 31,
          r = (n.lo << 1) ^ s,
          o = ((n.hi << 1) | (n.lo >>> 31)) ^ s;
        return Q(r, o, this.buf), this;
      }
      uint64(e) {
        let n = x.uEnc(e);
        return Q(n.lo, n.hi, this.buf), this;
      }
    },
    Z = class {
      constructor(e, n) {
        (this.varint64 = Ue),
          (this.uint32 = $e),
          (this.buf = e),
          (this.len = e.length),
          (this.pos = 0),
          (this.view = new DataView(e.buffer, e.byteOffset, e.byteLength)),
          (this.textDecoder = n ?? new TextDecoder());
      }
      tag() {
        let e = this.uint32(),
          n = e >>> 3,
          s = e & 7;
        if (n <= 0 || s < 0 || s > 5)
          throw new Error("illegal tag: field no " + n + " wire type " + s);
        return [n, s];
      }
      skip(e) {
        let n = this.pos;
        switch (e) {
          case y.Varint:
            for (; this.buf[this.pos++] & 128; );
            break;
          case y.Bit64:
            this.pos += 4;
          case y.Bit32:
            this.pos += 4;
            break;
          case y.LengthDelimited:
            let s = this.uint32();
            this.pos += s;
            break;
          case y.StartGroup:
            let r;
            for (; (r = this.tag()[1]) !== y.EndGroup; ) this.skip(r);
            break;
          default:
            throw new Error("cant skip wire type " + e);
        }
        return this.assertBounds(), this.buf.subarray(n, this.pos);
      }
      assertBounds() {
        if (this.pos > this.len) throw new RangeError("premature EOF");
      }
      int32() {
        return this.uint32() | 0;
      }
      sint32() {
        let e = this.uint32();
        return (e >>> 1) ^ -(e & 1);
      }
      int64() {
        return x.dec(...this.varint64());
      }
      uint64() {
        return x.uDec(...this.varint64());
      }
      sint64() {
        let [e, n] = this.varint64(),
          s = -(e & 1);
        return (
          (e = ((e >>> 1) | ((n & 1) << 31)) ^ s),
          (n = (n >>> 1) ^ s),
          x.dec(e, n)
        );
      }
      bool() {
        let [e, n] = this.varint64();
        return e !== 0 || n !== 0;
      }
      fixed32() {
        return this.view.getUint32((this.pos += 4) - 4, !0);
      }
      sfixed32() {
        return this.view.getInt32((this.pos += 4) - 4, !0);
      }
      fixed64() {
        return x.uDec(this.sfixed32(), this.sfixed32());
      }
      sfixed64() {
        return x.dec(this.sfixed32(), this.sfixed32());
      }
      float() {
        return this.view.getFloat32((this.pos += 4) - 4, !0);
      }
      double() {
        return this.view.getFloat64((this.pos += 8) - 8, !0);
      }
      bytes() {
        let e = this.uint32(),
          n = this.pos;
        return (
          (this.pos += e), this.assertBounds(), this.buf.subarray(n, n + e)
        );
      }
      string() {
        return this.textDecoder.decode(this.bytes());
      }
    };
  function $(t, e, n) {
    if (e === n) return !0;
    if (t == f.BYTES) {
      if (
        !(e instanceof Uint8Array) ||
        !(n instanceof Uint8Array) ||
        e.length !== n.length
      )
        return !1;
      for (let s = 0; s < e.length; s++) if (e[s] !== n[s]) return !1;
      return !0;
    }
    switch (t) {
      case f.UINT64:
      case f.FIXED64:
      case f.INT64:
      case f.SFIXED64:
      case f.SINT64:
        return e == n;
    }
    return !1;
  }
  function J(t, e) {
    switch (t) {
      case f.BOOL:
        return !1;
      case f.UINT64:
      case f.FIXED64:
      case f.INT64:
      case f.SFIXED64:
      case f.SINT64:
        return e == 0 ? x.zero : "0";
      case f.DOUBLE:
      case f.FLOAT:
        return 0;
      case f.BYTES:
        return new Uint8Array(0);
      case f.STRING:
        return "";
      default:
        return 0;
    }
  }
  function be(t, e) {
    let n = e === void 0,
      s = y.Varint,
      r = e === 0;
    switch (t) {
      case f.STRING:
        (r = n || !e.length), (s = y.LengthDelimited);
        break;
      case f.BOOL:
        r = e === !1;
        break;
      case f.DOUBLE:
        s = y.Bit64;
        break;
      case f.FLOAT:
        s = y.Bit32;
        break;
      case f.INT64:
        r = n || e == 0;
        break;
      case f.UINT64:
        r = n || e == 0;
        break;
      case f.FIXED64:
        (r = n || e == 0), (s = y.Bit64);
        break;
      case f.BYTES:
        (r = n || !e.byteLength), (s = y.LengthDelimited);
        break;
      case f.FIXED32:
        s = y.Bit32;
        break;
      case f.SFIXED32:
        s = y.Bit32;
        break;
      case f.SFIXED64:
        (r = n || e == 0), (s = y.Bit64);
        break;
      case f.SINT64:
        r = n || e == 0;
        break;
    }
    let o = f[t].toLowerCase();
    return [s, o, n || r];
  }
  function ve(t, e, n, s) {
    let r;
    return {
      typeName: e,
      extendee: n,
      get field() {
        if (!r) {
          let o = typeof s == "function" ? s() : s;
          (o.name = e.split(".").pop()),
            (o.jsonName = `[${e}]`),
            (r = t.util.newFieldList([o]).list()[0]);
        }
        return r;
      },
      runtime: t,
    };
  }
  function ee(t) {
    let e = t.field.localName,
      n = Object.create(null);
    return (n[e] = mt(t)), [n, () => n[e]];
  }
  function mt(t) {
    let e = t.field;
    if (e.repeated) return [];
    if (e.default !== void 0) return e.default;
    switch (e.kind) {
      case "enum":
        return e.T.values[0].no;
      case "scalar":
        return J(e.T, e.L);
      case "message":
        let n = e.T,
          s = new n();
        return n.fieldWrapper ? n.fieldWrapper.unwrapField(s) : s;
      case "map":
        throw "map fields are not allowed to be extensions";
    }
  }
  function Le(t, e) {
    if (!e.repeated && (e.kind == "enum" || e.kind == "scalar")) {
      for (let n = t.length - 1; n >= 0; --n)
        if (t[n].no == e.no) return [t[n]];
      return [];
    }
    return t.filter((n) => n.no === e.no);
  }
  function Re(t, e, n, s) {
    return {
      syntax: t,
      json: e,
      bin: n,
      util: s,
      makeMessageType(r, o, i) {
        return Se(this, r, o, i);
      },
      makeEnum: Ee,
      makeEnumType: me,
      getEnumType: Fe,
      makeExtension(r, o, i) {
        return ve(this, r, o, i);
      },
    };
  }
  function te(t, e) {
    return e instanceof I || !t.fieldWrapper ? e : t.fieldWrapper.wrapField(e);
  }
  var gn = {
    "google.protobuf.DoubleValue": f.DOUBLE,
    "google.protobuf.FloatValue": f.FLOAT,
    "google.protobuf.Int64Value": f.INT64,
    "google.protobuf.UInt64Value": f.UINT64,
    "google.protobuf.Int32Value": f.INT32,
    "google.protobuf.UInt32Value": f.UINT32,
    "google.protobuf.BoolValue": f.BOOL,
    "google.protobuf.StringValue": f.STRING,
    "google.protobuf.BytesValue": f.BYTES,
  };
  var P = Symbol("@bufbuild/protobuf/unknown-fields"),
    Me = { readUnknownFields: !0, readerFactory: (t) => new Z(t) },
    Je = { writeUnknownFields: !0, writerFactory: () => new H() };
  function pt(t) {
    return t ? Object.assign(Object.assign({}, Me), t) : Me;
  }
  function ht(t) {
    return t ? Object.assign(Object.assign({}, Je), t) : Je;
  }
  function Pe() {
    return {
      makeReadOptions: pt,
      makeWriteOptions: ht,
      listUnknownFields(t) {
        var e;
        return (e = t[P]) !== null && e !== void 0 ? e : [];
      },
      discardUnknownFields(t) {
        delete t[P];
      },
      writeUnknownFields(t, e) {
        let s = t[P];
        if (s) for (let r of s) e.tag(r.no, r.wireType).raw(r.data);
      },
      onUnknownField(t, e, n, s) {
        let r = t;
        Array.isArray(r[P]) || (r[P] = []),
          r[P].push({ no: e, wireType: n, data: s });
      },
      readMessage(t, e, n, s, r) {
        let o = t.getType(),
          i = r ? e.len : e.pos + n,
          a,
          c;
        for (; e.pos < i && (([a, c] = e.tag()), c != y.EndGroup); ) {
          let u = o.fields.find(a);
          if (!u) {
            let l = e.skip(c);
            s.readUnknownFields && this.onUnknownField(t, a, c, l);
            continue;
          }
          Ce(t, e, u, c, s);
        }
        if (r && (c != y.EndGroup || a !== n))
          throw new Error("invalid end group tag");
      },
      readField: Ce,
    };
  }
  function Ce(t, e, n, s, r) {
    let { repeated: o, localName: i } = n;
    switch (
      (n.oneof &&
        ((t = t[n.oneof.localName]),
        t.case != i && delete t.value,
        (t.case = i),
        (i = "value")),
      n.kind)
    ) {
      case "scalar":
      case "enum":
        let a = n.kind == "enum" ? f.INT32 : n.T,
          c = re;
        if ((n.kind == "scalar" && n.L > 0 && (c = yt), o)) {
          let p = t[i];
          if (s == y.LengthDelimited && a != f.STRING && a != f.BYTES) {
            let h = e.uint32() + e.pos;
            for (; e.pos < h; ) p.push(c(e, a));
          } else p.push(c(e, a));
        } else t[i] = c(e, a);
        break;
      case "message":
        let u = n.T;
        o
          ? t[i].push(ne(e, new u(), r, n))
          : t[i] instanceof I
          ? ne(e, t[i], r, n)
          : ((t[i] = ne(e, new u(), r, n)),
            u.fieldWrapper &&
              !n.oneof &&
              !n.repeated &&
              (t[i] = u.fieldWrapper.unwrapField(t[i])));
        break;
      case "map":
        let [l, m] = gt(n, e, r);
        t[i][l] = m;
        break;
    }
  }
  function ne(t, e, n, s) {
    let r = e.getType().runtime.bin,
      o = s?.delimited;
    return r.readMessage(e, t, o ? s?.no : t.uint32(), n, o), e;
  }
  function gt(t, e, n) {
    let s = e.uint32(),
      r = e.pos + s,
      o,
      i;
    for (; e.pos < r; ) {
      let [a] = e.tag();
      switch (a) {
        case 1:
          o = re(e, t.K);
          break;
        case 2:
          switch (t.V.kind) {
            case "scalar":
              i = re(e, t.V.T);
              break;
            case "enum":
              i = e.int32();
              break;
            case "message":
              i = ne(e, new t.V.T(), n, void 0);
              break;
          }
          break;
      }
    }
    if (o === void 0) {
      let a = J(t.K, A.BIGINT);
      o = t.K == f.BOOL ? a.toString() : a;
    }
    if (
      (typeof o != "string" && typeof o != "number" && (o = o.toString()),
      i === void 0)
    )
      switch (t.V.kind) {
        case "scalar":
          i = J(t.V.T, A.BIGINT);
          break;
        case "enum":
          i = 0;
          break;
        case "message":
          i = new t.V.T();
          break;
      }
    return [o, i];
  }
  function yt(t, e) {
    let n = re(t, e);
    return typeof n == "bigint" ? n.toString() : n;
  }
  function re(t, e) {
    switch (e) {
      case f.STRING:
        return t.string();
      case f.BOOL:
        return t.bool();
      case f.DOUBLE:
        return t.double();
      case f.FLOAT:
        return t.float();
      case f.INT32:
        return t.int32();
      case f.INT64:
        return t.int64();
      case f.UINT64:
        return t.uint64();
      case f.FIXED64:
        return t.fixed64();
      case f.BYTES:
        return t.bytes();
      case f.FIXED32:
        return t.fixed32();
      case f.SFIXED32:
        return t.sfixed32();
      case f.SFIXED64:
        return t.sfixed64();
      case f.SINT64:
        return t.sint64();
      case f.UINT32:
        return t.uint32();
      case f.SINT32:
        return t.sint32();
    }
  }
  function Ve(t, e, n, s, r) {
    t.tag(n.no, y.LengthDelimited), t.fork();
    let o = s;
    switch (n.K) {
      case f.INT32:
      case f.FIXED32:
      case f.UINT32:
      case f.SFIXED32:
      case f.SINT32:
        o = Number.parseInt(s);
        break;
      case f.BOOL:
        T(s == "true" || s == "false"), (o = s == "true");
        break;
    }
    switch ((V(t, n.K, 1, o, !0), n.V.kind)) {
      case "scalar":
        V(t, n.V.T, 2, r, !0);
        break;
      case "enum":
        V(t, f.INT32, 2, r, !0);
        break;
      case "message":
        t.tag(2, y.LengthDelimited).bytes(r.toBinary(e));
        break;
    }
    t.join();
  }
  function we(t, e, n, s) {
    let r = te(n.T, s);
    n?.delimited
      ? t.tag(n.no, y.StartGroup).raw(r.toBinary(e)).tag(n.no, y.EndGroup)
      : t.tag(n.no, y.LengthDelimited).bytes(r.toBinary(e));
  }
  function V(t, e, n, s, r) {
    let [o, i, a] = be(e, s);
    (!a || r) && t.tag(n, o)[i](s);
  }
  function qe(t, e, n, s) {
    if (!s.length) return;
    t.tag(n, y.LengthDelimited).fork();
    let [, r] = be(e);
    for (let o = 0; o < s.length; o++) t[r](s[o]);
    t.join();
  }
  function Ge() {
    return Object.assign(Object.assign({}, Pe()), {
      writeField: Xe,
      writeMessage(t, e, n) {
        let s = t.getType();
        for (let r of s.fields.byNumber()) {
          let o,
            i = r.localName;
          if (r.oneof) {
            let a = t[r.oneof.localName];
            if (a.case !== i) continue;
            o = a.value;
          } else o = t[i];
          Xe(r, o, e, n);
        }
        return n.writeUnknownFields && this.writeUnknownFields(t, e), e;
      },
    });
  }
  function Xe(t, e, n, s) {
    let r = t.repeated;
    switch (t.kind) {
      case "scalar":
      case "enum":
        let o = t.kind == "enum" ? f.INT32 : t.T;
        if (r)
          if (t.packed) qe(n, o, t.no, e);
          else for (let i of e) V(n, o, t.no, i, !0);
        else e !== void 0 && V(n, o, t.no, e, !!t.oneof || t.opt);
        break;
      case "message":
        if (r) for (let i of e) we(n, s, t, i);
        else e !== void 0 && we(n, s, t, e);
        break;
      case "map":
        for (let [i, a] of Object.entries(e)) Ve(n, s, t, i, a);
        break;
    }
  }
  var v =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(
        "",
      ),
    se = [];
  for (let t = 0; t < v.length; t++) se[v[t].charCodeAt(0)] = t;
  se["-".charCodeAt(0)] = v.indexOf("+");
  se["_".charCodeAt(0)] = v.indexOf("/");
  var ke = {
    dec(t) {
      let e = (t.length * 3) / 4;
      t[t.length - 2] == "=" ? (e -= 2) : t[t.length - 1] == "=" && (e -= 1);
      let n = new Uint8Array(e),
        s = 0,
        r = 0,
        o,
        i = 0;
      for (let a = 0; a < t.length; a++) {
        if (((o = se[t.charCodeAt(a)]), o === void 0))
          switch (t[a]) {
            case "=":
              r = 0;
            case `
`:
            case "\r":
            case "	":
            case " ":
              continue;
            default:
              throw Error("invalid base64 string.");
          }
        switch (r) {
          case 0:
            (i = o), (r = 1);
            break;
          case 1:
            (n[s++] = (i << 2) | ((o & 48) >> 4)), (i = o), (r = 2);
            break;
          case 2:
            (n[s++] = ((i & 15) << 4) | ((o & 60) >> 2)), (i = o), (r = 3);
            break;
          case 3:
            (n[s++] = ((i & 3) << 6) | o), (r = 0);
            break;
        }
      }
      if (r == 1) throw Error("invalid base64 string.");
      return n.subarray(0, s);
    },
    enc(t) {
      let e = "",
        n = 0,
        s,
        r = 0;
      for (let o = 0; o < t.length; o++)
        switch (((s = t[o]), n)) {
          case 0:
            (e += v[s >> 2]), (r = (s & 3) << 4), (n = 1);
            break;
          case 1:
            (e += v[r | (s >> 4)]), (r = (s & 15) << 2), (n = 2);
            break;
          case 2:
            (e += v[r | (s >> 6)]), (e += v[s & 63]), (n = 0);
            break;
        }
      return n && ((e += v[r]), (e += "="), n == 1 && (e += "=")), e;
    },
  };
  function _e(t, e, n) {
    je(e, t);
    let s = e.runtime.bin.makeReadOptions(n),
      r = Le(t.getType().runtime.bin.listUnknownFields(t), e.field),
      [o, i] = ee(e);
    for (let a of r)
      e.runtime.bin.readField(
        o,
        s.readerFactory(a.data),
        e.field,
        a.wireType,
        s,
      );
    return i();
  }
  function Ye(t, e, n, s) {
    je(e, t);
    let r = e.runtime.bin.makeReadOptions(s),
      o = e.runtime.bin.makeWriteOptions(s);
    if (Te(t, e)) {
      let u = t
        .getType()
        .runtime.bin.listUnknownFields(t)
        .filter((l) => l.no != e.field.no);
      t.getType().runtime.bin.discardUnknownFields(t);
      for (let l of u)
        t.getType().runtime.bin.onUnknownField(t, l.no, l.wireType, l.data);
    }
    let i = o.writerFactory(),
      a = e.field;
    !a.opt &&
      !a.repeated &&
      (a.kind == "enum" || a.kind == "scalar") &&
      (a = Object.assign(Object.assign({}, e.field), { opt: !0 })),
      e.runtime.bin.writeField(a, n, i, o);
    let c = r.readerFactory(i.finish());
    for (; c.pos < c.len; ) {
      let [u, l] = c.tag(),
        m = c.skip(l);
      t.getType().runtime.bin.onUnknownField(t, u, l, m);
    }
  }
  function Te(t, e) {
    let n = t.getType();
    return (
      e.extendee.typeName === n.typeName &&
      !!n.runtime.bin.listUnknownFields(t).find((s) => s.no == e.field.no)
    );
  }
  function je(t, e) {
    T(
      t.extendee.typeName == e.getType().typeName,
      `extension ${t.typeName} can only be applied to message ${t.extendee.typeName}`,
    );
  }
  var We = { ignoreUnknownFields: !1 },
    Ke = {
      emitDefaultValues: !1,
      enumAsInteger: !1,
      useProtoFieldName: !1,
      prettySpaces: 0,
    };
  function bt(t) {
    return t ? Object.assign(Object.assign({}, We), t) : We;
  }
  function wt(t) {
    return t ? Object.assign(Object.assign({}, Ke), t) : Ke;
  }
  function He(t, e) {
    let n = e(kt, Qe);
    return {
      makeReadOptions: bt,
      makeWriteOptions: wt,
      readMessage(s, r, o, i) {
        if (r == null || Array.isArray(r) || typeof r != "object")
          throw new Error(
            `cannot decode message ${s.typeName} from JSON: ${D(r)}`,
          );
        i = i ?? new s();
        let a = new Map(),
          c = o.typeRegistry;
        for (let [u, l] of Object.entries(r)) {
          let m = s.fields.findJsonName(u);
          if (m) {
            if (m.oneof) {
              if (l === null && m.kind == "scalar") continue;
              let p = a.get(m.oneof);
              if (p !== void 0)
                throw new Error(
                  `cannot decode message ${s.typeName} from JSON: multiple keys for oneof "${m.oneof.name}" present: "${p}", "${u}"`,
                );
              a.set(m.oneof, u);
            }
            ze(i, l, m, o, s, t);
          } else {
            let p = !1;
            if (c?.findExtension && u.startsWith("[") && u.endsWith("]")) {
              let d = c.findExtension(u.substring(1, u.length - 1));
              if (d && d.extendee.typeName == s.typeName) {
                p = !0;
                let [h, E] = ee(d);
                ze(h, l, d.field, o, d, !0), Ye(i, d, E(), o);
              }
            }
            if (!p && !o.ignoreUnknownFields)
              throw new Error(
                `cannot decode message ${s.typeName} from JSON: key "${u}" is unknown`,
              );
          }
        }
        return i;
      },
      writeMessage(s, r) {
        let o = s.getType(),
          i = {},
          a;
        try {
          for (let u of o.fields.byMember()) {
            let l;
            if (u.kind == "oneof") {
              let m = s[u.localName];
              if (m.value === void 0) continue;
              if (((a = u.findField(m.case)), !a))
                throw "oneof case not found: " + m.case;
              l = n(a, m.value, r);
            } else (a = u), (l = n(a, s[a.localName], r));
            l !== void 0 && (i[r.useProtoFieldName ? a.name : a.jsonName] = l);
          }
          let c = r.typeRegistry;
          if (c?.findExtensionFor)
            for (let u of o.runtime.bin.listUnknownFields(s)) {
              let l = c.findExtensionFor(o.typeName, u.no);
              if (l && Te(s, l)) {
                let m = _e(s, l, r),
                  p = n(l.field, m, r);
                p !== void 0 && (i[l.field.jsonName] = p);
              }
            }
        } catch (c) {
          let u = a
              ? `cannot encode field ${o.typeName}.${a.name} to JSON`
              : `cannot encode message ${o.typeName} to JSON`,
            l = c instanceof Error ? c.message : String(c);
          throw new Error(u + (l.length > 0 ? `: ${l}` : ""));
        }
        return i;
      },
      readScalar: (s, r, o) => Y(s, r, o, t),
      writeScalar: Qe,
      debug: D,
    };
  }
  function D(t) {
    if (t === null) return "null";
    switch (typeof t) {
      case "object":
        return Array.isArray(t) ? "array" : "object";
      case "string":
        return t.length > 100 ? "string" : `"${t.split('"').join('\\"')}"`;
      default:
        return String(t);
    }
  }
  function ze(t, e, n, s, r, o) {
    let i = n.localName;
    if (n.oneof) {
      if (e === null && n.kind == "scalar") return;
      (t = t[n.oneof.localName] = { case: i }), (i = "value");
    }
    if (n.repeated) {
      if (e === null) return;
      if (!Array.isArray(e))
        throw new Error(
          `cannot decode field ${r.typeName}.${n.name} from JSON: ${D(e)}`,
        );
      let a = t[i];
      for (let c of e) {
        if (c === null)
          throw new Error(
            `cannot decode field ${r.typeName}.${n.name} from JSON: ${D(c)}`,
          );
        let u;
        switch (n.kind) {
          case "message":
            u = n.T.fromJson(c, s);
            break;
          case "enum":
            if (((u = Ne(n.T, c, s.ignoreUnknownFields, !0)), u === void 0))
              continue;
            break;
          case "scalar":
            try {
              u = Y(n.T, c, n.L, !0);
            } catch (l) {
              let m = `cannot decode field ${r.typeName}.${
                n.name
              } from JSON: ${D(c)}`;
              throw (
                (l instanceof Error &&
                  l.message.length > 0 &&
                  (m += `: ${l.message}`),
                new Error(m))
              );
            }
            break;
        }
        a.push(u);
      }
    } else if (n.kind == "map") {
      if (e === null) return;
      if (typeof e != "object" || Array.isArray(e))
        throw new Error(
          `cannot decode field ${r.typeName}.${n.name} from JSON: ${D(e)}`,
        );
      let a = t[i];
      for (let [c, u] of Object.entries(e)) {
        if (u === null)
          throw new Error(
            `cannot decode field ${r.typeName}.${n.name} from JSON: map value null`,
          );
        let l;
        switch (n.V.kind) {
          case "message":
            l = n.V.T.fromJson(u, s);
            break;
          case "enum":
            if (((l = Ne(n.V.T, u, s.ignoreUnknownFields, !0)), l === void 0))
              continue;
            break;
          case "scalar":
            try {
              l = Y(n.V.T, u, A.BIGINT, !0);
            } catch (m) {
              let p = `cannot decode map value for field ${r.typeName}.${
                n.name
              } from JSON: ${D(e)}`;
              throw (
                (m instanceof Error &&
                  m.message.length > 0 &&
                  (p += `: ${m.message}`),
                new Error(p))
              );
            }
            break;
        }
        try {
          a[
            Y(
              n.K,
              n.K == f.BOOL ? (c == "true" ? !0 : c == "false" ? !1 : c) : c,
              A.BIGINT,
              !0,
            ).toString()
          ] = l;
        } catch (m) {
          let p = `cannot decode map key for field ${r.typeName}.${
            n.name
          } from JSON: ${D(e)}`;
          throw (
            (m instanceof Error &&
              m.message.length > 0 &&
              (p += `: ${m.message}`),
            new Error(p))
          );
        }
      }
    } else
      switch (n.kind) {
        case "message":
          let a = n.T;
          if (e === null && a.typeName != "google.protobuf.Value") {
            if (n.oneof)
              throw new Error(
                `cannot decode field ${r.typeName}.${n.name} from JSON: null is invalid for oneof field`,
              );
            return;
          }
          t[i] instanceof I
            ? t[i].fromJson(e, s)
            : ((t[i] = a.fromJson(e, s)),
              a.fieldWrapper &&
                !n.oneof &&
                (t[i] = a.fieldWrapper.unwrapField(t[i])));
          break;
        case "enum":
          let c = Ne(n.T, e, s.ignoreUnknownFields, o);
          c !== void 0 && (t[i] = c);
          break;
        case "scalar":
          try {
            t[i] = Y(n.T, e, n.L, o);
          } catch (u) {
            let l = `cannot decode field ${r.typeName}.${n.name} from JSON: ${D(
              e,
            )}`;
            throw (
              (u instanceof Error &&
                u.message.length > 0 &&
                (l += `: ${u.message}`),
              new Error(l))
            );
          }
          break;
      }
  }
  function Y(t, e, n, s) {
    switch (t) {
      case f.DOUBLE:
      case f.FLOAT:
        if (e === null) return s ? 0 : void 0;
        if (e === "NaN") return Number.NaN;
        if (e === "Infinity") return Number.POSITIVE_INFINITY;
        if (e === "-Infinity") return Number.NEGATIVE_INFINITY;
        if (
          e === "" ||
          (typeof e == "string" && e.trim().length !== e.length) ||
          (typeof e != "string" && typeof e != "number")
        )
          break;
        let r = Number(e);
        if (Number.isNaN(r) || !Number.isFinite(r)) break;
        return t == f.FLOAT && K(r), r;
      case f.INT32:
      case f.FIXED32:
      case f.SFIXED32:
      case f.SINT32:
      case f.UINT32:
        if (e === null) return s ? 0 : void 0;
        let o;
        if (
          (typeof e == "number"
            ? (o = e)
            : typeof e == "string" &&
              e.length > 0 &&
              e.trim().length === e.length &&
              (o = Number(e)),
          o === void 0)
        )
          break;
        return t == f.UINT32 ? _(o) : C(o), o;
      case f.INT64:
      case f.SFIXED64:
      case f.SINT64:
        if (e === null) return s ? x.zero : void 0;
        if (typeof e != "number" && typeof e != "string") break;
        let i = x.parse(e);
        return n ? i.toString() : i;
      case f.FIXED64:
      case f.UINT64:
        if (e === null) return s ? x.zero : void 0;
        if (typeof e != "number" && typeof e != "string") break;
        let a = x.uParse(e);
        return n ? a.toString() : a;
      case f.BOOL:
        if (e === null) return s ? !1 : void 0;
        if (typeof e != "boolean") break;
        return e;
      case f.STRING:
        if (e === null) return s ? "" : void 0;
        if (typeof e != "string") break;
        try {
          encodeURIComponent(e);
        } catch {
          throw new Error("invalid UTF8");
        }
        return e;
      case f.BYTES:
        if (e === null) return s ? new Uint8Array(0) : void 0;
        if (e === "") return new Uint8Array(0);
        if (typeof e != "string") break;
        return ke.dec(e);
    }
    throw new Error();
  }
  function Ne(t, e, n, s) {
    if (e === null) return s ? t.values[0].no : void 0;
    switch (typeof e) {
      case "number":
        if (Number.isInteger(e)) return e;
        break;
      case "string":
        let r = t.findName(e);
        if (r || n) return r?.no;
        break;
    }
    throw new Error(`cannot decode enum ${t.typeName} from JSON: ${D(e)}`);
  }
  function kt(t, e, n, s) {
    var r;
    if (e === void 0) return e;
    if (!n && t.values[0].no === e) return;
    if (s) return e;
    if (t.typeName == "google.protobuf.NullValue") return null;
    let o = t.findNumber(e);
    return (r = o?.name) !== null && r !== void 0 ? r : e;
  }
  function Qe(t, e, n) {
    if (e !== void 0)
      switch (t) {
        case f.INT32:
        case f.SFIXED32:
        case f.SINT32:
        case f.FIXED32:
        case f.UINT32:
          return T(typeof e == "number"), e != 0 || n ? e : void 0;
        case f.FLOAT:
        case f.DOUBLE:
          return (
            T(typeof e == "number"),
            Number.isNaN(e)
              ? "NaN"
              : e === Number.POSITIVE_INFINITY
              ? "Infinity"
              : e === Number.NEGATIVE_INFINITY
              ? "-Infinity"
              : e !== 0 || n
              ? e
              : void 0
          );
        case f.STRING:
          return T(typeof e == "string"), e.length > 0 || n ? e : void 0;
        case f.BOOL:
          return T(typeof e == "boolean"), e || n ? e : void 0;
        case f.UINT64:
        case f.FIXED64:
        case f.INT64:
        case f.SFIXED64:
        case f.SINT64:
          return (
            T(
              typeof e == "bigint" ||
                typeof e == "string" ||
                typeof e == "number",
            ),
            n || e != 0 ? e.toString(10) : void 0
          );
        case f.BYTES:
          return (
            T(e instanceof Uint8Array),
            n || e.byteLength > 0 ? ke.enc(e) : void 0
          );
      }
  }
  function Ze() {
    return He(
      !0,
      (t, e) =>
        function (s, r, o) {
          if (s.kind == "map") {
            let i = {};
            switch (s.V.kind) {
              case "scalar":
                for (let [c, u] of Object.entries(r)) {
                  let l = e(s.V.T, u, !0);
                  T(l !== void 0), (i[c.toString()] = l);
                }
                break;
              case "message":
                for (let [c, u] of Object.entries(r))
                  i[c.toString()] = u.toJson(o);
                break;
              case "enum":
                let a = s.V.T;
                for (let [c, u] of Object.entries(r)) {
                  T(u === void 0 || typeof u == "number");
                  let l = t(a, u, !0, o.enumAsInteger);
                  T(l !== void 0), (i[c.toString()] = l);
                }
                break;
            }
            return o.emitDefaultValues || Object.keys(i).length > 0
              ? i
              : void 0;
          } else if (s.repeated) {
            let i = [];
            switch (s.kind) {
              case "scalar":
                for (let a = 0; a < r.length; a++) i.push(e(s.T, r[a], !0));
                break;
              case "enum":
                for (let a = 0; a < r.length; a++)
                  i.push(t(s.T, r[a], !0, o.enumAsInteger));
                break;
              case "message":
                for (let a = 0; a < r.length; a++) i.push(r[a].toJson(o));
                break;
            }
            return o.emitDefaultValues || i.length > 0 ? i : void 0;
          } else {
            if (r === void 0) return;
            switch (s.kind) {
              case "scalar":
                return e(s.T, r, !!s.oneof || s.opt || o.emitDefaultValues);
              case "enum":
                return t(
                  s.T,
                  r,
                  !!s.oneof || s.opt || o.emitDefaultValues,
                  o.enumAsInteger,
                );
              case "message":
                return te(s.T, r).toJson(o);
            }
          }
        },
    );
  }
  function et() {
    return {
      setEnumType: de,
      initPartial(t, e) {
        if (t === void 0) return;
        let n = e.getType();
        for (let s of n.fields.byMember()) {
          let r = s.localName,
            o = e,
            i = t;
          if (i[r] !== void 0)
            switch (s.kind) {
              case "oneof":
                let a = i[r].case;
                if (a === void 0) continue;
                let c = s.findField(a),
                  u = i[r].value;
                c && c.kind == "message" && !(u instanceof c.T)
                  ? (u = new c.T(u))
                  : c && c.kind === "scalar" && c.T === f.BYTES && (u = j(u)),
                  (o[r] = { case: a, value: u });
                break;
              case "scalar":
              case "enum":
                let l = i[r];
                s.T === f.BYTES && (l = s.repeated ? l.map(j) : j(l)),
                  (o[r] = l);
                break;
              case "map":
                switch (s.V.kind) {
                  case "scalar":
                  case "enum":
                    if (s.V.T === f.BYTES)
                      for (let [d, h] of Object.entries(i[r])) o[r][d] = j(h);
                    else Object.assign(o[r], i[r]);
                    break;
                  case "message":
                    let p = s.V.T;
                    for (let d of Object.keys(i[r])) {
                      let h = i[r][d];
                      p.fieldWrapper || (h = new p(h)), (o[r][d] = h);
                    }
                    break;
                }
                break;
              case "message":
                let m = s.T;
                if (s.repeated)
                  o[r] = i[r].map((p) => (p instanceof m ? p : new m(p)));
                else if (i[r] !== void 0) {
                  let p = i[r];
                  m.fieldWrapper
                    ? m.typeName === "google.protobuf.BytesValue"
                      ? (o[r] = j(p))
                      : (o[r] = p)
                    : (o[r] = p instanceof m ? p : new m(p));
                }
                break;
            }
        }
      },
      equals(t, e, n) {
        return e === n
          ? !0
          : !e || !n
          ? !1
          : t.fields.byMember().every((s) => {
              let r = e[s.localName],
                o = n[s.localName];
              if (s.repeated) {
                if (r.length !== o.length) return !1;
                switch (s.kind) {
                  case "message":
                    return r.every((i, a) => s.T.equals(i, o[a]));
                  case "scalar":
                    return r.every((i, a) => $(s.T, i, o[a]));
                  case "enum":
                    return r.every((i, a) => $(f.INT32, i, o[a]));
                }
                throw new Error(`repeated cannot contain ${s.kind}`);
              }
              switch (s.kind) {
                case "message":
                  return s.T.equals(r, o);
                case "enum":
                  return $(f.INT32, r, o);
                case "scalar":
                  return $(s.T, r, o);
                case "oneof":
                  if (r.case !== o.case) return !1;
                  let i = s.findField(r.case);
                  if (i === void 0) return !0;
                  switch (i.kind) {
                    case "message":
                      return i.T.equals(r.value, o.value);
                    case "enum":
                      return $(f.INT32, r.value, o.value);
                    case "scalar":
                      return $(i.T, r.value, o.value);
                  }
                  throw new Error(`oneof cannot contain ${i.kind}`);
                case "map":
                  let a = Object.keys(r).concat(Object.keys(o));
                  switch (s.V.kind) {
                    case "message":
                      let c = s.V.T;
                      return a.every((l) => c.equals(r[l], o[l]));
                    case "enum":
                      return a.every((l) => $(f.INT32, r[l], o[l]));
                    case "scalar":
                      let u = s.V.T;
                      return a.every((l) => $(u, r[l], o[l]));
                  }
                  break;
              }
            });
      },
      clone(t) {
        let e = t.getType(),
          n = new e(),
          s = n;
        for (let r of e.fields.byMember()) {
          let o = t[r.localName],
            i;
          if (r.repeated) i = o.map(oe);
          else if (r.kind == "map") {
            i = s[r.localName];
            for (let [a, c] of Object.entries(o)) i[a] = oe(c);
          } else
            r.kind == "oneof"
              ? (i = r.findField(o.case)
                  ? { case: o.case, value: oe(o.value) }
                  : { case: void 0 })
              : (i = oe(o));
          s[r.localName] = i;
        }
        return n;
      },
    };
  }
  function oe(t) {
    if (t === void 0) return t;
    if (t instanceof I) return t.clone();
    if (t instanceof Uint8Array) {
      let e = new Uint8Array(t.byteLength);
      return e.set(t), e;
    }
    return t;
  }
  function j(t) {
    return t instanceof Uint8Array ? t : new Uint8Array(t);
  }
  var ie = class {
    constructor(e, n) {
      (this._fields = e), (this._normalizer = n);
    }
    findJsonName(e) {
      if (!this.jsonNames) {
        let n = {};
        for (let s of this.list()) n[s.jsonName] = n[s.name] = s;
        this.jsonNames = n;
      }
      return this.jsonNames[e];
    }
    find(e) {
      if (!this.numbers) {
        let n = {};
        for (let s of this.list()) n[s.no] = s;
        this.numbers = n;
      }
      return this.numbers[e];
    }
    list() {
      return this.all || (this.all = this._normalizer(this._fields)), this.all;
    }
    byNumber() {
      return (
        this.numbersAsc ||
          (this.numbersAsc = this.list()
            .concat()
            .sort((e, n) => e.no - n.no)),
        this.numbersAsc
      );
    }
    byMember() {
      if (!this.members) {
        this.members = [];
        let e = this.members,
          n;
        for (let s of this.list())
          s.oneof ? s.oneof !== n && ((n = s.oneof), e.push(n)) : e.push(s);
      }
      return this.members;
    }
  };
  function xe(t, e) {
    let n = rt(t);
    return e ? n : It(xt(n));
  }
  function tt(t) {
    return xe(t, !1);
  }
  var nt = rt;
  function rt(t) {
    let e = !1,
      n = [];
    for (let s = 0; s < t.length; s++) {
      let r = t.charAt(s);
      switch (r) {
        case "_":
          e = !0;
          break;
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          n.push(r), (e = !1);
          break;
        default:
          e && ((e = !1), (r = r.toUpperCase())), n.push(r);
          break;
      }
    }
    return n.join("");
  }
  var Tt = new Set(["constructor", "toString", "toJSON", "valueOf"]),
    Nt = new Set([
      "getType",
      "clone",
      "equals",
      "fromBinary",
      "fromJson",
      "fromJsonString",
      "toBinary",
      "toJson",
      "toJsonString",
      "toObject",
    ]),
    st = (t) => `${t}$`,
    xt = (t) => (Nt.has(t) ? st(t) : t),
    It = (t) => (Tt.has(t) ? st(t) : t);
  var ae = class {
    constructor(e) {
      (this.kind = "oneof"),
        (this.repeated = !1),
        (this.packed = !1),
        (this.opt = !1),
        (this.default = void 0),
        (this.fields = []),
        (this.name = e),
        (this.localName = tt(e));
    }
    addField(e) {
      T(e.oneof === this, `field ${e.name} not one of ${this.name}`),
        this.fields.push(e);
    }
    findField(e) {
      if (!this._lookup) {
        this._lookup = Object.create(null);
        for (let n = 0; n < this.fields.length; n++)
          this._lookup[this.fields[n].localName] = this.fields[n];
      }
      return this._lookup[e];
    }
  };
  var q = Re(
    "proto3",
    Ze(),
    Ge(),
    Object.assign(Object.assign({}, et()), {
      newFieldList(t) {
        return new ie(t, Ft);
      },
      initFields(t) {
        for (let e of t.getType().fields.byMember()) {
          if (e.opt) continue;
          let n = e.localName,
            s = t;
          if (e.repeated) {
            s[n] = [];
            continue;
          }
          switch (e.kind) {
            case "oneof":
              s[n] = { case: void 0 };
              break;
            case "enum":
              s[n] = 0;
              break;
            case "map":
              s[n] = {};
              break;
            case "scalar":
              s[n] = J(e.T, e.L);
              break;
            case "message":
              break;
          }
        }
      },
    }),
  );
  function Ft(t) {
    var e, n, s, r;
    let o = [],
      i;
    for (let a of typeof t == "function" ? t() : t) {
      let c = a;
      if (
        ((c.localName = xe(a.name, a.oneof !== void 0)),
        (c.jsonName =
          (e = a.jsonName) !== null && e !== void 0 ? e : nt(a.name)),
        (c.repeated = (n = a.repeated) !== null && n !== void 0 ? n : !1),
        a.kind == "scalar" &&
          (c.L = (s = a.L) !== null && s !== void 0 ? s : A.BIGINT),
        a.oneof !== void 0)
      ) {
        let u = typeof a.oneof == "string" ? a.oneof : a.oneof.name;
        (!i || i.name != u) && (i = new ae(u)), (c.oneof = i), i.addField(c);
      }
      a.kind == "message" && (c.delimited = !1),
        (c.packed =
          (r = a.packed) !== null && r !== void 0
            ? r
            : a.kind == "enum" ||
              (a.kind == "scalar" && a.T != f.BYTES && a.T != f.STRING)),
        o.push(c);
    }
    return o;
  }
  var ot = q.makeMessageType("youtube.request.common.Request", () => [
      { no: 1, name: "context", kind: "message", T: Et },
      { no: 2, name: "browseId", kind: "scalar", T: 9 },
    ]),
    Et = q.makeMessageType("youtube.request.common.Context", () => [
      { no: 9, name: "adSignalsInfo", kind: "message", T: Bt },
    ]),
    Bt = q.makeMessageType("youtube.request.common.AdSignalsInfo", () => [
      { no: 1, name: "params", kind: "message", T: St, repeated: !0 },
    ]),
    St = q.makeMessageType("youtube.request.common.Params", () => [
      { no: 1, name: "key", kind: "scalar", T: 9 },
      { no: 2, name: "value", kind: "scalar", T: 9 },
    ]);
  var X = class {
      constructor(e, n, s) {
        this._times = new Map();
        (this.name = e ?? ""),
          (this.debug = s?.debug ?? !1),
          e && this.log(`${e} Start`),
          (this.className = n ?? ""),
          this.init();
      }
      static getInstance(e, n) {
        let s = typeof $task < "u" ? "QuanX" : "Surge";
        return (
          X.instances[s] || (X.instances[s] = X.classNames[s](e, s, n)),
          X.instances[s]
        );
      }
      createProxy(e) {
        return new Proxy(e, { get: this.getFn, set: this.setFn });
      }
      getFn(e, n, s) {
        return e[n];
      }
      setFn(e, n, s, r) {
        return (e[n] = s), !0;
      }
      getJSON(e, n = {}) {
        let s = this.getVal(e);
        return s ? JSON.parse(s) : n;
      }
      setJSON(e, n) {
        this.setVal(JSON.stringify(e), n);
      }
      msg(e = this.name, n = "", s = "", r) {}
      log(e) {
        this.debug &&
          (typeof e == "object" && (e = JSON.stringify(e)), console.log(e));
      }
      timeStart(e) {
        (this._times = this._times || {}), (this._times[e] = Date.now());
      }
      timeEnd(e) {
        if (this._times?.has(e)) {
          let n = Date.now() - this._times[e];
          this.log(`${e}: ${n}ms`), this._times.delete(e);
        } else this.log(`Timer with label ${e} does not exist.`);
      }
      exit() {
        $done({});
      }
      reject() {
        $done();
      }
    },
    R = X;
  (R.instances = {}),
    (R.classNames = {
      QuanX: (e, n, s) => new fe(e, n, s),
      Surge: (e, n, s) => new ce(e, n, s),
    });
  var ue = class extends R {
      getFn(e, n, s) {
        let r = ue.clientAdapter[n] || n;
        return super.getFn(e, r, s);
      }
      setFn(e, n, s, r) {
        let o = ue.clientAdapter[n] || n;
        return super.setFn(e, o, s, r);
      }
      init() {
        try {
          (this.request = this.createProxy($request)),
            (this.response = this.createProxy($response));
        } catch (e) {
          this.log(e.toString());
        }
      }
      getVal(e) {
        return $persistentStore.read(e);
      }
      setVal(e, n) {
        $persistentStore.write(e, n);
      }
      msg(e = this.name, n = "", s = "", r) {
        $notification.post(e, n, s, { url: r ?? "" });
      }
      async fetch(e) {
        return await new Promise((n, s) => {
          let { method: r, body: o, bodyBytes: i, ...a } = e,
            c = i ?? o,
            u = c instanceof Uint8Array;
          $httpClient[r.toLowerCase()](
            { ...a, body: c, "binary-mode": u },
            (l, m, p) => {
              l && s(l);
              let d = u ? "bodyBytes" : "body";
              n({
                status: m.status || m.statusCode,
                headers: m.headers,
                [d]: p,
              });
            },
          );
        });
      }
      done(e) {
        let n = e.response ?? e,
          s,
          r;
        n.bodyBytes
          ? ((s = n.bodyBytes),
            delete n.bodyBytes,
            (r = { ...e }),
            r.response ? (r.response.body = s) : (r.body = s))
          : (r = e),
          $done(r);
      }
    },
    ce = ue;
  ce.clientAdapter = { bodyBytes: "body" };
  var L = class extends R {
      static transferBodyBytes(e, n) {
        return e instanceof ArrayBuffer
          ? n === "Uint8Array"
            ? new Uint8Array(e)
            : e
          : e instanceof Uint8Array && n === "ArrayBuffer"
          ? e.buffer.slice(e.byteOffset, e.byteLength + e.byteOffset)
          : e;
      }
      init() {
        try {
          (this.request = this.createProxy($request)),
            (this.response = this.createProxy($response));
        } catch (e) {
          this.log(e.toString());
        }
      }
      getFn(e, n, s) {
        let r = L.clientAdapter[n] || n,
          o = super.getFn(e, r, s);
        return (
          n === "bodyBytes" && (o = L.transferBodyBytes(o, "Uint8Array")), o
        );
      }
      setFn(e, n, s, r) {
        let o = L.clientAdapter[n] || n,
          i = s;
        return (
          n === "bodyBytes" && (i = L.transferBodyBytes(i, "Uint8Array")),
          super.setFn(e, o, i, r)
        );
      }
      getVal(e) {
        return $prefs.valueForKey(e)?.replace(/\0/g, "");
      }
      setVal(e, n) {
        $prefs.setValueForKey(e, n);
      }
      msg(e = this.name, n = "", s = "", r) {
        $notify(e, n, s, { "open-url": r ?? "" });
      }
      async fetch(e) {
        return await new Promise((n) => {
          let s = { url: "", method: "GET" };
          for (let [r, o] of Object.entries(e))
            r === "id"
              ? (s.sessionIndex = o)
              : r === "bodyBytes"
              ? (s.bodyBytes = L.transferBodyBytes(o, "ArrayBuffer"))
              : (s[r] = o);
          e.bodyBytes && delete s.body,
            $task.fetch(s).then((r) => {
              let o = { status: 200, headers: {} };
              for (let [i, a] of Object.entries(r))
                i === "sessionIndex"
                  ? (o.id = a)
                  : i === "bodyBytes"
                  ? (o.bodyBytes = L.transferBodyBytes(a, "Uint8Array"))
                  : i === "statusCode"
                  ? (o.status = a)
                  : (o[i] = a);
              n(o);
            });
        });
      }
      done(e) {
        let n = e.response ?? e,
          s = {};
        for (let [r, o] of Object.entries(n))
          r === "status"
            ? (s.status = `HTTP/1.1 ${o}`)
            : r === "bodyBytes"
            ? (s.bodyBytes = L.transferBodyBytes(o, "ArrayBuffer"))
            : (s[r] = o);
        $done(s);
      }
    },
    fe = L;
  fe.clientAdapter = { id: "sessionIndex", status: "statusCode" };
  var B = R.getInstance("YouTube", { debug: !1 });
  var le = class {
    constructor(e, n) {
      this.decoder = new TextDecoder("utf-8", { fatal: !1, ignoreBOM: !0 });
      B.log(n),
        (this.name = n),
        (this.msgType = e),
        Object.assign(
          this,
          B.getJSON("YouTubeAdvertiseInfo", {
            whiteNo: [],
            blackNo: [],
            whiteEml: [],
            blackEml: [],
          }),
        ),
        (this.argument = this.decodeArgument());
    }
    decodeArgument() {
      let e = {
        lyricLang: "zh-Hans",
        captionLang: "zh-Hans",
        blockUpload: !0,
        immersive: !0,
      };
      return typeof $argument == "string" && !$argument.includes("{{{")
        ? JSON.parse($argument)
        : e;
    }
    fromBinary(e) {
      return (this.message = this.msgType.fromBinary(e)), this;
    }
    async modify() {
      let e = this.pure();
      return e instanceof Promise ? await e : e;
    }
    toBinary() {
      return this.message.toBinary();
    }
    listUnknownFields(e) {
      return e instanceof I ? e.getType().runtime.bin.listUnknownFields(e) : [];
    }
    save() {
      if (this.needSave) {
        B.log("Update Config");
        let e = {
          whiteNo: this.whiteNo,
          blackNo: this.blackNo,
          whiteEml: this.whiteEml,
          blackEml: this.blackEml,
        };
        B.setJSON(e, "YouTubeAdvertiseInfo");
      }
    }
    done(e) {
      this.save();
      let n = e.bodyBytes;
      this.needProcess && (n = this.toBinary()),
        (e.headers["Content-Encoding"] = "identity"),
        (e.headers["Content-Length"] = (n?.length ?? 0)?.toString()),
        B.done({ response: { ...e, bodyBytes: n } });
    }
    doneResponse() {
      this.save(),
        this.needProcess && B.done({ bodyBytes: this.toBinary() }),
        B.exit();
    }
    iterate(e = {}, n, s) {
      let r = typeof e == "object" ? [e] : [];
      for (; r.length; ) {
        let o = r.pop(),
          i = Object.keys(o);
        if (typeof n == "symbol") {
          for (let a of Object.getOwnPropertySymbols(o))
            if (a.description === n.description) {
              s(o, r);
              break;
            }
        }
        for (let a of i)
          a === n ? s(o, r) : typeof o[a] == "object" && r.push(o[a]);
      }
    }
    isAdvertise(e) {
      let n = this.listUnknownFields(e)[0];
      return n ? this.handleFieldNo(n) : this.handleFieldEml(e);
    }
    handleFieldNo(e) {
      let n = e.no;
      if (this.whiteNo.includes(n)) return !1;
      if (this.blackNo.includes(n)) return !0;
      let r = this.decoder.decode(e.data).includes("pagead");
      return (
        r ? this.blackNo.push(n) : this.whiteNo.push(n), (this.needSave = !0), r
      );
    }
    handleFieldEml(e) {
      let n = !1,
        s = "";
      return (
        this.iterate(e, "renderInfo", (r, o) => {
          if (
            ((s = r.renderInfo.layoutRender.eml.split("|")[0]),
            this.whiteEml.includes(s))
          )
            n = !1;
          else if (this.blackEml.includes(s) || /shorts(?!_pivot_item)/.test(s))
            n = !0;
          else {
            let i = r?.videoInfo?.videoContext?.videoContent;
            if (i) {
              let a = this.listUnknownFields(i)[0];
              (n = this.decoder.decode(a.data).includes("pagead")),
                n ? this.blackEml.push(s) : this.whiteEml.push(s),
                (this.needSave = !0);
            }
          }
          o.length = 0;
        }),
        n
      );
    }
    isShorts(e) {
      let n = !1;
      return (
        this.iterate(e, "eml", (s, r) => {
          (n = /shorts(?!_pivot_item)/.test(s.eml)), (r.length = 0);
        }),
        n
      );
    }
  };
  var W = class extends le {
    constructor(e = ot, n = "Request") {
      super(e, n);
    }
    pure() {
      return (
        (this.message.context.adSignalsInfo.params.length = 0),
        (this.needProcess = !0),
        this
      );
    }
  };
  var Ot = new W();
  try {
    let t = Ot.fromBinary(B.request.bodyBytes).pure().toBinary();
    B.done({ bodyBytes: t });
  } catch (t) {
    B.log(t.toString()), B.exit();
  }
})();
